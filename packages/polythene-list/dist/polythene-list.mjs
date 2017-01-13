import m from 'mithril';
import { listTile } from 'polythene-list-tile';
import { filterSupportedAttributes } from 'polythene-core';
import { mixin, styler } from 'polythene-css';
import { vars } from 'polythene-theme';

var rgba = vars.rgba;

var vars$1 = {
  padding: vars.grid_unit_component,
  padding_compact: vars.grid_unit_component / 2,
  border_width_stacked: 1,
  border_width_bordered: 1,

  color_light_border: rgba(vars.color_light_foreground, vars.blend_light_border_light),
  color_dark_border: rgba(vars.color_dark_foreground, vars.blend_dark_border_light)
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

var borderStyle = function borderStyle(componentVars) {
  return mixin.hairline("border-bottom"), {
    borderStyle: "none none solid none",
    borderWidth: componentVars.border_width_bordered + "px"
  };
};

var layout = (function (selector, componentVars) {
  return [defineProperty({}, selector, {
    padding: componentVars.padding + "px 0",

    "&.pe-list--header": {
      paddingTop: 0
    },

    "&.pe-list--compact": {
      padding: componentVars.padding_compact + "px 0"
    },

    "& + &": [mixin.hairline("border-top"), {
      borderStyle: "solid none none none",
      borderWidth: componentVars.border_width_stacked + "px"
    }],

    "&.pe-list--borders": {
      " .pe-list-tile:not(.pe-list__header)": {
        "&:not(:last-child)": {
          "&": borderStyle(componentVars)
        }
      }
    },

    "&.pe-list--indented-borders": {
      borderTop: "none",

      " .pe-list-tile:not(.pe-list__header)": {
        "&:not(:last-child)": {
          " .pe-list-tile__content:not(.pe-list-tile__content--front)": borderStyle(componentVars)
        }
      }
    }
  })];
});

var style = function style(scope, selector, componentVars, tint) {
  var _ref;

  return [(_ref = {}, defineProperty(_ref, scope + selector, {
    "&.pe-list--borders": {
      " .pe-list-tile:not(.pe-list__header)": {
        "&:not(:last-child)": {
          borderColor: componentVars["color_" + tint + "_border"]
        }
      }
    },

    "&.pe-list--indented-borders": {
      " .pe-list-tile:not(.pe-list__header)": {
        " .pe-list-tile__content:not(.pe-list-tile__content--front)": {
          borderColor: componentVars["color_" + tint + "_border"]
        }
      }
    }
  }), defineProperty(_ref, " .pe-list + .pe-list", {
    borderColor: componentVars["color_" + tint + "_border"]
  }), _ref)];
};

var color = (function (selector, componentVars) {
  return [style("", selector, componentVars, "light"), style(".pe-dark-theme ", selector, componentVars, "dark")];
});

var fns = [layout, color];
var selector = ".pe-list";

var customTheme = function customTheme(customSelector, customVars) {
  return styler.generateStyles([customSelector, selector], _extends({}, vars$1, customVars), fns);
};

styler.generateStyles([selector], vars$1, fns);

var classes = {
  component: "pe-list",
  header: "pe-list__header",
  borders: "pe-list--borders",
  indentedBorders: "pe-list--indented-borders",
  hasHeader: "pe-list--header",
  compact: "pe-list--compact",
  hoverable: "pe-list--hoverable",
  selectable: "pe-list--selectable"
};

var view = function view(vnode) {
  var attrs = vnode.attrs;
  var element = attrs.element || "div";
  var props = _extends({}, filterSupportedAttributes(attrs), {
    class: [classes.component, attrs.borders ? classes.borders : null, attrs.indentedBorders ? classes.indentedBorders : null, attrs.hoverable ? classes.hoverable : null, attrs.selectable ? classes.selectable : null, attrs.header ? classes.hasHeader : null, attrs.compact ? classes.compact : null, attrs.class].join(" ")
  });
  var headerOpts = void 0;
  if (attrs.header) {
    headerOpts = _extends({}, attrs.header);
    headerOpts.class = [classes.header, headerOpts.class || null].join(" ");
  }
  var children = vnode.children.length && vnode.children || attrs.children;
  var content = [headerOpts ? m(listTile, headerOpts) : null, attrs.tiles ? attrs.tiles : attrs.content ? attrs.content : children && children[0] ? children : null];
  return m(element, props, [attrs.before, content, attrs.after]);
};

var list = {
  theme: customTheme, // accepts (selector, vars)
  view: view
};

export { list, classes, vars$1 as vars };
