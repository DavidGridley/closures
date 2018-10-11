const { increase, double, total, gibberish } = require('../src/index.js');

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