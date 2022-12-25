import { NoElementSelectedError, NoElementSpecifiedError } from '@errors'
import { GeneratorJs } from '@generatorjs'
import { appendTo, removeNodes } from '@dom/utils'

export default function replace(
    this: GeneratorJs,
    node: Node | NodeList | GeneratorJs | string | undefined | (Node | string)[]
): GeneratorJs {
    if (!node) {
        throw new NoElementSpecifiedError()
    }

    if (!this.$selected) {
        throw new NoElementSelectedError()
    }

    const element = node instanceof GeneratorJs ? node.$el : node

    // selected via document.querySelector
    if (this.$selected instanceof Node) {
        const parent = this.$selected.parentNode

        removeNodes(this.$selected)

        appendTo(parent, element)
    }

    // selected via document.querySelectorAll
    // replace each one of them  with the given node!!!!
    // important: This might not be desired action sometimes.
    if (this.$selected instanceof NodeList) {
        if (this.config.dev) {
            // eslint-disable-next-line no-console
            console.warn(
                'You selected multiple node. This action will replace each one of them with the given node.'
            )
        }

        this.$selected.forEach((currentNode) => {
            const parent = currentNode.parentNode

            if (element instanceof Node) {
                parent?.replaceChild(element, currentNode)
            } else if (element instanceof NodeList) {
                parent?.replaceChildren(...Array.from(element))
            } else if (Array.isArray(element)) {
                // Array of nodes or strings
                // strings will be set as text nodes
                parent?.replaceChildren(...element)
            }
        })
    }

    this.reset()

    return this
}
