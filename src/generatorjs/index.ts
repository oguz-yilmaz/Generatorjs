import { isPlainObject } from '@utils'
import type { GeneratorDefinitions, RegisteredEvents } from 'types'
import { create, getText } from '@dom'

import addEvent from './addEvent'
import append from './append'
import attachTo from './attachTo'
import removeEvent from './removeEvent'
import reset from './reset'
import setContent from './setContent'
import { select, selectAll } from './selects'

export class GeneratorJs {
    registeredEvents: RegisteredEvents = {}

    // Node > HTMLElement
    $selected: Node | NodeList | null = null
    $fragment: DocumentFragment | null = null

    reset = reset
    select = select
    append = append
    getText = getText
    addEvent = addEvent
    attachTo = attachTo
    selectAll = selectAll
    setContent = setContent
    removeEvent = removeEvent

    constructor(definitions: GeneratorDefinitions) {
        // todo verify definitions
        if (!definitions || !isPlainObject(definitions)) {
            throw new TypeError(
                `Element passed to constructor must be an object! ${typeof definitions} is given!`
            )
        }

        this.$fragment = create(definitions)
    }

    get $el(): Node | HTMLElement | null {
        if (this.$selected instanceof Node) {
            return this.$selected
        }

        if (this.$fragment) {
            return this.$fragment.firstElementChild
        }

        return null
    }

    getSelected() {
        return this.$selected
    }

    getFragment(): DocumentFragment | null {
        if (this.$fragment && this.$fragment instanceof DocumentFragment) {
            return this.$fragment
        }

        return null
    }
}
