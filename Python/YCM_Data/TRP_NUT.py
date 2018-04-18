import GenerateODEsFromReactions as YCM_tools
import math


def TRP_NUT():
    """
    Transport blackbox model including glucose import and Pma1 proton pump
    """

    info = """Transport blackbox model including glucose import and Pma1 proton pump
            by Jannis Uhlendorf"""

    initvars = {}  # initial conditions
    initpars = {}  # parameters
    odes = {}  # ODEs
    alg_eqs = {}
    reactions = {}

    ###### PARAMETERS ######
    ########################
    initpars['V_MAX_HXT'] = 9.1883e-16  # 7.0965e-16 # mmol/s/um^2 [see wiki TRP_core for calculation]
    initpars['KM_HXT'] = 1.7  # mM [Teusink 1998]
    initpars['KI_HXT'] = 0.91  # interactive constant [Teusink 1998]
    initpars['R'] = 8314.5  # uJ K^-1 mmol^-1
    initpars['T'] = 303.15  # temperature [K]
    initpars['F'] = 96485000.  # Faraday constant[uC/mmol]
    initpars['pi'] = math.pi  # Jens: added pi

    ##### VOL/SUR PARAMS #####
    ##########################
    initvars['VOLUME'] = 16.0e-15  # l
    initvars['SURFACE'] = 65.63  # um^2
    initvars['VOLUME_EXT'] = 0.01  # l
    initvars['glucose_cyt'] = 1.5  # mM [Teusink 1998]
    initvars['glucose_ext'] = 111.0  # mM
    initvars['plasmamembrane_vol'] = 0.52  # fL  ## 8 nm plamamembrane (calculated with surface)

    initvars['ATP'] = 2.  # mM [Lagunas 1983]  #1.5e-3
    initvars['ADP'] = 0.32  # mM [Lagunas 1983]  #6.5e-4
    initvars['glc_uptake'] = initvars['SURFACE'] * initpars['V_MAX_HXT'] * (
    (initvars['glucose_ext'] / initpars['KM_HXT']) - (initvars['glucose_cyt'] / initpars['KM_HXT'])) / (
                             1 + (initvars['glucose_ext'] / initpars['KM_HXT']) + (
                             initvars['glucose_cyt'] / initpars['KM_HXT']) + initpars['KI_HXT'] * initvars[
                                 'glucose_ext'] * initvars['glucose_cyt'] / (initpars['KM_HXT'] ** 2))

    initvars['glycerol_cyt'] = 0.2  # as in Klipp 2005
    initvars['glycerol_ext'] = 0.2  # as in Klipp 2005

    ##### GLUCOSE IMPORT #####
    # * hexose transporter   #
    reactions['v_hxt'] = {'rate': {}, 'substrates': {}, 'products': {}, 'modifiers': {}}
    reactions['v_hxt'][
        'rate'] = 'SURFACE * V_MAX_HXT * ( (glucose_ext/KM_HXT) - (glucose_cyt/KM_HXT) ) / ( 1 + (glucose_ext/KM_HXT) + (glucose_cyt/KM_HXT) + KI_HXT*glucose_ext*glucose_cyt/(KM_HXT**2))'  # mmol/s
    reactions['v_hxt']['substrates'] = {}  # {'glucose_ext': 1}
    reactions['v_hxt']['products'] = {'glucose_cyt': 1}
    reactions['v_hxt']['modifiers'] = {'SURFACE': 1, 'VOLUME': 1, 'glucose_ext': 1}
    # odes['glucose_cyt']            = ' %(v_hxt)s' %{'v_hxt': reactions['v_hxt']['rate']} # mM/s

    # Tracking glucose uptake
    radius = '(3./4./pi * VOLUME)**(1/3)'
    alg_eqs['SURFACE'] = '4*pi*(%(radius)s)**2' % {'radius': radius}
    alg_eqs[
        'glc_uptake'] = 'SURFACE * V_MAX_HXT * ( (glucose_ext/KM_HXT) - (glucose_cyt/KM_HXT) ) / ( 1 + (glucose_ext/KM_HXT) + (glucose_cyt/KM_HXT) + KI_HXT*glucose_ext*glucose_cyt/(KM_HXT**2))'  # mM/s before it was: mmol/s/um^2

    ##### Transport from MET #####
    ##############################
    initvars['CO2'] = 0.0132  # mM TODO: FIXME extracellular value taken
    initvars['EtOH'] = 0.6  # mM (educated) guess
    # Henry's solubility for CO2 Kh = 29.41 atm/M
    # CO2 percentage in air: 387 ppm
    # CO2 in medium (which is modelled as liter of water): 132 mM
    initvars['CO2_ext'] = 0.0132  # mM
    initvars['EtOH_ext'] = initvars['EtOH']  # mM

    # diffusions
    initpars['CO2_mem_permeability'] = 3.2e-1  # dm/s, Missner & Pohl, ChemPhysChem 2009.

    # reaction 6: CO2 diffusion
    reactions['v_C02dif'] = {'rate': {}, 'substrates': {}, 'products': {}, 'modifiers': {}}
    # QUESTION: is the scaling ok / surface to dm^2, volume to l?
    reactions['v_C02dif']['rate'] = 'CO2_mem_permeability * SURFACE * 1e-10 * 1e15 * (CO2 - CO2_ext)'
    reactions['v_C02dif']['substrates'] = {'CO2': 1.}
    reactions['v_C02dif']['products'] = {'CO2_ext': 1.}
    reactions['v_C02dif']['modifiers'] = {}

    initpars['EtOH_mem_permeability'] = 2.1e-4  # dm/s
    # reaction 7: EtOH diffusion
    reactions['v_EtOHdif'] = {'rate': {}, 'substrates': {}, 'products': {}, 'modifiers': {}}
    reactions['v_EtOHdif']['rate'] = 'EtOH_mem_permeability * SURFACE * 1e-10 * 1e15 * (EtOH - EtOH_ext)'
    reactions['v_EtOHdif']['substrates'] = {'EtOH': 1.}
    reactions['v_EtOHdif']['products'] = {'EtOH_ext': 1.}
    reactions['v_EtOHdif']['modifiers'] = {}

    initpars['glycerol_mem_permeability'] = 0.005 / initvars['SURFACE']  # sec^-1 KLipp 2005
    reactions['glycerol_trp'] = {'rate': {}, 'substrates': {}, 'products': {}, 'modifiers': {}}
    reactions['glycerol_trp']['rate'] = 'glycerol_mem_permeability * SURFACE * (glycerol_cyt - glycerol_ext)'
    reactions['glycerol_trp']['substrates'] = {'glycerol_cyt': 1}
    reactions['glycerol_trp']['products'] = {'glycerol_ext': 1}
    reactions['glycerol_trp']['modifiers'] = {}

    modeldict = {}
    modeldict['type'] = 'ODE'
    modeldict['name'] = 'TRP_NUT'
    modeldict['initvars'] = initvars
    modeldict['initpars'] = initpars
    modeldict['alg_eqs'] = alg_eqs
    modeldict['reactions'] = reactions

    modeldict['sp_states'] = {
        'VOLUME': '0',
        'SURFACE': '0',
        'VOLUME_EXT': '0',
        'glucose_cyt': '0',
        'glucose_ext': '0',
        'ATP': '-4',
        'ADP': '-3',
        'Pi': '-2',
        'Pi_ext': '-2',
        'plasmamembrane_vol': '0',
        'glc_uptake': '0',
        'glycerol_cyt': '0',
        'glycerol_ext': '0',
        'EtOH': '0',
        'AA': '0',
        'CO2': '0',
        'CO2_ext': '0',
        'EtOH_ext': '0',
        'AA_ext': '0',
        'AA_trp_check': '0',
        'NH4': '+1',
        'NH4_ext': '+1',
    }

    modeldict['sp_compartment'] = {
        'VOLUME': 'intracellular',  # 'cytosol',
        'SURFACE': 'intracellular',  # 'cytosol',
        'VOLUME_EXT': 'extracellular',
        'glucose_ext': 'extracellular',
        'glucose_cyt': 'intracellular',  # 'cytosol',
        'ATP': 'intracellular',  # 'cytosol',
        'ADP': 'intracellular',  # 'cytosol',
        'Pi': 'intracellular',  # 'cytosol',
        'Pi_ext': 'extracellular',
        'plasmamembrane_vol': 'plasma_membrane',
        'glc_uptake': 'intracellular',  # 'cytosol',
        'glycerol_cyt': 'intracellular',
        'glycerol_ext': 'extracellular',
        'EtOH': 'intracellular',  # 'cytosol',
        'AA': 'intracellular',  # 'cytosol',
        'CO2': 'intracellular',  # 'cytosol',
        'CO2_ext': 'extracellular',
        'EtOH_ext': 'extracellular',
        'AA_ext': 'extracellular',
        'AA_trp_check': 'intracellular',  # 'cytosol',
        'NH4': 'intracellular',  # 'cytosol',
        'NH4_ext': 'extracellular',
    }

    modeldict['sp_annotations'] = {
        'VOLUME': 'SBO:0000468',
        'SURFACE': 'SBO:0000467',
        'VOLUME_EXT': 'SBO:0000468',
        'glucose_ext': 'CHEBI:17634',
        'glucose_cyt': 'CHEBI:17634',
        'ATP': 'CHEBI:30616',  # ATP, charge 0
        'ADP': 'CHEBI:456216',  # ATP, charge 0
        'Pi': 'CHEBI:43474',
        'Pi_ext': 'CHEBI:43474',
        'plasmamembrane_vol': 'SBO:0000468',
        'glc_uptake': 'SBO:0000627',
        'glycerol_cyt': 'CHEBI:17754',
        'glycerol_ext': 'CHEBI:17754',
        'AA_trp_check': 'YCM:AA_check',
        'EtOH': 'CHEBI:16236',
        'EtOH_ext': 'CHEBI:16236',
        'AA': 'YCM:AA',
        'CO2': 'CHEBI:16526',
        'CO2_ext': 'CHEBI:16526',
        'AA_ext': 'YCM:AA',
        'NH4': 'CHEBI:28938',
        'NH4_ext': 'CHEBI:28938',
    }

    modeldict['units'] = {
        'VOLUME': 'L',
        'VOLUME_EXT': 'L',
        'SURFACE': 'um**2',
        'glucose_cyt': 'mM',
        'glucose_ext': 'mM',
        'v_m': 'V',
        'ATP': 'mM',
        'ADP': 'mM',
        'Pi': 'mM',
        'Pi_ext': 'mM',
        'plasmamembrane_vol': 'L',
        'glc_uptake': 'mM/s',
        'glycerol_cyt': 'mM',
        'glycerol_ext': 'mM',
        'EtOH': 'mM',
        'AA': 'mM',
        'CO2': 'mM',
        'CO2_ext': 'mM',
        'EtOH_ext': 'mM',
        'AA_ext': 'mM',
        'AA_trp_check': 'mM',
        'NH4': 'mM',
        'NH4_ext': 'mM',
    }

    modeldict['units_pars'] = {
        'F': 'uC/mmol',
        'GP_NH4': 'uS/um**2',
        'KI_HXT': 'mM/s',  # derived from formula, possible error? - Jens
        'KM_HXT': 'mM',
        'R': 'uJ/(K mmol)',
        'T': 'K',
        'V_MAX_HXT': 'mmol/(s um**2)',
        'k_AA_TRP': '1/s',
        'CO2_mem_permeability': 'dm/s',
        'Pi_mem_permeability': 'dm/s',
        'EtOH_mem_permeability': 'dm/s',
        'glycerol_mem_permeability': 'dm/s',
        'Z_NH4': 'dimensionless',
        'pi': 'dimensionless'
    }

    modeldict['com_annotations'] = {'cytosol': 'GO:0005829', 'extracellular': 'GO:0005576',
                                    'plasma_membrane': 'GO:0005886', 'cell': 'GO:0005623',
                                    'intracellular': 'GO:0044424'}
    modeldict['info'] = info

    odes = YCM_tools.generate_odes_from_reactions(reactions,
                                                  modeldict['sp_compartment'],
                                                  modeldict['sp_annotations'],
                                                  modeldict['units'],
                                                  modeldict['com_annotations']
                                                  )
    # initialize all ODEs to 0 - this is not necessary, since the ODEgenerator does the same thing - Jens 22/09/2016
    for key in initvars.keys():
        if not odes.has_key(key):
            odes[key] = '0'
    modeldict['odes'] = odes


    return modeldict