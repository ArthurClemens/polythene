import stream from "mithril/stream";

const model = {
  name: "outside",
  defaultCheckedValue: "left",
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
  oninit: vnode => {
    const checkedValue = stream(model.defaultCheckedValue);
    Object.assign(vnode.state, {
      checkedValue,
    });
  },
  view: vnode => {
    const state = vnode.state;
    const checkedValue = state.checkedValue();
    return h("div", [
      h(RadioGroup, {
        name: model.name,
        className: "multiple",
        onChange: ({ value }) => state.checkedValue(value),
        content: model.values.map(v => ({
          ...v,
          checked: checkedValue === v.value,
        }))
      }),
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
