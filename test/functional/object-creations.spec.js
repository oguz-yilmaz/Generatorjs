import Generatorjs from 'generatorjs';

test('Creates a single div', () => {
  expect(
    new Generatorjs({
      el: 'div',
    }).getString()
  ).toBe('<div></div>');
});
