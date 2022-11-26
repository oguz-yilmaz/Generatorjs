import { createText } from '@dom-utils'
import GeneratorJs from '@generator'

export default function setText(this: GeneratorJs, text: string) {
    if (!this.$selected) {
        throw new Error('No element is selected.You should use .get() first!')
    }

    try {
        this.$selected.appendChild(createText(text))
    } catch (e) {
        throw new Error("Couldn't set text to element")
    }

    return this
}
