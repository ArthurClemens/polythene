import { createColor, sel, createLayout, mixin, rgba, styler } from 'polythene-core-css';
import { vars } from 'polythene-theme';

var classes = {
  component: "pe-fab",
  // elements
  content: "pe-fab__content",
  // states
  mini: "pe-fab--mini"
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
      ".pe-button--focus": {
        " .pe-button__focus": {
          opacity: 1
        }
      }
    })];
  }
};

var tintFns = function tintFns(tint) {
  var _ref;

  return _ref = {}, _defineProperty(_ref, "color_" + tint, function (selector, vars) {
    return [sel(selector, {
      " .pe-button__content": {
        color: vars["color_" + tint]
      }
    })];
  }), _defineProperty(_ref, "color_" + tint + "_background", function (selector, vars) {
    return [sel(selector, {
      " .pe-button__content": {
        backgroundColor: vars["color_" + tint + "_background"]
      }
    })];
  }), _defineProperty(_ref, "color_" + tint + "_focus_background", function (selector, vars) {
    return [sel(selector, {
      ".pe-button--focus": {
        " .pe-button__focus": {
          backgroundColor: vars["color_" + tint + "_focus_background"]
        }
      }
    })];
  }), _defineProperty(_ref, "color_" + tint + "_wash_background", function (selector, vars) {
    return [sel(selector, {
      ".pe-button--focus": {
        " .pe-button__wash": {
          backgroundColor: vars["color_" + tint + "_wash_background"]
        }
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

// @ts-check
var varFns = {
  general_styles: function general_styles(selector) {
    return [sel(selector, {
      userSelect: "none",
      "-moz-user-select": "none",
      display: "inline-block",
      position: "relative",
      outline: "none",
      cursor: "pointer",
      padding: 0,
      border: "none",
      " .pe-button__content": {
        position: "relative",
        borderRadius: "50%"
      },
      " .pe-fab__content": {
        display: "flex",
        width: "100%",
        height: "100%",
        alignItems: "center",
        justifyContent: "center"
      },
      " .pe-button__wash, .pe-button__focus": [mixin.fit(), {
        borderRadius: "inherit"
      }],
      " .pe-ripple": {
        borderRadius: "inherit"
      },
      " .pe-button__wash": {
        transition: "background-color " + vars.animation_duration + " ease-in-out",
        borderRadius: "inherit",
        pointerEvents: "none",
        backgroundColor: "transparent"
      }
    })];
  },
  size_regular: function size_regular(selector, vars) {
    return [sel(selector, {
      " .pe-button__content": {
        width: vars.size_regular + "px",
        height: vars.size_regular + "px"
      }
    })];
  },
  size_mini: function size_mini(selector, vars$1) {
    return [sel(selector, {
      ".pe-fab--mini": {
        " .pe-button__content": {
          width: vars$1.size_mini + "px",
          height: vars$1.size_mini + "px",
          padding: (vars$1.size_mini - vars.unit_icon_size) / 2 + "px"
        }
      }
    })];
  }
};
var layout = createLayout({
  varFns: varFns
});

// @ts-check
/**
 * @type {DrawerVars} drawerVars
 */

var drawerVars = {
  /**
   * Generate general styles, not defined by variables
   */
  general_styles: true,
  size_mini: 5 * vars.grid_unit_component,
  // 5 * 8 = 40
  size_regular: 7 * vars.grid_unit_component,
  // 7 * 8 = 56
  color_light: rgba(vars.color_primary_foreground),
  color_light_focus_background: rgba(vars.color_light_foreground, vars.blend_light_background_hover),
  color_light_focus_opacity: vars.blend_light_background_hover_medium,
  // same as button
  color_light_background: rgba(vars.color_primary),
  color_light_wash_background: rgba(vars.color_light_foreground, vars.blend_light_background_hover),
  color_dark: rgba(vars.color_primary_foreground),
  color_dark_focus_background: rgba(vars.color_dark_foreground, vars.blend_dark_background_hover),
  // same as button
  color_dark_focus_opacity: vars.blend_dark_background_hover_medium,
  // same as button
  color_dark_background: rgba(vars.color_primary),
  color_dark_wash_background: rgba(vars.color_dark_foreground, vars.blend_dark_background_hover)
};

// @ts-check
var fns = [layout, color];
var selector = ".".concat(classes.component);
var addStyle = styler.createAddStyle(selector, fns, drawerVars);
var getStyle = styler.createGetStyle(selector, fns, drawerVars);
styler.addStyle({
  selectors: [selector],
  fns: fns,
  vars: drawerVars
});

export { addStyle, color, getStyle, layout, drawerVars as vars };
