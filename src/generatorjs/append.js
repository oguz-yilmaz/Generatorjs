import { JQUERY_AVAILABLE } from '../constants';
import { createElement } from '../dom-utils';
import { isNodeList, isDef, forEach } from '../utils';
import Generatorjs from 'generatorjs';

//args can be nodelist , element ,JQuery object or Generatorjs instance
export default function (args) {
  let fragmentDiv = createElement('div');

  fragmentDiv.appendChild(this.$fragment.cloneNode(true));
  fragmentDiv = fragmentDiv.firstChild;

  //if it is JQuery object
  if (JQUERY_AVAILABLE && args instanceof jQuery) {
    var elem = args.get();
    forEach(elem, function (index, item) {
      fragmentDiv.appendChild(item);
    });

    //if it is NodeList
  } else if (isNodeList(args)) {
    forEach(args, function (index, item) {
      fragmentDiv.appendChild(item);
    });

    //if it is html element
  } else if (isDef(args.nodeType) && args.nodeType > 0) {
    fragmentDiv.appendChild(args);

    //if it is Generatorjs object
  } else if (args instanceof Generatorjs) {
    fragmentDiv.appendChild(args.$el);
  }

  this.$el = fragmentDiv;
  return this;
}
