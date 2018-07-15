import { sel, createColor, rgba, mixin, flex, createLayout, createMarker, styler } from 'polythene-core-css';
import { vars } from 'polythene-theme';
import { sharedVars, sharedVarFns } from 'polythene-css-shadow';
import { fullScreen } from 'polythene-css-dialog-pane';

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

  return _ref = {}, _defineProperty(_ref, "color_" + tint + "_background", function (selector, vars$$1) {
    return [sel(selector, {
      " .pe-dialog__content": {
        backgroundColor: vars$$1["color_" + tint + "_background"]
      }
    })];
  }), _defineProperty(_ref, "color_" + tint + "_text", function (selector, vars$$1) {
    return [sel(selector, {
      " .pe-dialog__content": {
        color: vars$$1["color_" + tint + "_text"]
      }
    })];
  }), _defineProperty(_ref, "color_" + tint + "_backdrop_background", function (selector, vars$$1) {
    return [sel(selector, {
      " .pe-dialog__backdrop": {
        backgroundColor: vars$$1["color_" + tint + "_backdrop_background"]
      }
    })];
  }), _ref;
};

var lightTintFns = _extends({}, generalFns, tintFns("light"));
var darkTintFns = _extends({}, generalFns, tintFns("dark"));

var color = createColor({
  varFns: { lightTintFns: lightTintFns, darkTintFns: darkTintFns }
});

var _extends$1 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var behaviorVars = {
  full_screen: false,
  modal: false
};

var themeVars = _extends$1({}, {
  backdrop: false
}, behaviorVars, sharedVars);

var vars$1 = _extends$1({}, {
  general_styles: true,

  animation_delay: "0s",
  animation_duration: ".220s",
  animation_hide_css: "opacity: 0;",
  animation_show_css: "opacity: 1;",
  animation_timing_function: "ease-in-out",
  border_radius: vars.unit_block_border_radius,
  position: "fixed",

  // color vars

  color_light_backdrop_background: "rgba(0, 0, 0, .4)",
  color_dark_backdrop_background: "rgba(0, 0, 0, .5)",

  color_light_background: rgba(vars.color_light_background),
  color_dark_background: rgba(vars.color_dark_background),

  color_light_text: rgba(vars.color_light_foreground, vars.blend_light_text_regular),
  color_dark_text: rgba(vars.color_dark_foreground, vars.blend_dark_text_regular)
}, themeVars);

var _extends$2 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var minWidth = "320px";

var _backdrop = function _backdrop(selector) {
  return sel(selector, {
    ".pe-dialog--visible .pe-dialog__backdrop": {
      display: "block",
      opacity: 1
    }
  });
};

var fullScreen$1 = function fullScreen$$1(selector, vars$$1) {
  return sel(selector, [createMarker(vars$$1, behaviorVars), {
    padding: 0,

    " .pe-dialog__content": {
      width: "100%" // for IE 11
    }
  }, fullScreen(selector)]);
};

var _modal = function _modal(selector, vars$$1) {
  return sel(selector, [createMarker(vars$$1, behaviorVars)]);
};

var varFns = _extends$2({
  general_styles: function general_styles(selector, vars$$1) {
    return [sel(selector, [flex.layoutCenterCenter, {
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      zIndex: vars.z_dialog,
      height: "100%", // 100vh would make the dialog go beneath Mobile Safari toolbar        
      transitionProperty: "opacity,background-color,transform",

      ".pe-dialog--full-screen": fullScreen$1(selector, vars$$1),
      ".pe-dialog--modal": _modal(selector),

      " .pe-dialog__content": {
        position: "relative",
        transitionProperty: "all"
      },

      " .pe-dialog__backdrop": [mixin.defaultTransition("all"), // animation duration is set in component options
      {
        position: "absolute",
        opacity: 0,
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        pointerEvents: "none"
      }],

      ".pe-dialog--backdrop": _backdrop(selector)
    }]), {
      ".pe-dialog__holder": {
        height: "100%",
        minWidth: minWidth
      }
    }];
  },
  animation_hide_css: function animation_hide_css(selector, vars$$1) {
    return [sel(selector, [vars$$1.animation_hide_css])];
  },
  position: function position(selector, vars$$1) {
    return [sel(selector, {
      position: vars$$1.position
    })];
  },
  animation_delay: function animation_delay(selector, vars$$1) {
    return [sel(selector, {
      "&, .pe-dialog__content": {
        transitionDelay: vars$$1.animation_delay
      }
    })];
  },
  animation_duration: function animation_duration(selector, vars$$1) {
    return [sel(selector, {
      "&, .pe-dialog__content": {
        transitionDuration: vars$$1.animation_duration
      }
    })];
  },
  animation_timing_function: function animation_timing_function(selector, vars$$1) {
    return [sel(selector, {
      "&, .pe-dialog__content": {
        transitionTimingFunction: vars$$1.animation_timing_function
      }
    })];
  },
  animation_show_css: function animation_show_css(selector, vars$$1) {
    return [sel(selector, {
      ".pe-dialog--visible": vars$$1.animation_show_css
    })];
  },
  border_radius: function border_radius(selector, vars$$1) {
    return [!vars$$1.full_screen && sel(selector, {
      " .pe-dialog__content": {
        borderTopLeftRadius: vars$$1.border_radius + "px",
        borderTopRightRadius: vars$$1.border_radius + "px",
        borderBottomLeftRadius: vars$$1.border_radius + "px",
        borderBottomRightRadius: vars$$1.border_radius + "px"
      }
    })];
  },
  // Theme vars
  backdrop: function backdrop(selector, vars$$1) {
    return vars$$1.backdrop && _backdrop(selector, vars$$1);
  },
  full_screen: function full_screen(selector, vars$$1) {
    return vars$$1.full_screen && fullScreen$1(selector, vars$$1);
  },
  modal: function modal(selector, vars$$1) {
    return vars$$1.modal && _modal(selector, vars$$1);
  }
}, sharedVarFns);

var layout = createLayout({ varFns: varFns });

var fns = [layout, color];
var selector = "." + classes.component;

var addStyle = styler.createAddStyle(selector, fns, vars$1);

var getStyle = styler.createGetStyle(selector, fns, vars$1);

styler.addStyle({
  selectors: [selector],
  fns: fns,
  vars: vars$1
});

export { addStyle, color, getStyle, layout, vars$1 as vars };
