import GenerateODEsFromReactions as YCM_tools


def GEX_GRN():
    '''
    Automatically generated GRN module for regulated proteins from JSON input.
    '''
    module_dict = {}
    module_dict['info'] = 'Automatically generated GRN module for regulated proteins from JSON input.'

    # ODE_conversion_factor = 30*1e-15 # int_vol*1e-15
    # ODE_conversion_factor = 1./(6.022140857 *10**20)
    volume_correction = 1.0

    ### Initial Values for Species:
    module_dict['initvars'] = {'AA': 144.87,  # 1.175/(30*1e-15)/(6.022140857 *10**20), # 144.87
                               'Pi': 50.0,  # 1.135/(30*1e-15)/(6.022140857 *10**20),	# 50.0
                               'ADP': 0.32,  # 1.145/(30*1e-15)/(6.022140857 *10**20),	# 0.32
                               'ATP': 2.0,  # 1.15/(30*1e-15)/(6.022140857 *10**20),	# 2.0
                               'NA': 0.1,  # 1.165/(30*1e-15)/(6.022140857 *10**20),	# 0.1
                               'ribosome': 187000 / (16.0 * 1e-15) / (6.022140857 * 10 ** 20),
                               # 0.009284020214175246  # 1.15/(30*1e-15)/(6.022140857 *10**20),
                               'int_vol': 16.0e-15,
                               'nuc_vol': 1.4e-15,

                               'mSBF': volume_correction * 1.0 / (16.0 * 1e-15) / (6.022140857 * 10 ** 20),  # 1.
                               'SBF': volume_correction * 0.163989611608 / (16.0e-15) / (6.022140857 * 10 ** 20),
                               # 0.0650019
                               'SBF_p': volume_correction * 0.00303453629439 / (16.0e-15) / (6.022140857 * 10 ** 20),
                               # 0.001169

                               'mCdc14': volume_correction * 3.0 / (16.0 * 1e-15) / (6.022140857 * 10 ** 20),  # 1.
                               'Cdc14': volume_correction * 3518.80088585 / (16.0e-15) / (6.022140857 * 10 ** 20),
                               # 3529.16
                               'Cdc14_p': volume_correction * 241.20011414 / (16.0e-15) / (6.022140857 * 10 ** 20),
                               # 230.841

                               'mFar1': volume_correction * 1.0 / (16.0 * 1e-15) / (6.022140857 * 10 ** 20),  # 1.
                               'Far1': volume_correction * 257.646155629 / (16.0 * 1e-15) / (6.022140857 * 10 ** 20),
                               # 256.935
                               'Fus3': volume_correction * 0.0 / (16.0 * 1e-15) / (6.022140857 * 10 ** 20),

                               'mMih1': volume_correction * 1.0 / (16.0 * 1e-15) / (6.022140857 * 10 ** 20),  # 1.
                               'Mih1': volume_correction * 107.0 / (16.0 * 1e-15) / (6.022140857 * 10 ** 20),  # 107.

                               'Cln3': volume_correction * 70.2499906409 / (16.0 * 1e-15) / (6.022140857 * 10 ** 20),
                               # 70.2499
                               'mCln3': volume_correction * 1.615 / (16.0 * 1e-15) / (6.022140857 * 10 ** 20),  # 1.

                               'mSwe1': volume_correction * 2.1 / (16.0 * 1e-15) / (6.022140857 * 10 ** 20),  # 1.
                               'Swe1': volume_correction * 16.5095430573 / (16.0 * 1e-15) / (6.022140857 * 10 ** 20),
                               # 16.5105

                               'mWhi5': volume_correction * 1.0 / (16.0 * 1e-15) / (6.022140857 * 10 ** 20),  # 1.
                               'Whi5': volume_correction * 588.335666954 / (16.0 * 1e-15) / (6.022140857 * 10 ** 20),
                               # 587.842

                               'mCln2': volume_correction * 69.0 * 0.000148845715842 / (16.0 * 1e-15) / (
                               6.022140857 * 10 ** 20),  # 0.
                               'Cln2': volume_correction * 0.980895345867 / (16.0 * 1e-15) / (6.022140857 * 10 ** 20),
                               # 0.451062
                               'HOG1': volume_correction * 0.0 / (16.0 * 1e-15) / (6.022140857 * 10 ** 20),

                               'MBF': volume_correction * 0.0159101628959 / (16.0 * 1e-15) / (6.022140857 * 10 ** 20),
                               # 0.0143144
                               'mMBF': volume_correction * 5.5 * 5.70852852783e-11 / (16.0 * 1e-15) / (
                               6.022140857 * 10 ** 20),  # 0.

                               'Clb5': volume_correction * 0.00562512781279 / (16.0 * 1e-15) / (6.022140857 * 10 ** 20),
                               # 0.00529381
                               'mClb5': volume_correction * 4.3 * 0.000319447008521 / (16.0 * 1e-15) / (
                               6.022140857 * 10 ** 20),  # 0.

                               'Clb3': volume_correction * 15.9937764044 / (16.0 * 1e-15) / (6.022140857 * 10 ** 20),
                               # 15.6615
                               'mClb3': volume_correction * 4.14 * 1.43464799333e-12 / (16.0 * 1e-15) / (
                               6.022140857 * 10 ** 20),  # 0.

                               'Sic1': volume_correction * 743.771267535 / (16.0 * 1e-15) / (6.022140857 * 10 ** 20),
                               # 739.666
                               'mSic1': volume_correction * 6.57 * 0.647834920244 / (16.0 * 1e-15) / (
                               6.022140857 * 10 ** 20),  # 1.

                               'Swi5': volume_correction * 1382.00592036 / (16.0 * 1e-15) / (6.022140857 * 10 ** 20),
                               # 1293.08
                               'mSwi5': volume_correction * 17.3 * 0.00656308495519 / (16.0 * 1e-15) / (
                               6.022140857 * 10 ** 20),  # 1.

                               'APC': volume_correction * 33.7752286098 / (16.0 * 1e-15) / (6.022140857 * 10 ** 20),
                               # 31.5695
                               'mAPC': volume_correction * 1492. * 7.00615593243e-05 / (16.0 * 1e-15) / (
                               6.022140857 * 10 ** 20),  # 0.

                               'Clb2': volume_correction * 0.50833581703 / (16.0 * 1e-15) / (6.022140857 * 10 ** 20),
                               # 0.469292
                               'mClb2': volume_correction * 19 * 0.00131954539381 / (16.0 * 1e-15) / (
                               6.022140857 * 10 ** 20),  # 0.

                               'Mcm1': volume_correction * 328.640201918 / (16.0 * 1e-15) / (6.022140857 * 10 ** 20),
                               # 299.113
                               'mMcm1': volume_correction * 5.25 * 2.65328933236e-06 / (16.0 * 1e-15) / (
                               6.022140857 * 10 ** 20),  # 0.
                               }

    ### Initial Values for Parameters:
    module_dict['initpars'] = {'kM_ribosome': 0. * module_dict['initvars']['ribosome'] / 10.,
                               'kM_NA': 0. * module_dict['initvars']['NA'] / 10.,
                               'kM_ATP': 0. * module_dict['initvars']['ATP'] / 10.,
                               'kM_AA': 0. * module_dict['initvars']['AA'] / 10.,

                               # SBF
                               'vmax_TRSC_SBF': 1. / (16.0 * 1e-15) / (6.022140857 * 10 ** 20),
                               'vmax_TRSL_SBF': 3.500001709 / 60.,
                               'k_mSBF_deg': 1.,
                               'k_SBF_deg': 0.01 / 60.,
                               'k_SBF_p_deg': 0.01 / 60.,
                               # Cdc14
                               'vmax_TRSC_Cdc14': 3. / (16.0 * 1e-15) / (6.022140857 * 10 ** 20),
                               'vmax_TRSL_Cdc14': 376.0001 / 60. / 3.,
                               'k_mCdc14_deg': 1.,
                               'k_Cdc14_deg': 0.1 / 60.,
                               'k_Cdc14_p_deg': 0.1 / 60.,
                               # Far1
                               'k_mFar1_deg': 1.,
                               'kd_Far1': 0.02 / 60.,
                               'kdd_Far1': 0.0033 / 60. / 50. * (16.0 * 1e-15) * (6.022140857 * 10 ** 20),
                               'kp_basal_Far1': 0.14066 / 60. * 50.,  # 'kp_basal_Far1': 'dimensionless * (s)**-1',
                               'vmax_TRSC_Far1': 1. / (16.0 * 1e-15) / (6.022140857 * 10 ** 20),
                               'kp_Far1': 2.99896964 / 60. * 50,
                               # edit: changed factor to .*50 ... possibly mistake from conversion Copasi to Python
                               # Mcm1
                               'vmax_TRSC_Mcm1': 5.25 / (16.0 * 1e-15) / (6.022140857 * 10 ** 20),
                               'k_mMcm1_deg': 1.,
                               'V0_Mcm1': 20.404 * 50. / (16.0 * 1e-15) / (6.022140857 * 10 ** 20),
                               'v0_Mcm1': 40.050851 / 60. * 50. / 5.25,
                               'n_Mcm1': 3.0,
                               'kd_Mcm1': 0.30555 / 60.,
                               'kp_Mcm1': 60.0 / 60. * 50. / 5.25,
                               'Kp_Mcm1': 2.5 * 50. / (16.0 * 1e-15) / (6.022140857 * 10 ** 20),
                               # Mih1
                               'vmax_TRSC_Mih1': 1. / (16.0 * 1e-15) / (6.022140857 * 10 ** 20),
                               'vmax_TRSL_Mih1': 0.214 / 60. * 50.,
                               'k_mMih1_deg': 1.,
                               'k_Mih1_deg': 0.1 / 60.,
                               # Cln3
                               'vmax_TRSC_Cln3': 1.615 / (16.0 * 1e-15) / (6.022140857 * 10 ** 20),
                               'vmax_TRSL_Cln3': 0.01405 / 60. * 50. / 1.615,
                               'k_mCln3_deg': 1.,
                               'k_Cln3_deg': 0.01 / 60.,
                               # Swe1
                               'vmax_TRSC_Swe1': 2.1 / (16.0 * 1e-15) / (6.022140857 * 10 ** 20),
                               'vmax_TRSL_Swe1': 0.56044 / 60. * 50. / 2.1,
                               'k_mSwe1_deg': 1.,
                               'k_Swe1_deg': 0.1 / 60.,
                               # Whi5
                               'vmax_TRSC_Whi5': 1. / (16.0 * 1e-15) / (6.022140857 * 10 ** 20),
                               'vmax_TRSL_Whi5': 0.202038 / 60. * 50.,  # 0.079733,
                               'k_mWhi5_deg': 1.,
                               'k_Whi5_deg': 0.01 / 60.,  # 0.0004333,
                               # Cln2
                               'vmax_TRSC_Cln2': 69.0 / (16.0 * 1e-15) / (6.022140857 * 10 ** 20),
                               'k_mCln2_deg': 1.,
                               'kd_Cln2': 0.2267 / 60.,
                               'kp_Cln2': 28.0496125 / 60. * 50. / 69.0,
                               'Kp_Cln2': 22.025 * 50. / (16.0 * 1e-15) / (6.022140857 * 10 ** 20),
                               # MBF
                               'vmax_TRSC_MBF': 5.5 / (16.0 * 1e-15) / (6.022140857 * 10 ** 20),
                               'k_mMBF_deg': 1.,
                               'kp_MBF': 3.0 / 60. * 50. / 5.5,
                               'kd_MBF': 0.2527 / 60.,
                               'K_MBF': 1.0 * 50. / (16.0 * 1e-15) / (6.022140857 * 10 ** 20),
                               'n1': 6.0,
                               # Clb5
                               'vmax_TRSC_Clb5': 4.3 / (16.0 * 1e-15) / (6.022140857 * 10 ** 20),
                               'k_mClb5_deg': 1.,
                               'kd_Clb5': 0.187825 / 60.,
                               'kd_Clb5_APC': 1.001 / 60. / 50. * (16.0 * 1e-15) * (6.022140857 * 10 ** 20),
                               'kp_Clb5': 0.99975 / 60. * 50. / 4.3,
                               'Kp_Clb5': 1.0 * 50. / (16.0 * 1e-15) / (6.022140857 * 10 ** 20),
                               # Clb3
                               'vmax_TRSC_Clb3': 4.14 / (16.0 * 1e-15) / (6.022140857 * 10 ** 20),
                               'k_mClb3_deg': 1.,
                               'kd_Clb3': 0.005 / 60.,
                               'kd_Clb3_APC': 0.05 / 60. / 50. * (16.0 * 1e-15) * (6.022140857 * 10 ** 20),
                               'kp_Clb3': 0.5116 / 60. * 50. / 4.14,
                               'Kp_Clb3': 1.0 * 50. / (16.0 * 1e-15) / (6.022140857 * 10 ** 20),
                               'n_Clb3': 3.0,
                               # Sic1
                               'vmax_TRSC_Sic1': 6.57 / (16.0 * 1e-15) / (6.022140857 * 10 ** 20),
                               'k_mSic1_deg': 1.,
                               'kd_Sic1': 0.1 / 60.,
                               'Kp_Sic1': 15.028 * 50. / (16.0 * 1e-15) / (6.022140857 * 10 ** 20),
                               'kp_Sic1': 4.52804 / 60. * 50. / 6.57,
                               # Swi5
                               'vmax_TRSC_Swi5': 17.3 / (16.0 * 1e-15) / (6.022140857 * 10 ** 20),
                               'k_mSwi5_deg': 1.,
                               'Kp_Swi5': 1000.0 * 50. / (16.0 * 1e-15) / (6.022140857 * 10 ** 20),
                               'kp_Swi5': 4.784016848 / 60. * 50. / 17.3,
                               'kd_Swi5': 0.013 / 60.,
                               # APC
                               'vmax_TRSC_APC': 1492. / (16.0 * 1e-15) / (6.022140857 * 10 ** 20),
                               'k_mAPC_deg': 1.,
                               'kd_APC': 0.22 / 60.,
                               'Kp_APC': 94288.25 * 50. / (16.0 * 1e-15) / (6.022140857 * 10 ** 20),
                               'kp_APC': 335.5185235 / 60. * 50. / 1492.,
                               # Clb2
                               'vmax_TRSC_Clb2': 19. / (16.0 * 1e-15) / (6.022140857 * 10 ** 20),
                               'k_mClb2_deg': 1.,
                               'kd_Clb2_APC': 0.604 / 60. / 50. * (16.0 * 1e-15) * (6.022140857 * 10 ** 20),
                               'kd_Clb2': 0.025 / 60.,
                               'kp_Clb2': 50.0282949 / 60. * 50. / 19,
                               'Kp_Clb2': 5000.0 * 50. / (16.0 * 1e-15) / (6.022140857 * 10 ** 20),

                               # correction due to Km values
                               ### only if Km not 0!!! ###
                               'corr_Cdc14_TRSC': (10. / 10.) ** 2.,
                               'corr_Cdc14_TRSL': (10. / 10.) ** 3.,
                               'corr_Far1_TRSC': (10. / 10.) ** 2.,
                               'corr_Far1_TRSL': (10. / 10.) ** 3.,
                               'corr_Mih1_TRSC': (10. / 10.) ** 2.,
                               'corr_Mih1_TRSL': (10. / 10.) ** 3.,
                               'corr_Cln3_TRSC': (10. / 10.) ** 2.,
                               'corr_Cln3_TRSL': (10. / 10.) ** 3.,
                               'corr_Swe1_TRSC': (10. / 10.) ** 2.,
                               'corr_Swe1_TRSL': (10. / 10.) ** 3.,
                               'corr_Clb2_TRSC': (10. / 10.) ** 2.,
                               'corr_Clb2_TRSL': (10. / 10.) ** 3.,
                               'corr_Whi5_TRSC': (10. / 10.) ** 2.,
                               'corr_Whi5_TRSL': (10. / 10.) ** 3.,
                               'corr_Cln2_TRSC': (10. / 10.) ** 2.,
                               'corr_Cln2_TRSL': (10. / 10.) ** 3.,
                               'corr_Clb5_TRSC': (10. / 10.) ** 2.,
                               'corr_Clb5_TRSL': (10. / 10.) ** 3.,
                               'corr_MBF_TRSC': (10. / 10.) ** 2.,
                               'corr_MBF_TRSL': (10. / 10.) ** 3.,
                               'corr_Clb3_TRSC': (10. / 10.) ** 2.,
                               'corr_Clb3_TRSL': (10. / 10.) ** 3.,
                               'corr_Sic1_TRSC': (10. / 10.) ** 2.,
                               'corr_Sic1_TRSL': (10. / 10.) ** 3.,
                               'corr_Swi5_TRSC': (10. / 10.) ** 2.,
                               'corr_Swi5_TRSL': (10. / 10.) ** 3.,
                               'corr_Mcm1_TRSC': (10. / 10.) ** 2.,
                               'corr_Mcm1_TRSL': (10. / 10.) ** 3.,
                               'corr_APC_TRSC': (10. / 10.) ** 2.,
                               'corr_APC_TRSL': (10. / 10.) ** 3.,
                               }

    ### Model Name:
    module_dict['name'] = 'GEX_GRN'

    ### Parameter Units:
    module_dict['units_pars'] = {'kM_AA': 'mM',
                                 'kM_NA': 'mM',
                                 'kM_ribosome': 'mM',
                                 'kM_ATP': 'mM',
                                 # SBF
                                 'vmax_TRSC_SBF': 'mM/s',
                                 'vmax_TRSL_SBF': '1/s',
                                 'k_mSBF_deg': '1/s',
                                 'k_SBF_deg': '1/s',
                                 'k_SBF_p_deg': '1/s',
                                 # Cdc14
                                 'vmax_TRSC_Cdc14': 'mM/s',
                                 'vmax_TRSL_Cdc14': '1/s',
                                 'k_mCdc14_deg': '1/s',
                                 'k_Cdc14_deg': '1/s',
                                 'k_Cdc14_p_deg': '1/s',
                                 # Far1
                                 'k_mFar1_deg': '1/s',
                                 'kd_Far1': '1/s',
                                 'kdd_Far1': '1/(mM*s)',
                                 'kp_basal_Far1': '1/s',
                                 'vmax_TRSC_Far1': 'mM/s',
                                 'kp_Far1': '1/s',
                                 # edit: changed factor to .*50 ... possibly mistake from conversion Copasi to Python
                                 # Mih1
                                 'vmax_TRSC_Mih1': 'mM/s',
                                 'vmax_TRSL_Mih1': '1/s',
                                 'k_mMih1_deg': '1/s',
                                 'k_Mih1_deg': '1/s',
                                 # Cln3
                                 'vmax_TRSC_Cln3': 'mM/s',
                                 'vmax_TRSL_Cln3': '1/s',
                                 'k_mCln3_deg': '1/s',
                                 'k_Cln3_deg': '1/s',
                                 # Swe1
                                 'vmax_TRSC_Swe1': 'mM/s',
                                 'vmax_TRSL_Swe1': '1/s',
                                 'k_mSwe1_deg': '1/s',
                                 'k_Swe1_deg': '1/s',
                                 # Whi5
                                 'vmax_TRSC_Whi5': 'mM/s',
                                 'vmax_TRSL_Whi5': '1/s',
                                 'k_mWhi5_deg': '1/s',
                                 'k_Whi5_deg': '1/s',
                                 # Cln2
                                 'vmax_TRSC_Cln2': 'mM/s',
                                 'k_mCln2_deg': '1/s',
                                 'kd_Cln2': '1/s',
                                 'kp_Cln2': '1/s',
                                 'Kp_Cln2': 'mM',
                                 # Clb5
                                 'vmax_TRSC_Clb5': 'mM/s',
                                 'k_mClb5_deg': '1/s',
                                 'kd_Clb5': '1/s',
                                 'kd_Clb5_APC': '1/(mM*s)',
                                 'kp_Clb5': '1/s',
                                 'Kp_Clb5': 'mM',
                                 # MBF
                                 'vmax_TRSC_MBF': 'mM/s',
                                 'k_mMBF_deg': '1/s',
                                 'kp_MBF': '1/s',
                                 'kd_MBF': '1/s',
                                 'K_MBF': 'mM',
                                 'n1': 'dimensionless',
                                 # Clb3
                                 'vmax_TRSC_Clb3': 'mM/s',
                                 'k_mClb3_deg': '1/s',
                                 'kd_Clb3': '1/s',
                                 'kd_Clb3_APC': '1/(mM*s)',
                                 'kp_Clb3': '1/s',
                                 'Kp_Clb3': 'mM',
                                 'n_Clb3': 'dimensionless',
                                 # Sic1
                                 'vmax_TRSC_Sic1': 'mM/s',
                                 'k_mSic1_deg': '1/s',
                                 'kd_Sic1': '1/s',
                                 'Kp_Sic1': 'mM',
                                 'kp_Sic1': '1/s',
                                 # Swi5
                                 'vmax_TRSC_Swi5': 'mM/s',
                                 'k_mSwi5_deg': '1/s',
                                 'kd_Swi5': '1/s',
                                 'kp_Swi5': '1/s',
                                 'Kp_Swi5': 'mM',
                                 # Mcm1
                                 'vmax_TRSC_Mcm1': 'mM/s',
                                 'k_mMcm1_deg': '1/s',
                                 'Kp_Mcm1': 'mM',
                                 'kp_Mcm1': '1/s',
                                 'kd_Mcm1': '1/s',
                                 'n_Mcm1': 'dimensionless',
                                 'v0_Mcm1': '1/s',
                                 'V0_Mcm1': 'mM',
                                 # Clb2
                                 'vmax_TRSC_Clb2': 'mM/s',
                                 'k_mClb2_deg': '1/s',
                                 'Kp_Clb2': 'mM',
                                 'kp_Clb2': '1/s',
                                 'kd_Clb2': '1/s',
                                 'kd_Clb2_APC': '1/(mM*s)',
                                 # APC
                                 'vmax_TRSC_APC': 'mM/s',
                                 'k_mAPC_deg': '1/s',
                                 'kp_APC': '1/s',
                                 'Kp_APC': 'mM',
                                 'kd_APC': '1/s',
                                 # correction factors
                                 'corr_Cdc14_TRSC': 'dimensionless',
                                 'corr_Cdc14_TRSL': 'dimensionless',
                                 'corr_Far1_TRSC': 'dimensionless',
                                 'corr_Far1_TRSL': 'dimensionless',
                                 'corr_Mih1_TRSC': 'dimensionless',
                                 'corr_Mih1_TRSL': 'dimensionless',
                                 'corr_Cln3_TRSC': 'dimensionless',
                                 'corr_Cln3_TRSL': 'dimensionless',
                                 'corr_Swe1_TRSC': 'dimensionless',
                                 'corr_Swe1_TRSL': 'dimensionless',
                                 'corr_Clb2_TRSC': 'dimensionless',
                                 'corr_Clb2_TRSL': 'dimensionless',
                                 'corr_Whi5_TRSC': 'dimensionless',
                                 'corr_Whi5_TRSL': 'dimensionless',
                                 'corr_Cln2_TRSC': 'dimensionless',
                                 'corr_Cln2_TRSL': 'dimensionless',
                                 'corr_Clb5_TRSC': 'dimensionless',
                                 'corr_Clb5_TRSL': 'dimensionless',
                                 'corr_MBF_TRSC': 'dimensionless',
                                 'corr_MBF_TRSL': 'dimensionless',
                                 'corr_Clb3_TRSC': 'dimensionless',
                                 'corr_Clb3_TRSL': 'dimensionless',
                                 'corr_Sic1_TRSC': 'dimensionless',
                                 'corr_Sic1_TRSL': 'dimensionless',
                                 'corr_Swi5_TRSC': 'dimensionless',
                                 'corr_Swi5_TRSL': 'dimensionless',
                                 'corr_Mcm1_TRSC': 'dimensionless',
                                 'corr_Mcm1_TRSL': 'dimensionless',
                                 'corr_APC_TRSC': 'dimensionless',
                                 'corr_APC_TRSL': 'dimensionless'
                                 }

    ### Species Units:
    module_dict['units'] = {'AA': 'mM',
                            'NA': 'mM',
                            'ribosome': 'mM',
                            'ADP': 'mM',
                            'ATP': 'mM',
                            'int_vol': 'L',
                            'nuc_vol': 'L',
                            'Pi': 'mM',
                            'SBF': 'mM',
                            'mSBF': 'mM',
                            'SBF_p': 'mM',
                            'mCdc14': 'mM',
                            'Cdc14': 'mM',
                            'Cdc14_p': 'mM',
                            'mFar1': 'mM',
                            'Far1': 'mM',
                            'Fus3': 'mM',
                            'mMih1': 'mM',
                            'Mih1': 'mM',
                            'mCln3': 'mM',
                            'Cln3': 'mM',
                            'mSwe1': 'mM',
                            'Swe1': 'mM',
                            'mWhi5': 'mM',
                            'Whi5': 'mM',
                            'mCln2': 'mM',
                            'Cln2': 'mM',
                            'HOG1': 'mM',
                            'MBF': 'mM',
                            'mMBF': 'mM',
                            'Clb5': 'mM',
                            'mClb5': 'mM',
                            'Clb3': 'mM',
                            'mClb3': 'mM',
                            'Sic1': 'mM',
                            'mSic1': 'mM',
                            'Swi5': 'mM',
                            'mSwi5': 'mM',
                            'APC': 'mM',
                            'mAPC': 'mM',
                            'Clb2': 'mM',
                            'mClb2': 'mM',
                            'Mcm1': 'mM',
                            'mMcm1': 'mM',
                            }

    ### Species Annotations:
    module_dict['sp_annotations'] = {'AA': 'YCM:AA',
                                     'NA': 'YCM:NA',
                                     'Pi': 'CHEBI:43474',
                                     'ADP': 'CHEBI:456216',
                                     'ATP': 'CHEBI:30616',
                                     'ribosome': 'YCM:ribosome',
                                     'int_vol': 'SBO:0000468',
                                     'nuc_vol': 'SBO:0000468',
                                     'mSBF': 'SGD:S000000913p_SGD:S000004172p',
                                     'SBF': 'SGD:S000000913p_SGD:S000004172p',
                                     'SBF_p': 'SGD:S000000913p_SGD:S000004172p',
                                     'mCdc14': 'SGD:S000001924p',
                                     'Cdc14': 'SGD:S000001924p',
                                     'Cdc14_p': 'SGD:S000001924p',
                                     'mFar1': 'SGD:S000003693p',
                                     'Far1': 'SGD:S000003693p',
                                     'Fus3': 'SGD:S000000112p',
                                     'mMih1': 'SGD:S000004639p',
                                     'Mih1': 'SGD:S000004639p',
                                     'mCln3': 'SGD:S000000038p',
                                     'Cln3': 'SGD:S000000038p',
                                     'mSwe1': 'SGD:S000003723p',
                                     'Swe1': 'SGD:S000003723p',
                                     'Whi5': 'SGD:S000005609p',
                                     'mWhi5': 'SGD:S000005609p',
                                     'mCln2': 'SGD:S000006177p',
                                     'Cln2': 'SGD:S000006177p',
                                     'HOG1': 'SGD:S000004103p',
                                     # changed from "SGD:S000004103pPP_13" -> what was "13" about? ToDo Question to clarify: Will it work this way? Same annotation, other state makes two separate instances of Hog?
                                     'APC': 'SGD:S000002971p',
                                     'mAPC': 'SGD:S000002971p',
                                     'MBF': 'SGD:S000002214p_SGD:S000004172p',
                                     'mMBF': 'SGD:S000002214p_SGD:S000004172p',
                                     'Clb5': 'SGD:S000006324p',
                                     'mClb5': 'SGD:S000006324p',
                                     'Clb3': 'SGD:S000002314p',
                                     'mClb3': 'SGD:S000002314p',
                                     'Sic1': 'SGD:S000004069p',
                                     'mSic1': 'SGD:S000004069p',
                                     'Swi5': 'SGD:S000002553p',
                                     'mSwi5': 'SGD:S000002553p',
                                     'Mcm1': 'SGD:S000004646p',
                                     'mMcm1': 'SGD:S000004646p',
                                     'Clb2': 'SGD:S000006323p',
                                     'mClb2': 'SGD:S000006323p',
                                     }

    ### Species Compartment:
    module_dict['sp_compartment'] = {'AA': 'intracellular',
                                     'ATP': 'intracellular',
                                     'ADP': 'intracellular',
                                     'NA': 'intracellular',
                                     'Pi': 'intracellular',
                                     'ribosome': 'intracellular',
                                     'mSBF': 'intracellular',
                                     'SBF': 'intracellular',
                                     'SBF_p': 'intracellular',
                                     'mCdc14': 'intracellular',
                                     'Cdc14': 'intracellular',
                                     'Cdc14_p': 'intracellular',
                                     'mFar1': 'intracellular',
                                     'Far1': 'intracellular',
                                     'Fus3': 'intracellular',
                                     'mMih1': 'intracellular',
                                     'Mih1': 'intracellular',
                                     'mCln3': 'intracellular',
                                     'Cln3': 'intracellular',
                                     'mSwe1': 'intracellular',
                                     'Swe1': 'intracellular',
                                     'mWhi5': 'intracellular',
                                     'Whi5': 'intracellular',
                                     'int_vol': 'intracellular',
                                     'nuc_vol': 'nucleus',
                                     'mCln2': 'intracellular',
                                     'Cln2': 'intracellular',
                                     'HOG1': 'intracellular',
                                     'APC': 'intracellular',
                                     'mAPC': 'intracellular',
                                     'MBF': 'intracellular',
                                     'mMBF': 'intracellular',
                                     'Clb5': 'intracellular',
                                     'mClb5': 'intracellular',
                                     'Clb3': 'intracellular',
                                     'mClb3': 'intracellular',
                                     'Sic1': 'intracellular',
                                     'mSic1': 'intracellular',
                                     'Swi5': 'intracellular',
                                     'mSwi5': 'intracellular',
                                     'Mcm1': 'intracellular',
                                     'mMcm1': 'intracellular',
                                     'Clb2': 'intracellular',
                                     'mClb2': 'intracellular',
                                     }

    ### Compartment Annotations:
    module_dict['com_annotations'] = {'cytosol': 'GO:0005829',
                                      'nucleus': 'GO:0005634',
                                      'intracellular': 'GO:0044424'}

    ### States:
    module_dict['sp_states'] = {'AA': '0',
                                'ATP': '-4',
                                'ADP': '-3',
                                'NA': '0',
                                'ribosome': '0',
                                'Pi': '-2',
                                'int_vol': '0',
                                'nuc_vol': '0',
                                'mCdc14': 'mRNA',
                                'Cdc14': '0',
                                'Cdc14_p': 'P',
                                'mFar1': 'mRNA',
                                'Far1': '0',
                                'Fus3': '0',
                                'mMih1': 'mRNA',
                                'Mih1': '0',
                                'mCln3': 'mRNA',
                                'Cln3': '0',
                                'mSwe1': 'mRNA',
                                'Swe1': '0',
                                'mWhi5': 'mRNA',
                                'Whi5': '0',
                                'mCln2': 'mRNA',
                                'Cln2': '0',
                                'mSBF': 'mRNA',
                                'SBF': '0',
                                'SBF_p': 'P',
                                'HOG1': 'PP',
                                'APC': '0',
                                'mAPC': 'mRNA',
                                'MBF': '0',
                                'mMBF': 'mRNA',
                                'Clb5': '0',
                                'mClb5': 'mRNA',
                                'Clb3': '0',
                                'mClb3': 'mRNA',
                                'Sic1': '0',
                                'mSic1': 'mRNA',
                                'Swi5': '0',
                                'mSwi5': 'mRNA',
                                'Mcm1': '0',
                                'mMcm1': 'mRNA',
                                'Clb2': '0',
                                'mClb2': 'mRNA',
                                }

    ### Reactions:
    reactions = {}
    # SBF
    reactions['v_mSBF_deg'] = {'rate': {}, 'products': {}, 'substrates': {}, 'modifiers': {}}
    reactions['v_SBF_deg'] = {'rate': {}, 'products': {}, 'substrates': {}, 'modifiers': {}}
    reactions['v_SBF_p_deg'] = {'rate': {}, 'products': {}, 'substrates': {}, 'modifiers': {}}
    reactions['v_mSBF_TRSC'] = {'rate': {}, 'products': {}, 'substrates': {}, 'modifiers': {}}
    reactions['v_mSBF_TRSL'] = {'rate': {}, 'products': {}, 'substrates': {}, 'modifiers': {}}
    # Cdc14
    reactions['v_mCdc14_deg'] = {'rate': {}, 'products': {}, 'substrates': {}, 'modifiers': {}}
    reactions['v_Cdc14_deg'] = {'rate': {}, 'products': {}, 'substrates': {}, 'modifiers': {}}
    reactions['v_Cdc14_p_deg'] = {'rate': {}, 'products': {}, 'substrates': {}, 'modifiers': {}}
    reactions['v_mCdc14_TRSC'] = {'rate': {}, 'products': {}, 'substrates': {}, 'modifiers': {}}
    reactions['v_mCdc14_TRSL'] = {'rate': {}, 'products': {}, 'substrates': {}, 'modifiers': {}}
    # Far1
    reactions['v_mFar1_deg'] = {'rate': {}, 'products': {}, 'substrates': {}, 'modifiers': {}}
    reactions['v_Far1_deg'] = {'rate': {}, 'products': {}, 'substrates': {}, 'modifiers': {}}
    reactions['v_Far1_deg_Cln2'] = {'rate': {}, 'products': {}, 'substrates': {}, 'modifiers': {}}
    reactions['v_mFar1_TRSC'] = {'rate': {}, 'products': {}, 'substrates': {}, 'modifiers': {}}
    reactions['v_mFar1_TRSL'] = {'rate': {}, 'products': {}, 'substrates': {}, 'modifiers': {}}
    # Mih1
    reactions['v_mMih1_deg'] = {'rate': {}, 'products': {}, 'substrates': {}, 'modifiers': {}}
    reactions['v_Mih1_deg'] = {'rate': {}, 'products': {}, 'substrates': {}, 'modifiers': {}}
    reactions['v_mMih1_TRSC'] = {'rate': {}, 'products': {}, 'substrates': {}, 'modifiers': {}}
    reactions['v_mMih1_TRSL'] = {'rate': {}, 'products': {}, 'substrates': {}, 'modifiers': {}}
    # Cln3
    reactions['v_mCln3_deg'] = {'rate': {}, 'products': {}, 'substrates': {}, 'modifiers': {}}
    reactions['v_Cln3_deg'] = {'rate': {}, 'products': {}, 'substrates': {}, 'modifiers': {}}
    reactions['v_mCln3_TRSC'] = {'rate': {}, 'products': {}, 'substrates': {}, 'modifiers': {}}
    reactions['v_mCln3_TRSL'] = {'rate': {}, 'products': {}, 'substrates': {}, 'modifiers': {}}
    # Swe1
    reactions['v_mSwe1_deg'] = {'rate': {}, 'products': {}, 'substrates': {}, 'modifiers': {}}
    reactions['v_Swe1_deg'] = {'rate': {}, 'products': {}, 'substrates': {}, 'modifiers': {}}
    reactions['v_mSwe1_TRSC'] = {'rate': {}, 'products': {}, 'substrates': {}, 'modifiers': {}}
    reactions['v_mSwe1_TRSL'] = {'rate': {}, 'products': {}, 'substrates': {}, 'modifiers': {}}
    # Clb2
    reactions['v_mClb2_deg'] = {'rate': {}, 'products': {}, 'substrates': {}, 'modifiers': {}}
    reactions['v_Clb2_deg'] = {'rate': {}, 'products': {}, 'substrates': {}, 'modifiers': {}}
    reactions['v_Clb2_deg_APC'] = {'rate': {}, 'products': {}, 'substrates': {}, 'modifiers': {}}
    reactions['v_mClb2_TRSL'] = {'rate': {}, 'products': {}, 'substrates': {}, 'modifiers': {}}
    reactions['v_mClb2_TRSC'] = {'rate': {}, 'products': {}, 'substrates': {}, 'modifiers': {}}
    # Clb5
    reactions['v_Clb5_deg'] = {'rate': {}, 'products': {}, 'substrates': {}, 'modifiers': {}}
    reactions['v_Clb5_deg_APC'] = {'rate': {}, 'products': {}, 'substrates': {}, 'modifiers': {}}
    reactions['v_mClb5_deg'] = {'rate': {}, 'products': {}, 'substrates': {}, 'modifiers': {}}
    reactions['v_mClb5_TRSC'] = {'rate': {}, 'products': {}, 'substrates': {}, 'modifiers': {}}
    reactions['v_mClb5_TRSL'] = {'rate': {}, 'products': {}, 'substrates': {}, 'modifiers': {}}
    # Whi5
    reactions['v_mWhi5_deg'] = {'rate': {}, 'products': {}, 'substrates': {}, 'modifiers': {}}
    reactions['v_Whi5_deg'] = {'rate': {}, 'products': {}, 'substrates': {}, 'modifiers': {}}
    reactions['v_mWhi5_TRSC'] = {'rate': {}, 'products': {}, 'substrates': {}, 'modifiers': {}}
    reactions['v_mWhi5_TRSL'] = {'rate': {}, 'products': {}, 'substrates': {}, 'modifiers': {}}
    # Cln2
    reactions['v_mCln2_deg'] = {'rate': {}, 'products': {}, 'substrates': {}, 'modifiers': {}}
    reactions['v_mCln2_TRSC'] = {'rate': {}, 'products': {}, 'substrates': {}, 'modifiers': {}}
    reactions['v_mCln2_TRSL'] = {'rate': {}, 'products': {}, 'substrates': {}, 'modifiers': {}}
    reactions['v_Cln2_deg'] = {'rate': {}, 'products': {}, 'substrates': {}, 'modifiers': {}}
    # MBF
    reactions['v_mMBF_deg'] = {'rate': {}, 'products': {}, 'substrates': {}, 'modifiers': {}}
    reactions['v_mMBF_TRSC'] = {'rate': {}, 'products': {}, 'substrates': {}, 'modifiers': {}}
    reactions['v_mMBF_TRSL'] = {'rate': {}, 'products': {}, 'substrates': {}, 'modifiers': {}}
    reactions['v_MBF_deg'] = {'rate': {}, 'products': {}, 'substrates': {}, 'modifiers': {}}
    # Clb3
    reactions['v_Clb3_deg'] = {'rate': {}, 'products': {}, 'substrates': {}, 'modifiers': {}}
    reactions['v_Clb3_deg_APC'] = {'rate': {}, 'products': {}, 'substrates': {}, 'modifiers': {}}
    reactions['v_mClb3_deg'] = {'rate': {}, 'products': {}, 'substrates': {}, 'modifiers': {}}
    reactions['v_mClb3_TRSC'] = {'rate': {}, 'products': {}, 'substrates': {}, 'modifiers': {}}
    reactions['v_mClb3_TRSL'] = {'rate': {}, 'products': {}, 'substrates': {}, 'modifiers': {}}
    # Sic1
    reactions['v_mSic1_deg'] = {'rate': {}, 'products': {}, 'substrates': {}, 'modifiers': {}}
    reactions['v_Sic1_deg'] = {'rate': {}, 'products': {}, 'substrates': {}, 'modifiers': {}}
    reactions['v_mSic1_TRSC'] = {'rate': {}, 'products': {}, 'substrates': {}, 'modifiers': {}}
    reactions['v_mSic1_TRSL'] = {'rate': {}, 'products': {}, 'substrates': {}, 'modifiers': {}}
    # Swi5
    reactions['v_mSwi5_deg'] = {'rate': {}, 'products': {}, 'substrates': {}, 'modifiers': {}}
    reactions['v_Swi5_deg'] = {'rate': {}, 'products': {}, 'substrates': {}, 'modifiers': {}}
    reactions['v_mSwi5_TRSC'] = {'rate': {}, 'products': {}, 'substrates': {}, 'modifiers': {}}
    reactions['v_mSwi5_TRSL'] = {'rate': {}, 'products': {}, 'substrates': {}, 'modifiers': {}}
    # Mcm1
    reactions['v_mMcm1_deg'] = {'rate': {}, 'products': {}, 'substrates': {}, 'modifiers': {}}
    reactions['v_Mcm1_deg'] = {'rate': {}, 'products': {}, 'substrates': {}, 'modifiers': {}}
    reactions['v_mMcm1_TRSC'] = {'rate': {}, 'products': {}, 'substrates': {}, 'modifiers': {}}
    reactions['v_mMcm1_TRSL'] = {'rate': {}, 'products': {}, 'substrates': {}, 'modifiers': {}}
    # APC
    reactions['v_mAPC_deg'] = {'rate': {}, 'products': {}, 'substrates': {}, 'modifiers': {}}
    reactions['v_APC_deg'] = {'rate': {}, 'products': {}, 'substrates': {}, 'modifiers': {}}
    reactions['v_mAPC_TRSC'] = {'rate': {}, 'products': {}, 'substrates': {}, 'modifiers': {}}
    reactions['v_mAPC_TRSL'] = {'rate': {}, 'products': {}, 'substrates': {}, 'modifiers': {}}

    ### Rates:

    ## SBF
    # v_mSBF_deg
    reactions['v_mSBF_deg']['rate'] = '(k_mSBF_deg * mSBF)*int_vol'
    # v_SBF_deg
    reactions['v_SBF_deg']['rate'] = '(k_SBF_deg * SBF)*int_vol'
    # v_SBF_p_deg
    reactions['v_SBF_p_deg']['rate'] = '(k_SBF_p_deg * SBF_p)*int_vol'
    # v_mSBF_TRSC
    reactions['v_mSBF_TRSC']['rate'] = 'vmax_TRSC_SBF * (ATP/(kM_ATP + ATP)) * (NA/(kM_NA + NA))*int_vol'
    # v_mSBF_TRSL
    reactions['v_mSBF_TRSL'][
        'rate'] = 'vmax_TRSL_SBF * mSBF * (ATP/(kM_ATP + ATP)) * (AA/(kM_AA + AA)) * (ribosome/(kM_ribosome + ribosome))*int_vol'

    ## Cdc14
    # v_mCdc14_deg
    reactions['v_mCdc14_deg']['rate'] = '(k_mCdc14_deg * mCdc14)*int_vol'
    # v_Cdc14_deg
    reactions['v_Cdc14_deg']['rate'] = '(k_Cdc14_deg * Cdc14)*int_vol'
    # v_Cdc14_p_deg
    reactions['v_Cdc14_p_deg']['rate'] = '(k_Cdc14_p_deg * Cdc14_p)*int_vol'
    # v_mCdc14_TRSC
    reactions['v_mCdc14_TRSC'][
        'rate'] = 'corr_Cdc14_TRSC * vmax_TRSC_Cdc14 * (ATP/(kM_ATP + ATP)) * (NA/(kM_NA + NA))*int_vol'
    # v_mCdc14_TRSL
    reactions['v_mCdc14_TRSL'][
        'rate'] = 'corr_Cdc14_TRSL * vmax_TRSL_Cdc14 * mCdc14 * (ATP/(kM_ATP + ATP)) * (AA/(kM_AA + AA)) * (ribosome/(kM_ribosome + ribosome))*int_vol'

    ## Far1
    # v_mFar1_deg
    reactions['v_mFar1_deg']['rate'] = '(k_mFar1_deg * mFar1)*int_vol'
    # v_Far1_deg
    reactions['v_Far1_deg']['rate'] = '(kd_Far1 * Far1)*int_vol'
    # v_Far1_deg_APC
    reactions['v_Far1_deg_Cln2']['rate'] = '(kdd_Far1 * Far1 * Cln2)*int_vol'
    # v_mFar1_TRSC
    reactions['v_mFar1_TRSC'][
        'rate'] = 'corr_Far1_TRSC * vmax_TRSC_Far1 * (ATP/(kM_ATP + ATP)) * (NA/(kM_NA + NA)) * ( ((kp_Far1/kp_basal_Far1) * Fus3) + 1 )*int_vol'
    # v_mFar1_TRSL
    reactions['v_mFar1_TRSL'][
        'rate'] = 'corr_Far1_TRSL * kp_basal_Far1 * mFar1 * (ATP/(kM_ATP + ATP)) * (AA/(kM_AA + AA)) * (ribosome/(kM_ribosome + ribosome))*int_vol'

    ## Mih1
    # v_mWhi5_deg
    reactions['v_mMih1_deg']['rate'] = '(k_mMih1_deg * mMih1)*int_vol'
    # v_Whi5_deg
    reactions['v_Mih1_deg']['rate'] = '(k_Mih1_deg * Mih1)*int_vol'
    # v_mWhi5_TRSC
    reactions['v_mMih1_TRSC'][
        'rate'] = 'corr_Mih1_TRSC * vmax_TRSC_Mih1 * (ATP/(kM_ATP + ATP)) * (NA/(kM_NA + NA))*int_vol'
    # v_mWhi5_TRSL
    reactions['v_mMih1_TRSL'][
        'rate'] = 'corr_Mih1_TRSL * vmax_TRSL_Mih1 * mMih1 * (ATP/(kM_ATP + ATP)) * (AA/(kM_AA + AA)) * (ribosome/(kM_ribosome + ribosome))*int_vol'

    ## Cln3
    # v_mWhi5_deg
    reactions['v_mCln3_deg']['rate'] = '(k_mCln3_deg * mCln3)*int_vol'
    # v_Whi5_deg
    reactions['v_Cln3_deg']['rate'] = '(k_Cln3_deg * Cln3)*int_vol'
    # v_mWhi5_TRSC
    reactions['v_mCln3_TRSC'][
        'rate'] = 'corr_Cln3_TRSC * vmax_TRSC_Cln3 * (ATP/(kM_ATP + ATP)) * (NA/(kM_NA + NA))*int_vol'
    # v_mWhi5_TRSL
    reactions['v_mCln3_TRSL'][
        'rate'] = 'corr_Cln3_TRSL * vmax_TRSL_Cln3 * mCln3 * (ATP/(kM_ATP + ATP)) * (AA/(kM_AA + AA)) * (ribosome/(kM_ribosome + ribosome))*int_vol'

    ## Swe1
    # v_mWhi5_deg
    reactions['v_mSwe1_deg']['rate'] = '(k_mSwe1_deg * mSwe1)*int_vol'
    # v_Whi5_deg
    reactions['v_Swe1_deg']['rate'] = '(k_Swe1_deg * Swe1)*int_vol'
    # v_mWhi5_TRSC
    reactions['v_mSwe1_TRSC'][
        'rate'] = 'corr_Swe1_TRSC * vmax_TRSC_Swe1 * (ATP/(kM_ATP + ATP)) * (NA/(kM_NA + NA))*int_vol'
    # v_mWhi5_TRSL
    reactions['v_mSwe1_TRSL'][
        'rate'] = 'corr_Swe1_TRSL * vmax_TRSL_Swe1 * mSwe1 * (ATP/(kM_ATP + ATP)) * (AA/(kM_AA + AA)) * (ribosome/(kM_ribosome + ribosome))*int_vol'

    ## Clb2
    # v_mClb2_deg
    reactions['v_mClb2_deg']['rate'] = '(k_mClb2_deg * mClb2)*int_vol'
    # v_Clb2_deg_APC
    reactions['v_Clb2_deg_APC']['rate'] = '(kd_Clb2_APC * Clb2 * APC)*int_vol'
    # v_Clb2_deg
    reactions['v_Clb2_deg']['rate'] = '(kd_Clb2 * Clb2)*int_vol'
    # v_mClb2_TRSC
    reactions['v_mClb2_TRSC'][
        'rate'] = 'corr_Clb2_TRSC * vmax_TRSC_Clb2 * (ATP/(kM_ATP + ATP)) * (NA/(kM_NA + NA)) * Mcm1/(Kp_Clb2 + Mcm1)*int_vol'
    # v_mClb2_TRSL
    reactions['v_mClb2_TRSL'][
        'rate'] = 'corr_Clb2_TRSL * kp_Clb2 * mClb2 * (ATP/(kM_ATP + ATP)) * (AA/(kM_AA + AA)) * (ribosome/(kM_ribosome + ribosome))*int_vol'

    ## Whi5
    # v_mWhi5_deg
    reactions['v_mWhi5_deg']['rate'] = '(k_mWhi5_deg * mWhi5)*int_vol'
    # v_Whi5_deg
    reactions['v_Whi5_deg']['rate'] = '(k_Whi5_deg * Whi5)*int_vol'
    # v_mWhi5_TRSC
    reactions['v_mWhi5_TRSC'][
        'rate'] = 'corr_Whi5_TRSC * vmax_TRSC_Whi5 * (ATP/(kM_ATP + ATP)) * (NA/(kM_NA + NA))*int_vol'
    # v_mWhi5_TRSL
    reactions['v_mWhi5_TRSL'][
        'rate'] = 'corr_Whi5_TRSL * vmax_TRSL_Whi5 * mWhi5 * (ATP/(kM_ATP + ATP)) * (AA/(kM_AA + AA)) * (ribosome/(kM_ribosome + ribosome))*int_vol'

    ## Cln2
    # v_mCln2_deg
    reactions['v_mCln2_deg']['rate'] = '(k_mCln2_deg * mCln2)*int_vol'
    # v_Cln2_deg
    reactions['v_Cln2_deg']['rate'] = '(kd_Cln2 * Cln2)*int_vol'
    # v_mCln2_TRSC
    reactions['v_mCln2_TRSC'][
        'rate'] = 'corr_Cln2_TRSC * vmax_TRSC_Cln2 * (ATP/(kM_ATP + ATP)) * (NA/(kM_NA + NA)) * SBF/(Kp_Cln2 + SBF)*int_vol'
    # v_mCln2_TRSL
    reactions['v_mCln2_TRSL'][
        'rate'] = 'corr_Cln2_TRSL * kp_Cln2 * mCln2 * (ATP/(kM_ATP + ATP)) * (AA/(kM_AA + AA)) * (ribosome/(kM_ribosome + ribosome))*int_vol'

    ## Clb5
    # v_mClb5_deg
    reactions['v_mClb5_deg']['rate'] = '(k_mClb5_deg * mClb5)*int_vol'
    # v_Clb5_deg
    reactions['v_Clb5_deg']['rate'] = '(kd_Clb5 * Clb5)*int_vol'
    # v_Clb5_deg_APC
    reactions['v_Clb5_deg_APC']['rate'] = '(kd_Clb5_APC * Clb5 * APC)*int_vol'
    # v_mClb5_TRSC
    reactions['v_mClb5_TRSC'][
        'rate'] = 'corr_Clb5_TRSC * vmax_TRSC_Clb5 * (ATP/(kM_ATP + ATP)) * (NA/(kM_NA + NA)) * MBF/(Kp_Clb5 + MBF)*int_vol'
    # v_mClb5_TRSL
    reactions['v_mClb5_TRSL'][
        'rate'] = 'corr_Clb5_TRSL * kp_Clb5 * mClb5 * (ATP/(kM_ATP + ATP)) * (AA/(kM_AA + AA)) * (ribosome/(kM_ribosome + ribosome))*int_vol'

    ## MBF
    # v_mMBF_deg
    reactions['v_mMBF_deg']['rate'] = '(k_mMBF_deg * mMBF)*int_vol'
    # v_MBF_deg
    reactions['v_MBF_deg']['rate'] = '(kd_MBF * MBF)*int_vol'
    # v_mMBF_TRSC
    reactions['v_mMBF_TRSC'][
        'rate'] = 'corr_MBF_TRSC * vmax_TRSC_MBF * (ATP/(kM_ATP + ATP)) * (NA/(kM_NA + NA)) * Cln2**n1/(K_MBF**n1 + Cln2**n1)*int_vol'
    # v_mMBF_TRSL
    reactions['v_mMBF_TRSL'][
        'rate'] = 'corr_MBF_TRSL * kp_MBF * mMBF * (ATP/(kM_ATP + ATP)) * (AA/(kM_AA + AA)) * (ribosome/(kM_ribosome + ribosome))*int_vol'

    ## Clb3
    # v_mClb3_deg
    reactions['v_mClb3_deg']['rate'] = '(k_mClb3_deg * mClb3)*int_vol'
    # v_Clb3_deg
    reactions['v_Clb3_deg']['rate'] = '(kd_Clb3 * Clb3)*int_vol'
    # v_Clb3_deg_APC
    reactions['v_Clb3_deg_APC']['rate'] = '(kd_Clb3_APC * Clb3 * APC)*int_vol'
    # v_mClb3_TRSC
    reactions['v_mClb3_TRSC'][
        'rate'] = 'corr_Clb3_TRSC * vmax_TRSC_Clb3 * (ATP/(kM_ATP + ATP)) * (NA/(kM_NA + NA)) * (Clb5**n_Clb3/(Kp_Clb3**n_Clb3 + Clb5**n_Clb3))*int_vol'
    # v_mClb3_TRSL
    reactions['v_mClb3_TRSL'][
        'rate'] = 'corr_Clb3_TRSL * kp_Clb3 * mClb3 * (ATP/(kM_ATP + ATP)) * (AA/(kM_AA + AA)) * (ribosome/(kM_ribosome + ribosome))*int_vol'

    ## Sic1
    # v_mSic1_deg
    reactions['v_mSic1_deg']['rate'] = '(k_mSic1_deg * mSic1)*int_vol'
    # v_Sic1_deg
    reactions['v_Sic1_deg']['rate'] = '(kd_Sic1 * Sic1)*int_vol'
    # v_mSic1_TRSC
    reactions['v_mSic1_TRSC'][
        'rate'] = 'corr_Sic1_TRSC * vmax_TRSC_Sic1 * (ATP/(kM_ATP + ATP)) * (NA/(kM_NA + NA)) * Swi5/(Kp_Sic1 + Swi5)*int_vol'
    # v_mSic1_TRSL
    reactions['v_mSic1_TRSL'][
        'rate'] = 'corr_Sic1_TRSL * kp_Sic1 * mSic1 * (ATP/(kM_ATP + ATP)) * (AA/(kM_AA + AA)) * (ribosome/(kM_ribosome + ribosome))*int_vol'

    ## Swi5
    # v_mSwi5_deg
    reactions['v_mSwi5_deg']['rate'] = '(k_mSwi5_deg * mSwi5)*int_vol'
    # v_Swi5_deg
    reactions['v_Swi5_deg']['rate'] = '(kd_Swi5 * Swi5)*int_vol'
    # v_mSwi5_TRSC
    reactions['v_mSwi5_TRSC'][
        'rate'] = 'corr_Swi5_TRSC * vmax_TRSC_Swi5 * (ATP/(kM_ATP + ATP)) * (NA/(kM_NA + NA)) * Mcm1/(Kp_Swi5 + Mcm1)*int_vol'
    # v_mSwi5_TRSL
    reactions['v_mSwi5_TRSL'][
        'rate'] = 'corr_Swi5_TRSL * kp_Swi5 * mSwi5 * (ATP/(kM_ATP + ATP)) * (AA/(kM_AA + AA)) * (ribosome/(kM_ribosome + ribosome))*int_vol'

    ## Mcm1
    # v_mMcm1_deg
    reactions['v_mMcm1_deg']['rate'] = '(k_mMcm1_deg * mMcm1)*int_vol'
    # v_Mcm1_deg
    reactions['v_Mcm1_deg']['rate'] = '(kd_Mcm1 * Mcm1)*int_vol'
    # v_mMcm1_TRSC
    reactions['v_mMcm1_TRSC'][
        'rate'] = 'corr_Mcm1_TRSC * vmax_TRSC_Mcm1 * (Clb2**n_Mcm1/(Kp_Mcm1**n_Mcm1 + Clb2**n_Mcm1) + (v0_Mcm1/kp_Mcm1) * Clb3**n_Mcm1/(V0_Mcm1**n_Mcm1 + Clb3**n_Mcm1)) * (ATP/(kM_ATP + ATP)) * (NA/(kM_NA + NA))*int_vol'
    # v_mMcm1_TRSL
    reactions['v_mMcm1_TRSL'][
        'rate'] = 'corr_Mcm1_TRSL * kp_Mcm1 * mMcm1 * (ATP/(kM_ATP + ATP)) * (AA/(kM_AA + AA)) * (ribosome/(kM_ribosome + ribosome))*int_vol'

    ## APC
    # v_mAPC_deg
    reactions['v_mAPC_deg']['rate'] = '(k_mAPC_deg * mAPC)*int_vol'
    # v_APC_deg
    reactions['v_APC_deg']['rate'] = '(kd_APC * APC)*int_vol'
    # v_mAPC_TRSC
    reactions['v_mAPC_TRSC'][
        'rate'] = 'corr_APC_TRSC * vmax_TRSC_APC * (ATP/(kM_ATP + ATP)) * (NA/(kM_NA + NA)) * Mcm1/(Kp_APC + Mcm1)*int_vol'
    # v_mAPC_TRSL
    reactions['v_mAPC_TRSL'][
        'rate'] = 'corr_APC_TRSL * kp_APC * mAPC * (ATP/(kM_ATP + ATP)) * (AA/(kM_AA + AA)) * (ribosome/(kM_ribosome + ribosome))*int_vol'

    ### Substrates:
    ## SBF
    # v_mSBF_deg
    reactions['v_mSBF_deg']['substrates'] = {'mSBF': 1.0}
    # v_SBF_deg
    reactions['v_SBF_deg']['substrates'] = {'SBF': 1.0}
    # v_SBF_p_deg
    reactions['v_SBF_p_deg']['substrates'] = {'SBF_p': 1.0}
    # v_mSBF_TRSC
    reactions['v_mSBF_TRSC']['substrates'] = {'NA': 5781.0, 'ATP': 11562.0}
    # v_mSBF_TRSL
    reactions['v_mSBF_TRSL']['substrates'] = {'AA': 1926.0, 'ATP': 7704.0}
    ## Cdc14
    # v_mCdc14_deg
    reactions['v_mCdc14_deg']['substrates'] = {'mCdc14': 1.0}
    # v_Cdc14_deg
    reactions['v_Cdc14_deg']['substrates'] = {'Cdc14': 1.0}
    # v_Cdc14_p_deg
    reactions['v_Cdc14_p_deg']['substrates'] = {'Cdc14_p': 1.0}
    # v_mCdc14_TRSC
    reactions['v_mCdc14_TRSC']['substrates'] = {'NA': 1656.0, 'ATP': 3312.0}
    # v_mCdc14_TRSL
    reactions['v_mCdc14_TRSL']['substrates'] = {'AA': 551.0, 'ATP': 2204.0}
    # Far1
    # v_mFar1_deg
    reactions['v_mFar1_deg']['substrates'] = {'mFar1': 1.0}
    # v_Far1_deg
    reactions['v_Far1_deg']['substrates'] = {'Far1': 1.0}
    # v_Far1_deg_Cln2
    reactions['v_Far1_deg_Cln2']['substrates'] = {'Far1': 1.0}
    # v_mFar1_TRSC
    reactions['v_mFar1_TRSC']['substrates'] = {'NA': 2493.0, 'ATP': 4986.0}  # 2.0*1665.0}
    # v_mFar1_TRSL
    reactions['v_mFar1_TRSL']['substrates'] = {'AA': 830.0, 'ATP': 3320.0}  # 4.0*554.0}
    ## Mih1
    # v_Mih1_deg
    reactions['v_Mih1_deg']['substrates'] = {'Mih1': 1.0}
    # v_mMih1_deg
    reactions['v_mMih1_deg']['substrates'] = {'mMih1': 1.0}
    # v_mMih1_TRSC
    reactions['v_mMih1_TRSC']['substrates'] = {'NA': 2493.0, 'ATP': 4986.0}  # 2.0*1665.0}
    # v_mMih1_TRSL
    reactions['v_mMih1_TRSL']['substrates'] = {'AA': 554.0, 'ATP': 2216.0}  # 4.0*554.0}
    ## Cln3
    # v_Cln3_deg
    reactions['v_Cln3_deg']['substrates'] = {'Cln3': 1.0}
    # v_mCln3_deg
    reactions['v_mCln3_deg']['substrates'] = {'mCln3': 1.0}
    # v_mCln3_TRSC
    reactions['v_mCln3_TRSC']['substrates'] = {'NA': 1743.0, 'ATP': 3486.0}  # 2.0*1743.0}
    # v_mCln3_TRSL
    reactions['v_mCln3_TRSL']['substrates'] = {'AA': 580.0, 'ATP': 2320.0}  # 4.0*580.0}
    ## Swe1
    # v_Swe1_deg
    reactions['v_Swe1_deg']['substrates'] = {'Swe1': 1.0}
    # v_mSwe1_deg
    reactions['v_mSwe1_deg']['substrates'] = {'mSwe1': 1.0}
    # v_mSwe1_TRSC
    reactions['v_mSwe1_TRSC']['substrates'] = {'NA': 2460.0, 'ATP': 4920.0}  # 2.0*2460.0}
    # v_mSwe1_TRSL
    reactions['v_mSwe1_TRSL']['substrates'] = {'AA': 819.0, 'ATP': 3276.0}  # 4.0*819.0}
    ## Clb2
    # v_mClb2_deg
    reactions['v_mClb2_deg']['substrates'] = {'mClb2': 1.0}
    # v_Clb2_deg_APC
    reactions['v_Clb2_deg_APC']['substrates'] = {'Clb2': 1.0}
    # v_Clb2_deg
    reactions['v_Clb2_deg']['substrates'] = {'Clb2': 1.0}
    # v_mClb2_TRSC
    reactions['v_mClb2_TRSC']['substrates'] = {'NA': 1476.0, 'ATP': 2952.0}  # 2.0*1476.0}
    # v_mClb2_TRSL
    reactions['v_mClb2_TRSL']['substrates'] = {'AA': 491.0, 'ATP': 1964.0}  # 4.0*491.0}
    ## Clb5
    # v_Clb5_deg
    reactions['v_Clb5_deg']['substrates'] = {'Clb5': 1.0}
    # v_Clb5_deg
    reactions['v_Clb5_deg_APC']['substrates'] = {'Clb5': 1.0}
    # v_mClb5_deg
    reactions['v_mClb5_deg']['substrates'] = {'mClb5': 1.0}
    # v_mClb5_TRSC
    reactions['v_mClb5_TRSC']['substrates'] = {'NA': 1308.0, 'ATP': 2616.0}  # 2.0*1308.0}
    # v_mClb5_TRSL
    reactions['v_mClb5_TRSL']['substrates'] = {'AA': 435.0, 'ATP': 1740.0}  # 4.0*435.0}
    ## Whi5
    # v_Whi5_deg
    reactions['v_Whi5_deg']['substrates'] = {'Whi5': 1.0}
    # v_mWhi5_deg
    reactions['v_mWhi5_deg']['substrates'] = {'mWhi5': 1.0}
    # v_mWhi5_TRSC
    reactions['v_mWhi5_TRSC']['substrates'] = {'NA': 888.0, 'ATP': 1776.0}  # 2.0*888.0}
    # v_mWhi5_TRSL
    reactions['v_mWhi5_TRSL']['substrates'] = {'AA': 295.0, 'ATP': 1180.0}  # 4.0*295.0}
    ## Cln2
    # v_mCln2_deg
    reactions['v_mCln2_deg']['substrates'] = {'mCln2': 1.0}
    # v_Cln2_deg
    reactions['v_Cln2_deg']['substrates'] = {'Cln2': 1.0}
    # v_mCln2_TRSC
    reactions['v_mCln2_TRSC']['substrates'] = {'NA': 1638.0, 'ATP': 3276.0}  # 2.0*1638.0}
    # v_mCln2_TRSL
    reactions['v_mCln2_TRSL']['substrates'] = {'AA': 545.0, 'ATP': 2180.0}  # 4.0*545.0}
    ## MBF
    # v_mMBF_deg
    reactions['v_mMBF_deg']['substrates'] = {'mMBF': 1.0}
    # v_MBF_deg
    reactions['v_MBF_deg']['substrates'] = {'MBF': 1.0}
    # v_mMBF_TRSC
    reactions['v_mMBF_TRSC']['substrates'] = {'NA': 4914.0, 'ATP': 9828.0}  # 2.0*4914.0}   # NA: Added Mbp1 and Swi6
    # v_mMBF_TRSL
    reactions['v_mMBF_TRSL']['substrates'] = {'AA': 1636.0, 'ATP': 6544.0}  # 4.0*1636.0}
    ## Clb3
    # v_Clb3_deg
    reactions['v_Clb3_deg']['substrates'] = {'Clb3': 1.0}
    # v_Clb3_deg_APC
    reactions['v_Clb3_deg_APC']['substrates'] = {'Clb3': 1.0}
    # v_mClb3_deg
    reactions['v_mClb3_deg']['substrates'] = {'mClb3': 1.0}
    # v_mClb3_TRSC
    reactions['v_mClb3_TRSC']['substrates'] = {'NA': 1284.0, 'ATP': 2568.0}  # 2.0*1284.0}
    # v_mClb3_TRSL
    reactions['v_mClb3_TRSL']['substrates'] = {'AA': 427.0, 'ATP': 1708.0}  # 4.0*427.0}
    ## Sic1
    # v_mSic1_deg
    reactions['v_mSic1_deg']['substrates'] = {'mSic1': 1.0}
    # v_Sic1_deg
    reactions['v_Sic1_deg']['substrates'] = {'Sic1': 1.0}
    # v_mSic1_TRSC
    reactions['v_mSic1_TRSC']['substrates'] = {'NA': 855.0, 'ATP': 1710.0}  # 2.0*855.0}
    # v_mSic1_TRSL
    reactions['v_mSic1_TRSL']['substrates'] = {'AA': 284.0, 'ATP': 1136.0}  # 4.0*284.0}
    ## Swi5
    # v_mSwi5_deg
    reactions['v_mSwi5_deg']['substrates'] = {'mSwi5': 1.0}
    # v_Swi5_deg
    reactions['v_Swi5_deg']['substrates'] = {'Swi5': 1.0}
    # v_mSwi5_TRSC
    reactions['v_mSwi5_TRSC']['substrates'] = {'NA': 2130.0, 'ATP': 4260.0}  # 2.0*2130.0}
    # v_mSwi5_TRSL
    reactions['v_mSwi5_TRSL']['substrates'] = {'AA': 709.0, 'ATP': 2836.0}  # 4.0*709.0}
    ## Mcm1
    # v_mMcm1_deg
    reactions['v_mMcm1_deg']['substrates'] = {'mMcm1': 1.0}
    # v_Mcm1_deg
    reactions['v_Mcm1_deg']['substrates'] = {'Mcm1': 1.0}
    # v_mMcm1_TRSC
    reactions['v_mMcm1_TRSC']['substrates'] = {'NA': 861.0, 'ATP': 1722.0}  # 2.0*861.0}
    # v_mMcm1_TRSL
    reactions['v_mMcm1_TRSL']['substrates'] = {'AA': 286.0, 'ATP': 1144.0}  # 4.0*286.0}
    ## APC
    # v_mAPC_deg
    reactions['v_mAPC_deg']['substrates'] = {'mAPC': 1.0}
    # v_APC_deg
    reactions['v_APC_deg']['substrates'] = {'APC': 1.0}
    # v_mAPC_TRSC
    reactions['v_mAPC_TRSC']['substrates'] = {'NA': 1701.0, 'ATP': 3402.0}  # 2.0*1701.0}
    # v_mAPC_TRSL
    reactions['v_mAPC_TRSL']['substrates'] = {'AA': 566.0, 'ATP': 2264.0}  # 4.0*566.0}

    ### Products:
    ## SBF
    # v_mSBF_deg
    reactions['v_mSBF_deg']['products'] = {'NA': 5781.0}
    # v_SBF_deg
    reactions['v_SBF_deg']['products'] = {'AA': 1926.0}
    # v_SBF_p_deg
    reactions['v_SBF_p_deg']['products'] = {'AA': 1926.0, 'Pi': 1926.0}
    # v_mSBF_TRSC
    reactions['v_mSBF_TRSC']['products'] = {'mSBF': 1.0, 'Pi': 11562.0, 'ADP': 11562.0}
    # v_mSBF_TRSL
    reactions['v_mSBF_TRSL']['products'] = {'SBF': 1.0, 'Pi': 7704.0, 'ADP': 7704.0}
    ## Cdc14
    # v_mCdc14_deg
    reactions['v_mCdc14_deg']['products'] = {'NA': 1656.0}
    # v_Cdc14_deg
    reactions['v_Cdc14_deg']['products'] = {'AA': 551.0}
    # v_Cdc14_p_deg
    reactions['v_Cdc14_p_deg']['products'] = {'AA': 551.0, 'Pi': 551.0}
    # v_mCdc14_TRSC
    reactions['v_mCdc14_TRSC']['products'] = {'mCdc14': 1.0, 'Pi': 3312.0, 'ADP': 3312.0}
    # v_mCdc14_TRSL
    reactions['v_mCdc14_TRSL']['products'] = {'Cdc14': 1.0, 'Pi': 2204.0, 'ADP': 2204.0}
    # Far1
    # v_mFar1_deg
    reactions['v_mFar1_deg']['products'] = {'NA': 2493.0}
    # v_Far1_deg
    reactions['v_Far1_deg']['products'] = {'AA': 830.0}
    # v_Far1_deg_APC
    reactions['v_Far1_deg_Cln2']['products'] = {'AA': 830.0}
    # v_mFar1_TRSC
    reactions['v_mFar1_TRSC']['products'] = {'mFar1': 1.0, 'Pi': 4986.0, 'ADP': 4986.0}  # 2.0*1665.0}
    # v_mFar1_TRSL
    reactions['v_mFar1_TRSL']['products'] = {'Far1': 1.0, 'Pi': 3320.0, 'ADP': 3320.0}  # 4.0*554.0}
    ## Mih1
    # v_mMih1_deg
    reactions['v_mMih1_deg']['products'] = {'NA': 1665.0}
    # v_Mih1_deg
    reactions['v_Mih1_deg']['products'] = {'AA': 554.0}
    # v_mMih1_TRSC
    reactions['v_mMih1_TRSC']['products'] = {'mMih1': 1.0, 'Pi': 3330.0, 'ADP': 3330.0}
    # v_mMih1_TRSL
    reactions['v_mMih1_TRSL']['products'] = {'Mih1': 1.0, 'Pi': 2216.0, 'ADP': 2216.0}
    ## Cln3
    # v_mCln3_deg
    reactions['v_mCln3_deg']['products'] = {'NA': 1743.0}
    # v_Cln3_deg
    reactions['v_Cln3_deg']['products'] = {'AA': 580.0}
    # v_mCln3_TRSC
    reactions['v_mCln3_TRSC']['products'] = {'mCln3': 1.0, 'Pi': 3486.0, 'ADP': 3486.0}
    # v_mCln3_TRSL
    reactions['v_mCln3_TRSL']['products'] = {'Cln3': 1.0, 'Pi': 2320.0, 'ADP': 2320.0}
    ## Swe1
    # v_mSwe1_deg
    reactions['v_mSwe1_deg']['products'] = {'NA': 2460.0}
    # v_Swe1_deg
    reactions['v_Swe1_deg']['products'] = {'AA': 819.0}
    # v_mSwe1_TRSC
    reactions['v_mSwe1_TRSC']['products'] = {'mSwe1': 1.0, 'Pi': 4920.0, 'ADP': 4920.0}
    # v_mSwe1_TRSL
    reactions['v_mSwe1_TRSL']['products'] = {'Swe1': 1.0, 'Pi': 3276.0, 'ADP': 3276.0}
    ## Clb2
    # v_mClb2_deg
    reactions['v_mClb2_deg']['products'] = {'NA': 1476.0}
    # v_Clb2_deg_APC
    reactions['v_Clb2_deg_APC']['products'] = {'AA': 491.0}
    # v_Clb2_deg
    reactions['v_Clb2_deg']['products'] = {'AA': 491.0}
    # v_mClb2_TRSC
    reactions['v_mClb2_TRSC']['products'] = {'mClb2': 1.0, 'Pi': 2952.0, 'ADP': 2952.0}
    # v_mClb2_TRSL
    reactions['v_mClb2_TRSL']['products'] = {'Clb2': 1.0, 'Pi': 1964.0, 'ADP': 1964.0}
    ## Clb5
    # v_mClb5_deg
    reactions['v_mClb5_deg']['products'] = {'NA': 1308.0}
    # v_mClb5_deg
    reactions['v_Clb5_deg_APC']['products'] = {'AA': 435.0}
    # v_Clb5_deg
    reactions['v_Clb5_deg']['products'] = {'AA': 435.0}
    # v_mClb5_TRSC
    reactions['v_mClb5_TRSC']['products'] = {'mClb5': 1.0, 'Pi': 2616.0, 'ADP': 2616.0}
    # v_mClb5_TRSL
    reactions['v_mClb5_TRSL']['products'] = {'Clb5': 1.0, 'Pi': 1740.0, 'ADP': 1740.0}
    ## Whi5
    # v_mWhi5_deg
    reactions['v_mWhi5_deg']['products'] = {'NA': 888.0}
    # v_Whi5_deg
    reactions['v_Whi5_deg']['products'] = {'AA': 295.0}
    # v_mWhi5_TRSC
    reactions['v_mWhi5_TRSC']['products'] = {'mWhi5': 1.0, 'Pi': 1776.0, 'ADP': 1776.0}
    # v_mWhi5_TRSL
    reactions['v_mWhi5_TRSL']['products'] = {'Whi5': 1.0, 'Pi': 1180.0, 'ADP': 1180.0}
    ##Cln2
    # v_mCln2_deg
    reactions['v_mCln2_deg']['products'] = {'NA': 1638.0}
    # v_Cln2_deg
    reactions['v_Cln2_deg']['products'] = {'AA': 545.0}
    # v_mCln2_TRSC
    reactions['v_mCln2_TRSC']['products'] = {'mCln2': 1.0, 'Pi': 3276.0, 'ADP': 3276.0}
    # v_mCln2_TRSL
    reactions['v_mCln2_TRSL']['products'] = {'Cln2': 1.0, 'Pi': 2180.0, 'ADP': 2180.0}
    ## MBF
    # v_mMBF_deg
    reactions['v_mMBF_deg']['products'] = {'NA': 4914.0}
    # v_MBF_deg
    reactions['v_MBF_deg']['products'] = {'AA': 1636.0}
    # v_mMBF_TRSC
    reactions['v_mMBF_TRSC']['products'] = {'mMBF': 1.0, 'Pi': 9828.0, 'ADP': 9828.0}
    # v_mMBF_TRSL
    reactions['v_mMBF_TRSL']['products'] = {'MBF': 1.0, 'Pi': 6544.0, 'ADP': 6544.0}
    ## Clb3
    # v_mClb3_deg
    reactions['v_mClb3_deg']['products'] = {'NA': 1284.0}
    # v_Clb3_deg_APC
    reactions['v_Clb3_deg_APC']['products'] = {'AA': 427.0}
    # v_Clb3_deg
    reactions['v_Clb3_deg']['products'] = {'AA': 427.0}
    # v_mClb3_TRSC
    reactions['v_mClb3_TRSC']['products'] = {'mClb3': 1.0, 'Pi': 2568.0, 'ADP': 2568.0}
    # v_mClb3_TRSL
    reactions['v_mClb3_TRSL']['products'] = {'Clb3': 1.0, 'Pi': 1708.0, 'ADP': 1708.0}
    ## Sic1
    # v_mSic1_deg
    reactions['v_mSic1_deg']['products'] = {'NA': 855.0}
    # v_Sic1_deg
    reactions['v_Sic1_deg']['products'] = {'AA': 284.0}
    # v_mSic1_TRSC
    reactions['v_mSic1_TRSC']['products'] = {'mSic1': 1.0, 'Pi': 1710.0, 'ADP': 1710.0}
    # v_mSic1_TRSL
    reactions['v_mSic1_TRSL']['products'] = {'Sic1': 1.0, 'Pi': 1136.0, 'ADP': 1136.0}
    ## Swi5
    # v_mSwi5_deg
    reactions['v_mSwi5_deg']['products'] = {'NA': 2130.0}
    # v_Swi5_deg
    reactions['v_Swi5_deg']['products'] = {'AA': 709.0}
    # v_mSwi5_TRSC
    reactions['v_mSwi5_TRSC']['products'] = {'mSwi5': 1.0, 'Pi': 4260.0, 'ADP': 4260.0}
    # v_mSwi5_TRSL
    reactions['v_mSwi5_TRSL']['products'] = {'Swi5': 1.0, 'Pi': 2836.0, 'ADP': 2836.0}
    ## Mcm1
    # v_mMcm1_deg
    reactions['v_mMcm1_deg']['products'] = {'NA': 861.0}
    # v_Mcm1_deg
    reactions['v_Mcm1_deg']['products'] = {'AA': 286.0}
    # v_mMcm1_TRSC
    reactions['v_mMcm1_TRSC']['products'] = {'mMcm1': 1.0, 'Pi': 1722.0, 'ADP': 1722.0}
    # v_mMcm1_TRSL
    reactions['v_mMcm1_TRSL']['products'] = {'Mcm1': 1.0, 'Pi': 1144.0, 'ADP': 1144.0}
    ## APC
    # v_mAPC_deg
    reactions['v_mAPC_deg']['products'] = {'NA': 1701.0}
    # v_APC_deg
    reactions['v_APC_deg']['products'] = {'AA': 566.0}
    # v_mAPC_TRSC
    reactions['v_mAPC_TRSC']['products'] = {'mAPC': 1.0, 'Pi': 3402.0, 'ADP': 3402.0}
    # v_mAPC_TRSL
    reactions['v_mAPC_TRSL']['products'] = {'APC': 1.0, 'Pi': 2264.0, 'ADP': 2264.0}

    ### Modifiers:
    ## SBF
    # v_mSBF_deg
    reactions['v_mSBF_deg']['modifiers'] = {}
    # v_SBF_deg
    reactions['v_SBF_deg']['modifiers'] = {}
    # v_SBF_p_deg
    reactions['v_SBF_p_deg']['modifiers'] = {}
    # v_mSBF_TRSC
    reactions['v_mSBF_TRSC']['modifiers'] = {}
    # v_mSBF_TRSL
    reactions['v_mSBF_TRSL']['modifiers'] = {'mSBF': 1.0, 'ribosome': 1.0}
    ## Cdc14
    # v_mCdc14_deg
    reactions['v_mCdc14_deg']['modifiers'] = {}
    # v_Cdc14_deg
    reactions['v_Cdc14_deg']['modifiers'] = {}
    # v_Cdc14_p_deg
    reactions['v_Cdc14_p_deg']['modifiers'] = {}
    # v_mCdc14_TRSC
    reactions['v_mCdc14_TRSC']['modifiers'] = {}
    # v_mCdc14_TRSL
    reactions['v_mCdc14_TRSL']['modifiers'] = {'mCdc14': 1.0, 'ribosome': 1.0}
    # Far1
    # v_mFar1_deg
    reactions['v_mFar1_deg']['modifiers'] = {}
    # v_Far1_deg
    reactions['v_Far1_deg']['modifiers'] = {}
    # v_Far1_deg_APC
    reactions['v_Far1_deg_Cln2']['modifiers'] = {'Cln2': 1.0}
    # v_mFar1_TRSC
    reactions['v_mFar1_TRSC']['modifiers'] = {'Fus3': 1.0}
    # v_mFar1_TRSL
    reactions['v_mFar1_TRSL']['modifiers'] = {'mFar1': 1.0, 'ribosome': 1.0}
    ## Mih1
    # v_mMih1_deg
    reactions['v_mMih1_deg']['modifiers'] = {}
    # v_mMih1_TRSC
    reactions['v_mMih1_TRSC']['modifiers'] = {}
    # v_mMih1_TRSL
    reactions['v_mMih1_TRSL']['modifiers'] = {'mMih1': 1.0, 'ribosome': 1.0}
    # v_Mih1_deg
    reactions['v_Mih1_deg']['modifiers'] = {}
    ## Cln3
    # v_mCln3_deg
    reactions['v_mCln3_deg']['modifiers'] = {}
    # v_mCln3_TRSC
    reactions['v_mCln3_TRSC']['modifiers'] = {}
    # v_mCln3_TRSL
    reactions['v_mCln3_TRSL']['modifiers'] = {'mCln3': 1.0, 'ribosome': 1.0}
    # v_Cln3_deg
    reactions['v_Cln3_deg']['modifiers'] = {}
    ## Swe1
    # v_mSwe1_deg
    reactions['v_mSwe1_deg']['modifiers'] = {}
    # v_mSwe1_TRSC
    reactions['v_mSwe1_TRSC']['modifiers'] = {}
    # v_mSwe1_TRSL
    reactions['v_mSwe1_TRSL']['modifiers'] = {'mSwe1': 1.0, 'ribosome': 1.0}
    # v_Swe1_deg
    reactions['v_Swe1_deg']['modifiers'] = {}
    # Clb2
    # v_mClb2_deg
    reactions['v_mClb2_deg']['modifiers'] = {}
    # v_Clb2_deg_APC
    reactions['v_Clb2_deg_APC']['modifiers'] = {'APC': 1.0}
    # v_Clb2_deg
    reactions['v_Clb2_deg']['modifiers'] = {}
    # v_mClb2_TRSC
    reactions['v_mClb2_TRSC']['modifiers'] = {'Mcm1': 1.0}
    # v_mClb2_TRSL
    reactions['v_mClb2_TRSL']['modifiers'] = {'mClb2': 1.0, 'ribosome': 1.0}
    ## Whi5
    # v_mWhi5_deg
    reactions['v_mWhi5_deg']['modifiers'] = {}
    # v_mWhi5_TRSC
    reactions['v_mWhi5_TRSC']['modifiers'] = {}
    # v_mWhi5_TRSL
    reactions['v_mWhi5_TRSL']['modifiers'] = {'mWhi5': 1.0, 'ribosome': 1.0}
    # v_Whi5_deg
    reactions['v_Whi5_deg']['modifiers'] = {}
    ## Clb5
    # v_Clb5_deg
    reactions['v_Clb5_deg']['modifiers'] = {}
    # v_Clb5_deg_APC
    reactions['v_Clb5_deg_APC']['modifiers'] = {'APC': 1.0}
    # v_mClb5_deg
    reactions['v_mClb5_deg']['modifiers'] = {}
    # v_mClb5_TRSC
    reactions['v_mClb5_TRSC']['modifiers'] = {'MBF': 1.0}
    # v_mClb5_TRSL
    reactions['v_mClb5_TRSL']['modifiers'] = {'mClb5': 1.0, 'ribosome': 1.0}
    ##Cln2
    # v_mCln2_deg
    reactions['v_mCln2_deg']['modifiers'] = {}
    # v_Cln2_deg
    reactions['v_Cln2_deg']['modifiers'] = {}
    # v_mCln2_TRSC
    reactions['v_mCln2_TRSC']['modifiers'] = {'SBF': 1.0}
    # v_mCln2_TRSL
    reactions['v_mCln2_TRSL']['modifiers'] = {'mCln2': 1.0, 'ribosome': 1.0}
    ## MBF
    # v_mMBF_deg
    reactions['v_mMBF_deg']['modifiers'] = {}
    # v_MBF_deg
    reactions['v_MBF_deg']['modifiers'] = {}
    # v_mMBF_TRSC
    reactions['v_mMBF_TRSC']['modifiers'] = {'Cln2': 1.0}
    # v_mMBF_TRSL
    reactions['v_mMBF_TRSL']['modifiers'] = {'mMBF': 1.0, 'ribosome': 1.0}
    ## Clb3
    # v_Clb3_deg
    reactions['v_Clb3_deg']['modifiers'] = {}
    # v_Clb3_deg_APC
    reactions['v_Clb3_deg_APC']['modifiers'] = {'APC': 1.0}
    # v_mClb3_deg
    reactions['v_mClb3_deg']['modifiers'] = {}
    # v_mClb3_TRSC
    reactions['v_mClb3_TRSC']['modifiers'] = {'Clb5': 1.0}
    # v_mClb3_TRSL
    reactions['v_mClb3_TRSL']['modifiers'] = {'mClb3': 1.0, 'ribosome': 1.0}
    ## Sic1
    # v_mSic1_deg
    reactions['v_mSic1_deg']['modifiers'] = {}
    # v_Sic1_deg
    reactions['v_Sic1_deg']['modifiers'] = {}
    # v_mSic1_TRSC
    reactions['v_mSic1_TRSC']['modifiers'] = {'Swi5': 1.0}
    # v_mSic1_TRSL
    reactions['v_mSic1_TRSL']['modifiers'] = {'mSic1': 1.0, 'ribosome': 1.0}
    ## Swi5
    # v_mSwi5_deg
    reactions['v_mSwi5_deg']['modifiers'] = {}
    # v_Swi5_deg
    reactions['v_Swi5_deg']['modifiers'] = {}
    # v_mSwi5_TRSC
    reactions['v_mSwi5_TRSC']['modifiers'] = {'Mcm1': 1.0}
    # v_mSwi5_TRSL
    reactions['v_mSwi5_TRSL']['modifiers'] = {'mSwi5': 1.0, 'ribosome': 1.0}
    ## Mcm1
    # v_mMcm1_deg
    reactions['v_mMcm1_deg']['modifiers'] = {}
    # v_Mcm1_deg
    reactions['v_Mcm1_deg']['modifiers'] = {}
    # v_mMcm1_TRSC
    reactions['v_mMcm1_TRSC']['modifiers'] = {'Clb2': 1.0, 'Clb3': 1.0}
    # v_mMcm1_TRSL
    reactions['v_mMcm1_TRSL']['modifiers'] = {'mMcm1': 1.0, 'ribosome': 1.0}
    ## APC
    # v_mAPC_deg
    reactions['v_mAPC_deg']['modifiers'] = {}
    # v_APC_deg
    reactions['v_APC_deg']['modifiers'] = {}
    # v_mAPC_TRSC
    reactions['v_mAPC_TRSC']['modifiers'] = {'Mcm1': 1.0}
    # v_mAPC_TRSL
    reactions['v_mAPC_TRSL']['modifiers'] = {'mAPC': 1.0, 'ribosome': 1.0}

    module_dict['reactions'] = reactions
    ### algebraic equations
    alg_eqs = {}
    module_dict['alg_eqs'] = {}

    ### ODEs
    odes = YCM_tools.generate_odes_from_reactions(module_dict['reactions'], module_dict['sp_compartment'],
                                                  module_dict['sp_annotations'], module_dict['units'],
                                                  module_dict['com_annotations'])
    # # AA
    # odes['AA'] = '0.' # ' -709.0 * (vmax_TRSL_Clb2 * (mClb2/(kM_mClb2 + mClb2)) * (ATP/(kM_ATP + ATP)) * (AA/(kM_AA + AA)) * (ribosome/(kM_ribosome + ribosome))) +  435.0 * ((k_Clb5_deg * Clb5)) +  545.0 * ((kd_Cln2 * Cln2)) +  -491.0 * (vmax_TRSL_Whi5 * (mWhi5/(kM_mWhi5 + mWhi5)) * (ATP/(kM_ATP + ATP)) * (AA/(kM_AA + AA)) * (ribosome/(kM_ribosome + ribosome))) +  709.0 * ((k_Clb2_deg * Clb2)) +  -435.0 * (vmax_TRSL_Clb5 * (mClb5/(kM_mClb5 + mClb5)) * (ATP/(kM_ATP + ATP)) * (AA/(kM_AA + AA)) * (ribosome/(kM_ribosome + ribosome))) +  -545.0 * (vmax_TRSL_Cln2 * (mCln2/(kM_mCln2 + mCln2)) * (ATP/(kM_ATP + ATP)) * (AA/(kM_AA + AA)) * (ribosome/(kM_ribosome + ribosome))) +  491.0 * ((k_Whi5_deg * Whi5))'
    # # Pi
    # odes['Pi'] = '0.' # ' 2836.0 * (vmax_TRSL_Clb2 * (mClb2/(kM_mClb2 + mClb2)) * (ATP/(kM_ATP + ATP)) * (AA/(kM_AA + AA)) * (ribosome/(kM_ribosome + ribosome))) +  4260.0 * (vmax_TRSC_Clb2 * (ATP/(kM_ATP + ATP)) * (NA/(kM_NA + NA)) * Mcm1_nuc/(kM_Mcm1_nuc + Mcm1_nuc)) +  2952.0 * (vmax_TRSC_Whi5 * (ATP/(kM_ATP + ATP)) * (NA/(kM_NA + NA)) * Mcm1_nuc/(kM_Mcm1_nuc + Mcm1_nuc)) +  3276.0 * (vmax_TRSC_Cln2 * (ATP/(kM_ATP + ATP)) * (NA/(kM_NA + NA)) * SBF_nuc/(kM_SBF_nuc + SBF_nuc)) +  2616.0 * (vmax_TRSC_Clb5 * (ATP/(kM_ATP + ATP)) * (NA/(kM_NA + NA)) * MBF_nuc/(kM_MBF_nuc + MBF_nuc)) +  1964.0 * (vmax_TRSL_Whi5 * (mWhi5/(kM_mWhi5 + mWhi5)) * (ATP/(kM_ATP + ATP)) * (AA/(kM_AA + AA)) * (ribosome/(kM_ribosome + ribosome))) +  1740.0 * (vmax_TRSL_Clb5 * (mClb5/(kM_mClb5 + mClb5)) * (ATP/(kM_ATP + ATP)) * (AA/(kM_AA + AA)) * (ribosome/(kM_ribosome + ribosome))) +  2180.0 * (vmax_TRSL_Cln2 * (mCln2/(kM_mCln2 + mCln2)) * (ATP/(kM_ATP + ATP)) * (AA/(kM_AA + AA)) * (ribosome/(kM_ribosome + ribosome)))'
    # # ADP
    # odes['ADP'] = '0.' # ' 2836.0 * (vmax_TRSL_Clb2 * (mClb2/(kM_mClb2 + mClb2)) * (ATP/(kM_ATP + ATP)) * (AA/(kM_AA + AA)) * (ribosome/(kM_ribosome + ribosome))) +  4260.0 * (vmax_TRSC_Clb2 * (ATP/(kM_ATP + ATP)) * (NA/(kM_NA + NA)) * Mcm1_nuc/(kM_Mcm1_nuc + Mcm1_nuc)) +  2952.0 * (vmax_TRSC_Whi5 * (ATP/(kM_ATP + ATP)) * (NA/(kM_NA + NA)) * Mcm1_nuc/(kM_Mcm1_nuc + Mcm1_nuc)) +  3276.0 * (vmax_TRSC_Cln2 * (ATP/(kM_ATP + ATP)) * (NA/(kM_NA + NA)) * SBF_nuc/(kM_SBF_nuc + SBF_nuc)) +  2616.0 * (vmax_TRSC_Clb5 * (ATP/(kM_ATP + ATP)) * (NA/(kM_NA + NA)) * MBF_nuc/(kM_MBF_nuc + MBF_nuc)) +  1964.0 * (vmax_TRSL_Whi5 * (mWhi5/(kM_mWhi5 + mWhi5)) * (ATP/(kM_ATP + ATP)) * (AA/(kM_AA + AA)) * (ribosome/(kM_ribosome + ribosome))) +  1740.0 * (vmax_TRSL_Clb5 * (mClb5/(kM_mClb5 + mClb5)) * (ATP/(kM_ATP + ATP)) * (AA/(kM_AA + AA)) * (ribosome/(kM_ribosome + ribosome))) +  2180.0 * (vmax_TRSL_Cln2 * (mCln2/(kM_mCln2 + mCln2)) * (ATP/(kM_ATP + ATP)) * (AA/(kM_AA + AA)) * (ribosome/(kM_ribosome + ribosome)))'
    # # NA
    # odes['NA'] = '0.' # ' 2130.0 * ((k_mClb2_deg * mClb2)) +  1638.0 * ((k_mCln2_deg * mCln2)) +  1308.0 * ((k_mClb5_deg * mClb5)) +  -2130.0 * (vmax_TRSC_Clb2 * (ATP/(kM_ATP + ATP)) * (NA/(kM_NA + NA)) * Mcm1_nuc/(kM_Mcm1_nuc + Mcm1_nuc)) +  1476.0 * ((k_mWhi5_deg * mWhi5)) +  -1476.0 * (vmax_TRSC_Whi5 * (ATP/(kM_ATP + ATP)) * (NA/(kM_NA + NA)) * Mcm1_nuc/(kM_Mcm1_nuc + Mcm1_nuc)) +  -1638.0 * (vmax_TRSC_Cln2 * (ATP/(kM_ATP + ATP)) * (NA/(kM_NA + NA)) * SBF_nuc/(kM_SBF_nuc + SBF_nuc)) +  -1308.0 * (vmax_TRSC_Clb5 * (ATP/(kM_ATP + ATP)) * (NA/(kM_NA + NA)) * MBF_nuc/(kM_MBF_nuc + MBF_nuc))'
    # # ribosome
    # odes['ribosome'] = '0.'
    # # ATP
    # odes['ATP'] = '0.' # ' -2836.0 * (vmax_TRSL_Clb2 * (mClb2/(kM_mClb2 + mClb2)) * (ATP/(kM_ATP + ATP)) * (AA/(kM_AA + AA)) * (ribosome/(kM_ribosome + ribosome))) +  -4260.0 * (vmax_TRSC_Clb2 * (ATP/(kM_ATP + ATP)) * (NA/(kM_NA + NA)) * Mcm1_nuc/(kM_Mcm1_nuc + Mcm1_nuc)) +  -2952.0 * (vmax_TRSC_Whi5 * (ATP/(kM_ATP + ATP)) * (NA/(kM_NA + NA)) * Mcm1_nuc/(kM_Mcm1_nuc + Mcm1_nuc)) +  -3276.0 * (vmax_TRSC_Cln2 * (ATP/(kM_ATP + ATP)) * (NA/(kM_NA + NA)) * SBF_nuc/(kM_SBF_nuc + SBF_nuc)) +  -2616.0 * (vmax_TRSC_Clb5 * (ATP/(kM_ATP + ATP)) * (NA/(kM_NA + NA)) * MBF_nuc/(kM_MBF_nuc + MBF_nuc)) +  -1964.0 * (vmax_TRSL_Whi5 * (mWhi5/(kM_mWhi5 + mWhi5)) * (ATP/(kM_ATP + ATP)) * (AA/(kM_AA + AA)) * (ribosome/(kM_ribosome + ribosome))) +  -1740.0 * (vmax_TRSL_Clb5 * (mClb5/(kM_mClb5 + mClb5)) * (ATP/(kM_ATP + ATP)) * (AA/(kM_AA + AA)) * (ribosome/(kM_ribosome + ribosome))) +  -2180.0 * (vmax_TRSL_Cln2 * (mCln2/(kM_mCln2 + mCln2)) * (ATP/(kM_ATP + ATP)) * (AA/(kM_AA + AA)) * (ribosome/(kM_ribosome + ribosome)))'
    # # mWhi5
    # odes['mWhi5'] = ' -1.0 * ((k_mWhi5_deg * mWhi5)) +  1.0 * (vmax_TRSC_Whi5 * (ATP/(kM_ATP + ATP)) * (NA/(kM_NA + NA)))'
    # # Whi5
    # odes['Whi5'] = ' 1.0 * (vmax_TRSL_Whi5 * (mWhi5/(kM_mWhi5 + mWhi5)) * (ATP/(kM_ATP + ATP)) * (AA/(kM_AA + AA)) * (ribosome/(kM_ribosome + ribosome))) +  -1.0 * ((k_Whi5_deg * Whi5))'

    module_dict['odes'] = odes
    module_dict['type'] = 'ODE'


    return module_dict