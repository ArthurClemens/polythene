import { sel, createColor, mixin, selectorRTL, createLayout, rgba, styler } from 'polythene-core-css';
import { vars } from 'polythene-theme';

var classes = {
  component: "pe-button pe-icon-button",

  // elements
  content: "pe-icon-button__content",
  label: "pe-icon-button__label",

  // states
  compact: "pe-icon-button--compact"
};

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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

  return _ref = {}, _defineProperty(_ref, "color_" + tint, function (selector, vars$$1) {
    return [sel(selector, {
      "&, .pe-icon-button__label": {
        color: vars$$1["color_" + tint]
      }
    })];
  }), _defineProperty(_ref, "color_" + tint + "_background", function (selector, vars$$1) {
    return [sel(selector, {
      " .pe-icon-button__content": {
        backgroundColor: vars$$1["color_" + tint + "_background"]
      }
    })];
  }), _defineProperty(_ref, "color_" + tint + "_wash_opacity", function (selector, vars$$1) {
    return [sel(selector, {
      opacity: vars$$1["color_" + tint + "_wash_opacity"]
    })];
  }), _defineProperty(_ref, "color_" + tint + "_focus_opacity", function (selector, vars$$1) {
    return [sel(selector, {
      ".pe-button--focus, &.pe-button--selected": {
        " .pe-button__focus": {
          opacity: vars$$1["color_" + tint + "_focus_opacity"]
        }
      }
    })];
  }), _defineProperty(_ref, "color_" + tint + "_disabled", function (selector, vars$$1) {
    return [sel(selector, {
      ".pe-button--disabled": {
        " .pe-button__content, .pe-icon-button__label": {
          color: vars$$1["color_" + tint + "_disabled"]
        }
      }
    })];
  }), _ref;
};

var hoverTintFns = function hoverTintFns(tint) {
  var _ref2;

  return _ref2 = {}, _defineProperty(_ref2, "color_" + tint + "_hover", function (selector, vars$$1) {
    return [sel(selector, {
      " .pe-icon-button__content": {
        color: vars$$1["color_" + tint + "_hover"]
      }
    })];
  }), _defineProperty(_ref2, "color_" + tint + "_label_hover", function (selector, vars$$1) {
    return [sel(selector, {
      " .pe-icon-button__label": {
        color: vars$$1["color_" + tint + "_label_hover"]
      }
    })];
  }), _defineProperty(_ref2, "color_" + tint + "_background_hover", function (selector, vars$$1) {
    return [sel(selector, {
      " .pe-icon-button__content": {
        backgroundColor: vars$$1["color_" + tint + "_background_hover"]
      }
    })];
  }), _ref2;
};

var lightTintFns = _extends({}, generalFns, tintFns("light"));
var darkTintFns = _extends({}, generalFns, tintFns("dark"));

var lightTintHoverFns = hoverTintFns("light");
var darkTintHoverFns = hoverTintFns("dark");

var color = createColor({
  varFns: { lightTintFns: lightTintFns, darkTintFns: darkTintFns, lightTintHoverFns: lightTintHoverFns, darkTintHoverFns: darkTintHoverFns }
});

function _defineProperty$1(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var alignSide = function alignSide(isRTL) {
  return function (vars$$1) {
    return {};
  };
}; // eslint-disable-line no-unused-vars
var alignLeft = alignSide(false);
var alignRight = alignSide(true);

var _label_padding_before = function _label_padding_before(selector, vars$$1, isRTL) {
  return sel(selector, {
    " .pe-icon-button__label": _defineProperty$1({}, isRTL ? "paddingRight" : "paddingLeft", vars$$1.label_padding_before + "px")
  });
};

var _label_padding_after = function _label_padding_after(selector, vars$$1, isRTL) {
  return sel(selector, {
    " .pe-icon-button__label": _defineProperty$1({}, isRTL ? "paddingLeft" : "paddingRight", vars$$1.label_padding_after + "px")
  });
};

var varFns = {
  general_styles: function general_styles(selector, vars$$1) {
    return [sel(selector, [alignLeft(vars$$1), {
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
    }, _defineProperty$1({}, "*[dir=rtl] " + selector + ", .pe-rtl " + selector, [alignRight(vars$$1)])])];
  },
  padding: function padding(selector, vars$$1) {
    return [sel(selector, {
      " .pe-icon-button__content": {
        padding: vars$$1.padding + "px"
      }
    })];
  },
  padding_compact: function padding_compact(selector, vars$$1) {
    return [sel(selector, {
      ".pe-icon-button--compact": {
        " .pe-icon-button__content": {
          padding: vars$$1.padding_compact + "px"
        }
      }
    })];
  },
  animation_duration: function animation_duration(selector, vars$$1) {
    return [sel(selector, {
      " .pe-button__content, .pe-button__wash": [mixin.defaultTransition("all", vars$$1.animation_duration)]
    })];
  },
  label_font_size: function label_font_size(selector, vars$$1) {
    return [sel(selector, {
      " .pe-icon-button__label": {
        fontSize: vars$$1.label_font_size + "px"
      }
    })];
  },
  label_line_height: function label_line_height(selector, vars$$1) {
    return [sel(selector, {
      " .pe-icon-button__label": {
        lineHeight: vars$$1.label_line_height + "px"
      }
    })];
  },
  label_font_weight: function label_font_weight(selector, vars$$1) {
    return [sel(selector, {
      " .pe-icon-button__label": {
        fontWeight: vars$$1.label_font_weight
      }
    })];
  },
  label_text_transform: function label_text_transform(selector, vars$$1) {
    return [sel(selector, {
      " .pe-icon-button__label": {
        textTransform: vars$$1.label_text_transform
      }
    })];
  },
  label_padding_after: function label_padding_after(selector, vars$$1) {
    return [sel(selector, {}), _label_padding_after(selector, vars$$1, false), _label_padding_after(selectorRTL(selector), vars$$1, true)];
  },
  label_padding_before: function label_padding_before(selector, vars$$1) {
    return [sel(selector, {}), _label_padding_before(selector, vars$$1, false), _label_padding_before(selectorRTL(selector), vars$$1, true)];
  }
};

var layout = createLayout({ varFns: varFns });

var vars$1 = {
  general_styles: true,

  animation_duration: vars.animation_duration,
  label_font_size: 16,
  label_font_weight: 400,
  label_line_height: 20,
  label_padding_after: 0,
  label_padding_before: vars.grid_unit * 1, // 4
  label_text_transform: "initial",
  label_top_margin_factor: 1 / 12, // align with icon
  padding: (vars.grid_unit_icon_button - vars.unit_icon_size) / 2, // 12
  padding_compact: (vars.grid_unit_icon_button - vars.unit_icon_size) / 3, // 8

  color_background: "transparent", // only specify this variable to get all 2 states
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
  color_dark_wash_background: rgba(vars.color_dark_foreground, vars.blend_dark_background_hover)

  // hover colors may be set in theme; disabled by default

  // color_light_background_hover:         "currentColor",
  // color_dark_background_hover:          "currentColor",
};

var fns = [layout, color];
var selector = "." + classes.component.replace(/ /g, ".");

var addStyle = styler.createAddStyle(selector, fns, vars$1);

var getStyle = styler.createGetStyle(selector, fns, vars$1);

styler.addStyle({
  selectors: [selector],
  fns: fns,
  vars: vars$1
});

export { addStyle, color, getStyle, layout, vars$1 as vars };
