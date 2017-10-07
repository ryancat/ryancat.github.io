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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
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


var _gamux = __webpack_require__(2);

var _gamux2 = _interopRequireDefault(_gamux);

var _snakeReducer = __webpack_require__(3);

var _snakeReducer2 = _interopRequireDefault(_snakeReducer);

var _worldReducer = __webpack_require__(4);

var _worldReducer2 = _interopRequireDefault(_worldReducer);

var _worldLayer = __webpack_require__(12);

var _snakeLayer = __webpack_require__(13);

var _actions = __webpack_require__(0);

__webpack_require__(5);

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
    }

    document.addEventListener('touchstart', handleTouch);
    document.addEventListener('touchmove', handleTouch);
    document.addEventListener('touchend', handleTouch);
  },

  /**
   * The map for all reducers the store can break down
   */
  reducerMap: {
    snake: _snakeReducer2.default,
    world: _worldReducer2.default
  }
});

_gamux2.default.start();

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


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _actions = __webpack_require__(0);

var _theme = __webpack_require__(10);

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
          level: state.level + 1
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
            cutBodyIndex = action.cutBodyIndex;


        _body6.splice(cutBodyIndex);

        return Object.assign({}, state, {
          body: _body6,
          level: cutBodyIndex - 1
        });
      }

    default:
      return state;
  }
};

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _actions = __webpack_require__(0);

var _theme = __webpack_require__(10);

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
      return Object.assign({}, state, {
        width: action.width,
        height: action.height
      });

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
            newStarPosition = {};

        do {
          newStarPosition.row = Math.floor(Math.random() * state.rows);
          newStarPosition.column = Math.floor(Math.random() * state.columns);
        } while (isOverlap(newStarPosition, snakeBody));

        return Object.assign({}, state, {
          starPosition: newStarPosition,
          level: state.level + 1
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
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(6);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(8)(content, options);
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
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)(undefined);
// imports


// module
exports.push([module.i, "body,\nhtml {\n  width: 100%;\n  height: 100%;\n  margin: 0;\n  padding: 0;\n  overflow: hidden; }\n\n#root {\n  position: relative;\n  width: 100%;\n  height: 100%; }\n  #root canvas {\n    position: absolute;\n    width: 100%;\n    height: 100%; }\n", ""]);

// exports


/***/ }),
/* 7 */
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
/* 8 */
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

var	fixUrls = __webpack_require__(9);

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
/* 9 */
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


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var gameDefault = exports.gameDefault = {
  rows: 20,
  columns: 20,
  speed: 0.5
};

var direction = exports.direction = {
  UP: 'UP',
  DOWN: 'DOWN',
  LEFT: 'LEFT',
  RIGHT: 'RIGHT'
};

/***/ }),
/* 11 */,
/* 12 */
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
      level: level
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

    // Draw star
    context.fillStyle = '#ffae00';
    context.fillRect(star.x, star.y, star.width, star.height);
  }

  return renderState;
};

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.snakeLayerRender = exports.snakeLayerUpdater = undefined;

var _gamux = __webpack_require__(2);

var _gamux2 = _interopRequireDefault(_gamux);

var _theme = __webpack_require__(10);

var _actions = __webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Function detect hit world edge
 */
function hitStar(snakeHead, star) {
  return snakeHead.x < star.x + star.width && snakeHead.x + snakeHead.width > star.x && snakeHead.y < star.y + star.height && snakeHead.y + snakeHead.height > star.y;
}

function hitSelfByHead(snakeBody, headDirection) {
  // let head = snakeBody[0]
  // if (!head) {
  //   return false
  // }

  // return snakeBody.slice(3).some((bodyBlock) => {
  //   switch (headDirection) {
  //     case direction.UP:
  //       return hitOnTop(head, bodyBlock)

  //     case direction.DOWN: {
  //       return hitOnBottom(head, bodyBlock)
  //     }

  //     case direction.LEFT: {
  //       return hitOnLeft(head, bodyBlock)
  //     }

  //     case direction.RIGHT: {
  //       return hitOnRight(head, bodyBlock)
  //     }
  //   }
  // })

  return getHitBodyIndex(snakeBody, headDirection) >= 0;
}

function hitOnRight(focus, other) {
  return focus.x + focus.width > other.x && focus.x + focus.width < other.x + other.width && focus.y + focus.height > other.y && focus.y < other.y + other.height;
}

function hitOnLeft(focus, other) {
  return focus.x < other.x + other.width && focus.x > other.x && focus.y + focus.height > other.y && focus.y < other.y + other.height;
}

function hitOnBottom(focus, other) {
  return focus.y + focus.height > other.y && focus.y + focus.height < other.y + other.height && focus.x + focus.width > other.x && focus.x < other.x + other.width;
}

function hitOnTop(focus, other) {
  return focus.y < other.y + other.height && focus.y > other.y && focus.x + focus.width > other.x && focus.x < other.x + other.width;
}

function getHitBodyIndex(snakeBody, headDirection) {
  var head = snakeBody[0];

  if (!head) {
    return -1;
  }

  for (var i = 3; i < snakeBody.length; i++) {
    var bodyBlock = snakeBody[i];

    if (headDirection === _theme.direction.UP && hitOnTop(head, bodyBlock) || headDirection === _theme.direction.DOWN && hitOnBottom(head, bodyBlock) || headDirection === _theme.direction.LEFT && hitOnLeft(head, bodyBlock) || headDirection === _theme.direction.RIGHT && hitOnRight(head, bodyBlock)) {
      return i;
    }
  }

  return -1;
}

function cutSelfByHead(snakeBody, headDirection) {
  var hitBodyIndex = getHitBodyIndex(snakeBody, headDirection);

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
    fillFreeRect(context, canvasWidth + x, y, Math.min(-x, width), height);
  }

  if (x > canvasWidth - width) {
    fillFreeRect(context, Math.max(0, x - canvasWidth), y, width - Math.max(0, canvasWidth - x), height);
  }

  if (y < 0) {
    fillFreeRect(context, x, canvasHeight + y, width, Math.min(-y, height));
  }

  if (y > canvasHeight - height) {
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
      cutSelfByHead(body, renderState.direction);

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

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMDk2NDczMzYwNjkwZjI5ZGY2Y2EiLCJ3ZWJwYWNrOi8vLy4vZGVtby9zbmFrZS9hY3Rpb25zLmpzIiwid2VicGFjazovLy8uL2RlbW8vc25ha2UvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vZGlzdC9nYW11eC5qcyIsIndlYnBhY2s6Ly8vLi9kZW1vL3NuYWtlL3NuYWtlUmVkdWNlci5qcyIsIndlYnBhY2s6Ly8vLi9kZW1vL3NuYWtlL3dvcmxkUmVkdWNlci5qcyIsIndlYnBhY2s6Ly8vLi9kZW1vL3NuYWtlL2luZGV4LnNjc3M/MGM3MSIsIndlYnBhY2s6Ly8vLi9kZW1vL3NuYWtlL2luZGV4LnNjc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi91cmxzLmpzIiwid2VicGFjazovLy8uL2RlbW8vc25ha2UvdGhlbWUuanMiLCJ3ZWJwYWNrOi8vLy4vZGVtby9zbmFrZS93b3JsZExheWVyLmpzIiwid2VicGFjazovLy8uL2RlbW8vc25ha2Uvc25ha2VMYXllci5qcyJdLCJuYW1lcyI6WyJnYW1lUmVzaXplIiwic2V0U3RhclBvc2l0aW9uIiwic2V0U25ha2VCb2R5IiwibGVmdEtleURvd24iLCJyaWdodEtleURvd24iLCJ1cEtleURvd24iLCJkb3duS2V5RG93biIsImdhbWVPdmVyIiwibmV4dExldmVsIiwiY3V0U25ha2VCb2R5IiwiR0FNRV9SRVNJWkUiLCJTRVRfU1RBUl9QT1NJVElPTiIsIlNFVF9TTkFLRV9CT0RZIiwiTEVGVF9LRVlET1dOIiwiUklHSFRfS0VZRE9XTiIsIlVQX0tFWURPV04iLCJET1dOX0tFWURPV04iLCJHQU1FX09WRVIiLCJORVhUX0xFVkVMIiwiQ1VUX1NOQUtFX0JPRFkiLCJ3aWR0aCIsImhlaWdodCIsInR5cGUiLCJyb3ciLCJjb2x1bW4iLCJib2R5Iiwic25ha2VCb2R5IiwiY3V0Qm9keUluZGV4IiwiY29udGFpbmVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImNvbmZpZyIsImZwcyIsImxheWVycyIsIm5hbWUiLCJ1cGRhdGVyIiwicmVuZGVyIiwiaW5pdCIsImdhbWVTdGF0ZSIsImNvbnNvbGUiLCJsb2ciLCJkaXNwYXRjaCIsIm9mZnNldFdpZHRoIiwib2Zmc2V0SGVpZ2h0Iiwid29ybGRTdGF0ZSIsInNuYWtlU3RhdGUiLCJyb3dzIiwiY29sdW1ucyIsInN0YXJSb3ciLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJzdGFyQ29sdW1uIiwiaGVhZFJvdyIsImhlYWRDb2x1bW4iLCJpc0hvcml6b250YWwiLCJldmVyeSIsImJvZHlCbG9jayIsIndpbmRvdyIsIm9ubG9hZCIsIm9ucmVzaXplIiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2dCIsImtleUNvZGUiLCJ0b3VjaGVzIiwidG91Y2hzdGFydCIsIk9iamVjdCIsImFzc2lnbiIsIngiLCJ5IiwidG91Y2htb3ZlIiwiaGFuZGxlVG91Y2giLCJ0b3VjaCIsInBhZ2VYIiwicGFnZVkiLCJkeCIsImR5IiwiYWJzIiwicmVkdWNlck1hcCIsInNuYWtlIiwid29ybGQiLCJzdGFydCIsImluaXRTdGF0ZSIsImlzTW92ZSIsInNwZWVkIiwibGV2ZWwiLCJzdGF0ZSIsImFjdGlvbiIsInNsaWNlIiwicmV2ZXJzZSIsInJlZHVjZSIsImZpcnN0Iiwic2Vjb25kIiwiZGlyZWN0aW9uIiwiVVAiLCJET1dOIiwiTEVGVCIsIlJJR0hUIiwiaGVhZCIsImhlYWREaXJlY3Rpb24iLCJ1bnNoaWZ0Iiwic3BsaWNlIiwic3RhclBvc2l0aW9uIiwiaXNHYW1lb3ZlciIsImlzT3ZlcmxhcCIsIm5ld1N0YXJQb3NpdGlvbiIsImdhbWVEZWZhdWx0IiwiaW5pdEZpbmFsUmVuZGVyU3RhdGUiLCJ3b3JsZExheWVyVXBkYXRlciIsImZpbmFsUmVuZGVyU3RhdGUiLCJkaXJ0eUtleXMiLCJpbmRleE9mIiwiY2VsbFdpZHRoIiwiY2VsbEhlaWdodCIsInhzIiwiQXJyYXkiLCJmaWxsIiwibWFwIiwieEluZGV4IiwieTAiLCJ5MSIsInlzIiwieUluZGV4IiwieDAiLCJ4MSIsInN0YXIiLCJ3b3JsZExheWVyUmVuZGVyIiwiY2FudmFzIiwicmVuZGVyU3RhdGUiLCJkdCIsImNvbnRleHQiLCJnZXRDb250ZXh0IiwiY2xlYXJSZWN0Iiwic3Ryb2tlU3R5bGUiLCJsaW5lV2lkdGgiLCJiZWdpblBhdGgiLCJmb3JFYWNoIiwidmVydGljYWxMaW5lIiwibW92ZVRvIiwibGluZVRvIiwic3Ryb2tlIiwiaG9yaXpvbnRhbExpbmUiLCJmaWxsU3R5bGUiLCJmb250IiwibWluIiwidGV4dEFsaWduIiwidGV4dEJhc2VsaW5lIiwiZmlsbFRleHQiLCJmaWxsUmVjdCIsImhpdFN0YXIiLCJzbmFrZUhlYWQiLCJoaXRTZWxmQnlIZWFkIiwiZ2V0SGl0Qm9keUluZGV4IiwiaGl0T25SaWdodCIsImZvY3VzIiwib3RoZXIiLCJoaXRPbkxlZnQiLCJoaXRPbkJvdHRvbSIsImhpdE9uVG9wIiwiaSIsImxlbmd0aCIsImN1dFNlbGZCeUhlYWQiLCJoaXRCb2R5SW5kZXgiLCJmaWxsRnJlZVJlY3QiLCJjYW52YXNXaWR0aCIsImNhbnZhc0hlaWdodCIsIm1heCIsInNuYWtlTGF5ZXJVcGRhdGVyIiwiaW5kZXgiLCJzbmFrZUxheWVyUmVuZGVyIiwiZGlydHkiLCJib2R5RlJTIiwic3RhckZSUyIsImJvZHlGUlNCbG9jayIsImRpcmVjdGlvblVuaXQiLCJkaXN0YW5jZSIsImhlYWRYIiwiaGVhZFkiLCJoZWFkUG9zaXRpb24iXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVB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QixRQUFRO0FBQ1ZqRixXQUFHNEcsS0FETztBQUVWM0csV0FBRzRHLEtBRk87QUFHVjdKLGVBQU84RSxLQUFLOUUsS0FIRjtBQUlWQyxnQkFBUTZFLEtBQUs3RTtBQUpILE9BQVIsRUFLRHVKLE9BTEMsQ0FBSixFQUthO0FBQ1gsd0JBQU1uSSxRQUFOLENBQWUsd0JBQVVrSSxPQUFWLENBQWY7QUFDRDtBQUNGLEtBcENELE1BcUNLO0FBQ0g7QUFDQTtBQUNBLGNBQU8zQyxZQUFZbkMsU0FBbkI7QUFDRSxhQUFLLGlCQUFVQyxFQUFmO0FBQ0UsMEJBQU1yRCxRQUFOLENBQWUseUJBQWY7QUFDQTs7QUFFRixhQUFLLGlCQUFVc0QsSUFBZjtBQUNFLDBCQUFNdEQsUUFBTixDQUFlLDJCQUFmO0FBQ0E7O0FBRUYsYUFBSyxpQkFBVXVELElBQWY7QUFDRSwwQkFBTXZELFFBQU4sQ0FBZSwyQkFBZjtBQUNBOztBQUVGLGFBQUssaUJBQVV3RCxLQUFmO0FBQ0UsMEJBQU14RCxRQUFOLENBQWUsNEJBQWY7QUFDQTtBQWZKO0FBaUJEO0FBQ0Y7O0FBRUQsU0FBT3VGLFdBQVA7QUFDRCxDQWhKTSxDIiwiZmlsZSI6InNuYWtlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL1wiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDEpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDA5NjQ3MzM2MDY5MGYyOWRmNmNhIiwiLy8gQWN0aW9uIHR5cGVzXG5leHBvcnQgY29uc3QgR0FNRV9SRVNJWkUgPSAnR0FNRV9SRVNJWkUnIFxuZXhwb3J0IGNvbnN0IFNFVF9TVEFSX1BPU0lUSU9OID0gJ1NFVF9TVEFSX1BPU0lUSU9OJyBcbmV4cG9ydCBjb25zdCBTRVRfU05BS0VfQk9EWSA9ICdTRVRfU05BS0VfQk9EWScgXG5leHBvcnQgY29uc3QgTEVGVF9LRVlET1dOID0gJ0xFRlRfS0VZRE9XTidcbmV4cG9ydCBjb25zdCBSSUdIVF9LRVlET1dOID0gJ1JJR0hUX0tFWURPV04nXG5leHBvcnQgY29uc3QgVVBfS0VZRE9XTiA9ICdVUF9LRVlET1dOJ1xuZXhwb3J0IGNvbnN0IERPV05fS0VZRE9XTiA9ICdET1dOX0tFWURPV04nXG5leHBvcnQgY29uc3QgR0FNRV9PVkVSID0gJ0dBTUVfT1ZFUidcbmV4cG9ydCBjb25zdCBORVhUX0xFVkVMID0gJ05FWFRfTEVWRUwnXG5leHBvcnQgY29uc3QgQ1VUX1NOQUtFX0JPRFkgPSAnQ1VUX1NOQUtFX0JPRFknXG5cbi8vIEFjdGlvbiBjcmVhdG9yc1xuZXhwb3J0IGZ1bmN0aW9uIGdhbWVSZXNpemUgKHdpZHRoLCBoZWlnaHQpIHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBHQU1FX1JFU0laRSxcbiAgICB3aWR0aCxcbiAgICBoZWlnaHRcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gc2V0U3RhclBvc2l0aW9uIChyb3csIGNvbHVtbikge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IFNFVF9TVEFSX1BPU0lUSU9OLFxuICAgIHJvdyxcbiAgICBjb2x1bW5cbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gc2V0U25ha2VCb2R5IChib2R5KSB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogU0VUX1NOQUtFX0JPRFksXG4gICAgYm9keVxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsZWZ0S2V5RG93biAoKSB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogTEVGVF9LRVlET1dOXG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJpZ2h0S2V5RG93biAoKSB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogUklHSFRfS0VZRE9XTlxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1cEtleURvd24gKCkge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IFVQX0tFWURPV05cbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZG93bktleURvd24gKCkge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IERPV05fS0VZRE9XTlxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnYW1lT3ZlciAoKSB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogR0FNRV9PVkVSXG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG5leHRMZXZlbCAoc25ha2VCb2R5KSB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogTkVYVF9MRVZFTCxcbiAgICBzbmFrZUJvZHlcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gY3V0U25ha2VCb2R5IChjdXRCb2R5SW5kZXgpIHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBDVVRfU05BS0VfQk9EWSxcbiAgICBjdXRCb2R5SW5kZXhcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vZGVtby9zbmFrZS9hY3Rpb25zLmpzIiwiaW1wb3J0IGdhbXV4IGZyb20gJy4uLy4uL2Rpc3QvZ2FtdXgnXG5pbXBvcnQgc25ha2VSZWR1Y2VyIGZyb20gJy4vc25ha2VSZWR1Y2VyJ1xuaW1wb3J0IHdvcmxkUmVkdWNlciBmcm9tICcuL3dvcmxkUmVkdWNlcidcbmltcG9ydCB7d29ybGRMYXllclVwZGF0ZXIsIHdvcmxkTGF5ZXJSZW5kZXJ9IGZyb20gJy4vd29ybGRMYXllcidcbmltcG9ydCB7c25ha2VMYXllclVwZGF0ZXIsIHNuYWtlTGF5ZXJSZW5kZXJ9IGZyb20gJy4vc25ha2VMYXllcidcbmltcG9ydCB7IFxuICBnYW1lUmVzaXplLFxuICBzZXRTdGFyUG9zaXRpb24sXG4gIHNldFNuYWtlQm9keSxcbiAgbGVmdEtleURvd24sXG4gIHJpZ2h0S2V5RG93bixcbiAgdXBLZXlEb3duLFxuICBkb3duS2V5RG93blxufSBmcm9tICcuL2FjdGlvbnMnXG5cbmltcG9ydCAnLi9pbmRleC5zY3NzJ1xuXG5jb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm9vdCcpXG5cbmdhbXV4LmNvbmZpZyh7XG4gIGZwczogNjAsXG5cbiAgY29udGFpbmVyLFxuXG4gIGxheWVyczogW3tcbiAgICBuYW1lOiAnd29ybGRMYXllcicsXG4gICAgdXBkYXRlcjogd29ybGRMYXllclVwZGF0ZXIsXG4gICAgcmVuZGVyOiB3b3JsZExheWVyUmVuZGVyXG4gIH0sIHtcbiAgICBuYW1lOiAnc25ha2VMYXllcicsXG4gICAgdXBkYXRlcjogc25ha2VMYXllclVwZGF0ZXIsXG4gICAgcmVuZGVyOiBzbmFrZUxheWVyUmVuZGVyXG4gIH1dLFxuXG4gIC8qKlxuICAgKiBpbml0IGdhbWUuIEdldHRpbmcgY2FsbGVkIGJlZm9yZSBnYW1lIGxvb3Agc3RhcnRzXG4gICAqL1xuICBpbml0OiAoZ2FtZVN0YXRlKSA9PiB7XG4gICAgY29uc29sZS5sb2coJ2luaXQnKVxuICAgIC8vIE1ha2Ugc3VyZSBjb250YWluZXIgZGltZW5zaW9uIGlzIGluaXRcbiAgICBnYW11eC5kaXNwYXRjaChnYW1lUmVzaXplKFxuICAgICAgY29udGFpbmVyLm9mZnNldFdpZHRoLFxuICAgICAgY29udGFpbmVyLm9mZnNldEhlaWdodFxuICAgICkpXG5cbiAgICBsZXQgd29ybGRTdGF0ZSA9IGdhbWVTdGF0ZVsnd29ybGQnXSxcbiAgICAgICAgc25ha2VTdGF0ZSA9IGdhbWVTdGF0ZVsnc25ha2UnXVxuXG4gICAgLy8gSW5pdCB3b3JsZCBiYXNlZCBvbiBpbml0aWFsIHN0YXRlXG4gICAgbGV0IHtcbiAgICAgICAgICByb3dzLFxuICAgICAgICAgIGNvbHVtbnNcbiAgICAgICAgfSA9IHdvcmxkU3RhdGUsXG4gICAgICAgIHN0YXJSb3cgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiByb3dzKSxcbiAgICAgICAgc3RhckNvbHVtbiA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGNvbHVtbnMpXG5cbiAgICBnYW11eC5kaXNwYXRjaChzZXRTdGFyUG9zaXRpb24oc3RhclJvdywgc3RhckNvbHVtbikpXG5cbiAgICAvLyBJbml0IHNuYWtlIGJhc2VkIG9uIHdvcmxkXG4gICAgbGV0IGJvZHkgPSBbXVxuICAgIGRvIHtcbiAgICAgIGxldCBoZWFkUm93ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogcm93cyksXG4gICAgICAgICAgaGVhZENvbHVtbiA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGNvbHVtbnMpXG5cbiAgICAgIGJvZHlbMF0gPSB7XG4gICAgICAgIHJvdzogaGVhZFJvdyxcbiAgICAgICAgY29sdW1uOiBoZWFkQ29sdW1uXG4gICAgICB9XG5cbiAgICAgIGxldCBpc0hvcml6b250YWwgPSBNYXRoLnJhbmRvbSgpID4gMC41XG4gICAgICBib2R5WzFdID0ge1xuICAgICAgICByb3c6IGhlYWRSb3cgKyAoaXNIb3Jpem9udGFsID8gKE1hdGgucmFuZG9tKCkgPiAwLjUgPyAxIDogLTEpIDogMCksXG4gICAgICAgIGNvbHVtbjogaGVhZENvbHVtbiArIChpc0hvcml6b250YWwgPyAwIDogKE1hdGgucmFuZG9tKCkgPiAwLjUgPyAxIDogLTEpKSxcbiAgICAgIH1cblxuICAgIH0gd2hpbGUgKCFib2R5LmV2ZXJ5KChib2R5QmxvY2spID0+IHtcbiAgICAgIHJldHVybiBib2R5QmxvY2sucm93ICE9PSBzdGFyUm93IFxuICAgICAgJiYgYm9keUJsb2NrLmNvbHVtbiAhPT0gc3RhckNvbHVtbiBcbiAgICAgICYmIGJvZHlCbG9jay5yb3cgPj0gMCAmJiBib2R5QmxvY2sucm93IDwgcm93c1xuICAgICAgJiYgYm9keUJsb2NrLmNvbHVtbiA+PSAwICYmIGJvZHlCbG9jay5jb2x1bW4gPCBjb2x1bW5zXG4gICAgfSkpXG4gICAgZ2FtdXguZGlzcGF0Y2goc2V0U25ha2VCb2R5KGJvZHkpKVxuXG4gICAgLy8gU2V0dXAgbGlzdGVuZXJcbiAgICB3aW5kb3cub25sb2FkID0gd2luZG93Lm9ucmVzaXplID0gKCkgPT4ge1xuICAgICAgZ2FtdXguZGlzcGF0Y2goZ2FtZVJlc2l6ZShcbiAgICAgICAgY29udGFpbmVyLm9mZnNldFdpZHRoLFxuICAgICAgICBjb250YWluZXIub2Zmc2V0SGVpZ2h0XG4gICAgICApKVxuICAgIH1cblxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCAoZXZ0KSA9PiB7XG4gICAgICBzd2l0Y2ggKGV2dC5rZXlDb2RlKSB7XG4gICAgICAgIGNhc2UgMzc6IC8vIExlZnRcbiAgICAgICAgICBnYW11eC5kaXNwYXRjaChsZWZ0S2V5RG93bigpKVxuICAgICAgICAgIGJyZWFrXG4gICAgICAgIGNhc2UgMzg6IC8vIFVwXG4gICAgICAgICAgZ2FtdXguZGlzcGF0Y2godXBLZXlEb3duKCkpXG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgY2FzZSAzOTogLy8gUmlnaHRcbiAgICAgICAgICBnYW11eC5kaXNwYXRjaChyaWdodEtleURvd24oKSlcbiAgICAgICAgICBicmVha1xuICAgICAgICBjYXNlIDQwOiAvLyBEb3duXG4gICAgICAgICAgZ2FtdXguZGlzcGF0Y2goZG93bktleURvd24oKSlcbiAgICAgICAgICBicmVha1xuICAgICAgfVxuICAgIH0pXG5cbiAgICAvLyBGb3IgbW9iaWxlXG4gICAgbGV0IHRvdWNoZXMgPSB7XG4gICAgICB0b3VjaHN0YXJ0OiBPYmplY3QuYXNzaWduKHt9LCB7XG4gICAgICAgIHg6IC0xLFxuICAgICAgICB5OiAtMVxuICAgICAgfSksXG4gICAgICB0b3VjaG1vdmU6IE9iamVjdC5hc3NpZ24oe30sIHtcbiAgICAgICAgeDogLTEsXG4gICAgICAgIHk6IC0xXG4gICAgICB9KVxuICAgIH1cbiAgICBcbiAgICBmdW5jdGlvbiBoYW5kbGVUb3VjaCAoZXZ0KSB7XG4gICAgICBpZiAodHlwZW9mIGV2dC50b3VjaGVzID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICByZXR1cm4gXG4gICAgICB9XG5cbiAgICAgIGxldCB0b3VjaCA9IGV2dC50b3VjaGVzWzBdXG4gICAgICBzd2l0Y2ggKGV2dC50eXBlKSB7XG4gICAgICAgIGNhc2UgJ3RvdWNoc3RhcnQnOlxuICAgICAgICBjYXNlICd0b3VjaG1vdmUnOlxuICAgICAgICAgIHRvdWNoZXNbZXZ0LnR5cGVdLnggPSB0b3VjaC5wYWdlWFxuICAgICAgICAgIHRvdWNoZXNbZXZ0LnR5cGVdLnkgPSB0b3VjaC5wYWdlWVxuICAgICAgICAgIGJyZWFrXG5cbiAgICAgICAgY2FzZSAndG91Y2hlbmQnOiB7XG4gICAgICAgICAgaWYgKHRvdWNoZXMudG91Y2hzdGFydC54ID4gLTEgJiYgdG91Y2hlcy50b3VjaG1vdmUueCA+IC0xKSB7XG4gICAgICAgICAgICBsZXQgZHggPSB0b3VjaGVzLnRvdWNobW92ZS54IC0gdG91Y2hlcy50b3VjaHN0YXJ0LngsXG4gICAgICAgICAgICAgICAgZHkgPSB0b3VjaGVzLnRvdWNobW92ZS55IC0gdG91Y2hlcy50b3VjaHN0YXJ0LnlcblxuICAgICAgICAgICAgaWYgKE1hdGguYWJzKGR4KSA+IE1hdGguYWJzKGR5KSkge1xuICAgICAgICAgICAgICAvLyBIb3Jpem9udGFsIG1vdmVcbiAgICAgICAgICAgICAgaWYgKGR4ID4gMCkge1xuICAgICAgICAgICAgICAgIGdhbXV4LmRpc3BhdGNoKHJpZ2h0S2V5RG93bigpKVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGdhbXV4LmRpc3BhdGNoKGxlZnRLZXlEb3duKCkpXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAvLyBWZXJ0aWNhbCBtb3ZlXG4gICAgICAgICAgICAgIGlmIChkeSA+IDApIHtcbiAgICAgICAgICAgICAgICBnYW11eC5kaXNwYXRjaChkb3duS2V5RG93bigpKVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGdhbXV4LmRpc3BhdGNoKHVwS2V5RG93bigpKVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgaGFuZGxlVG91Y2gpXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJywgaGFuZGxlVG91Y2gpXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCBoYW5kbGVUb3VjaClcbiAgfSxcblxuICAvKipcbiAgICogVGhlIG1hcCBmb3IgYWxsIHJlZHVjZXJzIHRoZSBzdG9yZSBjYW4gYnJlYWsgZG93blxuICAgKi9cbiAgcmVkdWNlck1hcDoge1xuICAgIHNuYWtlOiBzbmFrZVJlZHVjZXIsXG4gICAgd29ybGQ6IHdvcmxkUmVkdWNlclxuICB9XG59KVxuXG5nYW11eC5zdGFydCgpXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9kZW1vL3NuYWtlL2luZGV4LmpzIiwiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiZ2FtdXhcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wiZ2FtdXhcIl0gPSBmYWN0b3J5KCk7XG59KSh0aGlzLCBmdW5jdGlvbigpIHtcbnJldHVybiAvKioqKioqLyAoZnVuY3Rpb24obW9kdWxlcykgeyAvLyB3ZWJwYWNrQm9vdHN0cmFwXG4vKioqKioqLyBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbi8qKioqKiovIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4vKioqKioqLyBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4vKioqKioqLyBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbi8qKioqKiovIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuLyoqKioqKi8gXHRcdH1cbi8qKioqKiovIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuLyoqKioqKi8gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbi8qKioqKiovIFx0XHRcdGk6IG1vZHVsZUlkLFxuLyoqKioqKi8gXHRcdFx0bDogZmFsc2UsXG4vKioqKioqLyBcdFx0XHRleHBvcnRzOiB7fVxuLyoqKioqKi8gXHRcdH07XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuLyoqKioqKi8gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4vKioqKioqLyBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuLyoqKioqKi8gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbi8qKioqKiovIFx0fVxuLyoqKioqKi9cbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuLyoqKioqKi8gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbi8qKioqKiovIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4vKioqKioqLyBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4vKioqKioqLyBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4vKioqKioqLyBcdFx0XHRcdGdldDogZ2V0dGVyXG4vKioqKioqLyBcdFx0XHR9KTtcbi8qKioqKiovIFx0XHR9XG4vKioqKioqLyBcdH07XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbi8qKioqKiovIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbi8qKioqKiovIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4vKioqKioqLyBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuLyoqKioqKi8gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbi8qKioqKiovIFx0XHRyZXR1cm4gZ2V0dGVyO1xuLyoqKioqKi8gXHR9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL1wiO1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vKioqKioqLyBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuLyoqKioqKi8gfSlcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKioqKioqLyAoW1xuLyogMCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5tb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19yZXF1aXJlX18oMSk7XG5cblxuLyoqKi8gfSksXG4vKiAxICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfc3RhdGVNYW5hZ2VyID0gX193ZWJwYWNrX3JlcXVpcmVfXygyKTtcblxuLyoqXG4gKiBUaGUgYW5pbWF0aW9uIGxvb3Aga2V5IGZvciBjYW5jZWwgYW5pbWF0aW9uXG4gKi9cbnZhciBfYW5pbWF0aW9uTG9vcEtleSA9IG51bGw7XG4vKipcbiAqIEFjY3VtdWxhdG9yIGZvciB0aW1lLWJhc2VkIGFuaW1hdGlvblxuICovXG52YXIgX2FjY3VtdWxhdG9yID0gMDtcbi8qKlxuICogVGhlIGRlZmF1bHQgZnBzXG4gKi9cbnZhciBfZnBzID0gNjA7XG4vKipcbiAqIFRoZSBzdG9yZSBmb3IgZ2FtZVxuICovXG52YXIgX3N0b3JlID0ge307XG5cbnZhciBfdXBkYXRlck1hcCA9IHt9O1xuXG52YXIgX3JlbmRlcmVyTWFwID0ge307XG5cbi8qKlxuICogVHJpZ2dlciBnYW1lIGxvb3BcbiAqL1xuZnVuY3Rpb24gX2xvb3AobGFzdFRpbWVzdGFtcCkge1xuICBfYW5pbWF0aW9uTG9vcEtleSA9IHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZnVuY3Rpb24gKCkge1xuICAgIHZhciBub3cgPSBEYXRlLm5vdygpO1xuICAgIHZhciBkdCA9IDEwMDAgLyBfZnBzO1xuICAgIF9hY2N1bXVsYXRvciArPSBub3cgLSBsYXN0VGltZXN0YW1wO1xuXG4gICAgaWYgKF9hY2N1bXVsYXRvciA+PSBkdCkge1xuICAgICAgd2hpbGUgKF9hY2N1bXVsYXRvciA+PSBkdCkge1xuICAgICAgICBfYWNjdW11bGF0b3IgLT0gZHQ7XG4gICAgICB9XG4gICAgICBmb3IgKHZhciBrZXkgaW4gX3JlbmRlcmVyTWFwKSB7XG4gICAgICAgIHZhciByZW5kZXJlciA9IF9yZW5kZXJlck1hcFtrZXldO1xuICAgICAgICByZW5kZXJlci5yZW5kZXJTdGF0ZSA9IHJlbmRlcmVyKHJlbmRlcmVyLnJlbmRlclN0YXRlLCByZW5kZXJlci5maW5hbFJlbmRlclN0YXRlLCBkdCk7XG4gICAgICB9XG4gICAgfVxuICAgIF9sb29wKG5vdyk7XG4gIH0pO1xufVxuXG52YXIgZ2FtdXggPSB7XG4gIGNvbmZpZzogZnVuY3Rpb24gY29uZmlnKCkge1xuICAgIHZhciBfY29uZmlnID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiB7fTtcblxuICAgIC8vIENvbmZpZyB0aGUgcHJpdmF0ZSBnbG9iYWxzXG4gICAgX2ZwcyA9IF9jb25maWcuZnBzIHx8IF9mcHM7XG5cbiAgICB2YXIgY29udGFpbmVyID0gX2NvbmZpZy5jb250YWluZXI7XG5cbiAgICAvLyBDcmVhdGUgZ2FtZSBsYXllcnNcbiAgICBfY29uZmlnLmxheWVycy5mb3JFYWNoKGZ1bmN0aW9uIChsYXllcikge1xuICAgICAgdmFyIGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGNhbnZhcyk7XG5cbiAgICAgIF91cGRhdGVyTWFwW2xheWVyLm5hbWVdID0gbGF5ZXIudXBkYXRlcjtcbiAgICAgIF9yZW5kZXJlck1hcFtsYXllci5uYW1lXSA9IGxheWVyLnJlbmRlci5iaW5kKG51bGwsIGNhbnZhcyk7XG4gICAgfSk7XG5cbiAgICAvLyBDcmVhdGUgZ2FtZSBzdG9yZVxuICAgIF9zdG9yZSA9ICgwLCBfc3RhdGVNYW5hZ2VyLmNyZWF0ZVN0b3JlKSgoMCwgX3N0YXRlTWFuYWdlci5jb21iaW5lUmVkdWNlcikoX2NvbmZpZy5yZWR1Y2VyTWFwLCAoMCwgX3N0YXRlTWFuYWdlci5jb21iaW5lVXBkYXRlcikoX3VwZGF0ZXJNYXAsIF9yZW5kZXJlck1hcCkpKTtcbiAgICBpZiAoX2NvbmZpZy5pbml0KSB7XG4gICAgICBfY29uZmlnLmluaXQoX3N0b3JlLmdldFN0YXRlKCkpO1xuICAgIH1cbiAgfSxcblxuICBsYXllcnM6IHt9LFxuXG4gIHN0YXJ0OiBmdW5jdGlvbiBzdGFydCgpIHtcbiAgICBfbG9vcChEYXRlLm5vdygpKTtcbiAgfSxcblxuICBkaXNwYXRjaDogZnVuY3Rpb24gZGlzcGF0Y2goYWN0aW9uKSB7XG4gICAgX3N0b3JlLmRpc3BhdGNoKGFjdGlvbik7XG4gIH1cblxuICAvLyAqXG4gIC8vICAqIEdhbWUgd2lsbCBiZSBhdmFpbGFibGUgb25jZSBjb25maWd1cmVkXG59O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBnYW11eDtcblxuLy8gVE9ET1xuLy8gMS4gQnVpbGQgZmlsZSBmb3IgRVM2IG1vZHVsZXNcblxuLyoqKi8gfSksXG4vKiAyICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmNyZWF0ZVN0b3JlID0gY3JlYXRlU3RvcmU7XG5leHBvcnRzLmNvbWJpbmVSZWR1Y2VyID0gY29tYmluZVJlZHVjZXI7XG5leHBvcnRzLmNvbWJpbmVVcGRhdGVyID0gY29tYmluZVVwZGF0ZXI7XG5mdW5jdGlvbiBjcmVhdGVTdG9yZShyZWR1Y2VyKSB7XG4gIC8vIEluaXQgc3RhdGVcbiAgdmFyIHN0YXRlID0gcmVkdWNlcigpO1xuXG4gIHJldHVybiB7XG4gICAgLyoqXG4gICAgICogRGlzcGF0Y2ggYWN0aW9uIHRvIHRyaWdnZXIgc3RhdGUgY2hhbmdlc1xuICAgICAqL1xuICAgIGRpc3BhdGNoOiBmdW5jdGlvbiBkaXNwYXRjaCgpIHtcbiAgICAgIHZhciBhY3Rpb24gPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IHt9O1xuXG4gICAgICBpZiAodHJ1ZSkge1xuICAgICAgICAvLyBsb2cgYWN0aW9ucyBpbiBjb25zb2xlXG4gICAgICAgIGNvbnNvbGUuZ3JvdXAoYWN0aW9uLnR5cGUpO1xuICAgICAgICBjb25zb2xlLmluZm8oJyVjYmVmb3JlOicsICdjb2xvcjogZ3JlZW4nLCBzdGF0ZSk7XG4gICAgICAgIGNvbnNvbGUuaW5mbygnJWNhY3Rpb246JywgJ2NvbG9yOiByZWQnLCBhY3Rpb24pO1xuICAgICAgfVxuXG4gICAgICAvLyBVcGRhdGUgc3RhdGVcbiAgICAgIHN0YXRlID0gcmVkdWNlcihzdGF0ZSwgYWN0aW9uKTtcbiAgICAgIC8vIFN0YXRlIG1hbmFnZXIgZG9lc24ndCBjYXJlIGFib3V0IG5vdGljaW5nXG4gICAgICAvLyBnYW1lIHRvIHVwZGF0ZSBzdGF0ZS4gSW5zdGVhZCByZWR1Y2Vyc1xuICAgICAgLy8gc2hvdWxkIHNldCBkaXJ0eSBzdGF0ZSBmb3IgZ2FtZSBsb29wIHRvXG4gICAgICAvLyB0cmlnZ2VyIHVwZGF0ZVxuXG4gICAgICBpZiAodHJ1ZSkge1xuICAgICAgICAvLyBsb2cgYWN0aW9ucyBpbiBjb25zb2xlXG4gICAgICAgIGNvbnNvbGUuaW5mbygnJWNhZnRlcjonLCAnY29sb3I6IGdyZWVuJywgc3RhdGUpO1xuICAgICAgICBjb25zb2xlLmdyb3VwRW5kKCk7XG4gICAgICB9XG4gICAgfSxcbiAgICAvKipcbiAgICAgKiBSZXR1cm4gdGhlIGN1cnJlbnQgc3RhdGUgZm9yIGdpdmVuIGtleVxuICAgICAqIFRoaXMgaXMgdG8gYWxsb3cgYXBwbGljYXRpb24gdG8gJ2Nvbm5lY3QnIHRvIHN0YXRlXG4gICAgICovXG4gICAgZ2V0U3RhdGU6IGZ1bmN0aW9uIGdldFN0YXRlKHN0YXRlS2V5KSB7XG4gICAgICBpZiAoIXN0YXRlS2V5KSB7XG4gICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBzdGF0ZVtzdGF0ZUtleV07XG4gICAgICB9XG4gICAgfVxuICB9O1xufVxuXG4vLyBBc3N1bWUgdGhlIHJlY3Vlck1hcCBpcyBhIGZsYXQgbWFwIHRvIGFsbCByZWR1Y2Vyc1xuZnVuY3Rpb24gY29tYmluZVJlZHVjZXIoKSB7XG4gIHZhciByZWR1Y2VyTWFwID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiB7fTtcbiAgdmFyIHVwZGF0ZXIgPSBhcmd1bWVudHNbMV07XG5cblxuICAvLyBHZW5lcmF0ZSBhIGNvbWJpbmVkIHJlZHVjZXIgZnVuY3Rpb25cbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgc3RhdGUgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IHt9O1xuICAgIHZhciBhY3Rpb24gPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHt9O1xuXG4gICAgdmFyIG5ld1N0YXRlID0ge30sXG4gICAgICAgIGRpcnR5S2V5cyA9IFtdO1xuXG4gICAgLy8gU3ByZWFkIHRoZSBhY3Rpb24gdG8gYWxsIHJlZHVjZXJzIGluc2lkZSB0aGUgY29tYmluZWQgb25lXG4gICAgZm9yICh2YXIga2V5IGluIHJlZHVjZXJNYXApIHtcbiAgICAgIC8vIFBhc3MgdGhlIHdob2xlIHN0YXRlIGRvd24gYXMgYXJndW1lbnQgZm9yXG4gICAgICAvLyBjcm9zcyBzdGF0ZSBrZXkgYWNjZXNzXG4gICAgICB2YXIgcmVkdWNlZFN0YXRlID0gcmVkdWNlck1hcFtrZXldKHN0YXRlW2tleV0sIGFjdGlvbiwgc3RhdGUpO1xuXG4gICAgICBpZiAocmVkdWNlZFN0YXRlICE9PSBzdGF0ZVtrZXldKSB7XG4gICAgICAgIGRpcnR5S2V5cy5wdXNoKGtleSk7XG4gICAgICB9XG5cbiAgICAgIG5ld1N0YXRlW2tleV0gPSByZWR1Y2VkU3RhdGU7XG4gICAgfVxuXG4gICAgLy8gQ2FsbCB1cGRhdGUgZnVuY3Rpb24gZm9yIGVhY2ggcmVkdWNlZCBzdGF0ZVxuICAgIHVwZGF0ZXIobmV3U3RhdGUsIGRpcnR5S2V5cyk7XG5cbiAgICAvLyBkaXJ0eUtleXMuZm9yRWFjaCgoZGlydHlLZXkpID0+IHtcbiAgICAvLyAgIHVwZGF0ZXJNYXBbZGlydHlLZXldKG5ld1N0YXRlLCBkaXJ0eUtleSlcbiAgICAvLyB9KVxuXG4gICAgcmV0dXJuIG5ld1N0YXRlO1xuICB9O1xufVxuXG5mdW5jdGlvbiBjb21iaW5lVXBkYXRlcigpIHtcbiAgdmFyIHVwZGF0ZXJNYXAgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IHt9O1xuICB2YXIgcmVuZGVyZXJNYXAgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHt9O1xuXG4gIC8vIEdlbmVyYXRlIGNvbWJpbmVkIHVwZGF0ZXIgZnVuY3Rpb24gZm9yIGFsbCB1cGRhdGVyc1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIHZhciBzdGF0ZSA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDoge307XG4gICAgdmFyIGRpcnR5S2V5cyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogW107XG5cbiAgICB2YXIgbmV3RmluYWxSZW5kZXJTdGF0ZSA9IHt9O1xuICAgIGZvciAodmFyIGtleSBpbiB1cGRhdGVyTWFwKSB7XG4gICAgICAvLyBDb21wdXRlIHRoZSBmaW5hbCByZW5kZXIgc3RhdGUgYW5kIHBhc3MgaW50byByZW5kZXJlclxuICAgICAgcmVuZGVyZXJNYXBba2V5XS5maW5hbFJlbmRlclN0YXRlID0gdXBkYXRlck1hcFtrZXldKHJlbmRlcmVyTWFwW2tleV0uZmluYWxSZW5kZXJTdGF0ZSwgc3RhdGUsIGRpcnR5S2V5cyk7XG4gICAgfVxuICB9O1xufVxuXG4vKioqLyB9KVxuLyoqKioqKi8gXSk7XG59KTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluZGxZbkJoWTJzNkx5OHZkMlZpY0dGamF5OTFibWwyWlhKellXeE5iMlIxYkdWRVpXWnBibWwwYVc5dUlpd2lkMlZpY0dGamF6b3ZMeTkzWldKd1lXTnJMMkp2YjNSemRISmhjQ0F4TXpCak56SXlNakprTVdNeU9HSXlOekV6WVNJc0luZGxZbkJoWTJzNkx5OHZMaTl6Y21NdloyRnRkWGd1YW5NaUxDSjNaV0p3WVdOck9pOHZMeTR2YzNKakwzTjBZWFJsVFdGdVlXZGxjaTVxY3lKZExDSnVZVzFsY3lJNld5SmZZVzVwYldGMGFXOXVURzl2Y0V0bGVTSXNJbDloWTJOMWJYVnNZWFJ2Y2lJc0lsOW1jSE1pTENKZmMzUnZjbVVpTENKZmRYQmtZWFJsY2sxaGNDSXNJbDl5Wlc1a1pYSmxjazFoY0NJc0lsOXNiMjl3SWl3aWJHRnpkRlJwYldWemRHRnRjQ0lzSW5kcGJtUnZkeUlzSW5KbGNYVmxjM1JCYm1sdFlYUnBiMjVHY21GdFpTSXNJbTV2ZHlJc0lrUmhkR1VpTENKa2RDSXNJbXRsZVNJc0luSmxibVJsY21WeUlpd2ljbVZ1WkdWeVUzUmhkR1VpTENKbWFXNWhiRkpsYm1SbGNsTjBZWFJsSWl3aVoyRnRkWGdpTENKamIyNW1hV2NpTENKbWNITWlMQ0pqYjI1MFlXbHVaWElpTENKc1lYbGxjbk1pTENKbWIzSkZZV05vSWl3aWJHRjVaWElpTENKallXNTJZWE1pTENKa2IyTjFiV1Z1ZENJc0ltTnlaV0YwWlVWc1pXMWxiblFpTENKaGNIQmxibVJEYUdsc1pDSXNJbTVoYldVaUxDSjFjR1JoZEdWeUlpd2ljbVZ1WkdWeUlpd2lZbWx1WkNJc0luSmxaSFZqWlhKTllYQWlMQ0pwYm1sMElpd2laMlYwVTNSaGRHVWlMQ0p6ZEdGeWRDSXNJbVJwYzNCaGRHTm9JaXdpWVdOMGFXOXVJaXdpWTNKbFlYUmxVM1J2Y21VaUxDSmpiMjFpYVc1bFVtVmtkV05sY2lJc0ltTnZiV0pwYm1WVmNHUmhkR1Z5SWl3aWNtVmtkV05sY2lJc0luTjBZWFJsSWl3aVkyOXVjMjlzWlNJc0ltZHliM1Z3SWl3aWRIbHdaU0lzSW1sdVptOGlMQ0puY205MWNFVnVaQ0lzSW5OMFlYUmxTMlY1SWl3aWJtVjNVM1JoZEdVaUxDSmthWEowZVV0bGVYTWlMQ0p5WldSMVkyVmtVM1JoZEdVaUxDSndkWE5vSWl3aWRYQmtZWFJsY2sxaGNDSXNJbkpsYm1SbGNtVnlUV0Z3SWl3aWJtVjNSbWx1WVd4U1pXNWtaWEpUZEdGMFpTSmRMQ0p0WVhCd2FXNW5jeUk2SWtGQlFVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRXNRMEZCUXp0QlFVTkVMRTg3UVVOV1FUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVRzN08wRkJSMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFc1lVRkJTenRCUVVOTU8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFc2JVTkJRVEpDTERCQ1FVRXdRaXhGUVVGRk8wRkJRM1pFTEhsRFFVRnBReXhsUVVGbE8wRkJRMmhFTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQkxEaEVRVUZ6UkN3clJFRkJLMFE3TzBGQlJYSklPMEZCUTBFN08wRkJSVUU3UVVGRFFUczdPenM3T3pzN096czdPenM3T3pzN096czdPMEZETjBSQk96dEJRVVZCT3pzN1FVRkhRU3hKUVVGSlFTeHZRa0ZCYjBJc1NVRkJlRUk3UVVGRFFUczdPMEZCUjBFc1NVRkJTVU1zWlVGQlpTeERRVUZ1UWp0QlFVTkJPenM3UVVGSFFTeEpRVUZKUXl4UFFVRlBMRVZCUVZnN1FVRkRRVHM3TzBGQlIwRXNTVUZCU1VNc1UwRkJVeXhGUVVGaU96dEJRVVZCTEVsQlFVbERMR05CUVdNc1JVRkJiRUk3TzBGQlJVRXNTVUZCU1VNc1pVRkJaU3hGUVVGdVFqczdRVUZGUVRzN08wRkJSMEVzVTBGQlUwTXNTMEZCVkN4RFFVRm5Ra01zWVVGQmFFSXNSVUZCSzBJN1FVRkROMEpRTEhOQ1FVRnZRbEVzVDBGQlQwTXNjVUpCUVZBc1EwRkJOa0lzV1VGQlRUdEJRVU55UkN4UlFVRk5ReXhOUVVGTlF5eExRVUZMUkN4SFFVRk1MRVZCUVZvN1FVRkRRU3hSUVVGTlJTeExRVUZMTEU5QlFVOVdMRWxCUVd4Q08wRkJRMEZFTEc5Q1FVRm5RbE1zVFVGQlRVZ3NZVUZCZEVJN08wRkJSVUVzVVVGQlNVNHNaMEpCUVdkQ1Z5eEZRVUZ3UWl4RlFVRjNRanRCUVVOMFFpeGhRVUZQV0N4blFrRkJaMEpYTEVWQlFYWkNMRVZCUVRKQ08wRkJRM3BDV0N4M1FrRkJaMEpYTEVWQlFXaENPMEZCUTBRN1FVRkRSQ3hYUVVGTExFbEJRVWxETEVkQlFWUXNTVUZCWjBKU0xGbEJRV2hDTEVWQlFUaENPMEZCUXpWQ0xGbEJRVWxUTEZkQlFWZFVMR0ZCUVdGUkxFZEJRV0lzUTBGQlpqdEJRVU5CUXl4cFFrRkJVME1zVjBGQlZDeEhRVUYxUWtRc1UwRkJVMEVzVTBGQlUwTXNWMEZCYkVJc1JVRkJLMEpFTEZOQlFWTkZMR2RDUVVGNFF5eEZRVUV3UkVvc1JVRkJNVVFzUTBGQmRrSTdRVUZEUkR0QlFVTkdPMEZCUTBST0xGVkJRVTFKTEVkQlFVNDdRVUZEUkN4SFFXWnRRaXhEUVVGd1FqdEJRV2RDUkRzN1FVRkZSQ3hKUVVGTlR5eFJRVUZSTzBGQlExcERMRlZCUVZFc2EwSkJRV2xDTzBGQlFVRXNVVUZCYUVKQkxFOUJRV2RDTEhWRlFVRlFMRVZCUVU4N08wRkJRM1pDTzBGQlEwRm9RaXhYUVVGUFowSXNVVUZCVDBNc1IwRkJVQ3hKUVVGamFrSXNTVUZCY2tJN08wRkJSVUVzVVVGQlNXdENMRmxCUVZsR0xGRkJRVTlGTEZOQlFYWkNPenRCUVVWQk8wRkJRMEZHTEZsQlFVOUhMRTFCUVZBc1EwRkJZME1zVDBGQlpDeERRVUZ6UWl4VlFVRkRReXhMUVVGRUxFVkJRVmM3UVVGREwwSXNWVUZCU1VNc1UwRkJVME1zVTBGQlUwTXNZVUZCVkN4RFFVRjFRaXhSUVVGMlFpeERRVUZpTzBGQlEwRk9MR2RDUVVGVlR5eFhRVUZXTEVOQlFYTkNTQ3hOUVVGMFFqczdRVUZGUVhCQ0xHdENRVUZaYlVJc1RVRkJUVXNzU1VGQmJFSXNTVUZCTUVKTUxFMUJRVTFOTEU5QlFXaERPMEZCUTBGNFFpeHRRa0ZCWVd0Q0xFMUJRVTFMTEVsQlFXNUNMRWxCUVRKQ1RDeE5RVUZOVHl4TlFVRk9MRU5CUVdGRExFbEJRV0lzUTBGQmEwSXNTVUZCYkVJc1JVRkJkMEpRTEUxQlFYaENMRU5CUVROQ08wRkJRMFFzUzBGT1JEczdRVUZSUVR0QlFVTkJja0lzWVVGQlV5d3JRa0ZCV1N4clEwRkJaV1VzVVVGQlQyTXNWVUZCZEVJc1JVRkJhME1zYTBOQlFXVTFRaXhYUVVGbUxFVkJRVFJDUXl4WlFVRTFRaXhEUVVGc1F5eERRVUZhTEVOQlFWUTdRVUZEUVN4UlFVRkpZU3hSUVVGUFpTeEpRVUZZTEVWQlFXbENPMEZCUTJabUxHTkJRVTlsTEVsQlFWQXNRMEZCV1RsQ0xFOUJRVThyUWl4UlFVRlFMRVZCUVZvN1FVRkRSRHRCUVVOR0xFZEJja0pYT3p0QlFYVkNXbUlzVlVGQlVTeEZRWFpDU1RzN1FVRjVRbHBqTEZOQlFVOHNhVUpCUVUwN1FVRkRXRGRDTEZWQlFVMUxMRXRCUVV0RUxFZEJRVXdzUlVGQlRqdEJRVU5FTEVkQk0wSlhPenRCUVRaQ1dqQkNMRmxCUVZVc2EwSkJRVU5ETEUxQlFVUXNSVUZCV1R0QlFVTndRbXhETEZkQlFVOXBReXhSUVVGUUxFTkJRV2RDUXl4TlFVRm9RanRCUVVORU96dEJRVVZFTzBGQlEwRTdRVUZzUTFrc1EwRkJaRHM3YTBKQmNVTmxjRUlzU3pzN1FVRkhaanRCUVVOQkxHZERPenM3T3pzN096czdPenM3VVVOMFJtZENjVUlzVnl4SFFVRkJRU3hYTzFGQk5rTkJReXhqTEVkQlFVRkJMR003VVVFclFrRkRMR01zUjBGQlFVRXNZenRCUVRWRlZDeFRRVUZUUml4WFFVRlVMRU5CUVhOQ1J5eFBRVUYwUWl4RlFVRXJRanRCUVVOd1F6dEJRVU5CTEUxQlFVbERMRkZCUVZGRUxGTkJRVm83TzBGQlJVRXNVMEZCVHp0QlFVTk1PenM3UVVGSFFVd3NZMEZCVlN4dlFrRkJhVUk3UVVGQlFTeFZRVUZvUWtNc1RVRkJaMElzZFVWQlFWQXNSVUZCVHpzN1FVRkRla0lzVlVGQlNTeEpRVUZLTEVWQlFXZERPMEZCUXpsQ08wRkJRMEZOTEdkQ1FVRlJReXhMUVVGU0xFTkJRV05RTEU5QlFVOVJMRWxCUVhKQ08wRkJRMEZHTEdkQ1FVRlJSeXhKUVVGU0xFTkJRV0VzVjBGQllpeEZRVUV3UWl4alFVRXhRaXhGUVVFd1Ewb3NTMEZCTVVNN1FVRkRRVU1zWjBKQlFWRkhMRWxCUVZJc1EwRkJZU3hYUVVGaUxFVkJRVEJDTEZsQlFURkNMRVZCUVhkRFZDeE5RVUY0UXp0QlFVTkVPenRCUVVWRU8wRkJRMEZMTEdOQlFWRkVMRkZCUVZGRExFdEJRVklzUlVGQlpVd3NUVUZCWml4RFFVRlNPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRXNWVUZCU1N4SlFVRktMRVZCUVdkRE8wRkJRemxDTzBGQlEwRk5MR2RDUVVGUlJ5eEpRVUZTTEVOQlFXRXNWVUZCWWl4RlFVRjVRaXhqUVVGNlFpeEZRVUY1UTBvc1MwRkJla003UVVGRFFVTXNaMEpCUVZGSkxGRkJRVkk3UVVGRFJEdEJRVU5HTEV0QmVFSkpPMEZCZVVKTU96czdPMEZCU1VGaUxHTkJRVlVzYTBKQlFVTmpMRkZCUVVRc1JVRkJZenRCUVVOMFFpeFZRVUZKTEVOQlFVTkJMRkZCUVV3c1JVRkJaVHRCUVVOaUxHVkJRVTlPTEV0QlFWQTdRVUZEUkN4UFFVWkVMRTFCUjBzN1FVRkRTQ3hsUVVGUFFTeE5RVUZOVFN4UlFVRk9MRU5CUVZBN1FVRkRSRHRCUVVOR08wRkJjRU5KTEVkQlFWQTdRVUZ6UTBRN08wRkJSVVE3UVVGRFR5eFRRVUZUVkN4alFVRlVMRWRCUVcxRU8wRkJRVUVzVFVGQk1VSlFMRlZCUVRCQ0xIVkZRVUZpTEVWQlFXRTdRVUZCUVN4TlFVRlVTQ3hQUVVGVE96czdRVUZGZUVRN1FVRkRRU3hUUVVGUExGbEJRVFpDTzBGQlFVRXNVVUZCTlVKaExFdEJRVFJDTEhWRlFVRndRaXhGUVVGdlFqdEJRVUZCTEZGQlFXaENUQ3hOUVVGblFpeDFSVUZCVUN4RlFVRlBPenRCUVVOc1F5eFJRVUZKV1N4WFFVRlhMRVZCUVdZN1FVRkJRU3hSUVVOSlF5eFpRVUZaTEVWQlJHaENPenRCUVVkQk8wRkJRMEVzVTBGQlN5eEpRVUZKY2tNc1IwRkJWQ3hKUVVGblFtMUNMRlZCUVdoQ0xFVkJRVFJDTzBGQlF6RkNPMEZCUTBFN1FVRkRRU3hWUVVGSmJVSXNaVUZCWlc1Q0xGZEJRVmR1UWl4SFFVRllMRVZCUVdkQ05rSXNUVUZCVFRkQ0xFZEJRVTRzUTBGQmFFSXNSVUZCTkVKM1FpeE5RVUUxUWl4RlFVRnZRMHNzUzBGQmNFTXNRMEZCYmtJN08wRkJSVUVzVlVGQlNWTXNhVUpCUVdsQ1ZDeE5RVUZOTjBJc1IwRkJUaXhEUVVGeVFpeEZRVUZwUXp0QlFVTXZRbkZETEd0Q1FVRlZSU3hKUVVGV0xFTkJRV1YyUXl4SFFVRm1PMEZCUTBRN08wRkJSVVJ2UXl4bFFVRlRjRU1zUjBGQlZDeEpRVUZuUW5ORExGbEJRV2hDTzBGQlEwUTdPMEZCUlVRN1FVRkRRWFJDTEZsQlFWRnZRaXhSUVVGU0xFVkJRV3RDUXl4VFFVRnNRanM3UVVGRlFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFc1YwRkJUMFFzVVVGQlVEdEJRVU5FTEVkQmVrSkVPMEZCTUVKRU96dEJRVVZOTEZOQlFWTlVMR05CUVZRc1IwRkJORVE3UVVGQlFTeE5RVUZ1UTJFc1ZVRkJiVU1zZFVWQlFYUkNMRVZCUVhOQ08wRkJRVUVzVFVGQmJFSkRMRmRCUVd0Q0xIVkZRVUZLTEVWQlFVazdPMEZCUTJwRk8wRkJRMEVzVTBGQlR5eFpRVUZuUXp0QlFVRkJMRkZCUVM5Q1dpeExRVUVyUWl4MVJVRkJka0lzUlVGQmRVSTdRVUZCUVN4UlFVRnVRbEVzVTBGQmJVSXNkVVZCUVZBc1JVRkJUenM3UVVGRGNrTXNVVUZCU1Vzc2MwSkJRWE5DTEVWQlFURkNPMEZCUTBFc1UwRkJTeXhKUVVGSk1VTXNSMEZCVkN4SlFVRm5RbmRETEZWQlFXaENMRVZCUVRSQ08wRkJRekZDTzBGQlEwRkRMR3RDUVVGWmVrTXNSMEZCV2l4RlFVRnBRa2NzWjBKQlFXcENMRWRCUVc5RGNVTXNWMEZCVjNoRExFZEJRVmdzUlVGQlowSjVReXhaUVVGWmVrTXNSMEZCV2l4RlFVRnBRa2NzWjBKQlFXcERMRVZCUVcxRU1FSXNTMEZCYmtRc1JVRkJNRVJSTEZOQlFURkVMRU5CUVhCRE8wRkJRMFE3UVVGRFJpeEhRVTVFTzBGQlQwUXNReUlzSW1acGJHVWlPaUpuWVcxMWVDNXFjeUlzSW5OdmRYSmpaWE5EYjI1MFpXNTBJanBiSWlobWRXNWpkR2x2YmlCM1pXSndZV05yVlc1cGRtVnljMkZzVFc5a2RXeGxSR1ZtYVc1cGRHbHZiaWh5YjI5MExDQm1ZV04wYjNKNUtTQjdYRzVjZEdsbUtIUjVjR1Z2WmlCbGVIQnZjblJ6SUQwOVBTQW5iMkpxWldOMEp5QW1KaUIwZVhCbGIyWWdiVzlrZFd4bElEMDlQU0FuYjJKcVpXTjBKeWxjYmx4MFhIUnRiMlIxYkdVdVpYaHdiM0owY3lBOUlHWmhZM1J2Y25rb0tUdGNibHgwWld4elpTQnBaaWgwZVhCbGIyWWdaR1ZtYVc1bElEMDlQU0FuWm5WdVkzUnBiMjRuSUNZbUlHUmxabWx1WlM1aGJXUXBYRzVjZEZ4MFpHVm1hVzVsS0Z0ZExDQm1ZV04wYjNKNUtUdGNibHgwWld4elpTQnBaaWgwZVhCbGIyWWdaWGh3YjNKMGN5QTlQVDBnSjI5aWFtVmpkQ2NwWEc1Y2RGeDBaWGh3YjNKMGMxdGNJbWRoYlhWNFhDSmRJRDBnWm1GamRHOXllU2dwTzF4dVhIUmxiSE5sWEc1Y2RGeDBjbTl2ZEZ0Y0ltZGhiWFY0WENKZElEMGdabUZqZEc5eWVTZ3BPMXh1ZlNrb2RHaHBjeXdnWm5WdVkzUnBiMjRvS1NCN1hHNXlaWFIxY200Z1hHNWNibHh1THk4Z1YwVkNVRUZEU3lCR1QwOVVSVklnTHk5Y2JpOHZJSGRsWW5CaFkyc3ZkVzVwZG1WeWMyRnNUVzlrZFd4bFJHVm1hVzVwZEdsdmJpSXNJaUJjZEM4dklGUm9aU0J0YjJSMWJHVWdZMkZqYUdWY2JpQmNkSFpoY2lCcGJuTjBZV3hzWldSTmIyUjFiR1Z6SUQwZ2UzMDdYRzVjYmlCY2RDOHZJRlJvWlNCeVpYRjFhWEpsSUdaMWJtTjBhVzl1WEc0Z1hIUm1kVzVqZEdsdmJpQmZYM2RsWW5CaFkydGZjbVZ4ZFdseVpWOWZLRzF2WkhWc1pVbGtLU0I3WEc1Y2JpQmNkRngwTHk4Z1EyaGxZMnNnYVdZZ2JXOWtkV3hsSUdseklHbHVJR05oWTJobFhHNGdYSFJjZEdsbUtHbHVjM1JoYkd4bFpFMXZaSFZzWlhOYmJXOWtkV3hsU1dSZEtTQjdYRzRnWEhSY2RGeDBjbVYwZFhKdUlHbHVjM1JoYkd4bFpFMXZaSFZzWlhOYmJXOWtkV3hsU1dSZExtVjRjRzl5ZEhNN1hHNGdYSFJjZEgxY2JpQmNkRngwTHk4Z1EzSmxZWFJsSUdFZ2JtVjNJRzF2WkhWc1pTQW9ZVzVrSUhCMWRDQnBkQ0JwYm5SdklIUm9aU0JqWVdOb1pTbGNiaUJjZEZ4MGRtRnlJRzF2WkhWc1pTQTlJR2x1YzNSaGJHeGxaRTF2WkhWc1pYTmJiVzlrZFd4bFNXUmRJRDBnZTF4dUlGeDBYSFJjZEdrNklHMXZaSFZzWlVsa0xGeHVJRngwWEhSY2RHdzZJR1poYkhObExGeHVJRngwWEhSY2RHVjRjRzl5ZEhNNklIdDlYRzRnWEhSY2RIMDdYRzVjYmlCY2RGeDBMeThnUlhobFkzVjBaU0IwYUdVZ2JXOWtkV3hsSUdaMWJtTjBhVzl1WEc0Z1hIUmNkRzF2WkhWc1pYTmJiVzlrZFd4bFNXUmRMbU5oYkd3b2JXOWtkV3hsTG1WNGNHOXlkSE1zSUcxdlpIVnNaU3dnYlc5a2RXeGxMbVY0Y0c5eWRITXNJRjlmZDJWaWNHRmphMTl5WlhGMWFYSmxYMThwTzF4dVhHNGdYSFJjZEM4dklFWnNZV2NnZEdobElHMXZaSFZzWlNCaGN5QnNiMkZrWldSY2JpQmNkRngwYlc5a2RXeGxMbXdnUFNCMGNuVmxPMXh1WEc0Z1hIUmNkQzh2SUZKbGRIVnliaUIwYUdVZ1pYaHdiM0owY3lCdlppQjBhR1VnYlc5a2RXeGxYRzRnWEhSY2RISmxkSFZ5YmlCdGIyUjFiR1V1Wlhod2IzSjBjenRjYmlCY2RIMWNibHh1WEc0Z1hIUXZMeUJsZUhCdmMyVWdkR2hsSUcxdlpIVnNaWE1nYjJKcVpXTjBJQ2hmWDNkbFluQmhZMnRmYlc5a2RXeGxjMTlmS1Z4dUlGeDBYMTkzWldKd1lXTnJYM0psY1hWcGNtVmZYeTV0SUQwZ2JXOWtkV3hsY3p0Y2JseHVJRngwTHk4Z1pYaHdiM05sSUhSb1pTQnRiMlIxYkdVZ1kyRmphR1ZjYmlCY2RGOWZkMlZpY0dGamExOXlaWEYxYVhKbFgxOHVZeUE5SUdsdWMzUmhiR3hsWkUxdlpIVnNaWE03WEc1Y2JpQmNkQzh2SUdSbFptbHVaU0JuWlhSMFpYSWdablZ1WTNScGIyNGdabTl5SUdoaGNtMXZibmtnWlhod2IzSjBjMXh1SUZ4MFgxOTNaV0p3WVdOclgzSmxjWFZwY21WZlh5NWtJRDBnWm5WdVkzUnBiMjRvWlhod2IzSjBjeXdnYm1GdFpTd2daMlYwZEdWeUtTQjdYRzRnWEhSY2RHbG1LQ0ZmWDNkbFluQmhZMnRmY21WeGRXbHlaVjlmTG04b1pYaHdiM0owY3l3Z2JtRnRaU2twSUh0Y2JpQmNkRngwWEhSUFltcGxZM1F1WkdWbWFXNWxVSEp2Y0dWeWRIa29aWGh3YjNKMGN5d2dibUZ0WlN3Z2UxeHVJRngwWEhSY2RGeDBZMjl1Wm1sbmRYSmhZbXhsT2lCbVlXeHpaU3hjYmlCY2RGeDBYSFJjZEdWdWRXMWxjbUZpYkdVNklIUnlkV1VzWEc0Z1hIUmNkRngwWEhSblpYUTZJR2RsZEhSbGNseHVJRngwWEhSY2RIMHBPMXh1SUZ4MFhIUjlYRzRnWEhSOU8xeHVYRzRnWEhRdkx5Qm5aWFJFWldaaGRXeDBSWGh3YjNKMElHWjFibU4wYVc5dUlHWnZjaUJqYjIxd1lYUnBZbWxzYVhSNUlIZHBkR2dnYm05dUxXaGhjbTF2Ym5rZ2JXOWtkV3hsYzF4dUlGeDBYMTkzWldKd1lXTnJYM0psY1hWcGNtVmZYeTV1SUQwZ1puVnVZM1JwYjI0b2JXOWtkV3hsS1NCN1hHNGdYSFJjZEhaaGNpQm5aWFIwWlhJZ1BTQnRiMlIxYkdVZ0ppWWdiVzlrZFd4bExsOWZaWE5OYjJSMWJHVWdQMXh1SUZ4MFhIUmNkR1oxYm1OMGFXOXVJR2RsZEVSbFptRjFiSFFvS1NCN0lISmxkSFZ5YmlCdGIyUjFiR1ZiSjJSbFptRjFiSFFuWFRzZ2ZTQTZYRzRnWEhSY2RGeDBablZ1WTNScGIyNGdaMlYwVFc5a2RXeGxSWGh3YjNKMGN5Z3BJSHNnY21WMGRYSnVJRzF2WkhWc1pUc2dmVHRjYmlCY2RGeDBYMTkzWldKd1lXTnJYM0psY1hWcGNtVmZYeTVrS0dkbGRIUmxjaXdnSjJFbkxDQm5aWFIwWlhJcE8xeHVJRngwWEhSeVpYUjFjbTRnWjJWMGRHVnlPMXh1SUZ4MGZUdGNibHh1SUZ4MEx5OGdUMkpxWldOMExuQnliM1J2ZEhsd1pTNW9ZWE5QZDI1UWNtOXdaWEowZVM1allXeHNYRzRnWEhSZlgzZGxZbkJoWTJ0ZmNtVnhkV2x5WlY5ZkxtOGdQU0JtZFc1amRHbHZiaWh2WW1wbFkzUXNJSEJ5YjNCbGNuUjVLU0I3SUhKbGRIVnliaUJQWW1wbFkzUXVjSEp2ZEc5MGVYQmxMbWhoYzA5M2JsQnliM0JsY25SNUxtTmhiR3dvYjJKcVpXTjBMQ0J3Y205d1pYSjBlU2s3SUgwN1hHNWNiaUJjZEM4dklGOWZkMlZpY0dGamExOXdkV0pzYVdOZmNHRjBhRjlmWEc0Z1hIUmZYM2RsWW5CaFkydGZjbVZ4ZFdseVpWOWZMbkFnUFNCY0lpOWNJanRjYmx4dUlGeDBMeThnVEc5aFpDQmxiblJ5ZVNCdGIyUjFiR1VnWVc1a0lISmxkSFZ5YmlCbGVIQnZjblJ6WEc0Z1hIUnlaWFIxY200Z1gxOTNaV0p3WVdOclgzSmxjWFZwY21WZlh5aGZYM2RsWW5CaFkydGZjbVZ4ZFdseVpWOWZMbk1nUFNBd0tUdGNibHh1WEc1Y2JpOHZJRmRGUWxCQlEwc2dSazlQVkVWU0lDOHZYRzR2THlCM1pXSndZV05yTDJKdmIzUnpkSEpoY0NBeE16QmpOekl5TWpKa01XTXlPR0l5TnpFellTSXNJbWx0Y0c5eWRDQjdZMjl0WW1sdVpWSmxaSFZqWlhJc0lHTnlaV0YwWlZOMGIzSmxMQ0JqYjIxaWFXNWxWWEJrWVhSbGNuMGdabkp2YlNBbkxpOXpkR0YwWlUxaGJtRm5aWEluWEc1Y2JpOHFLbHh1SUNvZ1ZHaGxJR0Z1YVcxaGRHbHZiaUJzYjI5d0lHdGxlU0JtYjNJZ1kyRnVZMlZzSUdGdWFXMWhkR2x2Ymx4dUlDb3ZYRzVzWlhRZ1gyRnVhVzFoZEdsdmJreHZiM0JMWlhrZ1BTQnVkV3hzWEc0dktpcGNiaUFxSUVGalkzVnRkV3hoZEc5eUlHWnZjaUIwYVcxbExXSmhjMlZrSUdGdWFXMWhkR2x2Ymx4dUlDb3ZYRzVzWlhRZ1gyRmpZM1Z0ZFd4aGRHOXlJRDBnTUZ4dUx5b3FYRzRnS2lCVWFHVWdaR1ZtWVhWc2RDQm1jSE5jYmlBcUwxeHViR1YwSUY5bWNITWdQU0EyTUZ4dUx5b3FYRzRnS2lCVWFHVWdjM1J2Y21VZ1ptOXlJR2RoYldWY2JpQXFMMXh1YkdWMElGOXpkRzl5WlNBOUlIdDlYRzVjYm14bGRDQmZkWEJrWVhSbGNrMWhjQ0E5SUh0OVhHNWNibXhsZENCZmNtVnVaR1Z5WlhKTllYQWdQU0I3ZlZ4dVhHNHZLaXBjYmlBcUlGUnlhV2RuWlhJZ1oyRnRaU0JzYjI5d1hHNGdLaTljYm1aMWJtTjBhVzl1SUY5c2IyOXdJQ2hzWVhOMFZHbHRaWE4wWVcxd0tTQjdYRzRnSUY5aGJtbHRZWFJwYjI1TWIyOXdTMlY1SUQwZ2QybHVaRzkzTG5KbGNYVmxjM1JCYm1sdFlYUnBiMjVHY21GdFpTZ29LU0E5UGlCN1hHNGdJQ0FnWTI5dWMzUWdibTkzSUQwZ1JHRjBaUzV1YjNjb0tWeHVJQ0FnSUdOdmJuTjBJR1IwSUQwZ01UQXdNQ0F2SUY5bWNITmNiaUFnSUNCZllXTmpkVzExYkdGMGIzSWdLejBnYm05M0lDMGdiR0Z6ZEZScGJXVnpkR0Z0Y0Z4dVhHNGdJQ0FnYVdZZ0tGOWhZMk4xYlhWc1lYUnZjaUErUFNCa2RDa2dlMXh1SUNBZ0lDQWdkMmhwYkdVZ0tGOWhZMk4xYlhWc1lYUnZjaUErUFNCa2RDa2dlMXh1SUNBZ0lDQWdJQ0JmWVdOamRXMTFiR0YwYjNJZ0xUMGdaSFJjYmlBZ0lDQWdJSDFjYmlBZ0lDQWdJR1p2Y2lBb2JHVjBJR3RsZVNCcGJpQmZjbVZ1WkdWeVpYSk5ZWEFwSUh0Y2JpQWdJQ0FnSUNBZ2JHVjBJSEpsYm1SbGNtVnlJRDBnWDNKbGJtUmxjbVZ5VFdGd1cydGxlVjFjYmlBZ0lDQWdJQ0FnY21WdVpHVnlaWEl1Y21WdVpHVnlVM1JoZEdVZ1BTQnlaVzVrWlhKbGNpaHlaVzVrWlhKbGNpNXlaVzVrWlhKVGRHRjBaU3dnY21WdVpHVnlaWEl1Wm1sdVlXeFNaVzVrWlhKVGRHRjBaU3dnWkhRcFhHNGdJQ0FnSUNCOVhHNGdJQ0FnZlZ4dUlDQWdJRjlzYjI5d0tHNXZkeWxjYmlBZ2ZTbGNibjFjYmx4dVkyOXVjM1FnWjJGdGRYZ2dQU0I3WEc0Z0lHTnZibVpwWnpvZ0tHTnZibVpwWnlBOUlIdDlLU0E5UGlCN1hHNGdJQ0FnTHk4Z1EyOXVabWxuSUhSb1pTQndjbWwyWVhSbElHZHNiMkpoYkhOY2JpQWdJQ0JmWm5CeklEMGdZMjl1Wm1sbkxtWndjeUI4ZkNCZlpuQnpYRzVjYmlBZ0lDQnNaWFFnWTI5dWRHRnBibVZ5SUQwZ1kyOXVabWxuTG1OdmJuUmhhVzVsY2x4dVhHNGdJQ0FnTHk4Z1EzSmxZWFJsSUdkaGJXVWdiR0Y1WlhKelhHNGdJQ0FnWTI5dVptbG5MbXhoZVdWeWN5NW1iM0pGWVdOb0tDaHNZWGxsY2lrZ1BUNGdlMXh1SUNBZ0lDQWdiR1YwSUdOaGJuWmhjeUE5SUdSdlkzVnRaVzUwTG1OeVpXRjBaVVZzWlcxbGJuUW9KMk5oYm5aaGN5Y3BYRzRnSUNBZ0lDQmpiMjUwWVdsdVpYSXVZWEJ3Wlc1a1EyaHBiR1FvWTJGdWRtRnpLVnh1WEc0Z0lDQWdJQ0JmZFhCa1lYUmxjazFoY0Z0c1lYbGxjaTV1WVcxbFhTQTlJR3hoZVdWeUxuVndaR0YwWlhKY2JpQWdJQ0FnSUY5eVpXNWtaWEpsY2sxaGNGdHNZWGxsY2k1dVlXMWxYU0E5SUd4aGVXVnlMbkpsYm1SbGNpNWlhVzVrS0c1MWJHd3NJR05oYm5aaGN5bGNiaUFnSUNCOUtWeHVYRzRnSUNBZ0x5OGdRM0psWVhSbElHZGhiV1VnYzNSdmNtVmNiaUFnSUNCZmMzUnZjbVVnUFNCamNtVmhkR1ZUZEc5eVpTaGpiMjFpYVc1bFVtVmtkV05sY2loamIyNW1hV2N1Y21Wa2RXTmxjazFoY0N3Z1kyOXRZbWx1WlZWd1pHRjBaWElvWDNWd1pHRjBaWEpOWVhBc0lGOXlaVzVrWlhKbGNrMWhjQ2twS1Z4dUlDQWdJR2xtSUNoamIyNW1hV2N1YVc1cGRDa2dlMXh1SUNBZ0lDQWdZMjl1Wm1sbkxtbHVhWFFvWDNOMGIzSmxMbWRsZEZOMFlYUmxLQ2twWEc0Z0lDQWdmVnh1SUNCOUxGeHVYRzRnSUd4aGVXVnljem9nZTMwc1hHNWNiaUFnYzNSaGNuUTZJQ2dwSUQwK0lIdGNiaUFnSUNCZmJHOXZjQ2hFWVhSbExtNXZkeWdwS1Z4dUlDQjlMRnh1WEc0Z0lHUnBjM0JoZEdOb09pQW9ZV04wYVc5dUtTQTlQaUI3WEc0Z0lDQWdYM04wYjNKbExtUnBjM0JoZEdOb0tHRmpkR2x2YmlsY2JpQWdmVnh1WEc0Z0lDOHZJQ3BjYmlBZ0x5OGdJQ29nUjJGdFpTQjNhV3hzSUdKbElHRjJZV2xzWVdKc1pTQnZibU5sSUdOdmJtWnBaM1Z5WldSY2JuMWNibHh1Wlhod2IzSjBJR1JsWm1GMWJIUWdaMkZ0ZFhoY2JseHVYRzR2THlCVVQwUlBYRzR2THlBeExpQkNkV2xzWkNCbWFXeGxJR1p2Y2lCRlV6WWdiVzlrZFd4bGMxeHVYRzVjYmk4dklGZEZRbEJCUTBzZ1JrOVBWRVZTSUM4dlhHNHZMeUF1TDNOeVl5OW5ZVzExZUM1cWN5SXNJbVY0Y0c5eWRDQm1kVzVqZEdsdmJpQmpjbVZoZEdWVGRHOXlaU0FvY21Wa2RXTmxjaWtnZTF4dUlDQXZMeUJKYm1sMElITjBZWFJsWEc0Z0lHeGxkQ0J6ZEdGMFpTQTlJSEpsWkhWalpYSW9LVnh1WEc0Z0lISmxkSFZ5YmlCN1hHNGdJQ0FnTHlvcVhHNGdJQ0FnSUNvZ1JHbHpjR0YwWTJnZ1lXTjBhVzl1SUhSdklIUnlhV2RuWlhJZ2MzUmhkR1VnWTJoaGJtZGxjMXh1SUNBZ0lDQXFMMXh1SUNBZ0lHUnBjM0JoZEdOb09pQW9ZV04wYVc5dUlEMGdlMzBwSUQwK0lIdGNiaUFnSUNBZ0lHbG1JQ2h3Y205alpYTnpMbVZ1ZGk1amIyUmxJRDA5UFNBblJFVldKeWtnZTF4dUlDQWdJQ0FnSUNBdkx5QnNiMmNnWVdOMGFXOXVjeUJwYmlCamIyNXpiMnhsWEc0Z0lDQWdJQ0FnSUdOdmJuTnZiR1V1WjNKdmRYQW9ZV04wYVc5dUxuUjVjR1VwWEc0Z0lDQWdJQ0FnSUdOdmJuTnZiR1V1YVc1bWJ5Z25KV05pWldadmNtVTZKeXdnSjJOdmJHOXlPaUJuY21WbGJpY3NJSE4wWVhSbEtWeHVJQ0FnSUNBZ0lDQmpiMjV6YjJ4bExtbHVabThvSnlWallXTjBhVzl1T2ljc0lDZGpiMnh2Y2pvZ2NtVmtKeXdnWVdOMGFXOXVLVnh1SUNBZ0lDQWdmVnh1SUNBZ0lDQWdYRzRnSUNBZ0lDQXZMeUJWY0dSaGRHVWdjM1JoZEdWY2JpQWdJQ0FnSUhOMFlYUmxJRDBnY21Wa2RXTmxjaWh6ZEdGMFpTd2dZV04wYVc5dUtWeHVJQ0FnSUNBZ0x5OGdVM1JoZEdVZ2JXRnVZV2RsY2lCa2IyVnpiaWQwSUdOaGNtVWdZV0p2ZFhRZ2JtOTBhV05wYm1kY2JpQWdJQ0FnSUM4dklHZGhiV1VnZEc4Z2RYQmtZWFJsSUhOMFlYUmxMaUJKYm5OMFpXRmtJSEpsWkhWalpYSnpYRzRnSUNBZ0lDQXZMeUJ6YUc5MWJHUWdjMlYwSUdScGNuUjVJSE4wWVhSbElHWnZjaUJuWVcxbElHeHZiM0FnZEc5Y2JpQWdJQ0FnSUM4dklIUnlhV2RuWlhJZ2RYQmtZWFJsWEc1Y2JpQWdJQ0FnSUdsbUlDaHdjbTlqWlhOekxtVnVkaTVqYjJSbElEMDlQU0FuUkVWV0p5a2dlMXh1SUNBZ0lDQWdJQ0F2THlCc2IyY2dZV04wYVc5dWN5QnBiaUJqYjI1emIyeGxYRzRnSUNBZ0lDQWdJR052Ym5OdmJHVXVhVzVtYnlnbkpXTmhablJsY2pvbkxDQW5ZMjlzYjNJNklHZHlaV1Z1Snl3Z2MzUmhkR1VwWEc0Z0lDQWdJQ0FnSUdOdmJuTnZiR1V1WjNKdmRYQkZibVFvS1Z4dUlDQWdJQ0FnZlZ4dUlDQWdJSDBzWEc0Z0lDQWdMeW9xWEc0Z0lDQWdJQ29nVW1WMGRYSnVJSFJvWlNCamRYSnlaVzUwSUhOMFlYUmxJR1p2Y2lCbmFYWmxiaUJyWlhsY2JpQWdJQ0FnS2lCVWFHbHpJR2x6SUhSdklHRnNiRzkzSUdGd2NHeHBZMkYwYVc5dUlIUnZJQ2RqYjI1dVpXTjBKeUIwYnlCemRHRjBaVnh1SUNBZ0lDQXFMMXh1SUNBZ0lHZGxkRk4wWVhSbE9pQW9jM1JoZEdWTFpYa3BJRDArSUh0Y2JpQWdJQ0FnSUdsbUlDZ2hjM1JoZEdWTFpYa3BJSHRjYmlBZ0lDQWdJQ0FnY21WMGRYSnVJSE4wWVhSbFhHNGdJQ0FnSUNCOVhHNGdJQ0FnSUNCbGJITmxJSHRjYmlBZ0lDQWdJQ0FnY21WMGRYSnVJSE4wWVhSbFczTjBZWFJsUzJWNVhWeHVJQ0FnSUNBZ2ZWeHVJQ0FnSUgxY2JpQWdmVnh1ZlZ4dVhHNHZMeUJCYzNOMWJXVWdkR2hsSUhKbFkzVmxjazFoY0NCcGN5QmhJR1pzWVhRZ2JXRndJSFJ2SUdGc2JDQnlaV1IxWTJWeWMxeHVaWGh3YjNKMElHWjFibU4wYVc5dUlHTnZiV0pwYm1WU1pXUjFZMlZ5SUNoeVpXUjFZMlZ5VFdGd0lEMGdlMzBzSUhWd1pHRjBaWElwSUh0Y2JseHVJQ0F2THlCSFpXNWxjbUYwWlNCaElHTnZiV0pwYm1Wa0lISmxaSFZqWlhJZ1puVnVZM1JwYjI1Y2JpQWdjbVYwZFhKdUlDaHpkR0YwWlNBOUlIdDlMQ0JoWTNScGIyNGdQU0I3ZlNrZ1BUNGdlMXh1SUNBZ0lHeGxkQ0J1WlhkVGRHRjBaU0E5SUh0OUxGeHVJQ0FnSUNBZ0lDQmthWEowZVV0bGVYTWdQU0JiWFZ4dVhHNGdJQ0FnTHk4Z1UzQnlaV0ZrSUhSb1pTQmhZM1JwYjI0Z2RHOGdZV3hzSUhKbFpIVmpaWEp6SUdsdWMybGtaU0IwYUdVZ1kyOXRZbWx1WldRZ2IyNWxYRzRnSUNBZ1ptOXlJQ2hzWlhRZ2EyVjVJR2x1SUhKbFpIVmpaWEpOWVhBcElIdGNiaUFnSUNBZ0lDOHZJRkJoYzNNZ2RHaGxJSGRvYjJ4bElITjBZWFJsSUdSdmQyNGdZWE1nWVhKbmRXMWxiblFnWm05eVhHNGdJQ0FnSUNBdkx5QmpjbTl6Y3lCemRHRjBaU0JyWlhrZ1lXTmpaWE56WEc0Z0lDQWdJQ0JzWlhRZ2NtVmtkV05sWkZOMFlYUmxJRDBnY21Wa2RXTmxjazFoY0Z0clpYbGRLSE4wWVhSbFcydGxlVjBzSUdGamRHbHZiaXdnYzNSaGRHVXBYRzVjYmlBZ0lDQWdJR2xtSUNoeVpXUjFZMlZrVTNSaGRHVWdJVDA5SUhOMFlYUmxXMnRsZVYwcElIdGNiaUFnSUNBZ0lDQWdaR2x5ZEhsTFpYbHpMbkIxYzJnb2EyVjVLVnh1SUNBZ0lDQWdmVnh1WEc0Z0lDQWdJQ0J1WlhkVGRHRjBaVnRyWlhsZElEMGdjbVZrZFdObFpGTjBZWFJsWEc0Z0lDQWdmVnh1WEc0Z0lDQWdMeThnUTJGc2JDQjFjR1JoZEdVZ1puVnVZM1JwYjI0Z1ptOXlJR1ZoWTJnZ2NtVmtkV05sWkNCemRHRjBaVnh1SUNBZ0lIVndaR0YwWlhJb2JtVjNVM1JoZEdVc0lHUnBjblI1UzJWNWN5bGNibHh1SUNBZ0lDOHZJR1JwY25SNVMyVjVjeTVtYjNKRllXTm9LQ2hrYVhKMGVVdGxlU2tnUFQ0Z2UxeHVJQ0FnSUM4dklDQWdkWEJrWVhSbGNrMWhjRnRrYVhKMGVVdGxlVjBvYm1WM1UzUmhkR1VzSUdScGNuUjVTMlY1S1Z4dUlDQWdJQzh2SUgwcFhHNWNiaUFnSUNCeVpYUjFjbTRnYm1WM1UzUmhkR1ZjYmlBZ2ZWeHVmVnh1WEc1bGVIQnZjblFnWm5WdVkzUnBiMjRnWTI5dFltbHVaVlZ3WkdGMFpYSWdLSFZ3WkdGMFpYSk5ZWEFnUFNCN2ZTd2djbVZ1WkdWeVpYSk5ZWEFnUFNCN2ZTa2dlMXh1SUNBdkx5QkhaVzVsY21GMFpTQmpiMjFpYVc1bFpDQjFjR1JoZEdWeUlHWjFibU4wYVc5dUlHWnZjaUJoYkd3Z2RYQmtZWFJsY25OY2JpQWdjbVYwZFhKdUlDaHpkR0YwWlNBOUlIdDlMQ0JrYVhKMGVVdGxlWE1nUFNCYlhTa2dQVDRnZTF4dUlDQWdJR3hsZENCdVpYZEdhVzVoYkZKbGJtUmxjbE4wWVhSbElEMGdlMzFjYmlBZ0lDQm1iM0lnS0d4bGRDQnJaWGtnYVc0Z2RYQmtZWFJsY2sxaGNDa2dlMXh1SUNBZ0lDQWdMeThnUTI5dGNIVjBaU0IwYUdVZ1ptbHVZV3dnY21WdVpHVnlJSE4wWVhSbElHRnVaQ0J3WVhOeklHbHVkRzhnY21WdVpHVnlaWEpjYmlBZ0lDQWdJSEpsYm1SbGNtVnlUV0Z3VzJ0bGVWMHVabWx1WVd4U1pXNWtaWEpUZEdGMFpTQTlJSFZ3WkdGMFpYSk5ZWEJiYTJWNVhTaHlaVzVrWlhKbGNrMWhjRnRyWlhsZExtWnBibUZzVW1WdVpHVnlVM1JoZEdVc0lITjBZWFJsTENCa2FYSjBlVXRsZVhNcFhHNGdJQ0FnZlZ4dUlDQjlYRzU5WEc1Y2JseHVYRzR2THlCWFJVSlFRVU5MSUVaUFQxUkZVaUF2TDF4dUx5OGdMaTl6Y21NdmMzUmhkR1ZOWVc1aFoyVnlMbXB6SWwwc0luTnZkWEpqWlZKdmIzUWlPaUlpZlE9PVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vZGlzdC9nYW11eC5qc1xuLy8gbW9kdWxlIGlkID0gMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQge1xuICBMRUZUX0tFWURPV04sXG4gIFJJR0hUX0tFWURPV04sXG4gIFVQX0tFWURPV04sXG4gIERPV05fS0VZRE9XTixcbiAgU0VUX1NOQUtFX0JPRFksXG4gIE5FWFRfTEVWRUwsXG4gIEdBTUVfT1ZFUixcbiAgQ1VUX1NOQUtFX0JPRFlcbn0gZnJvbSAnLi9hY3Rpb25zJ1xuaW1wb3J0IHtcbiAgZ2FtZURlZmF1bHQsXG4gIGRpcmVjdGlvblxufSBmcm9tICcuL3RoZW1lJ1xuXG5jb25zdCBpbml0U3RhdGUgPSB7XG4gIC8qKlxuICAgKiBBIGxpbmtlZCBsaXN0IGZvciBzbmFrZSBib2R5XG4gICAqL1xuICBib2R5OiBbXSxcbiAgaXNNb3ZlOiBmYWxzZSxcbiAgc3BlZWQ6IGdhbWVEZWZhdWx0LnNwZWVkLFxuICByb3dzOiBnYW1lRGVmYXVsdC5yb3dzLFxuICBjb2x1bW5zOiBnYW1lRGVmYXVsdC5jb2x1bW5zLFxuICBsZXZlbDogMVxufVxuXG5leHBvcnQgZGVmYXVsdCAoc3RhdGUgPSBpbml0U3RhdGUsIGFjdGlvbikgPT4ge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG5cbiAgICBjYXNlIFNFVF9TTkFLRV9CT0RZOiB7XG4gICAgICBsZXQge1xuICAgICAgICBib2R5LFxuICAgICAgfSA9IGFjdGlvblxuXG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcbiAgICAgICAgYm9keSxcbiAgICAgICAgaXNNb3ZlOiB0cnVlXG4gICAgICB9KVxuICAgIH1cblxuICAgIGNhc2UgVVBfS0VZRE9XTjoge1xuICAgICAgbGV0IGJvZHkgPSBzdGF0ZS5ib2R5LnNsaWNlKClcblxuICAgICAgaWYgKGJvZHlbMF0ucm93ID09PSBib2R5WzFdLnJvdyArIDEpIHtcbiAgICAgICAgLy8gSGl0IGJhY2t3YXJkcyBcbiAgICAgICAgLy8gVGhpcyBzaG91bGQgdHJpZ2dlciBub3RoaW5nXG4gICAgICAgIHJldHVybiBzdGF0ZVxuICAgICAgfVxuXG4gICAgICBib2R5LnJldmVyc2UoKS5yZWR1Y2UoKGZpcnN0LCBzZWNvbmQpID0+IHtcbiAgICAgICAgZmlyc3Qucm93ID0gc2Vjb25kLnJvd1xuICAgICAgICBmaXJzdC5jb2x1bW4gPSBzZWNvbmQuY29sdW1uXG4gICAgICAgIHJldHVybiBzZWNvbmQgXG4gICAgICB9KVxuICAgICAgYm9keS5yZXZlcnNlKClcblxuICAgICAgYm9keVswXS5yb3cgLT0gMVxuXG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcbiAgICAgICAgaXNNb3ZlOiB0cnVlLFxuICAgICAgICBib2R5LFxuICAgICAgICBkaXJlY3Rpb246IGRpcmVjdGlvbi5VUFxuICAgICAgfSlcbiAgICB9XG5cbiAgICBjYXNlIERPV05fS0VZRE9XTjoge1xuICAgICAgbGV0IGJvZHkgPSBzdGF0ZS5ib2R5LnNsaWNlKClcblxuICAgICAgaWYgKGJvZHlbMF0ucm93ID09PSBib2R5WzFdLnJvdyAtIDEpIHtcbiAgICAgICAgLy8gSGl0IGJhY2t3YXJkcyBcbiAgICAgICAgLy8gVGhpcyBzaG91bGQgdHJpZ2dlciBub3RoaW5nXG4gICAgICAgIHJldHVybiBzdGF0ZVxuICAgICAgfVxuXG4gICAgICBib2R5LnJldmVyc2UoKS5yZWR1Y2UoKGZpcnN0LCBzZWNvbmQpID0+IHtcbiAgICAgICAgZmlyc3Qucm93ID0gc2Vjb25kLnJvd1xuICAgICAgICBmaXJzdC5jb2x1bW4gPSBzZWNvbmQuY29sdW1uXG4gICAgICAgIHJldHVybiBzZWNvbmQgXG4gICAgICB9KVxuICAgICAgYm9keS5yZXZlcnNlKClcblxuICAgICAgYm9keVswXS5yb3cgKz0gMVxuXG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcbiAgICAgICAgaXNNb3ZlOiB0cnVlLFxuICAgICAgICBib2R5LFxuICAgICAgICBkaXJlY3Rpb246IGRpcmVjdGlvbi5ET1dOXG4gICAgICB9KVxuICAgIH1cblxuICAgIGNhc2UgTEVGVF9LRVlET1dOOiB7XG4gICAgICBsZXQgYm9keSA9IHN0YXRlLmJvZHkuc2xpY2UoKVxuXG4gICAgICBpZiAoYm9keVswXS5jb2x1bW4gPT09IGJvZHlbMV0uY29sdW1uICsgMSkge1xuICAgICAgICAvLyBIaXQgYmFja3dhcmRzIFxuICAgICAgICAvLyBUaGlzIHNob3VsZCB0cmlnZ2VyIG5vdGhpbmdcbiAgICAgICAgcmV0dXJuIHN0YXRlXG4gICAgICB9XG5cbiAgICAgIGJvZHkucmV2ZXJzZSgpLnJlZHVjZSgoZmlyc3QsIHNlY29uZCkgPT4ge1xuICAgICAgICBmaXJzdC5yb3cgPSBzZWNvbmQucm93XG4gICAgICAgIGZpcnN0LmNvbHVtbiA9IHNlY29uZC5jb2x1bW5cbiAgICAgICAgcmV0dXJuIHNlY29uZCBcbiAgICAgIH0pXG4gICAgICBib2R5LnJldmVyc2UoKVxuXG4gICAgICBib2R5WzBdLmNvbHVtbiAtPSAxXG5cbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xuICAgICAgICBpc01vdmU6IHRydWUsXG4gICAgICAgIGJvZHksXG4gICAgICAgIGRpcmVjdGlvbjogZGlyZWN0aW9uLkxFRlRcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgY2FzZSBSSUdIVF9LRVlET1dOOiB7XG4gICAgICBsZXQgYm9keSA9IHN0YXRlLmJvZHkuc2xpY2UoKVxuXG4gICAgICBpZiAoYm9keVswXS5jb2x1bW4gPT09IGJvZHlbMV0uY29sdW1uIC0gMSkge1xuICAgICAgICAvLyBIaXQgYmFja3dhcmRzIFxuICAgICAgICAvLyBUaGlzIHNob3VsZCB0cmlnZ2VyIG5vdGhpbmdcbiAgICAgICAgcmV0dXJuIHN0YXRlXG4gICAgICB9XG5cbiAgICAgIGJvZHkucmV2ZXJzZSgpLnJlZHVjZSgoZmlyc3QsIHNlY29uZCkgPT4ge1xuICAgICAgICBmaXJzdC5yb3cgPSBzZWNvbmQucm93XG4gICAgICAgIGZpcnN0LmNvbHVtbiA9IHNlY29uZC5jb2x1bW5cbiAgICAgICAgcmV0dXJuIHNlY29uZCBcbiAgICAgIH0pXG4gICAgICBib2R5LnJldmVyc2UoKVxuXG4gICAgICBib2R5WzBdLmNvbHVtbiArPSAxXG5cbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xuICAgICAgICBpc01vdmU6IHRydWUsXG4gICAgICAgIGJvZHksXG4gICAgICAgIGRpcmVjdGlvbjogZGlyZWN0aW9uLlJJR0hUXG4gICAgICB9KVxuICAgIH1cblxuICAgIGNhc2UgTkVYVF9MRVZFTDoge1xuICAgICAgbGV0IGJvZHkgPSBzdGF0ZS5ib2R5LnNsaWNlKCksXG4gICAgICAgICAgaGVhZCA9IGJvZHlbMF0sXG4gICAgICAgICAgaGVhZERpcmVjdGlvbiA9IHN0YXRlLmRpcmVjdGlvblxuXG4gICAgICBpZiAoIWhlYWQpIHtcbiAgICAgICAgcmV0dXJuIHN0YXRlXG4gICAgICB9XG5cbiAgICAgIGJvZHkudW5zaGlmdCh7XG4gICAgICAgIHJvdzogaGVhZERpcmVjdGlvbiA9PT0gZGlyZWN0aW9uLlVQID8gaGVhZC5yb3cgLSAxIDogaGVhZERpcmVjdGlvbiA9PT0gZGlyZWN0aW9uLkRPV04gPyBoZWFkLnJvdyArIDEgOiBoZWFkLnJvdyxcbiAgICAgICAgY29sdW1uOiBoZWFkRGlyZWN0aW9uID09PSBkaXJlY3Rpb24uTEVGVCA/IGhlYWQuY29sdW1uIC0gMSA6IGhlYWREaXJlY3Rpb24gPT09IGRpcmVjdGlvbi5SSUdIVCA/IGhlYWQuY29sdW1uICsgMSA6IGhlYWQuY29sdW1uXG4gICAgICB9KVxuXG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcbiAgICAgICAgYm9keSxcbiAgICAgICAgbGV2ZWw6IHN0YXRlLmxldmVsICsgMVxuICAgICAgfSlcbiAgICB9XG5cbiAgICBjYXNlIEdBTUVfT1ZFUjoge1xuICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XG4gICAgICAgIGlzTW92ZTogZmFsc2VcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgY2FzZSBDVVRfU05BS0VfQk9EWToge1xuICAgICAgbGV0IGJvZHkgPSBzdGF0ZS5ib2R5LnNsaWNlKCksXG4gICAgICAgICAge2N1dEJvZHlJbmRleH0gPSBhY3Rpb25cblxuICAgICAgYm9keS5zcGxpY2UoY3V0Qm9keUluZGV4KVxuXG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcbiAgICAgICAgYm9keSxcbiAgICAgICAgbGV2ZWw6IGN1dEJvZHlJbmRleCAtIDFcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZVxuICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vZGVtby9zbmFrZS9zbmFrZVJlZHVjZXIuanMiLCJpbXBvcnQge1xuICBHQU1FX1JFU0laRSxcbiAgU0VUX1NUQVJfUE9TSVRJT04sXG4gIE5FWFRfTEVWRUwsXG4gIEdBTUVfT1ZFUixcbiAgQ1VUX1NOQUtFX0JPRFlcbn0gZnJvbSAnLi9hY3Rpb25zJ1xuaW1wb3J0IHtnYW1lRGVmYXVsdH0gZnJvbSAnLi90aGVtZSdcblxuY29uc3QgaW5pdFN0YXRlID0ge1xuICB3aWR0aDogLTEsXG4gIGhlaWdodDogLTEsXG4gIHJvd3M6IGdhbWVEZWZhdWx0LnJvd3MsXG4gIGNvbHVtbnM6IGdhbWVEZWZhdWx0LmNvbHVtbnMsXG4gIHN0YXJQb3NpdGlvbjoge1xuICAgIHJvdzogLTEsXG4gICAgY29sdW1uOiAtMVxuICB9LFxuICBsZXZlbDogMSxcbiAgaXNHYW1lb3ZlcjogZmFsc2Vcbn1cblxuZnVuY3Rpb24gaXNPdmVybGFwIChzdGFyUG9zaXRpb24sIHNuYWtlQm9keSkge1xuICByZXR1cm4gIXNuYWtlQm9keS5ldmVyeSgoYm9keUJsb2NrKSA9PiB7XG4gICAgcmV0dXJuIGJvZHlCbG9jay5yb3cgIT09IHN0YXJQb3NpdGlvbi5yb3dcbiAgICAgICAgJiYgYm9keUJsb2NrLmNvbHVtbiAhPT0gc3RhclBvc2l0aW9uLmNvbHVtblxuICB9KVxufVxuXG5leHBvcnQgZGVmYXVsdCAoc3RhdGUgPSBpbml0U3RhdGUsIGFjdGlvbikgPT4ge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG5cbiAgICBjYXNlIEdBTUVfUkVTSVpFOlxuICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XG4gICAgICAgIHdpZHRoOiBhY3Rpb24ud2lkdGgsXG4gICAgICAgIGhlaWdodDogYWN0aW9uLmhlaWdodFxuICAgICAgfSlcblxuICAgIGNhc2UgU0VUX1NUQVJfUE9TSVRJT046XG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcbiAgICAgICAgc3RhclBvc2l0aW9uOiB7XG4gICAgICAgICAgcm93OiBhY3Rpb24ucm93LFxuICAgICAgICAgIGNvbHVtbjogYWN0aW9uLmNvbHVtblxuICAgICAgICB9XG4gICAgICB9KVxuXG4gICAgY2FzZSBORVhUX0xFVkVMOiB7XG4gICAgICBsZXQgc25ha2VCb2R5ID0gYWN0aW9uLnNuYWtlQm9keSxcbiAgICAgICAgICBuZXdTdGFyUG9zaXRpb24gPSB7fVxuXG4gICAgICBkbyB7XG4gICAgICAgIG5ld1N0YXJQb3NpdGlvbi5yb3cgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBzdGF0ZS5yb3dzKVxuICAgICAgICBuZXdTdGFyUG9zaXRpb24uY29sdW1uID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogc3RhdGUuY29sdW1ucylcbiAgICAgIH1cbiAgICAgIHdoaWxlIChpc092ZXJsYXAobmV3U3RhclBvc2l0aW9uLCBzbmFrZUJvZHkpKVxuXG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcbiAgICAgICAgc3RhclBvc2l0aW9uOiBuZXdTdGFyUG9zaXRpb24sXG4gICAgICAgIGxldmVsOiBzdGF0ZS5sZXZlbCArIDFcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgY2FzZSBHQU1FX09WRVI6IHtcbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xuICAgICAgICBpc0dhbWVvdmVyOiB0cnVlXG4gICAgICB9KVxuICAgIH1cblxuICAgIGNhc2UgQ1VUX1NOQUtFX0JPRFk6IHtcbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xuICAgICAgICBsZXZlbDogYWN0aW9uLmN1dEJvZHlJbmRleCAtIDFcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZVxuICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vZGVtby9zbmFrZS93b3JsZFJlZHVjZXIuanMiLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9pbmRleC5zY3NzXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4vLyBQcmVwYXJlIGNzc1RyYW5zZm9ybWF0aW9uXG52YXIgdHJhbnNmb3JtO1xuXG52YXIgb3B0aW9ucyA9IHt9XG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG5cdC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdGlmKCFjb250ZW50LmxvY2Fscykge1xuXHRcdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL2luZGV4LnNjc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vaW5kZXguc2Nzc1wiKTtcblx0XHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXHRcdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHRcdH0pO1xuXHR9XG5cdC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9kZW1vL3NuYWtlL2luZGV4LnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSh1bmRlZmluZWQpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiYm9keSxcXG5odG1sIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIG92ZXJmbG93OiBoaWRkZW47IH1cXG5cXG4jcm9vdCB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTsgfVxcbiAgI3Jvb3QgY2FudmFzIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlOyB9XFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlciEuL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vZGVtby9zbmFrZS9pbmRleC5zY3NzXG4vLyBtb2R1bGUgaWQgPSA2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qXG5cdE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG5cdEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbih1c2VTb3VyY2VNYXApIHtcblx0dmFyIGxpc3QgPSBbXTtcblxuXHQvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cdGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcblx0XHRyZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcblx0XHRcdHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApO1xuXHRcdFx0aWYoaXRlbVsyXSkge1xuXHRcdFx0XHRyZXR1cm4gXCJAbWVkaWEgXCIgKyBpdGVtWzJdICsgXCJ7XCIgKyBjb250ZW50ICsgXCJ9XCI7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRyZXR1cm4gY29udGVudDtcblx0XHRcdH1cblx0XHR9KS5qb2luKFwiXCIpO1xuXHR9O1xuXG5cdC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cdGxpc3QuaSA9IGZ1bmN0aW9uKG1vZHVsZXMsIG1lZGlhUXVlcnkpIHtcblx0XHRpZih0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIilcblx0XHRcdG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIFwiXCJdXTtcblx0XHR2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXHRcdGZvcih2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXHRcdFx0aWYodHlwZW9mIGlkID09PSBcIm51bWJlclwiKVxuXHRcdFx0XHRhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG5cdFx0fVxuXHRcdGZvcihpID0gMDsgaSA8IG1vZHVsZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBpdGVtID0gbW9kdWxlc1tpXTtcblx0XHRcdC8vIHNraXAgYWxyZWFkeSBpbXBvcnRlZCBtb2R1bGVcblx0XHRcdC8vIHRoaXMgaW1wbGVtZW50YXRpb24gaXMgbm90IDEwMCUgcGVyZmVjdCBmb3Igd2VpcmQgbWVkaWEgcXVlcnkgY29tYmluYXRpb25zXG5cdFx0XHQvLyAgd2hlbiBhIG1vZHVsZSBpcyBpbXBvcnRlZCBtdWx0aXBsZSB0aW1lcyB3aXRoIGRpZmZlcmVudCBtZWRpYSBxdWVyaWVzLlxuXHRcdFx0Ly8gIEkgaG9wZSB0aGlzIHdpbGwgbmV2ZXIgb2NjdXIgKEhleSB0aGlzIHdheSB3ZSBoYXZlIHNtYWxsZXIgYnVuZGxlcylcblx0XHRcdGlmKHR5cGVvZiBpdGVtWzBdICE9PSBcIm51bWJlclwiIHx8ICFhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG5cdFx0XHRcdGlmKG1lZGlhUXVlcnkgJiYgIWl0ZW1bMl0pIHtcblx0XHRcdFx0XHRpdGVtWzJdID0gbWVkaWFRdWVyeTtcblx0XHRcdFx0fSBlbHNlIGlmKG1lZGlhUXVlcnkpIHtcblx0XHRcdFx0XHRpdGVtWzJdID0gXCIoXCIgKyBpdGVtWzJdICsgXCIpIGFuZCAoXCIgKyBtZWRpYVF1ZXJ5ICsgXCIpXCI7XG5cdFx0XHRcdH1cblx0XHRcdFx0bGlzdC5wdXNoKGl0ZW0pO1xuXHRcdFx0fVxuXHRcdH1cblx0fTtcblx0cmV0dXJuIGxpc3Q7XG59O1xuXG5mdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCkge1xuXHR2YXIgY29udGVudCA9IGl0ZW1bMV0gfHwgJyc7XG5cdHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblx0aWYgKCFjc3NNYXBwaW5nKSB7XG5cdFx0cmV0dXJuIGNvbnRlbnQ7XG5cdH1cblxuXHRpZiAodXNlU291cmNlTWFwICYmIHR5cGVvZiBidG9hID09PSAnZnVuY3Rpb24nKSB7XG5cdFx0dmFyIHNvdXJjZU1hcHBpbmcgPSB0b0NvbW1lbnQoY3NzTWFwcGluZyk7XG5cdFx0dmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcblx0XHRcdHJldHVybiAnLyojIHNvdXJjZVVSTD0nICsgY3NzTWFwcGluZy5zb3VyY2VSb290ICsgc291cmNlICsgJyAqLydcblx0XHR9KTtcblxuXHRcdHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oJ1xcbicpO1xuXHR9XG5cblx0cmV0dXJuIFtjb250ZW50XS5qb2luKCdcXG4nKTtcbn1cblxuLy8gQWRhcHRlZCBmcm9tIGNvbnZlcnQtc291cmNlLW1hcCAoTUlUKVxuZnVuY3Rpb24gdG9Db21tZW50KHNvdXJjZU1hcCkge1xuXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcblx0dmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSk7XG5cdHZhciBkYXRhID0gJ3NvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LCcgKyBiYXNlNjQ7XG5cblx0cmV0dXJuICcvKiMgJyArIGRhdGEgKyAnICovJztcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXG4vLyBtb2R1bGUgaWQgPSA3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qXG5cdE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG5cdEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5cbnZhciBzdHlsZXNJbkRvbSA9IHt9O1xuXG52YXJcdG1lbW9pemUgPSBmdW5jdGlvbiAoZm4pIHtcblx0dmFyIG1lbW87XG5cblx0cmV0dXJuIGZ1bmN0aW9uICgpIHtcblx0XHRpZiAodHlwZW9mIG1lbW8gPT09IFwidW5kZWZpbmVkXCIpIG1lbW8gPSBmbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuXHRcdHJldHVybiBtZW1vO1xuXHR9O1xufTtcblxudmFyIGlzT2xkSUUgPSBtZW1vaXplKGZ1bmN0aW9uICgpIHtcblx0Ly8gVGVzdCBmb3IgSUUgPD0gOSBhcyBwcm9wb3NlZCBieSBCcm93c2VyaGFja3Ncblx0Ly8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuXHQvLyBUZXN0cyBmb3IgZXhpc3RlbmNlIG9mIHN0YW5kYXJkIGdsb2JhbHMgaXMgdG8gYWxsb3cgc3R5bGUtbG9hZGVyXG5cdC8vIHRvIG9wZXJhdGUgY29ycmVjdGx5IGludG8gbm9uLXN0YW5kYXJkIGVudmlyb25tZW50c1xuXHQvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcblx0cmV0dXJuIHdpbmRvdyAmJiBkb2N1bWVudCAmJiBkb2N1bWVudC5hbGwgJiYgIXdpbmRvdy5hdG9iO1xufSk7XG5cbnZhciBnZXRFbGVtZW50ID0gKGZ1bmN0aW9uIChmbikge1xuXHR2YXIgbWVtbyA9IHt9O1xuXG5cdHJldHVybiBmdW5jdGlvbihzZWxlY3Rvcikge1xuXHRcdGlmICh0eXBlb2YgbWVtb1tzZWxlY3Rvcl0gPT09IFwidW5kZWZpbmVkXCIpIHtcblx0XHRcdG1lbW9bc2VsZWN0b3JdID0gZm4uY2FsbCh0aGlzLCBzZWxlY3Rvcik7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIG1lbW9bc2VsZWN0b3JdXG5cdH07XG59KShmdW5jdGlvbiAodGFyZ2V0KSB7XG5cdHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldClcbn0pO1xuXG52YXIgc2luZ2xldG9uID0gbnVsbDtcbnZhclx0c2luZ2xldG9uQ291bnRlciA9IDA7XG52YXJcdHN0eWxlc0luc2VydGVkQXRUb3AgPSBbXTtcblxudmFyXHRmaXhVcmxzID0gcmVxdWlyZShcIi4vdXJsc1wiKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihsaXN0LCBvcHRpb25zKSB7XG5cdGlmICh0eXBlb2YgREVCVUcgIT09IFwidW5kZWZpbmVkXCIgJiYgREVCVUcpIHtcblx0XHRpZiAodHlwZW9mIGRvY3VtZW50ICE9PSBcIm9iamVjdFwiKSB0aHJvdyBuZXcgRXJyb3IoXCJUaGUgc3R5bGUtbG9hZGVyIGNhbm5vdCBiZSB1c2VkIGluIGEgbm9uLWJyb3dzZXIgZW52aXJvbm1lbnRcIik7XG5cdH1cblxuXHRvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblxuXHRvcHRpb25zLmF0dHJzID0gdHlwZW9mIG9wdGlvbnMuYXR0cnMgPT09IFwib2JqZWN0XCIgPyBvcHRpb25zLmF0dHJzIDoge307XG5cblx0Ly8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG5cdC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2Vcblx0aWYgKCFvcHRpb25zLnNpbmdsZXRvbikgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XG5cblx0Ly8gQnkgZGVmYXVsdCwgYWRkIDxzdHlsZT4gdGFncyB0byB0aGUgPGhlYWQ+IGVsZW1lbnRcblx0aWYgKCFvcHRpb25zLmluc2VydEludG8pIG9wdGlvbnMuaW5zZXJ0SW50byA9IFwiaGVhZFwiO1xuXG5cdC8vIEJ5IGRlZmF1bHQsIGFkZCA8c3R5bGU+IHRhZ3MgdG8gdGhlIGJvdHRvbSBvZiB0aGUgdGFyZ2V0XG5cdGlmICghb3B0aW9ucy5pbnNlcnRBdCkgb3B0aW9ucy5pbnNlcnRBdCA9IFwiYm90dG9tXCI7XG5cblx0dmFyIHN0eWxlcyA9IGxpc3RUb1N0eWxlcyhsaXN0LCBvcHRpb25zKTtcblxuXHRhZGRTdHlsZXNUb0RvbShzdHlsZXMsIG9wdGlvbnMpO1xuXG5cdHJldHVybiBmdW5jdGlvbiB1cGRhdGUgKG5ld0xpc3QpIHtcblx0XHR2YXIgbWF5UmVtb3ZlID0gW107XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGl0ZW0gPSBzdHlsZXNbaV07XG5cdFx0XHR2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXTtcblxuXHRcdFx0ZG9tU3R5bGUucmVmcy0tO1xuXHRcdFx0bWF5UmVtb3ZlLnB1c2goZG9tU3R5bGUpO1xuXHRcdH1cblxuXHRcdGlmKG5ld0xpc3QpIHtcblx0XHRcdHZhciBuZXdTdHlsZXMgPSBsaXN0VG9TdHlsZXMobmV3TGlzdCwgb3B0aW9ucyk7XG5cdFx0XHRhZGRTdHlsZXNUb0RvbShuZXdTdHlsZXMsIG9wdGlvbnMpO1xuXHRcdH1cblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgbWF5UmVtb3ZlLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgZG9tU3R5bGUgPSBtYXlSZW1vdmVbaV07XG5cblx0XHRcdGlmKGRvbVN0eWxlLnJlZnMgPT09IDApIHtcblx0XHRcdFx0Zm9yICh2YXIgaiA9IDA7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKykgZG9tU3R5bGUucGFydHNbal0oKTtcblxuXHRcdFx0XHRkZWxldGUgc3R5bGVzSW5Eb21bZG9tU3R5bGUuaWRdO1xuXHRcdFx0fVxuXHRcdH1cblx0fTtcbn07XG5cbmZ1bmN0aW9uIGFkZFN0eWxlc1RvRG9tIChzdHlsZXMsIG9wdGlvbnMpIHtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgaXRlbSA9IHN0eWxlc1tpXTtcblx0XHR2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXTtcblxuXHRcdGlmKGRvbVN0eWxlKSB7XG5cdFx0XHRkb21TdHlsZS5yZWZzKys7XG5cblx0XHRcdGZvcih2YXIgaiA9IDA7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRkb21TdHlsZS5wYXJ0c1tqXShpdGVtLnBhcnRzW2pdKTtcblx0XHRcdH1cblxuXHRcdFx0Zm9yKDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0ZG9tU3R5bGUucGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdLCBvcHRpb25zKSk7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdHZhciBwYXJ0cyA9IFtdO1xuXG5cdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRwYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0sIG9wdGlvbnMpKTtcblx0XHRcdH1cblxuXHRcdFx0c3R5bGVzSW5Eb21baXRlbS5pZF0gPSB7aWQ6IGl0ZW0uaWQsIHJlZnM6IDEsIHBhcnRzOiBwYXJ0c307XG5cdFx0fVxuXHR9XG59XG5cbmZ1bmN0aW9uIGxpc3RUb1N0eWxlcyAobGlzdCwgb3B0aW9ucykge1xuXHR2YXIgc3R5bGVzID0gW107XG5cdHZhciBuZXdTdHlsZXMgPSB7fTtcblxuXHRmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgaXRlbSA9IGxpc3RbaV07XG5cdFx0dmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG5cdFx0dmFyIGNzcyA9IGl0ZW1bMV07XG5cdFx0dmFyIG1lZGlhID0gaXRlbVsyXTtcblx0XHR2YXIgc291cmNlTWFwID0gaXRlbVszXTtcblx0XHR2YXIgcGFydCA9IHtjc3M6IGNzcywgbWVkaWE6IG1lZGlhLCBzb3VyY2VNYXA6IHNvdXJjZU1hcH07XG5cblx0XHRpZighbmV3U3R5bGVzW2lkXSkgc3R5bGVzLnB1c2gobmV3U3R5bGVzW2lkXSA9IHtpZDogaWQsIHBhcnRzOiBbcGFydF19KTtcblx0XHRlbHNlIG5ld1N0eWxlc1tpZF0ucGFydHMucHVzaChwYXJ0KTtcblx0fVxuXG5cdHJldHVybiBzdHlsZXM7XG59XG5cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudCAob3B0aW9ucywgc3R5bGUpIHtcblx0dmFyIHRhcmdldCA9IGdldEVsZW1lbnQob3B0aW9ucy5pbnNlcnRJbnRvKVxuXG5cdGlmICghdGFyZ2V0KSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnRJbnRvJyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG5cdH1cblxuXHR2YXIgbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AgPSBzdHlsZXNJbnNlcnRlZEF0VG9wW3N0eWxlc0luc2VydGVkQXRUb3AubGVuZ3RoIC0gMV07XG5cblx0aWYgKG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwidG9wXCIpIHtcblx0XHRpZiAoIWxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wKSB7XG5cdFx0XHR0YXJnZXQuaW5zZXJ0QmVmb3JlKHN0eWxlLCB0YXJnZXQuZmlyc3RDaGlsZCk7XG5cdFx0fSBlbHNlIGlmIChsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcC5uZXh0U2libGluZykge1xuXHRcdFx0dGFyZ2V0Lmluc2VydEJlZm9yZShzdHlsZSwgbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AubmV4dFNpYmxpbmcpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuXHRcdH1cblx0XHRzdHlsZXNJbnNlcnRlZEF0VG9wLnB1c2goc3R5bGUpO1xuXHR9IGVsc2UgaWYgKG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwiYm90dG9tXCIpIHtcblx0XHR0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuXHR9IGVsc2Uge1xuXHRcdHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgdmFsdWUgZm9yIHBhcmFtZXRlciAnaW5zZXJ0QXQnLiBNdXN0IGJlICd0b3AnIG9yICdib3R0b20nLlwiKTtcblx0fVxufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQgKHN0eWxlKSB7XG5cdGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSByZXR1cm4gZmFsc2U7XG5cdHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xuXG5cdHZhciBpZHggPSBzdHlsZXNJbnNlcnRlZEF0VG9wLmluZGV4T2Yoc3R5bGUpO1xuXHRpZihpZHggPj0gMCkge1xuXHRcdHN0eWxlc0luc2VydGVkQXRUb3Auc3BsaWNlKGlkeCwgMSk7XG5cdH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlU3R5bGVFbGVtZW50IChvcHRpb25zKSB7XG5cdHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcblxuXHRvcHRpb25zLmF0dHJzLnR5cGUgPSBcInRleHQvY3NzXCI7XG5cblx0YWRkQXR0cnMoc3R5bGUsIG9wdGlvbnMuYXR0cnMpO1xuXHRpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucywgc3R5bGUpO1xuXG5cdHJldHVybiBzdHlsZTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTGlua0VsZW1lbnQgKG9wdGlvbnMpIHtcblx0dmFyIGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlua1wiKTtcblxuXHRvcHRpb25zLmF0dHJzLnR5cGUgPSBcInRleHQvY3NzXCI7XG5cdG9wdGlvbnMuYXR0cnMucmVsID0gXCJzdHlsZXNoZWV0XCI7XG5cblx0YWRkQXR0cnMobGluaywgb3B0aW9ucy5hdHRycyk7XG5cdGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zLCBsaW5rKTtcblxuXHRyZXR1cm4gbGluaztcbn1cblxuZnVuY3Rpb24gYWRkQXR0cnMgKGVsLCBhdHRycykge1xuXHRPYmplY3Qua2V5cyhhdHRycykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG5cdFx0ZWwuc2V0QXR0cmlidXRlKGtleSwgYXR0cnNba2V5XSk7XG5cdH0pO1xufVxuXG5mdW5jdGlvbiBhZGRTdHlsZSAob2JqLCBvcHRpb25zKSB7XG5cdHZhciBzdHlsZSwgdXBkYXRlLCByZW1vdmUsIHJlc3VsdDtcblxuXHQvLyBJZiBhIHRyYW5zZm9ybSBmdW5jdGlvbiB3YXMgZGVmaW5lZCwgcnVuIGl0IG9uIHRoZSBjc3Ncblx0aWYgKG9wdGlvbnMudHJhbnNmb3JtICYmIG9iai5jc3MpIHtcblx0ICAgIHJlc3VsdCA9IG9wdGlvbnMudHJhbnNmb3JtKG9iai5jc3MpO1xuXG5cdCAgICBpZiAocmVzdWx0KSB7XG5cdCAgICBcdC8vIElmIHRyYW5zZm9ybSByZXR1cm5zIGEgdmFsdWUsIHVzZSB0aGF0IGluc3RlYWQgb2YgdGhlIG9yaWdpbmFsIGNzcy5cblx0ICAgIFx0Ly8gVGhpcyBhbGxvd3MgcnVubmluZyBydW50aW1lIHRyYW5zZm9ybWF0aW9ucyBvbiB0aGUgY3NzLlxuXHQgICAgXHRvYmouY3NzID0gcmVzdWx0O1xuXHQgICAgfSBlbHNlIHtcblx0ICAgIFx0Ly8gSWYgdGhlIHRyYW5zZm9ybSBmdW5jdGlvbiByZXR1cm5zIGEgZmFsc3kgdmFsdWUsIGRvbid0IGFkZCB0aGlzIGNzcy5cblx0ICAgIFx0Ly8gVGhpcyBhbGxvd3MgY29uZGl0aW9uYWwgbG9hZGluZyBvZiBjc3Ncblx0ICAgIFx0cmV0dXJuIGZ1bmN0aW9uKCkge1xuXHQgICAgXHRcdC8vIG5vb3Bcblx0ICAgIFx0fTtcblx0ICAgIH1cblx0fVxuXG5cdGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xuXHRcdHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xuXG5cdFx0c3R5bGUgPSBzaW5nbGV0b24gfHwgKHNpbmdsZXRvbiA9IGNyZWF0ZVN0eWxlRWxlbWVudChvcHRpb25zKSk7XG5cblx0XHR1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIGZhbHNlKTtcblx0XHRyZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIHRydWUpO1xuXG5cdH0gZWxzZSBpZiAoXG5cdFx0b2JqLnNvdXJjZU1hcCAmJlxuXHRcdHR5cGVvZiBVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBVUkwuY3JlYXRlT2JqZWN0VVJMID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgVVJMLnJldm9rZU9iamVjdFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIEJsb2IgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCJcblx0KSB7XG5cdFx0c3R5bGUgPSBjcmVhdGVMaW5rRWxlbWVudChvcHRpb25zKTtcblx0XHR1cGRhdGUgPSB1cGRhdGVMaW5rLmJpbmQobnVsbCwgc3R5bGUsIG9wdGlvbnMpO1xuXHRcdHJlbW92ZSA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG5cblx0XHRcdGlmKHN0eWxlLmhyZWYpIFVSTC5yZXZva2VPYmplY3RVUkwoc3R5bGUuaHJlZik7XG5cdFx0fTtcblx0fSBlbHNlIHtcblx0XHRzdHlsZSA9IGNyZWF0ZVN0eWxlRWxlbWVudChvcHRpb25zKTtcblx0XHR1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGUpO1xuXHRcdHJlbW92ZSA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG5cdFx0fTtcblx0fVxuXG5cdHVwZGF0ZShvYmopO1xuXG5cdHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZSAobmV3T2JqKSB7XG5cdFx0aWYgKG5ld09iaikge1xuXHRcdFx0aWYgKFxuXHRcdFx0XHRuZXdPYmouY3NzID09PSBvYmouY3NzICYmXG5cdFx0XHRcdG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmXG5cdFx0XHRcdG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXBcblx0XHRcdCkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdHVwZGF0ZShvYmogPSBuZXdPYmopO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZW1vdmUoKTtcblx0XHR9XG5cdH07XG59XG5cbnZhciByZXBsYWNlVGV4dCA9IChmdW5jdGlvbiAoKSB7XG5cdHZhciB0ZXh0U3RvcmUgPSBbXTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gKGluZGV4LCByZXBsYWNlbWVudCkge1xuXHRcdHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcblxuXHRcdHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuXHR9O1xufSkoKTtcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyAoc3R5bGUsIGluZGV4LCByZW1vdmUsIG9iaikge1xuXHR2YXIgY3NzID0gcmVtb3ZlID8gXCJcIiA6IG9iai5jc3M7XG5cblx0aWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcblx0XHRzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcblx0fSBlbHNlIHtcblx0XHR2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XG5cdFx0dmFyIGNoaWxkTm9kZXMgPSBzdHlsZS5jaGlsZE5vZGVzO1xuXG5cdFx0aWYgKGNoaWxkTm9kZXNbaW5kZXhdKSBzdHlsZS5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XG5cblx0XHRpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcblx0XHRcdHN0eWxlLmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHN0eWxlLmFwcGVuZENoaWxkKGNzc05vZGUpO1xuXHRcdH1cblx0fVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnIChzdHlsZSwgb2JqKSB7XG5cdHZhciBjc3MgPSBvYmouY3NzO1xuXHR2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG5cblx0aWYobWVkaWEpIHtcblx0XHRzdHlsZS5zZXRBdHRyaWJ1dGUoXCJtZWRpYVwiLCBtZWRpYSlcblx0fVxuXG5cdGlmKHN0eWxlLnN0eWxlU2hlZXQpIHtcblx0XHRzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG5cdH0gZWxzZSB7XG5cdFx0d2hpbGUoc3R5bGUuZmlyc3RDaGlsZCkge1xuXHRcdFx0c3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG5cdFx0fVxuXG5cdFx0c3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG5cdH1cbn1cblxuZnVuY3Rpb24gdXBkYXRlTGluayAobGluaywgb3B0aW9ucywgb2JqKSB7XG5cdHZhciBjc3MgPSBvYmouY3NzO1xuXHR2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuXHQvKlxuXHRcdElmIGNvbnZlcnRUb0Fic29sdXRlVXJscyBpc24ndCBkZWZpbmVkLCBidXQgc291cmNlbWFwcyBhcmUgZW5hYmxlZFxuXHRcdGFuZCB0aGVyZSBpcyBubyBwdWJsaWNQYXRoIGRlZmluZWQgdGhlbiBsZXRzIHR1cm4gY29udmVydFRvQWJzb2x1dGVVcmxzXG5cdFx0b24gYnkgZGVmYXVsdC4gIE90aGVyd2lzZSBkZWZhdWx0IHRvIHRoZSBjb252ZXJ0VG9BYnNvbHV0ZVVybHMgb3B0aW9uXG5cdFx0ZGlyZWN0bHlcblx0Ki9cblx0dmFyIGF1dG9GaXhVcmxzID0gb3B0aW9ucy5jb252ZXJ0VG9BYnNvbHV0ZVVybHMgPT09IHVuZGVmaW5lZCAmJiBzb3VyY2VNYXA7XG5cblx0aWYgKG9wdGlvbnMuY29udmVydFRvQWJzb2x1dGVVcmxzIHx8IGF1dG9GaXhVcmxzKSB7XG5cdFx0Y3NzID0gZml4VXJscyhjc3MpO1xuXHR9XG5cblx0aWYgKHNvdXJjZU1hcCkge1xuXHRcdC8vIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzI2NjAzODc1XG5cdFx0Y3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIiArIGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSkgKyBcIiAqL1wiO1xuXHR9XG5cblx0dmFyIGJsb2IgPSBuZXcgQmxvYihbY3NzXSwgeyB0eXBlOiBcInRleHQvY3NzXCIgfSk7XG5cblx0dmFyIG9sZFNyYyA9IGxpbmsuaHJlZjtcblxuXHRsaW5rLmhyZWYgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpO1xuXG5cdGlmKG9sZFNyYykgVVJMLnJldm9rZU9iamVjdFVSTChvbGRTcmMpO1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcbi8vIG1vZHVsZSBpZCA9IDhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXG4vKipcbiAqIFdoZW4gc291cmNlIG1hcHMgYXJlIGVuYWJsZWQsIGBzdHlsZS1sb2FkZXJgIHVzZXMgYSBsaW5rIGVsZW1lbnQgd2l0aCBhIGRhdGEtdXJpIHRvXG4gKiBlbWJlZCB0aGUgY3NzIG9uIHRoZSBwYWdlLiBUaGlzIGJyZWFrcyBhbGwgcmVsYXRpdmUgdXJscyBiZWNhdXNlIG5vdyB0aGV5IGFyZSByZWxhdGl2ZSB0byBhXG4gKiBidW5kbGUgaW5zdGVhZCBvZiB0aGUgY3VycmVudCBwYWdlLlxuICpcbiAqIE9uZSBzb2x1dGlvbiBpcyB0byBvbmx5IHVzZSBmdWxsIHVybHMsIGJ1dCB0aGF0IG1heSBiZSBpbXBvc3NpYmxlLlxuICpcbiAqIEluc3RlYWQsIHRoaXMgZnVuY3Rpb24gXCJmaXhlc1wiIHRoZSByZWxhdGl2ZSB1cmxzIHRvIGJlIGFic29sdXRlIGFjY29yZGluZyB0byB0aGUgY3VycmVudCBwYWdlIGxvY2F0aW9uLlxuICpcbiAqIEEgcnVkaW1lbnRhcnkgdGVzdCBzdWl0ZSBpcyBsb2NhdGVkIGF0IGB0ZXN0L2ZpeFVybHMuanNgIGFuZCBjYW4gYmUgcnVuIHZpYSB0aGUgYG5wbSB0ZXN0YCBjb21tYW5kLlxuICpcbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3MpIHtcbiAgLy8gZ2V0IGN1cnJlbnQgbG9jYXRpb25cbiAgdmFyIGxvY2F0aW9uID0gdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiAmJiB3aW5kb3cubG9jYXRpb247XG5cbiAgaWYgKCFsb2NhdGlvbikge1xuICAgIHRocm93IG5ldyBFcnJvcihcImZpeFVybHMgcmVxdWlyZXMgd2luZG93LmxvY2F0aW9uXCIpO1xuICB9XG5cblx0Ly8gYmxhbmsgb3IgbnVsbD9cblx0aWYgKCFjc3MgfHwgdHlwZW9mIGNzcyAhPT0gXCJzdHJpbmdcIikge1xuXHQgIHJldHVybiBjc3M7XG4gIH1cblxuICB2YXIgYmFzZVVybCA9IGxvY2F0aW9uLnByb3RvY29sICsgXCIvL1wiICsgbG9jYXRpb24uaG9zdDtcbiAgdmFyIGN1cnJlbnREaXIgPSBiYXNlVXJsICsgbG9jYXRpb24ucGF0aG5hbWUucmVwbGFjZSgvXFwvW15cXC9dKiQvLCBcIi9cIik7XG5cblx0Ly8gY29udmVydCBlYWNoIHVybCguLi4pXG5cdC8qXG5cdFRoaXMgcmVndWxhciBleHByZXNzaW9uIGlzIGp1c3QgYSB3YXkgdG8gcmVjdXJzaXZlbHkgbWF0Y2ggYnJhY2tldHMgd2l0aGluXG5cdGEgc3RyaW5nLlxuXG5cdCAvdXJsXFxzKlxcKCAgPSBNYXRjaCBvbiB0aGUgd29yZCBcInVybFwiIHdpdGggYW55IHdoaXRlc3BhY2UgYWZ0ZXIgaXQgYW5kIHRoZW4gYSBwYXJlbnNcblx0ICAgKCAgPSBTdGFydCBhIGNhcHR1cmluZyBncm91cFxuXHQgICAgICg/OiAgPSBTdGFydCBhIG5vbi1jYXB0dXJpbmcgZ3JvdXBcblx0ICAgICAgICAgW14pKF0gID0gTWF0Y2ggYW55dGhpbmcgdGhhdCBpc24ndCBhIHBhcmVudGhlc2VzXG5cdCAgICAgICAgIHwgID0gT1Jcblx0ICAgICAgICAgXFwoICA9IE1hdGNoIGEgc3RhcnQgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICg/OiAgPSBTdGFydCBhbm90aGVyIG5vbi1jYXB0dXJpbmcgZ3JvdXBzXG5cdCAgICAgICAgICAgICAgICAgW14pKF0rICA9IE1hdGNoIGFueXRoaW5nIHRoYXQgaXNuJ3QgYSBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgICAgIHwgID0gT1Jcblx0ICAgICAgICAgICAgICAgICBcXCggID0gTWF0Y2ggYSBzdGFydCBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgICAgICAgICBbXikoXSogID0gTWF0Y2ggYW55dGhpbmcgdGhhdCBpc24ndCBhIHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAgICAgXFwpICA9IE1hdGNoIGEgZW5kIHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICApICA9IEVuZCBHcm91cFxuICAgICAgICAgICAgICAqXFwpID0gTWF0Y2ggYW55dGhpbmcgYW5kIHRoZW4gYSBjbG9zZSBwYXJlbnNcbiAgICAgICAgICApICA9IENsb3NlIG5vbi1jYXB0dXJpbmcgZ3JvdXBcbiAgICAgICAgICAqICA9IE1hdGNoIGFueXRoaW5nXG4gICAgICAgKSAgPSBDbG9zZSBjYXB0dXJpbmcgZ3JvdXBcblx0IFxcKSAgPSBNYXRjaCBhIGNsb3NlIHBhcmVuc1xuXG5cdCAvZ2kgID0gR2V0IGFsbCBtYXRjaGVzLCBub3QgdGhlIGZpcnN0LiAgQmUgY2FzZSBpbnNlbnNpdGl2ZS5cblx0ICovXG5cdHZhciBmaXhlZENzcyA9IGNzcy5yZXBsYWNlKC91cmxcXHMqXFwoKCg/OlteKShdfFxcKCg/OlteKShdK3xcXChbXikoXSpcXCkpKlxcKSkqKVxcKS9naSwgZnVuY3Rpb24oZnVsbE1hdGNoLCBvcmlnVXJsKSB7XG5cdFx0Ly8gc3RyaXAgcXVvdGVzIChpZiB0aGV5IGV4aXN0KVxuXHRcdHZhciB1bnF1b3RlZE9yaWdVcmwgPSBvcmlnVXJsXG5cdFx0XHQudHJpbSgpXG5cdFx0XHQucmVwbGFjZSgvXlwiKC4qKVwiJC8sIGZ1bmN0aW9uKG8sICQxKXsgcmV0dXJuICQxOyB9KVxuXHRcdFx0LnJlcGxhY2UoL14nKC4qKSckLywgZnVuY3Rpb24obywgJDEpeyByZXR1cm4gJDE7IH0pO1xuXG5cdFx0Ly8gYWxyZWFkeSBhIGZ1bGwgdXJsPyBubyBjaGFuZ2Vcblx0XHRpZiAoL14oI3xkYXRhOnxodHRwOlxcL1xcL3xodHRwczpcXC9cXC98ZmlsZTpcXC9cXC9cXC8pL2kudGVzdCh1bnF1b3RlZE9yaWdVcmwpKSB7XG5cdFx0ICByZXR1cm4gZnVsbE1hdGNoO1xuXHRcdH1cblxuXHRcdC8vIGNvbnZlcnQgdGhlIHVybCB0byBhIGZ1bGwgdXJsXG5cdFx0dmFyIG5ld1VybDtcblxuXHRcdGlmICh1bnF1b3RlZE9yaWdVcmwuaW5kZXhPZihcIi8vXCIpID09PSAwKSB7XG5cdFx0ICBcdC8vVE9ETzogc2hvdWxkIHdlIGFkZCBwcm90b2NvbD9cblx0XHRcdG5ld1VybCA9IHVucXVvdGVkT3JpZ1VybDtcblx0XHR9IGVsc2UgaWYgKHVucXVvdGVkT3JpZ1VybC5pbmRleE9mKFwiL1wiKSA9PT0gMCkge1xuXHRcdFx0Ly8gcGF0aCBzaG91bGQgYmUgcmVsYXRpdmUgdG8gdGhlIGJhc2UgdXJsXG5cdFx0XHRuZXdVcmwgPSBiYXNlVXJsICsgdW5xdW90ZWRPcmlnVXJsOyAvLyBhbHJlYWR5IHN0YXJ0cyB3aXRoICcvJ1xuXHRcdH0gZWxzZSB7XG5cdFx0XHQvLyBwYXRoIHNob3VsZCBiZSByZWxhdGl2ZSB0byBjdXJyZW50IGRpcmVjdG9yeVxuXHRcdFx0bmV3VXJsID0gY3VycmVudERpciArIHVucXVvdGVkT3JpZ1VybC5yZXBsYWNlKC9eXFwuXFwvLywgXCJcIik7IC8vIFN0cmlwIGxlYWRpbmcgJy4vJ1xuXHRcdH1cblxuXHRcdC8vIHNlbmQgYmFjayB0aGUgZml4ZWQgdXJsKC4uLilcblx0XHRyZXR1cm4gXCJ1cmwoXCIgKyBKU09OLnN0cmluZ2lmeShuZXdVcmwpICsgXCIpXCI7XG5cdH0pO1xuXG5cdC8vIHNlbmQgYmFjayB0aGUgZml4ZWQgY3NzXG5cdHJldHVybiBmaXhlZENzcztcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL3VybHMuanNcbi8vIG1vZHVsZSBpZCA9IDlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0IGNvbnN0IGdhbWVEZWZhdWx0ID0ge1xuICByb3dzOiAyMCxcbiAgY29sdW1uczogMjAsXG4gIHNwZWVkOiAwLjVcbn1cblxuZXhwb3J0IGNvbnN0IGRpcmVjdGlvbiA9IHtcbiAgVVA6ICdVUCcsXG4gIERPV046ICdET1dOJyxcbiAgTEVGVDogJ0xFRlQnLFxuICBSSUdIVDogJ1JJR0hUJ1xufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2RlbW8vc25ha2UvdGhlbWUuanMiLCJjb25zdCBpbml0RmluYWxSZW5kZXJTdGF0ZSAgPSB7fVxuXG5leHBvcnQgY29uc3Qgd29ybGRMYXllclVwZGF0ZXIgPSAoZmluYWxSZW5kZXJTdGF0ZSA9IGluaXRGaW5hbFJlbmRlclN0YXRlLCBnYW1lU3RhdGUsIGRpcnR5S2V5cykgPT4ge1xuICBpZiAoZGlydHlLZXlzLmluZGV4T2YoJ3dvcmxkJykgPj0gMCkge1xuICAgIGxldCB7XG4gICAgICAgICAgd2lkdGgsXG4gICAgICAgICAgaGVpZ2h0LFxuICAgICAgICAgIHJvd3MsXG4gICAgICAgICAgY29sdW1ucyxcbiAgICAgICAgICBzdGFyUG9zaXRpb24sXG4gICAgICAgICAgbGV2ZWxcbiAgICAgICAgfSA9IGdhbWVTdGF0ZVsnd29ybGQnXSxcbiAgICAgICAgY2VsbFdpZHRoID0gd2lkdGggLyBjb2x1bW5zLFxuICAgICAgICBjZWxsSGVpZ2h0ID0gaGVpZ2h0IC8gcm93c1xuXG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIGZpbmFsUmVuZGVyU3RhdGUsIHtcbiAgICAgIHdpZHRoLFxuICAgICAgaGVpZ2h0LFxuICAgICAgeHM6IEFycmF5KGNvbHVtbnMgKyAxKS5maWxsKDApLm1hcCgoeCwgeEluZGV4KSA9PiB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgeDogeEluZGV4ICogY2VsbFdpZHRoLFxuICAgICAgICAgIHkwOiAwLFxuICAgICAgICAgIHkxOiBoZWlnaHRcbiAgICAgICAgfX0pLFxuICAgICAgeXM6IEFycmF5KHJvd3MgKyAxKS5maWxsKDApLm1hcCgoeSwgeUluZGV4KSA9PiB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgeTogeUluZGV4ICogY2VsbEhlaWdodCxcbiAgICAgICAgICB4MDogMCxcbiAgICAgICAgICB4MTogd2lkdGhcbiAgICAgICAgfX0pLFxuICAgICAgc3Rhcjoge1xuICAgICAgICB4OiBzdGFyUG9zaXRpb24uY29sdW1uICogY2VsbFdpZHRoLFxuICAgICAgICB5OiBzdGFyUG9zaXRpb24ucm93ICogY2VsbEhlaWdodCxcbiAgICAgICAgd2lkdGg6IGNlbGxXaWR0aCxcbiAgICAgICAgaGVpZ2h0OiBjZWxsSGVpZ2h0XG4gICAgICB9LFxuICAgICAgbGV2ZWxcbiAgICB9KVxuICB9XG4gIGVsc2Uge1xuICAgIHJldHVybiBmaW5hbFJlbmRlclN0YXRlXG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IHdvcmxkTGF5ZXJSZW5kZXIgPSAoY2FudmFzLCByZW5kZXJTdGF0ZSwgZmluYWxSZW5kZXJTdGF0ZSwgZHQpID0+IHtcbiAgaWYgKHJlbmRlclN0YXRlICE9PSBmaW5hbFJlbmRlclN0YXRlKSB7XG4gICAgaWYgKCFyZW5kZXJTdGF0ZSkge1xuICAgICAgcmVuZGVyU3RhdGUgPSBmaW5hbFJlbmRlclN0YXRlXG4gICAgfVxuXG4gICAgLy8gTm8gYW5pbWF0aW9uIHRvIHdvcmxkIGxheWVyXG4gICAgcmVuZGVyU3RhdGUgPSBmaW5hbFJlbmRlclN0YXRlXG5cbiAgICBsZXQge1xuICAgICAgd2lkdGgsXG4gICAgICBoZWlnaHQsXG4gICAgICB4cyxcbiAgICAgIHlzLFxuICAgICAgbGV2ZWwsXG4gICAgICBzdGFyXG4gICAgfSA9IHJlbmRlclN0YXRlXG5cbiAgICBsZXQgY29udGV4dCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpXG5cbiAgICBpZiAoY2FudmFzLndpZHRoICE9PSB3aWR0aFxuICAgICAgfHwgY2FudmFzLmhlaWdodCAhPT0gaGVpZ2h0KSB7XG4gICAgICBjYW52YXMud2lkdGggPSB3aWR0aFxuICAgICAgY2FudmFzLmhlaWdodCA9IGhlaWdodFxuICAgICAgLy8gQ2xlYXIgY2FudmFzIG1hbnVhbGx5XG4gICAgICBjb250ZXh0LmNsZWFyUmVjdCgwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpXG4gICAgfVxuXG4gICAgLy8gQ2xlYXIgY2FudmFzIG1hbnVhbGx5IGJlZm9yZSByZWRyYXdcbiAgICBjb250ZXh0LmNsZWFyUmVjdCgwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpXG5cbiAgICBjb250ZXh0LnN0cm9rZVN0eWxlID0gJyNmOWY5ZjknXG4gICAgY29udGV4dC5saW5lV2lkdGggPSAxXG4gICAgY29udGV4dC5iZWdpblBhdGgoKVxuXG4gICAgeHMuZm9yRWFjaCgodmVydGljYWxMaW5lKSA9PiB7XG4gICAgICBjb250ZXh0Lm1vdmVUbyh2ZXJ0aWNhbExpbmUueCwgdmVydGljYWxMaW5lLnkwKVxuICAgICAgY29udGV4dC5saW5lVG8odmVydGljYWxMaW5lLngsIHZlcnRpY2FsTGluZS55MSlcbiAgICAgIGNvbnRleHQuc3Ryb2tlKClcbiAgICB9KVxuXG4gICAgeXMuZm9yRWFjaCgoaG9yaXpvbnRhbExpbmUpID0+IHtcbiAgICAgIGNvbnRleHQubW92ZVRvKGhvcml6b250YWxMaW5lLngwLCBob3Jpem9udGFsTGluZS55KVxuICAgICAgY29udGV4dC5saW5lVG8oaG9yaXpvbnRhbExpbmUueDEsIGhvcml6b250YWxMaW5lLnkpXG4gICAgICBjb250ZXh0LnN0cm9rZSgpXG4gICAgfSlcblxuICAgIC8vIERyYXcgdGV4dFxuICAgIGNvbnRleHQuZmlsbFN0eWxlID0gJyNiZmJmYmYnXG4gICAgY29udGV4dC5mb250ID0gTWF0aC5taW4od2lkdGggLyAyLCBoZWlnaHQgLyAyKSArICdweCBhcmlhbCwgaGVsdmV0aWNhLCBzYW5zLXNlcmlmJ1xuICAgIGNvbnRleHQudGV4dEFsaWduID0gJ2NlbnRlcidcbiAgICBjb250ZXh0LnRleHRCYXNlbGluZSA9ICdtaWRkbGUnXG4gICAgY29udGV4dC5maWxsVGV4dChsZXZlbCwgd2lkdGggLyAyLCBoZWlnaHQgLyAyKVxuXG4gICAgLy8gRHJhdyBzdGFyXG4gICAgY29udGV4dC5maWxsU3R5bGUgPSAnI2ZmYWUwMCdcbiAgICBjb250ZXh0LmZpbGxSZWN0KHN0YXIueCwgc3Rhci55LCBzdGFyLndpZHRoLCBzdGFyLmhlaWdodClcbiAgfVxuXG4gIHJldHVybiByZW5kZXJTdGF0ZVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2RlbW8vc25ha2Uvd29ybGRMYXllci5qcyIsImltcG9ydCBnYW11eCBmcm9tICcuLi8uLi9kaXN0L2dhbXV4J1xuaW1wb3J0IHtcbiAgZGlyZWN0aW9uXG59IGZyb20gJy4vdGhlbWUnXG5pbXBvcnQgeyBcbiAgbGVmdEtleURvd24sXG4gIHJpZ2h0S2V5RG93bixcbiAgdXBLZXlEb3duLFxuICBkb3duS2V5RG93bixcbiAgZ2FtZU92ZXIsXG4gIG5leHRMZXZlbCxcbiAgY3V0U25ha2VCb2R5XG59IGZyb20gJy4vYWN0aW9ucydcblxuLyoqXG4gKiBGdW5jdGlvbiBkZXRlY3QgaGl0IHdvcmxkIGVkZ2VcbiAqL1xuZnVuY3Rpb24gaGl0U3RhciAoc25ha2VIZWFkLCBzdGFyKSB7XG4gIHJldHVybiBzbmFrZUhlYWQueCA8IHN0YXIueCArIHN0YXIud2lkdGhcbiAgICAgICYmIHNuYWtlSGVhZC54ICsgc25ha2VIZWFkLndpZHRoID4gc3Rhci54XG4gICAgICAmJiBzbmFrZUhlYWQueSA8IHN0YXIueSArIHN0YXIuaGVpZ2h0XG4gICAgICAmJiBzbmFrZUhlYWQueSArIHNuYWtlSGVhZC5oZWlnaHQgPiBzdGFyLnlcbn1cblxuZnVuY3Rpb24gaGl0U2VsZkJ5SGVhZCAoc25ha2VCb2R5LCBoZWFkRGlyZWN0aW9uKSB7XG4gIC8vIGxldCBoZWFkID0gc25ha2VCb2R5WzBdXG4gIC8vIGlmICghaGVhZCkge1xuICAvLyAgIHJldHVybiBmYWxzZVxuICAvLyB9XG5cbiAgLy8gcmV0dXJuIHNuYWtlQm9keS5zbGljZSgzKS5zb21lKChib2R5QmxvY2spID0+IHtcbiAgLy8gICBzd2l0Y2ggKGhlYWREaXJlY3Rpb24pIHtcbiAgLy8gICAgIGNhc2UgZGlyZWN0aW9uLlVQOlxuICAvLyAgICAgICByZXR1cm4gaGl0T25Ub3AoaGVhZCwgYm9keUJsb2NrKVxuXG4gIC8vICAgICBjYXNlIGRpcmVjdGlvbi5ET1dOOiB7XG4gIC8vICAgICAgIHJldHVybiBoaXRPbkJvdHRvbShoZWFkLCBib2R5QmxvY2spXG4gIC8vICAgICB9XG5cbiAgLy8gICAgIGNhc2UgZGlyZWN0aW9uLkxFRlQ6IHtcbiAgLy8gICAgICAgcmV0dXJuIGhpdE9uTGVmdChoZWFkLCBib2R5QmxvY2spXG4gIC8vICAgICB9XG5cbiAgLy8gICAgIGNhc2UgZGlyZWN0aW9uLlJJR0hUOiB7XG4gIC8vICAgICAgIHJldHVybiBoaXRPblJpZ2h0KGhlYWQsIGJvZHlCbG9jaylcbiAgLy8gICAgIH1cbiAgLy8gICB9XG4gIC8vIH0pXG5cbiAgcmV0dXJuIGdldEhpdEJvZHlJbmRleChzbmFrZUJvZHksIGhlYWREaXJlY3Rpb24pID49IDBcbn1cblxuZnVuY3Rpb24gaGl0T25SaWdodCAoZm9jdXMsIG90aGVyKSB7XG4gIHJldHVybiBmb2N1cy54ICsgZm9jdXMud2lkdGggPiBvdGhlci54XG4gICAgICAmJiBmb2N1cy54ICsgZm9jdXMud2lkdGggPCBvdGhlci54ICsgb3RoZXIud2lkdGhcbiAgICAgICYmIGZvY3VzLnkgKyBmb2N1cy5oZWlnaHQgPiBvdGhlci55XG4gICAgICAmJiBmb2N1cy55IDwgb3RoZXIueSArIG90aGVyLmhlaWdodFxufVxuXG5mdW5jdGlvbiBoaXRPbkxlZnQgKGZvY3VzLCBvdGhlcikge1xuICByZXR1cm4gZm9jdXMueCA8IG90aGVyLnggKyBvdGhlci53aWR0aFxuICAgICAgJiYgZm9jdXMueCA+IG90aGVyLnhcbiAgICAgICYmIGZvY3VzLnkgKyBmb2N1cy5oZWlnaHQgPiBvdGhlci55XG4gICAgICAmJiBmb2N1cy55IDwgb3RoZXIueSArIG90aGVyLmhlaWdodFxufVxuXG5mdW5jdGlvbiBoaXRPbkJvdHRvbSAoZm9jdXMsIG90aGVyKSB7XG4gIHJldHVybiBmb2N1cy55ICsgZm9jdXMuaGVpZ2h0ID4gb3RoZXIueVxuICAgICAgJiYgZm9jdXMueSArIGZvY3VzLmhlaWdodCA8IG90aGVyLnkgKyBvdGhlci5oZWlnaHRcbiAgICAgICYmIGZvY3VzLnggKyBmb2N1cy53aWR0aCA+IG90aGVyLnhcbiAgICAgICYmIGZvY3VzLnggPCBvdGhlci54ICsgb3RoZXIud2lkdGhcbn1cblxuZnVuY3Rpb24gaGl0T25Ub3AgKGZvY3VzLCBvdGhlcikge1xuICByZXR1cm4gZm9jdXMueSA8IG90aGVyLnkgKyBvdGhlci5oZWlnaHRcbiAgICAgICYmIGZvY3VzLnkgPiBvdGhlci55XG4gICAgICAmJiBmb2N1cy54ICsgZm9jdXMud2lkdGggPiBvdGhlci54XG4gICAgICAmJiBmb2N1cy54IDwgb3RoZXIueCArIG90aGVyLndpZHRoXG59XG5cbmZ1bmN0aW9uIGdldEhpdEJvZHlJbmRleCAoc25ha2VCb2R5LCBoZWFkRGlyZWN0aW9uKSB7XG4gIGxldCBoZWFkID0gc25ha2VCb2R5WzBdXG5cbiAgaWYgKCFoZWFkKSB7XG4gICAgcmV0dXJuIC0xXG4gIH1cblxuICBmb3IgKGxldCBpID0gMzsgaSA8IHNuYWtlQm9keS5sZW5ndGg7IGkrKykge1xuICAgIGxldCBib2R5QmxvY2sgPSBzbmFrZUJvZHlbaV1cblxuICAgIGlmICgoaGVhZERpcmVjdGlvbiA9PT0gZGlyZWN0aW9uLlVQICYmIGhpdE9uVG9wKGhlYWQsIGJvZHlCbG9jaykpXG4gICAgICB8fCAoaGVhZERpcmVjdGlvbiA9PT0gZGlyZWN0aW9uLkRPV04gJiYgaGl0T25Cb3R0b20oaGVhZCwgYm9keUJsb2NrKSlcbiAgICAgIHx8IChoZWFkRGlyZWN0aW9uID09PSBkaXJlY3Rpb24uTEVGVCAmJiBoaXRPbkxlZnQoaGVhZCwgYm9keUJsb2NrKSlcbiAgICAgIHx8IChoZWFkRGlyZWN0aW9uID09PSBkaXJlY3Rpb24uUklHSFQgJiYgaGl0T25SaWdodChoZWFkLCBib2R5QmxvY2spKSkge1xuICAgICAgcmV0dXJuIGlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gLTFcbn1cblxuZnVuY3Rpb24gY3V0U2VsZkJ5SGVhZCAoc25ha2VCb2R5LCBoZWFkRGlyZWN0aW9uKSB7XG4gIGxldCBoaXRCb2R5SW5kZXggPSBnZXRIaXRCb2R5SW5kZXgoc25ha2VCb2R5LCBoZWFkRGlyZWN0aW9uKVxuXG4gIGlmIChoaXRCb2R5SW5kZXggPCAwKSB7XG4gICAgcmV0dXJuIFxuICB9XG5cbiAgZ2FtdXguZGlzcGF0Y2goY3V0U25ha2VCb2R5KGhpdEJvZHlJbmRleCkpXG59XG5cbi8qKlxuICogRnVuY3Rpb24gdG8gZmlsbCBhIGZyZWUgZGltZW5zaW9uIHJlY3RcbiAqIGV4YW1wbGU6XG4gKiBmaWxsRnJlZVJlY3QoY29udGV4dCwgLTEwLCAtMTAsIDIwLCAyMCkgd2lsbCByZW5kZXIgZm91clxuICogcmVjdCBhdCBlYWNoIGNvcm5lciB3aXRoIDEwIHBpeGVsIGRpbWVuc2lvblxuICovXG5mdW5jdGlvbiBmaWxsRnJlZVJlY3QgKGNvbnRleHQsIHgsIHksIHdpZHRoLCBoZWlnaHQpIHtcbiAgbGV0IGNhbnZhc1dpZHRoID0gY29udGV4dC5jYW52YXMud2lkdGgsXG4gICAgICBjYW52YXNIZWlnaHQgPSBjb250ZXh0LmNhbnZhcy5oZWlnaHRcblxuICBpZiAoeCA8IDApIHtcbiAgICBmaWxsRnJlZVJlY3QoY29udGV4dCwgY2FudmFzV2lkdGggKyB4LCB5LCBNYXRoLm1pbigteCwgd2lkdGgpLCBoZWlnaHQpXG4gIH1cblxuICBpZiAoeCA+IGNhbnZhc1dpZHRoIC0gd2lkdGgpIHtcbiAgICBmaWxsRnJlZVJlY3QoY29udGV4dCwgTWF0aC5tYXgoMCwgeCAtIGNhbnZhc1dpZHRoKSwgeSwgd2lkdGggLSBNYXRoLm1heCgwLCBjYW52YXNXaWR0aCAtIHgpLCBoZWlnaHQpXG4gIH1cbiAgXG4gIGlmICh5IDwgMCkge1xuICAgIGZpbGxGcmVlUmVjdChjb250ZXh0LCB4LCBjYW52YXNIZWlnaHQgKyB5LCB3aWR0aCwgTWF0aC5taW4oLXksIGhlaWdodCkpXG4gIH1cblxuICBpZiAoeSA+IGNhbnZhc0hlaWdodCAtIGhlaWdodCkge1xuICAgIGZpbGxGcmVlUmVjdChjb250ZXh0LCB4LCBNYXRoLm1heCgwLCB5IC0gY2FudmFzSGVpZ2h0KSwgd2lkdGgsIGhlaWdodCAtIE1hdGgubWF4KDAsIGNhbnZhc0hlaWdodCAtIHkpKVxuICB9XG5cbiAgY29udGV4dC5maWxsUmVjdCh4LCB5LCB3aWR0aCwgaGVpZ2h0KVxufVxuXG5jb25zdCBpbml0RmluYWxSZW5kZXJTdGF0ZSAgPSB7fVxuXG5leHBvcnQgY29uc3Qgc25ha2VMYXllclVwZGF0ZXIgPSAoZmluYWxSZW5kZXJTdGF0ZSA9IGluaXRGaW5hbFJlbmRlclN0YXRlLCBnYW1lU3RhdGUsIGRpcnR5S2V5cykgPT4ge1xuICBpZiAoZGlydHlLZXlzLmluZGV4T2YoJ3NuYWtlJykgPj0gMCkge1xuICAgIGxldCB7XG4gICAgICAgICAgd2lkdGgsXG4gICAgICAgICAgaGVpZ2h0LFxuICAgICAgICAgIHJvd3MsXG4gICAgICAgICAgY29sdW1ucyxcbiAgICAgICAgICBzdGFyUG9zaXRpb25cbiAgICAgICAgfSA9IGdhbWVTdGF0ZVsnd29ybGQnXSxcbiAgICAgICAge1xuICAgICAgICAgIGJvZHksXG4gICAgICAgICAgZGlyZWN0aW9uLFxuICAgICAgICAgIGlzTW92ZSxcbiAgICAgICAgICBzcGVlZFxuICAgICAgICB9ID0gZ2FtZVN0YXRlWydzbmFrZSddLFxuICAgICAgICBjZWxsV2lkdGggPSB3aWR0aCAvIGNvbHVtbnMsXG4gICAgICAgIGNlbGxIZWlnaHQgPSBoZWlnaHQgLyByb3dzXG5cbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgZmluYWxSZW5kZXJTdGF0ZSwge1xuICAgICAgd2lkdGgsXG4gICAgICBoZWlnaHQsXG4gICAgICBib2R5OiBib2R5Lm1hcCgoYm9keUJsb2NrLCBpbmRleCkgPT4ge1xuICAgICAgICBsZXQgeCA9IGJvZHlCbG9jay5jb2x1bW4gKiBjZWxsV2lkdGgsXG4gICAgICAgICAgICB5ID0gYm9keUJsb2NrLnJvdyAqIGNlbGxIZWlnaHRcblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHg6IGJvZHlCbG9jay5jb2x1bW4gKiBjZWxsV2lkdGgsXG4gICAgICAgICAgeTogYm9keUJsb2NrLnJvdyAqIGNlbGxIZWlnaHQsXG4gICAgICAgICAgd2lkdGg6IGNlbGxXaWR0aCxcbiAgICAgICAgICBoZWlnaHQ6IGNlbGxIZWlnaHRcbiAgICAgICAgICAvLyBjb2x1bW46IGJvZHlCbG9jay5jb2x1bW4sXG4gICAgICAgICAgLy8gcm93OiBib2R5QmxvY2sucm93XG4gICAgICAgIH1cbiAgICAgIH0pLFxuICAgICAgaXNNb3ZlLFxuICAgICAgc3BlZWQsXG4gICAgICBkaXJlY3Rpb24sXG4gICAgICBzdGFyOiB7XG4gICAgICAgIHg6IHN0YXJQb3NpdGlvbi5jb2x1bW4gKiBjZWxsV2lkdGgsXG4gICAgICAgIHk6IHN0YXJQb3NpdGlvbi5yb3cgKiBjZWxsSGVpZ2h0LFxuICAgICAgICB3aWR0aDogY2VsbFdpZHRoLFxuICAgICAgICBoZWlnaHQ6IGNlbGxIZWlnaHRcbiAgICAgIH1cbiAgICB9KVxuICB9XG4gIGVsc2Uge1xuICAgIHJldHVybiBmaW5hbFJlbmRlclN0YXRlXG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IHNuYWtlTGF5ZXJSZW5kZXIgPSAoY2FudmFzLCByZW5kZXJTdGF0ZSwgZmluYWxSZW5kZXJTdGF0ZSwgZHQpID0+IHtcbiAgaWYgKHJlbmRlclN0YXRlICE9PSBmaW5hbFJlbmRlclN0YXRlKSB7XG4gICAgbGV0IGNvbnRleHQgPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKSxcbiAgICAgICAgZGlydHkgPSBmYWxzZVxuXG4gICAgaWYgKCFyZW5kZXJTdGF0ZSkge1xuICAgICAgcmVuZGVyU3RhdGUgPSBmaW5hbFJlbmRlclN0YXRlXG4gICAgICBkaXJ0eSA9IHRydWVcbiAgICB9XG5cbiAgICAvLyBTZXQgdGhpbmdzIHRoYXQgYXJlIG5vdCBhbmltYXRlZFxuICAgIE9iamVjdC5hc3NpZ24ocmVuZGVyU3RhdGUsIHtcbiAgICAgIGRpcmVjdGlvbjogZmluYWxSZW5kZXJTdGF0ZS5kaXJlY3Rpb24sXG4gICAgICBpc01vdmU6IGZpbmFsUmVuZGVyU3RhdGUuaXNNb3ZlLFxuICAgICAgc3BlZWQ6IGZpbmFsUmVuZGVyU3RhdGUuc3BlZWQsXG4gICAgICB3aWR0aDogZmluYWxSZW5kZXJTdGF0ZS53aWR0aCxcbiAgICAgIGhlaWdodDogZmluYWxSZW5kZXJTdGF0ZS5oZWlnaHRcbiAgICB9KVxuXG4gICAgaWYgKGNhbnZhcy53aWR0aCAhPT0gcmVuZGVyU3RhdGUud2lkdGhcbiAgICAgIHx8IGNhbnZhcy5oZWlnaHQgIT09IHJlbmRlclN0YXRlLmhlaWdodCkge1xuICAgICAgY2FudmFzLndpZHRoID0gcmVuZGVyU3RhdGUud2lkdGhcbiAgICAgIGNhbnZhcy5oZWlnaHQgPSByZW5kZXJTdGF0ZS5oZWlnaHRcbiAgICAgIC8vIENsZWFyIGNhbnZhcyBtYW51YWxseVxuICAgICAgY29udGV4dC5jbGVhclJlY3QoMCwgMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KVxuICAgIH1cblxuICAgIGlmICghcmVuZGVyU3RhdGUuaXNNb3ZlKSB7XG4gICAgICAvLyBTbmFrZSBzdG9wcyBtb3ZlXG4gICAgICByZXR1cm4gcmVuZGVyU3RhdGVcbiAgICB9XG5cbiAgICBsZXQge1xuICAgICAgICAgIHNwZWVkLFxuICAgICAgICAgIGJvZHlcbiAgICAgICAgfSA9IHJlbmRlclN0YXRlLFxuICAgICAgICBib2R5RlJTID0gZmluYWxSZW5kZXJTdGF0ZS5ib2R5LFxuICAgICAgICBzdGFyRlJTID0gZmluYWxSZW5kZXJTdGF0ZS5zdGFyXG5cbiAgICAvLyBNYWtlIHN1cmUgYm9keSBhbmQgYm9keUZSUyBhcmUgaW4gc3luY1xuICAgIGlmIChib2R5Lmxlbmd0aCA8IGJvZHlGUlMubGVuZ3RoKSB7XG4gICAgICAvLyBCb2R5IGdyb3dzXG4gICAgICBmb3IgKGxldCBpID0gYm9keS5sZW5ndGg7IGkgPCBib2R5RlJTLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGxldCBib2R5RlJTQmxvY2sgPSBib2R5RlJTW2ldXG4gICAgICAgIGJvZHlbaV0gPSB7XG4gICAgICAgICAgeDogYm9keUZSU0Jsb2NrLngsXG4gICAgICAgICAgeTogYm9keUZSU0Jsb2NrLnksXG4gICAgICAgICAgd2lkdGg6IGJvZHlGUlNCbG9jay53aWR0aCxcbiAgICAgICAgICBoZWlnaHQ6IGJvZHlGUlNCbG9jay5oZWlnaHRcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBlbHNlIGlmIChib2R5Lmxlbmd0aCA+IGJvZHlGUlMubGVuZ3RoKSB7XG4gICAgICAvLyBCb2R5IGdvdCBjdXRcbiAgICAgIGJvZHkuc3BsaWNlKGJvZHlGUlMubGVuZ3RoKVxuICAgIH1cblxuICAgIC8vIFNldCB0aGUgYWN0dWFsIHJlbmRlciBkaW1lbnNpb25zIGZvciB0aGUgc25ha2UgaGVhZFxuICAgIGJvZHkuZm9yRWFjaCgoYm9keUJsb2NrLCBpbmRleCkgPT4ge1xuICAgICAgbGV0IHtcbiAgICAgICAgICAgIHgsXG4gICAgICAgICAgICB5LFxuICAgICAgICAgICAgd2lkdGgsXG4gICAgICAgICAgICBoZWlnaHRcbiAgICAgICAgICB9ID0gYm9keUJsb2NrXG5cbiAgICAgIGlmIChib2R5RlJTW2luZGV4XS54ICE9PSB4KSB7XG4gICAgICAgIGxldCBkaXJlY3Rpb25Vbml0ID0gKGJvZHlGUlNbaW5kZXhdLnggLSB4KSAvIE1hdGguYWJzKGJvZHlGUlNbaW5kZXhdLnggLSB4KSxcbiAgICAgICAgICAgIGRpc3RhbmNlID0gTWF0aC5taW4oc3BlZWQgKiBkdCwgTWF0aC5hYnMoYm9keUZSU1tpbmRleF0ueCAtIHgpKVxuXG4gICAgICAgIGJvZHlCbG9jay54ICs9IGRpc3RhbmNlICogZGlyZWN0aW9uVW5pdFxuICAgICAgICBkaXJ0eSA9IHRydWVcbiAgICAgIH1cblxuICAgICAgaWYgKGJvZHlGUlNbaW5kZXhdLnkgIT09IHkpIHtcbiAgICAgICAgbGV0IGRpcmVjdGlvblVuaXQgPSAoYm9keUZSU1tpbmRleF0ueSAtIHkpIC8gTWF0aC5hYnMoYm9keUZSU1tpbmRleF0ueSAtIHkpLFxuICAgICAgICAgICAgZGlzdGFuY2UgPSBNYXRoLm1pbihzcGVlZCAqIGR0LCBNYXRoLmFicyhib2R5RlJTW2luZGV4XS55IC0geSkpXG4gICAgICAgIFxuICAgICAgICBib2R5QmxvY2sueSArPSBkaXN0YW5jZSAqIGRpcmVjdGlvblVuaXRcbiAgICAgICAgZGlydHkgPSB0cnVlXG4gICAgICB9XG4gICAgfSlcblxuICAgIGlmIChkaXJ0eSkge1xuICAgICAgLy8gV2UgaGF2ZSBzb21ldGluZyB0byByZW5kZXIgaGVyZVxuICAgICAgY29udGV4dC5jbGVhclJlY3QoMCwgMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KVxuXG4gICAgICAvLyBSZW5kZXJcbiAgICAgIGJvZHkuZm9yRWFjaCgoYm9keUJsb2NrLCBpbmRleCkgPT4ge1xuICAgICAgICBpZiAoaW5kZXggPT09IDApIHtcbiAgICAgICAgICBjb250ZXh0LmZpbGxTdHlsZSA9ICcjZWE2OTY5J1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIGNvbnRleHQuZmlsbFN0eWxlID0gJyMzZjNmM2YnXG4gICAgICAgIH1cbiAgICAgICAgZmlsbEZyZWVSZWN0KGNvbnRleHQsIGJvZHlCbG9jay54LCBib2R5QmxvY2sueSwgYm9keUJsb2NrLndpZHRoLCBib2R5QmxvY2suaGVpZ2h0KVxuICAgICAgfSlcblxuICAgICAgLy8gSGl0IGRldGVjdGlvblxuICAgICAgLy8gQ2hlY2sgaWYgc25ha2UgaGVhZCBoaXQgaXRzZWxmXG4gICAgICAvLyBDdXQgdGhlIGJvZHkgaWYgaGl0IGl0c2VsZlxuICAgICAgY3V0U2VsZkJ5SGVhZChib2R5LCByZW5kZXJTdGF0ZS5kaXJlY3Rpb24pXG5cbiAgICAgIC8vIENoZWNrIGlmIHNuYWtlIGhlYWQgaGl0IHN0YXJcbiAgICAgIGxldCBoZWFkID0gYm9keVswXSxcbiAgICAgICAgICBoZWFkWCA9IGhlYWQueCAlIHJlbmRlclN0YXRlLndpZHRoLFxuICAgICAgICAgIGhlYWRZID0gaGVhZC55ICUgcmVuZGVyU3RhdGUuaGVpZ2h0LFxuICAgICAgICAgIGhlYWRQb3NpdGlvbiBcblxuICAgICAgaGVhZFggPSBoZWFkWCA8IDAgPyByZW5kZXJTdGF0ZS53aWR0aCArIGhlYWRYIDogaGVhZFhcbiAgICAgIGhlYWRZID0gaGVhZFkgPCAwID8gcmVuZGVyU3RhdGUuaGVpZ2h0ICsgaGVhZFkgOiBoZWFkWVxuICAgICAgaWYgKGhpdFN0YXIoe1xuICAgICAgICB4OiBoZWFkWCxcbiAgICAgICAgeTogaGVhZFksXG4gICAgICAgIHdpZHRoOiBoZWFkLndpZHRoLFxuICAgICAgICBoZWlnaHQ6IGhlYWQuaGVpZ2h0XG4gICAgICB9LCBzdGFyRlJTKSkge1xuICAgICAgICBnYW11eC5kaXNwYXRjaChuZXh0TGV2ZWwoYm9keUZSUykpXG4gICAgICB9XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgLy8gTm93IHRoYXQgdGhlIGN1cnJlbnQgZmluYWwgcmVuZGVyIHN0YXRlIGhhcyBhcnJpdmVkXG4gICAgICAvLyB3ZSBuZWVkIHRvIHVwZGF0ZSB0aGUgZmluYWwgcmVuZGVyIHN0YXRlXG4gICAgICBzd2l0Y2gocmVuZGVyU3RhdGUuZGlyZWN0aW9uKSB7XG4gICAgICAgIGNhc2UgZGlyZWN0aW9uLlVQOlxuICAgICAgICAgIGdhbXV4LmRpc3BhdGNoKHVwS2V5RG93bigpKVxuICAgICAgICAgIGJyZWFrXG5cbiAgICAgICAgY2FzZSBkaXJlY3Rpb24uRE9XTjpcbiAgICAgICAgICBnYW11eC5kaXNwYXRjaChkb3duS2V5RG93bigpKVxuICAgICAgICAgIGJyZWFrXG5cbiAgICAgICAgY2FzZSBkaXJlY3Rpb24uTEVGVDpcbiAgICAgICAgICBnYW11eC5kaXNwYXRjaChsZWZ0S2V5RG93bigpKVxuICAgICAgICAgIGJyZWFrXG5cbiAgICAgICAgY2FzZSBkaXJlY3Rpb24uUklHSFQ6XG4gICAgICAgICAgZ2FtdXguZGlzcGF0Y2gocmlnaHRLZXlEb3duKCkpXG4gICAgICAgICAgYnJlYWtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgXG4gIHJldHVybiByZW5kZXJTdGF0ZVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2RlbW8vc25ha2Uvc25ha2VMYXllci5qcyJdLCJzb3VyY2VSb290IjoiIn0=