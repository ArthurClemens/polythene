import m from "mithril";
import { icon } from "polythene-icon";
import { button } from "polythene-button";
import "./theme";

const CSS_CLASSES = {
  component: "pe-button pe-button--icon",
  content:   "pe-button--icon__content",
  compact:   "pe-button--compact"
};

const view = vnode => {
  const attrs = vnode.attrs;
  const content = attrs.content
    ? attrs.content
    : vnode.children && vnode.children[0]
      ? vnode.children
      : attrs.icon
        ? m(icon, attrs.icon)
        : null;
  return m(button, Object.assign(
    {},
    {
      content: m("div", {class: CSS_CLASSES.content}, content),
      parentClass: [
        attrs.parentClass || CSS_CLASSES.component,
        attrs.compact ? CSS_CLASSES.compact : null,
      ].join(" "),
      // defaults
      wash: false,
      animateOnTap: false
    },
    attrs
  ));
};

export const iconButton = {
  view
};
