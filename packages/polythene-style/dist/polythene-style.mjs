import { isClient } from 'polythene-core';
import { addWebFont } from 'polythene-utilities';
import { flex, styler } from 'polythene-core-css';

// Global style variables

//const isTablet = window.innerWidth >= 600;
var isDesktop = isClient ? window.innerWidth >= 1024 : true;

var grid_unit = 4;
var grid_unit_component = 8;

var animation_curve_slow_in_fast_out = "cubic-bezier(.4, 0, .2, 1)";
var animation_curve_slow_in_linear_out = "cubic-bezier(0, 0, .2, 1)";
var animation_curve_linear_in_fast_out = "cubic-bezier(.4, 0, 1, 1)";

var vars = {
  // grid
  grid_unit: grid_unit,
  grid_unit_component: grid_unit_component,
  grid_unit_menu: 56,
  grid_unit_icon_button: 6 * grid_unit_component, // 48

  // common sizes
  unit_block_border_radius: 2,
  unit_item_border_radius: 2,
  unit_indent: 72,
  unit_side_padding: isDesktop ? 24 : 16,

  // buttons
  unit_touch_height: 48,
  unit_icon_size_small: 2 * grid_unit_component, // 16
  unit_icon_size: 3 * grid_unit_component, // 24
  unit_icon_size_medium: 4 * grid_unit_component, // 32
  unit_icon_size_large: 5 * grid_unit_component, // 40

  // screen dimensions
  unit_screen_size_extra_large: 1280,
  unit_screen_size_large: 960,
  unit_screen_size_medium: 480,
  unit_screen_size_small: 320,

  // transitions
  animation_duration: ".18s",
  animation_curve_slow_in_fast_out: animation_curve_slow_in_fast_out,
  animation_curve_slow_in_linear_out: animation_curve_slow_in_linear_out,
  animation_curve_linear_in_fast_out: animation_curve_linear_in_fast_out,
  animation_curve_default: "ease-out",

  // font
  font_weight_light: 300,
  font_weight_normal: 400,
  font_weight_medium: 500,
  font_weight_bold: 700,
  font_size_title: 20,
  line_height: 1.3,

  // base colors
  color_primary: "33, 150, 243", // blue 500
  color_primary_active: "30, 136, 229", // blue 600
  color_primary_dark: "25, 118, 210", // blue 700
  color_primary_faded: "100, 181, 249", // blue 300
  color_primary_foreground: "255, 255, 255",

  color_light_background: "255, 255, 255",
  color_light_foreground: "0, 0, 0",
  color_dark_background: "34, 34, 34",
  color_dark_foreground: "255, 255, 255",

  // blends
  blend_light_text_primary: .87,
  blend_light_text_regular: .73,
  blend_light_text_secondary: .54,
  blend_light_text_tertiary: .40,
  blend_light_text_disabled: .26,
  blend_light_border_light: .11,
  blend_light_background_active: .14,
  blend_light_background_hover: .06,
  blend_light_background_hover_medium: .12, // for the lighter tinted icon buttons
  blend_light_background_disabled: .09,
  blend_light_overlay_background: .3,

  blend_dark_text_primary: 1,
  blend_dark_text_regular: .87,
  blend_dark_text_secondary: .70,
  blend_dark_text_tertiary: .40,
  blend_dark_text_disabled: .26,
  blend_dark_border_light: .10,
  blend_dark_background_active: .14,
  blend_dark_background_hover: .08,
  blend_dark_background_hoverMedium: .12, // for the lighter tinted icon buttons
  blend_dark_background_disabled: .12,
  blend_dark_overlay_background: .3,

  // css vendor prefixes
  prefixes_animation: ["o", "moz", "webkit"],
  prefixes_appearance: ["o", "moz", "ms", "webkit"],
  prefixes_background_size: ["o", "moz", "webkit"],
  prefixes_box_shadow: ["moz", "webkit"],
  prefixes_keyframes: ["o", "moz", "webkit"],
  prefixes_transform: ["o", "moz", "ms", "webkit"],
  prefixes_transition: ["o", "moz", "webkit"],
  prefixes_user_select: ["moz", "ms", "webkit"],

  // breakpoints
  breakpoint_small_handset_portrait: 0,
  breakpoint_medium_handset_portrait: 360,
  breakpoint_large_handset_portrait: 400,
  breakpoint_small_tablet_portrait: 600,
  breakpoint_large_tablet_portrait: 720,
  // landscape
  breakpoint_small_handset_landscape: 480,
  breakpoint_medium_handset_landscape: 600,
  breakpoint_large_handset_landscape: 720,

  // environment
  env_tablet: isClient ? window.innerWidth >= 600 : false,
  env_desktop: isClient ? window.innerWidth >= 1024 : true,

  // z-index
  z_menu: 1000,
  z_header_container: 2000,
  z_fixed_header_container: 3000,
  z_notification: 4000,
  z_dialog: 5000
};

var fontSize = 14;

var styles = [{
  " h1, h2, h3, h4, h5, h6, p": {
    margin: 0,
    padding: 0
  }
}, {
  " h1 small, h2 small, h3 small, h4 small, h5 small, h6 small": {
    "font-weight": vars.font_weight_normal,
    "line-height": vars.line_height,
    "letter-spacing": "-0.02em",
    "font-size": "0.6em"
  }
}, {
  " h1": {
    "font-size": "56px",
    "font-weight": vars.font_weight_normal,
    "line-height": vars.line_height,
    "margin-top": "24px",
    "margin-bottom": "24px"
  }
}, {
  " h2": {
    "font-size": "45px",
    "font-weight": vars.font_weight_normal,
    "line-height": "48px",
    "margin-top": "24px",
    "margin-bottom": "24px"
  }
}, {
  " h3": {
    "font-size": "34px",
    "font-weight": vars.font_weight_normal,
    "line-height": "40px",
    "margin-top": "24px",
    "margin-bottom": "24px"
  }
}, {
  " h4": {
    "font-size": "24px",
    "font-weight": vars.font_weight_normal,
    "line-height": "32px",
    "-moz-osx-font-smoothing": "grayscale",
    "margin-top": "24px",
    "margin-bottom": "16px"
  }
}, {
  " h5": {
    "font-size": "20px",
    "font-weight": vars.font_weight_medium,
    "line-height": "1",
    "letter-spacing": "-0.02em",
    "margin-top": "24px",
    "margin-bottom": "16px"
  }
}, {
  " h6": {
    "font-size": "16px",
    "font-weight": vars.font_weight_normal,
    "line-height": "24px",
    "letter-spacing": "0.04em",
    "margin-top": "24px",
    "margin-bottom": "16px"
  }
}, {
  " html, body": {
    "font-size": fontSize + "px",
    "line-height": "20px",
    "font-weight": vars.font_weight_normal
  },
  " p": {
    "font-size": fontSize + "px",
    "font-weight": vars.font_weight_normal,
    "line-height": "24px",
    "letter-spacing": "0",
    "margin-bottom": "16px"
  },
  " blockquote": {
    "position": "relative",
    "font-size": "24px",
    "font-weight": vars.font_weight_normal,
    "font-style": "italic",
    "line-height": vars.line_height,
    "letter-spacing": "0.08em",
    "margin-top": "24px",
    "margin-bottom": "16px"
  },
  " ul, ol": {
    "font-size": fontSize + "px",
    "font-weight": vars.font_weight_normal,
    "line-height": "24px",
    "letter-spacing": 0
  },
  " b, strong": {
    "font-weight": vars.font_weight_medium
  }
}];

var resetStyles = [{
  // apply a natural box layout model to all elements, but allow elements to change
  " html": {
    "box-sizing": "border-box"
  },
  " *, *:before, *:after": {
    "box-sizing": "inherit"
  },
  " *": [
  // remove tap highlight in mobile Safari
  {
    "-webkit-tap-highlight-color": "rgba(0,0,0,0)"
  }, {
    "-webkit-tap-highlight-color": "transparent" // For some Androids
  }],

  // Remove dotted link borders in Firefox
  " a, a:active, a:focus, input:active, *:focus": {
    outline: 0
  },

  // Mobile Safari: override default fading of disabled elements
  " input:disabled": {
    opacity: 1
  }
}];

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var fontParam = "Roboto:400,500,700";

var baseRobotoStyle = [{
  "html, body, button, input, select, textarea": {
    fontFamily: "Roboto, Helvetica, Arial, sans-serif"
  }
}];

var robotoStyles = [{
  "@import": "url(\"https://fonts.googleapis.com/css?family=" + fontParam + "\")"
}].concat(baseRobotoStyle);

var addTypography = function addTypography() {
  addWebFont("google", "Roboto:400,500,700,400italic:latin");
  styler.add("pe-material-design-typography", resetStyles, baseRobotoStyle, typographyStyles);
};

var typographyStyles = [].concat(_toConsumableArray(robotoStyles), _toConsumableArray(styles), _toConsumableArray(resetStyles));

var flexClasses = [{
  ".layout, .layout.horizontal": flex.layout,
  ".layout.horizontal.inline, .layout.vertical.inline": flex.layoutInline,
  ".layout.horizontal": flex.layoutHorizontal,
  ".layout.horizontal.reverse": flex.layoutHorizontalReverse,
  ".layout.vertical": flex.layoutVertical,
  ".layout.vertical.reverse": flex.layoutVerticalReverse,
  ".layout.wrap": flex.layoutWrap,
  ".layout.wrap.reverse": flex.layoutWrapReverse,
  ".flex": flex.flex(1),
  ".span.flex": { "display": "block" }, // for IE 10
  ".flex.auto-vertical": flex.flexAutoVertical,
  ".flex.auto": flex.flexAuto,
  ".flex.none": flex.flexIndex("none"),
  ".flex.one": flex.flexIndex(1),
  ".flex.two": flex.flexIndex(2),
  ".flex.three": flex.flexIndex(3),
  ".flex.four": flex.flexIndex(4),
  ".flex.five": flex.flexIndex(5),
  ".flex.six": flex.flexIndex(6),
  ".flex.seven": flex.flexIndex(7),
  ".flex.eight": flex.flexIndex(8),
  ".flex.nine": flex.flexIndex(9),
  ".flex.ten": flex.flexIndex(10),
  ".flex.eleven": flex.flexIndex(11),
  ".flex.twelve": flex.flexIndex(12),

  // alignment in cross axis
  ".layout.start": flex.layoutStart,
  ".layout.center, .layout.center-center": flex.layoutCenter,
  ".layout.end": flex.layoutEnd,

  // alignment in main axis
  ".layout.start-justified": flex.layoutStartJustified,
  ".layout.center-justified, .layout.center-center": flex.layoutCenterJustified,
  ".layout.end-justified": flex.layoutEndJustified,
  ".layout.around-justified": flex.layoutAroundJustified,
  ".layout.justified": flex.layoutJustified,

  // self alignment
  ".self-start": flex.selfStart,
  ".self-center": flex.selfCenter,
  ".self-end": flex.selfEnd,
  ".self-stretch": flex.selfStretch
}];

var commonClasses = [{
  ".pe-block": {
    display: "block"
  },

  ".pe-inline-block": {
    display: "inline-block"
  },

  // ie support for hidden
  ".pe-hidden": {
    display: "none !important"
  },

  ".pe-relative": {
    position: "relative"
  },

  ".pe-absolute": {
    position: "absolute"
  },

  ".pe-fit": {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  },

  ".pe-fullbleed": {
    margin: 0,
    height: "100vh"
  }
}];

function _toConsumableArray$1(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var layoutStyles = [].concat(_toConsumableArray$1(flexClasses), _toConsumableArray$1(commonClasses));

var addLayoutStyles = function addLayoutStyles() {
  return styler.add("pe-layout", flexClasses, commonClasses);
};

export { vars, typographyStyles, addTypography, layoutStyles, addLayoutStyles };
