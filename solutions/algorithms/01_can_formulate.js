/*
Given an arbitrary target string and another string of lyrics, write a function that returns a boolean of whether or not the target string can be formulated from the lyrics.

You can assume that both inputs will be strings. Each letter in the lyrics string can only be used once in your target string. The algorithm should also be case insensitive.

Examples:

let target = 'JavaScript'
let goodKidChorus = 'Mass hallucination baby Ill education baby Want to reconnect with your elations This is your station baby';

canFormulate(target, goodKidChorus); => return false

let target = 'Kendrick Lamar';
let nowOrNeverVerse = 'Waking up in a dream Sleepwalking on another big stage You never heard peace til you hear people scream Your name in unison';
canFormulate(target, nowOrNeverVerse); => return true
*/

/**
 * @param {string} target
 * @param {string} lyrics
 * @return {boolean}
 */

const canFormulate = (target, lyrics) => {
  if (target.length > lyrics.length) {
    return false;
  }

  const possibleChars = {};

  for (const char of lyrics.toLowerCase()) {
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
