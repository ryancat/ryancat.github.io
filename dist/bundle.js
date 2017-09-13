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
/******/ 	return __webpack_require__(__webpack_require__.s = 12);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var stoneType = exports.stoneType = {
  PLAYER: 'player',
  ENEMY: 'enemy',
  UNKNOWN: 'unknown'
};

var blockType = exports.blockType = {
  BLOCK: 'block',
  TRANSFER_PLAYER: 'transferPlayer',
  TRANSFER_ENEMY: 'transferEnemy'
};

var layerType = exports.layerType = {
  GAME_MAP: 0,
  STAT: 1,
  ENEMY: 2,
  PLAYER: 3
};

var stateKey = exports.stateKey = {
  GAME_MAP: 'gameMap',
  STAT: 'stat',
  ENEMY: 'enemy',
  PLAYER: 'player'
};

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var defaultTheme = exports.defaultTheme = {
  BACKGROUND_COLOR: '#ffce9e',
  PLAYER_COLOR: '#ffffff',
  ENEMY_COLOR: '#000000',
  EDGE_COLOR: '#000000',
  OBSTACLE_BLOCK_COLOR: '#b5b5b5',
  TRANSFER_PLAYER_BLOCK_COLOR: '#ffebd3',
  TRANSFER_ENEMY_BLOCK_COLOR: '#ba985e'
};

var defaultConfig = exports.defaultConfig = {
  enemyPercentage: 0.2,
  blockPercentage: 0.1,
  rows: 10,
  columns: 10,
  playerSpeed: 0.6,
  enemySpeed: 0.6
};

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _stateManager = __webpack_require__(9);

var _reducer = __webpack_require__(14);

var _reducer2 = _interopRequireDefault(_reducer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _stateManager.createStore)(_reducer2.default);

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Position = function () {
  function Position(row, column) {
    _classCallCheck(this, Position);

    this.row = row;
    this.column = column;
  }

  _createClass(Position, [{
    key: "moveRight",
    value: function moveRight() {
      this.column += 1;
    }
  }, {
    key: "moveLeft",
    value: function moveLeft() {
      this.column -= 1;
    }
  }, {
    key: "moveUp",
    value: function moveUp() {
      this.row -= 1;
    }
  }, {
    key: "moveDown",
    value: function moveDown() {
      this.row += 1;
    }
  }, {
    key: "moveTo",
    value: function moveTo(position) {
      this.row = position.row;
      this.column = position.column;
    }
  }]);

  return Position;
}();

exports.default = Position;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var GO_TO_LEVEL = exports.GO_TO_LEVEL = 'GO_TO_LEVEL';
var UPDATE_DIRTY = exports.UPDATE_DIRTY = 'UPDATE_DIRTY';
var RIGHT_KEY_DOWN = exports.RIGHT_KEY_DOWN = 'RIGHT_KEY_DOWN';
var LEFT_KEY_DOWN = exports.LEFT_KEY_DOWN = 'LEFT_KEY_DOWN';
var UP_KEY_DOWN = exports.UP_KEY_DOWN = 'UP_KEY_DOWN';
var DOWN_KEY_DOWN = exports.DOWN_KEY_DOWN = 'DOWN_KEY_DOWN';
var PLAYER_HIT_ENEMY = exports.PLAYER_HIT_ENEMY = 'PLAYER_HIT_ENEMY';
var ENEMY_HIT_ENEMY = exports.ENEMY_HIT_ENEMY = 'ENEMY_HIT_ENEMY';
var ENEMY_HIT_BLOCK = exports.ENEMY_HIT_BLOCK = 'ENEMY_HIT_BLOCK';
var PLAYER_HIT_BLOCK = exports.PLAYER_HIT_BLOCK = 'PLAYER_HIT_BLOCK';
var ENEMY_TO_PLAYER = exports.ENEMY_TO_PLAYER = 'ENEMY_TO_PLAYER';
var PLAYER_TO_ENEMY = exports.PLAYER_TO_ENEMY = 'PLAYER_TO_ENEMY';
var PLAYER_HIT_PLAYER = exports.PLAYER_HIT_PLAYER = 'PLAYER_HIT_PLAYER';

var action = exports.action = {
  goToLevel: function goToLevel(level) {
    var gameEnv = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    return {
      type: GO_TO_LEVEL,
      level: level,
      gameEnv: gameEnv
    };
  },

  updateDirty: function updateDirty(isDirty, stateKey) {
    return {
      type: UPDATE_DIRTY,
      stateKey: stateKey,
      isDirty: isDirty
    };
  },

  rightKeyDown: function rightKeyDown() {
    return {
      type: RIGHT_KEY_DOWN,
      dirty: true
    };
  },

  leftKeyDown: function leftKeyDown() {
    return {
      type: LEFT_KEY_DOWN,
      dirty: true
    };
  },

  upKeyDown: function upKeyDown() {
    return {
      type: UP_KEY_DOWN,
      dirty: true
    };
  },

  downKeyDown: function downKeyDown() {
    return {
      type: DOWN_KEY_DOWN,
      dirty: true
    };
  },

  playerHitEnemy: function playerHitEnemy(enemy, player) {
    return {
      type: PLAYER_HIT_ENEMY,
      enemy: enemy,
      player: player
    };
  },

  enemyHitEnemy: function enemyHitEnemy(enemy1, enemy2) {
    return {
      type: ENEMY_HIT_ENEMY,
      enemy1: enemy1,
      enemy2: enemy2
    };
  },

  enemyHitBlock: function enemyHitBlock(block, enemyRenderState) {
    return {
      type: ENEMY_HIT_BLOCK,
      enemyRenderState: enemyRenderState,
      block: block
    };
  },

  playerHitBlock: function playerHitBlock(block, playerRenderState) {
    return {
      type: PLAYER_HIT_BLOCK,
      playerRenderState: playerRenderState,
      block: block
    };
  },

  enemyToPlayer: function enemyToPlayer(enemyRenderState) {
    return {
      type: ENEMY_TO_PLAYER,
      enemyRenderState: enemyRenderState
    };
  },

  playerToEnemy: function playerToEnemy(playerRenderState) {
    return {
      type: PLAYER_TO_ENEMY,
      playerRenderState: playerRenderState
    };
  },

  playerHitPlayer: function playerHitPlayer(player1, player2) {
    return {
      type: PLAYER_HIT_PLAYER,
      player1: player1,
      player2: player2
    };
  }
};

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _enums = __webpack_require__(0);

var _Position = __webpack_require__(3);

var _Position2 = _interopRequireDefault(_Position);

var _theme = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Block = function Block(props) {
  _classCallCheck(this, Block);

  // TODO: check props has all required properties
  this.position = new _Position2.default(props.row, props.column);
  this.type = _enums.blockType.BLOCK;
  this.fillStyle = _theme.defaultTheme.OBSTACLE_BLOCK_COLOR;
};

exports.default = Block;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var BaseLayer = function () {
  function BaseLayer(container) {
    _classCallCheck(this, BaseLayer);

    if (!container) {
      throw Error('No game map container defined');
    }

    this.container = container;
    this.dirty = false;
    this.state = {};

    this._addCanvasElement();
  }

  _createClass(BaseLayer, [{
    key: '_addCanvasElement',
    value: function _addCanvasElement() {
      this.element = document.createElement('canvas');
      this.context = this.element.getContext('2d');
      this.container.appendChild(this.element);
    }

    // to be overwritten

  }, {
    key: 'update',
    value: function update() {}

    // to be overwritten

  }, {
    key: 'render',
    value: function render() {}
  }]);

  return BaseLayer;
}();

exports.default = BaseLayer;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Stone2 = __webpack_require__(10);

var _Stone3 = _interopRequireDefault(_Stone2);

var _enums = __webpack_require__(0);

var _theme = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Enemy = function (_Stone) {
  _inherits(Enemy, _Stone);

  function Enemy(props) {
    _classCallCheck(this, Enemy);

    var _this = _possibleConstructorReturn(this, (Enemy.__proto__ || Object.getPrototypeOf(Enemy)).call(this, props));

    _this.type = _enums.stoneType.ENEMY;
    _this.fillStyle = _theme.defaultTheme.ENEMY_COLOR;
    // this.setCopycat(props.isCopycat || false)
    return _this;
  }

  // toggleKind () {
  //   this.isCopycat = !this.isCopycat
  // }

  // setCopycat (isCopycat) {
  //   this.isCopycat = isCopycat
  //   this.fillStyle = isCopycat ? defaultTheme.PLAYER_COLOR : defaultTheme.ENEMY_COLOR
  // }


  return Enemy;
}(_Stone3.default);

exports.default = Enemy;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Stone2 = __webpack_require__(10);

var _Stone3 = _interopRequireDefault(_Stone2);

var _enums = __webpack_require__(0);

var _theme = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Player = function (_Stone) {
  _inherits(Player, _Stone);

  function Player(props) {
    _classCallCheck(this, Player);

    var _this = _possibleConstructorReturn(this, (Player.__proto__ || Object.getPrototypeOf(Player)).call(this, props));

    _this.type = _enums.stoneType.PLAYER;
    _this.fillStyle = _theme.defaultTheme.PLAYER_COLOR;
    return _this;
  }

  return Player;
}(_Stone3.default);

exports.default = Player;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createStore = createStore;
exports.combineReducer = combineReducer;
function createStore(reducer) {
  // Init state
  var state = reducer();

  return {
    /**
     * Dispatch action to trigger state changes
     */
    dispatch: function dispatch() {
      var action = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      // Update state
      state = reducer(state, action);
      // State manager doesn't care about noticing
      // game to update state. Instead reducers
      // should set dirty state for game loop to
      // trigger update
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

  return function () {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    for (var key in reducerMap) {
      // Pass the whole state down as argument for
      // cross state key access
      state[key] = reducerMap[key](state[key], action, state);
    }
    return state;
  };
}

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Position = __webpack_require__(3);

var _Position2 = _interopRequireDefault(_Position);

var _enums = __webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Stone = function () {
  function Stone(props) {
    _classCallCheck(this, Stone);

    // TODO: check props has all required properties
    this.position = new _Position2.default(props.row, props.column);
    this.alive = true;
    this.moveHistory = [];
    this.addToMoveHistory(this.position);
  }

  _createClass(Stone, [{
    key: 'addToMoveHistory',
    value: function addToMoveHistory(position) {
      this.moveHistory.push(new _Position2.default(position.row, position.column));
    }
  }, {
    key: 'moveRight',
    value: function moveRight() {
      this.position.moveRight();
      this.addToMoveHistory(this.position);
    }
  }, {
    key: 'moveLeft',
    value: function moveLeft() {
      this.position.moveLeft();
      this.addToMoveHistory(this.position);
    }
  }, {
    key: 'moveUp',
    value: function moveUp() {
      this.position.moveUp();
      this.addToMoveHistory(this.position);
    }
  }, {
    key: 'moveDown',
    value: function moveDown() {
      this.position.moveDown();
      this.addToMoveHistory(this.position);
    }
  }, {
    key: 'moveTo',
    value: function moveTo(position) {
      this.position.moveTo(position);
      this.addToMoveHistory(this.position);
    }
  }, {
    key: 'moveBack',
    value: function moveBack() {
      // Discard the current position
      this.moveHistory.pop();
      this.moveTo(this.moveHistory[this.moveHistory.length - 1]);
    }
  }, {
    key: 'die',
    value: function die() {
      this.alive = false;
    }
  }]);

  return Stone;
}();

exports.default = Stone;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _theme = __webpack_require__(1);

exports.default = function (context) {
  var props = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  // TODO: check props types
  var x = props.x,
      y = props.y,
      radius = props.radius,
      startAngle = props.startAngle,
      endAngle = props.endAngle,
      anticlockwise = props.anticlockwise,
      fillStyle = props.fillStyle;

  if (fillStyle) {
    context.fillStyle = fillStyle;
  }

  context.beginPath();
  context.arc(x, y, radius, startAngle, endAngle, anticlockwise);
  context.fill();
};

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(13);


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _store = __webpack_require__(2);

var _store2 = _interopRequireDefault(_store);

var _action = __webpack_require__(4);

var _gameLoop = __webpack_require__(18);

var _gameLoop2 = _interopRequireDefault(_gameLoop);

var _GameMapLayer = __webpack_require__(19);

var _GameMapLayer2 = _interopRequireDefault(_GameMapLayer);

var _StatLayer = __webpack_require__(20);

var _StatLayer2 = _interopRequireDefault(_StatLayer);

var _PlayerLayer = __webpack_require__(21);

var _PlayerLayer2 = _interopRequireDefault(_PlayerLayer);

var _EnemyLayer = __webpack_require__(22);

var _EnemyLayer2 = _interopRequireDefault(_EnemyLayer);

var _enums = __webpack_require__(0);

__webpack_require__(23);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var rootContainer = document.getElementById('root');
var layers = [];
var keyMap = {};

// Helper function
function isStoneHit(stone1RenderState, stone2RenderState) {
  if (!stone1RenderState.stone.alive || !stone2RenderState.stone.alive) {
    return false;
  }

  var stoneDistance = Math.pow(Math.pow(stone1RenderState.x - stone2RenderState.x, 2) + Math.pow(stone1RenderState.y - stone2RenderState.y, 2), 0.5);
  return stoneDistance < stone1RenderState.radius + stone2RenderState.radius;
}

function checkPlayersHitEnemy(playersRenderState, enemyRenderState) {
  var playersRenderStateLength = playersRenderState.length,
      hitPlayers = [];

  playersRenderState.forEach(function (playerRenderState) {
    if (!playerRenderState.stone.alive || !enemyRenderState.stone.alive) {
      return;
    }

    var stoneDistance = Math.pow(Math.pow(playerRenderState.x - enemyRenderState.x, 2) + Math.pow(playerRenderState.y - enemyRenderState.y, 2), 0.5);

    if (stoneDistance < playerRenderState.radius + enemyRenderState.radius) {
      hitPlayers.push(playerRenderState.stone);
    }
  });

  return hitPlayers;
}

function checkHitBlock(stoneRenderState, gameMapRenderState) {
  var blockRenderStates = gameMapRenderState.blockRenderStates,
      blockRenderStatesLength = blockRenderStates.length;

  for (var i = 0; i < blockRenderStatesLength; i++) {
    var blockRenderState = blockRenderStates[i],
        distanceX = Math.abs(blockRenderState.x + blockRenderState.width / 2 - stoneRenderState.x),
        distanceY = Math.abs(blockRenderState.y + blockRenderState.height / 2 - stoneRenderState.y),
        isHitX = distanceX < blockRenderState.width / 2 + stoneRenderState.radius,
        isHitY = distanceY < blockRenderState.height / 2 + stoneRenderState.radius;

    // TODO: bug - when block at transfer block, it can go into
    // other obstacle blocks
    if (isHitX && isHitY) {
      return blockRenderState.block;
    }
  }

  return null;
}

var game = (0, _gameLoop2.default)({
  fps: 60,

  /**
   * Logic for init the game
   * - Create canvas layers
   * - Init game state
   */
  init: function init() {
    layers[_enums.layerType.GAME_MAP] = new _GameMapLayer2.default(rootContainer);
    layers[_enums.layerType.STAT] = new _StatLayer2.default(rootContainer);
    layers[_enums.layerType.ENEMY] = new _EnemyLayer2.default(rootContainer);
    layers[_enums.layerType.PLAYER] = new _PlayerLayer2.default(rootContainer);

    _store2.default.dispatch(_action.action.goToLevel(1, {
      width: rootContainer.offsetWidth,
      height: rootContainer.offsetHeight
    }));
  },
  /**
   * Update the game state for each frame
   * @param  {Number} dt - The time difference since last run
   */
  update: function update() {
    layers.forEach(function (layer) {
      layer.update();
    });
  },
  /**
   * Render the game layers with current game state 
   */
  render: function render(dt) {
    layers.forEach(function (layer) {
      layer.render(dt);
    });

    // Check the render result to see if there is any collision
    // Check if player hit enemy
    var playersRenderState = layers[_enums.layerType.PLAYER].renderState,
        gameMapRenderState = layers[_enums.layerType.GAME_MAP].renderState,
        enemiesRenderState = layers[_enums.layerType.ENEMY].renderState,
        playerCount = playersRenderState.length,
        enemyCount = enemiesRenderState.length;

    enemiesRenderState.forEach(function (enemyRenderState) {
      var hitPlayers = checkPlayersHitEnemy(playersRenderState, enemyRenderState);

      hitPlayers.forEach(function (hitPlayer) {
        _store2.default.dispatch(_action.action.playerHitEnemy(enemyRenderState.stone, hitPlayer));
      });
    });

    // Check if enemy hit each other
    for (var i = 0; i < enemyCount; i++) {
      for (var j = 0; j < enemyCount; j++) {
        if (i === j) {
          continue;
        }
        if (isStoneHit(enemiesRenderState[i], enemiesRenderState[j])) {
          _store2.default.dispatch(_action.action.enemyHitEnemy(enemiesRenderState[i].stone, enemiesRenderState[j].stone));
        }
      }
    }

    // Check if player hit each other
    for (var _i = 0; _i < playerCount; _i++) {
      for (var _j = 0; _j < playerCount; _j++) {
        if (_i === _j) {
          continue;
        }
        if (isStoneHit(playersRenderState[_i], playersRenderState[_j])) {
          _store2.default.dispatch(_action.action.playerHitPlayer(playersRenderState[_i].stone, playersRenderState[_j].stone));
        }
      }
    }

    // Check if any stone hit obstacle blocks
    enemiesRenderState.forEach(function (enemyRenderState) {
      var hitBlock = checkHitBlock(enemyRenderState, gameMapRenderState);
      if (hitBlock) {
        _store2.default.dispatch(_action.action.enemyHitBlock(hitBlock, enemyRenderState));
      }
    });

    playersRenderState.forEach(function (playerRenderState) {
      var hitBlock = checkHitBlock(playerRenderState, gameMapRenderState);
      if (hitBlock) {
        _store2.default.dispatch(_action.action.playerHitBlock(hitBlock, playerRenderState));
      }
    });
  }
});

// Setup listeners
window.onload = window.onresize = function () {
  _store2.default.dispatch(_action.action.updateDirty(true));
};

document.addEventListener('keydown', function (evt) {
  keyMap[evt.keyCode] = keyMap[evt.keyCode] || {
    keyCode: evt.keyCode
  };
  var keyState = keyMap[evt.keyCode];

  if (!keyState.press) {
    keyState.press = true;
    switch (keyState.keyCode) {
      case 37:
        // Left
        _store2.default.dispatch(_action.action.leftKeyDown());
        break;
      case 38:
        // Up
        _store2.default.dispatch(_action.action.upKeyDown());
        break;
      case 39:
        // Right
        _store2.default.dispatch(_action.action.rightKeyDown());
        break;
      case 40:
        // Down
        _store2.default.dispatch(_action.action.downKeyDown());
        break;
    }
  }
});

document.addEventListener('keyup', function (evt) {
  keyMap[evt.keyCode] = keyMap[evt.keyCode] || {
    keyCode: evt.keyCode
  };
  var keyState = keyMap[evt.keyCode];

  keyState.press = false;
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
              _store2.default.dispatch(_action.action.rightKeyDown());
            } else {
              _store2.default.dispatch(_action.action.leftKeyDown());
            }
          } else {
            // Vertical move
            if (dy > 0) {
              _store2.default.dispatch(_action.action.downKeyDown());
            } else {
              _store2.default.dispatch(_action.action.upKeyDown());
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

game.start();

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _store = __webpack_require__(2);

var _store2 = _interopRequireDefault(_store);

var _stateManager = __webpack_require__(9);

var _enums = __webpack_require__(0);

var _levelGenerator = __webpack_require__(15);

var _levelGenerator2 = _interopRequireDefault(_levelGenerator);

var _Position = __webpack_require__(3);

var _Position2 = _interopRequireDefault(_Position);

var _Player = __webpack_require__(8);

var _Player2 = _interopRequireDefault(_Player);

var _Enemy = __webpack_require__(7);

var _Enemy2 = _interopRequireDefault(_Enemy);

var _action = __webpack_require__(4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*** Player Reducer ***/
var initPlayerState = {};

// Reducers
function playerReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initPlayerState;
  var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var storeState = arguments[2];

  switch (action.type) {
    case _action.GO_TO_LEVEL:
      {
        // ESLint: Need to wrap the case into block to use let/const in ES6
        var _levelGenerator$creat = _levelGenerator2.default.createLevel(action.level),
            playerConfig = _levelGenerator$creat.playerConfig;

        return Object.assign({}, state, {
          rows: playerConfig.rows,
          columns: playerConfig.columns,
          players: playerConfig.players,
          newRenderStates: [],
          // Dirty is true so that we need to update state in layers
          dirty: true
        });
      }

    case _action.UPDATE_DIRTY:
      {
        if (!action.stateKey || action.stateKey === _enums.stateKey.PLAYER) {
          return Object.assign({}, state, {
            dirty: action.isDirty
          });
        } else {
          return state;
        }
      }

    case _action.RIGHT_KEY_DOWN:
      {
        state.players.forEach(function (player) {
          return player.moveRight();
        });
        return Object.assign({}, state, {
          dirty: true
        });
      }

    case _action.DOWN_KEY_DOWN:
      {
        state.players.forEach(function (player) {
          return player.moveDown();
        });
        return Object.assign({}, state, {
          dirty: true
        });
      }

    case _action.LEFT_KEY_DOWN:
      {
        state.players.forEach(function (player) {
          return player.moveLeft();
        });
        return Object.assign({}, state, {
          dirty: true
        });
      }

    case _action.UP_KEY_DOWN:
      {
        state.players.forEach(function (player) {
          return player.moveUp();
        });
        return Object.assign({}, state, {
          dirty: true
        });
      }

    case _action.PLAYER_HIT_ENEMY:
      {
        action.player.die();
        action.enemy.die();
        return Object.assign({}, state, {
          dirty: true
        });
      }

    case _action.PLAYER_HIT_BLOCK:
      {
        var playerRenderState = action.playerRenderState,
            block = action.block,
            player = playerRenderState.stone,
            moveHistory = player.moveHistory;


        if (block.type === _enums.blockType.BLOCK) {
          // Enemy will move back when hitting obstacle blocks
          player.moveBack();
        } else if (block.type === _enums.blockType.TRANSFER_ENEMY) {
          // enemy.setCopycat(true)
          var playerIndex = state.players.indexOf(player);
          state.players.splice(playerIndex, 1);
          _store2.default.dispatch(_action.action.playerToEnemy(playerRenderState));
        }

        return Object.assign({}, state, {
          dirty: true
        });
      }

    case _action.PLAYER_HIT_PLAYER:
      {
        var player1 = action.player1,
            player2 = action.player2;
        // When player hit player, they turn around

        player1.moveBack();
        player2.moveBack();

        return Object.assign({}, state, {
          dirty: true
        });
      }

    case _action.ENEMY_TO_PLAYER:
      {
        var enemyRenderState = action.enemyRenderState,
            enemy = enemyRenderState.stone,
            newPlayer = new _Player2.default({
          row: enemy.position.row,
          column: enemy.position.column
        });


        enemyRenderState.stone = newPlayer;
        state.players.push(newPlayer);
        state.newRenderStates.push(enemyRenderState);
        return Object.assign({}, state, {
          dirty: true
        });
      }

    default:
      return state;
  }
}

/*** Enemy Reducer ***/
var initEnemyState = {};

function enemyReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initEnemyState;
  var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var storeState = arguments[2];

  switch (action.type) {
    case _action.GO_TO_LEVEL:
      {
        // ESLint: Need to wrap the case into block to use let/const in ES6
        var _levelGenerator$creat2 = _levelGenerator2.default.createLevel(action.level),
            enemyConfig = _levelGenerator$creat2.enemyConfig;

        return Object.assign({}, state, {
          rows: enemyConfig.rows,
          columns: enemyConfig.columns,
          enemies: enemyConfig.enemies,
          newRenderStates: [],
          // Dirty is true so that we need to update state in layers
          dirty: true
        });
      }

    case _action.UPDATE_DIRTY:
      {
        if (!action.stateKey || action.stateKey === _enums.stateKey.ENEMY) {
          return Object.assign({}, state, {
            dirty: action.isDirty
          });
        } else {
          return state;
        }
      }

    case _action.RIGHT_KEY_DOWN:
      {
        var blocks = storeState[_enums.stateKey.GAME_MAP].blocks;

        state.enemies.forEach(function (enemy) {
          if (enemy.isCopycat) {
            enemy.moveRight();
          } else {
            enemy.moveLeft();
          }
        });
        return Object.assign({}, state, {
          dirty: true
        });
      }

    case _action.DOWN_KEY_DOWN:
      {
        var _blocks = storeState[_enums.stateKey.GAME_MAP].blocks;

        state.enemies.forEach(function (enemy) {
          if (enemy.isCopycat) {
            enemy.moveDown();
          } else {
            enemy.moveUp();
          }
        });
        return Object.assign({}, state, {
          dirty: true
        });
      }

    case _action.LEFT_KEY_DOWN:
      {
        var _blocks2 = storeState[_enums.stateKey.GAME_MAP].blocks;

        state.enemies.forEach(function (enemy) {
          if (enemy.isCopycat) {
            enemy.moveLeft();
          } else {
            enemy.moveRight();
          }
        });
        return Object.assign({}, state, {
          dirty: true
        });
      }

    case _action.UP_KEY_DOWN:
      {
        var _blocks3 = storeState[_enums.stateKey.GAME_MAP].blocks;

        state.enemies.forEach(function (enemy) {
          if (enemy.isCopycat) {
            enemy.moveUp();
          } else {
            enemy.moveDown();
          }
        });
        return Object.assign({}, state, {
          dirty: true
        });
      }

    case _action.ENEMY_HIT_ENEMY:
      {
        var enemy1 = action.enemy1,
            enemy2 = action.enemy2;
        // When enemy hit enemy, they turn around

        enemy1.moveBack();
        enemy2.moveBack();
        return Object.assign({}, state, {
          dirty: true
        });
      }

    case _action.ENEMY_HIT_BLOCK:
      {
        var enemyRenderState = action.enemyRenderState,
            block = action.block,
            enemy = enemyRenderState.stone,
            moveHistory = enemy.moveHistory;


        if (block.type === _enums.blockType.BLOCK) {
          // Enemy will move back when hitting obstacle blocks
          enemy.moveBack();
        } else if (block.type === _enums.blockType.TRANSFER_PLAYER) {
          // enemy.setCopycat(true)
          var enemyIndex = state.enemies.indexOf(enemy);
          state.enemies.splice(enemyIndex, 1);
          _store2.default.dispatch(_action.action.enemyToPlayer(enemyRenderState));
        }

        return Object.assign({}, state, {
          dirty: true
        });
      }

    case _action.PLAYER_TO_ENEMY:
      {
        var playerRenderState = action.playerRenderState,
            player = playerRenderState.stone,
            newEnemy = new _Enemy2.default({
          row: player.position.row,
          column: player.position.column
        });


        playerRenderState.stone = newEnemy;
        state.enemies.push(newEnemy);
        state.newRenderStates.push(playerRenderState);
        return Object.assign({}, state, {
          dirty: true
        });
      }

    default:
      return state;
  }
}

/*** Map Reducer ***/
var initGameMapState = {};

function gameMapReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initGameMapState;
  var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  switch (action.type) {
    case _action.GO_TO_LEVEL:
      {
        // ESLint: Need to wrap the case into block to use let/const in ES6
        var _levelGenerator$creat3 = _levelGenerator2.default.createLevel(action.level),
            gameMapConfig = _levelGenerator$creat3.gameMapConfig;

        return Object.assign({}, state, {
          rows: gameMapConfig.rows,
          columns: gameMapConfig.columns,
          blocks: gameMapConfig.blocks,
          // Dirty is true so that we need to update state in layers
          dirty: true
        });
      }

    case _action.UPDATE_DIRTY:
      {
        if (!action.stateKey || action.stateKey === _enums.stateKey.GAME_MAP) {
          return Object.assign({}, state, {
            dirty: action.isDirty
          });
        } else {
          return state;
        }
      }

    default:
      return state;
  }
}

/*** Stat Reducer ***/
var initStatState = {};

function statReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initStatState;
  var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  switch (action.type) {
    default:
      return state;
  }
}

var reducerMap = {};
reducerMap[_enums.stateKey.PLAYER] = playerReducer;
reducerMap[_enums.stateKey.ENEMY] = enemyReducer;
reducerMap[_enums.stateKey.GAME_MAP] = gameMapReducer;
reducerMap[_enums.stateKey.STAT] = statReducer;

exports.default = (0, _stateManager.combineReducer)(reducerMap);

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Block = __webpack_require__(5);

var _Block2 = _interopRequireDefault(_Block);

var _TransferEnemyBlock = __webpack_require__(16);

var _TransferEnemyBlock2 = _interopRequireDefault(_TransferEnemyBlock);

var _TransferPlayerBlock = __webpack_require__(17);

var _TransferPlayerBlock2 = _interopRequireDefault(_TransferPlayerBlock);

var _Enemy = __webpack_require__(7);

var _Enemy2 = _interopRequireDefault(_Enemy);

var _Player = __webpack_require__(8);

var _Player2 = _interopRequireDefault(_Player);

var _theme = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var levelCache = [];

exports.default = {
  createLevel: function createLevel(level) {
    var cleanCache = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

    if (levelCache[level] && !cleanCache) {
      return levelCache[level];
    }

    var rows = _theme.defaultConfig.rows,
        columns = _theme.defaultConfig.columns,
        blockPercentage = _theme.defaultConfig.blockPercentage,
        enemyPercentage = _theme.defaultConfig.enemyPercentage,
        playerRow = Math.floor(1 + Math.random() * (rows - 2)),
        playerColumn = Math.floor(1 + Math.random() * (columns - 2)),
        playerConfig = {
      players: [new _Player2.default({
        row: playerRow,
        column: playerColumn,
        rows: rows,
        columns: columns
      })],
      rows: rows,
      columns: columns
    },
        gameMapConfig = {
      blocks: [],
      rows: rows,
      columns: columns
    },
        enemyConfig = {
      enemies: [],
      rows: rows,
      columns: columns

      // Generate transfer player block
    };
    var transferPlayerBlockRow = void 0,
        transferPlayerBlockColumn = void 0;

    do {
      transferPlayerBlockRow = Math.floor(1 + Math.random() * (rows - 2));
      transferPlayerBlockColumn = Math.floor(1 + Math.random() * (columns - 2));
    } while (transferPlayerBlockRow === playerRow && transferPlayerBlockColumn === playerColumn);

    gameMapConfig.blocks.push(new _TransferPlayerBlock2.default({
      row: transferPlayerBlockRow,
      column: transferPlayerBlockColumn,
      rows: rows,
      columns: columns
    }));

    // Generate transfer enemy block
    var transferEnemyBlockRow = void 0,
        transferEnemyBlockColumn = void 0;

    do {
      transferEnemyBlockRow = Math.floor(1 + Math.random() * (rows - 2));
      transferEnemyBlockColumn = Math.floor(1 + Math.random() * (columns - 2));
    } while (transferEnemyBlockRow === playerRow && transferEnemyBlockColumn === playerColumn || transferEnemyBlockRow === transferPlayerBlockRow && transferEnemyBlockColumn === transferPlayerBlockColumn);

    gameMapConfig.blocks.push(new _TransferEnemyBlock2.default({
      row: transferEnemyBlockRow,
      column: transferEnemyBlockColumn,
      rows: rows,
      columns: columns
    }));

    for (var i = 0; i < rows; i++) {
      for (var j = 0; j < columns; j++) {
        // Generate wall blocks
        if (i === 0 || j === 0 || i === rows - 1 || j === columns - 1) {
          gameMapConfig.blocks.push(new _Block2.default({
            row: i,
            column: j,
            rows: rows,
            columns: columns
          }));
          continue;
        }

        if (i === playerRow && j === playerColumn || i === transferPlayerBlockRow && j === transferPlayerBlockColumn || i === transferEnemyBlockRow && j === transferEnemyBlockColumn) {
          continue;
        }

        var randomChance = Math.random();

        if (randomChance < blockPercentage) {
          // 10% chance of getting a block
          gameMapConfig.blocks.push(new _Block2.default({
            row: i,
            column: j,
            rows: rows,
            columns: columns
          }));
        } else if (randomChance < blockPercentage + enemyPercentage) {
          // 30% chance of getting an enemy
          enemyConfig.enemies.push(new _Enemy2.default({
            row: i,
            column: j,
            rows: rows,
            columns: columns
          }));
        }
      }
    }

    levelCache[level] = {
      gameMapConfig: gameMapConfig,
      enemyConfig: enemyConfig,
      playerConfig: playerConfig
    };

    return levelCache[level];
  }
};

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Block2 = __webpack_require__(5);

var _Block3 = _interopRequireDefault(_Block2);

var _enums = __webpack_require__(0);

var _Position = __webpack_require__(3);

var _Position2 = _interopRequireDefault(_Position);

var _theme = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TransferEnemyBlock = function (_Block) {
  _inherits(TransferEnemyBlock, _Block);

  function TransferEnemyBlock(props) {
    _classCallCheck(this, TransferEnemyBlock);

    var _this = _possibleConstructorReturn(this, (TransferEnemyBlock.__proto__ || Object.getPrototypeOf(TransferEnemyBlock)).call(this, props));

    _this.type = _enums.blockType.TRANSFER_ENEMY;
    _this.fillStyle = _theme.defaultTheme.TRANSFER_ENEMY_BLOCK_COLOR;
    return _this;
  }

  return TransferEnemyBlock;
}(_Block3.default);

exports.default = TransferEnemyBlock;

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Block2 = __webpack_require__(5);

var _Block3 = _interopRequireDefault(_Block2);

var _enums = __webpack_require__(0);

var _Position = __webpack_require__(3);

var _Position2 = _interopRequireDefault(_Position);

var _theme = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TransferPlayerBlock = function (_Block) {
  _inherits(TransferPlayerBlock, _Block);

  function TransferPlayerBlock(props) {
    _classCallCheck(this, TransferPlayerBlock);

    var _this = _possibleConstructorReturn(this, (TransferPlayerBlock.__proto__ || Object.getPrototypeOf(TransferPlayerBlock)).call(this, props));

    _this.type = _enums.blockType.TRANSFER_PLAYER;
    _this.fillStyle = _theme.defaultTheme.TRANSFER_PLAYER_BLOCK_COLOR;
    return _this;
  }

  return TransferPlayerBlock;
}(_Block3.default);

exports.default = TransferPlayerBlock;

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var fps = config.fps,
      init = config.init,
      update = config.update,
      render = config.render;


  init();

  var gameLoop = {
    /**
     * The animation loop key for cancel animation
     */
    _animationLoopKey: null,
    /**
     * Accumulator for time-based animation
     */
    _accumulator: 0,
    /**
     * Trigger game loop
     */
    _loop: function _loop(lastTimestamp) {
      gameLoop._animationLoopKey = window.requestAnimationFrame(function () {
        var now = Date.now();
        var dt = 1000 / fps;
        gameLoop._accumulator += now - lastTimestamp;

        if (gameLoop._accumulator >= dt) {
          while (gameLoop._accumulator >= dt) {
            update();
            gameLoop._accumulator -= dt;
          }
          render(dt);
        }
        gameLoop._loop(now);
      });
    },
    /**
     * Start the game loop
     */
    start: function start() {
      gameLoop._loop(Date.now());
    },
    /**
     * End the game loop
     */
    end: function end() {
      window.cancelAnimationFrame(gameLoop.animationLoopKey);
    }
  };

  return gameLoop;
};

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _BaseLayer2 = __webpack_require__(6);

var _BaseLayer3 = _interopRequireDefault(_BaseLayer2);

var _theme = __webpack_require__(1);

var _Block = __webpack_require__(5);

var _Block2 = _interopRequireDefault(_Block);

var _store = __webpack_require__(2);

var _store2 = _interopRequireDefault(_store);

var _action = __webpack_require__(4);

var _enums = __webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var GameMapLayer = function (_BaseLayer) {
  _inherits(GameMapLayer, _BaseLayer);

  function GameMapLayer(container) {
    _classCallCheck(this, GameMapLayer);

    var _this = _possibleConstructorReturn(this, (GameMapLayer.__proto__ || Object.getPrototypeOf(GameMapLayer)).call(this, container));

    _this.type = _enums.layerType.GAME_MAP;
    _this.stateKey = _enums.stateKey.GAME_MAP;
    return _this;
  }

  _createClass(GameMapLayer, [{
    key: 'update',
    value: function update() {
      var newState = _store2.default.getState(this.stateKey);
      // Do nothing if the state is dirty
      if (!newState.dirty) {
        return;
      }

      var columns = newState.columns,
          rows = newState.rows,
          blocks = newState.blocks,
          width = this.container.offsetWidth,
          height = this.container.offsetHeight,
          widthPerBlock = width / columns,
          heightPerBlock = height / rows,
          xLines = [],
          yLines = [],
          blockRenderStates = void 0;


      for (var i = 0; i <= columns; i++) {
        yLines.push({
          x: i * widthPerBlock,
          y0: 0,
          y1: height
        });
      }

      for (var j = 0; j <= rows; j++) {
        xLines.push({
          y: j * heightPerBlock,
          x0: 0,
          x1: width
        });
      }

      blockRenderStates = blocks.map(function (block) {
        return {
          x: block.position.column * widthPerBlock + 1,
          y: block.position.row * heightPerBlock + 1,
          width: widthPerBlock - 2,
          height: heightPerBlock - 2,
          fillStyle: block.fillStyle,
          block: block
        };
      });

      this.finalRenderState = {
        xLines: xLines,
        yLines: yLines,
        blockRenderStates: blockRenderStates

        // We have computed final render state based on new state
      };_store2.default.dispatch(_action.action.updateDirty(false, this.stateKey));
      // Now that we have new final render state, we need to let
      // render function to take care of rendering it
      this.dirty = true;
    }
  }, {
    key: 'render',
    value: function render(dt) {
      var _this2 = this;

      if (!this.dirty) {
        return;
      }

      if (!this.renderState) {
        this.renderState = Object.assign({}, this.finalRenderState);
      }

      // There is no change after initial render for game map
      this.dirty = false;

      var width = this.container.offsetWidth;
      var height = this.container.offsetHeight;
      var _renderState = this.renderState,
          xLines = _renderState.xLines,
          yLines = _renderState.yLines,
          blockRenderStates = _renderState.blockRenderStates;


      this.element.width = width;
      this.element.height = height;
      this.context.fillStyle = _theme.defaultTheme.BACKGROUND_COLOR;
      this.context.fillRect(0, 0, width, height);

      this.context.fillStyle = _theme.defaultTheme.EDGE_COLOR;
      this.context.beginPath();

      xLines.forEach(function (xLine) {
        _this2.context.moveTo(xLine.x0, xLine.y);
        _this2.context.lineTo(xLine.x1, xLine.y);
        _this2.context.stroke();
      });

      yLines.forEach(function (yLine) {
        _this2.context.moveTo(yLine.x, yLine.y0);
        _this2.context.lineTo(yLine.x, yLine.y1);
        _this2.context.stroke();
      });

      blockRenderStates.forEach(function (blockRenderState) {
        _this2.context.fillStyle = blockRenderState.fillStyle;
        _this2.context.fillRect(blockRenderState.x, blockRenderState.y, blockRenderState.width, blockRenderState.height);
      });
    }
  }]);

  return GameMapLayer;
}(_BaseLayer3.default);

exports.default = GameMapLayer;

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _BaseLayer2 = __webpack_require__(6);

var _BaseLayer3 = _interopRequireDefault(_BaseLayer2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var StatLayer = function (_BaseLayer) {
  _inherits(StatLayer, _BaseLayer);

  function StatLayer() {
    _classCallCheck(this, StatLayer);

    return _possibleConstructorReturn(this, (StatLayer.__proto__ || Object.getPrototypeOf(StatLayer)).apply(this, arguments));
  }

  return StatLayer;
}(_BaseLayer3.default);

exports.default = StatLayer;

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _BaseLayer2 = __webpack_require__(6);

var _BaseLayer3 = _interopRequireDefault(_BaseLayer2);

var _theme = __webpack_require__(1);

var _Player = __webpack_require__(8);

var _Player2 = _interopRequireDefault(_Player);

var _store = __webpack_require__(2);

var _store2 = _interopRequireDefault(_store);

var _action = __webpack_require__(4);

var _enums = __webpack_require__(0);

var _arc = __webpack_require__(11);

var _arc2 = _interopRequireDefault(_arc);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PlayerLayer = function (_BaseLayer) {
  _inherits(PlayerLayer, _BaseLayer);

  function PlayerLayer(container) {
    _classCallCheck(this, PlayerLayer);

    var _this = _possibleConstructorReturn(this, (PlayerLayer.__proto__ || Object.getPrototypeOf(PlayerLayer)).call(this, container));

    _this.type = _enums.layerType.PLAYER;
    _this.stateKey = _enums.stateKey.PLAYER;
    return _this;
  }

  _createClass(PlayerLayer, [{
    key: 'update',
    value: function update() {
      var newState = _store2.default.getState(this.stateKey);
      // Do nothing if the state is dirty
      if (!newState.dirty) {
        return;
      }

      var columns = newState.columns,
          rows = newState.rows,
          players = newState.players,
          newRenderStates = newState.newRenderStates,
          width = this.container.offsetWidth,
          height = this.container.offsetHeight,
          widthPerBlock = width / columns,
          heightPerBlock = height / rows;


      this.finalRenderState = players.map(function (player) {
        var _player$position = player.position,
            row = _player$position.row,
            column = _player$position.column,
            centerX = column * widthPerBlock + widthPerBlock / 2,
            centerY = row * heightPerBlock + heightPerBlock / 2,
            radius = Math.min(widthPerBlock, heightPerBlock) * 0.8 / 2;


        return {
          x: column * widthPerBlock + widthPerBlock / 2,
          y: row * heightPerBlock + heightPerBlock / 2,
          radius: Math.min(widthPerBlock, heightPerBlock) * 0.8 / 2,
          stone: player
        };
      });

      while (newRenderStates.length > 0) {
        // Move all new renderstates to current render states
        // This should always run after we have renderState created
        this.renderState.push(newRenderStates.pop());
      }

      // We have computed final render state based on new state
      _store2.default.dispatch(_action.action.updateDirty(false, this.stateKey));
      // Now that we have new final render state, we need to let
      // render function to take care of rendering it
      this.dirty = true;
    }
  }, {
    key: 'render',
    value: function render(dt) {
      var _this2 = this;

      if (!this.dirty) {
        return;
      }

      if (!this.renderState) {
        // Deep clone
        this.renderState = this.finalRenderState.map(function (fstate) {
          return Object.assign({}, fstate);
        });
      } else {
        var cleanCount = 0,
            removedRenderStates = [];

        this.renderState.forEach(function (rstate) {
          var fstate = _this2.finalRenderState.filter(function (state) {
            return state.stone === rstate.stone;
          })[0];
          if (!fstate) {
            removedRenderStates.push(rstate);
            return;
          }

          var deltaDistance = _theme.defaultConfig.enemySpeed * dt,
              totalDistanceX = fstate.x - rstate.x,
              totalDistanceY = fstate.y - rstate.y;

          // Check if we reached final render state
          if (totalDistanceX === 0 && totalDistanceY === 0) {
            cleanCount++;
          }
          _this2.dirty = cleanCount < _this2.renderState.length;

          if (!_this2.dirty) {
            return;
          }

          if (totalDistanceX > 0) {
            rstate.x += Math.min(deltaDistance, Math.abs(totalDistanceX));
          } else {
            rstate.x -= Math.min(deltaDistance, Math.abs(totalDistanceX));
          }

          if (totalDistanceY > 0) {
            rstate.y += Math.min(deltaDistance, Math.abs(totalDistanceY));
          } else {
            rstate.y -= Math.min(deltaDistance, Math.abs(totalDistanceY));
          }
        });

        // Remove from render states
        removedRenderStates.forEach(function (removedRenderState) {
          var removedIndex = _this2.renderState.indexOf(removedRenderState);
          _this2.renderState.splice(removedIndex, 1);
        });
      }

      this.element.width = this.container.offsetWidth;
      this.element.height = this.container.offsetHeight;

      this.renderState.forEach(function (rstate) {
        var player = rstate.stone;
        if (player.alive) {
          (0, _arc2.default)(_this2.context, {
            fillStyle: player.fillStyle,
            x: rstate.x,
            y: rstate.y,
            radius: rstate.radius,
            startAngle: 0,
            endAngle: Math.PI * 2
          });
        }
      });
    }
  }]);

  return PlayerLayer;
}(_BaseLayer3.default);

exports.default = PlayerLayer;

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _BaseLayer2 = __webpack_require__(6);

var _BaseLayer3 = _interopRequireDefault(_BaseLayer2);

var _theme = __webpack_require__(1);

var _Enemy = __webpack_require__(7);

var _Enemy2 = _interopRequireDefault(_Enemy);

var _store = __webpack_require__(2);

var _store2 = _interopRequireDefault(_store);

var _action = __webpack_require__(4);

var _enums = __webpack_require__(0);

var _arc = __webpack_require__(11);

var _arc2 = _interopRequireDefault(_arc);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var EnemyLayer = function (_BaseLayer) {
  _inherits(EnemyLayer, _BaseLayer);

  function EnemyLayer(container) {
    _classCallCheck(this, EnemyLayer);

    var _this = _possibleConstructorReturn(this, (EnemyLayer.__proto__ || Object.getPrototypeOf(EnemyLayer)).call(this, container));

    _this.type = _enums.layerType.ENEMY;
    _this.stateKey = _enums.stateKey.ENEMY;
    _this.enemies = [];
    return _this;
  }

  _createClass(EnemyLayer, [{
    key: 'update',
    value: function update() {
      var newState = _store2.default.getState(this.stateKey);
      // Do nothing if the state is dirty
      if (!newState.dirty) {
        return;
      }

      var columns = newState.columns,
          rows = newState.rows,
          enemies = newState.enemies,
          newRenderStates = newState.newRenderStates,
          width = this.container.offsetWidth,
          height = this.container.offsetHeight,
          widthPerBlock = width / columns,
          heightPerBlock = height / rows;


      this.finalRenderState = enemies.map(function (enemy) {
        var _enemy$position = enemy.position,
            row = _enemy$position.row,
            column = _enemy$position.column,
            centerX = column * widthPerBlock + widthPerBlock / 2,
            centerY = row * heightPerBlock + heightPerBlock / 2,
            radius = Math.min(widthPerBlock, heightPerBlock) * 0.8 / 2;


        return {
          x: column * widthPerBlock + widthPerBlock / 2,
          y: row * heightPerBlock + heightPerBlock / 2,
          radius: Math.min(widthPerBlock, heightPerBlock) * 0.8 / 2,
          stone: enemy
        };
      });

      while (newRenderStates.length > 0) {
        // Move all new renderstates to current render states
        // This should always run after we have renderState created
        this.renderState.push(newRenderStates.pop());
      }

      // We have computed final render state based on new state
      _store2.default.dispatch(_action.action.updateDirty(false, this.stateKey));
      // Now that we have new final render state, we need to let
      // render function to take care of rendering it
      this.dirty = true;
    }
  }, {
    key: 'render',
    value: function render(dt) {
      var _this2 = this;

      if (!this.dirty) {
        return;
      }

      if (!this.renderState) {
        // Deep clone
        this.renderState = this.finalRenderState.map(function (fstate) {
          return Object.assign({}, fstate);
        });
      } else {
        var cleanCount = 0,
            removedRenderStates = [];

        this.renderState.forEach(function (rstate) {
          var fstate = _this2.finalRenderState.filter(function (state) {
            return state.stone === rstate.stone;
          })[0];
          if (!fstate) {
            removedRenderStates.push(rstate);
            return;
          }

          var deltaDistance = _theme.defaultConfig.enemySpeed * dt,
              totalDistanceX = fstate.x - rstate.x,
              totalDistanceY = fstate.y - rstate.y;

          // Check if we reached final render state
          if (totalDistanceX === 0 && totalDistanceY === 0) {
            cleanCount++;
          }
          _this2.dirty = cleanCount < _this2.renderState.length;

          if (!_this2.dirty) {
            return;
          }

          if (totalDistanceX > 0) {
            rstate.x += Math.min(deltaDistance, Math.abs(totalDistanceX));
          } else {
            rstate.x -= Math.min(deltaDistance, Math.abs(totalDistanceX));
          }

          if (totalDistanceY > 0) {
            rstate.y += Math.min(deltaDistance, Math.abs(totalDistanceY));
          } else {
            rstate.y -= Math.min(deltaDistance, Math.abs(totalDistanceY));
          }
        });

        // Remove from render states
        removedRenderStates.forEach(function (removedRenderState) {
          var removedIndex = _this2.renderState.indexOf(removedRenderState);
          _this2.renderState.splice(removedIndex, 1);
        });
      }

      this.element.width = this.container.offsetWidth;
      this.element.height = this.container.offsetHeight;

      this.renderState.forEach(function (rstate) {
        var enemy = rstate.stone;
        if (enemy.alive) {
          (0, _arc2.default)(_this2.context, {
            fillStyle: enemy.fillStyle,
            x: rstate.x,
            y: rstate.y,
            radius: rstate.radius,
            startAngle: 0,
            endAngle: Math.PI * 2
          });
        }
      });
    }
  }]);

  return EnemyLayer;
}(_BaseLayer3.default);

exports.default = EnemyLayer;

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(24);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(26)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../node_modules/css-loader/index.js!../node_modules/sass-loader/lib/loader.js!./main.scss", function() {
			var newContent = require("!!../node_modules/css-loader/index.js!../node_modules/sass-loader/lib/loader.js!./main.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(25)(undefined);
// imports


// module
exports.push([module.i, "body,\nhtml {\n  width: 100%;\n  height: 100%;\n  margin: 0;\n  padding: 0;\n  overflow: hidden; }\n\n#root {\n  position: relative;\n  width: 100%;\n  height: 100%; }\n  #root canvas {\n    position: fixed;\n    left: 0;\n    top: 0; }\n", ""]);

// exports


/***/ }),
/* 25 */
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
/* 26 */
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

var	fixUrls = __webpack_require__(27);

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
/* 27 */
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