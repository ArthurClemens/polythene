import { createColor, flex, sel, createLayout, rgba, styler } from 'polythene-core-css';
import { color, customLayoutFns } from 'polythene-css-notification';
import { vars } from 'polythene-theme';

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

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var classes = _extends({}, notificationClasses, {
  component: "pe-notification pe-snackbar",

  // elements
  holder: "pe-snackbar__holder",
  placeholder: "pe-snackbar__placeholder",

  // states
  open: "pe-snackbar--open"
});

var color$1 = createColor({
  superColor: color
});

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var varFns = {
  general_styles: function general_styles(selector) {
    return [sel(selector, [flex.layoutCenterCenter, {
      position: "fixed",
      top: "auto",
      right: 0,
      bottom: 0,
      left: 0,
      zIndex: vars.z_notification,
      pointerEvents: "none",
      justifyContent: "flex-start", // For IE11
      width: "100%"
    }]), _defineProperty({}, ".pe-notification--container " + selector, {
      position: "relative"
    })];
  }
};

var holderLayout = createLayout({
  varFns: varFns
});

function _defineProperty$1(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var breakpoint = function breakpoint(breakpointSel) {
  return function (selector, o) {
    return _defineProperty$1({}, breakpointSel, _defineProperty$1({}, selector, o));
  };
};

var breakpointTabletPortraitUp = breakpoint("@media (min-width: " + vars.breakpoint_for_tablet_portrait_up + "px)");

var varFns$1 = {
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
        borderTopRightRadius: vars$$1.border_radius + "px",
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0
      }
    })];
  }
};

var layout = createLayout({
  varFns: varFns$1,
  customVarFns: customLayoutFns
});

var vars$1 = {
  general_styles: true,

  animation_hide_css: "",
  animation_show_css: "",
  border_radius: 0,
  max_width: 568,
  min_height: 0,
  min_width: 288,

  color_light_background: rgba(vars.color_light_background),
  color_dark_background: rgba(vars.color_dark_background)
};

var fns = [layout, color$1];
var selector = "." + classes.component.replace(/ /g, ".");

var holderFns = [holderLayout];
var holderSelector = "." + classes.holder.replace(/ /g, ".");

var addStyle = function addStyle(customSelector, customVars) {
  var _ref = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
      mediaQuery = _ref.mediaQuery;

  styler.addStyle({
    selectors: [customSelector, selector],
    fns: fns,
    vars: vars$1,
    customVars: customVars,
    mediaQuery: mediaQuery
  });
  styler.addStyle({
    selectors: [holderSelector],
    fns: holderFns,
    vars: vars$1,
    customVars: customVars,
    mediaQuery: mediaQuery
  });
};

var getStyle = function getStyle() {
  var customSelector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
  var customVars = arguments[1];

  var _ref2 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
      mediaQuery = _ref2.mediaQuery;

  return styler.getStyle({
    selectors: [customSelector, selector],
    fns: fns,
    vars: vars$1,
    customVars: customVars,
    mediaQuery: mediaQuery
  }).concat(styler.getStyle({
    selectors: [holderSelector],
    fns: holderFns,
    vars: vars$1,
    customVars: customVars,
    mediaQuery: mediaQuery
  }));
};

styler.addStyle({
  selectors: [holderSelector],
  fns: holderFns,
  vars: vars$1
});
styler.addStyle({
  selectors: [selector],
  fns: fns,
  vars: vars$1
});

export { addStyle, color$1 as color, getStyle, holderLayout, layout, vars$1 as vars };
