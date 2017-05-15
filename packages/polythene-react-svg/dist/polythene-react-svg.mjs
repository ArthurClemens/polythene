import { statelessComponent } from 'polythene-react-base';
import { SVG } from 'polythene-core-svg';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var SVG$1 = statelessComponent(_extends({}, SVG));

SVG$1.theme = SVG.theme;
SVG$1.displayName = "SVG";

export { SVG$1 as SVG };
