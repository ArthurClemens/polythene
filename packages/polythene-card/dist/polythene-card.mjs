import m from 'mithril';
import { icon } from 'polythene-mithril';
import shadow from 'polythene-shadow';
import listTile from 'polythene-list-tile';
import { filterSupportedAttributes } from 'polythene-core-essentials';
import { flex, mixin, styler } from 'polythene-core-css';
import { vars } from 'polythene-theme';

var classes = {
  component: "pe-card",

  // elements
  actions: "pe-card__actions",
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
  actionsBordered: "pe-card__actions--borders",
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

var rgba = vars.rgba;

var padding_v = 24;
var padding_actions_v = 8;
var actions_button_margin_v = 2;

var vars$1 = {
  image_size_small: 1 * 80,
  image_size_regular: 1.4 * 80,
  image_size_medium: 2 * 80,
  image_size_large: 3 * 80,
  border_radius: vars.unit_block_border_radius,
  padding_h: 16,
  offset_small_padding_v: padding_v - 16,
  padding_actions_h: 8,
  title_padding_h: 16,
  title_padding_v: 24,
  tight_title_padding_bottom: 16,
  text_padding_h: 16,
  text_padding_v: 16,
  text_padding_bottom: 24,
  tight_text_padding_bottom: 16,
  subtitle_line_height_padding_bottom: 7,
  text_line_height_padding_top: 6,
  text_line_height_padding_bottom: 7,
  one_line_height_with_icon: 72,
  icon_element_width: 72 - 4,
  one_line_padding_v: 8,
  actions_padding_v: padding_actions_v - 6,
  actions_button_margin_v: actions_button_margin_v,
  actions_vertical_padding_v: padding_actions_v - actions_button_margin_v,

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
      height: "inherit"
    },

    " .pe-card__media": {
      position: "relative",
      overflow: "hidden",
      borderTopLeftRadius: "inherit",
      borderTopRightRadius: "inherit",
      zIndex: 1, // makes rounded corners on absolute images work (without this, no rounded image)

      "&.pe-card__media--landscape": {
        paddingBottom: 100 / 16 * 9 + "%"
      },
      "&.pe-card__media--square": {
        paddingBottom: "100%"
      },
      "&:last-child": {
        "&, img": {
          borderBottomLeftRadius: componentVars.border_radius + "px",
          borderBottomRightRadius: componentVars.border_radius + "px"
        }
      },
      " img": [mixin.fit(), {
        display: "none",
        width: "100%",
        maxWidth: "none",

        "&.pe-card__media--crop-x": {
          width: "100%",
          height: "auto",
          display: "block"
        },
        "&.pe-card__media--crop-y": {
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

      " .shadow + &": {
        // first child
        "&, img": {
          borderTopLeftRadius: componentVars.border_radius + "px",
          borderTopRightRadius: componentVars.border_radius + "px"
        }
      }
    },

    " .pe-card__overlay": mixin.fit(),

    " .pe-card__media__dimmer": [mixin.fit(), {
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

      "&.pe-card__primary--media:not(:last-child)": {
        paddingBottom: "16px"
      },
      "&.pe-card__primary--media + .pe-card__actions": {
        marginTop: "-16px"
      },
      "& + .pe-card__text": {
        marginTop: "-16px"
      },
      "&.pe-card__primary--tight": {
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
      minHeight: 36 + 2 * 8 + "px",
      padding: componentVars.actions_padding_v + "px" + " " + componentVars.padding_actions_h + "px",

      "&.pe-card__actions--tight": {
        minHeight: 0,
        padding: 0
      },
      "&.pe-card__actions--horizontal:not(.pe-card__actions--justified)": [flex.layoutHorizontal, flex.layoutCenter, {
        " :first-child": {
          marginLeft: 0
        },
        " .pe-button": {
          minWidth: 0
        },
        " .pe-button--icon": {
          marginRight: "8px"
        }
      }],

      "&.pe-card__actions--justified": [flex.layoutJustified],

      "&.pe-card__actions--vertical": [flex.layoutVertical, {
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
      "&.pe-card__text--tight, &.pe-card__text--tight:last-child": {
        paddingBottom: componentVars.tight_text_padding_bottom - componentVars.text_line_height_padding_bottom + "px"
      },
      " .pe-card__actions + &": {
        marginTop: "8px"
      }
    },

    " .pe-card__text, .pe-card__primary": {
      "& + .pe-card__actions:not(:last-child)": {
        marginTop: -(componentVars.offset_small_padding_v + 1) + "px",
        marginBottom: -(componentVars.offset_small_padding_v - 1) + "px"
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
  return [style([".pe-dark-tone", ".pe-dark-tone "], selector, componentVars, "dark"), // has/inside dark theme
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
  return [style$1([".pe-dark-tone", ".pe-dark-tone "], selector, componentVars, "dark"), // has/inside dark theme
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
  return [style$2([".pe-dark-tone", ".pe-dark-tone "], selector, componentVars, "dark"), // has/inside dark theme
  style$2(["", ".pe-light-tone", ".pe-light-tone "], selector, componentVars, "light")];
});

var _extends$1 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var selector = "." + classes.component;
var contentSelector = "." + classes.content;
var overlaySheetSelector = "." + classes.overlaySheet;
var overlayContentSelector = "." + classes.overlayContent;

var customTheme = function customTheme(customSelector, customVars) {
  return styler.generateStyles([customSelector, selector], _extends$1({}, vars$1, customVars), [layout, color]), styler.generateStyles([customSelector, overlaySheetSelector], _extends$1({}, vars$1, customVars), [overlayColor]), styler.generateStyles([customSelector, contentSelector], _extends$1({}, vars$1, customVars), [contentColor]), styler.generateStyles([customSelector, overlayContentSelector], _extends$1({}, vars$1, customVars), [contentColor]);
};

styler.generateStyles([selector], vars$1, [layout, color]);
styler.generateStyles([overlaySheetSelector], vars$1, [overlayColor]);
styler.generateStyles([contentSelector], vars$1, [contentColor]);
styler.generateStyles([overlayContentSelector], vars$1, [contentColor]);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var imageRatios = {
  landscape: 16 / 9,
  square: 1
};

var createOverlay = function createOverlay() {
  var attrs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  var element = attrs.element || "div";
  var content = attrs.content.map(function (o) {
    var key = Object.keys(o)[0];
    return contentMap[key](o);
  });
  return m("div", {
    class: [classes.overlay, attrs.sheet ? classes.overlaySheet : null, attrs.tone === "light" ? null : "pe-dark-tone", // default dark tone
    attrs.tone === "light" ? "pe-light-tone" : null].join(" ")
  }, [m(element, {
    class: [classes.overlayContent, attrs.class].join(" ")
  }, content), m("div", {
    class: classes.mediaDimmer
  })]);
};

var createText = function createText(o) {
  var attrs = o.text || {};
  var element = attrs.element || "div";
  return m(element, {
    class: [classes.text, attrs.tight ? classes.textTight : null, attrs.class].join(" ")
  }, attrs.content);
};

// media type to class

var mediaTypeClasses = {
  small: classes.mediaSmall,
  regular: classes.mediaRegular,
  medium: classes.mediaMedium,
  large: classes.mediaLarge
};

var mediaClassForType = function mediaClassForType() {
  var mode = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "regular";
  return mediaTypeClasses[mode];
};

var createMedia = function createMedia(o) {
  var attrs = o.media || {};
  var ratio = attrs.ratio || "landscape";
  var origin = attrs.origin || "center";
  var element = attrs.element || "div";
  var initImage = function initImage(_ref) {
    var dom = _ref.dom;

    var img = dom.querySelector("img");
    if (img) {
      img.onload = function () {
        var w = this.naturalWidth;
        var h = this.naturalHeight;
        var naturalRatio = w / h;
        // crop-x: crop over x axis
        // crop-y: crop over y axis
        var cropClass = naturalRatio < imageRatios[ratio] ? classes.mediaCropX : classes.mediaCropY;
        img.className = cropClass;

        var containerWidth = dom.clientWidth;
        var containerHeight = dom.clientHeight;

        if (naturalRatio < imageRatios[ratio]) {
          // orient on y axis
          if (origin === "center") {
            var imageHeight = containerWidth / naturalRatio;
            var diff = containerHeight - imageHeight;
            var offset = diff / 2;
            this.style.marginTop = offset + "px";
          } else if (origin === "start") {
            this.style.top = 0;
            this.style.bottom = "auto";
          } else {
            // end
            this.style.top = "auto";
            this.style.bottom = 0;
          }
        } else {
          // orient on x axis
          if (origin === "center") {
            var imageWidth = containerHeight * naturalRatio;
            var _diff = containerWidth - imageWidth;
            var _offset = _diff / 2;
            this.style.marginLeft = _offset + "px";
          } else if (origin === "start") {
            this.style.left = 0;
            this.style.right = "auto";
          } else {
            // end
            this.style.left = "auto";
            this.style.right = 0;
          }
        }
      };
    }
  };

  return m(element, {
    class: [classes.media, mediaClassForType(attrs.type), ratio === "landscape" ? classes.mediaRatioLandscape : classes.mediaRatioSquare, attrs.class].join(" "),
    oncreate: initImage
  }, [attrs.content, attrs.overlay ? createOverlay(attrs.overlay) : m("div", { class: classes.mediaDimmer })]);
};

var createHeader = function createHeader(o) {
  var attrs = o.header || {};
  return m(listTile, _extends({}, attrs, {
    class: [classes.header, attrs.class].join(" ")
  }, attrs.icon ? { front: m(icon, attrs.icon) } : null));
};

var actionLayoutClasses = {
  horizontal: classes.actionsHorizontal,
  vertical: classes.actionsVertical,
  justified: classes.actionsJustified
};

var actionClassForLayout = function actionClassForLayout() {
  var layout = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "horizontal";
  return actionLayoutClasses[layout];
};

var createActions = function createActions(o) {
  var attrs = o.actions || {};
  var element = attrs.element || "div";
  return m(element, {
    class: [classes.actions, actionClassForLayout(attrs.layout), attrs.bordered ? classes.actionsBordered : null, attrs.tight ? classes.actionsTight : null, attrs.class].join(" ")
  }, attrs.content);
};

var createPrimary = function createPrimary(o) {
  var content = void 0,
      key = void 0,
      partOpts = void 0;
  var attrs = o.primary || {};
  var element = attrs.element || "div";
  var primaryHasMedia = false;

  var lookup = {
    title: function title(pops) {
      return pops.attrs ? pops : m("div", { class: classes.title }, [pops.title ? pops.title : null, pops.subtitle ? m("div", { class: classes.subtitle }, pops.subtitle) : null]);
    },
    media: function media(pops) {
      primaryHasMedia = true;
      return m("div", {
        class: classes.primaryMedia
      }, createMedia({
        media: pops
      }));
    },
    actions: function actions(pops) {
      return createActions({
        actions: pops
      });
    }
  };

  if (Array.isArray(attrs.content)) {
    content = attrs.content.map(function (part) {
      key = Object.keys(part)[0];
      partOpts = part[key];
      if (lookup[key]) {
        return lookup[key](partOpts);
      } else {
        return part;
      }
    });
  } else {
    // shorthand for simple primary titles
    content = [attrs.title ? lookup.title({
      title: attrs.title,
      subtitle: attrs.subtitle
    }) : null, attrs.media ? lookup.media(attrs.media) : null, attrs.actions ? lookup.actions(attrs.actions) : null, attrs.content];
  }
  return m(element, {
    class: [classes.primary, attrs.tight ? classes.primaryTight : null, primaryHasMedia ? classes.primaryHasMedia : null].join(" ")
  }, content);
};

var contentMap = {
  text: createText,
  media: createMedia,
  header: createHeader,
  primary: createPrimary,
  actions: createActions
};

var view = function view(_ref2) {
  var attrs = _ref2.attrs;

  var element = attrs.element || attrs.url ? "a" : "div";
  var props = _extends({}, filterSupportedAttributes(attrs), {
    class: [classes.component, attrs.tone === "dark" ? "pe-dark-tone" : null, attrs.tone === "light" ? "pe-light-tone" : null, attrs.class].join(" ")
  }, attrs.url ? attrs.url : null, attrs.events ? attrs.events : null);

  var contents = Array.isArray(attrs.content) ? attrs.content.map(function (attr) {
    var key = Object.keys(attr)[0];
    if (!contentMap[key]) {
      throw "Content type \"" + key + "\" does not exist";
    }
    return contentMap[key](attr);
  }) : attrs.content;

  var content = [m(shadow, {
    z: attrs.z !== undefined ? attrs.z : 1,
    animated: true
  }), m("div", {
    class: classes.content
  }, contents)];
  return m(element, props, [attrs.before, content, attrs.after]);
};

var card = {
  theme: customTheme, // accepts (selector, vars)
  view: view
};

export { classes, vars$1 as vars };export default card;
