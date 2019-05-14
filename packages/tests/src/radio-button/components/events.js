import stream from "mithril/stream";

export default ({ h, a, RadioButton }) => ({
  oninit: vnode => {
    const checkedValue = stream();
    Object.assign(vnode.state, {
      checkedValue,
      redrawOnUpdate: stream.merge([checkedValue]) // for React
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
      h(".multiple", [
        h(RadioButton, {
          key: "one", // for React
          name: "events",
          value: "One",
          label: "One",
          events: {
            [a.onclick]: () => state.checkedValue("One")
          },
          checked: checkedValue === "One"
        }),
        h(RadioButton, {
          key: "two", // for React
          name: "events",
          value: "Two",
          label: "Two",
          events: {
            [a.onclick]: () => state.checkedValue("Two")
          },
          checked: checkedValue === "Two"
        })
      ])
    ]);
  }
});
