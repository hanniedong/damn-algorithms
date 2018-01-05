import Stack from '../../exercises/data_structures/01_stack';

describe('ES6 Class', () => {
  test('has a Stack class', () => {
    expect(typeof Stack).toEqual('function');
    const stack = new Stack();
    expect(stack).toBeInstanceOf(Stack);
  });
});

describe('Stack constructor', () => {
  test('has a size property that initialized to 0', () => {
    const stack = new Stack();
    expect(stack._size).toEqual(0);
  });

  test('Stack has a storage property that is initialized to an empty object', () => {
    const stack = new Stack();
    expect(stack._storage).toMatchObject({});
  });
});

describe('push', () => {
  test('is a method', () => {
    const stack = new Stack();
    expect(typeof stack.push).toEqual('function');
  });

  test('adds a value to the top of the stack', () => {
    const stack = new Stack();
    stack.push('good');
    expect(stack._storage).toMatchObject({ '0': 'good' });
    stack.push('kid');
    expect(stack._storage).toMatchObject({ '0': 'good', '1': 'kid' });
    stack.push('maad');
    expect(stack._storage).toMatchObject({ '0': 'good', '1': 'kid', '2': 'maad' });
    stack.push('city');
    expect(stack._storage).toMatchObject({ '0': 'good', '1': 'kid', '2': 'maad', '3': 'city' });
  });
});

describe('pop', () => {
  test('is a method', () => {
    const stack = new Stack();
    expect(typeof stack.pop).toEqual('function');
  });

  test('removes the value at the top of stack', () => {
    const stack = new Stack();
    stack.push('good');
    stack.push('kid');
    stack.push('maad');
    stack.push('city');
    stack.pop();
    expect(stack._storage).toMatchObject({ '0': 'good', '1': 'kid', '2': 'maad' });
    stack.pop();
    expect(stack._storage).toMatchObject({ '0': 'good', '1': 'kid' });
    stack.pop();
    expect(stack._storage).toMatchObject({ '0': 'good' });
    stack.pop();
    expect(stack._storage).toMatchObject({});
  });
});

describe('peek', () => {
  test('is a method', () => {
    const stack = new Stack();
    expect(typeof stack.peek).toEqual('function');
  });

  test("returns the value at top of the stack, but doesn't alter storage", () => {
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
});

describe('get_size', () => {
  test('is a method', () => {
    const stack = new Stack();
    expect(typeof stack.get_size).toEqual('function');
  });

  test('retuns the correct number of values in storage', () => {
    const stack = new Stack();
    expect(stack.get_size()).toEqual(0);
    stack.push('good');
    expect(stack.get_size()).toEqual(1);
    stack.push('kid');
    expect(stack.get_size()).toEqual(2);
    stack.pop();
    expect(stack.get_size()).toEqual(1);
    stack.pop();
    expect(stack.get_size()).toEqual(0);
  });
});

describe('reset', () => {
  test('is a method', () => {
    const stack = new Stack();
    expect(typeof stack.reset).toEqual('function');
  });

  test('empties the storage object', () => {
    const stack = new Stack();
    stack.push('good');
    stack.push('kid');
    stack.push('maad');
    stack.push('city');
    stack.reset();
    expect(stack._storage).toMatchObject({});
  });
});
