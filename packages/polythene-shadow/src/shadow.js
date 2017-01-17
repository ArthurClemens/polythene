import m from "mithril";
import { filterSupportedAttributes } from "polythene-core";
import { customTheme } from "./theme";

export const classes = {
  component: "pe-shadow",
  topShadow: "pe-shadow__top",
  bottomShadow: "pe-shadow__bottom",
  animated: "pe-shadow--animated",
  depth_n: "pe-shadow--z-"
};

const view = vnode => {
  const attrs = vnode.attrs;
  const depthClass = `${classes.depth_n}${Math.min(5, attrs.z !== undefined ? attrs.z : 1)}`;
  const element = attrs.element || "div";
  const props = Object.assign(
    {},
    filterSupportedAttributes(attrs),
    {
      class: [
        classes.component,
        attrs.animated && classes.animated,
        attrs.class
      ].join(" ")
    }
  );
  const content = attrs.content
    ? attrs.content
    : attrs.children || vnode.children;
  const shadowContent = [
    content,
    m("div", {
      class: [classes.bottomShadow, depthClass].join(" ")
    }),
    m("div", {
      class: [classes.topShadow, depthClass].join(" ")
    })
  ];
  return m(element, props, [attrs.before, shadowContent, attrs.after]);
};

export const shadow = {
  theme: customTheme, // accepts (selector, vars)
  view
};
