// Create a function which stores a number. Return an inner function which accepts a number as an argument, adds it to the number in parent scope and returns the new total

function increase(){

  let number = 2;

  function inner(newNumber){
    number = newNumber + number;
    return number;
  }

  return inner;
}

function double(){

  let multiplier = 2;

  function inner(newNumber){
    number = newNumber * multiplier;
    return number;
  }

  return inner;
}

function total(){

  let total = 0;

  function arrayTotal(arr) {
    total = arr.reduce((acc, num) => acc + num )
    return total
  }

  return arrayTotal;
}

module.exports = {
  increase,
  double,
  total
}
