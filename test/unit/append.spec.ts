import GeneratorJs from '@generator'
import { screen } from '@testing-library/dom'

test('appends ul to a single div', () => {
    const expected = `
        <div>
           <ul></ul>
        </div>
    `

    const gen = new GeneratorJs({
        el: 'div'
    })

    gen.append(document.createElement('ul'))

    expect(gen.$el).toContainHTML(''.stripSpaces(expected))
})

test('appends div to a single div with innerText', () => {
    const expected = `
        <div>
            Example
            <div></div>
        </div>
    `

    const gen = new GeneratorJs({
        el: 'div',
        inner: 'Example'
    })

    gen.append(document.createElement('div'))

    expect(gen.$el).toContainHTML(''.stripSpaces(expected))
})
