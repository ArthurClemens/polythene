import classes from "polythene-css-classes/drawer";
import transitionFromLeft from "./transition-from-left";

// Don't export 'element': it will be the wrapped menu component (set in polythene-xxx-menu)

// Props to be passed to the menu component, including 'content'
export const createProps = (vnode, { keys: k, renderer: h }) => {
  const attrs = vnode.attrs;
  const content = attrs.content
    ? attrs.content
    : attrs.children || vnode.children;
  return Object.assign(
    {},
    {
      content: h("div",
        { className: classes.content },
        content
      ),
      parentClassName: [
        classes.component,
        attrs.className || attrs[k.class],
      ].join(" "),
      transitions: {...transitionFromLeft}
    },
    attrs
  );
};

export const createContent = () => null;
