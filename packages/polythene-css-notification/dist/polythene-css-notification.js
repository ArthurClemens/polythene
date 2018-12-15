(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('polythene-theme'), require('polythene-core-css')) :
  typeof define === 'function' && define.amd ? define(['exports', 'polythene-theme', 'polythene-core-css'], factory) :
  (factory((global.polythene = {}),global['polythene-theme'],global['polythene-core-css']));
}(this, (function (exports,polytheneTheme,polytheneCoreCss) { 'use strict';

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

  const generalFns = {
    general_styles: selector => [] // eslint-disable-line no-unused-vars

  };

  const tintFns = tint => ({
    ["color_" + tint + "_text"]: (selector, vars) => [polytheneCoreCss.sel(selector, {
      " .pe-notification__content": {
        color: vars["color_" + tint + "_text"]
      }
    })],
    ["color_" + tint + "_background"]: (selector, vars) => [polytheneCoreCss.sel(selector, {
      " .pe-notification__content": {
        background: vars["color_" + tint + "_background"]
      }
    })]
  });

  const lightTintFns = Object.assign({}, generalFns, tintFns("light"));
  const darkTintFns = Object.assign({}, generalFns, tintFns("dark"));
  var color = polytheneCoreCss.createColor({
    varFns: {
      lightTintFns,
      darkTintFns
    }
  });

  const varFns = {
    general_styles: selector => [polytheneCoreCss.sel(selector, [polytheneCoreCss.flex.layoutCenterCenter, {
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
        zIndex: polytheneTheme.vars.z_notification
      }
    }]), {
      ":not(.pe-notification--container) .pe-multiple--container": {
        position: "absolute"
      }
    }]
  };
  var holderLayout = polytheneCoreCss.createLayout({
    varFns
  });

  const title_single_padding_v_title_padding_h = (selector, vars) => polytheneCoreCss.sel(selector, {
    " .pe-notification__title": {
      padding: vars.title_single_padding_v + "px " + vars.title_padding_h + "px"
    }
  });

  const customLayoutFns = {
    animation_hide_css: (selector, vars) => [polytheneCoreCss.sel(selector, vars.animation_hide_css)],
    animation_show_css: (selector, vars) => [polytheneCoreCss.sel(selector, {
      ".pe-notification--visible": [vars.animation_show_css]
    })],
    width: (selector, vars) => [polytheneCoreCss.sel(selector, {
      " .pe-notification__content": {
        width: vars.width + "px"
      }
    })],
    animation_delay: (selector, vars) => [polytheneCoreCss.sel(selector, {
      transitionDelay: vars.animation_delay
    })],
    animation_duration: (selector, vars) => [polytheneCoreCss.sel(selector, {
      transitionDuration: vars.animation_duration
    })],
    animation_timing_function: (selector, vars) => [polytheneCoreCss.sel(selector, {
      transitionTimingFunction: vars.animation_timing_function
    })],
    side_padding: (selector, vars) => [polytheneCoreCss.sel(selector, {
      " .pe-notification__content": {
        padding: "0 " + vars.side_padding + "px"
      }
    })],
    border_radius: (selector, vars) => [polytheneCoreCss.sel(selector, {
      " .pe-notification__content": {
        borderRadius: vars.border_radius + "px"
      }
    })],
    title_single_padding_v: (selector, vars) => [title_single_padding_v_title_padding_h(selector, vars)],
    title_padding_h: (selector, vars) => [title_single_padding_v_title_padding_h(selector, vars)],
    font_size: (selector, vars) => [polytheneCoreCss.sel(selector, {
      " .pe-notification__title": {
        fontSize: vars.font_size + "px"
      }
    })],
    line_height: (selector, vars) => [polytheneCoreCss.sel(selector, {
      " .pe-notification__title": {
        lineHeight: vars.line_height + "px"
      }
    })],
    title_multi_padding_v: (selector, vars) => [polytheneCoreCss.sel(selector, {
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
    })]
  };
  const varFns$1 = Object.assign({}, {
    general_styles: selector => [polytheneCoreCss.sel(selector, [polytheneCoreCss.flex.layoutCenter, {
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
    }])]
  }, customLayoutFns);
  var layout = polytheneCoreCss.createLayout({
    varFns: varFns$1
  });

  const buttonPaddingH = 8; // padding, inner text space

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
    title_multi_padding_v: 20,
    // 24 - natural line height
    title_padding_h: buttonPaddingH,
    title_single_padding_v: 14,
    width: 288,
    color_light_background: polytheneCoreCss.rgba(polytheneTheme.vars.color_light_background),
    color_light_text: polytheneCoreCss.rgba(polytheneTheme.vars.color_light_foreground, polytheneTheme.vars.blend_light_dark_primary),
    color_dark_background: polytheneCoreCss.rgba(polytheneTheme.vars.color_dark_background),
    color_dark_text: polytheneCoreCss.rgba(polytheneTheme.vars.color_dark_foreground, polytheneTheme.vars.blend_light_text_primary)
  };

  const fns = [layout, color];
  const selector = `.${classes.component}`;
  const holderFns = [holderLayout];
  const holderSelector = `.${classes.holder}`;

  const addStyle = (customSelector, customVars, {
    mediaQuery
  } = {}) => {
    customSelector && polytheneCoreCss.styler.addStyle({
      selectors: [customSelector, selector],
      fns,
      vars,
      customVars,
      mediaQuery
    });
    customSelector && polytheneCoreCss.styler.addStyle({
      selectors: [customSelector, holderSelector],
      fns: holderFns,
      vars,
      customVars,
      mediaQuery
    });
  };

  const getStyle = (customSelector = "", customVars, {
    mediaQuery
  } = {}) => polytheneCoreCss.styler.getStyle({
    selectors: [customSelector, selector],
    fns,
    vars,
    customVars,
    mediaQuery
  }).concat(polytheneCoreCss.styler.getStyle({
    selectors: [holderSelector],
    fns: holderFns,
    vars,
    customVars,
    mediaQuery
  }));

  polytheneCoreCss.styler.addStyle({
    selectors: [holderSelector],
    fns: holderFns,
    vars
  });
  polytheneCoreCss.styler.addStyle({
    selectors: [selector],
    fns,
    vars
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
