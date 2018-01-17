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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Base =
/*#__PURE__*/
function () {
  function Base() {
    _classCallCheck(this, Base);
  }

  _createClass(Base, [{
    key: "fire",
    value: function fire(event) {}
  }, {
    key: "on",
    value: function on() {}
  }]);

  return Base;
}();

module.exports = Base;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(2);

var _App = _interopRequireDefault(__webpack_require__(3));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Styles
// Components
// Bootstrap app
new _App.default();

/***/ }),
/* 2 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Base2 = _interopRequireDefault(__webpack_require__(0));

var _Editor = _interopRequireDefault(__webpack_require__(4));

var _Console = _interopRequireDefault(__webpack_require__(7));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

var App =
/*#__PURE__*/
function (_Base) {
  _inherits(App, _Base);

  function App() {
    var _this;

    _classCallCheck(this, App);

    _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this)); // this.editor = this.createEditor();

    _this.editor = new _Editor.default({
      container: document.getElementById('editor'),
      app: _assertThisInitialized(_this)
    });
    _this.console = new _Console.default({
      editor: _this.editor
    });
    _this.inspectBtn = document.getElementById('inspectBtn'); // Config inspect behavior. 
    // This will trigger browser inspector.
    // let inspectBtn = document.getElementById('inspectBtn');

    _this.listen();

    return _this;
  }

  _createClass(App, [{
    key: "listen",
    value: function listen() {
      var _this2 = this;

      this.inspectBtn.addEventListener('click', function () {
        var editor = _this2.editor.aceEditor,
            lineContents = editor.getValue().split('\n'),
            evalContent; // TODO: Avoid nested eval
        // TODO: Undo and Redo

        _this2.console.startNewLog(); // Add breakpoints


        editor.session.getBreakpoints().forEach(function (breakPointClass, row) {
          if (breakPointClass.indexOf('disabled') === -1) {
            lineContents[row] = 'debugger; /* Line ' + (row + 1) + ' */' + lineContents[row];
          }
        });
        evalContent = '// Start debug your javascript...\ndebugger;\n\n' + lineContents.join('\n'); // hijack console.log

        var oldConsoleLog = console.log;

        console.log = function () {
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this2.console.addLog('> ' + args);

          oldConsoleLog(args);
        }; // It's ok to use eval as this will be a static page


        try {
          _this2.console.addLog('>>> ' + eval(evalContent));
        } catch (e) {
          _this2.console.addError('>>> Your javascript code has error(s)');
        } // Restore console.log


        console.log = oldConsoleLog;
      });
    }
  }]);

  return App;
}(_Base2.default);

;
module.exports = App;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Base2 = _interopRequireDefault(__webpack_require__(0));

var _ToolBox = _interopRequireDefault(__webpack_require__(5));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

var defaultCode = 'function sum (a, b) {\n  return a + b;\n}\n\nsum(1,2);';

var Editor =
/*#__PURE__*/
function (_Base) {
  _inherits(Editor, _Base);

  function Editor() {
    var _this;

    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, Editor);

    _this = _possibleConstructorReturn(this, (Editor.__proto__ || Object.getPrototypeOf(Editor)).call(this));
    _this.breakPointsDisabled = false;
    _this.app = options.app; // Config ace editor

    _this.aceEditor = ace.edit(options.container);

    _this.aceEditor.session.setMode("ace/mode/javascript");

    _this.aceEditor.setTheme("ace/theme/tomorrow"); // Create ToolBox for this editor


    _this.toolBox = new _ToolBox.default({
      editor: _assertThisInitialized(_this)
    });

    _this.restoreCode();

    _this.listen();

    return _this;
  }

  _createClass(Editor, [{
    key: "toggleBreakPoint",
    value: function toggleBreakPoint(row) {
      var breakPoints = this.aceEditor.session.getBreakpoints(),
          className = this.breakPointsDisabled ? 'ace_breakpoint disabled' : 'ace_breakpoint';

      if (breakPoints[row]) {
        this.aceEditor.session.clearBreakpoint(row);
        return false;
      } else {
        this.aceEditor.session.setBreakpoint(row, className);
        return true;
      }
    }
  }, {
    key: "listen",
    value: function listen() {
      var _this2 = this;

      // Add event listener for editor
      this.aceEditor.on('gutterclick', function (e) {
        var row = e.getDocumentPosition().row;
        _this2.toggleBreakPoint(row) ? _this2.toolBox.addToBreakpointLines(row) : _this2.toolBox.removeFromBreakpointLines(row);
        localStorage.setItem('jsinspectorBreakpoints', JSON.stringify(_this2.aceEditor.session.getBreakpoints()));
      }); // Store changes into localStorage

      this.aceEditor.session.on('change', function () {
        localStorage.setItem('jsinspectorContent', _this2.aceEditor.getValue());
      });
    }
  }, {
    key: "restoreCode",
    value: function restoreCode() {
      var _this3 = this;

      // Retrieve Code from localStorage, if any
      var content = localStorage.getItem('jsinspectorContent'),
          breakpoints = JSON.parse(localStorage.getItem('jsinspectorBreakpoints') || '[]');

      if (content) {
        this.aceEditor.setValue(content);
        breakpoints.forEach(function (breakpointClass, row) {
          if (breakpointClass) {
            _this3.toggleBreakPoint(row);

            _this3.toolBox.addToBreakpointLines(row);
          }
        });
      } else {
        this.aceEditor.setValue(defaultCode);
        this.toggleBreakPoint(1);
        this.toolBox.addToBreakpointLines(1);
      }
    }
  }]);

  return Editor;
}(_Base2.default);

module.exports = Editor;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Base2 = _interopRequireDefault(__webpack_require__(0));

var _util = _interopRequireDefault(__webpack_require__(6));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ToolBox =
/*#__PURE__*/
function (_Base) {
  _inherits(ToolBox, _Base);

  function ToolBox() {
    var _this;

    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, ToolBox);

    _this = _possibleConstructorReturn(this, (ToolBox.__proto__ || Object.getPrototypeOf(ToolBox)).call(this));
    _this.disableBreakpointElement = document.querySelector('.toolbarBreakpointBtn.toDisable');
    _this.enableBreakpointElement = document.querySelector('.toolbarBreakpointBtn.toEnable');
    _this.toolboxBreakpointLines = document.querySelector('.toolboxBreakpointLines');
    _this.editor = options.editor;

    _this.listen();

    return _this;
  }

  _createClass(ToolBox, [{
    key: "listen",
    value: function listen() {
      var _this2 = this;

      this.disableBreakpointElement.addEventListener('click', function () {
        var editor = _this2.editor.aceEditor,
            breakPoints = editor.session.getBreakpoints();
        breakPoints.forEach(function (breakPointClass, row) {
          editor.session.setBreakpoint(row, 'ace_breakpoint disabled');
        });
        _this2.editor.breakPointsDisabled = true;

        _this2.toggleBreakpointBtn();
      });
      this.enableBreakpointElement.addEventListener('click', function () {
        var editor = _this2.editor.aceEditor,
            breakPoints = editor.session.getBreakpoints();
        breakPoints.forEach(function (breakPointClass, row) {
          editor.session.setBreakpoint(row, 'ace_breakpoint');
        });
        _this2.editor.breakPointsDisabled = false;

        _this2.toggleBreakpointBtn();
      });
      this.toolboxBreakpointLines.addEventListener('click', function (e) {
        var clickedBreakpointLineElement = _util.default.closestElement(e.target, 'breakpointLine'),
            clickedBreakpointLineCloseIconElement = _util.default.closestElement(e.target, 'breakpointLineClose'),
            editor = _this2.editor.aceEditor,
            clickedRow;

        if (clickedBreakpointLineElement) {
          clickedRow = clickedBreakpointLineElement.dataset.row;

          if (clickedBreakpointLineCloseIconElement) {
            editor.session.clearBreakpoint(clickedRow);

            _this2.removeFromBreakpointLines(clickedRow);
          } else {
            editor.renderer.scrollToRow(clickedRow);
          }
        }
      });
    }
  }, {
    key: "toggleBreakpointBtn",
    value: function toggleBreakpointBtn() {
      if (this.editor.breakPointsDisabled) {
        this.disableBreakpointElement.style.display = 'none';
        this.enableBreakpointElement.style.display = 'block';
      } else {
        this.disableBreakpointElement.style.display = 'block';
        this.enableBreakpointElement.style.display = 'none';
      }
    }
  }, {
    key: "addToBreakpointLines",
    value: function addToBreakpointLines(row) {
      var lineContent = this.editor.aceEditor.session.getLine(row),
          breakpointLineElement = document.createElement('li');
      breakpointLineElement.classList.add('breakpointLine');
      breakpointLineElement.classList.add('breakpointLine-' + row);
      breakpointLineElement.dataset.row = row;
      breakpointLineElement.innerHTML = '<div class="breakpointLineNumber">' + (row + 1) + '</div>' + '<div class="breakpointLineContent"><pre>' + lineContent + '</pre></div>' + '<div class="breakpointLineIcon breakpointLineClose"></div>';
      this.toolboxBreakpointLines.appendChild(breakpointLineElement);
    }
  }, {
    key: "removeFromBreakpointLines",
    value: function removeFromBreakpointLines(row) {
      var lineElementToRemove = this.toolboxBreakpointLines.querySelector('.breakpointLine-' + row);
      this.toolboxBreakpointLines.removeChild(lineElementToRemove);
    }
  }]);

  return ToolBox;
}(_Base2.default);

module.exports = ToolBox;

/***/ }),
/* 6 */
/***/ (function(module, exports) {

var util = {
  closestElement: function closestElement(startElement, className) {
    while (startElement) {
      if (startElement.classList.contains(className)) {
        return startElement;
      }

      startElement = startElement.parentElement;
    }

    return null;
  }
};
module.exports = util;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Base2 = _interopRequireDefault(__webpack_require__(0));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Console =
/*#__PURE__*/
function (_Base) {
  _inherits(Console, _Base);

  function Console() {
    var _this;

    _classCallCheck(this, Console);

    _this = _possibleConstructorReturn(this, (Console.__proto__ || Object.getPrototypeOf(Console)).call(this));
    _this.resultElement = document.getElementById('evalResult');
    return _this;
  }

  _createClass(Console, [{
    key: "addLog",
    value: function addLog(log) {
      this.resultElement.innerHTML += '<pre class="result">' + log + '</pre>';
    }
  }, {
    key: "addError",
    value: function addError(error) {
      this.resultElement.innerHTML += '<pre class="result error">' + error + '</pre>';
    }
  }, {
    key: "clearLog",
    value: function clearLog() {
      this.resultElement.innerHTML = '';
    }
  }, {
    key: "startNewLog",
    value: function startNewLog() {
      var oldLogs = this.resultElement.querySelectorAll('pre.result'),
          needSplitter = false;
      oldLogs.forEach(function (node) {
        if (!node.classList.contains('old')) {
          node.classList.add('old');
          needSplitter = true;
        }
      });

      if (needSplitter) {
        this.resultElement.querySelectorAll('hr').forEach(function (node) {
          node.classList.add('old');
        });
        this.resultElement.innerHTML += '<hr />';
      }
    }
  }]);

  return Console;
}(_Base2.default);

module.exports = Console;

/***/ })
/******/ ]);