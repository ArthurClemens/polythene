import stream from "mithril/stream";

export default ({ h, k, TextField, RaisedButton }) => ({
  oninit: vnode => {
    const value = stream("");
    const setInputState = stream();
    Object.assign(vnode.state, {
      value,
      setInputState,
      redrawOnUpdate: stream.merge([value]) // for React
    });
  },
  view: vnode => {
    const state = vnode.state;
    const value = state.value();
    const setInputState = state.setInputState();
    return h("div", [
      h(TextField, {
        help: "Type text, or press ARROW RIGHT to insert a character programmaticaly",
        onChange: ({ value, setInputState }) => (
          state.value(value),
          state.setInputState(setInputState)
        ),
        events: {
          [k.onkeydown]: e => {
            if (e.key === "ArrowRight" || e.key === "Right") {
              const newValue = value + String.fromCharCode(97 + Math.floor(Math.random() * 26));
              setInputState({ value: newValue });
            }
          }
        },
        value,
      }),
      h(RaisedButton, {
        label: "Clear",
        events: {
          [k.onclick]: () => (
            setInputState({ focus: true, value: "" })
          )
        },
      })
    ]);
  }
});
