import { AbstractTask } from '@o.yilmaz/taskchain'
import type { ProcessorParameters } from 'types/attributes'
import { setHtml } from '@utils'

export class InnerProcessor extends AbstractTask {
    shouldRun({ definitions }: ProcessorParameters) {
        return !!definitions?.inner
    }

    // @todo with inner attribute we directly replace the innerHTML with another
    // DOM Element | GeneratorJs object | NodeList
    run({ elem, definitions }: ProcessorParameters) {
        const { inner } = definitions

        return setHtml(elem, inner)
    }
}
