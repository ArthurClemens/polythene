import { Component } from "react";
import { renderer } from "./renderer";

const normalizeAttrs = attrs =>
  typeof attrs === "function"
      ? attrs()
      : attrs;

export const Toggle = (Instance, toggleProps) => {
  const attrs = normalizeAttrs(toggleProps.attrs);

  return class extends Component {
    
    constructor(props) {
      super(props);
      const hide = toggleProps.hide || attrs.hide;
      const show = !hide && (toggleProps.show || attrs.show || false);
      this.state = {
        visible: toggleProps.permanent || attrs.permanent || show,
        transitioning: show || hide
      };
      this._mounted = false;
    }

    componentDidMount() {
      this._mounted = true;
    }

    componentWillUnmount() {
      this._mounted = false;
    }

    setDisplayState(newState) {
      if (!this._mounted) {
        return;
      }
      const transitioning = newState.visible !== undefined
        ? false
        : newState.transitioning !== undefined
          ? newState.transitioning
          : this.state.transitioning;
      const visible = newState.visible !== undefined ? newState.visible : this.state.visible;
      this.setState({ visible, transitioning }, this.updateState);
    }

    updateState() {
      if (attrs.getState) {
        attrs.getState({
          visible: this.state.visible,
          transitioning: this.state.transitioning
        });
      }
    }

    render() {
      return this.state.visible
        ? renderer(Instance,
            Object.assign(
              {},
              attrs,
              {
                transitions: toggleProps.transitions,
                setDisplayState: this.setDisplayState.bind(this)
              }
            )
          )
        : renderer("span", { className: toggleProps.placeholderClassName });
    }
  };
};

