import math
import GenerateODEsFromReactions as YCM_tools


def GEX_TRL():
    modeldict = {
    'info': 'Gene Expression model- Translation module\nAutomatically updated by GRN scripts (Max Floettmann).\nFormer part of the GRN_core module.',

    'name': 'GEX_TRL',

    'com_annotations': {
        'cytosol': 'GO:0005829', 'nucleus': 'GO:0005634', 'intracellular': 'GO:0044424'},

    'initpars': {
        'k_ASS_Ribosome_mRNA_R': 10000000000.0,
        'k_ASS_Ribosome_mRNA_met': 10000000000.0,
        'k_ASS_Ribosome_mRNA_other': 10000000000.0,
        'k_DEG_B_Protein_R': 7.9676e-05,
        'k_DEG_B_Protein_met': 0.00015,
        'k_DEG_B_Protein_other': 0.00025,
        'k_DIS_Ribosome_mRNA_R': 1e-10,
        'k_DIS_Ribosome_mRNA_met': 1e-10,
        'k_DIS_Ribosome_mRNA_other': 1e-10,
        'k_TRSL_mRNA_R': 5e-05,
        'k_TRSL_mRNA_met': 5e-05,
        'k_TRSL_mRNA_other': 5e-05,
        'k_aa': 0.1,
        'k_atp': 0.1,
        'vmax_TRSL_mRNA_R': 0.0005,
        'vmax_TRSL_mRNA_met': 0.0005,
        'vmax_TRSL_mRNA_other': 0.0005},

    'initvars': {
        'AA': 144.87,
        'ADP': 0.32,
        'ATP': 2.0,
        'B_Protein_R': 0.39248664688497608,  # 0.00039248664688497608
        'B_Protein_met': 0.29517823985357851,  # 0.00029517823985357851
        'B_Protein_other': 0.95191400378591548,  # 0.00095191400378591548
        'P_i': 50.0,
        'Ribosome': 6.6445182724252485e-03,  # 1e-06 - Jens 01/07/2015 - 200 ribos instead of 200000!
        'mRNA_R': 2.9776245847176094e-04,  # 1e-07
        'mRNA_R_Ribosome': 1e-06,  # 1e-09 - Jens 01/07/2015 - 200 ribos instead of 200000!
        'mRNA_met': 5.6615282392026573e-05,  # 1e-08
        'mRNA_met_Ribosome': 1e-06,  # 1e-09 - Jens 01/07/2015 - 200 ribos instead of 200000!
        'mRNA_other': 4.9208106312292347e-04,  # 1e-07
        'mRNA_other_Ribosome': 1e-06,  # 1e-09 - Jens 01/07/2015 - 200 ribos instead of 200000!
        'int_vol': 24.0e-15,
        'cyt_vol': 21.9e-15,
        'nuc_vol': 2.1e-15},

    'reactions': {
        'v_ASS_Ribosome_mRNA_R': {'modifiers': {},
                                 'products': {'mRNA_R_Ribosome': 1},
                                 'rate': '(k_ASS_Ribosome_mRNA_R * Ribosome * mRNA_R)*int_vol',
                                 'substrates': {'Ribosome': 9.4336,
                                                'mRNA_R': 1}},
        'v_ASS_Ribosome_mRNA_met': {'modifiers': {},
                                   'products': {'mRNA_met_Ribosome': 1},
                                   'rate': '(k_ASS_Ribosome_mRNA_met * Ribosome * mRNA_met)*int_vol',
                                   'substrates': {'Ribosome': 9.4336,
                                                  'mRNA_met': 1}},
        'v_ASS_Ribosome_mRNA_other': {'modifiers': {},
                                     'products': {'mRNA_other_Ribosome': 1},
                                     'rate': '(k_ASS_Ribosome_mRNA_other * Ribosome * mRNA_other)*int_vol',
                                     'substrates': {'Ribosome': 9.4336,
                                                    'mRNA_other': 1}},
        'v_DEG_B_Protein_R': {'modifiers': {},
                             'products': {'AA': 385},
                             'rate': '(k_DEG_B_Protein_R * B_Protein_R)*int_vol',
                             'substrates': {'B_Protein_R': 1}},
        'v_DEG_B_Protein_met': {'modifiers': {},
                               'products': {'AA': 385},
                               'rate': '(k_DEG_B_Protein_met * B_Protein_met)*int_vol',
                               'substrates': {'B_Protein_met': 1}},
        'v_DEG_B_Protein_other': {'modifiers': {},
                                 'products': {'AA': 385},
                                 'rate': '(k_DEG_B_Protein_other * B_Protein_other)*int_vol',
                                 'substrates': {'B_Protein_other': 1}},
        'v_DIS_Ribosome_mRNA_R': {'modifiers': {},
                                 'products': {'Ribosome': 9.4336,
                                              'mRNA_R': 1},
                                 'rate': '(k_DIS_Ribosome_mRNA_R * mRNA_R_Ribosome)*int_vol',
                                 'substrates': {'mRNA_R_Ribosome': 1}},
        'v_DIS_Ribosome_mRNA_met': {'modifiers': {},
                                   'products': {'Ribosome': 9.4336,
                                                'mRNA_met': 1},
                                   'rate': '(k_DIS_Ribosome_mRNA_met * mRNA_met_Ribosome)*int_vol',
                                   'substrates': {'mRNA_met_Ribosome': 1}},
        'v_DIS_Ribosome_mRNA_other': {'modifiers': {},
                                     'products': {'Ribosome': 9.4336,
                                                  'mRNA_other': 1},
                                     'rate': '(k_DIS_Ribosome_mRNA_other * mRNA_other_Ribosome)*int_vol',
                                     'substrates': {'mRNA_other_Ribosome': 1}},
        'v_TRSL_mRNA_R': {'modifiers': {'mRNA_R_Ribosome': 1},
                         'products': {'ADP': 1540,
                                      'B_Protein_R': 1,
                                      'P_i': 1540},
                         'rate': '(vmax_TRSL_mRNA_R * (ATP/(k_atp + ATP)) * (AA/(k_aa + AA)) * (mRNA_R_Ribosome/(k_TRSL_mRNA_R + mRNA_R_Ribosome)))*int_vol',
                         'substrates': {'AA': 385, 'ATP': 1540}},
        'v_TRSL_mRNA_met': {'modifiers': {'mRNA_met_Ribosome': 1},
                           'products': {'ADP': 1540,
                                        'B_Protein_met': 1,
                                        'P_i': 1540},
                           'rate': '(vmax_TRSL_mRNA_met * (ATP/(k_atp + ATP)) * (AA/(k_aa + AA)) * (mRNA_met_Ribosome/(k_TRSL_mRNA_met + mRNA_met_Ribosome)))*int_vol',
                           'substrates': {'AA': 385, 'ATP': 1540}},
        'v_TRSL_mRNA_other': {'modifiers': {'mRNA_other_Ribosome': 1},
                             'products': {'ADP': 1540,
                                          'B_Protein_other': 1,
                                          'P_i': 1540},
                             'rate': '(vmax_TRSL_mRNA_other * (ATP/(k_atp + ATP)) * (AA/(k_aa + AA)) * (mRNA_other_Ribosome/(k_TRSL_mRNA_other + mRNA_other_Ribosome)))*int_vol',
                             'substrates': {'AA': 385, 'ATP': 1540}}},

    'sp_annotations': {
        'AA': 'YCM:AA',
        'ADP': 'CHEBI:456216',
        'ATP': 'CHEBI:30616',
        'B_Protein_R': 'YCM:B_Protein_R',
        'B_Protein_met': 'YCM:B_Protein_metabolic',
        'B_Protein_other': 'YCM:B_Protein_other',
        'P_i': 'CHEBI:43474',
        'Ribosome': 'YCM:ribosome',
        'mRNA_R': 'YCM:mRNA_R',
        'mRNA_R_Ribosome': 'YCM:mRNA_R_Ribosome',
        'mRNA_met': 'YCM:mRNA_metabolic',
        'mRNA_met_Ribosome': 'YCM:mRNA_met_Ribosome',
        'mRNA_other': 'YCM:mRNA_other',
        'mRNA_other_Ribosome': 'YCM:mRNA_other_Ribosome',
        'total_ribosomes': 'YCM:ribosomes_check',
        'int_vol': 'SBO:0000468',
        'cyt_vol': 'SBO:0000468',
        'nuc_vol': 'SBO:0000468'},

    'sp_compartment': {
        'AA': 'intracellular',
        'ADP': 'intracellular',
        'ATP': 'intracellular',
        'B_Protein_R': 'intracellular',
        'B_Protein_met': 'intracellular',
        'B_Protein_other': 'intracellular',
        'P_i': 'intracellular',
        'Ribosome': 'intracellular',
        'mRNA_R': 'intracellular',
        'mRNA_R_Ribosome': 'intracellular',
        'mRNA_met': 'intracellular',
        'mRNA_met_Ribosome': 'intracellular',
        'mRNA_other': 'intracellular',
        'mRNA_other_Ribosome': 'intracellular',
        'int_vol': 'intracellular',
        'cyt_vol': 'cytosol',
        'nuc_vol': 'nucleus',
        'total_ribosomes': 'intracellular'},

    'sp_states': {
        'AA': '0',
        'ADP': '-3',
        'ATP': '-4',
        'B_Protein_R': '0',
        'B_Protein_met': '0',
        'B_Protein_other': '0',
        'P_i': '-2',
        'Ribosome': '0',
        'mRNA_R': '0',
        'mRNA_R_Ribosome': '0',
        'mRNA_met': '0',
        'mRNA_met_Ribosome': '0',
        'mRNA_other': '0',
        'mRNA_other_Ribosome': '0',
        'int_vol': '0',
        'cyt_vol': '0',
        'nuc_vol': '0',
        'total_ribosomes': '0'},

    'units_pars': {
        'k_ASS_Ribosome_mRNA_R': 'mM/s',
        'k_ASS_Ribosome_mRNA_met': 'mM/s',
        'k_ASS_Ribosome_mRNA_other': 's**-1',
        'k_DEG_B_Protein_R': 's**-1',
        'k_DEG_B_Protein_met': 's**-1',
        'k_DEG_B_Protein_other': 's**-1',
        'k_DIS_Ribosome_mRNA_R': 'mM',
        'k_DIS_Ribosome_mRNA_met': 'mM/s',
        'k_DIS_Ribosome_mRNA_other': 'mM/s',
        'k_TRSL_mRNA_R': 'mM',
        'k_TRSL_mRNA_met': 'mM',
        'k_TRSL_mRNA_other': 'mM',
        'k_aa': 'mM',
        'k_atp': 'mM',
        'vmax_TRSL_mRNA_R': 'mM/s',
        'vmax_TRSL_mRNA_met': 'mM/s',
        'vmax_TRSL_mRNA_other': 'mM/s'},

    'units': {
        'AA': 'mM',
        'ADP': 'mM',
        'ATP': 'mM',
        'B_Protein_R': 'mM',
        'B_Protein_met': 'mM',
        'B_Protein_other': 'mM',
        'P_i': 'mM',
        'Ribosome': 'mM',
        'mRNA_R': 'mM',
        'mRNA_R_Ribosome': 'mM',
        'mRNA_met': 'mM',
        'mRNA_met_Ribosome': 'mM',
        'mRNA_other': 'mM',
        'mRNA_other_Ribosome': 'mM',
        'int_vol': 'L',
        'cyt_vol': 'L',
        'nuc_vol': 'L',
        'total_ribosomes': 'molecules'}}

    modeldict['alg_eqs'] = {'total_ribosomes': '(Ribosome +  9.4336 * mRNA_R_Ribosome +  9.4336 * mRNA_met_Ribosome +  9.4336 * mRNA_other_Ribosome) * 1e-3 * 6.022e23 * int_vol'}  # TODO: former cytosol_volume**2??
    modeldict['initvars']['total_ribosomes'] = (modeldict['initvars']['Ribosome'] +  9.4336 * modeldict['initvars']['mRNA_R_Ribosome'] +  9.4336 * modeldict['initvars']['mRNA_met_Ribosome'] +  9.4336 * modeldict['initvars']['mRNA_other_Ribosome']) * 6.022e20 * modeldict['initvars']['int_vol']  # TODO: former cytosol_volume**2??
    modeldict['type'] = 'ODE'

    modeldict[ 'odes' ] = YCM_tools.generate_odes_from_reactions(modeldict[ 'reactions' ], modeldict[ 'sp_compartment' ],
                                                              modeldict[ 'sp_annotations' ], modeldict[ 'units' ], modeldict['com_annotations'])
    return modeldict