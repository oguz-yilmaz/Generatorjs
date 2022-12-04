import { AbstractTask } from '@o.yilmaz/taskchain'
import { hasOwn } from '@utils'
import { Attributes } from '@dom/attributes'
import type { GeneratorDefinitions } from 'types/attributes'

export default class AttributeProcessor extends AbstractTask {
    shouldRun(params: GeneratorDefinitions) {
        const { attr } = params

        return hasOwn(attr, Attributes.ATTRIBUTES)
    }

    run(params: GeneratorDefinitions) {}
}
