import GenerateODEsFromReactions as YCM_tools


def VOL_core():
    info = "Volume regulation including bud model by Tom Altenburg, Jannis Uhlendorf"
    # initial paramters
    initpars = {}
    initvars = {}
    alg_eqs = {}
    odes = {}
    reactions = {}

    initpars['N_A'] = 6.022140857e23
    initpars['R'] = 8.3144621  # J K^-1 mol^-1
    initpars['T'] = 303.15  # K
    initpars['Lp'] = 1.19e-6  # um s^-1 Pa^-1 #Martinez 1997
    initpars['d'] = 1.0e-1  # um  # cw  # former 1e-1  # 0.7e-1 says Srinorakutara 1998
    initpars['V_b0_mother'] = 10.0e-15  # L   # Klipp 2005
    initpars['V_b0_bud'] = 1.0e-15  # L
    # initpars['p_tc0']        = 8.75e5             # Pa
    initpars['eps'] = 10.e6  # Pa
    initpars['phi'] = 1.e-9  # 1/(Pa s)
    initpars['rho_cw'] = 1.1  # pg/fL
    initpars['m_cw0'] = 5.4  # pg
    initpars['pi'] = 3.141592653589793  # Pi
    initpars['nuc_ratio'] = 0.07  # percentage of cell vol
    initpars['vac_ratio'] = 0.2  # percentage of cell vol
    initpars['strain_crit0'] = 0.02
    initpars['k_diff_c'] = 1.  # diffusion coefficient for general internal osmolyte
    initpars['k_diff_v'] = 1.  # volume exchange coefficient
    initpars['q'] = 0.9  # factor: eps_bud percentage of eps_mother
    initpars[
        'budding_true'] = 1.  # set switch to (1.): bud growth, e.g. from bud initiation or (0.): only mother cell growth

    # preliminary TODO: replace these
    initpars['c_e'] = 500.  # mM
    initpars['k_nutrient'] = 0.03  # mM s**-1 um**-2
    # initpars['k_mass_cw']     = 0.5
    # initpars['division_time'] = 7200.             # s
    # initpars['V_ext']         = 1

    # initial values
    initvars['c_i_mother'] = 600.  # mM
    initvars['c_i_bud'] = 600.  # mM
    initvars['V_os_mother'] = 20.0e-15  # L <=> um**3 initpars['V_os0']    # um**3
    initvars['V_os_bud'] = 1.0e-15  # L <=> um**3 initpars['V_os0']    # um**3
    # initvars['p_t']       =   8.75e5              # Pa
    initvars['p_t_mother'] = 2.0e5  # Pa
    initvars['p_t_bud'] = 2.0e5  # Pa
    # initvars['p_tc']      = initpars['p_tc0']
    initvars['strain_crit'] = initpars['strain_crit0']
    initvars['V_t_mother'] = initvars['V_os_mother'] + initpars['V_b0_mother']  # L
    initvars['V_t_bud'] = initvars['V_os_bud'] + initpars['V_b0_bud']  # L
    initvars['V_b_mother'] = initpars['V_b0_mother']
    initvars['V_b_bud'] = initpars['V_b0_bud']
    initvars['p_e'] = initpars['c_e'] * initpars['R'] * initpars['T']  # Pa
    initvars['p_i_mother'] = initvars['c_i_mother'] * initpars['R'] * initpars['T']  # Pa
    initvars['p_i_bud'] = initvars['c_i_bud'] * initpars['R'] * initpars['T']  # Pa
    initvars['m_cw_bud'] = initpars['m_cw0']
    initvars['m_cw_mother'] = initpars['m_cw0']
    initvars['extracellular_vol'] = 1e-2  # L = 10 mL
    initvars['V_cw_mother'] = (4. / 3.) * initpars['pi'] * ((3. / (4. * initpars['pi']) * initvars[
        'V_t_mother'] * 1e15) ** (1. / 3.) + initpars['d']) ** 3. - initvars['V_t_mother'] * 1e15
    initvars['V_cw_bud'] = (4. / 3.) * initpars['pi'] * ((3. / (4. * initpars['pi']) * initvars['V_t_bud'] * 1e15) ** (
    1. / 3.) + initpars['d']) ** 3. - initvars['V_t_bud'] * 1e15
    initvars['nuc_vol_mother'] = initpars['nuc_ratio'] * initvars['V_t_mother']  # L
    initvars['vac_vol_mother'] = initpars['vac_ratio'] * initvars['V_t_mother']  # L
    initvars['cyt_vol_mother'] = initvars['V_t_mother'] - (initvars['nuc_vol_mother'] + initvars['vac_vol_mother'])
    initvars['int_vol_mother'] = initvars['nuc_vol_mother'] + initvars['cyt_vol_mother']
    initvars['growth_rate'] = (-(initpars['Lp'] * (
    (4. * initpars['pi']) ** (1. / 3.) * (3. * (initvars['V_os_mother'] + initvars['V_b_mother']) * 1e15) ** (
    2. / 3.)) * (initvars['p_t_mother'] + initvars['p_e'] - initvars['p_i_mother'])) - (
                               initpars['k_diff_v'] * initpars['budding_true']) * (
                               initvars['p_t_mother'] - initvars['p_t_bud'])) * 1e-15

    # initvars['nuc_vol_bud']      = initpars['nuc_ratio'] * initvars['V_t_bud']

    # V_t - total volume
    # V_b - incompressible volume
    # V_os- osmotic volume
    # V_0 - conceptional Volume: V_os=V_0 when turgor pressure = zero


    # computations
    G_mother = '((4. * pi) ** (1. / 3.) * (3. * (V_os_mother + V_b_mother)*1e15) ** (2. / 3.))'  # um**2
    G_bud = '((4. * pi) ** (1. / 3.) * (3. * (V_os_bud + V_b_bud)*1e15) ** (2. / 3.))'  # um**2
    Jw_mother = '(Lp * %(G_mother)s * (p_t_mother + p_e - p_i_mother))' % {'G_mother': G_mother}
    Jw_bud = '(Lp * %(G_bud)s * (p_t_bud + p_e - p_i_bud))' % {'G_bud': G_bud}

    radius_mother = '(3./4./pi * V_t_mother*1e15)**(1./3.)'
    radius_bud = '(3./4./pi * V_t_bud*1e15)**(1./3.)'
    # V_cw='V_t - (4. / 3.) * pi * (%(radius)s - d) ** 3.'%{'radius':radius} # volume of cell cell wall
    # alg_eqs['SURFACE'] = '4*pi*(%(radius)s)**2' %{'radius': radius}

    # algebraic equations
    alg_eqs['V_t_mother'] = '(V_os_mother + V_b_mother)'
    alg_eqs['V_t_bud'] = '(V_os_bud + V_b_bud)'
    alg_eqs['p_e'] = 'c_e * R * T'  # Pa
    alg_eqs['p_i_mother'] = 'c_i_mother * R * T'  # Pa #'(598.5 + glucose_cyt)*R*T' #
    alg_eqs['p_i_bud'] = 'c_i_bud * R * T'  # Pa #'(598.5 + glucose_cyt)*R*T' #
    # alg_eqs['p_tc']     = 'p_tc0 * ((rho_cw * V_cw) / m_cw)'
    alg_eqs['strain_crit'] = 'strain_crit0 * ((rho_cw * V_cw_mother) / m_cw_mother)'  # 2nd term to couple VOL to CWS
    alg_eqs['V_b_mother'] = 'V_b0_mother'  # + (m_cw/50.)'
    alg_eqs['V_b_bud'] = 'V_b0_bud'  # + (m_cw/50.)'
    alg_eqs['V_cw_mother'] = '((4. / 3.) * pi * (%(radius_mother)s + d) ** 3. - V_t_mother*1e15)*1e-15' % {
        'radius_mother': radius_mother}  # volume of cell wall
    alg_eqs['V_cw_bud'] = '((4. / 3.) * pi * (%(radius_bud)s + d) ** 3. - V_t_bud*1e15)*1e-15' % {
        'radius_bud': radius_bud}  # volume of cell wall
    alg_eqs['nuc_vol_mother'] = 'nuc_ratio * V_t_mother'
    alg_eqs['vac_vol_mother'] = 'vac_ratio * V_t_mother'
    # alg_eqs['nuc_vol_bud']    = 'nuc_ratio * V_t_bud'
    # alg_eqs['n_mother']        = 'c_i_mother * V_os_mother * 6.022e20'
    # alg_eqs['n_bud']           = 'c_i_bud * V_os_bud * 6.022e20'
    alg_eqs['cyt_vol_mother'] = 'V_t_mother - (nuc_vol_mother + vac_vol_mother)'
    alg_eqs['int_vol_mother'] = 'nuc_vol_mother + cyt_vol_mother'
    alg_eqs['growth_rate'] = '(-(%(Jw_mother)s) - (k_diff_v * budding_true) * (p_t_mother - p_t_bud))*1e-15' % {
        'Jw_mother': Jw_mother}

    # ODEs
    for key in initvars.keys():
        odes[key] = '0'

    odes['V_os_mother'] = '(-(%(Jw_mother)s) - (k_diff_v * budding_true) * (p_t_mother - p_t_bud))*1e-15' % {
        'Jw_mother': Jw_mother}
    odes['V_os_bud'] = '(-(%(Jw_bud)s) + (k_diff_v * budding_true) * (p_t_mother - p_t_bud))*1e-15' % {'Jw_bud': Jw_bud}

    odes['V_b_mother'] = '0.'
    odes['V_b_bud'] = '0.'

    # odes['V_os_mother']    = '(-k_diff_v) * (p_t_mother - p_t_bud)' %{'Jw_mother':Jw_mother}
    # odes['V_os_bud']    = 'k_diff_v * (p_t_mother - p_t_bud)' %{'Jw_bud':Jw_bud}

    # odes['V_os_mother']    = '-(%(Jw_mother)s)' %{'Jw_mother':Jw_mother}
    # odes['V_os_bud']    = '-(%(Jw_bud)s)' %{'Jw_bud':Jw_bud}

    # odes['V_os']    = '50./7200.'
    # odes['c_i'] = 'k_nutrient * (%(G)s)/V_os'  %{'G': G}
    # odes['c_i'] = 'k_nutrient * SURFACE / V_os'
    odes[
        'p_t_mother'] = 'eps*2*d/3./(%(radius_mother)s) * (((%(d_V_os_mother)s) + (%(d_V_b_mother)s))/V_t_mother) - eps*phi*max(p_t_mother-eps*strain_crit,0) - p_t_mother/3./V_t_mother*((%(d_V_os_mother)s) + ((%(d_V_b_mother)s) ))' % {
        'radius_mother': radius_mother,
        'd_V_os_mother': odes['V_os_mother'],
        'd_V_b_mother': odes['V_b_mother']}
    odes[
        'p_t_bud'] = 'eps*q*2*d/3./(%(radius_bud)s) * (((%(d_V_os_bud)s) + (%(d_V_b_bud)s))/V_t_bud) - eps*(q ** budding_true)*phi*max(p_t_bud-eps*q*strain_crit,0) - p_t_bud/3./V_t_bud*((%(d_V_os_bud)s) + ((%(d_V_b_bud)s) ))' % {
        'radius_bud': radius_bud,
        'd_V_os_bud': odes['V_os_bud'],
        'd_V_b_bud': odes['V_b_bud']}
    # odes['p_t_mother'] = '0.'
    # odes['p_t_bud'] = '0.'
    # odes['m_cw'] = 'k_mass_cw / division_time * m_cw0'
    # odes['c_i_mother'] = '0'
    # odes['c_i_bud'] = '0'
    odes['m_cw_mother'] = '0'
    odes['m_cw_bud'] = '0'

    V_ratio_mother = '(%(d_V_os_mother)s) / V_os_mother' % {'d_V_os_mother': odes['V_os_mother']}
    V_ratio_bud = '(%(d_V_os_bud)s) / V_os_bud' % {'d_V_os_bud': odes['V_os_bud']}

    ### TODO: omit Dilution-Term '- c_i_mother * (%(V_ratio_mother)s)', already implemented in YCM and managed by YCM -> YCM_OSMO?

    # odes['c_i_mother'] = 'k_nutrient * (%(G_mother)s)/(V_os_mother*1e15) + (- k_diff_c * budding_true) * (c_i_mother - c_i_bud)/(V_os_mother*1e15) - c_i_mother * (%(V_ratio_mother)s)' %{'V_ratio_mother': V_ratio_mother, 'G_mother': G_mother}
    odes[
        'c_i_bud'] = '(k_nutrient * budding_true)  * (%(G_bud)s)/(V_os_bud*1e15) + (k_diff_c * budding_true) * (c_i_mother - c_i_bud)/(V_os_bud*1e15) - c_i_bud * (%(V_ratio_bud)s)' % {
        'V_ratio_bud': V_ratio_bud, 'G_bud': G_bud}

    # reactions['v_osmodif1'] = {'rate': {}, 'substrates': {}, 'products': {}, 'modifiers': {}}
    # reactions['v_osmodif1']['rate'] = 'k_diff_c * (c_i_mother - c_i_bud)'
    # reactions['v_osmodif1']['substrates'] = {'c_i_mother': 1.}
    # reactions['v_osmodif1']['products'] = {'c_i_bud': 1.}

    # reactions['v_osmodif2'] = {'rate': {}, 'substrates': {}, 'products': {}, 'modifiers': {}}
    # reactions['v_osmodif2']['rate'] = '- k_diff_c * (c_i_mother - c_i_bud)'
    # reactions['v_osmodif2']['substrates'] = {'c_i_bud: 1.'}
    # reactions['v_osmodif2']['products'] = {'c_i_mother: 1.'}

    # reactions['v_nutrient_mother'] = {'rate': {}, 'substrates': {}, 'products': {}, 'modifiers': {}}
    # reactions['v_nutrient_mother']['rate'] = '0.'#'k_nutrient * %(G_mother)s / N_A' %{'G_mother':G_mother}
    # reactions['v_nutrient_mother']['substrates'] = {}
    # reactions['v_nutrient_mother']['products'] = {'c_i_mother': 1.}

    # reactions['v_nutrient_bud'] = {'rate': {}, 'substrates': {}, 'products': {}, 'modifiers': {}}
    # reactions['v_nutrient_bud']['rate'] = '0.'#'k_nutrient * %(G_bud)s / N_A' %{'G_bud':G_bud}
    # reactions['v_nutrient_bud']['substrates'] = {}
    # reactions['v_nutrient_bud']['products'] = {'c_i_bud': 1.}

    modeldict = {}
    modeldict['name'] = 'VOL_core'
    modeldict['initvars'] = initvars
    modeldict['initpars'] = initpars
    # modeldict['odes'] = odes



    modeldict['alg_eqs'] = alg_eqs

    modeldict['sp_states'] = {'V_os_mother': '0',
                              'V_os_bud': '0',
                              'V_t_mother': '0',
                              'V_t_bud': '0',
                              'V_b_mother': '0',
                              'V_b_bud': '0',
                              # 'V_0':                         '0',
                              'p_i_mother': '0',
                              'p_i_bud': '0',
                              'p_e': '0',
                              'p_t_mother': '0',
                              'p_t_bud': '0',
                              'strain_crit': '0',
                              'c_i_mother': '0',
                              'c_i_bud': '0',
                              'm_cw_mother': '0',
                              'm_cw_bud': '0',
                              # 'SURFACE':                     '0',
                              'extracellular_vol': '0',
                              'V_cw_mother': '0',
                              'V_cw_bud': '0',
                              'nuc_vol_mother': '0',
                              'cyt_vol_mother': '0',
                              'vac_vol_mother': '0',
                              'int_vol_mother': '0',
                              'growth_rate': '0'}
    # 'nuc_vol_bud':                 '0'}

    modeldict['sp_compartment'] = {'V_os_mother': 'cell',
                                   'V_t_mother': 'cell',
                                   'V_b_mother': 'cell',
                                   # 'V_0':                         'cell',
                                   'p_i_mother': 'cell',
                                   'p_e': 'extracellular',
                                   'p_t_mother': 'cell',
                                   'V_os_bud': 'bud',
                                   'V_t_bud': 'bud',
                                   'V_b_bud': 'bud',
                                   'p_i_bud': 'bud',
                                   'p_t_bud': 'bud',
                                   'strain_crit': 'cell',
                                   'c_i_mother': 'cell',
                                   'c_i_bud': 'bud',
                                   'm_cw_mother': 'cell_wall',
                                   'm_cw_bud': 'bud_tip_cw',
                                   # 'SURFACE':                     'cell',
                                   'extracellular_vol': 'extracellular',
                                   'V_cw_mother': 'cell_wall',
                                   'nuc_vol_mother': 'nucleus',
                                   'vac_vol_mother': 'vacuole',
                                   'int_vol_mother': 'intracellular',
                                   'V_cw_bud': 'bud_tip_cw',
                                   'cyt_vol_mother': 'cytosol',
                                   'growth_rate': 'cell'}
    # 'nuc_vol_bud':                 'nucleus'}

    modeldict['sp_annotations'] = {'V_os_mother': 'YCM:volume_osmotic',
                                   'V_t_mother': 'SBO:0000468',
                                   'c_i_mother': 'YCM:OSMO',
                                   'm_cw_mother': 'SBO:0000504',
                                   'p_t_mother': 'SBO:0000279',
                                   'strain_crit': 'YCM:strain_critical',
                                   'V_b_mother': 'YCM:volume_incompressible',
                                   # 'V_0':                         'YCM:volume_zero',
                                   'p_i_mother': 'YCM:osmotic_pressure_int',
                                   'p_e': 'YCM:osmotic_pressure_ext',
                                   # 'SURFACE':                     'SBO:0000467',
                                   'extracellular_vol': 'SBO:0000468',
                                   'V_cw_mother': 'SBO:0000468',
                                   'nuc_vol_mother': 'SBO:0000468',
                                   'V_os_bud': 'YCM:volume_osmotic',
                                   'V_t_bud': 'SBO:0000468',
                                   'c_i_bud': 'YCM:OSMO',
                                   'm_cw_bud': 'SBO:0000504',
                                   'p_t_bud': 'SBO:0000279',
                                   'V_b_bud': 'YCM:volume_incompressible',
                                   'p_i_bud': 'YCM:osmotic_pressure_int',
                                   'V_cw_bud': 'SBO:0000468',
                                   'cyt_vol_mother': 'SBO:0000468',
                                   'vac_vol_mother': 'SBO:0000468',
                                   'int_vol_mother': 'SBO:0000468',
                                   'growth_rate': 'SBO:0000610'}
    # 'nuc_vol_bud':                 'SBO:0000468_nuc_vol_bud'}

    modeldict['units'] = {'V_os_mother': 'L',
                          'V_t_mother': 'L',
                          'V_b_mother': 'L',
                          # 'V_0':                         'L',
                          'p_i_mother': 'Pa',
                          'p_e': 'Pa',
                          'p_t_mother': 'Pa',
                          'strain_crit': 'dimensionless',
                          'c_i_mother': 'mM',
                          'm_cw_mother': 'pg',
                          # 'SURFACE':                     'um**2',
                          'extracellular_vol': 'L',
                          'V_cw_mother': 'L',
                          'nuc_vol_mother': 'L',
                          'V_os_bud': 'L',
                          'V_t_bud': 'L',
                          'V_b_bud': 'L',
                          'p_i_bud': 'Pa',
                          'p_t_bud': 'Pa',
                          'c_i_bud': 'mM',
                          'm_cw_bud': 'pg',
                          'V_cw_bud': 'L',
                          'cyt_vol_mother': 'L',
                          'int_vol_mother': 'L',
                          'vac_vol_mother': 'L',
                          'growth_rate': 'L/s'}
    # 'nuc_vol_bud':                 'fL'}

    modeldict['units_pars'] = {'Lp': 'um s**-1 Pa**-1',
                               'R': 'J K**-1 mol**-1',
                               'T': 'K',
                               'V_b0_mother': 'um**3',
                               'V_b0_bud': 'um**3',
                               'c_e': 'mM',
                               'd': 'um',
                               'eps': 'Pa',
                               'k_nutrient': 'mM/(s um**2)',
                               'm_cw0': 'pg',
                               #                                'p_tc0': 'Pa',
                               'phi': '1/(s Pa)',
                               'pi': 'dimensionless',
                               'rho_cw': 'pg/fL',
                               'nuc_ratio': 'dimensionless',
                               'vac_ratio': 'dimensionless',
                               'k_diff_v': 'dimensionless',
                               'k_diff_c': 'dimensionless',
                               'budding_true': 'dimensionless',
                               'q': 'dimensionless',
                               'N_A': 'molecules/mol',
                               'strain_crit0': 'dimensionless'}

    modeldict['com_annotations'] = {'cytosol': 'GO:0005829',
                                    'bud': 'GO:0005933',
                                    'extracellular': 'GO:0005576',
                                    'cell': 'GO:0005623',
                                    'cell_wall': 'GO:0005618',
                                    'bud_tip_cw': 'GO:0005934',
                                    'nucleus': 'GO:0005634',
                                    'vacuole': 'GO:0005773',
                                    'intracellular': 'GO:0044424'}

    # added for conversion to SBML - Jens 16/04/2015
    modeldict['reactions'] = reactions
    # modeldict['odes'] = YCM_tools.generate_odes_from_reactions(reactions, modeldict['sp_compartment'],
    #                                                           modeldict['sp_annotations'], modeldict['units'],
    #                                                           modeldict['com_annotations'])

    #modeldict['odes'].update(odes)

    modeldict['info'] = info
    modeldict['type'] = 'ODE'


    return modeldict