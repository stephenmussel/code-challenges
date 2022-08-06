/*
You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.

Implement the function which takes an array containing the names of people that like an item. It must return the display text as shown in the examples:

[]                                -->  "no one likes this"
["Peter"]                         -->  "Peter likes this"
["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"

Note: For 4 or more names, the number in "and 2 others" simply increases.
*/

const nA = [];
const nB = ["Peter"];
const nC = ["Jacob", "Alex"];
const nD = ["Max", "John", "Mark"];
const nE = ["Alex", "Jacob", "Mark", "Max"];
const nF = ["Alex", "Jacob", "Mark", "Max", "Jun", "Marlanval", "Laurel", "Conor"];


// function likes(names) {
//     // console.log(names);

//     // if length === 0 console.log('no one likes this');
//     // else if length === 1 console.log(`${names[0]} like this`);
//     // else if length === 2 console.log(`${names[0]} and ${nams[1]} like this`);
//     // else if length === 3 console.log(`${names[0]}, ${nams[1]}, and ${names[2]} like this`);
//     // else if length >= 4 console.log(`${names[0]}, ${nams[1]} and 2 others like this`);`

//     let result = '';

//     if (names.length === 0) {
//         result = 'no one likes this';
//     } else if (names.length === 1) {
//         result = `${names[0]} likes this`;
//     } else if (names.length === 2) {
//         result = `${names[0]} and ${names[1]} like this`;
//     } else if (names.length === 3) {
//         result = `${names[0]}, ${names[1]} and ${names[2]} like this`;
//     } else if (names.length >= 4) {
//         result = `${names[0]}, ${names[1]} and ${names.length - 2} others like this`;
//     }
//     return result;
// }

// console.log(likes(nE));

function likes(names) {
    
    switch (names.length) {
        case 0:
            return 'no one likes this';
        case 1:
            return `${names[0]} likes this`;
        case 2:
            return `${names[0]} and ${names[1]} likes this`;
        case 3:
            return `${names[0]}, ${names[1]} and ${names[2]} likes this`;
        default:
            return `${names[0]} and ${names[1]} and ${names.length - 2} likes this`;
    }
}

console.log(likes(nF));``