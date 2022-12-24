import { TaskChain } from '@o.yilmaz/taskchain'
import { InnerProcessor } from '@dom/attributes/processors/InnerProcessor'
import { AttributeProcessor } from '@dom/attributes/processors/AttributeProcessor'
import { ChildProcessor } from '@dom/attributes/processors/ChildProcessor'
import type { GeneratorDefinitions } from 'types'
import { appendTo, createElement } from './utils'

export const create = (
    definitions: GeneratorDefinitions
): DocumentFragment | null => {
    if (!definitions) {
        throw new Error('No definition specified')
    }

    const elem = createElement(definitions.el)

    const processors = new TaskChain({
        definitions,
        create,
        elem
    })

    processors
        .registerTask(new InnerProcessor())
        .registerTask(new AttributeProcessor())
        .registerTask(new ChildProcessor())
        .processChain()

    const fragment = window.document.createDocumentFragment()
    appendTo(fragment, elem)

    return fragment
}
