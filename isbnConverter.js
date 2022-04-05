const isbnConverter = isbn => {

    // remove last character of isbn
    let isbnArr = isbn.split('');
    console.log(isbnArr);
    isbnArr.pop();
    console.log(isbnArr);

    // add prefix: 978


    return isbnArr.join('');
};

console.log(isbnConverter('1-85326-158-0'));
