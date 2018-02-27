import classes from "polythene-css-classes/drawer";
// import defaultPushTransitions from "./transitions-push";

// Props to be passed to a dialog
export const createProps = vnode => {
  const attrs = vnode.attrs;
  const isCover = !(attrs.push || attrs.permanent || attrs.mini);
  return Object.assign(
    {},
    attrs,
    {
      anchored: true,
      fullBleed: true,
      parentClassName: [
        attrs.className,
        classes.component,
        isCover ? classes.cover : null,
        attrs.push ? classes.push : null,
        attrs.permanent ? classes.permanent : null,
        attrs.bordered ? classes.bordered : null,
        attrs.mini ? classes.mini : null,
        attrs.floating ? classes.floating : null,
      ].join(" "),
      // transitions: attrs.transitions
      //   ? attrs.transitions
      //   : attrs.mini
      //     ? null // no default transition; uses CSS
      //     : attrs.push
      //       ? defaultPushTransitions
      //       : null,
      inactive: attrs.permanent && !attrs.mini,
      z: attrs.z !== undefined
        ? attrs.z
        : 1
    }
  );
};

export const createContent = () => null;
