const findTheOldest = function(arr) {
    return arr.reduce((acc, curr) => {
        if(acc.yearOfDeath === undefined){
            acc.yearOfDeath = new Date().getFullYear();
        }
        let accAge = acc.yearOfDeath - acc.yearOfBirth;

        if(curr.yearOfDeath === undefined){
            curr.yearOfDeath = new Date().getFullYear();
        }
        let currAge = curr.yearOfDeath - curr.yearOfBirth;

        if(accAge > currAge){
            return acc;
        }
        else{
            return curr;
        }


    }, arr[0]);
};

// Do not edit below this line
module.exports = findTheOldest;
