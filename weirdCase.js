// const weirdCase = str => {


//     let arr = str.split(' ').map(word => word.split(''));
//     arr = arr.map((char, index) => index % 2 ? char.toLowerCase() : '' );
//     let result = [];

//     // for(let x = 0; x < arr.length; x++) {
//     //     if(x % 2 === 0) {
//     //         result.push(arr[x].toUpperCase());
//     //     } else {
//     //         result.push(arr[x].toLowerCase());
//     //     }
//     // }
    
//     return arr;
// };

// const weirdCase = str => {
//     let arr = str.split(' ');
//     // console.log(arr); // ['Weird', 'string', 'cAse']

//     arr = [...arr].map(word => ([...word].map((char, index) => index % 2 ? char.toLowerCase() : char.toUpperCase()).join('')));
//     console.log(arr); // cases changed properly but still an array of strings...then joined

//     return arr = arr.join(' ');
// }

const weirdCase = str => {
    let arr = str.split(' ')
        .map(word => ([...word]
            .map((char, index) => 
                index % 2 ? char.toLowerCase() : char.toUpperCase())
                .join('')));

    return arr.join(' ');
}

console.log(weirdCase('string')); // StRiNg
console.log(weirdCase('Weird string cAse')); // WeIrD StRiNg CaSe