import {
    addEvent,
    append,
    attachTo,
    deleteEvent,
    reset,
    setContent,
    select,
    selectAll
} from '@generatorjs'
import { isPlainObject } from '@utils'
import type { GeneratorDefinitions } from 'types'
import { create } from '@dom'

export class GeneratorJs {
    // Node > HTMLElement
    $prevSelected: Node | NodeList | null = null
    $selected: Node | NodeList | null = null
    $fragment: DocumentFragment | null = null

    reset = reset
    select = select
    append = append
    addEvent = addEvent
    attachTo = attachTo
    selectAll = selectAll
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

    getFragment(): DocumentFragment | null {
        if (this.$fragment && this.$fragment instanceof DocumentFragment) {
            return this.$fragment
        }

        return null
    }

    getHtml(): NodeList | HTMLCollection | null {
        const fragment = this.getFragment()

        return fragment ? fragment.children : null
    }
}

// Pass down all other document method & props to internal Fragment
const documentHandler = {
    get(generator, prop): any {
        if (!generator[prop]) {
            const fragment = generator.getFragment()

            return fragment[prop]
        }

        return generator[prop]
    }
}

export default function factory(definitions: GeneratorDefinitions) {
    return new Proxy(new GeneratorJs(definitions), documentHandler)
}
