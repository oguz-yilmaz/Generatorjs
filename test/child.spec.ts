import Generator from '@generator'
import { GeneratorJs } from '@generatorjs'

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
