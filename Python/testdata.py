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