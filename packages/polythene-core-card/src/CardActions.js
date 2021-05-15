import { filterSupportedAttributes, processDataset } from "polythene-core";
import classes from "polythene-css-classes/card";
import buttonClasses from "polythene-css-classes/button";

const actionLayoutClasses = {
  horizontal: classes.actionsHorizontal,
  vertical: classes.actionsVertical,
  justified: classes.actionsJustified,
};

const actionClassForLayout = (layout = "horizontal") =>
  actionLayoutClasses[layout];

export const _CardActions = ({ h, a, ...props }) => {
  const componentProps = Object.assign(
    {},
    filterSupportedAttributes(props),
    processDataset(props),
    props.testId && { "data-test-id": props.testId },
    {
      className: [
        classes.actions,
        props.layout !== "vertical" ? buttonClasses.row : null,
        actionClassForLayout(props.layout),
        props.border || props.bordered ? classes.actionsBorder : null,
        props.tight ? classes.actionsTight : null,
        props.className || props[a.class],
      ].join(" "),
    },
    props.events
  );

  const content = props.content || props.children;
  return h(props.element || "div", componentProps, content);
};
