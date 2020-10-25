/* https://edabit.com/challenge/8n9RyHThC3dNEPCng
 *
 * Create a function that moves all capital letters to the front of a word.
 */

// INPUT(S)
// - String, containing Unicode characters
//
// OUTPUT(S)
// - String, containing the same characters as the argument, but with capital, alphabetic letters in the
//   front
//
// REQUIREMENTS
// - Implicit Vocabulary:
//   - "Front": The first X characters in a word are its capital letters, where X is the number
//     of capital letters in the word originally.
// - Mental Model:
//   - Write a function that takes a string and returns a string with the same characters, except with
//     the capital letters in the beginning of said string.
//
// NOTES
// - What order should the capital letters return in? (Order in which they're found left-to-right.)
// - What order should the remaining characters return in? (Left-to-right.)
// - Will the argument contain non-alphabetic characters? (It may.)
// - How should the function handle empty strings? (Return ''.)
// - How should the function handle non-string arguments? (Return 'Invalid input.')
//
// EXAMPLES
// Happy Paths
// console.log(moveCapitalLetters('abcDEF')); // 'DEFabc'
// console.log(moveCapitalLetters('aBcDeF')); // 'BDFace'
// console.log(moveCapitalLetters('ABCdef')); // 'ABCdef'
//
// Boundary Cases
// console.log(moveCapitalLetters('abc DEF')); // 'DEFabc '
// console.log(moveCapitalLetters('abcDEF#')); // 'DEFabc#'
// console.log(moveCapitalLetters(' abcDEF')); // 'DEF abc'
// console.log(moveCapitalLetters('abcDEF123')); // 'DEFabc123'
// console.log(moveCapitalLetters('123abcDEF')); // 'DEF123abc'
// console.log(moveCapitalLetters('')); // ''
// console.log(moveCapitalLetters('abcDEF\n')); // 'DEFabc\n'
// console.log(moveCapitalLetters('\rabcDEF')); // 'DEF\rabc'
//
// Edge Cases
// console.log(moveCapitalLetters(true)); // 'Invalid input.'
// console.log(moveCapitalLetters(42)); // 'Invalid input.'
// console.log(moveCapitalLetters([])); // 'Invalid input.'
// console.log(moveCapitalLetters({})); // 'Invalid input.'
//
// DATA STRUCTURE(S)
// - String, which enables regex and iteration
// - Arrays, which enable joining string elements and iteration
//
// ALGORITHM
// - Guard cases:
//   - If argument is not a string, return 'Invalid input.'
// - Get all capital letter characters in argument, in order: `capitals`
//   - Use regex to get all capitals and store in array
// - Get all non-capital letter characters in argument, in order: `nonCapitals`
//   - Use regex to get all non-capitals and store in array
// - Concat `capitals` to `nonCapitals`
//   - Concat arrays, then join and return

function moveCapitalLetters(string) {
  if (typeof string !== 'string') {
    return 'Invalid input.'; 
  } else if (string.length < 1) {
    return ''; 
  }
  
  let capitals = string.match(/[A-Z]/g);
  let nonCapitals = string.match(/[^A-Z]/g);
  return capitals.concat(nonCapitals).join('');
}

// Happy Paths
console.log(moveCapitalLetters('abcDEF')); // 'DEFabc'
console.log(moveCapitalLetters('aBcDeF')); // 'BDFace'
console.log(moveCapitalLetters('ABCdef')); // 'ABCdef'

// Boundary Cases
console.log(moveCapitalLetters('abc%DEF')); // 'DEFabc%'
console.log(moveCapitalLetters('abcDEF#')); // 'DEFabc#'
console.log(moveCapitalLetters(' abcDEF')); // 'DEF abc'
console.log(moveCapitalLetters('abcDEF123')); // 'DEFabc123'
console.log(moveCapitalLetters('123abcDEF')); // 'DEF123abc'
console.log(moveCapitalLetters('')); // ''
console.log(moveCapitalLetters('abcDEF\n')); // 'DEFabc\n'
console.log(moveCapitalLetters('\tabcDEF')); // 'DEF\tabc'

// Edge Cases
console.log(moveCapitalLetters(true)); // 'Invalid input.'
console.log(moveCapitalLetters(42)); // 'Invalid input.'
console.log(moveCapitalLetters([])); // 'Invalid input.'
console.log(moveCapitalLetters({})); // 'Invalid input.'
console.log(moveCapitalLetters()); // 'Invalid input.'
