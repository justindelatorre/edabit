/* https://edabit.com/challenge/ebcd4Xu8TLizaj6dm
 *
 * Create a function that takes two numbers as arguments and returns an array of multiples of the
 * first argument until the array length reaches the length provided by the second argument.
 */

// INPUT(S)
// - (2) Numbers
//   - Factor, whose multiples will fill an output Array
//   - Target Length, which will determine the length of the output Array
//
// OUTPUT(S)
// - Array, containing multiples of the given Factor, and having the given Target Length
//
// REQUIREMENTS
// - Implicit Vocabulary:
//   - "Multiple": The result of multiplying a given number by another number
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
// - Mental Model: Write a function that takes a factor and a length and returns an array containing
//   multiples of that factor and that is of the given length.
// - Should the multiples be consecutive e.g., 3 => 3, 6, 9 ...? (Yes.)
// - Does zero count as a multiple? (No.)
// - Will the function be fed 0 or negative factors? (Yes.)
// - How should the function handle negative length arguments? (Return 'Invalid input.')
// - How should the function handle 0 length? (Return empty array.)
// - How should the function handle special number values like Infinity and NaN? (Return 'Invalid input.')
// - Does the factor have to be an integer, or can it accept floats? (Accept floats.)
// - What order to the multiples need to be in within the output Array? (Ascending.)
// - For multiples of floats, to what precision should we round the float multiples? (2 decimals)
// - How should the function handle non-number data type arguments? (Return 'Invalid input.')
// - How should the function handle missing arguments? (Return 'Invalid input.')
//
// EXAMPLES
// Happy Paths
// console.log(multiples(5, 4)); // [5, 10, 15, 20]
// console.log(multiples(-5, 4)); // [-5, 10, -15, 20]
// console.log(multiples(1.25, 4)); // [1.25, 2.50, 3.75, 5.00]
// console.log(multiples(0.125, 4)); // [0.13, 0.25, 0.38, 0.50]
//
// Edge Cases
// console.log(multiples(4, -1)); // 'Invalid input.'
// console.log(multiples(NaN, 4)); // 'Invalid input.'
// console.log(multiples(4, NaN)); // 'Invalid input.'
// console.log(multiples(Infinity, 4)); // 'Invalid input.'
// console.log(multiples(4, Infinity)); // 'Invalid input.'
// console.log(multiples('foo', 4)); // 'Invalid input.'
// console.log(multiples(4, 'foo')); // 'Invalid input.'
// console.log(multiples([], 4)); // 'Invalid input.'
// console.log(multiples(4, [])); // 'Invalid input.'
// console.log(multiples(false, 4)); // 'Invalid input.'
// console.log(multiples(4, false)); // 'Invalid input.'
// console.log(multiples({}, 4)); // 'Invalid input.'
// console.log(multiples(4, {})); // 'Invalid input.'
// console.log(multiples(4)); // 'Invalid input.'
// console.log(multiples()); // 'Invalid input.'
//
// DATA STRUCTURE(S)
// - Array, which enables pushing of elements
//
// ALGORITHM
// - Guard cases:
//   - Return 'Invalid input.' if [...cases]
// - Create array of multiples
//   - Initialize array to hold multiples (`multiples`)
//   - Initialize variable and set to 1 (`multiplier`)
//   - While `multiples` length is not equal to `targetLength`, loop
//     - Check if the product of `factor` times `multiplier` is a float
//       - If it's a float, round to 2 decimals
//     - Push the result of `factor` times `multiplier` to `multiples`
//     - Increment `multiplier` plus one
// - Return `multiples`

function isValidNumber(input) {
  return typeof input === 'number' && !Number.isNaN(input) && isFinite(input); 
}

function multiples(factor, targetLength) {
  if (!isValidNumber(factor) || !isValidNumber(targetLength)) {
    return 'Invalid input.'; 
  } else if (targetLength < 0) {
    return 'Invalid input.';
  } else if (targetLength === 0) {
    return []; 
  }
  
  let multiplier = 1;
  let multiples = [];
  while (multiples.length < targetLength) {
    let multiple = multiplier * factor;
    if (parseInt(multiple) !== multiple) {
      multiple = parseFloat(multiple.toFixed(2)); 
    }
    multiples.push(multiple);
    multiplier += 1;
  }
  
  return multiples;
}

// Happy Paths
console.log(multiples(5, 4)); // [5, 10, 15, 20]
console.log(multiples(-5, 4)); // [-5, -10, -15, -20]
console.log(multiples(1.25, 4)); // [1.25, 2.50, 3.75, 5.00]
console.log(multiples(0, 4)); // [0, 0, 0, 0]
console.log(multiples(0.125, 4)); // [0.13, 0.25, 0.38, 0.50]

// Edge Cases
console.log(multiples(4, 0)); // []
console.log(multiples(4, -1)); // 'Invalid input.'
console.log(multiples(NaN, 4)); // 'Invalid input.'
console.log(multiples(4, NaN)); // 'Invalid input.'
console.log(multiples(Infinity, 4)); // 'Invalid input.'
console.log(multiples(4, Infinity)); // 'Invalid input.'
console.log(multiples('foo', 4)); // 'Invalid input.'
console.log(multiples(4, 'foo')); // 'Invalid input.'
console.log(multiples([], 4)); // 'Invalid input.'
console.log(multiples(4, [])); // 'Invalid input.'
console.log(multiples(false, 4)); // 'Invalid input.'
console.log(multiples(4, false)); // 'Invalid input.'
console.log(multiples({}, 4)); // 'Invalid input.'
console.log(multiples(4, {})); // 'Invalid input.'
console.log(multiples(4)); // 'Invalid input.'
console.log(multiples()); // 'Invalid input.'
