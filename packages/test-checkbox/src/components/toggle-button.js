import stream from "mithril/stream";

export default ({ h, k, Button, Checkbox }) => ({
  oninit: vnode => {
    const checked = stream(false);
    Object.assign(vnode.state, {
      checked,
      redrawOnUpdate: stream.merge([checked]) // for React
    });
  },
  view: vnode => {
    const state = vnode.state;
    const checked = state.checked();
    return h("div", [
      h(Checkbox, {
        label: "Label",
        onChange: newState => state.checked(newState.checked),
        checked
      }),
      h("div",
        {
          style: { marginTop: "1rem" }
        },
        h(Button, {
          raised: true,
          label: "Toggle",
          events: {
            [k.onclick]: () => state.checked(!checked)
          }
        })
      )
    ]);
  }
});
