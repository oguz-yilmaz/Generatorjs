import { EMPTY_OBJECT, JQUERY_AVAILABLE } from '@constants'
import { isPlainObject, hasOwn, isDef, setHtml, emptyArray } from '@utils'
import { createElement, createText } from './utils'

export const setAttributes = (elem, attributes) => {
    if (isDef(attributes) && Array.isArray(attributes)) {
        for (let i = 0, attr; i < attributes.length; i += 1) {
            attr = attributes[i]
            elem.setAttribute(attr[0], attr[1])
        }
    }

    return elem
}

export const attributeSplitter = (input) => {
    const regExpAttribute = /\(([^)]+)\)/ // between  ( .. )

    const matches =
        input.indexOf('(') !== -1 && input.indexOf(')') !== -1
            ? regExpAttribute.exec(input)
            : input
    let attributes
    const resultArray = []

    if (matches !== null) {
        attributes =
            Array.isArray(matches) && isDef(matches[1])
                ? matches[1].split(',')
                : matches.split(',')

        const hasSplitValue = (value) => value !== [''] || value !== []

        if (attributes !== null && hasSplitValue(attributes)) {
            if (attributes !== [] || attributes !== ['']) {
                for (let p = 0, keyVal; p < attributes.length; p++) {
                    keyVal = attributes[p].split('=')
                    if (hasSplitValue(keyVal))
                        [].push.call(resultArray, [keyVal[0], keyVal[1]])
                }
            }
        }
    }

    return resultArray
}

export const createElementsObjectUntil = (arr) => {
    // safer to use fragment instead of creating element and adding it to dom as it
    // can destroy the document structure
    const fragment = window.document.createDocumentFragment()

    if (isPlainObject(arr) && arr !== EMPTY_OBJECT) {
        arr = [arr]
    }

    if (Array.isArray(arr)) {
        for (let i = 0, elem; i < arr.length; i = +1) {
            elem = createElement(arr[i].el)

            if (hasOwn(arr[i], 'attr')) {
                setAttributes(elem, attributeSplitter(arr[i].attr))
            }
            if (hasOwn(arr[i], 'inner')) {
                if (JQUERY_AVAILABLE && arr[i].inner instanceof jQuery) {
                    setHtml(elem, arr[i].inner.clone())
                } else {
                    setHtml(elem, arr[i].inner)
                }
            }
            if (hasOwn(arr[i], 'child')) {
                if (Array.isArray(arr[i].child) && !emptyArray(arr[i].child)) {
                    try {
                        elem.append(createElementsObjectUntil(arr[i].child))
                    } catch (e) {
                        // for ie support
                        elem.appendChild(
                            createElementsObjectUntil(arr[i].child)
                        )
                    }
                } else {
                    throw new TypeError('Child elements must be an array.')
                }
            }

            fragment.appendChild(elem)
        }
    }

    return fragment
}
