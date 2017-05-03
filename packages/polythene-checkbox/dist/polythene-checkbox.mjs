import m from 'mithril';
import { color, controlView, layout, selectionControl, vars } from 'polythene-selection-control';
import { styler } from 'polythene-core-css';

var classes = {
  component: "pe-checkbox-control"
};

var layout$1 = (function (selector, componentVars) {
  return layout(selector, componentVars, "checkbox");
});

var color$1 = (function (selector, componentVars) {
  return color(selector, componentVars);
});

var iconOff = m.trust("<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z\"/></svg>");

var iconOn = m.trust("<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z\"/></svg>");

var _extends$1 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var fns = [layout$1, color$1];
var selector = "." + classes.component;

var customTheme = function customTheme(customSelector, customVars) {
  return styler.generateStyles([customSelector, selector], _extends$1({}, vars, customVars), fns);
};

styler.generateStyles([selector], vars, fns);

var theme = {
  iconOff: iconOff,
  iconOn: iconOn
};

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var view = function view(vnode) {
  return m(selectionControl, _extends({}, vnode.attrs, {
    theme: theme,
    controlView: controlView,
    selectable: vnode.attrs.selectable || function () {
      return true;
    }, // default: always selectable, regardless the checked state
    instanceClass: classes.component,
    type: "checkbox"
  }));
};

var checkbox = {
  theme: customTheme, // accepts (selector, vars)
  view: view
};

export { classes, vars };export default checkbox;
