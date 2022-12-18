import Generator from '@generator'
import { GeneratorJs } from '@generatorjs'

let gen: GeneratorJs = Generator({
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

beforeEach(() => {
    gen.reset()
})

test('Selects a single element', () => {
    const selected = gen.select('#test-id').getSelected()

    expect(selected).toHaveAttribute('name', 'test-name')
})

test('Selects multiple element', () => {
    const selected = gen.selectAll('span').getSelected()

    expect(selected).toBeInstanceOf(NodeList)
    expect((selected as NodeList).item(0)).toBeInstanceOf(HTMLSpanElement)
    expect((selected as NodeList).item(1)).toBeInstanceOf(HTMLSpanElement)
})

test('Resets selected', () => {
    const selected = gen.select('#test-id').reset().getSelected()

    expect(selected).toBeNull()
})
