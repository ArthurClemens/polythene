import { sel, createColor, selectorRTL, createLayout, rgba, styler } from 'polythene-core-css';
import { vars } from 'polythene-theme';

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

var classes = {
  component: "pe-menu",

  // elements
  content: "pe-menu__content",
  placeholder: "pe-menu__placeholder",
  target: "pe-menu__target",

  // states
  permanent: "pe-menu--permanent",
  fullHeight: "pe-menu--full-height",
  floating: "pe-menu--floating",
  visible: "pe-menu--visible",
  width_auto: "pe-menu--width-auto",
  width_n: "pe-menu--width-",

  // lookup
  listTile: listTileClasses.component,
  selectedListTile: listTileClasses.selected
};

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var generalFns = {
  general_styles: function general_styles(selector) {
    return [];
  } // eslint-disable-line no-unused-vars
};

var tintFns = function tintFns(tint) {
  return _defineProperty({}, "color_" + tint + "_background", function (selector, vars$$1) {
    return [sel(selector, {
      " .pe-menu__content": {
        "background-color": vars$$1["color_" + tint + "_background"]
      }
    })];
  });
};

var lightTintFns = _extends({}, generalFns, tintFns("light"));
var darkTintFns = _extends({}, generalFns, tintFns("dark"));

var color = createColor({
  varFns: { lightTintFns: lightTintFns, darkTintFns: darkTintFns }
});

function _defineProperty$1(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var alignSide = function alignSide(isRTL) {
  return function () {
    return {
      textAlign: isRTL ? "right" : "left"
    };
  };
};

var alignLeft = alignSide(false);
var alignRight = alignSide(true);

var unifySize = function unifySize(vars$$1, size) {
  return size < vars$$1.min_size ? vars$$1.min_size : size;
};

var widthClass = function widthClass(size) {
  var sizeStr = size.toString().replace(".", "-");
  return "pe-menu--width-" + sizeStr;
};

var widthStyle = function widthStyle(vars$$1, size) {
  var s = unifySize(vars$$1, size);
  return _defineProperty$1({}, "." + widthClass(s), {
    width: vars$$1.size_factor * s + "px"
    // We can't set maxWidth because we don't know the size of the container
  });
};

var sizes_min_size_size_factor = function sizes_min_size_size_factor(selector, vars$$1) {
  return sel(selector, [vars$$1.sizes.map(function (size) {
    return widthStyle(vars$$1, size);
  }), {
    minWidth: vars.grid_unit_menu * vars$$1.min_size + "px"
  }]);
};

var varFns = {
  general_styles: function general_styles(selector, vars$$1) {
    return [sel(selector, [alignLeft(vars$$1), {
      transitionProperty: "all",
      zIndex: vars.z_menu,
      opacity: 0,
      position: "absolute",

      ".pe-menu--width-auto": {
        width: "auto"
      },

      ".pe-menu--permanent": {
        position: "relative",
        opacity: 1,
        zIndex: 0
      },

      " .pe-menu__content": {
        width: "100%"
      },

      ".pe-menu--full-height": {
        height: "100%",

        " .pe-menu__content": {
          height: "100%"
        }
      }
    }]), _defineProperty$1({}, selectorRTL(selector), alignRight(vars$$1))];
  },
  animation_delay: function animation_delay(selector, vars$$1) {
    return [sel(selector, {
      transitionDelay: vars$$1.animation_delay
    })];
  },
  animation_duration: function animation_duration(selector, vars$$1) {
    return [sel(selector, {
      transitionDuration: vars$$1.animation_duration
    })];
  },
  animation_timing_function: function animation_timing_function(selector, vars$$1) {
    return [sel(selector, {
      transitionTimingFunction: vars$$1.animation_timing_function
    })];
  },
  animation_show_css: function animation_show_css(selector, vars$$1) {
    return [sel(selector, {
      ".pe-menu--visible": vars$$1.animation_show_css
    })];
  },
  animation_hide_css: function animation_hide_css(selector, vars$$1) {
    return [sel(selector, [vars$$1.animation_hide_css])];
  },
  sizes: function sizes(selector, vars$$1) {
    return [sizes_min_size_size_factor(selector, vars$$1)];
  },
  min_size: function min_size(selector, vars$$1) {
    return [sizes_min_size_size_factor(selector, vars$$1)];
  },
  size_factor: function size_factor(selector, vars$$1) {
    return [sizes_min_size_size_factor(selector, vars$$1)];
  },
  border_radius: function border_radius(selector, vars$$1) {
    return [sel(selector, {
      ".pe-menu--floating": {
        " .pe-menu__content": {
          borderRadius: vars$$1.border_radius + "px"
        }
      }
    })];
  }
};

var layout = createLayout({ varFns: varFns });

var vars$1 = {
  general_styles: true,

  animation_delay: "0s",
  animation_duration: ".220s",
  animation_hide_css: "opacity: 0;",
  animation_show_css: "opacity: 1;",
  animation_timing_function: "ease-in-out",
  border_radius: vars.unit_block_border_radius,
  min_size: 1.5,
  size_factor: vars.grid_unit_menu,
  sizes: [1, 1.5, 2, 3, 4, 5, 6, 7],

  color_light_background: rgba(vars.color_light_background),
  color_dark_background: rgba(vars.color_dark_background)
  // text colors are set by content, usually list tiles
};

var fns = [layout, color];
var selector = "." + classes.component;

var addStyle = function addStyle(customSelector, customVars) {
  return styler.generateCustomStyles([customSelector, selector], vars$1, customVars, fns);
};

var getStyle = function getStyle(customSelector, customVars) {
  return customSelector ? styler.createCustomStyleSheets([customSelector, selector], vars$1, customVars, fns) : styler.createStyleSheets([selector], vars$1, fns);
};

styler.generateStyles([selector], vars$1, fns);

export { addStyle, color, getStyle, layout, vars$1 as vars };
