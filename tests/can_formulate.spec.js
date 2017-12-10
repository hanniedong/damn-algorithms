import can_formulate from '../exercises/can_formulate';

test('can_formulate is a function', () => {
  expect(typeof can_formulate).toEqual('function');
});

test('"aloha" can be formulated for "MAHALO"', () => {
  expect(can_formulate('aloha', 'mahalo')).toBeTruthy();
});

test('"OaKlAnD" can be formulated from "oAkLaNd"', () => {
  expect(can_formulate('OaKlAnD', 'oAkLaNd')).toBeTruthy();
});

test('"telegraph" can be formulated from "T E L E G R A P H"', () => {
  expect(can_formulate('telegraph', 'T E L E G R A P H')).toBeTruthy();
});

test('"Kendrick Lamar" cannot be formulated from "KendrickLamar"', () => {
  expect(can_formulate('Kendrick Lamar', 'KendrickLamar')).toBeFalsy();
});

test('"ALGORITHMS" cannot be formulated from "algorithm"', () => {
  expect(can_formulate('ALGORITHMS', 'algorithm')).toBeFalsy();
});
