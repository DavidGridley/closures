const { increase, double } = require('../src/index.js');

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