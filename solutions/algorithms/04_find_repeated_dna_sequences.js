/*
Standard DNA is made up of four types of nucleotides: Adenine (A), Thymine (T), Cytosine (C), and Guanine (G). A strand of DNA is a sequence of characters that consist of these four letters such as 'ATTCGAC'.

But according to Kendrick Lamar, his DNA is made of elements like LOYALTY, ROYALTY, WAR, PEACE, POWER, POISON, PAIN, and JOY.

Given a positive integer of n and a DNA sequence string, write a function that returns an array of all the n-letter-long sequences that occur more than once in a given sequence.

Example:
let sequence = 'WARPEACE';
find_repeated_dna_sequences(sequence, 3) => return []

let sequence = 'WARPEACEWAR';
find_repeated_dna_sequences(sequence, 2) => return ['WA', 'AR']
find_repeated_dna_sequences(sequence, 3) => return ['WAR']
find_repeated_dna_sequences(sequence, 4) => return []

let sequence = 'PAINJOYPAIN';
find_repeated_dna_sequences(sequence, 4) => return ['PAIN']

let sequence = 'WARPEACEPEACE';
find_repeated_dna_sequences(sequence, 5) => return ['PEACE']

let sequence = 'POISONPAINPOISONJOY';
find_repeated_dna_sequences(sequence, 6) => return ['POISON']

let sequence = 'LOYALTYWARROYALTYPEACELOYALTYJOYROYALTY';
find_repeated_dna_sequences(sequence, 7) => return ["LOYALTY", "ROYALTY"]
*/

/**
 * @param  {string} sequence
 * @param  {number} n
 * @return {array}
 */

const find_repeated_dna_sequences = (sequence, n) => {
  let dna = new Set();
  let result = new Set();

  for (let i = 0; i < sequence.length - (n - 1); i++) {
    let curr_seq = sequence.substr(i, n);
    dna.has(curr_seq) ? result.add(curr_seq) : dna.add(curr_seq);
  }

  return Array.from(result);
};

export default find_repeated_dna_sequences;
