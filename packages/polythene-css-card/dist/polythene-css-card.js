(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('polythene-core-css'), require('polythene-core-card'), require('polythene-theme')) :
	typeof define === 'function' && define.amd ? define(['exports', 'polythene-core-css', 'polythene-core-card', 'polythene-theme'], factory) :
	(factory((global.polythene = {}),global['polythene-core-css'],global['polythene-core-card'],global['polythene-theme']));
}(this, (function (exports,polytheneCoreCss,polytheneCoreCard,polytheneTheme) { 'use strict';

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

var layout = (function (selector, componentVars) {
  return [_defineProperty({}, selector, {
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
      height: "inherit",
      // behave nicely on IE11:
      display: "flex",
      flexDirection: "column"
    },

    " .pe-card__media": {
      position: "relative",
      overflow: "hidden",
      borderTopLeftRadius: "inherit",
      borderTopRightRadius: "inherit",
      zIndex: 1, // makes rounded corners on absolute images work (without this, no rounded image)

      ".pe-card__media--landscape": {
        paddingBottom: 100 / 16 * 9 + "%"
      },
      ".pe-card__media--square": {
        paddingBottom: "100%"
      },
      "&:last-child": {
        "&, img": {
          borderBottomLeftRadius: componentVars.border_radius + "px",
          borderBottomRightRadius: componentVars.border_radius + "px"
        }
      },
      " img": [polytheneCoreCss.mixin.fit(), {
        display: "none",
        width: "100%",
        maxWidth: "none",

        ".pe-card__media--crop-x": {
          width: "100%",
          height: "auto",
          display: "block"
        },
        ".pe-card__media--crop-y": {
          height: "100%",
          width: "auto",
          display: "block"
        }
      }]
    },

    " .pe-card__header + .pe-card__media": {
      borderTopLeftRadius: 0,
      borderTopRightRadius: 0
    },

    " .pe-card__primary-media": {
      margin: "16px 16px 0 16px",
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
        width: componentVars.image_size_large + "px",
        marginBottom: "16px"
      },
      " .pe-card__media": {
        "&, img": {
          borderRadius: 0
        }
      },

      " .pe-shadow + &": {
        // first child
        "&, img": {
          borderTopLeftRadius: componentVars.border_radius + "px",
          borderTopRightRadius: componentVars.border_radius + "px"
        }
      }
    },

    " .pe-card__overlay": polytheneCoreCss.mixin.fit(),

    " .pe-card__media__dimmer": [polytheneCoreCss.mixin.fit(), {
      zIndex: 1
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
        fontWeight: polytheneTheme.vars.font_weight_normal,
        lineHeight: "20px",
        marginTop: "2px"
      },
      " .pe-list-tile__subtitle": {
        marginTop: "-1px"
      }
    },

    " .pe-card__primary": [polytheneCoreCss.flex.layoutHorizontal, {
      position: "relative",

      ".pe-card__primary--media:not(:last-child)": {
        paddingBottom: "16px"
      },
      ".pe-card__primary--media + .pe-card__actions": {
        marginTop: "-16px"
      },
      "& + .pe-card__text": {
        marginTop: "-16px"
      },
      ".pe-card__primary--tight": {
        " .pe-card__title": {
          paddingBottom: componentVars.tight_title_padding_bottom - componentVars.subtitle_line_height_padding_bottom + "px"
        }
      }
    }],
    " .pe-card__title": [polytheneCoreCss.flex.flex(), {
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
      minHeight: 36 + 2 * 8 + "px",
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
      ".pe-card__actions--horizontal:not(.pe-card__actions--justified)": [polytheneCoreCss.flex.layoutHorizontal, polytheneCoreCss.flex.layoutCenter, {
        " .pe-button": {
          minWidth: 0
        }
      }],

      ".pe-card__actions--justified": [polytheneCoreCss.flex.layoutJustified],

      ".pe-card__actions--vertical": [polytheneCoreCss.flex.layoutVertical, {
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
  })];
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
    " .pe-card__actions--borders": {
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
  polytheneCoreCss.styler.generateStyles([customSelector, selector], _extends({}, polytheneCoreCard.vars, customVars), [layout, color]), polytheneCoreCss.styler.generateStyles([customSelector, " " + overlaySheetSelector], _extends({}, polytheneCoreCard.vars, customVars), [overlayColor]), polytheneCoreCss.styler.generateStyles([customSelector, " " + contentSelector], _extends({}, polytheneCoreCard.vars, customVars), [contentColor]), polytheneCoreCss.styler.generateStyles([customSelector, " " + overlayContentSelector], _extends({}, polytheneCoreCard.vars, customVars), [contentColor]);
};

var getStyle = function getStyle(customSelector, customVars) {
  return customSelector ? polytheneCoreCss.styler.createStyleSheets([customSelector, selector], _extends({}, polytheneCoreCard.vars, customVars), [layout, color]).concat(polytheneCoreCss.styler.createStyleSheets([customSelector, " " + overlaySheetSelector], _extends({}, polytheneCoreCard.vars, customVars), [overlayColor])).concat(polytheneCoreCss.styler.createStyleSheets([customSelector, " " + contentSelector], _extends({}, polytheneCoreCard.vars, customVars), [contentColor])).concat(polytheneCoreCss.styler.createStyleSheets([customSelector, " " + overlayContentSelector], _extends({}, polytheneCoreCard.vars, customVars), [contentColor])) : polytheneCoreCss.styler.createStyleSheets([selector], polytheneCoreCard.vars, [layout, color]).concat(polytheneCoreCss.styler.createStyleSheets([overlaySheetSelector], polytheneCoreCard.vars, [overlayColor])).concat(polytheneCoreCss.styler.createStyleSheets([contentSelector], polytheneCoreCard.vars, [contentColor])).concat(polytheneCoreCss.styler.createStyleSheets([overlayContentSelector], polytheneCoreCard.vars, [contentColor]));
};

polytheneCoreCss.styler.generateStyles([selector], polytheneCoreCard.vars, [layout, color]);
polytheneCoreCss.styler.generateStyles([overlaySheetSelector], polytheneCoreCard.vars, [overlayColor]);
polytheneCoreCss.styler.generateStyles([contentSelector], polytheneCoreCard.vars, [contentColor]);
polytheneCoreCss.styler.generateStyles([overlayContentSelector], polytheneCoreCard.vars, [contentColor]);

exports.addStyle = addStyle;
exports.getStyle = getStyle;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=polythene-css-card.js.map
