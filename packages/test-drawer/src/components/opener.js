import stream from "mithril/stream";

export default ({ renderer: h, keys: k, target, Drawer, RaisedButton, content, drawerFn, transitionOptions, id, backdrop }) => ({
  oninit: vnode => {
    const show = stream(false);
    Object.assign(vnode.state, {
      show,
      redrawOnUpdate: stream.merge([show])
    });
  },
  view: vnode => {
    const state = vnode.state;
    const show = state.show();
    return h("div", null,
      [
        h(RaisedButton,
          {
            label: "Toggle drawer",
            id,
            events: {
              [k.onclick]: () => state.show(!show)
            }
          }
        ),
        drawerFn({
          show,
          target: target || (id ? `#${id}` : null),
          h,
          Drawer,
          content,
          transitionOptions,
          backdrop,
          didHide: () => state.show(false)
        })
      ]
    );
  }
});