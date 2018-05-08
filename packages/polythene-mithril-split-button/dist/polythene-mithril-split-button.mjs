import { ViewComponent } from 'polythene-mithril-base';
import { coreSplitButton } from 'polythene-core-split-button';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var SplitButton = ViewComponent(_extends({}, coreSplitButton));

SplitButton.displayName = "SplitButton";

export { SplitButton };
