import m from 'mithril';
import { iconButton } from 'polythene-icon-button';
import { mixin, styler } from 'polythene-css';
import { componentsConfig, vars } from 'polythene-config';

var rgba = vars.rgba;

var componentConfig = {
  size_regular: 7 * vars.grid_unit_component,
  size_mini: 5 * vars.grid_unit_component,
  padding_regular: 2 * vars.grid_unit_component,

  color_light_background: rgba(vars.color_primary),
  color_light_text: rgba(vars.color_primary_foreground),

  color_dark_background: rgba(vars.color_primary),
  color_dark_text: rgba(vars.color_primary_foreground)
};

var createStyles = function createStyles(config) {
  return [{
    ".pe-button--fab": [mixin.vendorize({
      "user-select": "none"
    }, vars.prefixes_user_select), {
      display: "inline-block",
      position: "relative",
      outline: "none",
      cursor: "pointer",
      width: config.size_regular + "px",
      height: config.size_regular + "px",
      padding: config.padding_regular + "px",
      "border-radius": "50%",
      border: "none",

      "&.pe-button--fab-mini": {
        width: config.size_mini + "px",
        height: config.size_mini + "px",
        padding: (config.size_mini - vars.unit_icon_size) / 2 + "px"
      },

      " .pe-button__content": {
        padding: 0,
        "border-radius": "inherit"
      },

      " .pe-ripple": {
        "border-radius": "inherit"
      },

      " .pe-button__wash": [mixin.vendorize({
        transition: "background-color " + vars.animation_duration + " ease-in-out"
      }, vars.prefixes_transition), {
        "border-radius": "inherit",
        "pointer-events": "none",
        "background-color": "transparent"
      }]
    }]
  }];
};

var layout = (function (config) {
  return mixin.createStyles(config, createStyles);
});

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

var style = function style(config, tint) {
  var scope = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "";

  return [defineProperty({}, scope + ".pe-button--fab, a.pe-button--fab", {
    "background-color": config["color_" + tint + "_background"],
    color: config["color_" + tint + "_text"],

    " .pe-button__content": {
      "background-color": "transparent"
    }
  })];
};

var createStyles$1 = function createStyles(config) {
  return [style(config, "light"), {
    ".pe-dark-theme": [
    // inside dark theme
    style(config, "dark", " "),
    // has dark theme
    style(config, "dark", "&")]
  }];
};

var color = (function (config) {
  return mixin.createStyles(config, createStyles$1);
});

styler.styleComponent("pe-fab", "fab", componentsConfig, componentConfig, layout, color);

var CSS_CLASSES = {
  component: "pe-button--fab",
  mini: "pe-button--fab-mini"
};

var view = function view(vnode) {
  var attrs = vnode.attrs;
  return m(iconButton, _extends({}, {
    parentClass: [CSS_CLASSES.component, attrs.mini ? CSS_CLASSES.mini : null].join(" "),
    // defaults
    raised: true,
    ripple: {
      center: true,
      opacityDecayVelocity: 0.24
    },
    shadow: {
      increase: 5
    },
    ink: true,
    wash: true,
    animateOnTap: true
  }, _extends({}, attrs)));
};

var fab = {
  view: view
};

export { fab, componentConfig as fabConfig };
