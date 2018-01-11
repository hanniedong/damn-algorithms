/*
Given an arbitrary target string and array of album strings, write an algorithm that returns a boolean of whether or not the target string can be formulated from the characters in the array.

Each character in the album list can only be used once in the target string. The algorithm should also be case insensitive.

Example:
const target = 'JavaScript'
const gkmc = ['DAMN', 'To Pimp A Butterfly', 'good kid, mAAd city', 'Section 80'];
canFormulate(target, gkmc); => return false

const target = 'data';
const gkmc = ['DAMN', 'To Pimp A Butterfly', 'good kid, mAAd city', 'Section 80'];
canFormulate(target, gkmc); => return true
*/

/**
 * @param {string} target
 * @param {array} albums
 * @return {boolean}
 */

const canFormulate = (target, albums) => {
  const possibleChars = {};

  for (const char of albums.join('').toLowerCase()) {
    possibleChars[char] = (possibleChars[char] || 0) + 1;
  }

  for (const char of target.toLowerCase()) {
    possibleChars[char] = (possibleChars[char] || 0) - 1;
    if (possibleChars[char] === -1) {
      return false;
    }
  }

  return true;
};

export default canFormulate;
