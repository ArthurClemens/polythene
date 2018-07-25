import stream from "mithril/stream";

export default ({ renderer: h, keys: k, spinners=[{}], Spinner, Button }) => ({
  oninit: vnode => {
    const show = stream(false);
    Object.assign(vnode.state, {
      show,
      redrawOnUpdate: stream.merge([show]) // for React
    });
  },
  view: vnode => {
    const state = vnode.state;
    const show = state.show();
    return h("div",
      {
        style: { position: "relative" }
      },
      [
        h(Button, {
          raised: true,
          label: "Toggle",
          events: {
            [k.onclick]: () => state.show(!show)
          }
        }),
        h("div",
          {
            style: {
              display: "flex",
              margin: "20px 0 0 0"
            }
          },
          spinners.map(attrs => 
            h("div",
              { style: { marginRight: "20px" } },
              h(Spinner, Object.assign(
                {},
                attrs,
                { show }
              ))
            )
          )
        )
      ]
    );
  }
});