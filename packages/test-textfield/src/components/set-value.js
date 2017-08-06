import stream from "mithril/stream";

export default ({ h, k, TextField, RaisedButton }) => ({
  oninit: vnode => {
    const value = stream("");
    const focus = stream(false);
    vnode.state = {
      value,
      focus,
      redrawOnUpdate: stream.merge([value]) // for React
    };
  },
  view: vnode => {
    const state = vnode.state;
    const value = state.value();
    const focus = state.focus();
    return h("div", [
      h(TextField, {
        help: "Type text, or press ARROW RIGHT to insert a character programmaticaly",
        onChange: ({ value, focus }) => (
          state.value(value),
          state.focus(focus)
        ),
        events: {
          [k.onkeydown]: e => {
            if (e.key === "ArrowRight") {
              state.value(value + String.fromCharCode(97 + Math.floor(Math.random() * 26)));
            }
          }
        },
        value,
        focus
      }),
      h(RaisedButton, {
        label: "Clear",
        events: {
          [k.onclick]: () => (
            state.value(""),
            state.focus(true)
          )
        },
      })
    ]);
  }
});
