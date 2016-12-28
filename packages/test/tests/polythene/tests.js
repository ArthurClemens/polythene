import m from "mithril";
import * as polythene from "polythene";

polythene.webfontLoader.add("google", "Raleway:400,500,600:latin");

export const tests = [
  {
    name: "Button",
    component: polythene.button,
    attrs: {
      label: "Button"
    }
  },
  {
    name: "Ripple",
    component: polythene.ripple,
    attrs: {}
  },
  {
    name: "Shadow",
    component: polythene.shadow,
    attrs: {}
  },
  {
    name: "Web font loader",
    component: {
      view: () => m("p", {
        style: {
          "font-family": "Raleway",
          "font-weight": 600
        }
      }, "Test in Raleway font")
    },
    attrs: {}
  }
];
