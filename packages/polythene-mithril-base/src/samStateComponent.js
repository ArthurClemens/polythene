import { renderer } from "./renderer";
import { keys } from "./keys";
import { getUpdate, getModels } from "polythene-core";

const requiresKeys = false;

export const samStateComponent = ({
  createContent,
  createProps,
  getInitialState,
  getUpdates,
  element,
  renderView,
  onInit,
  onMount,
  onUnmount,
}) => {

  const oninit = vnode => {
    const update = getUpdate();
    const initialModel = getInitialState(vnode.attrs);
    vnode.state.updates = getUpdates(update);
    const models = getModels(initialModel, update, () => renderer.redraw());
    models.map(model => vnode.state.model = model);
  };

  const view = vnode =>
    renderer(
      vnode.attrs.element || element,
      createProps(vnode, { renderer, requiresKeys, keys }),
      [
        vnode.attrs.before,
        createContent(vnode, { renderer, requiresKeys, keys }),
        vnode.attrs.after
      ]
    );

  return {
    view: renderView || view,
    oninit: onInit || oninit,
    oncreate: onMount,
    onremove: onUnmount
  };
};
