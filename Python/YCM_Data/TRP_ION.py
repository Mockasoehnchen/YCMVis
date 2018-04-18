from math import *
import GenerateODEsFromReactions as YCM_tools


def TRP_ION():
    '''

    '''
    module_dict = {}

    ### Initial Values for Species:
    module_dict['initvars'] = {'h_cyt': 9.999999999999999e-05,
                               'E_ena1': -0.26068125461319835,
                               'v_v': -0.075,
                               'atp_cyt': 2.0,
                               'acid_cytosol': 100.0,
                               'surface_vac': 22.446611560896944,
                               'k_cyt': 150.01,
                               'ca_ext': 0.901,
                               'surface': 65.63429036676621,
                               'E_nha1': 0.06422663857577166,
                               'adp_cyt': 0.32,
                               'r_vac': 1.336504617571559,
                               'v_m': -0.1,
                               'my_J_tok1': -5.443609861739251e-17,
                               'E_pma1': -0.22653058320610656,
                               'E_vma1': -0.28668251754346624,
                               'cytosol': 5e-14,
                               'h_ext': 0.00031622776601683794,
                               'extracellular': 0.001,
                               'vacuole': 1.0000000000000002e-14,
                               'cl_cyt': 0.1,
                               'h_vac': 0.00031622776601683794,
                               'cl_vac': 0.5,
                               'na_ext': 1.711156741958,
                               'pi_cyt': 50.0,
                               'na_cyt': 2.0,
                               'k_vac': 150.0,
                               'acid_cytosol_h': 100.0,
                               'D_G_ATP': -24758683.012911268,
                               'my_J_Cl': 1.756091125854408e-17,
                               'my_J_K': -1.4453360363294855e-15,
                               'my_J_trk12': -4.440363366557471e-16,
                               'my_J_Ca': -7.347677026618157e-16,
                               'my_J_H': -1.4157547886427248e-13,
                               'ca_cyt': 0.000125,
                               'cl_ext': 1.711156741958,
                               'gp_trk12': 1.5361006904090033e-08,
                               'my_J_pma1': 1.0713886104030041e-13,
                               'my_J_ena1': 6.773596858664518e-15,
                               'ca_vac': 100.0,
                               'gp_tok1': 1.883164096414427e-09,
                               'myph': 7.0,
                               'r': 2.285390748668477,
                               'na_vac': 10.0,
                               'my_J_Na': -3.2626774708680094e-13,
                               'my_J_nha1': -1.117157991629804e-14,
                               'k_ext': 16.6,
                               'par_vol': 1.}

    ### Initial Values for Parameters:
    module_dict['initpars'] = {'acid_Ka': 0.0001,
                               'v_tok1_halfmax': -0.0034,
                               'I_MAX_VMA_1': 1e-06,
                               'G_NHA1': 1e-07,
                               'd_tok1': -1.04,
                               'kf_buffer': 1e-10,
                               'I_MAX_PMA1': 1.6e-07,
                               'gv_ca': 0.001,
                               'gv_k': 0.1,
                               'gv_h': 0.01,
                               'd_trk12': 1.0,
                               'gp_trk12_0': 2.228e-07,
                               'liter_2_fl': 1000000000000000.0,
                               'A': 6.02214129e+20,
                               'v_trk12_halfmax': -0.168,
                               'F': 96485000.0,
                               'gv_cl': 0.0,
                               'c_m': 1e-08,
                               'gp_cl': 1e-09,
                               'R': 8314.5,
                               'T': 303.15,
                               'gp_tok1_0': 9e-08,
                               'gp_h': 1.6e-06,
                               'gp_ca': 1e-08,
                               'gp_k': 5e-08,
                               'gv_na': 0.0,
                               'I_MAX_ENA1': 1e-08,
                               'D_G_ATP_0': -30000000.0,
                               'kb_buffer': 1e-06,
                               'gp_na': 5e-06}

    module_dict['sp_states'] = {'h_cyt': '0',
                                'E_ena1': '0',
                                'v_v': '0',
                                'atp_cyt': '-4',
                                'acid_cytosol': '0',
                                'surface_vac': '0',
                                'k_cyt': '0',
                                'ca_ext': '0',
                                'surface': '0',
                                'E_nha1': '0',
                                'adp_cyt': '-3',
                                'r_vac': '0',
                                'v_m': '0',
                                'my_J_tok1': '0',
                                'E_pma1': '0',
                                'E_vma1': '0',
                                'cytosol': '0',
                                'h_ext': '+1',
                                'extracellular': '0',
                                'vacuole': '0',
                                'cl_cyt': '0',
                                'h_vac': '0',
                                'cl_vac': '0',
                                'na_ext': '0',
                                'pi_cyt': '-2',
                                'na_cyt': '0',
                                'k_vac': '0',
                                'acid_cytosol_h': '0',
                                'D_G_ATP': '0',
                                'my_J_Cl': '0',
                                'my_J_K': '0',
                                'my_J_trk12': '0',
                                'my_J_Ca': '0',
                                'my_J_H': '0',
                                'ca_cyt': '0',
                                'cl_ext': '0',
                                'gp_trk12': '0',
                                'my_J_pma1': '0',
                                'my_J_ena1': '0',
                                'ca_vac': '0',
                                'gp_tok1': '0',
                                'myph': '0',
                                'r': '0',
                                'na_vac': '0',
                                'my_J_Na': '0',
                                'my_J_nha1': '0',
                                'k_ext': '0',
                                'par_vol': '0'}

    module_dict['units_pars'] = {}

    ### Model Name:
    module_dict['name'] = 'TRP_ION'

    ### Species Annotations:
    module_dict['sp_annotations'] = {'h_cyt': 'CHEBI:24636',
                                     'E_ena1': 'SBML_IMPORT_ANNOTATION:15',
                                     'v_v': 'SBML_IMPORT_ANNOTATION:8',
                                     'atp_cyt': 'CHEBI:30616',
                                     'acid_cytosol': 'SBML_IMPORT_ANNOTATION:2',
                                     'surface_vac': 'SBML_IMPORT_ANNOTATION:6',
                                     'k_cyt': 'CHEBI:29103',
                                     'ca_ext': 'CHEBI:29108',
                                     'surface': 'SBML_IMPORT_ANNOTATION:4',
                                     'E_nha1': 'SBML_IMPORT_ANNOTATION:14',
                                     'adp_cyt': 'CHEBI:456216',
                                     'r_vac': 'SBML_IMPORT_ANNOTATION:5',
                                     'v_m': 'SBML_IMPORT_ANNOTATION:7',
                                     'h_vac': 'CHEBI:24636',
                                     'E_pma1': 'SBML_IMPORT_ANNOTATION:13',
                                     'E_vma1': 'SBML_IMPORT_ANNOTATION:16',
                                     'cytosol': 'SBO:0000468',
                                     'h_ext': 'CHEBI:24636',
                                     'extracellular': 'SBO:0000468',
                                     'vacuole': 'SBO:0000468',
                                     'cl_cyt': 'CHEBI:17996',
                                     'my_J_tok1': 'SBML_IMPORT_ANNOTATION:25',
                                     'cl_vac': 'CHEBI:17996',
                                     'na_ext': 'CHEBI:29101',
                                     'pi_cyt': 'CHEBI:43474',
                                     'na_cyt': 'CHEBI:29101',
                                     'k_vac': 'CHEBI:29103',
                                     'acid_cytosol_h': 'SBML_IMPORT_ANNOTATION:1',
                                     'D_G_ATP': 'SBML_IMPORT_ANNOTATION:12',
                                     'my_J_Cl': 'SBML_IMPORT_ANNOTATION:20',
                                     'my_J_K': 'SBML_IMPORT_ANNOTATION:18',
                                     'my_J_trk12': 'SBML_IMPORT_ANNOTATION:26',
                                     'my_J_Ca': 'SBML_IMPORT_ANNOTATION:21',
                                     'my_J_H': 'SBML_IMPORT_ANNOTATION:17',
                                     'ca_cyt': 'CHEBI:29108',
                                     'cl_ext': 'CHEBI:17996',
                                     'gp_trk12': 'SBML_IMPORT_ANNOTATION:11',
                                     'my_J_pma1': 'SBML_IMPORT_ANNOTATION:22',
                                     'my_J_ena1': 'SBML_IMPORT_ANNOTATION:24',
                                     'ca_vac': 'CHEBI:29108',
                                     'gp_tok1': 'SBML_IMPORT_ANNOTATION:10',
                                     'myph': 'SBML_IMPORT_ANNOTATION:9',
                                     'r': 'SBML_IMPORT_ANNOTATION:3',
                                     'na_vac': 'CHEBI:29101',
                                     'my_J_Na': 'SBML_IMPORT_ANNOTATION:19',
                                     'my_J_nha1': 'SBML_IMPORT_ANNOTATION:23',
                                     'k_ext': 'CHEBI:29103',
                                     'par_vol': 'SBO:0000468'}

    ### Species Compartment:
    module_dict['sp_compartment'] = {'h_cyt': 'cytosol',
                                     'E_ena1': 'parameter_compartment',
                                     'v_v': 'parameter_compartment',
                                     'atp_cyt': 'cytosol',
                                     'acid_cytosol': 'cytosol',
                                     'surface_vac': 'parameter_compartment',
                                     'k_cyt': 'cytosol',
                                     'ca_ext': 'extracellular',
                                     'surface': 'parameter_compartment',
                                     'E_nha1': 'parameter_compartment',
                                     'adp_cyt': 'cytosol',
                                     'r_vac': 'parameter_compartment',
                                     'v_m': 'parameter_compartment',
                                     'my_J_tok1': 'parameter_compartment',
                                     'E_pma1': 'parameter_compartment',
                                     'E_vma1': 'parameter_compartment',
                                     'cytosol': 'cytosol',
                                     'h_ext': 'extracellular',
                                     'extracellular': 'extracellular',
                                     'vacuole': 'vacuole',
                                     'cl_cyt': 'cytosol',
                                     'h_vac': 'vacuole',
                                     'cl_vac': 'vacuole',
                                     'na_ext': 'extracellular',
                                     'pi_cyt': 'cytosol',
                                     'na_cyt': 'cytosol',
                                     'k_vac': 'vacuole',
                                     'acid_cytosol_h': 'cytosol',
                                     'D_G_ATP': 'parameter_compartment',
                                     'my_J_Cl': 'parameter_compartment',
                                     'my_J_K': 'parameter_compartment',
                                     'my_J_trk12': 'parameter_compartment',
                                     'my_J_Ca': 'parameter_compartment',
                                     'my_J_H': 'parameter_compartment',
                                     'ca_cyt': 'cytosol',
                                     'cl_ext': 'extracellular',
                                     'gp_trk12': 'parameter_compartment',
                                     'my_J_pma1': 'parameter_compartment',
                                     'my_J_ena1': 'parameter_compartment',
                                     'ca_vac': 'vacuole',
                                     'gp_tok1': 'parameter_compartment',
                                     'myph': 'parameter_compartment',
                                     'r': 'parameter_compartment',
                                     'na_vac': 'vacuole',
                                     'my_J_Na': 'parameter_compartment',
                                     'my_J_nha1': 'parameter_compartment',
                                     'k_ext': 'extracellular',
                                     'par_vol': 'parameter_compartment'}

    ### Compartment Annotations:
    module_dict['com_annotations'] = {'vacuole': 'GO:0005773',
                                      'cytosol': 'GO:0005829',
                                      'parameter_compartment': 'SBO:0000410',
                                      'extracellular': 'GO:0005576'}

    ### Species Units:
    module_dict['units'] = {'h_cyt': 'mM',
                            'acid_Ka': 'SBML_IMPORT_UNIT',
                            'v_v': 'SBML_IMPORT_UNIT',
                            'atp_cyt': 'mM',
                            'acid_cytosol': 'mM',
                            'E_pma1': 'SBML_IMPORT_UNIT',
                            'v_tok1_halfmax': 'SBML_IMPORT_UNIT',
                            'extracellular': 'L',
                            'I_MAX_VMA_1': 'SBML_IMPORT_UNIT',
                            'na_vac': 'mM',
                            'G_NHA1': 'SBML_IMPORT_UNIT',
                            'kb_buffer': 'SBML_IMPORT_UNIT',
                            'd_tok1': 'SBML_IMPORT_UNIT',
                            'E_nha1': 'SBML_IMPORT_UNIT',
                            'adp_cyt': 'mM',
                            'r_vac': 'SBML_IMPORT_UNIT',
                            'surface': 'um**2',
                            'v_m': 'SBML_IMPORT_UNIT',
                            'h_vac': 'mM',
                            'surface_vac': 'um**2',
                            'kf_buffer': 'SBML_IMPORT_UNIT',
                            'E_vma1': 'SBML_IMPORT_UNIT',
                            'cytosol': 'L',
                            'I_MAX_PMA1': 'SBML_IMPORT_UNIT',
                            'h_ext': 'mM',
                            'k_cyt': 'mM',
                            'gv_k': 'SBML_IMPORT_UNIT',
                            'gv_h': 'SBML_IMPORT_UNIT',
                            'my_J_K': 'SBML_IMPORT_UNIT',
                            'vacuole': 'L',
                            'cl_cyt': 'mM',
                            'gp_trk12_0': 'SBML_IMPORT_UNIT',
                            'liter_2_fl': 'SBML_IMPORT_UNIT',
                            'my_J_tok1': 'SBML_IMPORT_UNIT',
                            'my_J_Ca': 'SBML_IMPORT_UNIT',
                            'cl_vac': 'mM',
                            'na_ext': 'mM',
                            'pi_cyt': 'mM',
                            'A': 'SBML_IMPORT_UNIT',
                            'gv_na': 'SBML_IMPORT_UNIT',
                            'na_cyt': 'mM',
                            'v_trk12_halfmax': 'SBML_IMPORT_UNIT',
                            'F': 'SBML_IMPORT_UNIT',
                            'k_vac': 'mM',
                            'gv_cl': 'SBML_IMPORT_UNIT',
                            'acid_cytosol_h': 'mM',
                            'c_m': 'SBML_IMPORT_UNIT',
                            'D_G_ATP': 'SBML_IMPORT_UNIT',
                            'E_ena1': 'SBML_IMPORT_UNIT',
                            'my_J_Cl': 'SBML_IMPORT_UNIT',
                            'R': 'SBML_IMPORT_UNIT',
                            'T': 'SBML_IMPORT_UNIT',
                            'gp_tok1_0': 'SBML_IMPORT_UNIT',
                            'gp_h': 'SBML_IMPORT_UNIT',
                            'gp_ca': 'SBML_IMPORT_UNIT',
                            'my_J_trk12': 'SBML_IMPORT_UNIT',
                            'gp_k': 'SBML_IMPORT_UNIT',
                            'my_J_H': 'SBML_IMPORT_UNIT',
                            'gp_cl': 'SBML_IMPORT_UNIT',
                            'ca_cyt': 'mM',
                            'gv_ca': 'SBML_IMPORT_UNIT',
                            'cl_ext': 'mM',
                            'gp_trk12': 'SBML_IMPORT_UNIT',
                            'my_J_pma1': 'SBML_IMPORT_UNIT',
                            'd_trk12': 'SBML_IMPORT_UNIT',
                            'my_J_ena1': 'SBML_IMPORT_UNIT',
                            'my_J_nha1': 'SBML_IMPORT_UNIT',
                            'gp_tok1': 'SBML_IMPORT_UNIT',
                            'I_MAX_ENA1': 'SBML_IMPORT_UNIT',
                            'myph': 'SBML_IMPORT_UNIT',
                            'r': 'SBML_IMPORT_UNIT',
                            'gp_na': 'SBML_IMPORT_UNIT',
                            'ca_ext': 'mM',
                            'D_G_ATP_0': 'SBML_IMPORT_UNIT',
                            'my_J_Na': 'SBML_IMPORT_UNIT',
                            'ca_vac': 'mM',
                            'k_ext': 'mM',
                            'par_vol': 'L'}

    ### Reactions:
    reactions = {}
    reactions['J_pma1'] = {'rate': {}, 'products': {}, 'substrates': {}, 'modifiers': {}}
    reactions['J_na'] = {'rate': {}, 'products': {}, 'substrates': {}, 'modifiers': {}}
    reactions['J_trk12'] = {'rate': {}, 'products': {}, 'substrates': {}, 'modifiers': {}}
    reactions['J_ca'] = {'rate': {}, 'products': {}, 'substrates': {}, 'modifiers': {}}
    reactions['J_cl'] = {'rate': {}, 'products': {}, 'substrates': {}, 'modifiers': {}}
    reactions['J_tok1'] = {'rate': {}, 'products': {}, 'substrates': {}, 'modifiers': {}}
    reactions['J_nha1'] = {'rate': {}, 'products': {}, 'substrates': {}, 'modifiers': {}}
    reactions['J_k'] = {'rate': {}, 'products': {}, 'substrates': {}, 'modifiers': {}}
    reactions['J_vac_k'] = {'rate': {}, 'products': {}, 'substrates': {}, 'modifiers': {}}
    reactions['J_h'] = {'rate': {}, 'products': {}, 'substrates': {}, 'modifiers': {}}
    reactions['J_vma1'] = {'rate': {}, 'products': {}, 'substrates': {}, 'modifiers': {}}
    reactions['J_vac_h'] = {'rate': {}, 'products': {}, 'substrates': {}, 'modifiers': {}}
    reactions['J_vac_ca'] = {'rate': {}, 'products': {}, 'substrates': {}, 'modifiers': {}}
    reactions['J_ena1'] = {'rate': {}, 'products': {}, 'substrates': {}, 'modifiers': {}}
    reactions['J_vac_cl'] = {'rate': {}, 'products': {}, 'substrates': {}, 'modifiers': {}}
    reactions['J_vac_na'] = {'rate': {}, 'products': {}, 'substrates': {}, 'modifiers': {}}

    ### Rates:
    # J_pma1
    reactions['J_pma1'][
        'rate'] = '( (  ( surface  /  F )   *  I_MAX_PMA1 )  *  tanh((  ( F  /  ( ( 2.  *  R )  *  T ) )   *  ( v_m  - E_pma1 ) )) )'
    # J_na
    reactions['J_na'][
        'rate'] = ' ( (  ( surface  /  ( 1.  *  F ) )   *  gp_na )  *  ( v_m  -  (  (  ( ( R  *  T )  /  F )   /  1. )   *  log( ( na_ext  /  na_cyt ) ) )  ) ) '
    # J_trk12
    reactions['J_trk12'][
        'rate'] = ' ( (  ( surface  /  ( 1.  *  F ) )   *  gp_trk12 )  *  ( v_m  -  (  (  ( ( R  *  T )  /  F )   /  1. )   *  log( ( k_ext  /  k_cyt ) ) )  ) ) '
    # J_ca
    reactions['J_ca'][
        'rate'] = ' ( (  ( surface  /  ( 2.  *  F ) )   *  gp_ca )  *  ( v_m  -  (  (  ( ( R  *  T )  /  F )   /  2. )   *  log( ( ca_ext  /  ca_cyt ) ) )  ) ) '
    # J_cl
    reactions['J_cl'][
        'rate'] = ' ( (  ( surface  /  ( -1.  *  F ) )   *  gp_cl )  *  ( v_m  -  (  (  ( ( R  *  T )  /  F )   /  -1. )   *  log( ( cl_ext  /  cl_cyt ) ) )  ) ) '
    # J_tok1
    reactions['J_tok1'][
        'rate'] = ' ( (  ( surface  /  ( 1.  *  F ) )   *  gp_tok1 )  *  ( v_m  -  (  (  ( ( R  *  T )  /  F )   /  1. )   *  log( ( k_ext  /  k_cyt ) ) )  ) ) '
    # J_nha1
    reactions['J_nha1']['rate'] = '( (  ( surface  /  F )   *  G_NHA1 )  *  ( v_m  - E_nha1 ) )'
    # J_k
    reactions['J_k'][
        'rate'] = ' ( (  ( surface  /  ( 1.  *  F ) )   *  gp_k )  *  ( v_m  -  (  (  ( ( R  *  T )  /  F )   /  1. )   *  log( ( k_ext  /  k_cyt ) ) )  ) ) '
    # J_vac_k
    reactions['J_vac_k'][
        'rate'] = ' ( (  ( surface_vac  /  ( 1.  *  F ) )   *  gv_k )  *  ( v_v  -  (  (  ( ( R  *  T )  /  F )   /  1. )   *  log( ( k_cyt  /  k_vac ) ) )  ) ) '
    # J_h
    reactions['J_h'][
        'rate'] = ' ( (  ( surface  /  ( 1.  *  F ) )   *  gp_h )  *  ( v_m  -  (  (  ( ( R  *  T )  /  F )   /  1. )   *  log( ( h_ext  /  h_cyt ) ) )  ) ) '
    # J_vma1
    reactions['J_vma1'][
        'rate'] = '( (  ( surface_vac  /  F )   *  I_MAX_VMA_1 )  *  tanh( ( ( v_v  - E_vma1 )  /  ( ( 2.  *  R )  *  T ) ) ) )'
    # J_vac_h
    reactions['J_vac_h'][
        'rate'] = ' ( (  ( surface_vac  /  ( 1.  *  F ) )   *  gv_h )  *  ( v_v  -  (  (  ( ( R  *  T )  /  F )   /  1. )   *  log( ( h_cyt  /  h_vac ) ) )  ) ) '
    # J_vac_ca
    reactions['J_vac_ca'][
        'rate'] = ' ( (  ( surface_vac  /  ( 2.  *  F ) )   *  gv_ca )  *  ( v_v  -  (  (  ( ( R  *  T )  /  F )   /  2. )   *  log( ( ca_cyt  /  ca_vac ) ) )  ) ) '
    # J_ena1
    reactions['J_ena1'][
        'rate'] = '( (  ( surface  /  F )   *  I_MAX_ENA1 )  *  tanh((  ( F  /  ( ( 2.  *  R )  *  T ) )   *  ( v_m  - E_ena1 ) )) )'
    # J_vac_cl
    reactions['J_vac_cl'][
        'rate'] = ' ( (  ( surface_vac  /  ( -1.  *  F ) )   *  gv_cl )  *  ( v_v  -  (  (  ( ( R  *  T )  /  F )   /  -1. )   *  log( ( cl_cyt  /  cl_vac ) ) )  ) ) '
    # J_vac_na
    reactions['J_vac_na'][
        'rate'] = ' ( (  ( surface_vac  /  ( 1.  *  F ) )   *  gv_na )  *  ( v_v  -  (  (  ( ( R  *  T )  /  F )   /  1. )   *  log( ( na_cyt  /  na_vac ) ) )  ) ) '

    ### Substrates:
    # J_pma1
    reactions['J_pma1']['substrates'] = {'h_cyt': 1.0}
    # J_na
    reactions['J_na']['substrates'] = {'na_cyt': 1.0}
    # J_trk12
    reactions['J_trk12']['substrates'] = {'k_cyt': 1.0}
    # J_ca
    reactions['J_ca']['substrates'] = {'ca_cyt': 1.0}
    # J_cl
    reactions['J_cl']['substrates'] = {'cl_cyt': 1.0}
    # J_tok1
    reactions['J_tok1']['substrates'] = {'k_cyt': 1.0}
    # J_nha1
    reactions['J_nha1']['substrates'] = {'h_cyt': 2.0}
    # J_k
    reactions['J_k']['substrates'] = {'k_cyt': 1.0}
    # J_vac_k
    reactions['J_vac_k']['substrates'] = {'k_vac': 1.0}
    # J_h
    reactions['J_h']['substrates'] = {'h_cyt': 1.0}
    # J_vma1
    reactions['J_vma1']['substrates'] = {'h_vac': 1.0}
    # J_vac_h
    reactions['J_vac_h']['substrates'] = {'h_vac': 1.0}
    # J_vac_ca
    reactions['J_vac_ca']['substrates'] = {'ca_vac': 1.0}
    # J_ena1
    reactions['J_ena1']['substrates'] = {'na_cyt': 1.0}
    # J_vac_cl
    reactions['J_vac_cl']['substrates'] = {'cl_vac': 1.0}
    # J_vac_na
    reactions['J_vac_na']['substrates'] = {'na_vac': 1.0}

    ### Products:
    # J_pma1
    reactions['J_pma1']['products'] = {}
    # J_na
    reactions['J_na']['products'] = {}
    # J_trk12
    reactions['J_trk12']['products'] = {}
    # J_ca
    reactions['J_ca']['products'] = {}
    # J_cl
    reactions['J_cl']['products'] = {}
    # J_tok1
    reactions['J_tok1']['products'] = {}
    # J_nha1
    reactions['J_nha1']['products'] = {'na_cyt': 1.0}
    # J_k
    reactions['J_k']['products'] = {}
    # J_vac_k
    reactions['J_vac_k']['products'] = {'k_cyt': 1.0}
    # J_h
    reactions['J_h']['products'] = {}
    # J_vma1
    reactions['J_vma1']['products'] = {'h_cyt': 1.0}
    # J_vac_h
    reactions['J_vac_h']['products'] = {'h_cyt': 1.0}
    # J_vac_ca
    reactions['J_vac_ca']['products'] = {'ca_cyt': 1.0}
    # J_ena1
    reactions['J_ena1']['products'] = {}
    # J_vac_cl
    reactions['J_vac_cl']['products'] = {'cl_cyt': 1.0}
    # J_vac_na
    reactions['J_vac_na']['products'] = {'na_cyt': 1.0}

    ### Modifiers:
    # J_pma1
    reactions['J_pma1']['modifiers'] = {'h_ext': 1.0, 'atp_cyt': 1.0, 'adp_cyt': 1.0, 'pi_cyt': 1.0}
    # J_na
    reactions['J_na']['modifiers'] = {'na_ext': 1.0}
    # J_trk12
    reactions['J_trk12']['modifiers'] = {'k_ext': 1.0}
    # J_ca
    reactions['J_ca']['modifiers'] = {'ca_ext': 1.0}
    # J_cl
    reactions['J_cl']['modifiers'] = {'cl_ext': 1.0}
    # J_tok1
    reactions['J_tok1']['modifiers'] = {'k_ext': 1.0}
    # J_nha1
    reactions['J_nha1']['modifiers'] = {'h_ext': 1.0, 'na_ext': 1.0}
    # J_k
    reactions['J_k']['modifiers'] = {'k_ext': 1.0}
    # J_vac_k
    reactions['J_vac_k']['modifiers'] = {}
    # J_h
    reactions['J_h']['modifiers'] = {'h_ext': 1.0}
    # J_vma1
    reactions['J_vma1']['modifiers'] = {'atp_cyt': 1.0, 'adp_cyt': 1.0, 'pi_cyt': 1.0}
    # J_vac_h
    reactions['J_vac_h']['modifiers'] = {}
    # J_vac_ca
    reactions['J_vac_ca']['modifiers'] = {}
    # J_ena1
    reactions['J_ena1']['modifiers'] = {'na_ext': 1.0}
    # J_vac_cl
    reactions['J_vac_cl']['modifiers'] = {}
    # J_vac_na
    reactions['J_vac_na']['modifiers'] = {}

    module_dict['reactions'] = reactions

    ### ODEs
    odes = {}
    # h_cyt
    odes[
        'h_cyt'] = '-1.0 * (1./cytosol) * (( (  ( surface  /  F )   *  I_MAX_PMA1 )  *  tanh((  ( F  /  ( ( 2.  *  R )  *  T ) )   *  ( v_m  - E_pma1 ) )) )) + 1.0 * (1./cytosol) * ( ( (  ( surface_vac  /  ( 1.  *  F ) )   *  gv_h )  *  ( v_v  -  (  (  ( ( R  *  T )  /  F )   /  1. )   *  log( ( h_cyt  /  h_vac ) ) )  ) ) ) + -1.0 * (1./cytosol) * ( ( (  ( surface  /  ( 1.  *  F ) )   *  gp_h )  *  ( v_m  -  (  (  ( ( R  *  T )  /  F )   /  1. )   *  log( ( h_ext  /  h_cyt ) ) )  ) ) ) + 1.0 * (1./cytosol) * (( (  ( surface_vac  /  F )   *  I_MAX_VMA_1 )  *  tanh( ( ( v_v  - E_vma1 )  /  ( ( 2.  *  R )  *  T ) ) ) )) + -2.0 * (1./cytosol) * (( (  ( surface  /  F )   *  G_NHA1 )  *  ( v_m  - E_nha1 ) ))'
    # E_ena1
    odes['E_ena1'] = '0.'
    # v_v
    odes[
        'v_v'] = ' ( (  ( ( ( ( ( ( J_vac_h  + J_vac_k )  + J_vac_na )  - J_vac_cl )  + ( 2.  *  J_vac_ca ) )  *  -1. )  /  c_m )   *  F )  /  surface_vac ) '
    # atp_cyt
    odes['atp_cyt'] = '0.'
    # acid_cytosol
    odes['acid_cytosol'] = '0.'
    # surface_vac
    odes['surface_vac'] = '0.'
    # k_cyt
    odes[
        'k_cyt'] = '-1.0 * (1./cytosol) * ( ( (  ( surface  /  ( 1.  *  F ) )   *  gp_trk12 )  *  ( v_m  -  (  (  ( ( R  *  T )  /  F )   /  1. )   *  log( ( k_ext  /  k_cyt ) ) )  ) ) ) + -1.0 * (1./cytosol) * ( ( (  ( surface  /  ( 1.  *  F ) )   *  gp_tok1 )  *  ( v_m  -  (  (  ( ( R  *  T )  /  F )   /  1. )   *  log( ( k_ext  /  k_cyt ) ) )  ) ) ) + -1.0 * (1./cytosol) * ( ( (  ( surface  /  ( 1.  *  F ) )   *  gp_k )  *  ( v_m  -  (  (  ( ( R  *  T )  /  F )   /  1. )   *  log( ( k_ext  /  k_cyt ) ) )  ) ) ) + 1.0 * (1./cytosol) * ( ( (  ( surface_vac  /  ( 1.  *  F ) )   *  gv_k )  *  ( v_v  -  (  (  ( ( R  *  T )  /  F )   /  1. )   *  log( ( k_cyt  /  k_vac ) ) )  ) ) )'
    # ca_ext
    odes['ca_ext'] = '0.'
    # surface
    odes['surface'] = '0.'
    # E_nha1
    odes['E_nha1'] = '0.'
    # adp_cyt
    odes['adp_cyt'] = '0.'
    # r_vac
    odes['r_vac'] = '0.'
    # v_m
    odes[
        'v_m'] = ' ( (  ( ( ( ( ( ( ( ( ( ( J_h  + J_k )  + J_na )  - J_cl )  + ( 2.  *  J_ca ) )  + J_pma1 )  + J_nha1 )  + J_ena1 )  + J_tok1 )  *  -1. )  /  c_m )   *  F )  /  surface ) '
    # h_vac
    odes[
        'h_vac'] = '-1.0 * (1./vacuole) * ( ( (  ( surface_vac  /  ( 1.  *  F ) )   *  gv_h )  *  ( v_v  -  (  (  ( ( R  *  T )  /  F )   /  1. )   *  log( ( h_cyt  /  h_vac ) ) )  ) ) ) + -1.0 * (1./vacuole) * (( (  ( surface_vac  /  F )   *  I_MAX_VMA_1 )  *  tanh( ( ( v_v  - E_vma1 )  /  ( ( 2.  *  R )  *  T ) ) ) ))'
    # E_pma1
    odes['E_pma1'] = '0.'
    # E_vma1
    odes['E_vma1'] = '0.'
    # cytosol
    odes['cytosol'] = '0.'
    # h_ext
    odes['h_ext'] = '0.'
    # extracellular
    odes['extracellular'] = '0.'
    # vacuole
    odes['vacuole'] = '0.'
    # cl_cyt
    odes[
        'cl_cyt'] = '-1.0 * (1./cytosol) * ( ( (  ( surface  /  ( -1.  *  F ) )   *  gp_cl )  *  ( v_m  -  (  (  ( ( R  *  T )  /  F )   /  -1. )   *  log( ( cl_ext  /  cl_cyt ) ) )  ) ) ) + 1.0 * (1./cytosol) * ( ( (  ( surface_vac  /  ( -1.  *  F ) )   *  gv_cl )  *  ( v_v  -  (  (  ( ( R  *  T )  /  F )   /  -1. )   *  log( ( cl_cyt  /  cl_vac ) ) )  ) ) )'
    # my_J_tok1
    odes['my_J_tok1'] = '0.'
    # cl_vac
    odes[
        'cl_vac'] = '-1.0 * (1./vacuole) * ( ( (  ( surface_vac  /  ( -1.  *  F ) )   *  gv_cl )  *  ( v_v  -  (  (  ( ( R  *  T )  /  F )   /  -1. )   *  log( ( cl_cyt  /  cl_vac ) ) )  ) ) )'
    # na_ext
    odes['na_ext'] = '0.'
    # pi_cyt
    odes['pi_cyt'] = '0.'
    # na_cyt
    odes[
        'na_cyt'] = '-1.0 * (1./cytosol) * ( ( (  ( surface  /  ( 1.  *  F ) )   *  gp_na )  *  ( v_m  -  (  (  ( ( R  *  T )  /  F )   /  1. )   *  log( ( na_ext  /  na_cyt ) ) )  ) ) ) + 1.0 * (1./cytosol) * (( (  ( surface  /  F )   *  G_NHA1 )  *  ( v_m  - E_nha1 ) )) + -1.0 * (1./cytosol) * (( (  ( surface  /  F )   *  I_MAX_ENA1 )  *  tanh((  ( F  /  ( ( 2.  *  R )  *  T ) )   *  ( v_m  - E_ena1 ) )) )) + 1.0 * (1./cytosol) * ( ( (  ( surface_vac  /  ( 1.  *  F ) )   *  gv_na )  *  ( v_v  -  (  (  ( ( R  *  T )  /  F )   /  1. )   *  log( ( na_cyt  /  na_vac ) ) )  ) ) )'
    # k_vac
    odes[
        'k_vac'] = '-1.0 * (1./vacuole) * ( ( (  ( surface_vac  /  ( 1.  *  F ) )   *  gv_k )  *  ( v_v  -  (  (  ( ( R  *  T )  /  F )   /  1. )   *  log( ( k_cyt  /  k_vac ) ) )  ) ) )'
    # acid_cytosol_h
    odes['acid_cytosol_h'] = '0.'
    # D_G_ATP
    odes['D_G_ATP'] = '0.'
    # my_J_Cl
    odes['my_J_Cl'] = '0.'
    # my_J_K
    odes['my_J_K'] = '0.'
    # my_J_trk12
    odes['my_J_trk12'] = '0.'
    # my_J_Ca
    odes['my_J_Ca'] = '0.'
    # my_J_H
    odes['my_J_H'] = '0.'
    # ca_cyt
    odes[
        'ca_cyt'] = '-1.0 * (1./cytosol) * ( ( (  ( surface  /  ( 2.  *  F ) )   *  gp_ca )  *  ( v_m  -  (  (  ( ( R  *  T )  /  F )   /  2. )   *  log( ( ca_ext  /  ca_cyt ) ) )  ) ) ) + 1.0 * (1./cytosol) * ( ( (  ( surface_vac  /  ( 2.  *  F ) )   *  gv_ca )  *  ( v_v  -  (  (  ( ( R  *  T )  /  F )   /  2. )   *  log( ( ca_cyt  /  ca_vac ) ) )  ) ) )'
    # cl_ext
    odes['cl_ext'] = '0.'
    # gp_trk12
    odes['gp_trk12'] = '0.'
    # my_J_pma1
    odes['my_J_pma1'] = '0.'
    # my_J_ena1
    odes['my_J_ena1'] = '0.'
    # my_J_nha1
    odes['my_J_nha1'] = '0.'
    # gp_tok1
    odes['gp_tok1'] = '0.'
    # myph
    odes['myph'] = '0.'
    # r
    odes['r'] = '0.'
    # na_vac
    odes[
        'na_vac'] = '-1.0 * (1./vacuole) * ( ( (  ( surface_vac  /  ( 1.  *  F ) )   *  gv_na )  *  ( v_v  -  (  (  ( ( R  *  T )  /  F )   /  1. )   *  log( ( na_cyt  /  na_vac ) ) )  ) ) )'
    # my_J_Na
    odes['my_J_Na'] = '0.'
    # ca_vac
    odes[
        'ca_vac'] = '-1.0 * (1./vacuole) * ( ( (  ( surface_vac  /  ( 2.  *  F ) )   *  gv_ca )  *  ( v_v  -  (  (  ( ( R  *  T )  /  F )   /  2. )   *  log( ( ca_cyt  /  ca_vac ) ) )  ) ) )'
    # k_ext
    odes['k_ext'] = '0.'

    module_dict['odes'] = odes

    ### algebraic equations
    alg_eqs = {}
    # E_ena1
    alg_eqs[
        'E_ena1'] = '(  (  (  ( ( R  *  T )  /  F )   /  1. )   *  log( ( na_ext  /  na_cyt ) ) )   +  ( D_G_ATP  /  F )  )'
    # surface_vac
    alg_eqs['surface_vac'] = '( ( 4.  *  3.14159265359 )  *  ( r_vac  **  2. ) )'
    # surface
    alg_eqs['surface'] = '( ( 4.  *  3.14159265359 )  *  ( r  **  2. ) )'
    # E_nha1
    alg_eqs[
        'E_nha1'] = '(  ( ( R  *  T )  /  F )   *  log( ( ( ( h_ext  **  2. )  *  na_cyt )  /  ( ( h_cyt  **  2. )  *  na_ext ) ) ) )'
    # r_vac
    alg_eqs[
        'r_vac'] = '(  (  ( ( ( vacuole  *  liter_2_fl )  *  3. )  /  4. )   /  3.14159265359 )   **  0.333333333333 )'
    # E_pma1
    alg_eqs[
        'E_pma1'] = '(  (  (  ( ( R  *  T )  /  F )   /  1. )   *  log( ( h_ext  /  h_cyt ) ) )   +  ( D_G_ATP  /  F )  )'
    # E_vma1
    alg_eqs[
        'E_vma1'] = '(  (  (  ( ( R  *  T )  /  F )   /  1. )   *  log( ( h_cyt  /  h_vac ) ) )   +  ( D_G_ATP  /  F )  )'
    # vacuole
    alg_eqs['vacuole'] = '( 0.2  *  cytosol )'
    # my_J_tok1
    alg_eqs[
        'my_J_tok1'] = '( ( (  ( surface  /  ( 1.  *  F ) )   *  gp_tok1 )  *  ( v_m  -  (  (  ( ( R  *  T )  /  F )   /  1. )   *  log( ( k_ext  /  k_cyt ) ) )  ) ) )'
    # D_G_ATP
    alg_eqs['D_G_ATP'] = '( D_G_ATP_0  - ( ( R  *  T )  *  log( ( atp_cyt  /  ( adp_cyt  *  pi_cyt ) ) ) ) )'
    # my_J_Cl
    alg_eqs[
        'my_J_Cl'] = '( ( (  ( surface  /  ( -1.  *  F ) )   *  gp_cl )  *  ( v_m  -  (  (  ( ( R  *  T )  /  F )   /  -1. )   *  log( ( cl_ext  /  cl_cyt ) ) )  ) ) )'
    # my_J_K
    alg_eqs[
        'my_J_K'] = '( ( (  ( surface  /  ( 1.  *  F ) )   *  gp_k )  *  ( v_m  -  (  (  ( ( R  *  T )  /  F )   /  1. )   *  log( ( k_ext  /  k_cyt ) ) )  ) ) )'
    # my_J_trk12
    alg_eqs[
        'my_J_trk12'] = '( ( (  ( surface  /  ( 1.  *  F ) )   *  gp_trk12 )  *  ( v_m  -  (  (  ( ( R  *  T )  /  F )   /  1. )   *  log( ( k_ext  /  k_cyt ) ) )  ) ) )'
    # my_J_Ca
    alg_eqs[
        'my_J_Ca'] = '( ( (  ( surface  /  ( 2.  *  F ) )   *  gp_ca )  *  ( v_m  -  (  (  ( ( R  *  T )  /  F )   /  2. )   *  log( ( ca_ext  /  ca_cyt ) ) )  ) ) )'
    # my_J_H
    alg_eqs[
        'my_J_H'] = '( ( (  ( surface  /  ( 1.  *  F ) )   *  gp_h )  *  ( v_m  -  (  (  ( ( R  *  T )  /  F )   /  1. )   *  log( ( h_ext  /  h_cyt ) ) )  ) ) )'
    # gp_trk12
    alg_eqs[
        'gp_trk12'] = ' ( gp_trk12_0  /  ( 1.  + exp((  (  ( ( d_trk12  *  F )  /  R )   /  T )   *  ( v_m  - v_trk12_halfmax ) )) ) ) '
    # my_J_pma1
    alg_eqs[
        'my_J_pma1'] = '(( (  ( surface  /  F )   *  I_MAX_PMA1 )  *  tanh((  ( F  /  ( ( 2.  *  R )  *  T ) )   *  ( v_m  - E_pma1 ) )) ))'
    # my_J_ena1
    alg_eqs[
        'my_J_ena1'] = '(( (  ( surface  /  F )   *  I_MAX_ENA1 )  *  tanh((  ( F  /  ( ( 2.  *  R )  *  T ) )   *  ( v_m  - E_ena1 ) )) ))'
    # my_J_nha1
    alg_eqs['my_J_nha1'] = '(( (  ( surface  /  F )   *  G_NHA1 )  *  ( v_m  - E_nha1 ) ))'
    # gp_tok1
    alg_eqs[
        'gp_tok1'] = ' ( gp_tok1_0  /  ( 1.  + exp((  (  ( ( d_tok1  *  F )  /  R )   /  T )   *  ( v_m  - v_tok1_halfmax ) )) ) ) '
    # myph
    alg_eqs['myph'] = '( - log((( h_cyt  *  0.001 )),(10.)) )'
    # r
    alg_eqs['r'] = '(  (  ( ( ( cytosol  *  liter_2_fl )  *  3. )  /  4. )   /  3.14159265359 )   **  0.333333333333 )'
    # my_J_Na
    alg_eqs[
        'my_J_Na'] = '( ( (  ( surface  /  ( 1.  *  F ) )   *  gp_na )  *  ( v_m  -  (  (  ( ( R  *  T )  /  F )   /  1. )   *  log( ( na_ext  /  na_cyt ) ) )  ) ) )'

    module_dict['alg_eqs'] = alg_eqs
    module_dict['type'] = "ODE"
    module_dict['odes'] = YCM_tools.generate_odes_from_reactions(reactions, module_dict['sp_compartment'],
                                                                 module_dict['sp_annotations'],
                                                                 module_dict['units'], module_dict['com_annotations'])


    return module_dict