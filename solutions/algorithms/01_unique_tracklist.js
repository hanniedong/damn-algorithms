/*
Given an array of track names, find if the entire tracklist is unique. Your algorithm should return true if all tracks are unique, but return false if there are any duplicates in the array.

Example:
const section80 = ['A.D.H.D.', 'Chapter Six', 'Chapter Ten', 'Rigamortus', 'HiiiPower'];
isUniqueTracklist(section80) => return true

const gkmc = ['Backseat Freestyle', 'good kid', 'Real', 'good kid'];
isUniqueTracklist(gkmc) => return false
*/

/**
 * @param  {array}  tracks
 * @return {Boolean}
 */

const isUniqueTracklist = (tracks) => {
  const set = new Set();

  for (const track of tracks) {
    if (set.has(track.toLowerCase())) {
      return false;
    }
    set.add(track.toLowerCase());
  }
  return true;
};

export default isUniqueTracklist;
