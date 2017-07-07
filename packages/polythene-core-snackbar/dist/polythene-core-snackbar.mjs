import { classes, coreNotificationInstance, vars } from 'polythene-core-notification';
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
  return [style([".pe-dark-tone", ".pe-dark-tone "], selector, componentVars, "dark"), // has/inside dark tone
  style(["", ".pe-light-tone", ".pe-light-tone "], selector, componentVars, "light")];
});

function _defineProperty$2(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var holderLayout = (function (selector) {
  var _ref;

  return [(_ref = {}, _defineProperty$2(_ref, selector, [flex.layoutCenterCenter, {
    position: "fixed",
    top: "auto",
    right: 0,
    bottom: 0,
    left: 0,
    zIndex: vars$1.z_notification,
    pointerEvents: "none"
  }]), _defineProperty$2(_ref, ".pe-notification--container " + selector, {
    position: "relative"
  }), _ref)];
});

var _extends$1 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var fns = [layout, color];
var selector = "." + classes$1.component.replace(/ /g, ".");

var holderFns = [holderLayout];
var holderSelector = "." + classes$1.holder.replace(/ /g, ".");

var customTheme = function customTheme(customSelector, customVars) {
  return styler.generateStyles([customSelector, selector], _extends$1({}, vars$2, customVars), fns);
};

styler.generateStyles([selector], vars$2, fns);
styler.generateStyles([holderSelector], vars$2, holderFns);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var coreSnackbarInstance = _extends({}, coreNotificationInstance, {
  theme: customTheme
});

var show = function show(_ref) {
  var containerEl = _ref.containerEl,
      el = _ref.el,
      showDuration = _ref.showDuration,
      showDelay = _ref.showDelay;

  var height = el.getBoundingClientRect().height;
  return {
    el: containerEl,
    showDuration: showDuration || .4,
    showDelay: showDelay || 0,
    beforeShow: function beforeShow() {
      return el.style.visibility = "initial", containerEl.style.transform = "translate3d(0, " + height + "px, 0)";
    },
    show: function show() {
      return containerEl.style.transform = "translate3d(0, 0px, 0)";
    }
  };
};

var hide = function hide(_ref2) {
  var containerEl = _ref2.containerEl,
      el = _ref2.el,
      hideDuration = _ref2.hideDuration,
      hideDelay = _ref2.hideDelay;

  var height = el.getBoundingClientRect().height;
  return {
    el: containerEl,
    hideDuration: hideDuration || .4,
    hideDelay: hideDelay || 0,
    hide: function hide() {
      return containerEl.style.transform = "translate3d(0, " + height + "px, 0)";
    },
    // reset to original position to counter the removal of the snackbar instance
    afterHide: function afterHide() {
      return (
        // prevent a "bounce back"
        containerEl.style.transitionDuration = "0ms",
        // prevent flickering when snackbar instance is not yet removed (in case a next snackbars is shown)
        el.style.visibility = "hidden", containerEl.style.transform = "translate3d(0, 0px, 0)"
      );
    }
  };
};

var transitions = {
  show: show,
  hide: hide
};

export { coreSnackbarInstance, classes$1 as classes, vars$2 as vars, transitions };
