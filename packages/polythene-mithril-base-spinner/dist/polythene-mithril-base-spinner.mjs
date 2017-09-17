import { StateComponent } from 'polythene-mithril-base';
import { classes, coreBaseSpinner } from 'polythene-core-base-spinner';
import { Shadow } from 'polythene-mithril-shadow';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var BaseSpinner = StateComponent(_extends({}, coreBaseSpinner, {
  createContent: function createContent(vnode, args) {
    return coreBaseSpinner.createContent(vnode, _extends(args, { Shadow: Shadow }));
  }
}));

BaseSpinner.classes = classes;
BaseSpinner.displayName = "BaseSpinner";

export { BaseSpinner };
