const repeatString = function(string, num) {
    
    let repeatedString = '';
    
    if (num < 0) {
        return 'ERROR';
    } else {
        for (let i = 0; i < num; i++) {
            repeatedString += string;
        }
        return repeatedString;
    }
    
};
repeatString('hey', 3)
repeatString('hey', 10)
repeatString('hey', 1)
repeatString('hey', 0)
repeatString('hey', -1)

let number = Math.random().toFixed(3) * 1000;
repeatString('hey', number).match(/((hey))/g).length;
repeatString('', 10)
/* for (let i = 0; i < num; i++) {
             repeatedString += string;
        } 
    return repeatedString;
    */

/*const repeatString = function(string, num) {
    
    if (num < 0) {
        return "ERROR";
    } else {
        return string.repeat(num);
   }
};*/

/*let number = Math.random().toFixed(3) * 1000;

const repeatString = function (string, num) {
    
    string = '';
    for (let i = 0; i < num; i++) {
        string += 'hey';
        if (num < 0) {
            return 'ERROR';
        } else {
            return string;
        }
    }
};
repeatString('hey', number).match(/((hey))/g).length;*/

// Do not edit below this line
module.exports = repeatString;
