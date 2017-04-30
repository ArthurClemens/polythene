import { Component } from "react";
import renderer from "./renderer";
import keys from "./keys";

export default (
  createProps,
  createContent,
  defaultElement,
  state
) => {
  
  return class extends Component {
    constructor(props) {
      super(props);
      this.state = state;
    }

    render() {
      const props = this.props;
      const vnode = {
        state: this.state,
        attrs: props,
        children: this.props.children
      };
      const updateState = (attrs, value) => this.setState({[attrs]: value});
      return renderer(
        props.element || defaultElement,
        createProps(vnode, { renderer, keys, updateState }),
        [
          props.before,
          createContent(vnode, { renderer, keys, updateState }),
          props.after
        ]
      );
    }
  };
};
