/* https://edabit.com/challenge/muXiqFTyE23uknv4o
 *
 * Create a function that takes an array and a number and returns an array of two integers whose product
 * is that of the number n.
 * 
 * - No duplicates.
 * - The array can have multiple solutions, so return the first match that you have found.
 */

// INPUT(S)
// - Array
// - Number
//
// OUTPUT(S)
// - Array, containing two integers from the input array whose product is the input number
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
// - No duplicates are allowed. ([4, 8, 2], 16) !=> [4, 4] => [8, 2]
// - First matching pair of factors must be returned.
// - What should the function return if no two elements can be multipled to make the given number? (undefined)
// - How should the function handle non-array and non-number arguments for the respective arguments? (Return 'Invalid
//   input.')
// - How should the function handle an empty array? (Return undefined.)
// - How should the function handle NaN or Infinity arguments? (You will not get them.)
// - Can the input number be negative or 0? (Yes.)
// - Should the function only consider arrays elements, or object values as well? (Just elements.)
// - Will the input array every have <empty item>? (No.)
// - Should the output array be a new array? (Yes.)
// - Will the input array ever contain non-numbers? (No.)
//
// EXAMPLES
// Happy Paths
// console.log(findFactors([4, 8, 2], 16)); // [8, 2]
// console.log(findFactors([0, 1, 2], 0)); // [0, 1]
// console.log(findFactors([-2, -4, 2, 1], -4)); // [-2, 2]
// console.log(findFactors([-2, -2, 1, -4], -4)); // [1, -4]
// console.log(findFactors([4, 8, 2], 17)); // undefined
// console.log(findFactors([4, 8, 2], 15)); // undefined
//
// Boundary Cases
//
// 
// Edge Cases
// console.log(findFactors([], 16)); // undefined
// console.log(findFactors([4, 8, 2], 'foo')); // 'Invalid input.'
// console.log(findFactors([4, 8, 2], true)); // 'Invalid input.'
// console.log(findFactors([4, 8, 2], [])); // 'Invalid input.'
// console.log(findFactors([4, 8, 2], {})); // 'Invalid input.'
// console.log(findFactors([4, 8, 2], undefined)); // 'Invalid input.'
// console.log(findFactors([4, 8, 2], null)); // 'Invalid input.'
// console.log(findFactors(42, 2)); // 'Invalid input.'
// console.log(findFactors('bar', 2)); // 'Invalid input.'
// console.log(findFactors(false, 2)); // 'Invalid input.'
// console.log(findFactors({}, 2)); // 'Invalid input.'
// console.log(findFactors(undefined, 2)); // 'Invalid input.'
// console.log(findFactors(null, 2)); // 'Invalid input.'
//
// DATA STRUCTURE(S)
// - Array, which enables iteration
//
// ALGORITHM
// - Guard Cases:
//   - Return undefined if `factors` is an empty array
//   - Return 'Invalid input.' if first argument is not an array or second is not a number
// - Initialize a loop representing a fixed element in the input array
//   - Initialize another loop representing a moving index in the input array
//     - Return the fixed element and the element at the moving index if
//       - The indexes aren't the same
//       - The two elements multiply to make the target number
// - Otherwise, return undefined


function findFactors(factors, target) {
  if (Array.isArray(factors) && factors.length === 0) {
    return undefined; 
  } else if (!Array.isArray(factors) || typeof target !== 'number') {
    return 'Invalid input.'; 
  }
  
  for (let firstIdx = 0; firstIdx < factors.length; firstIdx += 1) {
    for (let secondIdx = 0; secondIdx < factors.length; secondIdx += 1) {
      let firstElement = factors[firstIdx];
      let secondElement = factors[secondIdx];
      if (firstIdx !== secondIdx && (firstElement * secondElement === target)) {
        return [firstElement, secondElement];
      }
    }
  }
  
  return undefined;
}

// Happy Paths
console.log(findFactors([4, 8, 2], 16)); // [8, 2]
console.log(findFactors([0, 1, 2], 0)); // [0, 1]
console.log(findFactors([-2, -4, 2, 1], -4)); // [-2, 2]
console.log(findFactors([-2, -2, 1, -4], -4)); // [1, -4]
console.log(findFactors([4, 8, 2], 17)); // undefined
console.log(findFactors([4, 8, 2], 15)); // undefined

// Edge Cases
console.log(findFactors([], 16)); // undefined
console.log(findFactors([4, 8, 2], 'foo')); // 'Invalid input.'
console.log(findFactors([4, 8, 2], true)); // 'Invalid input.'
console.log(findFactors([4, 8, 2], [])); // 'Invalid input.'
console.log(findFactors([4, 8, 2], {})); // 'Invalid input.'
console.log(findFactors([4, 8, 2], undefined)); // 'Invalid input.'
console.log(findFactors([4, 8, 2], null)); // 'Invalid input.'
console.log(findFactors(42, 2)); // 'Invalid input.'
console.log(findFactors('bar', 2)); // 'Invalid input.'
console.log(findFactors(false, 2)); // 'Invalid input.'
console.log(findFactors({}, 2)); // 'Invalid input.'
console.log(findFactors(undefined, 2)); // 'Invalid input.'
console.log(findFactors(null, 2)); // 'Invalid input.'
