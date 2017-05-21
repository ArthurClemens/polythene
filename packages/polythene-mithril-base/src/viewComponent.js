import { renderer } from "./renderer";
import { keys } from "./keys";

const requiresKeys = false;

export const viewComponent = ({
  createContent,
  createProps,
  element,
  renderView,
  onMount,
  onUnmount,
}) => {

  const view = vnode => {
    console.log("viewComponent view");
    return renderer(
      vnode.attrs.element || element,
      createProps(vnode, { renderer, requiresKeys, keys }),
      [
        vnode.attrs.before,
        createContent(vnode, { renderer, requiresKeys, keys }),
        vnode.attrs.after
      ]
    );
  };

  return {
    view: renderView || view,
    oncreate: onMount,
    onremove: onUnmount
  };
};
