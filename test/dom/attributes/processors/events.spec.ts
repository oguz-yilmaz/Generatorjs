import Generator from '@generator'
import userEvent from '@testing-library/user-event'
import { NoElementSelectedError } from '@errors'

test('Click event works properly with events attribute', async () => {
    let isClicked = false

    const gen = Generator({
        el: 'div',
        attrs: {
            id: 'test-id',
            name: 'test-name'
        },
        events: {
            click: (event) => (isClicked = true)
        }
    })

    const user = userEvent.setup()

    expect(isClicked).toBe(false)
    await user.click(gen.select('#test-id').getSelected() as HTMLElement)
    expect(isClicked).toBe(true)
})

test('Click event works properly with multiple events handler', async () => {
    let isClicked = false
    let isDblClicked = false

    const gen = Generator({
        el: 'div',
        attrs: {
            id: 'test-id',
            name: 'test-name'
        },
        events: {
            click: (event) => (isClicked = true),
            dblclick: (event) => (isDblClicked = true)
        },
        child: {
            el: 'input',
            attrs: {
                id: 'input-id',
                type: 'text'
            },
            events: {
                keyup: (event) => {
                    console.log('He is typing')
                }
            }
        }
    })

    const user = userEvent.setup()

    expect(isClicked).toBe(false)
    expect(isDblClicked).toBe(false)
    await user.click(gen.select('#test-id').getSelected() as HTMLElement)
    await user.dblClick(gen.select('#test-id').getSelected() as HTMLElement)
    expect(isClicked).toBe(true)
    expect(isDblClicked).toBe(true)
})
