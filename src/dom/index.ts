import { TaskChain } from '@o.yilmaz/taskchain'
import { innerProcessor } from '@dom/attributes/processors/InnerProcessor'
import { attributeProcessor } from '@dom/attributes/processors/AttributeProcessor'
import { childProcessor } from '@dom/attributes/processors/ChildProcessor'
import type { GeneratorDefinitions } from 'types'
import { createElement } from './utils'

export const create = (
    definitions: GeneratorDefinitions
): DocumentFragment | null => {
    if (!definitions) {
        throw new Error('No definition specified')
    }

    /**
     * The DocumentFragment interface represents a minimal document object that has no parent.
     *
     * It is used as a in-memory version of Document that stores a segment of a document structure
     * comprised of nodes just like a standard document. The key difference is that document fragment
     * isn't part of the active document tree structure. Changes made to the fragment don't affect
     * the document.
     *
     * @param DocumentFragment fragment
     */
    const fragment = window.document.createDocumentFragment()
    const defs =
        definitions && !Array.isArray(definitions) ? [definitions] : definitions

    for (let i = 0; i < defs.length; i = +1) {
        const currentDefinition = defs[i]

        let elem = currentDefinition?.el
            ? createElement(currentDefinition.el)
            : null

        const chain = new TaskChain({
            definition: currentDefinition,
            create,
            elem
        })

        chain.registerTask(innerProcessor)
        chain.registerTask(attributeProcessor)
        chain.registerTask(childProcessor)

        const elem = chain.processChain()

        if (elem) {
            fragment.appendChild(elem)
        }
    }

    return fragment
}
