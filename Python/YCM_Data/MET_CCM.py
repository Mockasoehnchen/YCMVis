from math import *
import GenerateODEsFromReactions as YCM_tools
import math


def MET_CCM():
    """
    17/06/2015 - New Metabolism module based on reversible reactions.
    Jens Hahn, Katja Tummler, Judith Wodke
    """
    info = "17/06/2015\nNew Metabolism module based on reversible reactions.\nJens Hahn, Katja Tummler, Judith Wodke"
    # initial variables
    initvars = {}
    initvars['Glc'] = 1.5  # mM taken from Teusink et al. 1998
    initvars['HexP'] = 4.2  # mM taken from Hynne et al. 2001 ## 1.5 mM Glc; ref: Teusink, 1998
    initvars['ATP'] = 2.0  # Lagunas, 1983         # 2800. * 10**(-3): mM PMID: 11135551,  aerobic, 25 glucose
    initvars['ADP'] = 0.32  # Lagunas, 1983         # 420.  * 10**(-3): mM PMID: 11135551,  aerobic, 25 glucose
    initvars['Pi'] = 50.  # mM PMID: 20067525
    initvars['EtOH'] = 0.6  # mM, (educated) guess
    initvars['TriP'] = 0.115  # mM taken from Hynne et al. 2001
    initvars['pyr'] = 8.7  # mM taken from Hynne et al. 2001
    initvars['NAD'] = 0.65  # mM taken from Hynne et al. 2001
    initvars['NADH'] = 0.33  # mM taken from Hynne et al. 2001
    initvars['CO2'] = 10.  # mM TODO: fix me guessed
    initvars['NH4'] = 1.  # mM TODO: random number to avoid initialization error
    initvars['H'] = 1e-7 * 1e3  # mM [pH 7]
    initvars['glycerol'] = 64.2  # mM PMID: 23762021, Wt & unstresed condition, Petelenz-Kurdziel 2013
    # initvars['O2'] = 10. # mM TODO: fix me guessed
    initvars['glucan'] = 0.1  # mM (educated) guess
    initvars['chitin'] = 0.1  # mM (educated) guess
    initvars['mannan'] = 0.1  # mM (educated) guess

    # check back if those are required after BT
    initvars['NA_RNA'] = 0.1  # mM (educated) guess
    initvars[
        'NA_DNA'] = 0.147  # mM cell volume of 42 fl: dTTP, dATP, dCTP, and dGTP were 70, 44, 18, and 15 uM. PMID 14573610
    # pyruvate
    initvars['lipid'] = 0.1  # mM (educated) guess
    initvars['AA'] = 144.87  # mM Free AA pool (PMID: 12584756)
    initvars['int_vol'] = 16.0e-15  # L
    # sanity check variables
    initvars['HexP_check'] = 0.
    initvars['TriP_check'] = 0.
    initvars['pyr_check'] = 0.
    initvars['EtOH_check'] = 0.
    initvars['CO2_check'] = 0.
    initvars['O2_check'] = 0.

    # Kinetic constants (glucose import: 0.5773 mM/s)
    initpars = {}
    # HK main (CK)
    initpars['E_v_HK'] = 1.  # guessed
    initpars['kf_v_HK'] = 5.  # Glc + ATP -> HexP + ADP
    initpars['kr_v_HK'] = 1.
    initpars['Km_v_HK_ATP'] = initvars['ATP']
    initpars['Km_v_HK_Glc'] = initvars['Glc']
    initpars['Km_v_HK_ADP'] = initvars['ADP']
    initpars['Km_v_HK_HexP'] = initvars['HexP']
    # TriP main (CK)
    initpars['E_TriP'] = 1.  # guessed
    initpars['kf_TriP'] = 5.  # 2 ATP + HexP -> 2 ADP + 2 TriP
    initpars['kr_TriP'] = 1.
    initpars['Km_TriP_ATP'] = initvars['ATP']
    initpars['Km_TriP_HexP'] = initvars['HexP']
    initpars['Km_TriP_ADP'] = initvars['ADP']
    initpars['Km_TriP_TriP'] = initvars['TriP']
    # pyr main (CK)
    initpars['E_pyr'] = 1.  # guessed
    initpars['kf_pyr'] = 5.  # 2 ADP + P + NAD + TriP -> NADH + 2 ATP + pyr
    initpars['kr_pyr'] = 1.
    initpars['Km_pyr_ADP'] = initvars['ADP']
    initpars['Km_pyr_Pi'] = initvars['Pi']
    initpars['Km_pyr_NAD'] = initvars['NAD']
    initpars['Km_pyr_TriP'] = initvars['TriP']
    initpars['Km_pyr_ATP'] = initvars['ATP']
    initpars['Km_pyr_NADH'] = initvars['NADH']
    initpars['Km_pyr_pyr'] = initvars['pyr']
    # ferm main (CK)
    initpars['E_ferm'] = 1.  # guessed
    initpars['kf_ferm'] = 5.  # pyr + NADH -> EtOH + CO2 + NAD
    initpars['kr_ferm'] = 1.
    initpars['Km_ferm_NADH'] = initvars['NADH']
    initpars['Km_ferm_pyr'] = initvars['pyr']
    initpars['Km_ferm_CO2'] = initvars['CO2']
    initpars['Km_ferm_NAD'] = initvars['NAD']
    initpars['Km_ferm_EtOH'] = initvars['EtOH']
    # glucan branch (CK)
    initpars['E_glucan'] = 1.  # guessed
    initpars['kf_glucan'] = 5.  # guessed
    initpars['kr_glucan'] = 1.
    initpars['Km_glucan_glucan'] = initvars['glucan']
    initpars['Km_glucan_HexP'] = initvars['HexP']
    initpars['Km_glucan_ATP'] = initvars['ATP']
    initpars['Km_glucan_Pi'] = initvars['Pi']
    initpars['Km_glucan_ADP'] = initvars['ADP']
    # mannan branch (CK)
    initpars['E_mannan'] = 1.  # guessed
    initpars['kf_mannan'] = 5.  # guessed
    initpars['kr_mannan'] = 1.
    initpars['Km_mannan_mannan'] = initvars['mannan']
    initpars['Km_mannan_HexP'] = initvars['HexP']
    initpars['Km_mannan_ATP'] = initvars['ATP']
    initpars['Km_mannan_Pi'] = initvars['Pi']
    initpars['Km_mannan_ADP'] = initvars['ADP']
    # chitin branch (CK)
    initpars['E_v_chitin_f'] = 1.  # guessed
    initpars['kf_v_chitin_f'] = 5.  # guessed
    initpars['kr_v_chitin_f'] = 1.
    initpars['Km_v_chitin_f_chitin'] = initvars['chitin']
    initpars['Km_v_chitin_f_HexP'] = initvars['HexP']
    initpars['Km_v_chitin_f_ATP'] = initvars['ATP']
    initpars['Km_v_chitin_f_Pi'] = initvars['Pi']
    initpars['Km_v_chitin_f_ADP'] = initvars['ADP']
    initpars['Km_v_chitin_f_NH4'] = initvars['NH4']
    # NA_RNA branch (CK)
    initpars['E_v_NA_RNA_f'] = 1.  # guessed
    initpars['kf_v_NA_RNA_f'] = 5.  # guessed
    initpars['kr_v_NA_RNA_f'] = 1.
    initpars['Km_v_NA_RNA_f_NA_RNA'] = initvars['NA_RNA']
    initpars['Km_v_NA_RNA_f_TriP'] = initvars['TriP']
    initpars['Km_v_NA_RNA_f_ATP'] = initvars['ATP']
    initpars['Km_v_NA_RNA_f_Pi'] = initvars['Pi']
    initpars['Km_v_NA_RNA_f_ADP'] = initvars['ADP']
    initpars['Km_v_NA_RNA_f_NH4'] = initvars['NH4']
    initpars['Km_v_NA_RNA_f_HexP'] = initvars['HexP']
    initpars['Km_v_NA_RNA_f_pyr'] = initvars['pyr']
    # NA_DNA branch (CK) #updated for synthesis directly from NA_RNA
    initpars['E_v_NA_DNA_syn'] = 1.  # guessed
    initpars['kf_v_NA_DNA_syn'] = 5.  # guessed
    initpars['kr_v_NA_DNA_syn'] = 1.
    initpars['Km_v_NA_DNA_syn_NA_DNA'] = initvars['NA_DNA']
    initpars['Km_v_NA_DNA_syn_NA_RNA'] = initvars['NA_RNA']
    initpars['Km_v_NA_DNA_syn_NH4'] = initvars['NH4']
    # AA branch (CK)
    initpars['E_v_AA_f'] = 1.  # guessed
    initpars['kf_v_AA_f'] = 5.  # guessed
    initpars['kr_v_AA_f'] = 1.
    initpars['Km_v_AA_f_AA'] = initvars['AA']
    initpars['Km_v_AA_f_pyr'] = initvars['pyr']
    initpars['Km_v_AA_f_ATP'] = initvars['ATP']
    initpars['Km_v_AA_f_Pi'] = initvars['Pi']
    initpars['Km_v_AA_f_ADP'] = initvars['ADP']
    initpars['Km_v_AA_f_NH4'] = initvars['NH4']
    initpars['Km_v_AA_f_HexP'] = initvars['HexP']
    initpars['Km_v_AA_f_TriP'] = initvars['TriP']
    # lipid branch (CK)
    initpars['E_v_lipid_f'] = 1.  # guessed
    initpars['kf_v_lipid_f'] = 5.  # guessed
    initpars['kr_v_lipid_f'] = 1.
    initpars['Km_v_lipid_f_lipid'] = initvars['lipid']
    initpars['Km_v_lipid_f_pyr'] = initvars['pyr']
    initpars['Km_v_lipid_f_ATP'] = initvars['ATP']
    initpars['Km_v_lipid_f_Pi'] = initvars['Pi']
    initpars['Km_v_lipid_f_ADP'] = initvars['ADP']
    initpars['Km_v_lipid_f_NH4'] = initvars['NH4']
    initpars['Km_v_lipid_f_HexP'] = initvars['HexP']
    initpars['Km_v_lipid_f_TriP'] = initvars['TriP']
    # respiration
    initpars['k1_resp'] = 50.
    initpars['kf_resp'] = 5e9  # Pyruvate + 5 NAD + 11 P + 11 ADP + 02 -> 3 CO2 + 5 NADH + 11 ATP
    initpars['ATPcrit'] = 1.0  # mM
    # ADP synthesis
    initpars['k1_ADP_syn'] = 100.
    initpars['kf_ADP_syn'] = 0.1
    initpars['ATPADPcrit'] = initvars['ATP'] + initvars['ADP']
    # NAD synthesis
    initpars['k1_NAD_syn'] = 100.
    initpars['kf_NAD_syn'] = 0.1
    initpars['NADNADHcrit'] = initvars['NAD'] + initvars['NADH']
    # TCA
    initpars['kf_TCA'] = 1e3
    # glycerol synthesis (CK) TriP + NADH -> NAD + Pi + glycerol
    initpars['E_v_glycerol_syn'] = 1.  # guessed
    initpars['kf_v_glycerol_syn'] = 5.  # guessed
    initpars['kr_v_glycerol_syn'] = 1.  # guessed
    initpars['Km_v_glycerol_syn_glycerol'] = initvars['glycerol']
    initpars['Km_v_glycerol_syn_NAD'] = initvars['NAD']
    initpars['Km_v_glycerol_syn_NADH'] = initvars['NADH']
    initpars['Km_v_glycerol_syn_Pi'] = initvars['Pi']
    initpars['Km_v_glycerol_syn_TriP'] = initvars['TriP']

    reactions = {}
    # reaction 1: HexP -> TriP
    reactions['v_TriP'] = {'rate': {}, 'substrates': {}, 'products': {}, 'modifiers': {}}
    reactions['v_TriP'][
        'rate'] = '(E_TriP * ((kf_TriP * (HexP/Km_TriP_HexP) * (ATP/Km_TriP_ATP) - kr_TriP * (ADP/Km_TriP_ADP) * (TriP/Km_TriP_TriP)**2.0)/((1+(HexP/Km_TriP_HexP))*(1+(ATP/Km_TriP_ATP)) + (1+(ADP/Km_TriP_ADP))*(1+(TriP/Km_TriP_TriP)**1+(TriP/Km_TriP_TriP)**2) - 1)) * int_vol)'
    reactions['v_TriP']['substrates'] = {'HexP': 1., 'ATP': 1.}
    reactions['v_TriP']['products'] = {'TriP': 2., 'ADP': 1., 'TriP_check': 2.}
    reactions['v_TriP']['modifiers'] = {}

    # reaction 2: TriP -> pyr
    reactions['v_pyr'] = {'rate': {}, 'substrates': {}, 'products': {}, 'modifiers': {}}
    reactions['v_pyr'][
        'rate'] = '(E_pyr * ((kf_pyr * (Pi/Km_pyr_Pi) * (NAD/Km_pyr_NAD) * (ADP/Km_pyr_ADP)**2.0 * (TriP/Km_pyr_TriP) - kr_pyr * (pyr/Km_pyr_pyr) * (NADH/Km_pyr_NADH) * (ATP/Km_pyr_ATP)**2.0)/((1+(Pi/Km_pyr_Pi))*(1+(NAD/Km_pyr_NAD))*(1+(ADP/Km_pyr_ADP)**1+(ADP/Km_pyr_ADP)**2)*(1+(TriP/Km_pyr_TriP)) + (1+(pyr/Km_pyr_pyr))*(1+(NADH/Km_pyr_NADH))*(1+(ATP/Km_pyr_ATP)**1+(ATP/Km_pyr_ATP)**2) - 1)) * int_vol)'
    reactions['v_pyr']['substrates'] = {'TriP': 1., 'ADP': 2., 'Pi': 1., 'NAD': 1.}
    reactions['v_pyr']['products'] = {'pyr': 1., 'NADH': 1., 'ATP': 2., 'pyr_check': 1.}
    reactions['v_pyr']['modifiers'] = {}

    # reaction 3: ferm
    reactions['v_ferm'] = {'rate': {}, 'substrates': {}, 'products': {}, 'modifiers': {}}
    reactions['v_ferm'][
        'rate'] = '(E_ferm * ((kf_ferm * (pyr/Km_ferm_pyr) * (NADH/Km_ferm_NADH) - kr_ferm * (CO2/Km_ferm_CO2) * (NAD/Km_ferm_NAD) * (EtOH/Km_ferm_EtOH))/((1+(pyr/Km_ferm_pyr))*(1+(NADH/Km_ferm_NADH)) + (1+(CO2/Km_ferm_CO2))*(1+(NAD/Km_ferm_NAD))*(1+(EtOH/Km_ferm_EtOH)) - 1)) * int_vol)'
    reactions['v_ferm']['substrates'] = {'pyr': 1., 'NADH': 1.}
    reactions['v_ferm']['products'] = {'EtOH': 1., 'CO2': 1., 'EtOH_check': 1., 'CO2_check': 1., 'NAD': 1.}
    reactions['v_ferm']['modifiers'] = {}

    # reaction 5: HexP production (reversible)
    reactions['v_HK'] = {'rate': {}, 'substrates': {}, 'products': {}, 'modifiers': {}}
    # reactions['v_HK']['rate'] = 'E_HK * (kf_HK * Glc * ATP)'
    reactions['v_HK'][
        'rate'] = '(E_v_HK * ((kf_v_HK * (Glc/Km_v_HK_Glc) * (ATP/Km_v_HK_ATP) - kr_v_HK * (HexP/Km_v_HK_HexP) * (ADP/Km_v_HK_ADP))/((1+(Glc/Km_v_HK_Glc))*(1+(ATP/Km_v_HK_ATP)) + (1+(HexP/Km_v_HK_HexP))*(1+(ADP/Km_v_HK_ADP)) - 1)) * int_vol)'
    reactions['v_HK']['substrates'] = {'Glc': 1., 'ATP': 1.}
    reactions['v_HK']['products'] = {'HexP': 1., 'ADP': 1., 'HexP_check': 1.}
    reactions['v_HK']['modifiers'] = {}

    ## reaction 5: HexP production (irreversible)
    # reactions['v_glc'] = {'rate': {}, 'substrates': {}, 'products': {}, 'modifiers': {}}
    # reactions['v_glc']['rate'] = 'E_Glc * (kf_Glc * Glc * ATP)'
    # reactions['v_glc']['substrates'] = {'Glc': 1., 'ATP': 1.}
    # reactions['v_glc']['products'] = {'HexP': 1., 'ADP': 1., 'HexP_check': 1.}
    # reactions['v_glc']['modifiers'] = {}

    # reaction 8: glucan branch (CK)
    reactions['v_glucan_f'] = {'rate': {}, 'substrates': {}, 'products': {}, 'modifiers': {}}
    reactions['v_glucan_f'][
        'rate'] = '(E_glucan * ((kf_glucan * (HexP/Km_glucan_HexP)*(ATP/Km_glucan_ATP) - kr_glucan * (glucan/Km_glucan_glucan)*(ADP/Km_glucan_ADP)*(Pi/Km_glucan_Pi))/((1+(HexP/Km_glucan_HexP))*(1+(ATP/Km_glucan_ATP)) + (1+(glucan/Km_glucan_glucan))*(1+(ADP/Km_glucan_ADP))*(1+(Pi/Km_glucan_Pi)) - 1)) * int_vol)'
    reactions['v_glucan_f']['substrates'] = {'HexP': 1., 'ATP': 1.}
    reactions['v_glucan_f']['products'] = {'glucan': 1., 'ADP': 1., 'Pi': 1.}
    reactions['v_glucan_f']['modifiers'] = {}

    # reaction 8: mannan branch (CK)
    reactions['v_mannan_f'] = {'rate': {}, 'substrates': {}, 'products': {}, 'modifiers': {}}
    reactions['v_mannan_f'][
        'rate'] = '(E_mannan * ((kf_mannan * (HexP/Km_mannan_HexP)*(ATP/Km_mannan_ATP) - kr_mannan * (mannan/Km_mannan_mannan)*(ADP/Km_mannan_ADP)*(Pi/Km_mannan_Pi))/((1+(HexP/Km_mannan_HexP))*(1+(ATP/Km_mannan_ATP)) + (1+(mannan/Km_mannan_mannan))*(1+(ADP/Km_mannan_ADP))*(1+(Pi/Km_mannan_Pi)) - 1)) * int_vol)'
    reactions['v_mannan_f']['substrates'] = {'HexP': 1., 'ATP': 1.}
    reactions['v_mannan_f']['products'] = {'mannan': 1., 'ADP': 1., 'Pi': 1.}
    reactions['v_mannan_f']['modifiers'] = {}

    # reaction 8: chitin branch (CK)
    reactions['v_chitin_f'] = {'rate': {}, 'substrates': {}, 'products': {}, 'modifiers': {}}
    reactions['v_chitin_f'][
        'rate'] = '(E_v_chitin_f * ((kf_v_chitin_f * (NH4/Km_v_chitin_f_NH4) * (HexP/Km_v_chitin_f_HexP) * (ATP/Km_v_chitin_f_ATP) - kr_v_chitin_f * (Pi/Km_v_chitin_f_Pi) * (chitin/Km_v_chitin_f_chitin) * (ADP/Km_v_chitin_f_ADP))/((1+(NH4/Km_v_chitin_f_NH4))*(1+(HexP/Km_v_chitin_f_HexP))*(1+(ATP/Km_v_chitin_f_ATP)) + (1+(Pi/Km_v_chitin_f_Pi))*(1+(chitin/Km_v_chitin_f_chitin))*(1+(ADP/Km_v_chitin_f_ADP)) - 1)) * int_vol)'
    # reactions['v_chitin_f']['rate'] = 'E_chitin * ((kf_chitin * (HexP/Km_chitin_HexP)*(ATP/Km_chitin_ATP) - kr_chitin * (chitin/Km_chitin_chitin)*(ADP/Km_chitin_ADP)*(Pi/Km_chitin_Pi))/((1+(HexP/Km_chitin_HexP))*(1+(ATP/Km_chitin_ATP)) + (1+(chitin/Km_chitin_chitin))*(1+(ADP/Km_chitin_ADP))*(1+(Pi/Km_chitin_Pi)) - 1))'
    reactions['v_chitin_f']['substrates'] = {'HexP': 1., 'ATP': 1., 'NH4': 1}
    reactions['v_chitin_f']['products'] = {'chitin': 6. / 8., 'ADP': 1., 'Pi': 1., 'H': 1}
    reactions['v_chitin_f']['modifiers'] = {}

    # reaction 8: NA_RNA branch (CK)
    reactions['v_NA_RNA_f'] = {'rate': {}, 'substrates': {}, 'products': {}, 'modifiers': {}}
    reactions['v_NA_RNA_f'][
        'rate'] = '(E_v_NA_RNA_f * ((kf_v_NA_RNA_f * (NH4/Km_v_NA_RNA_f_NH4) * (HexP/Km_v_NA_RNA_f_HexP) * (pyr/Km_v_NA_RNA_f_pyr) * (ATP/Km_v_NA_RNA_f_ATP) * (TriP/Km_v_NA_RNA_f_TriP) - kr_v_NA_RNA_f * (Pi/Km_v_NA_RNA_f_Pi) * (NA_RNA/Km_v_NA_RNA_f_NA_RNA) * (ADP/Km_v_NA_RNA_f_ADP))/((1+(NH4/Km_v_NA_RNA_f_NH4))*(1+(HexP/Km_v_NA_RNA_f_HexP))*(1+(pyr/Km_v_NA_RNA_f_pyr))*(1+(ATP/Km_v_NA_RNA_f_ATP))*(1+(TriP/Km_v_NA_RNA_f_TriP)) + (1+(Pi/Km_v_NA_RNA_f_Pi))*(1+(NA_RNA/Km_v_NA_RNA_f_NA_RNA))*(1+(ADP/Km_v_NA_RNA_f_ADP)) - 1)) * int_vol)'
    # reactions['v_NA_RNA_f']['rate'] = 'E_v_NA_RNA_f * ((kf_v_NA_RNA_f * (HexP/Km_v_NA_RNA_f_HexP) * (pyr/Km_v_NA_RNA_f_pyr) * (ATP/Km_v_NA_RNA_f_ATP) * (TriP/Km_v_NA_RNA_f_TriP) - kr_v_NA_RNA_f * (Pi/Km_v_NA_RNA_f_Pi) * (NA_RNA/Km_v_NA_RNA_f_NA_RNA) * (ADP/Km_v_NA_RNA_f_ADP))/((1+(HexP/Km_v_NA_RNA_f_HexP))*(1+(pyr/Km_v_NA_RNA_f_pyr))*(1+(ATP/Km_v_NA_RNA_f_ATP))*(1+(TriP/Km_v_NA_RNA_f_TriP)) + (1+(Pi/Km_v_NA_RNA_f_Pi))*(1+(NA_RNA/Km_v_NA_RNA_f_NA_RNA))*(1+(ADP/Km_v_NA_RNA_f_ADP)) - 1))'
    reactions['v_NA_RNA_f']['substrates'] = {'HexP': 0.67, 'TriP': 0.33, 'pyr': 0.1, 'ATP': 9.01, 'NH4': 4.09}
    reactions['v_NA_RNA_f']['products'] = {'NA_RNA': 1., 'ADP': 9.01, 'Pi': 9.01, 'H': 4.09}
    # reactions['v_NA_RNA_f']['products'] = {'NA_RNA': initpars['RNA_stoich'], 'ADP': 9.01, 'Pi': 9.01}
    reactions['v_NA_RNA_f']['modifiers'] = {}

    ## reaction 8: NA_RNA branch (CK)
    # reactions['v_NA_RNA_f'] = {'rate': {}, 'substrates': {}, 'products': {}, 'modifiers': {}}
    # reactions['v_NA_RNA_f']['rate'] = 'E_v_NA_RNA_f * ((kf_v_NA_RNA_f * (HexP/Km_v_NA_RNA_f_HexP) * (pyr/Km_v_NA_RNA_f_pyr) * (ATP/Km_v_NA_RNA_f_ATP) * (TriP/Km_v_NA_RNA_f_TriP) - kr_v_NA_RNA_f * (Pi/Km_v_NA_RNA_f_Pi) * (NA_RNA/Km_v_NA_RNA_f_NA_RNA) * (ADP/Km_v_NA_RNA_f_ADP))/((1+(HexP/Km_v_NA_RNA_f_HexP))*(1+(pyr/Km_v_NA_RNA_f_pyr))*(1+(ATP/Km_v_NA_RNA_f_ATP))*(1+(TriP/Km_v_NA_RNA_f_TriP)) + (1+(Pi/Km_v_NA_RNA_f_Pi))*(1+(NA_RNA/Km_v_NA_RNA_f_NA_RNA))*(1+(ADP/Km_v_NA_RNA_f_ADP)) - 1))'
    # reactions['v_NA_RNA_f']['substrates'] = {'HexP': 1., 'TriP': 1., 'pyr': 1., 'ATP': 1.}
    # reactions['v_NA_RNA_f']['products'] = {'NA_RNA': 1., 'ADP': 1., 'Pi': 1.}
    # reactions['v_NA_RNA_f']['modifiers'] = {}

    # reaction 8: NA_DNA branch (CK)
    # reactions['v_NA_DNA_f'] = {'rate': {}, 'substrates': {}, 'products': {}, 'modifiers': {}}
    # reactions['v_NA_DNA_f']['rate'] = 'E_v_NA_DNA_f * ((kf_v_NA_DNA_f * (HexP/Km_v_NA_DNA_f_HexP) * (pyr/Km_v_NA_DNA_f_pyr) * (ATP/Km_v_NA_DNA_f_ATP) * (TriP/Km_v_NA_DNA_f_TriP) - kr_v_NA_DNA_f * (NA_DNA/Km_v_NA_DNA_f_NA_DNA) * (Pi/Km_v_NA_DNA_f_Pi) * (ADP/Km_v_NA_DNA_f_ADP))/((1+(HexP/Km_v_NA_DNA_f_HexP))*(1+(pyr/Km_v_NA_DNA_f_pyr))*(1+(ATP/Km_v_NA_DNA_f_ATP))*(1+(TriP/Km_v_NA_DNA_f_TriP)) + (1+(NA_DNA/Km_v_NA_DNA_f_NA_DNA))*(1+(Pi/Km_v_NA_DNA_f_Pi))*(1+(ADP/Km_v_NA_DNA_f_ADP)) - 1))'
    # reactions['v_NA_DNA_f']['rate'] = 'E_NA_DNA * ((kf_NA_DNA * (TriP/Km_NA_DNA_TriP)*(ATP/Km_NA_DNA_ATP) - kr_NA_DNA * (NA_DNA/Km_NA_DNA_NA_DNA)*(ADP/Km_NA_DNA_ADP)*(Pi/Km_NA_DNA_Pi))/((1+(TriP/Km_NA_DNA_TriP))*(1+(ATP/Km_NA_DNA_ATP)) + (1+(NA_DNA/Km_NA_DNA_NA_DNA))*(1+(ADP/Km_NA_DNA_ADP))*(1+(Pi/Km_NA_DNA_Pi)) - 1))'# old stoich
    # reactions['v_NA_DNA_f']['substrates'] = {'HexP': 0.72, 'TriP': 0.28, 'pyr': 0.17,'ATP': 9.4}
    # reactions['v_NA_DNA_f']['products'] = {'NA_DNA': 1., 'ADP': 9.4 'Pi': 9.4}
    # reactions['v_NA_DNA_f']['modifiers'] = {}

    # Reaction to produce DNA nucleotides from RNA nucleotides NA_RNA --> NA_DNA (CK)
    reactions['v_NA_DNA_syn'] = {'rate': {}, 'substrates': {}, 'products': {}, 'modifiers': {}}
    reactions['v_NA_DNA_syn'][
        'rate'] = '(E_v_NA_DNA_syn * ((kf_v_NA_DNA_syn * (NH4/Km_v_NA_DNA_syn_NH4) * (NA_RNA/Km_v_NA_DNA_syn_NA_RNA) - kr_v_NA_DNA_syn * (NA_DNA/Km_v_NA_DNA_syn_NA_DNA))/((1+(NH4/Km_v_NA_DNA_syn_NH4))*(1+(NA_RNA/Km_v_NA_DNA_syn_NA_RNA)) + (1+(NA_DNA/Km_v_NA_DNA_syn_NA_DNA)) - 1)) * int_vol)'
    # reactions['v_NA_DNA_syn']['rate'] = 'E_v_NA_DNA_syn * ((kf_v_NA_DNA_syn * (NA_RNA/Km_v_NA_DNA_syn_NA_RNA) - kr_v_NA_DNA_syn * (NA_DNA/Km_v_NA_DNA_syn_NA_DNA))/((1+(NA_RNA/Km_v_NA_DNA_syn_NA_RNA)) + (1+(NA_DNA/Km_v_NA_DNA_syn_NA_DNA)) - 1))'
    reactions['v_NA_DNA_syn']['substrates'] = {'NA_RNA': 1., 'NH4': .41}
    reactions['v_NA_DNA_syn']['products'] = {'NA_DNA': 1.,
                                             'H': .41}  # since DNA is build from RNA, for NH4 is accounted by the difference of NH4(required for DNA production - required for RNA production)
    # reactions['v_NA_DNA_syn']['modifiers'] = {'RNR': 1.} # could be extended to include regulation via RNR

    # reaction 8: AA branch (CK)
    reactions['v_AA_f'] = {'rate': {}, 'substrates': {}, 'products': {}, 'modifiers': {}}
    reactions['v_AA_f'][
        'rate'] = '(E_v_AA_f * ((kf_v_AA_f * (NH4/Km_v_AA_f_NH4) * (HexP/Km_v_AA_f_HexP) * (pyr/Km_v_AA_f_pyr) * (ATP/Km_v_AA_f_ATP) - kr_v_AA_f * (AA/Km_v_AA_f_AA) * (Pi/Km_v_AA_f_Pi) * (ADP/Km_v_AA_f_ADP) * (TriP/Km_v_AA_f_TriP))/((1+(NH4/Km_v_AA_f_NH4))*(1+(HexP/Km_v_AA_f_HexP))*(1+(pyr/Km_v_AA_f_pyr))*(1+(ATP/Km_v_AA_f_ATP)) + (1+(AA/Km_v_AA_f_AA))*(1+(Pi/Km_v_AA_f_Pi))*(1+(ADP/Km_v_AA_f_ADP))*(1+(TriP/Km_v_AA_f_TriP)) - 1)) * int_vol)'
    # reactions['v_AA_f']['rate'] = 'E_v_AA_f * ((kf_v_AA_f * (HexP/Km_v_AA_f_HexP) * (pyr/Km_v_AA_f_pyr) * (ATP/Km_v_AA_f_ATP) - kr_v_AA_f * (AA/Km_v_AA_f_AA) * (Pi/Km_v_AA_f_Pi) * (ADP/Km_v_AA_f_ADP) * (TriP/Km_v_AA_f_TriP))/((1+(HexP/Km_v_AA_f_HexP))*(1+(pyr/Km_v_AA_f_pyr))*(1+(ATP/Km_v_AA_f_ATP)) + (1+(AA/Km_v_AA_f_AA))*(1+(Pi/Km_v_AA_f_Pi))*(1+(ADP/Km_v_AA_f_ADP))*(1+(TriP/Km_v_AA_f_TriP)) - 1))'
    reactions['v_AA_f']['substrates'] = {'HexP': 0.09, 'pyr': 1.18, 'ATP': 1.66, 'NH4': 1.35}
    reactions['v_AA_f']['products'] = {'AA': 1., 'TriP': 0.04, 'ADP': 1.66, 'Pi': 1.66, 'H': 1.35}
    reactions['v_AA_f']['modifiers'] = {}

    # reaction 8: lipid branch (CK)
    reactions['v_lipid_f'] = {'rate': {}, 'substrates': {}, 'products': {}, 'modifiers': {}}
    reactions['v_lipid_f'][
        'rate'] = '(E_v_lipid_f * ((kf_v_lipid_f * (NH4/Km_v_lipid_f_NH4) * (HexP/Km_v_lipid_f_HexP) * (pyr/Km_v_lipid_f_pyr) * (ATP/Km_v_lipid_f_ATP) - kr_v_lipid_f * (Pi/Km_v_lipid_f_Pi) * (lipid/Km_v_lipid_f_lipid) * (ADP/Km_v_lipid_f_ADP) * (TriP/Km_v_lipid_f_TriP))/((1+(NH4/Km_v_lipid_f_NH4))*(1+(HexP/Km_v_lipid_f_HexP))*(1+(pyr/Km_v_lipid_f_pyr))*(1+(ATP/Km_v_lipid_f_ATP)) + (1+(Pi/Km_v_lipid_f_Pi))*(1+(lipid/Km_v_lipid_f_lipid))*(1+(ADP/Km_v_lipid_f_ADP))*(1+(TriP/Km_v_lipid_f_TriP)) - 1)) * int_vol)'
    # reactions['v_lipid_f']['rate'] = 'E_v_lipid_f * ((kf_v_lipid_f * (HexP/Km_v_lipid_f_HexP) * (pyr/Km_v_lipid_f_pyr) * (ATP/Km_v_lipid_f_ATP) - kr_v_lipid_f * (Pi/Km_v_lipid_f_Pi) * (lipid/Km_v_lipid_f_lipid) * (ADP/Km_v_lipid_f_ADP) * (TriP/Km_v_lipid_f_TriP))/((1+(HexP/Km_v_lipid_f_HexP))*(1+(pyr/Km_v_lipid_f_pyr))*(1+(ATP/Km_v_lipid_f_ATP)) + (1+(Pi/Km_v_lipid_f_Pi))*(1+(lipid/Km_v_lipid_f_lipid))*(1+(ADP/Km_v_lipid_f_ADP))*(1+(TriP/Km_v_lipid_f_TriP)) - 1))'
    reactions['v_lipid_f']['substrates'] = {'HexP': 7.23, 'pyr': 11.44, 'ATP': 43.23, 'NH4': .94}
    reactions['v_lipid_f']['products'] = {'lipid': 1., 'TriP': 10.08, 'ADP': 43.23, 'Pi': 43.23, 'H': .94}
    reactions['v_lipid_f']['modifiers'] = {}

    # reaction 15: Respiration branch
    # 6 P + 6 ADP + O2 + 4 NADH -> 6 ATP + 4 NAD
    reactions['v_resp'] = {'rate': {}, 'substrates': {}, 'products': {}, 'modifiers': {}}
    reactions['v_resp']['rate'] = '(((1./(1.+ exp(k1_resp*(ATP - ATPcrit)))) * kf_resp * NADH * ADP * Pi) * int_vol)'
    reactions['v_resp']['substrates'] = {'ADP': 6, 'Pi': 6., 'NADH': 4., 'O2_check': 1.}
    reactions['v_resp']['products'] = {'ATP': 6., 'NAD': 4.}
    reactions['v_resp']['modifiers'] = {}

    # reaction 16: TCA cycle
    # Pyruvate + 4 NAD + ADP + P -> 3 CO2 + 4 NADH + ATP
    reactions['v_TCA'] = {'rate': {}, 'substrates': {}, 'products': {}, 'modifiers': {}}
    reactions['v_TCA']['rate'] = '((kf_TCA * pyr * NAD * ADP * Pi) * int_vol)'
    reactions['v_TCA']['substrates'] = {'pyr': 1, 'NAD': 4., 'ADP': 1., 'Pi': 1.}
    reactions['v_TCA']['products'] = {'NADH': 4., 'CO2': 3., 'ATP': 1., 'CO2_check': 3.}
    reactions['v_TCA']['modifiers'] = {}

    # ADP formation
    reactions['v_ADP_syn'] = {'rate': {}, 'substrates': {}, 'products': {}, 'modifiers': {}}
    reactions['v_ADP_syn'][
        'rate'] = '(((1./(1.+ exp(k1_ADP_syn*((ATP+ADP) - ATPADPcrit)))) * kf_ADP_syn * NA_RNA * Pi**2) * int_vol)'
    reactions['v_ADP_syn']['substrates'] = {'NA_RNA': 1., 'Pi': 2.}
    reactions['v_ADP_syn']['products'] = {'ADP': 1.}
    reactions['v_ADP_syn']['modifiers'] = {'ATP': 1.}

    # NAD formation
    reactions['v_NAD_syn'] = {'rate': {}, 'substrates': {}, 'products': {}, 'modifiers': {}}
    reactions['v_NAD_syn'][
        'rate'] = '(((1./(1.+ exp(k1_NAD_syn*((NAD+NADH) - NADNADHcrit)))) * kf_NAD_syn * AA * ADP) * int_vol)'
    reactions['v_NAD_syn']['substrates'] = {'AA': 1., 'ADP': 1.}
    reactions['v_NAD_syn']['products'] = {'NAD': 1.}
    reactions['v_NAD_syn']['modifiers'] = {'NADH': 1.}

    # ATP hack
    reactions['v_ATP_con'] = {'rate': {}, 'substrates': {}, 'products': {}, 'modifiers': {}}
    reactions['v_ATP_con']['rate'] = '((0.5 * ATP) * int_vol)'
    reactions['v_ATP_con']['substrates'] = {'ATP': 1.}
    reactions['v_ATP_con']['products'] = {'ADP': 1., 'Pi': 1.}
    reactions['v_ATP_con']['modifiers'] = {}

    # # reaction 8: resp branch (CK)
    # reactions['v_resp_f'] = {'rate': {}, 'substrates': {}, 'products': {}, 'modifiers': {}}
    # reactions['v_resp_f']['rate'] = 'E_resp * ((kf_resp * (HexP/Km_pyr) - kr_resp * (resp/Km_resp))/((1+(HexP/Km_pyr)) + (1+(resp/Km_resp)) - 1)'
    # reactions['v_resp_f']['substrates'] = {'pyr': 1.}
    # reactions['v_resp_f']['products'] = {'resp': 1.}
    # reactions['v_resp_f']['modifiers'] = {}

    # reaction 16: test branch
    # reactions['v_test'] = {'rate': {}, 'substrates': {}, 'products': {}, 'modifiers': {}}
    # reactions['v_test']['rate'] = '0.1 * ATP'
    # reactions['v_test']['substrates'] = {'ATP': 1.}
    # reactions['v_test']['products'] = {'ADP': 1., 'Pi':1.}
    # reactions['v_test']['modifiers'] = {}

    # reactions['v_TCA']  = {'rate': {}, 'substrates': {}, 'products': {}, 'modifiers': {}}
    # reactions['v_TCA']['rate'] = 'kf_TCA * pyr * NAD**4'
    # reactions['v_TCA']['substrates'] = {'pyr': 1, 'NAD': 4.}
    # reactions['v_TCA']['products'] = {'NADH': 4., 'CO2': 3., 'CO2_check': 3.}
    # reactions['v_TCA']['modifiers'] = {}

    # glycerol production
    reactions['v_glycerol_syn'] = {'rate': {}, 'substrates': {}, 'products': {}, 'modifiers': {}}
    reactions['v_glycerol_syn'][
        'rate'] = '(E_v_glycerol_syn * ((kf_v_glycerol_syn * (NADH/Km_v_glycerol_syn_NADH) * (TriP/Km_v_glycerol_syn_TriP) - kr_v_glycerol_syn * (Pi/Km_v_glycerol_syn_Pi) * (glycerol/Km_v_glycerol_syn_glycerol) * (NAD/Km_v_glycerol_syn_NAD))/((1+(NADH/Km_v_glycerol_syn_NADH))*(1+(TriP/Km_v_glycerol_syn_TriP)) + (1+(Pi/Km_v_glycerol_syn_Pi))*(1+(glycerol/Km_v_glycerol_syn_glycerol))*(1+(NAD/Km_v_glycerol_syn_NAD)) - 1)) * int_vol)'
    reactions['v_glycerol_syn']['substrates'] = {'TriP': 1., 'NADH': 1.}
    reactions['v_glycerol_syn']['products'] = {'glycerol': 1., 'NAD': 1., 'Pi': 1.}
    reactions['v_glycerol_syn']['modifiers'] = {}

    modeldict = {}
    modeldict['sp_compartment'] = {'Glc': 'intracellular',
                                   'HexP': 'intracellular',
                                   'EtOH': 'intracellular',
                                   'ATP': 'intracellular',
                                   'ADP': 'intracellular',
                                   'Pi': 'intracellular',
                                   'AA': 'intracellular',
                                   'NA_RNA': 'intracellular',
                                   'NA_DNA': 'intracellular',
                                   'chitin': 'intracellular',
                                   'mannan': 'intracellular',
                                   'glucan': 'intracellular',
                                   'lipid': 'intracellular',
                                   'int_vol': 'intracellular',
                                   'CO2': 'intracellular',
                                   # 'O2': 'intracellular',
                                   'TriP': 'intracellular',
                                   'pyr': 'intracellular',
                                   'NAD': 'intracellular',
                                   'NADH': 'intracellular',
                                   'NH4': 'intracellular',
                                   'H': 'intracellular',
                                   'TriP_check': 'intracellular',
                                   'pyr_check': 'intracellular',
                                   'EtOH_check': 'intracellular',
                                   'CO2_check': 'intracellular',
                                   'O2_check': 'intracellular',
                                   'HexP_check': 'intracellular',
                                   'glycerol': 'intracellular'}

    modeldict['sp_annotations'] = {'Glc': 'CHEBI:17634',
                                   'HexP': 'CHEBI:58225',
                                   'EtOH': 'CHEBI:16236',
                                   'ATP': 'CHEBI:30616',
                                   'ADP': 'CHEBI:456216',
                                   'Pi': 'CHEBI:43474',
                                   'AA': 'YCM:AA',
                                   'NA_RNA': 'YCM:NA_RNA',
                                   'NA_DNA': 'YCM:NA_DNA',
                                   'chitin': 'CHEBI:17029',
                                   'mannan': 'CHEBI:28808',
                                   'glucan': 'CHEBI:37671',
                                   'lipid': 'YCM:lipid',
                                   'int_vol': 'SBO:0000468',
                                   'CO2': 'CHEBI:16526',
                                   # 'O2': 'CHEBI:15379',
                                   'TriP': 'CHEBI:58027',
                                   'pyr': 'CHEBI:15361',
                                   'NAD': 'CHEBI:57540',
                                   'NADH': 'CHEBI:57945',
                                   'NH4': 'CHEBI:28938',
                                   'H': 'CHEBI:24636',
                                   'TriP_check': 'YCM:TriP_check',
                                   'pyr_check': 'YCM:pyr_check',
                                   'EtOH_check': 'YCM:EtOH_check',
                                   'CO2_check': 'YCM:CO2_check',
                                   'O2_check': 'YCM:O2_check',
                                   'HexP_check': 'YCM:HexP_check',
                                   'glycerol': 'CHEBI:17754'}

    modeldict['sp_states'] = {'Glc': '0',
                              'HexP': '-2',
                              'EtOH': '0',
                              'ATP': '-4',
                              'ADP': '-3',
                              'Pi': '-2',
                              'AA': '0',
                              'NA_RNA': '0',
                              'NA_DNA': '0',
                              'chitin': '0',
                              'mannan': '0',
                              'glucan': '0',
                              'lipid': '0',
                              'int_vol': '0',
                              'CO2': '0',
                              # 'O2': '0',
                              'TriP': '-2',
                              'pyr': '-1',
                              'NAD': '-1',
                              'NADH': '-2',
                              'NH4': '+1',
                              'H': '+1',
                              'TriP_check': '-2',
                              'pyr_check': '-1',
                              'EtOH_check': '0',
                              'CO2_check': '0',
                              'O2_check': '0',
                              'HexP_check': '-2',
                              'glycerol': '0'}

    modeldict['units'] = {'Glc': 'mM',
                          'HexP': 'mM',
                          'EtOH': 'mM',
                          'ATP': 'mM',
                          'ADP': 'mM',
                          'Pi': 'mM',
                          'AA': 'mM',
                          'NA_RNA': 'mM',
                          'NA_DNA': 'mM',
                          'chitin': 'mM',
                          'mannan': 'mM',
                          'glucan': 'mM',
                          'lipid': 'mM',
                          'int_vol': 'L',
                          'CO2': 'mM',
                          # 'O2': 'mM',
                          'TriP': 'mM',
                          'pyr': 'mM',
                          'NAD': 'mM',
                          'NADH': 'mM',
                          'NH4': 'mM',
                          'H': 'mM',
                          'TriP_check': 'mM',
                          'pyr_check': 'mM',
                          'EtOH_check': 'mM',
                          'CO2_check': 'mM',
                          'O2_check': 'mM',
                          'HexP_check': 'mM',
                          'glycerol': 'mM'}

    modeldict['units_pars'] = {  # 'AA_stoich': 'dimensionless',
        'ATPADPcrit': 'mM',
        'ATPcrit': 'mM',
        # 'DNA_stoich': 'dimensionless',
        'E_v_AA_f': 'mM',
        'E_TriP': 'mM',
        'E_pyr': 'mM',
        'E_v_HK': 'mM',
        # 'E_NA_DNA': 'mM',
        'E_v_NA_DNA_syn': 'mM',
        'E_v_NA_RNA_f': 'mM',
        'E_v_chitin_f': 'mM',
        'E_glucan': 'mM',
        'E_v_lipid_f': 'mM',
        'E_mannan': 'mM',
        'E_ferm': 'mM',
        'E_v_glycerol_syn': 'mM',
        'Km_v_AA_f_AA': 'mM',
        'Km_v_AA_f_ADP': 'mM',
        'Km_v_AA_f_ATP': 'mM',
        'Km_v_AA_f_Pi': 'mM',
        'Km_v_AA_f_pyr': 'mM',
        'Km_v_AA_f_NH4': 'mM',
        'Km_v_AA_f_TriP': 'mM',
        'Km_v_AA_f_HexP': 'mM',
        'Km_TriP_ADP': 'mM',
        'Km_TriP_ATP': 'mM',
        'Km_TriP_HexP': 'mM',
        'Km_TriP_TriP': 'mM',
        'Km_pyr_ADP': 'mM',
        'Km_pyr_ATP': 'mM',
        'Km_pyr_TriP': 'mM',
        'Km_pyr_NAD': 'mM',
        'Km_pyr_NADH': 'mM',
        'Km_pyr_Pi': 'mM',
        'Km_pyr_pyr': 'mM',
        'Km_v_HK_ADP': 'mM',
        'Km_v_HK_ATP': 'mM',
        'Km_v_HK_HexP': 'mM',
        'Km_v_HK_Glc': 'mM',
        'Km_v_lipid_f_TriP': 'mM',
        # 'Km_NA_DNA_ADP': 'mM',
        # 'Km_NA_DNA_ATP': 'mM',
        # 'Km_NA_DNA_TriP': 'mM',
        # 'Km_NA_DNA_NA_DNA': 'mM',
        # 'Km_NA_DNA_Pi': 'mM',
        'Km_v_NA_DNA_syn_NA_DNA': 'mM',
        'Km_v_NA_DNA_syn_NA_RNA': 'mM',
        'Km_v_NA_DNA_syn_NH4': 'mM',
        'Km_v_NA_RNA_f_ADP': 'mM',
        'Km_v_NA_RNA_f_ATP': 'mM',
        'Km_v_NA_RNA_f_TriP': 'mM',
        'Km_v_NA_RNA_f_NA_RNA': 'mM',
        'Km_v_NA_RNA_f_Pi': 'mM',
        'Km_v_NA_RNA_f_NH4': 'mM',
        'Km_v_NA_RNA_f_HexP': 'mM',
        'Km_v_NA_RNA_f_pyr': 'mM',
        'Km_v_chitin_f_ADP': 'mM',
        'Km_v_chitin_f_ATP': 'mM',
        'Km_v_chitin_f_HexP': 'mM',
        'Km_v_chitin_f_Pi': 'mM',
        'Km_v_chitin_f_chitin': 'mM',
        'Km_v_lipid_f_HexP': 'mM',
        'Km_v_chitin_f_NH4': 'mM',
        'Km_glucan_ADP': 'mM',
        'Km_glucan_ATP': 'mM',
        'Km_glucan_HexP': 'mM',
        'Km_glucan_Pi': 'mM',
        'Km_glucan_glucan': 'mM',
        'Km_v_lipid_f_ADP': 'mM',
        'Km_v_lipid_f_ATP': 'mM',
        'Km_v_lipid_f_Pi': 'mM',
        'Km_v_lipid_f_lipid': 'mM',
        'Km_v_lipid_f_pyr': 'mM',
        'Km_v_lipid_f_NH4': 'mM',
        'Km_mannan_ADP': 'mM',
        'Km_mannan_ATP': 'mM',
        'Km_mannan_HexP': 'mM',
        'Km_mannan_Pi': 'mM',
        'Km_mannan_mannan': 'mM',
        'Km_ferm_CO2': 'mM',
        'Km_ferm_NAD': 'mM',
        'Km_ferm_NADH': 'mM',
        'Km_ferm_pyr': 'mM',
        'Km_ferm_EtOH': 'mM',
        'Km_v_glycerol_syn_glycerol': 'mM',
        'Km_v_glycerol_syn_NAD': 'mM',
        'Km_v_glycerol_syn_NADH': 'mM',
        'Km_v_glycerol_syn_Pi': 'mM',
        'Km_v_glycerol_syn_TriP': 'mM',
        'NADNADHcrit': 'mM',
        # 'RNA_stoich': 'dimensionless',
        'k1_ADP_syn': '1/mM',
        'k1_NAD_syn': '1/mM',
        'k1_resp': '1/mM',
        'kf_v_AA_f': '1/s',
        'kf_ADP_syn': '1/(s mM**2)',
        'kf_pyr': '1/s',
        'kf_TriP': '1/s',
        'kf_v_HK': '1/s',
        'kf_NAD_syn': '1/(s mM)',
        # 'kf_NA_DNA': '1/s',
        'kf_v_NA_DNA_syn': '1/s',
        'kf_v_NA_RNA_f': '1/s',
        'kf_v_chitin_f': '1/s',
        'kf_glucan': '1/s',
        'kf_v_lipid_f': '1/s',
        'kf_mannan': '1/s',
        'kf_ferm': '1/s',
        'kf_resp': '1/(s mM**2)',
        'kf_v_glycerol_syn': '1/s',
        'kr_v_AA_f': '1/s',
        'kr_pyr': '1/s',
        'kr_TriP': '1/s',
        'kr_v_HK': '1/s',
        # 'kr_NA_DNA': '1/s',
        'kr_v_NA_DNA_syn': '1/s',
        'kr_v_NA_RNA_f': '1/s',
        'kr_v_chitin_f': '1/s',
        'kr_glucan': '1/s',
        'kr_v_lipid_f': '1/s',
        'kr_mannan': '1/s',
        'kr_ferm': '1/s',
        # 'lipids_stoich': 'dimensionless',
        'kf_TCA': '1/(s mM**3)',
        'kr_v_glycerol_syn': '1/s'}

    modeldict['type'] = 'ODE'

    modeldict['name'] = 'MET_CCM'
    modeldict['initvars'] = initvars
    modeldict['initpars'] = initpars
    modeldict['com_annotations'] = {'cytosol': 'GO:0005829', 'intracellular': 'GO:0044424'}

    modeldict['solvername'] = 'odeint'
    modeldict['reactions'] = reactions
    modeldict['alg_eqs'] = {}
    modeldict['info'] = info

    modeldict['odes'] = YCM_tools.generate_odes_from_reactions(reactions, modeldict['sp_compartment'],
                                                               modeldict['sp_annotations'],
                                                               modeldict['units'], modeldict['com_annotations'])
    return modeldict


"""
 # nucleotide fraction 
## cell composition - DNA (mmol/gDW) - PMID: 12566402
A_per_gDW_DNA = 0.0036
G_per_gDW_DNA = 0.0024
C_per_gDW_DNA = 0.0024
T_per_gDW_DNA = 0.0036
## total
sum_NTs_DNA = T_per_gDW_DNA + A_per_gDW_DNA + G_per_gDW_DNA + C_per_gDW_DNA 
## fraction
frac_A_DNA = A_per_gDW_DNA/sum_NTs_DNA
frac_T_DNA = T_per_gDW_DNA/sum_NTs_DNA
frac_G_DNA = G_per_gDW_DNA/sum_NTs_DNA
frac_C_DNA = C_per_gDW_DNA/sum_NTs_DNA
## number of C atoms
C_A_DNA = 10.
C_T_DNA = 10.
C_G_DNA = 10.
C_C_DNA = 9.
# nucleotide fraction 
## cell components - RNA (mmol/gDW) - PMID: 12566402
A_per_gDW_RNA = 0.051 
U_per_gDW_RNA = 0.067
G_per_gDW_RNA = 0.051
C_per_gDW_RNA = 0.05
## total
sum_NTs_RNA = U_per_gDW_RNA + A_per_gDW_RNA + G_per_gDW_RNA + C_per_gDW_RNA 
## fraction
frac_A_RNA = A_per_gDW_RNA/sum_NTs_RNA
frac_U_RNA = U_per_gDW_RNA/sum_NTs_RNA
frac_G_RNA = G_per_gDW_RNA/sum_NTs_RNA
frac_C_RNA = C_per_gDW_RNA/sum_NTs_RNA
## ## number of C atoms
C_A_RNA = 10.
C_U_RNA = 9.
C_G_RNA = 10.
C_C_RNA = 9.
# stoichiometries
C_TriP = 3.
initpars['DNA_stoich'] = C_TriP / (C_A_DNA*frac_A_DNA + C_T_DNA*frac_T_DNA + C_G_DNA*frac_G_DNA + C_C_DNA*frac_C_DNA) 
initpars['RNA_stoich'] = C_TriP / (C_A_RNA*frac_A_RNA + C_U_RNA*frac_U_RNA + C_G_RNA*frac_G_RNA + C_C_RNA*frac_C_RNA) 
# AA fraction
## cell composition - (mmol/gDW) - PMID: 12566402
AA_ALA_per_gDW = 0.459 
AA_ARG_per_gDW = 0.161 
AA_ASN_per_gDW = 0.102 
AA_ASP_per_gDW = 0.297 
AA_CYS_per_gDW = 0.007 
AA_GLN_per_gDW = 0.105 
AA_GLU_per_gDW = 0.302 
AA_GLY_per_gDW = 0.290 
AA_HIS_per_gDW = 0.066 
AA_ILE_per_gDW = 0.193 
AA_LEU_per_gDW = 0.296 
AA_LYS_per_gDW = 0.286 
AA_MET_per_gDW = 0.051 
AA_PHE_per_gDW = 0.134 
AA_PRO_per_gDW = 0.165 
AA_SER_per_gDW = 0.185 
AA_THR_per_gDW = 0.191 
AA_TRP_per_gDW = 0.028 
AA_TYR_per_gDW = 0.102 
AA_VAL_per_gDW = 0.265 
## total
sum_AA = AA_ALA_per_gDW + AA_ARG_per_gDW + AA_ASN_per_gDW + AA_ASP_per_gDW + AA_CYS_per_gDW + AA_GLN_per_gDW + AA_GLU_per_gDW + AA_GLY_per_gDW + AA_HIS_per_gDW + AA_ILE_per_gDW + AA_LEU_per_gDW + AA_LYS_per_gDW + AA_MET_per_gDW + AA_PHE_per_gDW + AA_PRO_per_gDW + AA_SER_per_gDW + AA_THR_per_gDW + AA_TRP_per_gDW + AA_TYR_per_gDW + AA_VAL_per_gDW
## fraction
frac_AA_ALA = AA_ALA_per_gDW / sum_AA
frac_AA_ARG = AA_ARG_per_gDW / sum_AA
frac_AA_ASN = AA_ASN_per_gDW / sum_AA
frac_AA_ASP = AA_ASP_per_gDW / sum_AA
frac_AA_CYS = AA_CYS_per_gDW / sum_AA
frac_AA_GLN = AA_GLN_per_gDW / sum_AA
frac_AA_GLU = AA_GLU_per_gDW / sum_AA
frac_AA_GLY = AA_GLY_per_gDW / sum_AA
frac_AA_HIS = AA_HIS_per_gDW / sum_AA
frac_AA_ILE = AA_ILE_per_gDW / sum_AA
frac_AA_LEU = AA_LEU_per_gDW / sum_AA
frac_AA_LYS = AA_LYS_per_gDW / sum_AA
frac_AA_MET = AA_MET_per_gDW / sum_AA
frac_AA_PHE = AA_PHE_per_gDW / sum_AA
frac_AA_PRO = AA_PRO_per_gDW / sum_AA
frac_AA_SER = AA_SER_per_gDW / sum_AA
frac_AA_THR = AA_THR_per_gDW / sum_AA
frac_AA_TRP = AA_TRP_per_gDW / sum_AA
frac_AA_TYR = AA_TYR_per_gDW / sum_AA
frac_AA_VAL = AA_VAL_per_gDW / sum_AA
# number of C atoms
C_AA_ALA = 3.
C_AA_ARG = 6.
C_AA_ASN = 4.
C_AA_ASP = 4.
C_AA_CYS = 3.
C_AA_GLN = 5.
C_AA_GLU = 5.
C_AA_GLY = 2.
C_AA_HIS = 6.
C_AA_ILE = 6.
C_AA_LEU = 6.
C_AA_LYS = 6.
C_AA_MET = 5.
C_AA_PHE = 9.
C_AA_PRO = 5.
C_AA_SER = 3.
C_AA_THR = 4.
C_AA_TRP = 11.
C_AA_TYR = 9.
C_AA_VAL = 5.
# lipid fraction 
## cell components - (mmol/gDW) - PMID: 12566402
lipid_TAG_per_gDW = 0.0066
lipid_Ergost_per_gDW = 0.007
lipid_Zymost_per_gDW = 0.015
lipid_PA_per_gDW = 0.0006
lipid_PiNS_per_gDW = 0.0053
lipid_PS_per_gDW = 0.0017
lipid_PE_per_gDW = 0.0048
lipid_PC_per_gDW = 0.006
## total
sum_lipids = lipid_TAG_per_gDW + lipid_Ergost_per_gDW + lipid_Zymost_per_gDW + lipid_PA_per_gDW + lipid_PiNS_per_gDW + lipid_PS_per_gDW + lipid_PE_per_gDW + lipid_PC_per_gDW
## fractions
frac_lipid_TAG = lipid_TAG_per_gDW / sum_lipids
frac_lipid_Ergost = lipid_Ergost_per_gDW / sum_lipids
frac_lipid_Zymost = lipid_Zymost_per_gDW / sum_lipids
frac_lipid_PA = lipid_PA_per_gDW / sum_lipids
frac_lipid_PiNS = lipid_PiNS_per_gDW / sum_lipids
frac_lipid_PS = lipid_PS_per_gDW / sum_lipids
frac_lipid_PE = lipid_PE_per_gDW / sum_lipids
frac_lipid_PC = lipid_PC_per_gDW / sum_lipids
## number of C atoms
## average fatty acid chain length: 17 C atoms
C_lipid_TAG = 3.+3.*17.  # 3 C backbone, 3 times average fatty acid chain
C_lipid_Ergost = 28.
C_lipid_Zymost = 27.
C_lipid_PA = 3.+2.*17.  # 3 C backbone, 2 times average fatty acid chain
C_lipid_PiNS = 6.+3.+2.*17.  # 6 C sugar, 3 C backbone, 2 times average fatty acid chain
C_lipid_PS = 3.+3.+2.*17.  # 3 C serine, 3 C backbone, 2 times average fatty acid chain
C_lipid_PE = 2.+3.+2.*17.  # 2 C ethanolamine, 3 C backbone, 2 times average fatty acid chain
C_lipid_PC = 2.+3.+2.*17.  # 2 C choline, 3 C backbone, 2 times average fatty acid chain
# stoichiometries
C_pyr = 3.
initpars['lipids_stoich'] = C_pyr / (C_lipid_TAG*frac_lipid_TAG + C_lipid_Ergost*frac_lipid_Ergost + C_lipid_Zymost*frac_lipid_Zymost + C_lipid_PA*frac_lipid_PA + C_lipid_PiNS*frac_lipid_PiNS + C_lipid_PS*frac_lipid_PS + C_lipid_PE*frac_lipid_PE + C_lipid_PC*frac_lipid_PC)
initpars['AA_stoich'] = C_pyr / (C_AA_ALA*frac_AA_ALA + C_AA_ARG*frac_AA_ARG + C_AA_ASN*frac_AA_ASN + C_AA_ASP*frac_AA_ASP + C_AA_CYS*frac_AA_CYS + C_AA_GLN*frac_AA_GLN + C_AA_GLU*frac_AA_GLU + C_AA_GLY*frac_AA_GLY + C_AA_HIS*frac_AA_HIS + C_AA_ILE*frac_AA_ILE + C_AA_LEU*frac_AA_LEU + C_AA_LYS*frac_AA_LYS + C_AA_MET*frac_AA_MET + C_AA_PHE*frac_AA_PHE + C_AA_PRO*frac_AA_PRO + C_AA_SER*frac_AA_SER + C_AA_THR*frac_AA_THR + C_AA_TRP*frac_AA_TRP + C_AA_TYR*frac_AA_TYR + C_AA_VAL*frac_AA_VAL)
"""