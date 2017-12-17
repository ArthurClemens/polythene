import stream from "mithril/stream";

export default ({
  h,
  Slider,
  displayFn = value =>
    `Value: ${(value === undefined)
      ? "Not set"
      : Math.floor(value * 100) / 100}`,
  attrs
}) => ({
  oninit: vnode => {
    const value = stream(attrs.defaultValue || attrs.value || 0);
    Object.assign(vnode.state, {
      value,
      redrawOnUpdate: stream.merge([value])
    });
  },
  view: vnode => {
    const state = vnode.state;
    const value = state.value();
    return h("div", [
      h("div",
        {
          style: {
            margin: "0 0 1rem 0"
          }
        },
        displayFn(value)
      ),
      h(Slider, Object.assign(
        {},
        attrs,
        {
          onChange: newState => state.value(newState.value)
        }
      ))
    ]);
  }
});
