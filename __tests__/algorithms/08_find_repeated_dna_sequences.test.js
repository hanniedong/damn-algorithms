import findRepeatedDnaSequences from '../../exercises/algorithms/04_find_repeated_dna_sequences';

describe('findRepeatedDnaSequences', () => {
  test('is a function', () => {
    const result = typeof findRepeatedDnaSequences;
    expect(result).toEqual('function');
  });

  test('returns an array', () => {
    const result = findRepeatedDnaSequences('LOYALTY', 3);
    expect(Array.isArray(result)).toBeTruthy();
  });

  test('"LOYALTYROYALTY" returns correct array of repeated sequences', () => {
    const a = findRepeatedDnaSequences('LOYALTYROYALTY', 1);
    expect(a).toEqual(['L', 'Y', 'O', 'A', 'T']);
    const b = findRepeatedDnaSequences('LOYALTYROYALTY', 2);
    expect(b).toEqual(['OY', 'YA', 'AL', 'LT', 'TY']);
    const c = findRepeatedDnaSequences('LOYALTYROYALTY', 3);
    expect(c).toEqual(['OYA', 'YAL', 'ALT', 'LTY']);
    const d = findRepeatedDnaSequences('LOYALTYROYALTY', 4);
    expect(d).toEqual(['OYAL', 'YALT', 'ALTY']);
    const e = findRepeatedDnaSequences('LOYALTYROYALTY', 5);
    expect(e).toEqual(['OYALT', 'YALTY']);
    const f = findRepeatedDnaSequences('LOYALTYROYALTY', 6);
    expect(f).toEqual(['OYALTY']);
    const g = findRepeatedDnaSequences('LOYALTYROYALTY', 7);
    expect(g).toEqual([]);
  });

  test('"POWERPOISONPAIN" returns correct array of repeated sequences', () => {
    const a = findRepeatedDnaSequences('POWERPOISONPAIN', 1);
    expect(a).toEqual(['P', 'O', 'I', 'N']);
    const b = findRepeatedDnaSequences('POWERPOISONPAIN', 2);
    expect(b).toEqual(['PO']);
    const c = findRepeatedDnaSequences('POWERPOISONPAIN', 3);
    expect(c).toEqual([]);
  });

  test('"JOY" returns correct array of repeated sequences', () => {
    const a = findRepeatedDnaSequences('JOY', 1);
    expect(a).toEqual([]);
    const b = findRepeatedDnaSequences('JOY', 2);
    expect(b).toEqual([]);
    const c = findRepeatedDnaSequences('JOY', 3);
    expect(c).toEqual([]);
  });

  test('"LOYALTYJOYPAINLOYALTY" with an n of 7 returns ["LOYALTY"]', () => {
    const result = findRepeatedDnaSequences('LOYALTYJOYROYALTYPAINLOYALTY', 7);
    expect(result).toEqual(['LOYALTY']);
  });

  test('"LOYALTYROYALTY" with an n of 4 returns three different sequences', () => {
    const result = findRepeatedDnaSequences('LOYALTYROYALTY', 4);
    expect(result).toHaveLength(3);
  });
});
