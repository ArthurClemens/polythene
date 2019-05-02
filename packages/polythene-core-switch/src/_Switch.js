
import classes from "polythene-css-classes/switch";

export const _Switch = ({ h, SelectionControl, ...props }) => {
  const componentProps = Object.assign({},
    props,
    {
      selectable: props.selectable || (() => true), // default: always selectable, regardless of the checked state
      instanceClass: classes.component,
      type: "checkbox"
    }
  );
  return h(SelectionControl, componentProps);
};
