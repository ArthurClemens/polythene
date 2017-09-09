import { ViewComponent } from 'polythene-mithril-base';
import { coreSVG } from 'polythene-core-svg';
import loadjs from 'loadjs';
import { vars } from 'polythene-theme';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var SVG = ViewComponent(_extends({}, coreSVG));

SVG.displayName = "SVG";

if (vars.css === "js") {
  loadjs("polythene-theme-svg");
}

export { SVG };
