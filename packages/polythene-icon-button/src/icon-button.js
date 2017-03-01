import m from "mithril";
import icon from "polythene-icon";
import button from "polythene-button";
import { customTheme } from "./theme";

export const classes = {
  component: "pe-button pe-icon-button",
  content:   "pe-icon-button__content",
  compact:   "pe-icon-button--compact"
};

const view = vnode => {
  const attrs = vnode.attrs;
  const content = attrs.content
    ? attrs.content
    : attrs.icon
      ? m(icon, attrs.icon)
      : attrs.children || vnode.children;
  return m(button, Object.assign(
    {},
    {
      content: m("div", {class: classes.content}, content),
      parentClass: [
        attrs.parentClass || classes.component,
        attrs.compact ? classes.compact : null,
      ].join(" "),
      // defaults
      wash: false,
      animateOnTap: false
    },
    attrs
  ));
};

export default {
  theme: customTheme, // accepts (selector, vars)
  view
};
