import Generator from '@generator'

test('Sets attributes to an element', () => {
    const gen = Generator({
        el: 'div',
        child: 'inner text',
        attrs: {
            name: 'test-name',
            id: 'test-id',
            attr1: 'attr1',
            attr2: 'attr2',
            disabled: ''
        }
    })

    const div = gen.$el

    // @ts-ignore
    expect(div).toHaveAttribute('name', 'test-name')
    // @ts-ignore
    expect(div).toHaveAttribute('id', 'test-id')
    // @ts-ignore
    expect(div).toHaveAttribute('attr1', 'attr1')
    // @ts-ignore
    expect(div).toHaveAttribute('disabled')
})

test('Sets attributes to a child element', () => {
    const gen = Generator({
        el: 'div',
        child: {
            el: 'span',
            attrs: {
                checked: ''
            }
        }
    })

    const child = gen.select('span').$selected

    // @ts-ignore
    expect(child).toHaveAttribute('checked')
})
