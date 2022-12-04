/**
 * isPlainObject({}) ==> true
 * isPlainObject([]) ==> false
 * isPlainObject(window) ==> false
 */
export const isPlainObject = (obj) =>
    Object.prototype.toString.call(obj) === '[object Object]'

export const isString = (value) => {
    if (typeof value === 'string') {
        return true
    }

    return Object.prototype.toString.call(value) === '[object String]'
}

export const isDef = (v) => v !== undefined && v !== null

export const isObject = (value) => Object(value) === value

export const emptyArray = (array) =>
    typeof array !== 'undefined' && array !== null && array.length <= 0

export const forEach = (array, callback, scope) => {
    for (let i = 0; i < array.length; i++) {
        callback.call(scope, i, array[i])
    }
}

export const hasOwn = (
    () => (obj, prop) =>
        Object.prototype.hasOwnProperty.call(obj, prop)
)()

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

    let res =
        typeof node === 'object' &&
        /^\[object (HTMLCollection|NodeList|Object)\]$/.test(stringRepr) &&
        typeof node.length === 'number' &&
        (node.length === 0 ||
            (typeof node[0] === 'object' && node[0].nodeType > 0))

    if (res === false) {
        // try for IE
        if (
            typeof node.length === 'number' &&
            typeof node.item !== 'undefined' &&
            typeof node.nextNode === 'function' &&
            typeof node.reset === 'function'
        ) {
            res = true
        }
    }

    return res
}

// Cross-browser means of setting innerHTML on a DOM Element.
export const setHtml = (el, html) => {
    try {
        el.innerHTML = html
    } catch (e) {
        const div = document.createElement('div')
        div.innerHTML = html

        while (el.firstChild) el.removeChild(el.firstChild)
        while (div.firstChild) el.appendChild(div.firstChild)
    }
}

export const stringStarts = (str, starts) =>
    str.substring(0, starts.length) === starts
