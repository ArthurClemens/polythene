import m from "mithril";
import raisedButton from "polythene-raised-button";
import icon from "polythene-icon";
import { customTheme } from "./theme";
import classes from "./classes";

export const element = "div";

export const theme = customTheme;

export const createProps = (vnode, { keys: k }) => {
  // const attrs = vnode.attrs;
};

export const createContent = (vnode, { renderer: h }) => {
  // const attrs = vnode.attrs;
};

const view = vnode => {
  const attrs = vnode.attrs;
  const content = attrs.content
    ? attrs.content
    : attrs.icon
      ? m(icon, attrs.icon)
      : attrs.children || vnode.children;
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
      shadow: { increase: 5 },
      ink: true,
      wash: true,
      animateOnTap: attrs.animateOnTap !== undefined
        ? attrs.animateOnTap
        : true
    },
    attrs
  ));
};

export default {
  theme: customTheme, // accepts (selector, vars)
  view
};
