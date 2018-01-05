import binary_search from '../../exercises/algorithms/05_binary_search';

describe('binary_search', () => {
  test('is a function', () => {
    const result = typeof binary_search;
    expect(result).toEqual('function');
  });

  test('returns -1 if the list is empty', () => {
    const result = binary_search([], 5);
    expect(result).toEqual(-1);
  });

  test('returns -1 if the target_value is not found in a given sorted list', () => {
    const a = binary_search([8, 13, 22, 24, 25, 32, 33, 34, 42, 44, 52], 2);
    expect(a).toEqual(-1);
    const b = binary_search([1, 2, 3, 4, 5], 0);
    expect(b).toEqual(-1);
    const c = binary_search([6, 7, 8, 9, 10], 11);
    expect(c).toEqual(-1);
    const d = binary_search(['a', 'b', 'c', 'd', 'e'], 'f');
    expect(d).toEqual(-1);
    const e = binary_search(['good', 'kid', 'maad'], 'city');
    expect(e).toEqual(-1);
  });

  test('returns the index of the target_value if it is found in a given sorted list', () => {
    const a = binary_search([8, 13, 22, 24, 25, 32, 33, 34, 42, 44, 52], 24);
    expect(a).toEqual(3);
    const b = binary_search([1, 2, 3, 4, 5], 5);
    expect(b).toEqual(4);
    const c = binary_search([6, 7, 8, 9, 10], 6);
    expect(c).toEqual(0);
    const d = binary_search(['a', 'b', 'c', 'd', 'e'], 'd');
    expect(d).toEqual(3);
    const e = binary_search(['good', 'kid', 'maad'], 'kid');
    expect(e).toEqual(1);
  });
});
