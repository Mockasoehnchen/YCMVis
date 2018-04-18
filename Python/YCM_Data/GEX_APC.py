import math
import GenerateODEsFromReactions as YCM_tools


def GEX_APC():
    modeldict = {
    'info': 'Gene expression model - Assembly of protein complexes\nAutomatically updated by GRN scripts (Max Floettmann).\nFormer part of the GRN_core module.',

    'name': 'GEX_APC',

    'com_annotations': {
        'cytosol': 'GO:0005829', 'nucleus': 'GO:0005634', 'intracellular': 'GO:0044424'},

    'initpars': {
        'k_ASS_Ribosome': 100,
        'k_DIS_Ribosome': 0.01},

    'initvars': {
        'B_Protein_R': 0.39248664688497608,  # 0.00039248664688497608
        'Ribosome': 187000 / (24 * 1e-15) / (6.022140857 * 10 ** 20),
    # 1e-06 - Jens 01/07/2015 - before: 200 ribos instead of 200000!
        'int_vol': 30.0e-15,
        'cyt_vol': 21.9e-15,
        'nuc_vol': 2.1e-15,
        'rRNA': 3.322259136212625e-06},  # 1e-09

    'reactions': {
        'v_ASS_Ribosome': {'modifiers': {},
                           'products': {'Ribosome': 1},
                           'rate': '(k_ASS_Ribosome * rRNA * B_Protein_R)*int_vol',
                           'substrates': {'B_Protein_R': 78,
                                          'rRNA': 1}},
        'v_DIS_Ribosome': {'modifiers': {},
                           'products': {'B_Protein_R': 78, 'rRNA': 1},
                           'rate': '(k_DIS_Ribosome * Ribosome)*int_vol',
                           'substrates': {'Ribosome': 1}}},

    'units': {
        'B_Protein_R': 'mM',
        'Ribosome': 'mM',
        'nuc_vol': 'L',
        'int_vol': 'L',
        'cyt_vol': 'L',
        'rRNA': 'mM'},

    'sp_states': {
        'B_Protein_R': '0',
        'Ribosome': '0',
        'nuc_vol': '0',
        'int_vol': '0',
        'cyt_vol': '0',
        'rRNA': '0'},

    'sp_compartment': {
        'B_Protein_R': 'intracellular',
        'Ribosome': 'intracellular',
        'nuc_vol': 'nucleus',
        'int_vol': 'intracellular',
        'cyt_vol': 'cytosol',
        'rRNA': 'intracellular'},

    'sp_annotations': {
        'B_Protein_R': 'YCM:B_Protein_R',
        'Ribosome': 'YCM:ribosome',
        'int_vol': 'SBO:0000468',
        'nuc_vol': 'SBO:0000468',
        'cyt_vol': 'SBO:0000468',
        'rRNA': 'YCM:rRNA'},

    'alg_eqs': {},

    'units_pars': {
        'k_ASS_Ribosome': 's**-1',
        'k_DIS_Ribosome': 's**-1'}}

    modeldict['odes'] = YCM_tools.generate_odes_from_reactions(modeldict['reactions'], modeldict['sp_compartment'],
                                                               modeldict['sp_annotations'], modeldict['units'],
                                                               modeldict['com_annotations'])
    modeldict['type'] = 'ODE'


    return modeldict