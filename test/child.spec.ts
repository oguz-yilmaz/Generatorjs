import Generator from '@generator'

test('Child props sets inner text if it is a string', () => {
    const gen = Generator({
        el: 'div',
        child: 'inner text'
    })

    const div = gen.$el

    expect(div).toBeInstanceOf(HTMLDivElement)
    expect(gen.getText()).toBe('inner text')
})

test('Child props can be an object defining single element', () => {
    const gen = Generator({
        el: 'div',
        inner: 'Root text',
        child: {
            el: 'span',
            attrs: {
                id: 'test-span'
            },
            child: 'Another div'
        }
    })

    const selected = gen.select('#test-span')
    const selectedText = selected.getText()

    expect(selected.$el).toBeInstanceOf(HTMLSpanElement)
    expect(selectedText).toBe('Another div')
})

test('Child props sets inner text when nested array', () => {
    const gen = Generator({
        el: 'div',
        inner: 'Root',
        child: [
            {
                el: 'span',
                inner: 'Child1',
                child: {
                    el: 'span',
                    attrs: {
                        id: 'inner-child'
                    },
                    child: 'Child2'
                }
            },
            {
                el: 'span',
                child: 'Child3'
            }
        ]
    })

    const div = gen.$el

    expect(div).toBeInstanceOf(HTMLDivElement)
    expect(gen.select('#inner-child').$el).toBeInstanceOf(HTMLSpanElement)
    // reset after selecting
    gen.reset()
    expect(gen.getText()).toBe('RootChild1Child2Child3')
})
