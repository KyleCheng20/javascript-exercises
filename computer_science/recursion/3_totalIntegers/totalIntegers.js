const totalIntegers = function(data) {
    if(typeof data !== "object" || data === null) return undefined;

    let count = 0;

    for(let value of Object.values(data)){
        if(Number.isInteger(value)) count++;
        else if(typeof value === "object" && value !== null) count += totalIntegers(value);
    }
    return count;
};
  
// Do not edit below this line
module.exports = totalIntegers;
