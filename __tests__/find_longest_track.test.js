import find_longest_track from '../exercises/find_longest_track';

test('find_longest_track is a function', () => {
  expect(typeof find_longest_track).toEqual('function');
});

test('find_longest_track returns a string', () => {
  const album = {
    "track 1": "1:23",
    "track 2": "2:34"
  }
  let result = find_longest_track(album);
  expect(typeof result).toEqual('string');
})

test('good_kid_maad_city returns "Sing About Me, I\'m Dying of Thirst"', () => {
  const good_kid_maad_city = {
    "Sherane a.k.a. Master Splinter's Daughter": "4:34",
    "*****, Don't Kill My Vibe": "5:11",
    "Backseat Freestyle": "3:33",
    "The Art of Peer Pressure": "5:25",
    "Money Trees": "6:27",
    "Poetic Justice": "5:00",
    "good kid": "3:34",
    "m.A.A.d city": "5:50",
    "Swimming Pools (Drank) - Extended Version": "5:14",
    "Sing About Me, I'm Dying of Thirst": "12:04",
    "Real": "7:23",
    "Compton": "4:08"
  };
  const result = find_longest_track(good_kid_maad_city);
  expect(result).toEqual('Sing About Me, I\'m Dying of Thirst');
});

test('untitled_unmastered returns "untitled 07"', () => {
  const untitled_unmastered = {
    "untitled 01": "4:08",
    "untitled 02": "4:19",
    "untitled 03": "2:34",
    "untitled 04": "1:50",
    "untitled 05": "5:38",
    "untitled 06": "3:28",
    "untitled 07": "8:16",
    "untitled 08": "3:56"
  };
  const result = find_longest_track(untitled_unmastered);
  expect(result).toEqual('untitled 07');
});

test('damn returns "FEAR"', () => {
  const damn = {
    "BLOOD": "1:58",
    "DNA": "3:06",
    "YAH": "2:40",
    "ELEMENT": "3:29",
    "FEEL": "3:35",
    "LOYALTY": "3:47",
    "PRIDE": "4:35",
    "HUMBLE": "2:57",
    "LUST": "5:08",
    "LOVE": "3:33",
    "XXX": "4:14",
    "FEAR": "7:41",
    "GOD": "4:09",
    "DUCKWORTH": "4:09"
  };
  const result = find_longest_track(damn);
  expect(result).toEqual('FEAR');
});
