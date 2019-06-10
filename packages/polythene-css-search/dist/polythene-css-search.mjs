import { createColor, sel, createLayout, flex, rgba, styler } from 'polythene-core-css';
import { vars } from 'polythene-theme';

var classes = {
  component: "pe-search",
  // elements
  content: "pe-search__content",
  // states
  searchFullWidth: "pe-search--full-width",
  searchInset: "pe-search--inset"
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
    return [sel(selector, {
      " .pe-textfield__input-area": {
        backgroundColor: "transparent"
      }
    })];
  }
};

var tintFns = function tintFns(tint) {
  var _ref;

  return _ref = {}, _defineProperty(_ref, "color_" + tint + "_background", function (selector, vars) {
    return [sel(selector, {
      backgroundColor: vars["color_" + tint + "_background"]
    })];
  }), _defineProperty(_ref, "color_" + tint + "_label_text", function (selector, vars) {
    return [sel(selector, {
      " .pe-textfield": {
        " .pe-textfield__label": {
          color: vars["color_" + tint + "_label_text"]
        }
      }
    })];
  }), _defineProperty(_ref, "color_" + tint + "_input_text", function (selector, vars) {
    return [sel(selector, {
      " .pe-textfield": {
        " .pe-textfield__input": {
          color: vars["color_" + tint + "_input_text"]
        }
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

var inset_height_line_height_input = function inset_height_line_height_input(selector, vars) {
  var inset_input_padding_v = (vars.inset_height - vars.line_height_input) / 2;
  return sel(selector, {
    ".pe-search--inset": {
      " .pe-textfield__input, .pe-textfield__label": {
        paddingTop: inset_input_padding_v + "px",
        paddingBottom: inset_input_padding_v + "px"
      }
    }
  });
};

var full_width_height_line_height_input = function full_width_height_line_height_input(selector, vars) {
  var full_width_input_padding_v = (vars.full_width_height - vars.line_height_input) / 2;
  return sel(selector, {
    ".pe-search--full-width": {
      " .pe-textfield__input, .pe-textfield__label": {
        paddingTop: full_width_input_padding_v + "px",
        paddingBottom: full_width_input_padding_v + "px"
      }
    }
  });
};

var varFns = {
  general_styles: function general_styles(selector) {
    return [sel(selector, [flex.flex(), {
      position: "relative",
      // necessary when a shadow is added
      " .pe-textfield": [flex.flex(), {
        alignItems: "center",
        padding: 0,
        // prevent that neighboring icon button with ripple hides the cursor
        position: "relative",
        zIndex: 1,
        " .pe-textfield__input-area": {
          padding: 0,
          ":after": {
            display: "none"
          }
        },
        " .pe-textfield__input": {
          // reset
          border: "none"
        },
        " .pe-textfield__label": {
          // reset
          top: 0,
          bottom: 0
        }
      }],
      " .pe-search__content": {
        "&, .pe-textfield": flex.layoutHorizontal,
        "&, .pe-textfield__input-area": {
          flexGrow: 1
        }
      },
      " .pe-search__content > *": [flex.layoutVertical, flex.selfCenter],
      ".pe-search--inset": {
        "&, .pe-textfield__input-area, .pe-textfield__input, .pe-textfield__label": {
          padding: 0
        }
      }
    }])];
  },
  font_size_input: function font_size_input(selector, vars) {
    return [sel(selector, {
      " .pe-textfield": {
        " .pe-textfield__input, .pe-textfield__label": {
          fontSize: vars.font_size_input + "px"
        }
      }
    })];
  },
  line_height_input: function line_height_input(selector, vars) {
    return [sel(selector, {
      " .pe-textfield__input, .pe-textfield__label": {
        lineHeight: vars.line_height_input + "px"
      }
    }), inset_height_line_height_input(selector, vars)];
  },
  inset_border_radius: function inset_border_radius(selector, vars) {
    return [sel(selector, {
      ".pe-search--inset": {
        "border-radius": vars.inset_border_radius + "px"
      }
    })];
  },
  inset_side_padding: function inset_side_padding(selector, vars) {
    return [sel(selector, {
      ".pe-search--inset": {
        padding: "0 " + vars.inset_side_padding + "px"
      }
    })];
  },
  inset_height: function inset_height(selector, vars) {
    return [sel(selector, {
      ".pe-search--inset": {
        "&, .pe-textfield__input-area, .pe-textfield__input, .pe-textfield__label": {
          padding: 0,
          height: vars.inset_height + "px"
        }
      }
    }), inset_height_line_height_input(selector, vars)];
  },
  full_width_height: function full_width_height(selector, vars) {
    return [sel(selector, {
      ".pe-search--full-width": {
        "&, .pe-textfield__input-area, .pe-textfield__input, .pe-textfield__label": {
          height: vars.full_width_height + "px"
        }
      }
    }), full_width_height_line_height_input(selector, vars)];
  },
  inset_input_indent: function inset_input_indent(selector, vars) {
    return [sel(selector, {
      ".pe-search--inset": {
        " .pe-textfield__input, .pe-textfield__label": {
          paddingLeft: vars.inset_input_indent + "px"
        }
      }
    })];
  },
  inset_input_right_padding: function inset_input_right_padding(selector, vars) {
    return [sel(selector, {
      ".pe-search--inset": {
        " .pe-textfield__input, .pe-textfield__label": {
          paddingRight: vars.inset_input_right_padding + "px"
        }
      }
    })];
  },
  full_width_side_padding: function full_width_side_padding(selector, vars$1) {
    var full_width_input_indent = vars.unit_indent - vars$1.full_width_side_padding - vars.grid_unit_icon_button;
    return sel(selector, {
      ".pe-search--full-width": {
        padding: "0 " + vars$1.full_width_side_padding + "px",
        " .pe-textfield__input, .pe-textfield__label": {
          paddingLeft: full_width_input_indent + "px"
        }
      },
      ".pe-search--full-width + .pe-list .pe-list-tile": {
        "> :first-child": {
          paddingLeft: vars$1.full_width_side_padding + "px"
        },
        "> :last-child": {
          paddingRight: vars$1.full_width_side_padding + "px"
        }
      }
    });
  },
  full_width_border_radius: function full_width_border_radius(selector, vars) {
    return [sel(selector, {
      ".pe-search--full-width": {
        borderRadius: vars.full_width_border_radius + "px"
      }
    })];
  },
  full_width_input_right_padding: function full_width_input_right_padding(selector, vars) {
    return [sel(selector, {
      ".pe-search--full-width": {
        " .pe-textfield__input, .pe-textfield__label": {
          paddingRight: vars.full_width_input_right_padding + "px"
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
 * @type {SearchVars} searchVars
 */

var searchVars = {
  /**
   * Generate general styles, not defined by variables
   */
  general_styles: true,
  font_size_input: 20,
  full_width_border_radius: 0,
  full_width_height: 56,
  full_width_input_right_padding: 0,
  full_width_side_margin: 0,
  full_width_side_padding: 8,
  inset_border_radius: vars.unit_block_border_radius,
  inset_height: 48,
  inset_input_indent: 16,
  inset_input_right_padding: 0,
  inset_side_padding: 0,
  line_height_input: 20,
  color_light_label_text: rgba(vars.color_light_foreground, vars.blend_light_text_disabled),
  color_light_input_text: rgba(vars.color_light_foreground, vars.blend_light_text_primary),
  color_light_background: rgba(vars.color_light_background),
  color_dark_label_text: rgba(vars.color_dark_foreground, vars.blend_dark_text_disabled),
  color_dark_input_text: rgba(vars.color_dark_foreground, vars.blend_dark_text_primary),
  color_dark_background: rgba(vars.color_dark_background)
};

// @ts-check
var fns = [layout, color];
var selector = ".".concat(classes.component);
var addStyle = styler.createAddStyle(selector, fns, searchVars);
var getStyle = styler.createGetStyle(selector, fns, searchVars);

var addGeneralStyleToHead = function addGeneralStyleToHead() {
  return styler.addStyle({
    selectors: [selector],
    fns: fns,
    vars: searchVars
  });
};

export { addGeneralStyleToHead, addStyle, color, getStyle, layout, searchVars as vars };
