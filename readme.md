# About

For practice and learning.
<br /><br /><br />

# Code Challenges

<!-- LIST OF CODE CHALLENGES -->
<details>
  <summary>List of Code Challenges</summary>
  <ol>
    <li><a href="#fizzbuzz-backwards">FizzBuzz Backwards</a></li>
  </ol>
</details>
<br /><br /><br />

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
let fb = arr.indexOf('FizzBuzz')

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