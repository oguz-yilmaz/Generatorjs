import { GeneratorJs } from '@generatorjs'
import { appendTo } from '@dom/utils'

export default function attachTo(this: GeneratorJs, element) {
    if (!this.$fragment) {
        throw new Error(
            'No elements created. Make sure you have proper definitions.'
        )
    }

    appendTo(element, this.$selected ?? this.$fragment)
    return this
}
