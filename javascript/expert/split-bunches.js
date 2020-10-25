/*
Start time: 3:10 - 3:37

You bought a few bunches of fruit over the weekend. Create a function that splits a bunch into singular objects inside an array.
Examples

splitBunches([
  { name: "grapes", quantity: 2 }
]) ➞ [
  { name: "grapes", quantity: 1 },
  { name: "grapes", quantity: 1 }
]

*/

// INPUT(S)
// - Array, containing objects with 'name' and 'quantity' properties
//
// OUTPUT(S)
// - Array, containing "singular" objects based on 'quantity' found in input array
//
// REQUIREMENTS
// - Implicit Vocabulary:
//   - "Bunch": An object with a 'name' and a 'quantity' > 1
//   - "Singluar object": An object with 'name', and 'quantity' === 1
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
// - [{ name: 'grapes', 'quantity': 2 }, { name: 'grapes', 'quantity': 2 }]
//   -> Each object 'name' will be unique across objects given
// - 'grapes' => 'Grapes'? (All name properties will be lowercase.)
// - 'grapes' => 'grape'? (Plurality will be consistent.)
// - Will name value always be a string? (Yes.)
// - Will there be 0 or negative quantities? (quantity will always be 1 or greater)
// - Should the function handle NaN or Infinity for quantity? (No special values, all 1 or >.)
// - Output array: same array, or new array? (New array.)
// - Empty array argument? (Return [].)
// - [{ name: 'grapes', 'quantity': 2 }, 'foo': { name: 'apples', 'quantity': 2 }]?
//   => No key-value values to consider in argument array, just indexed elements
// - Order in output? (Order in which they appear in input.)
// - Invalid data types? (Return 'Invalid input.')
//
// EXAMPLES
// Happy Paths
// console.log(splitBunches([{ name: "grapes", quantity: 2 }]));\
// [{ name: "grapes", quantity: 1 }, { name: "grapes", quantity: 1 }]
// console.log(splitBunches([{ name: "grapes", quantity: 2 }, { name: "apples", quantity: 2 }]));
// [{ name: "grapes", quantity: 1 }, { name: "grapes", quantity: 1 }, { name: "apples", quantity: 1 }, { name: "apples", quantity: 1 }]
// console.log(splitBunches([{ name: "grapes", quantity: 1 }]));\
// [{ name: "grapes", quantity: 1 }]
//
// Boundary Cases
// console.log(splitBunches([])); // []
//
// Edge Cases
// console.log(splitBunches('foo')); // 'Invalid input.'
// console.log(splitBunches(42)); // 'Invalid input.'
// console.log(splitBunches({})); // 'Invalid input.'
// console.log(splitBunches(true)); // 'Invalid input.'
// console.log(splitBunches(undefined)); // 'Invalid input.'
// console.log(splitBunches(null)); // 'Invalid input.'
// 
//
// DATA STRUCTURE(S)
// - Array: iteration, pushing
// - Objects: key-value lookup
//
// ALGORITHM
// - Guard cases: [X]
//   - Return 'Invalid input.' if array is not an array
//   - Return [] if array has length 0
// - Problem 1: Figure out how many "singles" to break out
//   - Loop through objects
//   - Iterate through objects in the argument array
//   - Grab the 'quantity' value
// - Problem 2: Create the array containing the "singles"
//   - Initialize empty array `singles`
//   - For the value of 'quantity', push { name: nameValue, quantity: 1 } into `singles`
// - Return `singles`

function splitBunches(bunchesArray) {
  if (Array.isArray(bunchesArray) && bunchesArray.length === 0) {
    return []; 
  } else if (!Array.isArray(bunchesArray)) {
    return 'Invalid input.';          
  }
  
  let singles = [];
  bunchesArray.forEach(bunch => {
    let currentQuantity = bunch['quantity'];
    for (let n = 0; n < currentQuantity; n += 1) {
      singles.push({ name: bunch['name'], quantity: 1 }); 
    }
  });
  
  return singles;
}

// Happy Paths
console.log(splitBunches([{ name: "grapes", quantity: 2 }]));
// [{ name: "grapes", quantity: 1 }, { name: "grapes", quantity: 1 }]
console.log(splitBunches([{ name: "grapes", quantity: 2 }, { name: "apples", quantity: 2 }]));
// [{ name: "grapes", quantity: 1 }, { name: "grapes", quantity: 1 }, { name: "apples", quantity: 1 }, { name: "apples", quantity: 1 }]
console.log(splitBunches([{ name: "grapes", quantity: 1 }]));
// [{ name: "grapes", quantity: 1 }]

// Boundary Cases
console.log(splitBunches([])); // []

// Edge Cases
console.log(splitBunches('foo')); // 'Invalid input.'
console.log(splitBunches(42)); // 'Invalid input.'
console.log(splitBunches({})); // 'Invalid input.'
console.log(splitBunches(true)); // 'Invalid input.'
console.log(splitBunches(undefined)); // 'Invalid input.'
console.log(splitBunches(null)); // 'Invalid input.'
