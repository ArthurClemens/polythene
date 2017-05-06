import { renderer } from "./renderer";
import { keys } from "./keys";

export const statefulComponent = ({
  createContent,
  createProps,
  getInitialState = () => ({}),
  element,
  onMount = () => {},
  onUnmount = () => {},
  state = {},
}) => {

  const createVirtualNode = vnode => 
    Object.assign({}, vnode, { updateState: updater(vnode) });

  const updater = vnode => (attr, value, callback) => {
    vnode.state[attr] = value;
    setTimeout(() => {
      renderer.redraw();
      if (callback) {
        callback();
      }
    }, 0);
  };

  const oninit = vnode => 
    vnode.state = Object.assign(
      vnode.state, 
      state,
      getInitialState(vnode.attrs)
    );

  const view = vnode => {
    const vnode1 = createVirtualNode(vnode);
    return renderer(
      vnode.attrs.element || element,
      createProps(vnode1, { renderer, keys }),
      [
        vnode.attrs.before,
        createContent(vnode1, { renderer, keys }),
        vnode.attrs.after
      ]
    );
  };

  return {
    view,
    oninit: vnode => oninit(createVirtualNode(vnode)),
    oncreate: vnode => onMount(createVirtualNode(vnode)),
    onremove: vnode => onUnmount(createVirtualNode(vnode))
  };
};
