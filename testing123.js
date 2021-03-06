// Your team is writing a fancy new text editor and you've been tasked with implementing the line numbering.

// Write a function which takes a list of strings and returns each line prepended by the correct number.

// The numbering starts at 1. The format is `n: string`. Notice the colon and space in between.

// Examples:

// number([]) // => []
// number(["a", "b", "c"]) // => ["1: a", "2: b", "3: c"]


// const number = arr => {

//     let result = [];
//     let counter = 1;

//     // empty array should return empty array
//     if(arr.length === 0) {
//         return arr;
//     }

//     for(let each of arr) {
//         let el = `${counter}: ${each}`;
//         counter++;
//         result.push(el);
//     }
        
//     return result;
// };

// ++c => increment then assign => 1, 2, 3
// c++ => assign the increment => 0, 1, 2
// const number = arr => arr.map((v, c) => `${++c}: ${v}`);
const number = arr => arr.map((v, c) => `${c + 1}: ${v}`);


console.log(number([])); // []
console.log(number(['x', 'y', 'z'])); // ['1: x', '2: y', '3: z']


