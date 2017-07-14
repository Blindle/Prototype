'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

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