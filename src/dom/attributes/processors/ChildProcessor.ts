import { AbstractTask } from '@o.yilmaz/taskchain'
import type { ProcessorParameters } from 'types/attributes'
import { emptyArray, forEach } from '@utils'
import { appendTo, createElement } from '@dom/utils'

class ChildProcessor extends AbstractTask {
    shouldRun({ definitions }: ProcessorParameters) {
        return !!definitions?.child
    }

    run({ elem, definitions, create }: ProcessorParameters) {
        const { child } = definitions

        if (Array.isArray(child) && !emptyArray(child)) {
            const childElements = createElement('div')

            forEach(child, (k, childDefinition) =>
                appendTo(childElements, create(childDefinition))
            )

            appendTo(elem, childElements)
        } else {
            throw new TypeError(
                'Child prop should contain array of Generator object.'
            )
        }

        return elem
    }
}

export const childProcessor = new ChildProcessor()
