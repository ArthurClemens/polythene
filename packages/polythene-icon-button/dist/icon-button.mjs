import m from 'mithril';
import { icon } from 'polythene-icon';
import { button, buttonVars } from 'polythene-button';
import { mixin, styler } from 'polythene-css';
import { styles, vars } from 'polythene-theme';

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

var padding = (vars.grid_unit_icon_button - vars.unit_icon_size) / 2; // 12
var padding_compact = (vars.grid_unit_icon_button - vars.unit_icon_size) / 3; // 8

var vars$1 = _extends({}, buttonVars, {
  padding: padding,
  padding_compact: padding_compact,

  color_light_wash_opacity: vars.blend_light_background_hover_medium,
  color_light_focus_opacity: vars.blend_light_background_hover_medium,
  color_light_flat_normal_text: vars.rgba(vars.color_light_foreground, vars.blend_light_text_secondary),

  color_dark_wash_opacity: vars.blend_dark_background_hover_medium,
  color_dark_focus_opacity: vars.blend_dark_background_hover_medium,
  color_dark_flat_normal_text: vars.rgba(vars.color_dark_foreground, vars.blend_dark_text_secondary)
});

var createStyles = function createStyles(componentVars) {
  return [{
    ".pe-button--icon": {
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
    }
  }];
};

var layout = (function (componentVars) {
  return mixin.createStyles(componentVars, createStyles);
});

var style = function style(componentVars, tint, type) {
  var scope = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "";

  return [defineProperty({}, scope + ".pe-button.pe-button--icon, a.pe-button.pe-button--icon", {
    color: componentVars["color_" + tint + "_" + type + "_normal_text"],
    background: "none",

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
      color: componentVars["color_" + tint + "_" + type + "_disabled_text"]
    },

    "&.pe-button--raised": {
      "background-color": componentVars["color_" + tint + "_background"],

      " .pe-button__content": {
        background: "transparent"
      }
    }
  })];
};

var noTouch = function noTouch(componentVars, tint, type) {
  var scope = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "";

  return [defineProperty({}, scope + ".pe-button.pe-button--icon:hover", tint === "light" ? {
    " .pe-button__wash": {
      "background-color": "currentcolor"
    }
  } : {
    " .pe-button__wash": {
      "background-color": componentVars["color_" + tint + "_" + type + "_normal_text"]
    }
  })];
};

var createStyles$1 = function createStyles(componentVars) {
  return [style(componentVars, "light", "flat"), {
    "html.pe-no-touch": [noTouch(componentVars, "light", "flat", " ")]
  }, {
    ".pe-dark-theme": [
    // inside dark theme
    style(componentVars, "dark", "flat", " "),
    // has dark theme
    style(componentVars, "dark", "flat", "&")]
  }, {
    "html.pe-no-touch .pe-dark-theme": [noTouch(componentVars, "dark", "flat", " ")]
  }];
};

var color = (function (componentVars) {
  return mixin.createStyles(componentVars, createStyles$1);
});

styler.styleComponent("pe-icon-button", "icon-button", styles, vars$1, layout, color);

var CSS_CLASSES = {
  component: "pe-button pe-button--icon",
  content: "pe-button--icon__content",
  compact: "pe-button--compact"
};

var view = function view(vnode) {
  var attrs = vnode.attrs;
  var content = attrs.content ? attrs.content : vnode.children && vnode.children[0] ? vnode.children : attrs.icon ? m(icon, attrs.icon) : null;
  return m(button, _extends({}, {
    content: m("div", { class: CSS_CLASSES.content }, content),
    parentClass: [attrs.parentClass || CSS_CLASSES.component, attrs.compact ? CSS_CLASSES.compact : null].join(" "),
    // defaults
    wash: false,
    animateOnTap: false
  }, attrs));
};

var iconButton = {
  view: view
};

export { iconButton, vars$1 as iconButtonVars };
