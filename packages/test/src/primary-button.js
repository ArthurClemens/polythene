import m from "mithril";
import { button } from "polythene-button";
import {styler} from "polythene-css";

const styles = [{
  ".pe-button.my-button--primary .pe-button__content": {
    background: "#fff",
    "border-color": "#ddd"
  }
}];
styler.add("primary-button", styles);

export default {
  view: (vnode) => {
    return m(button, {
      ...vnode.attrs,
      class: (vnode.attrs.class || "") + " my-button--primary",
      borders: true,
      raised: false
    });
  }
};
