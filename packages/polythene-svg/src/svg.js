import m from "mithril";
import { filterSupportedAttributes } from "polythene-core";

const classes = {
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
  const content = attrs.content
    ? attrs.content
    : vnode.children && vnode.children[0]
      ? vnode.children
      : null;
  return m(element, props, [attrs.before, content, attrs.after]);
};

export const svg = {
  view
};

