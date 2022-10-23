import FUNCTIONS from './generatorjs'
import { isDef, isPlainObject, isObject } from './utils'
import { createElementsObjectUntil } from './dom-utils'

export default class Generatorjs {
    constructor(elementsObject = {}) {
        let _dom = null

        if (!isDef(elementsObject) || !isPlainObject(elementsObject)) {
            throw new TypeError(
                `Element passed to constructor must be an object!\n${
                    typeof elementsObject
                } is given! `,
            )
        }

        _dom = createElementsObjectUntil(elementsObject)

        if (_dom !== null && isObject(_dom)) {
            this.$fragment = _dom
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
