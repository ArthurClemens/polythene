import { statelessComponent } from 'polythene-react-base';
import { shadow } from 'polythene-core-shadow';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var shadow$1 = statelessComponent(_extends({}, shadow));

shadow$1.theme = shadow.theme;
shadow$1.displayName = "shadow";

export { shadow$1 as shadow };
