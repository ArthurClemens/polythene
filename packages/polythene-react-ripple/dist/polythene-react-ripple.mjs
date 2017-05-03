import { statefulComponent } from 'polythene-react-base';
import { ripple } from 'polythene-core-ripple';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var ripple$1 = statefulComponent(_extends({}, ripple));

ripple$1.theme = ripple.theme;
ripple$1.displayName = "ripple";

export { ripple$1 as ripple };
