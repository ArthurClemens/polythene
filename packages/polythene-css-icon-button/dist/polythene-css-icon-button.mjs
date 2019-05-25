import { createColor, sel, createLayout, mixin, selectorRTL, rgba, styler } from 'polythene-core-css';
import { vars } from 'polythene-theme';

var classes = {
  component: "pe-button pe-icon-button",
  // elements
  content: "pe-icon-button__content",
  label: "pe-icon-button__label",
  // states
  compact: "pe-icon-button--compact"
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
      ".pe-button--focus, &.pe-button--selected": {
        " .pe-button__focus": {
          backgroundColor: "currentcolor"
        }
      }
    })];
  }
};

var tintFns = function tintFns(tint) {
  var _ref;

  return _ref = {}, _defineProperty(_ref, "color_" + tint, function (selector, vars) {
    return [sel(selector, {
      "&, .pe-icon-button__label": {
        color: vars["color_" + tint]
      }
    })];
  }), _defineProperty(_ref, "color_" + tint + "_background", function (selector, vars) {
    return [sel(selector, {
      " .pe-icon-button__content": {
        backgroundColor: vars["color_" + tint + "_background"]
      }
    })];
  }), _defineProperty(_ref, "color_" + tint + "_wash_opacity", function (selector, vars) {
    return [sel(selector, {
      opacity: vars["color_" + tint + "_wash_opacity"]
    })];
  }), _defineProperty(_ref, "color_" + tint + "_focus_opacity", function (selector, vars) {
    return [sel(selector, {
      ".pe-button--focus, &.pe-button--selected": {
        " .pe-button__focus": {
          opacity: vars["color_" + tint + "_focus_opacity"]
        }
      }
    })];
  }), _defineProperty(_ref, "color_" + tint + "_disabled", function (selector, vars) {
    return [sel(selector, {
      ".pe-button--disabled": {
        " .pe-button__content, .pe-icon-button__label": {
          color: vars["color_" + tint + "_disabled"]
        }
      }
    })];
  }), _ref;
};

var hoverTintFns = function hoverTintFns(tint) {
  var _ref2;

  return _ref2 = {}, _defineProperty(_ref2, "color_" + tint + "_hover", function (selector, vars) {
    return [sel(selector, {
      " .pe-icon-button__content": {
        color: vars["color_" + tint + "_hover"]
      }
    })];
  }), _defineProperty(_ref2, "color_" + tint + "_label_hover", function (selector, vars) {
    return [sel(selector, {
      " .pe-icon-button__label": {
        color: vars["color_" + tint + "_label_hover"]
      }
    })];
  }), _defineProperty(_ref2, "color_" + tint + "_background_hover", function (selector, vars) {
    return [sel(selector, {
      " .pe-icon-button__content": {
        backgroundColor: vars["color_" + tint + "_background_hover"]
      }
    })];
  }), _defineProperty(_ref2, "color_" + tint + "_wash_background", function (selector, vars) {
    return [sel(selector, {
      ":not(.pe-button--disabled):not(.pe-button--selected)": {
        " .pe-button__wash": {
          backgroundColor: vars["color_" + tint + "_wash_background"]
        }
      }
    })];
  }), _ref2;
};

var lightTintFns = _extends({}, generalFns, tintFns("light"));

var darkTintFns = _extends({}, generalFns, tintFns("dark"));

var lightTintHoverFns = hoverTintFns("light");
var darkTintHoverFns = hoverTintFns("dark");
var color = createColor({
  varFns: {
    lightTintFns: lightTintFns,
    darkTintFns: darkTintFns,
    lightTintHoverFns: lightTintHoverFns,
    darkTintHoverFns: darkTintHoverFns
  }
});

var alignSide = function alignSide(isRTL) {
  return function (vars) {
    return {};
  };
}; // eslint-disable-line no-unused-vars


var alignLeft = alignSide(false);
var alignRight = alignSide(true);

var _label_padding_before = function label_padding_before(selector, vars, isRTL) {
  return sel(selector, {
    " .pe-icon-button__label": _defineProperty({}, isRTL ? "paddingRight" : "paddingLeft", vars.label_padding_before + "px")
  });
};

var _label_padding_after = function label_padding_after(selector, vars, isRTL) {
  return sel(selector, {
    " .pe-icon-button__label": _defineProperty({}, isRTL ? "paddingLeft" : "paddingRight", vars.label_padding_after + "px")
  });
};

var varFns = {
  general_styles: function general_styles(selector, vars) {
    return [sel(selector, [alignLeft(vars), {
      // don't set button size to facilitate different icon sizes
      display: "inline-flex",
      alignItems: "center",
      cursor: "pointer",
      border: "none",
      " .pe-button__content": {
        display: "flex",
        alignItems: "center",
        fontSize: "1rem",
        borderRadius: "50%",
        position: "relative"
      },
      " .pe-icon-button__content": {
        lineHeight: 1,
        borderRadius: "50%",
        pointerEvents: "none"
      }
    }, _defineProperty({}, "*[dir=rtl] ".concat(selector, ", .pe-rtl ").concat(selector), [alignRight(vars)])])];
  },
  padding: function padding(selector, vars) {
    return [sel(selector, {
      " .pe-icon-button__content": {
        padding: vars.padding + "px"
      }
    })];
  },
  padding_compact: function padding_compact(selector, vars) {
    return [sel(selector, {
      ".pe-icon-button--compact": {
        " .pe-icon-button__content": {
          padding: vars.padding_compact + "px"
        }
      }
    })];
  },
  animation_duration: function animation_duration(selector, vars) {
    return [sel(selector, {
      " .pe-button__content, .pe-button__wash": [mixin.defaultTransition("all", vars.animation_duration)]
    })];
  },
  label_font_size: function label_font_size(selector, vars) {
    return [sel(selector, {
      " .pe-icon-button__label": {
        fontSize: vars.label_font_size + "px"
      }
    })];
  },
  label_line_height: function label_line_height(selector, vars) {
    return [sel(selector, {
      " .pe-icon-button__label": {
        lineHeight: vars.label_line_height + "px"
      }
    })];
  },
  label_font_weight: function label_font_weight(selector, vars) {
    return [sel(selector, {
      " .pe-icon-button__label": {
        fontWeight: vars.label_font_weight
      }
    })];
  },
  label_text_transform: function label_text_transform(selector, vars) {
    return [sel(selector, {
      " .pe-icon-button__label": {
        textTransform: vars.label_text_transform
      }
    })];
  },
  label_padding_after: function label_padding_after(selector, vars) {
    return [sel(selector, {}), _label_padding_after(selector, vars, false), _label_padding_after(selectorRTL(selector), vars, true)];
  },
  label_padding_before: function label_padding_before(selector, vars) {
    return [sel(selector, {}), _label_padding_before(selector, vars, false), _label_padding_before(selectorRTL(selector), vars, true)];
  }
};
var layout = createLayout({
  varFns: varFns
});

// @ts-check
/**
 * @type {IconButtonVars} iconButtonVars
 */

var iconButtonVars = {
  /**
   * Generate general styles, not defined by variables
   */
  general_styles: true,
  animation_duration: vars.animation_duration,
  label_font_size: 16,
  label_font_weight: 400,
  label_line_height: 20,
  label_padding_after: 0,
  label_padding_before: vars.grid_unit * 1,
  // 4
  label_text_transform: "initial",
  label_top_margin_factor: 1 / 12,
  // align with icon
  padding: (vars.grid_unit_icon_button - vars.unit_icon_size) / 2,
  // 12
  padding_compact: (vars.grid_unit_icon_button - vars.unit_icon_size) / 3,
  // 8
  color_background: "transparent",
  // only specify this variable to get all 2 states
  // theme specific background colors may be set in theme; disabled by default
  // color_light_background:    "none",
  // color_dark_background:     "none",
  // color_light_hover:         "inherit",
  // color_dark_hover:          "inherit",
  // color_light_label_hover:   "inherit",
  // color_dark_label_hover:    "inherit",
  color_light: rgba(vars.color_light_foreground, vars.blend_light_text_secondary),
  color_light_label: rgba(vars.color_light_foreground, vars.blend_light_text_secondary),
  color_light_disabled: rgba(vars.color_light_foreground, vars.blend_light_text_disabled),
  color_light_focus_opacity: vars.blend_light_background_hover_medium,
  color_light_wash_background: rgba(vars.color_light_foreground, vars.blend_light_background_hover),
  color_dark: rgba(vars.color_dark_foreground, vars.blend_dark_text_secondary),
  color_dark_label: rgba(vars.color_dark_foreground, vars.blend_dark_text_secondary),
  color_dark_disabled: rgba(vars.color_dark_foreground, vars.blend_dark_text_disabled),
  color_dark_focus_opacity: vars.blend_dark_background_hover_medium,
  color_dark_wash_background: rgba(vars.color_dark_foreground, vars.blend_dark_background_hover) // hover colors may be set in theme; disabled by default
  // color_light_background_hover:         "currentColor",
  // color_dark_background_hover:          "currentColor",

};

// @ts-check
var fns = [layout, color];
var selector = ".".concat(classes.component.replace(/ /g, "."));
var addStyle = styler.createAddStyle(selector, fns, iconButtonVars);
var getStyle = styler.createGetStyle(selector, fns, iconButtonVars);
styler.addStyle({
  selectors: [selector],
  fns: fns,
  vars: iconButtonVars
});

export { addStyle, color, getStyle, layout, iconButtonVars as vars };
