import m from "mithril";
import { icon } from "polythene-icon";
import { button } from "polythene-button";
import "./theme/index";

const CSS_CLASSES = {
  component: "pe-button pe-button--icon",
  content:   "pe-button--icon__content",
  compact:   "pe-button--compact"
};

const view = vnode => {
  const attrs = vnode.attrs;
  const content = attrs.icon
    ? m(icon, attrs.icon)
    : attrs.content
      ? attrs.content
      : null;
  return m(button, Object.assign(
    {},
    {
      content: m("div", {class: CSS_CLASSES.content}, content),
      parentClass: [
        attrs.parentClass || CSS_CLASSES.component,
        attrs.compact ? CSS_CLASSES.compact : null
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
