(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('polythene-theme'), require('polythene-core-css')) :
  typeof define === 'function' && define.amd ? define(['exports', 'polythene-theme', 'polythene-core-css'], factory) :
  (factory((global.polythene = {}),global['polythene-theme'],global['polythene-core-css']));
}(this, (function (exports,polytheneTheme,polytheneCoreCss) { 'use strict';

  var classes = {
    component: "pe-search",
    // elements
    content: "pe-search__content",
    // states
    searchFullWidth: "pe-search--full-width",
    searchInset: "pe-search--inset"
  };

  const generalFns = {
    general_styles: selector => [polytheneCoreCss.sel(selector, {
      " .pe-textfield__input-area": {
        backgroundColor: "transparent"
      }
    })]
  };

  const tintFns = tint => ({
    ["color_" + tint + "_background"]: (selector, vars) => [polytheneCoreCss.sel(selector, {
      backgroundColor: vars["color_" + tint + "_background"]
    })],
    ["color_" + tint + "_label_text"]: (selector, vars) => [polytheneCoreCss.sel(selector, {
      " .pe-textfield": {
        " .pe-textfield__label": {
          color: vars["color_" + tint + "_label_text"]
        }
      }
    })],
    ["color_" + tint + "_input_text"]: (selector, vars) => [polytheneCoreCss.sel(selector, {
      " .pe-textfield": {
        " .pe-textfield__input": {
          color: vars["color_" + tint + "_input_text"]
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

  const inset_height_line_height_input = (selector, vars) => {
    const inset_input_padding_v = (vars.inset_height - vars.line_height_input) / 2;
    return polytheneCoreCss.sel(selector, {
      ".pe-search--inset": {
        " .pe-textfield__input, .pe-textfield__label": {
          paddingTop: inset_input_padding_v + "px",
          paddingBottom: inset_input_padding_v + "px"
        }
      }
    });
  };

  const full_width_height_line_height_input = (selector, vars) => {
    const full_width_input_padding_v = (vars.full_width_height - vars.line_height_input) / 2;
    return polytheneCoreCss.sel(selector, {
      ".pe-search--full-width": {
        " .pe-textfield__input, .pe-textfield__label": {
          paddingTop: full_width_input_padding_v + "px",
          paddingBottom: full_width_input_padding_v + "px"
        }
      }
    });
  };

  const varFns = {
    general_styles: selector => [polytheneCoreCss.sel(selector, [polytheneCoreCss.flex.flex(), {
      position: "relative",
      // necessary when a shadow is added
      " .pe-textfield": [polytheneCoreCss.flex.flex(), {
        alignItems: "center",
        padding: 0,
        // prevent that neighboring icon button with ripple hides the cursor
        position: "relative",
        zIndex: 1,
        " .pe-textfield__input-area": {
          padding: 0,
          ":after": {
            display: "none"
          }
        },
        " .pe-textfield__input": {
          // reset
          border: "none"
        },
        " .pe-textfield__label": {
          // reset
          top: 0,
          bottom: 0
        }
      }],
      " .pe-search__content": {
        "&, .pe-textfield": polytheneCoreCss.flex.layoutHorizontal,
        "&, .pe-textfield__input-area": {
          flexGrow: 1
        }
      },
      " .pe-search__content > *": [polytheneCoreCss.flex.layoutVertical, polytheneCoreCss.flex.selfCenter],
      ".pe-search--inset": {
        "&, .pe-textfield__input-area, .pe-textfield__input, .pe-textfield__label": {
          padding: 0
        }
      }
    }])],
    font_size_input: (selector, vars) => [polytheneCoreCss.sel(selector, {
      " .pe-textfield": {
        " .pe-textfield__input, .pe-textfield__label": {
          fontSize: vars.font_size_input + "px"
        }
      }
    })],
    line_height_input: (selector, vars) => [polytheneCoreCss.sel(selector, {
      " .pe-textfield__input, .pe-textfield__label": {
        lineHeight: vars.line_height_input + "px"
      }
    }), inset_height_line_height_input(selector, vars)],
    inset_border_radius: (selector, vars) => [polytheneCoreCss.sel(selector, {
      ".pe-search--inset": {
        "border-radius": vars.inset_border_radius + "px"
      }
    })],
    inset_side_padding: (selector, vars) => [polytheneCoreCss.sel(selector, {
      ".pe-search--inset": {
        padding: "0 " + vars.inset_side_padding + "px"
      }
    })],
    inset_height: (selector, vars) => [polytheneCoreCss.sel(selector, {
      ".pe-search--inset": {
        "&, .pe-textfield__input-area, .pe-textfield__input, .pe-textfield__label": {
          padding: 0,
          height: vars.inset_height + "px"
        }
      }
    }), inset_height_line_height_input(selector, vars)],
    full_width_height: (selector, vars) => [polytheneCoreCss.sel(selector, {
      ".pe-search--full-width": {
        "&, .pe-textfield__input-area, .pe-textfield__input, .pe-textfield__label": {
          height: vars.full_width_height + "px"
        }
      }
    }), full_width_height_line_height_input(selector, vars)],
    inset_input_indent: (selector, vars) => [polytheneCoreCss.sel(selector, {
      ".pe-search--inset": {
        " .pe-textfield__input, .pe-textfield__label": {
          paddingLeft: vars.inset_input_indent + "px"
        }
      }
    })],
    inset_input_right_padding: (selector, vars) => [polytheneCoreCss.sel(selector, {
      ".pe-search--inset": {
        " .pe-textfield__input, .pe-textfield__label": {
          paddingRight: vars.inset_input_right_padding + "px"
        }
      }
    })],
    full_width_side_padding: (selector, vars) => {
      const full_width_input_indent = polytheneTheme.vars.unit_indent - vars.full_width_side_padding - polytheneTheme.vars.grid_unit_icon_button;
      return polytheneCoreCss.sel(selector, {
        ".pe-search--full-width": {
          padding: "0 " + vars.full_width_side_padding + "px",
          " .pe-textfield__input, .pe-textfield__label": {
            paddingLeft: full_width_input_indent + "px"
          }
        },
        ".pe-search--full-width + .pe-list .pe-list-tile": {
          "> :first-child": {
            paddingLeft: vars.full_width_side_padding + "px"
          },
          "> :last-child": {
            paddingRight: vars.full_width_side_padding + "px"
          }
        }
      });
    },
    full_width_border_radius: (selector, vars) => [polytheneCoreCss.sel(selector, {
      ".pe-search--full-width": {
        borderRadius: vars.full_width_border_radius + "px"
      }
    })],
    full_width_input_right_padding: (selector, vars) => [polytheneCoreCss.sel(selector, {
      ".pe-search--full-width": {
        " .pe-textfield__input, .pe-textfield__label": {
          paddingRight: vars.full_width_input_right_padding + "px"
        }
      }
    })]
  };
  var layout = polytheneCoreCss.createLayout({
    varFns
  });

  var vars = {
    general_styles: true,
    font_size_input: 20,
    full_width_border_radius: 0,
    full_width_height: 56,
    full_width_input_right_padding: 0,
    full_width_side_margin: 0,
    full_width_side_padding: 8,
    inset_border_radius: polytheneTheme.vars.unit_block_border_radius,
    inset_height: 48,
    inset_input_indent: 16,
    inset_input_right_padding: 0,
    inset_side_padding: 0,
    line_height_input: 20,
    color_light_label_text: polytheneCoreCss.rgba(polytheneTheme.vars.color_light_foreground, polytheneTheme.vars.blend_light_text_disabled),
    color_light_input_text: polytheneCoreCss.rgba(polytheneTheme.vars.color_light_foreground, polytheneTheme.vars.blend_light_text_primary),
    color_light_background: polytheneCoreCss.rgba(polytheneTheme.vars.color_light_background),
    color_dark_label_text: polytheneCoreCss.rgba(polytheneTheme.vars.color_dark_foreground, polytheneTheme.vars.blend_dark_text_disabled),
    color_dark_input_text: polytheneCoreCss.rgba(polytheneTheme.vars.color_dark_foreground, polytheneTheme.vars.blend_dark_text_primary),
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
//# sourceMappingURL=polythene-css-search.js.map
