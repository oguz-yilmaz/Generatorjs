import { AbstractTask } from '@o.yilmaz/taskchain'
import type { ProcessorParameters } from 'types/attributes'

export class EventsProcessor extends AbstractTask {
    shouldRun({ definitions }: ProcessorParameters) {
        return !!definitions?.events
    }

    run = ({ elem, definitions, generator }: ProcessorParameters) => {
        const { events } = definitions

        if (!events) {
            throw new Error('No events specified.')
        }

        Object.keys(events).forEach((eventName) => {
            const handler = events[eventName]

            generator.$selected = elem
            generator.addEvent(eventName, handler)
        })

        generator.reset()

        return elem
    }
}
