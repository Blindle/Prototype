
          window.__NEXT_REGISTER_PAGE('/', function() {
            var comp = module.exports =
webpackJsonp([5],{

/***/ 546:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Point = exports.Separation = exports.Container = exports.Button = undefined;

var _styledComponents = __webpack_require__(531);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Button = exports.Button = _styledComponents2.default.button.withConfig({
  displayName: 'sharedStyles__Button',
  componentId: 's1kvxm0g-0'
})(['padding:0.5em 2em;']);

var Container = exports.Container = _styledComponents2.default.span.withConfig({
  displayName: 'sharedStyles__Container',
  componentId: 's1kvxm0g-1'
})(['padding:0.5em 2em;']);

var Separation = exports.Separation = _styledComponents2.default.span.withConfig({
  displayName: 'sharedStyles__Separation',
  componentId: 's1kvxm0g-2'
})(['margin:10px;']);

var Point = exports.Point = _styledComponents2.default.span.withConfig({
  displayName: 'sharedStyles__Point',
  componentId: 's1kvxm0g-3'
})(['margin:10px;']);

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "C:\\Users\\Emanuel Suriano\\Desktop\\BlindlePrototype\\js\\sharedStyles.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "C:\\Users\\Emanuel Suriano\\Desktop\\BlindlePrototype\\js\\sharedStyles.js"); } } })();

/***/ }),

/***/ 547:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(28);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(13);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(14);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(30);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(29);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(8);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(548);

var _sharedStyles = __webpack_require__(546);

var _TypingSection = __webpack_require__(549);

var _TypingSection2 = _interopRequireDefault(_TypingSection);

var _Letters = __webpack_require__(553);

var _Letters2 = _interopRequireDefault(_Letters);

var _configuration = __webpack_require__(552);

var _configuration2 = _interopRequireDefault(_configuration);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'C:\\Users\\Emanuel Suriano\\Desktop\\BlindlePrototype\\pages\\index.js?entry';


var Blindle = function (_Component) {
  (0, _inherits3.default)(Blindle, _Component);

  function Blindle() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Blindle);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Blindle.__proto__ || (0, _getPrototypeOf2.default)(Blindle)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      currentMenu: 'NAVIGATION',
      currentPosition: 0,
      words: []
    }, _this.onTyping = function (pos) {
      return function () {
        console.log('Typing with' + pos);
      };
    }, _this.onEvent = function (action) {
      return function () {
        return _this.setState((0, _configuration2.default)(_this.state, action));
      };
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Blindle, [{
    key: 'render',
    value: function render() {
      console.log(this.state);
      return _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        }
      }, _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        }
      }, _react2.default.createElement(_sharedStyles.Button, { onClick: this.onEvent('onClickBack'), __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        }
      }), _react2.default.createElement(_sharedStyles.Button, { onClick: this.onEvent('onClickOk'), __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        }
      })), _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        }
      }, _react2.default.createElement(_sharedStyles.Button, { onClick: this.onEvent('onClickLeft'), __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        }
      }), _react2.default.createElement(_TypingSection2.default, { onTyping: this.onTyping, __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        }
      }), _react2.default.createElement(_sharedStyles.Button, { onClick: this.onEvent('onClickRight'), __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        }
      })), _react2.default.createElement(_Letters2.default, { word: this.state.words[this.state.currentPosition], __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        }
      }));
    }
  }]);

  return Blindle;
}(_react.Component);

exports.default = Blindle;

;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "C:\\Users\\Emanuel Suriano\\Desktop\\BlindlePrototype\\pages\\index.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "C:\\Users\\Emanuel Suriano\\Desktop\\BlindlePrototype\\pages\\index.js"); } } })();
    (function (Component, route) {
      if (false) return
      if (false) return

      var qs = __webpack_require__(85)
      var params = qs.parse(__resourceQuery.slice(1))
      if (params.entry == null) return

      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(module.exports.default || module.exports, "/")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ }),

/***/ 549:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(28);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(13);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(14);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(30);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(29);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(8);

var _react2 = _interopRequireDefault(_react);

var _sharedStyles = __webpack_require__(546);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'C:\\Users\\Emanuel Suriano\\Desktop\\BlindlePrototype\\js\\components\\TypingSection.js';


var Counter = function (_Component) {
  (0, _inherits3.default)(Counter, _Component);

  function Counter() {
    (0, _classCallCheck3.default)(this, Counter);

    return (0, _possibleConstructorReturn3.default)(this, (Counter.__proto__ || (0, _getPrototypeOf2.default)(Counter)).apply(this, arguments));
  }

  (0, _createClass3.default)(Counter, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_sharedStyles.Container, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        }
      }, _react2.default.createElement(_sharedStyles.Button, { onClick: this.props.onTyping(0), __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        }
      }), _react2.default.createElement(_sharedStyles.Button, { onClick: this.props.onTyping(1), __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        }
      }), _react2.default.createElement(_sharedStyles.Button, { onClick: this.props.onTyping(2), __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        }
      }), _react2.default.createElement(_sharedStyles.Separation, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        }
      }), _react2.default.createElement(_sharedStyles.Button, { onClick: this.props.onTyping(3), __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        }
      }), _react2.default.createElement(_sharedStyles.Button, { onClick: this.props.onTyping(4), __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        }
      }), _react2.default.createElement(_sharedStyles.Button, { onClick: this.props.onTyping(5), __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        }
      }));
    }
  }]);

  return Counter;
}(_react.Component);

Counter.propTypes = {
  onTyping: _react2.default.PropTypes.func
};
exports.default = Counter;

;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "C:\\Users\\Emanuel Suriano\\Desktop\\BlindlePrototype\\js\\components\\TypingSection.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "C:\\Users\\Emanuel Suriano\\Desktop\\BlindlePrototype\\js\\components\\TypingSection.js"); } } })();

/***/ }),

/***/ 551:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(547);


/***/ }),

/***/ 552:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(95);

var _extends3 = _interopRequireDefault(_extends2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MENUS = ['LEARN', 'WRITE', 'EVALUATION', 'CONFIG'];

var config = {
  LEARN: {
    onClickBack: function onClickBack(state) {
      return (0, _extends3.default)({}, state, {
        currentMenu: 'NAVIGATION',
        currentPosition: 0,
        words: ['casa', 'barco', 'pileta', 'popo']
      });
    },
    onClickLeft: function onClickLeft(state) {
      return (0, _extends3.default)({}, state, {
        currentPosition: state.currentPosition === 0 ? state.currentPosition : state.currentPosition - 1
      });
    },
    onClickRight: function onClickRight(state) {
      return (0, _extends3.default)({}, state, {
        currentPosition: state.currentPosition === 3 ? state.currentPosition : state.currentPosition + 1
      });
    }
  },
  WRITE: {
    onClickBack: function onClickBack(state) {
      return (0, _extends3.default)({}, state, {
        currentMenu: 'NAVIGATION'
      });
    }
  },
  EVALUATION: {
    onClickBack: function onClickBack(state) {
      return (0, _extends3.default)({}, state, {
        currentMenu: 'NAVIGATION'
      });
    }
  },
  CONFIG: {
    onClickBack: function onClickBack(state) {
      return (0, _extends3.default)({}, state, {
        currentMenu: 'NAVIGATION'
      });
    }
  },
  NAVIGATION: {
    onClickOk: function onClickOk(state) {
      return (0, _extends3.default)({}, state, {
        currentMenu: MENUS[state.currentPosition]
      });
    },
    onClickLeft: function onClickLeft(state) {
      return (0, _extends3.default)({}, state, {
        currentPosition: state.currentPosition === 0 ? state.currentPosition : state.currentPosition - 1
      });
    },
    onClickRight: function onClickRight(state) {
      return (0, _extends3.default)({}, state, {
        currentPosition: state.currentPosition === MENUS.length ? state.currentPosition : state.currentPosition + 1
      });
    }
  }
};

var doAction = function doAction(state, action) {
  return config[state.currentMenu][action] ? config[state.currentMenu][action](state) : state;
};

exports.default = doAction;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "C:\\Users\\Emanuel Suriano\\Desktop\\BlindlePrototype\\js\\utils\\configuration.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "C:\\Users\\Emanuel Suriano\\Desktop\\BlindlePrototype\\js\\utils\\configuration.js"); } } })();

/***/ }),

/***/ 553:
/***/ (function(module, exports) {

"use strict";
throw new Error("Module build failed: SyntaxError: C:/Users/Emanuel Suriano/Desktop/BlindlePrototype/js/components/Letters.js: Unexpected token, expected ; (11:11)\n\n\u001b[0m \u001b[90m  9 | \u001b[39m  convertWordToPoints \u001b[33m=\u001b[39m () \u001b[33m=>\u001b[39m\n \u001b[90m 10 | \u001b[39m\n\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 11 | \u001b[39m  render() {\n \u001b[90m    | \u001b[39m           \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\n \u001b[90m 12 | \u001b[39m    \u001b[36mreturn\u001b[39m (\n \u001b[90m 13 | \u001b[39m      \u001b[33m<\u001b[39m\u001b[33mContainer\u001b[39m\u001b[33m>\u001b[39m\n \u001b[90m 14 | \u001b[39m        \u001b[33m<\u001b[39m\u001b[33mPoint\u001b[39m \u001b[33m/\u001b[39m\u001b[33m>\u001b[39m\u001b[0m\n");

/***/ })

},[551]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlc1xccGFnZXNcXGluZGV4LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vanMvc2hhcmVkU3R5bGVzLmpzPzNlZTVjZWUiLCJ3ZWJwYWNrOi8vLy4vcGFnZXM/M2VlNWNlZSIsIndlYnBhY2s6Ly8vLi9qcy9jb21wb25lbnRzL1R5cGluZ1NlY3Rpb24uanM/M2VlNWNlZSIsIndlYnBhY2s6Ly8vLi9qcy91dGlscy9jb25maWd1cmF0aW9uLmpzPzNlZTVjZWUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcblxuZXhwb3J0IGNvbnN0IEJ1dHRvbiA9IHN0eWxlZC5idXR0b25gXG4gIHBhZGRpbmc6IDAuNWVtIDJlbTtcbmA7XG5cbmV4cG9ydCBjb25zdCBDb250YWluZXIgPSBzdHlsZWQuc3BhbmBcbiAgcGFkZGluZzogMC41ZW0gMmVtO1xuYDtcblxuZXhwb3J0IGNvbnN0IFNlcGFyYXRpb24gPSBzdHlsZWQuc3BhbmBcbiAgbWFyZ2luOiAxMHB4O1xuYDtcblxuZXhwb3J0IGNvbnN0IFBvaW50ID0gc3R5bGVkLnNwYW5gXG4gIG1hcmdpbjogMTBweDtcbmA7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vanMvc2hhcmVkU3R5bGVzLmpzIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBcImlzb21vcnBoaWMtZmV0Y2hcIjtcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJy4uL2pzL3NoYXJlZFN0eWxlcyc7XG5pbXBvcnQgVHlwaW5nU2VjdGlvbiBmcm9tICcuLi9qcy9jb21wb25lbnRzL1R5cGluZ1NlY3Rpb24nO1xuaW1wb3J0IExldHRlcnMgZnJvbSAnLi4vanMvY29tcG9uZW50cy9MZXR0ZXJzJztcbmltcG9ydCBkb0FjdGlvbiBmcm9tICcuLi9qcy91dGlscy9jb25maWd1cmF0aW9uJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmxpbmRsZSBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRlID0ge1xuICAgIGN1cnJlbnRNZW51OiAnTkFWSUdBVElPTicsXG4gICAgY3VycmVudFBvc2l0aW9uOiAwLFxuICAgIHdvcmRzOiBbXSxcbiAgfTtcblxuICBvblR5cGluZyA9IChwb3MpID0+ICgpID0+IHtcbiAgICBjb25zb2xlLmxvZygnVHlwaW5nIHdpdGgnICsgcG9zKTtcbiAgfTtcblxuICBvbkV2ZW50ID0gYWN0aW9uID0+ICgpID0+IHRoaXMuc2V0U3RhdGUoZG9BY3Rpb24odGhpcy5zdGF0ZSwgYWN0aW9uKSk7XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUpO1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxCdXR0b24gb25DbGljaz17dGhpcy5vbkV2ZW50KCdvbkNsaWNrQmFjaycpfS8+XG4gICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXt0aGlzLm9uRXZlbnQoJ29uQ2xpY2tPaycpfS8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxCdXR0b24gb25DbGljaz17dGhpcy5vbkV2ZW50KCdvbkNsaWNrTGVmdCcpfS8+XG4gICAgICAgICAgPFR5cGluZ1NlY3Rpb24gb25UeXBpbmc9e3RoaXMub25UeXBpbmd9IC8+XG4gICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXt0aGlzLm9uRXZlbnQoJ29uQ2xpY2tSaWdodCcpfS8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8TGV0dGVycyB3b3JkPXt0aGlzLnN0YXRlLndvcmRzW3RoaXMuc3RhdGUuY3VycmVudFBvc2l0aW9uXX0gLz5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWdlcz9lbnRyeSIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQsIFByb3BUeXBlcyB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgQnV0dG9uLCBDb250YWluZXIsIFNlcGFyYXRpb24gfSBmcm9tICcuLi9zaGFyZWRTdHlsZXMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ291bnRlciBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcclxuICAgIG9uVHlwaW5nOiBSZWFjdC5Qcm9wVHlwZXMuZnVuYyxcclxuICB9O1xyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8Q29udGFpbmVyPlxyXG4gICAgICAgIDxCdXR0b24gb25DbGljaz17dGhpcy5wcm9wcy5vblR5cGluZygwKX0vPlxyXG4gICAgICAgIDxCdXR0b24gb25DbGljaz17dGhpcy5wcm9wcy5vblR5cGluZygxKX0vPlxyXG4gICAgICAgIDxCdXR0b24gb25DbGljaz17dGhpcy5wcm9wcy5vblR5cGluZygyKX0vPlxyXG4gICAgICAgIDxTZXBhcmF0aW9uIC8+XHJcbiAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXt0aGlzLnByb3BzLm9uVHlwaW5nKDMpfS8+XHJcbiAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXt0aGlzLnByb3BzLm9uVHlwaW5nKDQpfS8+XHJcbiAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXt0aGlzLnByb3BzLm9uVHlwaW5nKDUpfS8+XHJcbiAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgKTtcclxuICB9XHJcbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vanMvY29tcG9uZW50cy9UeXBpbmdTZWN0aW9uLmpzIiwiY29uc3QgTUVOVVMgPSBbXHJcbiAgJ0xFQVJOJyxcclxuICAnV1JJVEUnLFxyXG4gICdFVkFMVUFUSU9OJyxcclxuICAnQ09ORklHJyxcclxuXTtcclxuXHJcbmNvbnN0IGNvbmZpZyA9IHtcclxuICBMRUFSTjoge1xyXG4gICAgb25DbGlja0JhY2s6IHN0YXRlID0+ICh7XHJcbiAgICAgIC4uLnN0YXRlLFxyXG4gICAgICBjdXJyZW50TWVudTogJ05BVklHQVRJT04nLFxyXG4gICAgICBjdXJyZW50UG9zaXRpb246IDAsXHJcbiAgICAgIHdvcmRzOiBbXHJcbiAgICAgICAgJ2Nhc2EnLFxyXG4gICAgICAgICdiYXJjbycsXHJcbiAgICAgICAgJ3BpbGV0YScsXHJcbiAgICAgICAgJ3BvcG8nLFxyXG4gICAgICBdLFxyXG4gICAgfSksXHJcbiAgICBvbkNsaWNrTGVmdDogc3RhdGUgPT4gKHtcclxuICAgICAgLi4uc3RhdGUsXHJcbiAgICAgIGN1cnJlbnRQb3NpdGlvbjogc3RhdGUuY3VycmVudFBvc2l0aW9uID09PSAwID9cclxuICAgICAgICBzdGF0ZS5jdXJyZW50UG9zaXRpb24gOlxyXG4gICAgICAgIHN0YXRlLmN1cnJlbnRQb3NpdGlvbiAtIDEsXHJcbiAgICB9KSxcclxuICAgIG9uQ2xpY2tSaWdodDogc3RhdGUgPT4gKHtcclxuICAgICAgLi4uc3RhdGUsXHJcbiAgICAgIGN1cnJlbnRQb3NpdGlvbjogc3RhdGUuY3VycmVudFBvc2l0aW9uID09PSAzID9cclxuICAgICAgICBzdGF0ZS5jdXJyZW50UG9zaXRpb24gOlxyXG4gICAgICAgIHN0YXRlLmN1cnJlbnRQb3NpdGlvbiArIDEsXHJcbiAgICB9KSxcclxuICB9LFxyXG4gIFdSSVRFOiB7XHJcbiAgICBvbkNsaWNrQmFjazogc3RhdGUgPT4gKHtcclxuICAgICAgLi4uc3RhdGUsXHJcbiAgICAgIGN1cnJlbnRNZW51OiAnTkFWSUdBVElPTicsXHJcbiAgICB9KSxcclxuICB9LFxyXG4gIEVWQUxVQVRJT046IHtcclxuICAgIG9uQ2xpY2tCYWNrOiBzdGF0ZSA9PiAoe1xyXG4gICAgICAuLi5zdGF0ZSxcclxuICAgICAgY3VycmVudE1lbnU6ICdOQVZJR0FUSU9OJyxcclxuICAgIH0pLFxyXG4gIH0sXHJcbiAgQ09ORklHOiB7XHJcbiAgICBvbkNsaWNrQmFjazogc3RhdGUgPT4gKHtcclxuICAgICAgLi4uc3RhdGUsXHJcbiAgICAgIGN1cnJlbnRNZW51OiAnTkFWSUdBVElPTicsXHJcbiAgICB9KSxcclxuICB9LFxyXG4gIE5BVklHQVRJT046IHtcclxuICAgIG9uQ2xpY2tPazogKHN0YXRlKSA9PiAoe1xyXG4gICAgICAuLi5zdGF0ZSxcclxuICAgICAgY3VycmVudE1lbnU6IE1FTlVTW3N0YXRlLmN1cnJlbnRQb3NpdGlvbl0sXHJcbiAgICB9KSxcclxuICAgIG9uQ2xpY2tMZWZ0OiBzdGF0ZSA9PiAoe1xyXG4gICAgICAuLi5zdGF0ZSxcclxuICAgICAgY3VycmVudFBvc2l0aW9uOiBzdGF0ZS5jdXJyZW50UG9zaXRpb24gPT09IDAgP1xyXG4gICAgICAgIHN0YXRlLmN1cnJlbnRQb3NpdGlvbiA6XHJcbiAgICAgICAgc3RhdGUuY3VycmVudFBvc2l0aW9uIC0gMSxcclxuICAgIH0pLFxyXG4gICAgb25DbGlja1JpZ2h0OiBzdGF0ZSA9PiAoe1xyXG4gICAgICAuLi5zdGF0ZSxcclxuICAgICAgY3VycmVudFBvc2l0aW9uOiBzdGF0ZS5jdXJyZW50UG9zaXRpb24gPT09IE1FTlVTLmxlbmd0aCA/XHJcbiAgICAgICAgc3RhdGUuY3VycmVudFBvc2l0aW9uIDpcclxuICAgICAgICBzdGF0ZS5jdXJyZW50UG9zaXRpb24gKyAxLFxyXG4gICAgfSksXHJcbiAgfVxyXG59O1xyXG5cclxuY29uc3QgZG9BY3Rpb24gPSAoc3RhdGUsIGFjdGlvbikgPT4gY29uZmlnW3N0YXRlLmN1cnJlbnRNZW51XVthY3Rpb25dID9cclxuICBjb25maWdbc3RhdGUuY3VycmVudE1lbnVdW2FjdGlvbl0oc3RhdGUpIDpcclxuICBzdGF0ZTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGRvQWN0aW9uO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9qcy91dGlscy9jb25maWd1cmF0aW9uLmpzIl0sIm1hcHBpbmdzIjoiO0E7Ozs7Ozs7Ozs7Ozs7QUFFQTtBQUNBOzs7OztBQURBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZkE7QUFDQTs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7Ozs7OztBQUNBOzs7Ozs7Ozs7Ozs7OztBQUNBO0FBRUE7QUFDQTtBQUFBO0FBRkE7QUFLQTtBQUNBO0FBREE7QUFJQTtBQUFBO0FBQUE7QUFBQTs7Ozs7O0FBR0E7QUFBQTtBQUVBOztBQUFBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUVBO0FBRkE7QUFFQTs7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUVBO0FBRkE7QUFFQTtBQUFBO0FBR0E7QUFIQTs7Ozs7O0FBMUJBO0FBQ0E7QUFEQTtBQUNBO0FBNkJBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdENBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7OztBQUNBOzs7Ozs7Ozs7OztBQU1BO0FBQ0E7O0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7O0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFHQTtBQUhBOzs7Ozs7QUFkQTtBQUNBO0FBREE7QUFFQTtBQUFBO0FBRkE7QUFDQTtBQWlCQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3RCQTtBQUNBO0FBTUE7O0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUZBO0FBU0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUlBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFLQTtBQXhCQTs7QUF5QkE7QUFDQTtBQUNBO0FBQUE7QUFHQTtBQUxBOztBQU1BO0FBQ0E7QUFDQTtBQUFBO0FBR0E7QUFMQTs7QUFNQTtBQUNBO0FBQ0E7QUFBQTtBQUdBO0FBTEE7O0FBTUE7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBSUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQWJBO0FBQ0E7QUE1Q0E7QUFDQTtBQThEQTtBQUFBO0FBSUE7QUFDQTtBQURBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==
            return { page: comp.default }
          })
        