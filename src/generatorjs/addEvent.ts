import { GeneratorJs } from '@generatorjs'
import { stringStarts, isString } from '@utils'
import { NoElementSelectedError } from '@errors'

export default function addEvent(this: GeneratorJs, event: string, handler) {
    if (!this.$selected || !(this.$selected instanceof Node)) {
        throw new NoElementSelectedError()
    }

    if (stringStarts(event, 'on')) {
        event = event.substring(2)
    }

    if (isString(handler) && typeof handler !== 'function') {
        handler = window[handler]
    }

    if ('addEventListener' in this.$selected) {
        this.$selected.addEventListener(event, handler, true)
    } else if ('attachEvent' in this.$selected) {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        this.$selected.attachEvent(`on${event}`, handler)
    } else {
        window[`on${event}`] = handler
    }

    this.registeredEvents[event] = handler

    return this
}
