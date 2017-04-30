import { Component } from "react";
import { renderer } from "./renderer";
import { keys } from "./keys";

export const stateComponent = ({
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
      this.state = state;
    }

    componentDidMount() {
      onMount(this.createVirtualNode());
    }

    componentWillUnmount() {
      onUnmount(this.createVirtualNode());
    }

    createVirtualNode() {
      return {
        state: this.state,
        attrs: this.props,
        children: this.props.children,
        dom: this.dom
      };
    }

    render() {
      const props = this.props;
      const vnode = this.createVirtualNode();
      const updateState = (attrs, value) => this.setState({[attrs]: value});
      return renderer(
        props.element || element,
        Object.assign(
          {},
          createProps(vnode, { renderer, keys, updateState }),
          { ref: dom => this.dom = dom }
        ),
        [
          props.before,
          createContent(vnode, { renderer, keys, updateState }),
          props.after
        ]
      );
    }
  };
};
