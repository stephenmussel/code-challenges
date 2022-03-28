<div id="top"></div>

# About

For practice and learning.
<br /><br /><br />

# Code Challenges

<!-- LIST OF CODE CHALLENGES -->
<details>
  <summary>List of Code Challenges</summary>
  <ul>
    <li><a href="#fizzbuzz-backwards">FizzBuzz Backwards</a></li>
    <li><a href="#square-every-digit">Square Every Digit</a></li>
    <li><a href="#reverse-words">Reverse Words</a></li>
    <li><a href="#code-challenge">Code Challenge</a></li>
  </ul>
</details>
<br /><br />

### FizzBuzz Backwards

Traditionally in FizzBuzz, multiples of 3 are replaced by "Fizz" and multiples of 5 are replaced by "Buzz". But we could also play FizzBuzz with any other integer pair [n, m] whose multiples are replaced with Fizz and Buzz.

For a sequence of numbers, Fizzes, Buzzes and FizzBuzzes, find the numbers whose multiples are being replaced by Fizz and Buzz. Return them as an array [n, m]

The Fizz and Buzz numbers will always be integers between 1 and 50, and the sequence will have a maximum length of 100. The Fizz and Buzz numbers might be equal, and might be equal to 1.

First solution:

  ```sh
/**
 * Finds the numbers whose multiples are being replaced by Fizz and Buzz
 * @param {Array} arr - Array of numbers and strings
 * @returns {Array} - Array of 2 numbers
 */


// test data
const arr1 = [1,"Fizz","Buzz","Fizz",5,"FizzBuzz"];
const arr2 = ["Fizz","Fizz","Fizz","Fizz","Fizz","FizzBuzz"];

const reverseFizzBuzz = arr => {
let result = [];
let f = arr.indexOf('Fizz');
let b = arr.indexOf('Buzz');
let fb = arr.indexOf('FizzBuzz');

if(arr[0] === 'FizzBuzz') { // found FizzBuzz
  result = [1, 1];
}

if(f !== -1) { // found Fizz
  result.push(f + 1);
} else if(f === -1) { // did not find Fizz
  result.push(fb + 1);
}

if(b !== -1) { // found Buzz
  result.push(b + 1);
} else if(b === -1) { // did not find Buzz
  result.push(fb + 1);
}

return result;
};

console.log(reverseFizzBuzz(arr1)); // [2, 3]
console.log(reverseFizzBuzz(arr2)); // [1, 6]
```

Refactored solution:

```sh
const reverseFizzBuzz = arr => {

// truthy: if found, f = value at index and if not found, f = value at index of FizzBuzz  
let f = arr.indexOf('Fizz') + 1 ? arr.indexOf('Fizz') + 1 : arr.indexOf('FizzBuzz') + 1;
let b = arr.indexOf('Buzz') + 1 ? arr.indexOf('Buzz') + 1 : arr.indexOf('FizzBuzz') + 1;

return [f, b];
}
```

<p align="right">(<a href="#top">back to top</a>)</p>

### Square Every Digit

Square every digit of a number and concatenate them. For example, if we run 9119 through the function, 811181 will come out. 

Note: the function accepts an integer and returns an integer.
<br /><br />

First solution:

```sh
/**
 * Square every digit of a number and concatenate them
 * @param {number} num - Integer
 * @returns {number} -  Integer
 */

const squareDigits = num => {
  if(num < 0){
    num = Math.abs(num); // positive integer;
  }

  // turns number to string then returns array
  // loops thru array and squares each element then joins them
  let result = num
    .toString()
    .split('')
    .map(i => i**2)
    .join('');
  return parseInt(result); // positive integer
  }
  
console.log(squareDigits(9119)); // 811181
console.log(squareDigits(1991)); // 181811
console.log(squareDigits(-96)); // 8136
```

<p align="right">(<a href="#top">back to top</a>)</p>

### Reverse Words

  Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.
  <br /><br />

First solution:

```sh
/**
 * Reverse each word in a string and spaces should be retained
 * @param {string} - String
 * @returns {string} - String in reverse
 */

const reverseWords = str => {
let strArr = str.split(' ').reverse().join(' ')
let result = []

for(let i = strArr.length - 1; i >= 0 ; i--) {
    result.push(strArr[i]);
}

return result.join('');
};

console.log(reverseWords('This is an example!')); // sihT si na !elpmaxe
```

Refactored solution:

```sh
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
```

<p align="right">(<a href="#top">back to top</a>)</p>

### Code Challenge Template

Description goes here...
<br /><br />

First solution:

```sh
/**
 * Description goes here...
 * @param {*} - 
 * @param {*} - 
 * @returns {*} -  
 */
```

Refactored solution:

```sh
Code goes here...
```

<p align="right">(<a href="#top">back to top</a>)</p>

