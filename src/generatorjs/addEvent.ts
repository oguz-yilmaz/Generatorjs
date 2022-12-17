import { GeneratorJs } from '@generatorjs'
import { stringStarts, isString } from '@utils'

export default function addEvent(this: GeneratorJs, event: string, handler) {
    if (!this.$selected) {
        throw new Error('No element selected.')
    }

    if (stringStarts(event, 'on')) {
        event = event.substr(2)
    }

    if (isString(handler) && typeof handler !== 'function') {
        handler = window[handler]
    }

    if ('addEventListener' in this.$selected) {
        this.$selected.addEventListener(event, handler, false)
    } else if ('attachEvent' in this.$selected) {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        this.$selected.attachEvent(`on${event}`, handler)
    } else {
        window[`on${event}`] = handler
    }

    return this
}
