import { isPlainObject } from '@utils'
import type { GeneratorDefinitions, RegisteredEvents } from 'types'
import { create, getText } from '@dom'
import { Config } from 'types'
import addEvent from './addEvent'
import append from './append'
import attachTo from './attachTo'
import remove from './remove'
import replace from './replace'
import removeEvent from './removeEvent'
import reset from './reset'
import setContent from './setContent'
import { select, selectAll } from './selects'

export class GeneratorJs {
    registeredEvents: RegisteredEvents = {}
    config: Config = {
        dev: false
    }

    // Node > HTMLElement
    $selected: Node | NodeList | null = null
    $fragment: DocumentFragment | null = null

    reset = reset
    select = select
    append = append
    remove = remove
    create = create
    replace = replace
    getText = getText
    addEvent = addEvent
    attachTo = attachTo
    selectAll = selectAll
    setContent = setContent
    removeEvent = removeEvent

    constructor(
        definitions: GeneratorDefinitions,
        userConfig: Config | null = null
    ) {
        // todo verify definitions
        if (!definitions || !isPlainObject(definitions)) {
            throw new TypeError(
                `Element passed to constructor must be an object! ${typeof definitions} is given!`
            )
        }

        if (userConfig) {
            this.parseConfig(userConfig)
        }

        this.$fragment = this.create(definitions)
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

    parseConfig(userConfig: Config) {
        this.config = { ...this.config, ...userConfig }
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
