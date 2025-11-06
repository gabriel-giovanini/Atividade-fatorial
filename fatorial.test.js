const fatorial = require('./fatorial');

test('fatorial de 5 deve ser 120', () => {
  expect(fatorial(5)).toBe(120);
});