import { Node, BinarySearchTree } from '../../exercises/data_structures/binary_search_tree';

test('Node is a class', () => {
  expect(typeof Node).toEqual('function');
  const node = new Node();
  expect(node).toBeInstanceOf(Node);
});

test('BinarySearchTree is a class', () => {
  expect(typeof BinarySearchTree).toEqual('function');
  const ll = new BinarySearchTree();
  expect(ll).toBeInstanceOf(BinarySearchTree);
});
