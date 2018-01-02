import stream from "mithril/stream";

export default ({ h, RadioGroup }) => ({
  oninit: vnode => {
    const checkedValue = stream();
    Object.assign(vnode.state, {
      checkedValue,
      redrawOnUpdate: stream.merge([checkedValue])
    });
  },
  view: vnode => {
    const state = vnode.state;
    const checkedValue = state.checkedValue();
    return h("div", [
      h("div",
        {
          style: {
            margin: "0 0 1rem 0"
          }
        },
        `Value: ${checkedValue === undefined ? "Not set" : checkedValue}`
      ),
      h(RadioGroup, {
        name: "onChange",
        onChange: ({ value }) => state.checkedValue(value),
        content: [
          {
            value: "One",
            label: "One",
          },
          {
            value: "Two",
            label: "Two",
          }
        ]
      })
    ]);
  }
});
