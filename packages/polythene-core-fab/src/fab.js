import classes from "polythene-css-classes/fab";

// Don't export 'element': it will be the wrapped raised button component (set in polythene-xxx-fab)

// Props to be passed to a Button, including 'content'
export const createProps = (vnode, { keys: k, renderer: h, Icon }) => {
  const attrs = vnode.attrs;
  const content = attrs.content
    ? attrs.content
    : attrs.icon
      ? h(Icon, attrs.icon)
      : attrs.children || vnode.children;
  return Object.assign(
    {},
    attrs,
    {
      content: h("div",
        { className: classes.content },
        content
      ),
      parentClassName: [
        classes.component,
        attrs.mini ? classes.mini : null,
        attrs.className || attrs[k.class],
      ].join(" "),
      // defaults
      ripple: {
        center: true,
        opacityDecayVelocity: 0.24
      },
      shadow: { increase: 5 },
      ink: true,
      wash: true,
      raised: true,
      animateOnTap: attrs.animateOnTap !== undefined
        ? attrs.animateOnTap
        : true
    }
  );
};

export const createContent = vnode =>
  vnode.children;
