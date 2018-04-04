#!/usr/bin/python

#translate YCM data into data for javascript graph drawing

import MET_CCM_reduced as MET_CCM
import os, subprocess, json

nodes = []
nodes_to_int_ids = {}
links = []
compartments = {} # compartments['name']={id,[species_ids],x,y}

def data_to_graph():
    "convert raw data to nodes and edges of a graph"
    counter = 0
    #TODO: iterate over all modules
    mod = MET_CCM
    for species in mod.modeldict['sp_compartment']:
        # two species are the same if compartment,annotation and state are the same
        # within a module, name is id
        true_id =species+mod.modeldict['sp_compartment'][species]+mod.modeldict['sp_annotations'][species]+mod.modeldict['sp_states'][species]
        #Test for duplicates as a species can appear in multiple modules.
        if not true_id in nodes_to_int_ids: #first time this species appears
            nodes.append({
                'name': str(counter),
                'name_alt':species,
                'symbol' : 'circle',
                'compartment': mod.modeldict['sp_compartment'][species],
                'annotation': mod.modeldict['sp_annotations'][species],
                'state': mod.modeldict['sp_states'][species],
                'module': [mod.modeldict['name']]
            })
            nodes_to_int_ids[true_id]=str(counter) #for checking for duplicates
            nodes_to_int_ids[species+mod.modeldict['name']]=str(counter) #for creating links
            counter+=1
            if not mod.modeldict['sp_compartment'][species] in compartments:
                compartments[mod.modeldict['sp_compartment'][species]] = {
                    'module': [mod.modeldict['name']],
                    'species': [str(counter-1)]
                }

            else:
                compartments[mod.modeldict['sp_compartment'][species]]['species'].append(str(counter-1))
        else: #species already seen
            nodes[int(nodes_to_int_ids(true_id))]['module'].append('module')


    for reaction in mod.modeldict['reactions']:
        nodes.append({
            'name': str(counter),
            'name_alt':reaction,
            'symbol': 'rect',
            'rate': mod.modeldict['reactions'][reaction]['rate'],
            'module': [mod.modeldict['name']]
        })
        nodes_to_int_ids[mod.modeldict['name']+reaction]=str(counter) #not used?

        for source in mod.modeldict['reactions'][reaction]['substrates']:
            links.append({'source_alt': source, 'target_alt': reaction,'source': nodes_to_int_ids[source+mod.modeldict['name']], 'target': str(counter)})
        for target in mod.modeldict['reactions'][reaction]['products']:
            links.append({'source_alt': reaction, 'target_alt': target,'source': str(counter), 'target': nodes_to_int_ids[target+mod.modeldict['name']]})
        for source in mod.modeldict['reactions'][reaction]['modifiers']:
            links.append({'source_alt': source, 'target_alt': reaction,'source': nodes_to_int_ids[source+mod.modeldict['name']], 'target': str(counter),'symbol': 'circle'})
        counter += 1




def use_dot():
    "use GraphViz's dot to get x and y for nodes of the graph"

    #Build digraph for GraphViz and write to file
    text = 'digraph {'+os.linesep
    for node in nodes:
        text = text + node['name']+';'+os.linesep
    for compartment in compartments:
        text = text + 'subgraph cluster_' + compartment + '{'

        text = text + '}'
    for link in links:
        text = text +link['source']+' -> '+link['target'] +';'+os.linesep

    text = text + '}'
    file = open("testfile.gv","w")
    file.write(text)
    file.close()
    #call GraphViz
    process = subprocess.Popen(['dot', '-Tplain', 'testfile.gv'], stdout=subprocess.PIPE)
    text = process.communicate("n\n")[0].decode().split(os.linesep)
    file = open("graph.txt", "w")
    file.write('\n'.join(text))
    file.close()
    i=1 #line 0 is not a node

    for node in nodes:
        textlist= text[i].split(" ")
        i+=1
        if textlist[0] != 'node':
            print ("Not a node")
        if textlist[1] != node['name']:
            print ("Order Changed Error: "+textlist[1]+ " != "+ node['name'])
        node['x'] = textlist[2]
        node['y'] = textlist[3]
    #for compartment in compartments:
    #    textlist = text[i].split(" ")
    #    i += 1
    #    compartments[compartment]['x'] = textlist[2]
    #    compartments[compartment]['y'] = textlist[3]
    #    compartments[compartment]['symbolSize'] = [float(textlist[4]),float(textlist[5])]
    #os.remove("testfile.gv") #Graph file no longer needed



    #write file for JavaScript
    file = open("../JavaScript/data.js","w")
    file.write('var data ='+json.dumps(nodes,indent=4))
    file.write(os.linesep)
    file.write('var links ='+json.dumps(links,indent=4))
    file.write(os.linesep)
    file.write('var compartments =' + json.dumps(compartments, indent=4))
    file.close()



data_to_graph()
use_dot()
#print nodes