import { button } from "polythene-button";

const component = button;

export const tests = [
  {
    name: "Theme: button (class .my-button--primary)",
    component,
    attrs: {
      label: "Button",
      class: "my-button--primary"
    }
  }
];
