/* https://edabit.com/challenge/hxHBsYebaBM3ff5s6
 * 
 * Create a function that takes an array and return the most frequently occuring element contained within it.
 */

// INPUT(S)
// - Array
//
// OUTPUT(S)
// - ${dataType}?, which depends on the elements within the input
//
// REQUIREMENTS
// - Implicit Vocabulary:
//   - 
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
// - Does "element" include array object properties? (No, only indexed elements.)
// - [1, 1, 'a', 'a'] => 1 (Take the first element to appear in a tie-break.)
// - Which data types will elements be? (Only primitives: strings, numbers, booleans, etc.)
// - Will the array contain falsy values like undefined or null? (Yes.)
// - How should the function handle non-array arguments? (Return 'Invalid input.')
// - What data type should the argument return as? (Same type as in input array.)
// - How should letters with different cases be treated? 'A' === 'a'? (Treat them differently.)
// - How should numbers represented as both floats and integers be treated? (Treat them differently.)
// - How should NaN's be treated? (As the same element. TODO: Write specific guard for this.)
// - How should the function handle empty array arguments? (Return 'Invalid input.')
//
// EXAMPLES
// Happy Paths
// console.log(findMostFrequent([1, 1, 2, 2])); // 1
// console.log(findMostFrequent([1, 1, 1, 2])); // 1
// console.log(findMostFrequent(['1', '1', 2, 2])); // '1'
// console.log(findMostFrequent([1.2, 1, 1.2, null])); // 1.2
// console.log(findMostFrequent(['a'])); // 'a'
// console.log(findMostFrequent(['A', 'a', 'A'])); // 'A'
// console.log(findMostFrequent([true, true, false, 2])); // true
// console.log(findMostFrequent(['1', false, false, false])); // false
// console.log(findMostFrequent([null, 1, 1, null])); // null
// console.log(findMostFrequent([NaN, 1, 1, NaN])); // NaN
// console.log(findMostFrequent([Infinity, 1, Infinity, null])); // Infinity
// console.log(findMostFrequent([undefined, 1, Infinity, undefined])); // undefined
//
// Edge Cases
// console.log(findMostFrequent([])); // 'Invalid input.'
// console.log(findMostFrequent('')); // 'Invalid input.'
// console.log(findMostFrequent(42)); // 'Invalid input.'
// console.log(findMostFrequent(false)); // 'Invalid input.'
// console.log(findMostFrequent({})); // 'Invalid input.'
//
// DATA STRUCTURE(S)
// - Arrays, which enable iteration and filtering
// - (Objects, to map elements to counts)
//
// ALGORITHM
// - Guard cases
//   - Return 'Invalid input.' if:
//     - Input array is empty
//     - Input is not an array
// - Problem #1: Get counts of each element within the array
//   - Filter for an element and get length of resulting array
//     - Loop through the input array
//       - Filter the input array for the current element and get length of count
// - Problem #2: Find the most frequent element within array
//   - Initialize variable to track highest frequency, `highestFrequency`, and set to 0
//   - Initialize another variable to track corresponding element, `highestFrequencyElement`
//   - Loop through all elements and update `highestFrequency` and `highesFrequencyElement` each time
//     a frequency is higher than the previous one
// - Return `highestFrequencyElement`

function findMostFrequent(array) {
  if (Array.isArray(array) && array.length === 0) {
    return 'Invalid input.'; 
  } else if (!Array.isArray(array)) {
    return 'Invalid input.'; 
  }
  
  let highestFrequency = 0;
  let highestFrequencyElement;
  array.forEach(currentElement => {
    let count = array.filter(compareElement => {
      if (Number.isNaN(currentElement) && Number.isNaN(compareElement)) {
        return true; 
      } else {
        return compareElement === currentElement;
      }
    }).length;
    if (count > highestFrequency) {
      highestFrequency = count;
      highestFrequencyElement = currentElement;
    }
  });
  
  return highestFrequencyElement;
}

// Generic Cases
console.log(findMostFrequent([1, 1, 2, 2])); // 1
console.log(findMostFrequent([1, 1, 1, 2])); // 1
console.log(findMostFrequent(['1', '1', 2, 2])); // '1'
console.log(findMostFrequent([1.2, 1, 1.2, null])); // 1.2
console.log(findMostFrequent(['a'])); // 'a'
console.log(findMostFrequent(['A', 'a', 'A'])); // 'A'
console.log(findMostFrequent([true, true, false, 2])); // true
console.log(findMostFrequent(['1', false, false, false])); // false
console.log(findMostFrequent([null, 1, 1, null])); // null
console.log(findMostFrequent([NaN, 1, 1, NaN])); // NaN
console.log(findMostFrequent([Infinity, 1, Infinity, null])); // Infinity
console.log(findMostFrequent([undefined, 1, Infinity, undefined])); // undefined

// Edge Cases
console.log(findMostFrequent([])); // 'Invalid input.'
console.log(findMostFrequent('')); // 'Invalid input.'
console.log(findMostFrequent(42)); // 'Invalid input.'
console.log(findMostFrequent(false)); // 'Invalid input.'
console.log(findMostFrequent({})); // 'Invalid input.'
