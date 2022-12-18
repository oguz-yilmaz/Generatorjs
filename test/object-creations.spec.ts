import Generator from '@generator'

test('Creates a single div', () => {
    const gen = Generator({
        el: 'div'
    })

    expect(gen.getFragment()!.firstElementChild).toBeInstanceOf(HTMLDivElement)
})
