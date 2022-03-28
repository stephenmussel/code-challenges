const reverseWords = str => {
let strArr = str.split(' ').reverse().join(' ')
let result = []

for(let i = strArr.length - 1; i >= 0 ; i--) {
    result.push(strArr[i]);
}

return result.join('');
};

console.log(reverseWords('This is an example!')); // sihT si na !elpmaxe

