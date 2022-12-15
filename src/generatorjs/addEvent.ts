import { GeneratorJs } from '@generator'
import { stringStarts, isString } from '@utils'

export default function addEvent(this: GeneratorJs, event, handler) {
    if (!this.$selected) {
        throw new Error('No element selected.')
    }

    if (stringStarts(event, 'on')) {
        event = event.substr(2)
    }

    if (isString(handler) && typeof handler !== 'function') {
        handler = window[handler]
    }

    // todo proper type check
    // @ts-ignore
    if (this.$selected?.addEventListener) {
        // @ts-ignore
        this.$selected.addEventListener(event, handler, false)
        // @ts-ignore
    } else if (this.$selected.attachEvent) {
        // @ts-ignore
        this.$selected.attachEvent(`on${event}`, handler)
    } else {
        window[`on${event}`] = handler
    }

    return this
}
