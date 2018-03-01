import classes from "polythene-css-classes/drawer";

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
        attrs.fixed ? classes.fixed : null,
        attrs.anchor === "end" ? classes.anchorEnd : null,
      ].join(" "),
      inactive: attrs.permanent && !attrs.mini,
      z: attrs.z !== undefined
        ? attrs.z
        : 1
    }
  );
};

export const createContent = () => null;
