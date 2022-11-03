import FUNCTIONS from './generatorjs'
import { isDef, isPlainObject, isObject } from './utils'
import { createElementsObjectUntil } from './dom-utils'

export default class Generatorjs {
    constructor(elementsObject = {}) {
        let renderedDom = null

        if (!isDef(elementsObject) || !isPlainObject(elementsObject)) {
            throw new TypeError(
                `Element passed to constructor must be an object! ${typeof elementsObject} is given!`
            )
        }

        renderedDom = createElementsObjectUntil(elementsObject)

        if (renderedDom !== null && isObject(renderedDom)) {
            this.$fragment = renderedDom
        }

        this.bindMethods()
        this.render()
    }

    bindMethods() {
        Object.keys(FUNCTIONS).forEach((fn) => {
            const method = FUNCTIONS[fn]

            this[fn] = method.bind(this)
        }, this)
    }
}
