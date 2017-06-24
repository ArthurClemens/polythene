import React, { Component } from "react"; // eslint-disable-line no-unused-vars
import { Slider, TextField } from "polythene-react";

import { styler } from "polythene-core-css";
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
      color: vars.rgba(vars.color_light_foreground, vars.blend_light_text_secondary)
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
      textfieldState: {}
    };
    this.update = this.update.bind(this);
  }

  componentDidMount() {
    this._mounted = true;
  }

  componentWillUnmount() {
    this._mounted = false;
  }

  update({ value }) {
    if (this._mounted) {
      this.setState({ value });
      if (this.state.textfieldState.el) {
        this.state.textfieldState.el.value = value;
      }
      this.props.onChange({ value });
    }
  }

  render() {
    return <Slider
      min={0}
      max={255}
      value={this.state.value}
      onChange={this.update}
      before={<div className=".pe-slider__label">{this.props.label}</div>}
      after={<TextField
        type="number"
        hideSpinner
        defaultValue={this.props.defaultValue}
        onChange={textfieldState => this.setState({ textfieldState }, () => this.update({ value: textfieldState.value }))}
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
      <ColorSlider
        defaultValue={this.state.red}
        onChange={({value}) => this.update({ key: "red", value })}
        label="R"
      />
      <ColorSlider
        defaultValue={this.state.green}
        onChange={({value}) => this.update({ key: "green", value })}
        label="G"
      />
      <ColorSlider
        defaultValue={this.state.blue}
        onChange={({value}) => this.update({ key: "blue", value })}
        label="B"
      />
    </div>;
  }
}

export default RGBSlider;
