import { Component } from "react";
import ReactDOM from "react-dom";
import { renderer } from "./renderer";
import { keys } from "./keys";

const requiresKeys = true;

export const ViewComponent = ({
  createContent = () => {},
  createProps = () => ({}),
  getElement = () => "div",
  onMount = () => {},
  onUnMount = () => {},
  component,
}) => {
  
  return class extends Component {

    constructor(props) {
      super(props);
      this.registerDOM = this.registerDOM.bind(this);
    }

    componentDidMount() {
      onMount(this.createVirtualNode());
    }

    componentWillUnmount() {
      onUnMount(this.createVirtualNode());
    }

    createVirtualNode() {
      const props = Object.assign({}, this.props);
      return {
        attrs: props,
        children: props.children,
        dom: this.dom
      };
    }

    registerDOM(el) {
      if (!this.dom) {
        this.dom = ReactDOM.findDOMNode(el);
      }
    }

    render() {
      const vnode = this.createVirtualNode();
      return renderer(
        component || getElement(vnode),
        Object.assign(
          {},
          createProps(vnode, { renderer, requiresKeys, keys }),
          { ref: this.registerDOM }
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
