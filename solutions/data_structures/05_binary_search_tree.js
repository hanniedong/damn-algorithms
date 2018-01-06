/*
Implement a binary search tree using two classes. The Node class should take in a value and track the children nodes to its left and right. The Binary Search Tree class should have a reference to its root.

The Binary Search Tree class should also have the following methods:
add - takes in a value and a node and appends a new node to the tree in the appropriate place
contains - traverses the tree and returns a boolean based on if a given value is present
dfs - performs a depth-first traversal of the tree and executes a given callback in a given order ('in', 'pre', or 'post')
getMin - traverses the tree and returns the minimum value in the tree
getMax -traverses the tree and returns the maximum value in the tree

Example:
const bst = new BinarySearchTree();
let values = [1,-1,0,-2,-3,4,2];
values.forEach(val => bst.add(val));
bst.contains(-2); => return true
bst.contains(3); => return false
bst.getMin(); => return -3
bst.getMax(); => return 4
bst.add(-5);
bst.add(7);
bst.getMin(); => return -5
bst.getMax(); => return 7
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
    this.root = null;
  }

  add(value, node = this.root) {
    if (!this.root) {
      this.root = new Node(value);
    } else if (value < node.value) {
      if (!node.left) {
        node.left = new Node(value);
      } else {
        return this.add(value, node.left);
      }
    } else if (value > node.value) {
      if (!node.right) {
        node.right = new Node(value);
      } else {
        return this.add(value, node.right);
      }
    }
  }

  contains(value, node = this.root) {
    if (!this.root) {
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

  dfs(cb, orderType, node = this.root) {
    if (orderType === 'pre') {
      cb(node);
    }

    if (node.left) {
      this.dfs(cb, orderType, node.left);
    }

    if (orderType === 'in') {
      cb(node);
    }

    if (node.right) {
      this.dfs(cb, orderType, node.right);
    }

    if (orderType === 'post') {
      cb(node);
    }
  }

  getMin(node = this.root) {
    if (!this.root) {
      return null;
    }

    if (node.left) {
      return this.getMin(node.left);
    }

    return node.value;
  }

  getMax(node = this.root) {
    if (!this.root) {
      return null;
    }

    if (node.right) {
      return this.getMax(node.right);
    }

    return node.value;
  }
}

export { Node, BinarySearchTree };
