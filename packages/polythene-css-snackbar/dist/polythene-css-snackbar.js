(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('polythene-theme'), require('polythene-core-css'), require('polythene-core-snackbar')) :
  typeof define === 'function' && define.amd ? define(['exports', 'polythene-theme', 'polythene-core-css', 'polythene-core-snackbar'], factory) :
  (factory((global.polythene = {}),global['polythene-theme'],global['polythene-core-css'],global['polythene-core-snackbar']));
}(this, (function (exports,polytheneTheme,polytheneCoreCss,polytheneCoreSnackbar) { 'use strict';

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

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  var tabletStyle = function tabletStyle(componentVars) {
    return {
      " .pe-notification__content": {
        borderTopLeftRadius: polytheneTheme.vars.unit_block_border_radius + "px",
        borderTopRightRadius: polytheneTheme.vars.unit_block_border_radius + "px",
        minWidth: componentVars.min_width + "px",
        maxWidth: componentVars.max_width + "px"
      },
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
      width: "100%",
      opacity: 1,

      " .pe-notification__content": {
        width: "100%",
        margin: "0 auto",
        borderRadius: 0
      }
    }), _defineProperty(_ref2, "@media (min-width: " + polytheneTheme.vars.breakpoint_for_tablet_portrait_up + "px)", _defineProperty({}, selector, tabletStyle(componentVars))), _ref2)];
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
      position: "fixed",
      top: "auto",
      right: 0,
      bottom: 0,
      left: 0,
      zIndex: polytheneTheme.vars.z_notification,
      pointerEvents: "none",
      justifyContent: "flex-start", // For IE11
      width: "100%"
    }]), _defineProperty$2(_ref, ".pe-notification--container " + selector, {
      position: "relative"
    }), _ref)];
  });

  var _extends$1 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

  var fns = [layout, color];
  var selector = "." + classes.component.replace(/ /g, ".");

  var holderFns = [holderLayout];
  var holderSelector = "." + classes.holder.replace(/ /g, ".");

  var addStyle = function addStyle(customSelector, customVars) {
    return polytheneCoreCss.styler.generateStyles([customSelector, selector], _extends$1({}, polytheneCoreSnackbar.vars, customVars), fns);
  };

  var getStyle = function getStyle(customSelector, customVars) {
    return customSelector ? polytheneCoreCss.styler.createStyleSheets([customSelector, selector], _extends$1({}, polytheneCoreSnackbar.vars, customVars), fns) : polytheneCoreCss.styler.createStyleSheets([holderSelector], polytheneCoreSnackbar.vars, holderFns).concat(polytheneCoreCss.styler.createStyleSheets([selector], polytheneCoreSnackbar.vars, fns));
  };

  polytheneCoreCss.styler.generateStyles([holderSelector], polytheneCoreSnackbar.vars, holderFns);
  polytheneCoreCss.styler.generateStyles([selector], polytheneCoreSnackbar.vars, fns);

  exports.addStyle = addStyle;
  exports.getStyle = getStyle;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=polythene-css-snackbar.js.map
