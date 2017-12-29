/*
Implement a binary search tree using two classes. The Node class should take in a value and track the children nodes to its left and right. The Binary Search Tree class should have a reference to its root.

The Binary Search Tree class should also have the following methods:
add - takes in a value and a node and appends a new node to the tree in the appropriate place
contains - traverses the tree and returns a boolean based on if a given value is present
dfs - performs a depth-first traversal of the tree and executes a given callback in a given order
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

class Node {}

class BinarySearchTree {}

export { Node, BinarySearchTree };
