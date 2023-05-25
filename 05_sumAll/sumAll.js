const sumAll = function (a, b) {

    if(isNaN(a) || isNaN(b)) return 'ERROR';
    if(a < 0 || b < 0) return 'ERROR';
    if (typeof(a) === "string" || typeof(b) === "string") return 'ERROR';
    let min = Math.min(a, b);
    let max = Math.max(a, b);
    const range = [];

    for(let i = min; i <= max; i++) {
        range.push(i);
    }
    
    return range.reduce((a,b) => a + b);
};

// const sumAll = function (a, b) {
//     let sum;
//     let finalSum = 0;
//     for (let i = 0; i <= b; i++) {
//         sum = a + a++;
//     }
//     return finalSum += sum ;
// };

// const sumAll = function (a, b) {
//     let sum;
//     let finalSum = 0;
//     for (let i = a; i <= b; i++) {
//         for (let j = a++; j <= b; j++) {
//             sum = i + j;
//         }
//     }
//     return finalSum += sum ;
// };

// const sumAll = function (a, b) {
//     let sum;
//     let finalSum;
//     for (let i = a; i < b; i++) {
//         sum = i+ i++;
//     }
//     return finalSum = sum + b ;
// };

// const sumAll = function (a, b) {

//     let sum;
    
//     for (let i = 1; i < b; i++) {
//         sum = a + (a +1);
        
//     }
//     return sum;
// };

// const sumAll = function (a, b) {
//     b = a + 1;
//     let sum = a + b;
//     let finalSum;
//     for (let i = 1; i < b; i++) {
//         finalSum += sum;
//     }
//     return finalSum;
// };


// Do not edit below this line
module.exports = sumAll;
