import { AbstractTask } from '@o.yilmaz/taskchain'
import type { ProcessorParameters } from 'types/attributes'
import { forEach } from '@utils'

export class AttributeProcessor extends AbstractTask {
    shouldRun({ definitions }: ProcessorParameters) {
        return !!definitions?.attrs
    }

    run({ elem, definitions }: ProcessorParameters) {
        const { attrs } = definitions

        forEach(attrs || [], (attr, value) => {
            elem.setAttribute(attr, value)
        })

        return elem
    }
}
