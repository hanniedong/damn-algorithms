import canFormulate from '../../exercises/algorithms/05_can_formulate';

describe('canFormulate', () => {
  test('is a function', () => {
    const result = typeof canFormulate;
    expect(result).toEqual('function');
  });

  test('returns the correct boolean if a string can be formulated', () => {
    const a = canFormulate('a', ['a', 'b']);
    expect(a).toEqual(true);
    const b = canFormulate('ab', ['a']);
    expect(b).toEqual(false);
  });

  test('"aloha" can be formulated from ["MAHALO"]', () => {
    const result = canFormulate('aloha', ['MAHALO']);
    expect(result).toBeTruthy();
  });

  test('"OaKlAnD, ca" can be formulated from ["oAkLaNd", " CA "]', () => {
    const result = canFormulate('OaKlAnD ca', ['oAkLaNd', ' CA ']);
    expect(result).toBeTruthy();
  });

  test('"telegraph" can be formulated from [" T"," E"," L"," E"," G"," R"," A"," P"," H,"]', () => {
    const result = canFormulate('telegraph', [' T',' E',' L',' E',' G',' R',' A',' P',' H,']);
    expect(result).toBeTruthy();
  });

  test('"OCCUPIES" can be formulated from ["Poetic", "Justice"]', () => {
    const result = canFormulate('OCCUPIES', ['Poetic', 'Justice']);
    expect(result).toBeTruthy();
  });

  test('"Kendrick Lamar" cannot be formulated from ["KendrickLAMAR"]', () => {
    const result = canFormulate('Kendrick Lamar', ['KendrickLAMAR']);
    expect(result).toBeFalsy();
  });

  test('"ALGORITHMS DATA STRUCTURES" cannot be formulated from ["algorithm", "data", "structures"]', () => {
    const result = canFormulate('ALGORITHMS DATA STRUCTURES', ["algorithm", "data", "structure"]);
    expect(result).toBeFalsy();
  });
});
