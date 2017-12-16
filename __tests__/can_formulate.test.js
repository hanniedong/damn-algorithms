import can_formulate from '../exercises/can_formulate';

test('can_formulate is a function', () => {
  const result = typeof can_formulate;
  expect(result).toEqual('function');
});

test('can_formulate returns a boolean', () => {
  const result = can_formulate('a', 'ab');
  expect(typeof result).toEqual('boolean');
});

test('"aloha" can be formulated for "MAHALO"', () => {
  const result = can_formulate('aloha', 'mahalo');
  expect(result).toBeTruthy();
});

test('"OaKlAnD" can be formulated from "oAkLaNd"', () => {
  const result = can_formulate('OaKlAnD', 'oAkLaNd');
  expect(result).toBeTruthy();
});

test('"telegraph" can be formulated from "T E L E G R A P H"', () => {
  const result = can_formulate('telegraph', 'T E L E G R A P H');
  expect(result).toBeTruthy();
});

test('"OCCUPIES" can be formulated from "Poetic Justice"', () => {
  const result = can_formulate('OCCUPIES', 'Poetic Justice');
  expect(result).toBeTruthy();
});

test('"Kendrick Lamar" cannot be formulated from "KendrickLamar"', () => {
  const result = can_formulate('Kendrick Lamar', 'KendrickLamar');
  expect(result).toBeFalsy();
});

test('"ALGORITHMS" cannot be formulated from "algorithm"', () => {
  const result = can_formulate('ALGORITHMS', 'algorithm');
  expect(result).toBeFalsy();
});
