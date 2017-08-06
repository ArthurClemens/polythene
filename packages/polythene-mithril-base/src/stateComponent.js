import stream from "mithril/stream";
import { renderer } from "./renderer";
import { keys } from "./keys";

const requiresKeys = false;

export const StateComponent = ({
  createContent = () => {},
  createProps = () => {},
  component = null,
  getElement = () => "div",
  getInitialState = () => ({}),
  onMount = () => {},
  onUnMount = () => {},
  view = null
}) => {

  const oninit = vnode => {
    const protoState = Object.assign(
      {},
      vnode
    );
    const initialState = getInitialState(protoState, stream);
    vnode.state = initialState;
    vnode._mounted = false;

    vnode.state.redrawOnUpdate && vnode.state.redrawOnUpdate.map(() => (
      vnode._mounted && setTimeout(renderer.redraw)
    ));
  };

  const oncreate = vnode => {
    onMount(vnode);
    vnode._mounted = true;
  };

  const render = vnode => {
    return renderer(
      component || getElement(vnode),
      createProps(vnode, { renderer, requiresKeys, keys }),
      [
        vnode.attrs.before,
        createContent(vnode, { renderer, requiresKeys, keys }),
        vnode.attrs.after
      ]
    );
  };

  return {
    view: view
      ? vnode => view(vnode, { render, renderer })
      : vnode => render(vnode),
    oninit,
    oncreate,
    onremove: onUnMount
  };
};
