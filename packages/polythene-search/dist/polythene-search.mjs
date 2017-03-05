import m from 'mithril';
import textfield from 'polythene-textfield';
import { filterSupportedAttributes } from 'polythene-core';
import { flex, styler } from 'polythene-css';
import { vars } from 'polythene-theme';

var rgba = vars.rgba;

var insetSideMargin = 8;

var line_height_input = 20;
var font_size_input = 20;

var inset_height = 48;
var inset_input_indent = 16;
var inset_input_right_padding = 0;
var inset_side_padding = 0;
var inset_border_radius = vars.unit_block_border_radius;

var full_width_side_margin = 0;
var full_width_height = 56;
var full_width_side_padding = insetSideMargin;
var full_width_input_right_padding = 0;
var full_width_border_radius = 0;

var vars$1 = {
  font_size_input: font_size_input,
  line_height_input: line_height_input,

  inset_height: inset_height,
  inset_input_indent: inset_input_indent,
  inset_side_padding: inset_side_padding,
  inset_input_right_padding: inset_input_right_padding,
  inset_border_radius: inset_border_radius,

  full_width_height: full_width_height,
  full_width_side_margin: full_width_side_margin,
  full_width_side_padding: full_width_side_padding,
  full_width_input_right_padding: full_width_input_right_padding,
  full_width_border_radius: full_width_border_radius,

  color_light_label_text: rgba(vars.color_light_foreground, vars.blend_light_text_disabled),
  color_light_input_text: rgba(vars.color_light_foreground, vars.blend_light_text_primary),
  color_light_background: rgba(vars.color_light_background),

  color_dark_label_text: rgba(vars.color_dark_foreground, vars.blend_dark_text_disabled),
  color_dark_input_text: rgba(vars.color_dark_foreground, vars.blend_dark_text_primary),
  color_dark_background: rgba(vars.color_dark_background)
};

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var layout = (function (selector, componentVars) {
  var inset_input_padding_v = (componentVars.inset_height - componentVars.line_height_input) / 2;
  var full_width_input_padding_v = (componentVars.full_width_height - componentVars.line_height_input) / 2;
  var full_width_input_indent = vars.unit_indent - componentVars.full_width_side_padding - vars.grid_unit_icon_button;

  return [_defineProperty({}, selector, [flex.flex(), {
    position: "relative", // necessary when a shadow is added

    " .pe-textfield": [flex.flex(), {
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

      " .pe-textfield__input, .pe-textfield__label": {
        fontSize: componentVars.font_size_input + "px",
        lineHeight: componentVars.line_height_input + "px"
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

    " .pe-search__content": flex.layoutHorizontal,

    " .pe-search__content > *": [flex.layoutVertical, flex.selfCenter],

    ".pe-search--inset": {
      "border-radius": componentVars.inset_border_radius + "px",
      padding: "0 " + componentVars.inset_side_padding + "px",

      "&, .pe-textfield__input-area, .pe-textfield__input, .pe-textfield__label": {
        padding: 0,
        height: componentVars.inset_height + "px"
      },
      " .pe-textfield__input, .pe-textfield__label": {
        paddingTop: inset_input_padding_v + "px",
        paddingBottom: inset_input_padding_v + "px",
        paddingLeft: componentVars.inset_input_indent + "px",
        paddingRight: componentVars.inset_input_right_padding + "px"
      }
    },

    ".pe-search--full-width": {
      borderRadius: componentVars.full_width_border_radius + "px",
      padding: "0 " + componentVars.full_width_side_padding + "px",

      "&, .pe-textfield__input-area, .pe-textfield__input, .pe-textfield__label": {
        height: componentVars.full_width_height + "px"
      },
      " .pe-textfield__input, .pe-textfield__label": {
        paddingTop: full_width_input_padding_v + "px",
        paddingBottom: full_width_input_padding_v + "px",
        paddingLeft: full_width_input_indent + "px",
        paddingRight: componentVars.full_width_input_right_padding + "px"
      }
    }
  }])];
});

function _defineProperty$1(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var style = function style(scope, selector, componentVars, tint) {
  return [_defineProperty$1({}, scope + selector, {
    backgroundColor: componentVars["color_" + tint + "_background"],

    " .pe-textfield": {
      " .pe-textfield__label": {
        color: componentVars["color_" + tint + "_label_text"]
      },
      " .pe-textfield__input": {
        color: componentVars["color_" + tint + "_input_text"]
      },
      " .pe-textfield__input-area": {
        backgroundColor: "transparent"
      }
    }
  })];
};

var color = (function (selector, componentVars) {
  return [style("", selector, componentVars, "light"), style(".pe-dark-theme ", selector, componentVars, "dark")];
});

var _extends$1 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var fns = [layout, color];
var selector = ".pe-search";

var customTheme = function customTheme(customSelector, customVars) {
  return styler.generateStyles([customSelector, selector], _extends$1({}, vars$1, customVars), fns);
};

styler.generateStyles([selector], vars$1, fns);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var classes = {
  component: "pe-search",
  content: "pe-search__content",
  searchInset: "pe-search--inset",
  searchFullWidth: "pe-search--full-width"
};

var getNameOfState = function getNameOfState(state) {
  return state.focus && state.dirty ? "focus_dirty" : state.focus ? "focus" : state.dirty ? "dirty" : "none";
};

var view = function view(_ref) {
  var state = _ref.state,
      attrs = _ref.attrs;

  var element = attrs.element || "div";
  var props = _extends({}, filterSupportedAttributes(attrs), {
    class: [classes.component, attrs.fullWidth ? classes.searchFullWidth : classes.searchInset, attrs.class].join(" ")
  }, attrs.events);
  var searchState = getNameOfState(state.searchState);
  var buttons = (attrs.buttons || {})[searchState] || {};
  var textfieldAttrs = attrs.textfield || {};
  var content = m("div", {
    class: classes.content
  }, [buttons.before, m(textfield, _extends({}, textfieldAttrs, {
    getState: function getState(newState) {
      state.searchState = _extends({}, newState);
      if (textfieldAttrs.getState) {
        textfieldAttrs.getState(state.searchState);
      }
    }
  })), buttons.after]);
  return m(element, props, [attrs.before, content, attrs.after]);
};

var search = {
  theme: customTheme, // accepts (selector, vars)
  oninit: function oninit(vnode) {
    vnode.state.searchState = {};
  },
  view: view
};

export { classes, vars$1 as vars };export default search;
