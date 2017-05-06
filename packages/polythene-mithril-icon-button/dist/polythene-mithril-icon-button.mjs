import { statelessComponent } from 'polythene-mithril-base';
import { iconButton } from 'polythene-core-icon-button';
import { icon } from 'polythene-mithril-icon';
import { button } from 'polythene-mithril-button';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var createProps = function createProps(vnode, args) {
  return iconButton.createProps(vnode, _extends(args, { icon: icon }));
};
var createContent = function createContent(vnode, args) {
  return iconButton.createContent(vnode, _extends(args, { icon: icon }));
};

var iconButton$1 = statelessComponent(_extends({}, iconButton, {
  createProps: createProps,
  createContent: createContent,
  element: button
}));

iconButton$1.theme = iconButton.theme;

export { iconButton$1 as iconButton };
