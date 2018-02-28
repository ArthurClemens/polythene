import stream from "mithril/stream";

export default ({ renderer: h, keys: k, Drawer, RaisedButton, createContent, repeats, drawerOpts }) => {

  return {
    oninit: vnode => {
      const show = stream(false);
      const hide = stream(false);
      Object.assign(vnode.state, {
        show,
        hide,
        redrawOnUpdate: stream.merge([show, hide])
      });
    },
    view: vnode => {
      const state = vnode.state;
      const show = state.show();
      const hide = state.hide();
      const onClick = () => state.hide(true);
      const content = createContent({ repeats, onClick });
      return [
        h(RaisedButton, {
          label: "Show",
          events: {
            [k.onclick]: () => (
              state.show(true)
              // state.hide(!hide)
            )
          }
        }),
        h(Drawer, Object.assign(
          {},
          drawerOpts,
          {
            content,
            show,
            hide,
            didShow: () => (
              state.show(true),
              state.hide(false)
            ),
            didHide: () => (
              state.show(false),
              state.hide(false)
            )
          }
        ))
      ];
    }
  };
};
