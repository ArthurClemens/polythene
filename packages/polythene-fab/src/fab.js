import m from "mithril";
import { raisedButton } from "polythene-raised-button";
import { icon } from "polythene-icon";
import { customTheme } from "./theme";

export const classes = {
  component: "pe-button--fab",
  content:   "pe-button--fab__content",
  mini:      "pe-button--fab-mini"
};

const view = vnode => {
  const attrs = vnode.attrs;
  const children = vnode.children.length && vnode.children || attrs.children;
  const content = attrs.content
    ? attrs.content
    : children && children[0]
      ? children
      : attrs.icon
        ? m(icon, attrs.icon)
        : null;
  return m(raisedButton, Object.assign(
    {},
    {
      content: m("div", {
        class: classes.content
      }, content),
      parentClass: [
        classes.component,
        attrs.mini ? classes.mini : null
      ].join(" "),
      // defaults
      ripple: {
        center: true,
        opacityDecayVelocity: 0.24
      },
      shadow: {
        increase: 5
      },
      ink: true,
      wash: true,
      animateOnTap: attrs.animateOnTap !== undefined
        ? attrs.animateOnTap
        : true,
      children
    },
    attrs
  ));
};

export const fab = {
  theme: customTheme, // accepts (selector, vars)
  view
};
