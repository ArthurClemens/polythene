import m from "mithril";
import { shadow } from "polythene-shadow";

const component = shadow;

export const tests = [
  {
    name: "No options",
    component,
    attrs: null
  },
  {
    name: "Option: element",
    component,
    attrs: {
      element: "blockquote"
    }
  },
  {
    name: "Option: content",
    component,
    attrs: {
      content: m("div", "CONTENT")
    }
  },
  {
    name: "Common component options",
    component,
    attrs: {
      id: "ID",
      tag: "span",
      class: "my-shadow"
    }
  },
  {
    name: "Interactive option: animated",
    component,
    attrs: {
      animated: true
    }
  },
  {
    name: "Option: z (0)",
    component,
    attrs: {
      z: 0
    }
  },
  {
    name: "Option: z (5)",
    component,
    attrs: {
      z: 5
    }
  }
];

