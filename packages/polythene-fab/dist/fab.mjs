import m from 'mithril';
import { raisedButton } from 'polythene-raised-button';
import { icon } from 'polythene-icon';
import { mixin, styler } from 'polythene-css';
import { styles, vars } from 'polythene-theme';

var rgba = vars.rgba;

var vars$1 = {
  size_regular: 7 * vars.grid_unit_component,
  size_mini: 5 * vars.grid_unit_component,
  padding_regular: 2 * vars.grid_unit_component,

  color_light_background: rgba(vars.color_primary),
  color_light_text: rgba(vars.color_primary_foreground),

  color_dark_background: rgba(vars.color_primary),
  color_dark_text: rgba(vars.color_primary_foreground)
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

  var selector = className + ".pe-button--fab";
  return [defineProperty({}, selector, [mixin.vendorize({
    "user-select": "none"
  }, vars.prefixes_user_select), {
    display: "inline-block",
    position: "relative",
    outline: "none",
    cursor: "pointer",
    width: componentVars.size_regular + "px",
    height: componentVars.size_regular + "px",
    padding: componentVars.padding_regular + "px",
    "border-radius": "50%",
    border: "none",

    "&.pe-button--fab-mini": {
      width: componentVars.size_mini + "px",
      height: componentVars.size_mini + "px",
      padding: (componentVars.size_mini - vars.unit_icon_size) / 2 + "px"
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
  }])];
};

var layout = (function (componentVars) {
  return styler.createStyles(componentVars, createStyles);
});

var style = function style(componentVars, scope, selector, tint) {
  return [defineProperty({}, scope + selector, {
    "background-color": componentVars["color_" + tint + "_background"],
    color: componentVars["color_" + tint + "_text"],

    " .pe-button__content": {
      "background-color": "transparent"
    }
  })];
};

var createStyles$1 = function createStyles(componentVars) {
  var className = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";

  var selector = className + ".pe-button--fab";
  return [style(componentVars, "", selector, "light"), style(componentVars, ".pe-dark-theme ", selector, "dark") // inside dark theme
  ];
};

var color = (function (componentVars) {
  return styler.createStyles(componentVars, createStyles$1);
});

var key = "fab";
var className = "pe-fab";

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
  component: "pe-button--fab",
  content: "pe-button--fab__content",
  mini: "pe-button--fab-mini"
};

var view = function view(vnode) {
  var attrs = vnode.attrs;
  var children = vnode.children.length && vnode.children || attrs.children;
  var content = attrs.content ? attrs.content : children && children[0] ? children : attrs.icon ? m(icon, attrs.icon) : null;
  return m(raisedButton, _extends({}, {
    content: m("div", { class: classes.content }, content),
    parentClass: [classes.component, attrs.mini ? classes.mini : null].join(" "),
    // defaults
    ripple: {
      center: true,
      opacityDecayVelocity: 0.24
    },
    shadow: {
      increase: 5
    },
    ink: true,
    wash: true,
    animateOnTap: attrs.animateOnTap !== undefined ? attrs.animateOnTap : true,
    children: children
  }, attrs));
};

var fab = {
  theme: customTheme, // accepts (className, vars)
  view: view
};

export { fab, vars$1 as fabVars };
