/*

Your task is to sort a given string. Each word in the string will 
contain a single number. This number is the position the word should 
have in the result.

Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

If the input string is empty, return an empty string. The words in the 
input String will only contain valid consecutive numbers.

Examples

"is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
"4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
""  -->  ""

 */

let w0 = '';
let w1 = 'is2 Thi1s T4est 3a';
let w2 = '4of Fo1r pe6ople g3ood th5e the2';

// function order(words) {

//     let arr = words.split(' '); //[ strings ]
//     let search = 1; // starting number to search for in string then increment
//     let count = arr.length; // makes sure to loop thru all the words
//     let sorted = []; // words sorted by ASC

//     // checks for empty string and returns if true
//     if (words === '') {
//         return '';
//     }

//     while (count > 0) { // makes sure to loop through all string elements
//         for (let i in arr) { // loops thru characters in word
//             if (arr[i].includes(search)) { // if character is equal to search value...
//                 sorted.push(arr[i]); // push into sorted []
//                 search++
//                 count--
//             }
//         }
//     }
//     return sorted.join(' ');
// }

// console.log(order(w2));

function order(words) {

    let arr = words.split(' '); // returns words in an array
    let sorted = []; // collects sorted words;

    // checks for empty string and returns if true
    if (words === '') {
        return '';
    }

    // loop thru words
    // for each word find the word that includes the number (i)
    for(let i = 1; i < arr.length + 1; i++) {
        sorted.push(arr.find(word => word.includes(i)));
    }
    return sorted.join(' ');
}

console.log(order(w2));
