import { StateComponent, ViewComponent } from 'polythene-mithril-base';
import { coreSpinner } from 'polythene-core-material-design-spinner';
import { coreSpinner as coreSpinner$1 } from 'polythene-core-spinner';
import { Shadow } from 'polythene-mithril-shadow';

var _extends$1 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var BaseSpinner = StateComponent(_extends$1({}, coreSpinner$1, {
  createContent: function createContent(vnode, args) {
    return coreSpinner$1.createContent(vnode, _extends$1(args, { Shadow: Shadow }));
  }
}));

BaseSpinner.displayName = "BaseSpinner";

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var MaterialDesignSpinner = ViewComponent(_extends({}, coreSpinner, {
  component: BaseSpinner
}));

MaterialDesignSpinner.theme = coreSpinner.theme;
MaterialDesignSpinner.displayName = "MaterialDesignSpinner";

export { MaterialDesignSpinner };
