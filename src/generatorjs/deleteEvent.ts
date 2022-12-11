import GeneratorJs from '@generator'
import { stringStarts, isString } from '@utils'

export default function deleteEvent(this: GeneratorJs, event, handler) {
    if (!this.$selected) {
        throw new Error('No this.$selected selected.')
    }

    if (isString(handler) && typeof handler !== 'function') {
        handler = window[handler]
    }

    if (stringStarts(event, 'on')) {
        event = event.substr(2)
    }

    if (this.$selected instanceof Node) {
        if (this.$selected && this.$selected.removeEventListener !== null) {
            this.$selected.removeEventListener(event, handler, false)
            // @ts-ignore
        } else if (this.$selected.detachEvent) {
            // @ts-ignore
            this.$selected.detachEvent(`on${event}`, handler)
        } else {
            this.$selected[`on${event}`] = null
        }
    }

    return this
}
