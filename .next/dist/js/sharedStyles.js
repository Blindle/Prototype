'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Point = exports.Separation = exports.Container = exports.Button = undefined;

var _styledComponents = require('styled-components');

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