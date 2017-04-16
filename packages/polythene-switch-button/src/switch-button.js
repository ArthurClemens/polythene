import m from "mithril";
import { selectionControl } from "polythene-selection-control";
import { controlView } from "./control-view";
import { customTheme } from "./theme";
import classes from "./classes";

const view = vnode => {
  return m(selectionControl, {
    ...vnode.attrs,
    controlView,
    selectable: vnode.attrs.selectable || (() => true), // default: always selectable, regardless the checked state
    instanceClass: classes.component,
    type: "checkbox"
  });
};

export default {
  theme: customTheme, // accepts (selector, vars)
  view
};
