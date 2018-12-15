import { vars } from 'polythene-theme';
import { sel, createColor, mixin, flex, createLayout, rgba, styler } from 'polythene-core-css';

var classes = {
  component: "pe-card",
  // elements
  actions: "pe-card__actions",
  any: "pe-card__any",
  content: "pe-card__content",
  header: "pe-card__header",
  headerTitle: "pe-card__header-title",
  media: "pe-card__media",
  mediaDimmer: "pe-card__media__dimmer",
  overlay: "pe-card__overlay",
  overlayContent: "pe-card__overlay__content",
  primary: "pe-card__primary",
  primaryMedia: "pe-card__primary-media",
  subtitle: "pe-card__subtitle",
  text: "pe-card__text",
  title: "pe-card__title",
  // states
  actionsBorder: "pe-card__actions--border",
  actionsHorizontal: "pe-card__actions--horizontal",
  actionsJustified: "pe-card__actions--justified",
  actionsTight: "pe-card__actions--tight",
  actionsVertical: "pe-card__actions--vertical",
  mediaCropX: "pe-card__media--crop-x",
  mediaCropY: "pe-card__media--crop-y",
  mediaOriginStart: "pe-card__media--origin-start",
  mediaOriginCenter: "pe-card__media--origin-center",
  mediaOriginEnd: "pe-card__media--origin-end",
  mediaLarge: "pe-card__media--large",
  mediaMedium: "pe-card__media--medium",
  mediaRatioLandscape: "pe-card__media--landscape",
  mediaRatioSquare: "pe-card__media--square",
  mediaRegular: "pe-card__media--regular",
  mediaSmall: "pe-card__media--small",
  overlaySheet: "pe-card__overlay--sheet",
  primaryHasMedia: "pe-card__primary--media",
  primaryTight: "pe-card__primary--tight",
  textTight: "pe-card__text--tight"
};

const generalFns = {
  general_styles: selector => [] // eslint-disable-line no-unused-vars

};

const tintFns = tint => ({
  ["color_" + tint + "_main_background"]: (selector, vars$$1) => [sel(selector, {
    backgroundColor: vars$$1["color_" + tint + "_main_background"]
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

const generalFns$1 = {
  general_styles: selector => [] // eslint-disable-line no-unused-vars

};

const tintFns$1 = tint => ({
  ["color_" + tint + "_title_text"]: (selector, vars$$1) => [sel(selector, {
    " .pe-card__title": {
      color: vars$$1["color_" + tint + "_title_text"]
    }
  })],
  ["color_" + tint + "_subtitle_text"]: (selector, vars$$1) => [sel(selector, {
    " .pe-card__subtitle": {
      color: vars$$1["color_" + tint + "_subtitle_text"]
    }
  })],
  ["color_" + tint + "_text"]: (selector, vars$$1) => [sel(selector, {
    " .pe-card__text": {
      color: vars$$1["color_" + tint + "_text"]
    }
  })],
  ["color_" + tint + "_actions_border"]: (selector, vars$$1) => [sel(selector, {
    " .pe-card__actions--border": {
      borderTop: "1px solid " + vars$$1["color_" + tint + "_actions_border"]
    }
  })]
});

const lightTintFns$1 = Object.assign({}, generalFns$1, tintFns$1("light"));
const darkTintFns$1 = Object.assign({}, generalFns$1, tintFns$1("dark"));
var contentColor = createColor({
  varFns: {
    lightTintFns: lightTintFns$1,
    darkTintFns: darkTintFns$1
  }
});

const alignSide = () => () => ({});

const alignLeft = alignSide(false);
const alignRight = alignSide(true);

const tight_title_padding_bottom_subtitle_line_height_padding_bottom = (selector, vars$$1) => sel(selector, {
  " .pe-card__primary": {
    ".pe-card__primary--tight": {
      " .pe-card__title": {
        paddingBottom: vars$$1.tight_title_padding_bottom - vars$$1.subtitle_line_height_padding_bottom + "px"
      }
    }
  }
});

const title_padding_v_title_padding_h_subtitle_line_height_padding_bottom = (selector, vars$$1) => sel(selector, {
  " .pe-card__title": {
    padding: [vars$$1.title_padding_v, vars$$1.title_padding_h, vars$$1.title_padding_v - vars$$1.subtitle_line_height_padding_bottom, vars$$1.title_padding_h].map(v => v + "px").join(" ")
  }
});

const text_padding_v_text_line_height_padding_top = (selector, vars$$1) => sel(selector, {
  " .pe-card__text": {
    paddingTop: vars$$1.text_padding_v - vars$$1.text_line_height_padding_top + "px"
  }
});

const text_padding_bottom_text_line_height_padding_bottom = (selector, vars$$1) => sel(selector, {
  " .pe-card__text": {
    "&:last-child": {
      paddingBottom: vars$$1.text_padding_bottom - vars$$1.text_line_height_padding_bottom + "px"
    }
  }
});

const tight_text_padding_bottom_text_line_height_padding_bottom = (selector, vars$$1) => sel(selector, {
  " .pe-card__text": {
    paddingBottom: vars$$1.tight_text_padding_bottom - vars$$1.text_line_height_padding_bottom + "px",
    ".pe-card__text--tight, &.pe-card__text--tight:last-child": {
      paddingBottom: vars$$1.tight_text_padding_bottom - vars$$1.text_line_height_padding_bottom + "px"
    }
  }
});

const varFns = {
  general_styles: (selector, vars$$1) => [sel(selector, [alignLeft(vars$$1), {
    display: "block",
    position: "relative",
    "&, a:link, a:visited": {
      textDecoration: "none"
    },
    // Content
    " .pe-card__content": {
      position: "relative",
      borderRadius: "inherit",
      overflow: "hidden",
      width: "inherit",
      height: "inherit"
    },
    // Media
    " .pe-card__media": {
      position: "relative",
      overflow: "hidden",
      borderTopLeftRadius: "inherit",
      borderTopRightRadius: "inherit",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      ".pe-card__media--landscape": {
        paddingBottom: 100 / 16 * 9 + "%"
      },
      ".pe-card__media--square": {
        paddingBottom: "100%"
      },
      ".pe-card__media--crop-x": {
        width: "100%",
        height: "auto",
        display: "block",
        ".pe-card__media--origin-start": {
          backgroundPositionY: "top"
        },
        ".pe-card__media--origin-end": {
          backgroundPositionY: "bottom"
        }
      },
      ".pe-card__media--crop-y": {
        height: "100%",
        width: "auto",
        display: "block",
        ".pe-card__media--origin-start": {
          backgroundPositionX: "left"
        },
        ".pe-card__media--origin-end": {
          backgroundPositionX: "right"
        }
      },
      " img, iframe": [mixin.fit(), {
        width: "100%",
        height: "100%",
        maxWidth: "none"
      }],
      " img": {
        opacity: 0
        /* allows right-click on image */

      },
      " .pe-card__header + .pe-card__media": {
        borderTopLeftRadius: 0,
        borderTopRightRadius: 0
      }
    },
    " .pe-card__primary-media": {
      margin: "16px"
    },
    // Overlay
    " .pe-card__overlay": mixin.fit(),
    // Dimmer
    " .pe-card__media__dimmer": [mixin.fit(), {
      zIndex: 1,
      pointerEvents: "all"
    }],
    " .pe-card__overlay__content": {
      position: "absolute",
      bottom: 0,
      top: "auto",
      right: 0,
      left: 0,
      zIndex: 2
    },
    // Header
    " .pe-card__header": {
      " .pe-list-tile__title": {
        fontSize: "14px",
        fontWeight: vars.font_weight_normal,
        lineHeight: "20px",
        marginTop: "2px"
      },
      " .pe-list-tile__subtitle": {
        marginTop: "-1px"
      }
    },
    // Primary 
    " .pe-card__primary": [flex.layoutHorizontal, {
      position: "relative",
      "& + .pe-card__text": {
        marginTop: "-16px"
      }
    }],
    // Title
    " .pe-card__title": [flex.flex(), {
      fontSize: "24px",
      lineHeight: "29px"
    }],
    // Subtitle
    " .pe-card__subtitle": {
      fontSize: "14px",
      lineHeight: "24px"
    },
    // Actions
    " .pe-card__actions": {
      ".pe-card__actions--tight": {
        minHeight: 0,
        paddingTop: 0,
        paddingBottom: 0,
        ".pe-card__actions--vertical": {
          paddingLeft: 0,
          paddingRight: 0
        }
      },
      ".pe-card__actions--horizontal": {
        minHeight: 36 + 2 * 8 + "px",
        height: 36 + 2 * 8 + "px" // make align-items work on IE 11: https://github.com/philipwalton/flexbugs/issues/231

      },
      ".pe-card__actions--horizontal:not(.pe-card__actions--justified)": [flex.layoutHorizontal, flex.layoutCenter, {
        " .pe-button": {
          minWidth: 0
        }
      }],
      ".pe-card__actions--justified": [flex.layoutJustified],
      ".pe-card__actions--vertical": [flex.layoutVertical, {
        // nested
        " .pe-card__actions": [{
          minHeight: 0
        }],
        " .pe-button": {
          height: "36px",
          padding: 0
        },
        " .pe-list": {
          padding: 0
        }
      }]
    },
    " .pe-card__primary.pe-card__primary--media + .pe-card__actions": {
      marginTop: "-16px"
    },
    // Text
    " .pe-card__text": {
      fontSize: "14px",
      lineHeight: "24px",
      " .pe-card__actions + &": {
        marginTop: "8px"
      }
    },
    " .pe-card__text, .pe-card__primary": {
      "& + .pe-card__actions:not(:last-child)": {
        // Lift up so that full button area is usable
        position: "relative",
        zIndex: 1
      }
    }
  }, {
    // RTL
    "*[dir=rtl], .pe-rtl ": {
      [selector]: alignRight(vars$$1)
    }
  }])],
  border_radius: (selector, vars$$1) => [sel(selector, {
    borderRadius: vars$$1.border_radius + "px",
    " .pe-card__content .pe-card__media": {
      borderTopLeftRadius: 0,
      borderTopRightRadius: 0,
      borderBottomLeftRadius: 0,
      borderBottomRightRadius: 0
    },
    " .pe-card__content .pe-card__media:not(.pe-card__media--square):not(.pe-card__media--landscape)": {
      ":first-child": {
        borderTopLeftRadius: vars$$1.border_radius + "px",
        borderTopRightRadius: vars$$1.border_radius + "px"
      },
      ":last-child": {
        borderBottomLeftRadius: vars$$1.border_radius + "px",
        borderBottomRightRadius: vars$$1.border_radius + "px"
      }
    }
  })],
  image_size_small: (selector, vars$$1) => [sel(selector, {
    " .pe-card__primary-media": {
      " .pe-card__media--small": {
        width: vars$$1.image_size_small + "px",
        height: vars$$1.image_size_small + "px"
      }
    }
  })],
  image_size_regular: (selector, vars$$1) => [sel(selector, {
    " .pe-card__primary-media": {
      " .pe-card__media--regular": {
        width: vars$$1.image_size_regular + "px"
      }
    }
  })],
  image_size_medium: (selector, vars$$1) => [sel(selector, {
    " .pe-card__primary-media": {
      " .pe-card__media--medium": {
        width: vars$$1.image_size_medium + "px"
      }
    }
  })],
  image_size_large: (selector, vars$$1) => [sel(selector, {
    " .pe-card__primary-media": {
      " .pe-card__media--large": {
        width: vars$$1.image_size_large + "px"
      }
    }
  })],
  one_line_height_with_icon: (selector, vars$$1) => [sel(selector, {
    " .pe-card__header": {
      height: vars$$1.one_line_height_with_icon + "px"
    }
  })],
  tight_title_padding_bottom: (selector, vars$$1) => [sel(selector, {}), tight_title_padding_bottom_subtitle_line_height_padding_bottom(selector, vars$$1)],
  subtitle_line_height_padding_bottom: (selector, vars$$1) => [sel(selector, {}), tight_title_padding_bottom_subtitle_line_height_padding_bottom(selector, vars$$1), title_padding_v_title_padding_h_subtitle_line_height_padding_bottom(selector, vars$$1)],
  title_padding_v: (selector, vars$$1) => [sel(selector, {}), title_padding_v_title_padding_h_subtitle_line_height_padding_bottom(selector, vars$$1)],
  title_padding_h: (selector, vars$$1) => [sel(selector, {}), title_padding_v_title_padding_h_subtitle_line_height_padding_bottom(selector, vars$$1)],
  actions_button_margin_h: (selector, vars$$1) => [sel(selector, {
    " .pe-card__actions.pe-card__actions--horizontal": {
      margin: `0 -${vars$$1.actions_button_margin_h}px`,
      " .pe-button": {
        margin: `0 ${vars$$1.actions_button_margin_h}px`
      }
    }
  })],
  actions_padding_v: (selector, vars$$1) => [sel(selector, {
    " .pe-card__actions": {
      paddingTop: vars$$1.actions_padding_v + "px",
      paddingBottom: vars$$1.actions_padding_v + "px"
    }
  })],
  actions_padding_h: (selector, vars$$1) => [sel(selector, {
    " .pe-card__actions": {
      paddingRight: vars$$1.actions_padding_h + "px",
      paddingLeft: vars$$1.actions_padding_h + "px"
    }
  })],
  actions_button_margin_v: (selector, vars$$1) => [sel(selector, {
    " .pe-card__actions": {
      ".pe-card__actions--vertical": {
        " .pe-button": {
          marginTop: vars$$1.actions_button_margin_v + "px",
          marginBottom: vars$$1.actions_button_margin_v + "px"
        }
      }
    }
  })],
  actions_vertical_padding_v: (selector, vars$$1) => [sel(selector, {
    " .pe-card__actions": {
      ".pe-card__actions--vertical": {
        ":not(.pe-card__actions--tight)": {
          paddingTop: vars$$1.actions_vertical_padding_v + "px",
          paddingBottom: vars$$1.actions_vertical_padding_v + "px"
        },
        // nested
        " .pe-card__actions": [{
          "&:first-child": {
            marginTop: -vars$$1.actions_vertical_padding_v + "px"
          },
          "&:last-child": {
            marginBottom: -vars$$1.actions_vertical_padding_v + "px"
          }
        }]
      }
    }
  })],
  offset_small_padding_v: (selector, vars$$1) => [sel(selector, {
    " .pe-card__text, .pe-card__primary": {
      "& + .pe-card__actions:not(:last-child)": {
        marginTop: -(vars$$1.offset_small_padding_v + 3) + "px"
      }
    }
  })],
  text_padding_h: (selector, vars$$1) => [sel(selector, {
    " .pe-card__text": {
      paddingRight: vars$$1.text_padding_h + "px",
      paddingLeft: vars$$1.text_padding_h + "px"
    }
  })],
  text_padding_v: (selector, vars$$1) => [sel(selector, {}), text_padding_v_text_line_height_padding_top(selector, vars$$1)],
  text_line_height_padding_top: (selector, vars$$1) => [sel(selector, {}), text_padding_v_text_line_height_padding_top(selector, vars$$1)],
  text_padding_bottom: (selector, vars$$1) => [sel(selector, {}), text_padding_bottom_text_line_height_padding_bottom(selector, vars$$1)],
  tight_text_padding_bottom: (selector, vars$$1) => [sel(selector, {}), tight_text_padding_bottom_text_line_height_padding_bottom(selector, vars$$1)],
  text_line_height_padding_bottom: (selector, vars$$1) => [sel(selector, {}), text_padding_bottom_text_line_height_padding_bottom(selector, vars$$1), tight_text_padding_bottom_text_line_height_padding_bottom(selector, vars$$1)]
};
var layout = createLayout({
  varFns
});

const generalFns$2 = {
  general_styles: selector => [] // eslint-disable-line no-unused-vars

};

const tintFns$2 = tint => ({
  ["color_" + tint + "_overlay_background"]: (selector, vars$$1) => [sel(selector, {
    " .pe-card__overlay__content": {
      backgroundColor: vars$$1["color_" + tint + "_overlay_background"]
    }
  })]
});

const lightTintFns$2 = Object.assign({}, generalFns$2, tintFns$2("light"));
const darkTintFns$2 = Object.assign({}, generalFns$2, tintFns$2("dark"));
var overlayColor = createColor({
  varFns: {
    lightTintFns: lightTintFns$2,
    darkTintFns: darkTintFns$2
  }
});

const padding_v = 24;
const padding_actions_v = 8;
const actions_button_margin_v = 2;
var vars$1 = {
  general_styles: true,
  actions_button_margin_h: vars.grid_unit,
  actions_button_margin_v,
  actions_padding_h: 8,
  actions_padding_v: 0,
  actions_vertical_padding_v: padding_actions_v - actions_button_margin_v,
  border_radius: vars.unit_block_border_radius,
  icon_element_width: 72 - 4,
  image_size_large: 3 * 80,
  image_size_medium: 2 * 80,
  image_size_regular: 1.4 * 80,
  image_size_small: 1 * 80,
  offset_small_padding_v: padding_v - 16,
  one_line_height_with_icon: 72,
  one_line_padding_v: 8,
  padding_h: 16,
  subtitle_line_height_padding_bottom: 7,
  text_line_height_padding_bottom: 7,
  text_line_height_padding_top: 6,
  text_padding_bottom: 24,
  text_padding_h: 16,
  text_padding_v: 16,
  tight_text_padding_bottom: 16,
  tight_title_padding_bottom: 16,
  title_padding_h: 16,
  title_padding_v: 24,
  color_light_main_background: rgba(vars.color_light_background),
  color_light_title_text: rgba(vars.color_light_foreground, vars.blend_light_text_primary),
  color_light_subtitle_text: rgba(vars.color_light_foreground, vars.blend_light_text_secondary),
  color_light_text: rgba(vars.color_light_foreground, vars.blend_light_text_regular),
  color_light_actions_border: rgba(vars.color_light_foreground, vars.blend_light_border_light),
  color_light_overlay_background: rgba(vars.color_light_background, vars.blend_light_overlay_background),
  color_dark_main_background: rgba(vars.color_dark_background),
  color_dark_title_text: rgba(vars.color_dark_foreground, vars.blend_dark_text_primary),
  color_dark_subtitle_text: rgba(vars.color_dark_foreground, vars.blend_dark_text_secondary),
  color_dark_text: rgba(vars.color_dark_foreground, vars.blend_dark_text_regular),
  color_dark_actions_border: rgba(vars.color_dark_foreground, vars.blend_dark_border_light),
  color_dark_overlay_background: rgba(vars.color_dark_background, vars.blend_dark_overlay_background)
};

const selector = `.${classes.component}`;
const contentSelector = `.${classes.content}`;
const overlaySheetSelector = `.${classes.overlaySheet}`;
const overlayContentSelector = `.${classes.overlayContent}`;
const baseFns = [layout, color];
const overlayColorFns = [overlayColor];
const contentColorFns = [contentColor];

const addStyle = (customSelector, customVars, {
  mediaQuery
} = {}) => {
  customSelector && styler.addStyle({
    selectors: [customSelector, selector],
    fns: baseFns,
    vars: vars$1,
    customVars,
    mediaQuery
  });
  customSelector && styler.addStyle({
    selectors: [customSelector, " " + overlaySheetSelector],
    fns: overlayColorFns,
    vars: vars$1,
    customVars,
    mediaQuery
  });
  customSelector && styler.addStyle({
    selectors: [customSelector, " " + contentSelector],
    fns: contentColorFns,
    vars: vars$1,
    customVars,
    mediaQuery
  });
  customSelector && styler.addStyle({
    selectors: [customSelector, " " + overlayContentSelector],
    fns: contentColorFns,
    vars: vars$1,
    customVars,
    mediaQuery
  });
};

const getStyle = (customSelector = "", customVars, {
  mediaQuery
} = {}) => styler.getStyle({
  selectors: [customSelector, selector],
  fns: baseFns,
  vars: vars$1,
  customVars,
  mediaQuery
}).concat(styler.getStyle({
  selectors: [customSelector, customSelector ? " " : "", overlaySheetSelector],
  fns: overlayColorFns,
  vars: vars$1,
  customVars,
  mediaQuery
})).concat(styler.getStyle({
  selectors: [customSelector, customSelector ? " " : "", contentSelector],
  fns: contentColorFns,
  vars: vars$1,
  customVars,
  mediaQuery
})).concat(styler.getStyle({
  selectors: [customSelector, customSelector ? " " : "", overlayContentSelector],
  fns: contentColorFns,
  vars: vars$1,
  customVars,
  mediaQuery
}));

styler.addStyle({
  selectors: [selector],
  fns: baseFns,
  vars: vars$1
});
styler.addStyle({
  selectors: [overlaySheetSelector],
  fns: overlayColorFns,
  vars: vars$1
});
styler.addStyle({
  selectors: [contentSelector],
  fns: contentColorFns,
  vars: vars$1
});
styler.addStyle({
  selectors: [overlayContentSelector],
  fns: contentColorFns,
  vars: vars$1
});

export { addStyle, color, getStyle, layout, vars$1 as vars };
