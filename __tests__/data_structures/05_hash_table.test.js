import HashTable from '../../exercises/data_structures/05_hash_table';

describe('ES6 Class', () => {
  test('has a HashTable class', () => {
    expect(typeof HashTable).toEqual('function');
    const ht = new HashTable();
    expect(ht).toBeInstanceOf(HashTable);
  });
});

describe('HashTable constructor', () => {
  test('is initialized with a table property that is an array', () => {
    const ht = new HashTable(11);
    expect(Array.isArray(ht.table)).toBeTruthy();
  });

  test('is initialized with a size property that is a number', () => {
    const ht = new HashTable(11);
    expect(typeof ht.size).toEqual('number');
  });
});

describe('generateHash', () => {
  test('is a method', () => {
    const ht = new HashTable(11);
    expect(typeof ht.generateHash).toEqual('function');
  });

  test('returns an integer less than the size of the table', () => {
    const ht = new HashTable(11);
    expect(ht.generateHash('Money Trees')).toBeGreaterThanOrEqual(0);
    expect(ht.generateHash('Money Trees')).toBeLessThanOrEqual(ht.size);
    expect(ht.generateHash('Backseat Freestyle')).toBeGreaterThanOrEqual(0);
    expect(ht.generateHash('Backseat Freestyle')).toBeLessThanOrEqual(ht.size);
    expect(ht.generateHash('Poetic Justice')).toBeGreaterThanOrEqual(0);
    expect(ht.generateHash('Poetic Justice')).toBeLessThanOrEqual(ht.size);
    expect(ht.generateHash('Swimming Pools')).toBeGreaterThanOrEqual(0);
    expect(ht.generateHash('Swimming Pools')).toBeLessThanOrEqual(ht.size);
    expect(ht.generateHash('Compton')).toBeGreaterThanOrEqual(0);
    expect(ht.generateHash('Compton')).toBeLessThanOrEqual(ht.size);
  });
});

describe('add', () => {
  test('is a method', () => {
    const ht = new HashTable(11);
    expect(typeof ht.add).toEqual('function');
  });

  test('inserts a value into the table based on a given key', () => {
    const ht = new HashTable(11);
    ht.add('album', 'good kid maad city');
    expect(ht.table.indexOf('good kid maad city')).toBeGreaterThanOrEqual(0);
    ht.add('artist', 'Kendrick Lamar');
    expect(ht.table.indexOf('Kendrick Lamar')).toBeGreaterThanOrEqual(0);
  });
});

describe('remove', () => {
  test('is a method', () => {
    const ht = new HashTable(11);
    expect(typeof ht.remove).toEqual('function');
  });

  test('deletes a value from the table based on a given key', () => {
    const ht = new HashTable(11);
    ht.add('album', 'good kid maad city');
    ht.add('artist', 'Kendrick Lamar');
    ht.remove('album');
    expect(ht.table.indexOf('good kid maad city')).toBe(-1);
    expect(ht.table.indexOf('Kendrick Lamar')).toBeGreaterThanOrEqual(0);
    ht.remove('artist');
    expect(ht.table.indexOf('Kendrick Lamar')).toBe(-1);
  });
});

describe('get', () => {
  test('is a method', () => {
    const ht = new HashTable(11);
    expect(typeof ht.get).toEqual('function');
  });

  test('retrives a value based on the given key', () => {
    const ht = new HashTable(11);
    ht.add('album', 'good kid maad city');
    ht.add('artist', 'Kendrick Lamar');
    expect(ht.get('album')).toEqual('good kid maad city');
    expect(ht.get('artist')).toEqual('Kendrick Lamar');
  });
});
