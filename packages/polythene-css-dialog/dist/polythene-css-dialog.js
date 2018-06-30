(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('polythene-core-css'), require('polythene-theme'), require('polythene-css-dialog-pane')) :
  typeof define === 'function' && define.amd ? define(['exports', 'polythene-core-css', 'polythene-theme', 'polythene-css-dialog-pane'], factory) :
  (factory((global.polythene = {}),global['polythene-core-css'],global['polythene-theme'],global['polythene-css-dialog-pane']));
}(this, (function (exports,polytheneCoreCss,polytheneTheme,polytheneCssDialogPane) { 'use strict';

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
    open: "pe-dialog--open", // class set to html element
    visible: "pe-dialog--visible", // class set to dialog element
    showBackdrop: "pe-dialog--backdrop",
    transition: "pe-dialog--transition",

    // lookup
    menuContent: menuClasses.content
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

    return _ref = {}, _defineProperty(_ref, "color_" + tint + "_background", function (selector, vars) {
      return [polytheneCoreCss.sel(selector, {
        " .pe-dialog__content": {
          backgroundColor: vars["color_" + tint + "_background"]
        }
      })];
    }), _defineProperty(_ref, "color_" + tint + "_text", function (selector, vars) {
      return [polytheneCoreCss.sel(selector, {
        " .pe-dialog__content": {
          color: vars["color_" + tint + "_text"]
        }
      })];
    }), _defineProperty(_ref, "color_" + tint + "_backdrop_background", function (selector, vars) {
      return [polytheneCoreCss.sel(selector, {
        " .pe-dialog__backdrop": {
          backgroundColor: vars["color_" + tint + "_backdrop_background"]
        }
      })];
    }), _ref;
  };

  var lightTintFns = _extends({}, generalFns, tintFns("light"));
  var darkTintFns = _extends({}, generalFns, tintFns("dark"));

  var color = polytheneCoreCss.createColor({
    varFns: { lightTintFns: lightTintFns, darkTintFns: darkTintFns }
  });

  var minWidth = "320px";

  var _backdrop = function _backdrop(selector) {
    return polytheneCoreCss.sel(selector, {
      ".pe-dialog--visible .pe-dialog__backdrop": {
        display: "block",
        opacity: 1
      }
    });
  };

  var varFns = {
    general_styles: function general_styles(selector) {
      return [polytheneCoreCss.sel(selector, [polytheneCoreCss.flex.layoutCenterCenter, {
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: polytheneTheme.vars.z_dialog,
        height: "100%", // 100vh would make the dialog go beneath Mobile Safari toolbar        
        transitionProperty: "opacity,background-color",

        ".pe-dialog--full-screen": {
          padding: 0,

          " .pe-dialog__content": {
            width: "100%" // for IE11
          }
        },

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
          display: "none"
        }],

        ".pe-dialog--backdrop": _backdrop(selector)
      }]), {
        ".pe-dialog__holder": {
          height: "100%",
          minWidth: minWidth
        }
      }];
    },
    animation_hide_css: function animation_hide_css(selector, vars) {
      return [polytheneCoreCss.sel(selector, [vars.animation_hide_css])];
    },
    position: function position(selector, vars) {
      return [polytheneCoreCss.sel(selector, {
        position: vars.position
      })];
    },
    padding_vertical: function padding_vertical(selector, vars) {
      return [!vars.full_screen && polytheneCoreCss.sel(selector, {
        paddingTop: vars.padding_vertical + "px",
        paddingBottom: vars.padding_vertical + "px"
      })];
    },
    padding_horizontal: function padding_horizontal(selector, vars) {
      return [!vars.full_screen && polytheneCoreCss.sel(selector, {
        paddingLeft: vars.padding_horizontal + "px",
        paddingRight: vars.padding_horizontal + "px"
      })];
    },
    animation_delay: function animation_delay(selector, vars) {
      return [polytheneCoreCss.sel(selector, {
        "&, .pe-dialog__content": {
          transitionDelay: vars.animation_delay
        }
      })];
    },
    animation_duration: function animation_duration(selector, vars) {
      return [polytheneCoreCss.sel(selector, {
        "&, .pe-dialog__content": {
          transitionDuration: vars.animation_duration
        }
      })];
    },
    animation_timing_function: function animation_timing_function(selector, vars) {
      return [polytheneCoreCss.sel(selector, {
        "&, .pe-dialog__content": {
          transitionTimingFunction: vars.animation_timing_function
        }
      })];
    },
    animation_show_css: function animation_show_css(selector, vars) {
      return [polytheneCoreCss.sel(selector, {
        ".pe-dialog--visible": vars.animation_show_css
      })];
    },
    border_radius: function border_radius(selector, vars) {
      return [!vars.full_screen && polytheneCoreCss.sel(selector, {
        " .pe-dialog__content": {
          borderRadius: vars.border_radius + "px"
        }
      })];
    },
    full_screen: function full_screen(selector, vars) {
      return [vars.full_screen && polytheneCssDialogPane.fullScreen(selector)];
    },
    backdrop: function backdrop(selector, vars) {
      return [vars.backdrop && _backdrop(selector)];
    }
  };

  var layout = polytheneCoreCss.createLayout({ varFns: varFns });

  var vars = {
    general_styles: true,

    animation_delay: "0s",
    animation_duration: ".220s",
    animation_hide_css: "opacity: 0;",
    animation_show_css: "opacity: 1;",
    animation_timing_function: "ease-in-out",
    border_radius: polytheneTheme.vars.unit_block_border_radius,
    padding_horizontal: 5 * polytheneTheme.vars.grid_unit_component,
    padding_vertical: 3 * polytheneTheme.vars.grid_unit_component,
    position: "fixed",

    // theme vars

    full_screen: false,

    // color vars

    color_light_backdrop_background: "rgba(0, 0, 0, .4)",
    color_dark_backdrop_background: "rgba(0, 0, 0, .5)",

    color_light_background: polytheneCoreCss.rgba(polytheneTheme.vars.color_light_background),
    color_dark_background: polytheneCoreCss.rgba(polytheneTheme.vars.color_dark_background),

    color_light_text: polytheneCoreCss.rgba(polytheneTheme.vars.color_light_foreground, polytheneTheme.vars.blend_light_text_regular),
    color_dark_text: polytheneCoreCss.rgba(polytheneTheme.vars.color_dark_foreground, polytheneTheme.vars.blend_dark_text_regular)
  };

  var fns = [layout, color];
  var selector = "." + classes.component;

  var addStyle = polytheneCoreCss.styler.createAddStyle(selector, fns, vars);

  var getStyle = polytheneCoreCss.styler.createGetStyle(selector, fns, vars);

  polytheneCoreCss.styler.addStyle({
    selectors: [selector],
    fns: fns,
    vars: vars
  });

  exports.addStyle = addStyle;
  exports.color = color;
  exports.getStyle = getStyle;
  exports.layout = layout;
  exports.vars = vars;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=polythene-css-dialog.js.map
