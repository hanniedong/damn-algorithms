/*
Given an array of tracks and a target track, remove all instances of that target track in the array and return the new length of the array. Perform the removal of the target in-place without creating extra space for another array.

Example:
let tracks = ['DNA', 'HUMBLE', 'LOVE', 'DNA', 'LOYALTY', 'DNA', 'DNA'];
let target = 'DNA';

removeInstances(target) => return 3

*/

/**
 * @param {array} tracklist
 * @param {string} target
 * @return {number}
 */

const removeTrackInstances = (tracklist, target) => {
  const start = 0;
  let currIdx = tracklist.length - 1;

  while (currIdx >= start) {
    if (tracklist[currIdx] === target) {
      tracklist.splice(currIdx, 1);
    }
    currIdx -= 1;
  }

  return tracklist.length;
};

export default removeTrackInstances;
