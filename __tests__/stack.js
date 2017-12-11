import Stack from '../exercises/stack';

test('Stack is a function', () => {
  expect(typeof Stack).toEqual('function');
});

test('stack is an instance of Stack', () => {
  const stack = new Stack();
  expect(stack).toBeInstanceOf(Stack);
});

test('Stack has a size property that is a number', () => {
  const stack = new Stack();
  expect(typeof stack.size).toEqual('number');
});

test('Stack has a storage property that is an object', () => {
  const stack = new Stack();
  expect(typeof stack.storage).toEqual('object');
});

test('Stack has a push method', () => {
  const stack = new Stack();
  expect(typeof stack.push).toEqual('function');
});

test('Stack push method adds item to the top of the stack', () => {
  const stack = new Stack();
  stack.push('good');
  expect(stack.storage).toMatchObject({"0": "good"});
  stack.push('kid');
  expect(stack.storage).toMatchObject({"0": "good", "1": "kid"});
  stack.push('maad');
  expect(stack.storage).toMatchObject({"0": "good", "1": "kid", "2": "maad"});
  stack.push('city');
  expect(stack.storage).toMatchObject({"0": "good", "1": "kid", "2": "maad", "3": "city"});
});

test('Stack has a pop method', () => {
  const stack = new Stack();
  expect(typeof stack.pop).toEqual('function');
});

test('Stack pop method removes item at the top of stack', () => {
  const stack = new Stack();
  stack.push('good');
  stack.push('kid');
  stack.push('maad');
  stack.push('city');
  stack.pop();
  expect(stack.storage).toMatchObject({"0": "good", "1": "kid", "2": "maad"});
  stack.pop();
  expect(stack.storage).toMatchObject({"0": "good", "1": "kid"});
  stack.pop();
  expect(stack.storage).toMatchObject({"0": "good"});
  stack.pop();
  expect(stack.storage).toMatchObject({});
});

test('Stack has a peek method', () => {
  const stack = new Stack();
  expect(typeof stack.peek).toEqual('function');
});

test('Stack peek method returns value at top of the stack, but doesn\'t alter storage', () => {
  const stack = new Stack();
  stack.push('good');
  stack.push('kid');
  stack.push('maad');
  stack.push('city');
  expect(stack.peek()).toEqual('city');
  expect(stack.pop()).toEqual('city');
  expect(stack.peek()).toEqual('maad');
  expect(stack.pop()).toEqual('maad');
  expect(stack.peek()).toEqual('kid');
  expect(stack.pop()).toEqual('kid');
  expect(stack.peek()).toEqual('good');
  expect(stack.pop()).toEqual('good');
});

test('Stack has a getSize method', () => {
  const stack = new Stack();
  expect(typeof stack.getSize).toEqual('function');
});

test('Stack getSize method retuns number of values in storage', () => {
  const stack = new Stack();
  expect(stack.getSize()).toEqual(0);
  stack.push('good');
  expect(stack.getSize()).toEqual(1);
  stack.push('kid');
  expect(stack.getSize()).toEqual(2);
  stack.pop();
  expect(stack.getSize()).toEqual(1);
  stack.pop();
  expect(stack.getSize()).toEqual(0);
});

test('Stack has a reset method', () => {
  let stack = new Stack();
  expect(typeof stack.reset).toEqual('function');
});

test('Stack reset method empties the storage object', () => {
  const stack = new Stack();
  stack.push('good');
  stack.push('kid');
  stack.push('maad');
  stack.push('city');
  stack.reset();
  expect(stack.storage).toMatchObject({});
});
