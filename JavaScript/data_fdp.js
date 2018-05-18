var data =[
    {
        "links_to": [], 
        "symbol": "triangle", 
        "module": [
            "VOL_core_growth_single_vol"
        ], 
        "y": "12.808", 
        "annotation": "YCM:r_os_flux", 
        "name_alt": "dr_os", 
        "name": "0", 
        "equation": "(- Lp * (pi_t + pi_e - pi_i))", 
        "state": "0", 
        "links_from": [
            "6", 
            "15", 
            "8"
        ], 
        "x": "12.291", 
        "compartment": "intracellular", 
        "is_ode": false
    }, 
    {
        "links_to": [], 
        "symbol": "triangle", 
        "module": [
            "VOL_core_growth_single_vol"
        ], 
        "y": "11.754", 
        "annotation": "SBO:0000467", 
        "name_alt": "G", 
        "name": "1", 
        "equation": "(4. * pi * r**2.)", 
        "state": "0", 
        "links_from": [
            "9", 
            "2"
        ], 
        "x": "13.595", 
        "compartment": "intracellular", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "8", 
            "1", 
            "11"
        ], 
        "symbol": "circle", 
        "module": [
            "VOL_core_growth_single_vol"
        ], 
        "y": "11.004", 
        "annotation": "YCM:internal_osmolarity", 
        "name_alt": "c_i", 
        "name": "2", 
        "state": "0", 
        "links_from": [], 
        "x": "13.678", 
        "compartment": "intracellular", 
        "is_ode": true
    }, 
    {
        "links_to": [], 
        "symbol": "triangle", 
        "module": [
            "VOL_core_growth_single_vol"
        ], 
        "y": "10.837", 
        "annotation": "YCM:r_b_flux", 
        "name_alt": "dr_b", 
        "name": "3", 
        "equation": "(0.2 * dR_ref)", 
        "state": "0", 
        "links_from": [
            "10"
        ], 
        "x": "10.012", 
        "compartment": "intracellular", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "259"
        ], 
        "symbol": "triangle", 
        "module": [
            "VOL_core_growth_single_vol", 
            "CDC_core", 
            "GEX_APC", 
            "GEX_GRN", 
            "GEX_TRL", 
            "MET_CCM", 
            "MET_DNA", 
            "MET_CWS"
        ], 
        "y": "14.754", 
        "annotation": "SBO:0000468", 
        "name_alt": "int_vol", 
        "name": "4", 
        "equation": "(0.8 * V)", 
        "state": "0", 
        "links_from": [
            "11"
        ], 
        "x": "13.928", 
        "compartment": "intracellular", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "9", 
            "6", 
            "15", 
            "8"
        ], 
        "symbol": "circle", 
        "module": [
            "VOL_core_growth_single_vol"
        ], 
        "y": "14.256", 
        "annotation": "SBO:0000466", 
        "name_alt": "r_os", 
        "name": "5", 
        "state": "osmotic", 
        "links_from": [], 
        "x": "12.11", 
        "compartment": "intracellular", 
        "is_ode": true
    }, 
    {
        "links_to": [
            "10", 
            "0", 
            "14", 
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
        "symbol": "circle", 
        "module": [
            "VOL_core_growth_single_vol"
        ], 
        "y": "13.381", 
        "annotation": "SBO:0000279", 
        "name_alt": "pi_t", 
        "name": "6", 
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
        "x": "9.9147", 
        "compartment": "intracellular", 
        "is_ode": true
    }, 
    {
        "links_to": [], 
        "symbol": "triangle", 
        "module": [
            "VOL_core_growth_single_vol"
        ], 
        "y": "14.754", 
        "annotation": "SBO:0000468", 
        "name_alt": "V_ref", 
        "name": "7", 
        "equation": "(4. / 3. * pi * 10**(-15) * R_ref**3.)", 
        "state": "relaxed", 
        "links_from": [
            "12"
        ], 
        "x": "13.012", 
        "compartment": "intracellular", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "0", 
            "14"
        ], 
        "symbol": "triangle", 
        "module": [
            "VOL_core_growth_single_vol"
        ], 
        "y": "14.754", 
        "annotation": "SBO:0000279", 
        "name_alt": "pi_i", 
        "name": "8", 
        "equation": "(c_i /V * R * T)", 
        "state": "0", 
        "links_from": [
            "2", 
            "11", 
            "5", 
            "6", 
            "6"
        ], 
        "x": "11.178", 
        "compartment": "intracellular", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "10", 
            "1", 
            "11"
        ], 
        "symbol": "triangle", 
        "module": [
            "VOL_core_growth_single_vol"
        ], 
        "y": "14.754", 
        "annotation": "SBO:0000466", 
        "name_alt": "r", 
        "name": "9", 
        "equation": "(r_os + r_b)", 
        "state": "0", 
        "links_from": [
            "5", 
            "13", 
            "6", 
            "6", 
            "6", 
            "6", 
            "6", 
            "6", 
            "12"
        ], 
        "x": "10.262", 
        "compartment": "intracellular", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "3", 
            "14"
        ], 
        "symbol": "triangle", 
        "module": [
            "VOL_core_growth_single_vol"
        ], 
        "y": "14.087", 
        "annotation": "YCM:R_ref_flux", 
        "name_alt": "dR_ref", 
        "name": "10", 
        "equation": "(phi * R_ref * r / (2.0 * d) * maximum(pi_t - pi_c, 0.0))", 
        "state": "0", 
        "links_from": [
            "12", 
            "9", 
            "6", 
            "13"
        ], 
        "x": "9.8449", 
        "compartment": "intracellular", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "4", 
            "8"
        ], 
        "symbol": "triangle", 
        "module": [
            "VOL_core_growth_single_vol"
        ], 
        "y": "14.92", 
        "annotation": "SBO:0000468", 
        "name_alt": "V", 
        "name": "11", 
        "equation": "(4. / 3. * pi * 10**(-15) * r**3.)", 
        "state": "total", 
        "links_from": [
            "9", 
            "2"
        ], 
        "x": "12.095", 
        "compartment": "intracellular", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "10", 
            "7", 
            "12", 
            "9", 
            "6"
        ], 
        "symbol": "circle", 
        "module": [
            "VOL_core_growth_single_vol"
        ], 
        "y": "13.254", 
        "annotation": "YCM:radius_relaxed_volume", 
        "name_alt": "R_ref", 
        "name": "12", 
        "state": "0", 
        "links_from": [
            "6", 
            "6", 
            "6", 
            "6", 
            "12"
        ], 
        "x": "14.178", 
        "compartment": "intracellular", 
        "is_ode": true
    }, 
    {
        "links_to": [
            "9", 
            "10"
        ], 
        "symbol": "circle", 
        "module": [
            "VOL_core_growth_single_vol"
        ], 
        "y": "13.92", 
        "annotation": "SBO:0000466", 
        "name_alt": "r_b", 
        "name": "13", 
        "state": "nonosmotic", 
        "links_from": [], 
        "x": "14.178", 
        "compartment": "intracellular", 
        "is_ode": true
    }, 
    {
        "links_to": [], 
        "symbol": "triangle", 
        "module": [
            "VOL_core_growth_single_vol"
        ], 
        "y": "14.068", 
        "annotation": "YCM:r_flux", 
        "name_alt": "dr", 
        "name": "14", 
        "equation": "(0.2 * dR_ref - Lp * (pi_t + pi_e - pi_i))", 
        "state": "0", 
        "links_from": [
            "10", 
            "6", 
            "15", 
            "8"
        ], 
        "x": "10.75", 
        "compartment": "intracellular", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "0", 
            "14"
        ], 
        "symbol": "triangle", 
        "module": [
            "VOL_core_growth_single_vol"
        ], 
        "y": "27.331", 
        "annotation": "SBO:0000279", 
        "name_alt": "pi_e", 
        "name": "15", 
        "equation": "(c_e * R * T)", 
        "state": "0", 
        "links_from": [
            "5", 
            "6", 
            "6"
        ], 
        "x": "3.2766", 
        "compartment": "extracellular", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "72", 
            "82", 
            "89", 
            "121"
        ], 
        "symbol": "circle", 
        "module": [
            "CDC_core"
        ], 
        "y": "10.42", 
        "annotation": "SGD:S000003723p", 
        "name_alt": "Swe1_cyt", 
        "name": "16", 
        "state": "0", 
        "links_from": [
            "91"
        ], 
        "x": "12.762", 
        "compartment": "intracellular", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "67", 
            "113", 
            "118", 
            "119"
        ], 
        "symbol": "circle", 
        "module": [
            "CDC_core"
        ], 
        "y": "10.337", 
        "annotation": "SGD:S000002553p", 
        "name_alt": "Swi5_nuc", 
        "name": "17", 
        "state": "0", 
        "links_from": [
            "97", 
            "109"
        ], 
        "x": "13.678", 
        "compartment": "intracellular", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "70"
        ], 
        "symbol": "circle", 
        "module": [
            "CDC_core"
        ], 
        "y": "11.754", 
        "annotation": "SGD:S000000913p_SGD:S000004172p", 
        "name_alt": "SBF_p_cyt", 
        "name": "18", 
        "state": "P", 
        "links_from": [
            "62"
        ], 
        "x": "9.4282", 
        "compartment": "intracellular", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "55", 
            "61", 
            "117"
        ], 
        "symbol": "circle", 
        "module": [
            "CDC_core"
        ], 
        "y": "11.67", 
        "annotation": "SGD:S000003693p", 
        "name_alt": "Far1_cyt", 
        "name": "19", 
        "state": "0", 
        "links_from": [
            "76", 
            "78"
        ], 
        "x": "14.512", 
        "compartment": "intracellular", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "80", 
            "86", 
            "90", 
            "99", 
            "123", 
            "124", 
            "135"
        ], 
        "symbol": "circle", 
        "module": [
            "CDC_core"
        ], 
        "y": "15.337", 
        "annotation": "SGD:S000002971p", 
        "name_alt": "APC_cyt", 
        "name": "20", 
        "state": "0", 
        "links_from": [
            "77", 
            "136"
        ], 
        "x": "9.3449", 
        "compartment": "intracellular", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "64", 
            "70", 
            "77", 
            "92", 
            "97", 
            "130"
        ], 
        "symbol": "circle", 
        "module": [
            "CDC_core"
        ], 
        "y": "10.17", 
        "annotation": "SGD:S000001924p", 
        "name_alt": "Cdc14_p_cyt", 
        "name": "21", 
        "state": "P", 
        "links_from": [
            "64", 
            "102", 
            "135"
        ], 
        "x": "9.3449", 
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
        "symbol": "circle", 
        "module": [
            "CDC_core"
        ], 
        "y": "10.17", 
        "annotation": "SGD:S000006324p_SGD:S000004069p", 
        "name_alt": "Clb5_Sic1_cyt", 
        "name": "22", 
        "state": "0", 
        "links_from": [
            "87", 
            "110"
        ], 
        "x": "10.262", 
        "compartment": "intracellular", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "81", 
            "130"
        ], 
        "symbol": "circle", 
        "module": [
            "CDC_core"
        ], 
        "y": "10.087", 
        "annotation": "SGD:S000005609p", 
        "name_alt": "Whi5_p_cyt", 
        "name": "23", 
        "state": "P", 
        "links_from": [
            "59", 
            "74"
        ], 
        "x": "14.595", 
        "compartment": "intracellular", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "64", 
            "102", 
            "135"
        ], 
        "symbol": "circle", 
        "module": [
            "CDC_core"
        ], 
        "y": "10.754", 
        "annotation": "SGD:S000001924p", 
        "name_alt": "Cdc14_cyt", 
        "name": "24", 
        "state": "0", 
        "links_from": [
            "92"
        ], 
        "x": "14.595", 
        "compartment": "intracellular", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "75", 
            "82", 
            "100", 
            "111", 
            "125", 
            "128"
        ], 
        "symbol": "circle", 
        "module": [
            "CDC_core"
        ], 
        "y": "12.337", 
        "annotation": "SGD:S000004103p", 
        "name_alt": "Hog1_PP_cyt", 
        "name": "25", 
        "state": "PP", 
        "links_from": [], 
        "x": "14.595", 
        "compartment": "intracellular", 
        "is_ode": true
    }, 
    {
        "links_to": [
            "71", 
            "96"
        ], 
        "symbol": "circle", 
        "module": [
            "CDC_core"
        ], 
        "y": "15.42", 
        "annotation": "SGD:S000002314p_SGD:S000004069p", 
        "name_alt": "Clb3_Sic1_cyt", 
        "name": "26", 
        "state": "0", 
        "links_from": [
            "132"
        ], 
        "x": "14.595", 
        "compartment": "intracellular", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "58", 
            "85", 
            "94"
        ], 
        "symbol": "circle", 
        "module": [
            "CDC_core"
        ], 
        "y": "15.42", 
        "annotation": "SGD:S000006177p_SGD:S000003693p", 
        "name_alt": "Cln2_Far1_p_cyt", 
        "name": "27", 
        "state": "P", 
        "links_from": [
            "66"
        ], 
        "x": "13.678", 
        "compartment": "intracellular", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "120"
        ], 
        "symbol": "circle", 
        "module": [
            "CDC_core"
        ], 
        "y": "15.42", 
        "annotation": "SGD:S000003723p", 
        "name_alt": "Swe1_p_cyt", 
        "name": "28", 
        "state": "P", 
        "links_from": [
            "72", 
            "82"
        ], 
        "x": "11.178", 
        "compartment": "intracellular", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "63", 
            "87", 
            "90", 
            "98", 
            "101", 
            "118", 
            "122", 
            "124"
        ], 
        "symbol": "circle", 
        "module": [
            "CDC_core"
        ], 
        "y": "15.42", 
        "annotation": "SGD:S000006324p", 
        "name_alt": "Clb5_cyt", 
        "name": "29", 
        "state": "0", 
        "links_from": [
            "75", 
            "79", 
            "108", 
            "134"
        ], 
        "x": "10.262", 
        "compartment": "intracellular", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "60", 
            "74", 
            "127"
        ], 
        "symbol": "circle", 
        "module": [
            "CDC_core"
        ], 
        "y": "10.004", 
        "annotation": "SGD:S000005609p", 
        "name_alt": "Whi5_cyt", 
        "name": "30", 
        "state": "0", 
        "links_from": [
            "130", 
            "131"
        ], 
        "x": "11.178", 
        "compartment": "intracellular", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "69"
        ], 
        "symbol": "circle", 
        "module": [
            "CDC_core"
        ], 
        "y": "15.587", 
        "annotation": "SGD:S000004069p", 
        "name_alt": "Sic1_p_cyt", 
        "name": "31", 
        "state": "P", 
        "links_from": [
            "101", 
            "108"
        ], 
        "x": "12.762", 
        "compartment": "intracellular", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "59", 
            "74", 
            "107", 
            "138"
        ], 
        "symbol": "circle", 
        "module": [
            "CDC_core"
        ], 
        "y": "11.087", 
        "annotation": "SGD:S000000038p", 
        "name_alt": "Cln3_cyt", 
        "name": "32", 
        "state": "0", 
        "links_from": [
            "68", 
            "115", 
            "140"
        ], 
        "x": "9.0949", 
        "compartment": "intracellular", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "79", 
            "110"
        ], 
        "symbol": "circle", 
        "module": [
            "CDC_core"
        ], 
        "y": "14.587", 
        "annotation": "SGD:S000006324p_SGD:S000004069p", 
        "name_alt": "Clb5_Sic1_Hp_cyt", 
        "name": "33", 
        "state": "HP", 
        "links_from": [
            "63", 
            "128"
        ], 
        "x": "14.845", 
        "compartment": "intracellular", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "53", 
            "133"
        ], 
        "symbol": "circle", 
        "module": [
            "CDC_core"
        ], 
        "y": "13.42", 
        "annotation": "SGD:S000004639p", 
        "name_alt": "Mih1_cyt", 
        "name": "34", 
        "state": "0", 
        "links_from": [
            "137"
        ], 
        "x": "9.0116", 
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
        "symbol": "circle", 
        "module": [
            "CDC_core"
        ], 
        "y": "9.7536", 
        "annotation": "SGD:S000003693p", 
        "name_alt": "Far1_p_cyt", 
        "name": "35", 
        "state": "P", 
        "links_from": [
            "68", 
            "94", 
            "117"
        ], 
        "x": "12.095", 
        "compartment": "intracellular", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "53", 
            "106"
        ], 
        "symbol": "circle", 
        "module": [
            "CDC_core"
        ], 
        "y": "14.67", 
        "annotation": "SGD:S000006323p", 
        "name_alt": "Clb2_p_cyt", 
        "name": "36", 
        "state": "P", 
        "links_from": [
            "121"
        ], 
        "x": "8.9282", 
        "compartment": "intracellular", 
        "is_ode": false
    }, 
    {
        "links_to": [], 
        "symbol": "circle", 
        "module": [
            "CDC_core", 
            "GEX_APC", 
            "GEX_GRN", 
            "GEX_TRL", 
            "MET_DNA"
        ], 
        "y": "8.063", 
        "annotation": "SBO:0000468", 
        "name_alt": "nuc_vol", 
        "name": "37", 
        "state": "0", 
        "links_from": [], 
        "x": "27.85", 
        "compartment": "nucleus", 
        "is_ode": true
    }, 
    {
        "links_to": [
            "57", 
            "62", 
            "72", 
            "80", 
            "102", 
            "103", 
            "119", 
            "121", 
            "123", 
            "129"
        ], 
        "symbol": "circle", 
        "module": [
            "CDC_core"
        ], 
        "y": "9.6702", 
        "annotation": "SGD:S000006323p", 
        "name_alt": "Clb2_cyt", 
        "name": "38", 
        "state": "0", 
        "links_from": [
            "53", 
            "95", 
            "125"
        ], 
        "x": "13.012", 
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
            "132"
        ], 
        "symbol": "circle", 
        "module": [
            "CDC_core"
        ], 
        "y": "13.004", 
        "annotation": "SGD:S000004069p", 
        "name_alt": "Sic1_cyt", 
        "name": "39", 
        "state": "0", 
        "links_from": [
            "67", 
            "71", 
            "84", 
            "95", 
            "134"
        ], 
        "x": "15.095", 
        "compartment": "intracellular", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "76", 
            "117"
        ], 
        "symbol": "circle", 
        "module": [
            "CDC_core"
        ], 
        "y": "13.67", 
        "annotation": "SGD:S000000112p", 
        "name_alt": "Fus3_cyt", 
        "name": "40", 
        "state": "0", 
        "links_from": [], 
        "x": "15.095", 
        "compartment": "intracellular", 
        "is_ode": true
    }, 
    {
        "links_to": [
            "83", 
            "95"
        ], 
        "symbol": "circle", 
        "module": [
            "CDC_core"
        ], 
        "y": "16.004", 
        "annotation": "SGD:S000006323p_SGD:S000004069p", 
        "name_alt": "Clb2_Sic1_cyt", 
        "name": "41", 
        "state": "0", 
        "links_from": [
            "57"
        ], 
        "x": "9.3449", 
        "compartment": "intracellular", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "59", 
            "139"
        ], 
        "symbol": "circle", 
        "module": [
            "CDC_core"
        ], 
        "y": "9.5036", 
        "annotation": "SGD:S000000913p_SGD:S000004172p_SGD:S000005609p", 
        "name_alt": "SBF_Whi5_nuc", 
        "name": "42", 
        "state": "0", 
        "links_from": [
            "60"
        ], 
        "x": "8.6782", 
        "compartment": "intracellular", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "77", 
            "105"
        ], 
        "symbol": "circle", 
        "module": [
            "CDC_core"
        ], 
        "y": "9.5036", 
        "annotation": "SGD:S000002971p", 
        "name_alt": "APC_p_cyt", 
        "name": "43", 
        "state": "P", 
        "links_from": [
            "123", 
            "124"
        ], 
        "x": "9.5949", 
        "compartment": "intracellular", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "56", 
            "109", 
            "125", 
            "136"
        ], 
        "symbol": "circle", 
        "module": [
            "CDC_core"
        ], 
        "y": "9.4202", 
        "annotation": "SGD:S000004646p", 
        "name_alt": "Mcm1_nuc", 
        "name": "44", 
        "state": "0", 
        "links_from": [
            "103", 
            "116"
        ], 
        "x": "13.928", 
        "compartment": "intracellular", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "86", 
            "104", 
            "116", 
            "132"
        ], 
        "symbol": "circle", 
        "module": [
            "CDC_core"
        ], 
        "y": "9.4202", 
        "annotation": "SGD:S000002314p", 
        "name_alt": "Clb3_cyt", 
        "name": "45", 
        "state": "0", 
        "links_from": [
            "71", 
            "122"
        ], 
        "x": "14.845", 
        "compartment": "intracellular", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "52", 
            "55", 
            "59", 
            "66", 
            "74", 
            "88", 
            "101", 
            "108", 
            "114", 
            "115"
        ], 
        "symbol": "circle", 
        "module": [
            "CDC_core"
        ], 
        "y": "16.087", 
        "annotation": "SGD:S000006177p", 
        "name_alt": "Cln2_cyt", 
        "name": "46", 
        "state": "0", 
        "links_from": [
            "85", 
            "94", 
            "111"
        ], 
        "x": "15.262", 
        "compartment": "intracellular", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "73", 
            "97"
        ], 
        "symbol": "circle", 
        "module": [
            "CDC_core"
        ], 
        "y": "16.087", 
        "annotation": "SGD:S000002553p", 
        "name_alt": "Swi5_p_cyt", 
        "name": "47", 
        "state": "P", 
        "links_from": [
            "118", 
            "119"
        ], 
        "x": "14.345", 
        "compartment": "intracellular", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "60", 
            "62", 
            "111"
        ], 
        "symbol": "circle", 
        "module": [
            "CDC_core"
        ], 
        "y": "16.087", 
        "annotation": "SGD:S000000913p_SGD:S000004172p", 
        "name_alt": "SBF_nuc", 
        "name": "48", 
        "state": "0", 
        "links_from": [
            "59", 
            "70"
        ], 
        "x": "11.845", 
        "compartment": "intracellular", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "68", 
            "112", 
            "115"
        ], 
        "symbol": "circle", 
        "module": [
            "CDC_core"
        ], 
        "y": "16.087", 
        "annotation": "SGD:S000000038p_SGD:S000003693p", 
        "name_alt": "Cln3_Far1_p_cyt", 
        "name": "49", 
        "state": "P", 
        "links_from": [
            "107"
        ], 
        "x": "10.928", 
        "compartment": "intracellular", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "75", 
            "126"
        ], 
        "symbol": "circle", 
        "module": [
            "CDC_core"
        ], 
        "y": "11.754", 
        "annotation": "SGD:S000002214p_SGD:S000004172p", 
        "name_alt": "MBF_nuc", 
        "name": "50", 
        "state": "0", 
        "links_from": [
            "52"
        ], 
        "x": "8.5116", 
        "compartment": "intracellular", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "63", 
            "84"
        ], 
        "symbol": "circle", 
        "module": [
            "CDC_core"
        ], 
        "y": "9.3369", 
        "annotation": "SGD:S000004069p", 
        "name_alt": "Sic1_Hp_cyt", 
        "name": "51", 
        "state": "HP", 
        "links_from": [
            "79", 
            "100"
        ], 
        "x": "10.512", 
        "compartment": "intracellular", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "50"
        ], 
        "symbol": "rect", 
        "module": [
            "CDC_core"
        ], 
        "links_from": [
            "46"
        ], 
        "rate": "( int_vol *    ( ( kp_MBF  *  ( (Cln2_cyt)  **  n1 ) )  /  ( ( K_MBF  **  n1 )  + ( (Cln2_cyt)  **  n1 ) ) )   )", 
        "name_alt": "v_MBF_akt", 
        "name": "52", 
        "compartments": [
            "intracellular"
        ], 
        "y": "11.42", 
        "x": "15.428", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "38"
        ], 
        "symbol": "rect", 
        "module": [
            "CDC_core"
        ], 
        "links_from": [
            "36", 
            "34"
        ], 
        "rate": "( int_vol *   ( ( kdp_Clb2  *  Clb2_p_cyt )  *  Mih1_cyt )  )", 
        "name_alt": "v_Clb2_dp", 
        "name": "53", 
        "compartments": [
            "intracellular"
        ], 
        "y": "16.254", 
        "x": "13.428", 
        "is_ode": false
    }, 
    {
        "links_to": [], 
        "symbol": "rect", 
        "module": [
            "CDC_core"
        ], 
        "links_from": [
            "35"
        ], 
        "rate": "( int_vol *   ( kd_Far1p  *  Far1_p_cyt )  )", 
        "name_alt": "v_Far1p_d", 
        "name": "54", 
        "compartments": [
            "intracellular"
        ], 
        "y": "16.254", 
        "x": "8.4282", 
        "is_ode": false
    }, 
    {
        "links_to": [], 
        "symbol": "rect", 
        "module": [
            "CDC_core"
        ], 
        "links_from": [
            "19", 
            "46"
        ], 
        "rate": "( int_vol *   ( ( kdd_Far1  *  Far1_cyt )  *  Cln2_cyt )  )", 
        "name_alt": "v_Far1_dd", 
        "name": "55", 
        "compartments": [
            "intracellular"
        ], 
        "y": "15.587", 
        "x": "8.4282", 
        "is_ode": false
    }, 
    {
        "links_to": [], 
        "symbol": "rect", 
        "module": [
            "CDC_core"
        ], 
        "links_from": [
            "44"
        ], 
        "rate": "( int_vol *   ( kd_Mcm1  *  Mcm1_nuc )  )", 
        "name_alt": "v_Mcm1_d", 
        "name": "56", 
        "compartments": [
            "intracellular"
        ], 
        "y": "10.42", 
        "x": "8.4282", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "41"
        ], 
        "symbol": "rect", 
        "module": [
            "CDC_core"
        ], 
        "links_from": [
            "38", 
            "39"
        ], 
        "rate": "( int_vol *   ( (   kcf_Clb2_Sic1 )  *  Clb2_cyt )  *  Sic1_cyt )", 
        "name_alt": "v_Clb2_ass_Sic1", 
        "name": "57", 
        "compartments": [
            "intracellular"
        ], 
        "y": "10.087", 
        "x": "15.512", 
        "is_ode": false
    }, 
    {
        "links_to": [], 
        "symbol": "rect", 
        "module": [
            "CDC_core"
        ], 
        "links_from": [
            "27"
        ], 
        "rate": "( int_vol *   ( kd_Cln2_Far1p  *  Cln2_Far1_p_cyt )  )", 
        "name_alt": "v_Cln2_Far1p_d", 
        "name": "58", 
        "compartments": [
            "intracellular"
        ], 
        "y": "10.754", 
        "x": "15.512", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "23", 
            "48"
        ], 
        "symbol": "rect", 
        "module": [
            "CDC_core"
        ], 
        "links_from": [
            "42", 
            "46", 
            "32"
        ], 
        "rate": "( int_vol *   ( SBF_Whi5_nuc  *  (  ( ( kppa_Cln3_Whi5  *  Cln3_cyt )  /  ( Kpp_Cln3_Whi5  + Cln3_cyt ) )   +  ( ( kppa_Cln2_Whi5  *  ( (Cln2_cyt)  **  n_SBF ) )  /  ( ( Kpp_Cln2_Whi5  **  n_SBF )  + ( (Cln2_cyt)  **  n_SBF ) ) )  ) )  )", 
        "name_alt": "v_SBF_akt", 
        "name": "59", 
        "compartments": [
            "intracellular"
        ], 
        "y": "12.087", 
        "x": "15.512", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "42"
        ], 
        "symbol": "rect", 
        "module": [
            "CDC_core"
        ], 
        "links_from": [
            "48", 
            "30"
        ], 
        "rate": "( int_vol *   ( ( kcf_SBF_Whi5  *  SBF_nuc )  *  Whi5_cyt )  )", 
        "name_alt": "v_SBF_ass_Whi5", 
        "name": "60", 
        "compartments": [
            "intracellular"
        ], 
        "y": "15.254", 
        "x": "15.512", 
        "is_ode": false
    }, 
    {
        "links_to": [], 
        "symbol": "rect", 
        "module": [
            "CDC_core"
        ], 
        "links_from": [
            "19"
        ], 
        "rate": "( int_vol *   ( kd_Far1  *  Far1_cyt )  )", 
        "name_alt": "v_Far1_d", 
        "name": "61", 
        "compartments": [
            "intracellular"
        ], 
        "y": "12.754", 
        "x": "8.3449", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "18"
        ], 
        "symbol": "rect", 
        "module": [
            "CDC_core"
        ], 
        "links_from": [
            "48", 
            "38"
        ], 
        "rate": "( int_vol *   ( ( kpp_SBF_Clb2  *  SBF_nuc )  *  Clb2_cyt )  )", 
        "name_alt": "v_SBF_inakt_Clb2", 
        "name": "62", 
        "compartments": [
            "intracellular"
        ], 
        "y": "9.0869", 
        "x": "11.928", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "33"
        ], 
        "symbol": "rect", 
        "module": [
            "CDC_core"
        ], 
        "links_from": [
            "51", 
            "29"
        ], 
        "rate": "( int_vol *   ( (   kcf_Clb5_Sic1_Hp )  *  Clb5_cyt )  *  Sic1_Hp_cyt )", 
        "name_alt": "v_Clb5_ass_Sic1_Hp", 
        "name": "63", 
        "compartments": [
            "intracellular"
        ], 
        "y": "9.0036", 
        "x": "12.845", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "21"
        ], 
        "symbol": "rect", 
        "module": [
            "CDC_core"
        ], 
        "links_from": [
            "24", 
            "21"
        ], 
        "rate": "( int_vol *   ( ( kpp_Cdc14_MEN  *  Cdc14_cyt )  *  Cdc14_p_cyt )  )", 
        "name_alt": "v_Cdc14_akt_MEN_fb", 
        "name": "64", 
        "compartments": [
            "intracellular"
        ], 
        "y": "11.087", 
        "x": "8.1782", 
        "is_ode": false
    }, 
    {
        "links_to": [], 
        "symbol": "rect", 
        "module": [
            "CDC_core"
        ], 
        "links_from": [
            "39"
        ], 
        "rate": "( int_vol *   ( kd_Sic1  *  Sic1_cyt )  )", 
        "name_alt": "v_Sic1_d", 
        "name": "65", 
        "compartments": [
            "intracellular"
        ], 
        "y": "8.9202", 
        "x": "15.762", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "27"
        ], 
        "symbol": "rect", 
        "module": [
            "CDC_core"
        ], 
        "links_from": [
            "46", 
            "35"
        ], 
        "rate": "( int_vol *   ( ( kcf_Cln2_Far1p  *  Cln2_cyt )  *  Far1_p_cyt )  )", 
        "name_alt": "v_Cln2_ass_Far1p", 
        "name": "66", 
        "compartments": [
            "intracellular"
        ], 
        "y": "14.337", 
        "x": "15.762", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "39"
        ], 
        "symbol": "rect", 
        "module": [
            "CDC_core"
        ], 
        "links_from": [
            "17"
        ], 
        "rate": "( int_vol *    ( ( kp_Sic1  *  Swi5_nuc )  /  ( Kp_Sic1  + Swi5_nuc ) )   )", 
        "name_alt": "v_Sic1_p", 
        "name": "67", 
        "compartments": [
            "intracellular"
        ], 
        "y": "14.004", 
        "x": "8.0949", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "32", 
            "35"
        ], 
        "symbol": "rect", 
        "module": [
            "CDC_core"
        ], 
        "links_from": [
            "49"
        ], 
        "rate": "( int_vol *   ( kcd_Cln3_Far1p  *  Cln3_Far1_p_cyt )  )", 
        "name_alt": "v_Cln3_diss_Far1p", 
        "name": "68", 
        "compartments": [
            "intracellular"
        ], 
        "y": "16.67", 
        "x": "10.012", 
        "is_ode": false
    }, 
    {
        "links_to": [], 
        "symbol": "rect", 
        "module": [
            "CDC_core"
        ], 
        "links_from": [
            "31"
        ], 
        "rate": "( int_vol *   ( kd_Sic1p  *  Sic1_p_cyt )  )", 
        "name_alt": "v_Sic1_p_d", 
        "name": "69", 
        "compartments": [
            "intracellular"
        ], 
        "y": "14.92", 
        "x": "8.0116", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "48"
        ], 
        "symbol": "rect", 
        "module": [
            "CDC_core"
        ], 
        "links_from": [
            "18", 
            "21"
        ], 
        "rate": "( int_vol *   ( ( kdp_SBF  *  SBF_p_cyt )  *  Cdc14_p_cyt )  )", 
        "name_alt": "v_SBF_dp", 
        "name": "70", 
        "compartments": [
            "intracellular"
        ], 
        "y": "8.8369", 
        "x": "8.0116", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "45", 
            "39"
        ], 
        "symbol": "rect", 
        "module": [
            "CDC_core"
        ], 
        "links_from": [
            "26"
        ], 
        "rate": "( int_vol * ( kcd_Clb3_Sic1  *  Clb3_Sic1_cyt )  )", 
        "name_alt": "v_Clb3_diss_Sic1", 
        "name": "71", 
        "compartments": [
            "intracellular"
        ], 
        "y": "8.8369", 
        "x": "8.9282", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "28"
        ], 
        "symbol": "rect", 
        "module": [
            "CDC_core"
        ], 
        "links_from": [
            "16", 
            "38"
        ], 
        "rate": "( int_vol *   ( ( kpp_Swe1_Clb2  *  Swe1_cyt )  *  Clb2_cyt )  )", 
        "name_alt": "v_Swe1_pp", 
        "name": "72", 
        "compartments": [
            "intracellular"
        ], 
        "y": "8.7536", 
        "x": "13.762", 
        "is_ode": false
    }, 
    {
        "links_to": [], 
        "symbol": "rect", 
        "module": [
            "CDC_core"
        ], 
        "links_from": [
            "47"
        ], 
        "rate": "( int_vol * ( kd_Swi5_p  *  Swi5_p_cyt )  )", 
        "name_alt": "v_Swi5_p_d", 
        "name": "73", 
        "compartments": [
            "intracellular"
        ], 
        "y": "8.7536", 
        "x": "14.678", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "23"
        ], 
        "symbol": "rect", 
        "module": [
            "CDC_core"
        ], 
        "links_from": [
            "30", 
            "46", 
            "32"
        ], 
        "rate": "( int_vol *   ( Whi5_cyt  *  ( ( kpp_Cln2_Whi5  *  Cln2_cyt )  + ( kpp_Cln3_Whi5  *  Cln3_cyt ) ) )  )", 
        "name_alt": "v_Whi5_pp", 
        "name": "74", 
        "compartments": [
            "intracellular"
        ], 
        "y": "16.754", 
        "x": "15.928", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "29"
        ], 
        "symbol": "rect", 
        "module": [
            "CDC_core"
        ], 
        "links_from": [
            "25", 
            "50"
        ], 
        "rate": "( int_vol *    (  ( ( kp_Clb5  *  MBF_nuc )  /  ( Kp_Clb5  + MBF_nuc ) )   /  ( 1.0  + ( kI_Clb5_Hog1  *  Hog1_PP_cyt ) ) )   )", 
        "name_alt": "v_Clb5_p", 
        "name": "75", 
        "compartments": [
            "intracellular"
        ], 
        "y": "16.754", 
        "x": "15.012", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "19"
        ], 
        "symbol": "rect", 
        "module": [
            "CDC_core"
        ], 
        "links_from": [
            "40"
        ], 
        "rate": "( int_vol *   ( ( kp_Far1  *  Fus3_cyt )  + kp_basal_Far1 )  )", 
        "name_alt": "v_Far1_p", 
        "name": "76", 
        "compartments": [
            "intracellular"
        ], 
        "y": "16.754", 
        "x": "12.512", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "20"
        ], 
        "symbol": "rect", 
        "module": [
            "CDC_core"
        ], 
        "links_from": [
            "43", 
            "21"
        ], 
        "rate": "( int_vol *   ( ( ka_APC_Cdc14  *  APC_p_cyt )  *  Cdc14_p_cyt )  )", 
        "name_alt": "v_APC_akt_Cdc14", 
        "name": "77", 
        "compartments": [
            "intracellular"
        ], 
        "y": "16.754", 
        "x": "11.595", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "19"
        ], 
        "symbol": "rect", 
        "module": [
            "CDC_core"
        ], 
        "links_from": [
            "35"
        ], 
        "rate": "( int_vol *   ( kdp_Far1p  *  Far1_p_cyt )  )", 
        "name_alt": "v_Far1p_dp", 
        "name": "78", 
        "compartments": [
            "intracellular"
        ], 
        "y": "12.754", 
        "x": "16.012", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "51", 
            "29"
        ], 
        "symbol": "rect", 
        "module": [
            "CDC_core"
        ], 
        "links_from": [
            "33"
        ], 
        "rate": "( int_vol * ( kcd_Clb5_Sic1_Hp  *  Clb5_Sic1_Hp_cyt )  )", 
        "name_alt": "v_Clb5_diss_Sic1_Hp", 
        "name": "79", 
        "compartments": [
            "intracellular"
        ], 
        "y": "13.42", 
        "x": "16.012", 
        "is_ode": false
    }, 
    {
        "links_to": [], 
        "symbol": "rect", 
        "module": [
            "CDC_core"
        ], 
        "links_from": [
            "38", 
            "20"
        ], 
        "rate": "( int_vol *   ( ( kd_Clb2_APC  *  Clb2_cyt )  *  APC_cyt )  )", 
        "name_alt": "v_Clb2_d_APC", 
        "name": "80", 
        "compartments": [
            "intracellular"
        ], 
        "y": "8.6702", 
        "x": "9.8449", 
        "is_ode": false
    }, 
    {
        "links_to": [], 
        "symbol": "rect", 
        "module": [
            "CDC_core"
        ], 
        "links_from": [
            "23"
        ], 
        "rate": "( int_vol *   ( kd_Whi5p  *  Whi5_p_cyt )  )", 
        "name_alt": "v_Whi5_p_d", 
        "name": "81", 
        "compartments": [
            "intracellular"
        ], 
        "y": "8.6702", 
        "x": "10.762", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "28"
        ], 
        "symbol": "rect", 
        "module": [
            "CDC_core"
        ], 
        "links_from": [
            "16", 
            "25"
        ], 
        "rate": "( int_vol *    ( ( kpp_Swe1_Hls1  *  Swe1_cyt )  /  ( 1.0  + ( kI_Swe1_Hog1  *  Hog1_PP_cyt ) ) )   )", 
        "name_alt": "v_Swe1_Hog1", 
        "name": "82", 
        "compartments": [
            "intracellular"
        ], 
        "y": "16.92", 
        "x": "14.095", 
        "is_ode": false
    }, 
    {
        "links_to": [], 
        "symbol": "rect", 
        "module": [
            "CDC_core"
        ], 
        "links_from": [
            "41"
        ], 
        "rate": "( int_vol *   ( kd_Clb2_Sic1  *  Clb2_Sic1_cyt )  )", 
        "name_alt": "v_Clb2_Sic1_d", 
        "name": "83", 
        "compartments": [
            "intracellular"
        ], 
        "y": "16.92", 
        "x": "9.0949", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "39"
        ], 
        "symbol": "rect", 
        "module": [
            "CDC_core"
        ], 
        "links_from": [
            "51"
        ], 
        "rate": "( int_vol *   ( kdp_Sic1_Hp  *  Sic1_Hp_cyt )  )", 
        "name_alt": "v_Sic1_Hp_dp", 
        "name": "84", 
        "compartments": [
            "intracellular"
        ], 
        "y": "16.92", 
        "x": "8.1782", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "46"
        ], 
        "symbol": "rect", 
        "module": [
            "CDC_core"
        ], 
        "links_from": [
            "27"
        ], 
        "rate": "( int_vol *   ( ( kpp_Cln2_Far1p  *  Cln2_Far1_p_cyt )  *  Cln2_cyt )  )", 
        "name_alt": "v_Cln2_rel", 
        "name": "85", 
        "compartments": [
            "intracellular"
        ], 
        "y": "9.7536", 
        "x": "7.7616", 
        "is_ode": false
    }, 
    {
        "links_to": [], 
        "symbol": "rect", 
        "module": [
            "CDC_core"
        ], 
        "links_from": [
            "45", 
            "20"
        ], 
        "rate": "( int_vol *   ( ( kd_Clb3_APC  *  Clb3_cyt )  *  APC_cyt )  )", 
        "name_alt": "v_Clb3_d_APC", 
        "name": "86", 
        "compartments": [
            "intracellular"
        ], 
        "y": "15.92", 
        "x": "16.178", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "22"
        ], 
        "symbol": "rect", 
        "module": [
            "CDC_core"
        ], 
        "links_from": [
            "39", 
            "29"
        ], 
        "rate": "( int_vol *   ( (   kcf_Clb5_Sic1 )  *  Clb5_cyt )  *  Sic1_cyt )", 
        "name_alt": "v_Clb5_ass_Sic1", 
        "name": "87", 
        "compartments": [
            "intracellular"
        ], 
        "y": "8.4202", 
        "x": "11.928", 
        "is_ode": false
    }, 
    {
        "links_to": [], 
        "symbol": "rect", 
        "module": [
            "CDC_core"
        ], 
        "links_from": [
            "35", 
            "46"
        ], 
        "rate": "( int_vol *   ( ( kdd_Far1p  *  Far1_p_cyt )  *  Cln2_cyt )  )", 
        "name_alt": "v_Far1_p_dd", 
        "name": "88", 
        "compartments": [
            "intracellular"
        ], 
        "y": "12.087", 
        "x": "7.5949", 
        "is_ode": false
    }, 
    {
        "links_to": [], 
        "symbol": "rect", 
        "module": [
            "CDC_core"
        ], 
        "links_from": [
            "16"
        ], 
        "rate": "( int_vol *   ( kd_Swe1  *  Swe1_cyt )  )", 
        "name_alt": "v_Swe1_d", 
        "name": "89", 
        "compartments": [
            "intracellular"
        ], 
        "y": "8.3369", 
        "x": "12.845", 
        "is_ode": false
    }, 
    {
        "links_to": [], 
        "symbol": "rect", 
        "module": [
            "CDC_core"
        ], 
        "links_from": [
            "29", 
            "20"
        ], 
        "rate": "( int_vol *   ( ( kd_Clb5_APC  *  Clb5_cyt )  *  APC_cyt )  )", 
        "name_alt": "v_Clb5_d_APC", 
        "name": "90", 
        "compartments": [
            "intracellular"
        ], 
        "y": "11.42", 
        "x": "16.345", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "16"
        ], 
        "symbol": "rect", 
        "module": [
            "CDC_core"
        ], 
        "links_from": [], 
        "rate": "( int_vol *   kp_Swe1  )", 
        "name_alt": "v_Swe1_p", 
        "name": "91", 
        "compartments": [
            "intracellular"
        ], 
        "y": "16.254", 
        "x": "7.5116", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "24"
        ], 
        "symbol": "rect", 
        "module": [
            "CDC_core"
        ], 
        "links_from": [
            "21"
        ], 
        "rate": "( int_vol *   ( ki_Cdc14  *  Cdc14_p_cyt )  )", 
        "name_alt": "v_Cdc14_inakt", 
        "name": "92", 
        "compartments": [
            "intracellular"
        ], 
        "y": "15.587", 
        "x": "7.5116", 
        "is_ode": false
    }, 
    {
        "links_to": [], 
        "symbol": "rect", 
        "module": [
            "CDC_core"
        ], 
        "links_from": [
            "22"
        ], 
        "rate": "( int_vol *   ( kd_Clb5_Sic1  *  Clb5_Sic1_cyt )  )", 
        "name_alt": "v_Clb5_Sic1_d", 
        "name": "93", 
        "compartments": [
            "intracellular"
        ], 
        "y": "10.42", 
        "x": "7.5116", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "46", 
            "35"
        ], 
        "symbol": "rect", 
        "module": [
            "CDC_core"
        ], 
        "links_from": [
            "27"
        ], 
        "rate": "( int_vol *   ( kcd_Cln2_Far1p  *  Cln2_Far1_p_cyt )  )", 
        "name_alt": "v_Cln2_diss_Far1p", 
        "name": "94", 
        "compartments": [
            "intracellular"
        ], 
        "y": "8.2536", 
        "x": "15.595", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "38", 
            "39"
        ], 
        "symbol": "rect", 
        "module": [
            "CDC_core"
        ], 
        "links_from": [
            "41"
        ], 
        "rate": "( int_vol * ( kcd_Clb2_Sic1  *  Clb2_Sic1_cyt )  )", 
        "name_alt": "v_Clb2_diss_Sic1", 
        "name": "95", 
        "compartments": [
            "intracellular"
        ], 
        "y": "9.5869", 
        "x": "16.428", 
        "is_ode": false
    }, 
    {
        "links_to": [], 
        "symbol": "rect", 
        "module": [
            "CDC_core"
        ], 
        "links_from": [
            "26"
        ], 
        "rate": "( int_vol *   ( kd_Clb3_Sic1  *  Clb3_Sic1_cyt )  )", 
        "name_alt": "v_Clb3_Sic1_d", 
        "name": "96", 
        "compartments": [
            "intracellular"
        ], 
        "y": "10.254", 
        "x": "16.428", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "17"
        ], 
        "symbol": "rect", 
        "module": [
            "CDC_core"
        ], 
        "links_from": [
            "47", 
            "21"
        ], 
        "rate": "( int_vol *   ( ( kdp_Swi5_Cdc14  *  Swi5_p_cyt )  *  Cdc14_p_cyt )  )", 
        "name_alt": "v_Swi5_dp", 
        "name": "97", 
        "compartments": [
            "intracellular"
        ], 
        "y": "12.087", 
        "x": "16.428", 
        "is_ode": false
    }, 
    {
        "links_to": [], 
        "symbol": "rect", 
        "module": [
            "CDC_core"
        ], 
        "links_from": [
            "29"
        ], 
        "rate": "( int_vol *   ( kd_Clb5  *  Clb5_cyt )  )", 
        "name_alt": "v_Clb5_d", 
        "name": "98", 
        "compartments": [
            "intracellular"
        ], 
        "y": "15.004", 
        "x": "16.428", 
        "is_ode": false
    }, 
    {
        "links_to": [], 
        "symbol": "rect", 
        "module": [
            "CDC_core"
        ], 
        "links_from": [
            "20"
        ], 
        "rate": "( int_vol *   ( kd_APC  *  APC_cyt )  )", 
        "name_alt": "v_APC_d", 
        "name": "99", 
        "compartments": [
            "intracellular"
        ], 
        "y": "13.337", 
        "x": "7.4282", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "51"
        ], 
        "symbol": "rect", 
        "module": [
            "CDC_core"
        ], 
        "links_from": [
            "39", 
            "25"
        ], 
        "rate": "( int_vol *   ( ( kpp_Sic1_Hog1  *  Hog1_PP_cyt )  *  Sic1_cyt )  )", 
        "name_alt": "v_Sic1_pp_Hog1", 
        "name": "100", 
        "compartments": [
            "intracellular"
        ], 
        "y": "8.1702", 
        "x": "16.512", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "31"
        ], 
        "symbol": "rect", 
        "module": [
            "CDC_core"
        ], 
        "links_from": [
            "39", 
            "46", 
            "29"
        ], 
        "rate": "( int_vol *   ( Sic1_cyt  *  (  ( ( kpp_Cln2_Sic1  *  ( (Cln2_cyt)  **  n1 ) )  /  ( ( Kpp_Cln2_Sic1  **  n1 )  + ( (Cln2_cyt)  **  n1 ) ) )   +  ( ( kpp_Clb5_Sic1  *  ( (Clb5_cyt)  **  n1 ) )  /  ( ( Kpp_Clb5_Sic1  **  n1 )  + ( (Clb5_cyt)  **  n1 ) ) )  ) )  )", 
        "name_alt": "v_Sic1_pp", 
        "name": "101", 
        "compartments": [
            "intracellular"
        ], 
        "y": "17.337", 
        "x": "10.678", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "21"
        ], 
        "symbol": "rect", 
        "module": [
            "CDC_core"
        ], 
        "links_from": [
            "24", 
            "38"
        ], 
        "rate": "( int_vol *   ( ( kpp_Cdc14_Clb2  *  Cdc14_cyt )  *  Clb2_cyt )  )", 
        "name_alt": "v_Cdc14_akt_Clb2", 
        "name": "102", 
        "compartments": [
            "intracellular"
        ], 
        "y": "8.1702", 
        "x": "7.3449", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "44"
        ], 
        "symbol": "rect", 
        "module": [
            "CDC_core"
        ], 
        "links_from": [
            "38"
        ], 
        "rate": "( int_vol *    ( ( kp_Mcm1  *  ( (Clb2_cyt)  **  n_Mcm1 ) )  /  ( ( Kp_Mcm1  **  n_Mcm1 )  + ( (Clb2_cyt)  **  n_Mcm1 ) ) )   )", 
        "name_alt": "v_Mcm1_p_Clb2_fb", 
        "name": "103", 
        "compartments": [
            "intracellular"
        ], 
        "y": "8.1702", 
        "x": "8.2616", 
        "is_ode": false
    }, 
    {
        "links_to": [], 
        "symbol": "rect", 
        "module": [
            "CDC_core"
        ], 
        "links_from": [
            "45"
        ], 
        "rate": "( int_vol *   ( kd_Clb3  *  Clb3_cyt )  )", 
        "name_alt": "v_Clb3_d", 
        "name": "104", 
        "compartments": [
            "intracellular"
        ], 
        "y": "8.0869", 
        "x": "13.762", 
        "is_ode": false
    }, 
    {
        "links_to": [], 
        "symbol": "rect", 
        "module": [
            "CDC_core"
        ], 
        "links_from": [
            "43"
        ], 
        "rate": "( int_vol *   ( kd_APC_p  *  APC_p_cyt )  )", 
        "name_alt": "v_APC_p_d", 
        "name": "105", 
        "compartments": [
            "intracellular"
        ], 
        "y": "8.0869", 
        "x": "14.678", 
        "is_ode": false
    }, 
    {
        "links_to": [], 
        "symbol": "rect", 
        "module": [
            "CDC_core"
        ], 
        "links_from": [
            "36"
        ], 
        "rate": "( int_vol * ( kd_Clb2_p  *  Clb2_p_cyt )  )", 
        "name_alt": "v_Clb2_p_d", 
        "name": "106", 
        "compartments": [
            "intracellular"
        ], 
        "y": "17.42", 
        "x": "16.595", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "49"
        ], 
        "symbol": "rect", 
        "module": [
            "CDC_core"
        ], 
        "links_from": [
            "32", 
            "35"
        ], 
        "rate": "( int_vol *   ( ( kcf_Cln3_Far1p  *  Cln3_cyt )  *  Far1_p_cyt )  )", 
        "name_alt": "v_Cln3_ass_Far1p", 
        "name": "107", 
        "compartments": [
            "intracellular"
        ], 
        "y": "17.42", 
        "x": "15.678", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "31", 
            "29"
        ], 
        "symbol": "rect", 
        "module": [
            "CDC_core"
        ], 
        "links_from": [
            "22", 
            "46"
        ], 
        "rate": "( int_vol *   ( Clb5_Sic1_cyt  *  (  ( ( kpp_Cln2_Sic1  *  ( (Cln2_cyt)  **  n1 ) )  /  ( ( Kpp_Cln2_Sic1  **  n1 )  + ( (Cln2_cyt)  **  n1 ) ) )   +  ( ( kpp_Clb5_Sic1  *  ( (Clb5_cyt)  **  n1 ) )  /  ( ( Kpp_Clb5_Sic1  **  n1 )  + ( (Clb5_cyt)  **  n1 ) ) )  ) )  )", 
        "name_alt": "v_Clb5_rel", 
        "name": "108", 
        "compartments": [
            "intracellular"
        ], 
        "y": "17.42", 
        "x": "13.178", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "17"
        ], 
        "symbol": "rect", 
        "module": [
            "CDC_core"
        ], 
        "links_from": [
            "44"
        ], 
        "rate": "( int_vol *    ( ( kp_Swi5  *  Mcm1_nuc )  /  ( Kp_Swi5  + Mcm1_nuc ) )   )", 
        "name_alt": "v_Swi5_p", 
        "name": "109", 
        "compartments": [
            "intracellular"
        ], 
        "y": "17.42", 
        "x": "12.262", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "22"
        ], 
        "symbol": "rect", 
        "module": [
            "CDC_core"
        ], 
        "links_from": [
            "33"
        ], 
        "rate": "( int_vol *   ( kdp_Clb5_Sic1_Hp  *  Clb5_Sic1_Hp_cyt )  )", 
        "name_alt": "v_Clb5_Sic1_Hp_dp", 
        "name": "110", 
        "compartments": [
            "intracellular"
        ], 
        "y": "17.42", 
        "x": "7.2616", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "46"
        ], 
        "symbol": "rect", 
        "module": [
            "CDC_core"
        ], 
        "links_from": [
            "48", 
            "25"
        ], 
        "rate": "( int_vol *    (  ( ( kp_Cln2  *  SBF_nuc )  /  ( Kp_Cln2  + SBF_nuc ) )   /  ( 1.0  + ( kI_Cln2_Hog1  *  Hog1_PP_cyt ) ) )   )", 
        "name_alt": "v_Cln2_p", 
        "name": "111", 
        "compartments": [
            "intracellular"
        ], 
        "y": "11.42", 
        "x": "7.2616", 
        "is_ode": false
    }, 
    {
        "links_to": [], 
        "symbol": "rect", 
        "module": [
            "CDC_core"
        ], 
        "links_from": [
            "49"
        ], 
        "rate": "( int_vol *   ( kd_Cln3_Far1p  *  Cln3_Far1_p_cyt )  )", 
        "name_alt": "v_Cln3_Far1p_d", 
        "name": "112", 
        "compartments": [
            "intracellular"
        ], 
        "y": "8.8369", 
        "x": "16.678", 
        "is_ode": false
    }, 
    {
        "links_to": [], 
        "symbol": "rect", 
        "module": [
            "CDC_core"
        ], 
        "links_from": [
            "17"
        ], 
        "rate": "( int_vol *   ( kd_Swi5  *  Swi5_nuc )  )", 
        "name_alt": "v_Swi5_d", 
        "name": "113", 
        "compartments": [
            "intracellular"
        ], 
        "y": "14.087", 
        "x": "16.678", 
        "is_ode": false
    }, 
    {
        "links_to": [], 
        "symbol": "rect", 
        "module": [
            "CDC_core"
        ], 
        "links_from": [
            "46"
        ], 
        "rate": "( int_vol *   ( kd_Cln2  *  Cln2_cyt )  )", 
        "name_alt": "v_Cln2_d", 
        "name": "114", 
        "compartments": [
            "intracellular"
        ], 
        "y": "14.254", 
        "x": "7.1782", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "32"
        ], 
        "symbol": "rect", 
        "module": [
            "CDC_core"
        ], 
        "links_from": [
            "49", 
            "46"
        ], 
        "rate": "( int_vol *   ( ( kpp_Cln2_Far1p  *  Cln3_Far1_p_cyt )  *  Cln2_cyt )  )", 
        "name_alt": "v_Cln3_rel", 
        "name": "115", 
        "compartments": [
            "intracellular"
        ], 
        "y": "8.0036", 
        "x": "9.1782", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "44"
        ], 
        "symbol": "rect", 
        "module": [
            "CDC_core"
        ], 
        "links_from": [
            "45"
        ], 
        "rate": "( int_vol *    ( ( v0_Mcm1  *  ( (Clb3_cyt)  **  n_Mcm1 ) )  /  ( ( V0_Mcm1  **  n_Mcm1 )  + ( (Clb3_cyt)  **  n_Mcm1 ) ) )   )", 
        "name_alt": "v_Mcm1_p_basal", 
        "name": "116", 
        "compartments": [
            "intracellular"
        ], 
        "y": "8.0036", 
        "x": "10.095", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "35"
        ], 
        "symbol": "rect", 
        "module": [
            "CDC_core"
        ], 
        "links_from": [
            "19", 
            "40"
        ], 
        "rate": "( int_vol *   ( ( kpp_Far1  *  Far1_cyt )  *  Fus3_cyt )  )", 
        "name_alt": "v_Far1_pp", 
        "name": "117", 
        "compartments": [
            "intracellular"
        ], 
        "y": "8.0036", 
        "x": "11.012", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "47"
        ], 
        "symbol": "rect", 
        "module": [
            "CDC_core"
        ], 
        "links_from": [
            "17", 
            "29"
        ], 
        "rate": "( int_vol *   ( ( kpp_Swi5_Clb5  *  Swi5_nuc )  *  Clb5_cyt )  )", 
        "name_alt": "v_Swi5_pp_Clb5", 
        "name": "118", 
        "compartments": [
            "intracellular"
        ], 
        "y": "17.587", 
        "x": "14.762", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "47"
        ], 
        "symbol": "rect", 
        "module": [
            "CDC_core"
        ], 
        "links_from": [
            "17", 
            "38"
        ], 
        "rate": "( int_vol *   ( ( kpp_Swi5_Clb2  *  Swi5_nuc )  *  Clb2_cyt )  )", 
        "name_alt": "v_Swi5_pp_Clb2", 
        "name": "119", 
        "compartments": [
            "intracellular"
        ], 
        "y": "17.587", 
        "x": "9.7616", 
        "is_ode": false
    }, 
    {
        "links_to": [], 
        "symbol": "rect", 
        "module": [
            "CDC_core"
        ], 
        "links_from": [
            "28"
        ], 
        "rate": "( int_vol *   ( kd_Swe1_p  *  Swe1_p_cyt )  )", 
        "name_alt": "v_Swe1_p_d", 
        "name": "120", 
        "compartments": [
            "intracellular"
        ], 
        "y": "17.587", 
        "x": "8.8449", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "36"
        ], 
        "symbol": "rect", 
        "module": [
            "CDC_core"
        ], 
        "links_from": [
            "38", 
            "16"
        ], 
        "rate": "( int_vol *   ( ( kpp_Clb2  *  Clb2_cyt )  *  Swe1_cyt )  )", 
        "name_alt": "v_Clb2_pp", 
        "name": "121", 
        "compartments": [
            "intracellular"
        ], 
        "y": "14.92", 
        "x": "7.0949", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "45"
        ], 
        "symbol": "rect", 
        "module": [
            "CDC_core"
        ], 
        "links_from": [
            "29"
        ], 
        "rate": "( int_vol *    ( ( kp_Clb3  *  ( (Clb5_cyt)  **  n_Clb3 ) )  /  ( ( Kp_Clb3  **  n_Clb3 )  + ( (Clb5_cyt)  **  n_Clb3 ) ) )   )", 
        "name_alt": "v_Clb3_p_Clb5", 
        "name": "122", 
        "compartments": [
            "intracellular"
        ], 
        "y": "9.0869", 
        "x": "7.0949", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "43"
        ], 
        "symbol": "rect", 
        "module": [
            "CDC_core"
        ], 
        "links_from": [
            "20", 
            "38"
        ], 
        "rate": "( int_vol *   ( ( kpp_APC_Clb2  *  APC_cyt )  *  Clb2_cyt )  )", 
        "name_alt": "v_APC_inakt_Clb2", 
        "name": "123", 
        "compartments": [
            "intracellular"
        ], 
        "y": "16.587", 
        "x": "16.845", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "43"
        ], 
        "symbol": "rect", 
        "module": [
            "CDC_core"
        ], 
        "links_from": [
            "20", 
            "29"
        ], 
        "rate": "( int_vol *   ( ( kpp_APC_Clb5  *  APC_cyt )  *  Clb5_cyt )  )", 
        "name_alt": "v_APC_inakt_Clb5", 
        "name": "124", 
        "compartments": [
            "intracellular"
        ], 
        "y": "7.7536", 
        "x": "11.928", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "38"
        ], 
        "symbol": "rect", 
        "module": [
            "CDC_core"
        ], 
        "links_from": [
            "25", 
            "44"
        ], 
        "rate": "( int_vol *    (  ( ( kp_Clb2  *  Mcm1_nuc )  /  ( Kp_Clb2  + Mcm1_nuc ) )   /  ( 1.0  + ( kI_Clb2_Hog1  *  Hog1_PP_cyt ) ) )   )", 
        "name_alt": "v_Clb2_p", 
        "name": "125", 
        "compartments": [
            "intracellular"
        ], 
        "y": "12.754", 
        "x": "16.928", 
        "is_ode": false
    }, 
    {
        "links_to": [], 
        "symbol": "rect", 
        "module": [
            "CDC_core"
        ], 
        "links_from": [
            "50"
        ], 
        "rate": "( int_vol *   ( kd_MBF  *  MBF_nuc )  )", 
        "name_alt": "v_MBF_d", 
        "name": "126", 
        "compartments": [
            "intracellular"
        ], 
        "y": "13.42", 
        "x": "16.928", 
        "is_ode": false
    }, 
    {
        "links_to": [], 
        "symbol": "rect", 
        "module": [
            "CDC_core"
        ], 
        "links_from": [
            "30"
        ], 
        "rate": "( int_vol *   ( kd_Whi5  *  Whi5_cyt )  )", 
        "name_alt": "v_Whi5_d", 
        "name": "127", 
        "compartments": [
            "intracellular"
        ], 
        "y": "7.6702", 
        "x": "12.845", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "33"
        ], 
        "symbol": "rect", 
        "module": [
            "CDC_core"
        ], 
        "links_from": [
            "22", 
            "25"
        ], 
        "rate": "( int_vol *   ( ( kpp_Clb5_Sic1_Hog1  *  Hog1_PP_cyt )  *  Clb5_Sic1_cyt)  )", 
        "name_alt": "v_Clb5_Sic1_pp_Hog1", 
        "name": "128", 
        "compartments": [
            "intracellular"
        ], 
        "y": "9.7536", 
        "x": "6.8449", 
        "is_ode": false
    }, 
    {
        "links_to": [], 
        "symbol": "rect", 
        "module": [
            "CDC_core"
        ], 
        "links_from": [
            "38"
        ], 
        "rate": "( int_vol *   ( kd_Clb2  *  Clb2_cyt )  )", 
        "name_alt": "v_Clb2_d", 
        "name": "129", 
        "compartments": [
            "intracellular"
        ], 
        "y": "7.5869", 
        "x": "15.595", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "30"
        ], 
        "symbol": "rect", 
        "module": [
            "CDC_core"
        ], 
        "links_from": [
            "23", 
            "21"
        ], 
        "rate": "( int_vol *   ( ( Whi5_p_cyt  *  kdp_Whi5 )  *  Cdc14_p_cyt )  )", 
        "name_alt": "v_Whi5p_dp", 
        "name": "130", 
        "compartments": [
            "intracellular"
        ], 
        "y": "15.67", 
        "x": "17.095", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "30"
        ], 
        "symbol": "rect", 
        "module": [
            "CDC_core"
        ], 
        "links_from": [], 
        "rate": "( int_vol *   kp_Whi5  )", 
        "name_alt": "v_Whi5_p", 
        "name": "131", 
        "compartments": [
            "intracellular"
        ], 
        "y": "7.5036", 
        "x": "16.512", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "26"
        ], 
        "symbol": "rect", 
        "module": [
            "CDC_core"
        ], 
        "links_from": [
            "45", 
            "39"
        ], 
        "rate": "( int_vol *   ( (   kcf_Clb3_Sic1 )  *  Clb3_cyt )  *  Sic1_cyt )", 
        "name_alt": "v_Clb3_ass_Sic1", 
        "name": "132", 
        "compartments": [
            "intracellular"
        ], 
        "y": "18.004", 
        "x": "11.345", 
        "is_ode": false
    }, 
    {
        "links_to": [], 
        "symbol": "rect", 
        "module": [
            "CDC_core"
        ], 
        "links_from": [
            "34"
        ], 
        "rate": "( int_vol *   ( kd_Mih1  *  Mih1_cyt )  )", 
        "name_alt": "v_Mih1_d", 
        "name": "133", 
        "compartments": [
            "intracellular"
        ], 
        "y": "12.67", 
        "x": "6.6782", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "39", 
            "29"
        ], 
        "symbol": "rect", 
        "module": [
            "CDC_core"
        ], 
        "links_from": [
            "22"
        ], 
        "rate": "( int_vol * ( kcd_Clb5_Sic1  *  Clb5_Sic1_cyt )  )", 
        "name_alt": "v_Clb5_diss_Sic1", 
        "name": "134", 
        "compartments": [
            "intracellular"
        ], 
        "y": "7.5036", 
        "x": "6.6782", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "21"
        ], 
        "symbol": "rect", 
        "module": [
            "CDC_core"
        ], 
        "links_from": [
            "24", 
            "20"
        ], 
        "rate": "( int_vol *   ( ( ka_Cdc14_APC  *  Cdc14_cyt )  *  APC_cyt )  )", 
        "name_alt": "v_Cdc14_akt_APC", 
        "name": "135", 
        "compartments": [
            "intracellular"
        ], 
        "y": "7.5036", 
        "x": "7.5949", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "20"
        ], 
        "symbol": "rect", 
        "module": [
            "CDC_core"
        ], 
        "links_from": [
            "44"
        ], 
        "rate": "( int_vol *    ( ( kp_APC  *  Mcm1_nuc )  /  ( Kp_APC  + Mcm1_nuc ) )   )", 
        "name_alt": "v_APC_akt_p_Mcm1", 
        "name": "136", 
        "compartments": [
            "intracellular"
        ], 
        "y": "7.4202", 
        "x": "13.762", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "34"
        ], 
        "symbol": "rect", 
        "module": [
            "CDC_core"
        ], 
        "links_from": [], 
        "rate": "( int_vol *   kp_Mih1  )", 
        "name_alt": "v_Mih1_p", 
        "name": "137", 
        "compartments": [
            "intracellular"
        ], 
        "y": "7.4202", 
        "x": "14.678", 
        "is_ode": false
    }, 
    {
        "links_to": [], 
        "symbol": "rect", 
        "module": [
            "CDC_core"
        ], 
        "links_from": [
            "32"
        ], 
        "rate": "( int_vol *   ( kd_Cln3  *  Cln3_cyt )  )", 
        "name_alt": "v_Cln3_d", 
        "name": "138", 
        "compartments": [
            "intracellular"
        ], 
        "y": "10.92", 
        "x": "17.262", 
        "is_ode": false
    }, 
    {
        "links_to": [], 
        "symbol": "rect", 
        "module": [
            "CDC_core"
        ], 
        "links_from": [
            "42"
        ], 
        "rate": "( int_vol *   ( kd_Whi5_SBF  *  SBF_Whi5_nuc )  )", 
        "name_alt": "v_Whi5_SBF_d", 
        "name": "139", 
        "compartments": [
            "intracellular"
        ], 
        "y": "18.087", 
        "x": "17.262", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "32"
        ], 
        "symbol": "rect", 
        "module": [
            "CDC_core"
        ], 
        "links_from": [], 
        "rate": "( int_vol *   kp_Cln3  )", 
        "name_alt": "v_Cln3_p", 
        "name": "140", 
        "compartments": [
            "intracellular"
        ], 
        "y": "18.087", 
        "x": "16.345", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "146"
        ], 
        "symbol": "circle", 
        "module": [
            "GEX_APC"
        ], 
        "y": "18.087", 
        "annotation": "YCM:rRNA", 
        "name_alt": "rRNA", 
        "name": "141", 
        "state": "0", 
        "links_from": [
            "145"
        ], 
        "x": "13.845", 
        "compartment": "intracellular", 
        "is_ode": false
    }, 
    {
        "links_to": [], 
        "symbol": "circle", 
        "module": [
            "GEX_APC", 
            "GEX_TRL"
        ], 
        "y": "33.841", 
        "annotation": "SBO:0000468", 
        "name_alt": "cyt_vol", 
        "name": "142", 
        "state": "0", 
        "links_from": [], 
        "x": "5.6464", 
        "compartment": "cytosol", 
        "is_ode": true
    }, 
    {
        "links_to": [
            "146", 
            "273"
        ], 
        "symbol": "circle", 
        "module": [
            "GEX_APC", 
            "GEX_TRL"
        ], 
        "y": "18.087", 
        "annotation": "YCM:B_Protein_R", 
        "name_alt": "B_Protein_R", 
        "name": "143", 
        "state": "0", 
        "links_from": [
            "145", 
            "272"
        ], 
        "x": "12.928", 
        "compartment": "intracellular", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "145", 
            "269", 
            "271", 
            "277", 
            "259"
        ], 
        "symbol": "circle", 
        "module": [
            "GEX_APC", 
            "GEX_TRL"
        ], 
        "y": "18.087", 
        "annotation": "YCM:ribosome", 
        "name_alt": "Ribosome", 
        "name": "144", 
        "state": "0", 
        "links_from": [
            "146", 
            "274", 
            "276", 
            "278"
        ], 
        "x": "7.9282", 
        "compartment": "intracellular", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "143", 
            "141"
        ], 
        "symbol": "rect", 
        "module": [
            "GEX_APC"
        ], 
        "links_from": [
            "144"
        ], 
        "rate": "(k_DIS_Ribosome * Ribosome)*int_vol", 
        "name_alt": "v_DIS_Ribosome", 
        "name": "145", 
        "compartments": [
            "intracellular"
        ], 
        "y": "18.087", 
        "x": "7.0116", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "144"
        ], 
        "symbol": "rect", 
        "module": [
            "GEX_APC"
        ], 
        "links_from": [
            "143", 
            "141"
        ], 
        "rate": "(k_ASS_Ribosome * rRNA * B_Protein_R)*int_vol", 
        "name_alt": "v_ASS_Ribosome", 
        "name": "146", 
        "compartments": [
            "intracellular"
        ], 
        "y": "16.754", 
        "x": "6.5949", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "193", 
            "230"
        ], 
        "symbol": "circle", 
        "module": [
            "GEX_GRN"
        ], 
        "y": "16.087", 
        "annotation": "SGD:S000005609p", 
        "name_alt": "mWhi5", 
        "name": "147", 
        "state": "mRNA", 
        "links_from": [
            "190"
        ], 
        "x": "6.5949", 
        "compartment": "intracellular", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "217", 
            "224"
        ], 
        "symbol": "circle", 
        "module": [
            "GEX_GRN"
        ], 
        "y": "10.754", 
        "annotation": "SGD:S000002214p_SGD:S000004172p", 
        "name_alt": "mMBF", 
        "name": "148", 
        "state": "mRNA", 
        "links_from": [
            "231"
        ], 
        "x": "6.5949", 
        "compartment": "intracellular", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "195", 
            "222"
        ], 
        "symbol": "circle", 
        "module": [
            "GEX_GRN"
        ], 
        "y": "9.5036", 
        "annotation": "SGD:S000000038p", 
        "name_alt": "mCln3", 
        "name": "149", 
        "state": "mRNA", 
        "links_from": [
            "189"
        ], 
        "x": "17.345", 
        "compartment": "intracellular", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "243", 
            "248"
        ], 
        "symbol": "circle", 
        "module": [
            "GEX_GRN"
        ], 
        "y": "10.17", 
        "annotation": "SGD:S000006177p", 
        "name_alt": "mCln2", 
        "name": "150", 
        "state": "mRNA", 
        "links_from": [
            "212"
        ], 
        "x": "17.345", 
        "compartment": "intracellular", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "202"
        ], 
        "symbol": "circle", 
        "module": [
            "GEX_GRN"
        ], 
        "y": "11.587", 
        "annotation": "SGD:S000001924p", 
        "name_alt": "Cdc14", 
        "name": "151", 
        "state": "0", 
        "links_from": [
            "191"
        ], 
        "x": "17.345", 
        "compartment": "intracellular", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "249", 
            "258"
        ], 
        "symbol": "circle", 
        "module": [
            "GEX_GRN"
        ], 
        "y": "14.754", 
        "annotation": "SGD:S000002553p", 
        "name_alt": "mSwi5", 
        "name": "152", 
        "state": "mRNA", 
        "links_from": [
            "250"
        ], 
        "x": "17.345", 
        "compartment": "intracellular", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "189", 
            "190", 
            "192", 
            "197", 
            "204", 
            "208", 
            "209", 
            "212", 
            "214", 
            "216", 
            "221", 
            "231", 
            "238", 
            "247", 
            "250", 
            "255"
        ], 
        "symbol": "circle", 
        "module": [
            "GEX_GRN"
        ], 
        "y": "13.587", 
        "annotation": "YCM:NA", 
        "name_alt": "NA", 
        "name": "153", 
        "state": "0", 
        "links_from": [
            "203", 
            "205", 
            "211", 
            "215", 
            "217", 
            "222", 
            "225", 
            "229", 
            "230", 
            "235", 
            "236", 
            "241", 
            "242", 
            "243", 
            "245", 
            "249"
        ], 
        "x": "6.5116", 
        "compartment": "intracellular", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "205", 
            "246"
        ], 
        "symbol": "circle", 
        "module": [
            "GEX_GRN"
        ], 
        "y": "7.3369", 
        "annotation": "SGD:S000002314p", 
        "name_alt": "mClb3", 
        "name": "154", 
        "state": "mRNA", 
        "links_from": [
            "221"
        ], 
        "x": "8.5116", 
        "compartment": "intracellular", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "227", 
            "242"
        ], 
        "symbol": "circle", 
        "module": [
            "GEX_GRN"
        ], 
        "y": "7.3369", 
        "annotation": "SGD:S000006323p", 
        "name_alt": "mClb2", 
        "name": "155", 
        "state": "mRNA", 
        "links_from": [
            "247"
        ], 
        "x": "9.4282", 
        "compartment": "intracellular", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "210"
        ], 
        "symbol": "circle", 
        "module": [
            "GEX_GRN"
        ], 
        "y": "7.3369", 
        "annotation": "SGD:S000004639p", 
        "name_alt": "Mih1", 
        "name": "156", 
        "state": "0", 
        "links_from": [
            "254"
        ], 
        "x": "10.345", 
        "compartment": "intracellular", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "215", 
            "257"
        ], 
        "symbol": "circle", 
        "module": [
            "GEX_GRN"
        ], 
        "y": "7.2536", 
        "annotation": "SGD:S000006324p", 
        "name_alt": "mClb5", 
        "name": "157", 
        "state": "mRNA", 
        "links_from": [
            "216"
        ], 
        "x": "17.428", 
        "compartment": "intracellular", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "213", 
            "241"
        ], 
        "symbol": "circle", 
        "module": [
            "GEX_GRN"
        ], 
        "y": "7.9202", 
        "annotation": "SGD:S000003723p", 
        "name_alt": "mSwe1", 
        "name": "158", 
        "state": "mRNA", 
        "links_from": [
            "208"
        ], 
        "x": "17.428", 
        "compartment": "intracellular", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "239", 
            "252"
        ], 
        "symbol": "circle", 
        "module": [
            "GEX_GRN"
        ], 
        "y": "18.254", 
        "annotation": "SGD:S000003693p", 
        "name_alt": "Far1", 
        "name": "159", 
        "state": "0", 
        "links_from": [
            "234"
        ], 
        "x": "15.428", 
        "compartment": "intracellular", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "307", 
            "310", 
            "315", 
            "318"
        ], 
        "symbol": "circle", 
        "module": [
            "GEX_GRN", 
            "GEX_TRL", 
            "MET_CCM", 
            "TRP_NUT"
        ], 
        "y": "18.254", 
        "annotation": "CHEBI:456216", 
        "name_alt": "ADP", 
        "name": "160", 
        "state": "-3", 
        "links_from": [
            "189", 
            "190", 
            "191", 
            "192", 
            "193", 
            "195", 
            "197", 
            "198", 
            "199", 
            "204", 
            "208", 
            "209", 
            "212", 
            "213", 
            "214", 
            "216", 
            "221", 
            "223", 
            "224", 
            "227", 
            "231", 
            "234", 
            "238", 
            "240", 
            "246", 
            "247", 
            "248", 
            "250", 
            "254", 
            "255", 
            "257", 
            "258", 
            "272", 
            "279", 
            "280", 
            "304", 
            "305", 
            "306", 
            "309", 
            "311", 
            "313", 
            "314", 
            "316", 
            "317", 
            "320"
        ], 
        "x": "10.428", 
        "compartment": "intracellular", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "234", 
            "245"
        ], 
        "symbol": "circle", 
        "module": [
            "GEX_GRN"
        ], 
        "y": "18.254", 
        "annotation": "SGD:S000003693p", 
        "name_alt": "mFar1", 
        "name": "161", 
        "state": "mRNA", 
        "links_from": [
            "238"
        ], 
        "x": "9.5116", 
        "compartment": "intracellular", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "253"
        ], 
        "symbol": "circle", 
        "module": [
            "GEX_GRN"
        ], 
        "y": "8.4202", 
        "annotation": "SGD:S000004069p", 
        "name_alt": "Sic1", 
        "name": "162", 
        "state": "0", 
        "links_from": [
            "198"
        ], 
        "x": "6.4282", 
        "compartment": "intracellular", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "194", 
            "209", 
            "226"
        ], 
        "symbol": "circle", 
        "module": [
            "GEX_GRN"
        ], 
        "y": "17.254", 
        "annotation": "SGD:S000002314p", 
        "name_alt": "Clb3", 
        "name": "163", 
        "state": "0", 
        "links_from": [
            "246"
        ], 
        "x": "17.512", 
        "compartment": "intracellular", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "209", 
            "233", 
            "237"
        ], 
        "symbol": "circle", 
        "module": [
            "GEX_GRN"
        ], 
        "y": "17.42", 
        "annotation": "SGD:S000006323p", 
        "name_alt": "Clb2", 
        "name": "164", 
        "state": "0", 
        "links_from": [
            "227"
        ], 
        "x": "6.3449", 
        "compartment": "intracellular", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "203", 
            "254"
        ], 
        "symbol": "circle", 
        "module": [
            "GEX_GRN"
        ], 
        "y": "12.004", 
        "annotation": "SGD:S000004639p", 
        "name_alt": "mMih1", 
        "name": "165", 
        "state": "mRNA", 
        "links_from": [
            "255"
        ], 
        "x": "6.3449", 
        "compartment": "intracellular", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "221", 
            "228", 
            "244", 
            "326"
        ], 
        "symbol": "circle", 
        "module": [
            "GEX_GRN", 
            "MET_DNA"
        ], 
        "y": "12.532", 
        "annotation": "SGD:S000006324p", 
        "name_alt": "Clb5", 
        "name": "166", 
        "state": "0", 
        "links_from": [
            "257"
        ], 
        "x": "13.675", 
        "compartment": "intracellular", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "238"
        ], 
        "symbol": "circle", 
        "module": [
            "GEX_GRN"
        ], 
        "y": "7.0869", 
        "annotation": "SGD:S000000112p", 
        "name_alt": "Fus3", 
        "name": "167", 
        "state": "0", 
        "links_from": [], 
        "x": "11.928", 
        "compartment": "intracellular", 
        "is_ode": true
    }, 
    {
        "links_to": [
            "219"
        ], 
        "symbol": "circle", 
        "module": [
            "GEX_GRN"
        ], 
        "y": "8.5869", 
        "annotation": "SGD:S000000038p", 
        "name_alt": "Cln3", 
        "name": "168", 
        "state": "0", 
        "links_from": [
            "195"
        ], 
        "x": "17.595", 
        "compartment": "intracellular", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "196", 
            "231", 
            "252"
        ], 
        "symbol": "circle", 
        "module": [
            "GEX_GRN"
        ], 
        "y": "14.087", 
        "annotation": "SGD:S000006177p", 
        "name_alt": "Cln2", 
        "name": "169", 
        "state": "0", 
        "links_from": [
            "248"
        ], 
        "x": "17.595", 
        "compartment": "intracellular", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "194", 
            "200", 
            "233", 
            "244"
        ], 
        "symbol": "circle", 
        "module": [
            "GEX_GRN"
        ], 
        "y": "14.254", 
        "annotation": "SGD:S000002971p", 
        "name_alt": "APC", 
        "name": "170", 
        "state": "0", 
        "links_from": [
            "199"
        ], 
        "x": "6.2616", 
        "compartment": "intracellular", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "236", 
            "240"
        ], 
        "symbol": "circle", 
        "module": [
            "GEX_GRN"
        ], 
        "y": "7.0036", 
        "annotation": "SGD:S000004646p", 
        "name_alt": "mMcm1", 
        "name": "171", 
        "state": "mRNA", 
        "links_from": [
            "209"
        ], 
        "x": "12.845", 
        "compartment": "intracellular", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "189", 
            "190", 
            "191", 
            "192", 
            "193", 
            "195", 
            "197", 
            "198", 
            "199", 
            "204", 
            "208", 
            "209", 
            "212", 
            "213", 
            "214", 
            "216", 
            "221", 
            "223", 
            "224", 
            "227", 
            "231", 
            "234", 
            "238", 
            "240", 
            "246", 
            "247", 
            "248", 
            "250", 
            "254", 
            "255", 
            "257", 
            "258", 
            "272", 
            "279", 
            "280", 
            "304", 
            "305", 
            "306", 
            "309", 
            "311", 
            "313", 
            "314", 
            "316", 
            "317", 
            "320"
        ], 
        "symbol": "circle", 
        "module": [
            "GEX_GRN", 
            "GEX_TRL", 
            "MET_CCM", 
            "TRP_NUT"
        ], 
        "y": "15.42", 
        "annotation": "CHEBI:30616", 
        "name_alt": "ATP", 
        "name": "172", 
        "state": "-4", 
        "links_from": [
            "307", 
            "315", 
            "318"
        ], 
        "x": "6.1782", 
        "compartment": "intracellular", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "220"
        ], 
        "symbol": "circle", 
        "module": [
            "GEX_GRN"
        ], 
        "y": "9.0869", 
        "annotation": "SGD:S000001924p", 
        "name_alt": "Cdc14_p", 
        "name": "173", 
        "state": "P", 
        "links_from": [], 
        "x": "6.1782", 
        "compartment": "intracellular", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "204", 
            "247", 
            "250", 
            "256"
        ], 
        "symbol": "circle", 
        "module": [
            "GEX_GRN"
        ], 
        "y": "6.9202", 
        "annotation": "SGD:S000004646p", 
        "name_alt": "Mcm1", 
        "name": "174", 
        "state": "0", 
        "links_from": [
            "240"
        ], 
        "x": "15.595", 
        "compartment": "intracellular", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "307", 
            "315", 
            "316", 
            "318"
        ], 
        "symbol": "circle", 
        "module": [
            "GEX_GRN", 
            "MET_CCM", 
            "TRP_NUT"
        ], 
        "y": "16.337", 
        "annotation": "CHEBI:43474", 
        "name_alt": "Pi", 
        "name": "175", 
        "state": "-2", 
        "links_from": [
            "189", 
            "190", 
            "191", 
            "192", 
            "193", 
            "195", 
            "197", 
            "198", 
            "199", 
            "204", 
            "208", 
            "209", 
            "212", 
            "213", 
            "214", 
            "216", 
            "220", 
            "221", 
            "223", 
            "224", 
            "227", 
            "231", 
            "234", 
            "238", 
            "240", 
            "246", 
            "247", 
            "248", 
            "250", 
            "251", 
            "254", 
            "255", 
            "257", 
            "258", 
            "304", 
            "305", 
            "306", 
            "308", 
            "309", 
            "311", 
            "313", 
            "317"
        ], 
        "x": "17.762", 
        "compartment": "intracellular", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "251"
        ], 
        "symbol": "circle", 
        "module": [
            "GEX_GRN"
        ], 
        "y": "18.587", 
        "annotation": "SGD:S000000913p_SGD:S000004172p", 
        "name_alt": "SBF_p", 
        "name": "176", 
        "state": "P", 
        "links_from": [], 
        "x": "6.0949", 
        "compartment": "intracellular", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "191", 
            "193", 
            "195", 
            "198", 
            "199", 
            "213", 
            "223", 
            "224", 
            "227", 
            "234", 
            "240", 
            "246", 
            "248", 
            "254", 
            "257", 
            "258"
        ], 
        "symbol": "circle", 
        "module": [
            "GEX_GRN"
        ], 
        "y": "6.8369", 
        "annotation": "YCM:ribosome", 
        "name_alt": "ribosome", 
        "name": "177", 
        "state": "0", 
        "links_from": [], 
        "x": "16.512", 
        "compartment": "intracellular", 
        "is_ode": true
    }, 
    {
        "links_to": [
            "207", 
            "212"
        ], 
        "symbol": "circle", 
        "module": [
            "GEX_GRN"
        ], 
        "y": "12.254", 
        "annotation": "SGD:S000000913p_SGD:S000004172p", 
        "name_alt": "SBF", 
        "name": "178", 
        "state": "0", 
        "links_from": [
            "223"
        ], 
        "x": "17.845", 
        "compartment": "intracellular", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "218"
        ], 
        "symbol": "circle", 
        "module": [
            "GEX_GRN"
        ], 
        "y": "12.92", 
        "annotation": "SGD:S000005609p", 
        "name_alt": "Whi5", 
        "name": "179", 
        "state": "0", 
        "links_from": [
            "193"
        ], 
        "x": "17.845", 
        "compartment": "intracellular", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "191", 
            "193", 
            "195", 
            "198", 
            "199", 
            "213", 
            "223", 
            "224", 
            "227", 
            "234", 
            "240", 
            "246", 
            "248", 
            "254", 
            "257", 
            "258", 
            "272", 
            "279", 
            "280", 
            "310"
        ], 
        "symbol": "circle", 
        "module": [
            "GEX_GRN", 
            "GEX_TRL", 
            "MET_CCM", 
            "TRP_NUT"
        ], 
        "y": "18.67", 
        "annotation": "YCM:AA", 
        "name_alt": "AA", 
        "name": "180", 
        "state": "0", 
        "links_from": [
            "194", 
            "196", 
            "200", 
            "201", 
            "202", 
            "206", 
            "207", 
            "210", 
            "218", 
            "219", 
            "220", 
            "226", 
            "228", 
            "232", 
            "233", 
            "237", 
            "239", 
            "244", 
            "251", 
            "252", 
            "253", 
            "256", 
            "270", 
            "273", 
            "275", 
            "304"
        ], 
        "x": "12.012", 
        "compartment": "intracellular", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "199", 
            "225"
        ], 
        "symbol": "circle", 
        "module": [
            "GEX_GRN"
        ], 
        "y": "6.8369", 
        "annotation": "SGD:S000002971p", 
        "name_alt": "mAPC", 
        "name": "181", 
        "state": "mRNA", 
        "links_from": [
            "204"
        ], 
        "x": "6.0116", 
        "compartment": "intracellular", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "223", 
            "229"
        ], 
        "symbol": "circle", 
        "module": [
            "GEX_GRN"
        ], 
        "y": "6.8369", 
        "annotation": "SGD:S000000913p_SGD:S000004172p", 
        "name_alt": "mSBF", 
        "name": "182", 
        "state": "mRNA", 
        "links_from": [
            "214"
        ], 
        "x": "6.9282", 
        "compartment": "intracellular", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "191", 
            "211"
        ], 
        "symbol": "circle", 
        "module": [
            "GEX_GRN"
        ], 
        "y": "6.7536", 
        "annotation": "SGD:S000001924p", 
        "name_alt": "mCdc14", 
        "name": "183", 
        "state": "mRNA", 
        "links_from": [
            "192"
        ], 
        "x": "13.762", 
        "compartment": "intracellular", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "232"
        ], 
        "symbol": "circle", 
        "module": [
            "GEX_GRN"
        ], 
        "y": "6.7536", 
        "annotation": "SGD:S000003723p", 
        "name_alt": "Swe1", 
        "name": "184", 
        "state": "0", 
        "links_from": [
            "213"
        ], 
        "x": "14.678", 
        "compartment": "intracellular", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "198", 
            "235"
        ], 
        "symbol": "circle", 
        "module": [
            "GEX_GRN"
        ], 
        "y": "18.754", 
        "annotation": "SGD:S000004069p", 
        "name_alt": "mSic1", 
        "name": "185", 
        "state": "mRNA", 
        "links_from": [
            "197"
        ], 
        "x": "17.928", 
        "compartment": "intracellular", 
        "is_ode": false
    }, 
    {
        "links_to": [], 
        "symbol": "circle", 
        "module": [
            "GEX_GRN"
        ], 
        "y": "18.754", 
        "annotation": "SGD:S000004103p", 
        "name_alt": "HOG1", 
        "name": "186", 
        "state": "PP", 
        "links_from": [], 
        "x": "17.012", 
        "compartment": "intracellular", 
        "is_ode": true
    }, 
    {
        "links_to": [
            "197", 
            "206"
        ], 
        "symbol": "circle", 
        "module": [
            "GEX_GRN"
        ], 
        "y": "18.754", 
        "annotation": "SGD:S000002553p", 
        "name_alt": "Swi5", 
        "name": "187", 
        "state": "0", 
        "links_from": [
            "258"
        ], 
        "x": "14.512", 
        "compartment": "intracellular", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "201", 
            "216"
        ], 
        "symbol": "circle", 
        "module": [
            "GEX_GRN"
        ], 
        "y": "18.754", 
        "annotation": "SGD:S000002214p_SGD:S000004172p", 
        "name_alt": "MBF", 
        "name": "188", 
        "state": "0", 
        "links_from": [
            "224"
        ], 
        "x": "13.595", 
        "compartment": "intracellular", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "175", 
            "149", 
            "160"
        ], 
        "symbol": "rect", 
        "module": [
            "GEX_GRN"
        ], 
        "links_from": [
            "153", 
            "172"
        ], 
        "rate": "corr_Cln3_TRSC * vmax_TRSC_Cln3 * (ATP/(kM_ATP + ATP)) * (NA/(kM_NA + NA))*int_vol", 
        "name_alt": "v_mCln3_TRSC", 
        "name": "189", 
        "compartments": [
            "intracellular"
        ], 
        "y": "18.754", 
        "x": "8.5949", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "147", 
            "175", 
            "160"
        ], 
        "symbol": "rect", 
        "module": [
            "GEX_GRN"
        ], 
        "links_from": [
            "153", 
            "172"
        ], 
        "rate": "corr_Whi5_TRSC * vmax_TRSC_Whi5 * (ATP/(kM_ATP + ATP)) * (NA/(kM_NA + NA))*int_vol", 
        "name_alt": "v_mWhi5_TRSC", 
        "name": "190", 
        "compartments": [
            "intracellular"
        ], 
        "y": "18.754", 
        "x": "7.6782", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "175", 
            "160", 
            "151"
        ], 
        "symbol": "rect", 
        "module": [
            "GEX_GRN"
        ], 
        "links_from": [
            "180", 
            "172", 
            "183", 
            "177"
        ], 
        "rate": "corr_Cdc14_TRSL * vmax_TRSL_Cdc14 * mCdc14 * (ATP/(kM_ATP + ATP)) * (AA/(kM_AA + AA)) * (ribosome/(kM_ribosome + ribosome))*int_vol", 
        "name_alt": "v_mCdc14_TRSL", 
        "name": "191", 
        "compartments": [
            "intracellular"
        ], 
        "y": "10.087", 
        "x": "5.9282", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "183", 
            "175", 
            "160"
        ], 
        "symbol": "rect", 
        "module": [
            "GEX_GRN"
        ], 
        "links_from": [
            "153", 
            "172"
        ], 
        "rate": "corr_Cdc14_TRSC * vmax_TRSC_Cdc14 * (ATP/(kM_ATP + ATP)) * (NA/(kM_NA + NA))*int_vol", 
        "name_alt": "v_mCdc14_TRSC", 
        "name": "192", 
        "compartments": [
            "intracellular"
        ], 
        "y": "15.42", 
        "x": "18.012", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "179", 
            "175", 
            "160"
        ], 
        "symbol": "rect", 
        "module": [
            "GEX_GRN"
        ], 
        "links_from": [
            "180", 
            "172", 
            "177", 
            "147"
        ], 
        "rate": "corr_Whi5_TRSL * vmax_TRSL_Whi5 * mWhi5 * (ATP/(kM_ATP + ATP)) * (AA/(kM_AA + AA)) * (ribosome/(kM_ribosome + ribosome))*int_vol", 
        "name_alt": "v_mWhi5_TRSL", 
        "name": "193", 
        "compartments": [
            "intracellular"
        ], 
        "y": "6.6702", 
        "x": "7.8449", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "180"
        ], 
        "symbol": "rect", 
        "module": [
            "GEX_GRN"
        ], 
        "links_from": [
            "163", 
            "170"
        ], 
        "rate": "(kd_Clb3_APC * Clb3 * APC)*int_vol", 
        "name_alt": "v_Clb3_deg_APC", 
        "name": "194", 
        "compartments": [
            "intracellular"
        ], 
        "y": "6.6702", 
        "x": "8.7616", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "175", 
            "168", 
            "160"
        ], 
        "symbol": "rect", 
        "module": [
            "GEX_GRN"
        ], 
        "links_from": [
            "180", 
            "172", 
            "177", 
            "149"
        ], 
        "rate": "corr_Cln3_TRSL * vmax_TRSL_Cln3 * mCln3 * (ATP/(kM_ATP + ATP)) * (AA/(kM_AA + AA)) * (ribosome/(kM_ribosome + ribosome))*int_vol", 
        "name_alt": "v_mCln3_TRSL", 
        "name": "195", 
        "compartments": [
            "intracellular"
        ], 
        "y": "6.6702", 
        "x": "9.6782", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "180"
        ], 
        "symbol": "rect", 
        "module": [
            "GEX_GRN"
        ], 
        "links_from": [
            "169"
        ], 
        "rate": "(kd_Cln2 * Cln2)*int_vol", 
        "name_alt": "v_Cln2_deg", 
        "name": "196", 
        "compartments": [
            "intracellular"
        ], 
        "y": "6.6702", 
        "x": "10.595", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "185", 
            "175", 
            "160"
        ], 
        "symbol": "rect", 
        "module": [
            "GEX_GRN"
        ], 
        "links_from": [
            "153", 
            "172", 
            "187"
        ], 
        "rate": "corr_Sic1_TRSC * vmax_TRSC_Sic1 * (ATP/(kM_ATP + ATP)) * (NA/(kM_NA + NA)) * Swi5/(Kp_Sic1 + Swi5)*int_vol", 
        "name_alt": "v_mSic1_TRSC", 
        "name": "197", 
        "compartments": [
            "intracellular"
        ], 
        "y": "6.5869", 
        "x": "17.428", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "175", 
            "162", 
            "160"
        ], 
        "symbol": "rect", 
        "module": [
            "GEX_GRN"
        ], 
        "links_from": [
            "180", 
            "172", 
            "185", 
            "177"
        ], 
        "rate": "corr_Sic1_TRSL * kp_Sic1 * mSic1 * (ATP/(kM_ATP + ATP)) * (AA/(kM_AA + AA)) * (ribosome/(kM_ribosome + ribosome))*int_vol", 
        "name_alt": "v_mSic1_TRSL", 
        "name": "198", 
        "compartments": [
            "intracellular"
        ], 
        "y": "18.92", 
        "x": "16.095", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "170", 
            "175", 
            "160"
        ], 
        "symbol": "rect", 
        "module": [
            "GEX_GRN"
        ], 
        "links_from": [
            "180", 
            "172", 
            "181", 
            "177"
        ], 
        "rate": "corr_APC_TRSL * kp_APC * mAPC * (ATP/(kM_ATP + ATP)) * (AA/(kM_AA + AA)) * (ribosome/(kM_ribosome + ribosome))*int_vol", 
        "name_alt": "v_mAPC_TRSL", 
        "name": "199", 
        "compartments": [
            "intracellular"
        ], 
        "y": "18.92", 
        "x": "11.095", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "180"
        ], 
        "symbol": "rect", 
        "module": [
            "GEX_GRN"
        ], 
        "links_from": [
            "170"
        ], 
        "rate": "(kd_APC * APC)*int_vol", 
        "name_alt": "v_APC_deg", 
        "name": "200", 
        "compartments": [
            "intracellular"
        ], 
        "y": "18.92", 
        "x": "10.178", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "180"
        ], 
        "symbol": "rect", 
        "module": [
            "GEX_GRN"
        ], 
        "links_from": [
            "188"
        ], 
        "rate": "(kd_MBF * MBF)*int_vol", 
        "name_alt": "v_MBF_deg", 
        "name": "201", 
        "compartments": [
            "intracellular"
        ], 
        "y": "12.92", 
        "x": "5.7616", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "180"
        ], 
        "symbol": "rect", 
        "module": [
            "GEX_GRN"
        ], 
        "links_from": [
            "151"
        ], 
        "rate": "(k_Cdc14_deg * Cdc14)*int_vol", 
        "name_alt": "v_Cdc14_deg", 
        "name": "202", 
        "compartments": [
            "intracellular"
        ], 
        "y": "7.7536", 
        "x": "5.7616", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "153"
        ], 
        "symbol": "rect", 
        "module": [
            "GEX_GRN"
        ], 
        "links_from": [
            "165"
        ], 
        "rate": "(k_mMih1_deg * mMih1)*int_vol", 
        "name_alt": "v_mMih1_deg", 
        "name": "203", 
        "compartments": [
            "intracellular"
        ], 
        "y": "10.837", 
        "x": "18.178", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "181", 
            "175", 
            "160"
        ], 
        "symbol": "rect", 
        "module": [
            "GEX_GRN"
        ], 
        "links_from": [
            "153", 
            "172", 
            "174"
        ], 
        "rate": "corr_APC_TRSC * vmax_TRSC_APC * (ATP/(kM_ATP + ATP)) * (NA/(kM_NA + NA)) * Mcm1/(Kp_APC + Mcm1)*int_vol", 
        "name_alt": "v_mAPC_TRSC", 
        "name": "204", 
        "compartments": [
            "intracellular"
        ], 
        "y": "17.92", 
        "x": "18.178", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "153"
        ], 
        "symbol": "rect", 
        "module": [
            "GEX_GRN"
        ], 
        "links_from": [
            "154"
        ], 
        "rate": "(k_mClb3_deg * mClb3)*int_vol", 
        "name_alt": "v_mClb3_deg", 
        "name": "205", 
        "compartments": [
            "intracellular"
        ], 
        "y": "16.754", 
        "x": "5.6782", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "180"
        ], 
        "symbol": "rect", 
        "module": [
            "GEX_GRN"
        ], 
        "links_from": [
            "187"
        ], 
        "rate": "(kd_Swi5 * Swi5)*int_vol", 
        "name_alt": "v_Swi5_deg", 
        "name": "206", 
        "compartments": [
            "intracellular"
        ], 
        "y": "16.087", 
        "x": "5.6782", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "180"
        ], 
        "symbol": "rect", 
        "module": [
            "GEX_GRN"
        ], 
        "links_from": [
            "178"
        ], 
        "rate": "(k_SBF_deg * SBF)*int_vol", 
        "name_alt": "v_SBF_deg", 
        "name": "207", 
        "compartments": [
            "intracellular"
        ], 
        "y": "11.337", 
        "x": "5.6782", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "158", 
            "175", 
            "160"
        ], 
        "symbol": "rect", 
        "module": [
            "GEX_GRN"
        ], 
        "links_from": [
            "153", 
            "172"
        ], 
        "rate": "corr_Swe1_TRSC * vmax_TRSC_Swe1 * (ATP/(kM_ATP + ATP)) * (NA/(kM_NA + NA))*int_vol", 
        "name_alt": "v_mSwe1_TRSC", 
        "name": "208", 
        "compartments": [
            "intracellular"
        ], 
        "y": "6.4202", 
        "x": "11.928", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "171", 
            "175", 
            "160"
        ], 
        "symbol": "rect", 
        "module": [
            "GEX_GRN"
        ], 
        "links_from": [
            "153", 
            "172", 
            "163", 
            "164"
        ], 
        "rate": "corr_Mcm1_TRSC * vmax_TRSC_Mcm1 * (Clb2**n_Mcm1/(Kp_Mcm1**n_Mcm1 + Clb2**n_Mcm1) + (v0_Mcm1/kp_Mcm1) * Clb3**n_Mcm1/(V0_Mcm1**n_Mcm1 + Clb3**n_Mcm1)) * (ATP/(kM_ATP + ATP)) * (NA/(kM_NA + NA))*int_vol", 
        "name_alt": "v_mMcm1_TRSC", 
        "name": "209", 
        "compartments": [
            "intracellular"
        ], 
        "y": "9.2536", 
        "x": "18.262", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "180"
        ], 
        "symbol": "rect", 
        "module": [
            "GEX_GRN"
        ], 
        "links_from": [
            "156"
        ], 
        "rate": "(k_Mih1_deg * Mih1)*int_vol", 
        "name_alt": "v_Mih1_deg", 
        "name": "210", 
        "compartments": [
            "intracellular"
        ], 
        "y": "9.9202", 
        "x": "18.262", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "153"
        ], 
        "symbol": "rect", 
        "module": [
            "GEX_GRN"
        ], 
        "links_from": [
            "183"
        ], 
        "rate": "(k_mCdc14_deg * mCdc14)*int_vol", 
        "name_alt": "v_mCdc14_deg", 
        "name": "211", 
        "compartments": [
            "intracellular"
        ], 
        "y": "11.504", 
        "x": "18.262", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "175", 
            "150", 
            "160"
        ], 
        "symbol": "rect", 
        "module": [
            "GEX_GRN"
        ], 
        "links_from": [
            "153", 
            "172", 
            "178"
        ], 
        "rate": "corr_Cln2_TRSC * vmax_TRSC_Cln2 * (ATP/(kM_ATP + ATP)) * (NA/(kM_NA + NA)) * SBF/(Kp_Cln2 + SBF)*int_vol", 
        "name_alt": "v_mCln2_TRSC", 
        "name": "212", 
        "compartments": [
            "intracellular"
        ], 
        "y": "14.754", 
        "x": "18.262", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "184", 
            "175", 
            "160"
        ], 
        "symbol": "rect", 
        "module": [
            "GEX_GRN"
        ], 
        "links_from": [
            "180", 
            "172", 
            "158", 
            "177"
        ], 
        "rate": "corr_Swe1_TRSL * vmax_TRSL_Swe1 * mSwe1 * (ATP/(kM_ATP + ATP)) * (AA/(kM_AA + AA)) * (ribosome/(kM_ribosome + ribosome))*int_vol", 
        "name_alt": "v_mSwe1_TRSL", 
        "name": "213", 
        "compartments": [
            "intracellular"
        ], 
        "y": "13.587", 
        "x": "5.5949", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "182", 
            "175", 
            "160"
        ], 
        "symbol": "rect", 
        "module": [
            "GEX_GRN"
        ], 
        "links_from": [
            "153", 
            "172"
        ], 
        "rate": "vmax_TRSC_SBF * (ATP/(kM_ATP + ATP)) * (NA/(kM_NA + NA))*int_vol", 
        "name_alt": "v_mSBF_TRSC", 
        "name": "214", 
        "compartments": [
            "intracellular"
        ], 
        "y": "6.3369", 
        "x": "12.845", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "153"
        ], 
        "symbol": "rect", 
        "module": [
            "GEX_GRN"
        ], 
        "links_from": [
            "157"
        ], 
        "rate": "(k_mClb5_deg * mClb5)*int_vol", 
        "name_alt": "v_mClb5_deg", 
        "name": "215", 
        "compartments": [
            "intracellular"
        ], 
        "y": "6.3369", 
        "x": "18.345", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "175", 
            "160", 
            "157"
        ], 
        "symbol": "rect", 
        "module": [
            "GEX_GRN"
        ], 
        "links_from": [
            "153", 
            "172", 
            "188"
        ], 
        "rate": "corr_Clb5_TRSC * vmax_TRSC_Clb5 * (ATP/(kM_ATP + ATP)) * (NA/(kM_NA + NA)) * MBF/(Kp_Clb5 + MBF)*int_vol", 
        "name_alt": "v_mClb5_TRSC", 
        "name": "216", 
        "compartments": [
            "intracellular"
        ], 
        "y": "7.0036", 
        "x": "18.345", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "153"
        ], 
        "symbol": "rect", 
        "module": [
            "GEX_GRN"
        ], 
        "links_from": [
            "148"
        ], 
        "rate": "(k_mMBF_deg * mMBF)*int_vol", 
        "name_alt": "v_mMBF_deg", 
        "name": "217", 
        "compartments": [
            "intracellular"
        ], 
        "y": "7.6702", 
        "x": "18.345", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "180"
        ], 
        "symbol": "rect", 
        "module": [
            "GEX_GRN"
        ], 
        "links_from": [
            "179"
        ], 
        "rate": "(k_Whi5_deg * Whi5)*int_vol", 
        "name_alt": "v_Whi5_deg", 
        "name": "218", 
        "compartments": [
            "intracellular"
        ], 
        "y": "8.4202", 
        "x": "5.5116", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "180"
        ], 
        "symbol": "rect", 
        "module": [
            "GEX_GRN"
        ], 
        "links_from": [
            "168"
        ], 
        "rate": "(k_Cln3_deg * Cln3)*int_vol", 
        "name_alt": "v_Cln3_deg", 
        "name": "219", 
        "compartments": [
            "intracellular"
        ], 
        "y": "6.2536", 
        "x": "15.595", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "180", 
            "175"
        ], 
        "symbol": "rect", 
        "module": [
            "GEX_GRN"
        ], 
        "links_from": [
            "173"
        ], 
        "rate": "(k_Cdc14_p_deg * Cdc14_p)*int_vol", 
        "name_alt": "v_Cdc14_p_deg", 
        "name": "220", 
        "compartments": [
            "intracellular"
        ], 
        "y": "17.004", 
        "x": "18.428", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "154", 
            "175", 
            "160"
        ], 
        "symbol": "rect", 
        "module": [
            "GEX_GRN"
        ], 
        "links_from": [
            "153", 
            "172", 
            "166"
        ], 
        "rate": "corr_Clb3_TRSC * vmax_TRSC_Clb3 * (ATP/(kM_ATP + ATP)) * (NA/(kM_NA + NA)) * (Clb5**n_Clb3/(Kp_Clb3**n_Clb3 + Clb5**n_Clb3))*int_vol", 
        "name_alt": "v_mClb3_TRSC", 
        "name": "221", 
        "compartments": [
            "intracellular"
        ], 
        "y": "19.254", 
        "x": "6.7616", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "153"
        ], 
        "symbol": "rect", 
        "module": [
            "GEX_GRN"
        ], 
        "links_from": [
            "149"
        ], 
        "rate": "(k_mCln3_deg * mCln3)*int_vol", 
        "name_alt": "v_mCln3_deg", 
        "name": "222", 
        "compartments": [
            "intracellular"
        ], 
        "y": "19.254", 
        "x": "5.8449", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "175", 
            "178", 
            "160"
        ], 
        "symbol": "rect", 
        "module": [
            "GEX_GRN"
        ], 
        "links_from": [
            "180", 
            "172", 
            "182", 
            "177"
        ], 
        "rate": "vmax_TRSL_SBF * mSBF * (ATP/(kM_ATP + ATP)) * (AA/(kM_AA + AA)) * (ribosome/(kM_ribosome + ribosome))*int_vol", 
        "name_alt": "v_mSBF_TRSL", 
        "name": "223", 
        "compartments": [
            "intracellular"
        ], 
        "y": "17.92", 
        "x": "5.4282", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "188", 
            "175", 
            "160"
        ], 
        "symbol": "rect", 
        "module": [
            "GEX_GRN"
        ], 
        "links_from": [
            "180", 
            "172", 
            "177", 
            "148"
        ], 
        "rate": "corr_MBF_TRSL * kp_MBF * mMBF * (ATP/(kM_ATP + ATP)) * (AA/(kM_AA + AA)) * (ribosome/(kM_ribosome + ribosome))*int_vol", 
        "name_alt": "v_mMBF_TRSL", 
        "name": "224", 
        "compartments": [
            "intracellular"
        ], 
        "y": "12.254", 
        "x": "5.4282", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "153"
        ], 
        "symbol": "rect", 
        "module": [
            "GEX_GRN"
        ], 
        "links_from": [
            "181"
        ], 
        "rate": "(k_mAPC_deg * mAPC)*int_vol", 
        "name_alt": "v_mAPC_deg", 
        "name": "225", 
        "compartments": [
            "intracellular"
        ], 
        "y": "6.1702", 
        "x": "16.512", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "180"
        ], 
        "symbol": "rect", 
        "module": [
            "GEX_GRN"
        ], 
        "links_from": [
            "163"
        ], 
        "rate": "(kd_Clb3 * Clb3)*int_vol", 
        "name_alt": "v_Clb3_deg", 
        "name": "226", 
        "compartments": [
            "intracellular"
        ], 
        "y": "8.3369", 
        "x": "18.512", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "164", 
            "175", 
            "160"
        ], 
        "symbol": "rect", 
        "module": [
            "GEX_GRN"
        ], 
        "links_from": [
            "180", 
            "172", 
            "155", 
            "177"
        ], 
        "rate": "corr_Clb2_TRSL * kp_Clb2 * mClb2 * (ATP/(kM_ATP + ATP)) * (AA/(kM_AA + AA)) * (ribosome/(kM_ribosome + ribosome))*int_vol", 
        "name_alt": "v_mClb2_TRSL", 
        "name": "227", 
        "compartments": [
            "intracellular"
        ], 
        "y": "13.587", 
        "x": "18.512", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "180"
        ], 
        "symbol": "rect", 
        "module": [
            "GEX_GRN"
        ], 
        "links_from": [
            "166"
        ], 
        "rate": "(kd_Clb5 * Clb5)*int_vol", 
        "name_alt": "v_Clb5_deg", 
        "name": "228", 
        "compartments": [
            "intracellular"
        ], 
        "y": "19.337", 
        "x": "12.678", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "153"
        ], 
        "symbol": "rect", 
        "module": [
            "GEX_GRN"
        ], 
        "links_from": [
            "182"
        ], 
        "rate": "(k_mSBF_deg * mSBF)*int_vol", 
        "name_alt": "v_mSBF_deg", 
        "name": "229", 
        "compartments": [
            "intracellular"
        ], 
        "y": "14.754", 
        "x": "5.3449", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "153"
        ], 
        "symbol": "rect", 
        "module": [
            "GEX_GRN"
        ], 
        "links_from": [
            "147"
        ], 
        "rate": "(k_mWhi5_deg * mWhi5)*int_vol", 
        "name_alt": "v_mWhi5_deg", 
        "name": "230", 
        "compartments": [
            "intracellular"
        ], 
        "y": "6.1702", 
        "x": "5.3449", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "175", 
            "160", 
            "148"
        ], 
        "symbol": "rect", 
        "module": [
            "GEX_GRN"
        ], 
        "links_from": [
            "153", 
            "172", 
            "169"
        ], 
        "rate": "corr_MBF_TRSC * vmax_TRSC_MBF * (ATP/(kM_ATP + ATP)) * (NA/(kM_NA + NA)) * Cln2**n1/(K_MBF**n1 + Cln2**n1)*int_vol", 
        "name_alt": "v_mMBF_TRSC", 
        "name": "231", 
        "compartments": [
            "intracellular"
        ], 
        "y": "6.1702", 
        "x": "6.2616", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "180"
        ], 
        "symbol": "rect", 
        "module": [
            "GEX_GRN"
        ], 
        "links_from": [
            "184"
        ], 
        "rate": "(k_Swe1_deg * Swe1)*int_vol", 
        "name_alt": "v_Swe1_deg", 
        "name": "232", 
        "compartments": [
            "intracellular"
        ], 
        "y": "6.0869", 
        "x": "13.762", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "180"
        ], 
        "symbol": "rect", 
        "module": [
            "GEX_GRN"
        ], 
        "links_from": [
            "164", 
            "170"
        ], 
        "rate": "(kd_Clb2_APC * Clb2 * APC)*int_vol", 
        "name_alt": "v_Clb2_deg_APC", 
        "name": "233", 
        "compartments": [
            "intracellular"
        ], 
        "y": "6.0869", 
        "x": "14.678", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "175", 
            "159", 
            "160"
        ], 
        "symbol": "rect", 
        "module": [
            "GEX_GRN"
        ], 
        "links_from": [
            "180", 
            "172", 
            "161", 
            "177"
        ], 
        "rate": "corr_Far1_TRSL * kp_basal_Far1 * mFar1 * (ATP/(kM_ATP + ATP)) * (AA/(kM_AA + AA)) * (ribosome/(kM_ribosome + ribosome))*int_vol", 
        "name_alt": "v_mFar1_TRSL", 
        "name": "234", 
        "compartments": [
            "intracellular"
        ], 
        "y": "19.42", 
        "x": "18.595", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "153"
        ], 
        "symbol": "rect", 
        "module": [
            "GEX_GRN"
        ], 
        "links_from": [
            "185"
        ], 
        "rate": "(k_mSic1_deg * mSic1)*int_vol", 
        "name_alt": "v_mSic1_deg", 
        "name": "235", 
        "compartments": [
            "intracellular"
        ], 
        "y": "19.42", 
        "x": "17.678", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "153"
        ], 
        "symbol": "rect", 
        "module": [
            "GEX_GRN"
        ], 
        "links_from": [
            "171"
        ], 
        "rate": "(k_mMcm1_deg * mMcm1)*int_vol", 
        "name_alt": "v_mMcm1_deg", 
        "name": "236", 
        "compartments": [
            "intracellular"
        ], 
        "y": "19.42", 
        "x": "15.178", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "180"
        ], 
        "symbol": "rect", 
        "module": [
            "GEX_GRN"
        ], 
        "links_from": [
            "164"
        ], 
        "rate": "(kd_Clb2 * Clb2)*int_vol", 
        "name_alt": "v_Clb2_deg", 
        "name": "237", 
        "compartments": [
            "intracellular"
        ], 
        "y": "19.42", 
        "x": "14.262", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "161", 
            "175", 
            "160"
        ], 
        "symbol": "rect", 
        "module": [
            "GEX_GRN"
        ], 
        "links_from": [
            "153", 
            "172", 
            "167"
        ], 
        "rate": "corr_Far1_TRSC * vmax_TRSC_Far1 * (ATP/(kM_ATP + ATP)) * (NA/(kM_NA + NA)) * ( ((kp_Far1/kp_basal_Far1) * Fus3) + 1 )*int_vol", 
        "name_alt": "v_mFar1_TRSC", 
        "name": "238", 
        "compartments": [
            "intracellular"
        ], 
        "y": "19.42", 
        "x": "9.2616", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "180"
        ], 
        "symbol": "rect", 
        "module": [
            "GEX_GRN"
        ], 
        "links_from": [
            "159"
        ], 
        "rate": "(kd_Far1 * Far1)*int_vol", 
        "name_alt": "v_Far1_deg", 
        "name": "239", 
        "compartments": [
            "intracellular"
        ], 
        "y": "19.42", 
        "x": "8.3449", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "175", 
            "160", 
            "174"
        ], 
        "symbol": "rect", 
        "module": [
            "GEX_GRN"
        ], 
        "links_from": [
            "180", 
            "172", 
            "171", 
            "177"
        ], 
        "rate": "corr_Mcm1_TRSL * kp_Mcm1 * mMcm1 * (ATP/(kM_ATP + ATP)) * (AA/(kM_AA + AA)) * (ribosome/(kM_ribosome + ribosome))*int_vol", 
        "name_alt": "v_mMcm1_TRSL", 
        "name": "240", 
        "compartments": [
            "intracellular"
        ], 
        "y": "15.42", 
        "x": "5.2616", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "153"
        ], 
        "symbol": "rect", 
        "module": [
            "GEX_GRN"
        ], 
        "links_from": [
            "158"
        ], 
        "rate": "(k_mSwe1_deg * mSwe1)*int_vol", 
        "name_alt": "v_mSwe1_deg", 
        "name": "241", 
        "compartments": [
            "intracellular"
        ], 
        "y": "9.4202", 
        "x": "5.2616", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "153"
        ], 
        "symbol": "rect", 
        "module": [
            "GEX_GRN"
        ], 
        "links_from": [
            "155"
        ], 
        "rate": "(k_mClb2_deg * mClb2)*int_vol", 
        "name_alt": "v_mClb2_deg", 
        "name": "242", 
        "compartments": [
            "intracellular"
        ], 
        "y": "16.087", 
        "x": "18.678", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "153"
        ], 
        "symbol": "rect", 
        "module": [
            "GEX_GRN"
        ], 
        "links_from": [
            "150"
        ], 
        "rate": "(k_mCln2_deg * mCln2)*int_vol", 
        "name_alt": "v_mCln2_deg", 
        "name": "243", 
        "compartments": [
            "intracellular"
        ], 
        "y": "18.587", 
        "x": "5.1782", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "180"
        ], 
        "symbol": "rect", 
        "module": [
            "GEX_GRN"
        ], 
        "links_from": [
            "166", 
            "170"
        ], 
        "rate": "(kd_Clb5_APC * Clb5 * APC)*int_vol", 
        "name_alt": "v_Clb5_deg_APC", 
        "name": "244", 
        "compartments": [
            "intracellular"
        ], 
        "y": "6.0036", 
        "x": "7.1782", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "153"
        ], 
        "symbol": "rect", 
        "module": [
            "GEX_GRN"
        ], 
        "links_from": [
            "161"
        ], 
        "rate": "(k_mFar1_deg * mFar1)*int_vol", 
        "name_alt": "v_mFar1_deg", 
        "name": "245", 
        "compartments": [
            "intracellular"
        ], 
        "y": "6.0036", 
        "x": "8.0949", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "163", 
            "175", 
            "160"
        ], 
        "symbol": "rect", 
        "module": [
            "GEX_GRN"
        ], 
        "links_from": [
            "180", 
            "172", 
            "154", 
            "177"
        ], 
        "rate": "corr_Clb3_TRSL * kp_Clb3 * mClb3 * (ATP/(kM_ATP + ATP)) * (AA/(kM_AA + AA)) * (ribosome/(kM_ribosome + ribosome))*int_vol", 
        "name_alt": "v_mClb3_TRSL", 
        "name": "246", 
        "compartments": [
            "intracellular"
        ], 
        "y": "6.0036", 
        "x": "9.0116", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "155", 
            "175", 
            "160"
        ], 
        "symbol": "rect", 
        "module": [
            "GEX_GRN"
        ], 
        "links_from": [
            "153", 
            "172", 
            "174"
        ], 
        "rate": "corr_Clb2_TRSC * vmax_TRSC_Clb2 * (ATP/(kM_ATP + ATP)) * (NA/(kM_NA + NA)) * Mcm1/(Kp_Clb2 + Mcm1)*int_vol", 
        "name_alt": "v_mClb2_TRSC", 
        "name": "247", 
        "compartments": [
            "intracellular"
        ], 
        "y": "6.0036", 
        "x": "9.9282", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "175", 
            "169", 
            "160"
        ], 
        "symbol": "rect", 
        "module": [
            "GEX_GRN"
        ], 
        "links_from": [
            "180", 
            "172", 
            "177", 
            "150"
        ], 
        "rate": "corr_Cln2_TRSL * kp_Cln2 * mCln2 * (ATP/(kM_ATP + ATP)) * (AA/(kM_AA + AA)) * (ribosome/(kM_ribosome + ribosome))*int_vol", 
        "name_alt": "v_mCln2_TRSL", 
        "name": "248", 
        "compartments": [
            "intracellular"
        ], 
        "y": "6.0036", 
        "x": "10.845", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "153"
        ], 
        "symbol": "rect", 
        "module": [
            "GEX_GRN"
        ], 
        "links_from": [
            "152"
        ], 
        "rate": "(k_mSwi5_deg * mSwi5)*int_vol", 
        "name_alt": "v_mSwi5_deg", 
        "name": "249", 
        "compartments": [
            "intracellular"
        ], 
        "y": "5.9202", 
        "x": "17.428", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "152", 
            "175", 
            "160"
        ], 
        "symbol": "rect", 
        "module": [
            "GEX_GRN"
        ], 
        "links_from": [
            "153", 
            "172", 
            "174"
        ], 
        "rate": "corr_Swi5_TRSC * vmax_TRSC_Swi5 * (ATP/(kM_ATP + ATP)) * (NA/(kM_NA + NA)) * Mcm1/(Kp_Swi5 + Mcm1)*int_vol", 
        "name_alt": "v_mSwi5_TRSC", 
        "name": "250", 
        "compartments": [
            "intracellular"
        ], 
        "y": "12.17", 
        "x": "18.762", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "180", 
            "175"
        ], 
        "symbol": "rect", 
        "module": [
            "GEX_GRN"
        ], 
        "links_from": [
            "176"
        ], 
        "rate": "(k_SBF_p_deg * SBF_p)*int_vol", 
        "name_alt": "v_SBF_p_deg", 
        "name": "251", 
        "compartments": [
            "intracellular"
        ], 
        "y": "12.837", 
        "x": "18.762", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "180"
        ], 
        "symbol": "rect", 
        "module": [
            "GEX_GRN"
        ], 
        "links_from": [
            "159", 
            "169"
        ], 
        "rate": "(kdd_Far1 * Far1 * Cln2)*int_vol", 
        "name_alt": "v_Far1_deg_Cln2", 
        "name": "252", 
        "compartments": [
            "intracellular"
        ], 
        "y": "19.587", 
        "x": "16.762", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "180"
        ], 
        "symbol": "rect", 
        "module": [
            "GEX_GRN"
        ], 
        "links_from": [
            "162"
        ], 
        "rate": "(kd_Sic1 * Sic1)*int_vol", 
        "name_alt": "v_Sic1_deg", 
        "name": "253", 
        "compartments": [
            "intracellular"
        ], 
        "y": "19.587", 
        "x": "11.762", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "156", 
            "175", 
            "160"
        ], 
        "symbol": "rect", 
        "module": [
            "GEX_GRN"
        ], 
        "links_from": [
            "180", 
            "172", 
            "177", 
            "165"
        ], 
        "rate": "corr_Mih1_TRSL * vmax_TRSL_Mih1 * mMih1 * (ATP/(kM_ATP + ATP)) * (AA/(kM_AA + AA)) * (ribosome/(kM_ribosome + ribosome))*int_vol", 
        "name_alt": "v_mMih1_TRSL", 
        "name": "254", 
        "compartments": [
            "intracellular"
        ], 
        "y": "19.587", 
        "x": "10.845", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "165", 
            "175", 
            "160"
        ], 
        "symbol": "rect", 
        "module": [
            "GEX_GRN"
        ], 
        "links_from": [
            "153", 
            "172"
        ], 
        "rate": "corr_Mih1_TRSC * vmax_TRSC_Mih1 * (ATP/(kM_ATP + ATP)) * (NA/(kM_NA + NA))*int_vol", 
        "name_alt": "v_mMih1_TRSC", 
        "name": "255", 
        "compartments": [
            "intracellular"
        ], 
        "y": "7.0869", 
        "x": "5.0949", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "180"
        ], 
        "symbol": "rect", 
        "module": [
            "GEX_GRN"
        ], 
        "links_from": [
            "174"
        ], 
        "rate": "(kd_Mcm1 * Mcm1)*int_vol", 
        "name_alt": "v_Mcm1_deg", 
        "name": "256", 
        "compartments": [
            "intracellular"
        ], 
        "y": "18.587", 
        "x": "18.845", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "175", 
            "160", 
            "166"
        ], 
        "symbol": "rect", 
        "module": [
            "GEX_GRN"
        ], 
        "links_from": [
            "180", 
            "172", 
            "177", 
            "157"
        ], 
        "rate": "corr_Clb5_TRSL * kp_Clb5 * mClb5 * (ATP/(kM_ATP + ATP)) * (AA/(kM_AA + AA)) * (ribosome/(kM_ribosome + ribosome))*int_vol", 
        "name_alt": "v_mClb5_TRSL", 
        "name": "257", 
        "compartments": [
            "intracellular"
        ], 
        "y": "10.67", 
        "x": "5.0116", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "187", 
            "175", 
            "160"
        ], 
        "symbol": "rect", 
        "module": [
            "GEX_GRN"
        ], 
        "links_from": [
            "180", 
            "172", 
            "152", 
            "177"
        ], 
        "rate": "corr_Swi5_TRSL * kp_Swi5 * mSwi5 * (ATP/(kM_ATP + ATP)) * (AA/(kM_AA + AA)) * (ribosome/(kM_ribosome + ribosome))*int_vol", 
        "name_alt": "v_mSwi5_TRSL", 
        "name": "258", 
        "compartments": [
            "intracellular"
        ], 
        "y": "5.7536", 
        "x": "11.928", 
        "is_ode": false
    }, 
    {
        "links_to": [], 
        "symbol": "triangle", 
        "module": [
            "GEX_TRL"
        ], 
        "y": "15.42", 
        "annotation": "YCM:ribosomes_check", 
        "name_alt": "total_ribosomes", 
        "name": "259", 
        "equation": "(Ribosome +  9.4336 * mRNA_R_Ribosome +  9.4336 * mRNA_met_Ribosome +  9.4336 * mRNA_other_Ribosome) * 1e-3 * 6.022e23 * int_vol", 
        "state": "0", 
        "links_from": [
            "144", 
            "266", 
            "268", 
            "265", 
            "4"
        ], 
        "x": "18.928", 
        "compartment": "intracellular", 
        "is_ode": false
    }, 
    {
        "links_to": [], 
        "symbol": "circle", 
        "module": [
            "GEX_TRL"
        ], 
        "y": "19.754", 
        "annotation": "CHEBI:43474", 
        "name_alt": "P_i", 
        "name": "260", 
        "state": "-2", 
        "links_from": [
            "272", 
            "279", 
            "280"
        ], 
        "x": "4.9282", 
        "compartment": "intracellular", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "271"
        ], 
        "symbol": "circle", 
        "module": [
            "GEX_TRL"
        ], 
        "y": "5.6702", 
        "annotation": "YCM:mRNA_metabolic", 
        "name_alt": "mRNA_met", 
        "name": "261", 
        "state": "0", 
        "links_from": [
            "274"
        ], 
        "x": "12.845", 
        "compartment": "intracellular", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "269"
        ], 
        "symbol": "circle", 
        "module": [
            "GEX_TRL"
        ], 
        "y": "5.6702", 
        "annotation": "YCM:mRNA_other", 
        "name_alt": "mRNA_other", 
        "name": "262", 
        "state": "0", 
        "links_from": [
            "276"
        ], 
        "x": "18.345", 
        "compartment": "intracellular", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "277"
        ], 
        "symbol": "circle", 
        "module": [
            "GEX_TRL"
        ], 
        "y": "12.92", 
        "annotation": "YCM:mRNA_R", 
        "name_alt": "mRNA_R", 
        "name": "263", 
        "state": "0", 
        "links_from": [
            "278"
        ], 
        "x": "4.8449", 
        "compartment": "intracellular", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "270"
        ], 
        "symbol": "circle", 
        "module": [
            "GEX_TRL"
        ], 
        "y": "7.7536", 
        "annotation": "YCM:B_Protein_metabolic", 
        "name_alt": "B_Protein_met", 
        "name": "264", 
        "state": "0", 
        "links_from": [
            "280"
        ], 
        "x": "4.8449", 
        "compartment": "intracellular", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "276", 
            "279", 
            "259"
        ], 
        "symbol": "circle", 
        "module": [
            "GEX_TRL"
        ], 
        "y": "5.5869", 
        "annotation": "YCM:mRNA_other_Ribosome", 
        "name_alt": "mRNA_other_Ribosome", 
        "name": "265", 
        "state": "0", 
        "links_from": [
            "269"
        ], 
        "x": "15.595", 
        "compartment": "intracellular", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "272", 
            "278", 
            "259"
        ], 
        "symbol": "circle", 
        "module": [
            "GEX_TRL"
        ], 
        "y": "10.587", 
        "annotation": "YCM:mRNA_R_Ribosome", 
        "name_alt": "mRNA_R_Ribosome", 
        "name": "266", 
        "state": "0", 
        "links_from": [
            "277"
        ], 
        "x": "19.095", 
        "compartment": "intracellular", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "275"
        ], 
        "symbol": "circle", 
        "module": [
            "GEX_TRL"
        ], 
        "y": "17.67", 
        "annotation": "YCM:B_Protein_other", 
        "name_alt": "B_Protein_other", 
        "name": "267", 
        "state": "0", 
        "links_from": [
            "279"
        ], 
        "x": "19.095", 
        "compartment": "intracellular", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "274", 
            "280", 
            "259"
        ], 
        "symbol": "circle", 
        "module": [
            "GEX_TRL"
        ], 
        "y": "19.92", 
        "annotation": "YCM:mRNA_met_Ribosome", 
        "name_alt": "mRNA_met_Ribosome", 
        "name": "268", 
        "state": "0", 
        "links_from": [
            "271"
        ], 
        "x": "7.4282", 
        "compartment": "intracellular", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "265"
        ], 
        "symbol": "rect", 
        "module": [
            "GEX_TRL"
        ], 
        "links_from": [
            "144", 
            "262"
        ], 
        "rate": "(k_ASS_Ribosome_mRNA_other * Ribosome * mRNA_other)*int_vol", 
        "name_alt": "v_ASS_Ribosome_mRNA_other", 
        "name": "269", 
        "compartments": [
            "intracellular"
        ], 
        "y": "19.92", 
        "x": "6.5116", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "180"
        ], 
        "symbol": "rect", 
        "module": [
            "GEX_TRL"
        ], 
        "links_from": [
            "264"
        ], 
        "rate": "(k_DEG_B_Protein_met * B_Protein_met)*int_vol", 
        "name_alt": "v_DEG_B_Protein_met", 
        "name": "270", 
        "compartments": [
            "intracellular"
        ], 
        "y": "17.254", 
        "x": "4.7616", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "268"
        ], 
        "symbol": "rect", 
        "module": [
            "GEX_TRL"
        ], 
        "links_from": [
            "261", 
            "144"
        ], 
        "rate": "(k_ASS_Ribosome_mRNA_met * Ribosome * mRNA_met)*int_vol", 
        "name_alt": "v_ASS_Ribosome_mRNA_met", 
        "name": "271", 
        "compartments": [
            "intracellular"
        ], 
        "y": "16.587", 
        "x": "4.7616", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "143", 
            "160", 
            "260"
        ], 
        "symbol": "rect", 
        "module": [
            "GEX_TRL"
        ], 
        "links_from": [
            "180", 
            "172", 
            "266"
        ], 
        "rate": "(vmax_TRSL_mRNA_R * (ATP/(k_atp + ATP)) * (AA/(k_aa + AA)) * (mRNA_R_Ribosome/(k_TRSL_mRNA_R + mRNA_R_Ribosome)))*int_vol", 
        "name_alt": "v_TRSL_mRNA_R", 
        "name": "272", 
        "compartments": [
            "intracellular"
        ], 
        "y": "11.587", 
        "x": "4.7616", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "180"
        ], 
        "symbol": "rect", 
        "module": [
            "GEX_TRL"
        ], 
        "links_from": [
            "143"
        ], 
        "rate": "(k_DEG_B_Protein_R * B_Protein_R)*int_vol", 
        "name_alt": "v_DEG_B_Protein_R", 
        "name": "273", 
        "compartments": [
            "intracellular"
        ], 
        "y": "5.5036", 
        "x": "16.512", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "261", 
            "144"
        ], 
        "symbol": "rect", 
        "module": [
            "GEX_TRL"
        ], 
        "links_from": [
            "268"
        ], 
        "rate": "(k_DIS_Ribosome_mRNA_met * mRNA_met_Ribosome)*int_vol", 
        "name_alt": "v_DIS_Ribosome_mRNA_met", 
        "name": "274", 
        "compartments": [
            "intracellular"
        ], 
        "y": "9.0036", 
        "x": "19.178", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "180"
        ], 
        "symbol": "rect", 
        "module": [
            "GEX_TRL"
        ], 
        "links_from": [
            "267"
        ], 
        "rate": "(k_DEG_B_Protein_other * B_Protein_other)*int_vol", 
        "name_alt": "v_DEG_B_Protein_other", 
        "name": "275", 
        "compartments": [
            "intracellular"
        ], 
        "y": "9.6702", 
        "x": "19.178", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "144", 
            "262"
        ], 
        "symbol": "rect", 
        "module": [
            "GEX_TRL"
        ], 
        "links_from": [
            "265"
        ], 
        "rate": "(k_DIS_Ribosome_mRNA_other * mRNA_other_Ribosome)*int_vol", 
        "name_alt": "v_DIS_Ribosome_mRNA_other", 
        "name": "276", 
        "compartments": [
            "intracellular"
        ], 
        "y": "11.254", 
        "x": "19.178", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "266"
        ], 
        "symbol": "rect", 
        "module": [
            "GEX_TRL"
        ], 
        "links_from": [
            "144", 
            "263"
        ], 
        "rate": "(k_ASS_Ribosome_mRNA_R * Ribosome * mRNA_R)*int_vol", 
        "name_alt": "v_ASS_Ribosome_mRNA_R", 
        "name": "277", 
        "compartments": [
            "intracellular"
        ], 
        "y": "14.254", 
        "x": "19.178", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "144", 
            "263"
        ], 
        "symbol": "rect", 
        "module": [
            "GEX_TRL"
        ], 
        "links_from": [
            "266"
        ], 
        "rate": "(k_DIS_Ribosome_mRNA_R * mRNA_R_Ribosome)*int_vol", 
        "name_alt": "v_DIS_Ribosome_mRNA_R", 
        "name": "278", 
        "compartments": [
            "intracellular"
        ], 
        "y": "20.004", 
        "x": "13.345", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "267", 
            "160", 
            "260"
        ], 
        "symbol": "rect", 
        "module": [
            "GEX_TRL"
        ], 
        "links_from": [
            "180", 
            "172", 
            "265"
        ], 
        "rate": "(vmax_TRSL_mRNA_other * (ATP/(k_atp + ATP)) * (AA/(k_aa + AA)) * (mRNA_other_Ribosome/(k_TRSL_mRNA_other + mRNA_other_Ribosome)))*int_vol", 
        "name_alt": "v_TRSL_mRNA_other", 
        "name": "279", 
        "compartments": [
            "intracellular"
        ], 
        "y": "14.087", 
        "x": "4.6782", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "264", 
            "160", 
            "260"
        ], 
        "symbol": "rect", 
        "module": [
            "GEX_TRL"
        ], 
        "links_from": [
            "180", 
            "172", 
            "268"
        ], 
        "rate": "(vmax_TRSL_mRNA_met * (ATP/(k_atp + ATP)) * (AA/(k_aa + AA)) * (mRNA_met_Ribosome/(k_TRSL_mRNA_met + mRNA_met_Ribosome)))*int_vol", 
        "name_alt": "v_TRSL_mRNA_met", 
        "name": "280", 
        "compartments": [
            "intracellular"
        ], 
        "y": "5.5036", 
        "x": "4.6782", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "307", 
            "308", 
            "310", 
            "319"
        ], 
        "symbol": "circle", 
        "module": [
            "MET_CCM"
        ], 
        "y": "5.5036", 
        "annotation": "CHEBI:57945", 
        "name_alt": "NADH", 
        "name": "281", 
        "state": "-2", 
        "links_from": [
            "315", 
            "318"
        ], 
        "x": "5.5949", 
        "compartment": "intracellular", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "336"
        ], 
        "symbol": "circle", 
        "module": [
            "MET_CCM", 
            "MET_CWS"
        ], 
        "y": "11.978", 
        "annotation": "CHEBI:28808", 
        "name_alt": "mannan", 
        "name": "282", 
        "state": "0", 
        "links_from": [
            "317"
        ], 
        "x": "12.617", 
        "compartment": "intracellular", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "315", 
            "318"
        ], 
        "symbol": "circle", 
        "module": [
            "MET_CCM"
        ], 
        "y": "5.4202", 
        "annotation": "CHEBI:57540", 
        "name_alt": "NAD", 
        "name": "283", 
        "state": "-1", 
        "links_from": [
            "307", 
            "308", 
            "310", 
            "319"
        ], 
        "x": "13.762", 
        "compartment": "intracellular", 
        "is_ode": false
    }, 
    {
        "links_to": [], 
        "symbol": "circle", 
        "module": [
            "MET_CCM"
        ], 
        "y": "5.4202", 
        "annotation": "YCM:pyr_check", 
        "name_alt": "pyr_check", 
        "name": "284", 
        "state": "-1", 
        "links_from": [
            "315"
        ], 
        "x": "14.678", 
        "compartment": "intracellular", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "312", 
            "316"
        ], 
        "symbol": "circle", 
        "module": [
            "MET_CCM"
        ], 
        "y": "5.4202", 
        "annotation": "YCM:NA_RNA", 
        "name_alt": "NA_RNA", 
        "name": "285", 
        "state": "0", 
        "links_from": [
            "309"
        ], 
        "x": "19.262", 
        "compartment": "intracellular", 
        "is_ode": false
    }, 
    {
        "links_to": [], 
        "symbol": "circle", 
        "module": [
            "MET_CCM"
        ], 
        "y": "6.0869", 
        "annotation": "YCM:TriP_check", 
        "name_alt": "TriP_check", 
        "name": "286", 
        "state": "-2", 
        "links_from": [
            "320"
        ], 
        "x": "19.262", 
        "compartment": "intracellular", 
        "is_ode": false
    }, 
    {
        "links_to": [], 
        "symbol": "circle", 
        "module": [
            "MET_CCM"
        ], 
        "y": "6.7536", 
        "annotation": "YCM:EtOH_check", 
        "name_alt": "EtOH_check", 
        "name": "287", 
        "state": "0", 
        "links_from": [
            "319"
        ], 
        "x": "19.262", 
        "compartment": "intracellular", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "419"
        ], 
        "symbol": "circle", 
        "module": [
            "MET_CCM", 
            "TRP_NUT"
        ], 
        "y": "13.087", 
        "annotation": "CHEBI:16236", 
        "name_alt": "EtOH", 
        "name": "288", 
        "state": "0", 
        "links_from": [
            "319"
        ], 
        "x": "10.806", 
        "compartment": "intracellular", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "304", 
            "305", 
            "306", 
            "309", 
            "313", 
            "317", 
            "320"
        ], 
        "symbol": "circle", 
        "module": [
            "MET_CCM"
        ], 
        "y": "7.4202", 
        "annotation": "CHEBI:58225", 
        "name_alt": "HexP", 
        "name": "289", 
        "state": "-2", 
        "links_from": [
            "314"
        ], 
        "x": "19.262", 
        "compartment": "intracellular", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "307"
        ], 
        "symbol": "circle", 
        "module": [
            "MET_CCM"
        ], 
        "y": "20.087", 
        "annotation": "YCM:O2_check", 
        "name_alt": "O2_check", 
        "name": "290", 
        "state": "0", 
        "links_from": [], 
        "x": "19.262", 
        "compartment": "intracellular", 
        "is_ode": false
    }, 
    {
        "links_to": [], 
        "symbol": "circle", 
        "module": [
            "MET_CCM", 
            "MET_CWS"
        ], 
        "y": "20.087", 
        "annotation": "YCM:lipid", 
        "name_alt": "lipid", 
        "name": "291", 
        "state": "0", 
        "links_from": [
            "313"
        ], 
        "x": "18.345", 
        "compartment": "intracellular", 
        "is_ode": false
    }, 
    {
        "links_to": [], 
        "symbol": "circle", 
        "module": [
            "MET_CCM"
        ], 
        "y": "20.087", 
        "annotation": "CHEBI:24636", 
        "name_alt": "H", 
        "name": "292", 
        "state": "+1", 
        "links_from": [
            "304", 
            "305", 
            "309", 
            "312", 
            "313"
        ], 
        "x": "15.845", 
        "compartment": "intracellular", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "304", 
            "309", 
            "313", 
            "318", 
            "319"
        ], 
        "symbol": "circle", 
        "module": [
            "MET_CCM"
        ], 
        "y": "20.087", 
        "annotation": "CHEBI:15361", 
        "name_alt": "pyr", 
        "name": "293", 
        "state": "-1", 
        "links_from": [
            "315"
        ], 
        "x": "14.928", 
        "compartment": "intracellular", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "314"
        ], 
        "symbol": "circle", 
        "module": [
            "MET_CCM"
        ], 
        "y": "20.087", 
        "annotation": "CHEBI:17634", 
        "name_alt": "Glc", 
        "name": "294", 
        "state": "0", 
        "links_from": [], 
        "x": "9.9282", 
        "compartment": "intracellular", 
        "is_ode": false
    }, 
    {
        "links_to": [], 
        "symbol": "circle", 
        "module": [
            "MET_CCM"
        ], 
        "y": "20.087", 
        "annotation": "YCM:CO2_check", 
        "name_alt": "CO2_check", 
        "name": "295", 
        "state": "0", 
        "links_from": [
            "318", 
            "319"
        ], 
        "x": "9.0116", 
        "compartment": "intracellular", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "338"
        ], 
        "symbol": "circle", 
        "module": [
            "MET_CCM", 
            "MET_CWS"
        ], 
        "y": "13.422", 
        "annotation": "CHEBI:17029", 
        "name_alt": "chitin", 
        "name": "296", 
        "state": "0", 
        "links_from": [
            "305"
        ], 
        "x": "13.217", 
        "compartment": "intracellular", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "304", 
            "305", 
            "309", 
            "312", 
            "313"
        ], 
        "symbol": "circle", 
        "module": [
            "MET_CCM", 
            "TRP_NUT"
        ], 
        "y": "8.7536", 
        "annotation": "CHEBI:28938", 
        "name_alt": "NH4", 
        "name": "297", 
        "state": "+1", 
        "links_from": [], 
        "x": "4.5949", 
        "compartment": "intracellular", 
        "is_ode": false
    }, 
    {
        "links_to": [], 
        "symbol": "circle", 
        "module": [
            "MET_CCM"
        ], 
        "y": "16.754", 
        "annotation": "CHEBI:17754", 
        "name_alt": "glycerol", 
        "name": "298", 
        "state": "0", 
        "links_from": [
            "308"
        ], 
        "x": "19.345", 
        "compartment": "intracellular", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "337"
        ], 
        "symbol": "circle", 
        "module": [
            "MET_CCM", 
            "MET_CWS"
        ], 
        "y": "10.68", 
        "annotation": "CHEBI:37671", 
        "name_alt": "glucan", 
        "name": "299", 
        "state": "0", 
        "links_from": [
            "306"
        ], 
        "x": "11.786", 
        "compartment": "intracellular", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "308", 
            "309", 
            "315"
        ], 
        "symbol": "circle", 
        "module": [
            "MET_CCM"
        ], 
        "y": "17.92", 
        "annotation": "CHEBI:58027", 
        "name_alt": "TriP", 
        "name": "300", 
        "state": "-2", 
        "links_from": [
            "304", 
            "313", 
            "320"
        ], 
        "x": "4.5116", 
        "compartment": "intracellular", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "421"
        ], 
        "symbol": "circle", 
        "module": [
            "MET_CCM", 
            "TRP_NUT"
        ], 
        "y": "11.335", 
        "annotation": "CHEBI:16526", 
        "name_alt": "CO2", 
        "name": "301", 
        "state": "0", 
        "links_from": [
            "318", 
            "319"
        ], 
        "x": "11.431", 
        "compartment": "intracellular", 
        "is_ode": false
    }, 
    {
        "links_to": [], 
        "symbol": "circle", 
        "module": [
            "MET_CCM"
        ], 
        "y": "12.254", 
        "annotation": "YCM:HexP_check", 
        "name_alt": "HexP_check", 
        "name": "302", 
        "state": "-2", 
        "links_from": [
            "314"
        ], 
        "x": "4.5116", 
        "compartment": "intracellular", 
        "is_ode": false
    }, 
    {
        "links_to": [], 
        "symbol": "circle", 
        "module": [
            "MET_CCM"
        ], 
        "y": "5.3369", 
        "annotation": "YCM:NA_DNA", 
        "name_alt": "NA_DNA", 
        "name": "303", 
        "state": "0", 
        "links_from": [
            "312"
        ], 
        "x": "6.5116", 
        "compartment": "intracellular", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "180", 
            "292", 
            "175", 
            "300", 
            "160"
        ], 
        "symbol": "rect", 
        "module": [
            "MET_CCM"
        ], 
        "links_from": [
            "289", 
            "293", 
            "172", 
            "297"
        ], 
        "rate": "(E_v_AA_f * ((kf_v_AA_f * (NH4/Km_v_AA_f_NH4) * (HexP/Km_v_AA_f_HexP) * (pyr/Km_v_AA_f_pyr) * (ATP/Km_v_AA_f_ATP) - kr_v_AA_f * (AA/Km_v_AA_f_AA) * (Pi/Km_v_AA_f_Pi) * (ADP/Km_v_AA_f_ADP) * (TriP/Km_v_AA_f_TriP))/((1+(NH4/Km_v_AA_f_NH4))*(1+(HexP/Km_v_AA_f_HexP))*(1+(pyr/Km_v_AA_f_pyr))*(1+(ATP/Km_v_AA_f_ATP)) + (1+(AA/Km_v_AA_f_AA))*(1+(Pi/Km_v_AA_f_Pi))*(1+(ADP/Km_v_AA_f_ADP))*(1+(TriP/Km_v_AA_f_TriP)) - 1)) * int_vol)", 
        "name_alt": "v_AA_f", 
        "name": "304", 
        "compartments": [
            "intracellular"
        ], 
        "y": "5.3369", 
        "x": "7.4282", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "292", 
            "175", 
            "296", 
            "160"
        ], 
        "symbol": "rect", 
        "module": [
            "MET_CCM"
        ], 
        "links_from": [
            "289", 
            "172", 
            "297"
        ], 
        "rate": "(E_v_chitin_f * ((kf_v_chitin_f * (NH4/Km_v_chitin_f_NH4) * (HexP/Km_v_chitin_f_HexP) * (ATP/Km_v_chitin_f_ATP) - kr_v_chitin_f * (Pi/Km_v_chitin_f_Pi) * (chitin/Km_v_chitin_f_chitin) * (ADP/Km_v_chitin_f_ADP))/((1+(NH4/Km_v_chitin_f_NH4))*(1+(HexP/Km_v_chitin_f_HexP))*(1+(ATP/Km_v_chitin_f_ATP)) + (1+(Pi/Km_v_chitin_f_Pi))*(1+(chitin/Km_v_chitin_f_chitin))*(1+(ADP/Km_v_chitin_f_ADP)) - 1)) * int_vol)", 
        "name_alt": "v_chitin_f", 
        "name": "305", 
        "compartments": [
            "intracellular"
        ], 
        "y": "5.3369", 
        "x": "8.3449", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "175", 
            "160", 
            "299"
        ], 
        "symbol": "rect", 
        "module": [
            "MET_CCM"
        ], 
        "links_from": [
            "289", 
            "172"
        ], 
        "rate": "(E_glucan * ((kf_glucan * (HexP/Km_glucan_HexP)*(ATP/Km_glucan_ATP) - kr_glucan * (glucan/Km_glucan_glucan)*(ADP/Km_glucan_ADP)*(Pi/Km_glucan_Pi))/((1+(HexP/Km_glucan_HexP))*(1+(ATP/Km_glucan_ATP)) + (1+(glucan/Km_glucan_glucan))*(1+(ADP/Km_glucan_ADP))*(1+(Pi/Km_glucan_Pi)) - 1)) * int_vol)", 
        "name_alt": "v_glucan_f", 
        "name": "306", 
        "compartments": [
            "intracellular"
        ], 
        "y": "5.3369", 
        "x": "9.2616", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "283", 
            "172"
        ], 
        "symbol": "rect", 
        "module": [
            "MET_CCM"
        ], 
        "links_from": [
            "281", 
            "290", 
            "175", 
            "160"
        ], 
        "rate": "(((1./(1.+ exp(k1_resp*(ATP - ATPcrit)))) * kf_resp * NADH * ADP * Pi) * int_vol)", 
        "name_alt": "v_resp", 
        "name": "307", 
        "compartments": [
            "intracellular"
        ], 
        "y": "5.3369", 
        "x": "10.178", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "175", 
            "298", 
            "283"
        ], 
        "symbol": "rect", 
        "module": [
            "MET_CCM"
        ], 
        "links_from": [
            "281", 
            "300"
        ], 
        "rate": "(E_v_glycerol_syn * ((kf_v_glycerol_syn * (NADH/Km_v_glycerol_syn_NADH) * (TriP/Km_v_glycerol_syn_TriP) - kr_v_glycerol_syn * (Pi/Km_v_glycerol_syn_Pi) * (glycerol/Km_v_glycerol_syn_glycerol) * (NAD/Km_v_glycerol_syn_NAD))/((1+(NADH/Km_v_glycerol_syn_NADH))*(1+(TriP/Km_v_glycerol_syn_TriP)) + (1+(Pi/Km_v_glycerol_syn_Pi))*(1+(glycerol/Km_v_glycerol_syn_glycerol))*(1+(NAD/Km_v_glycerol_syn_NAD)) - 1)) * int_vol)", 
        "name_alt": "v_glycerol_syn", 
        "name": "308", 
        "compartments": [
            "intracellular"
        ], 
        "y": "5.2536", 
        "x": "17.428", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "292", 
            "175", 
            "285", 
            "160"
        ], 
        "symbol": "rect", 
        "module": [
            "MET_CCM"
        ], 
        "links_from": [
            "289", 
            "293", 
            "300", 
            "172", 
            "297"
        ], 
        "rate": "(E_v_NA_RNA_f * ((kf_v_NA_RNA_f * (NH4/Km_v_NA_RNA_f_NH4) * (HexP/Km_v_NA_RNA_f_HexP) * (pyr/Km_v_NA_RNA_f_pyr) * (ATP/Km_v_NA_RNA_f_ATP) * (TriP/Km_v_NA_RNA_f_TriP) - kr_v_NA_RNA_f * (Pi/Km_v_NA_RNA_f_Pi) * (NA_RNA/Km_v_NA_RNA_f_NA_RNA) * (ADP/Km_v_NA_RNA_f_ADP))/((1+(NH4/Km_v_NA_RNA_f_NH4))*(1+(HexP/Km_v_NA_RNA_f_HexP))*(1+(pyr/Km_v_NA_RNA_f_pyr))*(1+(ATP/Km_v_NA_RNA_f_ATP))*(1+(TriP/Km_v_NA_RNA_f_TriP)) + (1+(Pi/Km_v_NA_RNA_f_Pi))*(1+(NA_RNA/Km_v_NA_RNA_f_NA_RNA))*(1+(ADP/Km_v_NA_RNA_f_ADP)) - 1)) * int_vol)", 
        "name_alt": "v_NA_RNA_f", 
        "name": "309", 
        "compartments": [
            "intracellular"
        ], 
        "y": "8.0869", 
        "x": "19.428", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "283"
        ], 
        "symbol": "rect", 
        "module": [
            "MET_CCM"
        ], 
        "links_from": [
            "180", 
            "160", 
            "281"
        ], 
        "rate": "(((1./(1.+ exp(k1_NAD_syn*((NAD+NADH) - NADNADHcrit)))) * kf_NAD_syn * AA * ADP) * int_vol)", 
        "name_alt": "v_NAD_syn", 
        "name": "310", 
        "compartments": [
            "intracellular"
        ], 
        "y": "13.504", 
        "x": "19.428", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "175", 
            "160"
        ], 
        "symbol": "rect", 
        "module": [
            "MET_CCM"
        ], 
        "links_from": [
            "172"
        ], 
        "rate": "((0.5 * ATP) * int_vol)", 
        "name_alt": "v_ATP_con", 
        "name": "311", 
        "compartments": [
            "intracellular"
        ], 
        "y": "20.254", 
        "x": "17.428", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "292", 
            "303"
        ], 
        "symbol": "rect", 
        "module": [
            "MET_CCM"
        ], 
        "links_from": [
            "297", 
            "285"
        ], 
        "rate": "(E_v_NA_DNA_syn * ((kf_v_NA_DNA_syn * (NH4/Km_v_NA_DNA_syn_NH4) * (NA_RNA/Km_v_NA_DNA_syn_NA_RNA) - kr_v_NA_DNA_syn * (NA_DNA/Km_v_NA_DNA_syn_NA_DNA))/((1+(NH4/Km_v_NA_DNA_syn_NH4))*(1+(NA_RNA/Km_v_NA_DNA_syn_NA_RNA)) + (1+(NA_DNA/Km_v_NA_DNA_syn_NA_DNA)) - 1)) * int_vol)", 
        "name_alt": "v_NA_DNA_syn", 
        "name": "312", 
        "compartments": [
            "intracellular"
        ], 
        "y": "20.254", 
        "x": "12.428", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "292", 
            "175", 
            "291", 
            "160", 
            "300"
        ], 
        "symbol": "rect", 
        "module": [
            "MET_CCM"
        ], 
        "links_from": [
            "289", 
            "293", 
            "172", 
            "297"
        ], 
        "rate": "(E_v_lipid_f * ((kf_v_lipid_f * (NH4/Km_v_lipid_f_NH4) * (HexP/Km_v_lipid_f_HexP) * (pyr/Km_v_lipid_f_pyr) * (ATP/Km_v_lipid_f_ATP) - kr_v_lipid_f * (Pi/Km_v_lipid_f_Pi) * (lipid/Km_v_lipid_f_lipid) * (ADP/Km_v_lipid_f_ADP) * (TriP/Km_v_lipid_f_TriP))/((1+(NH4/Km_v_lipid_f_NH4))*(1+(HexP/Km_v_lipid_f_HexP))*(1+(pyr/Km_v_lipid_f_pyr))*(1+(ATP/Km_v_lipid_f_ATP)) + (1+(Pi/Km_v_lipid_f_Pi))*(1+(lipid/Km_v_lipid_f_lipid))*(1+(ADP/Km_v_lipid_f_ADP))*(1+(TriP/Km_v_lipid_f_TriP)) - 1)) * int_vol)", 
        "name_alt": "v_lipid_f", 
        "name": "313", 
        "compartments": [
            "intracellular"
        ], 
        "y": "20.254", 
        "x": "11.512", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "289", 
            "302", 
            "160"
        ], 
        "symbol": "rect", 
        "module": [
            "MET_CCM"
        ], 
        "links_from": [
            "294", 
            "172"
        ], 
        "rate": "(E_v_HK * ((kf_v_HK * (Glc/Km_v_HK_Glc) * (ATP/Km_v_HK_ATP) - kr_v_HK * (HexP/Km_v_HK_HexP) * (ADP/Km_v_HK_ADP))/((1+(Glc/Km_v_HK_Glc))*(1+(ATP/Km_v_HK_ATP)) + (1+(HexP/Km_v_HK_HexP))*(1+(ADP/Km_v_HK_ADP)) - 1)) * int_vol)", 
        "name_alt": "v_HK", 
        "name": "314", 
        "compartments": [
            "intracellular"
        ], 
        "y": "14.754", 
        "x": "4.4282", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "293", 
            "281", 
            "284", 
            "172"
        ], 
        "symbol": "rect", 
        "module": [
            "MET_CCM"
        ], 
        "links_from": [
            "283", 
            "175", 
            "300", 
            "160"
        ], 
        "rate": "(E_pyr * ((kf_pyr * (Pi/Km_pyr_Pi) * (NAD/Km_pyr_NAD) * (ADP/Km_pyr_ADP)**2.0 * (TriP/Km_pyr_TriP) - kr_pyr * (pyr/Km_pyr_pyr) * (NADH/Km_pyr_NADH) * (ATP/Km_pyr_ATP)**2.0)/((1+(Pi/Km_pyr_Pi))*(1+(NAD/Km_pyr_NAD))*(1+(ADP/Km_pyr_ADP)**1+(ADP/Km_pyr_ADP)**2)*(1+(TriP/Km_pyr_TriP)) + (1+(pyr/Km_pyr_pyr))*(1+(NADH/Km_pyr_NADH))*(1+(ATP/Km_pyr_ATP)**1+(ATP/Km_pyr_ATP)**2) - 1)) * int_vol)", 
        "name_alt": "v_pyr", 
        "name": "315", 
        "compartments": [
            "intracellular"
        ], 
        "y": "6.4202", 
        "x": "4.4282", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "160"
        ], 
        "symbol": "rect", 
        "module": [
            "MET_CCM"
        ], 
        "links_from": [
            "175", 
            "285", 
            "172"
        ], 
        "rate": "(((1./(1.+ exp(k1_ADP_syn*((ATP+ADP) - ATPADPcrit)))) * kf_ADP_syn * NA_RNA * Pi**2) * int_vol)", 
        "name_alt": "v_ADP_syn", 
        "name": "316", 
        "compartments": [
            "intracellular"
        ], 
        "y": "19.254", 
        "x": "19.512", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "175", 
            "282", 
            "160"
        ], 
        "symbol": "rect", 
        "module": [
            "MET_CCM"
        ], 
        "links_from": [
            "289", 
            "172"
        ], 
        "rate": "(E_mannan * ((kf_mannan * (HexP/Km_mannan_HexP)*(ATP/Km_mannan_ATP) - kr_mannan * (mannan/Km_mannan_mannan)*(ADP/Km_mannan_ADP)*(Pi/Km_mannan_Pi))/((1+(HexP/Km_mannan_HexP))*(1+(ATP/Km_mannan_ATP)) + (1+(mannan/Km_mannan_mannan))*(1+(ADP/Km_mannan_ADP))*(1+(Pi/Km_mannan_Pi)) - 1)) * int_vol)", 
        "name_alt": "v_mannan_f", 
        "name": "317", 
        "compartments": [
            "intracellular"
        ], 
        "y": "15.92", 
        "x": "4.3449", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "281", 
            "295", 
            "301", 
            "172"
        ], 
        "symbol": "rect", 
        "module": [
            "MET_CCM"
        ], 
        "links_from": [
            "293", 
            "175", 
            "160", 
            "283"
        ], 
        "rate": "((kf_TCA * pyr * NAD * ADP * Pi) * int_vol)", 
        "name_alt": "v_TCA", 
        "name": "318", 
        "compartments": [
            "intracellular"
        ], 
        "y": "10.004", 
        "x": "4.3449", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "283", 
            "301", 
            "295", 
            "287", 
            "288"
        ], 
        "symbol": "rect", 
        "module": [
            "MET_CCM"
        ], 
        "links_from": [
            "293", 
            "281"
        ], 
        "rate": "(E_ferm * ((kf_ferm * (pyr/Km_ferm_pyr) * (NADH/Km_ferm_NADH) - kr_ferm * (CO2/Km_ferm_CO2) * (NAD/Km_ferm_NAD) * (EtOH/Km_ferm_EtOH))/((1+(pyr/Km_ferm_pyr))*(1+(NADH/Km_ferm_NADH)) + (1+(CO2/Km_ferm_CO2))*(1+(NAD/Km_ferm_NAD))*(1+(EtOH/Km_ferm_EtOH)) - 1)) * int_vol)", 
        "name_alt": "v_ferm", 
        "name": "319", 
        "compartments": [
            "intracellular"
        ], 
        "y": "5.0869", 
        "x": "11.928", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "286", 
            "300", 
            "160"
        ], 
        "symbol": "rect", 
        "module": [
            "MET_CCM"
        ], 
        "links_from": [
            "289", 
            "172"
        ], 
        "rate": "(E_TriP * ((kf_TriP * (HexP/Km_TriP_HexP) * (ATP/Km_TriP_ATP) - kr_TriP * (ADP/Km_TriP_ADP) * (TriP/Km_TriP_TriP)**2.0)/((1+(HexP/Km_TriP_HexP))*(1+(ATP/Km_TriP_ATP)) + (1+(ADP/Km_TriP_ADP))*(1+(TriP/Km_TriP_TriP)**1+(TriP/Km_TriP_TriP)**2) - 1)) * int_vol)", 
        "name_alt": "v_TriP", 
        "name": "320", 
        "compartments": [
            "intracellular"
        ], 
        "y": "16.087", 
        "x": "19.595", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "324", 
            "325"
        ], 
        "symbol": "circle", 
        "module": [
            "MET_DNA"
        ], 
        "y": "6.6188", 
        "annotation": "YCM:A", 
        "name_alt": "A", 
        "name": "321", 
        "state": "0", 
        "links_from": [
            "326"
        ], 
        "x": "26.294", 
        "compartment": "nucleus", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "324"
        ], 
        "symbol": "circle", 
        "module": [
            "MET_DNA"
        ], 
        "y": "7.3213", 
        "annotation": "YCM:DNA", 
        "name_alt": "DNA", 
        "name": "322", 
        "state": "0", 
        "links_from": [
            "325"
        ], 
        "x": "27.029", 
        "compartment": "nucleus", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "325"
        ], 
        "symbol": "circle", 
        "module": [
            "MET_DNA"
        ], 
        "y": "12.142", 
        "annotation": "YCM:NA_DNA", 
        "name_alt": "NA_DNA_cyt", 
        "name": "323", 
        "state": "0", 
        "links_from": [], 
        "x": "11.405", 
        "compartment": "intracellular", 
        "is_ode": false
    }, 
    {
        "links_to": [], 
        "symbol": "rect", 
        "module": [
            "MET_DNA"
        ], 
        "links_from": [
            "321", 
            "322"
        ], 
        "rate": "(((1./(1.+ exp(-k1_A_con*(DNA - (DNA_crit*16.0e-15/int_vol))))) * kf_A_con * A) * nuc_vol)", 
        "name_alt": "v_A_con", 
        "name": "324", 
        "compartments": [
            "nucleus"
        ], 
        "y": "6.5074", 
        "x": "27.295", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "322"
        ], 
        "symbol": "rect", 
        "module": [
            "MET_DNA"
        ], 
        "links_from": [
            "323", 
            "321"
        ], 
        "rate": "(((1./(1.+ exp(-k1_DNA_syn*(A - (A_crit*16.0e-15/int_vol))))) * kf_DNA_syn * 0.147) * nuc_vol)", 
        "name_alt": "v_DNA_syn", 
        "name": "325", 
        "compartments": [
            "intracellular", 
            "nucleus"
        ], 
        "y": "6.8269", 
        "x": "24.189", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "321"
        ], 
        "symbol": "rect", 
        "module": [
            "MET_DNA"
        ], 
        "links_from": [
            "166"
        ], 
        "rate": "((  (1./(1.+ exp(-k1_A_syn*(Clb5/1.65801328396e-05 - (Clb5_crit*16.0e-15/int_vol)/1.65801328396e-05)))) * kf_A_syn  ) * nuc_vol)", 
        "name_alt": "v_A_syn", 
        "name": "326", 
        "compartments": [
            "nucleus", 
            "intracellular"
        ], 
        "y": "9.4344", 
        "x": "25.115", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "332"
        ], 
        "symbol": "circle", 
        "module": [
            "MET_CWS"
        ], 
        "y": "1.9924", 
        "annotation": "YCM:B_Protein_other", 
        "name_alt": "proteins_cw", 
        "name": "327", 
        "state": "0", 
        "links_from": [
            "335"
        ], 
        "x": "6.1839", 
        "compartment": "cell_wall", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "332"
        ], 
        "symbol": "circle", 
        "module": [
            "MET_CWS"
        ], 
        "y": "2.8327", 
        "annotation": "CHEBI:28808", 
        "name_alt": "mannan_cw", 
        "name": "328", 
        "state": "0", 
        "links_from": [
            "336"
        ], 
        "x": "6.3086", 
        "compartment": "cell_wall", 
        "is_ode": false
    }, 
    {
        "links_to": [], 
        "symbol": "circle", 
        "module": [
            "MET_CWS"
        ], 
        "y": "22.601", 
        "annotation": "SBO:0000468", 
        "name_alt": "pm_vol", 
        "name": "329", 
        "state": "0", 
        "links_from": [], 
        "x": "17.798", 
        "compartment": "plasma_membrane", 
        "is_ode": true
    }, 
    {
        "links_to": [
            "335"
        ], 
        "symbol": "circle", 
        "module": [
            "MET_CWS"
        ], 
        "y": "12.464", 
        "annotation": "YCM:B_Protein_other", 
        "name_alt": "proteins", 
        "name": "330", 
        "state": "0", 
        "links_from": [], 
        "x": "9.2517", 
        "compartment": "intracellular", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "332", 
            "332", 
            "332", 
            "332"
        ], 
        "symbol": "circle", 
        "module": [
            "MET_CWS"
        ], 
        "y": "3.6579", 
        "annotation": "SBO:0000468", 
        "name_alt": "V_cw", 
        "name": "331", 
        "state": "0", 
        "links_from": [], 
        "x": "7.1196", 
        "compartment": "cell_wall", 
        "is_ode": true
    }, 
    {
        "links_to": [
            "335", 
            "336", 
            "337", 
            "338"
        ], 
        "symbol": "triangle", 
        "module": [
            "MET_CWS"
        ], 
        "y": "2.3736", 
        "annotation": "SBO:0000504", 
        "name_alt": "m_cw", 
        "name": "332", 
        "equation": "(((glucan_cw*V_cw)*1e-3)*glucan_mass + ((chitin_cw*V_cw)*1e-3)*chitin_mass + ((mannan_cw*V_cw)*1e-3)*mannan_mass + ((proteins_cw*V_cw)*1e-3)*average_protein_mass)*1e12", 
        "state": "0", 
        "links_from": [
            "333", 
            "331", 
            "334", 
            "331", 
            "328", 
            "331", 
            "327", 
            "331"
        ], 
        "x": "5.2384", 
        "compartment": "cell_wall", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "332"
        ], 
        "symbol": "circle", 
        "module": [
            "MET_CWS"
        ], 
        "y": "3.0124", 
        "annotation": "CHEBI:37671", 
        "name_alt": "glucan_cw", 
        "name": "333", 
        "state": "0", 
        "links_from": [
            "337"
        ], 
        "x": "5.1145", 
        "compartment": "cell_wall", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "332"
        ], 
        "symbol": "circle", 
        "module": [
            "MET_CWS"
        ], 
        "y": "3.6396", 
        "annotation": "CHEBI:17029", 
        "name_alt": "chitin_cw", 
        "name": "334", 
        "state": "0", 
        "links_from": [
            "338"
        ], 
        "x": "6.0176", 
        "compartment": "cell_wall", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "327"
        ], 
        "symbol": "rect", 
        "module": [
            "MET_CWS"
        ], 
        "links_from": [
            "330", 
            "332"
        ], 
        "rate": "((1./(1.+ exp(k_cw*(m_cw - (V_cw * rho_cw * 1e15))))))*(proteins)*int_vol", 
        "name_alt": "CW_proteins", 
        "name": "335", 
        "compartments": [
            "intracellular", 
            "cell_wall"
        ], 
        "y": "0.25346", 
        "x": "8.1141", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "328"
        ], 
        "symbol": "rect", 
        "module": [
            "MET_CWS"
        ], 
        "links_from": [
            "282", 
            "332"
        ], 
        "rate": "((1./(1.+ exp(k_cw*(m_cw - (V_cw * rho_cw * 1e15))))))*(mannan)*int_vol", 
        "name_alt": "CW_mannan", 
        "name": "336", 
        "compartments": [
            "intracellular", 
            "cell_wall"
        ], 
        "y": "1.2478", 
        "x": "5.6667", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "333"
        ], 
        "symbol": "rect", 
        "module": [
            "MET_CWS"
        ], 
        "links_from": [
            "299", 
            "332"
        ], 
        "rate": "((1./(1.+ exp(k_cw*(m_cw - (V_cw * rho_cw * 1e15))))))*(glucan)*int_vol", 
        "name_alt": "CW_glucan", 
        "name": "337", 
        "compartments": [
            "intracellular", 
            "cell_wall"
        ], 
        "y": "4.3633", 
        "x": "8.648", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "334"
        ], 
        "symbol": "rect", 
        "module": [
            "MET_CWS"
        ], 
        "links_from": [
            "296", 
            "332"
        ], 
        "rate": "((1./(1.+ exp(k_cw*(m_cw - (V_cw * rho_cw * 1e15))))))*(chitin)*int_vol", 
        "name_alt": "CW_chitin", 
        "name": "338", 
        "compartments": [
            "intracellular", 
            "cell_wall"
        ], 
        "y": "2.9427", 
        "x": "3.0809", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "387", 
            "392", 
            "398", 
            "370", 
            "342", 
            "374", 
            "382", 
            "358"
        ], 
        "symbol": "circle", 
        "module": [
            "TRP_ION"
        ], 
        "y": "33.213", 
        "annotation": "CHEBI:24636", 
        "name_alt": "h_cyt", 
        "name": "339", 
        "state": "0", 
        "links_from": [
            "391", 
            "397"
        ], 
        "x": "3.9603", 
        "compartment": "cytosol", 
        "is_ode": false
    }, 
    {
        "links_to": [], 
        "symbol": "circle", 
        "module": [
            "TRP_ION"
        ], 
        "y": "33.94", 
        "annotation": "SBML_IMPORT_ANNOTATION:8", 
        "name_alt": "v_v", 
        "name": "340", 
        "state": "0", 
        "links_from": [], 
        "x": "11.696", 
        "compartment": "parameter_compartment", 
        "is_ode": true
    }, 
    {
        "links_to": [
            "387", 
            "397", 
            "379"
        ], 
        "symbol": "circle", 
        "module": [
            "TRP_ION"
        ], 
        "y": "34.304", 
        "annotation": "CHEBI:30616", 
        "name_alt": "atp_cyt", 
        "name": "341", 
        "state": "-4", 
        "links_from": [], 
        "x": "2.6484", 
        "compartment": "cytosol", 
        "is_ode": true
    }, 
    {
        "links_to": [
            "384"
        ], 
        "symbol": "triangle", 
        "module": [
            "TRP_ION"
        ], 
        "y": "32.446", 
        "annotation": "SBML_IMPORT_ANNOTATION:13", 
        "name_alt": "E_pma1", 
        "name": "342", 
        "equation": "(  (  (  ( ( R  *  T )  /  F )   /  1. )   *  log( ( h_ext  /  h_cyt ) ) )   +  ( D_G_ATP  /  F )  )", 
        "state": "0", 
        "links_from": [
            "346", 
            "339", 
            "379"
        ], 
        "x": "10.123", 
        "compartment": "parameter_compartment", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "375", 
            "359"
        ], 
        "symbol": "circle", 
        "module": [
            "TRP_ION"
        ], 
        "y": "33.41", 
        "annotation": "SBO:0000468", 
        "name_alt": "cytosol", 
        "name": "343", 
        "state": "0", 
        "links_from": [], 
        "x": "2.7546", 
        "compartment": "cytosol", 
        "is_ode": true
    }, 
    {
        "links_to": [
            "373", 
            "352", 
            "348", 
            "351", 
            "381", 
            "382", 
            "353", 
            "384", 
            "356", 
            "386", 
            "361", 
            "385"
        ], 
        "symbol": "circle", 
        "module": [
            "TRP_ION"
        ], 
        "y": "31.495", 
        "annotation": "SBML_IMPORT_ANNOTATION:7", 
        "name_alt": "v_m", 
        "name": "344", 
        "state": "0", 
        "links_from": [], 
        "x": "11.543", 
        "compartment": "parameter_compartment", 
        "is_ode": true
    }, 
    {
        "links_to": [
            "391", 
            "397", 
            "374"
        ], 
        "symbol": "circle", 
        "module": [
            "TRP_ION"
        ], 
        "y": "37.861", 
        "annotation": "CHEBI:24636", 
        "name_alt": "h_vac", 
        "name": "345", 
        "state": "0", 
        "links_from": [], 
        "x": "6.3093", 
        "compartment": "vacuole", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "387", 
            "392", 
            "398", 
            "370", 
            "342", 
            "382"
        ], 
        "symbol": "circle", 
        "module": [
            "TRP_ION"
        ], 
        "y": "27.262", 
        "annotation": "CHEBI:24636", 
        "name_alt": "h_ext", 
        "name": "346", 
        "state": "+1", 
        "links_from": [], 
        "x": "2.3621", 
        "compartment": "extracellular", 
        "is_ode": true
    }, 
    {
        "links_to": [
            "393", 
            "351"
        ], 
        "symbol": "circle", 
        "module": [
            "TRP_ION"
        ], 
        "y": "32.346", 
        "annotation": "CHEBI:17996", 
        "name_alt": "cl_cyt", 
        "name": "347", 
        "state": "0", 
        "links_from": [
            "400"
        ], 
        "x": "3.8427", 
        "compartment": "cytosol", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "352"
        ], 
        "symbol": "triangle", 
        "module": [
            "TRP_ION"
        ], 
        "y": "34.704", 
        "annotation": "SBML_IMPORT_ANNOTATION:11", 
        "name_alt": "gp_trk12", 
        "name": "348", 
        "equation": " ( gp_trk12_0  /  ( 1.  + exp((  (  ( ( d_trk12  *  F )  /  R )   /  T )   *  ( v_m  - v_trk12_halfmax ) )) ) ) ", 
        "state": "0", 
        "links_from": [
            "344"
        ], 
        "x": "12.002", 
        "compartment": "parameter_compartment", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "388", 
            "398", 
            "401", 
            "364", 
            "370", 
            "361"
        ], 
        "symbol": "circle", 
        "module": [
            "TRP_ION"
        ], 
        "y": "26.508", 
        "annotation": "CHEBI:29101", 
        "name_alt": "na_ext", 
        "name": "349", 
        "state": "0", 
        "links_from": [], 
        "x": "2.3623", 
        "compartment": "extracellular", 
        "is_ode": true
    }, 
    {
        "links_to": [
            "388", 
            "401", 
            "364", 
            "370", 
            "361"
        ], 
        "symbol": "circle", 
        "module": [
            "TRP_ION"
        ], 
        "y": "32.612", 
        "annotation": "CHEBI:29101", 
        "name_alt": "na_cyt", 
        "name": "350", 
        "state": "0", 
        "links_from": [
            "398", 
            "402"
        ], 
        "x": "2.7382", 
        "compartment": "cytosol", 
        "is_ode": false
    }, 
    {
        "links_to": [], 
        "symbol": "triangle", 
        "module": [
            "TRP_ION"
        ], 
        "y": "31.2", 
        "annotation": "SBML_IMPORT_ANNOTATION:20", 
        "name_alt": "my_J_Cl", 
        "name": "351", 
        "equation": "( ( (  ( surface  /  ( -1.  *  F ) )   *  gp_cl )  *  ( v_m  -  (  (  ( ( R  *  T )  /  F )   /  -1. )   *  log( ( cl_ext  /  cl_cyt ) ) )  ) ) )", 
        "state": "0", 
        "links_from": [
            "368", 
            "344", 
            "383", 
            "347"
        ], 
        "x": "9.3873", 
        "compartment": "parameter_compartment", 
        "is_ode": false
    }, 
    {
        "links_to": [], 
        "symbol": "triangle", 
        "module": [
            "TRP_ION"
        ], 
        "y": "34.364", 
        "annotation": "SBML_IMPORT_ANNOTATION:26", 
        "name_alt": "my_J_trk12", 
        "name": "352", 
        "equation": "( ( (  ( surface  /  ( 1.  *  F ) )   *  gp_trk12 )  *  ( v_m  -  (  (  ( ( R  *  T )  /  F )   /  1. )   *  log( ( k_ext  /  k_cyt ) ) )  ) ) )", 
        "state": "0", 
        "links_from": [
            "368", 
            "348", 
            "344", 
            "363", 
            "366"
        ], 
        "x": "9.703", 
        "compartment": "parameter_compartment", 
        "is_ode": false
    }, 
    {
        "links_to": [], 
        "symbol": "triangle", 
        "module": [
            "TRP_ION"
        ], 
        "y": "31.6", 
        "annotation": "SBML_IMPORT_ANNOTATION:21", 
        "name_alt": "my_J_Ca", 
        "name": "353", 
        "equation": "( ( (  ( surface  /  ( 2.  *  F ) )   *  gp_ca )  *  ( v_m  -  (  (  ( ( R  *  T )  /  F )   /  2. )   *  log( ( ca_ext  /  ca_cyt ) ) )  ) ) )", 
        "state": "0", 
        "links_from": [
            "368", 
            "344", 
            "367", 
            "354"
        ], 
        "x": "10.523", 
        "compartment": "parameter_compartment", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "390", 
            "353"
        ], 
        "symbol": "circle", 
        "module": [
            "TRP_ION"
        ], 
        "y": "33.113", 
        "annotation": "CHEBI:29108", 
        "name_alt": "ca_cyt", 
        "name": "354", 
        "state": "0", 
        "links_from": [
            "399"
        ], 
        "x": "4.8736", 
        "compartment": "cytosol", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "400"
        ], 
        "symbol": "circle", 
        "module": [
            "TRP_ION"
        ], 
        "y": "37.927", 
        "annotation": "CHEBI:17996", 
        "name_alt": "cl_vac", 
        "name": "355", 
        "state": "0", 
        "links_from": [], 
        "x": "7.2881", 
        "compartment": "vacuole", 
        "is_ode": false
    }, 
    {
        "links_to": [], 
        "symbol": "triangle", 
        "module": [
            "TRP_ION"
        ], 
        "y": "34.856", 
        "annotation": "SBML_IMPORT_ANNOTATION:24", 
        "name_alt": "my_J_ena1", 
        "name": "356", 
        "equation": "(( (  ( surface  /  F )   *  I_MAX_ENA1 )  *  tanh((  ( F  /  ( ( 2.  *  R )  *  T ) )   *  ( v_m  - E_ena1 ) )) ))", 
        "state": "0", 
        "links_from": [
            "368", 
            "344", 
            "364"
        ], 
        "x": "8.6404", 
        "compartment": "parameter_compartment", 
        "is_ode": false
    }, 
    {
        "links_to": [], 
        "symbol": "circle", 
        "module": [
            "TRP_ION"
        ], 
        "y": "25.623", 
        "annotation": "SBO:0000468", 
        "name_alt": "extracellular", 
        "name": "357", 
        "state": "0", 
        "links_from": [], 
        "x": "5.1152", 
        "compartment": "extracellular", 
        "is_ode": true
    }, 
    {
        "links_to": [], 
        "symbol": "triangle", 
        "module": [
            "TRP_ION"
        ], 
        "y": "33.996", 
        "annotation": "SBML_IMPORT_ANNOTATION:9", 
        "name_alt": "myph", 
        "name": "358", 
        "equation": "( - log((( h_cyt  *  0.001 )),(10.)) )", 
        "state": "0", 
        "links_from": [
            "339"
        ], 
        "x": "8.6974", 
        "compartment": "parameter_compartment", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "368"
        ], 
        "symbol": "triangle", 
        "module": [
            "TRP_ION"
        ], 
        "y": "34.191", 
        "annotation": "SBML_IMPORT_ANNOTATION:3", 
        "name_alt": "r", 
        "name": "359", 
        "equation": "(  (  ( ( ( cytosol  *  liter_2_fl )  *  3. )  /  4. )   /  3.14159265359 )   **  0.333333333333 )", 
        "state": "0", 
        "links_from": [
            "343"
        ], 
        "x": "10.687", 
        "compartment": "parameter_compartment", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "402"
        ], 
        "symbol": "circle", 
        "module": [
            "TRP_ION"
        ], 
        "y": "39.34", 
        "annotation": "CHEBI:29101", 
        "name_alt": "na_vac", 
        "name": "360", 
        "state": "0", 
        "links_from": [], 
        "x": "7.3866", 
        "compartment": "vacuole", 
        "is_ode": false
    }, 
    {
        "links_to": [], 
        "symbol": "triangle", 
        "module": [
            "TRP_ION"
        ], 
        "y": "33.51", 
        "annotation": "SBML_IMPORT_ANNOTATION:19", 
        "name_alt": "my_J_Na", 
        "name": "361", 
        "equation": "( ( (  ( surface  /  ( 1.  *  F ) )   *  gp_na )  *  ( v_m  -  (  (  ( ( R  *  T )  /  F )   /  1. )   *  log( ( na_ext  /  na_cyt ) ) )  ) ) )", 
        "state": "0", 
        "links_from": [
            "368", 
            "344", 
            "349", 
            "350"
        ], 
        "x": "9.6001", 
        "compartment": "parameter_compartment", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "399"
        ], 
        "symbol": "circle", 
        "module": [
            "TRP_ION"
        ], 
        "y": "38.604", 
        "annotation": "CHEBI:29108", 
        "name_alt": "ca_vac", 
        "name": "362", 
        "state": "0", 
        "links_from": [], 
        "x": "7.4665", 
        "compartment": "vacuole", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "389", 
            "394", 
            "396", 
            "373", 
            "352", 
            "381"
        ], 
        "symbol": "circle", 
        "module": [
            "TRP_ION"
        ], 
        "y": "26.501", 
        "annotation": "CHEBI:29103", 
        "name_alt": "k_ext", 
        "name": "363", 
        "state": "0", 
        "links_from": [], 
        "x": "3.6226", 
        "compartment": "extracellular", 
        "is_ode": true
    }, 
    {
        "links_to": [
            "356"
        ], 
        "symbol": "triangle", 
        "module": [
            "TRP_ION"
        ], 
        "y": "32.298", 
        "annotation": "SBML_IMPORT_ANNOTATION:15", 
        "name_alt": "E_ena1", 
        "name": "364", 
        "equation": "(  (  (  ( ( R  *  T )  /  F )   /  1. )   *  log( ( na_ext  /  na_cyt ) ) )   +  ( D_G_ATP  /  F )  )", 
        "state": "0", 
        "links_from": [
            "349", 
            "350", 
            "379"
        ], 
        "x": "8.0191", 
        "compartment": "parameter_compartment", 
        "is_ode": false
    }, 
    {
        "links_to": [], 
        "symbol": "triangle", 
        "module": [
            "TRP_ION"
        ], 
        "y": "32.259", 
        "annotation": "SBML_IMPORT_ANNOTATION:6", 
        "name_alt": "surface_vac", 
        "name": "365", 
        "equation": "( ( 4.  *  3.14159265359 )  *  ( r_vac  **  2. ) )", 
        "state": "0", 
        "links_from": [
            "372"
        ], 
        "x": "12.307", 
        "compartment": "parameter_compartment", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "389", 
            "394", 
            "396", 
            "373", 
            "352", 
            "381"
        ], 
        "symbol": "circle", 
        "module": [
            "TRP_ION"
        ], 
        "y": "33.873", 
        "annotation": "CHEBI:29103", 
        "name_alt": "k_cyt", 
        "name": "366", 
        "state": "0", 
        "links_from": [
            "395"
        ], 
        "x": "3.7413", 
        "compartment": "cytosol", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "390", 
            "353"
        ], 
        "symbol": "circle", 
        "module": [
            "TRP_ION"
        ], 
        "y": "25.624", 
        "annotation": "CHEBI:29108", 
        "name_alt": "ca_ext", 
        "name": "367", 
        "state": "0", 
        "links_from": [], 
        "x": "2.8925", 
        "compartment": "extracellular", 
        "is_ode": true
    }, 
    {
        "links_to": [
            "373", 
            "352", 
            "351", 
            "381", 
            "382", 
            "353", 
            "384", 
            "356", 
            "361", 
            "385"
        ], 
        "symbol": "triangle", 
        "module": [
            "TRP_ION"
        ], 
        "y": "35.009", 
        "annotation": "SBML_IMPORT_ANNOTATION:4", 
        "name_alt": "surface", 
        "name": "368", 
        "equation": "( ( 4.  *  3.14159265359 )  *  ( r  **  2. ) )", 
        "state": "0", 
        "links_from": [
            "359"
        ], 
        "x": "10.932", 
        "compartment": "parameter_compartment", 
        "is_ode": false
    }, 
    {
        "links_to": [], 
        "symbol": "circle", 
        "module": [
            "TRP_ION"
        ], 
        "y": "30.884", 
        "annotation": "SBO:0000468", 
        "name_alt": "par_vol", 
        "name": "369", 
        "state": "0", 
        "links_from": [], 
        "x": "10.474", 
        "compartment": "parameter_compartment", 
        "is_ode": true
    }, 
    {
        "links_to": [
            "385"
        ], 
        "symbol": "triangle", 
        "module": [
            "TRP_ION"
        ], 
        "y": "33.12", 
        "annotation": "SBML_IMPORT_ANNOTATION:14", 
        "name_alt": "E_nha1", 
        "name": "370", 
        "equation": "(  ( ( R  *  T )  /  F )   *  log( ( ( ( h_ext  **  2. )  *  na_cyt )  /  ( ( h_cyt  **  2. )  *  na_ext ) ) ) )", 
        "state": "0", 
        "links_from": [
            "346", 
            "350", 
            "339", 
            "349"
        ], 
        "x": "11.644", 
        "compartment": "parameter_compartment", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "387", 
            "397", 
            "379"
        ], 
        "symbol": "circle", 
        "module": [
            "TRP_ION"
        ], 
        "y": "34.566", 
        "annotation": "CHEBI:456216", 
        "name_alt": "adp_cyt", 
        "name": "371", 
        "state": "-3", 
        "links_from": [], 
        "x": "3.7445", 
        "compartment": "cytosol", 
        "is_ode": true
    }, 
    {
        "links_to": [
            "365"
        ], 
        "symbol": "triangle", 
        "module": [
            "TRP_ION"
        ], 
        "y": "31.23", 
        "annotation": "SBML_IMPORT_ANNOTATION:5", 
        "name_alt": "r_vac", 
        "name": "372", 
        "equation": "(  (  ( ( ( vacuole  *  liter_2_fl )  *  3. )  /  4. )   /  3.14159265359 )   **  0.333333333333 )", 
        "state": "0", 
        "links_from": [
            "375"
        ], 
        "x": "8.3375", 
        "compartment": "parameter_compartment", 
        "is_ode": false
    }, 
    {
        "links_to": [], 
        "symbol": "triangle", 
        "module": [
            "TRP_ION"
        ], 
        "y": "33.348", 
        "annotation": "SBML_IMPORT_ANNOTATION:25", 
        "name_alt": "my_J_tok1", 
        "name": "373", 
        "equation": "( ( (  ( surface  /  ( 1.  *  F ) )   *  gp_tok1 )  *  ( v_m  -  (  (  ( ( R  *  T )  /  F )   /  1. )   *  log( ( k_ext  /  k_cyt ) ) )  ) ) )", 
        "state": "0", 
        "links_from": [
            "368", 
            "386", 
            "344", 
            "363", 
            "366"
        ], 
        "x": "10.627", 
        "compartment": "parameter_compartment", 
        "is_ode": false
    }, 
    {
        "links_to": [], 
        "symbol": "triangle", 
        "module": [
            "TRP_ION"
        ], 
        "y": "32.036", 
        "annotation": "SBML_IMPORT_ANNOTATION:16", 
        "name_alt": "E_vma1", 
        "name": "374", 
        "equation": "(  (  (  ( ( R  *  T )  /  F )   /  1. )   *  log( ( h_cyt  /  h_vac ) ) )   +  ( D_G_ATP  /  F )  )", 
        "state": "0", 
        "links_from": [
            "339", 
            "345", 
            "379"
        ], 
        "x": "9.2015", 
        "compartment": "parameter_compartment", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "372"
        ], 
        "symbol": "triangle", 
        "module": [
            "TRP_ION"
        ], 
        "y": "38.598", 
        "annotation": "SBO:0000468", 
        "name_alt": "vacuole", 
        "name": "375", 
        "equation": "( 0.2  *  cytosol )", 
        "state": "0", 
        "links_from": [
            "343"
        ], 
        "x": "5.848", 
        "compartment": "vacuole", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "387", 
            "397", 
            "379"
        ], 
        "symbol": "circle", 
        "module": [
            "TRP_ION"
        ], 
        "y": "34.089", 
        "annotation": "CHEBI:43474", 
        "name_alt": "pi_cyt", 
        "name": "376", 
        "state": "-2", 
        "links_from": [], 
        "x": "4.6455", 
        "compartment": "cytosol", 
        "is_ode": true
    }, 
    {
        "links_to": [], 
        "symbol": "circle", 
        "module": [
            "TRP_ION"
        ], 
        "y": "32.341", 
        "annotation": "SBML_IMPORT_ANNOTATION:1", 
        "name_alt": "acid_cytosol_h", 
        "name": "377", 
        "state": "0", 
        "links_from": [], 
        "x": "4.9798", 
        "compartment": "cytosol", 
        "is_ode": true
    }, 
    {
        "links_to": [
            "395"
        ], 
        "symbol": "circle", 
        "module": [
            "TRP_ION"
        ], 
        "y": "39.296", 
        "annotation": "CHEBI:29103", 
        "name_alt": "k_vac", 
        "name": "378", 
        "state": "0", 
        "links_from": [], 
        "x": "6.372", 
        "compartment": "vacuole", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "364", 
            "342", 
            "374"
        ], 
        "symbol": "triangle", 
        "module": [
            "TRP_ION"
        ], 
        "y": "32.707", 
        "annotation": "SBML_IMPORT_ANNOTATION:12", 
        "name_alt": "D_G_ATP", 
        "name": "379", 
        "equation": "( D_G_ATP_0  - ( ( R  *  T )  *  log( ( atp_cyt  /  ( adp_cyt  *  pi_cyt ) ) ) ) )", 
        "state": "0", 
        "links_from": [
            "341", 
            "371", 
            "376"
        ], 
        "x": "9.191", 
        "compartment": "parameter_compartment", 
        "is_ode": false
    }, 
    {
        "links_to": [], 
        "symbol": "circle", 
        "module": [
            "TRP_ION"
        ], 
        "y": "34.841", 
        "annotation": "SBML_IMPORT_ANNOTATION:2", 
        "name_alt": "acid_cytosol", 
        "name": "380", 
        "state": "0", 
        "links_from": [], 
        "x": "5.3131", 
        "compartment": "cytosol", 
        "is_ode": true
    }, 
    {
        "links_to": [], 
        "symbol": "triangle", 
        "module": [
            "TRP_ION"
        ], 
        "y": "32.237", 
        "annotation": "SBML_IMPORT_ANNOTATION:18", 
        "name_alt": "my_J_K", 
        "name": "381", 
        "equation": "( ( (  ( surface  /  ( 1.  *  F ) )   *  gp_k )  *  ( v_m  -  (  (  ( ( R  *  T )  /  F )   /  1. )   *  log( ( k_ext  /  k_cyt ) ) )  ) ) )", 
        "state": "0", 
        "links_from": [
            "368", 
            "344", 
            "363", 
            "366"
        ], 
        "x": "11.299", 
        "compartment": "parameter_compartment", 
        "is_ode": false
    }, 
    {
        "links_to": [], 
        "symbol": "triangle", 
        "module": [
            "TRP_ION"
        ], 
        "y": "33.274", 
        "annotation": "SBML_IMPORT_ANNOTATION:17", 
        "name_alt": "my_J_H", 
        "name": "382", 
        "equation": "( ( (  ( surface  /  ( 1.  *  F ) )   *  gp_h )  *  ( v_m  -  (  (  ( ( R  *  T )  /  F )   /  1. )   *  log( ( h_ext  /  h_cyt ) ) )  ) ) )", 
        "state": "0", 
        "links_from": [
            "368", 
            "344", 
            "346", 
            "339"
        ], 
        "x": "8.2939", 
        "compartment": "parameter_compartment", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "393", 
            "351"
        ], 
        "symbol": "circle", 
        "module": [
            "TRP_ION"
        ], 
        "y": "25.737", 
        "annotation": "CHEBI:17996", 
        "name_alt": "cl_ext", 
        "name": "383", 
        "state": "0", 
        "links_from": [], 
        "x": "4.0291", 
        "compartment": "extracellular", 
        "is_ode": true
    }, 
    {
        "links_to": [], 
        "symbol": "triangle", 
        "module": [
            "TRP_ION"
        ], 
        "y": "35.162", 
        "annotation": "SBML_IMPORT_ANNOTATION:22", 
        "name_alt": "my_J_pma1", 
        "name": "384", 
        "equation": "(( (  ( surface  /  F )   *  I_MAX_PMA1 )  *  tanh((  ( F  /  ( ( 2.  *  R )  *  T ) )   *  ( v_m  - E_pma1 ) )) ))", 
        "state": "0", 
        "links_from": [
            "368", 
            "344", 
            "342"
        ], 
        "x": "9.8626", 
        "compartment": "parameter_compartment", 
        "is_ode": false
    }, 
    {
        "links_to": [], 
        "symbol": "triangle", 
        "module": [
            "TRP_ION"
        ], 
        "y": "30.731", 
        "annotation": "SBML_IMPORT_ANNOTATION:23", 
        "name_alt": "my_J_nha1", 
        "name": "385", 
        "equation": "(( (  ( surface  /  F )   *  G_NHA1 )  *  ( v_m  - E_nha1 ) ))", 
        "state": "0", 
        "links_from": [
            "368", 
            "344", 
            "370"
        ], 
        "x": "11.543", 
        "compartment": "parameter_compartment", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "373"
        ], 
        "symbol": "triangle", 
        "module": [
            "TRP_ION"
        ], 
        "y": "30.731", 
        "annotation": "SBML_IMPORT_ANNOTATION:10", 
        "name_alt": "gp_tok1", 
        "name": "386", 
        "equation": " ( gp_tok1_0  /  ( 1.  + exp((  (  ( ( d_tok1  *  F )  /  R )   /  T )   *  ( v_m  - v_tok1_halfmax ) )) ) ) ", 
        "state": "0", 
        "links_from": [
            "344"
        ], 
        "x": "12.613", 
        "compartment": "parameter_compartment", 
        "is_ode": false
    }, 
    {
        "links_to": [], 
        "symbol": "rect", 
        "module": [
            "TRP_ION"
        ], 
        "links_from": [
            "339", 
            "346", 
            "341", 
            "371", 
            "376"
        ], 
        "rate": "( (  ( surface  /  F )   *  I_MAX_PMA1 )  *  tanh((  ( F  /  ( ( 2.  *  R )  *  T ) )   *  ( v_m  - E_pma1 ) )) )", 
        "name_alt": "J_pma1", 
        "name": "387", 
        "compartments": [
            "cytosol", 
            "extracellular"
        ], 
        "y": "29.621", 
        "x": "2.3724", 
        "is_ode": false
    }, 
    {
        "links_to": [], 
        "symbol": "rect", 
        "module": [
            "TRP_ION"
        ], 
        "links_from": [
            "350", 
            "349"
        ], 
        "rate": " ( (  ( surface  /  ( 1.  *  F ) )   *  gp_na )  *  ( v_m  -  (  (  ( ( R  *  T )  /  F )   /  1. )   *  log( ( na_ext  /  na_cyt ) ) )  ) ) ", 
        "name_alt": "J_na", 
        "name": "388", 
        "compartments": [
            "cytosol", 
            "extracellular"
        ], 
        "y": "29.6", 
        "x": "3.6739", 
        "is_ode": false
    }, 
    {
        "links_to": [], 
        "symbol": "rect", 
        "module": [
            "TRP_ION"
        ], 
        "links_from": [
            "366", 
            "363"
        ], 
        "rate": " ( (  ( surface  /  ( 1.  *  F ) )   *  gp_trk12 )  *  ( v_m  -  (  (  ( ( R  *  T )  /  F )   /  1. )   *  log( ( k_ext  /  k_cyt ) ) )  ) ) ", 
        "name_alt": "J_trk12", 
        "name": "389", 
        "compartments": [
            "cytosol", 
            "extracellular"
        ], 
        "y": "30.957", 
        "x": "6.945", 
        "is_ode": false
    }, 
    {
        "links_to": [], 
        "symbol": "rect", 
        "module": [
            "TRP_ION"
        ], 
        "links_from": [
            "354", 
            "367"
        ], 
        "rate": " ( (  ( surface  /  ( 2.  *  F ) )   *  gp_ca )  *  ( v_m  -  (  (  ( ( R  *  T )  /  F )   /  2. )   *  log( ( ca_ext  /  ca_cyt ) ) )  ) ) ", 
        "name_alt": "J_ca", 
        "name": "390", 
        "compartments": [
            "cytosol", 
            "extracellular"
        ], 
        "y": "30.183", 
        "x": "6.9979", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "339"
        ], 
        "symbol": "rect", 
        "module": [
            "TRP_ION"
        ], 
        "links_from": [
            "345"
        ], 
        "rate": " ( (  ( surface_vac  /  ( 1.  *  F ) )   *  gv_h )  *  ( v_v  -  (  (  ( ( R  *  T )  /  F )   /  1. )   *  log( ( h_cyt  /  h_vac ) ) )  ) ) ", 
        "name_alt": "J_vac_h", 
        "name": "391", 
        "compartments": [
            "vacuole", 
            "cytosol"
        ], 
        "y": "37.554", 
        "x": "3.5048", 
        "is_ode": false
    }, 
    {
        "links_to": [], 
        "symbol": "rect", 
        "module": [
            "TRP_ION"
        ], 
        "links_from": [
            "339", 
            "346"
        ], 
        "rate": " ( (  ( surface  /  ( 1.  *  F ) )   *  gp_h )  *  ( v_m  -  (  (  ( ( R  *  T )  /  F )   /  1. )   *  log( ( h_ext  /  h_cyt ) ) )  ) ) ", 
        "name_alt": "J_h", 
        "name": "392", 
        "compartments": [
            "cytosol", 
            "extracellular"
        ], 
        "y": "30.34", 
        "x": "1.3221", 
        "is_ode": false
    }, 
    {
        "links_to": [], 
        "symbol": "rect", 
        "module": [
            "TRP_ION"
        ], 
        "links_from": [
            "347", 
            "383"
        ], 
        "rate": " ( (  ( surface  /  ( -1.  *  F ) )   *  gp_cl )  *  ( v_m  -  (  (  ( ( R  *  T )  /  F )   /  -1. )   *  log( ( cl_ext  /  cl_cyt ) ) )  ) ) ", 
        "name_alt": "J_cl", 
        "name": "393", 
        "compartments": [
            "cytosol", 
            "extracellular"
        ], 
        "y": "30.616", 
        "x": "0.37533", 
        "is_ode": false
    }, 
    {
        "links_to": [], 
        "symbol": "rect", 
        "module": [
            "TRP_ION"
        ], 
        "links_from": [
            "366", 
            "363"
        ], 
        "rate": " ( (  ( surface  /  ( 1.  *  F ) )   *  gp_k )  *  ( v_m  -  (  (  ( ( R  *  T )  /  F )   /  1. )   *  log( ( k_ext  /  k_cyt ) ) )  ) ) ", 
        "name_alt": "J_k", 
        "name": "394", 
        "compartments": [
            "cytosol", 
            "extracellular"
        ], 
        "y": "31.575", 
        "x": "2.4206", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "366"
        ], 
        "symbol": "rect", 
        "module": [
            "TRP_ION"
        ], 
        "links_from": [
            "378"
        ], 
        "rate": " ( (  ( surface_vac  /  ( 1.  *  F ) )   *  gv_k )  *  ( v_v  -  (  (  ( ( R  *  T )  /  F )   /  1. )   *  log( ( k_cyt  /  k_vac ) ) )  ) ) ", 
        "name_alt": "J_vac_k", 
        "name": "395", 
        "compartments": [
            "vacuole", 
            "cytosol"
        ], 
        "y": "37.159", 
        "x": "4.7889", 
        "is_ode": false
    }, 
    {
        "links_to": [], 
        "symbol": "rect", 
        "module": [
            "TRP_ION"
        ], 
        "links_from": [
            "366", 
            "363"
        ], 
        "rate": " ( (  ( surface  /  ( 1.  *  F ) )   *  gp_tok1 )  *  ( v_m  -  (  (  ( ( R  *  T )  /  F )   /  1. )   *  log( ( k_ext  /  k_cyt ) ) )  ) ) ", 
        "name_alt": "J_tok1", 
        "name": "396", 
        "compartments": [
            "cytosol", 
            "extracellular"
        ], 
        "y": "29.584", 
        "x": "5.5038", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "339"
        ], 
        "symbol": "rect", 
        "module": [
            "TRP_ION"
        ], 
        "links_from": [
            "345", 
            "341", 
            "371", 
            "376"
        ], 
        "rate": "( (  ( surface_vac  /  F )   *  I_MAX_VMA_1 )  *  tanh( ( ( v_v  - E_vma1 )  /  ( ( 2.  *  R )  *  T ) ) ) )", 
        "name_alt": "J_vma1", 
        "name": "397", 
        "compartments": [
            "vacuole", 
            "cytosol"
        ], 
        "y": "35.964", 
        "x": "7.7445", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "350"
        ], 
        "symbol": "rect", 
        "module": [
            "TRP_ION"
        ], 
        "links_from": [
            "339", 
            "346", 
            "349"
        ], 
        "rate": "( (  ( surface  /  F )   *  G_NHA1 )  *  ( v_m  - E_nha1 ) )", 
        "name_alt": "J_nha1", 
        "name": "398", 
        "compartments": [
            "cytosol", 
            "extracellular"
        ], 
        "y": "31.24", 
        "x": "1.0928", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "354"
        ], 
        "symbol": "rect", 
        "module": [
            "TRP_ION"
        ], 
        "links_from": [
            "362"
        ], 
        "rate": " ( (  ( surface_vac  /  ( 2.  *  F ) )   *  gv_ca )  *  ( v_v  -  (  (  ( ( R  *  T )  /  F )   /  2. )   *  log( ( ca_cyt  /  ca_vac ) ) )  ) ) ", 
        "name_alt": "J_vac_ca", 
        "name": "399", 
        "compartments": [
            "vacuole", 
            "cytosol"
        ], 
        "y": "37.043", 
        "x": "6.7833", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "347"
        ], 
        "symbol": "rect", 
        "module": [
            "TRP_ION"
        ], 
        "links_from": [
            "355"
        ], 
        "rate": " ( (  ( surface_vac  /  ( -1.  *  F ) )   *  gv_cl )  *  ( v_v  -  (  (  ( ( R  *  T )  /  F )   /  -1. )   *  log( ( cl_cyt  /  cl_vac ) ) )  ) ) ", 
        "name_alt": "J_vac_cl", 
        "name": "400", 
        "compartments": [
            "vacuole", 
            "cytosol"
        ], 
        "y": "38.208", 
        "x": "3.5687", 
        "is_ode": false
    }, 
    {
        "links_to": [], 
        "symbol": "rect", 
        "module": [
            "TRP_ION"
        ], 
        "links_from": [
            "350", 
            "349"
        ], 
        "rate": "( (  ( surface  /  F )   *  I_MAX_ENA1 )  *  tanh((  ( F  /  ( ( 2.  *  R )  *  T ) )   *  ( v_m  - E_ena1 ) )) )", 
        "name_alt": "J_ena1", 
        "name": "401", 
        "compartments": [
            "cytosol", 
            "extracellular"
        ], 
        "y": "31.597", 
        "x": "4.7185", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "350"
        ], 
        "symbol": "rect", 
        "module": [
            "TRP_ION"
        ], 
        "links_from": [
            "360"
        ], 
        "rate": " ( (  ( surface_vac  /  ( 1.  *  F ) )   *  gv_na )  *  ( v_v  -  (  (  ( ( R  *  T )  /  F )   /  1. )   *  log( ( na_cyt  /  na_vac ) ) )  ) ) ", 
        "name_alt": "J_vac_na", 
        "name": "402", 
        "compartments": [
            "vacuole", 
            "cytosol"
        ], 
        "y": "38.076", 
        "x": "4.8561", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "420", 
            "415"
        ], 
        "symbol": "circle", 
        "module": [
            "TRP_NUT"
        ], 
        "y": "11.101", 
        "annotation": "SBO:0000468", 
        "name_alt": "VOLUME", 
        "name": "403", 
        "state": "0", 
        "links_from": [], 
        "x": "12.711", 
        "compartment": "intracellular", 
        "is_ode": true
    }, 
    {
        "links_to": [], 
        "symbol": "circle", 
        "module": [
            "TRP_NUT"
        ], 
        "y": "23.296", 
        "annotation": "SBO:0000468", 
        "name_alt": "plasmamembrane_vol", 
        "name": "404", 
        "state": "0", 
        "links_from": [], 
        "x": "18.632", 
        "compartment": "plasma_membrane", 
        "is_ode": true
    }, 
    {
        "links_to": [], 
        "symbol": "circle", 
        "module": [
            "TRP_NUT"
        ], 
        "y": "20.42", 
        "annotation": "YCM:AA_check", 
        "name_alt": "AA_trp_check", 
        "name": "405", 
        "state": "0", 
        "links_from": [], 
        "x": "5.5949", 
        "compartment": "intracellular", 
        "is_ode": true
    }, 
    {
        "links_to": [
            "418"
        ], 
        "symbol": "circle", 
        "module": [
            "TRP_NUT"
        ], 
        "y": "11.514", 
        "annotation": "CHEBI:17754", 
        "name_alt": "glycerol_cyt", 
        "name": "406", 
        "state": "0", 
        "links_from": [], 
        "x": "10.372", 
        "compartment": "intracellular", 
        "is_ode": false
    }, 
    {
        "links_to": [], 
        "symbol": "circle", 
        "module": [
            "TRP_NUT"
        ], 
        "y": "26.438", 
        "annotation": "CHEBI:16526", 
        "name_alt": "CO2_ext", 
        "name": "407", 
        "state": "0", 
        "links_from": [
            "421"
        ], 
        "x": "4.8679", 
        "compartment": "extracellular", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "409", 
            "409", 
            "409"
        ], 
        "symbol": "circle", 
        "module": [
            "TRP_NUT"
        ], 
        "y": "14.044", 
        "annotation": "CHEBI:17634", 
        "name_alt": "glucose_cyt", 
        "name": "408", 
        "state": "0", 
        "links_from": [
            "420"
        ], 
        "x": "13.256", 
        "compartment": "intracellular", 
        "is_ode": false
    }, 
    {
        "links_to": [], 
        "symbol": "triangle", 
        "module": [
            "TRP_NUT"
        ], 
        "y": "12.267", 
        "annotation": "SBO:0000627", 
        "name_alt": "glc_uptake", 
        "name": "409", 
        "equation": "SURFACE * V_MAX_HXT * ( (glucose_ext/KM_HXT) - (glucose_cyt/KM_HXT) ) / ( 1 + (glucose_ext/KM_HXT) + (glucose_cyt/KM_HXT) + KI_HXT*glucose_ext*glucose_cyt/(KM_HXT**2))", 
        "state": "0", 
        "links_from": [
            "415", 
            "412", 
            "408", 
            "412", 
            "408", 
            "412", 
            "408"
        ], 
        "x": "10.395", 
        "compartment": "intracellular", 
        "is_ode": false
    }, 
    {
        "links_to": [], 
        "symbol": "circle", 
        "module": [
            "TRP_NUT"
        ], 
        "y": "27.15", 
        "annotation": "SBO:0000468", 
        "name_alt": "VOLUME_EXT", 
        "name": "410", 
        "state": "0", 
        "links_from": [], 
        "x": "5.5736", 
        "compartment": "extracellular", 
        "is_ode": true
    }, 
    {
        "links_to": [], 
        "symbol": "circle", 
        "module": [
            "TRP_NUT"
        ], 
        "y": "28.025", 
        "annotation": "CHEBI:17754", 
        "name_alt": "glycerol_ext", 
        "name": "411", 
        "state": "0", 
        "links_from": [
            "418"
        ], 
        "x": "2.9163", 
        "compartment": "extracellular", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "420", 
            "409", 
            "409", 
            "409"
        ], 
        "symbol": "circle", 
        "module": [
            "TRP_NUT"
        ], 
        "y": "27.954", 
        "annotation": "CHEBI:17634", 
        "name_alt": "glucose_ext", 
        "name": "412", 
        "state": "0", 
        "links_from": [], 
        "x": "4.1392", 
        "compartment": "extracellular", 
        "is_ode": true
    }, 
    {
        "links_to": [], 
        "symbol": "circle", 
        "module": [
            "TRP_NUT"
        ], 
        "y": "28.067", 
        "annotation": "YCM:AA", 
        "name_alt": "AA_ext", 
        "name": "413", 
        "state": "0", 
        "links_from": [], 
        "x": "5.1152", 
        "compartment": "extracellular", 
        "is_ode": true
    }, 
    {
        "links_to": [], 
        "symbol": "circle", 
        "module": [
            "TRP_NUT"
        ], 
        "y": "28.831", 
        "annotation": "CHEBI:43474", 
        "name_alt": "Pi_ext", 
        "name": "414", 
        "state": "-2", 
        "links_from": [], 
        "x": "5.7263", 
        "compartment": "extracellular", 
        "is_ode": true
    }, 
    {
        "links_to": [
            "420", 
            "409"
        ], 
        "symbol": "triangle", 
        "module": [
            "TRP_NUT"
        ], 
        "y": "13.64", 
        "annotation": "SBO:0000467", 
        "name_alt": "SURFACE", 
        "name": "415", 
        "equation": "4*pi*((3./4./pi * VOLUME)**(1/3))**2", 
        "state": "0", 
        "links_from": [
            "403"
        ], 
        "x": "11.921", 
        "compartment": "intracellular", 
        "is_ode": false
    }, 
    {
        "links_to": [], 
        "symbol": "circle", 
        "module": [
            "TRP_NUT"
        ], 
        "y": "27.273", 
        "annotation": "CHEBI:16236", 
        "name_alt": "EtOH_ext", 
        "name": "416", 
        "state": "0", 
        "links_from": [
            "419"
        ], 
        "x": "4.547", 
        "compartment": "extracellular", 
        "is_ode": false
    }, 
    {
        "links_to": [], 
        "symbol": "circle", 
        "module": [
            "TRP_NUT"
        ], 
        "y": "28.678", 
        "annotation": "CHEBI:28938", 
        "name_alt": "NH4_ext", 
        "name": "417", 
        "state": "+1", 
        "links_from": [], 
        "x": "4.0458", 
        "compartment": "extracellular", 
        "is_ode": true
    }, 
    {
        "links_to": [
            "411"
        ], 
        "symbol": "rect", 
        "module": [
            "TRP_NUT"
        ], 
        "links_from": [
            "406"
        ], 
        "rate": "glycerol_mem_permeability * SURFACE * (glycerol_cyt - glycerol_ext)", 
        "name_alt": "glycerol_trp", 
        "name": "418", 
        "compartments": [
            "intracellular", 
            "extracellular"
        ], 
        "y": "22.645", 
        "x": "2.6288", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "416"
        ], 
        "symbol": "rect", 
        "module": [
            "TRP_NUT"
        ], 
        "links_from": [
            "288"
        ], 
        "rate": "EtOH_mem_permeability * SURFACE * 1e-10 * 1e15 * (EtOH - EtOH_ext)", 
        "name_alt": "v_EtOHdif", 
        "name": "419", 
        "compartments": [
            "intracellular", 
            "extracellular"
        ], 
        "y": "22.993", 
        "x": "5.6605", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "408"
        ], 
        "symbol": "rect", 
        "module": [
            "TRP_NUT"
        ], 
        "links_from": [
            "403", 
            "415", 
            "412"
        ], 
        "rate": "SURFACE * V_MAX_HXT * ( (glucose_ext/KM_HXT) - (glucose_cyt/KM_HXT) ) / ( 1 + (glucose_ext/KM_HXT) + (glucose_cyt/KM_HXT) + KI_HXT*glucose_ext*glucose_cyt/(KM_HXT**2))", 
        "name_alt": "v_hxt", 
        "name": "420", 
        "compartments": [
            "intracellular", 
            "extracellular"
        ], 
        "y": "24.304", 
        "x": "7.5405", 
        "is_ode": false
    }, 
    {
        "links_to": [
            "407"
        ], 
        "symbol": "rect", 
        "module": [
            "TRP_NUT"
        ], 
        "links_from": [
            "301"
        ], 
        "rate": "CO2_mem_permeability * SURFACE * 1e-10 * 1e15 * (CO2 - CO2_ext)", 
        "name_alt": "v_C02dif", 
        "name": "421", 
        "compartments": [
            "intracellular", 
            "extracellular"
        ], 
        "y": "22.627", 
        "x": "3.9031", 
        "is_ode": false
    }
]
var links =[
    {
        "target_alt": "dR_ref", 
        "symbol": "circle", 
        "target": "10", 
        "source_alt": "R_ref", 
        "source": "12"
    }, 
    {
        "target_alt": "dR_ref", 
        "symbol": "circle", 
        "target": "10", 
        "source_alt": "r", 
        "source": "9"
    }, 
    {
        "target_alt": "dR_ref", 
        "symbol": "circle", 
        "target": "10", 
        "source_alt": "pi_t", 
        "source": "6"
    }, 
    {
        "target_alt": "G", 
        "symbol": "circle", 
        "target": "1", 
        "source_alt": "r", 
        "source": "9"
    }, 
    {
        "target_alt": "dr_b", 
        "symbol": "circle", 
        "target": "3", 
        "source_alt": "dR_ref", 
        "source": "10"
    }, 
    {
        "target_alt": "int_vol", 
        "symbol": "circle", 
        "target": "4", 
        "source_alt": "V", 
        "source": "11"
    }, 
    {
        "target_alt": "V_ref", 
        "symbol": "circle", 
        "target": "7", 
        "source_alt": "R_ref", 
        "source": "12"
    }, 
    {
        "target_alt": "pi_i", 
        "symbol": "circle", 
        "target": "8", 
        "source_alt": "c_i", 
        "source": "2"
    }, 
    {
        "target_alt": "pi_i", 
        "symbol": "circle", 
        "target": "8", 
        "source_alt": "V", 
        "source": "11"
    }, 
    {
        "target_alt": "r", 
        "symbol": "circle", 
        "target": "9", 
        "source_alt": "r_os", 
        "source": "5"
    }, 
    {
        "target_alt": "r", 
        "symbol": "circle", 
        "target": "9", 
        "source_alt": "r_b", 
        "source": "13"
    }, 
    {
        "target_alt": "dr_os", 
        "symbol": "circle", 
        "target": "0", 
        "source_alt": "pi_t", 
        "source": "6"
    }, 
    {
        "target_alt": "dr_os", 
        "symbol": "circle", 
        "target": "0", 
        "source_alt": "pi_e", 
        "source": "15"
    }, 
    {
        "target_alt": "dr_os", 
        "symbol": "circle", 
        "target": "0", 
        "source_alt": "pi_i", 
        "source": "8"
    }, 
    {
        "target_alt": "V", 
        "symbol": "circle", 
        "target": "11", 
        "source_alt": "r", 
        "source": "9"
    }, 
    {
        "target_alt": "dr", 
        "symbol": "circle", 
        "target": "14", 
        "source_alt": "dR_ref", 
        "source": "10"
    }, 
    {
        "target_alt": "dr", 
        "symbol": "circle", 
        "target": "14", 
        "source_alt": "pi_t", 
        "source": "6"
    }, 
    {
        "target_alt": "dr", 
        "symbol": "circle", 
        "target": "14", 
        "source_alt": "pi_e", 
        "source": "15"
    }, 
    {
        "target_alt": "dr", 
        "symbol": "circle", 
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
        "target": "189", 
        "source_alt": "NA", 
        "source": "153"
    }, 
    {
        "target_alt": "v_mCln3_TRSC", 
        "target": "189", 
        "source_alt": "ATP", 
        "source": "172"
    }, 
    {
        "target_alt": "Pi", 
        "target": "175", 
        "source_alt": "v_mCln3_TRSC", 
        "source": "189"
    }, 
    {
        "target_alt": "mCln3", 
        "target": "149", 
        "source_alt": "v_mCln3_TRSC", 
        "source": "189"
    }, 
    {
        "target_alt": "ADP", 
        "target": "160", 
        "source_alt": "v_mCln3_TRSC", 
        "source": "189"
    }, 
    {
        "target_alt": "v_mWhi5_TRSC", 
        "target": "190", 
        "source_alt": "NA", 
        "source": "153"
    }, 
    {
        "target_alt": "v_mWhi5_TRSC", 
        "target": "190", 
        "source_alt": "ATP", 
        "source": "172"
    }, 
    {
        "target_alt": "mWhi5", 
        "target": "147", 
        "source_alt": "v_mWhi5_TRSC", 
        "source": "190"
    }, 
    {
        "target_alt": "Pi", 
        "target": "175", 
        "source_alt": "v_mWhi5_TRSC", 
        "source": "190"
    }, 
    {
        "target_alt": "ADP", 
        "target": "160", 
        "source_alt": "v_mWhi5_TRSC", 
        "source": "190"
    }, 
    {
        "target_alt": "v_mCdc14_TRSL", 
        "target": "191", 
        "source_alt": "AA", 
        "source": "180"
    }, 
    {
        "target_alt": "v_mCdc14_TRSL", 
        "target": "191", 
        "source_alt": "ATP", 
        "source": "172"
    }, 
    {
        "target_alt": "Pi", 
        "target": "175", 
        "source_alt": "v_mCdc14_TRSL", 
        "source": "191"
    }, 
    {
        "target_alt": "ADP", 
        "target": "160", 
        "source_alt": "v_mCdc14_TRSL", 
        "source": "191"
    }, 
    {
        "target_alt": "Cdc14", 
        "target": "151", 
        "source_alt": "v_mCdc14_TRSL", 
        "source": "191"
    }, 
    {
        "target_alt": "v_mCdc14_TRSL", 
        "symbol": "circle", 
        "target": "191", 
        "source_alt": "mCdc14", 
        "source": "183"
    }, 
    {
        "target_alt": "v_mCdc14_TRSL", 
        "symbol": "circle", 
        "target": "191", 
        "source_alt": "ribosome", 
        "source": "177"
    }, 
    {
        "target_alt": "v_mCdc14_TRSC", 
        "target": "192", 
        "source_alt": "NA", 
        "source": "153"
    }, 
    {
        "target_alt": "v_mCdc14_TRSC", 
        "target": "192", 
        "source_alt": "ATP", 
        "source": "172"
    }, 
    {
        "target_alt": "mCdc14", 
        "target": "183", 
        "source_alt": "v_mCdc14_TRSC", 
        "source": "192"
    }, 
    {
        "target_alt": "Pi", 
        "target": "175", 
        "source_alt": "v_mCdc14_TRSC", 
        "source": "192"
    }, 
    {
        "target_alt": "ADP", 
        "target": "160", 
        "source_alt": "v_mCdc14_TRSC", 
        "source": "192"
    }, 
    {
        "target_alt": "v_mWhi5_TRSL", 
        "target": "193", 
        "source_alt": "AA", 
        "source": "180"
    }, 
    {
        "target_alt": "v_mWhi5_TRSL", 
        "target": "193", 
        "source_alt": "ATP", 
        "source": "172"
    }, 
    {
        "target_alt": "Whi5", 
        "target": "179", 
        "source_alt": "v_mWhi5_TRSL", 
        "source": "193"
    }, 
    {
        "target_alt": "Pi", 
        "target": "175", 
        "source_alt": "v_mWhi5_TRSL", 
        "source": "193"
    }, 
    {
        "target_alt": "ADP", 
        "target": "160", 
        "source_alt": "v_mWhi5_TRSL", 
        "source": "193"
    }, 
    {
        "target_alt": "v_mWhi5_TRSL", 
        "symbol": "circle", 
        "target": "193", 
        "source_alt": "ribosome", 
        "source": "177"
    }, 
    {
        "target_alt": "v_mWhi5_TRSL", 
        "symbol": "circle", 
        "target": "193", 
        "source_alt": "mWhi5", 
        "source": "147"
    }, 
    {
        "target_alt": "v_Clb3_deg_APC", 
        "target": "194", 
        "source_alt": "Clb3", 
        "source": "163"
    }, 
    {
        "target_alt": "AA", 
        "target": "180", 
        "source_alt": "v_Clb3_deg_APC", 
        "source": "194"
    }, 
    {
        "target_alt": "v_Clb3_deg_APC", 
        "symbol": "circle", 
        "target": "194", 
        "source_alt": "APC", 
        "source": "170"
    }, 
    {
        "target_alt": "v_mCln3_TRSL", 
        "target": "195", 
        "source_alt": "AA", 
        "source": "180"
    }, 
    {
        "target_alt": "v_mCln3_TRSL", 
        "target": "195", 
        "source_alt": "ATP", 
        "source": "172"
    }, 
    {
        "target_alt": "Pi", 
        "target": "175", 
        "source_alt": "v_mCln3_TRSL", 
        "source": "195"
    }, 
    {
        "target_alt": "Cln3", 
        "target": "168", 
        "source_alt": "v_mCln3_TRSL", 
        "source": "195"
    }, 
    {
        "target_alt": "ADP", 
        "target": "160", 
        "source_alt": "v_mCln3_TRSL", 
        "source": "195"
    }, 
    {
        "target_alt": "v_mCln3_TRSL", 
        "symbol": "circle", 
        "target": "195", 
        "source_alt": "ribosome", 
        "source": "177"
    }, 
    {
        "target_alt": "v_mCln3_TRSL", 
        "symbol": "circle", 
        "target": "195", 
        "source_alt": "mCln3", 
        "source": "149"
    }, 
    {
        "target_alt": "v_Cln2_deg", 
        "target": "196", 
        "source_alt": "Cln2", 
        "source": "169"
    }, 
    {
        "target_alt": "AA", 
        "target": "180", 
        "source_alt": "v_Cln2_deg", 
        "source": "196"
    }, 
    {
        "target_alt": "v_mSic1_TRSC", 
        "target": "197", 
        "source_alt": "NA", 
        "source": "153"
    }, 
    {
        "target_alt": "v_mSic1_TRSC", 
        "target": "197", 
        "source_alt": "ATP", 
        "source": "172"
    }, 
    {
        "target_alt": "mSic1", 
        "target": "185", 
        "source_alt": "v_mSic1_TRSC", 
        "source": "197"
    }, 
    {
        "target_alt": "Pi", 
        "target": "175", 
        "source_alt": "v_mSic1_TRSC", 
        "source": "197"
    }, 
    {
        "target_alt": "ADP", 
        "target": "160", 
        "source_alt": "v_mSic1_TRSC", 
        "source": "197"
    }, 
    {
        "target_alt": "v_mSic1_TRSC", 
        "symbol": "circle", 
        "target": "197", 
        "source_alt": "Swi5", 
        "source": "187"
    }, 
    {
        "target_alt": "v_mSic1_TRSL", 
        "target": "198", 
        "source_alt": "AA", 
        "source": "180"
    }, 
    {
        "target_alt": "v_mSic1_TRSL", 
        "target": "198", 
        "source_alt": "ATP", 
        "source": "172"
    }, 
    {
        "target_alt": "Pi", 
        "target": "175", 
        "source_alt": "v_mSic1_TRSL", 
        "source": "198"
    }, 
    {
        "target_alt": "Sic1", 
        "target": "162", 
        "source_alt": "v_mSic1_TRSL", 
        "source": "198"
    }, 
    {
        "target_alt": "ADP", 
        "target": "160", 
        "source_alt": "v_mSic1_TRSL", 
        "source": "198"
    }, 
    {
        "target_alt": "v_mSic1_TRSL", 
        "symbol": "circle", 
        "target": "198", 
        "source_alt": "mSic1", 
        "source": "185"
    }, 
    {
        "target_alt": "v_mSic1_TRSL", 
        "symbol": "circle", 
        "target": "198", 
        "source_alt": "ribosome", 
        "source": "177"
    }, 
    {
        "target_alt": "v_mAPC_TRSL", 
        "target": "199", 
        "source_alt": "AA", 
        "source": "180"
    }, 
    {
        "target_alt": "v_mAPC_TRSL", 
        "target": "199", 
        "source_alt": "ATP", 
        "source": "172"
    }, 
    {
        "target_alt": "APC", 
        "target": "170", 
        "source_alt": "v_mAPC_TRSL", 
        "source": "199"
    }, 
    {
        "target_alt": "Pi", 
        "target": "175", 
        "source_alt": "v_mAPC_TRSL", 
        "source": "199"
    }, 
    {
        "target_alt": "ADP", 
        "target": "160", 
        "source_alt": "v_mAPC_TRSL", 
        "source": "199"
    }, 
    {
        "target_alt": "v_mAPC_TRSL", 
        "symbol": "circle", 
        "target": "199", 
        "source_alt": "mAPC", 
        "source": "181"
    }, 
    {
        "target_alt": "v_mAPC_TRSL", 
        "symbol": "circle", 
        "target": "199", 
        "source_alt": "ribosome", 
        "source": "177"
    }, 
    {
        "target_alt": "v_APC_deg", 
        "target": "200", 
        "source_alt": "APC", 
        "source": "170"
    }, 
    {
        "target_alt": "AA", 
        "target": "180", 
        "source_alt": "v_APC_deg", 
        "source": "200"
    }, 
    {
        "target_alt": "v_MBF_deg", 
        "target": "201", 
        "source_alt": "MBF", 
        "source": "188"
    }, 
    {
        "target_alt": "AA", 
        "target": "180", 
        "source_alt": "v_MBF_deg", 
        "source": "201"
    }, 
    {
        "target_alt": "v_Cdc14_deg", 
        "target": "202", 
        "source_alt": "Cdc14", 
        "source": "151"
    }, 
    {
        "target_alt": "AA", 
        "target": "180", 
        "source_alt": "v_Cdc14_deg", 
        "source": "202"
    }, 
    {
        "target_alt": "v_mMih1_deg", 
        "target": "203", 
        "source_alt": "mMih1", 
        "source": "165"
    }, 
    {
        "target_alt": "NA", 
        "target": "153", 
        "source_alt": "v_mMih1_deg", 
        "source": "203"
    }, 
    {
        "target_alt": "v_mAPC_TRSC", 
        "target": "204", 
        "source_alt": "NA", 
        "source": "153"
    }, 
    {
        "target_alt": "v_mAPC_TRSC", 
        "target": "204", 
        "source_alt": "ATP", 
        "source": "172"
    }, 
    {
        "target_alt": "mAPC", 
        "target": "181", 
        "source_alt": "v_mAPC_TRSC", 
        "source": "204"
    }, 
    {
        "target_alt": "Pi", 
        "target": "175", 
        "source_alt": "v_mAPC_TRSC", 
        "source": "204"
    }, 
    {
        "target_alt": "ADP", 
        "target": "160", 
        "source_alt": "v_mAPC_TRSC", 
        "source": "204"
    }, 
    {
        "target_alt": "v_mAPC_TRSC", 
        "symbol": "circle", 
        "target": "204", 
        "source_alt": "Mcm1", 
        "source": "174"
    }, 
    {
        "target_alt": "v_mClb3_deg", 
        "target": "205", 
        "source_alt": "mClb3", 
        "source": "154"
    }, 
    {
        "target_alt": "NA", 
        "target": "153", 
        "source_alt": "v_mClb3_deg", 
        "source": "205"
    }, 
    {
        "target_alt": "v_Swi5_deg", 
        "target": "206", 
        "source_alt": "Swi5", 
        "source": "187"
    }, 
    {
        "target_alt": "AA", 
        "target": "180", 
        "source_alt": "v_Swi5_deg", 
        "source": "206"
    }, 
    {
        "target_alt": "v_SBF_deg", 
        "target": "207", 
        "source_alt": "SBF", 
        "source": "178"
    }, 
    {
        "target_alt": "AA", 
        "target": "180", 
        "source_alt": "v_SBF_deg", 
        "source": "207"
    }, 
    {
        "target_alt": "v_mSwe1_TRSC", 
        "target": "208", 
        "source_alt": "NA", 
        "source": "153"
    }, 
    {
        "target_alt": "v_mSwe1_TRSC", 
        "target": "208", 
        "source_alt": "ATP", 
        "source": "172"
    }, 
    {
        "target_alt": "mSwe1", 
        "target": "158", 
        "source_alt": "v_mSwe1_TRSC", 
        "source": "208"
    }, 
    {
        "target_alt": "Pi", 
        "target": "175", 
        "source_alt": "v_mSwe1_TRSC", 
        "source": "208"
    }, 
    {
        "target_alt": "ADP", 
        "target": "160", 
        "source_alt": "v_mSwe1_TRSC", 
        "source": "208"
    }, 
    {
        "target_alt": "v_mMcm1_TRSC", 
        "target": "209", 
        "source_alt": "NA", 
        "source": "153"
    }, 
    {
        "target_alt": "v_mMcm1_TRSC", 
        "target": "209", 
        "source_alt": "ATP", 
        "source": "172"
    }, 
    {
        "target_alt": "mMcm1", 
        "target": "171", 
        "source_alt": "v_mMcm1_TRSC", 
        "source": "209"
    }, 
    {
        "target_alt": "Pi", 
        "target": "175", 
        "source_alt": "v_mMcm1_TRSC", 
        "source": "209"
    }, 
    {
        "target_alt": "ADP", 
        "target": "160", 
        "source_alt": "v_mMcm1_TRSC", 
        "source": "209"
    }, 
    {
        "target_alt": "v_mMcm1_TRSC", 
        "symbol": "circle", 
        "target": "209", 
        "source_alt": "Clb3", 
        "source": "163"
    }, 
    {
        "target_alt": "v_mMcm1_TRSC", 
        "symbol": "circle", 
        "target": "209", 
        "source_alt": "Clb2", 
        "source": "164"
    }, 
    {
        "target_alt": "v_Mih1_deg", 
        "target": "210", 
        "source_alt": "Mih1", 
        "source": "156"
    }, 
    {
        "target_alt": "AA", 
        "target": "180", 
        "source_alt": "v_Mih1_deg", 
        "source": "210"
    }, 
    {
        "target_alt": "v_mCdc14_deg", 
        "target": "211", 
        "source_alt": "mCdc14", 
        "source": "183"
    }, 
    {
        "target_alt": "NA", 
        "target": "153", 
        "source_alt": "v_mCdc14_deg", 
        "source": "211"
    }, 
    {
        "target_alt": "v_mCln2_TRSC", 
        "target": "212", 
        "source_alt": "NA", 
        "source": "153"
    }, 
    {
        "target_alt": "v_mCln2_TRSC", 
        "target": "212", 
        "source_alt": "ATP", 
        "source": "172"
    }, 
    {
        "target_alt": "Pi", 
        "target": "175", 
        "source_alt": "v_mCln2_TRSC", 
        "source": "212"
    }, 
    {
        "target_alt": "mCln2", 
        "target": "150", 
        "source_alt": "v_mCln2_TRSC", 
        "source": "212"
    }, 
    {
        "target_alt": "ADP", 
        "target": "160", 
        "source_alt": "v_mCln2_TRSC", 
        "source": "212"
    }, 
    {
        "target_alt": "v_mCln2_TRSC", 
        "symbol": "circle", 
        "target": "212", 
        "source_alt": "SBF", 
        "source": "178"
    }, 
    {
        "target_alt": "v_mSwe1_TRSL", 
        "target": "213", 
        "source_alt": "AA", 
        "source": "180"
    }, 
    {
        "target_alt": "v_mSwe1_TRSL", 
        "target": "213", 
        "source_alt": "ATP", 
        "source": "172"
    }, 
    {
        "target_alt": "Swe1", 
        "target": "184", 
        "source_alt": "v_mSwe1_TRSL", 
        "source": "213"
    }, 
    {
        "target_alt": "Pi", 
        "target": "175", 
        "source_alt": "v_mSwe1_TRSL", 
        "source": "213"
    }, 
    {
        "target_alt": "ADP", 
        "target": "160", 
        "source_alt": "v_mSwe1_TRSL", 
        "source": "213"
    }, 
    {
        "target_alt": "v_mSwe1_TRSL", 
        "symbol": "circle", 
        "target": "213", 
        "source_alt": "mSwe1", 
        "source": "158"
    }, 
    {
        "target_alt": "v_mSwe1_TRSL", 
        "symbol": "circle", 
        "target": "213", 
        "source_alt": "ribosome", 
        "source": "177"
    }, 
    {
        "target_alt": "v_mSBF_TRSC", 
        "target": "214", 
        "source_alt": "NA", 
        "source": "153"
    }, 
    {
        "target_alt": "v_mSBF_TRSC", 
        "target": "214", 
        "source_alt": "ATP", 
        "source": "172"
    }, 
    {
        "target_alt": "mSBF", 
        "target": "182", 
        "source_alt": "v_mSBF_TRSC", 
        "source": "214"
    }, 
    {
        "target_alt": "Pi", 
        "target": "175", 
        "source_alt": "v_mSBF_TRSC", 
        "source": "214"
    }, 
    {
        "target_alt": "ADP", 
        "target": "160", 
        "source_alt": "v_mSBF_TRSC", 
        "source": "214"
    }, 
    {
        "target_alt": "v_mClb5_deg", 
        "target": "215", 
        "source_alt": "mClb5", 
        "source": "157"
    }, 
    {
        "target_alt": "NA", 
        "target": "153", 
        "source_alt": "v_mClb5_deg", 
        "source": "215"
    }, 
    {
        "target_alt": "v_mClb5_TRSC", 
        "target": "216", 
        "source_alt": "NA", 
        "source": "153"
    }, 
    {
        "target_alt": "v_mClb5_TRSC", 
        "target": "216", 
        "source_alt": "ATP", 
        "source": "172"
    }, 
    {
        "target_alt": "Pi", 
        "target": "175", 
        "source_alt": "v_mClb5_TRSC", 
        "source": "216"
    }, 
    {
        "target_alt": "ADP", 
        "target": "160", 
        "source_alt": "v_mClb5_TRSC", 
        "source": "216"
    }, 
    {
        "target_alt": "mClb5", 
        "target": "157", 
        "source_alt": "v_mClb5_TRSC", 
        "source": "216"
    }, 
    {
        "target_alt": "v_mClb5_TRSC", 
        "symbol": "circle", 
        "target": "216", 
        "source_alt": "MBF", 
        "source": "188"
    }, 
    {
        "target_alt": "v_mMBF_deg", 
        "target": "217", 
        "source_alt": "mMBF", 
        "source": "148"
    }, 
    {
        "target_alt": "NA", 
        "target": "153", 
        "source_alt": "v_mMBF_deg", 
        "source": "217"
    }, 
    {
        "target_alt": "v_Whi5_deg", 
        "target": "218", 
        "source_alt": "Whi5", 
        "source": "179"
    }, 
    {
        "target_alt": "AA", 
        "target": "180", 
        "source_alt": "v_Whi5_deg", 
        "source": "218"
    }, 
    {
        "target_alt": "v_Cln3_deg", 
        "target": "219", 
        "source_alt": "Cln3", 
        "source": "168"
    }, 
    {
        "target_alt": "AA", 
        "target": "180", 
        "source_alt": "v_Cln3_deg", 
        "source": "219"
    }, 
    {
        "target_alt": "v_Cdc14_p_deg", 
        "target": "220", 
        "source_alt": "Cdc14_p", 
        "source": "173"
    }, 
    {
        "target_alt": "AA", 
        "target": "180", 
        "source_alt": "v_Cdc14_p_deg", 
        "source": "220"
    }, 
    {
        "target_alt": "Pi", 
        "target": "175", 
        "source_alt": "v_Cdc14_p_deg", 
        "source": "220"
    }, 
    {
        "target_alt": "v_mClb3_TRSC", 
        "target": "221", 
        "source_alt": "NA", 
        "source": "153"
    }, 
    {
        "target_alt": "v_mClb3_TRSC", 
        "target": "221", 
        "source_alt": "ATP", 
        "source": "172"
    }, 
    {
        "target_alt": "mClb3", 
        "target": "154", 
        "source_alt": "v_mClb3_TRSC", 
        "source": "221"
    }, 
    {
        "target_alt": "Pi", 
        "target": "175", 
        "source_alt": "v_mClb3_TRSC", 
        "source": "221"
    }, 
    {
        "target_alt": "ADP", 
        "target": "160", 
        "source_alt": "v_mClb3_TRSC", 
        "source": "221"
    }, 
    {
        "target_alt": "v_mClb3_TRSC", 
        "symbol": "circle", 
        "target": "221", 
        "source_alt": "Clb5", 
        "source": "166"
    }, 
    {
        "target_alt": "v_mCln3_deg", 
        "target": "222", 
        "source_alt": "mCln3", 
        "source": "149"
    }, 
    {
        "target_alt": "NA", 
        "target": "153", 
        "source_alt": "v_mCln3_deg", 
        "source": "222"
    }, 
    {
        "target_alt": "v_mSBF_TRSL", 
        "target": "223", 
        "source_alt": "AA", 
        "source": "180"
    }, 
    {
        "target_alt": "v_mSBF_TRSL", 
        "target": "223", 
        "source_alt": "ATP", 
        "source": "172"
    }, 
    {
        "target_alt": "Pi", 
        "target": "175", 
        "source_alt": "v_mSBF_TRSL", 
        "source": "223"
    }, 
    {
        "target_alt": "SBF", 
        "target": "178", 
        "source_alt": "v_mSBF_TRSL", 
        "source": "223"
    }, 
    {
        "target_alt": "ADP", 
        "target": "160", 
        "source_alt": "v_mSBF_TRSL", 
        "source": "223"
    }, 
    {
        "target_alt": "v_mSBF_TRSL", 
        "symbol": "circle", 
        "target": "223", 
        "source_alt": "mSBF", 
        "source": "182"
    }, 
    {
        "target_alt": "v_mSBF_TRSL", 
        "symbol": "circle", 
        "target": "223", 
        "source_alt": "ribosome", 
        "source": "177"
    }, 
    {
        "target_alt": "v_mMBF_TRSL", 
        "target": "224", 
        "source_alt": "AA", 
        "source": "180"
    }, 
    {
        "target_alt": "v_mMBF_TRSL", 
        "target": "224", 
        "source_alt": "ATP", 
        "source": "172"
    }, 
    {
        "target_alt": "MBF", 
        "target": "188", 
        "source_alt": "v_mMBF_TRSL", 
        "source": "224"
    }, 
    {
        "target_alt": "Pi", 
        "target": "175", 
        "source_alt": "v_mMBF_TRSL", 
        "source": "224"
    }, 
    {
        "target_alt": "ADP", 
        "target": "160", 
        "source_alt": "v_mMBF_TRSL", 
        "source": "224"
    }, 
    {
        "target_alt": "v_mMBF_TRSL", 
        "symbol": "circle", 
        "target": "224", 
        "source_alt": "ribosome", 
        "source": "177"
    }, 
    {
        "target_alt": "v_mMBF_TRSL", 
        "symbol": "circle", 
        "target": "224", 
        "source_alt": "mMBF", 
        "source": "148"
    }, 
    {
        "target_alt": "v_mAPC_deg", 
        "target": "225", 
        "source_alt": "mAPC", 
        "source": "181"
    }, 
    {
        "target_alt": "NA", 
        "target": "153", 
        "source_alt": "v_mAPC_deg", 
        "source": "225"
    }, 
    {
        "target_alt": "v_Clb3_deg", 
        "target": "226", 
        "source_alt": "Clb3", 
        "source": "163"
    }, 
    {
        "target_alt": "AA", 
        "target": "180", 
        "source_alt": "v_Clb3_deg", 
        "source": "226"
    }, 
    {
        "target_alt": "v_mClb2_TRSL", 
        "target": "227", 
        "source_alt": "AA", 
        "source": "180"
    }, 
    {
        "target_alt": "v_mClb2_TRSL", 
        "target": "227", 
        "source_alt": "ATP", 
        "source": "172"
    }, 
    {
        "target_alt": "Clb2", 
        "target": "164", 
        "source_alt": "v_mClb2_TRSL", 
        "source": "227"
    }, 
    {
        "target_alt": "Pi", 
        "target": "175", 
        "source_alt": "v_mClb2_TRSL", 
        "source": "227"
    }, 
    {
        "target_alt": "ADP", 
        "target": "160", 
        "source_alt": "v_mClb2_TRSL", 
        "source": "227"
    }, 
    {
        "target_alt": "v_mClb2_TRSL", 
        "symbol": "circle", 
        "target": "227", 
        "source_alt": "mClb2", 
        "source": "155"
    }, 
    {
        "target_alt": "v_mClb2_TRSL", 
        "symbol": "circle", 
        "target": "227", 
        "source_alt": "ribosome", 
        "source": "177"
    }, 
    {
        "target_alt": "v_Clb5_deg", 
        "target": "228", 
        "source_alt": "Clb5", 
        "source": "166"
    }, 
    {
        "target_alt": "AA", 
        "target": "180", 
        "source_alt": "v_Clb5_deg", 
        "source": "228"
    }, 
    {
        "target_alt": "v_mSBF_deg", 
        "target": "229", 
        "source_alt": "mSBF", 
        "source": "182"
    }, 
    {
        "target_alt": "NA", 
        "target": "153", 
        "source_alt": "v_mSBF_deg", 
        "source": "229"
    }, 
    {
        "target_alt": "v_mWhi5_deg", 
        "target": "230", 
        "source_alt": "mWhi5", 
        "source": "147"
    }, 
    {
        "target_alt": "NA", 
        "target": "153", 
        "source_alt": "v_mWhi5_deg", 
        "source": "230"
    }, 
    {
        "target_alt": "v_mMBF_TRSC", 
        "target": "231", 
        "source_alt": "NA", 
        "source": "153"
    }, 
    {
        "target_alt": "v_mMBF_TRSC", 
        "target": "231", 
        "source_alt": "ATP", 
        "source": "172"
    }, 
    {
        "target_alt": "Pi", 
        "target": "175", 
        "source_alt": "v_mMBF_TRSC", 
        "source": "231"
    }, 
    {
        "target_alt": "ADP", 
        "target": "160", 
        "source_alt": "v_mMBF_TRSC", 
        "source": "231"
    }, 
    {
        "target_alt": "mMBF", 
        "target": "148", 
        "source_alt": "v_mMBF_TRSC", 
        "source": "231"
    }, 
    {
        "target_alt": "v_mMBF_TRSC", 
        "symbol": "circle", 
        "target": "231", 
        "source_alt": "Cln2", 
        "source": "169"
    }, 
    {
        "target_alt": "v_Swe1_deg", 
        "target": "232", 
        "source_alt": "Swe1", 
        "source": "184"
    }, 
    {
        "target_alt": "AA", 
        "target": "180", 
        "source_alt": "v_Swe1_deg", 
        "source": "232"
    }, 
    {
        "target_alt": "v_Clb2_deg_APC", 
        "target": "233", 
        "source_alt": "Clb2", 
        "source": "164"
    }, 
    {
        "target_alt": "AA", 
        "target": "180", 
        "source_alt": "v_Clb2_deg_APC", 
        "source": "233"
    }, 
    {
        "target_alt": "v_Clb2_deg_APC", 
        "symbol": "circle", 
        "target": "233", 
        "source_alt": "APC", 
        "source": "170"
    }, 
    {
        "target_alt": "v_mFar1_TRSL", 
        "target": "234", 
        "source_alt": "AA", 
        "source": "180"
    }, 
    {
        "target_alt": "v_mFar1_TRSL", 
        "target": "234", 
        "source_alt": "ATP", 
        "source": "172"
    }, 
    {
        "target_alt": "Pi", 
        "target": "175", 
        "source_alt": "v_mFar1_TRSL", 
        "source": "234"
    }, 
    {
        "target_alt": "Far1", 
        "target": "159", 
        "source_alt": "v_mFar1_TRSL", 
        "source": "234"
    }, 
    {
        "target_alt": "ADP", 
        "target": "160", 
        "source_alt": "v_mFar1_TRSL", 
        "source": "234"
    }, 
    {
        "target_alt": "v_mFar1_TRSL", 
        "symbol": "circle", 
        "target": "234", 
        "source_alt": "mFar1", 
        "source": "161"
    }, 
    {
        "target_alt": "v_mFar1_TRSL", 
        "symbol": "circle", 
        "target": "234", 
        "source_alt": "ribosome", 
        "source": "177"
    }, 
    {
        "target_alt": "v_mSic1_deg", 
        "target": "235", 
        "source_alt": "mSic1", 
        "source": "185"
    }, 
    {
        "target_alt": "NA", 
        "target": "153", 
        "source_alt": "v_mSic1_deg", 
        "source": "235"
    }, 
    {
        "target_alt": "v_mMcm1_deg", 
        "target": "236", 
        "source_alt": "mMcm1", 
        "source": "171"
    }, 
    {
        "target_alt": "NA", 
        "target": "153", 
        "source_alt": "v_mMcm1_deg", 
        "source": "236"
    }, 
    {
        "target_alt": "v_Clb2_deg", 
        "target": "237", 
        "source_alt": "Clb2", 
        "source": "164"
    }, 
    {
        "target_alt": "AA", 
        "target": "180", 
        "source_alt": "v_Clb2_deg", 
        "source": "237"
    }, 
    {
        "target_alt": "v_mFar1_TRSC", 
        "target": "238", 
        "source_alt": "NA", 
        "source": "153"
    }, 
    {
        "target_alt": "v_mFar1_TRSC", 
        "target": "238", 
        "source_alt": "ATP", 
        "source": "172"
    }, 
    {
        "target_alt": "mFar1", 
        "target": "161", 
        "source_alt": "v_mFar1_TRSC", 
        "source": "238"
    }, 
    {
        "target_alt": "Pi", 
        "target": "175", 
        "source_alt": "v_mFar1_TRSC", 
        "source": "238"
    }, 
    {
        "target_alt": "ADP", 
        "target": "160", 
        "source_alt": "v_mFar1_TRSC", 
        "source": "238"
    }, 
    {
        "target_alt": "v_mFar1_TRSC", 
        "symbol": "circle", 
        "target": "238", 
        "source_alt": "Fus3", 
        "source": "167"
    }, 
    {
        "target_alt": "v_Far1_deg", 
        "target": "239", 
        "source_alt": "Far1", 
        "source": "159"
    }, 
    {
        "target_alt": "AA", 
        "target": "180", 
        "source_alt": "v_Far1_deg", 
        "source": "239"
    }, 
    {
        "target_alt": "v_mMcm1_TRSL", 
        "target": "240", 
        "source_alt": "AA", 
        "source": "180"
    }, 
    {
        "target_alt": "v_mMcm1_TRSL", 
        "target": "240", 
        "source_alt": "ATP", 
        "source": "172"
    }, 
    {
        "target_alt": "Pi", 
        "target": "175", 
        "source_alt": "v_mMcm1_TRSL", 
        "source": "240"
    }, 
    {
        "target_alt": "ADP", 
        "target": "160", 
        "source_alt": "v_mMcm1_TRSL", 
        "source": "240"
    }, 
    {
        "target_alt": "Mcm1", 
        "target": "174", 
        "source_alt": "v_mMcm1_TRSL", 
        "source": "240"
    }, 
    {
        "target_alt": "v_mMcm1_TRSL", 
        "symbol": "circle", 
        "target": "240", 
        "source_alt": "mMcm1", 
        "source": "171"
    }, 
    {
        "target_alt": "v_mMcm1_TRSL", 
        "symbol": "circle", 
        "target": "240", 
        "source_alt": "ribosome", 
        "source": "177"
    }, 
    {
        "target_alt": "v_mSwe1_deg", 
        "target": "241", 
        "source_alt": "mSwe1", 
        "source": "158"
    }, 
    {
        "target_alt": "NA", 
        "target": "153", 
        "source_alt": "v_mSwe1_deg", 
        "source": "241"
    }, 
    {
        "target_alt": "v_mClb2_deg", 
        "target": "242", 
        "source_alt": "mClb2", 
        "source": "155"
    }, 
    {
        "target_alt": "NA", 
        "target": "153", 
        "source_alt": "v_mClb2_deg", 
        "source": "242"
    }, 
    {
        "target_alt": "v_mCln2_deg", 
        "target": "243", 
        "source_alt": "mCln2", 
        "source": "150"
    }, 
    {
        "target_alt": "NA", 
        "target": "153", 
        "source_alt": "v_mCln2_deg", 
        "source": "243"
    }, 
    {
        "target_alt": "v_Clb5_deg_APC", 
        "target": "244", 
        "source_alt": "Clb5", 
        "source": "166"
    }, 
    {
        "target_alt": "AA", 
        "target": "180", 
        "source_alt": "v_Clb5_deg_APC", 
        "source": "244"
    }, 
    {
        "target_alt": "v_Clb5_deg_APC", 
        "symbol": "circle", 
        "target": "244", 
        "source_alt": "APC", 
        "source": "170"
    }, 
    {
        "target_alt": "v_mFar1_deg", 
        "target": "245", 
        "source_alt": "mFar1", 
        "source": "161"
    }, 
    {
        "target_alt": "NA", 
        "target": "153", 
        "source_alt": "v_mFar1_deg", 
        "source": "245"
    }, 
    {
        "target_alt": "v_mClb3_TRSL", 
        "target": "246", 
        "source_alt": "AA", 
        "source": "180"
    }, 
    {
        "target_alt": "v_mClb3_TRSL", 
        "target": "246", 
        "source_alt": "ATP", 
        "source": "172"
    }, 
    {
        "target_alt": "Clb3", 
        "target": "163", 
        "source_alt": "v_mClb3_TRSL", 
        "source": "246"
    }, 
    {
        "target_alt": "Pi", 
        "target": "175", 
        "source_alt": "v_mClb3_TRSL", 
        "source": "246"
    }, 
    {
        "target_alt": "ADP", 
        "target": "160", 
        "source_alt": "v_mClb3_TRSL", 
        "source": "246"
    }, 
    {
        "target_alt": "v_mClb3_TRSL", 
        "symbol": "circle", 
        "target": "246", 
        "source_alt": "mClb3", 
        "source": "154"
    }, 
    {
        "target_alt": "v_mClb3_TRSL", 
        "symbol": "circle", 
        "target": "246", 
        "source_alt": "ribosome", 
        "source": "177"
    }, 
    {
        "target_alt": "v_mClb2_TRSC", 
        "target": "247", 
        "source_alt": "NA", 
        "source": "153"
    }, 
    {
        "target_alt": "v_mClb2_TRSC", 
        "target": "247", 
        "source_alt": "ATP", 
        "source": "172"
    }, 
    {
        "target_alt": "mClb2", 
        "target": "155", 
        "source_alt": "v_mClb2_TRSC", 
        "source": "247"
    }, 
    {
        "target_alt": "Pi", 
        "target": "175", 
        "source_alt": "v_mClb2_TRSC", 
        "source": "247"
    }, 
    {
        "target_alt": "ADP", 
        "target": "160", 
        "source_alt": "v_mClb2_TRSC", 
        "source": "247"
    }, 
    {
        "target_alt": "v_mClb2_TRSC", 
        "symbol": "circle", 
        "target": "247", 
        "source_alt": "Mcm1", 
        "source": "174"
    }, 
    {
        "target_alt": "v_mCln2_TRSL", 
        "target": "248", 
        "source_alt": "AA", 
        "source": "180"
    }, 
    {
        "target_alt": "v_mCln2_TRSL", 
        "target": "248", 
        "source_alt": "ATP", 
        "source": "172"
    }, 
    {
        "target_alt": "Pi", 
        "target": "175", 
        "source_alt": "v_mCln2_TRSL", 
        "source": "248"
    }, 
    {
        "target_alt": "Cln2", 
        "target": "169", 
        "source_alt": "v_mCln2_TRSL", 
        "source": "248"
    }, 
    {
        "target_alt": "ADP", 
        "target": "160", 
        "source_alt": "v_mCln2_TRSL", 
        "source": "248"
    }, 
    {
        "target_alt": "v_mCln2_TRSL", 
        "symbol": "circle", 
        "target": "248", 
        "source_alt": "ribosome", 
        "source": "177"
    }, 
    {
        "target_alt": "v_mCln2_TRSL", 
        "symbol": "circle", 
        "target": "248", 
        "source_alt": "mCln2", 
        "source": "150"
    }, 
    {
        "target_alt": "v_mSwi5_deg", 
        "target": "249", 
        "source_alt": "mSwi5", 
        "source": "152"
    }, 
    {
        "target_alt": "NA", 
        "target": "153", 
        "source_alt": "v_mSwi5_deg", 
        "source": "249"
    }, 
    {
        "target_alt": "v_mSwi5_TRSC", 
        "target": "250", 
        "source_alt": "NA", 
        "source": "153"
    }, 
    {
        "target_alt": "v_mSwi5_TRSC", 
        "target": "250", 
        "source_alt": "ATP", 
        "source": "172"
    }, 
    {
        "target_alt": "mSwi5", 
        "target": "152", 
        "source_alt": "v_mSwi5_TRSC", 
        "source": "250"
    }, 
    {
        "target_alt": "Pi", 
        "target": "175", 
        "source_alt": "v_mSwi5_TRSC", 
        "source": "250"
    }, 
    {
        "target_alt": "ADP", 
        "target": "160", 
        "source_alt": "v_mSwi5_TRSC", 
        "source": "250"
    }, 
    {
        "target_alt": "v_mSwi5_TRSC", 
        "symbol": "circle", 
        "target": "250", 
        "source_alt": "Mcm1", 
        "source": "174"
    }, 
    {
        "target_alt": "v_SBF_p_deg", 
        "target": "251", 
        "source_alt": "SBF_p", 
        "source": "176"
    }, 
    {
        "target_alt": "AA", 
        "target": "180", 
        "source_alt": "v_SBF_p_deg", 
        "source": "251"
    }, 
    {
        "target_alt": "Pi", 
        "target": "175", 
        "source_alt": "v_SBF_p_deg", 
        "source": "251"
    }, 
    {
        "target_alt": "v_Far1_deg_Cln2", 
        "target": "252", 
        "source_alt": "Far1", 
        "source": "159"
    }, 
    {
        "target_alt": "AA", 
        "target": "180", 
        "source_alt": "v_Far1_deg_Cln2", 
        "source": "252"
    }, 
    {
        "target_alt": "v_Far1_deg_Cln2", 
        "symbol": "circle", 
        "target": "252", 
        "source_alt": "Cln2", 
        "source": "169"
    }, 
    {
        "target_alt": "v_Sic1_deg", 
        "target": "253", 
        "source_alt": "Sic1", 
        "source": "162"
    }, 
    {
        "target_alt": "AA", 
        "target": "180", 
        "source_alt": "v_Sic1_deg", 
        "source": "253"
    }, 
    {
        "target_alt": "v_mMih1_TRSL", 
        "target": "254", 
        "source_alt": "AA", 
        "source": "180"
    }, 
    {
        "target_alt": "v_mMih1_TRSL", 
        "target": "254", 
        "source_alt": "ATP", 
        "source": "172"
    }, 
    {
        "target_alt": "Mih1", 
        "target": "156", 
        "source_alt": "v_mMih1_TRSL", 
        "source": "254"
    }, 
    {
        "target_alt": "Pi", 
        "target": "175", 
        "source_alt": "v_mMih1_TRSL", 
        "source": "254"
    }, 
    {
        "target_alt": "ADP", 
        "target": "160", 
        "source_alt": "v_mMih1_TRSL", 
        "source": "254"
    }, 
    {
        "target_alt": "v_mMih1_TRSL", 
        "symbol": "circle", 
        "target": "254", 
        "source_alt": "ribosome", 
        "source": "177"
    }, 
    {
        "target_alt": "v_mMih1_TRSL", 
        "symbol": "circle", 
        "target": "254", 
        "source_alt": "mMih1", 
        "source": "165"
    }, 
    {
        "target_alt": "v_mMih1_TRSC", 
        "target": "255", 
        "source_alt": "NA", 
        "source": "153"
    }, 
    {
        "target_alt": "v_mMih1_TRSC", 
        "target": "255", 
        "source_alt": "ATP", 
        "source": "172"
    }, 
    {
        "target_alt": "mMih1", 
        "target": "165", 
        "source_alt": "v_mMih1_TRSC", 
        "source": "255"
    }, 
    {
        "target_alt": "Pi", 
        "target": "175", 
        "source_alt": "v_mMih1_TRSC", 
        "source": "255"
    }, 
    {
        "target_alt": "ADP", 
        "target": "160", 
        "source_alt": "v_mMih1_TRSC", 
        "source": "255"
    }, 
    {
        "target_alt": "v_Mcm1_deg", 
        "target": "256", 
        "source_alt": "Mcm1", 
        "source": "174"
    }, 
    {
        "target_alt": "AA", 
        "target": "180", 
        "source_alt": "v_Mcm1_deg", 
        "source": "256"
    }, 
    {
        "target_alt": "v_mClb5_TRSL", 
        "target": "257", 
        "source_alt": "AA", 
        "source": "180"
    }, 
    {
        "target_alt": "v_mClb5_TRSL", 
        "target": "257", 
        "source_alt": "ATP", 
        "source": "172"
    }, 
    {
        "target_alt": "Pi", 
        "target": "175", 
        "source_alt": "v_mClb5_TRSL", 
        "source": "257"
    }, 
    {
        "target_alt": "ADP", 
        "target": "160", 
        "source_alt": "v_mClb5_TRSL", 
        "source": "257"
    }, 
    {
        "target_alt": "Clb5", 
        "target": "166", 
        "source_alt": "v_mClb5_TRSL", 
        "source": "257"
    }, 
    {
        "target_alt": "v_mClb5_TRSL", 
        "symbol": "circle", 
        "target": "257", 
        "source_alt": "ribosome", 
        "source": "177"
    }, 
    {
        "target_alt": "v_mClb5_TRSL", 
        "symbol": "circle", 
        "target": "257", 
        "source_alt": "mClb5", 
        "source": "157"
    }, 
    {
        "target_alt": "v_mSwi5_TRSL", 
        "target": "258", 
        "source_alt": "AA", 
        "source": "180"
    }, 
    {
        "target_alt": "v_mSwi5_TRSL", 
        "target": "258", 
        "source_alt": "ATP", 
        "source": "172"
    }, 
    {
        "target_alt": "Swi5", 
        "target": "187", 
        "source_alt": "v_mSwi5_TRSL", 
        "source": "258"
    }, 
    {
        "target_alt": "Pi", 
        "target": "175", 
        "source_alt": "v_mSwi5_TRSL", 
        "source": "258"
    }, 
    {
        "target_alt": "ADP", 
        "target": "160", 
        "source_alt": "v_mSwi5_TRSL", 
        "source": "258"
    }, 
    {
        "target_alt": "v_mSwi5_TRSL", 
        "symbol": "circle", 
        "target": "258", 
        "source_alt": "mSwi5", 
        "source": "152"
    }, 
    {
        "target_alt": "v_mSwi5_TRSL", 
        "symbol": "circle", 
        "target": "258", 
        "source_alt": "ribosome", 
        "source": "177"
    }, 
    {
        "target_alt": "v_ASS_Ribosome_mRNA_other", 
        "target": "269", 
        "source_alt": "Ribosome", 
        "source": "144"
    }, 
    {
        "target_alt": "v_ASS_Ribosome_mRNA_other", 
        "target": "269", 
        "source_alt": "mRNA_other", 
        "source": "262"
    }, 
    {
        "target_alt": "mRNA_other_Ribosome", 
        "target": "265", 
        "source_alt": "v_ASS_Ribosome_mRNA_other", 
        "source": "269"
    }, 
    {
        "target_alt": "v_DEG_B_Protein_met", 
        "target": "270", 
        "source_alt": "B_Protein_met", 
        "source": "264"
    }, 
    {
        "target_alt": "AA", 
        "target": "180", 
        "source_alt": "v_DEG_B_Protein_met", 
        "source": "270"
    }, 
    {
        "target_alt": "v_ASS_Ribosome_mRNA_met", 
        "target": "271", 
        "source_alt": "mRNA_met", 
        "source": "261"
    }, 
    {
        "target_alt": "v_ASS_Ribosome_mRNA_met", 
        "target": "271", 
        "source_alt": "Ribosome", 
        "source": "144"
    }, 
    {
        "target_alt": "mRNA_met_Ribosome", 
        "target": "268", 
        "source_alt": "v_ASS_Ribosome_mRNA_met", 
        "source": "271"
    }, 
    {
        "target_alt": "v_TRSL_mRNA_R", 
        "target": "272", 
        "source_alt": "AA", 
        "source": "180"
    }, 
    {
        "target_alt": "v_TRSL_mRNA_R", 
        "target": "272", 
        "source_alt": "ATP", 
        "source": "172"
    }, 
    {
        "target_alt": "B_Protein_R", 
        "target": "143", 
        "source_alt": "v_TRSL_mRNA_R", 
        "source": "272"
    }, 
    {
        "target_alt": "ADP", 
        "target": "160", 
        "source_alt": "v_TRSL_mRNA_R", 
        "source": "272"
    }, 
    {
        "target_alt": "P_i", 
        "target": "260", 
        "source_alt": "v_TRSL_mRNA_R", 
        "source": "272"
    }, 
    {
        "target_alt": "v_TRSL_mRNA_R", 
        "symbol": "circle", 
        "target": "272", 
        "source_alt": "mRNA_R_Ribosome", 
        "source": "266"
    }, 
    {
        "target_alt": "v_DEG_B_Protein_R", 
        "target": "273", 
        "source_alt": "B_Protein_R", 
        "source": "143"
    }, 
    {
        "target_alt": "AA", 
        "target": "180", 
        "source_alt": "v_DEG_B_Protein_R", 
        "source": "273"
    }, 
    {
        "target_alt": "v_DIS_Ribosome_mRNA_met", 
        "target": "274", 
        "source_alt": "mRNA_met_Ribosome", 
        "source": "268"
    }, 
    {
        "target_alt": "mRNA_met", 
        "target": "261", 
        "source_alt": "v_DIS_Ribosome_mRNA_met", 
        "source": "274"
    }, 
    {
        "target_alt": "Ribosome", 
        "target": "144", 
        "source_alt": "v_DIS_Ribosome_mRNA_met", 
        "source": "274"
    }, 
    {
        "target_alt": "v_DEG_B_Protein_other", 
        "target": "275", 
        "source_alt": "B_Protein_other", 
        "source": "267"
    }, 
    {
        "target_alt": "AA", 
        "target": "180", 
        "source_alt": "v_DEG_B_Protein_other", 
        "source": "275"
    }, 
    {
        "target_alt": "v_DIS_Ribosome_mRNA_other", 
        "target": "276", 
        "source_alt": "mRNA_other_Ribosome", 
        "source": "265"
    }, 
    {
        "target_alt": "Ribosome", 
        "target": "144", 
        "source_alt": "v_DIS_Ribosome_mRNA_other", 
        "source": "276"
    }, 
    {
        "target_alt": "mRNA_other", 
        "target": "262", 
        "source_alt": "v_DIS_Ribosome_mRNA_other", 
        "source": "276"
    }, 
    {
        "target_alt": "v_ASS_Ribosome_mRNA_R", 
        "target": "277", 
        "source_alt": "Ribosome", 
        "source": "144"
    }, 
    {
        "target_alt": "v_ASS_Ribosome_mRNA_R", 
        "target": "277", 
        "source_alt": "mRNA_R", 
        "source": "263"
    }, 
    {
        "target_alt": "mRNA_R_Ribosome", 
        "target": "266", 
        "source_alt": "v_ASS_Ribosome_mRNA_R", 
        "source": "277"
    }, 
    {
        "target_alt": "v_DIS_Ribosome_mRNA_R", 
        "target": "278", 
        "source_alt": "mRNA_R_Ribosome", 
        "source": "266"
    }, 
    {
        "target_alt": "Ribosome", 
        "target": "144", 
        "source_alt": "v_DIS_Ribosome_mRNA_R", 
        "source": "278"
    }, 
    {
        "target_alt": "mRNA_R", 
        "target": "263", 
        "source_alt": "v_DIS_Ribosome_mRNA_R", 
        "source": "278"
    }, 
    {
        "target_alt": "v_TRSL_mRNA_other", 
        "target": "279", 
        "source_alt": "AA", 
        "source": "180"
    }, 
    {
        "target_alt": "v_TRSL_mRNA_other", 
        "target": "279", 
        "source_alt": "ATP", 
        "source": "172"
    }, 
    {
        "target_alt": "B_Protein_other", 
        "target": "267", 
        "source_alt": "v_TRSL_mRNA_other", 
        "source": "279"
    }, 
    {
        "target_alt": "ADP", 
        "target": "160", 
        "source_alt": "v_TRSL_mRNA_other", 
        "source": "279"
    }, 
    {
        "target_alt": "P_i", 
        "target": "260", 
        "source_alt": "v_TRSL_mRNA_other", 
        "source": "279"
    }, 
    {
        "target_alt": "v_TRSL_mRNA_other", 
        "symbol": "circle", 
        "target": "279", 
        "source_alt": "mRNA_other_Ribosome", 
        "source": "265"
    }, 
    {
        "target_alt": "v_TRSL_mRNA_met", 
        "target": "280", 
        "source_alt": "AA", 
        "source": "180"
    }, 
    {
        "target_alt": "v_TRSL_mRNA_met", 
        "target": "280", 
        "source_alt": "ATP", 
        "source": "172"
    }, 
    {
        "target_alt": "B_Protein_met", 
        "target": "264", 
        "source_alt": "v_TRSL_mRNA_met", 
        "source": "280"
    }, 
    {
        "target_alt": "ADP", 
        "target": "160", 
        "source_alt": "v_TRSL_mRNA_met", 
        "source": "280"
    }, 
    {
        "target_alt": "P_i", 
        "target": "260", 
        "source_alt": "v_TRSL_mRNA_met", 
        "source": "280"
    }, 
    {
        "target_alt": "v_TRSL_mRNA_met", 
        "symbol": "circle", 
        "target": "280", 
        "source_alt": "mRNA_met_Ribosome", 
        "source": "268"
    }, 
    {
        "target_alt": "total_ribosomes", 
        "symbol": "circle", 
        "target": "259", 
        "source_alt": "Ribosome", 
        "source": "144"
    }, 
    {
        "target_alt": "total_ribosomes", 
        "symbol": "circle", 
        "target": "259", 
        "source_alt": "mRNA_R_Ribosome", 
        "source": "266"
    }, 
    {
        "target_alt": "total_ribosomes", 
        "symbol": "circle", 
        "target": "259", 
        "source_alt": "mRNA_met_Ribosome", 
        "source": "268"
    }, 
    {
        "target_alt": "total_ribosomes", 
        "symbol": "circle", 
        "target": "259", 
        "source_alt": "mRNA_other_Ribosome", 
        "source": "265"
    }, 
    {
        "target_alt": "total_ribosomes", 
        "symbol": "circle", 
        "target": "259", 
        "source_alt": "int_vol", 
        "source": "4"
    }, 
    {
        "target_alt": "v_AA_f", 
        "target": "304", 
        "source_alt": "HexP", 
        "source": "289"
    }, 
    {
        "target_alt": "v_AA_f", 
        "target": "304", 
        "source_alt": "pyr", 
        "source": "293"
    }, 
    {
        "target_alt": "v_AA_f", 
        "target": "304", 
        "source_alt": "ATP", 
        "source": "172"
    }, 
    {
        "target_alt": "v_AA_f", 
        "target": "304", 
        "source_alt": "NH4", 
        "source": "297"
    }, 
    {
        "target_alt": "AA", 
        "target": "180", 
        "source_alt": "v_AA_f", 
        "source": "304"
    }, 
    {
        "target_alt": "H", 
        "target": "292", 
        "source_alt": "v_AA_f", 
        "source": "304"
    }, 
    {
        "target_alt": "Pi", 
        "target": "175", 
        "source_alt": "v_AA_f", 
        "source": "304"
    }, 
    {
        "target_alt": "TriP", 
        "target": "300", 
        "source_alt": "v_AA_f", 
        "source": "304"
    }, 
    {
        "target_alt": "ADP", 
        "target": "160", 
        "source_alt": "v_AA_f", 
        "source": "304"
    }, 
    {
        "target_alt": "v_chitin_f", 
        "target": "305", 
        "source_alt": "HexP", 
        "source": "289"
    }, 
    {
        "target_alt": "v_chitin_f", 
        "target": "305", 
        "source_alt": "ATP", 
        "source": "172"
    }, 
    {
        "target_alt": "v_chitin_f", 
        "target": "305", 
        "source_alt": "NH4", 
        "source": "297"
    }, 
    {
        "target_alt": "H", 
        "target": "292", 
        "source_alt": "v_chitin_f", 
        "source": "305"
    }, 
    {
        "target_alt": "Pi", 
        "target": "175", 
        "source_alt": "v_chitin_f", 
        "source": "305"
    }, 
    {
        "target_alt": "chitin", 
        "target": "296", 
        "source_alt": "v_chitin_f", 
        "source": "305"
    }, 
    {
        "target_alt": "ADP", 
        "target": "160", 
        "source_alt": "v_chitin_f", 
        "source": "305"
    }, 
    {
        "target_alt": "v_glucan_f", 
        "target": "306", 
        "source_alt": "HexP", 
        "source": "289"
    }, 
    {
        "target_alt": "v_glucan_f", 
        "target": "306", 
        "source_alt": "ATP", 
        "source": "172"
    }, 
    {
        "target_alt": "Pi", 
        "target": "175", 
        "source_alt": "v_glucan_f", 
        "source": "306"
    }, 
    {
        "target_alt": "ADP", 
        "target": "160", 
        "source_alt": "v_glucan_f", 
        "source": "306"
    }, 
    {
        "target_alt": "glucan", 
        "target": "299", 
        "source_alt": "v_glucan_f", 
        "source": "306"
    }, 
    {
        "target_alt": "v_resp", 
        "target": "307", 
        "source_alt": "NADH", 
        "source": "281"
    }, 
    {
        "target_alt": "v_resp", 
        "target": "307", 
        "source_alt": "O2_check", 
        "source": "290"
    }, 
    {
        "target_alt": "v_resp", 
        "target": "307", 
        "source_alt": "Pi", 
        "source": "175"
    }, 
    {
        "target_alt": "v_resp", 
        "target": "307", 
        "source_alt": "ADP", 
        "source": "160"
    }, 
    {
        "target_alt": "NAD", 
        "target": "283", 
        "source_alt": "v_resp", 
        "source": "307"
    }, 
    {
        "target_alt": "ATP", 
        "target": "172", 
        "source_alt": "v_resp", 
        "source": "307"
    }, 
    {
        "target_alt": "v_glycerol_syn", 
        "target": "308", 
        "source_alt": "NADH", 
        "source": "281"
    }, 
    {
        "target_alt": "v_glycerol_syn", 
        "target": "308", 
        "source_alt": "TriP", 
        "source": "300"
    }, 
    {
        "target_alt": "Pi", 
        "target": "175", 
        "source_alt": "v_glycerol_syn", 
        "source": "308"
    }, 
    {
        "target_alt": "glycerol", 
        "target": "298", 
        "source_alt": "v_glycerol_syn", 
        "source": "308"
    }, 
    {
        "target_alt": "NAD", 
        "target": "283", 
        "source_alt": "v_glycerol_syn", 
        "source": "308"
    }, 
    {
        "target_alt": "v_NA_RNA_f", 
        "target": "309", 
        "source_alt": "HexP", 
        "source": "289"
    }, 
    {
        "target_alt": "v_NA_RNA_f", 
        "target": "309", 
        "source_alt": "pyr", 
        "source": "293"
    }, 
    {
        "target_alt": "v_NA_RNA_f", 
        "target": "309", 
        "source_alt": "TriP", 
        "source": "300"
    }, 
    {
        "target_alt": "v_NA_RNA_f", 
        "target": "309", 
        "source_alt": "ATP", 
        "source": "172"
    }, 
    {
        "target_alt": "v_NA_RNA_f", 
        "target": "309", 
        "source_alt": "NH4", 
        "source": "297"
    }, 
    {
        "target_alt": "H", 
        "target": "292", 
        "source_alt": "v_NA_RNA_f", 
        "source": "309"
    }, 
    {
        "target_alt": "Pi", 
        "target": "175", 
        "source_alt": "v_NA_RNA_f", 
        "source": "309"
    }, 
    {
        "target_alt": "NA_RNA", 
        "target": "285", 
        "source_alt": "v_NA_RNA_f", 
        "source": "309"
    }, 
    {
        "target_alt": "ADP", 
        "target": "160", 
        "source_alt": "v_NA_RNA_f", 
        "source": "309"
    }, 
    {
        "target_alt": "v_NAD_syn", 
        "target": "310", 
        "source_alt": "AA", 
        "source": "180"
    }, 
    {
        "target_alt": "v_NAD_syn", 
        "target": "310", 
        "source_alt": "ADP", 
        "source": "160"
    }, 
    {
        "target_alt": "NAD", 
        "target": "283", 
        "source_alt": "v_NAD_syn", 
        "source": "310"
    }, 
    {
        "target_alt": "v_NAD_syn", 
        "symbol": "circle", 
        "target": "310", 
        "source_alt": "NADH", 
        "source": "281"
    }, 
    {
        "target_alt": "v_ATP_con", 
        "target": "311", 
        "source_alt": "ATP", 
        "source": "172"
    }, 
    {
        "target_alt": "Pi", 
        "target": "175", 
        "source_alt": "v_ATP_con", 
        "source": "311"
    }, 
    {
        "target_alt": "ADP", 
        "target": "160", 
        "source_alt": "v_ATP_con", 
        "source": "311"
    }, 
    {
        "target_alt": "v_NA_DNA_syn", 
        "target": "312", 
        "source_alt": "NH4", 
        "source": "297"
    }, 
    {
        "target_alt": "v_NA_DNA_syn", 
        "target": "312", 
        "source_alt": "NA_RNA", 
        "source": "285"
    }, 
    {
        "target_alt": "H", 
        "target": "292", 
        "source_alt": "v_NA_DNA_syn", 
        "source": "312"
    }, 
    {
        "target_alt": "NA_DNA", 
        "target": "303", 
        "source_alt": "v_NA_DNA_syn", 
        "source": "312"
    }, 
    {
        "target_alt": "v_lipid_f", 
        "target": "313", 
        "source_alt": "HexP", 
        "source": "289"
    }, 
    {
        "target_alt": "v_lipid_f", 
        "target": "313", 
        "source_alt": "pyr", 
        "source": "293"
    }, 
    {
        "target_alt": "v_lipid_f", 
        "target": "313", 
        "source_alt": "ATP", 
        "source": "172"
    }, 
    {
        "target_alt": "v_lipid_f", 
        "target": "313", 
        "source_alt": "NH4", 
        "source": "297"
    }, 
    {
        "target_alt": "H", 
        "target": "292", 
        "source_alt": "v_lipid_f", 
        "source": "313"
    }, 
    {
        "target_alt": "Pi", 
        "target": "175", 
        "source_alt": "v_lipid_f", 
        "source": "313"
    }, 
    {
        "target_alt": "lipid", 
        "target": "291", 
        "source_alt": "v_lipid_f", 
        "source": "313"
    }, 
    {
        "target_alt": "ADP", 
        "target": "160", 
        "source_alt": "v_lipid_f", 
        "source": "313"
    }, 
    {
        "target_alt": "TriP", 
        "target": "300", 
        "source_alt": "v_lipid_f", 
        "source": "313"
    }, 
    {
        "target_alt": "v_HK", 
        "target": "314", 
        "source_alt": "Glc", 
        "source": "294"
    }, 
    {
        "target_alt": "v_HK", 
        "target": "314", 
        "source_alt": "ATP", 
        "source": "172"
    }, 
    {
        "target_alt": "HexP", 
        "target": "289", 
        "source_alt": "v_HK", 
        "source": "314"
    }, 
    {
        "target_alt": "HexP_check", 
        "target": "302", 
        "source_alt": "v_HK", 
        "source": "314"
    }, 
    {
        "target_alt": "ADP", 
        "target": "160", 
        "source_alt": "v_HK", 
        "source": "314"
    }, 
    {
        "target_alt": "v_pyr", 
        "target": "315", 
        "source_alt": "NAD", 
        "source": "283"
    }, 
    {
        "target_alt": "v_pyr", 
        "target": "315", 
        "source_alt": "Pi", 
        "source": "175"
    }, 
    {
        "target_alt": "v_pyr", 
        "target": "315", 
        "source_alt": "TriP", 
        "source": "300"
    }, 
    {
        "target_alt": "v_pyr", 
        "target": "315", 
        "source_alt": "ADP", 
        "source": "160"
    }, 
    {
        "target_alt": "pyr", 
        "target": "293", 
        "source_alt": "v_pyr", 
        "source": "315"
    }, 
    {
        "target_alt": "NADH", 
        "target": "281", 
        "source_alt": "v_pyr", 
        "source": "315"
    }, 
    {
        "target_alt": "pyr_check", 
        "target": "284", 
        "source_alt": "v_pyr", 
        "source": "315"
    }, 
    {
        "target_alt": "ATP", 
        "target": "172", 
        "source_alt": "v_pyr", 
        "source": "315"
    }, 
    {
        "target_alt": "v_ADP_syn", 
        "target": "316", 
        "source_alt": "Pi", 
        "source": "175"
    }, 
    {
        "target_alt": "v_ADP_syn", 
        "target": "316", 
        "source_alt": "NA_RNA", 
        "source": "285"
    }, 
    {
        "target_alt": "ADP", 
        "target": "160", 
        "source_alt": "v_ADP_syn", 
        "source": "316"
    }, 
    {
        "target_alt": "v_ADP_syn", 
        "symbol": "circle", 
        "target": "316", 
        "source_alt": "ATP", 
        "source": "172"
    }, 
    {
        "target_alt": "v_mannan_f", 
        "target": "317", 
        "source_alt": "HexP", 
        "source": "289"
    }, 
    {
        "target_alt": "v_mannan_f", 
        "target": "317", 
        "source_alt": "ATP", 
        "source": "172"
    }, 
    {
        "target_alt": "Pi", 
        "target": "175", 
        "source_alt": "v_mannan_f", 
        "source": "317"
    }, 
    {
        "target_alt": "mannan", 
        "target": "282", 
        "source_alt": "v_mannan_f", 
        "source": "317"
    }, 
    {
        "target_alt": "ADP", 
        "target": "160", 
        "source_alt": "v_mannan_f", 
        "source": "317"
    }, 
    {
        "target_alt": "v_TCA", 
        "target": "318", 
        "source_alt": "pyr", 
        "source": "293"
    }, 
    {
        "target_alt": "v_TCA", 
        "target": "318", 
        "source_alt": "Pi", 
        "source": "175"
    }, 
    {
        "target_alt": "v_TCA", 
        "target": "318", 
        "source_alt": "ADP", 
        "source": "160"
    }, 
    {
        "target_alt": "v_TCA", 
        "target": "318", 
        "source_alt": "NAD", 
        "source": "283"
    }, 
    {
        "target_alt": "NADH", 
        "target": "281", 
        "source_alt": "v_TCA", 
        "source": "318"
    }, 
    {
        "target_alt": "CO2_check", 
        "target": "295", 
        "source_alt": "v_TCA", 
        "source": "318"
    }, 
    {
        "target_alt": "CO2", 
        "target": "301", 
        "source_alt": "v_TCA", 
        "source": "318"
    }, 
    {
        "target_alt": "ATP", 
        "target": "172", 
        "source_alt": "v_TCA", 
        "source": "318"
    }, 
    {
        "target_alt": "v_ferm", 
        "target": "319", 
        "source_alt": "pyr", 
        "source": "293"
    }, 
    {
        "target_alt": "v_ferm", 
        "target": "319", 
        "source_alt": "NADH", 
        "source": "281"
    }, 
    {
        "target_alt": "NAD", 
        "target": "283", 
        "source_alt": "v_ferm", 
        "source": "319"
    }, 
    {
        "target_alt": "CO2", 
        "target": "301", 
        "source_alt": "v_ferm", 
        "source": "319"
    }, 
    {
        "target_alt": "CO2_check", 
        "target": "295", 
        "source_alt": "v_ferm", 
        "source": "319"
    }, 
    {
        "target_alt": "EtOH_check", 
        "target": "287", 
        "source_alt": "v_ferm", 
        "source": "319"
    }, 
    {
        "target_alt": "EtOH", 
        "target": "288", 
        "source_alt": "v_ferm", 
        "source": "319"
    }, 
    {
        "target_alt": "v_TriP", 
        "target": "320", 
        "source_alt": "HexP", 
        "source": "289"
    }, 
    {
        "target_alt": "v_TriP", 
        "target": "320", 
        "source_alt": "ATP", 
        "source": "172"
    }, 
    {
        "target_alt": "TriP_check", 
        "target": "286", 
        "source_alt": "v_TriP", 
        "source": "320"
    }, 
    {
        "target_alt": "TriP", 
        "target": "300", 
        "source_alt": "v_TriP", 
        "source": "320"
    }, 
    {
        "target_alt": "ADP", 
        "target": "160", 
        "source_alt": "v_TriP", 
        "source": "320"
    }, 
    {
        "target_alt": "v_A_con", 
        "target": "324", 
        "source_alt": "A", 
        "source": "321"
    }, 
    {
        "target_alt": "v_A_con", 
        "symbol": "circle", 
        "target": "324", 
        "source_alt": "DNA", 
        "source": "322"
    }, 
    {
        "target_alt": "v_DNA_syn", 
        "target": "325", 
        "source_alt": "NA_DNA_cyt", 
        "source": "323"
    }, 
    {
        "target_alt": "DNA", 
        "target": "322", 
        "source_alt": "v_DNA_syn", 
        "source": "325"
    }, 
    {
        "target_alt": "v_DNA_syn", 
        "symbol": "circle", 
        "target": "325", 
        "source_alt": "A", 
        "source": "321"
    }, 
    {
        "target_alt": "A", 
        "target": "321", 
        "source_alt": "v_A_syn", 
        "source": "326"
    }, 
    {
        "target_alt": "v_A_syn", 
        "symbol": "circle", 
        "target": "326", 
        "source_alt": "Clb5", 
        "source": "166"
    }, 
    {
        "target_alt": "CW_proteins", 
        "target": "335", 
        "source_alt": "proteins", 
        "source": "330"
    }, 
    {
        "target_alt": "proteins_cw", 
        "target": "327", 
        "source_alt": "CW_proteins", 
        "source": "335"
    }, 
    {
        "target_alt": "CW_proteins", 
        "symbol": "circle", 
        "target": "335", 
        "source_alt": "m_cw", 
        "source": "332"
    }, 
    {
        "target_alt": "CW_mannan", 
        "target": "336", 
        "source_alt": "mannan", 
        "source": "282"
    }, 
    {
        "target_alt": "mannan_cw", 
        "target": "328", 
        "source_alt": "CW_mannan", 
        "source": "336"
    }, 
    {
        "target_alt": "CW_mannan", 
        "symbol": "circle", 
        "target": "336", 
        "source_alt": "m_cw", 
        "source": "332"
    }, 
    {
        "target_alt": "CW_glucan", 
        "target": "337", 
        "source_alt": "glucan", 
        "source": "299"
    }, 
    {
        "target_alt": "glucan_cw", 
        "target": "333", 
        "source_alt": "CW_glucan", 
        "source": "337"
    }, 
    {
        "target_alt": "CW_glucan", 
        "symbol": "circle", 
        "target": "337", 
        "source_alt": "m_cw", 
        "source": "332"
    }, 
    {
        "target_alt": "CW_chitin", 
        "target": "338", 
        "source_alt": "chitin", 
        "source": "296"
    }, 
    {
        "target_alt": "chitin_cw", 
        "target": "334", 
        "source_alt": "CW_chitin", 
        "source": "338"
    }, 
    {
        "target_alt": "CW_chitin", 
        "symbol": "circle", 
        "target": "338", 
        "source_alt": "m_cw", 
        "source": "332"
    }, 
    {
        "target_alt": "m_cw", 
        "symbol": "circle", 
        "target": "332", 
        "source_alt": "glucan_cw", 
        "source": "333"
    }, 
    {
        "target_alt": "m_cw", 
        "symbol": "circle", 
        "target": "332", 
        "source_alt": "V_cw", 
        "source": "331"
    }, 
    {
        "target_alt": "m_cw", 
        "symbol": "circle", 
        "target": "332", 
        "source_alt": "chitin_cw", 
        "source": "334"
    }, 
    {
        "target_alt": "m_cw", 
        "symbol": "circle", 
        "target": "332", 
        "source_alt": "V_cw", 
        "source": "331"
    }, 
    {
        "target_alt": "m_cw", 
        "symbol": "circle", 
        "target": "332", 
        "source_alt": "mannan_cw", 
        "source": "328"
    }, 
    {
        "target_alt": "m_cw", 
        "symbol": "circle", 
        "target": "332", 
        "source_alt": "V_cw", 
        "source": "331"
    }, 
    {
        "target_alt": "m_cw", 
        "symbol": "circle", 
        "target": "332", 
        "source_alt": "proteins_cw", 
        "source": "327"
    }, 
    {
        "target_alt": "m_cw", 
        "symbol": "circle", 
        "target": "332", 
        "source_alt": "V_cw", 
        "source": "331"
    }, 
    {
        "target_alt": "J_pma1", 
        "target": "387", 
        "source_alt": "h_cyt", 
        "source": "339"
    }, 
    {
        "target_alt": "J_pma1", 
        "symbol": "circle", 
        "target": "387", 
        "source_alt": "h_ext", 
        "source": "346"
    }, 
    {
        "target_alt": "J_pma1", 
        "symbol": "circle", 
        "target": "387", 
        "source_alt": "atp_cyt", 
        "source": "341"
    }, 
    {
        "target_alt": "J_pma1", 
        "symbol": "circle", 
        "target": "387", 
        "source_alt": "adp_cyt", 
        "source": "371"
    }, 
    {
        "target_alt": "J_pma1", 
        "symbol": "circle", 
        "target": "387", 
        "source_alt": "pi_cyt", 
        "source": "376"
    }, 
    {
        "target_alt": "J_na", 
        "target": "388", 
        "source_alt": "na_cyt", 
        "source": "350"
    }, 
    {
        "target_alt": "J_na", 
        "symbol": "circle", 
        "target": "388", 
        "source_alt": "na_ext", 
        "source": "349"
    }, 
    {
        "target_alt": "J_trk12", 
        "target": "389", 
        "source_alt": "k_cyt", 
        "source": "366"
    }, 
    {
        "target_alt": "J_trk12", 
        "symbol": "circle", 
        "target": "389", 
        "source_alt": "k_ext", 
        "source": "363"
    }, 
    {
        "target_alt": "J_ca", 
        "target": "390", 
        "source_alt": "ca_cyt", 
        "source": "354"
    }, 
    {
        "target_alt": "J_ca", 
        "symbol": "circle", 
        "target": "390", 
        "source_alt": "ca_ext", 
        "source": "367"
    }, 
    {
        "target_alt": "J_vac_h", 
        "target": "391", 
        "source_alt": "h_vac", 
        "source": "345"
    }, 
    {
        "target_alt": "h_cyt", 
        "target": "339", 
        "source_alt": "J_vac_h", 
        "source": "391"
    }, 
    {
        "target_alt": "J_h", 
        "target": "392", 
        "source_alt": "h_cyt", 
        "source": "339"
    }, 
    {
        "target_alt": "J_h", 
        "symbol": "circle", 
        "target": "392", 
        "source_alt": "h_ext", 
        "source": "346"
    }, 
    {
        "target_alt": "J_cl", 
        "target": "393", 
        "source_alt": "cl_cyt", 
        "source": "347"
    }, 
    {
        "target_alt": "J_cl", 
        "symbol": "circle", 
        "target": "393", 
        "source_alt": "cl_ext", 
        "source": "383"
    }, 
    {
        "target_alt": "J_k", 
        "target": "394", 
        "source_alt": "k_cyt", 
        "source": "366"
    }, 
    {
        "target_alt": "J_k", 
        "symbol": "circle", 
        "target": "394", 
        "source_alt": "k_ext", 
        "source": "363"
    }, 
    {
        "target_alt": "J_vac_k", 
        "target": "395", 
        "source_alt": "k_vac", 
        "source": "378"
    }, 
    {
        "target_alt": "k_cyt", 
        "target": "366", 
        "source_alt": "J_vac_k", 
        "source": "395"
    }, 
    {
        "target_alt": "J_tok1", 
        "target": "396", 
        "source_alt": "k_cyt", 
        "source": "366"
    }, 
    {
        "target_alt": "J_tok1", 
        "symbol": "circle", 
        "target": "396", 
        "source_alt": "k_ext", 
        "source": "363"
    }, 
    {
        "target_alt": "J_vma1", 
        "target": "397", 
        "source_alt": "h_vac", 
        "source": "345"
    }, 
    {
        "target_alt": "h_cyt", 
        "target": "339", 
        "source_alt": "J_vma1", 
        "source": "397"
    }, 
    {
        "target_alt": "J_vma1", 
        "symbol": "circle", 
        "target": "397", 
        "source_alt": "atp_cyt", 
        "source": "341"
    }, 
    {
        "target_alt": "J_vma1", 
        "symbol": "circle", 
        "target": "397", 
        "source_alt": "adp_cyt", 
        "source": "371"
    }, 
    {
        "target_alt": "J_vma1", 
        "symbol": "circle", 
        "target": "397", 
        "source_alt": "pi_cyt", 
        "source": "376"
    }, 
    {
        "target_alt": "J_nha1", 
        "target": "398", 
        "source_alt": "h_cyt", 
        "source": "339"
    }, 
    {
        "target_alt": "na_cyt", 
        "target": "350", 
        "source_alt": "J_nha1", 
        "source": "398"
    }, 
    {
        "target_alt": "J_nha1", 
        "symbol": "circle", 
        "target": "398", 
        "source_alt": "h_ext", 
        "source": "346"
    }, 
    {
        "target_alt": "J_nha1", 
        "symbol": "circle", 
        "target": "398", 
        "source_alt": "na_ext", 
        "source": "349"
    }, 
    {
        "target_alt": "J_vac_ca", 
        "target": "399", 
        "source_alt": "ca_vac", 
        "source": "362"
    }, 
    {
        "target_alt": "ca_cyt", 
        "target": "354", 
        "source_alt": "J_vac_ca", 
        "source": "399"
    }, 
    {
        "target_alt": "J_vac_cl", 
        "target": "400", 
        "source_alt": "cl_vac", 
        "source": "355"
    }, 
    {
        "target_alt": "cl_cyt", 
        "target": "347", 
        "source_alt": "J_vac_cl", 
        "source": "400"
    }, 
    {
        "target_alt": "J_ena1", 
        "target": "401", 
        "source_alt": "na_cyt", 
        "source": "350"
    }, 
    {
        "target_alt": "J_ena1", 
        "symbol": "circle", 
        "target": "401", 
        "source_alt": "na_ext", 
        "source": "349"
    }, 
    {
        "target_alt": "J_vac_na", 
        "target": "402", 
        "source_alt": "na_vac", 
        "source": "360"
    }, 
    {
        "target_alt": "na_cyt", 
        "target": "350", 
        "source_alt": "J_vac_na", 
        "source": "402"
    }, 
    {
        "target_alt": "E_ena1", 
        "symbol": "circle", 
        "target": "364", 
        "source_alt": "na_ext", 
        "source": "349"
    }, 
    {
        "target_alt": "E_ena1", 
        "symbol": "circle", 
        "target": "364", 
        "source_alt": "na_cyt", 
        "source": "350"
    }, 
    {
        "target_alt": "E_ena1", 
        "symbol": "circle", 
        "target": "364", 
        "source_alt": "D_G_ATP", 
        "source": "379"
    }, 
    {
        "target_alt": "surface_vac", 
        "symbol": "circle", 
        "target": "365", 
        "source_alt": "r_vac", 
        "source": "372"
    }, 
    {
        "target_alt": "surface", 
        "symbol": "circle", 
        "target": "368", 
        "source_alt": "r", 
        "source": "359"
    }, 
    {
        "target_alt": "E_nha1", 
        "symbol": "circle", 
        "target": "370", 
        "source_alt": "h_ext", 
        "source": "346"
    }, 
    {
        "target_alt": "E_nha1", 
        "symbol": "circle", 
        "target": "370", 
        "source_alt": "na_cyt", 
        "source": "350"
    }, 
    {
        "target_alt": "E_nha1", 
        "symbol": "circle", 
        "target": "370", 
        "source_alt": "h_cyt", 
        "source": "339"
    }, 
    {
        "target_alt": "E_nha1", 
        "symbol": "circle", 
        "target": "370", 
        "source_alt": "na_ext", 
        "source": "349"
    }, 
    {
        "target_alt": "r_vac", 
        "symbol": "circle", 
        "target": "372", 
        "source_alt": "vacuole", 
        "source": "375"
    }, 
    {
        "target_alt": "my_J_tok1", 
        "symbol": "circle", 
        "target": "373", 
        "source_alt": "surface", 
        "source": "368"
    }, 
    {
        "target_alt": "my_J_tok1", 
        "symbol": "circle", 
        "target": "373", 
        "source_alt": "gp_tok1", 
        "source": "386"
    }, 
    {
        "target_alt": "my_J_tok1", 
        "symbol": "circle", 
        "target": "373", 
        "source_alt": "v_m", 
        "source": "344"
    }, 
    {
        "target_alt": "my_J_tok1", 
        "symbol": "circle", 
        "target": "373", 
        "source_alt": "k_ext", 
        "source": "363"
    }, 
    {
        "target_alt": "my_J_tok1", 
        "symbol": "circle", 
        "target": "373", 
        "source_alt": "k_cyt", 
        "source": "366"
    }, 
    {
        "target_alt": "E_pma1", 
        "symbol": "circle", 
        "target": "342", 
        "source_alt": "h_ext", 
        "source": "346"
    }, 
    {
        "target_alt": "E_pma1", 
        "symbol": "circle", 
        "target": "342", 
        "source_alt": "h_cyt", 
        "source": "339"
    }, 
    {
        "target_alt": "E_pma1", 
        "symbol": "circle", 
        "target": "342", 
        "source_alt": "D_G_ATP", 
        "source": "379"
    }, 
    {
        "target_alt": "E_vma1", 
        "symbol": "circle", 
        "target": "374", 
        "source_alt": "h_cyt", 
        "source": "339"
    }, 
    {
        "target_alt": "E_vma1", 
        "symbol": "circle", 
        "target": "374", 
        "source_alt": "h_vac", 
        "source": "345"
    }, 
    {
        "target_alt": "E_vma1", 
        "symbol": "circle", 
        "target": "374", 
        "source_alt": "D_G_ATP", 
        "source": "379"
    }, 
    {
        "target_alt": "vacuole", 
        "symbol": "circle", 
        "target": "375", 
        "source_alt": "cytosol", 
        "source": "343"
    }, 
    {
        "target_alt": "my_J_trk12", 
        "symbol": "circle", 
        "target": "352", 
        "source_alt": "surface", 
        "source": "368"
    }, 
    {
        "target_alt": "my_J_trk12", 
        "symbol": "circle", 
        "target": "352", 
        "source_alt": "gp_trk12", 
        "source": "348"
    }, 
    {
        "target_alt": "my_J_trk12", 
        "symbol": "circle", 
        "target": "352", 
        "source_alt": "v_m", 
        "source": "344"
    }, 
    {
        "target_alt": "my_J_trk12", 
        "symbol": "circle", 
        "target": "352", 
        "source_alt": "k_ext", 
        "source": "363"
    }, 
    {
        "target_alt": "my_J_trk12", 
        "symbol": "circle", 
        "target": "352", 
        "source_alt": "k_cyt", 
        "source": "366"
    }, 
    {
        "target_alt": "gp_trk12", 
        "symbol": "circle", 
        "target": "348", 
        "source_alt": "v_m", 
        "source": "344"
    }, 
    {
        "target_alt": "D_G_ATP", 
        "symbol": "circle", 
        "target": "379", 
        "source_alt": "atp_cyt", 
        "source": "341"
    }, 
    {
        "target_alt": "D_G_ATP", 
        "symbol": "circle", 
        "target": "379", 
        "source_alt": "adp_cyt", 
        "source": "371"
    }, 
    {
        "target_alt": "D_G_ATP", 
        "symbol": "circle", 
        "target": "379", 
        "source_alt": "pi_cyt", 
        "source": "376"
    }, 
    {
        "target_alt": "my_J_Cl", 
        "symbol": "circle", 
        "target": "351", 
        "source_alt": "surface", 
        "source": "368"
    }, 
    {
        "target_alt": "my_J_Cl", 
        "symbol": "circle", 
        "target": "351", 
        "source_alt": "v_m", 
        "source": "344"
    }, 
    {
        "target_alt": "my_J_Cl", 
        "symbol": "circle", 
        "target": "351", 
        "source_alt": "cl_ext", 
        "source": "383"
    }, 
    {
        "target_alt": "my_J_Cl", 
        "symbol": "circle", 
        "target": "351", 
        "source_alt": "cl_cyt", 
        "source": "347"
    }, 
    {
        "target_alt": "my_J_K", 
        "symbol": "circle", 
        "target": "381", 
        "source_alt": "surface", 
        "source": "368"
    }, 
    {
        "target_alt": "my_J_K", 
        "symbol": "circle", 
        "target": "381", 
        "source_alt": "v_m", 
        "source": "344"
    }, 
    {
        "target_alt": "my_J_K", 
        "symbol": "circle", 
        "target": "381", 
        "source_alt": "k_ext", 
        "source": "363"
    }, 
    {
        "target_alt": "my_J_K", 
        "symbol": "circle", 
        "target": "381", 
        "source_alt": "k_cyt", 
        "source": "366"
    }, 
    {
        "target_alt": "my_J_H", 
        "symbol": "circle", 
        "target": "382", 
        "source_alt": "surface", 
        "source": "368"
    }, 
    {
        "target_alt": "my_J_H", 
        "symbol": "circle", 
        "target": "382", 
        "source_alt": "v_m", 
        "source": "344"
    }, 
    {
        "target_alt": "my_J_H", 
        "symbol": "circle", 
        "target": "382", 
        "source_alt": "h_ext", 
        "source": "346"
    }, 
    {
        "target_alt": "my_J_H", 
        "symbol": "circle", 
        "target": "382", 
        "source_alt": "h_cyt", 
        "source": "339"
    }, 
    {
        "target_alt": "my_J_Ca", 
        "symbol": "circle", 
        "target": "353", 
        "source_alt": "surface", 
        "source": "368"
    }, 
    {
        "target_alt": "my_J_Ca", 
        "symbol": "circle", 
        "target": "353", 
        "source_alt": "v_m", 
        "source": "344"
    }, 
    {
        "target_alt": "my_J_Ca", 
        "symbol": "circle", 
        "target": "353", 
        "source_alt": "ca_ext", 
        "source": "367"
    }, 
    {
        "target_alt": "my_J_Ca", 
        "symbol": "circle", 
        "target": "353", 
        "source_alt": "ca_cyt", 
        "source": "354"
    }, 
    {
        "target_alt": "my_J_pma1", 
        "symbol": "circle", 
        "target": "384", 
        "source_alt": "surface", 
        "source": "368"
    }, 
    {
        "target_alt": "my_J_pma1", 
        "symbol": "circle", 
        "target": "384", 
        "source_alt": "v_m", 
        "source": "344"
    }, 
    {
        "target_alt": "my_J_pma1", 
        "symbol": "circle", 
        "target": "384", 
        "source_alt": "E_pma1", 
        "source": "342"
    }, 
    {
        "target_alt": "my_J_ena1", 
        "symbol": "circle", 
        "target": "356", 
        "source_alt": "surface", 
        "source": "368"
    }, 
    {
        "target_alt": "my_J_ena1", 
        "symbol": "circle", 
        "target": "356", 
        "source_alt": "v_m", 
        "source": "344"
    }, 
    {
        "target_alt": "my_J_ena1", 
        "symbol": "circle", 
        "target": "356", 
        "source_alt": "E_ena1", 
        "source": "364"
    }, 
    {
        "target_alt": "gp_tok1", 
        "symbol": "circle", 
        "target": "386", 
        "source_alt": "v_m", 
        "source": "344"
    }, 
    {
        "target_alt": "myph", 
        "symbol": "circle", 
        "target": "358", 
        "source_alt": "h_cyt", 
        "source": "339"
    }, 
    {
        "target_alt": "r", 
        "symbol": "circle", 
        "target": "359", 
        "source_alt": "cytosol", 
        "source": "343"
    }, 
    {
        "target_alt": "my_J_Na", 
        "symbol": "circle", 
        "target": "361", 
        "source_alt": "surface", 
        "source": "368"
    }, 
    {
        "target_alt": "my_J_Na", 
        "symbol": "circle", 
        "target": "361", 
        "source_alt": "v_m", 
        "source": "344"
    }, 
    {
        "target_alt": "my_J_Na", 
        "symbol": "circle", 
        "target": "361", 
        "source_alt": "na_ext", 
        "source": "349"
    }, 
    {
        "target_alt": "my_J_Na", 
        "symbol": "circle", 
        "target": "361", 
        "source_alt": "na_cyt", 
        "source": "350"
    }, 
    {
        "target_alt": "my_J_nha1", 
        "symbol": "circle", 
        "target": "385", 
        "source_alt": "surface", 
        "source": "368"
    }, 
    {
        "target_alt": "my_J_nha1", 
        "symbol": "circle", 
        "target": "385", 
        "source_alt": "v_m", 
        "source": "344"
    }, 
    {
        "target_alt": "my_J_nha1", 
        "symbol": "circle", 
        "target": "385", 
        "source_alt": "E_nha1", 
        "source": "370"
    }, 
    {
        "target_alt": "glycerol_trp", 
        "target": "418", 
        "source_alt": "glycerol_cyt", 
        "source": "406"
    }, 
    {
        "target_alt": "glycerol_ext", 
        "target": "411", 
        "source_alt": "glycerol_trp", 
        "source": "418"
    }, 
    {
        "target_alt": "v_EtOHdif", 
        "target": "419", 
        "source_alt": "EtOH", 
        "source": "288"
    }, 
    {
        "target_alt": "EtOH_ext", 
        "target": "416", 
        "source_alt": "v_EtOHdif", 
        "source": "419"
    }, 
    {
        "target_alt": "glucose_cyt", 
        "target": "408", 
        "source_alt": "v_hxt", 
        "source": "420"
    }, 
    {
        "target_alt": "v_hxt", 
        "symbol": "circle", 
        "target": "420", 
        "source_alt": "VOLUME", 
        "source": "403"
    }, 
    {
        "target_alt": "v_hxt", 
        "symbol": "circle", 
        "target": "420", 
        "source_alt": "SURFACE", 
        "source": "415"
    }, 
    {
        "target_alt": "v_hxt", 
        "symbol": "circle", 
        "target": "420", 
        "source_alt": "glucose_ext", 
        "source": "412"
    }, 
    {
        "target_alt": "v_C02dif", 
        "target": "421", 
        "source_alt": "CO2", 
        "source": "301"
    }, 
    {
        "target_alt": "CO2_ext", 
        "target": "407", 
        "source_alt": "v_C02dif", 
        "source": "421"
    }, 
    {
        "target_alt": "glc_uptake", 
        "symbol": "circle", 
        "target": "409", 
        "source_alt": "SURFACE", 
        "source": "415"
    }, 
    {
        "target_alt": "glc_uptake", 
        "symbol": "circle", 
        "target": "409", 
        "source_alt": "glucose_ext", 
        "source": "412"
    }, 
    {
        "target_alt": "glc_uptake", 
        "symbol": "circle", 
        "target": "409", 
        "source_alt": "glucose_cyt", 
        "source": "408"
    }, 
    {
        "target_alt": "glc_uptake", 
        "symbol": "circle", 
        "target": "409", 
        "source_alt": "glucose_ext", 
        "source": "412"
    }, 
    {
        "target_alt": "glc_uptake", 
        "symbol": "circle", 
        "target": "409", 
        "source_alt": "glucose_cyt", 
        "source": "408"
    }, 
    {
        "target_alt": "glc_uptake", 
        "symbol": "circle", 
        "target": "409", 
        "source_alt": "glucose_ext", 
        "source": "412"
    }, 
    {
        "target_alt": "glc_uptake", 
        "symbol": "circle", 
        "target": "409", 
        "source_alt": "glucose_cyt", 
        "source": "408"
    }, 
    {
        "target_alt": "SURFACE", 
        "symbol": "circle", 
        "target": "415", 
        "source_alt": "VOLUME", 
        "source": "403"
    }
]
var compartments ={
    "parameter_compartment": {
        "spread": [
            12.613, 
            8.0191, 
            35.162, 
            30.731
        ], 
        "species": [
            "340", 
            "342", 
            "344", 
            "348", 
            "351", 
            "352", 
            "353", 
            "356", 
            "358", 
            "359", 
            "361", 
            "364", 
            "365", 
            "368", 
            "369", 
            "370", 
            "372", 
            "373", 
            "374", 
            "379", 
            "381", 
            "382", 
            "384", 
            "385", 
            "386"
        ], 
        "module": [
            "TRP_ION"
        ]
    }, 
    "cytosol": {
        "spread": [
            5.6464, 
            2.6484, 
            34.841, 
            32.341
        ], 
        "species": [
            "142", 
            "339", 
            "341", 
            "343", 
            "347", 
            "350", 
            "354", 
            "366", 
            "371", 
            "376", 
            "377", 
            "380", 
            "387", 
            "388", 
            "389", 
            "390", 
            "391", 
            "392", 
            "393", 
            "394", 
            "395", 
            "396", 
            "397", 
            "398", 
            "399", 
            "400", 
            "401", 
            "402"
        ], 
        "module": [
            "GEX_APC"
        ]
    }, 
    "intracellular": {
        "spread": [
            19.595, 
            4.3449, 
            20.42, 
            5.0869
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
            "299", 
            "300", 
            "301", 
            "302", 
            "303", 
            "304", 
            "305", 
            "306", 
            "307", 
            "308", 
            "309", 
            "310", 
            "311", 
            "312", 
            "313", 
            "314", 
            "315", 
            "316", 
            "317", 
            "318", 
            "319", 
            "320", 
            "323", 
            "325", 
            "326", 
            "330", 
            "335", 
            "336", 
            "337", 
            "338", 
            "403", 
            "405", 
            "406", 
            "408", 
            "409", 
            "415", 
            "418", 
            "419", 
            "420", 
            "421"
        ], 
        "module": [
            "VOL_core_growth_single_vol"
        ]
    }, 
    "vacuole": {
        "spread": [
            7.4665, 
            5.848, 
            39.34, 
            37.861
        ], 
        "species": [
            "345", 
            "355", 
            "360", 
            "362", 
            "375", 
            "378", 
            "391", 
            "395", 
            "397", 
            "399", 
            "400", 
            "402"
        ], 
        "module": [
            "TRP_ION"
        ]
    }, 
    "plasma_membrane": {
        "spread": [
            18.632, 
            17.798, 
            23.296, 
            22.601
        ], 
        "species": [
            "329", 
            "404"
        ], 
        "module": [
            "MET_CWS"
        ]
    }, 
    "cell_wall": {
        "spread": [
            7.1196, 
            5.1145, 
            3.6579, 
            1.9924
        ], 
        "species": [
            "327", 
            "328", 
            "331", 
            "332", 
            "333", 
            "334", 
            "335", 
            "336", 
            "337", 
            "338"
        ], 
        "module": [
            "MET_CWS"
        ]
    }, 
    "nucleus": {
        "spread": [
            27.85, 
            26.294, 
            8.063, 
            6.5074
        ], 
        "species": [
            "37", 
            "321", 
            "322", 
            "324", 
            "325", 
            "326"
        ], 
        "module": [
            "CDC_core"
        ]
    }, 
    "extracellular": {
        "spread": [
            5.7263, 
            2.3621, 
            28.831, 
            25.623
        ], 
        "species": [
            "15", 
            "346", 
            "349", 
            "357", 
            "363", 
            "367", 
            "383", 
            "387", 
            "388", 
            "389", 
            "390", 
            "392", 
            "393", 
            "394", 
            "396", 
            "398", 
            "401", 
            "407", 
            "410", 
            "411", 
            "412", 
            "413", 
            "414", 
            "416", 
            "417", 
            "418", 
            "419", 
            "420", 
            "421"
        ], 
        "module": [
            "VOL_core_growth_single_vol"
        ]
    }
}