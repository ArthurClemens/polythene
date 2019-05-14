import stream from "mithril/stream";
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

const colorSlider = ({ h, a, Slider, TextField }) => {
  return {
    oninit: vnode => {
      const attrs = vnode.attrs;
      const value = stream(attrs.defaultValue);
      value.map(newValue => (
        attrs.onUpdateValue(newValue)
      ));
      Object.assign(vnode.state, {
        value
      });
    },
    view: vnode => {
      const state = vnode.state;
      const attrs = vnode.attrs;
      const value = state.value();
      return h(Slider, {
        min: 0,
        max: 255,
        value: value,
        onChange: ({ value }) => state.value(value),
        before: h(".pe-slider__label", attrs.label),
        after: h(TextField, {
          type: "number",
          hideSpinner: true,
          value,
          onChange: ({ value }) => state.value(value),
          [a.maxlength]: 3,
          min: 0,
          max: 255,
          hideValidation: true
        })
      });
    }
  };
};

export default ({ h, a, Slider, TextField }) => {
  const ColorSlider = colorSlider({ h, a, Slider, TextField });

  return {
    oninit: vnode => {
      const red = stream(Math.round(Math.random() * 255));
      const green = stream(Math.round(Math.random() * 255));
      const blue = stream(Math.round(Math.random() * 255));

      const rgb = stream.merge([red, green, blue]).map(values =>
        values.join(",")
      );
      Object.assign(vnode.state, {
        red, 
        green,
        blue,
        rgb
      });
    },
    view: vnode => {
      const state = vnode.state;
      return h(".rgb-slider", [
        h(".result", {
          style: { backgroundColor: `rgb(${ state.rgb() })` }
        }),
        h(ColorSlider, { defaultValue: state.red(), onUpdateValue: value => state.red(value), label: "R" }),
        h(ColorSlider, { defaultValue: state.green(), onUpdateValue: value => state.green(value), label: "G" }),
        h(ColorSlider, { defaultValue: state.blue(), onUpdateValue: value => state.blue(value), label: "B" }),
      ]);
    }
  };
};
