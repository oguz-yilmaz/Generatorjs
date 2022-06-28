import { stringStarts, isString } from '../utils';

export default function (evnt, func) {
    const element = this.$selected ? this.$selected : this.$el;

    if (isString(func) && typeof func !== 'function') {
        func = window[func];
    }
    if (!element) {
    // returns undefined
        return;
    }
    if (stringStarts(evnt, 'on')) {
        evnt = evnt.substr(2);
    }
    if (element.removeEventListener) {
        element.removeEventListener(evnt, func, false);
    }
    else if (element.detachEvent) {
        element.detachEvent(`on${evnt}`, func);
    }
    else {
        element[`on${evnt}`] = null;
    }

    return this;
}
