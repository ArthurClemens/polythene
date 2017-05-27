import m from "mithril";
import { SelectionControl, controlView } from "polythene-mithril-selection-control";
import { theme, customTheme } from "./theme";
import classes from "./classes";

const view = vnode => {
  return m(SelectionControl, {
    ...vnode.attrs,
    theme,
    controlView,
    selectable: vnode.attrs.selectable || ((selected) => !selected), // default: only selectable when not checked
    instanceClass: classes.component,
    type: "radio"
  });
};

export default {
  theme: customTheme, // accepts (selector, vars)
  view
};
