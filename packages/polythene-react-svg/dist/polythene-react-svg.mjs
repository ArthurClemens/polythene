import { ViewComponent } from 'polythene-react-base';
import { coreSVG } from 'polythene-core-svg';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var SVG = ViewComponent(_extends({}, coreSVG));

SVG.theme = coreSVG.theme;
SVG.displayName = "SVG";

export { SVG };
