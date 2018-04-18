def get_compartment_species(sp_annotations, sp_compartment):
    """
    Get a dictionary mapping the compartments to their corresponding species describing their size
    Parameters
    ----------
    sp_annotations: dict
        species identifiers
    sp_compartment: dict
        compartment identifiers
    Return
    ------
    compartment_2_species: dict
        mapping of compartments and species
    """
    compartment_2_species = {}  # mapping between compartment ID and YCM species ID for compartment volume
    for sp in sp_annotations:
        if sp_annotations[sp] == 'SBO:0000468':
            compartment_2_species[sp_compartment[sp]] = sp
    return compartment_2_species


def generate_odes_from_reactions(reaction_dict, sp_compartment, sp_annotations, units, com_annotations,
                                 no_dilution=None):
    """
    generate the ODE dictionary from the reaction dictionary
    reaction-rates are assumed to be in mmol / second
    Written by Jannis Uhlendorf
    Info
    ----
    Reaction rate_unit specifies the unit of the reaction rate flux (per second).
    Possible values are: molecules, mmol and mol
    Parameters
    ----------
    reaction_dict : dict
        reaction dictionary (see wiki for spec.)
    sp_compartment: dict
        species compartment dict (localisation)
    sp_annotations: dict
        species identifiers
    units: dict
        species units
    com_annotations: dict
        compartment identifiers
    no_dilution: list
        list of species to skip dilution factor
    Return
    -------
    odes: dict
        ODE dictionary as used in module dictionary
    """

    conversion_factors = {('mm', 'fl'): '1e15/vol',
                          ('mm', 'l'): '1./vol',
                          ('molecules', 'fl'): '6.022140857e20',
                          ('molecules', 'l'): '6.022140857e20',
                          ('mmol', 'fl'): '',
                          ('mmol', 'l'): '',
                          ('l', 'l'): '', }

    if sp_compartment == {}:
        raise Exception('Generation of ODEs failed. Species compartment required.')
    if sp_annotations == {}:
        raise Exception('Generation of ODEs failed. Species annotations are required.')
    if units == {}:
        raise Exception('Generation of ODEs failed. Units are required.')

    # mapping between compartments and species describing the size of the comp.
    compartment_to_species = get_compartment_species(sp_annotations, sp_compartment)

    odes = {}
    for reaction in reaction_dict:
        for sign, participant in [('-', 'substrates'), ('', 'products')]:
            rate = reaction_dict[reaction]['rate']
            for elem in reaction_dict[reaction][participant]:
                # get compartment + compartment unit
                compartment = compartment_to_species[sp_compartment[elem]]
                compartment_unit = units[compartment]
                # get conversion factor
                try:
                    conv_fac = conversion_factors[(units[elem].lower(), compartment_unit.lower())]
                except KeyError:
                    raise Exception(
                        'No conversion factor defined for species unit {} and compartment unit {}.'.format(units[elem],
                                                                                                           compartment_unit))
                stoichiometry = float(reaction_dict[reaction][participant][elem])

                # add to ode
                if conv_fac == '':
                    ode = '{0}{1} * ({2})'.format(sign, stoichiometry, rate)
                else:
                    ode = '{0}{1} * ({2}) * ({3})'.format(sign, stoichiometry, conv_fac.replace('vol', compartment),
                                                          rate)
                if elem in odes:
                    odes[elem] += ' + ' + ode
                else:
                    odes[elem] = ode

    # initialize ODEs that do not participate in a reaction to 0
    for sp in sp_compartment:
        if sp not in odes:
            odes[sp] = '0'

    # volume regulation
    # if growth rate is set
    vol_cor = False
    growth_rate = [elem for elem in sp_annotations if sp_annotations[elem] == 'SBO:0000610']
    if growth_rate:
        growth_rate = growth_rate[0]
        vol_cor = True
    else:
        pass

    # add dilution term
    if vol_cor:
        cell_volume = [elem for elem in sp_annotations if sp_annotations[elem] == 'SBO:0000468' and sp_compartment[elem]
                       == sp_compartment[growth_rate]]
        if cell_volume:
            cell_volume = cell_volume[0]
        # add volume regulation
        for elem in odes:
            if units[elem].lower() == 'mm' and not com_annotations[sp_compartment[elem]] == 'GO:0005576' and \
                            elem not in no_dilution:
                odes[elem] += ' - ({0}/{1}) * {2}'.format(growth_rate, cell_volume, elem)


    return odes