import { Component } from "react";
import { renderer } from "./renderer";
import { keys } from "./keys";

export const statefulComponent = ({
  createContent,
  createProps,
  element,
  onMount = () => {},
  onUnmount = () => {},
  state = {},
}) => {
  
  return class extends Component {
    constructor(props) {
      super(props);
      this.state = Object.assign({}, state);
    }

    componentDidMount() {
      onMount(this.createVirtualNode());
    }

    componentWillUnmount() {
      onUnmount(this.createVirtualNode());
    }

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
      const updateState = (attrs, value) => this.setState({[attrs]: value});
      return renderer(
        vnode.attrs.element || element,
        Object.assign(
          {},
          createProps(vnode, { renderer, keys, updateState }),
          { ref: dom => this.dom = dom }
        ),
        [
          vnode.attrs.before,
          createContent(vnode, { renderer, keys, updateState }),
          vnode.attrs.after
        ]
      );
    }
  };
};
