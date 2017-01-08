import m from "mithril";
import { iconButton } from "polythene-icon-button";
import { customTheme } from "./theme";

const classes = {
  component: "pe-button--fab",
  mini:      "pe-button--fab-mini"
};

const view = vnode => {
  const attrs = vnode.attrs;
  const children = vnode.children.length && vnode.children || attrs.children;
  return m(iconButton, Object.assign(
    {},
    {
      parentClass: [
        classes.component,
        attrs.mini ? classes.mini : null
      ].join(" "),
      // defaults
      raised: true,
      ripple: {
        center: true,
        opacityDecayVelocity: 0.24
      },
      shadow: {
        increase: 5
      },
      ink: true,
      wash: true,
      animateOnTap: true,
      children
    },
    attrs
  ));
};

export const fab = {
  theme: customTheme, // accepts (className, vars)
  view
};
