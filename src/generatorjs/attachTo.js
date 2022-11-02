import { isDef } from '../utils'
import { JQUERY_AVAILABLE } from '../constants'

// must provide element object or jQuery object
export default function attachTo(element) {
    if (!this.$selected && !this.$el) {
        throw new Error('No elements Generatorjs object has to be attached!')
    }

    const currentElement = this.$selected ? this.$selected : this.$el

    // if it is JQuery object
    if (JQUERY_AVAILABLE && element instanceof jQuery) {
        jQuery(element).prepend(currentElement)
    }
    // if it is html element
    else if (isDef(element.nodeType) && element.nodeType > 0) {
        element.insertBefore(currentElement, element.firstChild)
    }
    else {
        throw new Error(
            'Elements to be attached must be of either type Element Object or JQuery Object',
        )
    }

    return this
}
