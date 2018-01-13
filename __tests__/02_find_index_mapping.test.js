import findIndexMapping from '../../exercises/algorithms/02_find_index_mapping';

describe('findIndexMapping', () => {
  test('is a function', () => {
    expect(typeof findIndexMapping).toEqual('function');
  });

  test('returns an array with the same length as two input arrays', () => {
    const a = [1,2,3,4,5];
    const b = [3,1,5,2,4];
    const result = findIndexMapping(a, b);
    expect(Array.isArray(result)).toBeTruthy();
    expect(result).toHaveLength(a.length);
    expect(result).toHaveLength(b.length);
  });

  test('returns an array of indices', () => {
    const gkmc1 = ['Backseat Freestyle', 'Money Trees', 'good kid', 'Real'];
    const gkmc2 = ['good kid', 'Real', 'Money Trees', 'Backseat Freestyle'];
    const result = findIndexMapping(gkmc1, gkmc2);
    result.forEach(num => {
      expect(typeof num).toEqual('number');
      expect(num).toBeGreaterThanOrEqual(0);
    });
  });

  test('returns an array with the correct index mapping', () => {
    const gkmc1 = ['Backseat Freestyle', 'Money Trees', 'good kid', 'Real'];
    const gkmc2 = ['good kid', 'Real', 'Money Trees', 'Backseat Freestyle'];
    const result = findIndexMapping(gkmc1, gkmc2);
    expect(result).toEqual([3,2,0,1]);
  });
});
