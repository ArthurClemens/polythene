(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('polythene-core-css'), require('polythene-core-dialog'), require('polythene-theme')) :
	typeof define === 'function' && define.amd ? define(['exports', 'polythene-core-css', 'polythene-core-dialog', 'polythene-theme'], factory) :
	(factory((global.polythene = {}),global['polythene-core-css'],global['polythene-core-dialog'],global['polythene-theme']));
}(this, (function (exports,polytheneCoreCss,polytheneCoreDialog,polytheneTheme) { 'use strict';

var listTileClasses = {
  component: "pe-list-tile",

  // elements
  content: "pe-list-tile__content",
  highSubtitle: "pe-list-tile__high-subtitle",
  primary: "pe-list-tile__primary",
  secondary: "pe-list-tile__secondary",
  subtitle: "pe-list-tile__subtitle",
  title: "pe-list-tile__title",
  contentFront: "pe-list-tile__content-front",

  // states
  compact: "pe-list-tile--compact",
  compactFront: "pe-list-tile--compact-front",
  disabled: "pe-list-tile--disabled",
  hasFront: "pe-list-tile--front",
  hasHighSubtitle: "pe-list-tile--high-subtitle",
  hasSubtitle: "pe-list-tile--subtitle",
  header: "pe-list-tile--header",
  hoverable: "pe-list-tile--hoverable",
  selectable: "pe-list-tile--selectable",
  selected: "pe-list-tile--selected",
  highlight: "pe-list-tile--highlight",
  sticky: "pe-list-tile--sticky",
  navigation: "pe-list-tile--navigation"
};

var menuClasses = {
  component: "pe-menu",

  // elements
  content: "pe-menu__content",
  placeholder: "pe-menu__placeholder",
  target: "pe-menu__target",

  // states
  permanent: "pe-menu--permanent",
  fullHeight: "pe-menu--full-height",
  floating: "pe-menu--floating",
  visible: "pe-menu--visible",
  width_auto: "pe-menu--width-auto",
  width_n: "pe-menu--width-",

  // lookup
  listTile: listTileClasses.component,
  selectedListTile: listTileClasses.selected
};

var classes = {
  component: "pe-dialog",

  // elements
  placeholder: "pe-dialog__placeholder",
  holder: "pe-dialog__holder",
  content: "pe-dialog__content",
  backdrop: "pe-dialog__backdrop",
  touch: "pe-dialog__touch",

  // states
  fullScreen: "pe-dialog--full-screen",
  open: "pe-dialog--open", // class set to html element
  visible: "pe-dialog--visible", // class set to dialog element

  // lookup
  menuContent: menuClasses.content
};

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var layout = (function (selector, componentVars) {
  return [_defineProperty({
    ".pe-dialog__holder": {
      height: "100%"
    }
  }, selector, [polytheneCoreCss.flex.layoutCenterCenter, polytheneCoreCss.mixin.defaultTransition("opacity", componentVars.animation_duration), {
    position: componentVars.position,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: polytheneTheme.vars.z_dialog,
    height: "100%", // 100vh would make the dialog go beneath Mobile Safari toolbar
    padding: componentVars.padding_vertical + "px " + componentVars.padding_horizontal + "px",
    opacity: 0,

    ".pe-dialog--visible": {
      opacity: 1
    },

    ".pe-dialog--full-screen": {
      padding: 0,

      " .pe-dialog__content": {
        width: "100%" // for IE11


        // dialog-content styles: see dialog pane
      } },

    " .pe-dialog__content": {
      position: "relative",
      borderRadius: componentVars.border_radius + "px"
    },

    " .pe-dialog__backdrop": [{
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0
    }]
  }])];
});

function _defineProperty$1(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var style = function style(scopes, selector, componentVars, tint) {
  return [_defineProperty$1({}, scopes.map(function (s) {
    return s + selector;
  }).join(","), {
    " .pe-dialog__content": {
      backgroundColor: componentVars["color_" + tint + "_background"],
      color: componentVars["color_" + tint + "_text"]
    },
    " .pe-dialog__backdrop": {
      backgroundColor: componentVars["color_" + tint + "_backdrop_background"]
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
  return polytheneCoreCss.styler.generateStyles([customSelector, selector], _extends({}, polytheneCoreDialog.vars, customVars), fns);
};

var getStyle = function getStyle(customSelector, customVars) {
  return customSelector ? polytheneCoreCss.styler.createStyleSheets([customSelector, selector], _extends({}, polytheneCoreDialog.vars, customVars), fns) : polytheneCoreCss.styler.createStyleSheets([selector], polytheneCoreDialog.vars, fns);
};

polytheneCoreCss.styler.generateStyles([selector], polytheneCoreDialog.vars, fns);

exports.addStyle = addStyle;
exports.getStyle = getStyle;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=polythene-css-dialog.js.map
