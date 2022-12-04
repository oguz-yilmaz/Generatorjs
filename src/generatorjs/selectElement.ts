import { isDef } from '@utils'
import { createElement } from '@dom/utils'
import GeneratorJs from '@generator'

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

    d = createElement('div')
    d.appendChild(fragment)
    d = d.firstChild
    if (d.querySelector || type === 'query') {
        return d.querySelectorAll(selector)
    }

    switch (type) {
        case 'id':
            return d.getElementById(selector.slice(1))
        case 'class':
            return d.getElementsByClassName(selector.slice(1))
        case 'tag':
            return d.getElementsByTagName(selector.toUpperCase())
        case 'name':
            return d.getElementsByName(selector)
    }

    throw new Error("We couldn't get the element. Please check your selectors!")
}
