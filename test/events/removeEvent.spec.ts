import Generator from '@generator'
import userEvent from '@testing-library/user-event'
import { NoElementSelectedError } from '@errors'

test('Removes events properly', async () => {
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

    isClicked = false
    gen.select('#test-id').removeEvent('click')

    await user.click(gen.getSelected() as HTMLElement)
    expect(isClicked).toBe(false)
})

test('Throws error before selecting an element inside the document', async () => {
    expect(() => {
        const gen = Generator({
            el: 'div'
        })

        gen.removeEvent('click')
    }).toThrow(NoElementSelectedError)
})

test('Removing an event twice will not throw error', async () => {
    expect(() => {
        const gen = Generator({
            el: 'div',
            attrs: {
                id: 'test-id',
                name: 'test-name'
            }
        })

        gen.select('#test-id').removeEvent('click')
        gen.select('#test-id').removeEvent('click')
    }).not.toThrow()
})
