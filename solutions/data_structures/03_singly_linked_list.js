/*
Implement a singly linked list using two classes. The Node class should take in a value and track the next node in the list. The Linked List class should have reference to its head and overall list length.

The Linked List class should also have the following methods:
add - appends a given value to the end of the list
remove - deletes a given value from the list
contains - traverses the list and returns a boolean based on if a given value is present
size - returns the length of the list
to_array - gets the values in the list and transforms it into an array
to_string - gets the values in the list and transforms it into a string

Example:
const tour_stops = new LinkedList();
tour_stops.add('seattle');
tour_stops.add('portland');
tour_stops.add('san francisco');
tour_stops.add('los angeles');
tour_stops.remove('portland');
tour_stops.to_array(); => return ['seattle', 'san francisco', 'los angeles']
tour_stops.add('san diego');
tour_stops.add('phoenix');
tour_stops.size(); => return 5
tour_stops.remove('seattle');
tour_stops.contains('los angeles'); => return true
tour_stops.contains('seattle'); => return false
tour_stops.to_array(); => return ['san francisco', 'los angeles', 'san diego', 'phoenix']
tour_stops.size(); => return 4
*/

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this._head = null;
    this._length = 0;
  }

  add(value) {
    const node = new Node(value);

    if (!this._head) {
      this._head = node;
    } else {
      let curr_node = this._head;
      while (curr_node.next) {
        curr_node = curr_node.next;
      }
      curr_node.next = node;
    }

    this._length++;
  }

  remove(value) {
    let curr_node = this._head;

    if (curr_node.value === value) {
      this._head = curr_node.next;
    } else {
      let prev_node = null;

      while (curr_node.value !== value) {
        prev_node = curr_node;
        curr_node = curr_node.next;
      }
      prev_node.next = curr_node.next;
    }
    this._length--;
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

export { Node, LinkedList };
