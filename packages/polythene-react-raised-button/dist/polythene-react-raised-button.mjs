import { statefulComponent } from 'polythene-react-base';
import { CoreRaisedButton } from 'polythene-core-raised-button';
import { Button } from 'polythene-react-button';
import { Shadow } from 'polythene-react-shadow';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var getInitialState = function getInitialState(args) {
  return CoreRaisedButton.getInitialState(args);
};
var createProps = function createProps(vnode, args) {
  return CoreRaisedButton.createProps(vnode, _extends(args, { Shadow: Shadow }));
};
var createContent = function createContent(vnode, args) {
  return CoreRaisedButton.createContent(vnode, _extends(args, { Shadow: Shadow }));
};

var RaisedButton = statefulComponent(_extends({}, CoreRaisedButton, {
  getInitialState: getInitialState,
  createProps: createProps,
  createContent: createContent,
  element: Button
}));

RaisedButton.theme = CoreRaisedButton.theme;
RaisedButton.displayName = "RaisedButton";

export { RaisedButton };
