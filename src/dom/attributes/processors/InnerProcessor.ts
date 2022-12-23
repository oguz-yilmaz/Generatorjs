import { AbstractTask } from '@o.yilmaz/taskchain'
import type { ProcessorParameters } from 'types/attributes'
import { isString, setHtml } from '@utils'
import { GeneratorJs } from '@generatorjs'
import { appendTo } from '@dom/utils'

export class InnerProcessor extends AbstractTask {
    shouldRun({ definitions }: ProcessorParameters) {
        return !!definitions?.inner
    }

    run({ elem, definitions }: ProcessorParameters) {
        const { inner } = definitions

        if (inner instanceof GeneratorJs && inner.$el) {
            appendTo(elem, inner.$el)

            return elem
        }

        if (isString(inner)) {
            return setHtml(elem, inner)
        }

        appendTo(elem, inner)

        return elem
    }
}
