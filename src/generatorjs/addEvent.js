import { stringStarts, isString } from '../utils'

export default function (evnt, func) {
    const _el = this.$selected ? this.$selected : this.$el
    if (!_el) {
    // returns undefined
        return
    }
    if (stringStarts(evnt, 'on')) {
        evnt = evnt.substr(2)
    }
    if (isString(func) && typeof func !== 'function') {
        func = window[func]
    }
    if (_el.addEventListener) {
        _el.addEventListener(evnt, func, false)
    }
    else if (_el.attachEvent) {
        _el.attachEvent(`on${evnt}`, func)
    }
    else {
        window[`on${evnt}`] = func
    }

    return this
}
