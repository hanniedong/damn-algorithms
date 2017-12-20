import { Node, LinkedList } from '../../exercises/data_structures/doubly_linked_list';

test('Node is a class', () => {
  expect(typeof Node).toEqual('function');
  const node = new Node();
  expect(node).toBeInstanceOf(Node);
});

test('Node has a value property equal to a give value', () => {
  const node = new Node('good');
  expect(node.value).toEqual('good');
});

test('Node has a prev and next property that is initially null', () => {
  const node = new Node('kid');
  expect(node.prev).toEqual(null);
  expect(node.next).toEqual(null);
});

test('LinkedList is a class', () => {
  expect(typeof LinkedList).toEqual('function');
  const ll = new LinkedList();
  expect(ll).toBeInstanceOf(LinkedList);
});

test('LinkedList is initialized with a _head and _tail property that is null', () => {
  const ll = new LinkedList();
  expect(ll._head).toEqual(null);
  expect(ll._tail).toEqual(null);
});

test('LinkedList is initialized with a _length property equal to 0', () => {
  const ll = new LinkedList();
  expect(ll._length).toEqual(0);
});

test('LinkedList has an add method', () => {
  const ll = new LinkedList();
  expect(typeof ll.add).toEqual('function');
});

test('LinkedList add method inserts a node with a given value at the end of the list', () => {
  const ll = new LinkedList();
  ll.add('good');
  ll.add('kid');
  expect(ll._head.value).toEqual('good');
  expect(ll._tail.value).toEqual('kid');
});

test('LinkedList has a remove method', () => {
  const ll = new LinkedList();
  expect(typeof ll.remove).toEqual('function');
});

test("LinkedList remove method takes a given value's node out of the list and reassigns pointers accordingly", () => {
  const ll = new LinkedList();
  ll.add('good');
  ll.add('kid');
  ll.add('maad');
  ll.add('city');
  expect(ll.to_array()).toEqual(['good', 'kid', 'maad', 'city']);
  ll.remove('maad');
  ll.remove('kid');
  expect(ll.to_array()).toEqual(['good', 'city']);
  expect(ll.index_of('good')).toEqual(0);
  expect(ll.index_of('kid')).toEqual(-1);
  expect(ll.index_of('maad')).toEqual(-1);
  expect(ll.index_of('city')).toEqual(1);
  expect(ll._head.next.value).toEqual('city');
  expect(ll._tail.prev.value).toEqual('good');
});

test('LinkedList has a contains method', () => {
  const ll = new LinkedList();
  expect(typeof ll.contains).toEqual('function');
});

test('LinkedList contains method returns a boolean based on a given value', () => {
  const ll = new LinkedList();
  ll.add('good');
  ll.add('kid');
  expect(ll.contains('good')).toBeTruthy();
  expect(ll.contains('kid')).toBeTruthy();
  expect(ll.contains('maad')).toBeFalsy();
  expect(ll.contains('city')).toBeFalsy();
});

test('LinkedList has a index_of method', () => {
  const ll = new LinkedList();
  expect(typeof ll.index_of).toEqual('function');
});

test('LinkedList index_of method returns the index for a given value', () => {
  const ll = new LinkedList();
  ll.add('good');
  ll.add('kid');
  ll.add('maad');
  ll.add('city');
  expect(ll.index_of('city')).toEqual(3);
  expect(ll.index_of('maad')).toEqual(2);
  expect(ll.index_of('kid')).toEqual(1);
  expect(ll.index_of('good')).toEqual(0);
  expect(ll.index_of('kendrick')).toEqual(-1);
  expect(ll.index_of('lamar')).toEqual(-1);
});

test('LinkedList has a size method', () => {
  const ll = new LinkedList();
  expect(typeof ll.size).toEqual('function');
});

test('LinkedList size method returns the correct length of the list', () => {
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

test('LinkedList has a to_array method', () => {
  const ll = new LinkedList();
  expect(typeof ll.to_array).toEqual('function');
});

test("LinkedList to_array method creates an array based on list's values", () => {
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

test('LinkedList has a to_string method', () => {
  const ll = new LinkedList();
  expect(typeof ll.to_string).toEqual('function');
});

test("Linked to_string method creates a string based on list's values", () => {
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
