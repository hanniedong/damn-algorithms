import isUniqueTracklist from '../../exercises/algorithms/01_unique_tracklist';

describe('isUniqueTracklist', () => {
  test('is a function', () => {
    expect(typeof isUniqueTracklist).toEqual('function');
  });

  test('returns true for an empty array', () => {
    const emptyArray = [];
    const result = isUniqueTracklist(emptyArray);
    expect(result).toBeTruthy();
  });

  test('returns true if tracks are all unique', () => {
    const section80 = ['A.D.H.D.', 'Chapter Six', 'Chapter Ten', 'Rigamortus', 'HiiiPower'];
    const a = isUniqueTracklist(section80);
    expect(a).toBeTruthy();
    const gkmc = ['Backseat Freestyle', 'good kid', 'Real', 'Compton'];
    const b = isUniqueTracklist(gkmc);
    expect(b).toBeTruthy();
  });

  test('returns false if any duplicate tracks exist', () => {
    const section80 = ['A.D.H.D.', 'HiiiPower', 'Chapter Ten', 'Rigamortus', 'HiiiPower'];
    const a = isUniqueTracklist(section80);
    expect(a).toBeFalsy();
    const gkmc = ['Backseat Freestyle', 'good kid', 'Real', 'good kid'];
    const b = isUniqueTracklist(gkmc);
    expect(b).toBeFalsy();
  });
});
