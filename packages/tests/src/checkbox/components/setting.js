import stream from "mithril/stream";

export default ({ h, Checkbox }) => ({
  oninit: vnode => {
    const checked = stream(false);
    vnode.state = {
      checked,
      redrawOnUpdate: stream.merge([checked])
    };
  },
  view: vnode => {
    const state = vnode.state;
    const checked = state.checked();
    return h("div", [
      h(Checkbox, {
        label: "Initiator",
        getState: newState => state.checked(newState.checked)
      }),
      h(Checkbox, {
        label: "Result",
        disabled: true,
        checked: () => checked
      }),
    ]);
  }
});
