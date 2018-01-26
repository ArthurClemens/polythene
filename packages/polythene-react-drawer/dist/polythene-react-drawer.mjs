import { ViewComponent } from 'polythene-react-base';
import { coreDrawer } from 'polythene-core-drawer';
import { Menu } from 'polythene-react-menu';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var Drawer = ViewComponent(_extends({}, coreDrawer, {
  component: Menu
}));

Drawer.displayName = "Drawer";

export { Drawer };
