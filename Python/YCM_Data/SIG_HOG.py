from math import *


def SIG_HOG():
    """
    Reimplementation of Klipp, Nordlander et al. 2006
        - model needs:
            turgor        [edit: check naming convention]
            turgor_init    [edit: check naming convention]
            Hog1PPase_0_nuc
            Hog1PPase_0_nuc_init
        - model output:
            Hog1_PP_nuc
            Hog1_PP_cyt
    """

    # parameter values

    initpars = {}  # e.g. initpars['GlcX0'] = 24.0; initpars['V2m'] = 1.01496e3  # (*mM min**-1*)

    # Phosphorelay module; Klipp, Nordlander et al. 2006

    initpars['k_Sln1_P_basal'] = 5  # (*s**-1*)
    initpars['k_Sln1_PT_Ypd1'] = 50 * 10 ** (3)  # (*mM**-1 s**-1*)
    initpars['k_Ypd1_PT_Sln1'] = 50 * 10 ** (3)  # (*mM**-1 s**-1*)
    initpars['k_Ypd1_PT_Ssk1'] = 50 * 10 ** (3)  # (*mM**-1 s**-1*)
    initpars['k_Ssk1_deP'] = 0.41516746320804115  # (*s**-1*)

    # MAP kinase module; Klipp, Nordlander et al. 2006

    initpars['k_Ssk2_P'] = 1.538 * 10 ** (3)  # (*mM**-1 s**-1*)
    initpars['k_Pbs2_P'] = 1.538 * 10 ** (3)  # (*mM**-1 s**-1*)
    initpars['k_Pbs2_PP'] = 1.538 * 10 ** (3)  # (*mM**-1 s**-1*)
    initpars['k_Hog1_P'] = 1.538 * 10 ** (3)  # (*mM**-1 s**-1*)
    initpars['k_Hog1_PP'] = 1.538 * 10 ** (3)  # (*mM**-1 s**-1*)

    initpars['k_Ssk2_deP'] = 0.011  # (*s**-1*)
    initpars['k_Pbs2_deP'] = 0.011  # (*s**-1*)
    initpars['k_Pbs2_dePP'] = 0.011  # (*s**-1*)
    initpars['k_Hog1_deP'] = 0.011  # (*s**-1*)
    initpars['k_Hog1_dePP'] = 0.011  # (*s**-1*)

    initpars['k_Hog1_PP_CytNuc'] = 0.029  # (*s**-1*)
    initpars['k_Hog1_0_NucCyt'] = 0.110  # (*s**-1*)
    initpars['k_Hog1_0_CytNuc'] = 0.091  # (*s**-1*)
    initpars['k_Hog1_nuc_dePP'] = 0.0053  # (*s**-1*)
    initpars['turgor_init'] = 0.875e6  # (*J* m**-3*)

    # initial values

    initvars = {}  # e.g. initvars['glc_ext'] = 6.7; initvars['glc_cyt'] = 0.573074; initvars['g6p_cyt'] = 4.2

    # Phosphorelay module; Klipp, Nordlander et al. 2006

    initvars['Sln1_0_cyt'] = 13.75 * 10 ** (-6)  # mM
    initvars['Sln1_P_cyt'] = 2.25 * 10 ** (-6)  # mM
    initvars['Ypd1_0_cyt'] = 120 * 10 ** (-6)  # mM
    initvars['Ypd1_P_cyt'] = 36 * 10 ** (-6)  # mM
    initvars['Ssk1_0_cyt'] = 27.12 * 10 ** (-6)  # mM
    initvars['Ssk1_P_cyt'] = 1.88 * 10 ** (-6)  # mM

    # MAP kinase module; Klipp, Nordlander et al. 2006

    initvars['Ssk2_0_cyt'] = 5.306 * 10 ** (-6)  # mM
    initvars['Ssk2_P_cyt'] = 1.394 * 10 ** (
    -6)  # mM [edit: calculated, model objective 274 molecules total Ssk2 per cell]
    initvars['Pbs2_0_cyt'] = 42.9 * 10 ** (-6)  # mM
    initvars['Pbs2_P_cyt'] = 8.38 * 10 ** (-6)  # mM
    initvars['Pbs2_PP_cyt'] = 1.72 * 10 ** (
    -6)  # mM    [edit: calculated, model objective 2160 molecules total Pbs2 per cell]
    initvars['Hog1_0_cyt'] = 79 * 10 ** (-6)  # mM
    initvars['Hog1_P_cyt'] = 15.5 * 10 ** (-6)  # mM
    initvars['Hog1_PP_cyt'] = 0.9 * 10 ** (-6)  # mM
    initvars['Hog1_PP_nuc'] = 0.9 * 10 ** (-6)  # 0.03 * 10**(-3) # mM
    initvars['Hog1_0_nuc'] = 79 * 10 ** (
    -6)  # 0.5 * 10**(-3) # mM [edit: model objective 6780 molecules total Hog1 per cell]

    initvars['turgor'] = 0.875e6  # 0.1 #0.1 #0.1 #initpars['turgor_init'] # J* m**-3
    # initvars['turgor_init'] = 0.875     # J* m**-3
    initvars['Hog1PPase_0_nuc'] = 1 * 10 ** (-3)  # nM [edit: Check and discuss numbers!]
    initvars['Hog1PPase_0_nuc_init'] = 1 * 10 ** (-3)  # nM [edit: Check and discuss numbers!]

    # 2. rate equations # e.g. v011 = '(k0 * GlcX0)'

    # Phosphorelay module; Klipp, Nordlander et al. 2006

    # k_Sln1_P = '(k_Sln1_P_basal * (turgor / turgor_init))'    # phosphorylation rate depending on turgor

    v_Sln1_P = '((k_Sln1_P_basal * (turgor / turgor_init)**2)  * Sln1_0_cyt)'
    v_Sln1_PT_Ypd1 = '(k_Sln1_PT_Ypd1 * Sln1_P_cyt * Ypd1_0_cyt - k_Ypd1_PT_Sln1 * Sln1_0_cyt * Ypd1_P_cyt)'
    v_Ypd1_PT_Ssk1 = '(k_Ypd1_PT_Ssk1 * Ssk1_0_cyt * Ypd1_P_cyt)'
    v_Ssk1_deP = '(k_Ssk1_deP * Ssk1_P_cyt)'

    # MAP kinase module; Klipp, Nordlander et al. 2006

    v_Ssk2_P = '(6 * k_Ssk2_P * Ssk2_0_cyt * Ssk1_0_cyt)'
    v_Ssk2_deP = '(6 * k_Ssk2_deP * Ssk2_P_cyt)'

    v_Pbs2_P = '(6 * k_Pbs2_P * Pbs2_0_cyt * Ssk2_P_cyt)'
    v_Pbs2_deP = '(6 * k_Pbs2_deP * Pbs2_P_cyt)'
    v_Pbs2_PP = '(6 * k_Pbs2_PP * Pbs2_P_cyt * Ssk2_P_cyt)'
    v_Pbs2_dePP = '(6 * k_Pbs2_dePP * Pbs2_PP_cyt)'

    v_Hog1_P = '(6 * k_Hog1_P * Hog1_0_cyt * Pbs2_PP_cyt)'
    v_Hog1_deP = '(6 * k_Hog1_deP * Hog1_P_cyt)'
    v_Hog1_PP = '(6 * k_Hog1_PP * Hog1_P_cyt * Pbs2_PP_cyt)'
    v_Hog1_dePP = '(6 * k_Hog1_dePP * Hog1_PP_cyt)'

    v_Hog1_0_NucCyt = '(k_Hog1_0_NucCyt * Hog1_0_nuc)'
    v_Hog1_0_CytNuc = '(k_Hog1_0_CytNuc * Hog1_0_cyt)'
    v_Hog1_PP_CytNuc = '(6 * k_Hog1_PP_CytNuc * Hog1_PP_cyt)'

    # v_Hog1_nuc_dePP = '((Hog1PPase_0_nuc / Hog1PPase_0_nuc_init) * k_Hog1_nuc_dePP * Hog1_PP_nuc)'
    v_Hog1_nuc_dePP = '(6 * k_Hog1_nuc_dePP * Hog1_PP_nuc)'
    # v_Hog1_nuc_dePP = '(k_Hog1_nuc_dePP * Hog1_PP_nuc)'



    # (*3. differential equations*)

    odes = {}  # e.g. odes['glc_cyt'] = v021 + '-' + v022 + '-' + v03

    # Phosphorelay module; Klipp, Nordlander et al. 2006

    odes['Sln1_0_cyt'] = '( -' + v_Sln1_P + '+' + v_Sln1_PT_Ypd1 + ')'
    odes['Sln1_P_cyt'] = '(' + v_Sln1_P + '-' + v_Sln1_PT_Ypd1 + ')'

    odes['Ypd1_0_cyt'] = '(' + v_Ypd1_PT_Ssk1 + '-' + v_Sln1_PT_Ypd1 + ')'
    odes['Ypd1_P_cyt'] = '(' + v_Sln1_PT_Ypd1 + '-' + v_Ypd1_PT_Ssk1 + ')'

    odes['Ssk1_0_cyt'] = '(' + v_Ssk1_deP + '-' + v_Ypd1_PT_Ssk1 + ')'
    odes['Ssk1_P_cyt'] = '(' + v_Ypd1_PT_Ssk1 + '-' + v_Ssk1_deP + ')'

    # MAP kinase module; Klipp, Nordlander et al. 2006

    odes['Ssk2_0_cyt'] = '( -' + v_Ssk2_P + '+' + v_Ssk2_deP + ')'
    odes['Ssk2_P_cyt'] = '(' + v_Ssk2_P + '-' + v_Ssk2_deP + ')'

    odes['Pbs2_0_cyt'] = '( -' + v_Pbs2_P + '+' + v_Pbs2_deP + ')'
    odes['Pbs2_P_cyt'] = '(' + v_Pbs2_P + '-' + v_Pbs2_deP + '-' + v_Pbs2_PP + '+' + v_Pbs2_dePP + ')'
    odes['Pbs2_PP_cyt'] = '(' + v_Pbs2_PP + '-' + v_Pbs2_dePP + ')'

    odes['Hog1_0_cyt'] = '( -' + v_Hog1_P + '+' + v_Hog1_deP + '-' + v_Hog1_0_CytNuc + '+' + v_Hog1_0_NucCyt + ')'
    odes['Hog1_P_cyt'] = '(' + v_Hog1_P + '-' + v_Hog1_deP + '-' + v_Hog1_PP + '+' + v_Hog1_dePP + ')'
    odes['Hog1_PP_cyt'] = '(' + v_Hog1_PP + '-' + v_Hog1_dePP + '-' + v_Hog1_PP_CytNuc + ')'
    odes['Hog1_PP_nuc'] = '(' + v_Hog1_PP_CytNuc + '-' + v_Hog1_nuc_dePP + ')'
    odes['Hog1_0_nuc'] = '(' + v_Hog1_0_CytNuc + '-' + v_Hog1_0_NucCyt + '+' + v_Hog1_nuc_dePP + ')'

    odes['turgor'] = '0'
    odes['turgor_init'] = '0'
    odes['Hog1PPase_0_nuc'] = '0'
    odes['Hog1PPase_0_nuc_init'] = '0'

    # model dict

    modeldict = {}
    modeldict['name'] = 'SIG_HOG'
    modeldict['initvars'] = initvars
    modeldict['initpars'] = initpars
    modeldict['odes'] = odes
    modeldict['sp_compartment'] = {'Sln1_0_cyt': 'cytosol',
                                   'Sln1_P_cyt': 'cytosol',
                                   'Ypd1_0_cyt': 'cytosol',
                                   'Ypd1_P_cyt': 'cytosol',
                                   'Ssk1_0_cyt': 'cytosol',
                                   'Ssk1_P_cyt': 'cytosol',
                                   'Ssk2_0_cyt': 'cytosol',
                                   'Ssk2_P_cyt': 'cytosol',
                                   'Pbs2_0_cyt': 'cytosol',
                                   'Pbs2_P_cyt': 'cytosol',
                                   'Pbs2_PP_cyt': 'cytosol',
                                   'Hog1_0_cyt': 'cytosol',
                                   'Hog1_P_cyt': 'cytosol',
                                   'Hog1_PP_cyt': 'cytosol',
                                   'Hog1_PP_nuc': 'nucleus',
                                   'Hog1_0_nuc': 'nucleus',
                                   'Hog1PPase_0_nuc_init': 'nucleus',
                                   'Hog1PPase_0_nuc': 'nucleus',
                                   'turgor': 'cytosol',  # "external"? [edit: ToDo -> check/change compartment]
                                   'turgor_init': 'cytosol'}  # "external"? [edit: ToDo -> check/change compartment]

    modeldict['sp_annotations'] = {'Sln1_0_cyt': 'SGD:Yil147cp',
                                   'Sln1_P_cyt': 'SGD:Yil147cp_1',
                                   'Ypd1_0_cyt': 'SGD:Ydl235cp_2',
                                   'Ypd1_P_cyt': 'SGD:Ydl235cp_3',
                                   'Ssk1_0_cyt': 'SGD:Ylr006cp_4',
                                   'Ssk1_P_cyt': 'SGD:Ylr006cp_5',
                                   'Ssk2_0_cyt': 'SGD:Ynr031cp_6',
                                   'Ssk2_P_cyt': 'SGD:Ynr031cp_7',
                                   'Pbs2_0_cyt': 'SGD:Yjl128cp_8',
                                   'Pbs2_P_cyt': 'SGD:Yjl128cp_9',
                                   'Pbs2_PP_cyt': 'SGD:Yjl128cp_10',
                                   'Hog1_0_cyt': 'SGD:Ylr113wp_11',
                                   'Hog1_P_cyt': 'SGD:Ylr113wp_12',
                                   'Hog1_PP_cyt': 'SGD:Ylr113wp_13',
                                   'Hog1_PP_nuc': 'SGD:Ylr113wp_14',
                                   'Hog1_0_nuc': 'SGD:Ylr113wp_15',
                                   'Hog1PPase_0_nuc': 'YCM:Hog1PPase',
                                   'Hog1PPase_0_nuc_init': 'YCM:Hog1PPase_init',
                                   'turgor': 'SBO:0000279'}
    # [edit: ToDo -> annotate Hog1PPase_0_nuc_init and Hog1PPase_0_nuc]


    modeldict['sp_states'] = {'Sln1_0_cyt': '0',
                              'Sln1_P_cyt': 'P',
                              'Ypd1_0_cyt': '0',
                              'Ypd1_P_cyt': 'P',
                              'Ssk1_0_cyt': '0',
                              'Ssk1_P_cyt': 'P',
                              'Ssk2_0_cyt': '0',
                              'Ssk2_P_cyt': 'P',
                              'Pbs2_0_cyt': '0',
                              'Pbs2_P_cyt': 'P',
                              'Pbs2_PP_cyt': 'PP',
                              'Hog1_0_cyt': '0',
                              'Hog1_P_cyt': 'P',
                              'Hog1_PP_cyt': 'PP',
                              'Hog1_PP_nuc': 'PP',
                              'Hog1_0_nuc': '0'}

    modeldict['units'] = {'Sln1_0_cyt': 'mM',
                          'Sln1_P_cyt': 'mM',
                          'Ypd1_0_cyt': 'mM',
                          'Ypd1_P_cyt': 'mM',
                          'Ssk1_0_cyt': 'mM',
                          'Ssk1_P_cyt': 'mM',
                          'Ssk2_0_cyt': 'mM',
                          'Ssk2_P_cyt': 'mM',
                          'Pbs2_0_cyt': 'mM',
                          'Pbs2_P_cyt': 'mM',
                          'Pbs2_PP_cyt': 'mM',
                          'Hog1_0_cyt': 'mM',
                          'Hog1_P_cyt': 'mM',
                          'Hog1_PP_cyt': 'mM',
                          'Hog1_PP_nuc': 'mM',
                          'Hog1_0_nuc': 'mM',
                          'Hog1PPase_0_nuc': 'mM',
                          'Hog1PPase_0_nuc_init': 'mM',
                          'turgor': 'Pa',
                          'turgor_init': 'Pa'}

    modeldict['com_annotations'] = {'cytosol': 'GO:0005829', 'nucleus': 'GO:0005634'}
    modeldict['reactions'] = {}


    return modeldict