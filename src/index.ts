import {
    render,
    addEvent,
    append,
    attachTo,
    deleteEvent,
    get,
    getString,
    prevState,
    reset,
    setContent,
    setText
} from '@generatorjs'
import { isDef, isPlainObject, isObject } from '@utils'
import { createElementsObjectUntil } from '@dom-utils'

class GeneratorJs {
    get = get
    reset = reset
    render = render
    append = append
    setText = setText
    attachTo = attachTo
    addEvent = addEvent
    getString = getString
    prevState = prevState
    setContent = setContent
    deleteEvent = deleteEvent

    $el: HTMLElement | null = null
    $prevEl: HTMLElement | null = null
    $selected: HTMLElement | null = null
    $fragment: DocumentFragment | null = null
    $prevFragment: DocumentFragment | null = null

    constructor(elementsObject = {}) {
        let renderedDom = null

        if (!isDef(elementsObject) || !isPlainObject(elementsObject)) {
            throw new TypeError(
                `Element passed to constructor must be an object! ${typeof elementsObject} is given!`
            )
        }

        renderedDom = createElementsObjectUntil(elementsObject)

        if (renderedDom !== null && isObject(renderedDom)) {
            this.$fragment = renderedDom
        }

        this.render()
    }
}

export default GeneratorJs
