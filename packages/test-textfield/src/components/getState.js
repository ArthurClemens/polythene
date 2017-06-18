import stream from "mithril/stream";

export default ({ h, k, TextField, RaisedButton }) => ({
  oninit: vnode => {
    const textfieldState = stream({});
    const value = stream("");
    vnode.state = {
      textfieldState,
      value,
      redrawOnUpdate: stream.merge([textfieldState, value])
    };
  },
  view: vnode => {
    const state = vnode.state;
    return h("div", [
      h(TextField, {
        value: state.value(),
        getState: state.textfieldState,
        counter: 6,
        error: "You have exceeded the maximum number of characters."
      }),
      h("div", { style: { margin: "10px 0" } }, [
        h("div", { key: "focus" },   `focus: ${state.textfieldState().focus}`),
        h("div", { key: "dirty" },   `dirty: ${state.textfieldState().dirty}`),
        h("div", { key: "invalid" }, `invalid: ${state.textfieldState().invalid}`),
      ]),
      h(RaisedButton, {
        label: "Random",
        events: {
          [k.onclick]: () => state.value(Math.floor(Math.random() * 100000))
        },
      })
    ]);
  }
});
