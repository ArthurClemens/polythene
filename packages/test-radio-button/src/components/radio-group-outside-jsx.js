import React, { Component } from "react";
import { RadioGroup, Button } from "polythene-react";

const model = {
  name: "outside",
  defaultCheckedValue: "left",
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
      checkedValue: model.defaultCheckedValue
    };
  }

  render() {
    const checkedValue = this.state.checkedValue;
    return (
      <div>
        <RadioGroup
          className="multiple"
          name="onChange"
          onChange={({ value }) => this.setState({ checkedValue: value })}
          content={model.values.map(v => ({
            ...v,
            checked: checkedValue === v.value,
          }))}
        />
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
