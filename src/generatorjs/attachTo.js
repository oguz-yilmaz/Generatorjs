import { isDef } from '../utils'
import { JQUERY_AVAILABLE } from '../constants'

// must provide element object or jQuery object
export default function (element) {
    if (!this.$selected && !this.$el) {
        throw new Error('No elements Generatorjs object has to be attached!')
    }

    const _el = this.$selected ? this.$selected : this.$el

    // if it is JQuery object
    if (JQUERY_AVAILABLE && element instanceof jQuery) {
        jQuery(element).prepend(_el)

    // if it is html element
    }
    else if (isDef(element.nodeType) && element.nodeType > 0) {
        element.insertBefore(_el, element.firstChild)
    }
    else {
        throw new Error(
            'Elements to be attached must be of either type Element Object or JQuery Object',
        )
    }

    return this
}
