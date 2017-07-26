import stream from "mithril/stream";

export default ({ h, RaisedButton, Checkbox }) => ({
  oninit: vnode => {
    const checked = stream(false);
    vnode.state = {
      checked
    };
  },
  view: vnode => {
    const state = vnode.state;
    const checked = state.checked();
    return h("div", [
      h(Checkbox, {
        label: "Label",
        checked,
        events: {
          onclick: h.withAttr("checked", checked =>
            state.checked(checked)
          )
        }
      }),
      h("div", {
        style: {
          marginTop: "1rem"
        }
      }, h(RaisedButton, {
        label: "Toggle",
        events: {
          onclick: () => state.checked(!checked)
        }
      }))
    ]);
  }
});
