(function(root, factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD; don't export to window globals
        // if you have dependency for this lib define here
        // define(['JQuery'], factory);
        define([], factory);
    } else if (typeof exports === 'object') {
        // Node/CommonJS
        module.exports   = factory(root);
    } else {
        root.Generatorjs =  factory(root);
    }
}(this , function(root) {
    "use strict";

    var emptyObject = Object.freeze({});
    // Local references to global functions
    var arr = [],
        document = root.document,
        getProto = Object.getPrototypeOf,
        slice = arr.slice,
        concat = arr.concat,
        push = arr.push,
        stringIndex = arr.indexOf;

    /**
     * @const
     * @type {boolean}
     */
    var JQUERY_AVAILABLE = (typeof jQuery !== 'undefined');

    var _toString = Object.prototype.toString;

    /**
     * @const
     * @type {array}
     */
    var BROWSER_EVENTS = (function(){
        var browserEvents = [];
        for (var e in document){
            if (typeof document[e] !== "function" && e !== null && e.substring(0, 2) === "on"){
                push.call(browserEvents,e);
            }
        }
        return browserEvents;
    })();

    function isDef (v) {
        return v !== undefined && v !== null
    };

    /**
     * Strict object type check. Only returns true
     * for plain JavaScript objects.
     * Any user created object is considered a plain object. The check only guards against native objects, e.g. window.
     * isPlainObject({}) ==> true
     * isPlainObject([]) ==> false
     * isPlainObject(window) ==> false
     */
    var isPlainObject = function (obj) {
        return _toString.call(obj) === '[object Object]'
    };

    // check if value is a string
    var isString = function(value) {
        if(typeof value === 'string'){
            return true;
        }
        return _toString.call(value) === '[object String]';
    };

    var isNodeList = function (node) {

        var stringRepr = Object.prototype.toString.call(node),
            res;

        res =  typeof node === 'object' &&
            /^\[object (HTMLCollection|NodeList|Object)\]$/.test(stringRepr) &&
            (typeof node.length === 'number') &&
            (node.length === 0 || (typeof node[0] === "object" && node[0].nodeType > 0));

        if(res === false){
            //try for IE
            if (typeof node.length === 'number'
                && typeof node.item !== 'undefined'
                && typeof node.nextNode === 'function'
                && typeof node.reset === 'function')
            {
                res = true
            }
        }
        return res;
    };

    //get the first part of the string until identifier
    var getUntil = function(str,identifier,t){
        var index = str.indexOf(identifier),
            idLen = identifier.length,
            remainder;

        var s = str.substr(0,index);
        if(t){
            remainder = str.substr(index + idLen);
        }else{
            remainder = str.substr(index);
        }

        return index !== -1 ? [s,remainder] : [str,""];
    };

    // check if value is Array
    var isArray = Array.isArray || function(value) {    // check native isArray first
        return _toString.call(value) === '[object Array]';
    };

    // check if value is Object
    var isObject = function(value) {
        return Object(value) === value;
    };

    var emptyArray = function(array){
        return typeof array !== "undefined" && array !== null && array.length <= 0;
    };

    //cross-browser addEvent support
    function addEvent(evnt, func) {
        var _el = this.$selected ? this.$selected : this.$el;
        if(!_el){
            //returns undefined
            return;
        }
        if(stringStarts(evnt,'on')){
            evnt = evnt.substr(2);
        }
        if(isString(func) && typeof func !== 'function'){
            func = root[func];
        }
        if (_el.addEventListener)  // W3C DOM
            _el.addEventListener(evnt,func,false);
        else if (_el.attachEvent) { // IE DOM
            _el.attachEvent("on"+evnt, func);
        }
        else {
            root["on"+evnt] = func;
        }
    }

    var removeEvent = function(evnt, func) {
        var _el = this.$selected ? this.$selected : this.$el;
        if(isString(func) && typeof func !== 'function'){
            func = root[func];
        }
        if(!_el){
            //returns undefined
            return;
        }
        if(stringStarts(evnt,'on')){
            evnt = evnt.substr(2);
        }
        if (_el.removeEventListener) {
            _el.removeEventListener(evnt, func, false);
        } else if (_el.detachEvent) {
            _el.detachEvent("on" + evnt, func);
        } else {
            _el["on" + evnt] = null;
        }
    }

    // check if split funtion has returned value
    var hasSplitValue = function(value) {
        return value !== [""] || value !== [];
    };

    var forEach = function (array, callback, scope) {
        for (var i = 0; i < array.length; i++) {
            callback.call(scope, i, array[i]);
        }
    };

    /**
     * Creates an Array of [property, value] pairs from an Object.
     */
    var items = function items(obj) {
        var items = [];
        for (var prop in obj) {
            if (hasOwn(obj, prop)) {
                push.call(items,[prop, obj[prop]]);
            }
        }
        return items
    };

    //Array.prototype.indexOf implementation for older browser support
    var index = function(arr,searchElement,fromIndex){
        if (!Array.prototype.indexOf) {
            var s = function(arr,searchElement, fromIndex) {
                var k;
                if (arr == null) {
                    throw new TypeError('array is null or not defined');
                }

                var o = Object(arr);
                var len = o.length >>> 0;
                if (len === 0) {
                    return -1;
                }
                var n = fromIndex | 0;
                if (n >= len) {
                    return -1;
                }
                k = Math.max(n >= 0 ? n : len - Math.abs(n), 0);
                while (k < len) {
                    if (k in o && o[k] === searchElement) {
                        return k;
                    }
                    k++;
                }
                return -1;
            };
            return s(arr,searchElement,fromIndex);
        }
        return arr.indexOf(searchElement,fromIndex) > -1;
    };

    /**
     * Callbound version of Object.prototype.hasOwnProperty(), ready to be called
     * with an object and property name.
     */
    var hasOwn = (function() {
        var hasOwnProperty = Object.prototype.hasOwnProperty
        return function(obj, prop) { return hasOwnProperty.call(obj, prop) }
    })();

    /**
     * Copies own properties of any given object to destination object
     */
    function extend(dest){
        for(var i = 1,l=arguments.length,src;i<l;i++){
            src = arguments[i];
            if(src && isObject(src)){
                for(var prop in src){
                    if(hasOwn(src,prop)){
                        dest[prop] = src[prop];
                    }
                }
            }

        }

        return dest;
    };

    var setAttributes = function (elem,attributes) {
        if (isDef(attributes) && isArray(attributes)) {
            for (var i=0,attr; i<attributes.length; i++) {
                attr=attributes[i];
                // if(index(attr[0],BROWSER_EVENTS)){
                //     addEvent.call(elem,attr[0],attr[1]);
                // }
                elem.setAttribute(attr[0],attr[1]);
            }
        }
        return elem;
    };

    var attributeSplitter = function(input){
        var regExpAttribute = /\(([^)]+)\)/;     // between  ( .. )
        var matches = input.indexOf('(') !== -1 && input.indexOf(')') !== -1 ? regExpAttribute.exec(input):input,
            attributes,
            resultArray=[];

        if(matches !== null){
            attributes = isArray(matches) && isDef(matches[1]) ? matches[1].split(',') : matches.split(',');
            if(attributes!==null && hasSplitValue(attributes)){
                if(attributes !== [] || attributes !== [""]){
                    for(var p=0,keyVal;p<attributes.length;p++){
                        keyVal = attributes[p].split('=');
                        if(hasSplitValue(keyVal))
                            push.call(resultArray,[keyVal[0],keyVal[1]]);
                    }
                }
            }
        }
        return resultArray;
    };

    var createElementsUntil = function (elemString) {
        var fragment = createFragment(),
            split = elemString.split(' ');

        for(var i=0;i<split.length;i++){
            var elem = getUntil(split[i],'..'),
                parent = null,
                el     = null,
                cnt    = 0;

            while(elem[0] !== ''){
                if(el !== null && cnt === 1){
                    parent = el;
                }

                if(elem[0] !== '' && !stringStarts(elem[0],'[[') && elem[0].indexOf('(') === -1){
                    el = createElement(elem[0]);
                }else if(elem[0].indexOf('(') !== -1){
                    var elString = getUntil(elemString,'(',false);
                    el = createElement(elString[0]);
                    var elAttrs = attributeSplitter(elString[1]);
                    el = setAttributes(el,elAttrs);
                }
                if(parent !== null){
                    appendInner(parent,el);
                }

                if(elem[1].indexOf('..') !== -1){
                    elem = getUntil(elem[1],'..');
                }else{
                    elem = getUntil(elem[1],'..',false);
                }
                cnt++;
            }
            if(parent !== null){
                fragment.appendChild(parent);
            }else if(el !== null){
                fragment.appendChild(el);
            }

        }
        return fragment;
    };

    var countString = function(str,s){
        return (str.split(s).length - 1);
    };

    var createElementsObjectUntil = function(arr){
        var fragment = createFragment();

        if(isPlainObject(arr) && arr !== emptyObject){
            arr = [arr];
        }

        if(isArray(arr)){

            for(var i=0,elem;i<arr.length;i++){

                elem = createElement(arr[i]['el']);
                if(hasOwn(arr[i],'attr')){
                    setAttributes(elem,attributeSplitter(arr[i]['attr']));
                }
                if(hasOwn(arr[i],'inner')){
                    if(JQUERY_AVAILABLE && arr[i]['inner'] instanceof jQuery){
                        _html(elem,arr[i]['inner'].clone());
                    }else{
                        _html(elem,arr[i]["inner"]);
                    }
                }
                if(hasOwn(arr[i],'child')){
                    if(isArray(arr[i]['child']) && !emptyArray(arr[i]['child'])){
                        try{
                            elem.append(createElementsObjectUntil(arr[i]['child']));
                        }catch (e){
                            //for ie support
                            elem.appendChild(createElementsObjectUntil(arr[i]['child']));
                        }

                    }else{
                        throw new TypeError('Child elements must be an array.');
                    }
                }
                fragment.appendChild(elem);
            }

        }

        return fragment;
    };

    var objectOptSplitter = function(objectOpt){
        if(objectOpt !== emptyObject){
            var fragment = createFragment();
            fragment.appendChild(createElementsObjectUntil(objectOpt));
            this.$fragment = fragment;
        }
        throw new TypeError('An empty object is passed to constructor.');
    };

    var createElement = function(el){
        return document.createElement(el);
    };

    var createText = function(txt){
        return document.createTextNode(txt);
    };

    //safer to use fragment instead of creating element and adding it to dom as it
    //can destroy the document structure
    var createFragment = function(){
        return document.createDocumentFragment();
    };

    var getStringOfElement = function(el){
        var tmp = document.createElement("div");
        tmp.appendChild(el);
        return tmp.innerHTML;
    };

    var stringStarts = function(str,starts){
        var len = starts.length;
        return str.substring(0, len) === starts;
    };

    /**
     * Cross-browser means of setting innerHTML on a DOM Element.
     * @param {Element} el
     * @param {string} html
     */
    var _html = (JQUERY_AVAILABLE
            ? function(el, html) {
                jQuery(el).html(html);
            }
            : function(el, html) {
                try {
                    el.innerHTML = html;
                }
                catch (e) {
                    var div = document.createElement('div');
                    div.innerHTML = html;
                    while (el.firstChild)
                        el.removeChild(el.firstChild);
                    while (div.firstChild)
                        el.appendChild(div.firstChild);
                }
            }
    );

    var appendInner = function(parent,elem){
        var child = null;
        if(parent.firstChild){
            while (parent.firstChild){
                child = parent.firstChild;
                parent = child;
            }
        }else{
            child = parent;
        }
        child.appendChild(elem);
    };

    var selectElement = function(fragment,selector,type){
        if(isDef(fragment) && isDef(fragment["querySelector"]) && (type === 'id' || type === 'class')){
            if(type === 'class'){
                return fragment.querySelectorAll(selector);
            }else{
                return fragment.querySelector(selector);
            }
        }else{
            if(!JQUERY_AVAILABLE){
                var d = createElement('div');
                d.appendChild(fragment);
                d = d.firstChild;
                if(d.querySelector || type ==='query'){
                    return d.querySelectorAll(selector);
                }
            }
            switch(type) {
                case 'id':
                    return JQUERY_AVAILABLE ? jQuery(this.$el).find(selector).get(0) : d.getElementById(selector.slice(1));
                    break;
                case 'class':
                    return JQUERY_AVAILABLE ? jQuery(this.$el).find(selector).get().length === 1 ? jQuery(this.$el).find(selector).get(0) : jQuery(this.$el).find(selector).get() : d.getElementsByClassName(selector.slice(1));
                    break;
                case 'tag':
                    return JQUERY_AVAILABLE ? jQuery(this.$el).find(selector).get().length === 1 ? jQuery(this.$el).find(selector).get(0) : jQuery(this.$el).find(selector).get() : d.getElementsByTagName(selector.toUpperCase());
                    break;
                case 'name':
                    return JQUERY_AVAILABLE ? jQuery(this.$el).find("[name="+selector).get().length === 1 ? jQuery(this.$el).find("[name="+selector).get(0) : jQuery(this.$el).find("[name="+selector).get() : d.getElementsByName(selector);
                    break;
            }
        }
        throw new Error("We could't get the element. Please check your selectors!");
    };

    /**
     * Tag names defined in the HTML 4.01 Strict and Frameset DTDs and new elements
     * from HTML5.
     * @const
     * @type {Array.<string>}
     */
    var TAG_NAMES = ('a   address area article aside audio b bdi bdo big ' +
        'blockquote body br button canvas caption cite code col colgroup command ' +
        'datalist dd del details dfn div dl dt em embed fieldset figcaption figure ' +
        'footer form frame frameset h1 h2 h3 h4 h5 h6 hr head header hgroup html i ' +
        'iframe img input ins kbd keygen label legend li link map mark meta meter ' +
        'nav noscript object ol optgroup option output p param pre ' +
        'progress q rp rt samp script section select small source span strong ' +
        'style sub summary sup table tbody td textarea tfoot th thead time title tr ' +
        'track tt ul var video wbr').split(' ');


    /**
     * @class Generatorjs
     * @constructor
    */
    var Generatorjs = function(el,options){
        this.version = '1.0';
        var functions = {},
            properties = {},
            _dom = null;

        // Needed for Private methods,properties
        var that = this;

        this._options = {
            type:'DOM',
            events:{

            },
            env : 'prod'
        };

        if(options !== null && isPlainObject(options)){
            extend(this._options,options);
        }

        if(isDef(el)){
            if(!(isPlainObject(el) || isString(el))){
                throw new TypeError('Element passed to constructor must be an object/string!\n'+typeof options + ' is given! ');
            }
        }

        if(isString(el)){
            _dom = createElementsUntil(el);
        }else if (isArray(el) || isPlainObject(el)){
            _dom = createElementsObjectUntil(el);
        }

        if(_dom !== null && isObject(_dom)){
            this.$fragment = _dom;
        }

        //for unit testing make private functions available outside of the module
        if(isDef(this._options['env']) && this._options['env'] === 'dev'){
            properties._dom = _dom;
            functions.objectOptSplitter = objectOptSplitter;
            functions.createElementsUntil = createElementsUntil;
            functions.createElementsObjectUntil = createElementsObjectUntil;

            //when we want to unit test internal functions/properties of the library
            //we can access it via __g property through { env:'dev' } option
            this.__g = {
                functions:functions,
                properties:properties
            }
        }
        this.render();
    };

    Generatorjs.prototype.prevState = function(){
        if(this.$prevEl) this.$el = this.$prevEl;
        if(this.$prevFragment) this.$fragment = this.$prevFragment;
    };

    // why are we using fragment.cloneNode
    /* If child is a reference to an existing node in the document, appendChild moves it from its current position
     * to the new position (i.e. there is no requirement to remove the node from its parent node before appending it to some other node).
     * This also means that a node can't be in two points of the document simultaneously. So if the node already has a parent,
     * it is first removed, then appended at the new position.*/
    /*
     * A common use for DocumentFragment is to create one, assemble a DOM subtree within it, then append or insert the fragment into the DOM
     * using Node interface methods such as appendChild() or insertBefore(). Doing this moves the fragment's nodes into the DOM, leaving
     * behind an empty DocumentFragment. Because all of the nodes are inserted into the document at once, only one reflow and render is
     * triggered instead of potentially one for each node inserted if they were inserted separately.*/
    Generatorjs.prototype.render = function(){
        var d = createElement('div'),
            f = this.$fragment.cloneNode(true);
        d.appendChild(f);
        d = d.firstChild;
        this.$el = d;
    };

    Generatorjs.prototype.addEvent = function(evnt,func){
        addEvent.call(this,evnt,func);
        return this;
    };

    Generatorjs.prototype.deleteEvent = function(evnt,func){
        removeEvent.call(this,evnt,func);
        return this;
    };

    /**
     * @param {Object|String} 'id' | 'class' | 'name'
     * @param {String}
     * */
    Generatorjs.prototype.get = function(){
        var len = arguments.length,
            _el,
            fragment;
        if(len > 3){
            throw new TypeError('Wrong number of argument supplied to Generatorjs.get function.Max 3 allowed based on usage. ');
        }else if(len == 0){
            return this.$fragment;
        }else if(len === 1){
            fragment = this.$fragment.cloneNode(true);
            var elem = arguments[0];
            if(!isString(elem)){
                throw new TypeError('Argument passed should be a string. ' + typeof elem + ' is given!');
            }
            if(stringStarts(elem,'.')){
                _el = selectElement.call(this,fragment,elem,'class');
            }else if(stringStarts(elem,'#')){
                _el = selectElement.call(this,fragment,elem,'id');
            }else if(stringStarts(elem,'name=')){
                var name = elem.split('=')[1];
                _el = selectElement.call(this,fragment,name,'name');
            //for attribute selector
            //JQuery jQuery( "[attribute='value']" )
            }else if(stringStarts(elem,'[') || elem.indexOf('[') !== -1){
                _el = selectElement.call(this,fragment,elem,'attr');
            }else if(elem === '*'){
                var div = createElement('div');
                div.appendChild(fragment);
                _el = div.firstChild;
            }else{
                if(index(TAG_NAMES,elem.toLowerCase())){
                    _el = selectElement.call(this,fragment,elem.toLowerCase(),'tag');
                }else{
                    //here is a special Generatorjs selector
                    //.get('p 4')
                    //_el = this.selector(elem);
                }
            }
            this.$prevEl = this.$selected ? this.$selected : this.$el;
            this.$selected  = _el;
        }
        return this;
    };

    Generatorjs.prototype.setContent = function (content, elem) {
        if(elem !== null){
            _html(elem,content);
        }
        if(isString(content)){
            _html(this.$selected,content);
        }
        return this;
    };

    Generatorjs.prototype.setText = function (text) {
        if(!this.$selected){
            throw new Error('No element is selected.You should use .get() first!');
        }
        try{
            this.$selected.appendChild(createText(text));
        }catch (e){
            throw new Error("Couldn't set text to element");
        }
        return this;
    };

    //must provide element object or jQuery object
    Generatorjs.prototype.attachTo = function (element) {
        if(!this.$selected && !this.$el){
            throw new Error('No elements Generatorjs object has to be attached!');
        }
        var _el = this.$selected ? this.$selected : this.$el;

        //if it is JQuery object
        if(JQUERY_AVAILABLE && element instanceof jQuery){
            $( element).prepend( _el );

        //if it is html element
        }else if(isDef(element.nodeType) && element.nodeType > 0){
            element.insertBefore(_el, element.firstChild);
        }else{
            throw new Error("Elements to be attached must be of either type Element Object or JQuery Object")
        }
        return this;
    };

    //args can be nodelist , element ,JQuery object or Generatorjs instance
    Generatorjs.prototype.append = function(args){
        var div = createElement('div'),
            that = this;

        div.appendChild( this.$fragment.cloneNode(true) );
        div = div.firstChild;

        //if it is JQuery object
       if(JQUERY_AVAILABLE && args instanceof jQuery) {
           var elem = args.get();
           forEach(elem, function (index, item) {
               div.appendChild(item);
           });

       //if it is NodeList
       }else if(isNodeList(args)){
            forEach(args,function(index,item){
                div.appendChild(item);
            });

        //if it is html element
        }else if(isDef(args.nodeType) && args.nodeType > 0){
           div.appendChild(args);

        //if it is Generatorjs object
        }else if(args instanceof Generatorjs){
           div.appendChild(args.$el);
        }

        this.$el = div;
        return this;
    };

    Generatorjs.prototype.getString = function(){
        return getStringOfElement(this.$selected ? this.$selected : this.$el);
    };

    Generatorjs.prototype.previous = function(){
        return  this.$prev;
    };
    return Generatorjs;
}));