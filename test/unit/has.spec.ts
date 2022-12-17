import Generator from '@generator'
import { GeneratorJs } from '@generatorjs'

test('Constructor returns proper objects', () => {
    const gen = Generator({
        el: 'div',
        attrs: {
            id: 'test-id',
            name: 'test-name'
        }
    })

    const fragment = gen.getFragment()

    expect(gen).toBeInstanceOf(GeneratorJs)
    expect(fragment).toBeInstanceOf(DocumentFragment)
})
