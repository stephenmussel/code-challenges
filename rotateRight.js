/*
Implement a function that returns an updated array with r right rotations 
on an array of integers a .

Example:

Given the following array: [2,3,4,5,7]

Perform 3 right rotations:
First rotation : [7,2,3,4,5] , Second rotation : [5,7,2,3,4] and, Third rotation: [4,5,7,2,3]

return [4,5,7,2,3]
*/

let arrA = [];
let arrB = [2, 3, 4, 5, 7];

function rotateRight(arr, rotations) {

    // checks for empty []
    if (arr.length === 0) {
        return 'the array is empty!';

    // alerts that array would not change
    } else if (arr.length === rotations) {
        console.log(`you're back where you started!`);
        return arr;
    }

    for (let i = 0; i < rotations; i++) {
        let el = arr.pop(); // el to rotate
        arr.unshift(el); // el rotated to right/front
    }

    return arr;
}

// console.log(rotateRight(arrB, 1)); // [7,2,3,4,5]
// console.log(rotateRight(arrB, 4)); // [3,4,5,7,2]
console.log(rotateRight(arrB, 2)); // [2,3,4,5,7]
