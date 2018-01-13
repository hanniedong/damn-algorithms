import isPalindromePermutation from '../../exercises/algorithms/03_palindrome_permutation';

describe('isPalindromePermutation', () => {
  test('is a function', () => {
    expect(typeof isPalindromePermutation).toEqual('function');
  });

  test('returns true if given an empty string', () => {
    const result = isPalindromePermutation('');
    expect(result).toBeTruthy();
  });

  test('returns a boolean', () => {
    const xxx = isPalindromePermutation('xxx');
    expect(xxx).toBeTruthy();
    const humble = isPalindromePermutation('humble');
    expect(humble).toBeFalsy();
  });

  test('returns false if permutations of input string cannot form a palindrome', () => {
    const a = isPalindromePermutation('goodkid');
    expect(a).toBeFalsy();
    const b = isPalindromePermutation('maadcity');
    expect(b).toBeFalsy();
    const c = isPalindromePermutation('damn');
    expect(c).toBeFalsy();
    const d = isPalindromePermutation('topimpabutterfly');
    expect(c).toBeFalsy();
  });

  test('returns true if a permutation of input string can form a palindrome', () => {
    const a = isPalindromePermutation('forfree');
    expect(a).toBeTruthy();
    const b = isPalindromePermutation('i');
    expect(b).toBeTruthy();
    const c = isPalindromePermutation('goodgood');
    expect(c).toBeTruthy();
    const d = isPalindromePermutation('kidkid');
    expect(d).toBeTruthy();
  });
});
