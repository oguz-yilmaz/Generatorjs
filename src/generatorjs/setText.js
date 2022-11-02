import { createText } from '../dom-utils'

export default function setText(text) {
    if (!this.$selected) {
        throw new Error('No element is selected.You should use .get() first!')
    }

    try {
        this.$selected.appendChild(createText(text))
    }
    catch (e) {
        throw new Error('Couldn\'t set text to element')
    }

    return this
}
