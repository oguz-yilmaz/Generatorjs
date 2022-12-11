import GeneratorJs from '@generator'

test('Creates a single div', () => {
    expect(
        new GeneratorJs({
            el: 'div'
        }).getString()
    ).toBe('<div></div>')
})
