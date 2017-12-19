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
tour_stops.remove('portland');
tour_stops.to_array(); => return ['seattle', 'san francisco', 'los angeles', 'san diego', 'phoenix']
tour_stops.add('san diego');
tour_stops.add('phoenix');
tour_stops.remove('seattle');
tour_stops.find('los angeles'); => return 'los angeles'
tour_stops.find('seattle'); => return null
tour_stops.to_array(); => return ['san francisco', 'los angeles', 'san diego', 'phoenix']
tour_stops.size(); => return 4
*/

class Node {}

class LinkedList {}

export default LinkedList;
