import reverse_track_order from '../exercises/reverse_track_order';

test('reverse_track_order is a function', () => {
  expect(typeof reverse_track_order).toEqual('function');
});

test('reverse_track_order returns an array', () => {
  let result = reverse_track_order(['a', 'b', 'c']);
  expect(Array.isArray(result)).toBeTruthy();
})

test('return value has same length as input', () => {
  let result = reverse_track_order(['a','b','c']);
  expect(result).toHaveLength(3);
});

test('input value is not equal to output', () => {
  let result = reverse_track_order(['good kid maad city', 'damn', 'section.80']);
  expect(result).not.toEqual(['good kid maad city', 'damn', 'section.80'])
});

test('input value is reversed before being returned', () => {
  let result = reverse_track_order([1,2,3,4,5]);
  expect(result).toEqual([5,4,3,2,1]);
});
