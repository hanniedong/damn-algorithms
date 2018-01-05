import can_formulate from '../../exercises/algorithms/01_can_formulate';

describe('can_formulate', () => {
  test('is a function', () => {
    const result = typeof can_formulate;
    expect(result).toEqual('function');
  });

  test('returns the correct boolean if a string can be formulated', () => {
    const a = can_formulate('a', 'ab');
    expect(a).toEqual(true);
    const b = can_formulate('ab', 'a');
    expect(b).toEqual(false);
  });

  test('"aloha" can be formulated for "MAHALO"', () => {
    const result = can_formulate('aloha', 'MAHALO');
    expect(result).toBeTruthy();
  });

  test('"OaKlAnD" can be formulated from "oAkLaNd"', () => {
    const result = can_formulate('OaKlAnD', 'oAkLaNd');
    expect(result).toBeTruthy();
  });

  test('"telegraph" can be formulated from "T E L E G R A P H"', () => {
    const result = can_formulate('telegraph', 'T E L E G R A P H');
    expect(result).toBeTruthy();
  });

  test('"OCCUPIES" can be formulated from "Poetic Justice"', () => {
    const result = can_formulate('OCCUPIES', 'Poetic Justice');
    expect(result).toBeTruthy();
  });

  test('"Kendrick Lamar" cannot be formulated from "KendrickLamar"', () => {
    const result = can_formulate('Kendrick Lamar', 'KendrickLamar');
    expect(result).toBeFalsy();
  });

  test('"ALGORITHMS" cannot be formulated from "algorithm"', () => {
    const result = can_formulate('ALGORITHMS', 'algorithm');
    expect(result).toBeFalsy();
  });
});
