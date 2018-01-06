import countSwimmingPools from '../../exercises/algorithms/06_count_swimming_pools';

describe('countSwimmingPools', () => {
  test('is a function', () => {
    const result = typeof countSwimmingPools;
    expect(result).toEqual('function');
  });

  test('returns a number greater than or equal to 0', () => {
    const a = countSwimmingPools([[1, 1], [1, 1]]);
    expect(a).toBeGreaterThanOrEqual(0);
    const b = countSwimmingPools([[0, 1], [1, 1]]);
    expect(b).toBeGreaterThanOrEqual(0);
    const c = countSwimmingPools([[0, 0], [1, 1]]);
    expect(c).toBeGreaterThanOrEqual(0);
    const d = countSwimmingPools([[0, 0], [0, 1]]);
    expect(d).toBeGreaterThanOrEqual(0);
    const e = countSwimmingPools([[0, 0], [0, 0]]);
    expect(e).toBeGreaterThanOrEqual(0);
  });

  test('returns 0 for an invalid matrix', () => {
    const a = countSwimmingPools([]);
    expect(a).toEqual(0);
    const b = countSwimmingPools('drank');
    expect(b).toEqual(0);
    const c = countSwimmingPools(null);
    expect(c).toEqual(0);
    const d = countSwimmingPools(undefined);
    expect(d).toEqual(0);
    const e = countSwimmingPools({ Swimming: 'Pools' });
    expect(e).toEqual(0);
    const f = countSwimmingPools(() => {});
    expect(f).toEqual(0);
  });

  test('returns 1 for matrix [[0]]', () => {
    const result = countSwimmingPools([[0]]);
    expect(result).toEqual(1);
  });

  test('returns 2 for matrix [[0, 1], [1, 0]]', () => {
    const result = countSwimmingPools([[1, 1], [0, 1]]);
    expect(result).toEqual(1);
  });

  test('returns 1 for matrix [[0, 0, 0], [0, 0, 0], [0, 0, 0]]', () => {
    const result = countSwimmingPools([[0, 0, 0], [0, 0, 0], [0, 0, 0]]);
    expect(result).toEqual(1);
  });

  test('returns 2 for matrix [[1, 0, 0], [1, 1, 0], [0, 1, 0]]', () => {
    const result = countSwimmingPools([[1, 0, 0], [1, 1, 0], [0, 1, 0]]);
    expect(result).toEqual(2);
  });

  test('returns 0 for matrix [[1, 1, 1, 1], [1, 1, 1, 1], [1, 1, 1, 1], [1, 1, 1, 1]]', () => {
    const result = countSwimmingPools([[1, 1, 1, 1], [1, 1, 1, 1], [1, 1, 1, 1], [1, 1, 1, 1]]);
    expect(result).toEqual(0);
  });

  test('returns 4 for matrix [[1, 0, 1, 1], [0, 1, 0, 1], [0, 1, 0, 1], [1, 1, 1, 0]]', () => {
    const result = countSwimmingPools([[1, 0, 1, 1], [0, 1, 0, 1], [0, 1, 0, 1], [1, 1, 1, 0]]);
    expect(result).toEqual(4);
  });

  test('returns 6 for matrix [[1, 0, 1, 1, 0], [0, 1, 0, 1, 1], [1, 0, 1, 0, 1], [1, 0, 1, 0, 1], [1, 0, 1, 0, 1]]', () => {
    const result = countSwimmingPools([
      [1, 0, 1, 1, 0],
      [0, 1, 0, 1, 1],
      [1, 0, 1, 0, 1],
      [1, 0, 1, 0, 1],
      [1, 0, 1, 0, 1]
    ]);
    expect(result).toEqual(6);
  });
});
