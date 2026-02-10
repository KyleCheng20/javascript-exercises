const contains = function(obj, value) {
    if(obj === value || (Number.isNaN(obj) && Number.isNaN(value))) return true;
    if(typeof obj !== "object" || obj === null) return false;
    
    for(let subObj of Object.values(obj)){
        if(contains(subObj, value)){
            return true;
        }
    }
    return false;
};
  
// Do not edit below this line
module.exports = contains;
