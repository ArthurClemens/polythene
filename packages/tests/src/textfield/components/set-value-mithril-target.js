
export default ({ h, TextField }) => {
  const state = {
    value: "Some text",
    setInputState: undefined
  };

  return {
    view: () => {
      return h("div", [
        h(TextField, {
          help: "Type text, or press ARROW RIGHT to insert a character programmaticaly",
          defaultValue: state.value,
          onChange: ({ value, setInputState }) => (
            state.value = value,
            state.setInputState = setInputState
          ),
          events: {
            oninput: e => state.value = e.target.value,
            onkeydown: e => {
              if (e.key === "ArrowRight" || e.key === "Right") {
                state.setInputState({
                  value: state.value + String.fromCharCode(97 + Math.floor(Math.random() * 26))
                })
              }
            }
          },
        }),
        h("p", `Value: ${state.value}`)
      ]);
    }
  };
};
