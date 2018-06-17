(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('polythene-core-css'), require('polythene-theme')) :
  typeof define === 'function' && define.amd ? define(['exports', 'polythene-core-css', 'polythene-theme'], factory) :
  (factory((global.polythene = {}),global['polythene-core-css'],global['polythene-theme']));
}(this, (function (exports,polytheneCoreCss,polytheneTheme) { 'use strict';

  var classes = {
    component: "pe-notification",

    // elements
    action: "pe-notification__action",
    content: "pe-notification__content",
    holder: "pe-notification__holder",
    placeholder: "pe-notification__placeholder",
    title: "pe-notification__title",

    // states
    hasContainer: "pe-notification--container",
    horizontal: "pe-notification--horizontal",
    multilineTitle: "pe-notification__title--multi-line",
    vertical: "pe-notification--vertical",
    visible: "pe-notification--visible"
  };

  var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  var generalFns = {
    general_styles: function general_styles(selector) {
      return [];
    } // eslint-disable-line no-unused-vars
  };

  var tintFns = function tintFns(tint) {
    var _ref;

    return _ref = {}, _defineProperty(_ref, "color_" + tint + "_text", function (selector, vars) {
      return [polytheneCoreCss.sel(selector, {
        " .pe-notification__content": {
          color: vars["color_" + tint + "_text"]
        }
      })];
    }), _defineProperty(_ref, "color_" + tint + "_background", function (selector, vars) {
      return [polytheneCoreCss.sel(selector, {
        " .pe-notification__content": {
          background: vars["color_" + tint + "_background"]
        }
      })];
    }), _ref;
  };

  var lightTintFns = _extends({}, generalFns, tintFns("light"));
  var darkTintFns = _extends({}, generalFns, tintFns("dark"));

  var color = polytheneCoreCss.createColor({
    varFns: { lightTintFns: lightTintFns, darkTintFns: darkTintFns }
  });

  var varFns = {
    general_styles: function general_styles(selector) {
      return [polytheneCoreCss.sel(selector, [polytheneCoreCss.flex.layoutCenterCenter, {
        // assumes position relative
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        pointerEvents: "none",
        justifyContent: "flex-start", // For IE 11

        ".pe-multiple--screen": {
          position: "fixed",
          zIndex: polytheneTheme.vars.z_notification
        }
      }]), {
        ":not(.pe-notification--container) .pe-multiple--container": {
          position: "absolute"
        }
      }];
    }
  };

  var holderLayout = polytheneCoreCss.createLayout({
    varFns: varFns
  });

  var _extends$1 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

  var title_single_padding_v_title_padding_h = function title_single_padding_v_title_padding_h(selector, vars) {
    return polytheneCoreCss.sel(selector, {
      " .pe-notification__title": {
        padding: vars.title_single_padding_v + "px " + vars.title_padding_h + "px"
      }
    });
  };

  var customLayoutFns = {
    animation_hide_css: function animation_hide_css(selector, vars) {
      return [polytheneCoreCss.sel(selector, vars.animation_hide_css)];
    },
    animation_show_css: function animation_show_css(selector, vars) {
      return [polytheneCoreCss.sel(selector, {
        ".pe-notification--visible": [vars.animation_show_css]

      })];
    },
    width: function width(selector, vars) {
      return [polytheneCoreCss.sel(selector, {
        " .pe-notification__content": {
          width: vars.width + "px"
        }
      })];
    },
    animation_delay: function animation_delay(selector, vars) {
      return [polytheneCoreCss.sel(selector, {
        transitionDelay: vars.animation_delay
      })];
    },
    animation_duration: function animation_duration(selector, vars) {
      return [polytheneCoreCss.sel(selector, {
        transitionDuration: vars.animation_duration
      })];
    },
    animation_timing_function: function animation_timing_function(selector, vars) {
      return [polytheneCoreCss.sel(selector, {
        transitionTimingFunction: vars.animation_timing_function
      })];
    },
    side_padding: function side_padding(selector, vars) {
      return [polytheneCoreCss.sel(selector, {
        " .pe-notification__content": {
          padding: "0 " + vars.side_padding + "px"
        }
      })];
    },
    border_radius: function border_radius(selector, vars) {
      return [polytheneCoreCss.sel(selector, {
        " .pe-notification__content": {
          borderRadius: vars.border_radius + "px"
        }
      })];
    },
    title_single_padding_v: function title_single_padding_v(selector, vars) {
      return [title_single_padding_v_title_padding_h(selector, vars)];
    },
    title_padding_h: function title_padding_h(selector, vars) {
      return [title_single_padding_v_title_padding_h(selector, vars)];
    },
    font_size: function font_size(selector, vars) {
      return [polytheneCoreCss.sel(selector, {
        " .pe-notification__title": {
          fontSize: vars.font_size + "px"
        }
      })];
    },
    line_height: function line_height(selector, vars) {
      return [polytheneCoreCss.sel(selector, {
        " .pe-notification__title": {
          lineHeight: vars.line_height + "px"
        }
      })];
    },
    title_multi_padding_v: function title_multi_padding_v(selector, vars) {
      return [polytheneCoreCss.sel(selector, {
        ".pe-notification--horizontal": {
          " .pe-notification__title--multi-line": {
            paddingTop: vars.title_multi_padding_v + "px",
            paddingBottom: vars.title_multi_padding_v + "px"
          }
        },
        ".pe-notification--vertical": {
          " .pe-notification__title--multi-line": {
            paddingTop: vars.title_multi_padding_v + "px"
          }
        }
      })];
    }
  };

  var varFns$1 = _extends$1({}, {
    general_styles: function general_styles(selector) {
      return [polytheneCoreCss.sel(selector, [polytheneCoreCss.flex.layoutCenter, {
        pointerEvents: "all",
        justifyContent: "center",
        margin: "0 auto",
        transitionProperty: "all",
        opacity: 0,

        " .pe-notification__title": {
          flex: "1 0 auto"
        },

        " .pe-notification__action": {
          " .pe-button": {
            margin: 0
          }
        },

        " .pe-notification__content": {
          maxWidth: "100%"
        },

        ".pe-notification--horizontal": {
          " .pe-notification__content": polytheneCoreCss.flex.layoutHorizontal,
          " .pe-notification__title": [polytheneCoreCss.flex.flex(), {
            alignSelf: "center"
          }],
          " .pe-notification__action": polytheneCoreCss.flex.layoutCenter
        },
        ".pe-notification--vertical": {
          " .pe-notification__content": [polytheneCoreCss.flex.layoutVertical],

          " .pe-notification__title": {
            paddingBottom: "6px"
          },
          " .pe-notification__action": [polytheneCoreCss.flex.layoutEndJustified, {
            width: "100%"
          }]
        }
      }])];
    }
  }, customLayoutFns);

  var layout = polytheneCoreCss.createLayout({
    varFns: varFns$1
  });

  var buttonPaddingH = 8; // padding, inner text space

  var vars = {
    general_styles: true,

    animation_delay: "0s",
    animation_duration: ".3s",
    animation_hide_css: "opacity: 0;",
    animation_show_css: "opacity: 1;",
    animation_timing_function: "ease-in-out",
    border_radius: polytheneTheme.vars.unit_block_border_radius,
    font_size: 14,
    line_height: 20,
    min_height: 80,
    side_padding: 24 - buttonPaddingH,
    title_multi_padding_v: 20, // 24 - natural line height
    title_padding_h: buttonPaddingH,
    title_single_padding_v: 14,
    width: 288,

    color_light_background: polytheneCoreCss.rgba(polytheneTheme.vars.color_light_background),
    color_light_text: polytheneCoreCss.rgba(polytheneTheme.vars.color_light_foreground, polytheneTheme.vars.blend_light_dark_primary),

    color_dark_background: polytheneCoreCss.rgba(polytheneTheme.vars.color_dark_background),
    color_dark_text: polytheneCoreCss.rgba(polytheneTheme.vars.color_dark_foreground, polytheneTheme.vars.blend_light_text_primary)
  };

  var fns = [layout, color];
  var selector = "." + classes.component;

  var holderFns = [holderLayout];
  var holderSelector = "." + classes.holder;

  var addStyle = function addStyle(customSelector, customVars) {
    var _ref = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
        mediaQuery = _ref.mediaQuery;

    polytheneCoreCss.styler.addStyle({
      selectors: [customSelector, selector],
      fns: fns,
      vars: vars,
      customVars: customVars,
      mediaQuery: mediaQuery
    });
    polytheneCoreCss.styler.addStyle({
      selectors: [holderSelector, selector],
      fns: holderFns,
      vars: vars,
      customVars: customVars,
      mediaQuery: mediaQuery
    });
  };

  var getStyle = function getStyle() {
    var customSelector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
    var customVars = arguments[1];

    var _ref2 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
        mediaQuery = _ref2.mediaQuery;

    return polytheneCoreCss.styler.getStyle({
      selectors: [customSelector, selector],
      fns: fns,
      vars: vars,
      customVars: customVars,
      mediaQuery: mediaQuery
    }).concat(polytheneCoreCss.styler.getStyle({
      selectors: [holderSelector, selector],
      fns: holderFns,
      vars: vars,
      customVars: customVars,
      mediaQuery: mediaQuery
    }));
  };

  polytheneCoreCss.styler.addStyle({
    selectors: [holderSelector],
    fns: holderFns,
    vars: vars
  });
  polytheneCoreCss.styler.addStyle({
    selectors: [selector],
    fns: fns,
    vars: vars
  });

  exports.addStyle = addStyle;
  exports.color = color;
  exports.customLayoutFns = customLayoutFns;
  exports.getStyle = getStyle;
  exports.holderLayout = holderLayout;
  exports.layout = layout;
  exports.vars = vars;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=polythene-css-notification.js.map
