import { Component } from "react";
import ReactDOM from "react-dom";
import { renderer } from "./renderer";
import { keys } from "./keys";

const requiresKeys = true;

export const statefulComponent = ({
  createContent,
  createProps,
  element,
  getInitialState = () => ({}),
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
      // Store the state we are interested in in a private property
      this._state = Object.assign({}, state, getInitialState(props));
    }

    componentDidMount() {
      onMount(this.createVirtualNode());
    }

    componentWillUnmount() {
      onUnmount(this.createVirtualNode());
    }

    updateState(attr, value, callback) {
      this._state[attr] = value;
      // Force new render
      this.setState({
        now: Date.now()
      }, callback);
    }

    createVirtualNode() {
      const props = Object.assign({}, this.props);
      return {
        state: this._state,
        attrs: props,
        children: props.children,
        dom: this.dom,
        updateState: this.updateState.bind(this)
      };
    }

    render() {
      const vnode = this.createVirtualNode();
      return renderer(
        vnode.attrs.element || element,
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
