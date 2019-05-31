import React, { Component } from "react";
import { RadioButton, RadioGroup } from "polythene-react";
import { h } from "../../utils/enhanced-renderer";
import { a } from "cyano-react";
import genericTests from "./tests-generic";
import RadioGroupOnChange from "./components/radio-group-onchange-jsx";
import RadioGroupOutside from "./components/radio-group-outside-jsx";

const reactTests = ({ RadioButton }) => {

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
          <div className="multiple">
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
          </div>
        </form>
      );
    }
  }

  return [
    {
      section: "React specific tests",
    },
    {
      name: "Option: label (JSX)",
      component: () =>
        <RadioGroup buttons={[
          {
            value: "One",
            label: "One",
          },
          {
            value: "Two",
            label: "Two",
          }
        ]} className="multiple" />
    },
    {
      name: "RadioButtons onChange (JSX)",
      component: Form
    },
    {
      name: "RadioGroup onChange (JSX)",
      component: RadioGroupOnChange
    },
    {
      name: "RadioGroup set from outside (JSX)",
      component: RadioGroupOutside
    },
  ];

};

export default []
  .concat(genericTests({ RadioButton, RadioGroup, h, a }))
  .concat(reactTests({ RadioButton, RadioGroup, h, a }));
