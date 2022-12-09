import { AbstractTask } from '@o.yilmaz/taskchain'
import type { ProcessorParameters } from 'types/attributes'
import { setHtml } from '@utils'

class InnerProcessor extends AbstractTask {
	shouldRun({ definition }: ProcessorParameters) {
		return !!definition?.inner
	}

	// @todo with inner attribute we directly replace the innerHTML with another
	// DOM Element | Generatorjs object | NodeList
	run({ elem, definition }: ProcessorParameters) {
		const { inner } = definition

		return setHtml(elem, inner)
	}
}

export const innerProcessor = new InnerProcessor()
