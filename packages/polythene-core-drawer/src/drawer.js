import classes from "polythene-css-classes/drawer";
import transitionsOverFromLeft from "./transitions-over-from-left";
import transitionsPushFromLeft from "./transitions-push-from-left";

// Props to be passed to a dialog
export const createProps = vnode => {
  const attrs = vnode.attrs;
  return Object.assign(
    {},
    attrs,
    {
      anchored: true,
      fullBleed: true,
      className: [
        attrs.className,
        classes.component,
        attrs.push ? classes.push : null,
        attrs.permanent ? classes.permanent : null,
        attrs.bordered ? classes.bordered : null,
      ].join(" "),
      transitions: attrs.push
        ? transitionsPushFromLeft
        : transitionsOverFromLeft
    }
  );
};

export const createContent = () => null;
