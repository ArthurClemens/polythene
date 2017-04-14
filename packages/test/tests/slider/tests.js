import m from "mithril";
import slider from "polythene-slider";
import icon from "polythene-icon";
import textfield from "polythene-textfield";
import volumeSlider from "./slider-volume";
import rgbSlider from "./slider-rgb";
import bullseyeIcon from "mmsvg/templarian/msvg/bullseye";

import iconVolume from "mmsvg/google/msvg/av/volume-up";

slider.theme(".slider-custom-icon", {
  color_light_thumb_background: "#fff"
});

slider.theme(".slider-custom-color", {
  color_light_track_active: "#82b1ff",
  color_light_track_inactive: "#c5cae9",
  color_light_track_value: "#f50057",
  color_light_thumb_on: "#f50057"
});

export const tests = [
  {
    name: "No options (range 0-100, steps rounded to 1)",
    interactive: true,
    component: slider
  },
  {
    name: "Option: step (0), value (50)",
    interactive: true,
    component: slider,
    attrs: {
      step: 0,
      value: 50
    }
  },
  {
    name: "Option: ticks",
    interactive: true,
    component: slider,
    attrs: {
      min: 0,
      max: 100,
      step: 10,
      ticks: true
    }
  },
  {
    name: "Option: ticks with pin",
    interactive: true,
    component: slider,
    attrs: {
      min: 0,
      max: 100,
      step: 10,
      value: 2,
      pin: true,
      ticks: true
    }
  },
  {
    name: "Option: interactiveTrack (false)",
    interactive: true,
    component: slider,
    attrs: {
      interactiveTrack: false
    }
  },
  {
    name: "Option: style (colors)",
    interactive: true,
    component: slider,
    attrs: {
      style: {
        color: "red"
      },
      min: 0,
      max: 100,
      value: 50
    }
  },
  {
    name: "Option: icon (custom msvg)",
    interactive: true,
    component: slider,
    attrs: {
      min: 0,
      max: 100,
      value: 50,
      icon: m(icon, {
        msvg: bullseyeIcon
      }),
      class: "slider-custom-icon"
    }
  },
  {
    name: "Option: style (color)",
    interactive: true,
    component: slider,
    attrs: {
      style: { color: "red" },
      min: 0,
      max: 100,
      value: 50
    }
  },
  {
    name: "Themed slider (colors)",
    interactive: true,
    component: slider,
    attrs: {
      min: 0,
      max: 100,
      value: 50,
      class: "slider-custom-color"
    }
  },
  {
    name: "With icons",
    interactive: true,
    component: volumeSlider
  },
  {
    name: "With an editable numeric value",
    interactive: true,
    component: rgbSlider
  },
  {
    name: "With icon, pin and ticks",
    interactive: true,
    component: slider,
    attrs: {
      min: 0,
      max: 100,
      step: 10,
      value: 2,
      pin: true,
      ticks: true,
      before: m(icon, {
        msvg: iconVolume
      })
    }
  },
  {
    name: "Read value",
    interactive: true,
    component: {
      oninit: vnode =>
        vnode.state.value = 0,
      view: vnode => [
        m("p", "Value: " + vnode.state.value),
        m(slider, {
          min: 0,
          max: 100,
          value: vnode.state.value,
          getValue: value => vnode.state.value = value
        })
      ]
    },
  },
  {
    name: "Set value",
    interactive: true,
    component: {
      oninit: vnode =>
        vnode.state.value = 0,
      view: vnode => m(".layout.horizontal", [
        m(textfield, {
          style: {
            width: "10%"
          },
          value: () => vnode.state.value.toString(),
          events: {
            oninput: e => vnode.state.value = e.target.value
          },
          maxlength: 3,
          min: 0,
          max: 999,
          hideValidation: true
        }),
        m(slider, {
          min: 0,
          max: 999,
          value: () => vnode.state.value
        })
      ])
    }
  },
  {
    name: "Small range, no step",
    interactive: true,
    component: {
      oninit: vnode =>
        vnode.state.value = 0,
      view: vnode => [
        m("p", "Value: " + vnode.state.value),
        m(slider, {
          min: 0,
          max: 1,
          step: 0,
          value: vnode.state.value,
          getValue: value => vnode.state.value = value
        })
      ]
    },
  },
  {
    name: "Negative range, step=0.1",
    interactive: true,
    component: {
      oninit: vnode =>
        vnode.state.value = 0,
      view: vnode => [
        m("p", "Value: " + vnode.state.value),
        m(slider, {
          min: -1,
          max: 1,
          step: 0.1,
          value: vnode.state.value,
          getValue: value => vnode.state.value = value
        })
      ]
    },
  },
  {
    name: "Use left value for extra \"unspecified value\" step",
    interactive: true,
    component: {
      oninit: vnode =>
        vnode.state.value = -1,
      view: vnode => [
        m("p", vnode.state.value !== -1
            ? "Age: " + vnode.state.value
            : "Age: not set"
        ),
        m(slider, {
          min: -1,
          max: 110,
          value: vnode.state.value,
          getValue: value => vnode.state.value = value
        })
      ]
    },
  },
  {
    name: "Option: disabled",
    interactive: true,
    component: slider,
    attrs: {
      min: 0,
      max: 100,
      value: 50,
      disabled: true
    }
  },
  {
    name: "Option: disabled, value 0",
    interactive: true,
    component: slider,
    attrs: {
      min: 0,
      max: 100,
      value: 0,
      disabled: true
    }
  },
  {
    name: "Option: disabled, ticks",
    interactive: true,
    component: slider,
    attrs: {
      min: 0,
      max: 100,
      value: 50,
      ticks: true,
      disabled: true
    }
  },

  // Dark theme

  {
    name: "Option: value (50) -- dark theme",
    interactive: true,
    class: "pe-dark-theme",
    component: slider,
    attrs: {
      value: 50
    }
  },
  {
    name: "With icons -- dark theme",
    class: "pe-dark-theme",
    interactive: true,
    component: volumeSlider
  },
  {
    name: "Option: disabled -- dark theme",
    class: "pe-dark-theme",
    interactive: true,
    component: slider,
    attrs: {
      min: 0,
      max: 100,
      value: 50,
      disabled: true
    }
  },
  {
    name: "Dark theme + light theme",
    interactive: true,
    class: "pe-dark-theme",
    component: {
      view: () =>
        m("div", {
          style: {
            background: "#fff",
            padding: "10px"
          },
          class: "pe-light-theme"
        }, m(slider, {value: 50}))
    }
  },
];

