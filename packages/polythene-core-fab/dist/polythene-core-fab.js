(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('polythene-theme')) :
  typeof define === 'function' && define.amd ? define(['exports', 'polythene-theme'], factory) :
  (factory((global.polythene = {}),global['polythene-theme']));
}(this, (function (exports,polytheneTheme) { 'use strict';

  var classes = {
    component: "pe-fab",

    // elements
    content: "pe-fab__content",

    // states
    mini: "pe-fab--mini"
  };

  var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

  // Don't export 'element': it will be the wrapped raised button component (set in polythene-xxx-fab)

  // Props to be passed to a raised button, including 'content'
  var createProps = function createProps(vnode, _ref) {
    var k = _ref.keys,
        h = _ref.renderer,
        Icon = _ref.Icon;

    var attrs = vnode.attrs;
    var content = attrs.content ? attrs.content : attrs.icon ? h(Icon, attrs.icon) : attrs.children || vnode.children;
    return _extends({}, {
      content: h("div", { className: classes.content }, content),
      parentClassName: [classes.component, attrs.mini ? classes.mini : null, attrs.className || attrs[k.class]].join(" "),
      // defaults
      ripple: {
        center: true,
        opacityDecayVelocity: 0.24
      },
      shadow: { increase: 5 },
      ink: true,
      wash: true,
      animateOnTap: attrs.animateOnTap !== undefined ? attrs.animateOnTap : true
    }, attrs);
  };

  var createContent = function createContent(vnode) {
    return vnode.children;
  };

  var fab = /*#__PURE__*/Object.freeze({
    createProps: createProps,
    createContent: createContent
  });

  var rgba = function rgba(colorStr) {
    var opacity = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
    return "rgba(" + colorStr + ", " + opacity + ")";
  };

  var vars = {
    size_regular: 7 * polytheneTheme.vars.grid_unit_component,
    size_mini: 5 * polytheneTheme.vars.grid_unit_component,
    padding_regular: 2 * polytheneTheme.vars.grid_unit_component,

    color_light: rgba(polytheneTheme.vars.color_primary_foreground),
    color_light_focus_background: rgba(polytheneTheme.vars.color_light_foreground, polytheneTheme.vars.blend_light_background_hover),

    color_light_focus_opacity: polytheneTheme.vars.blend_light_background_hover_medium, // same as button
    color_light_background: rgba(polytheneTheme.vars.color_primary),

    color_dark: rgba(polytheneTheme.vars.color_primary_foreground),
    color_dark_focus_background: rgba(polytheneTheme.vars.color_dark_foreground, polytheneTheme.vars.blend_dark_background_hover), // same as button
    color_dark_background: rgba(polytheneTheme.vars.color_primary)
  };

  exports.coreFAB = fab;
  exports.vars = vars;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=polythene-core-fab.js.map
