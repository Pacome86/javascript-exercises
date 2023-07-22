const fibonacci = function (n) {
    
    if (n < 0) return "OOPS";

    const fib = [0, 1];

    for (let i = 2; i < n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }

    return fib[fib.length - 1] + fib[fib.length - 2];
};

// Do not edit below this line
module.exports = fibonacci;
