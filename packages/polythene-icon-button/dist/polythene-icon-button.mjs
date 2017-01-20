import m from 'mithril';
import { icon } from 'polythene-icon';
import { button } from 'polythene-button';
import { styler } from 'polythene-css';
import { vars } from 'polythene-theme';

var rgba = vars.rgba;
var padding = (vars.grid_unit_icon_button - vars.unit_icon_size) / 2; // 12
var padding_compact = (vars.grid_unit_icon_button - vars.unit_icon_size) / 3; // 8

var vars$1 = {
  padding: padding,
  padding_compact: padding_compact,

  color_background: "transparent", // only specify this variable to get all 2 states
  // theme specific background colors may be set in theme; disabled by default
  // color_light_background:    "none",
  // color_dark_background:     "none",

  color_light: vars.rgba(vars.color_light_foreground, vars.blend_light_text_secondary),
  color_light_disabled: rgba(vars.color_light_foreground, vars.blend_light_text_disabled),
  color_light_wash_opacity: vars.blend_light_background_hover_medium,
  color_light_focus_opacity: vars.blend_light_background_hover_medium,

  color_dark: vars.rgba(vars.color_dark_foreground, vars.blend_dark_text_secondary),
  color_dark_disabled: rgba(vars.color_dark_foreground, vars.blend_dark_text_disabled),
  color_dark_wash_opacity: vars.blend_dark_background_hover_medium,
  color_dark_focus_opacity: vars.blend_dark_background_hover_medium

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

var layout = (function (selector, componentVars) {
  return [defineProperty({}, selector, {
    // don"t set button size to facilitate different icon sizes
    display: "inline-block",
    "vertical-align": "middle",
    cursor: "pointer",
    position: "relative",
    "font-size": "1rem",
    "border-radius": "50%",
    border: "none",

    " .pe-icon-button__content": {
      "line-height": 1,
      padding: componentVars.padding + "px"
    },

    "&.pe-icon-button--compact": {
      " .pe-icon-button__content": {
        padding: componentVars.padding_compact + "px"
      }
    }
  })];
});

var style = function style(scope, selector, componentVars, tint) {
  return [defineProperty({}, scope + selector, {
    color: componentVars["color_" + tint],
    backgroundColor: componentVars["color_" + tint + "_background"] || componentVars["color_background"],
    " .pe-button__wash": {
      opacity: componentVars["color_" + tint + "_wash_opacity"]
    },

    "&.pe-button--focus, &.pe-button--selected": {
      " .pe-button__focus": {
        opacity: componentVars["color_" + tint + "_focus_opacity"],
        backgroundColor: "currentcolor"
      }
    },

    "&.pe-button--disabled": {
      color: componentVars["color_" + tint + "_disabled"]
    }
  })];
};

var noTouchStyle = function noTouchStyle(scope, selector, componentVars, tint) {
  var backgroundColor = tint === "light" ? "currentcolor" : componentVars["color_" + tint];
  return [defineProperty({}, scope + selector + ":hover", {
    " .pe-button__wash": {
      backgroundColor: backgroundColor
    }
  })];
};

var color = (function (selector, componentVars) {
  return [style("", selector, componentVars, "light"), style(".pe-dark-theme ", selector, componentVars, "dark"), // inside dark theme
  noTouchStyle("html.pe-no-touch ", selector, componentVars, "light"), noTouchStyle("html.pe-no-touch .pe-dark-theme ", selector, componentVars, "dark")];
});

var fns = [layout, color];
var selector = ".pe-button.pe-icon-button";

var customTheme = function customTheme(customSelector, customVars) {
  return styler.generateStyles([customSelector, selector], _extends({}, vars$1, customVars), fns);
};

styler.generateStyles([selector], vars$1, fns);

var classes = {
  component: "pe-button pe-icon-button",
  content: "pe-icon-button__content",
  compact: "pe-icon-button--compact"
};

var view = function view(vnode) {
  var attrs = vnode.attrs;
  var content = attrs.content ? attrs.content : attrs.icon ? m(icon, attrs.icon) : attrs.children || vnode.children;
  return m(button, _extends({}, {
    content: m("div", { class: classes.content }, content),
    parentClass: [attrs.parentClass || classes.component, attrs.compact ? classes.compact : null].join(" "),
    // defaults
    wash: false,
    animateOnTap: false
  }, attrs));
};

var iconButton = {
  theme: customTheme, // accepts (selector, vars)
  view: view
};

export { iconButton, classes, vars$1 as vars };
