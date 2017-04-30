import ripple from "polythene-ripple";
import { button } from "polythene-new-core";
import { keys, renderer } from "polythene-mithril-core";

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
    button.createProps(vnode, { renderer, updateState, keys, ripple }),
    [
      vnode.attrs.before,
      button.createContent(vnode, { renderer, updateState, keys, ripple }),
      vnode.attrs.after
    ]
  );
};

export default {
  theme: button.theme,
  oninit,
  view
};
