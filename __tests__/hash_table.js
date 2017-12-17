import HashTable from '../exercises/hash_table';

test('HashTable is a function', () => {
  expect(typeof HashTable).toEqual('function');
});

test('ht is an instance of HashTable', () => {
  const ht = new HashTable();
  expect(ht).toBeInstanceOf(HashTable);
});

test('HashTable is initialized with a _table property that is an array', () => {
  const ht = new HashTable(11);
  expect(Array.isArray(ht._table)).toBeTruthy();
});

test('HashTable is initialized with a _size property that is a number', () => {
  const ht = new HashTable(11);
  expect(typeof ht._size).toEqual('number');
});

test('HashTable has a generate_hash method', () => {
  const ht = new HashTable(11);
  expect(typeof ht.generate_hash).toEqual('function');
});

test('HashTable generate_hash method returns an integer less than the size of the table', () => {
  const ht = new HashTable(11);
  console.log('album: ', ht.generate_hash('artist'));
  expect(ht.generate_hash('Money Trees')).toBeGreaterThanOrEqual(0);
  expect(ht.generate_hash('Money Trees')).toBeLessThanOrEqual(ht._size);
  expect(ht.generate_hash('Backseat Freestyle')).toBeGreaterThanOrEqual(0);
  expect(ht.generate_hash('Backseat Freestyle')).toBeLessThanOrEqual(ht._size);
  expect(ht.generate_hash('Poetic Justice')).toBeGreaterThanOrEqual(0);
  expect(ht.generate_hash('Poetic Justice')).toBeLessThanOrEqual(ht._size);
  expect(ht.generate_hash('Swimming Pools')).toBeGreaterThanOrEqual(0);
  expect(ht.generate_hash('Swimming Pools')).toBeLessThanOrEqual(ht._size);
  expect(ht.generate_hash('Compton')).toBeGreaterThanOrEqual(0);
  expect(ht.generate_hash('Compton')).toBeLessThanOrEqual(ht._size);
});

test('HashTable has an add method', () => {
  const ht = new HashTable(11);
  expect(typeof ht.add).toEqual('function');
});

test('HashTable add method inserts a value into the table based on a given key', () => {
  const ht = new HashTable(11);
  ht.add('album', 'good kid maad city');
  expect(ht._table.indexOf('good kid maad city')).toBeGreaterThanOrEqual(0);
  ht.add('artist', 'Kendrick Lamar');
  expect(ht._table.indexOf('Kendrick Lamar')).toBeGreaterThanOrEqual(0);
});

test('HashTable has a remove method', () => {
  const ht = new HashTable(11);
  expect(typeof ht.remove).toEqual('function');
});

test('HashTable remove method deletes a value from the table based on a given key', () => {
  const ht = new HashTable(11);
  ht.add('album', 'good kid maad city');
  ht.add('artist', 'Kendrick Lamar');
  ht.remove('album');
  expect(ht._table.indexOf('good kid maad city')).toBe(-1);
  expect(ht._table.indexOf('Kendrick Lamar')).toBeGreaterThanOrEqual(0);
  ht.remove('artist');
  expect(ht._table.indexOf('Kendrick Lamar')).toBe(-1);
});

test('HashTable has a get method', () => {
  const ht = new HashTable(11);
  expect(typeof ht.get).toEqual('function');
});

test('HashTable get method retrives a value based on the given key', () => {
  const ht = new HashTable(11);
  ht.add('album', 'good kid maad city');
  ht.add('artist', 'Kendrick Lamar');
  expect(ht.get('album')).toEqual('good kid maad city');
  expect(ht.get('artist')).toEqual('Kendrick Lamar');
});
