(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (factory((global.polythene = {})));
}(this, (function (exports) { 'use strict';

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

  exports.coreIconButton = iconButton;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=polythene-core-icon-button.js.map
