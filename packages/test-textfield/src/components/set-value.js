import stream from "mithril/stream";

export default ({ h, k, TextField, RaisedButton }) => ({
  oninit: vnode => {
    const value = stream("");
    vnode.state = {
      value,
      redrawOnUpdate: stream.merge([value]) // for React
    };
  },
  view: vnode => {
    const state = vnode.state;
    const value = state.value();
    return h("div", [
      h(TextField, {
        help: "Type text, or press ARROW RIGHT to insert a character programmaticaly",
        onChange: newState => state.value(newState.value),
        events: {
          [k.onkeydown]: e => {
            if (e.which === 39) {
              // KEY RIGHT
              state.value(value + String.fromCharCode(97 + Math.floor(Math.random() * 26)));
            }
          }
        },
        value
      }),
      h(RaisedButton, {
        label: "Clear",
        events: {
          [k.onclick]: () => state.value("")
        },
      })
    ]);
  }
});
