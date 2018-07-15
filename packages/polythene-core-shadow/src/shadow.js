import { filterSupportedAttributes, deprecation } from "polythene-core";
import classes from "polythene-css-classes/shadow";

export const getElement = vnode =>
  vnode.attrs.element || "div";

export const onMount = ({ attrs }) => {
  if (attrs.z !== undefined) {
    deprecation("Shadow", "z", "shadowDepth");
  }
};

export const createProps = (vnode, { keys: k }) => {
  const attrs = vnode.attrs;
  return Object.assign(
    {},
    filterSupportedAttributes(attrs),
    {
      className: [
        classes.component,
        attrs.animated && classes.animated,
        attrs.className || attrs[k.class],
      ].join(" ")
    }
  );
};

export const createContent = (vnode, { renderer: h }) => {
  const attrs = vnode.attrs;
  const content = attrs.content
    ? attrs.content
    : attrs.children || vnode.children;
  const shadowDepth = attrs.shadowDepth !== undefined
    ? attrs.shadowDepth
    : attrs.z; // deprecated
  const depthClass = shadowDepth !== undefined
    ? `${classes.depth_n}${Math.min(5, shadowDepth)}`
    : null;
  return [
    content,
    h("div", {
      key: "bottom",
      className: [classes.bottomShadow, depthClass].join(" ")
    }),
    h("div", {
      key: "top",
      className: [classes.topShadow, depthClass].join(" ")
    })
  ];
};
