import { GeneratorJs } from '@generator'
import { isDef } from '@utils'

// must provide element object
export default function attachTo(this: GeneratorJs, element) {
    if (!this.$selected) {
        throw new Error('No elements Generatorjs object has to be attached!')
    }

    // if it is html element
    if (isDef(element.nodeType) && element.nodeType > 0) {
        element.insertBefore(this.$selected, element.firstChild)
    } else {
        throw new Error(
            'Elements to be attached must be of either type Element Object'
        )
    }

    return this
}
