/* https://edabit.com/challenge/xukQmQoGopXbQMdZj
 *
 * Given an array of strings and an original string, write a function to output an array of boolean
 * values - true if the word can be formed from the original word by swapping two letters only once and 
 * false otherwise. Original string will consist of unique characters.
 */

// INPUT(S)
// - Array, containing string values
// - String, representing the ideal state of each string in the input array
//
// OUTPUT(S)
// - Array, containing boolean values that state whether the corresponding element in the input
//   array can be made into the ideal state string by moving two letters, once each
//
// ['ABDC'], 'ABCD' => [true]
// ['ADBC'], 'ABCD' => [false]
// ['$%56'], '%$56' => [true]
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
// - Original string argument will consist of unique characters.
// - Will all the elements in the array be of equal length as string? (Yes.)
// - Should the comparison consider letter case, e.g., ['AbDC'], 'ABCD' => [true]? (Ignore case.)
// - Will all considered string values in the array be elements, or property values too? (Both.)
// - How should the function handle an empty ideal string? (Return false for each word in string.)
// - How should the function handle non-array and non-string arguments? (Return 'Invalid input.')
// - Should the function mutate the original array? (No.)
// - Should the function be able to handle switched data type arguments, i.e., string then array? (No.)
// - Will the values in the array always be alphabetic? (No.)
// - Will the array value strings have spaces? (No.)
// - Will the array value strings always possess the same characters and same number of those
//   characters as the target? (No.)
//
// EXAMPLES
// Happy Paths
// console.log(canSwapSingleLetter(['ABDC', 'ADBC', 'AbDC'], 'ABCD')); // [true, false, true]
// console.log(canSwapSingleLetter(['ABDC', 'ADBC', '12CD'], 'ABCD')); // [true, false, false]
//
// Boundary Cases
// console.log(canSwapSingleLetter(['$%56', '%$65', '5%$6', '6$5%'], '%$56')); // [true, true, false, true] 
// console.log(canSwapSingleLetter(['ABDC', 'ADBC', 'AbDC'], '')); // [false, false, false]
//
// let someArray = ['ABDC']
// someArray['foo'] = 'BACD';
// console.log(canSwapSingleLetter(someArray, 'ABCD')); // [true, true]
//
// Edge Cases
// console.log(canSwapSingleLetter('', 'ABCD')); // 'Invalid input.'
// console.log(canSwapSingleLetter(42, 'ABCD')); // 'Invalid input.'
// console.log(canSwapSingleLetter(true, 'ABCD')); // 'Invalid input.'
// console.log(canSwapSingleLetter([], 'ABCD')); // 'Invalid input.'
// console.log(canSwapSingleLetter({}, 'ABCD')); // 'Invalid input.'
// console.log(canSwapSingleLetter(['ABDC'], 42)); // 'Invalid input.'
// console.log(canSwapSingleLetter(['ABDC'], true)); // 'Invalid input.'
// console.log(canSwapSingleLetter(['ABDC'], [])); // 'Invalid input.'
// console.log(canSwapSingleLetter(['ABDC'], {})); // 'Invalid input.'
// console.log(canSwapSingleLetter(['ABDC'])); // 'Invalid input.'
// console.log(canSwapSingleLetter()); // 'Invalid input.'
//
// DATA STRUCTURE(S)
// - Strings, which enable iteration
// - Arrays, which enable iteration
//
// ALGORITHM
// - Guard cases:
//   - Return invalid input if:
//     - stringArray is empty array
//     - stringArray isn't an array or targetString isn't a string
// - Sub-problem 1: Check to see if a value is a 'valid swap'
//   - Check that the characters in array value and target are the same
//   - Loop through array value `toCheck` and compare characters at each index to respective character
//     in `targetString`
//   - If count of differences is not 2, return false.
// - Sub-problem 2: Generate the array of booleans
//   - Initialize an empty array to hold boolean return values
//   - Loop through `stringArray` values (Object.values) and check if each value is a valid swap
//     - If yes, push true to array
//     - If no, push false to array
// - Return boolean result array
//

function isValidSwap(toCheck, targetString) {
  // Consider if they are not same length
  toCheck = toCheck.toUpperCase();
  targetString = targetString.toUpperCase();
  if (toCheck.split('').sort().join('') !== targetString.split('').sort().join('')) {
    return false; 
  }
  
  let diffCounter = 0;
  for (let idx = 0; idx < toCheck.length; idx += 1) {
    if (toCheck[idx].toUpperCase() !== targetString[idx].toUpperCase()) {
      diffCounter += 1; 
    }
  }
  
  return diffCounter === 2;
}

function canSwapSingleLetter(stringArray, targetString) {
  if (Array.isArray(stringArray) && stringArray.length === 0) {
    return 'Invalid input.'; 
  } else if (!Array.isArray(stringArray) || typeof targetString !== 'string') {
    return 'Invalid input.';
  }
  
  return Object.values(stringArray).map(element => isValidSwap(element, targetString));
}

// Happy Paths
console.log(canSwapSingleLetter(['ABDC', 'ADBC', 'AbDC'], 'ABCD')); // [true, false, true]
console.log(canSwapSingleLetter(['ABDC', 'ADBC', '12CD'], 'ABCD')); // [true, false, false]

// Boundary Cases
console.log(canSwapSingleLetter(['$%56', '%$65', '5%$6', '6$5%'], '%$56')); // [true, true, false, true] 
console.log(canSwapSingleLetter(['ABDC', 'ADBC', 'AbDC'], '')); // [false, false, false]

let someArray = ['ABDC']
someArray['foo'] = 'BACD';
console.log(canSwapSingleLetter(someArray, 'ABCD')); // [true, true]

// Edge Cases
console.log(canSwapSingleLetter([], 'ABCD')); // 'Invalid input.'
console.log(canSwapSingleLetter('', 'ABCD')); // 'Invalid input.'
console.log(canSwapSingleLetter(42, 'ABCD')); // 'Invalid input.'
console.log(canSwapSingleLetter(true, 'ABCD')); // 'Invalid input.'
console.log(canSwapSingleLetter({}, 'ABCD')); // 'Invalid input.'
console.log(canSwapSingleLetter(['ABDC'], 42)); // 'Invalid input.'
console.log(canSwapSingleLetter(['ABDC'], true)); // 'Invalid input.'
console.log(canSwapSingleLetter(['ABDC'], [])); // 'Invalid input.'
console.log(canSwapSingleLetter(['ABDC'], {})); // 'Invalid input.'
console.log(canSwapSingleLetter(['ABDC'])); // 'Invalid input.'
console.log(canSwapSingleLetter()); // 'Invalid input.'

