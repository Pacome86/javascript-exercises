const palindromes = function (string) {
    let punctuation = /[\.,?!]/g,
        newString = string.toLowerCase()
            .replace(punctuation, ''),
        array,
        text1,
        text2;
    
    if (newString.includes(' ')) {
        array = newString.split(' ');
    } else {
        array = newString.split('');
    }

    text1 = array.join('');
    text2 = text1.split('').reverse().join('');

    if (text1 === text2) {
        return true;
    } else {
        return false;
    }

};

// Do not edit below this line
module.exports = palindromes;
