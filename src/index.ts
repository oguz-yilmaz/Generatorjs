import {
    render,
    addEvent,
    append,
    attachTo,
    deleteEvent,
    get,
    prevState,
    reset,
    setContent,
    setText
} from '@generatorjs'
import { isDef, isPlainObject, isObject } from '@utils'
import { create } from '@dom'

class GeneratorJs {
    get = get
    reset = reset
    render = render
    append = append
    setText = setText
    attachTo = attachTo
    addEvent = addEvent
    prevState = prevState
    setContent = setContent
    deleteEvent = deleteEvent

    $el: ChildNode | null = null
    $prevEl: HTMLElement | null = null
    $selected: HTMLElement | null = null
    $fragment: DocumentFragment | null = null
    $prevFragment: DocumentFragment | null = null

    constructor(definitions = {}) {
        if (!isDef(definitions) || !isPlainObject(definitions)) {
            throw new TypeError(
                `Element passed to constructor must be an object! ${typeof definitions} is given!`
            )
        }

        const renderedDom = create(definitions)

        if (renderedDom !== null && isObject(renderedDom)) {
            this.$fragment = renderedDom
        }

        this.render()
    }
}

export default GeneratorJs
