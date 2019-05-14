
export default ({ h, a, TextField, Button }) => ({
  oninit: vnode => {
    Object.assign(vnode.state, {
      setInputState: undefined
    });
  },
  view: vnode => {
    const state = vnode.state;
    return h("div", null, [
      h(TextField, {
        label: "Your name",
        onChange: ({ setInputState }) => state.setInputState = setInputState
      }),
      h(Button, {
        raised: true,
        label: "Give focus",
        events: {
          [a.onclick]: () => state.setInputState({ focus: true })
        }
      })
    ]);
  }
});
