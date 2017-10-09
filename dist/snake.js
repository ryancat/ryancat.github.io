/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.gameResize = gameResize;
exports.setStarPosition = setStarPosition;
exports.setSnakeBody = setSnakeBody;
exports.leftKeyDown = leftKeyDown;
exports.rightKeyDown = rightKeyDown;
exports.upKeyDown = upKeyDown;
exports.downKeyDown = downKeyDown;
exports.gameOver = gameOver;
exports.nextLevel = nextLevel;
exports.cutSnakeBody = cutSnakeBody;
// Action types
var GAME_RESIZE = exports.GAME_RESIZE = 'GAME_RESIZE';
var SET_STAR_POSITION = exports.SET_STAR_POSITION = 'SET_STAR_POSITION';
var SET_SNAKE_BODY = exports.SET_SNAKE_BODY = 'SET_SNAKE_BODY';
var LEFT_KEYDOWN = exports.LEFT_KEYDOWN = 'LEFT_KEYDOWN';
var RIGHT_KEYDOWN = exports.RIGHT_KEYDOWN = 'RIGHT_KEYDOWN';
var UP_KEYDOWN = exports.UP_KEYDOWN = 'UP_KEYDOWN';
var DOWN_KEYDOWN = exports.DOWN_KEYDOWN = 'DOWN_KEYDOWN';
var GAME_OVER = exports.GAME_OVER = 'GAME_OVER';
var NEXT_LEVEL = exports.NEXT_LEVEL = 'NEXT_LEVEL';
var CUT_SNAKE_BODY = exports.CUT_SNAKE_BODY = 'CUT_SNAKE_BODY';

// Action creators
function gameResize(width, height) {
  return {
    type: GAME_RESIZE,
    width: width,
    height: height
  };
}

function setStarPosition(row, column) {
  return {
    type: SET_STAR_POSITION,
    row: row,
    column: column
  };
}

function setSnakeBody(body) {
  return {
    type: SET_SNAKE_BODY,
    body: body
  };
}

function leftKeyDown() {
  return {
    type: LEFT_KEYDOWN
  };
}

function rightKeyDown() {
  return {
    type: RIGHT_KEYDOWN
  };
}

function upKeyDown() {
  return {
    type: UP_KEYDOWN
  };
}

function downKeyDown() {
  return {
    type: DOWN_KEYDOWN
  };
}

function gameOver() {
  return {
    type: GAME_OVER
  };
}

function nextLevel(snakeBody) {
  return {
    type: NEXT_LEVEL,
    snakeBody: snakeBody
  };
}

function cutSnakeBody(cutBodyIndex) {
  return {
    type: CUT_SNAKE_BODY,
    cutBodyIndex: cutBodyIndex
  };
}

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var gameDefault = exports.gameDefault = {
  rows: 16,
  columns: 16,
  speed: 0.3,
  hitDetectionBuffer: 0.5
};

var direction = exports.direction = {
  UP: 'UP',
  DOWN: 'DOWN',
  LEFT: 'LEFT',
  RIGHT: 'RIGHT'
};

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["gamux"] = factory();
	else
		root["gamux"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _stateManager = __webpack_require__(2);

/**
 * The animation loop key for cancel animation
 */
var _animationLoopKey = null;
/**
 * Accumulator for time-based animation
 */
var _accumulator = 0;
/**
 * The default fps
 */
var _fps = 60;
/**
 * The store for game
 */
var _store = {};

var _updaterMap = {};

var _rendererMap = {};

/**
 * Trigger game loop
 */
function _loop(lastTimestamp) {
  _animationLoopKey = window.requestAnimationFrame(function () {
    var now = Date.now();
    var dt = 1000 / _fps;
    _accumulator += now - lastTimestamp;

    if (_accumulator >= dt) {
      while (_accumulator >= dt) {
        _accumulator -= dt;
      }
      for (var key in _rendererMap) {
        var renderer = _rendererMap[key];
        renderer.renderState = renderer(renderer.renderState, renderer.finalRenderState, dt);
      }
    }
    _loop(now);
  });
}

var gamux = {
  config: function config() {
    var _config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    // Config the private globals
    _fps = _config.fps || _fps;

    var container = _config.container;

    // Create game layers
    _config.layers.forEach(function (layer) {
      var canvas = document.createElement('canvas');
      container.appendChild(canvas);

      _updaterMap[layer.name] = layer.updater;
      _rendererMap[layer.name] = layer.render.bind(null, canvas);
    });

    // Create game store
    _store = (0, _stateManager.createStore)((0, _stateManager.combineReducer)(_config.reducerMap, (0, _stateManager.combineUpdater)(_updaterMap, _rendererMap)));
    if (_config.init) {
      _config.init(_store.getState());
    }
  },

  getState: function getState(stateKey) {
    return _store.getState(stateKey);
  },

  layers: {},

  start: function start() {
    _loop(Date.now());
  },

  dispatch: function dispatch(action) {
    _store.dispatch(action);
  }

  // *
  //  * Game will be available once configured
};

exports.default = gamux;

// TODO
// 1. Build file for ES6 modules

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createStore = createStore;
exports.combineReducer = combineReducer;
exports.combineUpdater = combineUpdater;
function createStore(reducer) {
  // Init state
  var state = reducer();

  return {
    /**
     * Dispatch action to trigger state changes
     */
    dispatch: function dispatch() {
      var action = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      if (true) {
        // log actions in console
        console.group(action.type);
        console.info('%cbefore:', 'color: green', state);
        console.info('%caction:', 'color: red', action);
      }

      // Update state
      state = reducer(state, action);
      // State manager doesn't care about noticing
      // game to update state. Instead reducers
      // should set dirty state for game loop to
      // trigger update

      if (true) {
        // log actions in console
        console.info('%cafter:', 'color: green', state);
        console.groupEnd();
      }
    },
    /**
     * Return the current state for given key
     * This is to allow application to 'connect' to state
     */
    getState: function getState(stateKey) {
      if (!stateKey) {
        return state;
      } else {
        return state[stateKey];
      }
    }
  };
}

// Assume the recuerMap is a flat map to all reducers
function combineReducer() {
  var reducerMap = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var updater = arguments[1];


  // Generate a combined reducer function
  return function () {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    var newState = {},
        dirtyKeys = [];

    // Spread the action to all reducers inside the combined one
    for (var key in reducerMap) {
      // Pass the whole state down as argument for
      // cross state key access
      var reducedState = reducerMap[key](state[key], action, state);

      if (reducedState !== state[key]) {
        dirtyKeys.push(key);
      }

      newState[key] = reducedState;
    }

    // Call update function for each reduced state
    updater(newState, dirtyKeys);

    // dirtyKeys.forEach((dirtyKey) => {
    //   updaterMap[dirtyKey](newState, dirtyKey)
    // })

    return newState;
  };
}

function combineUpdater() {
  var updaterMap = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var rendererMap = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  // Generate combined updater function for all updaters
  return function () {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var dirtyKeys = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

    var newFinalRenderState = {};
    for (var key in updaterMap) {
      // Compute the final render state and pass into renderer
      rendererMap[key].finalRenderState = updaterMap[key](rendererMap[key].finalRenderState, state, dirtyKeys);
    }
  };
}

/***/ })
/******/ ]);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCA2MDVhNzBlMjgyNGVkZjBjZmVhNiIsIndlYnBhY2s6Ly8vLi9zcmMvZ2FtdXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRlTWFuYWdlci5qcyJdLCJuYW1lcyI6WyJfYW5pbWF0aW9uTG9vcEtleSIsIl9hY2N1bXVsYXRvciIsIl9mcHMiLCJfc3RvcmUiLCJfdXBkYXRlck1hcCIsIl9yZW5kZXJlck1hcCIsIl9sb29wIiwibGFzdFRpbWVzdGFtcCIsIndpbmRvdyIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsIm5vdyIsIkRhdGUiLCJkdCIsImtleSIsInJlbmRlcmVyIiwicmVuZGVyU3RhdGUiLCJmaW5hbFJlbmRlclN0YXRlIiwiZ2FtdXgiLCJjb25maWciLCJmcHMiLCJjb250YWluZXIiLCJsYXllcnMiLCJmb3JFYWNoIiwibGF5ZXIiLCJjYW52YXMiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJhcHBlbmRDaGlsZCIsIm5hbWUiLCJ1cGRhdGVyIiwicmVuZGVyIiwiYmluZCIsInJlZHVjZXJNYXAiLCJpbml0IiwiZ2V0U3RhdGUiLCJzdGF0ZUtleSIsInN0YXJ0IiwiZGlzcGF0Y2giLCJhY3Rpb24iLCJjcmVhdGVTdG9yZSIsImNvbWJpbmVSZWR1Y2VyIiwiY29tYmluZVVwZGF0ZXIiLCJyZWR1Y2VyIiwic3RhdGUiLCJjb25zb2xlIiwiZ3JvdXAiLCJ0eXBlIiwiaW5mbyIsImdyb3VwRW5kIiwibmV3U3RhdGUiLCJkaXJ0eUtleXMiLCJyZWR1Y2VkU3RhdGUiLCJwdXNoIiwidXBkYXRlck1hcCIsInJlbmRlcmVyTWFwIiwibmV3RmluYWxSZW5kZXJTdGF0ZSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNWQTtB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QUFXLEVBQWY7QUFBQSxRQUNJQyxZQUFZLEVBRGhCOztBQUdBO0FBQ0EsU0FBSyxJQUFJckMsR0FBVCxJQUFnQm1CLFVBQWhCLEVBQTRCO0FBQzFCO0FBQ0E7QUFDQSxVQUFJbUIsZUFBZW5CLFdBQVduQixHQUFYLEVBQWdCOEIsTUFBTTlCLEdBQU4sQ0FBaEIsRUFBNEJ5QixNQUE1QixFQUFvQ0ssS0FBcEMsQ0FBbkI7O0FBRUEsVUFBSVEsaUJBQWlCUixNQUFNOUIsR0FBTixDQUFyQixFQUFpQztBQUMvQnFDLGtCQUFVRSxJQUFWLENBQWV2QyxHQUFmO0FBQ0Q7O0FBRURvQyxlQUFTcEMsR0FBVCxJQUFnQnNDLFlBQWhCO0FBQ0Q7O0FBRUQ7QUFDQXRCLFlBQVFvQixRQUFSLEVBQWtCQyxTQUFsQjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsV0FBT0QsUUFBUDtBQUNELEdBekJEO0FBMEJEOztBQUVNLFNBQVNSLGNBQVQsR0FBNEQ7QUFBQSxNQUFuQ1ksVUFBbUMsdUVBQXRCLEVBQXNCO0FBQUEsTUFBbEJDLFdBQWtCLHVFQUFKLEVBQUk7O0FBQ2pFO0FBQ0EsU0FBTyxZQUFnQztBQUFBLFFBQS9CWCxLQUErQix1RUFBdkIsRUFBdUI7QUFBQSxRQUFuQk8sU0FBbUIsdUVBQVAsRUFBTzs7QUFDckMsUUFBSUssc0JBQXNCLEVBQTFCO0FBQ0EsU0FBSyxJQUFJMUMsR0FBVCxJQUFnQndDLFVBQWhCLEVBQTRCO0FBQzFCO0FBQ0FDLGtCQUFZekMsR0FBWixFQUFpQkcsZ0JBQWpCLEdBQW9DcUMsV0FBV3hDLEdBQVgsRUFBZ0J5QyxZQUFZekMsR0FBWixFQUFpQkcsZ0JBQWpDLEVBQW1EMkIsS0FBbkQsRUFBMERPLFNBQTFELENBQXBDO0FBQ0Q7QUFDRixHQU5EO0FBT0QsQyIsImZpbGUiOiJnYW11eC5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcImdhbXV4XCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcImdhbXV4XCJdID0gZmFjdG9yeSgpO1xufSkodGhpcywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9cIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCA2MDVhNzBlMjgyNGVkZjBjZmVhNiIsImltcG9ydCB7Y29tYmluZVJlZHVjZXIsIGNyZWF0ZVN0b3JlLCBjb21iaW5lVXBkYXRlcn0gZnJvbSAnLi9zdGF0ZU1hbmFnZXInXG5cbi8qKlxuICogVGhlIGFuaW1hdGlvbiBsb29wIGtleSBmb3IgY2FuY2VsIGFuaW1hdGlvblxuICovXG5sZXQgX2FuaW1hdGlvbkxvb3BLZXkgPSBudWxsXG4vKipcbiAqIEFjY3VtdWxhdG9yIGZvciB0aW1lLWJhc2VkIGFuaW1hdGlvblxuICovXG5sZXQgX2FjY3VtdWxhdG9yID0gMFxuLyoqXG4gKiBUaGUgZGVmYXVsdCBmcHNcbiAqL1xubGV0IF9mcHMgPSA2MFxuLyoqXG4gKiBUaGUgc3RvcmUgZm9yIGdhbWVcbiAqL1xubGV0IF9zdG9yZSA9IHt9XG5cbmxldCBfdXBkYXRlck1hcCA9IHt9XG5cbmxldCBfcmVuZGVyZXJNYXAgPSB7fVxuXG4vKipcbiAqIFRyaWdnZXIgZ2FtZSBsb29wXG4gKi9cbmZ1bmN0aW9uIF9sb29wIChsYXN0VGltZXN0YW1wKSB7XG4gIF9hbmltYXRpb25Mb29wS2V5ID0gd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgY29uc3Qgbm93ID0gRGF0ZS5ub3coKVxuICAgIGNvbnN0IGR0ID0gMTAwMCAvIF9mcHNcbiAgICBfYWNjdW11bGF0b3IgKz0gbm93IC0gbGFzdFRpbWVzdGFtcFxuXG4gICAgaWYgKF9hY2N1bXVsYXRvciA+PSBkdCkge1xuICAgICAgd2hpbGUgKF9hY2N1bXVsYXRvciA+PSBkdCkge1xuICAgICAgICBfYWNjdW11bGF0b3IgLT0gZHRcbiAgICAgIH1cbiAgICAgIGZvciAobGV0IGtleSBpbiBfcmVuZGVyZXJNYXApIHtcbiAgICAgICAgbGV0IHJlbmRlcmVyID0gX3JlbmRlcmVyTWFwW2tleV1cbiAgICAgICAgcmVuZGVyZXIucmVuZGVyU3RhdGUgPSByZW5kZXJlcihyZW5kZXJlci5yZW5kZXJTdGF0ZSwgcmVuZGVyZXIuZmluYWxSZW5kZXJTdGF0ZSwgZHQpXG4gICAgICB9XG4gICAgfVxuICAgIF9sb29wKG5vdylcbiAgfSlcbn1cblxuY29uc3QgZ2FtdXggPSB7XG4gIGNvbmZpZzogKGNvbmZpZyA9IHt9KSA9PiB7XG4gICAgLy8gQ29uZmlnIHRoZSBwcml2YXRlIGdsb2JhbHNcbiAgICBfZnBzID0gY29uZmlnLmZwcyB8fCBfZnBzXG5cbiAgICBsZXQgY29udGFpbmVyID0gY29uZmlnLmNvbnRhaW5lclxuXG4gICAgLy8gQ3JlYXRlIGdhbWUgbGF5ZXJzXG4gICAgY29uZmlnLmxheWVycy5mb3JFYWNoKChsYXllcikgPT4ge1xuICAgICAgbGV0IGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpXG4gICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoY2FudmFzKVxuXG4gICAgICBfdXBkYXRlck1hcFtsYXllci5uYW1lXSA9IGxheWVyLnVwZGF0ZXJcbiAgICAgIF9yZW5kZXJlck1hcFtsYXllci5uYW1lXSA9IGxheWVyLnJlbmRlci5iaW5kKG51bGwsIGNhbnZhcylcbiAgICB9KVxuXG4gICAgLy8gQ3JlYXRlIGdhbWUgc3RvcmVcbiAgICBfc3RvcmUgPSBjcmVhdGVTdG9yZShjb21iaW5lUmVkdWNlcihjb25maWcucmVkdWNlck1hcCwgY29tYmluZVVwZGF0ZXIoX3VwZGF0ZXJNYXAsIF9yZW5kZXJlck1hcCkpKVxuICAgIGlmIChjb25maWcuaW5pdCkge1xuICAgICAgY29uZmlnLmluaXQoX3N0b3JlLmdldFN0YXRlKCkpXG4gICAgfVxuICB9LFxuXG4gIGdldFN0YXRlOiAoc3RhdGVLZXkpID0+IHtcbiAgICByZXR1cm4gX3N0b3JlLmdldFN0YXRlKHN0YXRlS2V5KVxuICB9LFxuXG4gIGxheWVyczoge30sXG5cbiAgc3RhcnQ6ICgpID0+IHtcbiAgICBfbG9vcChEYXRlLm5vdygpKVxuICB9LFxuXG4gIGRpc3BhdGNoOiAoYWN0aW9uKSA9PiB7XG4gICAgX3N0b3JlLmRpc3BhdGNoKGFjdGlvbilcbiAgfVxuXG4gIC8vICpcbiAgLy8gICogR2FtZSB3aWxsIGJlIGF2YWlsYWJsZSBvbmNlIGNvbmZpZ3VyZWRcbn1cblxuZXhwb3J0IGRlZmF1bHQgZ2FtdXhcblxuXG4vLyBUT0RPXG4vLyAxLiBCdWlsZCBmaWxlIGZvciBFUzYgbW9kdWxlc1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9nYW11eC5qcyIsImV4cG9ydCBmdW5jdGlvbiBjcmVhdGVTdG9yZSAocmVkdWNlcikge1xuICAvLyBJbml0IHN0YXRlXG4gIGxldCBzdGF0ZSA9IHJlZHVjZXIoKVxuXG4gIHJldHVybiB7XG4gICAgLyoqXG4gICAgICogRGlzcGF0Y2ggYWN0aW9uIHRvIHRyaWdnZXIgc3RhdGUgY2hhbmdlc1xuICAgICAqL1xuICAgIGRpc3BhdGNoOiAoYWN0aW9uID0ge30pID0+IHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5jb2RlID09PSAnREVWJykge1xuICAgICAgICAvLyBsb2cgYWN0aW9ucyBpbiBjb25zb2xlXG4gICAgICAgIGNvbnNvbGUuZ3JvdXAoYWN0aW9uLnR5cGUpXG4gICAgICAgIGNvbnNvbGUuaW5mbygnJWNiZWZvcmU6JywgJ2NvbG9yOiBncmVlbicsIHN0YXRlKVxuICAgICAgICBjb25zb2xlLmluZm8oJyVjYWN0aW9uOicsICdjb2xvcjogcmVkJywgYWN0aW9uKVxuICAgICAgfVxuICAgICAgXG4gICAgICAvLyBVcGRhdGUgc3RhdGVcbiAgICAgIHN0YXRlID0gcmVkdWNlcihzdGF0ZSwgYWN0aW9uKVxuICAgICAgLy8gU3RhdGUgbWFuYWdlciBkb2Vzbid0IGNhcmUgYWJvdXQgbm90aWNpbmdcbiAgICAgIC8vIGdhbWUgdG8gdXBkYXRlIHN0YXRlLiBJbnN0ZWFkIHJlZHVjZXJzXG4gICAgICAvLyBzaG91bGQgc2V0IGRpcnR5IHN0YXRlIGZvciBnYW1lIGxvb3AgdG9cbiAgICAgIC8vIHRyaWdnZXIgdXBkYXRlXG5cbiAgICAgIGlmIChwcm9jZXNzLmVudi5jb2RlID09PSAnREVWJykge1xuICAgICAgICAvLyBsb2cgYWN0aW9ucyBpbiBjb25zb2xlXG4gICAgICAgIGNvbnNvbGUuaW5mbygnJWNhZnRlcjonLCAnY29sb3I6IGdyZWVuJywgc3RhdGUpXG4gICAgICAgIGNvbnNvbGUuZ3JvdXBFbmQoKVxuICAgICAgfVxuICAgIH0sXG4gICAgLyoqXG4gICAgICogUmV0dXJuIHRoZSBjdXJyZW50IHN0YXRlIGZvciBnaXZlbiBrZXlcbiAgICAgKiBUaGlzIGlzIHRvIGFsbG93IGFwcGxpY2F0aW9uIHRvICdjb25uZWN0JyB0byBzdGF0ZVxuICAgICAqL1xuICAgIGdldFN0YXRlOiAoc3RhdGVLZXkpID0+IHtcbiAgICAgIGlmICghc3RhdGVLZXkpIHtcbiAgICAgICAgcmV0dXJuIHN0YXRlXG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHN0YXRlW3N0YXRlS2V5XVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4vLyBBc3N1bWUgdGhlIHJlY3Vlck1hcCBpcyBhIGZsYXQgbWFwIHRvIGFsbCByZWR1Y2Vyc1xuZXhwb3J0IGZ1bmN0aW9uIGNvbWJpbmVSZWR1Y2VyIChyZWR1Y2VyTWFwID0ge30sIHVwZGF0ZXIpIHtcblxuICAvLyBHZW5lcmF0ZSBhIGNvbWJpbmVkIHJlZHVjZXIgZnVuY3Rpb25cbiAgcmV0dXJuIChzdGF0ZSA9IHt9LCBhY3Rpb24gPSB7fSkgPT4ge1xuICAgIGxldCBuZXdTdGF0ZSA9IHt9LFxuICAgICAgICBkaXJ0eUtleXMgPSBbXVxuXG4gICAgLy8gU3ByZWFkIHRoZSBhY3Rpb24gdG8gYWxsIHJlZHVjZXJzIGluc2lkZSB0aGUgY29tYmluZWQgb25lXG4gICAgZm9yIChsZXQga2V5IGluIHJlZHVjZXJNYXApIHtcbiAgICAgIC8vIFBhc3MgdGhlIHdob2xlIHN0YXRlIGRvd24gYXMgYXJndW1lbnQgZm9yXG4gICAgICAvLyBjcm9zcyBzdGF0ZSBrZXkgYWNjZXNzXG4gICAgICBsZXQgcmVkdWNlZFN0YXRlID0gcmVkdWNlck1hcFtrZXldKHN0YXRlW2tleV0sIGFjdGlvbiwgc3RhdGUpXG5cbiAgICAgIGlmIChyZWR1Y2VkU3RhdGUgIT09IHN0YXRlW2tleV0pIHtcbiAgICAgICAgZGlydHlLZXlzLnB1c2goa2V5KVxuICAgICAgfVxuXG4gICAgICBuZXdTdGF0ZVtrZXldID0gcmVkdWNlZFN0YXRlXG4gICAgfVxuXG4gICAgLy8gQ2FsbCB1cGRhdGUgZnVuY3Rpb24gZm9yIGVhY2ggcmVkdWNlZCBzdGF0ZVxuICAgIHVwZGF0ZXIobmV3U3RhdGUsIGRpcnR5S2V5cylcblxuICAgIC8vIGRpcnR5S2V5cy5mb3JFYWNoKChkaXJ0eUtleSkgPT4ge1xuICAgIC8vICAgdXBkYXRlck1hcFtkaXJ0eUtleV0obmV3U3RhdGUsIGRpcnR5S2V5KVxuICAgIC8vIH0pXG5cbiAgICByZXR1cm4gbmV3U3RhdGVcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gY29tYmluZVVwZGF0ZXIgKHVwZGF0ZXJNYXAgPSB7fSwgcmVuZGVyZXJNYXAgPSB7fSkge1xuICAvLyBHZW5lcmF0ZSBjb21iaW5lZCB1cGRhdGVyIGZ1bmN0aW9uIGZvciBhbGwgdXBkYXRlcnNcbiAgcmV0dXJuIChzdGF0ZSA9IHt9LCBkaXJ0eUtleXMgPSBbXSkgPT4ge1xuICAgIGxldCBuZXdGaW5hbFJlbmRlclN0YXRlID0ge31cbiAgICBmb3IgKGxldCBrZXkgaW4gdXBkYXRlck1hcCkge1xuICAgICAgLy8gQ29tcHV0ZSB0aGUgZmluYWwgcmVuZGVyIHN0YXRlIGFuZCBwYXNzIGludG8gcmVuZGVyZXJcbiAgICAgIHJlbmRlcmVyTWFwW2tleV0uZmluYWxSZW5kZXJTdGF0ZSA9IHVwZGF0ZXJNYXBba2V5XShyZW5kZXJlck1hcFtrZXldLmZpbmFsUmVuZGVyU3RhdGUsIHN0YXRlLCBkaXJ0eUtleXMpXG4gICAgfVxuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc3RhdGVNYW5hZ2VyLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _gamux = __webpack_require__(2);

var _gamux2 = _interopRequireDefault(_gamux);

var _snakeReducer = __webpack_require__(4);

var _snakeReducer2 = _interopRequireDefault(_snakeReducer);

var _worldReducer = __webpack_require__(5);

var _worldReducer2 = _interopRequireDefault(_worldReducer);

var _worldLayer = __webpack_require__(6);

var _snakeLayer = __webpack_require__(7);

var _actions = __webpack_require__(0);

var _theme = __webpack_require__(1);

__webpack_require__(8);

__webpack_require__(9);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import './index.html'
var container = document.getElementById('root');

_gamux2.default.config({
  fps: 60,

  container: container,

  layers: [{
    name: 'worldLayer',
    updater: _worldLayer.worldLayerUpdater,
    render: _worldLayer.worldLayerRender
  }, {
    name: 'snakeLayer',
    updater: _snakeLayer.snakeLayerUpdater,
    render: _snakeLayer.snakeLayerRender
  }],

  /**
   * The map for all reducers the store can break down
   */
  reducerMap: {
    snake: _snakeReducer2.default,
    world: _worldReducer2.default
  },

  /**
   * init game. Getting called before game loop starts
   */
  init: function init(gameState) {
    console.log('init');
    // Make sure container dimension is init
    _gamux2.default.dispatch((0, _actions.gameResize)(container.offsetWidth, container.offsetHeight));

    var worldState = gameState['world'],
        snakeState = gameState['snake'];

    // Init world based on initial state
    var rows = worldState.rows,
        columns = worldState.columns,
        starRow = Math.floor(Math.random() * rows),
        starColumn = Math.floor(Math.random() * columns);


    _gamux2.default.dispatch((0, _actions.setStarPosition)(starRow, starColumn));

    // Init snake based on world
    var body = [];
    do {
      var headRow = Math.floor(Math.random() * rows),
          headColumn = Math.floor(Math.random() * columns);

      body[0] = {
        row: headRow,
        column: headColumn
      };

      var isHorizontal = Math.random() > 0.5;
      body[1] = {
        row: headRow + (isHorizontal ? Math.random() > 0.5 ? 1 : -1 : 0),
        column: headColumn + (isHorizontal ? 0 : Math.random() > 0.5 ? 1 : -1)
      };
    } while (!body.every(function (bodyBlock) {
      return bodyBlock.row !== starRow && bodyBlock.column !== starColumn && bodyBlock.row >= 0 && bodyBlock.row < rows && bodyBlock.column >= 0 && bodyBlock.column < columns;
    }));
    _gamux2.default.dispatch((0, _actions.setSnakeBody)(body));

    // Setup listener
    window.onload = window.onresize = function () {
      _gamux2.default.dispatch((0, _actions.gameResize)(container.offsetWidth, container.offsetHeight));
    };

    document.addEventListener('keydown', function (evt) {
      switch (evt.keyCode) {
        case 37:
          // Left
          _gamux2.default.dispatch((0, _actions.leftKeyDown)());
          break;
        case 38:
          // Up
          _gamux2.default.dispatch((0, _actions.upKeyDown)());
          break;
        case 39:
          // Right
          _gamux2.default.dispatch((0, _actions.rightKeyDown)());
          break;
        case 40:
          // Down
          _gamux2.default.dispatch((0, _actions.downKeyDown)());
          break;
      }
    });

    // For mobile
    var touchStart = {
      x: -1,
      y: -1
    },
        touchMoveBuffer = 10;

    function handleTouchStart(evt) {
      if (typeof evt.touches === 'undefined') {
        return;
      }

      var touch = evt.touches[0];

      touchStart.x = touch.pageX;
      touchStart.y = touch.pageY;
    }

    function handleTouchMove(evt) {
      evt.preventDefault();

      if (typeof evt.touches === 'undefined') {
        return;
      }

      var touch = evt.touches[0],
          headDirection = _gamux2.default.getState('snake').direction;

      var dx = touch.pageX - touchStart.x,
          dy = touch.pageY - touchStart.y;

      if (Math.abs(dx) <= touchMoveBuffer && Math.abs(dy) <= touchMoveBuffer) {
        return;
      }

      if (Math.abs(dx) > Math.abs(dy)) {
        // Horizontal move
        if (dx > 0 && headDirection !== _theme.direction.RIGHT) {
          _gamux2.default.dispatch((0, _actions.rightKeyDown)());
        } else if (dx < 0 && headDirection !== _theme.direction.LEFT) {
          _gamux2.default.dispatch((0, _actions.leftKeyDown)());
        }
      } else {
        // Vertical move
        if (dy > 0 && headDirection !== _theme.direction.DOWN) {
          _gamux2.default.dispatch((0, _actions.downKeyDown)());
        } else if (dy < 0 && headDirection !== _theme.direction.UP) {
          _gamux2.default.dispatch((0, _actions.upKeyDown)());
        }
      }

      touchStart.x = touch.pageX;
      touchStart.y = touch.pageY;
    }

    document.addEventListener('touchstart', handleTouchStart);
    document.addEventListener('touchmove', handleTouchMove);
  }
});

_gamux2.default.start();

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _actions = __webpack_require__(0);

var _theme = __webpack_require__(1);

var initState = {
  /**
   * A linked list for snake body
   */
  body: [],
  isMove: false,
  speed: _theme.gameDefault.speed,
  rows: _theme.gameDefault.rows,
  columns: _theme.gameDefault.columns,
  level: 1
};

exports.default = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initState;
  var action = arguments[1];

  switch (action.type) {

    case _actions.SET_SNAKE_BODY:
      {
        var body = action.body;


        return Object.assign({}, state, {
          body: body,
          isMove: true
        });
      }

    case _actions.UP_KEYDOWN:
      {
        var _body = state.body.slice();

        if (_body[0].row === _body[1].row + 1) {
          // Hit backwards 
          // This should trigger nothing
          return state;
        }

        _body.reverse().reduce(function (first, second) {
          first.row = second.row;
          first.column = second.column;
          return second;
        });
        _body.reverse();

        _body[0].row -= 1;

        return Object.assign({}, state, {
          isMove: true,
          body: _body,
          direction: _theme.direction.UP
        });
      }

    case _actions.DOWN_KEYDOWN:
      {
        var _body2 = state.body.slice();

        if (_body2[0].row === _body2[1].row - 1) {
          // Hit backwards 
          // This should trigger nothing
          return state;
        }

        _body2.reverse().reduce(function (first, second) {
          first.row = second.row;
          first.column = second.column;
          return second;
        });
        _body2.reverse();

        _body2[0].row += 1;

        return Object.assign({}, state, {
          isMove: true,
          body: _body2,
          direction: _theme.direction.DOWN
        });
      }

    case _actions.LEFT_KEYDOWN:
      {
        var _body3 = state.body.slice();

        if (_body3[0].column === _body3[1].column + 1) {
          // Hit backwards 
          // This should trigger nothing
          return state;
        }

        _body3.reverse().reduce(function (first, second) {
          first.row = second.row;
          first.column = second.column;
          return second;
        });
        _body3.reverse();

        _body3[0].column -= 1;

        return Object.assign({}, state, {
          isMove: true,
          body: _body3,
          direction: _theme.direction.LEFT
        });
      }

    case _actions.RIGHT_KEYDOWN:
      {
        var _body4 = state.body.slice();

        if (_body4[0].column === _body4[1].column - 1) {
          // Hit backwards 
          // This should trigger nothing
          return state;
        }

        _body4.reverse().reduce(function (first, second) {
          first.row = second.row;
          first.column = second.column;
          return second;
        });
        _body4.reverse();

        _body4[0].column += 1;

        return Object.assign({}, state, {
          isMove: true,
          body: _body4,
          direction: _theme.direction.RIGHT
        });
      }

    case _actions.NEXT_LEVEL:
      {
        var _body5 = state.body.slice(),
            head = _body5[0],
            headDirection = state.direction;

        if (!head) {
          return state;
        }

        _body5.unshift({
          row: headDirection === _theme.direction.UP ? head.row - 1 : headDirection === _theme.direction.DOWN ? head.row + 1 : head.row,
          column: headDirection === _theme.direction.LEFT ? head.column - 1 : headDirection === _theme.direction.RIGHT ? head.column + 1 : head.column
        });

        return Object.assign({}, state, {
          body: _body5,
          level: state.level + 1,
          speed: _theme.gameDefault.speed + (state.level - 1) * 0.02
        });
      }

    case _actions.GAME_OVER:
      {
        return Object.assign({}, state, {
          isMove: false
        });
      }

    case _actions.CUT_SNAKE_BODY:
      {
        var _body6 = state.body.slice(),
            cutBodyIndex = action.cutBodyIndex,
            newLevel = cutBodyIndex - 1;


        _body6.splice(cutBodyIndex);

        return Object.assign({}, state, {
          body: _body6,
          level: newLevel,
          speed: _theme.gameDefault.speed + newLevel * 0.02
        });
      }

    default:
      return state;
  }
};

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _actions = __webpack_require__(0);

var _theme = __webpack_require__(1);

var initState = {
  width: -1,
  height: -1,
  rows: _theme.gameDefault.rows,
  columns: _theme.gameDefault.columns,
  starPosition: {
    row: -1,
    column: -1
  },
  level: 1,
  highLevel: 1,
  isGameover: false
};

function isOverlap(starPosition, snakeBody) {
  return !snakeBody.every(function (bodyBlock) {
    return bodyBlock.row !== starPosition.row && bodyBlock.column !== starPosition.column;
  });
}

exports.default = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initState;
  var action = arguments[1];

  switch (action.type) {

    case _actions.GAME_RESIZE:
      {
        var gameSize = Math.min(Math.min(action.width, action.height), 600);

        return Object.assign({}, state, {
          width: gameSize,
          height: gameSize
        });
      }

    case _actions.SET_STAR_POSITION:
      return Object.assign({}, state, {
        starPosition: {
          row: action.row,
          column: action.column
        }
      });

    case _actions.NEXT_LEVEL:
      {
        var snakeBody = action.snakeBody,
            newStarPosition = {},
            newLevel = state.level + 1;

        do {
          newStarPosition.row = Math.floor(Math.random() * state.rows);
          newStarPosition.column = Math.floor(Math.random() * state.columns);
        } while (isOverlap(newStarPosition, snakeBody));

        return Object.assign({}, state, {
          starPosition: newStarPosition,
          level: newLevel,
          highLevel: Math.max(state.highLevel, newLevel)
        });
      }

    case _actions.GAME_OVER:
      {
        return Object.assign({}, state, {
          isGameover: true
        });
      }

    case _actions.CUT_SNAKE_BODY:
      {
        return Object.assign({}, state, {
          level: action.cutBodyIndex - 1
        });
      }

    default:
      return state;
  }
};

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var initFinalRenderState = {};

var worldLayerUpdater = exports.worldLayerUpdater = function worldLayerUpdater() {
  var finalRenderState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initFinalRenderState;
  var gameState = arguments[1];
  var dirtyKeys = arguments[2];

  if (dirtyKeys.indexOf('world') >= 0) {
    var _gameState$world = gameState['world'],
        width = _gameState$world.width,
        height = _gameState$world.height,
        rows = _gameState$world.rows,
        columns = _gameState$world.columns,
        starPosition = _gameState$world.starPosition,
        level = _gameState$world.level,
        highLevel = _gameState$world.highLevel,
        cellWidth = width / columns,
        cellHeight = height / rows;


    return Object.assign({}, finalRenderState, {
      width: width,
      height: height,
      xs: Array(columns + 1).fill(0).map(function (x, xIndex) {
        return {
          x: xIndex * cellWidth,
          y0: 0,
          y1: height
        };
      }),
      ys: Array(rows + 1).fill(0).map(function (y, yIndex) {
        return {
          y: yIndex * cellHeight,
          x0: 0,
          x1: width
        };
      }),
      star: {
        x: starPosition.column * cellWidth,
        y: starPosition.row * cellHeight,
        width: cellWidth,
        height: cellHeight
      },
      level: level,
      highLevel: highLevel
    });
  } else {
    return finalRenderState;
  }
};

var worldLayerRender = exports.worldLayerRender = function worldLayerRender(canvas, renderState, finalRenderState, dt) {
  if (renderState !== finalRenderState) {
    if (!renderState) {
      renderState = finalRenderState;
    }

    // No animation to world layer
    renderState = finalRenderState;

    var _renderState = renderState,
        width = _renderState.width,
        height = _renderState.height,
        xs = _renderState.xs,
        ys = _renderState.ys,
        level = _renderState.level,
        highLevel = _renderState.highLevel,
        star = _renderState.star;


    var context = canvas.getContext('2d');

    if (canvas.width !== width || canvas.height !== height) {
      canvas.width = width;
      canvas.height = height;
      // Clear canvas manually
      context.clearRect(0, 0, canvas.width, canvas.height);
    }

    // Clear canvas manually before redraw
    context.clearRect(0, 0, canvas.width, canvas.height);

    context.fillStyle = '#ffffff';
    context.fillRect(0, 0, canvas.width, canvas.height);

    context.strokeStyle = '#f9f9f9';
    context.lineWidth = 1;
    context.beginPath();

    xs.forEach(function (verticalLine) {
      context.moveTo(verticalLine.x, verticalLine.y0);
      context.lineTo(verticalLine.x, verticalLine.y1);
      context.stroke();
    });

    ys.forEach(function (horizontalLine) {
      context.moveTo(horizontalLine.x0, horizontalLine.y);
      context.lineTo(horizontalLine.x1, horizontalLine.y);
      context.stroke();
    });

    // Draw text
    context.fillStyle = '#bfbfbf';
    context.font = Math.min(width / 2, height / 2) + 'px arial, helvetica, sans-serif';
    context.textAlign = 'center';
    context.textBaseline = 'middle';
    context.fillText(level, width / 2, height / 2);

    context.font = Math.min(width / 16, height / 16) + 'px arial, helvetica, sans-serif';
    context.fillText('Highest: ' + highLevel, width / 2, height * 0.8);

    // Draw star
    context.fillStyle = '#ffae00';
    context.fillRect(star.x, star.y, star.width, star.height);
  }

  return renderState;
};

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.snakeLayerRender = exports.snakeLayerUpdater = undefined;

var _gamux = __webpack_require__(2);

var _gamux2 = _interopRequireDefault(_gamux);

var _theme = __webpack_require__(1);

var _actions = __webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Function detect hit world edge
 */
function hitStar(snakeHead, star) {
  var hitDetectionBuffer = _theme.gameDefault.hitDetectionBuffer;


  return snakeHead.x + snakeHead.width * hitDetectionBuffer < star.x + star.width && snakeHead.x + snakeHead.width * (1 - hitDetectionBuffer) > star.x && snakeHead.y + snakeHead.height * hitDetectionBuffer < star.y + star.height && snakeHead.y + snakeHead.height * (1 - hitDetectionBuffer) > star.y;
}

function hitOnRight(focus, other, width, height) {
  var hitDetectionBuffer = _theme.gameDefault.hitDetectionBuffer,
      focusX = focus.x > 0 ? focus.x % width : width + focus.x % width,
      focusY = focus.y > 0 ? focus.y % height : height + focus.y % height,
      otherX = other.x > 0 ? other.x % width : width + other.x % width,
      otherY = other.y > 0 ? other.y % height : height + other.y % height;


  return focusX + focus.width * (1 - hitDetectionBuffer) > otherX && focusX + focus.width < otherX + other.width && focusY + focus.height * (1 - hitDetectionBuffer) > otherY && focusY + focus.height * hitDetectionBuffer < otherY + other.height;
}

function hitOnLeft(focus, other, width, height) {
  var hitDetectionBuffer = _theme.gameDefault.hitDetectionBuffer,
      focusX = focus.x > 0 ? focus.x % width : width + focus.x % width,
      focusY = focus.y > 0 ? focus.y % height : height + focus.y % height,
      otherX = other.x > 0 ? other.x % width : width + other.x % width,
      otherY = other.y > 0 ? other.y % height : height + other.y % height;


  return focusX + focus.width * hitDetectionBuffer < otherX + other.width && focusX > otherX && focusY + focus.height * (1 - hitDetectionBuffer) > otherY && focusY + focus.height * hitDetectionBuffer < otherY + other.height;
}

function hitOnBottom(focus, other, width, height) {
  var hitDetectionBuffer = _theme.gameDefault.hitDetectionBuffer,
      focusX = focus.x > 0 ? focus.x % width : width + focus.x % width,
      focusY = focus.y > 0 ? focus.y % height : height + focus.y % height,
      otherX = other.x > 0 ? other.x % width : width + other.x % width,
      otherY = other.y > 0 ? other.y % height : height + other.y % height;


  return focusY + focus.height * (1 - hitDetectionBuffer) > otherY && focusY + focus.height < otherY + other.height && focusX + focus.width * (1 - hitDetectionBuffer) > otherX && focusX + focus.width * hitDetectionBuffer < otherX + other.width;
}

function hitOnTop(focus, other, width, height) {
  var hitDetectionBuffer = _theme.gameDefault.hitDetectionBuffer,
      focusX = focus.x > 0 ? focus.x % width : width + focus.x % width,
      focusY = focus.y > 0 ? focus.y % height : height + focus.y % height,
      otherX = other.x > 0 ? other.x % width : width + other.x % width,
      otherY = other.y > 0 ? other.y % height : height + other.y % height;


  return focusY + focus.height * hitDetectionBuffer < otherY + other.height && focusY > otherY && focusX + focus.width * (1 - hitDetectionBuffer) > otherX && focusX + focus.width * hitDetectionBuffer < otherX + other.width;
}

function getHitBodyIndex(snakeBody, headDirection, width, height) {
  var head = snakeBody[0];

  if (!head) {
    return -1;
  }

  for (var i = 3; i < snakeBody.length; i++) {
    var bodyBlock = snakeBody[i];

    if (headDirection === _theme.direction.UP && hitOnTop(head, bodyBlock, width, height) || headDirection === _theme.direction.DOWN && hitOnBottom(head, bodyBlock, width, height) || headDirection === _theme.direction.LEFT && hitOnLeft(head, bodyBlock, width, height) || headDirection === _theme.direction.RIGHT && hitOnRight(head, bodyBlock, width, height)) {
      return i;
    }
  }

  return -1;
}

function cutSelfByHead(snakeBody, headDirection, width, height) {
  var hitBodyIndex = getHitBodyIndex(snakeBody, headDirection, width, height);

  if (hitBodyIndex < 0) {
    return;
  }

  _gamux2.default.dispatch((0, _actions.cutSnakeBody)(hitBodyIndex));
}

/**
 * Function to fill a free dimension rect
 * example:
 * fillFreeRect(context, -10, -10, 20, 20) will render four
 * rect at each corner with 10 pixel dimension
 */
function fillFreeRect(context, x, y, width, height) {
  var canvasWidth = context.canvas.width,
      canvasHeight = context.canvas.height;

  if (x < 0) {
    x = x % canvasWidth;
    fillFreeRect(context, canvasWidth + x, y, Math.min(-x, width), height);
  }

  if (x > canvasWidth - width) {
    x = x % canvasWidth;
    fillFreeRect(context, Math.max(0, x - canvasWidth), y, width - Math.max(0, canvasWidth - x), height);
  }

  if (y < 0) {
    y = y % canvasHeight;
    fillFreeRect(context, x, canvasHeight + y, width, Math.min(-y, height));
  }

  if (y > canvasHeight - height) {
    y = y % canvasHeight;
    fillFreeRect(context, x, Math.max(0, y - canvasHeight), width, height - Math.max(0, canvasHeight - y));
  }

  context.fillRect(x, y, width, height);
}

var initFinalRenderState = {};

var snakeLayerUpdater = exports.snakeLayerUpdater = function snakeLayerUpdater() {
  var finalRenderState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initFinalRenderState;
  var gameState = arguments[1];
  var dirtyKeys = arguments[2];

  if (dirtyKeys.indexOf('snake') >= 0) {
    var _gameState$world = gameState['world'],
        width = _gameState$world.width,
        height = _gameState$world.height,
        rows = _gameState$world.rows,
        columns = _gameState$world.columns,
        starPosition = _gameState$world.starPosition,
        _gameState$snake = gameState['snake'],
        body = _gameState$snake.body,
        _direction = _gameState$snake.direction,
        isMove = _gameState$snake.isMove,
        speed = _gameState$snake.speed,
        cellWidth = width / columns,
        cellHeight = height / rows;


    return Object.assign({}, finalRenderState, {
      width: width,
      height: height,
      body: body.map(function (bodyBlock, index) {
        var x = bodyBlock.column * cellWidth,
            y = bodyBlock.row * cellHeight;

        return {
          x: bodyBlock.column * cellWidth,
          y: bodyBlock.row * cellHeight,
          width: cellWidth,
          height: cellHeight
          // column: bodyBlock.column,
          // row: bodyBlock.row
        };
      }),
      isMove: isMove,
      speed: speed,
      direction: _direction,
      star: {
        x: starPosition.column * cellWidth,
        y: starPosition.row * cellHeight,
        width: cellWidth,
        height: cellHeight
      }
    });
  } else {
    return finalRenderState;
  }
};

var snakeLayerRender = exports.snakeLayerRender = function snakeLayerRender(canvas, renderState, finalRenderState, dt) {
  if (renderState !== finalRenderState) {
    var context = canvas.getContext('2d'),
        dirty = false;

    if (!renderState) {
      renderState = finalRenderState;
      dirty = true;
    }

    // Set things that are not animated
    Object.assign(renderState, {
      direction: finalRenderState.direction,
      isMove: finalRenderState.isMove,
      speed: finalRenderState.speed,
      width: finalRenderState.width,
      height: finalRenderState.height
    });

    if (canvas.width !== renderState.width || canvas.height !== renderState.height) {
      canvas.width = renderState.width;
      canvas.height = renderState.height;
      // Clear canvas manually
      context.clearRect(0, 0, canvas.width, canvas.height);
    }

    if (!renderState.isMove) {
      // Snake stops move
      return renderState;
    }

    var _renderState = renderState,
        speed = _renderState.speed,
        body = _renderState.body,
        bodyFRS = finalRenderState.body,
        starFRS = finalRenderState.star;

    // Make sure body and bodyFRS are in sync

    if (body.length < bodyFRS.length) {
      // Body grows
      for (var i = body.length; i < bodyFRS.length; i++) {
        var bodyFRSBlock = bodyFRS[i];
        body[i] = {
          x: bodyFRSBlock.x,
          y: bodyFRSBlock.y,
          width: bodyFRSBlock.width,
          height: bodyFRSBlock.height
        };
      }
    } else if (body.length > bodyFRS.length) {
      // Body got cut
      body.splice(bodyFRS.length);
    }

    // Set the actual render dimensions for the snake head
    body.forEach(function (bodyBlock, index) {
      var x = bodyBlock.x,
          y = bodyBlock.y,
          width = bodyBlock.width,
          height = bodyBlock.height;


      if (bodyFRS[index].x !== x) {
        var directionUnit = (bodyFRS[index].x - x) / Math.abs(bodyFRS[index].x - x),
            distance = Math.min(speed * dt, Math.abs(bodyFRS[index].x - x));

        bodyBlock.x += distance * directionUnit;
        dirty = true;
      }

      if (bodyFRS[index].y !== y) {
        var _directionUnit = (bodyFRS[index].y - y) / Math.abs(bodyFRS[index].y - y),
            _distance = Math.min(speed * dt, Math.abs(bodyFRS[index].y - y));

        bodyBlock.y += _distance * _directionUnit;
        dirty = true;
      }
    });

    if (dirty) {
      // We have someting to render here
      context.clearRect(0, 0, canvas.width, canvas.height);

      // Render
      body.forEach(function (bodyBlock, index) {
        if (index === 0) {
          context.fillStyle = '#ea6969';
        } else {
          context.fillStyle = '#3f3f3f';
        }
        fillFreeRect(context, bodyBlock.x, bodyBlock.y, bodyBlock.width, bodyBlock.height);
      });

      // Hit detection
      // Check if snake head hit itself
      // Cut the body if hit itself
      cutSelfByHead(body, renderState.direction, renderState.width, renderState.height);

      // Check if snake head hit star
      var head = body[0],
          headX = head.x % renderState.width,
          headY = head.y % renderState.height,
          headPosition = void 0;

      headX = headX < 0 ? renderState.width + headX : headX;
      headY = headY < 0 ? renderState.height + headY : headY;
      if (hitStar({
        x: headX,
        y: headY,
        width: head.width,
        height: head.height
      }, starFRS)) {
        _gamux2.default.dispatch((0, _actions.nextLevel)(bodyFRS));
      }
    } else {
      // Now that the current final render state has arrived
      // we need to update the final render state
      switch (renderState.direction) {
        case _theme.direction.UP:
          _gamux2.default.dispatch((0, _actions.upKeyDown)());
          break;

        case _theme.direction.DOWN:
          _gamux2.default.dispatch((0, _actions.downKeyDown)());
          break;

        case _theme.direction.LEFT:
          _gamux2.default.dispatch((0, _actions.leftKeyDown)());
          break;

        case _theme.direction.RIGHT:
          _gamux2.default.dispatch((0, _actions.rightKeyDown)());
          break;
      }
    }
  }

  return renderState;
};

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "snake_thumbnail.png";

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(10);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(12)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../node_modules/css-loader/index.js!../../node_modules/sass-loader/lib/loader.js!./index.scss", function() {
			var newContent = require("!!../../node_modules/css-loader/index.js!../../node_modules/sass-loader/lib/loader.js!./index.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(11)(undefined);
// imports


// module
exports.push([module.i, "body,\nhtml {\n  width: 100%;\n  height: 100%;\n  margin: 0;\n  padding: 0;\n  overflow: hidden; }\n\n#root {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  background-color: #ededed;\n  text-align: center; }\n  #root h2 {\n    margin: 0; }\n\n#root canvas {\n  position: fixed;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%); }\n", ""]);

// exports


/***/ }),
/* 11 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
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

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getElement = (function (fn) {
	var memo = {};

	return function(selector) {
		if (typeof memo[selector] === "undefined") {
			memo[selector] = fn.call(this, selector);
		}

		return memo[selector]
	};
})(function (target) {
	return document.querySelector(target)
});

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(13);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton) options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
	if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
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

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	options.attrs.type = "text/css";

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

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

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 13 */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgYmMzMmVlMThmMWJmODVhMjQ0OTkiLCJ3ZWJwYWNrOi8vLy4vZGVtby9zbmFrZS9hY3Rpb25zLmpzIiwid2VicGFjazovLy8uL2RlbW8vc25ha2UvdGhlbWUuanMiLCJ3ZWJwYWNrOi8vLy4vZGlzdC9nYW11eC5qcyIsIndlYnBhY2s6Ly8vLi9kZW1vL3NuYWtlL2luZGV4LmpzIiwid2VicGFjazovLy8uL2RlbW8vc25ha2Uvc25ha2VSZWR1Y2VyLmpzIiwid2VicGFjazovLy8uL2RlbW8vc25ha2Uvd29ybGRSZWR1Y2VyLmpzIiwid2VicGFjazovLy8uL2RlbW8vc25ha2Uvd29ybGRMYXllci5qcyIsIndlYnBhY2s6Ly8vLi9kZW1vL3NuYWtlL3NuYWtlTGF5ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vZGVtby9zbmFrZS9zbmFrZV90aHVtYm5haWwucG5nIiwid2VicGFjazovLy8uL2RlbW8vc25ha2UvaW5kZXguc2Nzcz8wYzcxIiwid2VicGFjazovLy8uL2RlbW8vc25ha2UvaW5kZXguc2NzcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL3VybHMuanMiXSwibmFtZXMiOlsiZ2FtZVJlc2l6ZSIsInNldFN0YXJQb3NpdGlvbiIsInNldFNuYWtlQm9keSIsImxlZnRLZXlEb3duIiwicmlnaHRLZXlEb3duIiwidXBLZXlEb3duIiwiZG93bktleURvd24iLCJnYW1lT3ZlciIsIm5leHRMZXZlbCIsImN1dFNuYWtlQm9keSIsIkdBTUVfUkVTSVpFIiwiU0VUX1NUQVJfUE9TSVRJT04iLCJTRVRfU05BS0VfQk9EWSIsIkxFRlRfS0VZRE9XTiIsIlJJR0hUX0tFWURPV04iLCJVUF9LRVlET1dOIiwiRE9XTl9LRVlET1dOIiwiR0FNRV9PVkVSIiwiTkVYVF9MRVZFTCIsIkNVVF9TTkFLRV9CT0RZIiwid2lkdGgiLCJoZWlnaHQiLCJ0eXBlIiwicm93IiwiY29sdW1uIiwiYm9keSIsInNuYWtlQm9keSIsImN1dEJvZHlJbmRleCIsImdhbWVEZWZhdWx0Iiwicm93cyIsImNvbHVtbnMiLCJzcGVlZCIsImhpdERldGVjdGlvbkJ1ZmZlciIsImRpcmVjdGlvbiIsIlVQIiwiRE9XTiIsIkxFRlQiLCJSSUdIVCIsImNvbnRhaW5lciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJjb25maWciLCJmcHMiLCJsYXllcnMiLCJuYW1lIiwidXBkYXRlciIsInJlbmRlciIsInJlZHVjZXJNYXAiLCJzbmFrZSIsIndvcmxkIiwiaW5pdCIsImdhbWVTdGF0ZSIsImNvbnNvbGUiLCJsb2ciLCJkaXNwYXRjaCIsIm9mZnNldFdpZHRoIiwib2Zmc2V0SGVpZ2h0Iiwid29ybGRTdGF0ZSIsInNuYWtlU3RhdGUiLCJzdGFyUm93IiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwic3RhckNvbHVtbiIsImhlYWRSb3ciLCJoZWFkQ29sdW1uIiwiaXNIb3Jpem9udGFsIiwiZXZlcnkiLCJib2R5QmxvY2siLCJ3aW5kb3ciLCJvbmxvYWQiLCJvbnJlc2l6ZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJldnQiLCJrZXlDb2RlIiwidG91Y2hTdGFydCIsIngiLCJ5IiwidG91Y2hNb3ZlQnVmZmVyIiwiaGFuZGxlVG91Y2hTdGFydCIsInRvdWNoZXMiLCJ0b3VjaCIsInBhZ2VYIiwicGFnZVkiLCJoYW5kbGVUb3VjaE1vdmUiLCJwcmV2ZW50RGVmYXVsdCIsImhlYWREaXJlY3Rpb24iLCJnZXRTdGF0ZSIsImR4IiwiZHkiLCJhYnMiLCJzdGFydCIsImluaXRTdGF0ZSIsImlzTW92ZSIsImxldmVsIiwic3RhdGUiLCJhY3Rpb24iLCJPYmplY3QiLCJhc3NpZ24iLCJzbGljZSIsInJldmVyc2UiLCJyZWR1Y2UiLCJmaXJzdCIsInNlY29uZCIsImhlYWQiLCJ1bnNoaWZ0IiwibmV3TGV2ZWwiLCJzcGxpY2UiLCJzdGFyUG9zaXRpb24iLCJoaWdoTGV2ZWwiLCJpc0dhbWVvdmVyIiwiaXNPdmVybGFwIiwiZ2FtZVNpemUiLCJtaW4iLCJuZXdTdGFyUG9zaXRpb24iLCJtYXgiLCJpbml0RmluYWxSZW5kZXJTdGF0ZSIsIndvcmxkTGF5ZXJVcGRhdGVyIiwiZmluYWxSZW5kZXJTdGF0ZSIsImRpcnR5S2V5cyIsImluZGV4T2YiLCJjZWxsV2lkdGgiLCJjZWxsSGVpZ2h0IiwieHMiLCJBcnJheSIsImZpbGwiLCJtYXAiLCJ4SW5kZXgiLCJ5MCIsInkxIiwieXMiLCJ5SW5kZXgiLCJ4MCIsIngxIiwic3RhciIsIndvcmxkTGF5ZXJSZW5kZXIiLCJjYW52YXMiLCJyZW5kZXJTdGF0ZSIsImR0IiwiY29udGV4dCIsImdldENvbnRleHQiLCJjbGVhclJlY3QiLCJmaWxsU3R5bGUiLCJmaWxsUmVjdCIsInN0cm9rZVN0eWxlIiwibGluZVdpZHRoIiwiYmVnaW5QYXRoIiwiZm9yRWFjaCIsInZlcnRpY2FsTGluZSIsIm1vdmVUbyIsImxpbmVUbyIsInN0cm9rZSIsImhvcml6b250YWxMaW5lIiwiZm9udCIsInRleHRBbGlnbiIsInRleHRCYXNlbGluZSIsImZpbGxUZXh0IiwiaGl0U3RhciIsInNuYWtlSGVhZCIsImhpdE9uUmlnaHQiLCJmb2N1cyIsIm90aGVyIiwiZm9jdXNYIiwiZm9jdXNZIiwib3RoZXJYIiwib3RoZXJZIiwiaGl0T25MZWZ0IiwiaGl0T25Cb3R0b20iLCJoaXRPblRvcCIsImdldEhpdEJvZHlJbmRleCIsImkiLCJsZW5ndGgiLCJjdXRTZWxmQnlIZWFkIiwiaGl0Qm9keUluZGV4IiwiZmlsbEZyZWVSZWN0IiwiY2FudmFzV2lkdGgiLCJjYW52YXNIZWlnaHQiLCJzbmFrZUxheWVyVXBkYXRlciIsImluZGV4Iiwic25ha2VMYXllclJlbmRlciIsImRpcnR5IiwiYm9keUZSUyIsInN0YXJGUlMiLCJib2R5RlJTQmxvY2siLCJkaXJlY3Rpb25Vbml0IiwiZGlzdGFuY2UiLCJoZWFkWCIsImhlYWRZIiwiaGVhZFBvc2l0aW9uIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7UUNoRGdCQSxVLEdBQUFBLFU7UUFRQUMsZSxHQUFBQSxlO1FBUUFDLFksR0FBQUEsWTtRQU9BQyxXLEdBQUFBLFc7UUFNQUMsWSxHQUFBQSxZO1FBTUFDLFMsR0FBQUEsUztRQU1BQyxXLEdBQUFBLFc7UUFNQUMsUSxHQUFBQSxRO1FBTUFDLFMsR0FBQUEsUztRQU9BQyxZLEdBQUFBLFk7QUF6RWhCO0FBQ08sSUFBTUMsb0NBQWMsYUFBcEI7QUFDQSxJQUFNQyxnREFBb0IsbUJBQTFCO0FBQ0EsSUFBTUMsMENBQWlCLGdCQUF2QjtBQUNBLElBQU1DLHNDQUFlLGNBQXJCO0FBQ0EsSUFBTUMsd0NBQWdCLGVBQXRCO0FBQ0EsSUFBTUMsa0NBQWEsWUFBbkI7QUFDQSxJQUFNQyxzQ0FBZSxjQUFyQjtBQUNBLElBQU1DLGdDQUFZLFdBQWxCO0FBQ0EsSUFBTUMsa0NBQWEsWUFBbkI7QUFDQSxJQUFNQywwQ0FBaUIsZ0JBQXZCOztBQUVQO0FBQ08sU0FBU25CLFVBQVQsQ0FBcUJvQixLQUFyQixFQUE0QkMsTUFBNUIsRUFBb0M7QUFDekMsU0FBTztBQUNMQyxVQUFNWixXQUREO0FBRUxVLGdC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Q0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1REFBdUQ7QUFDdkQ7O0FBRUEsNkJBQTZCLG1CQUFtQjs7QUFFaEQ7O0FBRUE7O0FBRUE7QUFDQTs7Ozs7Ozs7QUMvVkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0NBQXdDLFdBQVcsRUFBRTtBQUNyRCx3Q0FBd0MsV0FBVyxFQUFFOztBQUVyRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLHNDQUFzQztBQUN0QyxHQUFHO0FBQ0g7QUFDQSw4REFBOEQ7QUFDOUQ7O0FBRUE7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBIiwiZmlsZSI6InNuYWtlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL1wiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDMpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIGJjMzJlZTE4ZjFiZjg1YTI0NDk5IiwiLy8gQWN0aW9uIHR5cGVzXG5leHBvcnQgY29uc3QgR0FNRV9SRVNJWkUgPSAnR0FNRV9SRVNJWkUnIFxuZXhwb3J0IGNvbnN0IFNFVF9TVEFSX1BPU0lUSU9OID0gJ1NFVF9TVEFSX1BPU0lUSU9OJyBcbmV4cG9ydCBjb25zdCBTRVRfU05BS0VfQk9EWSA9ICdTRVRfU05BS0VfQk9EWScgXG5leHBvcnQgY29uc3QgTEVGVF9LRVlET1dOID0gJ0xFRlRfS0VZRE9XTidcbmV4cG9ydCBjb25zdCBSSUdIVF9LRVlET1dOID0gJ1JJR0hUX0tFWURPV04nXG5leHBvcnQgY29uc3QgVVBfS0VZRE9XTiA9ICdVUF9LRVlET1dOJ1xuZXhwb3J0IGNvbnN0IERPV05fS0VZRE9XTiA9ICdET1dOX0tFWURPV04nXG5leHBvcnQgY29uc3QgR0FNRV9PVkVSID0gJ0dBTUVfT1ZFUidcbmV4cG9ydCBjb25zdCBORVhUX0xFVkVMID0gJ05FWFRfTEVWRUwnXG5leHBvcnQgY29uc3QgQ1VUX1NOQUtFX0JPRFkgPSAnQ1VUX1NOQUtFX0JPRFknXG5cbi8vIEFjdGlvbiBjcmVhdG9yc1xuZXhwb3J0IGZ1bmN0aW9uIGdhbWVSZXNpemUgKHdpZHRoLCBoZWlnaHQpIHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBHQU1FX1JFU0laRSxcbiAgICB3aWR0aCxcbiAgICBoZWlnaHRcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gc2V0U3RhclBvc2l0aW9uIChyb3csIGNvbHVtbikge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IFNFVF9TVEFSX1BPU0lUSU9OLFxuICAgIHJvdyxcbiAgICBjb2x1bW5cbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gc2V0U25ha2VCb2R5IChib2R5KSB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogU0VUX1NOQUtFX0JPRFksXG4gICAgYm9keVxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsZWZ0S2V5RG93biAoKSB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogTEVGVF9LRVlET1dOXG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJpZ2h0S2V5RG93biAoKSB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogUklHSFRfS0VZRE9XTlxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1cEtleURvd24gKCkge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IFVQX0tFWURPV05cbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZG93bktleURvd24gKCkge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IERPV05fS0VZRE9XTlxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnYW1lT3ZlciAoKSB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogR0FNRV9PVkVSXG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG5leHRMZXZlbCAoc25ha2VCb2R5KSB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogTkVYVF9MRVZFTCxcbiAgICBzbmFrZUJvZHlcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gY3V0U25ha2VCb2R5IChjdXRCb2R5SW5kZXgpIHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBDVVRfU05BS0VfQk9EWSxcbiAgICBjdXRCb2R5SW5kZXhcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vZGVtby9zbmFrZS9hY3Rpb25zLmpzIiwiZXhwb3J0IGNvbnN0IGdhbWVEZWZhdWx0ID0ge1xuICByb3dzOiAxNixcbiAgY29sdW1uczogMTYsXG4gIHNwZWVkOiAwLjMsXG4gIGhpdERldGVjdGlvbkJ1ZmZlcjogMC41XG59XG5cbmV4cG9ydCBjb25zdCBkaXJlY3Rpb24gPSB7XG4gIFVQOiAnVVAnLFxuICBET1dOOiAnRE9XTicsXG4gIExFRlQ6ICdMRUZUJyxcbiAgUklHSFQ6ICdSSUdIVCdcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9kZW1vL3NuYWtlL3RoZW1lLmpzIiwiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiZ2FtdXhcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wiZ2FtdXhcIl0gPSBmYWN0b3J5KCk7XG59KSh0aGlzLCBmdW5jdGlvbigpIHtcbnJldHVybiAvKioqKioqLyAoZnVuY3Rpb24obW9kdWxlcykgeyAvLyB3ZWJwYWNrQm9vdHN0cmFwXG4vKioqKioqLyBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbi8qKioqKiovIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4vKioqKioqLyBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4vKioqKioqLyBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbi8qKioqKiovIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuLyoqKioqKi8gXHRcdH1cbi8qKioqKiovIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuLyoqKioqKi8gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbi8qKioqKiovIFx0XHRcdGk6IG1vZHVsZUlkLFxuLyoqKioqKi8gXHRcdFx0bDogZmFsc2UsXG4vKioqKioqLyBcdFx0XHRleHBvcnRzOiB7fVxuLyoqKioqKi8gXHRcdH07XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuLyoqKioqKi8gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4vKioqKioqLyBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuLyoqKioqKi8gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbi8qKioqKiovIFx0fVxuLyoqKioqKi9cbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuLyoqKioqKi8gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbi8qKioqKiovIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4vKioqKioqLyBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4vKioqKioqLyBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4vKioqKioqLyBcdFx0XHRcdGdldDogZ2V0dGVyXG4vKioqKioqLyBcdFx0XHR9KTtcbi8qKioqKiovIFx0XHR9XG4vKioqKioqLyBcdH07XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbi8qKioqKiovIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbi8qKioqKiovIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4vKioqKioqLyBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuLyoqKioqKi8gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbi8qKioqKiovIFx0XHRyZXR1cm4gZ2V0dGVyO1xuLyoqKioqKi8gXHR9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL1wiO1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vKioqKioqLyBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuLyoqKioqKi8gfSlcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKioqKioqLyAoW1xuLyogMCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5tb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19yZXF1aXJlX18oMSk7XG5cblxuLyoqKi8gfSksXG4vKiAxICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfc3RhdGVNYW5hZ2VyID0gX193ZWJwYWNrX3JlcXVpcmVfXygyKTtcblxuLyoqXG4gKiBUaGUgYW5pbWF0aW9uIGxvb3Aga2V5IGZvciBjYW5jZWwgYW5pbWF0aW9uXG4gKi9cbnZhciBfYW5pbWF0aW9uTG9vcEtleSA9IG51bGw7XG4vKipcbiAqIEFjY3VtdWxhdG9yIGZvciB0aW1lLWJhc2VkIGFuaW1hdGlvblxuICovXG52YXIgX2FjY3VtdWxhdG9yID0gMDtcbi8qKlxuICogVGhlIGRlZmF1bHQgZnBzXG4gKi9cbnZhciBfZnBzID0gNjA7XG4vKipcbiAqIFRoZSBzdG9yZSBmb3IgZ2FtZVxuICovXG52YXIgX3N0b3JlID0ge307XG5cbnZhciBfdXBkYXRlck1hcCA9IHt9O1xuXG52YXIgX3JlbmRlcmVyTWFwID0ge307XG5cbi8qKlxuICogVHJpZ2dlciBnYW1lIGxvb3BcbiAqL1xuZnVuY3Rpb24gX2xvb3AobGFzdFRpbWVzdGFtcCkge1xuICBfYW5pbWF0aW9uTG9vcEtleSA9IHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZnVuY3Rpb24gKCkge1xuICAgIHZhciBub3cgPSBEYXRlLm5vdygpO1xuICAgIHZhciBkdCA9IDEwMDAgLyBfZnBzO1xuICAgIF9hY2N1bXVsYXRvciArPSBub3cgLSBsYXN0VGltZXN0YW1wO1xuXG4gICAgaWYgKF9hY2N1bXVsYXRvciA+PSBkdCkge1xuICAgICAgd2hpbGUgKF9hY2N1bXVsYXRvciA+PSBkdCkge1xuICAgICAgICBfYWNjdW11bGF0b3IgLT0gZHQ7XG4gICAgICB9XG4gICAgICBmb3IgKHZhciBrZXkgaW4gX3JlbmRlcmVyTWFwKSB7XG4gICAgICAgIHZhciByZW5kZXJlciA9IF9yZW5kZXJlck1hcFtrZXldO1xuICAgICAgICByZW5kZXJlci5yZW5kZXJTdGF0ZSA9IHJlbmRlcmVyKHJlbmRlcmVyLnJlbmRlclN0YXRlLCByZW5kZXJlci5maW5hbFJlbmRlclN0YXRlLCBkdCk7XG4gICAgICB9XG4gICAgfVxuICAgIF9sb29wKG5vdyk7XG4gIH0pO1xufVxuXG52YXIgZ2FtdXggPSB7XG4gIGNvbmZpZzogZnVuY3Rpb24gY29uZmlnKCkge1xuICAgIHZhciBfY29uZmlnID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiB7fTtcblxuICAgIC8vIENvbmZpZyB0aGUgcHJpdmF0ZSBnbG9iYWxzXG4gICAgX2ZwcyA9IF9jb25maWcuZnBzIHx8IF9mcHM7XG5cbiAgICB2YXIgY29udGFpbmVyID0gX2NvbmZpZy5jb250YWluZXI7XG5cbiAgICAvLyBDcmVhdGUgZ2FtZSBsYXllcnNcbiAgICBfY29uZmlnLmxheWVycy5mb3JFYWNoKGZ1bmN0aW9uIChsYXllcikge1xuICAgICAgdmFyIGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGNhbnZhcyk7XG5cbiAgICAgIF91cGRhdGVyTWFwW2xheWVyLm5hbWVdID0gbGF5ZXIudXBkYXRlcjtcbiAgICAgIF9yZW5kZXJlck1hcFtsYXllci5uYW1lXSA9IGxheWVyLnJlbmRlci5iaW5kKG51bGwsIGNhbnZhcyk7XG4gICAgfSk7XG5cbiAgICAvLyBDcmVhdGUgZ2FtZSBzdG9yZVxuICAgIF9zdG9yZSA9ICgwLCBfc3RhdGVNYW5hZ2VyLmNyZWF0ZVN0b3JlKSgoMCwgX3N0YXRlTWFuYWdlci5jb21iaW5lUmVkdWNlcikoX2NvbmZpZy5yZWR1Y2VyTWFwLCAoMCwgX3N0YXRlTWFuYWdlci5jb21iaW5lVXBkYXRlcikoX3VwZGF0ZXJNYXAsIF9yZW5kZXJlck1hcCkpKTtcbiAgICBpZiAoX2NvbmZpZy5pbml0KSB7XG4gICAgICBfY29uZmlnLmluaXQoX3N0b3JlLmdldFN0YXRlKCkpO1xuICAgIH1cbiAgfSxcblxuICBnZXRTdGF0ZTogZnVuY3Rpb24gZ2V0U3RhdGUoc3RhdGVLZXkpIHtcbiAgICByZXR1cm4gX3N0b3JlLmdldFN0YXRlKHN0YXRlS2V5KTtcbiAgfSxcblxuICBsYXllcnM6IHt9LFxuXG4gIHN0YXJ0OiBmdW5jdGlvbiBzdGFydCgpIHtcbiAgICBfbG9vcChEYXRlLm5vdygpKTtcbiAgfSxcblxuICBkaXNwYXRjaDogZnVuY3Rpb24gZGlzcGF0Y2goYWN0aW9uKSB7XG4gICAgX3N0b3JlLmRpc3BhdGNoKGFjdGlvbik7XG4gIH1cblxuICAvLyAqXG4gIC8vICAqIEdhbWUgd2lsbCBiZSBhdmFpbGFibGUgb25jZSBjb25maWd1cmVkXG59O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBnYW11eDtcblxuLy8gVE9ET1xuLy8gMS4gQnVpbGQgZmlsZSBmb3IgRVM2IG1vZHVsZXNcblxuLyoqKi8gfSksXG4vKiAyICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmNyZWF0ZVN0b3JlID0gY3JlYXRlU3RvcmU7XG5leHBvcnRzLmNvbWJpbmVSZWR1Y2VyID0gY29tYmluZVJlZHVjZXI7XG5leHBvcnRzLmNvbWJpbmVVcGRhdGVyID0gY29tYmluZVVwZGF0ZXI7XG5mdW5jdGlvbiBjcmVhdGVTdG9yZShyZWR1Y2VyKSB7XG4gIC8vIEluaXQgc3RhdGVcbiAgdmFyIHN0YXRlID0gcmVkdWNlcigpO1xuXG4gIHJldHVybiB7XG4gICAgLyoqXG4gICAgICogRGlzcGF0Y2ggYWN0aW9uIHRvIHRyaWdnZXIgc3RhdGUgY2hhbmdlc1xuICAgICAqL1xuICAgIGRpc3BhdGNoOiBmdW5jdGlvbiBkaXNwYXRjaCgpIHtcbiAgICAgIHZhciBhY3Rpb24gPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IHt9O1xuXG4gICAgICBpZiAodHJ1ZSkge1xuICAgICAgICAvLyBsb2cgYWN0aW9ucyBpbiBjb25zb2xlXG4gICAgICAgIGNvbnNvbGUuZ3JvdXAoYWN0aW9uLnR5cGUpO1xuICAgICAgICBjb25zb2xlLmluZm8oJyVjYmVmb3JlOicsICdjb2xvcjogZ3JlZW4nLCBzdGF0ZSk7XG4gICAgICAgIGNvbnNvbGUuaW5mbygnJWNhY3Rpb246JywgJ2NvbG9yOiByZWQnLCBhY3Rpb24pO1xuICAgICAgfVxuXG4gICAgICAvLyBVcGRhdGUgc3RhdGVcbiAgICAgIHN0YXRlID0gcmVkdWNlcihzdGF0ZSwgYWN0aW9uKTtcbiAgICAgIC8vIFN0YXRlIG1hbmFnZXIgZG9lc24ndCBjYXJlIGFib3V0IG5vdGljaW5nXG4gICAgICAvLyBnYW1lIHRvIHVwZGF0ZSBzdGF0ZS4gSW5zdGVhZCByZWR1Y2Vyc1xuICAgICAgLy8gc2hvdWxkIHNldCBkaXJ0eSBzdGF0ZSBmb3IgZ2FtZSBsb29wIHRvXG4gICAgICAvLyB0cmlnZ2VyIHVwZGF0ZVxuXG4gICAgICBpZiAodHJ1ZSkge1xuICAgICAgICAvLyBsb2cgYWN0aW9ucyBpbiBjb25zb2xlXG4gICAgICAgIGNvbnNvbGUuaW5mbygnJWNhZnRlcjonLCAnY29sb3I6IGdyZWVuJywgc3RhdGUpO1xuICAgICAgICBjb25zb2xlLmdyb3VwRW5kKCk7XG4gICAgICB9XG4gICAgfSxcbiAgICAvKipcbiAgICAgKiBSZXR1cm4gdGhlIGN1cnJlbnQgc3RhdGUgZm9yIGdpdmVuIGtleVxuICAgICAqIFRoaXMgaXMgdG8gYWxsb3cgYXBwbGljYXRpb24gdG8gJ2Nvbm5lY3QnIHRvIHN0YXRlXG4gICAgICovXG4gICAgZ2V0U3RhdGU6IGZ1bmN0aW9uIGdldFN0YXRlKHN0YXRlS2V5KSB7XG4gICAgICBpZiAoIXN0YXRlS2V5KSB7XG4gICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBzdGF0ZVtzdGF0ZUtleV07XG4gICAgICB9XG4gICAgfVxuICB9O1xufVxuXG4vLyBBc3N1bWUgdGhlIHJlY3Vlck1hcCBpcyBhIGZsYXQgbWFwIHRvIGFsbCByZWR1Y2Vyc1xuZnVuY3Rpb24gY29tYmluZVJlZHVjZXIoKSB7XG4gIHZhciByZWR1Y2VyTWFwID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiB7fTtcbiAgdmFyIHVwZGF0ZXIgPSBhcmd1bWVudHNbMV07XG5cblxuICAvLyBHZW5lcmF0ZSBhIGNvbWJpbmVkIHJlZHVjZXIgZnVuY3Rpb25cbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgc3RhdGUgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IHt9O1xuICAgIHZhciBhY3Rpb24gPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHt9O1xuXG4gICAgdmFyIG5ld1N0YXRlID0ge30sXG4gICAgICAgIGRpcnR5S2V5cyA9IFtdO1xuXG4gICAgLy8gU3ByZWFkIHRoZSBhY3Rpb24gdG8gYWxsIHJlZHVjZXJzIGluc2lkZSB0aGUgY29tYmluZWQgb25lXG4gICAgZm9yICh2YXIga2V5IGluIHJlZHVjZXJNYXApIHtcbiAgICAgIC8vIFBhc3MgdGhlIHdob2xlIHN0YXRlIGRvd24gYXMgYXJndW1lbnQgZm9yXG4gICAgICAvLyBjcm9zcyBzdGF0ZSBrZXkgYWNjZXNzXG4gICAgICB2YXIgcmVkdWNlZFN0YXRlID0gcmVkdWNlck1hcFtrZXldKHN0YXRlW2tleV0sIGFjdGlvbiwgc3RhdGUpO1xuXG4gICAgICBpZiAocmVkdWNlZFN0YXRlICE9PSBzdGF0ZVtrZXldKSB7XG4gICAgICAgIGRpcnR5S2V5cy5wdXNoKGtleSk7XG4gICAgICB9XG5cbiAgICAgIG5ld1N0YXRlW2tleV0gPSByZWR1Y2VkU3RhdGU7XG4gICAgfVxuXG4gICAgLy8gQ2FsbCB1cGRhdGUgZnVuY3Rpb24gZm9yIGVhY2ggcmVkdWNlZCBzdGF0ZVxuICAgIHVwZGF0ZXIobmV3U3RhdGUsIGRpcnR5S2V5cyk7XG5cbiAgICAvLyBkaXJ0eUtleXMuZm9yRWFjaCgoZGlydHlLZXkpID0+IHtcbiAgICAvLyAgIHVwZGF0ZXJNYXBbZGlydHlLZXldKG5ld1N0YXRlLCBkaXJ0eUtleSlcbiAgICAvLyB9KVxuXG4gICAgcmV0dXJuIG5ld1N0YXRlO1xuICB9O1xufVxuXG5mdW5jdGlvbiBjb21iaW5lVXBkYXRlcigpIHtcbiAgdmFyIHVwZGF0ZXJNYXAgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IHt9O1xuICB2YXIgcmVuZGVyZXJNYXAgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHt9O1xuXG4gIC8vIEdlbmVyYXRlIGNvbWJpbmVkIHVwZGF0ZXIgZnVuY3Rpb24gZm9yIGFsbCB1cGRhdGVyc1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIHZhciBzdGF0ZSA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDoge307XG4gICAgdmFyIGRpcnR5S2V5cyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogW107XG5cbiAgICB2YXIgbmV3RmluYWxSZW5kZXJTdGF0ZSA9IHt9O1xuICAgIGZvciAodmFyIGtleSBpbiB1cGRhdGVyTWFwKSB7XG4gICAgICAvLyBDb21wdXRlIHRoZSBmaW5hbCByZW5kZXIgc3RhdGUgYW5kIHBhc3MgaW50byByZW5kZXJlclxuICAgICAgcmVuZGVyZXJNYXBba2V5XS5maW5hbFJlbmRlclN0YXRlID0gdXBkYXRlck1hcFtrZXldKHJlbmRlcmVyTWFwW2tleV0uZmluYWxSZW5kZXJTdGF0ZSwgc3RhdGUsIGRpcnR5S2V5cyk7XG4gICAgfVxuICB9O1xufVxuXG4vKioqLyB9KVxuLyoqKioqKi8gXSk7XG59KTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluZGxZbkJoWTJzNkx5OHZkMlZpY0dGamF5OTFibWwyWlhKellXeE5iMlIxYkdWRVpXWnBibWwwYVc5dUlpd2lkMlZpY0dGamF6b3ZMeTkzWldKd1lXTnJMMkp2YjNSemRISmhjQ0EyTURWaE56QmxNamd5TkdWa1pqQmpabVZoTmlJc0luZGxZbkJoWTJzNkx5OHZMaTl6Y21NdloyRnRkWGd1YW5NaUxDSjNaV0p3WVdOck9pOHZMeTR2YzNKakwzTjBZWFJsVFdGdVlXZGxjaTVxY3lKZExDSnVZVzFsY3lJNld5SmZZVzVwYldGMGFXOXVURzl2Y0V0bGVTSXNJbDloWTJOMWJYVnNZWFJ2Y2lJc0lsOW1jSE1pTENKZmMzUnZjbVVpTENKZmRYQmtZWFJsY2sxaGNDSXNJbDl5Wlc1a1pYSmxjazFoY0NJc0lsOXNiMjl3SWl3aWJHRnpkRlJwYldWemRHRnRjQ0lzSW5kcGJtUnZkeUlzSW5KbGNYVmxjM1JCYm1sdFlYUnBiMjVHY21GdFpTSXNJbTV2ZHlJc0lrUmhkR1VpTENKa2RDSXNJbXRsZVNJc0luSmxibVJsY21WeUlpd2ljbVZ1WkdWeVUzUmhkR1VpTENKbWFXNWhiRkpsYm1SbGNsTjBZWFJsSWl3aVoyRnRkWGdpTENKamIyNW1hV2NpTENKbWNITWlMQ0pqYjI1MFlXbHVaWElpTENKc1lYbGxjbk1pTENKbWIzSkZZV05vSWl3aWJHRjVaWElpTENKallXNTJZWE1pTENKa2IyTjFiV1Z1ZENJc0ltTnlaV0YwWlVWc1pXMWxiblFpTENKaGNIQmxibVJEYUdsc1pDSXNJbTVoYldVaUxDSjFjR1JoZEdWeUlpd2ljbVZ1WkdWeUlpd2lZbWx1WkNJc0luSmxaSFZqWlhKTllYQWlMQ0pwYm1sMElpd2laMlYwVTNSaGRHVWlMQ0p6ZEdGMFpVdGxlU0lzSW5OMFlYSjBJaXdpWkdsemNHRjBZMmdpTENKaFkzUnBiMjRpTENKamNtVmhkR1ZUZEc5eVpTSXNJbU52YldKcGJtVlNaV1IxWTJWeUlpd2lZMjl0WW1sdVpWVndaR0YwWlhJaUxDSnlaV1IxWTJWeUlpd2ljM1JoZEdVaUxDSmpiMjV6YjJ4bElpd2laM0p2ZFhBaUxDSjBlWEJsSWl3aWFXNW1ieUlzSW1keWIzVndSVzVrSWl3aWJtVjNVM1JoZEdVaUxDSmthWEowZVV0bGVYTWlMQ0p5WldSMVkyVmtVM1JoZEdVaUxDSndkWE5vSWl3aWRYQmtZWFJsY2sxaGNDSXNJbkpsYm1SbGNtVnlUV0Z3SWl3aWJtVjNSbWx1WVd4U1pXNWtaWEpUZEdGMFpTSmRMQ0p0WVhCd2FXNW5jeUk2SWtGQlFVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRXNRMEZCUXp0QlFVTkVMRTg3UVVOV1FUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVRzN08wRkJSMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFc1lVRkJTenRCUVVOTU8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFc2JVTkJRVEpDTERCQ1FVRXdRaXhGUVVGRk8wRkJRM1pFTEhsRFFVRnBReXhsUVVGbE8wRkJRMmhFTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQkxEaEVRVUZ6UkN3clJFRkJLMFE3TzBGQlJYSklPMEZCUTBFN08wRkJSVUU3UVVGRFFUczdPenM3T3pzN096czdPenM3T3pzN096czdPMEZETjBSQk96dEJRVVZCT3pzN1FVRkhRU3hKUVVGSlFTeHZRa0ZCYjBJc1NVRkJlRUk3UVVGRFFUczdPMEZCUjBFc1NVRkJTVU1zWlVGQlpTeERRVUZ1UWp0QlFVTkJPenM3UVVGSFFTeEpRVUZKUXl4UFFVRlBMRVZCUVZnN1FVRkRRVHM3TzBGQlIwRXNTVUZCU1VNc1UwRkJVeXhGUVVGaU96dEJRVVZCTEVsQlFVbERMR05CUVdNc1JVRkJiRUk3TzBGQlJVRXNTVUZCU1VNc1pVRkJaU3hGUVVGdVFqczdRVUZGUVRzN08wRkJSMEVzVTBGQlUwTXNTMEZCVkN4RFFVRm5Ra01zWVVGQmFFSXNSVUZCSzBJN1FVRkROMEpRTEhOQ1FVRnZRbEVzVDBGQlQwTXNjVUpCUVZBc1EwRkJOa0lzV1VGQlRUdEJRVU55UkN4UlFVRk5ReXhOUVVGTlF5eExRVUZMUkN4SFFVRk1MRVZCUVZvN1FVRkRRU3hSUVVGTlJTeExRVUZMTEU5QlFVOVdMRWxCUVd4Q08wRkJRMEZFTEc5Q1FVRm5RbE1zVFVGQlRVZ3NZVUZCZEVJN08wRkJSVUVzVVVGQlNVNHNaMEpCUVdkQ1Z5eEZRVUZ3UWl4RlFVRjNRanRCUVVOMFFpeGhRVUZQV0N4blFrRkJaMEpYTEVWQlFYWkNMRVZCUVRKQ08wRkJRM3BDV0N4M1FrRkJaMEpYTEVWQlFXaENPMEZCUTBRN1FVRkRSQ3hYUVVGTExFbEJRVWxETEVkQlFWUXNTVUZCWjBKU0xGbEJRV2hDTEVWQlFUaENPMEZCUXpWQ0xGbEJRVWxUTEZkQlFWZFVMR0ZCUVdGUkxFZEJRV0lzUTBGQlpqdEJRVU5CUXl4cFFrRkJVME1zVjBGQlZDeEhRVUYxUWtRc1UwRkJVMEVzVTBGQlUwTXNWMEZCYkVJc1JVRkJLMEpFTEZOQlFWTkZMR2RDUVVGNFF5eEZRVUV3UkVvc1JVRkJNVVFzUTBGQmRrSTdRVUZEUkR0QlFVTkdPMEZCUTBST0xGVkJRVTFKTEVkQlFVNDdRVUZEUkN4SFFXWnRRaXhEUVVGd1FqdEJRV2RDUkRzN1FVRkZSQ3hKUVVGTlR5eFJRVUZSTzBGQlExcERMRlZCUVZFc2EwSkJRV2xDTzBGQlFVRXNVVUZCYUVKQkxFOUJRV2RDTEhWRlFVRlFMRVZCUVU4N08wRkJRM1pDTzBGQlEwRm9RaXhYUVVGUFowSXNVVUZCVDBNc1IwRkJVQ3hKUVVGamFrSXNTVUZCY2tJN08wRkJSVUVzVVVGQlNXdENMRmxCUVZsR0xGRkJRVTlGTEZOQlFYWkNPenRCUVVWQk8wRkJRMEZHTEZsQlFVOUhMRTFCUVZBc1EwRkJZME1zVDBGQlpDeERRVUZ6UWl4VlFVRkRReXhMUVVGRUxFVkJRVmM3UVVGREwwSXNWVUZCU1VNc1UwRkJVME1zVTBGQlUwTXNZVUZCVkN4RFFVRjFRaXhSUVVGMlFpeERRVUZpTzBGQlEwRk9MR2RDUVVGVlR5eFhRVUZXTEVOQlFYTkNTQ3hOUVVGMFFqczdRVUZGUVhCQ0xHdENRVUZaYlVJc1RVRkJUVXNzU1VGQmJFSXNTVUZCTUVKTUxFMUJRVTFOTEU5QlFXaERPMEZCUTBGNFFpeHRRa0ZCWVd0Q0xFMUJRVTFMTEVsQlFXNUNMRWxCUVRKQ1RDeE5RVUZOVHl4TlFVRk9MRU5CUVdGRExFbEJRV0lzUTBGQmEwSXNTVUZCYkVJc1JVRkJkMEpRTEUxQlFYaENMRU5CUVROQ08wRkJRMFFzUzBGT1JEczdRVUZSUVR0QlFVTkJja0lzWVVGQlV5d3JRa0ZCV1N4clEwRkJaV1VzVVVGQlQyTXNWVUZCZEVJc1JVRkJhME1zYTBOQlFXVTFRaXhYUVVGbUxFVkJRVFJDUXl4WlFVRTFRaXhEUVVGc1F5eERRVUZhTEVOQlFWUTdRVUZEUVN4UlFVRkpZU3hSUVVGUFpTeEpRVUZZTEVWQlFXbENPMEZCUTJabUxHTkJRVTlsTEVsQlFWQXNRMEZCV1RsQ0xFOUJRVThyUWl4UlFVRlFMRVZCUVZvN1FVRkRSRHRCUVVOR0xFZEJja0pYT3p0QlFYVkNXa0VzV1VGQlZTeHJRa0ZCUTBNc1VVRkJSQ3hGUVVGak8wRkJRM1JDTEZkQlFVOW9ReXhQUVVGUEswSXNVVUZCVUN4RFFVRm5Ra01zVVVGQmFFSXNRMEZCVUR0QlFVTkVMRWRCZWtKWE96dEJRVEpDV21Rc1ZVRkJVU3hGUVROQ1NUczdRVUUyUWxwbExGTkJRVThzYVVKQlFVMDdRVUZEV0RsQ0xGVkJRVTFMTEV0QlFVdEVMRWRCUVV3c1JVRkJUanRCUVVORUxFZEJMMEpYT3p0QlFXbERXakpDTEZsQlFWVXNhMEpCUVVORExFMUJRVVFzUlVGQldUdEJRVU53UW01RExGZEJRVTlyUXl4UlFVRlFMRU5CUVdkQ1F5eE5RVUZvUWp0QlFVTkVPenRCUVVWRU8wRkJRMEU3UVVGMFExa3NRMEZCWkRzN2EwSkJlVU5sY2tJc1N6czdRVUZIWmp0QlFVTkJMR2RET3pzN096czdPenM3T3pzN1VVTXhSbWRDYzBJc1Z5eEhRVUZCUVN4WE8xRkJOa05CUXl4akxFZEJRVUZCTEdNN1VVRXJRa0ZETEdNc1IwRkJRVUVzWXp0QlFUVkZWQ3hUUVVGVFJpeFhRVUZVTEVOQlFYTkNSeXhQUVVGMFFpeEZRVUVyUWp0QlFVTndRenRCUVVOQkxFMUJRVWxETEZGQlFWRkVMRk5CUVZvN08wRkJSVUVzVTBGQlR6dEJRVU5NT3pzN1FVRkhRVXdzWTBGQlZTeHZRa0ZCYVVJN1FVRkJRU3hWUVVGb1FrTXNUVUZCWjBJc2RVVkJRVkFzUlVGQlR6czdRVUZEZWtJc1ZVRkJTU3hKUVVGS0xFVkJRV2RETzBGQlF6bENPMEZCUTBGTkxHZENRVUZSUXl4TFFVRlNMRU5CUVdOUUxFOUJRVTlSTEVsQlFYSkNPMEZCUTBGR0xHZENRVUZSUnl4SlFVRlNMRU5CUVdFc1YwRkJZaXhGUVVFd1FpeGpRVUV4UWl4RlFVRXdRMG9zUzBGQk1VTTdRVUZEUVVNc1owSkJRVkZITEVsQlFWSXNRMEZCWVN4WFFVRmlMRVZCUVRCQ0xGbEJRVEZDTEVWQlFYZERWQ3hOUVVGNFF6dEJRVU5FT3p0QlFVVkVPMEZCUTBGTExHTkJRVkZFTEZGQlFWRkRMRXRCUVZJc1JVRkJaVXdzVFVGQlppeERRVUZTTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUVzVlVGQlNTeEpRVUZLTEVWQlFXZERPMEZCUXpsQ08wRkJRMEZOTEdkQ1FVRlJSeXhKUVVGU0xFTkJRV0VzVlVGQllpeEZRVUY1UWl4alFVRjZRaXhGUVVGNVEwb3NTMEZCZWtNN1FVRkRRVU1zWjBKQlFWRkpMRkZCUVZJN1FVRkRSRHRCUVVOR0xFdEJlRUpKTzBGQmVVSk1PenM3TzBGQlNVRmtMR05CUVZVc2EwSkJRVU5ETEZGQlFVUXNSVUZCWXp0QlFVTjBRaXhWUVVGSkxFTkJRVU5CTEZGQlFVd3NSVUZCWlR0QlFVTmlMR1ZCUVU5UkxFdEJRVkE3UVVGRFJDeFBRVVpFTEUxQlIwczdRVUZEU0N4bFFVRlBRU3hOUVVGTlVpeFJRVUZPTEVOQlFWQTdRVUZEUkR0QlFVTkdPMEZCY0VOSkxFZEJRVkE3UVVGelEwUTdPMEZCUlVRN1FVRkRUeXhUUVVGVFN5eGpRVUZVTEVkQlFXMUVPMEZCUVVFc1RVRkJNVUpTTEZWQlFUQkNMSFZGUVVGaUxFVkJRV0U3UVVGQlFTeE5RVUZVU0N4UFFVRlRPenM3UVVGRmVFUTdRVUZEUVN4VFFVRlBMRmxCUVRaQ08wRkJRVUVzVVVGQk5VSmpMRXRCUVRSQ0xIVkZRVUZ3UWl4RlFVRnZRanRCUVVGQkxGRkJRV2hDVEN4TlFVRm5RaXgxUlVGQlVDeEZRVUZQT3p0QlFVTnNReXhSUVVGSlZ5eFhRVUZYTEVWQlFXWTdRVUZCUVN4UlFVTkpReXhaUVVGWkxFVkJSR2hDT3p0QlFVZEJPMEZCUTBFc1UwRkJTeXhKUVVGSmNrTXNSMEZCVkN4SlFVRm5RbTFDTEZWQlFXaENMRVZCUVRSQ08wRkJRekZDTzBGQlEwRTdRVUZEUVN4VlFVRkpiVUlzWlVGQlpXNUNMRmRCUVZkdVFpeEhRVUZZTEVWQlFXZENPRUlzVFVGQlRUbENMRWRCUVU0c1EwRkJhRUlzUlVGQk5FSjVRaXhOUVVFMVFpeEZRVUZ2UTBzc1MwRkJjRU1zUTBGQmJrSTdPMEZCUlVFc1ZVRkJTVkVzYVVKQlFXbENVaXhOUVVGTk9VSXNSMEZCVGl4RFFVRnlRaXhGUVVGcFF6dEJRVU12UW5GRExHdENRVUZWUlN4SlFVRldMRU5CUVdWMlF5eEhRVUZtTzBGQlEwUTdPMEZCUlVSdlF5eGxRVUZUY0VNc1IwRkJWQ3hKUVVGblFuTkRMRmxCUVdoQ08wRkJRMFE3TzBGQlJVUTdRVUZEUVhSQ0xGbEJRVkZ2UWl4UlFVRlNMRVZCUVd0Q1F5eFRRVUZzUWpzN1FVRkZRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRXNWMEZCVDBRc1VVRkJVRHRCUVVORUxFZEJla0pFTzBGQk1FSkVPenRCUVVWTkxGTkJRVk5TTEdOQlFWUXNSMEZCTkVRN1FVRkJRU3hOUVVGdVExa3NWVUZCYlVNc2RVVkJRWFJDTEVWQlFYTkNPMEZCUVVFc1RVRkJiRUpETEZkQlFXdENMSFZGUVVGS0xFVkJRVWs3TzBGQlEycEZPMEZCUTBFc1UwRkJUeXhaUVVGblF6dEJRVUZCTEZGQlFTOUNXQ3hMUVVFclFpeDFSVUZCZGtJc1JVRkJkVUk3UVVGQlFTeFJRVUZ1UWs4c1UwRkJiVUlzZFVWQlFWQXNSVUZCVHpzN1FVRkRja01zVVVGQlNVc3NjMEpCUVhOQ0xFVkJRVEZDTzBGQlEwRXNVMEZCU3l4SlFVRkpNVU1zUjBGQlZDeEpRVUZuUW5kRExGVkJRV2hDTEVWQlFUUkNPMEZCUXpGQ08wRkJRMEZETEd0Q1FVRlpla01zUjBGQldpeEZRVUZwUWtjc1owSkJRV3BDTEVkQlFXOURjVU1zVjBGQlYzaERMRWRCUVZnc1JVRkJaMEo1UXl4WlFVRlpla01zUjBGQldpeEZRVUZwUWtjc1owSkJRV3BETEVWQlFXMUVNa0lzUzBGQmJrUXNSVUZCTUVSUExGTkJRVEZFTEVOQlFYQkRPMEZCUTBRN1FVRkRSaXhIUVU1RU8wRkJUMFFzUXlJc0ltWnBiR1VpT2lKbllXMTFlQzVxY3lJc0luTnZkWEpqWlhORGIyNTBaVzUwSWpwYklpaG1kVzVqZEdsdmJpQjNaV0p3WVdOclZXNXBkbVZ5YzJGc1RXOWtkV3hsUkdWbWFXNXBkR2x2YmloeWIyOTBMQ0JtWVdOMGIzSjVLU0I3WEc1Y2RHbG1LSFI1Y0dWdlppQmxlSEJ2Y25SeklEMDlQU0FuYjJKcVpXTjBKeUFtSmlCMGVYQmxiMllnYlc5a2RXeGxJRDA5UFNBbmIySnFaV04wSnlsY2JseDBYSFJ0YjJSMWJHVXVaWGh3YjNKMGN5QTlJR1poWTNSdmNua29LVHRjYmx4MFpXeHpaU0JwWmloMGVYQmxiMllnWkdWbWFXNWxJRDA5UFNBblpuVnVZM1JwYjI0bklDWW1JR1JsWm1sdVpTNWhiV1FwWEc1Y2RGeDBaR1ZtYVc1bEtGdGRMQ0JtWVdOMGIzSjVLVHRjYmx4MFpXeHpaU0JwWmloMGVYQmxiMllnWlhod2IzSjBjeUE5UFQwZ0oyOWlhbVZqZENjcFhHNWNkRngwWlhod2IzSjBjMXRjSW1kaGJYVjRYQ0pkSUQwZ1ptRmpkRzl5ZVNncE8xeHVYSFJsYkhObFhHNWNkRngwY205dmRGdGNJbWRoYlhWNFhDSmRJRDBnWm1GamRHOXllU2dwTzF4dWZTa29kR2hwY3l3Z1puVnVZM1JwYjI0b0tTQjdYRzV5WlhSMWNtNGdYRzVjYmx4dUx5OGdWMFZDVUVGRFN5QkdUMDlVUlZJZ0x5OWNiaTh2SUhkbFluQmhZMnN2ZFc1cGRtVnljMkZzVFc5a2RXeGxSR1ZtYVc1cGRHbHZiaUlzSWlCY2RDOHZJRlJvWlNCdGIyUjFiR1VnWTJGamFHVmNiaUJjZEhaaGNpQnBibk4wWVd4c1pXUk5iMlIxYkdWeklEMGdlMzA3WEc1Y2JpQmNkQzh2SUZSb1pTQnlaWEYxYVhKbElHWjFibU4wYVc5dVhHNGdYSFJtZFc1amRHbHZiaUJmWDNkbFluQmhZMnRmY21WeGRXbHlaVjlmS0cxdlpIVnNaVWxrS1NCN1hHNWNiaUJjZEZ4MEx5OGdRMmhsWTJzZ2FXWWdiVzlrZFd4bElHbHpJR2x1SUdOaFkyaGxYRzRnWEhSY2RHbG1LR2x1YzNSaGJHeGxaRTF2WkhWc1pYTmJiVzlrZFd4bFNXUmRLU0I3WEc0Z1hIUmNkRngwY21WMGRYSnVJR2x1YzNSaGJHeGxaRTF2WkhWc1pYTmJiVzlrZFd4bFNXUmRMbVY0Y0c5eWRITTdYRzRnWEhSY2RIMWNiaUJjZEZ4MEx5OGdRM0psWVhSbElHRWdibVYzSUcxdlpIVnNaU0FvWVc1a0lIQjFkQ0JwZENCcGJuUnZJSFJvWlNCallXTm9aU2xjYmlCY2RGeDBkbUZ5SUcxdlpIVnNaU0E5SUdsdWMzUmhiR3hsWkUxdlpIVnNaWE5iYlc5a2RXeGxTV1JkSUQwZ2UxeHVJRngwWEhSY2RHazZJRzF2WkhWc1pVbGtMRnh1SUZ4MFhIUmNkR3c2SUdaaGJITmxMRnh1SUZ4MFhIUmNkR1Y0Y0c5eWRITTZJSHQ5WEc0Z1hIUmNkSDA3WEc1Y2JpQmNkRngwTHk4Z1JYaGxZM1YwWlNCMGFHVWdiVzlrZFd4bElHWjFibU4wYVc5dVhHNGdYSFJjZEcxdlpIVnNaWE5iYlc5a2RXeGxTV1JkTG1OaGJHd29iVzlrZFd4bExtVjRjRzl5ZEhNc0lHMXZaSFZzWlN3Z2JXOWtkV3hsTG1WNGNHOXlkSE1zSUY5ZmQyVmljR0ZqYTE5eVpYRjFhWEpsWDE4cE8xeHVYRzRnWEhSY2RDOHZJRVpzWVdjZ2RHaGxJRzF2WkhWc1pTQmhjeUJzYjJGa1pXUmNiaUJjZEZ4MGJXOWtkV3hsTG13Z1BTQjBjblZsTzF4dVhHNGdYSFJjZEM4dklGSmxkSFZ5YmlCMGFHVWdaWGh3YjNKMGN5QnZaaUIwYUdVZ2JXOWtkV3hsWEc0Z1hIUmNkSEpsZEhWeWJpQnRiMlIxYkdVdVpYaHdiM0owY3p0Y2JpQmNkSDFjYmx4dVhHNGdYSFF2THlCbGVIQnZjMlVnZEdobElHMXZaSFZzWlhNZ2IySnFaV04wSUNoZlgzZGxZbkJoWTJ0ZmJXOWtkV3hsYzE5ZktWeHVJRngwWDE5M1pXSndZV05yWDNKbGNYVnBjbVZmWHk1dElEMGdiVzlrZFd4bGN6dGNibHh1SUZ4MEx5OGdaWGh3YjNObElIUm9aU0J0YjJSMWJHVWdZMkZqYUdWY2JpQmNkRjlmZDJWaWNHRmphMTl5WlhGMWFYSmxYMTh1WXlBOUlHbHVjM1JoYkd4bFpFMXZaSFZzWlhNN1hHNWNiaUJjZEM4dklHUmxabWx1WlNCblpYUjBaWElnWm5WdVkzUnBiMjRnWm05eUlHaGhjbTF2Ym5rZ1pYaHdiM0owYzF4dUlGeDBYMTkzWldKd1lXTnJYM0psY1hWcGNtVmZYeTVrSUQwZ1puVnVZM1JwYjI0b1pYaHdiM0owY3l3Z2JtRnRaU3dnWjJWMGRHVnlLU0I3WEc0Z1hIUmNkR2xtS0NGZlgzZGxZbkJoWTJ0ZmNtVnhkV2x5WlY5ZkxtOG9aWGh3YjNKMGN5d2dibUZ0WlNrcElIdGNiaUJjZEZ4MFhIUlBZbXBsWTNRdVpHVm1hVzVsVUhKdmNHVnlkSGtvWlhod2IzSjBjeXdnYm1GdFpTd2dlMXh1SUZ4MFhIUmNkRngwWTI5dVptbG5kWEpoWW14bE9pQm1ZV3h6WlN4Y2JpQmNkRngwWEhSY2RHVnVkVzFsY21GaWJHVTZJSFJ5ZFdVc1hHNGdYSFJjZEZ4MFhIUm5aWFE2SUdkbGRIUmxjbHh1SUZ4MFhIUmNkSDBwTzF4dUlGeDBYSFI5WEc0Z1hIUjlPMXh1WEc0Z1hIUXZMeUJuWlhSRVpXWmhkV3gwUlhod2IzSjBJR1oxYm1OMGFXOXVJR1p2Y2lCamIyMXdZWFJwWW1sc2FYUjVJSGRwZEdnZ2JtOXVMV2hoY20xdmJua2diVzlrZFd4bGMxeHVJRngwWDE5M1pXSndZV05yWDNKbGNYVnBjbVZmWHk1dUlEMGdablZ1WTNScGIyNG9iVzlrZFd4bEtTQjdYRzRnWEhSY2RIWmhjaUJuWlhSMFpYSWdQU0J0YjJSMWJHVWdKaVlnYlc5a2RXeGxMbDlmWlhOTmIyUjFiR1VnUDF4dUlGeDBYSFJjZEdaMWJtTjBhVzl1SUdkbGRFUmxabUYxYkhRb0tTQjdJSEpsZEhWeWJpQnRiMlIxYkdWYkoyUmxabUYxYkhRblhUc2dmU0E2WEc0Z1hIUmNkRngwWm5WdVkzUnBiMjRnWjJWMFRXOWtkV3hsUlhod2IzSjBjeWdwSUhzZ2NtVjBkWEp1SUcxdlpIVnNaVHNnZlR0Y2JpQmNkRngwWDE5M1pXSndZV05yWDNKbGNYVnBjbVZmWHk1a0tHZGxkSFJsY2l3Z0oyRW5MQ0JuWlhSMFpYSXBPMXh1SUZ4MFhIUnlaWFIxY200Z1oyVjBkR1Z5TzF4dUlGeDBmVHRjYmx4dUlGeDBMeThnVDJKcVpXTjBMbkJ5YjNSdmRIbHdaUzVvWVhOUGQyNVFjbTl3WlhKMGVTNWpZV3hzWEc0Z1hIUmZYM2RsWW5CaFkydGZjbVZ4ZFdseVpWOWZMbThnUFNCbWRXNWpkR2x2YmlodlltcGxZM1FzSUhCeWIzQmxjblI1S1NCN0lISmxkSFZ5YmlCUFltcGxZM1F1Y0hKdmRHOTBlWEJsTG1oaGMwOTNibEJ5YjNCbGNuUjVMbU5oYkd3b2IySnFaV04wTENCd2NtOXdaWEowZVNrN0lIMDdYRzVjYmlCY2RDOHZJRjlmZDJWaWNHRmphMTl3ZFdKc2FXTmZjR0YwYUY5ZlhHNGdYSFJmWDNkbFluQmhZMnRmY21WeGRXbHlaVjlmTG5BZ1BTQmNJaTljSWp0Y2JseHVJRngwTHk4Z1RHOWhaQ0JsYm5SeWVTQnRiMlIxYkdVZ1lXNWtJSEpsZEhWeWJpQmxlSEJ2Y25SelhHNGdYSFJ5WlhSMWNtNGdYMTkzWldKd1lXTnJYM0psY1hWcGNtVmZYeWhmWDNkbFluQmhZMnRmY21WeGRXbHlaVjlmTG5NZ1BTQXdLVHRjYmx4dVhHNWNiaTh2SUZkRlFsQkJRMHNnUms5UFZFVlNJQzh2WEc0dkx5QjNaV0p3WVdOckwySnZiM1J6ZEhKaGNDQTJNRFZoTnpCbE1qZ3lOR1ZrWmpCalptVmhOaUlzSW1sdGNHOXlkQ0I3WTI5dFltbHVaVkpsWkhWalpYSXNJR055WldGMFpWTjBiM0psTENCamIyMWlhVzVsVlhCa1lYUmxjbjBnWm5KdmJTQW5MaTl6ZEdGMFpVMWhibUZuWlhJblhHNWNiaThxS2x4dUlDb2dWR2hsSUdGdWFXMWhkR2x2YmlCc2IyOXdJR3RsZVNCbWIzSWdZMkZ1WTJWc0lHRnVhVzFoZEdsdmJseHVJQ292WEc1c1pYUWdYMkZ1YVcxaGRHbHZia3h2YjNCTFpYa2dQU0J1ZFd4c1hHNHZLaXBjYmlBcUlFRmpZM1Z0ZFd4aGRHOXlJR1p2Y2lCMGFXMWxMV0poYzJWa0lHRnVhVzFoZEdsdmJseHVJQ292WEc1c1pYUWdYMkZqWTNWdGRXeGhkRzl5SUQwZ01GeHVMeW9xWEc0Z0tpQlVhR1VnWkdWbVlYVnNkQ0JtY0hOY2JpQXFMMXh1YkdWMElGOW1jSE1nUFNBMk1GeHVMeW9xWEc0Z0tpQlVhR1VnYzNSdmNtVWdabTl5SUdkaGJXVmNiaUFxTDF4dWJHVjBJRjl6ZEc5eVpTQTlJSHQ5WEc1Y2JteGxkQ0JmZFhCa1lYUmxjazFoY0NBOUlIdDlYRzVjYm14bGRDQmZjbVZ1WkdWeVpYSk5ZWEFnUFNCN2ZWeHVYRzR2S2lwY2JpQXFJRlJ5YVdkblpYSWdaMkZ0WlNCc2IyOXdYRzRnS2k5Y2JtWjFibU4wYVc5dUlGOXNiMjl3SUNoc1lYTjBWR2x0WlhOMFlXMXdLU0I3WEc0Z0lGOWhibWx0WVhScGIyNU1iMjl3UzJWNUlEMGdkMmx1Wkc5M0xuSmxjWFZsYzNSQmJtbHRZWFJwYjI1R2NtRnRaU2dvS1NBOVBpQjdYRzRnSUNBZ1kyOXVjM1FnYm05M0lEMGdSR0YwWlM1dWIzY29LVnh1SUNBZ0lHTnZibk4wSUdSMElEMGdNVEF3TUNBdklGOW1jSE5jYmlBZ0lDQmZZV05qZFcxMWJHRjBiM0lnS3owZ2JtOTNJQzBnYkdGemRGUnBiV1Z6ZEdGdGNGeHVYRzRnSUNBZ2FXWWdLRjloWTJOMWJYVnNZWFJ2Y2lBK1BTQmtkQ2tnZTF4dUlDQWdJQ0FnZDJocGJHVWdLRjloWTJOMWJYVnNZWFJ2Y2lBK1BTQmtkQ2tnZTF4dUlDQWdJQ0FnSUNCZllXTmpkVzExYkdGMGIzSWdMVDBnWkhSY2JpQWdJQ0FnSUgxY2JpQWdJQ0FnSUdadmNpQW9iR1YwSUd0bGVTQnBiaUJmY21WdVpHVnlaWEpOWVhBcElIdGNiaUFnSUNBZ0lDQWdiR1YwSUhKbGJtUmxjbVZ5SUQwZ1gzSmxibVJsY21WeVRXRndXMnRsZVYxY2JpQWdJQ0FnSUNBZ2NtVnVaR1Z5WlhJdWNtVnVaR1Z5VTNSaGRHVWdQU0J5Wlc1a1pYSmxjaWh5Wlc1a1pYSmxjaTV5Wlc1a1pYSlRkR0YwWlN3Z2NtVnVaR1Z5WlhJdVptbHVZV3hTWlc1a1pYSlRkR0YwWlN3Z1pIUXBYRzRnSUNBZ0lDQjlYRzRnSUNBZ2ZWeHVJQ0FnSUY5c2IyOXdLRzV2ZHlsY2JpQWdmU2xjYm4xY2JseHVZMjl1YzNRZ1oyRnRkWGdnUFNCN1hHNGdJR052Ym1acFp6b2dLR052Ym1acFp5QTlJSHQ5S1NBOVBpQjdYRzRnSUNBZ0x5OGdRMjl1Wm1sbklIUm9aU0J3Y21sMllYUmxJR2RzYjJKaGJITmNiaUFnSUNCZlpuQnpJRDBnWTI5dVptbG5MbVp3Y3lCOGZDQmZabkJ6WEc1Y2JpQWdJQ0JzWlhRZ1kyOXVkR0ZwYm1WeUlEMGdZMjl1Wm1sbkxtTnZiblJoYVc1bGNseHVYRzRnSUNBZ0x5OGdRM0psWVhSbElHZGhiV1VnYkdGNVpYSnpYRzRnSUNBZ1kyOXVabWxuTG14aGVXVnljeTVtYjNKRllXTm9LQ2hzWVhsbGNpa2dQVDRnZTF4dUlDQWdJQ0FnYkdWMElHTmhiblpoY3lBOUlHUnZZM1Z0Wlc1MExtTnlaV0YwWlVWc1pXMWxiblFvSjJOaGJuWmhjeWNwWEc0Z0lDQWdJQ0JqYjI1MFlXbHVaWEl1WVhCd1pXNWtRMmhwYkdRb1kyRnVkbUZ6S1Z4dVhHNGdJQ0FnSUNCZmRYQmtZWFJsY2sxaGNGdHNZWGxsY2k1dVlXMWxYU0E5SUd4aGVXVnlMblZ3WkdGMFpYSmNiaUFnSUNBZ0lGOXlaVzVrWlhKbGNrMWhjRnRzWVhsbGNpNXVZVzFsWFNBOUlHeGhlV1Z5TG5KbGJtUmxjaTVpYVc1a0tHNTFiR3dzSUdOaGJuWmhjeWxjYmlBZ0lDQjlLVnh1WEc0Z0lDQWdMeThnUTNKbFlYUmxJR2RoYldVZ2MzUnZjbVZjYmlBZ0lDQmZjM1J2Y21VZ1BTQmpjbVZoZEdWVGRHOXlaU2hqYjIxaWFXNWxVbVZrZFdObGNpaGpiMjVtYVdjdWNtVmtkV05sY2sxaGNDd2dZMjl0WW1sdVpWVndaR0YwWlhJb1gzVndaR0YwWlhKTllYQXNJRjl5Wlc1a1pYSmxjazFoY0NrcEtWeHVJQ0FnSUdsbUlDaGpiMjVtYVdjdWFXNXBkQ2tnZTF4dUlDQWdJQ0FnWTI5dVptbG5MbWx1YVhRb1gzTjBiM0psTG1kbGRGTjBZWFJsS0NrcFhHNGdJQ0FnZlZ4dUlDQjlMRnh1WEc0Z0lHZGxkRk4wWVhSbE9pQW9jM1JoZEdWTFpYa3BJRDArSUh0Y2JpQWdJQ0J5WlhSMWNtNGdYM04wYjNKbExtZGxkRk4wWVhSbEtITjBZWFJsUzJWNUtWeHVJQ0I5TEZ4dVhHNGdJR3hoZVdWeWN6b2dlMzBzWEc1Y2JpQWdjM1JoY25RNklDZ3BJRDArSUh0Y2JpQWdJQ0JmYkc5dmNDaEVZWFJsTG01dmR5Z3BLVnh1SUNCOUxGeHVYRzRnSUdScGMzQmhkR05vT2lBb1lXTjBhVzl1S1NBOVBpQjdYRzRnSUNBZ1gzTjBiM0psTG1ScGMzQmhkR05vS0dGamRHbHZiaWxjYmlBZ2ZWeHVYRzRnSUM4dklDcGNiaUFnTHk4Z0lDb2dSMkZ0WlNCM2FXeHNJR0psSUdGMllXbHNZV0pzWlNCdmJtTmxJR052Ym1acFozVnlaV1JjYm4xY2JseHVaWGh3YjNKMElHUmxabUYxYkhRZ1oyRnRkWGhjYmx4dVhHNHZMeUJVVDBSUFhHNHZMeUF4TGlCQ2RXbHNaQ0JtYVd4bElHWnZjaUJGVXpZZ2JXOWtkV3hsYzF4dVhHNWNiaTh2SUZkRlFsQkJRMHNnUms5UFZFVlNJQzh2WEc0dkx5QXVMM055WXk5bllXMTFlQzVxY3lJc0ltVjRjRzl5ZENCbWRXNWpkR2x2YmlCamNtVmhkR1ZUZEc5eVpTQW9jbVZrZFdObGNpa2dlMXh1SUNBdkx5QkpibWwwSUhOMFlYUmxYRzRnSUd4bGRDQnpkR0YwWlNBOUlISmxaSFZqWlhJb0tWeHVYRzRnSUhKbGRIVnliaUI3WEc0Z0lDQWdMeW9xWEc0Z0lDQWdJQ29nUkdsemNHRjBZMmdnWVdOMGFXOXVJSFJ2SUhSeWFXZG5aWElnYzNSaGRHVWdZMmhoYm1kbGMxeHVJQ0FnSUNBcUwxeHVJQ0FnSUdScGMzQmhkR05vT2lBb1lXTjBhVzl1SUQwZ2UzMHBJRDArSUh0Y2JpQWdJQ0FnSUdsbUlDaHdjbTlqWlhOekxtVnVkaTVqYjJSbElEMDlQU0FuUkVWV0p5a2dlMXh1SUNBZ0lDQWdJQ0F2THlCc2IyY2dZV04wYVc5dWN5QnBiaUJqYjI1emIyeGxYRzRnSUNBZ0lDQWdJR052Ym5OdmJHVXVaM0p2ZFhBb1lXTjBhVzl1TG5SNWNHVXBYRzRnSUNBZ0lDQWdJR052Ym5OdmJHVXVhVzVtYnlnbkpXTmlaV1p2Y21VNkp5d2dKMk52Ykc5eU9pQm5jbVZsYmljc0lITjBZWFJsS1Z4dUlDQWdJQ0FnSUNCamIyNXpiMnhsTG1sdVptOG9KeVZqWVdOMGFXOXVPaWNzSUNkamIyeHZjam9nY21Wa0p5d2dZV04wYVc5dUtWeHVJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ1hHNGdJQ0FnSUNBdkx5QlZjR1JoZEdVZ2MzUmhkR1ZjYmlBZ0lDQWdJSE4wWVhSbElEMGdjbVZrZFdObGNpaHpkR0YwWlN3Z1lXTjBhVzl1S1Z4dUlDQWdJQ0FnTHk4Z1UzUmhkR1VnYldGdVlXZGxjaUJrYjJWemJpZDBJR05oY21VZ1lXSnZkWFFnYm05MGFXTnBibWRjYmlBZ0lDQWdJQzh2SUdkaGJXVWdkRzhnZFhCa1lYUmxJSE4wWVhSbExpQkpibk4wWldGa0lISmxaSFZqWlhKelhHNGdJQ0FnSUNBdkx5QnphRzkxYkdRZ2MyVjBJR1JwY25SNUlITjBZWFJsSUdadmNpQm5ZVzFsSUd4dmIzQWdkRzljYmlBZ0lDQWdJQzh2SUhSeWFXZG5aWElnZFhCa1lYUmxYRzVjYmlBZ0lDQWdJR2xtSUNod2NtOWpaWE56TG1WdWRpNWpiMlJsSUQwOVBTQW5SRVZXSnlrZ2UxeHVJQ0FnSUNBZ0lDQXZMeUJzYjJjZ1lXTjBhVzl1Y3lCcGJpQmpiMjV6YjJ4bFhHNGdJQ0FnSUNBZ0lHTnZibk52YkdVdWFXNW1ieWduSldOaFpuUmxjam9uTENBblkyOXNiM0k2SUdkeVpXVnVKeXdnYzNSaGRHVXBYRzRnSUNBZ0lDQWdJR052Ym5OdmJHVXVaM0p2ZFhCRmJtUW9LVnh1SUNBZ0lDQWdmVnh1SUNBZ0lIMHNYRzRnSUNBZ0x5b3FYRzRnSUNBZ0lDb2dVbVYwZFhKdUlIUm9aU0JqZFhKeVpXNTBJSE4wWVhSbElHWnZjaUJuYVhabGJpQnJaWGxjYmlBZ0lDQWdLaUJVYUdseklHbHpJSFJ2SUdGc2JHOTNJR0Z3Y0d4cFkyRjBhVzl1SUhSdklDZGpiMjV1WldOMEp5QjBieUJ6ZEdGMFpWeHVJQ0FnSUNBcUwxeHVJQ0FnSUdkbGRGTjBZWFJsT2lBb2MzUmhkR1ZMWlhrcElEMCtJSHRjYmlBZ0lDQWdJR2xtSUNnaGMzUmhkR1ZMWlhrcElIdGNiaUFnSUNBZ0lDQWdjbVYwZFhKdUlITjBZWFJsWEc0Z0lDQWdJQ0I5WEc0Z0lDQWdJQ0JsYkhObElIdGNiaUFnSUNBZ0lDQWdjbVYwZFhKdUlITjBZWFJsVzNOMFlYUmxTMlY1WFZ4dUlDQWdJQ0FnZlZ4dUlDQWdJSDFjYmlBZ2ZWeHVmVnh1WEc0dkx5QkJjM04xYldVZ2RHaGxJSEpsWTNWbGNrMWhjQ0JwY3lCaElHWnNZWFFnYldGd0lIUnZJR0ZzYkNCeVpXUjFZMlZ5YzF4dVpYaHdiM0owSUdaMWJtTjBhVzl1SUdOdmJXSnBibVZTWldSMVkyVnlJQ2h5WldSMVkyVnlUV0Z3SUQwZ2UzMHNJSFZ3WkdGMFpYSXBJSHRjYmx4dUlDQXZMeUJIWlc1bGNtRjBaU0JoSUdOdmJXSnBibVZrSUhKbFpIVmpaWElnWm5WdVkzUnBiMjVjYmlBZ2NtVjBkWEp1SUNoemRHRjBaU0E5SUh0OUxDQmhZM1JwYjI0Z1BTQjdmU2tnUFQ0Z2UxeHVJQ0FnSUd4bGRDQnVaWGRUZEdGMFpTQTlJSHQ5TEZ4dUlDQWdJQ0FnSUNCa2FYSjBlVXRsZVhNZ1BTQmJYVnh1WEc0Z0lDQWdMeThnVTNCeVpXRmtJSFJvWlNCaFkzUnBiMjRnZEc4Z1lXeHNJSEpsWkhWalpYSnpJR2x1YzJsa1pTQjBhR1VnWTI5dFltbHVaV1FnYjI1bFhHNGdJQ0FnWm05eUlDaHNaWFFnYTJWNUlHbHVJSEpsWkhWalpYSk5ZWEFwSUh0Y2JpQWdJQ0FnSUM4dklGQmhjM01nZEdobElIZG9iMnhsSUhOMFlYUmxJR1J2ZDI0Z1lYTWdZWEpuZFcxbGJuUWdabTl5WEc0Z0lDQWdJQ0F2THlCamNtOXpjeUJ6ZEdGMFpTQnJaWGtnWVdOalpYTnpYRzRnSUNBZ0lDQnNaWFFnY21Wa2RXTmxaRk4wWVhSbElEMGdjbVZrZFdObGNrMWhjRnRyWlhsZEtITjBZWFJsVzJ0bGVWMHNJR0ZqZEdsdmJpd2djM1JoZEdVcFhHNWNiaUFnSUNBZ0lHbG1JQ2h5WldSMVkyVmtVM1JoZEdVZ0lUMDlJSE4wWVhSbFcydGxlVjBwSUh0Y2JpQWdJQ0FnSUNBZ1pHbHlkSGxMWlhsekxuQjFjMmdvYTJWNUtWeHVJQ0FnSUNBZ2ZWeHVYRzRnSUNBZ0lDQnVaWGRUZEdGMFpWdHJaWGxkSUQwZ2NtVmtkV05sWkZOMFlYUmxYRzRnSUNBZ2ZWeHVYRzRnSUNBZ0x5OGdRMkZzYkNCMWNHUmhkR1VnWm5WdVkzUnBiMjRnWm05eUlHVmhZMmdnY21Wa2RXTmxaQ0J6ZEdGMFpWeHVJQ0FnSUhWd1pHRjBaWElvYm1WM1UzUmhkR1VzSUdScGNuUjVTMlY1Y3lsY2JseHVJQ0FnSUM4dklHUnBjblI1UzJWNWN5NW1iM0pGWVdOb0tDaGthWEowZVV0bGVTa2dQVDRnZTF4dUlDQWdJQzh2SUNBZ2RYQmtZWFJsY2sxaGNGdGthWEowZVV0bGVWMG9ibVYzVTNSaGRHVXNJR1JwY25SNVMyVjVLVnh1SUNBZ0lDOHZJSDBwWEc1Y2JpQWdJQ0J5WlhSMWNtNGdibVYzVTNSaGRHVmNiaUFnZlZ4dWZWeHVYRzVsZUhCdmNuUWdablZ1WTNScGIyNGdZMjl0WW1sdVpWVndaR0YwWlhJZ0tIVndaR0YwWlhKTllYQWdQU0I3ZlN3Z2NtVnVaR1Z5WlhKTllYQWdQU0I3ZlNrZ2UxeHVJQ0F2THlCSFpXNWxjbUYwWlNCamIyMWlhVzVsWkNCMWNHUmhkR1Z5SUdaMWJtTjBhVzl1SUdadmNpQmhiR3dnZFhCa1lYUmxjbk5jYmlBZ2NtVjBkWEp1SUNoemRHRjBaU0E5SUh0OUxDQmthWEowZVV0bGVYTWdQU0JiWFNrZ1BUNGdlMXh1SUNBZ0lHeGxkQ0J1WlhkR2FXNWhiRkpsYm1SbGNsTjBZWFJsSUQwZ2UzMWNiaUFnSUNCbWIzSWdLR3hsZENCclpYa2dhVzRnZFhCa1lYUmxjazFoY0NrZ2UxeHVJQ0FnSUNBZ0x5OGdRMjl0Y0hWMFpTQjBhR1VnWm1sdVlXd2djbVZ1WkdWeUlITjBZWFJsSUdGdVpDQndZWE56SUdsdWRHOGdjbVZ1WkdWeVpYSmNiaUFnSUNBZ0lISmxibVJsY21WeVRXRndXMnRsZVYwdVptbHVZV3hTWlc1a1pYSlRkR0YwWlNBOUlIVndaR0YwWlhKTllYQmJhMlY1WFNoeVpXNWtaWEpsY2sxaGNGdHJaWGxkTG1acGJtRnNVbVZ1WkdWeVUzUmhkR1VzSUhOMFlYUmxMQ0JrYVhKMGVVdGxlWE1wWEc0Z0lDQWdmVnh1SUNCOVhHNTlYRzVjYmx4dVhHNHZMeUJYUlVKUVFVTkxJRVpQVDFSRlVpQXZMMXh1THk4Z0xpOXpjbU12YzNSaGRHVk5ZVzVoWjJWeUxtcHpJbDBzSW5OdmRYSmpaVkp2YjNRaU9pSWlmUT09XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9kaXN0L2dhbXV4LmpzXG4vLyBtb2R1bGUgaWQgPSAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBnYW11eCBmcm9tICcuLi8uLi9kaXN0L2dhbXV4J1xuaW1wb3J0IHNuYWtlUmVkdWNlciBmcm9tICcuL3NuYWtlUmVkdWNlcidcbmltcG9ydCB3b3JsZFJlZHVjZXIgZnJvbSAnLi93b3JsZFJlZHVjZXInXG5pbXBvcnQge3dvcmxkTGF5ZXJVcGRhdGVyLCB3b3JsZExheWVyUmVuZGVyfSBmcm9tICcuL3dvcmxkTGF5ZXInXG5pbXBvcnQge3NuYWtlTGF5ZXJVcGRhdGVyLCBzbmFrZUxheWVyUmVuZGVyfSBmcm9tICcuL3NuYWtlTGF5ZXInXG5pbXBvcnQgeyBcbiAgZ2FtZVJlc2l6ZSxcbiAgc2V0U3RhclBvc2l0aW9uLFxuICBzZXRTbmFrZUJvZHksXG4gIGxlZnRLZXlEb3duLFxuICByaWdodEtleURvd24sXG4gIHVwS2V5RG93bixcbiAgZG93bktleURvd25cbn0gZnJvbSAnLi9hY3Rpb25zJ1xuaW1wb3J0IHtcbiAgZGlyZWN0aW9uXG59IGZyb20gJy4vdGhlbWUnXG5cbi8vIGltcG9ydCAnLi9pbmRleC5odG1sJ1xuaW1wb3J0ICcuL3NuYWtlX3RodW1ibmFpbC5wbmcnXG5pbXBvcnQgJy4vaW5kZXguc2NzcydcblxuY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jvb3QnKVxuXG5nYW11eC5jb25maWcoe1xuICBmcHM6IDYwLFxuXG4gIGNvbnRhaW5lcixcblxuICBsYXllcnM6IFt7XG4gICAgbmFtZTogJ3dvcmxkTGF5ZXInLFxuICAgIHVwZGF0ZXI6IHdvcmxkTGF5ZXJVcGRhdGVyLFxuICAgIHJlbmRlcjogd29ybGRMYXllclJlbmRlclxuICB9LCB7XG4gICAgbmFtZTogJ3NuYWtlTGF5ZXInLFxuICAgIHVwZGF0ZXI6IHNuYWtlTGF5ZXJVcGRhdGVyLFxuICAgIHJlbmRlcjogc25ha2VMYXllclJlbmRlclxuICB9XSxcblxuICAvKipcbiAgICogVGhlIG1hcCBmb3IgYWxsIHJlZHVjZXJzIHRoZSBzdG9yZSBjYW4gYnJlYWsgZG93blxuICAgKi9cbiAgcmVkdWNlck1hcDoge1xuICAgIHNuYWtlOiBzbmFrZVJlZHVjZXIsXG4gICAgd29ybGQ6IHdvcmxkUmVkdWNlclxuICB9LFxuXG4gIC8qKlxuICAgKiBpbml0IGdhbWUuIEdldHRpbmcgY2FsbGVkIGJlZm9yZSBnYW1lIGxvb3Agc3RhcnRzXG4gICAqL1xuICBpbml0OiAoZ2FtZVN0YXRlKSA9PiB7XG4gICAgY29uc29sZS5sb2coJ2luaXQnKVxuICAgIC8vIE1ha2Ugc3VyZSBjb250YWluZXIgZGltZW5zaW9uIGlzIGluaXRcbiAgICBnYW11eC5kaXNwYXRjaChnYW1lUmVzaXplKFxuICAgICAgY29udGFpbmVyLm9mZnNldFdpZHRoLFxuICAgICAgY29udGFpbmVyLm9mZnNldEhlaWdodFxuICAgICkpXG5cbiAgICBsZXQgd29ybGRTdGF0ZSA9IGdhbWVTdGF0ZVsnd29ybGQnXSxcbiAgICAgICAgc25ha2VTdGF0ZSA9IGdhbWVTdGF0ZVsnc25ha2UnXVxuXG4gICAgLy8gSW5pdCB3b3JsZCBiYXNlZCBvbiBpbml0aWFsIHN0YXRlXG4gICAgbGV0IHtcbiAgICAgICAgICByb3dzLFxuICAgICAgICAgIGNvbHVtbnNcbiAgICAgICAgfSA9IHdvcmxkU3RhdGUsXG4gICAgICAgIHN0YXJSb3cgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiByb3dzKSxcbiAgICAgICAgc3RhckNvbHVtbiA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGNvbHVtbnMpXG5cbiAgICBnYW11eC5kaXNwYXRjaChzZXRTdGFyUG9zaXRpb24oc3RhclJvdywgc3RhckNvbHVtbikpXG5cbiAgICAvLyBJbml0IHNuYWtlIGJhc2VkIG9uIHdvcmxkXG4gICAgbGV0IGJvZHkgPSBbXVxuICAgIGRvIHtcbiAgICAgIGxldCBoZWFkUm93ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogcm93cyksXG4gICAgICAgICAgaGVhZENvbHVtbiA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGNvbHVtbnMpXG5cbiAgICAgIGJvZHlbMF0gPSB7XG4gICAgICAgIHJvdzogaGVhZFJvdyxcbiAgICAgICAgY29sdW1uOiBoZWFkQ29sdW1uXG4gICAgICB9XG5cbiAgICAgIGxldCBpc0hvcml6b250YWwgPSBNYXRoLnJhbmRvbSgpID4gMC41XG4gICAgICBib2R5WzFdID0ge1xuICAgICAgICByb3c6IGhlYWRSb3cgKyAoaXNIb3Jpem9udGFsID8gKE1hdGgucmFuZG9tKCkgPiAwLjUgPyAxIDogLTEpIDogMCksXG4gICAgICAgIGNvbHVtbjogaGVhZENvbHVtbiArIChpc0hvcml6b250YWwgPyAwIDogKE1hdGgucmFuZG9tKCkgPiAwLjUgPyAxIDogLTEpKSxcbiAgICAgIH1cblxuICAgIH0gd2hpbGUgKCFib2R5LmV2ZXJ5KChib2R5QmxvY2spID0+IHtcbiAgICAgIHJldHVybiBib2R5QmxvY2sucm93ICE9PSBzdGFyUm93IFxuICAgICAgJiYgYm9keUJsb2NrLmNvbHVtbiAhPT0gc3RhckNvbHVtbiBcbiAgICAgICYmIGJvZHlCbG9jay5yb3cgPj0gMCAmJiBib2R5QmxvY2sucm93IDwgcm93c1xuICAgICAgJiYgYm9keUJsb2NrLmNvbHVtbiA+PSAwICYmIGJvZHlCbG9jay5jb2x1bW4gPCBjb2x1bW5zXG4gICAgfSkpXG4gICAgZ2FtdXguZGlzcGF0Y2goc2V0U25ha2VCb2R5KGJvZHkpKVxuXG4gICAgLy8gU2V0dXAgbGlzdGVuZXJcbiAgICB3aW5kb3cub25sb2FkID0gd2luZG93Lm9ucmVzaXplID0gKCkgPT4ge1xuICAgICAgZ2FtdXguZGlzcGF0Y2goZ2FtZVJlc2l6ZShcbiAgICAgICAgY29udGFpbmVyLm9mZnNldFdpZHRoLFxuICAgICAgICBjb250YWluZXIub2Zmc2V0SGVpZ2h0XG4gICAgICApKVxuICAgIH1cblxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCAoZXZ0KSA9PiB7XG4gICAgICBzd2l0Y2ggKGV2dC5rZXlDb2RlKSB7XG4gICAgICAgIGNhc2UgMzc6IC8vIExlZnRcbiAgICAgICAgICBnYW11eC5kaXNwYXRjaChsZWZ0S2V5RG93bigpKVxuICAgICAgICAgIGJyZWFrXG4gICAgICAgIGNhc2UgMzg6IC8vIFVwXG4gICAgICAgICAgZ2FtdXguZGlzcGF0Y2godXBLZXlEb3duKCkpXG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgY2FzZSAzOTogLy8gUmlnaHRcbiAgICAgICAgICBnYW11eC5kaXNwYXRjaChyaWdodEtleURvd24oKSlcbiAgICAgICAgICBicmVha1xuICAgICAgICBjYXNlIDQwOiAvLyBEb3duXG4gICAgICAgICAgZ2FtdXguZGlzcGF0Y2goZG93bktleURvd24oKSlcbiAgICAgICAgICBicmVha1xuICAgICAgfVxuICAgIH0pXG5cbiAgICAvLyBGb3IgbW9iaWxlXG4gICAgbGV0IHRvdWNoU3RhcnQgPSB7XG4gICAgICAgICAgeDogLTEsIFxuICAgICAgICAgIHk6IC0xXG4gICAgICAgIH0sXG4gICAgICAgIHRvdWNoTW92ZUJ1ZmZlciA9IDEwXG5cbiAgICBmdW5jdGlvbiBoYW5kbGVUb3VjaFN0YXJ0IChldnQpIHtcbiAgICAgIGlmICh0eXBlb2YgZXZ0LnRvdWNoZXMgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHJldHVybiBcbiAgICAgIH1cblxuICAgICAgbGV0IHRvdWNoID0gZXZ0LnRvdWNoZXNbMF1cblxuICAgICAgdG91Y2hTdGFydC54ID0gdG91Y2gucGFnZVhcbiAgICAgIHRvdWNoU3RhcnQueSA9IHRvdWNoLnBhZ2VZXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaGFuZGxlVG91Y2hNb3ZlIChldnQpIHtcbiAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICBcbiAgICAgIGlmICh0eXBlb2YgZXZ0LnRvdWNoZXMgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHJldHVybiBcbiAgICAgIH1cblxuICAgICAgbGV0IHRvdWNoID0gZXZ0LnRvdWNoZXNbMF0sXG4gICAgICAgICAgaGVhZERpcmVjdGlvbiA9IGdhbXV4LmdldFN0YXRlKCdzbmFrZScpLmRpcmVjdGlvblxuXG4gICAgICBsZXQgZHggPSB0b3VjaC5wYWdlWCAtIHRvdWNoU3RhcnQueCxcbiAgICAgICAgICBkeSA9IHRvdWNoLnBhZ2VZIC0gdG91Y2hTdGFydC55XG5cbiAgICAgIGlmIChNYXRoLmFicyhkeCkgPD0gdG91Y2hNb3ZlQnVmZmVyICYmIE1hdGguYWJzKGR5KSA8PSB0b3VjaE1vdmVCdWZmZXIpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGlmIChNYXRoLmFicyhkeCkgPiBNYXRoLmFicyhkeSkpIHtcbiAgICAgICAgLy8gSG9yaXpvbnRhbCBtb3ZlXG4gICAgICAgIGlmIChkeCA+IDAgJiYgaGVhZERpcmVjdGlvbiAhPT0gZGlyZWN0aW9uLlJJR0hUKSB7XG4gICAgICAgICAgZ2FtdXguZGlzcGF0Y2gocmlnaHRLZXlEb3duKCkpXG4gICAgICAgICAgXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoZHggPCAwICYmIGhlYWREaXJlY3Rpb24gIT09IGRpcmVjdGlvbi5MRUZUKSB7XG4gICAgICAgICAgZ2FtdXguZGlzcGF0Y2gobGVmdEtleURvd24oKSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIC8vIFZlcnRpY2FsIG1vdmVcbiAgICAgICAgaWYgKGR5ID4gMCAmJiBoZWFkRGlyZWN0aW9uICE9PSBkaXJlY3Rpb24uRE9XTikge1xuICAgICAgICAgIGdhbXV4LmRpc3BhdGNoKGRvd25LZXlEb3duKCkpXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoZHkgPCAwICYmIGhlYWREaXJlY3Rpb24gIT09IGRpcmVjdGlvbi5VUCkge1xuICAgICAgICAgIGdhbXV4LmRpc3BhdGNoKHVwS2V5RG93bigpKVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHRvdWNoU3RhcnQueCA9IHRvdWNoLnBhZ2VYXG4gICAgICB0b3VjaFN0YXJ0LnkgPSB0b3VjaC5wYWdlWVxuICAgIH1cblxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCBoYW5kbGVUb3VjaFN0YXJ0KVxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIGhhbmRsZVRvdWNoTW92ZSlcbiAgfVxufSlcblxuZ2FtdXguc3RhcnQoKVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vZGVtby9zbmFrZS9pbmRleC5qcyIsImltcG9ydCB7XG4gIExFRlRfS0VZRE9XTixcbiAgUklHSFRfS0VZRE9XTixcbiAgVVBfS0VZRE9XTixcbiAgRE9XTl9LRVlET1dOLFxuICBTRVRfU05BS0VfQk9EWSxcbiAgTkVYVF9MRVZFTCxcbiAgR0FNRV9PVkVSLFxuICBDVVRfU05BS0VfQk9EWVxufSBmcm9tICcuL2FjdGlvbnMnXG5pbXBvcnQge1xuICBnYW1lRGVmYXVsdCxcbiAgZGlyZWN0aW9uXG59IGZyb20gJy4vdGhlbWUnXG5cbmNvbnN0IGluaXRTdGF0ZSA9IHtcbiAgLyoqXG4gICAqIEEgbGlua2VkIGxpc3QgZm9yIHNuYWtlIGJvZHlcbiAgICovXG4gIGJvZHk6IFtdLFxuICBpc01vdmU6IGZhbHNlLFxuICBzcGVlZDogZ2FtZURlZmF1bHQuc3BlZWQsXG4gIHJvd3M6IGdhbWVEZWZhdWx0LnJvd3MsXG4gIGNvbHVtbnM6IGdhbWVEZWZhdWx0LmNvbHVtbnMsXG4gIGxldmVsOiAxXG59XG5cbmV4cG9ydCBkZWZhdWx0IChzdGF0ZSA9IGluaXRTdGF0ZSwgYWN0aW9uKSA9PiB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcblxuICAgIGNhc2UgU0VUX1NOQUtFX0JPRFk6IHtcbiAgICAgIGxldCB7XG4gICAgICAgIGJvZHksXG4gICAgICB9ID0gYWN0aW9uXG5cbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xuICAgICAgICBib2R5LFxuICAgICAgICBpc01vdmU6IHRydWVcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgY2FzZSBVUF9LRVlET1dOOiB7XG4gICAgICBsZXQgYm9keSA9IHN0YXRlLmJvZHkuc2xpY2UoKVxuXG4gICAgICBpZiAoYm9keVswXS5yb3cgPT09IGJvZHlbMV0ucm93ICsgMSkge1xuICAgICAgICAvLyBIaXQgYmFja3dhcmRzIFxuICAgICAgICAvLyBUaGlzIHNob3VsZCB0cmlnZ2VyIG5vdGhpbmdcbiAgICAgICAgcmV0dXJuIHN0YXRlXG4gICAgICB9XG5cbiAgICAgIGJvZHkucmV2ZXJzZSgpLnJlZHVjZSgoZmlyc3QsIHNlY29uZCkgPT4ge1xuICAgICAgICBmaXJzdC5yb3cgPSBzZWNvbmQucm93XG4gICAgICAgIGZpcnN0LmNvbHVtbiA9IHNlY29uZC5jb2x1bW5cbiAgICAgICAgcmV0dXJuIHNlY29uZCBcbiAgICAgIH0pXG4gICAgICBib2R5LnJldmVyc2UoKVxuXG4gICAgICBib2R5WzBdLnJvdyAtPSAxXG5cbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xuICAgICAgICBpc01vdmU6IHRydWUsXG4gICAgICAgIGJvZHksXG4gICAgICAgIGRpcmVjdGlvbjogZGlyZWN0aW9uLlVQXG4gICAgICB9KVxuICAgIH1cblxuICAgIGNhc2UgRE9XTl9LRVlET1dOOiB7XG4gICAgICBsZXQgYm9keSA9IHN0YXRlLmJvZHkuc2xpY2UoKVxuXG4gICAgICBpZiAoYm9keVswXS5yb3cgPT09IGJvZHlbMV0ucm93IC0gMSkge1xuICAgICAgICAvLyBIaXQgYmFja3dhcmRzIFxuICAgICAgICAvLyBUaGlzIHNob3VsZCB0cmlnZ2VyIG5vdGhpbmdcbiAgICAgICAgcmV0dXJuIHN0YXRlXG4gICAgICB9XG5cbiAgICAgIGJvZHkucmV2ZXJzZSgpLnJlZHVjZSgoZmlyc3QsIHNlY29uZCkgPT4ge1xuICAgICAgICBmaXJzdC5yb3cgPSBzZWNvbmQucm93XG4gICAgICAgIGZpcnN0LmNvbHVtbiA9IHNlY29uZC5jb2x1bW5cbiAgICAgICAgcmV0dXJuIHNlY29uZCBcbiAgICAgIH0pXG4gICAgICBib2R5LnJldmVyc2UoKVxuXG4gICAgICBib2R5WzBdLnJvdyArPSAxXG5cbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xuICAgICAgICBpc01vdmU6IHRydWUsXG4gICAgICAgIGJvZHksXG4gICAgICAgIGRpcmVjdGlvbjogZGlyZWN0aW9uLkRPV05cbiAgICAgIH0pXG4gICAgfVxuXG4gICAgY2FzZSBMRUZUX0tFWURPV046IHtcbiAgICAgIGxldCBib2R5ID0gc3RhdGUuYm9keS5zbGljZSgpXG5cbiAgICAgIGlmIChib2R5WzBdLmNvbHVtbiA9PT0gYm9keVsxXS5jb2x1bW4gKyAxKSB7XG4gICAgICAgIC8vIEhpdCBiYWNrd2FyZHMgXG4gICAgICAgIC8vIFRoaXMgc2hvdWxkIHRyaWdnZXIgbm90aGluZ1xuICAgICAgICByZXR1cm4gc3RhdGVcbiAgICAgIH1cblxuICAgICAgYm9keS5yZXZlcnNlKCkucmVkdWNlKChmaXJzdCwgc2Vjb25kKSA9PiB7XG4gICAgICAgIGZpcnN0LnJvdyA9IHNlY29uZC5yb3dcbiAgICAgICAgZmlyc3QuY29sdW1uID0gc2Vjb25kLmNvbHVtblxuICAgICAgICByZXR1cm4gc2Vjb25kIFxuICAgICAgfSlcbiAgICAgIGJvZHkucmV2ZXJzZSgpXG5cbiAgICAgIGJvZHlbMF0uY29sdW1uIC09IDFcblxuICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XG4gICAgICAgIGlzTW92ZTogdHJ1ZSxcbiAgICAgICAgYm9keSxcbiAgICAgICAgZGlyZWN0aW9uOiBkaXJlY3Rpb24uTEVGVFxuICAgICAgfSlcbiAgICB9XG5cbiAgICBjYXNlIFJJR0hUX0tFWURPV046IHtcbiAgICAgIGxldCBib2R5ID0gc3RhdGUuYm9keS5zbGljZSgpXG5cbiAgICAgIGlmIChib2R5WzBdLmNvbHVtbiA9PT0gYm9keVsxXS5jb2x1bW4gLSAxKSB7XG4gICAgICAgIC8vIEhpdCBiYWNrd2FyZHMgXG4gICAgICAgIC8vIFRoaXMgc2hvdWxkIHRyaWdnZXIgbm90aGluZ1xuICAgICAgICByZXR1cm4gc3RhdGVcbiAgICAgIH1cblxuICAgICAgYm9keS5yZXZlcnNlKCkucmVkdWNlKChmaXJzdCwgc2Vjb25kKSA9PiB7XG4gICAgICAgIGZpcnN0LnJvdyA9IHNlY29uZC5yb3dcbiAgICAgICAgZmlyc3QuY29sdW1uID0gc2Vjb25kLmNvbHVtblxuICAgICAgICByZXR1cm4gc2Vjb25kIFxuICAgICAgfSlcbiAgICAgIGJvZHkucmV2ZXJzZSgpXG5cbiAgICAgIGJvZHlbMF0uY29sdW1uICs9IDFcblxuICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XG4gICAgICAgIGlzTW92ZTogdHJ1ZSxcbiAgICAgICAgYm9keSxcbiAgICAgICAgZGlyZWN0aW9uOiBkaXJlY3Rpb24uUklHSFRcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgY2FzZSBORVhUX0xFVkVMOiB7XG4gICAgICBsZXQgYm9keSA9IHN0YXRlLmJvZHkuc2xpY2UoKSxcbiAgICAgICAgICBoZWFkID0gYm9keVswXSxcbiAgICAgICAgICBoZWFkRGlyZWN0aW9uID0gc3RhdGUuZGlyZWN0aW9uXG5cbiAgICAgIGlmICghaGVhZCkge1xuICAgICAgICByZXR1cm4gc3RhdGVcbiAgICAgIH1cblxuICAgICAgYm9keS51bnNoaWZ0KHtcbiAgICAgICAgcm93OiBoZWFkRGlyZWN0aW9uID09PSBkaXJlY3Rpb24uVVAgPyBoZWFkLnJvdyAtIDEgOiBoZWFkRGlyZWN0aW9uID09PSBkaXJlY3Rpb24uRE9XTiA/IGhlYWQucm93ICsgMSA6IGhlYWQucm93LFxuICAgICAgICBjb2x1bW46IGhlYWREaXJlY3Rpb24gPT09IGRpcmVjdGlvbi5MRUZUID8gaGVhZC5jb2x1bW4gLSAxIDogaGVhZERpcmVjdGlvbiA9PT0gZGlyZWN0aW9uLlJJR0hUID8gaGVhZC5jb2x1bW4gKyAxIDogaGVhZC5jb2x1bW5cbiAgICAgIH0pXG5cbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xuICAgICAgICBib2R5LFxuICAgICAgICBsZXZlbDogc3RhdGUubGV2ZWwgKyAxLFxuICAgICAgICBzcGVlZDogZ2FtZURlZmF1bHQuc3BlZWQgKyAoc3RhdGUubGV2ZWwgLSAxKSAqIDAuMDJcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgY2FzZSBHQU1FX09WRVI6IHtcbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xuICAgICAgICBpc01vdmU6IGZhbHNlXG4gICAgICB9KVxuICAgIH1cblxuICAgIGNhc2UgQ1VUX1NOQUtFX0JPRFk6IHtcbiAgICAgIGxldCBib2R5ID0gc3RhdGUuYm9keS5zbGljZSgpLFxuICAgICAgICAgIHtjdXRCb2R5SW5kZXh9ID0gYWN0aW9uLFxuICAgICAgICAgIG5ld0xldmVsID0gY3V0Qm9keUluZGV4IC0gMVxuXG4gICAgICBib2R5LnNwbGljZShjdXRCb2R5SW5kZXgpXG5cbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xuICAgICAgICBib2R5LFxuICAgICAgICBsZXZlbDogbmV3TGV2ZWwsXG4gICAgICAgIHNwZWVkOiBnYW1lRGVmYXVsdC5zcGVlZCArIG5ld0xldmVsICogMC4wMlxuICAgICAgfSlcbiAgICB9XG5cbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlXG4gIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9kZW1vL3NuYWtlL3NuYWtlUmVkdWNlci5qcyIsImltcG9ydCB7XG4gIEdBTUVfUkVTSVpFLFxuICBTRVRfU1RBUl9QT1NJVElPTixcbiAgTkVYVF9MRVZFTCxcbiAgR0FNRV9PVkVSLFxuICBDVVRfU05BS0VfQk9EWVxufSBmcm9tICcuL2FjdGlvbnMnXG5pbXBvcnQge2dhbWVEZWZhdWx0fSBmcm9tICcuL3RoZW1lJ1xuXG5jb25zdCBpbml0U3RhdGUgPSB7XG4gIHdpZHRoOiAtMSxcbiAgaGVpZ2h0OiAtMSxcbiAgcm93czogZ2FtZURlZmF1bHQucm93cyxcbiAgY29sdW1uczogZ2FtZURlZmF1bHQuY29sdW1ucyxcbiAgc3RhclBvc2l0aW9uOiB7XG4gICAgcm93OiAtMSxcbiAgICBjb2x1bW46IC0xXG4gIH0sXG4gIGxldmVsOiAxLFxuICBoaWdoTGV2ZWw6IDEsXG4gIGlzR2FtZW92ZXI6IGZhbHNlXG59XG5cbmZ1bmN0aW9uIGlzT3ZlcmxhcCAoc3RhclBvc2l0aW9uLCBzbmFrZUJvZHkpIHtcbiAgcmV0dXJuICFzbmFrZUJvZHkuZXZlcnkoKGJvZHlCbG9jaykgPT4ge1xuICAgIHJldHVybiBib2R5QmxvY2sucm93ICE9PSBzdGFyUG9zaXRpb24ucm93XG4gICAgICAgICYmIGJvZHlCbG9jay5jb2x1bW4gIT09IHN0YXJQb3NpdGlvbi5jb2x1bW5cbiAgfSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgKHN0YXRlID0gaW5pdFN0YXRlLCBhY3Rpb24pID0+IHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuXG4gICAgY2FzZSBHQU1FX1JFU0laRToge1xuICAgICAgbGV0IGdhbWVTaXplID0gTWF0aC5taW4oTWF0aC5taW4oYWN0aW9uLndpZHRoLCBhY3Rpb24uaGVpZ2h0KSwgNjAwKVxuICAgICAgXG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcbiAgICAgICAgd2lkdGg6IGdhbWVTaXplLFxuICAgICAgICBoZWlnaHQ6IGdhbWVTaXplXG4gICAgICB9KVxuICAgIH1cblxuICAgIGNhc2UgU0VUX1NUQVJfUE9TSVRJT046XG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcbiAgICAgICAgc3RhclBvc2l0aW9uOiB7XG4gICAgICAgICAgcm93OiBhY3Rpb24ucm93LFxuICAgICAgICAgIGNvbHVtbjogYWN0aW9uLmNvbHVtblxuICAgICAgICB9XG4gICAgICB9KVxuXG4gICAgY2FzZSBORVhUX0xFVkVMOiB7XG4gICAgICBsZXQgc25ha2VCb2R5ID0gYWN0aW9uLnNuYWtlQm9keSxcbiAgICAgICAgICBuZXdTdGFyUG9zaXRpb24gPSB7fSxcbiAgICAgICAgICBuZXdMZXZlbCA9IHN0YXRlLmxldmVsICsgMVxuXG4gICAgICBkbyB7XG4gICAgICAgIG5ld1N0YXJQb3NpdGlvbi5yb3cgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBzdGF0ZS5yb3dzKVxuICAgICAgICBuZXdTdGFyUG9zaXRpb24uY29sdW1uID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogc3RhdGUuY29sdW1ucylcbiAgICAgIH1cbiAgICAgIHdoaWxlIChpc092ZXJsYXAobmV3U3RhclBvc2l0aW9uLCBzbmFrZUJvZHkpKVxuXG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcbiAgICAgICAgc3RhclBvc2l0aW9uOiBuZXdTdGFyUG9zaXRpb24sXG4gICAgICAgIGxldmVsOiBuZXdMZXZlbCxcbiAgICAgICAgaGlnaExldmVsOiBNYXRoLm1heChzdGF0ZS5oaWdoTGV2ZWwsIG5ld0xldmVsKVxuICAgICAgfSlcbiAgICB9XG5cbiAgICBjYXNlIEdBTUVfT1ZFUjoge1xuICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XG4gICAgICAgIGlzR2FtZW92ZXI6IHRydWVcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgY2FzZSBDVVRfU05BS0VfQk9EWToge1xuICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XG4gICAgICAgIGxldmVsOiBhY3Rpb24uY3V0Qm9keUluZGV4IC0gMVxuICAgICAgfSlcbiAgICB9XG5cbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlXG4gIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9kZW1vL3NuYWtlL3dvcmxkUmVkdWNlci5qcyIsImNvbnN0IGluaXRGaW5hbFJlbmRlclN0YXRlICA9IHt9XG5cbmV4cG9ydCBjb25zdCB3b3JsZExheWVyVXBkYXRlciA9IChmaW5hbFJlbmRlclN0YXRlID0gaW5pdEZpbmFsUmVuZGVyU3RhdGUsIGdhbWVTdGF0ZSwgZGlydHlLZXlzKSA9PiB7XG4gIGlmIChkaXJ0eUtleXMuaW5kZXhPZignd29ybGQnKSA+PSAwKSB7XG4gICAgbGV0IHtcbiAgICAgICAgICB3aWR0aCxcbiAgICAgICAgICBoZWlnaHQsXG4gICAgICAgICAgcm93cyxcbiAgICAgICAgICBjb2x1bW5zLFxuICAgICAgICAgIHN0YXJQb3NpdGlvbixcbiAgICAgICAgICBsZXZlbCxcbiAgICAgICAgICBoaWdoTGV2ZWxcbiAgICAgICAgfSA9IGdhbWVTdGF0ZVsnd29ybGQnXSxcbiAgICAgICAgY2VsbFdpZHRoID0gd2lkdGggLyBjb2x1bW5zLFxuICAgICAgICBjZWxsSGVpZ2h0ID0gaGVpZ2h0IC8gcm93c1xuXG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIGZpbmFsUmVuZGVyU3RhdGUsIHtcbiAgICAgIHdpZHRoLFxuICAgICAgaGVpZ2h0LFxuICAgICAgeHM6IEFycmF5KGNvbHVtbnMgKyAxKS5maWxsKDApLm1hcCgoeCwgeEluZGV4KSA9PiB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgeDogeEluZGV4ICogY2VsbFdpZHRoLFxuICAgICAgICAgIHkwOiAwLFxuICAgICAgICAgIHkxOiBoZWlnaHRcbiAgICAgICAgfX0pLFxuICAgICAgeXM6IEFycmF5KHJvd3MgKyAxKS5maWxsKDApLm1hcCgoeSwgeUluZGV4KSA9PiB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgeTogeUluZGV4ICogY2VsbEhlaWdodCxcbiAgICAgICAgICB4MDogMCxcbiAgICAgICAgICB4MTogd2lkdGhcbiAgICAgICAgfX0pLFxuICAgICAgc3Rhcjoge1xuICAgICAgICB4OiBzdGFyUG9zaXRpb24uY29sdW1uICogY2VsbFdpZHRoLFxuICAgICAgICB5OiBzdGFyUG9zaXRpb24ucm93ICogY2VsbEhlaWdodCxcbiAgICAgICAgd2lkdGg6IGNlbGxXaWR0aCxcbiAgICAgICAgaGVpZ2h0OiBjZWxsSGVpZ2h0XG4gICAgICB9LFxuICAgICAgbGV2ZWwsXG4gICAgICBoaWdoTGV2ZWxcbiAgICB9KVxuICB9XG4gIGVsc2Uge1xuICAgIHJldHVybiBmaW5hbFJlbmRlclN0YXRlXG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IHdvcmxkTGF5ZXJSZW5kZXIgPSAoY2FudmFzLCByZW5kZXJTdGF0ZSwgZmluYWxSZW5kZXJTdGF0ZSwgZHQpID0+IHtcbiAgaWYgKHJlbmRlclN0YXRlICE9PSBmaW5hbFJlbmRlclN0YXRlKSB7XG4gICAgaWYgKCFyZW5kZXJTdGF0ZSkge1xuICAgICAgcmVuZGVyU3RhdGUgPSBmaW5hbFJlbmRlclN0YXRlXG4gICAgfVxuXG4gICAgLy8gTm8gYW5pbWF0aW9uIHRvIHdvcmxkIGxheWVyXG4gICAgcmVuZGVyU3RhdGUgPSBmaW5hbFJlbmRlclN0YXRlXG5cbiAgICBsZXQge1xuICAgICAgd2lkdGgsXG4gICAgICBoZWlnaHQsXG4gICAgICB4cyxcbiAgICAgIHlzLFxuICAgICAgbGV2ZWwsXG4gICAgICBoaWdoTGV2ZWwsXG4gICAgICBzdGFyXG4gICAgfSA9IHJlbmRlclN0YXRlXG5cbiAgICBsZXQgY29udGV4dCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpXG5cbiAgICBpZiAoY2FudmFzLndpZHRoICE9PSB3aWR0aFxuICAgICAgfHwgY2FudmFzLmhlaWdodCAhPT0gaGVpZ2h0KSB7XG4gICAgICBjYW52YXMud2lkdGggPSB3aWR0aFxuICAgICAgY2FudmFzLmhlaWdodCA9IGhlaWdodFxuICAgICAgLy8gQ2xlYXIgY2FudmFzIG1hbnVhbGx5XG4gICAgICBjb250ZXh0LmNsZWFyUmVjdCgwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpXG4gICAgfVxuXG4gICAgLy8gQ2xlYXIgY2FudmFzIG1hbnVhbGx5IGJlZm9yZSByZWRyYXdcbiAgICBjb250ZXh0LmNsZWFyUmVjdCgwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpXG5cbiAgICBjb250ZXh0LmZpbGxTdHlsZSA9ICcjZmZmZmZmJ1xuICAgIGNvbnRleHQuZmlsbFJlY3QoMCwgMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KVxuXG4gICAgY29udGV4dC5zdHJva2VTdHlsZSA9ICcjZjlmOWY5J1xuICAgIGNvbnRleHQubGluZVdpZHRoID0gMVxuICAgIGNvbnRleHQuYmVnaW5QYXRoKClcblxuICAgIHhzLmZvckVhY2goKHZlcnRpY2FsTGluZSkgPT4ge1xuICAgICAgY29udGV4dC5tb3ZlVG8odmVydGljYWxMaW5lLngsIHZlcnRpY2FsTGluZS55MClcbiAgICAgIGNvbnRleHQubGluZVRvKHZlcnRpY2FsTGluZS54LCB2ZXJ0aWNhbExpbmUueTEpXG4gICAgICBjb250ZXh0LnN0cm9rZSgpXG4gICAgfSlcblxuICAgIHlzLmZvckVhY2goKGhvcml6b250YWxMaW5lKSA9PiB7XG4gICAgICBjb250ZXh0Lm1vdmVUbyhob3Jpem9udGFsTGluZS54MCwgaG9yaXpvbnRhbExpbmUueSlcbiAgICAgIGNvbnRleHQubGluZVRvKGhvcml6b250YWxMaW5lLngxLCBob3Jpem9udGFsTGluZS55KVxuICAgICAgY29udGV4dC5zdHJva2UoKVxuICAgIH0pXG5cbiAgICAvLyBEcmF3IHRleHRcbiAgICBjb250ZXh0LmZpbGxTdHlsZSA9ICcjYmZiZmJmJ1xuICAgIGNvbnRleHQuZm9udCA9IE1hdGgubWluKHdpZHRoIC8gMiwgaGVpZ2h0IC8gMikgKyAncHggYXJpYWwsIGhlbHZldGljYSwgc2Fucy1zZXJpZidcbiAgICBjb250ZXh0LnRleHRBbGlnbiA9ICdjZW50ZXInXG4gICAgY29udGV4dC50ZXh0QmFzZWxpbmUgPSAnbWlkZGxlJ1xuICAgIGNvbnRleHQuZmlsbFRleHQobGV2ZWwsIHdpZHRoIC8gMiwgaGVpZ2h0IC8gMilcblxuICAgIGNvbnRleHQuZm9udCA9IE1hdGgubWluKHdpZHRoIC8gMTYsIGhlaWdodCAvIDE2KSArICdweCBhcmlhbCwgaGVsdmV0aWNhLCBzYW5zLXNlcmlmJ1xuICAgIGNvbnRleHQuZmlsbFRleHQoJ0hpZ2hlc3Q6ICcgKyBoaWdoTGV2ZWwsIHdpZHRoIC8gMiwgaGVpZ2h0ICogMC44KVxuXG4gICAgLy8gRHJhdyBzdGFyXG4gICAgY29udGV4dC5maWxsU3R5bGUgPSAnI2ZmYWUwMCdcbiAgICBjb250ZXh0LmZpbGxSZWN0KHN0YXIueCwgc3Rhci55LCBzdGFyLndpZHRoLCBzdGFyLmhlaWdodClcbiAgfVxuXG4gIHJldHVybiByZW5kZXJTdGF0ZVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2RlbW8vc25ha2Uvd29ybGRMYXllci5qcyIsImltcG9ydCBnYW11eCBmcm9tICcuLi8uLi9kaXN0L2dhbXV4J1xuaW1wb3J0IHtcbiAgZGlyZWN0aW9uLFxuICBnYW1lRGVmYXVsdFxufSBmcm9tICcuL3RoZW1lJ1xuaW1wb3J0IHsgXG4gIGxlZnRLZXlEb3duLFxuICByaWdodEtleURvd24sXG4gIHVwS2V5RG93bixcbiAgZG93bktleURvd24sXG4gIGdhbWVPdmVyLFxuICBuZXh0TGV2ZWwsXG4gIGN1dFNuYWtlQm9keVxufSBmcm9tICcuL2FjdGlvbnMnXG5cbi8qKlxuICogRnVuY3Rpb24gZGV0ZWN0IGhpdCB3b3JsZCBlZGdlXG4gKi9cbmZ1bmN0aW9uIGhpdFN0YXIgKHNuYWtlSGVhZCwgc3Rhcikge1xuICBsZXQge2hpdERldGVjdGlvbkJ1ZmZlcn0gPSBnYW1lRGVmYXVsdFxuXG4gIHJldHVybiBzbmFrZUhlYWQueCArIHNuYWtlSGVhZC53aWR0aCAqIGhpdERldGVjdGlvbkJ1ZmZlciA8IHN0YXIueCArIHN0YXIud2lkdGhcbiAgICAgICYmIHNuYWtlSGVhZC54ICsgc25ha2VIZWFkLndpZHRoICogKDEgLSBoaXREZXRlY3Rpb25CdWZmZXIpID4gc3Rhci54XG4gICAgICAmJiBzbmFrZUhlYWQueSArIHNuYWtlSGVhZC5oZWlnaHQgKiBoaXREZXRlY3Rpb25CdWZmZXIgPCBzdGFyLnkgKyBzdGFyLmhlaWdodFxuICAgICAgJiYgc25ha2VIZWFkLnkgKyBzbmFrZUhlYWQuaGVpZ2h0ICogKDEgLSBoaXREZXRlY3Rpb25CdWZmZXIpID4gc3Rhci55XG59XG5cbmZ1bmN0aW9uIGhpdE9uUmlnaHQgKGZvY3VzLCBvdGhlciwgd2lkdGgsIGhlaWdodCkge1xuICBsZXQge2hpdERldGVjdGlvbkJ1ZmZlcn0gPSBnYW1lRGVmYXVsdCxcbiAgICAgIGZvY3VzWCA9IGZvY3VzLnggPiAwID8gZm9jdXMueCAlIHdpZHRoIDogd2lkdGggKyAoZm9jdXMueCAlIHdpZHRoKSxcbiAgICAgIGZvY3VzWSA9IGZvY3VzLnkgPiAwID8gZm9jdXMueSAlIGhlaWdodCA6IGhlaWdodCArIChmb2N1cy55ICUgaGVpZ2h0KSxcbiAgICAgIG90aGVyWCA9IG90aGVyLnggPiAwID8gb3RoZXIueCAlIHdpZHRoIDogd2lkdGggKyAob3RoZXIueCAlIHdpZHRoKSxcbiAgICAgIG90aGVyWSA9IG90aGVyLnkgPiAwID8gb3RoZXIueSAlIGhlaWdodCA6IGhlaWdodCArIChvdGhlci55ICUgaGVpZ2h0KVxuXG4gIHJldHVybiBmb2N1c1ggKyBmb2N1cy53aWR0aCAqICgxIC0gaGl0RGV0ZWN0aW9uQnVmZmVyKSA+IG90aGVyWFxuICAgICAgJiYgZm9jdXNYICsgZm9jdXMud2lkdGggPCBvdGhlclggKyBvdGhlci53aWR0aFxuICAgICAgJiYgZm9jdXNZICsgZm9jdXMuaGVpZ2h0ICogKDEgLSBoaXREZXRlY3Rpb25CdWZmZXIpID4gb3RoZXJZXG4gICAgICAmJiBmb2N1c1kgKyBmb2N1cy5oZWlnaHQgKiBoaXREZXRlY3Rpb25CdWZmZXIgPCBvdGhlclkgKyBvdGhlci5oZWlnaHRcbn1cblxuZnVuY3Rpb24gaGl0T25MZWZ0IChmb2N1cywgb3RoZXIsIHdpZHRoLCBoZWlnaHQpIHtcbiAgbGV0IHtoaXREZXRlY3Rpb25CdWZmZXJ9ID0gZ2FtZURlZmF1bHQsXG4gICAgICBmb2N1c1ggPSBmb2N1cy54ID4gMCA/IGZvY3VzLnggJSB3aWR0aCA6IHdpZHRoICsgKGZvY3VzLnggJSB3aWR0aCksXG4gICAgICBmb2N1c1kgPSBmb2N1cy55ID4gMCA/IGZvY3VzLnkgJSBoZWlnaHQgOiBoZWlnaHQgKyAoZm9jdXMueSAlIGhlaWdodCksXG4gICAgICBvdGhlclggPSBvdGhlci54ID4gMCA/IG90aGVyLnggJSB3aWR0aCA6IHdpZHRoICsgKG90aGVyLnggJSB3aWR0aCksXG4gICAgICBvdGhlclkgPSBvdGhlci55ID4gMCA/IG90aGVyLnkgJSBoZWlnaHQgOiBoZWlnaHQgKyAob3RoZXIueSAlIGhlaWdodClcblxuICByZXR1cm4gZm9jdXNYICsgZm9jdXMud2lkdGggKiBoaXREZXRlY3Rpb25CdWZmZXIgPCBvdGhlclggKyBvdGhlci53aWR0aFxuICAgICAgJiYgZm9jdXNYID4gb3RoZXJYXG4gICAgICAmJiBmb2N1c1kgKyBmb2N1cy5oZWlnaHQgKiAoMSAtIGhpdERldGVjdGlvbkJ1ZmZlcikgPiBvdGhlcllcbiAgICAgICYmIGZvY3VzWSArIGZvY3VzLmhlaWdodCAqIGhpdERldGVjdGlvbkJ1ZmZlciA8IG90aGVyWSArIG90aGVyLmhlaWdodFxufVxuXG5mdW5jdGlvbiBoaXRPbkJvdHRvbSAoZm9jdXMsIG90aGVyLCB3aWR0aCwgaGVpZ2h0KSB7XG4gIGxldCB7aGl0RGV0ZWN0aW9uQnVmZmVyfSA9IGdhbWVEZWZhdWx0LFxuICAgICAgZm9jdXNYID0gZm9jdXMueCA+IDAgPyBmb2N1cy54ICUgd2lkdGggOiB3aWR0aCArIChmb2N1cy54ICUgd2lkdGgpLFxuICAgICAgZm9jdXNZID0gZm9jdXMueSA+IDAgPyBmb2N1cy55ICUgaGVpZ2h0IDogaGVpZ2h0ICsgKGZvY3VzLnkgJSBoZWlnaHQpLFxuICAgICAgb3RoZXJYID0gb3RoZXIueCA+IDAgPyBvdGhlci54ICUgd2lkdGggOiB3aWR0aCArIChvdGhlci54ICUgd2lkdGgpLFxuICAgICAgb3RoZXJZID0gb3RoZXIueSA+IDAgPyBvdGhlci55ICUgaGVpZ2h0IDogaGVpZ2h0ICsgKG90aGVyLnkgJSBoZWlnaHQpXG5cbiAgcmV0dXJuIGZvY3VzWSArIGZvY3VzLmhlaWdodCAqICgxIC0gaGl0RGV0ZWN0aW9uQnVmZmVyKSA+IG90aGVyWVxuICAgICAgJiYgZm9jdXNZICsgZm9jdXMuaGVpZ2h0IDwgb3RoZXJZICsgb3RoZXIuaGVpZ2h0XG4gICAgICAmJiBmb2N1c1ggKyBmb2N1cy53aWR0aCAqICgxIC0gaGl0RGV0ZWN0aW9uQnVmZmVyKSA+IG90aGVyWFxuICAgICAgJiYgZm9jdXNYICsgZm9jdXMud2lkdGggKiBoaXREZXRlY3Rpb25CdWZmZXIgPCBvdGhlclggKyBvdGhlci53aWR0aFxufVxuXG5mdW5jdGlvbiBoaXRPblRvcCAoZm9jdXMsIG90aGVyLCB3aWR0aCwgaGVpZ2h0KSB7XG4gIGxldCB7aGl0RGV0ZWN0aW9uQnVmZmVyfSA9IGdhbWVEZWZhdWx0LFxuICAgICAgZm9jdXNYID0gZm9jdXMueCA+IDAgPyBmb2N1cy54ICUgd2lkdGggOiB3aWR0aCArIChmb2N1cy54ICUgd2lkdGgpLFxuICAgICAgZm9jdXNZID0gZm9jdXMueSA+IDAgPyBmb2N1cy55ICUgaGVpZ2h0IDogaGVpZ2h0ICsgKGZvY3VzLnkgJSBoZWlnaHQpLFxuICAgICAgb3RoZXJYID0gb3RoZXIueCA+IDAgPyBvdGhlci54ICUgd2lkdGggOiB3aWR0aCArIChvdGhlci54ICUgd2lkdGgpLFxuICAgICAgb3RoZXJZID0gb3RoZXIueSA+IDAgPyBvdGhlci55ICUgaGVpZ2h0IDogaGVpZ2h0ICsgKG90aGVyLnkgJSBoZWlnaHQpXG5cbiAgcmV0dXJuIGZvY3VzWSArIGZvY3VzLmhlaWdodCAqIGhpdERldGVjdGlvbkJ1ZmZlciA8IG90aGVyWSArIG90aGVyLmhlaWdodFxuICAgICAgJiYgZm9jdXNZID4gb3RoZXJZXG4gICAgICAmJiBmb2N1c1ggKyBmb2N1cy53aWR0aCAqICgxIC0gaGl0RGV0ZWN0aW9uQnVmZmVyKSA+IG90aGVyWFxuICAgICAgJiYgZm9jdXNYICsgZm9jdXMud2lkdGggKiBoaXREZXRlY3Rpb25CdWZmZXIgPCBvdGhlclggKyBvdGhlci53aWR0aFxufVxuXG5mdW5jdGlvbiBnZXRIaXRCb2R5SW5kZXggKHNuYWtlQm9keSwgaGVhZERpcmVjdGlvbiwgd2lkdGgsIGhlaWdodCkge1xuICBsZXQgaGVhZCA9IHNuYWtlQm9keVswXVxuXG4gIGlmICghaGVhZCkge1xuICAgIHJldHVybiAtMVxuICB9XG5cbiAgZm9yIChsZXQgaSA9IDM7IGkgPCBzbmFrZUJvZHkubGVuZ3RoOyBpKyspIHtcbiAgICBsZXQgYm9keUJsb2NrID0gc25ha2VCb2R5W2ldXG5cbiAgICBpZiAoKGhlYWREaXJlY3Rpb24gPT09IGRpcmVjdGlvbi5VUCAmJiBoaXRPblRvcChoZWFkLCBib2R5QmxvY2ssIHdpZHRoLCBoZWlnaHQpKVxuICAgICAgfHwgKGhlYWREaXJlY3Rpb24gPT09IGRpcmVjdGlvbi5ET1dOICYmIGhpdE9uQm90dG9tKGhlYWQsIGJvZHlCbG9jaywgd2lkdGgsIGhlaWdodCkpXG4gICAgICB8fCAoaGVhZERpcmVjdGlvbiA9PT0gZGlyZWN0aW9uLkxFRlQgJiYgaGl0T25MZWZ0KGhlYWQsIGJvZHlCbG9jaywgd2lkdGgsIGhlaWdodCkpXG4gICAgICB8fCAoaGVhZERpcmVjdGlvbiA9PT0gZGlyZWN0aW9uLlJJR0hUICYmIGhpdE9uUmlnaHQoaGVhZCwgYm9keUJsb2NrLCB3aWR0aCwgaGVpZ2h0KSkpIHtcbiAgICAgIHJldHVybiBpXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIC0xXG59XG5cbmZ1bmN0aW9uIGN1dFNlbGZCeUhlYWQgKHNuYWtlQm9keSwgaGVhZERpcmVjdGlvbiwgd2lkdGgsIGhlaWdodCkge1xuICBsZXQgaGl0Qm9keUluZGV4ID0gZ2V0SGl0Qm9keUluZGV4KHNuYWtlQm9keSwgaGVhZERpcmVjdGlvbiwgd2lkdGgsIGhlaWdodClcblxuICBpZiAoaGl0Qm9keUluZGV4IDwgMCkge1xuICAgIHJldHVybiBcbiAgfVxuXG4gIGdhbXV4LmRpc3BhdGNoKGN1dFNuYWtlQm9keShoaXRCb2R5SW5kZXgpKVxufVxuXG4vKipcbiAqIEZ1bmN0aW9uIHRvIGZpbGwgYSBmcmVlIGRpbWVuc2lvbiByZWN0XG4gKiBleGFtcGxlOlxuICogZmlsbEZyZWVSZWN0KGNvbnRleHQsIC0xMCwgLTEwLCAyMCwgMjApIHdpbGwgcmVuZGVyIGZvdXJcbiAqIHJlY3QgYXQgZWFjaCBjb3JuZXIgd2l0aCAxMCBwaXhlbCBkaW1lbnNpb25cbiAqL1xuZnVuY3Rpb24gZmlsbEZyZWVSZWN0IChjb250ZXh0LCB4LCB5LCB3aWR0aCwgaGVpZ2h0KSB7XG4gIGxldCBjYW52YXNXaWR0aCA9IGNvbnRleHQuY2FudmFzLndpZHRoLFxuICAgICAgY2FudmFzSGVpZ2h0ID0gY29udGV4dC5jYW52YXMuaGVpZ2h0XG5cbiAgaWYgKHggPCAwKSB7XG4gICAgeCA9IHggJSBjYW52YXNXaWR0aFxuICAgIGZpbGxGcmVlUmVjdChjb250ZXh0LCBjYW52YXNXaWR0aCArIHgsIHksIE1hdGgubWluKC14LCB3aWR0aCksIGhlaWdodClcbiAgfVxuXG4gIGlmICh4ID4gY2FudmFzV2lkdGggLSB3aWR0aCkge1xuICAgIHggPSB4ICUgY2FudmFzV2lkdGhcbiAgICBmaWxsRnJlZVJlY3QoY29udGV4dCwgTWF0aC5tYXgoMCwgeCAtIGNhbnZhc1dpZHRoKSwgeSwgd2lkdGggLSBNYXRoLm1heCgwLCBjYW52YXNXaWR0aCAtIHgpLCBoZWlnaHQpXG4gIH1cbiAgXG4gIGlmICh5IDwgMCkge1xuICAgIHkgPSB5ICUgY2FudmFzSGVpZ2h0XG4gICAgZmlsbEZyZWVSZWN0KGNvbnRleHQsIHgsIGNhbnZhc0hlaWdodCArIHksIHdpZHRoLCBNYXRoLm1pbigteSwgaGVpZ2h0KSlcbiAgfVxuXG4gIGlmICh5ID4gY2FudmFzSGVpZ2h0IC0gaGVpZ2h0KSB7XG4gICAgeSA9IHkgJSBjYW52YXNIZWlnaHRcbiAgICBmaWxsRnJlZVJlY3QoY29udGV4dCwgeCwgTWF0aC5tYXgoMCwgeSAtIGNhbnZhc0hlaWdodCksIHdpZHRoLCBoZWlnaHQgLSBNYXRoLm1heCgwLCBjYW52YXNIZWlnaHQgLSB5KSlcbiAgfVxuXG4gIGNvbnRleHQuZmlsbFJlY3QoeCwgeSwgd2lkdGgsIGhlaWdodClcbn1cblxuY29uc3QgaW5pdEZpbmFsUmVuZGVyU3RhdGUgID0ge31cblxuZXhwb3J0IGNvbnN0IHNuYWtlTGF5ZXJVcGRhdGVyID0gKGZpbmFsUmVuZGVyU3RhdGUgPSBpbml0RmluYWxSZW5kZXJTdGF0ZSwgZ2FtZVN0YXRlLCBkaXJ0eUtleXMpID0+IHtcbiAgaWYgKGRpcnR5S2V5cy5pbmRleE9mKCdzbmFrZScpID49IDApIHtcbiAgICBsZXQge1xuICAgICAgICAgIHdpZHRoLFxuICAgICAgICAgIGhlaWdodCxcbiAgICAgICAgICByb3dzLFxuICAgICAgICAgIGNvbHVtbnMsXG4gICAgICAgICAgc3RhclBvc2l0aW9uXG4gICAgICAgIH0gPSBnYW1lU3RhdGVbJ3dvcmxkJ10sXG4gICAgICAgIHtcbiAgICAgICAgICBib2R5LFxuICAgICAgICAgIGRpcmVjdGlvbixcbiAgICAgICAgICBpc01vdmUsXG4gICAgICAgICAgc3BlZWRcbiAgICAgICAgfSA9IGdhbWVTdGF0ZVsnc25ha2UnXSxcbiAgICAgICAgY2VsbFdpZHRoID0gd2lkdGggLyBjb2x1bW5zLFxuICAgICAgICBjZWxsSGVpZ2h0ID0gaGVpZ2h0IC8gcm93c1xuXG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIGZpbmFsUmVuZGVyU3RhdGUsIHtcbiAgICAgIHdpZHRoLFxuICAgICAgaGVpZ2h0LFxuICAgICAgYm9keTogYm9keS5tYXAoKGJvZHlCbG9jaywgaW5kZXgpID0+IHtcbiAgICAgICAgbGV0IHggPSBib2R5QmxvY2suY29sdW1uICogY2VsbFdpZHRoLFxuICAgICAgICAgICAgeSA9IGJvZHlCbG9jay5yb3cgKiBjZWxsSGVpZ2h0XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICB4OiBib2R5QmxvY2suY29sdW1uICogY2VsbFdpZHRoLFxuICAgICAgICAgIHk6IGJvZHlCbG9jay5yb3cgKiBjZWxsSGVpZ2h0LFxuICAgICAgICAgIHdpZHRoOiBjZWxsV2lkdGgsXG4gICAgICAgICAgaGVpZ2h0OiBjZWxsSGVpZ2h0XG4gICAgICAgICAgLy8gY29sdW1uOiBib2R5QmxvY2suY29sdW1uLFxuICAgICAgICAgIC8vIHJvdzogYm9keUJsb2NrLnJvd1xuICAgICAgICB9XG4gICAgICB9KSxcbiAgICAgIGlzTW92ZSxcbiAgICAgIHNwZWVkLFxuICAgICAgZGlyZWN0aW9uLFxuICAgICAgc3Rhcjoge1xuICAgICAgICB4OiBzdGFyUG9zaXRpb24uY29sdW1uICogY2VsbFdpZHRoLFxuICAgICAgICB5OiBzdGFyUG9zaXRpb24ucm93ICogY2VsbEhlaWdodCxcbiAgICAgICAgd2lkdGg6IGNlbGxXaWR0aCxcbiAgICAgICAgaGVpZ2h0OiBjZWxsSGVpZ2h0XG4gICAgICB9XG4gICAgfSlcbiAgfVxuICBlbHNlIHtcbiAgICByZXR1cm4gZmluYWxSZW5kZXJTdGF0ZVxuICB9XG59XG5cbmV4cG9ydCBjb25zdCBzbmFrZUxheWVyUmVuZGVyID0gKGNhbnZhcywgcmVuZGVyU3RhdGUsIGZpbmFsUmVuZGVyU3RhdGUsIGR0KSA9PiB7XG4gIGlmIChyZW5kZXJTdGF0ZSAhPT0gZmluYWxSZW5kZXJTdGF0ZSkge1xuICAgIGxldCBjb250ZXh0ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyksXG4gICAgICAgIGRpcnR5ID0gZmFsc2VcblxuICAgIGlmICghcmVuZGVyU3RhdGUpIHtcbiAgICAgIHJlbmRlclN0YXRlID0gZmluYWxSZW5kZXJTdGF0ZVxuICAgICAgZGlydHkgPSB0cnVlXG4gICAgfVxuXG4gICAgLy8gU2V0IHRoaW5ncyB0aGF0IGFyZSBub3QgYW5pbWF0ZWRcbiAgICBPYmplY3QuYXNzaWduKHJlbmRlclN0YXRlLCB7XG4gICAgICBkaXJlY3Rpb246IGZpbmFsUmVuZGVyU3RhdGUuZGlyZWN0aW9uLFxuICAgICAgaXNNb3ZlOiBmaW5hbFJlbmRlclN0YXRlLmlzTW92ZSxcbiAgICAgIHNwZWVkOiBmaW5hbFJlbmRlclN0YXRlLnNwZWVkLFxuICAgICAgd2lkdGg6IGZpbmFsUmVuZGVyU3RhdGUud2lkdGgsXG4gICAgICBoZWlnaHQ6IGZpbmFsUmVuZGVyU3RhdGUuaGVpZ2h0XG4gICAgfSlcblxuICAgIGlmIChjYW52YXMud2lkdGggIT09IHJlbmRlclN0YXRlLndpZHRoXG4gICAgICB8fCBjYW52YXMuaGVpZ2h0ICE9PSByZW5kZXJTdGF0ZS5oZWlnaHQpIHtcbiAgICAgIGNhbnZhcy53aWR0aCA9IHJlbmRlclN0YXRlLndpZHRoXG4gICAgICBjYW52YXMuaGVpZ2h0ID0gcmVuZGVyU3RhdGUuaGVpZ2h0XG4gICAgICAvLyBDbGVhciBjYW52YXMgbWFudWFsbHlcbiAgICAgIGNvbnRleHQuY2xlYXJSZWN0KDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodClcbiAgICB9XG5cbiAgICBpZiAoIXJlbmRlclN0YXRlLmlzTW92ZSkge1xuICAgICAgLy8gU25ha2Ugc3RvcHMgbW92ZVxuICAgICAgcmV0dXJuIHJlbmRlclN0YXRlXG4gICAgfVxuXG4gICAgbGV0IHtcbiAgICAgICAgICBzcGVlZCxcbiAgICAgICAgICBib2R5XG4gICAgICAgIH0gPSByZW5kZXJTdGF0ZSxcbiAgICAgICAgYm9keUZSUyA9IGZpbmFsUmVuZGVyU3RhdGUuYm9keSxcbiAgICAgICAgc3RhckZSUyA9IGZpbmFsUmVuZGVyU3RhdGUuc3RhclxuXG4gICAgLy8gTWFrZSBzdXJlIGJvZHkgYW5kIGJvZHlGUlMgYXJlIGluIHN5bmNcbiAgICBpZiAoYm9keS5sZW5ndGggPCBib2R5RlJTLmxlbmd0aCkge1xuICAgICAgLy8gQm9keSBncm93c1xuICAgICAgZm9yIChsZXQgaSA9IGJvZHkubGVuZ3RoOyBpIDwgYm9keUZSUy5sZW5ndGg7IGkrKykge1xuICAgICAgICBsZXQgYm9keUZSU0Jsb2NrID0gYm9keUZSU1tpXVxuICAgICAgICBib2R5W2ldID0ge1xuICAgICAgICAgIHg6IGJvZHlGUlNCbG9jay54LFxuICAgICAgICAgIHk6IGJvZHlGUlNCbG9jay55LFxuICAgICAgICAgIHdpZHRoOiBib2R5RlJTQmxvY2sud2lkdGgsXG4gICAgICAgICAgaGVpZ2h0OiBib2R5RlJTQmxvY2suaGVpZ2h0XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZWxzZSBpZiAoYm9keS5sZW5ndGggPiBib2R5RlJTLmxlbmd0aCkge1xuICAgICAgLy8gQm9keSBnb3QgY3V0XG4gICAgICBib2R5LnNwbGljZShib2R5RlJTLmxlbmd0aClcbiAgICB9XG5cbiAgICAvLyBTZXQgdGhlIGFjdHVhbCByZW5kZXIgZGltZW5zaW9ucyBmb3IgdGhlIHNuYWtlIGhlYWRcbiAgICBib2R5LmZvckVhY2goKGJvZHlCbG9jaywgaW5kZXgpID0+IHtcbiAgICAgIGxldCB7XG4gICAgICAgICAgICB4LFxuICAgICAgICAgICAgeSxcbiAgICAgICAgICAgIHdpZHRoLFxuICAgICAgICAgICAgaGVpZ2h0XG4gICAgICAgICAgfSA9IGJvZHlCbG9ja1xuXG4gICAgICBpZiAoYm9keUZSU1tpbmRleF0ueCAhPT0geCkge1xuICAgICAgICBsZXQgZGlyZWN0aW9uVW5pdCA9IChib2R5RlJTW2luZGV4XS54IC0geCkgLyBNYXRoLmFicyhib2R5RlJTW2luZGV4XS54IC0geCksXG4gICAgICAgICAgICBkaXN0YW5jZSA9IE1hdGgubWluKHNwZWVkICogZHQsIE1hdGguYWJzKGJvZHlGUlNbaW5kZXhdLnggLSB4KSlcblxuICAgICAgICBib2R5QmxvY2sueCArPSBkaXN0YW5jZSAqIGRpcmVjdGlvblVuaXRcbiAgICAgICAgZGlydHkgPSB0cnVlXG4gICAgICB9XG5cbiAgICAgIGlmIChib2R5RlJTW2luZGV4XS55ICE9PSB5KSB7XG4gICAgICAgIGxldCBkaXJlY3Rpb25Vbml0ID0gKGJvZHlGUlNbaW5kZXhdLnkgLSB5KSAvIE1hdGguYWJzKGJvZHlGUlNbaW5kZXhdLnkgLSB5KSxcbiAgICAgICAgICAgIGRpc3RhbmNlID0gTWF0aC5taW4oc3BlZWQgKiBkdCwgTWF0aC5hYnMoYm9keUZSU1tpbmRleF0ueSAtIHkpKVxuICAgICAgICBcbiAgICAgICAgYm9keUJsb2NrLnkgKz0gZGlzdGFuY2UgKiBkaXJlY3Rpb25Vbml0XG4gICAgICAgIGRpcnR5ID0gdHJ1ZVxuICAgICAgfVxuICAgIH0pXG5cbiAgICBpZiAoZGlydHkpIHtcbiAgICAgIC8vIFdlIGhhdmUgc29tZXRpbmcgdG8gcmVuZGVyIGhlcmVcbiAgICAgIGNvbnRleHQuY2xlYXJSZWN0KDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodClcblxuICAgICAgLy8gUmVuZGVyXG4gICAgICBib2R5LmZvckVhY2goKGJvZHlCbG9jaywgaW5kZXgpID0+IHtcbiAgICAgICAgaWYgKGluZGV4ID09PSAwKSB7XG4gICAgICAgICAgY29udGV4dC5maWxsU3R5bGUgPSAnI2VhNjk2OSdcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICBjb250ZXh0LmZpbGxTdHlsZSA9ICcjM2YzZjNmJ1xuICAgICAgICB9XG4gICAgICAgIGZpbGxGcmVlUmVjdChjb250ZXh0LCBib2R5QmxvY2sueCwgYm9keUJsb2NrLnksIGJvZHlCbG9jay53aWR0aCwgYm9keUJsb2NrLmhlaWdodClcbiAgICAgIH0pXG5cbiAgICAgIC8vIEhpdCBkZXRlY3Rpb25cbiAgICAgIC8vIENoZWNrIGlmIHNuYWtlIGhlYWQgaGl0IGl0c2VsZlxuICAgICAgLy8gQ3V0IHRoZSBib2R5IGlmIGhpdCBpdHNlbGZcbiAgICAgIGN1dFNlbGZCeUhlYWQoYm9keSwgcmVuZGVyU3RhdGUuZGlyZWN0aW9uLCByZW5kZXJTdGF0ZS53aWR0aCwgcmVuZGVyU3RhdGUuaGVpZ2h0KVxuXG4gICAgICAvLyBDaGVjayBpZiBzbmFrZSBoZWFkIGhpdCBzdGFyXG4gICAgICBsZXQgaGVhZCA9IGJvZHlbMF0sXG4gICAgICAgICAgaGVhZFggPSBoZWFkLnggJSByZW5kZXJTdGF0ZS53aWR0aCxcbiAgICAgICAgICBoZWFkWSA9IGhlYWQueSAlIHJlbmRlclN0YXRlLmhlaWdodCxcbiAgICAgICAgICBoZWFkUG9zaXRpb24gXG5cbiAgICAgIGhlYWRYID0gaGVhZFggPCAwID8gcmVuZGVyU3RhdGUud2lkdGggKyBoZWFkWCA6IGhlYWRYXG4gICAgICBoZWFkWSA9IGhlYWRZIDwgMCA/IHJlbmRlclN0YXRlLmhlaWdodCArIGhlYWRZIDogaGVhZFlcbiAgICAgIGlmIChoaXRTdGFyKHtcbiAgICAgICAgeDogaGVhZFgsXG4gICAgICAgIHk6IGhlYWRZLFxuICAgICAgICB3aWR0aDogaGVhZC53aWR0aCxcbiAgICAgICAgaGVpZ2h0OiBoZWFkLmhlaWdodFxuICAgICAgfSwgc3RhckZSUykpIHtcbiAgICAgICAgZ2FtdXguZGlzcGF0Y2gobmV4dExldmVsKGJvZHlGUlMpKVxuICAgICAgfVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIC8vIE5vdyB0aGF0IHRoZSBjdXJyZW50IGZpbmFsIHJlbmRlciBzdGF0ZSBoYXMgYXJyaXZlZFxuICAgICAgLy8gd2UgbmVlZCB0byB1cGRhdGUgdGhlIGZpbmFsIHJlbmRlciBzdGF0ZVxuICAgICAgc3dpdGNoKHJlbmRlclN0YXRlLmRpcmVjdGlvbikge1xuICAgICAgICBjYXNlIGRpcmVjdGlvbi5VUDpcbiAgICAgICAgICBnYW11eC5kaXNwYXRjaCh1cEtleURvd24oKSlcbiAgICAgICAgICBicmVha1xuXG4gICAgICAgIGNhc2UgZGlyZWN0aW9uLkRPV046XG4gICAgICAgICAgZ2FtdXguZGlzcGF0Y2goZG93bktleURvd24oKSlcbiAgICAgICAgICBicmVha1xuXG4gICAgICAgIGNhc2UgZGlyZWN0aW9uLkxFRlQ6XG4gICAgICAgICAgZ2FtdXguZGlzcGF0Y2gobGVmdEtleURvd24oKSlcbiAgICAgICAgICBicmVha1xuXG4gICAgICAgIGNhc2UgZGlyZWN0aW9uLlJJR0hUOlxuICAgICAgICAgIGdhbXV4LmRpc3BhdGNoKHJpZ2h0S2V5RG93bigpKVxuICAgICAgICAgIGJyZWFrXG4gICAgICB9XG4gICAgfVxuICB9XG4gIFxuICByZXR1cm4gcmVuZGVyU3RhdGVcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9kZW1vL3NuYWtlL3NuYWtlTGF5ZXIuanMiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzbmFrZV90aHVtYm5haWwucG5nXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9kZW1vL3NuYWtlL3NuYWtlX3RodW1ibmFpbC5wbmdcbi8vIG1vZHVsZSBpZCA9IDhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vaW5kZXguc2Nzc1wiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuLy8gUHJlcGFyZSBjc3NUcmFuc2Zvcm1hdGlvblxudmFyIHRyYW5zZm9ybTtcblxudmFyIG9wdGlvbnMgPSB7fVxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuXHQvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuXHRpZighY29udGVudC5sb2NhbHMpIHtcblx0XHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9pbmRleC5zY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL2luZGV4LnNjc3NcIik7XG5cdFx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblx0XHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0XHR9KTtcblx0fVxuXHQvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vZGVtby9zbmFrZS9pbmRleC5zY3NzXG4vLyBtb2R1bGUgaWQgPSA5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikodW5kZWZpbmVkKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcImJvZHksXFxuaHRtbCB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBvdmVyZmxvdzogaGlkZGVuOyB9XFxuXFxuI3Jvb3Qge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWRlZGVkO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyOyB9XFxuICAjcm9vdCBoMiB7XFxuICAgIG1hcmdpbjogMDsgfVxcblxcbiNyb290IGNhbnZhcyB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBsZWZ0OiA1MCU7XFxuICB0b3A6IDUwJTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpOyB9XFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlciEuL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vZGVtby9zbmFrZS9pbmRleC5zY3NzXG4vLyBtb2R1bGUgaWQgPSAxMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKlxuXHRNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuXHRBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24odXNlU291cmNlTWFwKSB7XG5cdHZhciBsaXN0ID0gW107XG5cblx0Ly8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXHRsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG5cdFx0cmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG5cdFx0XHR2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKTtcblx0XHRcdGlmKGl0ZW1bMl0pIHtcblx0XHRcdFx0cmV0dXJuIFwiQG1lZGlhIFwiICsgaXRlbVsyXSArIFwie1wiICsgY29udGVudCArIFwifVwiO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cmV0dXJuIGNvbnRlbnQ7XG5cdFx0XHR9XG5cdFx0fSkuam9pbihcIlwiKTtcblx0fTtcblxuXHQvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXHRsaXN0LmkgPSBmdW5jdGlvbihtb2R1bGVzLCBtZWRpYVF1ZXJ5KSB7XG5cdFx0aWYodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpXG5cdFx0XHRtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCBcIlwiXV07XG5cdFx0dmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGlkID0gdGhpc1tpXVswXTtcblx0XHRcdGlmKHR5cGVvZiBpZCA9PT0gXCJudW1iZXJcIilcblx0XHRcdFx0YWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuXHRcdH1cblx0XHRmb3IoaSA9IDA7IGkgPCBtb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgaXRlbSA9IG1vZHVsZXNbaV07XG5cdFx0XHQvLyBza2lwIGFscmVhZHkgaW1wb3J0ZWQgbW9kdWxlXG5cdFx0XHQvLyB0aGlzIGltcGxlbWVudGF0aW9uIGlzIG5vdCAxMDAlIHBlcmZlY3QgZm9yIHdlaXJkIG1lZGlhIHF1ZXJ5IGNvbWJpbmF0aW9uc1xuXHRcdFx0Ly8gIHdoZW4gYSBtb2R1bGUgaXMgaW1wb3J0ZWQgbXVsdGlwbGUgdGltZXMgd2l0aCBkaWZmZXJlbnQgbWVkaWEgcXVlcmllcy5cblx0XHRcdC8vICBJIGhvcGUgdGhpcyB3aWxsIG5ldmVyIG9jY3VyIChIZXkgdGhpcyB3YXkgd2UgaGF2ZSBzbWFsbGVyIGJ1bmRsZXMpXG5cdFx0XHRpZih0eXBlb2YgaXRlbVswXSAhPT0gXCJudW1iZXJcIiB8fCAhYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuXHRcdFx0XHRpZihtZWRpYVF1ZXJ5ICYmICFpdGVtWzJdKSB7XG5cdFx0XHRcdFx0aXRlbVsyXSA9IG1lZGlhUXVlcnk7XG5cdFx0XHRcdH0gZWxzZSBpZihtZWRpYVF1ZXJ5KSB7XG5cdFx0XHRcdFx0aXRlbVsyXSA9IFwiKFwiICsgaXRlbVsyXSArIFwiKSBhbmQgKFwiICsgbWVkaWFRdWVyeSArIFwiKVwiO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGxpc3QucHVzaChpdGVtKTtcblx0XHRcdH1cblx0XHR9XG5cdH07XG5cdHJldHVybiBsaXN0O1xufTtcblxuZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApIHtcblx0dmFyIGNvbnRlbnQgPSBpdGVtWzFdIHx8ICcnO1xuXHR2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cdGlmICghY3NzTWFwcGluZykge1xuXHRcdHJldHVybiBjb250ZW50O1xuXHR9XG5cblx0aWYgKHVzZVNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdHZhciBzb3VyY2VNYXBwaW5nID0gdG9Db21tZW50KGNzc01hcHBpbmcpO1xuXHRcdHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG5cdFx0XHRyZXR1cm4gJy8qIyBzb3VyY2VVUkw9JyArIGNzc01hcHBpbmcuc291cmNlUm9vdCArIHNvdXJjZSArICcgKi8nXG5cdFx0fSk7XG5cblx0XHRyZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKCdcXG4nKTtcblx0fVxuXG5cdHJldHVybiBbY29udGVudF0uam9pbignXFxuJyk7XG59XG5cbi8vIEFkYXB0ZWQgZnJvbSBjb252ZXJ0LXNvdXJjZS1tYXAgKE1JVClcbmZ1bmN0aW9uIHRvQ29tbWVudChzb3VyY2VNYXApIHtcblx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG5cdHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpO1xuXHR2YXIgZGF0YSA9ICdzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCwnICsgYmFzZTY0O1xuXG5cdHJldHVybiAnLyojICcgKyBkYXRhICsgJyAqLyc7XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1xuLy8gbW9kdWxlIGlkID0gMTFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLypcblx0TUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcblx0QXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cblxudmFyIHN0eWxlc0luRG9tID0ge307XG5cbnZhclx0bWVtb2l6ZSA9IGZ1bmN0aW9uIChmbikge1xuXHR2YXIgbWVtbztcblxuXHRyZXR1cm4gZnVuY3Rpb24gKCkge1xuXHRcdGlmICh0eXBlb2YgbWVtbyA9PT0gXCJ1bmRlZmluZWRcIikgbWVtbyA9IGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG5cdFx0cmV0dXJuIG1lbW87XG5cdH07XG59O1xuXG52YXIgaXNPbGRJRSA9IG1lbW9pemUoZnVuY3Rpb24gKCkge1xuXHQvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuXHQvLyBAc2VlIGh0dHA6Ly9icm93c2VyaGFja3MuY29tLyNoYWNrLWU3MWQ4NjkyZjY1MzM0MTczZmVlNzE1YzIyMmNiODA1XG5cdC8vIFRlc3RzIGZvciBleGlzdGVuY2Ugb2Ygc3RhbmRhcmQgZ2xvYmFscyBpcyB0byBhbGxvdyBzdHlsZS1sb2FkZXJcblx0Ly8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG5cdC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIvaXNzdWVzLzE3N1xuXHRyZXR1cm4gd2luZG93ICYmIGRvY3VtZW50ICYmIGRvY3VtZW50LmFsbCAmJiAhd2luZG93LmF0b2I7XG59KTtcblxudmFyIGdldEVsZW1lbnQgPSAoZnVuY3Rpb24gKGZuKSB7XG5cdHZhciBtZW1vID0ge307XG5cblx0cmV0dXJuIGZ1bmN0aW9uKHNlbGVjdG9yKSB7XG5cdFx0aWYgKHR5cGVvZiBtZW1vW3NlbGVjdG9yXSA9PT0gXCJ1bmRlZmluZWRcIikge1xuXHRcdFx0bWVtb1tzZWxlY3Rvcl0gPSBmbi5jYWxsKHRoaXMsIHNlbGVjdG9yKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gbWVtb1tzZWxlY3Rvcl1cblx0fTtcbn0pKGZ1bmN0aW9uICh0YXJnZXQpIHtcblx0cmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KVxufSk7XG5cbnZhciBzaW5nbGV0b24gPSBudWxsO1xudmFyXHRzaW5nbGV0b25Db3VudGVyID0gMDtcbnZhclx0c3R5bGVzSW5zZXJ0ZWRBdFRvcCA9IFtdO1xuXG52YXJcdGZpeFVybHMgPSByZXF1aXJlKFwiLi91cmxzXCIpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGxpc3QsIG9wdGlvbnMpIHtcblx0aWYgKHR5cGVvZiBERUJVRyAhPT0gXCJ1bmRlZmluZWRcIiAmJiBERUJVRykge1xuXHRcdGlmICh0eXBlb2YgZG9jdW1lbnQgIT09IFwib2JqZWN0XCIpIHRocm93IG5ldyBFcnJvcihcIlRoZSBzdHlsZS1sb2FkZXIgY2Fubm90IGJlIHVzZWQgaW4gYSBub24tYnJvd3NlciBlbnZpcm9ubWVudFwiKTtcblx0fVxuXG5cdG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuXG5cdG9wdGlvbnMuYXR0cnMgPSB0eXBlb2Ygb3B0aW9ucy5hdHRycyA9PT0gXCJvYmplY3RcIiA/IG9wdGlvbnMuYXR0cnMgOiB7fTtcblxuXHQvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cblx0Ly8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxuXHRpZiAoIW9wdGlvbnMuc2luZ2xldG9uKSBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcblxuXHQvLyBCeSBkZWZhdWx0LCBhZGQgPHN0eWxlPiB0YWdzIHRvIHRoZSA8aGVhZD4gZWxlbWVudFxuXHRpZiAoIW9wdGlvbnMuaW5zZXJ0SW50bykgb3B0aW9ucy5pbnNlcnRJbnRvID0gXCJoZWFkXCI7XG5cblx0Ly8gQnkgZGVmYXVsdCwgYWRkIDxzdHlsZT4gdGFncyB0byB0aGUgYm90dG9tIG9mIHRoZSB0YXJnZXRcblx0aWYgKCFvcHRpb25zLmluc2VydEF0KSBvcHRpb25zLmluc2VydEF0ID0gXCJib3R0b21cIjtcblxuXHR2YXIgc3R5bGVzID0gbGlzdFRvU3R5bGVzKGxpc3QsIG9wdGlvbnMpO1xuXG5cdGFkZFN0eWxlc1RvRG9tKHN0eWxlcywgb3B0aW9ucyk7XG5cblx0cmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZSAobmV3TGlzdCkge1xuXHRcdHZhciBtYXlSZW1vdmUgPSBbXTtcblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgaXRlbSA9IHN0eWxlc1tpXTtcblx0XHRcdHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdO1xuXG5cdFx0XHRkb21TdHlsZS5yZWZzLS07XG5cdFx0XHRtYXlSZW1vdmUucHVzaChkb21TdHlsZSk7XG5cdFx0fVxuXG5cdFx0aWYobmV3TGlzdCkge1xuXHRcdFx0dmFyIG5ld1N0eWxlcyA9IGxpc3RUb1N0eWxlcyhuZXdMaXN0LCBvcHRpb25zKTtcblx0XHRcdGFkZFN0eWxlc1RvRG9tKG5ld1N0eWxlcywgb3B0aW9ucyk7XG5cdFx0fVxuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBtYXlSZW1vdmUubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBkb21TdHlsZSA9IG1heVJlbW92ZVtpXTtcblxuXHRcdFx0aWYoZG9tU3R5bGUucmVmcyA9PT0gMCkge1xuXHRcdFx0XHRmb3IgKHZhciBqID0gMDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKSBkb21TdHlsZS5wYXJ0c1tqXSgpO1xuXG5cdFx0XHRcdGRlbGV0ZSBzdHlsZXNJbkRvbVtkb21TdHlsZS5pZF07XG5cdFx0XHR9XG5cdFx0fVxuXHR9O1xufTtcblxuZnVuY3Rpb24gYWRkU3R5bGVzVG9Eb20gKHN0eWxlcywgb3B0aW9ucykge1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBpdGVtID0gc3R5bGVzW2ldO1xuXHRcdHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdO1xuXG5cdFx0aWYoZG9tU3R5bGUpIHtcblx0XHRcdGRvbVN0eWxlLnJlZnMrKztcblxuXHRcdFx0Zm9yKHZhciBqID0gMDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdGRvbVN0eWxlLnBhcnRzW2pdKGl0ZW0ucGFydHNbal0pO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3IoOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRkb21TdHlsZS5wYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0sIG9wdGlvbnMpKTtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0dmFyIHBhcnRzID0gW107XG5cblx0XHRcdGZvcih2YXIgaiA9IDA7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdHBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSwgb3B0aW9ucykpO1xuXHRcdFx0fVxuXG5cdFx0XHRzdHlsZXNJbkRvbVtpdGVtLmlkXSA9IHtpZDogaXRlbS5pZCwgcmVmczogMSwgcGFydHM6IHBhcnRzfTtcblx0XHR9XG5cdH1cbn1cblxuZnVuY3Rpb24gbGlzdFRvU3R5bGVzIChsaXN0LCBvcHRpb25zKSB7XG5cdHZhciBzdHlsZXMgPSBbXTtcblx0dmFyIG5ld1N0eWxlcyA9IHt9O1xuXG5cdGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBpdGVtID0gbGlzdFtpXTtcblx0XHR2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcblx0XHR2YXIgY3NzID0gaXRlbVsxXTtcblx0XHR2YXIgbWVkaWEgPSBpdGVtWzJdO1xuXHRcdHZhciBzb3VyY2VNYXAgPSBpdGVtWzNdO1xuXHRcdHZhciBwYXJ0ID0ge2NzczogY3NzLCBtZWRpYTogbWVkaWEsIHNvdXJjZU1hcDogc291cmNlTWFwfTtcblxuXHRcdGlmKCFuZXdTdHlsZXNbaWRdKSBzdHlsZXMucHVzaChuZXdTdHlsZXNbaWRdID0ge2lkOiBpZCwgcGFydHM6IFtwYXJ0XX0pO1xuXHRcdGVsc2UgbmV3U3R5bGVzW2lkXS5wYXJ0cy5wdXNoKHBhcnQpO1xuXHR9XG5cblx0cmV0dXJuIHN0eWxlcztcbn1cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50IChvcHRpb25zLCBzdHlsZSkge1xuXHR2YXIgdGFyZ2V0ID0gZ2V0RWxlbWVudChvcHRpb25zLmluc2VydEludG8pXG5cblx0aWYgKCF0YXJnZXQpIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydEludG8nIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcblx0fVxuXG5cdHZhciBsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcCA9IHN0eWxlc0luc2VydGVkQXRUb3Bbc3R5bGVzSW5zZXJ0ZWRBdFRvcC5sZW5ndGggLSAxXTtcblxuXHRpZiAob3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJ0b3BcIikge1xuXHRcdGlmICghbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3ApIHtcblx0XHRcdHRhcmdldC5pbnNlcnRCZWZvcmUoc3R5bGUsIHRhcmdldC5maXJzdENoaWxkKTtcblx0XHR9IGVsc2UgaWYgKGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wLm5leHRTaWJsaW5nKSB7XG5cdFx0XHR0YXJnZXQuaW5zZXJ0QmVmb3JlKHN0eWxlLCBsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcC5uZXh0U2libGluZyk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG5cdFx0fVxuXHRcdHN0eWxlc0luc2VydGVkQXRUb3AucHVzaChzdHlsZSk7XG5cdH0gZWxzZSBpZiAob3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJib3R0b21cIikge1xuXHRcdHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG5cdH0gZWxzZSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCB2YWx1ZSBmb3IgcGFyYW1ldGVyICdpbnNlcnRBdCcuIE11c3QgYmUgJ3RvcCcgb3IgJ2JvdHRvbScuXCIpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudCAoc3R5bGUpIHtcblx0aWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHJldHVybiBmYWxzZTtcblx0c3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG5cblx0dmFyIGlkeCA9IHN0eWxlc0luc2VydGVkQXRUb3AuaW5kZXhPZihzdHlsZSk7XG5cdGlmKGlkeCA+PSAwKSB7XG5cdFx0c3R5bGVzSW5zZXJ0ZWRBdFRvcC5zcGxpY2UoaWR4LCAxKTtcblx0fVxufVxuXG5mdW5jdGlvbiBjcmVhdGVTdHlsZUVsZW1lbnQgKG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuXG5cdG9wdGlvbnMuYXR0cnMudHlwZSA9IFwidGV4dC9jc3NcIjtcblxuXHRhZGRBdHRycyhzdHlsZSwgb3B0aW9ucy5hdHRycyk7XG5cdGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zLCBzdHlsZSk7XG5cblx0cmV0dXJuIHN0eWxlO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVMaW5rRWxlbWVudCAob3B0aW9ucykge1xuXHR2YXIgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaW5rXCIpO1xuXG5cdG9wdGlvbnMuYXR0cnMudHlwZSA9IFwidGV4dC9jc3NcIjtcblx0b3B0aW9ucy5hdHRycy5yZWwgPSBcInN0eWxlc2hlZXRcIjtcblxuXHRhZGRBdHRycyhsaW5rLCBvcHRpb25zLmF0dHJzKTtcblx0aW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMsIGxpbmspO1xuXG5cdHJldHVybiBsaW5rO1xufVxuXG5mdW5jdGlvbiBhZGRBdHRycyAoZWwsIGF0dHJzKSB7XG5cdE9iamVjdC5rZXlzKGF0dHJzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcblx0XHRlbC5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyc1trZXldKTtcblx0fSk7XG59XG5cbmZ1bmN0aW9uIGFkZFN0eWxlIChvYmosIG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlLCB1cGRhdGUsIHJlbW92ZSwgcmVzdWx0O1xuXG5cdC8vIElmIGEgdHJhbnNmb3JtIGZ1bmN0aW9uIHdhcyBkZWZpbmVkLCBydW4gaXQgb24gdGhlIGNzc1xuXHRpZiAob3B0aW9ucy50cmFuc2Zvcm0gJiYgb2JqLmNzcykge1xuXHQgICAgcmVzdWx0ID0gb3B0aW9ucy50cmFuc2Zvcm0ob2JqLmNzcyk7XG5cblx0ICAgIGlmIChyZXN1bHQpIHtcblx0ICAgIFx0Ly8gSWYgdHJhbnNmb3JtIHJldHVybnMgYSB2YWx1ZSwgdXNlIHRoYXQgaW5zdGVhZCBvZiB0aGUgb3JpZ2luYWwgY3NzLlxuXHQgICAgXHQvLyBUaGlzIGFsbG93cyBydW5uaW5nIHJ1bnRpbWUgdHJhbnNmb3JtYXRpb25zIG9uIHRoZSBjc3MuXG5cdCAgICBcdG9iai5jc3MgPSByZXN1bHQ7XG5cdCAgICB9IGVsc2Uge1xuXHQgICAgXHQvLyBJZiB0aGUgdHJhbnNmb3JtIGZ1bmN0aW9uIHJldHVybnMgYSBmYWxzeSB2YWx1ZSwgZG9uJ3QgYWRkIHRoaXMgY3NzLlxuXHQgICAgXHQvLyBUaGlzIGFsbG93cyBjb25kaXRpb25hbCBsb2FkaW5nIG9mIGNzc1xuXHQgICAgXHRyZXR1cm4gZnVuY3Rpb24oKSB7XG5cdCAgICBcdFx0Ly8gbm9vcFxuXHQgICAgXHR9O1xuXHQgICAgfVxuXHR9XG5cblx0aWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG5cdFx0dmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG5cblx0XHRzdHlsZSA9IHNpbmdsZXRvbiB8fCAoc2luZ2xldG9uID0gY3JlYXRlU3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcblxuXHRcdHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgZmFsc2UpO1xuXHRcdHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgdHJ1ZSk7XG5cblx0fSBlbHNlIGlmIChcblx0XHRvYmouc291cmNlTWFwICYmXG5cdFx0dHlwZW9mIFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIFVSTC5jcmVhdGVPYmplY3RVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBVUkwucmV2b2tlT2JqZWN0VVJMID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgQmxvYiA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIlxuXHQpIHtcblx0XHRzdHlsZSA9IGNyZWF0ZUxpbmtFbGVtZW50KG9wdGlvbnMpO1xuXHRcdHVwZGF0ZSA9IHVwZGF0ZUxpbmsuYmluZChudWxsLCBzdHlsZSwgb3B0aW9ucyk7XG5cdFx0cmVtb3ZlID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0cmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcblxuXHRcdFx0aWYoc3R5bGUuaHJlZikgVVJMLnJldm9rZU9iamVjdFVSTChzdHlsZS5ocmVmKTtcblx0XHR9O1xuXHR9IGVsc2Uge1xuXHRcdHN0eWxlID0gY3JlYXRlU3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuXHRcdHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZSk7XG5cdFx0cmVtb3ZlID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0cmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcblx0XHR9O1xuXHR9XG5cblx0dXBkYXRlKG9iaik7XG5cblx0cmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlIChuZXdPYmopIHtcblx0XHRpZiAobmV3T2JqKSB7XG5cdFx0XHRpZiAoXG5cdFx0XHRcdG5ld09iai5jc3MgPT09IG9iai5jc3MgJiZcblx0XHRcdFx0bmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiZcblx0XHRcdFx0bmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcFxuXHRcdFx0KSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0dXBkYXRlKG9iaiA9IG5ld09iaik7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJlbW92ZSgpO1xuXHRcdH1cblx0fTtcbn1cblxudmFyIHJlcGxhY2VUZXh0ID0gKGZ1bmN0aW9uICgpIHtcblx0dmFyIHRleHRTdG9yZSA9IFtdO1xuXG5cdHJldHVybiBmdW5jdGlvbiAoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG5cdFx0dGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuXG5cdFx0cmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XG5cdH07XG59KSgpO1xuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnIChzdHlsZSwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG5cdHZhciBjc3MgPSByZW1vdmUgPyBcIlwiIDogb2JqLmNzcztcblxuXHRpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuXHRcdHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuXHR9IGVsc2Uge1xuXHRcdHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcblx0XHR2YXIgY2hpbGROb2RlcyA9IHN0eWxlLmNoaWxkTm9kZXM7XG5cblx0XHRpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHN0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcblxuXHRcdGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuXHRcdFx0c3R5bGUuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0c3R5bGUuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XG5cdFx0fVxuXHR9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcgKHN0eWxlLCBvYmopIHtcblx0dmFyIGNzcyA9IG9iai5jc3M7XG5cdHZhciBtZWRpYSA9IG9iai5tZWRpYTtcblxuXHRpZihtZWRpYSkge1xuXHRcdHN0eWxlLnNldEF0dHJpYnV0ZShcIm1lZGlhXCIsIG1lZGlhKVxuXHR9XG5cblx0aWYoc3R5bGUuc3R5bGVTaGVldCkge1xuXHRcdHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcblx0fSBlbHNlIHtcblx0XHR3aGlsZShzdHlsZS5maXJzdENoaWxkKSB7XG5cdFx0XHRzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcblx0XHR9XG5cblx0XHRzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcblx0fVxufVxuXG5mdW5jdGlvbiB1cGRhdGVMaW5rIChsaW5rLCBvcHRpb25zLCBvYmopIHtcblx0dmFyIGNzcyA9IG9iai5jc3M7XG5cdHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG5cdC8qXG5cdFx0SWYgY29udmVydFRvQWJzb2x1dGVVcmxzIGlzbid0IGRlZmluZWQsIGJ1dCBzb3VyY2VtYXBzIGFyZSBlbmFibGVkXG5cdFx0YW5kIHRoZXJlIGlzIG5vIHB1YmxpY1BhdGggZGVmaW5lZCB0aGVuIGxldHMgdHVybiBjb252ZXJ0VG9BYnNvbHV0ZVVybHNcblx0XHRvbiBieSBkZWZhdWx0LiAgT3RoZXJ3aXNlIGRlZmF1bHQgdG8gdGhlIGNvbnZlcnRUb0Fic29sdXRlVXJscyBvcHRpb25cblx0XHRkaXJlY3RseVxuXHQqL1xuXHR2YXIgYXV0b0ZpeFVybHMgPSBvcHRpb25zLmNvbnZlcnRUb0Fic29sdXRlVXJscyA9PT0gdW5kZWZpbmVkICYmIHNvdXJjZU1hcDtcblxuXHRpZiAob3B0aW9ucy5jb252ZXJ0VG9BYnNvbHV0ZVVybHMgfHwgYXV0b0ZpeFVybHMpIHtcblx0XHRjc3MgPSBmaXhVcmxzKGNzcyk7XG5cdH1cblxuXHRpZiAoc291cmNlTWFwKSB7XG5cdFx0Ly8gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMjY2MDM4NzVcblx0XHRjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiICsgYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSArIFwiICovXCI7XG5cdH1cblxuXHR2YXIgYmxvYiA9IG5ldyBCbG9iKFtjc3NdLCB7IHR5cGU6IFwidGV4dC9jc3NcIiB9KTtcblxuXHR2YXIgb2xkU3JjID0gbGluay5ocmVmO1xuXG5cdGxpbmsuaHJlZiA9IFVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYik7XG5cblx0aWYob2xkU3JjKSBVUkwucmV2b2tlT2JqZWN0VVJMKG9sZFNyYyk7XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1xuLy8gbW9kdWxlIGlkID0gMTJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXG4vKipcbiAqIFdoZW4gc291cmNlIG1hcHMgYXJlIGVuYWJsZWQsIGBzdHlsZS1sb2FkZXJgIHVzZXMgYSBsaW5rIGVsZW1lbnQgd2l0aCBhIGRhdGEtdXJpIHRvXG4gKiBlbWJlZCB0aGUgY3NzIG9uIHRoZSBwYWdlLiBUaGlzIGJyZWFrcyBhbGwgcmVsYXRpdmUgdXJscyBiZWNhdXNlIG5vdyB0aGV5IGFyZSByZWxhdGl2ZSB0byBhXG4gKiBidW5kbGUgaW5zdGVhZCBvZiB0aGUgY3VycmVudCBwYWdlLlxuICpcbiAqIE9uZSBzb2x1dGlvbiBpcyB0byBvbmx5IHVzZSBmdWxsIHVybHMsIGJ1dCB0aGF0IG1heSBiZSBpbXBvc3NpYmxlLlxuICpcbiAqIEluc3RlYWQsIHRoaXMgZnVuY3Rpb24gXCJmaXhlc1wiIHRoZSByZWxhdGl2ZSB1cmxzIHRvIGJlIGFic29sdXRlIGFjY29yZGluZyB0byB0aGUgY3VycmVudCBwYWdlIGxvY2F0aW9uLlxuICpcbiAqIEEgcnVkaW1lbnRhcnkgdGVzdCBzdWl0ZSBpcyBsb2NhdGVkIGF0IGB0ZXN0L2ZpeFVybHMuanNgIGFuZCBjYW4gYmUgcnVuIHZpYSB0aGUgYG5wbSB0ZXN0YCBjb21tYW5kLlxuICpcbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3MpIHtcbiAgLy8gZ2V0IGN1cnJlbnQgbG9jYXRpb25cbiAgdmFyIGxvY2F0aW9uID0gdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiAmJiB3aW5kb3cubG9jYXRpb247XG5cbiAgaWYgKCFsb2NhdGlvbikge1xuICAgIHRocm93IG5ldyBFcnJvcihcImZpeFVybHMgcmVxdWlyZXMgd2luZG93LmxvY2F0aW9uXCIpO1xuICB9XG5cblx0Ly8gYmxhbmsgb3IgbnVsbD9cblx0aWYgKCFjc3MgfHwgdHlwZW9mIGNzcyAhPT0gXCJzdHJpbmdcIikge1xuXHQgIHJldHVybiBjc3M7XG4gIH1cblxuICB2YXIgYmFzZVVybCA9IGxvY2F0aW9uLnByb3RvY29sICsgXCIvL1wiICsgbG9jYXRpb24uaG9zdDtcbiAgdmFyIGN1cnJlbnREaXIgPSBiYXNlVXJsICsgbG9jYXRpb24ucGF0aG5hbWUucmVwbGFjZSgvXFwvW15cXC9dKiQvLCBcIi9cIik7XG5cblx0Ly8gY29udmVydCBlYWNoIHVybCguLi4pXG5cdC8qXG5cdFRoaXMgcmVndWxhciBleHByZXNzaW9uIGlzIGp1c3QgYSB3YXkgdG8gcmVjdXJzaXZlbHkgbWF0Y2ggYnJhY2tldHMgd2l0aGluXG5cdGEgc3RyaW5nLlxuXG5cdCAvdXJsXFxzKlxcKCAgPSBNYXRjaCBvbiB0aGUgd29yZCBcInVybFwiIHdpdGggYW55IHdoaXRlc3BhY2UgYWZ0ZXIgaXQgYW5kIHRoZW4gYSBwYXJlbnNcblx0ICAgKCAgPSBTdGFydCBhIGNhcHR1cmluZyBncm91cFxuXHQgICAgICg/OiAgPSBTdGFydCBhIG5vbi1jYXB0dXJpbmcgZ3JvdXBcblx0ICAgICAgICAgW14pKF0gID0gTWF0Y2ggYW55dGhpbmcgdGhhdCBpc24ndCBhIHBhcmVudGhlc2VzXG5cdCAgICAgICAgIHwgID0gT1Jcblx0ICAgICAgICAgXFwoICA9IE1hdGNoIGEgc3RhcnQgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICg/OiAgPSBTdGFydCBhbm90aGVyIG5vbi1jYXB0dXJpbmcgZ3JvdXBzXG5cdCAgICAgICAgICAgICAgICAgW14pKF0rICA9IE1hdGNoIGFueXRoaW5nIHRoYXQgaXNuJ3QgYSBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgICAgIHwgID0gT1Jcblx0ICAgICAgICAgICAgICAgICBcXCggID0gTWF0Y2ggYSBzdGFydCBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgICAgICAgICBbXikoXSogID0gTWF0Y2ggYW55dGhpbmcgdGhhdCBpc24ndCBhIHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAgICAgXFwpICA9IE1hdGNoIGEgZW5kIHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICApICA9IEVuZCBHcm91cFxuICAgICAgICAgICAgICAqXFwpID0gTWF0Y2ggYW55dGhpbmcgYW5kIHRoZW4gYSBjbG9zZSBwYXJlbnNcbiAgICAgICAgICApICA9IENsb3NlIG5vbi1jYXB0dXJpbmcgZ3JvdXBcbiAgICAgICAgICAqICA9IE1hdGNoIGFueXRoaW5nXG4gICAgICAgKSAgPSBDbG9zZSBjYXB0dXJpbmcgZ3JvdXBcblx0IFxcKSAgPSBNYXRjaCBhIGNsb3NlIHBhcmVuc1xuXG5cdCAvZ2kgID0gR2V0IGFsbCBtYXRjaGVzLCBub3QgdGhlIGZpcnN0LiAgQmUgY2FzZSBpbnNlbnNpdGl2ZS5cblx0ICovXG5cdHZhciBmaXhlZENzcyA9IGNzcy5yZXBsYWNlKC91cmxcXHMqXFwoKCg/OlteKShdfFxcKCg/OlteKShdK3xcXChbXikoXSpcXCkpKlxcKSkqKVxcKS9naSwgZnVuY3Rpb24oZnVsbE1hdGNoLCBvcmlnVXJsKSB7XG5cdFx0Ly8gc3RyaXAgcXVvdGVzIChpZiB0aGV5IGV4aXN0KVxuXHRcdHZhciB1bnF1b3RlZE9yaWdVcmwgPSBvcmlnVXJsXG5cdFx0XHQudHJpbSgpXG5cdFx0XHQucmVwbGFjZSgvXlwiKC4qKVwiJC8sIGZ1bmN0aW9uKG8sICQxKXsgcmV0dXJuICQxOyB9KVxuXHRcdFx0LnJlcGxhY2UoL14nKC4qKSckLywgZnVuY3Rpb24obywgJDEpeyByZXR1cm4gJDE7IH0pO1xuXG5cdFx0Ly8gYWxyZWFkeSBhIGZ1bGwgdXJsPyBubyBjaGFuZ2Vcblx0XHRpZiAoL14oI3xkYXRhOnxodHRwOlxcL1xcL3xodHRwczpcXC9cXC98ZmlsZTpcXC9cXC9cXC8pL2kudGVzdCh1bnF1b3RlZE9yaWdVcmwpKSB7XG5cdFx0ICByZXR1cm4gZnVsbE1hdGNoO1xuXHRcdH1cblxuXHRcdC8vIGNvbnZlcnQgdGhlIHVybCB0byBhIGZ1bGwgdXJsXG5cdFx0dmFyIG5ld1VybDtcblxuXHRcdGlmICh1bnF1b3RlZE9yaWdVcmwuaW5kZXhPZihcIi8vXCIpID09PSAwKSB7XG5cdFx0ICBcdC8vVE9ETzogc2hvdWxkIHdlIGFkZCBwcm90b2NvbD9cblx0XHRcdG5ld1VybCA9IHVucXVvdGVkT3JpZ1VybDtcblx0XHR9IGVsc2UgaWYgKHVucXVvdGVkT3JpZ1VybC5pbmRleE9mKFwiL1wiKSA9PT0gMCkge1xuXHRcdFx0Ly8gcGF0aCBzaG91bGQgYmUgcmVsYXRpdmUgdG8gdGhlIGJhc2UgdXJsXG5cdFx0XHRuZXdVcmwgPSBiYXNlVXJsICsgdW5xdW90ZWRPcmlnVXJsOyAvLyBhbHJlYWR5IHN0YXJ0cyB3aXRoICcvJ1xuXHRcdH0gZWxzZSB7XG5cdFx0XHQvLyBwYXRoIHNob3VsZCBiZSByZWxhdGl2ZSB0byBjdXJyZW50IGRpcmVjdG9yeVxuXHRcdFx0bmV3VXJsID0gY3VycmVudERpciArIHVucXVvdGVkT3JpZ1VybC5yZXBsYWNlKC9eXFwuXFwvLywgXCJcIik7IC8vIFN0cmlwIGxlYWRpbmcgJy4vJ1xuXHRcdH1cblxuXHRcdC8vIHNlbmQgYmFjayB0aGUgZml4ZWQgdXJsKC4uLilcblx0XHRyZXR1cm4gXCJ1cmwoXCIgKyBKU09OLnN0cmluZ2lmeShuZXdVcmwpICsgXCIpXCI7XG5cdH0pO1xuXG5cdC8vIHNlbmQgYmFjayB0aGUgZml4ZWQgY3NzXG5cdHJldHVybiBmaXhlZENzcztcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL3VybHMuanNcbi8vIG1vZHVsZSBpZCA9IDEzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=