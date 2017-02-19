import m from 'mithril';
import { ripple } from 'polythene-ripple';
import { filterSupportedAttributes } from 'polythene-core';
import { mixin, styler } from 'polythene-css';
import { vars } from 'polythene-theme';

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

var baseLayout = (function (selector) {
  return [defineProperty({}, selector, [mixin.vendorize({
    userSelect: "none"
  }, vars.prefixes_user_select), {
    outline: "none",
    padding: 0,
    textDecoration: "none",
    textAlign: "center",
    cursor: "pointer",

    ".pe-button--selected, &.pe-button--disabled, &.pe-button--inactive": {
      cursor: "default",
      pointerEvents: "none"
    },

    ".pe-button--focus": {
      " .pe-button__focus": {
        opacity: 1
      }
    },

    " .pe-button__content": {
      position: "relative",
      borderRadius: "inherit"
    },

    " .pe-button__label": [mixin.fontSmoothing(), {
      position: "relative",
      display: "block",
      borderRadius: "inherit",
      pointerEvents: "none"
    }],

    " .pe-button__wash, .pe-button__focus": [mixin.defaultTransition("background-color"), mixin.fit(), {
      borderRadius: "inherit",
      pointerEvents: "none"
    }],

    " .pe-button__focus": {
      opacity: 0
    },

    " .pe-button__wash": {
      zIndex: 0
    }
  }])];
});

var layout = (function (selector, componentVars) {
  return [defineProperty({}, selector, {
    display: "inline-block",
    minWidth: componentVars.min_width + "px",
    margin: "0 " + componentVars.margin_h + "px",
    padding: componentVars.outer_padding_v + "px 0",
    background: "transparent",
    border: "none",

    " .pe-button__content": {
      position: "relative",
      borderWidth: 0,
      padding: "0 " + componentVars.padding_h + "px",
      borderRadius: componentVars.border_radius + "px"
    },

    " .pe-button__label": {
      padding: componentVars.padding_v + "px 0",
      fontSize: componentVars.font_size + "px",
      lineHeight: componentVars.font_size + "px",
      fontWeight: componentVars.font_weight,
      textTransform: componentVars.text_transform,
      whiteSpace: "pre"
    },

    ".pe-button--borders": {
      " .pe-button__wash, pe-button__focus, .pe-ripple": mixin.fit(-1),

      " .pe-button__content": {
        borderStyle: "solid",
        borderWidth: "1px"
      },
      " .pe-button__label": {
        padding: componentVars.padding_v - 1 + "px 0"
      }
    }
  })];
});

var style = function style(scope, selector, componentVars, tint) {
  var normalBorder = componentVars["color_" + tint + "_border"] || "transparent";
  var activeBorder = componentVars["color_" + tint + "_active_border"] || normalBorder;
  var disabledBorder = componentVars["color_" + tint + "_disabled_border"] || normalBorder;
  return [defineProperty({}, scope + selector, {
    "&, &:link, &:visited": {
      color: componentVars["color_" + tint + "_text"]
    },

    " .pe-button__content": {
      backgroundColor: componentVars["color_" + tint + "_background"],
      borderColor: normalBorder
    },

    ".pe-button--disabled": {
      color: componentVars["color_" + tint + "_disabled_text"],

      " .pe-button__content": {
        backgroundColor: componentVars["color_" + tint + "_disabled_background"],
        borderColor: disabledBorder
      }
    },

    ".pe-button--selected": {
      " .pe-button__content": {
        backgroundColor: componentVars["color_" + tint + "_active_background"],
        borderColor: activeBorder
      },
      " .pe-button__focus": {
        opacity: 1,
        backgroundColor: componentVars["color_" + tint + "_focus_background"]
      }
    },

    ".pe-button--focus": {
      " .pe-button__focus": {
        opacity: 1,
        backgroundColor: componentVars["color_" + tint + "_focus_background"]
      }
    }
  })];
};

var noTouchStyle = function noTouchStyle(scope, selector, componentVars, tint) {
  var normalBorder = componentVars["color_" + tint + "_border"] || "transparent";
  var hoverBorder = componentVars["color_" + tint + "_border"] || normalBorder;
  return [defineProperty({}, scope + selector + ":hover", {
    ":not(.pe-button--selected):not(.pe-button--inactive) .pe-button__wash": {
      backgroundColor: componentVars["color_" + tint + "_hover_background"],
      borderColor: hoverBorder
    }
  })];
};

var color = (function (selector, componentVars) {
  return [style("", selector, componentVars, "light"), style(".pe-dark-theme ", selector, componentVars, "dark"), // inside dark theme
  noTouchStyle("html.pe-no-touch ", selector, componentVars, "light"), noTouchStyle("html.pe-no-touch .pe-dark-theme ", selector, componentVars, "dark")];
});

var fns = [layout, color];
var baseSelector = ".pe-button";
var selector = ".pe-button.pe-text-button";

var customTheme = function customTheme(customSelector, customVars) {
  return styler.generateStyles([customSelector, selector], _extends({}, vars$1, customVars), fns);
};

styler.generateStyles([baseSelector], vars$1, [baseLayout]);
styler.generateStyles([selector], vars$1, fns);

var classes = {
  component: "pe-button pe-text-button",
  content: "pe-button__content",
  label: "pe-button__label",
  wash: "pe-button__wash",
  focus: "pe-button__focus",
  selected: "pe-button--selected",
  disabled: "pe-button--disabled",
  borders: "pe-button--borders",
  inactive: "pe-button--inactive",
  focused: "pe-button--focus"
};

var EL_ATTRS = ["formaction", "type"];

var view = function view(vnode) {
  var state = vnode.state;
  var attrs = vnode.attrs;
  var noink = attrs.ink !== undefined && attrs.ink === false;
  var disabled = attrs.disabled;
  var element = attrs.element || "a";
  var tabIndex = disabled || attrs.inactive ? -1 : attrs.tabindex || 0;
  var onClickHandler = attrs.events && attrs.events.onclick;
  var props = _extends({}, filterSupportedAttributes(attrs, EL_ATTRS), {
    class: [attrs.parentClass || classes.component, attrs.selected ? classes.selected : null, disabled ? classes.disabled : null, attrs.inactive ? classes.inactive : null, attrs.borders ? classes.borders : null, state.focus ? classes.focused : null, attrs.class].join(" "),
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
  }, attrs.style ? { style: {} } : null, attrs.events, attrs.url, disabled ? { disabled: true } : null);
  var children = attrs.children || vnode.children;
  var label = attrs.content ? attrs.content : attrs.label ? _typeof(attrs.label) === "object" ? attrs.label : m("div", { class: classes.label }, attrs.label) : children && children[0] ? children : null;
  var noWash = disabled || attrs.wash !== undefined && !attrs.wash;
  var content = label ? m("div", {
    class: classes.content,
    style: attrs.style || {}
  }, [!disabled && attrs.shadowComponent // "protected" option, used by raised-button
  ? attrs.shadowComponent : null,
  // ripple
  disabled || noink ? null : m(ripple, _extends({}, attrs.ripple, {
    getTarget: function getTarget() {
      return vnode.dom;
    }
  })),
  // hover
  noWash ? null : m("div", { class: classes.wash }),
  // focus
  disabled ? null : m("div", { class: classes.focus }), label]) : null;
  return m(element, props, [attrs.before, content, attrs.after]);
};

var button = {
  theme: customTheme, // accepts (selector, vars)
  oninit: function oninit(vnode) {
    vnode.state.focus = false;
    vnode.state.mouseover = false;
  },
  view: view
};

export { button, classes, vars$1 as vars };
