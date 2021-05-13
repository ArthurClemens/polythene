import classes from "polythene-css-classes/icon-button";

export const _IconButton = ({ h, Icon, Button, ...props }) => {
  const content = props.content
    ? props.content
    : props.icon
    ? h(Icon, props.icon)
    : props.children;
  const buttonProps = Object.assign(
    {},
    {
      content: h("div", { className: classes.content }, content),
      after: props.label && h("div", { className: classes.label }, props.label),
      parentClassName: [
        props.parentClassName || classes.component,
        props.compact ? classes.compact : null,
      ].join(" "),
      // defaults
      wash: false,
      animateOnTap: false,
    },
    props
  );

  return h(Button, buttonProps);
};
