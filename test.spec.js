const example = require('./sum');

test('adds 1 + 2 to equal 3', () => {
  expect(example.sum(1, 2)).toBe(3);
});