/*
Given an arbitrary target string and another string of lyrics, write a function that returns a boolean of whether or not the target string can be formulated from the lyrics.

Each letter in the lyrics string can only be used once in your target string.

Note: Ignore case-sensitivity.
*/

let target_string = 'Hack Reactor';
let good_kid_chorus = 'Mass hallucination baby Ill education baby Want to reconnect with your elations This is your station baby';

/**
 * @param {string} target
 * @param {string} lyrics
 * @return {boolean}
 */

const can_formulate = (target, lyrics) => {

  if (target.length > lyrics.length) {
    return false;
  }

  let target_lowercase = string_to_lowercase(target);
  let lyrics_lowercase = string_to_lowercase(lyrics);

  let possible_chars = {};

  for (char of lyrics_lowercase) {
    possible_chars[char] = (possible_chars[char] || 0) + 1;
  }

  for (char of target_lowercase) {
    possible_chars[char] = (possible_chars[char] || 0) - 1;
    if (possible_chars[char] === -1) {
      return false;
    }
  }

  return true;
}

const string_to_lowercase = string => {
  return string.toLowerCase();
}
