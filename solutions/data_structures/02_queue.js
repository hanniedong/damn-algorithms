/*
Create a Queue class WITHOUT using an array and WITHOUT implementing any JavaScript array methods (Array.prototype.push, Array.prototype.shift, etc). Use an object for storage instead.

The Queue class should have the following methods:
enqueue - adds a value to the back of the queue
dequeue - removes the value from the front of the queue
peek - tells us what value was first added to the queue
get_size - tells us how many values are currently in the queue
reset - removes all values from the queue

Examples:

queue.enqueue('good');
queue.enqueue('kid');
queue._storage = { 0: 'good', 1: 'kid' }
queue.enqueue('maad');
queue.enqueue('city');
queue._storage = { 0: 'good', 1: 'kid', 2: 'maad', 3: 'city' }
queue.peek() => return 'good'
queue.dequeue() => return 'good'
queue._storage = { 1: 'kid', 2: 'maad', 3: 'city' }
queue.get_size => return 3
queue.reset()
queue._storage = {}
 */

class Queue {
  constructor() {
    this._storage = {};
    this._front = 0;
    this._back = 0;
  }

  enqueue(value) {
    this._storage[this._back] = value;
    this._back++;
  }

  dequeue() {
    let result = this._storage[this._front];
    delete this._storage[this._front++];
    return result;
  }

  peek() {
    return this._storage[this._front];
  }

  get_size() {
    return this._back - this._front;
  }

  reset() {
    this._storage = {};
    this._front = 0;
    this._back = 0;
  }
}

export default Queue;
