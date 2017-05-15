import { filterSupportedAttributes } from "polythene-core";
import { customTheme } from "./theme";
import classes from "./classes";

export const element = "div";

export const theme = customTheme;

const typeClasses = {
  small:   classes.small,
  regular: classes.regular,
  medium:  classes.medium,
  large:   classes.large
};

const classForType = (mode = "regular") => typeClasses[mode];

export const createProps = (vnode, { keys: k }) => {
  const attrs = vnode.attrs;
  return Object.assign(
    {},
    filterSupportedAttributes(attrs),
    {
      className: [
        classes.component,
        classForType(attrs.type),
        attrs.avatar ? classes.avatar : null,
        attrs.tone === "dark" ? "pe-dark-tone" : null,
        attrs.tone === "light" ? "pe-light-tone" : null,
        attrs.className || attrs[k.class],
      ].join(" "),
    },
    attrs.events ? attrs.events : null
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
