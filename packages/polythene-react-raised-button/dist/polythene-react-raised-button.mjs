import { stateComponent } from 'polythene-react-base';
import { CoreRaisedButton } from 'polythene-core-raised-button';
import { Button } from 'polythene-react-button';
import { Shadow } from 'polythene-react-shadow';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var createProps = function createProps(vnode, args) {
  return CoreRaisedButton.createProps(vnode, _extends(args, { Shadow: Shadow }));
};
var createContent = function createContent(vnode, args) {
  return CoreRaisedButton.createContent(vnode, _extends(args, { Shadow: Shadow }));
};

var RaisedButton = stateComponent(_extends({}, CoreRaisedButton, {
  createProps: createProps,
  createContent: createContent,
  component: Button
}));

RaisedButton.theme = CoreRaisedButton.theme;
RaisedButton.displayName = "RaisedButton";

export { RaisedButton };
