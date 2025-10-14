const palindromes = function (str) {
    let newStr = str.toLowerCase().replace(/[^a-z0-9]/g, "");
    let strArray1 = newStr.split("");

    let j = strArray1.length - 1;
    for(let i = 0; i < strArray1.length; i++){
        if(strArray1[i] === strArray1[j]){
            j--;
        }
        else{
            return false;
        }
    }
    return true;
};


// Do not edit below this line
module.exports = palindromes;
