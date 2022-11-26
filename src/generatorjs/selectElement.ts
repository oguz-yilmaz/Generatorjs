import { isDef } from '@utils'
import { JQUERY_AVAILABLE } from '@constants'
import { createElement } from '@dom-utils'
import GeneratorJs from '@generator'

const selectIdJQuery = (element) => element

export default function selectElement(
    this: GeneratorJs,
    fragment,
    selector,
    type
) {
    let d

    if (
        isDef(fragment) &&
        isDef(fragment.querySelector) &&
        (type === 'id' || type === 'class')
    ) {
        if (type === 'class') {
            return fragment.querySelectorAll(selector)
        }
        return fragment.querySelector(selector)
    }

    if (!JQUERY_AVAILABLE) {
        d = createElement('div')
        d.appendChild(fragment)
        d = d.firstChild
        if (d.querySelector || type === 'query') {
            return d.querySelectorAll(selector)
        }
    }

    switch (type) {
        case 'id':
            return JQUERY_AVAILABLE
                ? jQuery(this.$el).find(selector).get(0)
                : d.getElementById(selector.slice(1))
        case 'class':
            return JQUERY_AVAILABLE
                ? jQuery(this.$el).find(selector).get().length === 1
                    ? jQuery(this.$el).find(selector).get(0)
                    : jQuery(this.$el).find(selector).get()
                : d.getElementsByClassName(selector.slice(1))
        case 'tag':
            return JQUERY_AVAILABLE
                ? jQuery(this.$el).find(selector).get().length === 1
                    ? jQuery(this.$el).find(selector).get(0)
                    : jQuery(this.$el).find(selector).get()
                : d.getElementsByTagName(selector.toUpperCase())
        case 'name':
            return JQUERY_AVAILABLE
                ? jQuery(this.$el).find(`[name=${selector}]`).get().length === 1
                    ? jQuery(this.$el).find(`[name=${selector}]`).get(0)
                    : jQuery(this.$el).find(`[name=${selector}]`).get()
                : d.getElementsByName(selector)
    }

    throw new Error("We couldn't get the element. Please check your selectors!")
}
