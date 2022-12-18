import { isDef, isString } from '@utils'
import { GeneratorJs } from '@generatorjs'

const assertSelector = (
    fragment: DocumentFragment | null,
    selector: string
) => {
    if (!isDef(selector) || !isString(selector)) {
        throw new Error('Specify selector string!')
    }

    if (!fragment) {
        throw new Error(
            'No collection found to be selected. Please check your definitions.'
        )
    }
}

export function select(this: GeneratorJs, selector: string): GeneratorJs {
    assertSelector(this.$fragment, selector)

    this.$selected = this.$fragment!.querySelector(selector)

    return this
}

export function selectAll(this: GeneratorJs, selector: string): GeneratorJs {
    assertSelector(this.$fragment, selector)

    this.$selected = this.$fragment!.querySelectorAll(selector)

    return this
}
