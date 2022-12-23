import Generator from '@generator'

test('Inner can set text content of an element', () => {
    const gen = Generator({
        el: 'div',
        inner: 'inner text'
    })

    expect(gen.getText()).toBe('inner text')
})

test('Inner can set text content of an nested element', () => {
    const gen = Generator({
        el: 'div',
        child: {
            el: 'span',
            inner: 'inner text'
        }
    })

    expect(gen.getText()).toBe('inner text')
})

test('Inner can set content of an another GeneratorJs object', () => {
    const gen1 = Generator({
        el: 'div',
        child: 'inner text 1'
    })

    const gen2 = Generator({
        el: 'div',
        inner: gen1
    })

    expect(gen2.getText()).toBe('inner text 1')
})

test('Inner can set content of an another GeneratorJs object', () => {
    const gen = Generator({
        el: 'div',
        inner: document.createElement('span')
    })

    expect(gen.$el!.firstChild).toBeInstanceOf(HTMLSpanElement)
})
