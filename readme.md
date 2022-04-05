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
    <li><a href="#factorial">Factorial</a></li>
    <li><a href="#high-and-low">High and Low</a></li>
    <li><a href="#testing-1-2-3">Testing 1-2-3</a></li>
    <li><a href="#youre-a-square">You're a Square</a></li>
    <li><a href="#remove-the-minimum">Remove the Minimum</a></li>
    <li><a href="#weird-string-case">WeIrD StRiNg CaSe</a></li>
    <li><a href="#convert-isbn-10-to-isbn-13">Convert ISBN-10 to ISBN-13</a></li>
    <li><a href="#code-challenge-template">Code Challenge Template</a></li>
  </ul>
</details>
<br /><br />

### FizzBuzz Backwards

Traditionally in FizzBuzz, multiples of 3 are replaced by "Fizz" and multiples of 5 are replaced by "Buzz". But we could also play FizzBuzz with any other integer pair [n, m] whose multiples are replaced with Fizz and Buzz.

For a sequence of numbers, Fizzes, Buzzes and FizzBuzzes, find the numbers whose multiples are being replaced by Fizz and Buzz. Return them as an array [n, m]

The Fizz and Buzz numbers will always be integers between 1 and 50, and the sequence will have a maximum length of 100. The Fizz and Buzz numbers might be equal, and might be equal to 1.

First solution:

  ```
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

```
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
<br />

First solution:

```
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
  <br />

First solution:

```
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

```
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

### Factorial

In mathematics, the factorial of a non-negative integer n, denoted by n!, is the product of all positive integers less than or equal to n. For example: 5! = 5 * 4 * 3 * 2 * 1 = 120. By convention the value of 0! is 1.

Write a function to calculate factorial for a given input. If input is below 0 or above 12 throw an exception of type ArgumentOutOfRangeException (C#) or IllegalArgumentException (Java) or RangeException (PHP) or throw a RangeError (JavaScript) or ValueError (Python) or return -1 (C).

More details about factorial can be found [here](https://www.wikiwand.com/en/Factorial).
<br />

First solution:

```
/**
 * Calculate factorial for a given input.
 * @param {number} - The input is a positive integer between 0 and 12
 * @returns {number} - Positive integer  
 */

const factorial = n => {

// !(n >= 0 && n <= 12) throw RangeError
// take input and count down to 1
// store those numbers in an array
// multiply numbers together
// return result

let result = [];

  if(!(n >= 0 && n<= 12)) {
      throw new RangeError('The argument must be between 0 and 12.')
  } else if( n === 0) {
      result.push(1);
  }
  for(let i = n; i >= 1; i--) {
      result.push(i);
  }

return result.reduce((a, b) => a * b);
};

// console.log(factorial(0)); // 1
console.log(factorial(5)); // 120
// console.log(factorial(12)); // 479001600
// console.log(factorial(-1)); // RangeError
// console.log(factorial(13)); // RangeError
```

Refactored solution:

```
Case for recursion?

const countDown = n => {
  
  console.log(n);
  
  let newNum = n - 1;
  
  if(newNum > 0) {
      countDown(newNum)
  }
}

Recursion applied:

const factorial = n => {
  if (n < 0 || n > 12) {
      throw new RangeError();
  } else if(n === 0) {
      return 1;
  }
  return n * factorial(n - 1); 
}
```

<p align="right">(<a href="#top">back to top</a>)</p>

### High and Low

In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

Examples:
```
highAndLow("1 2 3 4 5");  // return "5 1"
highAndLow("1 2 -3 4 5"); // return "5 -3"
highAndLow("1 9 3 4 -5"); // return "9 -5"
```
Notes

* All numbers are valid `Int32`, no need to validate them.
* There will always be at least one number in the input string.
* Output string must be two numbers separated by a single space, and highest number is first.
<br />

First solution:

```
/**
 * Return highest and lowest number from a string of numbers
 * @param {string} - The input string will have at least one number
 * @returns {string} - String with two numbers separated by space w/highest number first  
 */

const highAndLow = str => {

  let arr = str.split(' ');
  let hi = Math.max(...arr);
  let lo = Math.min(...arr);

  // always at least one number in string;
    if(arr.length === 1) {
      arr.push(str);
      
      // returns 2 numbers separated by space with high first
      return arr.join(' ');
    }
  // returns 2 numbers separated by space with high first
  return (`${hi} ${lo}`);
};
```

Refactored solution:

```
const highAndLow = str => {
        
  let arr = str.split(' ');
  let hi = Math.max(...arr);
  let lo = Math.min(...arr);

  return arr.length === 1 ? str + ' ' + str : hi + ' ' + lo;
};
```

<p align="right">(<a href="#top">back to top</a>)</p>

### Testing 1-2-3

Your team is writing a fancy new text editor and you've been tasked with implementing the line numbering.

Write a function which takes a list of strings and returns each line prepended by the correct number.

The numbering starts at 1. The format is `n: string`. Notice the colon and space in between.

Examples:
```
number([]) // => []
number(["a", "b", "c"]) // => ["1: a", "2: b", "3: c"]
```
<br />

First solution:

```
/**
 * Prepend list of strings with number starting at 1
 * @param {array} - The input is an array of strings
 * @returns {array} -  Output is an array of strings
 */

 const number = arr => {

  let result = [];
  let counter = 1;

  // empty array should return empty array
  if(arr.length === 0) {
      return arr;
  }

  for(let each of arr) {
      let el = `${counter}: ${each}`;
      counter++;
      result.push(el);
  }
      
  return result;
};
```

Refactored solution:

```
Learned something new!

// ++c => increment then assign => 1, 2, 3
// c++ => assign the increment => 0, 1, 2
const number = arr => arr.map((v, c) => `${++c}: ${v}`);
```

<p align="right">(<a href="#top">back to top</a>)</p>

### You're a Square

You like building blocks. You especially like building blocks that are squares. And what you even like more, is to arrange them into a square of square building blocks!

However, sometimes, you can't arrange them into a square. Instead, you end up with an ordinary rectangle! Those blasted things! If you just had a way to know, whether you're currently working in vain… Wait! That's it! You just have to check if your number of building blocks is a perfect square.

Task
Given an integral number, determine if it's a square number:

> In mathematics, a square number or perfect square is an integer that is the square of an integer; in other words, it is the product of some integer with itself.

The tests will always use some integral number, so don't worry about that in dynamic typed languages.

**Examples**

```
-1  =>  false
 0  =>  true
 3  =>  false
 4  =>  true
25  =>  true
26  =>  false
```
<br />

First solution:

```
/**
 * Determine if the number is a square.
 * @param {number} - The input is a number
 * @returns {boolean} - The output is a boolean
 */

const isSquare = n => {
  // let result = Math.sqrt(n);
  // return n < 0 ? false : result % 1 === 0 ? true : false;
  return n < 0 ? false : Math.sqrt(n) % 1 === 0 ? true : false;
};
```

Refactored solution:

```
const isSquare = n => {
  return Math.sqrt(n) % 1 === 0 ? true : false;
};
```

<p align="right">(<a href="#top">back to top</a>)</p>

### Remove the Minimum

**The museum of incredible dull things**

The museum of incredible dull things wants to get rid of some exhibitions. Miriam, the interior architect, comes up with a plan to remove the most boring exhibitions. She gives them a rating, and then removes the one with the lowest rating.

However, just as she finished rating all exhibitions, she's off to an important fair, so she asks you to write a program that tells her the ratings of the items after one removed the lowest one. Fair enough.

**Task**

Given an array of integers, remove the smallest value. Do not mutate the original array/list. If there are multiple elements with the same value, remove the one with a lower index. If you get an empty array/list, return an empty array/list.

Don't change the order of the elements that are left.

**Examples**

```
* Input: [1,2,3,4,5], output= [2,3,4,5]
* Input: [5,3,2,1,4], output = [5,3,2,4]
* Input: [2,2,1,2,1], output = [2,2,2,1]
```
<br />

First solution:

```
/**
 * Remove the lowest number and return updated array without mutating the original array
 * @param {array} - The input is an array of numbers
 * @returns {array} - The output is an array of numbers
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
```

Refactored solution:

```
const removeSmallest = num => {

  let newNum = [...num];
  newNum.splice(newNum.indexOf(Math.min(...newNum)), 1);
  
  return newNum;
};
```

<p align="right">(<a href="#top">back to top</a>)</p>

### WeIrD StRiNg CaSe

Write a function `toWeirdCase` that accepts a string, and returns the same string with all even indexed characters in each word upper cased, and all odd indexed characters in each word lower cased. The indexing just explained is zero based, so the zero-ith index is even, therefore that character should be upper cased and you need to start over for each word.

The passed in string will only consist of alphabetical characters and spaces(`' '`). Spaces will only be present if there are multiple words. Words will be separated by a single space(`' '`).

**Examples:**

```
toWeirdCase( "String" );//=> returns "StRiNg"
toWeirdCase( "Weird string case" );//=> returns "WeIrD StRiNg CaSe"
```
<br />

First solution:

```
/**
 * Returns a string where all even indexed characters are uppercased 
 * and odd are lowercased
 * @param {string} - The input is a string
 * @returns {string} - The output is a string
 */

const weirdCase = str => {
  let arr = str.split(' ');
  // console.log(arr); // ['Weird', 'string', 'cAse']

  arr = [...arr].map(word => ([...word].map((char, index) => index % 2 ? char.toLowerCase() : char.toUpperCase()).join('')));
  console.log(arr); // cases changed properly but still an array of strings...then joined

  return arr = arr.join(' ');
}

console.log(weirdCase('string')); // StRiNg
console.log(weirdCase('Weird string cAse')); // WeIrD StRiNg CaSe
```

Refactored solution:

```
const weirdCase = str => {
  let arr = str.split(' ')
    .map(word => ([...word]
      .map((char, index) => 
        index % 2 ? char.toLowerCase() : char.toUpperCase())
        .join('')));

  return arr.join(' ');
}
```

<p align="right">(<a href="#top">back to top</a>)</p>

### Convert ISBN-10 to ISBN-13

**Task**

ISBN stands for International Standard Book Number.

For more than thirty years, ISBNs were 10 digits long. On January 1, 2007 the ISBN system switched to a 13-digit format. Now all ISBNs are 13-digits long. Actually, there is not a huge difference between them. You can convert a 10-digit ISBN to a 13-digit ISBN by adding the prefix number (978) to the beginning and then recalculating the last, check digit using a fairly simple method.

**Method**
1. Take the ISBN ("1-85326-158-0").
2. Remove the last character, which can be a number or "X".
3. Add the prefix number (978) and a hyphen (-) to the beginning.
4. Take the 12 digits, then alternately multiply each digit from left to right by 1 or 3.
5. Add up all 12 numbers you got.
6. Take the number and perform a modulo 10 division.
7. If the result is 0, the check digit is 0. If it isn't 0, then subtract the result from 10. In this case, that is the check digit.
8. Add the check digit to the end of the result from step 3.
9. Return the 13-digit ISBN in the appropriate format:
"`prefix number` - `original ISBN except the last character` - `check digit`"
"`978` - `1` - `85326` - `158` - `9`"

**Example**
```
ISBN = "1-85326-158-0"
remove_last_character = "1-85326-158-"
add_prefix = "978-1-85326-158-"
twelve_digits = 978185326158

check_digit = 9*1 + 7*3 + 8*1 + 1*3 + 8*1 + 5*3 + 3*1 + 2*3 + 6*1 + 1*3 + 5*1 + 8*3
            =   9 +  21 +   8 +   3 +   8 +  15 +   3 +   6 +   6 +   3 +   5 +  24
            = 111
            111 % 10 = 1
            10 - 1 = 9

thirteen_digit = 9781853261589

return "978-1-85326-158-9"
```
<br />

First solution:

```
/**
 * Convert a 10-digit ISBN to a 13-digit ISBN
 * @param {string} - The input is a 10 number string
 * @returns {string} - The output is a 13 number string
 */

const isbnConverter = isbn => {

  // remove last character of isbn
  let isbnArr = isbn.split(''); 
  // console.log(isbnArr); // ['1', '-', '8', '5','3', '2', '6', '-','1', '5', '8', '-', '0']
  isbnArr.pop(); // ['0']
  // console.log(isbnArr); // ['1', '-', '8', '5','3', '2', '6', '-', '1', '5', '8', '-']

  // this value is referenced later
  let result = isbnArr;

  // add prefix: 978
  isbnArr.unshift('9', '7', '8', '-')
  // console.log(isbnArr); // ['9', '7', '8', '-', '1', '-', '8', '5', '3', '2', '6', '-','1', '5', '8', '-']

  // convert to 12 digits
  isbnArr = isbnArr.filter(char => char !== '-'); 
  // console.log(isbnArr.filter(char => char !== '-')); // ['9', '7', '8', '1', '8', '5', '3', '2', '6', '1', '5', '8']

  // alternately multiply each digit from L to R by 1 or 3
  // even index * 1
  // odd index * 3
  isbnArr = isbnArr.map((v, k) => (k % 2) ? v * 3 : v * 1); 
  // console.log(isbnArr); // [9, 21, 8, 3, 8, 15, 3, 6, 6, 3, 5, 24]

  // add up all 12 numbers
  let sumArr = isbnArr.reduce((p, c) => p + c);
  // console.log(sumArr); // 111

  // perfom modulo 10 division
  // if 0 then check digit is 0
  // else subtract result from 10
  // console.log(sumArr % 10 === 0 ?  0 : 10 - (sumArr % 10)); // check digit is 9
  let checkDigit = sumArr % 10 === 0 ?  0 : 10 - (sumArr % 10);

  // add check digit to result from step 3
  // console.log(result); // ['1', '-', '8', '5','3', '2', '6', '-', '1', '5', '8', '-']
  result.push(checkDigit.toString());
  // console.log(result); // ['1', '-', '8', '5','3', '2', '6', '-', '1', '5', '8', '-', '9']

  return result.join('');
};

console.log(isbnConverter('1-85326-158-0')); // 978-1-85326-158-9
console.log(isbnConverter('0-14-143951-3')); // 978-0-14-143951-8
console.log(isbnConverter('0-02-346450-X')); // 978-0-02-346450-8
console.log(isbnConverter('963-14-2164-3')); // 978-963-14-2164-4
```

Refactored solution:

```
const isbnConverter = isbn => {

  let isbnArr = isbn.split(''); 
  isbnArr.pop();

  // this value is referenced later
  let result = isbnArr;

  isbnArr.unshift('9', '7', '8', '-')

  isbnArr = isbnArr.filter(char => char !== '-')
      .map((v, k) => (k % 2) ? v * 3 : v * 1); 

  let sumArr = isbnArr.reduce((p, c) => p + c);

  let checkDigit = sumArr % 10 ? 10 - (sumArr % 10) : 0;

  result.push(checkDigit.toString());

  return result.join('');
};
```

<p align="right">(<a href="#top">back to top</a>)</p>

### Code Challenge Template

Description goes here...
<br />

First solution:

```
/**
 * Description goes here...
 * @param {*} - 
 * @param {*} - 
 * @returns {*} -  
 */
```

Refactored solution:

```
Code goes here...
```

<p align="right">(<a href="#top">back to top</a>)</p>


