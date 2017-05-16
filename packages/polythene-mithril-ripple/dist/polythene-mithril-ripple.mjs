import { statefulComponent } from 'polythene-mithril-base';
import { Ripple } from 'polythene-core-ripple';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var Ripple$1 = statefulComponent(_extends({}, Ripple));

Ripple$1.theme = Ripple.theme;

export { Ripple$1 as Ripple };
