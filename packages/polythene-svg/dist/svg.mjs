import m from 'mithril';
import { filterSupportedAttributes } from 'polythene-core';

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

// No theme

var classes = {
  component: "pe-svg"
};

var view = function view(vnode) {
  var attrs = vnode.attrs;
  var element = attrs.element || "div";
  var props = _extends({}, filterSupportedAttributes(attrs), {
    class: [classes.component, attrs.class].join(" ")
  });
  var children = vnode.children.length && vnode.children || attrs.children;
  var content = attrs.content ? attrs.content : children && children[0] ? children : null;
  return m(element, props, [attrs.before, content, attrs.after]);
};

var svg = {
  view: view
};

export { svg };
