import { stringStarts, isString } from '../utils'

export default function deleteEvent(event, handler) {
    const element = this.$selected ? this.$selected : this.$el
    if (!element) {
        throw new Error('No element selected.')
    }

    if (isString(handler) && typeof handler !== 'function') {
        handler = window[handler]
    }

    if (stringStarts(event, 'on')) {
        event = event.substr(2)
    }

    if (element.removeEventListener) {
        element.removeEventListener(event, handler, false)
    }
    else if (element.detachEvent) {
        element.detachEvent(`on${event}`, handler)
    }
    else {
        element[`on${event}`] = null
    }

    return this
}
