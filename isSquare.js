const isSquare = n => {
    // let result = Math.sqrt(n);
    // return n < 0 ? false : result % 1 === 0 ? true : false;
    return n < 0 ? false : Math.sqrt(n) % 1 === 0 ? true : false;

};

console.log((isSquare(0))); // true, 0 is a square number (0 * 0)
console.log((isSquare(-1))); // false, -1: Negative numbers cannot be square numbers
console.log((isSquare(25)));
console.log((isSquare(3))); 

