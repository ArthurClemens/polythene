import { Component } from "react";
import ReactDOM from "react-dom";
import stream from "mithril/stream";
import { renderer } from "./renderer";
import { keys } from "./keys";
import { isClient } from "polythene-core";

const requiresKeys = true;

export const StateComponent = ({
  createContent = () => {},
  createProps = () => ({}),
  getElement = () => "div",
  component,
  getInitialState = () => ({}),
  onMount = () => {},
  onUnMount = () => {},
  view = null
}) => {
  
  return class extends Component {
    
    constructor(props) {
      super(props);
      const protoState = Object.assign(
        {},
        component,
        this.createVirtualNode(),
        {
          redrawValues: undefined
        }
      );
      const initialState = getInitialState(protoState, stream);
      this.state = initialState;
      this.registerDOM = this.registerDOM.bind(this);
      this._render = this._render.bind(this);
    }
    
    componentDidMount() {
      this._mounted = true;
      this.state.redrawOnUpdate && this.state.redrawOnUpdate.map(values => (
        this._mounted && this.setState({ redrawValues: values })
      ));
      onMount(this.createVirtualNode(), { keys });
    }

    componentWillUnmount() {
      this._mounted = false;
      onUnMount(this.createVirtualNode());
    }

    createVirtualNode() {
      const props = Object.assign({}, this.props);
      return {
        state: this.state,
        attrs: props,
        children: props.children,
        dom: this.dom,
      };
    }

    registerDOM(el) {
      if (!this.dom && isClient && this._mounted) {
        this.dom = ReactDOM.findDOMNode(el);
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