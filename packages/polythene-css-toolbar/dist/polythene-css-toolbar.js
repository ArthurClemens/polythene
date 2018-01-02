(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('polythene-core-css'), require('polythene-core-toolbar'), require('polythene-theme')) :
	typeof define === 'function' && define.amd ? define(['exports', 'polythene-core-css', 'polythene-core-toolbar', 'polythene-theme'], factory) :
	(factory((global.polythene = {}),global['polythene-core-css'],global['polythene-core-toolbar'],global['polythene-theme']));
}(this, (function (exports,polytheneCoreCss,polytheneCoreToolbar,polytheneTheme) { 'use strict';

var classes = {

  // Toolbar

  component: "pe-toolbar",

  // states
  compact: "pe-toolbar--compact",

  // Toolbar title

  // elements
  title: "pe-toolbar__title",

  // states
  centeredTitle: "pe-toolbar__title--center",
  indentedTitle: "pe-toolbar__title--indent"
};

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var compactStyle = function compactStyle(componentVars) {
  return {
    height: componentVars.height_compact + "px"
  };
};

var layout = (function (selector, componentVars) {
  var _ref3;

  return [(_ref3 = {}, _defineProperty(_ref3, selector, [polytheneCoreCss.flex.layout, polytheneCoreCss.flex.layoutHorizontal, polytheneCoreCss.flex.layoutCenter, {
    height: componentVars.height + "px",
    lineHeight: componentVars.line_height + "em",
    padding: "0 " + componentVars.padding_side + "px",

    ".pe-toolbar--compact": compactStyle(componentVars),

    " > span, .pe-toolbar__title, .pe-toolbar__title--indent": {
      fontSize: componentVars.font_size + "px",
      width: "100%",
      display: "block",
      wordBreak: "break-all",
      overflow: "hidden",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap",
      marginLeft: componentVars.title_padding + "px"
    },

    " > * + span, * + .pe-toolbar__title, * + .pe-toolbar__title--indent": {
      marginLeft: componentVars.title_after_icon_padding + "px"
    },

    " .pe-toolbar__title--indent": {
      marginLeft: componentVars.indent - componentVars.padding_side + "px"
    },
    " .pe-toolbar__title--center": {
      textAlign: "center",
      justifyContent: "center",
      marginLeft: componentVars.title_padding + "px",
      marginRight: componentVars.title_padding + "px"
    },

    " > .pe-action": {
      paddingLeft: "12px",
      paddingRight: "12px"
    },

    " .pe-fit": [polytheneCoreCss.mixin.fit(), {
      margin: 0
    }]
  }]), _defineProperty(_ref3, "@media (min-width: " + polytheneTheme.vars.breakpoint_for_phone_only + "px) and (orientation: landscape)", _defineProperty({}, selector, compactStyle(componentVars))), _defineProperty(_ref3, "@media (min-width: " + polytheneTheme.vars.breakpoint_for_tablet_portrait_up + "px)", _defineProperty({}, selector, {
    height: componentVars.height_large + "px",
    padding: "0 " + componentVars.padding_side_large + "px"
  })), _ref3)];
});

function _defineProperty$1(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var style = function style(scopes, selector, componentVars, tint) {
  return [_defineProperty$1({}, scopes.map(function (s) {
    return s + selector;
  }).join(","), {
    color: componentVars["color_" + tint + "_text"],
    backgroundColor: componentVars["color_" + tint + "_background"]
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
  return polytheneCoreCss.styler.generateStyles([customSelector, selector], _extends({}, polytheneCoreToolbar.vars, customVars), fns);
};

var getStyle = function getStyle(customSelector, customVars) {
  return customSelector ? polytheneCoreCss.styler.createStyleSheets([customSelector, selector], _extends({}, polytheneCoreToolbar.vars, customVars), fns) : polytheneCoreCss.styler.createStyleSheets([selector], polytheneCoreToolbar.vars, fns);
};

polytheneCoreCss.styler.generateStyles([selector], polytheneCoreToolbar.vars, fns);

exports.addStyle = addStyle;
exports.getStyle = getStyle;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=polythene-css-toolbar.js.map
