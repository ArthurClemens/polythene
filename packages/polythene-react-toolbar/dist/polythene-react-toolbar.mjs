import { viewComponent } from 'polythene-react-base';
import { CoreToolbar } from 'polythene-core-toolbar';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var Toolbar = viewComponent(_extends({}, CoreToolbar));

Toolbar.theme = CoreToolbar.theme;
Toolbar.displayName = "Toolbar";

export { Toolbar };
