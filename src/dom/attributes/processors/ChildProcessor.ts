import { AbstractTask } from '@o.yilmaz/taskchain'
import type { ProcessorParameters } from 'types/attributes'
import { emptyArray, forEach } from '@utils'
import { appendTo } from '@dom/utils'

export class ChildProcessor extends AbstractTask {
    shouldRun({ definitions }: ProcessorParameters) {
        return !!definitions?.child
    }

    run({ elem, definitions, create }: ProcessorParameters) {
        const { child } = definitions

        if (Array.isArray(child) && !emptyArray(child)) {
            const fragment: DocumentFragment =
                window.document.createDocumentFragment()

            try {
                forEach(child, (k, childDefinition) =>
                    appendTo(fragment, create(childDefinition))
                )
            } catch (e) {
                debugger
            }

            appendTo(elem, fragment.children)
        } else {
            throw new TypeError(
                'Child prop should contain array of Generator object.'
            )
        }

        return elem
    }
}
