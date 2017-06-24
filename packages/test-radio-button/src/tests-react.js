import React, { Component } from "react"; // eslint-disable-line no-unused-vars
import { renderer, RadioButton, keys } from "polythene-react";
import genericTests from "./tests-generic";

const reactTests = ({ RadioButton, renderer: h }) => { // eslint-disable-line no-unused-vars

  class Form extends Component {

    constructor(props) {
      super(props);
      this.state = {
        value: undefined
      };
    }

    handleChange(newState) {
      this.setState({
        value: newState.value
      });
    }

    render() {
      return (
        <form>
          <div style={{ margin: "0 0 1rem 0" }}>
            {`Value: ${this.state.value}`}
          </div>
          <RadioButton
            label="One"
            value="one"
            checked={this.state.value === "one"}
            onChange={this.handleChange.bind(this)}
          />
          <RadioButton
            label="Two"
            value="two"
            checked={this.state.value === "two"}
            onChange={this.handleChange.bind(this)}
          />
        </form>
      );
    }
  }

  return [
    {
      section: "React JSX tests",
    },
    {
      name: "Option: onChange (JSX)",
      component: Form
    },
  ];

};

export default []
  .concat(genericTests({ RadioButton, renderer, keys }))
  .concat(reactTests({ RadioButton, renderer, keys }));
