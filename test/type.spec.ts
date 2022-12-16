import Generator from '@generator'

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
                },
                child: [
                    {
                        el: 'img',
                        attrs: {
                            alt: 'Test image'
                        }
                    }
                ]
            }
        ]
    })

    debugger

    const fragment = gen.getFragment()
    const text = gen.getText()

    console.log('Text => ', text, gen.getHtml())
    // expect(res).toBeInstanceOf(GeneratorJs)
    expect(fragment).toBeInstanceOf(DocumentFragment)
})
