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