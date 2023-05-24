const removeFromArray = function (array, ...args) {
    
    //array = Array.from(arguments);
    return array.filter(x => !args.includes(x));

};

// Do not edit below this line
module.exports = removeFromArray;
