import classes from "polythene-css-classes/button-group";

// Don't export 'getElement': it will be the wrapped button component (set in polythene-xxx-button-group)

export const createProps = (vnode, { keys: k }) => {
  const attrs = vnode.attrs;
  return Object.assign(
    {},
    {
      className: [
        classes.component,
        attrs.className || attrs[k.class],
      ].join(" "),
    }
  );
};

export const createContent = vnode =>
  vnode.children;
