import stream from "mithril/stream";
import { ButtonCSS } from "polythene-css";

const buttonOpts = [
  {
    id: "italic",
    label: "I",
    style: {
      fontStyle: "italic"
    }
  },
  {
    id: "bold",
    label: "B",
    style: {
      fontWeight: 900
    }
  },
  {
    id: "underline",
    label: "U",
    style: {
      borderBottom: "2px solid currentColor",
      marginBottom: "-2px"
    }
  },
  {
    id: "color",
    label: "A",
    style: {
      color: "red"
    }
  },
];

ButtonCSS.addStyle(".button-group-themed-toggle", {
  font_size:                     18,
  font_weight:                   700,
  color_light_background:        "#fff",
  color_light_active_background: "#eee",
});

export default ({ h, a, Button, ButtonGroup }) => ({
  oninit: vnode => {
    const selectedButton = stream({});
    Object.assign(vnode.state, {
      selectedButton,
      redrawOnUpdate: stream.merge([selectedButton]) // for React
    });
  },
  view: ({ state }) =>
    h(ButtonGroup, buttonOpts.map(opts =>
      h(Button, {
        label: opts.label,
        extraWide: true,
        border: true,
        ink: false,
        className: "button-group-themed-toggle",
        textStyle: opts.style,
        selected: opts.id === state.selectedButton().id,
        events: {
          [a.onclick]: () => state.selectedButton(opts)
        }
      })
    ))
});
