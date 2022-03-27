/**
 * Finds the numbers whose multiples are being replaced by Fizz and Buzz
 * @param {Array} arr - Array of numbers and strings
 * @returns {Array} - Array of 2 numbers
 */


// test data
const arr1 = [1,"Fizz","Buzz","Fizz",5,"FizzBuzz"];
const arr2 = ["Fizz","Fizz","Fizz","Fizz","Fizz","FizzBuzz"];

// const reverseFizzBuzz = arr => {
// let result = [];
// let f = arr.indexOf('Fizz');
// let b = arr.indexOf('Buzz');
// let fb = arr.indexOf('FizzBuzz')

// if(arr[0] === 'FizzBuzz') { // found FizzBuzz
//   result = [1, 1];
// }

// if(f !== -1) { // found Fizz
//   result.push(f + 1);
// } else if(f === -1) { // did not find Fizz
//   result.push(fb + 1);
// }

// if(b !== -1) { // found Buzz
//   result.push(b + 1);
// } else if(b === -1) { // did not find Buzz
//   result.push(fb + 1);
// }

// return result;
// };

const reverseFizzBuzz = arr => {

// truthy: if found, f = value at index and if not found, f = value at index of FizzBuzz  
let f = arr.indexOf('Fizz') + 1 ? arr.indexOf('Fizz') + 1 : arr.indexOf('FizzBuzz') + 1;
let b = arr.indexOf('Buzz') + 1 ? arr.indexOf('Buzz') + 1 : arr.indexOf('FizzBuzz') + 1;

return [f, b];
}

console.log(reverseFizzBuzz(arr1)); // [2, 3]
console.log(reverseFizzBuzz(arr2)); // [1, 6]