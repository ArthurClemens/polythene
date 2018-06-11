(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('polythene-core-css'), require('polythene-theme')) :
  typeof define === 'function' && define.amd ? define(['exports', 'polythene-core-css', 'polythene-theme'], factory) :
  (factory((global.polythene = {}),global['polythene-core-css'],global['polythene-theme']));
}(this, (function (exports,polytheneCoreCss,polytheneTheme) { 'use strict';

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

  var generalFns = {
    general_styles: function general_styles(selector) {
      return [];
    } // eslint-disable-line no-unused-vars
  };

  var tintFns = function tintFns(tint) {
    var _ref;

    return _ref = {}, _defineProperty(_ref, "color_" + tint + "_text", function (selector, vars) {
      return [polytheneCoreCss.sel(selector, {
        color: vars["color_" + tint + "_text"]
      })];
    }), _defineProperty(_ref, "color_" + tint + "_background", function (selector, vars) {
      return [polytheneCoreCss.sel(selector, {
        backgroundColor: vars["color_" + tint + "_background"]
      })];
    }), _defineProperty(_ref, "color_" + tint + "_border", function (selector, vars) {
      return [polytheneCoreCss.sel(selector, {
        ".pe-toolbar--border": {
          borderColor: vars["color_" + tint + "_border"]
        }
      })];
    }), _ref;
  };

  var lightTintFns = _extends({}, generalFns, tintFns("light"));
  var darkTintFns = _extends({}, generalFns, tintFns("dark"));

  var color = polytheneCoreCss.createColor({
    varFns: { lightTintFns: lightTintFns, darkTintFns: darkTintFns }
  });

  function _defineProperty$1(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  var breakpoint = function breakpoint(breakpointSel) {
    return function (selector, o) {
      return _defineProperty$1({}, breakpointSel, _defineProperty$1({}, selector, o));
    };
  };

  var indent_padding_side = function indent_padding_side(selector, vars, isRTL) {
    var _peToolbar__title;

    return polytheneCoreCss.sel(selector, {
      " .pe-toolbar__title--indent, .pe-toolbar__title.pe-toolbar__title--indent": (_peToolbar__title = {}, _defineProperty$1(_peToolbar__title, isRTL ? "marginLeft" : "marginRight", 0), _defineProperty$1(_peToolbar__title, isRTL ? "marginRight" : "marginLeft", vars.indent - vars.padding_side + "px"), _peToolbar__title)
    });
  };

  var title_padding_title_after_icon_padding = function title_padding_title_after_icon_padding(selector, vars, isRTL) {
    var _spanPeToolbar, _spanPe;

    return polytheneCoreCss.sel(selector, {
      " > span, .pe-toolbar__title": (_spanPeToolbar = {}, _defineProperty$1(_spanPeToolbar, isRTL ? "marginLeft" : "marginRight", 0), _defineProperty$1(_spanPeToolbar, isRTL ? "marginRight" : "marginLeft", vars.title_padding + "px"), _spanPeToolbar),
      " > * + span, * + .pe-toolbar__title, * + .pe-toolbar__title--indent, * + .pe-toolbar__title.pe-toolbar__title--indent": (_spanPe = {}, _defineProperty$1(_spanPe, isRTL ? "marginLeft" : "marginRight", 0), _defineProperty$1(_spanPe, isRTL ? "marginRight" : "marginLeft", vars.title_after_icon_padding + "px"), _spanPe),
      " .pe-toolbar__title--center": {
        marginLeft: vars.title_padding + "px",
        marginRight: vars.title_padding + "px"
      }
    });
  };

  var breakpointPhoneOnly = breakpoint("@media (min-width: " + polytheneTheme.vars.breakpoint_for_phone_only + "px) and (orientation: landscape)");

  var breakpointTabletPortraitUp = breakpoint("@media (min-width: " + polytheneTheme.vars.breakpoint_for_tablet_portrait_up + "px)");

  var varFns = {
    general_styles: function general_styles(selector) {
      return [polytheneCoreCss.sel(selector, [polytheneCoreCss.flex.layout, polytheneCoreCss.flex.layoutHorizontal, polytheneCoreCss.flex.layoutCenter, {
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
      return [polytheneCoreCss.sel(selector, {
        height: vars.height + "px"
      })];
    },
    height_compact: function height_compact(selector, vars) {
      return [polytheneCoreCss.sel(selector, {
        ".pe-toolbar--compact": {
          height: vars.height_compact + "px"
        }
      }), breakpointPhoneOnly(selector, {
        height: vars.height + "px"
      })];
    },
    line_height: function line_height(selector, vars) {
      return [polytheneCoreCss.sel(selector, {
        lineHeight: vars.line_height + "em",

        " > span, .pe-toolbar__title, .pe-toolbar__title--indent": {
          lineHeight: vars.line_height
        }
      })];
    },
    font_size: function font_size(selector, vars) {
      return [polytheneCoreCss.sel(selector, {
        " > span, .pe-toolbar__title, .pe-toolbar__title--indent": {
          fontSize: vars.font_size + "px"
        }
      })];
    },
    padding_side: function padding_side(selector, vars) {
      return [polytheneCoreCss.sel(selector, {
        padding: "0 " + vars.padding_side + "px"
      }), indent_padding_side(selector, vars, false), indent_padding_side(polytheneCoreCss.selectorRTL(selector), vars, true)];
    },
    indent: function indent(selector, vars) {
      return [indent_padding_side(selector, vars, false), indent_padding_side(polytheneCoreCss.selectorRTL(selector), vars, true)];
    },
    title_padding: function title_padding(selector, vars) {
      return [title_padding_title_after_icon_padding(selector, vars, false), title_padding_title_after_icon_padding(polytheneCoreCss.selectorRTL(selector), vars, true)];
    },
    title_after_icon_padding: function title_after_icon_padding(selector, vars) {
      return [title_padding_title_after_icon_padding(selector, vars, false), title_padding_title_after_icon_padding(polytheneCoreCss.selectorRTL(selector), vars, true)];
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

  var layout = polytheneCoreCss.createLayout({ varFns: varFns });

  var padding_side = polytheneTheme.vars.grid_unit_component * 2 - 12; // 16 - 12 = 4

  var vars = {
    general_styles: true,

    font_size: 18,
    height: polytheneTheme.vars.grid_unit_component * 7, // 56
    height_compact: polytheneTheme.vars.grid_unit_component * 6, // 48
    height_large: polytheneTheme.vars.grid_unit_component * 8, // 64
    indent: polytheneTheme.vars.unit_indent,
    line_height: polytheneTheme.vars.line_height,
    padding_side: padding_side,
    padding_side_large: polytheneTheme.vars.grid_unit_component * 3 - 12, // 24 - 12 = 12
    title_after_icon_padding: polytheneTheme.vars.grid_unit_component * 9 - polytheneTheme.vars.grid_unit_component * 6 - padding_side, // 72 - 48 - 4 = 20
    title_padding: 12, // icon padding

    color_light_text: polytheneCoreCss.rgba(polytheneTheme.vars.color_light_foreground, polytheneTheme.vars.blend_light_text_primary),
    color_light_border: polytheneCoreCss.rgba(polytheneTheme.vars.color_light_foreground, polytheneTheme.vars.blend_light_border_light),
    color_light_background: polytheneCoreCss.rgba(polytheneTheme.vars.color_light_background),

    color_dark_text: polytheneCoreCss.rgba(polytheneTheme.vars.color_dark_foreground, polytheneTheme.vars.blend_dark_text_primary),
    color_dark_border: polytheneCoreCss.rgba(polytheneTheme.vars.color_dark_foreground, polytheneTheme.vars.blend_dark_border_light),
    color_dark_background: polytheneCoreCss.rgba(polytheneTheme.vars.color_dark_background)
  };

  var fns = [layout, color];
  var selector = "." + classes.component;

  var addStyle = function addStyle(customSelector, customVars) {
    return polytheneCoreCss.styler.generateCustomStyles([customSelector, selector], vars, customVars, fns);
  };

  var getStyle = function getStyle(customSelector, customVars) {
    return customSelector ? polytheneCoreCss.styler.createCustomStyleSheets([customSelector, selector], vars, customVars, fns) : polytheneCoreCss.styler.createStyleSheets([selector], vars, fns);
  };

  polytheneCoreCss.styler.generateStyles([selector], vars, fns);

  exports.addStyle = addStyle;
  exports.color = color;
  exports.getStyle = getStyle;
  exports.layout = layout;
  exports.vars = vars;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=polythene-css-toolbar.js.map
