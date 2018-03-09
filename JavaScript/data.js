var reactions = {};//new Map();
var compartments = {};//new Map();
/*
 * example compartments
 * compartments[Compartment id] = {
 * name: compartment name, // may be the same as id 
 * modules: related modules,
 * internal: map of included species and sub-compartments, 
 * open: whether or not the compartment is open
 * }
 * 
 * Example Species 
 * species[species id] = {
 * name: species name,
 * modules: related modules,
 * annotations: ,
 * states: modifications (phosphorylation (p), etc...) and charge (-1, 1, 0),
 * displayed: whether or not the species is open
 * }
 * 
 * Example Reaction
 * reactions[reaction id] {
 * rate: ,
 * substrates: list of substrates,
 * products: list of products,
 * modifiers: list of modifiers
 * }
 */


/*
function reset_species_display() {
	for ( var sp in species) {
		if (!species.hasOwnProperty(sp)) {
			continue;
		} // avoid parent properties of map
		sp.displayed = false;
	}
}
*/

function createVisibleGraph() {
	var data = new Array();
	var links = new Array();
	var count = 0;
	//reset_species_display();
	info_box.style.width = '33%';
	jQuery.each(compartments,function(i,compartment){
		if(compartment.open){			
			jQuery.each(compartment.internal, function(j,sp){
				//TODO: check for sub-compartments
				if(!sp.display){ //only necessary if species can appear multple times?				
					data.push({
						name : sp.name,
						symbol : 'circle'
					});
					sp.display = true;
				}
			})
		}
		
	})
	jQuery.each(reactions,function(i,reaction){
		//TODO: closed compartments
		data.push({
			name : i,
			symbol : 'rect'
		});
		jQuery.each(reaction.substrates, function(j,elem){
			links.push({source: elem ,target: i});
		})
		jQuery.each(reaction.products, function(j,elem){
			links.push({target: elem ,source: i});
		})
		jQuery.each(reaction.modifiers, function(j,elem){
			links.push({source: elem ,target: i, symbol: 'circle'});
		})
		
	})

	return [ data, links ];
}

function addTestData() {
	var species = {};
	species['Glc'] = {
			name: 'Glc',
			modules: 'MET_CCM',
			annotaion:'CHEBI:17634',
			states: '0',
			displayed: false
	};
	species['HexP'] = {
			name: 'HexP' ,
			modules: 'MET_CCM',
			annotaion:'CHEBI:58225',
			states: '-2',
			displayed: false
	};
	species['EtOH'] = {
			name: 'EtOH',
			modules: 'MET_CCM',
			annotaion: 'CHEBI:16236',
			states: '0',
			displayed: false
	};
	species['ATP'] = {
			name:'ATP' ,
			modules: 'MET_CCM',
			annotaion: 'CHEBI:30616',
			states: '-4',
			displayed: false
	};
	species['ADP'] = {
			name: 'ADP',
			modules: 'MET_CCM',
			annotaion: 'CHEBI:456216',
			states: '-3',
			displayed: false
	};
	species['Pi'] = {
			name: 'Pi',
			modules: 'MET_CCM',
			annotaion: 'CHEBI:43474',
			states: '-2',
			displayed: false
	};
	species['AA'] = {
			name: 'AA',
			modules: 'MET_CCM',
			annotaion: 'YCM:AA',
			states: '0',
			displayed: false
	};
	species['NA_RNA'] = {
			name:'NA_RNA' ,
			modules: 'MET_CCM',
			annotaion: 'YCM:NA_RNA',
			states: '0',
			displayed: false
	};
	species['NA_DNA'] = {
			name:'NA_DNA' ,
			modules: 'MET_CCM',
			annotaion: 'YCM:NA_DNA',
			states: '0',
			displayed: false
	};
	species['chitin'] = {
			name: 'chitin',
			modules: 'MET_CCM',
			annotaion: 'CHEBI:17029',
			states: '0',
			displayed: false
	};
	species['mannan'] = {
			name:'mannan' ,
			modules: 'MET_CCM',
			annotaion: 'CHEBI:28808',
			states: '0',
			displayed: false
	};
	species['glucan'] = {
			name: 'glucan' ,
			modules: 'MET_CCM',
			annotaion: 'CHEBI:37671',
			states: '0',
			displayed: false
	};
	species['lipid'] = {
			name: 'lipid',
			modules: 'MET_CCM',
			annotaion: 'YCM:lipid',
			states: '0',
			displayed: false
	};
	species['int_vol'] = {
			name: 'int_vol',
			modules: 'MET_CCM',
			annotaion: 'SBO:0000468',
			states: '0',
			displayed: false
	};
	species['CO2'] = {
			name: 'CO2',
			modules: 'MET_CCM',
			annotaion: 'CHEBI:16526',
			states: '0',
			displayed: false
	};
	species['TriP'] = {
			name: 'TriP',
			modules: 'MET_CCM',
			annotaion: 'CHEBI:58027',
			states: '-2',
			displayed: false
	};
	species['pyr'] = {
			name: 'pyr',
			modules: 'MET_CCM',
			annotaion: 'CHEBI:15361',
			states: '-1',
			displayed: false
	};
	species['NAD'] = {
			name: 'NAD',
			modules: 'MET_CCM',
			annotaion: 'CHEBI:57540',
			states: '-1',
			displayed: false
	};
	species['NADH'] = {
			name: 'NADH',
			modules: 'MET_CCM',
			annotaion: 'CHEBI:57945',
			states: '-2',
			displayed: false
	};
	species['NH4'] = {
			name: 'NH4' ,
			modules: 'MET_CCM',
			annotaion: 'CHEBI:28938',
			states: '+1',
			displayed: false
	};
	species['H'] = {
			name: 'H',
			modules: 'MET_CCM',
			annotaion: 'CHEBI:24636',
			states: '+1',
			displayed: false
	};
	species['TriP_check'] = {
			name: 'TriP_check',
			modules: 'MET_CCM',
			annotaion: 'YCM:TriP_check',
			states: '-2',
			displayed: false
	};
	species['pyr_check'] = {
			name: 'pyr_check',
			modules: 'MET_CCM',
			annotaion: 'YCM:pyr_check',
			states: '-1',
			displayed: false
	};
	species['EtOH_check'] = {
			name: 'EtOH_check',
			modules: 'MET_CCM',
			annotaion: 'YCM:EtOH_check',
			states: '0',
			displayed: false
	};
	species['CO2_check'] = {
			name: 'CO2_check',
			modules: 'MET_CCM',
			annotaion: 'YCM:CO2_check',
			states: '0',
			displayed: false
	};
	species['O2_check'] = {
			name: 'O2_check',
			modules: 'MET_CCM',
			annotaion: 'YCM:O2_check',
			states: '0',
			displayed: false
	};
	species['HexP_check'] = {
			name: 'HexP_check',
			modules: 'MET_CCM',
			annotaion: 'YCM:HexP_check',
			states: '-2',
			displayed: false
	};
	species['glycerol'] = {
			name: 'glycerol',
			modules: 'MET_CCM',
			annotaion: 'CHEBI:17754',
			states: '0',
			displayed: false
	};
	compartments['intracellular']= {
			name: 'intracellular2', // may be the same as id 
			modules: ['MET_CCM'],
			internal: species, 
			open: true
	};
	reactions['v_TriP']={
			//rate:
			substrates: ['HexP','ATP'],
			products: ['TriP','ADP','TriP_check'],
			modifiers: []
	};
	reactions['v_pyr']={
			//rate:
			substrates: ['TriP','ADP','Pi','NAD'],
			products: ['pyr','NADH','AtP','pyr_check'],
			modifiers: []
	};
	reactions['v_ferm']={
			//rate:
			substrates: ['pyr','NADH'],
			products: ['EtOH','CO2','EtOH_check','CO2_check','NAD'],
			modifiers: []
	};
	reactions['v_HK']={
			//rate:
			substrates: ['Glc','ATP'],
			products: ['HexP','ADP','HexP_check'],
			modifiers: []
	};
	reactions['v_glucan_f']={
			//rate:
			substrates: ['HexP','ATP'],
			products: ['glucan','ADP','Pi'],
			modifiers: []
	};
	reactions['v_mannan']={
			//rate:
			substrates: ['HexP','ATP'],
			products: ['mannan','ADP','Pi'],
			modifiers: []
	};
	reactions['v_chitin_f']={
			//rate:
			substrates: ['HexP','ATP','NH4'],
			products: ['chitin','ADP','Pi','H'],
			modifiers: []
	};
	reactions['v_NA_RNA_f']={
			//rate:
			substrates: ['HexP','TriP','pyr','ATP','NH4'],
			products: ['NA_RNA','ADP','Pi','H'],
			modifiers: []
	};
	reactions['v_NA_DNA_syn']={
			//rate:
			substrates: ['NA_RNA','NH4'],
			products: ['NA_DNA','H'],
			modifiers: []
	};
	reactions['v_AA_f']={
			//rate:
			substrates: ['HexP','pyr','ATP','NH4'],
			products: ['AA','TriP','ADP','Pi','H'],
			modifiers: []
	};
	reactions['v_lipid_f']={
			//rate:
			substrates: ['HexP','pyr','ATP','NH4'],
			products: ['lipid','TriP','ADP','Pi','H'],
			modifiers: []
	};
	reactions['v_resp']={
			//rate:
			substrates: ['ADP','Pi','NADH','O2_check'],
			products: ['ATP','NAD'],
			modifiers: []
	};
	reactions['v_TCA']={
			//rate:
			substrates: ['pyr','NAD','ADP','Pi'],
			products: ['NADH','CO2','ATP','CO2_check'],
			modifiers: []
	};
	reactions['v_ADP_syn']={
			//rate:
			substrates: ['NA_RNA','Pi'],
			products: ['ADP'],
			modifiers: ['ATP']
	};
	reactions['v_NAD_syn']={
			//rate:
			substrates: ['AA','ADP'],
			products: ['NAD'],
			modifiers: ['NADH']
	};
	reactions['v_ATP_syn']={
			//rate:
			substrates: ['ATP'],
			products: ['ADP','Pi'],
			modifiers: []
	};
	reactions['v_glycerol_syn']={
			//rate:
			substrates: ['TriP','NADH'],
			products: ['glycerol','NAD','Pi'],
			modifiers: []
	};

}

