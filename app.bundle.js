webpackJsonp([0],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(28);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _redux = __webpack_require__(166);

	var _reactRedux = __webpack_require__(187);

	var _reactRouter = __webpack_require__(204);

	var _reactRouterRedux = __webpack_require__(257);

	var _AppContainer = __webpack_require__(262);

	var _AppContainer2 = _interopRequireDefault(_AppContainer);

	var _Documentation = __webpack_require__(376);

	var _Documentation2 = _interopRequireDefault(_Documentation);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// Make allowances for gh-pages routing
	// main path is project name
	var mainPath = '/';
	if (true) {
	  // eslint-disable-line no-undef
	  mainPath = ("react-adminlte-dash"); // eslint-disable-line no-undef
	}

	// Add the reducer to your store on the `routing` key
	var store = (0, _redux.createStore)((0, _redux.combineReducers)({
	  app: _AppContainer.reducer,
	  routing: _reactRouterRedux.routerReducer
	}), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

	// Create an enhanced history that syncs navigation events with the store
	var history = (0, _reactRouterRedux.syncHistoryWithStore)(_reactRouter.browserHistory, store);

	var routes = _react2.default.createElement(
	  _reactRouter.Route,
	  { path: mainPath, component: _AppContainer2.default },
	  _react2.default.createElement(_reactRouter.IndexRoute, { component: _Documentation2.default })
	);

	_reactDom2.default.render(_react2.default.createElement(
	  _reactRedux.Provider,
	  { store: store },
	  _react2.default.createElement(_reactRouter.Router, { history: history, routes: routes })
	), document.getElementById('app') // eslint-disable-line comma-dangle
	);

/***/ },
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */,
/* 54 */,
/* 55 */,
/* 56 */,
/* 57 */,
/* 58 */,
/* 59 */,
/* 60 */,
/* 61 */,
/* 62 */,
/* 63 */,
/* 64 */,
/* 65 */,
/* 66 */,
/* 67 */,
/* 68 */,
/* 69 */,
/* 70 */,
/* 71 */,
/* 72 */,
/* 73 */,
/* 74 */,
/* 75 */,
/* 76 */,
/* 77 */,
/* 78 */,
/* 79 */,
/* 80 */,
/* 81 */,
/* 82 */,
/* 83 */,
/* 84 */,
/* 85 */,
/* 86 */,
/* 87 */,
/* 88 */,
/* 89 */,
/* 90 */,
/* 91 */,
/* 92 */,
/* 93 */,
/* 94 */,
/* 95 */,
/* 96 */,
/* 97 */,
/* 98 */,
/* 99 */,
/* 100 */,
/* 101 */,
/* 102 */,
/* 103 */,
/* 104 */,
/* 105 */,
/* 106 */,
/* 107 */,
/* 108 */,
/* 109 */,
/* 110 */,
/* 111 */,
/* 112 */,
/* 113 */,
/* 114 */,
/* 115 */,
/* 116 */,
/* 117 */,
/* 118 */,
/* 119 */,
/* 120 */,
/* 121 */,
/* 122 */,
/* 123 */,
/* 124 */,
/* 125 */,
/* 126 */,
/* 127 */,
/* 128 */,
/* 129 */,
/* 130 */,
/* 131 */,
/* 132 */,
/* 133 */,
/* 134 */,
/* 135 */,
/* 136 */,
/* 137 */,
/* 138 */,
/* 139 */,
/* 140 */,
/* 141 */,
/* 142 */,
/* 143 */,
/* 144 */,
/* 145 */,
/* 146 */,
/* 147 */,
/* 148 */,
/* 149 */,
/* 150 */,
/* 151 */,
/* 152 */,
/* 153 */,
/* 154 */,
/* 155 */,
/* 156 */,
/* 157 */,
/* 158 */,
/* 159 */,
/* 160 */,
/* 161 */,
/* 162 */,
/* 163 */,
/* 164 */,
/* 165 */,
/* 166 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.compose = exports.applyMiddleware = exports.bindActionCreators = exports.combineReducers = exports.createStore = undefined;

	var _createStore = __webpack_require__(167);

	var _createStore2 = _interopRequireDefault(_createStore);

	var _combineReducers = __webpack_require__(182);

	var _combineReducers2 = _interopRequireDefault(_combineReducers);

	var _bindActionCreators = __webpack_require__(184);

	var _bindActionCreators2 = _interopRequireDefault(_bindActionCreators);

	var _applyMiddleware = __webpack_require__(185);

	var _applyMiddleware2 = _interopRequireDefault(_applyMiddleware);

	var _compose = __webpack_require__(186);

	var _compose2 = _interopRequireDefault(_compose);

	var _warning = __webpack_require__(183);

	var _warning2 = _interopRequireDefault(_warning);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	/*
	* This is a dummy function to check if the function name has been altered by minification.
	* If the function has been minified and NODE_ENV !== 'production', warn the user.
	*/
	function isCrushed() {}

	if (false) {
	  (0, _warning2['default'])('You are currently using minified code outside of NODE_ENV === \'production\'. ' + 'This means that you are running a slower development build of Redux. ' + 'You can use loose-envify (https://github.com/zertosh/loose-envify) for browserify ' + 'or DefinePlugin for webpack (http://stackoverflow.com/questions/30030031) ' + 'to ensure you have the correct code for your production build.');
	}

	exports.createStore = _createStore2['default'];
	exports.combineReducers = _combineReducers2['default'];
	exports.bindActionCreators = _bindActionCreators2['default'];
	exports.applyMiddleware = _applyMiddleware2['default'];
	exports.compose = _compose2['default'];

/***/ },
/* 167 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.ActionTypes = undefined;
	exports['default'] = createStore;

	var _isPlainObject = __webpack_require__(168);

	var _isPlainObject2 = _interopRequireDefault(_isPlainObject);

	var _symbolObservable = __webpack_require__(178);

	var _symbolObservable2 = _interopRequireDefault(_symbolObservable);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	/**
	 * These are private action types reserved by Redux.
	 * For any unknown actions, you must return the current state.
	 * If the current state is undefined, you must return the initial state.
	 * Do not reference these action types directly in your code.
	 */
	var ActionTypes = exports.ActionTypes = {
	  INIT: '@@redux/INIT'
	};

	/**
	 * Creates a Redux store that holds the state tree.
	 * The only way to change the data in the store is to call `dispatch()` on it.
	 *
	 * There should only be a single store in your app. To specify how different
	 * parts of the state tree respond to actions, you may combine several reducers
	 * into a single reducer function by using `combineReducers`.
	 *
	 * @param {Function} reducer A function that returns the next state tree, given
	 * the current state tree and the action to handle.
	 *
	 * @param {any} [preloadedState] The initial state. You may optionally specify it
	 * to hydrate the state from the server in universal apps, or to restore a
	 * previously serialized user session.
	 * If you use `combineReducers` to produce the root reducer function, this must be
	 * an object with the same shape as `combineReducers` keys.
	 *
	 * @param {Function} enhancer The store enhancer. You may optionally specify it
	 * to enhance the store with third-party capabilities such as middleware,
	 * time travel, persistence, etc. The only store enhancer that ships with Redux
	 * is `applyMiddleware()`.
	 *
	 * @returns {Store} A Redux store that lets you read the state, dispatch actions
	 * and subscribe to changes.
	 */
	function createStore(reducer, preloadedState, enhancer) {
	  var _ref2;

	  if (typeof preloadedState === 'function' && typeof enhancer === 'undefined') {
	    enhancer = preloadedState;
	    preloadedState = undefined;
	  }

	  if (typeof enhancer !== 'undefined') {
	    if (typeof enhancer !== 'function') {
	      throw new Error('Expected the enhancer to be a function.');
	    }

	    return enhancer(createStore)(reducer, preloadedState);
	  }

	  if (typeof reducer !== 'function') {
	    throw new Error('Expected the reducer to be a function.');
	  }

	  var currentReducer = reducer;
	  var currentState = preloadedState;
	  var currentListeners = [];
	  var nextListeners = currentListeners;
	  var isDispatching = false;

	  function ensureCanMutateNextListeners() {
	    if (nextListeners === currentListeners) {
	      nextListeners = currentListeners.slice();
	    }
	  }

	  /**
	   * Reads the state tree managed by the store.
	   *
	   * @returns {any} The current state tree of your application.
	   */
	  function getState() {
	    return currentState;
	  }

	  /**
	   * Adds a change listener. It will be called any time an action is dispatched,
	   * and some part of the state tree may potentially have changed. You may then
	   * call `getState()` to read the current state tree inside the callback.
	   *
	   * You may call `dispatch()` from a change listener, with the following
	   * caveats:
	   *
	   * 1. The subscriptions are snapshotted just before every `dispatch()` call.
	   * If you subscribe or unsubscribe while the listeners are being invoked, this
	   * will not have any effect on the `dispatch()` that is currently in progress.
	   * However, the next `dispatch()` call, whether nested or not, will use a more
	   * recent snapshot of the subscription list.
	   *
	   * 2. The listener should not expect to see all state changes, as the state
	   * might have been updated multiple times during a nested `dispatch()` before
	   * the listener is called. It is, however, guaranteed that all subscribers
	   * registered before the `dispatch()` started will be called with the latest
	   * state by the time it exits.
	   *
	   * @param {Function} listener A callback to be invoked on every dispatch.
	   * @returns {Function} A function to remove this change listener.
	   */
	  function subscribe(listener) {
	    if (typeof listener !== 'function') {
	      throw new Error('Expected listener to be a function.');
	    }

	    var isSubscribed = true;

	    ensureCanMutateNextListeners();
	    nextListeners.push(listener);

	    return function unsubscribe() {
	      if (!isSubscribed) {
	        return;
	      }

	      isSubscribed = false;

	      ensureCanMutateNextListeners();
	      var index = nextListeners.indexOf(listener);
	      nextListeners.splice(index, 1);
	    };
	  }

	  /**
	   * Dispatches an action. It is the only way to trigger a state change.
	   *
	   * The `reducer` function, used to create the store, will be called with the
	   * current state tree and the given `action`. Its return value will
	   * be considered the **next** state of the tree, and the change listeners
	   * will be notified.
	   *
	   * The base implementation only supports plain object actions. If you want to
	   * dispatch a Promise, an Observable, a thunk, or something else, you need to
	   * wrap your store creating function into the corresponding middleware. For
	   * example, see the documentation for the `redux-thunk` package. Even the
	   * middleware will eventually dispatch plain object actions using this method.
	   *
	   * @param {Object} action A plain object representing “what changed”. It is
	   * a good idea to keep actions serializable so you can record and replay user
	   * sessions, or use the time travelling `redux-devtools`. An action must have
	   * a `type` property which may not be `undefined`. It is a good idea to use
	   * string constants for action types.
	   *
	   * @returns {Object} For convenience, the same action object you dispatched.
	   *
	   * Note that, if you use a custom middleware, it may wrap `dispatch()` to
	   * return something else (for example, a Promise you can await).
	   */
	  function dispatch(action) {
	    if (!(0, _isPlainObject2['default'])(action)) {
	      throw new Error('Actions must be plain objects. ' + 'Use custom middleware for async actions.');
	    }

	    if (typeof action.type === 'undefined') {
	      throw new Error('Actions may not have an undefined "type" property. ' + 'Have you misspelled a constant?');
	    }

	    if (isDispatching) {
	      throw new Error('Reducers may not dispatch actions.');
	    }

	    try {
	      isDispatching = true;
	      currentState = currentReducer(currentState, action);
	    } finally {
	      isDispatching = false;
	    }

	    var listeners = currentListeners = nextListeners;
	    for (var i = 0; i < listeners.length; i++) {
	      listeners[i]();
	    }

	    return action;
	  }

	  /**
	   * Replaces the reducer currently used by the store to calculate the state.
	   *
	   * You might need this if your app implements code splitting and you want to
	   * load some of the reducers dynamically. You might also need this if you
	   * implement a hot reloading mechanism for Redux.
	   *
	   * @param {Function} nextReducer The reducer for the store to use instead.
	   * @returns {void}
	   */
	  function replaceReducer(nextReducer) {
	    if (typeof nextReducer !== 'function') {
	      throw new Error('Expected the nextReducer to be a function.');
	    }

	    currentReducer = nextReducer;
	    dispatch({ type: ActionTypes.INIT });
	  }

	  /**
	   * Interoperability point for observable/reactive libraries.
	   * @returns {observable} A minimal observable of state changes.
	   * For more information, see the observable proposal:
	   * https://github.com/zenparsing/es-observable
	   */
	  function observable() {
	    var _ref;

	    var outerSubscribe = subscribe;
	    return _ref = {
	      /**
	       * The minimal observable subscription method.
	       * @param {Object} observer Any object that can be used as an observer.
	       * The observer object should have a `next` method.
	       * @returns {subscription} An object with an `unsubscribe` method that can
	       * be used to unsubscribe the observable from the store, and prevent further
	       * emission of values from the observable.
	       */
	      subscribe: function subscribe(observer) {
	        if (typeof observer !== 'object') {
	          throw new TypeError('Expected the observer to be an object.');
	        }

	        function observeState() {
	          if (observer.next) {
	            observer.next(getState());
	          }
	        }

	        observeState();
	        var unsubscribe = outerSubscribe(observeState);
	        return { unsubscribe: unsubscribe };
	      }
	    }, _ref[_symbolObservable2['default']] = function () {
	      return this;
	    }, _ref;
	  }

	  // When a store is created, an "INIT" action is dispatched so that every
	  // reducer returns their initial state. This effectively populates
	  // the initial state tree.
	  dispatch({ type: ActionTypes.INIT });

	  return _ref2 = {
	    dispatch: dispatch,
	    subscribe: subscribe,
	    getState: getState,
	    replaceReducer: replaceReducer
	  }, _ref2[_symbolObservable2['default']] = observable, _ref2;
	}

/***/ },
/* 168 */
/***/ function(module, exports, __webpack_require__) {

	var baseGetTag = __webpack_require__(169),
	    getPrototype = __webpack_require__(175),
	    isObjectLike = __webpack_require__(177);

	/** `Object#toString` result references. */
	var objectTag = '[object Object]';

	/** Used for built-in method references. */
	var funcProto = Function.prototype,
	    objectProto = Object.prototype;

	/** Used to resolve the decompiled source of functions. */
	var funcToString = funcProto.toString;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/** Used to infer the `Object` constructor. */
	var objectCtorString = funcToString.call(Object);

	/**
	 * Checks if `value` is a plain object, that is, an object created by the
	 * `Object` constructor or one with a `[[Prototype]]` of `null`.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.8.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 * }
	 *
	 * _.isPlainObject(new Foo);
	 * // => false
	 *
	 * _.isPlainObject([1, 2, 3]);
	 * // => false
	 *
	 * _.isPlainObject({ 'x': 0, 'y': 0 });
	 * // => true
	 *
	 * _.isPlainObject(Object.create(null));
	 * // => true
	 */
	function isPlainObject(value) {
	  if (!isObjectLike(value) || baseGetTag(value) != objectTag) {
	    return false;
	  }
	  var proto = getPrototype(value);
	  if (proto === null) {
	    return true;
	  }
	  var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
	  return typeof Ctor == 'function' && Ctor instanceof Ctor &&
	    funcToString.call(Ctor) == objectCtorString;
	}

	module.exports = isPlainObject;


/***/ },
/* 169 */
/***/ function(module, exports, __webpack_require__) {

	var Symbol = __webpack_require__(170),
	    getRawTag = __webpack_require__(173),
	    objectToString = __webpack_require__(174);

	/** `Object#toString` result references. */
	var nullTag = '[object Null]',
	    undefinedTag = '[object Undefined]';

	/** Built-in value references. */
	var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

	/**
	 * The base implementation of `getTag` without fallbacks for buggy environments.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {string} Returns the `toStringTag`.
	 */
	function baseGetTag(value) {
	  if (value == null) {
	    return value === undefined ? undefinedTag : nullTag;
	  }
	  value = Object(value);
	  return (symToStringTag && symToStringTag in value)
	    ? getRawTag(value)
	    : objectToString(value);
	}

	module.exports = baseGetTag;


/***/ },
/* 170 */
/***/ function(module, exports, __webpack_require__) {

	var root = __webpack_require__(171);

	/** Built-in value references. */
	var Symbol = root.Symbol;

	module.exports = Symbol;


/***/ },
/* 171 */
/***/ function(module, exports, __webpack_require__) {

	var freeGlobal = __webpack_require__(172);

	/** Detect free variable `self`. */
	var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

	/** Used as a reference to the global object. */
	var root = freeGlobal || freeSelf || Function('return this')();

	module.exports = root;


/***/ },
/* 172 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {/** Detect free variable `global` from Node.js. */
	var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

	module.exports = freeGlobal;

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 173 */
/***/ function(module, exports, __webpack_require__) {

	var Symbol = __webpack_require__(170);

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var nativeObjectToString = objectProto.toString;

	/** Built-in value references. */
	var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

	/**
	 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {string} Returns the raw `toStringTag`.
	 */
	function getRawTag(value) {
	  var isOwn = hasOwnProperty.call(value, symToStringTag),
	      tag = value[symToStringTag];

	  try {
	    value[symToStringTag] = undefined;
	    var unmasked = true;
	  } catch (e) {}

	  var result = nativeObjectToString.call(value);
	  if (unmasked) {
	    if (isOwn) {
	      value[symToStringTag] = tag;
	    } else {
	      delete value[symToStringTag];
	    }
	  }
	  return result;
	}

	module.exports = getRawTag;


/***/ },
/* 174 */
/***/ function(module, exports) {

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var nativeObjectToString = objectProto.toString;

	/**
	 * Converts `value` to a string using `Object.prototype.toString`.
	 *
	 * @private
	 * @param {*} value The value to convert.
	 * @returns {string} Returns the converted string.
	 */
	function objectToString(value) {
	  return nativeObjectToString.call(value);
	}

	module.exports = objectToString;


/***/ },
/* 175 */
/***/ function(module, exports, __webpack_require__) {

	var overArg = __webpack_require__(176);

	/** Built-in value references. */
	var getPrototype = overArg(Object.getPrototypeOf, Object);

	module.exports = getPrototype;


/***/ },
/* 176 */
/***/ function(module, exports) {

	/**
	 * Creates a unary function that invokes `func` with its argument transformed.
	 *
	 * @private
	 * @param {Function} func The function to wrap.
	 * @param {Function} transform The argument transform.
	 * @returns {Function} Returns the new function.
	 */
	function overArg(func, transform) {
	  return function(arg) {
	    return func(transform(arg));
	  };
	}

	module.exports = overArg;


/***/ },
/* 177 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is object-like. A value is object-like if it's not `null`
	 * and has a `typeof` result of "object".
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	 * @example
	 *
	 * _.isObjectLike({});
	 * // => true
	 *
	 * _.isObjectLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isObjectLike(_.noop);
	 * // => false
	 *
	 * _.isObjectLike(null);
	 * // => false
	 */
	function isObjectLike(value) {
	  return value != null && typeof value == 'object';
	}

	module.exports = isObjectLike;


/***/ },
/* 178 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(179);


/***/ },
/* 179 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global, module) {'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _ponyfill = __webpack_require__(181);

	var _ponyfill2 = _interopRequireDefault(_ponyfill);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var root; /* global window */


	if (typeof self !== 'undefined') {
	  root = self;
	} else if (typeof window !== 'undefined') {
	  root = window;
	} else if (typeof global !== 'undefined') {
	  root = global;
	} else if (true) {
	  root = module;
	} else {
	  root = Function('return this')();
	}

	var result = (0, _ponyfill2['default'])(root);
	exports['default'] = result;
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }()), __webpack_require__(180)(module)))

/***/ },
/* 180 */
/***/ function(module, exports) {

	module.exports = function(module) {
		if(!module.webpackPolyfill) {
			module.deprecate = function() {};
			module.paths = [];
			// module.parent = undefined by default
			module.children = [];
			module.webpackPolyfill = 1;
		}
		return module;
	}


/***/ },
/* 181 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports['default'] = symbolObservablePonyfill;
	function symbolObservablePonyfill(root) {
		var result;
		var _Symbol = root.Symbol;

		if (typeof _Symbol === 'function') {
			if (_Symbol.observable) {
				result = _Symbol.observable;
			} else {
				result = _Symbol('observable');
				_Symbol.observable = result;
			}
		} else {
			result = '@@observable';
		}

		return result;
	};

/***/ },
/* 182 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports['default'] = combineReducers;

	var _createStore = __webpack_require__(167);

	var _isPlainObject = __webpack_require__(168);

	var _isPlainObject2 = _interopRequireDefault(_isPlainObject);

	var _warning = __webpack_require__(183);

	var _warning2 = _interopRequireDefault(_warning);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function getUndefinedStateErrorMessage(key, action) {
	  var actionType = action && action.type;
	  var actionName = actionType && '"' + actionType.toString() + '"' || 'an action';

	  return 'Given action ' + actionName + ', reducer "' + key + '" returned undefined. ' + 'To ignore an action, you must explicitly return the previous state.';
	}

	function getUnexpectedStateShapeWarningMessage(inputState, reducers, action, unexpectedKeyCache) {
	  var reducerKeys = Object.keys(reducers);
	  var argumentName = action && action.type === _createStore.ActionTypes.INIT ? 'preloadedState argument passed to createStore' : 'previous state received by the reducer';

	  if (reducerKeys.length === 0) {
	    return 'Store does not have a valid reducer. Make sure the argument passed ' + 'to combineReducers is an object whose values are reducers.';
	  }

	  if (!(0, _isPlainObject2['default'])(inputState)) {
	    return 'The ' + argumentName + ' has unexpected type of "' + {}.toString.call(inputState).match(/\s([a-z|A-Z]+)/)[1] + '". Expected argument to be an object with the following ' + ('keys: "' + reducerKeys.join('", "') + '"');
	  }

	  var unexpectedKeys = Object.keys(inputState).filter(function (key) {
	    return !reducers.hasOwnProperty(key) && !unexpectedKeyCache[key];
	  });

	  unexpectedKeys.forEach(function (key) {
	    unexpectedKeyCache[key] = true;
	  });

	  if (unexpectedKeys.length > 0) {
	    return 'Unexpected ' + (unexpectedKeys.length > 1 ? 'keys' : 'key') + ' ' + ('"' + unexpectedKeys.join('", "') + '" found in ' + argumentName + '. ') + 'Expected to find one of the known reducer keys instead: ' + ('"' + reducerKeys.join('", "') + '". Unexpected keys will be ignored.');
	  }
	}

	function assertReducerSanity(reducers) {
	  Object.keys(reducers).forEach(function (key) {
	    var reducer = reducers[key];
	    var initialState = reducer(undefined, { type: _createStore.ActionTypes.INIT });

	    if (typeof initialState === 'undefined') {
	      throw new Error('Reducer "' + key + '" returned undefined during initialization. ' + 'If the state passed to the reducer is undefined, you must ' + 'explicitly return the initial state. The initial state may ' + 'not be undefined.');
	    }

	    var type = '@@redux/PROBE_UNKNOWN_ACTION_' + Math.random().toString(36).substring(7).split('').join('.');
	    if (typeof reducer(undefined, { type: type }) === 'undefined') {
	      throw new Error('Reducer "' + key + '" returned undefined when probed with a random type. ' + ('Don\'t try to handle ' + _createStore.ActionTypes.INIT + ' or other actions in "redux/*" ') + 'namespace. They are considered private. Instead, you must return the ' + 'current state for any unknown actions, unless it is undefined, ' + 'in which case you must return the initial state, regardless of the ' + 'action type. The initial state may not be undefined.');
	    }
	  });
	}

	/**
	 * Turns an object whose values are different reducer functions, into a single
	 * reducer function. It will call every child reducer, and gather their results
	 * into a single state object, whose keys correspond to the keys of the passed
	 * reducer functions.
	 *
	 * @param {Object} reducers An object whose values correspond to different
	 * reducer functions that need to be combined into one. One handy way to obtain
	 * it is to use ES6 `import * as reducers` syntax. The reducers may never return
	 * undefined for any action. Instead, they should return their initial state
	 * if the state passed to them was undefined, and the current state for any
	 * unrecognized action.
	 *
	 * @returns {Function} A reducer function that invokes every reducer inside the
	 * passed object, and builds a state object with the same shape.
	 */
	function combineReducers(reducers) {
	  var reducerKeys = Object.keys(reducers);
	  var finalReducers = {};
	  for (var i = 0; i < reducerKeys.length; i++) {
	    var key = reducerKeys[i];

	    if (false) {
	      if (typeof reducers[key] === 'undefined') {
	        (0, _warning2['default'])('No reducer provided for key "' + key + '"');
	      }
	    }

	    if (typeof reducers[key] === 'function') {
	      finalReducers[key] = reducers[key];
	    }
	  }
	  var finalReducerKeys = Object.keys(finalReducers);

	  if (false) {
	    var unexpectedKeyCache = {};
	  }

	  var sanityError;
	  try {
	    assertReducerSanity(finalReducers);
	  } catch (e) {
	    sanityError = e;
	  }

	  return function combination() {
	    var state = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	    var action = arguments[1];

	    if (sanityError) {
	      throw sanityError;
	    }

	    if (false) {
	      var warningMessage = getUnexpectedStateShapeWarningMessage(state, finalReducers, action, unexpectedKeyCache);
	      if (warningMessage) {
	        (0, _warning2['default'])(warningMessage);
	      }
	    }

	    var hasChanged = false;
	    var nextState = {};
	    for (var i = 0; i < finalReducerKeys.length; i++) {
	      var key = finalReducerKeys[i];
	      var reducer = finalReducers[key];
	      var previousStateForKey = state[key];
	      var nextStateForKey = reducer(previousStateForKey, action);
	      if (typeof nextStateForKey === 'undefined') {
	        var errorMessage = getUndefinedStateErrorMessage(key, action);
	        throw new Error(errorMessage);
	      }
	      nextState[key] = nextStateForKey;
	      hasChanged = hasChanged || nextStateForKey !== previousStateForKey;
	    }
	    return hasChanged ? nextState : state;
	  };
	}

/***/ },
/* 183 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports['default'] = warning;
	/**
	 * Prints a warning in the console if it exists.
	 *
	 * @param {String} message The warning message.
	 * @returns {void}
	 */
	function warning(message) {
	  /* eslint-disable no-console */
	  if (typeof console !== 'undefined' && typeof console.error === 'function') {
	    console.error(message);
	  }
	  /* eslint-enable no-console */
	  try {
	    // This error was thrown as a convenience so that if you enable
	    // "break on all exceptions" in your console,
	    // it would pause the execution at this line.
	    throw new Error(message);
	    /* eslint-disable no-empty */
	  } catch (e) {}
	  /* eslint-enable no-empty */
	}

/***/ },
/* 184 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports['default'] = bindActionCreators;
	function bindActionCreator(actionCreator, dispatch) {
	  return function () {
	    return dispatch(actionCreator.apply(undefined, arguments));
	  };
	}

	/**
	 * Turns an object whose values are action creators, into an object with the
	 * same keys, but with every function wrapped into a `dispatch` call so they
	 * may be invoked directly. This is just a convenience method, as you can call
	 * `store.dispatch(MyActionCreators.doSomething())` yourself just fine.
	 *
	 * For convenience, you can also pass a single function as the first argument,
	 * and get a function in return.
	 *
	 * @param {Function|Object} actionCreators An object whose values are action
	 * creator functions. One handy way to obtain it is to use ES6 `import * as`
	 * syntax. You may also pass a single function.
	 *
	 * @param {Function} dispatch The `dispatch` function available on your Redux
	 * store.
	 *
	 * @returns {Function|Object} The object mimicking the original object, but with
	 * every action creator wrapped into the `dispatch` call. If you passed a
	 * function as `actionCreators`, the return value will also be a single
	 * function.
	 */
	function bindActionCreators(actionCreators, dispatch) {
	  if (typeof actionCreators === 'function') {
	    return bindActionCreator(actionCreators, dispatch);
	  }

	  if (typeof actionCreators !== 'object' || actionCreators === null) {
	    throw new Error('bindActionCreators expected an object or a function, instead received ' + (actionCreators === null ? 'null' : typeof actionCreators) + '. ' + 'Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');
	  }

	  var keys = Object.keys(actionCreators);
	  var boundActionCreators = {};
	  for (var i = 0; i < keys.length; i++) {
	    var key = keys[i];
	    var actionCreator = actionCreators[key];
	    if (typeof actionCreator === 'function') {
	      boundActionCreators[key] = bindActionCreator(actionCreator, dispatch);
	    }
	  }
	  return boundActionCreators;
	}

/***/ },
/* 185 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	exports['default'] = applyMiddleware;

	var _compose = __webpack_require__(186);

	var _compose2 = _interopRequireDefault(_compose);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	/**
	 * Creates a store enhancer that applies middleware to the dispatch method
	 * of the Redux store. This is handy for a variety of tasks, such as expressing
	 * asynchronous actions in a concise manner, or logging every action payload.
	 *
	 * See `redux-thunk` package as an example of the Redux middleware.
	 *
	 * Because middleware is potentially asynchronous, this should be the first
	 * store enhancer in the composition chain.
	 *
	 * Note that each middleware will be given the `dispatch` and `getState` functions
	 * as named arguments.
	 *
	 * @param {...Function} middlewares The middleware chain to be applied.
	 * @returns {Function} A store enhancer applying the middleware.
	 */
	function applyMiddleware() {
	  for (var _len = arguments.length, middlewares = Array(_len), _key = 0; _key < _len; _key++) {
	    middlewares[_key] = arguments[_key];
	  }

	  return function (createStore) {
	    return function (reducer, preloadedState, enhancer) {
	      var store = createStore(reducer, preloadedState, enhancer);
	      var _dispatch = store.dispatch;
	      var chain = [];

	      var middlewareAPI = {
	        getState: store.getState,
	        dispatch: function dispatch(action) {
	          return _dispatch(action);
	        }
	      };
	      chain = middlewares.map(function (middleware) {
	        return middleware(middlewareAPI);
	      });
	      _dispatch = _compose2['default'].apply(undefined, chain)(store.dispatch);

	      return _extends({}, store, {
	        dispatch: _dispatch
	      });
	    };
	  };
	}

/***/ },
/* 186 */
/***/ function(module, exports) {

	"use strict";

	exports.__esModule = true;
	exports["default"] = compose;
	/**
	 * Composes single-argument functions from right to left. The rightmost
	 * function can take multiple arguments as it provides the signature for
	 * the resulting composite function.
	 *
	 * @param {...Function} funcs The functions to compose.
	 * @returns {Function} A function obtained by composing the argument functions
	 * from right to left. For example, compose(f, g, h) is identical to doing
	 * (...args) => f(g(h(...args))).
	 */

	function compose() {
	  for (var _len = arguments.length, funcs = Array(_len), _key = 0; _key < _len; _key++) {
	    funcs[_key] = arguments[_key];
	  }

	  if (funcs.length === 0) {
	    return function (arg) {
	      return arg;
	    };
	  }

	  if (funcs.length === 1) {
	    return funcs[0];
	  }

	  var last = funcs[funcs.length - 1];
	  var rest = funcs.slice(0, -1);
	  return function () {
	    return rest.reduceRight(function (composed, f) {
	      return f(composed);
	    }, last.apply(undefined, arguments));
	  };
	}

/***/ },
/* 187 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.connect = exports.connectAdvanced = exports.Provider = undefined;

	var _Provider = __webpack_require__(188);

	var _Provider2 = _interopRequireDefault(_Provider);

	var _connectAdvanced = __webpack_require__(191);

	var _connectAdvanced2 = _interopRequireDefault(_connectAdvanced);

	var _connect = __webpack_require__(195);

	var _connect2 = _interopRequireDefault(_connect);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.Provider = _Provider2.default;
	exports.connectAdvanced = _connectAdvanced2.default;
	exports.connect = _connect2.default;

/***/ },
/* 188 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.default = undefined;

	var _react = __webpack_require__(1);

	var _storeShape = __webpack_require__(189);

	var _storeShape2 = _interopRequireDefault(_storeShape);

	var _warning = __webpack_require__(190);

	var _warning2 = _interopRequireDefault(_warning);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var didWarnAboutReceivingStore = false;
	function warnAboutReceivingStore() {
	  if (didWarnAboutReceivingStore) {
	    return;
	  }
	  didWarnAboutReceivingStore = true;

	  (0, _warning2.default)('<Provider> does not support changing `store` on the fly. ' + 'It is most likely that you see this error because you updated to ' + 'Redux 2.x and React Redux 2.x which no longer hot reload reducers ' + 'automatically. See https://github.com/reactjs/react-redux/releases/' + 'tag/v2.0.0 for the migration instructions.');
	}

	var Provider = function (_Component) {
	  _inherits(Provider, _Component);

	  Provider.prototype.getChildContext = function getChildContext() {
	    return { store: this.store };
	  };

	  function Provider(props, context) {
	    _classCallCheck(this, Provider);

	    var _this = _possibleConstructorReturn(this, _Component.call(this, props, context));

	    _this.store = props.store;
	    return _this;
	  }

	  Provider.prototype.render = function render() {
	    return _react.Children.only(this.props.children);
	  };

	  return Provider;
	}(_react.Component);

	exports.default = Provider;


	if (false) {
	  Provider.prototype.componentWillReceiveProps = function (nextProps) {
	    var store = this.store;
	    var nextStore = nextProps.store;


	    if (store !== nextStore) {
	      warnAboutReceivingStore();
	    }
	  };
	}

	Provider.propTypes = {
	  store: _storeShape2.default.isRequired,
	  children: _react.PropTypes.element.isRequired
	};
	Provider.childContextTypes = {
	  store: _storeShape2.default.isRequired
	};
	Provider.displayName = 'Provider';

/***/ },
/* 189 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _react = __webpack_require__(1);

	exports.default = _react.PropTypes.shape({
	  subscribe: _react.PropTypes.func.isRequired,
	  dispatch: _react.PropTypes.func.isRequired,
	  getState: _react.PropTypes.func.isRequired
	});

/***/ },
/* 190 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports.default = warning;
	/**
	 * Prints a warning in the console if it exists.
	 *
	 * @param {String} message The warning message.
	 * @returns {void}
	 */
	function warning(message) {
	  /* eslint-disable no-console */
	  if (typeof console !== 'undefined' && typeof console.error === 'function') {
	    console.error(message);
	  }
	  /* eslint-enable no-console */
	  try {
	    // This error was thrown as a convenience so that if you enable
	    // "break on all exceptions" in your console,
	    // it would pause the execution at this line.
	    throw new Error(message);
	    /* eslint-disable no-empty */
	  } catch (e) {}
	  /* eslint-enable no-empty */
	}

/***/ },
/* 191 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	exports.default = connectAdvanced;

	var _hoistNonReactStatics = __webpack_require__(192);

	var _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);

	var _invariant = __webpack_require__(193);

	var _invariant2 = _interopRequireDefault(_invariant);

	var _react = __webpack_require__(1);

	var _Subscription = __webpack_require__(194);

	var _Subscription2 = _interopRequireDefault(_Subscription);

	var _storeShape = __webpack_require__(189);

	var _storeShape2 = _interopRequireDefault(_storeShape);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	var hotReloadingVersion = 0;
	function connectAdvanced(
	/*
	  selectorFactory is a func that is responsible for returning the selector function used to
	  compute new props from state, props, and dispatch. For example:
	     export default connectAdvanced((dispatch, options) => (state, props) => ({
	      thing: state.things[props.thingId],
	      saveThing: fields => dispatch(actionCreators.saveThing(props.thingId, fields)),
	    }))(YourComponent)
	   Access to dispatch is provided to the factory so selectorFactories can bind actionCreators
	  outside of their selector as an optimization. Options passed to connectAdvanced are passed to
	  the selectorFactory, along with displayName and WrappedComponent, as the second argument.
	   Note that selectorFactory is responsible for all caching/memoization of inbound and outbound
	  props. Do not use connectAdvanced directly without memoizing results between calls to your
	  selector, otherwise the Connect component will re-render on every state or props change.
	*/
	selectorFactory) {
	  var _contextTypes, _childContextTypes;

	  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
	      _ref$getDisplayName = _ref.getDisplayName,
	      getDisplayName = _ref$getDisplayName === undefined ? function (name) {
	    return 'ConnectAdvanced(' + name + ')';
	  } : _ref$getDisplayName,
	      _ref$methodName = _ref.methodName,
	      methodName = _ref$methodName === undefined ? 'connectAdvanced' : _ref$methodName,
	      _ref$renderCountProp = _ref.renderCountProp,
	      renderCountProp = _ref$renderCountProp === undefined ? undefined : _ref$renderCountProp,
	      _ref$shouldHandleStat = _ref.shouldHandleStateChanges,
	      shouldHandleStateChanges = _ref$shouldHandleStat === undefined ? true : _ref$shouldHandleStat,
	      _ref$storeKey = _ref.storeKey,
	      storeKey = _ref$storeKey === undefined ? 'store' : _ref$storeKey,
	      _ref$withRef = _ref.withRef,
	      withRef = _ref$withRef === undefined ? false : _ref$withRef,
	      connectOptions = _objectWithoutProperties(_ref, ['getDisplayName', 'methodName', 'renderCountProp', 'shouldHandleStateChanges', 'storeKey', 'withRef']);

	  var subscriptionKey = storeKey + 'Subscription';
	  var version = hotReloadingVersion++;

	  var contextTypes = (_contextTypes = {}, _contextTypes[storeKey] = _storeShape2.default, _contextTypes[subscriptionKey] = _react.PropTypes.instanceOf(_Subscription2.default), _contextTypes);
	  var childContextTypes = (_childContextTypes = {}, _childContextTypes[subscriptionKey] = _react.PropTypes.instanceOf(_Subscription2.default), _childContextTypes);

	  return function wrapWithConnect(WrappedComponent) {
	    (0, _invariant2.default)(typeof WrappedComponent == 'function', 'You must pass a component to the function returned by ' + ('connect. Instead received ' + WrappedComponent));

	    var wrappedComponentName = WrappedComponent.displayName || WrappedComponent.name || 'Component';

	    var displayName = getDisplayName(wrappedComponentName);

	    var selectorFactoryOptions = _extends({}, connectOptions, {
	      getDisplayName: getDisplayName,
	      methodName: methodName,
	      renderCountProp: renderCountProp,
	      shouldHandleStateChanges: shouldHandleStateChanges,
	      storeKey: storeKey,
	      withRef: withRef,
	      displayName: displayName,
	      wrappedComponentName: wrappedComponentName,
	      WrappedComponent: WrappedComponent
	    });

	    var Connect = function (_Component) {
	      _inherits(Connect, _Component);

	      function Connect(props, context) {
	        _classCallCheck(this, Connect);

	        var _this = _possibleConstructorReturn(this, _Component.call(this, props, context));

	        _this.version = version;
	        _this.state = {};
	        _this.renderCount = 0;
	        _this.store = _this.props[storeKey] || _this.context[storeKey];
	        _this.parentSub = props[subscriptionKey] || context[subscriptionKey];

	        _this.setWrappedInstance = _this.setWrappedInstance.bind(_this);

	        (0, _invariant2.default)(_this.store, 'Could not find "' + storeKey + '" in either the context or ' + ('props of "' + displayName + '". ') + 'Either wrap the root component in a <Provider>, ' + ('or explicitly pass "' + storeKey + '" as a prop to "' + displayName + '".'));

	        // make sure `getState` is properly bound in order to avoid breaking
	        // custom store implementations that rely on the store's context
	        _this.getState = _this.store.getState.bind(_this.store);

	        _this.initSelector();
	        _this.initSubscription();
	        return _this;
	      }

	      Connect.prototype.getChildContext = function getChildContext() {
	        var _ref2;

	        return _ref2 = {}, _ref2[subscriptionKey] = this.subscription, _ref2;
	      };

	      Connect.prototype.componentDidMount = function componentDidMount() {
	        if (!shouldHandleStateChanges) return;

	        // componentWillMount fires during server side rendering, but componentDidMount and
	        // componentWillUnmount do not. Because of this, trySubscribe happens during ...didMount.
	        // Otherwise, unsubscription would never take place during SSR, causing a memory leak.
	        // To handle the case where a child component may have triggered a state change by
	        // dispatching an action in its componentWillMount, we have to re-run the select and maybe
	        // re-render.
	        this.subscription.trySubscribe();
	        this.selector.run(this.props);
	        if (this.selector.shouldComponentUpdate) this.forceUpdate();
	      };

	      Connect.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
	        this.selector.run(nextProps);
	      };

	      Connect.prototype.shouldComponentUpdate = function shouldComponentUpdate() {
	        return this.selector.shouldComponentUpdate;
	      };

	      Connect.prototype.componentWillUnmount = function componentWillUnmount() {
	        if (this.subscription) this.subscription.tryUnsubscribe();
	        // these are just to guard against extra memory leakage if a parent element doesn't
	        // dereference this instance properly, such as an async callback that never finishes
	        this.subscription = null;
	        this.store = null;
	        this.parentSub = null;
	        this.selector.run = function () {};
	      };

	      Connect.prototype.getWrappedInstance = function getWrappedInstance() {
	        (0, _invariant2.default)(withRef, 'To access the wrapped instance, you need to specify ' + ('{ withRef: true } in the options argument of the ' + methodName + '() call.'));
	        return this.wrappedInstance;
	      };

	      Connect.prototype.setWrappedInstance = function setWrappedInstance(ref) {
	        this.wrappedInstance = ref;
	      };

	      Connect.prototype.initSelector = function initSelector() {
	        var dispatch = this.store.dispatch;
	        var getState = this.getState;

	        var sourceSelector = selectorFactory(dispatch, selectorFactoryOptions);

	        // wrap the selector in an object that tracks its results between runs
	        var selector = this.selector = {
	          shouldComponentUpdate: true,
	          props: sourceSelector(getState(), this.props),
	          run: function runComponentSelector(props) {
	            try {
	              var nextProps = sourceSelector(getState(), props);
	              if (selector.error || nextProps !== selector.props) {
	                selector.shouldComponentUpdate = true;
	                selector.props = nextProps;
	                selector.error = null;
	              }
	            } catch (error) {
	              selector.shouldComponentUpdate = true;
	              selector.error = error;
	            }
	          }
	        };
	      };

	      Connect.prototype.initSubscription = function initSubscription() {
	        var _this2 = this;

	        if (shouldHandleStateChanges) {
	          (function () {
	            var subscription = _this2.subscription = new _Subscription2.default(_this2.store, _this2.parentSub);
	            var dummyState = {};

	            subscription.onStateChange = function onStateChange() {
	              this.selector.run(this.props);

	              if (!this.selector.shouldComponentUpdate) {
	                subscription.notifyNestedSubs();
	              } else {
	                this.componentDidUpdate = function componentDidUpdate() {
	                  this.componentDidUpdate = undefined;
	                  subscription.notifyNestedSubs();
	                };

	                this.setState(dummyState);
	              }
	            }.bind(_this2);
	          })();
	        }
	      };

	      Connect.prototype.isSubscribed = function isSubscribed() {
	        return Boolean(this.subscription) && this.subscription.isSubscribed();
	      };

	      Connect.prototype.addExtraProps = function addExtraProps(props) {
	        if (!withRef && !renderCountProp) return props;
	        // make a shallow copy so that fields added don't leak to the original selector.
	        // this is especially important for 'ref' since that's a reference back to the component
	        // instance. a singleton memoized selector would then be holding a reference to the
	        // instance, preventing the instance from being garbage collected, and that would be bad
	        var withExtras = _extends({}, props);
	        if (withRef) withExtras.ref = this.setWrappedInstance;
	        if (renderCountProp) withExtras[renderCountProp] = this.renderCount++;
	        return withExtras;
	      };

	      Connect.prototype.render = function render() {
	        var selector = this.selector;
	        selector.shouldComponentUpdate = false;

	        if (selector.error) {
	          throw selector.error;
	        } else {
	          return (0, _react.createElement)(WrappedComponent, this.addExtraProps(selector.props));
	        }
	      };

	      return Connect;
	    }(_react.Component);

	    Connect.WrappedComponent = WrappedComponent;
	    Connect.displayName = displayName;
	    Connect.childContextTypes = childContextTypes;
	    Connect.contextTypes = contextTypes;
	    Connect.propTypes = contextTypes;

	    if (false) {
	      Connect.prototype.componentWillUpdate = function componentWillUpdate() {
	        // We are hot reloading!
	        if (this.version !== version) {
	          this.version = version;
	          this.initSelector();

	          if (this.subscription) this.subscription.tryUnsubscribe();
	          this.initSubscription();
	          if (shouldHandleStateChanges) this.subscription.trySubscribe();
	        }
	      };
	    }

	    return (0, _hoistNonReactStatics2.default)(Connect, WrappedComponent);
	  };
	}

/***/ },
/* 192 */
/***/ function(module, exports) {

	/**
	 * Copyright 2015, Yahoo! Inc.
	 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
	 */
	'use strict';

	var REACT_STATICS = {
	    childContextTypes: true,
	    contextTypes: true,
	    defaultProps: true,
	    displayName: true,
	    getDefaultProps: true,
	    mixins: true,
	    propTypes: true,
	    type: true
	};

	var KNOWN_STATICS = {
	    name: true,
	    length: true,
	    prototype: true,
	    caller: true,
	    arguments: true,
	    arity: true
	};

	var isGetOwnPropertySymbolsAvailable = typeof Object.getOwnPropertySymbols === 'function';

	module.exports = function hoistNonReactStatics(targetComponent, sourceComponent, customStatics) {
	    if (typeof sourceComponent !== 'string') { // don't hoist over string (html) components
	        var keys = Object.getOwnPropertyNames(sourceComponent);

	        /* istanbul ignore else */
	        if (isGetOwnPropertySymbolsAvailable) {
	            keys = keys.concat(Object.getOwnPropertySymbols(sourceComponent));
	        }

	        for (var i = 0; i < keys.length; ++i) {
	            if (!REACT_STATICS[keys[i]] && !KNOWN_STATICS[keys[i]] && (!customStatics || !customStatics[keys[i]])) {
	                try {
	                    targetComponent[keys[i]] = sourceComponent[keys[i]];
	                } catch (error) {

	                }
	            }
	        }
	    }

	    return targetComponent;
	};


/***/ },
/* 193 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 */

	'use strict';

	/**
	 * Use invariant() to assert state which your program assumes to be true.
	 *
	 * Provide sprintf-style format (only %s is supported) and arguments
	 * to provide information about what broke and what you were
	 * expecting.
	 *
	 * The invariant message will be stripped in production, but the invariant
	 * will remain to ensure logic does not differ in production.
	 */

	var invariant = function(condition, format, a, b, c, d, e, f) {
	  if (false) {
	    if (format === undefined) {
	      throw new Error('invariant requires an error message argument');
	    }
	  }

	  if (!condition) {
	    var error;
	    if (format === undefined) {
	      error = new Error(
	        'Minified exception occurred; use the non-minified dev environment ' +
	        'for the full error message and additional helpful warnings.'
	      );
	    } else {
	      var args = [a, b, c, d, e, f];
	      var argIndex = 0;
	      error = new Error(
	        format.replace(/%s/g, function() { return args[argIndex++]; })
	      );
	      error.name = 'Invariant Violation';
	    }

	    error.framesToPop = 1; // we don't care about invariant's own frame
	    throw error;
	  }
	};

	module.exports = invariant;


/***/ },
/* 194 */
/***/ function(module, exports) {

	"use strict";

	exports.__esModule = true;

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	// encapsulates the subscription logic for connecting a component to the redux store, as
	// well as nesting subscriptions of descendant components, so that we can ensure the
	// ancestor components re-render before descendants

	var CLEARED = null;
	var nullListeners = {
	  notify: function notify() {}
	};

	function createListenerCollection() {
	  // the current/next pattern is copied from redux's createStore code.
	  // TODO: refactor+expose that code to be reusable here?
	  var current = [];
	  var next = [];

	  return {
	    clear: function clear() {
	      next = CLEARED;
	      current = CLEARED;
	    },
	    notify: function notify() {
	      var listeners = current = next;
	      for (var i = 0; i < listeners.length; i++) {
	        listeners[i]();
	      }
	    },
	    subscribe: function subscribe(listener) {
	      var isSubscribed = true;
	      if (next === current) next = current.slice();
	      next.push(listener);

	      return function unsubscribe() {
	        if (!isSubscribed || current === CLEARED) return;
	        isSubscribed = false;

	        if (next === current) next = current.slice();
	        next.splice(next.indexOf(listener), 1);
	      };
	    }
	  };
	}

	var Subscription = function () {
	  function Subscription(store, parentSub) {
	    _classCallCheck(this, Subscription);

	    this.store = store;
	    this.parentSub = parentSub;
	    this.unsubscribe = null;
	    this.listeners = nullListeners;
	  }

	  Subscription.prototype.addNestedSub = function addNestedSub(listener) {
	    this.trySubscribe();
	    return this.listeners.subscribe(listener);
	  };

	  Subscription.prototype.notifyNestedSubs = function notifyNestedSubs() {
	    this.listeners.notify();
	  };

	  Subscription.prototype.isSubscribed = function isSubscribed() {
	    return Boolean(this.unsubscribe);
	  };

	  Subscription.prototype.trySubscribe = function trySubscribe() {
	    if (!this.unsubscribe) {
	      // this.onStateChange is set by connectAdvanced.initSubscription()
	      this.unsubscribe = this.parentSub ? this.parentSub.addNestedSub(this.onStateChange) : this.store.subscribe(this.onStateChange);

	      this.listeners = createListenerCollection();
	    }
	  };

	  Subscription.prototype.tryUnsubscribe = function tryUnsubscribe() {
	    if (this.unsubscribe) {
	      this.unsubscribe();
	      this.unsubscribe = null;
	      this.listeners.clear();
	      this.listeners = nullListeners;
	    }
	  };

	  return Subscription;
	}();

	exports.default = Subscription;

/***/ },
/* 195 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	exports.createConnect = createConnect;

	var _connectAdvanced = __webpack_require__(191);

	var _connectAdvanced2 = _interopRequireDefault(_connectAdvanced);

	var _shallowEqual = __webpack_require__(196);

	var _shallowEqual2 = _interopRequireDefault(_shallowEqual);

	var _mapDispatchToProps = __webpack_require__(197);

	var _mapDispatchToProps2 = _interopRequireDefault(_mapDispatchToProps);

	var _mapStateToProps = __webpack_require__(200);

	var _mapStateToProps2 = _interopRequireDefault(_mapStateToProps);

	var _mergeProps = __webpack_require__(201);

	var _mergeProps2 = _interopRequireDefault(_mergeProps);

	var _selectorFactory = __webpack_require__(202);

	var _selectorFactory2 = _interopRequireDefault(_selectorFactory);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	/*
	  connect is a facade over connectAdvanced. It turns its args into a compatible
	  selectorFactory, which has the signature:

	    (dispatch, options) => (nextState, nextOwnProps) => nextFinalProps
	  
	  connect passes its args to connectAdvanced as options, which will in turn pass them to
	  selectorFactory each time a Connect component instance is instantiated or hot reloaded.

	  selectorFactory returns a final props selector from its mapStateToProps,
	  mapStateToPropsFactories, mapDispatchToProps, mapDispatchToPropsFactories, mergeProps,
	  mergePropsFactories, and pure args.

	  The resulting final props selector is called by the Connect component instance whenever
	  it receives new props or store state.
	 */

	function match(arg, factories, name) {
	  for (var i = factories.length - 1; i >= 0; i--) {
	    var result = factories[i](arg);
	    if (result) return result;
	  }

	  return function (dispatch, options) {
	    throw new Error('Invalid value of type ' + typeof arg + ' for ' + name + ' argument when connecting component ' + options.wrappedComponentName + '.');
	  };
	}

	function strictEqual(a, b) {
	  return a === b;
	}

	// createConnect with default args builds the 'official' connect behavior. Calling it with
	// different options opens up some testing and extensibility scenarios
	function createConnect() {
	  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
	      _ref$connectHOC = _ref.connectHOC,
	      connectHOC = _ref$connectHOC === undefined ? _connectAdvanced2.default : _ref$connectHOC,
	      _ref$mapStateToPropsF = _ref.mapStateToPropsFactories,
	      mapStateToPropsFactories = _ref$mapStateToPropsF === undefined ? _mapStateToProps2.default : _ref$mapStateToPropsF,
	      _ref$mapDispatchToPro = _ref.mapDispatchToPropsFactories,
	      mapDispatchToPropsFactories = _ref$mapDispatchToPro === undefined ? _mapDispatchToProps2.default : _ref$mapDispatchToPro,
	      _ref$mergePropsFactor = _ref.mergePropsFactories,
	      mergePropsFactories = _ref$mergePropsFactor === undefined ? _mergeProps2.default : _ref$mergePropsFactor,
	      _ref$selectorFactory = _ref.selectorFactory,
	      selectorFactory = _ref$selectorFactory === undefined ? _selectorFactory2.default : _ref$selectorFactory;

	  return function connect(mapStateToProps, mapDispatchToProps, mergeProps) {
	    var _ref2 = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {},
	        _ref2$pure = _ref2.pure,
	        pure = _ref2$pure === undefined ? true : _ref2$pure,
	        _ref2$areStatesEqual = _ref2.areStatesEqual,
	        areStatesEqual = _ref2$areStatesEqual === undefined ? strictEqual : _ref2$areStatesEqual,
	        _ref2$areOwnPropsEqua = _ref2.areOwnPropsEqual,
	        areOwnPropsEqual = _ref2$areOwnPropsEqua === undefined ? _shallowEqual2.default : _ref2$areOwnPropsEqua,
	        _ref2$areStatePropsEq = _ref2.areStatePropsEqual,
	        areStatePropsEqual = _ref2$areStatePropsEq === undefined ? _shallowEqual2.default : _ref2$areStatePropsEq,
	        _ref2$areMergedPropsE = _ref2.areMergedPropsEqual,
	        areMergedPropsEqual = _ref2$areMergedPropsE === undefined ? _shallowEqual2.default : _ref2$areMergedPropsE,
	        extraOptions = _objectWithoutProperties(_ref2, ['pure', 'areStatesEqual', 'areOwnPropsEqual', 'areStatePropsEqual', 'areMergedPropsEqual']);

	    var initMapStateToProps = match(mapStateToProps, mapStateToPropsFactories, 'mapStateToProps');
	    var initMapDispatchToProps = match(mapDispatchToProps, mapDispatchToPropsFactories, 'mapDispatchToProps');
	    var initMergeProps = match(mergeProps, mergePropsFactories, 'mergeProps');

	    return connectHOC(selectorFactory, _extends({
	      // used in error messages
	      methodName: 'connect',

	      // used to compute Connect's displayName from the wrapped component's displayName.
	      getDisplayName: function getDisplayName(name) {
	        return 'Connect(' + name + ')';
	      },

	      // if mapStateToProps is falsy, the Connect component doesn't subscribe to store state changes
	      shouldHandleStateChanges: Boolean(mapStateToProps),

	      // passed through to selectorFactory
	      initMapStateToProps: initMapStateToProps,
	      initMapDispatchToProps: initMapDispatchToProps,
	      initMergeProps: initMergeProps,
	      pure: pure,
	      areStatesEqual: areStatesEqual,
	      areOwnPropsEqual: areOwnPropsEqual,
	      areStatePropsEqual: areStatePropsEqual,
	      areMergedPropsEqual: areMergedPropsEqual

	    }, extraOptions));
	  };
	}

	exports.default = createConnect();

/***/ },
/* 196 */
/***/ function(module, exports) {

	"use strict";

	exports.__esModule = true;
	exports.default = shallowEqual;
	var hasOwn = Object.prototype.hasOwnProperty;

	function shallowEqual(a, b) {
	  if (a === b) return true;

	  var countA = 0;
	  var countB = 0;

	  for (var key in a) {
	    if (hasOwn.call(a, key) && a[key] !== b[key]) return false;
	    countA++;
	  }

	  for (var _key in b) {
	    if (hasOwn.call(b, _key)) countB++;
	  }

	  return countA === countB;
	}

/***/ },
/* 197 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.whenMapDispatchToPropsIsFunction = whenMapDispatchToPropsIsFunction;
	exports.whenMapDispatchToPropsIsMissing = whenMapDispatchToPropsIsMissing;
	exports.whenMapDispatchToPropsIsObject = whenMapDispatchToPropsIsObject;

	var _redux = __webpack_require__(166);

	var _wrapMapToProps = __webpack_require__(198);

	function whenMapDispatchToPropsIsFunction(mapDispatchToProps) {
	  return typeof mapDispatchToProps === 'function' ? (0, _wrapMapToProps.wrapMapToPropsFunc)(mapDispatchToProps, 'mapDispatchToProps') : undefined;
	}

	function whenMapDispatchToPropsIsMissing(mapDispatchToProps) {
	  return !mapDispatchToProps ? (0, _wrapMapToProps.wrapMapToPropsConstant)(function (dispatch) {
	    return { dispatch: dispatch };
	  }) : undefined;
	}

	function whenMapDispatchToPropsIsObject(mapDispatchToProps) {
	  return mapDispatchToProps && typeof mapDispatchToProps === 'object' ? (0, _wrapMapToProps.wrapMapToPropsConstant)(function (dispatch) {
	    return (0, _redux.bindActionCreators)(mapDispatchToProps, dispatch);
	  }) : undefined;
	}

	exports.default = [whenMapDispatchToPropsIsFunction, whenMapDispatchToPropsIsMissing, whenMapDispatchToPropsIsObject];

/***/ },
/* 198 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.wrapMapToPropsConstant = wrapMapToPropsConstant;
	exports.getDependsOnOwnProps = getDependsOnOwnProps;
	exports.wrapMapToPropsFunc = wrapMapToPropsFunc;

	var _verifyPlainObject = __webpack_require__(199);

	var _verifyPlainObject2 = _interopRequireDefault(_verifyPlainObject);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function wrapMapToPropsConstant(getConstant) {
	  return function initConstantSelector(dispatch, options) {
	    var constant = getConstant(dispatch, options);

	    function constantSelector() {
	      return constant;
	    }
	    constantSelector.dependsOnOwnProps = false;
	    return constantSelector;
	  };
	}

	// dependsOnOwnProps is used by createMapToPropsProxy to determine whether to pass props as args
	// to the mapToProps function being wrapped. It is also used by makePurePropsSelector to determine
	// whether mapToProps needs to be invoked when props have changed.
	// 
	// A length of one signals that mapToProps does not depend on props from the parent component.
	// A length of zero is assumed to mean mapToProps is getting args via arguments or ...args and
	// therefore not reporting its length accurately..
	function getDependsOnOwnProps(mapToProps) {
	  return mapToProps.dependsOnOwnProps !== null && mapToProps.dependsOnOwnProps !== undefined ? Boolean(mapToProps.dependsOnOwnProps) : mapToProps.length !== 1;
	}

	// Used by whenMapStateToPropsIsFunction and whenMapDispatchToPropsIsFunction,
	// this function wraps mapToProps in a proxy function which does several things:
	// 
	//  * Detects whether the mapToProps function being called depends on props, which
	//    is used by selectorFactory to decide if it should reinvoke on props changes.
	//    
	//  * On first call, handles mapToProps if returns another function, and treats that
	//    new function as the true mapToProps for subsequent calls.
	//    
	//  * On first call, verifies the first result is a plain object, in order to warn
	//    the developer that their mapToProps function is not returning a valid result.
	//    
	function wrapMapToPropsFunc(mapToProps, methodName) {
	  return function initProxySelector(dispatch, _ref) {
	    var displayName = _ref.displayName;

	    var proxy = function mapToPropsProxy(stateOrDispatch, ownProps) {
	      return proxy.dependsOnOwnProps ? proxy.mapToProps(stateOrDispatch, ownProps) : proxy.mapToProps(stateOrDispatch);
	    };

	    proxy.dependsOnOwnProps = getDependsOnOwnProps(mapToProps);

	    proxy.mapToProps = function detectFactoryAndVerify(stateOrDispatch, ownProps) {
	      proxy.mapToProps = mapToProps;
	      var props = proxy(stateOrDispatch, ownProps);

	      if (typeof props === 'function') {
	        proxy.mapToProps = props;
	        proxy.dependsOnOwnProps = getDependsOnOwnProps(props);
	        props = proxy(stateOrDispatch, ownProps);
	      }

	      if (false) (0, _verifyPlainObject2.default)(props, displayName, methodName);

	      return props;
	    };

	    return proxy;
	  };
	}

/***/ },
/* 199 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.default = verifyPlainObject;

	var _isPlainObject = __webpack_require__(168);

	var _isPlainObject2 = _interopRequireDefault(_isPlainObject);

	var _warning = __webpack_require__(190);

	var _warning2 = _interopRequireDefault(_warning);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function verifyPlainObject(value, displayName, methodName) {
	  if (!(0, _isPlainObject2.default)(value)) {
	    (0, _warning2.default)(methodName + '() in ' + displayName + ' must return a plain object. Instead received ' + value + '.');
	  }
	}

/***/ },
/* 200 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.whenMapStateToPropsIsFunction = whenMapStateToPropsIsFunction;
	exports.whenMapStateToPropsIsMissing = whenMapStateToPropsIsMissing;

	var _wrapMapToProps = __webpack_require__(198);

	function whenMapStateToPropsIsFunction(mapStateToProps) {
	  return typeof mapStateToProps === 'function' ? (0, _wrapMapToProps.wrapMapToPropsFunc)(mapStateToProps, 'mapStateToProps') : undefined;
	}

	function whenMapStateToPropsIsMissing(mapStateToProps) {
	  return !mapStateToProps ? (0, _wrapMapToProps.wrapMapToPropsConstant)(function () {
	    return {};
	  }) : undefined;
	}

	exports.default = [whenMapStateToPropsIsFunction, whenMapStateToPropsIsMissing];

/***/ },
/* 201 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	exports.defaultMergeProps = defaultMergeProps;
	exports.wrapMergePropsFunc = wrapMergePropsFunc;
	exports.whenMergePropsIsFunction = whenMergePropsIsFunction;
	exports.whenMergePropsIsOmitted = whenMergePropsIsOmitted;

	var _verifyPlainObject = __webpack_require__(199);

	var _verifyPlainObject2 = _interopRequireDefault(_verifyPlainObject);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function defaultMergeProps(stateProps, dispatchProps, ownProps) {
	  return _extends({}, ownProps, stateProps, dispatchProps);
	}

	function wrapMergePropsFunc(mergeProps) {
	  return function initMergePropsProxy(dispatch, _ref) {
	    var displayName = _ref.displayName,
	        pure = _ref.pure,
	        areMergedPropsEqual = _ref.areMergedPropsEqual;

	    var hasRunOnce = false;
	    var mergedProps = void 0;

	    return function mergePropsProxy(stateProps, dispatchProps, ownProps) {
	      var nextMergedProps = mergeProps(stateProps, dispatchProps, ownProps);

	      if (hasRunOnce) {
	        if (!pure || !areMergedPropsEqual(nextMergedProps, mergedProps)) mergedProps = nextMergedProps;
	      } else {
	        hasRunOnce = true;
	        mergedProps = nextMergedProps;

	        if (false) (0, _verifyPlainObject2.default)(mergedProps, displayName, 'mergeProps');
	      }

	      return mergedProps;
	    };
	  };
	}

	function whenMergePropsIsFunction(mergeProps) {
	  return typeof mergeProps === 'function' ? wrapMergePropsFunc(mergeProps) : undefined;
	}

	function whenMergePropsIsOmitted(mergeProps) {
	  return !mergeProps ? function () {
	    return defaultMergeProps;
	  } : undefined;
	}

	exports.default = [whenMergePropsIsFunction, whenMergePropsIsOmitted];

/***/ },
/* 202 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.impureFinalPropsSelectorFactory = impureFinalPropsSelectorFactory;
	exports.pureFinalPropsSelectorFactory = pureFinalPropsSelectorFactory;
	exports.default = finalPropsSelectorFactory;

	var _verifySubselectors = __webpack_require__(203);

	var _verifySubselectors2 = _interopRequireDefault(_verifySubselectors);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function impureFinalPropsSelectorFactory(mapStateToProps, mapDispatchToProps, mergeProps, dispatch) {
	  return function impureFinalPropsSelector(state, ownProps) {
	    return mergeProps(mapStateToProps(state, ownProps), mapDispatchToProps(dispatch, ownProps), ownProps);
	  };
	}

	function pureFinalPropsSelectorFactory(mapStateToProps, mapDispatchToProps, mergeProps, dispatch, _ref) {
	  var areStatesEqual = _ref.areStatesEqual,
	      areOwnPropsEqual = _ref.areOwnPropsEqual,
	      areStatePropsEqual = _ref.areStatePropsEqual;

	  var hasRunAtLeastOnce = false;
	  var state = void 0;
	  var ownProps = void 0;
	  var stateProps = void 0;
	  var dispatchProps = void 0;
	  var mergedProps = void 0;

	  function handleFirstCall(firstState, firstOwnProps) {
	    state = firstState;
	    ownProps = firstOwnProps;
	    stateProps = mapStateToProps(state, ownProps);
	    dispatchProps = mapDispatchToProps(dispatch, ownProps);
	    mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
	    hasRunAtLeastOnce = true;
	    return mergedProps;
	  }

	  function handleNewPropsAndNewState() {
	    stateProps = mapStateToProps(state, ownProps);

	    if (mapDispatchToProps.dependsOnOwnProps) dispatchProps = mapDispatchToProps(dispatch, ownProps);

	    mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
	    return mergedProps;
	  }

	  function handleNewProps() {
	    if (mapStateToProps.dependsOnOwnProps) stateProps = mapStateToProps(state, ownProps);

	    if (mapDispatchToProps.dependsOnOwnProps) dispatchProps = mapDispatchToProps(dispatch, ownProps);

	    mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
	    return mergedProps;
	  }

	  function handleNewState() {
	    var nextStateProps = mapStateToProps(state, ownProps);
	    var statePropsChanged = !areStatePropsEqual(nextStateProps, stateProps);
	    stateProps = nextStateProps;

	    if (statePropsChanged) mergedProps = mergeProps(stateProps, dispatchProps, ownProps);

	    return mergedProps;
	  }

	  function handleSubsequentCalls(nextState, nextOwnProps) {
	    var propsChanged = !areOwnPropsEqual(nextOwnProps, ownProps);
	    var stateChanged = !areStatesEqual(nextState, state);
	    state = nextState;
	    ownProps = nextOwnProps;

	    if (propsChanged && stateChanged) return handleNewPropsAndNewState();
	    if (propsChanged) return handleNewProps();
	    if (stateChanged) return handleNewState();
	    return mergedProps;
	  }

	  return function pureFinalPropsSelector(nextState, nextOwnProps) {
	    return hasRunAtLeastOnce ? handleSubsequentCalls(nextState, nextOwnProps) : handleFirstCall(nextState, nextOwnProps);
	  };
	}

	// TODO: Add more comments

	// If pure is true, the selector returned by selectorFactory will memoize its results,
	// allowing connectAdvanced's shouldComponentUpdate to return false if final
	// props have not changed. If false, the selector will always return a new
	// object and shouldComponentUpdate will always return true.

	function finalPropsSelectorFactory(dispatch, _ref2) {
	  var initMapStateToProps = _ref2.initMapStateToProps,
	      initMapDispatchToProps = _ref2.initMapDispatchToProps,
	      initMergeProps = _ref2.initMergeProps,
	      options = _objectWithoutProperties(_ref2, ['initMapStateToProps', 'initMapDispatchToProps', 'initMergeProps']);

	  var mapStateToProps = initMapStateToProps(dispatch, options);
	  var mapDispatchToProps = initMapDispatchToProps(dispatch, options);
	  var mergeProps = initMergeProps(dispatch, options);

	  if (false) {
	    (0, _verifySubselectors2.default)(mapStateToProps, mapDispatchToProps, mergeProps, options.displayName);
	  }

	  var selectorFactory = options.pure ? pureFinalPropsSelectorFactory : impureFinalPropsSelectorFactory;

	  return selectorFactory(mapStateToProps, mapDispatchToProps, mergeProps, dispatch, options);
	}

/***/ },
/* 203 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.default = verifySubselectors;

	var _warning = __webpack_require__(190);

	var _warning2 = _interopRequireDefault(_warning);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function verify(selector, methodName, displayName) {
	  if (!selector) {
	    throw new Error('Unexpected value for ' + methodName + ' in ' + displayName + '.');
	  } else if (methodName === 'mapStateToProps' || methodName === 'mapDispatchToProps') {
	    if (!selector.hasOwnProperty('dependsOnOwnProps')) {
	      (0, _warning2.default)('The selector for ' + methodName + ' of ' + displayName + ' did not specify a value for dependsOnOwnProps.');
	    }
	  }
	}

	function verifySubselectors(mapStateToProps, mapDispatchToProps, mergeProps, displayName) {
	  verify(mapStateToProps, 'mapStateToProps', displayName);
	  verify(mapDispatchToProps, 'mapDispatchToProps', displayName);
	  verify(mergeProps, 'mergeProps', displayName);
	}

/***/ },
/* 204 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.createMemoryHistory = exports.hashHistory = exports.browserHistory = exports.applyRouterMiddleware = exports.formatPattern = exports.useRouterHistory = exports.match = exports.routerShape = exports.locationShape = exports.RouterContext = exports.createRoutes = exports.Route = exports.Redirect = exports.IndexRoute = exports.IndexRedirect = exports.withRouter = exports.IndexLink = exports.Link = exports.Router = undefined;

	var _RouteUtils = __webpack_require__(205);

	Object.defineProperty(exports, 'createRoutes', {
	  enumerable: true,
	  get: function get() {
	    return _RouteUtils.createRoutes;
	  }
	});

	var _PropTypes = __webpack_require__(206);

	Object.defineProperty(exports, 'locationShape', {
	  enumerable: true,
	  get: function get() {
	    return _PropTypes.locationShape;
	  }
	});
	Object.defineProperty(exports, 'routerShape', {
	  enumerable: true,
	  get: function get() {
	    return _PropTypes.routerShape;
	  }
	});

	var _PatternUtils = __webpack_require__(207);

	Object.defineProperty(exports, 'formatPattern', {
	  enumerable: true,
	  get: function get() {
	    return _PatternUtils.formatPattern;
	  }
	});

	var _Router2 = __webpack_require__(208);

	var _Router3 = _interopRequireDefault(_Router2);

	var _Link2 = __webpack_require__(224);

	var _Link3 = _interopRequireDefault(_Link2);

	var _IndexLink2 = __webpack_require__(225);

	var _IndexLink3 = _interopRequireDefault(_IndexLink2);

	var _withRouter2 = __webpack_require__(226);

	var _withRouter3 = _interopRequireDefault(_withRouter2);

	var _IndexRedirect2 = __webpack_require__(227);

	var _IndexRedirect3 = _interopRequireDefault(_IndexRedirect2);

	var _IndexRoute2 = __webpack_require__(229);

	var _IndexRoute3 = _interopRequireDefault(_IndexRoute2);

	var _Redirect2 = __webpack_require__(228);

	var _Redirect3 = _interopRequireDefault(_Redirect2);

	var _Route2 = __webpack_require__(230);

	var _Route3 = _interopRequireDefault(_Route2);

	var _RouterContext2 = __webpack_require__(220);

	var _RouterContext3 = _interopRequireDefault(_RouterContext2);

	var _match2 = __webpack_require__(231);

	var _match3 = _interopRequireDefault(_match2);

	var _useRouterHistory2 = __webpack_require__(244);

	var _useRouterHistory3 = _interopRequireDefault(_useRouterHistory2);

	var _applyRouterMiddleware2 = __webpack_require__(245);

	var _applyRouterMiddleware3 = _interopRequireDefault(_applyRouterMiddleware2);

	var _browserHistory2 = __webpack_require__(246);

	var _browserHistory3 = _interopRequireDefault(_browserHistory2);

	var _hashHistory2 = __webpack_require__(254);

	var _hashHistory3 = _interopRequireDefault(_hashHistory2);

	var _createMemoryHistory2 = __webpack_require__(233);

	var _createMemoryHistory3 = _interopRequireDefault(_createMemoryHistory2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.Router = _Router3.default; /* components */

	exports.Link = _Link3.default;
	exports.IndexLink = _IndexLink3.default;
	exports.withRouter = _withRouter3.default;

	/* components (configuration) */

	exports.IndexRedirect = _IndexRedirect3.default;
	exports.IndexRoute = _IndexRoute3.default;
	exports.Redirect = _Redirect3.default;
	exports.Route = _Route3.default;

	/* utils */

	exports.RouterContext = _RouterContext3.default;
	exports.match = _match3.default;
	exports.useRouterHistory = _useRouterHistory3.default;
	exports.applyRouterMiddleware = _applyRouterMiddleware3.default;

	/* histories */

	exports.browserHistory = _browserHistory3.default;
	exports.hashHistory = _hashHistory3.default;
	exports.createMemoryHistory = _createMemoryHistory3.default;

/***/ },
/* 205 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	exports.isReactChildren = isReactChildren;
	exports.createRouteFromReactElement = createRouteFromReactElement;
	exports.createRoutesFromReactChildren = createRoutesFromReactChildren;
	exports.createRoutes = createRoutes;

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function isValidChild(object) {
	  return object == null || _react2.default.isValidElement(object);
	}

	function isReactChildren(object) {
	  return isValidChild(object) || Array.isArray(object) && object.every(isValidChild);
	}

	function createRoute(defaultProps, props) {
	  return _extends({}, defaultProps, props);
	}

	function createRouteFromReactElement(element) {
	  var type = element.type;
	  var route = createRoute(type.defaultProps, element.props);

	  if (route.children) {
	    var childRoutes = createRoutesFromReactChildren(route.children, route);

	    if (childRoutes.length) route.childRoutes = childRoutes;

	    delete route.children;
	  }

	  return route;
	}

	/**
	 * Creates and returns a routes object from the given ReactChildren. JSX
	 * provides a convenient way to visualize how routes in the hierarchy are
	 * nested.
	 *
	 *   import { Route, createRoutesFromReactChildren } from 'react-router'
	 *
	 *   const routes = createRoutesFromReactChildren(
	 *     <Route component={App}>
	 *       <Route path="home" component={Dashboard}/>
	 *       <Route path="news" component={NewsFeed}/>
	 *     </Route>
	 *   )
	 *
	 * Note: This method is automatically used when you provide <Route> children
	 * to a <Router> component.
	 */
	function createRoutesFromReactChildren(children, parentRoute) {
	  var routes = [];

	  _react2.default.Children.forEach(children, function (element) {
	    if (_react2.default.isValidElement(element)) {
	      // Component classes may have a static create* method.
	      if (element.type.createRouteFromReactElement) {
	        var route = element.type.createRouteFromReactElement(element, parentRoute);

	        if (route) routes.push(route);
	      } else {
	        routes.push(createRouteFromReactElement(element));
	      }
	    }
	  });

	  return routes;
	}

	/**
	 * Creates and returns an array of routes from the given object which
	 * may be a JSX route, a plain object route, or an array of either.
	 */
	function createRoutes(routes) {
	  if (isReactChildren(routes)) {
	    routes = createRoutesFromReactChildren(routes);
	  } else if (routes && !Array.isArray(routes)) {
	    routes = [routes];
	  }

	  return routes;
	}

/***/ },
/* 206 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.locationShape = exports.routerShape = undefined;

	var _react = __webpack_require__(1);

	var func = _react.PropTypes.func,
	    object = _react.PropTypes.object,
	    shape = _react.PropTypes.shape,
	    string = _react.PropTypes.string;
	var routerShape = exports.routerShape = shape({
	  push: func.isRequired,
	  replace: func.isRequired,
	  go: func.isRequired,
	  goBack: func.isRequired,
	  goForward: func.isRequired,
	  setRouteLeaveHook: func.isRequired,
	  isActive: func.isRequired
	});

	var locationShape = exports.locationShape = shape({
	  pathname: string.isRequired,
	  search: string.isRequired,
	  state: object,
	  action: string.isRequired,
	  key: string
	});

/***/ },
/* 207 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.compilePattern = compilePattern;
	exports.matchPattern = matchPattern;
	exports.getParamNames = getParamNames;
	exports.getParams = getParams;
	exports.formatPattern = formatPattern;

	var _invariant = __webpack_require__(193);

	var _invariant2 = _interopRequireDefault(_invariant);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function escapeRegExp(string) {
	  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
	}

	function _compilePattern(pattern) {
	  var regexpSource = '';
	  var paramNames = [];
	  var tokens = [];

	  var match = void 0,
	      lastIndex = 0,
	      matcher = /:([a-zA-Z_$][a-zA-Z0-9_$]*)|\*\*|\*|\(|\)/g;
	  while (match = matcher.exec(pattern)) {
	    if (match.index !== lastIndex) {
	      tokens.push(pattern.slice(lastIndex, match.index));
	      regexpSource += escapeRegExp(pattern.slice(lastIndex, match.index));
	    }

	    if (match[1]) {
	      regexpSource += '([^/]+)';
	      paramNames.push(match[1]);
	    } else if (match[0] === '**') {
	      regexpSource += '(.*)';
	      paramNames.push('splat');
	    } else if (match[0] === '*') {
	      regexpSource += '(.*?)';
	      paramNames.push('splat');
	    } else if (match[0] === '(') {
	      regexpSource += '(?:';
	    } else if (match[0] === ')') {
	      regexpSource += ')?';
	    }

	    tokens.push(match[0]);

	    lastIndex = matcher.lastIndex;
	  }

	  if (lastIndex !== pattern.length) {
	    tokens.push(pattern.slice(lastIndex, pattern.length));
	    regexpSource += escapeRegExp(pattern.slice(lastIndex, pattern.length));
	  }

	  return {
	    pattern: pattern,
	    regexpSource: regexpSource,
	    paramNames: paramNames,
	    tokens: tokens
	  };
	}

	var CompiledPatternsCache = Object.create(null);

	function compilePattern(pattern) {
	  if (!CompiledPatternsCache[pattern]) CompiledPatternsCache[pattern] = _compilePattern(pattern);

	  return CompiledPatternsCache[pattern];
	}

	/**
	 * Attempts to match a pattern on the given pathname. Patterns may use
	 * the following special characters:
	 *
	 * - :paramName     Matches a URL segment up to the next /, ?, or #. The
	 *                  captured string is considered a "param"
	 * - ()             Wraps a segment of the URL that is optional
	 * - *              Consumes (non-greedy) all characters up to the next
	 *                  character in the pattern, or to the end of the URL if
	 *                  there is none
	 * - **             Consumes (greedy) all characters up to the next character
	 *                  in the pattern, or to the end of the URL if there is none
	 *
	 *  The function calls callback(error, matched) when finished.
	 * The return value is an object with the following properties:
	 *
	 * - remainingPathname
	 * - paramNames
	 * - paramValues
	 */
	function matchPattern(pattern, pathname) {
	  // Ensure pattern starts with leading slash for consistency with pathname.
	  if (pattern.charAt(0) !== '/') {
	    pattern = '/' + pattern;
	  }

	  var _compilePattern2 = compilePattern(pattern),
	      regexpSource = _compilePattern2.regexpSource,
	      paramNames = _compilePattern2.paramNames,
	      tokens = _compilePattern2.tokens;

	  if (pattern.charAt(pattern.length - 1) !== '/') {
	    regexpSource += '/?'; // Allow optional path separator at end.
	  }

	  // Special-case patterns like '*' for catch-all routes.
	  if (tokens[tokens.length - 1] === '*') {
	    regexpSource += '$';
	  }

	  var match = pathname.match(new RegExp('^' + regexpSource, 'i'));
	  if (match == null) {
	    return null;
	  }

	  var matchedPath = match[0];
	  var remainingPathname = pathname.substr(matchedPath.length);

	  if (remainingPathname) {
	    // Require that the match ends at a path separator, if we didn't match
	    // the full path, so any remaining pathname is a new path segment.
	    if (matchedPath.charAt(matchedPath.length - 1) !== '/') {
	      return null;
	    }

	    // If there is a remaining pathname, treat the path separator as part of
	    // the remaining pathname for properly continuing the match.
	    remainingPathname = '/' + remainingPathname;
	  }

	  return {
	    remainingPathname: remainingPathname,
	    paramNames: paramNames,
	    paramValues: match.slice(1).map(function (v) {
	      return v && decodeURIComponent(v);
	    })
	  };
	}

	function getParamNames(pattern) {
	  return compilePattern(pattern).paramNames;
	}

	function getParams(pattern, pathname) {
	  var match = matchPattern(pattern, pathname);
	  if (!match) {
	    return null;
	  }

	  var paramNames = match.paramNames,
	      paramValues = match.paramValues;

	  var params = {};

	  paramNames.forEach(function (paramName, index) {
	    params[paramName] = paramValues[index];
	  });

	  return params;
	}

	/**
	 * Returns a version of the given pattern with params interpolated. Throws
	 * if there is a dynamic segment of the pattern for which there is no param.
	 */
	function formatPattern(pattern, params) {
	  params = params || {};

	  var _compilePattern3 = compilePattern(pattern),
	      tokens = _compilePattern3.tokens;

	  var parenCount = 0,
	      pathname = '',
	      splatIndex = 0,
	      parenHistory = [];

	  var token = void 0,
	      paramName = void 0,
	      paramValue = void 0;
	  for (var i = 0, len = tokens.length; i < len; ++i) {
	    token = tokens[i];

	    if (token === '*' || token === '**') {
	      paramValue = Array.isArray(params.splat) ? params.splat[splatIndex++] : params.splat;

	      !(paramValue != null || parenCount > 0) ?  false ? (0, _invariant2.default)(false, 'Missing splat #%s for path "%s"', splatIndex, pattern) : (0, _invariant2.default)(false) : void 0;

	      if (paramValue != null) pathname += encodeURI(paramValue);
	    } else if (token === '(') {
	      parenHistory[parenCount] = '';
	      parenCount += 1;
	    } else if (token === ')') {
	      var parenText = parenHistory.pop();
	      parenCount -= 1;

	      if (parenCount) parenHistory[parenCount - 1] += parenText;else pathname += parenText;
	    } else if (token.charAt(0) === ':') {
	      paramName = token.substring(1);
	      paramValue = params[paramName];

	      !(paramValue != null || parenCount > 0) ?  false ? (0, _invariant2.default)(false, 'Missing "%s" parameter for path "%s"', paramName, pattern) : (0, _invariant2.default)(false) : void 0;

	      if (paramValue == null) {
	        if (parenCount) {
	          parenHistory[parenCount - 1] = '';

	          var curTokenIdx = tokens.indexOf(token);
	          var tokensSubset = tokens.slice(curTokenIdx, tokens.length);
	          var nextParenIdx = -1;

	          for (var _i = 0; _i < tokensSubset.length; _i++) {
	            if (tokensSubset[_i] == ')') {
	              nextParenIdx = _i;
	              break;
	            }
	          }

	          !(nextParenIdx > 0) ?  false ? (0, _invariant2.default)(false, 'Path "%s" is missing end paren at segment "%s"', pattern, tokensSubset.join('')) : (0, _invariant2.default)(false) : void 0;

	          // jump to ending paren
	          i = curTokenIdx + nextParenIdx - 1;
	        }
	      } else if (parenCount) parenHistory[parenCount - 1] += encodeURIComponent(paramValue);else pathname += encodeURIComponent(paramValue);
	    } else {
	      if (parenCount) parenHistory[parenCount - 1] += token;else pathname += token;
	    }
	  }

	  !(parenCount <= 0) ?  false ? (0, _invariant2.default)(false, 'Path "%s" is missing end paren', pattern) : (0, _invariant2.default)(false) : void 0;

	  return pathname.replace(/\/+/g, '/');
	}

/***/ },
/* 208 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _invariant = __webpack_require__(193);

	var _invariant2 = _interopRequireDefault(_invariant);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _createTransitionManager2 = __webpack_require__(209);

	var _createTransitionManager3 = _interopRequireDefault(_createTransitionManager2);

	var _InternalPropTypes = __webpack_require__(219);

	var _RouterContext = __webpack_require__(220);

	var _RouterContext2 = _interopRequireDefault(_RouterContext);

	var _RouteUtils = __webpack_require__(205);

	var _RouterUtils = __webpack_require__(223);

	var _routerWarning = __webpack_require__(210);

	var _routerWarning2 = _interopRequireDefault(_routerWarning);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	var _React$PropTypes = _react2.default.PropTypes,
	    func = _React$PropTypes.func,
	    object = _React$PropTypes.object;

	/**
	 * A <Router> is a high-level API for automatically setting up
	 * a router that renders a <RouterContext> with all the props
	 * it needs each time the URL changes.
	 */

	var Router = _react2.default.createClass({
	  displayName: 'Router',


	  propTypes: {
	    history: object,
	    children: _InternalPropTypes.routes,
	    routes: _InternalPropTypes.routes, // alias for children
	    render: func,
	    createElement: func,
	    onError: func,
	    onUpdate: func,

	    // PRIVATE: For client-side rehydration of server match.
	    matchContext: object
	  },

	  getDefaultProps: function getDefaultProps() {
	    return {
	      render: function render(props) {
	        return _react2.default.createElement(_RouterContext2.default, props);
	      }
	    };
	  },
	  getInitialState: function getInitialState() {
	    return {
	      location: null,
	      routes: null,
	      params: null,
	      components: null
	    };
	  },
	  handleError: function handleError(error) {
	    if (this.props.onError) {
	      this.props.onError.call(this, error);
	    } else {
	      // Throw errors by default so we don't silently swallow them!
	      throw error; // This error probably occurred in getChildRoutes or getComponents.
	    }
	  },
	  createRouterObject: function createRouterObject(state) {
	    var matchContext = this.props.matchContext;

	    if (matchContext) {
	      return matchContext.router;
	    }

	    var history = this.props.history;

	    return (0, _RouterUtils.createRouterObject)(history, this.transitionManager, state);
	  },
	  createTransitionManager: function createTransitionManager() {
	    var matchContext = this.props.matchContext;

	    if (matchContext) {
	      return matchContext.transitionManager;
	    }

	    var history = this.props.history;
	    var _props = this.props,
	        routes = _props.routes,
	        children = _props.children;


	    !history.getCurrentLocation ?  false ? (0, _invariant2.default)(false, 'You have provided a history object created with history v2.x or ' + 'earlier. This version of React Router is only compatible with v3 ' + 'history objects. Please upgrade to history v3.x.') : (0, _invariant2.default)(false) : void 0;

	    return (0, _createTransitionManager3.default)(history, (0, _RouteUtils.createRoutes)(routes || children));
	  },
	  componentWillMount: function componentWillMount() {
	    var _this = this;

	    this.transitionManager = this.createTransitionManager();
	    this.router = this.createRouterObject(this.state);

	    this._unlisten = this.transitionManager.listen(function (error, state) {
	      if (error) {
	        _this.handleError(error);
	      } else {
	        // Keep the identity of this.router because of a caveat in ContextUtils:
	        // they only work if the object identity is preserved.
	        (0, _RouterUtils.assignRouterState)(_this.router, state);
	        _this.setState(state, _this.props.onUpdate);
	      }
	    });
	  },


	  /* istanbul ignore next: sanity check */
	  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
	     false ? (0, _routerWarning2.default)(nextProps.history === this.props.history, 'You cannot change <Router history>; it will be ignored') : void 0;

	     false ? (0, _routerWarning2.default)((nextProps.routes || nextProps.children) === (this.props.routes || this.props.children), 'You cannot change <Router routes>; it will be ignored') : void 0;
	  },
	  componentWillUnmount: function componentWillUnmount() {
	    if (this._unlisten) this._unlisten();
	  },
	  render: function render() {
	    var _state = this.state,
	        location = _state.location,
	        routes = _state.routes,
	        params = _state.params,
	        components = _state.components;

	    var _props2 = this.props,
	        createElement = _props2.createElement,
	        render = _props2.render,
	        props = _objectWithoutProperties(_props2, ['createElement', 'render']);

	    if (location == null) return null; // Async match

	    // Only forward non-Router-specific props to routing context, as those are
	    // the only ones that might be custom routing context props.
	    Object.keys(Router.propTypes).forEach(function (propType) {
	      return delete props[propType];
	    });

	    return render(_extends({}, props, {
	      router: this.router,
	      location: location,
	      routes: routes,
	      params: params,
	      components: components,
	      createElement: createElement
	    }));
	  }
	});

	exports.default = Router;
	module.exports = exports['default'];

/***/ },
/* 209 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	exports.default = createTransitionManager;

	var _routerWarning = __webpack_require__(210);

	var _routerWarning2 = _interopRequireDefault(_routerWarning);

	var _computeChangedRoutes2 = __webpack_require__(212);

	var _computeChangedRoutes3 = _interopRequireDefault(_computeChangedRoutes2);

	var _TransitionUtils = __webpack_require__(213);

	var _isActive2 = __webpack_require__(215);

	var _isActive3 = _interopRequireDefault(_isActive2);

	var _getComponents = __webpack_require__(216);

	var _getComponents2 = _interopRequireDefault(_getComponents);

	var _matchRoutes = __webpack_require__(218);

	var _matchRoutes2 = _interopRequireDefault(_matchRoutes);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function hasAnyProperties(object) {
	  for (var p in object) {
	    if (Object.prototype.hasOwnProperty.call(object, p)) return true;
	  }return false;
	}

	function createTransitionManager(history, routes) {
	  var state = {};

	  // Signature should be (location, indexOnly), but needs to support (path,
	  // query, indexOnly)
	  function isActive(location, indexOnly) {
	    location = history.createLocation(location);

	    return (0, _isActive3.default)(location, indexOnly, state.location, state.routes, state.params);
	  }

	  var partialNextState = void 0;

	  function match(location, callback) {
	    if (partialNextState && partialNextState.location === location) {
	      // Continue from where we left off.
	      finishMatch(partialNextState, callback);
	    } else {
	      (0, _matchRoutes2.default)(routes, location, function (error, nextState) {
	        if (error) {
	          callback(error);
	        } else if (nextState) {
	          finishMatch(_extends({}, nextState, { location: location }), callback);
	        } else {
	          callback();
	        }
	      });
	    }
	  }

	  function finishMatch(nextState, callback) {
	    var _computeChangedRoutes = (0, _computeChangedRoutes3.default)(state, nextState),
	        leaveRoutes = _computeChangedRoutes.leaveRoutes,
	        changeRoutes = _computeChangedRoutes.changeRoutes,
	        enterRoutes = _computeChangedRoutes.enterRoutes;

	    (0, _TransitionUtils.runLeaveHooks)(leaveRoutes, state);

	    // Tear down confirmation hooks for left routes
	    leaveRoutes.filter(function (route) {
	      return enterRoutes.indexOf(route) === -1;
	    }).forEach(removeListenBeforeHooksForRoute);

	    // change and enter hooks are run in series
	    (0, _TransitionUtils.runChangeHooks)(changeRoutes, state, nextState, function (error, redirectInfo) {
	      if (error || redirectInfo) return handleErrorOrRedirect(error, redirectInfo);

	      (0, _TransitionUtils.runEnterHooks)(enterRoutes, nextState, finishEnterHooks);
	    });

	    function finishEnterHooks(error, redirectInfo) {
	      if (error || redirectInfo) return handleErrorOrRedirect(error, redirectInfo);

	      // TODO: Fetch components after state is updated.
	      (0, _getComponents2.default)(nextState, function (error, components) {
	        if (error) {
	          callback(error);
	        } else {
	          // TODO: Make match a pure function and have some other API
	          // for "match and update state".
	          callback(null, null, state = _extends({}, nextState, { components: components }));
	        }
	      });
	    }

	    function handleErrorOrRedirect(error, redirectInfo) {
	      if (error) callback(error);else callback(null, redirectInfo);
	    }
	  }

	  var RouteGuid = 1;

	  function getRouteID(route) {
	    var create = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

	    return route.__id__ || create && (route.__id__ = RouteGuid++);
	  }

	  var RouteHooks = Object.create(null);

	  function getRouteHooksForRoutes(routes) {
	    return routes.map(function (route) {
	      return RouteHooks[getRouteID(route)];
	    }).filter(function (hook) {
	      return hook;
	    });
	  }

	  function transitionHook(location, callback) {
	    (0, _matchRoutes2.default)(routes, location, function (error, nextState) {
	      if (nextState == null) {
	        // TODO: We didn't actually match anything, but hang
	        // onto error/nextState so we don't have to matchRoutes
	        // again in the listen callback.
	        callback();
	        return;
	      }

	      // Cache some state here so we don't have to
	      // matchRoutes() again in the listen callback.
	      partialNextState = _extends({}, nextState, { location: location });

	      var hooks = getRouteHooksForRoutes((0, _computeChangedRoutes3.default)(state, partialNextState).leaveRoutes);

	      var result = void 0;
	      for (var i = 0, len = hooks.length; result == null && i < len; ++i) {
	        // Passing the location arg here indicates to
	        // the user that this is a transition hook.
	        result = hooks[i](location);
	      }

	      callback(result);
	    });
	  }

	  /* istanbul ignore next: untestable with Karma */
	  function beforeUnloadHook() {
	    // Synchronously check to see if any route hooks want
	    // to prevent the current window/tab from closing.
	    if (state.routes) {
	      var hooks = getRouteHooksForRoutes(state.routes);

	      var message = void 0;
	      for (var i = 0, len = hooks.length; typeof message !== 'string' && i < len; ++i) {
	        // Passing no args indicates to the user that this is a
	        // beforeunload hook. We don't know the next location.
	        message = hooks[i]();
	      }

	      return message;
	    }
	  }

	  var unlistenBefore = void 0,
	      unlistenBeforeUnload = void 0;

	  function removeListenBeforeHooksForRoute(route) {
	    var routeID = getRouteID(route);
	    if (!routeID) {
	      return;
	    }

	    delete RouteHooks[routeID];

	    if (!hasAnyProperties(RouteHooks)) {
	      // teardown transition & beforeunload hooks
	      if (unlistenBefore) {
	        unlistenBefore();
	        unlistenBefore = null;
	      }

	      if (unlistenBeforeUnload) {
	        unlistenBeforeUnload();
	        unlistenBeforeUnload = null;
	      }
	    }
	  }

	  /**
	   * Registers the given hook function to run before leaving the given route.
	   *
	   * During a normal transition, the hook function receives the next location
	   * as its only argument and can return either a prompt message (string) to show the user,
	   * to make sure they want to leave the page; or `false`, to prevent the transition.
	   * Any other return value will have no effect.
	   *
	   * During the beforeunload event (in browsers) the hook receives no arguments.
	   * In this case it must return a prompt message to prevent the transition.
	   *
	   * Returns a function that may be used to unbind the listener.
	   */
	  function listenBeforeLeavingRoute(route, hook) {
	    var thereWereNoRouteHooks = !hasAnyProperties(RouteHooks);
	    var routeID = getRouteID(route, true);

	    RouteHooks[routeID] = hook;

	    if (thereWereNoRouteHooks) {
	      // setup transition & beforeunload hooks
	      unlistenBefore = history.listenBefore(transitionHook);

	      if (history.listenBeforeUnload) unlistenBeforeUnload = history.listenBeforeUnload(beforeUnloadHook);
	    }

	    return function () {
	      removeListenBeforeHooksForRoute(route);
	    };
	  }

	  /**
	   * This is the API for stateful environments. As the location
	   * changes, we update state and call the listener. We can also
	   * gracefully handle errors and redirects.
	   */
	  function listen(listener) {
	    function historyListener(location) {
	      if (state.location === location) {
	        listener(null, state);
	      } else {
	        match(location, function (error, redirectLocation, nextState) {
	          if (error) {
	            listener(error);
	          } else if (redirectLocation) {
	            history.replace(redirectLocation);
	          } else if (nextState) {
	            listener(null, nextState);
	          } else {
	             false ? (0, _routerWarning2.default)(false, 'Location "%s" did not match any routes', location.pathname + location.search + location.hash) : void 0;
	          }
	        });
	      }
	    }

	    // TODO: Only use a single history listener. Otherwise we'll end up with
	    // multiple concurrent calls to match.

	    // Set up the history listener first in case the initial match redirects.
	    var unsubscribe = history.listen(historyListener);

	    if (state.location) {
	      // Picking up on a matchContext.
	      listener(null, state);
	    } else {
	      historyListener(history.getCurrentLocation());
	    }

	    return unsubscribe;
	  }

	  return {
	    isActive: isActive,
	    match: match,
	    listenBeforeLeavingRoute: listenBeforeLeavingRoute,
	    listen: listen
	  };
	}
	module.exports = exports['default'];

/***/ },
/* 210 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.default = routerWarning;
	exports._resetWarned = _resetWarned;

	var _warning = __webpack_require__(211);

	var _warning2 = _interopRequireDefault(_warning);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var warned = {};

	function routerWarning(falseToWarn, message) {
	  // Only issue deprecation warnings once.
	  if (message.indexOf('deprecated') !== -1) {
	    if (warned[message]) {
	      return;
	    }

	    warned[message] = true;
	  }

	  message = '[react-router] ' + message;

	  for (var _len = arguments.length, args = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
	    args[_key - 2] = arguments[_key];
	  }

	  _warning2.default.apply(undefined, [falseToWarn, message].concat(args));
	}

	function _resetWarned() {
	  warned = {};
	}

/***/ },
/* 211 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2014-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 */

	'use strict';

	/**
	 * Similar to invariant but only logs a warning if the condition is not met.
	 * This can be used to log issues in development environments in critical
	 * paths. Removing the logging code for production environments will keep the
	 * same logic and follow the same code paths.
	 */

	var warning = function() {};

	if (false) {
	  warning = function(condition, format, args) {
	    var len = arguments.length;
	    args = new Array(len > 2 ? len - 2 : 0);
	    for (var key = 2; key < len; key++) {
	      args[key - 2] = arguments[key];
	    }
	    if (format === undefined) {
	      throw new Error(
	        '`warning(condition, format, ...args)` requires a warning ' +
	        'message argument'
	      );
	    }

	    if (format.length < 10 || (/^[s\W]*$/).test(format)) {
	      throw new Error(
	        'The warning format should be able to uniquely identify this ' +
	        'warning. Please, use a more descriptive format than: ' + format
	      );
	    }

	    if (!condition) {
	      var argIndex = 0;
	      var message = 'Warning: ' +
	        format.replace(/%s/g, function() {
	          return args[argIndex++];
	        });
	      if (typeof console !== 'undefined') {
	        console.error(message);
	      }
	      try {
	        // This error was thrown as a convenience so that you can use this stack
	        // to find the callsite that caused this warning to fire.
	        throw new Error(message);
	      } catch(x) {}
	    }
	  };
	}

	module.exports = warning;


/***/ },
/* 212 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _PatternUtils = __webpack_require__(207);

	function routeParamsChanged(route, prevState, nextState) {
	  if (!route.path) return false;

	  var paramNames = (0, _PatternUtils.getParamNames)(route.path);

	  return paramNames.some(function (paramName) {
	    return prevState.params[paramName] !== nextState.params[paramName];
	  });
	}

	/**
	 * Returns an object of { leaveRoutes, changeRoutes, enterRoutes } determined by
	 * the change from prevState to nextState. We leave routes if either
	 * 1) they are not in the next state or 2) they are in the next state
	 * but their params have changed (i.e. /users/123 => /users/456).
	 *
	 * leaveRoutes are ordered starting at the leaf route of the tree
	 * we're leaving up to the common parent route. enterRoutes are ordered
	 * from the top of the tree we're entering down to the leaf route.
	 *
	 * changeRoutes are any routes that didn't leave or enter during
	 * the transition.
	 */
	function computeChangedRoutes(prevState, nextState) {
	  var prevRoutes = prevState && prevState.routes;
	  var nextRoutes = nextState.routes;

	  var leaveRoutes = void 0,
	      changeRoutes = void 0,
	      enterRoutes = void 0;
	  if (prevRoutes) {
	    (function () {
	      var parentIsLeaving = false;
	      leaveRoutes = prevRoutes.filter(function (route) {
	        if (parentIsLeaving) {
	          return true;
	        } else {
	          var isLeaving = nextRoutes.indexOf(route) === -1 || routeParamsChanged(route, prevState, nextState);
	          if (isLeaving) parentIsLeaving = true;
	          return isLeaving;
	        }
	      });

	      // onLeave hooks start at the leaf route.
	      leaveRoutes.reverse();

	      enterRoutes = [];
	      changeRoutes = [];

	      nextRoutes.forEach(function (route) {
	        var isNew = prevRoutes.indexOf(route) === -1;
	        var paramsChanged = leaveRoutes.indexOf(route) !== -1;

	        if (isNew || paramsChanged) enterRoutes.push(route);else changeRoutes.push(route);
	      });
	    })();
	  } else {
	    leaveRoutes = [];
	    changeRoutes = [];
	    enterRoutes = nextRoutes;
	  }

	  return {
	    leaveRoutes: leaveRoutes,
	    changeRoutes: changeRoutes,
	    enterRoutes: enterRoutes
	  };
	}

	exports.default = computeChangedRoutes;
	module.exports = exports['default'];

/***/ },
/* 213 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.runEnterHooks = runEnterHooks;
	exports.runChangeHooks = runChangeHooks;
	exports.runLeaveHooks = runLeaveHooks;

	var _AsyncUtils = __webpack_require__(214);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var PendingHooks = function PendingHooks() {
	  var _this = this;

	  _classCallCheck(this, PendingHooks);

	  this.hooks = [];

	  this.add = function (hook) {
	    return _this.hooks.push(hook);
	  };

	  this.remove = function (hook) {
	    return _this.hooks = _this.hooks.filter(function (h) {
	      return h !== hook;
	    });
	  };

	  this.has = function (hook) {
	    return _this.hooks.indexOf(hook) !== -1;
	  };

	  this.clear = function () {
	    return _this.hooks = [];
	  };
	};

	var enterHooks = new PendingHooks();
	var changeHooks = new PendingHooks();

	function createTransitionHook(hook, route, asyncArity, pendingHooks) {
	  var isSync = hook.length < asyncArity;

	  var transitionHook = function transitionHook() {
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    hook.apply(route, args);

	    if (isSync) {
	      var callback = args[args.length - 1];
	      // Assume hook executes synchronously and
	      // automatically call the callback.
	      callback();
	    }
	  };

	  pendingHooks.add(transitionHook);

	  return transitionHook;
	}

	function getEnterHooks(routes) {
	  return routes.reduce(function (hooks, route) {
	    if (route.onEnter) hooks.push(createTransitionHook(route.onEnter, route, 3, enterHooks));
	    return hooks;
	  }, []);
	}

	function getChangeHooks(routes) {
	  return routes.reduce(function (hooks, route) {
	    if (route.onChange) hooks.push(createTransitionHook(route.onChange, route, 4, changeHooks));
	    return hooks;
	  }, []);
	}

	function runTransitionHooks(length, iter, callback) {
	  if (!length) {
	    callback();
	    return;
	  }

	  var redirectInfo = void 0;
	  function replace(location) {
	    redirectInfo = location;
	  }

	  (0, _AsyncUtils.loopAsync)(length, function (index, next, done) {
	    iter(index, replace, function (error) {
	      if (error || redirectInfo) {
	        done(error, redirectInfo); // No need to continue.
	      } else {
	        next();
	      }
	    });
	  }, callback);
	}

	/**
	 * Runs all onEnter hooks in the given array of routes in order
	 * with onEnter(nextState, replace, callback) and calls
	 * callback(error, redirectInfo) when finished. The first hook
	 * to use replace short-circuits the loop.
	 *
	 * If a hook needs to run asynchronously, it may use the callback
	 * function. However, doing so will cause the transition to pause,
	 * which could lead to a non-responsive UI if the hook is slow.
	 */
	function runEnterHooks(routes, nextState, callback) {
	  enterHooks.clear();
	  var hooks = getEnterHooks(routes);
	  return runTransitionHooks(hooks.length, function (index, replace, next) {
	    var wrappedNext = function wrappedNext() {
	      if (enterHooks.has(hooks[index])) {
	        next();
	        enterHooks.remove(hooks[index]);
	      }
	    };
	    hooks[index](nextState, replace, wrappedNext);
	  }, callback);
	}

	/**
	 * Runs all onChange hooks in the given array of routes in order
	 * with onChange(prevState, nextState, replace, callback) and calls
	 * callback(error, redirectInfo) when finished. The first hook
	 * to use replace short-circuits the loop.
	 *
	 * If a hook needs to run asynchronously, it may use the callback
	 * function. However, doing so will cause the transition to pause,
	 * which could lead to a non-responsive UI if the hook is slow.
	 */
	function runChangeHooks(routes, state, nextState, callback) {
	  changeHooks.clear();
	  var hooks = getChangeHooks(routes);
	  return runTransitionHooks(hooks.length, function (index, replace, next) {
	    var wrappedNext = function wrappedNext() {
	      if (changeHooks.has(hooks[index])) {
	        next();
	        changeHooks.remove(hooks[index]);
	      }
	    };
	    hooks[index](state, nextState, replace, wrappedNext);
	  }, callback);
	}

	/**
	 * Runs all onLeave hooks in the given array of routes in order.
	 */
	function runLeaveHooks(routes, prevState) {
	  for (var i = 0, len = routes.length; i < len; ++i) {
	    if (routes[i].onLeave) routes[i].onLeave.call(routes[i], prevState);
	  }
	}

/***/ },
/* 214 */
/***/ function(module, exports) {

	"use strict";

	exports.__esModule = true;
	exports.loopAsync = loopAsync;
	exports.mapAsync = mapAsync;
	function loopAsync(turns, work, callback) {
	  var currentTurn = 0,
	      isDone = false;
	  var sync = false,
	      hasNext = false,
	      doneArgs = void 0;

	  function done() {
	    isDone = true;
	    if (sync) {
	      // Iterate instead of recursing if possible.
	      doneArgs = [].concat(Array.prototype.slice.call(arguments));
	      return;
	    }

	    callback.apply(this, arguments);
	  }

	  function next() {
	    if (isDone) {
	      return;
	    }

	    hasNext = true;
	    if (sync) {
	      // Iterate instead of recursing if possible.
	      return;
	    }

	    sync = true;

	    while (!isDone && currentTurn < turns && hasNext) {
	      hasNext = false;
	      work.call(this, currentTurn++, next, done);
	    }

	    sync = false;

	    if (isDone) {
	      // This means the loop finished synchronously.
	      callback.apply(this, doneArgs);
	      return;
	    }

	    if (currentTurn >= turns && hasNext) {
	      isDone = true;
	      callback();
	    }
	  }

	  next();
	}

	function mapAsync(array, work, callback) {
	  var length = array.length;
	  var values = [];

	  if (length === 0) return callback(null, values);

	  var isDone = false,
	      doneCount = 0;

	  function done(index, error, value) {
	    if (isDone) return;

	    if (error) {
	      isDone = true;
	      callback(error);
	    } else {
	      values[index] = value;

	      isDone = ++doneCount === length;

	      if (isDone) callback(null, values);
	    }
	  }

	  array.forEach(function (item, index) {
	    work(item, index, function (error, value) {
	      done(index, error, value);
	    });
	  });
	}

/***/ },
/* 215 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	exports.default = isActive;

	var _PatternUtils = __webpack_require__(207);

	function deepEqual(a, b) {
	  if (a == b) return true;

	  if (a == null || b == null) return false;

	  if (Array.isArray(a)) {
	    return Array.isArray(b) && a.length === b.length && a.every(function (item, index) {
	      return deepEqual(item, b[index]);
	    });
	  }

	  if ((typeof a === 'undefined' ? 'undefined' : _typeof(a)) === 'object') {
	    for (var p in a) {
	      if (!Object.prototype.hasOwnProperty.call(a, p)) {
	        continue;
	      }

	      if (a[p] === undefined) {
	        if (b[p] !== undefined) {
	          return false;
	        }
	      } else if (!Object.prototype.hasOwnProperty.call(b, p)) {
	        return false;
	      } else if (!deepEqual(a[p], b[p])) {
	        return false;
	      }
	    }

	    return true;
	  }

	  return String(a) === String(b);
	}

	/**
	 * Returns true if the current pathname matches the supplied one, net of
	 * leading and trailing slash normalization. This is sufficient for an
	 * indexOnly route match.
	 */
	function pathIsActive(pathname, currentPathname) {
	  // Normalize leading slash for consistency. Leading slash on pathname has
	  // already been normalized in isActive. See caveat there.
	  if (currentPathname.charAt(0) !== '/') {
	    currentPathname = '/' + currentPathname;
	  }

	  // Normalize the end of both path names too. Maybe `/foo/` shouldn't show
	  // `/foo` as active, but in this case, we would already have failed the
	  // match.
	  if (pathname.charAt(pathname.length - 1) !== '/') {
	    pathname += '/';
	  }
	  if (currentPathname.charAt(currentPathname.length - 1) !== '/') {
	    currentPathname += '/';
	  }

	  return currentPathname === pathname;
	}

	/**
	 * Returns true if the given pathname matches the active routes and params.
	 */
	function routeIsActive(pathname, routes, params) {
	  var remainingPathname = pathname,
	      paramNames = [],
	      paramValues = [];

	  // for...of would work here but it's probably slower post-transpilation.
	  for (var i = 0, len = routes.length; i < len; ++i) {
	    var route = routes[i];
	    var pattern = route.path || '';

	    if (pattern.charAt(0) === '/') {
	      remainingPathname = pathname;
	      paramNames = [];
	      paramValues = [];
	    }

	    if (remainingPathname !== null && pattern) {
	      var matched = (0, _PatternUtils.matchPattern)(pattern, remainingPathname);
	      if (matched) {
	        remainingPathname = matched.remainingPathname;
	        paramNames = [].concat(paramNames, matched.paramNames);
	        paramValues = [].concat(paramValues, matched.paramValues);
	      } else {
	        remainingPathname = null;
	      }

	      if (remainingPathname === '') {
	        // We have an exact match on the route. Just check that all the params
	        // match.
	        // FIXME: This doesn't work on repeated params.
	        return paramNames.every(function (paramName, index) {
	          return String(paramValues[index]) === String(params[paramName]);
	        });
	      }
	    }
	  }

	  return false;
	}

	/**
	 * Returns true if all key/value pairs in the given query are
	 * currently active.
	 */
	function queryIsActive(query, activeQuery) {
	  if (activeQuery == null) return query == null;

	  if (query == null) return true;

	  return deepEqual(query, activeQuery);
	}

	/**
	 * Returns true if a <Link> to the given pathname/query combination is
	 * currently active.
	 */
	function isActive(_ref, indexOnly, currentLocation, routes, params) {
	  var pathname = _ref.pathname,
	      query = _ref.query;

	  if (currentLocation == null) return false;

	  // TODO: This is a bit ugly. It keeps around support for treating pathnames
	  // without preceding slashes as absolute paths, but possibly also works
	  // around the same quirks with basenames as in matchRoutes.
	  if (pathname.charAt(0) !== '/') {
	    pathname = '/' + pathname;
	  }

	  if (!pathIsActive(pathname, currentLocation.pathname)) {
	    // The path check is necessary and sufficient for indexOnly, but otherwise
	    // we still need to check the routes.
	    if (indexOnly || !routeIsActive(pathname, routes, params)) {
	      return false;
	    }
	  }

	  return queryIsActive(query, currentLocation.query);
	}
	module.exports = exports['default'];

/***/ },
/* 216 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _AsyncUtils = __webpack_require__(214);

	var _PromiseUtils = __webpack_require__(217);

	function getComponentsForRoute(nextState, route, callback) {
	  if (route.component || route.components) {
	    callback(null, route.component || route.components);
	    return;
	  }

	  var getComponent = route.getComponent || route.getComponents;
	  if (getComponent) {
	    var componentReturn = getComponent.call(route, nextState, callback);
	    if ((0, _PromiseUtils.isPromise)(componentReturn)) componentReturn.then(function (component) {
	      return callback(null, component);
	    }, callback);
	  } else {
	    callback();
	  }
	}

	/**
	 * Asynchronously fetches all components needed for the given router
	 * state and calls callback(error, components) when finished.
	 *
	 * Note: This operation may finish synchronously if no routes have an
	 * asynchronous getComponents method.
	 */
	function getComponents(nextState, callback) {
	  (0, _AsyncUtils.mapAsync)(nextState.routes, function (route, index, callback) {
	    getComponentsForRoute(nextState, route, callback);
	  }, callback);
	}

	exports.default = getComponents;
	module.exports = exports['default'];

/***/ },
/* 217 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports.isPromise = isPromise;
	function isPromise(obj) {
	  return obj && typeof obj.then === 'function';
	}

/***/ },
/* 218 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	exports.default = matchRoutes;

	var _AsyncUtils = __webpack_require__(214);

	var _PromiseUtils = __webpack_require__(217);

	var _PatternUtils = __webpack_require__(207);

	var _routerWarning = __webpack_require__(210);

	var _routerWarning2 = _interopRequireDefault(_routerWarning);

	var _RouteUtils = __webpack_require__(205);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function getChildRoutes(route, location, paramNames, paramValues, callback) {
	  if (route.childRoutes) {
	    return [null, route.childRoutes];
	  }
	  if (!route.getChildRoutes) {
	    return [];
	  }

	  var sync = true,
	      result = void 0;

	  var partialNextState = {
	    location: location,
	    params: createParams(paramNames, paramValues)
	  };

	  var childRoutesReturn = route.getChildRoutes(partialNextState, function (error, childRoutes) {
	    childRoutes = !error && (0, _RouteUtils.createRoutes)(childRoutes);
	    if (sync) {
	      result = [error, childRoutes];
	      return;
	    }

	    callback(error, childRoutes);
	  });

	  if ((0, _PromiseUtils.isPromise)(childRoutesReturn)) childRoutesReturn.then(function (childRoutes) {
	    return callback(null, (0, _RouteUtils.createRoutes)(childRoutes));
	  }, callback);

	  sync = false;
	  return result; // Might be undefined.
	}

	function getIndexRoute(route, location, paramNames, paramValues, callback) {
	  if (route.indexRoute) {
	    callback(null, route.indexRoute);
	  } else if (route.getIndexRoute) {
	    var partialNextState = {
	      location: location,
	      params: createParams(paramNames, paramValues)
	    };

	    var indexRoutesReturn = route.getIndexRoute(partialNextState, function (error, indexRoute) {
	      callback(error, !error && (0, _RouteUtils.createRoutes)(indexRoute)[0]);
	    });

	    if ((0, _PromiseUtils.isPromise)(indexRoutesReturn)) indexRoutesReturn.then(function (indexRoute) {
	      return callback(null, (0, _RouteUtils.createRoutes)(indexRoute)[0]);
	    }, callback);
	  } else if (route.childRoutes) {
	    (function () {
	      var pathless = route.childRoutes.filter(function (childRoute) {
	        return !childRoute.path;
	      });

	      (0, _AsyncUtils.loopAsync)(pathless.length, function (index, next, done) {
	        getIndexRoute(pathless[index], location, paramNames, paramValues, function (error, indexRoute) {
	          if (error || indexRoute) {
	            var routes = [pathless[index]].concat(Array.isArray(indexRoute) ? indexRoute : [indexRoute]);
	            done(error, routes);
	          } else {
	            next();
	          }
	        });
	      }, function (err, routes) {
	        callback(null, routes);
	      });
	    })();
	  } else {
	    callback();
	  }
	}

	function assignParams(params, paramNames, paramValues) {
	  return paramNames.reduce(function (params, paramName, index) {
	    var paramValue = paramValues && paramValues[index];

	    if (Array.isArray(params[paramName])) {
	      params[paramName].push(paramValue);
	    } else if (paramName in params) {
	      params[paramName] = [params[paramName], paramValue];
	    } else {
	      params[paramName] = paramValue;
	    }

	    return params;
	  }, params);
	}

	function createParams(paramNames, paramValues) {
	  return assignParams({}, paramNames, paramValues);
	}

	function matchRouteDeep(route, location, remainingPathname, paramNames, paramValues, callback) {
	  var pattern = route.path || '';

	  if (pattern.charAt(0) === '/') {
	    remainingPathname = location.pathname;
	    paramNames = [];
	    paramValues = [];
	  }

	  // Only try to match the path if the route actually has a pattern, and if
	  // we're not just searching for potential nested absolute paths.
	  if (remainingPathname !== null && pattern) {
	    try {
	      var matched = (0, _PatternUtils.matchPattern)(pattern, remainingPathname);
	      if (matched) {
	        remainingPathname = matched.remainingPathname;
	        paramNames = [].concat(paramNames, matched.paramNames);
	        paramValues = [].concat(paramValues, matched.paramValues);
	      } else {
	        remainingPathname = null;
	      }
	    } catch (error) {
	      callback(error);
	    }

	    // By assumption, pattern is non-empty here, which is the prerequisite for
	    // actually terminating a match.
	    if (remainingPathname === '') {
	      var _ret2 = function () {
	        var match = {
	          routes: [route],
	          params: createParams(paramNames, paramValues)
	        };

	        getIndexRoute(route, location, paramNames, paramValues, function (error, indexRoute) {
	          if (error) {
	            callback(error);
	          } else {
	            if (Array.isArray(indexRoute)) {
	              var _match$routes;

	               false ? (0, _routerWarning2.default)(indexRoute.every(function (route) {
	                return !route.path;
	              }), 'Index routes should not have paths') : void 0;
	              (_match$routes = match.routes).push.apply(_match$routes, indexRoute);
	            } else if (indexRoute) {
	               false ? (0, _routerWarning2.default)(!indexRoute.path, 'Index routes should not have paths') : void 0;
	              match.routes.push(indexRoute);
	            }

	            callback(null, match);
	          }
	        });

	        return {
	          v: void 0
	        };
	      }();

	      if ((typeof _ret2 === 'undefined' ? 'undefined' : _typeof(_ret2)) === "object") return _ret2.v;
	    }
	  }

	  if (remainingPathname != null || route.childRoutes) {
	    // Either a) this route matched at least some of the path or b)
	    // we don't have to load this route's children asynchronously. In
	    // either case continue checking for matches in the subtree.
	    var onChildRoutes = function onChildRoutes(error, childRoutes) {
	      if (error) {
	        callback(error);
	      } else if (childRoutes) {
	        // Check the child routes to see if any of them match.
	        matchRoutes(childRoutes, location, function (error, match) {
	          if (error) {
	            callback(error);
	          } else if (match) {
	            // A child route matched! Augment the match and pass it up the stack.
	            match.routes.unshift(route);
	            callback(null, match);
	          } else {
	            callback();
	          }
	        }, remainingPathname, paramNames, paramValues);
	      } else {
	        callback();
	      }
	    };

	    var result = getChildRoutes(route, location, paramNames, paramValues, onChildRoutes);
	    if (result) {
	      onChildRoutes.apply(undefined, result);
	    }
	  } else {
	    callback();
	  }
	}

	/**
	 * Asynchronously matches the given location to a set of routes and calls
	 * callback(error, state) when finished. The state object will have the
	 * following properties:
	 *
	 * - routes       An array of routes that matched, in hierarchical order
	 * - params       An object of URL parameters
	 *
	 * Note: This operation may finish synchronously if no routes have an
	 * asynchronous getChildRoutes method.
	 */
	function matchRoutes(routes, location, callback, remainingPathname) {
	  var paramNames = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : [];
	  var paramValues = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : [];

	  if (remainingPathname === undefined) {
	    // TODO: This is a little bit ugly, but it works around a quirk in history
	    // that strips the leading slash from pathnames when using basenames with
	    // trailing slashes.
	    if (location.pathname.charAt(0) !== '/') {
	      location = _extends({}, location, {
	        pathname: '/' + location.pathname
	      });
	    }
	    remainingPathname = location.pathname;
	  }

	  (0, _AsyncUtils.loopAsync)(routes.length, function (index, next, done) {
	    matchRouteDeep(routes[index], location, remainingPathname, paramNames, paramValues, function (error, match) {
	      if (error || match) {
	        done(error, match);
	      } else {
	        next();
	      }
	    });
	  }, callback);
	}
	module.exports = exports['default'];

/***/ },
/* 219 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.routes = exports.route = exports.components = exports.component = exports.history = undefined;
	exports.falsy = falsy;

	var _react = __webpack_require__(1);

	var func = _react.PropTypes.func,
	    object = _react.PropTypes.object,
	    arrayOf = _react.PropTypes.arrayOf,
	    oneOfType = _react.PropTypes.oneOfType,
	    element = _react.PropTypes.element,
	    shape = _react.PropTypes.shape,
	    string = _react.PropTypes.string;
	function falsy(props, propName, componentName) {
	  if (props[propName]) return new Error('<' + componentName + '> should not have a "' + propName + '" prop');
	}

	var history = exports.history = shape({
	  listen: func.isRequired,
	  push: func.isRequired,
	  replace: func.isRequired,
	  go: func.isRequired,
	  goBack: func.isRequired,
	  goForward: func.isRequired
	});

	var component = exports.component = oneOfType([func, string]);
	var components = exports.components = oneOfType([component, object]);
	var route = exports.route = oneOfType([object, element]);
	var routes = exports.routes = oneOfType([route, arrayOf(route)]);

/***/ },
/* 220 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var _invariant = __webpack_require__(193);

	var _invariant2 = _interopRequireDefault(_invariant);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _getRouteParams = __webpack_require__(221);

	var _getRouteParams2 = _interopRequireDefault(_getRouteParams);

	var _ContextUtils = __webpack_require__(222);

	var _RouteUtils = __webpack_require__(205);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var _React$PropTypes = _react2.default.PropTypes,
	    array = _React$PropTypes.array,
	    func = _React$PropTypes.func,
	    object = _React$PropTypes.object;

	/**
	 * A <RouterContext> renders the component tree for a given router state
	 * and sets the history object and the current location in context.
	 */

	var RouterContext = _react2.default.createClass({
	  displayName: 'RouterContext',


	  mixins: [(0, _ContextUtils.ContextProvider)('router')],

	  propTypes: {
	    router: object.isRequired,
	    location: object.isRequired,
	    routes: array.isRequired,
	    params: object.isRequired,
	    components: array.isRequired,
	    createElement: func.isRequired
	  },

	  getDefaultProps: function getDefaultProps() {
	    return {
	      createElement: _react2.default.createElement
	    };
	  },


	  childContextTypes: {
	    router: object.isRequired
	  },

	  getChildContext: function getChildContext() {
	    return {
	      router: this.props.router
	    };
	  },
	  createElement: function createElement(component, props) {
	    return component == null ? null : this.props.createElement(component, props);
	  },
	  render: function render() {
	    var _this = this;

	    var _props = this.props,
	        location = _props.location,
	        routes = _props.routes,
	        params = _props.params,
	        components = _props.components,
	        router = _props.router;

	    var element = null;

	    if (components) {
	      element = components.reduceRight(function (element, components, index) {
	        if (components == null) return element; // Don't create new children; use the grandchildren.

	        var route = routes[index];
	        var routeParams = (0, _getRouteParams2.default)(route, params);
	        var props = {
	          location: location,
	          params: params,
	          route: route,
	          router: router,
	          routeParams: routeParams,
	          routes: routes
	        };

	        if ((0, _RouteUtils.isReactChildren)(element)) {
	          props.children = element;
	        } else if (element) {
	          for (var prop in element) {
	            if (Object.prototype.hasOwnProperty.call(element, prop)) props[prop] = element[prop];
	          }
	        }

	        if ((typeof components === 'undefined' ? 'undefined' : _typeof(components)) === 'object') {
	          var elements = {};

	          for (var key in components) {
	            if (Object.prototype.hasOwnProperty.call(components, key)) {
	              // Pass through the key as a prop to createElement to allow
	              // custom createElement functions to know which named component
	              // they're rendering, for e.g. matching up to fetched data.
	              elements[key] = _this.createElement(components[key], _extends({
	                key: key }, props));
	            }
	          }

	          return elements;
	        }

	        return _this.createElement(components, props);
	      }, element);
	    }

	    !(element === null || element === false || _react2.default.isValidElement(element)) ?  false ? (0, _invariant2.default)(false, 'The root route must render a single element') : (0, _invariant2.default)(false) : void 0;

	    return element;
	  }
	});

	exports.default = RouterContext;
	module.exports = exports['default'];

/***/ },
/* 221 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _PatternUtils = __webpack_require__(207);

	/**
	 * Extracts an object of params the given route cares about from
	 * the given params object.
	 */
	function getRouteParams(route, params) {
	  var routeParams = {};

	  if (!route.path) return routeParams;

	  (0, _PatternUtils.getParamNames)(route.path).forEach(function (p) {
	    if (Object.prototype.hasOwnProperty.call(params, p)) {
	      routeParams[p] = params[p];
	    }
	  });

	  return routeParams;
	}

	exports.default = getRouteParams;
	module.exports = exports['default'];

/***/ },
/* 222 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.ContextProvider = ContextProvider;
	exports.ContextSubscriber = ContextSubscriber;

	var _react = __webpack_require__(1);

	// Works around issues with context updates failing to propagate.
	// Caveat: the context value is expected to never change its identity.
	// https://github.com/facebook/react/issues/2517
	// https://github.com/reactjs/react-router/issues/470

	var contextProviderShape = _react.PropTypes.shape({
	  subscribe: _react.PropTypes.func.isRequired,
	  eventIndex: _react.PropTypes.number.isRequired
	});

	function makeContextName(name) {
	  return '@@contextSubscriber/' + name;
	}

	function ContextProvider(name) {
	  var _childContextTypes, _ref2;

	  var contextName = makeContextName(name);
	  var listenersKey = contextName + '/listeners';
	  var eventIndexKey = contextName + '/eventIndex';
	  var subscribeKey = contextName + '/subscribe';

	  return _ref2 = {
	    childContextTypes: (_childContextTypes = {}, _childContextTypes[contextName] = contextProviderShape.isRequired, _childContextTypes),

	    getChildContext: function getChildContext() {
	      var _ref;

	      return _ref = {}, _ref[contextName] = {
	        eventIndex: this[eventIndexKey],
	        subscribe: this[subscribeKey]
	      }, _ref;
	    },
	    componentWillMount: function componentWillMount() {
	      this[listenersKey] = [];
	      this[eventIndexKey] = 0;
	    },
	    componentWillReceiveProps: function componentWillReceiveProps() {
	      this[eventIndexKey]++;
	    },
	    componentDidUpdate: function componentDidUpdate() {
	      var _this = this;

	      this[listenersKey].forEach(function (listener) {
	        return listener(_this[eventIndexKey]);
	      });
	    }
	  }, _ref2[subscribeKey] = function (listener) {
	    var _this2 = this;

	    // No need to immediately call listener here.
	    this[listenersKey].push(listener);

	    return function () {
	      _this2[listenersKey] = _this2[listenersKey].filter(function (item) {
	        return item !== listener;
	      });
	    };
	  }, _ref2;
	}

	function ContextSubscriber(name) {
	  var _contextTypes, _ref4;

	  var contextName = makeContextName(name);
	  var lastRenderedEventIndexKey = contextName + '/lastRenderedEventIndex';
	  var handleContextUpdateKey = contextName + '/handleContextUpdate';
	  var unsubscribeKey = contextName + '/unsubscribe';

	  return _ref4 = {
	    contextTypes: (_contextTypes = {}, _contextTypes[contextName] = contextProviderShape, _contextTypes),

	    getInitialState: function getInitialState() {
	      var _ref3;

	      if (!this.context[contextName]) {
	        return {};
	      }

	      return _ref3 = {}, _ref3[lastRenderedEventIndexKey] = this.context[contextName].eventIndex, _ref3;
	    },
	    componentDidMount: function componentDidMount() {
	      if (!this.context[contextName]) {
	        return;
	      }

	      this[unsubscribeKey] = this.context[contextName].subscribe(this[handleContextUpdateKey]);
	    },
	    componentWillReceiveProps: function componentWillReceiveProps() {
	      var _setState;

	      if (!this.context[contextName]) {
	        return;
	      }

	      this.setState((_setState = {}, _setState[lastRenderedEventIndexKey] = this.context[contextName].eventIndex, _setState));
	    },
	    componentWillUnmount: function componentWillUnmount() {
	      if (!this[unsubscribeKey]) {
	        return;
	      }

	      this[unsubscribeKey]();
	      this[unsubscribeKey] = null;
	    }
	  }, _ref4[handleContextUpdateKey] = function (eventIndex) {
	    if (eventIndex !== this.state[lastRenderedEventIndexKey]) {
	      var _setState2;

	      this.setState((_setState2 = {}, _setState2[lastRenderedEventIndexKey] = eventIndex, _setState2));
	    }
	  }, _ref4;
	}

/***/ },
/* 223 */
/***/ function(module, exports) {

	"use strict";

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	exports.createRouterObject = createRouterObject;
	exports.assignRouterState = assignRouterState;
	function createRouterObject(history, transitionManager, state) {
	  var router = _extends({}, history, {
	    setRouteLeaveHook: transitionManager.listenBeforeLeavingRoute,
	    isActive: transitionManager.isActive
	  });

	  return assignRouterState(router, state);
	}

	function assignRouterState(router, _ref) {
	  var location = _ref.location,
	      params = _ref.params,
	      routes = _ref.routes;

	  router.location = location;
	  router.params = params;
	  router.routes = routes;

	  return router;
	}

/***/ },
/* 224 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _invariant = __webpack_require__(193);

	var _invariant2 = _interopRequireDefault(_invariant);

	var _PropTypes = __webpack_require__(206);

	var _ContextUtils = __webpack_require__(222);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	var _React$PropTypes = _react2.default.PropTypes,
	    bool = _React$PropTypes.bool,
	    object = _React$PropTypes.object,
	    string = _React$PropTypes.string,
	    func = _React$PropTypes.func,
	    oneOfType = _React$PropTypes.oneOfType;


	function isLeftClickEvent(event) {
	  return event.button === 0;
	}

	function isModifiedEvent(event) {
	  return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
	}

	// TODO: De-duplicate against hasAnyProperties in createTransitionManager.
	function isEmptyObject(object) {
	  for (var p in object) {
	    if (Object.prototype.hasOwnProperty.call(object, p)) return false;
	  }return true;
	}

	function resolveToLocation(to, router) {
	  return typeof to === 'function' ? to(router.location) : to;
	}

	/**
	 * A <Link> is used to create an <a> element that links to a route.
	 * When that route is active, the link gets the value of its
	 * activeClassName prop.
	 *
	 * For example, assuming you have the following route:
	 *
	 *   <Route path="/posts/:postID" component={Post} />
	 *
	 * You could use the following component to link to that route:
	 *
	 *   <Link to={`/posts/${post.id}`} />
	 *
	 * Links may pass along location state and/or query string parameters
	 * in the state/query props, respectively.
	 *
	 *   <Link ... query={{ show: true }} state={{ the: 'state' }} />
	 */
	var Link = _react2.default.createClass({
	  displayName: 'Link',


	  mixins: [(0, _ContextUtils.ContextSubscriber)('router')],

	  contextTypes: {
	    router: _PropTypes.routerShape
	  },

	  propTypes: {
	    to: oneOfType([string, object, func]),
	    query: object,
	    hash: string,
	    state: object,
	    activeStyle: object,
	    activeClassName: string,
	    onlyActiveOnIndex: bool.isRequired,
	    onClick: func,
	    target: string
	  },

	  getDefaultProps: function getDefaultProps() {
	    return {
	      onlyActiveOnIndex: false,
	      style: {}
	    };
	  },
	  handleClick: function handleClick(event) {
	    if (this.props.onClick) this.props.onClick(event);

	    if (event.defaultPrevented) return;

	    var router = this.context.router;

	    !router ?  false ? (0, _invariant2.default)(false, '<Link>s rendered outside of a router context cannot navigate.') : (0, _invariant2.default)(false) : void 0;

	    if (isModifiedEvent(event) || !isLeftClickEvent(event)) return;

	    // If target prop is set (e.g. to "_blank"), let browser handle link.
	    /* istanbul ignore if: untestable with Karma */
	    if (this.props.target) return;

	    event.preventDefault();

	    router.push(resolveToLocation(this.props.to, router));
	  },
	  render: function render() {
	    var _props = this.props,
	        to = _props.to,
	        activeClassName = _props.activeClassName,
	        activeStyle = _props.activeStyle,
	        onlyActiveOnIndex = _props.onlyActiveOnIndex,
	        props = _objectWithoutProperties(_props, ['to', 'activeClassName', 'activeStyle', 'onlyActiveOnIndex']);

	    // Ignore if rendered outside the context of router to simplify unit testing.


	    var router = this.context.router;


	    if (router) {
	      // If user does not specify a `to` prop, return an empty anchor tag.
	      if (to == null) {
	        return _react2.default.createElement('a', props);
	      }

	      var toLocation = resolveToLocation(to, router);
	      props.href = router.createHref(toLocation);

	      if (activeClassName || activeStyle != null && !isEmptyObject(activeStyle)) {
	        if (router.isActive(toLocation, onlyActiveOnIndex)) {
	          if (activeClassName) {
	            if (props.className) {
	              props.className += ' ' + activeClassName;
	            } else {
	              props.className = activeClassName;
	            }
	          }

	          if (activeStyle) props.style = _extends({}, props.style, activeStyle);
	        }
	      }
	    }

	    return _react2.default.createElement('a', _extends({}, props, { onClick: this.handleClick }));
	  }
	});

	exports.default = Link;
	module.exports = exports['default'];

/***/ },
/* 225 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _Link = __webpack_require__(224);

	var _Link2 = _interopRequireDefault(_Link);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * An <IndexLink> is used to link to an <IndexRoute>.
	 */
	var IndexLink = _react2.default.createClass({
	  displayName: 'IndexLink',
	  render: function render() {
	    return _react2.default.createElement(_Link2.default, _extends({}, this.props, { onlyActiveOnIndex: true }));
	  }
	});

	exports.default = IndexLink;
	module.exports = exports['default'];

/***/ },
/* 226 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	exports.default = withRouter;

	var _invariant = __webpack_require__(193);

	var _invariant2 = _interopRequireDefault(_invariant);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _hoistNonReactStatics = __webpack_require__(192);

	var _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);

	var _ContextUtils = __webpack_require__(222);

	var _PropTypes = __webpack_require__(206);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function getDisplayName(WrappedComponent) {
	  return WrappedComponent.displayName || WrappedComponent.name || 'Component';
	}

	function withRouter(WrappedComponent, options) {
	  var withRef = options && options.withRef;

	  var WithRouter = _react2.default.createClass({
	    displayName: 'WithRouter',

	    mixins: [(0, _ContextUtils.ContextSubscriber)('router')],

	    contextTypes: { router: _PropTypes.routerShape },
	    propTypes: { router: _PropTypes.routerShape },

	    getWrappedInstance: function getWrappedInstance() {
	      !withRef ?  false ? (0, _invariant2.default)(false, 'To access the wrapped instance, you need to specify ' + '`{ withRef: true }` as the second argument of the withRouter() call.') : (0, _invariant2.default)(false) : void 0;

	      return this.wrappedInstance;
	    },
	    render: function render() {
	      var _this = this;

	      var router = this.props.router || this.context.router;
	      var params = router.params,
	          location = router.location,
	          routes = router.routes;

	      var props = _extends({}, this.props, { router: router, params: params, location: location, routes: routes });

	      if (withRef) {
	        props.ref = function (c) {
	          _this.wrappedInstance = c;
	        };
	      }

	      return _react2.default.createElement(WrappedComponent, props);
	    }
	  });

	  WithRouter.displayName = 'withRouter(' + getDisplayName(WrappedComponent) + ')';
	  WithRouter.WrappedComponent = WrappedComponent;

	  return (0, _hoistNonReactStatics2.default)(WithRouter, WrappedComponent);
	}
	module.exports = exports['default'];

/***/ },
/* 227 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _routerWarning = __webpack_require__(210);

	var _routerWarning2 = _interopRequireDefault(_routerWarning);

	var _invariant = __webpack_require__(193);

	var _invariant2 = _interopRequireDefault(_invariant);

	var _Redirect = __webpack_require__(228);

	var _Redirect2 = _interopRequireDefault(_Redirect);

	var _InternalPropTypes = __webpack_require__(219);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var _React$PropTypes = _react2.default.PropTypes,
	    string = _React$PropTypes.string,
	    object = _React$PropTypes.object;

	/**
	 * An <IndexRedirect> is used to redirect from an indexRoute.
	 */
	/* eslint-disable react/require-render-return */

	var IndexRedirect = _react2.default.createClass({
	  displayName: 'IndexRedirect',


	  statics: {
	    createRouteFromReactElement: function createRouteFromReactElement(element, parentRoute) {
	      /* istanbul ignore else: sanity check */
	      if (parentRoute) {
	        parentRoute.indexRoute = _Redirect2.default.createRouteFromReactElement(element);
	      } else {
	         false ? (0, _routerWarning2.default)(false, 'An <IndexRedirect> does not make sense at the root of your route config') : void 0;
	      }
	    }
	  },

	  propTypes: {
	    to: string.isRequired,
	    query: object,
	    state: object,
	    onEnter: _InternalPropTypes.falsy,
	    children: _InternalPropTypes.falsy
	  },

	  /* istanbul ignore next: sanity check */
	  render: function render() {
	     true ?  false ? (0, _invariant2.default)(false, '<IndexRedirect> elements are for router configuration only and should not be rendered') : (0, _invariant2.default)(false) : void 0;
	  }
	});

	exports.default = IndexRedirect;
	module.exports = exports['default'];

/***/ },
/* 228 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _invariant = __webpack_require__(193);

	var _invariant2 = _interopRequireDefault(_invariant);

	var _RouteUtils = __webpack_require__(205);

	var _PatternUtils = __webpack_require__(207);

	var _InternalPropTypes = __webpack_require__(219);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var _React$PropTypes = _react2.default.PropTypes,
	    string = _React$PropTypes.string,
	    object = _React$PropTypes.object;

	/**
	 * A <Redirect> is used to declare another URL path a client should
	 * be sent to when they request a given URL.
	 *
	 * Redirects are placed alongside routes in the route configuration
	 * and are traversed in the same manner.
	 */
	/* eslint-disable react/require-render-return */

	var Redirect = _react2.default.createClass({
	  displayName: 'Redirect',


	  statics: {
	    createRouteFromReactElement: function createRouteFromReactElement(element) {
	      var route = (0, _RouteUtils.createRouteFromReactElement)(element);

	      if (route.from) route.path = route.from;

	      route.onEnter = function (nextState, replace) {
	        var location = nextState.location,
	            params = nextState.params;


	        var pathname = void 0;
	        if (route.to.charAt(0) === '/') {
	          pathname = (0, _PatternUtils.formatPattern)(route.to, params);
	        } else if (!route.to) {
	          pathname = location.pathname;
	        } else {
	          var routeIndex = nextState.routes.indexOf(route);
	          var parentPattern = Redirect.getRoutePattern(nextState.routes, routeIndex - 1);
	          var pattern = parentPattern.replace(/\/*$/, '/') + route.to;
	          pathname = (0, _PatternUtils.formatPattern)(pattern, params);
	        }

	        replace({
	          pathname: pathname,
	          query: route.query || location.query,
	          state: route.state || location.state
	        });
	      };

	      return route;
	    },
	    getRoutePattern: function getRoutePattern(routes, routeIndex) {
	      var parentPattern = '';

	      for (var i = routeIndex; i >= 0; i--) {
	        var route = routes[i];
	        var pattern = route.path || '';

	        parentPattern = pattern.replace(/\/*$/, '/') + parentPattern;

	        if (pattern.indexOf('/') === 0) break;
	      }

	      return '/' + parentPattern;
	    }
	  },

	  propTypes: {
	    path: string,
	    from: string, // Alias for path
	    to: string.isRequired,
	    query: object,
	    state: object,
	    onEnter: _InternalPropTypes.falsy,
	    children: _InternalPropTypes.falsy
	  },

	  /* istanbul ignore next: sanity check */
	  render: function render() {
	     true ?  false ? (0, _invariant2.default)(false, '<Redirect> elements are for router configuration only and should not be rendered') : (0, _invariant2.default)(false) : void 0;
	  }
	});

	exports.default = Redirect;
	module.exports = exports['default'];

/***/ },
/* 229 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _routerWarning = __webpack_require__(210);

	var _routerWarning2 = _interopRequireDefault(_routerWarning);

	var _invariant = __webpack_require__(193);

	var _invariant2 = _interopRequireDefault(_invariant);

	var _RouteUtils = __webpack_require__(205);

	var _InternalPropTypes = __webpack_require__(219);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var func = _react2.default.PropTypes.func;

	/**
	 * An <IndexRoute> is used to specify its parent's <Route indexRoute> in
	 * a JSX route config.
	 */
	/* eslint-disable react/require-render-return */

	var IndexRoute = _react2.default.createClass({
	  displayName: 'IndexRoute',


	  statics: {
	    createRouteFromReactElement: function createRouteFromReactElement(element, parentRoute) {
	      /* istanbul ignore else: sanity check */
	      if (parentRoute) {
	        parentRoute.indexRoute = (0, _RouteUtils.createRouteFromReactElement)(element);
	      } else {
	         false ? (0, _routerWarning2.default)(false, 'An <IndexRoute> does not make sense at the root of your route config') : void 0;
	      }
	    }
	  },

	  propTypes: {
	    path: _InternalPropTypes.falsy,
	    component: _InternalPropTypes.component,
	    components: _InternalPropTypes.components,
	    getComponent: func,
	    getComponents: func
	  },

	  /* istanbul ignore next: sanity check */
	  render: function render() {
	     true ?  false ? (0, _invariant2.default)(false, '<IndexRoute> elements are for router configuration only and should not be rendered') : (0, _invariant2.default)(false) : void 0;
	  }
	});

	exports.default = IndexRoute;
	module.exports = exports['default'];

/***/ },
/* 230 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _invariant = __webpack_require__(193);

	var _invariant2 = _interopRequireDefault(_invariant);

	var _RouteUtils = __webpack_require__(205);

	var _InternalPropTypes = __webpack_require__(219);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var _React$PropTypes = _react2.default.PropTypes,
	    string = _React$PropTypes.string,
	    func = _React$PropTypes.func;

	/**
	 * A <Route> is used to declare which components are rendered to the
	 * page when the URL matches a given pattern.
	 *
	 * Routes are arranged in a nested tree structure. When a new URL is
	 * requested, the tree is searched depth-first to find a route whose
	 * path matches the URL.  When one is found, all routes in the tree
	 * that lead to it are considered "active" and their components are
	 * rendered into the DOM, nested in the same order as in the tree.
	 */
	/* eslint-disable react/require-render-return */

	var Route = _react2.default.createClass({
	  displayName: 'Route',


	  statics: {
	    createRouteFromReactElement: _RouteUtils.createRouteFromReactElement
	  },

	  propTypes: {
	    path: string,
	    component: _InternalPropTypes.component,
	    components: _InternalPropTypes.components,
	    getComponent: func,
	    getComponents: func
	  },

	  /* istanbul ignore next: sanity check */
	  render: function render() {
	     true ?  false ? (0, _invariant2.default)(false, '<Route> elements are for router configuration only and should not be rendered') : (0, _invariant2.default)(false) : void 0;
	  }
	});

	exports.default = Route;
	module.exports = exports['default'];

/***/ },
/* 231 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _Actions = __webpack_require__(232);

	var _invariant = __webpack_require__(193);

	var _invariant2 = _interopRequireDefault(_invariant);

	var _createMemoryHistory = __webpack_require__(233);

	var _createMemoryHistory2 = _interopRequireDefault(_createMemoryHistory);

	var _createTransitionManager = __webpack_require__(209);

	var _createTransitionManager2 = _interopRequireDefault(_createTransitionManager);

	var _RouteUtils = __webpack_require__(205);

	var _RouterUtils = __webpack_require__(223);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	/**
	 * A high-level API to be used for server-side rendering.
	 *
	 * This function matches a location to a set of routes and calls
	 * callback(error, redirectLocation, renderProps) when finished.
	 *
	 * Note: You probably don't want to use this in a browser unless you're using
	 * server-side rendering with async routes.
	 */
	function match(_ref, callback) {
	  var history = _ref.history,
	      routes = _ref.routes,
	      location = _ref.location,
	      options = _objectWithoutProperties(_ref, ['history', 'routes', 'location']);

	  !(history || location) ?  false ? (0, _invariant2.default)(false, 'match needs a history or a location') : (0, _invariant2.default)(false) : void 0;

	  history = history ? history : (0, _createMemoryHistory2.default)(options);
	  var transitionManager = (0, _createTransitionManager2.default)(history, (0, _RouteUtils.createRoutes)(routes));

	  if (location) {
	    // Allow match({ location: '/the/path', ... })
	    location = history.createLocation(location);
	  } else {
	    location = history.getCurrentLocation();
	  }

	  transitionManager.match(location, function (error, redirectLocation, nextState) {
	    var renderProps = void 0;

	    if (nextState) {
	      var router = (0, _RouterUtils.createRouterObject)(history, transitionManager, nextState);
	      renderProps = _extends({}, nextState, {
	        router: router,
	        matchContext: { transitionManager: transitionManager, router: router }
	      });
	    }

	    callback(error, redirectLocation && history.createLocation(redirectLocation, _Actions.REPLACE), renderProps);
	  });
	}

	exports.default = match;
	module.exports = exports['default'];

/***/ },
/* 232 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	/**
	 * Indicates that navigation was caused by a call to history.push.
	 */
	var PUSH = exports.PUSH = 'PUSH';

	/**
	 * Indicates that navigation was caused by a call to history.replace.
	 */
	var REPLACE = exports.REPLACE = 'REPLACE';

	/**
	 * Indicates that navigation was caused by some other action such
	 * as using a browser's back/forward buttons and/or manually manipulating
	 * the URL in a browser's location bar. This is the default.
	 *
	 * See https://developer.mozilla.org/en-US/docs/Web/API/WindowEventHandlers/onpopstate
	 * for more information.
	 */
	var POP = exports.POP = 'POP';

/***/ },
/* 233 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.default = createMemoryHistory;

	var _useQueries = __webpack_require__(234);

	var _useQueries2 = _interopRequireDefault(_useQueries);

	var _useBasename = __webpack_require__(240);

	var _useBasename2 = _interopRequireDefault(_useBasename);

	var _createMemoryHistory = __webpack_require__(241);

	var _createMemoryHistory2 = _interopRequireDefault(_createMemoryHistory);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function createMemoryHistory(options) {
	  // signatures and type checking differ between `useQueries` and
	  // `createMemoryHistory`, have to create `memoryHistory` first because
	  // `useQueries` doesn't understand the signature
	  var memoryHistory = (0, _createMemoryHistory2.default)(options);
	  var createHistory = function createHistory() {
	    return memoryHistory;
	  };
	  var history = (0, _useQueries2.default)((0, _useBasename2.default)(createHistory))(options);
	  return history;
	}
	module.exports = exports['default'];

/***/ },
/* 234 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _queryString = __webpack_require__(235);

	var _runTransitionHook = __webpack_require__(237);

	var _runTransitionHook2 = _interopRequireDefault(_runTransitionHook);

	var _LocationUtils = __webpack_require__(238);

	var _PathUtils = __webpack_require__(239);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var defaultStringifyQuery = function defaultStringifyQuery(query) {
	  return (0, _queryString.stringify)(query).replace(/%20/g, '+');
	};

	var defaultParseQueryString = _queryString.parse;

	/**
	 * Returns a new createHistory function that may be used to create
	 * history objects that know how to handle URL queries.
	 */
	var useQueries = function useQueries(createHistory) {
	  return function () {
	    var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

	    var history = createHistory(options);
	    var stringifyQuery = options.stringifyQuery;
	    var parseQueryString = options.parseQueryString;


	    if (typeof stringifyQuery !== 'function') stringifyQuery = defaultStringifyQuery;

	    if (typeof parseQueryString !== 'function') parseQueryString = defaultParseQueryString;

	    var decodeQuery = function decodeQuery(location) {
	      if (!location) return location;

	      if (location.query == null) location.query = parseQueryString(location.search.substring(1));

	      return location;
	    };

	    var encodeQuery = function encodeQuery(location, query) {
	      if (query == null) return location;

	      var object = typeof location === 'string' ? (0, _PathUtils.parsePath)(location) : location;
	      var queryString = stringifyQuery(query);
	      var search = queryString ? '?' + queryString : '';

	      return _extends({}, object, {
	        search: search
	      });
	    };

	    // Override all read methods with query-aware versions.
	    var getCurrentLocation = function getCurrentLocation() {
	      return decodeQuery(history.getCurrentLocation());
	    };

	    var listenBefore = function listenBefore(hook) {
	      return history.listenBefore(function (location, callback) {
	        return (0, _runTransitionHook2.default)(hook, decodeQuery(location), callback);
	      });
	    };

	    var listen = function listen(listener) {
	      return history.listen(function (location) {
	        return listener(decodeQuery(location));
	      });
	    };

	    // Override all write methods with query-aware versions.
	    var push = function push(location) {
	      return history.push(encodeQuery(location, location.query));
	    };

	    var replace = function replace(location) {
	      return history.replace(encodeQuery(location, location.query));
	    };

	    var createPath = function createPath(location) {
	      return history.createPath(encodeQuery(location, location.query));
	    };

	    var createHref = function createHref(location) {
	      return history.createHref(encodeQuery(location, location.query));
	    };

	    var createLocation = function createLocation(location) {
	      for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	        args[_key - 1] = arguments[_key];
	      }

	      var newLocation = history.createLocation.apply(history, [encodeQuery(location, location.query)].concat(args));

	      if (location.query) newLocation.query = (0, _LocationUtils.createQuery)(location.query);

	      return decodeQuery(newLocation);
	    };

	    return _extends({}, history, {
	      getCurrentLocation: getCurrentLocation,
	      listenBefore: listenBefore,
	      listen: listen,
	      push: push,
	      replace: replace,
	      createPath: createPath,
	      createHref: createHref,
	      createLocation: createLocation
	    });
	  };
	};

	exports.default = useQueries;

/***/ },
/* 235 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var strictUriEncode = __webpack_require__(236);
	var objectAssign = __webpack_require__(3);

	function encode(value, opts) {
		if (opts.encode) {
			return opts.strict ? strictUriEncode(value) : encodeURIComponent(value);
		}

		return value;
	}

	exports.extract = function (str) {
		return str.split('?')[1] || '';
	};

	exports.parse = function (str) {
		// Create an object with no prototype
		// https://github.com/sindresorhus/query-string/issues/47
		var ret = Object.create(null);

		if (typeof str !== 'string') {
			return ret;
		}

		str = str.trim().replace(/^(\?|#|&)/, '');

		if (!str) {
			return ret;
		}

		str.split('&').forEach(function (param) {
			var parts = param.replace(/\+/g, ' ').split('=');
			// Firefox (pre 40) decodes `%3D` to `=`
			// https://github.com/sindresorhus/query-string/pull/37
			var key = parts.shift();
			var val = parts.length > 0 ? parts.join('=') : undefined;

			key = decodeURIComponent(key);

			// missing `=` should be `null`:
			// http://w3.org/TR/2012/WD-url-20120524/#collect-url-parameters
			val = val === undefined ? null : decodeURIComponent(val);

			if (ret[key] === undefined) {
				ret[key] = val;
			} else if (Array.isArray(ret[key])) {
				ret[key].push(val);
			} else {
				ret[key] = [ret[key], val];
			}
		});

		return ret;
	};

	exports.stringify = function (obj, opts) {
		var defaults = {
			encode: true,
			strict: true
		};

		opts = objectAssign(defaults, opts);

		return obj ? Object.keys(obj).sort().map(function (key) {
			var val = obj[key];

			if (val === undefined) {
				return '';
			}

			if (val === null) {
				return encode(key, opts);
			}

			if (Array.isArray(val)) {
				var result = [];

				val.slice().forEach(function (val2) {
					if (val2 === undefined) {
						return;
					}

					if (val2 === null) {
						result.push(encode(key, opts));
					} else {
						result.push(encode(key, opts) + '=' + encode(val2, opts));
					}
				});

				return result.join('&');
			}

			return encode(key, opts) + '=' + encode(val, opts);
		}).filter(function (x) {
			return x.length > 0;
		}).join('&') : '';
	};


/***/ },
/* 236 */
/***/ function(module, exports) {

	'use strict';
	module.exports = function (str) {
		return encodeURIComponent(str).replace(/[!'()*]/g, function (c) {
			return '%' + c.charCodeAt(0).toString(16).toUpperCase();
		});
	};


/***/ },
/* 237 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _warning = __webpack_require__(211);

	var _warning2 = _interopRequireDefault(_warning);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var runTransitionHook = function runTransitionHook(hook, location, callback) {
	  var result = hook(location, callback);

	  if (hook.length < 2) {
	    // Assume the hook runs synchronously and automatically
	    // call the callback with the return value.
	    callback(result);
	  } else {
	     false ? (0, _warning2.default)(result === undefined, 'You should not "return" in a transition hook with a callback argument; ' + 'call the callback instead') : void 0;
	  }
	};

	exports.default = runTransitionHook;

/***/ },
/* 238 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.locationsAreEqual = exports.statesAreEqual = exports.createLocation = exports.createQuery = undefined;

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _invariant = __webpack_require__(193);

	var _invariant2 = _interopRequireDefault(_invariant);

	var _warning = __webpack_require__(211);

	var _warning2 = _interopRequireDefault(_warning);

	var _PathUtils = __webpack_require__(239);

	var _Actions = __webpack_require__(232);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var createQuery = exports.createQuery = function createQuery(props) {
	  return _extends(Object.create(null), props);
	};

	var createLocation = exports.createLocation = function createLocation() {
	  var input = arguments.length <= 0 || arguments[0] === undefined ? '/' : arguments[0];
	  var action = arguments.length <= 1 || arguments[1] === undefined ? _Actions.POP : arguments[1];
	  var key = arguments.length <= 2 || arguments[2] === undefined ? null : arguments[2];

	  var object = typeof input === 'string' ? (0, _PathUtils.parsePath)(input) : input;

	   false ? (0, _warning2.default)(!object.path, 'Location descriptor objects should have a `pathname`, not a `path`.') : void 0;

	  var pathname = object.pathname || '/';
	  var search = object.search || '';
	  var hash = object.hash || '';
	  var state = object.state;

	  return {
	    pathname: pathname,
	    search: search,
	    hash: hash,
	    state: state,
	    action: action,
	    key: key
	  };
	};

	var isDate = function isDate(object) {
	  return Object.prototype.toString.call(object) === '[object Date]';
	};

	var statesAreEqual = exports.statesAreEqual = function statesAreEqual(a, b) {
	  if (a === b) return true;

	  var typeofA = typeof a === 'undefined' ? 'undefined' : _typeof(a);
	  var typeofB = typeof b === 'undefined' ? 'undefined' : _typeof(b);

	  if (typeofA !== typeofB) return false;

	  !(typeofA !== 'function') ?  false ? (0, _invariant2.default)(false, 'You must not store functions in location state') : (0, _invariant2.default)(false) : void 0;

	  // Not the same object, but same type.
	  if (typeofA === 'object') {
	    !!(isDate(a) && isDate(b)) ?  false ? (0, _invariant2.default)(false, 'You must not store Date objects in location state') : (0, _invariant2.default)(false) : void 0;

	    if (!Array.isArray(a)) {
	      var keysofA = Object.keys(a);
	      var keysofB = Object.keys(b);
	      return keysofA.length === keysofB.length && keysofA.every(function (key) {
	        return statesAreEqual(a[key], b[key]);
	      });
	    }

	    return Array.isArray(b) && a.length === b.length && a.every(function (item, index) {
	      return statesAreEqual(item, b[index]);
	    });
	  }

	  // All other serializable types (string, number, boolean)
	  // should be strict equal.
	  return false;
	};

	var locationsAreEqual = exports.locationsAreEqual = function locationsAreEqual(a, b) {
	  return a.key === b.key &&
	  // a.action === b.action && // Different action !== location change.
	  a.pathname === b.pathname && a.search === b.search && a.hash === b.hash && statesAreEqual(a.state, b.state);
	};

/***/ },
/* 239 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.createPath = exports.parsePath = exports.getQueryStringValueFromPath = exports.stripQueryStringValueFromPath = exports.addQueryStringValueToPath = undefined;

	var _warning = __webpack_require__(211);

	var _warning2 = _interopRequireDefault(_warning);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var addQueryStringValueToPath = exports.addQueryStringValueToPath = function addQueryStringValueToPath(path, key, value) {
	  var _parsePath = parsePath(path);

	  var pathname = _parsePath.pathname;
	  var search = _parsePath.search;
	  var hash = _parsePath.hash;


	  return createPath({
	    pathname: pathname,
	    search: search + (search.indexOf('?') === -1 ? '?' : '&') + key + '=' + value,
	    hash: hash
	  });
	};

	var stripQueryStringValueFromPath = exports.stripQueryStringValueFromPath = function stripQueryStringValueFromPath(path, key) {
	  var _parsePath2 = parsePath(path);

	  var pathname = _parsePath2.pathname;
	  var search = _parsePath2.search;
	  var hash = _parsePath2.hash;


	  return createPath({
	    pathname: pathname,
	    search: search.replace(new RegExp('([?&])' + key + '=[a-zA-Z0-9]+(&?)'), function (match, prefix, suffix) {
	      return prefix === '?' ? prefix : suffix;
	    }),
	    hash: hash
	  });
	};

	var getQueryStringValueFromPath = exports.getQueryStringValueFromPath = function getQueryStringValueFromPath(path, key) {
	  var _parsePath3 = parsePath(path);

	  var search = _parsePath3.search;

	  var match = search.match(new RegExp('[?&]' + key + '=([a-zA-Z0-9]+)'));
	  return match && match[1];
	};

	var extractPath = function extractPath(string) {
	  var match = string.match(/^(https?:)?\/\/[^\/]*/);
	  return match == null ? string : string.substring(match[0].length);
	};

	var parsePath = exports.parsePath = function parsePath(path) {
	  var pathname = extractPath(path);
	  var search = '';
	  var hash = '';

	   false ? (0, _warning2.default)(path === pathname, 'A path must be pathname + search + hash only, not a full URL like "%s"', path) : void 0;

	  var hashIndex = pathname.indexOf('#');
	  if (hashIndex !== -1) {
	    hash = pathname.substring(hashIndex);
	    pathname = pathname.substring(0, hashIndex);
	  }

	  var searchIndex = pathname.indexOf('?');
	  if (searchIndex !== -1) {
	    search = pathname.substring(searchIndex);
	    pathname = pathname.substring(0, searchIndex);
	  }

	  if (pathname === '') pathname = '/';

	  return {
	    pathname: pathname,
	    search: search,
	    hash: hash
	  };
	};

	var createPath = exports.createPath = function createPath(location) {
	  if (location == null || typeof location === 'string') return location;

	  var basename = location.basename;
	  var pathname = location.pathname;
	  var search = location.search;
	  var hash = location.hash;

	  var path = (basename || '') + pathname;

	  if (search && search !== '?') path += search;

	  if (hash) path += hash;

	  return path;
	};

/***/ },
/* 240 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _runTransitionHook = __webpack_require__(237);

	var _runTransitionHook2 = _interopRequireDefault(_runTransitionHook);

	var _PathUtils = __webpack_require__(239);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var useBasename = function useBasename(createHistory) {
	  return function () {
	    var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

	    var history = createHistory(options);
	    var basename = options.basename;


	    var addBasename = function addBasename(location) {
	      if (!location) return location;

	      if (basename && location.basename == null) {
	        if (location.pathname.indexOf(basename) === 0) {
	          location.pathname = location.pathname.substring(basename.length);
	          location.basename = basename;

	          if (location.pathname === '') location.pathname = '/';
	        } else {
	          location.basename = '';
	        }
	      }

	      return location;
	    };

	    var prependBasename = function prependBasename(location) {
	      if (!basename) return location;

	      var object = typeof location === 'string' ? (0, _PathUtils.parsePath)(location) : location;
	      var pname = object.pathname;
	      var normalizedBasename = basename.slice(-1) === '/' ? basename : basename + '/';
	      var normalizedPathname = pname.charAt(0) === '/' ? pname.slice(1) : pname;
	      var pathname = normalizedBasename + normalizedPathname;

	      return _extends({}, object, {
	        pathname: pathname
	      });
	    };

	    // Override all read methods with basename-aware versions.
	    var getCurrentLocation = function getCurrentLocation() {
	      return addBasename(history.getCurrentLocation());
	    };

	    var listenBefore = function listenBefore(hook) {
	      return history.listenBefore(function (location, callback) {
	        return (0, _runTransitionHook2.default)(hook, addBasename(location), callback);
	      });
	    };

	    var listen = function listen(listener) {
	      return history.listen(function (location) {
	        return listener(addBasename(location));
	      });
	    };

	    // Override all write methods with basename-aware versions.
	    var push = function push(location) {
	      return history.push(prependBasename(location));
	    };

	    var replace = function replace(location) {
	      return history.replace(prependBasename(location));
	    };

	    var createPath = function createPath(location) {
	      return history.createPath(prependBasename(location));
	    };

	    var createHref = function createHref(location) {
	      return history.createHref(prependBasename(location));
	    };

	    var createLocation = function createLocation(location) {
	      for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	        args[_key - 1] = arguments[_key];
	      }

	      return addBasename(history.createLocation.apply(history, [prependBasename(location)].concat(args)));
	    };

	    return _extends({}, history, {
	      getCurrentLocation: getCurrentLocation,
	      listenBefore: listenBefore,
	      listen: listen,
	      push: push,
	      replace: replace,
	      createPath: createPath,
	      createHref: createHref,
	      createLocation: createLocation
	    });
	  };
	};

	exports.default = useBasename;

/***/ },
/* 241 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _warning = __webpack_require__(211);

	var _warning2 = _interopRequireDefault(_warning);

	var _invariant = __webpack_require__(193);

	var _invariant2 = _interopRequireDefault(_invariant);

	var _LocationUtils = __webpack_require__(238);

	var _PathUtils = __webpack_require__(239);

	var _createHistory = __webpack_require__(242);

	var _createHistory2 = _interopRequireDefault(_createHistory);

	var _Actions = __webpack_require__(232);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var createStateStorage = function createStateStorage(entries) {
	  return entries.filter(function (entry) {
	    return entry.state;
	  }).reduce(function (memo, entry) {
	    memo[entry.key] = entry.state;
	    return memo;
	  }, {});
	};

	var createMemoryHistory = function createMemoryHistory() {
	  var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

	  if (Array.isArray(options)) {
	    options = { entries: options };
	  } else if (typeof options === 'string') {
	    options = { entries: [options] };
	  }

	  var getCurrentLocation = function getCurrentLocation() {
	    var entry = entries[current];
	    var path = (0, _PathUtils.createPath)(entry);

	    var key = void 0,
	        state = void 0;
	    if (entry.key) {
	      key = entry.key;
	      state = readState(key);
	    }

	    var init = (0, _PathUtils.parsePath)(path);

	    return (0, _LocationUtils.createLocation)(_extends({}, init, { state: state }), undefined, key);
	  };

	  var canGo = function canGo(n) {
	    var index = current + n;
	    return index >= 0 && index < entries.length;
	  };

	  var go = function go(n) {
	    if (!n) return;

	    if (!canGo(n)) {
	       false ? (0, _warning2.default)(false, 'Cannot go(%s) there is not enough history', n) : void 0;

	      return;
	    }

	    current += n;
	    var currentLocation = getCurrentLocation();

	    // Change action to POP
	    history.transitionTo(_extends({}, currentLocation, { action: _Actions.POP }));
	  };

	  var pushLocation = function pushLocation(location) {
	    current += 1;

	    if (current < entries.length) entries.splice(current);

	    entries.push(location);

	    saveState(location.key, location.state);
	  };

	  var replaceLocation = function replaceLocation(location) {
	    entries[current] = location;
	    saveState(location.key, location.state);
	  };

	  var history = (0, _createHistory2.default)(_extends({}, options, {
	    getCurrentLocation: getCurrentLocation,
	    pushLocation: pushLocation,
	    replaceLocation: replaceLocation,
	    go: go
	  }));

	  var _options = options;
	  var entries = _options.entries;
	  var current = _options.current;


	  if (typeof entries === 'string') {
	    entries = [entries];
	  } else if (!Array.isArray(entries)) {
	    entries = ['/'];
	  }

	  entries = entries.map(function (entry) {
	    return (0, _LocationUtils.createLocation)(entry);
	  });

	  if (current == null) {
	    current = entries.length - 1;
	  } else {
	    !(current >= 0 && current < entries.length) ?  false ? (0, _invariant2.default)(false, 'Current index must be >= 0 and < %s, was %s', entries.length, current) : (0, _invariant2.default)(false) : void 0;
	  }

	  var storage = createStateStorage(entries);

	  var saveState = function saveState(key, state) {
	    return storage[key] = state;
	  };

	  var readState = function readState(key) {
	    return storage[key];
	  };

	  return _extends({}, history, {
	    canGo: canGo
	  });
	};

	exports.default = createMemoryHistory;

/***/ },
/* 242 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _AsyncUtils = __webpack_require__(243);

	var _PathUtils = __webpack_require__(239);

	var _runTransitionHook = __webpack_require__(237);

	var _runTransitionHook2 = _interopRequireDefault(_runTransitionHook);

	var _Actions = __webpack_require__(232);

	var _LocationUtils = __webpack_require__(238);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var createHistory = function createHistory() {
	  var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	  var getCurrentLocation = options.getCurrentLocation;
	  var getUserConfirmation = options.getUserConfirmation;
	  var pushLocation = options.pushLocation;
	  var replaceLocation = options.replaceLocation;
	  var go = options.go;
	  var keyLength = options.keyLength;


	  var currentLocation = void 0;
	  var pendingLocation = void 0;
	  var beforeListeners = [];
	  var listeners = [];
	  var allKeys = [];

	  var getCurrentIndex = function getCurrentIndex() {
	    if (pendingLocation && pendingLocation.action === _Actions.POP) return allKeys.indexOf(pendingLocation.key);

	    if (currentLocation) return allKeys.indexOf(currentLocation.key);

	    return -1;
	  };

	  var updateLocation = function updateLocation(nextLocation) {
	    var currentIndex = getCurrentIndex();

	    currentLocation = nextLocation;

	    if (currentLocation.action === _Actions.PUSH) {
	      allKeys = [].concat(allKeys.slice(0, currentIndex + 1), [currentLocation.key]);
	    } else if (currentLocation.action === _Actions.REPLACE) {
	      allKeys[currentIndex] = currentLocation.key;
	    }

	    listeners.forEach(function (listener) {
	      return listener(currentLocation);
	    });
	  };

	  var listenBefore = function listenBefore(listener) {
	    beforeListeners.push(listener);

	    return function () {
	      return beforeListeners = beforeListeners.filter(function (item) {
	        return item !== listener;
	      });
	    };
	  };

	  var listen = function listen(listener) {
	    listeners.push(listener);

	    return function () {
	      return listeners = listeners.filter(function (item) {
	        return item !== listener;
	      });
	    };
	  };

	  var confirmTransitionTo = function confirmTransitionTo(location, callback) {
	    (0, _AsyncUtils.loopAsync)(beforeListeners.length, function (index, next, done) {
	      (0, _runTransitionHook2.default)(beforeListeners[index], location, function (result) {
	        return result != null ? done(result) : next();
	      });
	    }, function (message) {
	      if (getUserConfirmation && typeof message === 'string') {
	        getUserConfirmation(message, function (ok) {
	          return callback(ok !== false);
	        });
	      } else {
	        callback(message !== false);
	      }
	    });
	  };

	  var transitionTo = function transitionTo(nextLocation) {
	    if (currentLocation && (0, _LocationUtils.locationsAreEqual)(currentLocation, nextLocation) || pendingLocation && (0, _LocationUtils.locationsAreEqual)(pendingLocation, nextLocation)) return; // Nothing to do

	    pendingLocation = nextLocation;

	    confirmTransitionTo(nextLocation, function (ok) {
	      if (pendingLocation !== nextLocation) return; // Transition was interrupted during confirmation

	      pendingLocation = null;

	      if (ok) {
	        // Treat PUSH to same path like REPLACE to be consistent with browsers
	        if (nextLocation.action === _Actions.PUSH) {
	          var prevPath = (0, _PathUtils.createPath)(currentLocation);
	          var nextPath = (0, _PathUtils.createPath)(nextLocation);

	          if (nextPath === prevPath && (0, _LocationUtils.statesAreEqual)(currentLocation.state, nextLocation.state)) nextLocation.action = _Actions.REPLACE;
	        }

	        if (nextLocation.action === _Actions.POP) {
	          updateLocation(nextLocation);
	        } else if (nextLocation.action === _Actions.PUSH) {
	          if (pushLocation(nextLocation) !== false) updateLocation(nextLocation);
	        } else if (nextLocation.action === _Actions.REPLACE) {
	          if (replaceLocation(nextLocation) !== false) updateLocation(nextLocation);
	        }
	      } else if (currentLocation && nextLocation.action === _Actions.POP) {
	        var prevIndex = allKeys.indexOf(currentLocation.key);
	        var nextIndex = allKeys.indexOf(nextLocation.key);

	        if (prevIndex !== -1 && nextIndex !== -1) go(prevIndex - nextIndex); // Restore the URL
	      }
	    });
	  };

	  var push = function push(input) {
	    return transitionTo(createLocation(input, _Actions.PUSH));
	  };

	  var replace = function replace(input) {
	    return transitionTo(createLocation(input, _Actions.REPLACE));
	  };

	  var goBack = function goBack() {
	    return go(-1);
	  };

	  var goForward = function goForward() {
	    return go(1);
	  };

	  var createKey = function createKey() {
	    return Math.random().toString(36).substr(2, keyLength || 6);
	  };

	  var createHref = function createHref(location) {
	    return (0, _PathUtils.createPath)(location);
	  };

	  var createLocation = function createLocation(location, action) {
	    var key = arguments.length <= 2 || arguments[2] === undefined ? createKey() : arguments[2];
	    return (0, _LocationUtils.createLocation)(location, action, key);
	  };

	  return {
	    getCurrentLocation: getCurrentLocation,
	    listenBefore: listenBefore,
	    listen: listen,
	    transitionTo: transitionTo,
	    push: push,
	    replace: replace,
	    go: go,
	    goBack: goBack,
	    goForward: goForward,
	    createKey: createKey,
	    createPath: _PathUtils.createPath,
	    createHref: createHref,
	    createLocation: createLocation
	  };
	};

	exports.default = createHistory;

/***/ },
/* 243 */
/***/ function(module, exports) {

	"use strict";

	exports.__esModule = true;
	var loopAsync = exports.loopAsync = function loopAsync(turns, work, callback) {
	  var currentTurn = 0,
	      isDone = false;
	  var isSync = false,
	      hasNext = false,
	      doneArgs = void 0;

	  var done = function done() {
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    isDone = true;

	    if (isSync) {
	      // Iterate instead of recursing if possible.
	      doneArgs = args;
	      return;
	    }

	    callback.apply(undefined, args);
	  };

	  var next = function next() {
	    if (isDone) return;

	    hasNext = true;

	    if (isSync) return; // Iterate instead of recursing if possible.

	    isSync = true;

	    while (!isDone && currentTurn < turns && hasNext) {
	      hasNext = false;
	      work(currentTurn++, next, done);
	    }

	    isSync = false;

	    if (isDone) {
	      // This means the loop finished synchronously.
	      callback.apply(undefined, doneArgs);
	      return;
	    }

	    if (currentTurn >= turns && hasNext) {
	      isDone = true;
	      callback();
	    }
	  };

	  next();
	};

/***/ },
/* 244 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.default = useRouterHistory;

	var _useQueries = __webpack_require__(234);

	var _useQueries2 = _interopRequireDefault(_useQueries);

	var _useBasename = __webpack_require__(240);

	var _useBasename2 = _interopRequireDefault(_useBasename);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function useRouterHistory(createHistory) {
	  return function (options) {
	    var history = (0, _useQueries2.default)((0, _useBasename2.default)(createHistory))(options);
	    return history;
	  };
	}
	module.exports = exports['default'];

/***/ },
/* 245 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _RouterContext = __webpack_require__(220);

	var _RouterContext2 = _interopRequireDefault(_RouterContext);

	var _routerWarning = __webpack_require__(210);

	var _routerWarning2 = _interopRequireDefault(_routerWarning);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function () {
	  for (var _len = arguments.length, middlewares = Array(_len), _key = 0; _key < _len; _key++) {
	    middlewares[_key] = arguments[_key];
	  }

	  if (false) {
	    middlewares.forEach(function (middleware, index) {
	      process.env.NODE_ENV !== 'production' ? (0, _routerWarning2.default)(middleware.renderRouterContext || middleware.renderRouteComponent, 'The middleware specified at index ' + index + ' does not appear to be ' + 'a valid React Router middleware.') : void 0;
	    });
	  }

	  var withContext = middlewares.map(function (middleware) {
	    return middleware.renderRouterContext;
	  }).filter(Boolean);
	  var withComponent = middlewares.map(function (middleware) {
	    return middleware.renderRouteComponent;
	  }).filter(Boolean);

	  var makeCreateElement = function makeCreateElement() {
	    var baseCreateElement = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _react.createElement;
	    return function (Component, props) {
	      return withComponent.reduceRight(function (previous, renderRouteComponent) {
	        return renderRouteComponent(previous, props);
	      }, baseCreateElement(Component, props));
	    };
	  };

	  return function (renderProps) {
	    return withContext.reduceRight(function (previous, renderRouterContext) {
	      return renderRouterContext(previous, renderProps);
	    }, _react2.default.createElement(_RouterContext2.default, _extends({}, renderProps, {
	      createElement: makeCreateElement(renderProps.createElement)
	    })));
	  };
	};

	module.exports = exports['default'];

/***/ },
/* 246 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _createBrowserHistory = __webpack_require__(247);

	var _createBrowserHistory2 = _interopRequireDefault(_createBrowserHistory);

	var _createRouterHistory = __webpack_require__(253);

	var _createRouterHistory2 = _interopRequireDefault(_createRouterHistory);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = (0, _createRouterHistory2.default)(_createBrowserHistory2.default);
	module.exports = exports['default'];

/***/ },
/* 247 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _invariant = __webpack_require__(193);

	var _invariant2 = _interopRequireDefault(_invariant);

	var _ExecutionEnvironment = __webpack_require__(248);

	var _BrowserProtocol = __webpack_require__(249);

	var BrowserProtocol = _interopRequireWildcard(_BrowserProtocol);

	var _RefreshProtocol = __webpack_require__(252);

	var RefreshProtocol = _interopRequireWildcard(_RefreshProtocol);

	var _DOMUtils = __webpack_require__(250);

	var _createHistory = __webpack_require__(242);

	var _createHistory2 = _interopRequireDefault(_createHistory);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * Creates and returns a history object that uses HTML5's history API
	 * (pushState, replaceState, and the popstate event) to manage history.
	 * This is the recommended method of managing history in browsers because
	 * it provides the cleanest URLs.
	 *
	 * Note: In browsers that do not support the HTML5 history API full
	 * page reloads will be used to preserve clean URLs. You can force this
	 * behavior using { forceRefresh: true } in options.
	 */
	var createBrowserHistory = function createBrowserHistory() {
	  var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

	  !_ExecutionEnvironment.canUseDOM ?  false ? (0, _invariant2.default)(false, 'Browser history needs a DOM') : (0, _invariant2.default)(false) : void 0;

	  var useRefresh = options.forceRefresh || !(0, _DOMUtils.supportsHistory)();
	  var Protocol = useRefresh ? RefreshProtocol : BrowserProtocol;

	  var getUserConfirmation = Protocol.getUserConfirmation;
	  var getCurrentLocation = Protocol.getCurrentLocation;
	  var pushLocation = Protocol.pushLocation;
	  var replaceLocation = Protocol.replaceLocation;
	  var go = Protocol.go;


	  var history = (0, _createHistory2.default)(_extends({
	    getUserConfirmation: getUserConfirmation }, options, {
	    getCurrentLocation: getCurrentLocation,
	    pushLocation: pushLocation,
	    replaceLocation: replaceLocation,
	    go: go
	  }));

	  var listenerCount = 0,
	      stopListener = void 0;

	  var startListener = function startListener(listener, before) {
	    if (++listenerCount === 1) stopListener = BrowserProtocol.startListener(history.transitionTo);

	    var unlisten = before ? history.listenBefore(listener) : history.listen(listener);

	    return function () {
	      unlisten();

	      if (--listenerCount === 0) stopListener();
	    };
	  };

	  var listenBefore = function listenBefore(listener) {
	    return startListener(listener, true);
	  };

	  var listen = function listen(listener) {
	    return startListener(listener, false);
	  };

	  return _extends({}, history, {
	    listenBefore: listenBefore,
	    listen: listen
	  });
	};

	exports.default = createBrowserHistory;

/***/ },
/* 248 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	var canUseDOM = exports.canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);

/***/ },
/* 249 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.go = exports.replaceLocation = exports.pushLocation = exports.startListener = exports.getUserConfirmation = exports.getCurrentLocation = undefined;

	var _LocationUtils = __webpack_require__(238);

	var _DOMUtils = __webpack_require__(250);

	var _DOMStateStorage = __webpack_require__(251);

	var _PathUtils = __webpack_require__(239);

	var _ExecutionEnvironment = __webpack_require__(248);

	var PopStateEvent = 'popstate';
	var HashChangeEvent = 'hashchange';

	var needsHashchangeListener = _ExecutionEnvironment.canUseDOM && !(0, _DOMUtils.supportsPopstateOnHashchange)();

	var _createLocation = function _createLocation(historyState) {
	  var key = historyState && historyState.key;

	  return (0, _LocationUtils.createLocation)({
	    pathname: window.location.pathname,
	    search: window.location.search,
	    hash: window.location.hash,
	    state: key ? (0, _DOMStateStorage.readState)(key) : undefined
	  }, undefined, key);
	};

	var getCurrentLocation = exports.getCurrentLocation = function getCurrentLocation() {
	  var historyState = void 0;
	  try {
	    historyState = window.history.state || {};
	  } catch (error) {
	    // IE 11 sometimes throws when accessing window.history.state
	    // See https://github.com/ReactTraining/history/pull/289
	    historyState = {};
	  }

	  return _createLocation(historyState);
	};

	var getUserConfirmation = exports.getUserConfirmation = function getUserConfirmation(message, callback) {
	  return callback(window.confirm(message));
	}; // eslint-disable-line no-alert

	var startListener = exports.startListener = function startListener(listener) {
	  var handlePopState = function handlePopState(event) {
	    if (event.state !== undefined) // Ignore extraneous popstate events in WebKit
	      listener(_createLocation(event.state));
	  };

	  (0, _DOMUtils.addEventListener)(window, PopStateEvent, handlePopState);

	  var handleUnpoppedHashChange = function handleUnpoppedHashChange() {
	    return listener(getCurrentLocation());
	  };

	  if (needsHashchangeListener) {
	    (0, _DOMUtils.addEventListener)(window, HashChangeEvent, handleUnpoppedHashChange);
	  }

	  return function () {
	    (0, _DOMUtils.removeEventListener)(window, PopStateEvent, handlePopState);

	    if (needsHashchangeListener) {
	      (0, _DOMUtils.removeEventListener)(window, HashChangeEvent, handleUnpoppedHashChange);
	    }
	  };
	};

	var updateLocation = function updateLocation(location, updateState) {
	  var state = location.state;
	  var key = location.key;


	  if (state !== undefined) (0, _DOMStateStorage.saveState)(key, state);

	  updateState({ key: key }, (0, _PathUtils.createPath)(location));
	};

	var pushLocation = exports.pushLocation = function pushLocation(location) {
	  return updateLocation(location, function (state, path) {
	    return window.history.pushState(state, null, path);
	  });
	};

	var replaceLocation = exports.replaceLocation = function replaceLocation(location) {
	  return updateLocation(location, function (state, path) {
	    return window.history.replaceState(state, null, path);
	  });
	};

	var go = exports.go = function go(n) {
	  if (n) window.history.go(n);
	};

/***/ },
/* 250 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	var addEventListener = exports.addEventListener = function addEventListener(node, event, listener) {
	  return node.addEventListener ? node.addEventListener(event, listener, false) : node.attachEvent('on' + event, listener);
	};

	var removeEventListener = exports.removeEventListener = function removeEventListener(node, event, listener) {
	  return node.removeEventListener ? node.removeEventListener(event, listener, false) : node.detachEvent('on' + event, listener);
	};

	/**
	 * Returns true if the HTML5 history API is supported. Taken from Modernizr.
	 *
	 * https://github.com/Modernizr/Modernizr/blob/master/LICENSE
	 * https://github.com/Modernizr/Modernizr/blob/master/feature-detects/history.js
	 * changed to avoid false negatives for Windows Phones: https://github.com/reactjs/react-router/issues/586
	 */
	var supportsHistory = exports.supportsHistory = function supportsHistory() {
	  var ua = window.navigator.userAgent;

	  if ((ua.indexOf('Android 2.') !== -1 || ua.indexOf('Android 4.0') !== -1) && ua.indexOf('Mobile Safari') !== -1 && ua.indexOf('Chrome') === -1 && ua.indexOf('Windows Phone') === -1) return false;

	  return window.history && 'pushState' in window.history;
	};

	/**
	 * Returns false if using go(n) with hash history causes a full page reload.
	 */
	var supportsGoWithoutReloadUsingHash = exports.supportsGoWithoutReloadUsingHash = function supportsGoWithoutReloadUsingHash() {
	  return window.navigator.userAgent.indexOf('Firefox') === -1;
	};

	/**
	 * Returns true if browser fires popstate on hash change.
	 * IE10 and IE11 do not.
	 */
	var supportsPopstateOnHashchange = exports.supportsPopstateOnHashchange = function supportsPopstateOnHashchange() {
	  return window.navigator.userAgent.indexOf('Trident') === -1;
	};

/***/ },
/* 251 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.readState = exports.saveState = undefined;

	var _warning = __webpack_require__(211);

	var _warning2 = _interopRequireDefault(_warning);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var QuotaExceededErrors = {
	  QuotaExceededError: true,
	  QUOTA_EXCEEDED_ERR: true
	};

	var SecurityErrors = {
	  SecurityError: true
	};

	var KeyPrefix = '@@History/';

	var createKey = function createKey(key) {
	  return KeyPrefix + key;
	};

	var saveState = exports.saveState = function saveState(key, state) {
	  if (!window.sessionStorage) {
	    // Session storage is not available or hidden.
	    // sessionStorage is undefined in Internet Explorer when served via file protocol.
	     false ? (0, _warning2.default)(false, '[history] Unable to save state; sessionStorage is not available') : void 0;

	    return;
	  }

	  try {
	    if (state == null) {
	      window.sessionStorage.removeItem(createKey(key));
	    } else {
	      window.sessionStorage.setItem(createKey(key), JSON.stringify(state));
	    }
	  } catch (error) {
	    if (SecurityErrors[error.name]) {
	      // Blocking cookies in Chrome/Firefox/Safari throws SecurityError on any
	      // attempt to access window.sessionStorage.
	       false ? (0, _warning2.default)(false, '[history] Unable to save state; sessionStorage is not available due to security settings') : void 0;

	      return;
	    }

	    if (QuotaExceededErrors[error.name] && window.sessionStorage.length === 0) {
	      // Safari "private mode" throws QuotaExceededError.
	       false ? (0, _warning2.default)(false, '[history] Unable to save state; sessionStorage is not available in Safari private mode') : void 0;

	      return;
	    }

	    throw error;
	  }
	};

	var readState = exports.readState = function readState(key) {
	  var json = void 0;
	  try {
	    json = window.sessionStorage.getItem(createKey(key));
	  } catch (error) {
	    if (SecurityErrors[error.name]) {
	      // Blocking cookies in Chrome/Firefox/Safari throws SecurityError on any
	      // attempt to access window.sessionStorage.
	       false ? (0, _warning2.default)(false, '[history] Unable to read state; sessionStorage is not available due to security settings') : void 0;

	      return undefined;
	    }
	  }

	  if (json) {
	    try {
	      return JSON.parse(json);
	    } catch (error) {
	      // Ignore invalid JSON.
	    }
	  }

	  return undefined;
	};

/***/ },
/* 252 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.replaceLocation = exports.pushLocation = exports.getCurrentLocation = exports.go = exports.getUserConfirmation = undefined;

	var _BrowserProtocol = __webpack_require__(249);

	Object.defineProperty(exports, 'getUserConfirmation', {
	  enumerable: true,
	  get: function get() {
	    return _BrowserProtocol.getUserConfirmation;
	  }
	});
	Object.defineProperty(exports, 'go', {
	  enumerable: true,
	  get: function get() {
	    return _BrowserProtocol.go;
	  }
	});

	var _LocationUtils = __webpack_require__(238);

	var _PathUtils = __webpack_require__(239);

	var getCurrentLocation = exports.getCurrentLocation = function getCurrentLocation() {
	  return (0, _LocationUtils.createLocation)(window.location);
	};

	var pushLocation = exports.pushLocation = function pushLocation(location) {
	  window.location.href = (0, _PathUtils.createPath)(location);
	  return false; // Don't update location
	};

	var replaceLocation = exports.replaceLocation = function replaceLocation(location) {
	  window.location.replace((0, _PathUtils.createPath)(location));
	  return false; // Don't update location
	};

/***/ },
/* 253 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	exports.default = function (createHistory) {
	  var history = void 0;
	  if (canUseDOM) history = (0, _useRouterHistory2.default)(createHistory)();
	  return history;
	};

	var _useRouterHistory = __webpack_require__(244);

	var _useRouterHistory2 = _interopRequireDefault(_useRouterHistory);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);

	module.exports = exports['default'];

/***/ },
/* 254 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _createHashHistory = __webpack_require__(255);

	var _createHashHistory2 = _interopRequireDefault(_createHashHistory);

	var _createRouterHistory = __webpack_require__(253);

	var _createRouterHistory2 = _interopRequireDefault(_createRouterHistory);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = (0, _createRouterHistory2.default)(_createHashHistory2.default);
	module.exports = exports['default'];

/***/ },
/* 255 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _warning = __webpack_require__(211);

	var _warning2 = _interopRequireDefault(_warning);

	var _invariant = __webpack_require__(193);

	var _invariant2 = _interopRequireDefault(_invariant);

	var _ExecutionEnvironment = __webpack_require__(248);

	var _DOMUtils = __webpack_require__(250);

	var _HashProtocol = __webpack_require__(256);

	var HashProtocol = _interopRequireWildcard(_HashProtocol);

	var _createHistory = __webpack_require__(242);

	var _createHistory2 = _interopRequireDefault(_createHistory);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var DefaultQueryKey = '_k';

	var addLeadingSlash = function addLeadingSlash(path) {
	  return path.charAt(0) === '/' ? path : '/' + path;
	};

	var HashPathCoders = {
	  hashbang: {
	    encodePath: function encodePath(path) {
	      return path.charAt(0) === '!' ? path : '!' + path;
	    },
	    decodePath: function decodePath(path) {
	      return path.charAt(0) === '!' ? path.substring(1) : path;
	    }
	  },
	  noslash: {
	    encodePath: function encodePath(path) {
	      return path.charAt(0) === '/' ? path.substring(1) : path;
	    },
	    decodePath: addLeadingSlash
	  },
	  slash: {
	    encodePath: addLeadingSlash,
	    decodePath: addLeadingSlash
	  }
	};

	var createHashHistory = function createHashHistory() {
	  var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

	  !_ExecutionEnvironment.canUseDOM ?  false ? (0, _invariant2.default)(false, 'Hash history needs a DOM') : (0, _invariant2.default)(false) : void 0;

	  var queryKey = options.queryKey;
	  var hashType = options.hashType;


	   false ? (0, _warning2.default)(queryKey !== false, 'Using { queryKey: false } no longer works. Instead, just don\'t ' + 'use location state if you don\'t want a key in your URL query string') : void 0;

	  if (typeof queryKey !== 'string') queryKey = DefaultQueryKey;

	  if (hashType == null) hashType = 'slash';

	  if (!(hashType in HashPathCoders)) {
	     false ? (0, _warning2.default)(false, 'Invalid hash type: %s', hashType) : void 0;

	    hashType = 'slash';
	  }

	  var pathCoder = HashPathCoders[hashType];

	  var getUserConfirmation = HashProtocol.getUserConfirmation;


	  var getCurrentLocation = function getCurrentLocation() {
	    return HashProtocol.getCurrentLocation(pathCoder, queryKey);
	  };

	  var pushLocation = function pushLocation(location) {
	    return HashProtocol.pushLocation(location, pathCoder, queryKey);
	  };

	  var replaceLocation = function replaceLocation(location) {
	    return HashProtocol.replaceLocation(location, pathCoder, queryKey);
	  };

	  var history = (0, _createHistory2.default)(_extends({
	    getUserConfirmation: getUserConfirmation }, options, {
	    getCurrentLocation: getCurrentLocation,
	    pushLocation: pushLocation,
	    replaceLocation: replaceLocation,
	    go: HashProtocol.go
	  }));

	  var listenerCount = 0,
	      stopListener = void 0;

	  var startListener = function startListener(listener, before) {
	    if (++listenerCount === 1) stopListener = HashProtocol.startListener(history.transitionTo, pathCoder, queryKey);

	    var unlisten = before ? history.listenBefore(listener) : history.listen(listener);

	    return function () {
	      unlisten();

	      if (--listenerCount === 0) stopListener();
	    };
	  };

	  var listenBefore = function listenBefore(listener) {
	    return startListener(listener, true);
	  };

	  var listen = function listen(listener) {
	    return startListener(listener, false);
	  };

	  var goIsSupportedWithoutReload = (0, _DOMUtils.supportsGoWithoutReloadUsingHash)();

	  var go = function go(n) {
	     false ? (0, _warning2.default)(goIsSupportedWithoutReload, 'Hash history go(n) causes a full page reload in this browser') : void 0;

	    history.go(n);
	  };

	  var createHref = function createHref(path) {
	    return '#' + pathCoder.encodePath(history.createHref(path));
	  };

	  return _extends({}, history, {
	    listenBefore: listenBefore,
	    listen: listen,
	    go: go,
	    createHref: createHref
	  });
	};

	exports.default = createHashHistory;

/***/ },
/* 256 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.replaceLocation = exports.pushLocation = exports.startListener = exports.getCurrentLocation = exports.go = exports.getUserConfirmation = undefined;

	var _BrowserProtocol = __webpack_require__(249);

	Object.defineProperty(exports, 'getUserConfirmation', {
	  enumerable: true,
	  get: function get() {
	    return _BrowserProtocol.getUserConfirmation;
	  }
	});
	Object.defineProperty(exports, 'go', {
	  enumerable: true,
	  get: function get() {
	    return _BrowserProtocol.go;
	  }
	});

	var _warning = __webpack_require__(211);

	var _warning2 = _interopRequireDefault(_warning);

	var _LocationUtils = __webpack_require__(238);

	var _DOMUtils = __webpack_require__(250);

	var _DOMStateStorage = __webpack_require__(251);

	var _PathUtils = __webpack_require__(239);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var HashChangeEvent = 'hashchange';

	var getHashPath = function getHashPath() {
	  // We can't use window.location.hash here because it's not
	  // consistent across browsers - Firefox will pre-decode it!
	  var href = window.location.href;
	  var hashIndex = href.indexOf('#');
	  return hashIndex === -1 ? '' : href.substring(hashIndex + 1);
	};

	var pushHashPath = function pushHashPath(path) {
	  return window.location.hash = path;
	};

	var replaceHashPath = function replaceHashPath(path) {
	  var hashIndex = window.location.href.indexOf('#');

	  window.location.replace(window.location.href.slice(0, hashIndex >= 0 ? hashIndex : 0) + '#' + path);
	};

	var getCurrentLocation = exports.getCurrentLocation = function getCurrentLocation(pathCoder, queryKey) {
	  var path = pathCoder.decodePath(getHashPath());
	  var key = (0, _PathUtils.getQueryStringValueFromPath)(path, queryKey);

	  var state = void 0;
	  if (key) {
	    path = (0, _PathUtils.stripQueryStringValueFromPath)(path, queryKey);
	    state = (0, _DOMStateStorage.readState)(key);
	  }

	  var init = (0, _PathUtils.parsePath)(path);
	  init.state = state;

	  return (0, _LocationUtils.createLocation)(init, undefined, key);
	};

	var prevLocation = void 0;

	var startListener = exports.startListener = function startListener(listener, pathCoder, queryKey) {
	  var handleHashChange = function handleHashChange() {
	    var path = getHashPath();
	    var encodedPath = pathCoder.encodePath(path);

	    if (path !== encodedPath) {
	      // Always be sure we have a properly-encoded hash.
	      replaceHashPath(encodedPath);
	    } else {
	      var currentLocation = getCurrentLocation(pathCoder, queryKey);

	      if (prevLocation && currentLocation.key && prevLocation.key === currentLocation.key) return; // Ignore extraneous hashchange events

	      prevLocation = currentLocation;

	      listener(currentLocation);
	    }
	  };

	  // Ensure the hash is encoded properly.
	  var path = getHashPath();
	  var encodedPath = pathCoder.encodePath(path);

	  if (path !== encodedPath) replaceHashPath(encodedPath);

	  (0, _DOMUtils.addEventListener)(window, HashChangeEvent, handleHashChange);

	  return function () {
	    return (0, _DOMUtils.removeEventListener)(window, HashChangeEvent, handleHashChange);
	  };
	};

	var updateLocation = function updateLocation(location, pathCoder, queryKey, updateHash) {
	  var state = location.state;
	  var key = location.key;


	  var path = pathCoder.encodePath((0, _PathUtils.createPath)(location));

	  if (state !== undefined) {
	    path = (0, _PathUtils.addQueryStringValueToPath)(path, queryKey, key);
	    (0, _DOMStateStorage.saveState)(key, state);
	  }

	  prevLocation = location;

	  updateHash(path);
	};

	var pushLocation = exports.pushLocation = function pushLocation(location, pathCoder, queryKey) {
	  return updateLocation(location, pathCoder, queryKey, function (path) {
	    if (getHashPath() !== path) {
	      pushHashPath(path);
	    } else {
	       false ? (0, _warning2.default)(false, 'You cannot PUSH the same path using hash history') : void 0;
	    }
	  });
	};

	var replaceLocation = exports.replaceLocation = function replaceLocation(location, pathCoder, queryKey) {
	  return updateLocation(location, pathCoder, queryKey, function (path) {
	    if (getHashPath() !== path) replaceHashPath(path);
	  });
	};

/***/ },
/* 257 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.routerMiddleware = exports.routerActions = exports.goForward = exports.goBack = exports.go = exports.replace = exports.push = exports.CALL_HISTORY_METHOD = exports.routerReducer = exports.LOCATION_CHANGE = exports.syncHistoryWithStore = undefined;

	var _reducer = __webpack_require__(258);

	Object.defineProperty(exports, 'LOCATION_CHANGE', {
	  enumerable: true,
	  get: function get() {
	    return _reducer.LOCATION_CHANGE;
	  }
	});
	Object.defineProperty(exports, 'routerReducer', {
	  enumerable: true,
	  get: function get() {
	    return _reducer.routerReducer;
	  }
	});

	var _actions = __webpack_require__(259);

	Object.defineProperty(exports, 'CALL_HISTORY_METHOD', {
	  enumerable: true,
	  get: function get() {
	    return _actions.CALL_HISTORY_METHOD;
	  }
	});
	Object.defineProperty(exports, 'push', {
	  enumerable: true,
	  get: function get() {
	    return _actions.push;
	  }
	});
	Object.defineProperty(exports, 'replace', {
	  enumerable: true,
	  get: function get() {
	    return _actions.replace;
	  }
	});
	Object.defineProperty(exports, 'go', {
	  enumerable: true,
	  get: function get() {
	    return _actions.go;
	  }
	});
	Object.defineProperty(exports, 'goBack', {
	  enumerable: true,
	  get: function get() {
	    return _actions.goBack;
	  }
	});
	Object.defineProperty(exports, 'goForward', {
	  enumerable: true,
	  get: function get() {
	    return _actions.goForward;
	  }
	});
	Object.defineProperty(exports, 'routerActions', {
	  enumerable: true,
	  get: function get() {
	    return _actions.routerActions;
	  }
	});

	var _sync = __webpack_require__(260);

	var _sync2 = _interopRequireDefault(_sync);

	var _middleware = __webpack_require__(261);

	var _middleware2 = _interopRequireDefault(_middleware);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	exports.syncHistoryWithStore = _sync2['default'];
	exports.routerMiddleware = _middleware2['default'];

/***/ },
/* 258 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	exports.routerReducer = routerReducer;
	/**
	 * This action type will be dispatched when your history
	 * receives a location change.
	 */
	var LOCATION_CHANGE = exports.LOCATION_CHANGE = '@@router/LOCATION_CHANGE';

	var initialState = {
	  locationBeforeTransitions: null
	};

	/**
	 * This reducer will update the state with the most recent location history
	 * has transitioned to. This may not be in sync with the router, particularly
	 * if you have asynchronously-loaded routes, so reading from and relying on
	 * this state is discouraged.
	 */
	function routerReducer() {
	  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;

	  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
	      type = _ref.type,
	      payload = _ref.payload;

	  if (type === LOCATION_CHANGE) {
	    return _extends({}, state, { locationBeforeTransitions: payload });
	  }

	  return state;
	}

/***/ },
/* 259 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * This action type will be dispatched by the history actions below.
	 * If you're writing a middleware to watch for navigation events, be sure to
	 * look for actions of this type.
	 */
	var CALL_HISTORY_METHOD = exports.CALL_HISTORY_METHOD = '@@router/CALL_HISTORY_METHOD';

	function updateLocation(method) {
	  return function () {
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return {
	      type: CALL_HISTORY_METHOD,
	      payload: { method: method, args: args }
	    };
	  };
	}

	/**
	 * These actions correspond to the history API.
	 * The associated routerMiddleware will capture these events before they get to
	 * your reducer and reissue them as the matching function on your history.
	 */
	var push = exports.push = updateLocation('push');
	var replace = exports.replace = updateLocation('replace');
	var go = exports.go = updateLocation('go');
	var goBack = exports.goBack = updateLocation('goBack');
	var goForward = exports.goForward = updateLocation('goForward');

	var routerActions = exports.routerActions = { push: push, replace: replace, go: go, goBack: goBack, goForward: goForward };

/***/ },
/* 260 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	exports['default'] = syncHistoryWithStore;

	var _reducer = __webpack_require__(258);

	var defaultSelectLocationState = function defaultSelectLocationState(state) {
	  return state.routing;
	};

	/**
	 * This function synchronizes your history state with the Redux store.
	 * Location changes flow from history to the store. An enhanced history is
	 * returned with a listen method that responds to store updates for location.
	 *
	 * When this history is provided to the router, this means the location data
	 * will flow like this:
	 * history.push -> store.dispatch -> enhancedHistory.listen -> router
	 * This ensures that when the store state changes due to a replay or other
	 * event, the router will be updated appropriately and can transition to the
	 * correct router state.
	 */
	function syncHistoryWithStore(history, store) {
	  var _ref = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
	      _ref$selectLocationSt = _ref.selectLocationState,
	      selectLocationState = _ref$selectLocationSt === undefined ? defaultSelectLocationState : _ref$selectLocationSt,
	      _ref$adjustUrlOnRepla = _ref.adjustUrlOnReplay,
	      adjustUrlOnReplay = _ref$adjustUrlOnRepla === undefined ? true : _ref$adjustUrlOnRepla;

	  // Ensure that the reducer is mounted on the store and functioning properly.
	  if (typeof selectLocationState(store.getState()) === 'undefined') {
	    throw new Error('Expected the routing state to be available either as `state.routing` ' + 'or as the custom expression you can specify as `selectLocationState` ' + 'in the `syncHistoryWithStore()` options. ' + 'Ensure you have added the `routerReducer` to your store\'s ' + 'reducers via `combineReducers` or whatever method you use to isolate ' + 'your reducers.');
	  }

	  var initialLocation = void 0;
	  var isTimeTraveling = void 0;
	  var unsubscribeFromStore = void 0;
	  var unsubscribeFromHistory = void 0;
	  var currentLocation = void 0;

	  // What does the store say about current location?
	  var getLocationInStore = function getLocationInStore(useInitialIfEmpty) {
	    var locationState = selectLocationState(store.getState());
	    return locationState.locationBeforeTransitions || (useInitialIfEmpty ? initialLocation : undefined);
	  };

	  // Init initialLocation with potential location in store
	  initialLocation = getLocationInStore();

	  // If the store is replayed, update the URL in the browser to match.
	  if (adjustUrlOnReplay) {
	    var handleStoreChange = function handleStoreChange() {
	      var locationInStore = getLocationInStore(true);
	      if (currentLocation === locationInStore || initialLocation === locationInStore) {
	        return;
	      }

	      // Update address bar to reflect store state
	      isTimeTraveling = true;
	      currentLocation = locationInStore;
	      history.transitionTo(_extends({}, locationInStore, {
	        action: 'PUSH'
	      }));
	      isTimeTraveling = false;
	    };

	    unsubscribeFromStore = store.subscribe(handleStoreChange);
	    handleStoreChange();
	  }

	  // Whenever location changes, dispatch an action to get it in the store
	  var handleLocationChange = function handleLocationChange(location) {
	    // ... unless we just caused that location change
	    if (isTimeTraveling) {
	      return;
	    }

	    // Remember where we are
	    currentLocation = location;

	    // Are we being called for the first time?
	    if (!initialLocation) {
	      // Remember as a fallback in case state is reset
	      initialLocation = location;

	      // Respect persisted location, if any
	      if (getLocationInStore()) {
	        return;
	      }
	    }

	    // Tell the store to update by dispatching an action
	    store.dispatch({
	      type: _reducer.LOCATION_CHANGE,
	      payload: location
	    });
	  };
	  unsubscribeFromHistory = history.listen(handleLocationChange);

	  // support history 3.x
	  if (history.getCurrentLocation) {
	    handleLocationChange(history.getCurrentLocation());
	  }

	  // The enhanced history uses store as source of truth
	  return _extends({}, history, {
	    // The listeners are subscribed to the store instead of history
	    listen: function listen(listener) {
	      // Copy of last location.
	      var lastPublishedLocation = getLocationInStore(true);

	      // Keep track of whether we unsubscribed, as Redux store
	      // only applies changes in subscriptions on next dispatch
	      var unsubscribed = false;
	      var unsubscribeFromStore = store.subscribe(function () {
	        var currentLocation = getLocationInStore(true);
	        if (currentLocation === lastPublishedLocation) {
	          return;
	        }
	        lastPublishedLocation = currentLocation;
	        if (!unsubscribed) {
	          listener(lastPublishedLocation);
	        }
	      });

	      // History listeners expect a synchronous call. Make the first call to the
	      // listener after subscribing to the store, in case the listener causes a
	      // location change (e.g. when it redirects)
	      listener(lastPublishedLocation);

	      // Let user unsubscribe later
	      return function () {
	        unsubscribed = true;
	        unsubscribeFromStore();
	      };
	    },


	    // It also provides a way to destroy internal listeners
	    unsubscribe: function unsubscribe() {
	      if (adjustUrlOnReplay) {
	        unsubscribeFromStore();
	      }
	      unsubscribeFromHistory();
	    }
	  });
	}

/***/ },
/* 261 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports['default'] = routerMiddleware;

	var _actions = __webpack_require__(259);

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

	/**
	 * This middleware captures CALL_HISTORY_METHOD actions to redirect to the
	 * provided history object. This will prevent these actions from reaching your
	 * reducer or any middleware that comes after this one.
	 */
	function routerMiddleware(history) {
	  return function () {
	    return function (next) {
	      return function (action) {
	        if (action.type !== _actions.CALL_HISTORY_METHOD) {
	          return next(action);
	        }

	        var _action$payload = action.payload,
	            method = _action$payload.method,
	            args = _action$payload.args;

	        history[method].apply(history, _toConsumableArray(args));
	      };
	    };
	  };
	}

/***/ },
/* 262 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.reducer = undefined;

	var _reactRedux = __webpack_require__(187);

	var _App = __webpack_require__(263);

	var _App2 = _interopRequireDefault(_App);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var initialState = {
	  theme: 'skin-blue'
	};

	var themeAction = function themeAction(theme) {
	  return {
	    type: 'CHANGE_THEME',
	    theme: theme
	  };
	};

	var themeReducer = function themeReducer(state, action) {
	  switch (action.theme) {
	    case 'skin-black':
	    case 'skin-black-light':
	    case 'skin-blue':
	    case 'skin-blue-light':
	    case 'skin-green':
	    case 'skin-green-light':
	    case 'skin-purple':
	    case 'skin-purple-light':
	    case 'skin-red':
	    case 'skin-red-light':
	    case 'skin-yellow':
	    case 'skin-yellow-light':
	      return action.theme;
	    default:
	      return state;
	  }
	};

	var reducer = exports.reducer = function reducer() {
	  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
	  var action = arguments[1];

	  switch (action.type) {
	    case 'CHANGE_THEME':
	      return Object.assign({}, state, {
	        theme: themeReducer(state.theme, action)
	      });
	    default:
	      return state;
	  }
	};

	var mapStateToProps = function mapStateToProps(state) {
	  return {
	    theme: state.app.theme
	  };
	};

	var mapDispatchToProps = function mapDispatchToProps(dispatch) {
	  return {
	    pickTheme: function pickTheme(theme) {
	      return dispatch(themeAction(theme));
	    }
	  };
	};

	exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_App2.default);

/***/ },
/* 263 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _tinycolor = __webpack_require__(264);

	var _tinycolor2 = _interopRequireDefault(_tinycolor);

	var _package = __webpack_require__(265);

	var _package2 = _interopRequireDefault(_package);

	var _index = __webpack_require__(266);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/* eslint-disable no-alert */
	var navMenu = function navMenu() {
	  return [_react2.default.createElement(
	    _index.Header.Item,
	    {
	      href: 'https://github.com/' + _package2.default.user + '/' + _package2.default.name,
	      image: 'public/GitHub-Mark-120px-plus.png',
	      key: '1'
	    },
	    'Github'
	  ), _react2.default.createElement(_index.Header.UserMenu, {
	    name: 'Alexander Pierce',
	    image: 'public/user2-160x160.jpg',
	    signOutAction: function signOutAction() {
	      return alert('Sign out');
	    },
	    key: '2'
	  })];
	};

	var sb = function sb(pickTheme) {
	  return [_react2.default.createElement(_index.Sidebar.UserPanel, {
	    name: 'Alexander Pierce',
	    image: 'public/user2-160x160.jpg',
	    online: true,
	    key: '1'
	  }), _react2.default.createElement(_index.Sidebar.Search, { key: '2' }), _react2.default.createElement(
	    _index.Sidebar.Menu,
	    { header: 'MAIN NAVIGATION', key: '3' },
	    _react2.default.createElement(
	      _index.Sidebar.Menu.Item,
	      { icon: { className: 'fa-dashboard' }, title: 'Dashboard Colors' },
	      _react2.default.createElement(_index.Sidebar.Menu.Item, {
	        icon: { color: (0, _tinycolor2.default)('black').toString() },
	        onClick: function onClick() {
	          return pickTheme('skin-black');
	        },
	        title: 'Black'
	      }),
	      _react2.default.createElement(_index.Sidebar.Menu.Item, {
	        icon: { color: (0, _tinycolor2.default)('black').lighten(10).toString() },
	        onClick: function onClick() {
	          return pickTheme('skin-black-light');
	        },
	        title: 'Black Light'
	      }),
	      _react2.default.createElement(_index.Sidebar.Menu.Item, {
	        icon: { color: '#3c8dbc' },
	        onClick: function onClick() {
	          return pickTheme('skin-blue');
	        },
	        title: 'Blue'
	      }),
	      _react2.default.createElement(_index.Sidebar.Menu.Item, {
	        icon: { color: (0, _tinycolor2.default)('#3c8dbc').lighten(10).toString() },
	        onClick: function onClick() {
	          return pickTheme('skin-blue-light');
	        },
	        title: 'Blue Light'
	      }),
	      _react2.default.createElement(_index.Sidebar.Menu.Item, {
	        icon: { color: '#00a65a' },
	        onClick: function onClick() {
	          return pickTheme('skin-green');
	        },
	        title: 'Green'
	      }),
	      _react2.default.createElement(_index.Sidebar.Menu.Item, {
	        icon: { color: (0, _tinycolor2.default)('#00a65a').lighten(10).toString() },
	        onClick: function onClick() {
	          return pickTheme('skin-green-light');
	        },
	        title: 'Green Light'
	      }),
	      _react2.default.createElement(_index.Sidebar.Menu.Item, {
	        icon: { color: '#605ca8' },
	        onClick: function onClick() {
	          return pickTheme('skin-purple');
	        },
	        title: 'Purple'
	      }),
	      _react2.default.createElement(_index.Sidebar.Menu.Item, {
	        icon: { color: (0, _tinycolor2.default)('#605ca8').lighten(10).toString() },
	        onClick: function onClick() {
	          return pickTheme('skin-purple-light');
	        },
	        title: 'Purple Light'
	      }),
	      _react2.default.createElement(_index.Sidebar.Menu.Item, {
	        icon: { color: '#dd4b39' },
	        onClick: function onClick() {
	          return pickTheme('skin-red');
	        },
	        title: 'Red'
	      }),
	      _react2.default.createElement(_index.Sidebar.Menu.Item, {
	        icon: { color: (0, _tinycolor2.default)('#dd4b39').lighten(10).toString() },
	        onClick: function onClick() {
	          return pickTheme('skin-red-light');
	        },
	        title: 'Red Light'
	      }),
	      _react2.default.createElement(_index.Sidebar.Menu.Item, {
	        icon: { color: '#f39c12' },
	        onClick: function onClick() {
	          return pickTheme('skin-yellow');
	        },
	        title: 'Yellow'
	      }),
	      _react2.default.createElement(_index.Sidebar.Menu.Item, {
	        icon: { color: (0, _tinycolor2.default)('#f39c12').lighten(10).toString() },
	        onClick: function onClick() {
	          return pickTheme('skin-yellow-light');
	        },
	        title: 'Yellow Light'
	      })
	    ),
	    _react2.default.createElement(
	      _index.Sidebar.Menu.Item,
	      {
	        icon: { className: 'fa-files-o' },
	        labels: [{ key: 1, type: 'primary', text: '4' }],
	        title: 'Layout Options'
	      },
	      _react2.default.createElement(_index.Sidebar.Menu.Item, { title: 'Top Navigation' }),
	      _react2.default.createElement(_index.Sidebar.Menu.Item, { title: 'Boxed', href: '/boxed' }),
	      _react2.default.createElement(_index.Sidebar.Menu.Item, { title: 'Fixed' }),
	      _react2.default.createElement(_index.Sidebar.Menu.Item, { title: 'Collapsed Sidebar' })
	    ),
	    _react2.default.createElement(_index.Sidebar.Menu.Item, {
	      icon: { className: 'fa-th' },
	      labels: [{ key: 1, type: 'success', text: 'new' }],
	      title: 'Widgets'
	    }),
	    _react2.default.createElement(
	      _index.Sidebar.Menu.Item,
	      { icon: { className: 'fa-pie-chart' }, title: 'Charts' },
	      _react2.default.createElement(_index.Sidebar.Menu.Item, { title: 'ChartJS' }),
	      _react2.default.createElement(_index.Sidebar.Menu.Item, { title: 'Morris' }),
	      _react2.default.createElement(_index.Sidebar.Menu.Item, { title: 'Flot' }),
	      _react2.default.createElement(_index.Sidebar.Menu.Item, { title: 'Inline Charts' })
	    ),
	    _react2.default.createElement(
	      _index.Sidebar.Menu.Item,
	      { icon: { className: 'fa-laptop' }, title: 'UI Elements' },
	      _react2.default.createElement(_index.Sidebar.Menu.Item, { title: 'General' }),
	      _react2.default.createElement(_index.Sidebar.Menu.Item, { title: 'Icons' }),
	      _react2.default.createElement(_index.Sidebar.Menu.Item, { title: 'Buttons' }),
	      _react2.default.createElement(_index.Sidebar.Menu.Item, { title: 'Sliders' }),
	      _react2.default.createElement(_index.Sidebar.Menu.Item, { title: 'Timeline' }),
	      _react2.default.createElement(_index.Sidebar.Menu.Item, { title: 'Modals' })
	    ),
	    _react2.default.createElement(
	      _index.Sidebar.Menu.Item,
	      { icon: { className: 'fa-edit' }, title: 'Forms' },
	      _react2.default.createElement(_index.Sidebar.Menu.Item, { title: 'General Elements' }),
	      _react2.default.createElement(_index.Sidebar.Menu.Item, { title: 'Advanced Elements' }),
	      _react2.default.createElement(_index.Sidebar.Menu.Item, { title: 'Editors' })
	    ),
	    _react2.default.createElement(
	      _index.Sidebar.Menu.Item,
	      { icon: { className: 'fa-table' }, title: 'Tables' },
	      _react2.default.createElement(_index.Sidebar.Menu.Item, { title: 'Simple tables' }),
	      _react2.default.createElement(_index.Sidebar.Menu.Item, { title: 'Data tables' })
	    ),
	    _react2.default.createElement(_index.Sidebar.Menu.Item, {
	      icon: { className: 'fa-calendar' },
	      labels: [{ key: 1, type: 'primary', text: '17' }, { key: 2, type: 'danger', text: '3' }],
	      title: 'Calendar'
	    }),
	    _react2.default.createElement(_index.Sidebar.Menu.Item, {
	      icon: { className: 'fa-envelope' },
	      labels: [{ key: 2, type: 'success', text: '16' }, { key: 1, type: 'warning', text: '12' }, { key: 3, type: 'danger', text: '5' }],
	      title: 'Mailbox'
	    }),
	    _react2.default.createElement(
	      _index.Sidebar.Menu.Item,
	      { icon: { className: 'fa-folder' }, title: 'Examples' },
	      _react2.default.createElement(_index.Sidebar.Menu.Item, { title: 'Invoice' }),
	      _react2.default.createElement(_index.Sidebar.Menu.Item, { title: 'Profile' }),
	      _react2.default.createElement(_index.Sidebar.Menu.Item, { title: 'Login' }),
	      _react2.default.createElement(_index.Sidebar.Menu.Item, { title: 'Register' }),
	      _react2.default.createElement(_index.Sidebar.Menu.Item, { title: 'Lockscreen' }),
	      _react2.default.createElement(_index.Sidebar.Menu.Item, { title: '404 Error' }),
	      _react2.default.createElement(_index.Sidebar.Menu.Item, { title: '500 Error' }),
	      _react2.default.createElement(_index.Sidebar.Menu.Item, { title: 'Blank Page' }),
	      _react2.default.createElement(_index.Sidebar.Menu.Item, { title: 'Pace Page' })
	    ),
	    _react2.default.createElement(
	      _index.Sidebar.Menu.Item,
	      { icon: { className: 'fa-share' }, title: 'Multilevel' },
	      _react2.default.createElement(_index.Sidebar.Menu.Item, { title: 'Level One' }),
	      _react2.default.createElement(
	        _index.Sidebar.Menu.Item,
	        { title: 'Level One' },
	        _react2.default.createElement(_index.Sidebar.Menu.Item, { title: 'Level Two' }),
	        _react2.default.createElement(
	          _index.Sidebar.Menu.Item,
	          { title: 'Level Two' },
	          _react2.default.createElement(_index.Sidebar.Menu.Item, { title: 'Level Three' })
	        )
	      ),
	      _react2.default.createElement(_index.Sidebar.Menu.Item, { title: 'Level One' })
	    ),
	    _react2.default.createElement(_index.Sidebar.Menu.Item, { active: true, icon: { className: 'fa-book' }, title: 'Documentation' })
	  ), _react2.default.createElement(
	    _index.Sidebar.Menu,
	    { header: 'LABELS', key: '4' },
	    _react2.default.createElement(_index.Sidebar.Menu.Item, { icon: { color: 'danger' }, title: 'Danger' }),
	    _react2.default.createElement(_index.Sidebar.Menu.Item, { icon: { color: 'warning' }, title: 'Warning' }),
	    _react2.default.createElement(_index.Sidebar.Menu.Item, { icon: { color: 'information' }, title: 'Information' })
	  )];
	};

	var App = function App(_ref) {
	  var children = _ref.children,
	      theme = _ref.theme,
	      pickTheme = _ref.pickTheme;
	  return _react2.default.createElement(
	    _index.Dashboard,
	    {
	      navbarChildren: navMenu(),
	      sidebarChildren: sb(pickTheme),
	      sidebarMini: true,
	      theme: theme
	    },
	    children
	  );
	};

	 false ? App.propTypes = {
	  children: _react2.default.PropTypes.node,
	  pickTheme: _react2.default.PropTypes.func,
	  theme: _react2.default.PropTypes.string
	} : void 0;

	exports.default = App;

/***/ },
/* 264 */,
/* 265 */
/***/ function(module, exports) {

	module.exports = {
		"name": "react-adminlte-dash",
		"description": "React.js components for AdminLTE themed dashboard",
		"author": "Nate Greene <nate.greene@gmail.com>",
		"user": "zksailor534",
		"version": "0.2.0",
		"scripts": {
			"start": "webpack-dev-server",
			"test": "jest --",
			"test:coverage": "jest --coverage --",
			"test:watch": "jest --watch --",
			"test:lint": "eslint . --ext .js --ext .jsx --ignore-path .gitignore --ignore-pattern dist --cache",
			"test:update": "jest -u",
			"gh-pages": "webpack",
			"gh-pages:deploy": "gh-pages -d gh-pages",
			"gh-pages:stats": "webpack --profile --json > stats.json",
			"dist": "webpack",
			"dist:min": "webpack",
			"preversion": "npm run test && npm run dist && npm run dist:min",
			"prepublish": "npm run dist:min",
			"postpublish": "npm run gh-pages && npm run gh-pages:deploy",
			"postinstall": "node lib/post_install.js"
		},
		"main": "dist-modules",
		"module": "src",
		"jsnext:main": "src",
		"devDependencies": {
			"babel-cli": "^6.18.0",
			"babel-core": "^6.18.2",
			"babel-eslint": "^7.1.1",
			"babel-jest": "^17.0.2",
			"babel-loader": "^6.2.8",
			"babel-plugin-transform-react-remove-prop-types": "^0.2.11",
			"babel-preset-es2015": "^6.18.0",
			"babel-preset-react": "^6.16.0",
			"babel-preset-react-hmre": "^1.1.1",
			"clean-webpack-plugin": "^0.1.14",
			"copy-webpack-plugin": "^4.0.1",
			"css-loader": "^0.26.1",
			"enzyme": "^2.7.0",
			"enzyme-to-json": "^1.4.5",
			"eslint": "^3.11.1",
			"eslint-config-airbnb": "^13.0.0",
			"eslint-loader": "^1.6.1",
			"eslint-plugin-import": "^2.2.0",
			"eslint-plugin-jsx-a11y": "^2.2.3",
			"eslint-plugin-react": "^6.8.0",
			"extract-text-webpack-plugin": "^1.0.1",
			"file-loader": "^0.9.0",
			"font-awesome": "^4.7.0",
			"gh-pages": "^0.12.0",
			"git-prepush-hook": "^1.0.1",
			"html-webpack-plugin": "^2.24.1",
			"html-webpack-template": "^5.4.2",
			"jest": "^17.0.3",
			"json-loader": "^0.5.4",
			"raw-loader": "^0.5.1",
			"react": "^15.4.1",
			"react-addons-test-utils": "^15.4.1",
			"react-dom": "^15.4.1",
			"react-github-corner": "^0.3.0",
			"react-redux": "^5.0.1",
			"react-remarkable": "^1.1.1",
			"react-router": "^3.0.0",
			"react-router-redux": "^4.0.7",
			"react-test-renderer": "^15.4.1",
			"redux": "^3.6.0",
			"style-loader": "^0.13.1",
			"styled-components": "^1.1.3",
			"sync-exec": "^0.6.2",
			"system-bell-webpack-plugin": "^1.0.0",
			"tinycolor2": "^1.4.1",
			"url-loader": "^0.5.7",
			"webpack": "^1.13.3",
			"webpack-dev-server": "^1.16.2",
			"webpack-merge": "^1.0.2"
		},
		"peerDependencies": {
			"react": ">= 15.0.0 < 16.0.0"
		},
		"repository": {
			"type": "git",
			"url": "https://github.com/zksailor534/react-adminlte-dash.git"
		},
		"homepage": "https://zksailor534.github.io/react-adminlte-dash/",
		"bugs": {
			"url": "https://github.com/zksailor534/react-adminlte-dash/issues"
		},
		"jest": {
			"collectCoverage": true,
			"moduleFileExtensions": [
				"js",
				"jsx"
			],
			"moduleDirectories": [
				"node_modules",
				"packages"
			]
		},
		"keywords": [
			"react",
			"reactjs",
			"adminlte",
			"admin",
			"dashboard"
		],
		"license": "MIT",
		"pre-push": [
			"test"
		]
	};

/***/ },
/* 266 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _Dashboard = __webpack_require__(267);

	var _Dashboard2 = _interopRequireDefault(_Dashboard);

	var _Header = __webpack_require__(337);

	var _Header2 = _interopRequireDefault(_Header);

	var _Sidebar = __webpack_require__(345);

	var _Sidebar2 = _interopRequireDefault(_Sidebar);

	__webpack_require__(374);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = {
	  Dashboard: _Dashboard2.default,
	  Header: _Header2.default,
	  Sidebar: _Sidebar2.default
	};

/***/ },
/* 267 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _templateObject = _taggedTemplateLiteral(['\n  /* clearfix */\n  &:before, &:after {\n    display: table;\n    content: " ";\n    -webkit-box-sizing: border-box;\n    -moz-box-sizing: border-box;\n    box-sizing: border-box;\n  }\n  &:after {\n    clear: both;\n  }\n\n  /* theme */\n  ', '\n\n  min-height: 100%;\n  position: relative;\n  overflow: hidden;\n\n  ', '\n'], ['\n  /* clearfix */\n  &:before, &:after {\n    display: table;\n    content: " ";\n    -webkit-box-sizing: border-box;\n    -moz-box-sizing: border-box;\n    box-sizing: border-box;\n  }\n  &:after {\n    clear: both;\n  }\n\n  /* theme */\n  ', '\n\n  min-height: 100%;\n  position: relative;\n  overflow: hidden;\n\n  ', '\n']);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _styledComponents = __webpack_require__(268);

	var _styledComponents2 = _interopRequireDefault(_styledComponents);

	var _Header = __webpack_require__(337);

	var _Header2 = _interopRequireDefault(_Header);

	var _Sidebar = __webpack_require__(345);

	var _Sidebar2 = _interopRequireDefault(_Sidebar);

	var _Content = __webpack_require__(350);

	var _Content2 = _interopRequireDefault(_Content);

	var _styles = __webpack_require__(351);

	var _styles2 = _interopRequireDefault(_styles);

	var _variables = __webpack_require__(340);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); } /* eslint-disable react/jsx-filename-extension */


	var StyledDashboard = _styledComponents2.default.div(_templateObject, function (props) {
	  return props.theme.sidebarBg && 'background-color: ' + props.theme.sidebarBg + ';';
	}, function (props) {
	  return props.boxed && '\n    max-width: ' + _variables.boxedLayoutMaxWidth + ';\n    margin: 0 auto;\n    min-height: 100%;\n    box-shadow: 0 0 8px rgba(0, 0, 0, 0.5);\n    position: relative;\n  ';
	});

	var Dashboard = function (_React$Component) {
	  _inherits(Dashboard, _React$Component);

	  function Dashboard(props) {
	    _classCallCheck(this, Dashboard);

	    var _this = _possibleConstructorReturn(this, (Dashboard.__proto__ || Object.getPrototypeOf(Dashboard)).call(this, props));

	    _this.state = {
	      sidebarCollapse: false
	    };
	    _this._sidebarToggle = _this.sidebarToggle.bind(_this);
	    return _this;
	  }

	  _createClass(Dashboard, [{
	    key: 'sidebarToggle',
	    value: function sidebarToggle() {
	      this.setState({
	        sidebarCollapse: !this.state.sidebarCollapse
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var theme = _styles2.default[this.props.theme];
	      return _react2.default.createElement(
	        StyledDashboard,
	        null,
	        _react2.default.createElement(
	          _styledComponents.ThemeProvider,
	          { theme: theme },
	          _react2.default.createElement(
	            _Header2.default,
	            {
	              logoLg: this.props.logoLg,
	              logoSm: this.props.logoSm,
	              fixed: this.props.fixed,
	              sidebarToggle: this._sidebarToggle,
	              sidebarCollapse: this.state.sidebarCollapse,
	              sidebarMini: this.props.sidebarMini
	            },
	            this.props.navbarChildren
	          )
	        ),
	        _react2.default.createElement(
	          _styledComponents.ThemeProvider,
	          { theme: theme },
	          _react2.default.createElement(
	            _Sidebar2.default,
	            {
	              fixed: this.props.fixed,
	              sidebarCollapse: this.state.sidebarCollapse,
	              sidebarMini: this.props.sidebarMini
	            },
	            this.props.sidebarChildren
	          )
	        ),
	        _react2.default.createElement(
	          _styledComponents.ThemeProvider,
	          { theme: theme },
	          _react2.default.createElement(
	            _Content2.default,
	            {
	              fixed: this.props.fixed,
	              sidebarCollapse: this.state.sidebarCollapse,
	              sidebarMini: this.props.sidebarMini
	            },
	            this.props.children
	          )
	        )
	      );
	    }
	  }]);

	  return Dashboard;
	}(_react2.default.Component);

	 false ? Dashboard.propTypes = {
	  children: _react2.default.PropTypes.node,
	  logoLg: _react2.default.PropTypes.element,
	  logoSm: _react2.default.PropTypes.element,
	  navbarChildren: _react2.default.PropTypes.node,
	  sidebarChildren: _react2.default.PropTypes.node,
	  fixed: _react2.default.PropTypes.bool,
	  sidebarMini: _react2.default.PropTypes.bool,
	  theme: _react2.default.PropTypes.string
	} : void 0;

	Dashboard.defaultProps = {
	  fixed: false,
	  sidebarMini: false,
	  theme: 'skin-blue'
	};

	exports.default = Dashboard;

/***/ },
/* 268 */,
/* 269 */,
/* 270 */,
/* 271 */,
/* 272 */,
/* 273 */,
/* 274 */,
/* 275 */,
/* 276 */,
/* 277 */,
/* 278 */,
/* 279 */,
/* 280 */,
/* 281 */,
/* 282 */,
/* 283 */,
/* 284 */,
/* 285 */,
/* 286 */,
/* 287 */,
/* 288 */,
/* 289 */,
/* 290 */,
/* 291 */,
/* 292 */,
/* 293 */,
/* 294 */,
/* 295 */,
/* 296 */,
/* 297 */,
/* 298 */,
/* 299 */,
/* 300 */,
/* 301 */,
/* 302 */,
/* 303 */,
/* 304 */,
/* 305 */,
/* 306 */,
/* 307 */,
/* 308 */,
/* 309 */,
/* 310 */,
/* 311 */,
/* 312 */,
/* 313 */,
/* 314 */,
/* 315 */,
/* 316 */,
/* 317 */,
/* 318 */,
/* 319 */,
/* 320 */,
/* 321 */,
/* 322 */,
/* 323 */,
/* 324 */,
/* 325 */,
/* 326 */,
/* 327 */,
/* 328 */,
/* 329 */,
/* 330 */,
/* 331 */,
/* 332 */,
/* 333 */,
/* 334 */,
/* 335 */,
/* 336 */,
/* 337 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _templateObject = _taggedTemplateLiteral(['\n  /* clearfix */\n  &:before, &:after {\n    display: table;\n    content: " ";\n    -webkit-box-sizing: border-box;\n    -moz-box-sizing: border-box;\n    box-sizing: border-box;\n  }\n  &:after {\n    clear: both;\n  }\n\n  position: ', ';\n  width: ', ';\n  max-height: 100px;\n  z-index: 1030;\n\n  /* theme */\n  ', '\n'], ['\n  /* clearfix */\n  &:before, &:after {\n    display: table;\n    content: " ";\n    -webkit-box-sizing: border-box;\n    -moz-box-sizing: border-box;\n    box-sizing: border-box;\n  }\n  &:after {\n    clear: both;\n  }\n\n  position: ', ';\n  width: ', ';\n  max-height: 100px;\n  z-index: 1030;\n\n  /* theme */\n  ', '\n']);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _styledComponents = __webpack_require__(268);

	var _styledComponents2 = _interopRequireDefault(_styledComponents);

	var _Navbar = __webpack_require__(338);

	var _Navbar2 = _interopRequireDefault(_Navbar);

	var _Logo = __webpack_require__(341);

	var _Logo2 = _interopRequireDefault(_Logo);

	var _UserMenu = __webpack_require__(342);

	var _UserMenu2 = _interopRequireDefault(_UserMenu);

	var _NavItem = __webpack_require__(344);

	var _NavItem2 = _interopRequireDefault(_NavItem);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); } /* eslint-disable react/jsx-filename-extension */


	var StyledHeader = _styledComponents2.default.header(_templateObject, function (props) {
	  return props.fixed ? 'fixed' : 'relative';
	}, function (props) {
	  return props.boxed ? '1024px' : '100%';
	}, function (props) {
	  return props.theme.headerBoxShadow && '\n    -webkit-box-shadow: ' + props.theme.headerBoxShadow + ';\n    box-shadow: ' + props.theme.headerBoxShadow + ';\n  ';
	});

	var Header = function Header(props) {
	  return _react2.default.createElement(
	    StyledHeader,
	    { fixed: props.fixed },
	    _react2.default.createElement(_Logo2.default, {
	      collapse: props.sidebarCollapse,
	      sidebarMini: props.sidebarMini,
	      href: '#',
	      logoLg: props.logoLg,
	      logoSm: props.logoSm
	    }),
	    _react2.default.createElement(
	      _Navbar2.default,
	      {
	        toggle: props.sidebarToggle,
	        collapse: props.sidebarCollapse,
	        sidebarMini: props.sidebarMini
	      },
	      props.children
	    )
	  );
	};

	 false ? Header.propTypes = {
	  children: _react2.default.PropTypes.node,
	  fixed: _react2.default.PropTypes.bool,
	  logoLg: _react2.default.PropTypes.element,
	  logoSm: _react2.default.PropTypes.element,
	  sidebarMini: _react2.default.PropTypes.bool,
	  sidebarCollapse: _react2.default.PropTypes.bool,
	  sidebarToggle: _react2.default.PropTypes.func.isRequired
	} : void 0;

	Header.defaultProps = {
	  fixed: false,
	  sidebarMini: false,
	  sidebarCollapse: false,
	  logoLg: _react2.default.createElement(
	    'span',
	    null,
	    _react2.default.createElement(
	      'b',
	      null,
	      'Admin'
	    ),
	    'LTE'
	  ),
	  logoSm: _react2.default.createElement(
	    'span',
	    null,
	    _react2.default.createElement(
	      'b',
	      null,
	      'A'
	    ),
	    'LT'
	  )
	};

	Header.UserMenu = _UserMenu2.default;
	Header.Item = _NavItem2.default;

	exports.default = Header;

/***/ },
/* 338 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _templateObject = _taggedTemplateLiteral(['\n  -webkit-margin-before: 1em;\n  -webkit-margin-after: 1em;\n  -webkit-margin-start: 0px;\n  -webkit-margin-end: 0px;\n  -webkit-padding-start: 40px;\n  box-sizing: border-box;\n  display: block;\n  list-style: none;\n  margin: 0;\n  padding: 0;\n\n  /* media queries */\n  @media (max-width: ', ') {\n    float: left;\n  }\n  @media (min-width: ', ') {\n    float: right;\n  }\n'], ['\n  -webkit-margin-before: 1em;\n  -webkit-margin-after: 1em;\n  -webkit-margin-start: 0px;\n  -webkit-margin-end: 0px;\n  -webkit-padding-start: 40px;\n  box-sizing: border-box;\n  display: block;\n  list-style: none;\n  margin: 0;\n  padding: 0;\n\n  /* media queries */\n  @media (max-width: ', ') {\n    float: left;\n  }\n  @media (min-width: ', ') {\n    float: right;\n  }\n']),
	    _templateObject2 = _taggedTemplateLiteral(['\n  box-sizing: border-box;\n  display: block;\n  float: right;\n'], ['\n  box-sizing: border-box;\n  display: block;\n  float: right;\n']),
	    _templateObject3 = _taggedTemplateLiteral(['\n  /* clearfix */\n  &:before, &:after {\n    display: table;\n    content: " ";\n    box-sizing: border-box;\n  }\n  &:after {\n    clear: both;\n  }\n\n  /* transitions */\n  -webkit-transition: margin-left ', ' ', ';\n  -o-transition: margin-left ', ' ', ';\n  transition: margin-left ', ' ', ';\n\n  color: ', ';\n  display: block;\n  font-weight: 400;\n  position: relative;\n  min-height: ', ';\n  z-index: 1000;\n  margin-bottom: 0;\n  margin-left: ', ';\n  border: none;\n  border-radius: 0;\n  background-color: ', ';\n\n  /* media queries */\n  @media (max-width: ', ') {\n    width: 100%;\n    float: none;\n    margin: 0;\n  }\n  @media (min-width: ', ') {\n    margin-left: ', ';\n  }\n'], ['\n  /* clearfix */\n  &:before, &:after {\n    display: table;\n    content: " ";\n    box-sizing: border-box;\n  }\n  &:after {\n    clear: both;\n  }\n\n  /* transitions */\n  -webkit-transition: margin-left ', ' ', ';\n  -o-transition: margin-left ', ' ', ';\n  transition: margin-left ', ' ', ';\n\n  color: ', ';\n  display: block;\n  font-weight: 400;\n  position: relative;\n  min-height: ', ';\n  z-index: 1000;\n  margin-bottom: 0;\n  margin-left: ', ';\n  border: none;\n  border-radius: 0;\n  background-color: ', ';\n\n  /* media queries */\n  @media (max-width: ', ') {\n    width: 100%;\n    float: none;\n    margin: 0;\n  }\n  @media (min-width: ', ') {\n    margin-left: ', ';\n  }\n']);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _styledComponents = __webpack_require__(268);

	var _styledComponents2 = _interopRequireDefault(_styledComponents);

	var _ToggleButton = __webpack_require__(339);

	var _ToggleButton2 = _interopRequireDefault(_ToggleButton);

	var _variables = __webpack_require__(340);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); } /* eslint-disable react/jsx-filename-extension */


	var StyledNavbarMenuList = _styledComponents2.default.ul(_templateObject, _variables.screenHeaderCollapse, _variables.screenSmMin);

	var StyledNavbarMenu = _styledComponents2.default.div(_templateObject2);

	var StyledNavbar = _styledComponents2.default.nav(_templateObject3, _variables.transitionSpeed, _variables.transitionFn, _variables.transitionSpeed, _variables.transitionFn, _variables.transitionSpeed, _variables.transitionFn, function (props) {
	  return props.theme.navbarFontColor || '#333';
	}, _variables.navbarHeight, function (props) {
	  return props.topNav ? '0' : _variables.sidebarWidth;
	}, function (props) {
	  return props.theme.backgroundColor || '#fff';
	}, _variables.screenHeaderCollapse, _variables.screenSmMin, function (props) {
	  return !props.topNav && props.sidebarMini && props.collapse ? _variables.sidebarMiniWidth : _variables.sidebarWidth;
	});

	var Navbar = function Navbar(props) {
	  return _react2.default.createElement(
	    StyledNavbar,
	    {
	      topNav: props.topNav,
	      sidebarMini: props.sidebarMini,
	      collapse: props.collapse
	    },
	    _react2.default.createElement(_ToggleButton2.default, { className: 'fa fa-bars', onClick: props.toggle }),
	    _react2.default.createElement(
	      StyledNavbarMenu,
	      null,
	      _react2.default.createElement(
	        StyledNavbarMenuList,
	        null,
	        props.children
	      )
	    )
	  );
	};

	 false ? Navbar.propTypes = {
	  children: _react2.default.PropTypes.node,
	  toggle: _react2.default.PropTypes.func.isRequired,
	  topNav: _react2.default.PropTypes.bool,
	  sidebarMini: _react2.default.PropTypes.bool,
	  collapse: _react2.default.PropTypes.bool
	} : void 0;

	exports.default = Navbar;

/***/ },
/* 339 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _templateObject = _taggedTemplateLiteral(['\n  /* shared */\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  font-weight: ', ';\n  overflow-x: hidden;\n  overflow-y: auto;\n  font-size: ', ';\n  box-sizing: border-box;\n\n  float: left;\n  background-color: transparent;\n  background-image: none;\n  border: none;\n  outline: none;\n  padding: ', 'px ', ';\n  text-decoration: none;\n  &:focus,\n  &:active {\n    background: transparent;\n  }\n\n  /* theme */\n  color: ', ';\n  ', ';\n  &:hover {\n    color: ', ';\n    background-color: ', ';\n  }\n'], ['\n  /* shared */\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  font-weight: ', ';\n  overflow-x: hidden;\n  overflow-y: auto;\n  font-size: ', ';\n  box-sizing: border-box;\n\n  float: left;\n  background-color: transparent;\n  background-image: none;\n  border: none;\n  outline: none;\n  padding: ', 'px ', ';\n  text-decoration: none;\n  &:focus,\n  &:active {\n    background: transparent;\n  }\n\n  /* theme */\n  color: ', ';\n  ', ';\n  &:hover {\n    color: ', ';\n    background-color: ', ';\n  }\n']);

	var _styledComponents = __webpack_require__(268);

	var _styledComponents2 = _interopRequireDefault(_styledComponents);

	var _variables = __webpack_require__(340);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

	var ToggleButton = _styledComponents2.default.button(_templateObject, _variables.fontWeightBase, _variables.fontSizeBase, parseInt(_variables.navbarPaddingVertical, 10) + 3, _variables.navbarPaddingHorizontal, function (props) {
	  return props.theme.navbarFontColor || '#fff';
	}, function (props) {
	  return props.theme.navbarItemBorder && '\n    border-right: ' + props.theme.navbarItemBorder + ';\n  ';
	}, function (props) {
	  return props.theme.navbarHoverColor || '#fff';
	}, function (props) {
	  return props.theme.logoBgColor || 'transparent';
	});

	exports.default = ToggleButton;

/***/ },
/* 340 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.navbarItemVariant = exports.sidebarVariant = exports.logoVariant = exports.navbarVariant = exports.transitionFn = exports.transitionSpeed = exports.attachmentBorderRadius = exports.directChatDefaultMsgBorderColor = exports.directChatDefaultFontColor = exports.directChatDefaultMsgBg = exports.directChatHeight = exports.btnBorderRadius = exports.inputRadius = exports.progressBarXsBorderRadius = exports.progressBarSmBorderRadius = exports.progressBarBorderRadius = exports.btnBoxshadow = exports.boxDefaultBorderTopColor = exports.boxPadding = exports.boxBoxshadow = exports.boxFooterBg = exports.boxBorderRadius = exports.boxBorderColor = exports.controlSidebarWidth = exports.sidebarLightSubmenuHoverColor = exports.sidebarLightSubmenuColor = exports.sidebarLightSubmenuBg = exports.sidebarLightHoverColor = exports.sidebarLightColor = exports.sidebarLightHoverBg = exports.sidebarLightBg = exports.sidebarDarkSubmenuHoverColor = exports.sidebarDarkSubmenuColor = exports.sidebarDarkSubmenuBg = exports.sidebarDarkHoverColor = exports.sidebarDarkColor = exports.sidebarDarkHoverBg = exports.sidebarDarkBg = exports.bodyBg = exports.linkHoverColor = exports.linkColor = exports.screenHeaderCollapse = exports.boxedLayoutMaxWidth = exports.sidebarMiniWidth = exports.sidebarWidth = exports.navbarPaddingVertical = exports.navbarPaddingHorizontal = exports.navbarHeight = exports.gridGutterWidth = exports.lineHeightComputed = exports.fontWeightBase = exports.lineHeightBase = exports.fontSizeBase = exports.fontFamilyBase = exports.screenMdMax = exports.screenSmMax = exports.screenXsMax = exports.screenLgMin = exports.screenMdMin = exports.screenSmMin = exports.white = exports.gray = exports.black = exports.maroon = exports.purple = exports.fuchsia = exports.orange = exports.lime = exports.olive = exports.teal = exports.navy = exports.blue = exports.yellow = exports.aqua = exports.green = exports.red = exports.lightBlue = exports.baseColor = undefined;

	var _tinycolor = __webpack_require__(264);

	var _tinycolor2 = _interopRequireDefault(_tinycolor);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// COLORS
	// --------------------------------------------------------
	var baseColor = exports.baseColor = '#333';
	// Primary
	/* eslint-disable import/prefer-default-export */
	var lightBlue = exports.lightBlue = '#3c8dbc';
	// Danger
	var red = exports.red = '#dd4b39';
	// Success
	var green = exports.green = '#00a65a';
	// Info
	var aqua = exports.aqua = '#00c0ef';
	// Warning
	var yellow = exports.yellow = '#f39c12';
	var blue = exports.blue = '#0073b7';
	var navy = exports.navy = '#001f3f';
	var teal = exports.teal = '#39cccc';
	var olive = exports.olive = '#3d9970';
	var lime = exports.lime = '#01ff70';
	var orange = exports.orange = '#ff851b';
	var fuchsia = exports.fuchsia = '#f012be';
	var purple = exports.purple = '#605ca8';
	var maroon = exports.maroon = '#d81b60';
	var black = exports.black = '#111';
	var gray = exports.gray = '#d2d6de';
	var white = exports.white = '#fff';

	// LAYOUT
	// --------------------------------------------------------

	// BOOTSTRAP
	// Screen sizes
	// Small screen / tablet
	var screenSmMin = exports.screenSmMin = '768px';
	// Medium screen / desktop
	var screenMdMin = exports.screenMdMin = '992px';
	// Large screen / wide desktop
	var screenLgMin = exports.screenLgMin = '1200px';
	// So media queries don't overlap when required, provide a maximum
	var screenXsMax = exports.screenXsMax = parseInt(screenSmMin, 10) - 1 + 'px';
	var screenSmMax = exports.screenSmMax = parseInt(screenMdMin, 10) - 1 + 'px';
	var screenMdMax = exports.screenMdMax = parseInt(screenLgMin, 10) - 1 + 'px';
	// Boostrap sizing
	var fontFamilyBase = exports.fontFamilyBase = "'Source Sans Pro','Helvetica Neue',Helvetica,Arial,sans-serif";
	var fontSizeBase = exports.fontSizeBase = '14px';
	var lineHeightBase = exports.lineHeightBase = 1.428571429;
	var fontWeightBase = exports.fontWeightBase = '400';
	var lineHeightComputed = exports.lineHeightComputed = Math.floor(parseInt(fontSizeBase, 10) * lineHeightBase) + 'px';
	var gridGutterWidth = exports.gridGutterWidth = '30px';

	// Navbar heights
	var navbarHeight = exports.navbarHeight = '50px';
	var navbarPaddingHorizontal = exports.navbarPaddingHorizontal = Math.floor(parseInt(gridGutterWidth, 10) / 2) + 'px';
	var navbarPaddingVertical = exports.navbarPaddingVertical = (parseInt(navbarHeight, 10) - parseInt(lineHeightComputed, 10)) / 2 + 'px';
	// Side bar and logo width
	var sidebarWidth = exports.sidebarWidth = '230px';
	var sidebarMiniWidth = exports.sidebarMiniWidth = '50px';
	// Boxed layout maximum width
	var boxedLayoutMaxWidth = exports.boxedLayoutMaxWidth = '1024px';
	// When the logo should go to the top of the screen
	var screenHeaderCollapse = exports.screenHeaderCollapse = screenXsMax;

	// Link colors (Aka = <a> tags)
	var linkColor = exports.linkColor = lightBlue;
	var linkHoverColor = exports.linkHoverColor = (0, _tinycolor2.default)(linkColor).lighten(15).toString();

	// Body background (Affects main content background only)
	var bodyBg = exports.bodyBg = '#ecf0f5';

	// SIDEBAR SKINS
	// --------------------------------------------------------

	// Dark sidebar
	var sidebarDarkBg = exports.sidebarDarkBg = '#222d32';
	var sidebarDarkHoverBg = exports.sidebarDarkHoverBg = (0, _tinycolor2.default)(sidebarDarkBg).darken(2).toString();
	var sidebarDarkColor = exports.sidebarDarkColor = (0, _tinycolor2.default)(sidebarDarkBg).lighten(60).toString();
	var sidebarDarkHoverColor = exports.sidebarDarkHoverColor = '#fff';
	var sidebarDarkSubmenuBg = exports.sidebarDarkSubmenuBg = (0, _tinycolor2.default)(sidebarDarkBg).lighten(5).toString();
	var sidebarDarkSubmenuColor = exports.sidebarDarkSubmenuColor = (0, _tinycolor2.default)(sidebarDarkSubmenuBg).lighten(40).toString();
	var sidebarDarkSubmenuHoverColor = exports.sidebarDarkSubmenuHoverColor = '#fff';

	// Light sidebar
	var sidebarLightBg = exports.sidebarLightBg = '#f9fafc';
	var sidebarLightHoverBg = exports.sidebarLightHoverBg = (0, _tinycolor2.default)('#f0f0f1').lighten(1.5).toString();
	var sidebarLightColor = exports.sidebarLightColor = '#444';
	var sidebarLightHoverColor = exports.sidebarLightHoverColor = '#000';
	var sidebarLightSubmenuBg = exports.sidebarLightSubmenuBg = sidebarLightHoverBg;
	var sidebarLightSubmenuColor = exports.sidebarLightSubmenuColor = '#777';
	var sidebarLightSubmenuHoverColor = exports.sidebarLightSubmenuHoverColor = '#000';

	// CONTROL SIDEBAR
	//--------------------------------------------------------
	var controlSidebarWidth = exports.controlSidebarWidth = sidebarWidth;

	// BOXES
	//--------------------------------------------------------
	var boxBorderColor = exports.boxBorderColor = '#f4f4f4';
	var boxBorderRadius = exports.boxBorderRadius = '3px';
	var boxFooterBg = exports.boxFooterBg = '#fff';
	var boxBoxshadow = exports.boxBoxshadow = '0 1px 1px rgba(0, 0, 0, .1)';
	var boxPadding = exports.boxPadding = '10px';

	// Box variants
	var boxDefaultBorderTopColor = exports.boxDefaultBorderTopColor = '#d2d6de';

	// BUTTONS
	//--------------------------------------------------------
	var btnBoxshadow = exports.btnBoxshadow = 'none';

	// PROGRESS BARS
	//--------------------------------------------------------
	var progressBarBorderRadius = exports.progressBarBorderRadius = '1px';
	var progressBarSmBorderRadius = exports.progressBarSmBorderRadius = '1px';
	var progressBarXsBorderRadius = exports.progressBarXsBorderRadius = '1px';

	// FORMS
	//--------------------------------------------------------
	var inputRadius = exports.inputRadius = '0';

	// BUTTONS
	//--------------------------------------------------------

	// Border radius for non flat buttons
	var btnBorderRadius = exports.btnBorderRadius = '3px';

	// DIRECT CHAT
	//--------------------------------------------------------
	var directChatHeight = exports.directChatHeight = '250px';
	var directChatDefaultMsgBg = exports.directChatDefaultMsgBg = gray;
	var directChatDefaultFontColor = exports.directChatDefaultFontColor = '#444';
	var directChatDefaultMsgBorderColor = exports.directChatDefaultMsgBorderColor = gray;

	// CHAT WIDGET
	//--------------------------------------------------------
	var attachmentBorderRadius = exports.attachmentBorderRadius = '3px';

	// TRANSITIONS SETTINGS
	//--------------------------------------------------------

	// Transition global options
	var transitionSpeed = exports.transitionSpeed = '.3s';
	var transitionFn = exports.transitionFn = 'ease-in-out';

	// MIXINS
	//--------------------------------------------------------
	var navbarVariant = exports.navbarVariant = function navbarVariant(color) {
	  var fontColor = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'rgba(255, 255, 255, 0.8)';
	  var hoverColor = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '#f6f6f6';
	  var hoverBg = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'rgba(0, 0, 0, 0.1)';
	  return {
	    backgroundColor: color,
	    navbarFontColor: fontColor,
	    navbarHoverColor: hoverColor,
	    navbarHoverBg: hoverBg
	  };
	};

	var logoVariant = exports.logoVariant = function logoVariant(bgColor) {
	  var color = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '#fff';
	  var borderBottomColor = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'transparent';
	  var borderBottomWidth = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '0';
	  return {
	    logoBgColor: bgColor,
	    logoColor: color,
	    logoBorderBottom: borderBottomWidth + ' solid ' + borderBottomColor,
	    logoHover: (0, _tinycolor2.default)(bgColor).darken(1).toString()
	  };
	};

	var sidebarVariant = exports.sidebarVariant = function sidebarVariant(color) {
	  var light = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
	  return !light ? {
	    sidebarBg: sidebarDarkBg,
	    userPanelColor: '#fff',
	    sidebarHeaderColor: (0, _tinycolor2.default)(sidebarDarkBg).lighten(20).toString(),
	    sidebarHeaderBg: (0, _tinycolor2.default)(sidebarDarkBg).darken(4).toString(),
	    sidebarLinkColor: sidebarDarkColor,
	    sidebarLinkBorderLeft: '3px solid transparent',
	    sidebarLinkActiveColor: sidebarDarkHoverColor,
	    sidebarLinkActiveBg: sidebarDarkHoverBg,
	    sidebarLinkActiveBorderLeftColor: color,
	    sidebarLinkHoverDec: 'none',
	    sidebarSubmenuMargin: '0 1px',
	    sidebarSubmenuBg: sidebarDarkSubmenuBg,
	    sidebarSubmenuLinkColor: sidebarDarkSubmenuColor,
	    sidebarSubmenuLinkHoverColor: sidebarDarkSubmenuHoverColor,
	    sidebarFormBorderRadius: '3px',
	    sidebarFormBorder: '1px solid ' + (0, _tinycolor2.default)(sidebarDarkBg).lighten(10).toString(),
	    sidebarFormMargin: '10px 10px',
	    sidebarFormInputBoxShadow: 'none',
	    sidebarFormInputBg: (0, _tinycolor2.default)(sidebarDarkBg).lighten(10).toString(),
	    sidebarFormInputBorder: '1px solid transparent',
	    sidebarFormInputHeight: '35px',
	    sidebarFormInputColor: '#666',
	    sidebarFormInputBorderRadius: '2px 0 0 2px',
	    sidebarFormInputFocusBg: '#fff',
	    sidebarFormInputFocusColor: '#666',
	    sidebarFormInputFocusBorderLeftColor: '#fff',
	    sidebarFormButtonColor: '#999',
	    sidebarFormButtonBorderRadius: '0 2px 2px 0'
	  } : {
	    sidebarBg: sidebarLightBg,
	    contentLeftBorder: '1px solid ' + gray,
	    footerLeftBorder: '1px solid ' + gray,
	    userPanelColor: sidebarLightColor,
	    sidebarHeaderColor: (0, _tinycolor2.default)(sidebarLightColor).lighten(25).toString(),
	    sidebarHeaderBg: sidebarLightBg,
	    sidebarLinkColor: sidebarLightColor,
	    sidebarLinkTransition: 'border-left-color .3s ease',
	    sidebarLinkBorderLeft: '3px solid transparent',
	    sidebarLinkFontWeight: '600',
	    sidebarLinkActiveColor: sidebarLightHoverColor,
	    sidebarLinkActiveBg: sidebarLightHoverBg,
	    sidebarLinkActiveBorderLeftColor: color,
	    sidebarLinkActiveFontWeight: '600',
	    sidebarLinkHoverDec: 'none',
	    sidebarSubmenuBg: sidebarLightSubmenuBg,
	    sidebarFormBorderRadius: '3px',
	    sidebarFormBorder: '1px solid ' + gray,
	    sidebarFormMargin: '10px 10px',
	    sidebarFormInputBoxShadow: 'none',
	    sidebarFormInputBg: '#fff',
	    sidebarFormInputBorder: '1px solid transparent',
	    sidebarFormInputHeight: '35px',
	    sidebarFormInputColor: '#666',
	    sidebarFormInputBorderRadius: '2px 0 2px 0',
	    sidebarFormInputFocusBg: '#fff',
	    sidebarFormInputFocusColor: '#666',
	    sidebarFormInputFocusBorderLeftColor: '#fff',
	    sidebarFormButtonColor: '#999',
	    sidebarFormButtonBorderRadius: '0 2px 0 2px',
	    sidebarSubmenuLgBorderLeft: '1px solid ' + gray
	  };
	};

	var navbarItemVariant = exports.navbarItemVariant = function navbarItemVariant(color) {
	  var dividerColor = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'rgba(255, 255, 255, 0.1)';
	  var itemLinkColor = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '#fff';
	  return {
	    navbarItemDividerBg: dividerColor,
	    navbarItemLinkColor: itemLinkColor,
	    navbarItemLinkHoverBg: (0, _tinycolor2.default)(color).darken(5).toString()
	  };
	};

/***/ },
/* 341 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _templateObject = _taggedTemplateLiteral(['\n  /* transitions */\n  -webkit-transition: width ', ' ', ';\n  -o-transition: width ', ' ', ';\n  transition: width ', ' ', ';\n\n  /* theme */\n  background-color: ', ';\n  color: ', ';\n  border-bottom: ', ';\n  border-right: ', ';\n  &:hover {\n    background-color: ', ';\n  }\n\n  display: block;\n  text-decoration: none;\n  float: left;\n  height: ', ';\n  font-size: 20px;\n  line-height: ', ';\n  text-align: center;\n  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;\n  padding: 0 15px;\n  font-weight: 300;\n  overflow: hidden;\n\n  /* media queries */\n  @media (max-width: ', ') {\n    width: 100%;\n    float: none;\n    ', '\n  }\n  @media (min-width: ', ') {\n    width: ', ';\n    padding: ', ';\n  }\n'], ['\n  /* transitions */\n  -webkit-transition: width ', ' ', ';\n  -o-transition: width ', ' ', ';\n  transition: width ', ' ', ';\n\n  /* theme */\n  background-color: ', ';\n  color: ', ';\n  border-bottom: ', ';\n  border-right: ', ';\n  &:hover {\n    background-color: ', ';\n  }\n\n  display: block;\n  text-decoration: none;\n  float: left;\n  height: ', ';\n  font-size: 20px;\n  line-height: ', ';\n  text-align: center;\n  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;\n  padding: 0 15px;\n  font-weight: 300;\n  overflow: hidden;\n\n  /* media queries */\n  @media (max-width: ', ') {\n    width: 100%;\n    float: none;\n    ', '\n  }\n  @media (min-width: ', ') {\n    width: ', ';\n    padding: ', ';\n  }\n']),
	    _templateObject2 = _taggedTemplateLiteral(['\n  display: block;\n  @media (min-width: ', ') {\n    display: ', '\n  }\n'], ['\n  display: block;\n  @media (min-width: ', ') {\n    display: ', '\n  }\n']),
	    _templateObject3 = _taggedTemplateLiteral(['\n  display: none;\n  @media (min-width: ', ') {\n    display: ', '\n  }\n'], ['\n  display: none;\n  @media (min-width: ', ') {\n    display: ', '\n  }\n']);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _styledComponents = __webpack_require__(268);

	var _styledComponents2 = _interopRequireDefault(_styledComponents);

	var _variables = __webpack_require__(340);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); } /* eslint-disable react/jsx-filename-extension */


	var StyledLogo = _styledComponents2.default.a(_templateObject, _variables.transitionSpeed, _variables.transitionFn, _variables.transitionSpeed, _variables.transitionFn, _variables.transitionSpeed, _variables.transitionFn, function (props) {
	  return props.theme.logoBgColor || '#fff';
	}, function (props) {
	  return props.theme.logoColor || '#000';
	}, function (props) {
	  return props.theme.logoBorderBottom || 'none';
	}, function (props) {
	  return props.theme.navbarItemBorder || 'none';
	}, function (props) {
	  return props.theme.logoHover || '#f6f6f6';
	}, _variables.navbarHeight, _variables.navbarHeight, _variables.screenHeaderCollapse, function (props) {
	  return props.theme.logoSmallVariant || '';
	}, _variables.screenSmMin, function (props) {
	  return props.sidebarMini && props.collapse ? _variables.sidebarMiniWidth : _variables.sidebarWidth;
	}, function (props) {
	  return props.sidebarMini && props.collapse && '0';
	});

	var LargeLogo = _styledComponents2.default.span(_templateObject2, _variables.screenSmMin, function (props) {
	  return props.sidebarMini && props.collapse ? 'none' : 'block';
	});

	var SmallLogo = _styledComponents2.default.span(_templateObject3, _variables.screenSmMin, function (props) {
	  return props.sidebarMini && props.collapse ? 'block' : 'none';
	});

	var Logo = function Logo(props) {
	  return _react2.default.createElement(
	    StyledLogo,
	    props,
	    _react2.default.createElement(
	      LargeLogo,
	      props,
	      props.logoLg
	    ),
	    _react2.default.createElement(
	      SmallLogo,
	      props,
	      props.logoSm
	    )
	  );
	};

	 false ? Logo.propTypes = {
	  logoLg: _react2.default.PropTypes.element,
	  logoSm: _react2.default.PropTypes.element
	} : void 0;

	exports.default = Logo;

/***/ },
/* 342 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _templateObject = _taggedTemplateLiteral(['\n  box-sizing: border-box;\n  float: left;\n  border: 0;\n  vertical-align: middle;\n  width: ', ';\n  height: ', ';\n  border-radius: 50%;\n  margin-right: 10px;\n  margin-top: ', ';\n  margin-bottom: ', ';\n  max-width: none;\n\n  cursor: pointer;\n  -webkit-touch-callout: none; /* iOS Safari */\n  -webkit-user-select: none; /* Chrome/Safari/Opera */\n  -khtml-user-select: none; /* Konqueror */\n  -moz-user-select: none; /* Firefox */\n  -ms-user-select: none; /* Internet Explorer/Edge */\n  user-select: none; /* Non-prefixed version, currently not supported by any browser */\n'], ['\n  box-sizing: border-box;\n  float: left;\n  border: 0;\n  vertical-align: middle;\n  width: ', ';\n  height: ', ';\n  border-radius: 50%;\n  margin-right: 10px;\n  margin-top: ', ';\n  margin-bottom: ', ';\n  max-width: none;\n\n  cursor: pointer;\n  -webkit-touch-callout: none; /* iOS Safari */\n  -webkit-user-select: none; /* Chrome/Safari/Opera */\n  -khtml-user-select: none; /* Konqueror */\n  -moz-user-select: none; /* Firefox */\n  -ms-user-select: none; /* Internet Explorer/Edge */\n  user-select: none; /* Non-prefixed version, currently not supported by any browser */\n']),
	    _templateObject2 = _taggedTemplateLiteral(['\n  cursor: pointer;\n  -webkit-touch-callout: none; /* iOS Safari */\n  -webkit-user-select: none; /* Chrome/Safari/Opera */\n  -khtml-user-select: none; /* Konqueror */\n  -moz-user-select: none; /* Firefox */\n  -ms-user-select: none; /* Internet Explorer/Edge */\n  user-select: none; /* Non-prefixed version, currently not supported by any browser */\n'], ['\n  cursor: pointer;\n  -webkit-touch-callout: none; /* iOS Safari */\n  -webkit-user-select: none; /* Chrome/Safari/Opera */\n  -khtml-user-select: none; /* Konqueror */\n  -moz-user-select: none; /* Firefox */\n  -ms-user-select: none; /* Internet Explorer/Edge */\n  user-select: none; /* Non-prefixed version, currently not supported by any browser */\n']),
	    _templateObject3 = _taggedTemplateLiteral(['\n  background-color: ', ';\n  padding: 10px;\n  text-align: center;\n'], ['\n  background-color: ', ';\n  padding: 10px;\n  text-align: center;\n']),
	    _templateObject4 = _taggedTemplateLiteral(['\n  z-index: 5;\n  height: 90px;\n  width: 90px;\n  border: 3px solid;\n  border-color: rgba(255, 255, 255, 0.2);\n  border-radius: 50%;\n'], ['\n  z-index: 5;\n  height: 90px;\n  width: 90px;\n  border: 3px solid;\n  border-color: rgba(255, 255, 255, 0.2);\n  border-radius: 50%;\n']),
	    _templateObject5 = _taggedTemplateLiteral(['\n  z-index: 5;\n  color: #fff;\n  color: rgba(255, 255, 255, 0.8);\n  font-size: 17px;\n  margin-top: 10px;\n'], ['\n  z-index: 5;\n  color: #fff;\n  color: rgba(255, 255, 255, 0.8);\n  font-size: 17px;\n  margin-top: 10px;\n']),
	    _templateObject6 = _taggedTemplateLiteral(['\n  color: #666666;\n  box-shadow: none;\n  border: 1px solid transparent;\n  border-width: 1px;\n  border-radius: 0;\n  background-color: #f4f4f4;\n  border-color: #ddd;\n  display: inline-block;\n  padding: 6px 12px;\n  margin-bottom: 0;\n  font-size: ', ';\n  font-weight: ', ';\n  line-height: ', ';\n  text-align: center;\n  white-space: nowrap;\n  vertical-align: middle;\n  -ms-touch-action: manipulation;\n  touch-action: manipulation;\n  cursor: pointer;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  background-image: none;\n\n  &:hover {\n    @media (max-width: @screen-sm-max) {\n      background-color: #f9f9f9;\n    }\n  }\n'], ['\n  color: #666666;\n  box-shadow: none;\n  border: 1px solid transparent;\n  border-width: 1px;\n  border-radius: 0;\n  background-color: #f4f4f4;\n  border-color: #ddd;\n  display: inline-block;\n  padding: 6px 12px;\n  margin-bottom: 0;\n  font-size: ', ';\n  font-weight: ', ';\n  line-height: ', ';\n  text-align: center;\n  white-space: nowrap;\n  vertical-align: middle;\n  -ms-touch-action: manipulation;\n  touch-action: manipulation;\n  cursor: pointer;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  background-image: none;\n\n  &:hover {\n    @media (max-width: @screen-sm-max) {\n      background-color: #f9f9f9;\n    }\n  }\n']),
	    _templateObject7 = _taggedTemplateLiteral(['\n  /* clearfix */\n  &:before, &:after {\n    display: table;\n    content: " ";\n    -webkit-box-sizing: border-box;\n    -moz-box-sizing: border-box;\n    box-sizing: border-box;\n  }\n  &:after {\n    clear: both;\n  }\n\n  background-color: #f9f9f9;\n  padding: 10px;\n'], ['\n  /* clearfix */\n  &:before, &:after {\n    display: table;\n    content: " ";\n    -webkit-box-sizing: border-box;\n    -moz-box-sizing: border-box;\n    box-sizing: border-box;\n  }\n  &:after {\n    clear: both;\n  }\n\n  background-color: #f9f9f9;\n  padding: 10px;\n']),
	    _templateObject8 = _taggedTemplateLiteral(['\n  border-top-radius: 0;\n  border-top: 0;\n  padding: 1px 0 0 0;\n  width: 280px;\n'], ['\n  border-top-radius: 0;\n  border-top: 0;\n  padding: 1px 0 0 0;\n  width: 280px;\n']),
	    _templateObject9 = _taggedTemplateLiteral(['\n  /* shared */\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  font-family: ', ';\n  font-weight: ', ';\n  font-size: ', ';\n  line-height: ', ';\n  box-sizing: border-box;\n\n  float: left;\n  background-color: transparent;\n  background-image: none;\n  border: none;\n  outline: none;\n  padding: ', ' ', ';\n  position: relative;\n  text-decoration: none;\n  cursor: pointer;\n  &:focus, &:active { background: transparent; }\n\n  /* theme */\n  color: ', ';\n  border-left: ', ';\n  &:hover {\n    color: ', ';\n    background-color: ', ';\n  }\n'], ['\n  /* shared */\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  font-family: ', ';\n  font-weight: ', ';\n  font-size: ', ';\n  line-height: ', ';\n  box-sizing: border-box;\n\n  float: left;\n  background-color: transparent;\n  background-image: none;\n  border: none;\n  outline: none;\n  padding: ', ' ', ';\n  position: relative;\n  text-decoration: none;\n  cursor: pointer;\n  &:focus, &:active { background: transparent; }\n\n  /* theme */\n  color: ', ';\n  border-left: ', ';\n  &:hover {\n    color: ', ';\n    background-color: ', ';\n  }\n']);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _styledComponents = __webpack_require__(268);

	var _styledComponents2 = _interopRequireDefault(_styledComponents);

	var _DropdownMenu = __webpack_require__(343);

	var _DropdownMenu2 = _interopRequireDefault(_DropdownMenu);

	var _variables = __webpack_require__(340);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); } /* eslint-disable react/jsx-filename-extension */


	var imageSize = Math.floor(parseInt(_variables.navbarHeight, 10) / 2) + 'px';
	var imageMarginTop = '-' + Math.ceil((parseInt(imageSize, 10) + parseInt(_variables.navbarPaddingHorizontal, 10) + parseInt(_variables.navbarPaddingVertical, 10) - parseInt(_variables.navbarHeight, 10)) / 2) + 'px';
	var imageMarginBottom = '-' + Math.floor((parseInt(imageSize, 10) + parseInt(_variables.navbarPaddingHorizontal, 10) + parseInt(_variables.navbarPaddingVertical, 10) - parseInt(_variables.navbarHeight, 10)) / 2) + 'px';

	var StyledUserImage = _styledComponents2.default.img(_templateObject, imageSize, imageSize, imageMarginTop, imageMarginBottom);

	var StyledUserName = _styledComponents2.default.span(_templateObject2);

	var UserMenuHeader = _styledComponents2.default.li(_templateObject3, function (props) {
	  return props.theme.navbarUserMenuHeaderBg || props.theme.backgroundColor;
	});

	var UserMenuHeaderImage = _styledComponents2.default.img(_templateObject4);

	var UserMenuHeaderName = _styledComponents2.default.p(_templateObject5);

	var UserFooterButton = _styledComponents2.default.button(_templateObject6, _variables.fontSizeBase, _variables.fontWeightBase, _variables.lineHeightBase);

	var UserFooter = _styledComponents2.default.li(_templateObject7);

	var UserDropDown = (0, _styledComponents2.default)(_DropdownMenu2.default)(_templateObject8);

	var StyledUserMenu = _styledComponents2.default.li(_templateObject9, _variables.fontFamilyBase, _variables.fontWeightBase, _variables.fontSizeBase, _variables.lineHeightBase, _variables.navbarPaddingVertical, _variables.navbarPaddingHorizontal, function (props) {
	  return props.theme.navbarFontColor || '#fff';
	}, function (props) {
	  return props.theme.navbarItemBorder || 'none';
	}, function (props) {
	  return props.theme.navbarHoverColor || '#fff';
	}, function (props) {
	  return props.theme.logoBgColor || 'transparent';
	});

	var UserMenu = function (_React$Component) {
	  _inherits(UserMenu, _React$Component);

	  function UserMenu(props) {
	    _classCallCheck(this, UserMenu);

	    var _this = _possibleConstructorReturn(this, (UserMenu.__proto__ || Object.getPrototypeOf(UserMenu)).call(this, props));

	    _this.state = {
	      open: false
	    };
	    _this._toggleMenu = _this.toggleMenu.bind(_this);
	    return _this;
	  }

	  _createClass(UserMenu, [{
	    key: 'toggleMenu',
	    value: function toggleMenu() {
	      this.setState({
	        open: !this.state.open
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        StyledUserMenu,
	        { onClick: this._toggleMenu },
	        _react2.default.createElement(StyledUserImage, { src: this.props.image }),
	        _react2.default.createElement(
	          StyledUserName,
	          null,
	          this.props.name
	        ),
	        _react2.default.createElement(
	          UserDropDown,
	          { open: this.state.open },
	          _react2.default.createElement(
	            UserMenuHeader,
	            null,
	            _react2.default.createElement(UserMenuHeaderImage, { src: this.props.image }),
	            _react2.default.createElement(
	              UserMenuHeaderName,
	              null,
	              this.props.name
	            )
	          ),
	          _react2.default.createElement(
	            UserFooter,
	            null,
	            this.props.profileAction && _react2.default.createElement(
	              'div',
	              { style: { float: 'left' } },
	              _react2.default.createElement(
	                UserFooterButton,
	                { onClick: this.props.profileAction },
	                'Profile'
	              )
	            ),
	            this.props.signOutAction && _react2.default.createElement(
	              'div',
	              { style: { float: 'right' } },
	              _react2.default.createElement(
	                UserFooterButton,
	                { onClick: this.props.signOutAction },
	                'Sign Out'
	              )
	            )
	          )
	        )
	      );
	    }
	  }]);

	  return UserMenu;
	}(_react2.default.Component);

	 false ? UserMenu.propTypes = {
	  name: _react2.default.PropTypes.string,
	  image: _react2.default.PropTypes.string,
	  profileAction: _react2.default.PropTypes.func,
	  signOutAction: _react2.default.PropTypes.func
	} : void 0;

	exports.default = UserMenu;

/***/ },
/* 343 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _templateObject = _taggedTemplateLiteral(['\n  /* shared */\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-margin-start: 0px;\n  -webkit-margin-end: 0px;\n  -webkit-padding-start: 40px;\n  -webkit-margin-before: 0px;\n  -webkit-margin-after: 0px;\n  color: ', ';\n  font-size: ', ';\n  line-height: ', ';\n  text-align: left;\n  font-family: ', ';\n  font-weight: ', ';\n\n  position: absolute;\n  top: 100%;\n  left: auto;\n  right: 0;\n  z-index: 1000;\n  display: ', ';\n  float: left;\n  min-width: 160px;\n  padding: 5px 0;\n  margin: 0;\n  font-size: 14px;\n  text-align: left;\n  list-style: none;\n  background-color: #fff;\n  -webkit-background-clip: padding-box;\n  background-clip: padding-box;\n  border: 1px solid rgba(0,0,0,.15);\n  -webkit-box-shadow: 0 6px 12px rgba(0,0,0,.175);\n  box-shadow: 0 6px 12px rgba(0,0,0,.175);\n  border-color: #eee;\n\n  /* media queries */\n  @media (max-width: ', ') {\n    position: absolute;\n    right: 5%;\n    left: auto;\n    border: 1px solid #ddd;\n    background: #fff;\n  }\n'], ['\n  /* shared */\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-margin-start: 0px;\n  -webkit-margin-end: 0px;\n  -webkit-padding-start: 40px;\n  -webkit-margin-before: 0px;\n  -webkit-margin-after: 0px;\n  color: ', ';\n  font-size: ', ';\n  line-height: ', ';\n  text-align: left;\n  font-family: ', ';\n  font-weight: ', ';\n\n  position: absolute;\n  top: 100%;\n  left: auto;\n  right: 0;\n  z-index: 1000;\n  display: ', ';\n  float: left;\n  min-width: 160px;\n  padding: 5px 0;\n  margin: 0;\n  font-size: 14px;\n  text-align: left;\n  list-style: none;\n  background-color: #fff;\n  -webkit-background-clip: padding-box;\n  background-clip: padding-box;\n  border: 1px solid rgba(0,0,0,.15);\n  -webkit-box-shadow: 0 6px 12px rgba(0,0,0,.175);\n  box-shadow: 0 6px 12px rgba(0,0,0,.175);\n  border-color: #eee;\n\n  /* media queries */\n  @media (max-width: ', ') {\n    position: absolute;\n    right: 5%;\n    left: auto;\n    border: 1px solid #ddd;\n    background: #fff;\n  }\n']);

	var _styledComponents = __webpack_require__(268);

	var _styledComponents2 = _interopRequireDefault(_styledComponents);

	var _variables = __webpack_require__(340);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

	var DropdownMenu = _styledComponents2.default.ul(_templateObject, _variables.baseColor, _variables.fontSizeBase, _variables.lineHeightBase, _variables.fontFamilyBase, _variables.fontWeightBase, function (props) {
	  return props.open ? 'block' : 'none';
	}, _variables.screenSmMax);

	exports.default = DropdownMenu;

/***/ },
/* 344 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _templateObject = _taggedTemplateLiteral(['\n  box-sizing: border-box;\n  float: left;\n  border: 0;\n  vertical-align: middle;\n  width: ', ';\n  height: ', ';\n  border-radius: 50%;\n  margin-right: 10px;\n  margin-top: ', ';\n  margin-bottom: ', ';\n  max-width: none;\n\n  cursor: pointer;\n  -webkit-touch-callout: none; /* iOS Safari */\n  -webkit-user-select: none; /* Chrome/Safari/Opera */\n  -khtml-user-select: none; /* Konqueror */\n  -moz-user-select: none; /* Firefox */\n  -ms-user-select: none; /* Internet Explorer/Edge */\n  user-select: none; /* Non-prefixed version, currently not supported by any browser */\n'], ['\n  box-sizing: border-box;\n  float: left;\n  border: 0;\n  vertical-align: middle;\n  width: ', ';\n  height: ', ';\n  border-radius: 50%;\n  margin-right: 10px;\n  margin-top: ', ';\n  margin-bottom: ', ';\n  max-width: none;\n\n  cursor: pointer;\n  -webkit-touch-callout: none; /* iOS Safari */\n  -webkit-user-select: none; /* Chrome/Safari/Opera */\n  -khtml-user-select: none; /* Konqueror */\n  -moz-user-select: none; /* Firefox */\n  -ms-user-select: none; /* Internet Explorer/Edge */\n  user-select: none; /* Non-prefixed version, currently not supported by any browser */\n']),
	    _templateObject2 = _taggedTemplateLiteral(['\n  color: ', ';\n  text-decoration: none;\n  cursor: pointer;\n  -webkit-touch-callout: none; /* iOS Safari */\n  -webkit-user-select: none; /* Chrome/Safari/Opera */\n  -khtml-user-select: none; /* Konqueror */\n  -moz-user-select: none; /* Firefox */\n  -ms-user-select: none; /* Internet Explorer/Edge */\n  user-select: none; /* Non-prefixed version, currently not supported by any browser */\n'], ['\n  color: ', ';\n  text-decoration: none;\n  cursor: pointer;\n  -webkit-touch-callout: none; /* iOS Safari */\n  -webkit-user-select: none; /* Chrome/Safari/Opera */\n  -khtml-user-select: none; /* Konqueror */\n  -moz-user-select: none; /* Firefox */\n  -ms-user-select: none; /* Internet Explorer/Edge */\n  user-select: none; /* Non-prefixed version, currently not supported by any browser */\n']),
	    _templateObject3 = _taggedTemplateLiteral(['\n  /* shared */\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  font-family: ', ';\n  font-weight: ', ';\n  font-size: ', ';\n  line-height: ', ';\n  box-sizing: border-box;\n\n  float: left;\n  background-color: transparent;\n  background-image: none;\n  border: none;\n  outline: none;\n  padding: ', ' ', ';\n  position: relative;\n  text-decoration: none;\n  cursor: pointer;\n  &:focus, &:active { background: transparent; }\n\n  /* theme */\n  color: ', ';\n  border-left: ', ';\n  &:hover {\n    color: ', ';\n    background-color: ', ';\n  }\n'], ['\n  /* shared */\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  font-family: ', ';\n  font-weight: ', ';\n  font-size: ', ';\n  line-height: ', ';\n  box-sizing: border-box;\n\n  float: left;\n  background-color: transparent;\n  background-image: none;\n  border: none;\n  outline: none;\n  padding: ', ' ', ';\n  position: relative;\n  text-decoration: none;\n  cursor: pointer;\n  &:focus, &:active { background: transparent; }\n\n  /* theme */\n  color: ', ';\n  border-left: ', ';\n  &:hover {\n    color: ', ';\n    background-color: ', ';\n  }\n']);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _styledComponents = __webpack_require__(268);

	var _styledComponents2 = _interopRequireDefault(_styledComponents);

	var _variables = __webpack_require__(340);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); } /* eslint-disable react/jsx-filename-extension */


	var imageSize = Math.floor(parseInt(_variables.navbarHeight, 10) / 2) + 'px';
	var imageMarginTop = '-' + Math.ceil((parseInt(imageSize, 10) + parseInt(_variables.navbarPaddingHorizontal, 10) + parseInt(_variables.navbarPaddingVertical, 10) - parseInt(_variables.navbarHeight, 10)) / 2) + 'px';
	var imageMarginBottom = '-' + Math.floor((parseInt(imageSize, 10) + parseInt(_variables.navbarPaddingHorizontal, 10) + parseInt(_variables.navbarPaddingVertical, 10) - parseInt(_variables.navbarHeight, 10)) / 2) + 'px';

	var StyledImage = _styledComponents2.default.img(_templateObject, imageSize, imageSize, imageMarginTop, imageMarginBottom);

	var StyledLink = _styledComponents2.default.a(_templateObject2, function (props) {
	  return props.theme.navbarFontColor || '#fff';
	});

	var StyledItem = _styledComponents2.default.li(_templateObject3, _variables.fontFamilyBase, _variables.fontWeightBase, _variables.fontSizeBase, _variables.lineHeightBase, _variables.navbarPaddingVertical, _variables.navbarPaddingHorizontal, function (props) {
	  return props.theme.navbarFontColor || '#fff';
	}, function (props) {
	  return props.theme.navbarItemBorder || 'none';
	}, function (props) {
	  return props.theme.navbarHoverColor || '#fff';
	}, function (props) {
	  return props.theme.logoBgColor || 'transparent';
	});

	var NavItem = function NavItem(_ref) {
	  var children = _ref.children,
	      onClick = _ref.onClick,
	      href = _ref.href,
	      image = _ref.image;
	  return _react2.default.createElement(
	    StyledItem,
	    null,
	    onClick && _react2.default.createElement(
	      StyledLink,
	      { onClick: onClick, href: '#' },
	      image && _react2.default.createElement(StyledImage, { src: image }),
	      children
	    ),
	    !onClick && href && _react2.default.createElement(
	      StyledLink,
	      { href: href },
	      image && _react2.default.createElement(StyledImage, { src: image }),
	      children
	    )
	  );
	};

	 false ? NavItem.propTypes = {
	  children: _react2.default.PropTypes.node,
	  onClick: _react2.default.PropTypes.func,
	  href: _react2.default.PropTypes.string,
	  image: _react2.default.PropTypes.string
	} : void 0;

	exports.default = NavItem;

/***/ },
/* 345 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _templateObject = _taggedTemplateLiteral(['\n  &:before, &:after {\n    -webkit-box-sizing: border-box;\n    -moz-box-sizing: border-box;\n    box-sizing: border-box;\n  }\n\n  /* theme */\n  background-color: ', '\n\n  position: ', ';\n  top: 0;\n  left: 0;\n  padding-top: 50px;\n  min-height: 100%;\n  width: ', ';\n  z-index: 810;\n\n  -webkit-transition: ', ' ', ', width ', ' ', ';\n  -moz-transition: ', ' ', ', width ', ' ', ';\n  -o-transition: ', ' ', ', width ', ' ', ';\n  transition: ', ' ', ', width ', ' ', ';\n\n  /* media queries */\n  /* sidebar on large screens */\n  @media (min-width: ', ') {\n    margin-left: 0;\n    ', '\n  }\n  /* sidebar on small screens */\n  @media (max-width: ', ') {\n    padding-top: 100px;\n    ', ';\n  }\n'], ['\n  &:before, &:after {\n    -webkit-box-sizing: border-box;\n    -moz-box-sizing: border-box;\n    box-sizing: border-box;\n  }\n\n  /* theme */\n  background-color: ', '\n\n  position: ', ';\n  top: 0;\n  left: 0;\n  padding-top: 50px;\n  min-height: 100%;\n  width: ', ';\n  z-index: 810;\n\n  -webkit-transition: ', ' ', ', width ', ' ', ';\n  -moz-transition: ', ' ', ', width ', ' ', ';\n  -o-transition: ', ' ', ', width ', ' ', ';\n  transition: ', ' ', ', width ', ' ', ';\n\n  /* media queries */\n  /* sidebar on large screens */\n  @media (min-width: ', ') {\n    margin-left: 0;\n    ', '\n  }\n  /* sidebar on small screens */\n  @media (max-width: ', ') {\n    padding-top: 100px;\n    ', ';\n  }\n']);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _styledComponents = __webpack_require__(268);

	var _styledComponents2 = _interopRequireDefault(_styledComponents);

	var _UserPanel = __webpack_require__(346);

	var _UserPanel2 = _interopRequireDefault(_UserPanel);

	var _Search = __webpack_require__(347);

	var _Search2 = _interopRequireDefault(_Search);

	var _Menu = __webpack_require__(348);

	var _Menu2 = _interopRequireDefault(_Menu);

	var _variables = __webpack_require__(340);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); } /* eslint-disable react/jsx-filename-extension */


	var StyledSidebar = _styledComponents2.default.aside(_templateObject, function (props) {
	  return props.theme.sidebarBg;
	}, function (props) {
	  return props.fixed ? 'fixed' : 'absolute';
	}, _variables.sidebarWidth, _variables.transitionSpeed, _variables.transitionFn, _variables.transitionSpeed, _variables.transitionFn, _variables.transitionSpeed, _variables.transitionFn, _variables.transitionSpeed, _variables.transitionFn, _variables.transitionSpeed, _variables.transitionFn, _variables.transitionSpeed, _variables.transitionFn, _variables.transitionSpeed, _variables.transitionFn, _variables.transitionSpeed, _variables.transitionFn, _variables.screenSmMin, function (props) {
	  if (props.collapse) {
	    if (props.mini) {
	      return '\n            width: ' + _variables.sidebarMiniWidth + ';\n            z-index: 850;\n          ';
	    }
	    return '\n          -webkit-transform: translate(-' + _variables.sidebarWidth + ', 0);\n          -ms-transform: translate(-' + _variables.sidebarWidth + ', 0);\n          -o-transform: translate(-' + _variables.sidebarWidth + ', 0);\n          transform: translate(-' + _variables.sidebarWidth + ', 0);\n        ';
	  }
	  return '\n        -webkit-transform: translate(0, 0);\n        -ms-transform: translate(0, 0);\n        -o-transform: translate(0, 0);\n        transform: translate(0, 0);\n      ';
	}, _variables.screenXsMax, function (props) {
	  return props.collapse ? '\n      -webkit-transform: translate(-' + _variables.sidebarWidth + ', 0);\n      -ms-transform: translate(-' + _variables.sidebarWidth + ', 0);\n      -o-transform: translate(-' + _variables.sidebarWidth + ', 0);\n      transform: translate(-' + _variables.sidebarWidth + ', 0);\n    ' : '\n      -webkit-transform: translate(0, 0);\n      -ms-transform: translate(0, 0);\n      -o-transform: translate(0, 0);\n      transform: translate(0, 0);\n    ';
	});

	var renderChildren = function renderChildren(children, sidebarCollapse) {
	  return _react2.default.Children.map(children, function (child) {
	    return _react2.default.cloneElement(child, {
	      collapse: sidebarCollapse
	    });
	  });
	};

	var Sidebar = function Sidebar(_ref) {
	  var children = _ref.children,
	      _ref$fixed = _ref.fixed,
	      fixed = _ref$fixed === undefined ? false : _ref$fixed,
	      _ref$sidebarMini = _ref.sidebarMini,
	      sidebarMini = _ref$sidebarMini === undefined ? false : _ref$sidebarMini,
	      _ref$sidebarCollapse = _ref.sidebarCollapse,
	      sidebarCollapse = _ref$sidebarCollapse === undefined ? false : _ref$sidebarCollapse;
	  return _react2.default.createElement(
	    StyledSidebar,
	    {
	      fixed: fixed,
	      collapse: sidebarCollapse,
	      mini: sidebarMini
	    },
	    renderChildren(children, sidebarCollapse)
	  );
	};

	 false ? Sidebar.propTypes = {
	  children: _react2.default.PropTypes.node,
	  fixed: _react2.default.PropTypes.bool,
	  sidebarMini: _react2.default.PropTypes.bool,
	  sidebarCollapse: _react2.default.PropTypes.bool
	} : void 0;

	Sidebar.UserPanel = _UserPanel2.default;
	Sidebar.Search = _Search2.default;
	Sidebar.Menu = _Menu2.default;

	exports.default = Sidebar;

/***/ },
/* 346 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _templateObject = _taggedTemplateLiteral(['\n  margin-right: 3px;\n  color: ', ';\n'], ['\n  margin-right: 3px;\n  color: ', ';\n']),
	    _templateObject2 = _taggedTemplateLiteral(['\n  margin: 0 0 9px 0;\n  font-weight: 600;\n'], ['\n  margin: 0 0 9px 0;\n  font-weight: 600;\n']),
	    _templateObject3 = _taggedTemplateLiteral(['\n  text-decoration: none;\n  padding-right: 5px;\n  margin-top: 3px;\n  font-size: 11px;\n  background-color: transparent;\n  color: ', ';\n\n  cursor: pointer;\n  -webkit-touch-callout: none; /* iOS Safari */\n  -webkit-user-select: none; /* Chrome/Safari/Opera */\n  -khtml-user-select: none; /* Konqueror */\n  -moz-user-select: none; /* Firefox */\n  -ms-user-select: none; /* Internet Explorer/Edge */\n  user-select: none; /* Non-prefixed version, currently not supported by any browser */\n'], ['\n  text-decoration: none;\n  padding-right: 5px;\n  margin-top: 3px;\n  font-size: 11px;\n  background-color: transparent;\n  color: ', ';\n\n  cursor: pointer;\n  -webkit-touch-callout: none; /* iOS Safari */\n  -webkit-user-select: none; /* Chrome/Safari/Opera */\n  -khtml-user-select: none; /* Konqueror */\n  -moz-user-select: none; /* Firefox */\n  -ms-user-select: none; /* Internet Explorer/Edge */\n  user-select: none; /* Non-prefixed version, currently not supported by any browser */\n']),
	    _templateObject4 = _taggedTemplateLiteral(['\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  box-sizing: border-box;\n  color: ', ';\n  display: ', ';\n  float: left !important;\n  padding: 5px 5px 5px 15px;\n  line-height: 1;\n  position: absolute;\n  left: 55px;\n\n  /* collapse transform */\n  ', '\n'], ['\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  box-sizing: border-box;\n  color: ', ';\n  display: ', ';\n  float: left !important;\n  padding: 5px 5px 5px 15px;\n  line-height: 1;\n  position: absolute;\n  left: 55px;\n\n  /* collapse transform */\n  ', '\n']),
	    _templateObject5 = _taggedTemplateLiteral(['\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  box-sizing: border-box;\n  display: block;\n  float: left!important;\n  width: 100%;\n  max-width: 45px;\n  vertical-align: middle;\n  height: auto;\n  border-radius: 50%;\n  border: 0;\n\n  cursor: pointer;\n  -webkit-touch-callout: none; /* iOS Safari */\n  -webkit-user-select: none; /* Chrome/Safari/Opera */\n  -khtml-user-select: none; /* Konqueror */\n  -moz-user-select: none; /* Firefox */\n  -ms-user-select: none; /* Internet Explorer/Edge */\n  user-select: none; /* Non-prefixed version, currently not supported by any browser */\n'], ['\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  box-sizing: border-box;\n  display: block;\n  float: left!important;\n  width: 100%;\n  max-width: 45px;\n  vertical-align: middle;\n  height: auto;\n  border-radius: 50%;\n  border: 0;\n\n  cursor: pointer;\n  -webkit-touch-callout: none; /* iOS Safari */\n  -webkit-user-select: none; /* Chrome/Safari/Opera */\n  -khtml-user-select: none; /* Konqueror */\n  -moz-user-select: none; /* Firefox */\n  -ms-user-select: none; /* Internet Explorer/Edge */\n  user-select: none; /* Non-prefixed version, currently not supported by any browser */\n']),
	    _templateObject6 = _taggedTemplateLiteral(['\n  /* clearfix */\n  &:before, &:after {\n    display: table;\n    content: " ";\n    -webkit-box-sizing: border-box;\n    -moz-box-sizing: border-box;\n    box-sizing: border-box;\n  }\n  &:after {\n    clear: both;\n  }\n\n  /* shared */\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  font-family: ', ';\n  font-weight: ', ';\n  font-size: ', ';\n  box-sizing: border-box;\n\n  position: relative;\n  width: 100%;\n  padding: 10px;\n  overflow: hidden;\n  display: block;\n  white-space: nowrap;\n'], ['\n  /* clearfix */\n  &:before, &:after {\n    display: table;\n    content: " ";\n    -webkit-box-sizing: border-box;\n    -moz-box-sizing: border-box;\n    box-sizing: border-box;\n  }\n  &:after {\n    clear: both;\n  }\n\n  /* shared */\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  font-family: ', ';\n  font-weight: ', ';\n  font-size: ', ';\n  box-sizing: border-box;\n\n  position: relative;\n  width: 100%;\n  padding: 10px;\n  overflow: hidden;\n  display: block;\n  white-space: nowrap;\n']);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _styledComponents = __webpack_require__(268);

	var _styledComponents2 = _interopRequireDefault(_styledComponents);

	var _variables = __webpack_require__(340);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); } /* eslint-disable react/jsx-filename-extension */


	var StyledIcon = _styledComponents2.default.i(_templateObject, function (props) {
	  return props.online ? '#3c763d' : '#a94442';
	});

	var StyledP = _styledComponents2.default.p(_templateObject2);

	var StyledLink = _styledComponents2.default.a(_templateObject3, function (props) {
	  return props.theme.userPanelColor || '#fff';
	});

	var StyledInfo = _styledComponents2.default.div(_templateObject4, function (props) {
	  return props.theme.userPanelColor || '#fff';
	}, function (props) {
	  return props.collapse ? 'none !important' : 'block';
	}, function (props) {
	  return props.collapse && '-webkit-transform: translateZ(0);';
	});

	var StyledImage = _styledComponents2.default.img(_templateObject5);

	var StyledPanel = _styledComponents2.default.div(_templateObject6, _variables.fontFamilyBase, _variables.fontWeightBase, _variables.fontSizeBase);

	var UserPanel = function UserPanel(_ref) {
	  var name = _ref.name,
	      image = _ref.image,
	      _ref$href = _ref.href,
	      href = _ref$href === undefined ? '#' : _ref$href,
	      online = _ref.online,
	      collapse = _ref.collapse;
	  return _react2.default.createElement(
	    StyledPanel,
	    { collapse: collapse },
	    _react2.default.createElement(StyledImage, { src: image }),
	    _react2.default.createElement(
	      StyledInfo,
	      { collapse: collapse },
	      _react2.default.createElement(
	        StyledP,
	        null,
	        name
	      ),
	      _react2.default.createElement(
	        StyledLink,
	        { href: href },
	        _react2.default.createElement(StyledIcon, { className: 'fa fa-circle', online: online }),
	        online ? ' Online' : ' Offline'
	      )
	    )
	  );
	};

	 false ? UserPanel.propTypes = {
	  name: _react2.default.PropTypes.string,
	  image: _react2.default.PropTypes.string,
	  href: _react2.default.PropTypes.string,
	  online: _react2.default.PropTypes.bool,
	  collapse: _react2.default.PropTypes.bool
	} : void 0;

	exports.default = UserPanel;

/***/ },
/* 347 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _templateObject = _taggedTemplateLiteral(['\n  cursor: pointer;\n  -webkit-touch-callout: none; /* iOS Safari */\n  -webkit-user-select: none; /* Chrome/Safari/Opera */\n  -khtml-user-select: none; /* Konqueror */\n  -moz-user-select: none; /* Firefox */\n  -ms-user-select: none; /* Internet Explorer/Edge */\n  user-select: none; /* Non-prefixed version, currently not supported by any browser */\n'], ['\n  cursor: pointer;\n  -webkit-touch-callout: none; /* iOS Safari */\n  -webkit-user-select: none; /* Chrome/Safari/Opera */\n  -khtml-user-select: none; /* Konqueror */\n  -moz-user-select: none; /* Firefox */\n  -ms-user-select: none; /* Internet Explorer/Edge */\n  user-select: none; /* Non-prefixed version, currently not supported by any browser */\n']),
	    _templateObject2 = _taggedTemplateLiteral(['\n  z-index: 2;\n  margin-left: -1px;\n  font-size: ', ';\n  padding: 6px 12px;\n  background-image: none;\n  font-family: ', ';\n  line-height: ', ';\n  overflow: visible;\n  position: relative;\n  cursor: pointer;\n  vertical-align: middle;\n  touch-action: manipulation;\n  -webkit-touch-callout: none; /* iOS Safari */\n  -webkit-user-select: none; /* Chrome/Safari/Opera */\n  -khtml-user-select: none; /* Konqueror */\n  -moz-user-select: none; /* Firefox */\n  -ms-user-select: none; /* Internet Explorer/Edge */\n  user-select: none; /* Non-prefixed version, currently not supported by any browser */\n\n  /* theme */\n  color: ', ';\n  border-radius: ', ';\n  box-shadow: ', ';\n  background-color: ', ';\n  border: ', ';\n  height: ', ';\n'], ['\n  z-index: 2;\n  margin-left: -1px;\n  font-size: ', ';\n  padding: 6px 12px;\n  background-image: none;\n  font-family: ', ';\n  line-height: ', ';\n  overflow: visible;\n  position: relative;\n  cursor: pointer;\n  vertical-align: middle;\n  touch-action: manipulation;\n  -webkit-touch-callout: none; /* iOS Safari */\n  -webkit-user-select: none; /* Chrome/Safari/Opera */\n  -khtml-user-select: none; /* Konqueror */\n  -moz-user-select: none; /* Firefox */\n  -ms-user-select: none; /* Internet Explorer/Edge */\n  user-select: none; /* Non-prefixed version, currently not supported by any browser */\n\n  /* theme */\n  color: ', ';\n  border-radius: ', ';\n  box-shadow: ', ';\n  background-color: ', ';\n  border: ', ';\n  height: ', ';\n']),
	    _templateObject3 = _taggedTemplateLiteral(['\n  position: relative;\n  font-size: 0;\n  white-space: nowrap;\n  width: 1%;\n  vertical-align: middle;\n  display: table-cell;\n'], ['\n  position: relative;\n  font-size: 0;\n  white-space: nowrap;\n  width: 1%;\n  vertical-align: middle;\n  display: table-cell;\n']),
	    _templateObject4 = _taggedTemplateLiteral(['\n  -webkit-writing-mode: horizontal-tb;\n  -webkit-rtl-ordering: logical;\n  user-select: text;\n  cursor: auto;\n  text-rendering: auto;\n  letter-spacing: normal;\n  word-spacing: normal;\n  text-transform: none;\n  text-indent: 0px;\n  text-shadow: none;\n  text-align: start;\n  background-image: none;\n\n  margin: 0;\n  font: inherit;\n  font-family: inherit;\n\n  /* form-control */\n  padding: 6px 12px;\n  -webkit-transition: border-color ease-in-out .15s,-webkit-box-shadow ease-in-out .15s;\n  -o-transition: border-color ease-in-out .15s,box-shadow ease-in-out .15s;\n  transition: border-color ease-in-out .15s,box-shadow ease-in-out .15s;\n\n  &:not(select) {\n    -webkit-appearance: none;\n    -moz-appearance: none;\n    appearance: none;\n  }\n\n  position: relative;\n  z-index: 2;\n  float: left;\n  width: 100%;\n  margin-bottom: 0;\n  display: table-cell;\n\n  /* theme */\n  box-shadow: ', ';\n  background-color: ', ';\n  border: ', ';\n  height: ', ';\n  color: ', ';\n  border-radius: ', ';\n\n  &:focus {\n    background-color: ', ';\n    color: ', ';\n    border-left-color: ', ';\n  }\n'], ['\n  -webkit-writing-mode: horizontal-tb;\n  -webkit-rtl-ordering: logical;\n  user-select: text;\n  cursor: auto;\n  text-rendering: auto;\n  letter-spacing: normal;\n  word-spacing: normal;\n  text-transform: none;\n  text-indent: 0px;\n  text-shadow: none;\n  text-align: start;\n  background-image: none;\n\n  margin: 0;\n  font: inherit;\n  font-family: inherit;\n\n  /* form-control */\n  padding: 6px 12px;\n  -webkit-transition: border-color ease-in-out .15s,-webkit-box-shadow ease-in-out .15s;\n  -o-transition: border-color ease-in-out .15s,box-shadow ease-in-out .15s;\n  transition: border-color ease-in-out .15s,box-shadow ease-in-out .15s;\n\n  &:not(select) {\n    -webkit-appearance: none;\n    -moz-appearance: none;\n    appearance: none;\n  }\n\n  position: relative;\n  z-index: 2;\n  float: left;\n  width: 100%;\n  margin-bottom: 0;\n  display: table-cell;\n\n  /* theme */\n  box-shadow: ', ';\n  background-color: ', ';\n  border: ', ';\n  height: ', ';\n  color: ', ';\n  border-radius: ', ';\n\n  &:focus {\n    background-color: ', ';\n    color: ', ';\n    border-left-color: ', ';\n  }\n']),
	    _templateObject5 = _taggedTemplateLiteral(['\n  position: relative;\n  display: table;\n  border-collapse: separate;\n\n  &:focus { outline: -webkit-focus-ring-color auto 5px; }\n'], ['\n  position: relative;\n  display: table;\n  border-collapse: separate;\n\n  &:focus { outline: -webkit-focus-ring-color auto 5px; }\n']),
	    _templateObject6 = _taggedTemplateLiteral(['\n  /* shared */\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  font-family: ', ';\n  font-weight: ', ';\n  font-size: ', ';\n  line-height: ', ';\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  box-sizing: border-box;\n\n  overflow: hidden;\n  text-overflow: clip;\n  border-radius: ', ';\n  border: ', ';\n  margin: ', ';\n\n  /* collapse */\n  ', '\n'], ['\n  /* shared */\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  font-family: ', ';\n  font-weight: ', ';\n  font-size: ', ';\n  line-height: ', ';\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  box-sizing: border-box;\n\n  overflow: hidden;\n  text-overflow: clip;\n  border-radius: ', ';\n  border: ', ';\n  margin: ', ';\n\n  /* collapse */\n  ', '\n']);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _styledComponents = __webpack_require__(268);

	var _styledComponents2 = _interopRequireDefault(_styledComponents);

	var _variables = __webpack_require__(340);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); } /* eslint-disable react/jsx-filename-extension */


	var StyledIcon = _styledComponents2.default.i(_templateObject);

	var StyledButton = _styledComponents2.default.button(_templateObject2, _variables.fontSizeBase, _variables.fontFamilyBase, _variables.lineHeightBase, function (props) {
	  return props.theme.sidebarFormButtonColor;
	}, function (props) {
	  return props.theme.sidebarFormButtonBorderRadius;
	}, function (props) {
	  return props.theme.sidebarFormInputBoxShadow;
	}, function (props) {
	  return props.theme.sidebarFormInputBg;
	}, function (props) {
	  return props.theme.sidebarFormInputBorder;
	}, function (props) {
	  return props.theme.sidebarFormInputHeight;
	});

	var StyledInputButton = _styledComponents2.default.span(_templateObject3);

	var StyledInput = _styledComponents2.default.input(_templateObject4, function (props) {
	  return props.theme.sidebarFormInputBoxShadow;
	}, function (props) {
	  return props.theme.sidebarFormInputBg;
	}, function (props) {
	  return props.theme.sidebarFormInputBorder;
	}, function (props) {
	  return props.theme.sidebarFormInputHeight;
	}, function (props) {
	  return props.theme.sidebarFormInputColor;
	}, function (props) {
	  return props.theme.sidebarFormInputBorderRadius;
	}, function (props) {
	  return props.theme.sidebarFormInputFocusBg;
	}, function (props) {
	  return props.theme.sidebarFormInputFocusColor;
	}, function (props) {
	  return props.theme.sidebarFormInputFocusBorderLeftColor;
	});

	var InputGroup = _styledComponents2.default.div(_templateObject5);

	var StyledForm = _styledComponents2.default.form(_templateObject6, _variables.fontFamilyBase, _variables.fontWeightBase, _variables.fontSizeBase, _variables.lineHeightBase, function (props) {
	  return props.theme.sidebarFormBorderRadius || '0';
	}, function (props) {
	  return props.theme.sidebarFormBorder || '0';
	}, function (props) {
	  return props.theme.sidebarFormMargin || '0';
	}, function (props) {
	  return props.collapse && '\n    display: none !important;\n    -webkit-transform: translateZ(0);\n  ';
	});

	var Search = function (_React$Component) {
	  _inherits(Search, _React$Component);

	  function Search(props) {
	    _classCallCheck(this, Search);

	    var _this = _possibleConstructorReturn(this, (Search.__proto__ || Object.getPrototypeOf(Search)).call(this, props));

	    _this.state = {
	      value: ''
	    };
	    _this._changeValue = _this.changeValue.bind(_this);
	    _this._buttonClick = _this.buttonClick.bind(_this);
	    return _this;
	  }

	  _createClass(Search, [{
	    key: 'changeValue',
	    value: function changeValue(event) {
	      this.setState({ value: event.target.value });
	    }
	  }, {
	    key: 'buttonClick',
	    value: function buttonClick() {
	      this.props.onClick(this.state.value);
	      this.setState({ value: '' });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        StyledForm,
	        { collapse: this.props.collapse },
	        _react2.default.createElement(
	          InputGroup,
	          null,
	          _react2.default.createElement(StyledInput, {
	            type: 'text',
	            name: this.props.name,
	            placeholder: this.props.placeholder,
	            value: this.state.value,
	            onChange: this._changeValue
	          }),
	          _react2.default.createElement(
	            StyledInputButton,
	            null,
	            _react2.default.createElement(
	              StyledButton,
	              { name: 'searchButton', onClick: this._buttonClick },
	              _react2.default.createElement(StyledIcon, { className: 'fa fa-search' })
	            )
	          )
	        )
	      );
	    }
	  }]);

	  return Search;
	}(_react2.default.Component);

	 false ? Search.propTypes = {
	  name: _react2.default.PropTypes.string,
	  placeholder: _react2.default.PropTypes.string,
	  onClick: _react2.default.PropTypes.func,
	  collapse: _react2.default.PropTypes.bool
	} : void 0;

	Search.defaultProps = {
	  placeholder: 'Search...',
	  onClick: function onClick(v) {
	    return alert('Searching for ' + v);
	  },
	  collapse: false
	};

	exports.default = Search;

/***/ },
/* 348 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _templateObject = _taggedTemplateLiteral(['\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  box-sizing: border-box;\n  display: ', ';\n  text-align: -webkit-match-parent;\n  position: relative;\n  margin: 0;\n  white-space: nowrap;\n  overflow: hidden;\n  padding: 10px 25px 10px 15px;\n  font-size: 12px;\n  background-attachment: scroll;\n  background-clip: initial;\n  background-image: none;\n  background-origin: initial;\n  background-position: initial;\n  background-repeat: initial;\n  background-size: initial;\n  text-overflow: clip;\n\n  /* collapse transform */\n  ', '\n\n  /* theme */\n  color: ', '\n  background-color: ', '\n'], ['\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  box-sizing: border-box;\n  display: ', ';\n  text-align: -webkit-match-parent;\n  position: relative;\n  margin: 0;\n  white-space: nowrap;\n  overflow: hidden;\n  padding: 10px 25px 10px 15px;\n  font-size: 12px;\n  background-attachment: scroll;\n  background-clip: initial;\n  background-image: none;\n  background-origin: initial;\n  background-position: initial;\n  background-repeat: initial;\n  background-size: initial;\n  text-overflow: clip;\n\n  /* collapse transform */\n  ', '\n\n  /* theme */\n  color: ', '\n  background-color: ', '\n']),
	    _templateObject2 = _taggedTemplateLiteral(['\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  white-space: nowrap;\n  overflow: hidden;\n\n  &:hover {\n    overflow: visible;\n  }\n'], ['\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  white-space: nowrap;\n  overflow: hidden;\n\n  &:hover {\n    overflow: visible;\n  }\n']);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _styledComponents = __webpack_require__(268);

	var _styledComponents2 = _interopRequireDefault(_styledComponents);

	var _MenuItem = __webpack_require__(349);

	var _MenuItem2 = _interopRequireDefault(_MenuItem);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); } /* eslint-disable react/jsx-filename-extension */


	var StyledHeader = _styledComponents2.default.li(_templateObject, function (props) {
	  return props.collapse ? 'none !important' : 'list-item';
	}, function (props) {
	  return props.collapse && '-webkit-transform: translateZ(0);';
	}, function (props) {
	  return props.theme.sidebarHeaderColor || '#fff';
	}, function (props) {
	  return props.theme.sidebarHeaderBg || '#fff';
	});

	var StyledMenu = _styledComponents2.default.ul(_templateObject2);

	var renderChildren = function renderChildren(children, sidebarCollapse) {
	  return _react2.default.Children.map(children, function (child) {
	    return _react2.default.cloneElement(child, {
	      collapse: sidebarCollapse
	    });
	  });
	};

	var Menu = function Menu(_ref) {
	  var children = _ref.children,
	      header = _ref.header,
	      collapse = _ref.collapse;
	  return _react2.default.createElement(
	    StyledMenu,
	    { collapse: collapse },
	    _react2.default.createElement(
	      StyledHeader,
	      { collapse: collapse },
	      header
	    ),
	    renderChildren(children, collapse)
	  );
	};

	 false ? Menu.propTypes = {
	  children: _react2.default.PropTypes.node,
	  header: _react2.default.PropTypes.string,
	  collapse: _react2.default.PropTypes.bool
	} : void 0;

	Menu.Item = _MenuItem2.default;

	exports.default = Menu;

/***/ },
/* 349 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _templateObject = _taggedTemplateLiteral(['\n  /* shared */\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  font-family: ', ';\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  box-sizing: border-box;\n\n  cursor: pointer;\n  -webkit-touch-callout: none; /* iOS Safari */\n  -webkit-user-select: none; /* Chrome/Safari/Opera */\n  -khtml-user-select: none; /* Konqueror */\n  -moz-user-select: none; /* Firefox */\n  -ms-user-select: none; /* Internet Explorer/Edge */\n  user-select: none; /* Non-prefixed version, currently not supported by any browser */\n\n  font-size: 75%;\n  font-weight: 700;\n  line-height: 1;\n  display: inline;\n  padding: .2em .6em .3em .6em;\n  text-align: center;\n  white-space: nowrap;\n  vertical-align: baseline;\n  border-radius: .25em;\n  float: right!important;\n  color: #fff;\n  margin-right: 5px;\n\n  /* ----- color ----- */\n  background-color: ', ';\n\n  /* ----- collapse ----- */\n  ', '\n'], ['\n  /* shared */\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  font-family: ', ';\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  box-sizing: border-box;\n\n  cursor: pointer;\n  -webkit-touch-callout: none; /* iOS Safari */\n  -webkit-user-select: none; /* Chrome/Safari/Opera */\n  -khtml-user-select: none; /* Konqueror */\n  -moz-user-select: none; /* Firefox */\n  -ms-user-select: none; /* Internet Explorer/Edge */\n  user-select: none; /* Non-prefixed version, currently not supported by any browser */\n\n  font-size: 75%;\n  font-weight: 700;\n  line-height: 1;\n  display: inline;\n  padding: .2em .6em .3em .6em;\n  text-align: center;\n  white-space: nowrap;\n  vertical-align: baseline;\n  border-radius: .25em;\n  float: right!important;\n  color: #fff;\n  margin-right: 5px;\n\n  /* ----- color ----- */\n  background-color: ', ';\n\n  /* ----- collapse ----- */\n  ', '\n']),
	    _templateObject2 = _taggedTemplateLiteral(['\n  position: absolute;\n  right: 10px;\n  top: 50%;\n  margin-top: -7px;\n\n  color: ', ';\n\n  /* ----- hover ----- */\n  ', '\n'], ['\n  position: absolute;\n  right: 10px;\n  top: 50%;\n  margin-top: -7px;\n\n  color: ', ';\n\n  /* ----- hover ----- */\n  ', '\n']),
	    _templateObject3 = _taggedTemplateLiteral(['\n  cursor: pointer;\n  -webkit-touch-callout: none; /* iOS Safari */\n  -webkit-user-select: none; /* Chrome/Safari/Opera */\n  -khtml-user-select: none; /* Konqueror */\n  -moz-user-select: none; /* Firefox */\n  -ms-user-select: none; /* Internet Explorer/Edge */\n  user-select: none; /* Non-prefixed version, currently not supported by any browser */\n\n  /* collapse */\n  ', '\n'], ['\n  cursor: pointer;\n  -webkit-touch-callout: none; /* iOS Safari */\n  -webkit-user-select: none; /* Chrome/Safari/Opera */\n  -khtml-user-select: none; /* Konqueror */\n  -moz-user-select: none; /* Firefox */\n  -ms-user-select: none; /* Internet Explorer/Edge */\n  user-select: none; /* Non-prefixed version, currently not supported by any browser */\n\n  /* collapse */\n  ', '\n']),
	    _templateObject4 = _taggedTemplateLiteral(['\n  width: auto;\n  height: auto;\n  padding: 0;\n  margin-right: 10px;\n  margin-left: .3em;\n  float: right;\n\n  ', '\n\n  /* ----- collapse ----- */\n  ', ';\n'], ['\n  width: auto;\n  height: auto;\n  padding: 0;\n  margin-right: 10px;\n  margin-left: .3em;\n  float: right;\n\n  ', '\n\n  /* ----- collapse ----- */\n  ', ';\n']),
	    _templateObject5 = _taggedTemplateLiteral(['\n  width: 20px;\n\n  /* ----- color ----- */\n  ', ';\n'], ['\n  width: 20px;\n\n  /* ----- color ----- */\n  ', ';\n']),
	    _templateObject6 = _taggedTemplateLiteral(['\n  cursor: auto;\n  text-decoration: none;\n  display: block;\n  padding: ', ';\n  position: relative;\n  margin: 0;\n  font-size: ', ';\n  background-color: transparent;\n\n  &:active,\n  &:focus,\n  &:hover {\n    outline: none;\n    text-decoration: none;\n  }\n\n  /* ----- theme ----- */\n  /* text color - different in submenu */\n  color: ', ';\n  /* left border - none in submenu */\n  border-left: ', ';\n  /* transition */\n  ', '\n  /* font weight */\n  ', '\n\n  /* ----- active or hover properties ----- */\n  ', '\n'], ['\n  cursor: auto;\n  text-decoration: none;\n  display: block;\n  padding: ', ';\n  position: relative;\n  margin: 0;\n  font-size: ', ';\n  background-color: transparent;\n\n  &:active,\n  &:focus,\n  &:hover {\n    outline: none;\n    text-decoration: none;\n  }\n\n  /* ----- theme ----- */\n  /* text color - different in submenu */\n  color: ', ';\n  /* left border - none in submenu */\n  border-left: ', ';\n  /* transition */\n  ', '\n  /* font weight */\n  ', '\n\n  /* ----- active or hover properties ----- */\n  ', '\n']),
	    _templateObject7 = _taggedTemplateLiteral(['\n  display: ', ';\n  list-style: none;\n  padding: 0 0 0 ', 'px;\n\n  /* ----- theme ----- */\n  margin: ', ';\n  background-color: ', ';\n\n  /* ----- collapse ----- */\n  ', '\n  ', '\n'], ['\n  display: ', ';\n  list-style: none;\n  padding: 0 0 0 ', 'px;\n\n  /* ----- theme ----- */\n  margin: ', ';\n  background-color: ', ';\n\n  /* ----- collapse ----- */\n  ', '\n  ', '\n']),
	    _templateObject8 = _taggedTemplateLiteral(['\n  /* shared */\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  font-family: ', ';\n  font-weight: ', ';\n  font-size: ', ';\n  line-height: ', ';\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  box-sizing: border-box;\n\n  list-style: none;\n  position: relative;\n  margin: 0;\n  padding: 0;\n  white-space: nowrap;\n  display: list-item;\n  text-align: -webkit-match-parent;\n'], ['\n  /* shared */\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  font-family: ', ';\n  font-weight: ', ';\n  font-size: ', ';\n  line-height: ', ';\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  box-sizing: border-box;\n\n  list-style: none;\n  position: relative;\n  margin: 0;\n  padding: 0;\n  white-space: nowrap;\n  display: list-item;\n  text-align: -webkit-match-parent;\n']);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _styledComponents = __webpack_require__(268);

	var _styledComponents2 = _interopRequireDefault(_styledComponents);

	var _tinycolor = __webpack_require__(264);

	var _tinycolor2 = _interopRequireDefault(_tinycolor);

	var _variables = __webpack_require__(340);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); } /* eslint-disable react/jsx-filename-extension */


	var Label = _styledComponents2.default.div(_templateObject, _variables.fontFamilyBase, function (props) {
	  switch (props.type) {
	    case 'primary':
	      return _variables.lightBlue;
	    case 'success':
	      return _variables.green;
	    case 'danger':
	      return _variables.red;
	    case 'warning':
	      return _variables.yellow;
	    case 'information':
	      return _variables.aqua;
	    default:
	      return _variables.lightBlue;
	  }
	}, function (props) {
	  return props.collapse && '\n    display: ' + (props.hover ? 'block' : 'none') + ';\n    float: right;\n  ';
	});

	var RightSpan = _styledComponents2.default.span(_templateObject2, function (props) {
	  return props.theme.sidebarLinkColor || '#fff';
	}, function (props) {
	  return props.collapse && props.hover && !props.level && '\n    display: block;\n    left: ' + (parseInt(_variables.sidebarWidth, 10) - 30) + 'px;\n    top: 10px!important;\n    margin-left: -3px;\n    padding: 12px 5px 12px 20px;\n    float: right;\n    overflow-x: visible;\n  ';
	});

	var StyledTitle = _styledComponents2.default.span(_templateObject3, function (props) {
	  return !props.level && props.collapse && '@media (min-width: ' + _variables.screenSmMin + ') {\n      border-top-right-radius: 4px;\n      ' + (props.hover ? '\n          display: block !important;\n          position: absolute;\n          width: ' + (parseInt(_variables.sidebarWidth, 10) - parseInt(_variables.sidebarMiniWidth, 10)) + 'px;\n          left: ' + _variables.sidebarMiniWidth + ';\n          top: 0;\n          margin-left: -3px;\n          padding: 12px 5px 12px 20px;\n          background-color: inherit;\n        ' : '\n          display: none !important;\n          -webkit-transform: translateZ(0);\n        ') + '\n    }';
	});

	var StyledRightIcon = _styledComponents2.default.i(_templateObject4, function (props) {
	  return props.open && '\n    -ms-transform: rotate(-90deg);\n    -webkit-transform: rotate(-90deg);\n    transform: rotate(-90deg);\n  ';
	}, function (props) {
	  return props.collapse && !props.hover && 'display: none !important;';
	});

	var StyledLeftIcon = _styledComponents2.default.i(_templateObject5, function (props) {
	  switch (props.color) {
	    case 'primary':
	      return 'color: ' + _variables.lightBlue + ';';
	    case 'success':
	      return 'color: ' + _variables.green + ';';
	    case 'danger':
	      return 'color: ' + _variables.red + ';';
	    case 'warning':
	      return 'color: ' + _variables.yellow + ';';
	    case 'information':
	      return 'color: ' + _variables.aqua + ';';
	    default:
	      {
	        var c = (0, _tinycolor2.default)(props.color);
	        return c.isValid() ? 'color: ' + c.toString() + ';' : null;
	      }
	  }
	});

	var StyledLink = _styledComponents2.default.a(_templateObject6, function (props) {
	  return !props.level ? '12px 5px 12px 15px' : '5px 5px 5px 15px';
	}, _variables.fontSizeBase, function (props) {
	  return props.level ? props.theme.sidebarSubmenuLinkColor : props.theme.sidebarLinkColor;
	}, function (props) {
	  return !props.level ? props.theme.sidebarLinkBorderLeft : 'none';
	}, function (props) {
	  return props.theme.sidebarLinkTransition && '\n    -webkit-transition: ' + props.theme.sidebarLinkTransition + ';\n    -moz-transition: ' + props.theme.sidebarLinkTransition + ';\n    -o-transition: ' + props.theme.sidebarLinkTransition + ';\n    transition: ' + props.theme.sidebarLinkTransition + ';\n  ';
	}, function (props) {
	  return props.theme.sidebarLinkFontWeight && '\n    font-weight: ' + props.theme.sidebarLinkFontWeight + ';\n  ';
	}, function (props) {
	  return (props.active || props.hover) && '\n    color: ' + (props.theme.sidebarLinkActiveColor || '#fff') + ';\n    background: ' + (!props.level && props.theme.sidebarLinkActiveBg) + ';\n    border-left-color: ' + (props.theme.sidebarLinkActiveBorderLeftColor || '#3c8dbc') + ';\n    font-weight: ' + (props.theme.sidebarLinkActiveFontWeight || 'normal') + ';\n    text-decoration: none;\n  ';
	});

	var StyledSubMenu = _styledComponents2.default.ul(_templateObject7, function (props) {
	  return props.open ? 'block' : 'none';
	}, function (props) {
	  return (props.level + 1) * 5;
	}, function (props) {
	  return props.theme.sidebarSubmenuMargin || '0';
	}, function (props) {
	  return props.theme.sidebarSubmenuBg || '#222d32';
	}, function (props) {
	  return props.collapse && '@media (min-width: ' + _variables.screenSmMin + ') {\n      ' + (props.theme.sidebarSubmenuLgBorderLeft && 'border-left: ' + props.theme.sidebarSubmenuLgBorderLeft) + '\n    }';
	}, function (props) {
	  return props.collapse && props.open && !props.level && '@media (min-width: ' + _variables.screenSmMin + ') {\n      position: absolute;\n      width: ' + (parseInt(_variables.sidebarWidth, 10) - 50) + 'px;\n      left: ' + _variables.sidebarMiniWidth + ';\n      top: 44px;\n      margin-left: 0;\n      border-bottom-right-radius: 4px;\n      ' + (props.theme.sidebarSubmenuLgBorderLeft && 'border-left: ' + props.theme.sidebarSubmenuLgBorderLeft) + '\n    }';
	});

	var StyledMenuItem = _styledComponents2.default.li(_templateObject8, _variables.fontFamilyBase, _variables.fontWeightBase, _variables.fontSizeBase, _variables.lineHeightBase);

	var renderChildren = function renderChildren(children, sidebarCollapse, level, hover) {
	  var newLevel = level + 1;
	  return _react2.default.Children.map(children, function (child, index) {
	    return _react2.default.cloneElement(child, {
	      key: index.toString(),
	      collapse: sidebarCollapse,
	      level: newLevel,
	      parentHover: hover
	    });
	  });
	};

	var renderLabels = function renderLabels(labels, collapse, hover) {
	  return labels.map(function (l) {
	    if (l.key && l.type && l.text) {
	      if (l.key === 1) {
	        return _react2.default.createElement(
	          Label,
	          {
	            collapse: collapse,
	            hover: hover,
	            key: l.key.toString(),
	            type: l.type
	          },
	          l.text
	        );
	      } else if (!collapse) {
	        return _react2.default.createElement(
	          Label,
	          {
	            collapse: collapse,
	            hover: hover,
	            key: l.key.toString(),
	            type: l.type
	          },
	          l.text
	        );
	      }
	    }
	    return null;
	  });
	};

	var MenuItem = function (_React$Component) {
	  _inherits(MenuItem, _React$Component);

	  function MenuItem(props) {
	    _classCallCheck(this, MenuItem);

	    var _this = _possibleConstructorReturn(this, (MenuItem.__proto__ || Object.getPrototypeOf(MenuItem)).call(this, props));

	    _this.state = {
	      open: false,
	      hover: false
	    };
	    _this._toggleMenu = _this.toggleMenu.bind(_this);
	    _this._toggleHover = _this.toggleHover.bind(_this);
	    return _this;
	  }

	  _createClass(MenuItem, [{
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(nextProps) {
	      nextProps.collapse !== this.props.collapse && this.setState({ open: false });
	    }
	  }, {
	    key: 'toggleMenu',
	    value: function toggleMenu() {
	      this.props.children && this.setState({ open: !this.state.open });
	    }
	  }, {
	    key: 'toggleHover',
	    value: function toggleHover(state) {
	      this.setState({ hover: state });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this2 = this;

	      return _react2.default.createElement(
	        StyledMenuItem,
	        {
	          collapse: this.props.collapse,
	          hover: this.props.parentHover,
	          level: this.props.level,
	          onMouseLeave: function onMouseLeave() {
	            return _this2._toggleHover(false);
	          }
	        },
	        _react2.default.createElement(
	          StyledLink,
	          {
	            active: this.props.active,
	            collapse: this.props.collapse,
	            hover: this.state.hover,
	            href: this.props.children || this.props.onClick ? null : this.props.href,
	            level: this.props.level,
	            onClick: this.props.children ? this._toggleMenu : this.props.onClick,
	            onMouseEnter: function onMouseEnter() {
	              return _this2._toggleHover(true);
	            }
	          },
	          _react2.default.createElement(StyledLeftIcon, {
	            className: 'fa ' + (this.props.icon.className || 'fa-circle-o'),
	            color: this.props.icon.color || 'none'
	          }),
	          _react2.default.createElement(
	            StyledTitle,
	            {
	              collapse: this.props.collapse,
	              hover: this.state.hover,
	              level: this.props.level
	            },
	            this.props.title
	          ),
	          _react2.default.createElement(
	            RightSpan,
	            {
	              collapse: this.props.collapse,
	              hover: this.state.hover,
	              level: this.props.level
	            },
	            this.props.labels ? renderLabels(this.props.labels, this.props.collapse, this.state.hover) : this.props.children && _react2.default.createElement(StyledRightIcon, {
	              className: 'fa fa-angle-left',
	              open: this.state.open,
	              collapse: this.props.collapse,
	              hover: this.state.hover
	            })
	          )
	        ),
	        this.props.children && _react2.default.createElement(
	          StyledSubMenu,
	          {
	            collapse: this.props.collapse,
	            hover: this.state.hover,
	            level: this.props.level,
	            open: this.state.open
	          },
	          renderChildren(this.props.children, this.props.collapse, this.props.level, this.state.hover || this.props.parentHover)
	        )
	      );
	    }
	  }]);

	  return MenuItem;
	}(_react2.default.Component);

	 false ? MenuItem.propTypes = {
	  children: _react2.default.PropTypes.node,
	  active: _react2.default.PropTypes.bool,
	  collapse: _react2.default.PropTypes.bool,
	  icon: _react2.default.PropTypes.objectOf(_react2.default.PropTypes.string),
	  href: _react2.default.PropTypes.string,
	  labels: _react2.default.PropTypes.arrayOf(_react2.default.PropTypes.object),
	  level: _react2.default.PropTypes.number,
	  onClick: _react2.default.PropTypes.func,
	  parentHover: _react2.default.PropTypes.bool,
	  title: _react2.default.PropTypes.string
	} : void 0;

	MenuItem.defaultProps = {
	  collapse: false,
	  icon: { className: 'fa-circle-o' },
	  href: null,
	  level: 0,
	  parentHover: false,
	  title: 'Title'
	};

	exports.default = MenuItem;

/***/ },
/* 350 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _templateObject = _taggedTemplateLiteral(['\n  /* clearfix */\n  &:before, &:after {\n    display: table;\n    content: " ";\n    -webkit-box-sizing: border-box;\n    -moz-box-sizing: border-box;\n    box-sizing: border-box;\n  }\n  &:after {\n    clear: both;\n  }\n\n  /* shared */\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  font-family: ', ';\n  font-weight: ', ';\n  font-size: ', ';\n  line-height: ', ';\n  box-sizing: border-box;\n\n  /* theme */\n  ', '\n\n  background-color: ', ';\n  min-height: 100%;\n  margin-left: ', ';\n  z-index: 800;\n  padding: 15px;\n\n  -webkit-transition: ', ' ', ', width ', ' ', ';\n  -moz-transition: ', ' ', ', width ', ' ', ';\n  -o-transition: ', ' ', ', width ', ' ', ';\n  transition: ', ' ', ', width ', ' ', ';\n\n  /* fixed layout */\n  ', ';\n\n  /* media queries */\n  /* sidebar on large screens */\n  @media (min-width: ', ') {\n    ', '\n    ', '\n  }\n  /* sidebar on small screens */\n  @media (max-width: ', ') {\n    margin-left: 0;\n    ', ';\n  }\n'], ['\n  /* clearfix */\n  &:before, &:after {\n    display: table;\n    content: " ";\n    -webkit-box-sizing: border-box;\n    -moz-box-sizing: border-box;\n    box-sizing: border-box;\n  }\n  &:after {\n    clear: both;\n  }\n\n  /* shared */\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  font-family: ', ';\n  font-weight: ', ';\n  font-size: ', ';\n  line-height: ', ';\n  box-sizing: border-box;\n\n  /* theme */\n  ', '\n\n  background-color: ', ';\n  min-height: 100%;\n  margin-left: ', ';\n  z-index: 800;\n  padding: 15px;\n\n  -webkit-transition: ', ' ', ', width ', ' ', ';\n  -moz-transition: ', ' ', ', width ', ' ', ';\n  -o-transition: ', ' ', ', width ', ' ', ';\n  transition: ', ' ', ', width ', ' ', ';\n\n  /* fixed layout */\n  ', ';\n\n  /* media queries */\n  /* sidebar on large screens */\n  @media (min-width: ', ') {\n    ', '\n    ', '\n  }\n  /* sidebar on small screens */\n  @media (max-width: ', ') {\n    margin-left: 0;\n    ', ';\n  }\n']);

	var _styledComponents = __webpack_require__(268);

	var _styledComponents2 = _interopRequireDefault(_styledComponents);

	var _variables = __webpack_require__(340);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

	var Content = _styledComponents2.default.div(_templateObject, _variables.fontFamilyBase, _variables.fontWeightBase, _variables.fontSizeBase, _variables.lineHeightBase, function (props) {
	  return props.theme.contentLeftBorder && 'border-left: ' + props.theme.contentLeftBorder + ';';
	}, _variables.bodyBg, function (props) {
	  return props.topNav ? '0' : _variables.sidebarWidth;
	}, _variables.transitionSpeed, _variables.transitionFn, _variables.transitionSpeed, _variables.transitionFn, _variables.transitionSpeed, _variables.transitionFn, _variables.transitionSpeed, _variables.transitionFn, _variables.transitionSpeed, _variables.transitionFn, _variables.transitionSpeed, _variables.transitionFn, _variables.transitionSpeed, _variables.transitionFn, _variables.transitionSpeed, _variables.transitionFn, function (props) {
	  return props.fixed && 'padding-top: ' + _variables.navbarHeight + ';';
	}, _variables.screenSmMin, function (props) {
	  return props.sidebarCollapse && props.sidebarMini && '\n      margin-left: ' + _variables.sidebarMiniWidth + ' !important;\n      z-index: 840;\n    ';
	}, function (props) {
	  return props.sidebarCollapse && !props.sidebarMini && 'margin-left: 0;';
	}, _variables.screenXsMax, function (props) {
	  return props.fixed && 'padding-top: ' + parseInt(_variables.navbarHeight, 10) * 2 + 'px;';
	});

	exports.default = Content;

/***/ },
/* 351 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	__webpack_require__(352);

	var _skinBlack = __webpack_require__(362);

	var _skinBlack2 = _interopRequireDefault(_skinBlack);

	var _skinBlackLight = __webpack_require__(363);

	var _skinBlackLight2 = _interopRequireDefault(_skinBlackLight);

	var _skinBlue = __webpack_require__(364);

	var _skinBlue2 = _interopRequireDefault(_skinBlue);

	var _skinBlueLight = __webpack_require__(365);

	var _skinBlueLight2 = _interopRequireDefault(_skinBlueLight);

	var _skinGreen = __webpack_require__(366);

	var _skinGreen2 = _interopRequireDefault(_skinGreen);

	var _skinGreenLight = __webpack_require__(367);

	var _skinGreenLight2 = _interopRequireDefault(_skinGreenLight);

	var _skinPurple = __webpack_require__(368);

	var _skinPurple2 = _interopRequireDefault(_skinPurple);

	var _skinPurpleLight = __webpack_require__(369);

	var _skinPurpleLight2 = _interopRequireDefault(_skinPurpleLight);

	var _skinRed = __webpack_require__(370);

	var _skinRed2 = _interopRequireDefault(_skinRed);

	var _skinRedLight = __webpack_require__(371);

	var _skinRedLight2 = _interopRequireDefault(_skinRedLight);

	var _skinYellow = __webpack_require__(372);

	var _skinYellow2 = _interopRequireDefault(_skinYellow);

	var _skinYellowLight = __webpack_require__(373);

	var _skinYellowLight2 = _interopRequireDefault(_skinYellowLight);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  'skin-black': _skinBlack2.default,
	  'skin-black-light': _skinBlackLight2.default,
	  'skin-blue': _skinBlue2.default,
	  'skin-blue-light': _skinBlueLight2.default,
	  'skin-green': _skinGreen2.default,
	  'skin-green-light': _skinGreenLight2.default,
	  'skin-purple': _skinPurple2.default,
	  'skin-purple-light': _skinPurpleLight2.default,
	  'skin-red': _skinRed2.default,
	  'skin-red-light': _skinRedLight2.default,
	  'skin-yellow': _skinYellow2.default,
	  'skin-yellow-light': _skinYellowLight2.default
	};

/***/ },
/* 352 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(353);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(361)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../css-loader/index.js!./font-awesome.min.css", function() {
				var newContent = require("!!./../../css-loader/index.js!./font-awesome.min.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 353 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(354)();
	// imports


	// module
	exports.push([module.id, "/*!\n *  Font Awesome 4.7.0 by @davegandy - http://fontawesome.io - @fontawesome\n *  License - http://fontawesome.io/license (Font: SIL OFL 1.1, CSS: MIT License)\n */@font-face{font-family:'FontAwesome';src:url(" + __webpack_require__(355) + ");src:url(" + __webpack_require__(356) + "?#iefix&v=4.7.0) format('embedded-opentype'),url(" + __webpack_require__(357) + ") format('woff2'),url(" + __webpack_require__(358) + ") format('woff'),url(" + __webpack_require__(359) + ") format('truetype'),url(" + __webpack_require__(360) + "#fontawesomeregular) format('svg');font-weight:normal;font-style:normal}.fa{display:inline-block;font:normal normal normal 14px/1 FontAwesome;font-size:inherit;text-rendering:auto;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.fa-lg{font-size:1.33333333em;line-height:.75em;vertical-align:-15%}.fa-2x{font-size:2em}.fa-3x{font-size:3em}.fa-4x{font-size:4em}.fa-5x{font-size:5em}.fa-fw{width:1.28571429em;text-align:center}.fa-ul{padding-left:0;margin-left:2.14285714em;list-style-type:none}.fa-ul>li{position:relative}.fa-li{position:absolute;left:-2.14285714em;width:2.14285714em;top:.14285714em;text-align:center}.fa-li.fa-lg{left:-1.85714286em}.fa-border{padding:.2em .25em .15em;border:solid .08em #eee;border-radius:.1em}.fa-pull-left{float:left}.fa-pull-right{float:right}.fa.fa-pull-left{margin-right:.3em}.fa.fa-pull-right{margin-left:.3em}.pull-right{float:right}.pull-left{float:left}.fa.pull-left{margin-right:.3em}.fa.pull-right{margin-left:.3em}.fa-spin{-webkit-animation:fa-spin 2s infinite linear;animation:fa-spin 2s infinite linear}.fa-pulse{-webkit-animation:fa-spin 1s infinite steps(8);animation:fa-spin 1s infinite steps(8)}@-webkit-keyframes fa-spin{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}100%{-webkit-transform:rotate(359deg);transform:rotate(359deg)}}@keyframes fa-spin{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}100%{-webkit-transform:rotate(359deg);transform:rotate(359deg)}}.fa-rotate-90{-ms-filter:\"progid:DXImageTransform.Microsoft.BasicImage(rotation=1)\";-webkit-transform:rotate(90deg);-ms-transform:rotate(90deg);transform:rotate(90deg)}.fa-rotate-180{-ms-filter:\"progid:DXImageTransform.Microsoft.BasicImage(rotation=2)\";-webkit-transform:rotate(180deg);-ms-transform:rotate(180deg);transform:rotate(180deg)}.fa-rotate-270{-ms-filter:\"progid:DXImageTransform.Microsoft.BasicImage(rotation=3)\";-webkit-transform:rotate(270deg);-ms-transform:rotate(270deg);transform:rotate(270deg)}.fa-flip-horizontal{-ms-filter:\"progid:DXImageTransform.Microsoft.BasicImage(rotation=0, mirror=1)\";-webkit-transform:scale(-1, 1);-ms-transform:scale(-1, 1);transform:scale(-1, 1)}.fa-flip-vertical{-ms-filter:\"progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)\";-webkit-transform:scale(1, -1);-ms-transform:scale(1, -1);transform:scale(1, -1)}:root .fa-rotate-90,:root .fa-rotate-180,:root .fa-rotate-270,:root .fa-flip-horizontal,:root .fa-flip-vertical{filter:none}.fa-stack{position:relative;display:inline-block;width:2em;height:2em;line-height:2em;vertical-align:middle}.fa-stack-1x,.fa-stack-2x{position:absolute;left:0;width:100%;text-align:center}.fa-stack-1x{line-height:inherit}.fa-stack-2x{font-size:2em}.fa-inverse{color:#fff}.fa-glass:before{content:\"\\F000\"}.fa-music:before{content:\"\\F001\"}.fa-search:before{content:\"\\F002\"}.fa-envelope-o:before{content:\"\\F003\"}.fa-heart:before{content:\"\\F004\"}.fa-star:before{content:\"\\F005\"}.fa-star-o:before{content:\"\\F006\"}.fa-user:before{content:\"\\F007\"}.fa-film:before{content:\"\\F008\"}.fa-th-large:before{content:\"\\F009\"}.fa-th:before{content:\"\\F00A\"}.fa-th-list:before{content:\"\\F00B\"}.fa-check:before{content:\"\\F00C\"}.fa-remove:before,.fa-close:before,.fa-times:before{content:\"\\F00D\"}.fa-search-plus:before{content:\"\\F00E\"}.fa-search-minus:before{content:\"\\F010\"}.fa-power-off:before{content:\"\\F011\"}.fa-signal:before{content:\"\\F012\"}.fa-gear:before,.fa-cog:before{content:\"\\F013\"}.fa-trash-o:before{content:\"\\F014\"}.fa-home:before{content:\"\\F015\"}.fa-file-o:before{content:\"\\F016\"}.fa-clock-o:before{content:\"\\F017\"}.fa-road:before{content:\"\\F018\"}.fa-download:before{content:\"\\F019\"}.fa-arrow-circle-o-down:before{content:\"\\F01A\"}.fa-arrow-circle-o-up:before{content:\"\\F01B\"}.fa-inbox:before{content:\"\\F01C\"}.fa-play-circle-o:before{content:\"\\F01D\"}.fa-rotate-right:before,.fa-repeat:before{content:\"\\F01E\"}.fa-refresh:before{content:\"\\F021\"}.fa-list-alt:before{content:\"\\F022\"}.fa-lock:before{content:\"\\F023\"}.fa-flag:before{content:\"\\F024\"}.fa-headphones:before{content:\"\\F025\"}.fa-volume-off:before{content:\"\\F026\"}.fa-volume-down:before{content:\"\\F027\"}.fa-volume-up:before{content:\"\\F028\"}.fa-qrcode:before{content:\"\\F029\"}.fa-barcode:before{content:\"\\F02A\"}.fa-tag:before{content:\"\\F02B\"}.fa-tags:before{content:\"\\F02C\"}.fa-book:before{content:\"\\F02D\"}.fa-bookmark:before{content:\"\\F02E\"}.fa-print:before{content:\"\\F02F\"}.fa-camera:before{content:\"\\F030\"}.fa-font:before{content:\"\\F031\"}.fa-bold:before{content:\"\\F032\"}.fa-italic:before{content:\"\\F033\"}.fa-text-height:before{content:\"\\F034\"}.fa-text-width:before{content:\"\\F035\"}.fa-align-left:before{content:\"\\F036\"}.fa-align-center:before{content:\"\\F037\"}.fa-align-right:before{content:\"\\F038\"}.fa-align-justify:before{content:\"\\F039\"}.fa-list:before{content:\"\\F03A\"}.fa-dedent:before,.fa-outdent:before{content:\"\\F03B\"}.fa-indent:before{content:\"\\F03C\"}.fa-video-camera:before{content:\"\\F03D\"}.fa-photo:before,.fa-image:before,.fa-picture-o:before{content:\"\\F03E\"}.fa-pencil:before{content:\"\\F040\"}.fa-map-marker:before{content:\"\\F041\"}.fa-adjust:before{content:\"\\F042\"}.fa-tint:before{content:\"\\F043\"}.fa-edit:before,.fa-pencil-square-o:before{content:\"\\F044\"}.fa-share-square-o:before{content:\"\\F045\"}.fa-check-square-o:before{content:\"\\F046\"}.fa-arrows:before{content:\"\\F047\"}.fa-step-backward:before{content:\"\\F048\"}.fa-fast-backward:before{content:\"\\F049\"}.fa-backward:before{content:\"\\F04A\"}.fa-play:before{content:\"\\F04B\"}.fa-pause:before{content:\"\\F04C\"}.fa-stop:before{content:\"\\F04D\"}.fa-forward:before{content:\"\\F04E\"}.fa-fast-forward:before{content:\"\\F050\"}.fa-step-forward:before{content:\"\\F051\"}.fa-eject:before{content:\"\\F052\"}.fa-chevron-left:before{content:\"\\F053\"}.fa-chevron-right:before{content:\"\\F054\"}.fa-plus-circle:before{content:\"\\F055\"}.fa-minus-circle:before{content:\"\\F056\"}.fa-times-circle:before{content:\"\\F057\"}.fa-check-circle:before{content:\"\\F058\"}.fa-question-circle:before{content:\"\\F059\"}.fa-info-circle:before{content:\"\\F05A\"}.fa-crosshairs:before{content:\"\\F05B\"}.fa-times-circle-o:before{content:\"\\F05C\"}.fa-check-circle-o:before{content:\"\\F05D\"}.fa-ban:before{content:\"\\F05E\"}.fa-arrow-left:before{content:\"\\F060\"}.fa-arrow-right:before{content:\"\\F061\"}.fa-arrow-up:before{content:\"\\F062\"}.fa-arrow-down:before{content:\"\\F063\"}.fa-mail-forward:before,.fa-share:before{content:\"\\F064\"}.fa-expand:before{content:\"\\F065\"}.fa-compress:before{content:\"\\F066\"}.fa-plus:before{content:\"\\F067\"}.fa-minus:before{content:\"\\F068\"}.fa-asterisk:before{content:\"\\F069\"}.fa-exclamation-circle:before{content:\"\\F06A\"}.fa-gift:before{content:\"\\F06B\"}.fa-leaf:before{content:\"\\F06C\"}.fa-fire:before{content:\"\\F06D\"}.fa-eye:before{content:\"\\F06E\"}.fa-eye-slash:before{content:\"\\F070\"}.fa-warning:before,.fa-exclamation-triangle:before{content:\"\\F071\"}.fa-plane:before{content:\"\\F072\"}.fa-calendar:before{content:\"\\F073\"}.fa-random:before{content:\"\\F074\"}.fa-comment:before{content:\"\\F075\"}.fa-magnet:before{content:\"\\F076\"}.fa-chevron-up:before{content:\"\\F077\"}.fa-chevron-down:before{content:\"\\F078\"}.fa-retweet:before{content:\"\\F079\"}.fa-shopping-cart:before{content:\"\\F07A\"}.fa-folder:before{content:\"\\F07B\"}.fa-folder-open:before{content:\"\\F07C\"}.fa-arrows-v:before{content:\"\\F07D\"}.fa-arrows-h:before{content:\"\\F07E\"}.fa-bar-chart-o:before,.fa-bar-chart:before{content:\"\\F080\"}.fa-twitter-square:before{content:\"\\F081\"}.fa-facebook-square:before{content:\"\\F082\"}.fa-camera-retro:before{content:\"\\F083\"}.fa-key:before{content:\"\\F084\"}.fa-gears:before,.fa-cogs:before{content:\"\\F085\"}.fa-comments:before{content:\"\\F086\"}.fa-thumbs-o-up:before{content:\"\\F087\"}.fa-thumbs-o-down:before{content:\"\\F088\"}.fa-star-half:before{content:\"\\F089\"}.fa-heart-o:before{content:\"\\F08A\"}.fa-sign-out:before{content:\"\\F08B\"}.fa-linkedin-square:before{content:\"\\F08C\"}.fa-thumb-tack:before{content:\"\\F08D\"}.fa-external-link:before{content:\"\\F08E\"}.fa-sign-in:before{content:\"\\F090\"}.fa-trophy:before{content:\"\\F091\"}.fa-github-square:before{content:\"\\F092\"}.fa-upload:before{content:\"\\F093\"}.fa-lemon-o:before{content:\"\\F094\"}.fa-phone:before{content:\"\\F095\"}.fa-square-o:before{content:\"\\F096\"}.fa-bookmark-o:before{content:\"\\F097\"}.fa-phone-square:before{content:\"\\F098\"}.fa-twitter:before{content:\"\\F099\"}.fa-facebook-f:before,.fa-facebook:before{content:\"\\F09A\"}.fa-github:before{content:\"\\F09B\"}.fa-unlock:before{content:\"\\F09C\"}.fa-credit-card:before{content:\"\\F09D\"}.fa-feed:before,.fa-rss:before{content:\"\\F09E\"}.fa-hdd-o:before{content:\"\\F0A0\"}.fa-bullhorn:before{content:\"\\F0A1\"}.fa-bell:before{content:\"\\F0F3\"}.fa-certificate:before{content:\"\\F0A3\"}.fa-hand-o-right:before{content:\"\\F0A4\"}.fa-hand-o-left:before{content:\"\\F0A5\"}.fa-hand-o-up:before{content:\"\\F0A6\"}.fa-hand-o-down:before{content:\"\\F0A7\"}.fa-arrow-circle-left:before{content:\"\\F0A8\"}.fa-arrow-circle-right:before{content:\"\\F0A9\"}.fa-arrow-circle-up:before{content:\"\\F0AA\"}.fa-arrow-circle-down:before{content:\"\\F0AB\"}.fa-globe:before{content:\"\\F0AC\"}.fa-wrench:before{content:\"\\F0AD\"}.fa-tasks:before{content:\"\\F0AE\"}.fa-filter:before{content:\"\\F0B0\"}.fa-briefcase:before{content:\"\\F0B1\"}.fa-arrows-alt:before{content:\"\\F0B2\"}.fa-group:before,.fa-users:before{content:\"\\F0C0\"}.fa-chain:before,.fa-link:before{content:\"\\F0C1\"}.fa-cloud:before{content:\"\\F0C2\"}.fa-flask:before{content:\"\\F0C3\"}.fa-cut:before,.fa-scissors:before{content:\"\\F0C4\"}.fa-copy:before,.fa-files-o:before{content:\"\\F0C5\"}.fa-paperclip:before{content:\"\\F0C6\"}.fa-save:before,.fa-floppy-o:before{content:\"\\F0C7\"}.fa-square:before{content:\"\\F0C8\"}.fa-navicon:before,.fa-reorder:before,.fa-bars:before{content:\"\\F0C9\"}.fa-list-ul:before{content:\"\\F0CA\"}.fa-list-ol:before{content:\"\\F0CB\"}.fa-strikethrough:before{content:\"\\F0CC\"}.fa-underline:before{content:\"\\F0CD\"}.fa-table:before{content:\"\\F0CE\"}.fa-magic:before{content:\"\\F0D0\"}.fa-truck:before{content:\"\\F0D1\"}.fa-pinterest:before{content:\"\\F0D2\"}.fa-pinterest-square:before{content:\"\\F0D3\"}.fa-google-plus-square:before{content:\"\\F0D4\"}.fa-google-plus:before{content:\"\\F0D5\"}.fa-money:before{content:\"\\F0D6\"}.fa-caret-down:before{content:\"\\F0D7\"}.fa-caret-up:before{content:\"\\F0D8\"}.fa-caret-left:before{content:\"\\F0D9\"}.fa-caret-right:before{content:\"\\F0DA\"}.fa-columns:before{content:\"\\F0DB\"}.fa-unsorted:before,.fa-sort:before{content:\"\\F0DC\"}.fa-sort-down:before,.fa-sort-desc:before{content:\"\\F0DD\"}.fa-sort-up:before,.fa-sort-asc:before{content:\"\\F0DE\"}.fa-envelope:before{content:\"\\F0E0\"}.fa-linkedin:before{content:\"\\F0E1\"}.fa-rotate-left:before,.fa-undo:before{content:\"\\F0E2\"}.fa-legal:before,.fa-gavel:before{content:\"\\F0E3\"}.fa-dashboard:before,.fa-tachometer:before{content:\"\\F0E4\"}.fa-comment-o:before{content:\"\\F0E5\"}.fa-comments-o:before{content:\"\\F0E6\"}.fa-flash:before,.fa-bolt:before{content:\"\\F0E7\"}.fa-sitemap:before{content:\"\\F0E8\"}.fa-umbrella:before{content:\"\\F0E9\"}.fa-paste:before,.fa-clipboard:before{content:\"\\F0EA\"}.fa-lightbulb-o:before{content:\"\\F0EB\"}.fa-exchange:before{content:\"\\F0EC\"}.fa-cloud-download:before{content:\"\\F0ED\"}.fa-cloud-upload:before{content:\"\\F0EE\"}.fa-user-md:before{content:\"\\F0F0\"}.fa-stethoscope:before{content:\"\\F0F1\"}.fa-suitcase:before{content:\"\\F0F2\"}.fa-bell-o:before{content:\"\\F0A2\"}.fa-coffee:before{content:\"\\F0F4\"}.fa-cutlery:before{content:\"\\F0F5\"}.fa-file-text-o:before{content:\"\\F0F6\"}.fa-building-o:before{content:\"\\F0F7\"}.fa-hospital-o:before{content:\"\\F0F8\"}.fa-ambulance:before{content:\"\\F0F9\"}.fa-medkit:before{content:\"\\F0FA\"}.fa-fighter-jet:before{content:\"\\F0FB\"}.fa-beer:before{content:\"\\F0FC\"}.fa-h-square:before{content:\"\\F0FD\"}.fa-plus-square:before{content:\"\\F0FE\"}.fa-angle-double-left:before{content:\"\\F100\"}.fa-angle-double-right:before{content:\"\\F101\"}.fa-angle-double-up:before{content:\"\\F102\"}.fa-angle-double-down:before{content:\"\\F103\"}.fa-angle-left:before{content:\"\\F104\"}.fa-angle-right:before{content:\"\\F105\"}.fa-angle-up:before{content:\"\\F106\"}.fa-angle-down:before{content:\"\\F107\"}.fa-desktop:before{content:\"\\F108\"}.fa-laptop:before{content:\"\\F109\"}.fa-tablet:before{content:\"\\F10A\"}.fa-mobile-phone:before,.fa-mobile:before{content:\"\\F10B\"}.fa-circle-o:before{content:\"\\F10C\"}.fa-quote-left:before{content:\"\\F10D\"}.fa-quote-right:before{content:\"\\F10E\"}.fa-spinner:before{content:\"\\F110\"}.fa-circle:before{content:\"\\F111\"}.fa-mail-reply:before,.fa-reply:before{content:\"\\F112\"}.fa-github-alt:before{content:\"\\F113\"}.fa-folder-o:before{content:\"\\F114\"}.fa-folder-open-o:before{content:\"\\F115\"}.fa-smile-o:before{content:\"\\F118\"}.fa-frown-o:before{content:\"\\F119\"}.fa-meh-o:before{content:\"\\F11A\"}.fa-gamepad:before{content:\"\\F11B\"}.fa-keyboard-o:before{content:\"\\F11C\"}.fa-flag-o:before{content:\"\\F11D\"}.fa-flag-checkered:before{content:\"\\F11E\"}.fa-terminal:before{content:\"\\F120\"}.fa-code:before{content:\"\\F121\"}.fa-mail-reply-all:before,.fa-reply-all:before{content:\"\\F122\"}.fa-star-half-empty:before,.fa-star-half-full:before,.fa-star-half-o:before{content:\"\\F123\"}.fa-location-arrow:before{content:\"\\F124\"}.fa-crop:before{content:\"\\F125\"}.fa-code-fork:before{content:\"\\F126\"}.fa-unlink:before,.fa-chain-broken:before{content:\"\\F127\"}.fa-question:before{content:\"\\F128\"}.fa-info:before{content:\"\\F129\"}.fa-exclamation:before{content:\"\\F12A\"}.fa-superscript:before{content:\"\\F12B\"}.fa-subscript:before{content:\"\\F12C\"}.fa-eraser:before{content:\"\\F12D\"}.fa-puzzle-piece:before{content:\"\\F12E\"}.fa-microphone:before{content:\"\\F130\"}.fa-microphone-slash:before{content:\"\\F131\"}.fa-shield:before{content:\"\\F132\"}.fa-calendar-o:before{content:\"\\F133\"}.fa-fire-extinguisher:before{content:\"\\F134\"}.fa-rocket:before{content:\"\\F135\"}.fa-maxcdn:before{content:\"\\F136\"}.fa-chevron-circle-left:before{content:\"\\F137\"}.fa-chevron-circle-right:before{content:\"\\F138\"}.fa-chevron-circle-up:before{content:\"\\F139\"}.fa-chevron-circle-down:before{content:\"\\F13A\"}.fa-html5:before{content:\"\\F13B\"}.fa-css3:before{content:\"\\F13C\"}.fa-anchor:before{content:\"\\F13D\"}.fa-unlock-alt:before{content:\"\\F13E\"}.fa-bullseye:before{content:\"\\F140\"}.fa-ellipsis-h:before{content:\"\\F141\"}.fa-ellipsis-v:before{content:\"\\F142\"}.fa-rss-square:before{content:\"\\F143\"}.fa-play-circle:before{content:\"\\F144\"}.fa-ticket:before{content:\"\\F145\"}.fa-minus-square:before{content:\"\\F146\"}.fa-minus-square-o:before{content:\"\\F147\"}.fa-level-up:before{content:\"\\F148\"}.fa-level-down:before{content:\"\\F149\"}.fa-check-square:before{content:\"\\F14A\"}.fa-pencil-square:before{content:\"\\F14B\"}.fa-external-link-square:before{content:\"\\F14C\"}.fa-share-square:before{content:\"\\F14D\"}.fa-compass:before{content:\"\\F14E\"}.fa-toggle-down:before,.fa-caret-square-o-down:before{content:\"\\F150\"}.fa-toggle-up:before,.fa-caret-square-o-up:before{content:\"\\F151\"}.fa-toggle-right:before,.fa-caret-square-o-right:before{content:\"\\F152\"}.fa-euro:before,.fa-eur:before{content:\"\\F153\"}.fa-gbp:before{content:\"\\F154\"}.fa-dollar:before,.fa-usd:before{content:\"\\F155\"}.fa-rupee:before,.fa-inr:before{content:\"\\F156\"}.fa-cny:before,.fa-rmb:before,.fa-yen:before,.fa-jpy:before{content:\"\\F157\"}.fa-ruble:before,.fa-rouble:before,.fa-rub:before{content:\"\\F158\"}.fa-won:before,.fa-krw:before{content:\"\\F159\"}.fa-bitcoin:before,.fa-btc:before{content:\"\\F15A\"}.fa-file:before{content:\"\\F15B\"}.fa-file-text:before{content:\"\\F15C\"}.fa-sort-alpha-asc:before{content:\"\\F15D\"}.fa-sort-alpha-desc:before{content:\"\\F15E\"}.fa-sort-amount-asc:before{content:\"\\F160\"}.fa-sort-amount-desc:before{content:\"\\F161\"}.fa-sort-numeric-asc:before{content:\"\\F162\"}.fa-sort-numeric-desc:before{content:\"\\F163\"}.fa-thumbs-up:before{content:\"\\F164\"}.fa-thumbs-down:before{content:\"\\F165\"}.fa-youtube-square:before{content:\"\\F166\"}.fa-youtube:before{content:\"\\F167\"}.fa-xing:before{content:\"\\F168\"}.fa-xing-square:before{content:\"\\F169\"}.fa-youtube-play:before{content:\"\\F16A\"}.fa-dropbox:before{content:\"\\F16B\"}.fa-stack-overflow:before{content:\"\\F16C\"}.fa-instagram:before{content:\"\\F16D\"}.fa-flickr:before{content:\"\\F16E\"}.fa-adn:before{content:\"\\F170\"}.fa-bitbucket:before{content:\"\\F171\"}.fa-bitbucket-square:before{content:\"\\F172\"}.fa-tumblr:before{content:\"\\F173\"}.fa-tumblr-square:before{content:\"\\F174\"}.fa-long-arrow-down:before{content:\"\\F175\"}.fa-long-arrow-up:before{content:\"\\F176\"}.fa-long-arrow-left:before{content:\"\\F177\"}.fa-long-arrow-right:before{content:\"\\F178\"}.fa-apple:before{content:\"\\F179\"}.fa-windows:before{content:\"\\F17A\"}.fa-android:before{content:\"\\F17B\"}.fa-linux:before{content:\"\\F17C\"}.fa-dribbble:before{content:\"\\F17D\"}.fa-skype:before{content:\"\\F17E\"}.fa-foursquare:before{content:\"\\F180\"}.fa-trello:before{content:\"\\F181\"}.fa-female:before{content:\"\\F182\"}.fa-male:before{content:\"\\F183\"}.fa-gittip:before,.fa-gratipay:before{content:\"\\F184\"}.fa-sun-o:before{content:\"\\F185\"}.fa-moon-o:before{content:\"\\F186\"}.fa-archive:before{content:\"\\F187\"}.fa-bug:before{content:\"\\F188\"}.fa-vk:before{content:\"\\F189\"}.fa-weibo:before{content:\"\\F18A\"}.fa-renren:before{content:\"\\F18B\"}.fa-pagelines:before{content:\"\\F18C\"}.fa-stack-exchange:before{content:\"\\F18D\"}.fa-arrow-circle-o-right:before{content:\"\\F18E\"}.fa-arrow-circle-o-left:before{content:\"\\F190\"}.fa-toggle-left:before,.fa-caret-square-o-left:before{content:\"\\F191\"}.fa-dot-circle-o:before{content:\"\\F192\"}.fa-wheelchair:before{content:\"\\F193\"}.fa-vimeo-square:before{content:\"\\F194\"}.fa-turkish-lira:before,.fa-try:before{content:\"\\F195\"}.fa-plus-square-o:before{content:\"\\F196\"}.fa-space-shuttle:before{content:\"\\F197\"}.fa-slack:before{content:\"\\F198\"}.fa-envelope-square:before{content:\"\\F199\"}.fa-wordpress:before{content:\"\\F19A\"}.fa-openid:before{content:\"\\F19B\"}.fa-institution:before,.fa-bank:before,.fa-university:before{content:\"\\F19C\"}.fa-mortar-board:before,.fa-graduation-cap:before{content:\"\\F19D\"}.fa-yahoo:before{content:\"\\F19E\"}.fa-google:before{content:\"\\F1A0\"}.fa-reddit:before{content:\"\\F1A1\"}.fa-reddit-square:before{content:\"\\F1A2\"}.fa-stumbleupon-circle:before{content:\"\\F1A3\"}.fa-stumbleupon:before{content:\"\\F1A4\"}.fa-delicious:before{content:\"\\F1A5\"}.fa-digg:before{content:\"\\F1A6\"}.fa-pied-piper-pp:before{content:\"\\F1A7\"}.fa-pied-piper-alt:before{content:\"\\F1A8\"}.fa-drupal:before{content:\"\\F1A9\"}.fa-joomla:before{content:\"\\F1AA\"}.fa-language:before{content:\"\\F1AB\"}.fa-fax:before{content:\"\\F1AC\"}.fa-building:before{content:\"\\F1AD\"}.fa-child:before{content:\"\\F1AE\"}.fa-paw:before{content:\"\\F1B0\"}.fa-spoon:before{content:\"\\F1B1\"}.fa-cube:before{content:\"\\F1B2\"}.fa-cubes:before{content:\"\\F1B3\"}.fa-behance:before{content:\"\\F1B4\"}.fa-behance-square:before{content:\"\\F1B5\"}.fa-steam:before{content:\"\\F1B6\"}.fa-steam-square:before{content:\"\\F1B7\"}.fa-recycle:before{content:\"\\F1B8\"}.fa-automobile:before,.fa-car:before{content:\"\\F1B9\"}.fa-cab:before,.fa-taxi:before{content:\"\\F1BA\"}.fa-tree:before{content:\"\\F1BB\"}.fa-spotify:before{content:\"\\F1BC\"}.fa-deviantart:before{content:\"\\F1BD\"}.fa-soundcloud:before{content:\"\\F1BE\"}.fa-database:before{content:\"\\F1C0\"}.fa-file-pdf-o:before{content:\"\\F1C1\"}.fa-file-word-o:before{content:\"\\F1C2\"}.fa-file-excel-o:before{content:\"\\F1C3\"}.fa-file-powerpoint-o:before{content:\"\\F1C4\"}.fa-file-photo-o:before,.fa-file-picture-o:before,.fa-file-image-o:before{content:\"\\F1C5\"}.fa-file-zip-o:before,.fa-file-archive-o:before{content:\"\\F1C6\"}.fa-file-sound-o:before,.fa-file-audio-o:before{content:\"\\F1C7\"}.fa-file-movie-o:before,.fa-file-video-o:before{content:\"\\F1C8\"}.fa-file-code-o:before{content:\"\\F1C9\"}.fa-vine:before{content:\"\\F1CA\"}.fa-codepen:before{content:\"\\F1CB\"}.fa-jsfiddle:before{content:\"\\F1CC\"}.fa-life-bouy:before,.fa-life-buoy:before,.fa-life-saver:before,.fa-support:before,.fa-life-ring:before{content:\"\\F1CD\"}.fa-circle-o-notch:before{content:\"\\F1CE\"}.fa-ra:before,.fa-resistance:before,.fa-rebel:before{content:\"\\F1D0\"}.fa-ge:before,.fa-empire:before{content:\"\\F1D1\"}.fa-git-square:before{content:\"\\F1D2\"}.fa-git:before{content:\"\\F1D3\"}.fa-y-combinator-square:before,.fa-yc-square:before,.fa-hacker-news:before{content:\"\\F1D4\"}.fa-tencent-weibo:before{content:\"\\F1D5\"}.fa-qq:before{content:\"\\F1D6\"}.fa-wechat:before,.fa-weixin:before{content:\"\\F1D7\"}.fa-send:before,.fa-paper-plane:before{content:\"\\F1D8\"}.fa-send-o:before,.fa-paper-plane-o:before{content:\"\\F1D9\"}.fa-history:before{content:\"\\F1DA\"}.fa-circle-thin:before{content:\"\\F1DB\"}.fa-header:before{content:\"\\F1DC\"}.fa-paragraph:before{content:\"\\F1DD\"}.fa-sliders:before{content:\"\\F1DE\"}.fa-share-alt:before{content:\"\\F1E0\"}.fa-share-alt-square:before{content:\"\\F1E1\"}.fa-bomb:before{content:\"\\F1E2\"}.fa-soccer-ball-o:before,.fa-futbol-o:before{content:\"\\F1E3\"}.fa-tty:before{content:\"\\F1E4\"}.fa-binoculars:before{content:\"\\F1E5\"}.fa-plug:before{content:\"\\F1E6\"}.fa-slideshare:before{content:\"\\F1E7\"}.fa-twitch:before{content:\"\\F1E8\"}.fa-yelp:before{content:\"\\F1E9\"}.fa-newspaper-o:before{content:\"\\F1EA\"}.fa-wifi:before{content:\"\\F1EB\"}.fa-calculator:before{content:\"\\F1EC\"}.fa-paypal:before{content:\"\\F1ED\"}.fa-google-wallet:before{content:\"\\F1EE\"}.fa-cc-visa:before{content:\"\\F1F0\"}.fa-cc-mastercard:before{content:\"\\F1F1\"}.fa-cc-discover:before{content:\"\\F1F2\"}.fa-cc-amex:before{content:\"\\F1F3\"}.fa-cc-paypal:before{content:\"\\F1F4\"}.fa-cc-stripe:before{content:\"\\F1F5\"}.fa-bell-slash:before{content:\"\\F1F6\"}.fa-bell-slash-o:before{content:\"\\F1F7\"}.fa-trash:before{content:\"\\F1F8\"}.fa-copyright:before{content:\"\\F1F9\"}.fa-at:before{content:\"\\F1FA\"}.fa-eyedropper:before{content:\"\\F1FB\"}.fa-paint-brush:before{content:\"\\F1FC\"}.fa-birthday-cake:before{content:\"\\F1FD\"}.fa-area-chart:before{content:\"\\F1FE\"}.fa-pie-chart:before{content:\"\\F200\"}.fa-line-chart:before{content:\"\\F201\"}.fa-lastfm:before{content:\"\\F202\"}.fa-lastfm-square:before{content:\"\\F203\"}.fa-toggle-off:before{content:\"\\F204\"}.fa-toggle-on:before{content:\"\\F205\"}.fa-bicycle:before{content:\"\\F206\"}.fa-bus:before{content:\"\\F207\"}.fa-ioxhost:before{content:\"\\F208\"}.fa-angellist:before{content:\"\\F209\"}.fa-cc:before{content:\"\\F20A\"}.fa-shekel:before,.fa-sheqel:before,.fa-ils:before{content:\"\\F20B\"}.fa-meanpath:before{content:\"\\F20C\"}.fa-buysellads:before{content:\"\\F20D\"}.fa-connectdevelop:before{content:\"\\F20E\"}.fa-dashcube:before{content:\"\\F210\"}.fa-forumbee:before{content:\"\\F211\"}.fa-leanpub:before{content:\"\\F212\"}.fa-sellsy:before{content:\"\\F213\"}.fa-shirtsinbulk:before{content:\"\\F214\"}.fa-simplybuilt:before{content:\"\\F215\"}.fa-skyatlas:before{content:\"\\F216\"}.fa-cart-plus:before{content:\"\\F217\"}.fa-cart-arrow-down:before{content:\"\\F218\"}.fa-diamond:before{content:\"\\F219\"}.fa-ship:before{content:\"\\F21A\"}.fa-user-secret:before{content:\"\\F21B\"}.fa-motorcycle:before{content:\"\\F21C\"}.fa-street-view:before{content:\"\\F21D\"}.fa-heartbeat:before{content:\"\\F21E\"}.fa-venus:before{content:\"\\F221\"}.fa-mars:before{content:\"\\F222\"}.fa-mercury:before{content:\"\\F223\"}.fa-intersex:before,.fa-transgender:before{content:\"\\F224\"}.fa-transgender-alt:before{content:\"\\F225\"}.fa-venus-double:before{content:\"\\F226\"}.fa-mars-double:before{content:\"\\F227\"}.fa-venus-mars:before{content:\"\\F228\"}.fa-mars-stroke:before{content:\"\\F229\"}.fa-mars-stroke-v:before{content:\"\\F22A\"}.fa-mars-stroke-h:before{content:\"\\F22B\"}.fa-neuter:before{content:\"\\F22C\"}.fa-genderless:before{content:\"\\F22D\"}.fa-facebook-official:before{content:\"\\F230\"}.fa-pinterest-p:before{content:\"\\F231\"}.fa-whatsapp:before{content:\"\\F232\"}.fa-server:before{content:\"\\F233\"}.fa-user-plus:before{content:\"\\F234\"}.fa-user-times:before{content:\"\\F235\"}.fa-hotel:before,.fa-bed:before{content:\"\\F236\"}.fa-viacoin:before{content:\"\\F237\"}.fa-train:before{content:\"\\F238\"}.fa-subway:before{content:\"\\F239\"}.fa-medium:before{content:\"\\F23A\"}.fa-yc:before,.fa-y-combinator:before{content:\"\\F23B\"}.fa-optin-monster:before{content:\"\\F23C\"}.fa-opencart:before{content:\"\\F23D\"}.fa-expeditedssl:before{content:\"\\F23E\"}.fa-battery-4:before,.fa-battery:before,.fa-battery-full:before{content:\"\\F240\"}.fa-battery-3:before,.fa-battery-three-quarters:before{content:\"\\F241\"}.fa-battery-2:before,.fa-battery-half:before{content:\"\\F242\"}.fa-battery-1:before,.fa-battery-quarter:before{content:\"\\F243\"}.fa-battery-0:before,.fa-battery-empty:before{content:\"\\F244\"}.fa-mouse-pointer:before{content:\"\\F245\"}.fa-i-cursor:before{content:\"\\F246\"}.fa-object-group:before{content:\"\\F247\"}.fa-object-ungroup:before{content:\"\\F248\"}.fa-sticky-note:before{content:\"\\F249\"}.fa-sticky-note-o:before{content:\"\\F24A\"}.fa-cc-jcb:before{content:\"\\F24B\"}.fa-cc-diners-club:before{content:\"\\F24C\"}.fa-clone:before{content:\"\\F24D\"}.fa-balance-scale:before{content:\"\\F24E\"}.fa-hourglass-o:before{content:\"\\F250\"}.fa-hourglass-1:before,.fa-hourglass-start:before{content:\"\\F251\"}.fa-hourglass-2:before,.fa-hourglass-half:before{content:\"\\F252\"}.fa-hourglass-3:before,.fa-hourglass-end:before{content:\"\\F253\"}.fa-hourglass:before{content:\"\\F254\"}.fa-hand-grab-o:before,.fa-hand-rock-o:before{content:\"\\F255\"}.fa-hand-stop-o:before,.fa-hand-paper-o:before{content:\"\\F256\"}.fa-hand-scissors-o:before{content:\"\\F257\"}.fa-hand-lizard-o:before{content:\"\\F258\"}.fa-hand-spock-o:before{content:\"\\F259\"}.fa-hand-pointer-o:before{content:\"\\F25A\"}.fa-hand-peace-o:before{content:\"\\F25B\"}.fa-trademark:before{content:\"\\F25C\"}.fa-registered:before{content:\"\\F25D\"}.fa-creative-commons:before{content:\"\\F25E\"}.fa-gg:before{content:\"\\F260\"}.fa-gg-circle:before{content:\"\\F261\"}.fa-tripadvisor:before{content:\"\\F262\"}.fa-odnoklassniki:before{content:\"\\F263\"}.fa-odnoklassniki-square:before{content:\"\\F264\"}.fa-get-pocket:before{content:\"\\F265\"}.fa-wikipedia-w:before{content:\"\\F266\"}.fa-safari:before{content:\"\\F267\"}.fa-chrome:before{content:\"\\F268\"}.fa-firefox:before{content:\"\\F269\"}.fa-opera:before{content:\"\\F26A\"}.fa-internet-explorer:before{content:\"\\F26B\"}.fa-tv:before,.fa-television:before{content:\"\\F26C\"}.fa-contao:before{content:\"\\F26D\"}.fa-500px:before{content:\"\\F26E\"}.fa-amazon:before{content:\"\\F270\"}.fa-calendar-plus-o:before{content:\"\\F271\"}.fa-calendar-minus-o:before{content:\"\\F272\"}.fa-calendar-times-o:before{content:\"\\F273\"}.fa-calendar-check-o:before{content:\"\\F274\"}.fa-industry:before{content:\"\\F275\"}.fa-map-pin:before{content:\"\\F276\"}.fa-map-signs:before{content:\"\\F277\"}.fa-map-o:before{content:\"\\F278\"}.fa-map:before{content:\"\\F279\"}.fa-commenting:before{content:\"\\F27A\"}.fa-commenting-o:before{content:\"\\F27B\"}.fa-houzz:before{content:\"\\F27C\"}.fa-vimeo:before{content:\"\\F27D\"}.fa-black-tie:before{content:\"\\F27E\"}.fa-fonticons:before{content:\"\\F280\"}.fa-reddit-alien:before{content:\"\\F281\"}.fa-edge:before{content:\"\\F282\"}.fa-credit-card-alt:before{content:\"\\F283\"}.fa-codiepie:before{content:\"\\F284\"}.fa-modx:before{content:\"\\F285\"}.fa-fort-awesome:before{content:\"\\F286\"}.fa-usb:before{content:\"\\F287\"}.fa-product-hunt:before{content:\"\\F288\"}.fa-mixcloud:before{content:\"\\F289\"}.fa-scribd:before{content:\"\\F28A\"}.fa-pause-circle:before{content:\"\\F28B\"}.fa-pause-circle-o:before{content:\"\\F28C\"}.fa-stop-circle:before{content:\"\\F28D\"}.fa-stop-circle-o:before{content:\"\\F28E\"}.fa-shopping-bag:before{content:\"\\F290\"}.fa-shopping-basket:before{content:\"\\F291\"}.fa-hashtag:before{content:\"\\F292\"}.fa-bluetooth:before{content:\"\\F293\"}.fa-bluetooth-b:before{content:\"\\F294\"}.fa-percent:before{content:\"\\F295\"}.fa-gitlab:before{content:\"\\F296\"}.fa-wpbeginner:before{content:\"\\F297\"}.fa-wpforms:before{content:\"\\F298\"}.fa-envira:before{content:\"\\F299\"}.fa-universal-access:before{content:\"\\F29A\"}.fa-wheelchair-alt:before{content:\"\\F29B\"}.fa-question-circle-o:before{content:\"\\F29C\"}.fa-blind:before{content:\"\\F29D\"}.fa-audio-description:before{content:\"\\F29E\"}.fa-volume-control-phone:before{content:\"\\F2A0\"}.fa-braille:before{content:\"\\F2A1\"}.fa-assistive-listening-systems:before{content:\"\\F2A2\"}.fa-asl-interpreting:before,.fa-american-sign-language-interpreting:before{content:\"\\F2A3\"}.fa-deafness:before,.fa-hard-of-hearing:before,.fa-deaf:before{content:\"\\F2A4\"}.fa-glide:before{content:\"\\F2A5\"}.fa-glide-g:before{content:\"\\F2A6\"}.fa-signing:before,.fa-sign-language:before{content:\"\\F2A7\"}.fa-low-vision:before{content:\"\\F2A8\"}.fa-viadeo:before{content:\"\\F2A9\"}.fa-viadeo-square:before{content:\"\\F2AA\"}.fa-snapchat:before{content:\"\\F2AB\"}.fa-snapchat-ghost:before{content:\"\\F2AC\"}.fa-snapchat-square:before{content:\"\\F2AD\"}.fa-pied-piper:before{content:\"\\F2AE\"}.fa-first-order:before{content:\"\\F2B0\"}.fa-yoast:before{content:\"\\F2B1\"}.fa-themeisle:before{content:\"\\F2B2\"}.fa-google-plus-circle:before,.fa-google-plus-official:before{content:\"\\F2B3\"}.fa-fa:before,.fa-font-awesome:before{content:\"\\F2B4\"}.fa-handshake-o:before{content:\"\\F2B5\"}.fa-envelope-open:before{content:\"\\F2B6\"}.fa-envelope-open-o:before{content:\"\\F2B7\"}.fa-linode:before{content:\"\\F2B8\"}.fa-address-book:before{content:\"\\F2B9\"}.fa-address-book-o:before{content:\"\\F2BA\"}.fa-vcard:before,.fa-address-card:before{content:\"\\F2BB\"}.fa-vcard-o:before,.fa-address-card-o:before{content:\"\\F2BC\"}.fa-user-circle:before{content:\"\\F2BD\"}.fa-user-circle-o:before{content:\"\\F2BE\"}.fa-user-o:before{content:\"\\F2C0\"}.fa-id-badge:before{content:\"\\F2C1\"}.fa-drivers-license:before,.fa-id-card:before{content:\"\\F2C2\"}.fa-drivers-license-o:before,.fa-id-card-o:before{content:\"\\F2C3\"}.fa-quora:before{content:\"\\F2C4\"}.fa-free-code-camp:before{content:\"\\F2C5\"}.fa-telegram:before{content:\"\\F2C6\"}.fa-thermometer-4:before,.fa-thermometer:before,.fa-thermometer-full:before{content:\"\\F2C7\"}.fa-thermometer-3:before,.fa-thermometer-three-quarters:before{content:\"\\F2C8\"}.fa-thermometer-2:before,.fa-thermometer-half:before{content:\"\\F2C9\"}.fa-thermometer-1:before,.fa-thermometer-quarter:before{content:\"\\F2CA\"}.fa-thermometer-0:before,.fa-thermometer-empty:before{content:\"\\F2CB\"}.fa-shower:before{content:\"\\F2CC\"}.fa-bathtub:before,.fa-s15:before,.fa-bath:before{content:\"\\F2CD\"}.fa-podcast:before{content:\"\\F2CE\"}.fa-window-maximize:before{content:\"\\F2D0\"}.fa-window-minimize:before{content:\"\\F2D1\"}.fa-window-restore:before{content:\"\\F2D2\"}.fa-times-rectangle:before,.fa-window-close:before{content:\"\\F2D3\"}.fa-times-rectangle-o:before,.fa-window-close-o:before{content:\"\\F2D4\"}.fa-bandcamp:before{content:\"\\F2D5\"}.fa-grav:before{content:\"\\F2D6\"}.fa-etsy:before{content:\"\\F2D7\"}.fa-imdb:before{content:\"\\F2D8\"}.fa-ravelry:before{content:\"\\F2D9\"}.fa-eercast:before{content:\"\\F2DA\"}.fa-microchip:before{content:\"\\F2DB\"}.fa-snowflake-o:before{content:\"\\F2DC\"}.fa-superpowers:before{content:\"\\F2DD\"}.fa-wpexplorer:before{content:\"\\F2DE\"}.fa-meetup:before{content:\"\\F2E0\"}.sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);border:0}.sr-only-focusable:active,.sr-only-focusable:focus{position:static;width:auto;height:auto;margin:0;overflow:visible;clip:auto}\n", ""]);

	// exports


/***/ },
/* 354 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 355 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "674f50d287a8c48dc19ba404d20fe713.eot";

/***/ },
/* 356 */
355,
/* 357 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "af7ae505a9eed503f8b8e6982036873e.woff2";

/***/ },
/* 358 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "fee66e712a8a08eef5805a46892932ad.woff";

/***/ },
/* 359 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "b06871f281fee6b241d60582ae9369b9.ttf";

/***/ },
/* 360 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "912ec66d7572ff821749319396470bde.svg";

/***/ },
/* 361 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 362 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _tinycolor = __webpack_require__(264);

	var _tinycolor2 = _interopRequireDefault(_tinycolor);

	var _variables = __webpack_require__(340);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = Object.assign({}, {
	  headerBoxShadow: '0px 1px 1px rgba(0, 0, 0, 0.05)',
	  navbarToggleColor: _variables.baseColor,
	  navbarBrandColor: _variables.baseColor,
	  navbarItemBorder: '1px solid #eee',
	  navbarUserMenuHeaderBg: '#222',
	  logoSmallVariant: '\n      background-color: #222;\n      color: ' + _variables.white + ';\n      border-bottom: 0 solid transparent;\n\n      &:hover {\n        background-color: ' + (0, _tinycolor2.default)('#222').darken(1).toString() + ';\n      }\n      '
	}, (0, _variables.navbarVariant)(_variables.white, _variables.baseColor, '#999', _variables.white), (0, _variables.logoVariant)(_variables.white, _variables.baseColor), (0, _variables.sidebarVariant)(_variables.white));

/***/ },
/* 363 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _tinycolor = __webpack_require__(264);

	var _tinycolor2 = _interopRequireDefault(_tinycolor);

	var _variables = __webpack_require__(340);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = Object.assign({}, {
	  headerBoxShadow: '0px 1px 1px rgba(0, 0, 0, 0.05)',
	  navbarToggleColor: _variables.baseColor,
	  navbarBrandColor: _variables.baseColor,
	  navbarItemBorder: '1px solid #eee',
	  navbarUserMenuHeaderBg: '#222',
	  logoSmallVariant: '\n      background-color: #222;\n      color: ' + _variables.white + ';\n      border-bottom: 0 solid transparent;\n\n      &:hover {\n        background-color: ' + (0, _tinycolor2.default)('#222').darken(1).toString() + ';\n      }\n      '
	}, (0, _variables.navbarVariant)(_variables.white, _variables.baseColor, '#999', _variables.white), (0, _variables.logoVariant)(_variables.white, _variables.baseColor), (0, _variables.sidebarVariant)(_variables.white, true));

/***/ },
/* 364 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _tinycolor = __webpack_require__(264);

	var _tinycolor2 = _interopRequireDefault(_tinycolor);

	var _variables = __webpack_require__(340);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = Object.assign({}, (0, _variables.navbarVariant)(_variables.lightBlue, _variables.white), (0, _variables.logoVariant)((0, _tinycolor2.default)(_variables.lightBlue).darken(5).toString()), (0, _variables.sidebarVariant)(_variables.lightBlue), (0, _variables.navbarItemVariant)(_variables.lightBlue));

/***/ },
/* 365 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _tinycolor = __webpack_require__(264);

	var _tinycolor2 = _interopRequireDefault(_tinycolor);

	var _variables = __webpack_require__(340);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = Object.assign({}, (0, _variables.navbarVariant)(_variables.lightBlue, _variables.white), (0, _variables.logoVariant)((0, _tinycolor2.default)(_variables.lightBlue).darken(5).toString()), (0, _variables.sidebarVariant)(_variables.lightBlue, true), (0, _variables.navbarItemVariant)(_variables.lightBlue));

/***/ },
/* 366 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _tinycolor = __webpack_require__(264);

	var _tinycolor2 = _interopRequireDefault(_tinycolor);

	var _variables = __webpack_require__(340);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = Object.assign({}, (0, _variables.navbarVariant)(_variables.green, _variables.white), (0, _variables.logoVariant)((0, _tinycolor2.default)(_variables.green).darken(5).toString()), (0, _variables.sidebarVariant)(_variables.green), (0, _variables.navbarItemVariant)(_variables.green));

/***/ },
/* 367 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _tinycolor = __webpack_require__(264);

	var _tinycolor2 = _interopRequireDefault(_tinycolor);

	var _variables = __webpack_require__(340);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = Object.assign({}, (0, _variables.navbarVariant)(_variables.green, _variables.white), (0, _variables.logoVariant)((0, _tinycolor2.default)(_variables.green).darken(5).toString()), (0, _variables.sidebarVariant)(_variables.green, true), (0, _variables.navbarItemVariant)(_variables.green));

/***/ },
/* 368 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _tinycolor = __webpack_require__(264);

	var _tinycolor2 = _interopRequireDefault(_tinycolor);

	var _variables = __webpack_require__(340);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = Object.assign({}, (0, _variables.navbarVariant)(_variables.purple, _variables.white), (0, _variables.logoVariant)((0, _tinycolor2.default)(_variables.purple).darken(5).toString()), (0, _variables.sidebarVariant)(_variables.purple), (0, _variables.navbarItemVariant)(_variables.purple));

/***/ },
/* 369 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _tinycolor = __webpack_require__(264);

	var _tinycolor2 = _interopRequireDefault(_tinycolor);

	var _variables = __webpack_require__(340);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = Object.assign({}, (0, _variables.navbarVariant)(_variables.purple, _variables.white), (0, _variables.logoVariant)((0, _tinycolor2.default)(_variables.purple).darken(5).toString()), (0, _variables.sidebarVariant)(_variables.purple, true), (0, _variables.navbarItemVariant)(_variables.purple));

/***/ },
/* 370 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _tinycolor = __webpack_require__(264);

	var _tinycolor2 = _interopRequireDefault(_tinycolor);

	var _variables = __webpack_require__(340);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = Object.assign({}, (0, _variables.navbarVariant)(_variables.red, _variables.white), (0, _variables.logoVariant)((0, _tinycolor2.default)(_variables.red).darken(5).toString()), (0, _variables.sidebarVariant)(_variables.red), (0, _variables.navbarItemVariant)(_variables.red));

/***/ },
/* 371 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _tinycolor = __webpack_require__(264);

	var _tinycolor2 = _interopRequireDefault(_tinycolor);

	var _variables = __webpack_require__(340);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = Object.assign({}, (0, _variables.navbarVariant)(_variables.red, _variables.white), (0, _variables.logoVariant)((0, _tinycolor2.default)(_variables.red).darken(5).toString()), (0, _variables.sidebarVariant)(_variables.red, true), (0, _variables.navbarItemVariant)(_variables.red));

/***/ },
/* 372 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _tinycolor = __webpack_require__(264);

	var _tinycolor2 = _interopRequireDefault(_tinycolor);

	var _variables = __webpack_require__(340);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = Object.assign({}, (0, _variables.navbarVariant)(_variables.yellow, _variables.white), (0, _variables.logoVariant)((0, _tinycolor2.default)(_variables.yellow).darken(5).toString()), (0, _variables.sidebarVariant)(_variables.yellow), (0, _variables.navbarItemVariant)(_variables.yellow));

/***/ },
/* 373 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _tinycolor = __webpack_require__(264);

	var _tinycolor2 = _interopRequireDefault(_tinycolor);

	var _variables = __webpack_require__(340);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = Object.assign({}, (0, _variables.navbarVariant)(_variables.yellow, _variables.white), (0, _variables.logoVariant)((0, _tinycolor2.default)(_variables.yellow).darken(5).toString()), (0, _variables.sidebarVariant)(_variables.yellow, true), (0, _variables.navbarItemVariant)(_variables.yellow));

/***/ },
/* 374 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(375);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(361)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js!./main.css", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js!./main.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 375 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(354)();
	// imports
	exports.push([module.id, "@import url(https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700,300italic,400italic,600italic);", ""]);

	// module
	exports.push([module.id, "html {\n  font-family: sans-serif;\n  font-size: 10px;\n  -webkit-tap-highlight-color: rgba(0,0,0,0);\n  -webkit-text-size-adjust: 100%;\n  -ms-text-size-adjust: 100%;\n}\n\nbody {\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  display: block;\n  margin: 0;\n  line-height: 1.42857143;\n  color: #333;\n  background-color: #fff;\n  font-family: 'Source Sans Pro','Helvetica Neue',Helvetica,Arial,sans-serif;\n  font-weight: 400;\n  font-size: 14px;\n  overflow-x: hidden;\n  overflow-y: auto;\n}\n\nhtml, body {\n  min-height: 100%;\n}\n\n* {\n  box-sizing: border-box;\n}\n\nbody:after, body:before {\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  box-sizing: border-box;\n}\n", ""]);

	// exports


/***/ },
/* 376 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactRemarkable = __webpack_require__(377);

	var _reactRemarkable2 = _interopRequireDefault(_reactRemarkable);

	__webpack_require__(439);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var readme = __webpack_require__(441);

	var Documentation = function Documentation() {
	  return _react2.default.createElement(
	    'div',
	    { className: 'content-wrapper' },
	    _react2.default.createElement(
	      'section',
	      { className: 'content-header' },
	      _react2.default.createElement(
	        'h1',
	        null,
	        'Documentation'
	      )
	    ),
	    _react2.default.createElement(
	      'section',
	      { className: 'content' },
	      _react2.default.createElement(_reactRemarkable2.default, { source: readme })
	    )
	  );
	};

	exports.default = Documentation;

/***/ },
/* 377 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _interopRequireDefault = function (obj) { return obj && obj.__esModule ? obj : { 'default': obj }; };

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _React = __webpack_require__(1);

	var _React2 = _interopRequireDefault(_React);

	var _Markdown = __webpack_require__(378);

	var _Markdown2 = _interopRequireDefault(_Markdown);

	'use strict';

	var Remarkable = _React2['default'].createClass({
	  displayName: 'Remarkable',

	  getDefaultProps: function getDefaultProps() {
	    return {
	      container: 'div',
	      options: {} };
	  },

	  render: function render() {
	    var Container = this.props.container;

	    return _React2['default'].createElement(
	      Container,
	      null,
	      this.content()
	    );
	  },

	  componentWillUpdate: function componentWillUpdate(nextProps, nextState) {
	    if (nextProps.options !== this.props.options) {
	      this.md = new _Markdown2['default'](nextProps.options);
	    }
	  },

	  content: function content() {
	    var _this = this;

	    if (this.props.source) {
	      return _React2['default'].createElement('span', { dangerouslySetInnerHTML: { __html: this.renderMarkdown(this.props.source) } });
	    } else {
	      return _React2['default'].Children.map(this.props.children, function (child) {
	        if (typeof child === 'string') {
	          return _React2['default'].createElement('span', { dangerouslySetInnerHTML: { __html: _this.renderMarkdown(child) } });
	        } else {
	          return child;
	        }
	      });
	    }
	  },

	  renderMarkdown: function renderMarkdown(source) {
	    if (!this.md) {
	      this.md = new _Markdown2['default'](this.props.options);
	    }

	    return this.md.render(source);
	  }

	});

	exports['default'] = Remarkable;
	module.exports = exports['default'];

/***/ },
/* 378 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = __webpack_require__(379);


/***/ },
/* 379 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	/**
	 * Local dependencies
	 */

	var assign       = __webpack_require__(380).assign;
	var Renderer     = __webpack_require__(382);
	var ParserCore   = __webpack_require__(384);
	var ParserBlock  = __webpack_require__(402);
	var ParserInline = __webpack_require__(417);
	var Ruler        = __webpack_require__(385);

	/**
	 * Preset configs
	 */

	var config = {
	  'default':    __webpack_require__(436),
	  'full':       __webpack_require__(437),
	  'commonmark': __webpack_require__(438)
	};

	/**
	 * The `StateCore` class manages state.
	 *
	 * @param {Object} `instance` Remarkable instance
	 * @param {String} `str` Markdown string
	 * @param {Object} `env`
	 */

	function StateCore(instance, str, env) {
	  this.src = str;
	  this.env = env;
	  this.options = instance.options;
	  this.tokens = [];
	  this.inlineMode = false;

	  this.inline = instance.inline;
	  this.block = instance.block;
	  this.renderer = instance.renderer;
	  this.typographer = instance.typographer;
	}

	/**
	 * The main `Remarkable` class. Create an instance of
	 * `Remarkable` with a `preset` and/or `options`.
	 *
	 * @param {String} `preset` If no preset is given, `default` is used.
	 * @param {Object} `options`
	 */

	function Remarkable(preset, options) {
	  if (typeof preset !== 'string') {
	    options = preset;
	    preset = 'default';
	  }

	  this.inline   = new ParserInline();
	  this.block    = new ParserBlock();
	  this.core     = new ParserCore();
	  this.renderer = new Renderer();
	  this.ruler    = new Ruler();

	  this.options  = {};
	  this.configure(config[preset]);
	  this.set(options || {});
	}

	/**
	 * Set options as an alternative to passing them
	 * to the constructor.
	 *
	 * ```js
	 * md.set({typographer: true});
	 * ```
	 * @param {Object} `options`
	 * @api public
	 */

	Remarkable.prototype.set = function (options) {
	  assign(this.options, options);
	};

	/**
	 * Batch loader for components rules states, and options
	 *
	 * @param  {Object} `presets`
	 */

	Remarkable.prototype.configure = function (presets) {
	  var self = this;

	  if (!presets) { throw new Error('Wrong `remarkable` preset, check name/content'); }
	  if (presets.options) { self.set(presets.options); }
	  if (presets.components) {
	    Object.keys(presets.components).forEach(function (name) {
	      if (presets.components[name].rules) {
	        self[name].ruler.enable(presets.components[name].rules, true);
	      }
	    });
	  }
	};

	/**
	 * Use a plugin.
	 *
	 * ```js
	 * var md = new Remarkable();
	 *
	 * md.use(plugin1)
	 *   .use(plugin2, opts)
	 *   .use(plugin3);
	 * ```
	 *
	 * @param  {Function} `plugin`
	 * @param  {Object} `options`
	 * @return {Object} `Remarkable` for chaining
	 */

	Remarkable.prototype.use = function (plugin, options) {
	  plugin(this, options);
	  return this;
	};


	/**
	 * Parse the input `string` and return a tokens array.
	 * Modifies `env` with definitions data.
	 *
	 * @param  {String} `string`
	 * @param  {Object} `env`
	 * @return {Array} Array of tokens
	 */

	Remarkable.prototype.parse = function (str, env) {
	  var state = new StateCore(this, str, env);
	  this.core.process(state);
	  return state.tokens;
	};

	/**
	 * The main `.render()` method that does all the magic :)
	 *
	 * @param  {String} `string`
	 * @param  {Object} `env`
	 * @return {String} Rendered HTML.
	 */

	Remarkable.prototype.render = function (str, env) {
	  env = env || {};
	  return this.renderer.render(this.parse(str, env), this.options, env);
	};

	/**
	 * Parse the given content `string` as a single string.
	 *
	 * @param  {String} `string`
	 * @param  {Object} `env`
	 * @return {Array} Array of tokens
	 */

	Remarkable.prototype.parseInline = function (str, env) {
	  var state = new StateCore(this, str, env);
	  state.inlineMode = true;
	  this.core.process(state);
	  return state.tokens;
	};

	/**
	 * Render a single content `string`, without wrapping it
	 * to paragraphs
	 *
	 * @param  {String} `str`
	 * @param  {Object} `env`
	 * @return {String}
	 */

	Remarkable.prototype.renderInline = function (str, env) {
	  env = env || {};
	  return this.renderer.render(this.parseInline(str, env), this.options, env);
	};

	/**
	 * Expose `Remarkable`
	 */

	module.exports = Remarkable;

	/**
	 * Expose `utils`, Useful helper functions for custom
	 * rendering.
	 */

	module.exports.utils = __webpack_require__(380);


/***/ },
/* 380 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	/**
	 * Utility functions
	 */

	function typeOf(obj) {
	  return Object.prototype.toString.call(obj);
	}

	function isString(obj) {
	  return typeOf(obj) === '[object String]';
	}

	var hasOwn = Object.prototype.hasOwnProperty;

	function has(object, key) {
	  return object
	    ? hasOwn.call(object, key)
	    : false;
	}

	// Extend objects
	//
	function assign(obj /*from1, from2, from3, ...*/) {
	  var sources = [].slice.call(arguments, 1);

	  sources.forEach(function (source) {
	    if (!source) { return; }

	    if (typeof source !== 'object') {
	      throw new TypeError(source + 'must be object');
	    }

	    Object.keys(source).forEach(function (key) {
	      obj[key] = source[key];
	    });
	  });

	  return obj;
	}

	////////////////////////////////////////////////////////////////////////////////

	var UNESCAPE_MD_RE = /\\([\\!"#$%&'()*+,.\/:;<=>?@[\]^_`{|}~-])/g;

	function unescapeMd(str) {
	  if (str.indexOf('\\') < 0) { return str; }
	  return str.replace(UNESCAPE_MD_RE, '$1');
	}

	////////////////////////////////////////////////////////////////////////////////

	function isValidEntityCode(c) {
	  /*eslint no-bitwise:0*/
	  // broken sequence
	  if (c >= 0xD800 && c <= 0xDFFF) { return false; }
	  // never used
	  if (c >= 0xFDD0 && c <= 0xFDEF) { return false; }
	  if ((c & 0xFFFF) === 0xFFFF || (c & 0xFFFF) === 0xFFFE) { return false; }
	  // control codes
	  if (c >= 0x00 && c <= 0x08) { return false; }
	  if (c === 0x0B) { return false; }
	  if (c >= 0x0E && c <= 0x1F) { return false; }
	  if (c >= 0x7F && c <= 0x9F) { return false; }
	  // out of range
	  if (c > 0x10FFFF) { return false; }
	  return true;
	}

	function fromCodePoint(c) {
	  /*eslint no-bitwise:0*/
	  if (c > 0xffff) {
	    c -= 0x10000;
	    var surrogate1 = 0xd800 + (c >> 10),
	        surrogate2 = 0xdc00 + (c & 0x3ff);

	    return String.fromCharCode(surrogate1, surrogate2);
	  }
	  return String.fromCharCode(c);
	}

	var NAMED_ENTITY_RE   = /&([a-z#][a-z0-9]{1,31});/gi;
	var DIGITAL_ENTITY_TEST_RE = /^#((?:x[a-f0-9]{1,8}|[0-9]{1,8}))/i;
	var entities = __webpack_require__(381);

	function replaceEntityPattern(match, name) {
	  var code = 0;

	  if (has(entities, name)) {
	    return entities[name];
	  } else if (name.charCodeAt(0) === 0x23/* # */ && DIGITAL_ENTITY_TEST_RE.test(name)) {
	    code = name[1].toLowerCase() === 'x' ?
	      parseInt(name.slice(2), 16)
	    :
	      parseInt(name.slice(1), 10);
	    if (isValidEntityCode(code)) {
	      return fromCodePoint(code);
	    }
	  }
	  return match;
	}

	function replaceEntities(str) {
	  if (str.indexOf('&') < 0) { return str; }

	  return str.replace(NAMED_ENTITY_RE, replaceEntityPattern);
	}

	////////////////////////////////////////////////////////////////////////////////

	var HTML_ESCAPE_TEST_RE = /[&<>"]/;
	var HTML_ESCAPE_REPLACE_RE = /[&<>"]/g;
	var HTML_REPLACEMENTS = {
	  '&': '&amp;',
	  '<': '&lt;',
	  '>': '&gt;',
	  '"': '&quot;'
	};

	function replaceUnsafeChar(ch) {
	  return HTML_REPLACEMENTS[ch];
	}

	function escapeHtml(str) {
	  if (HTML_ESCAPE_TEST_RE.test(str)) {
	    return str.replace(HTML_ESCAPE_REPLACE_RE, replaceUnsafeChar);
	  }
	  return str;
	}

	////////////////////////////////////////////////////////////////////////////////

	exports.assign            = assign;
	exports.isString          = isString;
	exports.has               = has;
	exports.unescapeMd        = unescapeMd;
	exports.isValidEntityCode = isValidEntityCode;
	exports.fromCodePoint     = fromCodePoint;
	exports.replaceEntities   = replaceEntities;
	exports.escapeHtml        = escapeHtml;


/***/ },
/* 381 */
/***/ function(module, exports) {

	// List of valid entities
	//
	// Generate with ./support/entities.js script
	//
	'use strict';

	/*eslint quotes:0*/
	module.exports = {
	  "Aacute":"\u00C1",
	  "aacute":"\u00E1",
	  "Abreve":"\u0102",
	  "abreve":"\u0103",
	  "ac":"\u223E",
	  "acd":"\u223F",
	  "acE":"\u223E\u0333",
	  "Acirc":"\u00C2",
	  "acirc":"\u00E2",
	  "acute":"\u00B4",
	  "Acy":"\u0410",
	  "acy":"\u0430",
	  "AElig":"\u00C6",
	  "aelig":"\u00E6",
	  "af":"\u2061",
	  "Afr":"\uD835\uDD04",
	  "afr":"\uD835\uDD1E",
	  "Agrave":"\u00C0",
	  "agrave":"\u00E0",
	  "alefsym":"\u2135",
	  "aleph":"\u2135",
	  "Alpha":"\u0391",
	  "alpha":"\u03B1",
	  "Amacr":"\u0100",
	  "amacr":"\u0101",
	  "amalg":"\u2A3F",
	  "AMP":"\u0026",
	  "amp":"\u0026",
	  "And":"\u2A53",
	  "and":"\u2227",
	  "andand":"\u2A55",
	  "andd":"\u2A5C",
	  "andslope":"\u2A58",
	  "andv":"\u2A5A",
	  "ang":"\u2220",
	  "ange":"\u29A4",
	  "angle":"\u2220",
	  "angmsd":"\u2221",
	  "angmsdaa":"\u29A8",
	  "angmsdab":"\u29A9",
	  "angmsdac":"\u29AA",
	  "angmsdad":"\u29AB",
	  "angmsdae":"\u29AC",
	  "angmsdaf":"\u29AD",
	  "angmsdag":"\u29AE",
	  "angmsdah":"\u29AF",
	  "angrt":"\u221F",
	  "angrtvb":"\u22BE",
	  "angrtvbd":"\u299D",
	  "angsph":"\u2222",
	  "angst":"\u00C5",
	  "angzarr":"\u237C",
	  "Aogon":"\u0104",
	  "aogon":"\u0105",
	  "Aopf":"\uD835\uDD38",
	  "aopf":"\uD835\uDD52",
	  "ap":"\u2248",
	  "apacir":"\u2A6F",
	  "apE":"\u2A70",
	  "ape":"\u224A",
	  "apid":"\u224B",
	  "apos":"\u0027",
	  "ApplyFunction":"\u2061",
	  "approx":"\u2248",
	  "approxeq":"\u224A",
	  "Aring":"\u00C5",
	  "aring":"\u00E5",
	  "Ascr":"\uD835\uDC9C",
	  "ascr":"\uD835\uDCB6",
	  "Assign":"\u2254",
	  "ast":"\u002A",
	  "asymp":"\u2248",
	  "asympeq":"\u224D",
	  "Atilde":"\u00C3",
	  "atilde":"\u00E3",
	  "Auml":"\u00C4",
	  "auml":"\u00E4",
	  "awconint":"\u2233",
	  "awint":"\u2A11",
	  "backcong":"\u224C",
	  "backepsilon":"\u03F6",
	  "backprime":"\u2035",
	  "backsim":"\u223D",
	  "backsimeq":"\u22CD",
	  "Backslash":"\u2216",
	  "Barv":"\u2AE7",
	  "barvee":"\u22BD",
	  "Barwed":"\u2306",
	  "barwed":"\u2305",
	  "barwedge":"\u2305",
	  "bbrk":"\u23B5",
	  "bbrktbrk":"\u23B6",
	  "bcong":"\u224C",
	  "Bcy":"\u0411",
	  "bcy":"\u0431",
	  "bdquo":"\u201E",
	  "becaus":"\u2235",
	  "Because":"\u2235",
	  "because":"\u2235",
	  "bemptyv":"\u29B0",
	  "bepsi":"\u03F6",
	  "bernou":"\u212C",
	  "Bernoullis":"\u212C",
	  "Beta":"\u0392",
	  "beta":"\u03B2",
	  "beth":"\u2136",
	  "between":"\u226C",
	  "Bfr":"\uD835\uDD05",
	  "bfr":"\uD835\uDD1F",
	  "bigcap":"\u22C2",
	  "bigcirc":"\u25EF",
	  "bigcup":"\u22C3",
	  "bigodot":"\u2A00",
	  "bigoplus":"\u2A01",
	  "bigotimes":"\u2A02",
	  "bigsqcup":"\u2A06",
	  "bigstar":"\u2605",
	  "bigtriangledown":"\u25BD",
	  "bigtriangleup":"\u25B3",
	  "biguplus":"\u2A04",
	  "bigvee":"\u22C1",
	  "bigwedge":"\u22C0",
	  "bkarow":"\u290D",
	  "blacklozenge":"\u29EB",
	  "blacksquare":"\u25AA",
	  "blacktriangle":"\u25B4",
	  "blacktriangledown":"\u25BE",
	  "blacktriangleleft":"\u25C2",
	  "blacktriangleright":"\u25B8",
	  "blank":"\u2423",
	  "blk12":"\u2592",
	  "blk14":"\u2591",
	  "blk34":"\u2593",
	  "block":"\u2588",
	  "bne":"\u003D\u20E5",
	  "bnequiv":"\u2261\u20E5",
	  "bNot":"\u2AED",
	  "bnot":"\u2310",
	  "Bopf":"\uD835\uDD39",
	  "bopf":"\uD835\uDD53",
	  "bot":"\u22A5",
	  "bottom":"\u22A5",
	  "bowtie":"\u22C8",
	  "boxbox":"\u29C9",
	  "boxDL":"\u2557",
	  "boxDl":"\u2556",
	  "boxdL":"\u2555",
	  "boxdl":"\u2510",
	  "boxDR":"\u2554",
	  "boxDr":"\u2553",
	  "boxdR":"\u2552",
	  "boxdr":"\u250C",
	  "boxH":"\u2550",
	  "boxh":"\u2500",
	  "boxHD":"\u2566",
	  "boxHd":"\u2564",
	  "boxhD":"\u2565",
	  "boxhd":"\u252C",
	  "boxHU":"\u2569",
	  "boxHu":"\u2567",
	  "boxhU":"\u2568",
	  "boxhu":"\u2534",
	  "boxminus":"\u229F",
	  "boxplus":"\u229E",
	  "boxtimes":"\u22A0",
	  "boxUL":"\u255D",
	  "boxUl":"\u255C",
	  "boxuL":"\u255B",
	  "boxul":"\u2518",
	  "boxUR":"\u255A",
	  "boxUr":"\u2559",
	  "boxuR":"\u2558",
	  "boxur":"\u2514",
	  "boxV":"\u2551",
	  "boxv":"\u2502",
	  "boxVH":"\u256C",
	  "boxVh":"\u256B",
	  "boxvH":"\u256A",
	  "boxvh":"\u253C",
	  "boxVL":"\u2563",
	  "boxVl":"\u2562",
	  "boxvL":"\u2561",
	  "boxvl":"\u2524",
	  "boxVR":"\u2560",
	  "boxVr":"\u255F",
	  "boxvR":"\u255E",
	  "boxvr":"\u251C",
	  "bprime":"\u2035",
	  "Breve":"\u02D8",
	  "breve":"\u02D8",
	  "brvbar":"\u00A6",
	  "Bscr":"\u212C",
	  "bscr":"\uD835\uDCB7",
	  "bsemi":"\u204F",
	  "bsim":"\u223D",
	  "bsime":"\u22CD",
	  "bsol":"\u005C",
	  "bsolb":"\u29C5",
	  "bsolhsub":"\u27C8",
	  "bull":"\u2022",
	  "bullet":"\u2022",
	  "bump":"\u224E",
	  "bumpE":"\u2AAE",
	  "bumpe":"\u224F",
	  "Bumpeq":"\u224E",
	  "bumpeq":"\u224F",
	  "Cacute":"\u0106",
	  "cacute":"\u0107",
	  "Cap":"\u22D2",
	  "cap":"\u2229",
	  "capand":"\u2A44",
	  "capbrcup":"\u2A49",
	  "capcap":"\u2A4B",
	  "capcup":"\u2A47",
	  "capdot":"\u2A40",
	  "CapitalDifferentialD":"\u2145",
	  "caps":"\u2229\uFE00",
	  "caret":"\u2041",
	  "caron":"\u02C7",
	  "Cayleys":"\u212D",
	  "ccaps":"\u2A4D",
	  "Ccaron":"\u010C",
	  "ccaron":"\u010D",
	  "Ccedil":"\u00C7",
	  "ccedil":"\u00E7",
	  "Ccirc":"\u0108",
	  "ccirc":"\u0109",
	  "Cconint":"\u2230",
	  "ccups":"\u2A4C",
	  "ccupssm":"\u2A50",
	  "Cdot":"\u010A",
	  "cdot":"\u010B",
	  "cedil":"\u00B8",
	  "Cedilla":"\u00B8",
	  "cemptyv":"\u29B2",
	  "cent":"\u00A2",
	  "CenterDot":"\u00B7",
	  "centerdot":"\u00B7",
	  "Cfr":"\u212D",
	  "cfr":"\uD835\uDD20",
	  "CHcy":"\u0427",
	  "chcy":"\u0447",
	  "check":"\u2713",
	  "checkmark":"\u2713",
	  "Chi":"\u03A7",
	  "chi":"\u03C7",
	  "cir":"\u25CB",
	  "circ":"\u02C6",
	  "circeq":"\u2257",
	  "circlearrowleft":"\u21BA",
	  "circlearrowright":"\u21BB",
	  "circledast":"\u229B",
	  "circledcirc":"\u229A",
	  "circleddash":"\u229D",
	  "CircleDot":"\u2299",
	  "circledR":"\u00AE",
	  "circledS":"\u24C8",
	  "CircleMinus":"\u2296",
	  "CirclePlus":"\u2295",
	  "CircleTimes":"\u2297",
	  "cirE":"\u29C3",
	  "cire":"\u2257",
	  "cirfnint":"\u2A10",
	  "cirmid":"\u2AEF",
	  "cirscir":"\u29C2",
	  "ClockwiseContourIntegral":"\u2232",
	  "CloseCurlyDoubleQuote":"\u201D",
	  "CloseCurlyQuote":"\u2019",
	  "clubs":"\u2663",
	  "clubsuit":"\u2663",
	  "Colon":"\u2237",
	  "colon":"\u003A",
	  "Colone":"\u2A74",
	  "colone":"\u2254",
	  "coloneq":"\u2254",
	  "comma":"\u002C",
	  "commat":"\u0040",
	  "comp":"\u2201",
	  "compfn":"\u2218",
	  "complement":"\u2201",
	  "complexes":"\u2102",
	  "cong":"\u2245",
	  "congdot":"\u2A6D",
	  "Congruent":"\u2261",
	  "Conint":"\u222F",
	  "conint":"\u222E",
	  "ContourIntegral":"\u222E",
	  "Copf":"\u2102",
	  "copf":"\uD835\uDD54",
	  "coprod":"\u2210",
	  "Coproduct":"\u2210",
	  "COPY":"\u00A9",
	  "copy":"\u00A9",
	  "copysr":"\u2117",
	  "CounterClockwiseContourIntegral":"\u2233",
	  "crarr":"\u21B5",
	  "Cross":"\u2A2F",
	  "cross":"\u2717",
	  "Cscr":"\uD835\uDC9E",
	  "cscr":"\uD835\uDCB8",
	  "csub":"\u2ACF",
	  "csube":"\u2AD1",
	  "csup":"\u2AD0",
	  "csupe":"\u2AD2",
	  "ctdot":"\u22EF",
	  "cudarrl":"\u2938",
	  "cudarrr":"\u2935",
	  "cuepr":"\u22DE",
	  "cuesc":"\u22DF",
	  "cularr":"\u21B6",
	  "cularrp":"\u293D",
	  "Cup":"\u22D3",
	  "cup":"\u222A",
	  "cupbrcap":"\u2A48",
	  "CupCap":"\u224D",
	  "cupcap":"\u2A46",
	  "cupcup":"\u2A4A",
	  "cupdot":"\u228D",
	  "cupor":"\u2A45",
	  "cups":"\u222A\uFE00",
	  "curarr":"\u21B7",
	  "curarrm":"\u293C",
	  "curlyeqprec":"\u22DE",
	  "curlyeqsucc":"\u22DF",
	  "curlyvee":"\u22CE",
	  "curlywedge":"\u22CF",
	  "curren":"\u00A4",
	  "curvearrowleft":"\u21B6",
	  "curvearrowright":"\u21B7",
	  "cuvee":"\u22CE",
	  "cuwed":"\u22CF",
	  "cwconint":"\u2232",
	  "cwint":"\u2231",
	  "cylcty":"\u232D",
	  "Dagger":"\u2021",
	  "dagger":"\u2020",
	  "daleth":"\u2138",
	  "Darr":"\u21A1",
	  "dArr":"\u21D3",
	  "darr":"\u2193",
	  "dash":"\u2010",
	  "Dashv":"\u2AE4",
	  "dashv":"\u22A3",
	  "dbkarow":"\u290F",
	  "dblac":"\u02DD",
	  "Dcaron":"\u010E",
	  "dcaron":"\u010F",
	  "Dcy":"\u0414",
	  "dcy":"\u0434",
	  "DD":"\u2145",
	  "dd":"\u2146",
	  "ddagger":"\u2021",
	  "ddarr":"\u21CA",
	  "DDotrahd":"\u2911",
	  "ddotseq":"\u2A77",
	  "deg":"\u00B0",
	  "Del":"\u2207",
	  "Delta":"\u0394",
	  "delta":"\u03B4",
	  "demptyv":"\u29B1",
	  "dfisht":"\u297F",
	  "Dfr":"\uD835\uDD07",
	  "dfr":"\uD835\uDD21",
	  "dHar":"\u2965",
	  "dharl":"\u21C3",
	  "dharr":"\u21C2",
	  "DiacriticalAcute":"\u00B4",
	  "DiacriticalDot":"\u02D9",
	  "DiacriticalDoubleAcute":"\u02DD",
	  "DiacriticalGrave":"\u0060",
	  "DiacriticalTilde":"\u02DC",
	  "diam":"\u22C4",
	  "Diamond":"\u22C4",
	  "diamond":"\u22C4",
	  "diamondsuit":"\u2666",
	  "diams":"\u2666",
	  "die":"\u00A8",
	  "DifferentialD":"\u2146",
	  "digamma":"\u03DD",
	  "disin":"\u22F2",
	  "div":"\u00F7",
	  "divide":"\u00F7",
	  "divideontimes":"\u22C7",
	  "divonx":"\u22C7",
	  "DJcy":"\u0402",
	  "djcy":"\u0452",
	  "dlcorn":"\u231E",
	  "dlcrop":"\u230D",
	  "dollar":"\u0024",
	  "Dopf":"\uD835\uDD3B",
	  "dopf":"\uD835\uDD55",
	  "Dot":"\u00A8",
	  "dot":"\u02D9",
	  "DotDot":"\u20DC",
	  "doteq":"\u2250",
	  "doteqdot":"\u2251",
	  "DotEqual":"\u2250",
	  "dotminus":"\u2238",
	  "dotplus":"\u2214",
	  "dotsquare":"\u22A1",
	  "doublebarwedge":"\u2306",
	  "DoubleContourIntegral":"\u222F",
	  "DoubleDot":"\u00A8",
	  "DoubleDownArrow":"\u21D3",
	  "DoubleLeftArrow":"\u21D0",
	  "DoubleLeftRightArrow":"\u21D4",
	  "DoubleLeftTee":"\u2AE4",
	  "DoubleLongLeftArrow":"\u27F8",
	  "DoubleLongLeftRightArrow":"\u27FA",
	  "DoubleLongRightArrow":"\u27F9",
	  "DoubleRightArrow":"\u21D2",
	  "DoubleRightTee":"\u22A8",
	  "DoubleUpArrow":"\u21D1",
	  "DoubleUpDownArrow":"\u21D5",
	  "DoubleVerticalBar":"\u2225",
	  "DownArrow":"\u2193",
	  "Downarrow":"\u21D3",
	  "downarrow":"\u2193",
	  "DownArrowBar":"\u2913",
	  "DownArrowUpArrow":"\u21F5",
	  "DownBreve":"\u0311",
	  "downdownarrows":"\u21CA",
	  "downharpoonleft":"\u21C3",
	  "downharpoonright":"\u21C2",
	  "DownLeftRightVector":"\u2950",
	  "DownLeftTeeVector":"\u295E",
	  "DownLeftVector":"\u21BD",
	  "DownLeftVectorBar":"\u2956",
	  "DownRightTeeVector":"\u295F",
	  "DownRightVector":"\u21C1",
	  "DownRightVectorBar":"\u2957",
	  "DownTee":"\u22A4",
	  "DownTeeArrow":"\u21A7",
	  "drbkarow":"\u2910",
	  "drcorn":"\u231F",
	  "drcrop":"\u230C",
	  "Dscr":"\uD835\uDC9F",
	  "dscr":"\uD835\uDCB9",
	  "DScy":"\u0405",
	  "dscy":"\u0455",
	  "dsol":"\u29F6",
	  "Dstrok":"\u0110",
	  "dstrok":"\u0111",
	  "dtdot":"\u22F1",
	  "dtri":"\u25BF",
	  "dtrif":"\u25BE",
	  "duarr":"\u21F5",
	  "duhar":"\u296F",
	  "dwangle":"\u29A6",
	  "DZcy":"\u040F",
	  "dzcy":"\u045F",
	  "dzigrarr":"\u27FF",
	  "Eacute":"\u00C9",
	  "eacute":"\u00E9",
	  "easter":"\u2A6E",
	  "Ecaron":"\u011A",
	  "ecaron":"\u011B",
	  "ecir":"\u2256",
	  "Ecirc":"\u00CA",
	  "ecirc":"\u00EA",
	  "ecolon":"\u2255",
	  "Ecy":"\u042D",
	  "ecy":"\u044D",
	  "eDDot":"\u2A77",
	  "Edot":"\u0116",
	  "eDot":"\u2251",
	  "edot":"\u0117",
	  "ee":"\u2147",
	  "efDot":"\u2252",
	  "Efr":"\uD835\uDD08",
	  "efr":"\uD835\uDD22",
	  "eg":"\u2A9A",
	  "Egrave":"\u00C8",
	  "egrave":"\u00E8",
	  "egs":"\u2A96",
	  "egsdot":"\u2A98",
	  "el":"\u2A99",
	  "Element":"\u2208",
	  "elinters":"\u23E7",
	  "ell":"\u2113",
	  "els":"\u2A95",
	  "elsdot":"\u2A97",
	  "Emacr":"\u0112",
	  "emacr":"\u0113",
	  "empty":"\u2205",
	  "emptyset":"\u2205",
	  "EmptySmallSquare":"\u25FB",
	  "emptyv":"\u2205",
	  "EmptyVerySmallSquare":"\u25AB",
	  "emsp":"\u2003",
	  "emsp13":"\u2004",
	  "emsp14":"\u2005",
	  "ENG":"\u014A",
	  "eng":"\u014B",
	  "ensp":"\u2002",
	  "Eogon":"\u0118",
	  "eogon":"\u0119",
	  "Eopf":"\uD835\uDD3C",
	  "eopf":"\uD835\uDD56",
	  "epar":"\u22D5",
	  "eparsl":"\u29E3",
	  "eplus":"\u2A71",
	  "epsi":"\u03B5",
	  "Epsilon":"\u0395",
	  "epsilon":"\u03B5",
	  "epsiv":"\u03F5",
	  "eqcirc":"\u2256",
	  "eqcolon":"\u2255",
	  "eqsim":"\u2242",
	  "eqslantgtr":"\u2A96",
	  "eqslantless":"\u2A95",
	  "Equal":"\u2A75",
	  "equals":"\u003D",
	  "EqualTilde":"\u2242",
	  "equest":"\u225F",
	  "Equilibrium":"\u21CC",
	  "equiv":"\u2261",
	  "equivDD":"\u2A78",
	  "eqvparsl":"\u29E5",
	  "erarr":"\u2971",
	  "erDot":"\u2253",
	  "Escr":"\u2130",
	  "escr":"\u212F",
	  "esdot":"\u2250",
	  "Esim":"\u2A73",
	  "esim":"\u2242",
	  "Eta":"\u0397",
	  "eta":"\u03B7",
	  "ETH":"\u00D0",
	  "eth":"\u00F0",
	  "Euml":"\u00CB",
	  "euml":"\u00EB",
	  "euro":"\u20AC",
	  "excl":"\u0021",
	  "exist":"\u2203",
	  "Exists":"\u2203",
	  "expectation":"\u2130",
	  "ExponentialE":"\u2147",
	  "exponentiale":"\u2147",
	  "fallingdotseq":"\u2252",
	  "Fcy":"\u0424",
	  "fcy":"\u0444",
	  "female":"\u2640",
	  "ffilig":"\uFB03",
	  "fflig":"\uFB00",
	  "ffllig":"\uFB04",
	  "Ffr":"\uD835\uDD09",
	  "ffr":"\uD835\uDD23",
	  "filig":"\uFB01",
	  "FilledSmallSquare":"\u25FC",
	  "FilledVerySmallSquare":"\u25AA",
	  "fjlig":"\u0066\u006A",
	  "flat":"\u266D",
	  "fllig":"\uFB02",
	  "fltns":"\u25B1",
	  "fnof":"\u0192",
	  "Fopf":"\uD835\uDD3D",
	  "fopf":"\uD835\uDD57",
	  "ForAll":"\u2200",
	  "forall":"\u2200",
	  "fork":"\u22D4",
	  "forkv":"\u2AD9",
	  "Fouriertrf":"\u2131",
	  "fpartint":"\u2A0D",
	  "frac12":"\u00BD",
	  "frac13":"\u2153",
	  "frac14":"\u00BC",
	  "frac15":"\u2155",
	  "frac16":"\u2159",
	  "frac18":"\u215B",
	  "frac23":"\u2154",
	  "frac25":"\u2156",
	  "frac34":"\u00BE",
	  "frac35":"\u2157",
	  "frac38":"\u215C",
	  "frac45":"\u2158",
	  "frac56":"\u215A",
	  "frac58":"\u215D",
	  "frac78":"\u215E",
	  "frasl":"\u2044",
	  "frown":"\u2322",
	  "Fscr":"\u2131",
	  "fscr":"\uD835\uDCBB",
	  "gacute":"\u01F5",
	  "Gamma":"\u0393",
	  "gamma":"\u03B3",
	  "Gammad":"\u03DC",
	  "gammad":"\u03DD",
	  "gap":"\u2A86",
	  "Gbreve":"\u011E",
	  "gbreve":"\u011F",
	  "Gcedil":"\u0122",
	  "Gcirc":"\u011C",
	  "gcirc":"\u011D",
	  "Gcy":"\u0413",
	  "gcy":"\u0433",
	  "Gdot":"\u0120",
	  "gdot":"\u0121",
	  "gE":"\u2267",
	  "ge":"\u2265",
	  "gEl":"\u2A8C",
	  "gel":"\u22DB",
	  "geq":"\u2265",
	  "geqq":"\u2267",
	  "geqslant":"\u2A7E",
	  "ges":"\u2A7E",
	  "gescc":"\u2AA9",
	  "gesdot":"\u2A80",
	  "gesdoto":"\u2A82",
	  "gesdotol":"\u2A84",
	  "gesl":"\u22DB\uFE00",
	  "gesles":"\u2A94",
	  "Gfr":"\uD835\uDD0A",
	  "gfr":"\uD835\uDD24",
	  "Gg":"\u22D9",
	  "gg":"\u226B",
	  "ggg":"\u22D9",
	  "gimel":"\u2137",
	  "GJcy":"\u0403",
	  "gjcy":"\u0453",
	  "gl":"\u2277",
	  "gla":"\u2AA5",
	  "glE":"\u2A92",
	  "glj":"\u2AA4",
	  "gnap":"\u2A8A",
	  "gnapprox":"\u2A8A",
	  "gnE":"\u2269",
	  "gne":"\u2A88",
	  "gneq":"\u2A88",
	  "gneqq":"\u2269",
	  "gnsim":"\u22E7",
	  "Gopf":"\uD835\uDD3E",
	  "gopf":"\uD835\uDD58",
	  "grave":"\u0060",
	  "GreaterEqual":"\u2265",
	  "GreaterEqualLess":"\u22DB",
	  "GreaterFullEqual":"\u2267",
	  "GreaterGreater":"\u2AA2",
	  "GreaterLess":"\u2277",
	  "GreaterSlantEqual":"\u2A7E",
	  "GreaterTilde":"\u2273",
	  "Gscr":"\uD835\uDCA2",
	  "gscr":"\u210A",
	  "gsim":"\u2273",
	  "gsime":"\u2A8E",
	  "gsiml":"\u2A90",
	  "GT":"\u003E",
	  "Gt":"\u226B",
	  "gt":"\u003E",
	  "gtcc":"\u2AA7",
	  "gtcir":"\u2A7A",
	  "gtdot":"\u22D7",
	  "gtlPar":"\u2995",
	  "gtquest":"\u2A7C",
	  "gtrapprox":"\u2A86",
	  "gtrarr":"\u2978",
	  "gtrdot":"\u22D7",
	  "gtreqless":"\u22DB",
	  "gtreqqless":"\u2A8C",
	  "gtrless":"\u2277",
	  "gtrsim":"\u2273",
	  "gvertneqq":"\u2269\uFE00",
	  "gvnE":"\u2269\uFE00",
	  "Hacek":"\u02C7",
	  "hairsp":"\u200A",
	  "half":"\u00BD",
	  "hamilt":"\u210B",
	  "HARDcy":"\u042A",
	  "hardcy":"\u044A",
	  "hArr":"\u21D4",
	  "harr":"\u2194",
	  "harrcir":"\u2948",
	  "harrw":"\u21AD",
	  "Hat":"\u005E",
	  "hbar":"\u210F",
	  "Hcirc":"\u0124",
	  "hcirc":"\u0125",
	  "hearts":"\u2665",
	  "heartsuit":"\u2665",
	  "hellip":"\u2026",
	  "hercon":"\u22B9",
	  "Hfr":"\u210C",
	  "hfr":"\uD835\uDD25",
	  "HilbertSpace":"\u210B",
	  "hksearow":"\u2925",
	  "hkswarow":"\u2926",
	  "hoarr":"\u21FF",
	  "homtht":"\u223B",
	  "hookleftarrow":"\u21A9",
	  "hookrightarrow":"\u21AA",
	  "Hopf":"\u210D",
	  "hopf":"\uD835\uDD59",
	  "horbar":"\u2015",
	  "HorizontalLine":"\u2500",
	  "Hscr":"\u210B",
	  "hscr":"\uD835\uDCBD",
	  "hslash":"\u210F",
	  "Hstrok":"\u0126",
	  "hstrok":"\u0127",
	  "HumpDownHump":"\u224E",
	  "HumpEqual":"\u224F",
	  "hybull":"\u2043",
	  "hyphen":"\u2010",
	  "Iacute":"\u00CD",
	  "iacute":"\u00ED",
	  "ic":"\u2063",
	  "Icirc":"\u00CE",
	  "icirc":"\u00EE",
	  "Icy":"\u0418",
	  "icy":"\u0438",
	  "Idot":"\u0130",
	  "IEcy":"\u0415",
	  "iecy":"\u0435",
	  "iexcl":"\u00A1",
	  "iff":"\u21D4",
	  "Ifr":"\u2111",
	  "ifr":"\uD835\uDD26",
	  "Igrave":"\u00CC",
	  "igrave":"\u00EC",
	  "ii":"\u2148",
	  "iiiint":"\u2A0C",
	  "iiint":"\u222D",
	  "iinfin":"\u29DC",
	  "iiota":"\u2129",
	  "IJlig":"\u0132",
	  "ijlig":"\u0133",
	  "Im":"\u2111",
	  "Imacr":"\u012A",
	  "imacr":"\u012B",
	  "image":"\u2111",
	  "ImaginaryI":"\u2148",
	  "imagline":"\u2110",
	  "imagpart":"\u2111",
	  "imath":"\u0131",
	  "imof":"\u22B7",
	  "imped":"\u01B5",
	  "Implies":"\u21D2",
	  "in":"\u2208",
	  "incare":"\u2105",
	  "infin":"\u221E",
	  "infintie":"\u29DD",
	  "inodot":"\u0131",
	  "Int":"\u222C",
	  "int":"\u222B",
	  "intcal":"\u22BA",
	  "integers":"\u2124",
	  "Integral":"\u222B",
	  "intercal":"\u22BA",
	  "Intersection":"\u22C2",
	  "intlarhk":"\u2A17",
	  "intprod":"\u2A3C",
	  "InvisibleComma":"\u2063",
	  "InvisibleTimes":"\u2062",
	  "IOcy":"\u0401",
	  "iocy":"\u0451",
	  "Iogon":"\u012E",
	  "iogon":"\u012F",
	  "Iopf":"\uD835\uDD40",
	  "iopf":"\uD835\uDD5A",
	  "Iota":"\u0399",
	  "iota":"\u03B9",
	  "iprod":"\u2A3C",
	  "iquest":"\u00BF",
	  "Iscr":"\u2110",
	  "iscr":"\uD835\uDCBE",
	  "isin":"\u2208",
	  "isindot":"\u22F5",
	  "isinE":"\u22F9",
	  "isins":"\u22F4",
	  "isinsv":"\u22F3",
	  "isinv":"\u2208",
	  "it":"\u2062",
	  "Itilde":"\u0128",
	  "itilde":"\u0129",
	  "Iukcy":"\u0406",
	  "iukcy":"\u0456",
	  "Iuml":"\u00CF",
	  "iuml":"\u00EF",
	  "Jcirc":"\u0134",
	  "jcirc":"\u0135",
	  "Jcy":"\u0419",
	  "jcy":"\u0439",
	  "Jfr":"\uD835\uDD0D",
	  "jfr":"\uD835\uDD27",
	  "jmath":"\u0237",
	  "Jopf":"\uD835\uDD41",
	  "jopf":"\uD835\uDD5B",
	  "Jscr":"\uD835\uDCA5",
	  "jscr":"\uD835\uDCBF",
	  "Jsercy":"\u0408",
	  "jsercy":"\u0458",
	  "Jukcy":"\u0404",
	  "jukcy":"\u0454",
	  "Kappa":"\u039A",
	  "kappa":"\u03BA",
	  "kappav":"\u03F0",
	  "Kcedil":"\u0136",
	  "kcedil":"\u0137",
	  "Kcy":"\u041A",
	  "kcy":"\u043A",
	  "Kfr":"\uD835\uDD0E",
	  "kfr":"\uD835\uDD28",
	  "kgreen":"\u0138",
	  "KHcy":"\u0425",
	  "khcy":"\u0445",
	  "KJcy":"\u040C",
	  "kjcy":"\u045C",
	  "Kopf":"\uD835\uDD42",
	  "kopf":"\uD835\uDD5C",
	  "Kscr":"\uD835\uDCA6",
	  "kscr":"\uD835\uDCC0",
	  "lAarr":"\u21DA",
	  "Lacute":"\u0139",
	  "lacute":"\u013A",
	  "laemptyv":"\u29B4",
	  "lagran":"\u2112",
	  "Lambda":"\u039B",
	  "lambda":"\u03BB",
	  "Lang":"\u27EA",
	  "lang":"\u27E8",
	  "langd":"\u2991",
	  "langle":"\u27E8",
	  "lap":"\u2A85",
	  "Laplacetrf":"\u2112",
	  "laquo":"\u00AB",
	  "Larr":"\u219E",
	  "lArr":"\u21D0",
	  "larr":"\u2190",
	  "larrb":"\u21E4",
	  "larrbfs":"\u291F",
	  "larrfs":"\u291D",
	  "larrhk":"\u21A9",
	  "larrlp":"\u21AB",
	  "larrpl":"\u2939",
	  "larrsim":"\u2973",
	  "larrtl":"\u21A2",
	  "lat":"\u2AAB",
	  "lAtail":"\u291B",
	  "latail":"\u2919",
	  "late":"\u2AAD",
	  "lates":"\u2AAD\uFE00",
	  "lBarr":"\u290E",
	  "lbarr":"\u290C",
	  "lbbrk":"\u2772",
	  "lbrace":"\u007B",
	  "lbrack":"\u005B",
	  "lbrke":"\u298B",
	  "lbrksld":"\u298F",
	  "lbrkslu":"\u298D",
	  "Lcaron":"\u013D",
	  "lcaron":"\u013E",
	  "Lcedil":"\u013B",
	  "lcedil":"\u013C",
	  "lceil":"\u2308",
	  "lcub":"\u007B",
	  "Lcy":"\u041B",
	  "lcy":"\u043B",
	  "ldca":"\u2936",
	  "ldquo":"\u201C",
	  "ldquor":"\u201E",
	  "ldrdhar":"\u2967",
	  "ldrushar":"\u294B",
	  "ldsh":"\u21B2",
	  "lE":"\u2266",
	  "le":"\u2264",
	  "LeftAngleBracket":"\u27E8",
	  "LeftArrow":"\u2190",
	  "Leftarrow":"\u21D0",
	  "leftarrow":"\u2190",
	  "LeftArrowBar":"\u21E4",
	  "LeftArrowRightArrow":"\u21C6",
	  "leftarrowtail":"\u21A2",
	  "LeftCeiling":"\u2308",
	  "LeftDoubleBracket":"\u27E6",
	  "LeftDownTeeVector":"\u2961",
	  "LeftDownVector":"\u21C3",
	  "LeftDownVectorBar":"\u2959",
	  "LeftFloor":"\u230A",
	  "leftharpoondown":"\u21BD",
	  "leftharpoonup":"\u21BC",
	  "leftleftarrows":"\u21C7",
	  "LeftRightArrow":"\u2194",
	  "Leftrightarrow":"\u21D4",
	  "leftrightarrow":"\u2194",
	  "leftrightarrows":"\u21C6",
	  "leftrightharpoons":"\u21CB",
	  "leftrightsquigarrow":"\u21AD",
	  "LeftRightVector":"\u294E",
	  "LeftTee":"\u22A3",
	  "LeftTeeArrow":"\u21A4",
	  "LeftTeeVector":"\u295A",
	  "leftthreetimes":"\u22CB",
	  "LeftTriangle":"\u22B2",
	  "LeftTriangleBar":"\u29CF",
	  "LeftTriangleEqual":"\u22B4",
	  "LeftUpDownVector":"\u2951",
	  "LeftUpTeeVector":"\u2960",
	  "LeftUpVector":"\u21BF",
	  "LeftUpVectorBar":"\u2958",
	  "LeftVector":"\u21BC",
	  "LeftVectorBar":"\u2952",
	  "lEg":"\u2A8B",
	  "leg":"\u22DA",
	  "leq":"\u2264",
	  "leqq":"\u2266",
	  "leqslant":"\u2A7D",
	  "les":"\u2A7D",
	  "lescc":"\u2AA8",
	  "lesdot":"\u2A7F",
	  "lesdoto":"\u2A81",
	  "lesdotor":"\u2A83",
	  "lesg":"\u22DA\uFE00",
	  "lesges":"\u2A93",
	  "lessapprox":"\u2A85",
	  "lessdot":"\u22D6",
	  "lesseqgtr":"\u22DA",
	  "lesseqqgtr":"\u2A8B",
	  "LessEqualGreater":"\u22DA",
	  "LessFullEqual":"\u2266",
	  "LessGreater":"\u2276",
	  "lessgtr":"\u2276",
	  "LessLess":"\u2AA1",
	  "lesssim":"\u2272",
	  "LessSlantEqual":"\u2A7D",
	  "LessTilde":"\u2272",
	  "lfisht":"\u297C",
	  "lfloor":"\u230A",
	  "Lfr":"\uD835\uDD0F",
	  "lfr":"\uD835\uDD29",
	  "lg":"\u2276",
	  "lgE":"\u2A91",
	  "lHar":"\u2962",
	  "lhard":"\u21BD",
	  "lharu":"\u21BC",
	  "lharul":"\u296A",
	  "lhblk":"\u2584",
	  "LJcy":"\u0409",
	  "ljcy":"\u0459",
	  "Ll":"\u22D8",
	  "ll":"\u226A",
	  "llarr":"\u21C7",
	  "llcorner":"\u231E",
	  "Lleftarrow":"\u21DA",
	  "llhard":"\u296B",
	  "lltri":"\u25FA",
	  "Lmidot":"\u013F",
	  "lmidot":"\u0140",
	  "lmoust":"\u23B0",
	  "lmoustache":"\u23B0",
	  "lnap":"\u2A89",
	  "lnapprox":"\u2A89",
	  "lnE":"\u2268",
	  "lne":"\u2A87",
	  "lneq":"\u2A87",
	  "lneqq":"\u2268",
	  "lnsim":"\u22E6",
	  "loang":"\u27EC",
	  "loarr":"\u21FD",
	  "lobrk":"\u27E6",
	  "LongLeftArrow":"\u27F5",
	  "Longleftarrow":"\u27F8",
	  "longleftarrow":"\u27F5",
	  "LongLeftRightArrow":"\u27F7",
	  "Longleftrightarrow":"\u27FA",
	  "longleftrightarrow":"\u27F7",
	  "longmapsto":"\u27FC",
	  "LongRightArrow":"\u27F6",
	  "Longrightarrow":"\u27F9",
	  "longrightarrow":"\u27F6",
	  "looparrowleft":"\u21AB",
	  "looparrowright":"\u21AC",
	  "lopar":"\u2985",
	  "Lopf":"\uD835\uDD43",
	  "lopf":"\uD835\uDD5D",
	  "loplus":"\u2A2D",
	  "lotimes":"\u2A34",
	  "lowast":"\u2217",
	  "lowbar":"\u005F",
	  "LowerLeftArrow":"\u2199",
	  "LowerRightArrow":"\u2198",
	  "loz":"\u25CA",
	  "lozenge":"\u25CA",
	  "lozf":"\u29EB",
	  "lpar":"\u0028",
	  "lparlt":"\u2993",
	  "lrarr":"\u21C6",
	  "lrcorner":"\u231F",
	  "lrhar":"\u21CB",
	  "lrhard":"\u296D",
	  "lrm":"\u200E",
	  "lrtri":"\u22BF",
	  "lsaquo":"\u2039",
	  "Lscr":"\u2112",
	  "lscr":"\uD835\uDCC1",
	  "Lsh":"\u21B0",
	  "lsh":"\u21B0",
	  "lsim":"\u2272",
	  "lsime":"\u2A8D",
	  "lsimg":"\u2A8F",
	  "lsqb":"\u005B",
	  "lsquo":"\u2018",
	  "lsquor":"\u201A",
	  "Lstrok":"\u0141",
	  "lstrok":"\u0142",
	  "LT":"\u003C",
	  "Lt":"\u226A",
	  "lt":"\u003C",
	  "ltcc":"\u2AA6",
	  "ltcir":"\u2A79",
	  "ltdot":"\u22D6",
	  "lthree":"\u22CB",
	  "ltimes":"\u22C9",
	  "ltlarr":"\u2976",
	  "ltquest":"\u2A7B",
	  "ltri":"\u25C3",
	  "ltrie":"\u22B4",
	  "ltrif":"\u25C2",
	  "ltrPar":"\u2996",
	  "lurdshar":"\u294A",
	  "luruhar":"\u2966",
	  "lvertneqq":"\u2268\uFE00",
	  "lvnE":"\u2268\uFE00",
	  "macr":"\u00AF",
	  "male":"\u2642",
	  "malt":"\u2720",
	  "maltese":"\u2720",
	  "Map":"\u2905",
	  "map":"\u21A6",
	  "mapsto":"\u21A6",
	  "mapstodown":"\u21A7",
	  "mapstoleft":"\u21A4",
	  "mapstoup":"\u21A5",
	  "marker":"\u25AE",
	  "mcomma":"\u2A29",
	  "Mcy":"\u041C",
	  "mcy":"\u043C",
	  "mdash":"\u2014",
	  "mDDot":"\u223A",
	  "measuredangle":"\u2221",
	  "MediumSpace":"\u205F",
	  "Mellintrf":"\u2133",
	  "Mfr":"\uD835\uDD10",
	  "mfr":"\uD835\uDD2A",
	  "mho":"\u2127",
	  "micro":"\u00B5",
	  "mid":"\u2223",
	  "midast":"\u002A",
	  "midcir":"\u2AF0",
	  "middot":"\u00B7",
	  "minus":"\u2212",
	  "minusb":"\u229F",
	  "minusd":"\u2238",
	  "minusdu":"\u2A2A",
	  "MinusPlus":"\u2213",
	  "mlcp":"\u2ADB",
	  "mldr":"\u2026",
	  "mnplus":"\u2213",
	  "models":"\u22A7",
	  "Mopf":"\uD835\uDD44",
	  "mopf":"\uD835\uDD5E",
	  "mp":"\u2213",
	  "Mscr":"\u2133",
	  "mscr":"\uD835\uDCC2",
	  "mstpos":"\u223E",
	  "Mu":"\u039C",
	  "mu":"\u03BC",
	  "multimap":"\u22B8",
	  "mumap":"\u22B8",
	  "nabla":"\u2207",
	  "Nacute":"\u0143",
	  "nacute":"\u0144",
	  "nang":"\u2220\u20D2",
	  "nap":"\u2249",
	  "napE":"\u2A70\u0338",
	  "napid":"\u224B\u0338",
	  "napos":"\u0149",
	  "napprox":"\u2249",
	  "natur":"\u266E",
	  "natural":"\u266E",
	  "naturals":"\u2115",
	  "nbsp":"\u00A0",
	  "nbump":"\u224E\u0338",
	  "nbumpe":"\u224F\u0338",
	  "ncap":"\u2A43",
	  "Ncaron":"\u0147",
	  "ncaron":"\u0148",
	  "Ncedil":"\u0145",
	  "ncedil":"\u0146",
	  "ncong":"\u2247",
	  "ncongdot":"\u2A6D\u0338",
	  "ncup":"\u2A42",
	  "Ncy":"\u041D",
	  "ncy":"\u043D",
	  "ndash":"\u2013",
	  "ne":"\u2260",
	  "nearhk":"\u2924",
	  "neArr":"\u21D7",
	  "nearr":"\u2197",
	  "nearrow":"\u2197",
	  "nedot":"\u2250\u0338",
	  "NegativeMediumSpace":"\u200B",
	  "NegativeThickSpace":"\u200B",
	  "NegativeThinSpace":"\u200B",
	  "NegativeVeryThinSpace":"\u200B",
	  "nequiv":"\u2262",
	  "nesear":"\u2928",
	  "nesim":"\u2242\u0338",
	  "NestedGreaterGreater":"\u226B",
	  "NestedLessLess":"\u226A",
	  "NewLine":"\u000A",
	  "nexist":"\u2204",
	  "nexists":"\u2204",
	  "Nfr":"\uD835\uDD11",
	  "nfr":"\uD835\uDD2B",
	  "ngE":"\u2267\u0338",
	  "nge":"\u2271",
	  "ngeq":"\u2271",
	  "ngeqq":"\u2267\u0338",
	  "ngeqslant":"\u2A7E\u0338",
	  "nges":"\u2A7E\u0338",
	  "nGg":"\u22D9\u0338",
	  "ngsim":"\u2275",
	  "nGt":"\u226B\u20D2",
	  "ngt":"\u226F",
	  "ngtr":"\u226F",
	  "nGtv":"\u226B\u0338",
	  "nhArr":"\u21CE",
	  "nharr":"\u21AE",
	  "nhpar":"\u2AF2",
	  "ni":"\u220B",
	  "nis":"\u22FC",
	  "nisd":"\u22FA",
	  "niv":"\u220B",
	  "NJcy":"\u040A",
	  "njcy":"\u045A",
	  "nlArr":"\u21CD",
	  "nlarr":"\u219A",
	  "nldr":"\u2025",
	  "nlE":"\u2266\u0338",
	  "nle":"\u2270",
	  "nLeftarrow":"\u21CD",
	  "nleftarrow":"\u219A",
	  "nLeftrightarrow":"\u21CE",
	  "nleftrightarrow":"\u21AE",
	  "nleq":"\u2270",
	  "nleqq":"\u2266\u0338",
	  "nleqslant":"\u2A7D\u0338",
	  "nles":"\u2A7D\u0338",
	  "nless":"\u226E",
	  "nLl":"\u22D8\u0338",
	  "nlsim":"\u2274",
	  "nLt":"\u226A\u20D2",
	  "nlt":"\u226E",
	  "nltri":"\u22EA",
	  "nltrie":"\u22EC",
	  "nLtv":"\u226A\u0338",
	  "nmid":"\u2224",
	  "NoBreak":"\u2060",
	  "NonBreakingSpace":"\u00A0",
	  "Nopf":"\u2115",
	  "nopf":"\uD835\uDD5F",
	  "Not":"\u2AEC",
	  "not":"\u00AC",
	  "NotCongruent":"\u2262",
	  "NotCupCap":"\u226D",
	  "NotDoubleVerticalBar":"\u2226",
	  "NotElement":"\u2209",
	  "NotEqual":"\u2260",
	  "NotEqualTilde":"\u2242\u0338",
	  "NotExists":"\u2204",
	  "NotGreater":"\u226F",
	  "NotGreaterEqual":"\u2271",
	  "NotGreaterFullEqual":"\u2267\u0338",
	  "NotGreaterGreater":"\u226B\u0338",
	  "NotGreaterLess":"\u2279",
	  "NotGreaterSlantEqual":"\u2A7E\u0338",
	  "NotGreaterTilde":"\u2275",
	  "NotHumpDownHump":"\u224E\u0338",
	  "NotHumpEqual":"\u224F\u0338",
	  "notin":"\u2209",
	  "notindot":"\u22F5\u0338",
	  "notinE":"\u22F9\u0338",
	  "notinva":"\u2209",
	  "notinvb":"\u22F7",
	  "notinvc":"\u22F6",
	  "NotLeftTriangle":"\u22EA",
	  "NotLeftTriangleBar":"\u29CF\u0338",
	  "NotLeftTriangleEqual":"\u22EC",
	  "NotLess":"\u226E",
	  "NotLessEqual":"\u2270",
	  "NotLessGreater":"\u2278",
	  "NotLessLess":"\u226A\u0338",
	  "NotLessSlantEqual":"\u2A7D\u0338",
	  "NotLessTilde":"\u2274",
	  "NotNestedGreaterGreater":"\u2AA2\u0338",
	  "NotNestedLessLess":"\u2AA1\u0338",
	  "notni":"\u220C",
	  "notniva":"\u220C",
	  "notnivb":"\u22FE",
	  "notnivc":"\u22FD",
	  "NotPrecedes":"\u2280",
	  "NotPrecedesEqual":"\u2AAF\u0338",
	  "NotPrecedesSlantEqual":"\u22E0",
	  "NotReverseElement":"\u220C",
	  "NotRightTriangle":"\u22EB",
	  "NotRightTriangleBar":"\u29D0\u0338",
	  "NotRightTriangleEqual":"\u22ED",
	  "NotSquareSubset":"\u228F\u0338",
	  "NotSquareSubsetEqual":"\u22E2",
	  "NotSquareSuperset":"\u2290\u0338",
	  "NotSquareSupersetEqual":"\u22E3",
	  "NotSubset":"\u2282\u20D2",
	  "NotSubsetEqual":"\u2288",
	  "NotSucceeds":"\u2281",
	  "NotSucceedsEqual":"\u2AB0\u0338",
	  "NotSucceedsSlantEqual":"\u22E1",
	  "NotSucceedsTilde":"\u227F\u0338",
	  "NotSuperset":"\u2283\u20D2",
	  "NotSupersetEqual":"\u2289",
	  "NotTilde":"\u2241",
	  "NotTildeEqual":"\u2244",
	  "NotTildeFullEqual":"\u2247",
	  "NotTildeTilde":"\u2249",
	  "NotVerticalBar":"\u2224",
	  "npar":"\u2226",
	  "nparallel":"\u2226",
	  "nparsl":"\u2AFD\u20E5",
	  "npart":"\u2202\u0338",
	  "npolint":"\u2A14",
	  "npr":"\u2280",
	  "nprcue":"\u22E0",
	  "npre":"\u2AAF\u0338",
	  "nprec":"\u2280",
	  "npreceq":"\u2AAF\u0338",
	  "nrArr":"\u21CF",
	  "nrarr":"\u219B",
	  "nrarrc":"\u2933\u0338",
	  "nrarrw":"\u219D\u0338",
	  "nRightarrow":"\u21CF",
	  "nrightarrow":"\u219B",
	  "nrtri":"\u22EB",
	  "nrtrie":"\u22ED",
	  "nsc":"\u2281",
	  "nsccue":"\u22E1",
	  "nsce":"\u2AB0\u0338",
	  "Nscr":"\uD835\uDCA9",
	  "nscr":"\uD835\uDCC3",
	  "nshortmid":"\u2224",
	  "nshortparallel":"\u2226",
	  "nsim":"\u2241",
	  "nsime":"\u2244",
	  "nsimeq":"\u2244",
	  "nsmid":"\u2224",
	  "nspar":"\u2226",
	  "nsqsube":"\u22E2",
	  "nsqsupe":"\u22E3",
	  "nsub":"\u2284",
	  "nsubE":"\u2AC5\u0338",
	  "nsube":"\u2288",
	  "nsubset":"\u2282\u20D2",
	  "nsubseteq":"\u2288",
	  "nsubseteqq":"\u2AC5\u0338",
	  "nsucc":"\u2281",
	  "nsucceq":"\u2AB0\u0338",
	  "nsup":"\u2285",
	  "nsupE":"\u2AC6\u0338",
	  "nsupe":"\u2289",
	  "nsupset":"\u2283\u20D2",
	  "nsupseteq":"\u2289",
	  "nsupseteqq":"\u2AC6\u0338",
	  "ntgl":"\u2279",
	  "Ntilde":"\u00D1",
	  "ntilde":"\u00F1",
	  "ntlg":"\u2278",
	  "ntriangleleft":"\u22EA",
	  "ntrianglelefteq":"\u22EC",
	  "ntriangleright":"\u22EB",
	  "ntrianglerighteq":"\u22ED",
	  "Nu":"\u039D",
	  "nu":"\u03BD",
	  "num":"\u0023",
	  "numero":"\u2116",
	  "numsp":"\u2007",
	  "nvap":"\u224D\u20D2",
	  "nVDash":"\u22AF",
	  "nVdash":"\u22AE",
	  "nvDash":"\u22AD",
	  "nvdash":"\u22AC",
	  "nvge":"\u2265\u20D2",
	  "nvgt":"\u003E\u20D2",
	  "nvHarr":"\u2904",
	  "nvinfin":"\u29DE",
	  "nvlArr":"\u2902",
	  "nvle":"\u2264\u20D2",
	  "nvlt":"\u003C\u20D2",
	  "nvltrie":"\u22B4\u20D2",
	  "nvrArr":"\u2903",
	  "nvrtrie":"\u22B5\u20D2",
	  "nvsim":"\u223C\u20D2",
	  "nwarhk":"\u2923",
	  "nwArr":"\u21D6",
	  "nwarr":"\u2196",
	  "nwarrow":"\u2196",
	  "nwnear":"\u2927",
	  "Oacute":"\u00D3",
	  "oacute":"\u00F3",
	  "oast":"\u229B",
	  "ocir":"\u229A",
	  "Ocirc":"\u00D4",
	  "ocirc":"\u00F4",
	  "Ocy":"\u041E",
	  "ocy":"\u043E",
	  "odash":"\u229D",
	  "Odblac":"\u0150",
	  "odblac":"\u0151",
	  "odiv":"\u2A38",
	  "odot":"\u2299",
	  "odsold":"\u29BC",
	  "OElig":"\u0152",
	  "oelig":"\u0153",
	  "ofcir":"\u29BF",
	  "Ofr":"\uD835\uDD12",
	  "ofr":"\uD835\uDD2C",
	  "ogon":"\u02DB",
	  "Ograve":"\u00D2",
	  "ograve":"\u00F2",
	  "ogt":"\u29C1",
	  "ohbar":"\u29B5",
	  "ohm":"\u03A9",
	  "oint":"\u222E",
	  "olarr":"\u21BA",
	  "olcir":"\u29BE",
	  "olcross":"\u29BB",
	  "oline":"\u203E",
	  "olt":"\u29C0",
	  "Omacr":"\u014C",
	  "omacr":"\u014D",
	  "Omega":"\u03A9",
	  "omega":"\u03C9",
	  "Omicron":"\u039F",
	  "omicron":"\u03BF",
	  "omid":"\u29B6",
	  "ominus":"\u2296",
	  "Oopf":"\uD835\uDD46",
	  "oopf":"\uD835\uDD60",
	  "opar":"\u29B7",
	  "OpenCurlyDoubleQuote":"\u201C",
	  "OpenCurlyQuote":"\u2018",
	  "operp":"\u29B9",
	  "oplus":"\u2295",
	  "Or":"\u2A54",
	  "or":"\u2228",
	  "orarr":"\u21BB",
	  "ord":"\u2A5D",
	  "order":"\u2134",
	  "orderof":"\u2134",
	  "ordf":"\u00AA",
	  "ordm":"\u00BA",
	  "origof":"\u22B6",
	  "oror":"\u2A56",
	  "orslope":"\u2A57",
	  "orv":"\u2A5B",
	  "oS":"\u24C8",
	  "Oscr":"\uD835\uDCAA",
	  "oscr":"\u2134",
	  "Oslash":"\u00D8",
	  "oslash":"\u00F8",
	  "osol":"\u2298",
	  "Otilde":"\u00D5",
	  "otilde":"\u00F5",
	  "Otimes":"\u2A37",
	  "otimes":"\u2297",
	  "otimesas":"\u2A36",
	  "Ouml":"\u00D6",
	  "ouml":"\u00F6",
	  "ovbar":"\u233D",
	  "OverBar":"\u203E",
	  "OverBrace":"\u23DE",
	  "OverBracket":"\u23B4",
	  "OverParenthesis":"\u23DC",
	  "par":"\u2225",
	  "para":"\u00B6",
	  "parallel":"\u2225",
	  "parsim":"\u2AF3",
	  "parsl":"\u2AFD",
	  "part":"\u2202",
	  "PartialD":"\u2202",
	  "Pcy":"\u041F",
	  "pcy":"\u043F",
	  "percnt":"\u0025",
	  "period":"\u002E",
	  "permil":"\u2030",
	  "perp":"\u22A5",
	  "pertenk":"\u2031",
	  "Pfr":"\uD835\uDD13",
	  "pfr":"\uD835\uDD2D",
	  "Phi":"\u03A6",
	  "phi":"\u03C6",
	  "phiv":"\u03D5",
	  "phmmat":"\u2133",
	  "phone":"\u260E",
	  "Pi":"\u03A0",
	  "pi":"\u03C0",
	  "pitchfork":"\u22D4",
	  "piv":"\u03D6",
	  "planck":"\u210F",
	  "planckh":"\u210E",
	  "plankv":"\u210F",
	  "plus":"\u002B",
	  "plusacir":"\u2A23",
	  "plusb":"\u229E",
	  "pluscir":"\u2A22",
	  "plusdo":"\u2214",
	  "plusdu":"\u2A25",
	  "pluse":"\u2A72",
	  "PlusMinus":"\u00B1",
	  "plusmn":"\u00B1",
	  "plussim":"\u2A26",
	  "plustwo":"\u2A27",
	  "pm":"\u00B1",
	  "Poincareplane":"\u210C",
	  "pointint":"\u2A15",
	  "Popf":"\u2119",
	  "popf":"\uD835\uDD61",
	  "pound":"\u00A3",
	  "Pr":"\u2ABB",
	  "pr":"\u227A",
	  "prap":"\u2AB7",
	  "prcue":"\u227C",
	  "prE":"\u2AB3",
	  "pre":"\u2AAF",
	  "prec":"\u227A",
	  "precapprox":"\u2AB7",
	  "preccurlyeq":"\u227C",
	  "Precedes":"\u227A",
	  "PrecedesEqual":"\u2AAF",
	  "PrecedesSlantEqual":"\u227C",
	  "PrecedesTilde":"\u227E",
	  "preceq":"\u2AAF",
	  "precnapprox":"\u2AB9",
	  "precneqq":"\u2AB5",
	  "precnsim":"\u22E8",
	  "precsim":"\u227E",
	  "Prime":"\u2033",
	  "prime":"\u2032",
	  "primes":"\u2119",
	  "prnap":"\u2AB9",
	  "prnE":"\u2AB5",
	  "prnsim":"\u22E8",
	  "prod":"\u220F",
	  "Product":"\u220F",
	  "profalar":"\u232E",
	  "profline":"\u2312",
	  "profsurf":"\u2313",
	  "prop":"\u221D",
	  "Proportion":"\u2237",
	  "Proportional":"\u221D",
	  "propto":"\u221D",
	  "prsim":"\u227E",
	  "prurel":"\u22B0",
	  "Pscr":"\uD835\uDCAB",
	  "pscr":"\uD835\uDCC5",
	  "Psi":"\u03A8",
	  "psi":"\u03C8",
	  "puncsp":"\u2008",
	  "Qfr":"\uD835\uDD14",
	  "qfr":"\uD835\uDD2E",
	  "qint":"\u2A0C",
	  "Qopf":"\u211A",
	  "qopf":"\uD835\uDD62",
	  "qprime":"\u2057",
	  "Qscr":"\uD835\uDCAC",
	  "qscr":"\uD835\uDCC6",
	  "quaternions":"\u210D",
	  "quatint":"\u2A16",
	  "quest":"\u003F",
	  "questeq":"\u225F",
	  "QUOT":"\u0022",
	  "quot":"\u0022",
	  "rAarr":"\u21DB",
	  "race":"\u223D\u0331",
	  "Racute":"\u0154",
	  "racute":"\u0155",
	  "radic":"\u221A",
	  "raemptyv":"\u29B3",
	  "Rang":"\u27EB",
	  "rang":"\u27E9",
	  "rangd":"\u2992",
	  "range":"\u29A5",
	  "rangle":"\u27E9",
	  "raquo":"\u00BB",
	  "Rarr":"\u21A0",
	  "rArr":"\u21D2",
	  "rarr":"\u2192",
	  "rarrap":"\u2975",
	  "rarrb":"\u21E5",
	  "rarrbfs":"\u2920",
	  "rarrc":"\u2933",
	  "rarrfs":"\u291E",
	  "rarrhk":"\u21AA",
	  "rarrlp":"\u21AC",
	  "rarrpl":"\u2945",
	  "rarrsim":"\u2974",
	  "Rarrtl":"\u2916",
	  "rarrtl":"\u21A3",
	  "rarrw":"\u219D",
	  "rAtail":"\u291C",
	  "ratail":"\u291A",
	  "ratio":"\u2236",
	  "rationals":"\u211A",
	  "RBarr":"\u2910",
	  "rBarr":"\u290F",
	  "rbarr":"\u290D",
	  "rbbrk":"\u2773",
	  "rbrace":"\u007D",
	  "rbrack":"\u005D",
	  "rbrke":"\u298C",
	  "rbrksld":"\u298E",
	  "rbrkslu":"\u2990",
	  "Rcaron":"\u0158",
	  "rcaron":"\u0159",
	  "Rcedil":"\u0156",
	  "rcedil":"\u0157",
	  "rceil":"\u2309",
	  "rcub":"\u007D",
	  "Rcy":"\u0420",
	  "rcy":"\u0440",
	  "rdca":"\u2937",
	  "rdldhar":"\u2969",
	  "rdquo":"\u201D",
	  "rdquor":"\u201D",
	  "rdsh":"\u21B3",
	  "Re":"\u211C",
	  "real":"\u211C",
	  "realine":"\u211B",
	  "realpart":"\u211C",
	  "reals":"\u211D",
	  "rect":"\u25AD",
	  "REG":"\u00AE",
	  "reg":"\u00AE",
	  "ReverseElement":"\u220B",
	  "ReverseEquilibrium":"\u21CB",
	  "ReverseUpEquilibrium":"\u296F",
	  "rfisht":"\u297D",
	  "rfloor":"\u230B",
	  "Rfr":"\u211C",
	  "rfr":"\uD835\uDD2F",
	  "rHar":"\u2964",
	  "rhard":"\u21C1",
	  "rharu":"\u21C0",
	  "rharul":"\u296C",
	  "Rho":"\u03A1",
	  "rho":"\u03C1",
	  "rhov":"\u03F1",
	  "RightAngleBracket":"\u27E9",
	  "RightArrow":"\u2192",
	  "Rightarrow":"\u21D2",
	  "rightarrow":"\u2192",
	  "RightArrowBar":"\u21E5",
	  "RightArrowLeftArrow":"\u21C4",
	  "rightarrowtail":"\u21A3",
	  "RightCeiling":"\u2309",
	  "RightDoubleBracket":"\u27E7",
	  "RightDownTeeVector":"\u295D",
	  "RightDownVector":"\u21C2",
	  "RightDownVectorBar":"\u2955",
	  "RightFloor":"\u230B",
	  "rightharpoondown":"\u21C1",
	  "rightharpoonup":"\u21C0",
	  "rightleftarrows":"\u21C4",
	  "rightleftharpoons":"\u21CC",
	  "rightrightarrows":"\u21C9",
	  "rightsquigarrow":"\u219D",
	  "RightTee":"\u22A2",
	  "RightTeeArrow":"\u21A6",
	  "RightTeeVector":"\u295B",
	  "rightthreetimes":"\u22CC",
	  "RightTriangle":"\u22B3",
	  "RightTriangleBar":"\u29D0",
	  "RightTriangleEqual":"\u22B5",
	  "RightUpDownVector":"\u294F",
	  "RightUpTeeVector":"\u295C",
	  "RightUpVector":"\u21BE",
	  "RightUpVectorBar":"\u2954",
	  "RightVector":"\u21C0",
	  "RightVectorBar":"\u2953",
	  "ring":"\u02DA",
	  "risingdotseq":"\u2253",
	  "rlarr":"\u21C4",
	  "rlhar":"\u21CC",
	  "rlm":"\u200F",
	  "rmoust":"\u23B1",
	  "rmoustache":"\u23B1",
	  "rnmid":"\u2AEE",
	  "roang":"\u27ED",
	  "roarr":"\u21FE",
	  "robrk":"\u27E7",
	  "ropar":"\u2986",
	  "Ropf":"\u211D",
	  "ropf":"\uD835\uDD63",
	  "roplus":"\u2A2E",
	  "rotimes":"\u2A35",
	  "RoundImplies":"\u2970",
	  "rpar":"\u0029",
	  "rpargt":"\u2994",
	  "rppolint":"\u2A12",
	  "rrarr":"\u21C9",
	  "Rrightarrow":"\u21DB",
	  "rsaquo":"\u203A",
	  "Rscr":"\u211B",
	  "rscr":"\uD835\uDCC7",
	  "Rsh":"\u21B1",
	  "rsh":"\u21B1",
	  "rsqb":"\u005D",
	  "rsquo":"\u2019",
	  "rsquor":"\u2019",
	  "rthree":"\u22CC",
	  "rtimes":"\u22CA",
	  "rtri":"\u25B9",
	  "rtrie":"\u22B5",
	  "rtrif":"\u25B8",
	  "rtriltri":"\u29CE",
	  "RuleDelayed":"\u29F4",
	  "ruluhar":"\u2968",
	  "rx":"\u211E",
	  "Sacute":"\u015A",
	  "sacute":"\u015B",
	  "sbquo":"\u201A",
	  "Sc":"\u2ABC",
	  "sc":"\u227B",
	  "scap":"\u2AB8",
	  "Scaron":"\u0160",
	  "scaron":"\u0161",
	  "sccue":"\u227D",
	  "scE":"\u2AB4",
	  "sce":"\u2AB0",
	  "Scedil":"\u015E",
	  "scedil":"\u015F",
	  "Scirc":"\u015C",
	  "scirc":"\u015D",
	  "scnap":"\u2ABA",
	  "scnE":"\u2AB6",
	  "scnsim":"\u22E9",
	  "scpolint":"\u2A13",
	  "scsim":"\u227F",
	  "Scy":"\u0421",
	  "scy":"\u0441",
	  "sdot":"\u22C5",
	  "sdotb":"\u22A1",
	  "sdote":"\u2A66",
	  "searhk":"\u2925",
	  "seArr":"\u21D8",
	  "searr":"\u2198",
	  "searrow":"\u2198",
	  "sect":"\u00A7",
	  "semi":"\u003B",
	  "seswar":"\u2929",
	  "setminus":"\u2216",
	  "setmn":"\u2216",
	  "sext":"\u2736",
	  "Sfr":"\uD835\uDD16",
	  "sfr":"\uD835\uDD30",
	  "sfrown":"\u2322",
	  "sharp":"\u266F",
	  "SHCHcy":"\u0429",
	  "shchcy":"\u0449",
	  "SHcy":"\u0428",
	  "shcy":"\u0448",
	  "ShortDownArrow":"\u2193",
	  "ShortLeftArrow":"\u2190",
	  "shortmid":"\u2223",
	  "shortparallel":"\u2225",
	  "ShortRightArrow":"\u2192",
	  "ShortUpArrow":"\u2191",
	  "shy":"\u00AD",
	  "Sigma":"\u03A3",
	  "sigma":"\u03C3",
	  "sigmaf":"\u03C2",
	  "sigmav":"\u03C2",
	  "sim":"\u223C",
	  "simdot":"\u2A6A",
	  "sime":"\u2243",
	  "simeq":"\u2243",
	  "simg":"\u2A9E",
	  "simgE":"\u2AA0",
	  "siml":"\u2A9D",
	  "simlE":"\u2A9F",
	  "simne":"\u2246",
	  "simplus":"\u2A24",
	  "simrarr":"\u2972",
	  "slarr":"\u2190",
	  "SmallCircle":"\u2218",
	  "smallsetminus":"\u2216",
	  "smashp":"\u2A33",
	  "smeparsl":"\u29E4",
	  "smid":"\u2223",
	  "smile":"\u2323",
	  "smt":"\u2AAA",
	  "smte":"\u2AAC",
	  "smtes":"\u2AAC\uFE00",
	  "SOFTcy":"\u042C",
	  "softcy":"\u044C",
	  "sol":"\u002F",
	  "solb":"\u29C4",
	  "solbar":"\u233F",
	  "Sopf":"\uD835\uDD4A",
	  "sopf":"\uD835\uDD64",
	  "spades":"\u2660",
	  "spadesuit":"\u2660",
	  "spar":"\u2225",
	  "sqcap":"\u2293",
	  "sqcaps":"\u2293\uFE00",
	  "sqcup":"\u2294",
	  "sqcups":"\u2294\uFE00",
	  "Sqrt":"\u221A",
	  "sqsub":"\u228F",
	  "sqsube":"\u2291",
	  "sqsubset":"\u228F",
	  "sqsubseteq":"\u2291",
	  "sqsup":"\u2290",
	  "sqsupe":"\u2292",
	  "sqsupset":"\u2290",
	  "sqsupseteq":"\u2292",
	  "squ":"\u25A1",
	  "Square":"\u25A1",
	  "square":"\u25A1",
	  "SquareIntersection":"\u2293",
	  "SquareSubset":"\u228F",
	  "SquareSubsetEqual":"\u2291",
	  "SquareSuperset":"\u2290",
	  "SquareSupersetEqual":"\u2292",
	  "SquareUnion":"\u2294",
	  "squarf":"\u25AA",
	  "squf":"\u25AA",
	  "srarr":"\u2192",
	  "Sscr":"\uD835\uDCAE",
	  "sscr":"\uD835\uDCC8",
	  "ssetmn":"\u2216",
	  "ssmile":"\u2323",
	  "sstarf":"\u22C6",
	  "Star":"\u22C6",
	  "star":"\u2606",
	  "starf":"\u2605",
	  "straightepsilon":"\u03F5",
	  "straightphi":"\u03D5",
	  "strns":"\u00AF",
	  "Sub":"\u22D0",
	  "sub":"\u2282",
	  "subdot":"\u2ABD",
	  "subE":"\u2AC5",
	  "sube":"\u2286",
	  "subedot":"\u2AC3",
	  "submult":"\u2AC1",
	  "subnE":"\u2ACB",
	  "subne":"\u228A",
	  "subplus":"\u2ABF",
	  "subrarr":"\u2979",
	  "Subset":"\u22D0",
	  "subset":"\u2282",
	  "subseteq":"\u2286",
	  "subseteqq":"\u2AC5",
	  "SubsetEqual":"\u2286",
	  "subsetneq":"\u228A",
	  "subsetneqq":"\u2ACB",
	  "subsim":"\u2AC7",
	  "subsub":"\u2AD5",
	  "subsup":"\u2AD3",
	  "succ":"\u227B",
	  "succapprox":"\u2AB8",
	  "succcurlyeq":"\u227D",
	  "Succeeds":"\u227B",
	  "SucceedsEqual":"\u2AB0",
	  "SucceedsSlantEqual":"\u227D",
	  "SucceedsTilde":"\u227F",
	  "succeq":"\u2AB0",
	  "succnapprox":"\u2ABA",
	  "succneqq":"\u2AB6",
	  "succnsim":"\u22E9",
	  "succsim":"\u227F",
	  "SuchThat":"\u220B",
	  "Sum":"\u2211",
	  "sum":"\u2211",
	  "sung":"\u266A",
	  "Sup":"\u22D1",
	  "sup":"\u2283",
	  "sup1":"\u00B9",
	  "sup2":"\u00B2",
	  "sup3":"\u00B3",
	  "supdot":"\u2ABE",
	  "supdsub":"\u2AD8",
	  "supE":"\u2AC6",
	  "supe":"\u2287",
	  "supedot":"\u2AC4",
	  "Superset":"\u2283",
	  "SupersetEqual":"\u2287",
	  "suphsol":"\u27C9",
	  "suphsub":"\u2AD7",
	  "suplarr":"\u297B",
	  "supmult":"\u2AC2",
	  "supnE":"\u2ACC",
	  "supne":"\u228B",
	  "supplus":"\u2AC0",
	  "Supset":"\u22D1",
	  "supset":"\u2283",
	  "supseteq":"\u2287",
	  "supseteqq":"\u2AC6",
	  "supsetneq":"\u228B",
	  "supsetneqq":"\u2ACC",
	  "supsim":"\u2AC8",
	  "supsub":"\u2AD4",
	  "supsup":"\u2AD6",
	  "swarhk":"\u2926",
	  "swArr":"\u21D9",
	  "swarr":"\u2199",
	  "swarrow":"\u2199",
	  "swnwar":"\u292A",
	  "szlig":"\u00DF",
	  "Tab":"\u0009",
	  "target":"\u2316",
	  "Tau":"\u03A4",
	  "tau":"\u03C4",
	  "tbrk":"\u23B4",
	  "Tcaron":"\u0164",
	  "tcaron":"\u0165",
	  "Tcedil":"\u0162",
	  "tcedil":"\u0163",
	  "Tcy":"\u0422",
	  "tcy":"\u0442",
	  "tdot":"\u20DB",
	  "telrec":"\u2315",
	  "Tfr":"\uD835\uDD17",
	  "tfr":"\uD835\uDD31",
	  "there4":"\u2234",
	  "Therefore":"\u2234",
	  "therefore":"\u2234",
	  "Theta":"\u0398",
	  "theta":"\u03B8",
	  "thetasym":"\u03D1",
	  "thetav":"\u03D1",
	  "thickapprox":"\u2248",
	  "thicksim":"\u223C",
	  "ThickSpace":"\u205F\u200A",
	  "thinsp":"\u2009",
	  "ThinSpace":"\u2009",
	  "thkap":"\u2248",
	  "thksim":"\u223C",
	  "THORN":"\u00DE",
	  "thorn":"\u00FE",
	  "Tilde":"\u223C",
	  "tilde":"\u02DC",
	  "TildeEqual":"\u2243",
	  "TildeFullEqual":"\u2245",
	  "TildeTilde":"\u2248",
	  "times":"\u00D7",
	  "timesb":"\u22A0",
	  "timesbar":"\u2A31",
	  "timesd":"\u2A30",
	  "tint":"\u222D",
	  "toea":"\u2928",
	  "top":"\u22A4",
	  "topbot":"\u2336",
	  "topcir":"\u2AF1",
	  "Topf":"\uD835\uDD4B",
	  "topf":"\uD835\uDD65",
	  "topfork":"\u2ADA",
	  "tosa":"\u2929",
	  "tprime":"\u2034",
	  "TRADE":"\u2122",
	  "trade":"\u2122",
	  "triangle":"\u25B5",
	  "triangledown":"\u25BF",
	  "triangleleft":"\u25C3",
	  "trianglelefteq":"\u22B4",
	  "triangleq":"\u225C",
	  "triangleright":"\u25B9",
	  "trianglerighteq":"\u22B5",
	  "tridot":"\u25EC",
	  "trie":"\u225C",
	  "triminus":"\u2A3A",
	  "TripleDot":"\u20DB",
	  "triplus":"\u2A39",
	  "trisb":"\u29CD",
	  "tritime":"\u2A3B",
	  "trpezium":"\u23E2",
	  "Tscr":"\uD835\uDCAF",
	  "tscr":"\uD835\uDCC9",
	  "TScy":"\u0426",
	  "tscy":"\u0446",
	  "TSHcy":"\u040B",
	  "tshcy":"\u045B",
	  "Tstrok":"\u0166",
	  "tstrok":"\u0167",
	  "twixt":"\u226C",
	  "twoheadleftarrow":"\u219E",
	  "twoheadrightarrow":"\u21A0",
	  "Uacute":"\u00DA",
	  "uacute":"\u00FA",
	  "Uarr":"\u219F",
	  "uArr":"\u21D1",
	  "uarr":"\u2191",
	  "Uarrocir":"\u2949",
	  "Ubrcy":"\u040E",
	  "ubrcy":"\u045E",
	  "Ubreve":"\u016C",
	  "ubreve":"\u016D",
	  "Ucirc":"\u00DB",
	  "ucirc":"\u00FB",
	  "Ucy":"\u0423",
	  "ucy":"\u0443",
	  "udarr":"\u21C5",
	  "Udblac":"\u0170",
	  "udblac":"\u0171",
	  "udhar":"\u296E",
	  "ufisht":"\u297E",
	  "Ufr":"\uD835\uDD18",
	  "ufr":"\uD835\uDD32",
	  "Ugrave":"\u00D9",
	  "ugrave":"\u00F9",
	  "uHar":"\u2963",
	  "uharl":"\u21BF",
	  "uharr":"\u21BE",
	  "uhblk":"\u2580",
	  "ulcorn":"\u231C",
	  "ulcorner":"\u231C",
	  "ulcrop":"\u230F",
	  "ultri":"\u25F8",
	  "Umacr":"\u016A",
	  "umacr":"\u016B",
	  "uml":"\u00A8",
	  "UnderBar":"\u005F",
	  "UnderBrace":"\u23DF",
	  "UnderBracket":"\u23B5",
	  "UnderParenthesis":"\u23DD",
	  "Union":"\u22C3",
	  "UnionPlus":"\u228E",
	  "Uogon":"\u0172",
	  "uogon":"\u0173",
	  "Uopf":"\uD835\uDD4C",
	  "uopf":"\uD835\uDD66",
	  "UpArrow":"\u2191",
	  "Uparrow":"\u21D1",
	  "uparrow":"\u2191",
	  "UpArrowBar":"\u2912",
	  "UpArrowDownArrow":"\u21C5",
	  "UpDownArrow":"\u2195",
	  "Updownarrow":"\u21D5",
	  "updownarrow":"\u2195",
	  "UpEquilibrium":"\u296E",
	  "upharpoonleft":"\u21BF",
	  "upharpoonright":"\u21BE",
	  "uplus":"\u228E",
	  "UpperLeftArrow":"\u2196",
	  "UpperRightArrow":"\u2197",
	  "Upsi":"\u03D2",
	  "upsi":"\u03C5",
	  "upsih":"\u03D2",
	  "Upsilon":"\u03A5",
	  "upsilon":"\u03C5",
	  "UpTee":"\u22A5",
	  "UpTeeArrow":"\u21A5",
	  "upuparrows":"\u21C8",
	  "urcorn":"\u231D",
	  "urcorner":"\u231D",
	  "urcrop":"\u230E",
	  "Uring":"\u016E",
	  "uring":"\u016F",
	  "urtri":"\u25F9",
	  "Uscr":"\uD835\uDCB0",
	  "uscr":"\uD835\uDCCA",
	  "utdot":"\u22F0",
	  "Utilde":"\u0168",
	  "utilde":"\u0169",
	  "utri":"\u25B5",
	  "utrif":"\u25B4",
	  "uuarr":"\u21C8",
	  "Uuml":"\u00DC",
	  "uuml":"\u00FC",
	  "uwangle":"\u29A7",
	  "vangrt":"\u299C",
	  "varepsilon":"\u03F5",
	  "varkappa":"\u03F0",
	  "varnothing":"\u2205",
	  "varphi":"\u03D5",
	  "varpi":"\u03D6",
	  "varpropto":"\u221D",
	  "vArr":"\u21D5",
	  "varr":"\u2195",
	  "varrho":"\u03F1",
	  "varsigma":"\u03C2",
	  "varsubsetneq":"\u228A\uFE00",
	  "varsubsetneqq":"\u2ACB\uFE00",
	  "varsupsetneq":"\u228B\uFE00",
	  "varsupsetneqq":"\u2ACC\uFE00",
	  "vartheta":"\u03D1",
	  "vartriangleleft":"\u22B2",
	  "vartriangleright":"\u22B3",
	  "Vbar":"\u2AEB",
	  "vBar":"\u2AE8",
	  "vBarv":"\u2AE9",
	  "Vcy":"\u0412",
	  "vcy":"\u0432",
	  "VDash":"\u22AB",
	  "Vdash":"\u22A9",
	  "vDash":"\u22A8",
	  "vdash":"\u22A2",
	  "Vdashl":"\u2AE6",
	  "Vee":"\u22C1",
	  "vee":"\u2228",
	  "veebar":"\u22BB",
	  "veeeq":"\u225A",
	  "vellip":"\u22EE",
	  "Verbar":"\u2016",
	  "verbar":"\u007C",
	  "Vert":"\u2016",
	  "vert":"\u007C",
	  "VerticalBar":"\u2223",
	  "VerticalLine":"\u007C",
	  "VerticalSeparator":"\u2758",
	  "VerticalTilde":"\u2240",
	  "VeryThinSpace":"\u200A",
	  "Vfr":"\uD835\uDD19",
	  "vfr":"\uD835\uDD33",
	  "vltri":"\u22B2",
	  "vnsub":"\u2282\u20D2",
	  "vnsup":"\u2283\u20D2",
	  "Vopf":"\uD835\uDD4D",
	  "vopf":"\uD835\uDD67",
	  "vprop":"\u221D",
	  "vrtri":"\u22B3",
	  "Vscr":"\uD835\uDCB1",
	  "vscr":"\uD835\uDCCB",
	  "vsubnE":"\u2ACB\uFE00",
	  "vsubne":"\u228A\uFE00",
	  "vsupnE":"\u2ACC\uFE00",
	  "vsupne":"\u228B\uFE00",
	  "Vvdash":"\u22AA",
	  "vzigzag":"\u299A",
	  "Wcirc":"\u0174",
	  "wcirc":"\u0175",
	  "wedbar":"\u2A5F",
	  "Wedge":"\u22C0",
	  "wedge":"\u2227",
	  "wedgeq":"\u2259",
	  "weierp":"\u2118",
	  "Wfr":"\uD835\uDD1A",
	  "wfr":"\uD835\uDD34",
	  "Wopf":"\uD835\uDD4E",
	  "wopf":"\uD835\uDD68",
	  "wp":"\u2118",
	  "wr":"\u2240",
	  "wreath":"\u2240",
	  "Wscr":"\uD835\uDCB2",
	  "wscr":"\uD835\uDCCC",
	  "xcap":"\u22C2",
	  "xcirc":"\u25EF",
	  "xcup":"\u22C3",
	  "xdtri":"\u25BD",
	  "Xfr":"\uD835\uDD1B",
	  "xfr":"\uD835\uDD35",
	  "xhArr":"\u27FA",
	  "xharr":"\u27F7",
	  "Xi":"\u039E",
	  "xi":"\u03BE",
	  "xlArr":"\u27F8",
	  "xlarr":"\u27F5",
	  "xmap":"\u27FC",
	  "xnis":"\u22FB",
	  "xodot":"\u2A00",
	  "Xopf":"\uD835\uDD4F",
	  "xopf":"\uD835\uDD69",
	  "xoplus":"\u2A01",
	  "xotime":"\u2A02",
	  "xrArr":"\u27F9",
	  "xrarr":"\u27F6",
	  "Xscr":"\uD835\uDCB3",
	  "xscr":"\uD835\uDCCD",
	  "xsqcup":"\u2A06",
	  "xuplus":"\u2A04",
	  "xutri":"\u25B3",
	  "xvee":"\u22C1",
	  "xwedge":"\u22C0",
	  "Yacute":"\u00DD",
	  "yacute":"\u00FD",
	  "YAcy":"\u042F",
	  "yacy":"\u044F",
	  "Ycirc":"\u0176",
	  "ycirc":"\u0177",
	  "Ycy":"\u042B",
	  "ycy":"\u044B",
	  "yen":"\u00A5",
	  "Yfr":"\uD835\uDD1C",
	  "yfr":"\uD835\uDD36",
	  "YIcy":"\u0407",
	  "yicy":"\u0457",
	  "Yopf":"\uD835\uDD50",
	  "yopf":"\uD835\uDD6A",
	  "Yscr":"\uD835\uDCB4",
	  "yscr":"\uD835\uDCCE",
	  "YUcy":"\u042E",
	  "yucy":"\u044E",
	  "Yuml":"\u0178",
	  "yuml":"\u00FF",
	  "Zacute":"\u0179",
	  "zacute":"\u017A",
	  "Zcaron":"\u017D",
	  "zcaron":"\u017E",
	  "Zcy":"\u0417",
	  "zcy":"\u0437",
	  "Zdot":"\u017B",
	  "zdot":"\u017C",
	  "zeetrf":"\u2128",
	  "ZeroWidthSpace":"\u200B",
	  "Zeta":"\u0396",
	  "zeta":"\u03B6",
	  "Zfr":"\u2128",
	  "zfr":"\uD835\uDD37",
	  "ZHcy":"\u0416",
	  "zhcy":"\u0436",
	  "zigrarr":"\u21DD",
	  "Zopf":"\u2124",
	  "zopf":"\uD835\uDD6B",
	  "Zscr":"\uD835\uDCB5",
	  "zscr":"\uD835\uDCCF",
	  "zwj":"\u200D",
	  "zwnj":"\u200C"
	};


/***/ },
/* 382 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	/**
	 * Local dependencies
	 */

	var utils = __webpack_require__(380);
	var rules = __webpack_require__(383);

	/**
	 * Expose `Renderer`
	 */

	module.exports = Renderer;

	/**
	 * Renderer class. Renders HTML and exposes `rules` to allow
	 * local modifications.
	 */

	function Renderer() {
	  this.rules = utils.assign({}, rules);

	  // exported helper, for custom rules only
	  this.getBreak = rules.getBreak;
	}

	/**
	 * Render a string of inline HTML with the given `tokens` and
	 * `options`.
	 *
	 * @param  {Array} `tokens`
	 * @param  {Object} `options`
	 * @param  {Object} `env`
	 * @return {String}
	 * @api public
	 */

	Renderer.prototype.renderInline = function (tokens, options, env) {
	  var _rules = this.rules;
	  var len = tokens.length, i = 0;
	  var result = '';

	  while (len--) {
	    result += _rules[tokens[i].type](tokens, i++, options, env, this);
	  }

	  return result;
	};

	/**
	 * Render a string of HTML with the given `tokens` and
	 * `options`.
	 *
	 * @param  {Array} `tokens`
	 * @param  {Object} `options`
	 * @param  {Object} `env`
	 * @return {String}
	 * @api public
	 */

	Renderer.prototype.render = function (tokens, options, env) {
	  var _rules = this.rules;
	  var len = tokens.length, i = -1;
	  var result = '';

	  while (++i < len) {
	    if (tokens[i].type === 'inline') {
	      result += this.renderInline(tokens[i].children, options, env);
	    } else {
	      result += _rules[tokens[i].type](tokens, i, options, env, this);
	    }
	  }
	  return result;
	};


/***/ },
/* 383 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	/**
	 * Local dependencies
	 */

	var has             = __webpack_require__(380).has;
	var unescapeMd      = __webpack_require__(380).unescapeMd;
	var replaceEntities = __webpack_require__(380).replaceEntities;
	var escapeHtml      = __webpack_require__(380).escapeHtml;

	/**
	 * Renderer rules cache
	 */

	var rules = {};

	/**
	 * Blockquotes
	 */

	rules.blockquote_open = function(/* tokens, idx, options, env */) {
	  return '<blockquote>\n';
	};

	rules.blockquote_close = function(tokens, idx /*, options, env */) {
	  return '</blockquote>' + getBreak(tokens, idx);
	};

	/**
	 * Code
	 */

	rules.code = function(tokens, idx /*, options, env */) {
	  if (tokens[idx].block) {
	    return '<pre><code>' + escapeHtml(tokens[idx].content) + '</code></pre>' + getBreak(tokens, idx);
	  }
	  return '<code>' + escapeHtml(tokens[idx].content) + '</code>';
	};

	/**
	 * Fenced code blocks
	 */

	rules.fence = function(tokens, idx, options, env, instance) {
	  var token = tokens[idx];
	  var langClass = '';
	  var langPrefix = options.langPrefix;
	  var langName = '', fences, fenceName;
	  var highlighted;

	  if (token.params) {

	    //
	    // ```foo bar
	    //
	    // Try custom renderer "foo" first. That will simplify overwrite
	    // for diagrams, latex, and any other fenced block with custom look
	    //

	    fences = token.params.split(/\s+/g);
	    fenceName = fences.join(' ');

	    if (has(instance.rules.fence_custom, fences[0])) {
	      return instance.rules.fence_custom[fences[0]](tokens, idx, options, env, instance);
	    }

	    langName = escapeHtml(replaceEntities(unescapeMd(fenceName)));
	    langClass = ' class="' + langPrefix + langName + '"';
	  }

	  if (options.highlight) {
	    highlighted = options.highlight.apply(options.highlight, [ token.content ].concat(fences))
	      || escapeHtml(token.content);
	  } else {
	    highlighted = escapeHtml(token.content);
	  }

	  return '<pre><code' + langClass + '>'
	        + highlighted
	        + '</code></pre>'
	        + getBreak(tokens, idx);
	};

	rules.fence_custom = {};

	/**
	 * Headings
	 */

	rules.heading_open = function(tokens, idx /*, options, env */) {
	  return '<h' + tokens[idx].hLevel + '>';
	};
	rules.heading_close = function(tokens, idx /*, options, env */) {
	  return '</h' + tokens[idx].hLevel + '>\n';
	};

	/**
	 * Horizontal rules
	 */

	rules.hr = function(tokens, idx, options /*, env */) {
	  return (options.xhtmlOut ? '<hr />' : '<hr>') + getBreak(tokens, idx);
	};

	/**
	 * Bullets
	 */

	rules.bullet_list_open = function(/* tokens, idx, options, env */) {
	  return '<ul>\n';
	};
	rules.bullet_list_close = function(tokens, idx /*, options, env */) {
	  return '</ul>' + getBreak(tokens, idx);
	};

	/**
	 * List items
	 */

	rules.list_item_open = function(/* tokens, idx, options, env */) {
	  return '<li>';
	};
	rules.list_item_close = function(/* tokens, idx, options, env */) {
	  return '</li>\n';
	};

	/**
	 * Ordered list items
	 */

	rules.ordered_list_open = function(tokens, idx /*, options, env */) {
	  var token = tokens[idx];
	  var order = token.order > 1 ? ' start="' + token.order + '"' : '';
	  return '<ol' + order + '>\n';
	};
	rules.ordered_list_close = function(tokens, idx /*, options, env */) {
	  return '</ol>' + getBreak(tokens, idx);
	};

	/**
	 * Paragraphs
	 */

	rules.paragraph_open = function(tokens, idx /*, options, env */) {
	  return tokens[idx].tight ? '' : '<p>';
	};
	rules.paragraph_close = function(tokens, idx /*, options, env */) {
	  var addBreak = !(tokens[idx].tight && idx && tokens[idx - 1].type === 'inline' && !tokens[idx - 1].content);
	  return (tokens[idx].tight ? '' : '</p>') + (addBreak ? getBreak(tokens, idx) : '');
	};

	/**
	 * Links
	 */

	rules.link_open = function(tokens, idx, options /* env */) {
	  var title = tokens[idx].title ? (' title="' + escapeHtml(replaceEntities(tokens[idx].title)) + '"') : '';
	  var target = options.linkTarget ? (' target="' + options.linkTarget + '"') : '';
	  return '<a href="' + escapeHtml(tokens[idx].href) + '"' + title + target + '>';
	};
	rules.link_close = function(/* tokens, idx, options, env */) {
	  return '</a>';
	};

	/**
	 * Images
	 */

	rules.image = function(tokens, idx, options /*, env */) {
	  var src = ' src="' + escapeHtml(tokens[idx].src) + '"';
	  var title = tokens[idx].title ? (' title="' + escapeHtml(replaceEntities(tokens[idx].title)) + '"') : '';
	  var alt = ' alt="' + (tokens[idx].alt ? escapeHtml(replaceEntities(unescapeMd(tokens[idx].alt))) : '') + '"';
	  var suffix = options.xhtmlOut ? ' /' : '';
	  return '<img' + src + alt + title + suffix + '>';
	};

	/**
	 * Tables
	 */

	rules.table_open = function(/* tokens, idx, options, env */) {
	  return '<table>\n';
	};
	rules.table_close = function(/* tokens, idx, options, env */) {
	  return '</table>\n';
	};
	rules.thead_open = function(/* tokens, idx, options, env */) {
	  return '<thead>\n';
	};
	rules.thead_close = function(/* tokens, idx, options, env */) {
	  return '</thead>\n';
	};
	rules.tbody_open = function(/* tokens, idx, options, env */) {
	  return '<tbody>\n';
	};
	rules.tbody_close = function(/* tokens, idx, options, env */) {
	  return '</tbody>\n';
	};
	rules.tr_open = function(/* tokens, idx, options, env */) {
	  return '<tr>';
	};
	rules.tr_close = function(/* tokens, idx, options, env */) {
	  return '</tr>\n';
	};
	rules.th_open = function(tokens, idx /*, options, env */) {
	  var token = tokens[idx];
	  return '<th'
	    + (token.align ? ' style="text-align:' + token.align + '"' : '')
	    + '>';
	};
	rules.th_close = function(/* tokens, idx, options, env */) {
	  return '</th>';
	};
	rules.td_open = function(tokens, idx /*, options, env */) {
	  var token = tokens[idx];
	  return '<td'
	    + (token.align ? ' style="text-align:' + token.align + '"' : '')
	    + '>';
	};
	rules.td_close = function(/* tokens, idx, options, env */) {
	  return '</td>';
	};

	/**
	 * Bold
	 */

	rules.strong_open = function(/* tokens, idx, options, env */) {
	  return '<strong>';
	};
	rules.strong_close = function(/* tokens, idx, options, env */) {
	  return '</strong>';
	};

	/**
	 * Italicize
	 */

	rules.em_open = function(/* tokens, idx, options, env */) {
	  return '<em>';
	};
	rules.em_close = function(/* tokens, idx, options, env */) {
	  return '</em>';
	};

	/**
	 * Strikethrough
	 */

	rules.del_open = function(/* tokens, idx, options, env */) {
	  return '<del>';
	};
	rules.del_close = function(/* tokens, idx, options, env */) {
	  return '</del>';
	};

	/**
	 * Insert
	 */

	rules.ins_open = function(/* tokens, idx, options, env */) {
	  return '<ins>';
	};
	rules.ins_close = function(/* tokens, idx, options, env */) {
	  return '</ins>';
	};

	/**
	 * Highlight
	 */

	rules.mark_open = function(/* tokens, idx, options, env */) {
	  return '<mark>';
	};
	rules.mark_close = function(/* tokens, idx, options, env */) {
	  return '</mark>';
	};

	/**
	 * Super- and sub-script
	 */

	rules.sub = function(tokens, idx /*, options, env */) {
	  return '<sub>' + escapeHtml(tokens[idx].content) + '</sub>';
	};
	rules.sup = function(tokens, idx /*, options, env */) {
	  return '<sup>' + escapeHtml(tokens[idx].content) + '</sup>';
	};

	/**
	 * Breaks
	 */

	rules.hardbreak = function(tokens, idx, options /*, env */) {
	  return options.xhtmlOut ? '<br />\n' : '<br>\n';
	};
	rules.softbreak = function(tokens, idx, options /*, env */) {
	  return options.breaks ? (options.xhtmlOut ? '<br />\n' : '<br>\n') : '\n';
	};

	/**
	 * Text
	 */

	rules.text = function(tokens, idx /*, options, env */) {
	  return escapeHtml(tokens[idx].content);
	};

	/**
	 * Content
	 */

	rules.htmlblock = function(tokens, idx /*, options, env */) {
	  return tokens[idx].content;
	};
	rules.htmltag = function(tokens, idx /*, options, env */) {
	  return tokens[idx].content;
	};

	/**
	 * Abbreviations, initialism
	 */

	rules.abbr_open = function(tokens, idx /*, options, env */) {
	  return '<abbr title="' + escapeHtml(replaceEntities(tokens[idx].title)) + '">';
	};
	rules.abbr_close = function(/* tokens, idx, options, env */) {
	  return '</abbr>';
	};

	/**
	 * Footnotes
	 */

	rules.footnote_ref = function(tokens, idx) {
	  var n = Number(tokens[idx].id + 1).toString();
	  var id = 'fnref' + n;
	  if (tokens[idx].subId > 0) {
	    id += ':' + tokens[idx].subId;
	  }
	  return '<sup class="footnote-ref"><a href="#fn' + n + '" id="' + id + '">[' + n + ']</a></sup>';
	};
	rules.footnote_block_open = function(tokens, idx, options) {
	  var hr = options.xhtmlOut
	    ? '<hr class="footnotes-sep" />\n'
	    : '<hr class="footnotes-sep">\n';
	  return hr + '<section class="footnotes">\n<ol class="footnotes-list">\n';
	};
	rules.footnote_block_close = function() {
	  return '</ol>\n</section>\n';
	};
	rules.footnote_open = function(tokens, idx) {
	  var id = Number(tokens[idx].id + 1).toString();
	  return '<li id="fn' + id + '"  class="footnote-item">';
	};
	rules.footnote_close = function() {
	  return '</li>\n';
	};
	rules.footnote_anchor = function(tokens, idx) {
	  var n = Number(tokens[idx].id + 1).toString();
	  var id = 'fnref' + n;
	  if (tokens[idx].subId > 0) {
	    id += ':' + tokens[idx].subId;
	  }
	  return ' <a href="#' + id + '" class="footnote-backref">↩</a>';
	};

	/**
	 * Definition lists
	 */

	rules.dl_open = function() {
	  return '<dl>\n';
	};
	rules.dt_open = function() {
	  return '<dt>';
	};
	rules.dd_open = function() {
	  return '<dd>';
	};
	rules.dl_close = function() {
	  return '</dl>\n';
	};
	rules.dt_close = function() {
	  return '</dt>\n';
	};
	rules.dd_close = function() {
	  return '</dd>\n';
	};

	/**
	 * Helper functions
	 */

	function nextToken(tokens, idx) {
	  if (++idx >= tokens.length - 2) {
	    return idx;
	  }
	  if ((tokens[idx].type === 'paragraph_open' && tokens[idx].tight) &&
	      (tokens[idx + 1].type === 'inline' && tokens[idx + 1].content.length === 0) &&
	      (tokens[idx + 2].type === 'paragraph_close' && tokens[idx + 2].tight)) {
	    return nextToken(tokens, idx + 2);
	  }
	  return idx;
	}

	/**
	 * Check to see if `\n` is needed before the next token.
	 *
	 * @param  {Array} `tokens`
	 * @param  {Number} `idx`
	 * @return {String} Empty string or newline
	 * @api private
	 */

	var getBreak = rules.getBreak = function getBreak(tokens, idx) {
	  idx = nextToken(tokens, idx);
	  if (idx < tokens.length && tokens[idx].type === 'list_item_close') {
	    return '';
	  }
	  return '\n';
	};

	/**
	 * Expose `rules`
	 */

	module.exports = rules;


/***/ },
/* 384 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	/**
	 * Local dependencies
	 */

	var Ruler = __webpack_require__(385);

	/**
	 * Core parser `rules`
	 */

	var _rules = [
	  [ 'block',          __webpack_require__(386)          ],
	  [ 'abbr',           __webpack_require__(387)           ],
	  [ 'references',     __webpack_require__(390)     ],
	  [ 'inline',         __webpack_require__(395)         ],
	  [ 'footnote_tail',  __webpack_require__(396)  ],
	  [ 'abbr2',          __webpack_require__(397)          ],
	  [ 'replacements',   __webpack_require__(398)   ],
	  [ 'smartquotes',    __webpack_require__(399)    ],
	  [ 'linkify',        __webpack_require__(400)        ]
	];

	/**
	 * Class for top level (`core`) parser rules
	 *
	 * @api private
	 */

	function Core() {
	  this.options = {};
	  this.ruler = new Ruler();
	  for (var i = 0; i < _rules.length; i++) {
	    this.ruler.push(_rules[i][0], _rules[i][1]);
	  }
	}

	/**
	 * Process rules with the given `state`
	 *
	 * @param  {Object} `state`
	 * @api private
	 */

	Core.prototype.process = function (state) {
	  var i, l, rules;
	  rules = this.ruler.getRules('');
	  for (i = 0, l = rules.length; i < l; i++) {
	    rules[i](state);
	  }
	};

	/**
	 * Expose `Core`
	 */

	module.exports = Core;


/***/ },
/* 385 */
/***/ function(module, exports) {

	'use strict';

	/**
	 * Ruler is a helper class for building responsibility chains from
	 * parse rules. It allows:
	 *
	 *   - easy stack rules chains
	 *   - getting main chain and named chains content (as arrays of functions)
	 *
	 * Helper methods, should not be used directly.
	 * @api private
	 */

	function Ruler() {
	  // List of added rules. Each element is:
	  //
	  // { name: XXX,
	  //   enabled: Boolean,
	  //   fn: Function(),
	  //   alt: [ name2, name3 ] }
	  //
	  this.__rules__ = [];

	  // Cached rule chains.
	  //
	  // First level - chain name, '' for default.
	  // Second level - digital anchor for fast filtering by charcodes.
	  //
	  this.__cache__ = null;
	}

	/**
	 * Find the index of a rule by `name`.
	 *
	 * @param  {String} `name`
	 * @return {Number} Index of the given `name`
	 * @api private
	 */

	Ruler.prototype.__find__ = function (name) {
	  var len = this.__rules__.length;
	  var i = -1;

	  while (len--) {
	    if (this.__rules__[++i].name === name) {
	      return i;
	    }
	  }
	  return -1;
	};

	/**
	 * Build the rules lookup cache
	 *
	 * @api private
	 */

	Ruler.prototype.__compile__ = function () {
	  var self = this;
	  var chains = [ '' ];

	  // collect unique names
	  self.__rules__.forEach(function (rule) {
	    if (!rule.enabled) {
	      return;
	    }

	    rule.alt.forEach(function (altName) {
	      if (chains.indexOf(altName) < 0) {
	        chains.push(altName);
	      }
	    });
	  });

	  self.__cache__ = {};

	  chains.forEach(function (chain) {
	    self.__cache__[chain] = [];
	    self.__rules__.forEach(function (rule) {
	      if (!rule.enabled) {
	        return;
	      }

	      if (chain && rule.alt.indexOf(chain) < 0) {
	        return;
	      }
	      self.__cache__[chain].push(rule.fn);
	    });
	  });
	};

	/**
	 * Ruler public methods
	 * ------------------------------------------------
	 */

	/**
	 * Replace rule function
	 *
	 * @param  {String} `name` Rule name
	 * @param  {Function `fn`
	 * @param  {Object} `options`
	 * @api private
	 */

	Ruler.prototype.at = function (name, fn, options) {
	  var idx = this.__find__(name);
	  var opt = options || {};

	  if (idx === -1) {
	    throw new Error('Parser rule not found: ' + name);
	  }

	  this.__rules__[idx].fn = fn;
	  this.__rules__[idx].alt = opt.alt || [];
	  this.__cache__ = null;
	};

	/**
	 * Add a rule to the chain before given the `ruleName`.
	 *
	 * @param  {String}   `beforeName`
	 * @param  {String}   `ruleName`
	 * @param  {Function} `fn`
	 * @param  {Object}   `options`
	 * @api private
	 */

	Ruler.prototype.before = function (beforeName, ruleName, fn, options) {
	  var idx = this.__find__(beforeName);
	  var opt = options || {};

	  if (idx === -1) {
	    throw new Error('Parser rule not found: ' + beforeName);
	  }

	  this.__rules__.splice(idx, 0, {
	    name: ruleName,
	    enabled: true,
	    fn: fn,
	    alt: opt.alt || []
	  });

	  this.__cache__ = null;
	};

	/**
	 * Add a rule to the chain after the given `ruleName`.
	 *
	 * @param  {String}   `afterName`
	 * @param  {String}   `ruleName`
	 * @param  {Function} `fn`
	 * @param  {Object}   `options`
	 * @api private
	 */

	Ruler.prototype.after = function (afterName, ruleName, fn, options) {
	  var idx = this.__find__(afterName);
	  var opt = options || {};

	  if (idx === -1) {
	    throw new Error('Parser rule not found: ' + afterName);
	  }

	  this.__rules__.splice(idx + 1, 0, {
	    name: ruleName,
	    enabled: true,
	    fn: fn,
	    alt: opt.alt || []
	  });

	  this.__cache__ = null;
	};

	/**
	 * Add a rule to the end of chain.
	 *
	 * @param  {String}   `ruleName`
	 * @param  {Function} `fn`
	 * @param  {Object}   `options`
	 * @return {String}
	 */

	Ruler.prototype.push = function (ruleName, fn, options) {
	  var opt = options || {};

	  this.__rules__.push({
	    name: ruleName,
	    enabled: true,
	    fn: fn,
	    alt: opt.alt || []
	  });

	  this.__cache__ = null;
	};

	/**
	 * Enable a rule or list of rules.
	 *
	 * @param  {String|Array} `list` Name or array of rule names to enable
	 * @param  {Boolean} `strict` If `true`, all non listed rules will be disabled.
	 * @api private
	 */

	Ruler.prototype.enable = function (list, strict) {
	  list = !Array.isArray(list)
	    ? [ list ]
	    : list;

	  // In strict mode disable all existing rules first
	  if (strict) {
	    this.__rules__.forEach(function (rule) {
	      rule.enabled = false;
	    });
	  }

	  // Search by name and enable
	  list.forEach(function (name) {
	    var idx = this.__find__(name);
	    if (idx < 0) {
	      throw new Error('Rules manager: invalid rule name ' + name);
	    }
	    this.__rules__[idx].enabled = true;
	  }, this);

	  this.__cache__ = null;
	};


	/**
	 * Disable a rule or list of rules.
	 *
	 * @param  {String|Array} `list` Name or array of rule names to disable
	 * @api private
	 */

	Ruler.prototype.disable = function (list) {
	  list = !Array.isArray(list)
	    ? [ list ]
	    : list;

	  // Search by name and disable
	  list.forEach(function (name) {
	    var idx = this.__find__(name);
	    if (idx < 0) {
	      throw new Error('Rules manager: invalid rule name ' + name);
	    }
	    this.__rules__[idx].enabled = false;
	  }, this);

	  this.__cache__ = null;
	};

	/**
	 * Get a rules list as an array of functions.
	 *
	 * @param  {String} `chainName`
	 * @return {Object}
	 * @api private
	 */

	Ruler.prototype.getRules = function (chainName) {
	  if (this.__cache__ === null) {
	    this.__compile__();
	  }
	  return this.__cache__[chainName] || [];
	};

	/**
	 * Expose `Ruler`
	 */

	module.exports = Ruler;


/***/ },
/* 386 */
/***/ function(module, exports) {

	'use strict';

	module.exports = function block(state) {

	  if (state.inlineMode) {
	    state.tokens.push({
	      type: 'inline',
	      content: state.src.replace(/\n/g, ' ').trim(),
	      level: 0,
	      lines: [ 0, 1 ],
	      children: []
	    });

	  } else {
	    state.block.parse(state.src, state.options, state.env, state.tokens);
	  }
	};


/***/ },
/* 387 */
/***/ function(module, exports, __webpack_require__) {

	// Parse abbreviation definitions, i.e. `*[abbr]: description`
	//

	'use strict';


	var StateInline    = __webpack_require__(388);
	var parseLinkLabel = __webpack_require__(389);


	function parseAbbr(str, parserInline, options, env) {
	  var state, labelEnd, pos, max, label, title;

	  if (str.charCodeAt(0) !== 0x2A/* * */) { return -1; }
	  if (str.charCodeAt(1) !== 0x5B/* [ */) { return -1; }

	  if (str.indexOf(']:') === -1) { return -1; }

	  state = new StateInline(str, parserInline, options, env, []);
	  labelEnd = parseLinkLabel(state, 1);

	  if (labelEnd < 0 || str.charCodeAt(labelEnd + 1) !== 0x3A/* : */) { return -1; }

	  max = state.posMax;

	  // abbr title is always one line, so looking for ending "\n" here
	  for (pos = labelEnd + 2; pos < max; pos++) {
	    if (state.src.charCodeAt(pos) === 0x0A) { break; }
	  }

	  label = str.slice(2, labelEnd);
	  title = str.slice(labelEnd + 2, pos).trim();
	  if (title.length === 0) { return -1; }
	  if (!env.abbreviations) { env.abbreviations = {}; }
	  // prepend ':' to avoid conflict with Object.prototype members
	  if (typeof env.abbreviations[':' + label] === 'undefined') {
	    env.abbreviations[':' + label] = title;
	  }

	  return pos;
	}

	module.exports = function abbr(state) {
	  var tokens = state.tokens, i, l, content, pos;

	  if (state.inlineMode) {
	    return;
	  }

	  // Parse inlines
	  for (i = 1, l = tokens.length - 1; i < l; i++) {
	    if (tokens[i - 1].type === 'paragraph_open' &&
	        tokens[i].type === 'inline' &&
	        tokens[i + 1].type === 'paragraph_close') {

	      content = tokens[i].content;
	      while (content.length) {
	        pos = parseAbbr(content, state.inline, state.options, state.env);
	        if (pos < 0) { break; }
	        content = content.slice(pos).trim();
	      }

	      tokens[i].content = content;
	      if (!content.length) {
	        tokens[i - 1].tight = true;
	        tokens[i + 1].tight = true;
	      }
	    }
	  }
	};


/***/ },
/* 388 */
/***/ function(module, exports) {

	// Inline parser state

	'use strict';

	function StateInline(src, parserInline, options, env, outTokens) {
	  this.src = src;
	  this.env = env;
	  this.options = options;
	  this.parser = parserInline;
	  this.tokens = outTokens;
	  this.pos = 0;
	  this.posMax = this.src.length;
	  this.level = 0;
	  this.pending = '';
	  this.pendingLevel = 0;

	  this.cache = [];        // Stores { start: end } pairs. Useful for backtrack
	                          // optimization of pairs parse (emphasis, strikes).

	  // Link parser state vars

	  this.isInLabel = false; // Set true when seek link label - we should disable
	                          // "paired" rules (emphasis, strikes) to not skip
	                          // tailing `]`

	  this.linkLevel = 0;     // Increment for each nesting link. Used to prevent
	                          // nesting in definitions

	  this.linkContent = '';  // Temporary storage for link url

	  this.labelUnmatchedScopes = 0; // Track unpaired `[` for link labels
	                                 // (backtrack optimization)
	}

	// Flush pending text
	//
	StateInline.prototype.pushPending = function () {
	  this.tokens.push({
	    type: 'text',
	    content: this.pending,
	    level: this.pendingLevel
	  });
	  this.pending = '';
	};

	// Push new token to "stream".
	// If pending text exists - flush it as text token
	//
	StateInline.prototype.push = function (token) {
	  if (this.pending) {
	    this.pushPending();
	  }

	  this.tokens.push(token);
	  this.pendingLevel = this.level;
	};

	// Store value to cache.
	// !!! Implementation has parser-specific optimizations
	// !!! keys MUST be integer, >= 0; values MUST be integer, > 0
	//
	StateInline.prototype.cacheSet = function (key, val) {
	  for (var i = this.cache.length; i <= key; i++) {
	    this.cache.push(0);
	  }

	  this.cache[key] = val;
	};

	// Get cache value
	//
	StateInline.prototype.cacheGet = function (key) {
	  return key < this.cache.length ? this.cache[key] : 0;
	};

	module.exports = StateInline;


/***/ },
/* 389 */
/***/ function(module, exports) {

	'use strict';

	/**
	 * Parse link labels
	 *
	 * This function assumes that first character (`[`) already matches;
	 * returns the end of the label.
	 *
	 * @param  {Object} state
	 * @param  {Number} start
	 * @api private
	 */

	module.exports = function parseLinkLabel(state, start) {
	  var level, found, marker,
	      labelEnd = -1,
	      max = state.posMax,
	      oldPos = state.pos,
	      oldFlag = state.isInLabel;

	  if (state.isInLabel) { return -1; }

	  if (state.labelUnmatchedScopes) {
	    state.labelUnmatchedScopes--;
	    return -1;
	  }

	  state.pos = start + 1;
	  state.isInLabel = true;
	  level = 1;

	  while (state.pos < max) {
	    marker = state.src.charCodeAt(state.pos);
	    if (marker === 0x5B /* [ */) {
	      level++;
	    } else if (marker === 0x5D /* ] */) {
	      level--;
	      if (level === 0) {
	        found = true;
	        break;
	      }
	    }

	    state.parser.skipToken(state);
	  }

	  if (found) {
	    labelEnd = state.pos;
	    state.labelUnmatchedScopes = 0;
	  } else {
	    state.labelUnmatchedScopes = level - 1;
	  }

	  // restore old state
	  state.pos = oldPos;
	  state.isInLabel = oldFlag;

	  return labelEnd;
	};


/***/ },
/* 390 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';


	var StateInline          = __webpack_require__(388);
	var parseLinkLabel       = __webpack_require__(389);
	var parseLinkDestination = __webpack_require__(391);
	var parseLinkTitle       = __webpack_require__(393);
	var normalizeReference   = __webpack_require__(394);


	function parseReference(str, parser, options, env) {
	  var state, labelEnd, pos, max, code, start, href, title, label;

	  if (str.charCodeAt(0) !== 0x5B/* [ */) { return -1; }

	  if (str.indexOf(']:') === -1) { return -1; }

	  state = new StateInline(str, parser, options, env, []);
	  labelEnd = parseLinkLabel(state, 0);

	  if (labelEnd < 0 || str.charCodeAt(labelEnd + 1) !== 0x3A/* : */) { return -1; }

	  max = state.posMax;

	  // [label]:   destination   'title'
	  //         ^^^ skip optional whitespace here
	  for (pos = labelEnd + 2; pos < max; pos++) {
	    code = state.src.charCodeAt(pos);
	    if (code !== 0x20 && code !== 0x0A) { break; }
	  }

	  // [label]:   destination   'title'
	  //            ^^^^^^^^^^^ parse this
	  if (!parseLinkDestination(state, pos)) { return -1; }
	  href = state.linkContent;
	  pos = state.pos;

	  // [label]:   destination   'title'
	  //                       ^^^ skipping those spaces
	  start = pos;
	  for (pos = pos + 1; pos < max; pos++) {
	    code = state.src.charCodeAt(pos);
	    if (code !== 0x20 && code !== 0x0A) { break; }
	  }

	  // [label]:   destination   'title'
	  //                          ^^^^^^^ parse this
	  if (pos < max && start !== pos && parseLinkTitle(state, pos)) {
	    title = state.linkContent;
	    pos = state.pos;
	  } else {
	    title = '';
	    pos = start;
	  }

	  // ensure that the end of the line is empty
	  while (pos < max && state.src.charCodeAt(pos) === 0x20/* space */) { pos++; }
	  if (pos < max && state.src.charCodeAt(pos) !== 0x0A) { return -1; }

	  label = normalizeReference(str.slice(1, labelEnd));
	  if (typeof env.references[label] === 'undefined') {
	    env.references[label] = { title: title, href: href };
	  }

	  return pos;
	}


	module.exports = function references(state) {
	  var tokens = state.tokens, i, l, content, pos;

	  state.env.references = state.env.references || {};

	  if (state.inlineMode) {
	    return;
	  }

	  // Scan definitions in paragraph inlines
	  for (i = 1, l = tokens.length - 1; i < l; i++) {
	    if (tokens[i].type === 'inline' &&
	        tokens[i - 1].type === 'paragraph_open' &&
	        tokens[i + 1].type === 'paragraph_close') {

	      content = tokens[i].content;
	      while (content.length) {
	        pos = parseReference(content, state.inline, state.options, state.env);
	        if (pos < 0) { break; }
	        content = content.slice(pos).trim();
	      }

	      tokens[i].content = content;
	      if (!content.length) {
	        tokens[i - 1].tight = true;
	        tokens[i + 1].tight = true;
	      }
	    }
	  }
	};


/***/ },
/* 391 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';


	var normalizeLink = __webpack_require__(392);
	var unescapeMd    = __webpack_require__(380).unescapeMd;

	/**
	 * Parse link destination
	 *
	 *   - on success it returns a string and updates state.pos;
	 *   - on failure it returns null
	 *
	 * @param  {Object} state
	 * @param  {Number} pos
	 * @api private
	 */

	module.exports = function parseLinkDestination(state, pos) {
	  var code, level, link,
	      start = pos,
	      max = state.posMax;

	  if (state.src.charCodeAt(pos) === 0x3C /* < */) {
	    pos++;
	    while (pos < max) {
	      code = state.src.charCodeAt(pos);
	      if (code === 0x0A /* \n */) { return false; }
	      if (code === 0x3E /* > */) {
	        link = normalizeLink(unescapeMd(state.src.slice(start + 1, pos)));
	        if (!state.parser.validateLink(link)) { return false; }
	        state.pos = pos + 1;
	        state.linkContent = link;
	        return true;
	      }
	      if (code === 0x5C /* \ */ && pos + 1 < max) {
	        pos += 2;
	        continue;
	      }

	      pos++;
	    }

	    // no closing '>'
	    return false;
	  }

	  // this should be ... } else { ... branch

	  level = 0;
	  while (pos < max) {
	    code = state.src.charCodeAt(pos);

	    if (code === 0x20) { break; }

	    if (code > 0x08 && code < 0x0e) { break; }

	    if (code === 0x5C /* \ */ && pos + 1 < max) {
	      pos += 2;
	      continue;
	    }

	    if (code === 0x28 /* ( */) {
	      level++;
	      if (level > 1) { break; }
	    }

	    if (code === 0x29 /* ) */) {
	      level--;
	      if (level < 0) { break; }
	    }

	    pos++;
	  }

	  if (start === pos) { return false; }

	  link = unescapeMd(state.src.slice(start, pos));
	  if (!state.parser.validateLink(link)) { return false; }

	  state.linkContent = link;
	  state.pos = pos;
	  return true;
	};


/***/ },
/* 392 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var replaceEntities = __webpack_require__(380).replaceEntities;

	module.exports = function normalizeLink(url) {
	  var normalized = replaceEntities(url);
	  // We shouldn't care about the result of malformed URIs,
	  // and should not throw an exception.
	  try {
	    normalized = decodeURI(normalized);
	  } catch (err) {}
	  return encodeURI(normalized);
	};


/***/ },
/* 393 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';


	var unescapeMd = __webpack_require__(380).unescapeMd;

	/**
	 * Parse link title
	 *
	 *   - on success it returns a string and updates state.pos;
	 *   - on failure it returns null
	 *
	 * @param  {Object} state
	 * @param  {Number} pos
	 * @api private
	 */

	module.exports = function parseLinkTitle(state, pos) {
	  var code,
	      start = pos,
	      max = state.posMax,
	      marker = state.src.charCodeAt(pos);

	  if (marker !== 0x22 /* " */ && marker !== 0x27 /* ' */ && marker !== 0x28 /* ( */) { return false; }

	  pos++;

	  // if opening marker is "(", switch it to closing marker ")"
	  if (marker === 0x28) { marker = 0x29; }

	  while (pos < max) {
	    code = state.src.charCodeAt(pos);
	    if (code === marker) {
	      state.pos = pos + 1;
	      state.linkContent = unescapeMd(state.src.slice(start + 1, pos));
	      return true;
	    }
	    if (code === 0x5C /* \ */ && pos + 1 < max) {
	      pos += 2;
	      continue;
	    }

	    pos++;
	  }

	  return false;
	};


/***/ },
/* 394 */
/***/ function(module, exports) {

	'use strict';

	module.exports = function normalizeReference(str) {
	  // use .toUpperCase() instead of .toLowerCase()
	  // here to avoid a conflict with Object.prototype
	  // members (most notably, `__proto__`)
	  return str.trim().replace(/\s+/g, ' ').toUpperCase();
	};


/***/ },
/* 395 */
/***/ function(module, exports) {

	'use strict';

	module.exports = function inline(state) {
	  var tokens = state.tokens, tok, i, l;

	  // Parse inlines
	  for (i = 0, l = tokens.length; i < l; i++) {
	    tok = tokens[i];
	    if (tok.type === 'inline') {
	      state.inline.parse(tok.content, state.options, state.env, tok.children);
	    }
	  }
	};


/***/ },
/* 396 */
/***/ function(module, exports) {

	'use strict';


	module.exports = function footnote_block(state) {
	  var i, l, j, t, lastParagraph, list, tokens, current, currentLabel,
	      level = 0,
	      insideRef = false,
	      refTokens = {};

	  if (!state.env.footnotes) { return; }

	  state.tokens = state.tokens.filter(function(tok) {
	    if (tok.type === 'footnote_reference_open') {
	      insideRef = true;
	      current = [];
	      currentLabel = tok.label;
	      return false;
	    }
	    if (tok.type === 'footnote_reference_close') {
	      insideRef = false;
	      // prepend ':' to avoid conflict with Object.prototype members
	      refTokens[':' + currentLabel] = current;
	      return false;
	    }
	    if (insideRef) { current.push(tok); }
	    return !insideRef;
	  });

	  if (!state.env.footnotes.list) { return; }
	  list = state.env.footnotes.list;

	  state.tokens.push({
	    type: 'footnote_block_open',
	    level: level++
	  });
	  for (i = 0, l = list.length; i < l; i++) {
	    state.tokens.push({
	      type: 'footnote_open',
	      id: i,
	      level: level++
	    });

	    if (list[i].tokens) {
	      tokens = [];
	      tokens.push({
	        type: 'paragraph_open',
	        tight: false,
	        level: level++
	      });
	      tokens.push({
	        type: 'inline',
	        content: '',
	        level: level,
	        children: list[i].tokens
	      });
	      tokens.push({
	        type: 'paragraph_close',
	        tight: false,
	        level: --level
	      });
	    } else if (list[i].label) {
	      tokens = refTokens[':' + list[i].label];
	    }

	    state.tokens = state.tokens.concat(tokens);
	    if (state.tokens[state.tokens.length - 1].type === 'paragraph_close') {
	      lastParagraph = state.tokens.pop();
	    } else {
	      lastParagraph = null;
	    }

	    t = list[i].count > 0 ? list[i].count : 1;
	    for (j = 0; j < t; j++) {
	      state.tokens.push({
	        type: 'footnote_anchor',
	        id: i,
	        subId: j,
	        level: level
	      });
	    }

	    if (lastParagraph) {
	      state.tokens.push(lastParagraph);
	    }

	    state.tokens.push({
	      type: 'footnote_close',
	      level: --level
	    });
	  }
	  state.tokens.push({
	    type: 'footnote_block_close',
	    level: --level
	  });
	};


/***/ },
/* 397 */
/***/ function(module, exports) {

	// Enclose abbreviations in <abbr> tags
	//
	'use strict';


	var PUNCT_CHARS = ' \n()[]\'".,!?-';


	// from Google closure library
	// http://closure-library.googlecode.com/git-history/docs/local_closure_goog_string_string.js.source.html#line1021
	function regEscape(s) {
	  return s.replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, '\\$1');
	}


	module.exports = function abbr2(state) {
	  var i, j, l, tokens, token, text, nodes, pos, level, reg, m, regText,
	      blockTokens = state.tokens;

	  if (!state.env.abbreviations) { return; }
	  if (!state.env.abbrRegExp) {
	    regText = '(^|[' + PUNCT_CHARS.split('').map(regEscape).join('') + '])'
	            + '(' + Object.keys(state.env.abbreviations).map(function (x) {
	                      return x.substr(1);
	                    }).sort(function (a, b) {
	                      return b.length - a.length;
	                    }).map(regEscape).join('|') + ')'
	            + '($|[' + PUNCT_CHARS.split('').map(regEscape).join('') + '])';
	    state.env.abbrRegExp = new RegExp(regText, 'g');
	  }
	  reg = state.env.abbrRegExp;

	  for (j = 0, l = blockTokens.length; j < l; j++) {
	    if (blockTokens[j].type !== 'inline') { continue; }
	    tokens = blockTokens[j].children;

	    // We scan from the end, to keep position when new tags added.
	    for (i = tokens.length - 1; i >= 0; i--) {
	      token = tokens[i];
	      if (token.type !== 'text') { continue; }

	      pos = 0;
	      text = token.content;
	      reg.lastIndex = 0;
	      level = token.level;
	      nodes = [];

	      while ((m = reg.exec(text))) {
	        if (reg.lastIndex > pos) {
	          nodes.push({
	            type: 'text',
	            content: text.slice(pos, m.index + m[1].length),
	            level: level
	          });
	        }

	        nodes.push({
	          type: 'abbr_open',
	          title: state.env.abbreviations[':' + m[2]],
	          level: level++
	        });
	        nodes.push({
	          type: 'text',
	          content: m[2],
	          level: level
	        });
	        nodes.push({
	          type: 'abbr_close',
	          level: --level
	        });
	        pos = reg.lastIndex - m[3].length;
	      }

	      if (!nodes.length) { continue; }

	      if (pos < text.length) {
	        nodes.push({
	          type: 'text',
	          content: text.slice(pos),
	          level: level
	        });
	      }

	      // replace current node
	      blockTokens[j].children = tokens = [].concat(tokens.slice(0, i), nodes, tokens.slice(i + 1));
	    }
	  }
	};


/***/ },
/* 398 */
/***/ function(module, exports) {

	// Simple typographical replacements
	//
	'use strict';

	// TODO:
	// - fractionals 1/2, 1/4, 3/4 -> ½, ¼, ¾
	// - miltiplication 2 x 4 -> 2 × 4

	var RARE_RE = /\+-|\.\.|\?\?\?\?|!!!!|,,|--/;

	var SCOPED_ABBR_RE = /\((c|tm|r|p)\)/ig;
	var SCOPED_ABBR = {
	  'c': '©',
	  'r': '®',
	  'p': '§',
	  'tm': '™'
	};

	function replaceScopedAbbr(str) {
	  if (str.indexOf('(') < 0) { return str; }

	  return str.replace(SCOPED_ABBR_RE, function(match, name) {
	    return SCOPED_ABBR[name.toLowerCase()];
	  });
	}


	module.exports = function replace(state) {
	  var i, token, text, inlineTokens, blkIdx;

	  if (!state.options.typographer) { return; }

	  for (blkIdx = state.tokens.length - 1; blkIdx >= 0; blkIdx--) {

	    if (state.tokens[blkIdx].type !== 'inline') { continue; }

	    inlineTokens = state.tokens[blkIdx].children;

	    for (i = inlineTokens.length - 1; i >= 0; i--) {
	      token = inlineTokens[i];
	      if (token.type === 'text') {
	        text = token.content;

	        text = replaceScopedAbbr(text);

	        if (RARE_RE.test(text)) {
	          text = text
	            .replace(/\+-/g, '±')
	            // .., ..., ....... -> …
	            // but ?..... & !..... -> ?.. & !..
	            .replace(/\.{2,}/g, '…').replace(/([?!])…/g, '$1..')
	            .replace(/([?!]){4,}/g, '$1$1$1').replace(/,{2,}/g, ',')
	            // em-dash
	            .replace(/(^|[^-])---([^-]|$)/mg, '$1\u2014$2')
	            // en-dash
	            .replace(/(^|\s)--(\s|$)/mg, '$1\u2013$2')
	            .replace(/(^|[^-\s])--([^-\s]|$)/mg, '$1\u2013$2');
	        }

	        token.content = text;
	      }
	    }
	  }
	};


/***/ },
/* 399 */
/***/ function(module, exports) {

	// Convert straight quotation marks to typographic ones
	//
	'use strict';


	var QUOTE_TEST_RE = /['"]/;
	var QUOTE_RE = /['"]/g;
	var PUNCT_RE = /[-\s()\[\]]/;
	var APOSTROPHE = '’';

	// This function returns true if the character at `pos`
	// could be inside a word.
	function isLetter(str, pos) {
	  if (pos < 0 || pos >= str.length) { return false; }
	  return !PUNCT_RE.test(str[pos]);
	}


	function replaceAt(str, index, ch) {
	  return str.substr(0, index) + ch + str.substr(index + 1);
	}


	module.exports = function smartquotes(state) {
	  /*eslint max-depth:0*/
	  var i, token, text, t, pos, max, thisLevel, lastSpace, nextSpace, item,
	      canOpen, canClose, j, isSingle, blkIdx, tokens,
	      stack;

	  if (!state.options.typographer) { return; }

	  stack = [];

	  for (blkIdx = state.tokens.length - 1; blkIdx >= 0; blkIdx--) {

	    if (state.tokens[blkIdx].type !== 'inline') { continue; }

	    tokens = state.tokens[blkIdx].children;
	    stack.length = 0;

	    for (i = 0; i < tokens.length; i++) {
	      token = tokens[i];

	      if (token.type !== 'text' || QUOTE_TEST_RE.test(token.text)) { continue; }

	      thisLevel = tokens[i].level;

	      for (j = stack.length - 1; j >= 0; j--) {
	        if (stack[j].level <= thisLevel) { break; }
	      }
	      stack.length = j + 1;

	      text = token.content;
	      pos = 0;
	      max = text.length;

	      /*eslint no-labels:0,block-scoped-var:0*/
	      OUTER:
	      while (pos < max) {
	        QUOTE_RE.lastIndex = pos;
	        t = QUOTE_RE.exec(text);
	        if (!t) { break; }

	        lastSpace = !isLetter(text, t.index - 1);
	        pos = t.index + 1;
	        isSingle = (t[0] === "'");
	        nextSpace = !isLetter(text, pos);

	        if (!nextSpace && !lastSpace) {
	          // middle of word
	          if (isSingle) {
	            token.content = replaceAt(token.content, t.index, APOSTROPHE);
	          }
	          continue;
	        }

	        canOpen = !nextSpace;
	        canClose = !lastSpace;

	        if (canClose) {
	          // this could be a closing quote, rewind the stack to get a match
	          for (j = stack.length - 1; j >= 0; j--) {
	            item = stack[j];
	            if (stack[j].level < thisLevel) { break; }
	            if (item.single === isSingle && stack[j].level === thisLevel) {
	              item = stack[j];
	              if (isSingle) {
	                tokens[item.token].content = replaceAt(tokens[item.token].content, item.pos, state.options.quotes[2]);
	                token.content = replaceAt(token.content, t.index, state.options.quotes[3]);
	              } else {
	                tokens[item.token].content = replaceAt(tokens[item.token].content, item.pos, state.options.quotes[0]);
	                token.content = replaceAt(token.content, t.index, state.options.quotes[1]);
	              }
	              stack.length = j;
	              continue OUTER;
	            }
	          }
	        }

	        if (canOpen) {
	          stack.push({
	            token: i,
	            pos: t.index,
	            single: isSingle,
	            level: thisLevel
	          });
	        } else if (canClose && isSingle) {
	          token.content = replaceAt(token.content, t.index, APOSTROPHE);
	        }
	      }
	    }
	  }
	};


/***/ },
/* 400 */
/***/ function(module, exports, __webpack_require__) {

	// Replace link-like texts with link nodes.
	//
	// Currently restricted by `inline.validateLink()` to http/https/ftp
	//
	'use strict';


	var Autolinker = __webpack_require__(401);


	var LINK_SCAN_RE = /www|@|\:\/\//;


	function isLinkOpen(str) {
	  return /^<a[>\s]/i.test(str);
	}
	function isLinkClose(str) {
	  return /^<\/a\s*>/i.test(str);
	}

	// Stupid fabric to avoid singletons, for thread safety.
	// Required for engines like Nashorn.
	//
	function createLinkifier() {
	  var links = [];
	  var autolinker = new Autolinker({
	    stripPrefix: false,
	    url: true,
	    email: true,
	    twitter: false,
	    replaceFn: function (linker, match) {
	      // Only collect matched strings but don't change anything.
	      switch (match.getType()) {
	        /*eslint default-case:0*/
	        case 'url':
	          links.push({
	            text: match.matchedText,
	            url: match.getUrl()
	          });
	          break;
	        case 'email':
	          links.push({
	            text: match.matchedText,
	            // normalize email protocol
	            url: 'mailto:' + match.getEmail().replace(/^mailto:/i, '')
	          });
	          break;
	      }
	      return false;
	    }
	  });

	  return {
	    links: links,
	    autolinker: autolinker
	  };
	}


	module.exports = function linkify(state) {
	  var i, j, l, tokens, token, text, nodes, ln, pos, level, htmlLinkLevel,
	      blockTokens = state.tokens,
	      linkifier = null, links, autolinker;

	  if (!state.options.linkify) { return; }

	  for (j = 0, l = blockTokens.length; j < l; j++) {
	    if (blockTokens[j].type !== 'inline') { continue; }
	    tokens = blockTokens[j].children;

	    htmlLinkLevel = 0;

	    // We scan from the end, to keep position when new tags added.
	    // Use reversed logic in links start/end match
	    for (i = tokens.length - 1; i >= 0; i--) {
	      token = tokens[i];

	      // Skip content of markdown links
	      if (token.type === 'link_close') {
	        i--;
	        while (tokens[i].level !== token.level && tokens[i].type !== 'link_open') {
	          i--;
	        }
	        continue;
	      }

	      // Skip content of html tag links
	      if (token.type === 'htmltag') {
	        if (isLinkOpen(token.content) && htmlLinkLevel > 0) {
	          htmlLinkLevel--;
	        }
	        if (isLinkClose(token.content)) {
	          htmlLinkLevel++;
	        }
	      }
	      if (htmlLinkLevel > 0) { continue; }

	      if (token.type === 'text' && LINK_SCAN_RE.test(token.content)) {

	        // Init linkifier in lazy manner, only if required.
	        if (!linkifier) {
	          linkifier = createLinkifier();
	          links = linkifier.links;
	          autolinker = linkifier.autolinker;
	        }

	        text = token.content;
	        links.length = 0;
	        autolinker.link(text);

	        if (!links.length) { continue; }

	        // Now split string to nodes
	        nodes = [];
	        level = token.level;

	        for (ln = 0; ln < links.length; ln++) {

	          if (!state.inline.validateLink(links[ln].url)) { continue; }

	          pos = text.indexOf(links[ln].text);

	          if (pos) {
	            level = level;
	            nodes.push({
	              type: 'text',
	              content: text.slice(0, pos),
	              level: level
	            });
	          }
	          nodes.push({
	            type: 'link_open',
	            href: links[ln].url,
	            title: '',
	            level: level++
	          });
	          nodes.push({
	            type: 'text',
	            content: links[ln].text,
	            level: level
	          });
	          nodes.push({
	            type: 'link_close',
	            level: --level
	          });
	          text = text.slice(pos + links[ln].text.length);
	        }
	        if (text.length) {
	          nodes.push({
	            type: 'text',
	            content: text,
	            level: level
	          });
	        }

	        // replace current node
	        blockTokens[j].children = tokens = [].concat(tokens.slice(0, i), nodes, tokens.slice(i + 1));
	      }
	    }
	  }
	};


/***/ },
/* 401 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (root, factory) {
	  if (true) {
	    // AMD. Register as an anonymous module unless amdModuleId is set
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
	      return (root['Autolinker'] = factory());
	    }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  } else if (typeof exports === 'object') {
	    // Node. Does not work with strict CommonJS, but
	    // only CommonJS-like environments that support module.exports,
	    // like Node.
	    module.exports = factory();
	  } else {
	    root['Autolinker'] = factory();
	  }
	}(this, function () {

	/*!
	 * Autolinker.js
	 * 0.15.3
	 *
	 * Copyright(c) 2015 Gregory Jacobs <greg@greg-jacobs.com>
	 * MIT Licensed. http://www.opensource.org/licenses/mit-license.php
	 *
	 * https://github.com/gregjacobs/Autolinker.js
	 */
	/**
	 * @class Autolinker
	 * @extends Object
	 * 
	 * Utility class used to process a given string of text, and wrap the URLs, email addresses, and Twitter handles in 
	 * the appropriate anchor (&lt;a&gt;) tags to turn them into links.
	 * 
	 * Any of the configuration options may be provided in an Object (map) provided to the Autolinker constructor, which
	 * will configure how the {@link #link link()} method will process the links.
	 * 
	 * For example:
	 * 
	 *     var autolinker = new Autolinker( {
	 *         newWindow : false,
	 *         truncate  : 30
	 *     } );
	 *     
	 *     var html = autolinker.link( "Joe went to www.yahoo.com" );
	 *     // produces: 'Joe went to <a href="http://www.yahoo.com">yahoo.com</a>'
	 * 
	 * 
	 * The {@link #static-link static link()} method may also be used to inline options into a single call, which may
	 * be more convenient for one-off uses. For example:
	 * 
	 *     var html = Autolinker.link( "Joe went to www.yahoo.com", {
	 *         newWindow : false,
	 *         truncate  : 30
	 *     } );
	 *     // produces: 'Joe went to <a href="http://www.yahoo.com">yahoo.com</a>'
	 * 
	 * 
	 * ## Custom Replacements of Links
	 * 
	 * If the configuration options do not provide enough flexibility, a {@link #replaceFn} may be provided to fully customize
	 * the output of Autolinker. This function is called once for each URL/Email/Twitter handle match that is encountered.
	 * 
	 * For example:
	 * 
	 *     var input = "...";  // string with URLs, Email Addresses, and Twitter Handles
	 *     
	 *     var linkedText = Autolinker.link( input, {
	 *         replaceFn : function( autolinker, match ) {
	 *             console.log( "href = ", match.getAnchorHref() );
	 *             console.log( "text = ", match.getAnchorText() );
	 *         
	 *             switch( match.getType() ) {
	 *                 case 'url' : 
	 *                     console.log( "url: ", match.getUrl() );
	 *                     
	 *                     if( match.getUrl().indexOf( 'mysite.com' ) === -1 ) {
	 *                         var tag = autolinker.getTagBuilder().build( match );  // returns an `Autolinker.HtmlTag` instance, which provides mutator methods for easy changes
	 *                         tag.setAttr( 'rel', 'nofollow' );
	 *                         tag.addClass( 'external-link' );
	 *                         
	 *                         return tag;
	 *                         
	 *                     } else {
	 *                         return true;  // let Autolinker perform its normal anchor tag replacement
	 *                     }
	 *                     
	 *                 case 'email' :
	 *                     var email = match.getEmail();
	 *                     console.log( "email: ", email );
	 *                     
	 *                     if( email === "my@own.address" ) {
	 *                         return false;  // don't auto-link this particular email address; leave as-is
	 *                     } else {
	 *                         return;  // no return value will have Autolinker perform its normal anchor tag replacement (same as returning `true`)
	 *                     }
	 *                 
	 *                 case 'twitter' :
	 *                     var twitterHandle = match.getTwitterHandle();
	 *                     console.log( twitterHandle );
	 *                     
	 *                     return '<a href="http://newplace.to.link.twitter.handles.to/">' + twitterHandle + '</a>';
	 *             }
	 *         }
	 *     } );
	 * 
	 * 
	 * The function may return the following values:
	 * 
	 * - `true` (Boolean): Allow Autolinker to replace the match as it normally would.
	 * - `false` (Boolean): Do not replace the current match at all - leave as-is.
	 * - Any String: If a string is returned from the function, the string will be used directly as the replacement HTML for
	 *   the match.
	 * - An {@link Autolinker.HtmlTag} instance, which can be used to build/modify an HTML tag before writing out its HTML text.
	 * 
	 * @constructor
	 * @param {Object} [config] The configuration options for the Autolinker instance, specified in an Object (map).
	 */
	var Autolinker = function( cfg ) {
		Autolinker.Util.assign( this, cfg );  // assign the properties of `cfg` onto the Autolinker instance. Prototype properties will be used for missing configs.
	};


	Autolinker.prototype = {
		constructor : Autolinker,  // fix constructor property
		
		/**
		 * @cfg {Boolean} urls
		 * 
		 * `true` if miscellaneous URLs should be automatically linked, `false` if they should not be.
		 */
		urls : true,
		
		/**
		 * @cfg {Boolean} email
		 * 
		 * `true` if email addresses should be automatically linked, `false` if they should not be.
		 */
		email : true,
		
		/**
		 * @cfg {Boolean} twitter
		 * 
		 * `true` if Twitter handles ("@example") should be automatically linked, `false` if they should not be.
		 */
		twitter : true,
		
		/**
		 * @cfg {Boolean} newWindow
		 * 
		 * `true` if the links should open in a new window, `false` otherwise.
		 */
		newWindow : true,
		
		/**
		 * @cfg {Boolean} stripPrefix
		 * 
		 * `true` if 'http://' or 'https://' and/or the 'www.' should be stripped from the beginning of URL links' text, 
		 * `false` otherwise.
		 */
		stripPrefix : true,
		
		/**
		 * @cfg {Number} truncate
		 * 
		 * A number for how many characters long URLs/emails/twitter handles should be truncated to inside the text of 
		 * a link. If the URL/email/twitter is over this number of characters, it will be truncated to this length by 
		 * adding a two period ellipsis ('..') to the end of the string.
		 * 
		 * For example: A url like 'http://www.yahoo.com/some/long/path/to/a/file' truncated to 25 characters might look
		 * something like this: 'yahoo.com/some/long/pat..'
		 */
		truncate : undefined,
		
		/**
		 * @cfg {String} className
		 * 
		 * A CSS class name to add to the generated links. This class will be added to all links, as well as this class
		 * plus url/email/twitter suffixes for styling url/email/twitter links differently.
		 * 
		 * For example, if this config is provided as "myLink", then:
		 * 
		 * - URL links will have the CSS classes: "myLink myLink-url"
		 * - Email links will have the CSS classes: "myLink myLink-email", and
		 * - Twitter links will have the CSS classes: "myLink myLink-twitter"
		 */
		className : "",
		
		/**
		 * @cfg {Function} replaceFn
		 * 
		 * A function to individually process each URL/Email/Twitter match found in the input string.
		 * 
		 * See the class's description for usage.
		 * 
		 * This function is called with the following parameters:
		 * 
		 * @cfg {Autolinker} replaceFn.autolinker The Autolinker instance, which may be used to retrieve child objects from (such
		 *   as the instance's {@link #getTagBuilder tag builder}).
		 * @cfg {Autolinker.match.Match} replaceFn.match The Match instance which can be used to retrieve information about the
		 *   {@link Autolinker.match.Url URL}/{@link Autolinker.match.Email email}/{@link Autolinker.match.Twitter Twitter}
		 *   match that the `replaceFn` is currently processing.
		 */
		
		
		/**
		 * @private
		 * @property {Autolinker.htmlParser.HtmlParser} htmlParser
		 * 
		 * The HtmlParser instance used to skip over HTML tags, while finding text nodes to process. This is lazily instantiated
		 * in the {@link #getHtmlParser} method.
		 */
		htmlParser : undefined,
		
		/**
		 * @private
		 * @property {Autolinker.matchParser.MatchParser} matchParser
		 * 
		 * The MatchParser instance used to find URL/email/Twitter matches in the text nodes of an input string passed to
		 * {@link #link}. This is lazily instantiated in the {@link #getMatchParser} method.
		 */
		matchParser : undefined,
		
		/**
		 * @private
		 * @property {Autolinker.AnchorTagBuilder} tagBuilder
		 * 
		 * The AnchorTagBuilder instance used to build the URL/email/Twitter replacement anchor tags. This is lazily instantiated
		 * in the {@link #getTagBuilder} method.
		 */
		tagBuilder : undefined,
		
		
		/**
		 * Automatically links URLs, email addresses, and Twitter handles found in the given chunk of HTML. 
		 * Does not link URLs found within HTML tags.
		 * 
		 * For instance, if given the text: `You should go to http://www.yahoo.com`, then the result
		 * will be `You should go to &lt;a href="http://www.yahoo.com"&gt;http://www.yahoo.com&lt;/a&gt;`
		 * 
		 * This method finds the text around any HTML elements in the input `textOrHtml`, which will be the text that is processed.
		 * Any original HTML elements will be left as-is, as well as the text that is already wrapped in anchor (&lt;a&gt;) tags.
		 * 
		 * @param {String} textOrHtml The HTML or text to link URLs, email addresses, and Twitter handles within (depending on if
		 *   the {@link #urls}, {@link #email}, and {@link #twitter} options are enabled).
		 * @return {String} The HTML, with URLs/emails/Twitter handles automatically linked.
		 */
		link : function( textOrHtml ) {
			var htmlParser = this.getHtmlParser(),
			    htmlNodes = htmlParser.parse( textOrHtml ),
			    anchorTagStackCount = 0,  // used to only process text around anchor tags, and any inner text/html they may have
			    resultHtml = [];
			
			for( var i = 0, len = htmlNodes.length; i < len; i++ ) {
				var node = htmlNodes[ i ],
				    nodeType = node.getType(),
				    nodeText = node.getText();
				
				if( nodeType === 'element' ) {
					// Process HTML nodes in the input `textOrHtml`
					if( node.getTagName() === 'a' ) {
						if( !node.isClosing() ) {  // it's the start <a> tag
							anchorTagStackCount++;
						} else {   // it's the end </a> tag
							anchorTagStackCount = Math.max( anchorTagStackCount - 1, 0 );  // attempt to handle extraneous </a> tags by making sure the stack count never goes below 0
						}
					}
					resultHtml.push( nodeText );  // now add the text of the tag itself verbatim
					
				} else if( nodeType === 'entity' ) {
					resultHtml.push( nodeText );  // append HTML entity nodes (such as '&nbsp;') verbatim
					
				} else {
					// Process text nodes in the input `textOrHtml`
					if( anchorTagStackCount === 0 ) {
						// If we're not within an <a> tag, process the text node to linkify
						var linkifiedStr = this.linkifyStr( nodeText );
						resultHtml.push( linkifiedStr );
						
					} else {
						// `text` is within an <a> tag, simply append the text - we do not want to autolink anything 
						// already within an <a>...</a> tag
						resultHtml.push( nodeText );
					}
				}
			}
			
			return resultHtml.join( "" );
		},
		
		
		/**
		 * Process the text that lies in between HTML tags, performing the anchor tag replacements for matched 
		 * URLs/emails/Twitter handles, and returns the string with the replacements made. 
		 * 
		 * This method does the actual wrapping of URLs/emails/Twitter handles with anchor tags.
		 * 
		 * @private
		 * @param {String} str The string of text to auto-link.
		 * @return {String} The text with anchor tags auto-filled.
		 */
		linkifyStr : function( str ) {
			return this.getMatchParser().replace( str, this.createMatchReturnVal, this );
		},
		
		
		/**
		 * Creates the return string value for a given match in the input string, for the {@link #processTextNode} method.
		 * 
		 * This method handles the {@link #replaceFn}, if one was provided.
		 * 
		 * @private
		 * @param {Autolinker.match.Match} match The Match object that represents the match.
		 * @return {String} The string that the `match` should be replaced with. This is usually the anchor tag string, but
		 *   may be the `matchStr` itself if the match is not to be replaced.
		 */
		createMatchReturnVal : function( match ) {
			// Handle a custom `replaceFn` being provided
			var replaceFnResult;
			if( this.replaceFn ) {
				replaceFnResult = this.replaceFn.call( this, this, match );  // Autolinker instance is the context, and the first arg
			}
			
			if( typeof replaceFnResult === 'string' ) {
				return replaceFnResult;  // `replaceFn` returned a string, use that
				
			} else if( replaceFnResult === false ) {
				return match.getMatchedText();  // no replacement for the match
				
			} else if( replaceFnResult instanceof Autolinker.HtmlTag ) {
				return replaceFnResult.toString();
			
			} else {  // replaceFnResult === true, or no/unknown return value from function
				// Perform Autolinker's default anchor tag generation
				var tagBuilder = this.getTagBuilder(),
				    anchorTag = tagBuilder.build( match );  // returns an Autolinker.HtmlTag instance
				
				return anchorTag.toString();
			}
		},
		
		
		/**
		 * Lazily instantiates and returns the {@link #htmlParser} instance for this Autolinker instance.
		 * 
		 * @protected
		 * @return {Autolinker.htmlParser.HtmlParser}
		 */
		getHtmlParser : function() {
			var htmlParser = this.htmlParser;
			
			if( !htmlParser ) {
				htmlParser = this.htmlParser = new Autolinker.htmlParser.HtmlParser();
			}
			
			return htmlParser;
		},
		
		
		/**
		 * Lazily instantiates and returns the {@link #matchParser} instance for this Autolinker instance.
		 * 
		 * @protected
		 * @return {Autolinker.matchParser.MatchParser}
		 */
		getMatchParser : function() {
			var matchParser = this.matchParser;
			
			if( !matchParser ) {
				matchParser = this.matchParser = new Autolinker.matchParser.MatchParser( {
					urls : this.urls,
					email : this.email,
					twitter : this.twitter,
					stripPrefix : this.stripPrefix
				} );
			}
			
			return matchParser;
		},
		
		
		/**
		 * Returns the {@link #tagBuilder} instance for this Autolinker instance, lazily instantiating it
		 * if it does not yet exist.
		 * 
		 * This method may be used in a {@link #replaceFn} to generate the {@link Autolinker.HtmlTag HtmlTag} instance that 
		 * Autolinker would normally generate, and then allow for modifications before returning it. For example:
		 * 
		 *     var html = Autolinker.link( "Test google.com", {
		 *         replaceFn : function( autolinker, match ) {
		 *             var tag = autolinker.getTagBuilder().build( match );  // returns an {@link Autolinker.HtmlTag} instance
		 *             tag.setAttr( 'rel', 'nofollow' );
		 *             
		 *             return tag;
		 *         }
		 *     } );
		 *     
		 *     // generated html:
		 *     //   Test <a href="http://google.com" target="_blank" rel="nofollow">google.com</a>
		 * 
		 * @return {Autolinker.AnchorTagBuilder}
		 */
		getTagBuilder : function() {
			var tagBuilder = this.tagBuilder;
			
			if( !tagBuilder ) {
				tagBuilder = this.tagBuilder = new Autolinker.AnchorTagBuilder( {
					newWindow   : this.newWindow,
					truncate    : this.truncate,
					className   : this.className
				} );
			}
			
			return tagBuilder;
		}

	};


	/**
	 * Automatically links URLs, email addresses, and Twitter handles found in the given chunk of HTML. 
	 * Does not link URLs found within HTML tags.
	 * 
	 * For instance, if given the text: `You should go to http://www.yahoo.com`, then the result
	 * will be `You should go to &lt;a href="http://www.yahoo.com"&gt;http://www.yahoo.com&lt;/a&gt;`
	 * 
	 * Example:
	 * 
	 *     var linkedText = Autolinker.link( "Go to google.com", { newWindow: false } );
	 *     // Produces: "Go to <a href="http://google.com">google.com</a>"
	 * 
	 * @static
	 * @param {String} textOrHtml The HTML or text to find URLs, email addresses, and Twitter handles within (depending on if
	 *   the {@link #urls}, {@link #email}, and {@link #twitter} options are enabled).
	 * @param {Object} [options] Any of the configuration options for the Autolinker class, specified in an Object (map).
	 *   See the class description for an example call.
	 * @return {String} The HTML text, with URLs automatically linked
	 */
	Autolinker.link = function( textOrHtml, options ) {
		var autolinker = new Autolinker( options );
		return autolinker.link( textOrHtml );
	};


	// Autolinker Namespaces
	Autolinker.match = {};
	Autolinker.htmlParser = {};
	Autolinker.matchParser = {};
	/*global Autolinker */
	/*jshint eqnull:true, boss:true */
	/**
	 * @class Autolinker.Util
	 * @singleton
	 * 
	 * A few utility methods for Autolinker.
	 */
	Autolinker.Util = {
		
		/**
		 * @property {Function} abstractMethod
		 * 
		 * A function object which represents an abstract method.
		 */
		abstractMethod : function() { throw "abstract"; },
		
		
		/**
		 * Assigns (shallow copies) the properties of `src` onto `dest`.
		 * 
		 * @param {Object} dest The destination object.
		 * @param {Object} src The source object.
		 * @return {Object} The destination object (`dest`)
		 */
		assign : function( dest, src ) {
			for( var prop in src ) {
				if( src.hasOwnProperty( prop ) ) {
					dest[ prop ] = src[ prop ];
				}
			}
			
			return dest;
		},
		
		
		/**
		 * Extends `superclass` to create a new subclass, adding the `protoProps` to the new subclass's prototype.
		 * 
		 * @param {Function} superclass The constructor function for the superclass.
		 * @param {Object} protoProps The methods/properties to add to the subclass's prototype. This may contain the
		 *   special property `constructor`, which will be used as the new subclass's constructor function.
		 * @return {Function} The new subclass function.
		 */
		extend : function( superclass, protoProps ) {
			var superclassProto = superclass.prototype;
			
			var F = function() {};
			F.prototype = superclassProto;
			
			var subclass;
			if( protoProps.hasOwnProperty( 'constructor' ) ) {
				subclass = protoProps.constructor;
			} else {
				subclass = function() { superclassProto.constructor.apply( this, arguments ); };
			}
			
			var subclassProto = subclass.prototype = new F();  // set up prototype chain
			subclassProto.constructor = subclass;  // fix constructor property
			subclassProto.superclass = superclassProto;
			
			delete protoProps.constructor;  // don't re-assign constructor property to the prototype, since a new function may have been created (`subclass`), which is now already there
			Autolinker.Util.assign( subclassProto, protoProps );
			
			return subclass;
		},
		
		
		/**
		 * Truncates the `str` at `len - ellipsisChars.length`, and adds the `ellipsisChars` to the
		 * end of the string (by default, two periods: '..'). If the `str` length does not exceed 
		 * `len`, the string will be returned unchanged.
		 * 
		 * @param {String} str The string to truncate and add an ellipsis to.
		 * @param {Number} truncateLen The length to truncate the string at.
		 * @param {String} [ellipsisChars=..] The ellipsis character(s) to add to the end of `str`
		 *   when truncated. Defaults to '..'
		 */
		ellipsis : function( str, truncateLen, ellipsisChars ) {
			if( str.length > truncateLen ) {
				ellipsisChars = ( ellipsisChars == null ) ? '..' : ellipsisChars;
				str = str.substring( 0, truncateLen - ellipsisChars.length ) + ellipsisChars;
			}
			return str;
		},
		
		
		/**
		 * Supports `Array.prototype.indexOf()` functionality for old IE (IE8 and below).
		 * 
		 * @param {Array} arr The array to find an element of.
		 * @param {*} element The element to find in the array, and return the index of.
		 * @return {Number} The index of the `element`, or -1 if it was not found.
		 */
		indexOf : function( arr, element ) {
			if( Array.prototype.indexOf ) {
				return arr.indexOf( element );
				
			} else {
				for( var i = 0, len = arr.length; i < len; i++ ) {
					if( arr[ i ] === element ) return i;
				}
				return -1;
			}
		},
		
		
		
		/**
		 * Performs the functionality of what modern browsers do when `String.prototype.split()` is called
		 * with a regular expression that contains capturing parenthesis.
		 * 
		 * For example:
		 * 
		 *     // Modern browsers: 
		 *     "a,b,c".split( /(,)/ );  // --> [ 'a', ',', 'b', ',', 'c' ]
		 *     
		 *     // Old IE (including IE8):
		 *     "a,b,c".split( /(,)/ );  // --> [ 'a', 'b', 'c' ]
		 *     
		 * This method emulates the functionality of modern browsers for the old IE case.
		 * 
		 * @param {String} str The string to split.
		 * @param {RegExp} splitRegex The regular expression to split the input `str` on. The splitting
		 *   character(s) will be spliced into the array, as in the "modern browsers" example in the 
		 *   description of this method. 
		 *   Note #1: the supplied regular expression **must** have the 'g' flag specified.
		 *   Note #2: for simplicity's sake, the regular expression does not need 
		 *   to contain capturing parenthesis - it will be assumed that any match has them.
		 * @return {String[]} The split array of strings, with the splitting character(s) included.
		 */
		splitAndCapture : function( str, splitRegex ) {
			if( !splitRegex.global ) throw new Error( "`splitRegex` must have the 'g' flag set" );
			
			var result = [],
			    lastIdx = 0,
			    match;
			
			while( match = splitRegex.exec( str ) ) {
				result.push( str.substring( lastIdx, match.index ) );
				result.push( match[ 0 ] );  // push the splitting char(s)
				
				lastIdx = match.index + match[ 0 ].length;
			}
			result.push( str.substring( lastIdx ) );
			
			return result;
		}
		
	};
	/*global Autolinker */
	/*jshint boss:true */
	/**
	 * @class Autolinker.HtmlTag
	 * @extends Object
	 * 
	 * Represents an HTML tag, which can be used to easily build/modify HTML tags programmatically.
	 * 
	 * Autolinker uses this abstraction to create HTML tags, and then write them out as strings. You may also use
	 * this class in your code, especially within a {@link Autolinker#replaceFn replaceFn}.
	 * 
	 * ## Examples
	 * 
	 * Example instantiation:
	 * 
	 *     var tag = new Autolinker.HtmlTag( {
	 *         tagName : 'a',
	 *         attrs   : { 'href': 'http://google.com', 'class': 'external-link' },
	 *         innerHtml : 'Google'
	 *     } );
	 *     
	 *     tag.toString();  // <a href="http://google.com" class="external-link">Google</a>
	 *     
	 *     // Individual accessor methods
	 *     tag.getTagName();                 // 'a'
	 *     tag.getAttr( 'href' );            // 'http://google.com'
	 *     tag.hasClass( 'external-link' );  // true
	 * 
	 * 
	 * Using mutator methods (which may be used in combination with instantiation config properties):
	 * 
	 *     var tag = new Autolinker.HtmlTag();
	 *     tag.setTagName( 'a' );
	 *     tag.setAttr( 'href', 'http://google.com' );
	 *     tag.addClass( 'external-link' );
	 *     tag.setInnerHtml( 'Google' );
	 *     
	 *     tag.getTagName();                 // 'a'
	 *     tag.getAttr( 'href' );            // 'http://google.com'
	 *     tag.hasClass( 'external-link' );  // true
	 *     
	 *     tag.toString();  // <a href="http://google.com" class="external-link">Google</a>
	 *     
	 * 
	 * ## Example use within a {@link Autolinker#replaceFn replaceFn}
	 * 
	 *     var html = Autolinker.link( "Test google.com", {
	 *         replaceFn : function( autolinker, match ) {
	 *             var tag = autolinker.getTagBuilder().build( match );  // returns an {@link Autolinker.HtmlTag} instance, configured with the Match's href and anchor text
	 *             tag.setAttr( 'rel', 'nofollow' );
	 *             
	 *             return tag;
	 *         }
	 *     } );
	 *     
	 *     // generated html:
	 *     //   Test <a href="http://google.com" target="_blank" rel="nofollow">google.com</a>
	 *     
	 *     
	 * ## Example use with a new tag for the replacement
	 * 
	 *     var html = Autolinker.link( "Test google.com", {
	 *         replaceFn : function( autolinker, match ) {
	 *             var tag = new Autolinker.HtmlTag( {
	 *                 tagName : 'button',
	 *                 attrs   : { 'title': 'Load URL: ' + match.getAnchorHref() },
	 *                 innerHtml : 'Load URL: ' + match.getAnchorText()
	 *             } );
	 *             
	 *             return tag;
	 *         }
	 *     } );
	 *     
	 *     // generated html:
	 *     //   Test <button title="Load URL: http://google.com">Load URL: google.com</button>
	 */
	Autolinker.HtmlTag = Autolinker.Util.extend( Object, {
		
		/**
		 * @cfg {String} tagName
		 * 
		 * The tag name. Ex: 'a', 'button', etc.
		 * 
		 * Not required at instantiation time, but should be set using {@link #setTagName} before {@link #toString}
		 * is executed.
		 */
		
		/**
		 * @cfg {Object.<String, String>} attrs
		 * 
		 * An key/value Object (map) of attributes to create the tag with. The keys are the attribute names, and the
		 * values are the attribute values.
		 */
		
		/**
		 * @cfg {String} innerHtml
		 * 
		 * The inner HTML for the tag. 
		 * 
		 * Note the camel case name on `innerHtml`. Acronyms are camelCased in this utility (such as not to run into the acronym 
		 * naming inconsistency that the DOM developers created with `XMLHttpRequest`). You may alternatively use {@link #innerHTML}
		 * if you prefer, but this one is recommended.
		 */
		
		/**
		 * @cfg {String} innerHTML
		 * 
		 * Alias of {@link #innerHtml}, accepted for consistency with the browser DOM api, but prefer the camelCased version
		 * for acronym names.
		 */
		
		
		/**
		 * @protected
		 * @property {RegExp} whitespaceRegex
		 * 
		 * Regular expression used to match whitespace in a string of CSS classes.
		 */
		whitespaceRegex : /\s+/,
		
		
		/**
		 * @constructor
		 * @param {Object} [cfg] The configuration properties for this class, in an Object (map)
		 */
		constructor : function( cfg ) {
			Autolinker.Util.assign( this, cfg );
			
			this.innerHtml = this.innerHtml || this.innerHTML;  // accept either the camelCased form or the fully capitalized acronym
		},
		
		
		/**
		 * Sets the tag name that will be used to generate the tag with.
		 * 
		 * @param {String} tagName
		 * @return {Autolinker.HtmlTag} This HtmlTag instance, so that method calls may be chained.
		 */
		setTagName : function( tagName ) {
			this.tagName = tagName;
			return this;
		},
		
		
		/**
		 * Retrieves the tag name.
		 * 
		 * @return {String}
		 */
		getTagName : function() {
			return this.tagName || "";
		},
		
		
		/**
		 * Sets an attribute on the HtmlTag.
		 * 
		 * @param {String} attrName The attribute name to set.
		 * @param {String} attrValue The attribute value to set.
		 * @return {Autolinker.HtmlTag} This HtmlTag instance, so that method calls may be chained.
		 */
		setAttr : function( attrName, attrValue ) {
			var tagAttrs = this.getAttrs();
			tagAttrs[ attrName ] = attrValue;
			
			return this;
		},
		
		
		/**
		 * Retrieves an attribute from the HtmlTag. If the attribute does not exist, returns `undefined`.
		 * 
		 * @param {String} name The attribute name to retrieve.
		 * @return {String} The attribute's value, or `undefined` if it does not exist on the HtmlTag.
		 */
		getAttr : function( attrName ) {
			return this.getAttrs()[ attrName ];
		},
		
		
		/**
		 * Sets one or more attributes on the HtmlTag.
		 * 
		 * @param {Object.<String, String>} attrs A key/value Object (map) of the attributes to set.
		 * @return {Autolinker.HtmlTag} This HtmlTag instance, so that method calls may be chained.
		 */
		setAttrs : function( attrs ) {
			var tagAttrs = this.getAttrs();
			Autolinker.Util.assign( tagAttrs, attrs );
			
			return this;
		},
		
		
		/**
		 * Retrieves the attributes Object (map) for the HtmlTag.
		 * 
		 * @return {Object.<String, String>} A key/value object of the attributes for the HtmlTag.
		 */
		getAttrs : function() {
			return this.attrs || ( this.attrs = {} );
		},
		
		
		/**
		 * Sets the provided `cssClass`, overwriting any current CSS classes on the HtmlTag.
		 * 
		 * @param {String} cssClass One or more space-separated CSS classes to set (overwrite).
		 * @return {Autolinker.HtmlTag} This HtmlTag instance, so that method calls may be chained.
		 */
		setClass : function( cssClass ) {
			return this.setAttr( 'class', cssClass );
		},
		
		
		/**
		 * Convenience method to add one or more CSS classes to the HtmlTag. Will not add duplicate CSS classes.
		 * 
		 * @param {String} cssClass One or more space-separated CSS classes to add.
		 * @return {Autolinker.HtmlTag} This HtmlTag instance, so that method calls may be chained.
		 */
		addClass : function( cssClass ) {
			var classAttr = this.getClass(),
			    whitespaceRegex = this.whitespaceRegex,
			    indexOf = Autolinker.Util.indexOf,  // to support IE8 and below
			    classes = ( !classAttr ) ? [] : classAttr.split( whitespaceRegex ),
			    newClasses = cssClass.split( whitespaceRegex ),
			    newClass;
			
			while( newClass = newClasses.shift() ) {
				if( indexOf( classes, newClass ) === -1 ) {
					classes.push( newClass );
				}
			}
			
			this.getAttrs()[ 'class' ] = classes.join( " " );
			return this;
		},
		
		
		/**
		 * Convenience method to remove one or more CSS classes from the HtmlTag.
		 * 
		 * @param {String} cssClass One or more space-separated CSS classes to remove.
		 * @return {Autolinker.HtmlTag} This HtmlTag instance, so that method calls may be chained.
		 */
		removeClass : function( cssClass ) {
			var classAttr = this.getClass(),
			    whitespaceRegex = this.whitespaceRegex,
			    indexOf = Autolinker.Util.indexOf,  // to support IE8 and below
			    classes = ( !classAttr ) ? [] : classAttr.split( whitespaceRegex ),
			    removeClasses = cssClass.split( whitespaceRegex ),
			    removeClass;
			
			while( classes.length && ( removeClass = removeClasses.shift() ) ) {
				var idx = indexOf( classes, removeClass );
				if( idx !== -1 ) {
					classes.splice( idx, 1 );
				}
			}
			
			this.getAttrs()[ 'class' ] = classes.join( " " );
			return this;
		},
		
		
		/**
		 * Convenience method to retrieve the CSS class(es) for the HtmlTag, which will each be separated by spaces when
		 * there are multiple.
		 * 
		 * @return {String}
		 */
		getClass : function() {
			return this.getAttrs()[ 'class' ] || "";
		},
		
		
		/**
		 * Convenience method to check if the tag has a CSS class or not.
		 * 
		 * @param {String} cssClass The CSS class to check for.
		 * @return {Boolean} `true` if the HtmlTag has the CSS class, `false` otherwise.
		 */
		hasClass : function( cssClass ) {
			return ( ' ' + this.getClass() + ' ' ).indexOf( ' ' + cssClass + ' ' ) !== -1;
		},
		
		
		/**
		 * Sets the inner HTML for the tag.
		 * 
		 * @param {String} html The inner HTML to set.
		 * @return {Autolinker.HtmlTag} This HtmlTag instance, so that method calls may be chained.
		 */
		setInnerHtml : function( html ) {
			this.innerHtml = html;
			
			return this;
		},
		
		
		/**
		 * Retrieves the inner HTML for the tag.
		 * 
		 * @return {String}
		 */
		getInnerHtml : function() {
			return this.innerHtml || "";
		},
		
		
		/**
		 * Override of superclass method used to generate the HTML string for the tag.
		 * 
		 * @return {String}
		 */
		toString : function() {
			var tagName = this.getTagName(),
			    attrsStr = this.buildAttrsStr();
			
			attrsStr = ( attrsStr ) ? ' ' + attrsStr : '';  // prepend a space if there are actually attributes
			
			return [ '<', tagName, attrsStr, '>', this.getInnerHtml(), '</', tagName, '>' ].join( "" );
		},
		
		
		/**
		 * Support method for {@link #toString}, returns the string space-separated key="value" pairs, used to populate 
		 * the stringified HtmlTag.
		 * 
		 * @protected
		 * @return {String} Example return: `attr1="value1" attr2="value2"`
		 */
		buildAttrsStr : function() {
			if( !this.attrs ) return "";  // no `attrs` Object (map) has been set, return empty string
			
			var attrs = this.getAttrs(),
			    attrsArr = [];
			
			for( var prop in attrs ) {
				if( attrs.hasOwnProperty( prop ) ) {
					attrsArr.push( prop + '="' + attrs[ prop ] + '"' );
				}
			}
			return attrsArr.join( " " );
		}
		
	} );
	/*global Autolinker */
	/*jshint sub:true */
	/**
	 * @protected
	 * @class Autolinker.AnchorTagBuilder
	 * @extends Object
	 * 
	 * Builds anchor (&lt;a&gt;) tags for the Autolinker utility when a match is found.
	 * 
	 * Normally this class is instantiated, configured, and used internally by an {@link Autolinker} instance, but may 
	 * actually be retrieved in a {@link Autolinker#replaceFn replaceFn} to create {@link Autolinker.HtmlTag HtmlTag} instances
	 * which may be modified before returning from the {@link Autolinker#replaceFn replaceFn}. For example:
	 * 
	 *     var html = Autolinker.link( "Test google.com", {
	 *         replaceFn : function( autolinker, match ) {
	 *             var tag = autolinker.getTagBuilder().build( match );  // returns an {@link Autolinker.HtmlTag} instance
	 *             tag.setAttr( 'rel', 'nofollow' );
	 *             
	 *             return tag;
	 *         }
	 *     } );
	 *     
	 *     // generated html:
	 *     //   Test <a href="http://google.com" target="_blank" rel="nofollow">google.com</a>
	 */
	Autolinker.AnchorTagBuilder = Autolinker.Util.extend( Object, {
		
		/**
		 * @cfg {Boolean} newWindow
		 * @inheritdoc Autolinker#newWindow
		 */
		
		/**
		 * @cfg {Number} truncate
		 * @inheritdoc Autolinker#truncate
		 */
		
		/**
		 * @cfg {String} className
		 * @inheritdoc Autolinker#className
		 */
		
		
		/**
		 * @constructor
		 * @param {Object} [cfg] The configuration options for the AnchorTagBuilder instance, specified in an Object (map).
		 */
		constructor : function( cfg ) {
			Autolinker.Util.assign( this, cfg );
		},
		
		
		/**
		 * Generates the actual anchor (&lt;a&gt;) tag to use in place of the matched URL/email/Twitter text,
		 * via its `match` object.
		 * 
		 * @param {Autolinker.match.Match} match The Match instance to generate an anchor tag from.
		 * @return {Autolinker.HtmlTag} The HtmlTag instance for the anchor tag.
		 */
		build : function( match ) {
			var tag = new Autolinker.HtmlTag( {
				tagName   : 'a',
				attrs     : this.createAttrs( match.getType(), match.getAnchorHref() ),
				innerHtml : this.processAnchorText( match.getAnchorText() )
			} );
			
			return tag;
		},
		
		
		/**
		 * Creates the Object (map) of the HTML attributes for the anchor (&lt;a&gt;) tag being generated.
		 * 
		 * @protected
		 * @param {"url"/"email"/"twitter"} matchType The type of match that an anchor tag is being generated for.
		 * @param {String} href The href for the anchor tag.
		 * @return {Object} A key/value Object (map) of the anchor tag's attributes. 
		 */
		createAttrs : function( matchType, anchorHref ) {
			var attrs = {
				'href' : anchorHref  // we'll always have the `href` attribute
			};
			
			var cssClass = this.createCssClass( matchType );
			if( cssClass ) {
				attrs[ 'class' ] = cssClass;
			}
			if( this.newWindow ) {
				attrs[ 'target' ] = "_blank";
			}
			
			return attrs;
		},
		
		
		/**
		 * Creates the CSS class that will be used for a given anchor tag, based on the `matchType` and the {@link #className}
		 * config.
		 * 
		 * @private
		 * @param {"url"/"email"/"twitter"} matchType The type of match that an anchor tag is being generated for.
		 * @return {String} The CSS class string for the link. Example return: "myLink myLink-url". If no {@link #className}
		 *   was configured, returns an empty string.
		 */
		createCssClass : function( matchType ) {
			var className = this.className;
			
			if( !className ) 
				return "";
			else
				return className + " " + className + "-" + matchType;  // ex: "myLink myLink-url", "myLink myLink-email", or "myLink myLink-twitter"
		},
		
		
		/**
		 * Processes the `anchorText` by truncating the text according to the {@link #truncate} config.
		 * 
		 * @private
		 * @param {String} anchorText The anchor tag's text (i.e. what will be displayed).
		 * @return {String} The processed `anchorText`.
		 */
		processAnchorText : function( anchorText ) {
			anchorText = this.doTruncate( anchorText );
			
			return anchorText;
		},
		
		
		/**
		 * Performs the truncation of the `anchorText`, if the `anchorText` is longer than the {@link #truncate} option.
		 * Truncates the text to 2 characters fewer than the {@link #truncate} option, and adds ".." to the end.
		 * 
		 * @private
		 * @param {String} text The anchor tag's text (i.e. what will be displayed).
		 * @return {String} The truncated anchor text.
		 */
		doTruncate : function( anchorText ) {
			return Autolinker.Util.ellipsis( anchorText, this.truncate || Number.POSITIVE_INFINITY );
		}
		
	} );
	/*global Autolinker */
	/**
	 * @private
	 * @class Autolinker.htmlParser.HtmlParser
	 * @extends Object
	 * 
	 * An HTML parser implementation which simply walks an HTML string and returns an array of 
	 * {@link Autolinker.htmlParser.HtmlNode HtmlNodes} that represent the basic HTML structure of the input string.
	 * 
	 * Autolinker uses this to only link URLs/emails/Twitter handles within text nodes, effectively ignoring / "walking
	 * around" HTML tags.
	 */
	Autolinker.htmlParser.HtmlParser = Autolinker.Util.extend( Object, {
		
		/**
		 * @private
		 * @property {RegExp} htmlRegex
		 * 
		 * The regular expression used to pull out HTML tags from a string. Handles namespaced HTML tags and
		 * attribute names, as specified by http://www.w3.org/TR/html-markup/syntax.html.
		 * 
		 * Capturing groups:
		 * 
		 * 1. The "!DOCTYPE" tag name, if a tag is a &lt;!DOCTYPE&gt; tag.
		 * 2. If it is an end tag, this group will have the '/'.
		 * 3. The tag name for all tags (other than the &lt;!DOCTYPE&gt; tag)
		 */
		htmlRegex : (function() {
			var tagNameRegex = /[0-9a-zA-Z][0-9a-zA-Z:]*/,
			    attrNameRegex = /[^\s\0"'>\/=\x01-\x1F\x7F]+/,   // the unicode range accounts for excluding control chars, and the delete char
			    attrValueRegex = /(?:"[^"]*?"|'[^']*?'|[^'"=<>`\s]+)/, // double quoted, single quoted, or unquoted attribute values
			    nameEqualsValueRegex = attrNameRegex.source + '(?:\\s*=\\s*' + attrValueRegex.source + ')?';  // optional '=[value]'
			
			return new RegExp( [
				// for <!DOCTYPE> tag. Ex: <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">) 
				'(?:',
					'<(!DOCTYPE)',  // *** Capturing Group 1 - If it's a doctype tag
						
						// Zero or more attributes following the tag name
						'(?:',
							'\\s+',  // one or more whitespace chars before an attribute
							
							// Either:
							// A. attr="value", or 
							// B. "value" alone (To cover example doctype tag: <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">) 
							'(?:', nameEqualsValueRegex, '|', attrValueRegex.source + ')',
						')*',
					'>',
				')',
				
				'|',
				
				// All other HTML tags (i.e. tags that are not <!DOCTYPE>)
				'(?:',
					'<(/)?',  // Beginning of a tag. Either '<' for a start tag, or '</' for an end tag. 
					          // *** Capturing Group 2: The slash or an empty string. Slash ('/') for end tag, empty string for start or self-closing tag.
				
						// *** Capturing Group 3 - The tag name
						'(' + tagNameRegex.source + ')',
						
						// Zero or more attributes following the tag name
						'(?:',
							'\\s+',                // one or more whitespace chars before an attribute
							nameEqualsValueRegex,  // attr="value" (with optional ="value" part)
						')*',
						
						'\\s*/?',  // any trailing spaces and optional '/' before the closing '>'
					'>',
				')'
			].join( "" ), 'gi' );
		} )(),
		
		/**
		 * @private
		 * @property {RegExp} htmlCharacterEntitiesRegex
		 *
		 * The regular expression that matches common HTML character entities.
		 * 
		 * Ignoring &amp; as it could be part of a query string -- handling it separately.
		 */
		htmlCharacterEntitiesRegex: /(&nbsp;|&#160;|&lt;|&#60;|&gt;|&#62;|&quot;|&#34;|&#39;)/gi,
		
		
		/**
		 * Parses an HTML string and returns a simple array of {@link Autolinker.htmlParser.HtmlNode HtmlNodes} to represent
		 * the HTML structure of the input string. 
		 * 
		 * @param {String} html The HTML to parse.
		 * @return {Autolinker.htmlParser.HtmlNode[]}
		 */
		parse : function( html ) {
			var htmlRegex = this.htmlRegex,
			    currentResult,
			    lastIndex = 0,
			    textAndEntityNodes,
			    nodes = [];  // will be the result of the method
			
			while( ( currentResult = htmlRegex.exec( html ) ) !== null ) {
				var tagText = currentResult[ 0 ],
				    tagName = currentResult[ 1 ] || currentResult[ 3 ],  // The <!DOCTYPE> tag (ex: "!DOCTYPE"), or another tag (ex: "a" or "img") 
				    isClosingTag = !!currentResult[ 2 ],
				    inBetweenTagsText = html.substring( lastIndex, currentResult.index );
				
				// Push TextNodes and EntityNodes for any text found between tags
				if( inBetweenTagsText ) {
					textAndEntityNodes = this.parseTextAndEntityNodes( inBetweenTagsText );
					nodes.push.apply( nodes, textAndEntityNodes );
				}
				
				// Push the ElementNode
				nodes.push( this.createElementNode( tagText, tagName, isClosingTag ) );
				
				lastIndex = currentResult.index + tagText.length;
			}
			
			// Process any remaining text after the last HTML element. Will process all of the text if there were no HTML elements.
			if( lastIndex < html.length ) {
				var text = html.substring( lastIndex );
				
				// Push TextNodes and EntityNodes for any text found between tags
				if( text ) {
					textAndEntityNodes = this.parseTextAndEntityNodes( text );
					nodes.push.apply( nodes, textAndEntityNodes );
				}
			}
			
			return nodes;
		},
		
		
		/**
		 * Parses text and HTML entity nodes from a given string. The input string should not have any HTML tags (elements)
		 * within it.
		 * 
		 * @private
		 * @param {String} text The text to parse.
		 * @return {Autolinker.htmlParser.HtmlNode[]} An array of HtmlNodes to represent the 
		 *   {@link Autolinker.htmlParser.TextNode TextNodes} and {@link Autolinker.htmlParser.EntityNode EntityNodes} found.
		 */
		parseTextAndEntityNodes : function( text ) {
			var nodes = [],
			    textAndEntityTokens = Autolinker.Util.splitAndCapture( text, this.htmlCharacterEntitiesRegex );  // split at HTML entities, but include the HTML entities in the results array
			
			// Every even numbered token is a TextNode, and every odd numbered token is an EntityNode
			// For example: an input `text` of "Test &quot;this&quot; today" would turn into the 
			//   `textAndEntityTokens`: [ 'Test ', '&quot;', 'this', '&quot;', ' today' ]
			for( var i = 0, len = textAndEntityTokens.length; i < len; i += 2 ) {
				var textToken = textAndEntityTokens[ i ],
				    entityToken = textAndEntityTokens[ i + 1 ];
				
				if( textToken ) nodes.push( this.createTextNode( textToken ) );
				if( entityToken ) nodes.push( this.createEntityNode( entityToken ) );
			}
			return nodes;
		},
		
		
		/**
		 * Factory method to create an {@link Autolinker.htmlParser.ElementNode ElementNode}.
		 * 
		 * @private
		 * @param {String} tagText The full text of the tag (element) that was matched, including its attributes.
		 * @param {String} tagName The name of the tag. Ex: An &lt;img&gt; tag would be passed to this method as "img".
		 * @param {Boolean} isClosingTag `true` if it's a closing tag, false otherwise.
		 * @return {Autolinker.htmlParser.ElementNode}
		 */
		createElementNode : function( tagText, tagName, isClosingTag ) {
			return new Autolinker.htmlParser.ElementNode( {
				text    : tagText,
				tagName : tagName.toLowerCase(),
				closing : isClosingTag
			} );
		},
		
		
		/**
		 * Factory method to create a {@link Autolinker.htmlParser.EntityNode EntityNode}.
		 * 
		 * @private
		 * @param {String} text The text that was matched for the HTML entity (such as '&amp;nbsp;').
		 * @return {Autolinker.htmlParser.EntityNode}
		 */
		createEntityNode : function( text ) {
			return new Autolinker.htmlParser.EntityNode( { text: text } );
		},
		
		
		/**
		 * Factory method to create a {@link Autolinker.htmlParser.TextNode TextNode}.
		 * 
		 * @private
		 * @param {String} text The text that was matched.
		 * @return {Autolinker.htmlParser.TextNode}
		 */
		createTextNode : function( text ) {
			return new Autolinker.htmlParser.TextNode( { text: text } );
		}
		
	} );
	/*global Autolinker */
	/**
	 * @abstract
	 * @class Autolinker.htmlParser.HtmlNode
	 * 
	 * Represents an HTML node found in an input string. An HTML node is one of the following:
	 * 
	 * 1. An {@link Autolinker.htmlParser.ElementNode ElementNode}, which represents HTML tags.
	 * 2. A {@link Autolinker.htmlParser.TextNode TextNode}, which represents text outside or within HTML tags.
	 * 3. A {@link Autolinker.htmlParser.EntityNode EntityNode}, which represents one of the known HTML
	 *    entities that Autolinker looks for. This includes common ones such as &amp;quot; and &amp;nbsp;
	 */
	Autolinker.htmlParser.HtmlNode = Autolinker.Util.extend( Object, {
		
		/**
		 * @cfg {String} text (required)
		 * 
		 * The original text that was matched for the HtmlNode. 
		 * 
		 * - In the case of an {@link Autolinker.htmlParser.ElementNode ElementNode}, this will be the tag's
		 *   text.
		 * - In the case of a {@link Autolinker.htmlParser.TextNode TextNode}, this will be the text itself.
		 * - In the case of a {@link Autolinker.htmlParser.EntityNode EntityNode}, this will be the text of
		 *   the HTML entity.
		 */
		text : "",
		
		
		/**
		 * @constructor
		 * @param {Object} cfg The configuration properties for the Match instance, specified in an Object (map).
		 */
		constructor : function( cfg ) {
			Autolinker.Util.assign( this, cfg );
		},

		
		/**
		 * Returns a string name for the type of node that this class represents.
		 * 
		 * @abstract
		 * @return {String}
		 */
		getType : Autolinker.Util.abstractMethod,
		
		
		/**
		 * Retrieves the {@link #text} for the HtmlNode.
		 * 
		 * @return {String}
		 */
		getText : function() {
			return this.text;
		}

	} );
	/*global Autolinker */
	/**
	 * @class Autolinker.htmlParser.ElementNode
	 * @extends Autolinker.htmlParser.HtmlNode
	 * 
	 * Represents an HTML element node that has been parsed by the {@link Autolinker.htmlParser.HtmlParser}.
	 * 
	 * See this class's superclass ({@link Autolinker.htmlParser.HtmlNode}) for more details.
	 */
	Autolinker.htmlParser.ElementNode = Autolinker.Util.extend( Autolinker.htmlParser.HtmlNode, {
		
		/**
		 * @cfg {String} tagName (required)
		 * 
		 * The name of the tag that was matched.
		 */
		tagName : '',
		
		/**
		 * @cfg {Boolean} closing (required)
		 * 
		 * `true` if the element (tag) is a closing tag, `false` if its an opening tag.
		 */
		closing : false,

		
		/**
		 * Returns a string name for the type of node that this class represents.
		 * 
		 * @return {String}
		 */
		getType : function() {
			return 'element';
		},
		

		/**
		 * Returns the HTML element's (tag's) name. Ex: for an &lt;img&gt; tag, returns "img".
		 * 
		 * @return {String}
		 */
		getTagName : function() {
			return this.tagName;
		},
		
		
		/**
		 * Determines if the HTML element (tag) is a closing tag. Ex: &lt;div&gt; returns
		 * `false`, while &lt;/div&gt; returns `true`.
		 * 
		 * @return {Boolean}
		 */
		isClosing : function() {
			return this.closing;
		}
		
	} );
	/*global Autolinker */
	/**
	 * @class Autolinker.htmlParser.EntityNode
	 * @extends Autolinker.htmlParser.HtmlNode
	 * 
	 * Represents a known HTML entity node that has been parsed by the {@link Autolinker.htmlParser.HtmlParser}.
	 * Ex: '&amp;nbsp;', or '&amp#160;' (which will be retrievable from the {@link #getText} method.
	 * 
	 * Note that this class will only be returned from the HtmlParser for the set of checked HTML entity nodes 
	 * defined by the {@link Autolinker.htmlParser.HtmlParser#htmlCharacterEntitiesRegex}.
	 * 
	 * See this class's superclass ({@link Autolinker.htmlParser.HtmlNode}) for more details.
	 */
	Autolinker.htmlParser.EntityNode = Autolinker.Util.extend( Autolinker.htmlParser.HtmlNode, {
		
		/**
		 * Returns a string name for the type of node that this class represents.
		 * 
		 * @return {String}
		 */
		getType : function() {
			return 'entity';
		}
		
	} );
	/*global Autolinker */
	/**
	 * @class Autolinker.htmlParser.TextNode
	 * @extends Autolinker.htmlParser.HtmlNode
	 * 
	 * Represents a text node that has been parsed by the {@link Autolinker.htmlParser.HtmlParser}.
	 * 
	 * See this class's superclass ({@link Autolinker.htmlParser.HtmlNode}) for more details.
	 */
	Autolinker.htmlParser.TextNode = Autolinker.Util.extend( Autolinker.htmlParser.HtmlNode, {
		
		/**
		 * Returns a string name for the type of node that this class represents.
		 * 
		 * @return {String}
		 */
		getType : function() {
			return 'text';
		}
		
	} );
	/*global Autolinker */
	/**
	 * @private
	 * @class Autolinker.matchParser.MatchParser
	 * @extends Object
	 * 
	 * Used by Autolinker to parse {@link #urls URLs}, {@link #emails email addresses}, and {@link #twitter Twitter handles}, 
	 * given an input string of text.
	 * 
	 * The MatchParser is fed a non-HTML string in order to search out URLs, email addresses and Twitter handles. Autolinker
	 * first uses the {@link HtmlParser} to "walk around" HTML tags, and then the text around the HTML tags is passed into
	 * the MatchParser in order to find the actual matches.
	 */
	Autolinker.matchParser.MatchParser = Autolinker.Util.extend( Object, {
		
		/**
		 * @cfg {Boolean} urls
		 * 
		 * `true` if miscellaneous URLs should be automatically linked, `false` if they should not be.
		 */
		urls : true,
		
		/**
		 * @cfg {Boolean} email
		 * 
		 * `true` if email addresses should be automatically linked, `false` if they should not be.
		 */
		email : true,
		
		/**
		 * @cfg {Boolean} twitter
		 * 
		 * `true` if Twitter handles ("@example") should be automatically linked, `false` if they should not be.
		 */
		twitter : true,
		
		/**
		 * @cfg {Boolean} stripPrefix
		 * 
		 * `true` if 'http://' or 'https://' and/or the 'www.' should be stripped from the beginning of URL links' text
		 * in {@link Autolinker.match.Url URL matches}, `false` otherwise.
		 * 
		 * TODO: Handle this before a URL Match object is instantiated.
		 */
		stripPrefix : true,
		
		
		/**
		 * @private
		 * @property {RegExp} matcherRegex
		 * 
		 * The regular expression that matches URLs, email addresses, and Twitter handles.
		 * 
		 * This regular expression has the following capturing groups:
		 * 
		 * 1. Group that is used to determine if there is a Twitter handle match (i.e. \@someTwitterUser). Simply check for its 
		 *    existence to determine if there is a Twitter handle match. The next couple of capturing groups give information 
		 *    about the Twitter handle match.
		 * 2. The whitespace character before the \@sign in a Twitter handle. This is needed because there are no lookbehinds in
		 *    JS regular expressions, and can be used to reconstruct the original string in a replace().
		 * 3. The Twitter handle itself in a Twitter match. If the match is '@someTwitterUser', the handle is 'someTwitterUser'.
		 * 4. Group that matches an email address. Used to determine if the match is an email address, as well as holding the full 
		 *    address. Ex: 'me@my.com'
		 * 5. Group that matches a URL in the input text. Ex: 'http://google.com', 'www.google.com', or just 'google.com'.
		 *    This also includes a path, url parameters, or hash anchors. Ex: google.com/path/to/file?q1=1&q2=2#myAnchor
		 * 6. Group that matches a protocol URL (i.e. 'http://google.com'). This is used to match protocol URLs with just a single
		 *    word, like 'http://localhost', where we won't double check that the domain name has at least one '.' in it.
		 * 7. A protocol-relative ('//') match for the case of a 'www.' prefixed URL. Will be an empty string if it is not a 
		 *    protocol-relative match. We need to know the character before the '//' in order to determine if it is a valid match
		 *    or the // was in a string we don't want to auto-link.
		 * 8. A protocol-relative ('//') match for the case of a known TLD prefixed URL. Will be an empty string if it is not a 
		 *    protocol-relative match. See #6 for more info. 
		 */
		matcherRegex : (function() {
			var twitterRegex = /(^|[^\w])@(\w{1,15})/,              // For matching a twitter handle. Ex: @gregory_jacobs
			    
			    emailRegex = /(?:[\-;:&=\+\$,\w\.]+@)/,             // something@ for email addresses (a.k.a. local-part)
			    
			    protocolRegex = /(?:[A-Za-z][-.+A-Za-z0-9]+:(?![A-Za-z][-.+A-Za-z0-9]+:\/\/)(?!\d+\/?)(?:\/\/)?)/,  // match protocol, allow in format "http://" or "mailto:". However, do not match the first part of something like 'link:http://www.google.com' (i.e. don't match "link:"). Also, make sure we don't interpret 'google.com:8000' as if 'google.com' was a protocol here (i.e. ignore a trailing port number in this regex)
			    wwwRegex = /(?:www\.)/,                             // starting with 'www.'
			    domainNameRegex = /[A-Za-z0-9\.\-]*[A-Za-z0-9\-]/,  // anything looking at all like a domain, non-unicode domains, not ending in a period
			    tldRegex = /\.(?:international|construction|contractors|enterprises|photography|productions|foundation|immobilien|industries|management|properties|technology|christmas|community|directory|education|equipment|institute|marketing|solutions|vacations|bargains|boutique|builders|catering|cleaning|clothing|computer|democrat|diamonds|graphics|holdings|lighting|partners|plumbing|supplies|training|ventures|academy|careers|company|cruises|domains|exposed|flights|florist|gallery|guitars|holiday|kitchen|neustar|okinawa|recipes|rentals|reviews|shiksha|singles|support|systems|agency|berlin|camera|center|coffee|condos|dating|estate|events|expert|futbol|kaufen|luxury|maison|monash|museum|nagoya|photos|repair|report|social|supply|tattoo|tienda|travel|viajes|villas|vision|voting|voyage|actor|build|cards|cheap|codes|dance|email|glass|house|mango|ninja|parts|photo|shoes|solar|today|tokyo|tools|watch|works|aero|arpa|asia|best|bike|blue|buzz|camp|club|cool|coop|farm|fish|gift|guru|info|jobs|kiwi|kred|land|limo|link|menu|mobi|moda|name|pics|pink|post|qpon|rich|ruhr|sexy|tips|vote|voto|wang|wien|wiki|zone|bar|bid|biz|cab|cat|ceo|com|edu|gov|int|kim|mil|net|onl|org|pro|pub|red|tel|uno|wed|xxx|xyz|ac|ad|ae|af|ag|ai|al|am|an|ao|aq|ar|as|at|au|aw|ax|az|ba|bb|bd|be|bf|bg|bh|bi|bj|bm|bn|bo|br|bs|bt|bv|bw|by|bz|ca|cc|cd|cf|cg|ch|ci|ck|cl|cm|cn|co|cr|cu|cv|cw|cx|cy|cz|de|dj|dk|dm|do|dz|ec|ee|eg|er|es|et|eu|fi|fj|fk|fm|fo|fr|ga|gb|gd|ge|gf|gg|gh|gi|gl|gm|gn|gp|gq|gr|gs|gt|gu|gw|gy|hk|hm|hn|hr|ht|hu|id|ie|il|im|in|io|iq|ir|is|it|je|jm|jo|jp|ke|kg|kh|ki|km|kn|kp|kr|kw|ky|kz|la|lb|lc|li|lk|lr|ls|lt|lu|lv|ly|ma|mc|md|me|mg|mh|mk|ml|mm|mn|mo|mp|mq|mr|ms|mt|mu|mv|mw|mx|my|mz|na|nc|ne|nf|ng|ni|nl|no|np|nr|nu|nz|om|pa|pe|pf|pg|ph|pk|pl|pm|pn|pr|ps|pt|pw|py|qa|re|ro|rs|ru|rw|sa|sb|sc|sd|se|sg|sh|si|sj|sk|sl|sm|sn|so|sr|st|su|sv|sx|sy|sz|tc|td|tf|tg|th|tj|tk|tl|tm|tn|to|tp|tr|tt|tv|tw|tz|ua|ug|uk|us|uy|uz|va|vc|ve|vg|vi|vn|vu|wf|ws|ye|yt|za|zm|zw)\b/,   // match our known top level domains (TLDs)
			    
			    // Allow optional path, query string, and hash anchor, not ending in the following characters: "?!:,.;"
			    // http://blog.codinghorror.com/the-problem-with-urls/
			    urlSuffixRegex = /[\-A-Za-z0-9+&@#\/%=~_()|'$*\[\]?!:,.;]*[\-A-Za-z0-9+&@#\/%=~_()|'$*\[\]]/;
			
			return new RegExp( [
				'(',  // *** Capturing group $1, which can be used to check for a twitter handle match. Use group $3 for the actual twitter handle though. $2 may be used to reconstruct the original string in a replace() 
					// *** Capturing group $2, which matches the whitespace character before the '@' sign (needed because of no lookbehinds), and 
					// *** Capturing group $3, which matches the actual twitter handle
					twitterRegex.source,
				')',
				
				'|',
				
				'(',  // *** Capturing group $4, which is used to determine an email match
					emailRegex.source,
					domainNameRegex.source,
					tldRegex.source,
				')',
				
				'|',
				
				'(',  // *** Capturing group $5, which is used to match a URL
					'(?:', // parens to cover match for protocol (optional), and domain
						'(',  // *** Capturing group $6, for a protocol-prefixed url (ex: http://google.com)
							protocolRegex.source,
							domainNameRegex.source,
						')',
						
						'|',
						
						'(?:',  // non-capturing paren for a 'www.' prefixed url (ex: www.google.com)
							'(.?//)?',  // *** Capturing group $7 for an optional protocol-relative URL. Must be at the beginning of the string or start with a non-word character
							wwwRegex.source,
							domainNameRegex.source,
						')',
						
						'|',
						
						'(?:',  // non-capturing paren for known a TLD url (ex: google.com)
							'(.?//)?',  // *** Capturing group $8 for an optional protocol-relative URL. Must be at the beginning of the string or start with a non-word character
							domainNameRegex.source,
							tldRegex.source,
						')',
					')',
					
					'(?:' + urlSuffixRegex.source + ')?',  // match for path, query string, and/or hash anchor - optional
				')'
			].join( "" ), 'gi' );
		} )(),
		
		/**
		 * @private
		 * @property {RegExp} charBeforeProtocolRelMatchRegex
		 * 
		 * The regular expression used to retrieve the character before a protocol-relative URL match.
		 * 
		 * This is used in conjunction with the {@link #matcherRegex}, which needs to grab the character before a protocol-relative
		 * '//' due to the lack of a negative look-behind in JavaScript regular expressions. The character before the match is stripped
		 * from the URL.
		 */
		charBeforeProtocolRelMatchRegex : /^(.)?\/\//,
		
		/**
		 * @private
		 * @property {Autolinker.MatchValidator} matchValidator
		 * 
		 * The MatchValidator object, used to filter out any false positives from the {@link #matcherRegex}. See
		 * {@link Autolinker.MatchValidator} for details.
		 */
		
		
		/**
		 * @constructor
		 * @param {Object} [cfg] The configuration options for the AnchorTagBuilder instance, specified in an Object (map).
		 */
		constructor : function( cfg ) {
			Autolinker.Util.assign( this, cfg );
		
			this.matchValidator = new Autolinker.MatchValidator();
		},
		
		
		/**
		 * Parses the input `text` to search for URLs/emails/Twitter handles, and calls the `replaceFn`
		 * to allow replacements of the matches. Returns the `text` with matches replaced.
		 * 
		 * @param {String} text The text to search and repace matches in.
		 * @param {Function} replaceFn The iterator function to handle the replacements. The function takes a
		 *   single argument, a {@link Autolinker.match.Match} object, and should return the text that should
		 *   make the replacement.
		 * @param {Object} [contextObj=window] The context object ("scope") to run the `replaceFn` in.
		 * @return {String}
		 */
		replace : function( text, replaceFn, contextObj ) {
			var me = this;  // for closure
			
			return text.replace( this.matcherRegex, function( matchStr, $1, $2, $3, $4, $5, $6, $7, $8 ) {
				var matchDescObj = me.processCandidateMatch( matchStr, $1, $2, $3, $4, $5, $6, $7, $8 );  // "match description" object
				
				// Return out with no changes for match types that are disabled (url, email, twitter), or for matches that are 
				// invalid (false positives from the matcherRegex, which can't use look-behinds since they are unavailable in JS).
				if( !matchDescObj ) {
					return matchStr;
					
				} else {
					// Generate replacement text for the match from the `replaceFn`
					var replaceStr = replaceFn.call( contextObj, matchDescObj.match );
					return matchDescObj.prefixStr + replaceStr + matchDescObj.suffixStr;
				}
			} );
		},
		
		
		/**
		 * Processes a candidate match from the {@link #matcherRegex}. 
		 * 
		 * Not all matches found by the regex are actual URL/email/Twitter matches, as determined by the {@link #matchValidator}. In
		 * this case, the method returns `null`. Otherwise, a valid Object with `prefixStr`, `match`, and `suffixStr` is returned.
		 * 
		 * @private
		 * @param {String} matchStr The full match that was found by the {@link #matcherRegex}.
		 * @param {String} twitterMatch The matched text of a Twitter handle, if the match is a Twitter match.
		 * @param {String} twitterHandlePrefixWhitespaceChar The whitespace char before the @ sign in a Twitter handle match. This 
		 *   is needed because of no lookbehinds in JS regexes, and is need to re-include the character for the anchor tag replacement.
		 * @param {String} twitterHandle The actual Twitter user (i.e the word after the @ sign in a Twitter match).
		 * @param {String} emailAddressMatch The matched email address for an email address match.
		 * @param {String} urlMatch The matched URL string for a URL match.
		 * @param {String} protocolUrlMatch The match URL string for a protocol match. Ex: 'http://yahoo.com'. This is used to match
		 *   something like 'http://localhost', where we won't double check that the domain name has at least one '.' in it.
		 * @param {String} wwwProtocolRelativeMatch The '//' for a protocol-relative match from a 'www' url, with the character that 
		 *   comes before the '//'.
		 * @param {String} tldProtocolRelativeMatch The '//' for a protocol-relative match from a TLD (top level domain) match, with 
		 *   the character that comes before the '//'.
		 *   
		 * @return {Object} A "match description object". This will be `null` if the match was invalid, or if a match type is disabled.
		 *   Otherwise, this will be an Object (map) with the following properties:
		 * @return {String} return.prefixStr The char(s) that should be prepended to the replacement string. These are char(s) that
		 *   were needed to be included from the regex match that were ignored by processing code, and should be re-inserted into 
		 *   the replacement stream.
		 * @return {String} return.suffixStr The char(s) that should be appended to the replacement string. These are char(s) that
		 *   were needed to be included from the regex match that were ignored by processing code, and should be re-inserted into 
		 *   the replacement stream.
		 * @return {Autolinker.match.Match} return.match The Match object that represents the match that was found.
		 */
		processCandidateMatch : function( 
			matchStr, twitterMatch, twitterHandlePrefixWhitespaceChar, twitterHandle, 
			emailAddressMatch, urlMatch, protocolUrlMatch, wwwProtocolRelativeMatch, tldProtocolRelativeMatch
		) {
			// Note: The `matchStr` variable wil be fixed up to remove characters that are no longer needed (which will 
			// be added to `prefixStr` and `suffixStr`).
			
			var protocolRelativeMatch = wwwProtocolRelativeMatch || tldProtocolRelativeMatch,
			    match,  // Will be an Autolinker.match.Match object
			    
			    prefixStr = "",       // A string to use to prefix the anchor tag that is created. This is needed for the Twitter handle match
			    suffixStr = "";       // A string to suffix the anchor tag that is created. This is used if there is a trailing parenthesis that should not be auto-linked.
			    
			
			// Return out with `null` for match types that are disabled (url, email, twitter), or for matches that are 
			// invalid (false positives from the matcherRegex, which can't use look-behinds since they are unavailable in JS).
			if(
				( twitterMatch && !this.twitter ) || ( emailAddressMatch && !this.email ) || ( urlMatch && !this.urls ) ||
				!this.matchValidator.isValidMatch( urlMatch, protocolUrlMatch, protocolRelativeMatch ) 
			) {
				return null;
			}
			
			// Handle a closing parenthesis at the end of the match, and exclude it if there is not a matching open parenthesis
			// in the match itself. 
			if( this.matchHasUnbalancedClosingParen( matchStr ) ) {
				matchStr = matchStr.substr( 0, matchStr.length - 1 );  // remove the trailing ")"
				suffixStr = ")";  // this will be added after the generated <a> tag
			}
			
			
			if( emailAddressMatch ) {
				match = new Autolinker.match.Email( { matchedText: matchStr, email: emailAddressMatch } );
				
			} else if( twitterMatch ) {
				// fix up the `matchStr` if there was a preceding whitespace char, which was needed to determine the match 
				// itself (since there are no look-behinds in JS regexes)
				if( twitterHandlePrefixWhitespaceChar ) {
					prefixStr = twitterHandlePrefixWhitespaceChar;
					matchStr = matchStr.slice( 1 );  // remove the prefixed whitespace char from the match
				}
				match = new Autolinker.match.Twitter( { matchedText: matchStr, twitterHandle: twitterHandle } );
				
			} else {  // url match
				// If it's a protocol-relative '//' match, remove the character before the '//' (which the matcherRegex needed
				// to match due to the lack of a negative look-behind in JavaScript regular expressions)
				if( protocolRelativeMatch ) {
					var charBeforeMatch = protocolRelativeMatch.match( this.charBeforeProtocolRelMatchRegex )[ 1 ] || "";
					
					if( charBeforeMatch ) {  // fix up the `matchStr` if there was a preceding char before a protocol-relative match, which was needed to determine the match itself (since there are no look-behinds in JS regexes)
						prefixStr = charBeforeMatch;
						matchStr = matchStr.slice( 1 );  // remove the prefixed char from the match
					}
				}
				
				match = new Autolinker.match.Url( {
					matchedText : matchStr,
					url : matchStr,
					protocolUrlMatch : !!protocolUrlMatch,
					protocolRelativeMatch : !!protocolRelativeMatch,
					stripPrefix : this.stripPrefix
				} );
			}
			
			return {
				prefixStr : prefixStr,
				suffixStr : suffixStr,
				match     : match
			};
		},
		
		
		/**
		 * Determines if a match found has an unmatched closing parenthesis. If so, this parenthesis will be removed
		 * from the match itself, and appended after the generated anchor tag in {@link #processTextNode}.
		 * 
		 * A match may have an extra closing parenthesis at the end of the match because the regular expression must include parenthesis
		 * for URLs such as "wikipedia.com/something_(disambiguation)", which should be auto-linked. 
		 * 
		 * However, an extra parenthesis *will* be included when the URL itself is wrapped in parenthesis, such as in the case of
		 * "(wikipedia.com/something_(disambiguation))". In this case, the last closing parenthesis should *not* be part of the URL 
		 * itself, and this method will return `true`.
		 * 
		 * @private
		 * @param {String} matchStr The full match string from the {@link #matcherRegex}.
		 * @return {Boolean} `true` if there is an unbalanced closing parenthesis at the end of the `matchStr`, `false` otherwise.
		 */
		matchHasUnbalancedClosingParen : function( matchStr ) {
			var lastChar = matchStr.charAt( matchStr.length - 1 );
			
			if( lastChar === ')' ) {
				var openParensMatch = matchStr.match( /\(/g ),
				    closeParensMatch = matchStr.match( /\)/g ),
				    numOpenParens = ( openParensMatch && openParensMatch.length ) || 0,
				    numCloseParens = ( closeParensMatch && closeParensMatch.length ) || 0;
				
				if( numOpenParens < numCloseParens ) {
					return true;
				}
			}
			
			return false;
		}
		
	} );
	/*global Autolinker */
	/*jshint scripturl:true */
	/**
	 * @private
	 * @class Autolinker.MatchValidator
	 * @extends Object
	 * 
	 * Used by Autolinker to filter out false positives from the {@link Autolinker#matcherRegex}.
	 * 
	 * Due to the limitations of regular expressions (including the missing feature of look-behinds in JS regular expressions),
	 * we cannot always determine the validity of a given match. This class applies a bit of additional logic to filter out any
	 * false positives that have been matched by the {@link Autolinker#matcherRegex}.
	 */
	Autolinker.MatchValidator = Autolinker.Util.extend( Object, {
		
		/**
		 * @private
		 * @property {RegExp} invalidProtocolRelMatchRegex
		 * 
		 * The regular expression used to check a potential protocol-relative URL match, coming from the 
		 * {@link Autolinker#matcherRegex}. A protocol-relative URL is, for example, "//yahoo.com"
		 * 
		 * This regular expression checks to see if there is a word character before the '//' match in order to determine if 
		 * we should actually autolink a protocol-relative URL. This is needed because there is no negative look-behind in 
		 * JavaScript regular expressions. 
		 * 
		 * For instance, we want to autolink something like "Go to: //google.com", but we don't want to autolink something 
		 * like "abc//google.com"
		 */
		invalidProtocolRelMatchRegex : /^[\w]\/\//,
		
		/**
		 * Regex to test for a full protocol, with the two trailing slashes. Ex: 'http://'
		 * 
		 * @private
		 * @property {RegExp} hasFullProtocolRegex
		 */
		hasFullProtocolRegex : /^[A-Za-z][-.+A-Za-z0-9]+:\/\//,
		
		/**
		 * Regex to find the URI scheme, such as 'mailto:'.
		 * 
		 * This is used to filter out 'javascript:' and 'vbscript:' schemes.
		 * 
		 * @private
		 * @property {RegExp} uriSchemeRegex
		 */
		uriSchemeRegex : /^[A-Za-z][-.+A-Za-z0-9]+:/,
		
		/**
		 * Regex to determine if at least one word char exists after the protocol (i.e. after the ':')
		 * 
		 * @private
		 * @property {RegExp} hasWordCharAfterProtocolRegex
		 */
		hasWordCharAfterProtocolRegex : /:[^\s]*?[A-Za-z]/,
		
		
		/**
		 * Determines if a given match found by {@link Autolinker#processTextNode} is valid. Will return `false` for:
		 * 
		 * 1) URL matches which do not have at least have one period ('.') in the domain name (effectively skipping over 
		 *    matches like "abc:def"). However, URL matches with a protocol will be allowed (ex: 'http://localhost')
		 * 2) URL matches which do not have at least one word character in the domain name (effectively skipping over
		 *    matches like "git:1.0").
		 * 3) A protocol-relative url match (a URL beginning with '//') whose previous character is a word character 
		 *    (effectively skipping over strings like "abc//google.com")
		 * 
		 * Otherwise, returns `true`.
		 * 
		 * @param {String} urlMatch The matched URL, if there was one. Will be an empty string if the match is not a URL match.
		 * @param {String} protocolUrlMatch The match URL string for a protocol match. Ex: 'http://yahoo.com'. This is used to match
		 *   something like 'http://localhost', where we won't double check that the domain name has at least one '.' in it.
		 * @param {String} protocolRelativeMatch The protocol-relative string for a URL match (i.e. '//'), possibly with a preceding
		 *   character (ex, a space, such as: ' //', or a letter, such as: 'a//'). The match is invalid if there is a word character
		 *   preceding the '//'.
		 * @return {Boolean} `true` if the match given is valid and should be processed, or `false` if the match is invalid and/or 
		 *   should just not be processed.
		 */
		isValidMatch : function( urlMatch, protocolUrlMatch, protocolRelativeMatch ) {
			if(
				( protocolUrlMatch && !this.isValidUriScheme( protocolUrlMatch ) ) ||
				this.urlMatchDoesNotHaveProtocolOrDot( urlMatch, protocolUrlMatch ) ||       // At least one period ('.') must exist in the URL match for us to consider it an actual URL, *unless* it was a full protocol match (like 'http://localhost')
				this.urlMatchDoesNotHaveAtLeastOneWordChar( urlMatch, protocolUrlMatch ) ||  // At least one letter character must exist in the domain name after a protocol match. Ex: skip over something like "git:1.0"
				this.isInvalidProtocolRelativeMatch( protocolRelativeMatch )                 // A protocol-relative match which has a word character in front of it (so we can skip something like "abc//google.com")
			) {
				return false;
			}
			
			return true;
		},
		
		
		/**
		 * Determines if the URI scheme is a valid scheme to be autolinked. Returns `false` if the scheme is 
		 * 'javascript:' or 'vbscript:'
		 * 
		 * @private
		 * @param {String} uriSchemeMatch The match URL string for a full URI scheme match. Ex: 'http://yahoo.com' 
		 *   or 'mailto:a@a.com'.
		 * @return {Boolean} `true` if the scheme is a valid one, `false` otherwise.
		 */
		isValidUriScheme : function( uriSchemeMatch ) {
			var uriScheme = uriSchemeMatch.match( this.uriSchemeRegex )[ 0 ].toLowerCase();
			
			return ( uriScheme !== 'javascript:' && uriScheme !== 'vbscript:' );
		},
		
		
		/**
		 * Determines if a URL match does not have either:
		 * 
		 * a) a full protocol (i.e. 'http://'), or
		 * b) at least one dot ('.') in the domain name (for a non-full-protocol match).
		 * 
		 * Either situation is considered an invalid URL (ex: 'git:d' does not have either the '://' part, or at least one dot
		 * in the domain name. If the match was 'git:abc.com', we would consider this valid.)
		 * 
		 * @private
		 * @param {String} urlMatch The matched URL, if there was one. Will be an empty string if the match is not a URL match.
		 * @param {String} protocolUrlMatch The match URL string for a protocol match. Ex: 'http://yahoo.com'. This is used to match
		 *   something like 'http://localhost', where we won't double check that the domain name has at least one '.' in it.
		 * @return {Boolean} `true` if the URL match does not have a full protocol, or at least one dot ('.') in a non-full-protocol
		 *   match.
		 */
		urlMatchDoesNotHaveProtocolOrDot : function( urlMatch, protocolUrlMatch ) {
			return ( !!urlMatch && ( !protocolUrlMatch || !this.hasFullProtocolRegex.test( protocolUrlMatch ) ) && urlMatch.indexOf( '.' ) === -1 );
		},
		
		
		/**
		 * Determines if a URL match does not have at least one word character after the protocol (i.e. in the domain name).
		 * 
		 * At least one letter character must exist in the domain name after a protocol match. Ex: skip over something 
		 * like "git:1.0"
		 * 
		 * @private
		 * @param {String} urlMatch The matched URL, if there was one. Will be an empty string if the match is not a URL match.
		 * @param {String} protocolUrlMatch The match URL string for a protocol match. Ex: 'http://yahoo.com'. This is used to
		 *   know whether or not we have a protocol in the URL string, in order to check for a word character after the protocol
		 *   separator (':').
		 * @return {Boolean} `true` if the URL match does not have at least one word character in it after the protocol, `false`
		 *   otherwise.
		 */
		urlMatchDoesNotHaveAtLeastOneWordChar : function( urlMatch, protocolUrlMatch ) {
			if( urlMatch && protocolUrlMatch ) {
				return !this.hasWordCharAfterProtocolRegex.test( urlMatch );
			} else {
				return false;
			}
		},
		
		
		/**
		 * Determines if a protocol-relative match is an invalid one. This method returns `true` if there is a `protocolRelativeMatch`,
		 * and that match contains a word character before the '//' (i.e. it must contain whitespace or nothing before the '//' in
		 * order to be considered valid).
		 * 
		 * @private
		 * @param {String} protocolRelativeMatch The protocol-relative string for a URL match (i.e. '//'), possibly with a preceding
		 *   character (ex, a space, such as: ' //', or a letter, such as: 'a//'). The match is invalid if there is a word character
		 *   preceding the '//'.
		 * @return {Boolean} `true` if it is an invalid protocol-relative match, `false` otherwise.
		 */
		isInvalidProtocolRelativeMatch : function( protocolRelativeMatch ) {
			return ( !!protocolRelativeMatch && this.invalidProtocolRelMatchRegex.test( protocolRelativeMatch ) );
		}

	} );
	/*global Autolinker */
	/**
	 * @abstract
	 * @class Autolinker.match.Match
	 * 
	 * Represents a match found in an input string which should be Autolinked. A Match object is what is provided in a 
	 * {@link Autolinker#replaceFn replaceFn}, and may be used to query for details about the match.
	 * 
	 * For example:
	 * 
	 *     var input = "...";  // string with URLs, Email Addresses, and Twitter Handles
	 *     
	 *     var linkedText = Autolinker.link( input, {
	 *         replaceFn : function( autolinker, match ) {
	 *             console.log( "href = ", match.getAnchorHref() );
	 *             console.log( "text = ", match.getAnchorText() );
	 *         
	 *             switch( match.getType() ) {
	 *                 case 'url' : 
	 *                     console.log( "url: ", match.getUrl() );
	 *                     
	 *                 case 'email' :
	 *                     console.log( "email: ", match.getEmail() );
	 *                     
	 *                 case 'twitter' :
	 *                     console.log( "twitter: ", match.getTwitterHandle() );
	 *             }
	 *         }
	 *     } );
	 *     
	 * See the {@link Autolinker} class for more details on using the {@link Autolinker#replaceFn replaceFn}.
	 */
	Autolinker.match.Match = Autolinker.Util.extend( Object, {
		
		/**
		 * @cfg {String} matchedText (required)
		 * 
		 * The original text that was matched.
		 */
		
		
		/**
		 * @constructor
		 * @param {Object} cfg The configuration properties for the Match instance, specified in an Object (map).
		 */
		constructor : function( cfg ) {
			Autolinker.Util.assign( this, cfg );
		},

		
		/**
		 * Returns a string name for the type of match that this class represents.
		 * 
		 * @abstract
		 * @return {String}
		 */
		getType : Autolinker.Util.abstractMethod,
		
		
		/**
		 * Returns the original text that was matched.
		 * 
		 * @return {String}
		 */
		getMatchedText : function() {
			return this.matchedText;
		},
		

		/**
		 * Returns the anchor href that should be generated for the match.
		 * 
		 * @abstract
		 * @return {String}
		 */
		getAnchorHref : Autolinker.Util.abstractMethod,
		
		
		/**
		 * Returns the anchor text that should be generated for the match.
		 * 
		 * @abstract
		 * @return {String}
		 */
		getAnchorText : Autolinker.Util.abstractMethod

	} );
	/*global Autolinker */
	/**
	 * @class Autolinker.match.Email
	 * @extends Autolinker.match.Match
	 * 
	 * Represents a Email match found in an input string which should be Autolinked.
	 * 
	 * See this class's superclass ({@link Autolinker.match.Match}) for more details.
	 */
	Autolinker.match.Email = Autolinker.Util.extend( Autolinker.match.Match, {
		
		/**
		 * @cfg {String} email (required)
		 * 
		 * The email address that was matched.
		 */
		

		/**
		 * Returns a string name for the type of match that this class represents.
		 * 
		 * @return {String}
		 */
		getType : function() {
			return 'email';
		},
		
		
		/**
		 * Returns the email address that was matched.
		 * 
		 * @return {String}
		 */
		getEmail : function() {
			return this.email;
		},
		

		/**
		 * Returns the anchor href that should be generated for the match.
		 * 
		 * @return {String}
		 */
		getAnchorHref : function() {
			return 'mailto:' + this.email;
		},
		
		
		/**
		 * Returns the anchor text that should be generated for the match.
		 * 
		 * @return {String}
		 */
		getAnchorText : function() {
			return this.email;
		}
		
	} );
	/*global Autolinker */
	/**
	 * @class Autolinker.match.Twitter
	 * @extends Autolinker.match.Match
	 * 
	 * Represents a Twitter match found in an input string which should be Autolinked.
	 * 
	 * See this class's superclass ({@link Autolinker.match.Match}) for more details.
	 */
	Autolinker.match.Twitter = Autolinker.Util.extend( Autolinker.match.Match, {
		
		/**
		 * @cfg {String} twitterHandle (required)
		 * 
		 * The Twitter handle that was matched.
		 */
		

		/**
		 * Returns the type of match that this class represents.
		 * 
		 * @return {String}
		 */
		getType : function() {
			return 'twitter';
		},
		
		
		/**
		 * Returns a string name for the type of match that this class represents.
		 * 
		 * @return {String}
		 */
		getTwitterHandle : function() {
			return this.twitterHandle;
		},
		

		/**
		 * Returns the anchor href that should be generated for the match.
		 * 
		 * @return {String}
		 */
		getAnchorHref : function() {
			return 'https://twitter.com/' + this.twitterHandle;
		},
		
		
		/**
		 * Returns the anchor text that should be generated for the match.
		 * 
		 * @return {String}
		 */
		getAnchorText : function() {
			return '@' + this.twitterHandle;
		}
		
	} );
	/*global Autolinker */
	/**
	 * @class Autolinker.match.Url
	 * @extends Autolinker.match.Match
	 * 
	 * Represents a Url match found in an input string which should be Autolinked.
	 * 
	 * See this class's superclass ({@link Autolinker.match.Match}) for more details.
	 */
	Autolinker.match.Url = Autolinker.Util.extend( Autolinker.match.Match, {
		
		/**
		 * @cfg {String} url (required)
		 * 
		 * The url that was matched.
		 */
		
		/**
		 * @cfg {Boolean} protocolUrlMatch (required)
		 * 
		 * `true` if the URL is a match which already has a protocol (i.e. 'http://'), `false` if the match was from a 'www' or
		 * known TLD match.
		 */
		
		/**
		 * @cfg {Boolean} protocolRelativeMatch (required)
		 * 
		 * `true` if the URL is a protocol-relative match. A protocol-relative match is a URL that starts with '//',
		 * and will be either http:// or https:// based on the protocol that the site is loaded under.
		 */
		
		/**
		 * @cfg {Boolean} stripPrefix (required)
		 * @inheritdoc Autolinker#stripPrefix
		 */
		

		/**
		 * @private
		 * @property {RegExp} urlPrefixRegex
		 * 
		 * A regular expression used to remove the 'http://' or 'https://' and/or the 'www.' from URLs.
		 */
		urlPrefixRegex: /^(https?:\/\/)?(www\.)?/i,
		
		/**
		 * @private
		 * @property {RegExp} protocolRelativeRegex
		 * 
		 * The regular expression used to remove the protocol-relative '//' from the {@link #url} string, for purposes
		 * of {@link #getAnchorText}. A protocol-relative URL is, for example, "//yahoo.com"
		 */
		protocolRelativeRegex : /^\/\//,
		
		/**
		 * @private
		 * @property {Boolean} protocolPrepended
		 * 
		 * Will be set to `true` if the 'http://' protocol has been prepended to the {@link #url} (because the
		 * {@link #url} did not have a protocol)
		 */
		protocolPrepended : false,
		

		/**
		 * Returns a string name for the type of match that this class represents.
		 * 
		 * @return {String}
		 */
		getType : function() {
			return 'url';
		},
		
		
		/**
		 * Returns the url that was matched, assuming the protocol to be 'http://' if the original
		 * match was missing a protocol.
		 * 
		 * @return {String}
		 */
		getUrl : function() {
			var url = this.url;
			
			// if the url string doesn't begin with a protocol, assume 'http://'
			if( !this.protocolRelativeMatch && !this.protocolUrlMatch && !this.protocolPrepended ) {
				url = this.url = 'http://' + url;
				
				this.protocolPrepended = true;
			}
			
			return url;
		},
		

		/**
		 * Returns the anchor href that should be generated for the match.
		 * 
		 * @return {String}
		 */
		getAnchorHref : function() {
			var url = this.getUrl();
			
			return url.replace( /&amp;/g, '&' );  // any &amp;'s in the URL should be converted back to '&' if they were displayed as &amp; in the source html 
		},
		
		
		/**
		 * Returns the anchor text that should be generated for the match.
		 * 
		 * @return {String}
		 */
		getAnchorText : function() {
			var anchorText = this.getUrl();
			
			if( this.protocolRelativeMatch ) {
				// Strip off any protocol-relative '//' from the anchor text
				anchorText = this.stripProtocolRelativePrefix( anchorText );
			}
			if( this.stripPrefix ) {
				anchorText = this.stripUrlPrefix( anchorText );
			}
			anchorText = this.removeTrailingSlash( anchorText );  // remove trailing slash, if there is one
			
			return anchorText;
		},
		
		
		// ---------------------------------------
		
		// Utility Functionality
		
		/**
		 * Strips the URL prefix (such as "http://" or "https://") from the given text.
		 * 
		 * @private
		 * @param {String} text The text of the anchor that is being generated, for which to strip off the
		 *   url prefix (such as stripping off "http://")
		 * @return {String} The `anchorText`, with the prefix stripped.
		 */
		stripUrlPrefix : function( text ) {
			return text.replace( this.urlPrefixRegex, '' );
		},
		
		
		/**
		 * Strips any protocol-relative '//' from the anchor text.
		 * 
		 * @private
		 * @param {String} text The text of the anchor that is being generated, for which to strip off the
		 *   protocol-relative prefix (such as stripping off "//")
		 * @return {String} The `anchorText`, with the protocol-relative prefix stripped.
		 */
		stripProtocolRelativePrefix : function( text ) {
			return text.replace( this.protocolRelativeRegex, '' );
		},
		
		
		/**
		 * Removes any trailing slash from the given `anchorText`, in preparation for the text to be displayed.
		 * 
		 * @private
		 * @param {String} anchorText The text of the anchor that is being generated, for which to remove any trailing
		 *   slash ('/') that may exist.
		 * @return {String} The `anchorText`, with the trailing slash removed.
		 */
		removeTrailingSlash : function( anchorText ) {
			if( anchorText.charAt( anchorText.length - 1 ) === '/' ) {
				anchorText = anchorText.slice( 0, -1 );
			}
			return anchorText;
		}
		
	} );
	return Autolinker;

	}));


/***/ },
/* 402 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	/**
	 * Local dependencies
	 */

	var Ruler      = __webpack_require__(385);
	var StateBlock = __webpack_require__(403);

	/**
	 * Parser rules
	 */

	var _rules = [
	  [ 'code',       __webpack_require__(404) ],
	  [ 'fences',     __webpack_require__(405),     [ 'paragraph', 'blockquote', 'list' ] ],
	  [ 'blockquote', __webpack_require__(406), [ 'paragraph', 'blockquote', 'list' ] ],
	  [ 'hr',         __webpack_require__(407),         [ 'paragraph', 'blockquote', 'list' ] ],
	  [ 'list',       __webpack_require__(408),       [ 'paragraph', 'blockquote' ] ],
	  [ 'footnote',   __webpack_require__(409),   [ 'paragraph' ] ],
	  [ 'heading',    __webpack_require__(410),    [ 'paragraph', 'blockquote' ] ],
	  [ 'lheading',   __webpack_require__(411) ],
	  [ 'htmlblock',  __webpack_require__(412),  [ 'paragraph', 'blockquote' ] ],
	  [ 'table',      __webpack_require__(414),      [ 'paragraph' ] ],
	  [ 'deflist',    __webpack_require__(415),    [ 'paragraph' ] ],
	  [ 'paragraph',  __webpack_require__(416) ]
	];

	/**
	 * Block Parser class
	 *
	 * @api private
	 */

	function ParserBlock() {
	  this.ruler = new Ruler();
	  for (var i = 0; i < _rules.length; i++) {
	    this.ruler.push(_rules[i][0], _rules[i][1], {
	      alt: (_rules[i][2] || []).slice()
	    });
	  }
	}

	/**
	 * Generate tokens for the given input range.
	 *
	 * @param  {Object} `state` Has properties like `src`, `parser`, `options` etc
	 * @param  {Number} `startLine`
	 * @param  {Number} `endLine`
	 * @api private
	 */

	ParserBlock.prototype.tokenize = function (state, startLine, endLine) {
	  var rules = this.ruler.getRules('');
	  var len = rules.length;
	  var line = startLine;
	  var hasEmptyLines = false;
	  var ok, i;

	  while (line < endLine) {
	    state.line = line = state.skipEmptyLines(line);
	    if (line >= endLine) {
	      break;
	    }

	    // Termination condition for nested calls.
	    // Nested calls currently used for blockquotes & lists
	    if (state.tShift[line] < state.blkIndent) {
	      break;
	    }

	    // Try all possible rules.
	    // On success, rule should:
	    //
	    // - update `state.line`
	    // - update `state.tokens`
	    // - return true

	    for (i = 0; i < len; i++) {
	      ok = rules[i](state, line, endLine, false);
	      if (ok) {
	        break;
	      }
	    }

	    // set state.tight iff we had an empty line before current tag
	    // i.e. latest empty line should not count
	    state.tight = !hasEmptyLines;

	    // paragraph might "eat" one newline after it in nested lists
	    if (state.isEmpty(state.line - 1)) {
	      hasEmptyLines = true;
	    }

	    line = state.line;

	    if (line < endLine && state.isEmpty(line)) {
	      hasEmptyLines = true;
	      line++;

	      // two empty lines should stop the parser in list mode
	      if (line < endLine && state.parentType === 'list' && state.isEmpty(line)) { break; }
	      state.line = line;
	    }
	  }
	};

	var TABS_SCAN_RE = /[\n\t]/g;
	var NEWLINES_RE  = /\r[\n\u0085]|[\u2424\u2028\u0085]/g;
	var SPACES_RE    = /\u00a0/g;

	/**
	 * Tokenize the given `str`.
	 *
	 * @param  {String} `str` Source string
	 * @param  {Object} `options`
	 * @param  {Object} `env`
	 * @param  {Array} `outTokens`
	 * @api private
	 */

	ParserBlock.prototype.parse = function (str, options, env, outTokens) {
	  var state, lineStart = 0, lastTabPos = 0;
	  if (!str) { return []; }

	  // Normalize spaces
	  str = str.replace(SPACES_RE, ' ');

	  // Normalize newlines
	  str = str.replace(NEWLINES_RE, '\n');

	  // Replace tabs with proper number of spaces (1..4)
	  if (str.indexOf('\t') >= 0) {
	    str = str.replace(TABS_SCAN_RE, function (match, offset) {
	      var result;
	      if (str.charCodeAt(offset) === 0x0A) {
	        lineStart = offset + 1;
	        lastTabPos = 0;
	        return match;
	      }
	      result = '    '.slice((offset - lineStart - lastTabPos) % 4);
	      lastTabPos = offset - lineStart + 1;
	      return result;
	    });
	  }

	  state = new StateBlock(str, this, options, env, outTokens);
	  this.tokenize(state, state.line, state.lineMax);
	};

	/**
	 * Expose `ParserBlock`
	 */

	module.exports = ParserBlock;


/***/ },
/* 403 */
/***/ function(module, exports) {

	// Parser state class

	'use strict';


	function StateBlock(src, parser, options, env, tokens) {
	  var ch, s, start, pos, len, indent, indent_found;

	  this.src = src;

	  // Shortcuts to simplify nested calls
	  this.parser = parser;

	  this.options = options;

	  this.env = env;

	  //
	  // Internal state vartiables
	  //

	  this.tokens = tokens;

	  this.bMarks = [];  // line begin offsets for fast jumps
	  this.eMarks = [];  // line end offsets for fast jumps
	  this.tShift = [];  // indent for each line

	  // block parser variables
	  this.blkIndent  = 0; // required block content indent
	                       // (for example, if we are in list)
	  this.line       = 0; // line index in src
	  this.lineMax    = 0; // lines count
	  this.tight      = false;  // loose/tight mode for lists
	  this.parentType = 'root'; // if `list`, block parser stops on two newlines
	  this.ddIndent   = -1; // indent of the current dd block (-1 if there isn't any)

	  this.level = 0;

	  // renderer
	  this.result = '';

	  // Create caches
	  // Generate markers.
	  s = this.src;
	  indent = 0;
	  indent_found = false;

	  for (start = pos = indent = 0, len = s.length; pos < len; pos++) {
	    ch = s.charCodeAt(pos);

	    if (!indent_found) {
	      if (ch === 0x20/* space */) {
	        indent++;
	        continue;
	      } else {
	        indent_found = true;
	      }
	    }

	    if (ch === 0x0A || pos === len - 1) {
	      if (ch !== 0x0A) { pos++; }
	      this.bMarks.push(start);
	      this.eMarks.push(pos);
	      this.tShift.push(indent);

	      indent_found = false;
	      indent = 0;
	      start = pos + 1;
	    }
	  }

	  // Push fake entry to simplify cache bounds checks
	  this.bMarks.push(s.length);
	  this.eMarks.push(s.length);
	  this.tShift.push(0);

	  this.lineMax = this.bMarks.length - 1; // don't count last fake line
	}

	StateBlock.prototype.isEmpty = function isEmpty(line) {
	  return this.bMarks[line] + this.tShift[line] >= this.eMarks[line];
	};

	StateBlock.prototype.skipEmptyLines = function skipEmptyLines(from) {
	  for (var max = this.lineMax; from < max; from++) {
	    if (this.bMarks[from] + this.tShift[from] < this.eMarks[from]) {
	      break;
	    }
	  }
	  return from;
	};

	// Skip spaces from given position.
	StateBlock.prototype.skipSpaces = function skipSpaces(pos) {
	  for (var max = this.src.length; pos < max; pos++) {
	    if (this.src.charCodeAt(pos) !== 0x20/* space */) { break; }
	  }
	  return pos;
	};

	// Skip char codes from given position
	StateBlock.prototype.skipChars = function skipChars(pos, code) {
	  for (var max = this.src.length; pos < max; pos++) {
	    if (this.src.charCodeAt(pos) !== code) { break; }
	  }
	  return pos;
	};

	// Skip char codes reverse from given position - 1
	StateBlock.prototype.skipCharsBack = function skipCharsBack(pos, code, min) {
	  if (pos <= min) { return pos; }

	  while (pos > min) {
	    if (code !== this.src.charCodeAt(--pos)) { return pos + 1; }
	  }
	  return pos;
	};

	// cut lines range from source.
	StateBlock.prototype.getLines = function getLines(begin, end, indent, keepLastLF) {
	  var i, first, last, queue, shift,
	      line = begin;

	  if (begin >= end) {
	    return '';
	  }

	  // Opt: don't use push queue for single line;
	  if (line + 1 === end) {
	    first = this.bMarks[line] + Math.min(this.tShift[line], indent);
	    last = keepLastLF ? this.eMarks[line] + 1 : this.eMarks[line];
	    return this.src.slice(first, last);
	  }

	  queue = new Array(end - begin);

	  for (i = 0; line < end; line++, i++) {
	    shift = this.tShift[line];
	    if (shift > indent) { shift = indent; }
	    if (shift < 0) { shift = 0; }

	    first = this.bMarks[line] + shift;

	    if (line + 1 < end || keepLastLF) {
	      // No need for bounds check because we have fake entry on tail.
	      last = this.eMarks[line] + 1;
	    } else {
	      last = this.eMarks[line];
	    }

	    queue[i] = this.src.slice(first, last);
	  }

	  return queue.join('');
	};


	module.exports = StateBlock;


/***/ },
/* 404 */
/***/ function(module, exports) {

	// Code block (4 spaces padded)

	'use strict';


	module.exports = function code(state, startLine, endLine/*, silent*/) {
	  var nextLine, last;

	  if (state.tShift[startLine] - state.blkIndent < 4) { return false; }

	  last = nextLine = startLine + 1;

	  while (nextLine < endLine) {
	    if (state.isEmpty(nextLine)) {
	      nextLine++;
	      continue;
	    }
	    if (state.tShift[nextLine] - state.blkIndent >= 4) {
	      nextLine++;
	      last = nextLine;
	      continue;
	    }
	    break;
	  }

	  state.line = nextLine;
	  state.tokens.push({
	    type: 'code',
	    content: state.getLines(startLine, last, 4 + state.blkIndent, true),
	    block: true,
	    lines: [ startLine, state.line ],
	    level: state.level
	  });

	  return true;
	};


/***/ },
/* 405 */
/***/ function(module, exports) {

	// fences (``` lang, ~~~ lang)

	'use strict';


	module.exports = function fences(state, startLine, endLine, silent) {
	  var marker, len, params, nextLine, mem,
	      haveEndMarker = false,
	      pos = state.bMarks[startLine] + state.tShift[startLine],
	      max = state.eMarks[startLine];

	  if (pos + 3 > max) { return false; }

	  marker = state.src.charCodeAt(pos);

	  if (marker !== 0x7E/* ~ */ && marker !== 0x60 /* ` */) {
	    return false;
	  }

	  // scan marker length
	  mem = pos;
	  pos = state.skipChars(pos, marker);

	  len = pos - mem;

	  if (len < 3) { return false; }

	  params = state.src.slice(pos, max).trim();

	  if (params.indexOf('`') >= 0) { return false; }

	  // Since start is found, we can report success here in validation mode
	  if (silent) { return true; }

	  // search end of block
	  nextLine = startLine;

	  for (;;) {
	    nextLine++;
	    if (nextLine >= endLine) {
	      // unclosed block should be autoclosed by end of document.
	      // also block seems to be autoclosed by end of parent
	      break;
	    }

	    pos = mem = state.bMarks[nextLine] + state.tShift[nextLine];
	    max = state.eMarks[nextLine];

	    if (pos < max && state.tShift[nextLine] < state.blkIndent) {
	      // non-empty line with negative indent should stop the list:
	      // - ```
	      //  test
	      break;
	    }

	    if (state.src.charCodeAt(pos) !== marker) { continue; }

	    if (state.tShift[nextLine] - state.blkIndent >= 4) {
	      // closing fence should be indented less than 4 spaces
	      continue;
	    }

	    pos = state.skipChars(pos, marker);

	    // closing code fence must be at least as long as the opening one
	    if (pos - mem < len) { continue; }

	    // make sure tail has spaces only
	    pos = state.skipSpaces(pos);

	    if (pos < max) { continue; }

	    haveEndMarker = true;
	    // found!
	    break;
	  }

	  // If a fence has heading spaces, they should be removed from its inner block
	  len = state.tShift[startLine];

	  state.line = nextLine + (haveEndMarker ? 1 : 0);
	  state.tokens.push({
	    type: 'fence',
	    params: params,
	    content: state.getLines(startLine + 1, nextLine, len, true),
	    lines: [ startLine, state.line ],
	    level: state.level
	  });

	  return true;
	};


/***/ },
/* 406 */
/***/ function(module, exports) {

	// Block quotes

	'use strict';


	module.exports = function blockquote(state, startLine, endLine, silent) {
	  var nextLine, lastLineEmpty, oldTShift, oldBMarks, oldIndent, oldParentType, lines,
	      terminatorRules,
	      i, l, terminate,
	      pos = state.bMarks[startLine] + state.tShift[startLine],
	      max = state.eMarks[startLine];

	  if (pos > max) { return false; }

	  // check the block quote marker
	  if (state.src.charCodeAt(pos++) !== 0x3E/* > */) { return false; }

	  if (state.level >= state.options.maxNesting) { return false; }

	  // we know that it's going to be a valid blockquote,
	  // so no point trying to find the end of it in silent mode
	  if (silent) { return true; }

	  // skip one optional space after '>'
	  if (state.src.charCodeAt(pos) === 0x20) { pos++; }

	  oldIndent = state.blkIndent;
	  state.blkIndent = 0;

	  oldBMarks = [ state.bMarks[startLine] ];
	  state.bMarks[startLine] = pos;

	  // check if we have an empty blockquote
	  pos = pos < max ? state.skipSpaces(pos) : pos;
	  lastLineEmpty = pos >= max;

	  oldTShift = [ state.tShift[startLine] ];
	  state.tShift[startLine] = pos - state.bMarks[startLine];

	  terminatorRules = state.parser.ruler.getRules('blockquote');

	  // Search the end of the block
	  //
	  // Block ends with either:
	  //  1. an empty line outside:
	  //     ```
	  //     > test
	  //
	  //     ```
	  //  2. an empty line inside:
	  //     ```
	  //     >
	  //     test
	  //     ```
	  //  3. another tag
	  //     ```
	  //     > test
	  //      - - -
	  //     ```
	  for (nextLine = startLine + 1; nextLine < endLine; nextLine++) {
	    pos = state.bMarks[nextLine] + state.tShift[nextLine];
	    max = state.eMarks[nextLine];

	    if (pos >= max) {
	      // Case 1: line is not inside the blockquote, and this line is empty.
	      break;
	    }

	    if (state.src.charCodeAt(pos++) === 0x3E/* > */) {
	      // This line is inside the blockquote.

	      // skip one optional space after '>'
	      if (state.src.charCodeAt(pos) === 0x20) { pos++; }

	      oldBMarks.push(state.bMarks[nextLine]);
	      state.bMarks[nextLine] = pos;

	      pos = pos < max ? state.skipSpaces(pos) : pos;
	      lastLineEmpty = pos >= max;

	      oldTShift.push(state.tShift[nextLine]);
	      state.tShift[nextLine] = pos - state.bMarks[nextLine];
	      continue;
	    }

	    // Case 2: line is not inside the blockquote, and the last line was empty.
	    if (lastLineEmpty) { break; }

	    // Case 3: another tag found.
	    terminate = false;
	    for (i = 0, l = terminatorRules.length; i < l; i++) {
	      if (terminatorRules[i](state, nextLine, endLine, true)) {
	        terminate = true;
	        break;
	      }
	    }
	    if (terminate) { break; }

	    oldBMarks.push(state.bMarks[nextLine]);
	    oldTShift.push(state.tShift[nextLine]);

	    // A negative number means that this is a paragraph continuation;
	    //
	    // Any negative number will do the job here, but it's better for it
	    // to be large enough to make any bugs obvious.
	    state.tShift[nextLine] = -1337;
	  }

	  oldParentType = state.parentType;
	  state.parentType = 'blockquote';
	  state.tokens.push({
	    type: 'blockquote_open',
	    lines: lines = [ startLine, 0 ],
	    level: state.level++
	  });
	  state.parser.tokenize(state, startLine, nextLine);
	  state.tokens.push({
	    type: 'blockquote_close',
	    level: --state.level
	  });
	  state.parentType = oldParentType;
	  lines[1] = state.line;

	  // Restore original tShift; this might not be necessary since the parser
	  // has already been here, but just to make sure we can do that.
	  for (i = 0; i < oldTShift.length; i++) {
	    state.bMarks[i + startLine] = oldBMarks[i];
	    state.tShift[i + startLine] = oldTShift[i];
	  }
	  state.blkIndent = oldIndent;

	  return true;
	};


/***/ },
/* 407 */
/***/ function(module, exports) {

	// Horizontal rule

	'use strict';


	module.exports = function hr(state, startLine, endLine, silent) {
	  var marker, cnt, ch,
	      pos = state.bMarks[startLine],
	      max = state.eMarks[startLine];

	  pos += state.tShift[startLine];

	  if (pos > max) { return false; }

	  marker = state.src.charCodeAt(pos++);

	  // Check hr marker
	  if (marker !== 0x2A/* * */ &&
	      marker !== 0x2D/* - */ &&
	      marker !== 0x5F/* _ */) {
	    return false;
	  }

	  // markers can be mixed with spaces, but there should be at least 3 one

	  cnt = 1;
	  while (pos < max) {
	    ch = state.src.charCodeAt(pos++);
	    if (ch !== marker && ch !== 0x20/* space */) { return false; }
	    if (ch === marker) { cnt++; }
	  }

	  if (cnt < 3) { return false; }

	  if (silent) { return true; }

	  state.line = startLine + 1;
	  state.tokens.push({
	    type: 'hr',
	    lines: [ startLine, state.line ],
	    level: state.level
	  });

	  return true;
	};


/***/ },
/* 408 */
/***/ function(module, exports) {

	// Lists

	'use strict';


	// Search `[-+*][\n ]`, returns next pos arter marker on success
	// or -1 on fail.
	function skipBulletListMarker(state, startLine) {
	  var marker, pos, max;

	  pos = state.bMarks[startLine] + state.tShift[startLine];
	  max = state.eMarks[startLine];

	  if (pos >= max) { return -1; }

	  marker = state.src.charCodeAt(pos++);
	  // Check bullet
	  if (marker !== 0x2A/* * */ &&
	      marker !== 0x2D/* - */ &&
	      marker !== 0x2B/* + */) {
	    return -1;
	  }

	  if (pos < max && state.src.charCodeAt(pos) !== 0x20) {
	    // " 1.test " - is not a list item
	    return -1;
	  }

	  return pos;
	}

	// Search `\d+[.)][\n ]`, returns next pos arter marker on success
	// or -1 on fail.
	function skipOrderedListMarker(state, startLine) {
	  var ch,
	      pos = state.bMarks[startLine] + state.tShift[startLine],
	      max = state.eMarks[startLine];

	  if (pos + 1 >= max) { return -1; }

	  ch = state.src.charCodeAt(pos++);

	  if (ch < 0x30/* 0 */ || ch > 0x39/* 9 */) { return -1; }

	  for (;;) {
	    // EOL -> fail
	    if (pos >= max) { return -1; }

	    ch = state.src.charCodeAt(pos++);

	    if (ch >= 0x30/* 0 */ && ch <= 0x39/* 9 */) {
	      continue;
	    }

	    // found valid marker
	    if (ch === 0x29/* ) */ || ch === 0x2e/* . */) {
	      break;
	    }

	    return -1;
	  }


	  if (pos < max && state.src.charCodeAt(pos) !== 0x20/* space */) {
	    // " 1.test " - is not a list item
	    return -1;
	  }
	  return pos;
	}

	function markTightParagraphs(state, idx) {
	  var i, l,
	      level = state.level + 2;

	  for (i = idx + 2, l = state.tokens.length - 2; i < l; i++) {
	    if (state.tokens[i].level === level && state.tokens[i].type === 'paragraph_open') {
	      state.tokens[i + 2].tight = true;
	      state.tokens[i].tight = true;
	      i += 2;
	    }
	  }
	}


	module.exports = function list(state, startLine, endLine, silent) {
	  var nextLine,
	      indent,
	      oldTShift,
	      oldIndent,
	      oldTight,
	      oldParentType,
	      start,
	      posAfterMarker,
	      max,
	      indentAfterMarker,
	      markerValue,
	      markerCharCode,
	      isOrdered,
	      contentStart,
	      listTokIdx,
	      prevEmptyEnd,
	      listLines,
	      itemLines,
	      tight = true,
	      terminatorRules,
	      i, l, terminate;

	  // Detect list type and position after marker
	  if ((posAfterMarker = skipOrderedListMarker(state, startLine)) >= 0) {
	    isOrdered = true;
	  } else if ((posAfterMarker = skipBulletListMarker(state, startLine)) >= 0) {
	    isOrdered = false;
	  } else {
	    return false;
	  }

	  if (state.level >= state.options.maxNesting) { return false; }

	  // We should terminate list on style change. Remember first one to compare.
	  markerCharCode = state.src.charCodeAt(posAfterMarker - 1);

	  // For validation mode we can terminate immediately
	  if (silent) { return true; }

	  // Start list
	  listTokIdx = state.tokens.length;

	  if (isOrdered) {
	    start = state.bMarks[startLine] + state.tShift[startLine];
	    markerValue = Number(state.src.substr(start, posAfterMarker - start - 1));

	    state.tokens.push({
	      type: 'ordered_list_open',
	      order: markerValue,
	      lines: listLines = [ startLine, 0 ],
	      level: state.level++
	    });

	  } else {
	    state.tokens.push({
	      type: 'bullet_list_open',
	      lines: listLines = [ startLine, 0 ],
	      level: state.level++
	    });
	  }

	  //
	  // Iterate list items
	  //

	  nextLine = startLine;
	  prevEmptyEnd = false;
	  terminatorRules = state.parser.ruler.getRules('list');

	  while (nextLine < endLine) {
	    contentStart = state.skipSpaces(posAfterMarker);
	    max = state.eMarks[nextLine];

	    if (contentStart >= max) {
	      // trimming space in "-    \n  3" case, indent is 1 here
	      indentAfterMarker = 1;
	    } else {
	      indentAfterMarker = contentStart - posAfterMarker;
	    }

	    // If we have more than 4 spaces, the indent is 1
	    // (the rest is just indented code block)
	    if (indentAfterMarker > 4) { indentAfterMarker = 1; }

	    // If indent is less than 1, assume that it's one, example:
	    //  "-\n  test"
	    if (indentAfterMarker < 1) { indentAfterMarker = 1; }

	    // "  -  test"
	    //  ^^^^^ - calculating total length of this thing
	    indent = (posAfterMarker - state.bMarks[nextLine]) + indentAfterMarker;

	    // Run subparser & write tokens
	    state.tokens.push({
	      type: 'list_item_open',
	      lines: itemLines = [ startLine, 0 ],
	      level: state.level++
	    });

	    oldIndent = state.blkIndent;
	    oldTight = state.tight;
	    oldTShift = state.tShift[startLine];
	    oldParentType = state.parentType;
	    state.tShift[startLine] = contentStart - state.bMarks[startLine];
	    state.blkIndent = indent;
	    state.tight = true;
	    state.parentType = 'list';

	    state.parser.tokenize(state, startLine, endLine, true);

	    // If any of list item is tight, mark list as tight
	    if (!state.tight || prevEmptyEnd) {
	      tight = false;
	    }
	    // Item become loose if finish with empty line,
	    // but we should filter last element, because it means list finish
	    prevEmptyEnd = (state.line - startLine) > 1 && state.isEmpty(state.line - 1);

	    state.blkIndent = oldIndent;
	    state.tShift[startLine] = oldTShift;
	    state.tight = oldTight;
	    state.parentType = oldParentType;

	    state.tokens.push({
	      type: 'list_item_close',
	      level: --state.level
	    });

	    nextLine = startLine = state.line;
	    itemLines[1] = nextLine;
	    contentStart = state.bMarks[startLine];

	    if (nextLine >= endLine) { break; }

	    if (state.isEmpty(nextLine)) {
	      break;
	    }

	    //
	    // Try to check if list is terminated or continued.
	    //
	    if (state.tShift[nextLine] < state.blkIndent) { break; }

	    // fail if terminating block found
	    terminate = false;
	    for (i = 0, l = terminatorRules.length; i < l; i++) {
	      if (terminatorRules[i](state, nextLine, endLine, true)) {
	        terminate = true;
	        break;
	      }
	    }
	    if (terminate) { break; }

	    // fail if list has another type
	    if (isOrdered) {
	      posAfterMarker = skipOrderedListMarker(state, nextLine);
	      if (posAfterMarker < 0) { break; }
	    } else {
	      posAfterMarker = skipBulletListMarker(state, nextLine);
	      if (posAfterMarker < 0) { break; }
	    }

	    if (markerCharCode !== state.src.charCodeAt(posAfterMarker - 1)) { break; }
	  }

	  // Finilize list
	  state.tokens.push({
	    type: isOrdered ? 'ordered_list_close' : 'bullet_list_close',
	    level: --state.level
	  });
	  listLines[1] = nextLine;

	  state.line = nextLine;

	  // mark paragraphs tight if needed
	  if (tight) {
	    markTightParagraphs(state, listTokIdx);
	  }

	  return true;
	};


/***/ },
/* 409 */
/***/ function(module, exports) {

	// Process footnote reference list

	'use strict';


	module.exports = function footnote(state, startLine, endLine, silent) {
	  var oldBMark, oldTShift, oldParentType, pos, label,
	      start = state.bMarks[startLine] + state.tShift[startLine],
	      max = state.eMarks[startLine];

	  // line should be at least 5 chars - "[^x]:"
	  if (start + 4 > max) { return false; }

	  if (state.src.charCodeAt(start) !== 0x5B/* [ */) { return false; }
	  if (state.src.charCodeAt(start + 1) !== 0x5E/* ^ */) { return false; }
	  if (state.level >= state.options.maxNesting) { return false; }

	  for (pos = start + 2; pos < max; pos++) {
	    if (state.src.charCodeAt(pos) === 0x20) { return false; }
	    if (state.src.charCodeAt(pos) === 0x5D /* ] */) {
	      break;
	    }
	  }

	  if (pos === start + 2) { return false; } // no empty footnote labels
	  if (pos + 1 >= max || state.src.charCodeAt(++pos) !== 0x3A /* : */) { return false; }
	  if (silent) { return true; }
	  pos++;

	  if (!state.env.footnotes) { state.env.footnotes = {}; }
	  if (!state.env.footnotes.refs) { state.env.footnotes.refs = {}; }
	  label = state.src.slice(start + 2, pos - 2);
	  state.env.footnotes.refs[':' + label] = -1;

	  state.tokens.push({
	    type: 'footnote_reference_open',
	    label: label,
	    level: state.level++
	  });

	  oldBMark = state.bMarks[startLine];
	  oldTShift = state.tShift[startLine];
	  oldParentType = state.parentType;
	  state.tShift[startLine] = state.skipSpaces(pos) - pos;
	  state.bMarks[startLine] = pos;
	  state.blkIndent += 4;
	  state.parentType = 'footnote';

	  if (state.tShift[startLine] < state.blkIndent) {
	    state.tShift[startLine] += state.blkIndent;
	    state.bMarks[startLine] -= state.blkIndent;
	  }

	  state.parser.tokenize(state, startLine, endLine, true);

	  state.parentType = oldParentType;
	  state.blkIndent -= 4;
	  state.tShift[startLine] = oldTShift;
	  state.bMarks[startLine] = oldBMark;

	  state.tokens.push({
	    type: 'footnote_reference_close',
	    level: --state.level
	  });

	  return true;
	};


/***/ },
/* 410 */
/***/ function(module, exports) {

	// heading (#, ##, ...)

	'use strict';


	module.exports = function heading(state, startLine, endLine, silent) {
	  var ch, level, tmp,
	      pos = state.bMarks[startLine] + state.tShift[startLine],
	      max = state.eMarks[startLine];

	  if (pos >= max) { return false; }

	  ch  = state.src.charCodeAt(pos);

	  if (ch !== 0x23/* # */ || pos >= max) { return false; }

	  // count heading level
	  level = 1;
	  ch = state.src.charCodeAt(++pos);
	  while (ch === 0x23/* # */ && pos < max && level <= 6) {
	    level++;
	    ch = state.src.charCodeAt(++pos);
	  }

	  if (level > 6 || (pos < max && ch !== 0x20/* space */)) { return false; }

	  if (silent) { return true; }

	  // Let's cut tails like '    ###  ' from the end of string

	  max = state.skipCharsBack(max, 0x20, pos); // space
	  tmp = state.skipCharsBack(max, 0x23, pos); // #
	  if (tmp > pos && state.src.charCodeAt(tmp - 1) === 0x20/* space */) {
	    max = tmp;
	  }

	  state.line = startLine + 1;

	  state.tokens.push({ type: 'heading_open',
	    hLevel: level,
	    lines: [ startLine, state.line ],
	    level: state.level
	  });

	  // only if header is not empty
	  if (pos < max) {
	    state.tokens.push({
	      type: 'inline',
	      content: state.src.slice(pos, max).trim(),
	      level: state.level + 1,
	      lines: [ startLine, state.line ],
	      children: []
	    });
	  }
	  state.tokens.push({ type: 'heading_close', hLevel: level, level: state.level });

	  return true;
	};


/***/ },
/* 411 */
/***/ function(module, exports) {

	// lheading (---, ===)

	'use strict';


	module.exports = function lheading(state, startLine, endLine/*, silent*/) {
	  var marker, pos, max,
	      next = startLine + 1;

	  if (next >= endLine) { return false; }
	  if (state.tShift[next] < state.blkIndent) { return false; }

	  // Scan next line

	  if (state.tShift[next] - state.blkIndent > 3) { return false; }

	  pos = state.bMarks[next] + state.tShift[next];
	  max = state.eMarks[next];

	  if (pos >= max) { return false; }

	  marker = state.src.charCodeAt(pos);

	  if (marker !== 0x2D/* - */ && marker !== 0x3D/* = */) { return false; }

	  pos = state.skipChars(pos, marker);

	  pos = state.skipSpaces(pos);

	  if (pos < max) { return false; }

	  pos = state.bMarks[startLine] + state.tShift[startLine];

	  state.line = next + 1;
	  state.tokens.push({
	    type: 'heading_open',
	    hLevel: marker === 0x3D/* = */ ? 1 : 2,
	    lines: [ startLine, state.line ],
	    level: state.level
	  });
	  state.tokens.push({
	    type: 'inline',
	    content: state.src.slice(pos, state.eMarks[startLine]).trim(),
	    level: state.level + 1,
	    lines: [ startLine, state.line - 1 ],
	    children: []
	  });
	  state.tokens.push({
	    type: 'heading_close',
	    hLevel: marker === 0x3D/* = */ ? 1 : 2,
	    level: state.level
	  });

	  return true;
	};


/***/ },
/* 412 */
/***/ function(module, exports, __webpack_require__) {

	// HTML block

	'use strict';


	var block_names = __webpack_require__(413);


	var HTML_TAG_OPEN_RE = /^<([a-zA-Z]{1,15})[\s\/>]/;
	var HTML_TAG_CLOSE_RE = /^<\/([a-zA-Z]{1,15})[\s>]/;

	function isLetter(ch) {
	  /*eslint no-bitwise:0*/
	  var lc = ch | 0x20; // to lower case
	  return (lc >= 0x61/* a */) && (lc <= 0x7a/* z */);
	}

	module.exports = function htmlblock(state, startLine, endLine, silent) {
	  var ch, match, nextLine,
	      pos = state.bMarks[startLine],
	      max = state.eMarks[startLine],
	      shift = state.tShift[startLine];

	  pos += shift;

	  if (!state.options.html) { return false; }

	  if (shift > 3 || pos + 2 >= max) { return false; }

	  if (state.src.charCodeAt(pos) !== 0x3C/* < */) { return false; }

	  ch = state.src.charCodeAt(pos + 1);

	  if (ch === 0x21/* ! */ || ch === 0x3F/* ? */) {
	    // Directive start / comment start / processing instruction start
	    if (silent) { return true; }

	  } else if (ch === 0x2F/* / */ || isLetter(ch)) {

	    // Probably start or end of tag
	    if (ch === 0x2F/* \ */) {
	      // closing tag
	      match = state.src.slice(pos, max).match(HTML_TAG_CLOSE_RE);
	      if (!match) { return false; }
	    } else {
	      // opening tag
	      match = state.src.slice(pos, max).match(HTML_TAG_OPEN_RE);
	      if (!match) { return false; }
	    }
	    // Make sure tag name is valid
	    if (block_names[match[1].toLowerCase()] !== true) { return false; }
	    if (silent) { return true; }

	  } else {
	    return false;
	  }

	  // If we are here - we detected HTML block.
	  // Let's roll down till empty line (block end).
	  nextLine = startLine + 1;
	  while (nextLine < state.lineMax && !state.isEmpty(nextLine)) {
	    nextLine++;
	  }

	  state.line = nextLine;
	  state.tokens.push({
	    type: 'htmlblock',
	    level: state.level,
	    lines: [ startLine, state.line ],
	    content: state.getLines(startLine, nextLine, 0, true)
	  });

	  return true;
	};


/***/ },
/* 413 */
/***/ function(module, exports) {

	// List of valid html blocks names, accorting to commonmark spec
	// http://jgm.github.io/CommonMark/spec.html#html-blocks

	'use strict';

	var html_blocks = {};

	[
	  'article',
	  'aside',
	  'button',
	  'blockquote',
	  'body',
	  'canvas',
	  'caption',
	  'col',
	  'colgroup',
	  'dd',
	  'div',
	  'dl',
	  'dt',
	  'embed',
	  'fieldset',
	  'figcaption',
	  'figure',
	  'footer',
	  'form',
	  'h1',
	  'h2',
	  'h3',
	  'h4',
	  'h5',
	  'h6',
	  'header',
	  'hgroup',
	  'hr',
	  'iframe',
	  'li',
	  'map',
	  'object',
	  'ol',
	  'output',
	  'p',
	  'pre',
	  'progress',
	  'script',
	  'section',
	  'style',
	  'table',
	  'tbody',
	  'td',
	  'textarea',
	  'tfoot',
	  'th',
	  'tr',
	  'thead',
	  'ul',
	  'video'
	].forEach(function (name) { html_blocks[name] = true; });


	module.exports = html_blocks;


/***/ },
/* 414 */
/***/ function(module, exports) {

	// GFM table, non-standard

	'use strict';


	function getLine(state, line) {
	  var pos = state.bMarks[line] + state.blkIndent,
	      max = state.eMarks[line];

	  return state.src.substr(pos, max - pos);
	}

	module.exports = function table(state, startLine, endLine, silent) {
	  var ch, lineText, pos, i, nextLine, rows, cell,
	      aligns, t, tableLines, tbodyLines;

	  // should have at least three lines
	  if (startLine + 2 > endLine) { return false; }

	  nextLine = startLine + 1;

	  if (state.tShift[nextLine] < state.blkIndent) { return false; }

	  // first character of the second line should be '|' or '-'

	  pos = state.bMarks[nextLine] + state.tShift[nextLine];
	  if (pos >= state.eMarks[nextLine]) { return false; }

	  ch = state.src.charCodeAt(pos);
	  if (ch !== 0x7C/* | */ && ch !== 0x2D/* - */ && ch !== 0x3A/* : */) { return false; }

	  lineText = getLine(state, startLine + 1);
	  if (!/^[-:| ]+$/.test(lineText)) { return false; }

	  rows = lineText.split('|');
	  if (rows <= 2) { return false; }
	  aligns = [];
	  for (i = 0; i < rows.length; i++) {
	    t = rows[i].trim();
	    if (!t) {
	      // allow empty columns before and after table, but not in between columns;
	      // e.g. allow ` |---| `, disallow ` ---||--- `
	      if (i === 0 || i === rows.length - 1) {
	        continue;
	      } else {
	        return false;
	      }
	    }

	    if (!/^:?-+:?$/.test(t)) { return false; }
	    if (t.charCodeAt(t.length - 1) === 0x3A/* : */) {
	      aligns.push(t.charCodeAt(0) === 0x3A/* : */ ? 'center' : 'right');
	    } else if (t.charCodeAt(0) === 0x3A/* : */) {
	      aligns.push('left');
	    } else {
	      aligns.push('');
	    }
	  }

	  lineText = getLine(state, startLine).trim();
	  if (lineText.indexOf('|') === -1) { return false; }
	  rows = lineText.replace(/^\||\|$/g, '').split('|');
	  if (aligns.length !== rows.length) { return false; }
	  if (silent) { return true; }

	  state.tokens.push({
	    type: 'table_open',
	    lines: tableLines = [ startLine, 0 ],
	    level: state.level++
	  });
	  state.tokens.push({
	    type: 'thead_open',
	    lines: [ startLine, startLine + 1 ],
	    level: state.level++
	  });

	  state.tokens.push({
	    type: 'tr_open',
	    lines: [ startLine, startLine + 1 ],
	    level: state.level++
	  });
	  for (i = 0; i < rows.length; i++) {
	    state.tokens.push({
	      type: 'th_open',
	      align: aligns[i],
	      lines: [ startLine, startLine + 1 ],
	      level: state.level++
	    });
	    state.tokens.push({
	      type: 'inline',
	      content: rows[i].trim(),
	      lines: [ startLine, startLine + 1 ],
	      level: state.level,
	      children: []
	    });
	    state.tokens.push({ type: 'th_close', level: --state.level });
	  }
	  state.tokens.push({ type: 'tr_close', level: --state.level });
	  state.tokens.push({ type: 'thead_close', level: --state.level });

	  state.tokens.push({
	    type: 'tbody_open',
	    lines: tbodyLines = [ startLine + 2, 0 ],
	    level: state.level++
	  });

	  for (nextLine = startLine + 2; nextLine < endLine; nextLine++) {
	    if (state.tShift[nextLine] < state.blkIndent) { break; }

	    lineText = getLine(state, nextLine).trim();
	    if (lineText.indexOf('|') === -1) { break; }
	    rows = lineText.replace(/^\||\|$/g, '').split('|');

	    state.tokens.push({ type: 'tr_open', level: state.level++ });
	    for (i = 0; i < rows.length; i++) {
	      state.tokens.push({ type: 'td_open', align: aligns[i], level: state.level++ });
	      // 0x7c === '|'
	      cell = rows[i].substring(
	          rows[i].charCodeAt(0) === 0x7c ? 1 : 0,
	          rows[i].charCodeAt(rows[i].length - 1) === 0x7c ? rows[i].length - 1 : rows[i].length
	      ).trim();
	      state.tokens.push({
	        type: 'inline',
	        content: cell,
	        level: state.level,
	        children: []
	      });
	      state.tokens.push({ type: 'td_close', level: --state.level });
	    }
	    state.tokens.push({ type: 'tr_close', level: --state.level });
	  }
	  state.tokens.push({ type: 'tbody_close', level: --state.level });
	  state.tokens.push({ type: 'table_close', level: --state.level });

	  tableLines[1] = tbodyLines[1] = nextLine;
	  state.line = nextLine;
	  return true;
	};


/***/ },
/* 415 */
/***/ function(module, exports) {

	// Definition lists

	'use strict';


	// Search `[:~][\n ]`, returns next pos after marker on success
	// or -1 on fail.
	function skipMarker(state, line) {
	  var pos, marker,
	      start = state.bMarks[line] + state.tShift[line],
	      max = state.eMarks[line];

	  if (start >= max) { return -1; }

	  // Check bullet
	  marker = state.src.charCodeAt(start++);
	  if (marker !== 0x7E/* ~ */ && marker !== 0x3A/* : */) { return -1; }

	  pos = state.skipSpaces(start);

	  // require space after ":"
	  if (start === pos) { return -1; }

	  // no empty definitions, e.g. "  : "
	  if (pos >= max) { return -1; }

	  return pos;
	}

	function markTightParagraphs(state, idx) {
	  var i, l,
	      level = state.level + 2;

	  for (i = idx + 2, l = state.tokens.length - 2; i < l; i++) {
	    if (state.tokens[i].level === level && state.tokens[i].type === 'paragraph_open') {
	      state.tokens[i + 2].tight = true;
	      state.tokens[i].tight = true;
	      i += 2;
	    }
	  }
	}

	module.exports = function deflist(state, startLine, endLine, silent) {
	  var contentStart,
	      ddLine,
	      dtLine,
	      itemLines,
	      listLines,
	      listTokIdx,
	      nextLine,
	      oldIndent,
	      oldDDIndent,
	      oldParentType,
	      oldTShift,
	      oldTight,
	      prevEmptyEnd,
	      tight;

	  if (silent) {
	    // quirk: validation mode validates a dd block only, not a whole deflist
	    if (state.ddIndent < 0) { return false; }
	    return skipMarker(state, startLine) >= 0;
	  }

	  nextLine = startLine + 1;
	  if (state.isEmpty(nextLine)) {
	    if (++nextLine > endLine) { return false; }
	  }

	  if (state.tShift[nextLine] < state.blkIndent) { return false; }
	  contentStart = skipMarker(state, nextLine);
	  if (contentStart < 0) { return false; }

	  if (state.level >= state.options.maxNesting) { return false; }

	  // Start list
	  listTokIdx = state.tokens.length;

	  state.tokens.push({
	    type: 'dl_open',
	    lines: listLines = [ startLine, 0 ],
	    level: state.level++
	  });

	  //
	  // Iterate list items
	  //

	  dtLine = startLine;
	  ddLine = nextLine;

	  // One definition list can contain multiple DTs,
	  // and one DT can be followed by multiple DDs.
	  //
	  // Thus, there is two loops here, and label is
	  // needed to break out of the second one
	  //
	  /*eslint no-labels:0,block-scoped-var:0*/
	  OUTER:
	  for (;;) {
	    tight = true;
	    prevEmptyEnd = false;

	    state.tokens.push({
	      type: 'dt_open',
	      lines: [ dtLine, dtLine ],
	      level: state.level++
	    });
	    state.tokens.push({
	      type: 'inline',
	      content: state.getLines(dtLine, dtLine + 1, state.blkIndent, false).trim(),
	      level: state.level + 1,
	      lines: [ dtLine, dtLine ],
	      children: []
	    });
	    state.tokens.push({
	      type: 'dt_close',
	      level: --state.level
	    });

	    for (;;) {
	      state.tokens.push({
	        type: 'dd_open',
	        lines: itemLines = [ nextLine, 0 ],
	        level: state.level++
	      });

	      oldTight = state.tight;
	      oldDDIndent = state.ddIndent;
	      oldIndent = state.blkIndent;
	      oldTShift = state.tShift[ddLine];
	      oldParentType = state.parentType;
	      state.blkIndent = state.ddIndent = state.tShift[ddLine] + 2;
	      state.tShift[ddLine] = contentStart - state.bMarks[ddLine];
	      state.tight = true;
	      state.parentType = 'deflist';

	      state.parser.tokenize(state, ddLine, endLine, true);

	      // If any of list item is tight, mark list as tight
	      if (!state.tight || prevEmptyEnd) {
	        tight = false;
	      }
	      // Item become loose if finish with empty line,
	      // but we should filter last element, because it means list finish
	      prevEmptyEnd = (state.line - ddLine) > 1 && state.isEmpty(state.line - 1);

	      state.tShift[ddLine] = oldTShift;
	      state.tight = oldTight;
	      state.parentType = oldParentType;
	      state.blkIndent = oldIndent;
	      state.ddIndent = oldDDIndent;

	      state.tokens.push({
	        type: 'dd_close',
	        level: --state.level
	      });

	      itemLines[1] = nextLine = state.line;

	      if (nextLine >= endLine) { break OUTER; }

	      if (state.tShift[nextLine] < state.blkIndent) { break OUTER; }
	      contentStart = skipMarker(state, nextLine);
	      if (contentStart < 0) { break; }

	      ddLine = nextLine;

	      // go to the next loop iteration:
	      // insert DD tag and repeat checking
	    }

	    if (nextLine >= endLine) { break; }
	    dtLine = nextLine;

	    if (state.isEmpty(dtLine)) { break; }
	    if (state.tShift[dtLine] < state.blkIndent) { break; }

	    ddLine = dtLine + 1;
	    if (ddLine >= endLine) { break; }
	    if (state.isEmpty(ddLine)) { ddLine++; }
	    if (ddLine >= endLine) { break; }

	    if (state.tShift[ddLine] < state.blkIndent) { break; }
	    contentStart = skipMarker(state, ddLine);
	    if (contentStart < 0) { break; }

	    // go to the next loop iteration:
	    // insert DT and DD tags and repeat checking
	  }

	  // Finilize list
	  state.tokens.push({
	    type: 'dl_close',
	    level: --state.level
	  });
	  listLines[1] = nextLine;

	  state.line = nextLine;

	  // mark paragraphs tight if needed
	  if (tight) {
	    markTightParagraphs(state, listTokIdx);
	  }

	  return true;
	};


/***/ },
/* 416 */
/***/ function(module, exports) {

	// Paragraph

	'use strict';


	module.exports = function paragraph(state, startLine/*, endLine*/) {
	  var endLine, content, terminate, i, l,
	      nextLine = startLine + 1,
	      terminatorRules;

	  endLine = state.lineMax;

	  // jump line-by-line until empty one or EOF
	  if (nextLine < endLine && !state.isEmpty(nextLine)) {
	    terminatorRules = state.parser.ruler.getRules('paragraph');

	    for (; nextLine < endLine && !state.isEmpty(nextLine); nextLine++) {
	      // this would be a code block normally, but after paragraph
	      // it's considered a lazy continuation regardless of what's there
	      if (state.tShift[nextLine] - state.blkIndent > 3) { continue; }

	      // Some tags can terminate paragraph without empty line.
	      terminate = false;
	      for (i = 0, l = terminatorRules.length; i < l; i++) {
	        if (terminatorRules[i](state, nextLine, endLine, true)) {
	          terminate = true;
	          break;
	        }
	      }
	      if (terminate) { break; }
	    }
	  }

	  content = state.getLines(startLine, nextLine, state.blkIndent, false).trim();

	  state.line = nextLine;
	  if (content.length) {
	    state.tokens.push({
	      type: 'paragraph_open',
	      tight: false,
	      lines: [ startLine, state.line ],
	      level: state.level
	    });
	    state.tokens.push({
	      type: 'inline',
	      content: content,
	      level: state.level + 1,
	      lines: [ startLine, state.line ],
	      children: []
	    });
	    state.tokens.push({
	      type: 'paragraph_close',
	      tight: false,
	      level: state.level
	    });
	  }

	  return true;
	};


/***/ },
/* 417 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	/**
	 * Local dependencies
	 */

	var Ruler       = __webpack_require__(385);
	var StateInline = __webpack_require__(388);
	var utils       = __webpack_require__(380);

	/**
	 * Inline Parser `rules`
	 */

	var _rules = [
	  [ 'text',            __webpack_require__(418) ],
	  [ 'newline',         __webpack_require__(419) ],
	  [ 'escape',          __webpack_require__(420) ],
	  [ 'backticks',       __webpack_require__(421) ],
	  [ 'del',             __webpack_require__(422) ],
	  [ 'ins',             __webpack_require__(423) ],
	  [ 'mark',            __webpack_require__(424) ],
	  [ 'emphasis',        __webpack_require__(425) ],
	  [ 'sub',             __webpack_require__(426) ],
	  [ 'sup',             __webpack_require__(427) ],
	  [ 'links',           __webpack_require__(428) ],
	  [ 'footnote_inline', __webpack_require__(429) ],
	  [ 'footnote_ref',    __webpack_require__(430) ],
	  [ 'autolink',        __webpack_require__(431) ],
	  [ 'htmltag',         __webpack_require__(433) ],
	  [ 'entity',          __webpack_require__(435) ]
	];

	/**
	 * Inline Parser class. Note that link validation is stricter
	 * in Remarkable than what is specified by CommonMark. If you
	 * want to change this you can use a custom validator.
	 *
	 * @api private
	 */

	function ParserInline() {
	  this.ruler = new Ruler();
	  for (var i = 0; i < _rules.length; i++) {
	    this.ruler.push(_rules[i][0], _rules[i][1]);
	  }

	  // Can be overridden with a custom validator
	  this.validateLink = validateLink;
	}

	/**
	 * Skip a single token by running all rules in validation mode.
	 * Returns `true` if any rule reports success.
	 *
	 * @param  {Object} `state`
	 * @api privage
	 */

	ParserInline.prototype.skipToken = function (state) {
	  var rules = this.ruler.getRules('');
	  var len = rules.length;
	  var pos = state.pos;
	  var i, cached_pos;

	  if ((cached_pos = state.cacheGet(pos)) > 0) {
	    state.pos = cached_pos;
	    return;
	  }

	  for (i = 0; i < len; i++) {
	    if (rules[i](state, true)) {
	      state.cacheSet(pos, state.pos);
	      return;
	    }
	  }

	  state.pos++;
	  state.cacheSet(pos, state.pos);
	};

	/**
	 * Generate tokens for the given input range.
	 *
	 * @param  {Object} `state`
	 * @api private
	 */

	ParserInline.prototype.tokenize = function (state) {
	  var rules = this.ruler.getRules('');
	  var len = rules.length;
	  var end = state.posMax;
	  var ok, i;

	  while (state.pos < end) {

	    // Try all possible rules.
	    // On success, the rule should:
	    //
	    // - update `state.pos`
	    // - update `state.tokens`
	    // - return true
	    for (i = 0; i < len; i++) {
	      ok = rules[i](state, false);

	      if (ok) {
	        break;
	      }
	    }

	    if (ok) {
	      if (state.pos >= end) { break; }
	      continue;
	    }

	    state.pending += state.src[state.pos++];
	  }

	  if (state.pending) {
	    state.pushPending();
	  }
	};

	/**
	 * Parse the given input string.
	 *
	 * @param  {String} `str`
	 * @param  {Object} `options`
	 * @param  {Object} `env`
	 * @param  {Array} `outTokens`
	 * @api private
	 */

	ParserInline.prototype.parse = function (str, options, env, outTokens) {
	  var state = new StateInline(str, this, options, env, outTokens);
	  this.tokenize(state);
	};

	/**
	 * Validate the given `url` by checking for bad protocols.
	 *
	 * @param  {String} `url`
	 * @return {Boolean}
	 */

	function validateLink(url) {
	  var BAD_PROTOCOLS = [ 'vbscript', 'javascript', 'file', 'data' ];
	  var str = url.trim().toLowerCase();
	  // Care about digital entities "javascript&#x3A;alert(1)"
	  str = utils.replaceEntities(str);
	  if (str.indexOf(':') !== -1 && BAD_PROTOCOLS.indexOf(str.split(':')[0]) !== -1) {
	    return false;
	  }
	  return true;
	}

	/**
	 * Expose `ParserInline`
	 */

	module.exports = ParserInline;


/***/ },
/* 418 */
/***/ function(module, exports) {

	// Skip text characters for text token, place those to pending buffer
	// and increment current pos

	'use strict';

	// Rule to skip pure text
	// '{}$%@~+=:' reserved for extentions

	function isTerminatorChar(ch) {
	  switch (ch) {
	    case 0x0A/* \n */:
	    case 0x5C/* \ */:
	    case 0x60/* ` */:
	    case 0x2A/* * */:
	    case 0x5F/* _ */:
	    case 0x5E/* ^ */:
	    case 0x5B/* [ */:
	    case 0x5D/* ] */:
	    case 0x21/* ! */:
	    case 0x26/* & */:
	    case 0x3C/* < */:
	    case 0x3E/* > */:
	    case 0x7B/* { */:
	    case 0x7D/* } */:
	    case 0x24/* $ */:
	    case 0x25/* % */:
	    case 0x40/* @ */:
	    case 0x7E/* ~ */:
	    case 0x2B/* + */:
	    case 0x3D/* = */:
	    case 0x3A/* : */:
	      return true;
	    default:
	      return false;
	  }
	}

	module.exports = function text(state, silent) {
	  var pos = state.pos;

	  while (pos < state.posMax && !isTerminatorChar(state.src.charCodeAt(pos))) {
	    pos++;
	  }

	  if (pos === state.pos) { return false; }

	  if (!silent) { state.pending += state.src.slice(state.pos, pos); }

	  state.pos = pos;

	  return true;
	};


/***/ },
/* 419 */
/***/ function(module, exports) {

	// Proceess '\n'

	'use strict';

	module.exports = function newline(state, silent) {
	  var pmax, max, pos = state.pos;

	  if (state.src.charCodeAt(pos) !== 0x0A/* \n */) { return false; }

	  pmax = state.pending.length - 1;
	  max = state.posMax;

	  // '  \n' -> hardbreak
	  // Lookup in pending chars is bad practice! Don't copy to other rules!
	  // Pending string is stored in concat mode, indexed lookups will cause
	  // convertion to flat mode.
	  if (!silent) {
	    if (pmax >= 0 && state.pending.charCodeAt(pmax) === 0x20) {
	      if (pmax >= 1 && state.pending.charCodeAt(pmax - 1) === 0x20) {
	        // Strip out all trailing spaces on this line.
	        for (var i = pmax - 2; i >= 0; i--) {
	          if (state.pending.charCodeAt(i) !== 0x20) {
	            state.pending = state.pending.substring(0, i + 1);
	            break;
	          }
	        }
	        state.push({
	          type: 'hardbreak',
	          level: state.level
	        });
	      } else {
	        state.pending = state.pending.slice(0, -1);
	        state.push({
	          type: 'softbreak',
	          level: state.level
	        });
	      }

	    } else {
	      state.push({
	        type: 'softbreak',
	        level: state.level
	      });
	    }
	  }

	  pos++;

	  // skip heading spaces for next line
	  while (pos < max && state.src.charCodeAt(pos) === 0x20) { pos++; }

	  state.pos = pos;
	  return true;
	};


/***/ },
/* 420 */
/***/ function(module, exports) {

	// Proceess escaped chars and hardbreaks

	'use strict';

	var ESCAPED = [];

	for (var i = 0; i < 256; i++) { ESCAPED.push(0); }

	'\\!"#$%&\'()*+,./:;<=>?@[]^_`{|}~-'
	  .split('').forEach(function(ch) { ESCAPED[ch.charCodeAt(0)] = 1; });


	module.exports = function escape(state, silent) {
	  var ch, pos = state.pos, max = state.posMax;

	  if (state.src.charCodeAt(pos) !== 0x5C/* \ */) { return false; }

	  pos++;

	  if (pos < max) {
	    ch = state.src.charCodeAt(pos);

	    if (ch < 256 && ESCAPED[ch] !== 0) {
	      if (!silent) { state.pending += state.src[pos]; }
	      state.pos += 2;
	      return true;
	    }

	    if (ch === 0x0A) {
	      if (!silent) {
	        state.push({
	          type: 'hardbreak',
	          level: state.level
	        });
	      }

	      pos++;
	      // skip leading whitespaces from next line
	      while (pos < max && state.src.charCodeAt(pos) === 0x20) { pos++; }

	      state.pos = pos;
	      return true;
	    }
	  }

	  if (!silent) { state.pending += '\\'; }
	  state.pos++;
	  return true;
	};


/***/ },
/* 421 */
/***/ function(module, exports) {

	// Parse backticks

	'use strict';

	module.exports = function backticks(state, silent) {
	  var start, max, marker, matchStart, matchEnd,
	      pos = state.pos,
	      ch = state.src.charCodeAt(pos);

	  if (ch !== 0x60/* ` */) { return false; }

	  start = pos;
	  pos++;
	  max = state.posMax;

	  while (pos < max && state.src.charCodeAt(pos) === 0x60/* ` */) { pos++; }

	  marker = state.src.slice(start, pos);

	  matchStart = matchEnd = pos;

	  while ((matchStart = state.src.indexOf('`', matchEnd)) !== -1) {
	    matchEnd = matchStart + 1;

	    while (matchEnd < max && state.src.charCodeAt(matchEnd) === 0x60/* ` */) { matchEnd++; }

	    if (matchEnd - matchStart === marker.length) {
	      if (!silent) {
	        state.push({
	          type: 'code',
	          content: state.src.slice(pos, matchStart)
	                              .replace(/[ \n]+/g, ' ')
	                              .trim(),
	          block: false,
	          level: state.level
	        });
	      }
	      state.pos = matchEnd;
	      return true;
	    }
	  }

	  if (!silent) { state.pending += marker; }
	  state.pos += marker.length;
	  return true;
	};


/***/ },
/* 422 */
/***/ function(module, exports) {

	// Process ~~deleted text~~

	'use strict';

	module.exports = function del(state, silent) {
	  var found,
	      pos,
	      stack,
	      max = state.posMax,
	      start = state.pos,
	      lastChar,
	      nextChar;

	  if (state.src.charCodeAt(start) !== 0x7E/* ~ */) { return false; }
	  if (silent) { return false; } // don't run any pairs in validation mode
	  if (start + 4 >= max) { return false; }
	  if (state.src.charCodeAt(start + 1) !== 0x7E/* ~ */) { return false; }
	  if (state.level >= state.options.maxNesting) { return false; }

	  lastChar = start > 0 ? state.src.charCodeAt(start - 1) : -1;
	  nextChar = state.src.charCodeAt(start + 2);

	  if (lastChar === 0x7E/* ~ */) { return false; }
	  if (nextChar === 0x7E/* ~ */) { return false; }
	  if (nextChar === 0x20 || nextChar === 0x0A) { return false; }

	  pos = start + 2;
	  while (pos < max && state.src.charCodeAt(pos) === 0x7E/* ~ */) { pos++; }
	  if (pos > start + 3) {
	    // sequence of 4+ markers taking as literal, same as in a emphasis
	    state.pos += pos - start;
	    if (!silent) { state.pending += state.src.slice(start, pos); }
	    return true;
	  }

	  state.pos = start + 2;
	  stack = 1;

	  while (state.pos + 1 < max) {
	    if (state.src.charCodeAt(state.pos) === 0x7E/* ~ */) {
	      if (state.src.charCodeAt(state.pos + 1) === 0x7E/* ~ */) {
	        lastChar = state.src.charCodeAt(state.pos - 1);
	        nextChar = state.pos + 2 < max ? state.src.charCodeAt(state.pos + 2) : -1;
	        if (nextChar !== 0x7E/* ~ */ && lastChar !== 0x7E/* ~ */) {
	          if (lastChar !== 0x20 && lastChar !== 0x0A) {
	            // closing '~~'
	            stack--;
	          } else if (nextChar !== 0x20 && nextChar !== 0x0A) {
	            // opening '~~'
	            stack++;
	          } // else {
	            //  // standalone ' ~~ ' indented with spaces
	            // }
	          if (stack <= 0) {
	            found = true;
	            break;
	          }
	        }
	      }
	    }

	    state.parser.skipToken(state);
	  }

	  if (!found) {
	    // parser failed to find ending tag, so it's not valid emphasis
	    state.pos = start;
	    return false;
	  }

	  // found!
	  state.posMax = state.pos;
	  state.pos = start + 2;

	  if (!silent) {
	    state.push({ type: 'del_open', level: state.level++ });
	    state.parser.tokenize(state);
	    state.push({ type: 'del_close', level: --state.level });
	  }

	  state.pos = state.posMax + 2;
	  state.posMax = max;
	  return true;
	};


/***/ },
/* 423 */
/***/ function(module, exports) {

	// Process ++inserted text++

	'use strict';

	module.exports = function ins(state, silent) {
	  var found,
	      pos,
	      stack,
	      max = state.posMax,
	      start = state.pos,
	      lastChar,
	      nextChar;

	  if (state.src.charCodeAt(start) !== 0x2B/* + */) { return false; }
	  if (silent) { return false; } // don't run any pairs in validation mode
	  if (start + 4 >= max) { return false; }
	  if (state.src.charCodeAt(start + 1) !== 0x2B/* + */) { return false; }
	  if (state.level >= state.options.maxNesting) { return false; }

	  lastChar = start > 0 ? state.src.charCodeAt(start - 1) : -1;
	  nextChar = state.src.charCodeAt(start + 2);

	  if (lastChar === 0x2B/* + */) { return false; }
	  if (nextChar === 0x2B/* + */) { return false; }
	  if (nextChar === 0x20 || nextChar === 0x0A) { return false; }

	  pos = start + 2;
	  while (pos < max && state.src.charCodeAt(pos) === 0x2B/* + */) { pos++; }
	  if (pos !== start + 2) {
	    // sequence of 3+ markers taking as literal, same as in a emphasis
	    state.pos += pos - start;
	    if (!silent) { state.pending += state.src.slice(start, pos); }
	    return true;
	  }

	  state.pos = start + 2;
	  stack = 1;

	  while (state.pos + 1 < max) {
	    if (state.src.charCodeAt(state.pos) === 0x2B/* + */) {
	      if (state.src.charCodeAt(state.pos + 1) === 0x2B/* + */) {
	        lastChar = state.src.charCodeAt(state.pos - 1);
	        nextChar = state.pos + 2 < max ? state.src.charCodeAt(state.pos + 2) : -1;
	        if (nextChar !== 0x2B/* + */ && lastChar !== 0x2B/* + */) {
	          if (lastChar !== 0x20 && lastChar !== 0x0A) {
	            // closing '++'
	            stack--;
	          } else if (nextChar !== 0x20 && nextChar !== 0x0A) {
	            // opening '++'
	            stack++;
	          } // else {
	            //  // standalone ' ++ ' indented with spaces
	            // }
	          if (stack <= 0) {
	            found = true;
	            break;
	          }
	        }
	      }
	    }

	    state.parser.skipToken(state);
	  }

	  if (!found) {
	    // parser failed to find ending tag, so it's not valid emphasis
	    state.pos = start;
	    return false;
	  }

	  // found!
	  state.posMax = state.pos;
	  state.pos = start + 2;

	  if (!silent) {
	    state.push({ type: 'ins_open', level: state.level++ });
	    state.parser.tokenize(state);
	    state.push({ type: 'ins_close', level: --state.level });
	  }

	  state.pos = state.posMax + 2;
	  state.posMax = max;
	  return true;
	};


/***/ },
/* 424 */
/***/ function(module, exports) {

	// Process ==highlighted text==

	'use strict';

	module.exports = function del(state, silent) {
	  var found,
	      pos,
	      stack,
	      max = state.posMax,
	      start = state.pos,
	      lastChar,
	      nextChar;

	  if (state.src.charCodeAt(start) !== 0x3D/* = */) { return false; }
	  if (silent) { return false; } // don't run any pairs in validation mode
	  if (start + 4 >= max) { return false; }
	  if (state.src.charCodeAt(start + 1) !== 0x3D/* = */) { return false; }
	  if (state.level >= state.options.maxNesting) { return false; }

	  lastChar = start > 0 ? state.src.charCodeAt(start - 1) : -1;
	  nextChar = state.src.charCodeAt(start + 2);

	  if (lastChar === 0x3D/* = */) { return false; }
	  if (nextChar === 0x3D/* = */) { return false; }
	  if (nextChar === 0x20 || nextChar === 0x0A) { return false; }

	  pos = start + 2;
	  while (pos < max && state.src.charCodeAt(pos) === 0x3D/* = */) { pos++; }
	  if (pos !== start + 2) {
	    // sequence of 3+ markers taking as literal, same as in a emphasis
	    state.pos += pos - start;
	    if (!silent) { state.pending += state.src.slice(start, pos); }
	    return true;
	  }

	  state.pos = start + 2;
	  stack = 1;

	  while (state.pos + 1 < max) {
	    if (state.src.charCodeAt(state.pos) === 0x3D/* = */) {
	      if (state.src.charCodeAt(state.pos + 1) === 0x3D/* = */) {
	        lastChar = state.src.charCodeAt(state.pos - 1);
	        nextChar = state.pos + 2 < max ? state.src.charCodeAt(state.pos + 2) : -1;
	        if (nextChar !== 0x3D/* = */ && lastChar !== 0x3D/* = */) {
	          if (lastChar !== 0x20 && lastChar !== 0x0A) {
	            // closing '=='
	            stack--;
	          } else if (nextChar !== 0x20 && nextChar !== 0x0A) {
	            // opening '=='
	            stack++;
	          } // else {
	            //  // standalone ' == ' indented with spaces
	            // }
	          if (stack <= 0) {
	            found = true;
	            break;
	          }
	        }
	      }
	    }

	    state.parser.skipToken(state);
	  }

	  if (!found) {
	    // parser failed to find ending tag, so it's not valid emphasis
	    state.pos = start;
	    return false;
	  }

	  // found!
	  state.posMax = state.pos;
	  state.pos = start + 2;

	  if (!silent) {
	    state.push({ type: 'mark_open', level: state.level++ });
	    state.parser.tokenize(state);
	    state.push({ type: 'mark_close', level: --state.level });
	  }

	  state.pos = state.posMax + 2;
	  state.posMax = max;
	  return true;
	};


/***/ },
/* 425 */
/***/ function(module, exports) {

	// Process *this* and _that_

	'use strict';


	function isAlphaNum(code) {
	  return (code >= 0x30 /* 0 */ && code <= 0x39 /* 9 */) ||
	         (code >= 0x41 /* A */ && code <= 0x5A /* Z */) ||
	         (code >= 0x61 /* a */ && code <= 0x7A /* z */);
	}

	// parse sequence of emphasis markers,
	// "start" should point at a valid marker
	function scanDelims(state, start) {
	  var pos = start, lastChar, nextChar, count,
	      can_open = true,
	      can_close = true,
	      max = state.posMax,
	      marker = state.src.charCodeAt(start);

	  lastChar = start > 0 ? state.src.charCodeAt(start - 1) : -1;

	  while (pos < max && state.src.charCodeAt(pos) === marker) { pos++; }
	  if (pos >= max) { can_open = false; }
	  count = pos - start;

	  if (count >= 4) {
	    // sequence of four or more unescaped markers can't start/end an emphasis
	    can_open = can_close = false;
	  } else {
	    nextChar = pos < max ? state.src.charCodeAt(pos) : -1;

	    // check whitespace conditions
	    if (nextChar === 0x20 || nextChar === 0x0A) { can_open = false; }
	    if (lastChar === 0x20 || lastChar === 0x0A) { can_close = false; }

	    if (marker === 0x5F /* _ */) {
	      // check if we aren't inside the word
	      if (isAlphaNum(lastChar)) { can_open = false; }
	      if (isAlphaNum(nextChar)) { can_close = false; }
	    }
	  }

	  return {
	    can_open: can_open,
	    can_close: can_close,
	    delims: count
	  };
	}

	module.exports = function emphasis(state, silent) {
	  var startCount,
	      count,
	      found,
	      oldCount,
	      newCount,
	      stack,
	      res,
	      max = state.posMax,
	      start = state.pos,
	      marker = state.src.charCodeAt(start);

	  if (marker !== 0x5F/* _ */ && marker !== 0x2A /* * */) { return false; }
	  if (silent) { return false; } // don't run any pairs in validation mode

	  res = scanDelims(state, start);
	  startCount = res.delims;
	  if (!res.can_open) {
	    state.pos += startCount;
	    if (!silent) { state.pending += state.src.slice(start, state.pos); }
	    return true;
	  }

	  if (state.level >= state.options.maxNesting) { return false; }

	  state.pos = start + startCount;
	  stack = [ startCount ];

	  while (state.pos < max) {
	    if (state.src.charCodeAt(state.pos) === marker) {
	      res = scanDelims(state, state.pos);
	      count = res.delims;
	      if (res.can_close) {
	        oldCount = stack.pop();
	        newCount = count;

	        while (oldCount !== newCount) {
	          if (newCount < oldCount) {
	            stack.push(oldCount - newCount);
	            break;
	          }

	          // assert(newCount > oldCount)
	          newCount -= oldCount;

	          if (stack.length === 0) { break; }
	          state.pos += oldCount;
	          oldCount = stack.pop();
	        }

	        if (stack.length === 0) {
	          startCount = oldCount;
	          found = true;
	          break;
	        }
	        state.pos += count;
	        continue;
	      }

	      if (res.can_open) { stack.push(count); }
	      state.pos += count;
	      continue;
	    }

	    state.parser.skipToken(state);
	  }

	  if (!found) {
	    // parser failed to find ending tag, so it's not valid emphasis
	    state.pos = start;
	    return false;
	  }

	  // found!
	  state.posMax = state.pos;
	  state.pos = start + startCount;

	  if (!silent) {
	    if (startCount === 2 || startCount === 3) {
	      state.push({ type: 'strong_open', level: state.level++ });
	    }
	    if (startCount === 1 || startCount === 3) {
	      state.push({ type: 'em_open', level: state.level++ });
	    }

	    state.parser.tokenize(state);

	    if (startCount === 1 || startCount === 3) {
	      state.push({ type: 'em_close', level: --state.level });
	    }
	    if (startCount === 2 || startCount === 3) {
	      state.push({ type: 'strong_close', level: --state.level });
	    }
	  }

	  state.pos = state.posMax + startCount;
	  state.posMax = max;
	  return true;
	};


/***/ },
/* 426 */
/***/ function(module, exports) {

	// Process ~subscript~

	'use strict';

	// same as UNESCAPE_MD_RE plus a space
	var UNESCAPE_RE = /\\([ \\!"#$%&'()*+,.\/:;<=>?@[\]^_`{|}~-])/g;

	module.exports = function sub(state, silent) {
	  var found,
	      content,
	      max = state.posMax,
	      start = state.pos;

	  if (state.src.charCodeAt(start) !== 0x7E/* ~ */) { return false; }
	  if (silent) { return false; } // don't run any pairs in validation mode
	  if (start + 2 >= max) { return false; }
	  if (state.level >= state.options.maxNesting) { return false; }

	  state.pos = start + 1;

	  while (state.pos < max) {
	    if (state.src.charCodeAt(state.pos) === 0x7E/* ~ */) {
	      found = true;
	      break;
	    }

	    state.parser.skipToken(state);
	  }

	  if (!found || start + 1 === state.pos) {
	    state.pos = start;
	    return false;
	  }

	  content = state.src.slice(start + 1, state.pos);

	  // don't allow unescaped spaces/newlines inside
	  if (content.match(/(^|[^\\])(\\\\)*\s/)) {
	    state.pos = start;
	    return false;
	  }

	  // found!
	  state.posMax = state.pos;
	  state.pos = start + 1;

	  if (!silent) {
	    state.push({
	      type: 'sub',
	      level: state.level,
	      content: content.replace(UNESCAPE_RE, '$1')
	    });
	  }

	  state.pos = state.posMax + 1;
	  state.posMax = max;
	  return true;
	};


/***/ },
/* 427 */
/***/ function(module, exports) {

	// Process ^superscript^

	'use strict';

	// same as UNESCAPE_MD_RE plus a space
	var UNESCAPE_RE = /\\([ \\!"#$%&'()*+,.\/:;<=>?@[\]^_`{|}~-])/g;

	module.exports = function sup(state, silent) {
	  var found,
	      content,
	      max = state.posMax,
	      start = state.pos;

	  if (state.src.charCodeAt(start) !== 0x5E/* ^ */) { return false; }
	  if (silent) { return false; } // don't run any pairs in validation mode
	  if (start + 2 >= max) { return false; }
	  if (state.level >= state.options.maxNesting) { return false; }

	  state.pos = start + 1;

	  while (state.pos < max) {
	    if (state.src.charCodeAt(state.pos) === 0x5E/* ^ */) {
	      found = true;
	      break;
	    }

	    state.parser.skipToken(state);
	  }

	  if (!found || start + 1 === state.pos) {
	    state.pos = start;
	    return false;
	  }

	  content = state.src.slice(start + 1, state.pos);

	  // don't allow unescaped spaces/newlines inside
	  if (content.match(/(^|[^\\])(\\\\)*\s/)) {
	    state.pos = start;
	    return false;
	  }

	  // found!
	  state.posMax = state.pos;
	  state.pos = start + 1;

	  if (!silent) {
	    state.push({
	      type: 'sup',
	      level: state.level,
	      content: content.replace(UNESCAPE_RE, '$1')
	    });
	  }

	  state.pos = state.posMax + 1;
	  state.posMax = max;
	  return true;
	};


/***/ },
/* 428 */
/***/ function(module, exports, __webpack_require__) {

	// Process [links](<to> "stuff")

	'use strict';

	var parseLinkLabel       = __webpack_require__(389);
	var parseLinkDestination = __webpack_require__(391);
	var parseLinkTitle       = __webpack_require__(393);
	var normalizeReference   = __webpack_require__(394);


	module.exports = function links(state, silent) {
	  var labelStart,
	      labelEnd,
	      label,
	      href,
	      title,
	      pos,
	      ref,
	      code,
	      isImage = false,
	      oldPos = state.pos,
	      max = state.posMax,
	      start = state.pos,
	      marker = state.src.charCodeAt(start);

	  if (marker === 0x21/* ! */) {
	    isImage = true;
	    marker = state.src.charCodeAt(++start);
	  }

	  if (marker !== 0x5B/* [ */) { return false; }
	  if (state.level >= state.options.maxNesting) { return false; }

	  labelStart = start + 1;
	  labelEnd = parseLinkLabel(state, start);

	  // parser failed to find ']', so it's not a valid link
	  if (labelEnd < 0) { return false; }

	  pos = labelEnd + 1;
	  if (pos < max && state.src.charCodeAt(pos) === 0x28/* ( */) {
	    //
	    // Inline link
	    //

	    // [link](  <href>  "title"  )
	    //        ^^ skipping these spaces
	    pos++;
	    for (; pos < max; pos++) {
	      code = state.src.charCodeAt(pos);
	      if (code !== 0x20 && code !== 0x0A) { break; }
	    }
	    if (pos >= max) { return false; }

	    // [link](  <href>  "title"  )
	    //          ^^^^^^ parsing link destination
	    start = pos;
	    if (parseLinkDestination(state, pos)) {
	      href = state.linkContent;
	      pos = state.pos;
	    } else {
	      href = '';
	    }

	    // [link](  <href>  "title"  )
	    //                ^^ skipping these spaces
	    start = pos;
	    for (; pos < max; pos++) {
	      code = state.src.charCodeAt(pos);
	      if (code !== 0x20 && code !== 0x0A) { break; }
	    }

	    // [link](  <href>  "title"  )
	    //                  ^^^^^^^ parsing link title
	    if (pos < max && start !== pos && parseLinkTitle(state, pos)) {
	      title = state.linkContent;
	      pos = state.pos;

	      // [link](  <href>  "title"  )
	      //                         ^^ skipping these spaces
	      for (; pos < max; pos++) {
	        code = state.src.charCodeAt(pos);
	        if (code !== 0x20 && code !== 0x0A) { break; }
	      }
	    } else {
	      title = '';
	    }

	    if (pos >= max || state.src.charCodeAt(pos) !== 0x29/* ) */) {
	      state.pos = oldPos;
	      return false;
	    }
	    pos++;
	  } else {
	    //
	    // Link reference
	    //

	    // do not allow nested reference links
	    if (state.linkLevel > 0) { return false; }

	    // [foo]  [bar]
	    //      ^^ optional whitespace (can include newlines)
	    for (; pos < max; pos++) {
	      code = state.src.charCodeAt(pos);
	      if (code !== 0x20 && code !== 0x0A) { break; }
	    }

	    if (pos < max && state.src.charCodeAt(pos) === 0x5B/* [ */) {
	      start = pos + 1;
	      pos = parseLinkLabel(state, pos);
	      if (pos >= 0) {
	        label = state.src.slice(start, pos++);
	      } else {
	        pos = start - 1;
	      }
	    }

	    // covers label === '' and label === undefined
	    // (collapsed reference link and shortcut reference link respectively)
	    if (!label) {
	      if (typeof label === 'undefined') {
	        pos = labelEnd + 1;
	      }
	      label = state.src.slice(labelStart, labelEnd);
	    }

	    ref = state.env.references[normalizeReference(label)];
	    if (!ref) {
	      state.pos = oldPos;
	      return false;
	    }
	    href = ref.href;
	    title = ref.title;
	  }

	  //
	  // We found the end of the link, and know for a fact it's a valid link;
	  // so all that's left to do is to call tokenizer.
	  //
	  if (!silent) {
	    state.pos = labelStart;
	    state.posMax = labelEnd;

	    if (isImage) {
	      state.push({
	        type: 'image',
	        src: href,
	        title: title,
	        alt: state.src.substr(labelStart, labelEnd - labelStart),
	        level: state.level
	      });
	    } else {
	      state.push({
	        type: 'link_open',
	        href: href,
	        title: title,
	        level: state.level++
	      });
	      state.linkLevel++;
	      state.parser.tokenize(state);
	      state.linkLevel--;
	      state.push({ type: 'link_close', level: --state.level });
	    }
	  }

	  state.pos = pos;
	  state.posMax = max;
	  return true;
	};


/***/ },
/* 429 */
/***/ function(module, exports, __webpack_require__) {

	// Process inline footnotes (^[...])

	'use strict';

	var parseLinkLabel = __webpack_require__(389);


	module.exports = function footnote_inline(state, silent) {
	  var labelStart,
	      labelEnd,
	      footnoteId,
	      oldLength,
	      max = state.posMax,
	      start = state.pos;

	  if (start + 2 >= max) { return false; }
	  if (state.src.charCodeAt(start) !== 0x5E/* ^ */) { return false; }
	  if (state.src.charCodeAt(start + 1) !== 0x5B/* [ */) { return false; }
	  if (state.level >= state.options.maxNesting) { return false; }

	  labelStart = start + 2;
	  labelEnd = parseLinkLabel(state, start + 1);

	  // parser failed to find ']', so it's not a valid note
	  if (labelEnd < 0) { return false; }

	  // We found the end of the link, and know for a fact it's a valid link;
	  // so all that's left to do is to call tokenizer.
	  //
	  if (!silent) {
	    if (!state.env.footnotes) { state.env.footnotes = {}; }
	    if (!state.env.footnotes.list) { state.env.footnotes.list = []; }
	    footnoteId = state.env.footnotes.list.length;

	    state.pos = labelStart;
	    state.posMax = labelEnd;

	    state.push({
	      type: 'footnote_ref',
	      id: footnoteId,
	      level: state.level
	    });
	    state.linkLevel++;
	    oldLength = state.tokens.length;
	    state.parser.tokenize(state);
	    state.env.footnotes.list[footnoteId] = { tokens: state.tokens.splice(oldLength) };
	    state.linkLevel--;
	  }

	  state.pos = labelEnd + 1;
	  state.posMax = max;
	  return true;
	};


/***/ },
/* 430 */
/***/ function(module, exports) {

	// Process footnote references ([^...])

	'use strict';


	module.exports = function footnote_ref(state, silent) {
	  var label,
	      pos,
	      footnoteId,
	      footnoteSubId,
	      max = state.posMax,
	      start = state.pos;

	  // should be at least 4 chars - "[^x]"
	  if (start + 3 > max) { return false; }

	  if (!state.env.footnotes || !state.env.footnotes.refs) { return false; }
	  if (state.src.charCodeAt(start) !== 0x5B/* [ */) { return false; }
	  if (state.src.charCodeAt(start + 1) !== 0x5E/* ^ */) { return false; }
	  if (state.level >= state.options.maxNesting) { return false; }

	  for (pos = start + 2; pos < max; pos++) {
	    if (state.src.charCodeAt(pos) === 0x20) { return false; }
	    if (state.src.charCodeAt(pos) === 0x0A) { return false; }
	    if (state.src.charCodeAt(pos) === 0x5D /* ] */) {
	      break;
	    }
	  }

	  if (pos === start + 2) { return false; } // no empty footnote labels
	  if (pos >= max) { return false; }
	  pos++;

	  label = state.src.slice(start + 2, pos - 1);
	  if (typeof state.env.footnotes.refs[':' + label] === 'undefined') { return false; }

	  if (!silent) {
	    if (!state.env.footnotes.list) { state.env.footnotes.list = []; }

	    if (state.env.footnotes.refs[':' + label] < 0) {
	      footnoteId = state.env.footnotes.list.length;
	      state.env.footnotes.list[footnoteId] = { label: label, count: 0 };
	      state.env.footnotes.refs[':' + label] = footnoteId;
	    } else {
	      footnoteId = state.env.footnotes.refs[':' + label];
	    }

	    footnoteSubId = state.env.footnotes.list[footnoteId].count;
	    state.env.footnotes.list[footnoteId].count++;

	    state.push({
	      type: 'footnote_ref',
	      id: footnoteId,
	      subId: footnoteSubId,
	      level: state.level
	    });
	  }

	  state.pos = pos;
	  state.posMax = max;
	  return true;
	};


/***/ },
/* 431 */
/***/ function(module, exports, __webpack_require__) {

	// Process autolinks '<protocol:...>'

	'use strict';

	var url_schemas   = __webpack_require__(432);
	var normalizeLink = __webpack_require__(392);


	/*eslint max-len:0*/
	var EMAIL_RE    = /^<([a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*)>/;
	var AUTOLINK_RE = /^<([a-zA-Z.\-]{1,25}):([^<>\x00-\x20]*)>/;


	module.exports = function autolink(state, silent) {
	  var tail, linkMatch, emailMatch, url, fullUrl, pos = state.pos;

	  if (state.src.charCodeAt(pos) !== 0x3C/* < */) { return false; }

	  tail = state.src.slice(pos);

	  if (tail.indexOf('>') < 0) { return false; }

	  linkMatch = tail.match(AUTOLINK_RE);

	  if (linkMatch) {
	    if (url_schemas.indexOf(linkMatch[1].toLowerCase()) < 0) { return false; }

	    url = linkMatch[0].slice(1, -1);
	    fullUrl = normalizeLink(url);
	    if (!state.parser.validateLink(url)) { return false; }

	    if (!silent) {
	      state.push({
	        type: 'link_open',
	        href: fullUrl,
	        level: state.level
	      });
	      state.push({
	        type: 'text',
	        content: url,
	        level: state.level + 1
	      });
	      state.push({ type: 'link_close', level: state.level });
	    }

	    state.pos += linkMatch[0].length;
	    return true;
	  }

	  emailMatch = tail.match(EMAIL_RE);

	  if (emailMatch) {

	    url = emailMatch[0].slice(1, -1);

	    fullUrl = normalizeLink('mailto:' + url);
	    if (!state.parser.validateLink(fullUrl)) { return false; }

	    if (!silent) {
	      state.push({
	        type: 'link_open',
	        href: fullUrl,
	        level: state.level
	      });
	      state.push({
	        type: 'text',
	        content: url,
	        level: state.level + 1
	      });
	      state.push({ type: 'link_close', level: state.level });
	    }

	    state.pos += emailMatch[0].length;
	    return true;
	  }

	  return false;
	};


/***/ },
/* 432 */
/***/ function(module, exports) {

	// List of valid url schemas, accorting to commonmark spec
	// http://jgm.github.io/CommonMark/spec.html#autolinks

	'use strict';


	module.exports = [
	  'coap',
	  'doi',
	  'javascript',
	  'aaa',
	  'aaas',
	  'about',
	  'acap',
	  'cap',
	  'cid',
	  'crid',
	  'data',
	  'dav',
	  'dict',
	  'dns',
	  'file',
	  'ftp',
	  'geo',
	  'go',
	  'gopher',
	  'h323',
	  'http',
	  'https',
	  'iax',
	  'icap',
	  'im',
	  'imap',
	  'info',
	  'ipp',
	  'iris',
	  'iris.beep',
	  'iris.xpc',
	  'iris.xpcs',
	  'iris.lwz',
	  'ldap',
	  'mailto',
	  'mid',
	  'msrp',
	  'msrps',
	  'mtqp',
	  'mupdate',
	  'news',
	  'nfs',
	  'ni',
	  'nih',
	  'nntp',
	  'opaquelocktoken',
	  'pop',
	  'pres',
	  'rtsp',
	  'service',
	  'session',
	  'shttp',
	  'sieve',
	  'sip',
	  'sips',
	  'sms',
	  'snmp',
	  'soap.beep',
	  'soap.beeps',
	  'tag',
	  'tel',
	  'telnet',
	  'tftp',
	  'thismessage',
	  'tn3270',
	  'tip',
	  'tv',
	  'urn',
	  'vemmi',
	  'ws',
	  'wss',
	  'xcon',
	  'xcon-userid',
	  'xmlrpc.beep',
	  'xmlrpc.beeps',
	  'xmpp',
	  'z39.50r',
	  'z39.50s',
	  'adiumxtra',
	  'afp',
	  'afs',
	  'aim',
	  'apt',
	  'attachment',
	  'aw',
	  'beshare',
	  'bitcoin',
	  'bolo',
	  'callto',
	  'chrome',
	  'chrome-extension',
	  'com-eventbrite-attendee',
	  'content',
	  'cvs',
	  'dlna-playsingle',
	  'dlna-playcontainer',
	  'dtn',
	  'dvb',
	  'ed2k',
	  'facetime',
	  'feed',
	  'finger',
	  'fish',
	  'gg',
	  'git',
	  'gizmoproject',
	  'gtalk',
	  'hcp',
	  'icon',
	  'ipn',
	  'irc',
	  'irc6',
	  'ircs',
	  'itms',
	  'jar',
	  'jms',
	  'keyparc',
	  'lastfm',
	  'ldaps',
	  'magnet',
	  'maps',
	  'market',
	  'message',
	  'mms',
	  'ms-help',
	  'msnim',
	  'mumble',
	  'mvn',
	  'notes',
	  'oid',
	  'palm',
	  'paparazzi',
	  'platform',
	  'proxy',
	  'psyc',
	  'query',
	  'res',
	  'resource',
	  'rmi',
	  'rsync',
	  'rtmp',
	  'secondlife',
	  'sftp',
	  'sgn',
	  'skype',
	  'smb',
	  'soldat',
	  'spotify',
	  'ssh',
	  'steam',
	  'svn',
	  'teamspeak',
	  'things',
	  'udp',
	  'unreal',
	  'ut2004',
	  'ventrilo',
	  'view-source',
	  'webcal',
	  'wtai',
	  'wyciwyg',
	  'xfire',
	  'xri',
	  'ymsgr'
	];


/***/ },
/* 433 */
/***/ function(module, exports, __webpack_require__) {

	// Process html tags

	'use strict';


	var HTML_TAG_RE = __webpack_require__(434).HTML_TAG_RE;


	function isLetter(ch) {
	  /*eslint no-bitwise:0*/
	  var lc = ch | 0x20; // to lower case
	  return (lc >= 0x61/* a */) && (lc <= 0x7a/* z */);
	}


	module.exports = function htmltag(state, silent) {
	  var ch, match, max, pos = state.pos;

	  if (!state.options.html) { return false; }

	  // Check start
	  max = state.posMax;
	  if (state.src.charCodeAt(pos) !== 0x3C/* < */ ||
	      pos + 2 >= max) {
	    return false;
	  }

	  // Quick fail on second char
	  ch = state.src.charCodeAt(pos + 1);
	  if (ch !== 0x21/* ! */ &&
	      ch !== 0x3F/* ? */ &&
	      ch !== 0x2F/* / */ &&
	      !isLetter(ch)) {
	    return false;
	  }

	  match = state.src.slice(pos).match(HTML_TAG_RE);
	  if (!match) { return false; }

	  if (!silent) {
	    state.push({
	      type: 'htmltag',
	      content: state.src.slice(pos, pos + match[0].length),
	      level: state.level
	    });
	  }
	  state.pos += match[0].length;
	  return true;
	};


/***/ },
/* 434 */
/***/ function(module, exports) {

	// Regexps to match html elements

	'use strict';


	function replace(regex, options) {
	  regex = regex.source;
	  options = options || '';

	  return function self(name, val) {
	    if (!name) {
	      return new RegExp(regex, options);
	    }
	    val = val.source || val;
	    regex = regex.replace(name, val);
	    return self;
	  };
	}


	var attr_name     = /[a-zA-Z_:][a-zA-Z0-9:._-]*/;

	var unquoted      = /[^"'=<>`\x00-\x20]+/;
	var single_quoted = /'[^']*'/;
	var double_quoted = /"[^"]*"/;

	/*eslint no-spaced-func:0*/
	var attr_value  = replace(/(?:unquoted|single_quoted|double_quoted)/)
	                    ('unquoted', unquoted)
	                    ('single_quoted', single_quoted)
	                    ('double_quoted', double_quoted)
	                    ();

	var attribute   = replace(/(?:\s+attr_name(?:\s*=\s*attr_value)?)/)
	                    ('attr_name', attr_name)
	                    ('attr_value', attr_value)
	                    ();

	var open_tag    = replace(/<[A-Za-z][A-Za-z0-9]*attribute*\s*\/?>/)
	                    ('attribute', attribute)
	                    ();

	var close_tag   = /<\/[A-Za-z][A-Za-z0-9]*\s*>/;
	var comment     = /<!--([^-]+|[-][^-]+)*-->/;
	var processing  = /<[?].*?[?]>/;
	var declaration = /<![A-Z]+\s+[^>]*>/;
	var cdata       = /<!\[CDATA\[([^\]]+|\][^\]]|\]\][^>])*\]\]>/;

	var HTML_TAG_RE = replace(/^(?:open_tag|close_tag|comment|processing|declaration|cdata)/)
	  ('open_tag', open_tag)
	  ('close_tag', close_tag)
	  ('comment', comment)
	  ('processing', processing)
	  ('declaration', declaration)
	  ('cdata', cdata)
	  ();


	module.exports.HTML_TAG_RE = HTML_TAG_RE;


/***/ },
/* 435 */
/***/ function(module, exports, __webpack_require__) {

	// Process html entity - &#123;, &#xAF;, &quot;, ...

	'use strict';

	var entities          = __webpack_require__(381);
	var has               = __webpack_require__(380).has;
	var isValidEntityCode = __webpack_require__(380).isValidEntityCode;
	var fromCodePoint     = __webpack_require__(380).fromCodePoint;


	var DIGITAL_RE = /^&#((?:x[a-f0-9]{1,8}|[0-9]{1,8}));/i;
	var NAMED_RE   = /^&([a-z][a-z0-9]{1,31});/i;


	module.exports = function entity(state, silent) {
	  var ch, code, match, pos = state.pos, max = state.posMax;

	  if (state.src.charCodeAt(pos) !== 0x26/* & */) { return false; }

	  if (pos + 1 < max) {
	    ch = state.src.charCodeAt(pos + 1);

	    if (ch === 0x23 /* # */) {
	      match = state.src.slice(pos).match(DIGITAL_RE);
	      if (match) {
	        if (!silent) {
	          code = match[1][0].toLowerCase() === 'x' ? parseInt(match[1].slice(1), 16) : parseInt(match[1], 10);
	          state.pending += isValidEntityCode(code) ? fromCodePoint(code) : fromCodePoint(0xFFFD);
	        }
	        state.pos += match[0].length;
	        return true;
	      }
	    } else {
	      match = state.src.slice(pos).match(NAMED_RE);
	      if (match) {
	        if (has(entities, match[1])) {
	          if (!silent) { state.pending += entities[match[1]]; }
	          state.pos += match[0].length;
	          return true;
	        }
	      }
	    }
	  }

	  if (!silent) { state.pending += '&'; }
	  state.pos++;
	  return true;
	};


/***/ },
/* 436 */
/***/ function(module, exports) {

	// Remarkable default options

	'use strict';


	module.exports = {
	  options: {
	    html:         false,        // Enable HTML tags in source
	    xhtmlOut:     false,        // Use '/' to close single tags (<br />)
	    breaks:       false,        // Convert '\n' in paragraphs into <br>
	    langPrefix:   'language-',  // CSS language prefix for fenced blocks
	    linkify:      false,        // autoconvert URL-like texts to links
	    linkTarget:   '',           // set target to open link in

	    // Enable some language-neutral replacements + quotes beautification
	    typographer:  false,

	    // Double + single quotes replacement pairs, when typographer enabled,
	    // and smartquotes on. Set doubles to '«»' for Russian, '„“' for German.
	    quotes: '“”‘’',

	    // Highlighter function. Should return escaped HTML,
	    // or '' if input not changed
	    //
	    // function (/*str, lang*/) { return ''; }
	    //
	    highlight: null,

	    maxNesting:   20            // Internal protection, recursion limit
	  },

	  components: {

	    core: {
	      rules: [
	        'block',
	        'inline',
	        'references',
	        'replacements',
	        'linkify',
	        'smartquotes',
	        'references',
	        'abbr2',
	        'footnote_tail'
	      ]
	    },

	    block: {
	      rules: [
	        'blockquote',
	        'code',
	        'fences',
	        'footnote',
	        'heading',
	        'hr',
	        'htmlblock',
	        'lheading',
	        'list',
	        'paragraph',
	        'table'
	      ]
	    },

	    inline: {
	      rules: [
	        'autolink',
	        'backticks',
	        'del',
	        'emphasis',
	        'entity',
	        'escape',
	        'footnote_ref',
	        'htmltag',
	        'links',
	        'newline',
	        'text'
	      ]
	    }
	  }
	};


/***/ },
/* 437 */
/***/ function(module, exports) {

	// Remarkable default options

	'use strict';


	module.exports = {
	  options: {
	    html:         false,        // Enable HTML tags in source
	    xhtmlOut:     false,        // Use '/' to close single tags (<br />)
	    breaks:       false,        // Convert '\n' in paragraphs into <br>
	    langPrefix:   'language-',  // CSS language prefix for fenced blocks
	    linkify:      false,        // autoconvert URL-like texts to links
	    linkTarget:   '',           // set target to open link in

	    // Enable some language-neutral replacements + quotes beautification
	    typographer:  false,

	    // Double + single quotes replacement pairs, when typographer enabled,
	    // and smartquotes on. Set doubles to '«»' for Russian, '„“' for German.
	    quotes:       '“”‘’',

	    // Highlighter function. Should return escaped HTML,
	    // or '' if input not changed
	    //
	    // function (/*str, lang*/) { return ''; }
	    //
	    highlight:     null,

	    maxNesting:    20            // Internal protection, recursion limit
	  },

	  components: {
	    // Don't restrict core/block/inline rules
	    core: {},
	    block: {},
	    inline: {}
	  }
	};


/***/ },
/* 438 */
/***/ function(module, exports) {

	// Commonmark default options

	'use strict';


	module.exports = {
	  options: {
	    html:         true,         // Enable HTML tags in source
	    xhtmlOut:     true,         // Use '/' to close single tags (<br />)
	    breaks:       false,        // Convert '\n' in paragraphs into <br>
	    langPrefix:   'language-',  // CSS language prefix for fenced blocks
	    linkify:      false,        // autoconvert URL-like texts to links
	    linkTarget:   '',           // set target to open link in

	    // Enable some language-neutral replacements + quotes beautification
	    typographer:  false,

	    // Double + single quotes replacement pairs, when typographer enabled,
	    // and smartquotes on. Set doubles to '«»' for Russian, '„“' for German.
	    quotes: '“”‘’',

	    // Highlighter function. Should return escaped HTML,
	    // or '' if input not changed
	    //
	    // function (/*str, lang*/) { return ''; }
	    //
	    highlight: null,

	    maxNesting:   20            // Internal protection, recursion limit
	  },

	  components: {

	    core: {
	      rules: [
	        'block',
	        'inline',
	        'references',
	        'abbr2'
	      ]
	    },

	    block: {
	      rules: [
	        'blockquote',
	        'code',
	        'fences',
	        'heading',
	        'hr',
	        'htmlblock',
	        'lheading',
	        'list',
	        'paragraph'
	      ]
	    },

	    inline: {
	      rules: [
	        'autolink',
	        'backticks',
	        'emphasis',
	        'entity',
	        'escape',
	        'htmltag',
	        'links',
	        'newline',
	        'text'
	      ]
	    }
	  }
	};


/***/ },
/* 439 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(440);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(361)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js!./Documentation.css", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js!./Documentation.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 440 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(354)();
	// imports


	// module
	exports.push([module.id, "table, th, tr, td {\n  border: 1px solid black;\n  padding: 5px;\n}\n", ""]);

	// exports


/***/ },
/* 441 */
/***/ function(module, exports) {

	module.exports = "[![npm](https://img.shields.io/npm/v/react-adminlte-dash.svg)](https://www.npmjs.com/package/react-adminlte-dash)\n[![build status](https://secure.travis-ci.org/zksailor534/react-adminlte-dash.svg)](http://travis-ci.org/zksailor534/react-adminlte-dash)\n[![bitHound Score](https://www.bithound.io/github/zksailor534/react-adminlte-dash/badges/score.svg)](https://www.bithound.io/github/zksailor534/react-adminlte-dash)\n\n## react-adminlte-dash\nReact.js components for AdminLTE themed dashboard.\n\n> Based off of [AdminLTE](https://github.com/almasaeed2010/AdminLTE). Static hosted [demo](http://zksailor534.github.io/react-adminlte-dash/) on GitHub Pages.\n\n### Todo (path to 1.0)\n\n- [ ] Right sidebar\n- [ ] Content formatting\n- [ ] Generic Navbar dropdowns\n- [ ] Messaging Navbar dropdown\n- [ ] Notifications Navbar dropdown\n- [ ] Tasks Navbar dropdown\n- [ ] Top-nav formatting option\n- [ ] Boxed formatting option\n\n## Installation\n\n```bash\nnpm install --save react-adminlte-dash\n```\n\nThis module uses [Styled Components](https://github.com/styled-components/styled-components), so all css styling is included when the module is called.\n\n## Usage\n\nThis module is in development, usage is subject to change.  Not all components are fully functional.\n\nIn ES6:\n```javascript\nimport { Dashboard, Header, Sidebar } from 'react-adminlte-dash';\n\nconst nav = () => ([\n  <Header.Item href=\"/some/link\" key=\"1\" />\n]);\n\nconst sb = () => ([\n  <Sidebar.Menu header=\"NAVIGATION\" key=\"1\">\n    <Sidebar.Menu.Item title=\"Home\" href=\"/\" />\n  </Sidebar.Menu>\n]);\n\nconst App = ({ children }) => (\n  <Dashboard\n    navbarChildren={nav()}\n    sidebarChildren={sb()}\n    theme=\"skin-blue\"\n  >\n    {children}\n  </Dashboard>\n);\n```\n\n## Included Components\n\n### *Dashboard*\n\nMain component for theme.  Handles theming, layout options, and tracks state.\nProvides a default empty header and sidebar.\n\n| Property | Type | Description | Default |\n|:--------:|:----:|:-----------:|:-------:|\n| children | `node` | Any React child components to be rendered in content fields | n/a |\n| navbarChildren | `node` | Any React child components to be rendered in the Header's navbar | n/a |\n| sidebarChildren | `node` | Any React child components to be rendered in the Sidebar | n/a |\n| theme | `string` | Choice of AdminLTE skin themes: `skin-blue`, `skin-black`, `skin-purple`, `skin-green`, `skin-red`, `skin-yellow`, `skin-blue-light`, `skin-black-light`, `skin-purple-light`, `skin-green-light`, `skin-red-light`, `skin-yellow-light` | `skin-blue` |\n| sidebarMini | `bool` | Determines whether sidebar collapses to mini size (`true`) or off-screen (`false`) | `true` |\n| fixed | `bool` | Determines whether the Header is fixed | `false` |\n| logoLg | `element` | A single React component to be rendered when logo is in large state | `<span><b>Admin</b>LTE</span>` |\n| logoSm | `element` | A single React component to be rendered when logo is in small state | `<span><b>A</b>LT</span>` |\n\n### *Header*\n\nHeader component which can be used independently of Dashboard (TBD).  Wrapper for any top-based navigation components.  Provides the following subcomponents:\n* `Header.Item`\n* `Header.User`\n\n| Property | Type | Description | Default |\n|:--------:|:----:|:-----------:|:-------:|\n| children | `node` | Any React child components to be rendered | n/a |\n| fixed | `bool` | Determines whether the Header is fixed | `false` |\n| logoLg | `element` | A single React component to be rendered when logo is in large state | `<span><b>Admin</b>LTE</span>` |\n| logoSm | `element` | A single React component to be rendered when logo is in small state | `<span><b>A</b>LT</span>` |\n| sidebarMini | `bool` | Determines whether sidebar collapses to mini size (`true`) or off-screen (`false`) | `false` |\n| sidebarCollapse | `bool` | Determines whether sidebar is in a collapsed state | `false` |\n| sidebarToggle | `func` | (Required) function passed to sidebar toggle component to handle sidebar collapse state | n/a |\n\n### *Header.Item*\n\nHeader navbar menu item component.  Renders links with images in header.\n\n| Property | Type | Description | Default |\n|:--------:|:----:|:-----------:|:-------:|\n| children | `node` | Any React child components to be rendered (TBD) | n/a |\n| onClick | `func` | Function to be called on item click | n/a |\n| link | `string` | Link target for logo component, overridden by `onClick` | n/a |\n| image | `string` | Path to image object | n/a |\n\n### *Header.UserMenu*\n\nHeader user menu component.  Renders user menu dropdown component in header bar.\n\n| Property | Type | Description | Default |\n|:--------:|:----:|:-----------:|:-------:|\n| name | `string` | User Name | n/a |\n| image | `string` | Path to user image object | n/a |\n| profileAction | `func` | Function to perform on selection of `Profile` button, button only displayed if action provided | n/a |\n| signOutAction | `func` | Function to perform on selection of `Sign Out` button, button only displayed if action provided | n/a |\n\n### *Sidebar*\n\nSidebar component which can be used independently of Dashboard (TBD).  Wrapper for any sidebar navigation components.  Provides the following subcomponents:\n* `Sidebar.Menu`\n* `Sidebar.UserPanel`\n* `Sidebar.Search`\n\n| Property | Type | Description | Default |\n|:--------:|:----:|:-----------:|:-------:|\n| children | `node` | Any React child components to be rendered | n/a |\n| fixed | `bool` | Determines whether the Header is fixed | `false` |\n| sidebarMini | `bool` | Determines whether sidebar collapses to mini size (`true`) or off-screen (`false`) | `false` |\n| sidebarCollapse | `bool` | Determines whether sidebar is in a collapsed state | `false` |\n\n### *Sidebar.Menu*\n\nSidebar navigation menu component.  Wrapper for SidebarMenuItem components, which are provided as subcomponent:\n* `Sidebar.Menu.Item`\n\n| Property | Type | Description | Default |\n|:--------:|:----:|:-----------:|:-------:|\n| children | `node` | Any React child components to be rendered | n/a |\n| header | `string` | Header title for navigation component | none |\n\n### *Sidebar.Menu.Item*\n\nSidebar navigation menu item component.  Renders as link or dropdown menu.  Can be nested in itself to provided nested dropdown menus.\n\n```javascript\n<Sidebar.Menu.Item title=\"Level 1\">\n  <Sidebar.Menu.Item title=\"Level 2\">\n    <Sidebar.Menu.Item title=\"Level 3\" />\n  </Sidebar.Menu.Item>\n</Sidebar.Menu.Item>\n```\n\n| Property | Type | Description | Default |\n|:--------:|:----:|:-----------:|:-------:|\n| children | `node` | Any React child components to be rendered | n/a |\n| title | `string` | Title for component | none |\n| active | `bool` | Determines if item is considered active | `false` |\n| href | `string` | Link target for component, unused if onClick or children provided | `null` |\n| onClick | `func` | Action for component, unused if children provided, overrides href | `null` |\n| icon | `object` | Expects a `className` key which accepts a string describing any font-awesome icon (i.e. `fa-th`) and/or a `color` key which accepts any Bootstrap style type (i.e. `danger`) or CSS color string (hex, name, or rgb) | `{ className: 'fa-circle-o' }` |\n| labels | `[objects]` | Array of objects, each requires a React `key` string, a `type` key which accepts a string describing any Bootstrap style type (i.e. `danger`) and a `text` key of any string to display | n/a |\n\n### *Sidebar.Search*\n\nSidebar search component.\n\n| Property | Type | Description | Default |\n|:--------:|:----:|:-----------:|:-------:|\n| name | `string` | Initial value displayed in search field | `''` |\n| placeholder | `string` | Initial value displayed in search field | `'Search...'` |\n| onClick | `func` | Function to call on search submit, provided with value prop | `v => alert(`Searching for ${v}`)` |\n\n### *Sidebar.UserPanel*\n\nSidebar user component.\n\n| Property | Type | Description | Default |\n|:--------:|:----:|:-----------:|:-------:|\n| name | `string` | User name | n/a |\n| image | `string` | String providing source path for user image | n/a |\n| online | `bool` | User status: online = `true`, offline = `false` | `false` |\n| href | `string` | Target for user status link | n/a |\n\n### License\n\n*react-adminlte-dash* is available under MIT. See LICENSE for more details.\n"

/***/ }
]);