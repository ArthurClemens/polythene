import ripple from "polythene-ripple";
import { createProps, createContent, theme } from "polythene-button";
import { keyer, renderer } from "polythene-mithril-core";

const updater = vnode => (attrs, value) => (
  vnode.state[attrs] = value,
  setTimeout(renderer.redraw, 0)
);

const oninit = vnode => 
  vnode.state = Object.assign(
    vnode.state, 
    {
      focus:     false,
      mouseover: false,
      inactive:  false
    }
  );

const view = vnode => {
  const updateState = updater(vnode);
  return renderer(
    vnode.attrs.element || "a",
    createProps(vnode, { renderer, updateState, keyer, ripple }),
    [
      vnode.attrs.before,
      createContent(vnode, { renderer, updateState, keyer, ripple }),
      vnode.attrs.after
    ]
  );
};

export default {
  theme,
  oninit,
  view
};
