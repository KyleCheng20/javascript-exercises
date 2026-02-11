const permutations = function(arr) {
    if(arr.length === 0) return [[]];

    let result = [];
    for(let i = 0; i < arr.length; i++){
        let currElement = arr[i];
        let remaining = arr.slice(0, i).concat(arr.slice(i+1));
        let permOfRemaining = permutations(remaining);
        
        for(let perm of permOfRemaining){
            result.push([currElement, ...perm]);
        }
    }
    return result;
};
  
// Do not edit below this line
module.exports = permutations;
