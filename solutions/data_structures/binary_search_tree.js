/*
Implement a binary search tree using two classes. The Node class should take in a value and track the children nodes to its left and right. The Binary Search Tree class should have a reference to its root.

The Binary Search Tree class should also have the following methods:
add - takes in a value and a node and appends a new node to the tree in the appropriate place
contains - traverses the tree and returns a boolean based on if a given value is present
dfs - performs a depth-first traversal of the tree and executes a given callback in a given order ('in', 'pre', or 'post')
get_min - traverses the tree and returns the minimum value in the tree
get_max -traverses the tree and returns the maximum value in the tree

Example:
const bst = new BinarySearchTree();
let values = [1,-1,0,-2,-3,4,2];
values.forEach(val => bst.add(val));
bst.contains(-2); => return true
bst.contains(3); => return false
bst.get_min(); => return -3
bst.get_max(); => return 4
bst.add(-5);
bst.add(7);
bst.get_min(); => return -5
bst.get_max(); => return 7
*/

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this._root = null;
  }

  add(value, node = this._root) {
    if (!this._root) {
      this._root = new Node(value);
      return;
    } else if (value <= node.value) {
      if (!node.left) {
        node.left = new Node(value);
        return;
      } else {
        return this.add(value, node.left);
      }
    } else if (value > node.value) {
      if (!node.right) {
        node.right = new Node(value);
        return;
      } else {
        return this.add(value, node.right);
      }
    }
  }

  contains(value, node = this._root) {
    if (!this._root) {
      return false;
    }

    if (value === node.value) {
      return true;
    } else if (value <= node.value && node.left) {
      return this.contains(value, node.left);
    } else if (value > node.value && node.right) {
      return this.contains(value, node.right);
    }

    return false;
  }

  dfs(cb, order, node = this._root) {
    if (order === 'pre') {
      cb(node);
    }

    if (node.left) {
      this.dfs(cb, order, node.left);
    }

    if (order === 'in') {
      cb(node);
    }

    if (node.right) {
      this.dfs(cb, order, node.right);
    }

    if (order === 'post') {
      cb(node);
    }
  }

  get_min(node = this._root) {
    if (!this._root) {
      return null;
    }

    if (node.left) {
      return this.get_min(node.left);
    }

    return node.value;
  }

  get_max(node = this._root) {
    if (!this._root) {
      return null;
    }

    if (node.right) {
      return this.get_max(node.right);
    }

    return node.value;
  }
}

export { Node, BinarySearchTree };
