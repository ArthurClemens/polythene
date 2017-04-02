import m from "mithril";
import slider from "polythene-slider";
import textfield from "polythene-textfield";
import { styler } from "polythene-css";
import styles from "./slider-rgb-style";

styler.add("polythene-test-slider-rgb", styles);

const colorSlider = (state, which, label) => 
  m(slider, {
    min: 0,
    max: 255,
    value: () => state[which],
    getValue: value => state[which] = value,
    before: m(".pe-slider__label", label),
    after: m(textfield, {
      type: "number",
      hideSpinner: true,
      value: () => state[which].toString(),
      events: {
        oninput: null,
        onchange: e => state[which] = e.target.value,
      },
      maxlength: 3,
      min: 0,
      max: 255,
      hideValidation: true
    })
  });

export default {
  oninit: vnode => (
    vnode.state.red = 127,
    vnode.state.green = 127,
    vnode.state.blue = 127
  ),
  view: vnode => 
    m(".rgb-slider", [
      m(".result", {
        style: { backgroundColor: "rgb(" + vnode.state.red + "," + vnode.state.green + "," + vnode.state.blue + ")" }
      }),
      colorSlider(vnode.state, "red",   "R"),
      colorSlider(vnode.state, "green", "G"),
      colorSlider(vnode.state, "blue",  "B")
    ]
  )
};  
