import m from 'mithril';
import { listTile } from 'polythene-list-tile';
import { filterSupportedAttributes } from 'polythene-core';
import { mixin, styler } from 'polythene-css';
import { styles, vars } from 'polythene-theme';

var rgba = vars.rgba;

var vars$1 = {
  padding: vars.grid_unit_component,
  padding_compact: vars.grid_unit_component / 2,
  border_width_stacked: 1,
  border_width_bordered: 1,

  color_light_border: rgba(vars.color_light_foreground, vars.blend_light_border_light),
  color_dark_border: rgba(vars.color_dark_foreground, vars.blend_dark_border_light)
};

var borderStyle = function borderStyle(componentVars) {
  return mixin.hairline("border-bottom"), {
    "border-style": "none none solid none",
    "border-width": componentVars.border_width_bordered + "px"
  };
};

var createStyles = function createStyles(componentVars) {
  return [{
    ".pe-list": {
      padding: componentVars.padding + "px 0",

      "&.pe-list--header": {
        "padding-top": 0
      },

      "&.pe-list--compact": {
        padding: componentVars.padding_compact + "px 0"
      },

      "& + &": [mixin.hairline("border-top"), {
        "border-style": "solid none none none",
        "border-width": componentVars.border_width_stacked + "px"
      }],

      "&.pe-list--borders": {
        " .pe-list-tile:not(.pe-list__header)": {
          "&:not(:last-child)": {
            "&": borderStyle(componentVars)
          }
        }
      },

      "&.pe-list--borders-indented": {
        "border-top": "none",

        " .pe-list-tile:not(.pe-list__header)": {
          "&:not(:last-child)": {
            " .pe-list-tile__content:not(.pe-list-tile__content--front)": borderStyle(componentVars)
          }
        }
      }
    }
  }];
};

var layout = (function (componentVars) {
  return mixin.createStyles(componentVars, createStyles);
});

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

var style = function style(componentVars, tint) {
  var _ref;

  var scope = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "";

  return [(_ref = {}, defineProperty(_ref, scope + ".pe-list", {
    "&.pe-list--borders": {
      " .pe-list-tile:not(.pe-list__header)": {
        "&:not(:last-child)": {
          "border-color": componentVars["color_" + tint + "_border"]
        }
      }
    },

    "&.pe-list--borders-indented": {
      " .pe-list-tile:not(.pe-list__header)": {
        " .pe-list-tile__content:not(.pe-list-tile__content--front)": {
          "border-color": componentVars["color_" + tint + "_border"]
        }
      }
    }
  }), defineProperty(_ref, " .pe-list + .pe-list", {
    "border-color": componentVars["color_" + tint + "_border"]
  }), _ref)];
};

var createStyles$1 = function createStyles(componentVars) {
  return [style(componentVars, "light"), {
    ".pe-dark-theme": [
    // inside dark theme
    style(componentVars, "dark", " "),
    // has dark theme
    style(componentVars, "dark", "&")]
  }];
};

var color = (function (componentVars) {
  return mixin.createStyles(componentVars, createStyles$1);
});

styler.styleComponent("pe-list", "list", styles, vars$1, layout, color);

var CSS_CLASSES = {
  component: "pe-list",
  header: "pe-list__header",
  borders: "pe-list--borders",
  indentedBorders: "pe-list--borders-indented",
  hasHeader: "pe-list--header",
  isCompact: "pe-list--compact",
  isHoverable: "pe-list--hoverable",
  isSelectable: "pe-list--selectable"
};

var view = function view(vnode) {
  var attrs = vnode.attrs;
  var element = attrs.element || "div";
  var props = _extends({}, filterSupportedAttributes(attrs), {
    class: [CSS_CLASSES.component, attrs.borders ? CSS_CLASSES.borders : null, attrs.indentedBorders ? CSS_CLASSES.indentedBorders : null, attrs.hoverable ? CSS_CLASSES.isHoverable : null, attrs.selectable ? CSS_CLASSES.isSelectable : null, attrs.header ? CSS_CLASSES.hasHeader : null, attrs.compact ? CSS_CLASSES.isCompact : null, attrs.class].join(" ")
  });
  var headerOpts = void 0;
  if (attrs.header) {
    headerOpts = _extends({}, attrs.header);
    headerOpts.class = [CSS_CLASSES.header, headerOpts.class || null].join(" ");
  }
  var content = [headerOpts ? m(listTile, headerOpts) : null, attrs.tiles ? attrs.tiles : attrs.content ? attrs.content : vnode.children && vnode.children[0] ? vnode.children : null];
  return m(element, props, [attrs.before, content, attrs.after]);
};

var list = {
  view: view
};

export { list, vars$1 as listVars };
