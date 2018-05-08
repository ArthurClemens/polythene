import classes from "polythene-css-classes/split-button";

// Don't export 'getElement': it will be the wrapped button component (set in polythene-xxx-split-button)

export const createProps = (vnode, { keys: k }) => {
  const attrs = vnode.attrs;
  return Object.assign(
    {},
    {
      className: [
        classes.component,
        attrs.separator ? classes.separator : null,
        attrs.className || attrs[k.class],
      ].join(" "),
    },
    attrs
  );
};

export const createContent = vnode =>
  vnode.children;
