import React, { Component } from "react";
import { RadioGroup, Button } from "polythene-react";

const formData = {
  name: "outside",
  defaultCheckedValue: "right",
  values: [
    {
      value: "left",
      label: "Left",
    },
    {
      value: "right",
      label: "Right",
    },
  ]
};

export default class extends Component {

  constructor(props) {
    super(props);
    this.state = {
      checkedValue: formData.defaultCheckedValue
    };
  }

  render() {
    const checkedValue = this.state.checkedValue;
    return (
      <div>
        <RadioGroup
          name={formData.name}
          className="multiple"
          checkedValue={checkedValue}
          onChange={({ value }) => this.setState({ checkedValue: value })}
          content={formData.values}
        />
        {/* Simulate setting the radio button state from outside: */}
        <div className="pe-button-row">
          <Button
            label="Set Left"
            raised
            events={{
              onClick: () => this.setState({ checkedValue: "left" })
            }}
          />
          <Button
            label="Set Right"
            raised
            events={{
              onClick: () => this.setState({ checkedValue: "right" })
            }}
          />
        </div>
      </div>
    );
  }
}
