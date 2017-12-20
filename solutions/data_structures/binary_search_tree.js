/* 
BINARY SEARCH TREE
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

  add(value) {
    const node = new Node(value);

    if (this._root === null) {
      this._root = node;
    } else {
      let curr_node = this._root;

      while (curr_node) {
        if (curr_node.value > value) {
          if (curr_node.left === null) {
            curr_node.left = node;
            return;
          } else {
            curr_node = curr_node.left;
          }
        } else {
          if (curr_node.right === null) {
            curr_node.right = node;
            return;
          } else {
            curr_node = curr_node.right;
          }
        }
      }
    }
  }

  contains(value) {
    let curr_node = this._root;

    while (curr_node) {
      if (curr_node.value === value) {
        return true;
      }

      if (curr_node.value > value) {
        curr_node = curr_node.left;
      } else {
        curr_node = curr_node.right;
      }
    }

    return false;
  }

  get_min() {
    if (this._root === null) {
      return null;
    }

    let curr_node = this._root;

    while (curr_node.left) {
      curr_node = curr_node.left;
    }

    return curr_node.value;
  }

  get_max() {
    if (this._root === null) {
      return null;
    }

    let curr_node = this._root;

    while (curr_node.right) {
      curr_node = curr_node.right;
    }

    return curr_node.value;
  }
}

export { Node, BinarySearchTree };
