import classes from "polythene-css-classes/drawer";

export const getElement = vnode =>
  vnode.attrs.element || "div";
  
// Props to be passed to Dialog
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
      shadowDepth: attrs.shadowDepth !== undefined
        ? attrs.shadowDepth
        : 0,
      // deprecated:
      z: attrs.z !== undefined
        ? attrs.z
        : undefined
    }
  );
};

export const createContent = vnode => vnode.children;
