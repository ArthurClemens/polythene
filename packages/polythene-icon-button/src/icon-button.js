import m from "mithril";
import { button, icon } from "polythene-mithril";
import { customTheme } from "./theme";
import classes from "./classes";

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
