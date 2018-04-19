#!/usr/bin/python

# translate YCM data into data for javascript graph drawing


import CDC_core, GEX_APC, GEX_GRN, GEX_TRL, MET_CCM, MET_CWS, MET_DNA, TRP_ION, TRP_NUT, VOL_core_growth_single_vol
import os, subprocess, json, math, re
from operator import itemgetter

nodes = []
nodes_to_int_ids = {}
links = []
compartments = {}  # compartments['name']={id,[species_ids],x,y}


def data_to_graph():
    "convert raw data to nodes and edges of a graph"
    counter = 0
    modulList = [VOL_core_growth_single_vol.VOL_core_growth_single_vol(), CDC_core.CDC_core(), GEX_APC.GEX_APC(),
                 GEX_GRN.GEX_GRN(), GEX_TRL.GEX_TRL(), MET_CCM.MET_CCM(), MET_DNA.MET_DNA(), MET_CWS.MET_CWS(),
                 TRP_ION.TRP_ION(), TRP_NUT.TRP_NUT()]
    for model in modulList:
        modeldict = model
        for species in modeldict['sp_compartment']:
            # two species are the same if compartment,annotation and state are the same
            # within a module, name is id
            true_id = species + modeldict['sp_compartment'][species]
            if species in modeldict['sp_annotations']:
                true_id = true_id + modeldict['sp_annotations'][species]
            if species in modeldict['sp_states']:
                true_id = true_id + modeldict['sp_states'][species]
            # Test for duplicates as a species can appear in multiple modules.
            if not true_id in nodes_to_int_ids:  # first time this species appears
                new_node = {
                    'name': str(counter),
                    'name_alt': species,
                    'symbol': 'circle',
                    'compartment': modeldict['sp_compartment'][species],
                    'module': [modeldict['name']],
                    'num_link': 0
                }
                if species in modeldict['sp_annotations']:
                    new_node['annotation'] = modeldict['sp_annotations'][species]
                if species in modeldict['sp_states']:
                    new_node['state'] = modeldict['sp_states'][species]
                nodes.append(new_node)
                nodes_to_int_ids[true_id] = str(counter)  # for checking for duplicates
                nodes_to_int_ids[species + modeldict['name']] = str(counter)  # for creating links
                counter += 1
                if not modeldict['sp_compartment'][species] in compartments:
                    compartments[modeldict['sp_compartment'][species]] = {
                        'module': [modeldict['name']],
                        'species': [str(counter - 1)]
                    }

                else:
                    compartments[modeldict['sp_compartment'][species]]['species'].append(str(counter - 1))
            else:  # species already seen
                nodes[int(nodes_to_int_ids[true_id])]['module'].append(modeldict['name'])
                nodes_to_int_ids[species + modeldict['name']] = nodes_to_int_ids[true_id]
                # print('duplicate found: '+nodes[int(nodes_to_int_ids[true_id])]['name_alt']+' in '+" ".join(nodes[int(nodes_to_int_ids[true_id])]['module']))

        for reaction in modeldict['reactions']:
            new_node = {
                'name': str(counter),
                'name_alt': reaction,
                'symbol': 'rect',
                'rate': modeldict['reactions'][reaction]['rate'],
                'module': [modeldict['name']],
                'compartments': [],
                'num_link': 0
            }
            # nodes_to_int_ids[reaction+modeldict['name']]=str(counter) #not used?
            reaList = re.findall(r'\w+|\W', modeldict['reactions'][reaction]['rate'])


            for source in modeldict['reactions'][reaction]['substrates']:
                links.append({'source_alt': source, 'target_alt': reaction,'source': nodes_to_int_ids[source+modeldict['name']], 'target': str(counter)})
                #check for compartment the source of this link is in
                if not nodes[int(nodes_to_int_ids[source + modeldict['name']])]['compartment'] in new_node['compartments']:
                    new_node['compartments'].append(nodes[int(nodes_to_int_ids[source+modeldict['name']])]['compartment'])
                #increase link count
                new_node['num_link']+=1
                nodes[int(nodes_to_int_ids[source + modeldict['name']])]['num_link']+=1
            for target in modeldict['reactions'][reaction]['products']:
                links.append({'source_alt': reaction, 'target_alt': target,'source': str(counter), 'target': nodes_to_int_ids[target+modeldict['name']]})
                if not 'compartment' in nodes[int(nodes_to_int_ids[target+modeldict['name']])]:
                    print('problem: '+target+modeldict['name']+' '+ str(counter) )
                if not nodes[int(nodes_to_int_ids[target+modeldict['name']])]['compartment'] in new_node['compartments']:
                    new_node['compartments'].append(nodes[int(nodes_to_int_ids[target + modeldict['name']])]['compartment'])
                # increase link count
                new_node['num_link'] += 1
                nodes[int(nodes_to_int_ids[target + modeldict['name']])]['num_link'] += 1
            for source in modeldict['reactions'][reaction]['modifiers']:
                links.append({'source_alt': source, 'target_alt': reaction,'source': nodes_to_int_ids[source+modeldict['name']], 'target': str(counter),'symbol': 'circle'})
                if not nodes[int(nodes_to_int_ids[source+modeldict['name']])]['compartment'] in new_node['compartments']:
                    new_node['compartments'].append(nodes[int(nodes_to_int_ids[source + modeldict['name']])]['compartment'])
                # increase link count
                new_node['num_link'] += 1
                nodes[int(nodes_to_int_ids[source + modeldict['name']])]['num_link'] += 1

            for i in range(0, len(new_node['compartments'])):
                compartments[new_node['compartments'][i]]['species'].append(new_node['name'])
            nodes.append(new_node)
            counter += 1

        for algebraic in modeldict['alg_eqs']:
            new_node = {  # node for the equation?
                'name': str(counter),
                'name_alt': algebraic,
                'symbol': 'triangle',
                'equation': modeldict['alg_eqs'][algebraic],
                'module': [modeldict['name']],
                'compartments': [],
                'num_link': 0
            }
            algList = re.findall(r'\w+|\W', modeldict['alg_eqs'][algebraic])
            for alg in algList:
                algid = alg + modeldict['name']  # algebraic species should be unique to a module
                if algid in nodes_to_int_ids:
                    # print('found: ' + algid)
                    links.append({'source_alt': alg,
                                  'target_alt': algebraic,
                                  'source': nodes_to_int_ids[algid],
                                  'target': str(counter),
                                  'symbol': 'circle'})  # TODO
                    if not nodes[int(nodes_to_int_ids[algid])]['compartment'] in new_node['compartments']:
                        new_node['compartments'].append(nodes[int(nodes_to_int_ids[algid])]['compartment'])
                    # increase link count
                    new_node['num_link'] += 1
                    nodes[int(nodes_to_int_ids[algid])]['num_link'] += 1
            for i in range(0, len(new_node['compartments'])):
                compartments[new_node['compartments'][i]]['species'].append(new_node['name'])
            nodes.append(new_node)
            counter += 1


def use_dot():
    "use GraphViz's dot to get x and y for nodes of the graph"

    # Build digraph for GraphViz and write to file
    text = 'digraph {' + os.linesep
    for node in nodes:
        text = text + node[
            'name'] + ';' + os.linesep  # not needed for dot beacuse all species are in a compartment but provides order used later
    for compartment in compartments:
        text = text + 'subgraph cluster_' + compartment + '{' + os.linesep
        for sp in compartments[compartment]['species']:
            text = text + nodes[int(sp)]['name'] + ';' + os.linesep
        text = text + '}' + os.linesep
    for link in links:
        text = text + link['source'] + ' -> ' + link['target'] + ';' + os.linesep

    text = text + '}'
    file = open("testfile.gv", "w")
    file.write(text)
    file.close()
    # call GraphViz
    process = subprocess.Popen(['dot', '-Tplain', 'testfile.gv'], stdout=subprocess.PIPE)
    text = process.communicate("n\n")[0].decode().split(os.linesep)
    file = open("graph.txt", "w")
    file.write('\n'.join(text))
    file.close()
    i = 1  # line 0 is not a node

    for node in nodes:
        textlist = text[i].split(" ")
        i += 1
        if textlist[0] != 'node':
            print ("Not a node")
        if textlist[1] != node['name']:
            print ("Order Changed Error: " + textlist[1] + " != " + node['name'])
        node['x'] = textlist[2]
        node['y'] = textlist[3]
        # for compartment in compartments:
        #    textlist = text[i].split(" ")
        #    i += 1
        #    compartments[compartment]['x'] = textlist[2]
        #    compartments[compartment]['y'] = textlist[3]
        #    compartments[compartment]['symbolSize'] = [float(textlist[4]),float(textlist[5])]
        # os.remove("testfile.gv") #Graph file no longer needed


def write_graph_to_file():
    # write file for JavaScript
    file = open("../JavaScript/data.js", "w")
    file.write('var data =' + json.dumps(nodes, indent=4))
    file.write(os.linesep)
    file.write('var links =' + json.dumps(links, indent=4))
    file.write(os.linesep)
    file.write('var compartments =' + json.dumps(compartments, indent=4))
    file.close()


def circle_mania():
    "all nodes of a compartment are placed on 2 circles. outer for species, inner for reactions"
    # could look good if reactions and species where placed on circles in such a fashion, that connected nodes are close
    # maybe place highly connected cirles on a 3rd circle in the middle and reactions in multple compartments between them

    # Possible: place reactions first and then place knotes on outer ring at the closest point to their reactions
    # also: place reactions that are in multiple compartments between the compartments instead on one of the rings

    compartment_center_x = 0
    compartment_center_y = 0
    theta_comp = 2 * math.pi / len(compartments)
    c = 0
    offset = 100
    for compartment in compartments:
        radius_in = 2 * len(compartments[compartment]['species']) / 3
        radius_out = len(compartments[compartment]['species'])
        radius_min = len(compartments[compartment]['species']) / 3

        x_center = compartment_center_x + (radius_out + offset) * math.cos(c * theta_comp)
        y_center = compartment_center_y + (radius_out + offset) * math.sin(c * theta_comp)
        c += 1

        min_ring_species = 0  # number of species on min_ring
        if len(compartments[compartment]['species']) > 10:
            min_ring_species = 5

        sp = []
        re = []
        for node in compartments[compartment]['species']:
            if 'rate' in nodes[int(node)]:
                re.append((node, nodes[int(node)]['num_link']))
            else:
                sp.append((node, nodes[int(node)]['num_link']))

        sp.sort(key=itemgetter(1), reverse=True)

        theta_out = 2 * math.pi / (len(sp) - min_ring_species)  # 2pi/number of species
        theta_min = 0
        if (min_ring_species != 0):
            theta_min = 2 * math.pi / min_ring_species
        i = 0
        for node in sp:
            if i < min_ring_species:
                nodes[int(node[0])]['x'] = str(x_center + radius_min * math.cos(i * theta_min))
                nodes[int(node[0])]['y'] = str(y_center + radius_min * math.sin(i * theta_min))
            else:
                nodes[int(node[0])]['x'] = str(x_center + radius_out * math.cos((i - min_ring_species) * theta_out))
                nodes[int(node[0])]['y'] = str(y_center + radius_out * math.sin((i - min_ring_species) * theta_out))
            i += 1

        if (len(re) != 0):
            theta_in = 2 * math.pi / len(re)  # 2pi/number of reactions
            i = 0
            for node in re:
                nodes[int(node[0])]['x'] = str(x_center + radius_in * math.cos(i * theta_in))
                nodes[int(node[0])]['y'] = str(y_center + radius_in * math.sin(i * theta_in))
                i += 1

    return 0


data_to_graph()
use_dot()
# circle_mania()
write_graph_to_file()
# print nodes
