import m from "mithril";
import { filterSupportedAttributes } from "polythene-core";

const CSS_CLASSES = {
  component: "pe-svg"
};

const view = (vnode) => {
  const attrs = vnode.attrs;
  const element = attrs.element || "div";
  const props = Object.assign(
    {},
    filterSupportedAttributes(attrs),
    {
      class: [CSS_CLASSES.component, attrs.class].join(" "),
    }
  );
  const content = attrs.content;
  return m(element, props, [attrs.before, content, attrs.after]);
};

export const svg = {
  view
};

