import {
    addEvent,
    append,
    attachTo,
    deleteEvent,
    reset,
    setContent,
    setText
} from '@generatorjs'
import { isPlainObject } from '@utils'
import type { GeneratorDefinitions } from 'types'
import { create } from '@dom'

class GeneratorJs {
    // Node > HTMLElement
    $prevSelected: Node | NodeList | null = null
    $selected: Node | NodeList | null = null
    $fragment: DocumentFragment | null = null

    reset = reset
    append = append
    setText = setText
    attachTo = attachTo
    addEvent = addEvent
    setContent = setContent
    deleteEvent = deleteEvent

    constructor(definitions: GeneratorDefinitions) {
        // todo verify definitions
        if (!definitions || !isPlainObject(definitions)) {
            throw new TypeError(
                `Element passed to constructor must be an object! ${typeof definitions} is given!`
            )
        }

        this.$fragment = create(definitions)
    }

    get(): NodeList | HTMLCollection | null {
        if (this.$fragment && this.$fragment instanceof DocumentFragment) {
            return this.$fragment.children
        }

        return null
    }
}

export default GeneratorJs
