(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('polythene-core-css'), require('polythene-theme')) :
  typeof define === 'function' && define.amd ? define(['exports', 'polythene-core-css', 'polythene-theme'], factory) :
  (factory((global.polythene = {}),global['polythene-core-css'],global['polythene-theme']));
}(this, (function (exports,polytheneCoreCss,polytheneTheme) { 'use strict';

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

  var classes = {
    component: "pe-list",

    // states
    border: "pe-list--border",
    compact: "pe-list--compact",
    hasHeader: "pe-list--header",
    indentedBorder: "pe-list--indented-border",
    padding: "pe-list--padding",
    paddingTop: "pe-list--padding-top",
    paddingBottom: "pe-list--padding-bottom",

    // lookup
    header: listTileClasses.header
  };

  var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  var generalFns = {
    general_styles: function general_styles() {
      return [];
    }
  };

  var tintFns = function tintFns(tint) {
    var _ref;

    return _ref = {}, _defineProperty(_ref, "color_" + tint + "_background", function (selector, vars) {
      return [polytheneCoreCss.sel(selector, {
        backgroundColor: vars["color_" + tint + "_background"]
      })];
    }), _defineProperty(_ref, "color_" + tint + "_border", function (selector, vars) {
      var _sel;

      return [polytheneCoreCss.sel(selector, (_sel = {}, _defineProperty(_sel, "& + .pe-list", {
        borderTopColor: vars["color_" + tint + "_border"]
      }), _defineProperty(_sel, ".pe-list--border", {
        " .pe-list-tile": {
          ":not(:last-child)": {
            borderColor: vars["color_" + tint + "_border"]
          }
        }
      }), _defineProperty(_sel, ".pe-list--indented-border", {
        " .pe-list-tile": {
          " .pe-list-tile__content:not(.pe-list-tile__content-front)": {
            borderColor: vars["color_" + tint + "_border"]
          }
        }
      }), _sel))];
    }), _ref;
  };

  var lightTintFns = _extends({}, generalFns, tintFns("light"));
  var darkTintFns = _extends({}, generalFns, tintFns("dark"));

  var color = polytheneCoreCss.createColor({
    varFns: { lightTintFns: lightTintFns, darkTintFns: darkTintFns }
  });

  var borderStyle = function borderStyle(vars) {
    return {
      borderStyle: "none none solid none",
      borderWidth: vars.border_width_bordered + "px"
    };
  };

  var varFns = {
    general_styles: function general_styles(selector) {
      return [polytheneCoreCss.sel(selector, {
        flexGrow: 1,

        ".pe-list--header": {
          paddingTop: 0
        },
        ".pe-list--indented-border": {
          borderTop: "none"
        }
      })];
    },
    padding: function padding(selector, vars) {
      return [polytheneCoreCss.sel(selector, {
        ".pe-list--padding": {
          padding: vars.padding + "px 0"
        },
        ".pe-list--padding-top": {
          paddingTop: vars.padding + "px"
        },
        ".pe-list--padding-bottom": {
          paddingBottom: vars.padding + "px"
        }
      })];
    },
    padding_compact: function padding_compact(selector, vars) {
      return [polytheneCoreCss.sel(selector, {
        ".pe-list--compact": {
          padding: vars.padding_compact + "px 0"
        }
      })];
    },
    border_width_stacked: function border_width_stacked(selector, vars) {
      return [polytheneCoreCss.sel(selector, {
        "& + &": {
          borderStyle: "solid none none none",
          borderWidth: vars.border_width_stacked + "px"
        }
      })];
    },
    border_width_bordered: function border_width_bordered(selector, vars) {
      return [polytheneCoreCss.sel(selector, {
        ".pe-list--border": {
          " .pe-list-tile": {
            ":not(.pe-list-tile--header):not(:last-child)": {
              "&": borderStyle(vars)
            }
          }
        },
        ".pe-list--indented-border": {
          " .pe-list-tile": {
            ":not(.pe-list-tile--header):not(:last-child)": {
              " .pe-list-tile__content:not(.pe-list-tile__content-front)": borderStyle(vars)
            }
          }
        }
      })];
    }
  };

  var layout = polytheneCoreCss.createLayout({ varFns: varFns });

  var vars = {
    general_styles: true,

    border_width_bordered: 1,
    border_width_stacked: 1,
    padding: polytheneTheme.vars.grid_unit_component, // vertical padding
    padding_compact: polytheneTheme.vars.grid_unit_component * 3 / 4,

    color_light_border: polytheneCoreCss.rgba(polytheneTheme.vars.color_light_foreground, polytheneTheme.vars.blend_light_border_light),
    color_dark_border: polytheneCoreCss.rgba(polytheneTheme.vars.color_dark_foreground, polytheneTheme.vars.blend_dark_border_light)

    // background color may be set in theme; disabled by default
    // color_light_background: "inherit",
    // color_dark_background:  "inherit"
  };

  var fns = [layout, color];
  var selector = "." + classes.component;

  var addStyle = polytheneCoreCss.styler.createAddStyle(selector, fns, vars);

  var getStyle = polytheneCoreCss.styler.createGetStyle(selector, fns, vars);

  polytheneCoreCss.styler.addStyle({
    selectors: [selector],
    fns: fns,
    vars: vars
  });

  exports.addStyle = addStyle;
  exports.color = color;
  exports.getStyle = getStyle;
  exports.layout = layout;
  exports.vars = vars;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=polythene-css-list.js.map
