import stream from "mithril/stream";
import { renderer } from "./renderer";
import { keys } from "./keys";

const requiresKeys = false;

export const StateComponent = ({
  createContent = () => {},
  createProps = () => {},
  component,
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
    vnode.state.redrawOnUpdate && vnode.state.redrawOnUpdate.map(() =>
      setTimeout(renderer.redraw)
    );
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
    view: view || render,
    oninit: oninit,
    oncreate: onMount,
    onremove: onUnMount
  };
};
