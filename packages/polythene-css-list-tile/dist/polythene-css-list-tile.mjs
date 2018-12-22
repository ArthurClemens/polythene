import { createColor, sel, createLayout, flex, mixin, selectorRTL, rgba, styler } from 'polythene-core-css';
import { vars } from 'polythene-theme';

var classes = {
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

const generalFns = {
  general_styles: selector => [sel(selector, {
    ".pe-list-tile--header": {
      " .pe-list-tile__primary, pe-list-tile__secondary": {
        backgroundColor: "inherit"
      }
    },
    ":not(.pe-list-tile--disabled):not(.pe-list-tile--selected)": {
      " a.pe-list-tile__primary:focus, a.pe-list-tile__secondary:focus": {
        outline: "none",
        backgroundColor: "inherit"
      }
    },
    "&.pe-list-tile--sticky": {
      backgroundColor: "inherit"
    }
  })]
};

const tintFns = tint => ({
  ["color_" + tint + "_title"]: (selector, vars$$1) => [sel(selector, {
    color: vars$$1["color_" + tint + "_title"]
  })],
  ["color_" + tint + "_background"]: (selector, vars$$1) => [sel(selector, {
    backgroundColor: vars$$1["color_" + tint + "_background"],
    "&.pe-list-tile--sticky": {
      backgroundColor: vars$$1["color_" + tint + "_background"]
    }
  })],
  ["color_" + tint + "_list_header"]: (selector, vars$$1) => [sel(selector, {
    ".pe-list-tile--header": {
      color: vars$$1["color_" + tint + "_list_header"]
    }
  })],
  ["color_" + tint + "_subtitle"]: (selector, vars$$1) => [sel(selector, {
    " .pe-list-tile__subtitle": {
      color: vars$$1["color_" + tint + "_subtitle"]
    }
  })],
  ["color_" + tint + "_secondary"]: (selector, vars$$1) => [sel(selector, {
    " .pe-list-tile__secondary": {
      color: vars$$1["color_" + tint + "_secondary"]
    }
  })],
  ["color_" + tint + "_front"]: (selector, vars$$1) => [sel(selector, {
    " .pe-list-tile__content-front": {
      color: vars$$1["color_" + tint + "_front"]
    }
  })],
  ["color_" + tint + "_text_disabled"]: (selector, vars$$1) => [sel(selector, {
    ".pe-list-tile--disabled": {
      "&, .pe-list-tile__title, .pe-list-tile__content, .pe-list-tile__subtitle": {
        color: vars$$1["color_" + tint + "_text_disabled"]
      }
    }
  })],
  ["color_" + tint + "_selected_background"]: (selector, vars$$1) => [sel(selector, {
    ".pe-list-tile--selected": {
      " .pe-list-tile__primary, pe-list-tile__secondary": {
        backgroundColor: vars$$1["color_" + tint + "_selected_background"]
      }
    }
  })],
  ["color_" + tint + "_highlight_background"]: (selector, vars$$1) => [sel(selector, {
    ".pe-list-tile--highlight:not(.pe-list-tile--selected)": {
      " .pe-list-tile__primary, pe-list-tile__secondary": {
        backgroundColor: vars$$1["color_" + tint + "_highlight_background"]
      }
    }
  })],
  ["color_" + tint + "_focus_background"]: (selector, vars$$1) => [sel(selector, {
    ":not(.pe-list-tile--disabled):not(.pe-list-tile--selected)": {
      " a.pe-list-tile__primary:focus, a.pe-list-tile__secondary:focus": {
        backgroundColor: vars$$1["color_" + tint + "_focus_background"]
      }
    }
  })]
});

const hoverTintFns = tint => ({
  ["color_" + tint + "_hover"]: (selector, vars$$1) => [sel(selector, {
    ".pe-list-tile--hoverable:not(.pe-list-tile--selected)": {
      color: vars$$1["color_" + tint + "_hover"]
    }
  })],
  ["color_" + tint + "_hover_background"]: (selector, vars$$1) => [sel(selector, {
    ".pe-list-tile--hoverable:not(.pe-list-tile--selected)": {
      " .pe-list-tile__primary, .pe-list-tile__secondary": {
        backgroundColor: vars$$1["color_" + tint + "_hover_background"]
      }
    }
  })],
  ["color_" + tint + "_hover_front"]: (selector, vars$$1) => [sel(selector, {
    ".pe-list-tile--hoverable:not(.pe-list-tile--selected)": {
      " .pe-list-tile__primary .pe-list-tile__content-front": {
        color: vars$$1["color_" + tint + "_hover_front"]
      }
    }
  })]
});

const lightTintFns = Object.assign({}, generalFns, tintFns("light"));
const darkTintFns = Object.assign({}, generalFns, tintFns("dark"));
const lightTintHoverFns = hoverTintFns("light");
const darkTintHoverFns = hoverTintFns("dark");
var color = createColor({
  varFns: {
    lightTintFns,
    darkTintFns,
    lightTintHoverFns,
    darkTintHoverFns
  }
});

const alignSide = isRTL => vars$$1 => ({
  // eslint-disable-line no-unused-vars
  " .pe-list-tile__content-front + .pe-list-tile__content": {
    [isRTL ? "paddingRight" : "paddingLeft"]: 0
  }
}); // eslint-disable-line no-unused-vars


const alignLeft = alignSide(false);
const alignRight = alignSide(true);

const paddingH = h => ({
  "padding-left": h + "px",
  "padding-right": h + "px"
});

const paddingV = (top, bottom) => ({
  "padding-top": top + "px",
  "padding-bottom": (bottom || top) + "px"
});

const title_line_count_single_line_height = (selector, vars$$1) => sel(selector, {
  lineHeight: vars$$1.single_line_height + "px",
  ".pe-list-tile--navigation": {
    " .pe-list-tile__title": {
      minHeight: vars$$1.single_line_height + "px"
    }
  },
  " .pe-list-tile__title": [mixin.ellipsis(vars$$1.title_line_count, vars$$1.single_line_height, "px")]
});

const varFns = {
  general_styles: (selector, vars$$1) => [sel(selector, [alignLeft(vars$$1), flex.layout, {
    position: "relative",
    ".pe-list-tile--navigation": {
      " .pe-list-tile__title": {
        whiteSpace: "pre-wrap"
      }
    },
    ".pe-list-tile--sticky": mixin.sticky(2),
    " .pe-list-tile__primary": {
      width: "100%"
    },
    " .pe-list-tile__primary, .pe-list-tile__secondary": [flex.layoutHorizontal, mixin.defaultTransition("background", ".200s"), {
      textDecoration: "none",
      color: "inherit",
      border: "none"
    }],
    ":not(.pe-list-tile--header) .pe-list-tile__primary": [flex.flex(), {
      position: "relative",
      " .pe-list-tile__content:not(.pe-list-tile__content-front)": [flex.flex()]
    }],
    ":not(.pe-list-tile--disabled)": {
      outline: "none"
    },
    " .pe-list-tile__secondary": {
      textAlign: "right",
      position: "relative"
    },
    " .pe-list-tile__content": [flex.layoutVertical, flex.selfCenter, {
      width: "100%",
      ".pe-list-tile__content-front": {
        flexShrink: 0
      }
    }],
    " .pe-list-tile__title": {
      whiteSpace: "normal"
    },
    " .pe-list-tile__subtitle": [mixin.ellipsis(vars$$1.subtitle_line_count, vars$$1.line_height_subtitle, "px"), {
      fontSize: vars$$1.font_size_subtitle + "px",
      fontWeight: vars$$1.font_weight_subtitle,
      lineHeight: vars$$1.line_height_subtitle + "px",
      ".pe-list-tile__high-subtitle": [mixin.ellipsis(vars$$1.high_subtitle_line_count, vars$$1.line_height_subtitle, "px"), {
        whiteSpace: "normal"
      }]
    }],
    ".pe-list-tile--selected, &.pe-list-tile--disabled": {
      "&, a": {
        pointerEvents: "none"
      }
    },
    ".pe-list-tile--subtitle": {
      " .pe-list-tile__content": {
        " .pe-list-tile__title": {
          padding: 0
        }
      }
    },
    ".pe-list-tile--high-subtitle": {
      " .pe-list-tile--high-subtitle .pe-list-tile__secondary": [flex.layoutHorizontal, flex.layoutStart],
      " .pe-list-tile__content": [flex.selfStart, {
        " .pe-list-tile__title": {
          padding: 0
        }
      }]
    },
    // List header
    ".pe-list-tile--header": {
      pointerEvents: "none",
      " .pe-list-tile__content": {
        paddingTop: 0,
        paddingBottom: 0
      },
      " .pe-list-tile__title": {
        padding: 0
      }
    },
    // Firefox only
    "@supports (-moz-appearance:none) and (display:contents)": {
      " .pe-list-tile__primary, .pe-list-tile__content": {
        overflow: "hidden"
      }
    },
    // Menu
    ".pe-dialog .pe-menu__content &": {
      " .pe-list-tile__content": {
        paddingLeft: "24px",
        paddingRight: "24px"
      },
      " .pe-list-tile__content-front": {
        paddingRight: 0,
        width: "64px",
        marginRight: "-7px"
      },
      " .pe-list-tile__title": mixin.ellipsis("none")
    },
    ".pe-menu__content &": {
      ":not(.pe-list-tile--disabled)": {
        cursor: "default",
        "&, .pe-list-tile__primary, .pe-list-tile__secondary": {
          " .pe-list-tile__title, .pe-list-tile__subtitle": {
            userSelect: "none",
            "-moz-user-select": "none"
          }
        }
      }
    },
    // Non-touch
    "html.pe-no-touch &.pe-list-tile--hoverable, \
        html.pe-no-touch &.pe-list-tile--selectable": {
      ":not(.pe-list-tile--header):not(.pe-list-tile--disabled):not(.pe-list-tile--selected):hover": {
        cursor: "pointer"
      }
    }
  }]), {
    // RTL
    [selectorRTL(selector)]: alignRight(vars$$1)
  }],
  title_line_count: (selector, vars$$1) => [title_line_count_single_line_height(selector, vars$$1)],
  single_line_height: (selector, vars$$1) => [title_line_count_single_line_height(selector, vars$$1)],
  font_size_title: (selector, vars$$1) => [sel(selector, {
    fontSize: vars$$1.font_size_title + "px",
    " .pe-list-tile__secondary": {
      fontSize: vars$$1.font_size_title + "px"
    }
  })],
  font_weight_title: (selector, vars$$1) => [sel(selector, {
    fontWeight: vars$$1.font_weight_title
  })],
  font_size_navigation_title: (selector, vars$$1) => [sel(selector, {
    ".pe-list-tile--navigation": {
      fontSize: vars$$1.font_size_navigation_title + "px"
    }
  })],
  font_weight_navigation_title: (selector, vars$$1) => [sel(selector, {
    ".pe-list-tile--navigation": {
      fontWeight: vars$$1.font_weight_navigation_title
    }
  })],
  padding: (selector, vars$$1) => [sel(selector, {
    ":not(.pe-list-tile--header)": {
      " .pe-list-tile__content:not(.pe-list-tile__content-front)": [paddingV(vars$$1.padding, vars$$1.padding + 1)]
    },
    " .pe-list-tile__content": {
      ".pe-list-tile__content-front": [paddingV(vars$$1.padding - 5)]
    }
  })],
  side_padding: (selector, vars$$1) => [sel(selector, {
    " .pe-list-tile__content": [paddingH(vars$$1.side_padding)]
  })],
  compact_front_item_width: (selector, vars$$1) => [sel(selector, {
    " .pe-list-tile__content-front": {
      ".pe-list-tile--compact-front": {
        width: vars$$1.compact_front_item_width + "px"
      }
    }
  })],
  front_item_width: (selector, vars$$1) => [sel(selector, {
    " .pe-list-tile__content-front": {
      ":not(.pe-list-tile--compact-front)": {
        width: vars$$1.front_item_width + "px"
      }
    }
  })],
  font_size_small: (selector, vars$$1) => [sel(selector, {
    " .pe-list-tile__content": {
      " small": {
        fontSize: vars$$1.font_size_small + "px"
      }
    }
  })],
  has_high_subtitle_padding: (selector, vars$$1) => [sel(selector, {
    ".pe-list-tile--high-subtitle": {
      " .pe-list-tile__content": [paddingV(vars$$1.has_high_subtitle_padding, vars$$1.has_high_subtitle_padding + 1)]
    }
  })],
  has_subtitle_padding: (selector, vars$$1) => [sel(selector, {
    ".pe-list-tile--subtitle": {
      " .pe-list-tile__content": [paddingV(vars$$1.has_subtitle_padding, vars$$1.has_subtitle_padding + 1)]
    }
  })],
  single_height: (selector, vars$$1) => [sel(selector, {
    ".pe-list-tile--header": {
      height: vars$$1.single_height + "px",
      " .pe-list-tile__title": [mixin.ellipsis(1, vars$$1.single_height, "px"), {
        lineHeight: vars$$1.single_height + "px",
        padding: 0
      }]
    }
  })],
  font_size_list_header: (selector, vars$$1) => [sel(selector, {
    ".pe-list-tile--header": {
      " .pe-list-tile__title": {
        fontSize: vars$$1.font_size_list_header + "px"
      }
    }
  })],
  font_weight_list_header: (selector, vars$$1) => [sel(selector, {
    ".pe-list-tile--header": {
      " .pe-list-tile__title": {
        fontWeight: vars$$1.font_weight_list_header
      }
    }
  })],
  compact_padding: (selector, vars$$1) => [sel(selector, {
    " .pe-list--compact &, &.pe-list-tile--compact": {
      ":not(.pe-list-tile--header)": {
        " .pe-list-tile__content:not(.pe-list-tile__content-front)": paddingV(vars$$1.compact_padding, vars$$1.compact_padding + 1)
      }
    }
  })]
};
var layout = createLayout({
  varFns
});

//
// heights:
// single line: 48
// single line, dense: 40
// single line, with icon: 48
// single line, with icon, dense: 40
// single line, with avatar: 56
// single line, with avatar, dense: 48
// two-line: 72
// two-line, dense: 60
// three-line: 88
// three-line, dense: 76

const single_height = 48;
const padding = 8;
const single_with_icon_height = 56;
var vars$1 = {
  general_styles: true,
  compact_front_item_width: 64,
  compact_padding: 9,
  compact_side_padding: 1 * vars.grid_unit_component,
  font_size_list_header: 14,
  font_size_navigation_title: 14,
  font_size_small: 12,
  font_size_subtitle: 14,
  font_size_title: 16,
  font_weight_list_header: vars.font_weight_medium,
  font_weight_navigation_title: vars.font_weight_medium,
  font_weight_subtitle: vars.font_weight_normal,
  font_weight_title: vars.font_weight_normal,
  front_item_width: 72,
  has_high_subtitle_padding: 13,
  has_subtitle_padding: 15,
  high_subtitle_line_count: 2,
  line_height_subtitle: 20,
  padding: 13,
  side_padding: 2 * vars.grid_unit_component,
  single_height,
  single_line_height: single_height - 2 * padding - (2 * 5 + 1),
  single_with_icon_height,
  single_with_icon_line_height: single_with_icon_height - 2 * padding - (2 * 5 + 1),
  subtitle_line_count: 1,
  title_line_count: 1,
  color_light_title: rgba(vars.color_light_foreground, vars.blend_light_text_primary),
  color_light_subtitle: rgba(vars.color_light_foreground, vars.blend_light_text_secondary),
  color_light_info: rgba(vars.color_light_foreground, vars.blend_light_text_tertiary),
  color_light_front: rgba(vars.color_light_foreground, vars.blend_light_text_secondary),
  color_light_text_disabled: rgba(vars.color_light_foreground, vars.blend_light_text_disabled),
  color_light_list_header: rgba(vars.color_light_foreground, vars.blend_light_text_tertiary),
  color_light_secondary: rgba(vars.color_light_foreground, vars.blend_light_text_secondary),
  color_light_hover: rgba(vars.color_light_foreground, vars.blend_light_text_primary),
  color_light_hover_front: rgba(vars.color_light_foreground, vars.blend_light_text_primary),
  color_light_hover_background: rgba(vars.color_light_foreground, vars.blend_light_background_hover),
  color_light_focus_background: rgba(vars.color_light_foreground, vars.blend_light_background_hover),
  color_light_selected_background: rgba(vars.color_light_foreground, vars.blend_light_background_hover),
  color_light_highlight_background: rgba(vars.color_light_foreground, vars.blend_light_background_hover),
  // background color may be set in theme; disabled by default
  // color_light_background:          "inherit",
  color_dark_title: rgba(vars.color_dark_foreground, vars.blend_dark_text_primary),
  color_dark_subtitle: rgba(vars.color_dark_foreground, vars.blend_dark_text_secondary),
  color_dark_info: rgba(vars.color_dark_foreground, vars.blend_dark_text_tertiary),
  color_dark_front: rgba(vars.color_dark_foreground, vars.blend_dark_text_secondary),
  color_dark_text_disabled: rgba(vars.color_dark_foreground, vars.blend_dark_text_disabled),
  color_dark_list_header: rgba(vars.color_dark_foreground, vars.blend_dark_text_tertiary),
  color_dark_secondary: rgba(vars.color_dark_foreground, vars.blend_dark_text_secondary),
  color_dark_hover: rgba(vars.color_dark_foreground, vars.blend_dark_text_primary),
  color_dark_hover_front: rgba(vars.color_dark_foreground, vars.blend_dark_text_primary),
  color_dark_hover_background: rgba(vars.color_dark_foreground, vars.blend_dark_background_hover),
  color_dark_selected_background: rgba(vars.color_dark_foreground, vars.blend_dark_background_hover),
  color_dark_highlight_background: rgba(vars.color_dark_foreground, vars.blend_dark_background_hover) // background color may be set in theme; disabled by default
  // color_dark_background:           "inherit",

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
