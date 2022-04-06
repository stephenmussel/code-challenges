// Average of all measured systolic pressures >= 140 mmHg. Must have minumum of 2 measurements.
// Average of all measured diastolic presures >= 90 mmHg. Must have minimum of 2 measurements.
// Any one measurement with systolic pressure >= 180 mmHg AND diastolic pressure >= 110 mmHg

/*
You are given a list, patients in which each element represents a patient. Each patient/element 
consists of a list of strings (representing all measurements of a patient's blood pressure) in 
the format "s/d", where s is the systolic pressure and d the diastolic, both in mmHg. 
Systolic and diastolic numbers will always be whole numbers.

Return the number of patents that meet any of the above hypertension definitions.
 */


const hypertensive = patients => {

    // Average of all measured systolic pressures >= 140 mmHg. Must have minumum of 2 measurements.
    // if(arr.length > 1); // meets 2 min measurement requirement
    // parseInt(arr.reduce((p, c) => (p + c))/arr.length) >= 140; // calculates avg and compares to 140

    
    // Average of all measured diastolic presures >= 90 mmHg. Must have minimum of 2 measurements.
    // if(arr.length > 1); // meets 2 min measurement requirement
    // parseInt(arr.reduce((p, c) => (p + c))/arr.length) >= 0; // calculates avg and compares to 90


    // Any one measurement with systolic pressure >= 180 mmHg AND diastolic pressure >= 110 mmHg
    // if(s >= 180 && d >= 110)

    
    return avg;
    // return sum;

};

// "s/d"
// [[patient], [patient]...]
// [[patient measurement1, patient measurement2]...]
const test = [
    ["130/80","140/94"],
    // ["160/110"],
];

const x = [
    ["130/80","140/94"],
    ["160/110"],
    ["150/80"],
    ["150/92","140/90","138/84"],
    ["140/94","140/90","120/80"]
];

const y = [
    ["130/90","140/94"],
    ["160/110"],
    ["200/120"],
    ["150/94","140/90","120/90"],
    ["140/94","140/90","120/80"]
];

const z = [
    ["130/90","140/94"],
    ["160/110"],["150/80"],
    ["150/92","140/90","120/80"],
    ["140/94","140/90","120/80"]
];

console.log(hypertensive(test)); // 1 @ index 3
// console.log(hypertensive(x)); // 1 @ index 3
// console.log(hypertensive(y)); // 3 @ indices 0, 2, 3
// console.log(hypertensive(z)); // 1 @ index 0

