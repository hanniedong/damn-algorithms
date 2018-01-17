/*
Binary search is an algorithm used to find a value in an ordered list. It involves repeatedly dividing a list in half until a target value is found or the list is empty.

A basic algorithm for binary search:
- if the target value is in the middle of the list, return its index
- if the target value is less than the value at the middle, narrow the search to the lower half
- if the target value is greater than the value in the middle, narrow the search to the upper half
- continue to check until the value is found or the list is empty

Given a sorted array, write a function that searches for a target value in the array using binary search. If the value exists, return its index. If it doesn't exist, return -1.

Example:
const damnSortedTrackNames = ['BLOOD', 'DNA', 'DUCKWORTH', 'ELEMENT', 'FEAR', 'FEEL', 'GOD', 'HUMBLE', 'LOVE', 'LOYALTY', 'LUST', 'PRIDE', 'XXX', 'YAH'];

binarySearch(damnSortedTrackNames, 'FEEL') => return 5
binarySearch(damnSortedTrackNames, 'BLOOD') => return 0
binarySearch(damnSortedTrackNames, 'Money Trees') => return -1
binarySearch(damnSortedTrackNames, 'Alright') => return -1
*/

/**
 * @param {array} list
 * @param {string} target
 * @return {number}
 */

const binarySearch = (list, targetValue) => {};

export default binarySearch;
