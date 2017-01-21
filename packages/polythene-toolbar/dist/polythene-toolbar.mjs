import m from 'mithril';
import { filterSupportedAttributes } from 'polythene-core';
import { flex, mixin, styler } from 'polythene-css';
import { vars } from 'polythene-theme';

var rgba = vars.rgba;

var padding_side = vars.grid_unit_component * 2 - 12; // 16 - 12 = 4
var title_padding = vars.grid_unit_component * 9 - vars.grid_unit_component * 6 - padding_side; // 72 - 48 - 4
var height_mobile_portrait = vars.grid_unit_component * 7; // 56
var height_desktop = vars.grid_unit_component * 8; // 64

var vars$1 = {
  padding_side: padding_side,
  title_padding: title_padding,
  indent: vars.unit_indent,
  transition_duration: vars.animation_duration,
  font_size: 18,
  line_height: vars.line_height,

  height: height_desktop,
  height_compact: height_mobile_portrait,

  color_light_text: rgba(vars.color_light_foreground, vars.blend_light_text_primary),
  color_dark_text: rgba(vars.color_dark_foreground, vars.blend_dark_text_primary),

  // default gray background, expected to be overridden
  color_light_background: "#CFD8DC", // blue-gray-100
  color_dark_background: "#37474F" // blue-gray-800
};

var defineProperty = function (obj, key, value) {
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
};

var _extends = Object.assign || function (target) {
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

var layout = (function (selector, componentVars) {
  return [defineProperty({}, selector, [flex.layout, flex.layoutHorizontal, flex.layoutCenter, {
    height: componentVars.height + "px",
    fontSize: componentVars.font_size + "px",
    lineHeight: componentVars.line_height + "em",
    padding: "0 " + componentVars.padding_side + "px",

    ".pe-toolbar--compact": {
      height: componentVars.height_compact + "px"
    },

    "> *:not(.disabled)": {
      // make elements (e.g. buttons) respond to mouse/touch events
      pointerEvents: "auto"
    },
    " > span, .pe-toolbar__title, .pe-toolbar__title--indent": [flex.layout, flex.flex(1), mixin.ellipsis(1, vars.line_height, "em"), mixin.vendorize({
      "transform-origin": "left 50%"
    }, vars.prefixes_transform), {
      lineHeight: vars.line_height + "em",
      wordBreak: "break-all"
    }],
    " > span, .pe-toolbar__title": {
      marginLeft: componentVars.title_padding + "px"
    },
    " .pe-toolbar__title--indent": {
      marginLeft: componentVars.indent - componentVars.padding_side + "px"
    },
    " .pe-fit": [mixin.fit(), {
      margin: 0
    }]
  }])];
});

var style = function style(scope, selector, componentVars, tint) {
  return [defineProperty({}, scope + selector, {
    color: componentVars["color_" + tint + "_text"],
    backgroundColor: componentVars["color_" + tint + "_background"]
  })];
};

var color = (function (selector, componentVars) {
  return [style("", selector, componentVars, "light"), style(".pe-dark-theme ", selector, componentVars, "dark") // inside dark theme
  ];
});

var fns = [layout, color];
var selector = ".pe-toolbar";

var customTheme = function customTheme(customSelector, customVars) {
  return styler.generateStyles([customSelector, selector], _extends({}, vars$1, customVars), fns);
};

styler.generateStyles([selector], vars$1, fns);

var classes = {
  component: "pe-toolbar",
  compact: "pe-toolbar--compact",
  title: "pe-toolbar__title",
  indentedTitle: "pe-toolbar__title--indent"
};

var view = function view(vnode) {
  var attrs = vnode.attrs;
  var element = attrs.element || "div";
  var props = _extends({}, filterSupportedAttributes(attrs), {
    class: [classes.component, attrs.compact ? classes.compact : null, attrs.class].join(" ")
  }, attrs.events ? attrs.events : null);
  var content = attrs.content ? attrs.content : attrs.children || vnode.children;
  return m(element, props, [attrs.before, content, attrs.after]);
};

var toolbar = {
  theme: customTheme, // accepts (selector, vars)
  view: view
};

export { toolbar, classes, vars$1 as vars };
