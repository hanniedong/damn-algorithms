import Graph from '../../exercises/data_structures/06_graph';

describe('ES6 Class', () => {
  test('has a Graph class', () => {
    expect(typeof Graph).toEqual('function');
    const graph = new Graph();
    expect(graph).toBeInstanceOf(Graph);
  });
});

describe('Graph constructor', () => {
  test('has a vertices property that is initialized to an empty array', () => {
    const graph = new Graph();
    expect(graph.vertices).toEqual([]);
  });

  test('has a adjList property that is initialized to an empty object', () => {
    const graph = new Graph();
    expect(graph.adjList).toEqual({});
  });
});

describe('addVertex', () => {
  test('is a method', () => {
    const graph = new Graph();
    expect(typeof graph.addVertex).toEqual('function');
  });

  test('pushes a vertex to end of the vertices list', () => {
    const graph = new Graph();
    graph.addVertex('good');
    graph.addVertex('kid');
    graph.addVertex('maad');
    graph.addVertex('city');
    expect(graph.vertices).toEqual(['good', 'kid', 'maad', 'city']);
  });

  test('assigns a key to the adjList which has a value of an empty array', () => {
    const graph = new Graph();
    graph.addVertex('good');
    graph.addVertex('kid');
    graph.addVertex('maad');
    graph.addVertex('city');
    expect(graph.adjList['good']).toEqual([]);
    expect(graph.adjList['kid']).toEqual([]);
    expect(graph.adjList['maad']).toEqual([]);
    expect(graph.adjList['city']).toEqual([]);
  });
});

describe('addEdge', () => {
  test('is a method', () => {
    const graph = new Graph();
    expect(typeof graph.addEdge).toEqual('function');
  });

  test('creates an edge from a given source to a given destination and vice versa', () => {
    const moneyTrees = new Graph();
    moneyTrees.addVertex('Kendrick Lamar');
    moneyTrees.addVertex('Jay Rock');
    moneyTrees.addEdge('Kendrick Lamar', 'Jay Rock');
    expect(moneyTrees.adjList['Kendrick Lamar']).toEqual(['Jay Rock']);
    expect(moneyTrees.adjList['Jay Rock']).toEqual(['Kendrick Lamar']);
  });
});

describe('contains', () => {
  test('is a method', () => {
    const graph = new Graph();
    expect(typeof graph.contains).toEqual('function');
  });

  test("returns a boolean based on a given vertex's presence in the graph", () => {
    const moneyTrees = new Graph();
    moneyTrees.addVertex('Kendrick Lamar');
    moneyTrees.addVertex('Jay Rock');
    expect(moneyTrees.vertices).toContain('Kendrick Lamar');
    expect(moneyTrees.vertices).toContain('Jay Rock');
    expect(moneyTrees.vertices).not.toContain('Schoolboy Q');
  });
});

describe('breadth_first_search', () => {
  test('breadth_first_search is a method', () => {
    const graph = new Graph();
    expect(typeof graph.bfs).toEqual('function');
  });
});

describe('toString', () => {
  test('is a method', () => {
    const graph = new Graph();
    expect(typeof graph.toString).toEqual('function');
  });

  test('returns a string with the proper data on vertices and edges', () => {
    const moneyTrees = new Graph();
    moneyTrees.addVertex('Kendrick Lamar');
    moneyTrees.addVertex('Jay Rock');
    moneyTrees.addEdge('Kendrick Lamar', 'Jay Rock');
    console.log(moneyTrees.toString());
    expect(typeof moneyTrees.toString()).toEqual('string');
    expect(moneyTrees.toString().indexOf('Kendrick Lamar')).toBeGreaterThanOrEqual(0);
    expect(moneyTrees.toString().indexOf('Jay Rock')).toBeGreaterThanOrEqual(0);
    expect(moneyTrees.toString().indexOf('Schoolboy Q')).toBe(-1);
  });
});
