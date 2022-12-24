import GeneratorJs from '@generator'

test('Removes single node definitions', () => {
    const gen = GeneratorJs({
        el: 'div',
        attrs: {
            id: 'test-id'
        }
    })

    expect(gen.$el).not.toBeNull()
    gen.select('#test-id').remove()
    expect(gen.$el).toBeNull()
    expect(gen.getSelected()).toBeNull()
})

test('Removes selected node', () => {
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

    expect(gen.$selected).toBeNull()
    gen.select('#test2')
    expect(gen.$selected).not.toBeNull()
    // @ts-ignore
    expect(gen.$el).toContainElement(gen.$selected)

    gen.remove()
    expect(gen.$selected).toBeNull()
    // @ts-ignore
    expect(gen.$el).not.toContainElement(gen.$selected)
})

test('Removes selected node list', () => {
    const gen = GeneratorJs({
        el: 'div',
        child: [
            {
                el: 'span'
            },
            {
                el: 'span'
            }
        ]
    })

    expect(gen.$selected).toBeNull()
    gen.selectAll('span')
    expect(gen.$selected).not.toBeNull()
    expect((gen.$selected as NodeList)?.length).toBe(2)

    gen.remove()
    gen.selectAll('span')
    expect(gen.$selected).toBeNull()
})
