import GeneratorJs from '@generator'

test('Can construct GeneratorJs without error', () => {
    const gen = new GeneratorJs({
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
