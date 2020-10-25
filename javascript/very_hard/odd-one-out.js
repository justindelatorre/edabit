/* https://edabit.com/challenge/PEecJK7uPz5m2oD9i
 *
 * Write a function that returns true if exactly one word in the array differs in length from the rest. Return false 
 * in all other cases. The length of the array will always have at least three or more words.
 */

// INPUT(S)
// - Array, containing words (strings) of varying lengths
//   - Array will always be of length 3 or greater
//
// OUTPUT(S)
// - Boolean, indicating whether EXACTLY ONE word in the input array differs in length from the rest
//
// REQUIREMENTS
// - Implicit Vocabulary:
//   - "Word": Will the strings in the argument array contain non-alphabetic characters?
//     - No, they'll be whole, single words.
// - Data Types:
//   - Strings: emptiness, characters to expect, letter case
//   - Numbers: negatives, 0, fractions, NaN, Infinity
//   - Arrays: emptiness, sparseness, non-element properties, mutation, uniqueness
//   - Objects: no properties/emptiness, mutation
//   - Booleans
//   - Special Objects / Values: undefined, null
// - Invalid Data Types / Values + Return Value:
//   -
// - (If applicable) Argument Combination Scenarios
//
// NOTES
// - 
//
// EXAMPLES
// Happy Paths
// console.log(findOddOneOut(['a', 'to', 'be'])); // true, because 'a' is different
// console.log(findOddOneOut(['add', 'to', 'be', 'bit'])); // false, because more than one word is different
// console.log(findOddOneOut(['a', 'to', 'bee'])); // false, because no words are the same
// console.log(findOddOneOut(['a', 'to', 'to'])); // true, because 'a' is different 
//
// DATA STRUCTURE(S)
// - Array, which enables filtering and length counting
// - Object, which allows key-value mapping
//
// ALGORITHM
// - Step 1: Find the lengths of each array element
//   - Initialize an empty array `lengths`
//   - Loop through words in argument array and push the
// - Step 2: Find if EXACTLY ONE length is different than the rest
//   - Take the values from `lengths` and loop through them
//     - For each length value, filter to see how many in the values are equal to that length
//       - If exactly one, set a variable `hasOneDistinct` to true
//       - If exactly one minus length of original array, set a variable `hasRestSame` to true
// - Return `hasOneDistinct` && `hasRestSame`

function findOddOneOut(wordArray) {
  let lengths = [];
  wordArray.forEach(word => {
    lengths.push(word.length); 
  });
  
  let hasOneDistinct = false;
  let hasRestSame = false;
  lengths.forEach(length => {
    let numberOfInstances = lengths.filter(compareLength => compareLength === length).length;
    if (numberOfInstances === 1) {
      hasOneDistinct = true; 
    } else if (numberOfInstances === wordArray.length - 1) {
      hasRestSame = true; 
    }
  });
  
  return hasOneDistinct && hasRestSame;
}

// Generic Cases
console.log(findOddOneOut(['a', 'to', 'be'])); // true, because 'a' is different
console.log(findOddOneOut(['add', 'to', 'be', 'bit'])); // false, because more than one word is different
console.log(findOddOneOut(['a', 'to', 'bee'])); // false, because no words are the same
console.log(findOddOneOut(['a', 'to', 'to'])); // true, because 'a' is different 

