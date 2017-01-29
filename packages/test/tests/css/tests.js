import m from "mithril";
import { button } from "polythene-button";
import { styler } from "polythene-css";
import { secondaryButton } from "./secondary-button";

const myStyle = [{
  ".my-component": {
    backgroundColor: "#FF1744"
  }
}];

styler.add("my-component", myStyle);

const buttonStyles = [
  {
    ".pe-button.send-button .pe-button__content": {
      backgroundColor: "#FF1744",
      color: "white"
    },
    ".pe-button.info-button .pe-button__content": {
      backgroundColor: "#2196f3",
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
    backgroundColor: colors[name],
    color: "white"
  }
});
const mixinButtonStyles = [
  {
    ".pe-button.send-button-x": makeButton("send"),
    ".pe-button.info-button-x": makeButton("info")
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
