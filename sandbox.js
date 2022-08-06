/*
Your goal in this kata is to implement a difference function, which subtracts one list 
from another and returns the result.

It should remove all values from list a, which are present in list b keeping their order.

If a value is present in b, all of its occurrences must be removed from the other:

*/


const arrayDiff = (a, b) => {

    // loop thru array `a`
    // loop thru array `b`
    // compare `a` and `b`
    return a.forEach(el1 => b.forEach(el2 => {if(el1 === el2) {
        console.log(`el1: ${el1}`);
        console.log(`el2: ${el2}`);
    }}))

   
    // if `b` elements exist in `a` array remove elements from `a` array

    
  
    // return;
}

let chars = ['A', 'B', 'A', 'C', 'B'];

let uniqueChars = chars.filter((c, index) => {
    return chars.indexOf(c) === index;
});

console.log(uniqueChars);



// console.log(arrayDiff([1,2,2,2,3],[2])); // [1,3]
console.log(arrayDiff([1,2,3,7], [1,2,7])); // [3]
