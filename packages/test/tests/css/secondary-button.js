import m from "mithril";
import { button } from "polythene-button";
import { styler } from "polythene-css";

const styles = [{
  ".pe-button.secondary-button .pe-button__content": {
    backgroundColor: "#fff",
    borderColor: "#ddd"
  }
}];
styler.add("secondary-button", styles);

export const secondaryButton = {
  view: vnode => m(button, {
    class: "secondary-button",
    borders: true,
    raised: false,
    ...vnode.attrs
  })
};
