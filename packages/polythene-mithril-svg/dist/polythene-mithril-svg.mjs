import { statelessComponent } from 'polythene-mithril-base';
import { svg } from 'polythene-core-svg';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var svg$1 = statelessComponent(_extends({}, svg));

svg$1.theme = svg.theme;

export { svg$1 as svg };
