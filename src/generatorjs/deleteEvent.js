import { stringStarts, isString } from '../utils';

export default function (evnt, func) {
  var _el = this.$selected ? this.$selected : this.$el;

  if (isString(func) && typeof func !== 'function') {
    func = window[func];
  }
  if (!_el) {
    //returns undefined
    return;
  }
  if (stringStarts(evnt, 'on')) {
    evnt = evnt.substr(2);
  }
  if (_el.removeEventListener) {
    _el.removeEventListener(evnt, func, false);
  } else if (_el.detachEvent) {
    _el.detachEvent('on' + evnt, func);
  } else {
    _el['on' + evnt] = null;
  }

  return this;
}
