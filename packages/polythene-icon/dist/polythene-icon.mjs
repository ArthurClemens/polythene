import m from 'mithril';
import { filterSupportedAttributes } from 'polythene-core';
import { svg } from 'polythene-svg';
import { styler } from 'polythene-css';
import { vars } from 'polythene-theme';

var vars$1 = {
  size_small: vars.unit_icon_size_small,
  size_regular: vars.unit_icon_size,
  size_medium: vars.unit_icon_size_medium,
  size_large: vars.unit_icon_size_large,
  color_light: "currentcolor",
  color_dark: "currentcolor"
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

var iconSizesPx = function iconSizesPx() {
  var size = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : vars.unit_icon_size;
  return {
    width: size + "px",
    height: size + "px"
  };
};

var layout = (function (selector, componentVars) {
  return [defineProperty({}, selector, {
    display: "inline-block",
    verticalAlign: "middle",
    backgroundRepeat: "no-repeat",
    position: "relative",
    fontSize: 0,
    lineHeight: 0,

    "&.pe-icon--avatar img": {
      border: "none",
      borderRadius: "50%",
      width: "100%",
      height: "100%"
    },

    " img": {
      height: "100%"
    },

    " svg": {
      width: "100%",
      height: "100%"
    },

    "&.pe-icon--small": iconSizesPx(componentVars.size_small),
    "&.pe-icon--regular": iconSizesPx(componentVars.size_regular),
    "&.pe-icon--medium": iconSizesPx(componentVars.size_medium),
    "&.pe-icon--large": iconSizesPx(componentVars.size_large)
  })];
});

var style = function style(scope, selector, componentVars, tint) {
  var color = componentVars["color_" + tint] || "currentcolor";
  return [defineProperty({}, scope + selector, {
    fill: color,

    " svg": {
      fill: color,
      color: "inherit",

      " path, rect, circle, polygon": {
        "&:not([fill=none])": {
          fill: color
        }
      }
    }
  })];
};

var color = (function (selector, componentVars) {
  return [style("", selector, componentVars, "light"), style(".pe-dark-theme ", selector, componentVars, "dark")];
});

var fns = [layout, color];
var selector = ".pe-icon";

var customTheme = function customTheme(customSelector, customVars) {
  return styler.generateStyles([customSelector, selector], _extends({}, vars$1, customVars), fns);
};

styler.generateStyles([selector], vars$1, fns);

var classes = {
  icon: "pe-icon",
  avatar: "pe-icon--avatar",
  small: "pe-icon--small",
  regular: "pe-icon--regular",
  medium: "pe-icon--medium",
  large: "pe-icon--large"
};

var typeClasses = {
  small: classes.small,
  regular: classes.regular,
  medium: classes.medium,
  large: classes.large
};

var classForType = function classForType() {
  var mode = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "regular";
  return typeClasses[mode];
};

var view = function view(vnode) {
  var attrs = vnode.attrs;
  var element = attrs.element || "div";
  var props = _extends({}, filterSupportedAttributes(attrs), {
    class: [classes.icon, classForType(attrs.type), attrs.avatar ? classes.avatar : null, attrs.class].join(" ")
  }, attrs.events ? attrs.events : null);
  var children = vnode.children.length && vnode.children || attrs.children;
  var content = attrs.content ? attrs.content : children && children[0] ? children : attrs.svg ? m(svg, _extends({}, attrs.svg)) : attrs.msvg ? m(svg, attrs.msvg) : attrs.src ? m("img", { src: attrs.src }) : null;
  return m(element, props, [attrs.before, content, attrs.after]);
};

var icon = {
  theme: customTheme, // accepts (selector, vars)
  view: view
};

export { icon, classes, vars$1 as vars };
