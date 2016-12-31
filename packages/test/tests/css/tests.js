import m from "mithril";
import { button } from "polythene-button";
import { styler } from "polythene-css";
import { secondaryButton } from "./secondary-button";

const myStyle = [{
  ".my-component": {
    "background-color": "#FF1744"
  }
}];

styler.add("my-component", myStyle);

const buttonStyles = [
  {
    ".send-button .pe-button__content": {
      "background-color": "#FF1744",
      color: "white"
    },
    ".info-button .pe-button__content": {
      "background-color": "#2196f3",
      color: "white"
    }
  }
];

styler.add("app-buttons", buttonStyles);

const colors = {
  send: "#FF1744",
  info: "#2196f3"
};
const makeButton = name => ({
  " .pe-button__content": {
    "background-color": colors[name],
    color: "white"
  }
});
const mixinButtonStyles = [
  {
    ".send-button-x": makeButton("send"),
    ".info-button-x": makeButton("info")
  }
];

styler.add("app-buttons-x", mixinButtonStyles);


export const tests = [
  {
    name: "Element should have a red background",
    component: {
      view: () => 
        m("div", {
          class: "my-component",
          style: {
            width: "100px",
            height: "100px"
          }
        })
    },
    attrs: null
  },
  {
    name: "Buttons should have different background colors",
    component: {
      view: () => [
        m(button, {
          label: "Send",
          class: "send-button"
        }),
        m(button, {
          label: "Info",
          class: "info-button"
        }),
        m(button, {
          label: "Send",
          class: "send-button-x"
        }),
        m(button, {
          label: "Info",
          class: "info-button-x"
        })
      ]
    }
  },
  {
    name: "Custom button",
    component: secondaryButton,
    attrs: {
      label: "Secondary button"
    }
  }
];
