import React, { Component } from "react"; // eslint-disable-line no-unused-vars
import { renderer, RadioButton, RadioGroup, keys } from "polythene-react";
import genericTests from "./tests-generic";

const reactTests = ({ RadioButton, renderer: h }) => { // eslint-disable-line no-unused-vars

  class Form extends Component {

    constructor(props) {
      super(props);
      this.state = {
        value: undefined
      };
      this.handleChange = this.handleChange.bind(this);
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
            onChange={this.handleChange}
          />
          <RadioButton
            label="Two"
            value="two"
            checked={this.state.value === "two"}
            onChange={this.handleChange}
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
      name: "Option: label (JSX)",
      component: () =>
        <RadioGroup buttons={[
          {
            value: "One",
            label: "One",
            key: "one",
          },
          {
            value: "Two",
            label: "Two",
            key: "two",
          }
        ]}/>
    },
    {
      name: "Option: onChange (JSX)",
      component: Form
    },
  ];

};

export default []
  .concat(genericTests({ RadioButton, RadioGroup, renderer, keys }))
  .concat(reactTests({ RadioButton, RadioGroup, renderer, keys }));
