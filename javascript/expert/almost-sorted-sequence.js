/* https://edabit.com/challenge/z9JujCTeTM69ssLZa
 *
 * An almost-sorted sequence is a sequence that is strictly increasing or strictly decreasing if you remove a single 
 * element from the array (no more, no less). Write a function that returns true if an array is almost-sorted, and 
 * false otherwise.
 */

// INPUT(S)
// - Array, containing elements that may be ALMOST-SORTED
//
// OUTPUT(S)
// - Boolean, indicating whether or not removing ONE ELEMENT from the input array will result in the remaining
//   elements being ALMOST-SORTED, either increasingly or decreasingly
//
// REQUIREMENTS
// - Implicit Vocabulary:
//   - "almost-sorted": true if removing one element results in the given array having elements that are
//     strictly increasing or decreasing
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
// - What data types will be found in the input array? (Numbers and strings.) // TODO: Need to handle both.
//   - How should the function sort numbers? (By numerical value.)
//   - What does "sorted" mean for string elements? (Lexicographically.)
// - Will the elements be of consistent data types for each array given? (Yes).
// - How should the function handle empty arrays? (Return false.)
// - How should the function handle empty strings in an array? (Sort lexicographically.)
// - How should the function handle non-array arguments? (Return 'Invalid input.')
// - How should the function handle non-number and non-string elements? (Don't worry about it.)
// - How should the function handle NaN and Infinity? (Sort them as numbers.)
// - Will there be a minimum number of elements in each argument array? (At least 3.)
// - NOTE: .splice is destructive, so make a copy of the original array
//
// EXAMPLES
// Happy Paths
// console.log(almostSort([1, 2, 3, 6, 5])); // true, remove 6
// console.log(almostSort([5, 4, 3, 2, 6, 1])); // true, remove 6
// console.log(almostSort(['a', 'b', 6, 'c'])); // true, remove 6
// console.log(almostSort(['c', 'b', 6, 'a'])); // true, remove 6
// console.log(almostSort(['a', 'c', 'b', 6])); // false, can't created sorted array
// console.log(almostSort([2, 1, 4, 3])); // false, can't created sorted array
//
// Boundary Cases
// console.log(almostSort(['a', 'b', 'c', 6])); // true, remove 6
// console.log(almostSort([6, 'a', 'b', 'c'])); // true, remove 6
// console.log(almostSort([6, 'c', 'b', 'a'])); // true, remove 6
// console.log(almostSort(['c', 'b', 'a', 6])); // true, remove 6
// console.log(almostSort([6, 1, 2, 3])); // true, remove 6
// console.log(almostSort([1, 2, 3, 6])); // true, remove 6
// console.log(almostSort([6, 3, 2, 1])); // true, remove 6
// console.log(almostSort([3, 2, 1, 6])); // true, remove 6
// console.log(almostSort([6, Infinity, 2, 1])); // true, remove 6
// console.log(almostSort([1, 2, Infinity, 6])); // true, remove 6
// console.log(almostSort([6, 2, 1, NaN])); // true, remove 6
// console.log(almostSort([NaN, 1, 2, 6])); // true, remove 6
// console.log(almostSort([])); // false, empty argument array
//
// Edge Cases
// console.log(almostSort(42)); // 'Invalid input.'
// console.log(almostSort('foo')); // 'Invalid input.'
// console.log(almostSort(true)); // 'Invalid input.'
// console.log(almostSort({})); // 'Invalid input.'
//
// DATA STRUCTURE(S)
// - Array, which enables sorting and splicing
//
// ALGORITHM
// - Guard cases:
//   - Return false if the input is an empty array
//   - Return 'Invalid input.' if the input is not an array
// - Problem #1: Create versions of original array with a single element removed
//   - Loop through the index of the array
//     - For each loop, create a copy of the original array
//     - Splice the element at the current index and save the resulting array
// - Problem #2: Check to see if an array is sorted ascending or descending
//   - Check if the first element is a string or number
//     - Compared the array to the sorted version or to the reverse sorted version, using the appropriate
//       sort methodology depending on element data type. If true, return true.
// - Return false

function isEquivalentArray(original, toCompare) {
  if (!Array.isArray(original) || !Array.isArray(toCompare)) {
    return false; 
  }
  
  const hasSameValues = original.every((value, idx) => value === toCompare[idx]);
  const hasSameLength = original.length === toCompare.length;
  
  return hasSameValues && hasSameLength;
}

function almostSort(array) {
  if (Array.isArray(array) && array.length === 0) {
    return false; 
  } else if (!Array.isArray(array)) {
    return 'Invalid input.'; 
  }
  
  for (let idx = 0; idx < array.length; idx += 1) {
    let arrayCopy = [...array];
    let toSortCopy = [...array];
    arrayCopy.splice(idx, 1);
    toSortCopy.splice(idx, 1);
    if (typeof toSortCopy[0] === 'string') {
      if (isEquivalentArray(toSortCopy.sort(), arrayCopy) || isEquivalentArray(toSortCopy.reverse(), arrayCopy)) {
        return true; 
      }
    } else if (typeof arrayCopy[0] === 'number') {
      if (isEquivalentArray(toSortCopy.sort((a, b) => a - b), arrayCopy) || isEquivalentArray(toSortCopy.sort((a, b) => b - a), arrayCopy)) {
        return true; 
      }
    }
  }
  
  return false;
}

// NOTES:
// - .sort() and .reverse() sort IN-PLACE, so conditionals will always be true
// - Need to create separate array comparison function

// Happy Paths
console.log(almostSort([1, 2, 3, 6, 5])); // true, remove 6
console.log(almostSort([5, 4, 3, 2, 6, 1])); // true, remove 6
console.log(almostSort(['a', 'b', 'e', 'c'])); // true, remove 'e'
console.log(almostSort(['c', 'b', 'e', 'a'])); // true, remove 'e'
console.log(almostSort([7, 8, 9, 3, 10, 11, 12, 2])); // false, can't created sorted array
console.log(almostSort([2, 1, 4, 3])); // false, can't created sorted array

// Boundary Cases
console.log(almostSort(['a', 'b', 'c', 'e'])); // true, remove 6
console.log(almostSort(['e', 'a', 'b', 'c'])); // true, remove 6
console.log(almostSort(['e', 'c', 'b', 'a'])); // true, remove 6
console.log(almostSort(['c', 'b', 'a', 'e'])); // true, remove 6
console.log(almostSort([6, 1, 2, 3])); // true, remove 6
console.log(almostSort([1, 2, 3, 6])); // true, remove 6
console.log(almostSort([6, 3, 2, 1])); // true, remove 6
console.log(almostSort([3, 2, 1, 6])); // true, remove 6
console.log(almostSort([6, Infinity, 2, 1])); // true, remove 6
console.log(almostSort([1, 2, Infinity, 6])); // true, remove 6
console.log(almostSort([6, 2, 1, NaN])); // true, remove 6
console.log(almostSort([NaN, 1, 2, 6])); // true, remove 6

// Edge Cases
console.log(almostSort([])); // false, empty argument array
console.log(almostSort(42)); // 'Invalid input.'
console.log(almostSort('foo')); // 'Invalid input.'
console.log(almostSort(true)); // 'Invalid input.'
console.log(almostSort({})); // 'Invalid input.'

