import { isDef, isString } from '@utils'
import { GeneratorJs } from '@generatorjs'

const selectQuery = (fragment: DocumentFragment | null, selector: string) => {
    if (!isDef(selector) || !isString(selector)) {
        throw new Error('Specify selector string!')
    }

    if (!fragment) {
        throw new Error(
            'No collection found to be selected. Please check your definitions.'
        )
    }
}

export function select(this: GeneratorJs, selector: string): Node | null {
    selectQuery(this.$fragment, selector)

    return (this.$selected = this.$fragment!.querySelector(selector))
}

export function selectAll(
    this: GeneratorJs,
    selector: string
): NodeList | null {
    selectQuery(this.$fragment, selector)

    return (this.$selected = this.$fragment!.querySelectorAll(selector))
}
