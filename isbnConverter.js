const isbnConverter = isbn => {

    // remove last character of isbn
    let isbnArr = isbn.split(''); 
    // console.log(isbnArr); // ['1', '-', '8', '5','3', '2', '6', '-','1', '5', '8', '-', '0']
    isbnArr.pop(); // ['0']
    // console.log(isbnArr); // ['1', '-', '8', '5','3', '2', '6', '-','1', '5', '8', '-']

    return isbnArr.join('');
};

console.log(isbnConverter('1-85326-158-0')); // 978-1-85326-158-9
// console.log(isbnConverter('0-14-143951-3')); // 978-0-14-143951-8
// console.log(isbnConverter('0-02-346450-X')); // 978-0-02-346450-8
// console.log(isbnConverter('963-14-2164-3')); // 978-963-14-2164-4