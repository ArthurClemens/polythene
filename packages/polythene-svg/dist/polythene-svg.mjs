import m from 'mithril';
import { filterSupportedAttributes } from 'polythene-core';
import { styler } from 'polythene-css';

var vars = {
  color_light: "currentcolor",
  color_dark: "currentcolor"
};

var defineProperty = function (obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
};

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var style = function style(scope, selector, componentVars, tint) {
  var color = componentVars["color_" + tint] || "currentcolor";
  return [defineProperty({}, scope + selector, {
    color: "inherit",

    " svg": {
      color: "inherit",

      " path, rect, circle, polygon": {
        "&:not([fill=none])": {
          fill: color
        }
      }
    }
  })];
};

var color = (function (selector, componentVars) {
  return [style("", selector, componentVars, "light"), style(".pe-dark-theme ", selector, componentVars, "dark")];
});

var fns = [color];
var selector = ".pe-svg";

var customTheme = function customTheme(customSelector, customVars) {
  return styler.generateStyles([customSelector, selector], _extends({}, vars, customVars), fns);
};

styler.generateStyles([selector], vars, fns);

var classes = {
  component: "pe-svg"
};

var view = function view(vnode) {
  var attrs = vnode.attrs;
  var element = attrs.element || "div";
  var props = _extends({}, filterSupportedAttributes(attrs), {
    class: [classes.component, attrs.class].join(" ")
  });
  var content = attrs.content ? attrs.content : attrs.children || vnode.children;
  return m(element, props, [attrs.before, content, attrs.after]);
};

var svg = {
  theme: customTheme, // accepts (selector, vars)
  view: view
};

export { svg, classes, vars };
