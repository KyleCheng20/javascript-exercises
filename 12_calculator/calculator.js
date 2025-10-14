const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
  return a - b;
};

const sum = function(arr) {
  if(arr.length === 1){
    return arr[0];
  }
	return arr.reduce((acc, num) => {
    return acc + num;
  }, 0);
};

const multiply = function(arr) {
  return arr.reduce((acc, num) => {
    return acc * num;
  }, 1);
};

const power = function(base, exp) {
	return base ** exp;
};

const factorial = function(num) {
  let total = 1;
  if(num === 0){
    return total;
  }
  else if(num === 1){
    return total;
  }

  let i = num;
  while(i >= 1){
    total *= i;
    i--;
  }
  return total;
}

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
