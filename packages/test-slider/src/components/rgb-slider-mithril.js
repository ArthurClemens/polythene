import stream from "mithril/stream";
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

const colorSlider = ({ h, k, Slider, TextField }) => {
  return {
    oninit: vnode => {
      const attrs = vnode.attrs;
      const textfieldState = stream({});
      const value = stream(attrs.defaultValue);
      textfieldState.map(v => (
        value(v.value),
        attrs.onChange(v.value)
      ));
      value.map(v =>
        textfieldState().el !== undefined ? textfieldState().el.value = v : null
      );
      vnode.state = {
        textfieldState,
        value
      };
    },
    view: vnode => {
      const state = vnode.state;
      const attrs = vnode.attrs;
      return h(Slider, {
        min: 0,
        max: 255,
        value: state.value(),
        onChange: ({ value }) => state.value(value),
        before: h(".pe-slider__label", attrs.label),
        after: h(TextField, {
          type: "number",
          hideSpinner: true,
          defaultValue: attrs.defaultValue,
          onChange: state.textfieldState,
          [k.maxlength]: 3,
          min: 0,
          max: 255,
          hideValidation: true
        })
      });
    }
  };
};

export default ({ h, k, Slider, TextField }) => {
  const ColorSlider = colorSlider({ h, k, Slider, TextField });

  return {
    oninit: vnode => {
      const red = stream(127);
      const green = stream(127);
      const blue = stream(127);

      const rgb = stream.merge([red, green, blue]).map(values =>
        values.join(",")
      );
      vnode.state = {
        red, 
        green,
        blue,
        rgb
      };
    },
    view: vnode => {
      const state = vnode.state;
      return h(".rgb-slider", [
        h(".result", {
          style: { backgroundColor: `rgb(${state.rgb()})` }
        }),
        h(ColorSlider, { defaultValue: state.red(), onChange: state.red, label: "R" }),
        h(ColorSlider, { defaultValue: state.red(), onChange: state.green, label: "G" }),
        h(ColorSlider, { defaultValue: state.red(), onChange: state.blue, label: "B" }),
      ]);
    }
  };
};
