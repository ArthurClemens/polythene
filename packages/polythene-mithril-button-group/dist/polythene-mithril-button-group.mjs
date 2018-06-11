import { ViewComponent } from 'polythene-mithril-base';
import { coreButtonGroup } from 'polythene-core-button-group';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var ButtonGroup = ViewComponent(_extends({}, coreButtonGroup));

ButtonGroup.displayName = "ButtonGroup";

export { ButtonGroup };
