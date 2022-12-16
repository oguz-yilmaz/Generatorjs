import { AbstractTask } from '@o.yilmaz/taskchain'
import type { ProcessorParameters } from 'types/attributes'
import { emptyArray, forEach } from '@utils'
import { appendTo, isNode } from '@dom/utils'

export class ChildProcessor extends AbstractTask {
    shouldRun({ definitions }: ProcessorParameters) {
        return !!definitions?.child
    }

    // @todo implement validators for definitions
    validator(currentLevelDef, parentDef): boolean {
        return true
    }

    run({ elem, definitions, create }: ProcessorParameters) {
        if (!isNode(elem)) {
            throw new Error('No parent element to append child(s).')
        }

        const { child } = definitions

        if (Array.isArray(child) && !emptyArray(child)) {
            const fragment: DocumentFragment =
                window.document.createDocumentFragment()

            forEach(child, (k, childDefinition) => {
                const childFragment = create(childDefinition)

                appendTo(fragment, childFragment)
            })

            appendTo(elem, fragment)
        } else {
            throw new TypeError(
                'Child prop should contain array of Generator object.'
            )
        }

        return elem
    }
}
