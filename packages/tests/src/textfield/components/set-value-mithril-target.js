import stream from "mithril/stream";

export default ({ h, TextField }) => ({
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
          oninput: e => state.value(e.target.value),
          onkeydown: e => {
            if (e.key === "ArrowRight" || e.key === "Right") {
              state.value(value + String.fromCharCode(97 + Math.floor(Math.random() * 26)));
            }
          }
        },
        value
      })
    ]);
  }
});
