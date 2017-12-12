/*
Create a Stack class WITHOUT implementing any JavaScript array methods (Array.push, Array.pop, etc).

The stack should have the following methods:
push - adds an item to the top of the Stack
pop - removes the top item from the Stack
peek - tells us what value was last added to the Stack
getSize - tells us how many values are currently in the stack
reset - removes all elements from the stack

Examples:

stack.push('good');
stack.push('kid');
stack.storage = { 0: 'good', 1: 'kid'}
stack.push('maad');
stack.push('city');
stack.storage = { 0: 'good', 1: 'kid', 2: 'maad', 3: 'city'}
stack.peek() => return 'city'
stack.pop() => return 'city'
stack.storage = { 0: 'good', 1: 'kid', 2: 'maad'}
stack.getSize => return 3
stack.reset()
stack.storage = {}
 */

class Stack {}

export default Stack;
