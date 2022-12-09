import { AbstractTask } from '@o.yilmaz/taskchain'
import type { ProcessorParameters } from 'types/attributes'

class AttributeProcessor extends AbstractTask {
    shouldRun({ definition }: ProcessorParameters) {
        return !!definition?.attrs
    }

    run({ elem, definition }: ProcessorParameters) {
        const { attrs } = definition

        ;(attrs || []).forEach((attr, value) => {
            elem.setAttribute(attr, value)
        })

        return elem
    }
}

export const attributeProcessor = new AttributeProcessor()
