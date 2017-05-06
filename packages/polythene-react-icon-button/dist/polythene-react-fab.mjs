import { statefulComponent } from 'polythene-react-base';
import { iconButton } from 'polythene-core-icon-button';
import { icon } from 'polythene-react-icon';
import { button } from 'polythene-react-button';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var createProps = function createProps(vnode, args) {
  return iconButton.createProps(vnode, _extends(args, { icon: icon }));
};
var createContent = function createContent(vnode, args) {
  return iconButton.createContent(vnode, _extends(args, { icon: icon }));
};

var iconButton$1 = statefulComponent(_extends({}, iconButton, {
  createProps: createProps,
  createContent: createContent,
  element: button
}));

iconButton$1.theme = iconButton.theme;
iconButton$1.displayName = "IconButton";

export { iconButton$1 as iconButton };
