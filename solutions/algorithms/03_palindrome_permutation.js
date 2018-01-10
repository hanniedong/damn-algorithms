/*
Given a string, write an algorithm that returns a boolean based on whether or not any permutation can form a palindrome. The input string will contain lowercase letters only.

  Example:
  'HUMBLE' => return false
  'LOYALTY' => return false
  'XXX' => return true

  'forFree' => return true
  'forSale' => return false

  'AnnaWise' => return false
  'Anna' => return true
*/

/**
 * @param  {string}  str [description]
 * @return {Boolean}     [description]
 */

const isPalindromePermutation = (str) => {
  const set = new Set();

  [...str].forEach((char) => {
    if (set.has(char)) {
      set.delete(char);
    } else {
      set.add(char);
    }
  });

  return Array.from(set).length < 2;
};

export default isPalindromePermutation;
