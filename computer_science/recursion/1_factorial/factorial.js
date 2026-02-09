const factorial = function(n) {
    if(n === 1 || n === 0){
        return 1;
    } 
    if(Number.isInteger(n) && n > 0){
        return n * factorial(n - 1);
    } else{
        return undefined;
    }
};

// Do not edit below this line
module.exports = factorial;