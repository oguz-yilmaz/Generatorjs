import Generator from '@generator'

test('Gets the text out of root element', () => {
    const gen = Generator({
        el: 'div',
        attrs: {
            id: 'test-id',
            name: 'test-name'
        },
        inner: 'This is a test div'
    })

    expect(gen.getText()).toBe('This is a test div')
})

test('Gets the text out of nested child', () => {
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
                inner: 'This is a test span',
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

    expect(gen.getText()).toBe('This is a test span')
})

test('Combines texts output', () => {
    const gen = Generator({
        el: 'div',
        attrs: {
            id: 'test-id',
            name: 'test-name'
        },
        inner: 'This is a test div',
        child: [
            {
                el: 'span',
                attrs: {
                    name: 'span1'
                },
                inner: 'This is a test span1'
            },
            {
                el: 'span',
                attrs: {
                    name: 'span2'
                },
                inner: 'This is a test span2',
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

    expect(gen.getText()).toBe(
        'This is a test divThis is a test span1This is a test span2'
    )
})
