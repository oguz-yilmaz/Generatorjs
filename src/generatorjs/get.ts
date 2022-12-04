import GeneratorJs from '@generator'
import { TAG_NAMES } from '@constants'
import { stringStarts, isString } from '@utils'
import { createElement } from '@dom/utils'
import selectElement from './selectElement'

// It's forbidden in JS to have a parameter name as `this` so
// TS uses this to defined explicitly the value of this for a function.
export default function get(this: GeneratorJs, ...args) {
    if (!this.$fragment) {
        return null
    }

    const len = args.length
    let currentElement
    let fragment

    // todo
    // const selector = new ElementSelector(this.$fragment)
    // return selector->select(len);

    // move this to select method
    if (len > 3) {
        throw new TypeError(
            'Wrong number of argument supplied to GeneratorJs.get function.Max 3 allowed based on usage.'
        )
    } else if (len === 0) {
        return this.$fragment
    } else if (len === 1) {
        fragment = this.$fragment.cloneNode(true)
        const elem = args[0]

        if (!isString(elem)) {
            throw new TypeError(
                `Argument passed should be a string. ${typeof elem} is given!`
            )
        }

        if (stringStarts(elem, '.')) {
            currentElement = selectElement.call(this, fragment, elem, 'class')
        } else if (stringStarts(elem, '#')) {
            currentElement = selectElement.call(this, fragment, elem, 'id')
        } else if (stringStarts(elem, 'name=')) {
            const name = elem.split('=')[1]
            currentElement = selectElement.call(this, fragment, name, 'name')
            // for attribute selector
        } else if (stringStarts(elem, '[') || elem.indexOf('[') !== -1) {
            currentElement = selectElement.call(this, fragment, elem, 'attr')
        } else if (elem === '*') {
            const div = createElement('div')
            div.appendChild(fragment)
            currentElement = div.firstChild
        } else if (TAG_NAMES.indexOf(elem.toLowerCase())) {
            currentElement = selectElement.call(
                this,
                fragment,
                elem.toLowerCase(),
                'tag'
            )
        } else {
            // here is a special Generatorjs selector
            // .get('p 4')
            // currentElement = this.selector(elem);
        }

        this.$prevEl = this.$selected ? this.$selected : this.$el
        this.$selected = currentElement
    }

    return this
}
