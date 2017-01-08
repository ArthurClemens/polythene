import m from "mithril";
import { icon } from "polythene-icon";
import { button } from "polythene-button";
import { customTheme } from "./theme";

const classes = {
  component: "pe-button pe-button--icon",
  content:   "pe-button--icon__content",
  compact:   "pe-button--compact"
};

const view = vnode => {
  const attrs = vnode.attrs;
  const children = vnode.children.length && vnode.children || attrs.children;
  console.log("icon-button attrs.children", attrs.children);
  console.log("icon-button children", children && children[0] ? children : null);
  const content = attrs.content
    ? attrs.content
    : children && children[0]
      ? children
      : attrs.icon
        ? m(icon, attrs.icon)
        : null;
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

export const iconButton = {
  theme: customTheme, // accepts (className, vars)
  view
};
