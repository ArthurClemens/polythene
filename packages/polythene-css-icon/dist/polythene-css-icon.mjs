import { createColor, sel, createLayout, rgba, styler } from 'polythene-core-css';
import { vars } from 'polythene-theme';

var classes = {
  component: "pe-icon",
  // states
  avatar: "pe-icon--avatar",
  large: "pe-icon--large",
  medium: "pe-icon--medium",
  regular: "pe-icon--regular",
  small: "pe-icon--small"
};

function _defineProperty(obj, key, value) {
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
}

function _extends() {
  _extends = Object.assign || function (target) {
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

  return _extends.apply(this, arguments);
}

var generalFns = {
  general_styles: function general_styles(selector) {
    return [sel(selector, {
      color: "currentColor"
    })];
  }
};

var tintFns = function tintFns(tint) {
  var _ref;

  return _ref = {}, _defineProperty(_ref, "color_" + tint, function (selector, vars) {
    return [sel(selector, {
      color: vars["color_" + tint]
    })];
  }), _defineProperty(_ref, "color_" + tint + "_avatar_background", function (selector, vars) {
    return [sel(selector, {
      ".pe-icon--avatar": {
        backgroundColor: vars["color_" + tint + "_avatar_background"]
      }
    })];
  }), _ref;
};

var lightTintFns = _extends({}, generalFns, tintFns("light"));

var darkTintFns = _extends({}, generalFns, tintFns("dark"));

var color = createColor({
  varFns: {
    lightTintFns: lightTintFns,
    darkTintFns: darkTintFns
  }
});

var sizeDirective = function sizeDirective(size) {
  return function (selector, vars) {
    return sel(selector, _defineProperty({}, ".pe-icon--".concat(size), {
      width: vars["size_".concat(size)] + "px",
      height: vars["size_".concat(size)] + "px"
    }));
  };
};

var varFns = _extends({}, {
  general_styles: function general_styles(selector) {
    return [sel(selector, {
      display: "inline-block",
      verticalAlign: "middle",
      backgroundRepeat: "no-repeat",
      position: "relative",
      fontSize: 0,
      lineHeight: 0,
      ".pe-icon--avatar": {
        borderRadius: "50%"
      },
      ".pe-icon--avatar img": {
        border: "none",
        borderRadius: "50%",
        width: "inherit",
        height: "inherit"
      },
      " img": {
        height: "inherit"
      },
      " .pe-svg, .pe-svg > div": {
        /* React creates an additional div when wrapping an SVG */
        width: "inherit",
        height: "inherit"
      }
    })];
  }
}, ["small", "regular", "medium", "large"].reduce(function (acc, size) {
  return acc["size_".concat(size)] = sizeDirective(size), acc;
}, {}));

var layout = createLayout({
  varFns: varFns
});

// @ts-check
/**
 * @type {IconVars} iconVars
 */

var iconVars = {
  /**
   * Generate general styles, not defined by variables
   */
  general_styles: true,
  size_small: vars.unit_icon_size_small,
  // 16 
  size_regular: vars.unit_icon_size,
  // 24
  size_medium: vars.unit_icon_size_medium,
  // 32
  size_large: vars.unit_icon_size_large,
  // 40
  // avatar background is visible when image is not yet loaded
  color_light_avatar_background: rgba(vars.color_light_foreground, vars.blend_light_background_disabled),
  color_dark_avatar_background: rgba(vars.color_dark_foreground, vars.blend_dark_background_disabled),
  color_light: "currentcolor",
  color_dark: "currentcolor"
};

// @ts-check
var fns = [layout, color];
var selector = ".".concat(classes.component);
var addStyle = styler.createAddStyle(selector, fns, iconVars);
var getStyle = styler.createGetStyle(selector, fns, iconVars);
styler.addStyle({
  selectors: [selector],
  fns: fns,
  vars: iconVars
});

export { addStyle, color, getStyle, layout, iconVars as vars };
