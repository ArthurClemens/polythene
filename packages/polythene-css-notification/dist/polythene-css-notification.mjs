import { flex, styler } from 'polythene-core-css';
import { vars } from 'polythene-theme';
import { vars as vars$1 } from 'polythene-core-notification';

var classes = {
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

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var layout = (function (selector, componentVars) {
  return [_defineProperty({}, selector, [flex.layoutCenter, {
    pointerEvents: "all",
    justifyContent: "center",
    margin: "0 auto",
    transitionDelay: componentVars.animation_delay,
    transitionDuration: componentVars.animation_duration,
    transitionTimingFunction: componentVars.animation_timing_function,
    transitionProperty: "all",
    opacity: 0,

    ".pe-notification--visible": {
      opacity: 1
    },

    " .pe-notification__content": {
      width: componentVars.width + "px",
      padding: "0 " + componentVars.side_padding + "px",
      borderRadius: componentVars.border_radius + "px"
    },

    " .pe-notification__title": {
      flex: "1 0 auto",
      padding: componentVars.title_single_padding_v + "px " + componentVars.title_padding_h + "px",
      fontSize: componentVars.font_size + "px",
      lineHeight: componentVars.line_height + "px"
    },

    " .pe-notification__action": {
      " .pe-button": {
        margin: 0
      }
    },

    ".pe-notification--horizontal": {
      " .pe-notification__content": flex.layoutHorizontal,
      " .pe-notification__title": [flex.flex(), {
        alignSelf: "center"
      }],
      " .pe-notification__title--multi-line": {
        paddingTop: componentVars.title_multi_padding_v + "px",
        paddingBottom: componentVars.title_multi_padding_v + "px"
      },
      " .pe-notification__action": flex.layoutCenter
    },
    ".pe-notification--vertical": {
      " .pe-notification__content": [flex.layoutVertical],

      " .pe-notification__title": {
        paddingBottom: "6px"
      },
      " .pe-notification__title--multi-line": {
        paddingTop: componentVars.title_multi_padding_v + "px"
      },
      " .pe-notification__action": [flex.layoutEndJustified, {
        width: "100%"
      }]
    }
  }])];
});

function _defineProperty$1(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var style = function style(scopes, selector, componentVars, tint) {
  return [_defineProperty$1({}, scopes.map(function (s) {
    return s + selector;
  }).join(","), {
    " .pe-notification__content": {
      color: componentVars["color_" + tint + "_text"],
      background: componentVars["color_" + tint + "_background"]
    }
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
    // assumes position relative
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    pointerEvents: "none",
    justifyContent: "flex-start", // For IE11

    ".pe-multiple--screen": {
      position: "fixed",
      zIndex: vars.z_notification
    }
  }]), _defineProperty$2(_ref, ":not(.pe-notification--container) .pe-multiple--container", {
    position: "absolute"
  }), _ref)];
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var fns = [layout, color];
var selector = "." + classes.component;

var holderFns = [holderLayout];
var holderSelector = "." + classes.holder;

var addStyle = function addStyle(customSelector, customVars) {
  return styler.generateStyles([customSelector, selector], _extends({}, vars$1, customVars), fns);
};

var getStyle = function getStyle(customSelector, customVars) {
  return customSelector ? styler.createStyleSheets([customSelector, selector], _extends({}, vars$1, customVars), fns) : styler.createStyleSheets([holderSelector], vars$1, holderFns).concat(styler.createStyleSheets([selector], vars$1, fns));
};

styler.generateStyles([holderSelector], vars$1, holderFns);
styler.generateStyles([selector], vars$1, fns);

export { addStyle, getStyle };
