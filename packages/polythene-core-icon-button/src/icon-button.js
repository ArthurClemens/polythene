import classes from "polythene-css-classes/icon-button";

// Don't export 'element': it will be the wrapped button component (set in polythene-xxx-icon-button)

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
      after: attrs.label && h("div", { className: classes.label }, attrs.label),
      parentClassName: [
        attrs.parentClassName || classes.component,
        attrs.compact ? classes.compact : null,
      ].join(" "),
      // defaults
      wash: false,
      animateOnTap: false
    },
    attrs
  );
};

export const createContent = vnode =>
  vnode.children;
