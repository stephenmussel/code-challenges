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
  let result = num.toString().split('').map(i => i**2).join('');
  return parseInt(result); // positive integer
  }
  
console.log(squareDigits(9119)); // 811181
console.log(squareDigits(1991)); // 181811
console.log(squareDigits(-96)); // 8136