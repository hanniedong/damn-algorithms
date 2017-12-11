/*
Eight months after "DAMN" was released, Kendrick Lamar released "DAMN COLLECTOR'S EDITION" which contained the exact same tracks, but with the album order reversed.

Given an array of track names as strings, reverse the elements in the array in-place.

Example:

let album_tracks = ['BLOOD', 'DNA', 'YAH', 'ELEMENT', 'FEEL', 'LOYALTY', 'PRIDE', 'HUMBLE', 'LUST', 'LOVE', 'XXX', 'FEAR', 'GOD', 'DUCKWORTH'];
reverse_track_order_in_place(album_tracks) => return ['DUCKWORTH', 'GOD', 'FEAR', 'XXX', 'LOVE', 'LUST', 'HUMBLE', 'PRIDE', 'LOYALTY','FEEL', 'ELEMENT', 'YAH', 'DNA', 'BLOOD']
*/

/**
 * @param {array} tracks
 * @return {array}
 */

const reverse_track_order_in_place = tracks => {
  let left = 0;
  let right = tracks.length - 1;

  while (left < right) {
    [tracks[left], tracks[right]] = [tracks[right], tracks[left]];
    left++;
    right--;
  }

  return tracks;
}

export default reverse_track_order_in_place;
