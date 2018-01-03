import count_swimming_pools from '../../exercises/algorithms/count_swimming_pools';

describe('count_swimming_pools', () => {
  test('is a function', () => {
    const result = typeof count_swimming_pools;
    expect(result).toEqual('function');
  });

  test('returns a number greater than or equal to 0', () => {
    const a = count_swimming_pools([[1, 1], [1, 1]]);
    expect(a).toBeGreaterThanOrEqual(0);
    const b = count_swimming_pools([[0, 1], [1, 1]]);
    expect(b).toBeGreaterThanOrEqual(0);
    const c = count_swimming_pools([[0, 0], [1, 1]]);
    expect(c).toBeGreaterThanOrEqual(0);
    const d = count_swimming_pools([[0, 0], [0, 1]]);
    expect(d).toBeGreaterThanOrEqual(0);
    const e = count_swimming_pools([[0, 0], [0, 0]]);
    expect(e).toBeGreaterThanOrEqual(0);
  });

  test('returns 0 for an empty matrix', () => {
    const result = count_swimming_pools([[]]);
    expect(result).toEqual(0);
  });

  test('returns 1 for matrix [[0]]', () => {
    const result = count_swimming_pools([[0]]);
    expect(result).toEqual(1);
  });

  test('returns 2 for matrix [[0, 1], [1, 0]]', () => {
    const result = count_swimming_pools([[1, 1], [0, 1]]);
    expect(result).toEqual(1);
  });

  test('returns 1 for matrix [[0, 0, 0], [0, 0, 0], [0, 0, 0]]', () => {
    const result = count_swimming_pools([[0, 0, 0], [0, 0, 0], [0, 0, 0]]);
    expect(result).toEqual(1);
  });

  test('returns 2 for matrix [[1, 0, 0], [1, 1, 0], [0, 1, 0]]', () => {
    const result = count_swimming_pools([[1, 0, 0], [1, 1, 0], [0, 1, 0]]);
    expect(result).toEqual(2);
  });

  test('returns 0 for matrix [[1, 1, 1, 1], [1, 1, 1, 1], [1, 1, 1, 1], [1, 1, 1, 1]]', () => {
    const result = count_swimming_pools([[1, 1, 1, 1], [1, 1, 1, 1], [1, 1, 1, 1], [1, 1, 1, 1]]);
    expect(result).toEqual(0);
  });

  test('returns 4 for matrix [[1, 0, 1, 1], [0, 1, 0, 1], [0, 1, 0, 1], [1, 1, 1, 0]]', () => {
    const result = count_swimming_pools([[1, 0, 1, 1], [0, 1, 0, 1], [0, 1, 0, 1], [1, 1, 1, 0]]);
    expect(result).toEqual(4);
  });

  test('returns 6 for matrix [[1, 0, 1, 1, 0], [0, 1, 0, 1, 1], [1, 0, 1, 0, 1], [1, 0, 1, 0, 1], [1, 0, 1, 0, 1]]', () => {
    const result = count_swimming_pools([
      [1, 0, 1, 1, 0],
      [0, 1, 0, 1, 1],
      [1, 0, 1, 0, 1],
      [1, 0, 1, 0, 1],
      [1, 0, 1, 0, 1]
    ]);
    expect(result).toEqual(6);
  });
});
