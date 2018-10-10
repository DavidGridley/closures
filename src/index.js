// Create a function which stores a number. Return an inner function which accepts a number as an argument, adds it to the number in parent scope and returns the new total

function increase(){

  let number = 2;

  function inner(newNumber){
    number = newNumber + number;
    return number;
  }

  return inner;
}

module.exports = {increase};
