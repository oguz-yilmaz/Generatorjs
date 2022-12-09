import Generatorjs from '@generator'

test('Can construct without type error', () => {
    const gen = new Generatorjs({
        el: 'div',
        attrs: {
            id: 'test-id',
            name: 'test-name'
        },
        child: [
            {
                el: 'span',
                attrs: {
                    name: 'span1'
                }
            },
            {
                el: 'span',
                attrs: {
                    name: 'span2'
                }
            }
        ]
    }) // throws JavaScript heap out of memory
})
