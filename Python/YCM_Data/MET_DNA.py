import math
import GenerateODEsFromReactions as YCM_tools


def MET_DNA():
    """
    DNA Synthesis Module
    04/02/2016 - Katja Tummler, Jens Hahn
    """

    volume_correction = 1.0

    info = "DNA Synthesis Module                                             \n \
            04/02/2016 - Katja Tummler, Stephan Adler, Jens Hahn             \n \
                                                                             \n \
            DNA synthesis is realised as a transport reaction of NA_DNA into \n \
            the the virtual compartment DNA.                                 \n \
                                                                             \n \
            DNA synthesis takes place in the S phase of CDC:                 \n \
                - G1/S: Concentration threshold of Clb5 in CDC Module      \n \
                - S/G2: Doubled number of NA_DNA in compartment DNA          \n \
                                                                             \n \
            Main parameter: number of bp in DNA of S. cerevisiae: 14000 kbp  \t \
            PMID:8849441, TODO add new ref"

    initvars = {'NA_DNA_cyt': 0.147,  # mM
                'DNA': 33.,
                # mM (based on nucleus volume of 1.4 fL [7% of 30fL]) [before: 22 mM based on 2.1 fL nucleus]
                'Clb5': volume_correction * 0.00562512781279 / (16.0e-15) / (6.022140857 * 10 ** 20),
                # mM, Number taken from CDC model: ~10% of critical concentration (below)
                'nuc_vol': 1.4e-15,  # L
                'int_vol': 16.0e-15,  # L
                'A': 0.  # dummy species that tracks DNA synthesis
                # 'HIR_act':  # fraction of active HIR (TODO: if fractions are difficult we can also use absolute concentrations: 800 #/cell (YFP database))
                }

    initpars = {}
    initpars['Clb5_crit'] = 8.e-6  # mM, guessed about half max from CDC    # 2.3539460089400402e-05/1.65801328396e-05*
    initpars['DNA_crit'] = 2 * initvars['DNA']  # mM, concentration of doubled DNA
    initpars['kf_A_syn'] = 1e-3  # mmol/s, scaling parameter on A production
    initpars['kf_A_con'] = 0.1  # 1/s
    initpars['k1_A_syn'] = 100.  # 1/mM, deactivation constant of the total DNA, once its finished
    initpars['k1_A_con'] = 1.5  # 1/mM, deactivation constant of the total DNA, once its finished
    initpars['kf_DNA_syn'] = 1.0 / 60. / initvars['NA_DNA_cyt']  # 1/s: synthesis speed
    initpars['A_crit'] = 0.06  # mM, critical concentration of A     # [before:  0.06]
    initpars['k1_DNA_syn'] = 220.  # 1/mM, activation constant of the total DNA

    reactions = {}

    # Reaction to produce dummy species A, following the concentration rise of CLB5
    reactions['v_A_syn'] = {'rate': {}, 'substrates': {}, 'products': {}, 'modifiers': {}}
    reactions['v_A_syn'][
        'rate'] = '((  (1./(1.+ exp(-k1_A_syn*(Clb5/1.65801328396e-05 - (Clb5_crit*16.0e-15/int_vol)/1.65801328396e-05)))) * kf_A_syn  ) * nuc_vol)'  # 1.65801328396e-05
    reactions['v_A_syn']['substrates'] = {}
    reactions['v_A_syn']['products'] = {'A': 1.}
    reactions['v_A_syn']['modifiers'] = {'Clb5': 1.}

    # Reaction to consume dummy species A, when DNA replication is finished, independent of the concentartion of CLB5
    reactions['v_A_con'] = {'rate': {}, 'substrates': {}, 'products': {}, 'modifiers': {}}
    reactions['v_A_con'][
        'rate'] = '(((1./(1.+ exp(-k1_A_con*(DNA - (DNA_crit*16.0e-15/int_vol))))) * kf_A_con * A) * nuc_vol)'
    reactions['v_A_con']['substrates'] = {'A': 1.}
    reactions['v_A_con']['products'] = {}
    reactions['v_A_con']['modifiers'] = {'DNA': 1.}

    # Reaction that transports DNA nucleotides into the nucleus compartment NA_DNA _cyt--> DNA_nuc
    reactions['v_DNA_syn'] = {'rate': {}, 'substrates': {}, 'products': {}, 'modifiers': {}}
    reactions['v_DNA_syn'][
        'rate'] = '(((1./(1.+ exp(-k1_DNA_syn*(A - (A_crit*16.0e-15/int_vol))))) * kf_DNA_syn * 0.147) * nuc_vol)'
    reactions['v_DNA_syn']['substrates'] = {'NA_DNA_cyt': 1.}
    reactions['v_DNA_syn']['products'] = {'DNA': 1.}
    reactions['v_DNA_syn']['modifiers'] = {'A': 1.}

    ## Reaction that deactivates HIR, to release repression on Histone transcription
    # alg_eqs['HIR_act'] = '1-(1./(1.+ exp(-k1_DNA_syn*(A - A_crit))))' # %
    alg_eqs = {}

    sp_annotations = {'NA_DNA_cyt': 'YCM:NA_DNA',
                      'DNA': 'YCM:DNA',
                      'Clb5': 'SGD:S000006324p',
                      'nuc_vol': 'SBO:0000468',
                      'int_vol': 'SBO:0000468',
                      'A': 'YCM:A',
                      # 'HIR_act':'SGD:S000000104'
                      }

    com_annotations = {'cytosol': 'GO:0005829', 'nucleus': 'GO:0005634', 'intracellular': 'GO:0044424'}

    sp_compartment = {'NA_DNA_cyt': 'intracellular',
                      'DNA': 'nucleus',
                      'Clb5': 'intracellular',
                      'nuc_vol': 'nucleus',
                      'int_vol': 'intracellular',
                      'A': 'nucleus',
                      # 'HIR_act':'nucleus'
                      }

    sp_states = {'NA_DNA_cyt': '0',
                 'DNA': '0',
                 'Clb5': '0',
                 'nuc_vol': '0',
                 'int_vol': '0',
                 'A': '0',
                 # 'HIR_act':'nucleus'
                 }

    units = {'NA_DNA_cyt': 'mM',
             'DNA': 'mM',
             'Clb5': 'mM',
             'nuc_vol': 'L',
             'int_vol': 'L',
             'A': 'mM',
             # 'HIR_act':'mM'
             }

    units_pars = {'kf_DNA_syn': '1/s',
                  'Clb5_crit': 'mM',
                  'DNA_crit': 'molecules',
                  'k1_DNA_syn': '1/mM',
                  'k1_A_syn': '1/mM',
                  'k2_A_syn': '1/mM',
                  'scale_A_syn': 'dimensionless',
                  'A_crit': 'mM',
                  'kf_A_con': '1/s',
                  'k1_A_con': '1/mM',
                  'kf_A_syn': '1/s',
                  }

    module_dict = {}
    module_dict['info'] = info
    module_dict['type'] = 'ODE'
    module_dict['name'] = "MET_DNA"
    module_dict['initpars'] = initpars
    module_dict['initvars'] = initvars
    module_dict['reactions'] = reactions
    module_dict['sp_annotations'] = sp_annotations
    module_dict['com_annotations'] = com_annotations
    module_dict['sp_compartment'] = sp_compartment
    module_dict['alg_eqs'] = alg_eqs
    module_dict['sp_states'] = sp_states
    module_dict['units'] = units
    module_dict['units_pars'] = units_pars

    module_dict['odes'] = YCM_tools.generate_odes_from_reactions(reactions, module_dict['sp_compartment'],
                                                                 module_dict['sp_annotations'],
                                                                 module_dict['units'], module_dict['com_annotations'])


    return module_dict