(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('polythene-theme'), require('polythene-core-css')) :
  typeof define === 'function' && define.amd ? define(['exports', 'polythene-theme', 'polythene-core-css'], factory) :
  (factory((global.polythene = {}),global['polythene-theme'],global['polythene-core-css']));
}(this, (function (exports,polytheneTheme,polytheneCoreCss) { 'use strict';

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

  const generalFns = {
    general_styles: selector => [] // eslint-disable-line no-unused-vars

  };

  const tintFns = tint => ({
    ["color_" + tint + "_text"]: (selector, vars) => [polytheneCoreCss.sel(selector, {
      color: vars["color_" + tint + "_text"]
    })],
    ["color_" + tint + "_background"]: (selector, vars) => [polytheneCoreCss.sel(selector, {
      backgroundColor: vars["color_" + tint + "_background"]
    })],
    ["color_" + tint + "_border"]: (selector, vars) => [polytheneCoreCss.sel(selector, {
      ".pe-toolbar--border": {
        borderColor: vars["color_" + tint + "_border"]
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

  const breakpoint = breakpointSel => (selector, o) => ({
    [breakpointSel]: {
      [selector]: o
    }
  });

  const indent_padding_side = (selector, vars, isRTL) => polytheneCoreCss.sel(selector, {
    " .pe-toolbar__title--indent, .pe-toolbar__title.pe-toolbar__title--indent": {
      [isRTL ? "marginLeft" : "marginRight"]: 0,
      [isRTL ? "marginRight" : "marginLeft"]: vars.indent - vars.padding_side + "px"
    }
  });

  const title_padding_title_after_icon_padding = (selector, vars, isRTL) => polytheneCoreCss.sel(selector, {
    " > span, .pe-toolbar__title": {
      [isRTL ? "marginLeft" : "marginRight"]: 0,
      [isRTL ? "marginRight" : "marginLeft"]: vars.title_padding + "px"
    },
    " > * + span, * + .pe-toolbar__title, * + .pe-toolbar__title--indent, * + .pe-toolbar__title.pe-toolbar__title--indent": {
      [isRTL ? "marginLeft" : "marginRight"]: 0,
      [isRTL ? "marginRight" : "marginLeft"]: vars.title_after_icon_padding + "px"
    },
    " .pe-toolbar__title--center": {
      marginLeft: vars.title_padding + "px",
      marginRight: vars.title_padding + "px"
    }
  });

  const breakpointPhoneOnly = breakpoint(`@media (min-width: ${polytheneTheme.vars.breakpoint_for_phone_only}px) and (orientation: landscape)`);
  const breakpointTabletPortraitUp = breakpoint(`@media (min-width: ${polytheneTheme.vars.breakpoint_for_tablet_portrait_up}px)`);
  const varFns = {
    general_styles: selector => [polytheneCoreCss.sel(selector, [polytheneCoreCss.flex.layout, polytheneCoreCss.flex.layoutHorizontal, polytheneCoreCss.flex.layoutCenter, {
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
    }])],
    height: (selector, vars) => [polytheneCoreCss.sel(selector, {
      height: vars.height + "px"
    })],
    height_compact: (selector, vars) => [polytheneCoreCss.sel(selector, {
      ".pe-toolbar--compact": {
        height: vars.height_compact + "px"
      }
    }), breakpointPhoneOnly(selector, {
      height: vars.height + "px"
    })],
    line_height: (selector, vars) => [polytheneCoreCss.sel(selector, {
      lineHeight: vars.line_height + "em",
      " > span, .pe-toolbar__title, .pe-toolbar__title--indent": {
        lineHeight: vars.line_height
      }
    })],
    font_size: (selector, vars) => [polytheneCoreCss.sel(selector, {
      " > span, .pe-toolbar__title, .pe-toolbar__title--indent": {
        fontSize: vars.font_size + "px"
      }
    })],
    padding_side: (selector, vars) => [polytheneCoreCss.sel(selector, {
      padding: "0 " + vars.padding_side + "px"
    }), indent_padding_side(selector, vars, false), indent_padding_side(polytheneCoreCss.selectorRTL(selector), vars, true)],
    indent: (selector, vars) => [indent_padding_side(selector, vars, false), indent_padding_side(polytheneCoreCss.selectorRTL(selector), vars, true)],
    title_padding: (selector, vars) => [title_padding_title_after_icon_padding(selector, vars, false), title_padding_title_after_icon_padding(polytheneCoreCss.selectorRTL(selector), vars, true)],
    title_after_icon_padding: (selector, vars) => [title_padding_title_after_icon_padding(selector, vars, false), title_padding_title_after_icon_padding(polytheneCoreCss.selectorRTL(selector), vars, true)],
    height_large: (selector, vars) => [breakpointTabletPortraitUp(selector, {
      height: vars.height_large + "px"
    })],
    padding_side_large: (selector, vars) => [breakpointTabletPortraitUp(selector, {
      padding: "0 " + vars.padding_side_large + "px"
    })]
  };
  var layout = polytheneCoreCss.createLayout({
    varFns
  });

  const padding_side = polytheneTheme.vars.grid_unit_component * 2 - 12; // 16 - 12 = 4

  var vars = {
    general_styles: true,
    font_size: 18,
    height: polytheneTheme.vars.grid_unit_component * 7,
    // 56
    height_compact: polytheneTheme.vars.grid_unit_component * 6,
    // 48
    height_large: polytheneTheme.vars.grid_unit_component * 8,
    // 64
    indent: polytheneTheme.vars.unit_indent,
    line_height: polytheneTheme.vars.line_height,
    padding_side,
    padding_side_large: polytheneTheme.vars.grid_unit_component * 3 - 12,
    // 24 - 12 = 12
    title_after_icon_padding: polytheneTheme.vars.grid_unit_component * 9 - polytheneTheme.vars.grid_unit_component * 6 - padding_side,
    // 72 - 48 - 4 = 20
    title_padding: 12,
    // icon padding
    color_light_text: polytheneCoreCss.rgba(polytheneTheme.vars.color_light_foreground, polytheneTheme.vars.blend_light_text_primary),
    color_light_border: polytheneCoreCss.rgba(polytheneTheme.vars.color_light_foreground, polytheneTheme.vars.blend_light_border_light),
    color_light_background: polytheneCoreCss.rgba(polytheneTheme.vars.color_light_background),
    color_dark_text: polytheneCoreCss.rgba(polytheneTheme.vars.color_dark_foreground, polytheneTheme.vars.blend_dark_text_primary),
    color_dark_border: polytheneCoreCss.rgba(polytheneTheme.vars.color_dark_foreground, polytheneTheme.vars.blend_dark_border_light),
    color_dark_background: polytheneCoreCss.rgba(polytheneTheme.vars.color_dark_background)
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
//# sourceMappingURL=polythene-css-toolbar.js.map
