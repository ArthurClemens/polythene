(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('polythene-theme')) :
  typeof define === 'function' && define.amd ? define(['exports', 'polythene-theme'], factory) :
  (factory((global.polythene = {}),global['polythene-theme']));
}(this, (function (exports,polytheneTheme) { 'use strict';

  var classes = {
    component: "pe-button pe-icon-button",

    // elements
    content: "pe-icon-button__content",
    label: "pe-icon-button__label",

    // states
    compact: "pe-icon-button--compact"
  };

  var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

  // Don't export 'element': it will be the wrapped button component (set in polythene-xxx-icon-button)

  // Props to be passed to a button, including 'content'

  var createProps = function createProps(vnode, _ref) {
    var h = _ref.renderer,
        Icon = _ref.Icon;

    var attrs = vnode.attrs;
    var content = attrs.content ? attrs.content : attrs.icon ? h(Icon, attrs.icon) : attrs.children || vnode.children;
    return _extends({}, {
      content: h("div", { className: classes.content }, content),
      after: attrs.label && h("div", { className: classes.label }, attrs.label),
      parentClassName: [attrs.parentClassName || classes.component, attrs.compact ? classes.compact : null].join(" "),
      // defaults
      wash: false,
      animateOnTap: false
    }, attrs);
  };

  var createContent = function createContent(vnode) {
    return vnode.children;
  };

  var iconButton = /*#__PURE__*/Object.freeze({
    createProps: createProps,
    createContent: createContent
  });

  var rgba = function rgba(colorStr) {
    var opacity = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
    return "rgba(" + colorStr + ", " + opacity + ")";
  };

  var padding = (polytheneTheme.vars.grid_unit_icon_button - polytheneTheme.vars.unit_icon_size) / 2; // 12
  var padding_compact = (polytheneTheme.vars.grid_unit_icon_button - polytheneTheme.vars.unit_icon_size) / 3; // 8
  var color_light = rgba(polytheneTheme.vars.color_light_foreground, polytheneTheme.vars.blend_light_text_secondary);
  var color_dark = rgba(polytheneTheme.vars.color_dark_foreground, polytheneTheme.vars.blend_dark_text_secondary);

  var vars = {
    padding: padding,
    padding_compact: padding_compact,

    label_font_size: 16,
    label_line_height: 20,
    label_padding_before: polytheneTheme.vars.grid_unit * 1, // 4
    label_padding_after: 0,
    label_font_weight: 400,
    label_text_transform: "initial",
    label_top_margin_factor: 1 / 12, // align with icon

    animation_duration: polytheneTheme.vars.animation_duration,

    color_background: "transparent", // only specify this variable to get all 2 states
    // theme specific background colors may be set in theme; disabled by default
    // color_light_background:    "none",
    // color_dark_background:     "none",
    // color_light_hover:         "inherit",
    // color_dark_hover:          "inherit",
    // color_light_label_hover:   "inherit",
    // color_dark_label_hover:    "inherit",

    color_light: color_light,
    color_light_label: rgba(polytheneTheme.vars.color_light_foreground, polytheneTheme.vars.blend_light_text_secondary),
    color_light_disabled: rgba(polytheneTheme.vars.color_light_foreground, polytheneTheme.vars.blend_light_text_disabled),
    color_light_focus_opacity: polytheneTheme.vars.blend_light_background_hover_medium,
    color_light_wash_background: rgba(polytheneTheme.vars.color_light_foreground, polytheneTheme.vars.blend_light_background_hover),

    color_dark: color_dark,
    color_dark_label: rgba(polytheneTheme.vars.color_dark_foreground, polytheneTheme.vars.blend_dark_text_secondary),
    color_dark_disabled: rgba(polytheneTheme.vars.color_dark_foreground, polytheneTheme.vars.blend_dark_text_disabled),
    color_dark_focus_opacity: polytheneTheme.vars.blend_dark_background_hover_medium,
    color_dark_wash_background: rgba(polytheneTheme.vars.color_dark_foreground, polytheneTheme.vars.blend_dark_background_hover)

    // hover colors may be set in theme; disabled by default

    // color_light_hover_background:         "currentColor",
    // color_dark_hover_background:          "currentColor",
  };

  exports.coreIconButton = iconButton;
  exports.vars = vars;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=polythene-core-icon-button.js.map
