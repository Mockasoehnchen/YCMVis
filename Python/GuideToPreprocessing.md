Guide To preprocessing.py

preprocessing.py builds a node-link graph from provided modules. It uses GraphViz to provide coordinates to the nodes 
of the graph.

1. Functions

   1.1 data_to_graph()
   
      data_to_graph converts the given modules into a basic graph structure. Species, reactions and algebraic species 
      become nodes of different shapes (circle, rectangle, triangle). Links are created from reactions lists of substrates,
      products and modifiers. Links are also created from the algebraic equations of an algebraic species and from
      the ode of species introduce as ode.
      Each node is assigned a number as id/name and collects information about the compartment its in, the modules it was
      introduce in and which other nodes it is connected to by which kind of link. Annotation, state, rate or equation, if 
      provided, are also saved in the node.
   
   1.2 same_edge_collection()
   
      same_edge_collection builds an overview about how many nodes have how many links in common. It also collects how many
      nodes share all of their links.
   
   1.3 use_dot()
   
      old version of assigning coordinates to nodes via GraphVis's dot. outdated and no longer supported. use new_dot instead.
   
   1.4 new_dot(type)
   
      Assignes nodes coordinates with GraphVis's dot based on the layout provided by type (dot,circo,twopi or fdp). In case of
      dot nodes are clustered based on compartments.
   
   1.5 write_graph_to_file(type)
   
      write_graph_to_file writes all node, links and compartments as phyton dictionaries into a file named data_type.js.
      Type is replaced with the given parameter. The file is saved into the JavaScript folder.
   
   1.6 collect_statistic()
   
      collect_statistic collects and prints information about the number of nodes of each type and number of nodes 
      of each grade.
   
   1.7 circle_mania()
   
      circle_mania is an unfinished layout algorithm not unsimilar to a radial layout.
   
2. Changing used Modules

   To change used Modules the imports in line 6 have to be changed as well as the entries of modulList in line 19

3. Changing Layout

   To change the used layout the parameter "type" of the new_dot function has to be changed to a layout recognized
   by GraphViz (dot,circo,twopi,fdp). This can be done in line 464 where new_dot is called.
   
