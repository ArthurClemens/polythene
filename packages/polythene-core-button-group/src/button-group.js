import { filterSupportedAttributes } from "polythene-core";
import classes from "polythene-css-classes/button-group";

// Don't export 'getElement': it will be the wrapped button component (set in polythene-xxx-button-group)

export const createProps = (vnode, { keys: k }) => {
  const attrs = vnode.attrs;
  return Object.assign(
    {},
    filterSupportedAttributes(attrs), // style set in content, and set by show/hide transition
    {
      className: [
        classes.component,
        attrs.separator ? classes.separator : null,
        attrs.className || attrs[k.class],
      ].join(" "),
    }
  );
};

export const createContent = vnode =>
  vnode.children;
