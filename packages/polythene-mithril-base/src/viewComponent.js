import { renderer } from "./renderer";
import { keys } from "./keys";

const requiresKeys = false;

export const ViewComponent = ({
  createContent = () => {},
  createProps = () => {},
  element = "div",
  component,
  renderView,
  onMount = () => {},
  onUnMount = () => {},
}) => {

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
    view: renderView || view,
    oncreate: onMount,
    onremove: onUnMount
  };
};
