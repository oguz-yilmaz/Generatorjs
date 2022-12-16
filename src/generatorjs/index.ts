import { isPlainObject } from '@utils'
import type { GeneratorDefinitions } from 'types'
import { create, getText } from '@dom'

import addEvent from './addEvent'
import append from './append'
import attachTo from './attachTo'
import deleteEvent from './deleteEvent'
import reset from './reset'
import setContent from './setContent'
import { select, selectAll } from './selects'

export class GeneratorJs {
    // Node > HTMLElement
    $prevSelected: Node | NodeList | null = null
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

    getHtml(): HTMLCollection | Node | null {
        const fragment = this.getFragment()

        return fragment ? fragment.children : null
    }
}
