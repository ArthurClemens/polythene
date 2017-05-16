import { statelessComponent } from 'polythene-react-base';
import { CoreShadow } from 'polythene-core-shadow';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var Shadow = statelessComponent(_extends({}, CoreShadow));

Shadow.theme = CoreShadow.theme;
Shadow.displayName = "Shadow";

export { Shadow };
