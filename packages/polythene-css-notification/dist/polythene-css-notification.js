(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('polythene-core-css'), require('polythene-core-notification'), require('polythene-theme')) :
	typeof define === 'function' && define.amd ? define(['exports', 'polythene-core-css', 'polythene-core-notification', 'polythene-theme'], factory) :
	(factory((global.polythene = {}),global['polythene-core-css'],global['polythene-core-notification'],global['polythene-theme']));
}(this, (function (exports,polytheneCoreCss,polytheneCoreNotification,polytheneTheme) { 'use strict';

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
  vertical: "pe-notification--vertical"
};

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var layout = (function (selector, componentVars) {
  return [_defineProperty({}, selector, [polytheneCoreCss.flex.layoutCenter, {
    pointerEvents: "all",
    justifyContent: "center",
    margin: "0 auto",

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

    "&.pe-notification--horizontal": {
      " .pe-notification__content": polytheneCoreCss.flex.layoutHorizontal,
      " .pe-notification__title": [polytheneCoreCss.flex.flex(), {
        alignSelf: "center"
      }],
      " .pe-notification__title--multi-line": {
        paddingTop: componentVars.title_multi_padding_v + "px",
        paddingBottom: componentVars.title_multi_padding_v + "px"
      },
      " .pe-notification__action": polytheneCoreCss.flex.layoutCenter
    },
    "&.pe-notification--vertical": {
      " .pe-notification__content": [polytheneCoreCss.flex.layoutVertical],

      " .pe-notification__title": {
        paddingBottom: "6px"
      },
      " .pe-notification__title--multi-line": {
        paddingTop: componentVars.title_multi_padding_v + "px"
      },
      " .pe-notification__action": [polytheneCoreCss.flex.layoutEndJustified, {
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

  return [(_ref = {}, _defineProperty$2(_ref, selector, [polytheneCoreCss.flex.layoutCenterCenter, {
    // assumes position relative
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    zIndex: polytheneTheme.vars.z_notification,
    pointerEvents: "none",
    justifyContent: "flex-start", // For IE 11

    ".pe-multiple--screen": {
      position: "fixed"
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
  return polytheneCoreCss.styler.generateStyles([customSelector, selector], _extends({}, polytheneCoreNotification.vars, customVars), fns);
};

var getStyle = function getStyle(customSelector, customVars) {
  return customSelector ? polytheneCoreCss.styler.createStyleSheets([customSelector, selector], _extends({}, polytheneCoreNotification.vars, customVars), fns) : polytheneCoreCss.styler.createStyleSheets([holderSelector], polytheneCoreNotification.vars, holderFns).concat(polytheneCoreCss.styler.createStyleSheets([selector], polytheneCoreNotification.vars, fns));
};

polytheneCoreCss.styler.generateStyles([holderSelector], polytheneCoreNotification.vars, holderFns);
polytheneCoreCss.styler.generateStyles([selector], polytheneCoreNotification.vars, fns);

exports.addStyle = addStyle;
exports.getStyle = getStyle;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=polythene-css-notification.js.map
