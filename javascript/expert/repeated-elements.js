/* https://edabit.com/challenge/XWXprtaTWYCWBGAax
 *
 * Given an array, create a function that returns an object detailing how many times each element was repeated. Sort 
 * the object by value in descending order. The array elements can be anything.
 */

// INPUT(S)
// - Array, containing elements of any type or value
//
// OUTPUT(S)
// - Object, containing key-value pairs referencing elements in the input array and the number of times
//   they repeat in the array
//
// REQUIREMENTS
// - Implicit Vocabulary:
//   - "Can be anything"
//     - Can the elements be non-primitives like [], {}? (No arrays or objects.)
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
// - How should the function handle empty array arguments? (Return {}.)
// - How should the function handle non-array arguments? (Return 'Invalid input.');
// - Can the elements be non-primitives like [], {}? (No arrays or objects.)
// - !!!: NaN, null act funny with equivalence
// - Should I expect special number valuwa like NaN or Infinity? (Yes.)
// - How should the function handle collisions between '1' and 1 as keys? (Assume there won't be collision.)
// - Should the function be able to process array object properties as well as indexed elements? (No, just elements.)
//
// EXAMPLES
// Happy Paths
// console.log(countElements([1, 2, 3, 4])); // { '1': 1, '2': 1, '3': 1, '4': 1 }
// console.log(countElements(['foo', 'foo', 'bar', 'baz'])); // { 'foo': 2, 'bar': 1, 'baz': 1 }
// console.log(countElements([NaN, NaN, Infinity, null, null])); // { NaN: 2, Infinity: 1, null: 2 }
//
// Boundary Cases
// console.log(countElements([1, 2, 3, '1', '2', '3'])); // { '1': 2, '2': 2, '3': 2 }
//
// Edge Cases
// console.log(countElements([])); // {}
// console.log(countElements(42)); // 'Invalid input.'
// console.log(countElements('foo')); // 'Invalid input.'
// console.log(countElements(true)); // 'Invalid input.'
// console.log(countElements({})); // 'Invalid input.'
// console.log(countElements(undefined)); // 'Invalid input.'
// console.log(countElements(null)); // 'Invalid input.'
// console.log(countElements()); // 'Invalid input.'
//
// DATA STRUCTURE(S)
// - Object, to enable key-value mapping
// - Array, which will enable "counting" by filtering
//
// ALGORITHM
// - Guard cases:
//   - Return {} if argument is empty array
//   - Return 'Invalid input.' if argument is not an array
// - Problem #1: Create mapping of elements to counts
//   - Initialize an empty array `countsArray` to store tuples [element, count]
//   - Loop through each element in the input array and count how many occurrences are in the input array
//     - Filter for current element
//   - Push tuple containing [current element, count] to `countsArray`
// - Problem #2: Create object, sorted by count value, containing mapping between elements and counts
//   - Initialize empty object `sortedCounts`
//   - Sort `countsArray` by counts element in tuples
//   - Loop through now-sorted `countsArray`
//     - If element is not in `sortedCounts`, set to equivalent count value
//     - Else if element is in `sortedCounts`, skip
// - Return `sortedCounts` object

function countElements(array) {
  if (Array.isArray(array) && array.length === 0) {
    return {}; 
  } else if (!Array.isArray(array)) {
    return 'Invalid input.'; 
  }
  
  let countsArray = [];
  array.forEach(currentElement => {
    let currentElementCount;
    if (Number.isNaN(currentElement)) {
      currentElementCount = array.filter(element => Number.isNaN(element)).length;
    } else {
      currentElementCount = array.filter(element => element === currentElement).length; 
    }
    countsArray.push([currentElement, currentElementCount]);
  });
  
  let sortedCounts = {};
  countsArray.sort((a, b) => b[1] - a[1]); // in-place
  countsArray.forEach(countTuple => {
    let element = countTuple[0];
    let elementCount = countTuple[1];
    if (!sortedCounts[element]) {
      sortedCounts[element] = elementCount;
    }
  });
  
  return sortedCounts;
}

// Happy Paths
console.log(countElements([1, 2, 3, 4])); // { '1': 1, '2': 1, '3': 1, '4': 1 }
console.log(countElements(['foo', 'foo', 'bar', 'baz'])); // { 'foo': 2, 'bar': 1, 'baz': 1 }
console.log(countElements([Infinity, NaN, NaN, NaN, null, null])); // { NaN: 3, null: 2, Infinity: 1  }

// Boundary Cases
console.log(countElements([1, 2, 3, '1', '2', '3'])); // { '1': 1, '2': 1, '3': 1 }

// Edge Cases
console.log(countElements([])); // {}
console.log(countElements(42)); // 'Invalid input.'
console.log(countElements('foo')); // 'Invalid input.'
console.log(countElements(true)); // 'Invalid input.'
console.log(countElements({})); // 'Invalid input.'
console.log(countElements(undefined)); // 'Invalid input.'
console.log(countElements(null)); // 'Invalid input.'
console.log(countElements()); // 'Invalid input.'

