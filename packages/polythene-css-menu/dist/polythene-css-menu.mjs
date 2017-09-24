import { mixin, styler } from 'polythene-core-css';
import { classes, vars } from 'polythene-core-menu';
import { vars as vars$1 } from 'polythene-theme';

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var unifySize = function unifySize(componentVars, size) {
  return size < componentVars.min_size ? componentVars.min_size : size;
};

var widthClass = function widthClass(size) {
  var sizeStr = size.toString().replace(".", "-");
  return "pe-menu--width-" + sizeStr;
};

var widthStyle = function widthStyle(componentVars, size) {
  var s = unifySize(componentVars, size);
  return _defineProperty({}, "&." + widthClass(s), {
    width: componentVars.size_factor * s + "px"
  });
};

var layout = (function (selector, componentVars) {
  var _ref2;

  return [(_ref2 = {}, _defineProperty(_ref2, selector, [componentVars.sizes.map(function (size) {
    return widthStyle(componentVars, size);
  }), {
    transitionTimingFunction: "ease-out",
    transitionProperty: "all",
    zIndex: vars$1.z_menu,
    opacity: 0,
    position: "absolute",
    minWidth: vars$1.grid_unit_menu * componentVars.min_size + "px",

    "&.pe-menu--width-auto": {
      width: "auto"
    },

    "&.pe-menu--visible": {
      opacity: 1
    },

    "&.pe-menu--permanent": {
      position: "relative",
      opacity: 1,
      zIndex: 0
    },

    " .pe-menu__content": {
      width: "100%",
      borderRadius: componentVars.border_radius + "px"
    }
  }]), _defineProperty(_ref2, " .pe-menu__content", {
    " .pe-list-tile__title": [mixin.ellipsis("none")]
  }), _ref2)];
});

function _defineProperty$1(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var style = function style(scopes, selector, componentVars, tint) {
  return [_defineProperty$1({}, scopes.map(function (s) {
    return s + selector;
  }).join(","), {
    " .pe-menu__content": {
      "background-color": componentVars["color_" + tint + "_background"]
    }
  })];
};

var color = (function (selector, componentVars) {
  return [style([".pe-dark-tone", ".pe-dark-tone "], selector, componentVars, "dark"), // has/inside dark tone
  style(["", ".pe-light-tone", ".pe-light-tone "], selector, componentVars, "light")];
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var fns = [layout, color];
var selector = "." + classes.component;

var addStyle = function addStyle(customSelector, customVars) {
  return styler.generateStyles([customSelector, selector], _extends({}, vars, customVars), fns);
};

var getStyle = function getStyle(customSelector, customVars) {
  return customSelector ? styler.createStyleSheets([customSelector, selector], _extends({}, vars, customVars), fns) : styler.createStyleSheets([selector], vars, fns);
};

styler.generateStyles([selector], vars, fns);

export { addStyle, getStyle };
