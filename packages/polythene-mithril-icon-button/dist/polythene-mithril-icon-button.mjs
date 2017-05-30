import { viewComponent } from 'polythene-mithril-base';
import { coreIconButton } from 'polythene-core-icon-button';
import { Icon } from 'polythene-mithril-icon';
import { Button } from 'polythene-mithril-button';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var IconButton = viewComponent(_extends({}, coreIconButton, {
  createProps: function createProps(vnode, args) {
    return coreIconButton.createProps(vnode, _extends(args, { Icon: Icon }));
  },
  createContent: function createContent(vnode, args) {
    return coreIconButton.createContent(vnode, _extends(args, { Icon: Icon }));
  },
  component: Button
}));

IconButton.theme = coreIconButton.theme;
IconButton.displayName = "IconButton";

export { IconButton };
