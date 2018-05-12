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

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var alignSide = function alignSide() {
  return function () {
    return {};
  };
};

var alignLeft = alignSide(false);

var alignRight = alignSide(true);

var sel = function sel(selector, o) {
  return _defineProperty({}, selector, o);
};

var tight_title_padding_bottom_subtitle_line_height_padding_bottom = function tight_title_padding_bottom_subtitle_line_height_padding_bottom(selector, vars$$1) {
  return sel(selector, {
    " .pe-card__primary": {
      ".pe-card__primary--tight": {
        " .pe-card__title": {
          paddingBottom: vars$$1.tight_title_padding_bottom - vars$$1.subtitle_line_height_padding_bottom + "px"
        }
      }
    }
  });
};

var title_padding_v_title_padding_h_subtitle_line_height_padding_bottom = function title_padding_v_title_padding_h_subtitle_line_height_padding_bottom(selector, vars$$1) {
  return sel(selector, {
    " .pe-card__title": {
      padding: [vars$$1.title_padding_v, vars$$1.title_padding_h, vars$$1.title_padding_v - vars$$1.subtitle_line_height_padding_bottom, vars$$1.title_padding_h].map(function (v) {
        return v + "px";
      }).join(" ")
    }
  });
};

var text_padding_v_text_line_height_padding_top = function text_padding_v_text_line_height_padding_top(selector, vars$$1) {
  return sel(selector, {
    " .pe-card__text": {
      paddingTop: vars$$1.text_padding_v - vars$$1.text_line_height_padding_top + "px"
    }
  });
};

var text_padding_bottom_text_line_height_padding_bottom = function text_padding_bottom_text_line_height_padding_bottom(selector, vars$$1) {
  return sel(selector, {
    " .pe-card__text": {
      "&:last-child": {
        paddingBottom: vars$$1.text_padding_bottom - vars$$1.text_line_height_padding_bottom + "px"
      }
    }
  });
};

var tight_text_padding_bottom_text_line_height_padding_bottom = function tight_text_padding_bottom_text_line_height_padding_bottom(selector, vars$$1) {
  return sel(selector, {
    " .pe-card__text": {
      paddingBottom: vars$$1.tight_text_padding_bottom - vars$$1.text_line_height_padding_bottom + "px",

      ".pe-card__text--tight, &.pe-card__text--tight:last-child": {
        paddingBottom: vars$$1.tight_text_padding_bottom - vars$$1.text_line_height_padding_bottom + "px"
      }
    }
  });
};

var varFns = {
  general_styles: function general_styles(selector, vars$$1) {
    return [sel(selector, [alignLeft(vars$$1), {
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
          opacity: 0 /* allows right-click on image */
        },

        " .pe-card__header + .pe-card__media": {
          borderTopLeftRadius: 0,
          borderTopRightRadius: 0
        }
      },

      " .pe-card__primary-media": {
        margin: "16px",
        overflow: "hidden",

        " .pe-card__media": {
          borderRadius: 0
        }
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
      "*[dir=rtl], .pe-rtl ": _defineProperty({}, selector, alignRight(vars$$1))
    }])];
  },
  border_radius: function border_radius(selector, vars$$1) {
    return [sel(selector, {
      borderRadius: vars$$1.border_radius + "px",

      "&:last-child": {
        borderBottomLeftRadius: vars$$1.border_radius + "px",
        borderBottomRightRadius: vars$$1.border_radius + "px"
      },

      " .pe-card__primary-media": {
        " .pe-shadow + &": {
          // first child
          borderTopLeftRadius: vars$$1.border_radius + "px",
          borderTopRightRadius: vars$$1.border_radius + "px"
        }
      }
    })];
  },
  image_size_small: function image_size_small(selector, vars$$1) {
    return [sel(selector, {
      " .pe-card__primary-media": {
        " .pe-card__media--small": {
          width: vars$$1.image_size_small + "px"
        }
      }
    })];
  },
  image_size_regular: function image_size_regular(selector, vars$$1) {
    return [sel(selector, {
      " .pe-card__primary-media": {
        " .pe-card__media--regular": {
          width: vars$$1.image_size_regular + "px"
        }
      }
    })];
  },
  image_size_medium: function image_size_medium(selector, vars$$1) {
    return [sel(selector, {
      " .pe-card__primary-media": {
        " .pe-card__media--medium": {
          width: vars$$1.image_size_medium + "px"
        }
      }
    })];
  },
  image_size_large: function image_size_large(selector, vars$$1) {
    return [sel(selector, {
      " .pe-card__primary-media": {
        " .pe-card__media--large": {
          width: vars$$1.image_size_large + "px"
        }
      }
    })];
  },
  one_line_height_with_icon: function one_line_height_with_icon(selector, vars$$1) {
    return [sel(selector, {
      " .pe-card__header": {
        height: vars$$1.one_line_height_with_icon + "px"
      }
    })];
  },
  tight_title_padding_bottom: function tight_title_padding_bottom(selector, vars$$1) {
    return [sel(selector, {}), tight_title_padding_bottom_subtitle_line_height_padding_bottom(selector, vars$$1)];
  },
  subtitle_line_height_padding_bottom: function subtitle_line_height_padding_bottom(selector, vars$$1) {
    return [sel(selector, {}), tight_title_padding_bottom_subtitle_line_height_padding_bottom(selector, vars$$1), title_padding_v_title_padding_h_subtitle_line_height_padding_bottom(selector, vars$$1)];
  },
  title_padding_v: function title_padding_v(selector, vars$$1) {
    return [sel(selector, {}), title_padding_v_title_padding_h_subtitle_line_height_padding_bottom(selector, vars$$1)];
  },
  title_padding_h: function title_padding_h(selector, vars$$1) {
    return [sel(selector, {}), title_padding_v_title_padding_h_subtitle_line_height_padding_bottom(selector, vars$$1)];
  },
  actions_button_margin_h: function actions_button_margin_h(selector, vars$$1) {
    return [sel(selector, {
      " .pe-card__actions.pe-card__actions--horizontal": {
        margin: "0 -" + vars$$1.actions_button_margin_h + "px",

        " .pe-button": {
          margin: "0 " + vars$$1.actions_button_margin_h + "px"
        }
      }
    })];
  },
  actions_padding_v: function actions_padding_v(selector, vars$$1) {
    return [sel(selector, {
      " .pe-card__actions": {
        paddingTop: vars$$1.actions_padding_v + "px",
        paddingBottom: vars$$1.actions_padding_v + "px"
      }
    })];
  },
  actions_padding_h: function actions_padding_h(selector, vars$$1) {
    return [sel(selector, {
      " .pe-card__actions": {
        paddingRight: vars$$1.actions_padding_h + "px",
        paddingLeft: vars$$1.actions_padding_h + "px"
      }
    })];
  },
  actions_button_margin_v: function actions_button_margin_v(selector, vars$$1) {
    return [sel(selector, {
      " .pe-card__actions": {
        ".pe-card__actions--vertical": {
          " .pe-button": {
            marginTop: vars$$1.actions_button_margin_v + "px",
            marginBottom: vars$$1.actions_button_margin_v + "px"
          }
        }
      }
    })];
  },
  actions_vertical_padding_v: function actions_vertical_padding_v(selector, vars$$1) {
    return [sel(selector, {
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
    })];
  },
  offset_small_padding_v: function offset_small_padding_v(selector, vars$$1) {
    return [sel(selector, {
      " .pe-card__text, .pe-card__primary": {
        "& + .pe-card__actions:not(:last-child)": {
          marginTop: -(vars$$1.offset_small_padding_v + 3) + "px"
        }
      }
    })];
  },
  text_padding_h: function text_padding_h(selector, vars$$1) {
    return [sel(selector, {
      " .pe-card__text": {
        paddingRight: vars$$1.text_padding_h + "px",
        paddingLeft: vars$$1.text_padding_h + "px"
      }
    })];
  },
  text_padding_v: function text_padding_v(selector, vars$$1) {
    return [sel(selector, {}), text_padding_v_text_line_height_padding_top(selector, vars$$1)];
  },
  text_line_height_padding_top: function text_line_height_padding_top(selector, vars$$1) {
    return [sel(selector, {}), text_padding_v_text_line_height_padding_top(selector, vars$$1)];
  },
  text_padding_bottom: function text_padding_bottom(selector, vars$$1) {
    return [sel(selector, {}), text_padding_bottom_text_line_height_padding_bottom(selector, vars$$1)];
  },
  tight_text_padding_bottom: function tight_text_padding_bottom(selector, vars$$1) {
    return [sel(selector, {}), tight_text_padding_bottom_text_line_height_padding_bottom(selector, vars$$1)];
  },
  text_line_height_padding_bottom: function text_line_height_padding_bottom(selector, vars$$1) {
    return [sel(selector, {}), text_padding_bottom_text_line_height_padding_bottom(selector, vars$$1), tight_text_padding_bottom_text_line_height_padding_bottom(selector, vars$$1)];
  }
};

var layout = (function (selector, componentVars, customVars) {
  var allVars = _extends({}, componentVars, customVars);
  var currentVars = customVars ? customVars : allVars;
  return Object.keys(currentVars).map(function (v) {
    return varFns[v] !== undefined ? varFns[v](selector, allVars) : null;
  }).filter(function (s) {
    return s;
  });
});

var _extends$1 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _defineProperty$1(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var sel$1 = function sel(selector, o) {
  return _defineProperty$1({}, selector, o);
};

var generalFns = {
  general_styles: function general_styles(selector) {
    return [];
  } // eslint-disable-line no-unused-vars
};

var tintFns = function tintFns(tint) {
  return _defineProperty$1({}, "color_" + tint + "_main_background", function (selector, vars$$1) {
    return [sel$1(selector, {
      backgroundColor: vars$$1["color_" + tint + "_main_background"]
    })];
  });
};

var lightTintFns = _extends$1({}, generalFns, tintFns("light"));
var darkTintFns = _extends$1({}, generalFns, tintFns("dark"));

var createStyle = function createStyle(selector, componentVars, customVars, tint) {
  var allVars = _extends$1({}, componentVars, customVars);
  var currentVars = customVars ? customVars : allVars;
  return Object.keys(currentVars).map(function (v) {
    var varFns = tint === "light" ? lightTintFns : darkTintFns;
    return varFns[v] !== undefined ? varFns[v](selector, allVars) : null;
  }).filter(function (s) {
    return s;
  });
};

var style = function style(scopes, selector, componentVars, customVars, tint) {
  var selectors = scopes.map(function (s) {
    return s + selector;
  }).join(",");
  return createStyle(selectors, componentVars, customVars, tint);
};

var color = (function (selector, componentVars, customVars) {
  return [style([".pe-dark-tone", ".pe-dark-tone "], selector, componentVars, customVars, "dark"), // has/inside dark tone
  style(["", ".pe-light-tone", ".pe-light-tone "], selector, componentVars, customVars, "light")];
});

var _extends$2 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _defineProperty$2(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var sel$2 = function sel(selector, o) {
  return _defineProperty$2({}, selector, o);
};

var generalFns$1 = {
  general_styles: function general_styles(selector) {
    return [];
  } // eslint-disable-line no-unused-vars
};

var tintFns$1 = function tintFns(tint) {
  var _ref2;

  return _ref2 = {}, _defineProperty$2(_ref2, "color_" + tint + "_title_text", function (selector, vars$$1) {
    return [sel$2(selector, {
      " .pe-card__title": {
        color: vars$$1["color_" + tint + "_title_text"]
      }
    })];
  }), _defineProperty$2(_ref2, "color_" + tint + "_subtitle_text", function (selector, vars$$1) {
    return [sel$2(selector, {
      " .pe-card__subtitle": {
        color: vars$$1["color_" + tint + "_subtitle_text"]
      }
    })];
  }), _defineProperty$2(_ref2, "color_" + tint + "_text", function (selector, vars$$1) {
    return [sel$2(selector, {
      " .pe-card__text": {
        color: vars$$1["color_" + tint + "_text"]
      }
    })];
  }), _defineProperty$2(_ref2, "color_" + tint + "_actions_border", function (selector, vars$$1) {
    return [sel$2(selector, {
      " .pe-card__actions--border": {
        borderTop: "1px solid " + vars$$1["color_" + tint + "_actions_border"]
      }
    })];
  }), _ref2;
};

var lightTintFns$1 = _extends$2({}, generalFns$1, tintFns$1("light"));
var darkTintFns$1 = _extends$2({}, generalFns$1, tintFns$1("dark"));

var createStyle$1 = function createStyle(selector, componentVars, customVars, tint) {
  var allVars = _extends$2({}, componentVars, customVars);
  var currentVars = customVars ? customVars : allVars;
  return Object.keys(currentVars).map(function (v) {
    var varFns = tint === "light" ? lightTintFns$1 : darkTintFns$1;
    return varFns[v] !== undefined ? varFns[v](selector, allVars) : null;
  }).filter(function (s) {
    return s;
  });
};

var style$1 = function style(scopes, selector, componentVars, customVars, tint) {
  var selectors = scopes.map(function (s) {
    return s + selector;
  }).join(",");
  return createStyle$1(selectors, componentVars, customVars, tint);
};

var contentColor = (function (selector, componentVars, customVars) {
  return [style$1([".pe-dark-tone", ".pe-dark-tone "], selector, componentVars, customVars, "dark"), // has/inside dark tone
  style$1(["", ".pe-light-tone", ".pe-light-tone "], selector, componentVars, customVars, "light")];
});

var _extends$3 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _defineProperty$3(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var sel$3 = function sel(selector, o) {
  return _defineProperty$3({}, selector, o);
};

var generalFns$2 = {
  general_styles: function general_styles(selector) {
    return [];
  } // eslint-disable-line no-unused-vars
};

var tintFns$2 = function tintFns(tint) {
  return _defineProperty$3({}, "color_" + tint + "_overlay_background", function (selector, vars$$1) {
    return [sel$3(selector, {
      " .pe-card__overlay__content": {
        backgroundColor: vars$$1["color_" + tint + "_overlay_background"]
      }
    })];
  });
};

var lightTintFns$2 = _extends$3({}, generalFns$2, tintFns$2("light"));
var darkTintFns$2 = _extends$3({}, generalFns$2, tintFns$2("dark"));

var createStyle$2 = function createStyle(selector, componentVars, customVars, tint) {
  var allVars = _extends$3({}, componentVars, customVars);
  var currentVars = customVars ? customVars : allVars;
  return Object.keys(currentVars).map(function (v) {
    var varFns = tint === "light" ? lightTintFns$2 : darkTintFns$2;
    return varFns[v] !== undefined ? varFns[v](selector, allVars) : null;
  }).filter(function (s) {
    return s;
  });
};

var style$2 = function style(scopes, selector, componentVars, customVars, tint) {
  var selectors = scopes.map(function (s) {
    return s + selector;
  }).join(",");
  return createStyle$2(selectors, componentVars, customVars, tint);
};

var overlayColor = (function (selector, componentVars, customVars) {
  return [style$2([".pe-dark-tone", ".pe-dark-tone "], selector, componentVars, customVars, "dark"), // has/inside dark tone
  style$2(["", ".pe-light-tone", ".pe-light-tone "], selector, componentVars, customVars, "light")];
});

var selector = "." + classes.component;
var contentSelector = "." + classes.content;
var overlaySheetSelector = "." + classes.overlaySheet;
var overlayContentSelector = "." + classes.overlayContent;

var addStyle = function addStyle(customSelector, customVars) {
  styler.generateCustomStyles([customSelector, selector], vars$1, customVars, [layout, color]), styler.generateCustomStyles([customSelector, " " + overlaySheetSelector], vars$1, customVars, [overlayColor]), styler.generateCustomStyles([customSelector, " " + contentSelector], vars$1, customVars, [contentColor]), styler.generateCustomStyles([customSelector, " " + overlayContentSelector], vars$1, customVars, [contentColor]);
};

var getStyle = function getStyle(customSelector, customVars) {
  return customSelector ? styler.createCustomStyleSheets([customSelector, selector], vars$1, customVars, [layout, color]).concat(styler.createCustomStyleSheets([customSelector, " " + overlaySheetSelector], vars$1, customVars, [overlayColor])).concat(styler.createCustomStyleSheets([customSelector, " " + contentSelector], vars$1, customVars, [contentColor])).concat(styler.createCustomStyleSheets([customSelector, " " + overlayContentSelector], vars$1, customVars, [contentColor])) : styler.createStyleSheets([selector], vars$1, [layout, color]).concat(styler.createStyleSheets([overlaySheetSelector], vars$1, [overlayColor])).concat(styler.createStyleSheets([contentSelector], vars$1, [contentColor])).concat(styler.createStyleSheets([overlayContentSelector], vars$1, [contentColor]));
};

styler.generateStyles([selector], vars$1, [layout, color]);
styler.generateStyles([overlaySheetSelector], vars$1, [overlayColor]);
styler.generateStyles([contentSelector], vars$1, [contentColor]);
styler.generateStyles([overlayContentSelector], vars$1, [contentColor]);

export { addStyle, getStyle };
