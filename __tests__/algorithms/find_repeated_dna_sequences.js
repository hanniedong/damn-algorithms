import find_repeated_dna_sequences from '../../exercises/algorithms/find_repeated_dna_sequences';

test('find_repeated_dna_sequences is a function', () => {
  const result = typeof find_repeated_dna_sequences;
  expect(result).toEqual('function');
});

test('find_repeated_dna_sequences returns an array', () => {
  const result = find_repeated_dna_sequences('LOYALTY');
  expect(Array.isArray(result)).toBeTruthy();
});

test('"POWERPOISONPAINJOY" returns an empty array', () => {
  const result = find_repeated_dna_sequences('POWERPOISONPAINJOY');
  expect(result).toHaveLength(0);
});

test('"LOYALTYJOYROYALTYPAINLOYALTYRICHESLOYALTY" returns ["LOYALTY"]', () => {
  const result = find_repeated_dna_sequences('LOYALTYJOYROYALTYPAINLOYALTYRICHESLOYALTY');
  expect(result).toEqual(['LOYALTY']);
});

test('"ROYALTYROYALTYROYALTY" returns an array containing seven different sequences', () => {
  const result = find_repeated_dna_sequences('ROYALTYROYALTYROYALTY');
  expect(result).toHaveLength(7);
});

test('"LOYALTYPOWERPOISONPAINJOYROYALTYLOYALTYAMBITIONROYALTYFLOWPAINPOISONLOYALTYJOY" returns ["LOYALTY", "ROYALTY"]', () => {
  const result = find_repeated_dna_sequences(
    'LOYALTYPOWERPOISONPAINJOYROYALTYLOYALTYAMBITIONROYALTYFLOWPAINPOISONLOYALTYJOY'
  );
  expect(result).toEqual(['LOYALTY', 'ROYALTY']);
});
