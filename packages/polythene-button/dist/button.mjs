import m from 'mithril';
import { ripple } from 'polythene-ripple';
import { filterSupportedAttributes } from 'polythene-core';
import { mixin, styler } from 'polythene-css';
import { styles, vars } from 'polythene-theme';

var rgba = vars.rgba;
var touch_height = vars.unit_touch_height;
var height = 36;

var vars$1 = {
  margin_h: vars.grid_unit,
  border_radius: vars.unit_item_border_radius,
  font_size: 14,
  font_weight: 500,
  outer_padding_v: (touch_height - height) / 2,
  padding_h: 2 * vars.grid_unit,
  padding_v: 11,
  min_width: 8 * vars.grid_unit_component,
  text_transform: "uppercase",
  border_width: 0, // no border in MD, but used to correctly set the height when a theme does set a border

  color_light_background: "transparent",
  color_light_text: rgba(vars.color_light_foreground, vars.blend_light_text_primary),
  color_light_hover_background: rgba(vars.color_light_foreground, vars.blend_light_background_hover),
  color_light_focus_background: rgba(vars.color_light_foreground, vars.blend_light_background_hover),
  color_light_active_background: rgba(vars.color_light_foreground, vars.blend_light_background_active),
  color_light_disabled_background: "transparent",
  color_light_disabled_text: rgba(vars.color_light_foreground, vars.blend_light_text_disabled),

  // border colors may be set in theme; disabled by default
  // color_light_border:              "transparent", // only specify this variable to get all 4 states
  // color_light_hover_border:        "transparent",
  // color_light_active_border:       "transparent",
  // color_light_disabled_border:     "transparent",

  color_dark_background: "transparent",
  color_dark_text: rgba(vars.color_dark_foreground, vars.blend_dark_text_primary),
  color_dark_hover_background: rgba(vars.color_dark_foreground, vars.blend_dark_background_hover),
  color_dark_focus_background: rgba(vars.color_dark_foreground, vars.blend_dark_background_hover),
  color_dark_active_background: rgba(vars.color_dark_foreground, vars.blend_dark_background_active),
  color_dark_disabled_background: "transparent",
  color_dark_disabled_text: rgba(vars.color_dark_foreground, vars.blend_dark_text_disabled)

};

var createStyles = function createStyles(componentVars) {
  return [{
    ".pe-button": [mixin.vendorize({
      "user-select": "none"
    }, vars.prefixes_user_select), {
      outline: "none",
      padding: 0,
      "text-decoration": "none",
      "text-align": "center",
      cursor: "pointer",

      "&.pe-button--selected, &.pe-button--disabled, &.pe-button--inactive": {
        cursor: "default",
        "pointer-events": "none"
      },

      " .pe-button__content": {
        position: "relative",
        "border-radius": "inherit"
      },

      " .pe-button__label": [mixin.fontSmoothing(), {
        position: "relative",
        display: "block",
        "border-radius": "inherit",
        "pointer-events": "none"
      }],

      " .pe-button__wash, .pe-button__focus": [mixin.defaultTransition("background-color"), mixin.fit(), {
        "border-radius": "inherit",
        "pointer-events": "none"
      }],

      " .pe-button__focus": {
        opacity: 0
      },

      "&.pe-button--focus": {
        " .pe-button__focus": {
          opacity: 1
        }
      },

      " .pe-button__wash": {
        "z-index": 0
      }
    }],
    ".pe-button--text": {
      display: "inline-block",
      "min-width": componentVars.min_width + "px",
      margin: "0 " + componentVars.margin_h + "px",
      padding: componentVars.outer_padding_v + "px 0",
      background: "transparent",
      border: "none",

      " .pe-button__content": {
        position: "relative",
        "border-width": 0,
        padding: "0 " + componentVars.padding_h + "px",
        "border-radius": componentVars.border_radius + "px"
      },

      " .pe-button__label": {
        padding: componentVars.padding_v + "px 0",
        "font-size": componentVars.font_size + "px",
        "line-height": componentVars.font_size + "px",
        "font-weight": componentVars.font_weight,
        "text-transform": componentVars.text_transform,
        "white-space": "pre"
      },

      "&.pe-button--borders": {
        " .pe-button__wash, pe-button__focus, .pe-ripple": mixin.fit(-1),

        " .pe-button__content": {
          "border-style": "solid",
          "border-width": "1px"
        },
        " .pe-button__label": {
          padding: componentVars.padding_v - 1 + "px 0"
        }
      }
    }
  }];
};

var layout = (function (componentVars) {
  return mixin.createStyles(componentVars, createStyles);
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
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

var style = function style(componentVars, tint) {
  var scope = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "";

  var normalBorder = componentVars["color_" + tint + "_border"] || "transparent";
  var activeBorder = componentVars["color_" + tint + "_active_border"] || normalBorder;
  var disabledBorder = componentVars["color_" + tint + "_disabled_border"] || normalBorder;
  return [defineProperty({}, scope + ".pe-button", {
    "&, &:link, &:visited": {
      color: componentVars["color_" + tint + "_text"]
    },

    " .pe-button__content": {
      "background-color": componentVars["color_" + tint + "_background"],
      "border-color": normalBorder
    },

    "&.pe-button--disabled": {
      color: componentVars["color_" + tint + "_disabled_text"],

      " .pe-button__content": {
        "background-color": componentVars["color_" + tint + "_disabled_background"],
        "border-color": disabledBorder
      }
    },

    "&.pe-button--selected": {
      " .pe-button__content": {
        "background-color": componentVars["color_" + tint + "_active_background"],
        "border-color": activeBorder
      },
      " .pe-button__focus": {
        opacity: 1,
        "background-color": componentVars["color_" + tint + "_focus_background"]
      }
    },

    "&.pe-button--focus": {
      " .pe-button__focus": {
        opacity: 1,
        "background-color": componentVars["color_" + tint + "_focus_background"]
      }
    }
  })];
};

var noTouch = function noTouch(componentVars, tint, type) {
  var scope = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "";

  var normalBorder = componentVars["color_" + tint + "_border"];
  var hoverBorder = componentVars["color_" + tint + "_border"] || normalBorder;
  return [defineProperty({}, scope + ".pe-button:hover", {
    "&:not(.pe-button--selected):not(.pe-button--inactive) .pe-button__wash": {
      "background-color": componentVars["color_" + tint + "_hover_background"],
      "border-color": hoverBorder
    }
  })];
};

var createStyles$1 = function createStyles(componentVars) {
  return [style(componentVars, "light"), {
    ".pe-dark-theme": [
    // inside dark theme
    style(componentVars, "dark", " "),
    // has dark theme
    style(componentVars, "dark", "&")]
  }, {
    "html.pe-no-touch .pe-dark-theme": [noTouch(componentVars, "dark", " "), noTouch(componentVars, "dark", "&")]
  }];
};

var color = (function (componentVars) {
  return mixin.createStyles(componentVars, createStyles$1);
});

var key = "button";
var className = "pe-button";

var styleComponent = function styleComponent(className, styles$$1) {
  return styler.styleComponent(className, styles$$1, key, vars$1, layout, color);
};

var customTheme = function customTheme(className, vars$$1) {
  return (
    // Inject additional styles as use className as key
    styleComponent(className, styler.addComponentStyle(className, styles, key, vars$$1))
  );
};

styleComponent(className, styles);

var classes = {
  component: "pe-button pe-button--text",
  content: "pe-button__content",
  label: "pe-button__label",
  wash: "pe-button__wash",
  focus: "pe-button__focus",
  selected: "pe-button--selected",
  disabled: "pe-button--disabled",
  borders: "pe-button--borders",
  inactive: "pe-button--inactive",
  focusState: "pe-button--focus"
};

var EL_ATTRS = ["formaction", "type"];

var view = function view(vnode) {
  var state = vnode.state;
  var attrs = vnode.attrs;
  var noink = attrs.ink !== undefined && attrs.ink === false;
  var disabled = attrs.disabled;
  var element = attrs.element || "a";
  var tabIndex = disabled || state.inactive ? -1 : attrs.tabindex || 0;
  var onClickHandler = attrs.events && attrs.events.onclick;
  var props = _extends({}, filterSupportedAttributes(attrs, EL_ATTRS), {
    class: [attrs.parentClass || classes.component, attrs.selected ? classes.selected : null, disabled ? classes.disabled : null, state.inactive ? classes.inactive : null, attrs.borders ? classes.borders : null, state.focus ? classes.focusState : null, attrs.class].join(" "),
    tabIndex: tabIndex,
    // handle focus events
    onfocus: function onfocus() {
      return state.focus = !state.mouseover;
    },
    onblur: function onblur() {
      return state.focus = false;
    },
    // don"t show focus on click (detected by not being in mouse over state)
    onmouseover: function onmouseover() {
      return state.mouseover = true;
    },
    onmouseout: function onmouseout() {
      return state.mouseover = false;
    },
    // if focus, dispatch click event on ENTER
    onkeydown: function onkeydown(e) {
      if (e.which === 13 && state.focus) {
        state.focus = false;
        if (onClickHandler) {
          onClickHandler(e);
        }
      }
    }
  }, attrs.events ? _extends({}, attrs.events) : null, attrs.url ? _extends({}, attrs.url) : null, disabled ? { disabled: true } : null);
  var children = vnode.children.length && vnode.children || attrs.children;
  var label = attrs.content ? attrs.content : attrs.label ? _typeof(attrs.label) === "object" ? attrs.label : m("div", { class: classes.label }, attrs.label) : children && children[0] ? children : null;
  var noWash = disabled || attrs.wash !== undefined && !attrs.wash;
  var content = label ? m("div", { class: classes.content }, [!disabled && attrs.shadowComponent ? attrs.shadowComponent : null,
  // ripple
  disabled || noink ? null : m(ripple, attrs.ripple),
  // hover
  noWash ? null : m("div", { class: classes.wash }),
  // focus
  disabled ? null : m("div", { class: classes.focus }), label]) : null;
  return m(element, props, [attrs.before, content, attrs.after]);
};

var button = {
  theme: customTheme, // accepts (className, vars)
  oninit: function oninit(vnode) {
    vnode.state = {
      el: undefined,
      inactive: !!vnode.attrs.inactive,
      focus: false,
      mouseover: false
    };
  },
  view: view
};

export { button, vars$1 as buttonVars };
