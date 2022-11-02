import { JQUERY_AVAILABLE } from './constants'

/**
 * Strict object type check. Only returns true
 * for plain JavaScript objects.
 * Any user created object is considered a plain object.
 * The check only guards against native objects, e.g. window.
 *
 * isPlainObject({}) ==> true
 * isPlainObject([]) ==> false
 * isPlainObject(window) ==> false
 */
export const isPlainObject = (obj) => Object.prototype.toString.call(obj) === '[object Object]'

// check if value is a string
export const isString = (value) => {
    if (typeof value === 'string') {
        return true
    }

    return Object.prototype.toString.call(value) === '[object String]'
}

export const isDef = (v) => v !== undefined && v !== null

export const isArray = Array.isArray || ((value) => Object.prototype.toString.call(value) === '[object Array]')

export const isObject = (value) => Object(value) === value

export const emptyArray = (array) => typeof array !== 'undefined' && array !== null && array.length <= 0

export const forEach = (array, callback, scope) => {
    for (let i = 0; i < array.length; i++) {
        callback.call(scope, i, array[i])
    }
}

/**
 * Call-bound version of Object.prototype.hasOwnProperty(), ready to be called
 * with an object and property name.
 */
export const hasOwn = ((() => (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop))())

/**
 * Copies own properties of any given object to destination object
 */
export const extend = (dest) => {
    for (let i = 1, l = arguments.length, src; i < l; i++) {
        src = arguments[i]

        if (src && isObject(src)) {
            for (const prop in src) {
                if (hasOwn(src, prop)) {
                    dest[prop] = src[prop]
                }
            }
        }
    }

    return dest
}

export const isNodeList = (node) => {
    const stringRepr = Object.prototype.toString.call(node)
    let res

    res = typeof node === 'object'
    && /^\[object (HTMLCollection|NodeList|Object)\]$/.test(stringRepr)
    && typeof node.length === 'number'
    && (node.length === 0
      || (typeof node[0] === 'object' && node[0].nodeType > 0))

    if (res === false) {
    // try for IE
        if (
            typeof node.length === 'number'
      && typeof node.item !== 'undefined'
      && typeof node.nextNode === 'function'
      && typeof node.reset === 'function'
        ) {
            res = true
        }
    }

    return res
}

/**
 * Cross-browser means of setting innerHTML on a DOM Element.
 *
 * @param {Element} el
 * @param {string} html
 */
export const _html = JQUERY_AVAILABLE
    ? (el, html) => jQuery(el).html(html)
    : (el, html) => {
        try {
            el.innerHTML = html
        }
        catch (e) {
            const div = document.createElement('div')
            div.innerHTML = html

            while (el.firstChild) el.removeChild(el.firstChild)
            while (div.firstChild) el.appendChild(div.firstChild)
        }
    }

export const stringStarts = (str, starts) => str.substring(0, starts.length) === starts
