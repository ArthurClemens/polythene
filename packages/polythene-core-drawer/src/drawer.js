import classes from "polythene-css-classes/drawer";

// Props to be passed to a dialog
export const createProps = vnode => {
  const attrs = vnode.attrs;
  const isCover = !(attrs.push || attrs.permanent || attrs.mini);
  return Object.assign(
    {},
    attrs,
    {
      fullBleed: true,
      className: null,
      parentClassName: [
        attrs.className,
        classes.component,
        isCover ? classes.cover : null,
        attrs.push ? classes.push : null,
        attrs.permanent ? classes.permanent : null,
        attrs.border ? classes.border : null,
        attrs.mini ? classes.mini : null,
        attrs.floating ? classes.floating : null,
        attrs.fixed ? classes.fixed : null,
        attrs.anchor === "end" ? classes.anchorEnd : null,
      ].join(" "),
      inactive: attrs.permanent && !attrs.mini,
      z: attrs.z !== undefined
        ? attrs.z
        : 0
    }
  );
};

export const createContent = vnode => vnode.children;
