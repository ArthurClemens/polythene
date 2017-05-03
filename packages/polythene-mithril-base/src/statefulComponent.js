import { renderer } from "./renderer";
import { keys } from "./keys";

export const statefulComponent = ({
  createContent,
  createProps,
  element,
  onMount = () => {},
  onUnmount = () => {},
  state = {},
}) => {

  const updater = vnode => (attrs, value) => (
    vnode.state[attrs] = value,
    setTimeout(renderer.redraw, 0)
  );

  const oninit = vnode => 
    vnode.state = Object.assign(
      vnode.state, 
      state
    );

  const view = vnode => {
    const updateState = updater(vnode);
    return renderer(
      vnode.attrs.element || element,
      createProps(vnode, { renderer, keys, updateState }),
      [
        vnode.attrs.before,
        createContent(vnode, { renderer, keys, updateState }),
        vnode.attrs.after
      ]
    );
  };

  return {
    view,
    oninit,
    oncreate: onMount,
    onremove: onUnmount,
  };
};
