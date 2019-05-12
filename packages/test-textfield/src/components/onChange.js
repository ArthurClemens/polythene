import stream from "mithril/stream";

export default ({ h, TextField }) => ({
  oninit: vnode => {
    const textfieldState = stream({});
    if (h.redraw) {
      textfieldState.map(h.redraw); // update Mithril
    }
    const value = stream("");
    value.map(v => {
      if (textfieldState().el) {
        textfieldState().el.value = v;
      }
    });
    Object.assign(vnode.state, {
      textfieldState,
      value,
      redrawOnUpdate: stream.merge([textfieldState, value]) // for React
    });
  },
  view: vnode => {
    const state = vnode.state;
    return h("div", [
      h(TextField, {
        onChange: state.textfieldState,
        counter: 6,
        error: "You have exceeded the maximum number of characters."
      }),
      h("div", { style: { margin: "10px 0" } }, [
        h("div", { key: "focus" },   `focus: ${state.textfieldState().focus}`),
        h("div", { key: "dirty" },   `dirty: ${state.textfieldState().dirty}`),
        h("div", { key: "invalid" }, `invalid: ${state.textfieldState().invalid}`),
      ])
    ]);
  }
});
