import { JQUERY_AVAILABLE } from './constants';

const _toString = Object.prototype.toString;

/**
 * Strict object type check. Only returns true
 * for plain JavaScript objects.
 * Any user created object is considered a plain object. The check only guards against native objects, e.g. window.
 * isPlainObject({}) ==> true
 * isPlainObject([]) ==> false
 * isPlainObject(window) ==> false
 */
export const isPlainObject = function (obj) {
    return _toString.call(obj) === '[object Object]';
};

// check if value is a string
export const isString = function (value) {
    if (typeof value === 'string') {
        return true;
    }

    return _toString.call(value) === '[object String]';
};

export const isDef = function (v) {
    return v !== undefined && v !== null;
};

export const isArray = Array.isArray
  || function (value) {
      return _toString.call(value) === '[object Array]';
  };

export const isObject = function (value) {
    return Object(value) === value;
};

export const emptyArray = function (array) {
    return typeof array !== 'undefined' && array !== null && array.length <= 0;
};

export const forEach = function (array, callback, scope) {
    for (let i = 0; i < array.length; i++) {
        callback.call(scope, i, array[i]);
    }
};

/**
 * Callbound version of Object.prototype.hasOwnProperty(), ready to be called
 * with an object and property name.
 */
export const hasOwn = (function () {
    const { hasOwnProperty } = Object.prototype;

    return function (obj, prop) {
        return hasOwnProperty.call(obj, prop);
    };
}());

/**
 * Copies own properties of any given object to destination object
 */
export const extend = function (dest) {
    for (let i = 1, l = arguments.length, src; i < l; i++) {
        src = arguments[i];

        if (src && isObject(src)) {
            for (const prop in src) {
                if (hasOwn(src, prop)) {
                    dest[prop] = src[prop];
                }
            }
        }
    }

    return dest;
};

export const isNodeList = function (node) {
    const stringRepr = Object.prototype.toString.call(node);
    let res;

    res = typeof node === 'object'
    && /^\[object (HTMLCollection|NodeList|Object)\]$/.test(stringRepr)
    && typeof node.length === 'number'
    && (node.length === 0
      || (typeof node[0] === 'object' && node[0].nodeType > 0));

    if (res === false) {
    // try for IE
        if (
            typeof node.length === 'number'
      && typeof node.item !== 'undefined'
      && typeof node.nextNode === 'function'
      && typeof node.reset === 'function'
        ) {
            res = true;
        }
    }
    return res;
};

/**
 * Cross-browser means of setting innerHTML on a DOM Element.
 * @param {Element} el
 * @param {string} html
 */
export const _html = JQUERY_AVAILABLE
    ? function (el, html) {
        jQuery(el).html(html);
    }
    : function (el, html) {
        try {
            el.innerHTML = html;
        }
        catch (e) {
            const div = document.createElement('div');
            div.innerHTML = html;
            while (el.firstChild) el.removeChild(el.firstChild);
            while (div.firstChild) el.appendChild(div.firstChild);
        }
    };

export const stringStarts = function (str, starts) {
    return str.substring(0, starts.length) === starts;
};
