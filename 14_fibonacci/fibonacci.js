const fibonacci = function(num) {
    num = Number(num);
    let current = 1;
    let prev = 1;

    if(num == 0){
        return current = 0;
    }
    else if(num < 0){
        return "OOPS";
    }

    for(let i = 2; i < num; i++){
        let next = current + prev;
        prev = current;
        current = next;
    }
    return current;
    
};

// Do not edit below this line
module.exports = fibonacci;
