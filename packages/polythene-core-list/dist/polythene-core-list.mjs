import { filterSupportedAttributes } from 'polythene-core';
import { styler } from 'polythene-core-css';
import { vars } from 'polythene-theme';

var classes = {
  component: "pe-list",

  // elements
  header: "pe-list__header",

  // states
  borders: "pe-list--borders",
  compact: "pe-list--compact",
  hasHeader: "pe-list--header",
  indentedBorders: "pe-list--indented-borders"
};

var rgba = vars.rgba;

var vars$1 = {
  padding: vars.grid_unit_component, // vertical padding
  padding_compact: vars.grid_unit_component / 2,
  border_width_stacked: 1,
  border_width_bordered: 1,

  color_light_border: rgba(vars.color_light_foreground, vars.blend_light_border_light),
  color_dark_border: rgba(vars.color_dark_foreground, vars.blend_dark_border_light)

};

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var borderStyle = function borderStyle(componentVars) {
  return {
    borderStyle: "none none solid none",
    borderWidth: componentVars.border_width_bordered + "px"
  };
};

var layout = (function (selector, componentVars) {
  return [_defineProperty({}, selector, {
    padding: componentVars.padding + "px 0",

    ".pe-list--header": {
      paddingTop: 0
    },

    ".pe-list--compact": {
      padding: componentVars.padding_compact + "px 0"
    },

    "& + &": {
      borderStyle: "solid none none none",
      borderWidth: componentVars.border_width_stacked + "px"
    },

    ".pe-list--borders": {
      " .pe-list-tile:not(.pe-list__header)": {
        ":not(:last-child)": {
          "&": borderStyle(componentVars)
        }
      }
    },

    ".pe-list--indented-borders": {
      borderTop: "none",

      " .pe-list-tile:not(.pe-list__header)": {
        ":not(:last-child)": {
          " .pe-list-tile__content:not(.pe-list-tile__content--front)": borderStyle(componentVars)
        }
      }
    }
  })];
});

function _defineProperty$1(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var style = function style(scopes, selector, componentVars, tint) {
  var _scopes$map$join;

  return [_defineProperty$1({}, scopes.map(function (s) {
    return s + selector;
  }).join(","), (_scopes$map$join = {
    backgroundColor: componentVars["color_" + tint + "_background"] || "initial"

  }, _defineProperty$1(_scopes$map$join, "& + .pe-list", {
    borderTopColor: componentVars["color_" + tint + "_border"]
  }), _defineProperty$1(_scopes$map$join, ".pe-list--borders", {
    " .pe-list-tile:not(.pe-list__header)": {
      ":not(:last-child)": {
        borderColor: componentVars["color_" + tint + "_border"]
      }
    }
  }), _defineProperty$1(_scopes$map$join, ".pe-list--indented-borders", {
    " .pe-list-tile:not(.pe-list__header)": {
      " .pe-list-tile__content:not(.pe-list-tile__content--front)": {
        borderColor: componentVars["color_" + tint + "_border"]
      }
    }
  }), _scopes$map$join))];
};

var color = (function (selector, componentVars) {
  return [style([".pe-dark-tone", ".pe-dark-tone "], selector, componentVars, "dark"), // has/inside dark tone
  style(["", ".pe-light-tone", ".pe-light-tone "], selector, componentVars, "light")];
});

var _extends$1 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var fns = [layout, color];
var selector = "." + classes.component;

var customTheme = function customTheme(customSelector, customVars) {
  return styler.generateStyles([customSelector, selector], _extends$1({}, vars$1, customVars), fns);
};

styler.generateStyles([selector], vars$1, fns);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var element = "div";

var theme = customTheme;

var createProps = function createProps(vnode, _ref) {
  var k = _ref.keys;

  var attrs = vnode.attrs;
  return _extends({}, filterSupportedAttributes(attrs), {
    className: [classes.component, attrs.borders ? classes.borders : null, attrs.indentedBorders ? classes.indentedBorders : null, attrs.header ? classes.hasHeader : null, attrs.compact ? classes.compact : null, attrs.tone === "dark" ? "pe-dark-tone" : null, attrs.tone === "light" ? "pe-light-tone" : null, attrs.className || attrs[k.class]].join(" ")
  });
};

var createContent = function createContent(vnode, _ref2) {
  var h = _ref2.renderer,
      requiresKeys = _ref2.requiresKeys,
      k = _ref2.keys,
      ListTile = _ref2.ListTile;

  var attrs = vnode.attrs;
  var headerOpts = void 0;
  if (attrs.header) {
    headerOpts = _extends({}, attrs.header);
    headerOpts[k.class] = [classes.header, headerOpts[k.class] || null].join(" ");
  }
  return [headerOpts ? h(ListTile, _extends({}, requiresKeys ? { key: "header" } : null, headerOpts)) : null, attrs.tiles ? attrs.tiles : attrs.content ? attrs.content : attrs.children || vnode.children];
};

var list = Object.freeze({
	element: element,
	theme: theme,
	createProps: createProps,
	createContent: createContent
});

export { list as coreList, classes, vars$1 as vars };
