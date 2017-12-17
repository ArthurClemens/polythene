import stream from "mithril/stream";

export default ({ h, TextField, RaisedButton }) => ({
  oninit: vnode => {
    const value = stream("");
    Object.assign(vnode.state, {
      value
    });
  },
  view: vnode => {
    const state = vnode.state;
    const value = state.value();
    return h("div", [
      h(TextField, {
        help: "Type text, or press ARROW RIGHT to insert a character programmaticaly",
        events: {
          oninput: h.withAttr("value", value => state.value(value)),
          onkeydown: e => {
            if (e.key === "ArrowRight") {
              state.value(value + String.fromCharCode(97 + Math.floor(Math.random() * 26)));
            }
          }
        },
        value
      }),
      h(RaisedButton, {
        label: "Clear",
        events: {
          onclick: () => state.value("")
        },
      })
    ]);
  }
});
