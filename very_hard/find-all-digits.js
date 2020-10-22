/* https://edabit.com/challenge/5hsyLC2Ntgoqn2wAy
 *
 * Taking each four digit number of an array in turn, return the number that you are on when all of the 
 * digits 0-9 have been discovered. If not all of the digits can be found, return "Missing digits!".
 */

// INPUT(S)
// - Array, containing four-digit numbers
//
// OUTPUT(S)
// - Number, representing the number during which the last number from 0-9 is found relative to the other
//   numbers in the array
// [1234, 5678, 9012] => 1234 5678 90 => 9012
//
// REQUIREMENTS
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
// - Will the given array only contain number data types? (Yes.)
// - Will the elements only contain integers? (Yes.)
// - Will the number elements always be positive? (Yes.)
// - How should the function handle NaN, Infinity, etc. elements? (They won't appear.)
// - How should the function handle non-Array arguments? (Return 'Invalid input.')
//
// MENTAL MODEL
// - Write a function that takes an array of four-digit numbers and returns the specific element number
//   at which the last digit among 0-9 is discovered.
//
// EXAMPLES
// Happy Paths
// console.log(findDigits([1234, 5678, 9012])); // 9012
// console.log(findDigits([9012, 1234, 5678])); // 5678
// console.log(findDigits([9012, 5678, 1234])); // 1234
// console.log(findDigits([1111, 2222, 3333, 4444, 5555, 6666, 7777, 8888, 9999, 0000])); // 0000
//
// DATA STRUCTURE(S)
// - Strings, so integers can be split by character
// - Arrays, to enable element iteration and element storage
//
// ALGORITHM
// - Initialize an empty array `digitsCollected` to store digits 0-9
// - Loop through each element in the given array (use for loop to enable interruption)
//   - Convert each element to a string
//   - Split that string
//   - Loop through each digit string
//     - If the digit string is not in `digitsCollected`, add it; otherwise continue
//     - If `digitsCollected` reaches length 10, return the current element
//   - Return 'Missing digits!'

function findDigits(array) {
  let digitsCollected = [];
  for (let arrayIdx = 0; arrayIdx < array.length; arrayIdx += 1) {
    let currentElement = array[arrayIdx];
    let currentElementArray = String(currentElement).split('');
    for (let elementIdx = 0; elementIdx < currentElementArray.length; elementIdx += 1) {
      let currentDigit = currentElementArray[elementIdx];
      if (!digitsCollected.includes(currentDigit)) {
        digitsCollected.push(currentDigit);
        if (digitsCollected.length === 10) {
          return currentElement; 
        }
      } else {
        continue;
      }
    }
  }
  
  return 'Missing digits!';
}

// Generic Cases
console.log(findDigits([1234, 5678, 9012])); // 9012
console.log(findDigits([1234, 5678, 9012, 5678])); // 9012
console.log(findDigits([9012, 1234, 5678])); // 5678
console.log(findDigits([9012, 5678, 1234])); // 1234
console.log(findDigits([1111, 2222, 3333, 4444, 5555, 6666, 7777, 8888, 9999, 1000])); // 0000

