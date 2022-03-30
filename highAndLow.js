// All numbers are valid Int32, no need to validate them.
// There will always be at least one number in the input string.
// Output string must be two numbers separated by a single space, and highest number is first.

// const highAndLow = str => {

//     let arr = str.split(' ');
//     let hi = Math.max(...arr);
//     let lo = Math.min(...arr);

//     // always at least one number in string;
//         if(str.length === 1) {
//             arr.push(str);

//             // returns 2 numbers separated by space with high first
//             return arr.join(' ');
//     }
//     // returns 2 numbers separated by space with high first
//     return (`${hi} ${lo}`);
// };

const highAndLow = str => {
        
    let arr = str.split(' ');
    let hi = Math.max(...arr);
    let lo = Math.min(...arr);

    return arr.length === 1 ? str + ' ' + str : hi + ' ' + lo;
};

console.log(highAndLow("9"));  // return "5 1"
console.log(highAndLow("1 2 3 4 5"));  // return "5 1"
// console.log(highAndLow("1 2 -3 4 5")); // return "5 -3"
// console.log(highAndLow("1 9 3 4 -5")); // return "9 -5"

