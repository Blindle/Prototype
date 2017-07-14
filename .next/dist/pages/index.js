'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('isomorphic-fetch');

var _sharedStyles = require('../js/sharedStyles');

var _TypingSection = require('../js/components/TypingSection');

var _TypingSection2 = _interopRequireDefault(_TypingSection);

var _Letters = require('../js/components/Letters');

var _Letters2 = _interopRequireDefault(_Letters);

var _configuration = require('../js/utils/configuration');

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