import m from "mithril";
import { styler } from "polythene-css";

const ID = "my-component";
const CLASS = "my-component";

const myStyle = [{
  [`.${CLASS}`]: {
    "background-color": "#FF1744"
  }
}];

styler.add(ID, myStyle);

export const tests = [
  {
    name: "Element should be red",
    component: {
      view: () => 
        m("div", {
          class: CLASS,
          style: {
            width: "100px",
            height: "100px"
          }
        })
    },
    attrs: null
  }
];
