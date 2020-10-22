/* https://edabit.com/challenge/SAeaT8pzJDkSoACsi
 *
 * Create a function that takes in an array of numbers or strings and returns an array with the items from 
 * the original array stored in subarrays. Items of the same value should be in the same subarray. The 
 * subarrays should be returned in the order of each element's first appearance in the given array.
 */

// INPUT(S)
// - Array, containing numbers or strings
//
// OUTPUT(S)
// - Array, containing subarrays consisting of the elements in the input array grouped together
//   - Element subarrays should be ordered by first appearance of element in input array
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
// - How should the function handle non-array arguments? (Return 'Invalid input.')
// - Will the input array ever contain any non-string / non-number elements? (No.)
// - How should the function treat special values for elements? (Treat them as regular elements.)
//   - Numbers: NaN, Infinity, float, etc.?
//   - Strings: empty strings, non-digit or non-alphabetic characters?
//   -> [NaN, NaN, Infinity, ''] => [[NaN, NaN], [Infinity], ['']]
// - How should the function handle empty arrays? (Return [].)
// - Will the input array ever have object properties? If so, how to handle? (Maybe; treat as other 
//   elements.)
//
// EXAMPLES
// Happy Paths
// console.log(sortArray([1, 'a', 2, 'b'])); // [[1], ['a'], [2], ['b']]
// console.log(sortArray([1, 'a', 2, 'a'])); // [[1], ['a', 'a'], [2]]
// console.log(sortArray([1, 1, 2, 'b'])); // [[1, 1], [2], ['b']]
// console.log(sortArray([1, 'a', 'b', 'b'])); // [[1], ['a'], ['b', 'b']]
//
// Boundary Cases
// let arrayWithProperties = [1];
// arrayWithProperties.foo = 'bar';
// console.log(sortArray(arrayWithProperties)); // [[1], ['bar']]
//
// console.log(sortArray([NaN, NaN, Infinity, ''])); // [[NaN, NaN], [Infinity], ['']]
// console.log(sortArray([])); // []
//
// Edge Cases
// console.log(sortArray(42)); // 'Invalid input.'
// console.log(sortArray('foo')); // 'Invalid input.'
// console.log(sortArray(false)); // 'Invalid input.'
// console.log(sortArray({})); // 'Invalid input.'
// console.log(sortArray(undefined)); // 'Invalid input.'
// console.log(sortArray(null)); // 'Invalid input.'
// console.log(sortArray()); // 'Invalid input.'
//
// DATA STRUCTURE(S)
// - Array, which enables filtering and iteration
//
// ALGORITHM
// - Guard cases:
//   - Return 'Invalid input.' if argument is not an array
// - Sub-problem: Create subarray groupings
//   - For each property value, filter input array for element value
// - Sub-problem: Create output array (considering order)
//   - Add grouped subarrays into a target array if the first value is not yet present in subarray
//     - Initialize an empty array to track "used" elements
//     - Initialize an empty array to hold result
//     - Loop through subarrays
//       - If first element in subarray is not in used:
//         - Add first element to used
//         - Add subarray to result
// - Return result

function createGroups(array) {
  let groups = [];
  let values = Object.values(array);
  values.forEach(value => {
    let group = values.filter(element => {
      if (Number.isNaN(element) && Number.isNaN(value)) {
        return true; 
      } else {
        return element === value;
      }
    });
    groups.push(group);
  });
  
  return groups;
}

function sortArray(inputArray) {
  if (!Array.isArray(inputArray)) {
    return 'Invalid input.'; 
  }
  
  let groups = createGroups(inputArray);
  let used = [];
  let result = [];
  
  groups.forEach(group => {
    if (!used.includes(group[0])) {
      used.push(group[0]);
      result.push(group);
    }
  });
  
  return result;
}

// Happy Paths
console.log(sortArray([1, 'a', 2, 'b'])); // [[1], ['a'], [2], ['b']]
console.log(sortArray([1, 'a', 2, 'a'])); // [[1], ['a', 'a'], [2]]
console.log(sortArray([1, 1, 2, 'b'])); // [[1, 1], [2], ['b']]
console.log(sortArray([1, 'a', 'b', 'b'])); // [[1], ['a'], ['b', 'b']]

// Boundary Cases
let arrayWithProperties = [1];
arrayWithProperties.foo = 'bar';
console.log(sortArray(arrayWithProperties)); // [[1], ['bar']]

console.log(sortArray([NaN, NaN, Infinity, ''])); // [[NaN, NaN], [Infinity], ['']]
console.log(sortArray([])); // []

// Edge Cases
console.log(sortArray(42)); // 'Invalid input.'
console.log(sortArray('foo')); // 'Invalid input.'
console.log(sortArray(false)); // 'Invalid input.'
console.log(sortArray({})); // 'Invalid input.'
console.log(sortArray(undefined)); // 'Invalid input.'
console.log(sortArray(null)); // 'Invalid input.'
console.log(sortArray()); // 'Invalid input.'

