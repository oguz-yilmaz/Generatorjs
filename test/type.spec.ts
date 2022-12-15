import Generator, { GeneratorJs } from '@generator'

test('Can construct GeneratorJs without error', () => {
    const gen = Generator({
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

    const fragment = gen.getFragment()
    const html = gen.reset()

    expect(html).toBeInstanceOf(GeneratorJs)
    expect(fragment).toBeInstanceOf(DocumentFragment)
})
