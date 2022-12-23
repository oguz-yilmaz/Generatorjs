import { GeneratorJs } from '@generatorjs'
import { stringStarts } from '@utils'
import { NoElementSelectedError } from '@errors'

export default function removeEvent(this: GeneratorJs, event) {
    if (!this.$selected || !(this.$selected instanceof Node)) {
        throw new NoElementSelectedError()
    }

    if (stringStarts(event, 'on')) {
        event = event.substring(2)
    }

    if (this.$selected.removeEventListener !== null) {
        this.$selected.removeEventListener(
            event,
            this.registeredEvents[event],
            true
        )
    } else if ('attachEvent' in this.$selected) {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        this.$selected.detachEvent(`on${event}`)
    } else {
        this.$selected[`on${event}`] = null
    }

    if (this.registeredEvents[event]) {
        delete this.registeredEvents[event]
    }

    return this
}
