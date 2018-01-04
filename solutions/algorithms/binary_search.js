/*
BINARY SEARCH
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
