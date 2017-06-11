import stream from "mithril/stream";
import { renderer } from "./renderer";
import { keys } from "./keys";

const requiresKeys = false;

export const StateComponent = ({
  createContent = () => {},
  createProps = () => {},
  element = "div",
  component,
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
    vnode.state.redrawOnUpdate && vnode.state.redrawOnUpdate.map(() => (
      // console.log("redrawOnUpdate", value),
      setTimeout(renderer.redraw)
    ));
  };

  const render = vnode => {
    
    return renderer(
      component || vnode.attrs.element || element,
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
