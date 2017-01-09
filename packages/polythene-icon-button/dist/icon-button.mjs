import m from 'mithril';
import { icon } from 'polythene-icon';
import { button } from 'polythene-button';
import { styler } from 'polythene-css';
import { styles, vars } from 'polythene-theme';

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

var createStyles = function createStyles(componentVars) {
  var className = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";

  var selector = className + ".pe-button--icon";
  return [defineProperty({}, selector, {
    // don"t set button size to facilitate different icon sizes
    display: "inline-block",
    "vertical-align": "middle",
    cursor: "pointer",
    position: "relative",
    "font-size": "1rem",
    "border-radius": "50%",
    border: "none",

    " .pe-button--icon__content": {
      "line-height": 1,
      padding: componentVars.padding + "px"
    },

    "&.pe-button--compact": {
      " .pe-button--icon__content": {
        padding: componentVars.padding_compact + "px"
      }
    }
  })];
};

var layout = (function (componentVars) {
  return styler.createStyles(componentVars, createStyles);
});

var style = function style(componentVars, scope, selector, tint) {
  return [defineProperty({}, scope + selector, {
    color: componentVars["color_" + tint + "_text"],
    "background-color": componentVars["color_" + tint + "_background"] || componentVars["color_background"],

    " .pe-button__wash": {
      opacity: componentVars["color_" + tint + "_wash_opacity"]
    },

    "&.pe-button--focus, &.pe-button--selected": {
      " .pe-button__focus": {
        opacity: componentVars["color_" + tint + "_focus_opacity"],
        "background-color": "currentcolor"
      }
    },

    "&.pe-button--disabled": {
      color: componentVars["color_" + tint + "_disabled"]
    }
  })];
};

var noTouchStyle = function noTouchStyle(componentVars, scope, selector, tint) {
  var backgroundColor = tint === "light" ? "currentcolor" : componentVars["color_" + tint];
  return [defineProperty({}, scope + selector + ":hover", {
    " .pe-button__wash": {
      "background-color": backgroundColor
    }
  })];
};

var createStyles$1 = function createStyles(componentVars) {
  var className = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";

  var selector = className + ".pe-button--icon";
  return [style(componentVars, "", selector, "light"), style(componentVars, ".pe-dark-theme ", selector, "dark"), // inside dark theme
  noTouchStyle(componentVars, "html.pe-no-touch ", selector, "light"), noTouchStyle(componentVars, "html.pe-no-touch .pe-dark-theme ", selector, "dark")];
};

var color = (function (componentVars) {
  return styler.createStyles(componentVars, createStyles$1);
});

var key = "icon-button";
var className = "pe-icon-button";

var styleComponent = function styleComponent(className, styles$$1) {
  return styler.styleComponent(className, styles$$1, key, vars$1, layout, color);
};

var customTheme = function customTheme(className, vars$$1) {
  return (
    // Inject additional styles as use the className as key
    styleComponent(className, styler.addComponentStyle(className, styles, key, vars$$1))
  );
};

styleComponent(className, styles);

var classes = {
  component: "pe-button pe-button--icon",
  content: "pe-button--icon__content",
  compact: "pe-button--compact"
};

var view = function view(vnode) {
  var attrs = vnode.attrs;
  var children = vnode.children.length && vnode.children || attrs.children;
  var content = attrs.content ? attrs.content : children && children[0] ? children : attrs.icon ? m(icon, attrs.icon) : null;
  return m(button, _extends({}, {
    content: m("div", { class: classes.content }, content),
    parentClass: [attrs.parentClass || classes.component, attrs.compact ? classes.compact : null].join(" "),
    // defaults
    wash: false,
    animateOnTap: false
  }, attrs));
};

var iconButton = {
  theme: customTheme, // accepts (className, vars)
  view: view
};

export { iconButton, vars$1 as iconButtonVars };
