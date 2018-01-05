import { Node, LinkedList } from '../../exercises/data_structures/03_singly_linked_list';

describe('ES6 Classes', () => {
  test('has a Node class', () => {
    expect(typeof Node).toEqual('function');
    const node = new Node();
    expect(node).toBeInstanceOf(Node);
  });

  test('has a LinkedList class', () => {
    expect(typeof LinkedList).toEqual('function');
    const ll = new LinkedList();
    expect(ll).toBeInstanceOf(LinkedList);
  });
});

describe('Node constructor', () => {
  test('has a property equal to a given value', () => {
    const node = new Node('good');
    expect(node.value).toEqual('good');
  });

  test('has a next property that is initialized to null', () => {
    const node = new Node('kid');
    expect(node.next).toEqual(null);
  });
});

describe('LinkedList constructor', () => {
  test('has a_head property that is initialized to null', () => {
    const ll = new LinkedList();
    expect(ll._head).toEqual(null);
  });

  test('has a _length property that is initialized to 0', () => {
    const ll = new LinkedList();
    expect(ll._length).toEqual(0);
  });
});

describe('add', () => {
  test('is a method', () => {
    const ll = new LinkedList();
    expect(typeof ll.add).toEqual('function');
  });

  test('inserts a node with a given value at the end of the list', () => {
    const ll = new LinkedList();
    ll.add('good');
    ll.add('kid');
    expect(ll._head.value).toEqual('good');
    expect(ll._head.next.value).toEqual('kid');
    expect(ll._head.next.next).toEqual(null);
  });
});

describe('remove', () => {
  test('is a method', () => {
    const ll = new LinkedList();
    expect(typeof ll.remove).toEqual('function');
  });

  test("takes a given value's node out of the list and reassigns pointer accordingly", () => {
    const ll = new LinkedList();
    ll.add('good');
    ll.add('kid');
    ll.add('maad');
    ll.add('city');
    expect(ll.to_array()).toEqual(['good', 'kid', 'maad', 'city']);
    expect(ll._head.value).toEqual('good');
    expect(ll._head.next.value).toEqual('kid');
    expect(ll._head.next.next.value).toEqual('maad');
    expect(ll._head.next.next.next.value).toEqual('city');
    ll.remove('maad');
    ll.remove('kid');
    expect(ll.to_array()).toEqual(['good', 'city']);
    expect(ll._head.value).toEqual('good');
    expect(ll._head.next.value).toEqual('city');
  });
});

describe('contains', () => {
  test('is a method', () => {
    const ll = new LinkedList();
    expect(typeof ll.contains).toEqual('function');
  });

  test("returns a boolean based on a given value's presence in the list", () => {
    const ll = new LinkedList();
    ll.add('good');
    ll.add('kid');
    expect(ll.contains('good')).toBeTruthy();
    expect(ll.contains('kid')).toBeTruthy();
    expect(ll.contains('maad')).toBeFalsy();
    expect(ll.contains('city')).toBeFalsy();
    expect(ll._head.value).toEqual('good');
    expect(ll._head.next.value).toEqual('kid');
    expect(ll._length).toEqual(2);
    ll.remove('good');
    expect(ll.contains('good')).toBeFalsy();
    expect(ll._head.value).toEqual('kid');
    expect(ll._length).toEqual(1);
    ll.remove('kid');
    expect(ll.contains('kid')).toBeFalsy();
    expect(ll._head).toEqual(null);
    expect(ll._length).toEqual(0);
  });
});

describe('index_of', () => {
  test('is a method', () => {
    const ll = new LinkedList();
    expect(typeof ll.index_of).toEqual('function');
  });

  test('returns the position in the list for a given value', () => {
    const ll = new LinkedList();
    ll.add('good');
    ll.add('kid');
    ll.add('maad');
    ll.add('city');
    expect(ll.index_of('good')).toEqual(0);
    expect(ll.index_of('kid')).toEqual(1);
    expect(ll.index_of('maad')).toEqual(2);
    expect(ll.index_of('city')).toEqual(3);
    expect(ll.remove('good'));
    expect(ll.remove('kid'));
    expect(ll.index_of('good')).toEqual(-1);
    expect(ll.index_of('kid')).toEqual(-1);
    expect(ll.index_of('maad')).toEqual(0);
    expect(ll.index_of('city')).toEqual(1);
  });
});

describe('size', () => {
  test('is a method', () => {
    const ll = new LinkedList();
    expect(typeof ll.size).toEqual('function');
  });

  test('returns the correct length of the list', () => {
    const ll = new LinkedList();
    expect(ll.size()).toEqual(0);
    ll.add('good');
    expect(ll.size()).toEqual(1);
    ll.add('kid');
    expect(ll.size()).toEqual(2);
    ll.add('maad');
    expect(ll.size()).toEqual(3);
    ll.add('city');
    expect(ll.size()).toEqual(4);
    ll.remove('maad');
    expect(ll.size()).toEqual(3);
    ll.remove('city');
    expect(ll.size()).toEqual(2);
  });
});

describe('to_array', () => {
  test('is a method', () => {
    const ll = new LinkedList();
    expect(typeof ll.to_array).toEqual('function');
  });

  test("creates an array based on the list's values", () => {
    const ll = new LinkedList();
    expect(ll.to_array()).toEqual([]);
    ll.add('good');
    expect(ll.to_array()).toEqual(['good']);
    ll.add('kid');
    ll.add('maad');
    ll.add('city');
    expect(ll.to_array()).toEqual(['good', 'kid', 'maad', 'city']);
    ll.remove('good');
    ll.remove('kid');
    expect(ll.to_array()).toEqual(['maad', 'city']);
  });
});

describe('to_string', () => {
  test('is a method', () => {
    const ll = new LinkedList();
    expect(typeof ll.to_string).toEqual('function');
  });

  test("creates a string based on the list's values", () => {
    const ll = new LinkedList();
    expect(ll.to_string()).toEqual('');
    ll.add('good');
    expect(ll.to_string()).toEqual('good');
    ll.add('kid');
    ll.add('maad');
    ll.add('city');
    expect(ll.to_string()).toEqual('good, kid, maad, city');
    ll.remove('good');
    ll.remove('kid');
    expect(ll.to_string()).toEqual('maad, city');
  });
});
