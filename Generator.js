(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD; don't export to window globals
    // if you have dependency for this lib define here
    // define(['JQuery'], factory);
    define([], factory);
  } else if (typeof exports === 'object') {
    // Node/CommonJS
    module.exports = factory(root);
  } else {
    root.Generatorjs = factory(root);
  }
})(this, function (root) {
  'use strict';
  
  var arr = [],
    document = root.document,
    push = arr.push,


});
