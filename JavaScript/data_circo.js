let data_circo=[
    {
        "links_to": [], 
        "links_to_mod": [], 
        "symbol": "triangle", 
        "links_from_mod": [], 
        "module": [
            "VOL_core_growth_single_vol"
        ], 
        "y": "94.967", 
        "annotation": "YCM:r_os_flux", 
        "name_alt": "dr_os", 
        "name": "0", 
        "equation": "(- Lp * (pi_t + pi_e - pi_i))", 
        "uni_links": [
            "6", 
            "15", 
            "8"
        ], 
        "state": "0", 
        "links_from": [], 
        "x": "260.61", 
        "compartment": "intracellular", 
        "is_ode": false
    }, 
    {
        "links_to": [], 
        "links_to_mod": [
            "389"
        ], 
        "symbol": "triangle", 
        "links_from_mod": [], 
        "module": [
            "VOL_core_growth_single_vol", 
            "TRP_NUT"
        ], 
        "y": "77.671", 
        "annotation": "SBO:0000467", 
        "name_alt": "G", 
        "name": "1", 
        "equation": "4*pi*((3./4./pi * VOLUME)**(1/3))**2", 
        "uni_links": [
            "9", 
            "380", 
            "4"
        ], 
        "state": "0", 
        "links_from": [
            "2"
        ], 
        "x": "248.82", 
        "compartment": "intracellular", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "1", 
            "11"
        ], 
        "links_to_mod": [], 
        "symbol": "circle", 
        "links_from_mod": [], 
        "module": [
            "VOL_core_growth_single_vol"
        ], 
        "y": "78.981", 
        "annotation": "YCM:internal_osmolarity", 
        "name_alt": "c_i", 
        "name": "2", 
        "uni_links": [
            "8"
        ], 
        "state": "0", 
        "links_from": [], 
        "x": "249.98", 
        "compartment": "intracellular", 
        "is_ode": true
    }, 
    {
        "links_to": [], 
        "links_to_mod": [], 
        "symbol": "triangle", 
        "links_from_mod": [], 
        "module": [
            "VOL_core_growth_single_vol"
        ], 
        "y": "85.137", 
        "annotation": "YCM:r_b_flux", 
        "name_alt": "dr_b", 
        "name": "3", 
        "equation": "(0.2 * dR_ref)", 
        "uni_links": [
            "10"
        ], 
        "state": "0", 
        "links_from": [], 
        "x": "256.45", 
        "compartment": "intracellular", 
        "is_ode": false
    }, 
    {
        "links_to": [], 
        "links_to_mod": [
            "389"
        ], 
        "symbol": "triangle", 
        "links_from_mod": [], 
        "module": [
            "VOL_core_growth_single_vol", 
            "CDC_core", 
            "GEX_APC", 
            "GEX_GRN", 
            "GEX_TRL", 
            "MET_CCM", 
            "MET_DNA", 
            "MET_CWS", 
            "TRP_NUT"
        ], 
        "y": "76.388", 
        "annotation": "SBO:0000468", 
        "name_alt": "int_vol", 
        "name": "4", 
        "equation": "(0.8 * V)", 
        "uni_links": [
            "11", 
            "238", 
            "1"
        ], 
        "state": "0", 
        "links_from": [], 
        "x": "247.63", 
        "compartment": "intracellular", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "6", 
            "15", 
            "8"
        ], 
        "links_to_mod": [], 
        "symbol": "circle", 
        "links_from_mod": [], 
        "module": [
            "VOL_core_growth_single_vol"
        ], 
        "y": "91.868", 
        "annotation": "SBO:0000466", 
        "name_alt": "r_os", 
        "name": "5", 
        "uni_links": [
            "9"
        ], 
        "state": "osmotic", 
        "links_from": [], 
        "x": "258.98", 
        "compartment": "intracellular", 
        "is_ode": true
    }, 
    {
        "links_to": [
            "12", 
            "9", 
            "6", 
            "6", 
            "15", 
            "8", 
            "9", 
            "12", 
            "9", 
            "6", 
            "12", 
            "9", 
            "12", 
            "9", 
            "6", 
            "6", 
            "15", 
            "8", 
            "9", 
            "6"
        ], 
        "links_to_mod": [], 
        "symbol": "circle", 
        "links_from_mod": [], 
        "module": [
            "VOL_core_growth_single_vol"
        ], 
        "y": "87.368", 
        "annotation": "SBO:0000279", 
        "name_alt": "pi_t", 
        "name": "6", 
        "uni_links": [
            "10", 
            "0", 
            "14"
        ], 
        "state": "turgor", 
        "links_from": [
            "5", 
            "6", 
            "6", 
            "6", 
            "6", 
            "6", 
            "6", 
            "12"
        ], 
        "x": "256.28", 
        "compartment": "intracellular", 
        "is_ode": true
    }, 
    {
        "links_to": [], 
        "links_to_mod": [], 
        "symbol": "triangle", 
        "links_from_mod": [], 
        "module": [
            "VOL_core_growth_single_vol"
        ], 
        "y": "83.676", 
        "annotation": "SBO:0000468", 
        "name_alt": "V_ref", 
        "name": "7", 
        "equation": "(4. / 3. * pi * 10**(-15) * R_ref**3.)", 
        "uni_links": [
            "12"
        ], 
        "state": "relaxed", 
        "links_from": [], 
        "x": "255.43", 
        "compartment": "intracellular", 
        "is_ode": false
    }, 
    {
        "links_to": [], 
        "links_to_mod": [], 
        "symbol": "triangle", 
        "links_from_mod": [], 
        "module": [
            "VOL_core_growth_single_vol"
        ], 
        "y": "90.347", 
        "annotation": "SBO:0000279", 
        "name_alt": "pi_i", 
        "name": "8", 
        "equation": "(c_i /V * R * T)", 
        "uni_links": [
            "2", 
            "11", 
            "0", 
            "14"
        ], 
        "state": "0", 
        "links_from": [
            "5", 
            "6", 
            "6"
        ], 
        "x": "258.12", 
        "compartment": "intracellular", 
        "is_ode": false
    }, 
    {
        "links_to": [], 
        "links_to_mod": [], 
        "symbol": "triangle", 
        "links_from_mod": [], 
        "module": [
            "VOL_core_growth_single_vol"
        ], 
        "y": "81.679", 
        "annotation": "SBO:0000466", 
        "name_alt": "r", 
        "name": "9", 
        "equation": "(r_os + r_b)", 
        "uni_links": [
            "10", 
            "1", 
            "5", 
            "13", 
            "11"
        ], 
        "state": "0", 
        "links_from": [
            "6", 
            "6", 
            "6", 
            "6", 
            "6", 
            "6", 
            "12"
        ], 
        "x": "252.21", 
        "compartment": "intracellular", 
        "is_ode": false
    }, 
    {
        "links_to": [], 
        "links_to_mod": [], 
        "symbol": "triangle", 
        "links_from_mod": [], 
        "module": [
            "VOL_core_growth_single_vol"
        ], 
        "y": "85.911", 
        "annotation": "YCM:R_ref_flux", 
        "name_alt": "dR_ref", 
        "name": "10", 
        "equation": "(phi * R_ref * r / (2.0 * d) * maximum(pi_t - pi_c, 0.0))", 
        "uni_links": [
            "12", 
            "9", 
            "6", 
            "3", 
            "14"
        ], 
        "state": "0", 
        "links_from": [
            "13"
        ], 
        "x": "255.31", 
        "compartment": "intracellular", 
        "is_ode": false
    }, 
    {
        "links_to": [], 
        "links_to_mod": [], 
        "symbol": "triangle", 
        "links_from_mod": [], 
        "module": [
            "VOL_core_growth_single_vol"
        ], 
        "y": "80.317", 
        "annotation": "SBO:0000468", 
        "name_alt": "V", 
        "name": "11", 
        "equation": "(4. / 3. * pi * 10**(-15) * r**3.)", 
        "uni_links": [
            "4", 
            "8", 
            "9"
        ], 
        "state": "total", 
        "links_from": [
            "2"
        ], 
        "x": "251.11", 
        "compartment": "intracellular", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "12", 
            "9", 
            "6"
        ], 
        "links_to_mod": [], 
        "symbol": "circle", 
        "links_from_mod": [], 
        "module": [
            "VOL_core_growth_single_vol"
        ], 
        "y": "84.477", 
        "annotation": "YCM:radius_relaxed_volume", 
        "name_alt": "R_ref", 
        "name": "12", 
        "uni_links": [
            "10", 
            "7"
        ], 
        "state": "0", 
        "links_from": [
            "6", 
            "6", 
            "6", 
            "6", 
            "12"
        ], 
        "x": "254.31", 
        "compartment": "intracellular", 
        "is_ode": true
    }, 
    {
        "links_to": [
            "10"
        ], 
        "links_to_mod": [], 
        "symbol": "circle", 
        "links_from_mod": [], 
        "module": [
            "VOL_core_growth_single_vol"
        ], 
        "y": "83.066", 
        "annotation": "SBO:0000466", 
        "name_alt": "r_b", 
        "name": "13", 
        "uni_links": [
            "9"
        ], 
        "state": "nonosmotic", 
        "links_from": [], 
        "x": "253.28", 
        "compartment": "intracellular", 
        "is_ode": true
    }, 
    {
        "links_to": [], 
        "links_to_mod": [], 
        "symbol": "triangle", 
        "links_from_mod": [], 
        "module": [
            "VOL_core_growth_single_vol"
        ], 
        "y": "88.847", 
        "annotation": "YCM:r_flux", 
        "name_alt": "dr", 
        "name": "14", 
        "equation": "(0.2 * dR_ref - Lp * (pi_t + pi_e - pi_i))", 
        "uni_links": [
            "10", 
            "6", 
            "15", 
            "8"
        ], 
        "state": "0", 
        "links_from": [], 
        "x": "257.22", 
        "compartment": "intracellular", 
        "is_ode": false
    }, 
    {
        "links_to": [], 
        "links_to_mod": [], 
        "symbol": "triangle", 
        "links_from_mod": [], 
        "module": [
            "VOL_core_growth_single_vol"
        ], 
        "y": "93.408", 
        "annotation": "SBO:0000279", 
        "name_alt": "pi_e", 
        "name": "15", 
        "equation": "(c_e * R * T)", 
        "uni_links": [
            "0", 
            "14"
        ], 
        "state": "0", 
        "links_from": [
            "5", 
            "6", 
            "6"
        ], 
        "x": "259.82", 
        "compartment": "extracellular", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "72", 
            "82", 
            "89", 
            "211"
        ], 
        "links_to_mod": [
            "121"
        ], 
        "symbol": "circle", 
        "links_from_mod": [], 
        "module": [
            "CDC_core", 
            "GEX_GRN"
        ], 
        "y": "67.695", 
        "annotation": "SGD:S000003723p", 
        "name_alt": "Swe1_cyt", 
        "name": "16", 
        "uni_links": [], 
        "state": "0", 
        "links_from": [
            "91", 
            "192"
        ], 
        "x": "147.16", 
        "compartment": "intracellular", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "113", 
            "118", 
            "119", 
            "185"
        ], 
        "links_to_mod": [
            "67", 
            "176"
        ], 
        "symbol": "circle", 
        "links_from_mod": [], 
        "module": [
            "CDC_core", 
            "GEX_GRN"
        ], 
        "y": "133.99", 
        "annotation": "SGD:S000002553p", 
        "name_alt": "Swi5_nuc", 
        "name": "17", 
        "uni_links": [], 
        "state": "0", 
        "links_from": [
            "97", 
            "109", 
            "237"
        ], 
        "x": "268.34", 
        "compartment": "intracellular", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "70", 
            "230"
        ], 
        "links_to_mod": [], 
        "symbol": "circle", 
        "links_from_mod": [], 
        "module": [
            "CDC_core", 
            "GEX_GRN"
        ], 
        "y": "55.242", 
        "annotation": "SGD:S000000913p_SGD:S000004172p", 
        "name_alt": "SBF_p_cyt", 
        "name": "18", 
        "uni_links": [], 
        "state": "P", 
        "links_from": [
            "62"
        ], 
        "x": "211.96", 
        "compartment": "intracellular", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "55", 
            "61", 
            "117", 
            "218", 
            "231"
        ], 
        "links_to_mod": [], 
        "symbol": "circle", 
        "links_from_mod": [], 
        "module": [
            "CDC_core", 
            "GEX_GRN"
        ], 
        "y": "104.67", 
        "annotation": "SGD:S000003693p", 
        "name_alt": "Far1_cyt", 
        "name": "19", 
        "uni_links": [], 
        "state": "0", 
        "links_from": [
            "76", 
            "78", 
            "213"
        ], 
        "x": "264.61", 
        "compartment": "intracellular", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "99", 
            "123", 
            "124", 
            "179"
        ], 
        "links_to_mod": [
            "80", 
            "86", 
            "90", 
            "135", 
            "173", 
            "212", 
            "223"
        ], 
        "symbol": "circle", 
        "links_from_mod": [], 
        "module": [
            "CDC_core", 
            "GEX_GRN"
        ], 
        "y": "151.16", 
        "annotation": "SGD:S000002971p", 
        "name_alt": "APC_cyt", 
        "name": "20", 
        "uni_links": [], 
        "state": "0", 
        "links_from": [
            "77", 
            "136", 
            "178"
        ], 
        "x": "265.15", 
        "compartment": "intracellular", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "92", 
            "199"
        ], 
        "links_to_mod": [
            "64", 
            "70", 
            "77", 
            "97", 
            "130"
        ], 
        "symbol": "circle", 
        "links_from_mod": [], 
        "module": [
            "CDC_core", 
            "GEX_GRN"
        ], 
        "y": "54.424", 
        "annotation": "SGD:S000001924p", 
        "name_alt": "Cdc14_p_cyt", 
        "name": "21", 
        "uni_links": [], 
        "state": "P", 
        "links_from": [
            "64", 
            "102", 
            "135"
        ], 
        "x": "208.55", 
        "compartment": "intracellular", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "93", 
            "108", 
            "128", 
            "134"
        ], 
        "links_to_mod": [], 
        "symbol": "circle", 
        "links_from_mod": [], 
        "module": [
            "CDC_core"
        ], 
        "y": "53.162", 
        "annotation": "SGD:S000006324p_SGD:S000004069p", 
        "name_alt": "Clb5_Sic1_cyt", 
        "name": "22", 
        "uni_links": [], 
        "state": "0", 
        "links_from": [
            "87", 
            "110"
        ], 
        "x": "184.19", 
        "compartment": "intracellular", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "81", 
            "130"
        ], 
        "links_to_mod": [], 
        "symbol": "circle", 
        "links_from_mod": [], 
        "module": [
            "CDC_core"
        ], 
        "y": "61.622", 
        "annotation": "SGD:S000005609p", 
        "name_alt": "Whi5_p_cyt", 
        "name": "23", 
        "uni_links": [], 
        "state": "P", 
        "links_from": [
            "59", 
            "74"
        ], 
        "x": "228.21", 
        "compartment": "intracellular", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "64", 
            "102", 
            "135", 
            "181"
        ], 
        "links_to_mod": [], 
        "symbol": "circle", 
        "links_from_mod": [], 
        "module": [
            "CDC_core", 
            "GEX_GRN"
        ], 
        "y": "53.262", 
        "annotation": "SGD:S000001924p", 
        "name_alt": "Cdc14_cyt", 
        "name": "24", 
        "uni_links": [], 
        "state": "0", 
        "links_from": [
            "92", 
            "170"
        ], 
        "x": "201.65", 
        "compartment": "intracellular", 
        "is_ode": false
    }, 
    {
        "links_to": [], 
        "links_to_mod": [
            "75", 
            "82", 
            "100", 
            "111", 
            "125", 
            "128"
        ], 
        "symbol": "circle", 
        "links_from_mod": [], 
        "module": [
            "CDC_core", 
            "GEX_GRN"
        ], 
        "y": "56.483", 
        "annotation": "SGD:S000004103p", 
        "name_alt": "Hog1_PP_cyt", 
        "name": "25", 
        "uni_links": [], 
        "state": "PP", 
        "links_from": [], 
        "x": "168.83", 
        "compartment": "intracellular", 
        "is_ode": true
    }, 
    {
        "links_to": [
            "71", 
            "96"
        ], 
        "links_to_mod": [], 
        "symbol": "circle", 
        "links_from_mod": [], 
        "module": [
            "CDC_core"
        ], 
        "y": "181.1", 
        "annotation": "SGD:S000002314p_SGD:S000004069p", 
        "name_alt": "Clb3_Sic1_cyt", 
        "name": "26", 
        "uni_links": [], 
        "state": "0", 
        "links_from": [
            "132"
        ], 
        "x": "247.63", 
        "compartment": "intracellular", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "58", 
            "85", 
            "94"
        ], 
        "links_to_mod": [], 
        "symbol": "circle", 
        "links_from_mod": [], 
        "module": [
            "CDC_core"
        ], 
        "y": "116.55", 
        "annotation": "SGD:S000006177p_SGD:S000003693p", 
        "name_alt": "Cln2_Far1_p_cyt", 
        "name": "27", 
        "uni_links": [], 
        "state": "P", 
        "links_from": [
            "66"
        ], 
        "x": "267.54", 
        "compartment": "intracellular", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "120"
        ], 
        "links_to_mod": [], 
        "symbol": "circle", 
        "links_from_mod": [], 
        "module": [
            "CDC_core"
        ], 
        "y": "65.674", 
        "annotation": "SGD:S000003723p", 
        "name_alt": "Swe1_p_cyt", 
        "name": "28", 
        "uni_links": [], 
        "state": "P", 
        "links_from": [
            "72", 
            "82"
        ], 
        "x": "150.02", 
        "compartment": "intracellular", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "63", 
            "87", 
            "90", 
            "98", 
            "207", 
            "223"
        ], 
        "links_to_mod": [
            "101", 
            "118", 
            "122", 
            "124", 
            "200", 
            "303"
        ], 
        "symbol": "circle", 
        "links_from_mod": [], 
        "module": [
            "CDC_core", 
            "GEX_GRN", 
            "MET_DNA"
        ], 
        "y": "62.037", 
        "annotation": "SGD:S000006324p", 
        "name_alt": "Clb5_cyt", 
        "name": "29", 
        "uni_links": [], 
        "state": "0", 
        "links_from": [
            "75", 
            "79", 
            "108", 
            "134", 
            "236"
        ], 
        "x": "156", 
        "compartment": "intracellular", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "60", 
            "74", 
            "127", 
            "197"
        ], 
        "links_to_mod": [], 
        "symbol": "circle", 
        "links_from_mod": [], 
        "module": [
            "CDC_core", 
            "GEX_GRN"
        ], 
        "y": "58.622", 
        "annotation": "SGD:S000005609p", 
        "name_alt": "Whi5_cyt", 
        "name": "30", 
        "uni_links": [], 
        "state": "0", 
        "links_from": [
            "130", 
            "131", 
            "172"
        ], 
        "x": "221.89", 
        "compartment": "intracellular", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "69"
        ], 
        "links_to_mod": [], 
        "symbol": "circle", 
        "links_from_mod": [], 
        "module": [
            "CDC_core"
        ], 
        "y": "52.739", 
        "annotation": "SGD:S000004069p", 
        "name_alt": "Sic1_p_cyt", 
        "name": "31", 
        "uni_links": [], 
        "state": "P", 
        "links_from": [
            "101", 
            "108"
        ], 
        "x": "194.68", 
        "compartment": "intracellular", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "107", 
            "138", 
            "198"
        ], 
        "links_to_mod": [
            "59", 
            "74"
        ], 
        "symbol": "circle", 
        "links_from_mod": [], 
        "module": [
            "CDC_core", 
            "GEX_GRN"
        ], 
        "y": "69.296", 
        "annotation": "SGD:S000000038p", 
        "name_alt": "Cln3_cyt", 
        "name": "32", 
        "uni_links": [], 
        "state": "0", 
        "links_from": [
            "68", 
            "115", 
            "140", 
            "174"
        ], 
        "x": "239.9", 
        "compartment": "intracellular", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "79", 
            "110"
        ], 
        "links_to_mod": [], 
        "symbol": "circle", 
        "links_from_mod": [], 
        "module": [
            "CDC_core"
        ], 
        "y": "53.914", 
        "annotation": "SGD:S000006324p_SGD:S000004069p", 
        "name_alt": "Clb5_Sic1_Hp_cyt", 
        "name": "33", 
        "uni_links": [], 
        "state": "HP", 
        "links_from": [
            "63", 
            "128"
        ], 
        "x": "179", 
        "compartment": "intracellular", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "133", 
            "189"
        ], 
        "links_to_mod": [
            "53"
        ], 
        "symbol": "circle", 
        "links_from_mod": [], 
        "module": [
            "CDC_core", 
            "GEX_GRN"
        ], 
        "y": "73.304", 
        "annotation": "SGD:S000004639p", 
        "name_alt": "Mih1_cyt", 
        "name": "34", 
        "uni_links": [], 
        "state": "0", 
        "links_from": [
            "137", 
            "233"
        ], 
        "x": "140.45", 
        "compartment": "intracellular", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "54", 
            "66", 
            "78", 
            "88", 
            "107"
        ], 
        "links_to_mod": [], 
        "symbol": "circle", 
        "links_from_mod": [], 
        "module": [
            "CDC_core"
        ], 
        "y": "109.7", 
        "annotation": "SGD:S000003693p", 
        "name_alt": "Far1_p_cyt", 
        "name": "35", 
        "uni_links": [], 
        "state": "P", 
        "links_from": [
            "68", 
            "94", 
            "117"
        ], 
        "x": "266.1", 
        "compartment": "intracellular", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "53", 
            "106"
        ], 
        "links_to_mod": [], 
        "symbol": "circle", 
        "links_from_mod": [], 
        "module": [
            "CDC_core"
        ], 
        "y": "70.968", 
        "annotation": "SGD:S000006323p", 
        "name_alt": "Clb2_p_cyt", 
        "name": "36", 
        "uni_links": [], 
        "state": "P", 
        "links_from": [
            "121"
        ], 
        "x": "143.06", 
        "compartment": "intracellular", 
        "is_ode": false
    }, 
    {
        "links_to": [], 
        "links_to_mod": [], 
        "symbol": "circle", 
        "links_from_mod": [], 
        "module": [
            "CDC_core", 
            "GEX_APC", 
            "GEX_GRN", 
            "GEX_TRL", 
            "MET_DNA"
        ], 
        "y": "96.577", 
        "annotation": "SBO:0000468", 
        "name_alt": "nuc_vol", 
        "name": "37", 
        "uni_links": [], 
        "state": "0", 
        "links_from": [], 
        "x": "113.71", 
        "compartment": "nucleus", 
        "is_ode": true
    }, 
    {
        "links_to": [
            "57", 
            "80", 
            "121", 
            "129", 
            "212", 
            "216"
        ], 
        "links_to_mod": [
            "62", 
            "72", 
            "102", 
            "103", 
            "119", 
            "123", 
            "188"
        ], 
        "symbol": "circle", 
        "links_from_mod": [], 
        "module": [
            "CDC_core", 
            "GEX_GRN"
        ], 
        "y": "167.14", 
        "annotation": "SGD:S000006323p", 
        "name_alt": "Clb2_cyt", 
        "name": "38", 
        "uni_links": [], 
        "state": "0", 
        "links_from": [
            "53", 
            "95", 
            "125", 
            "206"
        ], 
        "x": "258.12", 
        "compartment": "intracellular", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "57", 
            "65", 
            "87", 
            "100", 
            "101", 
            "132", 
            "232"
        ], 
        "links_to_mod": [], 
        "symbol": "circle", 
        "links_from_mod": [], 
        "module": [
            "CDC_core", 
            "GEX_GRN"
        ], 
        "y": "59.678", 
        "annotation": "SGD:S000004069p", 
        "name_alt": "Sic1_cyt", 
        "name": "39", 
        "uni_links": [], 
        "state": "0", 
        "links_from": [
            "67", 
            "71", 
            "84", 
            "95", 
            "134", 
            "177"
        ], 
        "x": "160.69", 
        "compartment": "intracellular", 
        "is_ode": false
    }, 
    {
        "links_to": [], 
        "links_to_mod": [
            "76", 
            "117", 
            "217"
        ], 
        "symbol": "circle", 
        "links_from_mod": [], 
        "module": [
            "CDC_core", 
            "GEX_GRN"
        ], 
        "y": "121.75", 
        "annotation": "SGD:S000000112p", 
        "name_alt": "Fus3_cyt", 
        "name": "40", 
        "uni_links": [], 
        "state": "0", 
        "links_from": [], 
        "x": "268.2", 
        "compartment": "intracellular", 
        "is_ode": true
    }, 
    {
        "links_to": [
            "83", 
            "95"
        ], 
        "links_to_mod": [], 
        "symbol": "circle", 
        "links_from_mod": [], 
        "module": [
            "CDC_core"
        ], 
        "y": "57.649", 
        "annotation": "SGD:S000006323p_SGD:S000004069p", 
        "name_alt": "Clb2_Sic1_cyt", 
        "name": "41", 
        "uni_links": [], 
        "state": "0", 
        "links_from": [
            "57"
        ], 
        "x": "165.53", 
        "compartment": "intracellular", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "59", 
            "139"
        ], 
        "links_to_mod": [], 
        "symbol": "circle", 
        "links_from_mod": [], 
        "module": [
            "CDC_core"
        ], 
        "y": "60.817", 
        "annotation": "SGD:S000000913p_SGD:S000004172p_SGD:S000005609p", 
        "name_alt": "SBF_Whi5_nuc", 
        "name": "42", 
        "uni_links": [], 
        "state": "0", 
        "links_from": [
            "60"
        ], 
        "x": "226.66", 
        "compartment": "intracellular", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "77", 
            "105"
        ], 
        "links_to_mod": [], 
        "symbol": "circle", 
        "links_from_mod": [], 
        "module": [
            "CDC_core"
        ], 
        "y": "162.52", 
        "annotation": "SGD:S000002971p", 
        "name_alt": "APC_p_cyt", 
        "name": "43", 
        "uni_links": [], 
        "state": "P", 
        "links_from": [
            "123", 
            "124"
        ], 
        "x": "260.61", 
        "compartment": "intracellular", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "56", 
            "235"
        ], 
        "links_to_mod": [
            "109", 
            "125", 
            "136", 
            "183", 
            "226", 
            "229"
        ], 
        "symbol": "circle", 
        "links_from_mod": [], 
        "module": [
            "CDC_core", 
            "GEX_GRN"
        ], 
        "y": "140.94", 
        "annotation": "SGD:S000004646p", 
        "name_alt": "Mcm1_nuc", 
        "name": "44", 
        "uni_links": [], 
        "state": "0", 
        "links_from": [
            "103", 
            "116", 
            "219"
        ], 
        "x": "267.54", 
        "compartment": "intracellular", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "86", 
            "104", 
            "132", 
            "173", 
            "205"
        ], 
        "links_to_mod": [
            "116", 
            "188"
        ], 
        "symbol": "circle", 
        "links_from_mod": [], 
        "module": [
            "CDC_core", 
            "GEX_GRN"
        ], 
        "y": "171.58", 
        "annotation": "SGD:S000002314p", 
        "name_alt": "Clb3_cyt", 
        "name": "45", 
        "uni_links": [], 
        "state": "0", 
        "links_from": [
            "71", 
            "122", 
            "225"
        ], 
        "x": "255.31", 
        "compartment": "intracellular", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "66", 
            "114", 
            "175"
        ], 
        "links_to_mod": [
            "52", 
            "55", 
            "59", 
            "74", 
            "88", 
            "101", 
            "108", 
            "115", 
            "210", 
            "231"
        ], 
        "symbol": "circle", 
        "links_from_mod": [], 
        "module": [
            "CDC_core", 
            "GEX_GRN"
        ], 
        "y": "66.167", 
        "annotation": "SGD:S000006177p", 
        "name_alt": "Cln2_cyt", 
        "name": "46", 
        "uni_links": [], 
        "state": "0", 
        "links_from": [
            "85", 
            "94", 
            "111", 
            "227"
        ], 
        "x": "235.68", 
        "compartment": "intracellular", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "73", 
            "97"
        ], 
        "links_to_mod": [], 
        "symbol": "circle", 
        "links_from_mod": [], 
        "module": [
            "CDC_core"
        ], 
        "y": "128.74", 
        "annotation": "SGD:S000002553p", 
        "name_alt": "Swi5_p_cyt", 
        "name": "47", 
        "uni_links": [], 
        "state": "P", 
        "links_from": [
            "118", 
            "119"
        ], 
        "x": "268.53", 
        "compartment": "intracellular", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "60", 
            "62", 
            "186"
        ], 
        "links_to_mod": [
            "111", 
            "191"
        ], 
        "symbol": "circle", 
        "links_from_mod": [], 
        "module": [
            "CDC_core", 
            "GEX_GRN"
        ], 
        "y": "56.76", 
        "annotation": "SGD:S000000913p_SGD:S000004172p", 
        "name_alt": "SBF_nuc", 
        "name": "48", 
        "uni_links": [], 
        "state": "0", 
        "links_from": [
            "59", 
            "70", 
            "202"
        ], 
        "x": "216.98", 
        "compartment": "intracellular", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "68", 
            "112", 
            "115"
        ], 
        "links_to_mod": [], 
        "symbol": "circle", 
        "links_from_mod": [], 
        "module": [
            "CDC_core"
        ], 
        "y": "98.137", 
        "annotation": "SGD:S000000038p_SGD:S000003693p", 
        "name_alt": "Cln3_Far1_p_cyt", 
        "name": "49", 
        "uni_links": [], 
        "state": "P", 
        "links_from": [
            "107"
        ], 
        "x": "262.09", 
        "compartment": "intracellular", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "126", 
            "180"
        ], 
        "links_to_mod": [
            "75", 
            "195"
        ], 
        "symbol": "circle", 
        "links_from_mod": [], 
        "module": [
            "CDC_core", 
            "GEX_GRN"
        ], 
        "y": "75.757", 
        "annotation": "SGD:S000002214p_SGD:S000004172p", 
        "name_alt": "MBF_nuc", 
        "name": "50", 
        "uni_links": [], 
        "state": "0", 
        "links_from": [
            "52", 
            "203"
        ], 
        "x": "137.96", 
        "compartment": "intracellular", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "63", 
            "84"
        ], 
        "links_to_mod": [], 
        "symbol": "circle", 
        "links_from_mod": [], 
        "module": [
            "CDC_core"
        ], 
        "y": "55.023", 
        "annotation": "SGD:S000004069p", 
        "name_alt": "Sic1_Hp_cyt", 
        "name": "51", 
        "uni_links": [], 
        "state": "HP", 
        "links_from": [
            "79", 
            "100"
        ], 
        "x": "173.87", 
        "compartment": "intracellular", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "50"
        ], 
        "links_to_mod": [], 
        "symbol": "rect", 
        "links_from_mod": [
            "46"
        ], 
        "module": [
            "CDC_core"
        ], 
        "y": "63.336", 
        "rate": "( int_vol *    ( ( kp_MBF  *  ( (Cln2_cyt)  **  n1 ) )  /  ( ( K_MBF  **  n1 )  + ( (Cln2_cyt)  **  n1 ) ) )   )", 
        "name_alt": "v_MBF_akt", 
        "name": "52", 
        "uni_links": [], 
        "compartments": [
            "intracellular"
        ], 
        "links_from": [], 
        "x": "231.26", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "38"
        ], 
        "links_to_mod": [], 
        "symbol": "rect", 
        "links_from_mod": [
            "34"
        ], 
        "module": [
            "CDC_core"
        ], 
        "y": "72.121", 
        "rate": "( int_vol *   ( ( kdp_Clb2  *  Clb2_p_cyt )  *  Mih1_cyt )  )", 
        "name_alt": "v_Clb2_dp", 
        "name": "53", 
        "uni_links": [], 
        "compartments": [
            "intracellular"
        ], 
        "links_from": [
            "36"
        ], 
        "x": "141.74", 
        "is_ode": false
    }, 
    {
        "links_to": [], 
        "links_to_mod": [], 
        "symbol": "rect", 
        "links_from_mod": [], 
        "module": [
            "CDC_core"
        ], 
        "y": "109.35", 
        "rate": "( int_vol *   ( kd_Far1p  *  Far1_p_cyt )  )", 
        "name_alt": "v_Far1p_d", 
        "name": "54", 
        "uni_links": [], 
        "compartments": [
            "intracellular"
        ], 
        "links_from": [
            "35"
        ], 
        "x": "267.43", 
        "is_ode": false
    }, 
    {
        "links_to": [], 
        "links_to_mod": [], 
        "symbol": "rect", 
        "links_from_mod": [
            "46"
        ], 
        "module": [
            "CDC_core"
        ], 
        "y": "103.01", 
        "rate": "( int_vol *   ( ( kdd_Far1  *  Far1_cyt )  *  Cln2_cyt )  )", 
        "name_alt": "v_Far1_dd", 
        "name": "55", 
        "uni_links": [], 
        "compartments": [
            "intracellular"
        ], 
        "links_from": [
            "19"
        ], 
        "x": "264.04", 
        "is_ode": false
    }, 
    {
        "links_to": [], 
        "links_to_mod": [], 
        "symbol": "rect", 
        "links_from_mod": [], 
        "module": [
            "CDC_core"
        ], 
        "y": "141.16", 
        "rate": "( int_vol *   ( kd_Mcm1  *  Mcm1_nuc )  )", 
        "name_alt": "v_Mcm1_d", 
        "name": "56", 
        "uni_links": [], 
        "compartments": [
            "intracellular"
        ], 
        "links_from": [
            "44"
        ], 
        "x": "268.9", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "41"
        ], 
        "links_to_mod": [], 
        "symbol": "rect", 
        "links_from_mod": [], 
        "module": [
            "CDC_core"
        ], 
        "y": "57.047", 
        "rate": "( int_vol *   ( (   kcf_Clb2_Sic1 )  *  Clb2_cyt )  *  Sic1_cyt )", 
        "name_alt": "v_Clb2_ass_Sic1", 
        "name": "57", 
        "uni_links": [], 
        "compartments": [
            "intracellular"
        ], 
        "links_from": [
            "38", 
            "39"
        ], 
        "x": "167.17", 
        "is_ode": false
    }, 
    {
        "links_to": [], 
        "links_to_mod": [], 
        "symbol": "rect", 
        "links_from_mod": [], 
        "module": [
            "CDC_core"
        ], 
        "y": "116.33", 
        "rate": "( int_vol *   ( kd_Cln2_Far1p  *  Cln2_Far1_p_cyt )  )", 
        "name_alt": "v_Cln2_Far1p_d", 
        "name": "58", 
        "uni_links": [], 
        "compartments": [
            "intracellular"
        ], 
        "links_from": [
            "27"
        ], 
        "x": "268.9", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "23", 
            "48"
        ], 
        "links_to_mod": [], 
        "symbol": "rect", 
        "links_from_mod": [
            "46", 
            "32"
        ], 
        "module": [
            "CDC_core"
        ], 
        "y": "62.461", 
        "rate": "( int_vol *   ( SBF_Whi5_nuc  *  (  ( ( kppa_Cln3_Whi5  *  Cln3_cyt )  /  ( Kpp_Cln3_Whi5  + Cln3_cyt ) )   +  ( ( kppa_Cln2_Whi5  *  ( (Cln2_cyt)  **  n_SBF ) )  /  ( ( Kpp_Cln2_Whi5  **  n_SBF )  + ( (Cln2_cyt)  **  n_SBF ) ) )  ) )  )", 
        "name_alt": "v_SBF_akt", 
        "name": "59", 
        "uni_links": [], 
        "compartments": [
            "intracellular"
        ], 
        "links_from": [
            "42"
        ], 
        "x": "229.75", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "42"
        ], 
        "links_to_mod": [], 
        "symbol": "rect", 
        "links_from_mod": [], 
        "module": [
            "CDC_core"
        ], 
        "y": "59.317", 
        "rate": "( int_vol *   ( ( kcf_SBF_Whi5  *  SBF_nuc )  *  Whi5_cyt )  )", 
        "name_alt": "v_SBF_ass_Whi5", 
        "name": "60", 
        "uni_links": [], 
        "compartments": [
            "intracellular"
        ], 
        "links_from": [
            "48", 
            "30"
        ], 
        "x": "223.5", 
        "is_ode": false
    }, 
    {
        "links_to": [], 
        "links_to_mod": [], 
        "symbol": "rect", 
        "links_from_mod": [], 
        "module": [
            "CDC_core"
        ], 
        "y": "104.23", 
        "rate": "( int_vol *   ( kd_Far1  *  Far1_cyt )  )", 
        "name_alt": "v_Far1_d", 
        "name": "61", 
        "uni_links": [], 
        "compartments": [
            "intracellular"
        ], 
        "links_from": [
            "19"
        ], 
        "x": "265.92", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "18"
        ], 
        "links_to_mod": [], 
        "symbol": "rect", 
        "links_from_mod": [
            "38"
        ], 
        "module": [
            "CDC_core"
        ], 
        "y": "55.71", 
        "rate": "( int_vol *   ( ( kpp_SBF_Clb2  *  SBF_nuc )  *  Clb2_cyt )  )", 
        "name_alt": "v_SBF_inakt_Clb2", 
        "name": "62", 
        "uni_links": [], 
        "compartments": [
            "intracellular"
        ], 
        "links_from": [
            "48"
        ], 
        "x": "213.64", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "33"
        ], 
        "links_to_mod": [], 
        "symbol": "rect", 
        "links_from_mod": [], 
        "module": [
            "CDC_core"
        ], 
        "y": "54.244", 
        "rate": "( int_vol *   ( (   kcf_Clb5_Sic1_Hp )  *  Clb5_cyt )  *  Sic1_Hp_cyt )", 
        "name_alt": "v_Clb5_ass_Sic1_Hp", 
        "name": "63", 
        "uni_links": [], 
        "compartments": [
            "intracellular"
        ], 
        "links_from": [
            "51", 
            "29"
        ], 
        "x": "177.28", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "21"
        ], 
        "links_to_mod": [], 
        "symbol": "rect", 
        "links_from_mod": [
            "21"
        ], 
        "module": [
            "CDC_core"
        ], 
        "y": "54.074", 
        "rate": "( int_vol *   ( ( kpp_Cdc14_MEN  *  Cdc14_cyt )  *  Cdc14_p_cyt )  )", 
        "name_alt": "v_Cdc14_akt_MEN_fb", 
        "name": "64", 
        "uni_links": [], 
        "compartments": [
            "intracellular"
        ], 
        "links_from": [
            "24"
        ], 
        "x": "206.84", 
        "is_ode": false
    }, 
    {
        "links_to": [], 
        "links_to_mod": [], 
        "symbol": "rect", 
        "links_from_mod": [], 
        "module": [
            "CDC_core"
        ], 
        "y": "58.429", 
        "rate": "( int_vol *   ( kd_Sic1  *  Sic1_cyt )  )", 
        "name_alt": "v_Sic1_d", 
        "name": "65", 
        "uni_links": [], 
        "compartments": [
            "intracellular"
        ], 
        "links_from": [
            "39"
        ], 
        "x": "160.11", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "27"
        ], 
        "links_to_mod": [], 
        "symbol": "rect", 
        "links_from_mod": [], 
        "module": [
            "CDC_core"
        ], 
        "y": "113.11", 
        "rate": "( int_vol *   ( ( kcf_Cln2_Far1p  *  Cln2_cyt )  *  Far1_p_cyt )  )", 
        "name_alt": "v_Cln2_ass_Far1p", 
        "name": "66", 
        "uni_links": [], 
        "compartments": [
            "intracellular"
        ], 
        "links_from": [
            "46", 
            "35"
        ], 
        "x": "266.9", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "39"
        ], 
        "links_to_mod": [], 
        "symbol": "rect", 
        "links_from_mod": [
            "17"
        ], 
        "module": [
            "CDC_core"
        ], 
        "y": "139.21", 
        "rate": "( int_vol *    ( ( kp_Sic1  *  Swi5_nuc )  /  ( Kp_Sic1  + Swi5_nuc ) )   )", 
        "name_alt": "v_Sic1_p", 
        "name": "67", 
        "uni_links": [], 
        "compartments": [
            "intracellular"
        ], 
        "links_from": [], 
        "x": "267.8", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "32", 
            "35"
        ], 
        "links_to_mod": [], 
        "symbol": "rect", 
        "links_from_mod": [], 
        "module": [
            "CDC_core"
        ], 
        "y": "99.747", 
        "rate": "( int_vol *   ( kcd_Cln3_Far1p  *  Cln3_Far1_p_cyt )  )", 
        "name_alt": "v_Cln3_diss_Far1p", 
        "name": "68", 
        "uni_links": [], 
        "compartments": [
            "intracellular"
        ], 
        "links_from": [
            "49"
        ], 
        "x": "262.78", 
        "is_ode": false
    }, 
    {
        "links_to": [], 
        "links_to_mod": [], 
        "symbol": "rect", 
        "links_from_mod": [], 
        "module": [
            "CDC_core"
        ], 
        "y": "51.365", 
        "rate": "( int_vol *   ( kd_Sic1p  *  Sic1_p_cyt )  )", 
        "name_alt": "v_Sic1_p_d", 
        "name": "69", 
        "uni_links": [], 
        "compartments": [
            "intracellular"
        ], 
        "links_from": [
            "31"
        ], 
        "x": "194.72", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "48"
        ], 
        "links_to_mod": [], 
        "symbol": "rect", 
        "links_from_mod": [
            "21"
        ], 
        "module": [
            "CDC_core"
        ], 
        "y": "54.814", 
        "rate": "( int_vol *   ( ( kdp_SBF  *  SBF_p_cyt )  *  Cdc14_p_cyt )  )", 
        "name_alt": "v_SBF_dp", 
        "name": "70", 
        "uni_links": [], 
        "compartments": [
            "intracellular"
        ], 
        "links_from": [
            "18"
        ], 
        "x": "210.26", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "45", 
            "39"
        ], 
        "links_to_mod": [], 
        "symbol": "rect", 
        "links_from_mod": [], 
        "module": [
            "CDC_core"
        ], 
        "y": "182.35", 
        "rate": "( int_vol * ( kcd_Clb3_Sic1  *  Clb3_Sic1_cyt )  )", 
        "name_alt": "v_Clb3_diss_Sic1", 
        "name": "71", 
        "uni_links": [], 
        "compartments": [
            "intracellular"
        ], 
        "links_from": [
            "26"
        ], 
        "x": "246.41", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "28"
        ], 
        "links_to_mod": [], 
        "symbol": "rect", 
        "links_from_mod": [
            "38"
        ], 
        "module": [
            "CDC_core"
        ], 
        "y": "66.668", 
        "rate": "( int_vol *   ( ( kpp_Swe1_Clb2  *  Swe1_cyt )  *  Clb2_cyt )  )", 
        "name_alt": "v_Swe1_pp", 
        "name": "72", 
        "uni_links": [], 
        "compartments": [
            "intracellular"
        ], 
        "links_from": [
            "16"
        ], 
        "x": "148.58", 
        "is_ode": false
    }, 
    {
        "links_to": [], 
        "links_to_mod": [], 
        "symbol": "rect", 
        "links_from_mod": [], 
        "module": [
            "CDC_core"
        ], 
        "y": "128.74", 
        "rate": "( int_vol * ( kd_Swi5_p  *  Swi5_p_cyt )  )", 
        "name_alt": "v_Swi5_p_d", 
        "name": "73", 
        "uni_links": [], 
        "compartments": [
            "intracellular"
        ], 
        "links_from": [
            "47"
        ], 
        "x": "269.9", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "23"
        ], 
        "links_to_mod": [], 
        "symbol": "rect", 
        "links_from_mod": [
            "46", 
            "32"
        ], 
        "module": [
            "CDC_core"
        ], 
        "y": "64.246", 
        "rate": "( int_vol *   ( Whi5_cyt  *  ( ( kpp_Cln2_Whi5  *  Cln2_cyt )  + ( kpp_Cln3_Whi5  *  Cln3_cyt ) ) )  )", 
        "name_alt": "v_Whi5_pp", 
        "name": "74", 
        "uni_links": [], 
        "compartments": [
            "intracellular"
        ], 
        "links_from": [
            "30"
        ], 
        "x": "232.76", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "29"
        ], 
        "links_to_mod": [], 
        "symbol": "rect", 
        "links_from_mod": [
            "25", 
            "50"
        ], 
        "module": [
            "CDC_core"
        ], 
        "y": "61.215", 
        "rate": "( int_vol *    (  ( ( kp_Clb5  *  MBF_nuc )  /  ( Kp_Clb5  + MBF_nuc ) )   /  ( 1.0  + ( kI_Clb5_Hog1  *  Hog1_PP_cyt ) ) )   )", 
        "name_alt": "v_Clb5_p", 
        "name": "75", 
        "uni_links": [], 
        "compartments": [
            "intracellular"
        ], 
        "links_from": [], 
        "x": "157.54", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "19"
        ], 
        "links_to_mod": [], 
        "symbol": "rect", 
        "links_from_mod": [
            "40"
        ], 
        "module": [
            "CDC_core"
        ], 
        "y": "120.01", 
        "rate": "( int_vol *   ( ( kp_Far1  *  Fus3_cyt )  + kp_basal_Far1 )  )", 
        "name_alt": "v_Far1_p", 
        "name": "76", 
        "uni_links": [], 
        "compartments": [
            "intracellular"
        ], 
        "links_from": [], 
        "x": "268.02", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "20"
        ], 
        "links_to_mod": [], 
        "symbol": "rect", 
        "links_from_mod": [
            "21"
        ], 
        "module": [
            "CDC_core"
        ], 
        "y": "159.35", 
        "rate": "( int_vol *   ( ( ka_APC_Cdc14  *  APC_p_cyt )  *  Cdc14_p_cyt )  )", 
        "name_alt": "v_APC_akt_Cdc14", 
        "name": "77", 
        "uni_links": [], 
        "compartments": [
            "intracellular"
        ], 
        "links_from": [
            "43"
        ], 
        "x": "262.09", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "19"
        ], 
        "links_to_mod": [], 
        "symbol": "rect", 
        "links_from_mod": [], 
        "module": [
            "CDC_core"
        ], 
        "y": "106.33", 
        "rate": "( int_vol *   ( kdp_Far1p  *  Far1_p_cyt )  )", 
        "name_alt": "v_Far1p_dp", 
        "name": "78", 
        "uni_links": [], 
        "compartments": [
            "intracellular"
        ], 
        "links_from": [
            "35"
        ], 
        "x": "265.15", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "51", 
            "29"
        ], 
        "links_to_mod": [], 
        "symbol": "rect", 
        "links_from_mod": [], 
        "module": [
            "CDC_core"
        ], 
        "y": "54.614", 
        "rate": "( int_vol * ( kcd_Clb5_Sic1_Hp  *  Clb5_Sic1_Hp_cyt )  )", 
        "name_alt": "v_Clb5_diss_Sic1_Hp", 
        "name": "79", 
        "uni_links": [], 
        "compartments": [
            "intracellular"
        ], 
        "links_from": [
            "33"
        ], 
        "x": "175.57", 
        "is_ode": false
    }, 
    {
        "links_to": [], 
        "links_to_mod": [], 
        "symbol": "rect", 
        "links_from_mod": [
            "20"
        ], 
        "module": [
            "CDC_core"
        ], 
        "y": "157.74", 
        "rate": "( int_vol *   ( ( kd_Clb2_APC  *  Clb2_cyt )  *  APC_cyt )  )", 
        "name_alt": "v_Clb2_d_APC", 
        "name": "80", 
        "uni_links": [], 
        "compartments": [
            "intracellular"
        ], 
        "links_from": [
            "38"
        ], 
        "x": "262.78", 
        "is_ode": false
    }, 
    {
        "links_to": [], 
        "links_to_mod": [], 
        "symbol": "rect", 
        "links_from_mod": [], 
        "module": [
            "CDC_core"
        ], 
        "y": "60.408", 
        "rate": "( int_vol *   ( kd_Whi5p  *  Whi5_p_cyt )  )", 
        "name_alt": "v_Whi5_p_d", 
        "name": "81", 
        "uni_links": [], 
        "compartments": [
            "intracellular"
        ], 
        "links_from": [
            "23"
        ], 
        "x": "228.86", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "28"
        ], 
        "links_to_mod": [], 
        "symbol": "rect", 
        "links_from_mod": [
            "25"
        ], 
        "module": [
            "CDC_core"
        ], 
        "y": "64.714", 
        "rate": "( int_vol *    ( ( kpp_Swe1_Hls1  *  Swe1_cyt )  /  ( 1.0  + ( kI_Swe1_Hog1  *  Hog1_PP_cyt ) ) )   )", 
        "name_alt": "v_Swe1_Hog1", 
        "name": "82", 
        "uni_links": [], 
        "compartments": [
            "intracellular"
        ], 
        "links_from": [
            "16"
        ], 
        "x": "151.48", 
        "is_ode": false
    }, 
    {
        "links_to": [], 
        "links_to_mod": [], 
        "symbol": "rect", 
        "links_from_mod": [], 
        "module": [
            "CDC_core"
        ], 
        "y": "56.363", 
        "rate": "( int_vol *   ( kd_Clb2_Sic1  *  Clb2_Sic1_cyt )  )", 
        "name_alt": "v_Clb2_Sic1_d", 
        "name": "83", 
        "uni_links": [], 
        "compartments": [
            "intracellular"
        ], 
        "links_from": [
            "41"
        ], 
        "x": "165.04", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "39"
        ], 
        "links_to_mod": [], 
        "symbol": "rect", 
        "links_from_mod": [], 
        "module": [
            "CDC_core"
        ], 
        "y": "55.471", 
        "rate": "( int_vol *   ( kdp_Sic1_Hp  *  Sic1_Hp_cyt )  )", 
        "name_alt": "v_Sic1_Hp_dp", 
        "name": "84", 
        "uni_links": [], 
        "compartments": [
            "intracellular"
        ], 
        "links_from": [
            "51"
        ], 
        "x": "172.18", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "46"
        ], 
        "links_to_mod": [], 
        "symbol": "rect", 
        "links_from_mod": [], 
        "module": [
            "CDC_core"
        ], 
        "y": "114.82", 
        "rate": "( int_vol *   ( ( kpp_Cln2_Far1p  *  Cln2_Far1_p_cyt )  *  Cln2_cyt )  )", 
        "name_alt": "v_Cln2_rel", 
        "name": "85", 
        "uni_links": [], 
        "compartments": [
            "intracellular"
        ], 
        "links_from": [
            "27"
        ], 
        "x": "267.24", 
        "is_ode": false
    }, 
    {
        "links_to": [], 
        "links_to_mod": [], 
        "symbol": "rect", 
        "links_from_mod": [
            "20"
        ], 
        "module": [
            "CDC_core"
        ], 
        "y": "156.12", 
        "rate": "( int_vol *   ( ( kd_Clb3_APC  *  Clb3_cyt )  *  APC_cyt )  )", 
        "name_alt": "v_Clb3_d_APC", 
        "name": "86", 
        "uni_links": [], 
        "compartments": [
            "intracellular"
        ], 
        "links_from": [
            "45"
        ], 
        "x": "263.43", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "22"
        ], 
        "links_to_mod": [], 
        "symbol": "rect", 
        "links_from_mod": [], 
        "module": [
            "CDC_core"
        ], 
        "y": "58.288", 
        "rate": "( int_vol *   ( (   kcf_Clb5_Sic1 )  *  Clb5_cyt )  *  Sic1_cyt )", 
        "name_alt": "v_Clb5_ass_Sic1", 
        "name": "87", 
        "uni_links": [], 
        "compartments": [
            "intracellular"
        ], 
        "links_from": [
            "39", 
            "29"
        ], 
        "x": "163.9", 
        "is_ode": false
    }, 
    {
        "links_to": [], 
        "links_to_mod": [], 
        "symbol": "rect", 
        "links_from_mod": [
            "46"
        ], 
        "module": [
            "CDC_core"
        ], 
        "y": "108.01", 
        "rate": "( int_vol *   ( ( kdd_Far1p  *  Far1_p_cyt )  *  Cln2_cyt )  )", 
        "name_alt": "v_Far1_p_dd", 
        "name": "88", 
        "uni_links": [], 
        "compartments": [
            "intracellular"
        ], 
        "links_from": [
            "35"
        ], 
        "x": "265.64", 
        "is_ode": false
    }, 
    {
        "links_to": [], 
        "links_to_mod": [], 
        "symbol": "rect", 
        "links_from_mod": [], 
        "module": [
            "CDC_core"
        ], 
        "y": "67.117", 
        "rate": "( int_vol *   ( kd_Swe1  *  Swe1_cyt )  )", 
        "name_alt": "v_Swe1_d", 
        "name": "89", 
        "uni_links": [], 
        "compartments": [
            "intracellular"
        ], 
        "links_from": [
            "16"
        ], 
        "x": "145.64", 
        "is_ode": false
    }, 
    {
        "links_to": [], 
        "links_to_mod": [], 
        "symbol": "rect", 
        "links_from_mod": [
            "20"
        ], 
        "module": [
            "CDC_core"
        ], 
        "y": "154.48", 
        "rate": "( int_vol *   ( ( kd_Clb5_APC  *  Clb5_cyt )  *  APC_cyt )  )", 
        "name_alt": "v_Clb5_d_APC", 
        "name": "90", 
        "uni_links": [], 
        "compartments": [
            "intracellular"
        ], 
        "links_from": [
            "29"
        ], 
        "x": "264.04", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "16"
        ], 
        "links_to_mod": [], 
        "symbol": "rect", 
        "links_from_mod": [], 
        "module": [
            "CDC_core"
        ], 
        "y": "66.074", 
        "rate": "( int_vol *   kp_Swe1  )", 
        "name_alt": "v_Swe1_p", 
        "name": "91", 
        "uni_links": [], 
        "compartments": [
            "intracellular"
        ], 
        "links_from": [], 
        "x": "147.05", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "24"
        ], 
        "links_to_mod": [], 
        "symbol": "rect", 
        "links_from_mod": [], 
        "module": [
            "CDC_core"
        ], 
        "y": "53.764", 
        "rate": "( int_vol *   ( ki_Cdc14  *  Cdc14_p_cyt )  )", 
        "name_alt": "v_Cdc14_inakt", 
        "name": "92", 
        "uni_links": [], 
        "compartments": [
            "intracellular"
        ], 
        "links_from": [
            "21"
        ], 
        "x": "205.12", 
        "is_ode": false
    }, 
    {
        "links_to": [], 
        "links_to_mod": [], 
        "symbol": "rect", 
        "links_from_mod": [], 
        "module": [
            "CDC_core"
        ], 
        "y": "51.795", 
        "rate": "( int_vol *   ( kd_Clb5_Sic1  *  Clb5_Sic1_cyt )  )", 
        "name_alt": "v_Clb5_Sic1_d", 
        "name": "93", 
        "uni_links": [], 
        "compartments": [
            "intracellular"
        ], 
        "links_from": [
            "22"
        ], 
        "x": "184.04", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "46", 
            "35"
        ], 
        "links_to_mod": [], 
        "symbol": "rect", 
        "links_from_mod": [], 
        "module": [
            "CDC_core"
        ], 
        "y": "111.4", 
        "rate": "( int_vol *   ( kcd_Cln2_Far1p  *  Cln2_Far1_p_cyt )  )", 
        "name_alt": "v_Cln2_diss_Far1p", 
        "name": "94", 
        "uni_links": [], 
        "compartments": [
            "intracellular"
        ], 
        "links_from": [
            "27"
        ], 
        "x": "266.52", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "38", 
            "39"
        ], 
        "links_to_mod": [], 
        "symbol": "rect", 
        "links_from_mod": [], 
        "module": [
            "CDC_core"
        ], 
        "y": "58.965", 
        "rate": "( int_vol * ( kcd_Clb2_Sic1  *  Clb2_Sic1_cyt )  )", 
        "name_alt": "v_Clb2_diss_Sic1", 
        "name": "95", 
        "uni_links": [], 
        "compartments": [
            "intracellular"
        ], 
        "links_from": [
            "41"
        ], 
        "x": "162.28", 
        "is_ode": false
    }, 
    {
        "links_to": [], 
        "links_to_mod": [], 
        "symbol": "rect", 
        "links_from_mod": [], 
        "module": [
            "CDC_core"
        ], 
        "y": "182.05", 
        "rate": "( int_vol *   ( kd_Clb3_Sic1  *  Clb3_Sic1_cyt )  )", 
        "name_alt": "v_Clb3_Sic1_d", 
        "name": "96", 
        "uni_links": [], 
        "compartments": [
            "intracellular"
        ], 
        "links_from": [
            "26"
        ], 
        "x": "248.63", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "17"
        ], 
        "links_to_mod": [], 
        "symbol": "rect", 
        "links_from_mod": [
            "21"
        ], 
        "module": [
            "CDC_core"
        ], 
        "y": "126.99", 
        "rate": "( int_vol *   ( ( kdp_Swi5_Cdc14  *  Swi5_p_cyt )  *  Cdc14_p_cyt )  )", 
        "name_alt": "v_Swi5_dp", 
        "name": "97", 
        "uni_links": [], 
        "compartments": [
            "intracellular"
        ], 
        "links_from": [
            "47"
        ], 
        "x": "268.51", 
        "is_ode": false
    }, 
    {
        "links_to": [], 
        "links_to_mod": [], 
        "symbol": "rect", 
        "links_from_mod": [], 
        "module": [
            "CDC_core"
        ], 
        "y": "60.831", 
        "rate": "( int_vol *   ( kd_Clb5  *  Clb5_cyt )  )", 
        "name_alt": "v_Clb5_d", 
        "name": "98", 
        "uni_links": [], 
        "compartments": [
            "intracellular"
        ], 
        "links_from": [
            "29"
        ], 
        "x": "155.34", 
        "is_ode": false
    }, 
    {
        "links_to": [], 
        "links_to_mod": [], 
        "symbol": "rect", 
        "links_from_mod": [], 
        "module": [
            "CDC_core"
        ], 
        "y": "151.56", 
        "rate": "( int_vol *   ( kd_APC  *  APC_cyt )  )", 
        "name_alt": "v_APC_d", 
        "name": "99", 
        "uni_links": [], 
        "compartments": [
            "intracellular"
        ], 
        "links_from": [
            "20"
        ], 
        "x": "266.46", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "51"
        ], 
        "links_to_mod": [], 
        "symbol": "rect", 
        "links_from_mod": [
            "25"
        ], 
        "module": [
            "CDC_core"
        ], 
        "y": "55.958", 
        "rate": "( int_vol *   ( ( kpp_Sic1_Hog1  *  Hog1_PP_cyt )  *  Sic1_cyt )  )", 
        "name_alt": "v_Sic1_pp_Hog1", 
        "name": "100", 
        "uni_links": [], 
        "compartments": [
            "intracellular"
        ], 
        "links_from": [
            "39"
        ], 
        "x": "170.5", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "31"
        ], 
        "links_to_mod": [], 
        "symbol": "rect", 
        "links_from_mod": [
            "46", 
            "29"
        ], 
        "module": [
            "CDC_core"
        ], 
        "y": "52.709", 
        "rate": "( int_vol *   ( Sic1_cyt  *  (  ( ( kpp_Cln2_Sic1  *  ( (Cln2_cyt)  **  n1 ) )  /  ( ( Kpp_Cln2_Sic1  **  n1 )  + ( (Cln2_cyt)  **  n1 ) ) )   +  ( ( kpp_Clb5_Sic1  *  ( (Clb5_cyt)  **  n1 ) )  /  ( ( Kpp_Clb5_Sic1  **  n1 )  + ( (Clb5_cyt)  **  n1 ) ) )  ) )  )", 
        "name_alt": "v_Sic1_pp", 
        "name": "101", 
        "uni_links": [], 
        "compartments": [
            "intracellular"
        ], 
        "links_from": [
            "39"
        ], 
        "x": "192.93", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "21"
        ], 
        "links_to_mod": [], 
        "symbol": "rect", 
        "links_from_mod": [
            "38"
        ], 
        "module": [
            "CDC_core"
        ], 
        "y": "53.493", 
        "rate": "( int_vol *   ( ( kpp_Cdc14_Clb2  *  Cdc14_cyt )  *  Clb2_cyt )  )", 
        "name_alt": "v_Cdc14_akt_Clb2", 
        "name": "102", 
        "uni_links": [], 
        "compartments": [
            "intracellular"
        ], 
        "links_from": [
            "24"
        ], 
        "x": "203.39", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "44"
        ], 
        "links_to_mod": [], 
        "symbol": "rect", 
        "links_from_mod": [
            "38"
        ], 
        "module": [
            "CDC_core"
        ], 
        "y": "144.38", 
        "rate": "( int_vol *    ( ( kp_Mcm1  *  ( (Clb2_cyt)  **  n_Mcm1 ) )  /  ( ( Kp_Mcm1  **  n_Mcm1 )  + ( (Clb2_cyt)  **  n_Mcm1 ) ) )   )", 
        "name_alt": "v_Mcm1_p_Clb2_fb", 
        "name": "103", 
        "uni_links": [], 
        "compartments": [
            "intracellular"
        ], 
        "links_from": [], 
        "x": "266.9", 
        "is_ode": false
    }, 
    {
        "links_to": [], 
        "links_to_mod": [], 
        "symbol": "rect", 
        "links_from_mod": [], 
        "module": [
            "CDC_core"
        ], 
        "y": "172.35", 
        "rate": "( int_vol *   ( kd_Clb3  *  Clb3_cyt )  )", 
        "name_alt": "v_Clb3_d", 
        "name": "104", 
        "uni_links": [], 
        "compartments": [
            "intracellular"
        ], 
        "links_from": [
            "45"
        ], 
        "x": "256.45", 
        "is_ode": false
    }, 
    {
        "links_to": [], 
        "links_to_mod": [], 
        "symbol": "rect", 
        "links_from_mod": [], 
        "module": [
            "CDC_core"
        ], 
        "y": "163.13", 
        "rate": "( int_vol *   ( kd_APC_p  *  APC_p_cyt )  )", 
        "name_alt": "v_APC_p_d", 
        "name": "105", 
        "uni_links": [], 
        "compartments": [
            "intracellular"
        ], 
        "links_from": [
            "43"
        ], 
        "x": "261.84", 
        "is_ode": false
    }, 
    {
        "links_to": [], 
        "links_to_mod": [], 
        "symbol": "rect", 
        "links_from_mod": [], 
        "module": [
            "CDC_core"
        ], 
        "y": "69.923", 
        "rate": "( int_vol * ( kd_Clb2_p  *  Clb2_p_cyt )  )", 
        "name_alt": "v_Clb2_p_d", 
        "name": "106", 
        "uni_links": [], 
        "compartments": [
            "intracellular"
        ], 
        "links_from": [
            "36"
        ], 
        "x": "142.16", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "49"
        ], 
        "links_to_mod": [], 
        "symbol": "rect", 
        "links_from_mod": [], 
        "module": [
            "CDC_core"
        ], 
        "y": "96.543", 
        "rate": "( int_vol *   ( ( kcf_Cln3_Far1p  *  Cln3_cyt )  *  Far1_p_cyt )  )", 
        "name_alt": "v_Cln3_ass_Far1p", 
        "name": "107", 
        "uni_links": [], 
        "compartments": [
            "intracellular"
        ], 
        "links_from": [
            "32", 
            "35"
        ], 
        "x": "261.37", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "31", 
            "29"
        ], 
        "links_to_mod": [], 
        "symbol": "rect", 
        "links_from_mod": [
            "46"
        ], 
        "module": [
            "CDC_core"
        ], 
        "y": "52.81", 
        "rate": "( int_vol *   ( Clb5_Sic1_cyt  *  (  ( ( kpp_Cln2_Sic1  *  ( (Cln2_cyt)  **  n1 ) )  /  ( ( Kpp_Cln2_Sic1  **  n1 )  + ( (Cln2_cyt)  **  n1 ) ) )   +  ( ( kpp_Clb5_Sic1  *  ( (Clb5_cyt)  **  n1 ) )  /  ( ( Kpp_Clb5_Sic1  **  n1 )  + ( (Clb5_cyt)  **  n1 ) ) )  ) )  )", 
        "name_alt": "v_Clb5_rel", 
        "name": "108", 
        "uni_links": [], 
        "compartments": [
            "intracellular"
        ], 
        "links_from": [
            "22"
        ], 
        "x": "196.42", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "17"
        ], 
        "links_to_mod": [], 
        "symbol": "rect", 
        "links_from_mod": [
            "44"
        ], 
        "module": [
            "CDC_core"
        ], 
        "y": "137.47", 
        "rate": "( int_vol *    ( ( kp_Swi5  *  Mcm1_nuc )  /  ( Kp_Swi5  + Mcm1_nuc ) )   )", 
        "name_alt": "v_Swi5_p", 
        "name": "109", 
        "uni_links": [], 
        "compartments": [
            "intracellular"
        ], 
        "links_from": [], 
        "x": "268.02", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "22"
        ], 
        "links_to_mod": [], 
        "symbol": "rect", 
        "links_from_mod": [], 
        "module": [
            "CDC_core"
        ], 
        "y": "53.372", 
        "rate": "( int_vol *   ( kdp_Clb5_Sic1_Hp  *  Clb5_Sic1_Hp_cyt )  )", 
        "name_alt": "v_Clb5_Sic1_Hp_dp", 
        "name": "110", 
        "uni_links": [], 
        "compartments": [
            "intracellular"
        ], 
        "links_from": [
            "33"
        ], 
        "x": "182.46", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "46"
        ], 
        "links_to_mod": [], 
        "symbol": "rect", 
        "links_from_mod": [
            "48", 
            "25"
        ], 
        "module": [
            "CDC_core"
        ], 
        "y": "57.343", 
        "rate": "( int_vol *    (  ( ( kp_Cln2  *  SBF_nuc )  /  ( Kp_Cln2  + SBF_nuc ) )   /  ( 1.0  + ( kI_Cln2_Hog1  *  Hog1_PP_cyt ) ) )   )", 
        "name_alt": "v_Cln2_p", 
        "name": "111", 
        "uni_links": [], 
        "compartments": [
            "intracellular"
        ], 
        "links_from": [], 
        "x": "218.63", 
        "is_ode": false
    }, 
    {
        "links_to": [], 
        "links_to_mod": [], 
        "symbol": "rect", 
        "links_from_mod": [], 
        "module": [
            "CDC_core"
        ], 
        "y": "97.584", 
        "rate": "( int_vol *   ( kd_Cln3_Far1p  *  Cln3_Far1_p_cyt )  )", 
        "name_alt": "v_Cln3_Far1p_d", 
        "name": "112", 
        "uni_links": [], 
        "compartments": [
            "intracellular"
        ], 
        "links_from": [
            "49"
        ], 
        "x": "263.35", 
        "is_ode": false
    }, 
    {
        "links_to": [], 
        "links_to_mod": [], 
        "symbol": "rect", 
        "links_from_mod": [], 
        "module": [
            "CDC_core"
        ], 
        "y": "134.08", 
        "rate": "( int_vol *   ( kd_Swi5  *  Swi5_nuc )  )", 
        "name_alt": "v_Swi5_d", 
        "name": "113", 
        "uni_links": [], 
        "compartments": [
            "intracellular"
        ], 
        "links_from": [
            "17"
        ], 
        "x": "269.72", 
        "is_ode": false
    }, 
    {
        "links_to": [], 
        "links_to_mod": [], 
        "symbol": "rect", 
        "links_from_mod": [], 
        "module": [
            "CDC_core"
        ], 
        "y": "65.036", 
        "rate": "( int_vol *   ( kd_Cln2  *  Cln2_cyt )  )", 
        "name_alt": "v_Cln2_d", 
        "name": "114", 
        "uni_links": [], 
        "compartments": [
            "intracellular"
        ], 
        "links_from": [
            "46"
        ], 
        "x": "236.46", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "32"
        ], 
        "links_to_mod": [], 
        "symbol": "rect", 
        "links_from_mod": [
            "46"
        ], 
        "module": [
            "CDC_core"
        ], 
        "y": "70.403", 
        "rate": "( int_vol *   ( ( kpp_Cln2_Far1p  *  Cln3_Far1_p_cyt )  *  Cln2_cyt )  )", 
        "name_alt": "v_Cln3_rel", 
        "name": "115", 
        "uni_links": [], 
        "compartments": [
            "intracellular"
        ], 
        "links_from": [
            "49"
        ], 
        "x": "241.25", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "44"
        ], 
        "links_to_mod": [], 
        "symbol": "rect", 
        "links_from_mod": [
            "45"
        ], 
        "module": [
            "CDC_core"
        ], 
        "y": "142.66", 
        "rate": "( int_vol *    ( ( v0_Mcm1  *  ( (Clb3_cyt)  **  n_Mcm1 ) )  /  ( ( V0_Mcm1  **  n_Mcm1 )  + ( (Clb3_cyt)  **  n_Mcm1 ) ) )   )", 
        "name_alt": "v_Mcm1_p_basal", 
        "name": "116", 
        "uni_links": [], 
        "compartments": [
            "intracellular"
        ], 
        "links_from": [], 
        "x": "267.24", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "35"
        ], 
        "links_to_mod": [], 
        "symbol": "rect", 
        "links_from_mod": [
            "40"
        ], 
        "module": [
            "CDC_core"
        ], 
        "y": "118.28", 
        "rate": "( int_vol *   ( ( kpp_Far1  *  Far1_cyt )  *  Fus3_cyt )  )", 
        "name_alt": "v_Far1_pp", 
        "name": "117", 
        "uni_links": [], 
        "compartments": [
            "intracellular"
        ], 
        "links_from": [
            "19"
        ], 
        "x": "267.8", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "47"
        ], 
        "links_to_mod": [], 
        "symbol": "rect", 
        "links_from_mod": [
            "29"
        ], 
        "module": [
            "CDC_core"
        ], 
        "y": "132.24", 
        "rate": "( int_vol *   ( ( kpp_Swi5_Clb5  *  Swi5_nuc )  *  Clb5_cyt )  )", 
        "name_alt": "v_Swi5_pp_Clb5", 
        "name": "118", 
        "uni_links": [], 
        "compartments": [
            "intracellular"
        ], 
        "links_from": [
            "17"
        ], 
        "x": "268.44", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "47"
        ], 
        "links_to_mod": [], 
        "symbol": "rect", 
        "links_from_mod": [
            "38"
        ], 
        "module": [
            "CDC_core"
        ], 
        "y": "130.49", 
        "rate": "( int_vol *   ( ( kpp_Swi5_Clb2  *  Swi5_nuc )  *  Clb2_cyt )  )", 
        "name_alt": "v_Swi5_pp_Clb2", 
        "name": "119", 
        "uni_links": [], 
        "compartments": [
            "intracellular"
        ], 
        "links_from": [
            "17"
        ], 
        "x": "268.51", 
        "is_ode": false
    }, 
    {
        "links_to": [], 
        "links_to_mod": [], 
        "symbol": "rect", 
        "links_from_mod": [], 
        "module": [
            "CDC_core"
        ], 
        "y": "64.534", 
        "rate": "( int_vol *   ( kd_Swe1_p  *  Swe1_p_cyt )  )", 
        "name_alt": "v_Swe1_p_d", 
        "name": "120", 
        "uni_links": [], 
        "compartments": [
            "intracellular"
        ], 
        "links_from": [
            "28"
        ], 
        "x": "149.25", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "36"
        ], 
        "links_to_mod": [], 
        "symbol": "rect", 
        "links_from_mod": [
            "16"
        ], 
        "module": [
            "CDC_core"
        ], 
        "y": "69.846", 
        "rate": "( int_vol *   ( ( kpp_Clb2  *  Clb2_cyt )  *  Swe1_cyt )  )", 
        "name_alt": "v_Clb2_pp", 
        "name": "121", 
        "uni_links": [], 
        "compartments": [
            "intracellular"
        ], 
        "links_from": [
            "38"
        ], 
        "x": "144.4", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "45"
        ], 
        "links_to_mod": [], 
        "symbol": "rect", 
        "links_from_mod": [
            "29"
        ], 
        "module": [
            "CDC_core"
        ], 
        "y": "173.01", 
        "rate": "( int_vol *    ( ( kp_Clb3  *  ( (Clb5_cyt)  **  n_Clb3 ) )  /  ( ( Kp_Clb3  **  n_Clb3 )  + ( (Clb5_cyt)  **  n_Clb3 ) ) )   )", 
        "name_alt": "v_Clb3_p_Clb5", 
        "name": "122", 
        "uni_links": [], 
        "compartments": [
            "intracellular"
        ], 
        "links_from": [], 
        "x": "254.31", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "43"
        ], 
        "links_to_mod": [], 
        "symbol": "rect", 
        "links_from_mod": [
            "38"
        ], 
        "module": [
            "CDC_core"
        ], 
        "y": "164.08", 
        "rate": "( int_vol *   ( ( kpp_APC_Clb2  *  APC_cyt )  *  Clb2_cyt )  )", 
        "name_alt": "v_APC_inakt_Clb2", 
        "name": "123", 
        "uni_links": [], 
        "compartments": [
            "intracellular"
        ], 
        "links_from": [
            "20"
        ], 
        "x": "259.82", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "43"
        ], 
        "links_to_mod": [], 
        "symbol": "rect", 
        "links_from_mod": [
            "29"
        ], 
        "module": [
            "CDC_core"
        ], 
        "y": "160.94", 
        "rate": "( int_vol *   ( ( kpp_APC_Clb5  *  APC_cyt )  *  Clb5_cyt )  )", 
        "name_alt": "v_APC_inakt_Clb5", 
        "name": "124", 
        "uni_links": [], 
        "compartments": [
            "intracellular"
        ], 
        "links_from": [
            "20"
        ], 
        "x": "261.37", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "38"
        ], 
        "links_to_mod": [], 
        "symbol": "rect", 
        "links_from_mod": [
            "25", 
            "44"
        ], 
        "module": [
            "CDC_core"
        ], 
        "y": "149.48", 
        "rate": "( int_vol *    (  ( ( kp_Clb2  *  Mcm1_nuc )  /  ( Kp_Clb2  + Mcm1_nuc ) )   /  ( 1.0  + ( kI_Clb2_Hog1  *  Hog1_PP_cyt ) ) )   )", 
        "name_alt": "v_Clb2_p", 
        "name": "125", 
        "uni_links": [], 
        "compartments": [
            "intracellular"
        ], 
        "links_from": [], 
        "x": "265.64", 
        "is_ode": false
    }, 
    {
        "links_to": [], 
        "links_to_mod": [], 
        "symbol": "rect", 
        "links_from_mod": [], 
        "module": [
            "CDC_core"
        ], 
        "y": "74.799", 
        "rate": "( int_vol *   ( kd_MBF  *  MBF_nuc )  )", 
        "name_alt": "v_MBF_d", 
        "name": "126", 
        "uni_links": [], 
        "compartments": [
            "intracellular"
        ], 
        "links_from": [
            "50"
        ], 
        "x": "136.97", 
        "is_ode": false
    }, 
    {
        "links_to": [], 
        "links_to_mod": [], 
        "symbol": "rect", 
        "links_from_mod": [], 
        "module": [
            "CDC_core"
        ], 
        "y": "57.02", 
        "rate": "( int_vol *   ( kd_Whi5  *  Whi5_cyt )  )", 
        "name_alt": "v_Whi5_d", 
        "name": "127", 
        "uni_links": [], 
        "compartments": [
            "intracellular"
        ], 
        "links_from": [
            "30"
        ], 
        "x": "221.61", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "33"
        ], 
        "links_to_mod": [], 
        "symbol": "rect", 
        "links_from_mod": [
            "25"
        ], 
        "module": [
            "CDC_core"
        ], 
        "y": "53.623", 
        "rate": "( int_vol *   ( ( kpp_Clb5_Sic1_Hog1  *  Hog1_PP_cyt )  *  Clb5_Sic1_cyt)  )", 
        "name_alt": "v_Clb5_Sic1_pp_Hog1", 
        "name": "128", 
        "uni_links": [], 
        "compartments": [
            "intracellular"
        ], 
        "links_from": [
            "22"
        ], 
        "x": "180.72", 
        "is_ode": false
    }, 
    {
        "links_to": [], 
        "links_to_mod": [], 
        "symbol": "rect", 
        "links_from_mod": [], 
        "module": [
            "CDC_core"
        ], 
        "y": "167.83", 
        "rate": "( int_vol *   ( kd_Clb2  *  Clb2_cyt )  )", 
        "name_alt": "v_Clb2_d", 
        "name": "129", 
        "uni_links": [], 
        "compartments": [
            "intracellular"
        ], 
        "links_from": [
            "38"
        ], 
        "x": "259.31", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "30"
        ], 
        "links_to_mod": [], 
        "symbol": "rect", 
        "links_from_mod": [
            "21"
        ], 
        "module": [
            "CDC_core"
        ], 
        "y": "60.049", 
        "rate": "( int_vol *   ( ( Whi5_p_cyt  *  kdp_Whi5 )  *  Cdc14_p_cyt )  )", 
        "name_alt": "v_Whi5p_dp", 
        "name": "130", 
        "uni_links": [], 
        "compartments": [
            "intracellular"
        ], 
        "links_from": [
            "23"
        ], 
        "x": "225.09", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "30"
        ], 
        "links_to_mod": [], 
        "symbol": "rect", 
        "links_from_mod": [], 
        "module": [
            "CDC_core"
        ], 
        "y": "57.697", 
        "rate": "( int_vol *   kp_Whi5  )", 
        "name_alt": "v_Whi5_p", 
        "name": "131", 
        "uni_links": [], 
        "compartments": [
            "intracellular"
        ], 
        "links_from": [], 
        "x": "223.23", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "26"
        ], 
        "links_to_mod": [], 
        "symbol": "rect", 
        "links_from_mod": [], 
        "module": [
            "CDC_core"
        ], 
        "y": "179.82", 
        "rate": "( int_vol *   ( (   kcf_Clb3_Sic1 )  *  Clb3_cyt )  *  Sic1_cyt )", 
        "name_alt": "v_Clb3_ass_Sic1", 
        "name": "132", 
        "uni_links": [], 
        "compartments": [
            "intracellular"
        ], 
        "links_from": [
            "45", 
            "39"
        ], 
        "x": "248.82", 
        "is_ode": false
    }, 
    {
        "links_to": [], 
        "links_to_mod": [], 
        "symbol": "rect", 
        "links_from_mod": [], 
        "module": [
            "CDC_core"
        ], 
        "y": "72.904", 
        "rate": "( int_vol *   ( kd_Mih1  *  Mih1_cyt )  )", 
        "name_alt": "v_Mih1_d", 
        "name": "133", 
        "uni_links": [], 
        "compartments": [
            "intracellular"
        ], 
        "links_from": [
            "34"
        ], 
        "x": "138.88", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "39", 
            "29"
        ], 
        "links_to_mod": [], 
        "symbol": "rect", 
        "links_from_mod": [], 
        "module": [
            "CDC_core"
        ], 
        "y": "60.429", 
        "rate": "( int_vol * ( kcd_Clb5_Sic1  *  Clb5_Sic1_cyt )  )", 
        "name_alt": "v_Clb5_diss_Sic1", 
        "name": "134", 
        "uni_links": [], 
        "compartments": [
            "intracellular"
        ], 
        "links_from": [
            "22"
        ], 
        "x": "159.1", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "21"
        ], 
        "links_to_mod": [], 
        "symbol": "rect", 
        "links_from_mod": [
            "20"
        ], 
        "module": [
            "CDC_core"
        ], 
        "y": "53.071", 
        "rate": "( int_vol *   ( ( ka_Cdc14_APC  *  Cdc14_cyt )  *  APC_cyt )  )", 
        "name_alt": "v_Cdc14_akt_APC", 
        "name": "135", 
        "uni_links": [], 
        "compartments": [
            "intracellular"
        ], 
        "links_from": [
            "24"
        ], 
        "x": "199.91", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "20"
        ], 
        "links_to_mod": [], 
        "symbol": "rect", 
        "links_from_mod": [
            "44"
        ], 
        "module": [
            "CDC_core"
        ], 
        "y": "147.79", 
        "rate": "( int_vol *    ( ( kp_APC  *  Mcm1_nuc )  /  ( Kp_APC  + Mcm1_nuc ) )   )", 
        "name_alt": "v_APC_akt_p_Mcm1", 
        "name": "136", 
        "uni_links": [], 
        "compartments": [
            "intracellular"
        ], 
        "links_from": [], 
        "x": "266.1", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "34"
        ], 
        "links_to_mod": [], 
        "symbol": "rect", 
        "links_from_mod": [], 
        "module": [
            "CDC_core"
        ], 
        "y": "71.706", 
        "rate": "( int_vol *   kp_Mih1  )", 
        "name_alt": "v_Mih1_p", 
        "name": "137", 
        "uni_links": [], 
        "compartments": [
            "intracellular"
        ], 
        "links_from": [], 
        "x": "140.15", 
        "is_ode": false
    }, 
    {
        "links_to": [], 
        "links_to_mod": [], 
        "symbol": "rect", 
        "links_from_mod": [], 
        "module": [
            "CDC_core"
        ], 
        "y": "67.68", 
        "rate": "( int_vol *   ( kd_Cln3  *  Cln3_cyt )  )", 
        "name_alt": "v_Cln3_d", 
        "name": "138", 
        "uni_links": [], 
        "compartments": [
            "intracellular"
        ], 
        "links_from": [
            "32"
        ], 
        "x": "240.07", 
        "is_ode": false
    }, 
    {
        "links_to": [], 
        "links_to_mod": [], 
        "symbol": "rect", 
        "links_from_mod": [], 
        "module": [
            "CDC_core"
        ], 
        "y": "59.589", 
        "rate": "( int_vol *   ( kd_Whi5_SBF  *  SBF_Whi5_nuc )  )", 
        "name_alt": "v_Whi5_SBF_d", 
        "name": "139", 
        "uni_links": [], 
        "compartments": [
            "intracellular"
        ], 
        "links_from": [
            "42"
        ], 
        "x": "227.28", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "32"
        ], 
        "links_to_mod": [], 
        "symbol": "rect", 
        "links_from_mod": [], 
        "module": [
            "CDC_core"
        ], 
        "y": "68.771", 
        "rate": "( int_vol *   kp_Cln3  )", 
        "name_alt": "v_Cln3_p", 
        "name": "140", 
        "uni_links": [], 
        "compartments": [
            "intracellular"
        ], 
        "links_from": [], 
        "x": "241.44", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "146"
        ], 
        "links_to_mod": [], 
        "symbol": "circle", 
        "links_from_mod": [], 
        "module": [
            "GEX_APC"
        ], 
        "y": "176.49", 
        "annotation": "YCM:rRNA", 
        "name_alt": "rRNA", 
        "name": "141", 
        "uni_links": [], 
        "state": "0", 
        "links_from": [
            "145"
        ], 
        "x": "133.32", 
        "compartment": "intracellular", 
        "is_ode": false
    }, 
    {
        "links_to": [], 
        "links_to_mod": [], 
        "symbol": "circle", 
        "links_from_mod": [], 
        "module": [
            "GEX_APC", 
            "GEX_TRL", 
            "TRP_ION"
        ], 
        "y": "45.077", 
        "annotation": "SBO:0000468", 
        "name_alt": "cyt_vol", 
        "name": "142", 
        "uni_links": [
            "350", 
            "334"
        ], 
        "state": "0", 
        "links_from": [], 
        "x": "225.39", 
        "compartment": "cytosol", 
        "is_ode": true
    }, 
    {
        "links_to": [
            "146", 
            "251"
        ], 
        "links_to_mod": [], 
        "symbol": "circle", 
        "links_from_mod": [], 
        "module": [
            "GEX_APC", 
            "GEX_TRL"
        ], 
        "y": "160.15", 
        "annotation": "YCM:B_Protein_R", 
        "name_alt": "B_Protein_R", 
        "name": "143", 
        "uni_links": [], 
        "state": "0", 
        "links_from": [
            "145", 
            "250"
        ], 
        "x": "123.24", 
        "compartment": "intracellular", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "145", 
            "247", 
            "249", 
            "255"
        ], 
        "links_to_mod": [
            "170", 
            "172", 
            "174", 
            "177", 
            "178", 
            "192", 
            "202", 
            "203", 
            "206", 
            "213", 
            "219", 
            "225", 
            "227", 
            "233", 
            "236", 
            "237"
        ], 
        "symbol": "circle", 
        "links_from_mod": [], 
        "module": [
            "GEX_APC", 
            "GEX_GRN", 
            "GEX_TRL"
        ], 
        "y": "179.17", 
        "annotation": "YCM:ribosome", 
        "name_alt": "Ribosome", 
        "name": "144", 
        "uni_links": [
            "238"
        ], 
        "state": "0", 
        "links_from": [
            "146", 
            "252", 
            "254", 
            "256"
        ], 
        "x": "135.58", 
        "compartment": "intracellular", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "143", 
            "141"
        ], 
        "links_to_mod": [], 
        "symbol": "rect", 
        "links_from_mod": [], 
        "module": [
            "GEX_APC"
        ], 
        "y": "175.12", 
        "rate": "(k_DIS_Ribosome * Ribosome)*int_vol", 
        "name_alt": "v_DIS_Ribosome", 
        "name": "145", 
        "uni_links": [], 
        "compartments": [
            "intracellular"
        ], 
        "links_from": [
            "144"
        ], 
        "x": "132.23", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "144"
        ], 
        "links_to_mod": [], 
        "symbol": "rect", 
        "links_from_mod": [], 
        "module": [
            "GEX_APC"
        ], 
        "y": "177.84", 
        "rate": "(k_ASS_Ribosome * rRNA * B_Protein_R)*int_vol", 
        "name_alt": "v_ASS_Ribosome", 
        "name": "146", 
        "uni_links": [], 
        "compartments": [
            "intracellular"
        ], 
        "links_from": [
            "143", 
            "141"
        ], 
        "x": "134.43", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "209"
        ], 
        "links_to_mod": [
            "172"
        ], 
        "symbol": "circle", 
        "links_from_mod": [], 
        "module": [
            "GEX_GRN"
        ], 
        "y": "204.75", 
        "annotation": "SGD:S000005609p", 
        "name_alt": "mWhi5", 
        "name": "147", 
        "uni_links": [], 
        "state": "mRNA", 
        "links_from": [
            "169"
        ], 
        "x": "194.68", 
        "compartment": "intracellular", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "196"
        ], 
        "links_to_mod": [
            "203"
        ], 
        "symbol": "circle", 
        "links_from_mod": [], 
        "module": [
            "GEX_GRN"
        ], 
        "y": "203.24", 
        "annotation": "SGD:S000002214p_SGD:S000004172p", 
        "name_alt": "mMBF", 
        "name": "148", 
        "uni_links": [], 
        "state": "mRNA", 
        "links_from": [
            "210"
        ], 
        "x": "177.28", 
        "compartment": "intracellular", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "201"
        ], 
        "links_to_mod": [
            "174"
        ], 
        "symbol": "circle", 
        "links_from_mod": [], 
        "module": [
            "GEX_GRN"
        ], 
        "y": "204.77", 
        "annotation": "SGD:S000000038p", 
        "name_alt": "mCln3", 
        "name": "149", 
        "uni_links": [], 
        "state": "mRNA", 
        "links_from": [
            "168"
        ], 
        "x": "191.18", 
        "compartment": "intracellular", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "222"
        ], 
        "links_to_mod": [
            "227"
        ], 
        "symbol": "circle", 
        "links_from_mod": [], 
        "module": [
            "GEX_GRN"
        ], 
        "y": "204.63", 
        "annotation": "SGD:S000006177p", 
        "name_alt": "mCln2", 
        "name": "150", 
        "uni_links": [], 
        "state": "mRNA", 
        "links_from": [
            "191"
        ], 
        "x": "187.68", 
        "compartment": "intracellular", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "228"
        ], 
        "links_to_mod": [
            "237"
        ], 
        "symbol": "circle", 
        "links_from_mod": [], 
        "module": [
            "GEX_GRN"
        ], 
        "y": "191.32", 
        "annotation": "SGD:S000002553p", 
        "name_alt": "mSwi5", 
        "name": "151", 
        "uni_links": [], 
        "state": "mRNA", 
        "links_from": [
            "229"
        ], 
        "x": "235.68", 
        "compartment": "intracellular", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "168", 
            "169", 
            "171", 
            "176", 
            "183", 
            "187", 
            "188", 
            "191", 
            "193", 
            "195", 
            "200", 
            "210", 
            "217", 
            "226", 
            "229", 
            "234"
        ], 
        "links_to_mod": [], 
        "symbol": "circle", 
        "links_from_mod": [], 
        "module": [
            "GEX_GRN"
        ], 
        "y": "195.87", 
        "annotation": "YCM:NA", 
        "name_alt": "NA", 
        "name": "152", 
        "uni_links": [], 
        "state": "0", 
        "links_from": [
            "182", 
            "184", 
            "190", 
            "194", 
            "196", 
            "201", 
            "204", 
            "208", 
            "209", 
            "214", 
            "215", 
            "220", 
            "221", 
            "222", 
            "224", 
            "228"
        ], 
        "x": "228.21", 
        "compartment": "intracellular", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "184"
        ], 
        "links_to_mod": [
            "225"
        ], 
        "symbol": "circle", 
        "links_from_mod": [], 
        "module": [
            "GEX_GRN"
        ], 
        "y": "203.86", 
        "annotation": "SGD:S000002314p", 
        "name_alt": "mClb3", 
        "name": "153", 
        "uni_links": [], 
        "state": "mRNA", 
        "links_from": [
            "200"
        ], 
        "x": "180.72", 
        "compartment": "intracellular", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "221"
        ], 
        "links_to_mod": [
            "206"
        ], 
        "symbol": "circle", 
        "links_from_mod": [], 
        "module": [
            "GEX_GRN"
        ], 
        "y": "188.19", 
        "annotation": "SGD:S000006323p", 
        "name_alt": "mClb2", 
        "name": "154", 
        "uni_links": [], 
        "state": "mRNA", 
        "links_from": [
            "226"
        ], 
        "x": "239.9", 
        "compartment": "intracellular", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "194"
        ], 
        "links_to_mod": [
            "236"
        ], 
        "symbol": "circle", 
        "links_from_mod": [], 
        "module": [
            "GEX_GRN"
        ], 
        "y": "204.33", 
        "annotation": "SGD:S000006324p", 
        "name_alt": "mClb5", 
        "name": "155", 
        "uni_links": [], 
        "state": "mRNA", 
        "links_from": [
            "195"
        ], 
        "x": "184.19", 
        "compartment": "intracellular", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "220"
        ], 
        "links_to_mod": [
            "192"
        ], 
        "symbol": "circle", 
        "links_from_mod": [], 
        "module": [
            "GEX_GRN"
        ], 
        "y": "204.23", 
        "annotation": "SGD:S000003723p", 
        "name_alt": "mSwe1", 
        "name": "156", 
        "uni_links": [], 
        "state": "mRNA", 
        "links_from": [
            "187"
        ], 
        "x": "201.65", 
        "compartment": "intracellular", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "285", 
            "288", 
            "293", 
            "296"
        ], 
        "links_to_mod": [], 
        "symbol": "circle", 
        "links_from_mod": [], 
        "module": [
            "GEX_GRN", 
            "GEX_TRL", 
            "MET_CCM", 
            "TRP_NUT"
        ], 
        "y": "197.06", 
        "annotation": "CHEBI:456216", 
        "name_alt": "ADP", 
        "name": "157", 
        "uni_links": [], 
        "state": "-3", 
        "links_from": [
            "168", 
            "169", 
            "170", 
            "171", 
            "172", 
            "174", 
            "176", 
            "177", 
            "178", 
            "183", 
            "187", 
            "188", 
            "191", 
            "192", 
            "193", 
            "195", 
            "200", 
            "202", 
            "203", 
            "206", 
            "210", 
            "213", 
            "217", 
            "219", 
            "225", 
            "226", 
            "227", 
            "229", 
            "233", 
            "234", 
            "236", 
            "237", 
            "250", 
            "257", 
            "258", 
            "282", 
            "283", 
            "284", 
            "287", 
            "289", 
            "291", 
            "292", 
            "294", 
            "295", 
            "298"
        ], 
        "x": "159.1", 
        "compartment": "intracellular", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "224"
        ], 
        "links_to_mod": [
            "213"
        ], 
        "symbol": "circle", 
        "links_from_mod": [], 
        "module": [
            "GEX_GRN"
        ], 
        "y": "202.46", 
        "annotation": "SGD:S000003693p", 
        "name_alt": "mFar1", 
        "name": "158", 
        "uni_links": [], 
        "state": "mRNA", 
        "links_from": [
            "217"
        ], 
        "x": "173.87", 
        "compartment": "intracellular", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "182"
        ], 
        "links_to_mod": [
            "233"
        ], 
        "symbol": "circle", 
        "links_from_mod": [], 
        "module": [
            "GEX_GRN"
        ], 
        "y": "203.72", 
        "annotation": "SGD:S000004639p", 
        "name_alt": "mMih1", 
        "name": "159", 
        "uni_links": [], 
        "state": "mRNA", 
        "links_from": [
            "234"
        ], 
        "x": "205.12", 
        "compartment": "intracellular", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "215"
        ], 
        "links_to_mod": [
            "219"
        ], 
        "symbol": "circle", 
        "links_from_mod": [], 
        "module": [
            "GEX_GRN"
        ], 
        "y": "177.17", 
        "annotation": "SGD:S000004646p", 
        "name_alt": "mMcm1", 
        "name": "160", 
        "uni_links": [], 
        "state": "mRNA", 
        "links_from": [
            "188"
        ], 
        "x": "251.11", 
        "compartment": "intracellular", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "168", 
            "169", 
            "170", 
            "171", 
            "172", 
            "174", 
            "176", 
            "177", 
            "178", 
            "183", 
            "187", 
            "188", 
            "191", 
            "192", 
            "193", 
            "195", 
            "200", 
            "202", 
            "203", 
            "206", 
            "210", 
            "213", 
            "217", 
            "219", 
            "225", 
            "226", 
            "227", 
            "229", 
            "233", 
            "234", 
            "236", 
            "237", 
            "250", 
            "257", 
            "258", 
            "282", 
            "283", 
            "284", 
            "287", 
            "289", 
            "291", 
            "292", 
            "295", 
            "298"
        ], 
        "links_to_mod": [
            "294"
        ], 
        "symbol": "circle", 
        "links_from_mod": [], 
        "module": [
            "GEX_GRN", 
            "GEX_TRL", 
            "MET_CCM", 
            "TRP_NUT"
        ], 
        "y": "201.53", 
        "annotation": "CHEBI:30616", 
        "name_alt": "ATP", 
        "name": "161", 
        "uni_links": [], 
        "state": "-4", 
        "links_from": [
            "285", 
            "293", 
            "296"
        ], 
        "x": "170.5", 
        "compartment": "intracellular", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "285", 
            "293", 
            "294", 
            "296"
        ], 
        "links_to_mod": [], 
        "symbol": "circle", 
        "links_from_mod": [], 
        "module": [
            "GEX_GRN", 
            "GEX_TRL", 
            "MET_CCM", 
            "TRP_NUT"
        ], 
        "y": "194.59", 
        "annotation": "CHEBI:43474", 
        "name_alt": "Pi", 
        "name": "162", 
        "uni_links": [], 
        "state": "-2", 
        "links_from": [
            "168", 
            "169", 
            "170", 
            "171", 
            "172", 
            "174", 
            "176", 
            "177", 
            "178", 
            "183", 
            "187", 
            "188", 
            "191", 
            "192", 
            "193", 
            "195", 
            "199", 
            "200", 
            "202", 
            "203", 
            "206", 
            "210", 
            "213", 
            "217", 
            "219", 
            "225", 
            "226", 
            "227", 
            "229", 
            "230", 
            "233", 
            "234", 
            "236", 
            "237", 
            "250", 
            "257", 
            "258", 
            "282", 
            "283", 
            "284", 
            "286", 
            "287", 
            "289", 
            "291", 
            "295"
        ], 
        "x": "154.47", 
        "compartment": "intracellular", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "170", 
            "172", 
            "174", 
            "177", 
            "178", 
            "192", 
            "202", 
            "203", 
            "206", 
            "213", 
            "219", 
            "225", 
            "227", 
            "233", 
            "236", 
            "237", 
            "250", 
            "257", 
            "258", 
            "288"
        ], 
        "links_to_mod": [], 
        "symbol": "circle", 
        "links_from_mod": [], 
        "module": [
            "GEX_GRN", 
            "GEX_TRL", 
            "MET_CCM", 
            "TRP_NUT"
        ], 
        "y": "145.24", 
        "annotation": "YCM:AA", 
        "name_alt": "AA", 
        "name": "163", 
        "uni_links": [], 
        "state": "0", 
        "links_from": [
            "173", 
            "175", 
            "179", 
            "180", 
            "181", 
            "185", 
            "186", 
            "189", 
            "197", 
            "198", 
            "199", 
            "205", 
            "207", 
            "211", 
            "212", 
            "216", 
            "218", 
            "223", 
            "230", 
            "231", 
            "232", 
            "235", 
            "248", 
            "251", 
            "253", 
            "282"
        ], 
        "x": "118.26", 
        "compartment": "intracellular", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "204"
        ], 
        "links_to_mod": [
            "178"
        ], 
        "symbol": "circle", 
        "links_from_mod": [], 
        "module": [
            "GEX_GRN"
        ], 
        "y": "184.78", 
        "annotation": "SGD:S000002971p", 
        "name_alt": "mAPC", 
        "name": "164", 
        "uni_links": [], 
        "state": "mRNA", 
        "links_from": [
            "183"
        ], 
        "x": "243.89", 
        "compartment": "intracellular", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "208"
        ], 
        "links_to_mod": [
            "202"
        ], 
        "symbol": "circle", 
        "links_from_mod": [], 
        "module": [
            "GEX_GRN"
        ], 
        "y": "203.06", 
        "annotation": "SGD:S000000913p_SGD:S000004172p", 
        "name_alt": "mSBF", 
        "name": "165", 
        "uni_links": [], 
        "state": "mRNA", 
        "links_from": [
            "193"
        ], 
        "x": "208.55", 
        "compartment": "intracellular", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "190"
        ], 
        "links_to_mod": [
            "170"
        ], 
        "symbol": "circle", 
        "links_from_mod": [], 
        "module": [
            "GEX_GRN"
        ], 
        "y": "204.57", 
        "annotation": "SGD:S000001924p", 
        "name_alt": "mCdc14", 
        "name": "166", 
        "uni_links": [], 
        "state": "mRNA", 
        "links_from": [
            "171"
        ], 
        "x": "198.17", 
        "compartment": "intracellular", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "214"
        ], 
        "links_to_mod": [
            "177"
        ], 
        "symbol": "circle", 
        "links_from_mod": [], 
        "module": [
            "GEX_GRN"
        ], 
        "y": "194.15", 
        "annotation": "SGD:S000004069p", 
        "name_alt": "mSic1", 
        "name": "167", 
        "uni_links": [], 
        "state": "mRNA", 
        "links_from": [
            "176"
        ], 
        "x": "231.26", 
        "compartment": "intracellular", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "162", 
            "149", 
            "157"
        ], 
        "links_to_mod": [], 
        "symbol": "rect", 
        "links_from_mod": [], 
        "module": [
            "GEX_GRN"
        ], 
        "y": "204.72", 
        "rate": "corr_Cln3_TRSC * vmax_TRSC_Cln3 * (ATP/(kM_ATP + ATP)) * (NA/(kM_NA + NA))*int_vol", 
        "name_alt": "v_mCln3_TRSC", 
        "name": "168", 
        "uni_links": [], 
        "compartments": [
            "intracellular"
        ], 
        "links_from": [
            "152", 
            "161"
        ], 
        "x": "189.43", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "147", 
            "162", 
            "157"
        ], 
        "links_to_mod": [], 
        "symbol": "rect", 
        "links_from_mod": [], 
        "module": [
            "GEX_GRN"
        ], 
        "y": "204.78", 
        "rate": "corr_Whi5_TRSC * vmax_TRSC_Whi5 * (ATP/(kM_ATP + ATP)) * (NA/(kM_NA + NA))*int_vol", 
        "name_alt": "v_mWhi5_TRSC", 
        "name": "169", 
        "uni_links": [], 
        "compartments": [
            "intracellular"
        ], 
        "links_from": [
            "152", 
            "161"
        ], 
        "x": "192.93", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "162", 
            "157", 
            "24"
        ], 
        "links_to_mod": [], 
        "symbol": "rect", 
        "links_from_mod": [
            "166", 
            "144"
        ], 
        "module": [
            "GEX_GRN"
        ], 
        "y": "181.73", 
        "rate": "corr_Cdc14_TRSL * vmax_TRSL_Cdc14 * mCdc14 * (ATP/(kM_ATP + ATP)) * (AA/(kM_AA + AA)) * (ribosome/(kM_ribosome + ribosome))*int_vol", 
        "name_alt": "v_mCdc14_TRSL", 
        "name": "170", 
        "uni_links": [], 
        "compartments": [
            "intracellular"
        ], 
        "links_from": [
            "163", 
            "161"
        ], 
        "x": "137.96", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "166", 
            "162", 
            "157"
        ], 
        "links_to_mod": [], 
        "symbol": "rect", 
        "links_from_mod": [], 
        "module": [
            "GEX_GRN"
        ], 
        "y": "204.68", 
        "rate": "corr_Cdc14_TRSC * vmax_TRSC_Cdc14 * (ATP/(kM_ATP + ATP)) * (NA/(kM_NA + NA))*int_vol", 
        "name_alt": "v_mCdc14_TRSC", 
        "name": "171", 
        "uni_links": [], 
        "compartments": [
            "intracellular"
        ], 
        "links_from": [
            "152", 
            "161"
        ], 
        "x": "196.42", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "30", 
            "162", 
            "157"
        ], 
        "links_to_mod": [], 
        "symbol": "rect", 
        "links_from_mod": [
            "144", 
            "147"
        ], 
        "module": [
            "GEX_GRN"
        ], 
        "y": "189.79", 
        "rate": "corr_Whi5_TRSL * vmax_TRSL_Whi5 * mWhi5 * (ATP/(kM_ATP + ATP)) * (AA/(kM_AA + AA)) * (ribosome/(kM_ribosome + ribosome))*int_vol", 
        "name_alt": "v_mWhi5_TRSL", 
        "name": "172", 
        "uni_links": [], 
        "compartments": [
            "intracellular"
        ], 
        "links_from": [
            "163", 
            "161"
        ], 
        "x": "147.16", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "163"
        ], 
        "links_to_mod": [], 
        "symbol": "rect", 
        "links_from_mod": [
            "20"
        ], 
        "module": [
            "GEX_GRN"
        ], 
        "y": "170.12", 
        "rate": "(kd_Clb3_APC * Clb3 * APC)*int_vol", 
        "name_alt": "v_Clb3_deg_APC", 
        "name": "173", 
        "uni_links": [], 
        "compartments": [
            "intracellular"
        ], 
        "links_from": [
            "45"
        ], 
        "x": "256.28", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "162", 
            "32", 
            "157"
        ], 
        "links_to_mod": [], 
        "symbol": "rect", 
        "links_from_mod": [
            "144", 
            "149"
        ], 
        "module": [
            "GEX_GRN"
        ], 
        "y": "180.46", 
        "rate": "corr_Cln3_TRSL * vmax_TRSL_Cln3 * mCln3 * (ATP/(kM_ATP + ATP)) * (AA/(kM_AA + AA)) * (ribosome/(kM_ribosome + ribosome))*int_vol", 
        "name_alt": "v_mCln3_TRSL", 
        "name": "174", 
        "uni_links": [], 
        "compartments": [
            "intracellular"
        ], 
        "links_from": [
            "163", 
            "161"
        ], 
        "x": "136.75", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "163"
        ], 
        "links_to_mod": [], 
        "symbol": "rect", 
        "links_from_mod": [], 
        "module": [
            "GEX_GRN"
        ], 
        "y": "65.19", 
        "rate": "(kd_Cln2 * Cln2)*int_vol", 
        "name_alt": "v_Cln2_deg", 
        "name": "175", 
        "uni_links": [], 
        "compartments": [
            "intracellular"
        ], 
        "links_from": [
            "46"
        ], 
        "x": "234.23", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "167", 
            "162", 
            "157"
        ], 
        "links_to_mod": [], 
        "symbol": "rect", 
        "links_from_mod": [
            "17"
        ], 
        "module": [
            "GEX_GRN"
        ], 
        "y": "195.03", 
        "rate": "corr_Sic1_TRSC * vmax_TRSC_Sic1 * (ATP/(kM_ATP + ATP)) * (NA/(kM_NA + NA)) * Swi5/(Kp_Sic1 + Swi5)*int_vol", 
        "name_alt": "v_mSic1_TRSC", 
        "name": "176", 
        "uni_links": [], 
        "compartments": [
            "intracellular"
        ], 
        "links_from": [
            "152", 
            "161"
        ], 
        "x": "229.75", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "162", 
            "39", 
            "157"
        ], 
        "links_to_mod": [], 
        "symbol": "rect", 
        "links_from_mod": [
            "167", 
            "144"
        ], 
        "module": [
            "GEX_GRN"
        ], 
        "y": "182.97", 
        "rate": "corr_Sic1_TRSL * kp_Sic1 * mSic1 * (ATP/(kM_ATP + ATP)) * (AA/(kM_AA + AA)) * (ribosome/(kM_ribosome + ribosome))*int_vol", 
        "name_alt": "v_mSic1_TRSL", 
        "name": "177", 
        "uni_links": [], 
        "compartments": [
            "intracellular"
        ], 
        "links_from": [
            "163", 
            "161"
        ], 
        "x": "139.19", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "20", 
            "162", 
            "157"
        ], 
        "links_to_mod": [], 
        "symbol": "rect", 
        "links_from_mod": [
            "164", 
            "144"
        ], 
        "module": [
            "GEX_GRN"
        ], 
        "y": "200.44", 
        "rate": "corr_APC_TRSL * kp_APC * mAPC * (ATP/(kM_ATP + ATP)) * (AA/(kM_AA + AA)) * (ribosome/(kM_ribosome + ribosome))*int_vol", 
        "name_alt": "v_mAPC_TRSL", 
        "name": "178", 
        "uni_links": [], 
        "compartments": [
            "intracellular"
        ], 
        "links_from": [
            "163", 
            "161"
        ], 
        "x": "167.17", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "163"
        ], 
        "links_to_mod": [], 
        "symbol": "rect", 
        "links_from_mod": [], 
        "module": [
            "GEX_GRN"
        ], 
        "y": "152.82", 
        "rate": "(kd_APC * APC)*int_vol", 
        "name_alt": "v_APC_deg", 
        "name": "179", 
        "uni_links": [], 
        "compartments": [
            "intracellular"
        ], 
        "links_from": [
            "20"
        ], 
        "x": "264.61", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "163"
        ], 
        "links_to_mod": [], 
        "symbol": "rect", 
        "links_from_mod": [], 
        "module": [
            "GEX_GRN"
        ], 
        "y": "77.026", 
        "rate": "(kd_MBF * MBF)*int_vol", 
        "name_alt": "v_MBF_deg", 
        "name": "180", 
        "uni_links": [], 
        "compartments": [
            "intracellular"
        ], 
        "links_from": [
            "50"
        ], 
        "x": "136.75", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "163"
        ], 
        "links_to_mod": [], 
        "symbol": "rect", 
        "links_from_mod": [], 
        "module": [
            "GEX_GRN"
        ], 
        "y": "52.92", 
        "rate": "(k_Cdc14_deg * Cdc14)*int_vol", 
        "name_alt": "v_Cdc14_deg", 
        "name": "181", 
        "uni_links": [], 
        "compartments": [
            "intracellular"
        ], 
        "links_from": [
            "24"
        ], 
        "x": "198.17", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "152"
        ], 
        "links_to_mod": [], 
        "symbol": "rect", 
        "links_from_mod": [], 
        "module": [
            "GEX_GRN"
        ], 
        "y": "201.78", 
        "rate": "(k_mMih1_deg * mMih1)*int_vol", 
        "name_alt": "v_mMih1_deg", 
        "name": "182", 
        "uni_links": [], 
        "compartments": [
            "intracellular"
        ], 
        "links_from": [
            "159"
        ], 
        "x": "213.64", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "164", 
            "162", 
            "157"
        ], 
        "links_to_mod": [], 
        "symbol": "rect", 
        "links_from_mod": [
            "44"
        ], 
        "module": [
            "GEX_GRN"
        ], 
        "y": "185.95", 
        "rate": "corr_APC_TRSC * vmax_TRSC_APC * (ATP/(kM_ATP + ATP)) * (NA/(kM_NA + NA)) * Mcm1/(Kp_APC + Mcm1)*int_vol", 
        "name_alt": "v_mAPC_TRSC", 
        "name": "183", 
        "uni_links": [], 
        "compartments": [
            "intracellular"
        ], 
        "links_from": [
            "152", 
            "161"
        ], 
        "x": "242.58", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "152"
        ], 
        "links_to_mod": [], 
        "symbol": "rect", 
        "links_from_mod": [], 
        "module": [
            "GEX_GRN"
        ], 
        "y": "196.67", 
        "rate": "(k_mClb3_deg * mClb3)*int_vol", 
        "name_alt": "v_mClb3_deg", 
        "name": "184", 
        "uni_links": [], 
        "compartments": [
            "intracellular"
        ], 
        "links_from": [
            "153"
        ], 
        "x": "226.66", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "163"
        ], 
        "links_to_mod": [], 
        "symbol": "rect", 
        "links_from_mod": [], 
        "module": [
            "GEX_GRN"
        ], 
        "y": "135.73", 
        "rate": "(kd_Swi5 * Swi5)*int_vol", 
        "name_alt": "v_Swi5_deg", 
        "name": "185", 
        "uni_links": [], 
        "compartments": [
            "intracellular"
        ], 
        "links_from": [
            "17"
        ], 
        "x": "268.2", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "163"
        ], 
        "links_to_mod": [], 
        "symbol": "rect", 
        "links_from_mod": [], 
        "module": [
            "GEX_GRN"
        ], 
        "y": "56.216", 
        "rate": "(k_SBF_deg * SBF)*int_vol", 
        "name_alt": "v_SBF_deg", 
        "name": "186", 
        "uni_links": [], 
        "compartments": [
            "intracellular"
        ], 
        "links_from": [
            "48"
        ], 
        "x": "215.32", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "156", 
            "162", 
            "157"
        ], 
        "links_to_mod": [], 
        "symbol": "rect", 
        "links_from_mod": [], 
        "module": [
            "GEX_GRN"
        ], 
        "y": "204.42", 
        "rate": "corr_Swe1_TRSC * vmax_TRSC_Swe1 * (ATP/(kM_ATP + ATP)) * (NA/(kM_NA + NA))*int_vol", 
        "name_alt": "v_mSwe1_TRSC", 
        "name": "187", 
        "uni_links": [], 
        "compartments": [
            "intracellular"
        ], 
        "links_from": [
            "152", 
            "161"
        ], 
        "x": "199.91", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "160", 
            "162", 
            "157"
        ], 
        "links_to_mod": [], 
        "symbol": "rect", 
        "links_from_mod": [
            "45", 
            "38"
        ], 
        "module": [
            "GEX_GRN"
        ], 
        "y": "178.51", 
        "rate": "corr_Mcm1_TRSC * vmax_TRSC_Mcm1 * (Clb2**n_Mcm1/(Kp_Mcm1**n_Mcm1 + Clb2**n_Mcm1) + (v0_Mcm1/kp_Mcm1) * Clb3**n_Mcm1/(V0_Mcm1**n_Mcm1 + Clb3**n_Mcm1)) * (ATP/(kM_ATP + ATP)) * (NA/(kM_NA + NA))*int_vol", 
        "name_alt": "v_mMcm1_TRSC", 
        "name": "188", 
        "uni_links": [], 
        "compartments": [
            "intracellular"
        ], 
        "links_from": [
            "152", 
            "161"
        ], 
        "x": "249.98", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "163"
        ], 
        "links_to_mod": [], 
        "symbol": "rect", 
        "links_from_mod": [], 
        "module": [
            "GEX_GRN"
        ], 
        "y": "74.516", 
        "rate": "(k_Mih1_deg * Mih1)*int_vol", 
        "name_alt": "v_Mih1_deg", 
        "name": "189", 
        "uni_links": [], 
        "compartments": [
            "intracellular"
        ], 
        "links_from": [
            "34"
        ], 
        "x": "139.19", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "152"
        ], 
        "links_to_mod": [], 
        "symbol": "rect", 
        "links_from_mod": [], 
        "module": [
            "GEX_GRN"
        ], 
        "y": "201.27", 
        "rate": "(k_mCdc14_deg * mCdc14)*int_vol", 
        "name_alt": "v_mCdc14_deg", 
        "name": "190", 
        "uni_links": [], 
        "compartments": [
            "intracellular"
        ], 
        "links_from": [
            "166"
        ], 
        "x": "215.32", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "162", 
            "150", 
            "157"
        ], 
        "links_to_mod": [], 
        "symbol": "rect", 
        "links_from_mod": [
            "48"
        ], 
        "module": [
            "GEX_GRN"
        ], 
        "y": "204.5", 
        "rate": "corr_Cln2_TRSC * vmax_TRSC_Cln2 * (ATP/(kM_ATP + ATP)) * (NA/(kM_NA + NA)) * SBF/(Kp_Cln2 + SBF)*int_vol", 
        "name_alt": "v_mCln2_TRSC", 
        "name": "191", 
        "uni_links": [], 
        "compartments": [
            "intracellular"
        ], 
        "links_from": [
            "152", 
            "161"
        ], 
        "x": "185.93", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "16", 
            "162", 
            "157"
        ], 
        "links_to_mod": [], 
        "symbol": "rect", 
        "links_from_mod": [
            "156", 
            "144"
        ], 
        "module": [
            "GEX_GRN"
        ], 
        "y": "184.18", 
        "rate": "corr_Swe1_TRSL * vmax_TRSL_Swe1 * mSwe1 * (ATP/(kM_ATP + ATP)) * (AA/(kM_AA + AA)) * (ribosome/(kM_ribosome + ribosome))*int_vol", 
        "name_alt": "v_mSwe1_TRSL", 
        "name": "192", 
        "uni_links": [], 
        "compartments": [
            "intracellular"
        ], 
        "links_from": [
            "163", 
            "161"
        ], 
        "x": "140.45", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "165", 
            "162", 
            "157"
        ], 
        "links_to_mod": [], 
        "symbol": "rect", 
        "links_from_mod": [], 
        "module": [
            "GEX_GRN"
        ], 
        "y": "203.41", 
        "rate": "vmax_TRSC_SBF * (ATP/(kM_ATP + ATP)) * (NA/(kM_NA + NA))*int_vol", 
        "name_alt": "v_mSBF_TRSC", 
        "name": "193", 
        "uni_links": [], 
        "compartments": [
            "intracellular"
        ], 
        "links_from": [
            "152", 
            "161"
        ], 
        "x": "206.84", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "152"
        ], 
        "links_to_mod": [], 
        "symbol": "rect", 
        "links_from_mod": [], 
        "module": [
            "GEX_GRN"
        ], 
        "y": "200.73", 
        "rate": "(k_mClb5_deg * mClb5)*int_vol", 
        "name_alt": "v_mClb5_deg", 
        "name": "194", 
        "uni_links": [], 
        "compartments": [
            "intracellular"
        ], 
        "links_from": [
            "155"
        ], 
        "x": "216.98", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "162", 
            "157", 
            "155"
        ], 
        "links_to_mod": [], 
        "symbol": "rect", 
        "links_from_mod": [
            "50"
        ], 
        "module": [
            "GEX_GRN"
        ], 
        "y": "204.12", 
        "rate": "corr_Clb5_TRSC * vmax_TRSC_Clb5 * (ATP/(kM_ATP + ATP)) * (NA/(kM_NA + NA)) * MBF/(Kp_Clb5 + MBF)*int_vol", 
        "name_alt": "v_mClb5_TRSC", 
        "name": "195", 
        "uni_links": [], 
        "compartments": [
            "intracellular"
        ], 
        "links_from": [
            "152", 
            "161"
        ], 
        "x": "182.46", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "152"
        ], 
        "links_to_mod": [], 
        "symbol": "rect", 
        "links_from_mod": [], 
        "module": [
            "GEX_GRN"
        ], 
        "y": "202.67", 
        "rate": "(k_mMBF_deg * mMBF)*int_vol", 
        "name_alt": "v_mMBF_deg", 
        "name": "196", 
        "uni_links": [], 
        "compartments": [
            "intracellular"
        ], 
        "links_from": [
            "148"
        ], 
        "x": "210.26", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "163"
        ], 
        "links_to_mod": [], 
        "symbol": "rect", 
        "links_from_mod": [], 
        "module": [
            "GEX_GRN"
        ], 
        "y": "57.964", 
        "rate": "(k_Whi5_deg * Whi5)*int_vol", 
        "name_alt": "v_Whi5_deg", 
        "name": "197", 
        "uni_links": [], 
        "compartments": [
            "intracellular"
        ], 
        "links_from": [
            "30"
        ], 
        "x": "220.27", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "163"
        ], 
        "links_to_mod": [], 
        "symbol": "rect", 
        "links_from_mod": [], 
        "module": [
            "GEX_GRN"
        ], 
        "y": "68.221", 
        "rate": "(k_Cln3_deg * Cln3)*int_vol", 
        "name_alt": "v_Cln3_deg", 
        "name": "198", 
        "uni_links": [], 
        "compartments": [
            "intracellular"
        ], 
        "links_from": [
            "32"
        ], 
        "x": "238.52", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "163", 
            "162"
        ], 
        "links_to_mod": [], 
        "symbol": "rect", 
        "links_from_mod": [], 
        "module": [
            "GEX_GRN"
        ], 
        "y": "140.08", 
        "rate": "(k_Cdc14_p_deg * Cdc14_p)*int_vol", 
        "name_alt": "v_Cdc14_p_deg", 
        "name": "199", 
        "uni_links": [], 
        "compartments": [
            "intracellular"
        ], 
        "links_from": [
            "21"
        ], 
        "x": "117.3", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "153", 
            "162", 
            "157"
        ], 
        "links_to_mod": [], 
        "symbol": "rect", 
        "links_from_mod": [
            "29"
        ], 
        "module": [
            "GEX_GRN"
        ], 
        "y": "203.57", 
        "rate": "corr_Clb3_TRSC * vmax_TRSC_Clb3 * (ATP/(kM_ATP + ATP)) * (NA/(kM_NA + NA)) * (Clb5**n_Clb3/(Kp_Clb3**n_Clb3 + Clb5**n_Clb3))*int_vol", 
        "name_alt": "v_mClb3_TRSC", 
        "name": "200", 
        "uni_links": [], 
        "compartments": [
            "intracellular"
        ], 
        "links_from": [
            "152", 
            "161"
        ], 
        "x": "179", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "152"
        ], 
        "links_to_mod": [], 
        "symbol": "rect", 
        "links_from_mod": [], 
        "module": [
            "GEX_GRN"
        ], 
        "y": "197.44", 
        "rate": "(k_mCln3_deg * mCln3)*int_vol", 
        "name_alt": "v_mCln3_deg", 
        "name": "201", 
        "uni_links": [], 
        "compartments": [
            "intracellular"
        ], 
        "links_from": [
            "149"
        ], 
        "x": "225.09", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "162", 
            "48", 
            "157"
        ], 
        "links_to_mod": [], 
        "symbol": "rect", 
        "links_from_mod": [
            "165", 
            "144"
        ], 
        "module": [
            "GEX_GRN"
        ], 
        "y": "185.37", 
        "rate": "vmax_TRSL_SBF * mSBF * (ATP/(kM_ATP + ATP)) * (AA/(kM_AA + AA)) * (ribosome/(kM_ribosome + ribosome))*int_vol", 
        "name_alt": "v_mSBF_TRSL", 
        "name": "202", 
        "uni_links": [], 
        "compartments": [
            "intracellular"
        ], 
        "links_from": [
            "163", 
            "161"
        ], 
        "x": "141.74", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "50", 
            "162", 
            "157"
        ], 
        "links_to_mod": [], 
        "symbol": "rect", 
        "links_from_mod": [
            "144", 
            "148"
        ], 
        "module": [
            "GEX_GRN"
        ], 
        "y": "186.52", 
        "rate": "corr_MBF_TRSL * kp_MBF * mMBF * (ATP/(kM_ATP + ATP)) * (AA/(kM_AA + AA)) * (ribosome/(kM_ribosome + ribosome))*int_vol", 
        "name_alt": "v_mMBF_TRSL", 
        "name": "203", 
        "uni_links": [], 
        "compartments": [
            "intracellular"
        ], 
        "links_from": [
            "163", 
            "161"
        ], 
        "x": "143.06", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "152"
        ], 
        "links_to_mod": [], 
        "symbol": "rect", 
        "links_from_mod": [], 
        "module": [
            "GEX_GRN"
        ], 
        "y": "183.58", 
        "rate": "(k_mAPC_deg * mAPC)*int_vol", 
        "name_alt": "v_mAPC_deg", 
        "name": "204", 
        "uni_links": [], 
        "compartments": [
            "intracellular"
        ], 
        "links_from": [
            "164"
        ], 
        "x": "245.16", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "163"
        ], 
        "links_to_mod": [], 
        "symbol": "rect", 
        "links_from_mod": [], 
        "module": [
            "GEX_GRN"
        ], 
        "y": "174.42", 
        "rate": "(kd_Clb3 * Clb3)*int_vol", 
        "name_alt": "v_Clb3_deg", 
        "name": "205", 
        "uni_links": [], 
        "compartments": [
            "intracellular"
        ], 
        "links_from": [
            "45"
        ], 
        "x": "253.28", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "38", 
            "162", 
            "157"
        ], 
        "links_to_mod": [], 
        "symbol": "rect", 
        "links_from_mod": [
            "154", 
            "144"
        ], 
        "module": [
            "GEX_GRN"
        ], 
        "y": "199.84", 
        "rate": "corr_Clb2_TRSL * kp_Clb2 * mClb2 * (ATP/(kM_ATP + ATP)) * (AA/(kM_AA + AA)) * (ribosome/(kM_ribosome + ribosome))*int_vol", 
        "name_alt": "v_mClb2_TRSL", 
        "name": "206", 
        "uni_links": [], 
        "compartments": [
            "intracellular"
        ], 
        "links_from": [
            "163", 
            "161"
        ], 
        "x": "165.53", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "163"
        ], 
        "links_to_mod": [], 
        "symbol": "rect", 
        "links_from_mod": [], 
        "module": [
            "GEX_GRN"
        ], 
        "y": "62.895", 
        "rate": "(kd_Clb5 * Clb5)*int_vol", 
        "name_alt": "v_Clb5_deg", 
        "name": "207", 
        "uni_links": [], 
        "compartments": [
            "intracellular"
        ], 
        "links_from": [
            "29"
        ], 
        "x": "154.47", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "152"
        ], 
        "links_to_mod": [], 
        "symbol": "rect", 
        "links_from_mod": [], 
        "module": [
            "GEX_GRN"
        ], 
        "y": "200.14", 
        "rate": "(k_mSBF_deg * mSBF)*int_vol", 
        "name_alt": "v_mSBF_deg", 
        "name": "208", 
        "uni_links": [], 
        "compartments": [
            "intracellular"
        ], 
        "links_from": [
            "165"
        ], 
        "x": "218.63", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "152"
        ], 
        "links_to_mod": [], 
        "symbol": "rect", 
        "links_from_mod": [], 
        "module": [
            "GEX_GRN"
        ], 
        "y": "199.52", 
        "rate": "(k_mWhi5_deg * mWhi5)*int_vol", 
        "name_alt": "v_mWhi5_deg", 
        "name": "209", 
        "uni_links": [], 
        "compartments": [
            "intracellular"
        ], 
        "links_from": [
            "147"
        ], 
        "x": "220.27", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "162", 
            "157", 
            "148"
        ], 
        "links_to_mod": [], 
        "symbol": "rect", 
        "links_from_mod": [
            "46"
        ], 
        "module": [
            "GEX_GRN"
        ], 
        "y": "202.87", 
        "rate": "corr_MBF_TRSC * vmax_TRSC_MBF * (ATP/(kM_ATP + ATP)) * (NA/(kM_NA + NA)) * Cln2**n1/(K_MBF**n1 + Cln2**n1)*int_vol", 
        "name_alt": "v_mMBF_TRSC", 
        "name": "210", 
        "uni_links": [], 
        "compartments": [
            "intracellular"
        ], 
        "links_from": [
            "152", 
            "161"
        ], 
        "x": "175.57", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "163"
        ], 
        "links_to_mod": [], 
        "symbol": "rect", 
        "links_from_mod": [], 
        "module": [
            "GEX_GRN"
        ], 
        "y": "68.755", 
        "rate": "(k_Swe1_deg * Swe1)*int_vol", 
        "name_alt": "v_Swe1_deg", 
        "name": "211", 
        "uni_links": [], 
        "compartments": [
            "intracellular"
        ], 
        "links_from": [
            "16"
        ], 
        "x": "145.77", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "163"
        ], 
        "links_to_mod": [], 
        "symbol": "rect", 
        "links_from_mod": [
            "20"
        ], 
        "module": [
            "GEX_GRN"
        ], 
        "y": "165.62", 
        "rate": "(kd_Clb2_APC * Clb2 * APC)*int_vol", 
        "name_alt": "v_Clb2_deg_APC", 
        "name": "212", 
        "uni_links": [], 
        "compartments": [
            "intracellular"
        ], 
        "links_from": [
            "38"
        ], 
        "x": "258.98", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "162", 
            "19", 
            "157"
        ], 
        "links_to_mod": [], 
        "symbol": "rect", 
        "links_from_mod": [
            "158", 
            "144"
        ], 
        "module": [
            "GEX_GRN"
        ], 
        "y": "187.64", 
        "rate": "corr_Far1_TRSL * kp_basal_Far1 * mFar1 * (ATP/(kM_ATP + ATP)) * (AA/(kM_AA + AA)) * (ribosome/(kM_ribosome + ribosome))*int_vol", 
        "name_alt": "v_mFar1_TRSL", 
        "name": "213", 
        "uni_links": [], 
        "compartments": [
            "intracellular"
        ], 
        "links_from": [
            "163", 
            "161"
        ], 
        "x": "144.4", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "152"
        ], 
        "links_to_mod": [], 
        "symbol": "rect", 
        "links_from_mod": [], 
        "module": [
            "GEX_GRN"
        ], 
        "y": "193.24", 
        "rate": "(k_mSic1_deg * mSic1)*int_vol", 
        "name_alt": "v_mSic1_deg", 
        "name": "214", 
        "uni_links": [], 
        "compartments": [
            "intracellular"
        ], 
        "links_from": [
            "167"
        ], 
        "x": "232.76", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "152"
        ], 
        "links_to_mod": [], 
        "symbol": "rect", 
        "links_from_mod": [], 
        "module": [
            "GEX_GRN"
        ], 
        "y": "175.81", 
        "rate": "(k_mMcm1_deg * mMcm1)*int_vol", 
        "name_alt": "v_mMcm1_deg", 
        "name": "215", 
        "uni_links": [], 
        "compartments": [
            "intracellular"
        ], 
        "links_from": [
            "160"
        ], 
        "x": "252.21", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "163"
        ], 
        "links_to_mod": [], 
        "symbol": "rect", 
        "links_from_mod": [], 
        "module": [
            "GEX_GRN"
        ], 
        "y": "168.64", 
        "rate": "(kd_Clb2 * Clb2)*int_vol", 
        "name_alt": "v_Clb2_deg", 
        "name": "216", 
        "uni_links": [], 
        "compartments": [
            "intracellular"
        ], 
        "links_from": [
            "38"
        ], 
        "x": "257.22", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "158", 
            "162", 
            "157"
        ], 
        "links_to_mod": [], 
        "symbol": "rect", 
        "links_from_mod": [
            "40"
        ], 
        "module": [
            "GEX_GRN"
        ], 
        "y": "202.02", 
        "rate": "corr_Far1_TRSC * vmax_TRSC_Far1 * (ATP/(kM_ATP + ATP)) * (NA/(kM_NA + NA)) * ( ((kp_Far1/kp_basal_Far1) * Fus3) + 1 )*int_vol", 
        "name_alt": "v_mFar1_TRSC", 
        "name": "217", 
        "uni_links": [], 
        "compartments": [
            "intracellular"
        ], 
        "links_from": [
            "152", 
            "161"
        ], 
        "x": "172.18", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "163"
        ], 
        "links_to_mod": [], 
        "symbol": "rect", 
        "links_from_mod": [], 
        "module": [
            "GEX_GRN"
        ], 
        "y": "101.37", 
        "rate": "(kd_Far1 * Far1)*int_vol", 
        "name_alt": "v_Far1_deg", 
        "name": "218", 
        "uni_links": [], 
        "compartments": [
            "intracellular"
        ], 
        "links_from": [
            "19"
        ], 
        "x": "263.43", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "162", 
            "157", 
            "44"
        ], 
        "links_to_mod": [], 
        "symbol": "rect", 
        "links_from_mod": [
            "160", 
            "144"
        ], 
        "module": [
            "GEX_GRN"
        ], 
        "y": "199.2", 
        "rate": "corr_Mcm1_TRSL * kp_Mcm1 * mMcm1 * (ATP/(kM_ATP + ATP)) * (AA/(kM_AA + AA)) * (ribosome/(kM_ribosome + ribosome))*int_vol", 
        "name_alt": "v_mMcm1_TRSL", 
        "name": "219", 
        "uni_links": [], 
        "compartments": [
            "intracellular"
        ], 
        "links_from": [
            "163", 
            "161"
        ], 
        "x": "163.9", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "152"
        ], 
        "links_to_mod": [], 
        "symbol": "rect", 
        "links_from_mod": [], 
        "module": [
            "GEX_GRN"
        ], 
        "y": "202.25", 
        "rate": "(k_mSwe1_deg * mSwe1)*int_vol", 
        "name_alt": "v_mSwe1_deg", 
        "name": "220", 
        "uni_links": [], 
        "compartments": [
            "intracellular"
        ], 
        "links_from": [
            "156"
        ], 
        "x": "211.96", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "152"
        ], 
        "links_to_mod": [], 
        "symbol": "rect", 
        "links_from_mod": [], 
        "module": [
            "GEX_GRN"
        ], 
        "y": "187.08", 
        "rate": "(k_mClb2_deg * mClb2)*int_vol", 
        "name_alt": "v_mClb2_deg", 
        "name": "221", 
        "uni_links": [], 
        "compartments": [
            "intracellular"
        ], 
        "links_from": [
            "154"
        ], 
        "x": "241.25", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "152"
        ], 
        "links_to_mod": [], 
        "symbol": "rect", 
        "links_from_mod": [], 
        "module": [
            "GEX_GRN"
        ], 
        "y": "198.87", 
        "rate": "(k_mCln2_deg * mCln2)*int_vol", 
        "name_alt": "v_mCln2_deg", 
        "name": "222", 
        "uni_links": [], 
        "compartments": [
            "intracellular"
        ], 
        "links_from": [
            "150"
        ], 
        "x": "221.89", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "163"
        ], 
        "links_to_mod": [], 
        "symbol": "rect", 
        "links_from_mod": [
            "20"
        ], 
        "module": [
            "GEX_GRN"
        ], 
        "y": "143.52", 
        "rate": "(kd_Clb5_APC * Clb5 * APC)*int_vol", 
        "name_alt": "v_Clb5_deg_APC", 
        "name": "223", 
        "uni_links": [], 
        "compartments": [
            "intracellular"
        ], 
        "links_from": [
            "29"
        ], 
        "x": "117.9", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "152"
        ], 
        "links_to_mod": [], 
        "symbol": "rect", 
        "links_from_mod": [], 
        "module": [
            "GEX_GRN"
        ], 
        "y": "198.17", 
        "rate": "(k_mFar1_deg * mFar1)*int_vol", 
        "name_alt": "v_mFar1_deg", 
        "name": "224", 
        "uni_links": [], 
        "compartments": [
            "intracellular"
        ], 
        "links_from": [
            "158"
        ], 
        "x": "223.5", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "45", 
            "162", 
            "157"
        ], 
        "links_to_mod": [], 
        "symbol": "rect", 
        "links_from_mod": [
            "153", 
            "144"
        ], 
        "module": [
            "GEX_GRN"
        ], 
        "y": "198.52", 
        "rate": "corr_Clb3_TRSL * kp_Clb3 * mClb3 * (ATP/(kM_ATP + ATP)) * (AA/(kM_AA + AA)) * (ribosome/(kM_ribosome + ribosome))*int_vol", 
        "name_alt": "v_mClb3_TRSL", 
        "name": "225", 
        "uni_links": [], 
        "compartments": [
            "intracellular"
        ], 
        "links_from": [
            "163", 
            "161"
        ], 
        "x": "162.28", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "154", 
            "162", 
            "157"
        ], 
        "links_to_mod": [], 
        "symbol": "rect", 
        "links_from_mod": [
            "44"
        ], 
        "module": [
            "GEX_GRN"
        ], 
        "y": "189.27", 
        "rate": "corr_Clb2_TRSC * vmax_TRSC_Clb2 * (ATP/(kM_ATP + ATP)) * (NA/(kM_NA + NA)) * Mcm1/(Kp_Clb2 + Mcm1)*int_vol", 
        "name_alt": "v_mClb2_TRSC", 
        "name": "226", 
        "uni_links": [], 
        "compartments": [
            "intracellular"
        ], 
        "links_from": [
            "152", 
            "161"
        ], 
        "x": "238.52", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "162", 
            "46", 
            "157"
        ], 
        "links_to_mod": [], 
        "symbol": "rect", 
        "links_from_mod": [
            "144", 
            "150"
        ], 
        "module": [
            "GEX_GRN"
        ], 
        "y": "188.73", 
        "rate": "corr_Cln2_TRSL * kp_Cln2 * mCln2 * (ATP/(kM_ATP + ATP)) * (AA/(kM_AA + AA)) * (ribosome/(kM_ribosome + ribosome))*int_vol", 
        "name_alt": "v_mCln2_TRSL", 
        "name": "227", 
        "uni_links": [], 
        "compartments": [
            "intracellular"
        ], 
        "links_from": [
            "163", 
            "161"
        ], 
        "x": "145.77", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "152"
        ], 
        "links_to_mod": [], 
        "symbol": "rect", 
        "links_from_mod": [], 
        "module": [
            "GEX_GRN"
        ], 
        "y": "190.31", 
        "rate": "(k_mSwi5_deg * mSwi5)*int_vol", 
        "name_alt": "v_mSwi5_deg", 
        "name": "228", 
        "uni_links": [], 
        "compartments": [
            "intracellular"
        ], 
        "links_from": [
            "151"
        ], 
        "x": "237.11", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "151", 
            "162", 
            "157"
        ], 
        "links_to_mod": [], 
        "symbol": "rect", 
        "links_from_mod": [
            "44"
        ], 
        "module": [
            "GEX_GRN"
        ], 
        "y": "192.3", 
        "rate": "corr_Swi5_TRSC * vmax_TRSC_Swi5 * (ATP/(kM_ATP + ATP)) * (NA/(kM_NA + NA)) * Mcm1/(Kp_Swi5 + Mcm1)*int_vol", 
        "name_alt": "v_mSwi5_TRSC", 
        "name": "229", 
        "uni_links": [], 
        "compartments": [
            "intracellular"
        ], 
        "links_from": [
            "152", 
            "161"
        ], 
        "x": "234.23", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "163", 
            "162"
        ], 
        "links_to_mod": [], 
        "symbol": "rect", 
        "links_from_mod": [], 
        "module": [
            "GEX_GRN"
        ], 
        "y": "141.8", 
        "rate": "(k_SBF_p_deg * SBF_p)*int_vol", 
        "name_alt": "v_SBF_p_deg", 
        "name": "230", 
        "uni_links": [], 
        "compartments": [
            "intracellular"
        ], 
        "links_from": [
            "18"
        ], 
        "x": "117.58", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "163"
        ], 
        "links_to_mod": [], 
        "symbol": "rect", 
        "links_from_mod": [
            "46"
        ], 
        "module": [
            "GEX_GRN"
        ], 
        "y": "67.178", 
        "rate": "(kdd_Far1 * Far1 * Cln2)*int_vol", 
        "name_alt": "v_Far1_deg_Cln2", 
        "name": "231", 
        "uni_links": [], 
        "compartments": [
            "intracellular"
        ], 
        "links_from": [
            "19"
        ], 
        "x": "237.11", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "163"
        ], 
        "links_to_mod": [], 
        "symbol": "rect", 
        "links_from_mod": [], 
        "module": [
            "GEX_GRN"
        ], 
        "y": "63.787", 
        "rate": "(kd_Sic1 * Sic1)*int_vol", 
        "name_alt": "v_Sic1_deg", 
        "name": "232", 
        "uni_links": [], 
        "compartments": [
            "intracellular"
        ], 
        "links_from": [
            "39"
        ], 
        "x": "152.97", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "34", 
            "162", 
            "157"
        ], 
        "links_to_mod": [], 
        "symbol": "rect", 
        "links_from_mod": [
            "144", 
            "159"
        ], 
        "module": [
            "GEX_GRN"
        ], 
        "y": "190.82", 
        "rate": "corr_Mih1_TRSL * vmax_TRSL_Mih1 * mMih1 * (ATP/(kM_ATP + ATP)) * (AA/(kM_AA + AA)) * (ribosome/(kM_ribosome + ribosome))*int_vol", 
        "name_alt": "v_mMih1_TRSL", 
        "name": "233", 
        "uni_links": [], 
        "compartments": [
            "intracellular"
        ], 
        "links_from": [
            "163", 
            "161"
        ], 
        "x": "148.58", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "159", 
            "162", 
            "157"
        ], 
        "links_to_mod": [], 
        "symbol": "rect", 
        "links_from_mod": [], 
        "module": [
            "GEX_GRN"
        ], 
        "y": "203.99", 
        "rate": "corr_Mih1_TRSC * vmax_TRSC_Mih1 * (ATP/(kM_ATP + ATP)) * (NA/(kM_NA + NA))*int_vol", 
        "name_alt": "v_mMih1_TRSC", 
        "name": "234", 
        "uni_links": [], 
        "compartments": [
            "intracellular"
        ], 
        "links_from": [
            "152", 
            "161"
        ], 
        "x": "203.39", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "163"
        ], 
        "links_to_mod": [], 
        "symbol": "rect", 
        "links_from_mod": [], 
        "module": [
            "GEX_GRN"
        ], 
        "y": "146.09", 
        "rate": "(kd_Mcm1 * Mcm1)*int_vol", 
        "name_alt": "v_Mcm1_deg", 
        "name": "235", 
        "uni_links": [], 
        "compartments": [
            "intracellular"
        ], 
        "links_from": [
            "44"
        ], 
        "x": "266.52", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "162", 
            "157", 
            "29"
        ], 
        "links_to_mod": [], 
        "symbol": "rect", 
        "links_from_mod": [
            "144", 
            "155"
        ], 
        "module": [
            "GEX_GRN"
        ], 
        "y": "195.45", 
        "rate": "corr_Clb5_TRSL * kp_Clb5 * mClb5 * (ATP/(kM_ATP + ATP)) * (AA/(kM_AA + AA)) * (ribosome/(kM_ribosome + ribosome))*int_vol", 
        "name_alt": "v_mClb5_TRSL", 
        "name": "236", 
        "uni_links": [], 
        "compartments": [
            "intracellular"
        ], 
        "links_from": [
            "163", 
            "161"
        ], 
        "x": "156", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "17", 
            "162", 
            "157"
        ], 
        "links_to_mod": [], 
        "symbol": "rect", 
        "links_from_mod": [
            "151", 
            "144"
        ], 
        "module": [
            "GEX_GRN"
        ], 
        "y": "201", 
        "rate": "corr_Swi5_TRSL * kp_Swi5 * mSwi5 * (ATP/(kM_ATP + ATP)) * (AA/(kM_AA + AA)) * (ribosome/(kM_ribosome + ribosome))*int_vol", 
        "name_alt": "v_mSwi5_TRSL", 
        "name": "237", 
        "uni_links": [], 
        "compartments": [
            "intracellular"
        ], 
        "links_from": [
            "163", 
            "161"
        ], 
        "x": "168.83", 
        "is_ode": false
    }, 
    {
        "links_to": [], 
        "links_to_mod": [], 
        "symbol": "triangle", 
        "links_from_mod": [], 
        "module": [
            "GEX_TRL"
        ], 
        "y": "151.99", 
        "annotation": "YCM:ribosomes_check", 
        "name_alt": "total_ribosomes", 
        "name": "238", 
        "equation": "(Ribosome +  9.4336 * mRNA_R_Ribosome +  9.4336 * mRNA_met_Ribosome +  9.4336 * mRNA_other_Ribosome) * 1e-3 * 6.022e23 * int_vol", 
        "uni_links": [
            "144", 
            "244", 
            "246", 
            "243", 
            "4"
        ], 
        "state": "0", 
        "links_from": [], 
        "x": "120.09", 
        "compartment": "intracellular", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "249"
        ], 
        "links_to_mod": [], 
        "symbol": "circle", 
        "links_from_mod": [], 
        "module": [
            "GEX_TRL"
        ], 
        "y": "167.89", 
        "annotation": "YCM:mRNA_metabolic", 
        "name_alt": "mRNA_met", 
        "name": "239", 
        "uni_links": [], 
        "state": "0", 
        "links_from": [
            "252"
        ], 
        "x": "127.31", 
        "compartment": "intracellular", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "247"
        ], 
        "links_to_mod": [], 
        "symbol": "circle", 
        "links_from_mod": [], 
        "module": [
            "GEX_TRL"
        ], 
        "y": "163.3", 
        "annotation": "YCM:mRNA_other", 
        "name_alt": "mRNA_other", 
        "name": "240", 
        "uni_links": [], 
        "state": "0", 
        "links_from": [
            "254"
        ], 
        "x": "124.76", 
        "compartment": "intracellular", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "255"
        ], 
        "links_to_mod": [], 
        "symbol": "circle", 
        "links_from_mod": [], 
        "module": [
            "GEX_TRL"
        ], 
        "y": "172.3", 
        "annotation": "YCM:mRNA_R", 
        "name_alt": "mRNA_R", 
        "name": "241", 
        "uni_links": [], 
        "state": "0", 
        "links_from": [
            "256"
        ], 
        "x": "130.16", 
        "compartment": "intracellular", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "248"
        ], 
        "links_to_mod": [], 
        "symbol": "circle", 
        "links_from_mod": [], 
        "module": [
            "GEX_TRL"
        ], 
        "y": "79.646", 
        "annotation": "YCM:B_Protein_metabolic", 
        "name_alt": "B_Protein_met", 
        "name": "242", 
        "uni_links": [], 
        "state": "0", 
        "links_from": [
            "258"
        ], 
        "x": "134.43", 
        "compartment": "intracellular", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "254"
        ], 
        "links_to_mod": [
            "257"
        ], 
        "symbol": "circle", 
        "links_from_mod": [], 
        "module": [
            "GEX_TRL"
        ], 
        "y": "150.32", 
        "annotation": "YCM:mRNA_other_Ribosome", 
        "name_alt": "mRNA_other_Ribosome", 
        "name": "243", 
        "uni_links": [
            "238"
        ], 
        "state": "0", 
        "links_from": [
            "247"
        ], 
        "x": "119.58", 
        "compartment": "intracellular", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "256"
        ], 
        "links_to_mod": [
            "250"
        ], 
        "symbol": "circle", 
        "links_from_mod": [], 
        "module": [
            "GEX_TRL"
        ], 
        "y": "156.93", 
        "annotation": "YCM:mRNA_R_Ribosome", 
        "name_alt": "mRNA_R_Ribosome", 
        "name": "244", 
        "uni_links": [
            "238"
        ], 
        "state": "0", 
        "links_from": [
            "255"
        ], 
        "x": "121.87", 
        "compartment": "intracellular", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "253", 
            "311"
        ], 
        "links_to_mod": [], 
        "symbol": "circle", 
        "links_from_mod": [], 
        "module": [
            "GEX_TRL", 
            "MET_CWS"
        ], 
        "y": "136.6", 
        "annotation": "YCM:B_Protein_other", 
        "name_alt": "B_Protein_other", 
        "name": "245", 
        "uni_links": [], 
        "state": "0", 
        "links_from": [
            "257"
        ], 
        "x": "116.86", 
        "compartment": "intracellular", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "252"
        ], 
        "links_to_mod": [
            "258"
        ], 
        "symbol": "circle", 
        "links_from_mod": [], 
        "module": [
            "GEX_TRL"
        ], 
        "y": "155.3", 
        "annotation": "YCM:mRNA_met_Ribosome", 
        "name_alt": "mRNA_met_Ribosome", 
        "name": "246", 
        "uni_links": [
            "238"
        ], 
        "state": "0", 
        "links_from": [
            "249"
        ], 
        "x": "121.24", 
        "compartment": "intracellular", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "243"
        ], 
        "links_to_mod": [], 
        "symbol": "rect", 
        "links_from_mod": [], 
        "module": [
            "GEX_TRL"
        ], 
        "y": "161.73", 
        "rate": "(k_ASS_Ribosome_mRNA_other * Ribosome * mRNA_other)*int_vol", 
        "name_alt": "v_ASS_Ribosome_mRNA_other", 
        "name": "247", 
        "uni_links": [], 
        "compartments": [
            "intracellular"
        ], 
        "links_from": [
            "144", 
            "240"
        ], 
        "x": "123.98", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "163"
        ], 
        "links_to_mod": [], 
        "symbol": "rect", 
        "links_from_mod": [], 
        "module": [
            "GEX_TRL"
        ], 
        "y": "78.323", 
        "rate": "(k_DEG_B_Protein_met * B_Protein_met)*int_vol", 
        "name_alt": "v_DEG_B_Protein_met", 
        "name": "248", 
        "uni_links": [], 
        "compartments": [
            "intracellular"
        ], 
        "links_from": [
            "242"
        ], 
        "x": "135.58", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "246"
        ], 
        "links_to_mod": [], 
        "symbol": "rect", 
        "links_from_mod": [], 
        "module": [
            "GEX_TRL"
        ], 
        "y": "166.38", 
        "rate": "(k_ASS_Ribosome_mRNA_met * Ribosome * mRNA_met)*int_vol", 
        "name_alt": "v_ASS_Ribosome_mRNA_met", 
        "name": "249", 
        "uni_links": [], 
        "compartments": [
            "intracellular"
        ], 
        "links_from": [
            "239", 
            "144"
        ], 
        "x": "126.42", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "143", 
            "157", 
            "162"
        ], 
        "links_to_mod": [], 
        "symbol": "rect", 
        "links_from_mod": [
            "244"
        ], 
        "module": [
            "GEX_TRL"
        ], 
        "y": "158.55", 
        "rate": "(vmax_TRSL_mRNA_R * (ATP/(k_atp + ATP)) * (AA/(k_aa + AA)) * (mRNA_R_Ribosome/(k_TRSL_mRNA_R + mRNA_R_Ribosome)))*int_vol", 
        "name_alt": "v_TRSL_mRNA_R", 
        "name": "250", 
        "uni_links": [], 
        "compartments": [
            "intracellular"
        ], 
        "links_from": [
            "163", 
            "161"
        ], 
        "x": "122.54", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "163"
        ], 
        "links_to_mod": [], 
        "symbol": "rect", 
        "links_from_mod": [], 
        "module": [
            "GEX_TRL"
        ], 
        "y": "146.94", 
        "rate": "(k_DEG_B_Protein_R * B_Protein_R)*int_vol", 
        "name_alt": "v_DEG_B_Protein_R", 
        "name": "251", 
        "uni_links": [], 
        "compartments": [
            "intracellular"
        ], 
        "links_from": [
            "143"
        ], 
        "x": "118.66", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "239", 
            "144"
        ], 
        "links_to_mod": [], 
        "symbol": "rect", 
        "links_from_mod": [], 
        "module": [
            "GEX_TRL"
        ], 
        "y": "169.38", 
        "rate": "(k_DIS_Ribosome_mRNA_met * mRNA_met_Ribosome)*int_vol", 
        "name_alt": "v_DIS_Ribosome_mRNA_met", 
        "name": "252", 
        "uni_links": [], 
        "compartments": [
            "intracellular"
        ], 
        "links_from": [
            "246"
        ], 
        "x": "128.22", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "163"
        ], 
        "links_to_mod": [], 
        "symbol": "rect", 
        "links_from_mod": [], 
        "module": [
            "GEX_TRL"
        ], 
        "y": "138.34", 
        "rate": "(k_DEG_B_Protein_other * B_Protein_other)*int_vol", 
        "name_alt": "v_DEG_B_Protein_other", 
        "name": "253", 
        "uni_links": [], 
        "compartments": [
            "intracellular"
        ], 
        "links_from": [
            "245"
        ], 
        "x": "117.06", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "144", 
            "240"
        ], 
        "links_to_mod": [], 
        "symbol": "rect", 
        "links_from_mod": [], 
        "module": [
            "GEX_TRL"
        ], 
        "y": "164.85", 
        "rate": "(k_DIS_Ribosome_mRNA_other * mRNA_other_Ribosome)*int_vol", 
        "name_alt": "v_DIS_Ribosome_mRNA_other", 
        "name": "254", 
        "uni_links": [], 
        "compartments": [
            "intracellular"
        ], 
        "links_from": [
            "243"
        ], 
        "x": "125.57", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "244"
        ], 
        "links_to_mod": [], 
        "symbol": "rect", 
        "links_from_mod": [], 
        "module": [
            "GEX_TRL"
        ], 
        "y": "170.85", 
        "rate": "(k_ASS_Ribosome_mRNA_R * Ribosome * mRNA_R)*int_vol", 
        "name_alt": "v_ASS_Ribosome_mRNA_R", 
        "name": "255", 
        "uni_links": [], 
        "compartments": [
            "intracellular"
        ], 
        "links_from": [
            "144", 
            "241"
        ], 
        "x": "129.18", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "144", 
            "241"
        ], 
        "links_to_mod": [], 
        "symbol": "rect", 
        "links_from_mod": [], 
        "module": [
            "GEX_TRL"
        ], 
        "y": "173.72", 
        "rate": "(k_DIS_Ribosome_mRNA_R * mRNA_R_Ribosome)*int_vol", 
        "name_alt": "v_DIS_Ribosome_mRNA_R", 
        "name": "256", 
        "uni_links": [], 
        "compartments": [
            "intracellular"
        ], 
        "links_from": [
            "244"
        ], 
        "x": "131.18", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "245", 
            "157", 
            "162"
        ], 
        "links_to_mod": [], 
        "symbol": "rect", 
        "links_from_mod": [
            "243"
        ], 
        "module": [
            "GEX_TRL"
        ], 
        "y": "148.63", 
        "rate": "(vmax_TRSL_mRNA_other * (ATP/(k_atp + ATP)) * (AA/(k_aa + AA)) * (mRNA_other_Ribosome/(k_TRSL_mRNA_other + mRNA_other_Ribosome)))*int_vol", 
        "name_alt": "v_TRSL_mRNA_other", 
        "name": "257", 
        "uni_links": [], 
        "compartments": [
            "intracellular"
        ], 
        "links_from": [
            "163", 
            "161"
        ], 
        "x": "119.1", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "242", 
            "157", 
            "162"
        ], 
        "links_to_mod": [], 
        "symbol": "rect", 
        "links_from_mod": [
            "246"
        ], 
        "module": [
            "GEX_TRL"
        ], 
        "y": "153.65", 
        "rate": "(vmax_TRSL_mRNA_met * (ATP/(k_atp + ATP)) * (AA/(k_aa + AA)) * (mRNA_met_Ribosome/(k_TRSL_mRNA_met + mRNA_met_Ribosome)))*int_vol", 
        "name_alt": "v_TRSL_mRNA_met", 
        "name": "258", 
        "uni_links": [], 
        "compartments": [
            "intracellular"
        ], 
        "links_from": [
            "163", 
            "161"
        ], 
        "x": "120.65", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "285", 
            "286", 
            "297"
        ], 
        "links_to_mod": [
            "288"
        ], 
        "symbol": "circle", 
        "links_from_mod": [], 
        "module": [
            "MET_CCM"
        ], 
        "y": "80.995", 
        "annotation": "CHEBI:57945", 
        "name_alt": "NADH", 
        "name": "259", 
        "uni_links": [], 
        "state": "-2", 
        "links_from": [
            "293", 
            "296"
        ], 
        "x": "133.32", 
        "compartment": "intracellular", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "312"
        ], 
        "links_to_mod": [], 
        "symbol": "circle", 
        "links_from_mod": [], 
        "module": [
            "MET_CCM", 
            "MET_CWS"
        ], 
        "y": "120.88", 
        "annotation": "CHEBI:28808", 
        "name_alt": "mannan", 
        "name": "260", 
        "uni_links": [], 
        "state": "0", 
        "links_from": [
            "295"
        ], 
        "x": "116.86", 
        "compartment": "intracellular", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "293", 
            "296"
        ], 
        "links_to_mod": [], 
        "symbol": "circle", 
        "links_from_mod": [], 
        "module": [
            "MET_CCM"
        ], 
        "y": "85.191", 
        "annotation": "CHEBI:57540", 
        "name_alt": "NAD", 
        "name": "261", 
        "uni_links": [], 
        "state": "-1", 
        "links_from": [
            "285", 
            "286", 
            "288", 
            "297"
        ], 
        "x": "130.16", 
        "compartment": "intracellular", 
        "is_ode": false
    }, 
    {
        "links_to": [], 
        "links_to_mod": [], 
        "symbol": "circle", 
        "links_from_mod": [], 
        "module": [
            "MET_CCM"
        ], 
        "y": "93.56", 
        "annotation": "YCM:pyr_check", 
        "name_alt": "pyr_check", 
        "name": "262", 
        "uni_links": [], 
        "state": "-1", 
        "links_from": [
            "293"
        ], 
        "x": "123.54", 
        "compartment": "intracellular", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "290", 
            "294"
        ], 
        "links_to_mod": [], 
        "symbol": "circle", 
        "links_from_mod": [], 
        "module": [
            "MET_CCM"
        ], 
        "y": "98.94", 
        "annotation": "YCM:NA_RNA", 
        "name_alt": "NA_RNA", 
        "name": "263", 
        "uni_links": [], 
        "state": "0", 
        "links_from": [
            "287"
        ], 
        "x": "122.54", 
        "compartment": "intracellular", 
        "is_ode": false
    }, 
    {
        "links_to": [], 
        "links_to_mod": [], 
        "symbol": "circle", 
        "links_from_mod": [], 
        "module": [
            "MET_CCM"
        ], 
        "y": "110.22", 
        "annotation": "YCM:TriP_check", 
        "name_alt": "TriP_check", 
        "name": "264", 
        "uni_links": [], 
        "state": "-2", 
        "links_from": [
            "298"
        ], 
        "x": "117.33", 
        "compartment": "intracellular", 
        "is_ode": false
    }, 
    {
        "links_to": [], 
        "links_to_mod": [], 
        "symbol": "circle", 
        "links_from_mod": [], 
        "module": [
            "MET_CCM"
        ], 
        "y": "4.1464", 
        "annotation": "YCM:EtOH_check", 
        "name_alt": "EtOH_check", 
        "name": "265", 
        "uni_links": [], 
        "state": "0", 
        "links_from": [
            "297"
        ], 
        "x": "0.40186", 
        "compartment": "intracellular", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "388"
        ], 
        "links_to_mod": [], 
        "symbol": "circle", 
        "links_from_mod": [], 
        "module": [
            "MET_CCM", 
            "TRP_NUT"
        ], 
        "y": "2.1993", 
        "annotation": "CHEBI:16236", 
        "name_alt": "EtOH", 
        "name": "266", 
        "uni_links": [], 
        "state": "0", 
        "links_from": [
            "297"
        ], 
        "x": "3.7824", 
        "compartment": "intracellular", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "282", 
            "283", 
            "284", 
            "287", 
            "291", 
            "295", 
            "298"
        ], 
        "links_to_mod": [], 
        "symbol": "circle", 
        "links_from_mod": [], 
        "module": [
            "MET_CCM"
        ], 
        "y": "108.85", 
        "annotation": "CHEBI:58225", 
        "name_alt": "HexP", 
        "name": "267", 
        "uni_links": [], 
        "state": "-2", 
        "links_from": [
            "292"
        ], 
        "x": "119.1", 
        "compartment": "intracellular", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "285"
        ], 
        "links_to_mod": [], 
        "symbol": "circle", 
        "links_from_mod": [], 
        "module": [
            "MET_CCM"
        ], 
        "y": "193.93", 
        "annotation": "YCM:O2_check", 
        "name_alt": "O2_check", 
        "name": "268", 
        "uni_links": [], 
        "state": "0", 
        "links_from": [], 
        "x": "150.74", 
        "compartment": "intracellular", 
        "is_ode": false
    }, 
    {
        "links_to": [], 
        "links_to_mod": [], 
        "symbol": "circle", 
        "links_from_mod": [], 
        "module": [
            "MET_CCM", 
            "MET_CWS"
        ], 
        "y": "105.08", 
        "annotation": "YCM:lipid", 
        "name_alt": "lipid", 
        "name": "269", 
        "uni_links": [], 
        "state": "0", 
        "links_from": [
            "291"
        ], 
        "x": "118.78", 
        "compartment": "intracellular", 
        "is_ode": false
    }, 
    {
        "links_to": [], 
        "links_to_mod": [], 
        "symbol": "circle", 
        "links_from_mod": [], 
        "module": [
            "MET_CCM"
        ], 
        "y": "102.19", 
        "annotation": "CHEBI:24636", 
        "name_alt": "H", 
        "name": "270", 
        "uni_links": [], 
        "state": "+1", 
        "links_from": [
            "282", 
            "283", 
            "287", 
            "290", 
            "291"
        ], 
        "x": "121.24", 
        "compartment": "intracellular", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "282", 
            "287", 
            "291", 
            "296", 
            "297"
        ], 
        "links_to_mod": [], 
        "symbol": "circle", 
        "links_from_mod": [], 
        "module": [
            "MET_CCM"
        ], 
        "y": "92.636", 
        "annotation": "CHEBI:15361", 
        "name_alt": "pyr", 
        "name": "271", 
        "uni_links": [], 
        "state": "-1", 
        "links_from": [
            "293"
        ], 
        "x": "125.57", 
        "compartment": "intracellular", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "292"
        ], 
        "links_to_mod": [], 
        "symbol": "circle", 
        "links_from_mod": [], 
        "module": [
            "MET_CCM", 
            "TRP_NUT"
        ], 
        "y": "71.541", 
        "annotation": "CHEBI:17634", 
        "name_alt": "Glc", 
        "name": "272", 
        "uni_links": [
            "380", 
            "380", 
            "380"
        ], 
        "state": "0", 
        "links_from": [
            "389"
        ], 
        "x": "242.58", 
        "compartment": "intracellular", 
        "is_ode": false
    }, 
    {
        "links_to": [], 
        "links_to_mod": [], 
        "symbol": "circle", 
        "links_from_mod": [], 
        "module": [
            "MET_CCM"
        ], 
        "y": "89.595", 
        "annotation": "YCM:CO2_check", 
        "name_alt": "CO2_check", 
        "name": "273", 
        "uni_links": [], 
        "state": "0", 
        "links_from": [
            "296", 
            "297"
        ], 
        "x": "127.31", 
        "compartment": "intracellular", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "314"
        ], 
        "links_to_mod": [], 
        "symbol": "circle", 
        "links_from_mod": [], 
        "module": [
            "MET_CCM", 
            "MET_CWS"
        ], 
        "y": "115.68", 
        "annotation": "CHEBI:17029", 
        "name_alt": "chitin", 
        "name": "274", 
        "uni_links": [], 
        "state": "0", 
        "links_from": [
            "283"
        ], 
        "x": "117.58", 
        "compartment": "intracellular", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "282", 
            "283", 
            "287", 
            "290", 
            "291"
        ], 
        "links_to_mod": [], 
        "symbol": "circle", 
        "links_from_mod": [], 
        "module": [
            "MET_CCM", 
            "TRP_NUT"
        ], 
        "y": "103.84", 
        "annotation": "CHEBI:28938", 
        "name_alt": "NH4", 
        "name": "275", 
        "uni_links": [], 
        "state": "+1", 
        "links_from": [], 
        "x": "120.65", 
        "compartment": "intracellular", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "387"
        ], 
        "links_to_mod": [], 
        "symbol": "circle", 
        "links_from_mod": [], 
        "module": [
            "MET_CCM", 
            "TRP_NUT"
        ], 
        "y": "51.072", 
        "annotation": "CHEBI:17754", 
        "name_alt": "glycerol", 
        "name": "276", 
        "uni_links": [], 
        "state": "0", 
        "links_from": [
            "286"
        ], 
        "x": "86.611", 
        "compartment": "intracellular", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "313"
        ], 
        "links_to_mod": [], 
        "symbol": "circle", 
        "links_from_mod": [], 
        "module": [
            "MET_CCM", 
            "MET_CWS"
        ], 
        "y": "131.37", 
        "annotation": "CHEBI:37671", 
        "name_alt": "glucan", 
        "name": "277", 
        "uni_links": [], 
        "state": "0", 
        "links_from": [
            "284"
        ], 
        "x": "116.5", 
        "compartment": "intracellular", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "286", 
            "287", 
            "293"
        ], 
        "links_to_mod": [], 
        "symbol": "circle", 
        "links_from_mod": [], 
        "module": [
            "MET_CCM"
        ], 
        "y": "95.753", 
        "annotation": "CHEBI:58027", 
        "name_alt": "TriP", 
        "name": "278", 
        "uni_links": [], 
        "state": "-2", 
        "links_from": [
            "282", 
            "291", 
            "298"
        ], 
        "x": "123.98", 
        "compartment": "intracellular", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "390"
        ], 
        "links_to_mod": [], 
        "symbol": "circle", 
        "links_from_mod": [], 
        "module": [
            "MET_CCM", 
            "TRP_NUT"
        ], 
        "y": "88.105", 
        "annotation": "CHEBI:16526", 
        "name_alt": "CO2", 
        "name": "279", 
        "uni_links": [], 
        "state": "0", 
        "links_from": [
            "296", 
            "297"
        ], 
        "x": "128.22", 
        "compartment": "intracellular", 
        "is_ode": false
    }, 
    {
        "links_to": [], 
        "links_to_mod": [], 
        "symbol": "circle", 
        "links_from_mod": [], 
        "module": [
            "MET_CCM"
        ], 
        "y": "111.95", 
        "annotation": "YCM:HexP_check", 
        "name_alt": "HexP_check", 
        "name": "280", 
        "uni_links": [], 
        "state": "-2", 
        "links_from": [
            "292"
        ], 
        "x": "116.92", 
        "compartment": "intracellular", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "302"
        ], 
        "links_to_mod": [], 
        "symbol": "circle", 
        "links_from_mod": [], 
        "module": [
            "MET_CCM", 
            "MET_DNA"
        ], 
        "y": "52.86", 
        "annotation": "YCM:NA_DNA", 
        "name_alt": "NA_DNA", 
        "name": "281", 
        "uni_links": [], 
        "state": "0", 
        "links_from": [
            "290"
        ], 
        "x": "187.68", 
        "compartment": "intracellular", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "163", 
            "270", 
            "162", 
            "278", 
            "157"
        ], 
        "links_to_mod": [], 
        "symbol": "rect", 
        "links_from_mod": [], 
        "module": [
            "MET_CCM"
        ], 
        "y": "107.17", 
        "rate": "(E_v_AA_f * ((kf_v_AA_f * (NH4/Km_v_AA_f_NH4) * (HexP/Km_v_AA_f_HexP) * (pyr/Km_v_AA_f_pyr) * (ATP/Km_v_AA_f_ATP) - kr_v_AA_f * (AA/Km_v_AA_f_AA) * (Pi/Km_v_AA_f_Pi) * (ADP/Km_v_AA_f_ADP) * (TriP/Km_v_AA_f_TriP))/((1+(NH4/Km_v_AA_f_NH4))*(1+(HexP/Km_v_AA_f_HexP))*(1+(pyr/Km_v_AA_f_pyr))*(1+(ATP/Km_v_AA_f_ATP)) + (1+(AA/Km_v_AA_f_AA))*(1+(Pi/Km_v_AA_f_Pi))*(1+(ADP/Km_v_AA_f_ADP))*(1+(TriP/Km_v_AA_f_TriP)) - 1)) * int_vol)", 
        "name_alt": "v_AA_f", 
        "name": "282", 
        "uni_links": [], 
        "compartments": [
            "intracellular"
        ], 
        "links_from": [
            "267", 
            "271", 
            "161", 
            "275"
        ], 
        "x": "119.58", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "270", 
            "162", 
            "274", 
            "157"
        ], 
        "links_to_mod": [], 
        "symbol": "rect", 
        "links_from_mod": [], 
        "module": [
            "MET_CCM"
        ], 
        "y": "113.96", 
        "rate": "(E_v_chitin_f * ((kf_v_chitin_f * (NH4/Km_v_chitin_f_NH4) * (HexP/Km_v_chitin_f_HexP) * (ATP/Km_v_chitin_f_ATP) - kr_v_chitin_f * (Pi/Km_v_chitin_f_Pi) * (chitin/Km_v_chitin_f_chitin) * (ADP/Km_v_chitin_f_ADP))/((1+(NH4/Km_v_chitin_f_NH4))*(1+(HexP/Km_v_chitin_f_HexP))*(1+(ATP/Km_v_chitin_f_ATP)) + (1+(Pi/Km_v_chitin_f_Pi))*(1+(chitin/Km_v_chitin_f_chitin))*(1+(ADP/Km_v_chitin_f_ADP)) - 1)) * int_vol)", 
        "name_alt": "v_chitin_f", 
        "name": "283", 
        "uni_links": [], 
        "compartments": [
            "intracellular"
        ], 
        "links_from": [
            "267", 
            "161", 
            "275"
        ], 
        "x": "117.9", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "162", 
            "157", 
            "277"
        ], 
        "links_to_mod": [], 
        "symbol": "rect", 
        "links_from_mod": [], 
        "module": [
            "MET_CCM"
        ], 
        "y": "191.81", 
        "rate": "(E_glucan * ((kf_glucan * (HexP/Km_glucan_HexP)*(ATP/Km_glucan_ATP) - kr_glucan * (glucan/Km_glucan_glucan)*(ADP/Km_glucan_ADP)*(Pi/Km_glucan_Pi))/((1+(HexP/Km_glucan_HexP))*(1+(ATP/Km_glucan_ATP)) + (1+(glucan/Km_glucan_glucan))*(1+(ADP/Km_glucan_ADP))*(1+(Pi/Km_glucan_Pi)) - 1)) * int_vol)", 
        "name_alt": "v_glucan_f", 
        "name": "284", 
        "uni_links": [], 
        "compartments": [
            "intracellular"
        ], 
        "links_from": [
            "267", 
            "161"
        ], 
        "x": "150.02", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "261", 
            "161"
        ], 
        "links_to_mod": [], 
        "symbol": "rect", 
        "links_from_mod": [], 
        "module": [
            "MET_CCM"
        ], 
        "y": "192.77", 
        "rate": "(((1./(1.+ exp(k1_resp*(ATP - ATPcrit)))) * kf_resp * NADH * ADP * Pi) * int_vol)", 
        "name_alt": "v_resp", 
        "name": "285", 
        "uni_links": [], 
        "compartments": [
            "intracellular"
        ], 
        "links_from": [
            "259", 
            "268", 
            "162", 
            "157"
        ], 
        "x": "151.48", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "162", 
            "276", 
            "261"
        ], 
        "links_to_mod": [], 
        "symbol": "rect", 
        "links_from_mod": [], 
        "module": [
            "MET_CCM"
        ], 
        "y": "83.768", 
        "rate": "(E_v_glycerol_syn * ((kf_v_glycerol_syn * (NADH/Km_v_glycerol_syn_NADH) * (TriP/Km_v_glycerol_syn_TriP) - kr_v_glycerol_syn * (Pi/Km_v_glycerol_syn_Pi) * (glycerol/Km_v_glycerol_syn_glycerol) * (NAD/Km_v_glycerol_syn_NAD))/((1+(NADH/Km_v_glycerol_syn_NADH))*(1+(TriP/Km_v_glycerol_syn_TriP)) + (1+(Pi/Km_v_glycerol_syn_Pi))*(1+(glycerol/Km_v_glycerol_syn_glycerol))*(1+(NAD/Km_v_glycerol_syn_NAD)) - 1)) * int_vol)", 
        "name_alt": "v_glycerol_syn", 
        "name": "286", 
        "uni_links": [], 
        "compartments": [
            "intracellular"
        ], 
        "links_from": [
            "259", 
            "278"
        ], 
        "x": "131.18", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "270", 
            "162", 
            "263", 
            "157"
        ], 
        "links_to_mod": [], 
        "symbol": "rect", 
        "links_from_mod": [], 
        "module": [
            "MET_CCM"
        ], 
        "y": "100.56", 
        "rate": "(E_v_NA_RNA_f * ((kf_v_NA_RNA_f * (NH4/Km_v_NA_RNA_f_NH4) * (HexP/Km_v_NA_RNA_f_HexP) * (pyr/Km_v_NA_RNA_f_pyr) * (ATP/Km_v_NA_RNA_f_ATP) * (TriP/Km_v_NA_RNA_f_TriP) - kr_v_NA_RNA_f * (Pi/Km_v_NA_RNA_f_Pi) * (NA_RNA/Km_v_NA_RNA_f_NA_RNA) * (ADP/Km_v_NA_RNA_f_ADP))/((1+(NH4/Km_v_NA_RNA_f_NH4))*(1+(HexP/Km_v_NA_RNA_f_HexP))*(1+(pyr/Km_v_NA_RNA_f_pyr))*(1+(ATP/Km_v_NA_RNA_f_ATP))*(1+(TriP/Km_v_NA_RNA_f_TriP)) + (1+(Pi/Km_v_NA_RNA_f_Pi))*(1+(NA_RNA/Km_v_NA_RNA_f_NA_RNA))*(1+(ADP/Km_v_NA_RNA_f_ADP)) - 1)) * int_vol)", 
        "name_alt": "v_NA_RNA_f", 
        "name": "287", 
        "uni_links": [], 
        "compartments": [
            "intracellular"
        ], 
        "links_from": [
            "267", 
            "271", 
            "278", 
            "161", 
            "275"
        ], 
        "x": "121.87", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "261"
        ], 
        "links_to_mod": [], 
        "symbol": "rect", 
        "links_from_mod": [
            "259"
        ], 
        "module": [
            "MET_CCM"
        ], 
        "y": "82.369", 
        "rate": "(((1./(1.+ exp(k1_NAD_syn*((NAD+NADH) - NADNADHcrit)))) * kf_NAD_syn * AA * ADP) * int_vol)", 
        "name_alt": "v_NAD_syn", 
        "name": "288", 
        "uni_links": [], 
        "compartments": [
            "intracellular"
        ], 
        "links_from": [
            "163", 
            "157"
        ], 
        "x": "132.23", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "162", 
            "157"
        ], 
        "links_to_mod": [], 
        "symbol": "rect", 
        "links_from_mod": [], 
        "module": [
            "MET_CCM"
        ], 
        "y": "197.81", 
        "rate": "((0.5 * ATP) * int_vol)", 
        "name_alt": "v_ATP_con", 
        "name": "289", 
        "uni_links": [], 
        "compartments": [
            "intracellular"
        ], 
        "links_from": [
            "161"
        ], 
        "x": "160.69", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "270", 
            "281"
        ], 
        "links_to_mod": [], 
        "symbol": "rect", 
        "links_from_mod": [], 
        "module": [
            "MET_CCM"
        ], 
        "y": "97.338", 
        "rate": "(E_v_NA_DNA_syn * ((kf_v_NA_DNA_syn * (NH4/Km_v_NA_DNA_syn_NH4) * (NA_RNA/Km_v_NA_DNA_syn_NA_RNA) - kr_v_NA_DNA_syn * (NA_DNA/Km_v_NA_DNA_syn_NA_DNA))/((1+(NH4/Km_v_NA_DNA_syn_NH4))*(1+(NA_RNA/Km_v_NA_DNA_syn_NA_RNA)) + (1+(NA_DNA/Km_v_NA_DNA_syn_NA_DNA)) - 1)) * int_vol)", 
        "name_alt": "v_NA_DNA_syn", 
        "name": "290", 
        "uni_links": [], 
        "compartments": [
            "intracellular"
        ], 
        "links_from": [
            "275", 
            "263"
        ], 
        "x": "123.24", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "270", 
            "162", 
            "269", 
            "157", 
            "278"
        ], 
        "links_to_mod": [], 
        "symbol": "rect", 
        "links_from_mod": [], 
        "module": [
            "MET_CCM"
        ], 
        "y": "105.5", 
        "rate": "(E_v_lipid_f * ((kf_v_lipid_f * (NH4/Km_v_lipid_f_NH4) * (HexP/Km_v_lipid_f_HexP) * (pyr/Km_v_lipid_f_pyr) * (ATP/Km_v_lipid_f_ATP) - kr_v_lipid_f * (Pi/Km_v_lipid_f_Pi) * (lipid/Km_v_lipid_f_lipid) * (ADP/Km_v_lipid_f_ADP) * (TriP/Km_v_lipid_f_TriP))/((1+(NH4/Km_v_lipid_f_NH4))*(1+(HexP/Km_v_lipid_f_HexP))*(1+(pyr/Km_v_lipid_f_pyr))*(1+(ATP/Km_v_lipid_f_ATP)) + (1+(Pi/Km_v_lipid_f_Pi))*(1+(lipid/Km_v_lipid_f_lipid))*(1+(ADP/Km_v_lipid_f_ADP))*(1+(TriP/Km_v_lipid_f_TriP)) - 1)) * int_vol)", 
        "name_alt": "v_lipid_f", 
        "name": "291", 
        "uni_links": [], 
        "compartments": [
            "intracellular"
        ], 
        "links_from": [
            "267", 
            "271", 
            "161", 
            "275"
        ], 
        "x": "120.09", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "267", 
            "280", 
            "157"
        ], 
        "links_to_mod": [], 
        "symbol": "rect", 
        "links_from_mod": [], 
        "module": [
            "MET_CCM"
        ], 
        "y": "112.25", 
        "rate": "(E_v_HK * ((kf_v_HK * (Glc/Km_v_HK_Glc) * (ATP/Km_v_HK_ATP) - kr_v_HK * (HexP/Km_v_HK_HexP) * (ADP/Km_v_HK_ADP))/((1+(Glc/Km_v_HK_Glc))*(1+(ATP/Km_v_HK_ATP)) + (1+(HexP/Km_v_HK_HexP))*(1+(ADP/Km_v_HK_ADP)) - 1)) * int_vol)", 
        "name_alt": "v_HK", 
        "name": "292", 
        "uni_links": [], 
        "compartments": [
            "intracellular"
        ], 
        "links_from": [
            "272", 
            "161"
        ], 
        "x": "118.26", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "271", 
            "259", 
            "262", 
            "161"
        ], 
        "links_to_mod": [], 
        "symbol": "rect", 
        "links_from_mod": [], 
        "module": [
            "MET_CCM"
        ], 
        "y": "94.185", 
        "rate": "(E_pyr * ((kf_pyr * (Pi/Km_pyr_Pi) * (NAD/Km_pyr_NAD) * (ADP/Km_pyr_ADP)**2.0 * (TriP/Km_pyr_TriP) - kr_pyr * (pyr/Km_pyr_pyr) * (NADH/Km_pyr_NADH) * (ATP/Km_pyr_ATP)**2.0)/((1+(Pi/Km_pyr_Pi))*(1+(NAD/Km_pyr_NAD))*(1+(ADP/Km_pyr_ADP)**1+(ADP/Km_pyr_ADP)**2)*(1+(TriP/Km_pyr_TriP)) + (1+(pyr/Km_pyr_pyr))*(1+(NADH/Km_pyr_NADH))*(1+(ATP/Km_pyr_ATP)**1+(ATP/Km_pyr_ATP)**2) - 1)) * int_vol)", 
        "name_alt": "v_pyr", 
        "name": "293", 
        "uni_links": [], 
        "compartments": [
            "intracellular"
        ], 
        "links_from": [
            "261", 
            "162", 
            "278", 
            "157"
        ], 
        "x": "124.76", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "157"
        ], 
        "links_to_mod": [], 
        "symbol": "rect", 
        "links_from_mod": [
            "161"
        ], 
        "module": [
            "MET_CCM"
        ], 
        "y": "196.27", 
        "rate": "(((1./(1.+ exp(k1_ADP_syn*((ATP+ADP) - ATPADPcrit)))) * kf_ADP_syn * NA_RNA * Pi**2) * int_vol)", 
        "name_alt": "v_ADP_syn", 
        "name": "294", 
        "uni_links": [], 
        "compartments": [
            "intracellular"
        ], 
        "links_from": [
            "162", 
            "263"
        ], 
        "x": "157.54", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "162", 
            "260", 
            "157"
        ], 
        "links_to_mod": [], 
        "symbol": "rect", 
        "links_from_mod": [], 
        "module": [
            "MET_CCM"
        ], 
        "y": "193.7", 
        "rate": "(E_mannan * ((kf_mannan * (HexP/Km_mannan_HexP)*(ATP/Km_mannan_ATP) - kr_mannan * (mannan/Km_mannan_mannan)*(ADP/Km_mannan_ADP)*(Pi/Km_mannan_Pi))/((1+(HexP/Km_mannan_HexP))*(1+(ATP/Km_mannan_ATP)) + (1+(mannan/Km_mannan_mannan))*(1+(ADP/Km_mannan_ADP))*(1+(Pi/Km_mannan_Pi)) - 1)) * int_vol)", 
        "name_alt": "v_mannan_f", 
        "name": "295", 
        "uni_links": [], 
        "compartments": [
            "intracellular"
        ], 
        "links_from": [
            "267", 
            "161"
        ], 
        "x": "152.97", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "259", 
            "273", 
            "279", 
            "161"
        ], 
        "links_to_mod": [], 
        "symbol": "rect", 
        "links_from_mod": [], 
        "module": [
            "MET_CCM"
        ], 
        "y": "91.105", 
        "rate": "((kf_TCA * pyr * NAD * ADP * Pi) * int_vol)", 
        "name_alt": "v_TCA", 
        "name": "296", 
        "uni_links": [], 
        "compartments": [
            "intracellular"
        ], 
        "links_from": [
            "271", 
            "162", 
            "157", 
            "261"
        ], 
        "x": "126.42", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "261", 
            "279", 
            "273", 
            "265", 
            "266"
        ], 
        "links_to_mod": [], 
        "symbol": "rect", 
        "links_from_mod": [], 
        "module": [
            "MET_CCM"
        ], 
        "y": "86.637", 
        "rate": "(E_ferm * ((kf_ferm * (pyr/Km_ferm_pyr) * (NADH/Km_ferm_NADH) - kr_ferm * (CO2/Km_ferm_CO2) * (NAD/Km_ferm_NAD) * (EtOH/Km_ferm_EtOH))/((1+(pyr/Km_ferm_pyr))*(1+(NADH/Km_ferm_NADH)) + (1+(CO2/Km_ferm_CO2))*(1+(NAD/Km_ferm_NAD))*(1+(EtOH/Km_ferm_EtOH)) - 1)) * int_vol)", 
        "name_alt": "v_ferm", 
        "name": "297", 
        "uni_links": [], 
        "compartments": [
            "intracellular"
        ], 
        "links_from": [
            "271", 
            "259"
        ], 
        "x": "129.18", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "264", 
            "278", 
            "157"
        ], 
        "links_to_mod": [], 
        "symbol": "rect", 
        "links_from_mod": [], 
        "module": [
            "MET_CCM"
        ], 
        "y": "110.55", 
        "rate": "(E_TriP * ((kf_TriP * (HexP/Km_TriP_HexP) * (ATP/Km_TriP_ATP) - kr_TriP * (ADP/Km_TriP_ADP) * (TriP/Km_TriP_TriP)**2.0)/((1+(HexP/Km_TriP_HexP))*(1+(ATP/Km_TriP_ATP)) + (1+(ADP/Km_TriP_ADP))*(1+(TriP/Km_TriP_TriP)**1+(TriP/Km_TriP_TriP)**2) - 1)) * int_vol)", 
        "name_alt": "v_TriP", 
        "name": "298", 
        "uni_links": [], 
        "compartments": [
            "intracellular"
        ], 
        "links_from": [
            "267", 
            "161"
        ], 
        "x": "118.66", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "301"
        ], 
        "links_to_mod": [
            "302"
        ], 
        "symbol": "circle", 
        "links_from_mod": [], 
        "module": [
            "MET_DNA"
        ], 
        "y": "52.719", 
        "annotation": "YCM:A", 
        "name_alt": "A", 
        "name": "299", 
        "uni_links": [], 
        "state": "0", 
        "links_from": [
            "303"
        ], 
        "x": "191.18", 
        "compartment": "nucleus", 
        "is_ode": false
    }, 
    {
        "links_to": [], 
        "links_to_mod": [
            "301"
        ], 
        "symbol": "circle", 
        "links_from_mod": [], 
        "module": [
            "MET_DNA"
        ], 
        "y": "125.25", 
        "annotation": "YCM:DNA", 
        "name_alt": "DNA", 
        "name": "300", 
        "uni_links": [], 
        "state": "0", 
        "links_from": [
            "302"
        ], 
        "x": "268.44", 
        "compartment": "nucleus", 
        "is_ode": false
    }, 
    {
        "links_to": [], 
        "links_to_mod": [], 
        "symbol": "rect", 
        "links_from_mod": [
            "300"
        ], 
        "module": [
            "MET_DNA"
        ], 
        "y": "123.5", 
        "rate": "(((1./(1.+ exp(-k1_A_con*(DNA - (DNA_crit*16.0e-15/int_vol))))) * kf_A_con * A) * nuc_vol)", 
        "name_alt": "v_A_con", 
        "name": "301", 
        "uni_links": [], 
        "compartments": [
            "nucleus"
        ], 
        "links_from": [
            "299"
        ], 
        "x": "268.34", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "300"
        ], 
        "links_to_mod": [], 
        "symbol": "rect", 
        "links_from_mod": [
            "299"
        ], 
        "module": [
            "MET_DNA"
        ], 
        "y": "52.769", 
        "rate": "(((1./(1.+ exp(-k1_DNA_syn*(A - (A_crit*16.0e-15/int_vol))))) * kf_DNA_syn * 0.147) * nuc_vol)", 
        "name_alt": "v_DNA_syn", 
        "name": "302", 
        "uni_links": [], 
        "compartments": [
            "intracellular", 
            "nucleus"
        ], 
        "links_from": [
            "281"
        ], 
        "x": "189.43", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "299"
        ], 
        "links_to_mod": [], 
        "symbol": "rect", 
        "links_from_mod": [
            "29"
        ], 
        "module": [
            "MET_DNA"
        ], 
        "y": "52.991", 
        "rate": "((  (1./(1.+ exp(-k1_A_syn*(Clb5/1.65801328396e-05 - (Clb5_crit*16.0e-15/int_vol)/1.65801328396e-05)))) * kf_A_syn  ) * nuc_vol)", 
        "name_alt": "v_A_syn", 
        "name": "303", 
        "uni_links": [], 
        "compartments": [
            "nucleus", 
            "intracellular"
        ], 
        "links_from": [], 
        "x": "185.93", 
        "is_ode": false
    }, 
    {
        "links_to": [], 
        "links_to_mod": [], 
        "symbol": "circle", 
        "links_from_mod": [], 
        "module": [
            "MET_CWS"
        ], 
        "y": "133.12", 
        "annotation": "YCM:B_Protein_other", 
        "name_alt": "proteins_cw", 
        "name": "304", 
        "uni_links": [
            "308"
        ], 
        "state": "0", 
        "links_from": [
            "311"
        ], 
        "x": "116.58", 
        "compartment": "cell_wall", 
        "is_ode": false
    }, 
    {
        "links_to": [], 
        "links_to_mod": [], 
        "symbol": "circle", 
        "links_from_mod": [], 
        "module": [
            "MET_CWS"
        ], 
        "y": "124.37", 
        "annotation": "CHEBI:28808", 
        "name_alt": "mannan_cw", 
        "name": "305", 
        "uni_links": [
            "308"
        ], 
        "state": "0", 
        "links_from": [
            "312"
        ], 
        "x": "116.58", 
        "compartment": "cell_wall", 
        "is_ode": false
    }, 
    {
        "links_to": [], 
        "links_to_mod": [], 
        "symbol": "circle", 
        "links_from_mod": [], 
        "module": [
            "MET_CWS", 
            "TRP_NUT"
        ], 
        "y": "130.58", 
        "annotation": "SBO:0000468", 
        "name_alt": "pm_vol", 
        "name": "306", 
        "uni_links": [], 
        "state": "0", 
        "links_from": [], 
        "x": "108.04", 
        "compartment": "plasma_membrane", 
        "is_ode": true
    }, 
    {
        "links_to": [], 
        "links_to_mod": [], 
        "symbol": "circle", 
        "links_from_mod": [], 
        "module": [
            "MET_CWS"
        ], 
        "y": "126.07", 
        "annotation": "SBO:0000468", 
        "name_alt": "V_cw", 
        "name": "307", 
        "uni_links": [
            "308", 
            "308", 
            "308", 
            "308"
        ], 
        "state": "0", 
        "links_from": [], 
        "x": "115.12", 
        "compartment": "cell_wall", 
        "is_ode": true
    }, 
    {
        "links_to": [], 
        "links_to_mod": [
            "311", 
            "312", 
            "313", 
            "314"
        ], 
        "symbol": "triangle", 
        "links_from_mod": [], 
        "module": [
            "MET_CWS"
        ], 
        "y": "126.12", 
        "annotation": "SBO:0000504", 
        "name_alt": "m_cw", 
        "name": "308", 
        "equation": "(((glucan_cw*V_cw)*1e-3)*glucan_mass + ((chitin_cw*V_cw)*1e-3)*chitin_mass + ((mannan_cw*V_cw)*1e-3)*mannan_mass + ((proteins_cw*V_cw)*1e-3)*average_protein_mass)*1e12", 
        "uni_links": [
            "309", 
            "307", 
            "310", 
            "307", 
            "305", 
            "307", 
            "304", 
            "307"
        ], 
        "state": "0", 
        "links_from": [], 
        "x": "116.5", 
        "compartment": "cell_wall", 
        "is_ode": false
    }, 
    {
        "links_to": [], 
        "links_to_mod": [], 
        "symbol": "circle", 
        "links_from_mod": [], 
        "module": [
            "MET_CWS"
        ], 
        "y": "127.87", 
        "annotation": "CHEBI:37671", 
        "name_alt": "glucan_cw", 
        "name": "309", 
        "uni_links": [
            "308"
        ], 
        "state": "0", 
        "links_from": [
            "313"
        ], 
        "x": "116.46", 
        "compartment": "cell_wall", 
        "is_ode": false
    }, 
    {
        "links_to": [], 
        "links_to_mod": [], 
        "symbol": "circle", 
        "links_from_mod": [], 
        "module": [
            "MET_CWS"
        ], 
        "y": "119.14", 
        "annotation": "CHEBI:17029", 
        "name_alt": "chitin_cw", 
        "name": "310", 
        "uni_links": [
            "308"
        ], 
        "state": "0", 
        "links_from": [
            "314"
        ], 
        "x": "117.06", 
        "compartment": "cell_wall", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "304"
        ], 
        "links_to_mod": [], 
        "symbol": "rect", 
        "links_from_mod": [
            "308"
        ], 
        "module": [
            "MET_CWS"
        ], 
        "y": "134.86", 
        "rate": "((1./(1.+ exp(k_cw*(m_cw - (V_cw * rho_cw * 1e15))))))*(proteins)*int_vol", 
        "name_alt": "CW_proteins", 
        "name": "311", 
        "uni_links": [], 
        "compartments": [
            "intracellular", 
            "cell_wall"
        ], 
        "links_from": [
            "245"
        ], 
        "x": "116.7", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "305"
        ], 
        "links_to_mod": [], 
        "symbol": "rect", 
        "links_from_mod": [
            "308"
        ], 
        "module": [
            "MET_CWS"
        ], 
        "y": "122.63", 
        "rate": "((1./(1.+ exp(k_cw*(m_cw - (V_cw * rho_cw * 1e15))))))*(mannan)*int_vol", 
        "name_alt": "CW_mannan", 
        "name": "312", 
        "uni_links": [], 
        "compartments": [
            "intracellular", 
            "cell_wall"
        ], 
        "links_from": [
            "260"
        ], 
        "x": "116.7", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "309"
        ], 
        "links_to_mod": [], 
        "symbol": "rect", 
        "links_from_mod": [
            "308"
        ], 
        "module": [
            "MET_CWS"
        ], 
        "y": "129.62", 
        "rate": "((1./(1.+ exp(k_cw*(m_cw - (V_cw * rho_cw * 1e15))))))*(glucan)*int_vol", 
        "name_alt": "CW_glucan", 
        "name": "313", 
        "uni_links": [], 
        "compartments": [
            "intracellular", 
            "cell_wall"
        ], 
        "links_from": [
            "277"
        ], 
        "x": "116.46", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "310"
        ], 
        "links_to_mod": [], 
        "symbol": "rect", 
        "links_from_mod": [
            "308"
        ], 
        "module": [
            "MET_CWS"
        ], 
        "y": "117.41", 
        "rate": "((1./(1.+ exp(k_cw*(m_cw - (V_cw * rho_cw * 1e15))))))*(chitin)*int_vol", 
        "name_alt": "CW_chitin", 
        "name": "314", 
        "uni_links": [], 
        "compartments": [
            "intracellular", 
            "cell_wall"
        ], 
        "links_from": [
            "274"
        ], 
        "x": "117.3", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "362", 
            "367", 
            "373"
        ], 
        "links_to_mod": [], 
        "symbol": "circle", 
        "links_from_mod": [], 
        "module": [
            "TRP_ION"
        ], 
        "y": "35.515", 
        "annotation": "CHEBI:24636", 
        "name_alt": "h_cyt", 
        "name": "315", 
        "uni_links": [
            "345", 
            "318", 
            "349", 
            "357", 
            "333"
        ], 
        "state": "0", 
        "links_from": [
            "366", 
            "372"
        ], 
        "x": "247.35", 
        "compartment": "cytosol", 
        "is_ode": false
    }, 
    {
        "links_to": [], 
        "links_to_mod": [], 
        "symbol": "circle", 
        "links_from_mod": [], 
        "module": [
            "TRP_ION"
        ], 
        "y": "119.24", 
        "annotation": "SBML_IMPORT_ANNOTATION:8", 
        "name_alt": "v_v", 
        "name": "316", 
        "uni_links": [], 
        "state": "0", 
        "links_from": [], 
        "x": "108.04", 
        "compartment": "parameter_compartment", 
        "is_ode": true
    }, 
    {
        "links_to": [], 
        "links_to_mod": [
            "362", 
            "372"
        ], 
        "symbol": "circle", 
        "links_from_mod": [], 
        "module": [
            "TRP_ION"
        ], 
        "y": "36.792", 
        "annotation": "CHEBI:30616", 
        "name_alt": "atp_cyt", 
        "name": "317", 
        "uni_links": [
            "354"
        ], 
        "state": "-4", 
        "links_from": [], 
        "x": "257.32", 
        "compartment": "cytosol", 
        "is_ode": true
    }, 
    {
        "links_to": [], 
        "links_to_mod": [], 
        "symbol": "triangle", 
        "links_from_mod": [], 
        "module": [
            "TRP_ION"
        ], 
        "y": "37.341", 
        "annotation": "SBML_IMPORT_ANNOTATION:13", 
        "name_alt": "E_pma1", 
        "name": "318", 
        "equation": "(  (  (  ( ( R  *  T )  /  F )   /  1. )   *  log( ( h_ext  /  h_cyt ) ) )   +  ( D_G_ATP  /  F )  )", 
        "uni_links": [
            "321", 
            "315", 
            "354", 
            "359"
        ], 
        "state": "0", 
        "links_from": [], 
        "x": "244.38", 
        "compartment": "parameter_compartment", 
        "is_ode": false
    }, 
    {
        "links_to": [], 
        "links_to_mod": [], 
        "symbol": "circle", 
        "links_from_mod": [], 
        "module": [
            "TRP_ION"
        ], 
        "y": "55.151", 
        "annotation": "SBML_IMPORT_ANNOTATION:7", 
        "name_alt": "v_m", 
        "name": "319", 
        "uni_links": [
            "348", 
            "327", 
            "323", 
            "326", 
            "356", 
            "357", 
            "328", 
            "359", 
            "331", 
            "361", 
            "336", 
            "360"
        ], 
        "state": "0", 
        "links_from": [], 
        "x": "249.02", 
        "compartment": "parameter_compartment", 
        "is_ode": true
    }, 
    {
        "links_to": [
            "366", 
            "372"
        ], 
        "links_to_mod": [], 
        "symbol": "circle", 
        "links_from_mod": [], 
        "module": [
            "TRP_ION"
        ], 
        "y": "34.781", 
        "annotation": "CHEBI:24636", 
        "name_alt": "h_vac", 
        "name": "320", 
        "uni_links": [
            "349"
        ], 
        "state": "0", 
        "links_from": [], 
        "x": "250.75", 
        "compartment": "vacuole", 
        "is_ode": false
    }, 
    {
        "links_to": [], 
        "links_to_mod": [
            "362", 
            "367", 
            "373"
        ], 
        "symbol": "circle", 
        "links_from_mod": [], 
        "module": [
            "TRP_ION"
        ], 
        "y": "38.603", 
        "annotation": "CHEBI:24636", 
        "name_alt": "h_ext", 
        "name": "321", 
        "uni_links": [
            "345", 
            "318", 
            "357"
        ], 
        "state": "+1", 
        "links_from": [], 
        "x": "243.17", 
        "compartment": "extracellular", 
        "is_ode": true
    }, 
    {
        "links_to": [
            "368"
        ], 
        "links_to_mod": [], 
        "symbol": "circle", 
        "links_from_mod": [], 
        "module": [
            "TRP_ION"
        ], 
        "y": "64.781", 
        "annotation": "CHEBI:17996", 
        "name_alt": "cl_cyt", 
        "name": "322", 
        "uni_links": [
            "326"
        ], 
        "state": "0", 
        "links_from": [
            "375"
        ], 
        "x": "253.07", 
        "compartment": "cytosol", 
        "is_ode": false
    }, 
    {
        "links_to": [], 
        "links_to_mod": [], 
        "symbol": "triangle", 
        "links_from_mod": [], 
        "module": [
            "TRP_ION"
        ], 
        "y": "54.639", 
        "annotation": "SBML_IMPORT_ANNOTATION:11", 
        "name_alt": "gp_trk12", 
        "name": "323", 
        "equation": " ( gp_trk12_0  /  ( 1.  + exp((  (  ( ( d_trk12  *  F )  /  R )   /  T )   *  ( v_m  - v_trk12_halfmax ) )) ) ) ", 
        "uni_links": [
            "327", 
            "319"
        ], 
        "state": "0", 
        "links_from": [], 
        "x": "247.35", 
        "compartment": "parameter_compartment", 
        "is_ode": false
    }, 
    {
        "links_to": [], 
        "links_to_mod": [
            "363", 
            "373", 
            "376"
        ], 
        "symbol": "circle", 
        "links_from_mod": [], 
        "module": [
            "TRP_ION"
        ], 
        "y": "47.674", 
        "annotation": "CHEBI:29101", 
        "name_alt": "na_ext", 
        "name": "324", 
        "uni_links": [
            "339", 
            "345", 
            "336"
        ], 
        "state": "0", 
        "links_from": [], 
        "x": "261.16", 
        "compartment": "extracellular", 
        "is_ode": true
    }, 
    {
        "links_to": [
            "363", 
            "376"
        ], 
        "links_to_mod": [], 
        "symbol": "circle", 
        "links_from_mod": [], 
        "module": [
            "TRP_ION"
        ], 
        "y": "44.203", 
        "annotation": "CHEBI:29101", 
        "name_alt": "na_cyt", 
        "name": "325", 
        "uni_links": [
            "339", 
            "345", 
            "336"
        ], 
        "state": "0", 
        "links_from": [
            "373", 
            "377"
        ], 
        "x": "261.46", 
        "compartment": "cytosol", 
        "is_ode": false
    }, 
    {
        "links_to": [], 
        "links_to_mod": [], 
        "symbol": "triangle", 
        "links_from_mod": [], 
        "module": [
            "TRP_ION"
        ], 
        "y": "63.765", 
        "annotation": "SBML_IMPORT_ANNOTATION:20", 
        "name_alt": "my_J_Cl", 
        "name": "326", 
        "equation": "( ( (  ( surface  /  ( -1.  *  F ) )   *  gp_cl )  *  ( v_m  -  (  (  ( ( R  *  T )  /  F )   /  -1. )   *  log( ( cl_ext  /  cl_cyt ) ) )  ) ) )", 
        "uni_links": [
            "343", 
            "319", 
            "358", 
            "322"
        ], 
        "state": "0", 
        "links_from": [], 
        "x": "251.87", 
        "compartment": "parameter_compartment", 
        "is_ode": false
    }, 
    {
        "links_to": [], 
        "links_to_mod": [], 
        "symbol": "triangle", 
        "links_from_mod": [], 
        "module": [
            "TRP_ION"
        ], 
        "y": "53.852", 
        "annotation": "SBML_IMPORT_ANNOTATION:26", 
        "name_alt": "my_J_trk12", 
        "name": "327", 
        "equation": "( ( (  ( surface  /  ( 1.  *  F ) )   *  gp_trk12 )  *  ( v_m  -  (  (  ( ( R  *  T )  /  F )   /  1. )   *  log( ( k_ext  /  k_cyt ) ) )  ) ) )", 
        "uni_links": [
            "343", 
            "323", 
            "319", 
            "338", 
            "341"
        ], 
        "state": "0", 
        "links_from": [], 
        "x": "245.79", 
        "compartment": "parameter_compartment", 
        "is_ode": false
    }, 
    {
        "links_to": [], 
        "links_to_mod": [], 
        "symbol": "triangle", 
        "links_from_mod": [], 
        "module": [
            "TRP_ION"
        ], 
        "y": "62.46", 
        "annotation": "SBML_IMPORT_ANNOTATION:21", 
        "name_alt": "my_J_Ca", 
        "name": "328", 
        "equation": "( ( (  ( surface  /  ( 2.  *  F ) )   *  gp_ca )  *  ( v_m  -  (  (  ( ( R  *  T )  /  F )   /  2. )   *  log( ( ca_ext  /  ca_cyt ) ) )  ) ) )", 
        "uni_links": [
            "343", 
            "319", 
            "342", 
            "329"
        ], 
        "state": "0", 
        "links_from": [], 
        "x": "246.41", 
        "compartment": "parameter_compartment", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "365"
        ], 
        "links_to_mod": [], 
        "symbol": "circle", 
        "links_from_mod": [], 
        "module": [
            "TRP_ION"
        ], 
        "y": "63.83", 
        "annotation": "CHEBI:29108", 
        "name_alt": "ca_cyt", 
        "name": "329", 
        "uni_links": [
            "328"
        ], 
        "state": "0", 
        "links_from": [
            "374"
        ], 
        "x": "247.19", 
        "compartment": "cytosol", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "375"
        ], 
        "links_to_mod": [], 
        "symbol": "circle", 
        "links_from_mod": [], 
        "module": [
            "TRP_ION"
        ], 
        "y": "64.516", 
        "annotation": "CHEBI:17996", 
        "name_alt": "cl_vac", 
        "name": "330", 
        "uni_links": [], 
        "state": "0", 
        "links_from": [], 
        "x": "256.19", 
        "compartment": "vacuole", 
        "is_ode": false
    }, 
    {
        "links_to": [], 
        "links_to_mod": [], 
        "symbol": "triangle", 
        "links_from_mod": [], 
        "module": [
            "TRP_ION"
        ], 
        "y": "54.931", 
        "annotation": "SBML_IMPORT_ANNOTATION:24", 
        "name_alt": "my_J_ena1", 
        "name": "331", 
        "equation": "(( (  ( surface  /  F )   *  I_MAX_ENA1 )  *  tanh((  ( F  /  ( ( 2.  *  R )  *  T ) )   *  ( v_m  - E_ena1 ) )) ))", 
        "uni_links": [
            "343", 
            "319", 
            "339"
        ], 
        "state": "0", 
        "links_from": [], 
        "x": "254.21", 
        "compartment": "parameter_compartment", 
        "is_ode": false
    }, 
    {
        "links_to": [], 
        "links_to_mod": [], 
        "symbol": "circle", 
        "links_from_mod": [], 
        "module": [
            "TRP_ION", 
            "TRP_NUT"
        ], 
        "y": "107.91", 
        "annotation": "SBO:0000468", 
        "name_alt": "extracellular", 
        "name": "332", 
        "uni_links": [], 
        "state": "0", 
        "links_from": [], 
        "x": "108.04", 
        "compartment": "extracellular", 
        "is_ode": true
    }, 
    {
        "links_to": [], 
        "links_to_mod": [], 
        "symbol": "triangle", 
        "links_from_mod": [], 
        "module": [
            "TRP_ION"
        ], 
        "y": "34.239", 
        "annotation": "SBML_IMPORT_ANNOTATION:9", 
        "name_alt": "myph", 
        "name": "333", 
        "equation": "( - log((( h_cyt  *  0.001 )),(10.)) )", 
        "uni_links": [
            "315"
        ], 
        "state": "0", 
        "links_from": [], 
        "x": "246.84", 
        "compartment": "parameter_compartment", 
        "is_ode": false
    }, 
    {
        "links_to": [], 
        "links_to_mod": [], 
        "symbol": "triangle", 
        "links_from_mod": [], 
        "module": [
            "TRP_ION"
        ], 
        "y": "45.077", 
        "annotation": "SBML_IMPORT_ANNOTATION:3", 
        "name_alt": "r", 
        "name": "334", 
        "equation": "(  (  ( ( ( cytosol  *  liter_2_fl )  *  3. )  /  4. )   /  3.14159265359 )   **  0.333333333333 )", 
        "uni_links": [
            "343", 
            "142"
        ], 
        "state": "0", 
        "links_from": [], 
        "x": "227.14", 
        "compartment": "parameter_compartment", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "377"
        ], 
        "links_to_mod": [], 
        "symbol": "circle", 
        "links_from_mod": [], 
        "module": [
            "TRP_ION"
        ], 
        "y": "43.938", 
        "annotation": "CHEBI:29101", 
        "name_alt": "na_vac", 
        "name": "335", 
        "uni_links": [], 
        "state": "0", 
        "links_from": [], 
        "x": "264.57", 
        "compartment": "vacuole", 
        "is_ode": false
    }, 
    {
        "links_to": [], 
        "links_to_mod": [], 
        "symbol": "triangle", 
        "links_from_mod": [], 
        "module": [
            "TRP_ION"
        ], 
        "y": "50.848", 
        "annotation": "SBML_IMPORT_ANNOTATION:19", 
        "name_alt": "my_J_Na", 
        "name": "336", 
        "equation": "( ( (  ( surface  /  ( 1.  *  F ) )   *  gp_na )  *  ( v_m  -  (  (  ( ( R  *  T )  /  F )   /  1. )   *  log( ( na_ext  /  na_cyt ) ) )  ) ) )", 
        "uni_links": [
            "343", 
            "319", 
            "324", 
            "325"
        ], 
        "state": "0", 
        "links_from": [], 
        "x": "259.73", 
        "compartment": "parameter_compartment", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "374"
        ], 
        "links_to_mod": [], 
        "symbol": "circle", 
        "links_from_mod": [], 
        "module": [
            "TRP_ION"
        ], 
        "y": "66.843", 
        "annotation": "CHEBI:29108", 
        "name_alt": "ca_vac", 
        "name": "337", 
        "uni_links": [], 
        "state": "0", 
        "links_from": [], 
        "x": "246.36", 
        "compartment": "vacuole", 
        "is_ode": false
    }, 
    {
        "links_to": [], 
        "links_to_mod": [
            "364", 
            "369", 
            "371"
        ], 
        "symbol": "circle", 
        "links_from_mod": [], 
        "module": [
            "TRP_ION"
        ], 
        "y": "45.077", 
        "annotation": "CHEBI:29103", 
        "name_alt": "k_ext", 
        "name": "338", 
        "uni_links": [
            "348", 
            "327", 
            "356"
        ], 
        "state": "0", 
        "links_from": [], 
        "x": "240.89", 
        "compartment": "extracellular", 
        "is_ode": true
    }, 
    {
        "links_to": [], 
        "links_to_mod": [], 
        "symbol": "triangle", 
        "links_from_mod": [], 
        "module": [
            "TRP_ION"
        ], 
        "y": "49.322", 
        "annotation": "SBML_IMPORT_ANNOTATION:15", 
        "name_alt": "E_ena1", 
        "name": "339", 
        "equation": "(  (  (  ( ( R  *  T )  /  F )   /  1. )   *  log( ( na_ext  /  na_cyt ) ) )   +  ( D_G_ATP  /  F )  )", 
        "uni_links": [
            "324", 
            "325", 
            "354", 
            "331"
        ], 
        "state": "0", 
        "links_from": [], 
        "x": "260.58", 
        "compartment": "parameter_compartment", 
        "is_ode": false
    }, 
    {
        "links_to": [], 
        "links_to_mod": [], 
        "symbol": "triangle", 
        "links_from_mod": [], 
        "module": [
            "TRP_ION"
        ], 
        "y": "45.077", 
        "annotation": "SBML_IMPORT_ANNOTATION:6", 
        "name_alt": "surface_vac", 
        "name": "340", 
        "equation": "( ( 4.  *  3.14159265359 )  *  ( r_vac  **  2. ) )", 
        "uni_links": [
            "347"
        ], 
        "state": "0", 
        "links_from": [], 
        "x": "198.72", 
        "compartment": "parameter_compartment", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "364", 
            "369", 
            "371"
        ], 
        "links_to_mod": [], 
        "symbol": "circle", 
        "links_from_mod": [], 
        "module": [
            "TRP_ION"
        ], 
        "y": "51.551", 
        "annotation": "CHEBI:29103", 
        "name_alt": "k_cyt", 
        "name": "341", 
        "uni_links": [
            "348", 
            "327", 
            "356"
        ], 
        "state": "0", 
        "links_from": [
            "370"
        ], 
        "x": "243.17", 
        "compartment": "cytosol", 
        "is_ode": false
    }, 
    {
        "links_to": [], 
        "links_to_mod": [
            "365"
        ], 
        "symbol": "circle", 
        "links_from_mod": [], 
        "module": [
            "TRP_ION"
        ], 
        "y": "61.681", 
        "annotation": "CHEBI:29108", 
        "name_alt": "ca_ext", 
        "name": "342", 
        "uni_links": [
            "328"
        ], 
        "state": "0", 
        "links_from": [], 
        "x": "247.78", 
        "compartment": "extracellular", 
        "is_ode": true
    }, 
    {
        "links_to": [], 
        "links_to_mod": [], 
        "symbol": "triangle", 
        "links_from_mod": [], 
        "module": [
            "TRP_ION"
        ], 
        "y": "55.299", 
        "annotation": "SBML_IMPORT_ANNOTATION:4", 
        "name_alt": "surface", 
        "name": "343", 
        "equation": "( ( 4.  *  3.14159265359 )  *  ( r  **  2. ) )", 
        "uni_links": [
            "334", 
            "348", 
            "327", 
            "326", 
            "356", 
            "357", 
            "328", 
            "359", 
            "331", 
            "336", 
            "360"
        ], 
        "state": "0", 
        "links_from": [], 
        "x": "252.5", 
        "compartment": "parameter_compartment", 
        "is_ode": false
    }, 
    {
        "links_to": [], 
        "links_to_mod": [], 
        "symbol": "circle", 
        "links_from_mod": [], 
        "module": [
            "TRP_ION"
        ], 
        "y": "85.244", 
        "annotation": "SBO:0000468", 
        "name_alt": "par_vol", 
        "name": "344", 
        "uni_links": [], 
        "state": "0", 
        "links_from": [], 
        "x": "108.04", 
        "compartment": "parameter_compartment", 
        "is_ode": true
    }, 
    {
        "links_to": [], 
        "links_to_mod": [], 
        "symbol": "triangle", 
        "links_from_mod": [], 
        "module": [
            "TRP_ION"
        ], 
        "y": "53.363", 
        "annotation": "SBML_IMPORT_ANNOTATION:14", 
        "name_alt": "E_nha1", 
        "name": "345", 
        "equation": "(  ( ( R  *  T )  /  F )   *  log( ( ( ( h_ext  **  2. )  *  na_cyt )  /  ( ( h_cyt  **  2. )  *  na_ext ) ) ) )", 
        "uni_links": [
            "321", 
            "325", 
            "315", 
            "324", 
            "360"
        ], 
        "state": "0", 
        "links_from": [], 
        "x": "257.32", 
        "compartment": "parameter_compartment", 
        "is_ode": false
    }, 
    {
        "links_to": [], 
        "links_to_mod": [
            "362", 
            "372"
        ], 
        "symbol": "circle", 
        "links_from_mod": [], 
        "module": [
            "TRP_ION"
        ], 
        "y": "37.947", 
        "annotation": "CHEBI:456216", 
        "name_alt": "adp_cyt", 
        "name": "346", 
        "uni_links": [
            "354"
        ], 
        "state": "-3", 
        "links_from": [], 
        "x": "258.63", 
        "compartment": "cytosol", 
        "is_ode": true
    }, 
    {
        "links_to": [], 
        "links_to_mod": [], 
        "symbol": "triangle", 
        "links_from_mod": [], 
        "module": [
            "TRP_ION"
        ], 
        "y": "45.077", 
        "annotation": "SBML_IMPORT_ANNOTATION:5", 
        "name_alt": "r_vac", 
        "name": "347", 
        "equation": "(  (  ( ( ( vacuole  *  liter_2_fl )  *  3. )  /  4. )   /  3.14159265359 )   **  0.333333333333 )", 
        "uni_links": [
            "340", 
            "350"
        ], 
        "state": "0", 
        "links_from": [], 
        "x": "200.47", 
        "compartment": "parameter_compartment", 
        "is_ode": false
    }, 
    {
        "links_to": [], 
        "links_to_mod": [], 
        "symbol": "triangle", 
        "links_from_mod": [], 
        "module": [
            "TRP_ION"
        ], 
        "y": "43.336", 
        "annotation": "SBML_IMPORT_ANNOTATION:25", 
        "name_alt": "my_J_tok1", 
        "name": "348", 
        "equation": "( ( (  ( surface  /  ( 1.  *  F ) )   *  gp_tok1 )  *  ( v_m  -  (  (  ( ( R  *  T )  /  F )   /  1. )   *  log( ( k_ext  /  k_cyt ) ) )  ) ) )", 
        "uni_links": [
            "343", 
            "361", 
            "319", 
            "338", 
            "341"
        ], 
        "state": "0", 
        "links_from": [], 
        "x": "241.03", 
        "compartment": "parameter_compartment", 
        "is_ode": false
    }, 
    {
        "links_to": [], 
        "links_to_mod": [], 
        "symbol": "triangle", 
        "links_from_mod": [], 
        "module": [
            "TRP_ION"
        ], 
        "y": "34.855", 
        "annotation": "SBML_IMPORT_ANNOTATION:16", 
        "name_alt": "E_vma1", 
        "name": "349", 
        "equation": "(  (  (  ( ( R  *  T )  /  F )   /  1. )   *  log( ( h_cyt  /  h_vac ) ) )   +  ( D_G_ATP  /  F )  )", 
        "uni_links": [
            "315", 
            "320", 
            "354"
        ], 
        "state": "0", 
        "links_from": [], 
        "x": "252.5", 
        "compartment": "parameter_compartment", 
        "is_ode": false
    }, 
    {
        "links_to": [], 
        "links_to_mod": [], 
        "symbol": "triangle", 
        "links_from_mod": [], 
        "module": [
            "TRP_ION"
        ], 
        "y": "45.077", 
        "annotation": "SBO:0000468", 
        "name_alt": "vacuole", 
        "name": "350", 
        "equation": "( 0.2  *  cytosol )", 
        "uni_links": [
            "347", 
            "142"
        ], 
        "state": "0", 
        "links_from": [], 
        "x": "202.22", 
        "compartment": "vacuole", 
        "is_ode": false
    }, 
    {
        "links_to": [], 
        "links_to_mod": [
            "362", 
            "372"
        ], 
        "symbol": "circle", 
        "links_from_mod": [], 
        "module": [
            "TRP_ION"
        ], 
        "y": "39.307", 
        "annotation": "CHEBI:43474", 
        "name_alt": "pi_cyt", 
        "name": "351", 
        "uni_links": [
            "354"
        ], 
        "state": "-2", 
        "links_from": [], 
        "x": "259.73", 
        "compartment": "cytosol", 
        "is_ode": true
    }, 
    {
        "links_to": [], 
        "links_to_mod": [], 
        "symbol": "circle", 
        "links_from_mod": [], 
        "module": [
            "TRP_ION"
        ], 
        "y": "96.577", 
        "annotation": "SBML_IMPORT_ANNOTATION:1", 
        "name_alt": "acid_cytosol_h", 
        "name": "352", 
        "uni_links": [], 
        "state": "0", 
        "links_from": [], 
        "x": "102.38", 
        "compartment": "cytosol", 
        "is_ode": true
    }, 
    {
        "links_to": [
            "370"
        ], 
        "links_to_mod": [], 
        "symbol": "circle", 
        "links_from_mod": [], 
        "module": [
            "TRP_ION"
        ], 
        "y": "53.514", 
        "annotation": "CHEBI:29103", 
        "name_alt": "k_vac", 
        "name": "353", 
        "uni_links": [], 
        "state": "0", 
        "links_from": [], 
        "x": "240.74", 
        "compartment": "vacuole", 
        "is_ode": false
    }, 
    {
        "links_to": [], 
        "links_to_mod": [], 
        "symbol": "triangle", 
        "links_from_mod": [], 
        "module": [
            "TRP_ION"
        ], 
        "y": "35.224", 
        "annotation": "SBML_IMPORT_ANNOTATION:12", 
        "name_alt": "D_G_ATP", 
        "name": "354", 
        "equation": "( D_G_ATP_0  - ( ( R  *  T )  *  log( ( atp_cyt  /  ( adp_cyt  *  pi_cyt ) ) ) ) )", 
        "uni_links": [
            "339", 
            "318", 
            "349", 
            "317", 
            "346", 
            "351"
        ], 
        "state": "0", 
        "links_from": [], 
        "x": "254.21", 
        "compartment": "parameter_compartment", 
        "is_ode": false
    }, 
    {
        "links_to": [], 
        "links_to_mod": [], 
        "symbol": "circle", 
        "links_from_mod": [], 
        "module": [
            "TRP_ION"
        ], 
        "y": "68.244", 
        "annotation": "SBML_IMPORT_ANNOTATION:2", 
        "name_alt": "acid_cytosol", 
        "name": "355", 
        "uni_links": [], 
        "state": "0", 
        "links_from": [], 
        "x": "125.04", 
        "compartment": "cytosol", 
        "is_ode": true
    }, 
    {
        "links_to": [], 
        "links_to_mod": [], 
        "symbol": "triangle", 
        "links_from_mod": [], 
        "module": [
            "TRP_ION"
        ], 
        "y": "52.813", 
        "annotation": "SBML_IMPORT_ANNOTATION:18", 
        "name_alt": "my_J_K", 
        "name": "356", 
        "equation": "( ( (  ( surface  /  ( 1.  *  F ) )   *  gp_k )  *  ( v_m  -  (  (  ( ( R  *  T )  /  F )   /  1. )   *  log( ( k_ext  /  k_cyt ) ) )  ) ) )", 
        "uni_links": [
            "343", 
            "319", 
            "338", 
            "341"
        ], 
        "state": "0", 
        "links_from": [], 
        "x": "244.38", 
        "compartment": "parameter_compartment", 
        "is_ode": false
    }, 
    {
        "links_to": [], 
        "links_to_mod": [], 
        "symbol": "triangle", 
        "links_from_mod": [], 
        "module": [
            "TRP_ION"
        ], 
        "y": "40.051", 
        "annotation": "SBML_IMPORT_ANNOTATION:17", 
        "name_alt": "my_J_H", 
        "name": "357", 
        "equation": "( ( (  ( surface  /  ( 1.  *  F ) )   *  gp_h )  *  ( v_m  -  (  (  ( ( R  *  T )  /  F )   /  1. )   *  log( ( h_ext  /  h_cyt ) ) )  ) ) )", 
        "uni_links": [
            "343", 
            "319", 
            "321", 
            "315"
        ], 
        "state": "0", 
        "links_from": [], 
        "x": "242.19", 
        "compartment": "parameter_compartment", 
        "is_ode": false
    }, 
    {
        "links_to": [], 
        "links_to_mod": [
            "368"
        ], 
        "symbol": "circle", 
        "links_from_mod": [], 
        "module": [
            "TRP_ION"
        ], 
        "y": "64.97", 
        "annotation": "CHEBI:17996", 
        "name_alt": "cl_ext", 
        "name": "358", 
        "uni_links": [
            "326"
        ], 
        "state": "0", 
        "links_from": [], 
        "x": "250.85", 
        "compartment": "extracellular", 
        "is_ode": true
    }, 
    {
        "links_to": [], 
        "links_to_mod": [], 
        "symbol": "triangle", 
        "links_from_mod": [], 
        "module": [
            "TRP_ION"
        ], 
        "y": "55.373", 
        "annotation": "SBML_IMPORT_ANNOTATION:22", 
        "name_alt": "my_J_pma1", 
        "name": "359", 
        "equation": "(( (  ( surface  /  F )   *  I_MAX_PMA1 )  *  tanh((  ( F  /  ( ( 2.  *  R )  *  T ) )   *  ( v_m  - E_pma1 ) )) ))", 
        "uni_links": [
            "343", 
            "319", 
            "318"
        ], 
        "state": "0", 
        "links_from": [], 
        "x": "250.75", 
        "compartment": "parameter_compartment", 
        "is_ode": false
    }, 
    {
        "links_to": [], 
        "links_to_mod": [], 
        "symbol": "triangle", 
        "links_from_mod": [], 
        "module": [
            "TRP_ION"
        ], 
        "y": "54.279", 
        "annotation": "SBML_IMPORT_ANNOTATION:23", 
        "name_alt": "my_J_nha1", 
        "name": "360", 
        "equation": "(( (  ( surface  /  F )   *  G_NHA1 )  *  ( v_m  - E_nha1 ) ))", 
        "uni_links": [
            "343", 
            "319", 
            "345"
        ], 
        "state": "0", 
        "links_from": [], 
        "x": "255.83", 
        "compartment": "parameter_compartment", 
        "is_ode": false
    }, 
    {
        "links_to": [], 
        "links_to_mod": [], 
        "symbol": "triangle", 
        "links_from_mod": [], 
        "module": [
            "TRP_ION"
        ], 
        "y": "41.644", 
        "annotation": "SBML_IMPORT_ANNOTATION:10", 
        "name_alt": "gp_tok1", 
        "name": "361", 
        "equation": " ( gp_tok1_0  /  ( 1.  + exp((  (  ( ( d_tok1  *  F )  /  R )   /  T )   *  ( v_m  - v_tok1_halfmax ) )) ) ) ", 
        "uni_links": [
            "348", 
            "319"
        ], 
        "state": "0", 
        "links_from": [], 
        "x": "241.47", 
        "compartment": "parameter_compartment", 
        "is_ode": false
    }, 
    {
        "links_to": [], 
        "links_to_mod": [], 
        "symbol": "rect", 
        "links_from_mod": [
            "321", 
            "317", 
            "346", 
            "351"
        ], 
        "module": [
            "TRP_ION"
        ], 
        "y": "40.832", 
        "rate": "( (  ( surface  /  F )   *  I_MAX_PMA1 )  *  tanh((  ( F  /  ( ( 2.  *  R )  *  T ) )   *  ( v_m  - E_pma1 ) )) )", 
        "name_alt": "J_pma1", 
        "name": "362", 
        "uni_links": [], 
        "compartments": [
            "cytosol", 
            "extracellular"
        ], 
        "links_from": [
            "315"
        ], 
        "x": "260.58", 
        "is_ode": false
    }, 
    {
        "links_to": [], 
        "links_to_mod": [], 
        "symbol": "rect", 
        "links_from_mod": [
            "324"
        ], 
        "module": [
            "TRP_ION"
        ], 
        "y": "42.481", 
        "rate": " ( (  ( surface  /  ( 1.  *  F ) )   *  gp_na )  *  ( v_m  -  (  (  ( ( R  *  T )  /  F )   /  1. )   *  log( ( na_ext  /  na_cyt ) ) )  ) ) ", 
        "name_alt": "J_na", 
        "name": "363", 
        "uni_links": [], 
        "compartments": [
            "cytosol", 
            "extracellular"
        ], 
        "links_from": [
            "325"
        ], 
        "x": "261.16", 
        "is_ode": false
    }, 
    {
        "links_to": [], 
        "links_to_mod": [], 
        "symbol": "rect", 
        "links_from_mod": [
            "338"
        ], 
        "module": [
            "TRP_ION"
        ], 
        "y": "46.819", 
        "rate": " ( (  ( surface  /  ( 1.  *  F ) )   *  gp_trk12 )  *  ( v_m  -  (  (  ( ( R  *  T )  /  F )   /  1. )   *  log( ( k_ext  /  k_cyt ) ) )  ) ) ", 
        "name_alt": "J_trk12", 
        "name": "364", 
        "uni_links": [], 
        "compartments": [
            "cytosol", 
            "extracellular"
        ], 
        "links_from": [
            "341"
        ], 
        "x": "241.03", 
        "is_ode": false
    }, 
    {
        "links_to": [], 
        "links_to_mod": [], 
        "symbol": "rect", 
        "links_from_mod": [
            "342"
        ], 
        "module": [
            "TRP_ION"
        ], 
        "y": "63.051", 
        "rate": " ( (  ( surface  /  ( 2.  *  F ) )   *  gp_ca )  *  ( v_m  -  (  (  ( ( R  *  T )  /  F )   /  2. )   *  log( ( ca_ext  /  ca_cyt ) ) )  ) ) ", 
        "name_alt": "J_ca", 
        "name": "365", 
        "uni_links": [], 
        "compartments": [
            "cytosol", 
            "extracellular"
        ], 
        "links_from": [
            "329"
        ], 
        "x": "248.56", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "315"
        ], 
        "links_to_mod": [], 
        "symbol": "rect", 
        "links_from_mod": [], 
        "module": [
            "TRP_ION"
        ], 
        "y": "35.003", 
        "rate": " ( (  ( surface_vac  /  ( 1.  *  F ) )   *  gv_h )  *  ( v_v  -  (  (  ( ( R  *  T )  /  F )   /  1. )   *  log( ( h_cyt  /  h_vac ) ) )  ) ) ", 
        "name_alt": "J_vac_h", 
        "name": "366", 
        "uni_links": [], 
        "compartments": [
            "vacuole", 
            "cytosol"
        ], 
        "links_from": [
            "320"
        ], 
        "x": "249.02", 
        "is_ode": false
    }, 
    {
        "links_to": [], 
        "links_to_mod": [], 
        "symbol": "rect", 
        "links_from_mod": [
            "321"
        ], 
        "module": [
            "TRP_ION"
        ], 
        "y": "36.302", 
        "rate": " ( (  ( surface  /  ( 1.  *  F ) )   *  gp_h )  *  ( v_m  -  (  (  ( ( R  *  T )  /  F )   /  1. )   *  log( ( h_ext  /  h_cyt ) ) )  ) ) ", 
        "name_alt": "J_h", 
        "name": "367", 
        "uni_links": [], 
        "compartments": [
            "cytosol", 
            "extracellular"
        ], 
        "links_from": [
            "315"
        ], 
        "x": "245.79", 
        "is_ode": false
    }, 
    {
        "links_to": [], 
        "links_to_mod": [], 
        "symbol": "rect", 
        "links_from_mod": [
            "358"
        ], 
        "module": [
            "TRP_ION"
        ], 
        "y": "65.985", 
        "rate": " ( (  ( surface  /  ( -1.  *  F ) )   *  gp_cl )  *  ( v_m  -  (  (  ( ( R  *  T )  /  F )   /  -1. )   *  log( ( cl_ext  /  cl_cyt ) ) )  ) ) ", 
        "name_alt": "J_cl", 
        "name": "368", 
        "uni_links": [], 
        "compartments": [
            "cytosol", 
            "extracellular"
        ], 
        "links_from": [
            "322"
        ], 
        "x": "252.06", 
        "is_ode": false
    }, 
    {
        "links_to": [], 
        "links_to_mod": [], 
        "symbol": "rect", 
        "links_from_mod": [
            "338"
        ], 
        "module": [
            "TRP_ION"
        ], 
        "y": "48.51", 
        "rate": " ( (  ( surface  /  ( 1.  *  F ) )   *  gp_k )  *  ( v_m  -  (  (  ( ( R  *  T )  /  F )   /  1. )   *  log( ( k_ext  /  k_cyt ) ) )  ) ) ", 
        "name_alt": "J_k", 
        "name": "369", 
        "uni_links": [], 
        "compartments": [
            "cytosol", 
            "extracellular"
        ], 
        "links_from": [
            "341"
        ], 
        "x": "241.47", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "341"
        ], 
        "links_to_mod": [], 
        "symbol": "rect", 
        "links_from_mod": [], 
        "module": [
            "TRP_ION"
        ], 
        "y": "52.415", 
        "rate": " ( (  ( surface_vac  /  ( 1.  *  F ) )   *  gv_k )  *  ( v_v  -  (  (  ( ( R  *  T )  /  F )   /  1. )   *  log( ( k_cyt  /  k_vac ) ) )  ) ) ", 
        "name_alt": "J_vac_k", 
        "name": "370", 
        "uni_links": [], 
        "compartments": [
            "vacuole", 
            "cytosol"
        ], 
        "links_from": [
            "353"
        ], 
        "x": "242.1", 
        "is_ode": false
    }, 
    {
        "links_to": [], 
        "links_to_mod": [], 
        "symbol": "rect", 
        "links_from_mod": [
            "338"
        ], 
        "module": [
            "TRP_ION"
        ], 
        "y": "50.103", 
        "rate": " ( (  ( surface  /  ( 1.  *  F ) )   *  gp_tok1 )  *  ( v_m  -  (  (  ( ( R  *  T )  /  F )   /  1. )   *  log( ( k_ext  /  k_cyt ) ) )  ) ) ", 
        "name_alt": "J_tok1", 
        "name": "371", 
        "uni_links": [], 
        "compartments": [
            "cytosol", 
            "extracellular"
        ], 
        "links_from": [
            "341"
        ], 
        "x": "242.19", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "315"
        ], 
        "links_to_mod": [], 
        "symbol": "rect", 
        "links_from_mod": [
            "317", 
            "346", 
            "351"
        ], 
        "module": [
            "TRP_ION"
        ], 
        "y": "35.875", 
        "rate": "( (  ( surface_vac  /  F )   *  I_MAX_VMA_1 )  *  tanh( ( ( v_v  - E_vma1 )  /  ( ( 2.  *  R )  *  T ) ) ) )", 
        "name_alt": "J_vma1", 
        "name": "372", 
        "uni_links": [], 
        "compartments": [
            "vacuole", 
            "cytosol"
        ], 
        "links_from": [
            "320"
        ], 
        "x": "255.83", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "325"
        ], 
        "links_to_mod": [], 
        "symbol": "rect", 
        "links_from_mod": [
            "321", 
            "324"
        ], 
        "module": [
            "TRP_ION"
        ], 
        "y": "52.208", 
        "rate": "( (  ( surface  /  F )   *  G_NHA1 )  *  ( v_m  - E_nha1 ) )", 
        "name_alt": "J_nha1", 
        "name": "373", 
        "uni_links": [], 
        "compartments": [
            "cytosol", 
            "extracellular"
        ], 
        "links_from": [
            "315"
        ], 
        "x": "258.63", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "329"
        ], 
        "links_to_mod": [], 
        "symbol": "rect", 
        "links_from_mod": [], 
        "module": [
            "TRP_ION"
        ], 
        "y": "65.155", 
        "rate": " ( (  ( surface_vac  /  ( 2.  *  F ) )   *  gv_ca )  *  ( v_v  -  (  (  ( ( R  *  T )  /  F )   /  2. )   *  log( ( ca_cyt  /  ca_vac ) ) )  ) ) ", 
        "name_alt": "J_vac_ca", 
        "name": "374", 
        "uni_links": [], 
        "compartments": [
            "vacuole", 
            "cytosol"
        ], 
        "links_from": [
            "337"
        ], 
        "x": "246.82", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "322"
        ], 
        "links_to_mod": [], 
        "symbol": "rect", 
        "links_from_mod": [], 
        "module": [
            "TRP_ION"
        ], 
        "y": "64.664", 
        "rate": " ( (  ( surface_vac  /  ( -1.  *  F ) )   *  gv_cl )  *  ( v_v  -  (  (  ( ( R  *  T )  /  F )   /  -1. )   *  log( ( cl_cyt  /  cl_vac ) ) )  ) ) ", 
        "name_alt": "J_vac_cl", 
        "name": "375", 
        "uni_links": [], 
        "compartments": [
            "vacuole", 
            "cytosol"
        ], 
        "links_from": [
            "330"
        ], 
        "x": "254.44", 
        "is_ode": false
    }, 
    {
        "links_to": [], 
        "links_to_mod": [], 
        "symbol": "rect", 
        "links_from_mod": [
            "324"
        ], 
        "module": [
            "TRP_ION"
        ], 
        "y": "45.951", 
        "rate": "( (  ( surface  /  F )   *  I_MAX_ENA1 )  *  tanh((  ( F  /  ( ( 2.  *  R )  *  T ) )   *  ( v_m  - E_ena1 ) )) )", 
        "name_alt": "J_ena1", 
        "name": "376", 
        "uni_links": [], 
        "compartments": [
            "cytosol", 
            "extracellular"
        ], 
        "links_from": [
            "325"
        ], 
        "x": "261.46", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "325"
        ], 
        "links_to_mod": [], 
        "symbol": "rect", 
        "links_from_mod": [], 
        "module": [
            "TRP_ION"
        ], 
        "y": "44.087", 
        "rate": " ( (  ( surface_vac  /  ( 1.  *  F ) )   *  gv_na )  *  ( v_v  -  (  (  ( ( R  *  T )  /  F )   /  1. )   *  log( ( na_cyt  /  na_vac ) ) )  ) ) ", 
        "name_alt": "J_vac_na", 
        "name": "377", 
        "uni_links": [], 
        "compartments": [
            "vacuole", 
            "cytosol"
        ], 
        "links_from": [
            "335"
        ], 
        "x": "262.83", 
        "is_ode": false
    }, 
    {
        "links_to": [], 
        "links_to_mod": [], 
        "symbol": "circle", 
        "links_from_mod": [], 
        "module": [
            "TRP_NUT"
        ], 
        "y": "62.577", 
        "annotation": "YCM:AA_check", 
        "name_alt": "AA_trp_check", 
        "name": "378", 
        "uni_links": [], 
        "state": "0", 
        "links_from": [], 
        "x": "136.38", 
        "compartment": "intracellular", 
        "is_ode": true
    }, 
    {
        "links_to": [], 
        "links_to_mod": [], 
        "symbol": "circle", 
        "links_from_mod": [], 
        "module": [
            "TRP_NUT"
        ], 
        "y": "7.2583", 
        "annotation": "CHEBI:16526", 
        "name_alt": "CO2_ext", 
        "name": "379", 
        "uni_links": [], 
        "state": "0", 
        "links_from": [
            "390"
        ], 
        "x": "0.375", 
        "compartment": "extracellular", 
        "is_ode": false
    }, 
    {
        "links_to": [], 
        "links_to_mod": [], 
        "symbol": "triangle", 
        "links_from_mod": [], 
        "module": [
            "TRP_NUT"
        ], 
        "y": "72.709", 
        "annotation": "SBO:0000627", 
        "name_alt": "glc_uptake", 
        "name": "380", 
        "equation": "SURFACE * V_MAX_HXT * ( (glucose_ext/KM_HXT) - (glucose_cyt/KM_HXT) ) / ( 1 + (glucose_ext/KM_HXT) + (glucose_cyt/KM_HXT) + KI_HXT*glucose_ext*glucose_cyt/(KM_HXT**2))", 
        "uni_links": [
            "1", 
            "382", 
            "272", 
            "382", 
            "272", 
            "382", 
            "272"
        ], 
        "state": "0", 
        "links_from": [], 
        "x": "243.89", 
        "compartment": "intracellular", 
        "is_ode": false
    }, 
    {
        "links_to": [], 
        "links_to_mod": [], 
        "symbol": "circle", 
        "links_from_mod": [], 
        "module": [
            "TRP_NUT"
        ], 
        "y": "49.001", 
        "annotation": "CHEBI:17754", 
        "name_alt": "glycerol_ext", 
        "name": "381", 
        "uni_links": [], 
        "state": "0", 
        "links_from": [
            "387"
        ], 
        "x": "83.789", 
        "compartment": "extracellular", 
        "is_ode": false
    }, 
    {
        "links_to": [], 
        "links_to_mod": [
            "389"
        ], 
        "symbol": "circle", 
        "links_from_mod": [], 
        "module": [
            "TRP_NUT"
        ], 
        "y": "73.906", 
        "annotation": "CHEBI:17634", 
        "name_alt": "glucose_ext", 
        "name": "382", 
        "uni_links": [
            "380", 
            "380", 
            "380"
        ], 
        "state": "0", 
        "links_from": [], 
        "x": "245.16", 
        "compartment": "extracellular", 
        "is_ode": true
    }, 
    {
        "links_to": [], 
        "links_to_mod": [], 
        "symbol": "circle", 
        "links_from_mod": [], 
        "module": [
            "TRP_NUT"
        ], 
        "y": "141.91", 
        "annotation": "YCM:AA", 
        "name_alt": "AA_ext", 
        "name": "383", 
        "uni_links": [], 
        "state": "0", 
        "links_from": [], 
        "x": "108.04", 
        "compartment": "extracellular", 
        "is_ode": true
    }, 
    {
        "links_to": [], 
        "links_to_mod": [], 
        "symbol": "circle", 
        "links_from_mod": [], 
        "module": [
            "TRP_NUT"
        ], 
        "y": "141.91", 
        "annotation": "CHEBI:43474", 
        "name_alt": "Pi_ext", 
        "name": "384", 
        "uni_links": [], 
        "state": "-2", 
        "links_from": [], 
        "x": "96.711", 
        "compartment": "extracellular", 
        "is_ode": true
    }, 
    {
        "links_to": [], 
        "links_to_mod": [], 
        "symbol": "circle", 
        "links_from_mod": [], 
        "module": [
            "TRP_NUT"
        ], 
        "y": "0.25", 
        "annotation": "CHEBI:16236", 
        "name_alt": "EtOH_ext", 
        "name": "385", 
        "uni_links": [], 
        "state": "0", 
        "links_from": [
            "388"
        ], 
        "x": "0.87545", 
        "compartment": "extracellular", 
        "is_ode": false
    }, 
    {
        "links_to": [], 
        "links_to_mod": [], 
        "symbol": "circle", 
        "links_from_mod": [], 
        "module": [
            "TRP_NUT"
        ], 
        "y": "130.58", 
        "annotation": "CHEBI:28938", 
        "name_alt": "NH4_ext", 
        "name": "386", 
        "uni_links": [], 
        "state": "+1", 
        "links_from": [], 
        "x": "96.711", 
        "compartment": "extracellular", 
        "is_ode": true
    }, 
    {
        "links_to": [
            "381"
        ], 
        "links_to_mod": [], 
        "symbol": "rect", 
        "links_from_mod": [], 
        "module": [
            "TRP_NUT"
        ], 
        "y": "50.036", 
        "rate": "glycerol_mem_permeability * SURFACE * (glycerol_cyt - glycerol_ext)", 
        "name_alt": "glycerol_trp", 
        "name": "387", 
        "uni_links": [], 
        "compartments": [
            "intracellular", 
            "extracellular"
        ], 
        "links_from": [
            "276"
        ], 
        "x": "85.2", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "385"
        ], 
        "links_to_mod": [], 
        "symbol": "rect", 
        "links_from_mod": [], 
        "module": [
            "TRP_NUT"
        ], 
        "y": "1.2247", 
        "rate": "EtOH_mem_permeability * SURFACE * 1e-10 * 1e15 * (EtOH - EtOH_ext)", 
        "name_alt": "v_EtOHdif", 
        "name": "388", 
        "uni_links": [], 
        "compartments": [
            "intracellular", 
            "extracellular"
        ], 
        "links_from": [
            "266"
        ], 
        "x": "2.3289", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "272"
        ], 
        "links_to_mod": [], 
        "symbol": "rect", 
        "links_from_mod": [
            "4", 
            "1", 
            "382"
        ], 
        "module": [
            "TRP_NUT"
        ], 
        "y": "75.133", 
        "rate": "SURFACE * V_MAX_HXT * ( (glucose_ext/KM_HXT) - (glucose_cyt/KM_HXT) ) / ( 1 + (glucose_ext/KM_HXT) + (glucose_cyt/KM_HXT) + KI_HXT*glucose_ext*glucose_cyt/(KM_HXT**2))", 
        "name_alt": "v_hxt", 
        "name": "389", 
        "uni_links": [], 
        "compartments": [
            "intracellular", 
            "extracellular"
        ], 
        "links_from": [], 
        "x": "246.41", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "379"
        ], 
        "links_to_mod": [], 
        "symbol": "rect", 
        "links_from_mod": [], 
        "module": [
            "TRP_NUT"
        ], 
        "y": "8.1936", 
        "rate": "CO2_mem_permeability * SURFACE * 1e-10 * 1e15 * (CO2 - CO2_ext)", 
        "name_alt": "v_C02dif", 
        "name": "390", 
        "uni_links": [], 
        "compartments": [
            "intracellular", 
            "extracellular"
        ], 
        "links_from": [
            "279"
        ], 
        "x": "1.8541", 
        "is_ode": false
    }
]
let links_circo=[
    {
        "target_alt": "dR_ref", 
        "symbol": "none", 
        "target": "10", 
        "source_alt": "R_ref", 
        "source": "12"
    }, 
    {
        "target_alt": "dR_ref", 
        "symbol": "none", 
        "target": "10", 
        "source_alt": "r", 
        "source": "9"
    }, 
    {
        "target_alt": "dR_ref", 
        "symbol": "none", 
        "target": "10", 
        "source_alt": "pi_t", 
        "source": "6"
    }, 
    {
        "target_alt": "G", 
        "symbol": "none", 
        "target": "1", 
        "source_alt": "r", 
        "source": "9"
    }, 
    {
        "target_alt": "dr_b", 
        "symbol": "none", 
        "target": "3", 
        "source_alt": "dR_ref", 
        "source": "10"
    }, 
    {
        "target_alt": "int_vol", 
        "symbol": "none", 
        "target": "4", 
        "source_alt": "V", 
        "source": "11"
    }, 
    {
        "target_alt": "V_ref", 
        "symbol": "none", 
        "target": "7", 
        "source_alt": "R_ref", 
        "source": "12"
    }, 
    {
        "target_alt": "pi_i", 
        "symbol": "none", 
        "target": "8", 
        "source_alt": "c_i", 
        "source": "2"
    }, 
    {
        "target_alt": "pi_i", 
        "symbol": "none", 
        "target": "8", 
        "source_alt": "V", 
        "source": "11"
    }, 
    {
        "target_alt": "r", 
        "symbol": "none", 
        "target": "9", 
        "source_alt": "r_os", 
        "source": "5"
    }, 
    {
        "target_alt": "r", 
        "symbol": "none", 
        "target": "9", 
        "source_alt": "r_b", 
        "source": "13"
    }, 
    {
        "target_alt": "dr_os", 
        "symbol": "none", 
        "target": "0", 
        "source_alt": "pi_t", 
        "source": "6"
    }, 
    {
        "target_alt": "dr_os", 
        "symbol": "none", 
        "target": "0", 
        "source_alt": "pi_e", 
        "source": "15"
    }, 
    {
        "target_alt": "dr_os", 
        "symbol": "none", 
        "target": "0", 
        "source_alt": "pi_i", 
        "source": "8"
    }, 
    {
        "target_alt": "V", 
        "symbol": "none", 
        "target": "11", 
        "source_alt": "r", 
        "source": "9"
    }, 
    {
        "target_alt": "dr", 
        "symbol": "none", 
        "target": "14", 
        "source_alt": "dR_ref", 
        "source": "10"
    }, 
    {
        "target_alt": "dr", 
        "symbol": "none", 
        "target": "14", 
        "source_alt": "pi_t", 
        "source": "6"
    }, 
    {
        "target_alt": "dr", 
        "symbol": "none", 
        "target": "14", 
        "source_alt": "pi_e", 
        "source": "15"
    }, 
    {
        "target_alt": "dr", 
        "symbol": "none", 
        "target": "14", 
        "source_alt": "pi_i", 
        "source": "8"
    }, 
    {
        "target_alt": "G", 
        "symbol": "none", 
        "target": "1", 
        "source_alt": "c_i", 
        "source": "2"
    }, 
    {
        "target_alt": "V", 
        "symbol": "none", 
        "target": "11", 
        "source_alt": "c_i", 
        "source": "2"
    }, 
    {
        "target_alt": "pi_t", 
        "symbol": "none", 
        "target": "6", 
        "source_alt": "r_os", 
        "source": "5"
    }, 
    {
        "target_alt": "pi_e", 
        "symbol": "none", 
        "target": "15", 
        "source_alt": "r_os", 
        "source": "5"
    }, 
    {
        "target_alt": "pi_i", 
        "symbol": "none", 
        "target": "8", 
        "source_alt": "r_os", 
        "source": "5"
    }, 
    {
        "target_alt": "R_ref", 
        "symbol": "none", 
        "target": "12", 
        "source_alt": "pi_t", 
        "source": "6"
    }, 
    {
        "target_alt": "r", 
        "symbol": "none", 
        "target": "9", 
        "source_alt": "pi_t", 
        "source": "6"
    }, 
    {
        "target_alt": "pi_t", 
        "symbol": "none", 
        "target": "6", 
        "source_alt": "pi_t", 
        "source": "6"
    }, 
    {
        "target_alt": "pi_t", 
        "symbol": "none", 
        "target": "6", 
        "source_alt": "pi_t", 
        "source": "6"
    }, 
    {
        "target_alt": "pi_e", 
        "symbol": "none", 
        "target": "15", 
        "source_alt": "pi_t", 
        "source": "6"
    }, 
    {
        "target_alt": "pi_i", 
        "symbol": "none", 
        "target": "8", 
        "source_alt": "pi_t", 
        "source": "6"
    }, 
    {
        "target_alt": "r", 
        "symbol": "none", 
        "target": "9", 
        "source_alt": "pi_t", 
        "source": "6"
    }, 
    {
        "target_alt": "R_ref", 
        "symbol": "none", 
        "target": "12", 
        "source_alt": "pi_t", 
        "source": "6"
    }, 
    {
        "target_alt": "r", 
        "symbol": "none", 
        "target": "9", 
        "source_alt": "pi_t", 
        "source": "6"
    }, 
    {
        "target_alt": "pi_t", 
        "symbol": "none", 
        "target": "6", 
        "source_alt": "pi_t", 
        "source": "6"
    }, 
    {
        "target_alt": "R_ref", 
        "symbol": "none", 
        "target": "12", 
        "source_alt": "pi_t", 
        "source": "6"
    }, 
    {
        "target_alt": "r", 
        "symbol": "none", 
        "target": "9", 
        "source_alt": "pi_t", 
        "source": "6"
    }, 
    {
        "target_alt": "R_ref", 
        "symbol": "none", 
        "target": "12", 
        "source_alt": "pi_t", 
        "source": "6"
    }, 
    {
        "target_alt": "r", 
        "symbol": "none", 
        "target": "9", 
        "source_alt": "pi_t", 
        "source": "6"
    }, 
    {
        "target_alt": "pi_t", 
        "symbol": "none", 
        "target": "6", 
        "source_alt": "pi_t", 
        "source": "6"
    }, 
    {
        "target_alt": "pi_t", 
        "symbol": "none", 
        "target": "6", 
        "source_alt": "pi_t", 
        "source": "6"
    }, 
    {
        "target_alt": "pi_e", 
        "symbol": "none", 
        "target": "15", 
        "source_alt": "pi_t", 
        "source": "6"
    }, 
    {
        "target_alt": "pi_i", 
        "symbol": "none", 
        "target": "8", 
        "source_alt": "pi_t", 
        "source": "6"
    }, 
    {
        "target_alt": "r", 
        "symbol": "none", 
        "target": "9", 
        "source_alt": "pi_t", 
        "source": "6"
    }, 
    {
        "target_alt": "pi_t", 
        "symbol": "none", 
        "target": "6", 
        "source_alt": "pi_t", 
        "source": "6"
    }, 
    {
        "target_alt": "R_ref", 
        "symbol": "none", 
        "target": "12", 
        "source_alt": "R_ref", 
        "source": "12"
    }, 
    {
        "target_alt": "r", 
        "symbol": "none", 
        "target": "9", 
        "source_alt": "R_ref", 
        "source": "12"
    }, 
    {
        "target_alt": "pi_t", 
        "symbol": "none", 
        "target": "6", 
        "source_alt": "R_ref", 
        "source": "12"
    }, 
    {
        "target_alt": "dR_ref", 
        "symbol": "none", 
        "target": "10", 
        "source_alt": "r_b", 
        "source": "13"
    }, 
    {
        "target_alt": "MBF_nuc", 
        "target": "50", 
        "source_alt": "v_MBF_akt", 
        "source": "52"
    }, 
    {
        "target_alt": "v_MBF_akt", 
        "symbol": "circle", 
        "target": "52", 
        "source_alt": "Cln2_cyt", 
        "source": "46"
    }, 
    {
        "target_alt": "v_Clb2_dp", 
        "target": "53", 
        "source_alt": "Clb2_p_cyt", 
        "source": "36"
    }, 
    {
        "target_alt": "Clb2_cyt", 
        "target": "38", 
        "source_alt": "v_Clb2_dp", 
        "source": "53"
    }, 
    {
        "target_alt": "v_Clb2_dp", 
        "symbol": "circle", 
        "target": "53", 
        "source_alt": "Mih1_cyt", 
        "source": "34"
    }, 
    {
        "target_alt": "v_Far1p_d", 
        "target": "54", 
        "source_alt": "Far1_p_cyt", 
        "source": "35"
    }, 
    {
        "target_alt": "v_Far1_dd", 
        "target": "55", 
        "source_alt": "Far1_cyt", 
        "source": "19"
    }, 
    {
        "target_alt": "v_Far1_dd", 
        "symbol": "circle", 
        "target": "55", 
        "source_alt": "Cln2_cyt", 
        "source": "46"
    }, 
    {
        "target_alt": "v_Mcm1_d", 
        "target": "56", 
        "source_alt": "Mcm1_nuc", 
        "source": "44"
    }, 
    {
        "target_alt": "v_Clb2_ass_Sic1", 
        "target": "57", 
        "source_alt": "Clb2_cyt", 
        "source": "38"
    }, 
    {
        "target_alt": "v_Clb2_ass_Sic1", 
        "target": "57", 
        "source_alt": "Sic1_cyt", 
        "source": "39"
    }, 
    {
        "target_alt": "Clb2_Sic1_cyt", 
        "target": "41", 
        "source_alt": "v_Clb2_ass_Sic1", 
        "source": "57"
    }, 
    {
        "target_alt": "v_Cln2_Far1p_d", 
        "target": "58", 
        "source_alt": "Cln2_Far1_p_cyt", 
        "source": "27"
    }, 
    {
        "target_alt": "v_SBF_akt", 
        "target": "59", 
        "source_alt": "SBF_Whi5_nuc", 
        "source": "42"
    }, 
    {
        "target_alt": "Whi5_p_cyt", 
        "target": "23", 
        "source_alt": "v_SBF_akt", 
        "source": "59"
    }, 
    {
        "target_alt": "SBF_nuc", 
        "target": "48", 
        "source_alt": "v_SBF_akt", 
        "source": "59"
    }, 
    {
        "target_alt": "v_SBF_akt", 
        "symbol": "circle", 
        "target": "59", 
        "source_alt": "Cln2_cyt", 
        "source": "46"
    }, 
    {
        "target_alt": "v_SBF_akt", 
        "symbol": "circle", 
        "target": "59", 
        "source_alt": "Cln3_cyt", 
        "source": "32"
    }, 
    {
        "target_alt": "v_SBF_ass_Whi5", 
        "target": "60", 
        "source_alt": "SBF_nuc", 
        "source": "48"
    }, 
    {
        "target_alt": "v_SBF_ass_Whi5", 
        "target": "60", 
        "source_alt": "Whi5_cyt", 
        "source": "30"
    }, 
    {
        "target_alt": "SBF_Whi5_nuc", 
        "target": "42", 
        "source_alt": "v_SBF_ass_Whi5", 
        "source": "60"
    }, 
    {
        "target_alt": "v_Far1_d", 
        "target": "61", 
        "source_alt": "Far1_cyt", 
        "source": "19"
    }, 
    {
        "target_alt": "v_SBF_inakt_Clb2", 
        "target": "62", 
        "source_alt": "SBF_nuc", 
        "source": "48"
    }, 
    {
        "target_alt": "SBF_p_cyt", 
        "target": "18", 
        "source_alt": "v_SBF_inakt_Clb2", 
        "source": "62"
    }, 
    {
        "target_alt": "v_SBF_inakt_Clb2", 
        "symbol": "circle", 
        "target": "62", 
        "source_alt": "Clb2_cyt", 
        "source": "38"
    }, 
    {
        "target_alt": "v_Clb5_ass_Sic1_Hp", 
        "target": "63", 
        "source_alt": "Sic1_Hp_cyt", 
        "source": "51"
    }, 
    {
        "target_alt": "v_Clb5_ass_Sic1_Hp", 
        "target": "63", 
        "source_alt": "Clb5_cyt", 
        "source": "29"
    }, 
    {
        "target_alt": "Clb5_Sic1_Hp_cyt", 
        "target": "33", 
        "source_alt": "v_Clb5_ass_Sic1_Hp", 
        "source": "63"
    }, 
    {
        "target_alt": "v_Cdc14_akt_MEN_fb", 
        "target": "64", 
        "source_alt": "Cdc14_cyt", 
        "source": "24"
    }, 
    {
        "target_alt": "Cdc14_p_cyt", 
        "target": "21", 
        "source_alt": "v_Cdc14_akt_MEN_fb", 
        "source": "64"
    }, 
    {
        "target_alt": "v_Cdc14_akt_MEN_fb", 
        "symbol": "circle", 
        "target": "64", 
        "source_alt": "Cdc14_p_cyt", 
        "source": "21"
    }, 
    {
        "target_alt": "v_Sic1_d", 
        "target": "65", 
        "source_alt": "Sic1_cyt", 
        "source": "39"
    }, 
    {
        "target_alt": "v_Cln2_ass_Far1p", 
        "target": "66", 
        "source_alt": "Cln2_cyt", 
        "source": "46"
    }, 
    {
        "target_alt": "v_Cln2_ass_Far1p", 
        "target": "66", 
        "source_alt": "Far1_p_cyt", 
        "source": "35"
    }, 
    {
        "target_alt": "Cln2_Far1_p_cyt", 
        "target": "27", 
        "source_alt": "v_Cln2_ass_Far1p", 
        "source": "66"
    }, 
    {
        "target_alt": "Sic1_cyt", 
        "target": "39", 
        "source_alt": "v_Sic1_p", 
        "source": "67"
    }, 
    {
        "target_alt": "v_Sic1_p", 
        "symbol": "circle", 
        "target": "67", 
        "source_alt": "Swi5_nuc", 
        "source": "17"
    }, 
    {
        "target_alt": "v_Cln3_diss_Far1p", 
        "target": "68", 
        "source_alt": "Cln3_Far1_p_cyt", 
        "source": "49"
    }, 
    {
        "target_alt": "Cln3_cyt", 
        "target": "32", 
        "source_alt": "v_Cln3_diss_Far1p", 
        "source": "68"
    }, 
    {
        "target_alt": "Far1_p_cyt", 
        "target": "35", 
        "source_alt": "v_Cln3_diss_Far1p", 
        "source": "68"
    }, 
    {
        "target_alt": "v_Sic1_p_d", 
        "target": "69", 
        "source_alt": "Sic1_p_cyt", 
        "source": "31"
    }, 
    {
        "target_alt": "v_SBF_dp", 
        "target": "70", 
        "source_alt": "SBF_p_cyt", 
        "source": "18"
    }, 
    {
        "target_alt": "SBF_nuc", 
        "target": "48", 
        "source_alt": "v_SBF_dp", 
        "source": "70"
    }, 
    {
        "target_alt": "v_SBF_dp", 
        "symbol": "circle", 
        "target": "70", 
        "source_alt": "Cdc14_p_cyt", 
        "source": "21"
    }, 
    {
        "target_alt": "v_Clb3_diss_Sic1", 
        "target": "71", 
        "source_alt": "Clb3_Sic1_cyt", 
        "source": "26"
    }, 
    {
        "target_alt": "Clb3_cyt", 
        "target": "45", 
        "source_alt": "v_Clb3_diss_Sic1", 
        "source": "71"
    }, 
    {
        "target_alt": "Sic1_cyt", 
        "target": "39", 
        "source_alt": "v_Clb3_diss_Sic1", 
        "source": "71"
    }, 
    {
        "target_alt": "v_Swe1_pp", 
        "target": "72", 
        "source_alt": "Swe1_cyt", 
        "source": "16"
    }, 
    {
        "target_alt": "Swe1_p_cyt", 
        "target": "28", 
        "source_alt": "v_Swe1_pp", 
        "source": "72"
    }, 
    {
        "target_alt": "v_Swe1_pp", 
        "symbol": "circle", 
        "target": "72", 
        "source_alt": "Clb2_cyt", 
        "source": "38"
    }, 
    {
        "target_alt": "v_Swi5_p_d", 
        "target": "73", 
        "source_alt": "Swi5_p_cyt", 
        "source": "47"
    }, 
    {
        "target_alt": "v_Whi5_pp", 
        "target": "74", 
        "source_alt": "Whi5_cyt", 
        "source": "30"
    }, 
    {
        "target_alt": "Whi5_p_cyt", 
        "target": "23", 
        "source_alt": "v_Whi5_pp", 
        "source": "74"
    }, 
    {
        "target_alt": "v_Whi5_pp", 
        "symbol": "circle", 
        "target": "74", 
        "source_alt": "Cln2_cyt", 
        "source": "46"
    }, 
    {
        "target_alt": "v_Whi5_pp", 
        "symbol": "circle", 
        "target": "74", 
        "source_alt": "Cln3_cyt", 
        "source": "32"
    }, 
    {
        "target_alt": "Clb5_cyt", 
        "target": "29", 
        "source_alt": "v_Clb5_p", 
        "source": "75"
    }, 
    {
        "target_alt": "v_Clb5_p", 
        "symbol": "circle", 
        "target": "75", 
        "source_alt": "Hog1_PP_cyt", 
        "source": "25"
    }, 
    {
        "target_alt": "v_Clb5_p", 
        "symbol": "circle", 
        "target": "75", 
        "source_alt": "MBF_nuc", 
        "source": "50"
    }, 
    {
        "target_alt": "Far1_cyt", 
        "target": "19", 
        "source_alt": "v_Far1_p", 
        "source": "76"
    }, 
    {
        "target_alt": "v_Far1_p", 
        "symbol": "circle", 
        "target": "76", 
        "source_alt": "Fus3_cyt", 
        "source": "40"
    }, 
    {
        "target_alt": "v_APC_akt_Cdc14", 
        "target": "77", 
        "source_alt": "APC_p_cyt", 
        "source": "43"
    }, 
    {
        "target_alt": "APC_cyt", 
        "target": "20", 
        "source_alt": "v_APC_akt_Cdc14", 
        "source": "77"
    }, 
    {
        "target_alt": "v_APC_akt_Cdc14", 
        "symbol": "circle", 
        "target": "77", 
        "source_alt": "Cdc14_p_cyt", 
        "source": "21"
    }, 
    {
        "target_alt": "v_Far1p_dp", 
        "target": "78", 
        "source_alt": "Far1_p_cyt", 
        "source": "35"
    }, 
    {
        "target_alt": "Far1_cyt", 
        "target": "19", 
        "source_alt": "v_Far1p_dp", 
        "source": "78"
    }, 
    {
        "target_alt": "v_Clb5_diss_Sic1_Hp", 
        "target": "79", 
        "source_alt": "Clb5_Sic1_Hp_cyt", 
        "source": "33"
    }, 
    {
        "target_alt": "Sic1_Hp_cyt", 
        "target": "51", 
        "source_alt": "v_Clb5_diss_Sic1_Hp", 
        "source": "79"
    }, 
    {
        "target_alt": "Clb5_cyt", 
        "target": "29", 
        "source_alt": "v_Clb5_diss_Sic1_Hp", 
        "source": "79"
    }, 
    {
        "target_alt": "v_Clb2_d_APC", 
        "target": "80", 
        "source_alt": "Clb2_cyt", 
        "source": "38"
    }, 
    {
        "target_alt": "v_Clb2_d_APC", 
        "symbol": "circle", 
        "target": "80", 
        "source_alt": "APC_cyt", 
        "source": "20"
    }, 
    {
        "target_alt": "v_Whi5_p_d", 
        "target": "81", 
        "source_alt": "Whi5_p_cyt", 
        "source": "23"
    }, 
    {
        "target_alt": "v_Swe1_Hog1", 
        "target": "82", 
        "source_alt": "Swe1_cyt", 
        "source": "16"
    }, 
    {
        "target_alt": "Swe1_p_cyt", 
        "target": "28", 
        "source_alt": "v_Swe1_Hog1", 
        "source": "82"
    }, 
    {
        "target_alt": "v_Swe1_Hog1", 
        "symbol": "circle", 
        "target": "82", 
        "source_alt": "Hog1_PP_cyt", 
        "source": "25"
    }, 
    {
        "target_alt": "v_Clb2_Sic1_d", 
        "target": "83", 
        "source_alt": "Clb2_Sic1_cyt", 
        "source": "41"
    }, 
    {
        "target_alt": "v_Sic1_Hp_dp", 
        "target": "84", 
        "source_alt": "Sic1_Hp_cyt", 
        "source": "51"
    }, 
    {
        "target_alt": "Sic1_cyt", 
        "target": "39", 
        "source_alt": "v_Sic1_Hp_dp", 
        "source": "84"
    }, 
    {
        "target_alt": "v_Cln2_rel", 
        "target": "85", 
        "source_alt": "Cln2_Far1_p_cyt", 
        "source": "27"
    }, 
    {
        "target_alt": "Cln2_cyt", 
        "target": "46", 
        "source_alt": "v_Cln2_rel", 
        "source": "85"
    }, 
    {
        "target_alt": "v_Clb3_d_APC", 
        "target": "86", 
        "source_alt": "Clb3_cyt", 
        "source": "45"
    }, 
    {
        "target_alt": "v_Clb3_d_APC", 
        "symbol": "circle", 
        "target": "86", 
        "source_alt": "APC_cyt", 
        "source": "20"
    }, 
    {
        "target_alt": "v_Clb5_ass_Sic1", 
        "target": "87", 
        "source_alt": "Sic1_cyt", 
        "source": "39"
    }, 
    {
        "target_alt": "v_Clb5_ass_Sic1", 
        "target": "87", 
        "source_alt": "Clb5_cyt", 
        "source": "29"
    }, 
    {
        "target_alt": "Clb5_Sic1_cyt", 
        "target": "22", 
        "source_alt": "v_Clb5_ass_Sic1", 
        "source": "87"
    }, 
    {
        "target_alt": "v_Far1_p_dd", 
        "target": "88", 
        "source_alt": "Far1_p_cyt", 
        "source": "35"
    }, 
    {
        "target_alt": "v_Far1_p_dd", 
        "symbol": "circle", 
        "target": "88", 
        "source_alt": "Cln2_cyt", 
        "source": "46"
    }, 
    {
        "target_alt": "v_Swe1_d", 
        "target": "89", 
        "source_alt": "Swe1_cyt", 
        "source": "16"
    }, 
    {
        "target_alt": "v_Clb5_d_APC", 
        "target": "90", 
        "source_alt": "Clb5_cyt", 
        "source": "29"
    }, 
    {
        "target_alt": "v_Clb5_d_APC", 
        "symbol": "circle", 
        "target": "90", 
        "source_alt": "APC_cyt", 
        "source": "20"
    }, 
    {
        "target_alt": "Swe1_cyt", 
        "target": "16", 
        "source_alt": "v_Swe1_p", 
        "source": "91"
    }, 
    {
        "target_alt": "v_Cdc14_inakt", 
        "target": "92", 
        "source_alt": "Cdc14_p_cyt", 
        "source": "21"
    }, 
    {
        "target_alt": "Cdc14_cyt", 
        "target": "24", 
        "source_alt": "v_Cdc14_inakt", 
        "source": "92"
    }, 
    {
        "target_alt": "v_Clb5_Sic1_d", 
        "target": "93", 
        "source_alt": "Clb5_Sic1_cyt", 
        "source": "22"
    }, 
    {
        "target_alt": "v_Cln2_diss_Far1p", 
        "target": "94", 
        "source_alt": "Cln2_Far1_p_cyt", 
        "source": "27"
    }, 
    {
        "target_alt": "Cln2_cyt", 
        "target": "46", 
        "source_alt": "v_Cln2_diss_Far1p", 
        "source": "94"
    }, 
    {
        "target_alt": "Far1_p_cyt", 
        "target": "35", 
        "source_alt": "v_Cln2_diss_Far1p", 
        "source": "94"
    }, 
    {
        "target_alt": "v_Clb2_diss_Sic1", 
        "target": "95", 
        "source_alt": "Clb2_Sic1_cyt", 
        "source": "41"
    }, 
    {
        "target_alt": "Clb2_cyt", 
        "target": "38", 
        "source_alt": "v_Clb2_diss_Sic1", 
        "source": "95"
    }, 
    {
        "target_alt": "Sic1_cyt", 
        "target": "39", 
        "source_alt": "v_Clb2_diss_Sic1", 
        "source": "95"
    }, 
    {
        "target_alt": "v_Clb3_Sic1_d", 
        "target": "96", 
        "source_alt": "Clb3_Sic1_cyt", 
        "source": "26"
    }, 
    {
        "target_alt": "v_Swi5_dp", 
        "target": "97", 
        "source_alt": "Swi5_p_cyt", 
        "source": "47"
    }, 
    {
        "target_alt": "Swi5_nuc", 
        "target": "17", 
        "source_alt": "v_Swi5_dp", 
        "source": "97"
    }, 
    {
        "target_alt": "v_Swi5_dp", 
        "symbol": "circle", 
        "target": "97", 
        "source_alt": "Cdc14_p_cyt", 
        "source": "21"
    }, 
    {
        "target_alt": "v_Clb5_d", 
        "target": "98", 
        "source_alt": "Clb5_cyt", 
        "source": "29"
    }, 
    {
        "target_alt": "v_APC_d", 
        "target": "99", 
        "source_alt": "APC_cyt", 
        "source": "20"
    }, 
    {
        "target_alt": "v_Sic1_pp_Hog1", 
        "target": "100", 
        "source_alt": "Sic1_cyt", 
        "source": "39"
    }, 
    {
        "target_alt": "Sic1_Hp_cyt", 
        "target": "51", 
        "source_alt": "v_Sic1_pp_Hog1", 
        "source": "100"
    }, 
    {
        "target_alt": "v_Sic1_pp_Hog1", 
        "symbol": "circle", 
        "target": "100", 
        "source_alt": "Hog1_PP_cyt", 
        "source": "25"
    }, 
    {
        "target_alt": "v_Sic1_pp", 
        "target": "101", 
        "source_alt": "Sic1_cyt", 
        "source": "39"
    }, 
    {
        "target_alt": "Sic1_p_cyt", 
        "target": "31", 
        "source_alt": "v_Sic1_pp", 
        "source": "101"
    }, 
    {
        "target_alt": "v_Sic1_pp", 
        "symbol": "circle", 
        "target": "101", 
        "source_alt": "Cln2_cyt", 
        "source": "46"
    }, 
    {
        "target_alt": "v_Sic1_pp", 
        "symbol": "circle", 
        "target": "101", 
        "source_alt": "Clb5_cyt", 
        "source": "29"
    }, 
    {
        "target_alt": "v_Cdc14_akt_Clb2", 
        "target": "102", 
        "source_alt": "Cdc14_cyt", 
        "source": "24"
    }, 
    {
        "target_alt": "Cdc14_p_cyt", 
        "target": "21", 
        "source_alt": "v_Cdc14_akt_Clb2", 
        "source": "102"
    }, 
    {
        "target_alt": "v_Cdc14_akt_Clb2", 
        "symbol": "circle", 
        "target": "102", 
        "source_alt": "Clb2_cyt", 
        "source": "38"
    }, 
    {
        "target_alt": "Mcm1_nuc", 
        "target": "44", 
        "source_alt": "v_Mcm1_p_Clb2_fb", 
        "source": "103"
    }, 
    {
        "target_alt": "v_Mcm1_p_Clb2_fb", 
        "symbol": "circle", 
        "target": "103", 
        "source_alt": "Clb2_cyt", 
        "source": "38"
    }, 
    {
        "target_alt": "v_Clb3_d", 
        "target": "104", 
        "source_alt": "Clb3_cyt", 
        "source": "45"
    }, 
    {
        "target_alt": "v_APC_p_d", 
        "target": "105", 
        "source_alt": "APC_p_cyt", 
        "source": "43"
    }, 
    {
        "target_alt": "v_Clb2_p_d", 
        "target": "106", 
        "source_alt": "Clb2_p_cyt", 
        "source": "36"
    }, 
    {
        "target_alt": "v_Cln3_ass_Far1p", 
        "target": "107", 
        "source_alt": "Cln3_cyt", 
        "source": "32"
    }, 
    {
        "target_alt": "v_Cln3_ass_Far1p", 
        "target": "107", 
        "source_alt": "Far1_p_cyt", 
        "source": "35"
    }, 
    {
        "target_alt": "Cln3_Far1_p_cyt", 
        "target": "49", 
        "source_alt": "v_Cln3_ass_Far1p", 
        "source": "107"
    }, 
    {
        "target_alt": "v_Clb5_rel", 
        "target": "108", 
        "source_alt": "Clb5_Sic1_cyt", 
        "source": "22"
    }, 
    {
        "target_alt": "Sic1_p_cyt", 
        "target": "31", 
        "source_alt": "v_Clb5_rel", 
        "source": "108"
    }, 
    {
        "target_alt": "Clb5_cyt", 
        "target": "29", 
        "source_alt": "v_Clb5_rel", 
        "source": "108"
    }, 
    {
        "target_alt": "v_Clb5_rel", 
        "symbol": "circle", 
        "target": "108", 
        "source_alt": "Cln2_cyt", 
        "source": "46"
    }, 
    {
        "target_alt": "Swi5_nuc", 
        "target": "17", 
        "source_alt": "v_Swi5_p", 
        "source": "109"
    }, 
    {
        "target_alt": "v_Swi5_p", 
        "symbol": "circle", 
        "target": "109", 
        "source_alt": "Mcm1_nuc", 
        "source": "44"
    }, 
    {
        "target_alt": "v_Clb5_Sic1_Hp_dp", 
        "target": "110", 
        "source_alt": "Clb5_Sic1_Hp_cyt", 
        "source": "33"
    }, 
    {
        "target_alt": "Clb5_Sic1_cyt", 
        "target": "22", 
        "source_alt": "v_Clb5_Sic1_Hp_dp", 
        "source": "110"
    }, 
    {
        "target_alt": "Cln2_cyt", 
        "target": "46", 
        "source_alt": "v_Cln2_p", 
        "source": "111"
    }, 
    {
        "target_alt": "v_Cln2_p", 
        "symbol": "circle", 
        "target": "111", 
        "source_alt": "SBF_nuc", 
        "source": "48"
    }, 
    {
        "target_alt": "v_Cln2_p", 
        "symbol": "circle", 
        "target": "111", 
        "source_alt": "Hog1_PP_cyt", 
        "source": "25"
    }, 
    {
        "target_alt": "v_Cln3_Far1p_d", 
        "target": "112", 
        "source_alt": "Cln3_Far1_p_cyt", 
        "source": "49"
    }, 
    {
        "target_alt": "v_Swi5_d", 
        "target": "113", 
        "source_alt": "Swi5_nuc", 
        "source": "17"
    }, 
    {
        "target_alt": "v_Cln2_d", 
        "target": "114", 
        "source_alt": "Cln2_cyt", 
        "source": "46"
    }, 
    {
        "target_alt": "v_Cln3_rel", 
        "target": "115", 
        "source_alt": "Cln3_Far1_p_cyt", 
        "source": "49"
    }, 
    {
        "target_alt": "Cln3_cyt", 
        "target": "32", 
        "source_alt": "v_Cln3_rel", 
        "source": "115"
    }, 
    {
        "target_alt": "v_Cln3_rel", 
        "symbol": "circle", 
        "target": "115", 
        "source_alt": "Cln2_cyt", 
        "source": "46"
    }, 
    {
        "target_alt": "Mcm1_nuc", 
        "target": "44", 
        "source_alt": "v_Mcm1_p_basal", 
        "source": "116"
    }, 
    {
        "target_alt": "v_Mcm1_p_basal", 
        "symbol": "circle", 
        "target": "116", 
        "source_alt": "Clb3_cyt", 
        "source": "45"
    }, 
    {
        "target_alt": "v_Far1_pp", 
        "target": "117", 
        "source_alt": "Far1_cyt", 
        "source": "19"
    }, 
    {
        "target_alt": "Far1_p_cyt", 
        "target": "35", 
        "source_alt": "v_Far1_pp", 
        "source": "117"
    }, 
    {
        "target_alt": "v_Far1_pp", 
        "symbol": "circle", 
        "target": "117", 
        "source_alt": "Fus3_cyt", 
        "source": "40"
    }, 
    {
        "target_alt": "v_Swi5_pp_Clb5", 
        "target": "118", 
        "source_alt": "Swi5_nuc", 
        "source": "17"
    }, 
    {
        "target_alt": "Swi5_p_cyt", 
        "target": "47", 
        "source_alt": "v_Swi5_pp_Clb5", 
        "source": "118"
    }, 
    {
        "target_alt": "v_Swi5_pp_Clb5", 
        "symbol": "circle", 
        "target": "118", 
        "source_alt": "Clb5_cyt", 
        "source": "29"
    }, 
    {
        "target_alt": "v_Swi5_pp_Clb2", 
        "target": "119", 
        "source_alt": "Swi5_nuc", 
        "source": "17"
    }, 
    {
        "target_alt": "Swi5_p_cyt", 
        "target": "47", 
        "source_alt": "v_Swi5_pp_Clb2", 
        "source": "119"
    }, 
    {
        "target_alt": "v_Swi5_pp_Clb2", 
        "symbol": "circle", 
        "target": "119", 
        "source_alt": "Clb2_cyt", 
        "source": "38"
    }, 
    {
        "target_alt": "v_Swe1_p_d", 
        "target": "120", 
        "source_alt": "Swe1_p_cyt", 
        "source": "28"
    }, 
    {
        "target_alt": "v_Clb2_pp", 
        "target": "121", 
        "source_alt": "Clb2_cyt", 
        "source": "38"
    }, 
    {
        "target_alt": "Clb2_p_cyt", 
        "target": "36", 
        "source_alt": "v_Clb2_pp", 
        "source": "121"
    }, 
    {
        "target_alt": "v_Clb2_pp", 
        "symbol": "circle", 
        "target": "121", 
        "source_alt": "Swe1_cyt", 
        "source": "16"
    }, 
    {
        "target_alt": "Clb3_cyt", 
        "target": "45", 
        "source_alt": "v_Clb3_p_Clb5", 
        "source": "122"
    }, 
    {
        "target_alt": "v_Clb3_p_Clb5", 
        "symbol": "circle", 
        "target": "122", 
        "source_alt": "Clb5_cyt", 
        "source": "29"
    }, 
    {
        "target_alt": "v_APC_inakt_Clb2", 
        "target": "123", 
        "source_alt": "APC_cyt", 
        "source": "20"
    }, 
    {
        "target_alt": "APC_p_cyt", 
        "target": "43", 
        "source_alt": "v_APC_inakt_Clb2", 
        "source": "123"
    }, 
    {
        "target_alt": "v_APC_inakt_Clb2", 
        "symbol": "circle", 
        "target": "123", 
        "source_alt": "Clb2_cyt", 
        "source": "38"
    }, 
    {
        "target_alt": "v_APC_inakt_Clb5", 
        "target": "124", 
        "source_alt": "APC_cyt", 
        "source": "20"
    }, 
    {
        "target_alt": "APC_p_cyt", 
        "target": "43", 
        "source_alt": "v_APC_inakt_Clb5", 
        "source": "124"
    }, 
    {
        "target_alt": "v_APC_inakt_Clb5", 
        "symbol": "circle", 
        "target": "124", 
        "source_alt": "Clb5_cyt", 
        "source": "29"
    }, 
    {
        "target_alt": "Clb2_cyt", 
        "target": "38", 
        "source_alt": "v_Clb2_p", 
        "source": "125"
    }, 
    {
        "target_alt": "v_Clb2_p", 
        "symbol": "circle", 
        "target": "125", 
        "source_alt": "Hog1_PP_cyt", 
        "source": "25"
    }, 
    {
        "target_alt": "v_Clb2_p", 
        "symbol": "circle", 
        "target": "125", 
        "source_alt": "Mcm1_nuc", 
        "source": "44"
    }, 
    {
        "target_alt": "v_MBF_d", 
        "target": "126", 
        "source_alt": "MBF_nuc", 
        "source": "50"
    }, 
    {
        "target_alt": "v_Whi5_d", 
        "target": "127", 
        "source_alt": "Whi5_cyt", 
        "source": "30"
    }, 
    {
        "target_alt": "v_Clb5_Sic1_pp_Hog1", 
        "target": "128", 
        "source_alt": "Clb5_Sic1_cyt", 
        "source": "22"
    }, 
    {
        "target_alt": "Clb5_Sic1_Hp_cyt", 
        "target": "33", 
        "source_alt": "v_Clb5_Sic1_pp_Hog1", 
        "source": "128"
    }, 
    {
        "target_alt": "v_Clb5_Sic1_pp_Hog1", 
        "symbol": "circle", 
        "target": "128", 
        "source_alt": "Hog1_PP_cyt", 
        "source": "25"
    }, 
    {
        "target_alt": "v_Clb2_d", 
        "target": "129", 
        "source_alt": "Clb2_cyt", 
        "source": "38"
    }, 
    {
        "target_alt": "v_Whi5p_dp", 
        "target": "130", 
        "source_alt": "Whi5_p_cyt", 
        "source": "23"
    }, 
    {
        "target_alt": "Whi5_cyt", 
        "target": "30", 
        "source_alt": "v_Whi5p_dp", 
        "source": "130"
    }, 
    {
        "target_alt": "v_Whi5p_dp", 
        "symbol": "circle", 
        "target": "130", 
        "source_alt": "Cdc14_p_cyt", 
        "source": "21"
    }, 
    {
        "target_alt": "Whi5_cyt", 
        "target": "30", 
        "source_alt": "v_Whi5_p", 
        "source": "131"
    }, 
    {
        "target_alt": "v_Clb3_ass_Sic1", 
        "target": "132", 
        "source_alt": "Clb3_cyt", 
        "source": "45"
    }, 
    {
        "target_alt": "v_Clb3_ass_Sic1", 
        "target": "132", 
        "source_alt": "Sic1_cyt", 
        "source": "39"
    }, 
    {
        "target_alt": "Clb3_Sic1_cyt", 
        "target": "26", 
        "source_alt": "v_Clb3_ass_Sic1", 
        "source": "132"
    }, 
    {
        "target_alt": "v_Mih1_d", 
        "target": "133", 
        "source_alt": "Mih1_cyt", 
        "source": "34"
    }, 
    {
        "target_alt": "v_Clb5_diss_Sic1", 
        "target": "134", 
        "source_alt": "Clb5_Sic1_cyt", 
        "source": "22"
    }, 
    {
        "target_alt": "Sic1_cyt", 
        "target": "39", 
        "source_alt": "v_Clb5_diss_Sic1", 
        "source": "134"
    }, 
    {
        "target_alt": "Clb5_cyt", 
        "target": "29", 
        "source_alt": "v_Clb5_diss_Sic1", 
        "source": "134"
    }, 
    {
        "target_alt": "v_Cdc14_akt_APC", 
        "target": "135", 
        "source_alt": "Cdc14_cyt", 
        "source": "24"
    }, 
    {
        "target_alt": "Cdc14_p_cyt", 
        "target": "21", 
        "source_alt": "v_Cdc14_akt_APC", 
        "source": "135"
    }, 
    {
        "target_alt": "v_Cdc14_akt_APC", 
        "symbol": "circle", 
        "target": "135", 
        "source_alt": "APC_cyt", 
        "source": "20"
    }, 
    {
        "target_alt": "APC_cyt", 
        "target": "20", 
        "source_alt": "v_APC_akt_p_Mcm1", 
        "source": "136"
    }, 
    {
        "target_alt": "v_APC_akt_p_Mcm1", 
        "symbol": "circle", 
        "target": "136", 
        "source_alt": "Mcm1_nuc", 
        "source": "44"
    }, 
    {
        "target_alt": "Mih1_cyt", 
        "target": "34", 
        "source_alt": "v_Mih1_p", 
        "source": "137"
    }, 
    {
        "target_alt": "v_Cln3_d", 
        "target": "138", 
        "source_alt": "Cln3_cyt", 
        "source": "32"
    }, 
    {
        "target_alt": "v_Whi5_SBF_d", 
        "target": "139", 
        "source_alt": "SBF_Whi5_nuc", 
        "source": "42"
    }, 
    {
        "target_alt": "Cln3_cyt", 
        "target": "32", 
        "source_alt": "v_Cln3_p", 
        "source": "140"
    }, 
    {
        "target_alt": "v_DIS_Ribosome", 
        "target": "145", 
        "source_alt": "Ribosome", 
        "source": "144"
    }, 
    {
        "target_alt": "B_Protein_R", 
        "target": "143", 
        "source_alt": "v_DIS_Ribosome", 
        "source": "145"
    }, 
    {
        "target_alt": "rRNA", 
        "target": "141", 
        "source_alt": "v_DIS_Ribosome", 
        "source": "145"
    }, 
    {
        "target_alt": "v_ASS_Ribosome", 
        "target": "146", 
        "source_alt": "B_Protein_R", 
        "source": "143"
    }, 
    {
        "target_alt": "v_ASS_Ribosome", 
        "target": "146", 
        "source_alt": "rRNA", 
        "source": "141"
    }, 
    {
        "target_alt": "Ribosome", 
        "target": "144", 
        "source_alt": "v_ASS_Ribosome", 
        "source": "146"
    }, 
    {
        "target_alt": "v_mCln3_TRSC", 
        "target": "168", 
        "source_alt": "NA", 
        "source": "152"
    }, 
    {
        "target_alt": "v_mCln3_TRSC", 
        "target": "168", 
        "source_alt": "ATP", 
        "source": "161"
    }, 
    {
        "target_alt": "Pi", 
        "target": "162", 
        "source_alt": "v_mCln3_TRSC", 
        "source": "168"
    }, 
    {
        "target_alt": "mCln3", 
        "target": "149", 
        "source_alt": "v_mCln3_TRSC", 
        "source": "168"
    }, 
    {
        "target_alt": "ADP", 
        "target": "157", 
        "source_alt": "v_mCln3_TRSC", 
        "source": "168"
    }, 
    {
        "target_alt": "v_mWhi5_TRSC", 
        "target": "169", 
        "source_alt": "NA", 
        "source": "152"
    }, 
    {
        "target_alt": "v_mWhi5_TRSC", 
        "target": "169", 
        "source_alt": "ATP", 
        "source": "161"
    }, 
    {
        "target_alt": "mWhi5", 
        "target": "147", 
        "source_alt": "v_mWhi5_TRSC", 
        "source": "169"
    }, 
    {
        "target_alt": "Pi", 
        "target": "162", 
        "source_alt": "v_mWhi5_TRSC", 
        "source": "169"
    }, 
    {
        "target_alt": "ADP", 
        "target": "157", 
        "source_alt": "v_mWhi5_TRSC", 
        "source": "169"
    }, 
    {
        "target_alt": "v_mCdc14_TRSL", 
        "target": "170", 
        "source_alt": "AA", 
        "source": "163"
    }, 
    {
        "target_alt": "v_mCdc14_TRSL", 
        "target": "170", 
        "source_alt": "ATP", 
        "source": "161"
    }, 
    {
        "target_alt": "Pi", 
        "target": "162", 
        "source_alt": "v_mCdc14_TRSL", 
        "source": "170"
    }, 
    {
        "target_alt": "ADP", 
        "target": "157", 
        "source_alt": "v_mCdc14_TRSL", 
        "source": "170"
    }, 
    {
        "target_alt": "Cdc14", 
        "target": "24", 
        "source_alt": "v_mCdc14_TRSL", 
        "source": "170"
    }, 
    {
        "target_alt": "v_mCdc14_TRSL", 
        "symbol": "circle", 
        "target": "170", 
        "source_alt": "mCdc14", 
        "source": "166"
    }, 
    {
        "target_alt": "v_mCdc14_TRSL", 
        "symbol": "circle", 
        "target": "170", 
        "source_alt": "ribosome", 
        "source": "144"
    }, 
    {
        "target_alt": "v_mCdc14_TRSC", 
        "target": "171", 
        "source_alt": "NA", 
        "source": "152"
    }, 
    {
        "target_alt": "v_mCdc14_TRSC", 
        "target": "171", 
        "source_alt": "ATP", 
        "source": "161"
    }, 
    {
        "target_alt": "mCdc14", 
        "target": "166", 
        "source_alt": "v_mCdc14_TRSC", 
        "source": "171"
    }, 
    {
        "target_alt": "Pi", 
        "target": "162", 
        "source_alt": "v_mCdc14_TRSC", 
        "source": "171"
    }, 
    {
        "target_alt": "ADP", 
        "target": "157", 
        "source_alt": "v_mCdc14_TRSC", 
        "source": "171"
    }, 
    {
        "target_alt": "v_mWhi5_TRSL", 
        "target": "172", 
        "source_alt": "AA", 
        "source": "163"
    }, 
    {
        "target_alt": "v_mWhi5_TRSL", 
        "target": "172", 
        "source_alt": "ATP", 
        "source": "161"
    }, 
    {
        "target_alt": "Whi5", 
        "target": "30", 
        "source_alt": "v_mWhi5_TRSL", 
        "source": "172"
    }, 
    {
        "target_alt": "Pi", 
        "target": "162", 
        "source_alt": "v_mWhi5_TRSL", 
        "source": "172"
    }, 
    {
        "target_alt": "ADP", 
        "target": "157", 
        "source_alt": "v_mWhi5_TRSL", 
        "source": "172"
    }, 
    {
        "target_alt": "v_mWhi5_TRSL", 
        "symbol": "circle", 
        "target": "172", 
        "source_alt": "ribosome", 
        "source": "144"
    }, 
    {
        "target_alt": "v_mWhi5_TRSL", 
        "symbol": "circle", 
        "target": "172", 
        "source_alt": "mWhi5", 
        "source": "147"
    }, 
    {
        "target_alt": "v_Clb3_deg_APC", 
        "target": "173", 
        "source_alt": "Clb3", 
        "source": "45"
    }, 
    {
        "target_alt": "AA", 
        "target": "163", 
        "source_alt": "v_Clb3_deg_APC", 
        "source": "173"
    }, 
    {
        "target_alt": "v_Clb3_deg_APC", 
        "symbol": "circle", 
        "target": "173", 
        "source_alt": "APC", 
        "source": "20"
    }, 
    {
        "target_alt": "v_mCln3_TRSL", 
        "target": "174", 
        "source_alt": "AA", 
        "source": "163"
    }, 
    {
        "target_alt": "v_mCln3_TRSL", 
        "target": "174", 
        "source_alt": "ATP", 
        "source": "161"
    }, 
    {
        "target_alt": "Pi", 
        "target": "162", 
        "source_alt": "v_mCln3_TRSL", 
        "source": "174"
    }, 
    {
        "target_alt": "Cln3", 
        "target": "32", 
        "source_alt": "v_mCln3_TRSL", 
        "source": "174"
    }, 
    {
        "target_alt": "ADP", 
        "target": "157", 
        "source_alt": "v_mCln3_TRSL", 
        "source": "174"
    }, 
    {
        "target_alt": "v_mCln3_TRSL", 
        "symbol": "circle", 
        "target": "174", 
        "source_alt": "ribosome", 
        "source": "144"
    }, 
    {
        "target_alt": "v_mCln3_TRSL", 
        "symbol": "circle", 
        "target": "174", 
        "source_alt": "mCln3", 
        "source": "149"
    }, 
    {
        "target_alt": "v_Cln2_deg", 
        "target": "175", 
        "source_alt": "Cln2", 
        "source": "46"
    }, 
    {
        "target_alt": "AA", 
        "target": "163", 
        "source_alt": "v_Cln2_deg", 
        "source": "175"
    }, 
    {
        "target_alt": "v_mSic1_TRSC", 
        "target": "176", 
        "source_alt": "NA", 
        "source": "152"
    }, 
    {
        "target_alt": "v_mSic1_TRSC", 
        "target": "176", 
        "source_alt": "ATP", 
        "source": "161"
    }, 
    {
        "target_alt": "mSic1", 
        "target": "167", 
        "source_alt": "v_mSic1_TRSC", 
        "source": "176"
    }, 
    {
        "target_alt": "Pi", 
        "target": "162", 
        "source_alt": "v_mSic1_TRSC", 
        "source": "176"
    }, 
    {
        "target_alt": "ADP", 
        "target": "157", 
        "source_alt": "v_mSic1_TRSC", 
        "source": "176"
    }, 
    {
        "target_alt": "v_mSic1_TRSC", 
        "symbol": "circle", 
        "target": "176", 
        "source_alt": "Swi5", 
        "source": "17"
    }, 
    {
        "target_alt": "v_mSic1_TRSL", 
        "target": "177", 
        "source_alt": "AA", 
        "source": "163"
    }, 
    {
        "target_alt": "v_mSic1_TRSL", 
        "target": "177", 
        "source_alt": "ATP", 
        "source": "161"
    }, 
    {
        "target_alt": "Pi", 
        "target": "162", 
        "source_alt": "v_mSic1_TRSL", 
        "source": "177"
    }, 
    {
        "target_alt": "Sic1", 
        "target": "39", 
        "source_alt": "v_mSic1_TRSL", 
        "source": "177"
    }, 
    {
        "target_alt": "ADP", 
        "target": "157", 
        "source_alt": "v_mSic1_TRSL", 
        "source": "177"
    }, 
    {
        "target_alt": "v_mSic1_TRSL", 
        "symbol": "circle", 
        "target": "177", 
        "source_alt": "mSic1", 
        "source": "167"
    }, 
    {
        "target_alt": "v_mSic1_TRSL", 
        "symbol": "circle", 
        "target": "177", 
        "source_alt": "ribosome", 
        "source": "144"
    }, 
    {
        "target_alt": "v_mAPC_TRSL", 
        "target": "178", 
        "source_alt": "AA", 
        "source": "163"
    }, 
    {
        "target_alt": "v_mAPC_TRSL", 
        "target": "178", 
        "source_alt": "ATP", 
        "source": "161"
    }, 
    {
        "target_alt": "APC", 
        "target": "20", 
        "source_alt": "v_mAPC_TRSL", 
        "source": "178"
    }, 
    {
        "target_alt": "Pi", 
        "target": "162", 
        "source_alt": "v_mAPC_TRSL", 
        "source": "178"
    }, 
    {
        "target_alt": "ADP", 
        "target": "157", 
        "source_alt": "v_mAPC_TRSL", 
        "source": "178"
    }, 
    {
        "target_alt": "v_mAPC_TRSL", 
        "symbol": "circle", 
        "target": "178", 
        "source_alt": "mAPC", 
        "source": "164"
    }, 
    {
        "target_alt": "v_mAPC_TRSL", 
        "symbol": "circle", 
        "target": "178", 
        "source_alt": "ribosome", 
        "source": "144"
    }, 
    {
        "target_alt": "v_APC_deg", 
        "target": "179", 
        "source_alt": "APC", 
        "source": "20"
    }, 
    {
        "target_alt": "AA", 
        "target": "163", 
        "source_alt": "v_APC_deg", 
        "source": "179"
    }, 
    {
        "target_alt": "v_MBF_deg", 
        "target": "180", 
        "source_alt": "MBF", 
        "source": "50"
    }, 
    {
        "target_alt": "AA", 
        "target": "163", 
        "source_alt": "v_MBF_deg", 
        "source": "180"
    }, 
    {
        "target_alt": "v_Cdc14_deg", 
        "target": "181", 
        "source_alt": "Cdc14", 
        "source": "24"
    }, 
    {
        "target_alt": "AA", 
        "target": "163", 
        "source_alt": "v_Cdc14_deg", 
        "source": "181"
    }, 
    {
        "target_alt": "v_mMih1_deg", 
        "target": "182", 
        "source_alt": "mMih1", 
        "source": "159"
    }, 
    {
        "target_alt": "NA", 
        "target": "152", 
        "source_alt": "v_mMih1_deg", 
        "source": "182"
    }, 
    {
        "target_alt": "v_mAPC_TRSC", 
        "target": "183", 
        "source_alt": "NA", 
        "source": "152"
    }, 
    {
        "target_alt": "v_mAPC_TRSC", 
        "target": "183", 
        "source_alt": "ATP", 
        "source": "161"
    }, 
    {
        "target_alt": "mAPC", 
        "target": "164", 
        "source_alt": "v_mAPC_TRSC", 
        "source": "183"
    }, 
    {
        "target_alt": "Pi", 
        "target": "162", 
        "source_alt": "v_mAPC_TRSC", 
        "source": "183"
    }, 
    {
        "target_alt": "ADP", 
        "target": "157", 
        "source_alt": "v_mAPC_TRSC", 
        "source": "183"
    }, 
    {
        "target_alt": "v_mAPC_TRSC", 
        "symbol": "circle", 
        "target": "183", 
        "source_alt": "Mcm1", 
        "source": "44"
    }, 
    {
        "target_alt": "v_mClb3_deg", 
        "target": "184", 
        "source_alt": "mClb3", 
        "source": "153"
    }, 
    {
        "target_alt": "NA", 
        "target": "152", 
        "source_alt": "v_mClb3_deg", 
        "source": "184"
    }, 
    {
        "target_alt": "v_Swi5_deg", 
        "target": "185", 
        "source_alt": "Swi5", 
        "source": "17"
    }, 
    {
        "target_alt": "AA", 
        "target": "163", 
        "source_alt": "v_Swi5_deg", 
        "source": "185"
    }, 
    {
        "target_alt": "v_SBF_deg", 
        "target": "186", 
        "source_alt": "SBF", 
        "source": "48"
    }, 
    {
        "target_alt": "AA", 
        "target": "163", 
        "source_alt": "v_SBF_deg", 
        "source": "186"
    }, 
    {
        "target_alt": "v_mSwe1_TRSC", 
        "target": "187", 
        "source_alt": "NA", 
        "source": "152"
    }, 
    {
        "target_alt": "v_mSwe1_TRSC", 
        "target": "187", 
        "source_alt": "ATP", 
        "source": "161"
    }, 
    {
        "target_alt": "mSwe1", 
        "target": "156", 
        "source_alt": "v_mSwe1_TRSC", 
        "source": "187"
    }, 
    {
        "target_alt": "Pi", 
        "target": "162", 
        "source_alt": "v_mSwe1_TRSC", 
        "source": "187"
    }, 
    {
        "target_alt": "ADP", 
        "target": "157", 
        "source_alt": "v_mSwe1_TRSC", 
        "source": "187"
    }, 
    {
        "target_alt": "v_mMcm1_TRSC", 
        "target": "188", 
        "source_alt": "NA", 
        "source": "152"
    }, 
    {
        "target_alt": "v_mMcm1_TRSC", 
        "target": "188", 
        "source_alt": "ATP", 
        "source": "161"
    }, 
    {
        "target_alt": "mMcm1", 
        "target": "160", 
        "source_alt": "v_mMcm1_TRSC", 
        "source": "188"
    }, 
    {
        "target_alt": "Pi", 
        "target": "162", 
        "source_alt": "v_mMcm1_TRSC", 
        "source": "188"
    }, 
    {
        "target_alt": "ADP", 
        "target": "157", 
        "source_alt": "v_mMcm1_TRSC", 
        "source": "188"
    }, 
    {
        "target_alt": "v_mMcm1_TRSC", 
        "symbol": "circle", 
        "target": "188", 
        "source_alt": "Clb3", 
        "source": "45"
    }, 
    {
        "target_alt": "v_mMcm1_TRSC", 
        "symbol": "circle", 
        "target": "188", 
        "source_alt": "Clb2", 
        "source": "38"
    }, 
    {
        "target_alt": "v_Mih1_deg", 
        "target": "189", 
        "source_alt": "Mih1", 
        "source": "34"
    }, 
    {
        "target_alt": "AA", 
        "target": "163", 
        "source_alt": "v_Mih1_deg", 
        "source": "189"
    }, 
    {
        "target_alt": "v_mCdc14_deg", 
        "target": "190", 
        "source_alt": "mCdc14", 
        "source": "166"
    }, 
    {
        "target_alt": "NA", 
        "target": "152", 
        "source_alt": "v_mCdc14_deg", 
        "source": "190"
    }, 
    {
        "target_alt": "v_mCln2_TRSC", 
        "target": "191", 
        "source_alt": "NA", 
        "source": "152"
    }, 
    {
        "target_alt": "v_mCln2_TRSC", 
        "target": "191", 
        "source_alt": "ATP", 
        "source": "161"
    }, 
    {
        "target_alt": "Pi", 
        "target": "162", 
        "source_alt": "v_mCln2_TRSC", 
        "source": "191"
    }, 
    {
        "target_alt": "mCln2", 
        "target": "150", 
        "source_alt": "v_mCln2_TRSC", 
        "source": "191"
    }, 
    {
        "target_alt": "ADP", 
        "target": "157", 
        "source_alt": "v_mCln2_TRSC", 
        "source": "191"
    }, 
    {
        "target_alt": "v_mCln2_TRSC", 
        "symbol": "circle", 
        "target": "191", 
        "source_alt": "SBF", 
        "source": "48"
    }, 
    {
        "target_alt": "v_mSwe1_TRSL", 
        "target": "192", 
        "source_alt": "AA", 
        "source": "163"
    }, 
    {
        "target_alt": "v_mSwe1_TRSL", 
        "target": "192", 
        "source_alt": "ATP", 
        "source": "161"
    }, 
    {
        "target_alt": "Swe1", 
        "target": "16", 
        "source_alt": "v_mSwe1_TRSL", 
        "source": "192"
    }, 
    {
        "target_alt": "Pi", 
        "target": "162", 
        "source_alt": "v_mSwe1_TRSL", 
        "source": "192"
    }, 
    {
        "target_alt": "ADP", 
        "target": "157", 
        "source_alt": "v_mSwe1_TRSL", 
        "source": "192"
    }, 
    {
        "target_alt": "v_mSwe1_TRSL", 
        "symbol": "circle", 
        "target": "192", 
        "source_alt": "mSwe1", 
        "source": "156"
    }, 
    {
        "target_alt": "v_mSwe1_TRSL", 
        "symbol": "circle", 
        "target": "192", 
        "source_alt": "ribosome", 
        "source": "144"
    }, 
    {
        "target_alt": "v_mSBF_TRSC", 
        "target": "193", 
        "source_alt": "NA", 
        "source": "152"
    }, 
    {
        "target_alt": "v_mSBF_TRSC", 
        "target": "193", 
        "source_alt": "ATP", 
        "source": "161"
    }, 
    {
        "target_alt": "mSBF", 
        "target": "165", 
        "source_alt": "v_mSBF_TRSC", 
        "source": "193"
    }, 
    {
        "target_alt": "Pi", 
        "target": "162", 
        "source_alt": "v_mSBF_TRSC", 
        "source": "193"
    }, 
    {
        "target_alt": "ADP", 
        "target": "157", 
        "source_alt": "v_mSBF_TRSC", 
        "source": "193"
    }, 
    {
        "target_alt": "v_mClb5_deg", 
        "target": "194", 
        "source_alt": "mClb5", 
        "source": "155"
    }, 
    {
        "target_alt": "NA", 
        "target": "152", 
        "source_alt": "v_mClb5_deg", 
        "source": "194"
    }, 
    {
        "target_alt": "v_mClb5_TRSC", 
        "target": "195", 
        "source_alt": "NA", 
        "source": "152"
    }, 
    {
        "target_alt": "v_mClb5_TRSC", 
        "target": "195", 
        "source_alt": "ATP", 
        "source": "161"
    }, 
    {
        "target_alt": "Pi", 
        "target": "162", 
        "source_alt": "v_mClb5_TRSC", 
        "source": "195"
    }, 
    {
        "target_alt": "ADP", 
        "target": "157", 
        "source_alt": "v_mClb5_TRSC", 
        "source": "195"
    }, 
    {
        "target_alt": "mClb5", 
        "target": "155", 
        "source_alt": "v_mClb5_TRSC", 
        "source": "195"
    }, 
    {
        "target_alt": "v_mClb5_TRSC", 
        "symbol": "circle", 
        "target": "195", 
        "source_alt": "MBF", 
        "source": "50"
    }, 
    {
        "target_alt": "v_mMBF_deg", 
        "target": "196", 
        "source_alt": "mMBF", 
        "source": "148"
    }, 
    {
        "target_alt": "NA", 
        "target": "152", 
        "source_alt": "v_mMBF_deg", 
        "source": "196"
    }, 
    {
        "target_alt": "v_Whi5_deg", 
        "target": "197", 
        "source_alt": "Whi5", 
        "source": "30"
    }, 
    {
        "target_alt": "AA", 
        "target": "163", 
        "source_alt": "v_Whi5_deg", 
        "source": "197"
    }, 
    {
        "target_alt": "v_Cln3_deg", 
        "target": "198", 
        "source_alt": "Cln3", 
        "source": "32"
    }, 
    {
        "target_alt": "AA", 
        "target": "163", 
        "source_alt": "v_Cln3_deg", 
        "source": "198"
    }, 
    {
        "target_alt": "v_Cdc14_p_deg", 
        "target": "199", 
        "source_alt": "Cdc14_p", 
        "source": "21"
    }, 
    {
        "target_alt": "AA", 
        "target": "163", 
        "source_alt": "v_Cdc14_p_deg", 
        "source": "199"
    }, 
    {
        "target_alt": "Pi", 
        "target": "162", 
        "source_alt": "v_Cdc14_p_deg", 
        "source": "199"
    }, 
    {
        "target_alt": "v_mClb3_TRSC", 
        "target": "200", 
        "source_alt": "NA", 
        "source": "152"
    }, 
    {
        "target_alt": "v_mClb3_TRSC", 
        "target": "200", 
        "source_alt": "ATP", 
        "source": "161"
    }, 
    {
        "target_alt": "mClb3", 
        "target": "153", 
        "source_alt": "v_mClb3_TRSC", 
        "source": "200"
    }, 
    {
        "target_alt": "Pi", 
        "target": "162", 
        "source_alt": "v_mClb3_TRSC", 
        "source": "200"
    }, 
    {
        "target_alt": "ADP", 
        "target": "157", 
        "source_alt": "v_mClb3_TRSC", 
        "source": "200"
    }, 
    {
        "target_alt": "v_mClb3_TRSC", 
        "symbol": "circle", 
        "target": "200", 
        "source_alt": "Clb5", 
        "source": "29"
    }, 
    {
        "target_alt": "v_mCln3_deg", 
        "target": "201", 
        "source_alt": "mCln3", 
        "source": "149"
    }, 
    {
        "target_alt": "NA", 
        "target": "152", 
        "source_alt": "v_mCln3_deg", 
        "source": "201"
    }, 
    {
        "target_alt": "v_mSBF_TRSL", 
        "target": "202", 
        "source_alt": "AA", 
        "source": "163"
    }, 
    {
        "target_alt": "v_mSBF_TRSL", 
        "target": "202", 
        "source_alt": "ATP", 
        "source": "161"
    }, 
    {
        "target_alt": "Pi", 
        "target": "162", 
        "source_alt": "v_mSBF_TRSL", 
        "source": "202"
    }, 
    {
        "target_alt": "SBF", 
        "target": "48", 
        "source_alt": "v_mSBF_TRSL", 
        "source": "202"
    }, 
    {
        "target_alt": "ADP", 
        "target": "157", 
        "source_alt": "v_mSBF_TRSL", 
        "source": "202"
    }, 
    {
        "target_alt": "v_mSBF_TRSL", 
        "symbol": "circle", 
        "target": "202", 
        "source_alt": "mSBF", 
        "source": "165"
    }, 
    {
        "target_alt": "v_mSBF_TRSL", 
        "symbol": "circle", 
        "target": "202", 
        "source_alt": "ribosome", 
        "source": "144"
    }, 
    {
        "target_alt": "v_mMBF_TRSL", 
        "target": "203", 
        "source_alt": "AA", 
        "source": "163"
    }, 
    {
        "target_alt": "v_mMBF_TRSL", 
        "target": "203", 
        "source_alt": "ATP", 
        "source": "161"
    }, 
    {
        "target_alt": "MBF", 
        "target": "50", 
        "source_alt": "v_mMBF_TRSL", 
        "source": "203"
    }, 
    {
        "target_alt": "Pi", 
        "target": "162", 
        "source_alt": "v_mMBF_TRSL", 
        "source": "203"
    }, 
    {
        "target_alt": "ADP", 
        "target": "157", 
        "source_alt": "v_mMBF_TRSL", 
        "source": "203"
    }, 
    {
        "target_alt": "v_mMBF_TRSL", 
        "symbol": "circle", 
        "target": "203", 
        "source_alt": "ribosome", 
        "source": "144"
    }, 
    {
        "target_alt": "v_mMBF_TRSL", 
        "symbol": "circle", 
        "target": "203", 
        "source_alt": "mMBF", 
        "source": "148"
    }, 
    {
        "target_alt": "v_mAPC_deg", 
        "target": "204", 
        "source_alt": "mAPC", 
        "source": "164"
    }, 
    {
        "target_alt": "NA", 
        "target": "152", 
        "source_alt": "v_mAPC_deg", 
        "source": "204"
    }, 
    {
        "target_alt": "v_Clb3_deg", 
        "target": "205", 
        "source_alt": "Clb3", 
        "source": "45"
    }, 
    {
        "target_alt": "AA", 
        "target": "163", 
        "source_alt": "v_Clb3_deg", 
        "source": "205"
    }, 
    {
        "target_alt": "v_mClb2_TRSL", 
        "target": "206", 
        "source_alt": "AA", 
        "source": "163"
    }, 
    {
        "target_alt": "v_mClb2_TRSL", 
        "target": "206", 
        "source_alt": "ATP", 
        "source": "161"
    }, 
    {
        "target_alt": "Clb2", 
        "target": "38", 
        "source_alt": "v_mClb2_TRSL", 
        "source": "206"
    }, 
    {
        "target_alt": "Pi", 
        "target": "162", 
        "source_alt": "v_mClb2_TRSL", 
        "source": "206"
    }, 
    {
        "target_alt": "ADP", 
        "target": "157", 
        "source_alt": "v_mClb2_TRSL", 
        "source": "206"
    }, 
    {
        "target_alt": "v_mClb2_TRSL", 
        "symbol": "circle", 
        "target": "206", 
        "source_alt": "mClb2", 
        "source": "154"
    }, 
    {
        "target_alt": "v_mClb2_TRSL", 
        "symbol": "circle", 
        "target": "206", 
        "source_alt": "ribosome", 
        "source": "144"
    }, 
    {
        "target_alt": "v_Clb5_deg", 
        "target": "207", 
        "source_alt": "Clb5", 
        "source": "29"
    }, 
    {
        "target_alt": "AA", 
        "target": "163", 
        "source_alt": "v_Clb5_deg", 
        "source": "207"
    }, 
    {
        "target_alt": "v_mSBF_deg", 
        "target": "208", 
        "source_alt": "mSBF", 
        "source": "165"
    }, 
    {
        "target_alt": "NA", 
        "target": "152", 
        "source_alt": "v_mSBF_deg", 
        "source": "208"
    }, 
    {
        "target_alt": "v_mWhi5_deg", 
        "target": "209", 
        "source_alt": "mWhi5", 
        "source": "147"
    }, 
    {
        "target_alt": "NA", 
        "target": "152", 
        "source_alt": "v_mWhi5_deg", 
        "source": "209"
    }, 
    {
        "target_alt": "v_mMBF_TRSC", 
        "target": "210", 
        "source_alt": "NA", 
        "source": "152"
    }, 
    {
        "target_alt": "v_mMBF_TRSC", 
        "target": "210", 
        "source_alt": "ATP", 
        "source": "161"
    }, 
    {
        "target_alt": "Pi", 
        "target": "162", 
        "source_alt": "v_mMBF_TRSC", 
        "source": "210"
    }, 
    {
        "target_alt": "ADP", 
        "target": "157", 
        "source_alt": "v_mMBF_TRSC", 
        "source": "210"
    }, 
    {
        "target_alt": "mMBF", 
        "target": "148", 
        "source_alt": "v_mMBF_TRSC", 
        "source": "210"
    }, 
    {
        "target_alt": "v_mMBF_TRSC", 
        "symbol": "circle", 
        "target": "210", 
        "source_alt": "Cln2", 
        "source": "46"
    }, 
    {
        "target_alt": "v_Swe1_deg", 
        "target": "211", 
        "source_alt": "Swe1", 
        "source": "16"
    }, 
    {
        "target_alt": "AA", 
        "target": "163", 
        "source_alt": "v_Swe1_deg", 
        "source": "211"
    }, 
    {
        "target_alt": "v_Clb2_deg_APC", 
        "target": "212", 
        "source_alt": "Clb2", 
        "source": "38"
    }, 
    {
        "target_alt": "AA", 
        "target": "163", 
        "source_alt": "v_Clb2_deg_APC", 
        "source": "212"
    }, 
    {
        "target_alt": "v_Clb2_deg_APC", 
        "symbol": "circle", 
        "target": "212", 
        "source_alt": "APC", 
        "source": "20"
    }, 
    {
        "target_alt": "v_mFar1_TRSL", 
        "target": "213", 
        "source_alt": "AA", 
        "source": "163"
    }, 
    {
        "target_alt": "v_mFar1_TRSL", 
        "target": "213", 
        "source_alt": "ATP", 
        "source": "161"
    }, 
    {
        "target_alt": "Pi", 
        "target": "162", 
        "source_alt": "v_mFar1_TRSL", 
        "source": "213"
    }, 
    {
        "target_alt": "Far1", 
        "target": "19", 
        "source_alt": "v_mFar1_TRSL", 
        "source": "213"
    }, 
    {
        "target_alt": "ADP", 
        "target": "157", 
        "source_alt": "v_mFar1_TRSL", 
        "source": "213"
    }, 
    {
        "target_alt": "v_mFar1_TRSL", 
        "symbol": "circle", 
        "target": "213", 
        "source_alt": "mFar1", 
        "source": "158"
    }, 
    {
        "target_alt": "v_mFar1_TRSL", 
        "symbol": "circle", 
        "target": "213", 
        "source_alt": "ribosome", 
        "source": "144"
    }, 
    {
        "target_alt": "v_mSic1_deg", 
        "target": "214", 
        "source_alt": "mSic1", 
        "source": "167"
    }, 
    {
        "target_alt": "NA", 
        "target": "152", 
        "source_alt": "v_mSic1_deg", 
        "source": "214"
    }, 
    {
        "target_alt": "v_mMcm1_deg", 
        "target": "215", 
        "source_alt": "mMcm1", 
        "source": "160"
    }, 
    {
        "target_alt": "NA", 
        "target": "152", 
        "source_alt": "v_mMcm1_deg", 
        "source": "215"
    }, 
    {
        "target_alt": "v_Clb2_deg", 
        "target": "216", 
        "source_alt": "Clb2", 
        "source": "38"
    }, 
    {
        "target_alt": "AA", 
        "target": "163", 
        "source_alt": "v_Clb2_deg", 
        "source": "216"
    }, 
    {
        "target_alt": "v_mFar1_TRSC", 
        "target": "217", 
        "source_alt": "NA", 
        "source": "152"
    }, 
    {
        "target_alt": "v_mFar1_TRSC", 
        "target": "217", 
        "source_alt": "ATP", 
        "source": "161"
    }, 
    {
        "target_alt": "mFar1", 
        "target": "158", 
        "source_alt": "v_mFar1_TRSC", 
        "source": "217"
    }, 
    {
        "target_alt": "Pi", 
        "target": "162", 
        "source_alt": "v_mFar1_TRSC", 
        "source": "217"
    }, 
    {
        "target_alt": "ADP", 
        "target": "157", 
        "source_alt": "v_mFar1_TRSC", 
        "source": "217"
    }, 
    {
        "target_alt": "v_mFar1_TRSC", 
        "symbol": "circle", 
        "target": "217", 
        "source_alt": "Fus3", 
        "source": "40"
    }, 
    {
        "target_alt": "v_Far1_deg", 
        "target": "218", 
        "source_alt": "Far1", 
        "source": "19"
    }, 
    {
        "target_alt": "AA", 
        "target": "163", 
        "source_alt": "v_Far1_deg", 
        "source": "218"
    }, 
    {
        "target_alt": "v_mMcm1_TRSL", 
        "target": "219", 
        "source_alt": "AA", 
        "source": "163"
    }, 
    {
        "target_alt": "v_mMcm1_TRSL", 
        "target": "219", 
        "source_alt": "ATP", 
        "source": "161"
    }, 
    {
        "target_alt": "Pi", 
        "target": "162", 
        "source_alt": "v_mMcm1_TRSL", 
        "source": "219"
    }, 
    {
        "target_alt": "ADP", 
        "target": "157", 
        "source_alt": "v_mMcm1_TRSL", 
        "source": "219"
    }, 
    {
        "target_alt": "Mcm1", 
        "target": "44", 
        "source_alt": "v_mMcm1_TRSL", 
        "source": "219"
    }, 
    {
        "target_alt": "v_mMcm1_TRSL", 
        "symbol": "circle", 
        "target": "219", 
        "source_alt": "mMcm1", 
        "source": "160"
    }, 
    {
        "target_alt": "v_mMcm1_TRSL", 
        "symbol": "circle", 
        "target": "219", 
        "source_alt": "ribosome", 
        "source": "144"
    }, 
    {
        "target_alt": "v_mSwe1_deg", 
        "target": "220", 
        "source_alt": "mSwe1", 
        "source": "156"
    }, 
    {
        "target_alt": "NA", 
        "target": "152", 
        "source_alt": "v_mSwe1_deg", 
        "source": "220"
    }, 
    {
        "target_alt": "v_mClb2_deg", 
        "target": "221", 
        "source_alt": "mClb2", 
        "source": "154"
    }, 
    {
        "target_alt": "NA", 
        "target": "152", 
        "source_alt": "v_mClb2_deg", 
        "source": "221"
    }, 
    {
        "target_alt": "v_mCln2_deg", 
        "target": "222", 
        "source_alt": "mCln2", 
        "source": "150"
    }, 
    {
        "target_alt": "NA", 
        "target": "152", 
        "source_alt": "v_mCln2_deg", 
        "source": "222"
    }, 
    {
        "target_alt": "v_Clb5_deg_APC", 
        "target": "223", 
        "source_alt": "Clb5", 
        "source": "29"
    }, 
    {
        "target_alt": "AA", 
        "target": "163", 
        "source_alt": "v_Clb5_deg_APC", 
        "source": "223"
    }, 
    {
        "target_alt": "v_Clb5_deg_APC", 
        "symbol": "circle", 
        "target": "223", 
        "source_alt": "APC", 
        "source": "20"
    }, 
    {
        "target_alt": "v_mFar1_deg", 
        "target": "224", 
        "source_alt": "mFar1", 
        "source": "158"
    }, 
    {
        "target_alt": "NA", 
        "target": "152", 
        "source_alt": "v_mFar1_deg", 
        "source": "224"
    }, 
    {
        "target_alt": "v_mClb3_TRSL", 
        "target": "225", 
        "source_alt": "AA", 
        "source": "163"
    }, 
    {
        "target_alt": "v_mClb3_TRSL", 
        "target": "225", 
        "source_alt": "ATP", 
        "source": "161"
    }, 
    {
        "target_alt": "Clb3", 
        "target": "45", 
        "source_alt": "v_mClb3_TRSL", 
        "source": "225"
    }, 
    {
        "target_alt": "Pi", 
        "target": "162", 
        "source_alt": "v_mClb3_TRSL", 
        "source": "225"
    }, 
    {
        "target_alt": "ADP", 
        "target": "157", 
        "source_alt": "v_mClb3_TRSL", 
        "source": "225"
    }, 
    {
        "target_alt": "v_mClb3_TRSL", 
        "symbol": "circle", 
        "target": "225", 
        "source_alt": "mClb3", 
        "source": "153"
    }, 
    {
        "target_alt": "v_mClb3_TRSL", 
        "symbol": "circle", 
        "target": "225", 
        "source_alt": "ribosome", 
        "source": "144"
    }, 
    {
        "target_alt": "v_mClb2_TRSC", 
        "target": "226", 
        "source_alt": "NA", 
        "source": "152"
    }, 
    {
        "target_alt": "v_mClb2_TRSC", 
        "target": "226", 
        "source_alt": "ATP", 
        "source": "161"
    }, 
    {
        "target_alt": "mClb2", 
        "target": "154", 
        "source_alt": "v_mClb2_TRSC", 
        "source": "226"
    }, 
    {
        "target_alt": "Pi", 
        "target": "162", 
        "source_alt": "v_mClb2_TRSC", 
        "source": "226"
    }, 
    {
        "target_alt": "ADP", 
        "target": "157", 
        "source_alt": "v_mClb2_TRSC", 
        "source": "226"
    }, 
    {
        "target_alt": "v_mClb2_TRSC", 
        "symbol": "circle", 
        "target": "226", 
        "source_alt": "Mcm1", 
        "source": "44"
    }, 
    {
        "target_alt": "v_mCln2_TRSL", 
        "target": "227", 
        "source_alt": "AA", 
        "source": "163"
    }, 
    {
        "target_alt": "v_mCln2_TRSL", 
        "target": "227", 
        "source_alt": "ATP", 
        "source": "161"
    }, 
    {
        "target_alt": "Pi", 
        "target": "162", 
        "source_alt": "v_mCln2_TRSL", 
        "source": "227"
    }, 
    {
        "target_alt": "Cln2", 
        "target": "46", 
        "source_alt": "v_mCln2_TRSL", 
        "source": "227"
    }, 
    {
        "target_alt": "ADP", 
        "target": "157", 
        "source_alt": "v_mCln2_TRSL", 
        "source": "227"
    }, 
    {
        "target_alt": "v_mCln2_TRSL", 
        "symbol": "circle", 
        "target": "227", 
        "source_alt": "ribosome", 
        "source": "144"
    }, 
    {
        "target_alt": "v_mCln2_TRSL", 
        "symbol": "circle", 
        "target": "227", 
        "source_alt": "mCln2", 
        "source": "150"
    }, 
    {
        "target_alt": "v_mSwi5_deg", 
        "target": "228", 
        "source_alt": "mSwi5", 
        "source": "151"
    }, 
    {
        "target_alt": "NA", 
        "target": "152", 
        "source_alt": "v_mSwi5_deg", 
        "source": "228"
    }, 
    {
        "target_alt": "v_mSwi5_TRSC", 
        "target": "229", 
        "source_alt": "NA", 
        "source": "152"
    }, 
    {
        "target_alt": "v_mSwi5_TRSC", 
        "target": "229", 
        "source_alt": "ATP", 
        "source": "161"
    }, 
    {
        "target_alt": "mSwi5", 
        "target": "151", 
        "source_alt": "v_mSwi5_TRSC", 
        "source": "229"
    }, 
    {
        "target_alt": "Pi", 
        "target": "162", 
        "source_alt": "v_mSwi5_TRSC", 
        "source": "229"
    }, 
    {
        "target_alt": "ADP", 
        "target": "157", 
        "source_alt": "v_mSwi5_TRSC", 
        "source": "229"
    }, 
    {
        "target_alt": "v_mSwi5_TRSC", 
        "symbol": "circle", 
        "target": "229", 
        "source_alt": "Mcm1", 
        "source": "44"
    }, 
    {
        "target_alt": "v_SBF_p_deg", 
        "target": "230", 
        "source_alt": "SBF_p", 
        "source": "18"
    }, 
    {
        "target_alt": "AA", 
        "target": "163", 
        "source_alt": "v_SBF_p_deg", 
        "source": "230"
    }, 
    {
        "target_alt": "Pi", 
        "target": "162", 
        "source_alt": "v_SBF_p_deg", 
        "source": "230"
    }, 
    {
        "target_alt": "v_Far1_deg_Cln2", 
        "target": "231", 
        "source_alt": "Far1", 
        "source": "19"
    }, 
    {
        "target_alt": "AA", 
        "target": "163", 
        "source_alt": "v_Far1_deg_Cln2", 
        "source": "231"
    }, 
    {
        "target_alt": "v_Far1_deg_Cln2", 
        "symbol": "circle", 
        "target": "231", 
        "source_alt": "Cln2", 
        "source": "46"
    }, 
    {
        "target_alt": "v_Sic1_deg", 
        "target": "232", 
        "source_alt": "Sic1", 
        "source": "39"
    }, 
    {
        "target_alt": "AA", 
        "target": "163", 
        "source_alt": "v_Sic1_deg", 
        "source": "232"
    }, 
    {
        "target_alt": "v_mMih1_TRSL", 
        "target": "233", 
        "source_alt": "AA", 
        "source": "163"
    }, 
    {
        "target_alt": "v_mMih1_TRSL", 
        "target": "233", 
        "source_alt": "ATP", 
        "source": "161"
    }, 
    {
        "target_alt": "Mih1", 
        "target": "34", 
        "source_alt": "v_mMih1_TRSL", 
        "source": "233"
    }, 
    {
        "target_alt": "Pi", 
        "target": "162", 
        "source_alt": "v_mMih1_TRSL", 
        "source": "233"
    }, 
    {
        "target_alt": "ADP", 
        "target": "157", 
        "source_alt": "v_mMih1_TRSL", 
        "source": "233"
    }, 
    {
        "target_alt": "v_mMih1_TRSL", 
        "symbol": "circle", 
        "target": "233", 
        "source_alt": "ribosome", 
        "source": "144"
    }, 
    {
        "target_alt": "v_mMih1_TRSL", 
        "symbol": "circle", 
        "target": "233", 
        "source_alt": "mMih1", 
        "source": "159"
    }, 
    {
        "target_alt": "v_mMih1_TRSC", 
        "target": "234", 
        "source_alt": "NA", 
        "source": "152"
    }, 
    {
        "target_alt": "v_mMih1_TRSC", 
        "target": "234", 
        "source_alt": "ATP", 
        "source": "161"
    }, 
    {
        "target_alt": "mMih1", 
        "target": "159", 
        "source_alt": "v_mMih1_TRSC", 
        "source": "234"
    }, 
    {
        "target_alt": "Pi", 
        "target": "162", 
        "source_alt": "v_mMih1_TRSC", 
        "source": "234"
    }, 
    {
        "target_alt": "ADP", 
        "target": "157", 
        "source_alt": "v_mMih1_TRSC", 
        "source": "234"
    }, 
    {
        "target_alt": "v_Mcm1_deg", 
        "target": "235", 
        "source_alt": "Mcm1", 
        "source": "44"
    }, 
    {
        "target_alt": "AA", 
        "target": "163", 
        "source_alt": "v_Mcm1_deg", 
        "source": "235"
    }, 
    {
        "target_alt": "v_mClb5_TRSL", 
        "target": "236", 
        "source_alt": "AA", 
        "source": "163"
    }, 
    {
        "target_alt": "v_mClb5_TRSL", 
        "target": "236", 
        "source_alt": "ATP", 
        "source": "161"
    }, 
    {
        "target_alt": "Pi", 
        "target": "162", 
        "source_alt": "v_mClb5_TRSL", 
        "source": "236"
    }, 
    {
        "target_alt": "ADP", 
        "target": "157", 
        "source_alt": "v_mClb5_TRSL", 
        "source": "236"
    }, 
    {
        "target_alt": "Clb5", 
        "target": "29", 
        "source_alt": "v_mClb5_TRSL", 
        "source": "236"
    }, 
    {
        "target_alt": "v_mClb5_TRSL", 
        "symbol": "circle", 
        "target": "236", 
        "source_alt": "ribosome", 
        "source": "144"
    }, 
    {
        "target_alt": "v_mClb5_TRSL", 
        "symbol": "circle", 
        "target": "236", 
        "source_alt": "mClb5", 
        "source": "155"
    }, 
    {
        "target_alt": "v_mSwi5_TRSL", 
        "target": "237", 
        "source_alt": "AA", 
        "source": "163"
    }, 
    {
        "target_alt": "v_mSwi5_TRSL", 
        "target": "237", 
        "source_alt": "ATP", 
        "source": "161"
    }, 
    {
        "target_alt": "Swi5", 
        "target": "17", 
        "source_alt": "v_mSwi5_TRSL", 
        "source": "237"
    }, 
    {
        "target_alt": "Pi", 
        "target": "162", 
        "source_alt": "v_mSwi5_TRSL", 
        "source": "237"
    }, 
    {
        "target_alt": "ADP", 
        "target": "157", 
        "source_alt": "v_mSwi5_TRSL", 
        "source": "237"
    }, 
    {
        "target_alt": "v_mSwi5_TRSL", 
        "symbol": "circle", 
        "target": "237", 
        "source_alt": "mSwi5", 
        "source": "151"
    }, 
    {
        "target_alt": "v_mSwi5_TRSL", 
        "symbol": "circle", 
        "target": "237", 
        "source_alt": "ribosome", 
        "source": "144"
    }, 
    {
        "target_alt": "v_ASS_Ribosome_mRNA_other", 
        "target": "247", 
        "source_alt": "Ribosome", 
        "source": "144"
    }, 
    {
        "target_alt": "v_ASS_Ribosome_mRNA_other", 
        "target": "247", 
        "source_alt": "mRNA_other", 
        "source": "240"
    }, 
    {
        "target_alt": "mRNA_other_Ribosome", 
        "target": "243", 
        "source_alt": "v_ASS_Ribosome_mRNA_other", 
        "source": "247"
    }, 
    {
        "target_alt": "v_DEG_B_Protein_met", 
        "target": "248", 
        "source_alt": "B_Protein_met", 
        "source": "242"
    }, 
    {
        "target_alt": "AA", 
        "target": "163", 
        "source_alt": "v_DEG_B_Protein_met", 
        "source": "248"
    }, 
    {
        "target_alt": "v_ASS_Ribosome_mRNA_met", 
        "target": "249", 
        "source_alt": "mRNA_met", 
        "source": "239"
    }, 
    {
        "target_alt": "v_ASS_Ribosome_mRNA_met", 
        "target": "249", 
        "source_alt": "Ribosome", 
        "source": "144"
    }, 
    {
        "target_alt": "mRNA_met_Ribosome", 
        "target": "246", 
        "source_alt": "v_ASS_Ribosome_mRNA_met", 
        "source": "249"
    }, 
    {
        "target_alt": "v_TRSL_mRNA_R", 
        "target": "250", 
        "source_alt": "AA", 
        "source": "163"
    }, 
    {
        "target_alt": "v_TRSL_mRNA_R", 
        "target": "250", 
        "source_alt": "ATP", 
        "source": "161"
    }, 
    {
        "target_alt": "B_Protein_R", 
        "target": "143", 
        "source_alt": "v_TRSL_mRNA_R", 
        "source": "250"
    }, 
    {
        "target_alt": "ADP", 
        "target": "157", 
        "source_alt": "v_TRSL_mRNA_R", 
        "source": "250"
    }, 
    {
        "target_alt": "P_i", 
        "target": "162", 
        "source_alt": "v_TRSL_mRNA_R", 
        "source": "250"
    }, 
    {
        "target_alt": "v_TRSL_mRNA_R", 
        "symbol": "circle", 
        "target": "250", 
        "source_alt": "mRNA_R_Ribosome", 
        "source": "244"
    }, 
    {
        "target_alt": "v_DEG_B_Protein_R", 
        "target": "251", 
        "source_alt": "B_Protein_R", 
        "source": "143"
    }, 
    {
        "target_alt": "AA", 
        "target": "163", 
        "source_alt": "v_DEG_B_Protein_R", 
        "source": "251"
    }, 
    {
        "target_alt": "v_DIS_Ribosome_mRNA_met", 
        "target": "252", 
        "source_alt": "mRNA_met_Ribosome", 
        "source": "246"
    }, 
    {
        "target_alt": "mRNA_met", 
        "target": "239", 
        "source_alt": "v_DIS_Ribosome_mRNA_met", 
        "source": "252"
    }, 
    {
        "target_alt": "Ribosome", 
        "target": "144", 
        "source_alt": "v_DIS_Ribosome_mRNA_met", 
        "source": "252"
    }, 
    {
        "target_alt": "v_DEG_B_Protein_other", 
        "target": "253", 
        "source_alt": "B_Protein_other", 
        "source": "245"
    }, 
    {
        "target_alt": "AA", 
        "target": "163", 
        "source_alt": "v_DEG_B_Protein_other", 
        "source": "253"
    }, 
    {
        "target_alt": "v_DIS_Ribosome_mRNA_other", 
        "target": "254", 
        "source_alt": "mRNA_other_Ribosome", 
        "source": "243"
    }, 
    {
        "target_alt": "Ribosome", 
        "target": "144", 
        "source_alt": "v_DIS_Ribosome_mRNA_other", 
        "source": "254"
    }, 
    {
        "target_alt": "mRNA_other", 
        "target": "240", 
        "source_alt": "v_DIS_Ribosome_mRNA_other", 
        "source": "254"
    }, 
    {
        "target_alt": "v_ASS_Ribosome_mRNA_R", 
        "target": "255", 
        "source_alt": "Ribosome", 
        "source": "144"
    }, 
    {
        "target_alt": "v_ASS_Ribosome_mRNA_R", 
        "target": "255", 
        "source_alt": "mRNA_R", 
        "source": "241"
    }, 
    {
        "target_alt": "mRNA_R_Ribosome", 
        "target": "244", 
        "source_alt": "v_ASS_Ribosome_mRNA_R", 
        "source": "255"
    }, 
    {
        "target_alt": "v_DIS_Ribosome_mRNA_R", 
        "target": "256", 
        "source_alt": "mRNA_R_Ribosome", 
        "source": "244"
    }, 
    {
        "target_alt": "Ribosome", 
        "target": "144", 
        "source_alt": "v_DIS_Ribosome_mRNA_R", 
        "source": "256"
    }, 
    {
        "target_alt": "mRNA_R", 
        "target": "241", 
        "source_alt": "v_DIS_Ribosome_mRNA_R", 
        "source": "256"
    }, 
    {
        "target_alt": "v_TRSL_mRNA_other", 
        "target": "257", 
        "source_alt": "AA", 
        "source": "163"
    }, 
    {
        "target_alt": "v_TRSL_mRNA_other", 
        "target": "257", 
        "source_alt": "ATP", 
        "source": "161"
    }, 
    {
        "target_alt": "B_Protein_other", 
        "target": "245", 
        "source_alt": "v_TRSL_mRNA_other", 
        "source": "257"
    }, 
    {
        "target_alt": "ADP", 
        "target": "157", 
        "source_alt": "v_TRSL_mRNA_other", 
        "source": "257"
    }, 
    {
        "target_alt": "P_i", 
        "target": "162", 
        "source_alt": "v_TRSL_mRNA_other", 
        "source": "257"
    }, 
    {
        "target_alt": "v_TRSL_mRNA_other", 
        "symbol": "circle", 
        "target": "257", 
        "source_alt": "mRNA_other_Ribosome", 
        "source": "243"
    }, 
    {
        "target_alt": "v_TRSL_mRNA_met", 
        "target": "258", 
        "source_alt": "AA", 
        "source": "163"
    }, 
    {
        "target_alt": "v_TRSL_mRNA_met", 
        "target": "258", 
        "source_alt": "ATP", 
        "source": "161"
    }, 
    {
        "target_alt": "B_Protein_met", 
        "target": "242", 
        "source_alt": "v_TRSL_mRNA_met", 
        "source": "258"
    }, 
    {
        "target_alt": "ADP", 
        "target": "157", 
        "source_alt": "v_TRSL_mRNA_met", 
        "source": "258"
    }, 
    {
        "target_alt": "P_i", 
        "target": "162", 
        "source_alt": "v_TRSL_mRNA_met", 
        "source": "258"
    }, 
    {
        "target_alt": "v_TRSL_mRNA_met", 
        "symbol": "circle", 
        "target": "258", 
        "source_alt": "mRNA_met_Ribosome", 
        "source": "246"
    }, 
    {
        "target_alt": "total_ribosomes", 
        "symbol": "none", 
        "target": "238", 
        "source_alt": "Ribosome", 
        "source": "144"
    }, 
    {
        "target_alt": "total_ribosomes", 
        "symbol": "none", 
        "target": "238", 
        "source_alt": "mRNA_R_Ribosome", 
        "source": "244"
    }, 
    {
        "target_alt": "total_ribosomes", 
        "symbol": "none", 
        "target": "238", 
        "source_alt": "mRNA_met_Ribosome", 
        "source": "246"
    }, 
    {
        "target_alt": "total_ribosomes", 
        "symbol": "none", 
        "target": "238", 
        "source_alt": "mRNA_other_Ribosome", 
        "source": "243"
    }, 
    {
        "target_alt": "total_ribosomes", 
        "symbol": "none", 
        "target": "238", 
        "source_alt": "int_vol", 
        "source": "4"
    }, 
    {
        "target_alt": "v_AA_f", 
        "target": "282", 
        "source_alt": "HexP", 
        "source": "267"
    }, 
    {
        "target_alt": "v_AA_f", 
        "target": "282", 
        "source_alt": "pyr", 
        "source": "271"
    }, 
    {
        "target_alt": "v_AA_f", 
        "target": "282", 
        "source_alt": "ATP", 
        "source": "161"
    }, 
    {
        "target_alt": "v_AA_f", 
        "target": "282", 
        "source_alt": "NH4", 
        "source": "275"
    }, 
    {
        "target_alt": "AA", 
        "target": "163", 
        "source_alt": "v_AA_f", 
        "source": "282"
    }, 
    {
        "target_alt": "H", 
        "target": "270", 
        "source_alt": "v_AA_f", 
        "source": "282"
    }, 
    {
        "target_alt": "Pi", 
        "target": "162", 
        "source_alt": "v_AA_f", 
        "source": "282"
    }, 
    {
        "target_alt": "TriP", 
        "target": "278", 
        "source_alt": "v_AA_f", 
        "source": "282"
    }, 
    {
        "target_alt": "ADP", 
        "target": "157", 
        "source_alt": "v_AA_f", 
        "source": "282"
    }, 
    {
        "target_alt": "v_chitin_f", 
        "target": "283", 
        "source_alt": "HexP", 
        "source": "267"
    }, 
    {
        "target_alt": "v_chitin_f", 
        "target": "283", 
        "source_alt": "ATP", 
        "source": "161"
    }, 
    {
        "target_alt": "v_chitin_f", 
        "target": "283", 
        "source_alt": "NH4", 
        "source": "275"
    }, 
    {
        "target_alt": "H", 
        "target": "270", 
        "source_alt": "v_chitin_f", 
        "source": "283"
    }, 
    {
        "target_alt": "Pi", 
        "target": "162", 
        "source_alt": "v_chitin_f", 
        "source": "283"
    }, 
    {
        "target_alt": "chitin", 
        "target": "274", 
        "source_alt": "v_chitin_f", 
        "source": "283"
    }, 
    {
        "target_alt": "ADP", 
        "target": "157", 
        "source_alt": "v_chitin_f", 
        "source": "283"
    }, 
    {
        "target_alt": "v_glucan_f", 
        "target": "284", 
        "source_alt": "HexP", 
        "source": "267"
    }, 
    {
        "target_alt": "v_glucan_f", 
        "target": "284", 
        "source_alt": "ATP", 
        "source": "161"
    }, 
    {
        "target_alt": "Pi", 
        "target": "162", 
        "source_alt": "v_glucan_f", 
        "source": "284"
    }, 
    {
        "target_alt": "ADP", 
        "target": "157", 
        "source_alt": "v_glucan_f", 
        "source": "284"
    }, 
    {
        "target_alt": "glucan", 
        "target": "277", 
        "source_alt": "v_glucan_f", 
        "source": "284"
    }, 
    {
        "target_alt": "v_resp", 
        "target": "285", 
        "source_alt": "NADH", 
        "source": "259"
    }, 
    {
        "target_alt": "v_resp", 
        "target": "285", 
        "source_alt": "O2_check", 
        "source": "268"
    }, 
    {
        "target_alt": "v_resp", 
        "target": "285", 
        "source_alt": "Pi", 
        "source": "162"
    }, 
    {
        "target_alt": "v_resp", 
        "target": "285", 
        "source_alt": "ADP", 
        "source": "157"
    }, 
    {
        "target_alt": "NAD", 
        "target": "261", 
        "source_alt": "v_resp", 
        "source": "285"
    }, 
    {
        "target_alt": "ATP", 
        "target": "161", 
        "source_alt": "v_resp", 
        "source": "285"
    }, 
    {
        "target_alt": "v_glycerol_syn", 
        "target": "286", 
        "source_alt": "NADH", 
        "source": "259"
    }, 
    {
        "target_alt": "v_glycerol_syn", 
        "target": "286", 
        "source_alt": "TriP", 
        "source": "278"
    }, 
    {
        "target_alt": "Pi", 
        "target": "162", 
        "source_alt": "v_glycerol_syn", 
        "source": "286"
    }, 
    {
        "target_alt": "glycerol", 
        "target": "276", 
        "source_alt": "v_glycerol_syn", 
        "source": "286"
    }, 
    {
        "target_alt": "NAD", 
        "target": "261", 
        "source_alt": "v_glycerol_syn", 
        "source": "286"
    }, 
    {
        "target_alt": "v_NA_RNA_f", 
        "target": "287", 
        "source_alt": "HexP", 
        "source": "267"
    }, 
    {
        "target_alt": "v_NA_RNA_f", 
        "target": "287", 
        "source_alt": "pyr", 
        "source": "271"
    }, 
    {
        "target_alt": "v_NA_RNA_f", 
        "target": "287", 
        "source_alt": "TriP", 
        "source": "278"
    }, 
    {
        "target_alt": "v_NA_RNA_f", 
        "target": "287", 
        "source_alt": "ATP", 
        "source": "161"
    }, 
    {
        "target_alt": "v_NA_RNA_f", 
        "target": "287", 
        "source_alt": "NH4", 
        "source": "275"
    }, 
    {
        "target_alt": "H", 
        "target": "270", 
        "source_alt": "v_NA_RNA_f", 
        "source": "287"
    }, 
    {
        "target_alt": "Pi", 
        "target": "162", 
        "source_alt": "v_NA_RNA_f", 
        "source": "287"
    }, 
    {
        "target_alt": "NA_RNA", 
        "target": "263", 
        "source_alt": "v_NA_RNA_f", 
        "source": "287"
    }, 
    {
        "target_alt": "ADP", 
        "target": "157", 
        "source_alt": "v_NA_RNA_f", 
        "source": "287"
    }, 
    {
        "target_alt": "v_NAD_syn", 
        "target": "288", 
        "source_alt": "AA", 
        "source": "163"
    }, 
    {
        "target_alt": "v_NAD_syn", 
        "target": "288", 
        "source_alt": "ADP", 
        "source": "157"
    }, 
    {
        "target_alt": "NAD", 
        "target": "261", 
        "source_alt": "v_NAD_syn", 
        "source": "288"
    }, 
    {
        "target_alt": "v_NAD_syn", 
        "symbol": "circle", 
        "target": "288", 
        "source_alt": "NADH", 
        "source": "259"
    }, 
    {
        "target_alt": "v_ATP_con", 
        "target": "289", 
        "source_alt": "ATP", 
        "source": "161"
    }, 
    {
        "target_alt": "Pi", 
        "target": "162", 
        "source_alt": "v_ATP_con", 
        "source": "289"
    }, 
    {
        "target_alt": "ADP", 
        "target": "157", 
        "source_alt": "v_ATP_con", 
        "source": "289"
    }, 
    {
        "target_alt": "v_NA_DNA_syn", 
        "target": "290", 
        "source_alt": "NH4", 
        "source": "275"
    }, 
    {
        "target_alt": "v_NA_DNA_syn", 
        "target": "290", 
        "source_alt": "NA_RNA", 
        "source": "263"
    }, 
    {
        "target_alt": "H", 
        "target": "270", 
        "source_alt": "v_NA_DNA_syn", 
        "source": "290"
    }, 
    {
        "target_alt": "NA_DNA", 
        "target": "281", 
        "source_alt": "v_NA_DNA_syn", 
        "source": "290"
    }, 
    {
        "target_alt": "v_lipid_f", 
        "target": "291", 
        "source_alt": "HexP", 
        "source": "267"
    }, 
    {
        "target_alt": "v_lipid_f", 
        "target": "291", 
        "source_alt": "pyr", 
        "source": "271"
    }, 
    {
        "target_alt": "v_lipid_f", 
        "target": "291", 
        "source_alt": "ATP", 
        "source": "161"
    }, 
    {
        "target_alt": "v_lipid_f", 
        "target": "291", 
        "source_alt": "NH4", 
        "source": "275"
    }, 
    {
        "target_alt": "H", 
        "target": "270", 
        "source_alt": "v_lipid_f", 
        "source": "291"
    }, 
    {
        "target_alt": "Pi", 
        "target": "162", 
        "source_alt": "v_lipid_f", 
        "source": "291"
    }, 
    {
        "target_alt": "lipid", 
        "target": "269", 
        "source_alt": "v_lipid_f", 
        "source": "291"
    }, 
    {
        "target_alt": "ADP", 
        "target": "157", 
        "source_alt": "v_lipid_f", 
        "source": "291"
    }, 
    {
        "target_alt": "TriP", 
        "target": "278", 
        "source_alt": "v_lipid_f", 
        "source": "291"
    }, 
    {
        "target_alt": "v_HK", 
        "target": "292", 
        "source_alt": "Glc", 
        "source": "272"
    }, 
    {
        "target_alt": "v_HK", 
        "target": "292", 
        "source_alt": "ATP", 
        "source": "161"
    }, 
    {
        "target_alt": "HexP", 
        "target": "267", 
        "source_alt": "v_HK", 
        "source": "292"
    }, 
    {
        "target_alt": "HexP_check", 
        "target": "280", 
        "source_alt": "v_HK", 
        "source": "292"
    }, 
    {
        "target_alt": "ADP", 
        "target": "157", 
        "source_alt": "v_HK", 
        "source": "292"
    }, 
    {
        "target_alt": "v_pyr", 
        "target": "293", 
        "source_alt": "NAD", 
        "source": "261"
    }, 
    {
        "target_alt": "v_pyr", 
        "target": "293", 
        "source_alt": "Pi", 
        "source": "162"
    }, 
    {
        "target_alt": "v_pyr", 
        "target": "293", 
        "source_alt": "TriP", 
        "source": "278"
    }, 
    {
        "target_alt": "v_pyr", 
        "target": "293", 
        "source_alt": "ADP", 
        "source": "157"
    }, 
    {
        "target_alt": "pyr", 
        "target": "271", 
        "source_alt": "v_pyr", 
        "source": "293"
    }, 
    {
        "target_alt": "NADH", 
        "target": "259", 
        "source_alt": "v_pyr", 
        "source": "293"
    }, 
    {
        "target_alt": "pyr_check", 
        "target": "262", 
        "source_alt": "v_pyr", 
        "source": "293"
    }, 
    {
        "target_alt": "ATP", 
        "target": "161", 
        "source_alt": "v_pyr", 
        "source": "293"
    }, 
    {
        "target_alt": "v_ADP_syn", 
        "target": "294", 
        "source_alt": "Pi", 
        "source": "162"
    }, 
    {
        "target_alt": "v_ADP_syn", 
        "target": "294", 
        "source_alt": "NA_RNA", 
        "source": "263"
    }, 
    {
        "target_alt": "ADP", 
        "target": "157", 
        "source_alt": "v_ADP_syn", 
        "source": "294"
    }, 
    {
        "target_alt": "v_ADP_syn", 
        "symbol": "circle", 
        "target": "294", 
        "source_alt": "ATP", 
        "source": "161"
    }, 
    {
        "target_alt": "v_mannan_f", 
        "target": "295", 
        "source_alt": "HexP", 
        "source": "267"
    }, 
    {
        "target_alt": "v_mannan_f", 
        "target": "295", 
        "source_alt": "ATP", 
        "source": "161"
    }, 
    {
        "target_alt": "Pi", 
        "target": "162", 
        "source_alt": "v_mannan_f", 
        "source": "295"
    }, 
    {
        "target_alt": "mannan", 
        "target": "260", 
        "source_alt": "v_mannan_f", 
        "source": "295"
    }, 
    {
        "target_alt": "ADP", 
        "target": "157", 
        "source_alt": "v_mannan_f", 
        "source": "295"
    }, 
    {
        "target_alt": "v_TCA", 
        "target": "296", 
        "source_alt": "pyr", 
        "source": "271"
    }, 
    {
        "target_alt": "v_TCA", 
        "target": "296", 
        "source_alt": "Pi", 
        "source": "162"
    }, 
    {
        "target_alt": "v_TCA", 
        "target": "296", 
        "source_alt": "ADP", 
        "source": "157"
    }, 
    {
        "target_alt": "v_TCA", 
        "target": "296", 
        "source_alt": "NAD", 
        "source": "261"
    }, 
    {
        "target_alt": "NADH", 
        "target": "259", 
        "source_alt": "v_TCA", 
        "source": "296"
    }, 
    {
        "target_alt": "CO2_check", 
        "target": "273", 
        "source_alt": "v_TCA", 
        "source": "296"
    }, 
    {
        "target_alt": "CO2", 
        "target": "279", 
        "source_alt": "v_TCA", 
        "source": "296"
    }, 
    {
        "target_alt": "ATP", 
        "target": "161", 
        "source_alt": "v_TCA", 
        "source": "296"
    }, 
    {
        "target_alt": "v_ferm", 
        "target": "297", 
        "source_alt": "pyr", 
        "source": "271"
    }, 
    {
        "target_alt": "v_ferm", 
        "target": "297", 
        "source_alt": "NADH", 
        "source": "259"
    }, 
    {
        "target_alt": "NAD", 
        "target": "261", 
        "source_alt": "v_ferm", 
        "source": "297"
    }, 
    {
        "target_alt": "CO2", 
        "target": "279", 
        "source_alt": "v_ferm", 
        "source": "297"
    }, 
    {
        "target_alt": "CO2_check", 
        "target": "273", 
        "source_alt": "v_ferm", 
        "source": "297"
    }, 
    {
        "target_alt": "EtOH_check", 
        "target": "265", 
        "source_alt": "v_ferm", 
        "source": "297"
    }, 
    {
        "target_alt": "EtOH", 
        "target": "266", 
        "source_alt": "v_ferm", 
        "source": "297"
    }, 
    {
        "target_alt": "v_TriP", 
        "target": "298", 
        "source_alt": "HexP", 
        "source": "267"
    }, 
    {
        "target_alt": "v_TriP", 
        "target": "298", 
        "source_alt": "ATP", 
        "source": "161"
    }, 
    {
        "target_alt": "TriP_check", 
        "target": "264", 
        "source_alt": "v_TriP", 
        "source": "298"
    }, 
    {
        "target_alt": "TriP", 
        "target": "278", 
        "source_alt": "v_TriP", 
        "source": "298"
    }, 
    {
        "target_alt": "ADP", 
        "target": "157", 
        "source_alt": "v_TriP", 
        "source": "298"
    }, 
    {
        "target_alt": "v_A_con", 
        "target": "301", 
        "source_alt": "A", 
        "source": "299"
    }, 
    {
        "target_alt": "v_A_con", 
        "symbol": "circle", 
        "target": "301", 
        "source_alt": "DNA", 
        "source": "300"
    }, 
    {
        "target_alt": "v_DNA_syn", 
        "target": "302", 
        "source_alt": "NA_DNA_cyt", 
        "source": "281"
    }, 
    {
        "target_alt": "DNA", 
        "target": "300", 
        "source_alt": "v_DNA_syn", 
        "source": "302"
    }, 
    {
        "target_alt": "v_DNA_syn", 
        "symbol": "circle", 
        "target": "302", 
        "source_alt": "A", 
        "source": "299"
    }, 
    {
        "target_alt": "A", 
        "target": "299", 
        "source_alt": "v_A_syn", 
        "source": "303"
    }, 
    {
        "target_alt": "v_A_syn", 
        "symbol": "circle", 
        "target": "303", 
        "source_alt": "Clb5", 
        "source": "29"
    }, 
    {
        "target_alt": "CW_proteins", 
        "target": "311", 
        "source_alt": "proteins", 
        "source": "245"
    }, 
    {
        "target_alt": "proteins_cw", 
        "target": "304", 
        "source_alt": "CW_proteins", 
        "source": "311"
    }, 
    {
        "target_alt": "CW_proteins", 
        "symbol": "circle", 
        "target": "311", 
        "source_alt": "m_cw", 
        "source": "308"
    }, 
    {
        "target_alt": "CW_mannan", 
        "target": "312", 
        "source_alt": "mannan", 
        "source": "260"
    }, 
    {
        "target_alt": "mannan_cw", 
        "target": "305", 
        "source_alt": "CW_mannan", 
        "source": "312"
    }, 
    {
        "target_alt": "CW_mannan", 
        "symbol": "circle", 
        "target": "312", 
        "source_alt": "m_cw", 
        "source": "308"
    }, 
    {
        "target_alt": "CW_glucan", 
        "target": "313", 
        "source_alt": "glucan", 
        "source": "277"
    }, 
    {
        "target_alt": "glucan_cw", 
        "target": "309", 
        "source_alt": "CW_glucan", 
        "source": "313"
    }, 
    {
        "target_alt": "CW_glucan", 
        "symbol": "circle", 
        "target": "313", 
        "source_alt": "m_cw", 
        "source": "308"
    }, 
    {
        "target_alt": "CW_chitin", 
        "target": "314", 
        "source_alt": "chitin", 
        "source": "274"
    }, 
    {
        "target_alt": "chitin_cw", 
        "target": "310", 
        "source_alt": "CW_chitin", 
        "source": "314"
    }, 
    {
        "target_alt": "CW_chitin", 
        "symbol": "circle", 
        "target": "314", 
        "source_alt": "m_cw", 
        "source": "308"
    }, 
    {
        "target_alt": "m_cw", 
        "symbol": "none", 
        "target": "308", 
        "source_alt": "glucan_cw", 
        "source": "309"
    }, 
    {
        "target_alt": "m_cw", 
        "symbol": "none", 
        "target": "308", 
        "source_alt": "V_cw", 
        "source": "307"
    }, 
    {
        "target_alt": "m_cw", 
        "symbol": "none", 
        "target": "308", 
        "source_alt": "chitin_cw", 
        "source": "310"
    }, 
    {
        "target_alt": "m_cw", 
        "symbol": "none", 
        "target": "308", 
        "source_alt": "V_cw", 
        "source": "307"
    }, 
    {
        "target_alt": "m_cw", 
        "symbol": "none", 
        "target": "308", 
        "source_alt": "mannan_cw", 
        "source": "305"
    }, 
    {
        "target_alt": "m_cw", 
        "symbol": "none", 
        "target": "308", 
        "source_alt": "V_cw", 
        "source": "307"
    }, 
    {
        "target_alt": "m_cw", 
        "symbol": "none", 
        "target": "308", 
        "source_alt": "proteins_cw", 
        "source": "304"
    }, 
    {
        "target_alt": "m_cw", 
        "symbol": "none", 
        "target": "308", 
        "source_alt": "V_cw", 
        "source": "307"
    }, 
    {
        "target_alt": "J_pma1", 
        "target": "362", 
        "source_alt": "h_cyt", 
        "source": "315"
    }, 
    {
        "target_alt": "J_pma1", 
        "symbol": "circle", 
        "target": "362", 
        "source_alt": "h_ext", 
        "source": "321"
    }, 
    {
        "target_alt": "J_pma1", 
        "symbol": "circle", 
        "target": "362", 
        "source_alt": "atp_cyt", 
        "source": "317"
    }, 
    {
        "target_alt": "J_pma1", 
        "symbol": "circle", 
        "target": "362", 
        "source_alt": "adp_cyt", 
        "source": "346"
    }, 
    {
        "target_alt": "J_pma1", 
        "symbol": "circle", 
        "target": "362", 
        "source_alt": "pi_cyt", 
        "source": "351"
    }, 
    {
        "target_alt": "J_na", 
        "target": "363", 
        "source_alt": "na_cyt", 
        "source": "325"
    }, 
    {
        "target_alt": "J_na", 
        "symbol": "circle", 
        "target": "363", 
        "source_alt": "na_ext", 
        "source": "324"
    }, 
    {
        "target_alt": "J_trk12", 
        "target": "364", 
        "source_alt": "k_cyt", 
        "source": "341"
    }, 
    {
        "target_alt": "J_trk12", 
        "symbol": "circle", 
        "target": "364", 
        "source_alt": "k_ext", 
        "source": "338"
    }, 
    {
        "target_alt": "J_ca", 
        "target": "365", 
        "source_alt": "ca_cyt", 
        "source": "329"
    }, 
    {
        "target_alt": "J_ca", 
        "symbol": "circle", 
        "target": "365", 
        "source_alt": "ca_ext", 
        "source": "342"
    }, 
    {
        "target_alt": "J_vac_h", 
        "target": "366", 
        "source_alt": "h_vac", 
        "source": "320"
    }, 
    {
        "target_alt": "h_cyt", 
        "target": "315", 
        "source_alt": "J_vac_h", 
        "source": "366"
    }, 
    {
        "target_alt": "J_h", 
        "target": "367", 
        "source_alt": "h_cyt", 
        "source": "315"
    }, 
    {
        "target_alt": "J_h", 
        "symbol": "circle", 
        "target": "367", 
        "source_alt": "h_ext", 
        "source": "321"
    }, 
    {
        "target_alt": "J_cl", 
        "target": "368", 
        "source_alt": "cl_cyt", 
        "source": "322"
    }, 
    {
        "target_alt": "J_cl", 
        "symbol": "circle", 
        "target": "368", 
        "source_alt": "cl_ext", 
        "source": "358"
    }, 
    {
        "target_alt": "J_k", 
        "target": "369", 
        "source_alt": "k_cyt", 
        "source": "341"
    }, 
    {
        "target_alt": "J_k", 
        "symbol": "circle", 
        "target": "369", 
        "source_alt": "k_ext", 
        "source": "338"
    }, 
    {
        "target_alt": "J_vac_k", 
        "target": "370", 
        "source_alt": "k_vac", 
        "source": "353"
    }, 
    {
        "target_alt": "k_cyt", 
        "target": "341", 
        "source_alt": "J_vac_k", 
        "source": "370"
    }, 
    {
        "target_alt": "J_tok1", 
        "target": "371", 
        "source_alt": "k_cyt", 
        "source": "341"
    }, 
    {
        "target_alt": "J_tok1", 
        "symbol": "circle", 
        "target": "371", 
        "source_alt": "k_ext", 
        "source": "338"
    }, 
    {
        "target_alt": "J_vma1", 
        "target": "372", 
        "source_alt": "h_vac", 
        "source": "320"
    }, 
    {
        "target_alt": "h_cyt", 
        "target": "315", 
        "source_alt": "J_vma1", 
        "source": "372"
    }, 
    {
        "target_alt": "J_vma1", 
        "symbol": "circle", 
        "target": "372", 
        "source_alt": "atp_cyt", 
        "source": "317"
    }, 
    {
        "target_alt": "J_vma1", 
        "symbol": "circle", 
        "target": "372", 
        "source_alt": "adp_cyt", 
        "source": "346"
    }, 
    {
        "target_alt": "J_vma1", 
        "symbol": "circle", 
        "target": "372", 
        "source_alt": "pi_cyt", 
        "source": "351"
    }, 
    {
        "target_alt": "J_nha1", 
        "target": "373", 
        "source_alt": "h_cyt", 
        "source": "315"
    }, 
    {
        "target_alt": "na_cyt", 
        "target": "325", 
        "source_alt": "J_nha1", 
        "source": "373"
    }, 
    {
        "target_alt": "J_nha1", 
        "symbol": "circle", 
        "target": "373", 
        "source_alt": "h_ext", 
        "source": "321"
    }, 
    {
        "target_alt": "J_nha1", 
        "symbol": "circle", 
        "target": "373", 
        "source_alt": "na_ext", 
        "source": "324"
    }, 
    {
        "target_alt": "J_vac_ca", 
        "target": "374", 
        "source_alt": "ca_vac", 
        "source": "337"
    }, 
    {
        "target_alt": "ca_cyt", 
        "target": "329", 
        "source_alt": "J_vac_ca", 
        "source": "374"
    }, 
    {
        "target_alt": "J_vac_cl", 
        "target": "375", 
        "source_alt": "cl_vac", 
        "source": "330"
    }, 
    {
        "target_alt": "cl_cyt", 
        "target": "322", 
        "source_alt": "J_vac_cl", 
        "source": "375"
    }, 
    {
        "target_alt": "J_ena1", 
        "target": "376", 
        "source_alt": "na_cyt", 
        "source": "325"
    }, 
    {
        "target_alt": "J_ena1", 
        "symbol": "circle", 
        "target": "376", 
        "source_alt": "na_ext", 
        "source": "324"
    }, 
    {
        "target_alt": "J_vac_na", 
        "target": "377", 
        "source_alt": "na_vac", 
        "source": "335"
    }, 
    {
        "target_alt": "na_cyt", 
        "target": "325", 
        "source_alt": "J_vac_na", 
        "source": "377"
    }, 
    {
        "target_alt": "E_ena1", 
        "symbol": "none", 
        "target": "339", 
        "source_alt": "na_ext", 
        "source": "324"
    }, 
    {
        "target_alt": "E_ena1", 
        "symbol": "none", 
        "target": "339", 
        "source_alt": "na_cyt", 
        "source": "325"
    }, 
    {
        "target_alt": "E_ena1", 
        "symbol": "none", 
        "target": "339", 
        "source_alt": "D_G_ATP", 
        "source": "354"
    }, 
    {
        "target_alt": "surface_vac", 
        "symbol": "none", 
        "target": "340", 
        "source_alt": "r_vac", 
        "source": "347"
    }, 
    {
        "target_alt": "surface", 
        "symbol": "none", 
        "target": "343", 
        "source_alt": "r", 
        "source": "334"
    }, 
    {
        "target_alt": "E_nha1", 
        "symbol": "none", 
        "target": "345", 
        "source_alt": "h_ext", 
        "source": "321"
    }, 
    {
        "target_alt": "E_nha1", 
        "symbol": "none", 
        "target": "345", 
        "source_alt": "na_cyt", 
        "source": "325"
    }, 
    {
        "target_alt": "E_nha1", 
        "symbol": "none", 
        "target": "345", 
        "source_alt": "h_cyt", 
        "source": "315"
    }, 
    {
        "target_alt": "E_nha1", 
        "symbol": "none", 
        "target": "345", 
        "source_alt": "na_ext", 
        "source": "324"
    }, 
    {
        "target_alt": "r_vac", 
        "symbol": "none", 
        "target": "347", 
        "source_alt": "vacuole", 
        "source": "350"
    }, 
    {
        "target_alt": "my_J_tok1", 
        "symbol": "none", 
        "target": "348", 
        "source_alt": "surface", 
        "source": "343"
    }, 
    {
        "target_alt": "my_J_tok1", 
        "symbol": "none", 
        "target": "348", 
        "source_alt": "gp_tok1", 
        "source": "361"
    }, 
    {
        "target_alt": "my_J_tok1", 
        "symbol": "none", 
        "target": "348", 
        "source_alt": "v_m", 
        "source": "319"
    }, 
    {
        "target_alt": "my_J_tok1", 
        "symbol": "none", 
        "target": "348", 
        "source_alt": "k_ext", 
        "source": "338"
    }, 
    {
        "target_alt": "my_J_tok1", 
        "symbol": "none", 
        "target": "348", 
        "source_alt": "k_cyt", 
        "source": "341"
    }, 
    {
        "target_alt": "E_pma1", 
        "symbol": "none", 
        "target": "318", 
        "source_alt": "h_ext", 
        "source": "321"
    }, 
    {
        "target_alt": "E_pma1", 
        "symbol": "none", 
        "target": "318", 
        "source_alt": "h_cyt", 
        "source": "315"
    }, 
    {
        "target_alt": "E_pma1", 
        "symbol": "none", 
        "target": "318", 
        "source_alt": "D_G_ATP", 
        "source": "354"
    }, 
    {
        "target_alt": "E_vma1", 
        "symbol": "none", 
        "target": "349", 
        "source_alt": "h_cyt", 
        "source": "315"
    }, 
    {
        "target_alt": "E_vma1", 
        "symbol": "none", 
        "target": "349", 
        "source_alt": "h_vac", 
        "source": "320"
    }, 
    {
        "target_alt": "E_vma1", 
        "symbol": "none", 
        "target": "349", 
        "source_alt": "D_G_ATP", 
        "source": "354"
    }, 
    {
        "target_alt": "vacuole", 
        "symbol": "none", 
        "target": "350", 
        "source_alt": "cytosol", 
        "source": "142"
    }, 
    {
        "target_alt": "my_J_trk12", 
        "symbol": "none", 
        "target": "327", 
        "source_alt": "surface", 
        "source": "343"
    }, 
    {
        "target_alt": "my_J_trk12", 
        "symbol": "none", 
        "target": "327", 
        "source_alt": "gp_trk12", 
        "source": "323"
    }, 
    {
        "target_alt": "my_J_trk12", 
        "symbol": "none", 
        "target": "327", 
        "source_alt": "v_m", 
        "source": "319"
    }, 
    {
        "target_alt": "my_J_trk12", 
        "symbol": "none", 
        "target": "327", 
        "source_alt": "k_ext", 
        "source": "338"
    }, 
    {
        "target_alt": "my_J_trk12", 
        "symbol": "none", 
        "target": "327", 
        "source_alt": "k_cyt", 
        "source": "341"
    }, 
    {
        "target_alt": "gp_trk12", 
        "symbol": "none", 
        "target": "323", 
        "source_alt": "v_m", 
        "source": "319"
    }, 
    {
        "target_alt": "D_G_ATP", 
        "symbol": "none", 
        "target": "354", 
        "source_alt": "atp_cyt", 
        "source": "317"
    }, 
    {
        "target_alt": "D_G_ATP", 
        "symbol": "none", 
        "target": "354", 
        "source_alt": "adp_cyt", 
        "source": "346"
    }, 
    {
        "target_alt": "D_G_ATP", 
        "symbol": "none", 
        "target": "354", 
        "source_alt": "pi_cyt", 
        "source": "351"
    }, 
    {
        "target_alt": "my_J_Cl", 
        "symbol": "none", 
        "target": "326", 
        "source_alt": "surface", 
        "source": "343"
    }, 
    {
        "target_alt": "my_J_Cl", 
        "symbol": "none", 
        "target": "326", 
        "source_alt": "v_m", 
        "source": "319"
    }, 
    {
        "target_alt": "my_J_Cl", 
        "symbol": "none", 
        "target": "326", 
        "source_alt": "cl_ext", 
        "source": "358"
    }, 
    {
        "target_alt": "my_J_Cl", 
        "symbol": "none", 
        "target": "326", 
        "source_alt": "cl_cyt", 
        "source": "322"
    }, 
    {
        "target_alt": "my_J_K", 
        "symbol": "none", 
        "target": "356", 
        "source_alt": "surface", 
        "source": "343"
    }, 
    {
        "target_alt": "my_J_K", 
        "symbol": "none", 
        "target": "356", 
        "source_alt": "v_m", 
        "source": "319"
    }, 
    {
        "target_alt": "my_J_K", 
        "symbol": "none", 
        "target": "356", 
        "source_alt": "k_ext", 
        "source": "338"
    }, 
    {
        "target_alt": "my_J_K", 
        "symbol": "none", 
        "target": "356", 
        "source_alt": "k_cyt", 
        "source": "341"
    }, 
    {
        "target_alt": "my_J_H", 
        "symbol": "none", 
        "target": "357", 
        "source_alt": "surface", 
        "source": "343"
    }, 
    {
        "target_alt": "my_J_H", 
        "symbol": "none", 
        "target": "357", 
        "source_alt": "v_m", 
        "source": "319"
    }, 
    {
        "target_alt": "my_J_H", 
        "symbol": "none", 
        "target": "357", 
        "source_alt": "h_ext", 
        "source": "321"
    }, 
    {
        "target_alt": "my_J_H", 
        "symbol": "none", 
        "target": "357", 
        "source_alt": "h_cyt", 
        "source": "315"
    }, 
    {
        "target_alt": "my_J_Ca", 
        "symbol": "none", 
        "target": "328", 
        "source_alt": "surface", 
        "source": "343"
    }, 
    {
        "target_alt": "my_J_Ca", 
        "symbol": "none", 
        "target": "328", 
        "source_alt": "v_m", 
        "source": "319"
    }, 
    {
        "target_alt": "my_J_Ca", 
        "symbol": "none", 
        "target": "328", 
        "source_alt": "ca_ext", 
        "source": "342"
    }, 
    {
        "target_alt": "my_J_Ca", 
        "symbol": "none", 
        "target": "328", 
        "source_alt": "ca_cyt", 
        "source": "329"
    }, 
    {
        "target_alt": "my_J_pma1", 
        "symbol": "none", 
        "target": "359", 
        "source_alt": "surface", 
        "source": "343"
    }, 
    {
        "target_alt": "my_J_pma1", 
        "symbol": "none", 
        "target": "359", 
        "source_alt": "v_m", 
        "source": "319"
    }, 
    {
        "target_alt": "my_J_pma1", 
        "symbol": "none", 
        "target": "359", 
        "source_alt": "E_pma1", 
        "source": "318"
    }, 
    {
        "target_alt": "my_J_ena1", 
        "symbol": "none", 
        "target": "331", 
        "source_alt": "surface", 
        "source": "343"
    }, 
    {
        "target_alt": "my_J_ena1", 
        "symbol": "none", 
        "target": "331", 
        "source_alt": "v_m", 
        "source": "319"
    }, 
    {
        "target_alt": "my_J_ena1", 
        "symbol": "none", 
        "target": "331", 
        "source_alt": "E_ena1", 
        "source": "339"
    }, 
    {
        "target_alt": "gp_tok1", 
        "symbol": "none", 
        "target": "361", 
        "source_alt": "v_m", 
        "source": "319"
    }, 
    {
        "target_alt": "myph", 
        "symbol": "none", 
        "target": "333", 
        "source_alt": "h_cyt", 
        "source": "315"
    }, 
    {
        "target_alt": "r", 
        "symbol": "none", 
        "target": "334", 
        "source_alt": "cytosol", 
        "source": "142"
    }, 
    {
        "target_alt": "my_J_Na", 
        "symbol": "none", 
        "target": "336", 
        "source_alt": "surface", 
        "source": "343"
    }, 
    {
        "target_alt": "my_J_Na", 
        "symbol": "none", 
        "target": "336", 
        "source_alt": "v_m", 
        "source": "319"
    }, 
    {
        "target_alt": "my_J_Na", 
        "symbol": "none", 
        "target": "336", 
        "source_alt": "na_ext", 
        "source": "324"
    }, 
    {
        "target_alt": "my_J_Na", 
        "symbol": "none", 
        "target": "336", 
        "source_alt": "na_cyt", 
        "source": "325"
    }, 
    {
        "target_alt": "my_J_nha1", 
        "symbol": "none", 
        "target": "360", 
        "source_alt": "surface", 
        "source": "343"
    }, 
    {
        "target_alt": "my_J_nha1", 
        "symbol": "none", 
        "target": "360", 
        "source_alt": "v_m", 
        "source": "319"
    }, 
    {
        "target_alt": "my_J_nha1", 
        "symbol": "none", 
        "target": "360", 
        "source_alt": "E_nha1", 
        "source": "345"
    }, 
    {
        "target_alt": "glycerol_trp", 
        "target": "387", 
        "source_alt": "glycerol_cyt", 
        "source": "276"
    }, 
    {
        "target_alt": "glycerol_ext", 
        "target": "381", 
        "source_alt": "glycerol_trp", 
        "source": "387"
    }, 
    {
        "target_alt": "v_EtOHdif", 
        "target": "388", 
        "source_alt": "EtOH", 
        "source": "266"
    }, 
    {
        "target_alt": "EtOH_ext", 
        "target": "385", 
        "source_alt": "v_EtOHdif", 
        "source": "388"
    }, 
    {
        "target_alt": "glucose_cyt", 
        "target": "272", 
        "source_alt": "v_hxt", 
        "source": "389"
    }, 
    {
        "target_alt": "v_hxt", 
        "symbol": "circle", 
        "target": "389", 
        "source_alt": "VOLUME", 
        "source": "4"
    }, 
    {
        "target_alt": "v_hxt", 
        "symbol": "circle", 
        "target": "389", 
        "source_alt": "SURFACE", 
        "source": "1"
    }, 
    {
        "target_alt": "v_hxt", 
        "symbol": "circle", 
        "target": "389", 
        "source_alt": "glucose_ext", 
        "source": "382"
    }, 
    {
        "target_alt": "v_C02dif", 
        "target": "390", 
        "source_alt": "CO2", 
        "source": "279"
    }, 
    {
        "target_alt": "CO2_ext", 
        "target": "379", 
        "source_alt": "v_C02dif", 
        "source": "390"
    }, 
    {
        "target_alt": "glc_uptake", 
        "symbol": "none", 
        "target": "380", 
        "source_alt": "SURFACE", 
        "source": "1"
    }, 
    {
        "target_alt": "glc_uptake", 
        "symbol": "none", 
        "target": "380", 
        "source_alt": "glucose_ext", 
        "source": "382"
    }, 
    {
        "target_alt": "glc_uptake", 
        "symbol": "none", 
        "target": "380", 
        "source_alt": "glucose_cyt", 
        "source": "272"
    }, 
    {
        "target_alt": "glc_uptake", 
        "symbol": "none", 
        "target": "380", 
        "source_alt": "glucose_ext", 
        "source": "382"
    }, 
    {
        "target_alt": "glc_uptake", 
        "symbol": "none", 
        "target": "380", 
        "source_alt": "glucose_cyt", 
        "source": "272"
    }, 
    {
        "target_alt": "glc_uptake", 
        "symbol": "none", 
        "target": "380", 
        "source_alt": "glucose_ext", 
        "source": "382"
    }, 
    {
        "target_alt": "glc_uptake", 
        "symbol": "none", 
        "target": "380", 
        "source_alt": "glucose_cyt", 
        "source": "272"
    }, 
    {
        "target_alt": "SURFACE", 
        "symbol": "none", 
        "target": "1", 
        "source_alt": "VOLUME", 
        "source": "4"
    }
]
let compartments_circo={
    "parameter_compartment": {
        "spread": [
            260.58, 
            108.04, 
            119.24, 
            34.239
        ], 
        "species": [
            "316", 
            "318", 
            "319", 
            "323", 
            "326", 
            "327", 
            "328", 
            "331", 
            "333", 
            "334", 
            "336", 
            "339", 
            "340", 
            "343", 
            "344", 
            "345", 
            "347", 
            "348", 
            "349", 
            "354", 
            "356", 
            "357", 
            "359", 
            "360", 
            "361"
        ], 
        "module": [
            "TRP_ION"
        ]
    }, 
    "cytosol": {
        "spread": [
            261.46, 
            102.38, 
            96.577, 
            35.515
        ], 
        "species": [
            "142", 
            "315", 
            "317", 
            "322", 
            "325", 
            "329", 
            "341", 
            "346", 
            "351", 
            "352", 
            "355", 
            "362", 
            "363", 
            "364", 
            "365", 
            "366", 
            "367", 
            "368", 
            "369", 
            "370", 
            "371", 
            "372", 
            "373", 
            "374", 
            "375", 
            "376", 
            "377"
        ], 
        "module": [
            "GEX_APC"
        ]
    }, 
    "intracellular": {
        "spread": [
            269.9, 
            0.40186, 
            204.78, 
            2.1993
        ], 
        "species": [
            "0", 
            "1", 
            "2", 
            "3", 
            "4", 
            "5", 
            "6", 
            "7", 
            "8", 
            "9", 
            "10", 
            "11", 
            "12", 
            "13", 
            "14", 
            "16", 
            "17", 
            "18", 
            "19", 
            "20", 
            "21", 
            "22", 
            "23", 
            "24", 
            "25", 
            "26", 
            "27", 
            "28", 
            "29", 
            "30", 
            "31", 
            "32", 
            "33", 
            "34", 
            "35", 
            "36", 
            "38", 
            "39", 
            "40", 
            "41", 
            "42", 
            "43", 
            "44", 
            "45", 
            "46", 
            "47", 
            "48", 
            "49", 
            "50", 
            "51", 
            "52", 
            "53", 
            "54", 
            "55", 
            "56", 
            "57", 
            "58", 
            "59", 
            "60", 
            "61", 
            "62", 
            "63", 
            "64", 
            "65", 
            "66", 
            "67", 
            "68", 
            "69", 
            "70", 
            "71", 
            "72", 
            "73", 
            "74", 
            "75", 
            "76", 
            "77", 
            "78", 
            "79", 
            "80", 
            "81", 
            "82", 
            "83", 
            "84", 
            "85", 
            "86", 
            "87", 
            "88", 
            "89", 
            "90", 
            "91", 
            "92", 
            "93", 
            "94", 
            "95", 
            "96", 
            "97", 
            "98", 
            "99", 
            "100", 
            "101", 
            "102", 
            "103", 
            "104", 
            "105", 
            "106", 
            "107", 
            "108", 
            "109", 
            "110", 
            "111", 
            "112", 
            "113", 
            "114", 
            "115", 
            "116", 
            "117", 
            "118", 
            "119", 
            "120", 
            "121", 
            "122", 
            "123", 
            "124", 
            "125", 
            "126", 
            "127", 
            "128", 
            "129", 
            "130", 
            "131", 
            "132", 
            "133", 
            "134", 
            "135", 
            "136", 
            "137", 
            "138", 
            "139", 
            "140", 
            "141", 
            "143", 
            "144", 
            "145", 
            "146", 
            "147", 
            "148", 
            "149", 
            "150", 
            "151", 
            "152", 
            "153", 
            "154", 
            "155", 
            "156", 
            "157", 
            "158", 
            "159", 
            "160", 
            "161", 
            "162", 
            "163", 
            "164", 
            "165", 
            "166", 
            "167", 
            "168", 
            "169", 
            "170", 
            "171", 
            "172", 
            "173", 
            "174", 
            "175", 
            "176", 
            "177", 
            "178", 
            "179", 
            "180", 
            "181", 
            "182", 
            "183", 
            "184", 
            "185", 
            "186", 
            "187", 
            "188", 
            "189", 
            "190", 
            "191", 
            "192", 
            "193", 
            "194", 
            "195", 
            "196", 
            "197", 
            "198", 
            "199", 
            "200", 
            "201", 
            "202", 
            "203", 
            "204", 
            "205", 
            "206", 
            "207", 
            "208", 
            "209", 
            "210", 
            "211", 
            "212", 
            "213", 
            "214", 
            "215", 
            "216", 
            "217", 
            "218", 
            "219", 
            "220", 
            "221", 
            "222", 
            "223", 
            "224", 
            "225", 
            "226", 
            "227", 
            "228", 
            "229", 
            "230", 
            "231", 
            "232", 
            "233", 
            "234", 
            "235", 
            "236", 
            "237", 
            "238", 
            "239", 
            "240", 
            "241", 
            "242", 
            "243", 
            "244", 
            "245", 
            "246", 
            "247", 
            "248", 
            "249", 
            "250", 
            "251", 
            "252", 
            "253", 
            "254", 
            "255", 
            "256", 
            "257", 
            "258", 
            "259", 
            "260", 
            "261", 
            "262", 
            "263", 
            "264", 
            "265", 
            "266", 
            "267", 
            "268", 
            "269", 
            "270", 
            "271", 
            "272", 
            "273", 
            "274", 
            "275", 
            "276", 
            "277", 
            "278", 
            "279", 
            "280", 
            "281", 
            "282", 
            "283", 
            "284", 
            "285", 
            "286", 
            "287", 
            "288", 
            "289", 
            "290", 
            "291", 
            "292", 
            "293", 
            "294", 
            "295", 
            "296", 
            "297", 
            "298", 
            "302", 
            "303", 
            "311", 
            "312", 
            "313", 
            "314", 
            "378", 
            "380", 
            "387", 
            "388", 
            "389", 
            "390"
        ], 
        "module": [
            "VOL_core_growth_single_vol"
        ]
    }, 
    "vacuole": {
        "spread": [
            264.57, 
            202.22, 
            66.843, 
            34.781
        ], 
        "species": [
            "320", 
            "330", 
            "335", 
            "337", 
            "350", 
            "353", 
            "366", 
            "370", 
            "372", 
            "374", 
            "375", 
            "377"
        ], 
        "module": [
            "TRP_ION"
        ]
    }, 
    "plasma_membrane": {
        "spread": [
            108.04, 
            108.04, 
            130.58, 
            130.58
        ], 
        "species": [
            "306"
        ], 
        "module": [
            "MET_CWS"
        ]
    }, 
    "cell_wall": {
        "spread": [
            117.06, 
            115.12, 
            133.12, 
            119.14
        ], 
        "species": [
            "304", 
            "305", 
            "307", 
            "308", 
            "309", 
            "310", 
            "311", 
            "312", 
            "313", 
            "314"
        ], 
        "module": [
            "MET_CWS"
        ]
    }, 
    "nucleus": {
        "spread": [
            268.44, 
            113.71, 
            125.25, 
            52.719
        ], 
        "species": [
            "37", 
            "299", 
            "300", 
            "301", 
            "302", 
            "303"
        ], 
        "module": [
            "CDC_core"
        ]
    }, 
    "extracellular": {
        "spread": [
            261.16, 
            0.375, 
            141.91, 
            0.25
        ], 
        "species": [
            "15", 
            "321", 
            "324", 
            "332", 
            "338", 
            "342", 
            "358", 
            "362", 
            "363", 
            "364", 
            "365", 
            "367", 
            "368", 
            "369", 
            "371", 
            "373", 
            "376", 
            "379", 
            "381", 
            "382", 
            "383", 
            "384", 
            "385", 
            "386", 
            "387", 
            "388", 
            "389", 
            "390"
        ], 
        "module": [
            "VOL_core_growth_single_vol"
        ]
    }
}