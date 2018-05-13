import { filterSupportedAttributes } from 'polythene-core';
import { vars } from 'polythene-theme';

var classes = {
  component: "pe-shadow",

  // elements
  bottomShadow: "pe-shadow__bottom",
  topShadow: "pe-shadow__top",

  // states
  animated: "pe-shadow--animated",
  depth_n: "pe-shadow--z-"
};

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var getElement = function getElement(vnode) {
  return vnode.attrs.element || "div";
};

var createProps = function createProps(vnode, _ref) {
  var k = _ref.keys;

  var attrs = vnode.attrs;
  return _extends({}, filterSupportedAttributes(attrs), {
    className: [classes.component, attrs.animated && classes.animated, attrs.className || attrs[k.class]].join(" ")
  });
};

var createContent = function createContent(vnode, _ref2) {
  var h = _ref2.renderer;

  var attrs = vnode.attrs;
  var content = attrs.content ? attrs.content : attrs.children || vnode.children;
  var depthClass = "" + classes.depth_n + Math.min(5, attrs.z !== undefined ? attrs.z : 1);
  return [content, h("div", {
    key: "bottom",
    className: [classes.bottomShadow, depthClass].join(" ")
  }), h("div", {
    key: "top",
    className: [classes.topShadow, depthClass].join(" ")
  })];
};

var shadow = /*#__PURE__*/Object.freeze({
  getElement: getElement,
  createProps: createProps,
  createContent: createContent
});

var vars$1 = {
  general_styles: true,

  transition: "box-shadow " + vars.animation_duration + " ease-out",

  shadow_top_z_1: "initial",
  shadow_bottom_z_1: "0 1px 4px 0 rgba(0, 0, 0, 0.37)",

  shadow_top_z_2: "0 2px 2px 0 rgba(0, 0, 0, 0.2)",
  shadow_bottom_z_2: "0 6px 10px 0 rgba(0, 0, 0, 0.3)",

  shadow_top_z_3: "0 11px 7px 0 rgba(0, 0, 0, 0.19)",
  shadow_bottom_z_3: "0 13px 25px 0 rgba(0, 0, 0, 0.3)",

  shadow_top_z_4: "0 14px 12px 0 rgba(0, 0, 0, 0.17)",
  shadow_bottom_z_4: "0 20px 40px 0 rgba(0, 0, 0, 0.3)",

  shadow_top_z_5: "0 17px 17px 0 rgba(0, 0, 0, 0.15)",
  shadow_bottom_z_5: "0 27px 55px 0 rgba(0, 0, 0, 0.3)"
};

export { shadow as coreShadow, vars$1 as vars };
