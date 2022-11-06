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
    public $fragment: DocumentFragment | null = null

    public render = render

    public addEvent = addEvent

    public append = append

    public attachTo = attachTo

    public deleteEvent = deleteEvent

    public get = get

    public getString = getString

    public prevState = prevState

    public reset = reset

    public setContent = setContent

    public setText = setText

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
