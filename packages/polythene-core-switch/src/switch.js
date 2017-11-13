import classes from "polythene-css-classes/switch";

// Don't export 'element': it will be the wrapped selection control component (set in polythene-xxx-checkbox)

// Props to be passed to a selection control

export const createProps = vnode => {
  const attrs = vnode.attrs;
  return Object.assign(
    {},
    attrs,
    {
      selectable: attrs.selectable || (() => true), // default: always selectable, regardless the checked state
      instanceClass: classes.component,
      type: "checkbox"
    }
  );
};
