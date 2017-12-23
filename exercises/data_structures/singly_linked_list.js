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

class Node {}

class LinkedList {}

export { Node, LinkedList };
