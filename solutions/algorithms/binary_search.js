/*
Given a sorted array, write a function that searches for a target value in the array using binary search. If the value exists, return its index. If it doesn't exist, return -1.

Example:

let gkmc_sorted_track_names = ["Backseat Freestyle", "B****, Don't Kill My Vibe", "Compton", "good kid", "m.A.A.d city", "Money Trees", "Poetic Justice", "Real", "Sherane a.k.a Master Splinter's Daughter", "Swimming Pools (Drank)", "Sing About Me, I'm Dying Of Thirst", "The Art of Peer Pressure"];

binary_search(gkmc_sorted_track_names, "Money Trees") => return 5
binary_search(gkmc_sorted_track_names, "Backseat Freestyle") => return 0
binary_search(gkmc_sorted_track_names, "Alright") => return -1
binary_search(gkmc_sorted_track_names, "Cut You Off (To Grow Closer)") => return -1
*/

/**
 * @param {array} list
 * @param {string} target
 * @return {number}
 */

const binary_search = (list, target_value) => {
  let start = 0;
  let end = list.length - 1;
  let curr;

  while (start <= end) {
    curr = Math.floor((start + end) / 2);

    if (list[curr] === target_value) {
      return curr;
    } else if (target_value < list[curr]) {
      end = curr - 1;
    } else {
      start = curr + 1;
    }
  }

  return -1;
};

export default binary_search;
