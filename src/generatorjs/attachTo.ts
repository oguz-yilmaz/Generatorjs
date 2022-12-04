import GeneratorJs from '@generator'
import { isDef } from '@utils'

// must provide element object
export default function attachTo(this: GeneratorJs, element) {
    if (!this.$selected && !this.$el) {
        throw new Error('No elements Generatorjs object has to be attached!')
    }

    const currentElement = this.$selected ? this.$selected : this.$el

    // if it is html element
    if (isDef(element.nodeType) && element.nodeType > 0) {
        element.insertBefore(currentElement, element.firstChild)
    } else {
        throw new Error(
            'Elements to be attached must be of either type Element Object'
        )
    }

    return this
}
