(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('polythene-theme'), require('polythene-core-css')) :
  typeof define === 'function' && define.amd ? define(['exports', 'polythene-theme', 'polythene-core-css'], factory) :
  (factory((global.polythene = {}),global['polythene-theme'],global['polythene-core-css']));
}(this, (function (exports,polytheneTheme,polytheneCoreCss) { 'use strict';

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

  const generalFns = {
    general_styles: () => []
  };

  const tintFns = tint => ({
    ["color_" + tint + "_background"]: (selector, vars) => [polytheneCoreCss.sel(selector, {
      backgroundColor: vars["color_" + tint + "_background"]
    })],
    ["color_" + tint + "_border"]: (selector, vars) => [polytheneCoreCss.sel(selector, {
      ["& + .pe-list"]: {
        borderTopColor: vars["color_" + tint + "_border"]
      },
      ".pe-list--border": {
        " .pe-list-tile": {
          ":not(:last-child)": {
            borderColor: vars["color_" + tint + "_border"]
          }
        }
      },
      ".pe-list--indented-border": {
        " .pe-list-tile": {
          " .pe-list-tile__content:not(.pe-list-tile__content-front)": {
            borderColor: vars["color_" + tint + "_border"]
          }
        }
      }
    })]
  });

  const lightTintFns = Object.assign({}, generalFns, tintFns("light"));
  const darkTintFns = Object.assign({}, generalFns, tintFns("dark"));
  var color = polytheneCoreCss.createColor({
    varFns: {
      lightTintFns,
      darkTintFns
    }
  });

  const borderStyle = vars => ({
    borderStyle: "none none solid none",
    borderWidth: vars.border_width_bordered + "px"
  });

  const varFns = {
    general_styles: selector => [polytheneCoreCss.sel(selector, {
      flexGrow: 1,
      ".pe-list--header": {
        paddingTop: 0
      },
      ".pe-list--indented-border": {
        borderTop: "none"
      }
    })],
    padding: (selector, vars) => [polytheneCoreCss.sel(selector, {
      ".pe-list--padding": {
        padding: vars.padding + "px 0"
      },
      ".pe-list--padding-top": {
        paddingTop: vars.padding + "px"
      },
      ".pe-list--padding-bottom": {
        paddingBottom: vars.padding + "px"
      }
    })],
    padding_compact: (selector, vars) => [polytheneCoreCss.sel(selector, {
      ".pe-list--compact": {
        padding: vars.padding_compact + "px 0"
      }
    })],
    border_width_stacked: (selector, vars) => [polytheneCoreCss.sel(selector, {
      "& + &": {
        borderStyle: "solid none none none",
        borderWidth: vars.border_width_stacked + "px"
      }
    })],
    border_width_bordered: (selector, vars) => [polytheneCoreCss.sel(selector, {
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
    })]
  };
  var layout = polytheneCoreCss.createLayout({
    varFns
  });

  var vars = {
    general_styles: true,
    border_width_bordered: 1,
    border_width_stacked: 1,
    padding: polytheneTheme.vars.grid_unit_component,
    // vertical padding
    padding_compact: polytheneTheme.vars.grid_unit_component * 3 / 4,
    color_light_border: polytheneCoreCss.rgba(polytheneTheme.vars.color_light_foreground, polytheneTheme.vars.blend_light_border_light),
    color_dark_border: polytheneCoreCss.rgba(polytheneTheme.vars.color_dark_foreground, polytheneTheme.vars.blend_dark_border_light) // background color may be set in theme; disabled by default
    // color_light_background: "inherit",
    // color_dark_background:  "inherit"

  };

  const fns = [layout, color];
  const selector = `.${classes.component}`;
  const addStyle = polytheneCoreCss.styler.createAddStyle(selector, fns, vars);
  const getStyle = polytheneCoreCss.styler.createGetStyle(selector, fns, vars);
  polytheneCoreCss.styler.addStyle({
    selectors: [selector],
    fns,
    vars
  });

  exports.addStyle = addStyle;
  exports.color = color;
  exports.getStyle = getStyle;
  exports.layout = layout;
  exports.vars = vars;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=polythene-css-list.js.map
