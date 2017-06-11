import { ViewComponent } from 'polythene-react-base';
import { coreToolbar } from 'polythene-core-toolbar';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var Toolbar = ViewComponent(_extends({}, coreToolbar));

Toolbar.theme = coreToolbar.theme;
Toolbar.displayName = "Toolbar";

export { Toolbar };
