import { stateComponent } from 'polythene-react-base';
import { CoreIconButton } from 'polythene-core-icon-button';
import { Icon } from 'polythene-react-icon';
import { Button } from 'polythene-react-button';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var createProps = function createProps(vnode, args) {
  return CoreIconButton.createProps(vnode, _extends(args, { Icon: Icon }));
};
var createContent = function createContent(vnode, args) {
  return CoreIconButton.createContent(vnode, _extends(args, { Icon: Icon }));
};

var IconButton = stateComponent(_extends({}, CoreIconButton, {
  createProps: createProps,
  createContent: createContent,
  component: Button
}));

IconButton.theme = CoreIconButton.theme;
IconButton.displayName = "IconButton";

export { IconButton };
