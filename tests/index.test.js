const {
  increase,
  double,
  total,
  gibberish,
  mergeSort,
  calculator,
  dogHome
} = require("../src/index.js");

test("increase", function() {
  const arg = 10;
  const inner = increase();
  const result = inner(arg);

  const expected = 12;

  expect(result).toBe(expected);
});

test("double", function() {
  const arg = 10;
  const inner = double();
  const result = inner(arg);

  const expected = 20;

  expect(result).toBe(expected);
});

test("total", function() {
  const arr = [12, 14, 5, 2, 10];
  const arrayTotal = total();
  const result = arrayTotal(arr);

  const expected = 43;
  expect(result).toBe(expected);
});

describe("gibberish", function() {
  test("string passed in", function() {
    const inner = gibberish();
    const input = "hello";
    const result = inner(input);
    const expected = " hello";

    expect(result).toBe(expected);
  });

  test("array passed in", function() {
    const inner = gibberish();
    const input = ["dog", "cat", "lamp"];
    const result = inner(input);
    const expected = "dog cat lamp.";

    expect(result).toBe(expected);
  });

  test("array and string passed in", function() {
    const inner = gibberish();
    let input = ["dog", "cat", "lamp"];
    let result = inner(input);
    input = "man";
    result = inner(input);
    const expected = "dog cat lamp. man";

    expect(result).toBe(expected);
  });
});

describe("mergeSort", function() {
  test("passing in several numbers", function() {
    const inner = mergeSort();
    inner(3);
    inner(4);
    inner(5);
    const result = inner(6);
    const expected = 6;
    expect(result).toBe(expected);
  });
});

test("calculator", function() {
  const inner = calculator();
  inner(5, 5, "+");
  inner(10, 5, "-");
  inner(10, 10, "*");
  const result = inner(100, 10, "/");
  const expected = 125;

  expect(result).toBe(expected);
});

describe("dogHome", function() {
  let dogMethods;
  beforeEach(() => {
    dogMethods = dogHome();
  });

  test("use houseDog with single dog", function() {
    dogMethods.houseDog("bonnie", "springer", "black and white", "marlborough");

    const result = dogMethods.getDogsByLocation("marlborough");
    const expected = [{
      name: "bonnie",
      breed: "springer",
      colour: "black and white"
    }];
    expect(result).toEqual(expected);
  });

  test("use houseDog with two dogs in same town", function() {
    dogMethods.houseDog("bonnie", "springer", "black and white", "marlborough");
    dogMethods.houseDog("frank", "bulldog", "white", "marlborough");

    const result = dogMethods.getDogsByLocation("marlborough");
    const expected = [{
      name: "bonnie",
      breed: "springer",
      colour: "black and white"
    },
    {
      name: "frank",
      breed: "bulldog",
      colour: "white"
    }];
    expect(result).toEqual(expected);
  });

  test("use houseDog with two dogs in same town and one in another town", function() {
    dogMethods.houseDog("bonnie", "springer", "black and white", "marlborough");
    dogMethods.houseDog("frank", "bulldog", "white", "marlborough");
    dogMethods.houseDog("pepsi", "undefined", "black", "streatham");

    const result1 = dogMethods.getDogsByLocation("marlborough");
    const expected1 = [{
      name: "bonnie",
      breed: "springer",
      colour: "black and white"
    },
    {
      name: "frank",
      breed: "bulldog",
      colour: "white"
    }];

    const result2 = dogMethods.getDogsByLocation("streatham");
    const expected2 = [{
      name: "pepsi",
      breed: "undefined",
      colour: "black"
    }]


    expect(result1).toEqual(expected1);
    expect(result2).toEqual(expected2);

  });
});
