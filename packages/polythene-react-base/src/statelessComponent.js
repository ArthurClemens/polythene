import { Component } from "react";
import { renderer } from "./renderer";
import { keys } from "./keys";

export const statelessComponent = ({
  createContent,
  createProps,
  element,
}) => {
  
  return class extends Component {

    createVirtualNode() {
      const props = Object.assign({}, this.props);
      return {
        state: this.state,
        attrs: props,
        children: props.children,
        dom: this.dom
      };
    }

    render() {
      const vnode = this.createVirtualNode();
      return renderer(
        vnode.attrs.element || element,
        Object.assign(
          {},
          createProps(vnode, { renderer, keys }),
          { ref: dom => this.dom = dom }
        ),
        [
          vnode.attrs.before,
          createContent(vnode, { renderer, keys }),
          vnode.attrs.after
        ]
      );
    }
  };
};
