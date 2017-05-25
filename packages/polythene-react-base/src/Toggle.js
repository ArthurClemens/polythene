import { Component } from "react";
import { renderer } from "./renderer";

class Toggle extends Component {
    
  constructor(props) {
    super(props);
    this.state = {
      visible: props.permanent || props.show || false,
      transitioning: false
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.permanent || this.state.transitioning) {
      return;
    }
    if (!this.state.visible && nextProps.show) {
      this.setState({
        visible: true
      });
    } else if (this.state.visible && nextProps.hide) {
      this.setState({
        visible: false
      });
    }
  }

  updateState() {
    if (this.props.getState) {
      this.props.getState({
        visible: this.state.visible,
        transitioning: this.state.transitioning
      });
    }
  }

  render() {
    return this.state.visible
      ? renderer(this.props.instance,
          Object.assign(
            {},
            this.props,
            {
              setVisible: value => this.setState({ visible: value }, this.updateState ),
              setTransitioning: value => this.setState({ transitioning: value }, this.updateState)
            }
          )
        )
      : renderer("span", { className: this.props.placeholderClassName });
  }
}

export { Toggle };
