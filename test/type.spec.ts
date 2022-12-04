import Generatorjs from '@generator'

test('Can construct without type error', () => {
    const gen = new Generatorjs({
        el: 'div',
        attr: {
            id: 'test-id',
            name: 'test-name'
        },
        child: [
            {
                el: 'span',
                attr: {
                    name: 'span1'
                }
            },
            {
                el: 'span',
                attr: {
                    name: 'span2'
                }
            }
        ]
    })
})
