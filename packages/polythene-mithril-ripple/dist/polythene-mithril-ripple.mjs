import { statefulComponent } from 'polythene-mithril-base';
import { CoreRipple } from 'polythene-core-ripple';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var Ripple = statefulComponent(_extends({}, CoreRipple));

Ripple.theme = CoreRipple.theme;

export { Ripple };
