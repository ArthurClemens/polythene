import { viewComponent } from 'polythene-mithril-base';
import { coreShadow } from 'polythene-core-shadow';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var Shadow = viewComponent(_extends({}, coreShadow));

Shadow.theme = coreShadow.theme;
Shadow.displayName = "Shadow";

export { Shadow };
