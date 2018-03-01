import stream from "mithril/stream";

export default ({ renderer: h, keys: k, Drawer, RaisedButton, createContent, repeats, drawerOpts }) => {

  return {
    oninit: vnode => {
      const drawerState = stream({ show: false, hide: false });
      Object.assign(vnode.state, {
        drawerState,
        redrawOnUpdate: stream.merge([drawerState]) // React: redraw whenever variables change
      });
    },
    view: vnode => {
      const state = vnode.state;
      const { show, hide } = state.drawerState();
      return [
        h(RaisedButton, {
          key: "button", // for React
          label: "Show",
          events: {
            [k.onclick]: () => state.drawerState({ show: true, hide })
          }
        }),
        h(Drawer, Object.assign(
          {},
          drawerOpts,
          {
            key: "drawer", // for React
            content: createContent({
              repeats,
              onClick: () => state.drawerState({ show, hide: true })
            }),
            show,
            hide,
            didHide: () => state.drawerState({ show: false, hide: false })
          }
        ))
      ];
    }
  };
};
