import stream from "mithril/stream";

export default ({ h, k, TextField, RaisedButton }) => ({
  oninit: vnode => {
    const hasFocus = stream(false);
    Object.assign(vnode.state, {
      hasFocus,
      redrawOnUpdate: stream.merge([hasFocus])
    });
  },
  view: vnode => {
    const state = vnode.state;
    const hasFocus = state.hasFocus();
    return h("div", [
      h(TextField, {
        label: "Your name",
        focus: hasFocus,
        onChange: newState => state.hasFocus(newState.focus)
      }),
      h(RaisedButton, {
        label: "Give focus",
        events: {
          [k.onclick]: () => state.hasFocus(true)
        }
      })
    ]);
  }
});
