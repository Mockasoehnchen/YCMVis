import math
import GenerateODEsFromReactions as YCM_tools


def MET_CWS():
    """
    Cell Wall Synthesis Module
    16/10/2015 - Jens Hahn
    Based on calculation by Sebastian Thieme, Marcus Krantz and Jens Hahn:
    ----------------------------------------------------------------------
    Proteins and C-polymers
        Model needs:
            lipids
            glucan (UDP-N-acetyl-alpha-D-glucosamine [cytoplasm])
            mannan [endoplasmic reticulum]
            chitin
            B_Protein_other     (Biomass_Protein)
        Model output:
            Cell wall biomass
        Based on CellWall composition from PMID: 16760306 (http://mmbr.asm.org/content/70/2/317.long)
        Cell wall unit consists of 0.15 protein mass + .85 c-polymers
        .85 c-polymers constisting of .84 glucan + .15 mannan + .01 chitosan
    """
    info = """
    Cell Wall Synthesis Module
    16/102015 - Jens Hahn                                                 

    Based on calculation by Sebastian Thieme, Marcus Krantz and Jens Hahn:
    ----------------------------------------------------------------------
    Proteins and c-polymers                                               
    Model needs:                                                          
        lipid_mass                                                        
        glucan (UDP-N-acetyl-alpha-D-glucosamine [cytoplasm])             
        mannan [endoplasmic reticulum]                                    
        chitin                                                            
        B_Protein_other     (Biomass_Protein)                             
    Model output:                                                         
        Cell wall biomass                                                 

    Based on CellWall composition from PMID: 16760306 (http://mmbr.asm.org/content/70/2/317.long)
    Cell wall unit consists of 0.15 protein mass + .85 c-polymers
    .85 c-polymers constisting of .84 glucan + .15 mannan + .01 chitosan"""

    initpars = {}
    initpars['glucan_mass'] = 161.1406  # g/mol
    initpars['chitin_mass'] = 200.176616  # g/mol
    initpars['mannan_mass'] = 161.1406  # g/mol
    initpars['lipid_mass'] = 617.9634  # g/mol
    initpars['average_protein_mass'] = 20265.6205970149  # g/mol
    initpars['k_cw'] = 2.  # 1/pg
    initpars['rho_cw'] = 1.1  # calculated using volume # pg/fL

    initvars = {}
    initvars['m_cw'] = 5.4  # pg
    initvars['glucan'] = 0.1  # mM  # assumption
    initvars['glucan_cw'] = 4883.05  # mM
    initvars['chitin'] = 0.1  # mM  # former chitosan  # assumption
    initvars['chitin_cw'] = 46.80  # mM
    initvars['mannan'] = 0.1  # mM
    initvars['mannan_cw'] = 871.97  # mM
    initvars['lipid'] = 0.1  # mM
    # initvars['lipid_pm'] = 42.93  # mM in cell wall compartment
    initvars['proteins'] = 8.3e-5  # mM
    initvars['proteins_cw'] = 8.16  # mM
    # initvars['proteins_pm'] = 1.31  # mM in cell wall compartment
    initvars['V_cw'] = 4.9e-15  # L, should be overwritten by VOL_core
    initvars['int_vol'] = 24.0e-15  # L
    initvars['pm_vol'] = 0.28e-15  # L # guessed

    reactions = {}
    reactions['CW_mannan'] = {'rate': {}, 'substrates': {}, 'products': {}, 'modifiers': {}}
    reactions['CW_mannan']['rate'] = '((1./(1.+ exp(k_cw*(m_cw - (V_cw * rho_cw * 1e15))))))*(mannan)*int_vol'
    reactions['CW_mannan']['substrates'] = {'mannan': 106.8991}
    reactions['CW_mannan']['products'] = {'mannan_cw': 106.8991}
    reactions['CW_mannan']['modifiers'] = {'m_cw': 1}

    reactions['CW_chitin'] = {'rate': {}, 'substrates': {}, 'products': {}, 'modifiers': {}}
    reactions['CW_chitin']['rate'] = '((1./(1.+ exp(k_cw*(m_cw - (V_cw * rho_cw * 1e15))))))*(chitin)*int_vol'
    reactions['CW_chitin']['substrates'] = {'chitin': 5.7369}
    reactions['CW_chitin']['products'] = {'chitin_cw': 5.7369}
    reactions['CW_chitin']['modifiers'] = {'m_cw': 1}

    reactions['CW_glucan'] = {'rate': {}, 'substrates': {}, 'products': {}, 'modifiers': {}}
    reactions['CW_glucan']['rate'] = '((1./(1.+ exp(k_cw*(m_cw - (V_cw * rho_cw * 1e15))))))*(glucan)*int_vol'
    reactions['CW_glucan']['substrates'] = {'glucan': 598.6347}
    reactions['CW_glucan']['products'] = {'glucan_cw': 598.6347}
    reactions['CW_glucan']['modifiers'] = {'m_cw': 1}

    reactions['CW_proteins'] = {'rate': {}, 'substrates': {}, 'products': {}, 'modifiers': {}}
    reactions['CW_proteins']['rate'] = '((1./(1.+ exp(k_cw*(m_cw - (V_cw * rho_cw * 1e15))))))*(proteins)*int_vol'
    reactions['CW_proteins']['substrates'] = {'proteins': 1.}
    reactions['CW_proteins']['products'] = {'proteins_cw': 1.}
    reactions['CW_proteins']['modifiers'] = {'m_cw': 1}

    alg_eqs = {}
    alg_eqs[
        'm_cw'] = '(((glucan_cw*V_cw)*1e-3)*glucan_mass + ((chitin_cw*V_cw)*1e-3)*chitin_mass + ((mannan_cw*V_cw)*1e-3)*mannan_mass + ((proteins_cw*V_cw)*1e-3)*average_protein_mass)*1e12'

    sp_annotations = {'m_cw': 'SBO:0000504',
                      'chitin': 'CHEBI:17029',
                      'chitin_cw': 'CHEBI:17029',
                      'mannan': 'CHEBI:28808',
                      'mannan_cw': 'CHEBI:28808',
                      'glucan': 'CHEBI:37671',  # (1,3)-beta-D-glucan
                      'glucan_cw': 'CHEBI:37671',  # (1,3)-beta-D-glucan
                      'lipid': 'YCM:lipid',
                      # 'lipid_pm': 'YCM:lipid',
                      'proteins': 'YCM:B_Protein_other',
                      # 'proteins_pm': 'YCM:B_Protein_other',
                      'proteins_cw': 'YCM:B_Protein_other',
                      'V_cw': 'SBO:0000468',
                      'int_vol': 'SBO:0000468',
                      'pm_vol': 'SBO:0000468'}

    com_annotations = {'cell_wall': 'GO:0005618',
                       'intracellular': 'GO:0044424',
                       'plasma_membrane': 'GO:0005886'}

    sp_compartment = {'m_cw': 'cell_wall',
                      'glucan': 'intracellular',
                      'glucan_cw': 'cell_wall',
                      'mannan': 'intracellular',
                      'mannan_cw': 'cell_wall',
                      'chitin': 'intracellular',
                      'chitin_cw': 'cell_wall',
                      'lipid': 'intracellular',
                      # 'lipid_pm': 'cell_wall',
                      'proteins': 'intracellular',
                      # 'proteins_pm': 'plasma_membrane',
                      'proteins_cw': 'cell_wall',
                      'V_cw': 'cell_wall',
                      'int_vol': 'intracellular',
                      'pm_vol': 'plasma_membrane'}

    sp_states = {'m_cw': '0',
                 'mannan': '0',
                 'mannan_cw': '0',
                 'chitin': '0',
                 'chitin_cw': '0',
                 'glucan': '0',
                 'glucan_cw': '0',
                 'lipid': '0',
                 # 'lipid_pm': '0',
                 'proteins': '0',
                 'proteins_cw': '0',
                 # 'proteins_pm': '0',
                 'V_cw': '0',
                 'int_vol': '0',
                 'pm_vol': '0'}

    units = {'m_cw': 'pg',  # TODO: FIXME: set unit for CW
             'mannan': 'mM',
             'mannan_cw': 'mM',
             'chitin': 'mM',
             'chitin_cw': 'mM',
             'glucan': 'mM',
             'glucan_cw': 'mM',
             'lipid': 'mM',
             # 'lipid_pm': 'mM',
             'proteins': 'mM',
             'proteins_cw': 'mM',
             # 'proteins_pm': 'mM',
             'V_cw': 'L',
             'int_vol': 'L',
             'pm_vol': 'L'}

    units_pars = {'glucan_mass': 'g/mol',
                  'chitin_mass': 'g/mol',
                  'mannan_mass': 'g/mol',
                  'lipid_mass': 'g/mol',
                  'average_protein_mass': 'g/mol',
                  'k_cw': '1/pg',
                  'rho_cw': 'pg/fL'}

    modeldict = {}
    modeldict['info'] = info
    modeldict['type'] = 'ODE'
    modeldict['name'] = "MET_CWS"
    modeldict['initpars'] = initpars
    modeldict['initvars'] = initvars
    modeldict['reactions'] = reactions
    modeldict['sp_annotations'] = sp_annotations
    modeldict['com_annotations'] = com_annotations
    modeldict['sp_compartment'] = sp_compartment
    modeldict['units'] = units

    modeldict['alg_eqs'] = alg_eqs
    modeldict['sp_states'] = sp_states
    modeldict['units_pars'] = units_pars

    modeldict['odes'] = YCM_tools.generate_odes_from_reactions(reactions, modeldict['sp_compartment'],
                                                               modeldict['sp_annotations'], modeldict['units'],
                                                               modeldict['com_annotations'])


    return modeldict