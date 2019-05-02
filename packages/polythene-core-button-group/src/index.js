import classes from "polythene-css-classes/button-group";

export const _ButtonGroup = ({ h, a, ...props }) => {
  const componentProps = Object.assign(
    {},
    props.testId && { "data-test-id": props.testId },
    {
      className: [
        classes.component,
        props.className || props[a.class],
      ].join(" "),
    }
  );
  return h(props.element || "div", componentProps, props.children);
};
