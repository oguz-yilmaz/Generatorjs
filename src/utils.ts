/**
 * isPlainObject({}) ==> true
 * isPlainObject([]) ==> false
 * isPlainObject(window) ==> false
 */
export const isPlainObject = (obj) =>
    Object.prototype.toString.call(obj) === '[object Object]'

export const isString = (value): value is string => {
    if (typeof value === 'string') {
        return true
    }

    return Object.prototype.toString.call(value) === '[object String]'
}

export const isFunction = (value) =>
    Object.prototype.toString.call(value) === '[object Function]' ||
    typeof value === 'function'

export const isDef = (v) => v !== undefined && v !== null

export const emptyArray = (array) =>
    typeof array !== 'undefined' && array !== null && array.length <= 0

export const forEach = (iterable, callback) => {
    if (Array.isArray(iterable)) {
        iterable.forEach((value, key) => callback(key, value))
    }

    if (isPlainObject(iterable)) {
        Object.entries(iterable).forEach((value) =>
            callback(value[0], value[1])
        )
    }
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

    return el
}

export const stringStarts = (str, starts) =>
    str.substring(0, starts.length) === starts
