import { multiple } from 'polythene-core-essentials';
import { classes, instance, vars } from 'polythene-notification';
import { flex, styler } from 'polythene-core-css';
import { vars as vars$1 } from 'polythene-theme';

var _extends$2 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var classes$1 = _extends$2({}, classes, {
  component: "pe-notification pe-snackbar",

  // elements
  holder: "pe-snackbar__holder",
  placeholder: "pe-snackbar__placeholder",

  // states
  open: "pe-snackbar--open"
});

var _extends$3 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var rgba = vars$1.rgba;

var vars$2 = _extends$3({}, vars, {
  border_radius: 0,
  tablet_min_width: 288,
  tablet_max_width: 568,
  min_height: 0,

  color_dark_background: rgba(vars$1.color_dark_background)
});

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var tabletStyle = function tabletStyle(componentVars) {
  return {
    width: "100%",
    minWidth: componentVars.tablet_min_width + "px",
    maxWidth: componentVars.tablet_max_width + "px",
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    borderTopLeftRadius: vars$1.unit_block_border_radius + "px",
    borderTopRightRadius: vars$1.unit_block_border_radius + "px",

    ".pe-notification--horizontal": {
      " .pe-notification__title": {
        paddingRight: "30px"
      }
    }
  };
};

var layout = (function (selector, componentVars) {
  var _ref2;

  return [(_ref2 = {}, _defineProperty(_ref2, selector, {
    minHeight: componentVars.min_height
  }), _defineProperty(_ref2, "@media (min-width: " + vars$1.breakpoint_small_handset_landscape + "px)", _defineProperty({}, selector, tabletStyle(componentVars))), _ref2)];
});

function _defineProperty$1(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var style = function style(scopes, selector, componentVars, tint) {
  return [_defineProperty$1({}, scopes.map(function (s) {
    return s + selector;
  }).join(","), {
    color: componentVars["color_" + tint + "_text"],
    background: componentVars["color_" + tint + "_background"]
  })];
};

var color = (function (selector, componentVars) {
  return [style([".pe-dark-tone", ".pe-dark-tone "], selector, componentVars, "dark"), // has/inside dark theme
  style(["", ".pe-light-tone", ".pe-light-tone "], selector, componentVars, "light")];
});

function _defineProperty$2(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var holderLayout = (function (selector) {
  return [_defineProperty$2({}, selector, [flex.layoutCenterCenter, {
    top: "auto",
    right: 0,
    bottom: 0,
    left: 0,
    zIndex: vars$1.z_notification,
    pointerEvents: "none",

    ".pe-multiple--screen": {
      position: "fixed"
    },
    ".pe-multiple--container": {
      position: "absolute"
    }
  }])];
});

var _extends$1 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var fns = [layout, color];
var selector = "." + classes$1.component.replace(/ /g, ".");

var holderFns = [holderLayout];
var holderSelector = "." + classes$1.holder.replace(/ /g, ".");

var customTheme = function customTheme(customSelector, customVars) {
  return styler.generateStyles([customSelector, selector], _extends$1({}, vars$2, customVars), fns), styler.generateStyles([customSelector, holderSelector], _extends$1({}, vars$2, customVars), holderFns);
};

styler.generateStyles([selector], vars$2, fns);
styler.generateStyles([holderSelector], vars$2, holderFns);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var instance$1 = _extends({}, instance, {
  theme: customTheme // accepts (selector, vars)
});

var show = function show(el, opts) {
  var height = el.getBoundingClientRect().height;
  return {
    el: el,
    showDuration: opts.showDuration || .4,
    showDelay: opts.showDelay || 0,
    beforeShow: function beforeShow() {
      return el.style.transform = "translate3d(0, " + height + "px, 0)";
    },
    show: function show() {
      return el.style.transform = "translate3d(0, " + 0 + "px, 0)";
    }
  };
};

var hide = function hide(el, opts) {
  var height = el.getBoundingClientRect().height;
  return {
    el: el,
    hideDuration: opts.hideDuration || .4,
    hideDelay: opts.hideDelay || 0,
    hide: function hide() {
      return el.style.transform = "translate3d(0, " + height + "px, 0)";
    },
    afterHide: function afterHide() {
      return el.style.transform = "translate3d(0, " + 0 + "px, 0)";
    }
  };
};

var transitions = {
  show: show,
  hide: hide
};

var snackbar = multiple({
  instance: instance$1,
  transitions: transitions,
  queue: true,
  defaultId: "default_snackbar",
  class: classes$1.component,
  element: "." + classes$1.holder.replace(/ /g, "."),
  placeholder: "span." + classes$1.placeholder.replace(/ /g, "."),
  bodyShowClass: classes$1.open
});

export { vars$2 as vars, classes$1 as classes };export default snackbar;
