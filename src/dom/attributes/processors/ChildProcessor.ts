import { AbstractTask } from '@o.yilmaz/taskchain'
import type { ProcessorParameters } from 'types/attributes'

class ChildProcessor extends AbstractTask {
	shouldRun({ definition }: ProcessorParameters) {
		return !!definition?.child
	}

	run({ elem, definition, create }: ProcessorParameters) {
		const { child } = definition

		if (Array.isArray(child) && !emptyArray(child)) {
			const childElement = create(child)

			appendTo(elem, childElement)
		} else {
			throw new TypeError(
				'Child prop should contain array of Generator object.'
			)
		}

		return elem
	}
}

export const childProcessor = new ChildProcessor()
