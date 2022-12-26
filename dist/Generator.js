(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.GeneratorJs = factory());
})(this, (function () { 'use strict';

  function ownKeys$1(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      enumerableOnly && (symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      })), keys.push.apply(keys, symbols);
    }
    return keys;
  }
  function _objectSpread2(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = null != arguments[i] ? arguments[i] : {};
      i % 2 ? ownKeys$1(Object(source), !0).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$1(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
    return target;
  }
  function _typeof(obj) {
    "@babel/helpers - typeof";

    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
      return typeof obj;
    } : function (obj) {
      return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    }, _typeof(obj);
  }
  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    Object.defineProperty(Constructor, "prototype", {
      writable: false
    });
    return Constructor;
  }
  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }
    return obj;
  }
  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    Object.defineProperty(subClass, "prototype", {
      writable: false
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
  }
  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
  }
  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };
    return _setPrototypeOf(o, p);
  }
  function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
      Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
      return true;
    } catch (e) {
      return false;
    }
  }
  function _construct(Parent, args, Class) {
    if (_isNativeReflectConstruct()) {
      _construct = Reflect.construct.bind();
    } else {
      _construct = function _construct(Parent, args, Class) {
        var a = [null];
        a.push.apply(a, args);
        var Constructor = Function.bind.apply(Parent, a);
        var instance = new Constructor();
        if (Class) _setPrototypeOf(instance, Class.prototype);
        return instance;
      };
    }
    return _construct.apply(null, arguments);
  }
  function _isNativeFunction(fn) {
    return Function.toString.call(fn).indexOf("[native code]") !== -1;
  }
  function _wrapNativeSuper(Class) {
    var _cache = typeof Map === "function" ? new Map() : undefined;
    _wrapNativeSuper = function _wrapNativeSuper(Class) {
      if (Class === null || !_isNativeFunction(Class)) return Class;
      if (typeof Class !== "function") {
        throw new TypeError("Super expression must either be null or a function");
      }
      if (typeof _cache !== "undefined") {
        if (_cache.has(Class)) return _cache.get(Class);
        _cache.set(Class, Wrapper);
      }
      function Wrapper() {
        return _construct(Class, arguments, _getPrototypeOf(this).constructor);
      }
      Wrapper.prototype = Object.create(Class.prototype, {
        constructor: {
          value: Wrapper,
          enumerable: false,
          writable: true,
          configurable: true
        }
      });
      return _setPrototypeOf(Wrapper, Class);
    };
    return _wrapNativeSuper(Class);
  }
  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
  }
  function _possibleConstructorReturn(self, call) {
    if (call && (typeof call === "object" || typeof call === "function")) {
      return call;
    } else if (call !== void 0) {
      throw new TypeError("Derived constructors may only return object or undefined");
    }
    return _assertThisInitialized(self);
  }
  function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();
    return function _createSuperInternal() {
      var Super = _getPrototypeOf(Derived),
        result;
      if (hasNativeReflectConstruct) {
        var NewTarget = _getPrototypeOf(this).constructor;
        result = Reflect.construct(Super, arguments, NewTarget);
      } else {
        result = Super.apply(this, arguments);
      }
      return _possibleConstructorReturn(this, result);
    };
  }
  function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
  }
  function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
  }
  function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
  }
  function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
  }
  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
    return arr2;
  }
  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

  function createCommonjsModule(fn, basedir, module) {
  	return module = {
  		path: basedir,
  		exports: {},
  		require: function (path, base) {
  			return commonjsRequire(path, (base === undefined || base === null) ? module.path : base);
  		}
  	}, fn(module, module.exports), module.exports;
  }

  function commonjsRequire () {
  	throw new Error('Dynamic requires are not currently supported by @rollup/plugin-commonjs');
  }

  var check = function (it) {
    return it && it.Math == Math && it;
  };

  // https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
  var global_1 =
    // eslint-disable-next-line es/no-global-this -- safe
    check(typeof globalThis == 'object' && globalThis) ||
    check(typeof window == 'object' && window) ||
    // eslint-disable-next-line no-restricted-globals -- safe
    check(typeof self == 'object' && self) ||
    check(typeof commonjsGlobal == 'object' && commonjsGlobal) ||
    // eslint-disable-next-line no-new-func -- fallback
    (function () { return this; })() || Function('return this')();

  // eslint-disable-next-line es/no-object-defineproperty -- safe
  var defineProperty$1 = Object.defineProperty;

  var defineGlobalProperty = function (key, value) {
    try {
      defineProperty$1(global_1, key, { value: value, configurable: true, writable: true });
    } catch (error) {
      global_1[key] = value;
    } return value;
  };

  var SHARED = '__core-js_shared__';
  var store$1 = global_1[SHARED] || defineGlobalProperty(SHARED, {});

  var sharedStore = store$1;

  var shared = createCommonjsModule(function (module) {
  (module.exports = function (key, value) {
    return sharedStore[key] || (sharedStore[key] = value !== undefined ? value : {});
  })('versions', []).push({
    version: '3.25.5',
    mode: 'global',
    copyright: '© 2014-2022 Denis Pushkarev (zloirock.ru)',
    license: 'https://github.com/zloirock/core-js/blob/v3.25.5/LICENSE',
    source: 'https://github.com/zloirock/core-js'
  });
  });

  var fails = function (exec) {
    try {
      return !!exec();
    } catch (error) {
      return true;
    }
  };

  var functionBindNative = !fails(function () {
    // eslint-disable-next-line es/no-function-prototype-bind -- safe
    var test = (function () { /* empty */ }).bind();
    // eslint-disable-next-line no-prototype-builtins -- safe
    return typeof test != 'function' || test.hasOwnProperty('prototype');
  });

  var FunctionPrototype$1 = Function.prototype;
  var call$1 = FunctionPrototype$1.call;
  var uncurryThisWithBind = functionBindNative && FunctionPrototype$1.bind.bind(call$1, call$1);

  var functionUncurryThisRaw = function (fn) {
    return functionBindNative ? uncurryThisWithBind(fn) : function () {
      return call$1.apply(fn, arguments);
    };
  };

  var toString$1 = functionUncurryThisRaw({}.toString);
  var stringSlice$1 = functionUncurryThisRaw(''.slice);

  var classofRaw = function (it) {
    return stringSlice$1(toString$1(it), 8, -1);
  };

  var functionUncurryThis = function (fn) {
    // Nashorn bug:
    //   https://github.com/zloirock/core-js/issues/1128
    //   https://github.com/zloirock/core-js/issues/1130
    if (classofRaw(fn) === 'Function') return functionUncurryThisRaw(fn);
  };

  // we can't use just `it == null` since of `document.all` special case
  // https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot-aec
  var isNullOrUndefined = function (it) {
    return it === null || it === undefined;
  };

  var $TypeError$8 = TypeError;

  // `RequireObjectCoercible` abstract operation
  // https://tc39.es/ecma262/#sec-requireobjectcoercible
  var requireObjectCoercible = function (it) {
    if (isNullOrUndefined(it)) throw $TypeError$8("Can't call method on " + it);
    return it;
  };

  var $Object$4 = Object;

  // `ToObject` abstract operation
  // https://tc39.es/ecma262/#sec-toobject
  var toObject = function (argument) {
    return $Object$4(requireObjectCoercible(argument));
  };

  var hasOwnProperty = functionUncurryThis({}.hasOwnProperty);

  // `HasOwnProperty` abstract operation
  // https://tc39.es/ecma262/#sec-hasownproperty
  // eslint-disable-next-line es/no-object-hasown -- safe
  var hasOwnProperty_1 = Object.hasOwn || function hasOwn(it, key) {
    return hasOwnProperty(toObject(it), key);
  };

  var id = 0;
  var postfix = Math.random();
  var toString = functionUncurryThis(1.0.toString);

  var uid = function (key) {
    return 'Symbol(' + (key === undefined ? '' : key) + ')_' + toString(++id + postfix, 36);
  };

  var documentAll$2 = typeof document == 'object' && document.all;

  // https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot
  var IS_HTMLDDA = typeof documentAll$2 == 'undefined' && documentAll$2 !== undefined;

  var documentAll_1 = {
    all: documentAll$2,
    IS_HTMLDDA: IS_HTMLDDA
  };

  var documentAll$1 = documentAll_1.all;

  // `IsCallable` abstract operation
  // https://tc39.es/ecma262/#sec-iscallable
  var isCallable = documentAll_1.IS_HTMLDDA ? function (argument) {
    return typeof argument == 'function' || argument === documentAll$1;
  } : function (argument) {
    return typeof argument == 'function';
  };

  var aFunction = function (argument) {
    return isCallable(argument) ? argument : undefined;
  };

  var getBuiltIn = function (namespace, method) {
    return arguments.length < 2 ? aFunction(global_1[namespace]) : global_1[namespace] && global_1[namespace][method];
  };

  var engineUserAgent = getBuiltIn('navigator', 'userAgent') || '';

  var process = global_1.process;
  var Deno = global_1.Deno;
  var versions = process && process.versions || Deno && Deno.version;
  var v8 = versions && versions.v8;
  var match, version;

  if (v8) {
    match = v8.split('.');
    // in old Chrome, versions of V8 isn't V8 = Chrome / 10
    // but their correct versions are not interesting for us
    version = match[0] > 0 && match[0] < 4 ? 1 : +(match[0] + match[1]);
  }

  // BrowserFS NodeJS `process` polyfill incorrectly set `.v8` to `0.0`
  // so check `userAgent` even if `.v8` exists, but 0
  if (!version && engineUserAgent) {
    match = engineUserAgent.match(/Edge\/(\d+)/);
    if (!match || match[1] >= 74) {
      match = engineUserAgent.match(/Chrome\/(\d+)/);
      if (match) version = +match[1];
    }
  }

  var engineV8Version = version;

  /* eslint-disable es/no-symbol -- required for testing */



  // eslint-disable-next-line es/no-object-getownpropertysymbols -- required for testing
  var symbolConstructorDetection = !!Object.getOwnPropertySymbols && !fails(function () {
    var symbol = Symbol();
    // Chrome 38 Symbol has incorrect toString conversion
    // `get-own-property-symbols` polyfill symbols converted to object are not Symbol instances
    return !String(symbol) || !(Object(symbol) instanceof Symbol) ||
      // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
      !Symbol.sham && engineV8Version && engineV8Version < 41;
  });

  /* eslint-disable es/no-symbol -- required for testing */


  var useSymbolAsUid = symbolConstructorDetection
    && !Symbol.sham
    && typeof Symbol.iterator == 'symbol';

  var WellKnownSymbolsStore = shared('wks');
  var Symbol$1 = global_1.Symbol;
  var symbolFor = Symbol$1 && Symbol$1['for'];
  var createWellKnownSymbol = useSymbolAsUid ? Symbol$1 : Symbol$1 && Symbol$1.withoutSetter || uid;

  var wellKnownSymbol = function (name) {
    if (!hasOwnProperty_1(WellKnownSymbolsStore, name) || !(symbolConstructorDetection || typeof WellKnownSymbolsStore[name] == 'string')) {
      var description = 'Symbol.' + name;
      if (symbolConstructorDetection && hasOwnProperty_1(Symbol$1, name)) {
        WellKnownSymbolsStore[name] = Symbol$1[name];
      } else if (useSymbolAsUid && symbolFor) {
        WellKnownSymbolsStore[name] = symbolFor(description);
      } else {
        WellKnownSymbolsStore[name] = createWellKnownSymbol(description);
      }
    } return WellKnownSymbolsStore[name];
  };

  var TO_STRING_TAG$2 = wellKnownSymbol('toStringTag');
  var test = {};

  test[TO_STRING_TAG$2] = 'z';

  var toStringTagSupport = String(test) === '[object z]';

  // Detect IE8's incomplete defineProperty implementation
  var descriptors = !fails(function () {
    // eslint-disable-next-line es/no-object-defineproperty -- required for testing
    return Object.defineProperty({}, 1, { get: function () { return 7; } })[1] != 7;
  });

  var documentAll = documentAll_1.all;

  var isObject = documentAll_1.IS_HTMLDDA ? function (it) {
    return typeof it == 'object' ? it !== null : isCallable(it) || it === documentAll;
  } : function (it) {
    return typeof it == 'object' ? it !== null : isCallable(it);
  };

  var document$1 = global_1.document;
  // typeof document.createElement is 'object' in old IE
  var EXISTS$1 = isObject(document$1) && isObject(document$1.createElement);

  var documentCreateElement = function (it) {
    return EXISTS$1 ? document$1.createElement(it) : {};
  };

  // Thanks to IE8 for its funny defineProperty
  var ie8DomDefine = !descriptors && !fails(function () {
    // eslint-disable-next-line es/no-object-defineproperty -- required for testing
    return Object.defineProperty(documentCreateElement('div'), 'a', {
      get: function () { return 7; }
    }).a != 7;
  });

  // V8 ~ Chrome 36-
  // https://bugs.chromium.org/p/v8/issues/detail?id=3334
  var v8PrototypeDefineBug = descriptors && fails(function () {
    // eslint-disable-next-line es/no-object-defineproperty -- required for testing
    return Object.defineProperty(function () { /* empty */ }, 'prototype', {
      value: 42,
      writable: false
    }).prototype != 42;
  });

  var $String$3 = String;
  var $TypeError$7 = TypeError;

  // `Assert: Type(argument) is Object`
  var anObject = function (argument) {
    if (isObject(argument)) return argument;
    throw $TypeError$7($String$3(argument) + ' is not an object');
  };

  var call = Function.prototype.call;

  var functionCall = functionBindNative ? call.bind(call) : function () {
    return call.apply(call, arguments);
  };

  var objectIsPrototypeOf = functionUncurryThis({}.isPrototypeOf);

  var $Object$3 = Object;

  var isSymbol = useSymbolAsUid ? function (it) {
    return typeof it == 'symbol';
  } : function (it) {
    var $Symbol = getBuiltIn('Symbol');
    return isCallable($Symbol) && objectIsPrototypeOf($Symbol.prototype, $Object$3(it));
  };

  var $String$2 = String;

  var tryToString = function (argument) {
    try {
      return $String$2(argument);
    } catch (error) {
      return 'Object';
    }
  };

  var $TypeError$6 = TypeError;

  // `Assert: IsCallable(argument) is true`
  var aCallable = function (argument) {
    if (isCallable(argument)) return argument;
    throw $TypeError$6(tryToString(argument) + ' is not a function');
  };

  // `GetMethod` abstract operation
  // https://tc39.es/ecma262/#sec-getmethod
  var getMethod = function (V, P) {
    var func = V[P];
    return isNullOrUndefined(func) ? undefined : aCallable(func);
  };

  var $TypeError$5 = TypeError;

  // `OrdinaryToPrimitive` abstract operation
  // https://tc39.es/ecma262/#sec-ordinarytoprimitive
  var ordinaryToPrimitive = function (input, pref) {
    var fn, val;
    if (pref === 'string' && isCallable(fn = input.toString) && !isObject(val = functionCall(fn, input))) return val;
    if (isCallable(fn = input.valueOf) && !isObject(val = functionCall(fn, input))) return val;
    if (pref !== 'string' && isCallable(fn = input.toString) && !isObject(val = functionCall(fn, input))) return val;
    throw $TypeError$5("Can't convert object to primitive value");
  };

  var $TypeError$4 = TypeError;
  var TO_PRIMITIVE = wellKnownSymbol('toPrimitive');

  // `ToPrimitive` abstract operation
  // https://tc39.es/ecma262/#sec-toprimitive
  var toPrimitive = function (input, pref) {
    if (!isObject(input) || isSymbol(input)) return input;
    var exoticToPrim = getMethod(input, TO_PRIMITIVE);
    var result;
    if (exoticToPrim) {
      if (pref === undefined) pref = 'default';
      result = functionCall(exoticToPrim, input, pref);
      if (!isObject(result) || isSymbol(result)) return result;
      throw $TypeError$4("Can't convert object to primitive value");
    }
    if (pref === undefined) pref = 'number';
    return ordinaryToPrimitive(input, pref);
  };

  // `ToPropertyKey` abstract operation
  // https://tc39.es/ecma262/#sec-topropertykey
  var toPropertyKey = function (argument) {
    var key = toPrimitive(argument, 'string');
    return isSymbol(key) ? key : key + '';
  };

  var $TypeError$3 = TypeError;
  // eslint-disable-next-line es/no-object-defineproperty -- safe
  var $defineProperty = Object.defineProperty;
  // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
  var $getOwnPropertyDescriptor$1 = Object.getOwnPropertyDescriptor;
  var ENUMERABLE = 'enumerable';
  var CONFIGURABLE$1 = 'configurable';
  var WRITABLE = 'writable';

  // `Object.defineProperty` method
  // https://tc39.es/ecma262/#sec-object.defineproperty
  var f$5 = descriptors ? v8PrototypeDefineBug ? function defineProperty(O, P, Attributes) {
    anObject(O);
    P = toPropertyKey(P);
    anObject(Attributes);
    if (typeof O === 'function' && P === 'prototype' && 'value' in Attributes && WRITABLE in Attributes && !Attributes[WRITABLE]) {
      var current = $getOwnPropertyDescriptor$1(O, P);
      if (current && current[WRITABLE]) {
        O[P] = Attributes.value;
        Attributes = {
          configurable: CONFIGURABLE$1 in Attributes ? Attributes[CONFIGURABLE$1] : current[CONFIGURABLE$1],
          enumerable: ENUMERABLE in Attributes ? Attributes[ENUMERABLE] : current[ENUMERABLE],
          writable: false
        };
      }
    } return $defineProperty(O, P, Attributes);
  } : $defineProperty : function defineProperty(O, P, Attributes) {
    anObject(O);
    P = toPropertyKey(P);
    anObject(Attributes);
    if (ie8DomDefine) try {
      return $defineProperty(O, P, Attributes);
    } catch (error) { /* empty */ }
    if ('get' in Attributes || 'set' in Attributes) throw $TypeError$3('Accessors not supported');
    if ('value' in Attributes) O[P] = Attributes.value;
    return O;
  };

  var objectDefineProperty = {
  	f: f$5
  };

  var FunctionPrototype = Function.prototype;
  // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
  var getDescriptor = descriptors && Object.getOwnPropertyDescriptor;

  var EXISTS = hasOwnProperty_1(FunctionPrototype, 'name');
  // additional protection from minified / mangled / dropped function names
  var PROPER = EXISTS && (function something() { /* empty */ }).name === 'something';
  var CONFIGURABLE = EXISTS && (!descriptors || (descriptors && getDescriptor(FunctionPrototype, 'name').configurable));

  var functionName = {
    EXISTS: EXISTS,
    PROPER: PROPER,
    CONFIGURABLE: CONFIGURABLE
  };

  var functionToString = functionUncurryThis(Function.toString);

  // this helper broken in `core-js@3.4.1-3.4.4`, so we can't use `shared` helper
  if (!isCallable(sharedStore.inspectSource)) {
    sharedStore.inspectSource = function (it) {
      return functionToString(it);
    };
  }

  var inspectSource = sharedStore.inspectSource;

  var WeakMap$1 = global_1.WeakMap;

  var weakMapBasicDetection = isCallable(WeakMap$1) && /native code/.test(String(WeakMap$1));

  var createPropertyDescriptor = function (bitmap, value) {
    return {
      enumerable: !(bitmap & 1),
      configurable: !(bitmap & 2),
      writable: !(bitmap & 4),
      value: value
    };
  };

  var createNonEnumerableProperty = descriptors ? function (object, key, value) {
    return objectDefineProperty.f(object, key, createPropertyDescriptor(1, value));
  } : function (object, key, value) {
    object[key] = value;
    return object;
  };

  var keys = shared('keys');

  var sharedKey = function (key) {
    return keys[key] || (keys[key] = uid(key));
  };

  var hiddenKeys$1 = {};

  var OBJECT_ALREADY_INITIALIZED = 'Object already initialized';
  var TypeError$1 = global_1.TypeError;
  var WeakMap = global_1.WeakMap;
  var set, get, has;

  var enforce = function (it) {
    return has(it) ? get(it) : set(it, {});
  };

  var getterFor = function (TYPE) {
    return function (it) {
      var state;
      if (!isObject(it) || (state = get(it)).type !== TYPE) {
        throw TypeError$1('Incompatible receiver, ' + TYPE + ' required');
      } return state;
    };
  };

  if (weakMapBasicDetection || sharedStore.state) {
    var store = sharedStore.state || (sharedStore.state = new WeakMap());
    /* eslint-disable no-self-assign -- prototype methods protection */
    store.get = store.get;
    store.has = store.has;
    store.set = store.set;
    /* eslint-enable no-self-assign -- prototype methods protection */
    set = function (it, metadata) {
      if (store.has(it)) throw TypeError$1(OBJECT_ALREADY_INITIALIZED);
      metadata.facade = it;
      store.set(it, metadata);
      return metadata;
    };
    get = function (it) {
      return store.get(it) || {};
    };
    has = function (it) {
      return store.has(it);
    };
  } else {
    var STATE = sharedKey('state');
    hiddenKeys$1[STATE] = true;
    set = function (it, metadata) {
      if (hasOwnProperty_1(it, STATE)) throw TypeError$1(OBJECT_ALREADY_INITIALIZED);
      metadata.facade = it;
      createNonEnumerableProperty(it, STATE, metadata);
      return metadata;
    };
    get = function (it) {
      return hasOwnProperty_1(it, STATE) ? it[STATE] : {};
    };
    has = function (it) {
      return hasOwnProperty_1(it, STATE);
    };
  }

  var internalState = {
    set: set,
    get: get,
    has: has,
    enforce: enforce,
    getterFor: getterFor
  };

  var makeBuiltIn_1 = createCommonjsModule(function (module) {
  var CONFIGURABLE_FUNCTION_NAME = functionName.CONFIGURABLE;



  var enforceInternalState = internalState.enforce;
  var getInternalState = internalState.get;
  // eslint-disable-next-line es/no-object-defineproperty -- safe
  var defineProperty = Object.defineProperty;

  var CONFIGURABLE_LENGTH = descriptors && !fails(function () {
    return defineProperty(function () { /* empty */ }, 'length', { value: 8 }).length !== 8;
  });

  var TEMPLATE = String(String).split('String');

  var makeBuiltIn = module.exports = function (value, name, options) {
    if (String(name).slice(0, 7) === 'Symbol(') {
      name = '[' + String(name).replace(/^Symbol\(([^)]*)\)/, '$1') + ']';
    }
    if (options && options.getter) name = 'get ' + name;
    if (options && options.setter) name = 'set ' + name;
    if (!hasOwnProperty_1(value, 'name') || (CONFIGURABLE_FUNCTION_NAME && value.name !== name)) {
      if (descriptors) defineProperty(value, 'name', { value: name, configurable: true });
      else value.name = name;
    }
    if (CONFIGURABLE_LENGTH && options && hasOwnProperty_1(options, 'arity') && value.length !== options.arity) {
      defineProperty(value, 'length', { value: options.arity });
    }
    try {
      if (options && hasOwnProperty_1(options, 'constructor') && options.constructor) {
        if (descriptors) defineProperty(value, 'prototype', { writable: false });
      // in V8 ~ Chrome 53, prototypes of some methods, like `Array.prototype.values`, are non-writable
      } else if (value.prototype) value.prototype = undefined;
    } catch (error) { /* empty */ }
    var state = enforceInternalState(value);
    if (!hasOwnProperty_1(state, 'source')) {
      state.source = TEMPLATE.join(typeof name == 'string' ? name : '');
    } return value;
  };

  // add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
  // eslint-disable-next-line no-extend-native -- required
  Function.prototype.toString = makeBuiltIn(function toString() {
    return isCallable(this) && getInternalState(this).source || inspectSource(this);
  }, 'toString');
  });

  var defineBuiltIn = function (O, key, value, options) {
    if (!options) options = {};
    var simple = options.enumerable;
    var name = options.name !== undefined ? options.name : key;
    if (isCallable(value)) makeBuiltIn_1(value, name, options);
    if (options.global) {
      if (simple) O[key] = value;
      else defineGlobalProperty(key, value);
    } else {
      try {
        if (!options.unsafe) delete O[key];
        else if (O[key]) simple = true;
      } catch (error) { /* empty */ }
      if (simple) O[key] = value;
      else objectDefineProperty.f(O, key, {
        value: value,
        enumerable: false,
        configurable: !options.nonConfigurable,
        writable: !options.nonWritable
      });
    } return O;
  };

  var TO_STRING_TAG$1 = wellKnownSymbol('toStringTag');
  var $Object$2 = Object;

  // ES3 wrong here
  var CORRECT_ARGUMENTS = classofRaw(function () { return arguments; }()) == 'Arguments';

  // fallback for IE11 Script Access Denied error
  var tryGet = function (it, key) {
    try {
      return it[key];
    } catch (error) { /* empty */ }
  };

  // getting tag from ES6+ `Object.prototype.toString`
  var classof = toStringTagSupport ? classofRaw : function (it) {
    var O, tag, result;
    return it === undefined ? 'Undefined' : it === null ? 'Null'
      // @@toStringTag case
      : typeof (tag = tryGet(O = $Object$2(it), TO_STRING_TAG$1)) == 'string' ? tag
      // builtinTag case
      : CORRECT_ARGUMENTS ? classofRaw(O)
      // ES3 arguments fallback
      : (result = classofRaw(O)) == 'Object' && isCallable(O.callee) ? 'Arguments' : result;
  };

  // `Object.prototype.toString` method implementation
  // https://tc39.es/ecma262/#sec-object.prototype.tostring
  var objectToString = toStringTagSupport ? {}.toString : function toString() {
    return '[object ' + classof(this) + ']';
  };

  // `Object.prototype.toString` method
  // https://tc39.es/ecma262/#sec-object.prototype.tostring
  if (!toStringTagSupport) {
    defineBuiltIn(Object.prototype, 'toString', objectToString, { unsafe: true });
  }

  var $propertyIsEnumerable$1 = {}.propertyIsEnumerable;
  // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
  var getOwnPropertyDescriptor$1 = Object.getOwnPropertyDescriptor;

  // Nashorn ~ JDK8 bug
  var NASHORN_BUG = getOwnPropertyDescriptor$1 && !$propertyIsEnumerable$1.call({ 1: 2 }, 1);

  // `Object.prototype.propertyIsEnumerable` method implementation
  // https://tc39.es/ecma262/#sec-object.prototype.propertyisenumerable
  var f$4 = NASHORN_BUG ? function propertyIsEnumerable(V) {
    var descriptor = getOwnPropertyDescriptor$1(this, V);
    return !!descriptor && descriptor.enumerable;
  } : $propertyIsEnumerable$1;

  var objectPropertyIsEnumerable = {
  	f: f$4
  };

  var $Object$1 = Object;
  var split = functionUncurryThis(''.split);

  // fallback for non-array-like ES3 and non-enumerable old V8 strings
  var indexedObject = fails(function () {
    // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
    // eslint-disable-next-line no-prototype-builtins -- safe
    return !$Object$1('z').propertyIsEnumerable(0);
  }) ? function (it) {
    return classofRaw(it) == 'String' ? split(it, '') : $Object$1(it);
  } : $Object$1;

  // toObject with fallback for non-array-like ES3 strings



  var toIndexedObject = function (it) {
    return indexedObject(requireObjectCoercible(it));
  };

  // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
  var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

  // `Object.getOwnPropertyDescriptor` method
  // https://tc39.es/ecma262/#sec-object.getownpropertydescriptor
  var f$3 = descriptors ? $getOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
    O = toIndexedObject(O);
    P = toPropertyKey(P);
    if (ie8DomDefine) try {
      return $getOwnPropertyDescriptor(O, P);
    } catch (error) { /* empty */ }
    if (hasOwnProperty_1(O, P)) return createPropertyDescriptor(!functionCall(objectPropertyIsEnumerable.f, O, P), O[P]);
  };

  var objectGetOwnPropertyDescriptor = {
  	f: f$3
  };

  var ceil = Math.ceil;
  var floor = Math.floor;

  // `Math.trunc` method
  // https://tc39.es/ecma262/#sec-math.trunc
  // eslint-disable-next-line es/no-math-trunc -- safe
  var mathTrunc = Math.trunc || function trunc(x) {
    var n = +x;
    return (n > 0 ? floor : ceil)(n);
  };

  // `ToIntegerOrInfinity` abstract operation
  // https://tc39.es/ecma262/#sec-tointegerorinfinity
  var toIntegerOrInfinity = function (argument) {
    var number = +argument;
    // eslint-disable-next-line no-self-compare -- NaN check
    return number !== number || number === 0 ? 0 : mathTrunc(number);
  };

  var max = Math.max;
  var min$1 = Math.min;

  // Helper for a popular repeating case of the spec:
  // Let integer be ? ToInteger(index).
  // If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
  var toAbsoluteIndex = function (index, length) {
    var integer = toIntegerOrInfinity(index);
    return integer < 0 ? max(integer + length, 0) : min$1(integer, length);
  };

  var min = Math.min;

  // `ToLength` abstract operation
  // https://tc39.es/ecma262/#sec-tolength
  var toLength = function (argument) {
    return argument > 0 ? min(toIntegerOrInfinity(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
  };

  // `LengthOfArrayLike` abstract operation
  // https://tc39.es/ecma262/#sec-lengthofarraylike
  var lengthOfArrayLike = function (obj) {
    return toLength(obj.length);
  };

  // `Array.prototype.{ indexOf, includes }` methods implementation
  var createMethod$3 = function (IS_INCLUDES) {
    return function ($this, el, fromIndex) {
      var O = toIndexedObject($this);
      var length = lengthOfArrayLike(O);
      var index = toAbsoluteIndex(fromIndex, length);
      var value;
      // Array#includes uses SameValueZero equality algorithm
      // eslint-disable-next-line no-self-compare -- NaN check
      if (IS_INCLUDES && el != el) while (length > index) {
        value = O[index++];
        // eslint-disable-next-line no-self-compare -- NaN check
        if (value != value) return true;
      // Array#indexOf ignores holes, Array#includes - not
      } else for (;length > index; index++) {
        if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
      } return !IS_INCLUDES && -1;
    };
  };

  var arrayIncludes = {
    // `Array.prototype.includes` method
    // https://tc39.es/ecma262/#sec-array.prototype.includes
    includes: createMethod$3(true),
    // `Array.prototype.indexOf` method
    // https://tc39.es/ecma262/#sec-array.prototype.indexof
    indexOf: createMethod$3(false)
  };

  var indexOf = arrayIncludes.indexOf;


  var push$2 = functionUncurryThis([].push);

  var objectKeysInternal = function (object, names) {
    var O = toIndexedObject(object);
    var i = 0;
    var result = [];
    var key;
    for (key in O) !hasOwnProperty_1(hiddenKeys$1, key) && hasOwnProperty_1(O, key) && push$2(result, key);
    // Don't enum bug & hidden keys
    while (names.length > i) if (hasOwnProperty_1(O, key = names[i++])) {
      ~indexOf(result, key) || push$2(result, key);
    }
    return result;
  };

  // IE8- don't enum bug keys
  var enumBugKeys = [
    'constructor',
    'hasOwnProperty',
    'isPrototypeOf',
    'propertyIsEnumerable',
    'toLocaleString',
    'toString',
    'valueOf'
  ];

  var hiddenKeys = enumBugKeys.concat('length', 'prototype');

  // `Object.getOwnPropertyNames` method
  // https://tc39.es/ecma262/#sec-object.getownpropertynames
  // eslint-disable-next-line es/no-object-getownpropertynames -- safe
  var f$2 = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
    return objectKeysInternal(O, hiddenKeys);
  };

  var objectGetOwnPropertyNames = {
  	f: f$2
  };

  // eslint-disable-next-line es/no-object-getownpropertysymbols -- safe
  var f$1 = Object.getOwnPropertySymbols;

  var objectGetOwnPropertySymbols = {
  	f: f$1
  };

  var concat$1 = functionUncurryThis([].concat);

  // all object keys, includes non-enumerable and symbols
  var ownKeys = getBuiltIn('Reflect', 'ownKeys') || function ownKeys(it) {
    var keys = objectGetOwnPropertyNames.f(anObject(it));
    var getOwnPropertySymbols = objectGetOwnPropertySymbols.f;
    return getOwnPropertySymbols ? concat$1(keys, getOwnPropertySymbols(it)) : keys;
  };

  var copyConstructorProperties = function (target, source, exceptions) {
    var keys = ownKeys(source);
    var defineProperty = objectDefineProperty.f;
    var getOwnPropertyDescriptor = objectGetOwnPropertyDescriptor.f;
    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];
      if (!hasOwnProperty_1(target, key) && !(exceptions && hasOwnProperty_1(exceptions, key))) {
        defineProperty(target, key, getOwnPropertyDescriptor(source, key));
      }
    }
  };

  var replacement = /#|\.prototype\./;

  var isForced = function (feature, detection) {
    var value = data[normalize(feature)];
    return value == POLYFILL ? true
      : value == NATIVE ? false
      : isCallable(detection) ? fails(detection)
      : !!detection;
  };

  var normalize = isForced.normalize = function (string) {
    return String(string).replace(replacement, '.').toLowerCase();
  };

  var data = isForced.data = {};
  var NATIVE = isForced.NATIVE = 'N';
  var POLYFILL = isForced.POLYFILL = 'P';

  var isForced_1 = isForced;

  var getOwnPropertyDescriptor = objectGetOwnPropertyDescriptor.f;






  /*
    options.target         - name of the target object
    options.global         - target is the global object
    options.stat           - export as static methods of target
    options.proto          - export as prototype methods of target
    options.real           - real prototype method for the `pure` version
    options.forced         - export even if the native feature is available
    options.bind           - bind methods to the target, required for the `pure` version
    options.wrap           - wrap constructors to preventing global pollution, required for the `pure` version
    options.unsafe         - use the simple assignment of property instead of delete + defineProperty
    options.sham           - add a flag to not completely full polyfills
    options.enumerable     - export as enumerable property
    options.dontCallGetSet - prevent calling a getter on target
    options.name           - the .name of the function if it does not match the key
  */
  var _export = function (options, source) {
    var TARGET = options.target;
    var GLOBAL = options.global;
    var STATIC = options.stat;
    var FORCED, target, key, targetProperty, sourceProperty, descriptor;
    if (GLOBAL) {
      target = global_1;
    } else if (STATIC) {
      target = global_1[TARGET] || defineGlobalProperty(TARGET, {});
    } else {
      target = (global_1[TARGET] || {}).prototype;
    }
    if (target) for (key in source) {
      sourceProperty = source[key];
      if (options.dontCallGetSet) {
        descriptor = getOwnPropertyDescriptor(target, key);
        targetProperty = descriptor && descriptor.value;
      } else targetProperty = target[key];
      FORCED = isForced_1(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
      // contained in target
      if (!FORCED && targetProperty !== undefined) {
        if (typeof sourceProperty == typeof targetProperty) continue;
        copyConstructorProperties(sourceProperty, targetProperty);
      }
      // add a flag to not completely full polyfills
      if (options.sham || (targetProperty && targetProperty.sham)) {
        createNonEnumerableProperty(sourceProperty, 'sham', true);
      }
      defineBuiltIn(target, key, sourceProperty, options);
    }
  };

  // `IsArray` abstract operation
  // https://tc39.es/ecma262/#sec-isarray
  // eslint-disable-next-line es/no-array-isarray -- safe
  var isArray = Array.isArray || function isArray(argument) {
    return classofRaw(argument) == 'Array';
  };

  // `Array.isArray` method
  // https://tc39.es/ecma262/#sec-array.isarray
  _export({ target: 'Array', stat: true }, {
    isArray: isArray
  });

  var bind = functionUncurryThis(functionUncurryThis.bind);

  // optional / simple context binding
  var functionBindContext = function (fn, that) {
    aCallable(fn);
    return that === undefined ? fn : functionBindNative ? bind(fn, that) : function (/* ...args */) {
      return fn.apply(that, arguments);
    };
  };

  var noop = function () { /* empty */ };
  var empty = [];
  var construct$1 = getBuiltIn('Reflect', 'construct');
  var constructorRegExp = /^\s*(?:class|function)\b/;
  var exec = functionUncurryThis(constructorRegExp.exec);
  var INCORRECT_TO_STRING = !constructorRegExp.exec(noop);

  var isConstructorModern = function isConstructor(argument) {
    if (!isCallable(argument)) return false;
    try {
      construct$1(noop, empty, argument);
      return true;
    } catch (error) {
      return false;
    }
  };

  var isConstructorLegacy = function isConstructor(argument) {
    if (!isCallable(argument)) return false;
    switch (classof(argument)) {
      case 'AsyncFunction':
      case 'GeneratorFunction':
      case 'AsyncGeneratorFunction': return false;
    }
    try {
      // we can't check .prototype since constructors produced by .bind haven't it
      // `Function#toString` throws on some built-it function in some legacy engines
      // (for example, `DOMQuad` and similar in FF41-)
      return INCORRECT_TO_STRING || !!exec(constructorRegExp, inspectSource(argument));
    } catch (error) {
      return true;
    }
  };

  isConstructorLegacy.sham = true;

  // `IsConstructor` abstract operation
  // https://tc39.es/ecma262/#sec-isconstructor
  var isConstructor = !construct$1 || fails(function () {
    var called;
    return isConstructorModern(isConstructorModern.call)
      || !isConstructorModern(Object)
      || !isConstructorModern(function () { called = true; })
      || called;
  }) ? isConstructorLegacy : isConstructorModern;

  var SPECIES$1 = wellKnownSymbol('species');
  var $Array$1 = Array;

  // a part of `ArraySpeciesCreate` abstract operation
  // https://tc39.es/ecma262/#sec-arrayspeciescreate
  var arraySpeciesConstructor = function (originalArray) {
    var C;
    if (isArray(originalArray)) {
      C = originalArray.constructor;
      // cross-realm fallback
      if (isConstructor(C) && (C === $Array$1 || isArray(C.prototype))) C = undefined;
      else if (isObject(C)) {
        C = C[SPECIES$1];
        if (C === null) C = undefined;
      }
    } return C === undefined ? $Array$1 : C;
  };

  // `ArraySpeciesCreate` abstract operation
  // https://tc39.es/ecma262/#sec-arrayspeciescreate
  var arraySpeciesCreate = function (originalArray, length) {
    return new (arraySpeciesConstructor(originalArray))(length === 0 ? 0 : length);
  };

  var push$1 = functionUncurryThis([].push);

  // `Array.prototype.{ forEach, map, filter, some, every, find, findIndex, filterReject }` methods implementation
  var createMethod$2 = function (TYPE) {
    var IS_MAP = TYPE == 1;
    var IS_FILTER = TYPE == 2;
    var IS_SOME = TYPE == 3;
    var IS_EVERY = TYPE == 4;
    var IS_FIND_INDEX = TYPE == 6;
    var IS_FILTER_REJECT = TYPE == 7;
    var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
    return function ($this, callbackfn, that, specificCreate) {
      var O = toObject($this);
      var self = indexedObject(O);
      var boundFunction = functionBindContext(callbackfn, that);
      var length = lengthOfArrayLike(self);
      var index = 0;
      var create = specificCreate || arraySpeciesCreate;
      var target = IS_MAP ? create($this, length) : IS_FILTER || IS_FILTER_REJECT ? create($this, 0) : undefined;
      var value, result;
      for (;length > index; index++) if (NO_HOLES || index in self) {
        value = self[index];
        result = boundFunction(value, index, O);
        if (TYPE) {
          if (IS_MAP) target[index] = result; // map
          else if (result) switch (TYPE) {
            case 3: return true;              // some
            case 5: return value;             // find
            case 6: return index;             // findIndex
            case 2: push$1(target, value);      // filter
          } else switch (TYPE) {
            case 4: return false;             // every
            case 7: push$1(target, value);      // filterReject
          }
        }
      }
      return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : target;
    };
  };

  var arrayIteration = {
    // `Array.prototype.forEach` method
    // https://tc39.es/ecma262/#sec-array.prototype.foreach
    forEach: createMethod$2(0),
    // `Array.prototype.map` method
    // https://tc39.es/ecma262/#sec-array.prototype.map
    map: createMethod$2(1),
    // `Array.prototype.filter` method
    // https://tc39.es/ecma262/#sec-array.prototype.filter
    filter: createMethod$2(2),
    // `Array.prototype.some` method
    // https://tc39.es/ecma262/#sec-array.prototype.some
    some: createMethod$2(3),
    // `Array.prototype.every` method
    // https://tc39.es/ecma262/#sec-array.prototype.every
    every: createMethod$2(4),
    // `Array.prototype.find` method
    // https://tc39.es/ecma262/#sec-array.prototype.find
    find: createMethod$2(5),
    // `Array.prototype.findIndex` method
    // https://tc39.es/ecma262/#sec-array.prototype.findIndex
    findIndex: createMethod$2(6),
    // `Array.prototype.filterReject` method
    // https://github.com/tc39/proposal-array-filtering
    filterReject: createMethod$2(7)
  };

  var arrayMethodIsStrict = function (METHOD_NAME, argument) {
    var method = [][METHOD_NAME];
    return !!method && fails(function () {
      // eslint-disable-next-line no-useless-call -- required for testing
      method.call(null, argument || function () { return 1; }, 1);
    });
  };

  var $forEach = arrayIteration.forEach;


  var STRICT_METHOD = arrayMethodIsStrict('forEach');

  // `Array.prototype.forEach` method implementation
  // https://tc39.es/ecma262/#sec-array.prototype.foreach
  var arrayForEach = !STRICT_METHOD ? function forEach(callbackfn /* , thisArg */) {
    return $forEach(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  // eslint-disable-next-line es/no-array-prototype-foreach -- safe
  } : [].forEach;

  // `Array.prototype.forEach` method
  // https://tc39.es/ecma262/#sec-array.prototype.foreach
  // eslint-disable-next-line es/no-array-prototype-foreach -- safe
  _export({ target: 'Array', proto: true, forced: [].forEach != arrayForEach }, {
    forEach: arrayForEach
  });

  // iterable DOM collections
  // flag - `iterable` interface - 'entries', 'keys', 'values', 'forEach' methods
  var domIterables = {
    CSSRuleList: 0,
    CSSStyleDeclaration: 0,
    CSSValueList: 0,
    ClientRectList: 0,
    DOMRectList: 0,
    DOMStringList: 0,
    DOMTokenList: 1,
    DataTransferItemList: 0,
    FileList: 0,
    HTMLAllCollection: 0,
    HTMLCollection: 0,
    HTMLFormElement: 0,
    HTMLSelectElement: 0,
    MediaList: 0,
    MimeTypeArray: 0,
    NamedNodeMap: 0,
    NodeList: 1,
    PaintRequestList: 0,
    Plugin: 0,
    PluginArray: 0,
    SVGLengthList: 0,
    SVGNumberList: 0,
    SVGPathSegList: 0,
    SVGPointList: 0,
    SVGStringList: 0,
    SVGTransformList: 0,
    SourceBufferList: 0,
    StyleSheetList: 0,
    TextTrackCueList: 0,
    TextTrackList: 0,
    TouchList: 0
  };

  // in old WebKit versions, `element.classList` is not an instance of global `DOMTokenList`


  var classList = documentCreateElement('span').classList;
  var DOMTokenListPrototype = classList && classList.constructor && classList.constructor.prototype;

  var domTokenListPrototype = DOMTokenListPrototype === Object.prototype ? undefined : DOMTokenListPrototype;

  var handlePrototype = function (CollectionPrototype) {
    // some Chrome versions have non-configurable methods on DOMTokenList
    if (CollectionPrototype && CollectionPrototype.forEach !== arrayForEach) try {
      createNonEnumerableProperty(CollectionPrototype, 'forEach', arrayForEach);
    } catch (error) {
      CollectionPrototype.forEach = arrayForEach;
    }
  };

  for (var COLLECTION_NAME in domIterables) {
    if (domIterables[COLLECTION_NAME]) {
      handlePrototype(global_1[COLLECTION_NAME] && global_1[COLLECTION_NAME].prototype);
    }
  }

  handlePrototype(domTokenListPrototype);

  // `Object.keys` method
  // https://tc39.es/ecma262/#sec-object.keys
  // eslint-disable-next-line es/no-object-keys -- safe
  var objectKeys = Object.keys || function keys(O) {
    return objectKeysInternal(O, enumBugKeys);
  };

  var $propertyIsEnumerable = objectPropertyIsEnumerable.f;

  var propertyIsEnumerable = functionUncurryThis($propertyIsEnumerable);
  var push = functionUncurryThis([].push);

  // `Object.{ entries, values }` methods implementation
  var createMethod$1 = function (TO_ENTRIES) {
    return function (it) {
      var O = toIndexedObject(it);
      var keys = objectKeys(O);
      var length = keys.length;
      var i = 0;
      var result = [];
      var key;
      while (length > i) {
        key = keys[i++];
        if (!descriptors || propertyIsEnumerable(O, key)) {
          push(result, TO_ENTRIES ? [key, O[key]] : O[key]);
        }
      }
      return result;
    };
  };

  var objectToArray = {
    // `Object.entries` method
    // https://tc39.es/ecma262/#sec-object.entries
    entries: createMethod$1(true),
    // `Object.values` method
    // https://tc39.es/ecma262/#sec-object.values
    values: createMethod$1(false)
  };

  var $entries = objectToArray.entries;

  // `Object.entries` method
  // https://tc39.es/ecma262/#sec-object.entries
  _export({ target: 'Object', stat: true }, {
    entries: function entries(O) {
      return $entries(O);
    }
  });

  /**
   * isPlainObject({}) ==> true
   * isPlainObject([]) ==> false
   * isPlainObject(window) ==> false
   */
  var isPlainObject = function isPlainObject(obj) {
    return Object.prototype.toString.call(obj) === '[object Object]';
  };
  var isString = function isString(value) {
    if (typeof value === 'string') {
      return true;
    }
    return Object.prototype.toString.call(value) === '[object String]';
  };
  var isDef = function isDef(v) {
    return v !== undefined && v !== null;
  };
  var emptyArray = function emptyArray(array) {
    return typeof array !== 'undefined' && array !== null && array.length <= 0;
  };
  var forEach = function forEach(iterable, callback) {
    if (Array.isArray(iterable)) {
      iterable.forEach(function (value, key) {
        return callback(key, value);
      });
    }
    if (isPlainObject(iterable)) {
      Object.entries(iterable).forEach(function (value) {
        return callback(value[0], value[1]);
      });
    }
  };
  // Cross-browser means of setting innerHTML on a DOM Element.
  var setHtml = function setHtml(el, html) {
    try {
      el.innerHTML = html;
    } catch (e) {
      var div = document.createElement('div');
      div.innerHTML = html;
      while (el.firstChild) {
        el.removeChild(el.firstChild);
      }
      while (div.firstChild) {
        el.appendChild(div.firstChild);
      }
    }
    return el;
  };
  var stringStarts = function stringStarts(str, starts) {
    return str.substring(0, starts.length) === starts;
  };

  var AbstractTask_1 = createCommonjsModule(function (module, exports) {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.AbstractTask = void 0;
  var AbstractTask = /** @class */ (function () {
      function AbstractTask() {
          this.nextTask = null;
      }
      AbstractTask.prototype.registerNextTask = function (task) {
          if (this.nextTask instanceof AbstractTask) {
              this.nextTask.registerNextTask(task);
          }
          else {
              this.nextTask = task;
          }
          return this;
      };
      AbstractTask.prototype.process = function (params, options) {
          var _a;
          if (this.shouldRun(params)) {
              var res = this.run(params);
              if (!options.allowMultipleRun || !this.nextTask) {
                  return res;
              }
          }
          return (_a = this.nextTask) === null || _a === void 0 ? void 0 : _a.process(params, options);
      };
      return AbstractTask;
  }());
  exports.AbstractTask = AbstractTask;
  });

  var TaskChain_1 = createCommonjsModule(function (module, exports) {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.TaskChain = void 0;

  var TaskChain = /** @class */ (function () {
      function TaskChain(parameters, options) {
          if (options === void 0) { options = {
              allowMultipleRun: true
          }; }
          this.parameters = parameters;
          this.options = options;
          this.entryPoint = null;
      }
      Object.defineProperty(TaskChain.prototype, "allowMultipleRun", {
          get: function () {
              return this.options.allowMultipleRun;
          },
          enumerable: false,
          configurable: true
      });
      Object.defineProperty(TaskChain.prototype, "params", {
          get: function () {
              return this.parameters;
          },
          enumerable: false,
          configurable: true
      });
      TaskChain.prototype.registerTask = function (task) {
          if (this.entryPoint instanceof AbstractTask_1.AbstractTask) {
              this.entryPoint.registerNextTask(task);
          }
          else {
              this.entryPoint = task;
          }
          return this;
      };
      TaskChain.prototype.processChain = function () {
          var _a;
          return (_a = this.entryPoint) === null || _a === void 0 ? void 0 : _a.process(this.parameters, this.options);
      };
      return TaskChain;
  }());
  exports.TaskChain = TaskChain;
  });

  var src = createCommonjsModule(function (module, exports) {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.AbstractTask = exports.TaskChain = void 0;

  Object.defineProperty(exports, "TaskChain", { enumerable: true, get: function () { return TaskChain_1.TaskChain; } });

  Object.defineProperty(exports, "AbstractTask", { enumerable: true, get: function () { return AbstractTask_1.AbstractTask; } });
  });

  var createElement = function createElement(el) {
    return window.document.createElement(el);
  };
  var appendTo = function appendTo(element, nodeToAppend) {
    try {
      element.append(nodeToAppend);
    } catch (e) {
      element.appendChild(nodeToAppend);
    }
  };
  function isNode(elem) {
    return !!elem.nodeType;
  }
  var removeNodes = function removeNodes(node) {
    if (node instanceof Node) {
      var _node$parentNode;
      (_node$parentNode = node.parentNode) === null || _node$parentNode === void 0 ? void 0 : _node$parentNode.removeChild(node);
    }
    if (node instanceof NodeList && node.length) {
      node.forEach(function (currentNode) {
        var _currentNode$parentNo;
        return (_currentNode$parentNo = currentNode.parentNode) === null || _currentNode$parentNo === void 0 ? void 0 : _currentNode$parentNo.removeChild(currentNode);
      });
    }
  };

  var InnerProcessor = /*#__PURE__*/function (_AbstractTask) {
    _inherits(InnerProcessor, _AbstractTask);
    var _super = _createSuper(InnerProcessor);
    function InnerProcessor() {
      _classCallCheck(this, InnerProcessor);
      return _super.apply(this, arguments);
    }
    _createClass(InnerProcessor, [{
      key: "shouldRun",
      value: function shouldRun(_ref) {
        var definitions = _ref.definitions;
        return !!(definitions !== null && definitions !== void 0 && definitions.inner);
      }
    }, {
      key: "run",
      value: function run(_ref2) {
        var elem = _ref2.elem,
          definitions = _ref2.definitions;
        var inner = definitions.inner;
        if (inner instanceof GeneratorJs && inner.$el) {
          appendTo(elem, inner.$el);
          return elem;
        }
        if (isString(inner)) {
          return setHtml(elem, inner);
        }
        appendTo(elem, inner);
        return elem;
      }
    }]);
    return InnerProcessor;
  }(src.AbstractTask);

  var AttributeProcessor = /*#__PURE__*/function (_AbstractTask) {
    _inherits(AttributeProcessor, _AbstractTask);
    var _super = _createSuper(AttributeProcessor);
    function AttributeProcessor() {
      _classCallCheck(this, AttributeProcessor);
      return _super.apply(this, arguments);
    }
    _createClass(AttributeProcessor, [{
      key: "shouldRun",
      value: function shouldRun(_ref) {
        var definitions = _ref.definitions;
        return !!(definitions !== null && definitions !== void 0 && definitions.attrs);
      }
    }, {
      key: "run",
      value: function run(_ref2) {
        var elem = _ref2.elem,
          definitions = _ref2.definitions;
        var attrs = definitions.attrs;
        forEach(attrs || [], function (attr, value) {
          elem.setAttribute(attr, value);
        });
        return elem;
      }
    }]);
    return AttributeProcessor;
  }(src.AbstractTask);

  var arraySlice = functionUncurryThis([].slice);

  var $Function = Function;
  var concat = functionUncurryThis([].concat);
  var join = functionUncurryThis([].join);
  var factories = {};

  var construct = function (C, argsLength, args) {
    if (!hasOwnProperty_1(factories, argsLength)) {
      for (var list = [], i = 0; i < argsLength; i++) list[i] = 'a[' + i + ']';
      factories[argsLength] = $Function('C,a', 'return new C(' + join(list, ',') + ')');
    } return factories[argsLength](C, args);
  };

  // `Function.prototype.bind` method implementation
  // https://tc39.es/ecma262/#sec-function.prototype.bind
  var functionBind = functionBindNative ? $Function.bind : function bind(that /* , ...args */) {
    var F = aCallable(this);
    var Prototype = F.prototype;
    var partArgs = arraySlice(arguments, 1);
    var boundFunction = function bound(/* args... */) {
      var args = concat(partArgs, arraySlice(arguments));
      return this instanceof boundFunction ? construct(F, args.length, args) : F.apply(that, args);
    };
    if (isObject(Prototype)) boundFunction.prototype = Prototype;
    return boundFunction;
  };

  // TODO: Remove from `core-js@4`



  // `Function.prototype.bind` method
  // https://tc39.es/ecma262/#sec-function.prototype.bind
  _export({ target: 'Function', proto: true, forced: Function.bind !== functionBind }, {
    bind: functionBind
  });

  var ChildProcessor = /*#__PURE__*/function (_AbstractTask) {
    _inherits(ChildProcessor, _AbstractTask);
    var _super = _createSuper(ChildProcessor);
    function ChildProcessor() {
      _classCallCheck(this, ChildProcessor);
      return _super.apply(this, arguments);
    }
    _createClass(ChildProcessor, [{
      key: "shouldRun",
      value: function shouldRun(_ref) {
        var definitions = _ref.definitions;
        return !!(definitions !== null && definitions !== void 0 && definitions.child);
      }
      // @todo implement validators for definitions
    }, {
      key: "validator",
      value: function validator(currentLevelDef, parentDef) {
        return true;
      }
    }, {
      key: "run",
      value: function run(_ref2) {
        var elem = _ref2.elem,
          definitions = _ref2.definitions,
          create = _ref2.create,
          generator = _ref2.generator;
        if (!isNode(elem)) {
          throw new Error('No parent element to append child(s).');
        }
        var child = definitions.child;
        var boundedCreate = create.bind(generator);
        if (!Array.isArray(child) && !isString(child) && child !== null && child !== void 0 && child.el) {
          appendTo(elem, boundedCreate(child));
        } else if (Array.isArray(child) && !emptyArray(child)) {
          var fragment = window.document.createDocumentFragment();
          forEach(child, function (k, childDefinition) {
            var childFragment = boundedCreate(childDefinition);
            appendTo(fragment, childFragment);
          });
          appendTo(elem, fragment);
        } else if (isString(child)) {
          setHtml(elem, child);
        }
        return elem;
      }
    }]);
    return ChildProcessor;
  }(src.AbstractTask);

  var $TypeError$2 = TypeError;
  var MAX_SAFE_INTEGER = 0x1FFFFFFFFFFFFF; // 2 ** 53 - 1 == 9007199254740991

  var doesNotExceedSafeInteger = function (it) {
    if (it > MAX_SAFE_INTEGER) throw $TypeError$2('Maximum allowed index exceeded');
    return it;
  };

  var createProperty = function (object, key, value) {
    var propertyKey = toPropertyKey(key);
    if (propertyKey in object) objectDefineProperty.f(object, propertyKey, createPropertyDescriptor(0, value));
    else object[propertyKey] = value;
  };

  var SPECIES = wellKnownSymbol('species');

  var arrayMethodHasSpeciesSupport = function (METHOD_NAME) {
    // We can't use this feature detection in V8 since it causes
    // deoptimization and serious performance degradation
    // https://github.com/zloirock/core-js/issues/677
    return engineV8Version >= 51 || !fails(function () {
      var array = [];
      var constructor = array.constructor = {};
      constructor[SPECIES] = function () {
        return { foo: 1 };
      };
      return array[METHOD_NAME](Boolean).foo !== 1;
    });
  };

  var IS_CONCAT_SPREADABLE = wellKnownSymbol('isConcatSpreadable');

  // We can't use this feature detection in V8 since it causes
  // deoptimization and serious performance degradation
  // https://github.com/zloirock/core-js/issues/679
  var IS_CONCAT_SPREADABLE_SUPPORT = engineV8Version >= 51 || !fails(function () {
    var array = [];
    array[IS_CONCAT_SPREADABLE] = false;
    return array.concat()[0] !== array;
  });

  var SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('concat');

  var isConcatSpreadable = function (O) {
    if (!isObject(O)) return false;
    var spreadable = O[IS_CONCAT_SPREADABLE];
    return spreadable !== undefined ? !!spreadable : isArray(O);
  };

  var FORCED = !IS_CONCAT_SPREADABLE_SUPPORT || !SPECIES_SUPPORT;

  // `Array.prototype.concat` method
  // https://tc39.es/ecma262/#sec-array.prototype.concat
  // with adding support of @@isConcatSpreadable and @@species
  _export({ target: 'Array', proto: true, arity: 1, forced: FORCED }, {
    // eslint-disable-next-line no-unused-vars -- required for `.length`
    concat: function concat(arg) {
      var O = toObject(this);
      var A = arraySpeciesCreate(O, 0);
      var n = 0;
      var i, k, length, len, E;
      for (i = -1, length = arguments.length; i < length; i++) {
        E = i === -1 ? O : arguments[i];
        if (isConcatSpreadable(E)) {
          len = lengthOfArrayLike(E);
          doesNotExceedSafeInteger(n + len);
          for (k = 0; k < len; k++, n++) if (k in E) createProperty(A, n, E[k]);
        } else {
          doesNotExceedSafeInteger(n + 1);
          createProperty(A, n++, E);
        }
      }
      A.length = n;
      return A;
    }
  });

  var FAILS_ON_PRIMITIVES = fails(function () { objectKeys(1); });

  // `Object.keys` method
  // https://tc39.es/ecma262/#sec-object.keys
  _export({ target: 'Object', stat: true, forced: FAILS_ON_PRIMITIVES }, {
    keys: function keys(it) {
      return objectKeys(toObject(it));
    }
  });

  var EventsProcessor = /*#__PURE__*/function (_AbstractTask) {
    _inherits(EventsProcessor, _AbstractTask);
    var _super = _createSuper(EventsProcessor);
    function EventsProcessor() {
      var _this;
      _classCallCheck(this, EventsProcessor);
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      _this = _super.call.apply(_super, [this].concat(args));
      _defineProperty(_assertThisInitialized(_this), "run", function (_ref) {
        var elem = _ref.elem,
          definitions = _ref.definitions,
          generator = _ref.generator;
        var events = definitions.events;
        if (!events) {
          throw new Error('No events specified.');
        }
        Object.keys(events).forEach(function (eventName) {
          var handler = events[eventName];
          generator.$selected = elem;
          generator.addEvent(eventName, handler);
        });
        generator.reset();
        return elem;
      });
      return _this;
    }
    _createClass(EventsProcessor, [{
      key: "shouldRun",
      value: function shouldRun(_ref2) {
        var definitions = _ref2.definitions;
        return !!(definitions !== null && definitions !== void 0 && definitions.events);
      }
    }]);
    return EventsProcessor;
  }(src.AbstractTask);

  function create(definitions) {
    if (!definitions) {
      throw new Error('No definition specified');
    }
    var elem = createElement(definitions.el);
    var processors = new src.TaskChain({
      definitions: definitions,
      create: create,
      elem: elem,
      generator: this
    });
    processors.registerTask(new InnerProcessor()).registerTask(new AttributeProcessor()).registerTask(new EventsProcessor())
    // always process ChildProcessor last
    .registerTask(new ChildProcessor()).processChain();
    var fragment = window.document.createDocumentFragment();
    appendTo(fragment, elem);
    return fragment;
  }

  function getTextElem(elem) {
    if (!elem) {
      return '';
    }
    var node;
    var ret = '';
    var i = 0;
    if (!isNode(elem)) {
      // eslint-disable-next-line no-cond-assign
      while (node = elem[i++]) {
        ret += getTextElem(node);
      }
    } else if (elem.nodeType === Node.ELEMENT_NODE || elem.nodeType === Node.DOCUMENT_NODE || elem.nodeType === Node.DOCUMENT_FRAGMENT_NODE) {
      if (typeof elem.textContent === 'string') {
        return elem.textContent;
      }
      for (elem = elem.firstChild; elem; elem = elem.nextSibling) {
        ret += getTextElem(elem);
      }
    } else if (elem.nodeType === Node.TEXT_NODE || elem.nodeType === Node.CDATA_SECTION_NODE) {
      return elem.nodeValue;
    }
    return ret;
  }
  function getText() {
    var _this$$selected;
    return getTextElem((_this$$selected = this.$selected) !== null && _this$$selected !== void 0 ? _this$$selected : this.getFragment());
  }

  var $String$1 = String;
  var $TypeError$1 = TypeError;

  var aPossiblePrototype = function (argument) {
    if (typeof argument == 'object' || isCallable(argument)) return argument;
    throw $TypeError$1("Can't set " + $String$1(argument) + ' as a prototype');
  };

  /* eslint-disable no-proto -- safe */




  // `Object.setPrototypeOf` method
  // https://tc39.es/ecma262/#sec-object.setprototypeof
  // Works with __proto__ only. Old v8 can't work with null proto objects.
  // eslint-disable-next-line es/no-object-setprototypeof -- safe
  var objectSetPrototypeOf = Object.setPrototypeOf || ('__proto__' in {} ? function () {
    var CORRECT_SETTER = false;
    var test = {};
    var setter;
    try {
      // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
      setter = functionUncurryThis(Object.getOwnPropertyDescriptor(Object.prototype, '__proto__').set);
      setter(test, []);
      CORRECT_SETTER = test instanceof Array;
    } catch (error) { /* empty */ }
    return function setPrototypeOf(O, proto) {
      anObject(O);
      aPossiblePrototype(proto);
      if (CORRECT_SETTER) setter(O, proto);
      else O.__proto__ = proto;
      return O;
    };
  }() : undefined);

  // `Object.setPrototypeOf` method
  // https://tc39.es/ecma262/#sec-object.setprototypeof
  _export({ target: 'Object', stat: true }, {
    setPrototypeOf: objectSetPrototypeOf
  });

  var BaseError = /*#__PURE__*/function (_Error) {
    _inherits(BaseError, _Error);
    var _super = _createSuper(BaseError);
    function BaseError(message) {
      var _this;
      _classCallCheck(this, BaseError);
      _this = _super.call(this, message);
      Object.setPrototypeOf(_assertThisInitialized(_this), BaseError.prototype);
      return _this;
    }
    return _createClass(BaseError);
  }( /*#__PURE__*/_wrapNativeSuper(Error));

  var NoElementSelectedError = /*#__PURE__*/function (_BaseError) {
    _inherits(NoElementSelectedError, _BaseError);
    var _super = _createSuper(NoElementSelectedError);
    function NoElementSelectedError() {
      var _this;
      _classCallCheck(this, NoElementSelectedError);
      _this = _super.call(this, 'No element selected.');
      Object.setPrototypeOf(_assertThisInitialized(_this), NoElementSelectedError.prototype);
      return _this;
    }
    return _createClass(NoElementSelectedError);
  }(BaseError);

  var NoElementSpecifiedError = /*#__PURE__*/function (_BaseError) {
    _inherits(NoElementSpecifiedError, _BaseError);
    var _super = _createSuper(NoElementSpecifiedError);
    function NoElementSpecifiedError() {
      var _this;
      _classCallCheck(this, NoElementSpecifiedError);
      _this = _super.call(this, 'No element specified.');
      Object.setPrototypeOf(_assertThisInitialized(_this), NoElementSpecifiedError.prototype);
      return _this;
    }
    return _createClass(NoElementSpecifiedError);
  }(BaseError);

  function addEvent(event, handler) {
    if (!this.$selected || !(this.$selected instanceof Node)) {
      throw new NoElementSelectedError();
    }
    if (stringStarts(event, 'on')) {
      event = event.substring(2);
    }
    if (isString(handler) && typeof handler !== 'function') {
      handler = window[handler];
    }
    if ('addEventListener' in this.$selected) {
      this.$selected.addEventListener(event, handler, true);
    } else if ('attachEvent' in this.$selected) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      this.$selected.attachEvent("on".concat(event), handler);
    } else {
      window["on".concat(event)] = handler;
    }
    this.registeredEvents[event] = handler;
    return this;
  }

  function append(nodes) {
    var _this$$selected;
    var elem = (_this$$selected = this.$selected) !== null && _this$$selected !== void 0 ? _this$$selected : this.$fragment;
    if (!elem) {
      throw new Error('No element found to be appended. Check your definitions or select an element to append to.');
    }
    if (nodes instanceof GeneratorJs) {
      appendTo(elem, nodes.getFragment());
    } else {
      appendTo(elem, nodes);
    }
    return this;
  }

  function attachTo(element) {
    var _this$$selected;
    if (!this.$fragment) {
      throw new Error('No elements created. Make sure you have proper definitions.');
    }
    // todo this.$selected ?? this.$fragment or just this.$fragment be better ?
    appendTo(element, (_this$$selected = this.$selected) !== null && _this$$selected !== void 0 ? _this$$selected : this.$fragment);
    return this;
  }

  function remove() {
    if (!this.$selected) {
      throw new NoElementSelectedError();
    }
    removeNodes(this.$selected);
    this.reset();
    return this;
  }

  var iteratorClose = function (iterator, kind, value) {
    var innerResult, innerError;
    anObject(iterator);
    try {
      innerResult = getMethod(iterator, 'return');
      if (!innerResult) {
        if (kind === 'throw') throw value;
        return value;
      }
      innerResult = functionCall(innerResult, iterator);
    } catch (error) {
      innerError = true;
      innerResult = error;
    }
    if (kind === 'throw') throw value;
    if (innerError) throw innerResult;
    anObject(innerResult);
    return value;
  };

  // call something on iterator step with safe closing on error
  var callWithSafeIterationClosing = function (iterator, fn, value, ENTRIES) {
    try {
      return ENTRIES ? fn(anObject(value)[0], value[1]) : fn(value);
    } catch (error) {
      iteratorClose(iterator, 'throw', error);
    }
  };

  var iterators = {};

  var ITERATOR$4 = wellKnownSymbol('iterator');
  var ArrayPrototype = Array.prototype;

  // check on default Array iterator
  var isArrayIteratorMethod = function (it) {
    return it !== undefined && (iterators.Array === it || ArrayPrototype[ITERATOR$4] === it);
  };

  var ITERATOR$3 = wellKnownSymbol('iterator');

  var getIteratorMethod = function (it) {
    if (!isNullOrUndefined(it)) return getMethod(it, ITERATOR$3)
      || getMethod(it, '@@iterator')
      || iterators[classof(it)];
  };

  var $TypeError = TypeError;

  var getIterator = function (argument, usingIterator) {
    var iteratorMethod = arguments.length < 2 ? getIteratorMethod(argument) : usingIterator;
    if (aCallable(iteratorMethod)) return anObject(functionCall(iteratorMethod, argument));
    throw $TypeError(tryToString(argument) + ' is not iterable');
  };

  var $Array = Array;

  // `Array.from` method implementation
  // https://tc39.es/ecma262/#sec-array.from
  var arrayFrom = function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
    var O = toObject(arrayLike);
    var IS_CONSTRUCTOR = isConstructor(this);
    var argumentsLength = arguments.length;
    var mapfn = argumentsLength > 1 ? arguments[1] : undefined;
    var mapping = mapfn !== undefined;
    if (mapping) mapfn = functionBindContext(mapfn, argumentsLength > 2 ? arguments[2] : undefined);
    var iteratorMethod = getIteratorMethod(O);
    var index = 0;
    var length, result, step, iterator, next, value;
    // if the target is not iterable or it's an array with the default iterator - use a simple case
    if (iteratorMethod && !(this === $Array && isArrayIteratorMethod(iteratorMethod))) {
      iterator = getIterator(O, iteratorMethod);
      next = iterator.next;
      result = IS_CONSTRUCTOR ? new this() : [];
      for (;!(step = functionCall(next, iterator)).done; index++) {
        value = mapping ? callWithSafeIterationClosing(iterator, mapfn, [step.value, index], true) : step.value;
        createProperty(result, index, value);
      }
    } else {
      length = lengthOfArrayLike(O);
      result = IS_CONSTRUCTOR ? new this(length) : $Array(length);
      for (;length > index; index++) {
        value = mapping ? mapfn(O[index], index) : O[index];
        createProperty(result, index, value);
      }
    }
    result.length = index;
    return result;
  };

  var ITERATOR$2 = wellKnownSymbol('iterator');
  var SAFE_CLOSING = false;

  try {
    var called = 0;
    var iteratorWithReturn = {
      next: function () {
        return { done: !!called++ };
      },
      'return': function () {
        SAFE_CLOSING = true;
      }
    };
    iteratorWithReturn[ITERATOR$2] = function () {
      return this;
    };
    // eslint-disable-next-line es/no-array-from, no-throw-literal -- required for testing
    Array.from(iteratorWithReturn, function () { throw 2; });
  } catch (error) { /* empty */ }

  var checkCorrectnessOfIteration = function (exec, SKIP_CLOSING) {
    if (!SKIP_CLOSING && !SAFE_CLOSING) return false;
    var ITERATION_SUPPORT = false;
    try {
      var object = {};
      object[ITERATOR$2] = function () {
        return {
          next: function () {
            return { done: ITERATION_SUPPORT = true };
          }
        };
      };
      exec(object);
    } catch (error) { /* empty */ }
    return ITERATION_SUPPORT;
  };

  var INCORRECT_ITERATION = !checkCorrectnessOfIteration(function (iterable) {
    // eslint-disable-next-line es/no-array-from -- required for testing
    Array.from(iterable);
  });

  // `Array.from` method
  // https://tc39.es/ecma262/#sec-array.from
  _export({ target: 'Array', stat: true, forced: INCORRECT_ITERATION }, {
    from: arrayFrom
  });

  var $String = String;

  var toString_1 = function (argument) {
    if (classof(argument) === 'Symbol') throw TypeError('Cannot convert a Symbol value to a string');
    return $String(argument);
  };

  var charAt$1 = functionUncurryThis(''.charAt);
  var charCodeAt = functionUncurryThis(''.charCodeAt);
  var stringSlice = functionUncurryThis(''.slice);

  var createMethod = function (CONVERT_TO_STRING) {
    return function ($this, pos) {
      var S = toString_1(requireObjectCoercible($this));
      var position = toIntegerOrInfinity(pos);
      var size = S.length;
      var first, second;
      if (position < 0 || position >= size) return CONVERT_TO_STRING ? '' : undefined;
      first = charCodeAt(S, position);
      return first < 0xD800 || first > 0xDBFF || position + 1 === size
        || (second = charCodeAt(S, position + 1)) < 0xDC00 || second > 0xDFFF
          ? CONVERT_TO_STRING
            ? charAt$1(S, position)
            : first
          : CONVERT_TO_STRING
            ? stringSlice(S, position, position + 2)
            : (first - 0xD800 << 10) + (second - 0xDC00) + 0x10000;
    };
  };

  var stringMultibyte = {
    // `String.prototype.codePointAt` method
    // https://tc39.es/ecma262/#sec-string.prototype.codepointat
    codeAt: createMethod(false),
    // `String.prototype.at` method
    // https://github.com/mathiasbynens/String.prototype.at
    charAt: createMethod(true)
  };

  // `Object.defineProperties` method
  // https://tc39.es/ecma262/#sec-object.defineproperties
  // eslint-disable-next-line es/no-object-defineproperties -- safe
  var f = descriptors && !v8PrototypeDefineBug ? Object.defineProperties : function defineProperties(O, Properties) {
    anObject(O);
    var props = toIndexedObject(Properties);
    var keys = objectKeys(Properties);
    var length = keys.length;
    var index = 0;
    var key;
    while (length > index) objectDefineProperty.f(O, key = keys[index++], props[key]);
    return O;
  };

  var objectDefineProperties = {
  	f: f
  };

  var html = getBuiltIn('document', 'documentElement');

  /* global ActiveXObject -- old IE, WSH */








  var GT = '>';
  var LT = '<';
  var PROTOTYPE = 'prototype';
  var SCRIPT = 'script';
  var IE_PROTO$1 = sharedKey('IE_PROTO');

  var EmptyConstructor = function () { /* empty */ };

  var scriptTag = function (content) {
    return LT + SCRIPT + GT + content + LT + '/' + SCRIPT + GT;
  };

  // Create object with fake `null` prototype: use ActiveX Object with cleared prototype
  var NullProtoObjectViaActiveX = function (activeXDocument) {
    activeXDocument.write(scriptTag(''));
    activeXDocument.close();
    var temp = activeXDocument.parentWindow.Object;
    activeXDocument = null; // avoid memory leak
    return temp;
  };

  // Create object with fake `null` prototype: use iframe Object with cleared prototype
  var NullProtoObjectViaIFrame = function () {
    // Thrash, waste and sodomy: IE GC bug
    var iframe = documentCreateElement('iframe');
    var JS = 'java' + SCRIPT + ':';
    var iframeDocument;
    iframe.style.display = 'none';
    html.appendChild(iframe);
    // https://github.com/zloirock/core-js/issues/475
    iframe.src = String(JS);
    iframeDocument = iframe.contentWindow.document;
    iframeDocument.open();
    iframeDocument.write(scriptTag('document.F=Object'));
    iframeDocument.close();
    return iframeDocument.F;
  };

  // Check for document.domain and active x support
  // No need to use active x approach when document.domain is not set
  // see https://github.com/es-shims/es5-shim/issues/150
  // variation of https://github.com/kitcambridge/es5-shim/commit/4f738ac066346
  // avoid IE GC bug
  var activeXDocument;
  var NullProtoObject = function () {
    try {
      activeXDocument = new ActiveXObject('htmlfile');
    } catch (error) { /* ignore */ }
    NullProtoObject = typeof document != 'undefined'
      ? document.domain && activeXDocument
        ? NullProtoObjectViaActiveX(activeXDocument) // old IE
        : NullProtoObjectViaIFrame()
      : NullProtoObjectViaActiveX(activeXDocument); // WSH
    var length = enumBugKeys.length;
    while (length--) delete NullProtoObject[PROTOTYPE][enumBugKeys[length]];
    return NullProtoObject();
  };

  hiddenKeys$1[IE_PROTO$1] = true;

  // `Object.create` method
  // https://tc39.es/ecma262/#sec-object.create
  // eslint-disable-next-line es/no-object-create -- safe
  var objectCreate = Object.create || function create(O, Properties) {
    var result;
    if (O !== null) {
      EmptyConstructor[PROTOTYPE] = anObject(O);
      result = new EmptyConstructor();
      EmptyConstructor[PROTOTYPE] = null;
      // add "__proto__" for Object.getPrototypeOf polyfill
      result[IE_PROTO$1] = O;
    } else result = NullProtoObject();
    return Properties === undefined ? result : objectDefineProperties.f(result, Properties);
  };

  var correctPrototypeGetter = !fails(function () {
    function F() { /* empty */ }
    F.prototype.constructor = null;
    // eslint-disable-next-line es/no-object-getprototypeof -- required for testing
    return Object.getPrototypeOf(new F()) !== F.prototype;
  });

  var IE_PROTO = sharedKey('IE_PROTO');
  var $Object = Object;
  var ObjectPrototype = $Object.prototype;

  // `Object.getPrototypeOf` method
  // https://tc39.es/ecma262/#sec-object.getprototypeof
  // eslint-disable-next-line es/no-object-getprototypeof -- safe
  var objectGetPrototypeOf = correctPrototypeGetter ? $Object.getPrototypeOf : function (O) {
    var object = toObject(O);
    if (hasOwnProperty_1(object, IE_PROTO)) return object[IE_PROTO];
    var constructor = object.constructor;
    if (isCallable(constructor) && object instanceof constructor) {
      return constructor.prototype;
    } return object instanceof $Object ? ObjectPrototype : null;
  };

  var ITERATOR$1 = wellKnownSymbol('iterator');
  var BUGGY_SAFARI_ITERATORS$1 = false;

  // `%IteratorPrototype%` object
  // https://tc39.es/ecma262/#sec-%iteratorprototype%-object
  var IteratorPrototype$2, PrototypeOfArrayIteratorPrototype, arrayIterator;

  /* eslint-disable es/no-array-prototype-keys -- safe */
  if ([].keys) {
    arrayIterator = [].keys();
    // Safari 8 has buggy iterators w/o `next`
    if (!('next' in arrayIterator)) BUGGY_SAFARI_ITERATORS$1 = true;
    else {
      PrototypeOfArrayIteratorPrototype = objectGetPrototypeOf(objectGetPrototypeOf(arrayIterator));
      if (PrototypeOfArrayIteratorPrototype !== Object.prototype) IteratorPrototype$2 = PrototypeOfArrayIteratorPrototype;
    }
  }

  var NEW_ITERATOR_PROTOTYPE = !isObject(IteratorPrototype$2) || fails(function () {
    var test = {};
    // FF44- legacy iterators case
    return IteratorPrototype$2[ITERATOR$1].call(test) !== test;
  });

  if (NEW_ITERATOR_PROTOTYPE) IteratorPrototype$2 = {};

  // `%IteratorPrototype%[@@iterator]()` method
  // https://tc39.es/ecma262/#sec-%iteratorprototype%-@@iterator
  if (!isCallable(IteratorPrototype$2[ITERATOR$1])) {
    defineBuiltIn(IteratorPrototype$2, ITERATOR$1, function () {
      return this;
    });
  }

  var iteratorsCore = {
    IteratorPrototype: IteratorPrototype$2,
    BUGGY_SAFARI_ITERATORS: BUGGY_SAFARI_ITERATORS$1
  };

  var defineProperty = objectDefineProperty.f;



  var TO_STRING_TAG = wellKnownSymbol('toStringTag');

  var setToStringTag = function (target, TAG, STATIC) {
    if (target && !STATIC) target = target.prototype;
    if (target && !hasOwnProperty_1(target, TO_STRING_TAG)) {
      defineProperty(target, TO_STRING_TAG, { configurable: true, value: TAG });
    }
  };

  var IteratorPrototype$1 = iteratorsCore.IteratorPrototype;





  var returnThis$1 = function () { return this; };

  var iteratorCreateConstructor = function (IteratorConstructor, NAME, next, ENUMERABLE_NEXT) {
    var TO_STRING_TAG = NAME + ' Iterator';
    IteratorConstructor.prototype = objectCreate(IteratorPrototype$1, { next: createPropertyDescriptor(+!ENUMERABLE_NEXT, next) });
    setToStringTag(IteratorConstructor, TO_STRING_TAG, false);
    iterators[TO_STRING_TAG] = returnThis$1;
    return IteratorConstructor;
  };

  var PROPER_FUNCTION_NAME = functionName.PROPER;
  var CONFIGURABLE_FUNCTION_NAME = functionName.CONFIGURABLE;
  var IteratorPrototype = iteratorsCore.IteratorPrototype;
  var BUGGY_SAFARI_ITERATORS = iteratorsCore.BUGGY_SAFARI_ITERATORS;
  var ITERATOR = wellKnownSymbol('iterator');
  var KEYS = 'keys';
  var VALUES = 'values';
  var ENTRIES = 'entries';

  var returnThis = function () { return this; };

  var iteratorDefine = function (Iterable, NAME, IteratorConstructor, next, DEFAULT, IS_SET, FORCED) {
    iteratorCreateConstructor(IteratorConstructor, NAME, next);

    var getIterationMethod = function (KIND) {
      if (KIND === DEFAULT && defaultIterator) return defaultIterator;
      if (!BUGGY_SAFARI_ITERATORS && KIND in IterablePrototype) return IterablePrototype[KIND];
      switch (KIND) {
        case KEYS: return function keys() { return new IteratorConstructor(this, KIND); };
        case VALUES: return function values() { return new IteratorConstructor(this, KIND); };
        case ENTRIES: return function entries() { return new IteratorConstructor(this, KIND); };
      } return function () { return new IteratorConstructor(this); };
    };

    var TO_STRING_TAG = NAME + ' Iterator';
    var INCORRECT_VALUES_NAME = false;
    var IterablePrototype = Iterable.prototype;
    var nativeIterator = IterablePrototype[ITERATOR]
      || IterablePrototype['@@iterator']
      || DEFAULT && IterablePrototype[DEFAULT];
    var defaultIterator = !BUGGY_SAFARI_ITERATORS && nativeIterator || getIterationMethod(DEFAULT);
    var anyNativeIterator = NAME == 'Array' ? IterablePrototype.entries || nativeIterator : nativeIterator;
    var CurrentIteratorPrototype, methods, KEY;

    // fix native
    if (anyNativeIterator) {
      CurrentIteratorPrototype = objectGetPrototypeOf(anyNativeIterator.call(new Iterable()));
      if (CurrentIteratorPrototype !== Object.prototype && CurrentIteratorPrototype.next) {
        if (objectGetPrototypeOf(CurrentIteratorPrototype) !== IteratorPrototype) {
          if (objectSetPrototypeOf) {
            objectSetPrototypeOf(CurrentIteratorPrototype, IteratorPrototype);
          } else if (!isCallable(CurrentIteratorPrototype[ITERATOR])) {
            defineBuiltIn(CurrentIteratorPrototype, ITERATOR, returnThis);
          }
        }
        // Set @@toStringTag to native iterators
        setToStringTag(CurrentIteratorPrototype, TO_STRING_TAG, true);
      }
    }

    // fix Array.prototype.{ values, @@iterator }.name in V8 / FF
    if (PROPER_FUNCTION_NAME && DEFAULT == VALUES && nativeIterator && nativeIterator.name !== VALUES) {
      if (CONFIGURABLE_FUNCTION_NAME) {
        createNonEnumerableProperty(IterablePrototype, 'name', VALUES);
      } else {
        INCORRECT_VALUES_NAME = true;
        defaultIterator = function values() { return functionCall(nativeIterator, this); };
      }
    }

    // export additional methods
    if (DEFAULT) {
      methods = {
        values: getIterationMethod(VALUES),
        keys: IS_SET ? defaultIterator : getIterationMethod(KEYS),
        entries: getIterationMethod(ENTRIES)
      };
      if (FORCED) for (KEY in methods) {
        if (BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME || !(KEY in IterablePrototype)) {
          defineBuiltIn(IterablePrototype, KEY, methods[KEY]);
        }
      } else _export({ target: NAME, proto: true, forced: BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME }, methods);
    }

    // define iterator
    if (IterablePrototype[ITERATOR] !== defaultIterator) {
      defineBuiltIn(IterablePrototype, ITERATOR, defaultIterator, { name: DEFAULT });
    }
    iterators[NAME] = defaultIterator;

    return methods;
  };

  // `CreateIterResultObject` abstract operation
  // https://tc39.es/ecma262/#sec-createiterresultobject
  var createIterResultObject = function (value, done) {
    return { value: value, done: done };
  };

  var charAt = stringMultibyte.charAt;





  var STRING_ITERATOR = 'String Iterator';
  var setInternalState = internalState.set;
  var getInternalState = internalState.getterFor(STRING_ITERATOR);

  // `String.prototype[@@iterator]` method
  // https://tc39.es/ecma262/#sec-string.prototype-@@iterator
  iteratorDefine(String, 'String', function (iterated) {
    setInternalState(this, {
      type: STRING_ITERATOR,
      string: toString_1(iterated),
      index: 0
    });
  // `%StringIteratorPrototype%.next` method
  // https://tc39.es/ecma262/#sec-%stringiteratorprototype%.next
  }, function next() {
    var state = getInternalState(this);
    var string = state.string;
    var index = state.index;
    var point;
    if (index >= string.length) return createIterResultObject(undefined, true);
    point = charAt(string, index);
    state.index += point.length;
    return createIterResultObject(point, false);
  });

  function replace(node) {
    if (!node) {
      throw new NoElementSpecifiedError();
    }
    if (!this.$selected) {
      throw new NoElementSelectedError();
    }
    var element = node instanceof GeneratorJs ? node.$el : node;
    // selected via document.querySelector
    if (this.$selected instanceof Node) {
      var parent = this.$selected.parentNode;
      removeNodes(this.$selected);
      appendTo(parent, element);
    }
    // selected via document.querySelectorAll
    // replace each one of them  with the given node!!!!
    // important: This might not be desired action sometimes.
    if (this.$selected instanceof NodeList) {
      if (this.config.dev) {
        // eslint-disable-next-line no-console
        console.warn('You selected multiple node. This action will replace each one of them with the given node.');
      }
      this.$selected.forEach(function (currentNode) {
        var parent = currentNode.parentNode;
        if (element instanceof Node) {
          parent === null || parent === void 0 ? void 0 : parent.replaceChild(element, currentNode);
        } else if (element instanceof NodeList) {
          parent === null || parent === void 0 ? void 0 : parent.replaceChildren.apply(parent, _toConsumableArray(Array.from(element)));
        } else if (Array.isArray(element)) {
          // Array of nodes or strings
          // strings will be set as text nodes
          parent === null || parent === void 0 ? void 0 : parent.replaceChildren.apply(parent, _toConsumableArray(element));
        }
      });
    }
    this.reset();
    return this;
  }

  function removeEvent(event) {
    if (!this.$selected || !(this.$selected instanceof Node)) {
      throw new NoElementSelectedError();
    }
    if (stringStarts(event, 'on')) {
      event = event.substring(2);
    }
    if (this.$selected.removeEventListener !== null) {
      this.$selected.removeEventListener(event, this.registeredEvents[event], true);
    } else if ('attachEvent' in this.$selected) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      this.$selected.detachEvent("on".concat(event));
    } else {
      this.$selected["on".concat(event)] = null;
    }
    if (this.registeredEvents[event]) {
      delete this.registeredEvents[event];
    }
    return this;
  }

  function reset() {
    this.$selected = null;
    return this;
  }

  function setContent(content) {
    if (isString(content)) {
      setHtml(this.$selected, content);
    }
    return this;
  }

  var assertSelector = function assertSelector(fragment, selector) {
    if (!isDef(selector) || !isString(selector)) {
      throw new Error('Specify selector string!');
    }
    if (!fragment) {
      throw new Error('No collection found to be selected. Please check your definitions.');
    }
  };
  function select(selector) {
    assertSelector(this.$fragment, selector);
    var selected = this.$fragment.querySelector(selector);
    if (selected) {
      this.$selected = selected;
    }
    return this;
  }
  function selectAll(selector) {
    assertSelector(this.$fragment, selector);
    var selected = this.$fragment.querySelectorAll(selector);
    if (selected.length) {
      this.$selected = selected;
    }
    return this;
  }

  var GeneratorJs = /*#__PURE__*/function () {
    // Node > HTMLElement

    function GeneratorJs(definitions) {
      var userConfig = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      _classCallCheck(this, GeneratorJs);
      _defineProperty(this, "registeredEvents", {});
      _defineProperty(this, "config", {
        dev: false
      });
      _defineProperty(this, "$selected", null);
      _defineProperty(this, "$fragment", null);
      _defineProperty(this, "reset", reset);
      _defineProperty(this, "select", select);
      _defineProperty(this, "append", append);
      _defineProperty(this, "remove", remove);
      _defineProperty(this, "create", create);
      _defineProperty(this, "replace", replace);
      _defineProperty(this, "getText", getText);
      _defineProperty(this, "addEvent", addEvent);
      _defineProperty(this, "attachTo", attachTo);
      _defineProperty(this, "selectAll", selectAll);
      _defineProperty(this, "setContent", setContent);
      _defineProperty(this, "removeEvent", removeEvent);
      // todo verify definitions
      if (!definitions || !isPlainObject(definitions)) {
        throw new TypeError("Element passed to constructor must be an object! ".concat(_typeof(definitions), " is given!"));
      }
      if (userConfig) {
        this.parseConfig(userConfig);
      }
      this.$fragment = this.create(definitions);
    }
    _createClass(GeneratorJs, [{
      key: "$el",
      get: function get() {
        if (this.$selected instanceof Node) {
          return this.$selected;
        }
        if (this.$fragment) {
          return this.$fragment.firstElementChild;
        }
        return null;
      }
    }, {
      key: "parseConfig",
      value: function parseConfig(userConfig) {
        this.config = _objectSpread2(_objectSpread2({}, this.config), userConfig);
      }
    }, {
      key: "getSelected",
      value: function getSelected() {
        return this.$selected;
      }
    }, {
      key: "getFragment",
      value: function getFragment() {
        if (this.$fragment && this.$fragment instanceof DocumentFragment) {
          return this.$fragment;
        }
        return null;
      }
    }]);
    return GeneratorJs;
  }();

  var index = (function (definitions) {
    return new GeneratorJs(definitions);
  });

  return index;

}));
