import classes from "polythene-css-classes/drawer";

export const _Drawer = ({ h, Dialog, ...props }) => {
  const isCover = !(props.push || props.permanent || props.mini);
  const componentProps = Object.assign({},
    props,
    {
      fullBleed: true,
      className: null,
      parentClassName: [
        props.className,
        classes.component,
        isCover ? classes.cover : null,
        props.push ? classes.push : null,
        props.permanent ? classes.permanent : null,
        props.border ? classes.border : null,
        props.mini ? classes.mini : null,
        props.floating ? classes.floating : null,
        props.fixed ? classes.fixed : null,
        props.anchor === "end" ? classes.anchorEnd : null,
      ].join(" "),
      inactive: props.permanent && !props.mini,
      shadowDepth: props.shadowDepth !== undefined
        ? props.shadowDepth
        : 0,
      // deprecated:
      z: props.z !== undefined
        ? props.z
        : undefined
    }
  );
  return h(Dialog, componentProps, props.children);
};
