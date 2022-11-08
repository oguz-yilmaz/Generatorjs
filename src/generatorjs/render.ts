import { createElement } from '@dom-utils'
import GeneratorJs from '../index'

/**
 * Why are we using fragment.cloneNode ?
 * If child is a reference to an existing node in the document, appendChild moves it from its
 * current position to the new position (i.e. there is no requirement to remove the node from
 * its parent node before appending it to some other node).
 * This also means that a node can't be in two points of the document simultaneously. So if the
 * node already has a parent, it is first removed, then appended at the new position.
 *
 * A common use for DocumentFragment is to create one, assemble a DOM subtree within it, then
 * append or insert the fragment into the DOM using Node interface methods such as appendChild()
 * or insertBefore(). Doing this moves the fragment's nodes into the DOM, leaving behind an empty
 * DocumentFragment. Because all the nodes are inserted into the document at once, only one reflow
 * and render is triggered instead of potentially one for each node inserted if they were inserted
 * separately.
 * */
export default function render(this: GeneratorJs) {
    let div = createElement('div')
    const fragment = this.$fragment.cloneNode(true)

    div.appendChild(fragment)
    div = div.firstChild

    this.$el = div
}
