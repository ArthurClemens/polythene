import { Component } from "react";
import { createProps, createContent, theme } from "polythene-button";
import { keyer, renderer } from "polythene-react-core";

const DEFAULT_ELEMENT = "a";

class Button extends Component {

  constructor(props) {
    super(props);
    this.state = {
      focus:     false,
      mouseover: false,
      inactive:  false
    };
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
      props.element || DEFAULT_ELEMENT,
      createProps(vnode, { renderer, keyer, updateState }),
      [
        props.before,
        createContent(vnode, { renderer, keyer, updateState }),
        props.after
      ]
    );
  }
}

Button.theme = theme;

export default Button;
