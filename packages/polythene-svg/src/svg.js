import m from "mithril";
import { filterSupportedAttributes } from "polythene-core";
import { customTheme } from "./theme";

export const classes = {
  component: "pe-svg"
};

const view = vnode => {
  const attrs = vnode.attrs;
  const element = attrs.element || "div";
  const props = Object.assign(
    {},
    filterSupportedAttributes(attrs),
    {
      class: [classes.component, attrs.class].join(" "),
    }
  );
  const children = vnode.children.length && vnode.children || attrs.children;
  const content = attrs.content
    ? attrs.content
    : children && children[0]
      ? children
      : null;
  return m(element, props, [attrs.before, content, attrs.after]);
};

export const svg = {
  theme: customTheme, // accepts (selector, vars)
  view
};

