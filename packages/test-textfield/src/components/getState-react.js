import { Component } from "react";

export default ({ h, TextField, RaisedButton }) => {

  return class extends Component {
    constructor(props) {
      super(props);
      this.state = {
        value: "",
        textfieldState: {}
      };
    }

    render() {
      const textfieldState = this.state.textfieldState;
      return h("div", [
        h(TextField, {
          value: this.state.value,
          getState: newState => this.setState({ textfieldState: newState }),
          counter: 6,
          error: "You have exceeded the maximum number of characters."
        }),
        h("div", { style: { margin: "10px 0" } }, [
          h("div", { key: "focus" },   `focus: ${textfieldState.focus}`),
          h("div", { key: "dirty" },   `dirty: ${textfieldState.dirty}`),
          h("div", { key: "invalid" }, `invalid: ${textfieldState.invalid}`),
        ]),
        h(RaisedButton, {
          label: "Random",
          events: {
            onClick: () => this.setState({ value: Math.floor(Math.random() * 100000) })
          },
        })
      ]);
    }
  };

};
