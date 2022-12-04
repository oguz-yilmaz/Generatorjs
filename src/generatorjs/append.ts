import GeneratorJs from '@generator'
import { createElement } from '@dom/utils'
import { isNodeList, isDef } from '@utils'

// nodes can be NodeList, DOM Element or GeneratorJs instance
export default function append(this: GeneratorJs, nodes) {
    let fragmentDiv: Node = createElement('div')

    if (this.$fragment) {
        fragmentDiv.appendChild(this.$fragment.cloneNode(true))
        fragmentDiv = fragmentDiv.firstChild ?? createElement('div')
    }

    // if it is NodeList
    if (isNodeList(nodes)) {
        nodes.forEach((elem) => fragmentDiv.appendChild(elem))
    }
    // if it is html element
    else if (isDef(nodes.nodeType) && nodes.nodeType > 0) {
        fragmentDiv.appendChild(nodes)
    }
    // if it is GeneratorJs object
    else if (nodes instanceof GeneratorJs && nodes.$el) {
        fragmentDiv.appendChild(nodes.$el)
    }

    this.$el = fragmentDiv

    return this
}
