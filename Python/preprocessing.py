#!/usr/bin/python

# TODO: translate YCM data into data for javascript graph drawing

import testdata as dat
import os, subprocess, json

nodes = []
links = []
compartments = [] #compartments['name']={"Species": [Species], "Open": True }

def data_to_graph():
    for species in dat.modeldict['sp_compartment']:
        nodes.append({
            'name':species,
            'symbol' : 'circle',
            'compartment': dat.modeldict['sp_compartment'][species],
            'annotation': dat.modeldict['sp_annotations'][species],
            'state': dat.modeldict['sp_states'][species],
            'module': 'test' #TODO: write real module
        })
    for reaction in dat.reactions:
        nodes.append({
            'name':reaction,
            'symbol': 'rect',
            'rate': dat.reactions[reaction]['rate']
        })
        for source in dat.reactions[reaction]['substrates']:
            links.append({'source': source, 'target': reaction})
        for target in dat.reactions[reaction]['products']:
            links.append({'source': reaction, 'target': target})
        for source in dat.reactions[reaction]['modifiers']:
            links.append({'source': source, 'target': reaction,'symbol': 'circle'})





def use_dot():
    "use GraphViz's dot to get x and y for Graph"
    text = 'digraph {'+os.linesep
    for node in nodes:
        text = text + node['name']+';'+os.linesep
    for link in links:
        text = text +link['source']+' -> '+link['target'] +';'+os.linesep
    text = text + '}'
    #print text
    file = open("testfile.gv","w")
    file.write(text)
    file.close()
    process = subprocess.Popen(['dot', '-Tplain', 'testfile.gv'], stdout=subprocess.PIPE)

    text = process.communicate("n\n")[0].decode().split(os.linesep)
    #print ('result: '+text)
    #time.sleep(10)
    #process.wait()
    #file = open("testfile.gv.plain","r")
    #file.readline() # no useful information in first line
    i=1
    for node in nodes:
        textlist= text[i].split(" ")
        i+=1
        if textlist[0] != 'node':
            print ("Not a node")
        if textlist[1] != node['name']:
            print ("Order Changed Error: "+textlist[1]+ " != "+ node['name'])
        node['x'] = textlist[2]
        node['y'] = textlist[3]
    #print nodes
    os.remove("testfile.gv")


    file = open("../JavaScript/data.js","w")
    file.write('var data ='+json.dumps(nodes,indent=4))
    file.write(os.linesep)
    file.write('var links ='+json.dumps(links,indent=4))
    file.close()



data_to_graph()
use_dot()
#print nodes