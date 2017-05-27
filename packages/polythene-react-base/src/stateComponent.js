import { Component } from "react";
import ReactDOM from "react-dom";
import stream from "mithril/stream";
import { renderer } from "./renderer";
import { keys } from "./keys";

const requiresKeys = true;

export const stateComponent = ({
  createContent = () => ({}),
  createProps = () => ({}),
  element,
  component,
  getInitialState = () => ({}),
  onMount = () => {},
  onUnmount = () => {},
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
    }
    
    componentDidMount() {
      onMount(this.createVirtualNode());
      this.state.redrawOnUpdate && this.state.redrawOnUpdate.map(values => (
        this.setState({ redrawValues: values })
      ));
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
        dom: this.dom,
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
