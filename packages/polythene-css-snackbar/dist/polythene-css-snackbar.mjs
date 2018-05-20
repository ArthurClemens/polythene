import { vars } from 'polythene-theme';
import { vars as vars$1, customLayoutFns, color } from 'polythene-css-notification';
import { flex, styler } from 'polythene-core-css';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var rgba = function rgba(colorStr) {
  var opacity = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  return "rgba(" + colorStr + ", " + opacity + ")";
};

var vars$2 = _extends({}, vars$1, {
  animation_hide_css: "",
  animation_show_css: "",
  border_radius: 0,
  max_width: 568,
  min_height: 0,
  min_width: 288,

  color_dark_background: rgba(vars.color_dark_background)
});

var notificationClasses = {
  component: "pe-notification",

  // elements
  action: "pe-notification__action",
  content: "pe-notification__content",
  holder: "pe-notification__holder",
  placeholder: "pe-notification__placeholder",
  title: "pe-notification__title",

  // states
  hasContainer: "pe-notification--container",
  horizontal: "pe-notification--horizontal",
  multilineTitle: "pe-notification__title--multi-line",
  vertical: "pe-notification--vertical",
  visible: "pe-notification--visible"
};

var _extends$1 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var classes = _extends$1({}, notificationClasses, {
  component: "pe-notification pe-snackbar",

  // elements
  holder: "pe-snackbar__holder",
  placeholder: "pe-snackbar__placeholder",

  // states
  open: "pe-snackbar--open"
});

var _extends$2 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var sel = function sel(selector, o) {
  return _defineProperty({}, selector, o);
};

var breakpoint = function breakpoint(breakpointSel) {
  return function (selector, o) {
    return _defineProperty({}, breakpointSel, _defineProperty({}, selector, o));
  };
};

var breakpointTabletPortraitUp = breakpoint("@media (min-width: " + vars.breakpoint_for_tablet_portrait_up + "px)");

var createVarFns = function createVarFns(isCustom) {
  return _extends$2({}, isCustom && customLayoutFns, {
    general_styles: function general_styles(selector) {
      return [sel(selector, {
        width: "100%",
        opacity: 1,

        " .pe-notification__content": {
          width: "100%",
          margin: "0 auto",
          borderBottomLeftRadius: 0,
          borderBottomRightRadius: 0
        }
      }), breakpointTabletPortraitUp(selector, {
        ".pe-notification--horizontal": {
          " .pe-notification__title": {
            paddingRight: "30px"
          }
        }
      })];
    },
    min_width: function min_width(selector, vars$$1) {
      return [breakpointTabletPortraitUp(selector, {
        minWidth: vars$$1.min_width + "px"
      })];
    },
    max_width: function max_width(selector, vars$$1) {
      return [breakpointTabletPortraitUp(selector, {
        maxWidth: vars$$1.max_width + "px"
      })];
    },
    border_radius: function border_radius(selector, vars$$1) {
      return [sel(selector, {
        " .pe-notification__content": {
          borderTopLeftRadius: vars$$1.border_radius + "px",
          borderTopRightRadius: vars$$1.border_radius + "px"
        }
      })];
    }
  });
};

var layout = (function (selector, componentVars, customVars) {
  var allVars = _extends$2({}, componentVars, customVars);
  var currentVars = customVars ? customVars : allVars;
  var isCustom = !!customVars;
  var varFns = createVarFns(isCustom);
  return Object.keys(currentVars).map(function (v) {
    return varFns[v] !== undefined ? varFns[v](selector, allVars) : null;
  }).filter(function (s) {
    return s;
  });
});

var color$1 = (function (selector, componentVars, customVars) {
  return color(selector, componentVars, customVars);
});

var _extends$3 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _defineProperty$1(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var sel$1 = function sel(selector, o) {
  return _defineProperty$1({}, selector, o);
};

var varFns = {
  general_styles: function general_styles(selector) {
    return [sel$1(selector, [flex.layoutCenterCenter, {
      position: "fixed",
      top: "auto",
      right: 0,
      bottom: 0,
      left: 0,
      zIndex: vars.z_notification,
      pointerEvents: "none",
      justifyContent: "flex-start", // For IE11
      width: "100%"
    }]), _defineProperty$1({}, ".pe-notification--container " + selector, {
      position: "relative"
    })];
  }
};

var holderLayout = (function (selector, componentVars, customVars) {
  var allVars = _extends$3({}, componentVars, customVars);
  var currentVars = customVars ? customVars : allVars;
  return Object.keys(currentVars).map(function (v) {
    return varFns[v] !== undefined ? varFns[v](selector, allVars) : null;
  }).filter(function (s) {
    return s;
  });
});

var fns = [layout, color$1];
var selector = "." + classes.component.replace(/ /g, ".");

var holderFns = [holderLayout];
var holderSelector = "." + classes.holder.replace(/ /g, ".");

var addStyle = function addStyle(customSelector, customVars) {
  return styler.generateCustomStyles([customSelector, selector], vars$2, customVars, fns);
};

var getStyle = function getStyle(customSelector, customVars) {
  return customSelector ? styler.createCustomStyleSheets([customSelector, selector], vars$2, customVars, fns) : styler.createStyleSheets([holderSelector], vars$2, holderFns).concat(styler.createStyleSheets([selector], vars$2, fns));
};

styler.generateStyles([holderSelector], vars$2, holderFns);
styler.generateStyles([selector], vars$2, fns);

export { addStyle, getStyle, vars$2 as vars };
