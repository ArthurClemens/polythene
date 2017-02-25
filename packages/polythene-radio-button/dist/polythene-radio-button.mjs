import m from 'mithril';
import { color, controlView, layout, selectionControl, vars } from 'polythene-selection-control';
import { styler } from 'polythene-css';

var layout$1 = (function (selector, componentVars) {
  return layout(selector, componentVars, "radio");
});

var color$1 = (function (selector, componentVars) {
  return color(selector, componentVars);
});

var iconOff = m.trust("<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z\"/></svg>");

var iconOn = m.trust("<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm0-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z\"/></svg>");

var _extends$1 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var fns = [layout$1, color$1];
var selector = ".pe-control.pe-radio-control";

var customTheme = function customTheme(customSelector, customVars) {
  return styler.generateStyles([customSelector, selector], _extends$1({}, vars, customVars), fns);
};

styler.generateStyles([selector], vars, fns);

var theme = {
  iconOff: iconOff,
  iconOn: iconOn
};

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var classes = {
  component: "pe-radio-control"
};

var view = function view(vnode) {
  return m(selectionControl, _extends({}, vnode.attrs, {
    theme: theme,
    controlView: controlView,
    selectable: vnode.attrs.selectable || function (selected) {
      return !selected;
    }, // default: only selectable when not checked
    defaultClass: classes.component,
    type: "radio"
  }));
};

var radioButton = {
  theme: customTheme, // accepts (selector, vars)
  view: view
};

export { radioButton, classes, vars };
