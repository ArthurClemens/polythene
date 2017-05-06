import { Component } from "react";
import ReactDOM from "react-dom";
import { renderer } from "./renderer";
import { keys } from "./keys";

export const statefulComponent = ({
  createContent,
  createProps,
  getInitialState = () => ({}),
  element,
  onMount = () => {},
  onUnmount = () => {},
  state = {},
}) => {
  
  return class extends Component {
    
    constructor(props) {
      super(props);
      this.state = {
        now: Date.now()
      };
      state = Object.assign({}, state, getInitialState(props));
    }

    componentDidMount() {
      onMount(this.createVirtualNode());
    }

    componentWillUnmount() {
      onUnmount(this.createVirtualNode());
    }

    updateState(attr, value, callback) {
      state[attr] = value;
      // Force rerender
      this.setState({
        now: Date.now()
      }, callback);
    }

    createVirtualNode() {
      const props = Object.assign({}, this.props);
      return Object.assign({}, {
        state,
        attrs: props,
        children: props.children,
        dom: this.dom,
        updateState: this.updateState.bind(this)
      });
    }

    render() {
      const vnode = this.createVirtualNode();
      return renderer(
        vnode.attrs.element || element,
        Object.assign(
          {},
          createProps(vnode, { renderer, keys }),
          { ref: reactComponent => {
            if (!this.dom) {
              this.dom = ReactDOM.findDOMNode(reactComponent);
            }
          }}
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
