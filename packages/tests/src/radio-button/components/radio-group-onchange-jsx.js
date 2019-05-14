import React, { Component } from "react";
import { RadioGroup } from "polythene-react";

export default class extends Component {

  constructor(props) {
    super(props);
    this.state = {
      checkedValue: null
    };
  }

  render() {
    const checkedValue = this.state.checkedValue;
    return (
      <div>
        <div style={{
          margin: "0 0 1rem 0"
        }}>
          {`Value: ${checkedValue === undefined ? "Not set" : checkedValue}`}
        </div>
        <RadioGroup
          className="multiple"
          name="onChange"
          onChange={({ value }) => this.setState({ checkedValue: value })}
          content={[
            {
              value: "One",
              label: "One",
            },
            {
              value: "Two",
              label: "Two",
            }
          ]}
        />
      </div>
    );
  }
}
