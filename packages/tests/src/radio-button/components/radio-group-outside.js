
const model = {
  name: "outside",
  defaultCheckedValue: undefined,
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

export default ({ h, RadioGroup, Button }) => {
  const state = {
    checkedValue: model.defaultCheckedValue
  };
  return {
    view: () => {
      return h("div", [
        h(RadioGroup, {
          name: model.name,
          className: "multiple",
          checkedValue: state.checkedValue,
          onChange: ({ value }) => state.checkedValue = value,
          content: model.values
        }),
        // Simulate setting the radio button state from outside:
        h(".pe-button-row", [
          h(Button, {
            label: "Set Left",
            raised: true,
            events: {
              onclick: () => state.checkedValue = "left"
            }
          }),
          h(Button, {
            label: "Set Right",
            raised: true,
            events: {
              onclick: () => state.checkedValue = "right",
            }
          })
        ])
      ]);
    }
  }
};
