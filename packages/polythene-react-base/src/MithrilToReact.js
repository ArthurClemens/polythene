/*
Takes a Mithril component object and returns a React component (for keys oninit and view).
Automatically redraws when the stream `vnode.state.redrawOnUpdate` exists, and the stream is updated.

Example: 

import stream from "mithril/stream";
import { renderer as h, RaisedButton } from "polythene-react";

const StateComponent = {
  oninit: vnode => {
    const checked = stream(false);
    const label = stream("State");
    vnode.state = {
      checked,
      label,
      redrawOnUpdate: stream.merge([checked, label])
    };
  },
  view: vnode => {
    const state = vnode.state;
    const attrs = vnode.attrs;
    const checked = state.checked();
    return h(RaisedButton, {
      label: `${state.label()} of ${attrs.subject} is ${checked ? "On" : "Off"}`,
      events: {
        [keys.onclick]: () => state.checked(!checked)
      }
    });
  }
};

h(StateComponent, { subject: "airco"});
*/

import { Component } from "react";

export const MithrilToReact = component => (

  class extends Component {

    constructor(props) {
      super(props);
      this.state = Object.assign(
        {},
        component,
        { state: {} }
      );
      this.state.oninit && this.state.oninit(this.state);
    }
    
    componentDidMount() {
      this.state.state.redrawOnUpdate && this.state.state.redrawOnUpdate.map(() => (
        this.forceUpdate()
      ));
    }

    render() {
      return this.state.view({ state: this.state.state, attrs: this.props }, this.props.children);
    }
  }
);
