import m from "mithril";
import { selectionControl, controlView } from "polythene-selection-control";
import { theme, customTheme } from "./theme";

export const classes = {
  component: "pe-radio-control"
};

const view = vnode => {
  return m(selectionControl, {
    ...vnode.attrs,
    theme,
    controlView,
    selectable: vnode.attrs.selectable || ((selected) => !selected),
    defaultClass: classes.component,
    type: "radio"
  });
};

export const radioButton = {
  theme: customTheme, // accepts (selector, vars)
  view
};
