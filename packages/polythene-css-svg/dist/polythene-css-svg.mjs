import { sel, createColor, createLayout, styler } from 'polythene-core-css';

var classes = {
  component: "pe-svg"
};

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var generalFns = {
  general_styles: function general_styles(selector) {
    return [sel(selector, {
      color: "inherit",

      " svg": {
        color: "inherit",

        " path, rect, circle, polygon": {
          "&:not([fill=none])": {
            fill: "currentcolor"
          }
        }
      }
    })];
  }
};

var tintFns = function tintFns(tint) {
  return _defineProperty({}, "color_" + tint, function (selector, vars) {
    return [sel(selector, {
      " svg": {
        " path, rect, circle, polygon": {
          "&:not([fill=none])": {
            fill: vars["color_" + tint]
          }
        }
      }
    })];
  });
};

var lightTintFns = _extends({}, generalFns, tintFns("light"));
var darkTintFns = _extends({}, generalFns, tintFns("dark"));

var color = createColor({
  varFns: { lightTintFns: lightTintFns, darkTintFns: darkTintFns }
});

var varFns = {
  general_styles: function general_styles(selector) {
    return [sel(selector, {
      lineHeight: 1,

      " > div, svg": {
        width: "inherit",
        height: "inherit"
      }
    })];
  }
};

var layout = createLayout({ varFns: varFns });

var vars = {
  general_styles: true,

  color_light: "currentcolor",
  color_dark: "currentcolor"
};

var fns = [layout, color];
var selector = "." + classes.component;

var addStyle = styler.createAddStyle(selector, fns, vars);

var getStyle = styler.createGetStyle(selector, fns, vars);

styler.addStyle({
  selectors: [selector],
  fns: fns,
  vars: vars
});

export { addStyle, color, getStyle, layout, vars };
