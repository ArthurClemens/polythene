import { stateComponent } from 'polythene-react-base';
import { coreRipple } from 'polythene-core-ripple';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var Ripple = stateComponent(_extends({}, coreRipple));

Ripple.theme = coreRipple.theme;
Ripple.displayName = "Ripple";

export { Ripple };
