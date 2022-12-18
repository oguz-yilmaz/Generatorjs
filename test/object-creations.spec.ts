import Generator from '@generator'

test('Creates a single div', () => {
    expect(
        Generator({
            el: 'div'
        })
    ).toBe('<div></div>')
})
