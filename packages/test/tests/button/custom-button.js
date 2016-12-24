import m from "mithril";
import { button } from "polythene-button";
import { styler } from "polythene-css";

const styles = [{
  ".pe-button.my-custom-button .pe-button__content": {
    background: "#fff",
    "border-color": "#ddd"
  }
}];
styler.add("custom-button", styles);

export const customButton = {
  view: (vnode) => {
    return m(button, {
      ...vnode.attrs,
      class: (vnode.attrs.class || "") + " my-custom-button",
      borders: true,
      raised: false
    });
  }
};
