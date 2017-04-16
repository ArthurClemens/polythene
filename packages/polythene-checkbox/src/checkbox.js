import m from "mithril";
import { selectionControl, controlView } from "polythene-selection-control";
import { theme, customTheme } from "./theme";
import classes from "./classes";

const view = vnode => {
  return m(selectionControl, {
    ...vnode.attrs,
    theme,
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
