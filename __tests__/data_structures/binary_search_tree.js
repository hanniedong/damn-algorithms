import { Node, BinarySearchTree } from '../../exercises/data_structures/binary_search_tree';

describe('ES6 Classes', () => {
  test('has a Node class', () => {
    expect(typeof Node).toEqual('function');
    const node = new Node();
    expect(node).toBeInstanceOf(Node);
  });

  test('has a BinarySearchTree class', () => {
    expect(typeof BinarySearchTree).toEqual('function');
    const bst = new BinarySearchTree();
    expect(bst).toBeInstanceOf(BinarySearchTree);
  });
});

describe('Node constructor', () => {
  test('has a value property equal to a given value', () => {
    const node = new Node('good');
    expect(node.value).toEqual('good');
  });

  test('has a left property that is initialized to null', () => {
    const node = new Node('kid');
    expect(node.left).toEqual(null);
  });

  test('has a left property that is initialized to null', () => {
    const node = new Node('maad city');
    expect(node.right).toEqual(null);
  });
});

describe('BinarySearchTree constructor', () => {
  test('has a root property that is initialized to null', () => {
    const bst = new BinarySearchTree();
    expect(bst._root).toEqual(null);
  });
});

describe('add', () => {
  test('is a method', () => {
    const bst = new BinarySearchTree();
    expect(typeof bst.add).toEqual('function');
  });

  test('inserts nodes in the proper place', () => {
    const bst = new BinarySearchTree();
    expect(bst._root).toEqual(null);
    bst.add(0);
    expect(bst._root.value).toEqual(0);
    bst.add(-1);
    expect(bst._root.left.value).toEqual(-1);
    expect(bst._root.left.right).toEqual(null);
    bst.add(1);
    expect(bst._root.right.value).toEqual(1);
    bst.add(1);
    expect(bst._root.right.left.value).toEqual(1);
    bst.add(5);
    expect(bst._root.right.right.value).toEqual(5);
    expect(bst._root.right.right.left).toEqual(null);
    expect(bst._root.right.right.right).toEqual(null);
    bst.add(2);
    expect(bst._root.right.right.left.value).toEqual(2);
    bst.add(-2);
    expect(bst._root.left.left.value).toEqual(-2);
    expect(bst._root.left.left.left).toEqual(null);
    expect(bst._root.left.left.right).toEqual(null);
  });
});

describe('contains', () => {
  test('is a method', () => {
    const bst = new BinarySearchTree();
    expect(typeof bst.contains).toEqual('function');
  });

  test('returns a boolean based on a given value', () => {
    const bst = new BinarySearchTree();
    bst.add(0);
    bst.add(3);
    bst.add(1);
    bst.add(-3);
    bst.add(-1);
    expect(bst.contains(0)).toBeTruthy();
    expect(bst.contains(1)).toBeTruthy();
    expect(bst.contains(3)).toBeTruthy();
    expect(bst.contains(-3)).toBeTruthy();
    expect(bst.contains(-1)).toBeTruthy();
    expect(bst.contains(2)).toBeFalsy();
    expect(bst.contains(-2)).toBeFalsy();
    expect(bst.contains(4)).toBeFalsy();
    expect(bst.contains(-4)).toBeFalsy();
  });
});

describe('get_min', () => {
  test('is a method', () => {
    const bst = new BinarySearchTree();
    expect(typeof bst.get_min).toEqual('function');
  });

  test('returns the smallest value in the tree', () => {
    const bst = new BinarySearchTree();
    bst.add(0);
    bst.add(3);
    bst.add(1);
    bst.add(-3);
    bst.add(-1);
    expect(bst.get_min()).toEqual(-3);
  });
});

describe('get_max', () => {
  test('is a method', () => {
    const bst = new BinarySearchTree();
    expect(typeof bst.get_max).toEqual('function');
  });

  test('returns the smallest value in the tree', () => {
    const bst = new BinarySearchTree();
    bst.add(0);
    bst.add(3);
    bst.add(1);
    bst.add(-3);
    bst.add(-1);
    expect(bst.get_max()).toEqual(3);
  });
});
