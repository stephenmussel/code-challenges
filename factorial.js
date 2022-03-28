// In mathematics, the factorial of a non-negative integer n, denoted by n!, 
// is the product of all positive integers less than or equal to n. 
// For example: 5! = 5 * 4 * 3 * 2 * 1 = 120. By convention the value of 0! is 1.

// Write a function to calculate factorial for a given input. If input is below 0 
// or above 12 throw an exception of type ArgumentOutOfRangeException (C#) or 
// IllegalArgumentException (Java) or RangeException (PHP) or throw a RangeError 
// (JavaScript) or ValueError (Python) or return -1 (C).

// const factorial = n => {

// // !(n >= 0 && n <= 12) throw RangeError
// // take input and count down to 1
// // store those numbers in an array
// // multiply numbers together
// // return result
// let result = [];

//     if(!(n >= 0 && n<= 12)) {
//         throw new RangeError('The argument must be between 0 and 12.')
//     } else if( n === 0) {
//         result.push(1);
//     }
//     for(let i = n; i >= 1; i--) {
//         result.push(i);
//     }

// return result.reduce((a, b) => a * b);
// };

// // console.log(factorial(0)); // 1
// console.log(factorial(5)); // 120
// // console.log(factorial(12)); // 479001600
// // console.log(factorial(-1)); // RangeError
// // console.log(factorial(13)); // RangeError

// const factorial = n => {

// let result = [];

// !(n >= 0 && n<= 12) ? alert('The argument must be between 0 and 12.') : n === 0 ? result.push(1) : '';

// for(let i = n; i >= 1; i--) {
//     result.push(i);
// }

// return result.reduce((a, b) => a * b);
// };

// const factorial = n => {

// let result = [];

// (n < 0 || n > 12) ? alert('The argument must be between 0 and 12.') : n === 0 ? result.push(1) : '';

// for(let i = n; i >= 1; i--) {
//     result.push(i);
// }

// return result.reduce((a, b) => a * b);
// };

const factorial = n => {
    if (n < 0 || n > 12) {
        throw new RangeError();
    } else if(n === 0) {
        return 1;
    }
    return n * factorial(n - 1); 
}

// const countDown = n => {
//     console.log(n);
//     let newNum = n - 1;
//     if(newNum > 0) {
//         countDown(newNum)
//     }
// }

// console.log(countDown(5));

// console.log(factorial(0)); // 1
console.log(factorial(5)); // 120
// console.log(factorial(5)); // 120
// console.log(factorial(12)); // 479001600
// console.log(factorial(-1)); // RangeError
// console.log(factorial(13)); // RangeError