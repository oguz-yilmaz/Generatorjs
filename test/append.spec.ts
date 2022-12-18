import GeneratorJs from '@generator'
import $ from 'jquery'

/**
 * @see {@link https://github.com/testing-library/jest-dom#tocontainelement}
 */
test('appends ul to a single div', () => {
    const gen = GeneratorJs({
        el: 'div',
        inner: 'Test div'
    })

    const ul = $(`<ul>This is a test ul</ul>`).get(0)!

    gen.append(ul)

    expect(gen.getFragment().lastElementChild).toContainElement(ul)
    expect(gen.getText()).toBe('Test divThis is a test ul')
})
