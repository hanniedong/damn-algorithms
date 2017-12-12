import Queue from '../exercises/queue';

test('Queue is a function', () => {
  expect(typeof Queue).toEqual('function');
});

test('queue is an instance of Queue', () => {
  const queue = new Queue();
  expect(queue).toBeInstanceOf(Queue);
});

test('Queue has front and back properties that are numbers', () => {
  const queue = new Queue();
  expect(typeof queue._front).toEqual('number');
  expect(typeof queue._back).toEqual('number');
});

test('Queue has a storage property that is an object', () => {
  const queue = new Queue();
  expect(typeof queue._storage).toEqual('object');
});

test('Queue has an enqueue method', () => {
  const queue = new Queue();
  expect(typeof queue.enqueue).toEqual('function');
});

test('Queue enqueue method adds items to the back of the queue', () => {
  const queue = new Queue();
  queue.enqueue('good');
  expect(queue._storage).toMatchObject({"0": "good"});
  queue.enqueue('kid');
  expect(queue._storage).toMatchObject({"0": "good", "1": "kid"});
  queue.enqueue('maad');
  expect(queue._storage).toMatchObject({"0": "good", "1": "kid", "2": "maad"});
  queue.enqueue('city');
  expect(queue._storage).toMatchObject({"0": "good", "1": "kid", "2": "maad", "3": "city"});
});

test('Queue has an dequeue method', () => {
  const queue = new Queue();
  expect(typeof queue.dequeue).toEqual('function');
});

test('Queue dequeue method removes item from the front of the queue', () => {
  const queue = new Queue();
  queue.enqueue('good');
  queue.enqueue('kid');
  queue.enqueue('maad');
  queue.enqueue('city');
  queue.dequeue();
  expect(queue._storage).toMatchObject({"1": "kid", "2": "maad", "3": "city"});
  queue.dequeue();
  expect(queue._storage).toMatchObject({"2": "maad", "3": "city"});
  queue.dequeue();
  expect(queue._storage).toMatchObject({"3": "city"});
  queue.dequeue();
  expect(queue._storage).toMatchObject({});
});

test('Queue has a peek method', () => {
  const queue = new Queue();
  expect(typeof queue.peek).toEqual('function');
});

test('Queue peek method returns value at the front of the queue, but doesn\'t alter storage', () => {
  const queue = new Queue();
  queue.enqueue('good');
  queue.enqueue('kid');
  queue.enqueue('maad');
  queue.enqueue('city');
  expect(queue.peek()).toEqual('good');
  expect(queue.dequeue()).toEqual('good');
  expect(queue.peek()).toEqual('kid');
  expect(queue.dequeue()).toEqual('kid');
  expect(queue.peek()).toEqual('maad');
  expect(queue.dequeue()).toEqual('maad');
  expect(queue.peek()).toEqual('city');
  expect(queue.dequeue()).toEqual('city');
});

test('Queue has a get_size method', () => {
  const queue = new Queue();
  expect(typeof queue.get_size).toEqual('function');
});

test('Queue get_size method retuns number of values in storage', () => {
  const queue = new Queue();
  expect(queue.get_size()).toEqual(0);
  queue.enqueue('good');
  expect(queue.get_size()).toEqual(1);
  queue.enqueue('kid');
  expect(queue.get_size()).toEqual(2);
  queue.dequeue();
  expect(queue.get_size()).toEqual(1);
  queue.dequeue();
  expect(queue.get_size()).toEqual(0);
});

test('Queue has a reset method', () => {
  const queue = new Queue();
  expect(typeof queue.reset).toEqual('function');
});

test('Queue reset method empties the storage object', () => {
  const queue = new Queue();
  queue.enqueue('good');
  queue.enqueue('kid');
  queue.enqueue('maad');
  queue.enqueue('city');
  queue.reset();
  expect(queue._storage).toMatchObject({});
});
