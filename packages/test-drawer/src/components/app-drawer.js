import stream from "mithril/stream";

export default ({ renderer: h, keys: k, Drawer, RaisedButton, createContent, repeats, drawerOpts }) => {

  return {
    oninit: vnode => {
      const show = stream(false);
      Object.assign(vnode.state, {
        show,
        redrawOnUpdate: stream.merge([show]) // React: redraw whenever variables change
      });
    },
    view: ({ state }) => {
      const show = state.show();
      return [
        h(RaisedButton, {
          key: "button", // for React
          label: "Show",
          events: {
            [k.onclick]: () => state.show(true)
          }
        }),
        h(Drawer, Object.assign(
          {},
          drawerOpts,
          {
            key: "drawer", // for React
            content: createContent({
              repeats,
              onClick: () => state.show(false)
            }),
            show,
            didHide: () => state.show(false) // sync state with component
          }
        ))
      ];
    }
  };
};
