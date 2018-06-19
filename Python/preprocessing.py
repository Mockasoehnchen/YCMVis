#!/usr/bin/python

# translate YCM data into data for javascript graph drawing


import CDC_core, GEX_APC, GEX_GRN, GEX_TRL, MET_CCM, MET_CWS, MET_DNA, TRP_ION, TRP_NUT, VOL_core_growth_single_vol
import os, subprocess, json, math, re
from operator import itemgetter

nodes = []
nodes_to_int_ids = {}
links = []
compartments = {}


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
            true_id =  modeldict['sp_compartment'][species]
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
                    'links_to': [],
                    'links_from': [],
                    'links_to_mod': [],
                    'links_from_mod': [],
                    'uni_links': [],
                    'is_ode': True
                }
                if species in modeldict['sp_annotations']:
                    new_node['annotation'] = modeldict['sp_annotations'][species]
                if species in modeldict['sp_states']:
                    new_node['state'] = modeldict['sp_states'][species]
                nodes.append(new_node)
                nodes_to_int_ids[true_id] = str(counter)  # for checking for duplicates
                nodes_to_int_ids[species + modeldict['name']] = str(counter)  # for creating links
                counter += 1
                if not modeldict['sp_compartment'][species] in compartments: #add new compartments to list of known compartments
                    compartments[modeldict['sp_compartment'][species]] = {
                        'module': [modeldict['name']],
                        'species': [str(counter - 1)]
                    }

                else: #add species to compartment
                    compartments[modeldict['sp_compartment'][species]]['species'].append(str(counter - 1))
            else:  # species already seen
                nodes[int(nodes_to_int_ids[true_id])]['module'].append(modeldict['name'])
                nodes_to_int_ids[species + modeldict['name']] = nodes_to_int_ids[true_id]
                # print('duplicate found: '+nodes[int(nodes_to_int_ids[true_id])]['name_alt']+' in '+" ".join(nodes[int(nodes_to_int_ids[true_id])]['module']))

        for reaction in modeldict['reactions']:
            #add nodes for reactions
            new_node = {
                'name': str(counter),
                'name_alt': reaction,
                'symbol': 'rect',
                'rate': modeldict['reactions'][reaction]['rate'],
                'module': [modeldict['name']],
                'compartments': [],
                'links_to': [],
                'links_from': [],
                'links_to_mod': [],
                'links_from_mod': [],
                'uni_links': [],
                'is_ode': False #reaction can never be ode-species
            }
            # nodes_to_int_ids[reaction+modeldict['name']]=str(counter) #not used?
            reaList = re.findall(r'\w+|\W', modeldict['reactions'][reaction]['rate'])

            #add links gained from substrates, produkts and modifiers of reactions
            #reaction is considered to be in all compartments one of its neighbors is in
            for source in modeldict['reactions'][reaction]['substrates']:
                links.append({'source_alt': source, 'target_alt': reaction,'source': nodes_to_int_ids[source+modeldict['name']], 'target': str(counter)})
                #check for compartment the source of this link is in
                if not nodes[int(nodes_to_int_ids[source + modeldict['name']])]['compartment'] in new_node['compartments']:
                    new_node['compartments'].append(nodes[int(nodes_to_int_ids[source+modeldict['name']])]['compartment'])

                new_node['links_from'].append(nodes_to_int_ids[source+modeldict['name']])
                nodes[int(nodes_to_int_ids[source + modeldict['name']])]['links_to'].append(str(counter))
                #source node can no longe be ode-species
                nodes[int(nodes_to_int_ids[source + modeldict['name']])]['is_ode']= False

            for target in modeldict['reactions'][reaction]['products']:
                links.append({'source_alt': reaction, 'target_alt': target,'source': str(counter), 'target': nodes_to_int_ids[target+modeldict['name']]})
                if not 'compartment' in nodes[int(nodes_to_int_ids[target+modeldict['name']])]:
                    print('problem: '+target+modeldict['name']+' '+ str(counter) )
                if not nodes[int(nodes_to_int_ids[target+modeldict['name']])]['compartment'] in new_node['compartments']:
                    new_node['compartments'].append(nodes[int(nodes_to_int_ids[target + modeldict['name']])]['compartment'])

                new_node['links_to'].append(nodes_to_int_ids[target + modeldict['name']])
                nodes[int(nodes_to_int_ids[target + modeldict['name']])]['links_from'].append(str(counter))
                # target node can no longe be ode-species
                nodes[int(nodes_to_int_ids[target + modeldict['name']])]['is_ode'] = False

            for source in modeldict['reactions'][reaction]['modifiers']:
                links.append({'source_alt': source, 'target_alt': reaction,'source': nodes_to_int_ids[source+modeldict['name']], 'target': str(counter),'symbol': 'circle'})
                if not nodes[int(nodes_to_int_ids[source+modeldict['name']])]['compartment'] in new_node['compartments']:
                    new_node['compartments'].append(nodes[int(nodes_to_int_ids[source + modeldict['name']])]['compartment'])

                #different kind of to and from
                new_node['links_from_mod'].append(nodes_to_int_ids[source + modeldict['name']])
                nodes[int(nodes_to_int_ids[source + modeldict['name']])]['links_to_mod'].append(str(counter))
                #modifiers can be ode-species
            for i in range(0, len(new_node['compartments'])):
                compartments[new_node['compartments'][i]]['species'].append(new_node['name'])
            nodes.append(new_node)
            counter += 1

        for algebraic in modeldict['alg_eqs']: #gather algebraic-species
            if not algebraic+modeldict['name'] in nodes_to_int_ids: #all algebraic species should allready be introduced
                print('Error: '+algebraic)
            nodes[int(nodes_to_int_ids[algebraic+modeldict['name']])]['symbol']='triangle'
            nodes[int(nodes_to_int_ids[algebraic + modeldict['name']])]['is_ode'] = False #algebraic-species can never be ode-species
            nodes[int(nodes_to_int_ids[algebraic + modeldict['name']])]['equation'] = modeldict['alg_eqs'][algebraic]
            algList = re.findall(r'\w+|\W', modeldict['alg_eqs'][algebraic])
            for alg in algList:
                algid = alg + modeldict['name']  # algebraic species should be unique to a module
                if algid in nodes_to_int_ids:
                    # print('found: ' + algid)
                    links.append({'source_alt': alg,
                                  'target_alt': algebraic,
                                  'source': nodes_to_int_ids[algid],
                                  'target': nodes_to_int_ids[algebraic+modeldict['name']],
                                  'symbol': 'none'})

                    #not really to or from
                    nodes[int(nodes_to_int_ids[algebraic + modeldict['name']])]['uni_links'].append(nodes_to_int_ids[algid])
                    nodes[int(nodes_to_int_ids[algid])]['uni_links'].append(nodes_to_int_ids[algebraic+modeldict['name']])

        for ode in modeldict['odes']: #gather ode-species
            ode_id= ode+modeldict['name'] #this species should already be introduce in this module
            if nodes[int(nodes_to_int_ids[ode_id])]['is_ode']:
                ode_list = re.findall(r'\w+|\W', modeldict['odes'][ode])
                for elem in ode_list:
                    if elem+modeldict['name'] in nodes_to_int_ids:
                        links.append({'source_alt': ode,
                                      'target_alt': elem,
                                      'source': nodes_to_int_ids[ode_id],
                                      'target': nodes_to_int_ids[elem+modeldict['name']],
                                      'symbol': 'none'})
                        nodes[int(nodes_to_int_ids[ode_id])]['links_to'].append(nodes_to_int_ids[elem+modeldict['name']])
                        nodes[int(nodes_to_int_ids[elem+modeldict['name']])]['links_from'].append(
                            nodes_to_int_ids[ode_id])

def same_edge_collection():
    "collect information on which nodes have similar edges. This could be used for edge collapse"
    # TODO: collect percentage of overlaps
    numbers = {}
    percentage = {}
    all_same =[]
    for i in range(0,len(nodes)):
        for j in range(i+1,len(nodes)):
            same_to = [val for val in nodes[i]['links_to'] if val in nodes[j]['links_to']]
            same_from = [val for val in nodes[i]['links_from'] if val in nodes[j]['links_from']]
            same_to_mod = [val for val in nodes[i]['links_to_mod'] if val in nodes[j]['links_to_mod']]
            same_from_mod = [val for val in nodes[i]['links_from_mod'] if val in nodes[j]['links_from_mod']]
            same_uni_links = [val for val in nodes[i]['uni_links'] if val in nodes[j]['uni_links']]
            same = len(same_to) + len(same_from)+len(same_to_mod) + len(same_from_mod)+ len(same_uni_links)
            if same in numbers:
                numbers[same]+=1
            else:
                numbers[same] = 1

            len_i = len(nodes[i]['links_to']) + len(nodes[i]['links_from'])+len(nodes[i]['links_to_mod']) + len(nodes[i]['links_from_mod'])+ len(nodes[i]['uni_links'])
            len_j= len(nodes[j]['links_to']) + len(nodes[j]['links_from']) + len(nodes[j]['links_to_mod']) + len(
                nodes[j]['links_from_mod']) + len(nodes[j]['uni_links'])
            percent= 0
            if(len_i!=0 and same!=0):
                percent = str(same /float(len_i)*100)
            if percent in percentage:
                percentage[percent]+=1
            else:
                percentage[percent] = 1
            percent = 0
            if (len_j != 0 and same!=0):
                percent = str(same / float(len_i)*100)
            if percent in percentage:
                percentage[percent] += 1
            else:
                percentage[percent] = 1

            if same!=0 and same == len_i and same == len_j:
                if 'all' in numbers:
                    numbers['all'] += 1
                else:
                    numbers['all'] = 1
                all_same.append(nodes[i]['name_alt']+'+'+nodes[j]['name_alt']+': '+str(same))
            if(same==42):
                print(nodes[i]['name_alt']+'+'+nodes[j]['name_alt']+': '+str(same))

    for i in numbers:
        print i, numbers[i]
    print(all_same)


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
        os.remove("testfile.gv") #Graph file no longer needed

def new_dot(type):
    "use GraphViz's dot to get x and y for nodes of the graph. type declares the layout algorithm used for GraphViz."
    clustering = {}
    #build compartment-based culstering
    for node in nodes:
        cluster = ""
        if 'compartment' in node: #species
            cluster = node['compartment']
            if not cluster in clustering:
                clustering[cluster]=[]
            clustering[cluster].append(node['name'])
        else: # reactions are in no compartment but get assigned to one or more based on connected nodes
            cluster = '8'.join(sorted(node['compartments'])) # '_' is used in normal compartment names and other signs have meaning in Graphvis
            if not cluster in clustering:
                clustering[cluster] =[]
                for comp in sorted(node['compartments']):
                    clustering[cluster].append(comp)
            clustering[cluster].append(node['name'])

    # introduce extra edges to improve layout, these edges will not be seen in the final design
    pseudoLinks = []
    if type =="dot":
        for cluster in clustering:
            if len(clustering[cluster])<20 and not '8' in cluster:
                for node in clustering[cluster]:
                    for node2 in clustering[cluster]:
                        if (not (len(nodes[int(node)]['links_to'])==0 and len(nodes[int(node)]['links_from'])==0)) or(not (len(nodes[int(node2)]['links_to'])==0 and len(nodes[int(node2)]['links_from'])==0)):
                            link = node2+ ' -> '+ node+';' + os.linesep;
                            pseudoLinks.append(link);

    # Build digraph for GraphViz and write to file
    text = 'digraph {' + os.linesep +'layout='+type+ os.linesep
    for node in nodes:
        text = text + node[
            'name'] + ';' + os.linesep  # not needed for dot beacuse all species are in a compartment but provides order used later
    for cluster in clustering:
        if '8' in cluster: #cluster with reations that are connected to multiple compartments
            text = text + 'subgraph ' + cluster + '{' + os.linesep
            for sp in clustering[cluster]:
                text = text + sp + ';' + os.linesep
            text = text + '}' + os.linesep
        else:
            text = text + 'subgraph '
            if type=="dot": text+= 'cluster_' #using GraphViz cluster mechanic on other layouts than dot looks terrible or doesn't work
            text+= cluster + '{' + os.linesep #
            for sp in clustering[cluster]:
                text = text + sp + ';' + os.linesep
            text = text + '}' + os.linesep
    for link in links:
        text = text + link['source'] + ' -> ' + link['target'] + ';' + os.linesep
    for link in pseudoLinks:
        text += link

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

    for node in nodes: #uses order introduced earlier
        textlist = text[i].split(" ")
        i += 1
        if textlist[0] != 'node':
            print ("Not a node")
        if textlist[1] != node['name']:
            print ("Order Changed Error: " + textlist[1] + " != " + node['name'])
        node['x'] = textlist[2]
        node['y'] = textlist[3]

    #computes dimensions of compartments
    for cluster in clustering:
        #print out cluster size for statistics
        print(cluster+' : '+ str(len(clustering[cluster])))
        if cluster in compartments:
            max_x = -10000 #arbitrary max initialization, needs testing
            max_y = -10000 #arbitrary max initialization, needs testing
            min_x = 10000
            min_y = 10000
            for node in clustering[cluster]:
                x = float(nodes[int(node)]['x'])
                y = float(nodes[int(node)]['y'])
                if x < min_x:
                    min_x= x
                if x > max_x:
                    max_x= x
                if y < min_y:
                    min_y= y
                if y > max_y:
                    max_y= y
            if max_x==-10000 or max_y == -10000 or min_x==10000 or min_y == 10000:
                print('Error: Wrong initialization of min or max in new_dot: '+max_x+','+max_y+','+min_x+','+min_y)
            compartments[cluster]['spread']=[max_x,min_x,max_y,min_y]
    print('---------------------------------------')
    write_graph_to_file(type)
    print('Data written to File')
    print('---------------------------------------')



def write_graph_to_file(type):
    # write file for JavaScript
    file = open("../JavaScript/data_"+type+".js", "w")
    file.write('let data_'+type+ '=' + json.dumps(nodes, indent=4))
    file.write(os.linesep)
    file.write('let links_'+type+ '=' + json.dumps(links, indent=4))
    file.write(os.linesep)
    file.write('let compartments_'+type+ '=' + json.dumps(compartments, indent=4))
    file.close()
    print('-----------------')
    print('number of nodes: '+str(len(nodes)))
    print('number of edges: '+str(len(links)))
    print('-----------------')

def circle_mania():
    "all nodes of a compartment are placed on 3 circles. outer for species, middle for reactions, inner for species with many links"
    # could look good if reactions and species where placed on circles in such a fashion, that connected nodes are close
    # maybe place highly connected cirles on a 3rd circle in the middle and reactions that are in multple compartments between them

    # Possible: place reactions first and then place nodes on outer ring at the closest point to their reactions
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
                re.append((node, len(nodes[int(node)]['links_to'])))
            else:
                sp.append((node, len(nodes[int(node)]['links_to'])))

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
new_dot("twopi") #dot,circo,twopi,fdp #TODO: find optimal root node for twopi
same_edge_collection()
# circle_mania()

# print nodes
