import h from 'react-hyperscript';

// import React from "react";
var keys = {
  class: "className",
  onblur: "onBlur",
  onclick: "onClick",
  onfocus: "onFocus",
  onkeydown: "onKeyDown",
  onkeyup: "onKeyUp",
  onmousedown: "onMouseDown",
  onmouseout: "onMouseOut",
  onmouseover: "onMouseOver",
  onmouseup: "onMouseUp",
  tabindex: "tabIndex"
};

var keyer = keys;

// Copied from mithril.js: function hyperscript(selector)
//
// Takes:
// renderer(selector, args, children)
// renderer(selector, children)

// const _renderer = function(selector, args, children) {
//   let _children = children;
//   if (!Array.isArray(_children)) _children = [children];
//   return React.createElement(selector, args, _children);
// };

// export const renderer = function() {
//   console.log("arguments", arguments, arguments.length);
//   if (arguments.length === 3) {
//     return _renderer(arguments[0], arguments[1], arguments[2]);
//   } else if (arguments.length === 2) {
//     return _renderer(arguments[0], null, arguments[1]);
//   } else if (arguments.length === 1) {
//     return _renderer(arguments[0], null, null);
//   } else {
//     return _renderer(null, null, null);
//   }
// };

var renderer = h;

// export const renderer = function(selector) {
//   console.log("renderer", arguments);
//   console.log("selector", selector);
//   let attrs = arguments[1], start = 2, children = null;
//   if (!attrs) {
//     attrs = null;
//   } else if (typeof attrs !== "object" || attrs.tag != null || Array.isArray(attrs)) {
//     attrs = null;
//     start = 1;
//   }
//   if (arguments.length === start + 1) {
//     children = arguments[start];
//     if (!Array.isArray(children)) children = [children];
//   } else if (arguments.length > start + 1) {
//     children = [];
//     while (start < arguments.length) children.push(arguments[start++]);
//   }
//   console.log("attrs", attrs, "children", children);
//   return React.createElement(selector, attrs, children);
// };

export { keyer, renderer };
