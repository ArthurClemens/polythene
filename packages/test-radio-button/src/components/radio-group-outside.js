import stream from "mithril/stream";

const model = {
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

export default ({ h, RadioGroup, Button }) => ({
  oninit: ({ state }) => {
    const checkedValue = stream(model.defaultCheckedValue);
    Object.assign(state, {
      checkedValue,
    });
  },
  view: ({ state }) => {
    const checkedValue = state.checkedValue();
    return h("div", [
      h(RadioGroup, {
        name: model.name,
        className: "multiple",
        checkedValue,
        onChange: ({ value }) => state.checkedValue(value),
        content: model.values
      }),
      // Simulate setting the radio button state from outside:
      h(".pe-button-row", [
        h(Button, {
          label: "Set Left",
          raised: true,
          events: {
            onclick: () => state.checkedValue("left"),
          }
        }),
        h(Button, {
          label: "Set Right",
          raised: true,
          events: {
            onclick: () => state.checkedValue("right"),
          }
        })
      ])
    ]);
  }
});
