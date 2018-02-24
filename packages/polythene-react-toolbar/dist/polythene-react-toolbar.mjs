import { ViewComponent } from 'polythene-react-base';
import { coreToolbar, coreToolbarTitle } from 'polythene-core-toolbar';
import { Shadow } from 'polythene-react-shadow';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var Toolbar = ViewComponent(_extends({}, coreToolbar, {
  createContent: function createContent(vnode, args) {
    return coreToolbar.createContent(vnode, _extends(args, { Shadow: Shadow }));
  }
}));

Toolbar.displayName = "Toolbar";

var ToolbarTitle = ViewComponent(coreToolbarTitle);

ToolbarTitle.displayName = "ToolbarTitle";

export { Toolbar, ToolbarTitle };
