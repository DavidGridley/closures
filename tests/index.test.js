const { increase, double, total } = require('../src/index.js');

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