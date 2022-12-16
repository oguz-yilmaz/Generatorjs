import { GeneratorJs } from '@generatorjs'
import { isNode } from '@dom/utils'

enum Nodes {}

function getTextElem(elem) {
    if (!elem) {
        return ''
    }

    let node
    let ret = ''
    let i = 0

    if (!isNode(elem)) {
        // this is an array if it is not a Node
        // eslint-disable-next-line no-cond-assign
        while ((node = elem[i++])) {
            // Do not traverse comment nodes
            ret += getTextElem(node)
        }
    } else if (
        elem.nodeType === 1 ||
        elem.nodeType === 9 ||
        elem.nodeType === 11
    ) {
        if (elem.textContent) {
            return elem.textContent
        }

        // Traverse its children
        for (elem = elem.firstChild; elem; elem = elem.nextSibling) {
            ret += getTextElem(elem)
        }
    } else if (elem.nodeType === 3 || elem.nodeType === 4) {
        return elem.nodeValue
    }

    return ret
}

export function getText(this: GeneratorJs) {
    const html = this.getHtml()

    return getTextElem(html)
}
