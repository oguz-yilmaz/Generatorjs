import { GeneratorJs } from '@generatorjs'
import { stringStarts, isString } from '@utils'

export default function deleteEvent(this: GeneratorJs, event, handler) {
    if (!this.$selected || !(this.$selected instanceof Node)) {
        throw new Error('No this.$selected selected.')
    }

    if (isString(handler) && typeof handler !== 'function') {
        handler = window[handler]
    }

    if (stringStarts(event, 'on')) {
        event = event.substr(2)
    }

    if (this.$selected.removeEventListener !== null) {
        this.$selected.removeEventListener(event, handler, false)
    } else if ('attachEvent' in this.$selected) {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        this.$selected.detachEvent(`on${event}`, handler)
    } else {
        this.$selected[`on${event}`] = null
    }

    return this
}
