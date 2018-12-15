import { vars } from 'polythene-theme';
import { sel, createColor, flex, createLayout, rgba, styler } from 'polythene-core-css';

var classes = {
  component: "pe-search",
  // elements
  content: "pe-search__content",
  // states
  searchFullWidth: "pe-search--full-width",
  searchInset: "pe-search--inset"
};

const generalFns = {
  general_styles: selector => [sel(selector, {
    " .pe-textfield__input-area": {
      backgroundColor: "transparent"
    }
  })]
};

const tintFns = tint => ({
  ["color_" + tint + "_background"]: (selector, vars$$1) => [sel(selector, {
    backgroundColor: vars$$1["color_" + tint + "_background"]
  })],
  ["color_" + tint + "_label_text"]: (selector, vars$$1) => [sel(selector, {
    " .pe-textfield": {
      " .pe-textfield__label": {
        color: vars$$1["color_" + tint + "_label_text"]
      }
    }
  })],
  ["color_" + tint + "_input_text"]: (selector, vars$$1) => [sel(selector, {
    " .pe-textfield": {
      " .pe-textfield__input": {
        color: vars$$1["color_" + tint + "_input_text"]
      }
    }
  })]
});

const lightTintFns = Object.assign({}, generalFns, tintFns("light"));
const darkTintFns = Object.assign({}, generalFns, tintFns("dark"));
var color = createColor({
  varFns: {
    lightTintFns,
    darkTintFns
  }
});

const inset_height_line_height_input = (selector, vars$$1) => {
  const inset_input_padding_v = (vars$$1.inset_height - vars$$1.line_height_input) / 2;
  return sel(selector, {
    ".pe-search--inset": {
      " .pe-textfield__input, .pe-textfield__label": {
        paddingTop: inset_input_padding_v + "px",
        paddingBottom: inset_input_padding_v + "px"
      }
    }
  });
};

const full_width_height_line_height_input = (selector, vars$$1) => {
  const full_width_input_padding_v = (vars$$1.full_width_height - vars$$1.line_height_input) / 2;
  return sel(selector, {
    ".pe-search--full-width": {
      " .pe-textfield__input, .pe-textfield__label": {
        paddingTop: full_width_input_padding_v + "px",
        paddingBottom: full_width_input_padding_v + "px"
      }
    }
  });
};

const varFns = {
  general_styles: selector => [sel(selector, [flex.flex(), {
    position: "relative",
    // necessary when a shadow is added
    " .pe-textfield": [flex.flex(), {
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
      "&, .pe-textfield": flex.layoutHorizontal,
      "&, .pe-textfield__input-area": {
        flexGrow: 1
      }
    },
    " .pe-search__content > *": [flex.layoutVertical, flex.selfCenter],
    ".pe-search--inset": {
      "&, .pe-textfield__input-area, .pe-textfield__input, .pe-textfield__label": {
        padding: 0
      }
    }
  }])],
  font_size_input: (selector, vars$$1) => [sel(selector, {
    " .pe-textfield": {
      " .pe-textfield__input, .pe-textfield__label": {
        fontSize: vars$$1.font_size_input + "px"
      }
    }
  })],
  line_height_input: (selector, vars$$1) => [sel(selector, {
    " .pe-textfield__input, .pe-textfield__label": {
      lineHeight: vars$$1.line_height_input + "px"
    }
  }), inset_height_line_height_input(selector, vars$$1)],
  inset_border_radius: (selector, vars$$1) => [sel(selector, {
    ".pe-search--inset": {
      "border-radius": vars$$1.inset_border_radius + "px"
    }
  })],
  inset_side_padding: (selector, vars$$1) => [sel(selector, {
    ".pe-search--inset": {
      padding: "0 " + vars$$1.inset_side_padding + "px"
    }
  })],
  inset_height: (selector, vars$$1) => [sel(selector, {
    ".pe-search--inset": {
      "&, .pe-textfield__input-area, .pe-textfield__input, .pe-textfield__label": {
        padding: 0,
        height: vars$$1.inset_height + "px"
      }
    }
  }), inset_height_line_height_input(selector, vars$$1)],
  full_width_height: (selector, vars$$1) => [sel(selector, {
    ".pe-search--full-width": {
      "&, .pe-textfield__input-area, .pe-textfield__input, .pe-textfield__label": {
        height: vars$$1.full_width_height + "px"
      }
    }
  }), full_width_height_line_height_input(selector, vars$$1)],
  inset_input_indent: (selector, vars$$1) => [sel(selector, {
    ".pe-search--inset": {
      " .pe-textfield__input, .pe-textfield__label": {
        paddingLeft: vars$$1.inset_input_indent + "px"
      }
    }
  })],
  inset_input_right_padding: (selector, vars$$1) => [sel(selector, {
    ".pe-search--inset": {
      " .pe-textfield__input, .pe-textfield__label": {
        paddingRight: vars$$1.inset_input_right_padding + "px"
      }
    }
  })],
  full_width_side_padding: (selector, vars$$1) => {
    const full_width_input_indent = vars.unit_indent - vars$$1.full_width_side_padding - vars.grid_unit_icon_button;
    return sel(selector, {
      ".pe-search--full-width": {
        padding: "0 " + vars$$1.full_width_side_padding + "px",
        " .pe-textfield__input, .pe-textfield__label": {
          paddingLeft: full_width_input_indent + "px"
        }
      },
      ".pe-search--full-width + .pe-list .pe-list-tile": {
        "> :first-child": {
          paddingLeft: vars$$1.full_width_side_padding + "px"
        },
        "> :last-child": {
          paddingRight: vars$$1.full_width_side_padding + "px"
        }
      }
    });
  },
  full_width_border_radius: (selector, vars$$1) => [sel(selector, {
    ".pe-search--full-width": {
      borderRadius: vars$$1.full_width_border_radius + "px"
    }
  })],
  full_width_input_right_padding: (selector, vars$$1) => [sel(selector, {
    ".pe-search--full-width": {
      " .pe-textfield__input, .pe-textfield__label": {
        paddingRight: vars$$1.full_width_input_right_padding + "px"
      }
    }
  })]
};
var layout = createLayout({
  varFns
});

var vars$1 = {
  general_styles: true,
  font_size_input: 20,
  full_width_border_radius: 0,
  full_width_height: 56,
  full_width_input_right_padding: 0,
  full_width_side_margin: 0,
  full_width_side_padding: 8,
  inset_border_radius: vars.unit_block_border_radius,
  inset_height: 48,
  inset_input_indent: 16,
  inset_input_right_padding: 0,
  inset_side_padding: 0,
  line_height_input: 20,
  color_light_label_text: rgba(vars.color_light_foreground, vars.blend_light_text_disabled),
  color_light_input_text: rgba(vars.color_light_foreground, vars.blend_light_text_primary),
  color_light_background: rgba(vars.color_light_background),
  color_dark_label_text: rgba(vars.color_dark_foreground, vars.blend_dark_text_disabled),
  color_dark_input_text: rgba(vars.color_dark_foreground, vars.blend_dark_text_primary),
  color_dark_background: rgba(vars.color_dark_background)
};

const fns = [layout, color];
const selector = `.${classes.component}`;
const addStyle = styler.createAddStyle(selector, fns, vars$1);
const getStyle = styler.createGetStyle(selector, fns, vars$1);
styler.addStyle({
  selectors: [selector],
  fns,
  vars: vars$1
});

export { addStyle, color, getStyle, layout, vars$1 as vars };
