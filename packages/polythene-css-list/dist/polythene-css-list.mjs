import { createColor, sel, createLayout, rgba, styler } from 'polythene-core-css';
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
  insetH: "pe-list-tile--inset-h",
  insetV: "pe-list-tile--inset-v",
  selectable: "pe-list-tile--selectable",
  selected: "pe-list-tile--selected",
  rounded: "pe-list-tile--rounded",
  highlight: "pe-list-tile--highlight",
  sticky: "pe-list-tile--sticky",
  navigation: "pe-list-tile--navigation"
};

var classes = {
  component: "pe-list",
  // states
  border: "pe-list--border",
  compact: "pe-list--compact",
  hasHeader: "pe-list--header",
  indentedBorder: "pe-list--indented-border",
  padding: "pe-list--padding",
  paddingTop: "pe-list--padding-top",
  paddingBottom: "pe-list--padding-bottom",
  // lookup
  header: listTileClasses.header
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
  general_styles: function general_styles() {
    return [];
  }
};

var tintFns = function tintFns(tint) {
  var _ref;

  return _ref = {}, _defineProperty(_ref, "color_" + tint + "_background", function (selector, vars) {
    return [sel(selector, {
      backgroundColor: vars["color_" + tint + "_background"]
    })];
  }), _defineProperty(_ref, "color_" + tint + "_border", function (selector, vars) {
    var _sel;

    return [sel(selector, (_sel = {}, _defineProperty(_sel, "& + .pe-list", {
      borderTopColor: vars["color_" + tint + "_border"]
    }), _defineProperty(_sel, ".pe-list--border", {
      " .pe-list-tile": {
        ":not(:last-child)": {
          borderColor: vars["color_" + tint + "_border"]
        }
      }
    }), _defineProperty(_sel, ".pe-list--indented-border", {
      " .pe-list-tile": {
        " .pe-list-tile__content:not(.pe-list-tile__content-front)": {
          borderColor: vars["color_" + tint + "_border"]
        }
      }
    }), _sel))];
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

var borderStyle = function borderStyle(vars) {
  return {
    borderStyle: "none none solid none",
    borderWidth: vars.border_width_bordered + "px"
  };
};

var varFns = {
  general_styles: function general_styles(selector) {
    return [sel(selector, {
      flexGrow: 1,
      ".pe-list--header": {
        paddingTop: 0
      },
      ".pe-list--indented-border": {
        borderTop: "none"
      }
    })];
  },
  padding: function padding(selector, vars) {
    return [sel(selector, {
      ".pe-list--padding": {
        padding: vars.padding + "px 0"
      },
      ".pe-list--padding-top": {
        paddingTop: vars.padding + "px"
      },
      ".pe-list--padding-bottom": {
        paddingBottom: vars.padding + "px"
      }
    })];
  },
  padding_compact: function padding_compact(selector, vars) {
    return [sel(selector, {
      ".pe-list--compact": {
        padding: vars.padding_compact + "px 0"
      }
    })];
  },
  border_width_stacked: function border_width_stacked(selector, vars) {
    return [sel(selector, {
      "& + &": {
        borderStyle: "solid none none none",
        borderWidth: vars.border_width_stacked + "px"
      }
    })];
  },
  border_width_bordered: function border_width_bordered(selector, vars) {
    return [sel(selector, {
      ".pe-list--border": {
        " .pe-list-tile": {
          ":not(.pe-list-tile--header):not(:last-child)": {
            "&": borderStyle(vars)
          }
        }
      },
      ".pe-list--indented-border": {
        " .pe-list-tile": {
          ":not(.pe-list-tile--header):not(:last-child)": {
            " .pe-list-tile__content:not(.pe-list-tile__content-front)": borderStyle(vars)
          }
        }
      }
    })];
  }
};
var layout = createLayout({
  varFns: varFns
});

// @ts-check
/**
 * @type {ListVars} listVars
 */

var listVars = {
  /**
   * Generate general styles, not defined by variables
   */
  general_styles: true,
  border_width_bordered: 1,
  border_width_stacked: 1,
  padding: vars.grid_unit_component,
  // vertical padding
  padding_compact: vars.grid_unit_component * 3 / 4,
  color_light_border: rgba(vars.color_light_foreground, vars.blend_light_border_light),
  color_dark_border: rgba(vars.color_dark_foreground, vars.blend_dark_border_light) // background color may be set in theme; disabled by default
  // color_light_background: "inherit",
  // color_dark_background:  "inherit"

};

// @ts-check
var fns = [layout, color];
var selector = ".".concat(classes.component);
var addStyle = styler.createAddStyle(selector, fns, listVars);
var getStyle = styler.createGetStyle(selector, fns, listVars);
styler.addStyle({
  selectors: [selector],
  fns: fns,
  vars: listVars
});

export { addStyle, getStyle, color, layout, listVars as vars };
