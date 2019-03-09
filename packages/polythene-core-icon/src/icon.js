import { filterSupportedAttributes, classForSize } from "polythene-core";
import classes from "polythene-css-classes/icon";

export const getElement = vnode =>
  vnode.attrs.element || "div";

export const createProps = (vnode, { keys: k }) => {
  const attrs = vnode.attrs;
  return Object.assign(
    {},
    filterSupportedAttributes(attrs),
    attrs.testId && { "data-test-id": attrs.testId },
    {
      className: [
        classes.component,
        classForSize(classes, attrs.size),
        attrs.avatar ? classes.avatar : null,
        attrs.tone === "dark" ? "pe-dark-tone" : null,
        attrs.tone === "light" ? "pe-light-tone" : null,
        attrs.className || attrs[k.class],
      ].join(" "),
    },
    attrs.events
  );
};

export const createContent = (vnode, { renderer: h, SVG }) => {
  const attrs = vnode.attrs;
  return attrs.content
    ? attrs.content
    : attrs.svg
      ? h(SVG, attrs.svg)
      : attrs.src
        ? h("img", { src: attrs.src })
        : attrs.children || vnode.children;
};
