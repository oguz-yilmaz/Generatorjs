import GeneratorJs from '@generator'

test('Resets selected', () => {
    const gen = GeneratorJs({
        el: 'div',
        attrs: {
            id: 'test-id'
        }
    })

    expect(gen.getSelected()).toBeNull()
    gen.select('#test-id')
    expect(gen.getSelected()).not.toBeNull()

    gen.reset()
    expect(gen.getSelected()).toBeNull()
})
