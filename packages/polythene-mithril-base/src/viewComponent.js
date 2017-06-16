import { renderer } from "./renderer";
import { keys } from "./keys";

const requiresKeys = false;

export const ViewComponent = ({
  createContent = () => {},
  createProps = () => {},
  getElement = () => "div",
  component,
  renderView,
  onMount = () => {},
  onUnMount = () => {},
}) => {

  const view = vnode => {
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
    view: renderView || view,
    oncreate: onMount,
    onremove: onUnMount
  };
};
