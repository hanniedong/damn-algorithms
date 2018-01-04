import binary_search from '../../solutions/algorithms/binary_search';

describe('binary_search', () => {
  test('is a function', () => {
    const result = typeof binary_search;
    expect(result).toEqual('function');
  });

  test('returns -1 if the target_value is not found in a given list', () => {
    const result = binary_search([-15, 1, 3, 6, 23, 24, 32, 34, 41, 99], 83);
    expect(result).toEqual(-1);
  });
});
