

var species = new Map();
var compartments = new Map();
/*
Example Compartment:
{
	name: compartment name,
	modules: related modules,
	reactions: List of included reactions,
	open: wheter or not the comparment is open
	other informations?
}

Example Reactions:
{
	name: reaction name,
	module: related module,
	//compartment: compartment this reaction is in, ??? is this necessary ???
	reactants: list of ingoing species,
	products: list of outgoing species,
	reaction information: displayed information
}
Example Species:
{
	name: species name,
	info: displayed info,
	displayed: true if connected with any shown reaction
}
*/

function addTestData(){
	//add species
	species['Species_1'] = {
		name: 'Species_1',
		info: 'test1',
		displayed: false
	};
	species['Species_2'] = {
		name:'Species_2',
		info: 'test2',
		displayed: false
	};
	species['ATP'] = {
		name: 'ATP',
		info: 'ATP test',
		displayed: false
	};
	species['ADP'] = {
		name: 'ADP',
		info: 'ADP test',
		displayed: false
	};
	species['Species_3'] = {
		name:'Species_3',
		info: 'test3',
		displayed: false
	};
	species['Species_4'] = {
		name:'Species_4',
		info: 'test4',
		displayed: false
	};

	var cmap1 = new Map();
	cmap1['reaction_1']={
		name: 'reaction_1',
		module: 'cytosol',
		reactants: ['Species_1','ATP'],
		products: ['Species_2', 'ADP'],
		info: 'reaction_1 test'
	};
	cmap1['reaction_2']={
		name: 'reaction_2',
		module: 'intracellular',
		reactants: ['Species_1','ATP'],
		products: ['Species_1','ADP'],
		info: 'reaction_2 test'
	};
	
	compartments['Compartment_1'] = {
		name: 'Compartment_1',
		modules: ['cytosol','intracellular'],
		reactions: cmap1,
		open: true,
		info: 'compartment_1 info'
	};

	var cmap2 = new Map();
	cmap2['reaction_3']={
		name: 'reaction_3',
		module: 'cytosol',
		reactants: ['Species_3','ATP'],
		products: ['Species_4', 'ADP'],
		info: 'reaction_3 test'
	};
	compartments['Compartment_2'] = {
		name: 'Compartment_2',
		modules: ['cytosol'],
		reactions: cmap2,
		open: true,
		info: 'compartment_2 info'
	};
}

function reset_species_display(){
	for(var sp in species){
		if (!species.hasOwnProperty(sp)) { continue;} // avoid parent properties of map
		sp.displayed = false;
	}
}

function createVisibleGraph(){
	var data= new Array();
	var links =new Array();
	var count = 0;
	reset_species_display();
	info_box.style.width = '33%';
	for (var compartment in compartments) {
    	if (!compartments.hasOwnProperty(compartment)) { continue;} // avoid parent properties of map
    	if(compartment.open){ //not working?
    		count ++;
    	 	//add all reactions of this compartment and connected species to graph
    	 	for(var reaction in compartment.reactions){
    	 		if (!compartment.reactions.hasOwnProperty(reaction)) { continue;} // avoid parent properties of map
    	 		data.push({
    	 			name: reaction.name,
    	 			symbol: 'rect'
    	 		}); //add reaction node
    	 		//add all species and links between species and reactions
    	 		for (var sp in reaction.reactants){
    	 			if (!species.hasOwnProperty(sp)) { continue;} // avoid parent properties of map
    	 			if (!sp.displayed) {
    	 				data.push({
    	 					name: sp.name,
    	 					symbol: 'circle'
    	 				});
    	 				sp.displayed =true;
    	 			}
    	 			links.push({
    	 				source: sp.name,
    	 				target: reaction.name
    	 			});
    	 		}
    	 	}
    	}
    	else{
    		//add compartment as a node
    		//how to determin links from closed compartments?
    	}
	}
	
	
	info_box.innerHTML = count;
	return [data,links];
}


/* old code. to be romoved soon
function createVisibleGraph(data){
	var links=[];
	for(i = 0; i< reactions.length; i++){
		if(compartments[reactions[i].compartment].position==-1){ //compartment of this reaction is open
			data.push({name: reactions[i].name, symbol: 'rect'}); //add reaction
			var pos = data.length-1; //remember reaction position
			for(j= 0; j< reactions[i].in.length; j++){ //go through all ingoing species				
				if(species[reactions[i].in[j]].visible==-1){ //species is not in data 
					data.push({name:species[reactions[i].in[j]].name, symbol: 'circle' });
					species[reactions[i].in[j]].visible=data.length-1;
				}
				links.push({source: species[reactions[i].in[j]].visible, target: pos}); //create link between species and reaction
			}
			for(j= 0; j< reactions[i].out.length; j++){ //go through all outgoing species				
				if(species[reactions[i].out[j]].visible==-1){ //species is not in data 
					data.push({name:species[reactions[i].out[j]].name, symbol: 'circle' });
					species[reactions[i].out[j]].visible=data.length-1;
				}
				links.push({source: pos, target: species[reactions[i].out[j]].visible}); //create link between species and reaction
			}
		}
		else {
			/*
			compartment is closed -> all links normally conected to the reaction should now be connected
			to a compartment if the corresponding species is visible. Problem: visibility for all species
			isn't known befor we have seen all reactions.
			*/	/*		
		}

	}
	
	for(i = 0; i< reactions.length; i++){ //TODO: Closed Compartments
		if(compartments[reactions[i].compartment].position!=-1){
			for(j= 0; j< reactions[i].in.length; j++){
				if(species[reactions[i].in[j]].visible!=-1){
					links.push({source: species[reactions[i].in[j]].visible, target: compartments[reactions[i].compartment].position});
				}
			}
			for(j= 0; j< reactions[i].out.length; j++){
				if(species[reactions[i].out[j]].visible!=-1){
					links.push({source: compartments[reactions[i].compartment].position,target: species[reactions[i].in[j]].visible});
				}
			}

		}
	}

	return [data,links]
}
*/