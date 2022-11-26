import GeneratorJs from '@generator'
import { stringStarts, isString } from '@utils'

export default function addEvent(this: GeneratorJs, event, handler) {
    const currentElement = this.$selected ? this.$selected : this.$el
    if (!currentElement) {
        throw new Error('No element selected.')
    }

    if (stringStarts(event, 'on')) {
        event = event.substr(2)
    }

    if (isString(handler) && typeof handler !== 'function') {
        handler = window[handler]
    }

    if (currentElement.addEventListener) {
        currentElement.addEventListener(event, handler, false)
    } else if (currentElement.attachEvent) {
        currentElement.attachEvent(`on${event}`, handler)
    } else {
        window[`on${event}`] = handler
    }

    return this
}
