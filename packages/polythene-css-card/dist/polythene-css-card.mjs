import { mixin, flex, styler } from 'polythene-core-css';
import { vars } from 'polythene-theme';
import { vars as vars$1 } from 'polythene-core-card';

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

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var alignSide = function alignSide(isRTL) {
  return function () {
    return {
      " .pe-card__media.pe-card__media--crop-y": {
        ".pe-card__media--origin-start": {
          backgroundPositionX: isRTL ? "right" : "left"
        },
        ".pe-card__media--origin-end": {
          backgroundPositionX: isRTL ? "left" : "right"
        }
      }
    };
  };
};

var alignLeft = alignSide(false);

var alignRight = alignSide(true);

var layout = (function (selector, componentVars) {
  return [_defineProperty({}, selector, [alignLeft(componentVars), {
    display: "block",
    position: "relative",
    borderRadius: componentVars.border_radius + "px",

    "&, a:link, a:visited": {
      textDecoration: "none"
    },

    " .pe-card__content": {
      position: "relative",
      borderRadius: "inherit",
      overflow: "hidden",
      width: "inherit",
      height: "inherit"
    },

    " .pe-card__media": {
      position: "relative",
      overflow: "hidden",
      borderTopLeftRadius: "inherit",
      borderTopRightRadius: "inherit",
      zIndex: 1, // makes rounded corners on absolute images work (without this, no rounded image)
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",

      ".pe-card__media--landscape": {
        paddingBottom: 100 / 16 * 9 + "%"
      },
      ".pe-card__media--square": {
        paddingBottom: "100%"
      },
      "&:last-child": {
        borderBottomLeftRadius: componentVars.border_radius + "px",
        borderBottomRightRadius: componentVars.border_radius + "px"
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
          backgroundPositionX: "left" // RTL
        },
        ".pe-card__media--origin-end": {
          backgroundPositionX: "right" // RTL
        }
      },
      " img, iframe": [mixin.fit(), {
        width: "100%",
        height: "100%",
        maxWidth: "none"
      }],
      " img": {
        opacity: 0 /* allows right-click on image */
      }
    },

    " .pe-card__header + .pe-card__media": {
      borderTopLeftRadius: 0,
      borderTopRightRadius: 0
    },

    " .pe-card__primary-media": {
      margin: "16px",
      overflow: "hidden",

      " .pe-card__media--small": {
        width: componentVars.image_size_small + "px"
      },
      " .pe-card__media--regular": {
        width: componentVars.image_size_regular + "px"
      },
      " .pe-card__media--medium": {
        width: componentVars.image_size_medium + "px"
      },
      " .pe-card__media--large": {
        width: componentVars.image_size_large + "px"
      },
      " .pe-card__media": {
        borderRadius: 0
      },

      " .pe-shadow + &": {
        // first child
        borderTopLeftRadius: componentVars.border_radius + "px",
        borderTopRightRadius: componentVars.border_radius + "px"
      }
    },

    " .pe-card__overlay": mixin.fit(),

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

    " .pe-card__header": {
      height: componentVars.one_line_height_with_icon + "px",

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

    " .pe-card__primary": [flex.layoutHorizontal, {
      position: "relative",

      "& + .pe-card__text": {
        marginTop: "-16px"
      },
      ".pe-card__primary--tight": {
        " .pe-card__title": {
          paddingBottom: componentVars.tight_title_padding_bottom - componentVars.subtitle_line_height_padding_bottom + "px"
        }
      }
    }],
    " .pe-card__title": [flex.flex(), {
      padding: [componentVars.title_padding_v, componentVars.title_padding_h, componentVars.title_padding_v - componentVars.subtitle_line_height_padding_bottom, componentVars.title_padding_h].map(function (v) {
        return v + "px";
      }).join(" "),
      fontSize: "24px",
      lineHeight: "29px"
    }],
    " .pe-card__subtitle": {
      fontSize: "14px",
      lineHeight: "24px"
    },

    " .pe-card__actions": [{
      padding: componentVars.actions_padding_v + "px" + " " + componentVars.padding_actions_h + "px",

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
        height: 36 + 2 * 8 + "px" /* make align-items work on IE 11: https://github.com/philipwalton/flexbugs/issues/231 */
      },
      ".pe-card__actions--horizontal:not(.pe-card__actions--justified)": [flex.layoutHorizontal, flex.layoutCenter, {
        " .pe-button": {
          minWidth: 0
        }
      }],

      ".pe-card__actions--justified": [flex.layoutJustified],

      ".pe-card__actions--vertical": [flex.layoutVertical, {
        ":not(.pe-card__actions--tight)": {
          // vertical flex layout
          paddingTop: componentVars.actions_vertical_padding_v + "px",
          paddingBottom: componentVars.actions_vertical_padding_v + "px"
        },

        // nested
        " .pe-card__actions": [{
          marginLeft: -componentVars.padding_actions_h + "px",
          marginRight: -componentVars.padding_actions_h + "px",
          minHeight: 0,

          "&:first-child": {
            marginTop: -componentVars.actions_vertical_padding_v + "px"
          },
          "&:last-child": {
            marginBottom: -componentVars.actions_vertical_padding_v + "px"
          }
        }],

        " .pe-button": {
          height: "36px",
          padding: 0,
          marginTop: componentVars.actions_button_margin_v + "px",
          marginBottom: componentVars.actions_button_margin_v + "px"
        },
        " .pe-list": {
          padding: 0
        }
      }]
    }],

    " .pe-card__primary.pe-card__primary--media + .pe-card__actions": {
      marginTop: "-16px"
    },

    " .pe-card__text": {
      paddingTop: componentVars.text_padding_v - componentVars.text_line_height_padding_top + "px",
      paddingRight: componentVars.text_padding_h + "px",
      paddingLeft: componentVars.text_padding_h + "px",
      paddingBottom: componentVars.tight_text_padding_bottom - componentVars.text_line_height_padding_bottom + "px",
      fontSize: "14px",
      lineHeight: "24px",

      "&:last-child": {
        paddingBottom: componentVars.text_padding_bottom - componentVars.text_line_height_padding_bottom + "px"
      },
      ".pe-card__text--tight, &.pe-card__text--tight:last-child": {
        paddingBottom: componentVars.tight_text_padding_bottom - componentVars.text_line_height_padding_bottom + "px"
      },
      " .pe-card__actions + &": {
        marginTop: "8px"
      }
    },

    " .pe-card__text, .pe-card__primary": {
      "& + .pe-card__actions:not(:last-child)": {
        marginTop: -(componentVars.offset_small_padding_v + 3) + "px",
        // Lift up so that full button area is usable
        position: "relative",
        zIndex: 1
      }
    }
  }]), {
    // RTL
    "*[dir=rtl], .pe-rtl ": _defineProperty({}, selector, alignRight(componentVars))
  }];
});

function _defineProperty$1(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var style = function style(scopes, selector, componentVars, tint) {
  return [_defineProperty$1({}, scopes.map(function (s) {
    return s + selector;
  }).join(","), {
    backgroundColor: componentVars["color_" + tint + "_main_background"]
  })];
};

var color = (function (selector, componentVars) {
  return [style([".pe-dark-tone", ".pe-dark-tone "], selector, componentVars, "dark"), // has/inside dark tone
  style(["", ".pe-light-tone", ".pe-light-tone "], selector, componentVars, "light")];
});

function _defineProperty$2(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var style$1 = function style(scopes, selector, componentVars, tint) {
  return [_defineProperty$2({}, scopes.map(function (s) {
    return s + selector;
  }).join(","), {
    " .pe-card__title": {
      color: componentVars["color_" + tint + "_title_text"]
    },
    " .pe-card__subtitle": {
      color: componentVars["color_" + tint + "_subtitle_text"]
    },
    " .pe-card__text": {
      color: componentVars["color_" + tint + "_text"]
    },
    " .pe-card__actions--border": {
      borderTop: "1px solid " + componentVars["color_" + tint + "_actions_border"]
    }
  })];
};

var contentColor = (function (selector, componentVars) {
  return [style$1([".pe-dark-tone", ".pe-dark-tone "], selector, componentVars, "dark"), // has/inside dark tone
  style$1(["", ".pe-light-tone", ".pe-light-tone "], selector, componentVars, "light")];
});

function _defineProperty$3(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var style$2 = function style(scopes, selector, componentVars, tint) {
  return [_defineProperty$3({}, scopes.map(function (s) {
    return s + selector;
  }).join(","), {
    " .pe-card__overlay__content": {
      backgroundColor: componentVars["color_" + tint + "_overlay_background"]
    }
  })];
};

var overlayColor = (function (selector, componentVars) {
  return [style$2([".pe-dark-tone", ".pe-dark-tone "], selector, componentVars, "dark"), // has/inside dark tone
  style$2(["", ".pe-light-tone", ".pe-light-tone "], selector, componentVars, "light")];
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var selector = "." + classes.component;
var contentSelector = "." + classes.content;
var overlaySheetSelector = "." + classes.overlaySheet;
var overlayContentSelector = "." + classes.overlayContent;

var addStyle = function addStyle(customSelector, customVars) {
  styler.generateStyles([customSelector, selector], _extends({}, vars$1, customVars), [layout, color]), styler.generateStyles([customSelector, " " + overlaySheetSelector], _extends({}, vars$1, customVars), [overlayColor]), styler.generateStyles([customSelector, " " + contentSelector], _extends({}, vars$1, customVars), [contentColor]), styler.generateStyles([customSelector, " " + overlayContentSelector], _extends({}, vars$1, customVars), [contentColor]);
};

var getStyle = function getStyle(customSelector, customVars) {
  return customSelector ? styler.createStyleSheets([customSelector, selector], _extends({}, vars$1, customVars), [layout, color]).concat(styler.createStyleSheets([customSelector, " " + overlaySheetSelector], _extends({}, vars$1, customVars), [overlayColor])).concat(styler.createStyleSheets([customSelector, " " + contentSelector], _extends({}, vars$1, customVars), [contentColor])).concat(styler.createStyleSheets([customSelector, " " + overlayContentSelector], _extends({}, vars$1, customVars), [contentColor])) : styler.createStyleSheets([selector], vars$1, [layout, color]).concat(styler.createStyleSheets([overlaySheetSelector], vars$1, [overlayColor])).concat(styler.createStyleSheets([contentSelector], vars$1, [contentColor])).concat(styler.createStyleSheets([overlayContentSelector], vars$1, [contentColor]));
};

styler.generateStyles([selector], vars$1, [layout, color]);
styler.generateStyles([overlaySheetSelector], vars$1, [overlayColor]);
styler.generateStyles([contentSelector], vars$1, [contentColor]);
styler.generateStyles([overlayContentSelector], vars$1, [contentColor]);

export { addStyle, getStyle };
