/*
UNDIRECTED GRAPH - adjacent list implementation
*/

class Graph {
  constructor() {
    this._vertices = [];
    this._adj_list = {};
  }

  add_vertex(vertex) {
    this._vertices.push(vertex);
    this._adj_list[vertex] = [];
  }

  add_edge(from_vertex, to_vertex) {
    this._adj_list[from_vertex].push(to_vertex);
    this._adj_list[to_vertex].push(from_vertex);
  }

  contains(vertex) {
    return this._adj_list[vertex] !== undefined;
  }

  bfs(starting_vertex) {
    let visited = {};
    this._vertices.forEach(vertex => (visited[vertex] = false));
    visited[starting_vertex] = true;

    let queue = [];
    queue.push(starting_vertex);

    while (queue.length) {
      let curr_vertex = queue.shift();
      let curr_vertex_edges = this._adj_list[curr_vertex];

      for (let vertex of curr_vertex_edges) {
        if (!visited[vertex]) {
          visited[vertex] = true;
          queue.push(vertex);
        }
      }
    }
  }

  to_string() {
    let result = '';

    const artists = Object.keys(this._adj_list);

    artists.forEach((artist, idx) => {
      result += `${artist} => ${this._adj_list[artist].join(', ')}${idx < artists.length - 1 ? '\n' : ''}`;
    });

    return result;
  }
}

export default Graph;
