import Generatorjs from '@generator'

test('Can construct GeneratorJs without error', () => {
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
    })
})
