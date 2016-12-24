import m from "mithril";
import { shadow } from "polythene-shadow";

export const tests = [
  {
    name: "No options",
    content: m(shadow)
  },
  {
    name: "Option: element",
    content: m(shadow, {
      element: "blockquote"
    })
  },
  {
    name: "Option: content",
    content: m(shadow, {
      content: m("div", "CONTENT")
    })
  },
  {
    name: "Common component options",
    content: m(shadow, {
      id: "ID",
      tag: "span",
      class: "my-shadow"
    })
  },
  {
    name: "Interactive option: animated",
    content: m(shadow, {
      animated: true
    })
  },
  {
    name: "Option: z (0)",
    content: m(shadow, {
      z: 0
    })
  },
  {
    name: "Option: z (5)",
    content: m(shadow, {
      z: 5
    })
  }
];

