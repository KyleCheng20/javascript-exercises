const removeFromArray = function(arr, ...args) {
    let newArr = arr.filter(item => {
        for(let i = 0; i < args.length; i++){
            if(item === args[i]){
                return false;
            }
        }
        return true;
    })
    return newArr;
};

// Do not edit below this line
module.exports = removeFromArray;
