import classes from "polythene-css-classes/drawer";
import defaultCoverTransitions from "./transitions-cover";
import defaultPushTransitions from "./transitions-push";
import defaultBackdropTransitions from "./backdrop-transitions";

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
      transitions: attrs.transitions
        ? attrs.transitions
        : attrs.push
          ? defaultPushTransitions
          : defaultCoverTransitions,
      backdropTransitions: attrs.backdropTransitions || defaultBackdropTransitions
    }
  );
};

export const createContent = () => null;
