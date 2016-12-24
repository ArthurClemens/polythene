import m from "mithril";
import { button } from "polythene-button";
import { customButton } from "./custom-button";

export const tests = [
  {
    name: "No options",
    content: m(button)
  },
  {
    name: "Option: label",
    content: m(button, {
      label: "Button"
    })
  },
  {
    name: "Option: element (button)",
    content: m(button, {
      label: "Button",
      element: "button"
    })
  },
  {
    name: "Option: raised",
    content: m(button, {
      label: "Button",
      raised: true
    })
  },
  {
    name: "Option: raised (with option z: 5)",
    content: m(button, {
      label: "Button",
      raised: true,
      z: 5
    })
  },
  {
    name: "Option: href (with option oncreate)",
    content: m(button, {
      label: "Go to Shadow",
      href: "/shadow",
      oncreate: m.route.link
    })
  },
  {
    name: "Option: href (without option oncreate)",
    content: m(button, {
      label: "Go to Shadow",
      href: "/shadow"
    })
  },
  {
    name: "Option: borders",
    content: m(button, {
      label: "Button",
      borders: true
    })
  },
  {
    name: "Option: disabled",
    content: m(button, {
      label: "Button",
      disabled: true
    })
  },
  {
    name: "Option: selected",
    content: m(button, {
      label: "Button",
      selected: true
    })
  },
  {
    name: "Option: formaction",
    content: m(button, {
      label: "Button",
      formaction: "http://polythene.js.org"
    })
  },
  {
    name: "Interactive option: inactive (false)",
    content: m(button, {
      label: "Button",
      inactive: false
    })
  },
  {
    name: "Interactive option: inactive (true)",
    content: m(button, {
      label: "Button",
      inactive: true
    })
  },
  {
    name: "Interactive option: inactivate (5)",
    content: m(button, {
      label: "Button",
      inactivate: 5
    })
  },
  {
    name: "Interactive option: animateOnTap (false)",
    content: m(button, {
      label: "Button",
      animateOnTap: false
    })
  },
  {
    name: "Custom button",
    content: m(customButton, {
      label: "Custom button"
    })
  },
  {
    name: "Option: before",
    content: m(button, {
      label: "Button",
      before: m("span", "Before")
    })
  },
  {
    name: "Option: after",
    content: m(button, {
      label: "Button",
      after: m("span", "After")
    })
  },
];
