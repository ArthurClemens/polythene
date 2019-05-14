import React, { Component } from "react";
import { Button, Checkbox } from "polythene-react";

class SimpleForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      checked: false,
    };
    this.setCheckedState = this.setCheckedState.bind(this);
    this.toggleState = this.toggleState.bind(this);
  }

  setCheckedState(newState) {
    this.setState({ checked: newState.checked });
  }

  toggleState() {
    this.setState({ checked: !this.state.checked });
  }

  render() {
    return <div>
      <Checkbox
        label="Label"
        onChange={this.setCheckedState}
        checked={this.state.checked}
      />
      <div
        style={{
          marginTop: "1rem"
        }}
      >
        <Button
          raised
          label="Toggle"
          events={{
            onClick: this.toggleState
          }}
        />
      </div>
    </div>;
  }

}

export default SimpleForm;
