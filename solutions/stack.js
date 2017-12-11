/*

Create a Stack class WITHOUT implementing any JavaScript array methods (Array.push, Array.pop, etc).

The stack should have the following methods:
push - adds an item to the top of the Stack
pop - removes the top item from the Stack
peek - tells us what value was last added to the Stack
getSize - tells us how many values are currently in the stack
reset - removes all elements from the stack

 */

class Stack {
  constructor() {
    this.size = 0;
    this.storage = {};
  }

  push(value) {
    this.storage[this.size] = value;
    this.size++;
  }

  pop() {
    if (!this.size) {
      return null;
    }

    this.size--;
    const result = this.storage[this.size];
    delete this.storage[this.size];
    return result;
  }

  peek() {
    return this.storage[this.size - 1];
  }

  getSize() {
    return this.size;
  }

  reset() {
    this.size = 0;
    this.storage = {};
  }
}

export default Stack;
