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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCAxMzBjNzIyMjJkMWMyOGIyNzEzYSIsIndlYnBhY2s6Ly8vLi9zcmMvZ2FtdXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRlTWFuYWdlci5qcyJdLCJuYW1lcyI6WyJfYW5pbWF0aW9uTG9vcEtleSIsIl9hY2N1bXVsYXRvciIsIl9mcHMiLCJfc3RvcmUiLCJfdXBkYXRlck1hcCIsIl9yZW5kZXJlck1hcCIsIl9sb29wIiwibGFzdFRpbWVzdGFtcCIsIndpbmRvdyIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsIm5vdyIsIkRhdGUiLCJkdCIsImtleSIsInJlbmRlcmVyIiwicmVuZGVyU3RhdGUiLCJmaW5hbFJlbmRlclN0YXRlIiwiZ2FtdXgiLCJjb25maWciLCJmcHMiLCJjb250YWluZXIiLCJsYXllcnMiLCJmb3JFYWNoIiwibGF5ZXIiLCJjYW52YXMiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJhcHBlbmRDaGlsZCIsIm5hbWUiLCJ1cGRhdGVyIiwicmVuZGVyIiwiYmluZCIsInJlZHVjZXJNYXAiLCJpbml0IiwiZ2V0U3RhdGUiLCJzdGFydCIsImRpc3BhdGNoIiwiYWN0aW9uIiwiY3JlYXRlU3RvcmUiLCJjb21iaW5lUmVkdWNlciIsImNvbWJpbmVVcGRhdGVyIiwicmVkdWNlciIsInN0YXRlIiwiY29uc29sZSIsImdyb3VwIiwidHlwZSIsImluZm8iLCJncm91cEVuZCIsInN0YXRlS2V5IiwibmV3U3RhdGUiLCJkaXJ0eUtleXMiLCJyZWR1Y2VkU3RhdGUiLCJwdXNoIiwidXBkYXRlck1hcCIsInJlbmRlcmVyTWFwIiwibmV3RmluYWxSZW5kZXJTdGF0ZSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNWQTtB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O0FBQ0E7QUFDQSxVQUFJbUIsZUFBZW5CLFdBQVduQixHQUFYLEVBQWdCNkIsTUFBTTdCLEdBQU4sQ0FBaEIsRUFBNEJ3QixNQUE1QixFQUFvQ0ssS0FBcEMsQ0FBbkI7O0FBRUEsVUFBSVMsaUJBQWlCVCxNQUFNN0IsR0FBTixDQUFyQixFQUFpQztBQUMvQnFDLGtCQUFVRSxJQUFWLENBQWV2QyxHQUFmO0FBQ0Q7O0FBRURvQyxlQUFTcEMsR0FBVCxJQUFnQnNDLFlBQWhCO0FBQ0Q7O0FBRUQ7QUFDQXRCLFlBQVFvQixRQUFSLEVBQWtCQyxTQUFsQjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsV0FBT0QsUUFBUDtBQUNELEdBekJEO0FBMEJEOztBQUVNLFNBQVNULGNBQVQsR0FBNEQ7QUFBQSxNQUFuQ2EsVUFBbUMsdUVBQXRCLEVBQXNCO0FBQUEsTUFBbEJDLFdBQWtCLHVFQUFKLEVBQUk7O0FBQ2pFO0FBQ0EsU0FBTyxZQUFnQztBQUFBLFFBQS9CWixLQUErQix1RUFBdkIsRUFBdUI7QUFBQSxRQUFuQlEsU0FBbUIsdUVBQVAsRUFBTzs7QUFDckMsUUFBSUssc0JBQXNCLEVBQTFCO0FBQ0EsU0FBSyxJQUFJMUMsR0FBVCxJQUFnQndDLFVBQWhCLEVBQTRCO0FBQzFCO0FBQ0FDLGtCQUFZekMsR0FBWixFQUFpQkcsZ0JBQWpCLEdBQW9DcUMsV0FBV3hDLEdBQVgsRUFBZ0J5QyxZQUFZekMsR0FBWixFQUFpQkcsZ0JBQWpDLEVBQW1EMEIsS0FBbkQsRUFBMERRLFNBQTFELENBQXBDO0FBQ0Q7QUFDRixHQU5EO0FBT0QsQyIsImZpbGUiOiJnYW11eC5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcImdhbXV4XCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcImdhbXV4XCJdID0gZmFjdG9yeSgpO1xufSkodGhpcywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9cIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCAxMzBjNzIyMjJkMWMyOGIyNzEzYSIsImltcG9ydCB7Y29tYmluZVJlZHVjZXIsIGNyZWF0ZVN0b3JlLCBjb21iaW5lVXBkYXRlcn0gZnJvbSAnLi9zdGF0ZU1hbmFnZXInXG5cbi8qKlxuICogVGhlIGFuaW1hdGlvbiBsb29wIGtleSBmb3IgY2FuY2VsIGFuaW1hdGlvblxuICovXG5sZXQgX2FuaW1hdGlvbkxvb3BLZXkgPSBudWxsXG4vKipcbiAqIEFjY3VtdWxhdG9yIGZvciB0aW1lLWJhc2VkIGFuaW1hdGlvblxuICovXG5sZXQgX2FjY3VtdWxhdG9yID0gMFxuLyoqXG4gKiBUaGUgZGVmYXVsdCBmcHNcbiAqL1xubGV0IF9mcHMgPSA2MFxuLyoqXG4gKiBUaGUgc3RvcmUgZm9yIGdhbWVcbiAqL1xubGV0IF9zdG9yZSA9IHt9XG5cbmxldCBfdXBkYXRlck1hcCA9IHt9XG5cbmxldCBfcmVuZGVyZXJNYXAgPSB7fVxuXG4vKipcbiAqIFRyaWdnZXIgZ2FtZSBsb29wXG4gKi9cbmZ1bmN0aW9uIF9sb29wIChsYXN0VGltZXN0YW1wKSB7XG4gIF9hbmltYXRpb25Mb29wS2V5ID0gd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgY29uc3Qgbm93ID0gRGF0ZS5ub3coKVxuICAgIGNvbnN0IGR0ID0gMTAwMCAvIF9mcHNcbiAgICBfYWNjdW11bGF0b3IgKz0gbm93IC0gbGFzdFRpbWVzdGFtcFxuXG4gICAgaWYgKF9hY2N1bXVsYXRvciA+PSBkdCkge1xuICAgICAgd2hpbGUgKF9hY2N1bXVsYXRvciA+PSBkdCkge1xuICAgICAgICBfYWNjdW11bGF0b3IgLT0gZHRcbiAgICAgIH1cbiAgICAgIGZvciAobGV0IGtleSBpbiBfcmVuZGVyZXJNYXApIHtcbiAgICAgICAgbGV0IHJlbmRlcmVyID0gX3JlbmRlcmVyTWFwW2tleV1cbiAgICAgICAgcmVuZGVyZXIucmVuZGVyU3RhdGUgPSByZW5kZXJlcihyZW5kZXJlci5yZW5kZXJTdGF0ZSwgcmVuZGVyZXIuZmluYWxSZW5kZXJTdGF0ZSwgZHQpXG4gICAgICB9XG4gICAgfVxuICAgIF9sb29wKG5vdylcbiAgfSlcbn1cblxuY29uc3QgZ2FtdXggPSB7XG4gIGNvbmZpZzogKGNvbmZpZyA9IHt9KSA9PiB7XG4gICAgLy8gQ29uZmlnIHRoZSBwcml2YXRlIGdsb2JhbHNcbiAgICBfZnBzID0gY29uZmlnLmZwcyB8fCBfZnBzXG5cbiAgICBsZXQgY29udGFpbmVyID0gY29uZmlnLmNvbnRhaW5lclxuXG4gICAgLy8gQ3JlYXRlIGdhbWUgbGF5ZXJzXG4gICAgY29uZmlnLmxheWVycy5mb3JFYWNoKChsYXllcikgPT4ge1xuICAgICAgbGV0IGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpXG4gICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoY2FudmFzKVxuXG4gICAgICBfdXBkYXRlck1hcFtsYXllci5uYW1lXSA9IGxheWVyLnVwZGF0ZXJcbiAgICAgIF9yZW5kZXJlck1hcFtsYXllci5uYW1lXSA9IGxheWVyLnJlbmRlci5iaW5kKG51bGwsIGNhbnZhcylcbiAgICB9KVxuXG4gICAgLy8gQ3JlYXRlIGdhbWUgc3RvcmVcbiAgICBfc3RvcmUgPSBjcmVhdGVTdG9yZShjb21iaW5lUmVkdWNlcihjb25maWcucmVkdWNlck1hcCwgY29tYmluZVVwZGF0ZXIoX3VwZGF0ZXJNYXAsIF9yZW5kZXJlck1hcCkpKVxuICAgIGlmIChjb25maWcuaW5pdCkge1xuICAgICAgY29uZmlnLmluaXQoX3N0b3JlLmdldFN0YXRlKCkpXG4gICAgfVxuICB9LFxuXG4gIGxheWVyczoge30sXG5cbiAgc3RhcnQ6ICgpID0+IHtcbiAgICBfbG9vcChEYXRlLm5vdygpKVxuICB9LFxuXG4gIGRpc3BhdGNoOiAoYWN0aW9uKSA9PiB7XG4gICAgX3N0b3JlLmRpc3BhdGNoKGFjdGlvbilcbiAgfVxuXG4gIC8vICpcbiAgLy8gICogR2FtZSB3aWxsIGJlIGF2YWlsYWJsZSBvbmNlIGNvbmZpZ3VyZWRcbn1cblxuZXhwb3J0IGRlZmF1bHQgZ2FtdXhcblxuXG4vLyBUT0RPXG4vLyAxLiBCdWlsZCBmaWxlIGZvciBFUzYgbW9kdWxlc1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9nYW11eC5qcyIsImV4cG9ydCBmdW5jdGlvbiBjcmVhdGVTdG9yZSAocmVkdWNlcikge1xuICAvLyBJbml0IHN0YXRlXG4gIGxldCBzdGF0ZSA9IHJlZHVjZXIoKVxuXG4gIHJldHVybiB7XG4gICAgLyoqXG4gICAgICogRGlzcGF0Y2ggYWN0aW9uIHRvIHRyaWdnZXIgc3RhdGUgY2hhbmdlc1xuICAgICAqL1xuICAgIGRpc3BhdGNoOiAoYWN0aW9uID0ge30pID0+IHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5jb2RlID09PSAnREVWJykge1xuICAgICAgICAvLyBsb2cgYWN0aW9ucyBpbiBjb25zb2xlXG4gICAgICAgIGNvbnNvbGUuZ3JvdXAoYWN0aW9uLnR5cGUpXG4gICAgICAgIGNvbnNvbGUuaW5mbygnJWNiZWZvcmU6JywgJ2NvbG9yOiBncmVlbicsIHN0YXRlKVxuICAgICAgICBjb25zb2xlLmluZm8oJyVjYWN0aW9uOicsICdjb2xvcjogcmVkJywgYWN0aW9uKVxuICAgICAgfVxuICAgICAgXG4gICAgICAvLyBVcGRhdGUgc3RhdGVcbiAgICAgIHN0YXRlID0gcmVkdWNlcihzdGF0ZSwgYWN0aW9uKVxuICAgICAgLy8gU3RhdGUgbWFuYWdlciBkb2Vzbid0IGNhcmUgYWJvdXQgbm90aWNpbmdcbiAgICAgIC8vIGdhbWUgdG8gdXBkYXRlIHN0YXRlLiBJbnN0ZWFkIHJlZHVjZXJzXG4gICAgICAvLyBzaG91bGQgc2V0IGRpcnR5IHN0YXRlIGZvciBnYW1lIGxvb3AgdG9cbiAgICAgIC8vIHRyaWdnZXIgdXBkYXRlXG5cbiAgICAgIGlmIChwcm9jZXNzLmVudi5jb2RlID09PSAnREVWJykge1xuICAgICAgICAvLyBsb2cgYWN0aW9ucyBpbiBjb25zb2xlXG4gICAgICAgIGNvbnNvbGUuaW5mbygnJWNhZnRlcjonLCAnY29sb3I6IGdyZWVuJywgc3RhdGUpXG4gICAgICAgIGNvbnNvbGUuZ3JvdXBFbmQoKVxuICAgICAgfVxuICAgIH0sXG4gICAgLyoqXG4gICAgICogUmV0dXJuIHRoZSBjdXJyZW50IHN0YXRlIGZvciBnaXZlbiBrZXlcbiAgICAgKiBUaGlzIGlzIHRvIGFsbG93IGFwcGxpY2F0aW9uIHRvICdjb25uZWN0JyB0byBzdGF0ZVxuICAgICAqL1xuICAgIGdldFN0YXRlOiAoc3RhdGVLZXkpID0+IHtcbiAgICAgIGlmICghc3RhdGVLZXkpIHtcbiAgICAgICAgcmV0dXJuIHN0YXRlXG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHN0YXRlW3N0YXRlS2V5XVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4vLyBBc3N1bWUgdGhlIHJlY3Vlck1hcCBpcyBhIGZsYXQgbWFwIHRvIGFsbCByZWR1Y2Vyc1xuZXhwb3J0IGZ1bmN0aW9uIGNvbWJpbmVSZWR1Y2VyIChyZWR1Y2VyTWFwID0ge30sIHVwZGF0ZXIpIHtcblxuICAvLyBHZW5lcmF0ZSBhIGNvbWJpbmVkIHJlZHVjZXIgZnVuY3Rpb25cbiAgcmV0dXJuIChzdGF0ZSA9IHt9LCBhY3Rpb24gPSB7fSkgPT4ge1xuICAgIGxldCBuZXdTdGF0ZSA9IHt9LFxuICAgICAgICBkaXJ0eUtleXMgPSBbXVxuXG4gICAgLy8gU3ByZWFkIHRoZSBhY3Rpb24gdG8gYWxsIHJlZHVjZXJzIGluc2lkZSB0aGUgY29tYmluZWQgb25lXG4gICAgZm9yIChsZXQga2V5IGluIHJlZHVjZXJNYXApIHtcbiAgICAgIC8vIFBhc3MgdGhlIHdob2xlIHN0YXRlIGRvd24gYXMgYXJndW1lbnQgZm9yXG4gICAgICAvLyBjcm9zcyBzdGF0ZSBrZXkgYWNjZXNzXG4gICAgICBsZXQgcmVkdWNlZFN0YXRlID0gcmVkdWNlck1hcFtrZXldKHN0YXRlW2tleV0sIGFjdGlvbiwgc3RhdGUpXG5cbiAgICAgIGlmIChyZWR1Y2VkU3RhdGUgIT09IHN0YXRlW2tleV0pIHtcbiAgICAgICAgZGlydHlLZXlzLnB1c2goa2V5KVxuICAgICAgfVxuXG4gICAgICBuZXdTdGF0ZVtrZXldID0gcmVkdWNlZFN0YXRlXG4gICAgfVxuXG4gICAgLy8gQ2FsbCB1cGRhdGUgZnVuY3Rpb24gZm9yIGVhY2ggcmVkdWNlZCBzdGF0ZVxuICAgIHVwZGF0ZXIobmV3U3RhdGUsIGRpcnR5S2V5cylcblxuICAgIC8vIGRpcnR5S2V5cy5mb3JFYWNoKChkaXJ0eUtleSkgPT4ge1xuICAgIC8vICAgdXBkYXRlck1hcFtkaXJ0eUtleV0obmV3U3RhdGUsIGRpcnR5S2V5KVxuICAgIC8vIH0pXG5cbiAgICByZXR1cm4gbmV3U3RhdGVcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gY29tYmluZVVwZGF0ZXIgKHVwZGF0ZXJNYXAgPSB7fSwgcmVuZGVyZXJNYXAgPSB7fSkge1xuICAvLyBHZW5lcmF0ZSBjb21iaW5lZCB1cGRhdGVyIGZ1bmN0aW9uIGZvciBhbGwgdXBkYXRlcnNcbiAgcmV0dXJuIChzdGF0ZSA9IHt9LCBkaXJ0eUtleXMgPSBbXSkgPT4ge1xuICAgIGxldCBuZXdGaW5hbFJlbmRlclN0YXRlID0ge31cbiAgICBmb3IgKGxldCBrZXkgaW4gdXBkYXRlck1hcCkge1xuICAgICAgLy8gQ29tcHV0ZSB0aGUgZmluYWwgcmVuZGVyIHN0YXRlIGFuZCBwYXNzIGludG8gcmVuZGVyZXJcbiAgICAgIHJlbmRlcmVyTWFwW2tleV0uZmluYWxSZW5kZXJTdGF0ZSA9IHVwZGF0ZXJNYXBba2V5XShyZW5kZXJlck1hcFtrZXldLmZpbmFsUmVuZGVyU3RhdGUsIHN0YXRlLCBkaXJ0eUtleXMpXG4gICAgfVxuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc3RhdGVNYW5hZ2VyLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==

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

__webpack_require__(8);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
    var touches = {
      touchstart: Object.assign({}, {
        x: -1,
        y: -1
      }),
      touchmove: Object.assign({}, {
        x: -1,
        y: -1
      })
    };

    function handleTouch(evt) {
      if (typeof evt.touches === 'undefined') {
        return;
      }

      var touch = evt.touches[0];
      switch (evt.type) {
        case 'touchstart':
        case 'touchmove':
          touches[evt.type].x = touch.pageX;
          touches[evt.type].y = touch.pageY;
          break;

        case 'touchend':
          {
            if (touches.touchstart.x > -1 && touches.touchmove.x > -1) {
              var dx = touches.touchmove.x - touches.touchstart.x,
                  dy = touches.touchmove.y - touches.touchstart.y;

              if (Math.abs(dx) > Math.abs(dy)) {
                // Horizontal move
                if (dx > 0) {
                  _gamux2.default.dispatch((0, _actions.rightKeyDown)());
                } else {
                  _gamux2.default.dispatch((0, _actions.leftKeyDown)());
                }
              } else {
                // Vertical move
                if (dy > 0) {
                  _gamux2.default.dispatch((0, _actions.downKeyDown)());
                } else {
                  _gamux2.default.dispatch((0, _actions.upKeyDown)());
                }
              }
            }
            break;
          }
      }

      evt.preventDefault();
    }

    document.addEventListener('touchstart', handleTouch);
    document.addEventListener('touchmove', handleTouch);
    document.addEventListener('touchend', handleTouch);
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

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(9);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(11)(content, options);
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
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)(undefined);
// imports


// module
exports.push([module.i, "body,\nhtml {\n  width: 100%;\n  height: 100%;\n  margin: 0;\n  padding: 0;\n  overflow: hidden; }\n\n#root {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  background-color: #ededed;\n  text-align: center; }\n  #root h2 {\n    margin: 0; }\n\n#root canvas {\n  position: fixed;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%); }\n", ""]);

// exports


/***/ }),
/* 10 */
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
/* 11 */
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

var	fixUrls = __webpack_require__(12);

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
/* 12 */
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMTlkNTkyZWQ3ODRhMTVhY2MxNzYiLCJ3ZWJwYWNrOi8vLy4vZGVtby9zbmFrZS9hY3Rpb25zLmpzIiwid2VicGFjazovLy8uL2RlbW8vc25ha2UvdGhlbWUuanMiLCJ3ZWJwYWNrOi8vLy4vZGlzdC9nYW11eC5qcyIsIndlYnBhY2s6Ly8vLi9kZW1vL3NuYWtlL2luZGV4LmpzIiwid2VicGFjazovLy8uL2RlbW8vc25ha2Uvc25ha2VSZWR1Y2VyLmpzIiwid2VicGFjazovLy8uL2RlbW8vc25ha2Uvd29ybGRSZWR1Y2VyLmpzIiwid2VicGFjazovLy8uL2RlbW8vc25ha2Uvd29ybGRMYXllci5qcyIsIndlYnBhY2s6Ly8vLi9kZW1vL3NuYWtlL3NuYWtlTGF5ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vZGVtby9zbmFrZS9pbmRleC5zY3NzPzBjNzEiLCJ3ZWJwYWNrOi8vLy4vZGVtby9zbmFrZS9pbmRleC5zY3NzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvdXJscy5qcyJdLCJuYW1lcyI6WyJnYW1lUmVzaXplIiwic2V0U3RhclBvc2l0aW9uIiwic2V0U25ha2VCb2R5IiwibGVmdEtleURvd24iLCJyaWdodEtleURvd24iLCJ1cEtleURvd24iLCJkb3duS2V5RG93biIsImdhbWVPdmVyIiwibmV4dExldmVsIiwiY3V0U25ha2VCb2R5IiwiR0FNRV9SRVNJWkUiLCJTRVRfU1RBUl9QT1NJVElPTiIsIlNFVF9TTkFLRV9CT0RZIiwiTEVGVF9LRVlET1dOIiwiUklHSFRfS0VZRE9XTiIsIlVQX0tFWURPV04iLCJET1dOX0tFWURPV04iLCJHQU1FX09WRVIiLCJORVhUX0xFVkVMIiwiQ1VUX1NOQUtFX0JPRFkiLCJ3aWR0aCIsImhlaWdodCIsInR5cGUiLCJyb3ciLCJjb2x1bW4iLCJib2R5Iiwic25ha2VCb2R5IiwiY3V0Qm9keUluZGV4IiwiZ2FtZURlZmF1bHQiLCJyb3dzIiwiY29sdW1ucyIsInNwZWVkIiwiaGl0RGV0ZWN0aW9uQnVmZmVyIiwiZGlyZWN0aW9uIiwiVVAiLCJET1dOIiwiTEVGVCIsIlJJR0hUIiwiY29udGFpbmVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImNvbmZpZyIsImZwcyIsImxheWVycyIsIm5hbWUiLCJ1cGRhdGVyIiwicmVuZGVyIiwicmVkdWNlck1hcCIsInNuYWtlIiwid29ybGQiLCJpbml0IiwiZ2FtZVN0YXRlIiwiY29uc29sZSIsImxvZyIsImRpc3BhdGNoIiwib2Zmc2V0V2lkdGgiLCJvZmZzZXRIZWlnaHQiLCJ3b3JsZFN0YXRlIiwic25ha2VTdGF0ZSIsInN0YXJSb3ciLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJzdGFyQ29sdW1uIiwiaGVhZFJvdyIsImhlYWRDb2x1bW4iLCJpc0hvcml6b250YWwiLCJldmVyeSIsImJvZHlCbG9jayIsIndpbmRvdyIsIm9ubG9hZCIsIm9ucmVzaXplIiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2dCIsImtleUNvZGUiLCJ0b3VjaGVzIiwidG91Y2hzdGFydCIsIk9iamVjdCIsImFzc2lnbiIsIngiLCJ5IiwidG91Y2htb3ZlIiwiaGFuZGxlVG91Y2giLCJ0b3VjaCIsInBhZ2VYIiwicGFnZVkiLCJkeCIsImR5IiwiYWJzIiwicHJldmVudERlZmF1bHQiLCJzdGFydCIsImluaXRTdGF0ZSIsImlzTW92ZSIsImxldmVsIiwic3RhdGUiLCJhY3Rpb24iLCJzbGljZSIsInJldmVyc2UiLCJyZWR1Y2UiLCJmaXJzdCIsInNlY29uZCIsImhlYWQiLCJoZWFkRGlyZWN0aW9uIiwidW5zaGlmdCIsIm5ld0xldmVsIiwic3BsaWNlIiwic3RhclBvc2l0aW9uIiwiaGlnaExldmVsIiwiaXNHYW1lb3ZlciIsImlzT3ZlcmxhcCIsImdhbWVTaXplIiwibWluIiwibmV3U3RhclBvc2l0aW9uIiwibWF4IiwiaW5pdEZpbmFsUmVuZGVyU3RhdGUiLCJ3b3JsZExheWVyVXBkYXRlciIsImZpbmFsUmVuZGVyU3RhdGUiLCJkaXJ0eUtleXMiLCJpbmRleE9mIiwiY2VsbFdpZHRoIiwiY2VsbEhlaWdodCIsInhzIiwiQXJyYXkiLCJmaWxsIiwibWFwIiwieEluZGV4IiwieTAiLCJ5MSIsInlzIiwieUluZGV4IiwieDAiLCJ4MSIsInN0YXIiLCJ3b3JsZExheWVyUmVuZGVyIiwiY2FudmFzIiwicmVuZGVyU3RhdGUiLCJkdCIsImNvbnRleHQiLCJnZXRDb250ZXh0IiwiY2xlYXJSZWN0IiwiZmlsbFN0eWxlIiwiZmlsbFJlY3QiLCJzdHJva2VTdHlsZSIsImxpbmVXaWR0aCIsImJlZ2luUGF0aCIsImZvckVhY2giLCJ2ZXJ0aWNhbExpbmUiLCJtb3ZlVG8iLCJsaW5lVG8iLCJzdHJva2UiLCJob3Jpem9udGFsTGluZSIsImZvbnQiLCJ0ZXh0QWxpZ24iLCJ0ZXh0QmFzZWxpbmUiLCJmaWxsVGV4dCIsImhpdFN0YXIiLCJzbmFrZUhlYWQiLCJoaXRPblJpZ2h0IiwiZm9jdXMiLCJvdGhlciIsImZvY3VzWCIsImZvY3VzWSIsIm90aGVyWCIsIm90aGVyWSIsImhpdE9uTGVmdCIsImhpdE9uQm90dG9tIiwiaGl0T25Ub3AiLCJnZXRIaXRCb2R5SW5kZXgiLCJpIiwibGVuZ3RoIiwiY3V0U2VsZkJ5SGVhZCIsImhpdEJvZHlJbmRleCIsImZpbGxGcmVlUmVjdCIsImNhbnZhc1dpZHRoIiwiY2FudmFzSGVpZ2h0Iiwic25ha2VMYXllclVwZGF0ZXIiLCJpbmRleCIsInNuYWtlTGF5ZXJSZW5kZXIiLCJkaXJ0eSIsImJvZHlGUlMiLCJzdGFyRlJTIiwiYm9keUZSU0Jsb2NrIiwiZGlyZWN0aW9uVW5pdCIsImRpc3RhbmNlIiwiaGVhZFgiLCJoZWFkWSIsImhlYWRQb3NpdGlvbiJdLCJtYXBwaW5ncyI6IjtBQUFBO0FB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Q0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdURBQXVEO0FBQ3ZEOztBQUVBLDZCQUE2QixtQkFBbUI7O0FBRWhEOztBQUVBOztBQUVBO0FBQ0E7Ozs7Ozs7O0FDL1ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdDQUF3QyxXQUFXLEVBQUU7QUFDckQsd0NBQXdDLFdBQVcsRUFBRTs7QUFFckQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxzQ0FBc0M7QUFDdEMsR0FBRztBQUNIO0FBQ0EsOERBQThEO0FBQzlEOztBQUVBO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQSIsImZpbGUiOiJzbmFrZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9cIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAzKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCAxOWQ1OTJlZDc4NGExNWFjYzE3NiIsIi8vIEFjdGlvbiB0eXBlc1xuZXhwb3J0IGNvbnN0IEdBTUVfUkVTSVpFID0gJ0dBTUVfUkVTSVpFJyBcbmV4cG9ydCBjb25zdCBTRVRfU1RBUl9QT1NJVElPTiA9ICdTRVRfU1RBUl9QT1NJVElPTicgXG5leHBvcnQgY29uc3QgU0VUX1NOQUtFX0JPRFkgPSAnU0VUX1NOQUtFX0JPRFknIFxuZXhwb3J0IGNvbnN0IExFRlRfS0VZRE9XTiA9ICdMRUZUX0tFWURPV04nXG5leHBvcnQgY29uc3QgUklHSFRfS0VZRE9XTiA9ICdSSUdIVF9LRVlET1dOJ1xuZXhwb3J0IGNvbnN0IFVQX0tFWURPV04gPSAnVVBfS0VZRE9XTidcbmV4cG9ydCBjb25zdCBET1dOX0tFWURPV04gPSAnRE9XTl9LRVlET1dOJ1xuZXhwb3J0IGNvbnN0IEdBTUVfT1ZFUiA9ICdHQU1FX09WRVInXG5leHBvcnQgY29uc3QgTkVYVF9MRVZFTCA9ICdORVhUX0xFVkVMJ1xuZXhwb3J0IGNvbnN0IENVVF9TTkFLRV9CT0RZID0gJ0NVVF9TTkFLRV9CT0RZJ1xuXG4vLyBBY3Rpb24gY3JlYXRvcnNcbmV4cG9ydCBmdW5jdGlvbiBnYW1lUmVzaXplICh3aWR0aCwgaGVpZ2h0KSB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogR0FNRV9SRVNJWkUsXG4gICAgd2lkdGgsXG4gICAgaGVpZ2h0XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNldFN0YXJQb3NpdGlvbiAocm93LCBjb2x1bW4pIHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBTRVRfU1RBUl9QT1NJVElPTixcbiAgICByb3csXG4gICAgY29sdW1uXG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNldFNuYWtlQm9keSAoYm9keSkge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IFNFVF9TTkFLRV9CT0RZLFxuICAgIGJvZHlcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gbGVmdEtleURvd24gKCkge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IExFRlRfS0VZRE9XTlxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByaWdodEtleURvd24gKCkge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IFJJR0hUX0tFWURPV05cbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdXBLZXlEb3duICgpIHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBVUF9LRVlET1dOXG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRvd25LZXlEb3duICgpIHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBET1dOX0tFWURPV05cbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2FtZU92ZXIgKCkge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IEdBTUVfT1ZFUlxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBuZXh0TGV2ZWwgKHNuYWtlQm9keSkge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IE5FWFRfTEVWRUwsXG4gICAgc25ha2VCb2R5XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGN1dFNuYWtlQm9keSAoY3V0Qm9keUluZGV4KSB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogQ1VUX1NOQUtFX0JPRFksXG4gICAgY3V0Qm9keUluZGV4XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2RlbW8vc25ha2UvYWN0aW9ucy5qcyIsImV4cG9ydCBjb25zdCBnYW1lRGVmYXVsdCA9IHtcbiAgcm93czogMTYsXG4gIGNvbHVtbnM6IDE2LFxuICBzcGVlZDogMC4zLFxuICBoaXREZXRlY3Rpb25CdWZmZXI6IDAuNVxufVxuXG5leHBvcnQgY29uc3QgZGlyZWN0aW9uID0ge1xuICBVUDogJ1VQJyxcbiAgRE9XTjogJ0RPV04nLFxuICBMRUZUOiAnTEVGVCcsXG4gIFJJR0hUOiAnUklHSFQnXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vZGVtby9zbmFrZS90aGVtZS5qcyIsIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcImdhbXV4XCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcImdhbXV4XCJdID0gZmFjdG9yeSgpO1xufSkodGhpcywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gLyoqKioqKi8gKGZ1bmN0aW9uKG1vZHVsZXMpIHsgLy8gd2VicGFja0Jvb3RzdHJhcFxuLyoqKioqKi8gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4vKioqKioqLyBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuLyoqKioqKi8gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuLyoqKioqKi8gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4vKioqKioqLyBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbi8qKioqKiovIFx0XHR9XG4vKioqKioqLyBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbi8qKioqKiovIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4vKioqKioqLyBcdFx0XHRpOiBtb2R1bGVJZCxcbi8qKioqKiovIFx0XHRcdGw6IGZhbHNlLFxuLyoqKioqKi8gXHRcdFx0ZXhwb3J0czoge31cbi8qKioqKiovIFx0XHR9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbi8qKioqKiovIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuLyoqKioqKi8gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbi8qKioqKiovIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4vKioqKioqLyBcdH1cbi8qKioqKiovXG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbi8qKioqKiovIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4vKioqKioqLyBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuLyoqKioqKi8gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuLyoqKioqKi8gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuLyoqKioqKi8gXHRcdFx0XHRnZXQ6IGdldHRlclxuLyoqKioqKi8gXHRcdFx0fSk7XG4vKioqKioqLyBcdFx0fVxuLyoqKioqKi8gXHR9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4vKioqKioqLyBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4vKioqKioqLyBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuLyoqKioqKi8gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbi8qKioqKiovIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4vKioqKioqLyBcdFx0cmV0dXJuIGdldHRlcjtcbi8qKioqKiovIFx0fTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9cIjtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLyoqKioqKi8gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbi8qKioqKiovIH0pXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyoqKioqKi8gKFtcbi8qIDAgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxubW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDEpO1xuXG5cbi8qKiovIH0pLFxuLyogMSAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX3N0YXRlTWFuYWdlciA9IF9fd2VicGFja19yZXF1aXJlX18oMik7XG5cbi8qKlxuICogVGhlIGFuaW1hdGlvbiBsb29wIGtleSBmb3IgY2FuY2VsIGFuaW1hdGlvblxuICovXG52YXIgX2FuaW1hdGlvbkxvb3BLZXkgPSBudWxsO1xuLyoqXG4gKiBBY2N1bXVsYXRvciBmb3IgdGltZS1iYXNlZCBhbmltYXRpb25cbiAqL1xudmFyIF9hY2N1bXVsYXRvciA9IDA7XG4vKipcbiAqIFRoZSBkZWZhdWx0IGZwc1xuICovXG52YXIgX2ZwcyA9IDYwO1xuLyoqXG4gKiBUaGUgc3RvcmUgZm9yIGdhbWVcbiAqL1xudmFyIF9zdG9yZSA9IHt9O1xuXG52YXIgX3VwZGF0ZXJNYXAgPSB7fTtcblxudmFyIF9yZW5kZXJlck1hcCA9IHt9O1xuXG4vKipcbiAqIFRyaWdnZXIgZ2FtZSBsb29wXG4gKi9cbmZ1bmN0aW9uIF9sb29wKGxhc3RUaW1lc3RhbXApIHtcbiAgX2FuaW1hdGlvbkxvb3BLZXkgPSB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgbm93ID0gRGF0ZS5ub3coKTtcbiAgICB2YXIgZHQgPSAxMDAwIC8gX2ZwcztcbiAgICBfYWNjdW11bGF0b3IgKz0gbm93IC0gbGFzdFRpbWVzdGFtcDtcblxuICAgIGlmIChfYWNjdW11bGF0b3IgPj0gZHQpIHtcbiAgICAgIHdoaWxlIChfYWNjdW11bGF0b3IgPj0gZHQpIHtcbiAgICAgICAgX2FjY3VtdWxhdG9yIC09IGR0O1xuICAgICAgfVxuICAgICAgZm9yICh2YXIga2V5IGluIF9yZW5kZXJlck1hcCkge1xuICAgICAgICB2YXIgcmVuZGVyZXIgPSBfcmVuZGVyZXJNYXBba2V5XTtcbiAgICAgICAgcmVuZGVyZXIucmVuZGVyU3RhdGUgPSByZW5kZXJlcihyZW5kZXJlci5yZW5kZXJTdGF0ZSwgcmVuZGVyZXIuZmluYWxSZW5kZXJTdGF0ZSwgZHQpO1xuICAgICAgfVxuICAgIH1cbiAgICBfbG9vcChub3cpO1xuICB9KTtcbn1cblxudmFyIGdhbXV4ID0ge1xuICBjb25maWc6IGZ1bmN0aW9uIGNvbmZpZygpIHtcbiAgICB2YXIgX2NvbmZpZyA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDoge307XG5cbiAgICAvLyBDb25maWcgdGhlIHByaXZhdGUgZ2xvYmFsc1xuICAgIF9mcHMgPSBfY29uZmlnLmZwcyB8fCBfZnBzO1xuXG4gICAgdmFyIGNvbnRhaW5lciA9IF9jb25maWcuY29udGFpbmVyO1xuXG4gICAgLy8gQ3JlYXRlIGdhbWUgbGF5ZXJzXG4gICAgX2NvbmZpZy5sYXllcnMuZm9yRWFjaChmdW5jdGlvbiAobGF5ZXIpIHtcbiAgICAgIHZhciBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcbiAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChjYW52YXMpO1xuXG4gICAgICBfdXBkYXRlck1hcFtsYXllci5uYW1lXSA9IGxheWVyLnVwZGF0ZXI7XG4gICAgICBfcmVuZGVyZXJNYXBbbGF5ZXIubmFtZV0gPSBsYXllci5yZW5kZXIuYmluZChudWxsLCBjYW52YXMpO1xuICAgIH0pO1xuXG4gICAgLy8gQ3JlYXRlIGdhbWUgc3RvcmVcbiAgICBfc3RvcmUgPSAoMCwgX3N0YXRlTWFuYWdlci5jcmVhdGVTdG9yZSkoKDAsIF9zdGF0ZU1hbmFnZXIuY29tYmluZVJlZHVjZXIpKF9jb25maWcucmVkdWNlck1hcCwgKDAsIF9zdGF0ZU1hbmFnZXIuY29tYmluZVVwZGF0ZXIpKF91cGRhdGVyTWFwLCBfcmVuZGVyZXJNYXApKSk7XG4gICAgaWYgKF9jb25maWcuaW5pdCkge1xuICAgICAgX2NvbmZpZy5pbml0KF9zdG9yZS5nZXRTdGF0ZSgpKTtcbiAgICB9XG4gIH0sXG5cbiAgbGF5ZXJzOiB7fSxcblxuICBzdGFydDogZnVuY3Rpb24gc3RhcnQoKSB7XG4gICAgX2xvb3AoRGF0ZS5ub3coKSk7XG4gIH0sXG5cbiAgZGlzcGF0Y2g6IGZ1bmN0aW9uIGRpc3BhdGNoKGFjdGlvbikge1xuICAgIF9zdG9yZS5kaXNwYXRjaChhY3Rpb24pO1xuICB9XG5cbiAgLy8gKlxuICAvLyAgKiBHYW1lIHdpbGwgYmUgYXZhaWxhYmxlIG9uY2UgY29uZmlndXJlZFxufTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gZ2FtdXg7XG5cbi8vIFRPRE9cbi8vIDEuIEJ1aWxkIGZpbGUgZm9yIEVTNiBtb2R1bGVzXG5cbi8qKiovIH0pLFxuLyogMiAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5jcmVhdGVTdG9yZSA9IGNyZWF0ZVN0b3JlO1xuZXhwb3J0cy5jb21iaW5lUmVkdWNlciA9IGNvbWJpbmVSZWR1Y2VyO1xuZXhwb3J0cy5jb21iaW5lVXBkYXRlciA9IGNvbWJpbmVVcGRhdGVyO1xuZnVuY3Rpb24gY3JlYXRlU3RvcmUocmVkdWNlcikge1xuICAvLyBJbml0IHN0YXRlXG4gIHZhciBzdGF0ZSA9IHJlZHVjZXIoKTtcblxuICByZXR1cm4ge1xuICAgIC8qKlxuICAgICAqIERpc3BhdGNoIGFjdGlvbiB0byB0cmlnZ2VyIHN0YXRlIGNoYW5nZXNcbiAgICAgKi9cbiAgICBkaXNwYXRjaDogZnVuY3Rpb24gZGlzcGF0Y2goKSB7XG4gICAgICB2YXIgYWN0aW9uID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiB7fTtcblxuICAgICAgaWYgKHRydWUpIHtcbiAgICAgICAgLy8gbG9nIGFjdGlvbnMgaW4gY29uc29sZVxuICAgICAgICBjb25zb2xlLmdyb3VwKGFjdGlvbi50eXBlKTtcbiAgICAgICAgY29uc29sZS5pbmZvKCclY2JlZm9yZTonLCAnY29sb3I6IGdyZWVuJywgc3RhdGUpO1xuICAgICAgICBjb25zb2xlLmluZm8oJyVjYWN0aW9uOicsICdjb2xvcjogcmVkJywgYWN0aW9uKTtcbiAgICAgIH1cblxuICAgICAgLy8gVXBkYXRlIHN0YXRlXG4gICAgICBzdGF0ZSA9IHJlZHVjZXIoc3RhdGUsIGFjdGlvbik7XG4gICAgICAvLyBTdGF0ZSBtYW5hZ2VyIGRvZXNuJ3QgY2FyZSBhYm91dCBub3RpY2luZ1xuICAgICAgLy8gZ2FtZSB0byB1cGRhdGUgc3RhdGUuIEluc3RlYWQgcmVkdWNlcnNcbiAgICAgIC8vIHNob3VsZCBzZXQgZGlydHkgc3RhdGUgZm9yIGdhbWUgbG9vcCB0b1xuICAgICAgLy8gdHJpZ2dlciB1cGRhdGVcblxuICAgICAgaWYgKHRydWUpIHtcbiAgICAgICAgLy8gbG9nIGFjdGlvbnMgaW4gY29uc29sZVxuICAgICAgICBjb25zb2xlLmluZm8oJyVjYWZ0ZXI6JywgJ2NvbG9yOiBncmVlbicsIHN0YXRlKTtcbiAgICAgICAgY29uc29sZS5ncm91cEVuZCgpO1xuICAgICAgfVxuICAgIH0sXG4gICAgLyoqXG4gICAgICogUmV0dXJuIHRoZSBjdXJyZW50IHN0YXRlIGZvciBnaXZlbiBrZXlcbiAgICAgKiBUaGlzIGlzIHRvIGFsbG93IGFwcGxpY2F0aW9uIHRvICdjb25uZWN0JyB0byBzdGF0ZVxuICAgICAqL1xuICAgIGdldFN0YXRlOiBmdW5jdGlvbiBnZXRTdGF0ZShzdGF0ZUtleSkge1xuICAgICAgaWYgKCFzdGF0ZUtleSkge1xuICAgICAgICByZXR1cm4gc3RhdGU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gc3RhdGVbc3RhdGVLZXldO1xuICAgICAgfVxuICAgIH1cbiAgfTtcbn1cblxuLy8gQXNzdW1lIHRoZSByZWN1ZXJNYXAgaXMgYSBmbGF0IG1hcCB0byBhbGwgcmVkdWNlcnNcbmZ1bmN0aW9uIGNvbWJpbmVSZWR1Y2VyKCkge1xuICB2YXIgcmVkdWNlck1hcCA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDoge307XG4gIHZhciB1cGRhdGVyID0gYXJndW1lbnRzWzFdO1xuXG5cbiAgLy8gR2VuZXJhdGUgYSBjb21iaW5lZCByZWR1Y2VyIGZ1bmN0aW9uXG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHN0YXRlID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiB7fTtcbiAgICB2YXIgYWN0aW9uID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB7fTtcblxuICAgIHZhciBuZXdTdGF0ZSA9IHt9LFxuICAgICAgICBkaXJ0eUtleXMgPSBbXTtcblxuICAgIC8vIFNwcmVhZCB0aGUgYWN0aW9uIHRvIGFsbCByZWR1Y2VycyBpbnNpZGUgdGhlIGNvbWJpbmVkIG9uZVxuICAgIGZvciAodmFyIGtleSBpbiByZWR1Y2VyTWFwKSB7XG4gICAgICAvLyBQYXNzIHRoZSB3aG9sZSBzdGF0ZSBkb3duIGFzIGFyZ3VtZW50IGZvclxuICAgICAgLy8gY3Jvc3Mgc3RhdGUga2V5IGFjY2Vzc1xuICAgICAgdmFyIHJlZHVjZWRTdGF0ZSA9IHJlZHVjZXJNYXBba2V5XShzdGF0ZVtrZXldLCBhY3Rpb24sIHN0YXRlKTtcblxuICAgICAgaWYgKHJlZHVjZWRTdGF0ZSAhPT0gc3RhdGVba2V5XSkge1xuICAgICAgICBkaXJ0eUtleXMucHVzaChrZXkpO1xuICAgICAgfVxuXG4gICAgICBuZXdTdGF0ZVtrZXldID0gcmVkdWNlZFN0YXRlO1xuICAgIH1cblxuICAgIC8vIENhbGwgdXBkYXRlIGZ1bmN0aW9uIGZvciBlYWNoIHJlZHVjZWQgc3RhdGVcbiAgICB1cGRhdGVyKG5ld1N0YXRlLCBkaXJ0eUtleXMpO1xuXG4gICAgLy8gZGlydHlLZXlzLmZvckVhY2goKGRpcnR5S2V5KSA9PiB7XG4gICAgLy8gICB1cGRhdGVyTWFwW2RpcnR5S2V5XShuZXdTdGF0ZSwgZGlydHlLZXkpXG4gICAgLy8gfSlcblxuICAgIHJldHVybiBuZXdTdGF0ZTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gY29tYmluZVVwZGF0ZXIoKSB7XG4gIHZhciB1cGRhdGVyTWFwID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiB7fTtcbiAgdmFyIHJlbmRlcmVyTWFwID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB7fTtcblxuICAvLyBHZW5lcmF0ZSBjb21iaW5lZCB1cGRhdGVyIGZ1bmN0aW9uIGZvciBhbGwgdXBkYXRlcnNcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgc3RhdGUgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IHt9O1xuICAgIHZhciBkaXJ0eUtleXMgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IFtdO1xuXG4gICAgdmFyIG5ld0ZpbmFsUmVuZGVyU3RhdGUgPSB7fTtcbiAgICBmb3IgKHZhciBrZXkgaW4gdXBkYXRlck1hcCkge1xuICAgICAgLy8gQ29tcHV0ZSB0aGUgZmluYWwgcmVuZGVyIHN0YXRlIGFuZCBwYXNzIGludG8gcmVuZGVyZXJcbiAgICAgIHJlbmRlcmVyTWFwW2tleV0uZmluYWxSZW5kZXJTdGF0ZSA9IHVwZGF0ZXJNYXBba2V5XShyZW5kZXJlck1hcFtrZXldLmZpbmFsUmVuZGVyU3RhdGUsIHN0YXRlLCBkaXJ0eUtleXMpO1xuICAgIH1cbiAgfTtcbn1cblxuLyoqKi8gfSlcbi8qKioqKiovIF0pO1xufSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbmRsWW5CaFkyczZMeTh2ZDJWaWNHRmpheTkxYm1sMlpYSnpZV3hOYjJSMWJHVkVaV1pwYm1sMGFXOXVJaXdpZDJWaWNHRmphem92THk5M1pXSndZV05yTDJKdmIzUnpkSEpoY0NBeE16QmpOekl5TWpKa01XTXlPR0l5TnpFellTSXNJbmRsWW5CaFkyczZMeTh2TGk5emNtTXZaMkZ0ZFhndWFuTWlMQ0ozWldKd1lXTnJPaTh2THk0dmMzSmpMM04wWVhSbFRXRnVZV2RsY2k1cWN5SmRMQ0p1WVcxbGN5STZXeUpmWVc1cGJXRjBhVzl1VEc5dmNFdGxlU0lzSWw5aFkyTjFiWFZzWVhSdmNpSXNJbDltY0hNaUxDSmZjM1J2Y21VaUxDSmZkWEJrWVhSbGNrMWhjQ0lzSWw5eVpXNWtaWEpsY2sxaGNDSXNJbDlzYjI5d0lpd2liR0Z6ZEZScGJXVnpkR0Z0Y0NJc0luZHBibVJ2ZHlJc0luSmxjWFZsYzNSQmJtbHRZWFJwYjI1R2NtRnRaU0lzSW01dmR5SXNJa1JoZEdVaUxDSmtkQ0lzSW10bGVTSXNJbkpsYm1SbGNtVnlJaXdpY21WdVpHVnlVM1JoZEdVaUxDSm1hVzVoYkZKbGJtUmxjbE4wWVhSbElpd2laMkZ0ZFhnaUxDSmpiMjVtYVdjaUxDSm1jSE1pTENKamIyNTBZV2x1WlhJaUxDSnNZWGxsY25NaUxDSm1iM0pGWVdOb0lpd2liR0Y1WlhJaUxDSmpZVzUyWVhNaUxDSmtiMk4xYldWdWRDSXNJbU55WldGMFpVVnNaVzFsYm5RaUxDSmhjSEJsYm1SRGFHbHNaQ0lzSW01aGJXVWlMQ0oxY0dSaGRHVnlJaXdpY21WdVpHVnlJaXdpWW1sdVpDSXNJbkpsWkhWalpYSk5ZWEFpTENKcGJtbDBJaXdpWjJWMFUzUmhkR1VpTENKemRHRnlkQ0lzSW1ScGMzQmhkR05vSWl3aVlXTjBhVzl1SWl3aVkzSmxZWFJsVTNSdmNtVWlMQ0pqYjIxaWFXNWxVbVZrZFdObGNpSXNJbU52YldKcGJtVlZjR1JoZEdWeUlpd2ljbVZrZFdObGNpSXNJbk4wWVhSbElpd2lZMjl1YzI5c1pTSXNJbWR5YjNWd0lpd2lkSGx3WlNJc0ltbHVabThpTENKbmNtOTFjRVZ1WkNJc0luTjBZWFJsUzJWNUlpd2libVYzVTNSaGRHVWlMQ0prYVhKMGVVdGxlWE1pTENKeVpXUjFZMlZrVTNSaGRHVWlMQ0p3ZFhOb0lpd2lkWEJrWVhSbGNrMWhjQ0lzSW5KbGJtUmxjbVZ5VFdGd0lpd2libVYzUm1sdVlXeFNaVzVrWlhKVGRHRjBaU0pkTENKdFlYQndhVzVuY3lJNklrRkJRVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEVzUTBGQlF6dEJRVU5FTEU4N1FVTldRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUczdRVUZGUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUczdPMEZCUjBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRXNZVUZCU3p0QlFVTk1PMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRXNiVU5CUVRKQ0xEQkNRVUV3UWl4RlFVRkZPMEZCUTNaRUxIbERRVUZwUXl4bFFVRmxPMEZCUTJoRU8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJMRGhFUVVGelJDd3JSRUZCSzBRN08wRkJSWEpJTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHM3T3pzN096czdPenM3T3pzN096czdPenM3TzBGRE4wUkJPenRCUVVWQk96czdRVUZIUVN4SlFVRkpRU3h2UWtGQmIwSXNTVUZCZUVJN1FVRkRRVHM3TzBGQlIwRXNTVUZCU1VNc1pVRkJaU3hEUVVGdVFqdEJRVU5CT3pzN1FVRkhRU3hKUVVGSlF5eFBRVUZQTEVWQlFWZzdRVUZEUVRzN08wRkJSMEVzU1VGQlNVTXNVMEZCVXl4RlFVRmlPenRCUVVWQkxFbEJRVWxETEdOQlFXTXNSVUZCYkVJN08wRkJSVUVzU1VGQlNVTXNaVUZCWlN4RlFVRnVRanM3UVVGRlFUczdPMEZCUjBFc1UwRkJVME1zUzBGQlZDeERRVUZuUWtNc1lVRkJhRUlzUlVGQkswSTdRVUZETjBKUUxITkNRVUZ2UWxFc1QwRkJUME1zY1VKQlFWQXNRMEZCTmtJc1dVRkJUVHRCUVVOeVJDeFJRVUZOUXl4TlFVRk5ReXhMUVVGTFJDeEhRVUZNTEVWQlFWbzdRVUZEUVN4UlFVRk5SU3hMUVVGTExFOUJRVTlXTEVsQlFXeENPMEZCUTBGRUxHOUNRVUZuUWxNc1RVRkJUVWdzWVVGQmRFSTdPMEZCUlVFc1VVRkJTVTRzWjBKQlFXZENWeXhGUVVGd1FpeEZRVUYzUWp0QlFVTjBRaXhoUVVGUFdDeG5Ra0ZCWjBKWExFVkJRWFpDTEVWQlFUSkNPMEZCUTNwQ1dDeDNRa0ZCWjBKWExFVkJRV2hDTzBGQlEwUTdRVUZEUkN4WFFVRkxMRWxCUVVsRExFZEJRVlFzU1VGQlowSlNMRmxCUVdoQ0xFVkJRVGhDTzBGQlF6VkNMRmxCUVVsVExGZEJRVmRVTEdGQlFXRlJMRWRCUVdJc1EwRkJaanRCUVVOQlF5eHBRa0ZCVTBNc1YwRkJWQ3hIUVVGMVFrUXNVMEZCVTBFc1UwRkJVME1zVjBGQmJFSXNSVUZCSzBKRUxGTkJRVk5GTEdkQ1FVRjRReXhGUVVFd1JFb3NSVUZCTVVRc1EwRkJka0k3UVVGRFJEdEJRVU5HTzBGQlEwUk9MRlZCUVUxSkxFZEJRVTQ3UVVGRFJDeEhRV1p0UWl4RFFVRndRanRCUVdkQ1JEczdRVUZGUkN4SlFVRk5UeXhSUVVGUk8wRkJRMXBETEZWQlFWRXNhMEpCUVdsQ08wRkJRVUVzVVVGQmFFSkJMRTlCUVdkQ0xIVkZRVUZRTEVWQlFVODdPMEZCUTNaQ08wRkJRMEZvUWl4WFFVRlBaMElzVVVGQlQwTXNSMEZCVUN4SlFVRmpha0lzU1VGQmNrSTdPMEZCUlVFc1VVRkJTV3RDTEZsQlFWbEdMRkZCUVU5RkxGTkJRWFpDT3p0QlFVVkJPMEZCUTBGR0xGbEJRVTlITEUxQlFWQXNRMEZCWTBNc1QwRkJaQ3hEUVVGelFpeFZRVUZEUXl4TFFVRkVMRVZCUVZjN1FVRkRMMElzVlVGQlNVTXNVMEZCVTBNc1UwRkJVME1zWVVGQlZDeERRVUYxUWl4UlFVRjJRaXhEUVVGaU8wRkJRMEZPTEdkQ1FVRlZUeXhYUVVGV0xFTkJRWE5DU0N4TlFVRjBRanM3UVVGRlFYQkNMR3RDUVVGWmJVSXNUVUZCVFVzc1NVRkJiRUlzU1VGQk1FSk1MRTFCUVUxTkxFOUJRV2hETzBGQlEwRjRRaXh0UWtGQllXdENMRTFCUVUxTExFbEJRVzVDTEVsQlFUSkNUQ3hOUVVGTlR5eE5RVUZPTEVOQlFXRkRMRWxCUVdJc1EwRkJhMElzU1VGQmJFSXNSVUZCZDBKUUxFMUJRWGhDTEVOQlFUTkNPMEZCUTBRc1MwRk9SRHM3UVVGUlFUdEJRVU5CY2tJc1lVRkJVeXdyUWtGQldTeHJRMEZCWldVc1VVRkJUMk1zVlVGQmRFSXNSVUZCYTBNc2EwTkJRV1UxUWl4WFFVRm1MRVZCUVRSQ1F5eFpRVUUxUWl4RFFVRnNReXhEUVVGYUxFTkJRVlE3UVVGRFFTeFJRVUZKWVN4UlFVRlBaU3hKUVVGWUxFVkJRV2xDTzBGQlEyWm1MR05CUVU5bExFbEJRVkFzUTBGQldUbENMRTlCUVU4clFpeFJRVUZRTEVWQlFWbzdRVUZEUkR0QlFVTkdMRWRCY2tKWE96dEJRWFZDV21Jc1ZVRkJVU3hGUVhaQ1NUczdRVUY1UWxwakxGTkJRVThzYVVKQlFVMDdRVUZEV0RkQ0xGVkJRVTFMTEV0QlFVdEVMRWRCUVV3c1JVRkJUanRCUVVORUxFZEJNMEpYT3p0QlFUWkNXakJDTEZsQlFWVXNhMEpCUVVORExFMUJRVVFzUlVGQldUdEJRVU53UW14RExGZEJRVTlwUXl4UlFVRlFMRU5CUVdkQ1F5eE5RVUZvUWp0QlFVTkVPenRCUVVWRU8wRkJRMEU3UVVGc1Exa3NRMEZCWkRzN2EwSkJjVU5sY0VJc1N6czdRVUZIWmp0QlFVTkJMR2RET3pzN096czdPenM3T3pzN1VVTjBSbWRDY1VJc1Z5eEhRVUZCUVN4WE8xRkJOa05CUXl4akxFZEJRVUZCTEdNN1VVRXJRa0ZETEdNc1IwRkJRVUVzWXp0QlFUVkZWQ3hUUVVGVFJpeFhRVUZVTEVOQlFYTkNSeXhQUVVGMFFpeEZRVUVyUWp0QlFVTndRenRCUVVOQkxFMUJRVWxETEZGQlFWRkVMRk5CUVZvN08wRkJSVUVzVTBGQlR6dEJRVU5NT3pzN1FVRkhRVXdzWTBGQlZTeHZRa0ZCYVVJN1FVRkJRU3hWUVVGb1FrTXNUVUZCWjBJc2RVVkJRVkFzUlVGQlR6czdRVUZEZWtJc1ZVRkJTU3hKUVVGS0xFVkJRV2RETzBGQlF6bENPMEZCUTBGTkxHZENRVUZSUXl4TFFVRlNMRU5CUVdOUUxFOUJRVTlSTEVsQlFYSkNPMEZCUTBGR0xHZENRVUZSUnl4SlFVRlNMRU5CUVdFc1YwRkJZaXhGUVVFd1FpeGpRVUV4UWl4RlFVRXdRMG9zUzBGQk1VTTdRVUZEUVVNc1owSkJRVkZITEVsQlFWSXNRMEZCWVN4WFFVRmlMRVZCUVRCQ0xGbEJRVEZDTEVWQlFYZERWQ3hOUVVGNFF6dEJRVU5FT3p0QlFVVkVPMEZCUTBGTExHTkJRVkZFTEZGQlFWRkRMRXRCUVZJc1JVRkJaVXdzVFVGQlppeERRVUZTTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUVzVlVGQlNTeEpRVUZLTEVWQlFXZERPMEZCUXpsQ08wRkJRMEZOTEdkQ1FVRlJSeXhKUVVGU0xFTkJRV0VzVlVGQllpeEZRVUY1UWl4alFVRjZRaXhGUVVGNVEwb3NTMEZCZWtNN1FVRkRRVU1zWjBKQlFWRkpMRkZCUVZJN1FVRkRSRHRCUVVOR0xFdEJlRUpKTzBGQmVVSk1PenM3TzBGQlNVRmlMR05CUVZVc2EwSkJRVU5qTEZGQlFVUXNSVUZCWXp0QlFVTjBRaXhWUVVGSkxFTkJRVU5CTEZGQlFVd3NSVUZCWlR0QlFVTmlMR1ZCUVU5T0xFdEJRVkE3UVVGRFJDeFBRVVpFTEUxQlIwczdRVUZEU0N4bFFVRlBRU3hOUVVGTlRTeFJRVUZPTEVOQlFWQTdRVUZEUkR0QlFVTkdPMEZCY0VOSkxFZEJRVkE3UVVGelEwUTdPMEZCUlVRN1FVRkRUeXhUUVVGVFZDeGpRVUZVTEVkQlFXMUVPMEZCUVVFc1RVRkJNVUpRTEZWQlFUQkNMSFZGUVVGaUxFVkJRV0U3UVVGQlFTeE5RVUZVU0N4UFFVRlRPenM3UVVGRmVFUTdRVUZEUVN4VFFVRlBMRmxCUVRaQ08wRkJRVUVzVVVGQk5VSmhMRXRCUVRSQ0xIVkZRVUZ3UWl4RlFVRnZRanRCUVVGQkxGRkJRV2hDVEN4TlFVRm5RaXgxUlVGQlVDeEZRVUZQT3p0QlFVTnNReXhSUVVGSldTeFhRVUZYTEVWQlFXWTdRVUZCUVN4UlFVTkpReXhaUVVGWkxFVkJSR2hDT3p0QlFVZEJPMEZCUTBFc1UwRkJTeXhKUVVGSmNrTXNSMEZCVkN4SlFVRm5RbTFDTEZWQlFXaENMRVZCUVRSQ08wRkJRekZDTzBGQlEwRTdRVUZEUVN4VlFVRkpiVUlzWlVGQlpXNUNMRmRCUVZkdVFpeEhRVUZZTEVWQlFXZENOa0lzVFVGQlRUZENMRWRCUVU0c1EwRkJhRUlzUlVGQk5FSjNRaXhOUVVFMVFpeEZRVUZ2UTBzc1MwRkJjRU1zUTBGQmJrSTdPMEZCUlVFc1ZVRkJTVk1zYVVKQlFXbENWQ3hOUVVGTk4wSXNSMEZCVGl4RFFVRnlRaXhGUVVGcFF6dEJRVU12UW5GRExHdENRVUZWUlN4SlFVRldMRU5CUVdWMlF5eEhRVUZtTzBGQlEwUTdPMEZCUlVSdlF5eGxRVUZUY0VNc1IwRkJWQ3hKUVVGblFuTkRMRmxCUVdoQ08wRkJRMFE3TzBGQlJVUTdRVUZEUVhSQ0xGbEJRVkZ2UWl4UlFVRlNMRVZCUVd0Q1F5eFRRVUZzUWpzN1FVRkZRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRXNWMEZCVDBRc1VVRkJVRHRCUVVORUxFZEJla0pFTzBGQk1FSkVPenRCUVVWTkxGTkJRVk5VTEdOQlFWUXNSMEZCTkVRN1FVRkJRU3hOUVVGdVEyRXNWVUZCYlVNc2RVVkJRWFJDTEVWQlFYTkNPMEZCUVVFc1RVRkJiRUpETEZkQlFXdENMSFZGUVVGS0xFVkJRVWs3TzBGQlEycEZPMEZCUTBFc1UwRkJUeXhaUVVGblF6dEJRVUZCTEZGQlFTOUNXaXhMUVVFclFpeDFSVUZCZGtJc1JVRkJkVUk3UVVGQlFTeFJRVUZ1UWxFc1UwRkJiVUlzZFVWQlFWQXNSVUZCVHpzN1FVRkRja01zVVVGQlNVc3NjMEpCUVhOQ0xFVkJRVEZDTzBGQlEwRXNVMEZCU3l4SlFVRkpNVU1zUjBGQlZDeEpRVUZuUW5kRExGVkJRV2hDTEVWQlFUUkNPMEZCUXpGQ08wRkJRMEZETEd0Q1FVRlpla01zUjBGQldpeEZRVUZwUWtjc1owSkJRV3BDTEVkQlFXOURjVU1zVjBGQlYzaERMRWRCUVZnc1JVRkJaMEo1UXl4WlFVRlpla01zUjBGQldpeEZRVUZwUWtjc1owSkJRV3BETEVWQlFXMUVNRUlzUzBGQmJrUXNSVUZCTUVSUkxGTkJRVEZFTEVOQlFYQkRPMEZCUTBRN1FVRkRSaXhIUVU1RU8wRkJUMFFzUXlJc0ltWnBiR1VpT2lKbllXMTFlQzVxY3lJc0luTnZkWEpqWlhORGIyNTBaVzUwSWpwYklpaG1kVzVqZEdsdmJpQjNaV0p3WVdOclZXNXBkbVZ5YzJGc1RXOWtkV3hsUkdWbWFXNXBkR2x2YmloeWIyOTBMQ0JtWVdOMGIzSjVLU0I3WEc1Y2RHbG1LSFI1Y0dWdlppQmxlSEJ2Y25SeklEMDlQU0FuYjJKcVpXTjBKeUFtSmlCMGVYQmxiMllnYlc5a2RXeGxJRDA5UFNBbmIySnFaV04wSnlsY2JseDBYSFJ0YjJSMWJHVXVaWGh3YjNKMGN5QTlJR1poWTNSdmNua29LVHRjYmx4MFpXeHpaU0JwWmloMGVYQmxiMllnWkdWbWFXNWxJRDA5UFNBblpuVnVZM1JwYjI0bklDWW1JR1JsWm1sdVpTNWhiV1FwWEc1Y2RGeDBaR1ZtYVc1bEtGdGRMQ0JtWVdOMGIzSjVLVHRjYmx4MFpXeHpaU0JwWmloMGVYQmxiMllnWlhod2IzSjBjeUE5UFQwZ0oyOWlhbVZqZENjcFhHNWNkRngwWlhod2IzSjBjMXRjSW1kaGJYVjRYQ0pkSUQwZ1ptRmpkRzl5ZVNncE8xeHVYSFJsYkhObFhHNWNkRngwY205dmRGdGNJbWRoYlhWNFhDSmRJRDBnWm1GamRHOXllU2dwTzF4dWZTa29kR2hwY3l3Z1puVnVZM1JwYjI0b0tTQjdYRzV5WlhSMWNtNGdYRzVjYmx4dUx5OGdWMFZDVUVGRFN5QkdUMDlVUlZJZ0x5OWNiaTh2SUhkbFluQmhZMnN2ZFc1cGRtVnljMkZzVFc5a2RXeGxSR1ZtYVc1cGRHbHZiaUlzSWlCY2RDOHZJRlJvWlNCdGIyUjFiR1VnWTJGamFHVmNiaUJjZEhaaGNpQnBibk4wWVd4c1pXUk5iMlIxYkdWeklEMGdlMzA3WEc1Y2JpQmNkQzh2SUZSb1pTQnlaWEYxYVhKbElHWjFibU4wYVc5dVhHNGdYSFJtZFc1amRHbHZiaUJmWDNkbFluQmhZMnRmY21WeGRXbHlaVjlmS0cxdlpIVnNaVWxrS1NCN1hHNWNiaUJjZEZ4MEx5OGdRMmhsWTJzZ2FXWWdiVzlrZFd4bElHbHpJR2x1SUdOaFkyaGxYRzRnWEhSY2RHbG1LR2x1YzNSaGJHeGxaRTF2WkhWc1pYTmJiVzlrZFd4bFNXUmRLU0I3WEc0Z1hIUmNkRngwY21WMGRYSnVJR2x1YzNSaGJHeGxaRTF2WkhWc1pYTmJiVzlrZFd4bFNXUmRMbVY0Y0c5eWRITTdYRzRnWEhSY2RIMWNiaUJjZEZ4MEx5OGdRM0psWVhSbElHRWdibVYzSUcxdlpIVnNaU0FvWVc1a0lIQjFkQ0JwZENCcGJuUnZJSFJvWlNCallXTm9aU2xjYmlCY2RGeDBkbUZ5SUcxdlpIVnNaU0E5SUdsdWMzUmhiR3hsWkUxdlpIVnNaWE5iYlc5a2RXeGxTV1JkSUQwZ2UxeHVJRngwWEhSY2RHazZJRzF2WkhWc1pVbGtMRnh1SUZ4MFhIUmNkR3c2SUdaaGJITmxMRnh1SUZ4MFhIUmNkR1Y0Y0c5eWRITTZJSHQ5WEc0Z1hIUmNkSDA3WEc1Y2JpQmNkRngwTHk4Z1JYaGxZM1YwWlNCMGFHVWdiVzlrZFd4bElHWjFibU4wYVc5dVhHNGdYSFJjZEcxdlpIVnNaWE5iYlc5a2RXeGxTV1JkTG1OaGJHd29iVzlrZFd4bExtVjRjRzl5ZEhNc0lHMXZaSFZzWlN3Z2JXOWtkV3hsTG1WNGNHOXlkSE1zSUY5ZmQyVmljR0ZqYTE5eVpYRjFhWEpsWDE4cE8xeHVYRzRnWEhSY2RDOHZJRVpzWVdjZ2RHaGxJRzF2WkhWc1pTQmhjeUJzYjJGa1pXUmNiaUJjZEZ4MGJXOWtkV3hsTG13Z1BTQjBjblZsTzF4dVhHNGdYSFJjZEM4dklGSmxkSFZ5YmlCMGFHVWdaWGh3YjNKMGN5QnZaaUIwYUdVZ2JXOWtkV3hsWEc0Z1hIUmNkSEpsZEhWeWJpQnRiMlIxYkdVdVpYaHdiM0owY3p0Y2JpQmNkSDFjYmx4dVhHNGdYSFF2THlCbGVIQnZjMlVnZEdobElHMXZaSFZzWlhNZ2IySnFaV04wSUNoZlgzZGxZbkJoWTJ0ZmJXOWtkV3hsYzE5ZktWeHVJRngwWDE5M1pXSndZV05yWDNKbGNYVnBjbVZmWHk1dElEMGdiVzlrZFd4bGN6dGNibHh1SUZ4MEx5OGdaWGh3YjNObElIUm9aU0J0YjJSMWJHVWdZMkZqYUdWY2JpQmNkRjlmZDJWaWNHRmphMTl5WlhGMWFYSmxYMTh1WXlBOUlHbHVjM1JoYkd4bFpFMXZaSFZzWlhNN1hHNWNiaUJjZEM4dklHUmxabWx1WlNCblpYUjBaWElnWm5WdVkzUnBiMjRnWm05eUlHaGhjbTF2Ym5rZ1pYaHdiM0owYzF4dUlGeDBYMTkzWldKd1lXTnJYM0psY1hWcGNtVmZYeTVrSUQwZ1puVnVZM1JwYjI0b1pYaHdiM0owY3l3Z2JtRnRaU3dnWjJWMGRHVnlLU0I3WEc0Z1hIUmNkR2xtS0NGZlgzZGxZbkJoWTJ0ZmNtVnhkV2x5WlY5ZkxtOG9aWGh3YjNKMGN5d2dibUZ0WlNrcElIdGNiaUJjZEZ4MFhIUlBZbXBsWTNRdVpHVm1hVzVsVUhKdmNHVnlkSGtvWlhod2IzSjBjeXdnYm1GdFpTd2dlMXh1SUZ4MFhIUmNkRngwWTI5dVptbG5kWEpoWW14bE9pQm1ZV3h6WlN4Y2JpQmNkRngwWEhSY2RHVnVkVzFsY21GaWJHVTZJSFJ5ZFdVc1hHNGdYSFJjZEZ4MFhIUm5aWFE2SUdkbGRIUmxjbHh1SUZ4MFhIUmNkSDBwTzF4dUlGeDBYSFI5WEc0Z1hIUjlPMXh1WEc0Z1hIUXZMeUJuWlhSRVpXWmhkV3gwUlhod2IzSjBJR1oxYm1OMGFXOXVJR1p2Y2lCamIyMXdZWFJwWW1sc2FYUjVJSGRwZEdnZ2JtOXVMV2hoY20xdmJua2diVzlrZFd4bGMxeHVJRngwWDE5M1pXSndZV05yWDNKbGNYVnBjbVZmWHk1dUlEMGdablZ1WTNScGIyNG9iVzlrZFd4bEtTQjdYRzRnWEhSY2RIWmhjaUJuWlhSMFpYSWdQU0J0YjJSMWJHVWdKaVlnYlc5a2RXeGxMbDlmWlhOTmIyUjFiR1VnUDF4dUlGeDBYSFJjZEdaMWJtTjBhVzl1SUdkbGRFUmxabUYxYkhRb0tTQjdJSEpsZEhWeWJpQnRiMlIxYkdWYkoyUmxabUYxYkhRblhUc2dmU0E2WEc0Z1hIUmNkRngwWm5WdVkzUnBiMjRnWjJWMFRXOWtkV3hsUlhod2IzSjBjeWdwSUhzZ2NtVjBkWEp1SUcxdlpIVnNaVHNnZlR0Y2JpQmNkRngwWDE5M1pXSndZV05yWDNKbGNYVnBjbVZmWHk1a0tHZGxkSFJsY2l3Z0oyRW5MQ0JuWlhSMFpYSXBPMXh1SUZ4MFhIUnlaWFIxY200Z1oyVjBkR1Z5TzF4dUlGeDBmVHRjYmx4dUlGeDBMeThnVDJKcVpXTjBMbkJ5YjNSdmRIbHdaUzVvWVhOUGQyNVFjbTl3WlhKMGVTNWpZV3hzWEc0Z1hIUmZYM2RsWW5CaFkydGZjbVZ4ZFdseVpWOWZMbThnUFNCbWRXNWpkR2x2YmlodlltcGxZM1FzSUhCeWIzQmxjblI1S1NCN0lISmxkSFZ5YmlCUFltcGxZM1F1Y0hKdmRHOTBlWEJsTG1oaGMwOTNibEJ5YjNCbGNuUjVMbU5oYkd3b2IySnFaV04wTENCd2NtOXdaWEowZVNrN0lIMDdYRzVjYmlCY2RDOHZJRjlmZDJWaWNHRmphMTl3ZFdKc2FXTmZjR0YwYUY5ZlhHNGdYSFJmWDNkbFluQmhZMnRmY21WeGRXbHlaVjlmTG5BZ1BTQmNJaTljSWp0Y2JseHVJRngwTHk4Z1RHOWhaQ0JsYm5SeWVTQnRiMlIxYkdVZ1lXNWtJSEpsZEhWeWJpQmxlSEJ2Y25SelhHNGdYSFJ5WlhSMWNtNGdYMTkzWldKd1lXTnJYM0psY1hWcGNtVmZYeWhmWDNkbFluQmhZMnRmY21WeGRXbHlaVjlmTG5NZ1BTQXdLVHRjYmx4dVhHNWNiaTh2SUZkRlFsQkJRMHNnUms5UFZFVlNJQzh2WEc0dkx5QjNaV0p3WVdOckwySnZiM1J6ZEhKaGNDQXhNekJqTnpJeU1qSmtNV015T0dJeU56RXpZU0lzSW1sdGNHOXlkQ0I3WTI5dFltbHVaVkpsWkhWalpYSXNJR055WldGMFpWTjBiM0psTENCamIyMWlhVzVsVlhCa1lYUmxjbjBnWm5KdmJTQW5MaTl6ZEdGMFpVMWhibUZuWlhJblhHNWNiaThxS2x4dUlDb2dWR2hsSUdGdWFXMWhkR2x2YmlCc2IyOXdJR3RsZVNCbWIzSWdZMkZ1WTJWc0lHRnVhVzFoZEdsdmJseHVJQ292WEc1c1pYUWdYMkZ1YVcxaGRHbHZia3h2YjNCTFpYa2dQU0J1ZFd4c1hHNHZLaXBjYmlBcUlFRmpZM1Z0ZFd4aGRHOXlJR1p2Y2lCMGFXMWxMV0poYzJWa0lHRnVhVzFoZEdsdmJseHVJQ292WEc1c1pYUWdYMkZqWTNWdGRXeGhkRzl5SUQwZ01GeHVMeW9xWEc0Z0tpQlVhR1VnWkdWbVlYVnNkQ0JtY0hOY2JpQXFMMXh1YkdWMElGOW1jSE1nUFNBMk1GeHVMeW9xWEc0Z0tpQlVhR1VnYzNSdmNtVWdabTl5SUdkaGJXVmNiaUFxTDF4dWJHVjBJRjl6ZEc5eVpTQTlJSHQ5WEc1Y2JteGxkQ0JmZFhCa1lYUmxjazFoY0NBOUlIdDlYRzVjYm14bGRDQmZjbVZ1WkdWeVpYSk5ZWEFnUFNCN2ZWeHVYRzR2S2lwY2JpQXFJRlJ5YVdkblpYSWdaMkZ0WlNCc2IyOXdYRzRnS2k5Y2JtWjFibU4wYVc5dUlGOXNiMjl3SUNoc1lYTjBWR2x0WlhOMFlXMXdLU0I3WEc0Z0lGOWhibWx0WVhScGIyNU1iMjl3UzJWNUlEMGdkMmx1Wkc5M0xuSmxjWFZsYzNSQmJtbHRZWFJwYjI1R2NtRnRaU2dvS1NBOVBpQjdYRzRnSUNBZ1kyOXVjM1FnYm05M0lEMGdSR0YwWlM1dWIzY29LVnh1SUNBZ0lHTnZibk4wSUdSMElEMGdNVEF3TUNBdklGOW1jSE5jYmlBZ0lDQmZZV05qZFcxMWJHRjBiM0lnS3owZ2JtOTNJQzBnYkdGemRGUnBiV1Z6ZEdGdGNGeHVYRzRnSUNBZ2FXWWdLRjloWTJOMWJYVnNZWFJ2Y2lBK1BTQmtkQ2tnZTF4dUlDQWdJQ0FnZDJocGJHVWdLRjloWTJOMWJYVnNZWFJ2Y2lBK1BTQmtkQ2tnZTF4dUlDQWdJQ0FnSUNCZllXTmpkVzExYkdGMGIzSWdMVDBnWkhSY2JpQWdJQ0FnSUgxY2JpQWdJQ0FnSUdadmNpQW9iR1YwSUd0bGVTQnBiaUJmY21WdVpHVnlaWEpOWVhBcElIdGNiaUFnSUNBZ0lDQWdiR1YwSUhKbGJtUmxjbVZ5SUQwZ1gzSmxibVJsY21WeVRXRndXMnRsZVYxY2JpQWdJQ0FnSUNBZ2NtVnVaR1Z5WlhJdWNtVnVaR1Z5VTNSaGRHVWdQU0J5Wlc1a1pYSmxjaWh5Wlc1a1pYSmxjaTV5Wlc1a1pYSlRkR0YwWlN3Z2NtVnVaR1Z5WlhJdVptbHVZV3hTWlc1a1pYSlRkR0YwWlN3Z1pIUXBYRzRnSUNBZ0lDQjlYRzRnSUNBZ2ZWeHVJQ0FnSUY5c2IyOXdLRzV2ZHlsY2JpQWdmU2xjYm4xY2JseHVZMjl1YzNRZ1oyRnRkWGdnUFNCN1hHNGdJR052Ym1acFp6b2dLR052Ym1acFp5QTlJSHQ5S1NBOVBpQjdYRzRnSUNBZ0x5OGdRMjl1Wm1sbklIUm9aU0J3Y21sMllYUmxJR2RzYjJKaGJITmNiaUFnSUNCZlpuQnpJRDBnWTI5dVptbG5MbVp3Y3lCOGZDQmZabkJ6WEc1Y2JpQWdJQ0JzWlhRZ1kyOXVkR0ZwYm1WeUlEMGdZMjl1Wm1sbkxtTnZiblJoYVc1bGNseHVYRzRnSUNBZ0x5OGdRM0psWVhSbElHZGhiV1VnYkdGNVpYSnpYRzRnSUNBZ1kyOXVabWxuTG14aGVXVnljeTVtYjNKRllXTm9LQ2hzWVhsbGNpa2dQVDRnZTF4dUlDQWdJQ0FnYkdWMElHTmhiblpoY3lBOUlHUnZZM1Z0Wlc1MExtTnlaV0YwWlVWc1pXMWxiblFvSjJOaGJuWmhjeWNwWEc0Z0lDQWdJQ0JqYjI1MFlXbHVaWEl1WVhCd1pXNWtRMmhwYkdRb1kyRnVkbUZ6S1Z4dVhHNGdJQ0FnSUNCZmRYQmtZWFJsY2sxaGNGdHNZWGxsY2k1dVlXMWxYU0E5SUd4aGVXVnlMblZ3WkdGMFpYSmNiaUFnSUNBZ0lGOXlaVzVrWlhKbGNrMWhjRnRzWVhsbGNpNXVZVzFsWFNBOUlHeGhlV1Z5TG5KbGJtUmxjaTVpYVc1a0tHNTFiR3dzSUdOaGJuWmhjeWxjYmlBZ0lDQjlLVnh1WEc0Z0lDQWdMeThnUTNKbFlYUmxJR2RoYldVZ2MzUnZjbVZjYmlBZ0lDQmZjM1J2Y21VZ1BTQmpjbVZoZEdWVGRHOXlaU2hqYjIxaWFXNWxVbVZrZFdObGNpaGpiMjVtYVdjdWNtVmtkV05sY2sxaGNDd2dZMjl0WW1sdVpWVndaR0YwWlhJb1gzVndaR0YwWlhKTllYQXNJRjl5Wlc1a1pYSmxjazFoY0NrcEtWeHVJQ0FnSUdsbUlDaGpiMjVtYVdjdWFXNXBkQ2tnZTF4dUlDQWdJQ0FnWTI5dVptbG5MbWx1YVhRb1gzTjBiM0psTG1kbGRGTjBZWFJsS0NrcFhHNGdJQ0FnZlZ4dUlDQjlMRnh1WEc0Z0lHeGhlV1Z5Y3pvZ2UzMHNYRzVjYmlBZ2MzUmhjblE2SUNncElEMCtJSHRjYmlBZ0lDQmZiRzl2Y0NoRVlYUmxMbTV2ZHlncEtWeHVJQ0I5TEZ4dVhHNGdJR1JwYzNCaGRHTm9PaUFvWVdOMGFXOXVLU0E5UGlCN1hHNGdJQ0FnWDNOMGIzSmxMbVJwYzNCaGRHTm9LR0ZqZEdsdmJpbGNiaUFnZlZ4dVhHNGdJQzh2SUNwY2JpQWdMeThnSUNvZ1IyRnRaU0IzYVd4c0lHSmxJR0YyWVdsc1lXSnNaU0J2Ym1ObElHTnZibVpwWjNWeVpXUmNibjFjYmx4dVpYaHdiM0owSUdSbFptRjFiSFFnWjJGdGRYaGNibHh1WEc0dkx5QlVUMFJQWEc0dkx5QXhMaUJDZFdsc1pDQm1hV3hsSUdadmNpQkZVellnYlc5a2RXeGxjMXh1WEc1Y2JpOHZJRmRGUWxCQlEwc2dSazlQVkVWU0lDOHZYRzR2THlBdUwzTnlZeTluWVcxMWVDNXFjeUlzSW1WNGNHOXlkQ0JtZFc1amRHbHZiaUJqY21WaGRHVlRkRzl5WlNBb2NtVmtkV05sY2lrZ2UxeHVJQ0F2THlCSmJtbDBJSE4wWVhSbFhHNGdJR3hsZENCemRHRjBaU0E5SUhKbFpIVmpaWElvS1Z4dVhHNGdJSEpsZEhWeWJpQjdYRzRnSUNBZ0x5b3FYRzRnSUNBZ0lDb2dSR2x6Y0dGMFkyZ2dZV04wYVc5dUlIUnZJSFJ5YVdkblpYSWdjM1JoZEdVZ1kyaGhibWRsYzF4dUlDQWdJQ0FxTDF4dUlDQWdJR1JwYzNCaGRHTm9PaUFvWVdOMGFXOXVJRDBnZTMwcElEMCtJSHRjYmlBZ0lDQWdJR2xtSUNod2NtOWpaWE56TG1WdWRpNWpiMlJsSUQwOVBTQW5SRVZXSnlrZ2UxeHVJQ0FnSUNBZ0lDQXZMeUJzYjJjZ1lXTjBhVzl1Y3lCcGJpQmpiMjV6YjJ4bFhHNGdJQ0FnSUNBZ0lHTnZibk52YkdVdVozSnZkWEFvWVdOMGFXOXVMblI1Y0dVcFhHNGdJQ0FnSUNBZ0lHTnZibk52YkdVdWFXNW1ieWduSldOaVpXWnZjbVU2Snl3Z0oyTnZiRzl5T2lCbmNtVmxiaWNzSUhOMFlYUmxLVnh1SUNBZ0lDQWdJQ0JqYjI1emIyeGxMbWx1Wm04b0p5VmpZV04wYVc5dU9pY3NJQ2RqYjJ4dmNqb2djbVZrSnl3Z1lXTjBhVzl1S1Z4dUlDQWdJQ0FnZlZ4dUlDQWdJQ0FnWEc0Z0lDQWdJQ0F2THlCVmNHUmhkR1VnYzNSaGRHVmNiaUFnSUNBZ0lITjBZWFJsSUQwZ2NtVmtkV05sY2loemRHRjBaU3dnWVdOMGFXOXVLVnh1SUNBZ0lDQWdMeThnVTNSaGRHVWdiV0Z1WVdkbGNpQmtiMlZ6YmlkMElHTmhjbVVnWVdKdmRYUWdibTkwYVdOcGJtZGNiaUFnSUNBZ0lDOHZJR2RoYldVZ2RHOGdkWEJrWVhSbElITjBZWFJsTGlCSmJuTjBaV0ZrSUhKbFpIVmpaWEp6WEc0Z0lDQWdJQ0F2THlCemFHOTFiR1FnYzJWMElHUnBjblI1SUhOMFlYUmxJR1p2Y2lCbllXMWxJR3h2YjNBZ2RHOWNiaUFnSUNBZ0lDOHZJSFJ5YVdkblpYSWdkWEJrWVhSbFhHNWNiaUFnSUNBZ0lHbG1JQ2h3Y205alpYTnpMbVZ1ZGk1amIyUmxJRDA5UFNBblJFVldKeWtnZTF4dUlDQWdJQ0FnSUNBdkx5QnNiMmNnWVdOMGFXOXVjeUJwYmlCamIyNXpiMnhsWEc0Z0lDQWdJQ0FnSUdOdmJuTnZiR1V1YVc1bWJ5Z25KV05oWm5SbGNqb25MQ0FuWTI5c2IzSTZJR2R5WldWdUp5d2djM1JoZEdVcFhHNGdJQ0FnSUNBZ0lHTnZibk52YkdVdVozSnZkWEJGYm1Rb0tWeHVJQ0FnSUNBZ2ZWeHVJQ0FnSUgwc1hHNGdJQ0FnTHlvcVhHNGdJQ0FnSUNvZ1VtVjBkWEp1SUhSb1pTQmpkWEp5Wlc1MElITjBZWFJsSUdadmNpQm5hWFpsYmlCclpYbGNiaUFnSUNBZ0tpQlVhR2x6SUdseklIUnZJR0ZzYkc5M0lHRndjR3hwWTJGMGFXOXVJSFJ2SUNkamIyNXVaV04wSnlCMGJ5QnpkR0YwWlZ4dUlDQWdJQ0FxTDF4dUlDQWdJR2RsZEZOMFlYUmxPaUFvYzNSaGRHVkxaWGtwSUQwK0lIdGNiaUFnSUNBZ0lHbG1JQ2doYzNSaGRHVkxaWGtwSUh0Y2JpQWdJQ0FnSUNBZ2NtVjBkWEp1SUhOMFlYUmxYRzRnSUNBZ0lDQjlYRzRnSUNBZ0lDQmxiSE5sSUh0Y2JpQWdJQ0FnSUNBZ2NtVjBkWEp1SUhOMFlYUmxXM04wWVhSbFMyVjVYVnh1SUNBZ0lDQWdmVnh1SUNBZ0lIMWNiaUFnZlZ4dWZWeHVYRzR2THlCQmMzTjFiV1VnZEdobElISmxZM1ZsY2sxaGNDQnBjeUJoSUdac1lYUWdiV0Z3SUhSdklHRnNiQ0J5WldSMVkyVnljMXh1Wlhod2IzSjBJR1oxYm1OMGFXOXVJR052YldKcGJtVlNaV1IxWTJWeUlDaHlaV1IxWTJWeVRXRndJRDBnZTMwc0lIVndaR0YwWlhJcElIdGNibHh1SUNBdkx5QkhaVzVsY21GMFpTQmhJR052YldKcGJtVmtJSEpsWkhWalpYSWdablZ1WTNScGIyNWNiaUFnY21WMGRYSnVJQ2h6ZEdGMFpTQTlJSHQ5TENCaFkzUnBiMjRnUFNCN2ZTa2dQVDRnZTF4dUlDQWdJR3hsZENCdVpYZFRkR0YwWlNBOUlIdDlMRnh1SUNBZ0lDQWdJQ0JrYVhKMGVVdGxlWE1nUFNCYlhWeHVYRzRnSUNBZ0x5OGdVM0J5WldGa0lIUm9aU0JoWTNScGIyNGdkRzhnWVd4c0lISmxaSFZqWlhKeklHbHVjMmxrWlNCMGFHVWdZMjl0WW1sdVpXUWdiMjVsWEc0Z0lDQWdabTl5SUNoc1pYUWdhMlY1SUdsdUlISmxaSFZqWlhKTllYQXBJSHRjYmlBZ0lDQWdJQzh2SUZCaGMzTWdkR2hsSUhkb2IyeGxJSE4wWVhSbElHUnZkMjRnWVhNZ1lYSm5kVzFsYm5RZ1ptOXlYRzRnSUNBZ0lDQXZMeUJqY205emN5QnpkR0YwWlNCclpYa2dZV05qWlhOelhHNGdJQ0FnSUNCc1pYUWdjbVZrZFdObFpGTjBZWFJsSUQwZ2NtVmtkV05sY2sxaGNGdHJaWGxkS0hOMFlYUmxXMnRsZVYwc0lHRmpkR2x2Yml3Z2MzUmhkR1VwWEc1Y2JpQWdJQ0FnSUdsbUlDaHlaV1IxWTJWa1UzUmhkR1VnSVQwOUlITjBZWFJsVzJ0bGVWMHBJSHRjYmlBZ0lDQWdJQ0FnWkdseWRIbExaWGx6TG5CMWMyZ29hMlY1S1Z4dUlDQWdJQ0FnZlZ4dVhHNGdJQ0FnSUNCdVpYZFRkR0YwWlZ0clpYbGRJRDBnY21Wa2RXTmxaRk4wWVhSbFhHNGdJQ0FnZlZ4dVhHNGdJQ0FnTHk4Z1EyRnNiQ0IxY0dSaGRHVWdablZ1WTNScGIyNGdabTl5SUdWaFkyZ2djbVZrZFdObFpDQnpkR0YwWlZ4dUlDQWdJSFZ3WkdGMFpYSW9ibVYzVTNSaGRHVXNJR1JwY25SNVMyVjVjeWxjYmx4dUlDQWdJQzh2SUdScGNuUjVTMlY1Y3k1bWIzSkZZV05vS0Noa2FYSjBlVXRsZVNrZ1BUNGdlMXh1SUNBZ0lDOHZJQ0FnZFhCa1lYUmxjazFoY0Z0a2FYSjBlVXRsZVYwb2JtVjNVM1JoZEdVc0lHUnBjblI1UzJWNUtWeHVJQ0FnSUM4dklIMHBYRzVjYmlBZ0lDQnlaWFIxY200Z2JtVjNVM1JoZEdWY2JpQWdmVnh1ZlZ4dVhHNWxlSEJ2Y25RZ1puVnVZM1JwYjI0Z1kyOXRZbWx1WlZWd1pHRjBaWElnS0hWd1pHRjBaWEpOWVhBZ1BTQjdmU3dnY21WdVpHVnlaWEpOWVhBZ1BTQjdmU2tnZTF4dUlDQXZMeUJIWlc1bGNtRjBaU0JqYjIxaWFXNWxaQ0IxY0dSaGRHVnlJR1oxYm1OMGFXOXVJR1p2Y2lCaGJHd2dkWEJrWVhSbGNuTmNiaUFnY21WMGRYSnVJQ2h6ZEdGMFpTQTlJSHQ5TENCa2FYSjBlVXRsZVhNZ1BTQmJYU2tnUFQ0Z2UxeHVJQ0FnSUd4bGRDQnVaWGRHYVc1aGJGSmxibVJsY2xOMFlYUmxJRDBnZTMxY2JpQWdJQ0JtYjNJZ0tHeGxkQ0JyWlhrZ2FXNGdkWEJrWVhSbGNrMWhjQ2tnZTF4dUlDQWdJQ0FnTHk4Z1EyOXRjSFYwWlNCMGFHVWdabWx1WVd3Z2NtVnVaR1Z5SUhOMFlYUmxJR0Z1WkNCd1lYTnpJR2x1ZEc4Z2NtVnVaR1Z5WlhKY2JpQWdJQ0FnSUhKbGJtUmxjbVZ5VFdGd1cydGxlVjB1Wm1sdVlXeFNaVzVrWlhKVGRHRjBaU0E5SUhWd1pHRjBaWEpOWVhCYmEyVjVYU2h5Wlc1a1pYSmxjazFoY0Z0clpYbGRMbVpwYm1Gc1VtVnVaR1Z5VTNSaGRHVXNJSE4wWVhSbExDQmthWEowZVV0bGVYTXBYRzRnSUNBZ2ZWeHVJQ0I5WEc1OVhHNWNibHh1WEc0dkx5QlhSVUpRUVVOTElFWlBUMVJGVWlBdkwxeHVMeThnTGk5emNtTXZjM1JoZEdWTllXNWhaMlZ5TG1weklsMHNJbk52ZFhKalpWSnZiM1FpT2lJaWZRPT1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2Rpc3QvZ2FtdXguanNcbi8vIG1vZHVsZSBpZCA9IDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IGdhbXV4IGZyb20gJy4uLy4uL2Rpc3QvZ2FtdXgnXG5pbXBvcnQgc25ha2VSZWR1Y2VyIGZyb20gJy4vc25ha2VSZWR1Y2VyJ1xuaW1wb3J0IHdvcmxkUmVkdWNlciBmcm9tICcuL3dvcmxkUmVkdWNlcidcbmltcG9ydCB7d29ybGRMYXllclVwZGF0ZXIsIHdvcmxkTGF5ZXJSZW5kZXJ9IGZyb20gJy4vd29ybGRMYXllcidcbmltcG9ydCB7c25ha2VMYXllclVwZGF0ZXIsIHNuYWtlTGF5ZXJSZW5kZXJ9IGZyb20gJy4vc25ha2VMYXllcidcbmltcG9ydCB7IFxuICBnYW1lUmVzaXplLFxuICBzZXRTdGFyUG9zaXRpb24sXG4gIHNldFNuYWtlQm9keSxcbiAgbGVmdEtleURvd24sXG4gIHJpZ2h0S2V5RG93bixcbiAgdXBLZXlEb3duLFxuICBkb3duS2V5RG93blxufSBmcm9tICcuL2FjdGlvbnMnXG5cbmltcG9ydCAnLi9pbmRleC5zY3NzJ1xuXG5jb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm9vdCcpXG5cbmdhbXV4LmNvbmZpZyh7XG4gIGZwczogNjAsXG5cbiAgY29udGFpbmVyLFxuXG4gIGxheWVyczogW3tcbiAgICBuYW1lOiAnd29ybGRMYXllcicsXG4gICAgdXBkYXRlcjogd29ybGRMYXllclVwZGF0ZXIsXG4gICAgcmVuZGVyOiB3b3JsZExheWVyUmVuZGVyXG4gIH0sIHtcbiAgICBuYW1lOiAnc25ha2VMYXllcicsXG4gICAgdXBkYXRlcjogc25ha2VMYXllclVwZGF0ZXIsXG4gICAgcmVuZGVyOiBzbmFrZUxheWVyUmVuZGVyXG4gIH1dLFxuXG4gIC8qKlxuICAgKiBUaGUgbWFwIGZvciBhbGwgcmVkdWNlcnMgdGhlIHN0b3JlIGNhbiBicmVhayBkb3duXG4gICAqL1xuICByZWR1Y2VyTWFwOiB7XG4gICAgc25ha2U6IHNuYWtlUmVkdWNlcixcbiAgICB3b3JsZDogd29ybGRSZWR1Y2VyXG4gIH0sXG5cbiAgLyoqXG4gICAqIGluaXQgZ2FtZS4gR2V0dGluZyBjYWxsZWQgYmVmb3JlIGdhbWUgbG9vcCBzdGFydHNcbiAgICovXG4gIGluaXQ6IChnYW1lU3RhdGUpID0+IHtcbiAgICBjb25zb2xlLmxvZygnaW5pdCcpXG4gICAgLy8gTWFrZSBzdXJlIGNvbnRhaW5lciBkaW1lbnNpb24gaXMgaW5pdFxuICAgIGdhbXV4LmRpc3BhdGNoKGdhbWVSZXNpemUoXG4gICAgICBjb250YWluZXIub2Zmc2V0V2lkdGgsXG4gICAgICBjb250YWluZXIub2Zmc2V0SGVpZ2h0XG4gICAgKSlcblxuICAgIGxldCB3b3JsZFN0YXRlID0gZ2FtZVN0YXRlWyd3b3JsZCddLFxuICAgICAgICBzbmFrZVN0YXRlID0gZ2FtZVN0YXRlWydzbmFrZSddXG5cbiAgICAvLyBJbml0IHdvcmxkIGJhc2VkIG9uIGluaXRpYWwgc3RhdGVcbiAgICBsZXQge1xuICAgICAgICAgIHJvd3MsXG4gICAgICAgICAgY29sdW1uc1xuICAgICAgICB9ID0gd29ybGRTdGF0ZSxcbiAgICAgICAgc3RhclJvdyA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHJvd3MpLFxuICAgICAgICBzdGFyQ29sdW1uID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogY29sdW1ucylcblxuICAgIGdhbXV4LmRpc3BhdGNoKHNldFN0YXJQb3NpdGlvbihzdGFyUm93LCBzdGFyQ29sdW1uKSlcblxuICAgIC8vIEluaXQgc25ha2UgYmFzZWQgb24gd29ybGRcbiAgICBsZXQgYm9keSA9IFtdXG4gICAgZG8ge1xuICAgICAgbGV0IGhlYWRSb3cgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiByb3dzKSxcbiAgICAgICAgICBoZWFkQ29sdW1uID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogY29sdW1ucylcblxuICAgICAgYm9keVswXSA9IHtcbiAgICAgICAgcm93OiBoZWFkUm93LFxuICAgICAgICBjb2x1bW46IGhlYWRDb2x1bW5cbiAgICAgIH1cblxuICAgICAgbGV0IGlzSG9yaXpvbnRhbCA9IE1hdGgucmFuZG9tKCkgPiAwLjVcbiAgICAgIGJvZHlbMV0gPSB7XG4gICAgICAgIHJvdzogaGVhZFJvdyArIChpc0hvcml6b250YWwgPyAoTWF0aC5yYW5kb20oKSA+IDAuNSA/IDEgOiAtMSkgOiAwKSxcbiAgICAgICAgY29sdW1uOiBoZWFkQ29sdW1uICsgKGlzSG9yaXpvbnRhbCA/IDAgOiAoTWF0aC5yYW5kb20oKSA+IDAuNSA/IDEgOiAtMSkpLFxuICAgICAgfVxuXG4gICAgfSB3aGlsZSAoIWJvZHkuZXZlcnkoKGJvZHlCbG9jaykgPT4ge1xuICAgICAgcmV0dXJuIGJvZHlCbG9jay5yb3cgIT09IHN0YXJSb3cgXG4gICAgICAmJiBib2R5QmxvY2suY29sdW1uICE9PSBzdGFyQ29sdW1uIFxuICAgICAgJiYgYm9keUJsb2NrLnJvdyA+PSAwICYmIGJvZHlCbG9jay5yb3cgPCByb3dzXG4gICAgICAmJiBib2R5QmxvY2suY29sdW1uID49IDAgJiYgYm9keUJsb2NrLmNvbHVtbiA8IGNvbHVtbnNcbiAgICB9KSlcbiAgICBnYW11eC5kaXNwYXRjaChzZXRTbmFrZUJvZHkoYm9keSkpXG5cbiAgICAvLyBTZXR1cCBsaXN0ZW5lclxuICAgIHdpbmRvdy5vbmxvYWQgPSB3aW5kb3cub25yZXNpemUgPSAoKSA9PiB7XG4gICAgICBnYW11eC5kaXNwYXRjaChnYW1lUmVzaXplKFxuICAgICAgICBjb250YWluZXIub2Zmc2V0V2lkdGgsXG4gICAgICAgIGNvbnRhaW5lci5vZmZzZXRIZWlnaHRcbiAgICAgICkpXG4gICAgfVxuXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIChldnQpID0+IHtcbiAgICAgIHN3aXRjaCAoZXZ0LmtleUNvZGUpIHtcbiAgICAgICAgY2FzZSAzNzogLy8gTGVmdFxuICAgICAgICAgIGdhbXV4LmRpc3BhdGNoKGxlZnRLZXlEb3duKCkpXG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgY2FzZSAzODogLy8gVXBcbiAgICAgICAgICBnYW11eC5kaXNwYXRjaCh1cEtleURvd24oKSlcbiAgICAgICAgICBicmVha1xuICAgICAgICBjYXNlIDM5OiAvLyBSaWdodFxuICAgICAgICAgIGdhbXV4LmRpc3BhdGNoKHJpZ2h0S2V5RG93bigpKVxuICAgICAgICAgIGJyZWFrXG4gICAgICAgIGNhc2UgNDA6IC8vIERvd25cbiAgICAgICAgICBnYW11eC5kaXNwYXRjaChkb3duS2V5RG93bigpKVxuICAgICAgICAgIGJyZWFrXG4gICAgICB9XG4gICAgfSlcblxuICAgIC8vIEZvciBtb2JpbGVcbiAgICBsZXQgdG91Y2hlcyA9IHtcbiAgICAgIHRvdWNoc3RhcnQ6IE9iamVjdC5hc3NpZ24oe30sIHtcbiAgICAgICAgeDogLTEsXG4gICAgICAgIHk6IC0xXG4gICAgICB9KSxcbiAgICAgIHRvdWNobW92ZTogT2JqZWN0LmFzc2lnbih7fSwge1xuICAgICAgICB4OiAtMSxcbiAgICAgICAgeTogLTFcbiAgICAgIH0pXG4gICAgfVxuICAgIFxuICAgIGZ1bmN0aW9uIGhhbmRsZVRvdWNoIChldnQpIHtcbiAgICAgIGlmICh0eXBlb2YgZXZ0LnRvdWNoZXMgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHJldHVybiBcbiAgICAgIH1cblxuICAgICAgbGV0IHRvdWNoID0gZXZ0LnRvdWNoZXNbMF1cbiAgICAgIHN3aXRjaCAoZXZ0LnR5cGUpIHtcbiAgICAgICAgY2FzZSAndG91Y2hzdGFydCc6XG4gICAgICAgIGNhc2UgJ3RvdWNobW92ZSc6XG4gICAgICAgICAgdG91Y2hlc1tldnQudHlwZV0ueCA9IHRvdWNoLnBhZ2VYXG4gICAgICAgICAgdG91Y2hlc1tldnQudHlwZV0ueSA9IHRvdWNoLnBhZ2VZXG4gICAgICAgICAgYnJlYWtcblxuICAgICAgICBjYXNlICd0b3VjaGVuZCc6IHtcbiAgICAgICAgICBpZiAodG91Y2hlcy50b3VjaHN0YXJ0LnggPiAtMSAmJiB0b3VjaGVzLnRvdWNobW92ZS54ID4gLTEpIHtcbiAgICAgICAgICAgIGxldCBkeCA9IHRvdWNoZXMudG91Y2htb3ZlLnggLSB0b3VjaGVzLnRvdWNoc3RhcnQueCxcbiAgICAgICAgICAgICAgICBkeSA9IHRvdWNoZXMudG91Y2htb3ZlLnkgLSB0b3VjaGVzLnRvdWNoc3RhcnQueVxuXG4gICAgICAgICAgICBpZiAoTWF0aC5hYnMoZHgpID4gTWF0aC5hYnMoZHkpKSB7XG4gICAgICAgICAgICAgIC8vIEhvcml6b250YWwgbW92ZVxuICAgICAgICAgICAgICBpZiAoZHggPiAwKSB7XG4gICAgICAgICAgICAgICAgZ2FtdXguZGlzcGF0Y2gocmlnaHRLZXlEb3duKCkpXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgZ2FtdXguZGlzcGF0Y2gobGVmdEtleURvd24oKSlcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgIC8vIFZlcnRpY2FsIG1vdmVcbiAgICAgICAgICAgICAgaWYgKGR5ID4gMCkge1xuICAgICAgICAgICAgICAgIGdhbXV4LmRpc3BhdGNoKGRvd25LZXlEb3duKCkpXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgZ2FtdXguZGlzcGF0Y2godXBLZXlEb3duKCkpXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBldnQucHJldmVudERlZmF1bHQoKVxuICAgIH1cblxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCBoYW5kbGVUb3VjaClcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCBoYW5kbGVUb3VjaClcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsIGhhbmRsZVRvdWNoKVxuICB9XG59KVxuXG5nYW11eC5zdGFydCgpXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9kZW1vL3NuYWtlL2luZGV4LmpzIiwiaW1wb3J0IHtcbiAgTEVGVF9LRVlET1dOLFxuICBSSUdIVF9LRVlET1dOLFxuICBVUF9LRVlET1dOLFxuICBET1dOX0tFWURPV04sXG4gIFNFVF9TTkFLRV9CT0RZLFxuICBORVhUX0xFVkVMLFxuICBHQU1FX09WRVIsXG4gIENVVF9TTkFLRV9CT0RZXG59IGZyb20gJy4vYWN0aW9ucydcbmltcG9ydCB7XG4gIGdhbWVEZWZhdWx0LFxuICBkaXJlY3Rpb25cbn0gZnJvbSAnLi90aGVtZSdcblxuY29uc3QgaW5pdFN0YXRlID0ge1xuICAvKipcbiAgICogQSBsaW5rZWQgbGlzdCBmb3Igc25ha2UgYm9keVxuICAgKi9cbiAgYm9keTogW10sXG4gIGlzTW92ZTogZmFsc2UsXG4gIHNwZWVkOiBnYW1lRGVmYXVsdC5zcGVlZCxcbiAgcm93czogZ2FtZURlZmF1bHQucm93cyxcbiAgY29sdW1uczogZ2FtZURlZmF1bHQuY29sdW1ucyxcbiAgbGV2ZWw6IDFcbn1cblxuZXhwb3J0IGRlZmF1bHQgKHN0YXRlID0gaW5pdFN0YXRlLCBhY3Rpb24pID0+IHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuXG4gICAgY2FzZSBTRVRfU05BS0VfQk9EWToge1xuICAgICAgbGV0IHtcbiAgICAgICAgYm9keSxcbiAgICAgIH0gPSBhY3Rpb25cblxuICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XG4gICAgICAgIGJvZHksXG4gICAgICAgIGlzTW92ZTogdHJ1ZVxuICAgICAgfSlcbiAgICB9XG5cbiAgICBjYXNlIFVQX0tFWURPV046IHtcbiAgICAgIGxldCBib2R5ID0gc3RhdGUuYm9keS5zbGljZSgpXG5cbiAgICAgIGlmIChib2R5WzBdLnJvdyA9PT0gYm9keVsxXS5yb3cgKyAxKSB7XG4gICAgICAgIC8vIEhpdCBiYWNrd2FyZHMgXG4gICAgICAgIC8vIFRoaXMgc2hvdWxkIHRyaWdnZXIgbm90aGluZ1xuICAgICAgICByZXR1cm4gc3RhdGVcbiAgICAgIH1cblxuICAgICAgYm9keS5yZXZlcnNlKCkucmVkdWNlKChmaXJzdCwgc2Vjb25kKSA9PiB7XG4gICAgICAgIGZpcnN0LnJvdyA9IHNlY29uZC5yb3dcbiAgICAgICAgZmlyc3QuY29sdW1uID0gc2Vjb25kLmNvbHVtblxuICAgICAgICByZXR1cm4gc2Vjb25kIFxuICAgICAgfSlcbiAgICAgIGJvZHkucmV2ZXJzZSgpXG5cbiAgICAgIGJvZHlbMF0ucm93IC09IDFcblxuICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XG4gICAgICAgIGlzTW92ZTogdHJ1ZSxcbiAgICAgICAgYm9keSxcbiAgICAgICAgZGlyZWN0aW9uOiBkaXJlY3Rpb24uVVBcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgY2FzZSBET1dOX0tFWURPV046IHtcbiAgICAgIGxldCBib2R5ID0gc3RhdGUuYm9keS5zbGljZSgpXG5cbiAgICAgIGlmIChib2R5WzBdLnJvdyA9PT0gYm9keVsxXS5yb3cgLSAxKSB7XG4gICAgICAgIC8vIEhpdCBiYWNrd2FyZHMgXG4gICAgICAgIC8vIFRoaXMgc2hvdWxkIHRyaWdnZXIgbm90aGluZ1xuICAgICAgICByZXR1cm4gc3RhdGVcbiAgICAgIH1cblxuICAgICAgYm9keS5yZXZlcnNlKCkucmVkdWNlKChmaXJzdCwgc2Vjb25kKSA9PiB7XG4gICAgICAgIGZpcnN0LnJvdyA9IHNlY29uZC5yb3dcbiAgICAgICAgZmlyc3QuY29sdW1uID0gc2Vjb25kLmNvbHVtblxuICAgICAgICByZXR1cm4gc2Vjb25kIFxuICAgICAgfSlcbiAgICAgIGJvZHkucmV2ZXJzZSgpXG5cbiAgICAgIGJvZHlbMF0ucm93ICs9IDFcblxuICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XG4gICAgICAgIGlzTW92ZTogdHJ1ZSxcbiAgICAgICAgYm9keSxcbiAgICAgICAgZGlyZWN0aW9uOiBkaXJlY3Rpb24uRE9XTlxuICAgICAgfSlcbiAgICB9XG5cbiAgICBjYXNlIExFRlRfS0VZRE9XTjoge1xuICAgICAgbGV0IGJvZHkgPSBzdGF0ZS5ib2R5LnNsaWNlKClcblxuICAgICAgaWYgKGJvZHlbMF0uY29sdW1uID09PSBib2R5WzFdLmNvbHVtbiArIDEpIHtcbiAgICAgICAgLy8gSGl0IGJhY2t3YXJkcyBcbiAgICAgICAgLy8gVGhpcyBzaG91bGQgdHJpZ2dlciBub3RoaW5nXG4gICAgICAgIHJldHVybiBzdGF0ZVxuICAgICAgfVxuXG4gICAgICBib2R5LnJldmVyc2UoKS5yZWR1Y2UoKGZpcnN0LCBzZWNvbmQpID0+IHtcbiAgICAgICAgZmlyc3Qucm93ID0gc2Vjb25kLnJvd1xuICAgICAgICBmaXJzdC5jb2x1bW4gPSBzZWNvbmQuY29sdW1uXG4gICAgICAgIHJldHVybiBzZWNvbmQgXG4gICAgICB9KVxuICAgICAgYm9keS5yZXZlcnNlKClcblxuICAgICAgYm9keVswXS5jb2x1bW4gLT0gMVxuXG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcbiAgICAgICAgaXNNb3ZlOiB0cnVlLFxuICAgICAgICBib2R5LFxuICAgICAgICBkaXJlY3Rpb246IGRpcmVjdGlvbi5MRUZUXG4gICAgICB9KVxuICAgIH1cblxuICAgIGNhc2UgUklHSFRfS0VZRE9XTjoge1xuICAgICAgbGV0IGJvZHkgPSBzdGF0ZS5ib2R5LnNsaWNlKClcblxuICAgICAgaWYgKGJvZHlbMF0uY29sdW1uID09PSBib2R5WzFdLmNvbHVtbiAtIDEpIHtcbiAgICAgICAgLy8gSGl0IGJhY2t3YXJkcyBcbiAgICAgICAgLy8gVGhpcyBzaG91bGQgdHJpZ2dlciBub3RoaW5nXG4gICAgICAgIHJldHVybiBzdGF0ZVxuICAgICAgfVxuXG4gICAgICBib2R5LnJldmVyc2UoKS5yZWR1Y2UoKGZpcnN0LCBzZWNvbmQpID0+IHtcbiAgICAgICAgZmlyc3Qucm93ID0gc2Vjb25kLnJvd1xuICAgICAgICBmaXJzdC5jb2x1bW4gPSBzZWNvbmQuY29sdW1uXG4gICAgICAgIHJldHVybiBzZWNvbmQgXG4gICAgICB9KVxuICAgICAgYm9keS5yZXZlcnNlKClcblxuICAgICAgYm9keVswXS5jb2x1bW4gKz0gMVxuXG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcbiAgICAgICAgaXNNb3ZlOiB0cnVlLFxuICAgICAgICBib2R5LFxuICAgICAgICBkaXJlY3Rpb246IGRpcmVjdGlvbi5SSUdIVFxuICAgICAgfSlcbiAgICB9XG5cbiAgICBjYXNlIE5FWFRfTEVWRUw6IHtcbiAgICAgIGxldCBib2R5ID0gc3RhdGUuYm9keS5zbGljZSgpLFxuICAgICAgICAgIGhlYWQgPSBib2R5WzBdLFxuICAgICAgICAgIGhlYWREaXJlY3Rpb24gPSBzdGF0ZS5kaXJlY3Rpb25cblxuICAgICAgaWYgKCFoZWFkKSB7XG4gICAgICAgIHJldHVybiBzdGF0ZVxuICAgICAgfVxuXG4gICAgICBib2R5LnVuc2hpZnQoe1xuICAgICAgICByb3c6IGhlYWREaXJlY3Rpb24gPT09IGRpcmVjdGlvbi5VUCA/IGhlYWQucm93IC0gMSA6IGhlYWREaXJlY3Rpb24gPT09IGRpcmVjdGlvbi5ET1dOID8gaGVhZC5yb3cgKyAxIDogaGVhZC5yb3csXG4gICAgICAgIGNvbHVtbjogaGVhZERpcmVjdGlvbiA9PT0gZGlyZWN0aW9uLkxFRlQgPyBoZWFkLmNvbHVtbiAtIDEgOiBoZWFkRGlyZWN0aW9uID09PSBkaXJlY3Rpb24uUklHSFQgPyBoZWFkLmNvbHVtbiArIDEgOiBoZWFkLmNvbHVtblxuICAgICAgfSlcblxuICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XG4gICAgICAgIGJvZHksXG4gICAgICAgIGxldmVsOiBzdGF0ZS5sZXZlbCArIDEsXG4gICAgICAgIHNwZWVkOiBnYW1lRGVmYXVsdC5zcGVlZCArIChzdGF0ZS5sZXZlbCAtIDEpICogMC4wMlxuICAgICAgfSlcbiAgICB9XG5cbiAgICBjYXNlIEdBTUVfT1ZFUjoge1xuICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XG4gICAgICAgIGlzTW92ZTogZmFsc2VcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgY2FzZSBDVVRfU05BS0VfQk9EWToge1xuICAgICAgbGV0IGJvZHkgPSBzdGF0ZS5ib2R5LnNsaWNlKCksXG4gICAgICAgICAge2N1dEJvZHlJbmRleH0gPSBhY3Rpb24sXG4gICAgICAgICAgbmV3TGV2ZWwgPSBjdXRCb2R5SW5kZXggLSAxXG5cbiAgICAgIGJvZHkuc3BsaWNlKGN1dEJvZHlJbmRleClcblxuICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XG4gICAgICAgIGJvZHksXG4gICAgICAgIGxldmVsOiBuZXdMZXZlbCxcbiAgICAgICAgc3BlZWQ6IGdhbWVEZWZhdWx0LnNwZWVkICsgbmV3TGV2ZWwgKiAwLjAyXG4gICAgICB9KVxuICAgIH1cblxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGVcbiAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2RlbW8vc25ha2Uvc25ha2VSZWR1Y2VyLmpzIiwiaW1wb3J0IHtcbiAgR0FNRV9SRVNJWkUsXG4gIFNFVF9TVEFSX1BPU0lUSU9OLFxuICBORVhUX0xFVkVMLFxuICBHQU1FX09WRVIsXG4gIENVVF9TTkFLRV9CT0RZXG59IGZyb20gJy4vYWN0aW9ucydcbmltcG9ydCB7Z2FtZURlZmF1bHR9IGZyb20gJy4vdGhlbWUnXG5cbmNvbnN0IGluaXRTdGF0ZSA9IHtcbiAgd2lkdGg6IC0xLFxuICBoZWlnaHQ6IC0xLFxuICByb3dzOiBnYW1lRGVmYXVsdC5yb3dzLFxuICBjb2x1bW5zOiBnYW1lRGVmYXVsdC5jb2x1bW5zLFxuICBzdGFyUG9zaXRpb246IHtcbiAgICByb3c6IC0xLFxuICAgIGNvbHVtbjogLTFcbiAgfSxcbiAgbGV2ZWw6IDEsXG4gIGhpZ2hMZXZlbDogMSxcbiAgaXNHYW1lb3ZlcjogZmFsc2Vcbn1cblxuZnVuY3Rpb24gaXNPdmVybGFwIChzdGFyUG9zaXRpb24sIHNuYWtlQm9keSkge1xuICByZXR1cm4gIXNuYWtlQm9keS5ldmVyeSgoYm9keUJsb2NrKSA9PiB7XG4gICAgcmV0dXJuIGJvZHlCbG9jay5yb3cgIT09IHN0YXJQb3NpdGlvbi5yb3dcbiAgICAgICAgJiYgYm9keUJsb2NrLmNvbHVtbiAhPT0gc3RhclBvc2l0aW9uLmNvbHVtblxuICB9KVxufVxuXG5leHBvcnQgZGVmYXVsdCAoc3RhdGUgPSBpbml0U3RhdGUsIGFjdGlvbikgPT4ge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG5cbiAgICBjYXNlIEdBTUVfUkVTSVpFOiB7XG4gICAgICBsZXQgZ2FtZVNpemUgPSBNYXRoLm1pbihNYXRoLm1pbihhY3Rpb24ud2lkdGgsIGFjdGlvbi5oZWlnaHQpLCA2MDApXG4gICAgICBcbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xuICAgICAgICB3aWR0aDogZ2FtZVNpemUsXG4gICAgICAgIGhlaWdodDogZ2FtZVNpemVcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgY2FzZSBTRVRfU1RBUl9QT1NJVElPTjpcbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xuICAgICAgICBzdGFyUG9zaXRpb246IHtcbiAgICAgICAgICByb3c6IGFjdGlvbi5yb3csXG4gICAgICAgICAgY29sdW1uOiBhY3Rpb24uY29sdW1uXG4gICAgICAgIH1cbiAgICAgIH0pXG5cbiAgICBjYXNlIE5FWFRfTEVWRUw6IHtcbiAgICAgIGxldCBzbmFrZUJvZHkgPSBhY3Rpb24uc25ha2VCb2R5LFxuICAgICAgICAgIG5ld1N0YXJQb3NpdGlvbiA9IHt9LFxuICAgICAgICAgIG5ld0xldmVsID0gc3RhdGUubGV2ZWwgKyAxXG5cbiAgICAgIGRvIHtcbiAgICAgICAgbmV3U3RhclBvc2l0aW9uLnJvdyA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHN0YXRlLnJvd3MpXG4gICAgICAgIG5ld1N0YXJQb3NpdGlvbi5jb2x1bW4gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBzdGF0ZS5jb2x1bW5zKVxuICAgICAgfVxuICAgICAgd2hpbGUgKGlzT3ZlcmxhcChuZXdTdGFyUG9zaXRpb24sIHNuYWtlQm9keSkpXG5cbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xuICAgICAgICBzdGFyUG9zaXRpb246IG5ld1N0YXJQb3NpdGlvbixcbiAgICAgICAgbGV2ZWw6IG5ld0xldmVsLFxuICAgICAgICBoaWdoTGV2ZWw6IE1hdGgubWF4KHN0YXRlLmhpZ2hMZXZlbCwgbmV3TGV2ZWwpXG4gICAgICB9KVxuICAgIH1cblxuICAgIGNhc2UgR0FNRV9PVkVSOiB7XG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcbiAgICAgICAgaXNHYW1lb3ZlcjogdHJ1ZVxuICAgICAgfSlcbiAgICB9XG5cbiAgICBjYXNlIENVVF9TTkFLRV9CT0RZOiB7XG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcbiAgICAgICAgbGV2ZWw6IGFjdGlvbi5jdXRCb2R5SW5kZXggLSAxXG4gICAgICB9KVxuICAgIH1cblxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGVcbiAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2RlbW8vc25ha2Uvd29ybGRSZWR1Y2VyLmpzIiwiY29uc3QgaW5pdEZpbmFsUmVuZGVyU3RhdGUgID0ge31cblxuZXhwb3J0IGNvbnN0IHdvcmxkTGF5ZXJVcGRhdGVyID0gKGZpbmFsUmVuZGVyU3RhdGUgPSBpbml0RmluYWxSZW5kZXJTdGF0ZSwgZ2FtZVN0YXRlLCBkaXJ0eUtleXMpID0+IHtcbiAgaWYgKGRpcnR5S2V5cy5pbmRleE9mKCd3b3JsZCcpID49IDApIHtcbiAgICBsZXQge1xuICAgICAgICAgIHdpZHRoLFxuICAgICAgICAgIGhlaWdodCxcbiAgICAgICAgICByb3dzLFxuICAgICAgICAgIGNvbHVtbnMsXG4gICAgICAgICAgc3RhclBvc2l0aW9uLFxuICAgICAgICAgIGxldmVsLFxuICAgICAgICAgIGhpZ2hMZXZlbFxuICAgICAgICB9ID0gZ2FtZVN0YXRlWyd3b3JsZCddLFxuICAgICAgICBjZWxsV2lkdGggPSB3aWR0aCAvIGNvbHVtbnMsXG4gICAgICAgIGNlbGxIZWlnaHQgPSBoZWlnaHQgLyByb3dzXG5cbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgZmluYWxSZW5kZXJTdGF0ZSwge1xuICAgICAgd2lkdGgsXG4gICAgICBoZWlnaHQsXG4gICAgICB4czogQXJyYXkoY29sdW1ucyArIDEpLmZpbGwoMCkubWFwKCh4LCB4SW5kZXgpID0+IHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICB4OiB4SW5kZXggKiBjZWxsV2lkdGgsXG4gICAgICAgICAgeTA6IDAsXG4gICAgICAgICAgeTE6IGhlaWdodFxuICAgICAgICB9fSksXG4gICAgICB5czogQXJyYXkocm93cyArIDEpLmZpbGwoMCkubWFwKCh5LCB5SW5kZXgpID0+IHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICB5OiB5SW5kZXggKiBjZWxsSGVpZ2h0LFxuICAgICAgICAgIHgwOiAwLFxuICAgICAgICAgIHgxOiB3aWR0aFxuICAgICAgICB9fSksXG4gICAgICBzdGFyOiB7XG4gICAgICAgIHg6IHN0YXJQb3NpdGlvbi5jb2x1bW4gKiBjZWxsV2lkdGgsXG4gICAgICAgIHk6IHN0YXJQb3NpdGlvbi5yb3cgKiBjZWxsSGVpZ2h0LFxuICAgICAgICB3aWR0aDogY2VsbFdpZHRoLFxuICAgICAgICBoZWlnaHQ6IGNlbGxIZWlnaHRcbiAgICAgIH0sXG4gICAgICBsZXZlbCxcbiAgICAgIGhpZ2hMZXZlbFxuICAgIH0pXG4gIH1cbiAgZWxzZSB7XG4gICAgcmV0dXJuIGZpbmFsUmVuZGVyU3RhdGVcbiAgfVxufVxuXG5leHBvcnQgY29uc3Qgd29ybGRMYXllclJlbmRlciA9IChjYW52YXMsIHJlbmRlclN0YXRlLCBmaW5hbFJlbmRlclN0YXRlLCBkdCkgPT4ge1xuICBpZiAocmVuZGVyU3RhdGUgIT09IGZpbmFsUmVuZGVyU3RhdGUpIHtcbiAgICBpZiAoIXJlbmRlclN0YXRlKSB7XG4gICAgICByZW5kZXJTdGF0ZSA9IGZpbmFsUmVuZGVyU3RhdGVcbiAgICB9XG5cbiAgICAvLyBObyBhbmltYXRpb24gdG8gd29ybGQgbGF5ZXJcbiAgICByZW5kZXJTdGF0ZSA9IGZpbmFsUmVuZGVyU3RhdGVcblxuICAgIGxldCB7XG4gICAgICB3aWR0aCxcbiAgICAgIGhlaWdodCxcbiAgICAgIHhzLFxuICAgICAgeXMsXG4gICAgICBsZXZlbCxcbiAgICAgIGhpZ2hMZXZlbCxcbiAgICAgIHN0YXJcbiAgICB9ID0gcmVuZGVyU3RhdGVcblxuICAgIGxldCBjb250ZXh0ID0gY2FudmFzLmdldENvbnRleHQoJzJkJylcblxuICAgIGlmIChjYW52YXMud2lkdGggIT09IHdpZHRoXG4gICAgICB8fCBjYW52YXMuaGVpZ2h0ICE9PSBoZWlnaHQpIHtcbiAgICAgIGNhbnZhcy53aWR0aCA9IHdpZHRoXG4gICAgICBjYW52YXMuaGVpZ2h0ID0gaGVpZ2h0XG4gICAgICAvLyBDbGVhciBjYW52YXMgbWFudWFsbHlcbiAgICAgIGNvbnRleHQuY2xlYXJSZWN0KDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodClcbiAgICB9XG5cbiAgICAvLyBDbGVhciBjYW52YXMgbWFudWFsbHkgYmVmb3JlIHJlZHJhd1xuICAgIGNvbnRleHQuY2xlYXJSZWN0KDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodClcblxuICAgIGNvbnRleHQuZmlsbFN0eWxlID0gJyNmZmZmZmYnXG4gICAgY29udGV4dC5maWxsUmVjdCgwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpXG5cbiAgICBjb250ZXh0LnN0cm9rZVN0eWxlID0gJyNmOWY5ZjknXG4gICAgY29udGV4dC5saW5lV2lkdGggPSAxXG4gICAgY29udGV4dC5iZWdpblBhdGgoKVxuXG4gICAgeHMuZm9yRWFjaCgodmVydGljYWxMaW5lKSA9PiB7XG4gICAgICBjb250ZXh0Lm1vdmVUbyh2ZXJ0aWNhbExpbmUueCwgdmVydGljYWxMaW5lLnkwKVxuICAgICAgY29udGV4dC5saW5lVG8odmVydGljYWxMaW5lLngsIHZlcnRpY2FsTGluZS55MSlcbiAgICAgIGNvbnRleHQuc3Ryb2tlKClcbiAgICB9KVxuXG4gICAgeXMuZm9yRWFjaCgoaG9yaXpvbnRhbExpbmUpID0+IHtcbiAgICAgIGNvbnRleHQubW92ZVRvKGhvcml6b250YWxMaW5lLngwLCBob3Jpem9udGFsTGluZS55KVxuICAgICAgY29udGV4dC5saW5lVG8oaG9yaXpvbnRhbExpbmUueDEsIGhvcml6b250YWxMaW5lLnkpXG4gICAgICBjb250ZXh0LnN0cm9rZSgpXG4gICAgfSlcblxuICAgIC8vIERyYXcgdGV4dFxuICAgIGNvbnRleHQuZmlsbFN0eWxlID0gJyNiZmJmYmYnXG4gICAgY29udGV4dC5mb250ID0gTWF0aC5taW4od2lkdGggLyAyLCBoZWlnaHQgLyAyKSArICdweCBhcmlhbCwgaGVsdmV0aWNhLCBzYW5zLXNlcmlmJ1xuICAgIGNvbnRleHQudGV4dEFsaWduID0gJ2NlbnRlcidcbiAgICBjb250ZXh0LnRleHRCYXNlbGluZSA9ICdtaWRkbGUnXG4gICAgY29udGV4dC5maWxsVGV4dChsZXZlbCwgd2lkdGggLyAyLCBoZWlnaHQgLyAyKVxuXG4gICAgY29udGV4dC5mb250ID0gTWF0aC5taW4od2lkdGggLyAxNiwgaGVpZ2h0IC8gMTYpICsgJ3B4IGFyaWFsLCBoZWx2ZXRpY2EsIHNhbnMtc2VyaWYnXG4gICAgY29udGV4dC5maWxsVGV4dCgnSGlnaGVzdDogJyArIGhpZ2hMZXZlbCwgd2lkdGggLyAyLCBoZWlnaHQgKiAwLjgpXG5cbiAgICAvLyBEcmF3IHN0YXJcbiAgICBjb250ZXh0LmZpbGxTdHlsZSA9ICcjZmZhZTAwJ1xuICAgIGNvbnRleHQuZmlsbFJlY3Qoc3Rhci54LCBzdGFyLnksIHN0YXIud2lkdGgsIHN0YXIuaGVpZ2h0KVxuICB9XG5cbiAgcmV0dXJuIHJlbmRlclN0YXRlXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vZGVtby9zbmFrZS93b3JsZExheWVyLmpzIiwiaW1wb3J0IGdhbXV4IGZyb20gJy4uLy4uL2Rpc3QvZ2FtdXgnXG5pbXBvcnQge1xuICBkaXJlY3Rpb24sXG4gIGdhbWVEZWZhdWx0XG59IGZyb20gJy4vdGhlbWUnXG5pbXBvcnQgeyBcbiAgbGVmdEtleURvd24sXG4gIHJpZ2h0S2V5RG93bixcbiAgdXBLZXlEb3duLFxuICBkb3duS2V5RG93bixcbiAgZ2FtZU92ZXIsXG4gIG5leHRMZXZlbCxcbiAgY3V0U25ha2VCb2R5XG59IGZyb20gJy4vYWN0aW9ucydcblxuLyoqXG4gKiBGdW5jdGlvbiBkZXRlY3QgaGl0IHdvcmxkIGVkZ2VcbiAqL1xuZnVuY3Rpb24gaGl0U3RhciAoc25ha2VIZWFkLCBzdGFyKSB7XG4gIGxldCB7aGl0RGV0ZWN0aW9uQnVmZmVyfSA9IGdhbWVEZWZhdWx0XG5cbiAgcmV0dXJuIHNuYWtlSGVhZC54ICsgc25ha2VIZWFkLndpZHRoICogaGl0RGV0ZWN0aW9uQnVmZmVyIDwgc3Rhci54ICsgc3Rhci53aWR0aFxuICAgICAgJiYgc25ha2VIZWFkLnggKyBzbmFrZUhlYWQud2lkdGggKiAoMSAtIGhpdERldGVjdGlvbkJ1ZmZlcikgPiBzdGFyLnhcbiAgICAgICYmIHNuYWtlSGVhZC55ICsgc25ha2VIZWFkLmhlaWdodCAqIGhpdERldGVjdGlvbkJ1ZmZlciA8IHN0YXIueSArIHN0YXIuaGVpZ2h0XG4gICAgICAmJiBzbmFrZUhlYWQueSArIHNuYWtlSGVhZC5oZWlnaHQgKiAoMSAtIGhpdERldGVjdGlvbkJ1ZmZlcikgPiBzdGFyLnlcbn1cblxuZnVuY3Rpb24gaGl0T25SaWdodCAoZm9jdXMsIG90aGVyLCB3aWR0aCwgaGVpZ2h0KSB7XG4gIGxldCB7aGl0RGV0ZWN0aW9uQnVmZmVyfSA9IGdhbWVEZWZhdWx0LFxuICAgICAgZm9jdXNYID0gZm9jdXMueCA+IDAgPyBmb2N1cy54ICUgd2lkdGggOiB3aWR0aCArIChmb2N1cy54ICUgd2lkdGgpLFxuICAgICAgZm9jdXNZID0gZm9jdXMueSA+IDAgPyBmb2N1cy55ICUgaGVpZ2h0IDogaGVpZ2h0ICsgKGZvY3VzLnkgJSBoZWlnaHQpLFxuICAgICAgb3RoZXJYID0gb3RoZXIueCA+IDAgPyBvdGhlci54ICUgd2lkdGggOiB3aWR0aCArIChvdGhlci54ICUgd2lkdGgpLFxuICAgICAgb3RoZXJZID0gb3RoZXIueSA+IDAgPyBvdGhlci55ICUgaGVpZ2h0IDogaGVpZ2h0ICsgKG90aGVyLnkgJSBoZWlnaHQpXG5cbiAgcmV0dXJuIGZvY3VzWCArIGZvY3VzLndpZHRoICogKDEgLSBoaXREZXRlY3Rpb25CdWZmZXIpID4gb3RoZXJYXG4gICAgICAmJiBmb2N1c1ggKyBmb2N1cy53aWR0aCA8IG90aGVyWCArIG90aGVyLndpZHRoXG4gICAgICAmJiBmb2N1c1kgKyBmb2N1cy5oZWlnaHQgKiAoMSAtIGhpdERldGVjdGlvbkJ1ZmZlcikgPiBvdGhlcllcbiAgICAgICYmIGZvY3VzWSArIGZvY3VzLmhlaWdodCAqIGhpdERldGVjdGlvbkJ1ZmZlciA8IG90aGVyWSArIG90aGVyLmhlaWdodFxufVxuXG5mdW5jdGlvbiBoaXRPbkxlZnQgKGZvY3VzLCBvdGhlciwgd2lkdGgsIGhlaWdodCkge1xuICBsZXQge2hpdERldGVjdGlvbkJ1ZmZlcn0gPSBnYW1lRGVmYXVsdCxcbiAgICAgIGZvY3VzWCA9IGZvY3VzLnggPiAwID8gZm9jdXMueCAlIHdpZHRoIDogd2lkdGggKyAoZm9jdXMueCAlIHdpZHRoKSxcbiAgICAgIGZvY3VzWSA9IGZvY3VzLnkgPiAwID8gZm9jdXMueSAlIGhlaWdodCA6IGhlaWdodCArIChmb2N1cy55ICUgaGVpZ2h0KSxcbiAgICAgIG90aGVyWCA9IG90aGVyLnggPiAwID8gb3RoZXIueCAlIHdpZHRoIDogd2lkdGggKyAob3RoZXIueCAlIHdpZHRoKSxcbiAgICAgIG90aGVyWSA9IG90aGVyLnkgPiAwID8gb3RoZXIueSAlIGhlaWdodCA6IGhlaWdodCArIChvdGhlci55ICUgaGVpZ2h0KVxuXG4gIHJldHVybiBmb2N1c1ggKyBmb2N1cy53aWR0aCAqIGhpdERldGVjdGlvbkJ1ZmZlciA8IG90aGVyWCArIG90aGVyLndpZHRoXG4gICAgICAmJiBmb2N1c1ggPiBvdGhlclhcbiAgICAgICYmIGZvY3VzWSArIGZvY3VzLmhlaWdodCAqICgxIC0gaGl0RGV0ZWN0aW9uQnVmZmVyKSA+IG90aGVyWVxuICAgICAgJiYgZm9jdXNZICsgZm9jdXMuaGVpZ2h0ICogaGl0RGV0ZWN0aW9uQnVmZmVyIDwgb3RoZXJZICsgb3RoZXIuaGVpZ2h0XG59XG5cbmZ1bmN0aW9uIGhpdE9uQm90dG9tIChmb2N1cywgb3RoZXIsIHdpZHRoLCBoZWlnaHQpIHtcbiAgbGV0IHtoaXREZXRlY3Rpb25CdWZmZXJ9ID0gZ2FtZURlZmF1bHQsXG4gICAgICBmb2N1c1ggPSBmb2N1cy54ID4gMCA/IGZvY3VzLnggJSB3aWR0aCA6IHdpZHRoICsgKGZvY3VzLnggJSB3aWR0aCksXG4gICAgICBmb2N1c1kgPSBmb2N1cy55ID4gMCA/IGZvY3VzLnkgJSBoZWlnaHQgOiBoZWlnaHQgKyAoZm9jdXMueSAlIGhlaWdodCksXG4gICAgICBvdGhlclggPSBvdGhlci54ID4gMCA/IG90aGVyLnggJSB3aWR0aCA6IHdpZHRoICsgKG90aGVyLnggJSB3aWR0aCksXG4gICAgICBvdGhlclkgPSBvdGhlci55ID4gMCA/IG90aGVyLnkgJSBoZWlnaHQgOiBoZWlnaHQgKyAob3RoZXIueSAlIGhlaWdodClcblxuICByZXR1cm4gZm9jdXNZICsgZm9jdXMuaGVpZ2h0ICogKDEgLSBoaXREZXRlY3Rpb25CdWZmZXIpID4gb3RoZXJZXG4gICAgICAmJiBmb2N1c1kgKyBmb2N1cy5oZWlnaHQgPCBvdGhlclkgKyBvdGhlci5oZWlnaHRcbiAgICAgICYmIGZvY3VzWCArIGZvY3VzLndpZHRoICogKDEgLSBoaXREZXRlY3Rpb25CdWZmZXIpID4gb3RoZXJYXG4gICAgICAmJiBmb2N1c1ggKyBmb2N1cy53aWR0aCAqIGhpdERldGVjdGlvbkJ1ZmZlciA8IG90aGVyWCArIG90aGVyLndpZHRoXG59XG5cbmZ1bmN0aW9uIGhpdE9uVG9wIChmb2N1cywgb3RoZXIsIHdpZHRoLCBoZWlnaHQpIHtcbiAgbGV0IHtoaXREZXRlY3Rpb25CdWZmZXJ9ID0gZ2FtZURlZmF1bHQsXG4gICAgICBmb2N1c1ggPSBmb2N1cy54ID4gMCA/IGZvY3VzLnggJSB3aWR0aCA6IHdpZHRoICsgKGZvY3VzLnggJSB3aWR0aCksXG4gICAgICBmb2N1c1kgPSBmb2N1cy55ID4gMCA/IGZvY3VzLnkgJSBoZWlnaHQgOiBoZWlnaHQgKyAoZm9jdXMueSAlIGhlaWdodCksXG4gICAgICBvdGhlclggPSBvdGhlci54ID4gMCA/IG90aGVyLnggJSB3aWR0aCA6IHdpZHRoICsgKG90aGVyLnggJSB3aWR0aCksXG4gICAgICBvdGhlclkgPSBvdGhlci55ID4gMCA/IG90aGVyLnkgJSBoZWlnaHQgOiBoZWlnaHQgKyAob3RoZXIueSAlIGhlaWdodClcblxuICByZXR1cm4gZm9jdXNZICsgZm9jdXMuaGVpZ2h0ICogaGl0RGV0ZWN0aW9uQnVmZmVyIDwgb3RoZXJZICsgb3RoZXIuaGVpZ2h0XG4gICAgICAmJiBmb2N1c1kgPiBvdGhlcllcbiAgICAgICYmIGZvY3VzWCArIGZvY3VzLndpZHRoICogKDEgLSBoaXREZXRlY3Rpb25CdWZmZXIpID4gb3RoZXJYXG4gICAgICAmJiBmb2N1c1ggKyBmb2N1cy53aWR0aCAqIGhpdERldGVjdGlvbkJ1ZmZlciA8IG90aGVyWCArIG90aGVyLndpZHRoXG59XG5cbmZ1bmN0aW9uIGdldEhpdEJvZHlJbmRleCAoc25ha2VCb2R5LCBoZWFkRGlyZWN0aW9uLCB3aWR0aCwgaGVpZ2h0KSB7XG4gIGxldCBoZWFkID0gc25ha2VCb2R5WzBdXG5cbiAgaWYgKCFoZWFkKSB7XG4gICAgcmV0dXJuIC0xXG4gIH1cblxuICBmb3IgKGxldCBpID0gMzsgaSA8IHNuYWtlQm9keS5sZW5ndGg7IGkrKykge1xuICAgIGxldCBib2R5QmxvY2sgPSBzbmFrZUJvZHlbaV1cblxuICAgIGlmICgoaGVhZERpcmVjdGlvbiA9PT0gZGlyZWN0aW9uLlVQICYmIGhpdE9uVG9wKGhlYWQsIGJvZHlCbG9jaywgd2lkdGgsIGhlaWdodCkpXG4gICAgICB8fCAoaGVhZERpcmVjdGlvbiA9PT0gZGlyZWN0aW9uLkRPV04gJiYgaGl0T25Cb3R0b20oaGVhZCwgYm9keUJsb2NrLCB3aWR0aCwgaGVpZ2h0KSlcbiAgICAgIHx8IChoZWFkRGlyZWN0aW9uID09PSBkaXJlY3Rpb24uTEVGVCAmJiBoaXRPbkxlZnQoaGVhZCwgYm9keUJsb2NrLCB3aWR0aCwgaGVpZ2h0KSlcbiAgICAgIHx8IChoZWFkRGlyZWN0aW9uID09PSBkaXJlY3Rpb24uUklHSFQgJiYgaGl0T25SaWdodChoZWFkLCBib2R5QmxvY2ssIHdpZHRoLCBoZWlnaHQpKSkge1xuICAgICAgcmV0dXJuIGlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gLTFcbn1cblxuZnVuY3Rpb24gY3V0U2VsZkJ5SGVhZCAoc25ha2VCb2R5LCBoZWFkRGlyZWN0aW9uLCB3aWR0aCwgaGVpZ2h0KSB7XG4gIGxldCBoaXRCb2R5SW5kZXggPSBnZXRIaXRCb2R5SW5kZXgoc25ha2VCb2R5LCBoZWFkRGlyZWN0aW9uLCB3aWR0aCwgaGVpZ2h0KVxuXG4gIGlmIChoaXRCb2R5SW5kZXggPCAwKSB7XG4gICAgcmV0dXJuIFxuICB9XG5cbiAgZ2FtdXguZGlzcGF0Y2goY3V0U25ha2VCb2R5KGhpdEJvZHlJbmRleCkpXG59XG5cbi8qKlxuICogRnVuY3Rpb24gdG8gZmlsbCBhIGZyZWUgZGltZW5zaW9uIHJlY3RcbiAqIGV4YW1wbGU6XG4gKiBmaWxsRnJlZVJlY3QoY29udGV4dCwgLTEwLCAtMTAsIDIwLCAyMCkgd2lsbCByZW5kZXIgZm91clxuICogcmVjdCBhdCBlYWNoIGNvcm5lciB3aXRoIDEwIHBpeGVsIGRpbWVuc2lvblxuICovXG5mdW5jdGlvbiBmaWxsRnJlZVJlY3QgKGNvbnRleHQsIHgsIHksIHdpZHRoLCBoZWlnaHQpIHtcbiAgbGV0IGNhbnZhc1dpZHRoID0gY29udGV4dC5jYW52YXMud2lkdGgsXG4gICAgICBjYW52YXNIZWlnaHQgPSBjb250ZXh0LmNhbnZhcy5oZWlnaHRcblxuICBpZiAoeCA8IDApIHtcbiAgICB4ID0geCAlIGNhbnZhc1dpZHRoXG4gICAgZmlsbEZyZWVSZWN0KGNvbnRleHQsIGNhbnZhc1dpZHRoICsgeCwgeSwgTWF0aC5taW4oLXgsIHdpZHRoKSwgaGVpZ2h0KVxuICB9XG5cbiAgaWYgKHggPiBjYW52YXNXaWR0aCAtIHdpZHRoKSB7XG4gICAgeCA9IHggJSBjYW52YXNXaWR0aFxuICAgIGZpbGxGcmVlUmVjdChjb250ZXh0LCBNYXRoLm1heCgwLCB4IC0gY2FudmFzV2lkdGgpLCB5LCB3aWR0aCAtIE1hdGgubWF4KDAsIGNhbnZhc1dpZHRoIC0geCksIGhlaWdodClcbiAgfVxuICBcbiAgaWYgKHkgPCAwKSB7XG4gICAgeSA9IHkgJSBjYW52YXNIZWlnaHRcbiAgICBmaWxsRnJlZVJlY3QoY29udGV4dCwgeCwgY2FudmFzSGVpZ2h0ICsgeSwgd2lkdGgsIE1hdGgubWluKC15LCBoZWlnaHQpKVxuICB9XG5cbiAgaWYgKHkgPiBjYW52YXNIZWlnaHQgLSBoZWlnaHQpIHtcbiAgICB5ID0geSAlIGNhbnZhc0hlaWdodFxuICAgIGZpbGxGcmVlUmVjdChjb250ZXh0LCB4LCBNYXRoLm1heCgwLCB5IC0gY2FudmFzSGVpZ2h0KSwgd2lkdGgsIGhlaWdodCAtIE1hdGgubWF4KDAsIGNhbnZhc0hlaWdodCAtIHkpKVxuICB9XG5cbiAgY29udGV4dC5maWxsUmVjdCh4LCB5LCB3aWR0aCwgaGVpZ2h0KVxufVxuXG5jb25zdCBpbml0RmluYWxSZW5kZXJTdGF0ZSAgPSB7fVxuXG5leHBvcnQgY29uc3Qgc25ha2VMYXllclVwZGF0ZXIgPSAoZmluYWxSZW5kZXJTdGF0ZSA9IGluaXRGaW5hbFJlbmRlclN0YXRlLCBnYW1lU3RhdGUsIGRpcnR5S2V5cykgPT4ge1xuICBpZiAoZGlydHlLZXlzLmluZGV4T2YoJ3NuYWtlJykgPj0gMCkge1xuICAgIGxldCB7XG4gICAgICAgICAgd2lkdGgsXG4gICAgICAgICAgaGVpZ2h0LFxuICAgICAgICAgIHJvd3MsXG4gICAgICAgICAgY29sdW1ucyxcbiAgICAgICAgICBzdGFyUG9zaXRpb25cbiAgICAgICAgfSA9IGdhbWVTdGF0ZVsnd29ybGQnXSxcbiAgICAgICAge1xuICAgICAgICAgIGJvZHksXG4gICAgICAgICAgZGlyZWN0aW9uLFxuICAgICAgICAgIGlzTW92ZSxcbiAgICAgICAgICBzcGVlZFxuICAgICAgICB9ID0gZ2FtZVN0YXRlWydzbmFrZSddLFxuICAgICAgICBjZWxsV2lkdGggPSB3aWR0aCAvIGNvbHVtbnMsXG4gICAgICAgIGNlbGxIZWlnaHQgPSBoZWlnaHQgLyByb3dzXG5cbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgZmluYWxSZW5kZXJTdGF0ZSwge1xuICAgICAgd2lkdGgsXG4gICAgICBoZWlnaHQsXG4gICAgICBib2R5OiBib2R5Lm1hcCgoYm9keUJsb2NrLCBpbmRleCkgPT4ge1xuICAgICAgICBsZXQgeCA9IGJvZHlCbG9jay5jb2x1bW4gKiBjZWxsV2lkdGgsXG4gICAgICAgICAgICB5ID0gYm9keUJsb2NrLnJvdyAqIGNlbGxIZWlnaHRcblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHg6IGJvZHlCbG9jay5jb2x1bW4gKiBjZWxsV2lkdGgsXG4gICAgICAgICAgeTogYm9keUJsb2NrLnJvdyAqIGNlbGxIZWlnaHQsXG4gICAgICAgICAgd2lkdGg6IGNlbGxXaWR0aCxcbiAgICAgICAgICBoZWlnaHQ6IGNlbGxIZWlnaHRcbiAgICAgICAgICAvLyBjb2x1bW46IGJvZHlCbG9jay5jb2x1bW4sXG4gICAgICAgICAgLy8gcm93OiBib2R5QmxvY2sucm93XG4gICAgICAgIH1cbiAgICAgIH0pLFxuICAgICAgaXNNb3ZlLFxuICAgICAgc3BlZWQsXG4gICAgICBkaXJlY3Rpb24sXG4gICAgICBzdGFyOiB7XG4gICAgICAgIHg6IHN0YXJQb3NpdGlvbi5jb2x1bW4gKiBjZWxsV2lkdGgsXG4gICAgICAgIHk6IHN0YXJQb3NpdGlvbi5yb3cgKiBjZWxsSGVpZ2h0LFxuICAgICAgICB3aWR0aDogY2VsbFdpZHRoLFxuICAgICAgICBoZWlnaHQ6IGNlbGxIZWlnaHRcbiAgICAgIH1cbiAgICB9KVxuICB9XG4gIGVsc2Uge1xuICAgIHJldHVybiBmaW5hbFJlbmRlclN0YXRlXG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IHNuYWtlTGF5ZXJSZW5kZXIgPSAoY2FudmFzLCByZW5kZXJTdGF0ZSwgZmluYWxSZW5kZXJTdGF0ZSwgZHQpID0+IHtcbiAgaWYgKHJlbmRlclN0YXRlICE9PSBmaW5hbFJlbmRlclN0YXRlKSB7XG4gICAgbGV0IGNvbnRleHQgPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKSxcbiAgICAgICAgZGlydHkgPSBmYWxzZVxuXG4gICAgaWYgKCFyZW5kZXJTdGF0ZSkge1xuICAgICAgcmVuZGVyU3RhdGUgPSBmaW5hbFJlbmRlclN0YXRlXG4gICAgICBkaXJ0eSA9IHRydWVcbiAgICB9XG5cbiAgICAvLyBTZXQgdGhpbmdzIHRoYXQgYXJlIG5vdCBhbmltYXRlZFxuICAgIE9iamVjdC5hc3NpZ24ocmVuZGVyU3RhdGUsIHtcbiAgICAgIGRpcmVjdGlvbjogZmluYWxSZW5kZXJTdGF0ZS5kaXJlY3Rpb24sXG4gICAgICBpc01vdmU6IGZpbmFsUmVuZGVyU3RhdGUuaXNNb3ZlLFxuICAgICAgc3BlZWQ6IGZpbmFsUmVuZGVyU3RhdGUuc3BlZWQsXG4gICAgICB3aWR0aDogZmluYWxSZW5kZXJTdGF0ZS53aWR0aCxcbiAgICAgIGhlaWdodDogZmluYWxSZW5kZXJTdGF0ZS5oZWlnaHRcbiAgICB9KVxuXG4gICAgaWYgKGNhbnZhcy53aWR0aCAhPT0gcmVuZGVyU3RhdGUud2lkdGhcbiAgICAgIHx8IGNhbnZhcy5oZWlnaHQgIT09IHJlbmRlclN0YXRlLmhlaWdodCkge1xuICAgICAgY2FudmFzLndpZHRoID0gcmVuZGVyU3RhdGUud2lkdGhcbiAgICAgIGNhbnZhcy5oZWlnaHQgPSByZW5kZXJTdGF0ZS5oZWlnaHRcbiAgICAgIC8vIENsZWFyIGNhbnZhcyBtYW51YWxseVxuICAgICAgY29udGV4dC5jbGVhclJlY3QoMCwgMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KVxuICAgIH1cblxuICAgIGlmICghcmVuZGVyU3RhdGUuaXNNb3ZlKSB7XG4gICAgICAvLyBTbmFrZSBzdG9wcyBtb3ZlXG4gICAgICByZXR1cm4gcmVuZGVyU3RhdGVcbiAgICB9XG5cbiAgICBsZXQge1xuICAgICAgICAgIHNwZWVkLFxuICAgICAgICAgIGJvZHlcbiAgICAgICAgfSA9IHJlbmRlclN0YXRlLFxuICAgICAgICBib2R5RlJTID0gZmluYWxSZW5kZXJTdGF0ZS5ib2R5LFxuICAgICAgICBzdGFyRlJTID0gZmluYWxSZW5kZXJTdGF0ZS5zdGFyXG5cbiAgICAvLyBNYWtlIHN1cmUgYm9keSBhbmQgYm9keUZSUyBhcmUgaW4gc3luY1xuICAgIGlmIChib2R5Lmxlbmd0aCA8IGJvZHlGUlMubGVuZ3RoKSB7XG4gICAgICAvLyBCb2R5IGdyb3dzXG4gICAgICBmb3IgKGxldCBpID0gYm9keS5sZW5ndGg7IGkgPCBib2R5RlJTLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGxldCBib2R5RlJTQmxvY2sgPSBib2R5RlJTW2ldXG4gICAgICAgIGJvZHlbaV0gPSB7XG4gICAgICAgICAgeDogYm9keUZSU0Jsb2NrLngsXG4gICAgICAgICAgeTogYm9keUZSU0Jsb2NrLnksXG4gICAgICAgICAgd2lkdGg6IGJvZHlGUlNCbG9jay53aWR0aCxcbiAgICAgICAgICBoZWlnaHQ6IGJvZHlGUlNCbG9jay5oZWlnaHRcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBlbHNlIGlmIChib2R5Lmxlbmd0aCA+IGJvZHlGUlMubGVuZ3RoKSB7XG4gICAgICAvLyBCb2R5IGdvdCBjdXRcbiAgICAgIGJvZHkuc3BsaWNlKGJvZHlGUlMubGVuZ3RoKVxuICAgIH1cblxuICAgIC8vIFNldCB0aGUgYWN0dWFsIHJlbmRlciBkaW1lbnNpb25zIGZvciB0aGUgc25ha2UgaGVhZFxuICAgIGJvZHkuZm9yRWFjaCgoYm9keUJsb2NrLCBpbmRleCkgPT4ge1xuICAgICAgbGV0IHtcbiAgICAgICAgICAgIHgsXG4gICAgICAgICAgICB5LFxuICAgICAgICAgICAgd2lkdGgsXG4gICAgICAgICAgICBoZWlnaHRcbiAgICAgICAgICB9ID0gYm9keUJsb2NrXG5cbiAgICAgIGlmIChib2R5RlJTW2luZGV4XS54ICE9PSB4KSB7XG4gICAgICAgIGxldCBkaXJlY3Rpb25Vbml0ID0gKGJvZHlGUlNbaW5kZXhdLnggLSB4KSAvIE1hdGguYWJzKGJvZHlGUlNbaW5kZXhdLnggLSB4KSxcbiAgICAgICAgICAgIGRpc3RhbmNlID0gTWF0aC5taW4oc3BlZWQgKiBkdCwgTWF0aC5hYnMoYm9keUZSU1tpbmRleF0ueCAtIHgpKVxuXG4gICAgICAgIGJvZHlCbG9jay54ICs9IGRpc3RhbmNlICogZGlyZWN0aW9uVW5pdFxuICAgICAgICBkaXJ0eSA9IHRydWVcbiAgICAgIH1cblxuICAgICAgaWYgKGJvZHlGUlNbaW5kZXhdLnkgIT09IHkpIHtcbiAgICAgICAgbGV0IGRpcmVjdGlvblVuaXQgPSAoYm9keUZSU1tpbmRleF0ueSAtIHkpIC8gTWF0aC5hYnMoYm9keUZSU1tpbmRleF0ueSAtIHkpLFxuICAgICAgICAgICAgZGlzdGFuY2UgPSBNYXRoLm1pbihzcGVlZCAqIGR0LCBNYXRoLmFicyhib2R5RlJTW2luZGV4XS55IC0geSkpXG4gICAgICAgIFxuICAgICAgICBib2R5QmxvY2sueSArPSBkaXN0YW5jZSAqIGRpcmVjdGlvblVuaXRcbiAgICAgICAgZGlydHkgPSB0cnVlXG4gICAgICB9XG4gICAgfSlcblxuICAgIGlmIChkaXJ0eSkge1xuICAgICAgLy8gV2UgaGF2ZSBzb21ldGluZyB0byByZW5kZXIgaGVyZVxuICAgICAgY29udGV4dC5jbGVhclJlY3QoMCwgMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KVxuXG4gICAgICAvLyBSZW5kZXJcbiAgICAgIGJvZHkuZm9yRWFjaCgoYm9keUJsb2NrLCBpbmRleCkgPT4ge1xuICAgICAgICBpZiAoaW5kZXggPT09IDApIHtcbiAgICAgICAgICBjb250ZXh0LmZpbGxTdHlsZSA9ICcjZWE2OTY5J1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIGNvbnRleHQuZmlsbFN0eWxlID0gJyMzZjNmM2YnXG4gICAgICAgIH1cbiAgICAgICAgZmlsbEZyZWVSZWN0KGNvbnRleHQsIGJvZHlCbG9jay54LCBib2R5QmxvY2sueSwgYm9keUJsb2NrLndpZHRoLCBib2R5QmxvY2suaGVpZ2h0KVxuICAgICAgfSlcblxuICAgICAgLy8gSGl0IGRldGVjdGlvblxuICAgICAgLy8gQ2hlY2sgaWYgc25ha2UgaGVhZCBoaXQgaXRzZWxmXG4gICAgICAvLyBDdXQgdGhlIGJvZHkgaWYgaGl0IGl0c2VsZlxuICAgICAgY3V0U2VsZkJ5SGVhZChib2R5LCByZW5kZXJTdGF0ZS5kaXJlY3Rpb24sIHJlbmRlclN0YXRlLndpZHRoLCByZW5kZXJTdGF0ZS5oZWlnaHQpXG5cbiAgICAgIC8vIENoZWNrIGlmIHNuYWtlIGhlYWQgaGl0IHN0YXJcbiAgICAgIGxldCBoZWFkID0gYm9keVswXSxcbiAgICAgICAgICBoZWFkWCA9IGhlYWQueCAlIHJlbmRlclN0YXRlLndpZHRoLFxuICAgICAgICAgIGhlYWRZID0gaGVhZC55ICUgcmVuZGVyU3RhdGUuaGVpZ2h0LFxuICAgICAgICAgIGhlYWRQb3NpdGlvbiBcblxuICAgICAgaGVhZFggPSBoZWFkWCA8IDAgPyByZW5kZXJTdGF0ZS53aWR0aCArIGhlYWRYIDogaGVhZFhcbiAgICAgIGhlYWRZID0gaGVhZFkgPCAwID8gcmVuZGVyU3RhdGUuaGVpZ2h0ICsgaGVhZFkgOiBoZWFkWVxuICAgICAgaWYgKGhpdFN0YXIoe1xuICAgICAgICB4OiBoZWFkWCxcbiAgICAgICAgeTogaGVhZFksXG4gICAgICAgIHdpZHRoOiBoZWFkLndpZHRoLFxuICAgICAgICBoZWlnaHQ6IGhlYWQuaGVpZ2h0XG4gICAgICB9LCBzdGFyRlJTKSkge1xuICAgICAgICBnYW11eC5kaXNwYXRjaChuZXh0TGV2ZWwoYm9keUZSUykpXG4gICAgICB9XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgLy8gTm93IHRoYXQgdGhlIGN1cnJlbnQgZmluYWwgcmVuZGVyIHN0YXRlIGhhcyBhcnJpdmVkXG4gICAgICAvLyB3ZSBuZWVkIHRvIHVwZGF0ZSB0aGUgZmluYWwgcmVuZGVyIHN0YXRlXG4gICAgICBzd2l0Y2gocmVuZGVyU3RhdGUuZGlyZWN0aW9uKSB7XG4gICAgICAgIGNhc2UgZGlyZWN0aW9uLlVQOlxuICAgICAgICAgIGdhbXV4LmRpc3BhdGNoKHVwS2V5RG93bigpKVxuICAgICAgICAgIGJyZWFrXG5cbiAgICAgICAgY2FzZSBkaXJlY3Rpb24uRE9XTjpcbiAgICAgICAgICBnYW11eC5kaXNwYXRjaChkb3duS2V5RG93bigpKVxuICAgICAgICAgIGJyZWFrXG5cbiAgICAgICAgY2FzZSBkaXJlY3Rpb24uTEVGVDpcbiAgICAgICAgICBnYW11eC5kaXNwYXRjaChsZWZ0S2V5RG93bigpKVxuICAgICAgICAgIGJyZWFrXG5cbiAgICAgICAgY2FzZSBkaXJlY3Rpb24uUklHSFQ6XG4gICAgICAgICAgZ2FtdXguZGlzcGF0Y2gocmlnaHRLZXlEb3duKCkpXG4gICAgICAgICAgYnJlYWtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgXG4gIHJldHVybiByZW5kZXJTdGF0ZVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2RlbW8vc25ha2Uvc25ha2VMYXllci5qcyIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL2luZGV4LnNjc3NcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbi8vIFByZXBhcmUgY3NzVHJhbnNmb3JtYXRpb25cbnZhciB0cmFuc2Zvcm07XG5cbnZhciBvcHRpb25zID0ge31cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcblx0Ly8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0aWYoIWNvbnRlbnQubG9jYWxzKSB7XG5cdFx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vaW5kZXguc2Nzc1wiLCBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9pbmRleC5zY3NzXCIpO1xuXHRcdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cdFx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdFx0fSk7XG5cdH1cblx0Ly8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2RlbW8vc25ha2UvaW5kZXguc2Nzc1xuLy8gbW9kdWxlIGlkID0gOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKHVuZGVmaW5lZCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJib2R5LFxcbmh0bWwge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjsgfVxcblxcbiNyb290IHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VkZWRlZDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjsgfVxcbiAgI3Jvb3QgaDIge1xcbiAgICBtYXJnaW46IDA7IH1cXG5cXG4jcm9vdCBjYW52YXMge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgbGVmdDogNTAlO1xcbiAgdG9wOiA1MCU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTsgfVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIhLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL2RlbW8vc25ha2UvaW5kZXguc2Nzc1xuLy8gbW9kdWxlIGlkID0gOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKlxuXHRNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuXHRBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24odXNlU291cmNlTWFwKSB7XG5cdHZhciBsaXN0ID0gW107XG5cblx0Ly8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXHRsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG5cdFx0cmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG5cdFx0XHR2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKTtcblx0XHRcdGlmKGl0ZW1bMl0pIHtcblx0XHRcdFx0cmV0dXJuIFwiQG1lZGlhIFwiICsgaXRlbVsyXSArIFwie1wiICsgY29udGVudCArIFwifVwiO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cmV0dXJuIGNvbnRlbnQ7XG5cdFx0XHR9XG5cdFx0fSkuam9pbihcIlwiKTtcblx0fTtcblxuXHQvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXHRsaXN0LmkgPSBmdW5jdGlvbihtb2R1bGVzLCBtZWRpYVF1ZXJ5KSB7XG5cdFx0aWYodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpXG5cdFx0XHRtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCBcIlwiXV07XG5cdFx0dmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGlkID0gdGhpc1tpXVswXTtcblx0XHRcdGlmKHR5cGVvZiBpZCA9PT0gXCJudW1iZXJcIilcblx0XHRcdFx0YWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuXHRcdH1cblx0XHRmb3IoaSA9IDA7IGkgPCBtb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgaXRlbSA9IG1vZHVsZXNbaV07XG5cdFx0XHQvLyBza2lwIGFscmVhZHkgaW1wb3J0ZWQgbW9kdWxlXG5cdFx0XHQvLyB0aGlzIGltcGxlbWVudGF0aW9uIGlzIG5vdCAxMDAlIHBlcmZlY3QgZm9yIHdlaXJkIG1lZGlhIHF1ZXJ5IGNvbWJpbmF0aW9uc1xuXHRcdFx0Ly8gIHdoZW4gYSBtb2R1bGUgaXMgaW1wb3J0ZWQgbXVsdGlwbGUgdGltZXMgd2l0aCBkaWZmZXJlbnQgbWVkaWEgcXVlcmllcy5cblx0XHRcdC8vICBJIGhvcGUgdGhpcyB3aWxsIG5ldmVyIG9jY3VyIChIZXkgdGhpcyB3YXkgd2UgaGF2ZSBzbWFsbGVyIGJ1bmRsZXMpXG5cdFx0XHRpZih0eXBlb2YgaXRlbVswXSAhPT0gXCJudW1iZXJcIiB8fCAhYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuXHRcdFx0XHRpZihtZWRpYVF1ZXJ5ICYmICFpdGVtWzJdKSB7XG5cdFx0XHRcdFx0aXRlbVsyXSA9IG1lZGlhUXVlcnk7XG5cdFx0XHRcdH0gZWxzZSBpZihtZWRpYVF1ZXJ5KSB7XG5cdFx0XHRcdFx0aXRlbVsyXSA9IFwiKFwiICsgaXRlbVsyXSArIFwiKSBhbmQgKFwiICsgbWVkaWFRdWVyeSArIFwiKVwiO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGxpc3QucHVzaChpdGVtKTtcblx0XHRcdH1cblx0XHR9XG5cdH07XG5cdHJldHVybiBsaXN0O1xufTtcblxuZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApIHtcblx0dmFyIGNvbnRlbnQgPSBpdGVtWzFdIHx8ICcnO1xuXHR2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cdGlmICghY3NzTWFwcGluZykge1xuXHRcdHJldHVybiBjb250ZW50O1xuXHR9XG5cblx0aWYgKHVzZVNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdHZhciBzb3VyY2VNYXBwaW5nID0gdG9Db21tZW50KGNzc01hcHBpbmcpO1xuXHRcdHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG5cdFx0XHRyZXR1cm4gJy8qIyBzb3VyY2VVUkw9JyArIGNzc01hcHBpbmcuc291cmNlUm9vdCArIHNvdXJjZSArICcgKi8nXG5cdFx0fSk7XG5cblx0XHRyZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKCdcXG4nKTtcblx0fVxuXG5cdHJldHVybiBbY29udGVudF0uam9pbignXFxuJyk7XG59XG5cbi8vIEFkYXB0ZWQgZnJvbSBjb252ZXJ0LXNvdXJjZS1tYXAgKE1JVClcbmZ1bmN0aW9uIHRvQ29tbWVudChzb3VyY2VNYXApIHtcblx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG5cdHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpO1xuXHR2YXIgZGF0YSA9ICdzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCwnICsgYmFzZTY0O1xuXG5cdHJldHVybiAnLyojICcgKyBkYXRhICsgJyAqLyc7XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1xuLy8gbW9kdWxlIGlkID0gMTBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLypcblx0TUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcblx0QXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cblxudmFyIHN0eWxlc0luRG9tID0ge307XG5cbnZhclx0bWVtb2l6ZSA9IGZ1bmN0aW9uIChmbikge1xuXHR2YXIgbWVtbztcblxuXHRyZXR1cm4gZnVuY3Rpb24gKCkge1xuXHRcdGlmICh0eXBlb2YgbWVtbyA9PT0gXCJ1bmRlZmluZWRcIikgbWVtbyA9IGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG5cdFx0cmV0dXJuIG1lbW87XG5cdH07XG59O1xuXG52YXIgaXNPbGRJRSA9IG1lbW9pemUoZnVuY3Rpb24gKCkge1xuXHQvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuXHQvLyBAc2VlIGh0dHA6Ly9icm93c2VyaGFja3MuY29tLyNoYWNrLWU3MWQ4NjkyZjY1MzM0MTczZmVlNzE1YzIyMmNiODA1XG5cdC8vIFRlc3RzIGZvciBleGlzdGVuY2Ugb2Ygc3RhbmRhcmQgZ2xvYmFscyBpcyB0byBhbGxvdyBzdHlsZS1sb2FkZXJcblx0Ly8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG5cdC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIvaXNzdWVzLzE3N1xuXHRyZXR1cm4gd2luZG93ICYmIGRvY3VtZW50ICYmIGRvY3VtZW50LmFsbCAmJiAhd2luZG93LmF0b2I7XG59KTtcblxudmFyIGdldEVsZW1lbnQgPSAoZnVuY3Rpb24gKGZuKSB7XG5cdHZhciBtZW1vID0ge307XG5cblx0cmV0dXJuIGZ1bmN0aW9uKHNlbGVjdG9yKSB7XG5cdFx0aWYgKHR5cGVvZiBtZW1vW3NlbGVjdG9yXSA9PT0gXCJ1bmRlZmluZWRcIikge1xuXHRcdFx0bWVtb1tzZWxlY3Rvcl0gPSBmbi5jYWxsKHRoaXMsIHNlbGVjdG9yKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gbWVtb1tzZWxlY3Rvcl1cblx0fTtcbn0pKGZ1bmN0aW9uICh0YXJnZXQpIHtcblx0cmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KVxufSk7XG5cbnZhciBzaW5nbGV0b24gPSBudWxsO1xudmFyXHRzaW5nbGV0b25Db3VudGVyID0gMDtcbnZhclx0c3R5bGVzSW5zZXJ0ZWRBdFRvcCA9IFtdO1xuXG52YXJcdGZpeFVybHMgPSByZXF1aXJlKFwiLi91cmxzXCIpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGxpc3QsIG9wdGlvbnMpIHtcblx0aWYgKHR5cGVvZiBERUJVRyAhPT0gXCJ1bmRlZmluZWRcIiAmJiBERUJVRykge1xuXHRcdGlmICh0eXBlb2YgZG9jdW1lbnQgIT09IFwib2JqZWN0XCIpIHRocm93IG5ldyBFcnJvcihcIlRoZSBzdHlsZS1sb2FkZXIgY2Fubm90IGJlIHVzZWQgaW4gYSBub24tYnJvd3NlciBlbnZpcm9ubWVudFwiKTtcblx0fVxuXG5cdG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuXG5cdG9wdGlvbnMuYXR0cnMgPSB0eXBlb2Ygb3B0aW9ucy5hdHRycyA9PT0gXCJvYmplY3RcIiA/IG9wdGlvbnMuYXR0cnMgOiB7fTtcblxuXHQvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cblx0Ly8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxuXHRpZiAoIW9wdGlvbnMuc2luZ2xldG9uKSBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcblxuXHQvLyBCeSBkZWZhdWx0LCBhZGQgPHN0eWxlPiB0YWdzIHRvIHRoZSA8aGVhZD4gZWxlbWVudFxuXHRpZiAoIW9wdGlvbnMuaW5zZXJ0SW50bykgb3B0aW9ucy5pbnNlcnRJbnRvID0gXCJoZWFkXCI7XG5cblx0Ly8gQnkgZGVmYXVsdCwgYWRkIDxzdHlsZT4gdGFncyB0byB0aGUgYm90dG9tIG9mIHRoZSB0YXJnZXRcblx0aWYgKCFvcHRpb25zLmluc2VydEF0KSBvcHRpb25zLmluc2VydEF0ID0gXCJib3R0b21cIjtcblxuXHR2YXIgc3R5bGVzID0gbGlzdFRvU3R5bGVzKGxpc3QsIG9wdGlvbnMpO1xuXG5cdGFkZFN0eWxlc1RvRG9tKHN0eWxlcywgb3B0aW9ucyk7XG5cblx0cmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZSAobmV3TGlzdCkge1xuXHRcdHZhciBtYXlSZW1vdmUgPSBbXTtcblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgaXRlbSA9IHN0eWxlc1tpXTtcblx0XHRcdHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdO1xuXG5cdFx0XHRkb21TdHlsZS5yZWZzLS07XG5cdFx0XHRtYXlSZW1vdmUucHVzaChkb21TdHlsZSk7XG5cdFx0fVxuXG5cdFx0aWYobmV3TGlzdCkge1xuXHRcdFx0dmFyIG5ld1N0eWxlcyA9IGxpc3RUb1N0eWxlcyhuZXdMaXN0LCBvcHRpb25zKTtcblx0XHRcdGFkZFN0eWxlc1RvRG9tKG5ld1N0eWxlcywgb3B0aW9ucyk7XG5cdFx0fVxuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBtYXlSZW1vdmUubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBkb21TdHlsZSA9IG1heVJlbW92ZVtpXTtcblxuXHRcdFx0aWYoZG9tU3R5bGUucmVmcyA9PT0gMCkge1xuXHRcdFx0XHRmb3IgKHZhciBqID0gMDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKSBkb21TdHlsZS5wYXJ0c1tqXSgpO1xuXG5cdFx0XHRcdGRlbGV0ZSBzdHlsZXNJbkRvbVtkb21TdHlsZS5pZF07XG5cdFx0XHR9XG5cdFx0fVxuXHR9O1xufTtcblxuZnVuY3Rpb24gYWRkU3R5bGVzVG9Eb20gKHN0eWxlcywgb3B0aW9ucykge1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBpdGVtID0gc3R5bGVzW2ldO1xuXHRcdHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdO1xuXG5cdFx0aWYoZG9tU3R5bGUpIHtcblx0XHRcdGRvbVN0eWxlLnJlZnMrKztcblxuXHRcdFx0Zm9yKHZhciBqID0gMDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdGRvbVN0eWxlLnBhcnRzW2pdKGl0ZW0ucGFydHNbal0pO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3IoOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRkb21TdHlsZS5wYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0sIG9wdGlvbnMpKTtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0dmFyIHBhcnRzID0gW107XG5cblx0XHRcdGZvcih2YXIgaiA9IDA7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdHBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSwgb3B0aW9ucykpO1xuXHRcdFx0fVxuXG5cdFx0XHRzdHlsZXNJbkRvbVtpdGVtLmlkXSA9IHtpZDogaXRlbS5pZCwgcmVmczogMSwgcGFydHM6IHBhcnRzfTtcblx0XHR9XG5cdH1cbn1cblxuZnVuY3Rpb24gbGlzdFRvU3R5bGVzIChsaXN0LCBvcHRpb25zKSB7XG5cdHZhciBzdHlsZXMgPSBbXTtcblx0dmFyIG5ld1N0eWxlcyA9IHt9O1xuXG5cdGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBpdGVtID0gbGlzdFtpXTtcblx0XHR2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcblx0XHR2YXIgY3NzID0gaXRlbVsxXTtcblx0XHR2YXIgbWVkaWEgPSBpdGVtWzJdO1xuXHRcdHZhciBzb3VyY2VNYXAgPSBpdGVtWzNdO1xuXHRcdHZhciBwYXJ0ID0ge2NzczogY3NzLCBtZWRpYTogbWVkaWEsIHNvdXJjZU1hcDogc291cmNlTWFwfTtcblxuXHRcdGlmKCFuZXdTdHlsZXNbaWRdKSBzdHlsZXMucHVzaChuZXdTdHlsZXNbaWRdID0ge2lkOiBpZCwgcGFydHM6IFtwYXJ0XX0pO1xuXHRcdGVsc2UgbmV3U3R5bGVzW2lkXS5wYXJ0cy5wdXNoKHBhcnQpO1xuXHR9XG5cblx0cmV0dXJuIHN0eWxlcztcbn1cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50IChvcHRpb25zLCBzdHlsZSkge1xuXHR2YXIgdGFyZ2V0ID0gZ2V0RWxlbWVudChvcHRpb25zLmluc2VydEludG8pXG5cblx0aWYgKCF0YXJnZXQpIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydEludG8nIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcblx0fVxuXG5cdHZhciBsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcCA9IHN0eWxlc0luc2VydGVkQXRUb3Bbc3R5bGVzSW5zZXJ0ZWRBdFRvcC5sZW5ndGggLSAxXTtcblxuXHRpZiAob3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJ0b3BcIikge1xuXHRcdGlmICghbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3ApIHtcblx0XHRcdHRhcmdldC5pbnNlcnRCZWZvcmUoc3R5bGUsIHRhcmdldC5maXJzdENoaWxkKTtcblx0XHR9IGVsc2UgaWYgKGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wLm5leHRTaWJsaW5nKSB7XG5cdFx0XHR0YXJnZXQuaW5zZXJ0QmVmb3JlKHN0eWxlLCBsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcC5uZXh0U2libGluZyk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG5cdFx0fVxuXHRcdHN0eWxlc0luc2VydGVkQXRUb3AucHVzaChzdHlsZSk7XG5cdH0gZWxzZSBpZiAob3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJib3R0b21cIikge1xuXHRcdHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG5cdH0gZWxzZSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCB2YWx1ZSBmb3IgcGFyYW1ldGVyICdpbnNlcnRBdCcuIE11c3QgYmUgJ3RvcCcgb3IgJ2JvdHRvbScuXCIpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudCAoc3R5bGUpIHtcblx0aWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHJldHVybiBmYWxzZTtcblx0c3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG5cblx0dmFyIGlkeCA9IHN0eWxlc0luc2VydGVkQXRUb3AuaW5kZXhPZihzdHlsZSk7XG5cdGlmKGlkeCA+PSAwKSB7XG5cdFx0c3R5bGVzSW5zZXJ0ZWRBdFRvcC5zcGxpY2UoaWR4LCAxKTtcblx0fVxufVxuXG5mdW5jdGlvbiBjcmVhdGVTdHlsZUVsZW1lbnQgKG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuXG5cdG9wdGlvbnMuYXR0cnMudHlwZSA9IFwidGV4dC9jc3NcIjtcblxuXHRhZGRBdHRycyhzdHlsZSwgb3B0aW9ucy5hdHRycyk7XG5cdGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zLCBzdHlsZSk7XG5cblx0cmV0dXJuIHN0eWxlO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVMaW5rRWxlbWVudCAob3B0aW9ucykge1xuXHR2YXIgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaW5rXCIpO1xuXG5cdG9wdGlvbnMuYXR0cnMudHlwZSA9IFwidGV4dC9jc3NcIjtcblx0b3B0aW9ucy5hdHRycy5yZWwgPSBcInN0eWxlc2hlZXRcIjtcblxuXHRhZGRBdHRycyhsaW5rLCBvcHRpb25zLmF0dHJzKTtcblx0aW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMsIGxpbmspO1xuXG5cdHJldHVybiBsaW5rO1xufVxuXG5mdW5jdGlvbiBhZGRBdHRycyAoZWwsIGF0dHJzKSB7XG5cdE9iamVjdC5rZXlzKGF0dHJzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcblx0XHRlbC5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyc1trZXldKTtcblx0fSk7XG59XG5cbmZ1bmN0aW9uIGFkZFN0eWxlIChvYmosIG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlLCB1cGRhdGUsIHJlbW92ZSwgcmVzdWx0O1xuXG5cdC8vIElmIGEgdHJhbnNmb3JtIGZ1bmN0aW9uIHdhcyBkZWZpbmVkLCBydW4gaXQgb24gdGhlIGNzc1xuXHRpZiAob3B0aW9ucy50cmFuc2Zvcm0gJiYgb2JqLmNzcykge1xuXHQgICAgcmVzdWx0ID0gb3B0aW9ucy50cmFuc2Zvcm0ob2JqLmNzcyk7XG5cblx0ICAgIGlmIChyZXN1bHQpIHtcblx0ICAgIFx0Ly8gSWYgdHJhbnNmb3JtIHJldHVybnMgYSB2YWx1ZSwgdXNlIHRoYXQgaW5zdGVhZCBvZiB0aGUgb3JpZ2luYWwgY3NzLlxuXHQgICAgXHQvLyBUaGlzIGFsbG93cyBydW5uaW5nIHJ1bnRpbWUgdHJhbnNmb3JtYXRpb25zIG9uIHRoZSBjc3MuXG5cdCAgICBcdG9iai5jc3MgPSByZXN1bHQ7XG5cdCAgICB9IGVsc2Uge1xuXHQgICAgXHQvLyBJZiB0aGUgdHJhbnNmb3JtIGZ1bmN0aW9uIHJldHVybnMgYSBmYWxzeSB2YWx1ZSwgZG9uJ3QgYWRkIHRoaXMgY3NzLlxuXHQgICAgXHQvLyBUaGlzIGFsbG93cyBjb25kaXRpb25hbCBsb2FkaW5nIG9mIGNzc1xuXHQgICAgXHRyZXR1cm4gZnVuY3Rpb24oKSB7XG5cdCAgICBcdFx0Ly8gbm9vcFxuXHQgICAgXHR9O1xuXHQgICAgfVxuXHR9XG5cblx0aWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG5cdFx0dmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG5cblx0XHRzdHlsZSA9IHNpbmdsZXRvbiB8fCAoc2luZ2xldG9uID0gY3JlYXRlU3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcblxuXHRcdHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgZmFsc2UpO1xuXHRcdHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgdHJ1ZSk7XG5cblx0fSBlbHNlIGlmIChcblx0XHRvYmouc291cmNlTWFwICYmXG5cdFx0dHlwZW9mIFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIFVSTC5jcmVhdGVPYmplY3RVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBVUkwucmV2b2tlT2JqZWN0VVJMID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgQmxvYiA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIlxuXHQpIHtcblx0XHRzdHlsZSA9IGNyZWF0ZUxpbmtFbGVtZW50KG9wdGlvbnMpO1xuXHRcdHVwZGF0ZSA9IHVwZGF0ZUxpbmsuYmluZChudWxsLCBzdHlsZSwgb3B0aW9ucyk7XG5cdFx0cmVtb3ZlID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0cmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcblxuXHRcdFx0aWYoc3R5bGUuaHJlZikgVVJMLnJldm9rZU9iamVjdFVSTChzdHlsZS5ocmVmKTtcblx0XHR9O1xuXHR9IGVsc2Uge1xuXHRcdHN0eWxlID0gY3JlYXRlU3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuXHRcdHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZSk7XG5cdFx0cmVtb3ZlID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0cmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcblx0XHR9O1xuXHR9XG5cblx0dXBkYXRlKG9iaik7XG5cblx0cmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlIChuZXdPYmopIHtcblx0XHRpZiAobmV3T2JqKSB7XG5cdFx0XHRpZiAoXG5cdFx0XHRcdG5ld09iai5jc3MgPT09IG9iai5jc3MgJiZcblx0XHRcdFx0bmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiZcblx0XHRcdFx0bmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcFxuXHRcdFx0KSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0dXBkYXRlKG9iaiA9IG5ld09iaik7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJlbW92ZSgpO1xuXHRcdH1cblx0fTtcbn1cblxudmFyIHJlcGxhY2VUZXh0ID0gKGZ1bmN0aW9uICgpIHtcblx0dmFyIHRleHRTdG9yZSA9IFtdO1xuXG5cdHJldHVybiBmdW5jdGlvbiAoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG5cdFx0dGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuXG5cdFx0cmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XG5cdH07XG59KSgpO1xuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnIChzdHlsZSwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG5cdHZhciBjc3MgPSByZW1vdmUgPyBcIlwiIDogb2JqLmNzcztcblxuXHRpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuXHRcdHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuXHR9IGVsc2Uge1xuXHRcdHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcblx0XHR2YXIgY2hpbGROb2RlcyA9IHN0eWxlLmNoaWxkTm9kZXM7XG5cblx0XHRpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHN0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcblxuXHRcdGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuXHRcdFx0c3R5bGUuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0c3R5bGUuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XG5cdFx0fVxuXHR9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcgKHN0eWxlLCBvYmopIHtcblx0dmFyIGNzcyA9IG9iai5jc3M7XG5cdHZhciBtZWRpYSA9IG9iai5tZWRpYTtcblxuXHRpZihtZWRpYSkge1xuXHRcdHN0eWxlLnNldEF0dHJpYnV0ZShcIm1lZGlhXCIsIG1lZGlhKVxuXHR9XG5cblx0aWYoc3R5bGUuc3R5bGVTaGVldCkge1xuXHRcdHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcblx0fSBlbHNlIHtcblx0XHR3aGlsZShzdHlsZS5maXJzdENoaWxkKSB7XG5cdFx0XHRzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcblx0XHR9XG5cblx0XHRzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcblx0fVxufVxuXG5mdW5jdGlvbiB1cGRhdGVMaW5rIChsaW5rLCBvcHRpb25zLCBvYmopIHtcblx0dmFyIGNzcyA9IG9iai5jc3M7XG5cdHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG5cdC8qXG5cdFx0SWYgY29udmVydFRvQWJzb2x1dGVVcmxzIGlzbid0IGRlZmluZWQsIGJ1dCBzb3VyY2VtYXBzIGFyZSBlbmFibGVkXG5cdFx0YW5kIHRoZXJlIGlzIG5vIHB1YmxpY1BhdGggZGVmaW5lZCB0aGVuIGxldHMgdHVybiBjb252ZXJ0VG9BYnNvbHV0ZVVybHNcblx0XHRvbiBieSBkZWZhdWx0LiAgT3RoZXJ3aXNlIGRlZmF1bHQgdG8gdGhlIGNvbnZlcnRUb0Fic29sdXRlVXJscyBvcHRpb25cblx0XHRkaXJlY3RseVxuXHQqL1xuXHR2YXIgYXV0b0ZpeFVybHMgPSBvcHRpb25zLmNvbnZlcnRUb0Fic29sdXRlVXJscyA9PT0gdW5kZWZpbmVkICYmIHNvdXJjZU1hcDtcblxuXHRpZiAob3B0aW9ucy5jb252ZXJ0VG9BYnNvbHV0ZVVybHMgfHwgYXV0b0ZpeFVybHMpIHtcblx0XHRjc3MgPSBmaXhVcmxzKGNzcyk7XG5cdH1cblxuXHRpZiAoc291cmNlTWFwKSB7XG5cdFx0Ly8gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMjY2MDM4NzVcblx0XHRjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiICsgYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSArIFwiICovXCI7XG5cdH1cblxuXHR2YXIgYmxvYiA9IG5ldyBCbG9iKFtjc3NdLCB7IHR5cGU6IFwidGV4dC9jc3NcIiB9KTtcblxuXHR2YXIgb2xkU3JjID0gbGluay5ocmVmO1xuXG5cdGxpbmsuaHJlZiA9IFVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYik7XG5cblx0aWYob2xkU3JjKSBVUkwucmV2b2tlT2JqZWN0VVJMKG9sZFNyYyk7XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1xuLy8gbW9kdWxlIGlkID0gMTFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXG4vKipcbiAqIFdoZW4gc291cmNlIG1hcHMgYXJlIGVuYWJsZWQsIGBzdHlsZS1sb2FkZXJgIHVzZXMgYSBsaW5rIGVsZW1lbnQgd2l0aCBhIGRhdGEtdXJpIHRvXG4gKiBlbWJlZCB0aGUgY3NzIG9uIHRoZSBwYWdlLiBUaGlzIGJyZWFrcyBhbGwgcmVsYXRpdmUgdXJscyBiZWNhdXNlIG5vdyB0aGV5IGFyZSByZWxhdGl2ZSB0byBhXG4gKiBidW5kbGUgaW5zdGVhZCBvZiB0aGUgY3VycmVudCBwYWdlLlxuICpcbiAqIE9uZSBzb2x1dGlvbiBpcyB0byBvbmx5IHVzZSBmdWxsIHVybHMsIGJ1dCB0aGF0IG1heSBiZSBpbXBvc3NpYmxlLlxuICpcbiAqIEluc3RlYWQsIHRoaXMgZnVuY3Rpb24gXCJmaXhlc1wiIHRoZSByZWxhdGl2ZSB1cmxzIHRvIGJlIGFic29sdXRlIGFjY29yZGluZyB0byB0aGUgY3VycmVudCBwYWdlIGxvY2F0aW9uLlxuICpcbiAqIEEgcnVkaW1lbnRhcnkgdGVzdCBzdWl0ZSBpcyBsb2NhdGVkIGF0IGB0ZXN0L2ZpeFVybHMuanNgIGFuZCBjYW4gYmUgcnVuIHZpYSB0aGUgYG5wbSB0ZXN0YCBjb21tYW5kLlxuICpcbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3MpIHtcbiAgLy8gZ2V0IGN1cnJlbnQgbG9jYXRpb25cbiAgdmFyIGxvY2F0aW9uID0gdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiAmJiB3aW5kb3cubG9jYXRpb247XG5cbiAgaWYgKCFsb2NhdGlvbikge1xuICAgIHRocm93IG5ldyBFcnJvcihcImZpeFVybHMgcmVxdWlyZXMgd2luZG93LmxvY2F0aW9uXCIpO1xuICB9XG5cblx0Ly8gYmxhbmsgb3IgbnVsbD9cblx0aWYgKCFjc3MgfHwgdHlwZW9mIGNzcyAhPT0gXCJzdHJpbmdcIikge1xuXHQgIHJldHVybiBjc3M7XG4gIH1cblxuICB2YXIgYmFzZVVybCA9IGxvY2F0aW9uLnByb3RvY29sICsgXCIvL1wiICsgbG9jYXRpb24uaG9zdDtcbiAgdmFyIGN1cnJlbnREaXIgPSBiYXNlVXJsICsgbG9jYXRpb24ucGF0aG5hbWUucmVwbGFjZSgvXFwvW15cXC9dKiQvLCBcIi9cIik7XG5cblx0Ly8gY29udmVydCBlYWNoIHVybCguLi4pXG5cdC8qXG5cdFRoaXMgcmVndWxhciBleHByZXNzaW9uIGlzIGp1c3QgYSB3YXkgdG8gcmVjdXJzaXZlbHkgbWF0Y2ggYnJhY2tldHMgd2l0aGluXG5cdGEgc3RyaW5nLlxuXG5cdCAvdXJsXFxzKlxcKCAgPSBNYXRjaCBvbiB0aGUgd29yZCBcInVybFwiIHdpdGggYW55IHdoaXRlc3BhY2UgYWZ0ZXIgaXQgYW5kIHRoZW4gYSBwYXJlbnNcblx0ICAgKCAgPSBTdGFydCBhIGNhcHR1cmluZyBncm91cFxuXHQgICAgICg/OiAgPSBTdGFydCBhIG5vbi1jYXB0dXJpbmcgZ3JvdXBcblx0ICAgICAgICAgW14pKF0gID0gTWF0Y2ggYW55dGhpbmcgdGhhdCBpc24ndCBhIHBhcmVudGhlc2VzXG5cdCAgICAgICAgIHwgID0gT1Jcblx0ICAgICAgICAgXFwoICA9IE1hdGNoIGEgc3RhcnQgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICg/OiAgPSBTdGFydCBhbm90aGVyIG5vbi1jYXB0dXJpbmcgZ3JvdXBzXG5cdCAgICAgICAgICAgICAgICAgW14pKF0rICA9IE1hdGNoIGFueXRoaW5nIHRoYXQgaXNuJ3QgYSBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgICAgIHwgID0gT1Jcblx0ICAgICAgICAgICAgICAgICBcXCggID0gTWF0Y2ggYSBzdGFydCBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgICAgICAgICBbXikoXSogID0gTWF0Y2ggYW55dGhpbmcgdGhhdCBpc24ndCBhIHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAgICAgXFwpICA9IE1hdGNoIGEgZW5kIHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICApICA9IEVuZCBHcm91cFxuICAgICAgICAgICAgICAqXFwpID0gTWF0Y2ggYW55dGhpbmcgYW5kIHRoZW4gYSBjbG9zZSBwYXJlbnNcbiAgICAgICAgICApICA9IENsb3NlIG5vbi1jYXB0dXJpbmcgZ3JvdXBcbiAgICAgICAgICAqICA9IE1hdGNoIGFueXRoaW5nXG4gICAgICAgKSAgPSBDbG9zZSBjYXB0dXJpbmcgZ3JvdXBcblx0IFxcKSAgPSBNYXRjaCBhIGNsb3NlIHBhcmVuc1xuXG5cdCAvZ2kgID0gR2V0IGFsbCBtYXRjaGVzLCBub3QgdGhlIGZpcnN0LiAgQmUgY2FzZSBpbnNlbnNpdGl2ZS5cblx0ICovXG5cdHZhciBmaXhlZENzcyA9IGNzcy5yZXBsYWNlKC91cmxcXHMqXFwoKCg/OlteKShdfFxcKCg/OlteKShdK3xcXChbXikoXSpcXCkpKlxcKSkqKVxcKS9naSwgZnVuY3Rpb24oZnVsbE1hdGNoLCBvcmlnVXJsKSB7XG5cdFx0Ly8gc3RyaXAgcXVvdGVzIChpZiB0aGV5IGV4aXN0KVxuXHRcdHZhciB1bnF1b3RlZE9yaWdVcmwgPSBvcmlnVXJsXG5cdFx0XHQudHJpbSgpXG5cdFx0XHQucmVwbGFjZSgvXlwiKC4qKVwiJC8sIGZ1bmN0aW9uKG8sICQxKXsgcmV0dXJuICQxOyB9KVxuXHRcdFx0LnJlcGxhY2UoL14nKC4qKSckLywgZnVuY3Rpb24obywgJDEpeyByZXR1cm4gJDE7IH0pO1xuXG5cdFx0Ly8gYWxyZWFkeSBhIGZ1bGwgdXJsPyBubyBjaGFuZ2Vcblx0XHRpZiAoL14oI3xkYXRhOnxodHRwOlxcL1xcL3xodHRwczpcXC9cXC98ZmlsZTpcXC9cXC9cXC8pL2kudGVzdCh1bnF1b3RlZE9yaWdVcmwpKSB7XG5cdFx0ICByZXR1cm4gZnVsbE1hdGNoO1xuXHRcdH1cblxuXHRcdC8vIGNvbnZlcnQgdGhlIHVybCB0byBhIGZ1bGwgdXJsXG5cdFx0dmFyIG5ld1VybDtcblxuXHRcdGlmICh1bnF1b3RlZE9yaWdVcmwuaW5kZXhPZihcIi8vXCIpID09PSAwKSB7XG5cdFx0ICBcdC8vVE9ETzogc2hvdWxkIHdlIGFkZCBwcm90b2NvbD9cblx0XHRcdG5ld1VybCA9IHVucXVvdGVkT3JpZ1VybDtcblx0XHR9IGVsc2UgaWYgKHVucXVvdGVkT3JpZ1VybC5pbmRleE9mKFwiL1wiKSA9PT0gMCkge1xuXHRcdFx0Ly8gcGF0aCBzaG91bGQgYmUgcmVsYXRpdmUgdG8gdGhlIGJhc2UgdXJsXG5cdFx0XHRuZXdVcmwgPSBiYXNlVXJsICsgdW5xdW90ZWRPcmlnVXJsOyAvLyBhbHJlYWR5IHN0YXJ0cyB3aXRoICcvJ1xuXHRcdH0gZWxzZSB7XG5cdFx0XHQvLyBwYXRoIHNob3VsZCBiZSByZWxhdGl2ZSB0byBjdXJyZW50IGRpcmVjdG9yeVxuXHRcdFx0bmV3VXJsID0gY3VycmVudERpciArIHVucXVvdGVkT3JpZ1VybC5yZXBsYWNlKC9eXFwuXFwvLywgXCJcIik7IC8vIFN0cmlwIGxlYWRpbmcgJy4vJ1xuXHRcdH1cblxuXHRcdC8vIHNlbmQgYmFjayB0aGUgZml4ZWQgdXJsKC4uLilcblx0XHRyZXR1cm4gXCJ1cmwoXCIgKyBKU09OLnN0cmluZ2lmeShuZXdVcmwpICsgXCIpXCI7XG5cdH0pO1xuXG5cdC8vIHNlbmQgYmFjayB0aGUgZml4ZWQgY3NzXG5cdHJldHVybiBmaXhlZENzcztcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL3VybHMuanNcbi8vIG1vZHVsZSBpZCA9IDEyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=