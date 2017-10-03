import { Component } from "react";
import ReactDOM from "react-dom";
import { renderer } from "./renderer";
import { keys } from "./keys";
import { isClient } from "polythene-core";

const requiresKeys = true;

export const ViewComponent = ({
  createContent = () => {},
  createProps = () => ({}),
  getElement = () => "div",
  onMount = () => {},
  onUnMount = () => {},
  component,
  view = null
}) => {
  
  return class extends Component {

    constructor(props) {
      super(props);
      this.registerDOM = this.registerDOM.bind(this);
      this._render = this._render.bind(this);
    }

    componentDidMount() {
      onMount(this.createVirtualNode(), { keys });
    }

    componentWillUnmount() {
      onUnMount(this.createVirtualNode());
    }

    createVirtualNode() {
      const props = Object.assign({}, this.props);
      if (!this.dom && this._mounted) {
        this.dom = ReactDOM.findDOMNode(this.el);
      }
      return {
        attrs: props,
        children: props.children,
        dom: this.dom,
      };
    }

    registerDOM(el) {
      if (el) {
        this.el = el;
      }
    }

    _render() {
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

    render() {
      return view
        ? view(this.createVirtualNode(), { renderer, render: this._render })
        : this._render(this.props);
    }
  };
};
