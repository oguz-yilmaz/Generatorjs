import Generator from '@generator'
import userEvent from '@testing-library/user-event'
import { NoElementSelectedError } from '@errors'

test('Click event works properly with addEvent method', async () => {
    let isClicked = false

    const gen = Generator({
        el: 'div',
        attrs: {
            id: 'test-id',
            name: 'test-name'
        }
    })

    const user = userEvent.setup()

    gen.select('#test-id').addEvent('click', (event) => (isClicked = true))

    expect(isClicked).toBe(false)
    await user.click(gen.getSelected() as HTMLElement)
    expect(isClicked).toBe(true)
})

test('Throws error before selecting an element inside the document', async () => {
    expect(() => {
        const gen = Generator({
            el: 'div'
        })

        const user = userEvent.setup()

        gen.addEvent('click', () => null)

        user.click(gen.getSelected() as HTMLElement)
    }).toThrow(NoElementSelectedError)
})

test('Registering same handler will replace the first handler', async () => {
    let res = 'first'

    const gen = Generator({
        el: 'div',
        attrs: {
            id: 'test-id',
            name: 'test-name'
        }
    })

    const user = userEvent.setup()

    gen.select('#test-id').addEvent('click', (event) => (res = 'second'))

    expect(res).toBe('first')
    await user.click(gen.getSelected() as HTMLElement)
    expect(res).toBe('second')

    gen.select('#test-id').addEvent('click', (event) => (res = 'third'))

    expect(res).toBe('second')
    await user.click(gen.getSelected() as HTMLElement)
    expect(res).toBe('third')
})
