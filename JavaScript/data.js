

var species = new Map();
var compartments = new Map();
/*
Example Compartment:
{
	name: compartment name,
	modules: related modules,
	reactions: List of included reactions,
	other informations?
}

Example Reactions:
{
	name: reaction name,
	module: related module,
	//compartment: compartment this reaction is in, ??? is this necessary ???
	in: list of ingoing species,
	out: list of outgoing species,
	reaction information: more information for showing in 
}
*/

function addTestData(){
	//add species
	species['Species_1'] = {
		name: 'Species_1',
		info: 'test1'
	};
	species['Species_2'] = {
		name:'Species_2',
		info: 'test2'
	};
	species['ATP'] = {
		name: 'ATP',
		info: 'ATP test'
	}
	species['ADP'] = {
		name: 'ADP',
		info: 'ADP test'
	}

	compartments['Compartment_1'] = {
		name: 'Compartment_1',
		modules: ['cytosol','intracellular'],
		reactions: new Map([
			['reaction_1',{
				name: 'reaction_1',
				module: 'cytosol',
				in: ['Species_1','ATP'],
				out: ['Species_2', 'ADP'],
				info: 'reaction_1 test'
			}],
			['reaction_2',{
				name: 'reaction_2',
				module: 'intracellular',
				in: ['Species_1','ATP'],
				out: ['Species_1', 'ADP'],
				info: 'reaction_2 test'
			}]
		]),
		info: 'compartment_1 info'
	}
	compartments['Compartment_2'] = {
		name: 'Compartment_2',
		modules: ['cytosol'],
		reactions: new Map([
			['reaction_3',{
				name: 'reaction_3',
				module: 'cytosol',
				in: ['Species_3','ATP'],
				out: ['Species_4', 'ADP'],
				info: 'reaction_3 test'
			}]
		]),
		info: 'compartment_1 info'
	}
}
[


function isCompartment(name){
	for (i = 0; i<compartments.length;i++){
		if(compartments[i].name == name){
			return true;
		}
	}
	return false;
}

function getCompartmentIndex(name){
	for (i = 0; i<compartments.length;i++){
		if(compartments[i].name == name){
			return i;
		}
	}
	return -1;
}


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
			*/			
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