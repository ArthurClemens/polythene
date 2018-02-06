import { StateComponent } from 'polythene-mithril-base';
import { coreDrawer } from 'polythene-core-drawer';
import { Menu } from 'polythene-mithril-menu';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var Drawer = StateComponent(_extends({}, coreDrawer, {
  createContent: function createContent(vnode, args) {
    return coreDrawer.createContent(vnode, _extends(args, { Menu: Menu }));
  }
}));

Drawer.displayName = "Drawer";

export { Drawer };
