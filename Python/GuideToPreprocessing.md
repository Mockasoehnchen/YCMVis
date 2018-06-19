Guide To preprocessing.py

preprocessing.py builds a node-link graph from provided modules. It uses GraphViz to provide coordinates to the nodes 
of the graph.


1. Changing used Modules

   To change used Modules the imports in line 6 have to be changed as well as the entries of modulList in line 19

2. Changing Layout

   To change the used layout the parameter "type" of the new_dot function has to be changed to a layout recognized
   by GraphViz (dot,circo,twopi,fdp).