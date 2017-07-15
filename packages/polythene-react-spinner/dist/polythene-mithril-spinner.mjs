import { StateComponent, ViewComponent, renderer } from 'polythene-mithril-base';
import { Conditional } from 'polythene-core';
import { coreBaseSpinner, coreMaterialDesignSpinner } from 'polythene-core-spinner';
import { Shadow } from 'polythene-mithril-shadow';

var _extends$1 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var BaseSpinner = StateComponent(_extends$1({}, coreBaseSpinner, {
  createContent: function createContent(vnode, args) {
    return coreBaseSpinner.createContent(vnode, _extends$1(args, { Shadow: Shadow }));
  }
}));

BaseSpinner.displayName = "BaseSpinner";
BaseSpinner.classes = coreBaseSpinner.classes;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var SpinnerInstance = ViewComponent(_extends({}, coreMaterialDesignSpinner, {
  component: BaseSpinner
}));

var SpinnerToggle = StateComponent(Conditional);

var MaterialDesignSpinner = {
  view: function view(vnode) {
    return renderer(SpinnerToggle, _extends({}, vnode.attrs, {
      placeholderClassName: BaseSpinner.classes.placeholder,
      instance: SpinnerInstance
    }));
  }
};

MaterialDesignSpinner.theme = coreMaterialDesignSpinner.theme;
MaterialDesignSpinner.displayName = "MaterialDesignSpinner";

export { SpinnerInstance, MaterialDesignSpinner };
