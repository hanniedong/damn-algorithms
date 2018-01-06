import canFormulate from '../../exercises/algorithms/01_can_formulate';

describe('canFormulate', () => {
  test('is a function', () => {
    const result = typeof canFormulate;
    expect(result).toEqual('function');
  });

  test('returns the correct boolean if a string can be formulated', () => {
    const a = canFormulate('a', 'ab');
    expect(a).toEqual(true);
    const b = canFormulate('ab', 'a');
    expect(b).toEqual(false);
  });

  test('"aloha" can be formulated for "MAHALO"', () => {
    const result = canFormulate('aloha', 'MAHALO');
    expect(result).toBeTruthy();
  });

  test('"OaKlAnD" can be formulated from "oAkLaNd"', () => {
    const result = canFormulate('OaKlAnD', 'oAkLaNd');
    expect(result).toBeTruthy();
  });

  test('"telegraph" can be formulated from "T E L E G R A P H"', () => {
    const result = canFormulate('telegraph', 'T E L E G R A P H');
    expect(result).toBeTruthy();
  });

  test('"OCCUPIES" can be formulated from "Poetic Justice"', () => {
    const result = canFormulate('OCCUPIES', 'Poetic Justice');
    expect(result).toBeTruthy();
  });

  test('"Kendrick Lamar" cannot be formulated from "KendrickLamar"', () => {
    const result = canFormulate('Kendrick Lamar', 'KendrickLamar');
    expect(result).toBeFalsy();
  });

  test('"ALGORITHMS" cannot be formulated from "algorithm"', () => {
    const result = canFormulate('ALGORITHMS', 'algorithm');
    expect(result).toBeFalsy();
  });
});
