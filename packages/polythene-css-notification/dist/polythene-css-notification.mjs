import { createColor, sel, createLayout, flex, rgba, styler } from 'polythene-core-css';
import { vars } from 'polythene-theme';

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

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

var generalFns = {
  general_styles: function general_styles(selector) {
    return [];
  } // eslint-disable-line no-unused-vars

};

var tintFns = function tintFns(tint) {
  var _ref;

  return _ref = {}, _defineProperty(_ref, "color_" + tint + "_text", function (selector, vars) {
    return [sel(selector, {
      " .pe-notification__content": {
        color: vars["color_" + tint + "_text"]
      }
    })];
  }), _defineProperty(_ref, "color_" + tint + "_background", function (selector, vars) {
    return [sel(selector, {
      " .pe-notification__content": {
        background: vars["color_" + tint + "_background"]
      }
    })];
  }), _ref;
};

var lightTintFns = _extends({}, generalFns, tintFns("light"));

var darkTintFns = _extends({}, generalFns, tintFns("dark"));

var color = createColor({
  varFns: {
    lightTintFns: lightTintFns,
    darkTintFns: darkTintFns
  }
});

// @ts-check
var varFns = {
  general_styles: function general_styles(selector) {
    return [sel(selector, [flex.layoutCenterCenter, {
      // assumes position relative
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      pointerEvents: "none",
      justifyContent: "flex-start",
      // For IE 11
      ".pe-multiple--screen": {
        position: "fixed",
        zIndex: vars.z_notification
      }
    }]), {
      ":not(.pe-notification--container) .pe-multiple--container": {
        position: "absolute"
      }
    }];
  }
};
var holderLayout = createLayout({
  varFns: varFns
});

var title_single_padding_v_title_padding_h = function title_single_padding_v_title_padding_h(selector, vars) {
  return sel(selector, {
    " .pe-notification__title": {
      padding: vars.title_single_padding_v + "px " + vars.title_padding_h + "px"
    }
  });
};

var customLayoutFns = {
  animation_hide_css: function animation_hide_css(selector, vars) {
    return [sel(selector, vars.animation_hide_css)];
  },
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

var varFns$1 = _extends({}, {
  general_styles: function general_styles(selector) {
    return [sel(selector, [flex.layoutCenter, {
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
        " .pe-notification__content": flex.layoutHorizontal,
        " .pe-notification__title": [flex.flex(), {
          alignSelf: "center"
        }],
        " .pe-notification__action": flex.layoutCenter
      },
      ".pe-notification--vertical": {
        " .pe-notification__content": [flex.layoutVertical],
        " .pe-notification__title": {
          paddingBottom: "6px"
        },
        " .pe-notification__action": [flex.layoutEndJustified, {
          width: "100%"
        }]
      }
    }])];
  }
}, customLayoutFns);

var layout = createLayout({
  varFns: varFns$1
});

// @ts-check
var buttonPaddingH = 8; // padding, inner text space

/**
 * @type {NotificationVars} notificationVars
 */

var notificationVars = {
  /**
   * Generate general styles, not defined by variables
   */
  general_styles: true,
  animation_delay: "0s",
  animation_duration: ".3s",
  animation_hide_css: "opacity: 0;",
  animation_show_css: "opacity: 1;",
  animation_timing_function: "ease-in-out",
  border_radius: vars.unit_block_border_radius,
  font_size: 14,
  line_height: 20,
  min_height: 80,
  side_padding: 24 - buttonPaddingH,
  title_multi_padding_v: 20,
  // 24 - natural line height
  title_padding_h: buttonPaddingH,
  title_single_padding_v: 14,
  width: 288,
  color_light_background: rgba(vars.color_light_background),
  color_light_text: rgba(vars.color_light_foreground, vars.blend_light_dark_primary),
  color_dark_background: rgba(vars.color_dark_background),
  color_dark_text: rgba(vars.color_dark_foreground, vars.blend_light_text_primary)
};

// @ts-check
var fns = [layout, color];
var selector = ".".concat(classes.component);
var holderFns = [holderLayout];
var holderSelector = ".".concat(classes.holder);

var addStyle = function addStyle(customSelector, customVars) {
  var _ref = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
      _ref$mediaQuery = _ref.mediaQuery,
      mediaQuery = _ref$mediaQuery === void 0 ? "" : _ref$mediaQuery,
      _ref$scope = _ref.scope,
      scope = _ref$scope === void 0 ? "" : _ref$scope;

  customSelector && styler.addStyle({
    selectors: [customSelector, selector],
    fns: fns,
    vars: notificationVars,
    customVars: customVars,
    mediaQuery: mediaQuery,
    scope: scope
  });
  customSelector && styler.addStyle({
    selectors: [customSelector, holderSelector],
    fns: holderFns,
    vars: notificationVars,
    customVars: customVars,
    mediaQuery: mediaQuery,
    scope: scope
  });
};

var getStyle = function getStyle() {
  var customSelector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
  var customVars = arguments.length > 1 ? arguments[1] : undefined;

  var _ref2 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
      _ref2$mediaQuery = _ref2.mediaQuery,
      mediaQuery = _ref2$mediaQuery === void 0 ? "" : _ref2$mediaQuery,
      _ref2$scope = _ref2.scope,
      scope = _ref2$scope === void 0 ? "" : _ref2$scope;

  return styler.getStyle({
    selectors: [customSelector, selector],
    fns: fns,
    vars: notificationVars,
    customVars: customVars,
    mediaQuery: mediaQuery,
    scope: scope
  }).concat(styler.getStyle({
    selectors: [holderSelector],
    fns: holderFns,
    vars: notificationVars,
    customVars: customVars,
    mediaQuery: mediaQuery,
    scope: scope
  }));
};

styler.addStyle({
  selectors: [holderSelector],
  fns: holderFns,
  vars: notificationVars
});
styler.addStyle({
  selectors: [selector],
  fns: fns,
  vars: notificationVars
});

export { addStyle, color, customLayoutFns, getStyle, holderLayout, layout, notificationVars as vars };
