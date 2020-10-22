/* https://edabit.com/challenge/jtAvQyyDpFA2EaCcj
 * 
 * Create a function that takes two "sorted" arrays of numbers and returns an array of numbers which are 
 * common to both the input arrays.
 */

// INPUT(S)
// - Two Arrays, containing numbers sorted
//
// OUTPUT(S)
// - Array, containing numbers present in both given arrays
//
// REQUIREMENTS
// - Implicit Vocabulary:
//   - "Sorted": The numbers in either given array are in ascending order
// - Mental Model:
//   - Write a function that takes two arrays containing numbers and returns an array containing
//     the common number elements between them.
// - Data Types:
//   - Numbers: negatives, 0, fractions, NaN, Infinity
//   - Arrays: emptiness, sparseness, non-element properties, mutation, uniqueness of elements
// - Invalid Data Types / Values + Return Value:
//   -
// - (If applicable) Argument Combination Scenarios
// 
// NOTES
// - Should the function output a new Array? (Doesn't matter.)
// - How should the function handle non-integer numbers? (Treat them as common "numbers".)
//   => [NaN, 1, 2] / [NaN, 3, 4] --> [NaN]
// - How should the function handle non-Array arguments? (Return 'Invalid input.')
// - How should the function handle non-numbers in the argument Arrays? (Don't worry about it.)
// - Will the argument array be sparse, i.e., contain empty items? (No.)
// * Will the argument array contain object properties? (Maybe.)
// - How should the function handle empty arrays? (Return an empty array because no elements are common.)
//
// EXAMPLES
// Happy Paths
// console.log(findCommonNumbers([1], [1, 2])); // [1]
// console.log(findCommonNumbers([1, 2], [1])); // [1]
// console.log(findCommonNumbers([-1, 0, 1], [-1, 1])); // [-1, 1]
// console.log(findCommonNumbers([NaN, 1], [NaN, 2])); // [1]
// 
// Boundary Cases
// console.log(findCommonNumbers([], [1, 2])); // []
// console.log(findCommonNumbers([1], [])); // []
// console.log(findCommonNumbers([1.5], [1.5, 2])); // [1.5]
// console.log(findCommonNumbers([NaN, 1], [NaN, 2])); // [1]
// console.log(findCommonNumbers([NaN], [NaN, 2])); // [NaN]
// console.log(findCommonNumbers([NaN, 1], [NaN, 2])); // [NaN]
// console.log(findCommonNumbers([Infinity], [Infinity, 2])); // [Infinity]
// console.log(findCommonNumbers([Infinity, 1], [Infinity, 2])); // [Infinity]
//
// Edge Cases
// console.log(findCommonNumbers(true, [1])); // 'Invalid input.'
// console.log(findCommonNumbers([1], true)); // 'Invalid input.'
// console.log(findCommonNumbers()); // 'Invalid input.'
// console.log(findCommonNumbers([1, 2])); // 'Invalid input.'
//
// DATA STRUCTURE(S)
// - Array, which enables filtering
//
// ALGORITHM
// - Guard cases:
//   - Return 'Invalid input.' if either argument is missing or not an array
// - Initialize array to hold common elements between arrays
//   - Loop through the first array
//     - If current element is found in second, push to collector array
//   - Return collector array

function findCommonNumbers(array1, array2) {
  if (!Array.isArray(array1) || !Array.isArray(array2)) {
    return 'Invalid input.'; 
  }
  
  return array1.filter(element => array2.includes(element));
}

// Happy Paths
console.log(findCommonNumbers([1], [1, 2])); // [1]
console.log(findCommonNumbers([1, 2], [1])); // [1]
console.log(findCommonNumbers([-1, 0, 1], [-1, 1])); // [-1, 1]

// Boundary Cases
console.log(findCommonNumbers([], [1, 2])); // []
console.log(findCommonNumbers([1], [])); // []
console.log(findCommonNumbers([1.5], [1.5, 2])); // [1.5]
console.log(findCommonNumbers([NaN, 1], [NaN, 2])); // [NaN]
console.log(findCommonNumbers([NaN], [NaN, 2])); // [NaN]
console.log(findCommonNumbers([NaN, 1], [NaN, 2])); // [NaN]
console.log(findCommonNumbers([Infinity], [Infinity, 2])); // [Infinity]
console.log(findCommonNumbers([Infinity, 1], [Infinity, 2])); // [Infinity]

// Edge Cases
console.log(findCommonNumbers(true, [1])); // 'Invalid input.'
console.log(findCommonNumbers([1], true)); // 'Invalid input.'
console.log(findCommonNumbers()); // 'Invalid input.'
console.log(findCommonNumbers([1, 2])); // 'Invalid input.'
