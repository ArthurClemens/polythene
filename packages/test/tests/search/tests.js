import m from "mithril";
import searchfield from "./searchfield";

const block = {
  view: vnode => 
    m("form", {
      style: Object.assign(
        {},
        {
          minHeight: "150px",
          overflow: "hidden"
        },
        vnode.attrs.dark ? null : { background: "#e4e4e4" },
        vnode.attrs.fullWidth
          ? null
          : { padding: "8px" }
      )}, m(searchfield, vnode.attrs))
};

export const tests = [
  {
    name: "Option: textfield, buttons",
    component: {
      view: () => m(block)
    }
  },
  {
    name: "Option: textfield, buttons, fullWidth",
    component: {
      view: () => m(block, {fullWidth: true})
    }
  },
  
];
