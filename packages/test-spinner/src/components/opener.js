import stream from "mithril/stream";

export default ({ renderer: h, keys: k, spinners=[{}], Spinner, RaisedButton }) => ({
  oninit: vnode => {
    const show = stream(false);
    vnode.state = {
      show,
      redrawOnUpdate: stream.merge([show])
    };
  },
  view: vnode => {
    const state = vnode.state;
    const show = state.show();
    return h("div",
      {
        style: { position: "relative" }
      },
      [
        h(RaisedButton, {
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