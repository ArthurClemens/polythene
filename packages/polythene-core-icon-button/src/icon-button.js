import { customTheme } from "./theme";
import classes from "./classes";

export const theme = customTheme;

// Don't export 'element': that will be the wrapped button component (set in polythene-xxx-icon-button)

// Props to be passed to a button, including 'content'

export const createProps = (vnode, { renderer: h, Icon }) => {
  const attrs = vnode.attrs;
  const content = attrs.content
    ? attrs.content
    : attrs.icon
      ? h(Icon, attrs.icon)
      : attrs.children || vnode.children;
  return Object.assign(
    {},
    {
      content: h("div", { className: classes.content }, content),
      parentClassName: [
        attrs.parentClassName || classes.component,
        attrs.compact ? classes.compact : null,
      ].join(" "),
      // defaults
      wash: false,
      animateOnTap: false,
      element: attrs.element
    },
    attrs
  );
};

export const createContent = () => null;
