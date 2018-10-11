const { increase, double, total, gibberish, mergeSort, calculator } = require('../src/index.js');

test('increase', function(){
  const arg = 10;
  const inner = increase();
  const result = inner(arg);

  const expected = 12;

  expect(result).toBe(expected);
});

test('double', function(){
  const arg = 10;
  const inner = double();
  const result = inner(arg);

  const expected = 20;

  expect(result).toBe(expected);
});

test('total', function(){
  const arr = [12, 14, 5, 2, 10];
  const arrayTotal = total();
  const result = arrayTotal(arr);

  const expected = 43;
  expect(result).toBe(expected);
})

describe('gibberish', function(){
  test('string passed in', function(){
    const inner = gibberish()
    const input = "hello"
    const result = inner(input)
    const expected = " hello"

    expect(result).toBe(expected);
  })

  test('array passed in', function(){
    const inner = gibberish()
    const input = ["dog","cat","lamp"]
    const result = inner(input)
    const expected = "dog cat lamp."

    expect(result).toBe(expected);
  })

  test('array and string passed in', function(){
    const inner = gibberish()
    let input = ["dog","cat","lamp"]
    let result = inner(input)
    input = "man"
    result = inner(input)
    const expected = "dog cat lamp. man"

    expect(result).toBe(expected);
  })
})

describe('mergeSort', function(){
  test('passing in several numbers', function(){
    const inner = mergeSort();
    inner(3);
    inner(4);
    inner(5);
    const result = inner(6);
    const expected = 6;
    expect(result).toBe(expected);
  })
})

test('calculator', function() {
  const inner = calculator();
  inner(5, 5, '+')
  inner(10, 5, '-')
  inner(10, 10, '*')
  const result = inner(100,10,'/')
  const expected = 125;

  expect(result).toBe(expected)
})