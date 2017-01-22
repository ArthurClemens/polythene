import m from "mithril";
import { selectionControl, controlView } from "polythene-selection-control";
import { theme, customTheme } from "./theme";

export const classes = {
  component: "pe-checkbox-control"
};

const view = vnode => {
  return m(selectionControl, {
    ...vnode.attrs,
    theme,
    controlView,
    selectable: vnode.attrs.selectable || (() => true), // default: always selectable, regardless the checked state
    defaultClass: classes.component,
    type: "checkbox"
  });
};

export const checkbox = {
  theme: customTheme, // accepts (selector, vars)
  view
};
