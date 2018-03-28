import stream from "mithril/stream";

export default ({ h, k, Switch }) => ({
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
      h("div", {
        style: {
          marginBottom: "1rem"
        }
      },`Checked: ${checked}`),
      h(Switch, {
        events: {
          [k.onclick]: () => (console.log("click"), state.checked(!checked))
        },
        checked
      })
    ]);
  }
});
