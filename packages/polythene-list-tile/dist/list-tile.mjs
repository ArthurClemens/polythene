import m from 'mithril';
import { icon } from 'polythene-icon';
import { ripple } from 'polythene-ripple';
import { filterSupportedAttributes } from 'polythene-core';
import { flex, mixin, styler } from 'polythene-css';
import { styles, vars } from 'polythene-theme';

var rgba = vars.rgba;

// SPECS
//
// heights:
// single line: 48
// single line, dense: 40
// single line, with icon: 48
// single line, with icon, dense: 40
// single line, with avatar: 56
// single line, with avatar, dense: 48
// two-line: 72
// two-line, dense: 60
// three-line: 88
// three-line, dense: 76


var single_height = 48;
var padding = 8;
var single_with_icon_height = 56;

var vars$1 = {
  single_height: single_height,
  single_line_height: single_height - 2 * padding - (2 * 5 + 1),
  single_with_icon_height: single_with_icon_height,
  single_with_icon_line_height: single_with_icon_height - 2 * padding - (2 * 5 + 1),
  padding: 13,
  compact_padding: 9,
  subtitle_line_count: 1,
  has_subtitle_padding: 15,
  high_subtitle_line_count: 2,
  has_high_subtitle_padding: 13,
  front_item_width: 72,
  side_padding: 2 * vars.grid_unit_component,
  font_size_title: 16,
  font_size_subtitle: 14,
  line_height_subtitle: 20,
  font_size_list_header: 14,
  font_size_small: 12,

  color_light_title: rgba(vars.color_light_foreground, vars.blend_light_text_primary),
  color_light_subtitle: rgba(vars.color_light_foreground, vars.blend_light_text_secondary),
  color_light_info: rgba(vars.color_light_foreground, vars.blend_light_text_tertiary),
  color_light_text_disabled: rgba(vars.color_light_foreground, vars.blend_light_text_disabled),
  color_light_list_header: rgba(vars.color_light_foreground, vars.blend_light_text_tertiary),
  color_light_background_hover: rgba(vars.color_light_foreground, vars.blend_light_background_hover),
  color_light_background_selected: rgba(vars.color_light_foreground, vars.blend_light_background_hover),

  color_dark_title: rgba(vars.color_dark_foreground, vars.blend_dark_text_primary),
  color_dark_subtitle: rgba(vars.color_dark_foreground, vars.blend_dark_text_secondary),
  color_dark_info: rgba(vars.color_dark_foreground, vars.blend_dark_text_tertiary),
  color_dark_text_disabled: rgba(vars.color_dark_foreground, vars.blend_dark_text_disabled),
  color_dark_list_header: rgba(vars.color_dark_foreground, vars.blend_dark_text_tertiary),
  color_dark_background_hover: rgba(vars.color_dark_foreground, vars.blend_dark_background_hover),
  color_dark_background_selected: rgba(vars.color_dark_foreground, vars.blend_dark_background_hover)
};

var paddingH = function paddingH(h) {
  return {
    "padding-left": h + "px",
    "padding-right": h + "px"
  };
};

var paddingV = function paddingV(top, bottom) {
  return {
    "padding-top": top + "px",
    "padding-bottom": (bottom || top) + "px"
  };
};

var createStyles = function createStyles(componentVars) {
  return [{
    ".pe-list-tile": [flex.layout, {
      position: "relative",
      overflow: "hidden",

      "&.pe-list-tile--sticky": [mixin.sticky(2)],

      " .pe-list-tile__primary, .pe-list-tile__secondary": [flex.layoutHorizontal, {
        "text-decoration": "none",
        color: "inherit",
        border: "none"
      }],

      " .pe-list-tile__primary": [flex.flex(), {
        position: "relative",

        " .pe-list-tile__content:not(.pe-list-tile__content--front)": [flex.flex(), paddingV(componentVars.padding, componentVars.padding + 1)]
      }],

      " .pe-list-tile__secondary": {
        "text-align": "right",
        "font-size": componentVars.font_size_title + "px",
        position: "relative"
      },

      " .pe-list-tile__content": [flex.layoutVertical, flex.selfCenter, paddingH(componentVars.side_padding), {
        "&.pe-list-tile__content--front": [paddingV(componentVars.padding - 5), {
          width: componentVars.front_item_width + "px"
        }],

        " small": {
          "font-size": componentVars.font_size_small + "px"
        }
      }],

      " .pe-list-tile__content--front + .pe-list-tile__content": {
        "padding-left": 0
      },

      " .pe-list-tile__title": [mixin.ellipsis(1), {
        "font-size": componentVars.font_size_title + "px",
        "font-weight": vars.font_weight_normal,
        "line-height": componentVars.single_line_height + "px"
      }],

      " .pe-list-tile__subtitle": [mixin.ellipsis(componentVars.subtitle_line_count, componentVars.line_height_subtitle), {
        "font-size": componentVars.font_size_subtitle + "px",
        "line-height": componentVars.line_height_subtitle + "px",

        "&.pe-list-tile__subtitle--high": [mixin.ellipsis(componentVars.high_subtitle_line_count, componentVars.line_height_subtitle), {
          "white-space": "normal"
        }]
      }],

      "&.pe-list-tile--selected, &.pe-list-tile--disabled": {
        " a": {
          "pointer-events": "none"
        }
      },

      "&.pe-list-tile--subtitle": {
        " .pe-list-tile__content": [paddingV(componentVars.has_subtitle_padding, componentVars.has_subtitle_padding + 1), {
          " .pe-list-tile__title": {
            padding: 0
          }
        }]
      },

      "&.pe-list-tile--high-subtitle": {
        " .pe-list-tile--high-subtitle .pe-list-tile__secondary": [flex.layoutHorizontal, flex.layoutStart],
        " .pe-list-tile__content": [flex.selfStart, paddingV(componentVars.has_high_subtitle_padding, componentVars.has_high_subtitle_padding + 1), {
          " .pe-list-tile__title": {
            padding: 0
          }
        }]
      },

      // List header
      "&.pe-list__header": {
        height: componentVars.single_height + "px",

        " .pe-list-tile__content": {
          "padding-top": 0,
          "padding-bottom": 0
        },
        " .pe-list-tile__title": [mixin.ellipsis(1, componentVars.single_height), {
          "font-size": componentVars.font_size_list_header + "px",
          "font-weight": vars.font_weight_medium,
          "line-height": componentVars.single_height + "px",
          padding: 0
        }]
      },

      // Compact list

      " .pe-list--compact &, &.pe-list-tile--compact": {
        "&:not(.pe-list__header)": {
          " .pe-list-tile__content": paddingV(componentVars.compact_padding, componentVars.compact_padding + 1)
        }
      },

      // Firefox only
      "@supports (-moz-appearance:none) and (display:contents)": {
        " .pe-list-tile__primary, .pe-list-tile__content": {
          overflow: "hidden"
        }
      },

      // Menu

      ".pe-dialog .pe-menu__content &": {
        " .pe-list-tile__title": mixin.ellipsis("none")
      },

      ".pe-menu__content &": {
        "&:not(.pe-list-tile--disabled)": {
          cursor: "default",

          "&, .pe-list-tile__primary, .pe-list-tile__secondary": {
            " .pe-list-tile__title, .pe-list-tile__subtitle": [mixin.vendorize({
              "user-select": "none"
            }, vars.prefixes_user_select)]
          }
        }
      },

      // Non-touch

      "html.pe-no-touch .pe-list--hoverable &, \
      html.pe-no-touch .pe-list--selectable &, \
      html.pe-no-touch &.pe-list-tile--hoverable, \
      html.pe-no-touch &.pe-list-tile--selectable": {
        "&:not(.pe-list__header):not(.pe-list-tile--disabled):not(.pe-list-tile--selected):hover": {
          cursor: "pointer"
        }
      }
    }]
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
  var scope = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "";
  return [defineProperty({}, scope + ".pe-list-tile", {
    " .pe-list-tile__title": {
      color: componentVars["color_" + tint + "_title"]
    },

    "&.pe-list__header": {
      " .pe-list-tile__primary, pe-list-tile__secondary": {
        "background-color": "inherit"
      },

      " .pe-list-tile__title": {
        color: componentVars["color_" + tint + "_list_header"]
      }
    },

    " .pe-list-tile__content, .pe-list-tile__subtitle": {
      color: componentVars["color_" + tint + "_subtitle"]
    },

    "&.pe-list-tile--disabled": {
      "&, .pe-list-tile__title, .pe-list-tile__content, .pe-list-tile__subtitle": {
        color: componentVars["color_" + tint + "_text_disabled"]
      }
    },
    "&.pe-list-tile--selected": {
      " .pe-list-tile__primary, pe-list-tile__secondary": {
        "background-color": componentVars["color_" + tint + "_background_selected"]
      }
    }
  })];
};

var noTouch = function noTouch(componentVars, tint) {
  var scope = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "";
  return [defineProperty({}, scope + ".pe-list-tile", {
    "&:not(.pe-list__header):not(.pe-list-tile--disabled):hover": {
      " .pe-list-tile__primary, pe-list-tile__secondary": {
        "background-color": componentVars["color_" + tint + "_background_hover"]
      }
    }
  })];
};

var createStyles$1 = function createStyles(componentVars) {
  return [style(componentVars, "light"), {
    "html.pe-no-touch": [noTouch(componentVars, "light", " .pe-list-tile--hoverable"), noTouch(componentVars, "light", " .pe-list--hoverable ")]
  }, {
    ".pe-dark-theme": [
    // inside dark theme
    style(componentVars, "dark", " "),
    // has dark theme
    style(componentVars, "dark", "&")]
  }, {
    "html.pe-no-touch .pe-dark-theme": [noTouch(componentVars, "dark", " .pe-list-tile--hoverable"), noTouch(componentVars, "dark", ".pe-list--hoverable "), noTouch(componentVars, "dark", " .pe-list--hoverable ")],
    "html.pe-no-touch .pe-list--hoverable .pe-dark-theme": noTouch(componentVars, "dark", " ")
  }];
};

var color = (function (componentVars) {
  return mixin.createStyles(componentVars, createStyles$1);
});

var key = "list-tile";
var className = "pe-list-tile";

var styleComponent = function styleComponent(className, styles$$1) {
  return styler.styleComponent(className, styles$$1, key, vars$1, layout, color);
};

var customTheme = function customTheme(className, vars$$1) {
  return (
    // Inject additional styles as use className as key
    styleComponent(className, styler.addComponentStyle(className, styles, key, vars$$1))
  );
};

styleComponent(className, styles);

var classes = {
  component: "pe-list-tile",
  primary: "pe-list-tile__primary",
  secondary: "pe-list-tile__secondary",
  content: "pe-list-tile__content",
  contentFront: "pe-list-tile__content--front",
  title: "pe-list-tile__title",
  subtitle: "pe-list-tile__subtitle",
  highSubtitle: "pe-list-tile__subtitle--high",
  selected: "pe-list-tile--selected",
  disabled: "pe-list-tile--disabled",
  sticky: "pe-list-tile--sticky",
  hasSubtitle: "pe-list-tile--subtitle",
  hasHighSubtitle: "pe-list-tile--high-subtitle",
  hasFront: "pe-list-tile--front",
  isCompact: "pe-list-tile--compact",
  isHoverable: "pe-list-tile--hoverable",
  isSelectable: "pe-list-tile--selectable"
};

var primaryContent = function primaryContent(attrs, children) {
  var element = attrs.element ? attrs.element : attrs.url ? "a" : "div";
  var contentFrontClass = classes.content + " " + classes.contentFront;
  var frontComp = attrs.front ? m("div", { class: contentFrontClass }, attrs.front) : attrs.indent ? m("div", { class: contentFrontClass }) : null;

  return m(element, _extends({}, filterSupportedAttributes(attrs), attrs.url, {
    class: classes.primary
  }), [frontComp, m("div", {
    class: classes.content
  }, [attrs.content ? attrs.content : children && children[0] ? children : null, attrs.title && !attrs.content ? m("div", {
    class: classes.title
  }, attrs.title) : null, attrs.subtitle ? m("div", {
    class: classes.subtitle
  }, attrs.subtitle) : null, attrs.highSubtitle ? m("div", {
    class: classes.subtitle + " " + classes.highSubtitle
  }, attrs.highSubtitle) : null])]);
};

var secondaryContent = function secondaryContent() {
  var secondaryAttrs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  var element = secondaryAttrs.element ? secondaryAttrs.element : secondaryAttrs.url ? "a" : "div";
  return m(element, _extends({}, filterSupportedAttributes(secondaryAttrs), secondaryAttrs.url, {
    class: classes.secondary
  }), m("div", {
    class: classes.content
  }, [secondaryAttrs.icon ? m(icon, secondaryAttrs.icon) : null, secondaryAttrs.content ? secondaryAttrs.content : null]));
};

var view = function view(vnode) {
  var attrs = vnode.attrs;
  var element = attrs.element || "div";
  var heightClass = attrs.subtitle ? classes.hasSubtitle : attrs.highSubtitle ? classes.hasHighSubtitle : attrs.front || attrs.indent ? classes.hasFront : null;

  var props = _extends({}, filterSupportedAttributes(attrs), {
    class: [classes.component, attrs.selected ? classes.selected : null, attrs.disabled ? classes.disabled : null, attrs.sticky ? classes.sticky : null, attrs.compact ? classes.isCompact : null, attrs.hoverable ? classes.isHoverable : null, attrs.selectable ? classes.isSelectable : null, heightClass, attrs.class].join(" ")
    // events and url are attached to primary content to not interfere with controls
  });

  var primaryAttrs = _extends({}, attrs);
  delete primaryAttrs.id;
  delete primaryAttrs.class;
  var children = vnode.children.length && vnode.children || attrs.children;
  var content = [attrs.ink && !attrs.disabled ? m(ripple, attrs.ripple) : null, primaryContent(primaryAttrs, children), attrs.secondary ? secondaryContent(attrs.secondary) : null];
  return m(element, props, [attrs.before, content, attrs.after]);
};

var listTile = {
  theme: customTheme, // accepts (className, vars)
  view: view
};

export { listTile, vars$1 as listTileVars };
