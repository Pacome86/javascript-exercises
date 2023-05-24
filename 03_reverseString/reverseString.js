const reverseString = function (string) {
    // Step 1. Create an empty string that will host the new created string
    let newString = "";

    // Step 2. Create the FOR loop
    /* The starting point of the loop will be (str.length - 1) which corresponds to the 
       last character of the string, "o"
       As long as i is greater than or equals 0, the loop will go on
       We decrement i after each iteration */
    for (let i = string.length - 1; i >= 0; i--) {
        newString += string[i];
    }

    // Step 3. Return the reversed string
    return newString;
};
reverseString('hello');
reverseString('hello there');
reverseString('123! abc!');
reverseString('');
//https://www.freecodecamp.org/news/how-to-reverse-a-string-in-javascript-in-3-different-ways-75e4763c68cb/
// const reverseString = function(string) {
// Method step by step:
// step 1: Use the split method to return a new array
// step 2: Use the reverse method to reverse the new created array
// step 3: Use the join method to join all elements of the array
// step 4 : return joinArray;

// Method chained:
//     return string.split("").reverse().join("");
// };
// reverseString('hello');
// reverseString('hello there');
// reverseString('123! abc!');
// reverseString('');
// Do not edit below this line
module.exports = reverseString;
