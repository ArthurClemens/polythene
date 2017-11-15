import stream from "mithril/stream";

export default ({ h, k, RadioButton }) => ({
  oninit: vnode => {
    const checkedValue = stream();
    vnode.state = {
      checkedValue,
      redrawOnUpdate: stream.merge([checkedValue])
    };
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
      h(RadioButton, {
        name: "events",
        value: "One",
        label: "One",
        events: {
          [k.onclick]: () => state.checkedValue("One")
        },
        checked: checkedValue === "One"
      }),
      h(RadioButton, {
        name: "events",
        value: "Two",
        label: "Two",
        events: {
          [k.onclick]: () => state.checkedValue("Two")
        },
        checked: checkedValue === "Two"
      })
    ]);
  }
});
