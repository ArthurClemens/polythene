(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('polythene-core-css'), require('polythene-theme'), require('polythene-core-notification')) :
  typeof define === 'function' && define.amd ? define(['exports', 'polythene-core-css', 'polythene-theme', 'polythene-core-notification'], factory) :
  (factory((global.polythene = {}),global['polythene-core-css'],global['polythene-theme'],global['polythene-core-notification']));
}(this, (function (exports,polytheneCoreCss,polytheneTheme,polytheneCoreNotification) { 'use strict';

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

  var sel = function sel(selector, o) {
    return _defineProperty({}, selector, o);
  };

  var title_single_padding_v_title_padding_h = function title_single_padding_v_title_padding_h(selector, vars) {
    return sel(selector, {
      " .pe-notification__title": {
        padding: vars.title_single_padding_v + "px " + vars.title_padding_h + "px"
      }
    });
  };

  var varFns = {
    general_styles: function general_styles(selector) {
      return [sel(selector, [polytheneCoreCss.flex.layoutCenter, {
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
    },
    // animation_hide_css: (selector, vars) => [
    //   vars.animation_hide_css,
    // ],
    animation_show_css: function animation_show_css(selector, vars) {
      return [sel(selector, {
        ".pe-notification--visible": [vars.animation_show_css]

      })];
    },
    width: function width(selector, vars) {
      return [sel(selector, {
        " .pe-notification__content": {
          width: vars.width + "px"
        }
      })];
    },
    animation_delay: function animation_delay(selector, vars) {
      return [sel(selector, {
        transitionDelay: vars.animation_delay
      })];
    },
    animation_duration: function animation_duration(selector, vars) {
      return [sel(selector, {
        transitionDuration: vars.animation_duration
      })];
    },
    animation_timing_function: function animation_timing_function(selector, vars) {
      return [sel(selector, {
        transitionTimingFunction: vars.animation_timing_function
      })];
    },
    side_padding: function side_padding(selector, vars) {
      return [sel(selector, {
        " .pe-notification__content": {
          padding: "0 " + vars.side_padding + "px"
        }
      })];
    },
    border_radius: function border_radius(selector, vars) {
      return [sel(selector, {
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
      return [sel(selector, {
        " .pe-notification__title": {
          fontSize: vars.font_size + "px"
        }
      })];
    },
    line_height: function line_height(selector, vars) {
      return [sel(selector, {
        " .pe-notification__title": {
          lineHeight: vars.line_height + "px"
        }
      })];
    },
    title_multi_padding_v: function title_multi_padding_v(selector, vars) {
      return [sel(selector, {
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
    var _ref2;

    return _ref2 = {}, _defineProperty$1(_ref2, "color_" + tint + "_text", function (selector, vars) {
      return [sel$1(selector, {
        " .pe-notification__content": {
          color: vars["color_" + tint + "_text"]
        }
      })];
    }), _defineProperty$1(_ref2, "color_" + tint + "_background", function (selector, vars) {
      return [sel$1(selector, {
        " .pe-notification__content": {
          background: vars["color_" + tint + "_background"]
        }
      })];
    }), _ref2;
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

  var varFns$1 = {
    general_styles: function general_styles(selector) {
      return [sel$2(selector, [polytheneCoreCss.flex.layoutCenterCenter, {
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

  var holderLayout = (function (selector, componentVars, customVars) {
    var allVars = _extends$2({}, componentVars, customVars);
    var currentVars = customVars ? customVars : allVars;
    return Object.keys(currentVars).map(function (v) {
      return varFns$1[v] !== undefined ? varFns$1[v](selector, allVars) : null;
    }).filter(function (s) {
      return s;
    });
  });

  var fns = [layout, color];
  var selector = "." + classes.component;

  var holderFns = [holderLayout];
  var holderSelector = "." + classes.holder;

  var addStyle = function addStyle(customSelector, customVars) {
    return polytheneCoreCss.styler.generateCustomStyles([customSelector, selector], polytheneCoreNotification.vars, customVars, fns);
  };

  var getStyle = function getStyle(customSelector, customVars) {
    return customSelector ? polytheneCoreCss.styler.createCustomStyleSheets([customSelector, selector], polytheneCoreNotification.vars, customVars, fns) : polytheneCoreCss.styler.createStyleSheets([holderSelector], polytheneCoreNotification.vars, holderFns).concat(polytheneCoreCss.styler.createStyleSheets([selector], polytheneCoreNotification.vars, fns));
  };

  polytheneCoreCss.styler.generateStyles([holderSelector], polytheneCoreNotification.vars, holderFns);
  polytheneCoreCss.styler.generateStyles([selector], polytheneCoreNotification.vars, fns);

  exports.addStyle = addStyle;
  exports.getStyle = getStyle;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=polythene-css-notification.js.map
