/**
 * @const
 * @type {boolean}
 */
export const JQUERY_AVAILABLE = typeof jQuery !== 'undefined';

/**
 * @const
 * @type {object}
 */
export const EMPTY_OBJECT = Object.freeze({});

/**
 * Tag names defined in the HTML 4.01 Strict and Frameset DTDs and new elements
 * from HTML5.
 * @const
 * @type {Array.<string>}
 */
export const TAG_NAMES = (
    'a address area article aside audio b bdi bdo big '
  + 'blockquote body br button canvas caption cite code col colgroup command '
  + 'datalist dd del details dfn div dl dt em embed fieldset figcaption figure '
  + 'footer form frame frameset h1 h2 h3 h4 h5 h6 hr head header hgroup html i '
  + 'iframe img input ins kbd keygen label legend li link map mark meta meter '
  + 'nav noscript object ol optgroup option output p param pre '
  + 'progress q rp rt samp script section select small source span strong '
  + 'style sub summary sup table tbody td textarea tfoot th thead time title tr '
  + 'track tt ul var video wbr'
).split(' ');
