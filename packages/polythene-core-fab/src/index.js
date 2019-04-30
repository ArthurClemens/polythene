import classes from "polythene-css-classes/fab";

export const _FAB = ({ h, a, Button, Icon, ...props }) => {
  const content = props.content
    ? props.content
    : props.icon
      ? h(Icon, props.icon)
      : props.children;
  const componentProps = Object.assign(
    {},
    props,
    {
      content: h("div",
        { className: classes.content },
        content
      ),
      parentClassName: [
        classes.component,
        props.mini ? classes.mini : null,
        props.className || props[a.class],
      ].join(" "),
      className: null,
      // defaults
      ripple: {
        center: true,
        opacityDecayVelocity: 0.24
      },
      shadow: { increase: 5 },
      ink: true,
      wash: true,
      raised: true,
      animateOnTap: props.animateOnTap !== undefined
        ? props.animateOnTap
        : true
    }
  );
  return h(Button, componentProps, content);
};
