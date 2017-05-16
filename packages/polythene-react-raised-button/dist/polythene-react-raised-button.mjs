import { statefulComponent } from 'polythene-react-base';
import { RaisedButton } from 'polythene-core-raised-button';
import { Button } from 'polythene-react-button';
import { Shadow } from 'polythene-react-shadow';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var getInitialState = function getInitialState(args) {
  return RaisedButton.getInitialState(args);
};
var createProps = function createProps(vnode, args) {
  return RaisedButton.createProps(vnode, _extends(args, { Shadow: Shadow }));
};
var createContent = function createContent(vnode, args) {
  return RaisedButton.createContent(vnode, _extends(args, { Shadow: Shadow }));
};

var RaisedButton$1 = statefulComponent(_extends({}, RaisedButton, {
  getInitialState: getInitialState,
  createProps: createProps,
  createContent: createContent,
  element: Button
}));

RaisedButton$1.theme = RaisedButton.theme;
RaisedButton$1.displayName = "RaisedButton";

export { RaisedButton$1 as RaisedButton };
