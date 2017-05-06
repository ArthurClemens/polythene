import { customTheme } from "./theme";
import classes from "./classes";

export const theme = customTheme;

// Don't export 'element': that will be the wrapped raised button component (set in polythene-xxx-fab)

// Props to be passed to a raised button, including 'content'

export const createProps = (vnode, { keys: k, renderer: h, icon }) => {
  const attrs = vnode.attrs;
  const content = attrs.content
    ? attrs.content
    : attrs.icon
      ? h(icon, attrs.icon)
      : attrs.children || vnode.children;
  return Object.assign(
    {},
    {
      content: h("div", {
        className: classes.content
      }, content),
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
      animateOnTap: attrs.animateOnTap !== undefined
        ? attrs.animateOnTap
        : true
    },
    attrs
  );
};

export const createContent = () => null;
