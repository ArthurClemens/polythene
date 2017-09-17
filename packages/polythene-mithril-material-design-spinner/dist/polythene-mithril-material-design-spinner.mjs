import { StateComponent, renderer } from 'polythene-mithril-base';
import { Conditional } from 'polythene-core';
import { classes, coreMaterialDesignSpinner } from 'polythene-core-material-design-spinner';
import { BaseSpinner } from 'polythene-mithril-base-spinner';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var SpinnerInstance = StateComponent(_extends({}, coreMaterialDesignSpinner, { component: BaseSpinner }));

var SpinnerToggle = StateComponent(Conditional);
SpinnerToggle.displayName = "MaterialDesignSpinnerToggle";

var MaterialDesignSpinner = {
  view: function view(vnode) {
    return renderer(SpinnerToggle, _extends({}, vnode.attrs, {
      placeholderClassName: BaseSpinner.classes.placeholder,
      instance: SpinnerInstance
    }));
  }
};

MaterialDesignSpinner.classes = classes;
MaterialDesignSpinner.displayName = "MaterialDesignSpinner";

export { MaterialDesignSpinner };
