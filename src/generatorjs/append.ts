import { GeneratorJs } from '@generatorjs'
import { appendTo } from '@dom/utils'

export default function append(
    this: GeneratorJs,
    nodes: NodeList | Node | GeneratorJs
) {
    const elem = this.$selected ?? this.$fragment

    if (!elem) {
        throw new Error(
            'No element found to be appended. Check your definitions or select an element to append to.'
        )
    }

    if (nodes instanceof GeneratorJs) {
        appendTo(elem, nodes.getFragment())
    } else {
        appendTo(elem, nodes)
    }

    return this
}
