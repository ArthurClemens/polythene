import { statefulComponent } from 'polythene-mithril-base';
import { raisedButton } from 'polythene-core-raised-button';
import { button } from 'polythene-mithril-button';
import { shadow } from 'polythene-mithril-shadow';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var getInitialState = function getInitialState(args) {
  return raisedButton.getInitialState(args);
};
var createProps = function createProps(vnode, args) {
  return raisedButton.createProps(vnode, _extends(args, { shadow: shadow }));
};
var createContent = function createContent(vnode, args) {
  return raisedButton.createContent(vnode, _extends(args, { shadow: shadow }));
};

var raisedButton$1 = statefulComponent(_extends({}, raisedButton, {
  getInitialState: getInitialState,
  createProps: createProps,
  createContent: createContent,
  element: button
}));

raisedButton$1.theme = raisedButton.theme;

export { raisedButton$1 as raisedButton };
