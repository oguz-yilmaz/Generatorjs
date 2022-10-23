import { EMPTY_OBJECT, JQUERY_AVAILABLE } from './constants'
import {
    isPlainObject,
    hasOwn,
    isArray,
    isDef,
    _html,
    emptyArray,
} from './utils'

const doc = window.document

export const createElement = (el) => doc.createElement(el)

export const createText = (txt) => doc.createTextNode(txt)

const hasSplitValue = (value) => value !== [''] || value !== []

export const attributeSplitter = (input) => {
    const regExpAttribute = /\(([^)]+)\)/ // between  ( .. )

    const matches = input.indexOf('(') !== -1 && input.indexOf(')') !== -1
        ? regExpAttribute.exec(input)
        : input
    let attributes
    const resultArray = []

    if (matches !== null) {
        attributes = isArray(matches) && isDef(matches[1])
            ? matches[1].split(',')
            : matches.split(',')

        if (attributes !== null && hasSplitValue(attributes)) {
            if (attributes !== [] || attributes !== ['']) {
                for (let p = 0, keyVal; p < attributes.length; p++) {
                    keyVal = attributes[p].split('=')
                    if (hasSplitValue(keyVal)) [].push.call(resultArray, [keyVal[0], keyVal[1]])
                }
            }
        }
    }

    return resultArray
}

// safer to use fragment instead of creating element and adding it to dom as it
// can destroy the document structure
export const createFragment = () => window.document.createDocumentFragment()

export const setAttributes = (elem, attributes) => {
    if (isDef(attributes) && isArray(attributes)) {
        for (let i = 0, attr; i < attributes.length; i++) {
            attr = attributes[i]
            elem.setAttribute(attr[0], attr[1])
        }
    }

    return elem
}

export const createElementsObjectUntil = (arr) => {
    const fragment = createFragment()

    if (isPlainObject(arr) && arr !== EMPTY_OBJECT) {
        arr = [arr]
    }

    if (isArray(arr)) {
        for (let i = 0, elem; i < arr.length; i++) {
            elem = createElement(arr[i].el)

            if (hasOwn(arr[i], 'attr')) {
                setAttributes(elem, attributeSplitter(arr[i].attr))
            }
            if (hasOwn(arr[i], 'inner')) {
                if (JQUERY_AVAILABLE && arr[i].inner instanceof jQuery) {
                    _html(elem, arr[i].inner.clone())
                }
                else {
                    _html(elem, arr[i].inner)
                }
            }
            if (hasOwn(arr[i], 'child')) {
                if (isArray(arr[i].child) && !emptyArray(arr[i].child)) {
                    try {
                        elem.append(createElementsObjectUntil(arr[i].child))
                    }
                    catch (e) {
                        // for ie support
                        elem.appendChild(createElementsObjectUntil(arr[i].child))
                    }
                }
                else {
                    throw new TypeError('Child elements must be an array.')
                }
            }
            fragment.appendChild(elem)
        }
    }

    return fragment
}

export const getStringOfElement = (el) => {
    const tmp = document.createElement('div')
    tmp.appendChild(el)
    return tmp.innerHTML
}

export const selectElement = function (fragment, selector, type) {
    if (
        isDef(fragment)
    && isDef(fragment.querySelector)
    && (type === 'id' || type === 'class')
    ) {
        if (type === 'class') {
            return fragment.querySelectorAll(selector)
        }
        return fragment.querySelector(selector)
    }
    if (!JQUERY_AVAILABLE) {
        var d = createElement('div')
        d.appendChild(fragment)
        d = d.firstChild
        if (d.querySelector || type === 'query') {
            return d.querySelectorAll(selector)
        }
    }
    switch (type) {
    case 'id':
        return JQUERY_AVAILABLE
            ? jQuery(this.$el).find(selector).get(0)
            : d.getElementById(selector.slice(1))
    case 'class':
        return JQUERY_AVAILABLE
            ? jQuery(this.$el).find(selector).get().length === 1
                ? jQuery(this.$el).find(selector).get(0)
                : jQuery(this.$el).find(selector).get()
            : d.getElementsByClassName(selector.slice(1))
    case 'tag':
        return JQUERY_AVAILABLE
            ? jQuery(this.$el).find(selector).get().length === 1
                ? jQuery(this.$el).find(selector).get(0)
                : jQuery(this.$el).find(selector).get()
            : d.getElementsByTagName(selector.toUpperCase())
    case 'name':
        return JQUERY_AVAILABLE
            ? jQuery(this.$el)
                .find(`[name=${selector}]`)
                .get().length === 1
                ? jQuery(this.$el)
                    .find(`[name=${selector}]`)
                    .get(0)
                : jQuery(this.$el)
                    .find(`[name=${selector}]`)
                    .get()
            : d.getElementsByName(selector)
    }

    throw new Error("We could't get the element. Please check your selectors!")
}
