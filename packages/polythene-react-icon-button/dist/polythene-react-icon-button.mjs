import { statefulComponent } from 'polythene-react-base';
import { IconButton } from 'polythene-core-icon-button';
import { Icon } from 'polythene-react-icon';
import { Button } from 'polythene-react-button';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var createProps = function createProps(vnode, args) {
  return IconButton.createProps(vnode, _extends(args, { Icon: Icon }));
};
var createContent = function createContent(vnode, args) {
  return IconButton.createContent(vnode, _extends(args, { Icon: Icon }));
};

var IconButton$1 = statefulComponent(_extends({}, IconButton, {
  createProps: createProps,
  createContent: createContent,
  element: Button
}));

IconButton$1.theme = IconButton.theme;
IconButton$1.displayName = "IconButton";

export { IconButton$1 as IconButton };
