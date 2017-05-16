import { statelessComponent } from 'polythene-mithril-base';
import { Shadow } from 'polythene-core-shadow';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var Shadow$1 = statelessComponent(_extends({}, Shadow));

Shadow$1.theme = Shadow.theme;

export { Shadow$1 as Shadow };
