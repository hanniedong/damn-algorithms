import Set from '../../exercises/data_structures/03_set';

describe('ES6 Class', () => {
  test('has a Set class', () => {
    expect(typeof Set).toEqual('function');
    const set = new Set();
    expect(set).toBeInstanceOf(Set);
  });
});

describe('Set constructor', () => {
  test('has a storage property that is initialized as an empty object', () => {
    const set = new Set();
    expect(set.storage).toMatchObject({});
  });

  test('has a size property that is initialized to 0', () => {
    const set = new Set();
    expect(set.size).toEqual(0);
  });
});

describe('has', () => {
  test('is a method', () => {
    const set = new Set();
    expect(typeof set.has).toEqual('function');
  });

  test('returns a boolean based on whether a given value exists in storage', () => {
    const set = new Set();
    expect(set.has('Swimming Pools')).toBeFalsy();
    set.add('Swimming Pools');
    expect(set.has('Swimming Pools')).toBeTruthy();
  });
});

describe('add', () => {
  test('is a method', () => {
    const set = new Set();
    expect(typeof set.add).toEqual('function');
  });

  test('adds a given value to the set and increments size', () => {
    const set = new Set();
    set.add('Sing About Me');
    set.add("I'm Dying of Thirst");
    expect(set.has('Sing About Me')).toBeTruthy();
    expect(set.has("I'm Dying of Thirst")).toBeTruthy();
    expect(set.getSize()).toEqual(2);
  });
});

describe('delete', () => {
  test('is a method', () => {
    const set = new Set();
    expect(typeof set.delete).toEqual('function');
  });

  test('deletes a given value from the set and decrements size', () => {
    const set = new Set();
    set.add('Sing About Me');
    set.add("I'm Dying of Thirst");
    expect(set.has('Sing About Me')).toBeTruthy();
    expect(set.has("I'm Dying of Thirst")).toBeTruthy();
    expect(set.getSize()).toEqual(2);
    set.delete('Sing About Me');
    expect(set.getSize()).toEqual(1);
    expect(set.has('Sing About Me')).toBeFalsy();
    set.delete("I'm Dying of Thirst");
    expect(set.getSize()).toEqual(0);
    expect(set.has("I'm Dying of Thirst")).toBeFalsy();
  });
});

describe('clear', () => {
  test('is a method', () => {
    const set = new Set();
    expect(typeof set.clear).toEqual('function');
  });

  test('deletes all values from the set and resets size to 0', () => {
    const set = new Set();
    set.add('good kid');
    set.add('m.A.A.d city');
    expect(set.has('good kid')).toBeTruthy();
    expect(set.has('m.A.A.d city')).toBeTruthy();
    expect(set.getSize()).toEqual(2);
    set.clear();
    expect(set.has('good kid')).toBeFalsy();
    expect(set.has('m.A.A.d city')).toBeFalsy();
    expect(set.getSize()).toEqual(0);
  });
});

describe('values', () => {
  test('is a method', () => {
    const set = new Set();
    expect(typeof set.values).toEqual('function');
  });

  test('returns an array of all values in the set', () => {
    const set = new Set();
    const tracks = ['Backseat Freestyle','Money Trees','Poetic Justice'];
    tracks.forEach(track => set.add(track));
    expect(Array.isArray(set.values())).toBeTruthy();
    expect(set.values()).toEqual(expect.arrayContaining(tracks));
    set.clear();
    expect(set.values()).toEqual([]);
  });
});

describe('getSize', () => {
  test('is a method', () => {
    const set = new Set();
    expect(typeof set.getSize).toEqual('function');
  });

  test('returns the size of the set', () => {
    const set = new Set();
    const tracks = ['Backseat Freestyle','Money Trees','Poetic Justice'];
    tracks.forEach(track => set.add(track));
    expect(set.getSize()).toEqual(tracks.length);
    set.clear();
    expect(set.getSize()).toEqual(0);
  });
});
