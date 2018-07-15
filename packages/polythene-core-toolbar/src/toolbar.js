import { filterSupportedAttributes, deprecation } from "polythene-core";
import classes from "polythene-css-classes/toolbar";

export const getElement = vnode =>
  vnode.attrs.element || "div";

export const onMount = ({ attrs }) => {
  if (attrs.z !== undefined) {
    deprecation("Toolbar", "z", "shadowDepth");
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
        attrs.compact ? classes.compact : null,
        attrs.fullbleed ? classes.fullbleed : null,
        attrs.border ? classes.border : null,
        attrs.tone === "dark" ? "pe-dark-tone" : null,
        attrs.tone === "light" ? "pe-light-tone" : null,
        attrs.className || attrs[k.class],
      ].join(" ")
    },
    attrs.events
  );
};

export const createContent = (vnode, { renderer, Shadow }) => {
  const attrs = vnode.attrs;
  const content = attrs.content
    ? attrs.content
    : attrs.children || vnode.children;
  const shadowDepth = attrs.shadowDepth !== undefined
    ? attrs.shadowDepth
    : attrs.z; // deprecated
  const shadow = shadowDepth !== undefined
    ? renderer(Shadow, {
      shadowDepth,
      animated: true,
      key: "shadow"
    })
    : null;
  return [
    content,
    shadow
  ];
};
