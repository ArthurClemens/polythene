(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('polythene-core-css'), require('polythene-theme'), require('polythene-core-toolbar')) :
  typeof define === 'function' && define.amd ? define(['exports', 'polythene-core-css', 'polythene-theme', 'polythene-core-toolbar'], factory) :
  (factory((global.polythene = {}),global['polythene-core-css'],global['polythene-theme'],global['polythene-core-toolbar']));
}(this, (function (exports,polytheneCoreCss,polytheneTheme,polytheneCoreToolbar) { 'use strict';

  var classes = {

    // Toolbar

    component: "pe-toolbar",

    // states
    compact: "pe-toolbar--compact",
    appBar: "pe-toolbar--app-bar",

    // Toolbar title

    // elements
    title: "pe-toolbar__title",

    // states
    centeredTitle: "pe-toolbar__title--center",
    indentedTitle: "pe-toolbar__title--indent",
    fullbleed: "pe-toolbar--fullbleed",
    border: "pe-toolbar--border"
  };

  var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  var sel = function sel(selector, o) {
    return _defineProperty({}, selector, o);
  };

  var breakpoint = function breakpoint(breakpointSel) {
    return function (selector, o) {
      return _defineProperty({}, breakpointSel, _defineProperty({}, selector, o));
    };
  };

  var indent_padding_side = function indent_padding_side(selector, vars, isRTL) {
    var _peToolbar__title;

    return sel(selector, {
      " .pe-toolbar__title--indent, .pe-toolbar__title.pe-toolbar__title--indent": (_peToolbar__title = {}, _defineProperty(_peToolbar__title, isRTL ? "marginLeft" : "marginRight", 0), _defineProperty(_peToolbar__title, isRTL ? "marginRight" : "marginLeft", vars.indent - vars.padding_side + "px"), _peToolbar__title)
    });
  };

  var title_padding_title_after_icon_padding = function title_padding_title_after_icon_padding(selector, vars, isRTL) {
    var _spanPeToolbar, _spanPe;

    return sel(selector, {
      " > span, .pe-toolbar__title": (_spanPeToolbar = {}, _defineProperty(_spanPeToolbar, isRTL ? "marginLeft" : "marginRight", 0), _defineProperty(_spanPeToolbar, isRTL ? "marginRight" : "marginLeft", vars.title_padding + "px"), _spanPeToolbar),
      " > * + span, * + .pe-toolbar__title, * + .pe-toolbar__title--indent, * + .pe-toolbar__title.pe-toolbar__title--indent": (_spanPe = {}, _defineProperty(_spanPe, isRTL ? "marginLeft" : "marginRight", 0), _defineProperty(_spanPe, isRTL ? "marginRight" : "marginLeft", vars.title_after_icon_padding + "px"), _spanPe),
      " .pe-toolbar__title--center": {
        marginLeft: vars.title_padding + "px",
        marginRight: vars.title_padding + "px"
      }
    });
  };

  var selectorRTL = function selectorRTL(selector) {
    return "*[dir=rtl] " + selector + ", .pe-rtl " + selector;
  };

  var breakpointPhoneOnly = breakpoint("@media (min-width: " + polytheneTheme.vars.breakpoint_for_phone_only + "px) and (orientation: landscape)");

  var breakpointTabletPortraitUp = breakpoint("@media (min-width: " + polytheneTheme.vars.breakpoint_for_tablet_portrait_up + "px)");

  var varFns = {
    general_styles: function general_styles(selector) {
      return [sel(selector, [polytheneCoreCss.flex.layout, polytheneCoreCss.flex.layoutHorizontal, polytheneCoreCss.flex.layoutCenter, {
        position: "relative",
        zIndex: polytheneTheme.vars.z_toolbar,

        ".pe-toolbar--fullbleed": {
          padding: 0
        },

        ".pe-toolbar--border": {
          borderWidth: "1px",
          borderStyle: "none none solid none"
        },

        " > span, .pe-toolbar__title, .pe-toolbar__title--indent": {
          width: "100%",
          display: "block",
          wordBreak: "break-all",
          overflow: "hidden",
          textOverflow: "ellipsis",
          whiteSpace: "nowrap"
        },

        " .pe-toolbar__title--center": {
          textAlign: "center",
          justifyContent: "center"
        },

        " > .pe-action": {
          paddingLeft: "12px",
          paddingRight: "12px"
        },

        " .pe-fit": [polytheneCoreCss.mixin.fit(), {
          margin: 0
        }]
      }])];
    },
    height: function height(selector, vars) {
      return [sel(selector, {
        height: vars.height + "px"
      })];
    },
    height_compact: function height_compact(selector, vars) {
      return [sel(selector, {
        ".pe-toolbar--compact": {
          height: vars.height_compact + "px"
        }
      }), breakpointPhoneOnly(selector, {
        height: vars.height + "px"
      })];
    },
    line_height: function line_height(selector, vars) {
      return [sel(selector, {
        lineHeight: vars.line_height + "em",

        " > span, .pe-toolbar__title, .pe-toolbar__title--indent": {
          lineHeight: vars.line_height
        }
      })];
    },
    font_size: function font_size(selector, vars) {
      return [sel(selector, {
        " > span, .pe-toolbar__title, .pe-toolbar__title--indent": {
          fontSize: vars.font_size + "px"
        }
      })];
    },
    padding_side: function padding_side(selector, vars) {
      return [sel(selector, {
        padding: "0 " + vars.padding_side + "px"
      }), indent_padding_side(selector, vars, false), indent_padding_side(selectorRTL(selector), vars, true)];
    },
    indent: function indent(selector, vars) {
      return [indent_padding_side(selector, vars, false), indent_padding_side(selectorRTL(selector), vars, true)];
    },
    title_padding: function title_padding(selector, vars) {
      return [title_padding_title_after_icon_padding(selector, vars, false), title_padding_title_after_icon_padding(selectorRTL(selector), vars, true)];
    },
    title_after_icon_padding: function title_after_icon_padding(selector, vars) {
      return [title_padding_title_after_icon_padding(selector, vars, false), title_padding_title_after_icon_padding(selectorRTL(selector), vars, true)];
    },
    height_large: function height_large(selector, vars) {
      return [breakpointTabletPortraitUp(selector, {
        height: vars.height_large + "px"
      })];
    },
    padding_side_large: function padding_side_large(selector, vars) {
      return [breakpointTabletPortraitUp(selector, {
        padding: "0 " + vars.padding_side_large + "px"
      })];
    }
  };

  var layout = (function (selector, componentVars, customVars) {
    var allVars = _extends({}, componentVars, customVars);
    var currentVars = customVars ? customVars : allVars;
    return Object.keys(currentVars).map(function (v) {
      return varFns[v] !== undefined ? varFns[v](selector, allVars) : null;
    }).filter(function (s) {
      return s;
    });
  });

  var _extends$1 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

  function _defineProperty$1(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  var sel$1 = function sel(selector, o) {
    return _defineProperty$1({}, selector, o);
  };

  var generalFns = {
    general_styles: function general_styles(selector) {
      return [];
    } // eslint-disable-line no-unused-vars
  };

  var tintFns = function tintFns(tint) {
    var _ref2;

    return _ref2 = {}, _defineProperty$1(_ref2, "color_" + tint + "_text", function (selector, vars) {
      return [sel$1(selector, {
        color: vars["color_" + tint + "_text"]
      })];
    }), _defineProperty$1(_ref2, "color_" + tint + "_background", function (selector, vars) {
      return [sel$1(selector, {
        backgroundColor: vars["color_" + tint + "_background"]
      })];
    }), _defineProperty$1(_ref2, "color_" + tint + "_border", function (selector, vars) {
      return [sel$1(selector, {
        ".pe-toolbar--border": {
          borderColor: vars["color_" + tint + "_border"]
        }
      })];
    }), _ref2;
  };

  var lightTintFns = _extends$1({}, generalFns, tintFns("light"));
  var darkTintFns = _extends$1({}, generalFns, tintFns("dark"));

  var createStyle = function createStyle(selector, componentVars, customVars, tint) {
    var allVars = _extends$1({}, componentVars, customVars);
    var currentVars = customVars ? customVars : allVars;
    return Object.keys(currentVars).map(function (v) {
      var varFns = tint === "light" ? lightTintFns : darkTintFns;
      return varFns[v] !== undefined ? varFns[v](selector, allVars) : null;
    }).filter(function (s) {
      return s;
    });
  };

  var style = function style(scopes, selector, componentVars, customVars, tint) {
    var selectors = scopes.map(function (s) {
      return s + selector;
    }).join(",");
    return createStyle(selectors, componentVars, customVars, tint);
  };

  var color = (function (selector, componentVars, customVars) {
    return [style([".pe-dark-tone", ".pe-dark-tone "], selector, componentVars, customVars, "dark"), // has/inside dark tone
    style(["", ".pe-light-tone", ".pe-light-tone "], selector, componentVars, customVars, "light")];
  });

  var fns = [layout, color];
  var selector = "." + classes.component;

  var addStyle = function addStyle(customSelector, customVars) {
    return polytheneCoreCss.styler.generateCustomStyles([customSelector, selector], polytheneCoreToolbar.vars, customVars, fns);
  };

  var getStyle = function getStyle(customSelector, customVars) {
    return customSelector ? polytheneCoreCss.styler.createCustomStyleSheets([customSelector, selector], polytheneCoreToolbar.vars, customVars, fns) : polytheneCoreCss.styler.createStyleSheets([selector], polytheneCoreToolbar.vars, fns);
  };

  polytheneCoreCss.styler.generateStyles([selector], polytheneCoreToolbar.vars, fns);

  exports.addStyle = addStyle;
  exports.getStyle = getStyle;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=polythene-css-toolbar.js.map
