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
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _EventBus = _interopRequireDefault(__webpack_require__(14));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// TODO: we only have one global event bus now.
// When the app gets more complicated, it's better
// to have multiple layers of event buses
var _eventBus = new _EventBus.default();
/**
 * The base component that provides fundamental component
 * methods
 * 
 * - Event bus
 */


var Base =
/*#__PURE__*/
function () {
  function Base() {
    _classCallCheck(this, Base);
  }

  _createClass(Base, [{
    key: "fire",
    value: function fire(event) {
      for (var _len = arguments.length, data = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        data[_key - 1] = arguments[_key];
      }

      _eventBus.publish.apply(_eventBus, [event].concat(data));
    }
  }, {
    key: "on",
    value: function on(event, callback) {
      _eventBus.subscribe(event, callback);
    }
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
new _App.default(); // TODO
// 1. missing multiple file menu
// 2. missing test runner
// 3. missing reference to libraries

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

var _Tabs = _interopRequireDefault(__webpack_require__(13));

var _util = _interopRequireDefault(__webpack_require__(6));

var _constants = __webpack_require__(12);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

// Performance test duration is about 3s
var PERF_DURATION = 3000;
var ADD_NEW_FILE_ID = '-2';

var App =
/*#__PURE__*/
function (_Base) {
  _inherits(App, _Base);

  function App() {
    var _this;

    _classCallCheck(this, App);

    _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this));
    _this.inspectBtn = document.getElementById('inspectBtn');
    _this.perfBtn = document.getElementById('perfBtn');
    _this.editorsElement = document.getElementById('editors');

    _this.listen();

    _this.console = new _Console.default({
      app: _assertThisInitialized(_this)
    });
    _this.editorTabs = new _Tabs.default({
      app: _assertThisInitialized(_this),
      container: _this.editorsElement.querySelector('.editorTabs'),
      createTab: {
        label: '+'
      }
    });
    _this.editors = [];

    _this.addNewEditor();

    return _this;
  }

  _createClass(App, [{
    key: "listen",
    value: function listen() {
      this.inspectBtn.addEventListener('click', this.handleInspectClick.bind(this));
      this.perfBtn.addEventListener('click', this.handlePerfClick.bind(this));
      window.onbeforeunload = this.handlePageUnload.bind(this);
      this.on('editor.init', this.attachTabToEditor.bind(this));
      this.on('tabs.selectId', this.selectTabWithId.bind(this));
      this.on('tabs.createTab', this.addNewEditor.bind(this));
    }
    /**
     * Handle exit logic
     * 
     * - store current code in each editor
     */

  }, {
    key: "handlePageUnload",
    value: function handlePageUnload() {
      this.editors.forEach(function (editor) {
        // Only store contents within 10MB limit (for most browser)
        var content = editor.aceEditor.getValue();

        if (content.length * 2 < 10 * 1000000) {
          localStorage.setItem('jsinspectorContent-' + editor.filename, content);
        } else {
          editor.addError('File size exceed auto save limit');
        } // Store breakpoint positions


        localStorage.setItem('jsinspectorBreakpoints-' + editor.filename, JSON.stringify(editor.aceEditor.session.getBreakpoints()));
      });
    }
  }, {
    key: "handleInspectClick",
    value: function handleInspectClick() {
      var _this2 = this;

      var evalContent; // TODO: Avoid nested eval
      // TODO: Undo and Redo

      var oldConsoleLog = console.log;
      this.console.startNewLog();
      this.editors.forEach(function (editor) {
        var lineContents = editor.aceEditor.getValue().split('\n'); // hijack console.log

        console.log = function () {
          var _this2$console;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          (_this2$console = _this2.console).addLog.apply(_this2$console, [editor].concat(args));

          oldConsoleLog(args);
        }; // Add breakpoints


        editor.aceEditor.session.getBreakpoints().forEach(function (breakPointClass, row) {
          if (breakPointClass.indexOf('disabled') === -1) {
            lineContents[row] = 'debugger; /* Line ' + (row + 1) + ' */' + lineContents[row];
          }
        });
        evalContent = '// Start debug your javascript...\ndebugger;\n\n' + lineContents.join('\n'); // It's ok to use eval as this will be a static page

        try {
          editor.addResult(eval(evalContent));
        } catch (e) {
          editor.addError(e.message);
        }
      }); // Restore console.log

      console.log = oldConsoleLog;
    }
  }, {
    key: "handlePerfClick",
    value: function handlePerfClick() {
      var _this3 = this;

      var hasError = false,
          totalDuration = 0,
          singleDuration,
          runCount,
          runCountIter;
      this.console.startNewLog();
      this.editors.forEach(function (editor) {
        var content = editor.aceEditor.getValue(); // Perf test will evalute run time by average

        try {
          singleDuration = window.performance.now();
          eval(content);
          singleDuration = window.performance.now() - singleDuration;
        } catch (e) {
          _this3.console.addError(editor, e.message);

          hasError = true;
        }

        if (hasError) {
          _this3.console.addError(editor, 'Error evaluating javascript code');

          return;
        }

        runCount = Math.floor(PERF_DURATION / singleDuration);
        runCountIter = runCount;

        while (runCountIter--) {
          singleDuration = window.performance.now();
          eval(content);
          singleDuration = window.performance.now() - singleDuration;
          totalDuration += singleDuration;
        }

        _this3.console.addResult(editor, 'Average duration for ' + runCount + ' runs: ' + totalDuration / runCount + ' ms');
      });
    }
  }, {
    key: "addNewEditor",
    value: function addNewEditor() {
      var editorElement = document.createElement('div');
      editorElement.classList.add('editor');
      this.editorsElement.appendChild(editorElement);
      var newEditor = new _Editor.default({
        container: editorElement,
        app: this
      });
      this.editors.push(newEditor);
      this.showEditor(newEditor);
    }
  }, {
    key: "attachTabToEditor",
    value: function attachTabToEditor(editor) {
      this.editorTabs.addTab(editor.id, editor.filename); // Always select the attached tab

      this.editorTabs.selectTabWithId(editor.id);
    }
  }, {
    key: "showEditor",
    value: function showEditor(editor) {
      this.editors.forEach(function (editor) {
        return editor.hide();
      });
      editor.show();
    }
  }, {
    key: "showEditorWithId",
    value: function showEditorWithId(id) {
      if (typeof id === 'undefined' || id === null) {
        return;
      }

      var editor = this.editors.find(function (editor) {
        return editor.id === id;
      });

      if (!editor) {
        this.console.addError(null, 'No such file to show');
        return;
      }

      this.showEditor(editor);
    }
  }, {
    key: "selectTabWithId",
    value: function selectTabWithId(id, tabs) {
      if (this.editorTabs !== tabs) {
        return;
      }

      this.showEditorWithId(id);
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
var _count = 0;

var Editor =
/*#__PURE__*/
function (_Base) {
  _inherits(Editor, _Base);

  function Editor() {
    var _this;

    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, Editor);

    _this = _possibleConstructorReturn(this, (Editor.__proto__ || Object.getPrototypeOf(Editor)).call(this));
    _count++;
    _this.breakPointsDisabled = false;
    _this.app = options.app;
    _this.filename = options.filename || 'File ' + _count;
    _this.id = _count.toString();
    _this.element = options.container; // Config ace editor

    _this.aceEditor = ace.edit(_this.element);

    _this.aceEditor.session.setMode("ace/mode/javascript");

    _this.aceEditor.setTheme("ace/theme/tomorrow");

    _this.aceEditor.$blockScrolling = Infinity;

    _this.listen(); // Create ToolBox for this editor


    _this.toolBox = new _ToolBox.default({
      editor: _assertThisInitialized(_this)
    });

    _this.restoreCode(); // Attach editors


    _this.fire('editor.init', _assertThisInitialized(_this));

    return _this;
  }

  _createClass(Editor, [{
    key: "toggleBreakPoint",
    value: function toggleBreakPoint(row) {
      var breakPoints = this.aceEditor.session.getBreakpoints();
      breakPoints[row] ? this.clearBreakpoint(row) : this.setBreakpoint(row);
    }
  }, {
    key: "listen",
    value: function listen() {
      // Add event listener for editor
      this.aceEditor.on('gutterclick', this.handleGutterclick.bind(this));
      this.aceEditor.session.on('change', this.handleEditorChange.bind(this));
    }
  }, {
    key: "addLog",
    value: function addLog() {
      for (var _len = arguments.length, arg = new Array(_len), _key = 0; _key < _len; _key++) {
        arg[_key] = arguments[_key];
      }

      this.app.console.addLog(this, arg);
    }
  }, {
    key: "addError",
    value: function addError() {
      for (var _len2 = arguments.length, arg = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        arg[_key2] = arguments[_key2];
      }

      this.app.console.addError(this, arg);
    }
  }, {
    key: "addResult",
    value: function addResult() {
      for (var _len3 = arguments.length, arg = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        arg[_key3] = arguments[_key3];
      }

      this.app.console.addResult(this, arg);
    }
  }, {
    key: "handleGutterclick",
    value: function handleGutterclick(e) {
      var row = e.getDocumentPosition().row;
      this.toggleBreakPoint(row);
    }
  }, {
    key: "handleEditorChange",
    value: function handleEditorChange(e) {
      this.refreshBreakpoints();
    }
    /**
     * Will remove unnecessary breakpoints
     */

  }, {
    key: "refreshBreakpoints",
    value: function refreshBreakpoints() {
      var _this2 = this;

      var aceEditor = this.aceEditor,
          breakPoints = aceEditor.session.getBreakpoints(),
          currentRows = aceEditor.session.getLength(),
          toBeCleard = [];
      breakPoints.forEach(function (breakpointClass, row) {
        if (row >= currentRows) {
          toBeCleard.push(row);
        }
      });
      toBeCleard.forEach(function (row) {
        return _this2.clearBreakpoint(row);
      });
    }
  }, {
    key: "clearBreakpoint",
    value: function clearBreakpoint(row) {
      this.aceEditor.session.clearBreakpoint(row);
      this.toolBox.removeFromBreakpointLines(row);
    }
  }, {
    key: "setBreakpoint",
    value: function setBreakpoint(row) {
      var className = this.breakPointsDisabled ? 'ace_breakpoint disabled' : 'ace_breakpoint';
      this.aceEditor.session.setBreakpoint(row, className);
      this.toolBox.addToBreakpointLines(row);
    }
  }, {
    key: "restoreCode",
    value: function restoreCode() {
      var _this3 = this;

      // Retrieve Code from localStorage, if any
      var content = localStorage.getItem('jsinspectorContent-' + this.filename),
          breakpoints = JSON.parse(localStorage.getItem('jsinspectorBreakpoints-' + this.filename) || '[]');

      if (content) {
        this.aceEditor.setValue(content);
        breakpoints.forEach(function (breakpointClass, row) {
          if (breakpointClass && row < _this3.aceEditor.session.getLength()) {
            _this3.setBreakpoint(row);
          }
        });
      } else {
        this.aceEditor.setValue(defaultCode);
        this.setBreakpoint(1);
      }
    }
  }, {
    key: "show",
    value: function show() {
      this.element.style.display = 'block';
    }
  }, {
    key: "hide",
    value: function hide() {
      this.element.style.display = 'none';
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

/**
 * ToolBox component
 * 
 * This component will provide tools that are specific to an
 * editor. The tools are 
 * - Breakpoint toggle button
 * - List of breakpoints
 */
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
    var endElement = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : document.body;

    while (startElement !== endElement.parentElement) {
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

var _Tabs = _interopRequireDefault(__webpack_require__(13));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ALL_EDITOR_ID = '-1';

var Console =
/*#__PURE__*/
function (_Base) {
  _inherits(Console, _Base);

  function Console() {
    var _this;

    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, Console);

    _this = _possibleConstructorReturn(this, (Console.__proto__ || Object.getPrototypeOf(Console)).call(this));
    _this.app = options.app;
    _this.element = document.getElementById('console');
    _this.toolBarElement = _this.element.querySelector('.toolBar');
    _this.clearBtnElement = _this.toolBarElement.querySelector('button.toClear');
    _this.contentElement = _this.element.querySelector('.content');

    _this.listen();

    _this.editorTabs = new _Tabs.default({
      app: _this.app,
      container: _this.toolBarElement.querySelector('.editorTabs')
    });
    _this.logs = [];
    /**
     * The log filters
     * 
     * Each filter has a operator and a value.
     * - { op: 'has', value: 'abc' }
     * - { op: 'editor', value: 1 }
     */

    _this.filters = [];
    return _this;
  }

  _createClass(Console, [{
    key: "listen",
    value: function listen() {
      this.clearBtnElement.addEventListener('click', this.handleClearConsole.bind(this));
      this.on('editor.init', this.attachTabToEditor.bind(this));
      this.on('tabs.selectId', this.selectTabWithId.bind(this));
    }
  }, {
    key: "handleClearConsole",
    value: function handleClearConsole() {
      this.contentElement.innerHTML = '';
    }
  }, {
    key: "attachTabToEditor",
    value: function attachTabToEditor(editor) {
      if (!this.editorTabs.tabCount) {
        // First time adding tab to editor, we are going to
        // also add a tab for 'All'
        this.editorTabs.addTab(ALL_EDITOR_ID, 'All files');
        this.editorTabs.selectTabWithId(ALL_EDITOR_ID);
      }

      this.editorTabs.addTab(editor.id, editor.filename);
    }
  }, {
    key: "renderLogs",
    value: function renderLogs() {
      var logs = this.logs.slice(); // Apply log filters

      this.filters.forEach(function (filter) {
        switch (filter.op) {
          case 'editor':
            logs = logs.filter(function (log) {
              return filter.value === ALL_EDITOR_ID // Filter for all editors
              || log.editorId === ALL_EDITOR_ID // Logs for all editors
              || log.editorId === filter.value;
            });
            break;

          case 'has':
            logs = logs.filter(function (log) {
              return log.content.indexOf(filter.value) >= 0;
            });
            break;
        }
      }); // Apply out of date marks

      logs.unshift({
        content: '<div class="outOfDateLog">'
      });
      var i = 1;

      while (logs[i] && logs[i].isOutOfDate && i++) {}

      if (logs[i]) {
        logs.splice(i, 0, {
          content: '</div>'
        });
      }

      this.contentElement.innerHTML = logs.map(function (log) {
        return log.content;
      }).join('');
    }
  }, {
    key: "addLog",
    value: function addLog(editor) {
      for (var _len = arguments.length, log = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        log[_key - 1] = arguments[_key];
      }

      this.logs.push({
        editorId: editor ? editor.id : -1,
        content: '<pre class="result">' + (editor ? editor.filename : 'N/A') + ' > ' + log.join(' ') + '</pre>'
      });
      this.renderLogs();
    }
  }, {
    key: "addError",
    value: function addError(editor) {
      for (var _len2 = arguments.length, error = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        error[_key2 - 1] = arguments[_key2];
      }

      this.logs.push({
        editorId: editor ? editor.id : -1,
        content: '<pre class="result error">' + (editor ? editor.filename : 'N/A') + ' >>> ' + error.join(' ') + '</pre>'
      });
      this.renderLogs();
    }
  }, {
    key: "addResult",
    value: function addResult(editor) {
      for (var _len3 = arguments.length, result = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
        result[_key3 - 1] = arguments[_key3];
      }

      this.logs.push({
        editorId: editor ? editor.id : -1,
        content: '<pre class="result">' + (editor ? editor.filename : 'N/A') + ' >>> ' + result.join(' ') + '</pre>'
      });
      this.renderLogs();
    }
  }, {
    key: "clearLog",
    value: function clearLog() {
      this.logs = [];
      this.renderLogs();
    }
  }, {
    key: "startNewLog",
    value: function startNewLog() {
      if (!this.logs.length) {
        return; // The first log ever, no need to render divider
      } // Make the existing logs old


      this.logs.forEach(function (log) {
        return log.isOutOfDate = true;
      }); // Add new log divider

      this.logs.push({
        // -1 editor id will show for all editor
        editorId: ALL_EDITOR_ID,
        content: '<hr />'
      }); // this.renderLogs()
      // let oldLogs = this.contentElement.querySelectorAll('pre.result'),
      //     needSplitter = false
      // oldLogs.forEach((node) => {
      //   if (!node.classList.contains('old')) {
      //     node.classList.add('old')
      //     needSplitter = true
      //   }
      // })
      // if (needSplitter) {
      //   this.contentElement.querySelectorAll('hr').forEach((node) => {
      //     node.classList.add('old')
      //   })
      //   this.contentElement.innerHTML += '<hr />'
      // }
    }
  }, {
    key: "showEditorLogWithId",
    value: function showEditorLogWithId(id) {
      var _this2 = this;

      var hasFilterForId = false;
      this.filters.forEach(function (filter, ind) {
        if (filter.op === 'editor') {
          if (filter.value !== id) {
            _this2.filters.splice(ind, 1);
          } else {
            hasFilterForId = true;
          }
        }
      });

      if (!hasFilterForId) {
        this.filters.push({
          op: 'editor',
          value: id
        });
      }

      this.renderLogs();
    }
  }, {
    key: "selectTabWithId",
    value: function selectTabWithId(id, tabs) {
      if (this.editorTabs !== tabs) {
        return;
      }

      this.showEditorLogWithId(id);
    }
  }]);

  return Console;
}(_Base2.default);

module.exports = Console;

/***/ }),
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */
/***/ (function(module, exports) {

module.exports = {"O_RDONLY":0,"O_WRONLY":1,"O_RDWR":2,"S_IFMT":61440,"S_IFREG":32768,"S_IFDIR":16384,"S_IFCHR":8192,"S_IFBLK":24576,"S_IFIFO":4096,"S_IFLNK":40960,"S_IFSOCK":49152,"O_CREAT":512,"O_EXCL":2048,"O_NOCTTY":131072,"O_TRUNC":1024,"O_APPEND":8,"O_DIRECTORY":1048576,"O_NOFOLLOW":256,"O_SYNC":128,"O_SYMLINK":2097152,"O_NONBLOCK":4,"S_IRWXU":448,"S_IRUSR":256,"S_IWUSR":128,"S_IXUSR":64,"S_IRWXG":56,"S_IRGRP":32,"S_IWGRP":16,"S_IXGRP":8,"S_IRWXO":7,"S_IROTH":4,"S_IWOTH":2,"S_IXOTH":1,"E2BIG":7,"EACCES":13,"EADDRINUSE":48,"EADDRNOTAVAIL":49,"EAFNOSUPPORT":47,"EAGAIN":35,"EALREADY":37,"EBADF":9,"EBADMSG":94,"EBUSY":16,"ECANCELED":89,"ECHILD":10,"ECONNABORTED":53,"ECONNREFUSED":61,"ECONNRESET":54,"EDEADLK":11,"EDESTADDRREQ":39,"EDOM":33,"EDQUOT":69,"EEXIST":17,"EFAULT":14,"EFBIG":27,"EHOSTUNREACH":65,"EIDRM":90,"EILSEQ":92,"EINPROGRESS":36,"EINTR":4,"EINVAL":22,"EIO":5,"EISCONN":56,"EISDIR":21,"ELOOP":62,"EMFILE":24,"EMLINK":31,"EMSGSIZE":40,"EMULTIHOP":95,"ENAMETOOLONG":63,"ENETDOWN":50,"ENETRESET":52,"ENETUNREACH":51,"ENFILE":23,"ENOBUFS":55,"ENODATA":96,"ENODEV":19,"ENOENT":2,"ENOEXEC":8,"ENOLCK":77,"ENOLINK":97,"ENOMEM":12,"ENOMSG":91,"ENOPROTOOPT":42,"ENOSPC":28,"ENOSR":98,"ENOSTR":99,"ENOSYS":78,"ENOTCONN":57,"ENOTDIR":20,"ENOTEMPTY":66,"ENOTSOCK":38,"ENOTSUP":45,"ENOTTY":25,"ENXIO":6,"EOPNOTSUPP":102,"EOVERFLOW":84,"EPERM":1,"EPIPE":32,"EPROTO":100,"EPROTONOSUPPORT":43,"EPROTOTYPE":41,"ERANGE":34,"EROFS":30,"ESPIPE":29,"ESRCH":3,"ESTALE":70,"ETIME":101,"ETIMEDOUT":60,"ETXTBSY":26,"EWOULDBLOCK":35,"EXDEV":18,"SIGHUP":1,"SIGINT":2,"SIGQUIT":3,"SIGILL":4,"SIGTRAP":5,"SIGABRT":6,"SIGIOT":6,"SIGBUS":10,"SIGFPE":8,"SIGKILL":9,"SIGUSR1":30,"SIGSEGV":11,"SIGUSR2":31,"SIGPIPE":13,"SIGALRM":14,"SIGTERM":15,"SIGCHLD":20,"SIGCONT":19,"SIGSTOP":17,"SIGTSTP":18,"SIGTTIN":21,"SIGTTOU":22,"SIGURG":16,"SIGXCPU":24,"SIGXFSZ":25,"SIGVTALRM":26,"SIGPROF":27,"SIGWINCH":28,"SIGIO":23,"SIGSYS":12,"SSL_OP_ALL":2147486719,"SSL_OP_ALLOW_UNSAFE_LEGACY_RENEGOTIATION":262144,"SSL_OP_CIPHER_SERVER_PREFERENCE":4194304,"SSL_OP_CISCO_ANYCONNECT":32768,"SSL_OP_COOKIE_EXCHANGE":8192,"SSL_OP_CRYPTOPRO_TLSEXT_BUG":2147483648,"SSL_OP_DONT_INSERT_EMPTY_FRAGMENTS":2048,"SSL_OP_EPHEMERAL_RSA":0,"SSL_OP_LEGACY_SERVER_CONNECT":4,"SSL_OP_MICROSOFT_BIG_SSLV3_BUFFER":32,"SSL_OP_MICROSOFT_SESS_ID_BUG":1,"SSL_OP_MSIE_SSLV2_RSA_PADDING":0,"SSL_OP_NETSCAPE_CA_DN_BUG":536870912,"SSL_OP_NETSCAPE_CHALLENGE_BUG":2,"SSL_OP_NETSCAPE_DEMO_CIPHER_CHANGE_BUG":1073741824,"SSL_OP_NETSCAPE_REUSE_CIPHER_CHANGE_BUG":8,"SSL_OP_NO_COMPRESSION":131072,"SSL_OP_NO_QUERY_MTU":4096,"SSL_OP_NO_SESSION_RESUMPTION_ON_RENEGOTIATION":65536,"SSL_OP_NO_SSLv2":16777216,"SSL_OP_NO_SSLv3":33554432,"SSL_OP_NO_TICKET":16384,"SSL_OP_NO_TLSv1":67108864,"SSL_OP_NO_TLSv1_1":268435456,"SSL_OP_NO_TLSv1_2":134217728,"SSL_OP_PKCS1_CHECK_1":0,"SSL_OP_PKCS1_CHECK_2":0,"SSL_OP_SINGLE_DH_USE":1048576,"SSL_OP_SINGLE_ECDH_USE":524288,"SSL_OP_SSLEAY_080_CLIENT_DH_BUG":128,"SSL_OP_SSLREF2_REUSE_CERT_TYPE_BUG":0,"SSL_OP_TLS_BLOCK_PADDING_BUG":512,"SSL_OP_TLS_D5_BUG":256,"SSL_OP_TLS_ROLLBACK_BUG":8388608,"ENGINE_METHOD_DSA":2,"ENGINE_METHOD_DH":4,"ENGINE_METHOD_RAND":8,"ENGINE_METHOD_ECDH":16,"ENGINE_METHOD_ECDSA":32,"ENGINE_METHOD_CIPHERS":64,"ENGINE_METHOD_DIGESTS":128,"ENGINE_METHOD_STORE":256,"ENGINE_METHOD_PKEY_METHS":512,"ENGINE_METHOD_PKEY_ASN1_METHS":1024,"ENGINE_METHOD_ALL":65535,"ENGINE_METHOD_NONE":0,"DH_CHECK_P_NOT_SAFE_PRIME":2,"DH_CHECK_P_NOT_PRIME":1,"DH_UNABLE_TO_CHECK_GENERATOR":4,"DH_NOT_SUITABLE_GENERATOR":8,"NPN_ENABLED":1,"RSA_PKCS1_PADDING":1,"RSA_SSLV23_PADDING":2,"RSA_NO_PADDING":3,"RSA_PKCS1_OAEP_PADDING":4,"RSA_X931_PADDING":5,"RSA_PKCS1_PSS_PADDING":6,"POINT_CONVERSION_COMPRESSED":2,"POINT_CONVERSION_UNCOMPRESSED":4,"POINT_CONVERSION_HYBRID":6,"F_OK":0,"R_OK":4,"W_OK":2,"X_OK":1,"UV_UDP_REUSEADDR":4}

/***/ }),
/* 13 */
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

var Tabs =
/*#__PURE__*/
function (_Base) {
  _inherits(Tabs, _Base);

  function Tabs() {
    var _this;

    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, Tabs);

    _this = _possibleConstructorReturn(this, (Tabs.__proto__ || Object.getPrototypeOf(Tabs)).call(this));
    _this.app = options.app;
    _this.element = options.container;
    _this.tabContainer = document.createElement('div');

    _this.tabContainer.classList.add('tabContainer');

    _this.element.appendChild(_this.tabContainer);

    if (options.createTab) {
      _this.createTab = document.createElement('button');
      _this.createTab.className = 'tab toCreateTab';
      _this.createTab.textContent = options.createTab.label || 'Add New';

      _this.element.appendChild(_this.createTab);
    }

    _this.tabCount = 0;

    _this.listen();

    return _this;
  }

  _createClass(Tabs, [{
    key: "listen",
    value: function listen() {
      this.tabContainer.addEventListener('click', this.handleSwitchTabs.bind(this));

      if (this.createTab) {
        this.createTab.addEventListener('click', this.handleCreateTab.bind(this));
      }
    }
    /**
     * When click on tabs, we need to switch view of files
     */

  }, {
    key: "handleSwitchTabs",
    value: function handleSwitchTabs(e) {
      var tab = _util.default.closestElement(e.target, 'tab', this.tabContainer);

      if (!tab) {
        // Didn't click on a tab
        return;
      }

      this.selectTab(tab); // TODO: use event bus for this

      this.fire('tabs.selectId', tab.dataset.forId, this);
    }
  }, {
    key: "handleCreateTab",
    value: function handleCreateTab() {
      // We need external information to create a tab, hence
      // here we are simply firing events to let external logic
      // to handle it
      this.fire('tabs.createTab');
    }
  }, {
    key: "addTab",
    value: function addTab(id, label) {
      var editorTab = document.createElement('button');
      editorTab.className = 'tab';
      editorTab.textContent = label;
      editorTab.dataset.forId = id;
      this.tabContainer.appendChild(editorTab);
      this.tabCount++;
    }
  }, {
    key: "selectTab",
    value: function selectTab(tab) {
      // Show selected state for corresponding tab
      var editorTabs = this.tabContainer.querySelectorAll('.tab');
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = editorTabs[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var _editorTab = _step.value;
          _editorTab === tab ? _editorTab.classList.add('selected') : _editorTab.classList.remove('selected');
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return != null) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }
    }
  }, {
    key: "selectTabWithId",
    value: function selectTabWithId(id) {
      if (typeof id === 'undefined' || id === null) {
        return;
      }

      var editorTabs = this.tabContainer.querySelectorAll('.tab');
      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = editorTabs[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var _editorTab2 = _step2.value;
          _editorTab2.dataset.forId === id ? _editorTab2.classList.add('selected') : _editorTab2.classList.remove('selected');
        }
      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
            _iterator2.return();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
      }
    }
  }]);

  return Tabs;
}(_Base2.default);

module.exports = Tabs;

/***/ }),
/* 14 */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var EventBus =
/*#__PURE__*/
function () {
  function EventBus() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, EventBus);

    this.id = options.id || -1;
    this.parentId = options.parentId || null;
    this.children = []; // Events map that belongs to this event bus

    this.events = {};
  }

  _createClass(EventBus, [{
    key: "subscribe",
    value: function subscribe() {
      var event = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      var callback = arguments.length > 1 ? arguments[1] : undefined;
      this.events[event] = this.events[event] || [];

      if (this.events[event].indexOf(callback) !== -1) {
        // We already have this callback subscribed
        return;
      }

      this.events[event].push(callback);
    }
  }, {
    key: "publish",
    value: function publish(event) {
      for (var _len = arguments.length, data = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        data[_key - 1] = arguments[_key];
      }

      var callbacks = this.events[event];

      if (!callbacks) {
        // Do nothing if there is no such event subscribed
        return;
      }

      callbacks.forEach(function (callback) {
        return callback.apply(void 0, data);
      });
    }
  }]);

  return EventBus;
}();

module.exports = EventBus;

/***/ })
/******/ ]);