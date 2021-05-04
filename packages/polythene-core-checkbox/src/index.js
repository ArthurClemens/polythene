import classes from "polythene-css-classes/checkbox";

const iconOn =
  '<svg width="24" height="24" viewBox="0 0 24 24"><path d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>';
const iconOff =
  '<svg width="24" height="24" viewBox="0 0 24 24"><path d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"/></svg>';

const icons = {
  iconOff,
  iconOn,
};

export const _Checkbox = ({ h, SelectionControl, ...props }) => {
  const componentProps = Object.assign({}, props, {
    icons,
    selectable: props.selectable || (() => true), // default: always selectable, regardless the checked state
    instanceClass: classes.component,
    type: "checkbox",
    aria: Object.assign({}, props.aria, { role: "checkbox" }), // force role 'checkbox'
  });
  return h(SelectionControl, componentProps);
};
