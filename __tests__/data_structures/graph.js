import Graph from '../../exercises/data_structures/graph';

describe('ES6 Class', () => {
  test('has a Graph class', () => {
    expect(typeof Graph).toEqual('function');
    const graph = new Graph();
    expect(graph).toBeInstanceOf(Graph);
  });
});

describe('Graph constructor', () => {
  test('has a _vertices property that is initialized to an empty array', () => {
    const graph = new Graph();
    expect(graph._vertices).toEqual([]);
  });

  test('has a _adj_list property that is initialized to an empty object', () => {
    const graph = new Graph();
    expect(graph._adj_list).toEqual({});
  });
});

describe('add_vertex', () => {
  test('is a method', () => {
    const graph = new Graph();
    expect(typeof graph.add_vertex).toEqual('function');
  });

  test('pushes a vertex to end of the _vertices list', () => {
    const graph = new Graph();
    graph.add_vertex('good');
    graph.add_vertex('kid');
    graph.add_vertex('maad');
    graph.add_vertex('city');
    expect(graph._vertices).toEqual(['good', 'kid', 'maad', 'city']);
  });

  test('assigns a key to the _adj_list which has a value of an empty array', () => {
    const graph = new Graph();
    graph.add_vertex('good');
    graph.add_vertex('kid');
    graph.add_vertex('maad');
    graph.add_vertex('city');
    expect(graph._adj_list['good']).toEqual([]);
    expect(graph._adj_list['kid']).toEqual([]);
    expect(graph._adj_list['maad']).toEqual([]);
    expect(graph._adj_list['city']).toEqual([]);
  });
});

describe('add_edge', () => {
  test('is a method', () => {
    const graph = new Graph();
    expect(typeof graph.add_edge).toEqual('function');
  });

  test('creates an edge from a given source to a given destination and vice versa', () => {
    const money_trees = new Graph();
    money_trees.add_vertex('Kendrick Lamar');
    money_trees.add_vertex('Jay Rock');
    money_trees.add_edge('Kendrick Lamar', 'Jay Rock');
    expect(money_trees._adj_list['Kendrick Lamar']).toEqual(['Jay Rock']);
    expect(money_trees._adj_list['Jay Rock']).toEqual(['Kendrick Lamar']);
  });
});

describe('contains', () => {
  test('is a method', () => {
    const graph = new Graph();
    expect(typeof graph.contains).toEqual('function');
  });

  test("returns a boolean based on a given vertex's presence in the graph", () => {
    const money_trees = new Graph();
    money_trees.add_vertex('Kendrick Lamar');
    money_trees.add_vertex('Jay Rock');
    expect(money_trees._vertices).toContain('Kendrick Lamar');
    expect(money_trees._vertices).toContain('Jay Rock');
    expect(money_trees._vertices).not.toContain('Schoolboy Q');
  });
});

describe('to_string', () => {
  test('is a method', () => {
    const graph = new Graph();
    expect(typeof graph.to_string).toEqual('function');
  });

  test('returns a string with the proper data on vertices and edges', () => {
    const money_trees = new Graph();
    money_trees.add_vertex('Kendrick Lamar');
    money_trees.add_vertex('Jay Rock');
    money_trees.add_edge('Kendrick Lamar', 'Jay Rock');
    console.log(money_trees.to_string());
    expect(typeof money_trees.to_string()).toEqual('string');
    expect(money_trees.to_string().indexOf('Kendrick Lamar')).toBeGreaterThanOrEqual(0);
    expect(money_trees.to_string().indexOf('Jay Rock')).toBeGreaterThanOrEqual(0);
    expect(money_trees.to_string().indexOf('Schoolboy Q')).toBe(-1);
  });
});
