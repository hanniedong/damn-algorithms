import find_repeated_dna_sequences from '../../exercises/algorithms/04_find_repeated_dna_sequences';

describe('find_repeated_dna_sequences', () => {
  test('is a function', () => {
    const result = typeof find_repeated_dna_sequences;
    expect(result).toEqual('function');
  });

  test('returns an array', () => {
    const result = find_repeated_dna_sequences('LOYALTY', 3);
    expect(Array.isArray(result)).toBeTruthy();
  });

  test('"LOYALTYROYALTY" returns correct array of repeated sequences', () => {
    const a = find_repeated_dna_sequences('LOYALTYROYALTY', 1);
    expect(a).toEqual(['L', 'Y', 'O', 'A', 'T']);
    const b = find_repeated_dna_sequences('LOYALTYROYALTY', 2);
    expect(b).toEqual(['OY', 'YA', 'AL', 'LT', 'TY']);
    const c = find_repeated_dna_sequences('LOYALTYROYALTY', 3);
    expect(c).toEqual(['OYA', 'YAL', 'ALT', 'LTY']);
    const d = find_repeated_dna_sequences('LOYALTYROYALTY', 4);
    expect(d).toEqual(['OYAL', 'YALT', 'ALTY']);
    const e = find_repeated_dna_sequences('LOYALTYROYALTY', 5);
    expect(e).toEqual(['OYALT', 'YALTY']);
    const f = find_repeated_dna_sequences('LOYALTYROYALTY', 6);
    expect(f).toEqual(['OYALTY']);
    const g = find_repeated_dna_sequences('LOYALTYROYALTY', 7);
    expect(g).toEqual([]);
  });

  test('"POWERPOISONPAIN" returns correct array of repeated sequences', () => {
    const a = find_repeated_dna_sequences('POWERPOISONPAIN', 1);
    expect(a).toEqual(['P', 'O', 'I', 'N']);
    const b = find_repeated_dna_sequences('POWERPOISONPAIN', 2);
    expect(b).toEqual(['PO']);
    const c = find_repeated_dna_sequences('POWERPOISONPAIN', 3);
    expect(c).toEqual([]);
  });

  test('"JOY" returns correct array of repeated sequences', () => {
    const a = find_repeated_dna_sequences('JOY', 1);
    expect(a).toEqual([]);
    const b = find_repeated_dna_sequences('JOY', 2);
    expect(b).toEqual([]);
    const c = find_repeated_dna_sequences('JOY', 3);
    expect(c).toEqual([]);
  });

  test('"LOYALTYJOYPAINLOYALTY" with an n of 7 returns ["LOYALTY"]', () => {
    const result = find_repeated_dna_sequences('LOYALTYJOYROYALTYPAINLOYALTY', 7);
    expect(result).toEqual(['LOYALTY']);
  });

  test('"LOYALTYROYALTY" with an n of 4 returns three different sequences', () => {
    const result = find_repeated_dna_sequences('LOYALTYROYALTY', 4);
    expect(result).toHaveLength(3);
  });
});
