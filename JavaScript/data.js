var data =[
    {
        "links_to": [
            "6", 
            "15", 
            "8"
        ], 
        "symbol": "triangle", 
        "module": [
            "VOL_core_growth_single_vol"
        ], 
        "name_alt": "dr_os", 
        "equation": "(- Lp * (pi_t + pi_e - pi_i))", 
        "state": "0", 
        "y": "53.472", 
        "x": "66.167", 
        "annotation": "YCM:r_os_flux", 
        "compartment": "intracellular", 
        "is_ode": false, 
        "name": "0"
    }, 
    {
        "links_to": [
            "9", 
            "2"
        ], 
        "symbol": "triangle", 
        "module": [
            "VOL_core_growth_single_vol"
        ], 
        "name_alt": "G", 
        "equation": "(4. * pi * r**2.)", 
        "state": "0", 
        "y": "55.472", 
        "x": "65.764", 
        "annotation": "SBO:0000467", 
        "compartment": "intracellular", 
        "is_ode": false, 
        "name": "1"
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
        "name_alt": "c_i", 
        "state": "0", 
        "y": "56.472", 
        "x": "65.486", 
        "annotation": "YCM:internal_osmolarity", 
        "compartment": "intracellular", 
        "is_ode": true, 
        "name": "2"
    }, 
    {
        "links_to": [
            "10"
        ], 
        "symbol": "triangle", 
        "module": [
            "VOL_core_growth_single_vol"
        ], 
        "name_alt": "dr_b", 
        "equation": "(0.2 * dR_ref)", 
        "state": "0", 
        "y": "54.472", 
        "x": "67.958", 
        "annotation": "YCM:r_b_flux", 
        "compartment": "intracellular", 
        "is_ode": false, 
        "name": "3"
    }, 
    {
        "links_to": [
            "11", 
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
        "name_alt": "int_vol", 
        "equation": "(0.8 * V)", 
        "state": "0", 
        "y": "54.472", 
        "x": "56", 
        "annotation": "SBO:0000468", 
        "compartment": "intracellular", 
        "is_ode": false, 
        "name": "4"
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
        "name_alt": "r_os", 
        "state": "osmotic", 
        "y": "59.472", 
        "x": "64.597", 
        "annotation": "SBO:0000466", 
        "compartment": "intracellular", 
        "is_ode": true, 
        "name": "5"
    }, 
    {
        "links_to": [
            "10", 
            "0", 
            "14", 
            "5", 
            "12", 
            "9", 
            "6", 
            "6", 
            "6", 
            "6", 
            "15", 
            "8", 
            "9", 
            "12", 
            "9", 
            "6", 
            "6", 
            "12", 
            "9", 
            "12", 
            "9", 
            "6", 
            "6", 
            "6", 
            "6", 
            "15", 
            "8", 
            "9", 
            "6", 
            "6", 
            "12"
        ], 
        "symbol": "circle", 
        "module": [
            "VOL_core_growth_single_vol"
        ], 
        "name_alt": "pi_t", 
        "state": "turgor", 
        "y": "58.472", 
        "x": "66.153", 
        "annotation": "SBO:0000279", 
        "compartment": "intracellular", 
        "is_ode": true, 
        "name": "6"
    }, 
    {
        "links_to": [
            "12"
        ], 
        "symbol": "triangle", 
        "module": [
            "VOL_core_growth_single_vol"
        ], 
        "name_alt": "V_ref", 
        "equation": "(4. / 3. * pi * 10**(-15) * R_ref**3.)", 
        "state": "relaxed", 
        "y": "56.472", 
        "x": "67.486", 
        "annotation": "SBO:0000468", 
        "compartment": "intracellular", 
        "is_ode": false, 
        "name": "7"
    }, 
    {
        "links_to": [
            "2", 
            "11", 
            "0", 
            "14", 
            "5", 
            "6", 
            "6"
        ], 
        "symbol": "triangle", 
        "module": [
            "VOL_core_growth_single_vol"
        ], 
        "name_alt": "pi_i", 
        "equation": "(c_i /V * R * T)", 
        "state": "0", 
        "y": "54.472", 
        "x": "65.125", 
        "annotation": "SBO:0000279", 
        "compartment": "intracellular", 
        "is_ode": false, 
        "name": "8"
    }, 
    {
        "links_to": [
            "10", 
            "1", 
            "5", 
            "13", 
            "11", 
            "6", 
            "6", 
            "6", 
            "6", 
            "6", 
            "6", 
            "12"
        ], 
        "symbol": "triangle", 
        "module": [
            "VOL_core_growth_single_vol"
        ], 
        "name_alt": "r", 
        "equation": "(r_os + r_b)", 
        "state": "0", 
        "y": "56.472", 
        "x": "66.486", 
        "annotation": "SBO:0000466", 
        "compartment": "intracellular", 
        "is_ode": false, 
        "name": "9"
    }, 
    {
        "links_to": [
            "12", 
            "9", 
            "6", 
            "3", 
            "14", 
            "13"
        ], 
        "symbol": "triangle", 
        "module": [
            "VOL_core_growth_single_vol"
        ], 
        "name_alt": "dR_ref", 
        "equation": "(phi * R_ref * r / (2.0 * d) * maximum(pi_t - pi_c, 0.0))", 
        "state": "0", 
        "y": "55.472", 
        "x": "68.222", 
        "annotation": "YCM:R_ref_flux", 
        "compartment": "intracellular", 
        "is_ode": false, 
        "name": "10"
    }, 
    {
        "links_to": [
            "4", 
            "8", 
            "9", 
            "2"
        ], 
        "symbol": "triangle", 
        "module": [
            "VOL_core_growth_single_vol"
        ], 
        "name_alt": "V", 
        "equation": "(4. / 3. * pi * 10**(-15) * r**3.)", 
        "state": "total", 
        "y": "55.472", 
        "x": "66.764", 
        "annotation": "SBO:0000468", 
        "compartment": "intracellular", 
        "is_ode": false, 
        "name": "11"
    }, 
    {
        "links_to": [
            "10", 
            "7", 
            "6", 
            "6", 
            "6", 
            "6", 
            "12", 
            "12", 
            "9", 
            "6"
        ], 
        "symbol": "circle", 
        "module": [
            "VOL_core_growth_single_vol"
        ], 
        "name_alt": "R_ref", 
        "state": "0", 
        "y": "57.472", 
        "x": "66.792", 
        "annotation": "YCM:radius_relaxed_volume", 
        "compartment": "intracellular", 
        "is_ode": true, 
        "name": "12"
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
        "name_alt": "r_b", 
        "state": "nonosmotic", 
        "y": "57.472", 
        "x": "68.042", 
        "annotation": "SBO:0000466", 
        "compartment": "intracellular", 
        "is_ode": true, 
        "name": "13"
    }, 
    {
        "links_to": [
            "10", 
            "6", 
            "15", 
            "8"
        ], 
        "symbol": "triangle", 
        "module": [
            "VOL_core_growth_single_vol"
        ], 
        "name_alt": "dr", 
        "equation": "(0.2 * dR_ref - Lp * (pi_t + pi_e - pi_i))", 
        "state": "0", 
        "y": "53.472", 
        "x": "68.597", 
        "annotation": "YCM:r_flux", 
        "compartment": "intracellular", 
        "is_ode": false, 
        "name": "14"
    }, 
    {
        "links_to": [
            "0", 
            "14", 
            "5", 
            "6", 
            "6"
        ], 
        "symbol": "triangle", 
        "module": [
            "VOL_core_growth_single_vol"
        ], 
        "name_alt": "pi_e", 
        "equation": "(c_e * R * T)", 
        "state": "0", 
        "y": "57.472", 
        "x": "70.681", 
        "annotation": "SBO:0000279", 
        "compartment": "extracellular", 
        "is_ode": false, 
        "name": "15"
    }, 
    {
        "links_to": [
            "72", 
            "82", 
            "89", 
            "91", 
            "121"
        ], 
        "symbol": "circle", 
        "module": [
            "CDC_core"
        ], 
        "name_alt": "Swe1_cyt", 
        "state": "0", 
        "y": "58.472", 
        "x": "62.125", 
        "annotation": "SGD:S000003723p", 
        "compartment": "intracellular", 
        "is_ode": false, 
        "name": "16"
    }, 
    {
        "links_to": [
            "67", 
            "97", 
            "109", 
            "113", 
            "118", 
            "119"
        ], 
        "symbol": "circle", 
        "module": [
            "CDC_core"
        ], 
        "name_alt": "Swi5_nuc", 
        "state": "0", 
        "y": "42.472", 
        "x": "57.556", 
        "annotation": "SGD:S000002553p", 
        "compartment": "intracellular", 
        "is_ode": false, 
        "name": "17"
    }, 
    {
        "links_to": [
            "62", 
            "70"
        ], 
        "symbol": "circle", 
        "module": [
            "CDC_core"
        ], 
        "name_alt": "SBF_p_cyt", 
        "state": "P", 
        "y": "36.472", 
        "x": "54.667", 
        "annotation": "SGD:S000000913p_SGD:S000004172p", 
        "compartment": "intracellular", 
        "is_ode": false, 
        "name": "18"
    }, 
    {
        "links_to": [
            "55", 
            "61", 
            "76", 
            "78", 
            "117"
        ], 
        "symbol": "circle", 
        "module": [
            "CDC_core"
        ], 
        "name_alt": "Far1_cyt", 
        "state": "0", 
        "y": "30.472", 
        "x": "60.097", 
        "annotation": "SGD:S000003693p", 
        "compartment": "intracellular", 
        "is_ode": false, 
        "name": "19"
    }, 
    {
        "links_to": [
            "77", 
            "80", 
            "86", 
            "90", 
            "99", 
            "123", 
            "124", 
            "135", 
            "136"
        ], 
        "symbol": "circle", 
        "module": [
            "CDC_core"
        ], 
        "name_alt": "APC_cyt", 
        "state": "0", 
        "y": "42.472", 
        "x": "58.833", 
        "annotation": "SGD:S000002971p", 
        "compartment": "intracellular", 
        "is_ode": false, 
        "name": "20"
    }, 
    {
        "links_to": [
            "64", 
            "64", 
            "70", 
            "77", 
            "92", 
            "97", 
            "102", 
            "130", 
            "135"
        ], 
        "symbol": "circle", 
        "module": [
            "CDC_core"
        ], 
        "name_alt": "Cdc14_p_cyt", 
        "state": "P", 
        "y": "40.472", 
        "x": "57.347", 
        "annotation": "SGD:S000001924p", 
        "compartment": "intracellular", 
        "is_ode": false, 
        "name": "21"
    }, 
    {
        "links_to": [
            "87", 
            "93", 
            "108", 
            "110", 
            "128", 
            "134"
        ], 
        "symbol": "circle", 
        "module": [
            "CDC_core"
        ], 
        "name_alt": "Clb5_Sic1_cyt", 
        "state": "0", 
        "y": "28.472", 
        "x": "66.361", 
        "annotation": "SGD:S000006324p_SGD:S000004069p", 
        "compartment": "intracellular", 
        "is_ode": false, 
        "name": "22"
    }, 
    {
        "links_to": [
            "59", 
            "74", 
            "81", 
            "130"
        ], 
        "symbol": "circle", 
        "module": [
            "CDC_core"
        ], 
        "name_alt": "Whi5_p_cyt", 
        "state": "P", 
        "y": "26.472", 
        "x": "55.486", 
        "annotation": "SGD:S000005609p", 
        "compartment": "intracellular", 
        "is_ode": false, 
        "name": "23"
    }, 
    {
        "links_to": [
            "64", 
            "92", 
            "102", 
            "135"
        ], 
        "symbol": "circle", 
        "module": [
            "CDC_core"
        ], 
        "name_alt": "Cdc14_cyt", 
        "state": "0", 
        "y": "38.472", 
        "x": "57.347", 
        "annotation": "SGD:S000001924p", 
        "compartment": "intracellular", 
        "is_ode": false, 
        "name": "24"
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
        "name_alt": "Hog1_PP_cyt", 
        "state": "PP", 
        "y": "44.472", 
        "x": "65.056", 
        "annotation": "SGD:S000004103p", 
        "compartment": "intracellular", 
        "is_ode": true, 
        "name": "25"
    }, 
    {
        "links_to": [
            "71", 
            "96", 
            "132"
        ], 
        "symbol": "circle", 
        "module": [
            "CDC_core"
        ], 
        "name_alt": "Clb3_Sic1_cyt", 
        "state": "0", 
        "y": "48.472", 
        "x": "60.972", 
        "annotation": "SGD:S000002314p_SGD:S000004069p", 
        "compartment": "intracellular", 
        "is_ode": false, 
        "name": "26"
    }, 
    {
        "links_to": [
            "58", 
            "66", 
            "85", 
            "94"
        ], 
        "symbol": "circle", 
        "module": [
            "CDC_core"
        ], 
        "name_alt": "Cln2_Far1_p_cyt", 
        "state": "P", 
        "y": "34.472", 
        "x": "58.222", 
        "annotation": "SGD:S000006177p_SGD:S000003693p", 
        "compartment": "intracellular", 
        "is_ode": false, 
        "name": "27"
    }, 
    {
        "links_to": [
            "72", 
            "82", 
            "120"
        ], 
        "symbol": "circle", 
        "module": [
            "CDC_core"
        ], 
        "name_alt": "Swe1_p_cyt", 
        "state": "P", 
        "y": "42.472", 
        "x": "66.903", 
        "annotation": "SGD:S000003723p", 
        "compartment": "intracellular", 
        "is_ode": false, 
        "name": "28"
    }, 
    {
        "links_to": [
            "63", 
            "75", 
            "79", 
            "87", 
            "90", 
            "98", 
            "101", 
            "108", 
            "118", 
            "122", 
            "124", 
            "134"
        ], 
        "symbol": "circle", 
        "module": [
            "CDC_core"
        ], 
        "name_alt": "Clb5_cyt", 
        "state": "0", 
        "y": "32.472", 
        "x": "63.444", 
        "annotation": "SGD:S000006324p", 
        "compartment": "intracellular", 
        "is_ode": false, 
        "name": "29"
    }, 
    {
        "links_to": [
            "60", 
            "74", 
            "127", 
            "130", 
            "131"
        ], 
        "symbol": "circle", 
        "module": [
            "CDC_core"
        ], 
        "name_alt": "Whi5_cyt", 
        "state": "0", 
        "y": "24.472", 
        "x": "53.986", 
        "annotation": "SGD:S000005609p", 
        "compartment": "intracellular", 
        "is_ode": false, 
        "name": "30"
    }, 
    {
        "links_to": [
            "69", 
            "101", 
            "108"
        ], 
        "symbol": "circle", 
        "module": [
            "CDC_core"
        ], 
        "name_alt": "Sic1_p_cyt", 
        "state": "P", 
        "y": "26.472", 
        "x": "66", 
        "annotation": "SGD:S000004069p", 
        "compartment": "intracellular", 
        "is_ode": false, 
        "name": "31"
    }, 
    {
        "links_to": [
            "59", 
            "68", 
            "74", 
            "107", 
            "115", 
            "138", 
            "140"
        ], 
        "symbol": "circle", 
        "module": [
            "CDC_core"
        ], 
        "name_alt": "Cln3_cyt", 
        "state": "0", 
        "y": "28.472", 
        "x": "56.403", 
        "annotation": "SGD:S000000038p", 
        "compartment": "intracellular", 
        "is_ode": false, 
        "name": "32"
    }, 
    {
        "links_to": [
            "63", 
            "79", 
            "110", 
            "128"
        ], 
        "symbol": "circle", 
        "module": [
            "CDC_core"
        ], 
        "name_alt": "Clb5_Sic1_Hp_cyt", 
        "state": "HP", 
        "y": "30.472", 
        "x": "64.597", 
        "annotation": "SGD:S000006324p_SGD:S000004069p", 
        "compartment": "intracellular", 
        "is_ode": false, 
        "name": "33"
    }, 
    {
        "links_to": [
            "53", 
            "133", 
            "137"
        ], 
        "symbol": "circle", 
        "module": [
            "CDC_core"
        ], 
        "name_alt": "Mih1_cyt", 
        "state": "0", 
        "y": "56.472", 
        "x": "62.847", 
        "annotation": "SGD:S000004639p", 
        "compartment": "intracellular", 
        "is_ode": false, 
        "name": "34"
    }, 
    {
        "links_to": [
            "54", 
            "66", 
            "68", 
            "78", 
            "88", 
            "94", 
            "107", 
            "117"
        ], 
        "symbol": "circle", 
        "module": [
            "CDC_core"
        ], 
        "name_alt": "Far1_p_cyt", 
        "state": "P", 
        "y": "32.472", 
        "x": "57.542", 
        "annotation": "SGD:S000003693p", 
        "compartment": "intracellular", 
        "is_ode": false, 
        "name": "35"
    }, 
    {
        "links_to": [
            "53", 
            "106", 
            "121"
        ], 
        "symbol": "circle", 
        "module": [
            "CDC_core"
        ], 
        "name_alt": "Clb2_p_cyt", 
        "state": "P", 
        "y": "56.472", 
        "x": "60.847", 
        "annotation": "SGD:S000006323p", 
        "compartment": "intracellular", 
        "is_ode": false, 
        "name": "36"
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
        "name_alt": "nuc_vol", 
        "state": "0", 
        "y": "26.472", 
        "x": "3.6806", 
        "annotation": "SBO:0000468", 
        "compartment": "nucleus", 
        "is_ode": true, 
        "name": "37"
    }, 
    {
        "links_to": [
            "53", 
            "57", 
            "62", 
            "72", 
            "80", 
            "95", 
            "102", 
            "103", 
            "119", 
            "121", 
            "123", 
            "125", 
            "129"
        ], 
        "symbol": "circle", 
        "module": [
            "CDC_core"
        ], 
        "name_alt": "Clb2_cyt", 
        "state": "0", 
        "y": "54.472", 
        "x": "62.139", 
        "annotation": "SGD:S000006323p", 
        "compartment": "intracellular", 
        "is_ode": false, 
        "name": "38"
    }, 
    {
        "links_to": [
            "57", 
            "65", 
            "67", 
            "71", 
            "84", 
            "87", 
            "95", 
            "100", 
            "101", 
            "132", 
            "134"
        ], 
        "symbol": "circle", 
        "module": [
            "CDC_core"
        ], 
        "name_alt": "Sic1_cyt", 
        "state": "0", 
        "y": "50.472", 
        "x": "62.139", 
        "annotation": "SGD:S000004069p", 
        "compartment": "intracellular", 
        "is_ode": false, 
        "name": "39"
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
        "name_alt": "Fus3_cyt", 
        "state": "0", 
        "y": "32.472", 
        "x": "55.486", 
        "annotation": "SGD:S000000112p", 
        "compartment": "intracellular", 
        "is_ode": true, 
        "name": "40"
    }, 
    {
        "links_to": [
            "57", 
            "83", 
            "95"
        ], 
        "symbol": "circle", 
        "module": [
            "CDC_core"
        ], 
        "name_alt": "Clb2_Sic1_cyt", 
        "state": "0", 
        "y": "52.472", 
        "x": "61.5", 
        "annotation": "SGD:S000006323p_SGD:S000004069p", 
        "compartment": "intracellular", 
        "is_ode": false, 
        "name": "41"
    }, 
    {
        "links_to": [
            "59", 
            "60", 
            "139"
        ], 
        "symbol": "circle", 
        "module": [
            "CDC_core"
        ], 
        "name_alt": "SBF_Whi5_nuc", 
        "state": "0", 
        "y": "28.472", 
        "x": "53.847", 
        "annotation": "SGD:S000000913p_SGD:S000004172p_SGD:S000005609p", 
        "compartment": "intracellular", 
        "is_ode": false, 
        "name": "42"
    }, 
    {
        "links_to": [
            "77", 
            "105", 
            "123", 
            "124"
        ], 
        "symbol": "circle", 
        "module": [
            "CDC_core"
        ], 
        "name_alt": "APC_p_cyt", 
        "state": "P", 
        "y": "30.472", 
        "x": "53.153", 
        "annotation": "SGD:S000002971p", 
        "compartment": "intracellular", 
        "is_ode": false, 
        "name": "43"
    }, 
    {
        "links_to": [
            "56", 
            "103", 
            "109", 
            "116", 
            "125", 
            "136"
        ], 
        "symbol": "circle", 
        "module": [
            "CDC_core"
        ], 
        "name_alt": "Mcm1_nuc", 
        "state": "0", 
        "y": "44.472", 
        "x": "60.611", 
        "annotation": "SGD:S000004646p", 
        "compartment": "intracellular", 
        "is_ode": false, 
        "name": "44"
    }, 
    {
        "links_to": [
            "71", 
            "86", 
            "104", 
            "116", 
            "122", 
            "132"
        ], 
        "symbol": "circle", 
        "module": [
            "CDC_core"
        ], 
        "name_alt": "Clb3_cyt", 
        "state": "0", 
        "y": "46.472", 
        "x": "61.611", 
        "annotation": "SGD:S000002314p", 
        "compartment": "intracellular", 
        "is_ode": false, 
        "name": "45"
    }, 
    {
        "links_to": [
            "52", 
            "55", 
            "59", 
            "66", 
            "74", 
            "85", 
            "88", 
            "94", 
            "101", 
            "108", 
            "111", 
            "114", 
            "115"
        ], 
        "symbol": "circle", 
        "module": [
            "CDC_core"
        ], 
        "name_alt": "Cln2_cyt", 
        "state": "0", 
        "y": "36.472", 
        "x": "58.861", 
        "annotation": "SGD:S000006177p", 
        "compartment": "intracellular", 
        "is_ode": false, 
        "name": "46"
    }, 
    {
        "links_to": [
            "73", 
            "97", 
            "118", 
            "119"
        ], 
        "symbol": "circle", 
        "module": [
            "CDC_core"
        ], 
        "name_alt": "Swi5_p_cyt", 
        "state": "P", 
        "y": "30.472", 
        "x": "51.042", 
        "annotation": "SGD:S000002553p", 
        "compartment": "intracellular", 
        "is_ode": false, 
        "name": "47"
    }, 
    {
        "links_to": [
            "59", 
            "60", 
            "62", 
            "70", 
            "111"
        ], 
        "symbol": "circle", 
        "module": [
            "CDC_core"
        ], 
        "name_alt": "SBF_nuc", 
        "state": "0", 
        "y": "38.472", 
        "x": "55.792", 
        "annotation": "SGD:S000000913p_SGD:S000004172p", 
        "compartment": "intracellular", 
        "is_ode": false, 
        "name": "48"
    }, 
    {
        "links_to": [
            "68", 
            "107", 
            "112", 
            "115"
        ], 
        "symbol": "circle", 
        "module": [
            "CDC_core"
        ], 
        "name_alt": "Cln3_Far1_p_cyt", 
        "state": "P", 
        "y": "30.472", 
        "x": "57.264", 
        "annotation": "SGD:S000000038p_SGD:S000003693p", 
        "compartment": "intracellular", 
        "is_ode": false, 
        "name": "49"
    }, 
    {
        "links_to": [
            "52", 
            "75", 
            "126"
        ], 
        "symbol": "circle", 
        "module": [
            "CDC_core"
        ], 
        "name_alt": "MBF_nuc", 
        "state": "0", 
        "y": "34.472", 
        "x": "61.889", 
        "annotation": "SGD:S000002214p_SGD:S000004172p", 
        "compartment": "intracellular", 
        "is_ode": false, 
        "name": "50"
    }, 
    {
        "links_to": [
            "63", 
            "79", 
            "84", 
            "100"
        ], 
        "symbol": "circle", 
        "module": [
            "CDC_core"
        ], 
        "name_alt": "Sic1_Hp_cyt", 
        "state": "HP", 
        "y": "28.472", 
        "x": "63.097", 
        "annotation": "SGD:S000004069p", 
        "compartment": "intracellular", 
        "is_ode": false, 
        "name": "51"
    }, 
    {
        "rate": "( int_vol *    ( ( kp_MBF  *  ( (Cln2_cyt)  **  n1 ) )  /  ( ( K_MBF  **  n1 )  + ( (Cln2_cyt)  **  n1 ) ) )   )", 
        "name": "52", 
        "x": "61.611", 
        "y": "35.472", 
        "links_to": [
            "50", 
            "46"
        ], 
        "symbol": "rect", 
        "compartments": [
            "intracellular"
        ], 
        "is_ode": false, 
        "module": [
            "CDC_core"
        ], 
        "name_alt": "v_MBF_akt"
    }, 
    {
        "rate": "( int_vol *   ( ( kdp_Clb2  *  Clb2_p_cyt )  *  Mih1_cyt )  )", 
        "name": "53", 
        "x": "61.847", 
        "y": "55.472", 
        "links_to": [
            "36", 
            "38", 
            "34"
        ], 
        "symbol": "rect", 
        "compartments": [
            "intracellular"
        ], 
        "is_ode": false, 
        "module": [
            "CDC_core"
        ], 
        "name_alt": "v_Clb2_dp"
    }, 
    {
        "rate": "( int_vol *   ( kd_Far1p  *  Far1_p_cyt )  )", 
        "name": "54", 
        "x": "56.542", 
        "y": "31.472", 
        "links_to": [
            "35"
        ], 
        "symbol": "rect", 
        "compartments": [
            "intracellular"
        ], 
        "is_ode": false, 
        "module": [
            "CDC_core"
        ], 
        "name_alt": "v_Far1p_d"
    }, 
    {
        "rate": "( int_vol *   ( ( kdd_Far1  *  Far1_cyt )  *  Cln2_cyt )  )", 
        "name": "55", 
        "x": "62.319", 
        "y": "29.472", 
        "links_to": [
            "19", 
            "46"
        ], 
        "symbol": "rect", 
        "compartments": [
            "intracellular"
        ], 
        "is_ode": false, 
        "module": [
            "CDC_core"
        ], 
        "name_alt": "v_Far1_dd"
    }, 
    {
        "rate": "( int_vol *   ( kd_Mcm1  *  Mcm1_nuc )  )", 
        "name": "56", 
        "x": "61.111", 
        "y": "43.472", 
        "links_to": [
            "44"
        ], 
        "symbol": "rect", 
        "compartments": [
            "intracellular"
        ], 
        "is_ode": false, 
        "module": [
            "CDC_core"
        ], 
        "name_alt": "v_Mcm1_d"
    }, 
    {
        "rate": "( int_vol *   ( (   kcf_Clb2_Sic1 )  *  Clb2_cyt )  *  Sic1_cyt )", 
        "name": "57", 
        "x": "61.5", 
        "y": "53.472", 
        "links_to": [
            "38", 
            "39", 
            "41"
        ], 
        "symbol": "rect", 
        "compartments": [
            "intracellular"
        ], 
        "is_ode": false, 
        "module": [
            "CDC_core"
        ], 
        "name_alt": "v_Clb2_ass_Sic1"
    }, 
    {
        "rate": "( int_vol *   ( kd_Cln2_Far1p  *  Cln2_Far1_p_cyt )  )", 
        "name": "58", 
        "x": "58.222", 
        "y": "33.472", 
        "links_to": [
            "27"
        ], 
        "symbol": "rect", 
        "compartments": [
            "intracellular"
        ], 
        "is_ode": false, 
        "module": [
            "CDC_core"
        ], 
        "name_alt": "v_Cln2_Far1p_d"
    }, 
    {
        "rate": "( int_vol *   ( SBF_Whi5_nuc  *  (  ( ( kppa_Cln3_Whi5  *  Cln3_cyt )  /  ( Kpp_Cln3_Whi5  + Cln3_cyt ) )   +  ( ( kppa_Cln2_Whi5  *  ( (Cln2_cyt)  **  n_SBF ) )  /  ( ( Kpp_Cln2_Whi5  **  n_SBF )  + ( (Cln2_cyt)  **  n_SBF ) ) )  ) )  )", 
        "name": "59", 
        "x": "55.486", 
        "y": "27.472", 
        "links_to": [
            "42", 
            "23", 
            "48", 
            "46", 
            "32"
        ], 
        "symbol": "rect", 
        "compartments": [
            "intracellular"
        ], 
        "is_ode": false, 
        "module": [
            "CDC_core"
        ], 
        "name_alt": "v_SBF_akt"
    }, 
    {
        "rate": "( int_vol *   ( ( kcf_SBF_Whi5  *  SBF_nuc )  *  Whi5_cyt )  )", 
        "name": "60", 
        "x": "52.208", 
        "y": "29.472", 
        "links_to": [
            "48", 
            "30", 
            "42"
        ], 
        "symbol": "rect", 
        "compartments": [
            "intracellular"
        ], 
        "is_ode": false, 
        "module": [
            "CDC_core"
        ], 
        "name_alt": "v_SBF_ass_Whi5"
    }, 
    {
        "rate": "( int_vol *   ( kd_Far1  *  Far1_cyt )  )", 
        "name": "61", 
        "x": "61.319", 
        "y": "29.472", 
        "links_to": [
            "19"
        ], 
        "symbol": "rect", 
        "compartments": [
            "intracellular"
        ], 
        "is_ode": false, 
        "module": [
            "CDC_core"
        ], 
        "name_alt": "v_Far1_d"
    }, 
    {
        "rate": "( int_vol *   ( ( kpp_SBF_Clb2  *  SBF_nuc )  *  Clb2_cyt )  )", 
        "name": "62", 
        "x": "54.597", 
        "y": "37.472", 
        "links_to": [
            "48", 
            "18", 
            "38"
        ], 
        "symbol": "rect", 
        "compartments": [
            "intracellular"
        ], 
        "is_ode": false, 
        "module": [
            "CDC_core"
        ], 
        "name_alt": "v_SBF_inakt_Clb2"
    }, 
    {
        "rate": "( int_vol *   ( (   kcf_Clb5_Sic1_Hp )  *  Clb5_cyt )  *  Sic1_Hp_cyt )", 
        "name": "63", 
        "x": "65.208", 
        "y": "31.472", 
        "links_to": [
            "51", 
            "29", 
            "33"
        ], 
        "symbol": "rect", 
        "compartments": [
            "intracellular"
        ], 
        "is_ode": false, 
        "module": [
            "CDC_core"
        ], 
        "name_alt": "v_Clb5_ass_Sic1_Hp"
    }, 
    {
        "rate": "( int_vol *   ( ( kpp_Cdc14_MEN  *  Cdc14_cyt )  *  Cdc14_p_cyt )  )", 
        "name": "64", 
        "x": "56.708", 
        "y": "37.472", 
        "links_to": [
            "24", 
            "21", 
            "21"
        ], 
        "symbol": "rect", 
        "compartments": [
            "intracellular"
        ], 
        "is_ode": false, 
        "module": [
            "CDC_core"
        ], 
        "name_alt": "v_Cdc14_akt_MEN_fb"
    }, 
    {
        "rate": "( int_vol *   ( kd_Sic1  *  Sic1_cyt )  )", 
        "name": "65", 
        "x": "61.972", 
        "y": "49.472", 
        "links_to": [
            "39"
        ], 
        "symbol": "rect", 
        "compartments": [
            "intracellular"
        ], 
        "is_ode": false, 
        "module": [
            "CDC_core"
        ], 
        "name_alt": "v_Sic1_d"
    }, 
    {
        "rate": "( int_vol *   ( ( kcf_Cln2_Far1p  *  Cln2_cyt )  *  Far1_p_cyt )  )", 
        "name": "66", 
        "x": "59.5", 
        "y": "35.472", 
        "links_to": [
            "46", 
            "35", 
            "27"
        ], 
        "symbol": "rect", 
        "compartments": [
            "intracellular"
        ], 
        "is_ode": false, 
        "module": [
            "CDC_core"
        ], 
        "name_alt": "v_Cln2_ass_Far1p"
    }, 
    {
        "rate": "( int_vol *    ( ( kp_Sic1  *  Swi5_nuc )  /  ( Kp_Sic1  + Swi5_nuc ) )   )", 
        "name": "67", 
        "x": "54.431", 
        "y": "41.472", 
        "links_to": [
            "39", 
            "17"
        ], 
        "symbol": "rect", 
        "compartments": [
            "intracellular"
        ], 
        "is_ode": false, 
        "module": [
            "CDC_core"
        ], 
        "name_alt": "v_Sic1_p"
    }, 
    {
        "rate": "( int_vol *   ( kcd_Cln3_Far1p  *  Cln3_Far1_p_cyt )  )", 
        "name": "68", 
        "x": "59.319", 
        "y": "29.472", 
        "links_to": [
            "49", 
            "32", 
            "35"
        ], 
        "symbol": "rect", 
        "compartments": [
            "intracellular"
        ], 
        "is_ode": false, 
        "module": [
            "CDC_core"
        ], 
        "name_alt": "v_Cln3_diss_Far1p"
    }, 
    {
        "rate": "( int_vol *   ( kd_Sic1p  *  Sic1_p_cyt )  )", 
        "name": "69", 
        "x": "66", 
        "y": "25.472", 
        "links_to": [
            "31"
        ], 
        "symbol": "rect", 
        "compartments": [
            "intracellular"
        ], 
        "is_ode": false, 
        "module": [
            "CDC_core"
        ], 
        "name_alt": "v_Sic1_p_d"
    }, 
    {
        "rate": "( int_vol *   ( ( kdp_SBF  *  SBF_p_cyt )  *  Cdc14_p_cyt )  )", 
        "name": "70", 
        "x": "55.792", 
        "y": "39.472", 
        "links_to": [
            "18", 
            "48", 
            "21"
        ], 
        "symbol": "rect", 
        "compartments": [
            "intracellular"
        ], 
        "is_ode": false, 
        "module": [
            "CDC_core"
        ], 
        "name_alt": "v_SBF_dp"
    }, 
    {
        "rate": "( int_vol * ( kcd_Clb3_Sic1  *  Clb3_Sic1_cyt )  )", 
        "name": "71", 
        "x": "60.222", 
        "y": "47.472", 
        "links_to": [
            "26", 
            "45", 
            "39"
        ], 
        "symbol": "rect", 
        "compartments": [
            "intracellular"
        ], 
        "is_ode": false, 
        "module": [
            "CDC_core"
        ], 
        "name_alt": "v_Clb3_diss_Sic1"
    }, 
    {
        "rate": "( int_vol *   ( ( kpp_Swe1_Clb2  *  Swe1_cyt )  *  Clb2_cyt )  )", 
        "name": "72", 
        "x": "64.889", 
        "y": "53.472", 
        "links_to": [
            "16", 
            "28", 
            "38"
        ], 
        "symbol": "rect", 
        "compartments": [
            "intracellular"
        ], 
        "is_ode": false, 
        "module": [
            "CDC_core"
        ], 
        "name_alt": "v_Swe1_pp"
    }, 
    {
        "rate": "( int_vol * ( kd_Swi5_p  *  Swi5_p_cyt )  )", 
        "name": "73", 
        "x": "51.208", 
        "y": "29.472", 
        "links_to": [
            "47"
        ], 
        "symbol": "rect", 
        "compartments": [
            "intracellular"
        ], 
        "is_ode": false, 
        "module": [
            "CDC_core"
        ], 
        "name_alt": "v_Swi5_p_d"
    }, 
    {
        "rate": "( int_vol *   ( Whi5_cyt  *  ( ( kpp_Cln2_Whi5  *  Cln2_cyt )  + ( kpp_Cln3_Whi5  *  Cln3_cyt ) ) )  )", 
        "name": "74", 
        "x": "56.264", 
        "y": "23.472", 
        "links_to": [
            "30", 
            "23", 
            "46", 
            "32"
        ], 
        "symbol": "rect", 
        "compartments": [
            "intracellular"
        ], 
        "is_ode": false, 
        "module": [
            "CDC_core"
        ], 
        "name_alt": "v_Whi5_pp"
    }, 
    {
        "rate": "( int_vol *    (  ( ( kp_Clb5  *  MBF_nuc )  /  ( Kp_Clb5  + MBF_nuc ) )   /  ( 1.0  + ( kI_Clb5_Hog1  *  Hog1_PP_cyt ) ) )   )", 
        "name": "75", 
        "x": "63.444", 
        "y": "33.472", 
        "links_to": [
            "29", 
            "25", 
            "50"
        ], 
        "symbol": "rect", 
        "compartments": [
            "intracellular"
        ], 
        "is_ode": false, 
        "module": [
            "CDC_core"
        ], 
        "name_alt": "v_Clb5_p"
    }, 
    {
        "rate": "( int_vol *   ( ( kp_Far1  *  Fus3_cyt )  + kp_basal_Far1 )  )", 
        "name": "76", 
        "x": "55.542", 
        "y": "31.472", 
        "links_to": [
            "19", 
            "40"
        ], 
        "symbol": "rect", 
        "compartments": [
            "intracellular"
        ], 
        "is_ode": false, 
        "module": [
            "CDC_core"
        ], 
        "name_alt": "v_Far1_p"
    }, 
    {
        "rate": "( int_vol *   ( ( ka_APC_Cdc14  *  APC_p_cyt )  *  Cdc14_p_cyt )  )", 
        "name": "77", 
        "x": "53.208", 
        "y": "29.472", 
        "links_to": [
            "43", 
            "20", 
            "21"
        ], 
        "symbol": "rect", 
        "compartments": [
            "intracellular"
        ], 
        "is_ode": false, 
        "module": [
            "CDC_core"
        ], 
        "name_alt": "v_APC_akt_Cdc14"
    }, 
    {
        "rate": "( int_vol *   ( kdp_Far1p  *  Far1_p_cyt )  )", 
        "name": "78", 
        "x": "59.097", 
        "y": "31.472", 
        "links_to": [
            "35", 
            "19"
        ], 
        "symbol": "rect", 
        "compartments": [
            "intracellular"
        ], 
        "is_ode": false, 
        "module": [
            "CDC_core"
        ], 
        "name_alt": "v_Far1p_dp"
    }, 
    {
        "rate": "( int_vol * ( kcd_Clb5_Sic1_Hp  *  Clb5_Sic1_Hp_cyt )  )", 
        "name": "79", 
        "x": "63.875", 
        "y": "29.472", 
        "links_to": [
            "33", 
            "51", 
            "29"
        ], 
        "symbol": "rect", 
        "compartments": [
            "intracellular"
        ], 
        "is_ode": false, 
        "module": [
            "CDC_core"
        ], 
        "name_alt": "v_Clb5_diss_Sic1_Hp"
    }, 
    {
        "rate": "( int_vol *   ( ( kd_Clb2_APC  *  Clb2_cyt )  *  APC_cyt )  )", 
        "name": "80", 
        "x": "61.819", 
        "y": "41.472", 
        "links_to": [
            "38", 
            "20"
        ], 
        "symbol": "rect", 
        "compartments": [
            "intracellular"
        ], 
        "is_ode": false, 
        "module": [
            "CDC_core"
        ], 
        "name_alt": "v_Clb2_d_APC"
    }, 
    {
        "rate": "( int_vol *   ( kd_Whi5p  *  Whi5_p_cyt )  )", 
        "name": "81", 
        "x": "55.486", 
        "y": "25.472", 
        "links_to": [
            "23"
        ], 
        "symbol": "rect", 
        "compartments": [
            "intracellular"
        ], 
        "is_ode": false, 
        "module": [
            "CDC_core"
        ], 
        "name_alt": "v_Whi5_p_d"
    }, 
    {
        "rate": "( int_vol *    ( ( kpp_Swe1_Hls1  *  Swe1_cyt )  /  ( 1.0  + ( kI_Swe1_Hog1  *  Hog1_PP_cyt ) ) )   )", 
        "name": "82", 
        "x": "66.889", 
        "y": "43.472", 
        "links_to": [
            "16", 
            "28", 
            "25"
        ], 
        "symbol": "rect", 
        "compartments": [
            "intracellular"
        ], 
        "is_ode": false, 
        "module": [
            "CDC_core"
        ], 
        "name_alt": "v_Swe1_Hog1"
    }, 
    {
        "rate": "( int_vol *   ( kd_Clb2_Sic1  *  Clb2_Sic1_cyt )  )", 
        "name": "83", 
        "x": "61.139", 
        "y": "51.472", 
        "links_to": [
            "41"
        ], 
        "symbol": "rect", 
        "compartments": [
            "intracellular"
        ], 
        "is_ode": false, 
        "module": [
            "CDC_core"
        ], 
        "name_alt": "v_Clb2_Sic1_d"
    }, 
    {
        "rate": "( int_vol *   ( kdp_Sic1_Hp  *  Sic1_Hp_cyt )  )", 
        "name": "84", 
        "x": "60.569", 
        "y": "27.472", 
        "links_to": [
            "51", 
            "39"
        ], 
        "symbol": "rect", 
        "compartments": [
            "intracellular"
        ], 
        "is_ode": false, 
        "module": [
            "CDC_core"
        ], 
        "name_alt": "v_Sic1_Hp_dp"
    }, 
    {
        "rate": "( int_vol *   ( ( kpp_Cln2_Far1p  *  Cln2_Far1_p_cyt )  *  Cln2_cyt )  )", 
        "name": "85", 
        "x": "59.222", 
        "y": "33.472", 
        "links_to": [
            "27", 
            "46"
        ], 
        "symbol": "rect", 
        "compartments": [
            "intracellular"
        ], 
        "is_ode": false, 
        "module": [
            "CDC_core"
        ], 
        "name_alt": "v_Cln2_rel"
    }, 
    {
        "rate": "( int_vol *   ( ( kd_Clb3_APC  *  Clb3_cyt )  *  APC_cyt )  )", 
        "name": "86", 
        "x": "60.819", 
        "y": "41.472", 
        "links_to": [
            "45", 
            "20"
        ], 
        "symbol": "rect", 
        "compartments": [
            "intracellular"
        ], 
        "is_ode": false, 
        "module": [
            "CDC_core"
        ], 
        "name_alt": "v_Clb3_d_APC"
    }, 
    {
        "rate": "( int_vol *   ( (   kcf_Clb5_Sic1 )  *  Clb5_cyt )  *  Sic1_cyt )", 
        "name": "87", 
        "x": "67.764", 
        "y": "31.472", 
        "links_to": [
            "39", 
            "29", 
            "22"
        ], 
        "symbol": "rect", 
        "compartments": [
            "intracellular"
        ], 
        "is_ode": false, 
        "module": [
            "CDC_core"
        ], 
        "name_alt": "v_Clb5_ass_Sic1"
    }, 
    {
        "rate": "( int_vol *   ( ( kdd_Far1p  *  Far1_p_cyt )  *  Cln2_cyt )  )", 
        "name": "88", 
        "x": "60.097", 
        "y": "31.472", 
        "links_to": [
            "35", 
            "46"
        ], 
        "symbol": "rect", 
        "compartments": [
            "intracellular"
        ], 
        "is_ode": false, 
        "module": [
            "CDC_core"
        ], 
        "name_alt": "v_Far1_p_dd"
    }, 
    {
        "rate": "( int_vol *   ( kd_Swe1  *  Swe1_cyt )  )", 
        "name": "89", 
        "x": "61.847", 
        "y": "57.472", 
        "links_to": [
            "16"
        ], 
        "symbol": "rect", 
        "compartments": [
            "intracellular"
        ], 
        "is_ode": false, 
        "module": [
            "CDC_core"
        ], 
        "name_alt": "v_Swe1_d"
    }, 
    {
        "rate": "( int_vol *   ( ( kd_Clb5_APC  *  Clb5_cyt )  *  APC_cyt )  )", 
        "name": "90", 
        "x": "61.375", 
        "y": "31.472", 
        "links_to": [
            "29", 
            "20"
        ], 
        "symbol": "rect", 
        "compartments": [
            "intracellular"
        ], 
        "is_ode": false, 
        "module": [
            "CDC_core"
        ], 
        "name_alt": "v_Clb5_d_APC"
    }, 
    {
        "rate": "( int_vol *   kp_Swe1  )", 
        "name": "91", 
        "x": "62.125", 
        "y": "59.472", 
        "links_to": [
            "16"
        ], 
        "symbol": "rect", 
        "compartments": [
            "intracellular"
        ], 
        "is_ode": false, 
        "module": [
            "CDC_core"
        ], 
        "name_alt": "v_Swe1_p"
    }, 
    {
        "rate": "( int_vol *   ( ki_Cdc14  *  Cdc14_p_cyt )  )", 
        "name": "92", 
        "x": "57.347", 
        "y": "39.472", 
        "links_to": [
            "21", 
            "24"
        ], 
        "symbol": "rect", 
        "compartments": [
            "intracellular"
        ], 
        "is_ode": false, 
        "module": [
            "CDC_core"
        ], 
        "name_alt": "v_Cdc14_inakt"
    }, 
    {
        "rate": "( int_vol *   ( kd_Clb5_Sic1  *  Clb5_Sic1_cyt )  )", 
        "name": "93", 
        "x": "66.319", 
        "y": "27.472", 
        "links_to": [
            "22"
        ], 
        "symbol": "rect", 
        "compartments": [
            "intracellular"
        ], 
        "is_ode": false, 
        "module": [
            "CDC_core"
        ], 
        "name_alt": "v_Clb5_Sic1_d"
    }, 
    {
        "rate": "( int_vol *   ( kcd_Cln2_Far1p  *  Cln2_Far1_p_cyt )  )", 
        "name": "94", 
        "x": "56.944", 
        "y": "33.472", 
        "links_to": [
            "27", 
            "46", 
            "35"
        ], 
        "symbol": "rect", 
        "compartments": [
            "intracellular"
        ], 
        "is_ode": false, 
        "module": [
            "CDC_core"
        ], 
        "name_alt": "v_Cln2_diss_Far1p"
    }, 
    {
        "rate": "( int_vol * ( kcd_Clb2_Sic1  *  Clb2_Sic1_cyt )  )", 
        "name": "95", 
        "x": "62.139", 
        "y": "51.472", 
        "links_to": [
            "41", 
            "38", 
            "39"
        ], 
        "symbol": "rect", 
        "compartments": [
            "intracellular"
        ], 
        "is_ode": false, 
        "module": [
            "CDC_core"
        ], 
        "name_alt": "v_Clb2_diss_Sic1"
    }, 
    {
        "rate": "( int_vol *   ( kd_Clb3_Sic1  *  Clb3_Sic1_cyt )  )", 
        "name": "96", 
        "x": "61.222", 
        "y": "47.472", 
        "links_to": [
            "26"
        ], 
        "symbol": "rect", 
        "compartments": [
            "intracellular"
        ], 
        "is_ode": false, 
        "module": [
            "CDC_core"
        ], 
        "name_alt": "v_Clb3_Sic1_d"
    }, 
    {
        "rate": "( int_vol *   ( ( kdp_Swi5_Cdc14  *  Swi5_p_cyt )  *  Cdc14_p_cyt )  )", 
        "name": "97", 
        "x": "50.208", 
        "y": "29.472", 
        "links_to": [
            "47", 
            "17", 
            "21"
        ], 
        "symbol": "rect", 
        "compartments": [
            "intracellular"
        ], 
        "is_ode": false, 
        "module": [
            "CDC_core"
        ], 
        "name_alt": "v_Swi5_dp"
    }, 
    {
        "rate": "( int_vol *   ( kd_Clb5  *  Clb5_cyt )  )", 
        "name": "98", 
        "x": "64.208", 
        "y": "31.472", 
        "links_to": [
            "29"
        ], 
        "symbol": "rect", 
        "compartments": [
            "intracellular"
        ], 
        "is_ode": false, 
        "module": [
            "CDC_core"
        ], 
        "name_alt": "v_Clb5_d"
    }, 
    {
        "rate": "( int_vol *   ( kd_APC  *  APC_cyt )  )", 
        "name": "99", 
        "x": "59.819", 
        "y": "41.472", 
        "links_to": [
            "20"
        ], 
        "symbol": "rect", 
        "compartments": [
            "intracellular"
        ], 
        "is_ode": false, 
        "module": [
            "CDC_core"
        ], 
        "name_alt": "v_APC_d"
    }, 
    {
        "rate": "( int_vol *   ( ( kpp_Sic1_Hog1  *  Hog1_PP_cyt )  *  Sic1_cyt )  )", 
        "name": "100", 
        "x": "64.222", 
        "y": "43.472", 
        "links_to": [
            "39", 
            "51", 
            "25"
        ], 
        "symbol": "rect", 
        "compartments": [
            "intracellular"
        ], 
        "is_ode": false, 
        "module": [
            "CDC_core"
        ], 
        "name_alt": "v_Sic1_pp_Hog1"
    }, 
    {
        "rate": "( int_vol *   ( Sic1_cyt  *  (  ( ( kpp_Cln2_Sic1  *  ( (Cln2_cyt)  **  n1 ) )  /  ( ( Kpp_Cln2_Sic1  **  n1 )  + ( (Cln2_cyt)  **  n1 ) ) )   +  ( ( kpp_Clb5_Sic1  *  ( (Clb5_cyt)  **  n1 ) )  /  ( ( Kpp_Clb5_Sic1  **  n1 )  + ( (Clb5_cyt)  **  n1 ) ) )  ) )  )", 
        "name": "101", 
        "x": "66.486", 
        "y": "31.472", 
        "links_to": [
            "39", 
            "31", 
            "46", 
            "29"
        ], 
        "symbol": "rect", 
        "compartments": [
            "intracellular"
        ], 
        "is_ode": false, 
        "module": [
            "CDC_core"
        ], 
        "name_alt": "v_Sic1_pp"
    }, 
    {
        "rate": "( int_vol *   ( ( kpp_Cdc14_Clb2  *  Cdc14_cyt )  *  Clb2_cyt )  )", 
        "name": "102", 
        "x": "57.806", 
        "y": "37.472", 
        "links_to": [
            "24", 
            "21", 
            "38"
        ], 
        "symbol": "rect", 
        "compartments": [
            "intracellular"
        ], 
        "is_ode": false, 
        "module": [
            "CDC_core"
        ], 
        "name_alt": "v_Cdc14_akt_Clb2"
    }, 
    {
        "rate": "( int_vol *    ( ( kp_Mcm1  *  ( (Clb2_cyt)  **  n_Mcm1 ) )  /  ( ( Kp_Mcm1  **  n_Mcm1 )  + ( (Clb2_cyt)  **  n_Mcm1 ) ) )   )", 
        "name": "103", 
        "x": "60.5", 
        "y": "52.472", 
        "links_to": [
            "44", 
            "38"
        ], 
        "symbol": "rect", 
        "compartments": [
            "intracellular"
        ], 
        "is_ode": false, 
        "module": [
            "CDC_core"
        ], 
        "name_alt": "v_Mcm1_p_Clb2_fb"
    }, 
    {
        "rate": "( int_vol *   ( kd_Clb3  *  Clb3_cyt )  )", 
        "name": "104", 
        "x": "60.111", 
        "y": "45.472", 
        "links_to": [
            "45"
        ], 
        "symbol": "rect", 
        "compartments": [
            "intracellular"
        ], 
        "is_ode": false, 
        "module": [
            "CDC_core"
        ], 
        "name_alt": "v_Clb3_d"
    }, 
    {
        "rate": "( int_vol *   ( kd_APC_p  *  APC_p_cyt )  )", 
        "name": "105", 
        "x": "54.208", 
        "y": "29.472", 
        "links_to": [
            "43"
        ], 
        "symbol": "rect", 
        "compartments": [
            "intracellular"
        ], 
        "is_ode": false, 
        "module": [
            "CDC_core"
        ], 
        "name_alt": "v_APC_p_d"
    }, 
    {
        "rate": "( int_vol * ( kd_Clb2_p  *  Clb2_p_cyt )  )", 
        "name": "106", 
        "x": "60.847", 
        "y": "55.472", 
        "links_to": [
            "36"
        ], 
        "symbol": "rect", 
        "compartments": [
            "intracellular"
        ], 
        "is_ode": false, 
        "module": [
            "CDC_core"
        ], 
        "name_alt": "v_Clb2_p_d"
    }, 
    {
        "rate": "( int_vol *   ( ( kcf_Cln3_Far1p  *  Cln3_cyt )  *  Far1_p_cyt )  )", 
        "name": "107", 
        "x": "57.542", 
        "y": "31.472", 
        "links_to": [
            "32", 
            "35", 
            "49"
        ], 
        "symbol": "rect", 
        "compartments": [
            "intracellular"
        ], 
        "is_ode": false, 
        "module": [
            "CDC_core"
        ], 
        "name_alt": "v_Cln3_ass_Far1p"
    }, 
    {
        "rate": "( int_vol *   ( Clb5_Sic1_cyt  *  (  ( ( kpp_Cln2_Sic1  *  ( (Cln2_cyt)  **  n1 ) )  /  ( ( Kpp_Cln2_Sic1  **  n1 )  + ( (Cln2_cyt)  **  n1 ) ) )   +  ( ( kpp_Clb5_Sic1  *  ( (Clb5_cyt)  **  n1 ) )  /  ( ( Kpp_Clb5_Sic1  **  n1 )  + ( (Clb5_cyt)  **  n1 ) ) )  ) )  )", 
        "name": "108", 
        "x": "67.319", 
        "y": "27.472", 
        "links_to": [
            "22", 
            "31", 
            "29", 
            "46"
        ], 
        "symbol": "rect", 
        "compartments": [
            "intracellular"
        ], 
        "is_ode": false, 
        "module": [
            "CDC_core"
        ], 
        "name_alt": "v_Clb5_rel"
    }, 
    {
        "rate": "( int_vol *    ( ( kp_Swi5  *  Mcm1_nuc )  /  ( Kp_Swi5  + Mcm1_nuc ) )   )", 
        "name": "109", 
        "x": "59.111", 
        "y": "43.472", 
        "links_to": [
            "17", 
            "44"
        ], 
        "symbol": "rect", 
        "compartments": [
            "intracellular"
        ], 
        "is_ode": false, 
        "module": [
            "CDC_core"
        ], 
        "name_alt": "v_Swi5_p"
    }, 
    {
        "rate": "( int_vol *   ( kdp_Clb5_Sic1_Hp  *  Clb5_Sic1_Hp_cyt )  )", 
        "name": "110", 
        "x": "65.889", 
        "y": "29.472", 
        "links_to": [
            "33", 
            "22"
        ], 
        "symbol": "rect", 
        "compartments": [
            "intracellular"
        ], 
        "is_ode": false, 
        "module": [
            "CDC_core"
        ], 
        "name_alt": "v_Clb5_Sic1_Hp_dp"
    }, 
    {
        "rate": "( int_vol *    (  ( ( kp_Cln2  *  SBF_nuc )  /  ( Kp_Cln2  + SBF_nuc ) )   /  ( 1.0  + ( kI_Cln2_Hog1  *  Hog1_PP_cyt ) ) )   )", 
        "name": "111", 
        "x": "59.083", 
        "y": "37.472", 
        "links_to": [
            "46", 
            "48", 
            "25"
        ], 
        "symbol": "rect", 
        "compartments": [
            "intracellular"
        ], 
        "is_ode": false, 
        "module": [
            "CDC_core"
        ], 
        "name_alt": "v_Cln2_p"
    }, 
    {
        "rate": "( int_vol *   ( kd_Cln3_Far1p  *  Cln3_Far1_p_cyt )  )", 
        "name": "112", 
        "x": "58.319", 
        "y": "29.472", 
        "links_to": [
            "49"
        ], 
        "symbol": "rect", 
        "compartments": [
            "intracellular"
        ], 
        "is_ode": false, 
        "module": [
            "CDC_core"
        ], 
        "name_alt": "v_Cln3_Far1p_d"
    }, 
    {
        "rate": "( int_vol *   ( kd_Swi5  *  Swi5_nuc )  )", 
        "name": "113", 
        "x": "55.431", 
        "y": "41.472", 
        "links_to": [
            "17"
        ], 
        "symbol": "rect", 
        "compartments": [
            "intracellular"
        ], 
        "is_ode": false, 
        "module": [
            "CDC_core"
        ], 
        "name_alt": "v_Swi5_d"
    }, 
    {
        "rate": "( int_vol *   ( kd_Cln2  *  Cln2_cyt )  )", 
        "name": "114", 
        "x": "57.403", 
        "y": "35.472", 
        "links_to": [
            "46"
        ], 
        "symbol": "rect", 
        "compartments": [
            "intracellular"
        ], 
        "is_ode": false, 
        "module": [
            "CDC_core"
        ], 
        "name_alt": "v_Cln2_d"
    }, 
    {
        "rate": "( int_vol *   ( ( kpp_Cln2_Far1p  *  Cln3_Far1_p_cyt )  *  Cln2_cyt )  )", 
        "name": "115", 
        "x": "57.042", 
        "y": "29.472", 
        "links_to": [
            "49", 
            "32", 
            "46"
        ], 
        "symbol": "rect", 
        "compartments": [
            "intracellular"
        ], 
        "is_ode": false, 
        "module": [
            "CDC_core"
        ], 
        "name_alt": "v_Cln3_rel"
    }, 
    {
        "rate": "( int_vol *    ( ( v0_Mcm1  *  ( (Clb3_cyt)  **  n_Mcm1 ) )  /  ( ( V0_Mcm1  **  n_Mcm1 )  + ( (Clb3_cyt)  **  n_Mcm1 ) ) )   )", 
        "name": "116", 
        "x": "61.111", 
        "y": "45.472", 
        "links_to": [
            "44", 
            "45"
        ], 
        "symbol": "rect", 
        "compartments": [
            "intracellular"
        ], 
        "is_ode": false, 
        "module": [
            "CDC_core"
        ], 
        "name_alt": "v_Mcm1_p_basal"
    }, 
    {
        "rate": "( int_vol *   ( ( kpp_Far1  *  Far1_cyt )  *  Fus3_cyt )  )", 
        "name": "117", 
        "x": "60.319", 
        "y": "29.472", 
        "links_to": [
            "19", 
            "35", 
            "40"
        ], 
        "symbol": "rect", 
        "compartments": [
            "intracellular"
        ], 
        "is_ode": false, 
        "module": [
            "CDC_core"
        ], 
        "name_alt": "v_Far1_pp"
    }, 
    {
        "rate": "( int_vol *   ( ( kpp_Swi5_Clb5  *  Swi5_nuc )  *  Clb5_cyt )  )", 
        "name": "118", 
        "x": "51.042", 
        "y": "31.472", 
        "links_to": [
            "17", 
            "47", 
            "29"
        ], 
        "symbol": "rect", 
        "compartments": [
            "intracellular"
        ], 
        "is_ode": false, 
        "module": [
            "CDC_core"
        ], 
        "name_alt": "v_Swi5_pp_Clb5"
    }, 
    {
        "rate": "( int_vol *   ( ( kpp_Swi5_Clb2  *  Swi5_nuc )  *  Clb2_cyt )  )", 
        "name": "119", 
        "x": "53.153", 
        "y": "41.472", 
        "links_to": [
            "17", 
            "47", 
            "38"
        ], 
        "symbol": "rect", 
        "compartments": [
            "intracellular"
        ], 
        "is_ode": false, 
        "module": [
            "CDC_core"
        ], 
        "name_alt": "v_Swi5_pp_Clb2"
    }, 
    {
        "rate": "( int_vol *   ( kd_Swe1_p  *  Swe1_p_cyt )  )", 
        "name": "120", 
        "x": "66.903", 
        "y": "41.472", 
        "links_to": [
            "28"
        ], 
        "symbol": "rect", 
        "compartments": [
            "intracellular"
        ], 
        "is_ode": false, 
        "module": [
            "CDC_core"
        ], 
        "name_alt": "v_Swe1_p_d"
    }, 
    {
        "rate": "( int_vol *   ( ( kpp_Clb2  *  Clb2_cyt )  *  Swe1_cyt )  )", 
        "name": "121", 
        "x": "60.847", 
        "y": "57.472", 
        "links_to": [
            "38", 
            "36", 
            "16"
        ], 
        "symbol": "rect", 
        "compartments": [
            "intracellular"
        ], 
        "is_ode": false, 
        "module": [
            "CDC_core"
        ], 
        "name_alt": "v_Clb2_pp"
    }, 
    {
        "rate": "( int_vol *    ( ( kp_Clb3  *  ( (Clb5_cyt)  **  n_Clb3 ) )  /  ( ( Kp_Clb3  **  n_Clb3 )  + ( (Clb5_cyt)  **  n_Clb3 ) ) )   )", 
        "name": "122", 
        "x": "62.653", 
        "y": "31.472", 
        "links_to": [
            "45", 
            "29"
        ], 
        "symbol": "rect", 
        "compartments": [
            "intracellular"
        ], 
        "is_ode": false, 
        "module": [
            "CDC_core"
        ], 
        "name_alt": "v_Clb3_p_Clb5"
    }, 
    {
        "rate": "( int_vol *   ( ( kpp_APC_Clb2  *  APC_cyt )  *  Clb2_cyt )  )", 
        "name": "123", 
        "x": "56.986", 
        "y": "41.472", 
        "links_to": [
            "20", 
            "43", 
            "38"
        ], 
        "symbol": "rect", 
        "compartments": [
            "intracellular"
        ], 
        "is_ode": false, 
        "module": [
            "CDC_core"
        ], 
        "name_alt": "v_APC_inakt_Clb2"
    }, 
    {
        "rate": "( int_vol *   ( ( kpp_APC_Clb5  *  APC_cyt )  *  Clb5_cyt )  )", 
        "name": "124", 
        "x": "53.153", 
        "y": "31.472", 
        "links_to": [
            "20", 
            "43", 
            "29"
        ], 
        "symbol": "rect", 
        "compartments": [
            "intracellular"
        ], 
        "is_ode": false, 
        "module": [
            "CDC_core"
        ], 
        "name_alt": "v_APC_inakt_Clb5"
    }, 
    {
        "rate": "( int_vol *    (  ( ( kp_Clb2  *  Mcm1_nuc )  /  ( Kp_Clb2  + Mcm1_nuc ) )   /  ( 1.0  + ( kI_Clb2_Hog1  *  Hog1_PP_cyt ) ) )   )", 
        "name": "125", 
        "x": "63.222", 
        "y": "43.472", 
        "links_to": [
            "38", 
            "25", 
            "44"
        ], 
        "symbol": "rect", 
        "compartments": [
            "intracellular"
        ], 
        "is_ode": false, 
        "module": [
            "CDC_core"
        ], 
        "name_alt": "v_Clb2_p"
    }, 
    {
        "rate": "( int_vol *   ( kd_MBF  *  MBF_nuc )  )", 
        "name": "126", 
        "x": "61.889", 
        "y": "33.472", 
        "links_to": [
            "50"
        ], 
        "symbol": "rect", 
        "compartments": [
            "intracellular"
        ], 
        "is_ode": false, 
        "module": [
            "CDC_core"
        ], 
        "name_alt": "v_MBF_d"
    }, 
    {
        "rate": "( int_vol *   ( kd_Whi5  *  Whi5_cyt )  )", 
        "name": "127", 
        "x": "53.986", 
        "y": "23.472", 
        "links_to": [
            "30"
        ], 
        "symbol": "rect", 
        "compartments": [
            "intracellular"
        ], 
        "is_ode": false, 
        "module": [
            "CDC_core"
        ], 
        "name_alt": "v_Whi5_d"
    }, 
    {
        "rate": "( int_vol *   ( ( kpp_Clb5_Sic1_Hog1  *  Hog1_PP_cyt )  *  Clb5_Sic1_cyt)  )", 
        "name": "128", 
        "x": "65.319", 
        "y": "27.472", 
        "links_to": [
            "22", 
            "33", 
            "25"
        ], 
        "symbol": "rect", 
        "compartments": [
            "intracellular"
        ], 
        "is_ode": false, 
        "module": [
            "CDC_core"
        ], 
        "name_alt": "v_Clb5_Sic1_pp_Hog1"
    }, 
    {
        "rate": "( int_vol *   ( kd_Clb2  *  Clb2_cyt )  )", 
        "name": "129", 
        "x": "63.333", 
        "y": "53.472", 
        "links_to": [
            "38"
        ], 
        "symbol": "rect", 
        "compartments": [
            "intracellular"
        ], 
        "is_ode": false, 
        "module": [
            "CDC_core"
        ], 
        "name_alt": "v_Clb2_d"
    }, 
    {
        "rate": "( int_vol *   ( ( Whi5_p_cyt  *  kdp_Whi5 )  *  Cdc14_p_cyt )  )", 
        "name": "130", 
        "x": "53.486", 
        "y": "25.472", 
        "links_to": [
            "23", 
            "30", 
            "21"
        ], 
        "symbol": "rect", 
        "compartments": [
            "intracellular"
        ], 
        "is_ode": false, 
        "module": [
            "CDC_core"
        ], 
        "name_alt": "v_Whi5p_dp"
    }, 
    {
        "rate": "( int_vol *   kp_Whi5  )", 
        "name": "131", 
        "x": "54.486", 
        "y": "25.472", 
        "links_to": [
            "30"
        ], 
        "symbol": "rect", 
        "compartments": [
            "intracellular"
        ], 
        "is_ode": false, 
        "module": [
            "CDC_core"
        ], 
        "name_alt": "v_Whi5_p"
    }, 
    {
        "rate": "( int_vol *   ( (   kcf_Clb3_Sic1 )  *  Clb3_cyt )  *  Sic1_cyt )", 
        "name": "132", 
        "x": "60.694", 
        "y": "49.472", 
        "links_to": [
            "45", 
            "39", 
            "26"
        ], 
        "symbol": "rect", 
        "compartments": [
            "intracellular"
        ], 
        "is_ode": false, 
        "module": [
            "CDC_core"
        ], 
        "name_alt": "v_Clb3_ass_Sic1"
    }, 
    {
        "rate": "( int_vol *   ( kd_Mih1  *  Mih1_cyt )  )", 
        "name": "133", 
        "x": "62.847", 
        "y": "55.472", 
        "links_to": [
            "34"
        ], 
        "symbol": "rect", 
        "compartments": [
            "intracellular"
        ], 
        "is_ode": false, 
        "module": [
            "CDC_core"
        ], 
        "name_alt": "v_Mih1_d"
    }, 
    {
        "rate": "( int_vol * ( kcd_Clb5_Sic1  *  Clb5_Sic1_cyt )  )", 
        "name": "134", 
        "x": "68.319", 
        "y": "27.472", 
        "links_to": [
            "22", 
            "39", 
            "29"
        ], 
        "symbol": "rect", 
        "compartments": [
            "intracellular"
        ], 
        "is_ode": false, 
        "module": [
            "CDC_core"
        ], 
        "name_alt": "v_Clb5_diss_Sic1"
    }, 
    {
        "rate": "( int_vol *   ( ( ka_Cdc14_APC  *  Cdc14_cyt )  *  APC_cyt )  )", 
        "name": "135", 
        "x": "58.819", 
        "y": "41.472", 
        "links_to": [
            "24", 
            "21", 
            "20"
        ], 
        "symbol": "rect", 
        "compartments": [
            "intracellular"
        ], 
        "is_ode": false, 
        "module": [
            "CDC_core"
        ], 
        "name_alt": "v_Cdc14_akt_APC"
    }, 
    {
        "rate": "( int_vol *    ( ( kp_APC  *  Mcm1_nuc )  /  ( Kp_APC  + Mcm1_nuc ) )   )", 
        "name": "136", 
        "x": "60.111", 
        "y": "43.472", 
        "links_to": [
            "20", 
            "44"
        ], 
        "symbol": "rect", 
        "compartments": [
            "intracellular"
        ], 
        "is_ode": false, 
        "module": [
            "CDC_core"
        ], 
        "name_alt": "v_APC_akt_p_Mcm1"
    }, 
    {
        "rate": "( int_vol *   kp_Mih1  )", 
        "name": "137", 
        "x": "62.847", 
        "y": "57.472", 
        "links_to": [
            "34"
        ], 
        "symbol": "rect", 
        "compartments": [
            "intracellular"
        ], 
        "is_ode": false, 
        "module": [
            "CDC_core"
        ], 
        "name_alt": "v_Mih1_p"
    }, 
    {
        "rate": "( int_vol *   ( kd_Cln3  *  Cln3_cyt )  )", 
        "name": "138", 
        "x": "57.042", 
        "y": "27.472", 
        "links_to": [
            "32"
        ], 
        "symbol": "rect", 
        "compartments": [
            "intracellular"
        ], 
        "is_ode": false, 
        "module": [
            "CDC_core"
        ], 
        "name_alt": "v_Cln3_d"
    }, 
    {
        "rate": "( int_vol *   ( kd_Whi5_SBF  *  SBF_Whi5_nuc )  )", 
        "name": "139", 
        "x": "53.847", 
        "y": "27.472", 
        "links_to": [
            "42"
        ], 
        "symbol": "rect", 
        "compartments": [
            "intracellular"
        ], 
        "is_ode": false, 
        "module": [
            "CDC_core"
        ], 
        "name_alt": "v_Whi5_SBF_d"
    }, 
    {
        "rate": "( int_vol *   kp_Cln3  )", 
        "name": "140", 
        "x": "55.764", 
        "y": "29.472", 
        "links_to": [
            "32"
        ], 
        "symbol": "rect", 
        "compartments": [
            "intracellular"
        ], 
        "is_ode": false, 
        "module": [
            "CDC_core"
        ], 
        "name_alt": "v_Cln3_p"
    }, 
    {
        "links_to": [
            "145", 
            "146"
        ], 
        "symbol": "circle", 
        "module": [
            "GEX_APC"
        ], 
        "name_alt": "rRNA", 
        "state": "0", 
        "y": "54.472", 
        "x": "52.889", 
        "annotation": "YCM:rRNA", 
        "compartment": "intracellular", 
        "is_ode": false, 
        "name": "141"
    }, 
    {
        "links_to": [], 
        "symbol": "circle", 
        "module": [
            "GEX_APC", 
            "GEX_TRL"
        ], 
        "name_alt": "cyt_vol", 
        "state": "0", 
        "y": "57.472", 
        "x": "103.46", 
        "annotation": "SBO:0000468", 
        "compartment": "cytosol", 
        "is_ode": true, 
        "name": "142"
    }, 
    {
        "links_to": [
            "145", 
            "146", 
            "272", 
            "273"
        ], 
        "symbol": "circle", 
        "module": [
            "GEX_APC", 
            "GEX_TRL"
        ], 
        "name_alt": "B_Protein_R", 
        "state": "0", 
        "y": "54.472", 
        "x": "51.889", 
        "annotation": "YCM:B_Protein_R", 
        "compartment": "intracellular", 
        "is_ode": false, 
        "name": "143"
    }, 
    {
        "links_to": [
            "145", 
            "146", 
            "269", 
            "271", 
            "274", 
            "276", 
            "277", 
            "278", 
            "259"
        ], 
        "symbol": "circle", 
        "module": [
            "GEX_APC", 
            "GEX_TRL"
        ], 
        "name_alt": "Ribosome", 
        "state": "0", 
        "y": "56.472", 
        "x": "53.806", 
        "annotation": "YCM:ribosome", 
        "compartment": "intracellular", 
        "is_ode": false, 
        "name": "144"
    }, 
    {
        "rate": "(k_DIS_Ribosome * Ribosome)*int_vol", 
        "name": "145", 
        "x": "52.889", 
        "y": "55.472", 
        "links_to": [
            "144", 
            "143", 
            "141"
        ], 
        "symbol": "rect", 
        "compartments": [
            "intracellular"
        ], 
        "is_ode": false, 
        "module": [
            "GEX_APC"
        ], 
        "name_alt": "v_DIS_Ribosome"
    }, 
    {
        "rate": "(k_ASS_Ribosome * rRNA * B_Protein_R)*int_vol", 
        "name": "146", 
        "x": "53.444", 
        "y": "53.472", 
        "links_to": [
            "143", 
            "141", 
            "144"
        ], 
        "symbol": "rect", 
        "compartments": [
            "intracellular"
        ], 
        "is_ode": false, 
        "module": [
            "GEX_APC"
        ], 
        "name_alt": "v_ASS_Ribosome"
    }, 
    {
        "links_to": [
            "190", 
            "193", 
            "230"
        ], 
        "symbol": "circle", 
        "module": [
            "GEX_GRN"
        ], 
        "name_alt": "mWhi5", 
        "state": "mRNA", 
        "y": "42.472", 
        "x": "25.097", 
        "annotation": "SGD:S000005609p", 
        "compartment": "intracellular", 
        "is_ode": false, 
        "name": "147"
    }, 
    {
        "links_to": [
            "217", 
            "224", 
            "231"
        ], 
        "symbol": "circle", 
        "module": [
            "GEX_GRN"
        ], 
        "name_alt": "mMBF", 
        "state": "mRNA", 
        "y": "34.472", 
        "x": "29.431", 
        "annotation": "SGD:S000002214p_SGD:S000004172p", 
        "compartment": "intracellular", 
        "is_ode": false, 
        "name": "148"
    }, 
    {
        "links_to": [
            "189", 
            "195", 
            "222"
        ], 
        "symbol": "circle", 
        "module": [
            "GEX_GRN"
        ], 
        "name_alt": "mCln3", 
        "state": "mRNA", 
        "y": "46.472", 
        "x": "34.208", 
        "annotation": "SGD:S000000038p", 
        "compartment": "intracellular", 
        "is_ode": false, 
        "name": "149"
    }, 
    {
        "links_to": [
            "212", 
            "243", 
            "248"
        ], 
        "symbol": "circle", 
        "module": [
            "GEX_GRN"
        ], 
        "name_alt": "mCln2", 
        "state": "mRNA", 
        "y": "38.472", 
        "x": "23.264", 
        "annotation": "SGD:S000006177p", 
        "compartment": "intracellular", 
        "is_ode": false, 
        "name": "150"
    }, 
    {
        "links_to": [
            "191", 
            "202"
        ], 
        "symbol": "circle", 
        "module": [
            "GEX_GRN"
        ], 
        "name_alt": "Cdc14", 
        "state": "0", 
        "y": "50.472", 
        "x": "41.833", 
        "annotation": "SGD:S000001924p", 
        "compartment": "intracellular", 
        "is_ode": false, 
        "name": "151"
    }, 
    {
        "links_to": [
            "249", 
            "250", 
            "258"
        ], 
        "symbol": "circle", 
        "module": [
            "GEX_GRN"
        ], 
        "name_alt": "mSwi5", 
        "state": "mRNA", 
        "y": "18.472", 
        "x": "25.028", 
        "annotation": "SGD:S000002553p", 
        "compartment": "intracellular", 
        "is_ode": false, 
        "name": "152"
    }, 
    {
        "links_to": [
            "189", 
            "190", 
            "192", 
            "197", 
            "203", 
            "204", 
            "205", 
            "208", 
            "209", 
            "211", 
            "212", 
            "214", 
            "215", 
            "216", 
            "217", 
            "221", 
            "222", 
            "225", 
            "229", 
            "230", 
            "231", 
            "235", 
            "236", 
            "238", 
            "241", 
            "242", 
            "243", 
            "245", 
            "247", 
            "249", 
            "250", 
            "255"
        ], 
        "symbol": "circle", 
        "module": [
            "GEX_GRN"
        ], 
        "name_alt": "NA", 
        "state": "0", 
        "y": "44.472", 
        "x": "31.764", 
        "annotation": "YCM:NA", 
        "compartment": "intracellular", 
        "is_ode": false, 
        "name": "153"
    }, 
    {
        "links_to": [
            "205", 
            "221", 
            "246"
        ], 
        "symbol": "circle", 
        "module": [
            "GEX_GRN"
        ], 
        "name_alt": "mClb3", 
        "state": "mRNA", 
        "y": "26.472", 
        "x": "34.139", 
        "annotation": "SGD:S000002314p", 
        "compartment": "intracellular", 
        "is_ode": false, 
        "name": "154"
    }, 
    {
        "links_to": [
            "227", 
            "242", 
            "247"
        ], 
        "symbol": "circle", 
        "module": [
            "GEX_GRN"
        ], 
        "name_alt": "mClb2", 
        "state": "mRNA", 
        "y": "18.472", 
        "x": "29.528", 
        "annotation": "SGD:S000006323p", 
        "compartment": "intracellular", 
        "is_ode": false, 
        "name": "155"
    }, 
    {
        "links_to": [
            "210", 
            "254"
        ], 
        "symbol": "circle", 
        "module": [
            "GEX_GRN"
        ], 
        "name_alt": "Mih1", 
        "state": "0", 
        "y": "40.472", 
        "x": "20.875", 
        "annotation": "SGD:S000004639p", 
        "compartment": "intracellular", 
        "is_ode": false, 
        "name": "156"
    }, 
    {
        "links_to": [
            "215", 
            "216", 
            "257"
        ], 
        "symbol": "circle", 
        "module": [
            "GEX_GRN"
        ], 
        "name_alt": "mClb5", 
        "state": "mRNA", 
        "y": "30.472", 
        "x": "33.319", 
        "annotation": "SGD:S000006324p", 
        "compartment": "intracellular", 
        "is_ode": false, 
        "name": "157"
    }, 
    {
        "links_to": [
            "208", 
            "213", 
            "241"
        ], 
        "symbol": "circle", 
        "module": [
            "GEX_GRN"
        ], 
        "name_alt": "mSwe1", 
        "state": "mRNA", 
        "y": "42.472", 
        "x": "21.153", 
        "annotation": "SGD:S000003723p", 
        "compartment": "intracellular", 
        "is_ode": false, 
        "name": "158"
    }, 
    {
        "links_to": [
            "234", 
            "239", 
            "252"
        ], 
        "symbol": "circle", 
        "module": [
            "GEX_GRN"
        ], 
        "name_alt": "Far1", 
        "state": "0", 
        "y": "40.472", 
        "x": "44.097", 
        "annotation": "SGD:S000003693p", 
        "compartment": "intracellular", 
        "is_ode": false, 
        "name": "159"
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
            "307", 
            "309", 
            "310", 
            "311", 
            "313", 
            "314", 
            "315", 
            "316", 
            "317", 
            "318", 
            "320"
        ], 
        "symbol": "circle", 
        "module": [
            "GEX_GRN", 
            "GEX_TRL", 
            "MET_CCM", 
            "TRP_NUT"
        ], 
        "name_alt": "ADP", 
        "state": "-3", 
        "y": "50.472", 
        "x": "36.903", 
        "annotation": "CHEBI:456216", 
        "compartment": "intracellular", 
        "is_ode": false, 
        "name": "160"
    }, 
    {
        "links_to": [
            "234", 
            "238", 
            "245"
        ], 
        "symbol": "circle", 
        "module": [
            "GEX_GRN"
        ], 
        "name_alt": "mFar1", 
        "state": "mRNA", 
        "y": "42.472", 
        "x": "38.375", 
        "annotation": "SGD:S000003693p", 
        "compartment": "intracellular", 
        "is_ode": false, 
        "name": "161"
    }, 
    {
        "links_to": [
            "198", 
            "253"
        ], 
        "symbol": "circle", 
        "module": [
            "GEX_GRN"
        ], 
        "name_alt": "Sic1", 
        "state": "0", 
        "y": "12.472", 
        "x": "7.7639", 
        "annotation": "SGD:S000004069p", 
        "compartment": "intracellular", 
        "is_ode": false, 
        "name": "162"
    }, 
    {
        "links_to": [
            "194", 
            "209", 
            "226", 
            "246"
        ], 
        "symbol": "circle", 
        "module": [
            "GEX_GRN"
        ], 
        "name_alt": "Clb3", 
        "state": "0", 
        "y": "24.472", 
        "x": "32.292", 
        "annotation": "SGD:S000002314p", 
        "compartment": "intracellular", 
        "is_ode": false, 
        "name": "163"
    }, 
    {
        "links_to": [
            "209", 
            "227", 
            "233", 
            "237"
        ], 
        "symbol": "circle", 
        "module": [
            "GEX_GRN"
        ], 
        "name_alt": "Clb2", 
        "state": "0", 
        "y": "16.472", 
        "x": "31.542", 
        "annotation": "SGD:S000006323p", 
        "compartment": "intracellular", 
        "is_ode": false, 
        "name": "164"
    }, 
    {
        "links_to": [
            "203", 
            "254", 
            "255"
        ], 
        "symbol": "circle", 
        "module": [
            "GEX_GRN"
        ], 
        "name_alt": "mMih1", 
        "state": "mRNA", 
        "y": "42.472", 
        "x": "27.931", 
        "annotation": "SGD:S000004639p", 
        "compartment": "intracellular", 
        "is_ode": false, 
        "name": "165"
    }, 
    {
        "links_to": [
            "221", 
            "228", 
            "244", 
            "257", 
            "326"
        ], 
        "symbol": "circle", 
        "module": [
            "GEX_GRN", 
            "MET_DNA"
        ], 
        "name_alt": "Clb5", 
        "state": "0", 
        "y": "28.472", 
        "x": "38.931", 
        "annotation": "SGD:S000006324p", 
        "compartment": "intracellular", 
        "is_ode": false, 
        "name": "166"
    }, 
    {
        "links_to": [
            "238"
        ], 
        "symbol": "circle", 
        "module": [
            "GEX_GRN"
        ], 
        "name_alt": "Fus3", 
        "state": "0", 
        "y": "44.472", 
        "x": "37.819", 
        "annotation": "SGD:S000000112p", 
        "compartment": "intracellular", 
        "is_ode": true, 
        "name": "167"
    }, 
    {
        "links_to": [
            "195", 
            "219"
        ], 
        "symbol": "circle", 
        "module": [
            "GEX_GRN"
        ], 
        "name_alt": "Cln3", 
        "state": "0", 
        "y": "44.472", 
        "x": "43.542", 
        "annotation": "SGD:S000000038p", 
        "compartment": "intracellular", 
        "is_ode": false, 
        "name": "168"
    }, 
    {
        "links_to": [
            "196", 
            "231", 
            "248", 
            "252"
        ], 
        "symbol": "circle", 
        "module": [
            "GEX_GRN"
        ], 
        "name_alt": "Cln2", 
        "state": "0", 
        "y": "36.472", 
        "x": "30.708", 
        "annotation": "SGD:S000006177p", 
        "compartment": "intracellular", 
        "is_ode": false, 
        "name": "169"
    }, 
    {
        "links_to": [
            "194", 
            "199", 
            "200", 
            "233", 
            "244"
        ], 
        "symbol": "circle", 
        "module": [
            "GEX_GRN"
        ], 
        "name_alt": "APC", 
        "state": "0", 
        "y": "16.472", 
        "x": "39.875", 
        "annotation": "SGD:S000002971p", 
        "compartment": "intracellular", 
        "is_ode": false, 
        "name": "170"
    }, 
    {
        "links_to": [
            "209", 
            "236", 
            "240"
        ], 
        "symbol": "circle", 
        "module": [
            "GEX_GRN"
        ], 
        "name_alt": "mMcm1", 
        "state": "mRNA", 
        "y": "22.472", 
        "x": "32.917", 
        "annotation": "SGD:S000004646p", 
        "compartment": "intracellular", 
        "is_ode": false, 
        "name": "171"
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
            "307", 
            "309", 
            "311", 
            "313", 
            "314", 
            "315", 
            "316", 
            "317", 
            "318", 
            "320"
        ], 
        "symbol": "circle", 
        "module": [
            "GEX_GRN", 
            "GEX_TRL", 
            "MET_CCM", 
            "TRP_NUT"
        ], 
        "name_alt": "ATP", 
        "state": "-4", 
        "y": "48.472", 
        "x": "22.486", 
        "annotation": "CHEBI:30616", 
        "compartment": "intracellular", 
        "is_ode": false, 
        "name": "172"
    }, 
    {
        "links_to": [
            "220"
        ], 
        "symbol": "circle", 
        "module": [
            "GEX_GRN"
        ], 
        "name_alt": "Cdc14_p", 
        "state": "P", 
        "y": "54.472", 
        "x": "49.889", 
        "annotation": "SGD:S000001924p", 
        "compartment": "intracellular", 
        "is_ode": false, 
        "name": "173"
    }, 
    {
        "links_to": [
            "204", 
            "240", 
            "247", 
            "250", 
            "256"
        ], 
        "symbol": "circle", 
        "module": [
            "GEX_GRN"
        ], 
        "name_alt": "Mcm1", 
        "state": "0", 
        "y": "20.472", 
        "x": "34.75", 
        "annotation": "SGD:S000004646p", 
        "compartment": "intracellular", 
        "is_ode": false, 
        "name": "174"
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
            "307", 
            "308", 
            "309", 
            "311", 
            "313", 
            "315", 
            "316", 
            "317", 
            "318"
        ], 
        "symbol": "circle", 
        "module": [
            "GEX_GRN", 
            "MET_CCM", 
            "TRP_NUT"
        ], 
        "name_alt": "Pi", 
        "state": "-2", 
        "y": "12.472", 
        "x": "28.472", 
        "annotation": "CHEBI:43474", 
        "compartment": "intracellular", 
        "is_ode": false, 
        "name": "175"
    }, 
    {
        "links_to": [
            "251"
        ], 
        "symbol": "circle", 
        "module": [
            "GEX_GRN"
        ], 
        "name_alt": "SBF_p", 
        "state": "P", 
        "y": "54.472", 
        "x": "26.056", 
        "annotation": "SGD:S000000913p_SGD:S000004172p", 
        "compartment": "intracellular", 
        "is_ode": false, 
        "name": "176"
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
        "name_alt": "ribosome", 
        "state": "0", 
        "y": "52.472", 
        "x": "9.8194", 
        "annotation": "YCM:ribosome", 
        "compartment": "intracellular", 
        "is_ode": true, 
        "name": "177"
    }, 
    {
        "links_to": [
            "207", 
            "212", 
            "223"
        ], 
        "symbol": "circle", 
        "module": [
            "GEX_GRN"
        ], 
        "name_alt": "SBF", 
        "state": "0", 
        "y": "40.472", 
        "x": "16.708", 
        "annotation": "SGD:S000000913p_SGD:S000004172p", 
        "compartment": "intracellular", 
        "is_ode": false, 
        "name": "178"
    }, 
    {
        "links_to": [
            "193", 
            "218"
        ], 
        "symbol": "circle", 
        "module": [
            "GEX_GRN"
        ], 
        "name_alt": "Whi5", 
        "state": "0", 
        "y": "40.472", 
        "x": "13.208", 
        "annotation": "SGD:S000005609p", 
        "compartment": "intracellular", 
        "is_ode": false, 
        "name": "179"
    }, 
    {
        "links_to": [
            "191", 
            "193", 
            "194", 
            "195", 
            "196", 
            "198", 
            "199", 
            "200", 
            "201", 
            "202", 
            "206", 
            "207", 
            "210", 
            "213", 
            "218", 
            "219", 
            "220", 
            "223", 
            "224", 
            "226", 
            "227", 
            "228", 
            "232", 
            "233", 
            "234", 
            "237", 
            "239", 
            "240", 
            "244", 
            "246", 
            "248", 
            "251", 
            "252", 
            "253", 
            "254", 
            "256", 
            "257", 
            "258", 
            "270", 
            "272", 
            "273", 
            "275", 
            "279", 
            "280", 
            "304", 
            "310"
        ], 
        "symbol": "circle", 
        "module": [
            "GEX_GRN", 
            "GEX_TRL", 
            "MET_CCM", 
            "TRP_NUT"
        ], 
        "name_alt": "AA", 
        "state": "0", 
        "y": "52.472", 
        "x": "48.764", 
        "annotation": "YCM:AA", 
        "compartment": "intracellular", 
        "is_ode": false, 
        "name": "180"
    }, 
    {
        "links_to": [
            "199", 
            "204", 
            "225"
        ], 
        "symbol": "circle", 
        "module": [
            "GEX_GRN"
        ], 
        "name_alt": "mAPC", 
        "state": "mRNA", 
        "y": "18.472", 
        "x": "31.083", 
        "annotation": "SGD:S000002971p", 
        "compartment": "intracellular", 
        "is_ode": false, 
        "name": "181"
    }, 
    {
        "links_to": [
            "214", 
            "223", 
            "229"
        ], 
        "symbol": "circle", 
        "module": [
            "GEX_GRN"
        ], 
        "name_alt": "mSBF", 
        "state": "mRNA", 
        "y": "42.472", 
        "x": "23.542", 
        "annotation": "SGD:S000000913p_SGD:S000004172p", 
        "compartment": "intracellular", 
        "is_ode": false, 
        "name": "182"
    }, 
    {
        "links_to": [
            "191", 
            "192", 
            "211"
        ], 
        "symbol": "circle", 
        "module": [
            "GEX_GRN"
        ], 
        "name_alt": "mCdc14", 
        "state": "mRNA", 
        "y": "42.472", 
        "x": "26.653", 
        "annotation": "SGD:S000001924p", 
        "compartment": "intracellular", 
        "is_ode": false, 
        "name": "183"
    }, 
    {
        "links_to": [
            "213", 
            "232"
        ], 
        "symbol": "circle", 
        "module": [
            "GEX_GRN"
        ], 
        "name_alt": "Swe1", 
        "state": "0", 
        "y": "40.472", 
        "x": "11.653", 
        "annotation": "SGD:S000003723p", 
        "compartment": "intracellular", 
        "is_ode": false, 
        "name": "184"
    }, 
    {
        "links_to": [
            "197", 
            "198", 
            "235"
        ], 
        "symbol": "circle", 
        "module": [
            "GEX_GRN"
        ], 
        "name_alt": "mSic1", 
        "state": "mRNA", 
        "y": "14.472", 
        "x": "17.069", 
        "annotation": "SGD:S000004069p", 
        "compartment": "intracellular", 
        "is_ode": false, 
        "name": "185"
    }, 
    {
        "links_to": [], 
        "symbol": "circle", 
        "module": [
            "GEX_GRN"
        ], 
        "name_alt": "HOG1", 
        "state": "PP", 
        "y": "59.472", 
        "x": "66.597", 
        "annotation": "SGD:S000004103p", 
        "compartment": "intracellular", 
        "is_ode": true, 
        "name": "186"
    }, 
    {
        "links_to": [
            "197", 
            "206", 
            "258"
        ], 
        "symbol": "circle", 
        "module": [
            "GEX_GRN"
        ], 
        "name_alt": "Swi5", 
        "state": "0", 
        "y": "16.472", 
        "x": "16.597", 
        "annotation": "SGD:S000002553p", 
        "compartment": "intracellular", 
        "is_ode": false, 
        "name": "187"
    }, 
    {
        "links_to": [
            "201", 
            "216", 
            "224"
        ], 
        "symbol": "circle", 
        "module": [
            "GEX_GRN"
        ], 
        "name_alt": "MBF", 
        "state": "0", 
        "y": "32.472", 
        "x": "34.319", 
        "annotation": "SGD:S000002214p_SGD:S000004172p", 
        "compartment": "intracellular", 
        "is_ode": false, 
        "name": "188"
    }, 
    {
        "rate": "corr_Cln3_TRSC * vmax_TRSC_Cln3 * (ATP/(kM_ATP + ATP)) * (NA/(kM_NA + NA))*int_vol", 
        "name": "189", 
        "x": "33.569", 
        "y": "47.472", 
        "links_to": [
            "153", 
            "172", 
            "175", 
            "149", 
            "160"
        ], 
        "symbol": "rect", 
        "compartments": [
            "intracellular"
        ], 
        "is_ode": false, 
        "module": [
            "GEX_GRN"
        ], 
        "name_alt": "v_mCln3_TRSC"
    }, 
    {
        "rate": "corr_Whi5_TRSC * vmax_TRSC_Whi5 * (ATP/(kM_ATP + ATP)) * (NA/(kM_NA + NA))*int_vol", 
        "name": "190", 
        "x": "25.097", 
        "y": "43.472", 
        "links_to": [
            "153", 
            "172", 
            "147", 
            "175", 
            "160"
        ], 
        "symbol": "rect", 
        "compartments": [
            "intracellular"
        ], 
        "is_ode": false, 
        "module": [
            "GEX_GRN"
        ], 
        "name_alt": "v_mWhi5_TRSC"
    }, 
    {
        "rate": "corr_Cdc14_TRSL * vmax_TRSL_Cdc14 * mCdc14 * (ATP/(kM_ATP + ATP)) * (AA/(kM_AA + AA)) * (ribosome/(kM_ribosome + ribosome))*int_vol", 
        "name": "191", 
        "x": "25.458", 
        "y": "51.472", 
        "links_to": [
            "180", 
            "172", 
            "175", 
            "160", 
            "151", 
            "183", 
            "177"
        ], 
        "symbol": "rect", 
        "compartments": [
            "intracellular"
        ], 
        "is_ode": false, 
        "module": [
            "GEX_GRN"
        ], 
        "name_alt": "v_mCdc14_TRSL"
    }, 
    {
        "rate": "corr_Cdc14_TRSC * vmax_TRSC_Cdc14 * (ATP/(kM_ATP + ATP)) * (NA/(kM_NA + NA))*int_vol", 
        "name": "192", 
        "x": "26.931", 
        "y": "43.472", 
        "links_to": [
            "153", 
            "172", 
            "183", 
            "175", 
            "160"
        ], 
        "symbol": "rect", 
        "compartments": [
            "intracellular"
        ], 
        "is_ode": false, 
        "module": [
            "GEX_GRN"
        ], 
        "name_alt": "v_mCdc14_TRSC"
    }, 
    {
        "rate": "corr_Whi5_TRSL * vmax_TRSL_Whi5 * mWhi5 * (ATP/(kM_ATP + ATP)) * (AA/(kM_AA + AA)) * (ribosome/(kM_ribosome + ribosome))*int_vol", 
        "name": "193", 
        "x": "13.764", 
        "y": "41.472", 
        "links_to": [
            "180", 
            "172", 
            "179", 
            "175", 
            "160", 
            "177", 
            "147"
        ], 
        "symbol": "rect", 
        "compartments": [
            "intracellular"
        ], 
        "is_ode": false, 
        "module": [
            "GEX_GRN"
        ], 
        "name_alt": "v_mWhi5_TRSL"
    }, 
    {
        "rate": "(kd_Clb3_APC * Clb3 * APC)*int_vol", 
        "name": "194", 
        "x": "38.708", 
        "y": "15.472", 
        "links_to": [
            "163", 
            "180", 
            "170"
        ], 
        "symbol": "rect", 
        "compartments": [
            "intracellular"
        ], 
        "is_ode": false, 
        "module": [
            "GEX_GRN"
        ], 
        "name_alt": "v_Clb3_deg_APC"
    }, 
    {
        "rate": "corr_Cln3_TRSL * vmax_TRSL_Cln3 * mCln3 * (ATP/(kM_ATP + ATP)) * (AA/(kM_AA + AA)) * (ribosome/(kM_ribosome + ribosome))*int_vol", 
        "name": "195", 
        "x": "42.986", 
        "y": "45.472", 
        "links_to": [
            "180", 
            "172", 
            "175", 
            "168", 
            "160", 
            "177", 
            "149"
        ], 
        "symbol": "rect", 
        "compartments": [
            "intracellular"
        ], 
        "is_ode": false, 
        "module": [
            "GEX_GRN"
        ], 
        "name_alt": "v_mCln3_TRSL"
    }, 
    {
        "rate": "(kd_Cln2 * Cln2)*int_vol", 
        "name": "196", 
        "x": "30.708", 
        "y": "35.472", 
        "links_to": [
            "169", 
            "180"
        ], 
        "symbol": "rect", 
        "compartments": [
            "intracellular"
        ], 
        "is_ode": false, 
        "module": [
            "GEX_GRN"
        ], 
        "name_alt": "v_Cln2_deg"
    }, 
    {
        "rate": "corr_Sic1_TRSC * vmax_TRSC_Sic1 * (ATP/(kM_ATP + ATP)) * (NA/(kM_NA + NA)) * Swi5/(Kp_Sic1 + Swi5)*int_vol", 
        "name": "197", 
        "x": "17.111", 
        "y": "15.472", 
        "links_to": [
            "153", 
            "172", 
            "185", 
            "175", 
            "160", 
            "187"
        ], 
        "symbol": "rect", 
        "compartments": [
            "intracellular"
        ], 
        "is_ode": false, 
        "module": [
            "GEX_GRN"
        ], 
        "name_alt": "v_mSic1_TRSC"
    }, 
    {
        "rate": "corr_Sic1_TRSL * kp_Sic1 * mSic1 * (ATP/(kM_ATP + ATP)) * (AA/(kM_AA + AA)) * (ribosome/(kM_ribosome + ribosome))*int_vol", 
        "name": "198", 
        "x": "9.3472", 
        "y": "13.472", 
        "links_to": [
            "180", 
            "172", 
            "175", 
            "162", 
            "160", 
            "185", 
            "177"
        ], 
        "symbol": "rect", 
        "compartments": [
            "intracellular"
        ], 
        "is_ode": false, 
        "module": [
            "GEX_GRN"
        ], 
        "name_alt": "v_mSic1_TRSL"
    }, 
    {
        "rate": "corr_APC_TRSL * kp_APC * mAPC * (ATP/(kM_ATP + ATP)) * (AA/(kM_AA + AA)) * (ribosome/(kM_ribosome + ribosome))*int_vol", 
        "name": "199", 
        "x": "41.903", 
        "y": "17.472", 
        "links_to": [
            "180", 
            "172", 
            "170", 
            "175", 
            "160", 
            "181", 
            "177"
        ], 
        "symbol": "rect", 
        "compartments": [
            "intracellular"
        ], 
        "is_ode": false, 
        "module": [
            "GEX_GRN"
        ], 
        "name_alt": "v_mAPC_TRSL"
    }, 
    {
        "rate": "(kd_APC * APC)*int_vol", 
        "name": "200", 
        "x": "39.708", 
        "y": "15.472", 
        "links_to": [
            "170", 
            "180"
        ], 
        "symbol": "rect", 
        "compartments": [
            "intracellular"
        ], 
        "is_ode": false, 
        "module": [
            "GEX_GRN"
        ], 
        "name_alt": "v_APC_deg"
    }, 
    {
        "rate": "(kd_MBF * MBF)*int_vol", 
        "name": "201", 
        "x": "34.597", 
        "y": "31.472", 
        "links_to": [
            "188", 
            "180"
        ], 
        "symbol": "rect", 
        "compartments": [
            "intracellular"
        ], 
        "is_ode": false, 
        "module": [
            "GEX_GRN"
        ], 
        "name_alt": "v_MBF_deg"
    }, 
    {
        "rate": "(k_Cdc14_deg * Cdc14)*int_vol", 
        "name": "202", 
        "x": "46.042", 
        "y": "49.472", 
        "links_to": [
            "151", 
            "180"
        ], 
        "symbol": "rect", 
        "compartments": [
            "intracellular"
        ], 
        "is_ode": false, 
        "module": [
            "GEX_GRN"
        ], 
        "name_alt": "v_Cdc14_deg"
    }, 
    {
        "rate": "(k_mMih1_deg * mMih1)*int_vol", 
        "name": "203", 
        "x": "29.319", 
        "y": "41.472", 
        "links_to": [
            "165", 
            "153"
        ], 
        "symbol": "rect", 
        "compartments": [
            "intracellular"
        ], 
        "is_ode": false, 
        "module": [
            "GEX_GRN"
        ], 
        "name_alt": "v_mMih1_deg"
    }, 
    {
        "rate": "corr_APC_TRSC * vmax_TRSC_APC * (ATP/(kM_ATP + ATP)) * (NA/(kM_NA + NA)) * Mcm1/(Kp_APC + Mcm1)*int_vol", 
        "name": "204", 
        "x": "29.361", 
        "y": "19.472", 
        "links_to": [
            "153", 
            "172", 
            "181", 
            "175", 
            "160", 
            "174"
        ], 
        "symbol": "rect", 
        "compartments": [
            "intracellular"
        ], 
        "is_ode": false, 
        "module": [
            "GEX_GRN"
        ], 
        "name_alt": "v_mAPC_TRSC"
    }, 
    {
        "rate": "(k_mClb3_deg * mClb3)*int_vol", 
        "name": "205", 
        "x": "34.139", 
        "y": "25.472", 
        "links_to": [
            "154", 
            "153"
        ], 
        "symbol": "rect", 
        "compartments": [
            "intracellular"
        ], 
        "is_ode": false, 
        "module": [
            "GEX_GRN"
        ], 
        "name_alt": "v_mClb3_deg"
    }, 
    {
        "rate": "(kd_Swi5 * Swi5)*int_vol", 
        "name": "206", 
        "x": "16.111", 
        "y": "15.472", 
        "links_to": [
            "187", 
            "180"
        ], 
        "symbol": "rect", 
        "compartments": [
            "intracellular"
        ], 
        "is_ode": false, 
        "module": [
            "GEX_GRN"
        ], 
        "name_alt": "v_Swi5_deg"
    }, 
    {
        "rate": "(k_SBF_deg * SBF)*int_vol", 
        "name": "207", 
        "x": "15.319", 
        "y": "39.472", 
        "links_to": [
            "178", 
            "180"
        ], 
        "symbol": "rect", 
        "compartments": [
            "intracellular"
        ], 
        "is_ode": false, 
        "module": [
            "GEX_GRN"
        ], 
        "name_alt": "v_SBF_deg"
    }, 
    {
        "rate": "corr_Swe1_TRSC * vmax_TRSC_Swe1 * (ATP/(kM_ATP + ATP)) * (NA/(kM_NA + NA))*int_vol", 
        "name": "208", 
        "x": "21.153", 
        "y": "43.472", 
        "links_to": [
            "153", 
            "172", 
            "158", 
            "175", 
            "160"
        ], 
        "symbol": "rect", 
        "compartments": [
            "intracellular"
        ], 
        "is_ode": false, 
        "module": [
            "GEX_GRN"
        ], 
        "name_alt": "v_mSwe1_TRSC"
    }, 
    {
        "rate": "corr_Mcm1_TRSC * vmax_TRSC_Mcm1 * (Clb2**n_Mcm1/(Kp_Mcm1**n_Mcm1 + Clb2**n_Mcm1) + (v0_Mcm1/kp_Mcm1) * Clb3**n_Mcm1/(V0_Mcm1**n_Mcm1 + Clb3**n_Mcm1)) * (ATP/(kM_ATP + ATP)) * (NA/(kM_NA + NA))*int_vol", 
        "name": "209", 
        "x": "32.931", 
        "y": "23.472", 
        "links_to": [
            "153", 
            "172", 
            "171", 
            "175", 
            "160", 
            "163", 
            "164"
        ], 
        "symbol": "rect", 
        "compartments": [
            "intracellular"
        ], 
        "is_ode": false, 
        "module": [
            "GEX_GRN"
        ], 
        "name_alt": "v_mMcm1_TRSC"
    }, 
    {
        "rate": "(k_Mih1_deg * Mih1)*int_vol", 
        "name": "210", 
        "x": "19.653", 
        "y": "39.472", 
        "links_to": [
            "156", 
            "180"
        ], 
        "symbol": "rect", 
        "compartments": [
            "intracellular"
        ], 
        "is_ode": false, 
        "module": [
            "GEX_GRN"
        ], 
        "name_alt": "v_Mih1_deg"
    }, 
    {
        "rate": "(k_mCdc14_deg * mCdc14)*int_vol", 
        "name": "211", 
        "x": "28.319", 
        "y": "41.472", 
        "links_to": [
            "183", 
            "153"
        ], 
        "symbol": "rect", 
        "compartments": [
            "intracellular"
        ], 
        "is_ode": false, 
        "module": [
            "GEX_GRN"
        ], 
        "name_alt": "v_mCdc14_deg"
    }, 
    {
        "rate": "corr_Cln2_TRSC * vmax_TRSC_Cln2 * (ATP/(kM_ATP + ATP)) * (NA/(kM_NA + NA)) * SBF/(Kp_Cln2 + SBF)*int_vol", 
        "name": "212", 
        "x": "23.264", 
        "y": "39.472", 
        "links_to": [
            "153", 
            "172", 
            "175", 
            "150", 
            "160", 
            "178"
        ], 
        "symbol": "rect", 
        "compartments": [
            "intracellular"
        ], 
        "is_ode": false, 
        "module": [
            "GEX_GRN"
        ], 
        "name_alt": "v_mCln2_TRSC"
    }, 
    {
        "rate": "corr_Swe1_TRSL * vmax_TRSL_Swe1 * mSwe1 * (ATP/(kM_ATP + ATP)) * (AA/(kM_AA + AA)) * (ribosome/(kM_ribosome + ribosome))*int_vol", 
        "name": "213", 
        "x": "11.653", 
        "y": "41.472", 
        "links_to": [
            "180", 
            "172", 
            "184", 
            "175", 
            "160", 
            "158", 
            "177"
        ], 
        "symbol": "rect", 
        "compartments": [
            "intracellular"
        ], 
        "is_ode": false, 
        "module": [
            "GEX_GRN"
        ], 
        "name_alt": "v_mSwe1_TRSL"
    }, 
    {
        "rate": "vmax_TRSC_SBF * (ATP/(kM_ATP + ATP)) * (NA/(kM_NA + NA))*int_vol", 
        "name": "214", 
        "x": "23.542", 
        "y": "43.472", 
        "links_to": [
            "153", 
            "172", 
            "182", 
            "175", 
            "160"
        ], 
        "symbol": "rect", 
        "compartments": [
            "intracellular"
        ], 
        "is_ode": false, 
        "module": [
            "GEX_GRN"
        ], 
        "name_alt": "v_mSBF_TRSC"
    }, 
    {
        "rate": "(k_mClb5_deg * mClb5)*int_vol", 
        "name": "215", 
        "x": "33.042", 
        "y": "29.472", 
        "links_to": [
            "157", 
            "153"
        ], 
        "symbol": "rect", 
        "compartments": [
            "intracellular"
        ], 
        "is_ode": false, 
        "module": [
            "GEX_GRN"
        ], 
        "name_alt": "v_mClb5_deg"
    }, 
    {
        "rate": "corr_Clb5_TRSC * vmax_TRSC_Clb5 * (ATP/(kM_ATP + ATP)) * (NA/(kM_NA + NA)) * MBF/(Kp_Clb5 + MBF)*int_vol", 
        "name": "216", 
        "x": "33.319", 
        "y": "31.472", 
        "links_to": [
            "153", 
            "172", 
            "175", 
            "160", 
            "157", 
            "188"
        ], 
        "symbol": "rect", 
        "compartments": [
            "intracellular"
        ], 
        "is_ode": false, 
        "module": [
            "GEX_GRN"
        ], 
        "name_alt": "v_mClb5_TRSC"
    }, 
    {
        "rate": "(k_mMBF_deg * mMBF)*int_vol", 
        "name": "217", 
        "x": "30.153", 
        "y": "33.472", 
        "links_to": [
            "148", 
            "153"
        ], 
        "symbol": "rect", 
        "compartments": [
            "intracellular"
        ], 
        "is_ode": false, 
        "module": [
            "GEX_GRN"
        ], 
        "name_alt": "v_mMBF_deg"
    }, 
    {
        "rate": "(k_Whi5_deg * Whi5)*int_vol", 
        "name": "218", 
        "x": "12.931", 
        "y": "39.472", 
        "links_to": [
            "179", 
            "180"
        ], 
        "symbol": "rect", 
        "compartments": [
            "intracellular"
        ], 
        "is_ode": false, 
        "module": [
            "GEX_GRN"
        ], 
        "name_alt": "v_Whi5_deg"
    }, 
    {
        "rate": "(k_Cln3_deg * Cln3)*int_vol", 
        "name": "219", 
        "x": "44.097", 
        "y": "43.472", 
        "links_to": [
            "168", 
            "180"
        ], 
        "symbol": "rect", 
        "compartments": [
            "intracellular"
        ], 
        "is_ode": false, 
        "module": [
            "GEX_GRN"
        ], 
        "name_alt": "v_Cln3_deg"
    }, 
    {
        "rate": "(k_Cdc14_p_deg * Cdc14_p)*int_vol", 
        "name": "220", 
        "x": "50.139", 
        "y": "53.472", 
        "links_to": [
            "173", 
            "180", 
            "175"
        ], 
        "symbol": "rect", 
        "compartments": [
            "intracellular"
        ], 
        "is_ode": false, 
        "module": [
            "GEX_GRN"
        ], 
        "name_alt": "v_Cdc14_p_deg"
    }, 
    {
        "rate": "corr_Clb3_TRSC * vmax_TRSC_Clb3 * (ATP/(kM_ATP + ATP)) * (NA/(kM_NA + NA)) * (Clb5**n_Clb3/(Kp_Clb3**n_Clb3 + Clb5**n_Clb3))*int_vol", 
        "name": "221", 
        "x": "36.542", 
        "y": "27.472", 
        "links_to": [
            "153", 
            "172", 
            "154", 
            "175", 
            "160", 
            "166"
        ], 
        "symbol": "rect", 
        "compartments": [
            "intracellular"
        ], 
        "is_ode": false, 
        "module": [
            "GEX_GRN"
        ], 
        "name_alt": "v_mClb3_TRSC"
    }, 
    {
        "rate": "(k_mCln3_deg * mCln3)*int_vol", 
        "name": "222", 
        "x": "34.208", 
        "y": "45.472", 
        "links_to": [
            "149", 
            "153"
        ], 
        "symbol": "rect", 
        "compartments": [
            "intracellular"
        ], 
        "is_ode": false, 
        "module": [
            "GEX_GRN"
        ], 
        "name_alt": "v_mCln3_deg"
    }, 
    {
        "rate": "vmax_TRSL_SBF * mSBF * (ATP/(kM_ATP + ATP)) * (AA/(kM_AA + AA)) * (ribosome/(kM_ribosome + ribosome))*int_vol", 
        "name": "223", 
        "x": "16.153", 
        "y": "41.472", 
        "links_to": [
            "180", 
            "172", 
            "175", 
            "178", 
            "160", 
            "182", 
            "177"
        ], 
        "symbol": "rect", 
        "compartments": [
            "intracellular"
        ], 
        "is_ode": false, 
        "module": [
            "GEX_GRN"
        ], 
        "name_alt": "v_mSBF_TRSL"
    }, 
    {
        "rate": "corr_MBF_TRSL * kp_MBF * mMBF * (ATP/(kM_ATP + ATP)) * (AA/(kM_AA + AA)) * (ribosome/(kM_ribosome + ribosome))*int_vol", 
        "name": "224", 
        "x": "29.153", 
        "y": "33.472", 
        "links_to": [
            "180", 
            "172", 
            "188", 
            "175", 
            "160", 
            "177", 
            "148"
        ], 
        "symbol": "rect", 
        "compartments": [
            "intracellular"
        ], 
        "is_ode": false, 
        "module": [
            "GEX_GRN"
        ], 
        "name_alt": "v_mMBF_TRSL"
    }, 
    {
        "rate": "(k_mAPC_deg * mAPC)*int_vol", 
        "name": "225", 
        "x": "31.083", 
        "y": "17.472", 
        "links_to": [
            "181", 
            "153"
        ], 
        "symbol": "rect", 
        "compartments": [
            "intracellular"
        ], 
        "is_ode": false, 
        "module": [
            "GEX_GRN"
        ], 
        "name_alt": "v_mAPC_deg"
    }, 
    {
        "rate": "(kd_Clb3 * Clb3)*int_vol", 
        "name": "226", 
        "x": "30.806", 
        "y": "23.472", 
        "links_to": [
            "163", 
            "180"
        ], 
        "symbol": "rect", 
        "compartments": [
            "intracellular"
        ], 
        "is_ode": false, 
        "module": [
            "GEX_GRN"
        ], 
        "name_alt": "v_Clb3_deg"
    }, 
    {
        "rate": "corr_Clb2_TRSL * kp_Clb2 * mClb2 * (ATP/(kM_ATP + ATP)) * (AA/(kM_AA + AA)) * (ribosome/(kM_ribosome + ribosome))*int_vol", 
        "name": "227", 
        "x": "27.694", 
        "y": "17.472", 
        "links_to": [
            "180", 
            "172", 
            "164", 
            "175", 
            "160", 
            "155", 
            "177"
        ], 
        "symbol": "rect", 
        "compartments": [
            "intracellular"
        ], 
        "is_ode": false, 
        "module": [
            "GEX_GRN"
        ], 
        "name_alt": "v_mClb2_TRSL"
    }, 
    {
        "rate": "(kd_Clb5 * Clb5)*int_vol", 
        "name": "228", 
        "x": "38.931", 
        "y": "27.472", 
        "links_to": [
            "166", 
            "180"
        ], 
        "symbol": "rect", 
        "compartments": [
            "intracellular"
        ], 
        "is_ode": false, 
        "module": [
            "GEX_GRN"
        ], 
        "name_alt": "v_Clb5_deg"
    }, 
    {
        "rate": "(k_mSBF_deg * mSBF)*int_vol", 
        "name": "229", 
        "x": "26.042", 
        "y": "41.472", 
        "links_to": [
            "182", 
            "153"
        ], 
        "symbol": "rect", 
        "compartments": [
            "intracellular"
        ], 
        "is_ode": false, 
        "module": [
            "GEX_GRN"
        ], 
        "name_alt": "v_mSBF_deg"
    }, 
    {
        "rate": "(k_mWhi5_deg * mWhi5)*int_vol", 
        "name": "230", 
        "x": "27.319", 
        "y": "41.472", 
        "links_to": [
            "147", 
            "153"
        ], 
        "symbol": "rect", 
        "compartments": [
            "intracellular"
        ], 
        "is_ode": false, 
        "module": [
            "GEX_GRN"
        ], 
        "name_alt": "v_mWhi5_deg"
    }, 
    {
        "rate": "corr_MBF_TRSC * vmax_TRSC_MBF * (ATP/(kM_ATP + ATP)) * (NA/(kM_NA + NA)) * Cln2**n1/(K_MBF**n1 + Cln2**n1)*int_vol", 
        "name": "231", 
        "x": "29.153", 
        "y": "35.472", 
        "links_to": [
            "153", 
            "172", 
            "175", 
            "160", 
            "148", 
            "169"
        ], 
        "symbol": "rect", 
        "compartments": [
            "intracellular"
        ], 
        "is_ode": false, 
        "module": [
            "GEX_GRN"
        ], 
        "name_alt": "v_mMBF_TRSC"
    }, 
    {
        "rate": "(k_Swe1_deg * Swe1)*int_vol", 
        "name": "232", 
        "x": "11.653", 
        "y": "39.472", 
        "links_to": [
            "184", 
            "180"
        ], 
        "symbol": "rect", 
        "compartments": [
            "intracellular"
        ], 
        "is_ode": false, 
        "module": [
            "GEX_GRN"
        ], 
        "name_alt": "v_Swe1_deg"
    }, 
    {
        "rate": "(kd_Clb2_APC * Clb2 * APC)*int_vol", 
        "name": "233", 
        "x": "37.708", 
        "y": "15.472", 
        "links_to": [
            "164", 
            "180", 
            "170"
        ], 
        "symbol": "rect", 
        "compartments": [
            "intracellular"
        ], 
        "is_ode": false, 
        "module": [
            "GEX_GRN"
        ], 
        "name_alt": "v_Clb2_deg_APC"
    }, 
    {
        "rate": "corr_Far1_TRSL * kp_basal_Far1 * mFar1 * (ATP/(kM_ATP + ATP)) * (AA/(kM_AA + AA)) * (ribosome/(kM_ribosome + ribosome))*int_vol", 
        "name": "234", 
        "x": "43.542", 
        "y": "41.472", 
        "links_to": [
            "180", 
            "172", 
            "175", 
            "159", 
            "160", 
            "161", 
            "177"
        ], 
        "symbol": "rect", 
        "compartments": [
            "intracellular"
        ], 
        "is_ode": false, 
        "module": [
            "GEX_GRN"
        ], 
        "name_alt": "v_mFar1_TRSL"
    }, 
    {
        "rate": "(k_mSic1_deg * mSic1)*int_vol", 
        "name": "235", 
        "x": "17.069", 
        "y": "13.472", 
        "links_to": [
            "185", 
            "153"
        ], 
        "symbol": "rect", 
        "compartments": [
            "intracellular"
        ], 
        "is_ode": false, 
        "module": [
            "GEX_GRN"
        ], 
        "name_alt": "v_mSic1_deg"
    }, 
    {
        "rate": "(k_mMcm1_deg * mMcm1)*int_vol", 
        "name": "236", 
        "x": "32.708", 
        "y": "21.472", 
        "links_to": [
            "171", 
            "153"
        ], 
        "symbol": "rect", 
        "compartments": [
            "intracellular"
        ], 
        "is_ode": false, 
        "module": [
            "GEX_GRN"
        ], 
        "name_alt": "v_mMcm1_deg"
    }, 
    {
        "rate": "(kd_Clb2 * Clb2)*int_vol", 
        "name": "237", 
        "x": "29.528", 
        "y": "15.472", 
        "links_to": [
            "164", 
            "180"
        ], 
        "symbol": "rect", 
        "compartments": [
            "intracellular"
        ], 
        "is_ode": false, 
        "module": [
            "GEX_GRN"
        ], 
        "name_alt": "v_Clb2_deg"
    }, 
    {
        "rate": "corr_Far1_TRSC * vmax_TRSC_Far1 * (ATP/(kM_ATP + ATP)) * (NA/(kM_NA + NA)) * ( ((kp_Far1/kp_basal_Far1) * Fus3) + 1 )*int_vol", 
        "name": "238", 
        "x": "38.097", 
        "y": "43.472", 
        "links_to": [
            "153", 
            "172", 
            "161", 
            "175", 
            "160", 
            "167"
        ], 
        "symbol": "rect", 
        "compartments": [
            "intracellular"
        ], 
        "is_ode": false, 
        "module": [
            "GEX_GRN"
        ], 
        "name_alt": "v_mFar1_TRSC"
    }, 
    {
        "rate": "(kd_Far1 * Far1)*int_vol", 
        "name": "239", 
        "x": "44.097", 
        "y": "39.472", 
        "links_to": [
            "159", 
            "180"
        ], 
        "symbol": "rect", 
        "compartments": [
            "intracellular"
        ], 
        "is_ode": false, 
        "module": [
            "GEX_GRN"
        ], 
        "name_alt": "v_Far1_deg"
    }, 
    {
        "rate": "corr_Mcm1_TRSL * kp_Mcm1 * mMcm1 * (ATP/(kM_ATP + ATP)) * (AA/(kM_AA + AA)) * (ribosome/(kM_ribosome + ribosome))*int_vol", 
        "name": "240", 
        "x": "36.972", 
        "y": "21.472", 
        "links_to": [
            "180", 
            "172", 
            "175", 
            "160", 
            "174", 
            "171", 
            "177"
        ], 
        "symbol": "rect", 
        "compartments": [
            "intracellular"
        ], 
        "is_ode": false, 
        "module": [
            "GEX_GRN"
        ], 
        "name_alt": "v_mMcm1_TRSL"
    }, 
    {
        "rate": "(k_mSwe1_deg * mSwe1)*int_vol", 
        "name": "241", 
        "x": "24.486", 
        "y": "41.472", 
        "links_to": [
            "158", 
            "153"
        ], 
        "symbol": "rect", 
        "compartments": [
            "intracellular"
        ], 
        "is_ode": false, 
        "module": [
            "GEX_GRN"
        ], 
        "name_alt": "v_mSwe1_deg"
    }, 
    {
        "rate": "(k_mClb2_deg * mClb2)*int_vol", 
        "name": "242", 
        "x": "29.667", 
        "y": "17.472", 
        "links_to": [
            "155", 
            "153"
        ], 
        "symbol": "rect", 
        "compartments": [
            "intracellular"
        ], 
        "is_ode": false, 
        "module": [
            "GEX_GRN"
        ], 
        "name_alt": "v_mClb2_deg"
    }, 
    {
        "rate": "(k_mCln2_deg * mCln2)*int_vol", 
        "name": "243", 
        "x": "23.264", 
        "y": "37.472", 
        "links_to": [
            "150", 
            "153"
        ], 
        "symbol": "rect", 
        "compartments": [
            "intracellular"
        ], 
        "is_ode": false, 
        "module": [
            "GEX_GRN"
        ], 
        "name_alt": "v_mCln2_deg"
    }, 
    {
        "rate": "(kd_Clb5_APC * Clb5 * APC)*int_vol", 
        "name": "244", 
        "x": "40.708", 
        "y": "15.472", 
        "links_to": [
            "166", 
            "180", 
            "170"
        ], 
        "symbol": "rect", 
        "compartments": [
            "intracellular"
        ], 
        "is_ode": false, 
        "module": [
            "GEX_GRN"
        ], 
        "name_alt": "v_Clb5_deg_APC"
    }, 
    {
        "rate": "(k_mFar1_deg * mFar1)*int_vol", 
        "name": "245", 
        "x": "37.819", 
        "y": "41.472", 
        "links_to": [
            "161", 
            "153"
        ], 
        "symbol": "rect", 
        "compartments": [
            "intracellular"
        ], 
        "is_ode": false, 
        "module": [
            "GEX_GRN"
        ], 
        "name_alt": "v_mFar1_deg"
    }, 
    {
        "rate": "corr_Clb3_TRSL * kp_Clb3 * mClb3 * (ATP/(kM_ATP + ATP)) * (AA/(kM_AA + AA)) * (ribosome/(kM_ribosome + ribosome))*int_vol", 
        "name": "246", 
        "x": "32.292", 
        "y": "25.472", 
        "links_to": [
            "180", 
            "172", 
            "163", 
            "175", 
            "160", 
            "154", 
            "177"
        ], 
        "symbol": "rect", 
        "compartments": [
            "intracellular"
        ], 
        "is_ode": false, 
        "module": [
            "GEX_GRN"
        ], 
        "name_alt": "v_mClb3_TRSL"
    }, 
    {
        "rate": "corr_Clb2_TRSC * vmax_TRSC_Clb2 * (ATP/(kM_ATP + ATP)) * (NA/(kM_NA + NA)) * Mcm1/(Kp_Clb2 + Mcm1)*int_vol", 
        "name": "247", 
        "x": "34.139", 
        "y": "19.472", 
        "links_to": [
            "153", 
            "172", 
            "155", 
            "175", 
            "160", 
            "174"
        ], 
        "symbol": "rect", 
        "compartments": [
            "intracellular"
        ], 
        "is_ode": false, 
        "module": [
            "GEX_GRN"
        ], 
        "name_alt": "v_mClb2_TRSC"
    }, 
    {
        "rate": "corr_Cln2_TRSL * kp_Cln2 * mCln2 * (ATP/(kM_ATP + ATP)) * (AA/(kM_AA + AA)) * (ribosome/(kM_ribosome + ribosome))*int_vol", 
        "name": "248", 
        "x": "19.764", 
        "y": "37.472", 
        "links_to": [
            "180", 
            "172", 
            "175", 
            "169", 
            "160", 
            "177", 
            "150"
        ], 
        "symbol": "rect", 
        "compartments": [
            "intracellular"
        ], 
        "is_ode": false, 
        "module": [
            "GEX_GRN"
        ], 
        "name_alt": "v_mCln2_TRSL"
    }, 
    {
        "rate": "(k_mSwi5_deg * mSwi5)*int_vol", 
        "name": "249", 
        "x": "25.486", 
        "y": "17.472", 
        "links_to": [
            "152", 
            "153"
        ], 
        "symbol": "rect", 
        "compartments": [
            "intracellular"
        ], 
        "is_ode": false, 
        "module": [
            "GEX_GRN"
        ], 
        "name_alt": "v_mSwi5_deg"
    }, 
    {
        "rate": "corr_Swi5_TRSC * vmax_TRSC_Swi5 * (ATP/(kM_ATP + ATP)) * (NA/(kM_NA + NA)) * Mcm1/(Kp_Swi5 + Mcm1)*int_vol", 
        "name": "250", 
        "x": "26.875", 
        "y": "19.472", 
        "links_to": [
            "153", 
            "172", 
            "152", 
            "175", 
            "160", 
            "174"
        ], 
        "symbol": "rect", 
        "compartments": [
            "intracellular"
        ], 
        "is_ode": false, 
        "module": [
            "GEX_GRN"
        ], 
        "name_alt": "v_mSwi5_TRSC"
    }, 
    {
        "rate": "(k_SBF_p_deg * SBF_p)*int_vol", 
        "name": "251", 
        "x": "26.056", 
        "y": "53.472", 
        "links_to": [
            "176", 
            "180", 
            "175"
        ], 
        "symbol": "rect", 
        "compartments": [
            "intracellular"
        ], 
        "is_ode": false, 
        "module": [
            "GEX_GRN"
        ], 
        "name_alt": "v_SBF_p_deg"
    }, 
    {
        "rate": "(kdd_Far1 * Far1 * Cln2)*int_vol", 
        "name": "252", 
        "x": "42.986", 
        "y": "35.472", 
        "links_to": [
            "159", 
            "180", 
            "169"
        ], 
        "symbol": "rect", 
        "compartments": [
            "intracellular"
        ], 
        "is_ode": false, 
        "module": [
            "GEX_GRN"
        ], 
        "name_alt": "v_Far1_deg_Cln2"
    }, 
    {
        "rate": "(kd_Sic1 * Sic1)*int_vol", 
        "name": "253", 
        "x": "7.7639", 
        "y": "11.472", 
        "links_to": [
            "162", 
            "180"
        ], 
        "symbol": "rect", 
        "compartments": [
            "intracellular"
        ], 
        "is_ode": false, 
        "module": [
            "GEX_GRN"
        ], 
        "name_alt": "v_Sic1_deg"
    }, 
    {
        "rate": "corr_Mih1_TRSL * vmax_TRSL_Mih1 * mMih1 * (ATP/(kM_ATP + ATP)) * (AA/(kM_AA + AA)) * (ribosome/(kM_ribosome + ribosome))*int_vol", 
        "name": "254", 
        "x": "21.431", 
        "y": "41.472", 
        "links_to": [
            "180", 
            "172", 
            "156", 
            "175", 
            "160", 
            "177", 
            "165"
        ], 
        "symbol": "rect", 
        "compartments": [
            "intracellular"
        ], 
        "is_ode": false, 
        "module": [
            "GEX_GRN"
        ], 
        "name_alt": "v_mMih1_TRSL"
    }, 
    {
        "rate": "corr_Mih1_TRSC * vmax_TRSC_Mih1 * (ATP/(kM_ATP + ATP)) * (NA/(kM_NA + NA))*int_vol", 
        "name": "255", 
        "x": "27.931", 
        "y": "43.472", 
        "links_to": [
            "153", 
            "172", 
            "165", 
            "175", 
            "160"
        ], 
        "symbol": "rect", 
        "compartments": [
            "intracellular"
        ], 
        "is_ode": false, 
        "module": [
            "GEX_GRN"
        ], 
        "name_alt": "v_mMih1_TRSC"
    }, 
    {
        "rate": "(kd_Mcm1 * Mcm1)*int_vol", 
        "name": "256", 
        "x": "35.417", 
        "y": "19.472", 
        "links_to": [
            "174", 
            "180"
        ], 
        "symbol": "rect", 
        "compartments": [
            "intracellular"
        ], 
        "is_ode": false, 
        "module": [
            "GEX_GRN"
        ], 
        "name_alt": "v_Mcm1_deg"
    }, 
    {
        "rate": "corr_Clb5_TRSL * kp_Clb5 * mClb5 * (ATP/(kM_ATP + ATP)) * (AA/(kM_AA + AA)) * (ribosome/(kM_ribosome + ribosome))*int_vol", 
        "name": "257", 
        "x": "40.597", 
        "y": "29.472", 
        "links_to": [
            "180", 
            "172", 
            "175", 
            "160", 
            "166", 
            "177", 
            "157"
        ], 
        "symbol": "rect", 
        "compartments": [
            "intracellular"
        ], 
        "is_ode": false, 
        "module": [
            "GEX_GRN"
        ], 
        "name_alt": "v_mClb5_TRSL"
    }, 
    {
        "rate": "corr_Swi5_TRSL * kp_Swi5 * mSwi5 * (ATP/(kM_ATP + ATP)) * (AA/(kM_AA + AA)) * (ribosome/(kM_ribosome + ribosome))*int_vol", 
        "name": "258", 
        "x": "16.597", 
        "y": "17.472", 
        "links_to": [
            "180", 
            "172", 
            "187", 
            "175", 
            "160", 
            "152", 
            "177"
        ], 
        "symbol": "rect", 
        "compartments": [
            "intracellular"
        ], 
        "is_ode": false, 
        "module": [
            "GEX_GRN"
        ], 
        "name_alt": "v_mSwi5_TRSL"
    }, 
    {
        "links_to": [
            "144", 
            "266", 
            "268", 
            "265", 
            "4"
        ], 
        "symbol": "triangle", 
        "module": [
            "GEX_TRL"
        ], 
        "name_alt": "total_ribosomes", 
        "equation": "(Ribosome +  9.4336 * mRNA_R_Ribosome +  9.4336 * mRNA_met_Ribosome +  9.4336 * mRNA_other_Ribosome) * 1e-3 * 6.022e23 * int_vol", 
        "state": "0", 
        "y": "53.472", 
        "x": "56", 
        "annotation": "YCM:ribosomes_check", 
        "compartment": "intracellular", 
        "is_ode": false, 
        "name": "259"
    }, 
    {
        "links_to": [
            "272", 
            "279", 
            "280"
        ], 
        "symbol": "circle", 
        "module": [
            "GEX_TRL"
        ], 
        "name_alt": "P_i", 
        "state": "-2", 
        "y": "46.472", 
        "x": "55.986", 
        "annotation": "CHEBI:43474", 
        "compartment": "intracellular", 
        "is_ode": false, 
        "name": "260"
    }, 
    {
        "links_to": [
            "271", 
            "274"
        ], 
        "symbol": "circle", 
        "module": [
            "GEX_TRL"
        ], 
        "name_alt": "mRNA_met", 
        "state": "0", 
        "y": "52.472", 
        "x": "47.764", 
        "annotation": "YCM:mRNA_metabolic", 
        "compartment": "intracellular", 
        "is_ode": false, 
        "name": "261"
    }, 
    {
        "links_to": [
            "269", 
            "276"
        ], 
        "symbol": "circle", 
        "module": [
            "GEX_TRL"
        ], 
        "name_alt": "mRNA_other", 
        "state": "0", 
        "y": "52.472", 
        "x": "54.931", 
        "annotation": "YCM:mRNA_other", 
        "compartment": "intracellular", 
        "is_ode": false, 
        "name": "262"
    }, 
    {
        "links_to": [
            "277", 
            "278"
        ], 
        "symbol": "circle", 
        "module": [
            "GEX_TRL"
        ], 
        "name_alt": "mRNA_R", 
        "state": "0", 
        "y": "52.472", 
        "x": "57.278", 
        "annotation": "YCM:mRNA_R", 
        "compartment": "intracellular", 
        "is_ode": false, 
        "name": "263"
    }, 
    {
        "links_to": [
            "270", 
            "280"
        ], 
        "symbol": "circle", 
        "module": [
            "GEX_TRL"
        ], 
        "name_alt": "B_Protein_met", 
        "state": "0", 
        "y": "46.472", 
        "x": "53.708", 
        "annotation": "YCM:B_Protein_metabolic", 
        "compartment": "intracellular", 
        "is_ode": false, 
        "name": "264"
    }, 
    {
        "links_to": [
            "269", 
            "276", 
            "279", 
            "259"
        ], 
        "symbol": "circle", 
        "module": [
            "GEX_TRL"
        ], 
        "name_alt": "mRNA_other_Ribosome", 
        "state": "0", 
        "y": "54.472", 
        "x": "54.722", 
        "annotation": "YCM:mRNA_other_Ribosome", 
        "compartment": "intracellular", 
        "is_ode": false, 
        "name": "265"
    }, 
    {
        "links_to": [
            "272", 
            "277", 
            "278", 
            "259"
        ], 
        "symbol": "circle", 
        "module": [
            "GEX_TRL"
        ], 
        "name_alt": "mRNA_R_Ribosome", 
        "state": "0", 
        "y": "54.472", 
        "x": "57", 
        "annotation": "YCM:mRNA_R_Ribosome", 
        "compartment": "intracellular", 
        "is_ode": false, 
        "name": "266"
    }, 
    {
        "links_to": [
            "275", 
            "279"
        ], 
        "symbol": "circle", 
        "module": [
            "GEX_TRL"
        ], 
        "name_alt": "B_Protein_other", 
        "state": "0", 
        "y": "46.472", 
        "x": "54.986", 
        "annotation": "YCM:B_Protein_other", 
        "compartment": "intracellular", 
        "is_ode": false, 
        "name": "267"
    }, 
    {
        "links_to": [
            "271", 
            "274", 
            "280", 
            "259"
        ], 
        "symbol": "circle", 
        "module": [
            "GEX_TRL"
        ], 
        "name_alt": "mRNA_met_Ribosome", 
        "state": "0", 
        "y": "54.472", 
        "x": "50.889", 
        "annotation": "YCM:mRNA_met_Ribosome", 
        "compartment": "intracellular", 
        "is_ode": false, 
        "name": "268"
    }, 
    {
        "rate": "(k_ASS_Ribosome_mRNA_other * Ribosome * mRNA_other)*int_vol", 
        "name": "269", 
        "x": "54.444", 
        "y": "55.472", 
        "links_to": [
            "144", 
            "262", 
            "265"
        ], 
        "symbol": "rect", 
        "compartments": [
            "intracellular"
        ], 
        "is_ode": false, 
        "module": [
            "GEX_TRL"
        ], 
        "name_alt": "v_ASS_Ribosome_mRNA_other"
    }, 
    {
        "rate": "(k_DEG_B_Protein_met * B_Protein_met)*int_vol", 
        "name": "270", 
        "x": "53.708", 
        "y": "45.472", 
        "links_to": [
            "264", 
            "180"
        ], 
        "symbol": "rect", 
        "compartments": [
            "intracellular"
        ], 
        "is_ode": false, 
        "module": [
            "GEX_TRL"
        ], 
        "name_alt": "v_DEG_B_Protein_met"
    }, 
    {
        "rate": "(k_ASS_Ribosome_mRNA_met * Ribosome * mRNA_met)*int_vol", 
        "name": "271", 
        "x": "50.889", 
        "y": "55.472", 
        "links_to": [
            "261", 
            "144", 
            "268"
        ], 
        "symbol": "rect", 
        "compartments": [
            "intracellular"
        ], 
        "is_ode": false, 
        "module": [
            "GEX_TRL"
        ], 
        "name_alt": "v_ASS_Ribosome_mRNA_met"
    }, 
    {
        "rate": "(vmax_TRSL_mRNA_R * (ATP/(k_atp + ATP)) * (AA/(k_aa + AA)) * (mRNA_R_Ribosome/(k_TRSL_mRNA_R + mRNA_R_Ribosome)))*int_vol", 
        "name": "272", 
        "x": "55.986", 
        "y": "47.472", 
        "links_to": [
            "180", 
            "172", 
            "143", 
            "160", 
            "260", 
            "266"
        ], 
        "symbol": "rect", 
        "compartments": [
            "intracellular"
        ], 
        "is_ode": false, 
        "module": [
            "GEX_TRL"
        ], 
        "name_alt": "v_TRSL_mRNA_R"
    }, 
    {
        "rate": "(k_DEG_B_Protein_R * B_Protein_R)*int_vol", 
        "name": "273", 
        "x": "51.639", 
        "y": "53.472", 
        "links_to": [
            "143", 
            "180"
        ], 
        "symbol": "rect", 
        "compartments": [
            "intracellular"
        ], 
        "is_ode": false, 
        "module": [
            "GEX_TRL"
        ], 
        "name_alt": "v_DEG_B_Protein_R"
    }, 
    {
        "rate": "(k_DIS_Ribosome_mRNA_met * mRNA_met_Ribosome)*int_vol", 
        "name": "274", 
        "x": "49.139", 
        "y": "53.472", 
        "links_to": [
            "268", 
            "261", 
            "144"
        ], 
        "symbol": "rect", 
        "compartments": [
            "intracellular"
        ], 
        "is_ode": false, 
        "module": [
            "GEX_TRL"
        ], 
        "name_alt": "v_DIS_Ribosome_mRNA_met"
    }, 
    {
        "rate": "(k_DEG_B_Protein_other * B_Protein_other)*int_vol", 
        "name": "275", 
        "x": "55.625", 
        "y": "45.472", 
        "links_to": [
            "267", 
            "180"
        ], 
        "symbol": "rect", 
        "compartments": [
            "intracellular"
        ], 
        "is_ode": false, 
        "module": [
            "GEX_TRL"
        ], 
        "name_alt": "v_DEG_B_Protein_other"
    }, 
    {
        "rate": "(k_DIS_Ribosome_mRNA_other * mRNA_other_Ribosome)*int_vol", 
        "name": "276", 
        "x": "54.722", 
        "y": "53.472", 
        "links_to": [
            "265", 
            "144", 
            "262"
        ], 
        "symbol": "rect", 
        "compartments": [
            "intracellular"
        ], 
        "is_ode": false, 
        "module": [
            "GEX_TRL"
        ], 
        "name_alt": "v_DIS_Ribosome_mRNA_other"
    }, 
    {
        "rate": "(k_ASS_Ribosome_mRNA_R * Ribosome * mRNA_R)*int_vol", 
        "name": "277", 
        "x": "57", 
        "y": "55.472", 
        "links_to": [
            "144", 
            "263", 
            "266"
        ], 
        "symbol": "rect", 
        "compartments": [
            "intracellular"
        ], 
        "is_ode": false, 
        "module": [
            "GEX_TRL"
        ], 
        "name_alt": "v_ASS_Ribosome_mRNA_R"
    }, 
    {
        "rate": "(k_DIS_Ribosome_mRNA_R * mRNA_R_Ribosome)*int_vol", 
        "name": "278", 
        "x": "57.278", 
        "y": "53.472", 
        "links_to": [
            "266", 
            "144", 
            "263"
        ], 
        "symbol": "rect", 
        "compartments": [
            "intracellular"
        ], 
        "is_ode": false, 
        "module": [
            "GEX_TRL"
        ], 
        "name_alt": "v_DIS_Ribosome_mRNA_R"
    }, 
    {
        "rate": "(vmax_TRSL_mRNA_other * (ATP/(k_atp + ATP)) * (AA/(k_aa + AA)) * (mRNA_other_Ribosome/(k_TRSL_mRNA_other + mRNA_other_Ribosome)))*int_vol", 
        "name": "279", 
        "x": "54.986", 
        "y": "47.472", 
        "links_to": [
            "180", 
            "172", 
            "267", 
            "160", 
            "260", 
            "265"
        ], 
        "symbol": "rect", 
        "compartments": [
            "intracellular"
        ], 
        "is_ode": false, 
        "module": [
            "GEX_TRL"
        ], 
        "name_alt": "v_TRSL_mRNA_other"
    }, 
    {
        "rate": "(vmax_TRSL_mRNA_met * (ATP/(k_atp + ATP)) * (AA/(k_aa + AA)) * (mRNA_met_Ribosome/(k_TRSL_mRNA_met + mRNA_met_Ribosome)))*int_vol", 
        "name": "280", 
        "x": "53.708", 
        "y": "47.472", 
        "links_to": [
            "180", 
            "172", 
            "264", 
            "160", 
            "260", 
            "268"
        ], 
        "symbol": "rect", 
        "compartments": [
            "intracellular"
        ], 
        "is_ode": false, 
        "module": [
            "GEX_TRL"
        ], 
        "name_alt": "v_TRSL_mRNA_met"
    }, 
    {
        "links_to": [
            "307", 
            "308", 
            "310", 
            "315", 
            "318", 
            "319"
        ], 
        "symbol": "circle", 
        "module": [
            "MET_CCM"
        ], 
        "name_alt": "NADH", 
        "state": "-2", 
        "y": "10.472", 
        "x": "38.125", 
        "annotation": "CHEBI:57945", 
        "compartment": "intracellular", 
        "is_ode": false, 
        "name": "281"
    }, 
    {
        "links_to": [
            "317", 
            "336"
        ], 
        "symbol": "circle", 
        "module": [
            "MET_CCM", 
            "MET_CWS"
        ], 
        "name_alt": "mannan", 
        "state": "0", 
        "y": "12.472", 
        "x": "48.875", 
        "annotation": "CHEBI:28808", 
        "compartment": "intracellular", 
        "is_ode": false, 
        "name": "282"
    }, 
    {
        "links_to": [
            "307", 
            "308", 
            "310", 
            "315", 
            "318", 
            "319"
        ], 
        "symbol": "circle", 
        "module": [
            "MET_CCM"
        ], 
        "name_alt": "NAD", 
        "state": "-1", 
        "y": "8.4722", 
        "x": "27.028", 
        "annotation": "CHEBI:57540", 
        "compartment": "intracellular", 
        "is_ode": false, 
        "name": "283"
    }, 
    {
        "links_to": [
            "315"
        ], 
        "symbol": "circle", 
        "module": [
            "MET_CCM"
        ], 
        "name_alt": "pyr_check", 
        "state": "-1", 
        "y": "6.4722", 
        "x": "37.986", 
        "annotation": "YCM:pyr_check", 
        "compartment": "intracellular", 
        "is_ode": false, 
        "name": "284"
    }, 
    {
        "links_to": [
            "309", 
            "312", 
            "316"
        ], 
        "symbol": "circle", 
        "module": [
            "MET_CCM"
        ], 
        "name_alt": "NA_RNA", 
        "state": "0", 
        "y": "2.4722", 
        "x": "45.764", 
        "annotation": "YCM:NA_RNA", 
        "compartment": "intracellular", 
        "is_ode": false, 
        "name": "285"
    }, 
    {
        "links_to": [
            "320"
        ], 
        "symbol": "circle", 
        "module": [
            "MET_CCM"
        ], 
        "name_alt": "TriP_check", 
        "state": "-2", 
        "y": "12.472", 
        "x": "43.931", 
        "annotation": "YCM:TriP_check", 
        "compartment": "intracellular", 
        "is_ode": false, 
        "name": "286"
    }, 
    {
        "links_to": [
            "319"
        ], 
        "symbol": "circle", 
        "module": [
            "MET_CCM"
        ], 
        "name_alt": "EtOH_check", 
        "state": "0", 
        "y": "8.4722", 
        "x": "39.542", 
        "annotation": "YCM:EtOH_check", 
        "compartment": "intracellular", 
        "is_ode": false, 
        "name": "287"
    }, 
    {
        "links_to": [
            "319", 
            "419"
        ], 
        "symbol": "circle", 
        "module": [
            "MET_CCM", 
            "TRP_NUT"
        ], 
        "name_alt": "EtOH", 
        "state": "0", 
        "y": "8.4722", 
        "x": "43.819", 
        "annotation": "CHEBI:16236", 
        "compartment": "intracellular", 
        "is_ode": false, 
        "name": "288"
    }, 
    {
        "links_to": [
            "304", 
            "305", 
            "306", 
            "309", 
            "313", 
            "314", 
            "317", 
            "320"
        ], 
        "symbol": "circle", 
        "module": [
            "MET_CCM"
        ], 
        "name_alt": "HexP", 
        "state": "-2", 
        "y": "14.472", 
        "x": "46.333", 
        "annotation": "CHEBI:58225", 
        "compartment": "intracellular", 
        "is_ode": false, 
        "name": "289"
    }, 
    {
        "links_to": [
            "307"
        ], 
        "symbol": "circle", 
        "module": [
            "MET_CCM"
        ], 
        "name_alt": "O2_check", 
        "state": "0", 
        "y": "50.472", 
        "x": "6.4306", 
        "annotation": "YCM:O2_check", 
        "compartment": "intracellular", 
        "is_ode": false, 
        "name": "290"
    }, 
    {
        "links_to": [
            "313"
        ], 
        "symbol": "circle", 
        "module": [
            "MET_CCM", 
            "MET_CWS"
        ], 
        "name_alt": "lipid", 
        "state": "0", 
        "y": "4.4722", 
        "x": "47.042", 
        "annotation": "YCM:lipid", 
        "compartment": "intracellular", 
        "is_ode": false, 
        "name": "291"
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
            "MET_CCM"
        ], 
        "name_alt": "H", 
        "state": "+1", 
        "y": "0.47222", 
        "x": "46.403", 
        "annotation": "CHEBI:24636", 
        "compartment": "intracellular", 
        "is_ode": false, 
        "name": "292"
    }, 
    {
        "links_to": [
            "304", 
            "309", 
            "313", 
            "315", 
            "318", 
            "319"
        ], 
        "symbol": "circle", 
        "module": [
            "MET_CCM"
        ], 
        "name_alt": "pyr", 
        "state": "-1", 
        "y": "6.4722", 
        "x": "41.458", 
        "annotation": "CHEBI:15361", 
        "compartment": "intracellular", 
        "is_ode": false, 
        "name": "293"
    }, 
    {
        "links_to": [
            "314"
        ], 
        "symbol": "circle", 
        "module": [
            "MET_CCM"
        ], 
        "name_alt": "Glc", 
        "state": "0", 
        "y": "48.472", 
        "x": "42.708", 
        "annotation": "CHEBI:17634", 
        "compartment": "intracellular", 
        "is_ode": false, 
        "name": "294"
    }, 
    {
        "links_to": [
            "318", 
            "319"
        ], 
        "symbol": "circle", 
        "module": [
            "MET_CCM"
        ], 
        "name_alt": "CO2_check", 
        "state": "0", 
        "y": "8.4722", 
        "x": "40.819", 
        "annotation": "YCM:CO2_check", 
        "compartment": "intracellular", 
        "is_ode": false, 
        "name": "295"
    }, 
    {
        "links_to": [
            "305", 
            "338"
        ], 
        "symbol": "circle", 
        "module": [
            "MET_CCM", 
            "MET_CWS"
        ], 
        "name_alt": "chitin", 
        "state": "0", 
        "y": "12.472", 
        "x": "60.014", 
        "annotation": "CHEBI:17029", 
        "compartment": "intracellular", 
        "is_ode": false, 
        "name": "296"
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
        "name_alt": "NH4", 
        "state": "+1", 
        "y": "14.472", 
        "x": "48.792", 
        "annotation": "CHEBI:28938", 
        "compartment": "intracellular", 
        "is_ode": false, 
        "name": "297"
    }, 
    {
        "links_to": [
            "308"
        ], 
        "symbol": "circle", 
        "module": [
            "MET_CCM"
        ], 
        "name_alt": "glycerol", 
        "state": "0", 
        "y": "2.4722", 
        "x": "23.944", 
        "annotation": "CHEBI:17754", 
        "compartment": "intracellular", 
        "is_ode": false, 
        "name": "298"
    }, 
    {
        "links_to": [
            "306", 
            "337"
        ], 
        "symbol": "circle", 
        "module": [
            "MET_CCM", 
            "MET_CWS"
        ], 
        "name_alt": "glucan", 
        "state": "0", 
        "y": "12.472", 
        "x": "49.875", 
        "annotation": "CHEBI:37671", 
        "compartment": "intracellular", 
        "is_ode": false, 
        "name": "299"
    }, 
    {
        "links_to": [
            "304", 
            "308", 
            "309", 
            "313", 
            "315", 
            "320"
        ], 
        "symbol": "circle", 
        "module": [
            "MET_CCM"
        ], 
        "name_alt": "TriP", 
        "state": "-2", 
        "y": "4.4722", 
        "x": "42.458", 
        "annotation": "CHEBI:58027", 
        "compartment": "intracellular", 
        "is_ode": false, 
        "name": "300"
    }, 
    {
        "links_to": [
            "318", 
            "319", 
            "421"
        ], 
        "symbol": "circle", 
        "module": [
            "MET_CCM", 
            "TRP_NUT"
        ], 
        "name_alt": "CO2", 
        "state": "0", 
        "y": "8.4722", 
        "x": "42.097", 
        "annotation": "CHEBI:16526", 
        "compartment": "intracellular", 
        "is_ode": false, 
        "name": "301"
    }, 
    {
        "links_to": [
            "314"
        ], 
        "symbol": "circle", 
        "module": [
            "MET_CCM"
        ], 
        "name_alt": "HexP_check", 
        "state": "-2", 
        "y": "46.472", 
        "x": "43.264", 
        "annotation": "YCM:HexP_check", 
        "compartment": "intracellular", 
        "is_ode": false, 
        "name": "302"
    }, 
    {
        "links_to": [
            "312"
        ], 
        "symbol": "circle", 
        "module": [
            "MET_CCM"
        ], 
        "name_alt": "NA_DNA", 
        "state": "0", 
        "y": "0.47222", 
        "x": "49.153", 
        "annotation": "YCM:NA_DNA", 
        "compartment": "intracellular", 
        "is_ode": false, 
        "name": "303"
    }, 
    {
        "rate": "(E_v_AA_f * ((kf_v_AA_f * (NH4/Km_v_AA_f_NH4) * (HexP/Km_v_AA_f_HexP) * (pyr/Km_v_AA_f_pyr) * (ATP/Km_v_AA_f_ATP) - kr_v_AA_f * (AA/Km_v_AA_f_AA) * (Pi/Km_v_AA_f_Pi) * (ADP/Km_v_AA_f_ADP) * (TriP/Km_v_AA_f_TriP))/((1+(NH4/Km_v_AA_f_NH4))*(1+(HexP/Km_v_AA_f_HexP))*(1+(pyr/Km_v_AA_f_pyr))*(1+(ATP/Km_v_AA_f_ATP)) + (1+(AA/Km_v_AA_f_AA))*(1+(Pi/Km_v_AA_f_Pi))*(1+(ADP/Km_v_AA_f_ADP))*(1+(TriP/Km_v_AA_f_TriP)) - 1)) * int_vol)", 
        "name": "304", 
        "x": "41.458", 
        "y": "5.4722", 
        "links_to": [
            "289", 
            "293", 
            "172", 
            "297", 
            "180", 
            "292", 
            "175", 
            "300", 
            "160"
        ], 
        "symbol": "rect", 
        "compartments": [
            "intracellular"
        ], 
        "is_ode": false, 
        "module": [
            "MET_CCM"
        ], 
        "name_alt": "v_AA_f"
    }, 
    {
        "rate": "(E_v_chitin_f * ((kf_v_chitin_f * (NH4/Km_v_chitin_f_NH4) * (HexP/Km_v_chitin_f_HexP) * (ATP/Km_v_chitin_f_ATP) - kr_v_chitin_f * (Pi/Km_v_chitin_f_Pi) * (chitin/Km_v_chitin_f_chitin) * (ADP/Km_v_chitin_f_ADP))/((1+(NH4/Km_v_chitin_f_NH4))*(1+(HexP/Km_v_chitin_f_HexP))*(1+(ATP/Km_v_chitin_f_ATP)) + (1+(Pi/Km_v_chitin_f_Pi))*(1+(chitin/Km_v_chitin_f_chitin))*(1+(ADP/Km_v_chitin_f_ADP)) - 1)) * int_vol)", 
        "name": "305", 
        "x": "49.431", 
        "y": "13.472", 
        "links_to": [
            "289", 
            "172", 
            "297", 
            "292", 
            "175", 
            "296", 
            "160"
        ], 
        "symbol": "rect", 
        "compartments": [
            "intracellular"
        ], 
        "is_ode": false, 
        "module": [
            "MET_CCM"
        ], 
        "name_alt": "v_chitin_f"
    }, 
    {
        "rate": "(E_glucan * ((kf_glucan * (HexP/Km_glucan_HexP)*(ATP/Km_glucan_ATP) - kr_glucan * (glucan/Km_glucan_glucan)*(ADP/Km_glucan_ADP)*(Pi/Km_glucan_Pi))/((1+(HexP/Km_glucan_HexP))*(1+(ATP/Km_glucan_ATP)) + (1+(glucan/Km_glucan_glucan))*(1+(ADP/Km_glucan_ADP))*(1+(Pi/Km_glucan_Pi)) - 1)) * int_vol)", 
        "name": "306", 
        "x": "47.042", 
        "y": "13.472", 
        "links_to": [
            "289", 
            "172", 
            "175", 
            "160", 
            "299"
        ], 
        "symbol": "rect", 
        "compartments": [
            "intracellular"
        ], 
        "is_ode": false, 
        "module": [
            "MET_CCM"
        ], 
        "name_alt": "v_glucan_f"
    }, 
    {
        "rate": "(((1./(1.+ exp(k1_resp*(ATP - ATPcrit)))) * kf_resp * NADH * ADP * Pi) * int_vol)", 
        "name": "307", 
        "x": "6.7083", 
        "y": "49.472", 
        "links_to": [
            "281", 
            "290", 
            "175", 
            "160", 
            "283", 
            "172"
        ], 
        "symbol": "rect", 
        "compartments": [
            "intracellular"
        ], 
        "is_ode": false, 
        "module": [
            "MET_CCM"
        ], 
        "name_alt": "v_resp"
    }, 
    {
        "rate": "(E_v_glycerol_syn * ((kf_v_glycerol_syn * (NADH/Km_v_glycerol_syn_NADH) * (TriP/Km_v_glycerol_syn_TriP) - kr_v_glycerol_syn * (Pi/Km_v_glycerol_syn_Pi) * (glycerol/Km_v_glycerol_syn_glycerol) * (NAD/Km_v_glycerol_syn_NAD))/((1+(NADH/Km_v_glycerol_syn_NADH))*(1+(TriP/Km_v_glycerol_syn_TriP)) + (1+(Pi/Km_v_glycerol_syn_Pi))*(1+(glycerol/Km_v_glycerol_syn_glycerol))*(1+(NAD/Km_v_glycerol_syn_NAD)) - 1)) * int_vol)", 
        "name": "308", 
        "x": "23.944", 
        "y": "3.4722", 
        "links_to": [
            "281", 
            "300", 
            "175", 
            "298", 
            "283"
        ], 
        "symbol": "rect", 
        "compartments": [
            "intracellular"
        ], 
        "is_ode": false, 
        "module": [
            "MET_CCM"
        ], 
        "name_alt": "v_glycerol_syn"
    }, 
    {
        "rate": "(E_v_NA_RNA_f * ((kf_v_NA_RNA_f * (NH4/Km_v_NA_RNA_f_NH4) * (HexP/Km_v_NA_RNA_f_HexP) * (pyr/Km_v_NA_RNA_f_pyr) * (ATP/Km_v_NA_RNA_f_ATP) * (TriP/Km_v_NA_RNA_f_TriP) - kr_v_NA_RNA_f * (Pi/Km_v_NA_RNA_f_Pi) * (NA_RNA/Km_v_NA_RNA_f_NA_RNA) * (ADP/Km_v_NA_RNA_f_ADP))/((1+(NH4/Km_v_NA_RNA_f_NH4))*(1+(HexP/Km_v_NA_RNA_f_HexP))*(1+(pyr/Km_v_NA_RNA_f_pyr))*(1+(ATP/Km_v_NA_RNA_f_ATP))*(1+(TriP/Km_v_NA_RNA_f_TriP)) + (1+(Pi/Km_v_NA_RNA_f_Pi))*(1+(NA_RNA/Km_v_NA_RNA_f_NA_RNA))*(1+(ADP/Km_v_NA_RNA_f_ADP)) - 1)) * int_vol)", 
        "name": "309", 
        "x": "45.569", 
        "y": "3.4722", 
        "links_to": [
            "289", 
            "293", 
            "300", 
            "172", 
            "297", 
            "292", 
            "175", 
            "285", 
            "160"
        ], 
        "symbol": "rect", 
        "compartments": [
            "intracellular"
        ], 
        "is_ode": false, 
        "module": [
            "MET_CCM"
        ], 
        "name_alt": "v_NA_RNA_f"
    }, 
    {
        "rate": "(((1./(1.+ exp(k1_NAD_syn*((NAD+NADH) - NADNADHcrit)))) * kf_NAD_syn * AA * ADP) * int_vol)", 
        "name": "310", 
        "x": "21.556", 
        "y": "9.4722", 
        "links_to": [
            "180", 
            "160", 
            "283", 
            "281"
        ], 
        "symbol": "rect", 
        "compartments": [
            "intracellular"
        ], 
        "is_ode": false, 
        "module": [
            "MET_CCM"
        ], 
        "name_alt": "v_NAD_syn"
    }, 
    {
        "rate": "((0.5 * ATP) * int_vol)", 
        "name": "311", 
        "x": "41.986", 
        "y": "47.472", 
        "links_to": [
            "172", 
            "175", 
            "160"
        ], 
        "symbol": "rect", 
        "compartments": [
            "intracellular"
        ], 
        "is_ode": false, 
        "module": [
            "MET_CCM"
        ], 
        "name_alt": "v_ATP_con"
    }, 
    {
        "rate": "(E_v_NA_DNA_syn * ((kf_v_NA_DNA_syn * (NH4/Km_v_NA_DNA_syn_NH4) * (NA_RNA/Km_v_NA_DNA_syn_NA_RNA) - kr_v_NA_DNA_syn * (NA_DNA/Km_v_NA_DNA_syn_NA_DNA))/((1+(NH4/Km_v_NA_DNA_syn_NH4))*(1+(NA_RNA/Km_v_NA_DNA_syn_NA_RNA)) + (1+(NA_DNA/Km_v_NA_DNA_syn_NA_DNA)) - 1)) * int_vol)", 
        "name": "312", 
        "x": "49.153", 
        "y": "1.4722", 
        "links_to": [
            "297", 
            "285", 
            "292", 
            "303"
        ], 
        "symbol": "rect", 
        "compartments": [
            "intracellular"
        ], 
        "is_ode": false, 
        "module": [
            "MET_CCM"
        ], 
        "name_alt": "v_NA_DNA_syn"
    }, 
    {
        "rate": "(E_v_lipid_f * ((kf_v_lipid_f * (NH4/Km_v_lipid_f_NH4) * (HexP/Km_v_lipid_f_HexP) * (pyr/Km_v_lipid_f_pyr) * (ATP/Km_v_lipid_f_ATP) - kr_v_lipid_f * (Pi/Km_v_lipid_f_Pi) * (lipid/Km_v_lipid_f_lipid) * (ADP/Km_v_lipid_f_ADP) * (TriP/Km_v_lipid_f_TriP))/((1+(NH4/Km_v_lipid_f_NH4))*(1+(HexP/Km_v_lipid_f_HexP))*(1+(pyr/Km_v_lipid_f_pyr))*(1+(ATP/Km_v_lipid_f_ATP)) + (1+(Pi/Km_v_lipid_f_Pi))*(1+(lipid/Km_v_lipid_f_lipid))*(1+(ADP/Km_v_lipid_f_ADP))*(1+(TriP/Km_v_lipid_f_TriP)) - 1)) * int_vol)", 
        "name": "313", 
        "x": "46.403", 
        "y": "5.4722", 
        "links_to": [
            "289", 
            "293", 
            "172", 
            "297", 
            "292", 
            "175", 
            "291", 
            "160", 
            "300"
        ], 
        "symbol": "rect", 
        "compartments": [
            "intracellular"
        ], 
        "is_ode": false, 
        "module": [
            "MET_CCM"
        ], 
        "name_alt": "v_lipid_f"
    }, 
    {
        "rate": "(E_v_HK * ((kf_v_HK * (Glc/Km_v_HK_Glc) * (ATP/Km_v_HK_ATP) - kr_v_HK * (HexP/Km_v_HK_HexP) * (ADP/Km_v_HK_ADP))/((1+(Glc/Km_v_HK_Glc))*(1+(ATP/Km_v_HK_ATP)) + (1+(HexP/Km_v_HK_HexP))*(1+(ADP/Km_v_HK_ADP)) - 1)) * int_vol)", 
        "name": "314", 
        "x": "42.986", 
        "y": "47.472", 
        "links_to": [
            "294", 
            "172", 
            "289", 
            "302", 
            "160"
        ], 
        "symbol": "rect", 
        "compartments": [
            "intracellular"
        ], 
        "is_ode": false, 
        "module": [
            "MET_CCM"
        ], 
        "name_alt": "v_HK"
    }, 
    {
        "rate": "(E_pyr * ((kf_pyr * (Pi/Km_pyr_Pi) * (NAD/Km_pyr_NAD) * (ADP/Km_pyr_ADP)**2.0 * (TriP/Km_pyr_TriP) - kr_pyr * (pyr/Km_pyr_pyr) * (NADH/Km_pyr_NADH) * (ATP/Km_pyr_ATP)**2.0)/((1+(Pi/Km_pyr_Pi))*(1+(NAD/Km_pyr_NAD))*(1+(ADP/Km_pyr_ADP)**1+(ADP/Km_pyr_ADP)**2)*(1+(TriP/Km_pyr_TriP)) + (1+(pyr/Km_pyr_pyr))*(1+(NADH/Km_pyr_NADH))*(1+(ATP/Km_pyr_ATP)**1+(ATP/Km_pyr_ATP)**2) - 1)) * int_vol)", 
        "name": "315", 
        "x": "37.986", 
        "y": "7.4722", 
        "links_to": [
            "283", 
            "175", 
            "300", 
            "160", 
            "293", 
            "281", 
            "284", 
            "172"
        ], 
        "symbol": "rect", 
        "compartments": [
            "intracellular"
        ], 
        "is_ode": false, 
        "module": [
            "MET_CCM"
        ], 
        "name_alt": "v_pyr"
    }, 
    {
        "rate": "(((1./(1.+ exp(k1_ADP_syn*((ATP+ADP) - ATPADPcrit)))) * kf_ADP_syn * NA_RNA * Pi**2) * int_vol)", 
        "name": "316", 
        "x": "7.4306", 
        "y": "1.4722", 
        "links_to": [
            "175", 
            "285", 
            "160", 
            "172"
        ], 
        "symbol": "rect", 
        "compartments": [
            "intracellular"
        ], 
        "is_ode": false, 
        "module": [
            "MET_CCM"
        ], 
        "name_alt": "v_ADP_syn"
    }, 
    {
        "rate": "(E_mannan * ((kf_mannan * (HexP/Km_mannan_HexP)*(ATP/Km_mannan_ATP) - kr_mannan * (mannan/Km_mannan_mannan)*(ADP/Km_mannan_ADP)*(Pi/Km_mannan_Pi))/((1+(HexP/Km_mannan_HexP))*(1+(ATP/Km_mannan_ATP)) + (1+(mannan/Km_mannan_mannan))*(1+(ADP/Km_mannan_ADP))*(1+(Pi/Km_mannan_Pi)) - 1)) * int_vol)", 
        "name": "317", 
        "x": "45.208", 
        "y": "13.472", 
        "links_to": [
            "289", 
            "172", 
            "175", 
            "282", 
            "160"
        ], 
        "symbol": "rect", 
        "compartments": [
            "intracellular"
        ], 
        "is_ode": false, 
        "module": [
            "MET_CCM"
        ], 
        "name_alt": "v_mannan_f"
    }, 
    {
        "rate": "((kf_TCA * pyr * NAD * ADP * Pi) * int_vol)", 
        "name": "318", 
        "x": "41.319", 
        "y": "11.472", 
        "links_to": [
            "293", 
            "175", 
            "160", 
            "283", 
            "281", 
            "295", 
            "301", 
            "172"
        ], 
        "symbol": "rect", 
        "compartments": [
            "intracellular"
        ], 
        "is_ode": false, 
        "module": [
            "MET_CCM"
        ], 
        "name_alt": "v_TCA"
    }, 
    {
        "rate": "(E_ferm * ((kf_ferm * (pyr/Km_ferm_pyr) * (NADH/Km_ferm_NADH) - kr_ferm * (CO2/Km_ferm_CO2) * (NAD/Km_ferm_NAD) * (EtOH/Km_ferm_EtOH))/((1+(pyr/Km_ferm_pyr))*(1+(NADH/Km_ferm_NADH)) + (1+(CO2/Km_ferm_CO2))*(1+(NAD/Km_ferm_NAD))*(1+(EtOH/Km_ferm_EtOH)) - 1)) * int_vol)", 
        "name": "319", 
        "x": "40.181", 
        "y": "9.4722", 
        "links_to": [
            "293", 
            "281", 
            "283", 
            "301", 
            "295", 
            "287", 
            "288"
        ], 
        "symbol": "rect", 
        "compartments": [
            "intracellular"
        ], 
        "is_ode": false, 
        "module": [
            "MET_CCM"
        ], 
        "name_alt": "v_ferm"
    }, 
    {
        "rate": "(E_TriP * ((kf_TriP * (HexP/Km_TriP_HexP) * (ATP/Km_TriP_ATP) - kr_TriP * (ADP/Km_TriP_ADP) * (TriP/Km_TriP_TriP)**2.0)/((1+(HexP/Km_TriP_HexP))*(1+(ATP/Km_TriP_ATP)) + (1+(ADP/Km_TriP_ADP))*(1+(TriP/Km_TriP_TriP)**1+(TriP/Km_TriP_TriP)**2) - 1)) * int_vol)", 
        "name": "320", 
        "x": "43.653", 
        "y": "13.472", 
        "links_to": [
            "289", 
            "172", 
            "286", 
            "300", 
            "160"
        ], 
        "symbol": "rect", 
        "compartments": [
            "intracellular"
        ], 
        "is_ode": false, 
        "module": [
            "MET_CCM"
        ], 
        "name_alt": "v_TriP"
    }, 
    {
        "links_to": [
            "324", 
            "325", 
            "326"
        ], 
        "symbol": "circle", 
        "module": [
            "MET_DNA"
        ], 
        "name_alt": "A", 
        "state": "0", 
        "y": "26.472", 
        "x": "2.6806", 
        "annotation": "YCM:A", 
        "compartment": "nucleus", 
        "is_ode": false, 
        "name": "321"
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
        "name_alt": "DNA", 
        "state": "0", 
        "y": "26.472", 
        "x": "1.6806", 
        "annotation": "YCM:DNA", 
        "compartment": "nucleus", 
        "is_ode": false, 
        "name": "322"
    }, 
    {
        "links_to": [
            "325"
        ], 
        "symbol": "circle", 
        "module": [
            "MET_DNA"
        ], 
        "name_alt": "NA_DNA_cyt", 
        "state": "0", 
        "y": "59.472", 
        "x": "4.7639", 
        "annotation": "YCM:NA_DNA", 
        "compartment": "intracellular", 
        "is_ode": false, 
        "name": "323"
    }, 
    {
        "rate": "(((1./(1.+ exp(-k1_A_con*(DNA - (DNA_crit*16.0e-15/int_vol))))) * kf_A_con * A) * nuc_vol)", 
        "name": "324", 
        "x": "2.1806", 
        "y": "25.472", 
        "links_to": [
            "321", 
            "322"
        ], 
        "symbol": "rect", 
        "compartments": [
            "nucleus"
        ], 
        "is_ode": false, 
        "module": [
            "MET_DNA"
        ], 
        "name_alt": "v_A_con"
    }, 
    {
        "rate": "(((1./(1.+ exp(-k1_DNA_syn*(A - (A_crit*16.0e-15/int_vol))))) * kf_DNA_syn * 0.147) * nuc_vol)", 
        "name": "325", 
        "x": "2.6806", 
        "y": "27.472", 
        "links_to": [
            "323", 
            "322", 
            "321"
        ], 
        "symbol": "rect", 
        "compartments": [
            "intracellular", 
            "nucleus"
        ], 
        "is_ode": false, 
        "module": [
            "MET_DNA"
        ], 
        "name_alt": "v_DNA_syn"
    }, 
    {
        "rate": "((  (1./(1.+ exp(-k1_A_syn*(Clb5/1.65801328396e-05 - (Clb5_crit*16.0e-15/int_vol)/1.65801328396e-05)))) * kf_A_syn  ) * nuc_vol)", 
        "name": "326", 
        "x": "3.6806", 
        "y": "27.472", 
        "links_to": [
            "321", 
            "166"
        ], 
        "symbol": "rect", 
        "compartments": [
            "nucleus", 
            "intracellular"
        ], 
        "is_ode": false, 
        "module": [
            "MET_DNA"
        ], 
        "name_alt": "v_A_syn"
    }, 
    {
        "links_to": [
            "335", 
            "332"
        ], 
        "symbol": "circle", 
        "module": [
            "MET_CWS"
        ], 
        "name_alt": "proteins_cw", 
        "state": "0", 
        "y": "13.472", 
        "x": "85.236", 
        "annotation": "YCM:B_Protein_other", 
        "compartment": "cell_wall", 
        "is_ode": false, 
        "name": "327"
    }, 
    {
        "links_to": [
            "336", 
            "332"
        ], 
        "symbol": "circle", 
        "module": [
            "MET_CWS"
        ], 
        "name_alt": "mannan_cw", 
        "state": "0", 
        "y": "13.472", 
        "x": "82.236", 
        "annotation": "CHEBI:28808", 
        "compartment": "cell_wall", 
        "is_ode": false, 
        "name": "328"
    }, 
    {
        "links_to": [], 
        "symbol": "circle", 
        "module": [
            "MET_CWS"
        ], 
        "name_alt": "pm_vol", 
        "state": "0", 
        "y": "59.472", 
        "x": "104.64", 
        "annotation": "SBO:0000468", 
        "compartment": "plasma_membrane", 
        "is_ode": true, 
        "name": "329"
    }, 
    {
        "links_to": [
            "335"
        ], 
        "symbol": "circle", 
        "module": [
            "MET_CWS"
        ], 
        "name_alt": "proteins", 
        "state": "0", 
        "y": "59.472", 
        "x": "68.597", 
        "annotation": "YCM:B_Protein_other", 
        "compartment": "intracellular", 
        "is_ode": false, 
        "name": "330"
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
        "name_alt": "V_cw", 
        "state": "0", 
        "y": "13.472", 
        "x": "81.236", 
        "annotation": "SBO:0000468", 
        "compartment": "cell_wall", 
        "is_ode": true, 
        "name": "331"
    }, 
    {
        "links_to": [
            "335", 
            "336", 
            "337", 
            "338", 
            "333", 
            "331", 
            "334", 
            "331", 
            "328", 
            "331", 
            "327", 
            "331"
        ], 
        "symbol": "triangle", 
        "module": [
            "MET_CWS"
        ], 
        "name_alt": "m_cw", 
        "equation": "(((glucan_cw*V_cw)*1e-3)*glucan_mass + ((chitin_cw*V_cw)*1e-3)*chitin_mass + ((mannan_cw*V_cw)*1e-3)*mannan_mass + ((proteins_cw*V_cw)*1e-3)*average_protein_mass)*1e12", 
        "state": "0", 
        "y": "12.472", 
        "x": "81.986", 
        "annotation": "SBO:0000504", 
        "compartment": "cell_wall", 
        "is_ode": false, 
        "name": "332"
    }, 
    {
        "links_to": [
            "337", 
            "332"
        ], 
        "symbol": "circle", 
        "module": [
            "MET_CWS"
        ], 
        "name_alt": "glucan_cw", 
        "state": "0", 
        "y": "13.472", 
        "x": "83.236", 
        "annotation": "CHEBI:37671", 
        "compartment": "cell_wall", 
        "is_ode": false, 
        "name": "333"
    }, 
    {
        "links_to": [
            "338", 
            "332"
        ], 
        "symbol": "circle", 
        "module": [
            "MET_CWS"
        ], 
        "name_alt": "chitin_cw", 
        "state": "0", 
        "y": "13.472", 
        "x": "84.236", 
        "annotation": "CHEBI:17029", 
        "compartment": "cell_wall", 
        "is_ode": false, 
        "name": "334"
    }, 
    {
        "rate": "((1./(1.+ exp(k_cw*(m_cw - (V_cw * rho_cw * 1e15))))))*(proteins)*int_vol", 
        "name": "335", 
        "x": "85.028", 
        "y": "11.472", 
        "links_to": [
            "330", 
            "327", 
            "332"
        ], 
        "symbol": "rect", 
        "compartments": [
            "intracellular", 
            "cell_wall"
        ], 
        "is_ode": false, 
        "module": [
            "MET_CWS"
        ], 
        "name_alt": "CW_proteins"
    }, 
    {
        "rate": "((1./(1.+ exp(k_cw*(m_cw - (V_cw * rho_cw * 1e15))))))*(mannan)*int_vol", 
        "name": "336", 
        "x": "82.028", 
        "y": "11.472", 
        "links_to": [
            "282", 
            "328", 
            "332"
        ], 
        "symbol": "rect", 
        "compartments": [
            "intracellular", 
            "cell_wall"
        ], 
        "is_ode": false, 
        "module": [
            "MET_CWS"
        ], 
        "name_alt": "CW_mannan"
    }, 
    {
        "rate": "((1./(1.+ exp(k_cw*(m_cw - (V_cw * rho_cw * 1e15))))))*(glucan)*int_vol", 
        "name": "337", 
        "x": "83.028", 
        "y": "11.472", 
        "links_to": [
            "299", 
            "333", 
            "332"
        ], 
        "symbol": "rect", 
        "compartments": [
            "intracellular", 
            "cell_wall"
        ], 
        "is_ode": false, 
        "module": [
            "MET_CWS"
        ], 
        "name_alt": "CW_glucan"
    }, 
    {
        "rate": "((1./(1.+ exp(k_cw*(m_cw - (V_cw * rho_cw * 1e15))))))*(chitin)*int_vol", 
        "name": "338", 
        "x": "84.028", 
        "y": "11.472", 
        "links_to": [
            "296", 
            "334", 
            "332"
        ], 
        "symbol": "rect", 
        "compartments": [
            "intracellular", 
            "cell_wall"
        ], 
        "is_ode": false, 
        "module": [
            "MET_CWS"
        ], 
        "name_alt": "CW_chitin"
    }, 
    {
        "links_to": [
            "387", 
            "391", 
            "392", 
            "397", 
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
        "name_alt": "h_cyt", 
        "state": "0", 
        "y": "57.472", 
        "x": "102.46", 
        "annotation": "CHEBI:24636", 
        "compartment": "cytosol", 
        "is_ode": false, 
        "name": "339"
    }, 
    {
        "links_to": [], 
        "symbol": "circle", 
        "module": [
            "TRP_ION"
        ], 
        "name_alt": "v_v", 
        "state": "0", 
        "y": "56.472", 
        "x": "99.639", 
        "annotation": "SBML_IMPORT_ANNOTATION:8", 
        "compartment": "parameter_compartment", 
        "is_ode": true, 
        "name": "340"
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
        "name_alt": "atp_cyt", 
        "state": "-4", 
        "y": "57.472", 
        "x": "95.458", 
        "annotation": "CHEBI:30616", 
        "compartment": "cytosol", 
        "is_ode": true, 
        "name": "341"
    }, 
    {
        "links_to": [
            "346", 
            "339", 
            "379", 
            "384"
        ], 
        "symbol": "triangle", 
        "module": [
            "TRP_ION"
        ], 
        "name_alt": "E_pma1", 
        "equation": "(  (  (  ( ( R  *  T )  /  F )   /  1. )   *  log( ( h_ext  /  h_cyt ) ) )   +  ( D_G_ATP  /  F )  )", 
        "state": "0", 
        "y": "55.472", 
        "x": "99.694", 
        "annotation": "SBML_IMPORT_ANNOTATION:13", 
        "compartment": "parameter_compartment", 
        "is_ode": false, 
        "name": "342"
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
        "name_alt": "cytosol", 
        "state": "0", 
        "y": "57.472", 
        "x": "94.458", 
        "annotation": "SBO:0000468", 
        "compartment": "cytosol", 
        "is_ode": true, 
        "name": "343"
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
        "name_alt": "v_m", 
        "state": "0", 
        "y": "55.472", 
        "x": "96.694", 
        "annotation": "SBML_IMPORT_ANNOTATION:7", 
        "compartment": "parameter_compartment", 
        "is_ode": true, 
        "name": "344"
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
        "name_alt": "h_vac", 
        "state": "0", 
        "y": "59.472", 
        "x": "102.46", 
        "annotation": "CHEBI:24636", 
        "compartment": "vacuole", 
        "is_ode": false, 
        "name": "345"
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
        "name_alt": "h_ext", 
        "state": "+1", 
        "y": "57.472", 
        "x": "82.681", 
        "annotation": "CHEBI:24636", 
        "compartment": "extracellular", 
        "is_ode": true, 
        "name": "346"
    }, 
    {
        "links_to": [
            "393", 
            "400", 
            "351"
        ], 
        "symbol": "circle", 
        "module": [
            "TRP_ION"
        ], 
        "name_alt": "cl_cyt", 
        "state": "0", 
        "y": "57.472", 
        "x": "98.458", 
        "annotation": "CHEBI:17996", 
        "compartment": "cytosol", 
        "is_ode": false, 
        "name": "347"
    }, 
    {
        "links_to": [
            "352", 
            "344"
        ], 
        "symbol": "triangle", 
        "module": [
            "TRP_ION"
        ], 
        "name_alt": "gp_trk12", 
        "equation": " ( gp_trk12_0  /  ( 1.  + exp((  (  ( ( d_trk12  *  F )  /  R )   /  T )   *  ( v_m  - v_trk12_halfmax ) )) ) ) ", 
        "state": "0", 
        "y": "54.472", 
        "x": "94.639", 
        "annotation": "SBML_IMPORT_ANNOTATION:11", 
        "compartment": "parameter_compartment", 
        "is_ode": false, 
        "name": "348"
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
        "name_alt": "na_ext", 
        "state": "0", 
        "y": "57.472", 
        "x": "81.681", 
        "annotation": "CHEBI:29101", 
        "compartment": "extracellular", 
        "is_ode": true, 
        "name": "349"
    }, 
    {
        "links_to": [
            "388", 
            "398", 
            "401", 
            "402", 
            "364", 
            "370", 
            "361"
        ], 
        "symbol": "circle", 
        "module": [
            "TRP_ION"
        ], 
        "name_alt": "na_cyt", 
        "state": "0", 
        "y": "57.472", 
        "x": "101.46", 
        "annotation": "CHEBI:29101", 
        "compartment": "cytosol", 
        "is_ode": false, 
        "name": "350"
    }, 
    {
        "links_to": [
            "368", 
            "344", 
            "383", 
            "347"
        ], 
        "symbol": "triangle", 
        "module": [
            "TRP_ION"
        ], 
        "name_alt": "my_J_Cl", 
        "equation": "( ( (  ( surface  /  ( -1.  *  F ) )   *  gp_cl )  *  ( v_m  -  (  (  ( ( R  *  T )  /  F )   /  -1. )   *  log( ( cl_ext  /  cl_cyt ) ) )  ) ) )", 
        "state": "0", 
        "y": "54.472", 
        "x": "98.194", 
        "annotation": "SBML_IMPORT_ANNOTATION:20", 
        "compartment": "parameter_compartment", 
        "is_ode": false, 
        "name": "351"
    }, 
    {
        "links_to": [
            "368", 
            "348", 
            "344", 
            "363", 
            "366"
        ], 
        "symbol": "triangle", 
        "module": [
            "TRP_ION"
        ], 
        "name_alt": "my_J_trk12", 
        "equation": "( ( (  ( surface  /  ( 1.  *  F ) )   *  gp_trk12 )  *  ( v_m  -  (  (  ( ( R  *  T )  /  F )   /  1. )   *  log( ( k_ext  /  k_cyt ) ) )  ) ) )", 
        "state": "0", 
        "y": "53.472", 
        "x": "95.278", 
        "annotation": "SBML_IMPORT_ANNOTATION:26", 
        "compartment": "parameter_compartment", 
        "is_ode": false, 
        "name": "352"
    }, 
    {
        "links_to": [
            "368", 
            "344", 
            "367", 
            "354"
        ], 
        "symbol": "triangle", 
        "module": [
            "TRP_ION"
        ], 
        "name_alt": "my_J_Ca", 
        "equation": "( ( (  ( surface  /  ( 2.  *  F ) )   *  gp_ca )  *  ( v_m  -  (  (  ( ( R  *  T )  /  F )   /  2. )   *  log( ( ca_ext  /  ca_cyt ) ) )  ) ) )", 
        "state": "0", 
        "y": "54.472", 
        "x": "99.194", 
        "annotation": "SBML_IMPORT_ANNOTATION:21", 
        "compartment": "parameter_compartment", 
        "is_ode": false, 
        "name": "353"
    }, 
    {
        "links_to": [
            "390", 
            "399", 
            "353"
        ], 
        "symbol": "circle", 
        "module": [
            "TRP_ION"
        ], 
        "name_alt": "ca_cyt", 
        "state": "0", 
        "y": "57.472", 
        "x": "99.458", 
        "annotation": "CHEBI:29108", 
        "compartment": "cytosol", 
        "is_ode": false, 
        "name": "354"
    }, 
    {
        "links_to": [
            "400"
        ], 
        "symbol": "circle", 
        "module": [
            "TRP_ION"
        ], 
        "name_alt": "cl_vac", 
        "state": "0", 
        "y": "59.472", 
        "x": "98.458", 
        "annotation": "CHEBI:17996", 
        "compartment": "vacuole", 
        "is_ode": false, 
        "name": "355"
    }, 
    {
        "links_to": [
            "368", 
            "344", 
            "364"
        ], 
        "symbol": "triangle", 
        "module": [
            "TRP_ION"
        ], 
        "name_alt": "my_J_ena1", 
        "equation": "(( (  ( surface  /  F )   *  I_MAX_ENA1 )  *  tanh((  ( F  /  ( ( 2.  *  R )  *  T ) )   *  ( v_m  - E_ena1 ) )) ))", 
        "state": "0", 
        "y": "54.472", 
        "x": "103.75", 
        "annotation": "SBML_IMPORT_ANNOTATION:24", 
        "compartment": "parameter_compartment", 
        "is_ode": false, 
        "name": "356"
    }, 
    {
        "links_to": [], 
        "symbol": "circle", 
        "module": [
            "TRP_ION"
        ], 
        "name_alt": "extracellular", 
        "state": "0", 
        "y": "57.472", 
        "x": "80.681", 
        "annotation": "SBO:0000468", 
        "compartment": "extracellular", 
        "is_ode": true, 
        "name": "357"
    }, 
    {
        "links_to": [
            "339"
        ], 
        "symbol": "triangle", 
        "module": [
            "TRP_ION"
        ], 
        "name_alt": "myph", 
        "equation": "( - log((( h_cyt  *  0.001 )),(10.)) )", 
        "state": "0", 
        "y": "56.472", 
        "x": "98.639", 
        "annotation": "SBML_IMPORT_ANNOTATION:9", 
        "compartment": "parameter_compartment", 
        "is_ode": false, 
        "name": "358"
    }, 
    {
        "links_to": [
            "368", 
            "343"
        ], 
        "symbol": "triangle", 
        "module": [
            "TRP_ION"
        ], 
        "name_alt": "r", 
        "equation": "(  (  ( ( ( cytosol  *  liter_2_fl )  *  3. )  /  4. )   /  3.14159265359 )   **  0.333333333333 )", 
        "state": "0", 
        "y": "56.472", 
        "x": "95.639", 
        "annotation": "SBML_IMPORT_ANNOTATION:3", 
        "compartment": "parameter_compartment", 
        "is_ode": false, 
        "name": "359"
    }, 
    {
        "links_to": [
            "402"
        ], 
        "symbol": "circle", 
        "module": [
            "TRP_ION"
        ], 
        "name_alt": "na_vac", 
        "state": "0", 
        "y": "59.472", 
        "x": "101.46", 
        "annotation": "CHEBI:29101", 
        "compartment": "vacuole", 
        "is_ode": false, 
        "name": "360"
    }, 
    {
        "links_to": [
            "368", 
            "344", 
            "349", 
            "350"
        ], 
        "symbol": "triangle", 
        "module": [
            "TRP_ION"
        ], 
        "name_alt": "my_J_Na", 
        "equation": "( ( (  ( surface  /  ( 1.  *  F ) )   *  gp_na )  *  ( v_m  -  (  (  ( ( R  *  T )  /  F )   /  1. )   *  log( ( na_ext  /  na_cyt ) ) )  ) ) )", 
        "state": "0", 
        "y": "54.472", 
        "x": "101.19", 
        "annotation": "SBML_IMPORT_ANNOTATION:19", 
        "compartment": "parameter_compartment", 
        "is_ode": false, 
        "name": "361"
    }, 
    {
        "links_to": [
            "399"
        ], 
        "symbol": "circle", 
        "module": [
            "TRP_ION"
        ], 
        "name_alt": "ca_vac", 
        "state": "0", 
        "y": "59.472", 
        "x": "99.458", 
        "annotation": "CHEBI:29108", 
        "compartment": "vacuole", 
        "is_ode": false, 
        "name": "362"
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
        "name_alt": "k_ext", 
        "state": "0", 
        "y": "57.472", 
        "x": "79.681", 
        "annotation": "CHEBI:29103", 
        "compartment": "extracellular", 
        "is_ode": true, 
        "name": "363"
    }, 
    {
        "links_to": [
            "349", 
            "350", 
            "379", 
            "356"
        ], 
        "symbol": "triangle", 
        "module": [
            "TRP_ION"
        ], 
        "name_alt": "E_ena1", 
        "equation": "(  (  (  ( ( R  *  T )  /  F )   /  1. )   *  log( ( na_ext  /  na_cyt ) ) )   +  ( D_G_ATP  /  F )  )", 
        "state": "0", 
        "y": "55.472", 
        "x": "98.694", 
        "annotation": "SBML_IMPORT_ANNOTATION:15", 
        "compartment": "parameter_compartment", 
        "is_ode": false, 
        "name": "364"
    }, 
    {
        "links_to": [
            "372"
        ], 
        "symbol": "triangle", 
        "module": [
            "TRP_ION"
        ], 
        "name_alt": "surface_vac", 
        "equation": "( ( 4.  *  3.14159265359 )  *  ( r_vac  **  2. ) )", 
        "state": "0", 
        "y": "55.472", 
        "x": "95.667", 
        "annotation": "SBML_IMPORT_ANNOTATION:6", 
        "compartment": "parameter_compartment", 
        "is_ode": false, 
        "name": "365"
    }, 
    {
        "links_to": [
            "389", 
            "394", 
            "395", 
            "396", 
            "373", 
            "352", 
            "381"
        ], 
        "symbol": "circle", 
        "module": [
            "TRP_ION"
        ], 
        "name_alt": "k_cyt", 
        "state": "0", 
        "y": "57.472", 
        "x": "100.46", 
        "annotation": "CHEBI:29103", 
        "compartment": "cytosol", 
        "is_ode": false, 
        "name": "366"
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
        "name_alt": "ca_ext", 
        "state": "0", 
        "y": "57.472", 
        "x": "78.681", 
        "annotation": "CHEBI:29108", 
        "compartment": "extracellular", 
        "is_ode": true, 
        "name": "367"
    }, 
    {
        "links_to": [
            "359", 
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
        "name_alt": "surface", 
        "equation": "( ( 4.  *  3.14159265359 )  *  ( r  **  2. ) )", 
        "state": "0", 
        "y": "55.472", 
        "x": "97.694", 
        "annotation": "SBML_IMPORT_ANNOTATION:4", 
        "compartment": "parameter_compartment", 
        "is_ode": false, 
        "name": "368"
    }, 
    {
        "links_to": [], 
        "symbol": "circle", 
        "module": [
            "TRP_ION"
        ], 
        "name_alt": "par_vol", 
        "state": "0", 
        "y": "56.472", 
        "x": "96.639", 
        "annotation": "SBO:0000468", 
        "compartment": "parameter_compartment", 
        "is_ode": true, 
        "name": "369"
    }, 
    {
        "links_to": [
            "346", 
            "350", 
            "339", 
            "349", 
            "385"
        ], 
        "symbol": "triangle", 
        "module": [
            "TRP_ION"
        ], 
        "name_alt": "E_nha1", 
        "equation": "(  ( ( R  *  T )  /  F )   *  log( ( ( ( h_ext  **  2. )  *  na_cyt )  /  ( ( h_cyt  **  2. )  *  na_ext ) ) ) )", 
        "state": "0", 
        "y": "55.472", 
        "x": "94.667", 
        "annotation": "SBML_IMPORT_ANNOTATION:14", 
        "compartment": "parameter_compartment", 
        "is_ode": false, 
        "name": "370"
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
        "name_alt": "adp_cyt", 
        "state": "-3", 
        "y": "57.472", 
        "x": "97.458", 
        "annotation": "CHEBI:456216", 
        "compartment": "cytosol", 
        "is_ode": true, 
        "name": "371"
    }, 
    {
        "links_to": [
            "365", 
            "375"
        ], 
        "symbol": "triangle", 
        "module": [
            "TRP_ION"
        ], 
        "name_alt": "r_vac", 
        "equation": "(  (  ( ( ( vacuole  *  liter_2_fl )  *  3. )  /  4. )   /  3.14159265359 )   **  0.333333333333 )", 
        "state": "0", 
        "y": "56.472", 
        "x": "94.639", 
        "annotation": "SBML_IMPORT_ANNOTATION:5", 
        "compartment": "parameter_compartment", 
        "is_ode": false, 
        "name": "372"
    }, 
    {
        "links_to": [
            "368", 
            "386", 
            "344", 
            "363", 
            "366"
        ], 
        "symbol": "triangle", 
        "module": [
            "TRP_ION"
        ], 
        "name_alt": "my_J_tok1", 
        "equation": "( ( (  ( surface  /  ( 1.  *  F ) )   *  gp_tok1 )  *  ( v_m  -  (  (  ( ( R  *  T )  /  F )   /  1. )   *  log( ( k_ext  /  k_cyt ) ) )  ) ) )", 
        "state": "0", 
        "y": "53.472", 
        "x": "97.556", 
        "annotation": "SBML_IMPORT_ANNOTATION:25", 
        "compartment": "parameter_compartment", 
        "is_ode": false, 
        "name": "373"
    }, 
    {
        "links_to": [
            "339", 
            "345", 
            "379"
        ], 
        "symbol": "triangle", 
        "module": [
            "TRP_ION"
        ], 
        "name_alt": "E_vma1", 
        "equation": "(  (  (  ( ( R  *  T )  /  F )   /  1. )   *  log( ( h_cyt  /  h_vac ) ) )   +  ( D_G_ATP  /  F )  )", 
        "state": "0", 
        "y": "55.472", 
        "x": "100.69", 
        "annotation": "SBML_IMPORT_ANNOTATION:16", 
        "compartment": "parameter_compartment", 
        "is_ode": false, 
        "name": "374"
    }, 
    {
        "links_to": [
            "372", 
            "343"
        ], 
        "symbol": "triangle", 
        "module": [
            "TRP_ION"
        ], 
        "name_alt": "vacuole", 
        "equation": "( 0.2  *  cytosol )", 
        "state": "0", 
        "y": "59.472", 
        "x": "97.458", 
        "annotation": "SBO:0000468", 
        "compartment": "vacuole", 
        "is_ode": false, 
        "name": "375"
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
        "name_alt": "pi_cyt", 
        "state": "-2", 
        "y": "57.472", 
        "x": "96.458", 
        "annotation": "CHEBI:43474", 
        "compartment": "cytosol", 
        "is_ode": true, 
        "name": "376"
    }, 
    {
        "links_to": [], 
        "symbol": "circle", 
        "module": [
            "TRP_ION"
        ], 
        "name_alt": "acid_cytosol_h", 
        "state": "0", 
        "y": "57.472", 
        "x": "93.458", 
        "annotation": "SBML_IMPORT_ANNOTATION:1", 
        "compartment": "cytosol", 
        "is_ode": true, 
        "name": "377"
    }, 
    {
        "links_to": [
            "395"
        ], 
        "symbol": "circle", 
        "module": [
            "TRP_ION"
        ], 
        "name_alt": "k_vac", 
        "state": "0", 
        "y": "59.472", 
        "x": "100.46", 
        "annotation": "CHEBI:29103", 
        "compartment": "vacuole", 
        "is_ode": false, 
        "name": "378"
    }, 
    {
        "links_to": [
            "364", 
            "342", 
            "374", 
            "341", 
            "371", 
            "376"
        ], 
        "symbol": "triangle", 
        "module": [
            "TRP_ION"
        ], 
        "name_alt": "D_G_ATP", 
        "equation": "( D_G_ATP_0  - ( ( R  *  T )  *  log( ( atp_cyt  /  ( adp_cyt  *  pi_cyt ) ) ) ) )", 
        "state": "0", 
        "y": "56.472", 
        "x": "97.639", 
        "annotation": "SBML_IMPORT_ANNOTATION:12", 
        "compartment": "parameter_compartment", 
        "is_ode": false, 
        "name": "379"
    }, 
    {
        "links_to": [], 
        "symbol": "circle", 
        "module": [
            "TRP_ION"
        ], 
        "name_alt": "acid_cytosol", 
        "state": "0", 
        "y": "57.472", 
        "x": "92.458", 
        "annotation": "SBML_IMPORT_ANNOTATION:2", 
        "compartment": "cytosol", 
        "is_ode": true, 
        "name": "380"
    }, 
    {
        "links_to": [
            "368", 
            "344", 
            "363", 
            "366"
        ], 
        "symbol": "triangle", 
        "module": [
            "TRP_ION"
        ], 
        "name_alt": "my_J_K", 
        "equation": "( ( (  ( surface  /  ( 1.  *  F ) )   *  gp_k )  *  ( v_m  -  (  (  ( ( R  *  T )  /  F )   /  1. )   *  log( ( k_ext  /  k_cyt ) ) )  ) ) )", 
        "state": "0", 
        "y": "54.472", 
        "x": "100.19", 
        "annotation": "SBML_IMPORT_ANNOTATION:18", 
        "compartment": "parameter_compartment", 
        "is_ode": false, 
        "name": "381"
    }, 
    {
        "links_to": [
            "368", 
            "344", 
            "346", 
            "339"
        ], 
        "symbol": "triangle", 
        "module": [
            "TRP_ION"
        ], 
        "name_alt": "my_J_H", 
        "equation": "( ( (  ( surface  /  ( 1.  *  F ) )   *  gp_h )  *  ( v_m  -  (  (  ( ( R  *  T )  /  F )   /  1. )   *  log( ( h_ext  /  h_cyt ) ) )  ) ) )", 
        "state": "0", 
        "y": "54.472", 
        "x": "102.19", 
        "annotation": "SBML_IMPORT_ANNOTATION:17", 
        "compartment": "parameter_compartment", 
        "is_ode": false, 
        "name": "382"
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
        "name_alt": "cl_ext", 
        "state": "0", 
        "y": "57.472", 
        "x": "77.681", 
        "annotation": "CHEBI:17996", 
        "compartment": "extracellular", 
        "is_ode": true, 
        "name": "383"
    }, 
    {
        "links_to": [
            "368", 
            "344", 
            "342"
        ], 
        "symbol": "triangle", 
        "module": [
            "TRP_ION"
        ], 
        "name_alt": "my_J_pma1", 
        "equation": "(( (  ( surface  /  F )   *  I_MAX_PMA1 )  *  tanh((  ( F  /  ( ( 2.  *  R )  *  T ) )   *  ( v_m  - E_pma1 ) )) ))", 
        "state": "0", 
        "y": "54.472", 
        "x": "104.75", 
        "annotation": "SBML_IMPORT_ANNOTATION:22", 
        "compartment": "parameter_compartment", 
        "is_ode": false, 
        "name": "384"
    }, 
    {
        "links_to": [
            "368", 
            "344", 
            "370"
        ], 
        "symbol": "triangle", 
        "module": [
            "TRP_ION"
        ], 
        "name_alt": "my_J_nha1", 
        "equation": "(( (  ( surface  /  F )   *  G_NHA1 )  *  ( v_m  - E_nha1 ) ))", 
        "state": "0", 
        "y": "54.472", 
        "x": "96.917", 
        "annotation": "SBML_IMPORT_ANNOTATION:23", 
        "compartment": "parameter_compartment", 
        "is_ode": false, 
        "name": "385"
    }, 
    {
        "links_to": [
            "373", 
            "344"
        ], 
        "symbol": "triangle", 
        "module": [
            "TRP_ION"
        ], 
        "name_alt": "gp_tok1", 
        "equation": " ( gp_tok1_0  /  ( 1.  + exp((  (  ( ( d_tok1  *  F )  /  R )   /  T )   *  ( v_m  - v_tok1_halfmax ) )) ) ) ", 
        "state": "0", 
        "y": "54.472", 
        "x": "95.917", 
        "annotation": "SBML_IMPORT_ANNOTATION:10", 
        "compartment": "parameter_compartment", 
        "is_ode": false, 
        "name": "386"
    }, 
    {
        "rate": "( (  ( surface  /  F )   *  I_MAX_PMA1 )  *  tanh((  ( F  /  ( ( 2.  *  R )  *  T ) )   *  ( v_m  - E_pma1 ) )) )", 
        "name": "387", 
        "x": "93.556", 
        "y": "56.472", 
        "links_to": [
            "339", 
            "346", 
            "341", 
            "371", 
            "376"
        ], 
        "symbol": "rect", 
        "compartments": [
            "cytosol", 
            "extracellular"
        ], 
        "is_ode": false, 
        "module": [
            "TRP_ION"
        ], 
        "name_alt": "J_pma1"
    }, 
    {
        "rate": " ( (  ( surface  /  ( 1.  *  F ) )   *  gp_na )  *  ( v_m  -  (  (  ( ( R  *  T )  /  F )   /  1. )   *  log( ( na_ext  /  na_cyt ) ) )  ) ) ", 
        "name": "388", 
        "x": "89.556", 
        "y": "56.472", 
        "links_to": [
            "350", 
            "349"
        ], 
        "symbol": "rect", 
        "compartments": [
            "cytosol", 
            "extracellular"
        ], 
        "is_ode": false, 
        "module": [
            "TRP_ION"
        ], 
        "name_alt": "J_na"
    }, 
    {
        "rate": " ( (  ( surface  /  ( 1.  *  F ) )   *  gp_trk12 )  *  ( v_m  -  (  (  ( ( R  *  T )  /  F )   /  1. )   *  log( ( k_ext  /  k_cyt ) ) )  ) ) ", 
        "name": "389", 
        "x": "86.556", 
        "y": "56.472", 
        "links_to": [
            "366", 
            "363"
        ], 
        "symbol": "rect", 
        "compartments": [
            "cytosol", 
            "extracellular"
        ], 
        "is_ode": false, 
        "module": [
            "TRP_ION"
        ], 
        "name_alt": "J_trk12"
    }, 
    {
        "rate": " ( (  ( surface  /  ( 2.  *  F ) )   *  gp_ca )  *  ( v_m  -  (  (  ( ( R  *  T )  /  F )   /  2. )   *  log( ( ca_ext  /  ca_cyt ) ) )  ) ) ", 
        "name": "390", 
        "x": "85.556", 
        "y": "56.472", 
        "links_to": [
            "354", 
            "367"
        ], 
        "symbol": "rect", 
        "compartments": [
            "cytosol", 
            "extracellular"
        ], 
        "is_ode": false, 
        "module": [
            "TRP_ION"
        ], 
        "name_alt": "J_ca"
    }, 
    {
        "rate": " ( (  ( surface_vac  /  ( 1.  *  F ) )   *  gv_h )  *  ( v_v  -  (  (  ( ( R  *  T )  /  F )   /  1. )   *  log( ( h_cyt  /  h_vac ) ) )  ) ) ", 
        "name": "391", 
        "x": "102.46", 
        "y": "58.472", 
        "links_to": [
            "345", 
            "339"
        ], 
        "symbol": "rect", 
        "compartments": [
            "vacuole", 
            "cytosol"
        ], 
        "is_ode": false, 
        "module": [
            "TRP_ION"
        ], 
        "name_alt": "J_vac_h"
    }, 
    {
        "rate": " ( (  ( surface  /  ( 1.  *  F ) )   *  gp_h )  *  ( v_m  -  (  (  ( ( R  *  T )  /  F )   /  1. )   *  log( ( h_ext  /  h_cyt ) ) )  ) ) ", 
        "name": "392", 
        "x": "92.556", 
        "y": "56.472", 
        "links_to": [
            "339", 
            "346"
        ], 
        "symbol": "rect", 
        "compartments": [
            "cytosol", 
            "extracellular"
        ], 
        "is_ode": false, 
        "module": [
            "TRP_ION"
        ], 
        "name_alt": "J_h"
    }, 
    {
        "rate": " ( (  ( surface  /  ( -1.  *  F ) )   *  gp_cl )  *  ( v_m  -  (  (  ( ( R  *  T )  /  F )   /  -1. )   *  log( ( cl_ext  /  cl_cyt ) ) )  ) ) ", 
        "name": "393", 
        "x": "84.556", 
        "y": "56.472", 
        "links_to": [
            "347", 
            "383"
        ], 
        "symbol": "rect", 
        "compartments": [
            "cytosol", 
            "extracellular"
        ], 
        "is_ode": false, 
        "module": [
            "TRP_ION"
        ], 
        "name_alt": "J_cl"
    }, 
    {
        "rate": " ( (  ( surface  /  ( 1.  *  F ) )   *  gp_k )  *  ( v_m  -  (  (  ( ( R  *  T )  /  F )   /  1. )   *  log( ( k_ext  /  k_cyt ) ) )  ) ) ", 
        "name": "394", 
        "x": "87.556", 
        "y": "56.472", 
        "links_to": [
            "366", 
            "363"
        ], 
        "symbol": "rect", 
        "compartments": [
            "cytosol", 
            "extracellular"
        ], 
        "is_ode": false, 
        "module": [
            "TRP_ION"
        ], 
        "name_alt": "J_k"
    }, 
    {
        "rate": " ( (  ( surface_vac  /  ( 1.  *  F ) )   *  gv_k )  *  ( v_v  -  (  (  ( ( R  *  T )  /  F )   /  1. )   *  log( ( k_cyt  /  k_vac ) ) )  ) ) ", 
        "name": "395", 
        "x": "100.46", 
        "y": "58.472", 
        "links_to": [
            "378", 
            "366"
        ], 
        "symbol": "rect", 
        "compartments": [
            "vacuole", 
            "cytosol"
        ], 
        "is_ode": false, 
        "module": [
            "TRP_ION"
        ], 
        "name_alt": "J_vac_k"
    }, 
    {
        "rate": " ( (  ( surface  /  ( 1.  *  F ) )   *  gp_tok1 )  *  ( v_m  -  (  (  ( ( R  *  T )  /  F )   /  1. )   *  log( ( k_ext  /  k_cyt ) ) )  ) ) ", 
        "name": "396", 
        "x": "88.556", 
        "y": "56.472", 
        "links_to": [
            "366", 
            "363"
        ], 
        "symbol": "rect", 
        "compartments": [
            "cytosol", 
            "extracellular"
        ], 
        "is_ode": false, 
        "module": [
            "TRP_ION"
        ], 
        "name_alt": "J_tok1"
    }, 
    {
        "rate": "( (  ( surface_vac  /  F )   *  I_MAX_VMA_1 )  *  tanh( ( ( v_v  - E_vma1 )  /  ( ( 2.  *  R )  *  T ) ) ) )", 
        "name": "397", 
        "x": "97.458", 
        "y": "58.472", 
        "links_to": [
            "345", 
            "339", 
            "341", 
            "371", 
            "376"
        ], 
        "symbol": "rect", 
        "compartments": [
            "vacuole", 
            "cytosol"
        ], 
        "is_ode": false, 
        "module": [
            "TRP_ION"
        ], 
        "name_alt": "J_vma1"
    }, 
    {
        "rate": "( (  ( surface  /  F )   *  G_NHA1 )  *  ( v_m  - E_nha1 ) )", 
        "name": "398", 
        "x": "91.556", 
        "y": "56.472", 
        "links_to": [
            "339", 
            "350", 
            "346", 
            "349"
        ], 
        "symbol": "rect", 
        "compartments": [
            "cytosol", 
            "extracellular"
        ], 
        "is_ode": false, 
        "module": [
            "TRP_ION"
        ], 
        "name_alt": "J_nha1"
    }, 
    {
        "rate": " ( (  ( surface_vac  /  ( 2.  *  F ) )   *  gv_ca )  *  ( v_v  -  (  (  ( ( R  *  T )  /  F )   /  2. )   *  log( ( ca_cyt  /  ca_vac ) ) )  ) ) ", 
        "name": "399", 
        "x": "99.458", 
        "y": "58.472", 
        "links_to": [
            "362", 
            "354"
        ], 
        "symbol": "rect", 
        "compartments": [
            "vacuole", 
            "cytosol"
        ], 
        "is_ode": false, 
        "module": [
            "TRP_ION"
        ], 
        "name_alt": "J_vac_ca"
    }, 
    {
        "rate": " ( (  ( surface_vac  /  ( -1.  *  F ) )   *  gv_cl )  *  ( v_v  -  (  (  ( ( R  *  T )  /  F )   /  -1. )   *  log( ( cl_cyt  /  cl_vac ) ) )  ) ) ", 
        "name": "400", 
        "x": "98.458", 
        "y": "58.472", 
        "links_to": [
            "355", 
            "347"
        ], 
        "symbol": "rect", 
        "compartments": [
            "vacuole", 
            "cytosol"
        ], 
        "is_ode": false, 
        "module": [
            "TRP_ION"
        ], 
        "name_alt": "J_vac_cl"
    }, 
    {
        "rate": "( (  ( surface  /  F )   *  I_MAX_ENA1 )  *  tanh((  ( F  /  ( ( 2.  *  R )  *  T ) )   *  ( v_m  - E_ena1 ) )) )", 
        "name": "401", 
        "x": "90.556", 
        "y": "56.472", 
        "links_to": [
            "350", 
            "349"
        ], 
        "symbol": "rect", 
        "compartments": [
            "cytosol", 
            "extracellular"
        ], 
        "is_ode": false, 
        "module": [
            "TRP_ION"
        ], 
        "name_alt": "J_ena1"
    }, 
    {
        "rate": " ( (  ( surface_vac  /  ( 1.  *  F ) )   *  gv_na )  *  ( v_v  -  (  (  ( ( R  *  T )  /  F )   /  1. )   *  log( ( na_cyt  /  na_vac ) ) )  ) ) ", 
        "name": "402", 
        "x": "101.46", 
        "y": "58.472", 
        "links_to": [
            "360", 
            "350"
        ], 
        "symbol": "rect", 
        "compartments": [
            "vacuole", 
            "cytosol"
        ], 
        "is_ode": false, 
        "module": [
            "TRP_ION"
        ], 
        "name_alt": "J_vac_na"
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
        "name_alt": "VOLUME", 
        "state": "0", 
        "y": "59.472", 
        "x": "65.597", 
        "annotation": "SBO:0000468", 
        "compartment": "intracellular", 
        "is_ode": true, 
        "name": "403"
    }, 
    {
        "links_to": [], 
        "symbol": "circle", 
        "module": [
            "TRP_NUT"
        ], 
        "name_alt": "plasmamembrane_vol", 
        "state": "0", 
        "y": "59.472", 
        "x": "103.64", 
        "annotation": "SBO:0000468", 
        "compartment": "plasma_membrane", 
        "is_ode": true, 
        "name": "404"
    }, 
    {
        "links_to": [], 
        "symbol": "circle", 
        "module": [
            "TRP_NUT"
        ], 
        "name_alt": "AA_trp_check", 
        "state": "0", 
        "y": "59.472", 
        "x": "33.583", 
        "annotation": "YCM:AA_check", 
        "compartment": "intracellular", 
        "is_ode": true, 
        "name": "405"
    }, 
    {
        "links_to": [
            "418"
        ], 
        "symbol": "circle", 
        "module": [
            "TRP_NUT"
        ], 
        "name_alt": "glycerol_cyt", 
        "state": "0", 
        "y": "59.472", 
        "x": "67.597", 
        "annotation": "CHEBI:17754", 
        "compartment": "intracellular", 
        "is_ode": false, 
        "name": "406"
    }, 
    {
        "links_to": [
            "421"
        ], 
        "symbol": "circle", 
        "module": [
            "TRP_NUT"
        ], 
        "name_alt": "CO2_ext", 
        "state": "0", 
        "y": "57.472", 
        "x": "76.681", 
        "annotation": "CHEBI:16526", 
        "compartment": "extracellular", 
        "is_ode": false, 
        "name": "407"
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
        "name_alt": "glucose_cyt", 
        "state": "0", 
        "y": "58.472", 
        "x": "63.403", 
        "annotation": "CHEBI:17634", 
        "compartment": "intracellular", 
        "is_ode": false, 
        "name": "408"
    }, 
    {
        "links_to": [
            "415", 
            "412", 
            "408", 
            "412", 
            "408", 
            "412", 
            "408"
        ], 
        "symbol": "triangle", 
        "module": [
            "TRP_NUT"
        ], 
        "name_alt": "glc_uptake", 
        "equation": "SURFACE * V_MAX_HXT * ( (glucose_ext/KM_HXT) - (glucose_cyt/KM_HXT) ) / ( 1 + (glucose_ext/KM_HXT) + (glucose_cyt/KM_HXT) + KI_HXT*glucose_ext*glucose_cyt/(KM_HXT**2))", 
        "state": "0", 
        "y": "57.472", 
        "x": "64.403", 
        "annotation": "SBO:0000627", 
        "compartment": "intracellular", 
        "is_ode": false, 
        "name": "409"
    }, 
    {
        "links_to": [], 
        "symbol": "circle", 
        "module": [
            "TRP_NUT"
        ], 
        "name_alt": "VOLUME_EXT", 
        "state": "0", 
        "y": "57.472", 
        "x": "75.681", 
        "annotation": "SBO:0000468", 
        "compartment": "extracellular", 
        "is_ode": true, 
        "name": "410"
    }, 
    {
        "links_to": [
            "418"
        ], 
        "symbol": "circle", 
        "module": [
            "TRP_NUT"
        ], 
        "name_alt": "glycerol_ext", 
        "state": "0", 
        "y": "57.472", 
        "x": "74.681", 
        "annotation": "CHEBI:17754", 
        "compartment": "extracellular", 
        "is_ode": false, 
        "name": "411"
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
        "name_alt": "glucose_ext", 
        "state": "0", 
        "y": "57.472", 
        "x": "73.681", 
        "annotation": "CHEBI:17634", 
        "compartment": "extracellular", 
        "is_ode": true, 
        "name": "412"
    }, 
    {
        "links_to": [], 
        "symbol": "circle", 
        "module": [
            "TRP_NUT"
        ], 
        "name_alt": "AA_ext", 
        "state": "0", 
        "y": "57.472", 
        "x": "72.681", 
        "annotation": "YCM:AA", 
        "compartment": "extracellular", 
        "is_ode": true, 
        "name": "413"
    }, 
    {
        "links_to": [], 
        "symbol": "circle", 
        "module": [
            "TRP_NUT"
        ], 
        "name_alt": "Pi_ext", 
        "state": "-2", 
        "y": "57.472", 
        "x": "71.681", 
        "annotation": "CHEBI:43474", 
        "compartment": "extracellular", 
        "is_ode": true, 
        "name": "414"
    }, 
    {
        "links_to": [
            "420", 
            "409", 
            "403"
        ], 
        "symbol": "triangle", 
        "module": [
            "TRP_NUT"
        ], 
        "name_alt": "SURFACE", 
        "equation": "4*pi*((3./4./pi * VOLUME)**(1/3))**2", 
        "state": "0", 
        "y": "58.472", 
        "x": "64.403", 
        "annotation": "SBO:0000467", 
        "compartment": "intracellular", 
        "is_ode": false, 
        "name": "415"
    }, 
    {
        "links_to": [
            "419"
        ], 
        "symbol": "circle", 
        "module": [
            "TRP_NUT"
        ], 
        "name_alt": "EtOH_ext", 
        "state": "0", 
        "y": "57.472", 
        "x": "83.681", 
        "annotation": "CHEBI:16236", 
        "compartment": "extracellular", 
        "is_ode": false, 
        "name": "416"
    }, 
    {
        "links_to": [], 
        "symbol": "circle", 
        "module": [
            "TRP_NUT"
        ], 
        "name_alt": "NH4_ext", 
        "state": "+1", 
        "y": "57.472", 
        "x": "69.681", 
        "annotation": "CHEBI:28938", 
        "compartment": "extracellular", 
        "is_ode": true, 
        "name": "417"
    }, 
    {
        "rate": "glycerol_mem_permeability * SURFACE * (glycerol_cyt - glycerol_ext)", 
        "name": "418", 
        "x": "75.736", 
        "y": "58.472", 
        "links_to": [
            "406", 
            "411"
        ], 
        "symbol": "rect", 
        "compartments": [
            "intracellular", 
            "extracellular"
        ], 
        "is_ode": false, 
        "module": [
            "TRP_NUT"
        ], 
        "name_alt": "glycerol_trp"
    }, 
    {
        "rate": "EtOH_mem_permeability * SURFACE * 1e-10 * 1e15 * (EtOH - EtOH_ext)", 
        "name": "419", 
        "x": "77.736", 
        "y": "58.472", 
        "links_to": [
            "288", 
            "416"
        ], 
        "symbol": "rect", 
        "compartments": [
            "intracellular", 
            "extracellular"
        ], 
        "is_ode": false, 
        "module": [
            "TRP_NUT"
        ], 
        "name_alt": "v_EtOHdif"
    }, 
    {
        "rate": "SURFACE * V_MAX_HXT * ( (glucose_ext/KM_HXT) - (glucose_cyt/KM_HXT) ) / ( 1 + (glucose_ext/KM_HXT) + (glucose_cyt/KM_HXT) + KI_HXT*glucose_ext*glucose_cyt/(KM_HXT**2))", 
        "name": "420", 
        "x": "74.736", 
        "y": "58.472", 
        "links_to": [
            "408", 
            "403", 
            "415", 
            "412"
        ], 
        "symbol": "rect", 
        "compartments": [
            "intracellular", 
            "extracellular"
        ], 
        "is_ode": false, 
        "module": [
            "TRP_NUT"
        ], 
        "name_alt": "v_hxt"
    }, 
    {
        "rate": "CO2_mem_permeability * SURFACE * 1e-10 * 1e15 * (CO2 - CO2_ext)", 
        "name": "421", 
        "x": "76.736", 
        "y": "58.472", 
        "links_to": [
            "301", 
            "407"
        ], 
        "symbol": "rect", 
        "compartments": [
            "intracellular", 
            "extracellular"
        ], 
        "is_ode": false, 
        "module": [
            "TRP_NUT"
        ], 
        "name_alt": "v_C02dif"
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
            104.75, 
            94.639, 
            56.472, 
            53.472
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
            103.46, 
            92.458, 
            57.472, 
            57.472
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
            68.597, 
            4.7639, 
            59.472, 
            0.47222
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
            102.46, 
            97.458, 
            59.472, 
            59.472
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
            104.64, 
            103.64, 
            59.472, 
            59.472
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
            85.236, 
            81.236, 
            13.472, 
            12.472
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
            3.6806, 
            1.6806, 
            26.472, 
            25.472
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
            83.681, 
            69.681, 
            57.472, 
            57.472
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