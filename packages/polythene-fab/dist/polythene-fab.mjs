import m from 'mithril';
import { raisedButton } from 'polythene-raised-button';
import { icon } from 'polythene-icon';
import { mixin, styler } from 'polythene-css';
import { vars } from 'polythene-theme';

var rgba = vars.rgba;

var vars$1 = {
  size_regular: 7 * vars.grid_unit_component,
  size_mini: 5 * vars.grid_unit_component,
  padding_regular: 2 * vars.grid_unit_component,

  color_light: rgba(vars.color_primary_foreground),
  color_dark: rgba(vars.color_primary_foreground),

  color_light_background: rgba(vars.color_primary),
  color_dark_background: rgba(vars.color_primary)
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
    borderRadius: "50%",
    border: "none",

    "&.pe-button--fab-mini": {
      width: componentVars.size_mini + "px",
      height: componentVars.size_mini + "px",
      padding: (componentVars.size_mini - vars.unit_icon_size) / 2 + "px"
    },

    " .pe-button__content": {
      padding: 0,
      borderRadius: "inherit"
    },

    " .pe-ripple": {
      borderRadius: "inherit"
    },

    " .pe-button__wash": [mixin.vendorize({
      transition: "background-color " + vars.animation_duration + " ease-in-out"
    }, vars.prefixes_transition), {
      borderRadius: "inherit",
      pointerEvents: "none",
      backgroundColor: "transparent"
    }]
  }])];
});

var style = function style(scope, selector, componentVars, tint) {
  return [defineProperty({}, scope + selector, {
    backgroundColor: componentVars["color_" + tint + "_background"],
    color: componentVars["color_" + tint],

    " .pe-button__content": {
      backgroundColor: "transparent"
    }
  })];
};

var color = (function (selector, componentVars) {
  return [style("", selector, componentVars, "light"), style(".pe-dark-theme ", selector, componentVars, "dark") // inside dark theme
  ];
});

var fns = [layout, color];
var selector = ".pe-button--fab";

var customTheme = function customTheme(customSelector, customVars) {
  return styler.generateStyles([customSelector, selector], _extends({}, vars$1, customVars), fns);
};

styler.generateStyles([selector], vars$1, fns);

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
  theme: customTheme, // accepts (selector, vars)
  view: view
};

export { fab, classes, vars$1 as vars };
