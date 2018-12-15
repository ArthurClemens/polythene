(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('polythene-css-notification'), require('polythene-theme'), require('polythene-core-css')) :
  typeof define === 'function' && define.amd ? define(['exports', 'polythene-css-notification', 'polythene-theme', 'polythene-core-css'], factory) :
  (factory((global.polythene = {}),global['polythene-css-notification'],global['polythene-theme'],global['polythene-core-css']));
}(this, (function (exports,polytheneCssNotification,polytheneTheme,polytheneCoreCss) { 'use strict';

  var notificationClasses = {
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

  var classes = Object.assign({}, notificationClasses, {
    component: "pe-notification pe-snackbar",
    // elements
    holder: "pe-snackbar__holder",
    placeholder: "pe-snackbar__placeholder",
    // states
    open: "pe-snackbar--open"
  });

  var color = polytheneCoreCss.createColor({
    superColor: polytheneCssNotification.color
  });

  const varFns = {
    general_styles: selector => [polytheneCoreCss.sel(selector, [polytheneCoreCss.flex.layoutCenterCenter, {
      position: "fixed",
      top: "auto",
      right: 0,
      bottom: 0,
      left: 0,
      zIndex: polytheneTheme.vars.z_notification,
      pointerEvents: "none",
      justifyContent: "flex-start",
      // For IE11
      width: "100%"
    }]), {
      [`.pe-notification--container ${selector}`]: {
        position: "relative"
      }
    }]
  };
  var holderLayout = polytheneCoreCss.createLayout({
    varFns
  });

  const breakpoint = breakpointSel => (selector, o) => ({
    [breakpointSel]: {
      [selector]: o
    }
  });

  const breakpointTabletPortraitUp = breakpoint(`@media (min-width: ${polytheneTheme.vars.breakpoint_for_tablet_portrait_up}px)`);
  const varFns$1 = {
    general_styles: selector => [polytheneCoreCss.sel(selector, {
      width: "100%",
      opacity: 1,
      " .pe-notification__content": {
        width: "100%",
        margin: "0 auto",
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0
      }
    }), breakpointTabletPortraitUp(selector, {
      ".pe-notification--horizontal": {
        " .pe-notification__title": {
          paddingRight: "30px"
        }
      }
    })],
    min_width: (selector, vars) => [breakpointTabletPortraitUp(selector, {
      minWidth: vars.min_width + "px"
    })],
    max_width: (selector, vars) => [breakpointTabletPortraitUp(selector, {
      maxWidth: vars.max_width + "px"
    })],
    border_radius: (selector, vars) => [polytheneCoreCss.sel(selector, {
      " .pe-notification__content": {
        borderTopLeftRadius: vars.border_radius + "px",
        borderTopRightRadius: vars.border_radius + "px",
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0
      }
    })]
  };
  var layout = polytheneCoreCss.createLayout({
    varFns: varFns$1,
    customVarFns: polytheneCssNotification.customLayoutFns
  });

  var vars = {
    general_styles: true,
    animation_hide_css: "",
    animation_show_css: "",
    border_radius: 0,
    max_width: 568,
    min_height: 0,
    min_width: 288,
    color_light_background: polytheneCoreCss.rgba(polytheneTheme.vars.color_light_background),
    color_dark_background: polytheneCoreCss.rgba(polytheneTheme.vars.color_dark_background)
  };

  const fns = [layout, color];
  const selector = `.${classes.component.replace(/ /g, ".")}`;
  const holderFns = [holderLayout];
  const holderSelector = `.${classes.holder.replace(/ /g, ".")}`;

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
  exports.getStyle = getStyle;
  exports.holderLayout = holderLayout;
  exports.layout = layout;
  exports.vars = vars;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=polythene-css-snackbar.js.map
