import reverseTracksInPlace from '../exercises/06_reverse_tracks_in_place';

describe('reverseTracksInPlace', () => {
  test('is a function', () => {
    expect(typeof reverseTracksInPlace).toEqual('function');
  });

  test('returns an array of the same length', () => {
    const tracks = ['a', 'b', 'c'];
    const result = reverseTracksInPlace(tracks);
    expect(Array.isArray(result)).toBeTruthy();
    expect(result).toHaveLength(tracks.length);
  });

  test('input and output arrays have same values', () => {
    const input = ['the', 'art', 'of', 'peer', 'pressure'];
    const result = reverseTracksInPlace(input);
    expect(result).toEqual(expect.arrayContaining(input));
  });

  test('input value is not equal to output', () => {
    const result = reverseTracksInPlace(['good kid maad city', 'damn', 'section.80']);
    expect(result).not.toEqual(['good kid maad city', 'damn', 'section.80']);
  });

  test('input value is reversed before being returned', () => {
    const result = reverseTracksInPlace([1, 2, 3, 4, 5]);
    expect(result).toEqual([5, 4, 3, 2, 1]);
  });
});
