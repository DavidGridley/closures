// Create a function which stores a number. Return an inner function which accepts a number as an argument, adds it to the number in parent scope and returns the new total

function increase() {
  let number = 2;

  function inner(newNumber) {
    number = newNumber + number;
    return number;
  }

  return inner;
}

function double() {
  let multiplier = 2;

  function inner(newNumber) {
    number = newNumber * multiplier;
    return number;
  }

  return inner;
}

function total() {
  let total = 0;

  function arrayTotal(arr) {
    total = arr.reduce((acc, num) => acc + num);
    return total;
  }

  return arrayTotal;
}

function gibberish() {
  let string = "";

  function inner(input) {
    if (typeof input === "object") {
      string = string + input.join(" ") + ".";
      return string;
    }

    string = string + " " + input;

    return string;
  }

  return inner;
}

function mergeSort() {
  let arr = [];

  function inner(number) {
    arr.push(number);
    arr.sort((a, b) => b - a);
    return arr[0];
  }

  return inner;
}

function calculator() {
  let total = 0;

  function inner(n1, n2, operator) {
    switch (operator) {
      case "+":
        total += n1 + n2;
        break;
      case "-":
        total += n1 - n2;
        break;
      case "*":
        total += n1 * n2;
        break;
      case "/":
        total += n1 / n2;
        break;
    }
    return total;
  }
  return inner;
}

function dogHome() {
  const dogObject = {};

  const dogMethods = {
    houseDog(name, breed, colour, location) {
      if (dogObject[location]) {
        dogObject[location].push({ name: name, breed: breed, colour: colour });
      } else {
        Object.assign(dogObject, {
          [location]: [{ name: name, breed: breed, colour: colour }]
        });
      }
    },
    getDogsByLocation(location) {
      return dogObject[location];
    }
  };

  return dogMethods;
}

function trainStation() {
  let peopleArr = [];

  const trainMethods = {
    arrive(person) {
      peopleArr.push({name: person, money: Number(Math.random() * 21).toFixed(2)})
    },

    getPeople() {
      return peopleArr;
    },

    giveMoney() {
      let moneyToGive = (Math.random() * 20).toFixed(2);
      let person = Math.floor(Math.random() * peopleArr.length);
      peopleArr[person].money += moneyToGive;
    },

    trainArrives(){
      peopleArr = peopleArr.filter(person => person.money < 20);
      return peopleArr;
    }
  }

  return trainMethods;
}

module.exports = {
  increase,
  double,
  total,
  gibberish,
  mergeSort,
  calculator,
  dogHome,
  trainStation
};
