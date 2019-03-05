import { createColor, sel, createLayout, flex, mixin, selectorRTL, rgba, styler } from 'polythene-core-css';
import { vars as vars$1 } from 'polythene-theme';

var classes = {
  // Toolbar
  component: "pe-toolbar",
  // states
  compact: "pe-toolbar--compact",
  appBar: "pe-toolbar--app-bar",
  // Toolbar title
  // elements
  title: "pe-toolbar__title",
  // states
  centeredTitle: "pe-toolbar__title--center",
  indentedTitle: "pe-toolbar__title--indent",
  fullbleed: "pe-toolbar--fullbleed",
  border: "pe-toolbar--border"
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
      " .pe-toolbar__title": {
        "&, a:link, a:visited": {
          color: vars["color_" + tint + "_text"]
        }
      }
    })];
  }), _defineProperty(_ref, "color_" + tint + "_background", function (selector, vars) {
    return [sel(selector, {
      backgroundColor: vars["color_" + tint + "_background"]
    })];
  }), _defineProperty(_ref, "color_" + tint + "_border", function (selector, vars) {
    return [sel(selector, {
      ".pe-toolbar--border": {
        borderColor: vars["color_" + tint + "_border"]
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

/**
 * 
 * @param {string} breakpointSel 
 */

var breakpoint = function breakpoint(breakpointSel) {
  return (
    /**
     * @param {string} selector
     * @param {object} o
     */
    function (selector, o) {
      return _defineProperty({}, breakpointSel, _defineProperty({}, selector, o));
    }
  );
};
/**
 * @param {object} params
 * @param {string} params.selector
 * @param {object} params.vars
 * @param {boolean} [params.isRTL]
 * @param {boolean} [params.isLarge]
 */


var indent_padding_side = function indent_padding_side(_ref2) {
  var _peToolbar__title;

  var selector = _ref2.selector,
      vars = _ref2.vars,
      isRTL = _ref2.isRTL,
      isLarge = _ref2.isLarge;
  var indent = isLarge ? vars.indent_large : vars.indent;
  var fn = isLarge ? breakpointTabletPortraitUp : sel;
  return fn(selector, {
    " .pe-toolbar__title--indent, .pe-toolbar__title.pe-toolbar__title--indent": (_peToolbar__title = {}, _defineProperty(_peToolbar__title, isRTL ? "marginLeft" : "marginRight", 0), _defineProperty(_peToolbar__title, isRTL ? "marginRight" : "marginLeft", indent + "px"), _peToolbar__title)
  });
};
/**
 * @param {object} params
 * @param {string} params.selector
 * @param {object} params.vars
 * @param {boolean} [params.isRTL]
 * @param {boolean} [params.isLarge]
 */


var _title_padding = function title_padding(_ref3) {
  var _spanPeToolbar;

  var selector = _ref3.selector,
      vars = _ref3.vars,
      isRTL = _ref3.isRTL,
      isLarge = _ref3.isLarge;
  var title_padding = isLarge ? vars.title_padding_large : vars.title_padding;
  var fn = isLarge ? breakpointTabletPortraitUp : sel;
  return fn(selector, {
    " > span, .pe-toolbar__title": (_spanPeToolbar = {}, _defineProperty(_spanPeToolbar, isRTL ? "marginLeft" : "marginRight", 0), _defineProperty(_spanPeToolbar, isRTL ? "marginRight" : "marginLeft", title_padding + "px"), _spanPeToolbar),
    " .pe-toolbar__title--center": {
      marginLeft: title_padding + "px",
      marginRight: title_padding + "px"
    }
  });
};
/**
 * @param {object} params
 * @param {string} params.selector
 * @param {object} params.vars
 * @param {boolean} [params.isRTL]
 * @param {boolean} [params.isLarge]
 */


var title_padding_title_after_icon_padding = function title_padding_title_after_icon_padding(_ref4) {
  var _notPeToolbar_;

  var selector = _ref4.selector,
      vars = _ref4.vars,
      isRTL = _ref4.isRTL,
      isLarge = _ref4.isLarge;
  var padding = isLarge ? vars.title_after_icon_padding_large : vars.title_after_icon_padding;
  var fn = isLarge ? breakpointTabletPortraitUp : sel;
  return fn(selector, {
    " > :not(.pe-toolbar__title):first-child:not(.pe-toolbar__title--indent):first-child": (_notPeToolbar_ = {}, _defineProperty(_notPeToolbar_, isRTL ? "marginRight" : "marginLeft", 0), _defineProperty(_notPeToolbar_, isRTL ? "marginLeft" : "marginRight", padding + "px"), _notPeToolbar_)
  });
};

var breakpointPhoneOnly = breakpoint("@media (min-width: ".concat(vars$1.breakpoint_for_phone_only, "px) and (orientation: landscape)"));
var breakpointTabletPortraitUp = breakpoint("@media (min-width: ".concat(vars$1.breakpoint_for_tablet_portrait_up, "px)"));
var varFns = {
  general_styles: function general_styles(selector) {
    return [sel(selector, [flex.layout, flex.layoutHorizontal, flex.layoutCenter, {
      position: "relative",
      zIndex: vars$1.z_toolbar,
      " > a": {
        textDecoration: "none"
      },
      ".pe-toolbar--fullbleed": {
        padding: 0
      },
      ".pe-toolbar--border": {
        borderWidth: "1px",
        borderStyle: "none none solid none"
      },
      " > *": {
        flexShrink: 0
      },
      " > span, .pe-toolbar__title, .pe-toolbar__title--indent": {
        width: "100%",
        display: "block",
        wordBreak: "break-all",
        overflow: "hidden",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap",
        flexShrink: 1
      },
      " .pe-toolbar__title--center": {
        textAlign: "center",
        justifyContent: "center"
      },
      " > .pe-action": {
        paddingLeft: "12px",
        paddingRight: "12px"
      },
      " .pe-fit": [mixin.fit(), {
        margin: 0
      }]
    }])];
  },
  height: function height(selector, vars) {
    return [sel(selector, {
      height: vars.height + "px"
    })];
  },
  height_compact: function height_compact(selector, vars) {
    return [sel(selector, {
      ".pe-toolbar--compact": {
        height: vars.height_compact + "px"
      }
    }), breakpointPhoneOnly(selector, {
      height: vars.height + "px"
    })];
  },
  line_height: function line_height(selector, vars) {
    return [sel(selector, {
      lineHeight: vars.line_height + "em",
      " > span, .pe-toolbar__title, .pe-toolbar__title--indent": {
        lineHeight: vars.line_height
      }
    })];
  },
  font_size: function font_size(selector, vars) {
    return [sel(selector, {
      " > span, .pe-toolbar__title, .pe-toolbar__title--indent, .pe-action": {
        fontSize: vars.font_size + "px"
      }
    })];
  },
  font_weight: function font_weight(selector, vars) {
    return [sel(selector, {
      " > span, .pe-toolbar__title, .pe-toolbar__title--indent": {
        fontWeight: vars.font_weight
      }
    })];
  },
  padding_side: function padding_side(selector, vars) {
    return [sel(selector, {
      padding: "0 " + vars.padding_side + "px"
    }), indent_padding_side({
      selector: selector,
      vars: vars
    }), indent_padding_side({
      selector: selectorRTL(selector),
      vars: vars,
      isRTL: true
    })];
  },
  indent: function indent(selector, vars) {
    return [indent_padding_side({
      selector: selector,
      vars: vars
    }), indent_padding_side({
      selector: selectorRTL(selector),
      vars: vars,
      isRTL: true
    })];
  },
  indent_large: function indent_large(selector, vars) {
    return [indent_padding_side({
      selector: selector,
      vars: vars,
      isLarge: true
    }), indent_padding_side({
      selector: selectorRTL(selector),
      vars: vars,
      isRTL: true,
      isLarge: true
    })];
  },
  title_padding: function title_padding(selector, vars) {
    return [_title_padding({
      selector: selector,
      vars: vars
    }), _title_padding({
      selector: selectorRTL(selector),
      vars: vars,
      isRTL: true
    })];
  },
  title_padding_large: function title_padding_large(selector, vars) {
    return [_title_padding({
      selector: selector,
      vars: vars,
      isLarge: true
    }), _title_padding({
      selector: selectorRTL(selector),
      vars: vars,
      isRTL: true,
      isLarge: true
    })];
  },
  title_after_icon_padding: function title_after_icon_padding(selector, vars) {
    return [title_padding_title_after_icon_padding({
      selector: selector,
      vars: vars
    }), title_padding_title_after_icon_padding({
      selector: selectorRTL(selector),
      vars: vars,
      isRTL: true
    })];
  },
  title_after_icon_padding_large: function title_after_icon_padding_large(selector, vars) {
    return [title_padding_title_after_icon_padding({
      selector: selector,
      vars: vars,
      isLarge: true
    }), title_padding_title_after_icon_padding({
      selector: selectorRTL(selector),
      vars: vars,
      isRTL: true,
      isLarge: true
    })];
  },
  height_large: function height_large(selector, vars) {
    return [breakpointTabletPortraitUp(selector, {
      height: vars.height_large + "px"
    })];
  },
  padding_side_large: function padding_side_large(selector, vars) {
    return [breakpointTabletPortraitUp(selector, {
      padding: "0 " + vars.padding_side_large + "px"
    })];
  }
};
var layout = createLayout({
  varFns: varFns
});

// @ts-check
var padding_side = vars$1.grid_unit_component * 2 - 12; // 16 - 12 = 4

var padding_side_large = vars$1.grid_unit_component * 3 - 12; // 24 - 12 = 12

var vars = {
  /**
   * Generate general styles, not defined by variables
   */
  general_styles: true,
  font_size: 20,
  font_weight: 400,
  height: vars$1.grid_unit_component * 7,
  // 56
  height_compact: vars$1.grid_unit_component * 6,
  // 48
  height_large: vars$1.grid_unit_component * 8,
  // 64
  line_height: vars$1.line_height,
  padding_side: padding_side,
  padding_side_large: padding_side_large,
  indent: vars$1.unit_indent - padding_side,
  indent_large: vars$1.unit_indent_large - padding_side_large,
  title_after_icon_padding: 4,
  title_after_icon_padding_large: 12,
  title_padding: 16,
  title_padding_large: 8,
  color_light_text: rgba(vars$1.color_light_foreground, vars$1.blend_light_text_primary),
  color_light_border: rgba(vars$1.color_light_foreground, vars$1.blend_light_border_light),
  color_light_background: rgba(vars$1.color_light_background),
  color_dark_text: rgba(vars$1.color_dark_foreground, vars$1.blend_dark_text_primary),
  color_dark_border: rgba(vars$1.color_dark_foreground, vars$1.blend_dark_border_light),
  color_dark_background: rgba(vars$1.color_dark_background)
};

// @ts-check
var fns = [layout, color];
var selector = ".".concat(classes.component);
var addStyle = styler.createAddStyle(selector, fns, vars);
var getStyle = styler.createGetStyle(selector, fns, vars);
styler.addStyle({
  selectors: [selector],
  fns: fns,
  vars: vars
});

export { addStyle, getStyle, color, layout, vars };
