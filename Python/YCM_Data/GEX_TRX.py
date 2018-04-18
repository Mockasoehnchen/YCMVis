import math
import GenerateODEsFromReactions as YCM_tools


def GEX_TRX():
    modeldict = {
        'info': 'Gene Expression model- Transcription module\nAutomatically updated by GRN scripts (Max Floettmann).\nFormer part of the GRN_core module.',

        'name': 'GEX_TRX',

        'com_annotations': {
            'cytosol': 'GO:0005829', 'nucleus': 'GO:0005634', 'intracellular': 'GO:0044424'},

        'initpars': {
            'k_DEG_mRNA_R': 3.4172303434506259e-06,
            'k_DEG_mRNA_met': 3.222743393923804e-06,
            'k_DEG_mRNA_other': 1.6810238978628304e-07,
            'k_DEG_rRNA': 7.9676e-05,
            'k_atp': 0.1,
            'k_na': 0.1,
            'vmax_TRSC_mRNA_R': 2.3601877777777784,
            'vmax_TRSC_mRNA_met': 0.33191111111111093,
            'vmax_TRSC_mRNA_other': 10.809098888888858,
            'vmax_TRSC_rRNA': 5.980066445182723e-13},

        'initvars': {
            'ADP': 0.32,
            'ATP': 2.0,
            'NA': 0.1,
            'P_i': 50.0,
            'mRNA_R': 2.9776245847176094e-04,  # 1e-07
            'mRNA_met': 5.6615282392026573e-05,  # 1e-08
            'mRNA_other': 4.9208106312292347e-04,  # 1e-07
            'int_vol': 24.0e-15,
            'cyt_vol': 21.9e-15,
            'nuc_vol': 2.1e-15,
            'rRNA': 3.322259136212625e-06},  # 1e-09

        'reactions': {
            'v_DEG_mRNA_R': {'modifiers': {},
                             'products': {'NA': 1474},
                             'rate': '(k_DEG_mRNA_R * mRNA_R)*int_vol',
                             'substrates': {'mRNA_R': 1}},
            'v_DEG_mRNA_met': {'modifiers': {},
                               'products': {'NA': 1474},
                               'rate': '(k_DEG_mRNA_met * mRNA_met)*int_vol',
                               'substrates': {'mRNA_met': 1}},
            'v_DEG_mRNA_other': {'modifiers': {},
                                 'products': {'NA': 1474},
                                 'rate': '(k_DEG_mRNA_other * mRNA_other)*int_vol',
                                 'substrates': {'mRNA_other': 1}},
            'v_DEG_rRNA': {'modifiers': {},
                           'products': {'NA': 5469},
                           'rate': '(k_DEG_rRNA * rRNA)*int_vol',
                           'substrates': {'rRNA': 1}},
            'v_TRSC_mRNA_R': {'modifiers': {},
                              'products': {'ADP': 2948,
                                           'P_i': 2948,
                                           'mRNA_R': 1},
                              'rate': '(vmax_TRSC_mRNA_R * (ATP/(k_atp + ATP)) * (NA/(k_na + NA)))*int_vol',
                              'substrates': {'ATP': 2948, 'NA': 1474}},
            'v_TRSC_mRNA_met': {'modifiers': {},
                                'products': {'ADP': 2948,
                                             'P_i': 2948,
                                             'mRNA_met': 1},
                                'rate': '(vmax_TRSC_mRNA_met * (ATP/(k_atp + ATP)) * (NA/(k_na + NA)))*int_vol',
                                'substrates': {'ATP': 2948, 'NA': 1474}},
            'v_TRSC_mRNA_other': {'modifiers': {},
                                  'products': {'ADP': 2948,
                                               'P_i': 2948,
                                               'mRNA_other': 1},
                                  'rate': '(vmax_TRSC_mRNA_other * (ATP/(k_atp + ATP)) * (NA/(k_na + NA)))*int_vol',
                                  'substrates': {'ATP': 2948, 'NA': 1474}},
            'v_TRSC_rRNA': {'modifiers': {},
                            'products': {'rRNA': 1},
                            'rate': '(vmax_TRSC_rRNA * (ATP/(k_atp + ATP)) * (NA/(k_na + NA)))*int_vol',
                            'substrates': {'ATP': 10938, 'NA': 5469}}},

        'sp_annotations': {
            'ADP': 'CHEBI:456216',
            'ATP': 'CHEBI:30616',
            'NA': 'YCM:NA',
            'P_i': 'CHEBI:43474',
            'mRNA_R': 'YCM:mRNA_R',
            'mRNA_met': 'YCM:mRNA_metabolic',
            'mRNA_other': 'YCM:mRNA_other',
            'int_vol': 'SBO:0000468',
            'nuc_vol': 'SBO:0000468',
            'cyt_vol': 'SBO:0000468',
            'rRNA': 'YCM:rRNA'},

        'sp_compartment': {
            'ADP': 'intracellular',
            'ATP': 'intracellular',
            'NA': 'intracellular',
            'P_i': 'intracellular',
            'mRNA_R': 'intracellular',
            'mRNA_met': 'intracellular',
            'mRNA_other': 'intracellular',
            'int_vol': 'intracellular',
            'nuc_vol': 'nucleus',
            'cyt_vol': 'cytosol',
            'rRNA': 'intracellular'},

        'sp_states': {
            'ADP': '-3',
            'ATP': '-4',
            'NA': '0',
            'P_i': '-2',
            'mRNA_R': '0',
            'mRNA_met': '0',
            'mRNA_other': '0',
            'int_vol': '0',
            'nuc_vol': '0',
            'cyt_vol': '0',
            'rRNA': '0'},

        'units_pars': {
            'k_DEG_mRNA_R': 's**-1',
            'k_DEG_mRNA_met': 's**-1',
            'k_DEG_mRNA_other': 's**-1',
            'k_DEG_rRNA': 's**-1',
            'k_atp': 'mM',
            'k_na': 'mM',
            'vmax_TRSC_mRNA_R': 'mM/s',
            'vmax_TRSC_mRNA_met': 'mM/s',
            'vmax_TRSC_mRNA_other': 'mM/s',
            'vmax_TRSC_rRNA': 'mM/s'},

        'units': {
            'ADP': 'mM',
            'ATP': 'mM',
            'NA': 'mM',
            'P_i': 'mM',
            'mRNA_R': 'mM',
            'mRNA_met': 'mM',
            'mRNA_other': 'mM',
            'int_vol': 'L',
            'nuc_vol': 'L',
            'cyt_vol': 'L',
            'rRNA': 'mM'}}

    modeldict['alg_eqs'] = {}

    modeldict['odes'] = YCM_tools.generate_odes_from_reactions(modeldict['reactions'], modeldict['sp_compartment'],
                                                               modeldict['sp_annotations'], modeldict['units'],
                                                               modeldict['com_annotations'])
    modeldict['type'] = 'ODE'


    return modeldict