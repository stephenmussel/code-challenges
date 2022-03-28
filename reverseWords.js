// let str = 'This is an example!';
// let str2 = 'Elbow';

// let x = str.split();
// let y = str.split('');
// let z = str.split(' ');

// let a = str2.split();
// let b = str2.split('');
// let c = str2.split(' ');

// console.log('this is x: ', x);
// console.log('this is y: ', y);
// console.log('this is z: ', z);
// console.log('this is a: ', a);
// console.log('this is b: ', b);
// console.log('this is c: ', c);


// const reverseWords = str => {
// let strArr = str.split(' ').reverse().join(' ')
// let result = []

// for(let i = strArr.length - 1; i >= 0 ; i--) {
//     result.push(strArr[i]);
// }

// return result.join('');
// };

// console.log(reverseWords('This is an example!')); // sihT si na !elpmaxe

const reverseWords = str => {
    let strArr = str
        .split(' ') // returns array of words
        .map(word => word // loops thru array
            .split('') // returns array of an array of characters
            .reverse() // reverses order of characters
            .join('')) // joins characters to form array of words
            .join(' '); // joins array of words to form string
    return strArr;
    };
    
console.log(reverseWords('This is an example!')); // sihT si na !elpmaxe




