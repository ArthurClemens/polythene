import m from "mithril";
import { selectionControl } from "polythene-selection-control";
import { controlView } from "./control-view";
import { customTheme } from "./theme";

export const classes = {
  component: "pe-switch-control"
};

const view = vnode => {
  return m(selectionControl, {
    ...vnode.attrs,
    controlView,
    selectable: vnode.attrs.selectable || (() => true), // default: always selectable, regardless the checked state
    defaultClass: classes.component,
    type: "checkbox"
  });
};

export const switchButton = {
  theme: customTheme, // accepts (selector, vars)
  view
};
