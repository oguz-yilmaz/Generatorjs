import Generatorjs from 'generatorjs';

test('Creates single div', async () => {
  console.log(
    new Generatorjs({
      el: 'div',
    }).$el
  );
});
