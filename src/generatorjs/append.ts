import GeneratorJs from '@generator'
import { JQUERY_AVAILABLE } from '@constants'
import { createElement } from '@dom-utils'
import { isNodeList, isDef, forEach } from '@utils'

// args can be NodeList , element ,JQuery object or Generatorjs instance
export default function append(this: GeneratorJs, args) {
    let fragmentDiv = createElement('div')

    fragmentDiv.appendChild(this.$fragment.cloneNode(true))
    fragmentDiv = fragmentDiv.firstChild

    // if it is JQuery object
    if (JQUERY_AVAILABLE && args instanceof jQuery) {
        forEach(args.get(), (index, item) => {
            fragmentDiv.appendChild(item)
        })
    }
    // if it is NodeList
    else if (isNodeList(args)) {
        forEach(args, (index, item) => {
            fragmentDiv.appendChild(item)
        })
    }
    // if it is html element
    else if (isDef(args.nodeType) && args.nodeType > 0) {
        fragmentDiv.appendChild(args)
    }
    // if it is Generatorjs object
    else if (args instanceof Generatorjs) {
        fragmentDiv.appendChild(args.$el)
    }

    this.$el = fragmentDiv

    return this
}
