/*
Given an array of integers, remove the smallest value. Do not mutate the original 
array/list. If there are multiple elements with the same value, remove the one with 
a lower index. If you get an empty array/list, return an empty array/list.

Don't change the order of the elements that are left.

*/

const removeSmallest = num => {
    // remove smallest value w/o mutating original array
    // make a copy and find smallest value
    let newNum = [...num];

    // remove first instance
    // if you get an empty array return empty array
    // newNum.indexOf(Math.min(...newNum)); // found index of first instance of lowest number

    newNum.splice(newNum.indexOf(Math.min(...newNum)), 1);
    // return [newNum, num];
    return newNum;

   };

console.log(removeSmallest([1, 2, 3, 4, 5])); // [2, 3, 4, 5]
console.log(removeSmallest([5, 3, 2, 1, 4])); // [5, 3, 2, 4]
console.log(removeSmallest([2, 2, 1, 2, 1])); // [2, 2, 2, 1]
console.log(removeSmallest([])); // []