import m from "mithril";
import iconButton from "polythene-icon-button";
import { arrowForward, arrowBackward } from "./theme";
import classes from "./classes";

const view = vnode => {
  const attrs = vnode.attrs;
  const icon = attrs.position === "start"
    ? attrs.icon || arrowBackward
    : attrs.icon || arrowForward;
  return m(iconButton, {
    class: [
      classes.scrollButton,
      attrs.class
    ].join(" "),
    icon,
    ripple: { center: true },
    events: attrs.events,
    oncreate: vnode => attrs.register(attrs.position, vnode.dom)
  });
};

export default {
  view
};
