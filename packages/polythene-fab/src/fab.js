import m from "mithril";
import { iconButton } from "polythene-icon-button";
import "./theme";

const CSS_CLASSES = {
  component: "pe-button--fab",
  mini:      "pe-button--fab-mini"
};

const view = vnode => {
  const attrs = vnode.attrs;
  return m(iconButton, Object.assign(
    {},
    {
      parentClass: [
        CSS_CLASSES.component,
        attrs.mini ? CSS_CLASSES.mini : null
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
      animateOnTap: true
    },
    attrs
  ));
};

export const fab = {
  view
};
