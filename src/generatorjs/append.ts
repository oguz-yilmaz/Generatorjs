import { GeneratorJs } from '@generatorjs'
import { appendTo } from '@dom/utils'

export default function append(
    this: GeneratorJs,
    nodes: NodeList | Node | GeneratorJs
) {
    if (nodes instanceof GeneratorJs) {
        appendTo(this.$fragment, nodes.getFragment())
    } else {
        appendTo(this.$fragment, nodes)
    }

    return this
}
