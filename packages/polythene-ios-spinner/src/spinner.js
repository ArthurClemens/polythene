import m from "mithril";
import spinner from "polythene-spinner";
import { customTheme } from "./theme";
import classes from "./classes";

const view = ({ attrs }) => {
  const blades = [];
  for (let i = 0 ; i < 12; i = i + 1) {
    blades.push(m("div", {
      class: classes.blade
    }));
  }
  attrs.content = m("div", {
    class: classes.blades
  }, blades);
  attrs.instanceClass = classes.component;
  return m(spinner, attrs);
};

export default {
  theme: customTheme, // accepts (selector, vars)
  view
};
