(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('polythene-css-dialog-pane'), require('polythene-theme'), require('polythene-css-shadow'), require('polythene-core-css')) :
  typeof define === 'function' && define.amd ? define(['exports', 'polythene-css-dialog-pane', 'polythene-theme', 'polythene-css-shadow', 'polythene-core-css'], factory) :
  (factory((global.polythene = {}),global['polythene-css-dialog-pane'],global['polythene-theme'],global['polythene-css-shadow'],global['polythene-core-css']));
}(this, (function (exports,polytheneCssDialogPane,polytheneTheme,polytheneCssShadow,polytheneCoreCss) { 'use strict';

  var listTileClasses = {
    component: "pe-list-tile",
    // elements
    content: "pe-list-tile__content",
    highSubtitle: "pe-list-tile__high-subtitle",
    primary: "pe-list-tile__primary",
    secondary: "pe-list-tile__secondary",
    subtitle: "pe-list-tile__subtitle",
    title: "pe-list-tile__title",
    contentFront: "pe-list-tile__content-front",
    // states
    compact: "pe-list-tile--compact",
    compactFront: "pe-list-tile--compact-front",
    disabled: "pe-list-tile--disabled",
    hasFront: "pe-list-tile--front",
    hasHighSubtitle: "pe-list-tile--high-subtitle",
    hasSubtitle: "pe-list-tile--subtitle",
    header: "pe-list-tile--header",
    hoverable: "pe-list-tile--hoverable",
    selectable: "pe-list-tile--selectable",
    selected: "pe-list-tile--selected",
    highlight: "pe-list-tile--highlight",
    sticky: "pe-list-tile--sticky",
    navigation: "pe-list-tile--navigation"
  };

  var menuClasses = {
    component: "pe-menu",
    // elements
    panel: "pe-menu__panel",
    content: "pe-menu__content",
    placeholder: "pe-menu__placeholder",
    backdrop: "pe-menu__backdrop",
    // states
    floating: "pe-menu--floating",
    origin: "pe-menu--origin",
    permanent: "pe-menu--permanent",
    showBackdrop: "pe-menu--backdrop",
    visible: "pe-menu--visible",
    width_auto: "pe-menu--width-auto",
    width_n: "pe-menu--width-",
    isTopMenu: "pe-menu--top-menu",
    // lookup
    listTile: listTileClasses.component,
    selectedListTile: listTileClasses.selected
  };

  var classes = {
    component: "pe-dialog",
    // elements
    placeholder: "pe-dialog__placeholder",
    holder: "pe-dialog__holder",
    content: "pe-dialog__content",
    backdrop: "pe-dialog__backdrop",
    touch: "pe-dialog__touch",
    // states
    fullScreen: "pe-dialog--full-screen",
    modal: "pe-dialog--modal",
    open: "pe-dialog--open",
    // class set to html element
    visible: "pe-dialog--visible",
    // class set to dialog element
    showBackdrop: "pe-dialog--backdrop",
    transition: "pe-dialog--transition",
    // lookup
    menuContent: menuClasses.content
  };

  const generalFns = {
    general_styles: selector => [] // eslint-disable-line no-unused-vars

  };

  const tintFns = tint => ({
    ["color_" + tint + "_background"]: (selector, vars) => [polytheneCoreCss.sel(selector, {
      " .pe-dialog__content": {
        backgroundColor: vars["color_" + tint + "_background"]
      }
    })],
    ["color_" + tint + "_text"]: (selector, vars) => [polytheneCoreCss.sel(selector, {
      " .pe-dialog__content": {
        color: vars["color_" + tint + "_text"]
      }
    })],
    ["color_" + tint + "_backdrop_background"]: (selector, vars) => [polytheneCoreCss.sel(selector, {
      " .pe-dialog__backdrop": {
        backgroundColor: vars["color_" + tint + "_backdrop_background"]
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

  const behaviorVars = {
    full_screen: false,
    modal: false
  };
  const themeVars = Object.assign({}, {
    backdrop: false
  }, behaviorVars, polytheneCssShadow.sharedVars);
  var vars = Object.assign({}, {
    general_styles: true,
    animation_delay: "0s",
    animation_duration: ".220s",
    animation_hide_css: "opacity: 0;",
    animation_show_css: "opacity: 1;",
    animation_timing_function: "ease-in-out",
    border_radius: polytheneTheme.vars.unit_block_border_radius,
    position: "fixed",
    // color vars
    color_light_backdrop_background: "rgba(0, 0, 0, .4)",
    color_dark_backdrop_background: "rgba(0, 0, 0, .5)",
    color_light_background: polytheneCoreCss.rgba(polytheneTheme.vars.color_light_background),
    color_dark_background: polytheneCoreCss.rgba(polytheneTheme.vars.color_dark_background),
    color_light_text: polytheneCoreCss.rgba(polytheneTheme.vars.color_light_foreground, polytheneTheme.vars.blend_light_text_regular),
    color_dark_text: polytheneCoreCss.rgba(polytheneTheme.vars.color_dark_foreground, polytheneTheme.vars.blend_dark_text_regular)
  }, themeVars);

  const minWidth = "320px";

  const backdrop = selector => polytheneCoreCss.sel(selector, {
    ".pe-dialog--visible .pe-dialog__backdrop": {
      display: "block",
      opacity: 1
    }
  });

  const fullScreen = (selector, vars$$1) => polytheneCoreCss.sel(selector, [polytheneCoreCss.createMarker(vars$$1, behaviorVars), {
    padding: 0,
    " .pe-dialog__content": {
      width: "100%" // for IE 11

    }
  }, polytheneCssDialogPane.fullScreen(selector)]);

  const modal = (selector, vars$$1) => polytheneCoreCss.sel(selector, [polytheneCoreCss.createMarker(vars$$1, behaviorVars)]);

  const varFns = {
    general_styles: (selector, vars$$1) => [polytheneCoreCss.sel(selector, [polytheneCoreCss.flex.layoutCenterCenter, {
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      zIndex: polytheneTheme.vars.z_dialog,
      height: "100%",
      // 100vh would make the dialog go beneath Mobile Safari toolbar        
      transitionProperty: "opacity,background-color,transform",
      ".pe-dialog--full-screen": fullScreen(selector, vars$$1),
      ".pe-dialog--modal": modal(selector),
      " .pe-dialog__content": {
        position: "relative",
        transitionProperty: "all"
      },
      " .pe-dialog__backdrop": [polytheneCoreCss.mixin.defaultTransition("all"), // animation duration is set in component options
      {
        position: "absolute",
        opacity: 0,
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        pointerEvents: "none"
      }],
      ".pe-dialog--backdrop": backdrop(selector)
    }]), {
      ".pe-dialog__holder": {
        height: "100%",
        minWidth
      }
    }],
    animation_hide_css: (selector, vars$$1) => [polytheneCoreCss.sel(selector, [vars$$1.animation_hide_css])],
    position: (selector, vars$$1) => [polytheneCoreCss.sel(selector, {
      position: vars$$1.position
    })],
    animation_delay: (selector, vars$$1) => [polytheneCoreCss.sel(selector, {
      "&, .pe-dialog__content": {
        transitionDelay: vars$$1.animation_delay
      }
    })],
    animation_duration: (selector, vars$$1) => [polytheneCoreCss.sel(selector, {
      "&, .pe-dialog__content": {
        transitionDuration: vars$$1.animation_duration
      }
    })],
    animation_timing_function: (selector, vars$$1) => [polytheneCoreCss.sel(selector, {
      "&, .pe-dialog__content": {
        transitionTimingFunction: vars$$1.animation_timing_function
      }
    })],
    animation_show_css: (selector, vars$$1) => [polytheneCoreCss.sel(selector, {
      ".pe-dialog--visible": vars$$1.animation_show_css
    })],
    border_radius: (selector, vars$$1) => [!vars$$1.full_screen && polytheneCoreCss.sel(selector, {
      " .pe-dialog__content": {
        borderTopLeftRadius: vars$$1.border_radius + "px",
        borderTopRightRadius: vars$$1.border_radius + "px",
        borderBottomLeftRadius: vars$$1.border_radius + "px",
        borderBottomRightRadius: vars$$1.border_radius + "px"
      }
    })],
    // Theme vars
    backdrop: (selector, vars$$1) => vars$$1.backdrop && backdrop(selector, vars$$1),
    full_screen: (selector, vars$$1) => vars$$1.full_screen && fullScreen(selector, vars$$1),
    modal: (selector, vars$$1) => vars$$1.modal && modal(selector, vars$$1),
    // shadow_depth:
    ...polytheneCssShadow.sharedVarFns
  };
  var layout = polytheneCoreCss.createLayout({
    varFns
  });

  const fns = [layout, color];
  const selector = `.${classes.component}`;
  const addStyle = polytheneCoreCss.styler.createAddStyle(selector, fns, vars);
  const getStyle = polytheneCoreCss.styler.createGetStyle(selector, fns, vars);
  polytheneCoreCss.styler.addStyle({
    selectors: [selector],
    fns,
    vars
  });

  exports.addStyle = addStyle;
  exports.color = color;
  exports.getStyle = getStyle;
  exports.layout = layout;
  exports.vars = vars;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=polythene-css-dialog.js.map
