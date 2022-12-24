import GeneratorJs from '@generator'
import $ from 'jquery'

test('Replaces single node definitions', () => {
    const gen = GeneratorJs({
        el: 'div',
        attrs: {
            id: 'test-id'
        }
    })

    const elem = $('<span>')[0]

    // @ts-ignore
    expect(gen.$el).not.toContainElement(elem)
    gen.select('#test-id')

    const selected = gen.$selected

    gen.replace(elem)

    // @ts-ignore
    expect(gen.$el).not.toContainElement(selected)
    // @ts-ignore
    expect(gen.$el).toContainElement(elem)
})

test('Replaces single node', () => {
    const gen = GeneratorJs({
        el: 'div',
        attrs: {
            id: 'test1'
        },
        child: [
            {
                el: 'div',
                attrs: {
                    id: 'test2'
                }
            },
            {
                el: 'div',
                attrs: {
                    id: 'test3'
                }
            }
        ]
    })

    const elem = $('<span>')[0]

    // @ts-ignore
    expect(gen.$el).not.toContainElement(elem)
    gen.select('#test3')

    expect(gen.$selected).not.toBeNull()
    const selected = gen.$selected

    // @ts-ignore
    expect(gen.$el).toContainElement(selected)

    gen.replace(elem)

    // @ts-ignore
    expect(gen.$el).not.toContainElement(selected)
    // @ts-ignore
    expect(gen.$el).toContainElement(elem)
})

test('Replaces multiple node', () => {
    const gen = GeneratorJs({
        el: 'div',
        attrs: {
            id: 'test'
        },
        child: [
            {
                el: 'h1'
            },
            {
                el: 'h1'
            }
        ]
    })

    const elem = $('<span>')[0]

    // @ts-ignore
    expect(gen.$el).not.toContainElement(elem)
    gen.selectAll('h1')

    expect((gen.$selected as NodeList)?.length).toBe(2)

    gen.replace(elem).selectAll('span')

    expect((gen.$selected as NodeList)?.length).toBe(2)
})
