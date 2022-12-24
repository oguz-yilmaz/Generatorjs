export const createElement = <K extends keyof HTMLElementTagNameMap>(el: K) =>
    window.document.createElement(el)

export const createText = (text: string) => window.document.createTextNode(text)

export const appendTo = (element, nodeToAppend) => {
    try {
        element.append(nodeToAppend)
    } catch (e) {
        element.appendChild(nodeToAppend)
    }
}

export function isNode(elem): elem is Node {
    return !!elem.nodeType
}

export const removeNodes = (node: Node | NodeList) => {
    if (node instanceof Node) {
        node.parentNode?.removeChild(node)
    }

    if (node instanceof NodeList && node.length) {
        node.forEach((currentNode) =>
            currentNode.parentNode?.removeChild(currentNode)
        )
    }
}
