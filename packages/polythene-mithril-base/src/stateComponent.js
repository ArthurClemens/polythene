import stream from "mithril/stream";
import { renderer } from "./renderer";
import { keys } from "./keys";

const requiresKeys = false;

export const stateComponent = ({
  createContent = () => {},
  createProps = () => {},
  element,
  component,
  getInitialState = () => ({}),
  onMount = () => {},
  onUnmount = () => {},
}) => {

  const oninit = vnode => {
    const protoState = Object.assign(
      {},
      vnode
    );
    const initialState = getInitialState(protoState, stream);
    vnode.state = initialState;
    vnode.state.redrawOnUpdate && vnode.state.redrawOnUpdate.map(() => (
      renderer.redraw()
    ));
  };

  const view = vnode => {
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
    view,
    oninit: oninit,
    oncreate: onMount,
    onremove: onUnmount
  };
};
