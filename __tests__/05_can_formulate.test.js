import canFormulate from '../exercises/05_can_formulate';

describe('canFormulate', () => {
  test('is a function', () => {
    const result = typeof canFormulate;
    expect(result).toEqual('function');
  });

  test('returns the correct boolean if a string can be formulated', () => {
    const album = { tracks: [ {name: 'a'}, {name: 'b'}]}
    const a = canFormulate('a', album);
    expect(a).toEqual(true);
    const b = canFormulate('abc', album);
    expect(b).toEqual(false);
  });

  test('"aloha" can be formulated from track name "MAHALO"', () => {
    const album = { tracks: [ {name: 'MAHALO'}]};
    const result = canFormulate('aloha', album);
    expect(result).toBeTruthy();
  });

  test('"OaKlAnD, ca" can be formulated from track names "oAkLaNd" and " CA "]', () => {
    const album = { tracks: [ {name: 'oAkLaNd'}, {name: ' CA '}]};
    const result = canFormulate('OaKlAnD ca', album);
    expect(result).toBeTruthy();
  });

  test('"OCCUPIES" can be formulated from track names "Poetic" and "Justice"', () => {
    const album = { tracks: [ {name: 'Poetic'}, {name: 'Justice'}]};
    const result = canFormulate('OCCUPIES', album);
    expect(result).toBeTruthy();
  });

  test('"Kendrick Lamar" cannot be formulated from track names "Kendrick" and "LAMAR"', () => {
    const album = { tracks: [ {name: 'Kendrick'}, {name: 'LAMAR'}]}
    const result = canFormulate('Kendrick Lamar', album);
    expect(result).toBeFalsy();
  });

  test('"ALGORITHMS DATA STRUCTURES" cannot be formulated from tracks "algorithm", "data", and "structure"', () => {
    const album = { tracks: [ {name: 'algorithm'}, {name: 'data'}, {name: 'structure'}] };
    const result = canFormulate('ALGORITHMS DATA STRUCTURES', album);
    expect(result).toBeFalsy();
  });
});
