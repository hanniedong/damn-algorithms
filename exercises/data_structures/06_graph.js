/*
UNDIRECTED GRAPH - adjacent list implementation

Create a Graph class that contains properties for its vertices and adjacent list. It should the vertices in a list and the adjacent list should be implemented as an object.

The Graph class should have the following methods:
add_vertex - creates a vertex with a given value and adds it to the vertices list and adjacent list
add_edge - takes in two vertices and creates a relationship between them
contains - returns a boolean based on if a given vertex is present in the adjacent list
bfs - performs a breadth-first traversal of the graph based on a starting vertex
to_string -gets the values in the adjacent list and transforms it into a string

Example:

const artists_graph = new Graph();
let artists = ['kendrick lamar', 'jay rock', 'drake', 'mc eiht', 'anna wise', 'dr. dre'];
artists.forEach(artist => artists_graph.add_vertex(artist));
artists_graph.add_edge('kendrick lamar', 'jay rock');
artists_graph.add_edge('kendrick lamar', 'dr. dre');
artists_graph.add_edge('kendrick lamar', 'drake');
artists_graph.contains('kendrick lamar'); => return true
artists_graph.bfs('kendrick lamar'); => traverses all nodes in artists_graph from this vertex
artists_graph.to_string(); => return 'kendrick lamar => jay rock, dr. dre, drake\njay rock => kendrick lamar\ndrake => kendrick lamar\nmc eiht => \nanna wise => \ndr. dre => kendrick lamar'
*/

class Graph {}

export default Graph;
