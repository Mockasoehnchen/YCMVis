# from ...simulation.tools import GenerateODEsFromReactions as YCM_tools
from math import exp
from math import pi


def VOL_core_growth_single_vol():
    info = "Volume test growth - New Volume model"

    initpars = {}
    initvars = {}
    odes = {}
    reactions = {}

    nu = 0.5
    E_3D = 2.58e6  # unit Pa, measured Young's modulus (Goldenbogen & Giese et al. 2016)
    modulus_adjustment = (1 - nu ** 2) ** (
    -1)  # dimensionless, conversion from 3D to 2D Youngs modulus (Goldenbogen, Giese 2016  )

    # initial paramters
    initpars['d'] = 0.115  # {\mu m} cell wall thickness
    initpars['phi'] = 1.e-4  # Pa**{-1} s**{-1}, cell wall extensibility (fitted Altenburg 2018)
    initpars['pi_c'] = 2.e5  # Pa , critical turgor pressure
    initpars['Lp'] = 1.19e-6  # {\mu m}**{-1} s**{-1} Pa**{-1} hydraulic conductivity
    initpars['nu'] = nu  # dimensionless, Poisson's ratio
    initpars['E'] = modulus_adjustment * E_3D  # adjusted to 2D Young's modulus (surface)
    initpars['R'] = 8.314  # J mol**{-1} K**{-1}, ideal gas constant
    initpars['T'] = 303.  # K, temperature (30 degrees celcius)
    initpars['k_uptake'] = 2.e-16  # mmol s**{-1} {\mu m}**{-2}
    initpars['k_consumption'] = 2.5e-16  # s**{-1} {\mu m}**{-3} # [was multiplied with mmol -> check with Tom]
    initpars[
        'c_e'] = 240.  # mM measured synthetic dropout medium 2% Glucose, amino acids added -> atm this is used as an ODE, can be included as a parameter here as well!

    # Terms from Altenburg et.al. that are not used:
    # dV_exchange = 0;
    # dr_exchange := ((V_tot_fl + dV_exchange)*3/4/pi)**(1/3) - r;


    # initial values
    initvars[
        'pi_t'] = 200000.119294  # Reworked to fit our cell of 20fL; Initial value for bud-volume (as in Altenburg et.al.): 2.e5 # Pa, turgor pressure
    initvars[
        'pi_e'] = 604594.08  # Reworked to fit our cell of 20fL; Initial value for bud-volume (as in Altenburg et.al.): initpars['c_e'] * initpars['R'] * initpars['T']
    initvars[
        'pi_i'] = 804731.222361  # Reworked to fit our cell of 20fL; Initial value for bud-volume (as in Altenburg et.al.): initvars['c_i'] / initvars['V'] * initpars['R'] * initpars['T']

    initvars[
        'r_os'] = 1.18773900649  # Reworked to fit our cell of 20fL; Initial value for bud-volume (as in Altenburg et.al.): 0.1
    initvars[
        'r_b'] = 0.496161324363  # Reworked to fit our cell of 20fL; Initial value for bud-volume (as in Altenburg et.al.): 0.3
    initvars[
        'r'] = 1.68390033085  # Reworked to fit our cell of 20fL; Initial value for bud-volume (as in Altenburg et.al.): 0.4
    initvars[
        'R_ref'] = 1.36108685239  # Reworked to fit our cell of 20fL; Initial value for bud-volume (as in Altenburg et.al.): 0.4 /(exp(2.e5 *0.4 * (1.-nu) / (2. * 0.115 * modulus_adjustment * E_3D) ))   # initvars['r'] / exp(initvars['pi_t']  * initvars['r'] * (1.-nu) / (2. * initpars['d'] * initpars['E']))# {\mu m}, berrechnen
    initvars[
        'dr_os'] = 0.000163057450083  # Reworked to fit our cell of 20fL; Initial value for bud-volume (as in Altenburg et.al.): - 1.19e-6 * ( 2.e5 + initvars['pi_e'] - initvars['pi_i'])
    initvars[
        'dR_ref'] = 0.000118875228377  # Reworked to fit our cell of 20fL; Initial value for bud-volume (as in Altenburg et.al.): 0  # initvars['r'] / exp(initvars['pi_t']  * initvars['r'] * (1.-nu) / (2. * initpars['d'] * initpars['E']))# {\mu m}, berrechnen

    initvars[
        'c_i'] = 6.38904517734e-12  # Reworked to fit our cell of 20fL; Initial value for bud-volume (as in Altenburg et.al.): 319.17 * initvars['V'] # mmol, internal concentration of osmolytes
    # initvars['c_e'] = 240.                     # mM measured synthetic dropout medium 2% Glucose, amino acids added -> for now used as a parameter, not a species/alg_equ

    initvars[
        'V'] = 2.0000357385e-14  # Reworked to fit our cell of 20fL; Initial value for bud-volume (as in Altenburg et.al.): 4./3. * pi * 10**(-15) * initvars['r']**3.
    initvars[
        'V_ref'] = 1.05619990949e-14  # Reworked to fit our cell of 20fL; Initial value for bud-volume (as in Altenburg et.al.): 4./3. * pi * 10**(-15) * initvars['R_ref']**3.
    initvars[
        'int_vol'] = 1.6e-14  # Reworked to fit our cell of 20fL; Initial value for bud-volume (as in Altenburg et.al.): 0.8 * initvars['V']

    initvars[
        'G'] = 35.6321992791  # Reworked to fit our cell of 20fL; Initial value for bud-volume (as in Altenburg et.al.): 4. * pi * initvars['r']**2.

    ### algebraic equations
    alg_eqs = {}
    alg_eqs['V'] = '(4. / 3. * pi * 10**(-15) * r**3.)'
    alg_eqs['V_ref'] = '(4. / 3. * pi * 10**(-15) * R_ref**3.)'
    alg_eqs['G'] = '(4. * pi * r**2.)'

    alg_eqs['pi_i'] = '(c_i /V * R * T)'
    alg_eqs['pi_e'] = '(c_e * R * T)'

    alg_eqs['r'] = '(r_os + r_b)'
    alg_eqs['dr'] = '(0.2 * dR_ref - Lp * (pi_t + pi_e - pi_i))'
    alg_eqs['dr_b'] = '(0.2 * dR_ref)'  # dr_b = '0.2 * phi * R_ref * r / (2.0 * d) * maximum(pi_t - pi_c, 0.0)'
    alg_eqs['dr_os'] = '(- Lp * (pi_t + pi_e - pi_i))'  # + dr_exchange'
    alg_eqs['dR_ref'] = '(phi * R_ref * r / (2.0 * d) * maximum(pi_t - pi_c, 0.0))'

    alg_eqs['int_vol'] = '(0.8 * V)'  # 80% of volume in L

    # ODEs
    odes[
        'c_i'] = 'k_uptake * G - k_consumption * V *(10**(15))'  # - c_i /V * (G * (0.2 * phi * R_ref * r / (2.0 * d) * maximum(pi_t - pi_c, 0.0) - Lp * (pi_t + pi_e - pi_i)) )'#  with dilution term c_i*dV/dt = c_i*(G*dr/dt)
    odes['r_os'] = alg_eqs['dr_os']  # '- Lp * (pi_t + pi_e - pi_i)'  # + dr_exchange'
    odes['r_b'] = alg_eqs['dr_b']  # '0.2 * phi * R_ref * r / (2.0 * d) * maximum(pi_t - pi_c, 0.0)'
    odes[
        'pi_t'] = 'E * 2.0 * d / (1-nu) * ( (0.2 * phi * R_ref * r / (2.0 * d) * maximum(pi_t - pi_c, 0.0) - Lp * (pi_t + pi_e - pi_i)) / r**2 - (phi * R_ref * r / (2.0 * d) * maximum(pi_t - pi_c, 0.0)) / (R_ref * r) ) - (0.2 * phi * R_ref * r / (2.0 * d) * maximum(pi_t - pi_c, 0.0) - Lp * (pi_t + pi_e - pi_i)) / r * pi_t'
    odes['R_ref'] = alg_eqs['dR_ref']  # 'phi * R_ref * r / (2.0 * d) * maximum(pi_t - pi_c, 0.0)'

    # odes['c_e'] = '0'  # external osmolarity (could be changed for tests, e.g. osm-shock ... for now set as a parameter (see initpars!)

    # ODEs from alg_eqs
    odes['V'] = '0'
    odes['V_ref'] = '0'
    odes['G'] = '0'
    odes['dR_ref'] = '0'
    odes['pi_i'] = '0'
    odes['pi_e'] = '0'
    odes[
        'r'] = '0'  # alg_eqs['dr'] = '0.2 * phi * R_ref * r / (2.0 * d) * maximum(pi_t - pi_c, 0.0) - Lp * (pi_t + pi_e - pi_i)'
    odes['dr'] = '0'
    odes['dr_b'] = '0'
    odes['dr_os'] = '0'

    odes['int_vol'] = '0'

    module_dict = {}
    module_dict['name'] = 'VOL_core_growth_single_vol'
    module_dict['initvars'] = initvars
    module_dict['initpars'] = initpars
    module_dict['odes'] = odes
    module_dict['alg_eqs'] = alg_eqs

    module_dict['units_pars'] = {'d': 'mu m',
                                 'phi': 'Pa**(-1) s**(-1)',
                                 'Pi_c': 'Pa',
                                 'Lp': '(mu m)**(-1) s**(-1) Pa**(-1)',
                                 'nu': ' dimensionless',
                                 'E': 'Pa',
                                 'R': 'J mol**(-1) K**(-1)',
                                 'T': 'K',
                                 'k_uptake': ' mmol s**(-1) (mu m)**(-2)',
                                 'k_consumption': ' mmol s**(-1) (mu m)**(-3)',
                                 }

    module_dict['units'] = {'int_vol': 'L',
                            'r_os': 'mu m',
                            'r_b': 'mu m',
                            'r': 'mu m',
                            'pi_t': 'Pa',
                            'R_ref': 'mu m',
                            'c_i': 'mmol',
                            'dR_ref': '(mu m)/s',
                            # 'c_e' : 'mmol',
                            'pi_e': 'Pa',
                            'pi_i': 'Pa',
                            'V': 'L',
                            'V_ref': 'L',
                            'G': '(mu m)**2',
                            'dr_os': 'mu m / s',
                            'dR_ref': 'mu m / s',
                            'dr_b': 'mu m / s',
                            'dr': 'mu m / s',
                            }

    module_dict['sp_annotations'] = {'int_vol': 'SBO:0000468',
                                     'r_os': 'SBO:0000466',
                                     'r_b': 'SBO:0000466',
                                     'r': 'SBO:0000466',
                                     'pi_t': 'SBO:0000279',
                                     'R_ref': 'YCM:radius_relaxed_volume',
                                     'c_i': 'YCM:internal_osmolarity',
                                     'dR_ref': 'YCM:dxdt_radius_relaxed_volume',
                                     # 'c_e' : 'YCM:external_osmolarity',
                                     'pi_e': 'SBO:0000279',
                                     'pi_i': 'SBO:0000279',
                                     'V': 'SBO:0000468',
                                     'V_ref': 'SBO:0000468',
                                     'G': 'SBO:0000467',  # surface area
                                     'dr_os': 'YCM:r_os_flux',
                                     'dR_ref': 'YCM:R_ref_flux',
                                     'dr_b': 'YCM:r_b_flux',
                                     'dr': 'YCM:r_flux',
                                     }

    module_dict['sp_states'] = {'int_vol': '0',
                                'r_os': 'osmotic',
                                'r_b': 'nonosmotic',
                                'r': '0',
                                'pi_t': 'turgor',
                                'R_ref': '0',
                                'c_i': '0',
                                'dR_ref': '0',
                                # 'c_e' : '0',
                                'pi_e': '0',
                                'pi_i': '0',
                                'V': 'total',
                                'V_ref': 'relaxed',
                                'G': '0',
                                'dr_os': '0',
                                'dR_ref': '0',
                                'dr_b': '0',
                                'dr': '0',
                                }

    module_dict['sp_compartment'] = {'int_vol': 'intracellular',
                                     'r_os': 'intracellular',
                                     'r_b': 'intracellular',
                                     'r': 'intracellular',
                                     'pi_t': 'intracellular',
                                     'R_ref': 'intracellular',
                                     'c_i': 'intracellular',
                                     'dR_ref': 'intracellular',
                                     # 'c_e' : 'extracellular',
                                     'pi_e': 'extracellular',
                                     'pi_i': 'intracellular',
                                     'V': 'intracellular',
                                     'V_ref': 'intracellular',
                                     'G': 'intracellular',
                                     'dr_os': 'intracellular',
                                     'dR_ref': 'intracellular',
                                     'dr_b': 'intracellular',
                                     'dr': 'intracellular',
                                     }

    module_dict['com_annotations'] = {'intracellular': 'GO:0044424',
                                      'extracellular': 'GO:0005615',
                                      }

    '''reactions['v_vol_growth'] = {'rate': {}, 'products': {}, 'substrates': {}, 'modifiers': {}}
                reactions['v_vol_growth']['rate'] = 'growth_factor'
                reactions['v_vol_growth']['substrates'] = {}
                reactions['v_vol_growth']['products'] = {'int_vol': 1}
                reactions['v_vol_growth']['modifiers'] = {}'''

    module_dict['reactions'] = reactions
    # module_dict['odes'] = YCM_tools.generate_odes_from_reactions(reactions, module_dict['sp_compartment'], module_dict['sp_annotations'], module_dict['units'], module_dict['com_annotations'])

    # module_dict['odes'].update(odes)


    module_dict['info'] = info
    module_dict['type'] = 'ODE'


    return module_dict