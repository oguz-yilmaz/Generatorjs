import { GeneratorJs } from '@generatorjs'
import { isNode } from '@dom/utils'

function getTextElem(elem) {
    if (!elem) {
        return ''
    }

    let node
    let ret = ''
    let i = 0

    if (!isNode(elem)) {
        // eslint-disable-next-line no-cond-assign
        while ((node = elem[i++])) {
            ret += getTextElem(node)
        }
    } else if (
        elem.nodeType === Node.ELEMENT_NODE ||
        elem.nodeType === Node.DOCUMENT_NODE ||
        elem.nodeType === Node.DOCUMENT_FRAGMENT_NODE
    ) {
        if (typeof elem.textContent === 'string') {
            return elem.textContent
        }

        for (elem = elem.firstChild; elem; elem = elem.nextSibling) {
            ret += getTextElem(elem)
        }
    } else if (
        elem.nodeType === Node.TEXT_NODE ||
        elem.nodeType === Node.CDATA_SECTION_NODE
    ) {
        return elem.nodeValue
    }

    return ret
}

export function getText(this: GeneratorJs) {
    return getTextElem(this.$selected ?? this.getFragment())
}
