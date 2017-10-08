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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCAxMzBjNzIyMjJkMWMyOGIyNzEzYSIsIndlYnBhY2s6Ly8vLi9zcmMvZ2FtdXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRlTWFuYWdlci5qcyJdLCJuYW1lcyI6WyJfYW5pbWF0aW9uTG9vcEtleSIsIl9hY2N1bXVsYXRvciIsIl9mcHMiLCJfc3RvcmUiLCJfdXBkYXRlck1hcCIsIl9yZW5kZXJlck1hcCIsIl9sb29wIiwibGFzdFRpbWVzdGFtcCIsIndpbmRvdyIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsIm5vdyIsIkRhdGUiLCJkdCIsImtleSIsInJlbmRlcmVyIiwicmVuZGVyU3RhdGUiLCJmaW5hbFJlbmRlclN0YXRlIiwiZ2FtdXgiLCJjb25maWciLCJmcHMiLCJjb250YWluZXIiLCJsYXllcnMiLCJmb3JFYWNoIiwibGF5ZXIiLCJjYW52YXMiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJhcHBlbmRDaGlsZCIsIm5hbWUiLCJ1cGRhdGVyIiwicmVuZGVyIiwiYmluZCIsInJlZHVjZXJNYXAiLCJpbml0IiwiZ2V0U3RhdGUiLCJzdGFydCIsImRpc3BhdGNoIiwiYWN0aW9uIiwiY3JlYXRlU3RvcmUiLCJjb21iaW5lUmVkdWNlciIsImNvbWJpbmVVcGRhdGVyIiwicmVkdWNlciIsInN0YXRlIiwiY29uc29sZSIsImdyb3VwIiwidHlwZSIsImluZm8iLCJncm91cEVuZCIsInN0YXRlS2V5IiwibmV3U3RhdGUiLCJkaXJ0eUtleXMiLCJyZWR1Y2VkU3RhdGUiLCJwdXNoIiwidXBkYXRlck1hcCIsInJlbmRlcmVyTWFwIiwibmV3RmluYWxSZW5kZXJTdGF0ZSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNWQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDN0RBOztBQUVBOzs7QUFHQSxJQUFJQSxvQkFBb0IsSUFBeEI7QUFDQTs7O0FBR0EsSUFBSUMsZUFBZSxDQUFuQjtBQUNBOzs7QUFHQSxJQUFJQyxPQUFPLEVBQVg7QUFDQTs7O0FBR0EsSUFBSUMsU0FBUyxFQUFiOztBQUVBLElBQUlDLGNBQWMsRUFBbEI7O0FBRUEsSUFBSUMsZUFBZSxFQUFuQjs7QUFFQTs7O0FBR0EsU0FBU0MsS0FBVCxDQUFnQkMsYUFBaEIsRUFBK0I7QUFDN0JQLHNCQUFvQlEsT0FBT0MscUJBQVAsQ0FBNkIsWUFBTTtBQUNyRCxRQUFNQyxNQUFNQyxLQUFLRCxHQUFMLEVBQVo7QUFDQSxRQUFNRSxLQUFLLE9BQU9WLElBQWxCO0FBQ0FELG9CQUFnQlMsTUFBTUgsYUFBdEI7O0FBRUEsUUFBSU4sZ0JBQWdCVyxFQUFwQixFQUF3QjtBQUN0QixhQUFPWCxnQkFBZ0JXLEVBQXZCLEVBQTJCO0FBQ3pCWCx3QkFBZ0JXLEVBQWhCO0FBQ0Q7QUFDRCxXQUFLLElBQUlDLEdBQVQsSUFBZ0JSLFlBQWhCLEVBQThCO0FBQzVCLFlBQUlTLFdBQVdULGFBQWFRLEdBQWIsQ0FBZjtBQUNBQyxpQkFBU0MsV0FBVCxHQUF1QkQsU0FBU0EsU0FBU0MsV0FBbEIsRUFBK0JELFNBQVNFLGdCQUF4QyxFQUEwREosRUFBMUQsQ0FBdkI7QUFDRDtBQUNGO0FBQ0ROLFVBQU1JLEdBQU47QUFDRCxHQWZtQixDQUFwQjtBQWdCRDs7QUFFRCxJQUFNTyxRQUFRO0FBQ1pDLFVBQVEsa0JBQWlCO0FBQUEsUUFBaEJBLE9BQWdCLHVFQUFQLEVBQU87O0FBQ3ZCO0FBQ0FoQixXQUFPZ0IsUUFBT0MsR0FBUCxJQUFjakIsSUFBckI7O0FBRUEsUUFBSWtCLFlBQVlGLFFBQU9FLFNBQXZCOztBQUVBO0FBQ0FGLFlBQU9HLE1BQVAsQ0FBY0MsT0FBZCxDQUFzQixVQUFDQyxLQUFELEVBQVc7QUFDL0IsVUFBSUMsU0FBU0MsU0FBU0MsYUFBVCxDQUF1QixRQUF2QixDQUFiO0FBQ0FOLGdCQUFVTyxXQUFWLENBQXNCSCxNQUF0Qjs7QUFFQXBCLGtCQUFZbUIsTUFBTUssSUFBbEIsSUFBMEJMLE1BQU1NLE9BQWhDO0FBQ0F4QixtQkFBYWtCLE1BQU1LLElBQW5CLElBQTJCTCxNQUFNTyxNQUFOLENBQWFDLElBQWIsQ0FBa0IsSUFBbEIsRUFBd0JQLE1BQXhCLENBQTNCO0FBQ0QsS0FORDs7QUFRQTtBQUNBckIsYUFBUywrQkFBWSxrQ0FBZWUsUUFBT2MsVUFBdEIsRUFBa0Msa0NBQWU1QixXQUFmLEVBQTRCQyxZQUE1QixDQUFsQyxDQUFaLENBQVQ7QUFDQSxRQUFJYSxRQUFPZSxJQUFYLEVBQWlCO0FBQ2ZmLGNBQU9lLElBQVAsQ0FBWTlCLE9BQU8rQixRQUFQLEVBQVo7QUFDRDtBQUNGLEdBckJXOztBQXVCWmIsVUFBUSxFQXZCSTs7QUF5QlpjLFNBQU8saUJBQU07QUFDWDdCLFVBQU1LLEtBQUtELEdBQUwsRUFBTjtBQUNELEdBM0JXOztBQTZCWjBCLFlBQVUsa0JBQUNDLE1BQUQsRUFBWTtBQUNwQmxDLFdBQU9pQyxRQUFQLENBQWdCQyxNQUFoQjtBQUNEOztBQUVEO0FBQ0E7QUFsQ1ksQ0FBZDs7a0JBcUNlcEIsSzs7QUFHZjtBQUNBLGdDOzs7Ozs7Ozs7Ozs7UUN0RmdCcUIsVyxHQUFBQSxXO1FBNkNBQyxjLEdBQUFBLGM7UUErQkFDLGMsR0FBQUEsYztBQTVFVCxTQUFTRixXQUFULENBQXNCRyxPQUF0QixFQUErQjtBQUNwQztBQUNBLE1BQUlDLFFBQVFELFNBQVo7O0FBRUEsU0FBTztBQUNMOzs7QUFHQUwsY0FBVSxvQkFBaUI7QUFBQSxVQUFoQkMsTUFBZ0IsdUVBQVAsRUFBTzs7QUFDekIsVUFBSSxJQUFKLEVBQWdDO0FBQzlCO0FBQ0FNLGdCQUFRQyxLQUFSLENBQWNQLE9BQU9RLElBQXJCO0FBQ0FGLGdCQUFRRyxJQUFSLENBQWEsV0FBYixFQUEwQixjQUExQixFQUEwQ0osS0FBMUM7QUFDQUMsZ0JBQVFHLElBQVIsQ0FBYSxXQUFiLEVBQTBCLFlBQTFCLEVBQXdDVCxNQUF4QztBQUNEOztBQUVEO0FBQ0FLLGNBQVFELFFBQVFDLEtBQVIsRUFBZUwsTUFBZixDQUFSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsVUFBSSxJQUFKLEVBQWdDO0FBQzlCO0FBQ0FNLGdCQUFRRyxJQUFSLENBQWEsVUFBYixFQUF5QixjQUF6QixFQUF5Q0osS0FBekM7QUFDQUMsZ0JBQVFJLFFBQVI7QUFDRDtBQUNGLEtBeEJJO0FBeUJMOzs7O0FBSUFiLGNBQVUsa0JBQUNjLFFBQUQsRUFBYztBQUN0QixVQUFJLENBQUNBLFFBQUwsRUFBZTtBQUNiLGVBQU9OLEtBQVA7QUFDRCxPQUZELE1BR0s7QUFDSCxlQUFPQSxNQUFNTSxRQUFOLENBQVA7QUFDRDtBQUNGO0FBcENJLEdBQVA7QUFzQ0Q7O0FBRUQ7QUFDTyxTQUFTVCxjQUFULEdBQW1EO0FBQUEsTUFBMUJQLFVBQTBCLHVFQUFiLEVBQWE7QUFBQSxNQUFUSCxPQUFTOzs7QUFFeEQ7QUFDQSxTQUFPLFlBQTZCO0FBQUEsUUFBNUJhLEtBQTRCLHVFQUFwQixFQUFvQjtBQUFBLFFBQWhCTCxNQUFnQix1RUFBUCxFQUFPOztBQUNsQyxRQUFJWSxXQUFXLEVBQWY7QUFBQSxRQUNJQyxZQUFZLEVBRGhCOztBQUdBO0FBQ0EsU0FBSyxJQUFJckMsR0FBVCxJQUFnQm1CLFVBQWhCLEVBQTRCO0FBQzFCO0FBQ0E7QUFDQSxVQUFJbUIsZUFBZW5CLFdBQVduQixHQUFYLEVBQWdCNkIsTUFBTTdCLEdBQU4sQ0FBaEIsRUFBNEJ3QixNQUE1QixFQUFvQ0ssS0FBcEMsQ0FBbkI7O0FBRUEsVUFBSVMsaUJBQWlCVCxNQUFNN0IsR0FBTixDQUFyQixFQUFpQztBQUMvQnFDLGtCQUFVRSxJQUFWLENBQWV2QyxHQUFmO0FBQ0Q7O0FBRURvQyxlQUFTcEMsR0FBVCxJQUFnQnNDLFlBQWhCO0FBQ0Q7O0FBRUQ7QUFDQXRCLFlBQVFvQixRQUFSLEVBQWtCQyxTQUFsQjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsV0FBT0QsUUFBUDtBQUNELEdBekJEO0FBMEJEOztBQUVNLFNBQVNULGNBQVQsR0FBNEQ7QUFBQSxNQUFuQ2EsVUFBbUMsdUVBQXRCLEVBQXNCO0FBQUEsTUFBbEJDLFdBQWtCLHVFQUFKLEVBQUk7O0FBQ2pFO0FBQ0EsU0FBTyxZQUFnQztBQUFBLFFBQS9CWixLQUErQix1RUFBdkIsRUFBdUI7QUFBQSxRQUFuQlEsU0FBbUIsdUVBQVAsRUFBTzs7QUFDckMsUUFBSUssc0JBQXNCLEVBQTFCO0FBQ0EsU0FBSyxJQUFJMUMsR0FBVCxJQUFnQndDLFVBQWhCLEVBQTRCO0FBQzFCO0FBQ0FDLGtCQUFZekMsR0FBWixFQUFpQkcsZ0JBQWpCLEdBQW9DcUMsV0FBV3hDLEdBQVgsRUFBZ0J5QyxZQUFZekMsR0FBWixFQUFpQkcsZ0JBQWpDLEVBQW1EMEIsS0FBbkQsRUFBMERRLFNBQTFELENBQXBDO0FBQ0Q7QUFDRixHQU5EO0FBT0QsQyIsImZpbGUiOiJnYW11eC5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcImdhbXV4XCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcImdhbXV4XCJdID0gZmFjdG9yeSgpO1xufSkodGhpcywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9cIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCAxMzBjNzIyMjJkMWMyOGIyNzEzYSIsImltcG9ydCB7Y29tYmluZVJlZHVjZXIsIGNyZWF0ZVN0b3JlLCBjb21iaW5lVXBkYXRlcn0gZnJvbSAnLi9zdGF0ZU1hbmFnZXInXG5cbi8qKlxuICogVGhlIGFuaW1hdGlvbiBsb29wIGtleSBmb3IgY2FuY2VsIGFuaW1hdGlvblxuICovXG5sZXQgX2FuaW1hdGlvbkxvb3BLZXkgPSBudWxsXG4vKipcbiAqIEFjY3VtdWxhdG9yIGZvciB0aW1lLWJhc2VkIGFuaW1hdGlvblxuICovXG5sZXQgX2FjY3VtdWxhdG9yID0gMFxuLyoqXG4gKiBUaGUgZGVmYXVsdCBmcHNcbiAqL1xubGV0IF9mcHMgPSA2MFxuLyoqXG4gKiBUaGUgc3RvcmUgZm9yIGdhbWVcbiAqL1xubGV0IF9zdG9yZSA9IHt9XG5cbmxldCBfdXBkYXRlck1hcCA9IHt9XG5cbmxldCBfcmVuZGVyZXJNYXAgPSB7fVxuXG4vKipcbiAqIFRyaWdnZXIgZ2FtZSBsb29wXG4gKi9cbmZ1bmN0aW9uIF9sb29wIChsYXN0VGltZXN0YW1wKSB7XG4gIF9hbmltYXRpb25Mb29wS2V5ID0gd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgY29uc3Qgbm93ID0gRGF0ZS5ub3coKVxuICAgIGNvbnN0IGR0ID0gMTAwMCAvIF9mcHNcbiAgICBfYWNjdW11bGF0b3IgKz0gbm93IC0gbGFzdFRpbWVzdGFtcFxuXG4gICAgaWYgKF9hY2N1bXVsYXRvciA+PSBkdCkge1xuICAgICAgd2hpbGUgKF9hY2N1bXVsYXRvciA+PSBkdCkge1xuICAgICAgICBfYWNjdW11bGF0b3IgLT0gZHRcbiAgICAgIH1cbiAgICAgIGZvciAobGV0IGtleSBpbiBfcmVuZGVyZXJNYXApIHtcbiAgICAgICAgbGV0IHJlbmRlcmVyID0gX3JlbmRlcmVyTWFwW2tleV1cbiAgICAgICAgcmVuZGVyZXIucmVuZGVyU3RhdGUgPSByZW5kZXJlcihyZW5kZXJlci5yZW5kZXJTdGF0ZSwgcmVuZGVyZXIuZmluYWxSZW5kZXJTdGF0ZSwgZHQpXG4gICAgICB9XG4gICAgfVxuICAgIF9sb29wKG5vdylcbiAgfSlcbn1cblxuY29uc3QgZ2FtdXggPSB7XG4gIGNvbmZpZzogKGNvbmZpZyA9IHt9KSA9PiB7XG4gICAgLy8gQ29uZmlnIHRoZSBwcml2YXRlIGdsb2JhbHNcbiAgICBfZnBzID0gY29uZmlnLmZwcyB8fCBfZnBzXG5cbiAgICBsZXQgY29udGFpbmVyID0gY29uZmlnLmNvbnRhaW5lclxuXG4gICAgLy8gQ3JlYXRlIGdhbWUgbGF5ZXJzXG4gICAgY29uZmlnLmxheWVycy5mb3JFYWNoKChsYXllcikgPT4ge1xuICAgICAgbGV0IGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpXG4gICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoY2FudmFzKVxuXG4gICAgICBfdXBkYXRlck1hcFtsYXllci5uYW1lXSA9IGxheWVyLnVwZGF0ZXJcbiAgICAgIF9yZW5kZXJlck1hcFtsYXllci5uYW1lXSA9IGxheWVyLnJlbmRlci5iaW5kKG51bGwsIGNhbnZhcylcbiAgICB9KVxuXG4gICAgLy8gQ3JlYXRlIGdhbWUgc3RvcmVcbiAgICBfc3RvcmUgPSBjcmVhdGVTdG9yZShjb21iaW5lUmVkdWNlcihjb25maWcucmVkdWNlck1hcCwgY29tYmluZVVwZGF0ZXIoX3VwZGF0ZXJNYXAsIF9yZW5kZXJlck1hcCkpKVxuICAgIGlmIChjb25maWcuaW5pdCkge1xuICAgICAgY29uZmlnLmluaXQoX3N0b3JlLmdldFN0YXRlKCkpXG4gICAgfVxuICB9LFxuXG4gIGxheWVyczoge30sXG5cbiAgc3RhcnQ6ICgpID0+IHtcbiAgICBfbG9vcChEYXRlLm5vdygpKVxuICB9LFxuXG4gIGRpc3BhdGNoOiAoYWN0aW9uKSA9PiB7XG4gICAgX3N0b3JlLmRpc3BhdGNoKGFjdGlvbilcbiAgfVxuXG4gIC8vICpcbiAgLy8gICogR2FtZSB3aWxsIGJlIGF2YWlsYWJsZSBvbmNlIGNvbmZpZ3VyZWRcbn1cblxuZXhwb3J0IGRlZmF1bHQgZ2FtdXhcblxuXG4vLyBUT0RPXG4vLyAxLiBCdWlsZCBmaWxlIGZvciBFUzYgbW9kdWxlc1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9nYW11eC5qcyIsImV4cG9ydCBmdW5jdGlvbiBjcmVhdGVTdG9yZSAocmVkdWNlcikge1xuICAvLyBJbml0IHN0YXRlXG4gIGxldCBzdGF0ZSA9IHJlZHVjZXIoKVxuXG4gIHJldHVybiB7XG4gICAgLyoqXG4gICAgICogRGlzcGF0Y2ggYWN0aW9uIHRvIHRyaWdnZXIgc3RhdGUgY2hhbmdlc1xuICAgICAqL1xuICAgIGRpc3BhdGNoOiAoYWN0aW9uID0ge30pID0+IHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5jb2RlID09PSAnREVWJykge1xuICAgICAgICAvLyBsb2cgYWN0aW9ucyBpbiBjb25zb2xlXG4gICAgICAgIGNvbnNvbGUuZ3JvdXAoYWN0aW9uLnR5cGUpXG4gICAgICAgIGNvbnNvbGUuaW5mbygnJWNiZWZvcmU6JywgJ2NvbG9yOiBncmVlbicsIHN0YXRlKVxuICAgICAgICBjb25zb2xlLmluZm8oJyVjYWN0aW9uOicsICdjb2xvcjogcmVkJywgYWN0aW9uKVxuICAgICAgfVxuICAgICAgXG4gICAgICAvLyBVcGRhdGUgc3RhdGVcbiAgICAgIHN0YXRlID0gcmVkdWNlcihzdGF0ZSwgYWN0aW9uKVxuICAgICAgLy8gU3RhdGUgbWFuYWdlciBkb2Vzbid0IGNhcmUgYWJvdXQgbm90aWNpbmdcbiAgICAgIC8vIGdhbWUgdG8gdXBkYXRlIHN0YXRlLiBJbnN0ZWFkIHJlZHVjZXJzXG4gICAgICAvLyBzaG91bGQgc2V0IGRpcnR5IHN0YXRlIGZvciBnYW1lIGxvb3AgdG9cbiAgICAgIC8vIHRyaWdnZXIgdXBkYXRlXG5cbiAgICAgIGlmIChwcm9jZXNzLmVudi5jb2RlID09PSAnREVWJykge1xuICAgICAgICAvLyBsb2cgYWN0aW9ucyBpbiBjb25zb2xlXG4gICAgICAgIGNvbnNvbGUuaW5mbygnJWNhZnRlcjonLCAnY29sb3I6IGdyZWVuJywgc3RhdGUpXG4gICAgICAgIGNvbnNvbGUuZ3JvdXBFbmQoKVxuICAgICAgfVxuICAgIH0sXG4gICAgLyoqXG4gICAgICogUmV0dXJuIHRoZSBjdXJyZW50IHN0YXRlIGZvciBnaXZlbiBrZXlcbiAgICAgKiBUaGlzIGlzIHRvIGFsbG93IGFwcGxpY2F0aW9uIHRvICdjb25uZWN0JyB0byBzdGF0ZVxuICAgICAqL1xuICAgIGdldFN0YXRlOiAoc3RhdGVLZXkpID0+IHtcbiAgICAgIGlmICghc3RhdGVLZXkpIHtcbiAgICAgICAgcmV0dXJuIHN0YXRlXG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHN0YXRlW3N0YXRlS2V5XVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4vLyBBc3N1bWUgdGhlIHJlY3Vlck1hcCBpcyBhIGZsYXQgbWFwIHRvIGFsbCByZWR1Y2Vyc1xuZXhwb3J0IGZ1bmN0aW9uIGNvbWJpbmVSZWR1Y2VyIChyZWR1Y2VyTWFwID0ge30sIHVwZGF0ZXIpIHtcblxuICAvLyBHZW5lcmF0ZSBhIGNvbWJpbmVkIHJlZHVjZXIgZnVuY3Rpb25cbiAgcmV0dXJuIChzdGF0ZSA9IHt9LCBhY3Rpb24gPSB7fSkgPT4ge1xuICAgIGxldCBuZXdTdGF0ZSA9IHt9LFxuICAgICAgICBkaXJ0eUtleXMgPSBbXVxuXG4gICAgLy8gU3ByZWFkIHRoZSBhY3Rpb24gdG8gYWxsIHJlZHVjZXJzIGluc2lkZSB0aGUgY29tYmluZWQgb25lXG4gICAgZm9yIChsZXQga2V5IGluIHJlZHVjZXJNYXApIHtcbiAgICAgIC8vIFBhc3MgdGhlIHdob2xlIHN0YXRlIGRvd24gYXMgYXJndW1lbnQgZm9yXG4gICAgICAvLyBjcm9zcyBzdGF0ZSBrZXkgYWNjZXNzXG4gICAgICBsZXQgcmVkdWNlZFN0YXRlID0gcmVkdWNlck1hcFtrZXldKHN0YXRlW2tleV0sIGFjdGlvbiwgc3RhdGUpXG5cbiAgICAgIGlmIChyZWR1Y2VkU3RhdGUgIT09IHN0YXRlW2tleV0pIHtcbiAgICAgICAgZGlydHlLZXlzLnB1c2goa2V5KVxuICAgICAgfVxuXG4gICAgICBuZXdTdGF0ZVtrZXldID0gcmVkdWNlZFN0YXRlXG4gICAgfVxuXG4gICAgLy8gQ2FsbCB1cGRhdGUgZnVuY3Rpb24gZm9yIGVhY2ggcmVkdWNlZCBzdGF0ZVxuICAgIHVwZGF0ZXIobmV3U3RhdGUsIGRpcnR5S2V5cylcblxuICAgIC8vIGRpcnR5S2V5cy5mb3JFYWNoKChkaXJ0eUtleSkgPT4ge1xuICAgIC8vICAgdXBkYXRlck1hcFtkaXJ0eUtleV0obmV3U3RhdGUsIGRpcnR5S2V5KVxuICAgIC8vIH0pXG5cbiAgICByZXR1cm4gbmV3U3RhdGVcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gY29tYmluZVVwZGF0ZXIgKHVwZGF0ZXJNYXAgPSB7fSwgcmVuZGVyZXJNYXAgPSB7fSkge1xuICAvLyBHZW5lcmF0ZSBjb21iaW5lZCB1cGRhdGVyIGZ1bmN0aW9uIGZvciBhbGwgdXBkYXRlcnNcbiAgcmV0dXJuIChzdGF0ZSA9IHt9LCBkaXJ0eUtleXMgPSBbXSkgPT4ge1xuICAgIGxldCBuZXdGaW5hbFJlbmRlclN0YXRlID0ge31cbiAgICBmb3IgKGxldCBrZXkgaW4gdXBkYXRlck1hcCkge1xuICAgICAgLy8gQ29tcHV0ZSB0aGUgZmluYWwgcmVuZGVyIHN0YXRlIGFuZCBwYXNzIGludG8gcmVuZGVyZXJcbiAgICAgIHJlbmRlcmVyTWFwW2tleV0uZmluYWxSZW5kZXJTdGF0ZSA9IHVwZGF0ZXJNYXBba2V5XShyZW5kZXJlck1hcFtrZXldLmZpbmFsUmVuZGVyU3RhdGUsIHN0YXRlLCBkaXJ0eUtleXMpXG4gICAgfVxuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc3RhdGVNYW5hZ2VyLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNDVmZjFhYmQ5ODZiMDY5YWMzZjciLCJ3ZWJwYWNrOi8vLy4vZGVtby9zbmFrZS9hY3Rpb25zLmpzIiwid2VicGFjazovLy8uL2RlbW8vc25ha2UvdGhlbWUuanMiLCJ3ZWJwYWNrOi8vLy4vZGlzdC9nYW11eC5qcyIsIndlYnBhY2s6Ly8vLi9kZW1vL3NuYWtlL2luZGV4LmpzIiwid2VicGFjazovLy8uL2RlbW8vc25ha2Uvc25ha2VSZWR1Y2VyLmpzIiwid2VicGFjazovLy8uL2RlbW8vc25ha2Uvd29ybGRSZWR1Y2VyLmpzIiwid2VicGFjazovLy8uL2RlbW8vc25ha2Uvd29ybGRMYXllci5qcyIsIndlYnBhY2s6Ly8vLi9kZW1vL3NuYWtlL3NuYWtlTGF5ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vZGVtby9zbmFrZS9zbmFrZV90aHVtYm5haWwucG5nIiwid2VicGFjazovLy8uL2RlbW8vc25ha2UvaW5kZXguc2Nzcz8wYzcxIiwid2VicGFjazovLy8uL2RlbW8vc25ha2UvaW5kZXguc2NzcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL3VybHMuanMiXSwibmFtZXMiOlsiZ2FtZVJlc2l6ZSIsInNldFN0YXJQb3NpdGlvbiIsInNldFNuYWtlQm9keSIsImxlZnRLZXlEb3duIiwicmlnaHRLZXlEb3duIiwidXBLZXlEb3duIiwiZG93bktleURvd24iLCJnYW1lT3ZlciIsIm5leHRMZXZlbCIsImN1dFNuYWtlQm9keSIsIkdBTUVfUkVTSVpFIiwiU0VUX1NUQVJfUE9TSVRJT04iLCJTRVRfU05BS0VfQk9EWSIsIkxFRlRfS0VZRE9XTiIsIlJJR0hUX0tFWURPV04iLCJVUF9LRVlET1dOIiwiRE9XTl9LRVlET1dOIiwiR0FNRV9PVkVSIiwiTkVYVF9MRVZFTCIsIkNVVF9TTkFLRV9CT0RZIiwid2lkdGgiLCJoZWlnaHQiLCJ0eXBlIiwicm93IiwiY29sdW1uIiwiYm9keSIsInNuYWtlQm9keSIsImN1dEJvZHlJbmRleCIsImdhbWVEZWZhdWx0Iiwicm93cyIsImNvbHVtbnMiLCJzcGVlZCIsImhpdERldGVjdGlvbkJ1ZmZlciIsImRpcmVjdGlvbiIsIlVQIiwiRE9XTiIsIkxFRlQiLCJSSUdIVCIsImNvbnRhaW5lciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJjb25maWciLCJmcHMiLCJsYXllcnMiLCJuYW1lIiwidXBkYXRlciIsInJlbmRlciIsInJlZHVjZXJNYXAiLCJzbmFrZSIsIndvcmxkIiwiaW5pdCIsImdhbWVTdGF0ZSIsImNvbnNvbGUiLCJsb2ciLCJkaXNwYXRjaCIsIm9mZnNldFdpZHRoIiwib2Zmc2V0SGVpZ2h0Iiwid29ybGRTdGF0ZSIsInNuYWtlU3RhdGUiLCJzdGFyUm93IiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwic3RhckNvbHVtbiIsImhlYWRSb3ciLCJoZWFkQ29sdW1uIiwiaXNIb3Jpem9udGFsIiwiZXZlcnkiLCJib2R5QmxvY2siLCJ3aW5kb3ciLCJvbmxvYWQiLCJvbnJlc2l6ZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJldnQiLCJrZXlDb2RlIiwidG91Y2hlcyIsInRvdWNoc3RhcnQiLCJPYmplY3QiLCJhc3NpZ24iLCJ4IiwieSIsInRvdWNobW92ZSIsImhhbmRsZVRvdWNoIiwidG91Y2giLCJwYWdlWCIsInBhZ2VZIiwiZHgiLCJkeSIsImFicyIsInByZXZlbnREZWZhdWx0Iiwic3RhcnQiLCJpbml0U3RhdGUiLCJpc01vdmUiLCJsZXZlbCIsInN0YXRlIiwiYWN0aW9uIiwic2xpY2UiLCJyZXZlcnNlIiwicmVkdWNlIiwiZmlyc3QiLCJzZWNvbmQiLCJoZWFkIiwiaGVhZERpcmVjdGlvbiIsInVuc2hpZnQiLCJuZXdMZXZlbCIsInNwbGljZSIsInN0YXJQb3NpdGlvbiIsImhpZ2hMZXZlbCIsImlzR2FtZW92ZXIiLCJpc092ZXJsYXAiLCJnYW1lU2l6ZSIsIm1pbiIsIm5ld1N0YXJQb3NpdGlvbiIsIm1heCIsImluaXRGaW5hbFJlbmRlclN0YXRlIiwid29ybGRMYXllclVwZGF0ZXIiLCJmaW5hbFJlbmRlclN0YXRlIiwiZGlydHlLZXlzIiwiaW5kZXhPZiIsImNlbGxXaWR0aCIsImNlbGxIZWlnaHQiLCJ4cyIsIkFycmF5IiwiZmlsbCIsIm1hcCIsInhJbmRleCIsInkwIiwieTEiLCJ5cyIsInlJbmRleCIsIngwIiwieDEiLCJzdGFyIiwid29ybGRMYXllclJlbmRlciIsImNhbnZhcyIsInJlbmRlclN0YXRlIiwiZHQiLCJjb250ZXh0IiwiZ2V0Q29udGV4dCIsImNsZWFyUmVjdCIsImZpbGxTdHlsZSIsImZpbGxSZWN0Iiwic3Ryb2tlU3R5bGUiLCJsaW5lV2lkdGgiLCJiZWdpblBhdGgiLCJmb3JFYWNoIiwidmVydGljYWxMaW5lIiwibW92ZVRvIiwibGluZVRvIiwic3Ryb2tlIiwiaG9yaXpvbnRhbExpbmUiLCJmb250IiwidGV4dEFsaWduIiwidGV4dEJhc2VsaW5lIiwiZmlsbFRleHQiLCJoaXRTdGFyIiwic25ha2VIZWFkIiwiaGl0T25SaWdodCIsImZvY3VzIiwib3RoZXIiLCJmb2N1c1giLCJmb2N1c1kiLCJvdGhlclgiLCJvdGhlclkiLCJoaXRPbkxlZnQiLCJoaXRPbkJvdHRvbSIsImhpdE9uVG9wIiwiZ2V0SGl0Qm9keUluZGV4IiwiaSIsImxlbmd0aCIsImN1dFNlbGZCeUhlYWQiLCJoaXRCb2R5SW5kZXgiLCJmaWxsRnJlZVJlY3QiLCJjYW52YXNXaWR0aCIsImNhbnZhc0hlaWdodCIsInNuYWtlTGF5ZXJVcGRhdGVyIiwiaW5kZXgiLCJzbmFrZUxheWVyUmVuZGVyIiwiZGlydHkiLCJib2R5RlJTIiwic3RhckZSUyIsImJvZHlGUlNCbG9jayIsImRpcmVjdGlvblVuaXQiLCJkaXN0YW5jZSIsImhlYWRY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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUEsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVEQUF1RDtBQUN2RDs7QUFFQSw2QkFBNkIsbUJBQW1COztBQUVoRDs7QUFFQTs7QUFFQTtBQUNBOzs7Ozs7OztBQy9WQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0MsV0FBVyxFQUFFO0FBQ3JELHdDQUF3QyxXQUFXLEVBQUU7O0FBRXJEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0Esc0NBQXNDO0FBQ3RDLEdBQUc7QUFDSDtBQUNBLDhEQUE4RDtBQUM5RDs7QUFFQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0EiLCJmaWxlIjoic25ha2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMyk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgNDVmZjFhYmQ5ODZiMDY5YWMzZjciLCIvLyBBY3Rpb24gdHlwZXNcbmV4cG9ydCBjb25zdCBHQU1FX1JFU0laRSA9ICdHQU1FX1JFU0laRScgXG5leHBvcnQgY29uc3QgU0VUX1NUQVJfUE9TSVRJT04gPSAnU0VUX1NUQVJfUE9TSVRJT04nIFxuZXhwb3J0IGNvbnN0IFNFVF9TTkFLRV9CT0RZID0gJ1NFVF9TTkFLRV9CT0RZJyBcbmV4cG9ydCBjb25zdCBMRUZUX0tFWURPV04gPSAnTEVGVF9LRVlET1dOJ1xuZXhwb3J0IGNvbnN0IFJJR0hUX0tFWURPV04gPSAnUklHSFRfS0VZRE9XTidcbmV4cG9ydCBjb25zdCBVUF9LRVlET1dOID0gJ1VQX0tFWURPV04nXG5leHBvcnQgY29uc3QgRE9XTl9LRVlET1dOID0gJ0RPV05fS0VZRE9XTidcbmV4cG9ydCBjb25zdCBHQU1FX09WRVIgPSAnR0FNRV9PVkVSJ1xuZXhwb3J0IGNvbnN0IE5FWFRfTEVWRUwgPSAnTkVYVF9MRVZFTCdcbmV4cG9ydCBjb25zdCBDVVRfU05BS0VfQk9EWSA9ICdDVVRfU05BS0VfQk9EWSdcblxuLy8gQWN0aW9uIGNyZWF0b3JzXG5leHBvcnQgZnVuY3Rpb24gZ2FtZVJlc2l6ZSAod2lkdGgsIGhlaWdodCkge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IEdBTUVfUkVTSVpFLFxuICAgIHdpZHRoLFxuICAgIGhlaWdodFxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXRTdGFyUG9zaXRpb24gKHJvdywgY29sdW1uKSB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogU0VUX1NUQVJfUE9TSVRJT04sXG4gICAgcm93LFxuICAgIGNvbHVtblxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXRTbmFrZUJvZHkgKGJvZHkpIHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBTRVRfU05BS0VfQk9EWSxcbiAgICBib2R5XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxlZnRLZXlEb3duICgpIHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBMRUZUX0tFWURPV05cbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gcmlnaHRLZXlEb3duICgpIHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBSSUdIVF9LRVlET1dOXG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVwS2V5RG93biAoKSB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogVVBfS0VZRE9XTlxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkb3duS2V5RG93biAoKSB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogRE9XTl9LRVlET1dOXG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdhbWVPdmVyICgpIHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBHQU1FX09WRVJcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gbmV4dExldmVsIChzbmFrZUJvZHkpIHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBORVhUX0xFVkVMLFxuICAgIHNuYWtlQm9keVxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjdXRTbmFrZUJvZHkgKGN1dEJvZHlJbmRleCkge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IENVVF9TTkFLRV9CT0RZLFxuICAgIGN1dEJvZHlJbmRleFxuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9kZW1vL3NuYWtlL2FjdGlvbnMuanMiLCJleHBvcnQgY29uc3QgZ2FtZURlZmF1bHQgPSB7XG4gIHJvd3M6IDE2LFxuICBjb2x1bW5zOiAxNixcbiAgc3BlZWQ6IDAuMyxcbiAgaGl0RGV0ZWN0aW9uQnVmZmVyOiAwLjVcbn1cblxuZXhwb3J0IGNvbnN0IGRpcmVjdGlvbiA9IHtcbiAgVVA6ICdVUCcsXG4gIERPV046ICdET1dOJyxcbiAgTEVGVDogJ0xFRlQnLFxuICBSSUdIVDogJ1JJR0hUJ1xufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2RlbW8vc25ha2UvdGhlbWUuanMiLCIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJnYW11eFwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJnYW11eFwiXSA9IGZhY3RvcnkoKTtcbn0pKHRoaXMsIGZ1bmN0aW9uKCkge1xucmV0dXJuIC8qKioqKiovIChmdW5jdGlvbihtb2R1bGVzKSB7IC8vIHdlYnBhY2tCb290c3RyYXBcbi8qKioqKiovIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuLyoqKioqKi8gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbi8qKioqKiovIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbi8qKioqKiovIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuLyoqKioqKi8gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4vKioqKioqLyBcdFx0fVxuLyoqKioqKi8gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4vKioqKioqLyBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuLyoqKioqKi8gXHRcdFx0aTogbW9kdWxlSWQsXG4vKioqKioqLyBcdFx0XHRsOiBmYWxzZSxcbi8qKioqKiovIFx0XHRcdGV4cG9ydHM6IHt9XG4vKioqKioqLyBcdFx0fTtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4vKioqKioqLyBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbi8qKioqKiovIFx0XHRtb2R1bGUubCA9IHRydWU7XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4vKioqKioqLyBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuLyoqKioqKi8gXHR9XG4vKioqKioqL1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4vKioqKioqLyBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuLyoqKioqKi8gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbi8qKioqKiovIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbi8qKioqKiovIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbi8qKioqKiovIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbi8qKioqKiovIFx0XHRcdH0pO1xuLyoqKioqKi8gXHRcdH1cbi8qKioqKiovIFx0fTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuLyoqKioqKi8gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuLyoqKioqKi8gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbi8qKioqKiovIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4vKioqKioqLyBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuLyoqKioqKi8gXHRcdHJldHVybiBnZXR0ZXI7XG4vKioqKioqLyBcdH07XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvXCI7XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8qKioqKiovIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4vKioqKioqLyB9KVxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qKioqKiovIChbXG4vKiAwICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cbm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3JlcXVpcmVfXygxKTtcblxuXG4vKioqLyB9KSxcbi8qIDEgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9zdGF0ZU1hbmFnZXIgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDIpO1xuXG4vKipcbiAqIFRoZSBhbmltYXRpb24gbG9vcCBrZXkgZm9yIGNhbmNlbCBhbmltYXRpb25cbiAqL1xudmFyIF9hbmltYXRpb25Mb29wS2V5ID0gbnVsbDtcbi8qKlxuICogQWNjdW11bGF0b3IgZm9yIHRpbWUtYmFzZWQgYW5pbWF0aW9uXG4gKi9cbnZhciBfYWNjdW11bGF0b3IgPSAwO1xuLyoqXG4gKiBUaGUgZGVmYXVsdCBmcHNcbiAqL1xudmFyIF9mcHMgPSA2MDtcbi8qKlxuICogVGhlIHN0b3JlIGZvciBnYW1lXG4gKi9cbnZhciBfc3RvcmUgPSB7fTtcblxudmFyIF91cGRhdGVyTWFwID0ge307XG5cbnZhciBfcmVuZGVyZXJNYXAgPSB7fTtcblxuLyoqXG4gKiBUcmlnZ2VyIGdhbWUgbG9vcFxuICovXG5mdW5jdGlvbiBfbG9vcChsYXN0VGltZXN0YW1wKSB7XG4gIF9hbmltYXRpb25Mb29wS2V5ID0gd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShmdW5jdGlvbiAoKSB7XG4gICAgdmFyIG5vdyA9IERhdGUubm93KCk7XG4gICAgdmFyIGR0ID0gMTAwMCAvIF9mcHM7XG4gICAgX2FjY3VtdWxhdG9yICs9IG5vdyAtIGxhc3RUaW1lc3RhbXA7XG5cbiAgICBpZiAoX2FjY3VtdWxhdG9yID49IGR0KSB7XG4gICAgICB3aGlsZSAoX2FjY3VtdWxhdG9yID49IGR0KSB7XG4gICAgICAgIF9hY2N1bXVsYXRvciAtPSBkdDtcbiAgICAgIH1cbiAgICAgIGZvciAodmFyIGtleSBpbiBfcmVuZGVyZXJNYXApIHtcbiAgICAgICAgdmFyIHJlbmRlcmVyID0gX3JlbmRlcmVyTWFwW2tleV07XG4gICAgICAgIHJlbmRlcmVyLnJlbmRlclN0YXRlID0gcmVuZGVyZXIocmVuZGVyZXIucmVuZGVyU3RhdGUsIHJlbmRlcmVyLmZpbmFsUmVuZGVyU3RhdGUsIGR0KTtcbiAgICAgIH1cbiAgICB9XG4gICAgX2xvb3Aobm93KTtcbiAgfSk7XG59XG5cbnZhciBnYW11eCA9IHtcbiAgY29uZmlnOiBmdW5jdGlvbiBjb25maWcoKSB7XG4gICAgdmFyIF9jb25maWcgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IHt9O1xuXG4gICAgLy8gQ29uZmlnIHRoZSBwcml2YXRlIGdsb2JhbHNcbiAgICBfZnBzID0gX2NvbmZpZy5mcHMgfHwgX2ZwcztcblxuICAgIHZhciBjb250YWluZXIgPSBfY29uZmlnLmNvbnRhaW5lcjtcblxuICAgIC8vIENyZWF0ZSBnYW1lIGxheWVyc1xuICAgIF9jb25maWcubGF5ZXJzLmZvckVhY2goZnVuY3Rpb24gKGxheWVyKSB7XG4gICAgICB2YXIgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG4gICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoY2FudmFzKTtcblxuICAgICAgX3VwZGF0ZXJNYXBbbGF5ZXIubmFtZV0gPSBsYXllci51cGRhdGVyO1xuICAgICAgX3JlbmRlcmVyTWFwW2xheWVyLm5hbWVdID0gbGF5ZXIucmVuZGVyLmJpbmQobnVsbCwgY2FudmFzKTtcbiAgICB9KTtcblxuICAgIC8vIENyZWF0ZSBnYW1lIHN0b3JlXG4gICAgX3N0b3JlID0gKDAsIF9zdGF0ZU1hbmFnZXIuY3JlYXRlU3RvcmUpKCgwLCBfc3RhdGVNYW5hZ2VyLmNvbWJpbmVSZWR1Y2VyKShfY29uZmlnLnJlZHVjZXJNYXAsICgwLCBfc3RhdGVNYW5hZ2VyLmNvbWJpbmVVcGRhdGVyKShfdXBkYXRlck1hcCwgX3JlbmRlcmVyTWFwKSkpO1xuICAgIGlmIChfY29uZmlnLmluaXQpIHtcbiAgICAgIF9jb25maWcuaW5pdChfc3RvcmUuZ2V0U3RhdGUoKSk7XG4gICAgfVxuICB9LFxuXG4gIGxheWVyczoge30sXG5cbiAgc3RhcnQ6IGZ1bmN0aW9uIHN0YXJ0KCkge1xuICAgIF9sb29wKERhdGUubm93KCkpO1xuICB9LFxuXG4gIGRpc3BhdGNoOiBmdW5jdGlvbiBkaXNwYXRjaChhY3Rpb24pIHtcbiAgICBfc3RvcmUuZGlzcGF0Y2goYWN0aW9uKTtcbiAgfVxuXG4gIC8vICpcbiAgLy8gICogR2FtZSB3aWxsIGJlIGF2YWlsYWJsZSBvbmNlIGNvbmZpZ3VyZWRcbn07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGdhbXV4O1xuXG4vLyBUT0RPXG4vLyAxLiBCdWlsZCBmaWxlIGZvciBFUzYgbW9kdWxlc1xuXG4vKioqLyB9KSxcbi8qIDIgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuY3JlYXRlU3RvcmUgPSBjcmVhdGVTdG9yZTtcbmV4cG9ydHMuY29tYmluZVJlZHVjZXIgPSBjb21iaW5lUmVkdWNlcjtcbmV4cG9ydHMuY29tYmluZVVwZGF0ZXIgPSBjb21iaW5lVXBkYXRlcjtcbmZ1bmN0aW9uIGNyZWF0ZVN0b3JlKHJlZHVjZXIpIHtcbiAgLy8gSW5pdCBzdGF0ZVxuICB2YXIgc3RhdGUgPSByZWR1Y2VyKCk7XG5cbiAgcmV0dXJuIHtcbiAgICAvKipcbiAgICAgKiBEaXNwYXRjaCBhY3Rpb24gdG8gdHJpZ2dlciBzdGF0ZSBjaGFuZ2VzXG4gICAgICovXG4gICAgZGlzcGF0Y2g6IGZ1bmN0aW9uIGRpc3BhdGNoKCkge1xuICAgICAgdmFyIGFjdGlvbiA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDoge307XG5cbiAgICAgIGlmICh0cnVlKSB7XG4gICAgICAgIC8vIGxvZyBhY3Rpb25zIGluIGNvbnNvbGVcbiAgICAgICAgY29uc29sZS5ncm91cChhY3Rpb24udHlwZSk7XG4gICAgICAgIGNvbnNvbGUuaW5mbygnJWNiZWZvcmU6JywgJ2NvbG9yOiBncmVlbicsIHN0YXRlKTtcbiAgICAgICAgY29uc29sZS5pbmZvKCclY2FjdGlvbjonLCAnY29sb3I6IHJlZCcsIGFjdGlvbik7XG4gICAgICB9XG5cbiAgICAgIC8vIFVwZGF0ZSBzdGF0ZVxuICAgICAgc3RhdGUgPSByZWR1Y2VyKHN0YXRlLCBhY3Rpb24pO1xuICAgICAgLy8gU3RhdGUgbWFuYWdlciBkb2Vzbid0IGNhcmUgYWJvdXQgbm90aWNpbmdcbiAgICAgIC8vIGdhbWUgdG8gdXBkYXRlIHN0YXRlLiBJbnN0ZWFkIHJlZHVjZXJzXG4gICAgICAvLyBzaG91bGQgc2V0IGRpcnR5IHN0YXRlIGZvciBnYW1lIGxvb3AgdG9cbiAgICAgIC8vIHRyaWdnZXIgdXBkYXRlXG5cbiAgICAgIGlmICh0cnVlKSB7XG4gICAgICAgIC8vIGxvZyBhY3Rpb25zIGluIGNvbnNvbGVcbiAgICAgICAgY29uc29sZS5pbmZvKCclY2FmdGVyOicsICdjb2xvcjogZ3JlZW4nLCBzdGF0ZSk7XG4gICAgICAgIGNvbnNvbGUuZ3JvdXBFbmQoKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIC8qKlxuICAgICAqIFJldHVybiB0aGUgY3VycmVudCBzdGF0ZSBmb3IgZ2l2ZW4ga2V5XG4gICAgICogVGhpcyBpcyB0byBhbGxvdyBhcHBsaWNhdGlvbiB0byAnY29ubmVjdCcgdG8gc3RhdGVcbiAgICAgKi9cbiAgICBnZXRTdGF0ZTogZnVuY3Rpb24gZ2V0U3RhdGUoc3RhdGVLZXkpIHtcbiAgICAgIGlmICghc3RhdGVLZXkpIHtcbiAgICAgICAgcmV0dXJuIHN0YXRlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHN0YXRlW3N0YXRlS2V5XTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG59XG5cbi8vIEFzc3VtZSB0aGUgcmVjdWVyTWFwIGlzIGEgZmxhdCBtYXAgdG8gYWxsIHJlZHVjZXJzXG5mdW5jdGlvbiBjb21iaW5lUmVkdWNlcigpIHtcbiAgdmFyIHJlZHVjZXJNYXAgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IHt9O1xuICB2YXIgdXBkYXRlciA9IGFyZ3VtZW50c1sxXTtcblxuXG4gIC8vIEdlbmVyYXRlIGEgY29tYmluZWQgcmVkdWNlciBmdW5jdGlvblxuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIHZhciBzdGF0ZSA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDoge307XG4gICAgdmFyIGFjdGlvbiA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDoge307XG5cbiAgICB2YXIgbmV3U3RhdGUgPSB7fSxcbiAgICAgICAgZGlydHlLZXlzID0gW107XG5cbiAgICAvLyBTcHJlYWQgdGhlIGFjdGlvbiB0byBhbGwgcmVkdWNlcnMgaW5zaWRlIHRoZSBjb21iaW5lZCBvbmVcbiAgICBmb3IgKHZhciBrZXkgaW4gcmVkdWNlck1hcCkge1xuICAgICAgLy8gUGFzcyB0aGUgd2hvbGUgc3RhdGUgZG93biBhcyBhcmd1bWVudCBmb3JcbiAgICAgIC8vIGNyb3NzIHN0YXRlIGtleSBhY2Nlc3NcbiAgICAgIHZhciByZWR1Y2VkU3RhdGUgPSByZWR1Y2VyTWFwW2tleV0oc3RhdGVba2V5XSwgYWN0aW9uLCBzdGF0ZSk7XG5cbiAgICAgIGlmIChyZWR1Y2VkU3RhdGUgIT09IHN0YXRlW2tleV0pIHtcbiAgICAgICAgZGlydHlLZXlzLnB1c2goa2V5KTtcbiAgICAgIH1cblxuICAgICAgbmV3U3RhdGVba2V5XSA9IHJlZHVjZWRTdGF0ZTtcbiAgICB9XG5cbiAgICAvLyBDYWxsIHVwZGF0ZSBmdW5jdGlvbiBmb3IgZWFjaCByZWR1Y2VkIHN0YXRlXG4gICAgdXBkYXRlcihuZXdTdGF0ZSwgZGlydHlLZXlzKTtcblxuICAgIC8vIGRpcnR5S2V5cy5mb3JFYWNoKChkaXJ0eUtleSkgPT4ge1xuICAgIC8vICAgdXBkYXRlck1hcFtkaXJ0eUtleV0obmV3U3RhdGUsIGRpcnR5S2V5KVxuICAgIC8vIH0pXG5cbiAgICByZXR1cm4gbmV3U3RhdGU7XG4gIH07XG59XG5cbmZ1bmN0aW9uIGNvbWJpbmVVcGRhdGVyKCkge1xuICB2YXIgdXBkYXRlck1hcCA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDoge307XG4gIHZhciByZW5kZXJlck1hcCA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDoge307XG5cbiAgLy8gR2VuZXJhdGUgY29tYmluZWQgdXBkYXRlciBmdW5jdGlvbiBmb3IgYWxsIHVwZGF0ZXJzXG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHN0YXRlID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiB7fTtcbiAgICB2YXIgZGlydHlLZXlzID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiBbXTtcblxuICAgIHZhciBuZXdGaW5hbFJlbmRlclN0YXRlID0ge307XG4gICAgZm9yICh2YXIga2V5IGluIHVwZGF0ZXJNYXApIHtcbiAgICAgIC8vIENvbXB1dGUgdGhlIGZpbmFsIHJlbmRlciBzdGF0ZSBhbmQgcGFzcyBpbnRvIHJlbmRlcmVyXG4gICAgICByZW5kZXJlck1hcFtrZXldLmZpbmFsUmVuZGVyU3RhdGUgPSB1cGRhdGVyTWFwW2tleV0ocmVuZGVyZXJNYXBba2V5XS5maW5hbFJlbmRlclN0YXRlLCBzdGF0ZSwgZGlydHlLZXlzKTtcbiAgICB9XG4gIH07XG59XG5cbi8qKiovIH0pXG4vKioqKioqLyBdKTtcbn0pO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5kbFluQmhZMnM2THk4dmQyVmljR0ZqYXk5MWJtbDJaWEp6WVd4TmIyUjFiR1ZFWldacGJtbDBhVzl1SWl3aWQyVmljR0ZqYXpvdkx5OTNaV0p3WVdOckwySnZiM1J6ZEhKaGNDQXhNekJqTnpJeU1qSmtNV015T0dJeU56RXpZU0lzSW5kbFluQmhZMnM2THk4dkxpOXpjbU12WjJGdGRYZ3Vhbk1pTENKM1pXSndZV05yT2k4dkx5NHZjM0pqTDNOMFlYUmxUV0Z1WVdkbGNpNXFjeUpkTENKdVlXMWxjeUk2V3lKZllXNXBiV0YwYVc5dVRHOXZjRXRsZVNJc0lsOWhZMk4xYlhWc1lYUnZjaUlzSWw5bWNITWlMQ0pmYzNSdmNtVWlMQ0pmZFhCa1lYUmxjazFoY0NJc0lsOXlaVzVrWlhKbGNrMWhjQ0lzSWw5c2IyOXdJaXdpYkdGemRGUnBiV1Z6ZEdGdGNDSXNJbmRwYm1SdmR5SXNJbkpsY1hWbGMzUkJibWx0WVhScGIyNUdjbUZ0WlNJc0ltNXZkeUlzSWtSaGRHVWlMQ0prZENJc0ltdGxlU0lzSW5KbGJtUmxjbVZ5SWl3aWNtVnVaR1Z5VTNSaGRHVWlMQ0ptYVc1aGJGSmxibVJsY2xOMFlYUmxJaXdpWjJGdGRYZ2lMQ0pqYjI1bWFXY2lMQ0ptY0hNaUxDSmpiMjUwWVdsdVpYSWlMQ0pzWVhsbGNuTWlMQ0ptYjNKRllXTm9JaXdpYkdGNVpYSWlMQ0pqWVc1MllYTWlMQ0prYjJOMWJXVnVkQ0lzSW1OeVpXRjBaVVZzWlcxbGJuUWlMQ0poY0hCbGJtUkRhR2xzWkNJc0ltNWhiV1VpTENKMWNHUmhkR1Z5SWl3aWNtVnVaR1Z5SWl3aVltbHVaQ0lzSW5KbFpIVmpaWEpOWVhBaUxDSnBibWwwSWl3aVoyVjBVM1JoZEdVaUxDSnpkR0Z5ZENJc0ltUnBjM0JoZEdOb0lpd2lZV04wYVc5dUlpd2lZM0psWVhSbFUzUnZjbVVpTENKamIyMWlhVzVsVW1Wa2RXTmxjaUlzSW1OdmJXSnBibVZWY0dSaGRHVnlJaXdpY21Wa2RXTmxjaUlzSW5OMFlYUmxJaXdpWTI5dWMyOXNaU0lzSW1keWIzVndJaXdpZEhsd1pTSXNJbWx1Wm04aUxDSm5jbTkxY0VWdVpDSXNJbk4wWVhSbFMyVjVJaXdpYm1WM1UzUmhkR1VpTENKa2FYSjBlVXRsZVhNaUxDSnlaV1IxWTJWa1UzUmhkR1VpTENKd2RYTm9JaXdpZFhCa1lYUmxjazFoY0NJc0luSmxibVJsY21WeVRXRndJaXdpYm1WM1JtbHVZV3hTWlc1a1pYSlRkR0YwWlNKZExDSnRZWEJ3YVc1bmN5STZJa0ZCUVVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFc1EwRkJRenRCUVVORUxFODdRVU5XUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHM3UVVGRlFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHM3TzBGQlIwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEVzWVVGQlN6dEJRVU5NTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEVzYlVOQlFUSkNMREJDUVVFd1FpeEZRVUZGTzBGQlEzWkVMSGxEUVVGcFF5eGxRVUZsTzBGQlEyaEVPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTERoRVFVRnpSQ3dyUkVGQkswUTdPMEZCUlhKSU8wRkJRMEU3TzBGQlJVRTdRVUZEUVRzN096czdPenM3T3pzN096czdPenM3T3pzN08wRkROMFJCT3p0QlFVVkJPenM3UVVGSFFTeEpRVUZKUVN4dlFrRkJiMElzU1VGQmVFSTdRVUZEUVRzN08wRkJSMEVzU1VGQlNVTXNaVUZCWlN4RFFVRnVRanRCUVVOQk96czdRVUZIUVN4SlFVRkpReXhQUVVGUExFVkJRVmc3UVVGRFFUczdPMEZCUjBFc1NVRkJTVU1zVTBGQlV5eEZRVUZpT3p0QlFVVkJMRWxCUVVsRExHTkJRV01zUlVGQmJFSTdPMEZCUlVFc1NVRkJTVU1zWlVGQlpTeEZRVUZ1UWpzN1FVRkZRVHM3TzBGQlIwRXNVMEZCVTBNc1MwRkJWQ3hEUVVGblFrTXNZVUZCYUVJc1JVRkJLMEk3UVVGRE4wSlFMSE5DUVVGdlFsRXNUMEZCVDBNc2NVSkJRVkFzUTBGQk5rSXNXVUZCVFR0QlFVTnlSQ3hSUVVGTlF5eE5RVUZOUXl4TFFVRkxSQ3hIUVVGTUxFVkJRVm83UVVGRFFTeFJRVUZOUlN4TFFVRkxMRTlCUVU5V0xFbEJRV3hDTzBGQlEwRkVMRzlDUVVGblFsTXNUVUZCVFVnc1lVRkJkRUk3TzBGQlJVRXNVVUZCU1U0c1owSkJRV2RDVnl4RlFVRndRaXhGUVVGM1FqdEJRVU4wUWl4aFFVRlBXQ3huUWtGQlowSlhMRVZCUVhaQ0xFVkJRVEpDTzBGQlEzcENXQ3gzUWtGQlowSlhMRVZCUVdoQ08wRkJRMFE3UVVGRFJDeFhRVUZMTEVsQlFVbERMRWRCUVZRc1NVRkJaMEpTTEZsQlFXaENMRVZCUVRoQ08wRkJRelZDTEZsQlFVbFRMRmRCUVZkVUxHRkJRV0ZSTEVkQlFXSXNRMEZCWmp0QlFVTkJReXhwUWtGQlUwTXNWMEZCVkN4SFFVRjFRa1FzVTBGQlUwRXNVMEZCVTBNc1YwRkJiRUlzUlVGQkswSkVMRk5CUVZORkxHZENRVUY0UXl4RlFVRXdSRW9zUlVGQk1VUXNRMEZCZGtJN1FVRkRSRHRCUVVOR08wRkJRMFJPTEZWQlFVMUpMRWRCUVU0N1FVRkRSQ3hIUVdadFFpeERRVUZ3UWp0QlFXZENSRHM3UVVGRlJDeEpRVUZOVHl4UlFVRlJPMEZCUTFwRExGVkJRVkVzYTBKQlFXbENPMEZCUVVFc1VVRkJhRUpCTEU5QlFXZENMSFZGUVVGUUxFVkJRVTg3TzBGQlEzWkNPMEZCUTBGb1FpeFhRVUZQWjBJc1VVRkJUME1zUjBGQlVDeEpRVUZqYWtJc1NVRkJja0k3TzBGQlJVRXNVVUZCU1d0Q0xGbEJRVmxHTEZGQlFVOUZMRk5CUVhaQ096dEJRVVZCTzBGQlEwRkdMRmxCUVU5SExFMUJRVkFzUTBGQlkwTXNUMEZCWkN4RFFVRnpRaXhWUVVGRFF5eExRVUZFTEVWQlFWYzdRVUZETDBJc1ZVRkJTVU1zVTBGQlUwTXNVMEZCVTBNc1lVRkJWQ3hEUVVGMVFpeFJRVUYyUWl4RFFVRmlPMEZCUTBGT0xHZENRVUZWVHl4WFFVRldMRU5CUVhOQ1NDeE5RVUYwUWpzN1FVRkZRWEJDTEd0Q1FVRlpiVUlzVFVGQlRVc3NTVUZCYkVJc1NVRkJNRUpNTEUxQlFVMU5MRTlCUVdoRE8wRkJRMEY0UWl4dFFrRkJZV3RDTEUxQlFVMUxMRWxCUVc1Q0xFbEJRVEpDVEN4TlFVRk5UeXhOUVVGT0xFTkJRV0ZETEVsQlFXSXNRMEZCYTBJc1NVRkJiRUlzUlVGQmQwSlFMRTFCUVhoQ0xFTkJRVE5DTzBGQlEwUXNTMEZPUkRzN1FVRlJRVHRCUVVOQmNrSXNZVUZCVXl3clFrRkJXU3hyUTBGQlpXVXNVVUZCVDJNc1ZVRkJkRUlzUlVGQmEwTXNhME5CUVdVMVFpeFhRVUZtTEVWQlFUUkNReXhaUVVFMVFpeERRVUZzUXl4RFFVRmFMRU5CUVZRN1FVRkRRU3hSUVVGSllTeFJRVUZQWlN4SlFVRllMRVZCUVdsQ08wRkJRMlptTEdOQlFVOWxMRWxCUVZBc1EwRkJXVGxDTEU5QlFVOHJRaXhSUVVGUUxFVkJRVm83UVVGRFJEdEJRVU5HTEVkQmNrSlhPenRCUVhWQ1dtSXNWVUZCVVN4RlFYWkNTVHM3UVVGNVFscGpMRk5CUVU4c2FVSkJRVTA3UVVGRFdEZENMRlZCUVUxTExFdEJRVXRFTEVkQlFVd3NSVUZCVGp0QlFVTkVMRWRCTTBKWE96dEJRVFpDV2pCQ0xGbEJRVlVzYTBKQlFVTkRMRTFCUVVRc1JVRkJXVHRCUVVOd1FteERMRmRCUVU5cFF5eFJRVUZRTEVOQlFXZENReXhOUVVGb1FqdEJRVU5FT3p0QlFVVkVPMEZCUTBFN1FVRnNRMWtzUTBGQlpEczdhMEpCY1VObGNFSXNTenM3UVVGSFpqdEJRVU5CTEdkRE96czdPenM3T3pzN096czdVVU4wUm1kQ2NVSXNWeXhIUVVGQlFTeFhPMUZCTmtOQlF5eGpMRWRCUVVGQkxHTTdVVUVyUWtGRExHTXNSMEZCUVVFc1l6dEJRVFZGVkN4VFFVRlRSaXhYUVVGVUxFTkJRWE5DUnl4UFFVRjBRaXhGUVVFclFqdEJRVU53UXp0QlFVTkJMRTFCUVVsRExGRkJRVkZFTEZOQlFWbzdPMEZCUlVFc1UwRkJUenRCUVVOTU96czdRVUZIUVV3c1kwRkJWU3h2UWtGQmFVSTdRVUZCUVN4VlFVRm9Ra01zVFVGQlowSXNkVVZCUVZBc1JVRkJUenM3UVVGRGVrSXNWVUZCU1N4SlFVRktMRVZCUVdkRE8wRkJRemxDTzBGQlEwRk5MR2RDUVVGUlF5eExRVUZTTEVOQlFXTlFMRTlCUVU5UkxFbEJRWEpDTzBGQlEwRkdMR2RDUVVGUlJ5eEpRVUZTTEVOQlFXRXNWMEZCWWl4RlFVRXdRaXhqUVVFeFFpeEZRVUV3UTBvc1MwRkJNVU03UVVGRFFVTXNaMEpCUVZGSExFbEJRVklzUTBGQllTeFhRVUZpTEVWQlFUQkNMRmxCUVRGQ0xFVkJRWGREVkN4TlFVRjRRenRCUVVORU96dEJRVVZFTzBGQlEwRkxMR05CUVZGRUxGRkJRVkZETEV0QlFWSXNSVUZCWlV3c1RVRkJaaXhEUVVGU08wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFc1ZVRkJTU3hKUVVGS0xFVkJRV2RETzBGQlF6bENPMEZCUTBGTkxHZENRVUZSUnl4SlFVRlNMRU5CUVdFc1ZVRkJZaXhGUVVGNVFpeGpRVUY2UWl4RlFVRjVRMG9zUzBGQmVrTTdRVUZEUVVNc1owSkJRVkZKTEZGQlFWSTdRVUZEUkR0QlFVTkdMRXRCZUVKSk8wRkJlVUpNT3pzN08wRkJTVUZpTEdOQlFWVXNhMEpCUVVOakxGRkJRVVFzUlVGQll6dEJRVU4wUWl4VlFVRkpMRU5CUVVOQkxGRkJRVXdzUlVGQlpUdEJRVU5pTEdWQlFVOU9MRXRCUVZBN1FVRkRSQ3hQUVVaRUxFMUJSMHM3UVVGRFNDeGxRVUZQUVN4TlFVRk5UU3hSUVVGT0xFTkJRVkE3UVVGRFJEdEJRVU5HTzBGQmNFTkpMRWRCUVZBN1FVRnpRMFE3TzBGQlJVUTdRVUZEVHl4VFFVRlRWQ3hqUVVGVUxFZEJRVzFFTzBGQlFVRXNUVUZCTVVKUUxGVkJRVEJDTEhWRlFVRmlMRVZCUVdFN1FVRkJRU3hOUVVGVVNDeFBRVUZUT3pzN1FVRkZlRVE3UVVGRFFTeFRRVUZQTEZsQlFUWkNPMEZCUVVFc1VVRkJOVUpoTEV0QlFUUkNMSFZGUVVGd1FpeEZRVUZ2UWp0QlFVRkJMRkZCUVdoQ1RDeE5RVUZuUWl4MVJVRkJVQ3hGUVVGUE96dEJRVU5zUXl4UlFVRkpXU3hYUVVGWExFVkJRV1k3UVVGQlFTeFJRVU5KUXl4WlFVRlpMRVZCUkdoQ096dEJRVWRCTzBGQlEwRXNVMEZCU3l4SlFVRkpja01zUjBGQlZDeEpRVUZuUW0xQ0xGVkJRV2hDTEVWQlFUUkNPMEZCUXpGQ08wRkJRMEU3UVVGRFFTeFZRVUZKYlVJc1pVRkJaVzVDTEZkQlFWZHVRaXhIUVVGWUxFVkJRV2RDTmtJc1RVRkJUVGRDTEVkQlFVNHNRMEZCYUVJc1JVRkJORUozUWl4TlFVRTFRaXhGUVVGdlEwc3NTMEZCY0VNc1EwRkJia0k3TzBGQlJVRXNWVUZCU1ZNc2FVSkJRV2xDVkN4TlFVRk5OMElzUjBGQlRpeERRVUZ5UWl4RlFVRnBRenRCUVVNdlFuRkRMR3RDUVVGVlJTeEpRVUZXTEVOQlFXVjJReXhIUVVGbU8wRkJRMFE3TzBGQlJVUnZReXhsUVVGVGNFTXNSMEZCVkN4SlFVRm5Rbk5ETEZsQlFXaENPMEZCUTBRN08wRkJSVVE3UVVGRFFYUkNMRmxCUVZGdlFpeFJRVUZTTEVWQlFXdENReXhUUVVGc1FqczdRVUZGUVR0QlFVTkJPMEZCUTBFN08wRkJSVUVzVjBGQlQwUXNVVUZCVUR0QlFVTkVMRWRCZWtKRU8wRkJNRUpFT3p0QlFVVk5MRk5CUVZOVUxHTkJRVlFzUjBGQk5FUTdRVUZCUVN4TlFVRnVRMkVzVlVGQmJVTXNkVVZCUVhSQ0xFVkJRWE5DTzBGQlFVRXNUVUZCYkVKRExGZEJRV3RDTEhWRlFVRktMRVZCUVVrN08wRkJRMnBGTzBGQlEwRXNVMEZCVHl4WlFVRm5RenRCUVVGQkxGRkJRUzlDV2l4TFFVRXJRaXgxUlVGQmRrSXNSVUZCZFVJN1FVRkJRU3hSUVVGdVFsRXNVMEZCYlVJc2RVVkJRVkFzUlVGQlR6czdRVUZEY2tNc1VVRkJTVXNzYzBKQlFYTkNMRVZCUVRGQ08wRkJRMEVzVTBGQlN5eEpRVUZKTVVNc1IwRkJWQ3hKUVVGblFuZERMRlZCUVdoQ0xFVkJRVFJDTzBGQlF6RkNPMEZCUTBGRExHdENRVUZaZWtNc1IwRkJXaXhGUVVGcFFrY3NaMEpCUVdwQ0xFZEJRVzlEY1VNc1YwRkJWM2hETEVkQlFWZ3NSVUZCWjBKNVF5eFpRVUZaZWtNc1IwRkJXaXhGUVVGcFFrY3NaMEpCUVdwRExFVkJRVzFFTUVJc1MwRkJia1FzUlVGQk1FUlJMRk5CUVRGRUxFTkJRWEJETzBGQlEwUTdRVUZEUml4SFFVNUVPMEZCVDBRc1F5SXNJbVpwYkdVaU9pSm5ZVzExZUM1cWN5SXNJbk52ZFhKalpYTkRiMjUwWlc1MElqcGJJaWhtZFc1amRHbHZiaUIzWldKd1lXTnJWVzVwZG1WeWMyRnNUVzlrZFd4bFJHVm1hVzVwZEdsdmJpaHliMjkwTENCbVlXTjBiM0o1S1NCN1hHNWNkR2xtS0hSNWNHVnZaaUJsZUhCdmNuUnpJRDA5UFNBbmIySnFaV04wSnlBbUppQjBlWEJsYjJZZ2JXOWtkV3hsSUQwOVBTQW5iMkpxWldOMEp5bGNibHgwWEhSdGIyUjFiR1V1Wlhod2IzSjBjeUE5SUdaaFkzUnZjbmtvS1R0Y2JseDBaV3h6WlNCcFppaDBlWEJsYjJZZ1pHVm1hVzVsSUQwOVBTQW5ablZ1WTNScGIyNG5JQ1ltSUdSbFptbHVaUzVoYldRcFhHNWNkRngwWkdWbWFXNWxLRnRkTENCbVlXTjBiM0o1S1R0Y2JseDBaV3h6WlNCcFppaDBlWEJsYjJZZ1pYaHdiM0owY3lBOVBUMGdKMjlpYW1WamRDY3BYRzVjZEZ4MFpYaHdiM0owYzF0Y0ltZGhiWFY0WENKZElEMGdabUZqZEc5eWVTZ3BPMXh1WEhSbGJITmxYRzVjZEZ4MGNtOXZkRnRjSW1kaGJYVjRYQ0pkSUQwZ1ptRmpkRzl5ZVNncE8xeHVmU2tvZEdocGN5d2dablZ1WTNScGIyNG9LU0I3WEc1eVpYUjFjbTRnWEc1Y2JseHVMeThnVjBWQ1VFRkRTeUJHVDA5VVJWSWdMeTljYmk4dklIZGxZbkJoWTJzdmRXNXBkbVZ5YzJGc1RXOWtkV3hsUkdWbWFXNXBkR2x2YmlJc0lpQmNkQzh2SUZSb1pTQnRiMlIxYkdVZ1kyRmphR1ZjYmlCY2RIWmhjaUJwYm5OMFlXeHNaV1JOYjJSMWJHVnpJRDBnZTMwN1hHNWNiaUJjZEM4dklGUm9aU0J5WlhGMWFYSmxJR1oxYm1OMGFXOXVYRzRnWEhSbWRXNWpkR2x2YmlCZlgzZGxZbkJoWTJ0ZmNtVnhkV2x5WlY5ZktHMXZaSFZzWlVsa0tTQjdYRzVjYmlCY2RGeDBMeThnUTJobFkyc2dhV1lnYlc5a2RXeGxJR2x6SUdsdUlHTmhZMmhsWEc0Z1hIUmNkR2xtS0dsdWMzUmhiR3hsWkUxdlpIVnNaWE5iYlc5a2RXeGxTV1JkS1NCN1hHNGdYSFJjZEZ4MGNtVjBkWEp1SUdsdWMzUmhiR3hsWkUxdlpIVnNaWE5iYlc5a2RXeGxTV1JkTG1WNGNHOXlkSE03WEc0Z1hIUmNkSDFjYmlCY2RGeDBMeThnUTNKbFlYUmxJR0VnYm1WM0lHMXZaSFZzWlNBb1lXNWtJSEIxZENCcGRDQnBiblJ2SUhSb1pTQmpZV05vWlNsY2JpQmNkRngwZG1GeUlHMXZaSFZzWlNBOUlHbHVjM1JoYkd4bFpFMXZaSFZzWlhOYmJXOWtkV3hsU1dSZElEMGdlMXh1SUZ4MFhIUmNkR2s2SUcxdlpIVnNaVWxrTEZ4dUlGeDBYSFJjZEd3NklHWmhiSE5sTEZ4dUlGeDBYSFJjZEdWNGNHOXlkSE02SUh0OVhHNGdYSFJjZEgwN1hHNWNiaUJjZEZ4MEx5OGdSWGhsWTNWMFpTQjBhR1VnYlc5a2RXeGxJR1oxYm1OMGFXOXVYRzRnWEhSY2RHMXZaSFZzWlhOYmJXOWtkV3hsU1dSZExtTmhiR3dvYlc5a2RXeGxMbVY0Y0c5eWRITXNJRzF2WkhWc1pTd2diVzlrZFd4bExtVjRjRzl5ZEhNc0lGOWZkMlZpY0dGamExOXlaWEYxYVhKbFgxOHBPMXh1WEc0Z1hIUmNkQzh2SUVac1lXY2dkR2hsSUcxdlpIVnNaU0JoY3lCc2IyRmtaV1JjYmlCY2RGeDBiVzlrZFd4bExtd2dQU0IwY25WbE8xeHVYRzRnWEhSY2RDOHZJRkpsZEhWeWJpQjBhR1VnWlhod2IzSjBjeUJ2WmlCMGFHVWdiVzlrZFd4bFhHNGdYSFJjZEhKbGRIVnliaUJ0YjJSMWJHVXVaWGh3YjNKMGN6dGNiaUJjZEgxY2JseHVYRzRnWEhRdkx5QmxlSEJ2YzJVZ2RHaGxJRzF2WkhWc1pYTWdiMkpxWldOMElDaGZYM2RsWW5CaFkydGZiVzlrZFd4bGMxOWZLVnh1SUZ4MFgxOTNaV0p3WVdOclgzSmxjWFZwY21WZlh5NXRJRDBnYlc5a2RXeGxjenRjYmx4dUlGeDBMeThnWlhod2IzTmxJSFJvWlNCdGIyUjFiR1VnWTJGamFHVmNiaUJjZEY5ZmQyVmljR0ZqYTE5eVpYRjFhWEpsWDE4dVl5QTlJR2x1YzNSaGJHeGxaRTF2WkhWc1pYTTdYRzVjYmlCY2RDOHZJR1JsWm1sdVpTQm5aWFIwWlhJZ1puVnVZM1JwYjI0Z1ptOXlJR2hoY20xdmJua2daWGh3YjNKMGMxeHVJRngwWDE5M1pXSndZV05yWDNKbGNYVnBjbVZmWHk1a0lEMGdablZ1WTNScGIyNG9aWGh3YjNKMGN5d2dibUZ0WlN3Z1oyVjBkR1Z5S1NCN1hHNGdYSFJjZEdsbUtDRmZYM2RsWW5CaFkydGZjbVZ4ZFdseVpWOWZMbThvWlhod2IzSjBjeXdnYm1GdFpTa3BJSHRjYmlCY2RGeDBYSFJQWW1wbFkzUXVaR1ZtYVc1bFVISnZjR1Z5ZEhrb1pYaHdiM0owY3l3Z2JtRnRaU3dnZTF4dUlGeDBYSFJjZEZ4MFkyOXVabWxuZFhKaFlteGxPaUJtWVd4elpTeGNiaUJjZEZ4MFhIUmNkR1Z1ZFcxbGNtRmliR1U2SUhSeWRXVXNYRzRnWEhSY2RGeDBYSFJuWlhRNklHZGxkSFJsY2x4dUlGeDBYSFJjZEgwcE8xeHVJRngwWEhSOVhHNGdYSFI5TzF4dVhHNGdYSFF2THlCblpYUkVaV1poZFd4MFJYaHdiM0owSUdaMWJtTjBhVzl1SUdadmNpQmpiMjF3WVhScFltbHNhWFI1SUhkcGRHZ2dibTl1TFdoaGNtMXZibmtnYlc5a2RXeGxjMXh1SUZ4MFgxOTNaV0p3WVdOclgzSmxjWFZwY21WZlh5NXVJRDBnWm5WdVkzUnBiMjRvYlc5a2RXeGxLU0I3WEc0Z1hIUmNkSFpoY2lCblpYUjBaWElnUFNCdGIyUjFiR1VnSmlZZ2JXOWtkV3hsTGw5ZlpYTk5iMlIxYkdVZ1AxeHVJRngwWEhSY2RHWjFibU4wYVc5dUlHZGxkRVJsWm1GMWJIUW9LU0I3SUhKbGRIVnliaUJ0YjJSMWJHVmJKMlJsWm1GMWJIUW5YVHNnZlNBNlhHNGdYSFJjZEZ4MFpuVnVZM1JwYjI0Z1oyVjBUVzlrZFd4bFJYaHdiM0owY3lncElIc2djbVYwZFhKdUlHMXZaSFZzWlRzZ2ZUdGNiaUJjZEZ4MFgxOTNaV0p3WVdOclgzSmxjWFZwY21WZlh5NWtLR2RsZEhSbGNpd2dKMkVuTENCblpYUjBaWElwTzF4dUlGeDBYSFJ5WlhSMWNtNGdaMlYwZEdWeU8xeHVJRngwZlR0Y2JseHVJRngwTHk4Z1QySnFaV04wTG5CeWIzUnZkSGx3WlM1b1lYTlBkMjVRY205d1pYSjBlUzVqWVd4c1hHNGdYSFJmWDNkbFluQmhZMnRmY21WeGRXbHlaVjlmTG04Z1BTQm1kVzVqZEdsdmJpaHZZbXBsWTNRc0lIQnliM0JsY25SNUtTQjdJSEpsZEhWeWJpQlBZbXBsWTNRdWNISnZkRzkwZVhCbExtaGhjMDkzYmxCeWIzQmxjblI1TG1OaGJHd29iMkpxWldOMExDQndjbTl3WlhKMGVTazdJSDA3WEc1Y2JpQmNkQzh2SUY5ZmQyVmljR0ZqYTE5d2RXSnNhV05mY0dGMGFGOWZYRzRnWEhSZlgzZGxZbkJoWTJ0ZmNtVnhkV2x5WlY5ZkxuQWdQU0JjSWk5Y0lqdGNibHh1SUZ4MEx5OGdURzloWkNCbGJuUnllU0J0YjJSMWJHVWdZVzVrSUhKbGRIVnliaUJsZUhCdmNuUnpYRzRnWEhSeVpYUjFjbTRnWDE5M1pXSndZV05yWDNKbGNYVnBjbVZmWHloZlgzZGxZbkJoWTJ0ZmNtVnhkV2x5WlY5ZkxuTWdQU0F3S1R0Y2JseHVYRzVjYmk4dklGZEZRbEJCUTBzZ1JrOVBWRVZTSUM4dlhHNHZMeUIzWldKd1lXTnJMMkp2YjNSemRISmhjQ0F4TXpCak56SXlNakprTVdNeU9HSXlOekV6WVNJc0ltbHRjRzl5ZENCN1kyOXRZbWx1WlZKbFpIVmpaWElzSUdOeVpXRjBaVk4wYjNKbExDQmpiMjFpYVc1bFZYQmtZWFJsY24wZ1puSnZiU0FuTGk5emRHRjBaVTFoYm1GblpYSW5YRzVjYmk4cUtseHVJQ29nVkdobElHRnVhVzFoZEdsdmJpQnNiMjl3SUd0bGVTQm1iM0lnWTJGdVkyVnNJR0Z1YVcxaGRHbHZibHh1SUNvdlhHNXNaWFFnWDJGdWFXMWhkR2x2Ymt4dmIzQkxaWGtnUFNCdWRXeHNYRzR2S2lwY2JpQXFJRUZqWTNWdGRXeGhkRzl5SUdadmNpQjBhVzFsTFdKaGMyVmtJR0Z1YVcxaGRHbHZibHh1SUNvdlhHNXNaWFFnWDJGalkzVnRkV3hoZEc5eUlEMGdNRnh1THlvcVhHNGdLaUJVYUdVZ1pHVm1ZWFZzZENCbWNITmNiaUFxTDF4dWJHVjBJRjltY0hNZ1BTQTJNRnh1THlvcVhHNGdLaUJVYUdVZ2MzUnZjbVVnWm05eUlHZGhiV1ZjYmlBcUwxeHViR1YwSUY5emRHOXlaU0E5SUh0OVhHNWNibXhsZENCZmRYQmtZWFJsY2sxaGNDQTlJSHQ5WEc1Y2JteGxkQ0JmY21WdVpHVnlaWEpOWVhBZ1BTQjdmVnh1WEc0dktpcGNiaUFxSUZSeWFXZG5aWElnWjJGdFpTQnNiMjl3WEc0Z0tpOWNibVoxYm1OMGFXOXVJRjlzYjI5d0lDaHNZWE4wVkdsdFpYTjBZVzF3S1NCN1hHNGdJRjloYm1sdFlYUnBiMjVNYjI5d1MyVjVJRDBnZDJsdVpHOTNMbkpsY1hWbGMzUkJibWx0WVhScGIyNUdjbUZ0WlNnb0tTQTlQaUI3WEc0Z0lDQWdZMjl1YzNRZ2JtOTNJRDBnUkdGMFpTNXViM2NvS1Z4dUlDQWdJR052Ym5OMElHUjBJRDBnTVRBd01DQXZJRjltY0hOY2JpQWdJQ0JmWVdOamRXMTFiR0YwYjNJZ0t6MGdibTkzSUMwZ2JHRnpkRlJwYldWemRHRnRjRnh1WEc0Z0lDQWdhV1lnS0Y5aFkyTjFiWFZzWVhSdmNpQStQU0JrZENrZ2UxeHVJQ0FnSUNBZ2QyaHBiR1VnS0Y5aFkyTjFiWFZzWVhSdmNpQStQU0JrZENrZ2UxeHVJQ0FnSUNBZ0lDQmZZV05qZFcxMWJHRjBiM0lnTFQwZ1pIUmNiaUFnSUNBZ0lIMWNiaUFnSUNBZ0lHWnZjaUFvYkdWMElHdGxlU0JwYmlCZmNtVnVaR1Z5WlhKTllYQXBJSHRjYmlBZ0lDQWdJQ0FnYkdWMElISmxibVJsY21WeUlEMGdYM0psYm1SbGNtVnlUV0Z3VzJ0bGVWMWNiaUFnSUNBZ0lDQWdjbVZ1WkdWeVpYSXVjbVZ1WkdWeVUzUmhkR1VnUFNCeVpXNWtaWEpsY2loeVpXNWtaWEpsY2k1eVpXNWtaWEpUZEdGMFpTd2djbVZ1WkdWeVpYSXVabWx1WVd4U1pXNWtaWEpUZEdGMFpTd2daSFFwWEc0Z0lDQWdJQ0I5WEc0Z0lDQWdmVnh1SUNBZ0lGOXNiMjl3S0c1dmR5bGNiaUFnZlNsY2JuMWNibHh1WTI5dWMzUWdaMkZ0ZFhnZ1BTQjdYRzRnSUdOdmJtWnBaem9nS0dOdmJtWnBaeUE5SUh0OUtTQTlQaUI3WEc0Z0lDQWdMeThnUTI5dVptbG5JSFJvWlNCd2NtbDJZWFJsSUdkc2IySmhiSE5jYmlBZ0lDQmZabkJ6SUQwZ1kyOXVabWxuTG1ad2N5QjhmQ0JmWm5CelhHNWNiaUFnSUNCc1pYUWdZMjl1ZEdGcGJtVnlJRDBnWTI5dVptbG5MbU52Ym5SaGFXNWxjbHh1WEc0Z0lDQWdMeThnUTNKbFlYUmxJR2RoYldVZ2JHRjVaWEp6WEc0Z0lDQWdZMjl1Wm1sbkxteGhlV1Z5Y3k1bWIzSkZZV05vS0Noc1lYbGxjaWtnUFQ0Z2UxeHVJQ0FnSUNBZ2JHVjBJR05oYm5aaGN5QTlJR1J2WTNWdFpXNTBMbU55WldGMFpVVnNaVzFsYm5Rb0oyTmhiblpoY3ljcFhHNGdJQ0FnSUNCamIyNTBZV2x1WlhJdVlYQndaVzVrUTJocGJHUW9ZMkZ1ZG1GektWeHVYRzRnSUNBZ0lDQmZkWEJrWVhSbGNrMWhjRnRzWVhsbGNpNXVZVzFsWFNBOUlHeGhlV1Z5TG5Wd1pHRjBaWEpjYmlBZ0lDQWdJRjl5Wlc1a1pYSmxjazFoY0Z0c1lYbGxjaTV1WVcxbFhTQTlJR3hoZVdWeUxuSmxibVJsY2k1aWFXNWtLRzUxYkd3c0lHTmhiblpoY3lsY2JpQWdJQ0I5S1Z4dVhHNGdJQ0FnTHk4Z1EzSmxZWFJsSUdkaGJXVWdjM1J2Y21WY2JpQWdJQ0JmYzNSdmNtVWdQU0JqY21WaGRHVlRkRzl5WlNoamIyMWlhVzVsVW1Wa2RXTmxjaWhqYjI1bWFXY3VjbVZrZFdObGNrMWhjQ3dnWTI5dFltbHVaVlZ3WkdGMFpYSW9YM1Z3WkdGMFpYSk5ZWEFzSUY5eVpXNWtaWEpsY2sxaGNDa3BLVnh1SUNBZ0lHbG1JQ2hqYjI1bWFXY3VhVzVwZENrZ2UxeHVJQ0FnSUNBZ1kyOXVabWxuTG1sdWFYUW9YM04wYjNKbExtZGxkRk4wWVhSbEtDa3BYRzRnSUNBZ2ZWeHVJQ0I5TEZ4dVhHNGdJR3hoZVdWeWN6b2dlMzBzWEc1Y2JpQWdjM1JoY25RNklDZ3BJRDArSUh0Y2JpQWdJQ0JmYkc5dmNDaEVZWFJsTG01dmR5Z3BLVnh1SUNCOUxGeHVYRzRnSUdScGMzQmhkR05vT2lBb1lXTjBhVzl1S1NBOVBpQjdYRzRnSUNBZ1gzTjBiM0psTG1ScGMzQmhkR05vS0dGamRHbHZiaWxjYmlBZ2ZWeHVYRzRnSUM4dklDcGNiaUFnTHk4Z0lDb2dSMkZ0WlNCM2FXeHNJR0psSUdGMllXbHNZV0pzWlNCdmJtTmxJR052Ym1acFozVnlaV1JjYm4xY2JseHVaWGh3YjNKMElHUmxabUYxYkhRZ1oyRnRkWGhjYmx4dVhHNHZMeUJVVDBSUFhHNHZMeUF4TGlCQ2RXbHNaQ0JtYVd4bElHWnZjaUJGVXpZZ2JXOWtkV3hsYzF4dVhHNWNiaTh2SUZkRlFsQkJRMHNnUms5UFZFVlNJQzh2WEc0dkx5QXVMM055WXk5bllXMTFlQzVxY3lJc0ltVjRjRzl5ZENCbWRXNWpkR2x2YmlCamNtVmhkR1ZUZEc5eVpTQW9jbVZrZFdObGNpa2dlMXh1SUNBdkx5QkpibWwwSUhOMFlYUmxYRzRnSUd4bGRDQnpkR0YwWlNBOUlISmxaSFZqWlhJb0tWeHVYRzRnSUhKbGRIVnliaUI3WEc0Z0lDQWdMeW9xWEc0Z0lDQWdJQ29nUkdsemNHRjBZMmdnWVdOMGFXOXVJSFJ2SUhSeWFXZG5aWElnYzNSaGRHVWdZMmhoYm1kbGMxeHVJQ0FnSUNBcUwxeHVJQ0FnSUdScGMzQmhkR05vT2lBb1lXTjBhVzl1SUQwZ2UzMHBJRDArSUh0Y2JpQWdJQ0FnSUdsbUlDaHdjbTlqWlhOekxtVnVkaTVqYjJSbElEMDlQU0FuUkVWV0p5a2dlMXh1SUNBZ0lDQWdJQ0F2THlCc2IyY2dZV04wYVc5dWN5QnBiaUJqYjI1emIyeGxYRzRnSUNBZ0lDQWdJR052Ym5OdmJHVXVaM0p2ZFhBb1lXTjBhVzl1TG5SNWNHVXBYRzRnSUNBZ0lDQWdJR052Ym5OdmJHVXVhVzVtYnlnbkpXTmlaV1p2Y21VNkp5d2dKMk52Ykc5eU9pQm5jbVZsYmljc0lITjBZWFJsS1Z4dUlDQWdJQ0FnSUNCamIyNXpiMnhsTG1sdVptOG9KeVZqWVdOMGFXOXVPaWNzSUNkamIyeHZjam9nY21Wa0p5d2dZV04wYVc5dUtWeHVJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ1hHNGdJQ0FnSUNBdkx5QlZjR1JoZEdVZ2MzUmhkR1ZjYmlBZ0lDQWdJSE4wWVhSbElEMGdjbVZrZFdObGNpaHpkR0YwWlN3Z1lXTjBhVzl1S1Z4dUlDQWdJQ0FnTHk4Z1UzUmhkR1VnYldGdVlXZGxjaUJrYjJWemJpZDBJR05oY21VZ1lXSnZkWFFnYm05MGFXTnBibWRjYmlBZ0lDQWdJQzh2SUdkaGJXVWdkRzhnZFhCa1lYUmxJSE4wWVhSbExpQkpibk4wWldGa0lISmxaSFZqWlhKelhHNGdJQ0FnSUNBdkx5QnphRzkxYkdRZ2MyVjBJR1JwY25SNUlITjBZWFJsSUdadmNpQm5ZVzFsSUd4dmIzQWdkRzljYmlBZ0lDQWdJQzh2SUhSeWFXZG5aWElnZFhCa1lYUmxYRzVjYmlBZ0lDQWdJR2xtSUNod2NtOWpaWE56TG1WdWRpNWpiMlJsSUQwOVBTQW5SRVZXSnlrZ2UxeHVJQ0FnSUNBZ0lDQXZMeUJzYjJjZ1lXTjBhVzl1Y3lCcGJpQmpiMjV6YjJ4bFhHNGdJQ0FnSUNBZ0lHTnZibk52YkdVdWFXNW1ieWduSldOaFpuUmxjam9uTENBblkyOXNiM0k2SUdkeVpXVnVKeXdnYzNSaGRHVXBYRzRnSUNBZ0lDQWdJR052Ym5OdmJHVXVaM0p2ZFhCRmJtUW9LVnh1SUNBZ0lDQWdmVnh1SUNBZ0lIMHNYRzRnSUNBZ0x5b3FYRzRnSUNBZ0lDb2dVbVYwZFhKdUlIUm9aU0JqZFhKeVpXNTBJSE4wWVhSbElHWnZjaUJuYVhabGJpQnJaWGxjYmlBZ0lDQWdLaUJVYUdseklHbHpJSFJ2SUdGc2JHOTNJR0Z3Y0d4cFkyRjBhVzl1SUhSdklDZGpiMjV1WldOMEp5QjBieUJ6ZEdGMFpWeHVJQ0FnSUNBcUwxeHVJQ0FnSUdkbGRGTjBZWFJsT2lBb2MzUmhkR1ZMWlhrcElEMCtJSHRjYmlBZ0lDQWdJR2xtSUNnaGMzUmhkR1ZMWlhrcElIdGNiaUFnSUNBZ0lDQWdjbVYwZFhKdUlITjBZWFJsWEc0Z0lDQWdJQ0I5WEc0Z0lDQWdJQ0JsYkhObElIdGNiaUFnSUNBZ0lDQWdjbVYwZFhKdUlITjBZWFJsVzNOMFlYUmxTMlY1WFZ4dUlDQWdJQ0FnZlZ4dUlDQWdJSDFjYmlBZ2ZWeHVmVnh1WEc0dkx5QkJjM04xYldVZ2RHaGxJSEpsWTNWbGNrMWhjQ0JwY3lCaElHWnNZWFFnYldGd0lIUnZJR0ZzYkNCeVpXUjFZMlZ5YzF4dVpYaHdiM0owSUdaMWJtTjBhVzl1SUdOdmJXSnBibVZTWldSMVkyVnlJQ2h5WldSMVkyVnlUV0Z3SUQwZ2UzMHNJSFZ3WkdGMFpYSXBJSHRjYmx4dUlDQXZMeUJIWlc1bGNtRjBaU0JoSUdOdmJXSnBibVZrSUhKbFpIVmpaWElnWm5WdVkzUnBiMjVjYmlBZ2NtVjBkWEp1SUNoemRHRjBaU0E5SUh0OUxDQmhZM1JwYjI0Z1BTQjdmU2tnUFQ0Z2UxeHVJQ0FnSUd4bGRDQnVaWGRUZEdGMFpTQTlJSHQ5TEZ4dUlDQWdJQ0FnSUNCa2FYSjBlVXRsZVhNZ1BTQmJYVnh1WEc0Z0lDQWdMeThnVTNCeVpXRmtJSFJvWlNCaFkzUnBiMjRnZEc4Z1lXeHNJSEpsWkhWalpYSnpJR2x1YzJsa1pTQjBhR1VnWTI5dFltbHVaV1FnYjI1bFhHNGdJQ0FnWm05eUlDaHNaWFFnYTJWNUlHbHVJSEpsWkhWalpYSk5ZWEFwSUh0Y2JpQWdJQ0FnSUM4dklGQmhjM01nZEdobElIZG9iMnhsSUhOMFlYUmxJR1J2ZDI0Z1lYTWdZWEpuZFcxbGJuUWdabTl5WEc0Z0lDQWdJQ0F2THlCamNtOXpjeUJ6ZEdGMFpTQnJaWGtnWVdOalpYTnpYRzRnSUNBZ0lDQnNaWFFnY21Wa2RXTmxaRk4wWVhSbElEMGdjbVZrZFdObGNrMWhjRnRyWlhsZEtITjBZWFJsVzJ0bGVWMHNJR0ZqZEdsdmJpd2djM1JoZEdVcFhHNWNiaUFnSUNBZ0lHbG1JQ2h5WldSMVkyVmtVM1JoZEdVZ0lUMDlJSE4wWVhSbFcydGxlVjBwSUh0Y2JpQWdJQ0FnSUNBZ1pHbHlkSGxMWlhsekxuQjFjMmdvYTJWNUtWeHVJQ0FnSUNBZ2ZWeHVYRzRnSUNBZ0lDQnVaWGRUZEdGMFpWdHJaWGxkSUQwZ2NtVmtkV05sWkZOMFlYUmxYRzRnSUNBZ2ZWeHVYRzRnSUNBZ0x5OGdRMkZzYkNCMWNHUmhkR1VnWm5WdVkzUnBiMjRnWm05eUlHVmhZMmdnY21Wa2RXTmxaQ0J6ZEdGMFpWeHVJQ0FnSUhWd1pHRjBaWElvYm1WM1UzUmhkR1VzSUdScGNuUjVTMlY1Y3lsY2JseHVJQ0FnSUM4dklHUnBjblI1UzJWNWN5NW1iM0pGWVdOb0tDaGthWEowZVV0bGVTa2dQVDRnZTF4dUlDQWdJQzh2SUNBZ2RYQmtZWFJsY2sxaGNGdGthWEowZVV0bGVWMG9ibVYzVTNSaGRHVXNJR1JwY25SNVMyVjVLVnh1SUNBZ0lDOHZJSDBwWEc1Y2JpQWdJQ0J5WlhSMWNtNGdibVYzVTNSaGRHVmNiaUFnZlZ4dWZWeHVYRzVsZUhCdmNuUWdablZ1WTNScGIyNGdZMjl0WW1sdVpWVndaR0YwWlhJZ0tIVndaR0YwWlhKTllYQWdQU0I3ZlN3Z2NtVnVaR1Z5WlhKTllYQWdQU0I3ZlNrZ2UxeHVJQ0F2THlCSFpXNWxjbUYwWlNCamIyMWlhVzVsWkNCMWNHUmhkR1Z5SUdaMWJtTjBhVzl1SUdadmNpQmhiR3dnZFhCa1lYUmxjbk5jYmlBZ2NtVjBkWEp1SUNoemRHRjBaU0E5SUh0OUxDQmthWEowZVV0bGVYTWdQU0JiWFNrZ1BUNGdlMXh1SUNBZ0lHeGxkQ0J1WlhkR2FXNWhiRkpsYm1SbGNsTjBZWFJsSUQwZ2UzMWNiaUFnSUNCbWIzSWdLR3hsZENCclpYa2dhVzRnZFhCa1lYUmxjazFoY0NrZ2UxeHVJQ0FnSUNBZ0x5OGdRMjl0Y0hWMFpTQjBhR1VnWm1sdVlXd2djbVZ1WkdWeUlITjBZWFJsSUdGdVpDQndZWE56SUdsdWRHOGdjbVZ1WkdWeVpYSmNiaUFnSUNBZ0lISmxibVJsY21WeVRXRndXMnRsZVYwdVptbHVZV3hTWlc1a1pYSlRkR0YwWlNBOUlIVndaR0YwWlhKTllYQmJhMlY1WFNoeVpXNWtaWEpsY2sxaGNGdHJaWGxkTG1acGJtRnNVbVZ1WkdWeVUzUmhkR1VzSUhOMFlYUmxMQ0JrYVhKMGVVdGxlWE1wWEc0Z0lDQWdmVnh1SUNCOVhHNTlYRzVjYmx4dVhHNHZMeUJYUlVKUVFVTkxJRVpQVDFSRlVpQXZMMXh1THk4Z0xpOXpjbU12YzNSaGRHVk5ZVzVoWjJWeUxtcHpJbDBzSW5OdmRYSmpaVkp2YjNRaU9pSWlmUT09XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9kaXN0L2dhbXV4LmpzXG4vLyBtb2R1bGUgaWQgPSAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBnYW11eCBmcm9tICcuLi8uLi9kaXN0L2dhbXV4J1xuaW1wb3J0IHNuYWtlUmVkdWNlciBmcm9tICcuL3NuYWtlUmVkdWNlcidcbmltcG9ydCB3b3JsZFJlZHVjZXIgZnJvbSAnLi93b3JsZFJlZHVjZXInXG5pbXBvcnQge3dvcmxkTGF5ZXJVcGRhdGVyLCB3b3JsZExheWVyUmVuZGVyfSBmcm9tICcuL3dvcmxkTGF5ZXInXG5pbXBvcnQge3NuYWtlTGF5ZXJVcGRhdGVyLCBzbmFrZUxheWVyUmVuZGVyfSBmcm9tICcuL3NuYWtlTGF5ZXInXG5pbXBvcnQgeyBcbiAgZ2FtZVJlc2l6ZSxcbiAgc2V0U3RhclBvc2l0aW9uLFxuICBzZXRTbmFrZUJvZHksXG4gIGxlZnRLZXlEb3duLFxuICByaWdodEtleURvd24sXG4gIHVwS2V5RG93bixcbiAgZG93bktleURvd25cbn0gZnJvbSAnLi9hY3Rpb25zJ1xuXG4vLyBpbXBvcnQgJy4vaW5kZXguaHRtbCdcbmltcG9ydCAnLi9zbmFrZV90aHVtYm5haWwucG5nJ1xuaW1wb3J0ICcuL2luZGV4LnNjc3MnXG5cbmNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyb290JylcblxuZ2FtdXguY29uZmlnKHtcbiAgZnBzOiA2MCxcblxuICBjb250YWluZXIsXG5cbiAgbGF5ZXJzOiBbe1xuICAgIG5hbWU6ICd3b3JsZExheWVyJyxcbiAgICB1cGRhdGVyOiB3b3JsZExheWVyVXBkYXRlcixcbiAgICByZW5kZXI6IHdvcmxkTGF5ZXJSZW5kZXJcbiAgfSwge1xuICAgIG5hbWU6ICdzbmFrZUxheWVyJyxcbiAgICB1cGRhdGVyOiBzbmFrZUxheWVyVXBkYXRlcixcbiAgICByZW5kZXI6IHNuYWtlTGF5ZXJSZW5kZXJcbiAgfV0sXG5cbiAgLyoqXG4gICAqIFRoZSBtYXAgZm9yIGFsbCByZWR1Y2VycyB0aGUgc3RvcmUgY2FuIGJyZWFrIGRvd25cbiAgICovXG4gIHJlZHVjZXJNYXA6IHtcbiAgICBzbmFrZTogc25ha2VSZWR1Y2VyLFxuICAgIHdvcmxkOiB3b3JsZFJlZHVjZXJcbiAgfSxcblxuICAvKipcbiAgICogaW5pdCBnYW1lLiBHZXR0aW5nIGNhbGxlZCBiZWZvcmUgZ2FtZSBsb29wIHN0YXJ0c1xuICAgKi9cbiAgaW5pdDogKGdhbWVTdGF0ZSkgPT4ge1xuICAgIGNvbnNvbGUubG9nKCdpbml0JylcbiAgICAvLyBNYWtlIHN1cmUgY29udGFpbmVyIGRpbWVuc2lvbiBpcyBpbml0XG4gICAgZ2FtdXguZGlzcGF0Y2goZ2FtZVJlc2l6ZShcbiAgICAgIGNvbnRhaW5lci5vZmZzZXRXaWR0aCxcbiAgICAgIGNvbnRhaW5lci5vZmZzZXRIZWlnaHRcbiAgICApKVxuXG4gICAgbGV0IHdvcmxkU3RhdGUgPSBnYW1lU3RhdGVbJ3dvcmxkJ10sXG4gICAgICAgIHNuYWtlU3RhdGUgPSBnYW1lU3RhdGVbJ3NuYWtlJ11cblxuICAgIC8vIEluaXQgd29ybGQgYmFzZWQgb24gaW5pdGlhbCBzdGF0ZVxuICAgIGxldCB7XG4gICAgICAgICAgcm93cyxcbiAgICAgICAgICBjb2x1bW5zXG4gICAgICAgIH0gPSB3b3JsZFN0YXRlLFxuICAgICAgICBzdGFyUm93ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogcm93cyksXG4gICAgICAgIHN0YXJDb2x1bW4gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBjb2x1bW5zKVxuXG4gICAgZ2FtdXguZGlzcGF0Y2goc2V0U3RhclBvc2l0aW9uKHN0YXJSb3csIHN0YXJDb2x1bW4pKVxuXG4gICAgLy8gSW5pdCBzbmFrZSBiYXNlZCBvbiB3b3JsZFxuICAgIGxldCBib2R5ID0gW11cbiAgICBkbyB7XG4gICAgICBsZXQgaGVhZFJvdyA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHJvd3MpLFxuICAgICAgICAgIGhlYWRDb2x1bW4gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBjb2x1bW5zKVxuXG4gICAgICBib2R5WzBdID0ge1xuICAgICAgICByb3c6IGhlYWRSb3csXG4gICAgICAgIGNvbHVtbjogaGVhZENvbHVtblxuICAgICAgfVxuXG4gICAgICBsZXQgaXNIb3Jpem9udGFsID0gTWF0aC5yYW5kb20oKSA+IDAuNVxuICAgICAgYm9keVsxXSA9IHtcbiAgICAgICAgcm93OiBoZWFkUm93ICsgKGlzSG9yaXpvbnRhbCA/IChNYXRoLnJhbmRvbSgpID4gMC41ID8gMSA6IC0xKSA6IDApLFxuICAgICAgICBjb2x1bW46IGhlYWRDb2x1bW4gKyAoaXNIb3Jpem9udGFsID8gMCA6IChNYXRoLnJhbmRvbSgpID4gMC41ID8gMSA6IC0xKSksXG4gICAgICB9XG5cbiAgICB9IHdoaWxlICghYm9keS5ldmVyeSgoYm9keUJsb2NrKSA9PiB7XG4gICAgICByZXR1cm4gYm9keUJsb2NrLnJvdyAhPT0gc3RhclJvdyBcbiAgICAgICYmIGJvZHlCbG9jay5jb2x1bW4gIT09IHN0YXJDb2x1bW4gXG4gICAgICAmJiBib2R5QmxvY2sucm93ID49IDAgJiYgYm9keUJsb2NrLnJvdyA8IHJvd3NcbiAgICAgICYmIGJvZHlCbG9jay5jb2x1bW4gPj0gMCAmJiBib2R5QmxvY2suY29sdW1uIDwgY29sdW1uc1xuICAgIH0pKVxuICAgIGdhbXV4LmRpc3BhdGNoKHNldFNuYWtlQm9keShib2R5KSlcblxuICAgIC8vIFNldHVwIGxpc3RlbmVyXG4gICAgd2luZG93Lm9ubG9hZCA9IHdpbmRvdy5vbnJlc2l6ZSA9ICgpID0+IHtcbiAgICAgIGdhbXV4LmRpc3BhdGNoKGdhbWVSZXNpemUoXG4gICAgICAgIGNvbnRhaW5lci5vZmZzZXRXaWR0aCxcbiAgICAgICAgY29udGFpbmVyLm9mZnNldEhlaWdodFxuICAgICAgKSlcbiAgICB9XG5cbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgKGV2dCkgPT4ge1xuICAgICAgc3dpdGNoIChldnQua2V5Q29kZSkge1xuICAgICAgICBjYXNlIDM3OiAvLyBMZWZ0XG4gICAgICAgICAgZ2FtdXguZGlzcGF0Y2gobGVmdEtleURvd24oKSlcbiAgICAgICAgICBicmVha1xuICAgICAgICBjYXNlIDM4OiAvLyBVcFxuICAgICAgICAgIGdhbXV4LmRpc3BhdGNoKHVwS2V5RG93bigpKVxuICAgICAgICAgIGJyZWFrXG4gICAgICAgIGNhc2UgMzk6IC8vIFJpZ2h0XG4gICAgICAgICAgZ2FtdXguZGlzcGF0Y2gocmlnaHRLZXlEb3duKCkpXG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgY2FzZSA0MDogLy8gRG93blxuICAgICAgICAgIGdhbXV4LmRpc3BhdGNoKGRvd25LZXlEb3duKCkpXG4gICAgICAgICAgYnJlYWtcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgLy8gRm9yIG1vYmlsZVxuICAgIGxldCB0b3VjaGVzID0ge1xuICAgICAgdG91Y2hzdGFydDogT2JqZWN0LmFzc2lnbih7fSwge1xuICAgICAgICB4OiAtMSxcbiAgICAgICAgeTogLTFcbiAgICAgIH0pLFxuICAgICAgdG91Y2htb3ZlOiBPYmplY3QuYXNzaWduKHt9LCB7XG4gICAgICAgIHg6IC0xLFxuICAgICAgICB5OiAtMVxuICAgICAgfSlcbiAgICB9XG4gICAgXG4gICAgZnVuY3Rpb24gaGFuZGxlVG91Y2ggKGV2dCkge1xuICAgICAgaWYgKHR5cGVvZiBldnQudG91Y2hlcyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgcmV0dXJuIFxuICAgICAgfVxuXG4gICAgICBsZXQgdG91Y2ggPSBldnQudG91Y2hlc1swXVxuICAgICAgc3dpdGNoIChldnQudHlwZSkge1xuICAgICAgICBjYXNlICd0b3VjaHN0YXJ0JzpcbiAgICAgICAgY2FzZSAndG91Y2htb3ZlJzpcbiAgICAgICAgICB0b3VjaGVzW2V2dC50eXBlXS54ID0gdG91Y2gucGFnZVhcbiAgICAgICAgICB0b3VjaGVzW2V2dC50eXBlXS55ID0gdG91Y2gucGFnZVlcbiAgICAgICAgICBicmVha1xuXG4gICAgICAgIGNhc2UgJ3RvdWNoZW5kJzoge1xuICAgICAgICAgIGlmICh0b3VjaGVzLnRvdWNoc3RhcnQueCA+IC0xICYmIHRvdWNoZXMudG91Y2htb3ZlLnggPiAtMSkge1xuICAgICAgICAgICAgbGV0IGR4ID0gdG91Y2hlcy50b3VjaG1vdmUueCAtIHRvdWNoZXMudG91Y2hzdGFydC54LFxuICAgICAgICAgICAgICAgIGR5ID0gdG91Y2hlcy50b3VjaG1vdmUueSAtIHRvdWNoZXMudG91Y2hzdGFydC55XG5cbiAgICAgICAgICAgIGlmIChNYXRoLmFicyhkeCkgPiBNYXRoLmFicyhkeSkpIHtcbiAgICAgICAgICAgICAgLy8gSG9yaXpvbnRhbCBtb3ZlXG4gICAgICAgICAgICAgIGlmIChkeCA+IDApIHtcbiAgICAgICAgICAgICAgICBnYW11eC5kaXNwYXRjaChyaWdodEtleURvd24oKSlcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBnYW11eC5kaXNwYXRjaChsZWZ0S2V5RG93bigpKVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgLy8gVmVydGljYWwgbW92ZVxuICAgICAgICAgICAgICBpZiAoZHkgPiAwKSB7XG4gICAgICAgICAgICAgICAgZ2FtdXguZGlzcGF0Y2goZG93bktleURvd24oKSlcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBnYW11eC5kaXNwYXRjaCh1cEtleURvd24oKSlcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBicmVha1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgfVxuXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIGhhbmRsZVRvdWNoKVxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIGhhbmRsZVRvdWNoKVxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgaGFuZGxlVG91Y2gpXG4gIH1cbn0pXG5cbmdhbXV4LnN0YXJ0KClcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2RlbW8vc25ha2UvaW5kZXguanMiLCJpbXBvcnQge1xuICBMRUZUX0tFWURPV04sXG4gIFJJR0hUX0tFWURPV04sXG4gIFVQX0tFWURPV04sXG4gIERPV05fS0VZRE9XTixcbiAgU0VUX1NOQUtFX0JPRFksXG4gIE5FWFRfTEVWRUwsXG4gIEdBTUVfT1ZFUixcbiAgQ1VUX1NOQUtFX0JPRFlcbn0gZnJvbSAnLi9hY3Rpb25zJ1xuaW1wb3J0IHtcbiAgZ2FtZURlZmF1bHQsXG4gIGRpcmVjdGlvblxufSBmcm9tICcuL3RoZW1lJ1xuXG5jb25zdCBpbml0U3RhdGUgPSB7XG4gIC8qKlxuICAgKiBBIGxpbmtlZCBsaXN0IGZvciBzbmFrZSBib2R5XG4gICAqL1xuICBib2R5OiBbXSxcbiAgaXNNb3ZlOiBmYWxzZSxcbiAgc3BlZWQ6IGdhbWVEZWZhdWx0LnNwZWVkLFxuICByb3dzOiBnYW1lRGVmYXVsdC5yb3dzLFxuICBjb2x1bW5zOiBnYW1lRGVmYXVsdC5jb2x1bW5zLFxuICBsZXZlbDogMVxufVxuXG5leHBvcnQgZGVmYXVsdCAoc3RhdGUgPSBpbml0U3RhdGUsIGFjdGlvbikgPT4ge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG5cbiAgICBjYXNlIFNFVF9TTkFLRV9CT0RZOiB7XG4gICAgICBsZXQge1xuICAgICAgICBib2R5LFxuICAgICAgfSA9IGFjdGlvblxuXG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcbiAgICAgICAgYm9keSxcbiAgICAgICAgaXNNb3ZlOiB0cnVlXG4gICAgICB9KVxuICAgIH1cblxuICAgIGNhc2UgVVBfS0VZRE9XTjoge1xuICAgICAgbGV0IGJvZHkgPSBzdGF0ZS5ib2R5LnNsaWNlKClcblxuICAgICAgaWYgKGJvZHlbMF0ucm93ID09PSBib2R5WzFdLnJvdyArIDEpIHtcbiAgICAgICAgLy8gSGl0IGJhY2t3YXJkcyBcbiAgICAgICAgLy8gVGhpcyBzaG91bGQgdHJpZ2dlciBub3RoaW5nXG4gICAgICAgIHJldHVybiBzdGF0ZVxuICAgICAgfVxuXG4gICAgICBib2R5LnJldmVyc2UoKS5yZWR1Y2UoKGZpcnN0LCBzZWNvbmQpID0+IHtcbiAgICAgICAgZmlyc3Qucm93ID0gc2Vjb25kLnJvd1xuICAgICAgICBmaXJzdC5jb2x1bW4gPSBzZWNvbmQuY29sdW1uXG4gICAgICAgIHJldHVybiBzZWNvbmQgXG4gICAgICB9KVxuICAgICAgYm9keS5yZXZlcnNlKClcblxuICAgICAgYm9keVswXS5yb3cgLT0gMVxuXG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcbiAgICAgICAgaXNNb3ZlOiB0cnVlLFxuICAgICAgICBib2R5LFxuICAgICAgICBkaXJlY3Rpb246IGRpcmVjdGlvbi5VUFxuICAgICAgfSlcbiAgICB9XG5cbiAgICBjYXNlIERPV05fS0VZRE9XTjoge1xuICAgICAgbGV0IGJvZHkgPSBzdGF0ZS5ib2R5LnNsaWNlKClcblxuICAgICAgaWYgKGJvZHlbMF0ucm93ID09PSBib2R5WzFdLnJvdyAtIDEpIHtcbiAgICAgICAgLy8gSGl0IGJhY2t3YXJkcyBcbiAgICAgICAgLy8gVGhpcyBzaG91bGQgdHJpZ2dlciBub3RoaW5nXG4gICAgICAgIHJldHVybiBzdGF0ZVxuICAgICAgfVxuXG4gICAgICBib2R5LnJldmVyc2UoKS5yZWR1Y2UoKGZpcnN0LCBzZWNvbmQpID0+IHtcbiAgICAgICAgZmlyc3Qucm93ID0gc2Vjb25kLnJvd1xuICAgICAgICBmaXJzdC5jb2x1bW4gPSBzZWNvbmQuY29sdW1uXG4gICAgICAgIHJldHVybiBzZWNvbmQgXG4gICAgICB9KVxuICAgICAgYm9keS5yZXZlcnNlKClcblxuICAgICAgYm9keVswXS5yb3cgKz0gMVxuXG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcbiAgICAgICAgaXNNb3ZlOiB0cnVlLFxuICAgICAgICBib2R5LFxuICAgICAgICBkaXJlY3Rpb246IGRpcmVjdGlvbi5ET1dOXG4gICAgICB9KVxuICAgIH1cblxuICAgIGNhc2UgTEVGVF9LRVlET1dOOiB7XG4gICAgICBsZXQgYm9keSA9IHN0YXRlLmJvZHkuc2xpY2UoKVxuXG4gICAgICBpZiAoYm9keVswXS5jb2x1bW4gPT09IGJvZHlbMV0uY29sdW1uICsgMSkge1xuICAgICAgICAvLyBIaXQgYmFja3dhcmRzIFxuICAgICAgICAvLyBUaGlzIHNob3VsZCB0cmlnZ2VyIG5vdGhpbmdcbiAgICAgICAgcmV0dXJuIHN0YXRlXG4gICAgICB9XG5cbiAgICAgIGJvZHkucmV2ZXJzZSgpLnJlZHVjZSgoZmlyc3QsIHNlY29uZCkgPT4ge1xuICAgICAgICBmaXJzdC5yb3cgPSBzZWNvbmQucm93XG4gICAgICAgIGZpcnN0LmNvbHVtbiA9IHNlY29uZC5jb2x1bW5cbiAgICAgICAgcmV0dXJuIHNlY29uZCBcbiAgICAgIH0pXG4gICAgICBib2R5LnJldmVyc2UoKVxuXG4gICAgICBib2R5WzBdLmNvbHVtbiAtPSAxXG5cbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xuICAgICAgICBpc01vdmU6IHRydWUsXG4gICAgICAgIGJvZHksXG4gICAgICAgIGRpcmVjdGlvbjogZGlyZWN0aW9uLkxFRlRcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgY2FzZSBSSUdIVF9LRVlET1dOOiB7XG4gICAgICBsZXQgYm9keSA9IHN0YXRlLmJvZHkuc2xpY2UoKVxuXG4gICAgICBpZiAoYm9keVswXS5jb2x1bW4gPT09IGJvZHlbMV0uY29sdW1uIC0gMSkge1xuICAgICAgICAvLyBIaXQgYmFja3dhcmRzIFxuICAgICAgICAvLyBUaGlzIHNob3VsZCB0cmlnZ2VyIG5vdGhpbmdcbiAgICAgICAgcmV0dXJuIHN0YXRlXG4gICAgICB9XG5cbiAgICAgIGJvZHkucmV2ZXJzZSgpLnJlZHVjZSgoZmlyc3QsIHNlY29uZCkgPT4ge1xuICAgICAgICBmaXJzdC5yb3cgPSBzZWNvbmQucm93XG4gICAgICAgIGZpcnN0LmNvbHVtbiA9IHNlY29uZC5jb2x1bW5cbiAgICAgICAgcmV0dXJuIHNlY29uZCBcbiAgICAgIH0pXG4gICAgICBib2R5LnJldmVyc2UoKVxuXG4gICAgICBib2R5WzBdLmNvbHVtbiArPSAxXG5cbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xuICAgICAgICBpc01vdmU6IHRydWUsXG4gICAgICAgIGJvZHksXG4gICAgICAgIGRpcmVjdGlvbjogZGlyZWN0aW9uLlJJR0hUXG4gICAgICB9KVxuICAgIH1cblxuICAgIGNhc2UgTkVYVF9MRVZFTDoge1xuICAgICAgbGV0IGJvZHkgPSBzdGF0ZS5ib2R5LnNsaWNlKCksXG4gICAgICAgICAgaGVhZCA9IGJvZHlbMF0sXG4gICAgICAgICAgaGVhZERpcmVjdGlvbiA9IHN0YXRlLmRpcmVjdGlvblxuXG4gICAgICBpZiAoIWhlYWQpIHtcbiAgICAgICAgcmV0dXJuIHN0YXRlXG4gICAgICB9XG5cbiAgICAgIGJvZHkudW5zaGlmdCh7XG4gICAgICAgIHJvdzogaGVhZERpcmVjdGlvbiA9PT0gZGlyZWN0aW9uLlVQID8gaGVhZC5yb3cgLSAxIDogaGVhZERpcmVjdGlvbiA9PT0gZGlyZWN0aW9uLkRPV04gPyBoZWFkLnJvdyArIDEgOiBoZWFkLnJvdyxcbiAgICAgICAgY29sdW1uOiBoZWFkRGlyZWN0aW9uID09PSBkaXJlY3Rpb24uTEVGVCA/IGhlYWQuY29sdW1uIC0gMSA6IGhlYWREaXJlY3Rpb24gPT09IGRpcmVjdGlvbi5SSUdIVCA/IGhlYWQuY29sdW1uICsgMSA6IGhlYWQuY29sdW1uXG4gICAgICB9KVxuXG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcbiAgICAgICAgYm9keSxcbiAgICAgICAgbGV2ZWw6IHN0YXRlLmxldmVsICsgMSxcbiAgICAgICAgc3BlZWQ6IGdhbWVEZWZhdWx0LnNwZWVkICsgKHN0YXRlLmxldmVsIC0gMSkgKiAwLjAyXG4gICAgICB9KVxuICAgIH1cblxuICAgIGNhc2UgR0FNRV9PVkVSOiB7XG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcbiAgICAgICAgaXNNb3ZlOiBmYWxzZVxuICAgICAgfSlcbiAgICB9XG5cbiAgICBjYXNlIENVVF9TTkFLRV9CT0RZOiB7XG4gICAgICBsZXQgYm9keSA9IHN0YXRlLmJvZHkuc2xpY2UoKSxcbiAgICAgICAgICB7Y3V0Qm9keUluZGV4fSA9IGFjdGlvbixcbiAgICAgICAgICBuZXdMZXZlbCA9IGN1dEJvZHlJbmRleCAtIDFcblxuICAgICAgYm9keS5zcGxpY2UoY3V0Qm9keUluZGV4KVxuXG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcbiAgICAgICAgYm9keSxcbiAgICAgICAgbGV2ZWw6IG5ld0xldmVsLFxuICAgICAgICBzcGVlZDogZ2FtZURlZmF1bHQuc3BlZWQgKyBuZXdMZXZlbCAqIDAuMDJcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZVxuICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vZGVtby9zbmFrZS9zbmFrZVJlZHVjZXIuanMiLCJpbXBvcnQge1xuICBHQU1FX1JFU0laRSxcbiAgU0VUX1NUQVJfUE9TSVRJT04sXG4gIE5FWFRfTEVWRUwsXG4gIEdBTUVfT1ZFUixcbiAgQ1VUX1NOQUtFX0JPRFlcbn0gZnJvbSAnLi9hY3Rpb25zJ1xuaW1wb3J0IHtnYW1lRGVmYXVsdH0gZnJvbSAnLi90aGVtZSdcblxuY29uc3QgaW5pdFN0YXRlID0ge1xuICB3aWR0aDogLTEsXG4gIGhlaWdodDogLTEsXG4gIHJvd3M6IGdhbWVEZWZhdWx0LnJvd3MsXG4gIGNvbHVtbnM6IGdhbWVEZWZhdWx0LmNvbHVtbnMsXG4gIHN0YXJQb3NpdGlvbjoge1xuICAgIHJvdzogLTEsXG4gICAgY29sdW1uOiAtMVxuICB9LFxuICBsZXZlbDogMSxcbiAgaGlnaExldmVsOiAxLFxuICBpc0dhbWVvdmVyOiBmYWxzZVxufVxuXG5mdW5jdGlvbiBpc092ZXJsYXAgKHN0YXJQb3NpdGlvbiwgc25ha2VCb2R5KSB7XG4gIHJldHVybiAhc25ha2VCb2R5LmV2ZXJ5KChib2R5QmxvY2spID0+IHtcbiAgICByZXR1cm4gYm9keUJsb2NrLnJvdyAhPT0gc3RhclBvc2l0aW9uLnJvd1xuICAgICAgICAmJiBib2R5QmxvY2suY29sdW1uICE9PSBzdGFyUG9zaXRpb24uY29sdW1uXG4gIH0pXG59XG5cbmV4cG9ydCBkZWZhdWx0IChzdGF0ZSA9IGluaXRTdGF0ZSwgYWN0aW9uKSA9PiB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcblxuICAgIGNhc2UgR0FNRV9SRVNJWkU6IHtcbiAgICAgIGxldCBnYW1lU2l6ZSA9IE1hdGgubWluKE1hdGgubWluKGFjdGlvbi53aWR0aCwgYWN0aW9uLmhlaWdodCksIDYwMClcbiAgICAgIFxuICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XG4gICAgICAgIHdpZHRoOiBnYW1lU2l6ZSxcbiAgICAgICAgaGVpZ2h0OiBnYW1lU2l6ZVxuICAgICAgfSlcbiAgICB9XG5cbiAgICBjYXNlIFNFVF9TVEFSX1BPU0lUSU9OOlxuICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XG4gICAgICAgIHN0YXJQb3NpdGlvbjoge1xuICAgICAgICAgIHJvdzogYWN0aW9uLnJvdyxcbiAgICAgICAgICBjb2x1bW46IGFjdGlvbi5jb2x1bW5cbiAgICAgICAgfVxuICAgICAgfSlcblxuICAgIGNhc2UgTkVYVF9MRVZFTDoge1xuICAgICAgbGV0IHNuYWtlQm9keSA9IGFjdGlvbi5zbmFrZUJvZHksXG4gICAgICAgICAgbmV3U3RhclBvc2l0aW9uID0ge30sXG4gICAgICAgICAgbmV3TGV2ZWwgPSBzdGF0ZS5sZXZlbCArIDFcblxuICAgICAgZG8ge1xuICAgICAgICBuZXdTdGFyUG9zaXRpb24ucm93ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogc3RhdGUucm93cylcbiAgICAgICAgbmV3U3RhclBvc2l0aW9uLmNvbHVtbiA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHN0YXRlLmNvbHVtbnMpXG4gICAgICB9XG4gICAgICB3aGlsZSAoaXNPdmVybGFwKG5ld1N0YXJQb3NpdGlvbiwgc25ha2VCb2R5KSlcblxuICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XG4gICAgICAgIHN0YXJQb3NpdGlvbjogbmV3U3RhclBvc2l0aW9uLFxuICAgICAgICBsZXZlbDogbmV3TGV2ZWwsXG4gICAgICAgIGhpZ2hMZXZlbDogTWF0aC5tYXgoc3RhdGUuaGlnaExldmVsLCBuZXdMZXZlbClcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgY2FzZSBHQU1FX09WRVI6IHtcbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xuICAgICAgICBpc0dhbWVvdmVyOiB0cnVlXG4gICAgICB9KVxuICAgIH1cblxuICAgIGNhc2UgQ1VUX1NOQUtFX0JPRFk6IHtcbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xuICAgICAgICBsZXZlbDogYWN0aW9uLmN1dEJvZHlJbmRleCAtIDFcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZVxuICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vZGVtby9zbmFrZS93b3JsZFJlZHVjZXIuanMiLCJjb25zdCBpbml0RmluYWxSZW5kZXJTdGF0ZSAgPSB7fVxuXG5leHBvcnQgY29uc3Qgd29ybGRMYXllclVwZGF0ZXIgPSAoZmluYWxSZW5kZXJTdGF0ZSA9IGluaXRGaW5hbFJlbmRlclN0YXRlLCBnYW1lU3RhdGUsIGRpcnR5S2V5cykgPT4ge1xuICBpZiAoZGlydHlLZXlzLmluZGV4T2YoJ3dvcmxkJykgPj0gMCkge1xuICAgIGxldCB7XG4gICAgICAgICAgd2lkdGgsXG4gICAgICAgICAgaGVpZ2h0LFxuICAgICAgICAgIHJvd3MsXG4gICAgICAgICAgY29sdW1ucyxcbiAgICAgICAgICBzdGFyUG9zaXRpb24sXG4gICAgICAgICAgbGV2ZWwsXG4gICAgICAgICAgaGlnaExldmVsXG4gICAgICAgIH0gPSBnYW1lU3RhdGVbJ3dvcmxkJ10sXG4gICAgICAgIGNlbGxXaWR0aCA9IHdpZHRoIC8gY29sdW1ucyxcbiAgICAgICAgY2VsbEhlaWdodCA9IGhlaWdodCAvIHJvd3NcblxuICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBmaW5hbFJlbmRlclN0YXRlLCB7XG4gICAgICB3aWR0aCxcbiAgICAgIGhlaWdodCxcbiAgICAgIHhzOiBBcnJheShjb2x1bW5zICsgMSkuZmlsbCgwKS5tYXAoKHgsIHhJbmRleCkgPT4ge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHg6IHhJbmRleCAqIGNlbGxXaWR0aCxcbiAgICAgICAgICB5MDogMCxcbiAgICAgICAgICB5MTogaGVpZ2h0XG4gICAgICAgIH19KSxcbiAgICAgIHlzOiBBcnJheShyb3dzICsgMSkuZmlsbCgwKS5tYXAoKHksIHlJbmRleCkgPT4ge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHk6IHlJbmRleCAqIGNlbGxIZWlnaHQsXG4gICAgICAgICAgeDA6IDAsXG4gICAgICAgICAgeDE6IHdpZHRoXG4gICAgICAgIH19KSxcbiAgICAgIHN0YXI6IHtcbiAgICAgICAgeDogc3RhclBvc2l0aW9uLmNvbHVtbiAqIGNlbGxXaWR0aCxcbiAgICAgICAgeTogc3RhclBvc2l0aW9uLnJvdyAqIGNlbGxIZWlnaHQsXG4gICAgICAgIHdpZHRoOiBjZWxsV2lkdGgsXG4gICAgICAgIGhlaWdodDogY2VsbEhlaWdodFxuICAgICAgfSxcbiAgICAgIGxldmVsLFxuICAgICAgaGlnaExldmVsXG4gICAgfSlcbiAgfVxuICBlbHNlIHtcbiAgICByZXR1cm4gZmluYWxSZW5kZXJTdGF0ZVxuICB9XG59XG5cbmV4cG9ydCBjb25zdCB3b3JsZExheWVyUmVuZGVyID0gKGNhbnZhcywgcmVuZGVyU3RhdGUsIGZpbmFsUmVuZGVyU3RhdGUsIGR0KSA9PiB7XG4gIGlmIChyZW5kZXJTdGF0ZSAhPT0gZmluYWxSZW5kZXJTdGF0ZSkge1xuICAgIGlmICghcmVuZGVyU3RhdGUpIHtcbiAgICAgIHJlbmRlclN0YXRlID0gZmluYWxSZW5kZXJTdGF0ZVxuICAgIH1cblxuICAgIC8vIE5vIGFuaW1hdGlvbiB0byB3b3JsZCBsYXllclxuICAgIHJlbmRlclN0YXRlID0gZmluYWxSZW5kZXJTdGF0ZVxuXG4gICAgbGV0IHtcbiAgICAgIHdpZHRoLFxuICAgICAgaGVpZ2h0LFxuICAgICAgeHMsXG4gICAgICB5cyxcbiAgICAgIGxldmVsLFxuICAgICAgaGlnaExldmVsLFxuICAgICAgc3RhclxuICAgIH0gPSByZW5kZXJTdGF0ZVxuXG4gICAgbGV0IGNvbnRleHQgPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKVxuXG4gICAgaWYgKGNhbnZhcy53aWR0aCAhPT0gd2lkdGhcbiAgICAgIHx8IGNhbnZhcy5oZWlnaHQgIT09IGhlaWdodCkge1xuICAgICAgY2FudmFzLndpZHRoID0gd2lkdGhcbiAgICAgIGNhbnZhcy5oZWlnaHQgPSBoZWlnaHRcbiAgICAgIC8vIENsZWFyIGNhbnZhcyBtYW51YWxseVxuICAgICAgY29udGV4dC5jbGVhclJlY3QoMCwgMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KVxuICAgIH1cblxuICAgIC8vIENsZWFyIGNhbnZhcyBtYW51YWxseSBiZWZvcmUgcmVkcmF3XG4gICAgY29udGV4dC5jbGVhclJlY3QoMCwgMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KVxuXG4gICAgY29udGV4dC5maWxsU3R5bGUgPSAnI2ZmZmZmZidcbiAgICBjb250ZXh0LmZpbGxSZWN0KDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodClcblxuICAgIGNvbnRleHQuc3Ryb2tlU3R5bGUgPSAnI2Y5ZjlmOSdcbiAgICBjb250ZXh0LmxpbmVXaWR0aCA9IDFcbiAgICBjb250ZXh0LmJlZ2luUGF0aCgpXG5cbiAgICB4cy5mb3JFYWNoKCh2ZXJ0aWNhbExpbmUpID0+IHtcbiAgICAgIGNvbnRleHQubW92ZVRvKHZlcnRpY2FsTGluZS54LCB2ZXJ0aWNhbExpbmUueTApXG4gICAgICBjb250ZXh0LmxpbmVUbyh2ZXJ0aWNhbExpbmUueCwgdmVydGljYWxMaW5lLnkxKVxuICAgICAgY29udGV4dC5zdHJva2UoKVxuICAgIH0pXG5cbiAgICB5cy5mb3JFYWNoKChob3Jpem9udGFsTGluZSkgPT4ge1xuICAgICAgY29udGV4dC5tb3ZlVG8oaG9yaXpvbnRhbExpbmUueDAsIGhvcml6b250YWxMaW5lLnkpXG4gICAgICBjb250ZXh0LmxpbmVUbyhob3Jpem9udGFsTGluZS54MSwgaG9yaXpvbnRhbExpbmUueSlcbiAgICAgIGNvbnRleHQuc3Ryb2tlKClcbiAgICB9KVxuXG4gICAgLy8gRHJhdyB0ZXh0XG4gICAgY29udGV4dC5maWxsU3R5bGUgPSAnI2JmYmZiZidcbiAgICBjb250ZXh0LmZvbnQgPSBNYXRoLm1pbih3aWR0aCAvIDIsIGhlaWdodCAvIDIpICsgJ3B4IGFyaWFsLCBoZWx2ZXRpY2EsIHNhbnMtc2VyaWYnXG4gICAgY29udGV4dC50ZXh0QWxpZ24gPSAnY2VudGVyJ1xuICAgIGNvbnRleHQudGV4dEJhc2VsaW5lID0gJ21pZGRsZSdcbiAgICBjb250ZXh0LmZpbGxUZXh0KGxldmVsLCB3aWR0aCAvIDIsIGhlaWdodCAvIDIpXG5cbiAgICBjb250ZXh0LmZvbnQgPSBNYXRoLm1pbih3aWR0aCAvIDE2LCBoZWlnaHQgLyAxNikgKyAncHggYXJpYWwsIGhlbHZldGljYSwgc2Fucy1zZXJpZidcbiAgICBjb250ZXh0LmZpbGxUZXh0KCdIaWdoZXN0OiAnICsgaGlnaExldmVsLCB3aWR0aCAvIDIsIGhlaWdodCAqIDAuOClcblxuICAgIC8vIERyYXcgc3RhclxuICAgIGNvbnRleHQuZmlsbFN0eWxlID0gJyNmZmFlMDAnXG4gICAgY29udGV4dC5maWxsUmVjdChzdGFyLngsIHN0YXIueSwgc3Rhci53aWR0aCwgc3Rhci5oZWlnaHQpXG4gIH1cblxuICByZXR1cm4gcmVuZGVyU3RhdGVcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9kZW1vL3NuYWtlL3dvcmxkTGF5ZXIuanMiLCJpbXBvcnQgZ2FtdXggZnJvbSAnLi4vLi4vZGlzdC9nYW11eCdcbmltcG9ydCB7XG4gIGRpcmVjdGlvbixcbiAgZ2FtZURlZmF1bHRcbn0gZnJvbSAnLi90aGVtZSdcbmltcG9ydCB7IFxuICBsZWZ0S2V5RG93bixcbiAgcmlnaHRLZXlEb3duLFxuICB1cEtleURvd24sXG4gIGRvd25LZXlEb3duLFxuICBnYW1lT3ZlcixcbiAgbmV4dExldmVsLFxuICBjdXRTbmFrZUJvZHlcbn0gZnJvbSAnLi9hY3Rpb25zJ1xuXG4vKipcbiAqIEZ1bmN0aW9uIGRldGVjdCBoaXQgd29ybGQgZWRnZVxuICovXG5mdW5jdGlvbiBoaXRTdGFyIChzbmFrZUhlYWQsIHN0YXIpIHtcbiAgbGV0IHtoaXREZXRlY3Rpb25CdWZmZXJ9ID0gZ2FtZURlZmF1bHRcblxuICByZXR1cm4gc25ha2VIZWFkLnggKyBzbmFrZUhlYWQud2lkdGggKiBoaXREZXRlY3Rpb25CdWZmZXIgPCBzdGFyLnggKyBzdGFyLndpZHRoXG4gICAgICAmJiBzbmFrZUhlYWQueCArIHNuYWtlSGVhZC53aWR0aCAqICgxIC0gaGl0RGV0ZWN0aW9uQnVmZmVyKSA+IHN0YXIueFxuICAgICAgJiYgc25ha2VIZWFkLnkgKyBzbmFrZUhlYWQuaGVpZ2h0ICogaGl0RGV0ZWN0aW9uQnVmZmVyIDwgc3Rhci55ICsgc3Rhci5oZWlnaHRcbiAgICAgICYmIHNuYWtlSGVhZC55ICsgc25ha2VIZWFkLmhlaWdodCAqICgxIC0gaGl0RGV0ZWN0aW9uQnVmZmVyKSA+IHN0YXIueVxufVxuXG5mdW5jdGlvbiBoaXRPblJpZ2h0IChmb2N1cywgb3RoZXIsIHdpZHRoLCBoZWlnaHQpIHtcbiAgbGV0IHtoaXREZXRlY3Rpb25CdWZmZXJ9ID0gZ2FtZURlZmF1bHQsXG4gICAgICBmb2N1c1ggPSBmb2N1cy54ID4gMCA/IGZvY3VzLnggJSB3aWR0aCA6IHdpZHRoICsgKGZvY3VzLnggJSB3aWR0aCksXG4gICAgICBmb2N1c1kgPSBmb2N1cy55ID4gMCA/IGZvY3VzLnkgJSBoZWlnaHQgOiBoZWlnaHQgKyAoZm9jdXMueSAlIGhlaWdodCksXG4gICAgICBvdGhlclggPSBvdGhlci54ID4gMCA/IG90aGVyLnggJSB3aWR0aCA6IHdpZHRoICsgKG90aGVyLnggJSB3aWR0aCksXG4gICAgICBvdGhlclkgPSBvdGhlci55ID4gMCA/IG90aGVyLnkgJSBoZWlnaHQgOiBoZWlnaHQgKyAob3RoZXIueSAlIGhlaWdodClcblxuICByZXR1cm4gZm9jdXNYICsgZm9jdXMud2lkdGggKiAoMSAtIGhpdERldGVjdGlvbkJ1ZmZlcikgPiBvdGhlclhcbiAgICAgICYmIGZvY3VzWCArIGZvY3VzLndpZHRoIDwgb3RoZXJYICsgb3RoZXIud2lkdGhcbiAgICAgICYmIGZvY3VzWSArIGZvY3VzLmhlaWdodCAqICgxIC0gaGl0RGV0ZWN0aW9uQnVmZmVyKSA+IG90aGVyWVxuICAgICAgJiYgZm9jdXNZICsgZm9jdXMuaGVpZ2h0ICogaGl0RGV0ZWN0aW9uQnVmZmVyIDwgb3RoZXJZICsgb3RoZXIuaGVpZ2h0XG59XG5cbmZ1bmN0aW9uIGhpdE9uTGVmdCAoZm9jdXMsIG90aGVyLCB3aWR0aCwgaGVpZ2h0KSB7XG4gIGxldCB7aGl0RGV0ZWN0aW9uQnVmZmVyfSA9IGdhbWVEZWZhdWx0LFxuICAgICAgZm9jdXNYID0gZm9jdXMueCA+IDAgPyBmb2N1cy54ICUgd2lkdGggOiB3aWR0aCArIChmb2N1cy54ICUgd2lkdGgpLFxuICAgICAgZm9jdXNZID0gZm9jdXMueSA+IDAgPyBmb2N1cy55ICUgaGVpZ2h0IDogaGVpZ2h0ICsgKGZvY3VzLnkgJSBoZWlnaHQpLFxuICAgICAgb3RoZXJYID0gb3RoZXIueCA+IDAgPyBvdGhlci54ICUgd2lkdGggOiB3aWR0aCArIChvdGhlci54ICUgd2lkdGgpLFxuICAgICAgb3RoZXJZID0gb3RoZXIueSA+IDAgPyBvdGhlci55ICUgaGVpZ2h0IDogaGVpZ2h0ICsgKG90aGVyLnkgJSBoZWlnaHQpXG5cbiAgcmV0dXJuIGZvY3VzWCArIGZvY3VzLndpZHRoICogaGl0RGV0ZWN0aW9uQnVmZmVyIDwgb3RoZXJYICsgb3RoZXIud2lkdGhcbiAgICAgICYmIGZvY3VzWCA+IG90aGVyWFxuICAgICAgJiYgZm9jdXNZICsgZm9jdXMuaGVpZ2h0ICogKDEgLSBoaXREZXRlY3Rpb25CdWZmZXIpID4gb3RoZXJZXG4gICAgICAmJiBmb2N1c1kgKyBmb2N1cy5oZWlnaHQgKiBoaXREZXRlY3Rpb25CdWZmZXIgPCBvdGhlclkgKyBvdGhlci5oZWlnaHRcbn1cblxuZnVuY3Rpb24gaGl0T25Cb3R0b20gKGZvY3VzLCBvdGhlciwgd2lkdGgsIGhlaWdodCkge1xuICBsZXQge2hpdERldGVjdGlvbkJ1ZmZlcn0gPSBnYW1lRGVmYXVsdCxcbiAgICAgIGZvY3VzWCA9IGZvY3VzLnggPiAwID8gZm9jdXMueCAlIHdpZHRoIDogd2lkdGggKyAoZm9jdXMueCAlIHdpZHRoKSxcbiAgICAgIGZvY3VzWSA9IGZvY3VzLnkgPiAwID8gZm9jdXMueSAlIGhlaWdodCA6IGhlaWdodCArIChmb2N1cy55ICUgaGVpZ2h0KSxcbiAgICAgIG90aGVyWCA9IG90aGVyLnggPiAwID8gb3RoZXIueCAlIHdpZHRoIDogd2lkdGggKyAob3RoZXIueCAlIHdpZHRoKSxcbiAgICAgIG90aGVyWSA9IG90aGVyLnkgPiAwID8gb3RoZXIueSAlIGhlaWdodCA6IGhlaWdodCArIChvdGhlci55ICUgaGVpZ2h0KVxuXG4gIHJldHVybiBmb2N1c1kgKyBmb2N1cy5oZWlnaHQgKiAoMSAtIGhpdERldGVjdGlvbkJ1ZmZlcikgPiBvdGhlcllcbiAgICAgICYmIGZvY3VzWSArIGZvY3VzLmhlaWdodCA8IG90aGVyWSArIG90aGVyLmhlaWdodFxuICAgICAgJiYgZm9jdXNYICsgZm9jdXMud2lkdGggKiAoMSAtIGhpdERldGVjdGlvbkJ1ZmZlcikgPiBvdGhlclhcbiAgICAgICYmIGZvY3VzWCArIGZvY3VzLndpZHRoICogaGl0RGV0ZWN0aW9uQnVmZmVyIDwgb3RoZXJYICsgb3RoZXIud2lkdGhcbn1cblxuZnVuY3Rpb24gaGl0T25Ub3AgKGZvY3VzLCBvdGhlciwgd2lkdGgsIGhlaWdodCkge1xuICBsZXQge2hpdERldGVjdGlvbkJ1ZmZlcn0gPSBnYW1lRGVmYXVsdCxcbiAgICAgIGZvY3VzWCA9IGZvY3VzLnggPiAwID8gZm9jdXMueCAlIHdpZHRoIDogd2lkdGggKyAoZm9jdXMueCAlIHdpZHRoKSxcbiAgICAgIGZvY3VzWSA9IGZvY3VzLnkgPiAwID8gZm9jdXMueSAlIGhlaWdodCA6IGhlaWdodCArIChmb2N1cy55ICUgaGVpZ2h0KSxcbiAgICAgIG90aGVyWCA9IG90aGVyLnggPiAwID8gb3RoZXIueCAlIHdpZHRoIDogd2lkdGggKyAob3RoZXIueCAlIHdpZHRoKSxcbiAgICAgIG90aGVyWSA9IG90aGVyLnkgPiAwID8gb3RoZXIueSAlIGhlaWdodCA6IGhlaWdodCArIChvdGhlci55ICUgaGVpZ2h0KVxuXG4gIHJldHVybiBmb2N1c1kgKyBmb2N1cy5oZWlnaHQgKiBoaXREZXRlY3Rpb25CdWZmZXIgPCBvdGhlclkgKyBvdGhlci5oZWlnaHRcbiAgICAgICYmIGZvY3VzWSA+IG90aGVyWVxuICAgICAgJiYgZm9jdXNYICsgZm9jdXMud2lkdGggKiAoMSAtIGhpdERldGVjdGlvbkJ1ZmZlcikgPiBvdGhlclhcbiAgICAgICYmIGZvY3VzWCArIGZvY3VzLndpZHRoICogaGl0RGV0ZWN0aW9uQnVmZmVyIDwgb3RoZXJYICsgb3RoZXIud2lkdGhcbn1cblxuZnVuY3Rpb24gZ2V0SGl0Qm9keUluZGV4IChzbmFrZUJvZHksIGhlYWREaXJlY3Rpb24sIHdpZHRoLCBoZWlnaHQpIHtcbiAgbGV0IGhlYWQgPSBzbmFrZUJvZHlbMF1cblxuICBpZiAoIWhlYWQpIHtcbiAgICByZXR1cm4gLTFcbiAgfVxuXG4gIGZvciAobGV0IGkgPSAzOyBpIDwgc25ha2VCb2R5Lmxlbmd0aDsgaSsrKSB7XG4gICAgbGV0IGJvZHlCbG9jayA9IHNuYWtlQm9keVtpXVxuXG4gICAgaWYgKChoZWFkRGlyZWN0aW9uID09PSBkaXJlY3Rpb24uVVAgJiYgaGl0T25Ub3AoaGVhZCwgYm9keUJsb2NrLCB3aWR0aCwgaGVpZ2h0KSlcbiAgICAgIHx8IChoZWFkRGlyZWN0aW9uID09PSBkaXJlY3Rpb24uRE9XTiAmJiBoaXRPbkJvdHRvbShoZWFkLCBib2R5QmxvY2ssIHdpZHRoLCBoZWlnaHQpKVxuICAgICAgfHwgKGhlYWREaXJlY3Rpb24gPT09IGRpcmVjdGlvbi5MRUZUICYmIGhpdE9uTGVmdChoZWFkLCBib2R5QmxvY2ssIHdpZHRoLCBoZWlnaHQpKVxuICAgICAgfHwgKGhlYWREaXJlY3Rpb24gPT09IGRpcmVjdGlvbi5SSUdIVCAmJiBoaXRPblJpZ2h0KGhlYWQsIGJvZHlCbG9jaywgd2lkdGgsIGhlaWdodCkpKSB7XG4gICAgICByZXR1cm4gaVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiAtMVxufVxuXG5mdW5jdGlvbiBjdXRTZWxmQnlIZWFkIChzbmFrZUJvZHksIGhlYWREaXJlY3Rpb24sIHdpZHRoLCBoZWlnaHQpIHtcbiAgbGV0IGhpdEJvZHlJbmRleCA9IGdldEhpdEJvZHlJbmRleChzbmFrZUJvZHksIGhlYWREaXJlY3Rpb24sIHdpZHRoLCBoZWlnaHQpXG5cbiAgaWYgKGhpdEJvZHlJbmRleCA8IDApIHtcbiAgICByZXR1cm4gXG4gIH1cblxuICBnYW11eC5kaXNwYXRjaChjdXRTbmFrZUJvZHkoaGl0Qm9keUluZGV4KSlcbn1cblxuLyoqXG4gKiBGdW5jdGlvbiB0byBmaWxsIGEgZnJlZSBkaW1lbnNpb24gcmVjdFxuICogZXhhbXBsZTpcbiAqIGZpbGxGcmVlUmVjdChjb250ZXh0LCAtMTAsIC0xMCwgMjAsIDIwKSB3aWxsIHJlbmRlciBmb3VyXG4gKiByZWN0IGF0IGVhY2ggY29ybmVyIHdpdGggMTAgcGl4ZWwgZGltZW5zaW9uXG4gKi9cbmZ1bmN0aW9uIGZpbGxGcmVlUmVjdCAoY29udGV4dCwgeCwgeSwgd2lkdGgsIGhlaWdodCkge1xuICBsZXQgY2FudmFzV2lkdGggPSBjb250ZXh0LmNhbnZhcy53aWR0aCxcbiAgICAgIGNhbnZhc0hlaWdodCA9IGNvbnRleHQuY2FudmFzLmhlaWdodFxuXG4gIGlmICh4IDwgMCkge1xuICAgIHggPSB4ICUgY2FudmFzV2lkdGhcbiAgICBmaWxsRnJlZVJlY3QoY29udGV4dCwgY2FudmFzV2lkdGggKyB4LCB5LCBNYXRoLm1pbigteCwgd2lkdGgpLCBoZWlnaHQpXG4gIH1cblxuICBpZiAoeCA+IGNhbnZhc1dpZHRoIC0gd2lkdGgpIHtcbiAgICB4ID0geCAlIGNhbnZhc1dpZHRoXG4gICAgZmlsbEZyZWVSZWN0KGNvbnRleHQsIE1hdGgubWF4KDAsIHggLSBjYW52YXNXaWR0aCksIHksIHdpZHRoIC0gTWF0aC5tYXgoMCwgY2FudmFzV2lkdGggLSB4KSwgaGVpZ2h0KVxuICB9XG4gIFxuICBpZiAoeSA8IDApIHtcbiAgICB5ID0geSAlIGNhbnZhc0hlaWdodFxuICAgIGZpbGxGcmVlUmVjdChjb250ZXh0LCB4LCBjYW52YXNIZWlnaHQgKyB5LCB3aWR0aCwgTWF0aC5taW4oLXksIGhlaWdodCkpXG4gIH1cblxuICBpZiAoeSA+IGNhbnZhc0hlaWdodCAtIGhlaWdodCkge1xuICAgIHkgPSB5ICUgY2FudmFzSGVpZ2h0XG4gICAgZmlsbEZyZWVSZWN0KGNvbnRleHQsIHgsIE1hdGgubWF4KDAsIHkgLSBjYW52YXNIZWlnaHQpLCB3aWR0aCwgaGVpZ2h0IC0gTWF0aC5tYXgoMCwgY2FudmFzSGVpZ2h0IC0geSkpXG4gIH1cblxuICBjb250ZXh0LmZpbGxSZWN0KHgsIHksIHdpZHRoLCBoZWlnaHQpXG59XG5cbmNvbnN0IGluaXRGaW5hbFJlbmRlclN0YXRlICA9IHt9XG5cbmV4cG9ydCBjb25zdCBzbmFrZUxheWVyVXBkYXRlciA9IChmaW5hbFJlbmRlclN0YXRlID0gaW5pdEZpbmFsUmVuZGVyU3RhdGUsIGdhbWVTdGF0ZSwgZGlydHlLZXlzKSA9PiB7XG4gIGlmIChkaXJ0eUtleXMuaW5kZXhPZignc25ha2UnKSA+PSAwKSB7XG4gICAgbGV0IHtcbiAgICAgICAgICB3aWR0aCxcbiAgICAgICAgICBoZWlnaHQsXG4gICAgICAgICAgcm93cyxcbiAgICAgICAgICBjb2x1bW5zLFxuICAgICAgICAgIHN0YXJQb3NpdGlvblxuICAgICAgICB9ID0gZ2FtZVN0YXRlWyd3b3JsZCddLFxuICAgICAgICB7XG4gICAgICAgICAgYm9keSxcbiAgICAgICAgICBkaXJlY3Rpb24sXG4gICAgICAgICAgaXNNb3ZlLFxuICAgICAgICAgIHNwZWVkXG4gICAgICAgIH0gPSBnYW1lU3RhdGVbJ3NuYWtlJ10sXG4gICAgICAgIGNlbGxXaWR0aCA9IHdpZHRoIC8gY29sdW1ucyxcbiAgICAgICAgY2VsbEhlaWdodCA9IGhlaWdodCAvIHJvd3NcblxuICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBmaW5hbFJlbmRlclN0YXRlLCB7XG4gICAgICB3aWR0aCxcbiAgICAgIGhlaWdodCxcbiAgICAgIGJvZHk6IGJvZHkubWFwKChib2R5QmxvY2ssIGluZGV4KSA9PiB7XG4gICAgICAgIGxldCB4ID0gYm9keUJsb2NrLmNvbHVtbiAqIGNlbGxXaWR0aCxcbiAgICAgICAgICAgIHkgPSBib2R5QmxvY2sucm93ICogY2VsbEhlaWdodFxuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgeDogYm9keUJsb2NrLmNvbHVtbiAqIGNlbGxXaWR0aCxcbiAgICAgICAgICB5OiBib2R5QmxvY2sucm93ICogY2VsbEhlaWdodCxcbiAgICAgICAgICB3aWR0aDogY2VsbFdpZHRoLFxuICAgICAgICAgIGhlaWdodDogY2VsbEhlaWdodFxuICAgICAgICAgIC8vIGNvbHVtbjogYm9keUJsb2NrLmNvbHVtbixcbiAgICAgICAgICAvLyByb3c6IGJvZHlCbG9jay5yb3dcbiAgICAgICAgfVxuICAgICAgfSksXG4gICAgICBpc01vdmUsXG4gICAgICBzcGVlZCxcbiAgICAgIGRpcmVjdGlvbixcbiAgICAgIHN0YXI6IHtcbiAgICAgICAgeDogc3RhclBvc2l0aW9uLmNvbHVtbiAqIGNlbGxXaWR0aCxcbiAgICAgICAgeTogc3RhclBvc2l0aW9uLnJvdyAqIGNlbGxIZWlnaHQsXG4gICAgICAgIHdpZHRoOiBjZWxsV2lkdGgsXG4gICAgICAgIGhlaWdodDogY2VsbEhlaWdodFxuICAgICAgfVxuICAgIH0pXG4gIH1cbiAgZWxzZSB7XG4gICAgcmV0dXJuIGZpbmFsUmVuZGVyU3RhdGVcbiAgfVxufVxuXG5leHBvcnQgY29uc3Qgc25ha2VMYXllclJlbmRlciA9IChjYW52YXMsIHJlbmRlclN0YXRlLCBmaW5hbFJlbmRlclN0YXRlLCBkdCkgPT4ge1xuICBpZiAocmVuZGVyU3RhdGUgIT09IGZpbmFsUmVuZGVyU3RhdGUpIHtcbiAgICBsZXQgY29udGV4dCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpLFxuICAgICAgICBkaXJ0eSA9IGZhbHNlXG5cbiAgICBpZiAoIXJlbmRlclN0YXRlKSB7XG4gICAgICByZW5kZXJTdGF0ZSA9IGZpbmFsUmVuZGVyU3RhdGVcbiAgICAgIGRpcnR5ID0gdHJ1ZVxuICAgIH1cblxuICAgIC8vIFNldCB0aGluZ3MgdGhhdCBhcmUgbm90IGFuaW1hdGVkXG4gICAgT2JqZWN0LmFzc2lnbihyZW5kZXJTdGF0ZSwge1xuICAgICAgZGlyZWN0aW9uOiBmaW5hbFJlbmRlclN0YXRlLmRpcmVjdGlvbixcbiAgICAgIGlzTW92ZTogZmluYWxSZW5kZXJTdGF0ZS5pc01vdmUsXG4gICAgICBzcGVlZDogZmluYWxSZW5kZXJTdGF0ZS5zcGVlZCxcbiAgICAgIHdpZHRoOiBmaW5hbFJlbmRlclN0YXRlLndpZHRoLFxuICAgICAgaGVpZ2h0OiBmaW5hbFJlbmRlclN0YXRlLmhlaWdodFxuICAgIH0pXG5cbiAgICBpZiAoY2FudmFzLndpZHRoICE9PSByZW5kZXJTdGF0ZS53aWR0aFxuICAgICAgfHwgY2FudmFzLmhlaWdodCAhPT0gcmVuZGVyU3RhdGUuaGVpZ2h0KSB7XG4gICAgICBjYW52YXMud2lkdGggPSByZW5kZXJTdGF0ZS53aWR0aFxuICAgICAgY2FudmFzLmhlaWdodCA9IHJlbmRlclN0YXRlLmhlaWdodFxuICAgICAgLy8gQ2xlYXIgY2FudmFzIG1hbnVhbGx5XG4gICAgICBjb250ZXh0LmNsZWFyUmVjdCgwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpXG4gICAgfVxuXG4gICAgaWYgKCFyZW5kZXJTdGF0ZS5pc01vdmUpIHtcbiAgICAgIC8vIFNuYWtlIHN0b3BzIG1vdmVcbiAgICAgIHJldHVybiByZW5kZXJTdGF0ZVxuICAgIH1cblxuICAgIGxldCB7XG4gICAgICAgICAgc3BlZWQsXG4gICAgICAgICAgYm9keVxuICAgICAgICB9ID0gcmVuZGVyU3RhdGUsXG4gICAgICAgIGJvZHlGUlMgPSBmaW5hbFJlbmRlclN0YXRlLmJvZHksXG4gICAgICAgIHN0YXJGUlMgPSBmaW5hbFJlbmRlclN0YXRlLnN0YXJcblxuICAgIC8vIE1ha2Ugc3VyZSBib2R5IGFuZCBib2R5RlJTIGFyZSBpbiBzeW5jXG4gICAgaWYgKGJvZHkubGVuZ3RoIDwgYm9keUZSUy5sZW5ndGgpIHtcbiAgICAgIC8vIEJvZHkgZ3Jvd3NcbiAgICAgIGZvciAobGV0IGkgPSBib2R5Lmxlbmd0aDsgaSA8IGJvZHlGUlMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgbGV0IGJvZHlGUlNCbG9jayA9IGJvZHlGUlNbaV1cbiAgICAgICAgYm9keVtpXSA9IHtcbiAgICAgICAgICB4OiBib2R5RlJTQmxvY2sueCxcbiAgICAgICAgICB5OiBib2R5RlJTQmxvY2sueSxcbiAgICAgICAgICB3aWR0aDogYm9keUZSU0Jsb2NrLndpZHRoLFxuICAgICAgICAgIGhlaWdodDogYm9keUZSU0Jsb2NrLmhlaWdodFxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGVsc2UgaWYgKGJvZHkubGVuZ3RoID4gYm9keUZSUy5sZW5ndGgpIHtcbiAgICAgIC8vIEJvZHkgZ290IGN1dFxuICAgICAgYm9keS5zcGxpY2UoYm9keUZSUy5sZW5ndGgpXG4gICAgfVxuXG4gICAgLy8gU2V0IHRoZSBhY3R1YWwgcmVuZGVyIGRpbWVuc2lvbnMgZm9yIHRoZSBzbmFrZSBoZWFkXG4gICAgYm9keS5mb3JFYWNoKChib2R5QmxvY2ssIGluZGV4KSA9PiB7XG4gICAgICBsZXQge1xuICAgICAgICAgICAgeCxcbiAgICAgICAgICAgIHksXG4gICAgICAgICAgICB3aWR0aCxcbiAgICAgICAgICAgIGhlaWdodFxuICAgICAgICAgIH0gPSBib2R5QmxvY2tcblxuICAgICAgaWYgKGJvZHlGUlNbaW5kZXhdLnggIT09IHgpIHtcbiAgICAgICAgbGV0IGRpcmVjdGlvblVuaXQgPSAoYm9keUZSU1tpbmRleF0ueCAtIHgpIC8gTWF0aC5hYnMoYm9keUZSU1tpbmRleF0ueCAtIHgpLFxuICAgICAgICAgICAgZGlzdGFuY2UgPSBNYXRoLm1pbihzcGVlZCAqIGR0LCBNYXRoLmFicyhib2R5RlJTW2luZGV4XS54IC0geCkpXG5cbiAgICAgICAgYm9keUJsb2NrLnggKz0gZGlzdGFuY2UgKiBkaXJlY3Rpb25Vbml0XG4gICAgICAgIGRpcnR5ID0gdHJ1ZVxuICAgICAgfVxuXG4gICAgICBpZiAoYm9keUZSU1tpbmRleF0ueSAhPT0geSkge1xuICAgICAgICBsZXQgZGlyZWN0aW9uVW5pdCA9IChib2R5RlJTW2luZGV4XS55IC0geSkgLyBNYXRoLmFicyhib2R5RlJTW2luZGV4XS55IC0geSksXG4gICAgICAgICAgICBkaXN0YW5jZSA9IE1hdGgubWluKHNwZWVkICogZHQsIE1hdGguYWJzKGJvZHlGUlNbaW5kZXhdLnkgLSB5KSlcbiAgICAgICAgXG4gICAgICAgIGJvZHlCbG9jay55ICs9IGRpc3RhbmNlICogZGlyZWN0aW9uVW5pdFxuICAgICAgICBkaXJ0eSA9IHRydWVcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgaWYgKGRpcnR5KSB7XG4gICAgICAvLyBXZSBoYXZlIHNvbWV0aW5nIHRvIHJlbmRlciBoZXJlXG4gICAgICBjb250ZXh0LmNsZWFyUmVjdCgwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpXG5cbiAgICAgIC8vIFJlbmRlclxuICAgICAgYm9keS5mb3JFYWNoKChib2R5QmxvY2ssIGluZGV4KSA9PiB7XG4gICAgICAgIGlmIChpbmRleCA9PT0gMCkge1xuICAgICAgICAgIGNvbnRleHQuZmlsbFN0eWxlID0gJyNlYTY5NjknXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgY29udGV4dC5maWxsU3R5bGUgPSAnIzNmM2YzZidcbiAgICAgICAgfVxuICAgICAgICBmaWxsRnJlZVJlY3QoY29udGV4dCwgYm9keUJsb2NrLngsIGJvZHlCbG9jay55LCBib2R5QmxvY2sud2lkdGgsIGJvZHlCbG9jay5oZWlnaHQpXG4gICAgICB9KVxuXG4gICAgICAvLyBIaXQgZGV0ZWN0aW9uXG4gICAgICAvLyBDaGVjayBpZiBzbmFrZSBoZWFkIGhpdCBpdHNlbGZcbiAgICAgIC8vIEN1dCB0aGUgYm9keSBpZiBoaXQgaXRzZWxmXG4gICAgICBjdXRTZWxmQnlIZWFkKGJvZHksIHJlbmRlclN0YXRlLmRpcmVjdGlvbiwgcmVuZGVyU3RhdGUud2lkdGgsIHJlbmRlclN0YXRlLmhlaWdodClcblxuICAgICAgLy8gQ2hlY2sgaWYgc25ha2UgaGVhZCBoaXQgc3RhclxuICAgICAgbGV0IGhlYWQgPSBib2R5WzBdLFxuICAgICAgICAgIGhlYWRYID0gaGVhZC54ICUgcmVuZGVyU3RhdGUud2lkdGgsXG4gICAgICAgICAgaGVhZFkgPSBoZWFkLnkgJSByZW5kZXJTdGF0ZS5oZWlnaHQsXG4gICAgICAgICAgaGVhZFBvc2l0aW9uIFxuXG4gICAgICBoZWFkWCA9IGhlYWRYIDwgMCA/IHJlbmRlclN0YXRlLndpZHRoICsgaGVhZFggOiBoZWFkWFxuICAgICAgaGVhZFkgPSBoZWFkWSA8IDAgPyByZW5kZXJTdGF0ZS5oZWlnaHQgKyBoZWFkWSA6IGhlYWRZXG4gICAgICBpZiAoaGl0U3Rhcih7XG4gICAgICAgIHg6IGhlYWRYLFxuICAgICAgICB5OiBoZWFkWSxcbiAgICAgICAgd2lkdGg6IGhlYWQud2lkdGgsXG4gICAgICAgIGhlaWdodDogaGVhZC5oZWlnaHRcbiAgICAgIH0sIHN0YXJGUlMpKSB7XG4gICAgICAgIGdhbXV4LmRpc3BhdGNoKG5leHRMZXZlbChib2R5RlJTKSlcbiAgICAgIH1cbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAvLyBOb3cgdGhhdCB0aGUgY3VycmVudCBmaW5hbCByZW5kZXIgc3RhdGUgaGFzIGFycml2ZWRcbiAgICAgIC8vIHdlIG5lZWQgdG8gdXBkYXRlIHRoZSBmaW5hbCByZW5kZXIgc3RhdGVcbiAgICAgIHN3aXRjaChyZW5kZXJTdGF0ZS5kaXJlY3Rpb24pIHtcbiAgICAgICAgY2FzZSBkaXJlY3Rpb24uVVA6XG4gICAgICAgICAgZ2FtdXguZGlzcGF0Y2godXBLZXlEb3duKCkpXG4gICAgICAgICAgYnJlYWtcblxuICAgICAgICBjYXNlIGRpcmVjdGlvbi5ET1dOOlxuICAgICAgICAgIGdhbXV4LmRpc3BhdGNoKGRvd25LZXlEb3duKCkpXG4gICAgICAgICAgYnJlYWtcblxuICAgICAgICBjYXNlIGRpcmVjdGlvbi5MRUZUOlxuICAgICAgICAgIGdhbXV4LmRpc3BhdGNoKGxlZnRLZXlEb3duKCkpXG4gICAgICAgICAgYnJlYWtcblxuICAgICAgICBjYXNlIGRpcmVjdGlvbi5SSUdIVDpcbiAgICAgICAgICBnYW11eC5kaXNwYXRjaChyaWdodEtleURvd24oKSlcbiAgICAgICAgICBicmVha1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBcbiAgcmV0dXJuIHJlbmRlclN0YXRlXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vZGVtby9zbmFrZS9zbmFrZUxheWVyLmpzIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwic25ha2VfdGh1bWJuYWlsLnBuZ1wiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vZGVtby9zbmFrZS9zbmFrZV90aHVtYm5haWwucG5nXG4vLyBtb2R1bGUgaWQgPSA4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL2luZGV4LnNjc3NcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbi8vIFByZXBhcmUgY3NzVHJhbnNmb3JtYXRpb25cbnZhciB0cmFuc2Zvcm07XG5cbnZhciBvcHRpb25zID0ge31cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcblx0Ly8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0aWYoIWNvbnRlbnQubG9jYWxzKSB7XG5cdFx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vaW5kZXguc2Nzc1wiLCBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9pbmRleC5zY3NzXCIpO1xuXHRcdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cdFx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdFx0fSk7XG5cdH1cblx0Ly8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2RlbW8vc25ha2UvaW5kZXguc2Nzc1xuLy8gbW9kdWxlIGlkID0gOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKHVuZGVmaW5lZCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJib2R5LFxcbmh0bWwge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjsgfVxcblxcbiNyb290IHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VkZWRlZDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjsgfVxcbiAgI3Jvb3QgaDIge1xcbiAgICBtYXJnaW46IDA7IH1cXG5cXG4jcm9vdCBjYW52YXMge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgbGVmdDogNTAlO1xcbiAgdG9wOiA1MCU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTsgfVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIhLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL2RlbW8vc25ha2UvaW5kZXguc2Nzc1xuLy8gbW9kdWxlIGlkID0gMTBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLypcblx0TUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcblx0QXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKHVzZVNvdXJjZU1hcCkge1xuXHR2YXIgbGlzdCA9IFtdO1xuXG5cdC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblx0bGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuXHRcdHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuXHRcdFx0dmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCk7XG5cdFx0XHRpZihpdGVtWzJdKSB7XG5cdFx0XHRcdHJldHVybiBcIkBtZWRpYSBcIiArIGl0ZW1bMl0gKyBcIntcIiArIGNvbnRlbnQgKyBcIn1cIjtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHJldHVybiBjb250ZW50O1xuXHRcdFx0fVxuXHRcdH0pLmpvaW4oXCJcIik7XG5cdH07XG5cblx0Ly8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3Rcblx0bGlzdC5pID0gZnVuY3Rpb24obW9kdWxlcywgbWVkaWFRdWVyeSkge1xuXHRcdGlmKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKVxuXHRcdFx0bW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgXCJcIl1dO1xuXHRcdHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBpZCA9IHRoaXNbaV1bMF07XG5cdFx0XHRpZih0eXBlb2YgaWQgPT09IFwibnVtYmVyXCIpXG5cdFx0XHRcdGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcblx0XHR9XG5cdFx0Zm9yKGkgPSAwOyBpIDwgbW9kdWxlcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGl0ZW0gPSBtb2R1bGVzW2ldO1xuXHRcdFx0Ly8gc2tpcCBhbHJlYWR5IGltcG9ydGVkIG1vZHVsZVxuXHRcdFx0Ly8gdGhpcyBpbXBsZW1lbnRhdGlvbiBpcyBub3QgMTAwJSBwZXJmZWN0IGZvciB3ZWlyZCBtZWRpYSBxdWVyeSBjb21iaW5hdGlvbnNcblx0XHRcdC8vICB3aGVuIGEgbW9kdWxlIGlzIGltcG9ydGVkIG11bHRpcGxlIHRpbWVzIHdpdGggZGlmZmVyZW50IG1lZGlhIHF1ZXJpZXMuXG5cdFx0XHQvLyAgSSBob3BlIHRoaXMgd2lsbCBuZXZlciBvY2N1ciAoSGV5IHRoaXMgd2F5IHdlIGhhdmUgc21hbGxlciBidW5kbGVzKVxuXHRcdFx0aWYodHlwZW9mIGl0ZW1bMF0gIT09IFwibnVtYmVyXCIgfHwgIWFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcblx0XHRcdFx0aWYobWVkaWFRdWVyeSAmJiAhaXRlbVsyXSkge1xuXHRcdFx0XHRcdGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuXHRcdFx0XHR9IGVsc2UgaWYobWVkaWFRdWVyeSkge1xuXHRcdFx0XHRcdGl0ZW1bMl0gPSBcIihcIiArIGl0ZW1bMl0gKyBcIikgYW5kIChcIiArIG1lZGlhUXVlcnkgKyBcIilcIjtcblx0XHRcdFx0fVxuXHRcdFx0XHRsaXN0LnB1c2goaXRlbSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9O1xuXHRyZXR1cm4gbGlzdDtcbn07XG5cbmZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKSB7XG5cdHZhciBjb250ZW50ID0gaXRlbVsxXSB8fCAnJztcblx0dmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXHRpZiAoIWNzc01hcHBpbmcpIHtcblx0XHRyZXR1cm4gY29udGVudDtcblx0fVxuXG5cdGlmICh1c2VTb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgPT09ICdmdW5jdGlvbicpIHtcblx0XHR2YXIgc291cmNlTWFwcGluZyA9IHRvQ29tbWVudChjc3NNYXBwaW5nKTtcblx0XHR2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuXHRcdFx0cmV0dXJuICcvKiMgc291cmNlVVJMPScgKyBjc3NNYXBwaW5nLnNvdXJjZVJvb3QgKyBzb3VyY2UgKyAnICovJ1xuXHRcdH0pO1xuXG5cdFx0cmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbignXFxuJyk7XG5cdH1cblxuXHRyZXR1cm4gW2NvbnRlbnRdLmpvaW4oJ1xcbicpO1xufVxuXG4vLyBBZGFwdGVkIGZyb20gY29udmVydC1zb3VyY2UtbWFwIChNSVQpXG5mdW5jdGlvbiB0b0NvbW1lbnQoc291cmNlTWFwKSB7XG5cdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuXHR2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKTtcblx0dmFyIGRhdGEgPSAnc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsJyArIGJhc2U2NDtcblxuXHRyZXR1cm4gJy8qIyAnICsgZGF0YSArICcgKi8nO1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcbi8vIG1vZHVsZSBpZCA9IDExXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qXG5cdE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG5cdEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5cbnZhciBzdHlsZXNJbkRvbSA9IHt9O1xuXG52YXJcdG1lbW9pemUgPSBmdW5jdGlvbiAoZm4pIHtcblx0dmFyIG1lbW87XG5cblx0cmV0dXJuIGZ1bmN0aW9uICgpIHtcblx0XHRpZiAodHlwZW9mIG1lbW8gPT09IFwidW5kZWZpbmVkXCIpIG1lbW8gPSBmbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuXHRcdHJldHVybiBtZW1vO1xuXHR9O1xufTtcblxudmFyIGlzT2xkSUUgPSBtZW1vaXplKGZ1bmN0aW9uICgpIHtcblx0Ly8gVGVzdCBmb3IgSUUgPD0gOSBhcyBwcm9wb3NlZCBieSBCcm93c2VyaGFja3Ncblx0Ly8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuXHQvLyBUZXN0cyBmb3IgZXhpc3RlbmNlIG9mIHN0YW5kYXJkIGdsb2JhbHMgaXMgdG8gYWxsb3cgc3R5bGUtbG9hZGVyXG5cdC8vIHRvIG9wZXJhdGUgY29ycmVjdGx5IGludG8gbm9uLXN0YW5kYXJkIGVudmlyb25tZW50c1xuXHQvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcblx0cmV0dXJuIHdpbmRvdyAmJiBkb2N1bWVudCAmJiBkb2N1bWVudC5hbGwgJiYgIXdpbmRvdy5hdG9iO1xufSk7XG5cbnZhciBnZXRFbGVtZW50ID0gKGZ1bmN0aW9uIChmbikge1xuXHR2YXIgbWVtbyA9IHt9O1xuXG5cdHJldHVybiBmdW5jdGlvbihzZWxlY3Rvcikge1xuXHRcdGlmICh0eXBlb2YgbWVtb1tzZWxlY3Rvcl0gPT09IFwidW5kZWZpbmVkXCIpIHtcblx0XHRcdG1lbW9bc2VsZWN0b3JdID0gZm4uY2FsbCh0aGlzLCBzZWxlY3Rvcik7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIG1lbW9bc2VsZWN0b3JdXG5cdH07XG59KShmdW5jdGlvbiAodGFyZ2V0KSB7XG5cdHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldClcbn0pO1xuXG52YXIgc2luZ2xldG9uID0gbnVsbDtcbnZhclx0c2luZ2xldG9uQ291bnRlciA9IDA7XG52YXJcdHN0eWxlc0luc2VydGVkQXRUb3AgPSBbXTtcblxudmFyXHRmaXhVcmxzID0gcmVxdWlyZShcIi4vdXJsc1wiKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihsaXN0LCBvcHRpb25zKSB7XG5cdGlmICh0eXBlb2YgREVCVUcgIT09IFwidW5kZWZpbmVkXCIgJiYgREVCVUcpIHtcblx0XHRpZiAodHlwZW9mIGRvY3VtZW50ICE9PSBcIm9iamVjdFwiKSB0aHJvdyBuZXcgRXJyb3IoXCJUaGUgc3R5bGUtbG9hZGVyIGNhbm5vdCBiZSB1c2VkIGluIGEgbm9uLWJyb3dzZXIgZW52aXJvbm1lbnRcIik7XG5cdH1cblxuXHRvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblxuXHRvcHRpb25zLmF0dHJzID0gdHlwZW9mIG9wdGlvbnMuYXR0cnMgPT09IFwib2JqZWN0XCIgPyBvcHRpb25zLmF0dHJzIDoge307XG5cblx0Ly8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG5cdC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2Vcblx0aWYgKCFvcHRpb25zLnNpbmdsZXRvbikgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XG5cblx0Ly8gQnkgZGVmYXVsdCwgYWRkIDxzdHlsZT4gdGFncyB0byB0aGUgPGhlYWQ+IGVsZW1lbnRcblx0aWYgKCFvcHRpb25zLmluc2VydEludG8pIG9wdGlvbnMuaW5zZXJ0SW50byA9IFwiaGVhZFwiO1xuXG5cdC8vIEJ5IGRlZmF1bHQsIGFkZCA8c3R5bGU+IHRhZ3MgdG8gdGhlIGJvdHRvbSBvZiB0aGUgdGFyZ2V0XG5cdGlmICghb3B0aW9ucy5pbnNlcnRBdCkgb3B0aW9ucy5pbnNlcnRBdCA9IFwiYm90dG9tXCI7XG5cblx0dmFyIHN0eWxlcyA9IGxpc3RUb1N0eWxlcyhsaXN0LCBvcHRpb25zKTtcblxuXHRhZGRTdHlsZXNUb0RvbShzdHlsZXMsIG9wdGlvbnMpO1xuXG5cdHJldHVybiBmdW5jdGlvbiB1cGRhdGUgKG5ld0xpc3QpIHtcblx0XHR2YXIgbWF5UmVtb3ZlID0gW107XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGl0ZW0gPSBzdHlsZXNbaV07XG5cdFx0XHR2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXTtcblxuXHRcdFx0ZG9tU3R5bGUucmVmcy0tO1xuXHRcdFx0bWF5UmVtb3ZlLnB1c2goZG9tU3R5bGUpO1xuXHRcdH1cblxuXHRcdGlmKG5ld0xpc3QpIHtcblx0XHRcdHZhciBuZXdTdHlsZXMgPSBsaXN0VG9TdHlsZXMobmV3TGlzdCwgb3B0aW9ucyk7XG5cdFx0XHRhZGRTdHlsZXNUb0RvbShuZXdTdHlsZXMsIG9wdGlvbnMpO1xuXHRcdH1cblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgbWF5UmVtb3ZlLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgZG9tU3R5bGUgPSBtYXlSZW1vdmVbaV07XG5cblx0XHRcdGlmKGRvbVN0eWxlLnJlZnMgPT09IDApIHtcblx0XHRcdFx0Zm9yICh2YXIgaiA9IDA7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKykgZG9tU3R5bGUucGFydHNbal0oKTtcblxuXHRcdFx0XHRkZWxldGUgc3R5bGVzSW5Eb21bZG9tU3R5bGUuaWRdO1xuXHRcdFx0fVxuXHRcdH1cblx0fTtcbn07XG5cbmZ1bmN0aW9uIGFkZFN0eWxlc1RvRG9tIChzdHlsZXMsIG9wdGlvbnMpIHtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgaXRlbSA9IHN0eWxlc1tpXTtcblx0XHR2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXTtcblxuXHRcdGlmKGRvbVN0eWxlKSB7XG5cdFx0XHRkb21TdHlsZS5yZWZzKys7XG5cblx0XHRcdGZvcih2YXIgaiA9IDA7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRkb21TdHlsZS5wYXJ0c1tqXShpdGVtLnBhcnRzW2pdKTtcblx0XHRcdH1cblxuXHRcdFx0Zm9yKDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0ZG9tU3R5bGUucGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdLCBvcHRpb25zKSk7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdHZhciBwYXJ0cyA9IFtdO1xuXG5cdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRwYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0sIG9wdGlvbnMpKTtcblx0XHRcdH1cblxuXHRcdFx0c3R5bGVzSW5Eb21baXRlbS5pZF0gPSB7aWQ6IGl0ZW0uaWQsIHJlZnM6IDEsIHBhcnRzOiBwYXJ0c307XG5cdFx0fVxuXHR9XG59XG5cbmZ1bmN0aW9uIGxpc3RUb1N0eWxlcyAobGlzdCwgb3B0aW9ucykge1xuXHR2YXIgc3R5bGVzID0gW107XG5cdHZhciBuZXdTdHlsZXMgPSB7fTtcblxuXHRmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgaXRlbSA9IGxpc3RbaV07XG5cdFx0dmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG5cdFx0dmFyIGNzcyA9IGl0ZW1bMV07XG5cdFx0dmFyIG1lZGlhID0gaXRlbVsyXTtcblx0XHR2YXIgc291cmNlTWFwID0gaXRlbVszXTtcblx0XHR2YXIgcGFydCA9IHtjc3M6IGNzcywgbWVkaWE6IG1lZGlhLCBzb3VyY2VNYXA6IHNvdXJjZU1hcH07XG5cblx0XHRpZighbmV3U3R5bGVzW2lkXSkgc3R5bGVzLnB1c2gobmV3U3R5bGVzW2lkXSA9IHtpZDogaWQsIHBhcnRzOiBbcGFydF19KTtcblx0XHRlbHNlIG5ld1N0eWxlc1tpZF0ucGFydHMucHVzaChwYXJ0KTtcblx0fVxuXG5cdHJldHVybiBzdHlsZXM7XG59XG5cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudCAob3B0aW9ucywgc3R5bGUpIHtcblx0dmFyIHRhcmdldCA9IGdldEVsZW1lbnQob3B0aW9ucy5pbnNlcnRJbnRvKVxuXG5cdGlmICghdGFyZ2V0KSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnRJbnRvJyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG5cdH1cblxuXHR2YXIgbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AgPSBzdHlsZXNJbnNlcnRlZEF0VG9wW3N0eWxlc0luc2VydGVkQXRUb3AubGVuZ3RoIC0gMV07XG5cblx0aWYgKG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwidG9wXCIpIHtcblx0XHRpZiAoIWxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wKSB7XG5cdFx0XHR0YXJnZXQuaW5zZXJ0QmVmb3JlKHN0eWxlLCB0YXJnZXQuZmlyc3RDaGlsZCk7XG5cdFx0fSBlbHNlIGlmIChsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcC5uZXh0U2libGluZykge1xuXHRcdFx0dGFyZ2V0Lmluc2VydEJlZm9yZShzdHlsZSwgbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AubmV4dFNpYmxpbmcpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuXHRcdH1cblx0XHRzdHlsZXNJbnNlcnRlZEF0VG9wLnB1c2goc3R5bGUpO1xuXHR9IGVsc2UgaWYgKG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwiYm90dG9tXCIpIHtcblx0XHR0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuXHR9IGVsc2Uge1xuXHRcdHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgdmFsdWUgZm9yIHBhcmFtZXRlciAnaW5zZXJ0QXQnLiBNdXN0IGJlICd0b3AnIG9yICdib3R0b20nLlwiKTtcblx0fVxufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQgKHN0eWxlKSB7XG5cdGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSByZXR1cm4gZmFsc2U7XG5cdHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xuXG5cdHZhciBpZHggPSBzdHlsZXNJbnNlcnRlZEF0VG9wLmluZGV4T2Yoc3R5bGUpO1xuXHRpZihpZHggPj0gMCkge1xuXHRcdHN0eWxlc0luc2VydGVkQXRUb3Auc3BsaWNlKGlkeCwgMSk7XG5cdH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlU3R5bGVFbGVtZW50IChvcHRpb25zKSB7XG5cdHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcblxuXHRvcHRpb25zLmF0dHJzLnR5cGUgPSBcInRleHQvY3NzXCI7XG5cblx0YWRkQXR0cnMoc3R5bGUsIG9wdGlvbnMuYXR0cnMpO1xuXHRpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucywgc3R5bGUpO1xuXG5cdHJldHVybiBzdHlsZTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTGlua0VsZW1lbnQgKG9wdGlvbnMpIHtcblx0dmFyIGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlua1wiKTtcblxuXHRvcHRpb25zLmF0dHJzLnR5cGUgPSBcInRleHQvY3NzXCI7XG5cdG9wdGlvbnMuYXR0cnMucmVsID0gXCJzdHlsZXNoZWV0XCI7XG5cblx0YWRkQXR0cnMobGluaywgb3B0aW9ucy5hdHRycyk7XG5cdGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zLCBsaW5rKTtcblxuXHRyZXR1cm4gbGluaztcbn1cblxuZnVuY3Rpb24gYWRkQXR0cnMgKGVsLCBhdHRycykge1xuXHRPYmplY3Qua2V5cyhhdHRycykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG5cdFx0ZWwuc2V0QXR0cmlidXRlKGtleSwgYXR0cnNba2V5XSk7XG5cdH0pO1xufVxuXG5mdW5jdGlvbiBhZGRTdHlsZSAob2JqLCBvcHRpb25zKSB7XG5cdHZhciBzdHlsZSwgdXBkYXRlLCByZW1vdmUsIHJlc3VsdDtcblxuXHQvLyBJZiBhIHRyYW5zZm9ybSBmdW5jdGlvbiB3YXMgZGVmaW5lZCwgcnVuIGl0IG9uIHRoZSBjc3Ncblx0aWYgKG9wdGlvbnMudHJhbnNmb3JtICYmIG9iai5jc3MpIHtcblx0ICAgIHJlc3VsdCA9IG9wdGlvbnMudHJhbnNmb3JtKG9iai5jc3MpO1xuXG5cdCAgICBpZiAocmVzdWx0KSB7XG5cdCAgICBcdC8vIElmIHRyYW5zZm9ybSByZXR1cm5zIGEgdmFsdWUsIHVzZSB0aGF0IGluc3RlYWQgb2YgdGhlIG9yaWdpbmFsIGNzcy5cblx0ICAgIFx0Ly8gVGhpcyBhbGxvd3MgcnVubmluZyBydW50aW1lIHRyYW5zZm9ybWF0aW9ucyBvbiB0aGUgY3NzLlxuXHQgICAgXHRvYmouY3NzID0gcmVzdWx0O1xuXHQgICAgfSBlbHNlIHtcblx0ICAgIFx0Ly8gSWYgdGhlIHRyYW5zZm9ybSBmdW5jdGlvbiByZXR1cm5zIGEgZmFsc3kgdmFsdWUsIGRvbid0IGFkZCB0aGlzIGNzcy5cblx0ICAgIFx0Ly8gVGhpcyBhbGxvd3MgY29uZGl0aW9uYWwgbG9hZGluZyBvZiBjc3Ncblx0ICAgIFx0cmV0dXJuIGZ1bmN0aW9uKCkge1xuXHQgICAgXHRcdC8vIG5vb3Bcblx0ICAgIFx0fTtcblx0ICAgIH1cblx0fVxuXG5cdGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xuXHRcdHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xuXG5cdFx0c3R5bGUgPSBzaW5nbGV0b24gfHwgKHNpbmdsZXRvbiA9IGNyZWF0ZVN0eWxlRWxlbWVudChvcHRpb25zKSk7XG5cblx0XHR1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIGZhbHNlKTtcblx0XHRyZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIHRydWUpO1xuXG5cdH0gZWxzZSBpZiAoXG5cdFx0b2JqLnNvdXJjZU1hcCAmJlxuXHRcdHR5cGVvZiBVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBVUkwuY3JlYXRlT2JqZWN0VVJMID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgVVJMLnJldm9rZU9iamVjdFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIEJsb2IgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCJcblx0KSB7XG5cdFx0c3R5bGUgPSBjcmVhdGVMaW5rRWxlbWVudChvcHRpb25zKTtcblx0XHR1cGRhdGUgPSB1cGRhdGVMaW5rLmJpbmQobnVsbCwgc3R5bGUsIG9wdGlvbnMpO1xuXHRcdHJlbW92ZSA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG5cblx0XHRcdGlmKHN0eWxlLmhyZWYpIFVSTC5yZXZva2VPYmplY3RVUkwoc3R5bGUuaHJlZik7XG5cdFx0fTtcblx0fSBlbHNlIHtcblx0XHRzdHlsZSA9IGNyZWF0ZVN0eWxlRWxlbWVudChvcHRpb25zKTtcblx0XHR1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGUpO1xuXHRcdHJlbW92ZSA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG5cdFx0fTtcblx0fVxuXG5cdHVwZGF0ZShvYmopO1xuXG5cdHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZSAobmV3T2JqKSB7XG5cdFx0aWYgKG5ld09iaikge1xuXHRcdFx0aWYgKFxuXHRcdFx0XHRuZXdPYmouY3NzID09PSBvYmouY3NzICYmXG5cdFx0XHRcdG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmXG5cdFx0XHRcdG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXBcblx0XHRcdCkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdHVwZGF0ZShvYmogPSBuZXdPYmopO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZW1vdmUoKTtcblx0XHR9XG5cdH07XG59XG5cbnZhciByZXBsYWNlVGV4dCA9IChmdW5jdGlvbiAoKSB7XG5cdHZhciB0ZXh0U3RvcmUgPSBbXTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gKGluZGV4LCByZXBsYWNlbWVudCkge1xuXHRcdHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcblxuXHRcdHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuXHR9O1xufSkoKTtcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyAoc3R5bGUsIGluZGV4LCByZW1vdmUsIG9iaikge1xuXHR2YXIgY3NzID0gcmVtb3ZlID8gXCJcIiA6IG9iai5jc3M7XG5cblx0aWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcblx0XHRzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcblx0fSBlbHNlIHtcblx0XHR2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XG5cdFx0dmFyIGNoaWxkTm9kZXMgPSBzdHlsZS5jaGlsZE5vZGVzO1xuXG5cdFx0aWYgKGNoaWxkTm9kZXNbaW5kZXhdKSBzdHlsZS5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XG5cblx0XHRpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcblx0XHRcdHN0eWxlLmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHN0eWxlLmFwcGVuZENoaWxkKGNzc05vZGUpO1xuXHRcdH1cblx0fVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnIChzdHlsZSwgb2JqKSB7XG5cdHZhciBjc3MgPSBvYmouY3NzO1xuXHR2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG5cblx0aWYobWVkaWEpIHtcblx0XHRzdHlsZS5zZXRBdHRyaWJ1dGUoXCJtZWRpYVwiLCBtZWRpYSlcblx0fVxuXG5cdGlmKHN0eWxlLnN0eWxlU2hlZXQpIHtcblx0XHRzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG5cdH0gZWxzZSB7XG5cdFx0d2hpbGUoc3R5bGUuZmlyc3RDaGlsZCkge1xuXHRcdFx0c3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG5cdFx0fVxuXG5cdFx0c3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG5cdH1cbn1cblxuZnVuY3Rpb24gdXBkYXRlTGluayAobGluaywgb3B0aW9ucywgb2JqKSB7XG5cdHZhciBjc3MgPSBvYmouY3NzO1xuXHR2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuXHQvKlxuXHRcdElmIGNvbnZlcnRUb0Fic29sdXRlVXJscyBpc24ndCBkZWZpbmVkLCBidXQgc291cmNlbWFwcyBhcmUgZW5hYmxlZFxuXHRcdGFuZCB0aGVyZSBpcyBubyBwdWJsaWNQYXRoIGRlZmluZWQgdGhlbiBsZXRzIHR1cm4gY29udmVydFRvQWJzb2x1dGVVcmxzXG5cdFx0b24gYnkgZGVmYXVsdC4gIE90aGVyd2lzZSBkZWZhdWx0IHRvIHRoZSBjb252ZXJ0VG9BYnNvbHV0ZVVybHMgb3B0aW9uXG5cdFx0ZGlyZWN0bHlcblx0Ki9cblx0dmFyIGF1dG9GaXhVcmxzID0gb3B0aW9ucy5jb252ZXJ0VG9BYnNvbHV0ZVVybHMgPT09IHVuZGVmaW5lZCAmJiBzb3VyY2VNYXA7XG5cblx0aWYgKG9wdGlvbnMuY29udmVydFRvQWJzb2x1dGVVcmxzIHx8IGF1dG9GaXhVcmxzKSB7XG5cdFx0Y3NzID0gZml4VXJscyhjc3MpO1xuXHR9XG5cblx0aWYgKHNvdXJjZU1hcCkge1xuXHRcdC8vIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzI2NjAzODc1XG5cdFx0Y3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIiArIGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSkgKyBcIiAqL1wiO1xuXHR9XG5cblx0dmFyIGJsb2IgPSBuZXcgQmxvYihbY3NzXSwgeyB0eXBlOiBcInRleHQvY3NzXCIgfSk7XG5cblx0dmFyIG9sZFNyYyA9IGxpbmsuaHJlZjtcblxuXHRsaW5rLmhyZWYgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpO1xuXG5cdGlmKG9sZFNyYykgVVJMLnJldm9rZU9iamVjdFVSTChvbGRTcmMpO1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcbi8vIG1vZHVsZSBpZCA9IDEyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlxuLyoqXG4gKiBXaGVuIHNvdXJjZSBtYXBzIGFyZSBlbmFibGVkLCBgc3R5bGUtbG9hZGVyYCB1c2VzIGEgbGluayBlbGVtZW50IHdpdGggYSBkYXRhLXVyaSB0b1xuICogZW1iZWQgdGhlIGNzcyBvbiB0aGUgcGFnZS4gVGhpcyBicmVha3MgYWxsIHJlbGF0aXZlIHVybHMgYmVjYXVzZSBub3cgdGhleSBhcmUgcmVsYXRpdmUgdG8gYVxuICogYnVuZGxlIGluc3RlYWQgb2YgdGhlIGN1cnJlbnQgcGFnZS5cbiAqXG4gKiBPbmUgc29sdXRpb24gaXMgdG8gb25seSB1c2UgZnVsbCB1cmxzLCBidXQgdGhhdCBtYXkgYmUgaW1wb3NzaWJsZS5cbiAqXG4gKiBJbnN0ZWFkLCB0aGlzIGZ1bmN0aW9uIFwiZml4ZXNcIiB0aGUgcmVsYXRpdmUgdXJscyB0byBiZSBhYnNvbHV0ZSBhY2NvcmRpbmcgdG8gdGhlIGN1cnJlbnQgcGFnZSBsb2NhdGlvbi5cbiAqXG4gKiBBIHJ1ZGltZW50YXJ5IHRlc3Qgc3VpdGUgaXMgbG9jYXRlZCBhdCBgdGVzdC9maXhVcmxzLmpzYCBhbmQgY2FuIGJlIHJ1biB2aWEgdGhlIGBucG0gdGVzdGAgY29tbWFuZC5cbiAqXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzKSB7XG4gIC8vIGdldCBjdXJyZW50IGxvY2F0aW9uXG4gIHZhciBsb2NhdGlvbiA9IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgJiYgd2luZG93LmxvY2F0aW9uO1xuXG4gIGlmICghbG9jYXRpb24pIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJmaXhVcmxzIHJlcXVpcmVzIHdpbmRvdy5sb2NhdGlvblwiKTtcbiAgfVxuXG5cdC8vIGJsYW5rIG9yIG51bGw/XG5cdGlmICghY3NzIHx8IHR5cGVvZiBjc3MgIT09IFwic3RyaW5nXCIpIHtcblx0ICByZXR1cm4gY3NzO1xuICB9XG5cbiAgdmFyIGJhc2VVcmwgPSBsb2NhdGlvbi5wcm90b2NvbCArIFwiLy9cIiArIGxvY2F0aW9uLmhvc3Q7XG4gIHZhciBjdXJyZW50RGlyID0gYmFzZVVybCArIGxvY2F0aW9uLnBhdGhuYW1lLnJlcGxhY2UoL1xcL1teXFwvXSokLywgXCIvXCIpO1xuXG5cdC8vIGNvbnZlcnQgZWFjaCB1cmwoLi4uKVxuXHQvKlxuXHRUaGlzIHJlZ3VsYXIgZXhwcmVzc2lvbiBpcyBqdXN0IGEgd2F5IHRvIHJlY3Vyc2l2ZWx5IG1hdGNoIGJyYWNrZXRzIHdpdGhpblxuXHRhIHN0cmluZy5cblxuXHQgL3VybFxccypcXCggID0gTWF0Y2ggb24gdGhlIHdvcmQgXCJ1cmxcIiB3aXRoIGFueSB3aGl0ZXNwYWNlIGFmdGVyIGl0IGFuZCB0aGVuIGEgcGFyZW5zXG5cdCAgICggID0gU3RhcnQgYSBjYXB0dXJpbmcgZ3JvdXBcblx0ICAgICAoPzogID0gU3RhcnQgYSBub24tY2FwdHVyaW5nIGdyb3VwXG5cdCAgICAgICAgIFteKShdICA9IE1hdGNoIGFueXRoaW5nIHRoYXQgaXNuJ3QgYSBwYXJlbnRoZXNlc1xuXHQgICAgICAgICB8ICA9IE9SXG5cdCAgICAgICAgIFxcKCAgPSBNYXRjaCBhIHN0YXJ0IHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAoPzogID0gU3RhcnQgYW5vdGhlciBub24tY2FwdHVyaW5nIGdyb3Vwc1xuXHQgICAgICAgICAgICAgICAgIFteKShdKyAgPSBNYXRjaCBhbnl0aGluZyB0aGF0IGlzbid0IGEgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICAgICB8ICA9IE9SXG5cdCAgICAgICAgICAgICAgICAgXFwoICA9IE1hdGNoIGEgc3RhcnQgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICAgICAgICAgW14pKF0qICA9IE1hdGNoIGFueXRoaW5nIHRoYXQgaXNuJ3QgYSBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgICAgIFxcKSAgPSBNYXRjaCBhIGVuZCBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgKSAgPSBFbmQgR3JvdXBcbiAgICAgICAgICAgICAgKlxcKSA9IE1hdGNoIGFueXRoaW5nIGFuZCB0aGVuIGEgY2xvc2UgcGFyZW5zXG4gICAgICAgICAgKSAgPSBDbG9zZSBub24tY2FwdHVyaW5nIGdyb3VwXG4gICAgICAgICAgKiAgPSBNYXRjaCBhbnl0aGluZ1xuICAgICAgICkgID0gQ2xvc2UgY2FwdHVyaW5nIGdyb3VwXG5cdCBcXCkgID0gTWF0Y2ggYSBjbG9zZSBwYXJlbnNcblxuXHQgL2dpICA9IEdldCBhbGwgbWF0Y2hlcywgbm90IHRoZSBmaXJzdC4gIEJlIGNhc2UgaW5zZW5zaXRpdmUuXG5cdCAqL1xuXHR2YXIgZml4ZWRDc3MgPSBjc3MucmVwbGFjZSgvdXJsXFxzKlxcKCgoPzpbXikoXXxcXCgoPzpbXikoXSt8XFwoW14pKF0qXFwpKSpcXCkpKilcXCkvZ2ksIGZ1bmN0aW9uKGZ1bGxNYXRjaCwgb3JpZ1VybCkge1xuXHRcdC8vIHN0cmlwIHF1b3RlcyAoaWYgdGhleSBleGlzdClcblx0XHR2YXIgdW5xdW90ZWRPcmlnVXJsID0gb3JpZ1VybFxuXHRcdFx0LnRyaW0oKVxuXHRcdFx0LnJlcGxhY2UoL15cIiguKilcIiQvLCBmdW5jdGlvbihvLCAkMSl7IHJldHVybiAkMTsgfSlcblx0XHRcdC5yZXBsYWNlKC9eJyguKiknJC8sIGZ1bmN0aW9uKG8sICQxKXsgcmV0dXJuICQxOyB9KTtcblxuXHRcdC8vIGFscmVhZHkgYSBmdWxsIHVybD8gbm8gY2hhbmdlXG5cdFx0aWYgKC9eKCN8ZGF0YTp8aHR0cDpcXC9cXC98aHR0cHM6XFwvXFwvfGZpbGU6XFwvXFwvXFwvKS9pLnRlc3QodW5xdW90ZWRPcmlnVXJsKSkge1xuXHRcdCAgcmV0dXJuIGZ1bGxNYXRjaDtcblx0XHR9XG5cblx0XHQvLyBjb252ZXJ0IHRoZSB1cmwgdG8gYSBmdWxsIHVybFxuXHRcdHZhciBuZXdVcmw7XG5cblx0XHRpZiAodW5xdW90ZWRPcmlnVXJsLmluZGV4T2YoXCIvL1wiKSA9PT0gMCkge1xuXHRcdCAgXHQvL1RPRE86IHNob3VsZCB3ZSBhZGQgcHJvdG9jb2w/XG5cdFx0XHRuZXdVcmwgPSB1bnF1b3RlZE9yaWdVcmw7XG5cdFx0fSBlbHNlIGlmICh1bnF1b3RlZE9yaWdVcmwuaW5kZXhPZihcIi9cIikgPT09IDApIHtcblx0XHRcdC8vIHBhdGggc2hvdWxkIGJlIHJlbGF0aXZlIHRvIHRoZSBiYXNlIHVybFxuXHRcdFx0bmV3VXJsID0gYmFzZVVybCArIHVucXVvdGVkT3JpZ1VybDsgLy8gYWxyZWFkeSBzdGFydHMgd2l0aCAnLydcblx0XHR9IGVsc2Uge1xuXHRcdFx0Ly8gcGF0aCBzaG91bGQgYmUgcmVsYXRpdmUgdG8gY3VycmVudCBkaXJlY3Rvcnlcblx0XHRcdG5ld1VybCA9IGN1cnJlbnREaXIgKyB1bnF1b3RlZE9yaWdVcmwucmVwbGFjZSgvXlxcLlxcLy8sIFwiXCIpOyAvLyBTdHJpcCBsZWFkaW5nICcuLydcblx0XHR9XG5cblx0XHQvLyBzZW5kIGJhY2sgdGhlIGZpeGVkIHVybCguLi4pXG5cdFx0cmV0dXJuIFwidXJsKFwiICsgSlNPTi5zdHJpbmdpZnkobmV3VXJsKSArIFwiKVwiO1xuXHR9KTtcblxuXHQvLyBzZW5kIGJhY2sgdGhlIGZpeGVkIGNzc1xuXHRyZXR1cm4gZml4ZWRDc3M7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi91cmxzLmpzXG4vLyBtb2R1bGUgaWQgPSAxM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9