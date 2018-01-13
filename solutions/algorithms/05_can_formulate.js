/*
Given an arbitrary target string and album object containing track names as strings, write an algorithm that returns a boolean of whether or not the target string can be formulated from the track name characters in the array.

Each character in the album.tracks.name can only be used once in the target string. Transform the characters so that the algorithm is not case sensitive.

Example:
const gkmc = {
  tracks: [
    {
      track_number: 1,
      name: 'Sherane a.k.a Master Splinter\'s Daughter',
    },
    {
      track_number: 2,
      name: 'B****, Don\'t Kill My Vibe',
    },
    {
      track_number: 3,
      name: 'Backseat Freestyle',
    },
  ],
};

can_formulate('JavaScript', gkmc); => return false
can_formulate('**, MUSIC. **', gkmc); => return true
can_formulate('*M*U*S*I*C*') => return false
*/

/**
 * @param {string} target
 * @param {object} albums
 * @return {boolean}
 */

const toString = album => (
  album.tracks.map(track => track.name).join('').toLowerCase()
);

const canFormulate = (target, album) => {
  const possibleChars = {};

  const tracks = toString(album);

  for (const track of tracks) {
    possibleChars[track] = (possibleChars[track] || 0) + 1;
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
