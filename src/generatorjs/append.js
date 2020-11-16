import { JQUERY_AVAILABLE } from '../constants';
import { createElement } from '../dom-utils';
import { isNodeList, isDef, forEach } from '../utils';
import Generatorjs from 'generatorjs';

//args can be nodelist , element ,JQuery object or Generatorjs instance
export default function (args) {
  var div = createElement('div'),
    that = this;

  div.appendChild(this.$fragment.cloneNode(true));
  div = div.firstChild;

  //if it is JQuery object
  if (JQUERY_AVAILABLE && args instanceof jQuery) {
    var elem = args.get();
    forEach(elem, function (index, item) {
      div.appendChild(item);
    });

    //if it is NodeList
  } else if (isNodeList(args)) {
    forEach(args, function (index, item) {
      div.appendChild(item);
    });

    //if it is html element
  } else if (isDef(args.nodeType) && args.nodeType > 0) {
    div.appendChild(args);

    //if it is Generatorjs object
  } else if (args instanceof Generatorjs) {
    div.appendChild(args.$el);
  }

  this.$el = div;
  return this;
}
