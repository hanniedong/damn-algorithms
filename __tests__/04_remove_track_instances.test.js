import removeTrackInstances from '../exercises/04_remove_track_instances';

describe('removeTrackInstances', () => {
  test('is a function', () => {
    expect(typeof removeTrackInstances).toEqual('function');
  });

  test('returns a integer representing the length of the modified input array', () => {
    const tracks = ['HUMBLE', 'PRIDE', 'FEEL'];
    const target = 'FEEL';
    const result = removeTrackInstances(tracks, target);
    expect(typeof result).toEqual('number');
    expect(result).toBeGreaterThanOrEqual(0);
  });

  test('returns the length of input array if target is not found', () => {
    const tracks = ['Alright', 'Hood Politics', 'u', 'i'];
    const target = 'Institutionalized';
    const result = removeTrackInstances(tracks, target);
    expect(result).toEqual(tracks.length);
  });

  test('removes all instances of the target', () => {
    const gkmc = ['Money Trees', 'Real', 'Compton', 'Real', 'Real', 'good kid', 'Real'];
    const target1 = 'Real';
    const a = removeTrackInstances(gkmc, target1);
    expect(a).toEqual(3);
    const section80 = ['Rigamortus', 'Rigamortus', 'The Spiteful Chant', 'Chapter Ten', 'Rigamortus', 'Rigamortus', 'Rigamortus'];
    const target2 = 'Rigamortus';
    const b = removeTrackInstances(section80, target2);
    expect(b).toEqual(2);
  });
});
