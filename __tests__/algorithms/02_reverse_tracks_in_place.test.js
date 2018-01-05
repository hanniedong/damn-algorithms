import reverse_tracks_in_place from '../../exercises/algorithms/02_reverse_tracks_in_place';

describe('reverse_tracks_in_place', () => {
  test('is a function', () => {
    expect(typeof reverse_tracks_in_place).toEqual('function');
  });

  test('returns an array of the same length', () => {
    const tracks = ['a', 'b', 'c'];
    const result = reverse_tracks_in_place(tracks);
    expect(Array.isArray(result)).toBeTruthy();
    expect(result).toHaveLength(tracks.length);
  });

  test('input and output arrays have same values', () => {
    const input = ['the', 'art', 'of', 'peer', 'pressure'];
    const result = reverse_tracks_in_place(input);
    expect(result).toEqual(expect.arrayContaining(input));
  });

  test('input value is not equal to output', () => {
    const result = reverse_tracks_in_place(['good kid maad city', 'damn', 'section.80']);
    expect(result).not.toEqual(['good kid maad city', 'damn', 'section.80']);
  });

  test('input value is reversed before being returned', () => {
    const result = reverse_tracks_in_place([1, 2, 3, 4, 5]);
    expect(result).toEqual([5, 4, 3, 2, 1]);
  });
});
