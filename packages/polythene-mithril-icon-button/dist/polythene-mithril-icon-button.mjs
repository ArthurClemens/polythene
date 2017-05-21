import { viewComponent } from 'polythene-mithril-base';
import { CoreIconButton } from 'polythene-core-icon-button';
import { Icon } from 'polythene-mithril-icon';
import { Button } from 'polythene-mithril-button';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var createProps = function createProps(vnode, args) {
  return CoreIconButton.createProps(vnode, _extends(args, { Icon: Icon }));
};
var createContent = function createContent(vnode, args) {
  return CoreIconButton.createContent(vnode, _extends(args, { Icon: Icon }));
};

var IconButton = viewComponent(_extends({}, CoreIconButton, {
  createProps: createProps,
  createContent: createContent,
  element: Button
}));

IconButton.theme = CoreIconButton.theme;

export { IconButton };
