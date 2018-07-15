import stream from "mithril/stream";

export default ({ h, k, Shadow }) => ({
  oninit: vnode => {
    const shadowDepth = stream(1);
    Object.assign(vnode.state, {
      shadowDepth,
      redrawOnUpdate: stream.merge([shadowDepth]) // for React
    });
  },
  view: vnode => {
    const state = vnode.state;
    const shadowDepth = state.shadowDepth();
    return h("div", null, [
      h(".absolute.absolute--fill",
        {
          style: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          },
          [k.onclick]: () => state.shadowDepth((shadowDepth + 1) % 6)
        },
        `Current shadow depth: ${shadowDepth}. Click to change.`
      ),
      h(Shadow, {
        animated: true,
        shadowDepth
      })
    ]);
  }
});
