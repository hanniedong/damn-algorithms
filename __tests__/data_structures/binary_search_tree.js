import { Node, BinarySearchTree } from '../../exercises/data_structures/binary_search_tree';

test('Node is a class', () => {
  expect(typeof Node).toEqual('function');
  const node = new Node();
  expect(node).toBeInstanceOf(Node);
});

test('BinarySearchTree is a class', () => {
  expect(typeof BinarySearchTree).toEqual('function');
  const bst = new BinarySearchTree();
  expect(bst).toBeInstanceOf(BinarySearchTree);
});
