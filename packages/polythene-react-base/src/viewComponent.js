import { Component } from "react";
import ReactDOM from "react-dom";
import { renderer } from "./renderer";
import { keys } from "./keys";

const requiresKeys = true;

export const viewComponent = ({
  createContent = () => ({}),
  createProps = () => ({}),
  element = "div",
  component,
}) => {
  
  return class extends Component {

    createVirtualNode() {
      const props = Object.assign({}, this.props);
      return {
        attrs: props,
        children: props.children,
        dom: this.dom
      };
    }

    render() {
      const vnode = this.createVirtualNode();
      return renderer(
        component || vnode.attrs.element || element,
        Object.assign(
          {},
          createProps(vnode, { renderer, requiresKeys, keys }),
          { ref: reactComponent => {
            if (!this.dom) {
              this.dom = ReactDOM.findDOMNode(reactComponent);
            }
          }}
        ),
        [
          vnode.attrs.before,
          createContent(vnode, { renderer, requiresKeys, keys }),
          vnode.attrs.after
        ]
      );
    }
  };
};
