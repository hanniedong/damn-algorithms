/*
Given a sorted array, write a function that searches for a target value in the array using binary search. If the value exists, return its index. If it doesn't exist, return -1.

Example:

let gkmcSortedTrackNames = ["Backseat Freestyle", "B****, Don't Kill My Vibe", "Compton", "good kid", "m.A.A.d city", "Money Trees", "Poetic Justice", "Real", "Sherane a.k.a Master Splinter's Daughter", "Swimming Pools (Drank)", "Sing About Me, I'm Dying Of Thirst", "The Art of Peer Pressure"];

binarySearch(gkmcSortedTrackNames, "Money Trees") => return 5
binarySearch(gkmcSortedTrackNames, "Backseat Freestyle") => return 0
binarySearch(gkmcSortedTrackNames, "Alright") => return -1
binarySearch(gkmcSortedTrackNames, "Cut You Off (To Grow Closer)") => return -1
*/

/**
 * @param {array} list
 * @param {string} target
 * @return {number}
 */

const binarySearch = (list, targetValue) => {
  let start = 0;
  let end = list.length - 1;

  while (start <= end) {
    const curr = Math.floor((start + end) / 2);

    if (list[curr] === targetValue) {
      return curr;
    } else if (targetValue < list[curr]) {
      end = curr - 1;
    } else {
      start = curr + 1;
    }
  }

  return -1;
};

export default binarySearch;
