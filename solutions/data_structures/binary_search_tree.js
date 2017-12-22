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
