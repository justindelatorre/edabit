 function that returns the length of the shortest subarray whose sum of all elements strictly exceeds n.
 */

// INPUT(S)
// - Array, containing number elements
// - Number, representing a number value a subarray needs to exceed
//
// OUTPUT(S)
// - Number, represents the length of the SHORTEST subarray of the given array that STRICTLY exceeds n.
//
// REQUIREMENTS
// - Implicit Vocabulary:
//   - "Strictly": Must be greater than, not greater or equal to
//   - "Subarray": Should the elements be contiguous? (Yes.)
//   - "Elements": Should the function take into account object properties? (No.)
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
// - Mental Model: Write a function that takes an array and a number and returns the LENGTH of the shortest 
//   subarray, composed of contiguous elements from the given array, whose elements sum to exceed the given number.
// - How should the function handle empty array arguments? (Return 'Invalid input.')
// - Will the array ever contain non-number elements? (No.)
// - Will the array ever contain "special" number values like NaN, Infinity, etc.? (Yes.)
// - Will the array contain zero or negative numbers? (Yes.)
// - Will the number argument ever be zero or negative? (Maybe.)
// - How should the function handle special number values for the second argument? (Return 'Invalid input.')
// - How should the function handle a non-array for the first or a non-number for the second? (Return 'Invalid 
//   input.')
// - Return value if can't exceed? (-1)
// - TODO: Need to account for infinite values in subarrays
//
// EXAMPLES
// Happy Paths
// console.log(shortestSubArray([2, 0, 0, 1], 1)); // 1, because [2]
// console.log(shortestSubArray([1, 1, 0, 1], 1)); // 2, because [1, 1]
// console.log(shortestSubArray([1, 1, 1, 1], 3)); // 4, because [1, 1, 1, 1]
// console.log(shortestSubArray([1, 1, 1, 1], 4)); // -1, because can't exceed
// console.log(shortestSubArray([1, 0], 0)); // 1, because [1]
// console.log(shortestSubArray([0, -1, 1], -1)); // 1, because [0]
//
// Boundary Cases
// console.log(shortestSubArray([NaN, 1, Infinity, 1, 1], 2)); // -1, because can't exceed
// console.log(shortestSubArray([NaN, 1, Infinity, 1, 1], 1)); // 2, because [1, 1], note Infinity > 1!
//
// Edge Cases
// console.log(shortestSubArray([], 2)); // 'Invalid input.'
// console.log(shortestSubArray([1, 1], NaN)); // 'Invalid input.'
// console.log(shortestSubArray([1, 1], Infinity)); // 'Invalid input.'
// console.log(shortestSubArray([1, 1], -Infinity)); // 'Invalid input.'
// console.log(shortestSubArray([1, 1], '')); // 'Invalid input.'
// console.log(shortestSubArray([1], true)); // 'Invalid input.'
// console.log(shortestSubArray([1], [1])); // 'Invalid input.'
// console.log(shortestSubArray([1], {})); // 'Invalid input.'
// console.log(shortestSubArray(42, 2)); // 'Invalid input.'
// console.log(shortestSubArray('foo', 2)); // 'Invalid input.'
// console.log(shortestSubArray(true, 2)); // 'Invalid input.'
// console.log(shortestSubArray({}, 2)); // 'Invalid input.'
//
// DATA STRUCTURE(S)
// - Array, which enables slicing and reducing (adding)
//
// ALGORITHM
// - Guard cases:
//   - Return 'Invalid input.' if:
//     - Input array is empty
//     - Input number is NaN or infinite
//     - Input array is not an array
//     - Input number is not a number
// - Step 1: Get all subarrays of length > 1
//   - Initialize an empty array `subarrays` to hold subarrays
//   - Initialize an outer loop for the start index of a subarray
//     - Initialize an inner loop for the end index of a subarray
//       - If the resulting subarray from start to end has length > 1, push to `subarrays`
//   - Return `subarrays`
// - Step 2: Sum values in a subarray
//   - Loop through all the values in a given subarray and add them together
//     - Tracker variable and a for loop, OR
//     - Reduce
// - Step 3: Get shortest subarray whose sum > `targetNumber`
//   - Set a variable `shortestLength` to Infinity
//   - Loop through all subarrays
//     - If sum of elements in subarray are greater than `targetNumber` and length is < currentLength:
//       - Set `shortestLength` to length of subarray
// - Return `shortestLength`
//

function getSubArrays(array) {
  let subarrays = [];
  for (let outer = 0; outer < array.length; outer += 1) {
    for (let inner = 1; inner < array.length + 1; inner += 1) {
      let currentSubArray = array.slice(outer, inner);
      let containsInfinity = currentSubArray.some(element => !isFinite(element));
      if (currentSubArray.length > 0 && !containsInfinity) {
        subarrays.push(currentSubArray); 
      }
    }
  }
  
  return subarrays;
}

function sumArray(array) {
  return array.reduce((total, current) => total + current, 0); 
}

function shortestSubArray(array, targetNumber) {
  if (Array.isArray(array) && array.length === 0) {
    return 'Invalid input.'; 
  } else if (typeof targetNumber === 'number' && (Number.isNaN(targetNumber) || !isFinite(targetNumber))) {
    return 'Invalid input.';          
  } else if (!Array.isArray(array)) {
    return 'Invalid input.';
  } else if (typeof targetNumber !== 'number') {
    return 'Invalid input.'; 
  }
  
  let subarrays = getSubArrays(array);
  let shortestLength = Infinity;
  subarrays.forEach(subarray => {
    if (sumArray(subarray) > targetNumber && subarray.length < shortestLength) {
      shortestLength = subarray.length; 
    }
  });
  
  return isFinite(shortestLength) ? shortestLength : -1;
}

// Happy Paths
console.log(shortestSubArray([2, 0, 0, 1], 1)); // 1, because [2]
console.log(shortestSubArray([1, 1, 0, 1], 1)); // 2, because [1, 1]
console.log(shortestSubArray([1, 1, 1, 1], 3)); // 4, because [1, 1, 1, 1]
console.log(shortestSubArray([1, 1, 1, 1], 4)); // -1, because can't exceed
console.log(shortestSubArray([1, 0], 0)); // 1, because [1]
console.log(shortestSubArray([0, -1, 1], -1)); // 1, because [0]
//
// Boundary Cases
console.log(shortestSubArray([NaN, 1, Infinity, 1, 1], 2)); // -1, because can't exceed
console.log(shortestSubArray([NaN, 1, Infinity, 1, 1], 1)); // 2, because [1, 1], note Infinity > 1!
//
// Edge Cases
console.log(shortestSubArray([], 2)); // 'Invalid input.'
console.log(shortestSubArray([1, 1], NaN)); // 'Invalid input.'
console.log(shortestSubArray([1, 1], Infinity)); // 'Invalid input.'
console.log(shortestSubArray([1, 1], -Infinity)); // 'Invalid input.'
console.log(shortestSubArray([1, 1], '')); // 'Invalid input.'
console.log(shortestSubArray([1], true)); // 'Invalid input.'
console.log(shortestSubArray([1], [1])); // 'Invalid input.'
console.log(shortestSubArray([1], {})); // 'Invalid input.'
console.log(shortestSubArray(42, 2)); // 'Invalid input.'
console.log(shortestSubArray('foo', 2)); // 'Invalid input.'
console.log(shortestSubArray(true, 2)); // 'Invalid input.'
console.log(shortestSubArray({}, 2)); // 'Invalid input.'
