import React, { Component } from "react"; // eslint-disable-line no-unused-vars
import { Slider, TextField } from "polythene-react";

import { styler, rgba } from "polythene-core-css";
import { vars } from "polythene-theme";

const labelWidth = 24;
const trackWidth = 164;
const inputWidth = 32;

const styles = [{
  " .rgb-slider": {
    " .result": {
      width: "100%",
      height: "100px",
      marginBottom: "10px"
    },
    " .pe-header": {
      fontSize: "14px",
      color: rgba(vars.color_light_foreground, vars.blend_light_text_secondary)
    },
    " .pe-slider": {
      color: "#009688",
      marginTop: "0 !important",
      marginBottom: "0 !important",

      " .pe-slider__label": {
        width: labelWidth + "px"
      },
      " .pe-slider__track": {
        width: trackWidth + "px"
      }
    },
    " .pe-textfield": {
      color: "#009688",
      width: inputWidth + "px",
      paddingBottom: 0,

      " .pe-textfield__input": {
        textAlign: "center"
      }
    }
  }
}];

styler.add("polythene-test-slider-rgb", styles);

class ColorSlider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.defaultValue || 0,
      inputValue: (this.props.defaultValue || 0).toString(),
    };
    this.updateValue = this.updateValue.bind(this);
    this.updateInputValue = this.updateInputValue.bind(this);
  }

  componentDidMount() {
    this._mounted = true;
  }

  componentWillUnmount() {
    this._mounted = false;
  }

  updateValue({ value }) {
    this.setState({
      value,
      inputValue: value.toString()
    }, () => 
      setTimeout(() => this.props.onChange({ value }), 0)
    );
  }

  updateInputValue({ inputValue }) {
    const value = inputValue !== ""
      ? Math.min(255, parseInt(inputValue, 10) || 0)
      : 0;
    this.setState({
      value,
      inputValue
    }, () => 
      setTimeout(() => this.props.onChange({ value }), 0)
    );
  }

  render() {
    const value = this.state.value;
    return <Slider
      min={0}
      max={255}
      value={value}
      onChange={this.updateValue}
      before={<div className=".pe-slider__label">{this.props.label}</div>}
      after={<TextField
        type="number"
        hideSpinner
        value={this.state.inputValue}
        onChange={({ value }) => this.updateInputValue({ inputValue: value })}
        maxLength={3}
        min={0}
        max={255}
        hideValidation
      />}
    />;
  }
}

class RGBSlider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      red: 127,
      green: 127,
      blue: 127
    };
    this.update = this.update.bind(this);
  }

  componentDidMount() {
    this._mounted = true;
  }

  componentWillUnmount() {
    this._mounted = false;
  }

  update({ key, value }) {
    if (this._mounted) {
      this.setState({ [key]: value });
    }
  }

  render() {
    return <div className="rgb-slider">
      <div className="result" style={{ backgroundColor: `rgb(${this.state.red},${this.state.green},${this.state.blue})` }} />
      {["red", "green", "blue"].map(color =>
        <ColorSlider
          key={color}
          defaultValue={this.state[color]}
          onChange={({ value }) => this.update({ key: color, value })}
          label={color.substring(0,1).toUpperCase()}
        />
      )}      
    </div>;
  }
}

export default RGBSlider;
