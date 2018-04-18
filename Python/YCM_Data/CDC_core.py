import GenerateODEsFromReactions as YCM_tools


def CDC_core():
    """
    Computational model of S. cerevisiae cell cycle.
    Created during WCM workshop in E.Klipps lab 2013.
    Python module written by Thomas Spiesser, Stephan Adler, Lena Rother, Ulrike Muenzner.
    """

    info = "Computational model of S. cerevisiae cell cycle. \
            Created during WCM workshop in E.Klipps lab 2013. \
            Python module written by Thomas Spiesser, Stephan Adler, Lena Rother, Ulrike Muenzner, Friedemann Uschner."

    module_dict = {}

    GRN_mod = 0.0  # if run together with GRN module then this should be 0.0, if run stand alone then 1.0
    volume_correction = 1.0

    ### Initial Values for Species:
    module_dict['initvars'] = {'Swe1_cyt': volume_correction * 16.5095430573 / (16.0e-15) / (6.022140857 * 10 ** 20),
                               # Swe1  16.5105    0.3300485635*50.,
                               'APC_cyt': volume_correction * 33.7752286098 / (16.0e-15) / (6.022140857 * 10 ** 20),
                               # APC  31.5695   0.7997140862*50.,
                               'Clb2_cyt': volume_correction * 0.50833581703 / (16.0e-15) / (6.022140857 * 10 ** 20),
                               # Clb2  0.469292    0.01556156207*50.,
                               'Mcm1_nuc': volume_correction * 328.640201918 / (16.0e-15) / (6.022140857 * 10 ** 20),
                               # Mcm1  299.113    8.860038332*50.,
                               'Clb2_p_cyt': volume_correction * 1.75932964526 / (16.0e-15) / (6.022140857 * 10 ** 20),
                               # Clb2_p    1.62423      0.05386094184*50.,
                               'int_vol': 16.0e-15,
                               'nuc_vol': 1.4e-15,
                               'Swi5_nuc': volume_correction * 1382.00592036 / (16.0e-15) / (6.022140857 * 10 ** 20),
                               # Swi5  1293.08    26.21682871*50.,
                               'Hog1_PP_cyt': volume_correction * 0.0 / (16.0e-15) / (6.022140857 * 10 ** 20),
                               # Hog1_PP    0.0*50.,
                               'Swe1_p_cyt': volume_correction * 263.710456942 / (16.0e-15) / (6.022140857 * 10 ** 20),
                               # Swe1_p    263.709   5.274351436*50.,
                               'Sic1_p_cyt': volume_correction * 0.794526522483 / (16.0e-15) / (6.022140857 * 10 ** 20),
                               # Sic1_p   0.806354    0.01833841336*50.,
                               'Far1_cyt': volume_correction * 257.646155629 / (16.0e-15) / (6.022140857 * 10 ** 20),
                               # Far1  256.935    5.089565993*50.,
                               'Cdc14_p_cyt': volume_correction * 241.20011414 / (16.0e-15) / (6.022140857 * 10 ** 20),
                               # Cdc14_p   230.841    5.744773696*50.,
                               'Sic1_cyt': volume_correction * 743.771267535 / (16.0e-15) / (6.022140857 * 10 ** 20),
                               # Sic1  739.666	  13.03523532*50.,
                               'Cln3_Far1_p_cyt': volume_correction * 0. / (16.0e-15) / (6.022140857 * 10 ** 20),
                               # -2.78171E-051, (at timepoint 250min negative in Copasi -> corrected to 0.)	#	Cln3_Far1_p    0.0*50.,
                               'Clb2_Sic1_cyt': volume_correction * 18.7726662985 / (16.0e-15) / (
                               6.022140857 * 10 ** 20),  # Clb2_Sic1     17.2634    0.7013584159*50.,
                               'Sic1_Hp_cyt': volume_correction * 2.82634778884e-16 / (16.0e-15) / (
                               6.022140857 * 10 ** 20),  # Sic1_Hp    0.   0.0*50.,
                               'Clb3_cyt': volume_correction * 15.9937764044 / (16.0e-15) / (6.022140857 * 10 ** 20),
                               # Clb3  15.6615    0.3595273909*50.,
                               'MBF_nuc': volume_correction * 0.0159101628959 / (16.0e-15) / (6.022140857 * 10 ** 20),
                               # MBF  0.0143144    0.0003961717805*50.,
                               'Cln3_cyt': volume_correction * 70.2499906409 / (16.0e-15) / (6.022140857 * 10 ** 20),
                               # Cln3  70.2499 	1.404983711*50.,
                               'Fus3_cyt': volume_correction * 0.0 / (16.0e-15) / (6.022140857 * 10 ** 20),
                               # Fus3    0.0*50.,
                               'SBF_p_cyt': volume_correction * 0.00303453629439 / (16.0e-15) / (
                               6.022140857 * 10 ** 20),  # SBF_p   0.001169    3.043659657e-05*50.,
                               'Whi5_p_cyt': volume_correction * 72.0211862929 / (16.0e-15) / (6.022140857 * 10 ** 20),
                               # Whi5_p    72.414    1.195597609*50.,
                               'Cdc14_cyt': volume_correction * 3518.80088585 / (16.0e-15) / (6.022140857 * 10 ** 20),
                               # Cdc14      3529.16    69.4552263*50.,
                               'Whi5_cyt': volume_correction * 588.335666954 / (16.0e-15) / (6.022140857 * 10 ** 20),
                               # Whi5  587.842    11.96622904*50.,
                               'Clb5_Sic1_Hp_cyt': volume_correction * 1.56380430084e-19 / (16.0e-15) / (
                               6.022140857 * 10 ** 20),  # Clb5_Sic1_Hp      0.    0.0*50.,
                               'Cln2_cyt': volume_correction * 0.980895345867 / (16.0e-15) / (6.022140857 * 10 ** 20),
                               # Cln2       0.451062    0.009624210133*50.,
                               'Far1_p_cyt': volume_correction * 0. / (16.0e-15) / (6.022140857 * 10 ** 20),
                               # -1.6823E-052, (at timepoint 250min negative in Copasi -> corrected to 0.)	#	Far1_p    0.0*50.,
                               'Mih1_cyt': volume_correction * 107.0 / (16.0e-15) / (6.022140857 * 10 ** 20),
                               # Mih1   107.    2.14*50.,
                               'Cln2_Far1_p_cyt': volume_correction * 0. / (16.0e-15) / (6.022140857 * 10 ** 20),
                               # -1.67524E-053, (at timepoint 250min negative in Copasi -> corrected to 0.)	#	Cln2_Far1_p    0.0*50.,
                               'Clb3_Sic1_cyt': volume_correction * 712.773314916 / (16.0e-15) / (
                               6.022140857 * 10 ** 20),  # Clb3_Sic1     694.12    14.03290456*50.,
                               'Clb5_Sic1_cyt': volume_correction * 0.239080270038 / (16.0e-15) / (
                               6.022140857 * 10 ** 20),  # Clb5_Sic1     0.22419    0.004756487143*50.,
                               'Clb5_cyt': volume_correction * 0.00562512781279 / (16.0e-15) / (6.022140857 * 10 ** 20),
                               # Clb5     0.00529381   0.0001290244359*50.,
                               'SBF_Whi5_nuc': volume_correction * 349.833146752 / (16.0e-15) / (
                               6.022140857 * 10 ** 20),  # SBF_Whi5       349.934   6.998692073*50.,
                               'APC_p_cyt': volume_correction * 0.0494525387023 / (16.0e-15) / (6.022140857 * 10 ** 20),
                               # APC_p    0.0450007   0.001313221975*50.,
                               'Swi5_p_cyt': volume_correction * 5.81902907181 / (16.0e-15) / (6.022140857 * 10 ** 20),
                               # Swi5_p    5.2521  0.1418707154*50.,
                               'SBF_nuc': volume_correction * 0.163989611608 / (16.0e-15) / (
                               6.022140857 * 10 ** 20)}  # SBF   0.0650019   0.001277490825*50.

    ### Initial Values for Parameters:
    module_dict['initpars'] = {'kd_Swi5_p': 0.013 / 60.,  # 'kd_Swi5_p': 's**-1',       included from bookchapter
                               'kd_Clb2_p': 0.025 / 60.,  # 'kd_Clb2_p': 's**-1',       included from bookchapter
                               'K_MBF': GRN_mod * (1.0 / (16.0e-15) / (6.022140857 * 10 ** 20)) * 1.0 * 50.,
                               # 'K_MBF': 'dimensionless',
                               'ka_APC_Cdc14': ((16.0e-15) * (6.022140857 * 10 ** 20)) * 3.0 / 60. / 50.,
                               # 'ka_APC_Cdc14': '(dimensionless s)**-1',
                               'ka_Cdc14_APC': ((16.0e-15) * (6.022140857 * 10 ** 20)) * 0.5028 / 60. / 50.,
                               # 'ka_Cdc14_APC': '(dimensionless s)**-1',
                               'kcd_Clb2_Sic1': 1.0 / 60.,  # 'kcd_Clb2_Sic1': 's**-1',
                               'kcd_Clb3_Sic1': 1.0 / 60.,  # 'kcd_Clb3_Sic1': 's**-1',
                               'kcd_Clb5_Sic1': 1.0 / 60.,  # 'kcd_Clb5_Sic1': 's**-1',
                               'kcd_Clb5_Sic1_Hp': 2.0 / 60.,  # 'kcd_Clb5_Sic1_Hp': 's**-1',
                               'kcd_Cln2_Far1p': 0.5 / 60.,  # 'kcd_Cln2_Far1p': 's**-1',
                               'kcd_Cln3_Far1p': 0.5 / 60.,  # 'kcd_Cln3_Far1p': 's**-1',
                               'kcf_Clb2_Sic1': ((16.0e-15) * (6.022140857 * 10 ** 20)) * 3.0 / 60. / 50.,
                               # 'kcf_Clb2_Sic1': '(dimensionless s)**-1',
                               'kcf_Clb3_Sic1': ((16.0e-15) * (6.022140857 * 10 ** 20)) * 3.0 / 60. / 50.,
                               # 'kcf_Clb3_Sic1': '(dimensionless s)**-1',
                               'kcf_Clb5_Sic1': ((16.0e-15) * (6.022140857 * 10 ** 20)) * 3.0 / 60. / 50.,
                               # 'kcf_Clb5_Sic1': '(dimensionless s)**-1',
                               'kcf_Clb5_Sic1_Hp': ((16.0e-15) * (6.022140857 * 10 ** 20)) * 6.0 / 60. / 50.,
                               # 'kcf_Clb5_Sic1_Hp': '(dimensionless s)**-1',
                               'kcf_Cln2_Far1p': ((16.0e-15) * (6.022140857 * 10 ** 20)) * 6.0 / 60. / 50.,
                               # 'kcf_Cln2_Far1p': '(dimensionless s)**-1',
                               'kcf_Cln3_Far1p': ((16.0e-15) * (6.022140857 * 10 ** 20)) * 6.0 / 60. / 50.,
                               # 'kcf_Cln3_Far1p': '(dimensionless s)**-1',
                               'kcf_SBF_Whi5': ((16.0e-15) * (6.022140857 * 10 ** 20)) * 3.0 / 60. / 50.,
                               # 'kcf_SBF_Whi5': '(dimensionless s)**-1',
                               'kd_APC': GRN_mod * 0.22 / 60.,  # 'kd_APC': 's**-1',
                               'kd_APC_p': 0.5 / 60.,  # 'kd_APC_p': 's**-1',
                               'kd_Clb2': GRN_mod * 0.025 / 60.,  # 'kd_Clb2': 's**-1',
                               'kd_Clb2_APC': GRN_mod * ((16.0e-15) * (6.022140857 * 10 ** 20)) * 0.604 / 60. / 50.,
                               # 'kd_Clb2_APC': '(dimensionless s)**-1',
                               'kd_Clb2_Sic1': 0.5 / 60.,  # 'kd_Clb2_Sic1': 's**-1',
                               'kd_Clb3': GRN_mod * 0.005 / 60.,  # 'kd_Clb3': 's**-1',
                               'kd_Clb3_APC': GRN_mod * ((16.0e-15) * (6.022140857 * 10 ** 20)) * 0.05 / 60. / 50.,
                               # 'kd_Clb3_APC': '(dimensionless s)**-1',
                               'kd_Clb3_Sic1': 0.01 / 60.,  # 'kd_Clb3_Sic1': 's**-1',
                               'kd_Clb5': GRN_mod * 0.187825 / 60.,  # 'kd_Clb5': 's**-1',
                               'kd_Clb5_APC': GRN_mod * ((16.0e-15) * (6.022140857 * 10 ** 20)) * 1.001 / 60. / 50.,
                               # 'kd_Clb5_APC': '(dimensionless s)**-1',
                               'kd_Clb5_Sic1': 0.1 / 60.,  # 'kd_Clb5_Sic1': 's**-1',
                               'kd_Cln2': GRN_mod * 0.2267 / 60.,  # 'kd_Cln2': 's**-1',
                               'kd_Cln2_Far1p': 0.1 / 60.,  # 'kd_Cln2_Far1p': 's**-1',
                               'kd_Cln3': GRN_mod * 0.01 / 60.,  # 'kd_Cln3': 's**-1',
                               'kd_Cln3_Far1p': 0.0005 / 60.,  # 'kd_Cln3_Far1p': 's**-1',
                               'kd_Far1': GRN_mod * 0.02 / 60.,  # 'kd_Far1': 's**-1',
                               'kd_Far1p': 0.1 / 60.,  # 'kd_Far1p': 's**-1',
                               'kd_MBF': GRN_mod * 0.2527 / 60.,  # 'kd_MBF': 's**-1',
                               'kd_Mcm1': GRN_mod * 0.30555 / 60.,  # 'kd_Mcm1': 's**-1',
                               'kd_Mih1': GRN_mod * 0.1 / 60.,  # 'kd_Mih1': 's**-1',
                               'kd_Sic1': GRN_mod * 0.1 / 60.,  # 'kd_Sic1': 's**-1',
                               'kd_Sic1p': 0.1 / 60.,  # 'kd_Sic1p': 's**-1',
                               'kd_Swe1': GRN_mod * 0.1 / 60.,  # 'kd_Swe1': 's**-1',
                               'kd_Swe1_p': 0.1 / 60.,  # 'kd_Swe1_p': 's**-1',
                               'kd_Swi5': GRN_mod * 0.013 / 60.,  # 'kd_Swi5': 's**-1',
                               'kd_Whi5': GRN_mod * 0.01 / 60.,  # 'kd_Whi5': 's**-1',
                               'kd_Whi5p': 0.01 / 60.,  # 'kd_Whi5p': 's**-1',
                               'kd_Whi5_SBF': (1 - GRN_mod) * 0.01 / 60.,
                               # FIXME: Test for now! Does not belong into GRN ... fix this for the future!
                               'kdd_Far1': GRN_mod * ((16.0e-15) * (6.022140857 * 10 ** 20)) * 0.0033 / 60. / 50.,
                               # 'kdd_Far1': '(dimensionless s)**-1',
                               'kdd_Far1p': ((16.0e-15) * (6.022140857 * 10 ** 20)) * 0.05 / 60. / 50.,
                               # 'kdd_Far1p': '(dimensionless s)**-1',
                               'kdp_Clb2': ((16.0e-15) * (6.022140857 * 10 ** 20)) * 15.7842816 / 60. / 50.,
                               # 'kdp_Clb2': '(dimensionless s)**-1',
                               'kdp_Clb5_Sic1_Hp': 0.2 / 60.,  # 'kdp_Clb5_Sic1_Hp': 's**-1',
                               'kdp_Far1p': 0.05 / 60.,  # 'kdp_Far1p': 's**-1',
                               'kdp_SBF': ((16.0e-15) * (6.022140857 * 10 ** 20)) * 0.5 / 60. / 50.,
                               # 'kdp_SBF': '(dimensionless s)**-1',
                               'kdp_Sic1_Hp': 1.5115 / 60.,  # 'kdp_Sic1_Hp': 's**-1',
                               'kdp_Swi5_Cdc14': ((16.0e-15) * (6.022140857 * 10 ** 20)) * 50.0 / 60. / 50.,
                               # 'kdp_Swi5_Cdc14': '(dimensionless s)**-1',
                               'kdp_Whi5': ((16.0e-15) * (6.022140857 * 10 ** 20)) * 1.0 / 60. / 50.,
                               # 'kdp_Whi5': '(dimensionless s)**-1',
                               'ki_Cdc14': 5.029219 / 60.,  # 'ki_Cdc14': 's**-1',
                               'kI_Clb2_Hog1': ((16.0e-15) * (6.022140857 * 10 ** 20)) * 0.0001 / 50.,
                               # 'kI_Clb2_Hog1': '(dimensionless)**-1',
                               'kI_Clb5_Hog1': ((16.0e-15) * (6.022140857 * 10 ** 20)) * 1.0 / 50.,
                               # 'kI_Clb5_Hog1': '(dimensionless)**-1',
                               'kI_Cln2_Hog1': ((16.0e-15) * (6.022140857 * 10 ** 20)) * 20.029 / 50.,
                               # 'kI_Cln2_Hog1': '(dimensionless)**-1',
                               'kI_Swe1_Hog1': ((16.0e-15) * (6.022140857 * 10 ** 20)) * 100.1 / 50.,
                               # 'kI_Swe1_Hog1': '(dimensionless)**-1',
                               'Kp_APC': GRN_mod * (1.0 / (16.0e-15) / (6.022140857 * 10 ** 20)) * 94288.25 * 50.,
                               # 'Kp_APC': 'dimensionless',
                               'kp_APC': GRN_mod * (
                               1.0 / (16.0e-15) / (6.022140857 * 10 ** 20)) * 335.5185235 / 60. * 50.,
                               # 'kp_APC': 'dimensionless * (s)**-1',
                               'kp_basal_Far1': GRN_mod * (
                               1.0 / (16.0e-15) / (6.022140857 * 10 ** 20)) * 0.14066 / 60. * 50.,
                               # 'kp_basal_Far1': 'dimensionless * (s)**-1',
                               'kp_Clb2': GRN_mod * (
                               1.0 / (16.0e-15) / (6.022140857 * 10 ** 20)) * 50.0282949 / 60. * 50.,
                               # 'kp_Clb2': 'dimensionless * (s)**-1',
                               'Kp_Clb2': GRN_mod * (1.0 / (16.0e-15) / (6.022140857 * 10 ** 20)) * 5000.0 * 50.,
                               # 'Kp_Clb2': 'dimensionless',
                               'kp_Clb3': GRN_mod * (1.0 / (16.0e-15) / (6.022140857 * 10 ** 20)) * 0.5116 / 60. * 50.,
                               # 'kp_Clb3': 'dimensionless * (s)**-1',
                               'Kp_Clb3': GRN_mod * (1.0 / (16.0e-15) / (6.022140857 * 10 ** 20)) * 1.0 * 50.,
                               # 'Kp_Clb3': 'dimensionless',
                               'kp_Clb5': GRN_mod * (1.0 / (16.0e-15) / (6.022140857 * 10 ** 20)) * 0.99975 / 60. * 50.,
                               # 'kp_Clb5': 'dimensionless * (s)**-1',
                               'Kp_Clb5': GRN_mod * (1.0 / (16.0e-15) / (6.022140857 * 10 ** 20)) * 1.0 * 50.,
                               # 'Kp_Clb5': 'dimensionless',
                               'Kp_Cln2': GRN_mod * (1.0 / (16.0e-15) / (6.022140857 * 10 ** 20)) * 22.025 * 50.,
                               # 'Kp_Cln2': 'dimensionless',
                               'kp_Cln2': GRN_mod * (
                               1.0 / (16.0e-15) / (6.022140857 * 10 ** 20)) * 28.0496125 / 60. * 50.,
                               # 'kp_Cln2': 'dimensionless * (s)**-1',
                               'kp_Cln3': GRN_mod * (1.0 / (16.0e-15) / (6.022140857 * 10 ** 20)) * 0.01405 / 60. * 50.,
                               # 'kp_Cln3': 'dimensionless * (s)**-1',
                               'kp_Far1': GRN_mod * 2.99896964 / 60.,  # 'kp_Far1': 's**-1',
                               'kp_MBF': GRN_mod * (1.0 / (16.0e-15) / (6.022140857 * 10 ** 20)) * 3.0 / 60. * 50.,
                               # 'kp_MBF': 'dimensionless * (s)**-1',
                               'kp_Mcm1': GRN_mod * (1.0 / (16.0e-15) / (6.022140857 * 10 ** 20)) * 60.0 / 60. * 50.,
                               # 'kp_Mcm1': 'dimensionless * (s)**-1',
                               'Kp_Mcm1': GRN_mod * (1.0 / (16.0e-15) / (6.022140857 * 10 ** 20)) * 2.5 * 50.,
                               # 'Kp_Mcm1': 'dimensionless',
                               'kp_Mih1': GRN_mod * (1.0 / (16.0e-15) / (6.022140857 * 10 ** 20)) * 0.214 / 60. * 50.,
                               # 'kp_Mih1': 'dimensionless * (s)**-1',
                               'Kp_Sic1': GRN_mod * (1.0 / (16.0e-15) / (6.022140857 * 10 ** 20)) * 15.028 * 50.,
                               # 'Kp_Sic1': 'dimensionless',
                               'kp_Sic1': GRN_mod * (1.0 / (16.0e-15) / (6.022140857 * 10 ** 20)) * 4.52804 / 60. * 50.,
                               # 'kp_Sic1': 'dimensionless * (s)**-1',
                               'kp_Swe1': GRN_mod * (1.0 / (16.0e-15) / (6.022140857 * 10 ** 20)) * 0.56044 / 60. * 50.,
                               # 'kp_Swe1': 'dimensionless * (s)**-1',
                               'Kp_Swi5': GRN_mod * (1.0 / (16.0e-15) / (6.022140857 * 10 ** 20)) * 1000.0 * 50.,
                               # 'Kp_Swi5': 'dimensionless',
                               'kp_Swi5': GRN_mod * (
                               1.0 / (16.0e-15) / (6.022140857 * 10 ** 20)) * 4.784016848 / 60. * 50.,
                               # 'kp_Swi5': 'dimensionless * (s)**-1',
                               'kp_Whi5': GRN_mod * (1.0 / (16.0e-15) / (6.022140857 * 10 ** 20)) * 0.16533 / 60. * 50.,
                               # 'kp_Whi5': 'dimensionless * (s)**-1',
                               'kpp_APC_Clb2': ((16.0e-15) * (6.022140857 * 10 ** 20)) * 1.0093466795 / 60. / 50.,
                               # 'kpp_APC_Clb2': '(dimensionless s)**-1',
                               'kpp_APC_Clb5': ((16.0e-15) * (6.022140857 * 10 ** 20)) * 100.0 / 60. / 50.,
                               # 'kpp_APC_Clb5': '(dimensionless s)**-1',
                               'kpp_Cdc14_Clb2': ((16.0e-15) * (6.022140857 * 10 ** 20)) * 0.00700465 / 60. / 50.,
                               # 'kpp_Cdc14_Clb2': '(dimensionless s)**-1',
                               'kpp_Cdc14_MEN': ((16.0e-15) * (6.022140857 * 10 ** 20)) * 1e-05 / 60. / 50.,
                               # 'kpp_Cdc14_MEN': '(dimensionless s)**-1',
                               'kpp_Clb2': ((16.0e-15) * (6.022140857 * 10 ** 20)) * 350.267663 / 60. / 50.,
                               # 'kpp_Clb2': '(dimensionless s)**-1',
                               'Kpp_Clb5_Sic1': (1.0 / (16.0e-15) / (6.022140857 * 10 ** 20)) * 24.99 * 50.,
                               # 'Kpp_Clb5_Sic1': 'dimensionless',
                               'kpp_Clb5_Sic1': 2.0 / 60.,  # 'kpp_Clb5_Sic1': 's**-1',
                               'kpp_Clb5_Sic1_Hog1': ((16.0e-15) * (6.022140857 * 10 ** 20)) * 10.0 / 60. / 50.,
                               # 'kpp_Clb5_Sic1_Hog1': '(dimensionless s)**-1',
                               'kpp_Cln2_Far1p': ((16.0e-15) * (6.022140857 * 10 ** 20)) * 36.0 / 60. / 50.,
                               # 'kpp_Cln2_Far1p': '(dimensionless s)**-1',
                               'kpp_Cln2_Sic1': 2.0 / 60.,  # 'kpp_Cln2_Sic1': 's**-1',
                               'Kpp_Cln2_Sic1': (1.0 / (16.0e-15) / (6.022140857 * 10 ** 20)) * 40.0 * 50.,
                               # 'Kpp_Cln2_Sic1': 'dimensionless',
                               'kpp_Cln2_Whi5': ((16.0e-15) * (6.022140857 * 10 ** 20)) * 2.0105 / 60. / 50.,
                               # 'kpp_Cln2_Whi5': '(dimensionless s)**-1',
                               'kppa_Cln2_Whi5': 2.0105 / 60.,  # 'kppa_Cln2_Whi5': 's**-1',
                               'Kpp_Cln2_Whi5': (1.0 / (16.0e-15) / (6.022140857 * 10 ** 20)) * 1.001 * 50.,
                               # 'Kpp_Cln2_Whi5': 'dimensionless',
                               'Kpp_Cln3_Whi5': (1.0 / (16.0e-15) / (6.022140857 * 10 ** 20)) * 85.0316195 * 50.,
                               # 'Kpp_Cln3_Whi5': 'dimensionless',
                               'kpp_Cln3_Whi5': ((16.0e-15) * (6.022140857 * 10 ** 20)) * 0.4032023 / 60. / 50.,
                               # 'kpp_Cln3_Whi5': '(dimensionless s)**-1',
                               'kppa_Cln3_Whi5': 0.4032023 / 60.,  # 'kppa_Cln3_Whi5': 's**-1',
                               'kpp_Far1': ((16.0e-15) * (6.022140857 * 10 ** 20)) * 10.0 / 60. / 50.,
                               # 'kpp_Far1': '(dimensionless s)**-1',
                               'kpp_SBF_Clb2': ((16.0e-15) * (6.022140857 * 10 ** 20)) * 4.058984 / 60. / 50.,
                               # 'kpp_SBF_Clb2': '(dimensionless s)**-1',
                               'kpp_Sic1_Hog1': ((16.0e-15) * (6.022140857 * 10 ** 20)) * 10.0 / 60. / 50.,
                               # 'kpp_Sic1_Hog1': '(dimensionless s)**-1',
                               'kpp_Swe1_Clb2': ((16.0e-15) * (6.022140857 * 10 ** 20)) * 0.0995 / 60. / 50.,
                               # 'kpp_Swe1_Clb2': '(dimensionless s)**-1',
                               'kpp_Swe1_Hls1': 1.596 / 60.,  # 'kpp_Swe1_Hls1': 's**-1',
                               'kpp_Swi5_Clb2': ((16.0e-15) * (6.022140857 * 10 ** 20)) * 99.8 / 60. / 50.,
                               # 'kpp_Swi5_Clb2': '(dimensionless s)**-1',
                               'kpp_Swi5_Clb5': ((16.0e-15) * (6.022140857 * 10 ** 20)) * 0.5005 / 60. / 50.,
                               # 'kpp_Swi5_Clb5': '(dimensionless s)**-1',
                               'n_Clb3': 3.0,  # 'n_Clb3': 'dimensionless',
                               'n_Mcm1': 3.0,  # 'n_Mcm1': 'dimensionless',
                               'n_SBF': 4.0,  # 'n_SBF': 'dimensionless',
                               'n1': 6.0,  # 'n1': 'dimensionless',
                               'V0_Mcm1': GRN_mod * (1.0 / (16.0e-15) / (6.022140857 * 10 ** 20)) * 20.404 * 50.,
                               # 'V0_Mcm1': 'dimensionless',
                               'v0_Mcm1': GRN_mod * (1.0 / (16.0e-15) / (
                               6.022140857 * 10 ** 20)) * 40.050851 / 60. * 50.}  # 'v0_Mcm1': 'dimensionless * (s)**-1'}

    ### Model Name:
    module_dict['name'] = 'CDC_core'

    ### Species Units:
    module_dict['units'] = {'Clb2_Sic1_cyt': 'mM',
                            'Whi5_cyt': 'mM',
                            'SBF_p_cyt': 'mM',
                            'Clb3_Sic1_cyt': 'mM',
                            'Clb5_cyt': 'mM',
                            'SBF_nuc': 'mM',
                            'Swe1_p_cyt': 'mM',
                            'Sic1_p_cyt': 'mM',
                            'Far1_cyt': 'mM',
                            'Whi5_p_cyt': 'mM',
                            'Clb2_cyt': 'mM',
                            'Sic1_Hp_cyt': 'mM',
                            'Swi5_p_cyt': 'mM',
                            'Cln2_Far1_p_cyt': 'mM',
                            'Fus3_cyt': 'mM',
                            'Clb3_cyt': 'mM',
                            'Clb5_Sic1_Hp_cyt': 'mM',
                            'Mih1_cyt': 'mM',
                            'APC_p_cyt': 'mM',
                            'Swe1_cyt': 'mM',
                            'int_vol': 'L',
                            'nuc_vol': 'L',
                            'Far1_p_cyt': 'mM',
                            'MBF_nuc': 'mM',
                            'Cln2_cyt': 'mM',
                            'Hog1_PP_cyt': 'mM',
                            'APC_cyt': 'mM',
                            'Clb2_p_cyt': 'mM',
                            'Swi5_nuc': 'mM',
                            'Cdc14_p_cyt': 'mM',
                            'Sic1_cyt': 'mM',
                            'Cln3_Far1_p_cyt': 'mM',
                            'Cln3_cyt': 'mM',
                            'Cdc14_cyt': 'mM',
                            'Clb5_Sic1_cyt': 'mM',
                            'SBF_Whi5_nuc': 'mM',
                            'Mcm1_nuc': 'mM'}

    ### Species Compartment:
    module_dict['sp_compartment'] = {'Swe1_cyt': 'intracellular',
                                     'APC_cyt': 'intracellular',
                                     'Clb2_cyt': 'intracellular',
                                     'Mcm1_nuc': 'intracellular',
                                     'Clb2_p_cyt': 'intracellular',
                                     'int_vol': 'intracellular',
                                     'nuc_vol': 'nucleus',
                                     'Swi5_nuc': 'intracellular',
                                     'Hog1_PP_cyt': 'intracellular',
                                     'Swe1_p_cyt': 'intracellular',
                                     'Sic1_p_cyt': 'intracellular',
                                     'Far1_cyt': 'intracellular',
                                     'Cdc14_p_cyt': 'intracellular',
                                     'Sic1_cyt': 'intracellular',
                                     'Cln3_Far1_p_cyt': 'intracellular',
                                     'Clb2_Sic1_cyt': 'intracellular',
                                     'Sic1_Hp_cyt': 'intracellular',
                                     'Clb3_cyt': 'intracellular',
                                     'MBF_nuc': 'intracellular',
                                     'Cln3_cyt': 'intracellular',
                                     'Fus3_cyt': 'intracellular',
                                     'SBF_p_cyt': 'intracellular',
                                     'Whi5_p_cyt': 'intracellular',
                                     'Cdc14_cyt': 'intracellular',
                                     'Whi5_cyt': 'intracellular',
                                     'Clb5_Sic1_Hp_cyt': 'intracellular',
                                     'Cln2_cyt': 'intracellular',
                                     'Far1_p_cyt': 'intracellular',
                                     'Mih1_cyt': 'intracellular',
                                     'Cln2_Far1_p_cyt': 'intracellular',
                                     'Clb3_Sic1_cyt': 'intracellular',
                                     'Clb5_Sic1_cyt': 'intracellular',
                                     'Clb5_cyt': 'intracellular',
                                     'SBF_Whi5_nuc': 'intracellular',
                                     'APC_p_cyt': 'intracellular',
                                     'Swi5_p_cyt': 'intracellular',
                                     'SBF_nuc': 'intracellular'}

    ### Compartment Annotations:
    module_dict['com_annotations'] = {'intracellular': 'GO:0044424', 'cytosol': 'GO:0005829', 'nucleus': 'GO:0005634'}

    ### Species Annotations:
    module_dict['sp_annotations'] = {'Swe1_cyt': 'SGD:S000003723p',
                                     'APC_cyt': 'SGD:S000002971p',
                                     'Clb2_cyt': 'SGD:S000006323p',
                                     'Mcm1_nuc': 'SGD:S000004646p',
                                     'Clb2_p_cyt': 'SGD:S000006323p',
                                     'int_vol': 'SBO:0000468',
                                     'nuc_vol': 'SBO:0000468',
                                     'Swi5_nuc': 'SGD:S000002553p',
                                     'Hog1_PP_cyt': 'SGD:S000004103p',
                                     'Swe1_p_cyt': 'SGD:S000003723p',
                                     'Sic1_p_cyt': 'SGD:S000004069p',
                                     'Far1_cyt': 'SGD:S000003693p',
                                     'Cdc14_p_cyt': 'SGD:S000001924p',
                                     'Sic1_cyt': 'SGD:S000004069p',
                                     'Cln3_Far1_p_cyt': 'SGD:S000000038p_SGD:S000003693p',
                                     'Clb2_Sic1_cyt': 'SGD:S000006323p_SGD:S000004069p',
                                     'Sic1_Hp_cyt': 'SGD:S000004069p',
                                     'Clb3_cyt': 'SGD:S000002314p',
                                     'MBF_nuc': 'SGD:S000002214p_SGD:S000004172p',
                                     'Cln3_cyt': 'SGD:S000000038p',
                                     'Fus3_cyt': 'SGD:S000000112p',
                                     'SBF_p_cyt': 'SGD:S000000913p_SGD:S000004172p',
                                     'Whi5_p_cyt': 'SGD:S000005609p',
                                     'Cdc14_cyt': 'SGD:S000001924p',
                                     'Whi5_cyt': 'SGD:S000005609p',
                                     'Clb5_Sic1_Hp_cyt': 'SGD:S000006324p_SGD:S000004069p',
                                     'Cln2_cyt': 'SGD:S000006177p',
                                     'Far1_p_cyt': 'SGD:S000003693p',
                                     'Mih1_cyt': 'SGD:S000004639p',
                                     'Cln2_Far1_p_cyt': 'SGD:S000006177p_SGD:S000003693p',
                                     'Clb3_Sic1_cyt': 'SGD:S000002314p_SGD:S000004069p',
                                     'Clb5_Sic1_cyt': 'SGD:S000006324p_SGD:S000004069p',
                                     'Clb5_cyt': 'SGD:S000006324p',
                                     'SBF_Whi5_nuc': 'SGD:S000000913p_SGD:S000004172p_SGD:S000005609p',
                                     'APC_p_cyt': 'SGD:S000002971p',
                                     'Swi5_p_cyt': 'SGD:S000002553p',
                                     'SBF_nuc': 'SGD:S000000913p_SGD:S000004172p'}

    ### States:
    module_dict['sp_states'] = {'Swe1_cyt': '0',
                                'Clb2_Sic1_cyt': '0',
                                'Clb2_cyt': '0',
                                'int_vol': '0',
                                'nuc_vol': '0',
                                'Hog1_PP_cyt': 'PP',
                                'Swe1_p_cyt': 'P',
                                'Sic1_p_cyt': 'P',
                                'Cln3_cyt': '0',
                                'Clb3_Sic1_cyt': '0',
                                'Cdc14_p_cyt': 'P',
                                'Sic1_cyt': '0',
                                'APC_cyt': '0',
                                'Sic1_Hp_cyt': 'HP',
                                'Swi5_p_cyt': 'P',
                                'Cln3_Far1_p_cyt': 'P',
                                'MBF_nuc': '0',
                                'Swi5_nuc': '0',
                                'Far1_cyt': '0',
                                'Fus3_cyt': '0',
                                'Clb3_cyt': '0',
                                'SBF_p_cyt': 'P',
                                'Whi5_p_cyt': 'P',
                                'Cdc14_cyt': '0',
                                'Whi5_cyt': '0',
                                'Clb5_Sic1_Hp_cyt': 'HP',
                                'Mih1_cyt': '0',
                                'Far1_p_cyt': 'P',
                                'Clb2_p_cyt': 'P',
                                'Cln2_Far1_p_cyt': 'P',
                                'Clb5_Sic1_cyt': '0',
                                'Clb5_cyt': '0',
                                'SBF_Whi5_nuc': '0',
                                'APC_p_cyt': 'P',
                                'Mcm1_nuc': '0',
                                'Cln2_cyt': '0',
                                'SBF_nuc': '0'}

    ### Parameter Units:
    module_dict['units_pars'] = {'kd_Swi5_p': 's**-1',  # included from bookchapter
                                 'kd_Clb2_p': 's**-1',  # included from bookchapter
                                 'K_MBF': 'mM',
                                 'ka_APC_Cdc14': '(mM * s)**-1',
                                 'ka_Cdc14_APC': '(mM * s)**-1',  # Edit: Ist das doppelt drin???
                                 'kcd_Clb2_Sic1': 's**-1',
                                 'kcd_Clb3_Sic1': 's**-1',
                                 'kcd_Clb5_Sic1': 's**-1',
                                 'kcd_Clb5_Sic1_Hp': 's**-1',
                                 'kcd_Cln2_Far1p': 's**-1',
                                 'kcd_Cln3_Far1p': 's**-1',
                                 'kcf_Clb2_Sic1': '(mM * s)**-1',
                                 'kcf_Clb3_Sic1': '(mM * s)**-1',
                                 'kcf_Clb5_Sic1': '(mM * s)**-1',
                                 'kcf_Clb5_Sic1_Hp': '(mM * s)**-1',
                                 'kcf_Cln2_Far1p': '(mM * s)**-1',
                                 'kcf_Cln3_Far1p': '(mM * s)**-1',
                                 'kcf_SBF_Whi5': '(mM * s)**-1',
                                 'kd_APC': 's**-1',
                                 'kd_APC_p': 's**-1',
                                 'kd_Clb2': 's**-1',
                                 'kd_Clb2_APC': '(mM * s)**-1',
                                 'kd_Clb2_Sic1': 's**-1',
                                 'kd_Clb3': 's**-1',
                                 'kd_Clb3_APC': '(mM * s)**-1',
                                 'kd_Clb3_Sic1': 's**-1',
                                 'kd_Clb5': 's**-1',
                                 'kd_Clb5_APC': '(mM * s)**-1',
                                 'kd_Clb5_Sic1': 's**-1',
                                 'kd_Cln2': 's**-1',
                                 'kd_Cln2_Far1p': 's**-1',
                                 'kd_Cln3': 's**-1',
                                 'kd_Cln3_Far1p': 's**-1',
                                 'kd_Far1': 's**-1',
                                 'kd_Far1p': 's**-1',
                                 'kd_MBF': 's**-1',
                                 'kd_Mcm1': 's**-1',
                                 'kd_Mih1': 's**-1',
                                 'kd_Sic1': 's**-1',
                                 'kd_Sic1p': 's**-1',
                                 'kd_Swe1': 's**-1',
                                 'kd_Swe1_p': 's**-1',
                                 'kd_Swi5': 's**-1',
                                 'kd_Whi5': 's**-1',
                                 'kd_Whi5p': 's**-1',
                                 'kdd_Far1': '(mM * s)**-1',
                                 'kdd_Far1p': '(mM * s)**-1',
                                 'kdp_Clb2': '(mM * s)**-1',
                                 'kdp_Clb5_Sic1_Hp': 's**-1',
                                 'kdp_Far1p': 's**-1',
                                 'kdp_SBF': '(mM * s)**-1',
                                 'kdp_Sic1_Hp': 's**-1',
                                 'kdp_Swi5_Cdc14': '(mM * s)**-1',
                                 'kdp_Whi5': '(mM * s)**-1',
                                 'ki_Cdc14': 's**-1',
                                 'kI_Clb2_Hog1': '(mM)**-1',
                                 'kI_Clb5_Hog1': '(mM)**-1',
                                 'kI_Cln2_Hog1': '(mM)**-1',
                                 'kI_Swe1_Hog1': '(mM)**-1',
                                 'Kp_APC': 'mM',
                                 'kp_APC': 'mM * (s)**-1',
                                 'kp_basal_Far1': 'mM * (s)**-1',
                                 'kp_Clb2': 'mM * (s)**-1',
                                 'Kp_Clb2': 'mM',
                                 'kp_Clb3': 'mM * (s)**-1',
                                 'Kp_Clb3': 'mM',
                                 'kp_Clb5': 'mM * (s)**-1',
                                 'Kp_Clb5': 'mM',
                                 'Kp_Cln2': 'mM',
                                 'kp_Cln2': 'mM * (s)**-1',
                                 'kp_Cln3': 'mM * (s)**-1',
                                 'kp_Far1': 's**-1',
                                 'kp_MBF': 'mM * (s)**-1',
                                 'kp_Mcm1': 'mM * (s)**-1',
                                 'Kp_Mcm1': 'mM',
                                 'kp_Mih1': 'mM * (s)**-1',
                                 'Kp_Sic1': 'mM',
                                 'kp_Sic1': 'mM * (s)**-1',
                                 'kp_Swe1': 'mM * (s)**-1',
                                 'Kp_Swi5': 'mM',
                                 'kp_Swi5': 'mM * (s)**-1',
                                 'kp_Whi5': 'mM * (s)**-1',
                                 'kpp_APC_Clb2': '(mM * s)**-1',
                                 'kpp_APC_Clb5': '(mM * s)**-1',
                                 'kpp_Cdc14_Clb2': '(mM * s)**-1',
                                 'kpp_Cdc14_MEN': '(mM * s)**-1',
                                 'kpp_Clb2': '(mM * s)**-1',
                                 'Kpp_Clb5_Sic1': 'mM',
                                 'kpp_Clb5_Sic1': 's**-1',
                                 'kpp_Clb5_Sic1_Hog1': '(mM * s)**-1',
                                 'kpp_Cln2_Far1p': '(mM * s)**-1',
                                 'kpp_Cln2_Sic1': 's**-1',
                                 'Kpp_Cln2_Sic1': 'mM',
                                 'kpp_Cln2_Whi5': '(mM * s)**-1',
                                 'Kpp_Cln2_Whi5': 'mM',
                                 'Kpp_Cln3_Whi5': 'mM',
                                 'kpp_Cln3_Whi5': '(mM * s)**-1',
                                 'kpp_Far1': '(mM * s)**-1',
                                 'kpp_SBF_Clb2': '(mM * s)**-1',
                                 'kpp_Sic1_Hog1': '(mM * s)**-1',
                                 'kpp_Swe1_Clb2': '(mM * s)**-1',
                                 'kpp_Swe1_Hls1': 's**-1',
                                 'kpp_Swi5_Clb2': '(mM * s)**-1',
                                 'kpp_Swi5_Clb5': '(mM * s)**-1',
                                 'n_Clb3': 'dimensionless',
                                 'n_Mcm1': 'dimensionless',
                                 'n_SBF': 'dimensionless',
                                 'n1': 'dimensionless',
                                 'V0_Mcm1': 'mM',
                                 'kppa_Cln2_Whi5': 's**-1',
                                 'kppa_Cln3_Whi5': 's**-1',
                                 'v0_Mcm1': 'mM * (s)**-1'}

    ### Reactions:
    reactions = {}
    reactions['v_Clb2_diss_Sic1'] = {'rate': {}, 'products': {}, 'substrates': {},
                                     'modifiers': {}}  # included from bookchapter
    reactions['v_Clb2_p_d'] = {'rate': {}, 'products': {}, 'substrates': {},
                               'modifiers': {}}  # included from bookchapter
    reactions['v_Clb3_diss_Sic1'] = {'rate': {}, 'products': {}, 'substrates': {},
                                     'modifiers': {}}  # included from bookchapter
    reactions['v_Clb5_diss_Sic1'] = {'rate': {}, 'products': {}, 'substrates': {},
                                     'modifiers': {}}  # included from bookchapter
    reactions['v_Clb5_diss_Sic1_Hp'] = {'rate': {}, 'products': {}, 'substrates': {},
                                        'modifiers': {}}  # included from bookchapter
    reactions['v_Swi5_p_d'] = {'rate': {}, 'products': {}, 'substrates': {},
                               'modifiers': {}}  # included from bookchapter

    reactions['v_MBF_akt'] = {'rate': {}, 'products': {}, 'substrates': {}, 'modifiers': {}}
    reactions['v_Clb2_dp'] = {'rate': {}, 'products': {}, 'substrates': {}, 'modifiers': {}}
    reactions['v_Far1p_d'] = {'rate': {}, 'products': {}, 'substrates': {}, 'modifiers': {}}
    reactions['v_Far1_dd'] = {'rate': {}, 'products': {}, 'substrates': {}, 'modifiers': {}}
    reactions['v_Mcm1_d'] = {'rate': {}, 'products': {}, 'substrates': {}, 'modifiers': {}}
    reactions['v_Clb2_ass_Sic1'] = {'rate': {}, 'products': {}, 'substrates': {}, 'modifiers': {}}
    reactions['v_Cln2_Far1p_d'] = {'rate': {}, 'products': {}, 'substrates': {}, 'modifiers': {}}
    reactions['v_SBF_akt'] = {'rate': {}, 'products': {}, 'substrates': {}, 'modifiers': {}}
    reactions['v_SBF_ass_Whi5'] = {'rate': {}, 'products': {}, 'substrates': {}, 'modifiers': {}}
    reactions['v_Far1_d'] = {'rate': {}, 'products': {}, 'substrates': {}, 'modifiers': {}}
    reactions['v_SBF_inakt_Clb2'] = {'rate': {}, 'products': {}, 'substrates': {}, 'modifiers': {}}
    reactions['v_Clb5_ass_Sic1_Hp'] = {'rate': {}, 'products': {}, 'substrates': {}, 'modifiers': {}}
    reactions['v_Cdc14_akt_MEN_fb'] = {'rate': {}, 'products': {}, 'substrates': {}, 'modifiers': {}}
    reactions['v_Sic1_d'] = {'rate': {}, 'products': {}, 'substrates': {}, 'modifiers': {}}
    reactions['v_Cln2_ass_Far1p'] = {'rate': {}, 'products': {}, 'substrates': {}, 'modifiers': {}}
    reactions['v_Sic1_p'] = {'rate': {}, 'products': {}, 'substrates': {}, 'modifiers': {}}
    reactions['v_Cln3_diss_Far1p'] = {'rate': {}, 'products': {}, 'substrates': {}, 'modifiers': {}}
    reactions['v_Sic1_p_d'] = {'rate': {}, 'products': {}, 'substrates': {}, 'modifiers': {}}
    reactions['v_SBF_dp'] = {'rate': {}, 'products': {}, 'substrates': {}, 'modifiers': {}}
    reactions['v_Cln2_p'] = {'rate': {}, 'products': {}, 'substrates': {}, 'modifiers': {}}
    reactions['v_Swe1_pp'] = {'rate': {}, 'products': {}, 'substrates': {}, 'modifiers': {}}
    reactions['v_Whi5_pp'] = {'rate': {}, 'products': {}, 'substrates': {}, 'modifiers': {}}
    reactions['v_Clb5_p'] = {'rate': {}, 'products': {}, 'substrates': {}, 'modifiers': {}}
    reactions['v_Far1_p'] = {'rate': {}, 'products': {}, 'substrates': {}, 'modifiers': {}}
    reactions['v_APC_akt_Cdc14'] = {'rate': {}, 'products': {}, 'substrates': {}, 'modifiers': {}}
    reactions['v_Far1p_dp'] = {'rate': {}, 'products': {}, 'substrates': {}, 'modifiers': {}}
    reactions['v_Swi5_d'] = {'rate': {}, 'products': {}, 'substrates': {}, 'modifiers': {}}
    reactions['v_Clb2_d_APC'] = {'rate': {}, 'products': {}, 'substrates': {}, 'modifiers': {}}
    reactions['v_Whi5_p_d'] = {'rate': {}, 'products': {}, 'substrates': {}, 'modifiers': {}}
    reactions['v_Mih1_d'] = {'rate': {}, 'products': {}, 'substrates': {}, 'modifiers': {}}
    reactions['v_Swe1_Hog1'] = {'rate': {}, 'products': {}, 'substrates': {}, 'modifiers': {}}
    reactions['v_Cdc14_akt_APC'] = {'rate': {}, 'products': {}, 'substrates': {}, 'modifiers': {}}
    reactions['v_Clb2_Sic1_d'] = {'rate': {}, 'products': {}, 'substrates': {}, 'modifiers': {}}
    reactions['v_Sic1_Hp_dp'] = {'rate': {}, 'products': {}, 'substrates': {}, 'modifiers': {}}
    reactions['v_Cln2_rel'] = {'rate': {}, 'products': {}, 'substrates': {}, 'modifiers': {}}
    reactions['v_Clb3_d_APC'] = {'rate': {}, 'products': {}, 'substrates': {}, 'modifiers': {}}
    reactions['v_Clb5_ass_Sic1'] = {'rate': {}, 'products': {}, 'substrates': {}, 'modifiers': {}}
    reactions['v_Far1_p_dd'] = {'rate': {}, 'products': {}, 'substrates': {}, 'modifiers': {}}
    reactions['v_Swe1_d'] = {'rate': {}, 'products': {}, 'substrates': {}, 'modifiers': {}}
    reactions['v_Clb5_d_APC'] = {'rate': {}, 'products': {}, 'substrates': {}, 'modifiers': {}}
    reactions['v_Clb5_Sic1_d'] = {'rate': {}, 'products': {}, 'substrates': {}, 'modifiers': {}}
    reactions['v_Cln2_diss_Far1p'] = {'rate': {}, 'products': {}, 'substrates': {}, 'modifiers': {}}
    reactions['v_Clb3_Sic1_d'] = {'rate': {}, 'products': {}, 'substrates': {}, 'modifiers': {}}
    reactions['v_Swi5_dp'] = {'rate': {}, 'products': {}, 'substrates': {}, 'modifiers': {}}
    reactions['v_Clb5_d'] = {'rate': {}, 'products': {}, 'substrates': {}, 'modifiers': {}}
    reactions['v_APC_d'] = {'rate': {}, 'products': {}, 'substrates': {}, 'modifiers': {}}
    reactions['v_Sic1_pp_Hog1'] = {'rate': {}, 'products': {}, 'substrates': {}, 'modifiers': {}}
    reactions['v_Sic1_pp'] = {'rate': {}, 'products': {}, 'substrates': {}, 'modifiers': {}}
    reactions['v_Cdc14_akt_Clb2'] = {'rate': {}, 'products': {}, 'substrates': {}, 'modifiers': {}}
    reactions['v_Mih1_p'] = {'rate': {}, 'products': {}, 'substrates': {}, 'modifiers': {}}
    reactions['v_Clb3_d'] = {'rate': {}, 'products': {}, 'substrates': {}, 'modifiers': {}}
    reactions['v_Cln3_d'] = {'rate': {}, 'products': {}, 'substrates': {}, 'modifiers': {}}
    reactions['v_Cln3_ass_Far1p'] = {'rate': {}, 'products': {}, 'substrates': {}, 'modifiers': {}}
    reactions['v_Clb5_rel'] = {'rate': {}, 'products': {}, 'substrates': {}, 'modifiers': {}}
    reactions['v_Swi5_p'] = {'rate': {}, 'products': {}, 'substrates': {}, 'modifiers': {}}
    reactions['v_Clb5_Sic1_Hp_dp'] = {'rate': {}, 'products': {}, 'substrates': {}, 'modifiers': {}}
    reactions['v_Cln3_Far1p_d'] = {'rate': {}, 'products': {}, 'substrates': {}, 'modifiers': {}}
    reactions['v_Cln2_d'] = {'rate': {}, 'products': {}, 'substrates': {}, 'modifiers': {}}
    reactions['v_Cln3_rel'] = {'rate': {}, 'products': {}, 'substrates': {}, 'modifiers': {}}
    reactions['v_Mcm1_p_basal'] = {'rate': {}, 'products': {}, 'substrates': {}, 'modifiers': {}}
    reactions['v_Far1_pp'] = {'rate': {}, 'products': {}, 'substrates': {}, 'modifiers': {}}
    reactions['v_Swi5_pp_Clb5'] = {'rate': {}, 'products': {}, 'substrates': {}, 'modifiers': {}}
    reactions['v_Swi5_pp_Clb2'] = {'rate': {}, 'products': {}, 'substrates': {}, 'modifiers': {}}
    reactions['v_Swe1_p_d'] = {'rate': {}, 'products': {}, 'substrates': {}, 'modifiers': {}}
    reactions['v_Clb2_pp'] = {'rate': {}, 'products': {}, 'substrates': {}, 'modifiers': {}}
    reactions['v_Clb3_p_Clb5'] = {'rate': {}, 'products': {}, 'substrates': {}, 'modifiers': {}}
    reactions['v_APC_inakt_Clb2'] = {'rate': {}, 'products': {}, 'substrates': {}, 'modifiers': {}}
    reactions['v_APC_inakt_Clb5'] = {'rate': {}, 'products': {}, 'substrates': {}, 'modifiers': {}}
    reactions['v_Clb2_p'] = {'rate': {}, 'products': {}, 'substrates': {}, 'modifiers': {}}
    reactions['v_MBF_d'] = {'rate': {}, 'products': {}, 'substrates': {}, 'modifiers': {}}
    reactions['v_Whi5_d'] = {'rate': {}, 'products': {}, 'substrates': {}, 'modifiers': {}}
    reactions['v_Whi5_SBF_d'] = {'rate': {}, 'products': {}, 'substrates': {}, 'modifiers': {}}
    reactions['v_Clb5_Sic1_pp_Hog1'] = {'rate': {}, 'products': {}, 'substrates': {}, 'modifiers': {}}
    reactions['v_Clb2_d'] = {'rate': {}, 'products': {}, 'substrates': {}, 'modifiers': {}}
    reactions['v_Whi5p_dp'] = {'rate': {}, 'products': {}, 'substrates': {}, 'modifiers': {}}
    reactions['v_Whi5_p'] = {'rate': {}, 'products': {}, 'substrates': {}, 'modifiers': {}}
    reactions['v_Clb3_ass_Sic1'] = {'rate': {}, 'products': {}, 'substrates': {}, 'modifiers': {}}
    reactions['v_Cdc14_inakt'] = {'rate': {}, 'products': {}, 'substrates': {}, 'modifiers': {}}
    reactions['v_Swe1_p'] = {'rate': {}, 'products': {}, 'substrates': {}, 'modifiers': {}}
    reactions['v_APC_akt_p_Mcm1'] = {'rate': {}, 'products': {}, 'substrates': {}, 'modifiers': {}}
    reactions['v_Mcm1_p_Clb2_fb'] = {'rate': {}, 'products': {}, 'substrates': {}, 'modifiers': {}}
    reactions['v_APC_p_d'] = {'rate': {}, 'products': {}, 'substrates': {}, 'modifiers': {}}
    reactions['v_Cln3_p'] = {'rate': {}, 'products': {}, 'substrates': {}, 'modifiers': {}}

    ### Rates:
    # v_Clb2_diss_Sic1        # included from bookchapter
    reactions['v_Clb2_diss_Sic1']['rate'] = '( int_vol * ( kcd_Clb2_Sic1  *  Clb2_Sic1_cyt )  )'
    # v_Clb2_p_d        # included from bookchapter
    reactions['v_Clb2_p_d']['rate'] = '( int_vol * ( kd_Clb2_p  *  Clb2_p_cyt )  )'
    # v_Clb3_diss_Sic1        # included from bookchapter
    reactions['v_Clb3_diss_Sic1']['rate'] = '( int_vol * ( kcd_Clb3_Sic1  *  Clb3_Sic1_cyt )  )'
    # v_Clb5_diss_Sic1        # included from bookchapter
    reactions['v_Clb5_diss_Sic1']['rate'] = '( int_vol * ( kcd_Clb5_Sic1  *  Clb5_Sic1_cyt )  )'
    # v_Clb5_diss_Sic1_Hp        # included from bookchapter
    reactions['v_Clb5_diss_Sic1_Hp']['rate'] = '( int_vol * ( kcd_Clb5_Sic1_Hp  *  Clb5_Sic1_Hp_cyt )  )'
    # v_Swi5_p_d        # included from bookchapter
    reactions['v_Swi5_p_d']['rate'] = '( int_vol * ( kd_Swi5_p  *  Swi5_p_cyt )  )'
    # v_MBF_akt
    reactions['v_MBF_akt'][
        'rate'] = '( int_vol *    ( ( kp_MBF  *  ( (Cln2_cyt)  **  n1 ) )  /  ( ( K_MBF  **  n1 )  + ( (Cln2_cyt)  **  n1 ) ) )   )'
    # v_Clb2_dp
    reactions['v_Clb2_dp']['rate'] = '( int_vol *   ( ( kdp_Clb2  *  Clb2_p_cyt )  *  Mih1_cyt )  )'
    # v_Far1p_d
    reactions['v_Far1p_d']['rate'] = '( int_vol *   ( kd_Far1p  *  Far1_p_cyt )  )'
    # v_Far1_dd
    reactions['v_Far1_dd']['rate'] = '( int_vol *   ( ( kdd_Far1  *  Far1_cyt )  *  Cln2_cyt )  )'
    # v_Mcm1_d
    reactions['v_Mcm1_d']['rate'] = '( int_vol *   ( kd_Mcm1  *  Mcm1_nuc )  )'
    # v_Clb2_ass_Sic1
    reactions['v_Clb2_ass_Sic1']['rate'] = '( int_vol *   ( (   kcf_Clb2_Sic1 )  *  Clb2_cyt )  *  Sic1_cyt )'
    # v_Cln2_Far1p_d
    reactions['v_Cln2_Far1p_d']['rate'] = '( int_vol *   ( kd_Cln2_Far1p  *  Cln2_Far1_p_cyt )  )'
    # v_SBF_akt                         ACHTUNG: Rate von 50.*(...) ist gewollt! Kompensiert doppelte Verwendung von kpp_Cln3_Whi5 und kpp_Cln2_Whi5 in Reaktion v_Whi5_pp!
    reactions['v_SBF_akt'][
        'rate'] = '( int_vol *   ( SBF_Whi5_nuc  *  (  ( ( kppa_Cln3_Whi5  *  Cln3_cyt )  /  ( Kpp_Cln3_Whi5  + Cln3_cyt ) )   +  ( ( kppa_Cln2_Whi5  *  ( (Cln2_cyt)  **  n_SBF ) )  /  ( ( Kpp_Cln2_Whi5  **  n_SBF )  + ( (Cln2_cyt)  **  n_SBF ) ) )  ) )  )'
    # v_SBF_ass_Whi5
    reactions['v_SBF_ass_Whi5']['rate'] = '( int_vol *   ( ( kcf_SBF_Whi5  *  SBF_nuc )  *  Whi5_cyt )  )'
    # v_Far1_d
    reactions['v_Far1_d']['rate'] = '( int_vol *   ( kd_Far1  *  Far1_cyt )  )'
    # v_SBF_inakt_Clb2
    reactions['v_SBF_inakt_Clb2']['rate'] = '( int_vol *   ( ( kpp_SBF_Clb2  *  SBF_nuc )  *  Clb2_cyt )  )'
    # v_Clb5_ass_Sic1_Hp
    reactions['v_Clb5_ass_Sic1_Hp']['rate'] = '( int_vol *   ( (   kcf_Clb5_Sic1_Hp )  *  Clb5_cyt )  *  Sic1_Hp_cyt )'
    # v_Cdc14_akt_MEN_fb
    reactions['v_Cdc14_akt_MEN_fb']['rate'] = '( int_vol *   ( ( kpp_Cdc14_MEN  *  Cdc14_cyt )  *  Cdc14_p_cyt )  )'
    # v_Sic1_d
    reactions['v_Sic1_d']['rate'] = '( int_vol *   ( kd_Sic1  *  Sic1_cyt )  )'
    # v_Cln2_ass_Far1p
    reactions['v_Cln2_ass_Far1p']['rate'] = '( int_vol *   ( ( kcf_Cln2_Far1p  *  Cln2_cyt )  *  Far1_p_cyt )  )'
    # v_Sic1_p
    reactions['v_Sic1_p']['rate'] = '( int_vol *    ( ( kp_Sic1  *  Swi5_nuc )  /  ( Kp_Sic1  + Swi5_nuc ) )   )'
    # v_Cln3_diss_Far1p
    reactions['v_Cln3_diss_Far1p']['rate'] = '( int_vol *   ( kcd_Cln3_Far1p  *  Cln3_Far1_p_cyt )  )'
    # v_Sic1_p_d
    reactions['v_Sic1_p_d']['rate'] = '( int_vol *   ( kd_Sic1p  *  Sic1_p_cyt )  )'
    # v_SBF_dp
    reactions['v_SBF_dp']['rate'] = '( int_vol *   ( ( kdp_SBF  *  SBF_p_cyt )  *  Cdc14_p_cyt )  )'
    # v_Cln2_p
    reactions['v_Cln2_p'][
        'rate'] = '( int_vol *    (  ( ( kp_Cln2  *  SBF_nuc )  /  ( Kp_Cln2  + SBF_nuc ) )   /  ( 1.0  + ( kI_Cln2_Hog1  *  Hog1_PP_cyt ) ) )   )'
    # v_Swe1_pp
    reactions['v_Swe1_pp']['rate'] = '( int_vol *   ( ( kpp_Swe1_Clb2  *  Swe1_cyt )  *  Clb2_cyt )  )'
    # v_Whi5_pp
    reactions['v_Whi5_pp'][
        'rate'] = '( int_vol *   ( Whi5_cyt  *  ( ( kpp_Cln2_Whi5  *  Cln2_cyt )  + ( kpp_Cln3_Whi5  *  Cln3_cyt ) ) )  )'
    # v_Clb5_p
    reactions['v_Clb5_p'][
        'rate'] = '( int_vol *    (  ( ( kp_Clb5  *  MBF_nuc )  /  ( Kp_Clb5  + MBF_nuc ) )   /  ( 1.0  + ( kI_Clb5_Hog1  *  Hog1_PP_cyt ) ) )   )'
    # v_Far1_p
    reactions['v_Far1_p']['rate'] = '( int_vol *   ( ( kp_Far1  *  Fus3_cyt )  + kp_basal_Far1 )  )'
    # v_APC_akt_Cdc14
    reactions['v_APC_akt_Cdc14']['rate'] = '( int_vol *   ( ( ka_APC_Cdc14  *  APC_p_cyt )  *  Cdc14_p_cyt )  )'
    # v_Far1p_dp
    reactions['v_Far1p_dp']['rate'] = '( int_vol *   ( kdp_Far1p  *  Far1_p_cyt )  )'
    # v_Swi5_d
    reactions['v_Swi5_d']['rate'] = '( int_vol *   ( kd_Swi5  *  Swi5_nuc )  )'
    # v_Clb2_d_APC
    reactions['v_Clb2_d_APC']['rate'] = '( int_vol *   ( ( kd_Clb2_APC  *  Clb2_cyt )  *  APC_cyt )  )'
    # v_Whi5_p_d
    reactions['v_Whi5_p_d']['rate'] = '( int_vol *   ( kd_Whi5p  *  Whi5_p_cyt )  )'
    # v_Mih1_d
    reactions['v_Mih1_d']['rate'] = '( int_vol *   ( kd_Mih1  *  Mih1_cyt )  )'
    # v_Swe1_Hog1
    reactions['v_Swe1_Hog1'][
        'rate'] = '( int_vol *    ( ( kpp_Swe1_Hls1  *  Swe1_cyt )  /  ( 1.0  + ( kI_Swe1_Hog1  *  Hog1_PP_cyt ) ) )   )'
    # v_Cdc14_akt_APC
    reactions['v_Cdc14_akt_APC']['rate'] = '( int_vol *   ( ( ka_Cdc14_APC  *  Cdc14_cyt )  *  APC_cyt )  )'
    # v_Clb2_Sic1_d
    reactions['v_Clb2_Sic1_d']['rate'] = '( int_vol *   ( kd_Clb2_Sic1  *  Clb2_Sic1_cyt )  )'
    # v_Sic1_Hp_dp
    reactions['v_Sic1_Hp_dp']['rate'] = '( int_vol *   ( kdp_Sic1_Hp  *  Sic1_Hp_cyt )  )'
    # v_Cln2_rel
    reactions['v_Cln2_rel']['rate'] = '( int_vol *   ( ( kpp_Cln2_Far1p  *  Cln2_Far1_p_cyt )  *  Cln2_cyt )  )'
    # v_Clb3_d_APC
    reactions['v_Clb3_d_APC']['rate'] = '( int_vol *   ( ( kd_Clb3_APC  *  Clb3_cyt )  *  APC_cyt )  )'
    # v_Clb5_ass_Sic1
    reactions['v_Clb5_ass_Sic1']['rate'] = '( int_vol *   ( (   kcf_Clb5_Sic1 )  *  Clb5_cyt )  *  Sic1_cyt )'
    # v_Far1_p_dd
    reactions['v_Far1_p_dd']['rate'] = '( int_vol *   ( ( kdd_Far1p  *  Far1_p_cyt )  *  Cln2_cyt )  )'
    # v_Swe1_d
    reactions['v_Swe1_d']['rate'] = '( int_vol *   ( kd_Swe1  *  Swe1_cyt )  )'
    # v_Clb5_d_APC
    reactions['v_Clb5_d_APC']['rate'] = '( int_vol *   ( ( kd_Clb5_APC  *  Clb5_cyt )  *  APC_cyt )  )'
    # v_Clb5_Sic1_d
    reactions['v_Clb5_Sic1_d']['rate'] = '( int_vol *   ( kd_Clb5_Sic1  *  Clb5_Sic1_cyt )  )'
    # v_Cln2_diss_Far1p
    reactions['v_Cln2_diss_Far1p']['rate'] = '( int_vol *   ( kcd_Cln2_Far1p  *  Cln2_Far1_p_cyt )  )'
    # v_Clb3_Sic1_d
    reactions['v_Clb3_Sic1_d']['rate'] = '( int_vol *   ( kd_Clb3_Sic1  *  Clb3_Sic1_cyt )  )'
    # v_Swi5_dp
    reactions['v_Swi5_dp']['rate'] = '( int_vol *   ( ( kdp_Swi5_Cdc14  *  Swi5_p_cyt )  *  Cdc14_p_cyt )  )'
    # v_Clb5_d
    reactions['v_Clb5_d']['rate'] = '( int_vol *   ( kd_Clb5  *  Clb5_cyt )  )'
    # v_APC_d
    reactions['v_APC_d']['rate'] = '( int_vol *   ( kd_APC  *  APC_cyt )  )'
    # v_Sic1_pp_Hog1
    reactions['v_Sic1_pp_Hog1']['rate'] = '( int_vol *   ( ( kpp_Sic1_Hog1  *  Hog1_PP_cyt )  *  Sic1_cyt )  )'
    # v_Sic1_pp
    reactions['v_Sic1_pp'][
        'rate'] = '( int_vol *   ( Sic1_cyt  *  (  ( ( kpp_Cln2_Sic1  *  ( (Cln2_cyt)  **  n1 ) )  /  ( ( Kpp_Cln2_Sic1  **  n1 )  + ( (Cln2_cyt)  **  n1 ) ) )   +  ( ( kpp_Clb5_Sic1  *  ( (Clb5_cyt)  **  n1 ) )  /  ( ( Kpp_Clb5_Sic1  **  n1 )  + ( (Clb5_cyt)  **  n1 ) ) )  ) )  )'
    # v_Cdc14_akt_Clb2
    reactions['v_Cdc14_akt_Clb2']['rate'] = '( int_vol *   ( ( kpp_Cdc14_Clb2  *  Cdc14_cyt )  *  Clb2_cyt )  )'
    # v_Mih1_p
    reactions['v_Mih1_p']['rate'] = '( int_vol *   kp_Mih1  )'
    # v_Clb3_d
    reactions['v_Clb3_d']['rate'] = '( int_vol *   ( kd_Clb3  *  Clb3_cyt )  )'
    # v_Cln3_d
    reactions['v_Cln3_d']['rate'] = '( int_vol *   ( kd_Cln3  *  Cln3_cyt )  )'
    # v_Cln3_ass_Far1p
    reactions['v_Cln3_ass_Far1p']['rate'] = '( int_vol *   ( ( kcf_Cln3_Far1p  *  Cln3_cyt )  *  Far1_p_cyt )  )'
    # v_Clb5_rel
    reactions['v_Clb5_rel'][
        'rate'] = '( int_vol *   ( Clb5_Sic1_cyt  *  (  ( ( kpp_Cln2_Sic1  *  ( (Cln2_cyt)  **  n1 ) )  /  ( ( Kpp_Cln2_Sic1  **  n1 )  + ( (Cln2_cyt)  **  n1 ) ) )   +  ( ( kpp_Clb5_Sic1  *  ( (Clb5_cyt)  **  n1 ) )  /  ( ( Kpp_Clb5_Sic1  **  n1 )  + ( (Clb5_cyt)  **  n1 ) ) )  ) )  )'
    # v_Swi5_p
    reactions['v_Swi5_p']['rate'] = '( int_vol *    ( ( kp_Swi5  *  Mcm1_nuc )  /  ( Kp_Swi5  + Mcm1_nuc ) )   )'
    # v_Clb5_Sic1_Hp_dp
    reactions['v_Clb5_Sic1_Hp_dp']['rate'] = '( int_vol *   ( kdp_Clb5_Sic1_Hp  *  Clb5_Sic1_Hp_cyt )  )'
    # v_Cln3_Far1p_d
    reactions['v_Cln3_Far1p_d']['rate'] = '( int_vol *   ( kd_Cln3_Far1p  *  Cln3_Far1_p_cyt )  )'
    # v_Cln2_d
    reactions['v_Cln2_d']['rate'] = '( int_vol *   ( kd_Cln2  *  Cln2_cyt )  )'
    # v_Cln3_rel
    reactions['v_Cln3_rel']['rate'] = '( int_vol *   ( ( kpp_Cln2_Far1p  *  Cln3_Far1_p_cyt )  *  Cln2_cyt )  )'
    # v_Mcm1_p_basal
    reactions['v_Mcm1_p_basal'][
        'rate'] = '( int_vol *    ( ( v0_Mcm1  *  ( (Clb3_cyt)  **  n_Mcm1 ) )  /  ( ( V0_Mcm1  **  n_Mcm1 )  + ( (Clb3_cyt)  **  n_Mcm1 ) ) )   )'
    # v_Far1_pp
    reactions['v_Far1_pp']['rate'] = '( int_vol *   ( ( kpp_Far1  *  Far1_cyt )  *  Fus3_cyt )  )'
    # v_Swi5_pp_Clb5
    reactions['v_Swi5_pp_Clb5']['rate'] = '( int_vol *   ( ( kpp_Swi5_Clb5  *  Swi5_nuc )  *  Clb5_cyt )  )'
    # v_Swi5_pp_Clb2
    reactions['v_Swi5_pp_Clb2']['rate'] = '( int_vol *   ( ( kpp_Swi5_Clb2  *  Swi5_nuc )  *  Clb2_cyt )  )'
    # v_Swe1_p_d
    reactions['v_Swe1_p_d']['rate'] = '( int_vol *   ( kd_Swe1_p  *  Swe1_p_cyt )  )'
    # v_Clb2_pp
    reactions['v_Clb2_pp']['rate'] = '( int_vol *   ( ( kpp_Clb2  *  Clb2_cyt )  *  Swe1_cyt )  )'
    # v_Clb3_p_Clb5
    reactions['v_Clb3_p_Clb5'][
        'rate'] = '( int_vol *    ( ( kp_Clb3  *  ( (Clb5_cyt)  **  n_Clb3 ) )  /  ( ( Kp_Clb3  **  n_Clb3 )  + ( (Clb5_cyt)  **  n_Clb3 ) ) )   )'
    # v_APC_inakt_Clb2
    reactions['v_APC_inakt_Clb2']['rate'] = '( int_vol *   ( ( kpp_APC_Clb2  *  APC_cyt )  *  Clb2_cyt )  )'
    # v_APC_inakt_Clb5
    reactions['v_APC_inakt_Clb5']['rate'] = '( int_vol *   ( ( kpp_APC_Clb5  *  APC_cyt )  *  Clb5_cyt )  )'
    # v_Clb2_p
    reactions['v_Clb2_p'][
        'rate'] = '( int_vol *    (  ( ( kp_Clb2  *  Mcm1_nuc )  /  ( Kp_Clb2  + Mcm1_nuc ) )   /  ( 1.0  + ( kI_Clb2_Hog1  *  Hog1_PP_cyt ) ) )   )'
    # v_MBF_d
    reactions['v_MBF_d']['rate'] = '( int_vol *   ( kd_MBF  *  MBF_nuc )  )'
    # v_Whi5_d
    reactions['v_Whi5_d']['rate'] = '( int_vol *   ( kd_Whi5  *  Whi5_cyt )  )'
    # v_Whi5_d
    reactions['v_Whi5_SBF_d']['rate'] = '( int_vol *   ( kd_Whi5_SBF  *  SBF_Whi5_nuc )  )'
    # v_Clb5_Sic1_pp_Hog1
    reactions['v_Clb5_Sic1_pp_Hog1'][
        'rate'] = '( int_vol *   ( ( kpp_Clb5_Sic1_Hog1  *  Hog1_PP_cyt )  *  Clb5_Sic1_cyt)  )'
    # v_Clb2_d
    reactions['v_Clb2_d']['rate'] = '( int_vol *   ( kd_Clb2  *  Clb2_cyt )  )'
    # v_Whi5p_dp
    reactions['v_Whi5p_dp']['rate'] = '( int_vol *   ( ( Whi5_p_cyt  *  kdp_Whi5 )  *  Cdc14_p_cyt )  )'
    # v_Whi5_p
    reactions['v_Whi5_p']['rate'] = '( int_vol *   kp_Whi5  )'
    # v_Clb3_ass_Sic1
    reactions['v_Clb3_ass_Sic1']['rate'] = '( int_vol *   ( (   kcf_Clb3_Sic1 )  *  Clb3_cyt )  *  Sic1_cyt )'
    # v_Cdc14_inakt
    reactions['v_Cdc14_inakt']['rate'] = '( int_vol *   ( ki_Cdc14  *  Cdc14_p_cyt )  )'
    # v_Swe1_p
    reactions['v_Swe1_p']['rate'] = '( int_vol *   kp_Swe1  )'
    # v_APC_akt_p_Mcm1
    reactions['v_APC_akt_p_Mcm1']['rate'] = '( int_vol *    ( ( kp_APC  *  Mcm1_nuc )  /  ( Kp_APC  + Mcm1_nuc ) )   )'
    # v_Mcm1_p_Clb2_fb
    reactions['v_Mcm1_p_Clb2_fb'][
        'rate'] = '( int_vol *    ( ( kp_Mcm1  *  ( (Clb2_cyt)  **  n_Mcm1 ) )  /  ( ( Kp_Mcm1  **  n_Mcm1 )  + ( (Clb2_cyt)  **  n_Mcm1 ) ) )   )'
    # v_APC_p_d
    reactions['v_APC_p_d']['rate'] = '( int_vol *   ( kd_APC_p  *  APC_p_cyt )  )'
    # v_Cln3_p
    reactions['v_Cln3_p']['rate'] = '( int_vol *   kp_Cln3  )'

    ### Substrates:
    # v_Clb2_diss_Sic1        # included from bookchapter
    reactions['v_Clb2_diss_Sic1']['substrates'] = {'Clb2_Sic1_cyt': 1.0}
    # v_Clb2_p_d              # included from bookchapter
    reactions['v_Clb2_p_d']['substrates'] = {'Clb2_p_cyt': 1.0}
    # v_Clb3_diss_Sic1        # included from bookchapter
    reactions['v_Clb3_diss_Sic1']['substrates'] = {'Clb3_Sic1_cyt': 1.0}
    # v_Clb5_diss_Sic1        # included from bookchapter
    reactions['v_Clb5_diss_Sic1']['substrates'] = {'Clb5_Sic1_cyt': 1.0}
    # v_Clb5_diss_Sic1_Hp     # included from bookchapter
    reactions['v_Clb5_diss_Sic1_Hp']['substrates'] = {'Clb5_Sic1_Hp_cyt': 1.0}
    # v_Swi5_p_d              # included from bookchapter
    reactions['v_Swi5_p_d']['substrates'] = {'Swi5_p_cyt': 1.0}
    # v_MBF_akt
    reactions['v_MBF_akt']['substrates'] = {}
    # v_Clb2_dp
    reactions['v_Clb2_dp']['substrates'] = {'Clb2_p_cyt': 1.0}
    # v_Far1p_d
    reactions['v_Far1p_d']['substrates'] = {'Far1_p_cyt': 1.0}
    # v_Far1_dd
    reactions['v_Far1_dd']['substrates'] = {'Far1_cyt': 1.0}
    # v_Mcm1_d
    reactions['v_Mcm1_d']['substrates'] = {'Mcm1_nuc': 1.0}
    # v_Clb2_ass_Sic1
    reactions['v_Clb2_ass_Sic1']['substrates'] = {'Clb2_cyt': 1.0, 'Sic1_cyt': 1.0}
    # v_Cln2_Far1p_d
    reactions['v_Cln2_Far1p_d']['substrates'] = {'Cln2_Far1_p_cyt': 1.0}
    # v_SBF_akt
    reactions['v_SBF_akt']['substrates'] = {'SBF_Whi5_nuc': 1.0}
    # v_SBF_ass_Whi5
    reactions['v_SBF_ass_Whi5']['substrates'] = {'SBF_nuc': 1.0, 'Whi5_cyt': 1.0}
    # v_Far1_d
    reactions['v_Far1_d']['substrates'] = {'Far1_cyt': 1.0}
    # v_SBF_inakt_Clb2
    reactions['v_SBF_inakt_Clb2']['substrates'] = {'SBF_nuc': 1.0}
    # v_Clb5_ass_Sic1_Hp
    reactions['v_Clb5_ass_Sic1_Hp']['substrates'] = {'Sic1_Hp_cyt': 1.0, 'Clb5_cyt': 1.0}
    # v_Cdc14_akt_MEN_fb
    reactions['v_Cdc14_akt_MEN_fb']['substrates'] = {'Cdc14_cyt': 1.0}
    # v_Sic1_d
    reactions['v_Sic1_d']['substrates'] = {'Sic1_cyt': 1.0}
    # v_Cln2_ass_Far1p
    reactions['v_Cln2_ass_Far1p']['substrates'] = {'Cln2_cyt': 1.0, 'Far1_p_cyt': 1.0}
    # v_Sic1_p
    reactions['v_Sic1_p']['substrates'] = {}
    # v_Cln3_diss_Far1p
    reactions['v_Cln3_diss_Far1p']['substrates'] = {'Cln3_Far1_p_cyt': 1.0}
    # v_Sic1_p_d
    reactions['v_Sic1_p_d']['substrates'] = {'Sic1_p_cyt': 1.0}
    # v_SBF_dp
    reactions['v_SBF_dp']['substrates'] = {'SBF_p_cyt': 1.0}
    # v_Cln2_p
    reactions['v_Cln2_p']['substrates'] = {}
    # v_Swe1_pp
    reactions['v_Swe1_pp']['substrates'] = {'Swe1_cyt': 1.0}
    # v_Whi5_pp
    reactions['v_Whi5_pp']['substrates'] = {'Whi5_cyt': 1.0}
    # v_Clb5_p
    reactions['v_Clb5_p']['substrates'] = {}
    # v_Far1_p
    reactions['v_Far1_p']['substrates'] = {}
    # v_APC_akt_Cdc14
    reactions['v_APC_akt_Cdc14']['substrates'] = {'APC_p_cyt': 1.0}
    # v_Far1p_dp
    reactions['v_Far1p_dp']['substrates'] = {'Far1_p_cyt': 1.0}
    # v_Swi5_d
    reactions['v_Swi5_d']['substrates'] = {'Swi5_nuc': 1.0}
    # v_Clb2_d_APC
    reactions['v_Clb2_d_APC']['substrates'] = {'Clb2_cyt': 1.0}
    # v_Whi5_p_d
    reactions['v_Whi5_p_d']['substrates'] = {'Whi5_p_cyt': 1.0}
    # v_Mih1_d
    reactions['v_Mih1_d']['substrates'] = {'Mih1_cyt': 1.0}
    # v_Swe1_Hog1
    reactions['v_Swe1_Hog1']['substrates'] = {'Swe1_cyt': 1.0}
    # v_Cdc14_akt_APC
    reactions['v_Cdc14_akt_APC']['substrates'] = {'Cdc14_cyt': 1.0}
    # v_Clb2_Sic1_d
    reactions['v_Clb2_Sic1_d']['substrates'] = {'Clb2_Sic1_cyt': 1.0}
    # v_Sic1_Hp_dp
    reactions['v_Sic1_Hp_dp']['substrates'] = {'Sic1_Hp_cyt': 1.0}
    # v_Cln2_rel
    reactions['v_Cln2_rel']['substrates'] = {'Cln2_Far1_p_cyt': 1.0}
    # v_Clb3_d_APC
    reactions['v_Clb3_d_APC']['substrates'] = {'Clb3_cyt': 1.0}
    # v_Clb5_ass_Sic1
    reactions['v_Clb5_ass_Sic1']['substrates'] = {'Sic1_cyt': 1.0, 'Clb5_cyt': 1.0}
    # v_Far1_p_dd
    reactions['v_Far1_p_dd']['substrates'] = {'Far1_p_cyt': 1.0}
    # v_Swe1_d
    reactions['v_Swe1_d']['substrates'] = {'Swe1_cyt': 1.0}
    # v_Clb5_d_APC
    reactions['v_Clb5_d_APC']['substrates'] = {'Clb5_cyt': 1.0}
    # v_Clb5_Sic1_d
    reactions['v_Clb5_Sic1_d']['substrates'] = {'Clb5_Sic1_cyt': 1.0}
    # v_Cln2_diss_Far1p
    reactions['v_Cln2_diss_Far1p']['substrates'] = {'Cln2_Far1_p_cyt': 1.0}
    # v_Clb3_Sic1_d
    reactions['v_Clb3_Sic1_d']['substrates'] = {'Clb3_Sic1_cyt': 1.0}
    # v_Swi5_dp
    reactions['v_Swi5_dp']['substrates'] = {'Swi5_p_cyt': 1.0}
    # v_Clb5_d
    reactions['v_Clb5_d']['substrates'] = {'Clb5_cyt': 1.0}
    # v_APC_d
    reactions['v_APC_d']['substrates'] = {'APC_cyt': 1.0}
    # v_Sic1_pp_Hog1
    reactions['v_Sic1_pp_Hog1']['substrates'] = {'Sic1_cyt': 1.0}
    # v_Sic1_pp
    reactions['v_Sic1_pp']['substrates'] = {'Sic1_cyt': 1.0}
    # v_Cdc14_akt_Clb2
    reactions['v_Cdc14_akt_Clb2']['substrates'] = {'Cdc14_cyt': 1.0}
    # v_Mih1_p
    reactions['v_Mih1_p']['substrates'] = {}
    # v_Clb3_d
    reactions['v_Clb3_d']['substrates'] = {'Clb3_cyt': 1.0}
    # v_Cln3_d
    reactions['v_Cln3_d']['substrates'] = {'Cln3_cyt': 1.0}
    # v_Cln3_ass_Far1p
    reactions['v_Cln3_ass_Far1p']['substrates'] = {'Cln3_cyt': 1.0, 'Far1_p_cyt': 1.0}
    # v_Clb5_rel
    reactions['v_Clb5_rel']['substrates'] = {'Clb5_Sic1_cyt': 1.0}
    # v_Swi5_p
    reactions['v_Swi5_p']['substrates'] = {}
    # v_Clb5_Sic1_Hp_dp
    reactions['v_Clb5_Sic1_Hp_dp']['substrates'] = {'Clb5_Sic1_Hp_cyt': 1.0}
    # v_Cln3_Far1p_d
    reactions['v_Cln3_Far1p_d']['substrates'] = {'Cln3_Far1_p_cyt': 1.0}
    # v_Cln2_d
    reactions['v_Cln2_d']['substrates'] = {'Cln2_cyt': 1.0}
    # v_Cln3_rel
    reactions['v_Cln3_rel']['substrates'] = {'Cln3_Far1_p_cyt': 1.0}
    # v_Mcm1_p_basal
    reactions['v_Mcm1_p_basal']['substrates'] = {}
    # v_Far1_pp
    reactions['v_Far1_pp']['substrates'] = {'Far1_cyt': 1.0}
    # v_Swi5_pp_Clb5
    reactions['v_Swi5_pp_Clb5']['substrates'] = {'Swi5_nuc': 1.0}
    # v_Swi5_pp_Clb2
    reactions['v_Swi5_pp_Clb2']['substrates'] = {'Swi5_nuc': 1.0}
    # v_Swe1_p_d
    reactions['v_Swe1_p_d']['substrates'] = {'Swe1_p_cyt': 1.0}
    # v_Clb2_pp
    reactions['v_Clb2_pp']['substrates'] = {'Clb2_cyt': 1.0}
    # v_Clb3_p_Clb5
    reactions['v_Clb3_p_Clb5']['substrates'] = {}
    # v_APC_inakt_Clb2
    reactions['v_APC_inakt_Clb2']['substrates'] = {'APC_cyt': 1.0}
    # v_APC_inakt_Clb5
    reactions['v_APC_inakt_Clb5']['substrates'] = {'APC_cyt': 1.0}
    # v_Clb2_p
    reactions['v_Clb2_p']['substrates'] = {}
    # v_MBF_d
    reactions['v_MBF_d']['substrates'] = {'MBF_nuc': 1.0}
    # v_Whi5_d
    reactions['v_Whi5_d']['substrates'] = {'Whi5_cyt': 1.0}
    # v_Whi5_d
    reactions['v_Whi5_SBF_d']['substrates'] = {'SBF_Whi5_nuc': 1.0}
    # v_Clb5_Sic1_pp_Hog1
    reactions['v_Clb5_Sic1_pp_Hog1']['substrates'] = {'Clb5_Sic1_cyt': 1.0}
    # v_Clb2_d
    reactions['v_Clb2_d']['substrates'] = {'Clb2_cyt': 1.0}
    # v_Whi5p_dp
    reactions['v_Whi5p_dp']['substrates'] = {'Whi5_p_cyt': 1.0}
    # v_Whi5_p
    reactions['v_Whi5_p']['substrates'] = {}
    # v_Clb3_ass_Sic1
    reactions['v_Clb3_ass_Sic1']['substrates'] = {'Clb3_cyt': 1.0, 'Sic1_cyt': 1.0}
    # v_Cdc14_inakt
    reactions['v_Cdc14_inakt']['substrates'] = {'Cdc14_p_cyt': 1.0}
    # v_Swe1_p
    reactions['v_Swe1_p']['substrates'] = {}
    # v_APC_akt_p_Mcm1
    reactions['v_APC_akt_p_Mcm1']['substrates'] = {}
    # v_Mcm1_p_Clb2_fb
    reactions['v_Mcm1_p_Clb2_fb']['substrates'] = {}
    # v_APC_p_d
    reactions['v_APC_p_d']['substrates'] = {'APC_p_cyt': 1.0}
    # v_Cln3_p
    reactions['v_Cln3_p']['substrates'] = {}

    ### Products:
    # v_Clb2_diss_Sic1              # included from bookchapter
    reactions['v_Clb2_diss_Sic1']['products'] = {'Clb2_cyt': 1.0, 'Sic1_cyt': 1.0}
    # v_Clb2_p_d                    # included from bookchapter
    reactions['v_Clb2_p_d']['products'] = {}
    # v_Clb3_diss_Sic1              # included from bookchapter
    reactions['v_Clb3_diss_Sic1']['products'] = {'Clb3_cyt': 1.0, 'Sic1_cyt': 1.0}
    # v_Clb5_diss_Sic1              # included from bookchapter
    reactions['v_Clb5_diss_Sic1']['products'] = {'Clb5_cyt': 1.0, 'Sic1_cyt': 1.0}
    # v_Clb5_diss_Sic1_Hp           # included from bookchapter
    reactions['v_Clb5_diss_Sic1_Hp']['products'] = {'Clb5_cyt': 1.0, 'Sic1_Hp_cyt': 1.0}
    # v_Swi5_p_d                    # included from bookchapter
    reactions['v_Swi5_p_d']['products'] = {}
    # v_MBF_akt
    reactions['v_MBF_akt']['products'] = {'MBF_nuc': 1.0}
    # v_Clb2_dp
    reactions['v_Clb2_dp']['products'] = {'Clb2_cyt': 1.0}
    # v_Far1p_d
    reactions['v_Far1p_d']['products'] = {}
    # v_Far1_dd
    reactions['v_Far1_dd']['products'] = {}
    # v_Mcm1_d
    reactions['v_Mcm1_d']['products'] = {}
    # v_Clb2_ass_Sic1
    reactions['v_Clb2_ass_Sic1']['products'] = {'Clb2_Sic1_cyt': 1.0}
    # v_Cln2_Far1p_d
    reactions['v_Cln2_Far1p_d']['products'] = {}
    # v_SBF_akt
    reactions['v_SBF_akt']['products'] = {'Whi5_p_cyt': 1.0, 'SBF_nuc': 1.0}
    # v_SBF_ass_Whi5
    reactions['v_SBF_ass_Whi5']['products'] = {'SBF_Whi5_nuc': 1.0}
    # v_Far1_d
    reactions['v_Far1_d']['products'] = {}
    # v_SBF_inakt_Clb2
    reactions['v_SBF_inakt_Clb2']['products'] = {'SBF_p_cyt': 1.0}
    # v_Clb5_ass_Sic1_Hp
    reactions['v_Clb5_ass_Sic1_Hp']['products'] = {'Clb5_Sic1_Hp_cyt': 1.0}
    # v_Cdc14_akt_MEN_fb
    reactions['v_Cdc14_akt_MEN_fb']['products'] = {'Cdc14_p_cyt': 1.0}
    # v_Sic1_d
    reactions['v_Sic1_d']['products'] = {}
    # v_Cln2_ass_Far1p
    reactions['v_Cln2_ass_Far1p']['products'] = {'Cln2_Far1_p_cyt': 1.0}
    # v_Sic1_p
    reactions['v_Sic1_p']['products'] = {'Sic1_cyt': 1.0}
    # v_Cln3_diss_Far1p
    reactions['v_Cln3_diss_Far1p']['products'] = {'Cln3_cyt': 1.0, 'Far1_p_cyt': 1.0}
    # v_Sic1_p_d
    reactions['v_Sic1_p_d']['products'] = {}
    # v_SBF_dp
    reactions['v_SBF_dp']['products'] = {'SBF_nuc': 1.0}
    # v_Cln2_p
    reactions['v_Cln2_p']['products'] = {'Cln2_cyt': 1.0}
    # v_Swe1_pp
    reactions['v_Swe1_pp']['products'] = {'Swe1_p_cyt': 1.0}
    # v_Whi5_pp
    reactions['v_Whi5_pp']['products'] = {'Whi5_p_cyt': 1.0}
    # v_Clb5_p
    reactions['v_Clb5_p']['products'] = {'Clb5_cyt': 1.0}
    # v_Far1_p
    reactions['v_Far1_p']['products'] = {'Far1_cyt': 1.0}
    # v_APC_akt_Cdc14
    reactions['v_APC_akt_Cdc14']['products'] = {'APC_cyt': 1.0}
    # v_Far1p_dp
    reactions['v_Far1p_dp']['products'] = {'Far1_cyt': 1.0}
    # v_Swi5_d
    reactions['v_Swi5_d']['products'] = {}
    # v_Clb2_d_APC
    reactions['v_Clb2_d_APC']['products'] = {}
    # v_Whi5_p_d
    reactions['v_Whi5_p_d']['products'] = {}
    # v_Mih1_d
    reactions['v_Mih1_d']['products'] = {}
    # v_Swe1_Hog1
    reactions['v_Swe1_Hog1']['products'] = {'Swe1_p_cyt': 1.0}
    # v_Cdc14_akt_APC
    reactions['v_Cdc14_akt_APC']['products'] = {'Cdc14_p_cyt': 1.0}
    # v_Clb2_Sic1_d
    reactions['v_Clb2_Sic1_d']['products'] = {}
    # v_Sic1_Hp_dp
    reactions['v_Sic1_Hp_dp']['products'] = {'Sic1_cyt': 1.0}
    # v_Cln2_rel
    reactions['v_Cln2_rel']['products'] = {'Cln2_cyt': 1.0}
    # v_Clb3_d_APC
    reactions['v_Clb3_d_APC']['products'] = {}
    # v_Clb5_ass_Sic1
    reactions['v_Clb5_ass_Sic1']['products'] = {'Clb5_Sic1_cyt': 1.0}
    # v_Far1_p_dd
    reactions['v_Far1_p_dd']['products'] = {}
    # v_Swe1_d
    reactions['v_Swe1_d']['products'] = {}
    # v_Clb5_d_APC
    reactions['v_Clb5_d_APC']['products'] = {}
    # v_Clb5_Sic1_d
    reactions['v_Clb5_Sic1_d']['products'] = {}
    # v_Cln2_diss_Far1p
    reactions['v_Cln2_diss_Far1p']['products'] = {'Cln2_cyt': 1.0, 'Far1_p_cyt': 1.0}
    # v_Clb3_Sic1_d
    reactions['v_Clb3_Sic1_d']['products'] = {}
    # v_Swi5_dp
    reactions['v_Swi5_dp']['products'] = {'Swi5_nuc': 1.0}
    # v_Clb5_d
    reactions['v_Clb5_d']['products'] = {}
    # v_APC_d
    reactions['v_APC_d']['products'] = {}
    # v_Sic1_pp_Hog1
    reactions['v_Sic1_pp_Hog1']['products'] = {'Sic1_Hp_cyt': 1.0}
    # v_Sic1_pp
    reactions['v_Sic1_pp']['products'] = {'Sic1_p_cyt': 1.0}
    # v_Cdc14_akt_Clb2
    reactions['v_Cdc14_akt_Clb2']['products'] = {'Cdc14_p_cyt': 1.0}
    # v_Mih1_p
    reactions['v_Mih1_p']['products'] = {'Mih1_cyt': 1.0}
    # v_Clb3_d
    reactions['v_Clb3_d']['products'] = {}
    # v_Cln3_d
    reactions['v_Cln3_d']['products'] = {}
    # v_Cln3_ass_Far1p
    reactions['v_Cln3_ass_Far1p']['products'] = {'Cln3_Far1_p_cyt': 1.0}
    # v_Clb5_rel
    reactions['v_Clb5_rel']['products'] = {'Sic1_p_cyt': 1.0, 'Clb5_cyt': 1.0}
    # v_Swi5_p
    reactions['v_Swi5_p']['products'] = {'Swi5_nuc': 1.0}
    # v_Clb5_Sic1_Hp_dp
    reactions['v_Clb5_Sic1_Hp_dp']['products'] = {'Clb5_Sic1_cyt': 1.0}
    # v_Cln3_Far1p_d
    reactions['v_Cln3_Far1p_d']['products'] = {}
    # v_Cln2_d
    reactions['v_Cln2_d']['products'] = {}
    # v_Cln3_rel
    reactions['v_Cln3_rel']['products'] = {'Cln3_cyt': 1.0}
    # v_Mcm1_p_basal
    reactions['v_Mcm1_p_basal']['products'] = {'Mcm1_nuc': 1.0}
    # v_Far1_pp
    reactions['v_Far1_pp']['products'] = {'Far1_p_cyt': 1.0}
    # v_Swi5_pp_Clb5
    reactions['v_Swi5_pp_Clb5']['products'] = {'Swi5_p_cyt': 1.0}
    # v_Swi5_pp_Clb2
    reactions['v_Swi5_pp_Clb2']['products'] = {'Swi5_p_cyt': 1.0}
    # v_Swe1_p_d
    reactions['v_Swe1_p_d']['products'] = {}
    # v_Clb2_pp
    reactions['v_Clb2_pp']['products'] = {'Clb2_p_cyt': 1.0}
    # v_Clb3_p_Clb5
    reactions['v_Clb3_p_Clb5']['products'] = {'Clb3_cyt': 1.0}
    # v_APC_inakt_Clb2
    reactions['v_APC_inakt_Clb2']['products'] = {'APC_p_cyt': 1.0}
    # v_APC_inakt_Clb5
    reactions['v_APC_inakt_Clb5']['products'] = {'APC_p_cyt': 1.0}
    # v_Clb2_p
    reactions['v_Clb2_p']['products'] = {'Clb2_cyt': 1.0}
    # v_MBF_d
    reactions['v_MBF_d']['products'] = {}
    # v_Whi5_d
    reactions['v_Whi5_d']['products'] = {}
    # v_Whi5_d
    reactions['v_Whi5_SBF_d']['products'] = {}
    # v_Clb5_Sic1_pp_Hog1
    reactions['v_Clb5_Sic1_pp_Hog1']['products'] = {'Clb5_Sic1_Hp_cyt': 1.0}
    # v_Clb2_d
    reactions['v_Clb2_d']['products'] = {}
    # v_Whi5p_dp
    reactions['v_Whi5p_dp']['products'] = {'Whi5_cyt': 1.0}
    # v_Whi5_p
    reactions['v_Whi5_p']['products'] = {'Whi5_cyt': 1.0}
    # v_Clb3_ass_Sic1
    reactions['v_Clb3_ass_Sic1']['products'] = {'Clb3_Sic1_cyt': 1.0}
    # v_Cdc14_inakt
    reactions['v_Cdc14_inakt']['products'] = {'Cdc14_cyt': 1.0}
    # v_Swe1_p
    reactions['v_Swe1_p']['products'] = {'Swe1_cyt': 1.0}
    # v_APC_akt_p_Mcm1
    reactions['v_APC_akt_p_Mcm1']['products'] = {'APC_cyt': 1.0}
    # v_Mcm1_p_Clb2_fb
    reactions['v_Mcm1_p_Clb2_fb']['products'] = {'Mcm1_nuc': 1.0}
    # v_APC_p_d
    reactions['v_APC_p_d']['products'] = {}
    # v_Cln3_p
    reactions['v_Cln3_p']['products'] = {'Cln3_cyt': 1.0}

    ### Modifiers:
    # v_Clb2_diss_Sic1              # included from bookchapter
    reactions['v_Clb2_diss_Sic1']['modifiers'] = {}
    # v_Clb2_p_d                    # included from bookchapter
    reactions['v_Clb2_p_d']['modifiers'] = {}
    # v_Clb3_diss_Sic1              # included from bookchapter
    reactions['v_Clb3_diss_Sic1']['modifiers'] = {}
    # v_Clb5_diss_Sic1              # included from bookchapter
    reactions['v_Clb5_diss_Sic1']['modifiers'] = {}
    # v_Clb5_diss_Sic1_Hp           # included from bookchapter
    reactions['v_Clb5_diss_Sic1_Hp']['modifiers'] = {}
    # v_Swi5_p_d                    # included from bookchapter
    reactions['v_Swi5_p_d']['modifiers'] = {}
    # v_MBF_akt
    reactions['v_MBF_akt']['modifiers'] = {'Cln2_cyt': 1.0}
    # v_Clb2_dp
    reactions['v_Clb2_dp']['modifiers'] = {'Mih1_cyt': 1.0}
    # v_Far1p_d
    reactions['v_Far1p_d']['modifiers'] = {}
    # v_Far1_dd
    reactions['v_Far1_dd']['modifiers'] = {'Cln2_cyt': 1.0}
    # v_Mcm1_d
    reactions['v_Mcm1_d']['modifiers'] = {}
    # v_Clb2_ass_Sic1
    reactions['v_Clb2_ass_Sic1']['modifiers'] = {}
    # v_Cln2_Far1p_d
    reactions['v_Cln2_Far1p_d']['modifiers'] = {}
    # v_SBF_akt
    reactions['v_SBF_akt']['modifiers'] = {'Cln2_cyt': 1.0, 'Cln3_cyt': 1.0}
    # v_SBF_ass_Whi5
    reactions['v_SBF_ass_Whi5']['modifiers'] = {}
    # v_Far1_d
    reactions['v_Far1_d']['modifiers'] = {}
    # v_SBF_inakt_Clb2
    reactions['v_SBF_inakt_Clb2']['modifiers'] = {'Clb2_cyt': 1.0}
    # v_Clb5_ass_Sic1_Hp
    reactions['v_Clb5_ass_Sic1_Hp']['modifiers'] = {}
    # v_Cdc14_akt_MEN_fb
    reactions['v_Cdc14_akt_MEN_fb']['modifiers'] = {'Cdc14_p_cyt': 1.0}
    # v_Sic1_d
    reactions['v_Sic1_d']['modifiers'] = {}
    # v_Cln2_ass_Far1p
    reactions['v_Cln2_ass_Far1p']['modifiers'] = {}
    # v_Sic1_p
    reactions['v_Sic1_p']['modifiers'] = {'Swi5_nuc': 1.0}
    # v_Cln3_diss_Far1p
    reactions['v_Cln3_diss_Far1p']['modifiers'] = {}
    # v_Sic1_p_d
    reactions['v_Sic1_p_d']['modifiers'] = {}
    # v_SBF_dp
    reactions['v_SBF_dp']['modifiers'] = {'Cdc14_p_cyt': 1.0}
    # v_Cln2_p
    reactions['v_Cln2_p']['modifiers'] = {'SBF_nuc': 1.0, 'Hog1_PP_cyt': 1.0}
    # v_Swe1_pp
    reactions['v_Swe1_pp']['modifiers'] = {'Clb2_cyt': 1.0}
    # v_Whi5_pp
    reactions['v_Whi5_pp']['modifiers'] = {'Cln2_cyt': 1.0, 'Cln3_cyt': 1.0}
    # v_Clb5_p
    reactions['v_Clb5_p']['modifiers'] = {'Hog1_PP_cyt': 1.0, 'MBF_nuc': 1.0}
    # v_Far1_p
    reactions['v_Far1_p']['modifiers'] = {'Fus3_cyt': 1.0}
    # v_APC_akt_Cdc14
    reactions['v_APC_akt_Cdc14']['modifiers'] = {'Cdc14_p_cyt': 1.0}
    # v_Far1p_dp
    reactions['v_Far1p_dp']['modifiers'] = {}
    # v_Swi5_d
    reactions['v_Swi5_d']['modifiers'] = {}
    # v_Clb2_d_APC
    reactions['v_Clb2_d_APC']['modifiers'] = {'APC_cyt': 1.0}
    # v_Whi5_p_d
    reactions['v_Whi5_p_d']['modifiers'] = {}
    # v_Mih1_d
    reactions['v_Mih1_d']['modifiers'] = {}
    # v_Swe1_Hog1
    reactions['v_Swe1_Hog1']['modifiers'] = {'Hog1_PP_cyt': 1.0}
    # v_Cdc14_akt_APC
    reactions['v_Cdc14_akt_APC']['modifiers'] = {'APC_cyt': 1.0}
    # v_Clb2_Sic1_d
    reactions['v_Clb2_Sic1_d']['modifiers'] = {}
    # v_Sic1_Hp_dp
    reactions['v_Sic1_Hp_dp']['modifiers'] = {}
    # v_Cln2_rel
    reactions['v_Cln2_rel']['modifiers'] = {}
    # v_Clb3_d_APC
    reactions['v_Clb3_d_APC']['modifiers'] = {'APC_cyt': 1.0}
    # v_Clb5_ass_Sic1
    reactions['v_Clb5_ass_Sic1']['modifiers'] = {}
    # v_Far1_p_dd
    reactions['v_Far1_p_dd']['modifiers'] = {'Cln2_cyt': 1.0}
    # v_Swe1_d
    reactions['v_Swe1_d']['modifiers'] = {}
    # v_Clb5_d_APC
    reactions['v_Clb5_d_APC']['modifiers'] = {'APC_cyt': 1.0}
    # v_Clb5_Sic1_d
    reactions['v_Clb5_Sic1_d']['modifiers'] = {}
    # v_Cln2_diss_Far1p
    reactions['v_Cln2_diss_Far1p']['modifiers'] = {}
    # v_Clb3_Sic1_d
    reactions['v_Clb3_Sic1_d']['modifiers'] = {}
    # v_Swi5_dp
    reactions['v_Swi5_dp']['modifiers'] = {'Cdc14_p_cyt': 1.0}
    # v_Clb5_d
    reactions['v_Clb5_d']['modifiers'] = {}
    # v_APC_d
    reactions['v_APC_d']['modifiers'] = {}
    # v_Sic1_pp_Hog1
    reactions['v_Sic1_pp_Hog1']['modifiers'] = {'Hog1_PP_cyt': 1.0}
    # v_Sic1_pp
    reactions['v_Sic1_pp']['modifiers'] = {'Cln2_cyt': 1.0, 'Clb5_cyt': 1.0}
    # v_Cdc14_akt_Clb2
    reactions['v_Cdc14_akt_Clb2']['modifiers'] = {'Clb2_cyt': 1.0}
    # v_Mih1_p
    reactions['v_Mih1_p']['modifiers'] = {}
    # v_Clb3_d
    reactions['v_Clb3_d']['modifiers'] = {}
    # v_Cln3_d
    reactions['v_Cln3_d']['modifiers'] = {}
    # v_Cln3_ass_Far1p
    reactions['v_Cln3_ass_Far1p']['modifiers'] = {}
    # v_Clb5_rel
    reactions['v_Clb5_rel']['modifiers'] = {'Cln2_cyt': 1.0}
    # v_Swi5_p
    reactions['v_Swi5_p']['modifiers'] = {'Mcm1_nuc': 1.0}
    # v_Clb5_Sic1_Hp_dp
    reactions['v_Clb5_Sic1_Hp_dp']['modifiers'] = {}
    # v_Cln3_Far1p_d
    reactions['v_Cln3_Far1p_d']['modifiers'] = {}
    # v_Cln2_d
    reactions['v_Cln2_d']['modifiers'] = {}
    # v_Cln3_rel
    reactions['v_Cln3_rel']['modifiers'] = {'Cln2_cyt': 1.0}
    # v_Mcm1_p_basal
    reactions['v_Mcm1_p_basal']['modifiers'] = {'Clb3_cyt': 1.0}
    # v_Far1_pp
    reactions['v_Far1_pp']['modifiers'] = {'Fus3_cyt': 1.0}
    # v_Swi5_pp_Clb5
    reactions['v_Swi5_pp_Clb5']['modifiers'] = {'Clb5_cyt': 1.0}
    # v_Swi5_pp_Clb2
    reactions['v_Swi5_pp_Clb2']['modifiers'] = {'Clb2_cyt': 1.0}
    # v_Swe1_p_d
    reactions['v_Swe1_p_d']['modifiers'] = {}
    # v_Clb2_pp
    reactions['v_Clb2_pp']['modifiers'] = {'Swe1_cyt': 1.0}
    # v_Clb3_p_Clb5
    reactions['v_Clb3_p_Clb5']['modifiers'] = {'Clb5_cyt': 1.0}
    # v_APC_inakt_Clb2
    reactions['v_APC_inakt_Clb2']['modifiers'] = {'Clb2_cyt': 1.0}
    # v_APC_inakt_Clb5
    reactions['v_APC_inakt_Clb5']['modifiers'] = {'Clb5_cyt': 1.0}
    # v_Clb2_p
    reactions['v_Clb2_p']['modifiers'] = {'Hog1_PP_cyt': 1.0, 'Mcm1_nuc': 1.0}
    # v_MBF_d
    reactions['v_MBF_d']['modifiers'] = {}
    # v_Whi5_d
    reactions['v_Whi5_d']['modifiers'] = {}
    # v_Whi5_d
    reactions['v_Whi5_SBF_d']['modifiers'] = {}
    # v_Clb5_Sic1_pp_Hog1
    reactions['v_Clb5_Sic1_pp_Hog1']['modifiers'] = {'Hog1_PP_cyt': 1.0}
    # v_Clb2_d
    reactions['v_Clb2_d']['modifiers'] = {}
    # v_Whi5p_dp
    reactions['v_Whi5p_dp']['modifiers'] = {'Cdc14_p_cyt': 1.0}
    # v_Whi5_p
    reactions['v_Whi5_p']['modifiers'] = {}
    # v_Clb3_ass_Sic1
    reactions['v_Clb3_ass_Sic1']['modifiers'] = {}
    # v_Cdc14_inakt
    reactions['v_Cdc14_inakt']['modifiers'] = {}
    # v_Swe1_p
    reactions['v_Swe1_p']['modifiers'] = {}
    # v_APC_akt_p_Mcm1
    reactions['v_APC_akt_p_Mcm1']['modifiers'] = {'Mcm1_nuc': 1.0}
    # v_Mcm1_p_Clb2_fb
    reactions['v_Mcm1_p_Clb2_fb']['modifiers'] = {'Clb2_cyt': 1.0}
    # v_APC_p_d
    reactions['v_APC_p_d']['modifiers'] = {}
    # v_Cln3_p
    reactions['v_Cln3_p']['modifiers'] = {}

    module_dict['alg_eqs'] = {}
    module_dict['info'] = info
    module_dict['reactions'] = reactions
    module_dict['odes'] = YCM_tools.generate_odes_from_reactions(reactions, module_dict['sp_compartment'],
                                                                 module_dict['sp_annotations'], module_dict['units'],
                                                                 module_dict['com_annotations'])
    module_dict['type'] = 'ODE'


    return module_dict
