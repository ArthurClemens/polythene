import m from "mithril";
import { filterSupportedAttributes } from "polythene-core";
import "./theme";

const CSS_CLASSES = {
  component: "pe-shadow",
  topShadow: "pe-shadow__top",
  bottomShadow: "pe-shadow__bottom",
  animated: "pe-shadow--animated",
  depth_n: "pe-shadow--z-"
};

const view = vnode => {
  const attrs = vnode.attrs;
  const depthClass = `${CSS_CLASSES.depth_n}${Math.min(5, attrs.z !== undefined ? attrs.z : 1)}`;
  const element = attrs.element || "div";
  const props = Object.assign(
    {},
    filterSupportedAttributes(attrs),
    {
      class: [
        CSS_CLASSES.component,
        attrs.animated && CSS_CLASSES.animated,
        attrs.class
      ].join(" ")
    }
  );
  const content = attrs.content
    ? attrs.content
    : vnode.children && vnode.children[0]
      ? vnode.children
      : null;
  const shadowContent = [
    content,
    m("div", {
      class: [CSS_CLASSES.bottomShadow, depthClass].join(" ")
    }),
    m("div", {
      class: [CSS_CLASSES.topShadow, depthClass].join(" ")
    })
  ];
  return m(element, props, [attrs.before, shadowContent, attrs.after]);
};

export const shadow = {
  view
};
