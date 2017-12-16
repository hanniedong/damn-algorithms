import find_repeated_DNA_sequences from '../exercises/find_repeated_DNA_sequences';

test('find_repeated_DNA_sequences is a function', () => {
  const result = typeof find_repeated_DNA_sequences;
  expect(result).toEqual('function');
});

test('find_repeated_DNA_sequences returns an array', () => {
  const result = find_repeated_DNA_sequences('LOYALTY');
  expect(Array.isArray(result)).toBeTruthy();
});

test('"POWERPOISONPAINJOY" returns an empty array', () => {
  const result = find_repeated_DNA_sequences('POWERPOISONPAINJOY');
  expect(result).toHaveLength(0);
});

test('"LOYALTYJOYROYALTYPAINLOYALTYRICHESLOYALTY" returns ["LOYALTY"]', () => {
  const result = find_repeated_DNA_sequences('LOYALTYJOYROYALTYPAINLOYALTYRICHESLOYALTY');
  expect(result).toEqual(['LOYALTY']);
});

test('"ROYALTYROYALTYROYALTY" returns an array containing seven different sequences', () => {
  const result = find_repeated_DNA_sequences('ROYALTYROYALTYROYALTY');
  expect(result).toHaveLength(7);
});

test('"LOYALTYPOWERPOISONPAINJOYROYALTYLOYALTYAMBITIONROYALTYFLOWPAINPOISONLOYALTYJOY" returns ["LOYALTY", "ROYALTY"]', () => {
  const result = find_repeated_DNA_sequences(
    'LOYALTYPOWERPOISONPAINJOYROYALTYLOYALTYAMBITIONROYALTYFLOWPAINPOISONLOYALTYJOY'
  );
  expect(result).toEqual(['LOYALTY', 'ROYALTY']);
});
