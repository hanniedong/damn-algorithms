/*
Create a Node class and a Linked List class for implementing a doubly linked list. The Node class should tak e in avalue and track the previous and next node in the list. The Linked List class should track its head, tail, and list length.

The Linked List class should also have the following methods:
add - appends a given value to the end of the list
remove - deletes a given value from the list
find - traverses the list for a given value and returns that value
size - returns the length of the list
to_array - gets the values in the list and transforms it into an array

Example:
const tour_stops = new LinkedList();
tour_stops.add('seattle');
tour_stops.add('portland');
tour_stops.add('san francisco');
tour_stops.add('los angeles');
tour_stops.add('san diego');
tour_stops.to_string(); => return 'seattle, portland, san francisco, los angeles, san diego'
tour_stops.size(); => return 5
tour_stops.remove('portland');
tour_stops.to_array(); => return ['seattle', 'san francisco', 'los angeles', 'san diego']
tour_stops.size(); => return 4
tour_stops.index_of('los angeles'); => return 2
tour_stops.contains('portland'); => return false
tour_stops.contains('san francisco'); => true
*/

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class LinkedList {
  constructor() {
    this._head = null;
    this._tail = null;
    this._length = 0;
  }

  add(value) {
    const node = new Node(value);

    if (!this._head) {
      this._head = node;
    } else {
      this._tail.next = node;
      node.prev = this._tail;
    }

    this._tail = node;
    this._length++;
  }

  remove(value) {
    let curr_node = this._head;

    while (curr_node) {
      if (curr_node.value === value) {
        if (curr_node === this._head && curr_node === this._tail) {
          this._head = null;
          this._tail = null;
        } else if (curr_node === this._head) {
          this._head = this._head.next;
          this._head.prev = null;
        } else if (curr_node === this._tail) {
          this._tail = this._tail.prev;
          this._tail.next = null;
        } else {
          curr_node.prev.next = curr_node.next;
          curr_node.next.prev = curr_node.prev;
        }
        this._length--;
      }
      curr_node = curr_node.next;
    }
  }

  contains(value) {
    let curr_node = this._head;

    while (curr_node) {
      if (curr_node.value === value) {
        return true;
      }
      curr_node = curr_node.next;
    }
    return false;
  }

  index_of(value) {
    let i = 0;
    let curr_node = this._head;

    while (curr_node) {
      if (curr_node.value === value) {
        return i;
      }
      curr_node = curr_node.next;
      i++;
    }
    return -1;
  }

  size() {
    return this._length;
  }

  to_array() {
    let result = [];
    let curr_node = this._head;

    while (curr_node) {
      result.push(curr_node.value);
      curr_node = curr_node.next;
    }
    return result;
  }

  to_string() {
    return this.to_array().join(', ');
  }
}

export default LinkedList;
