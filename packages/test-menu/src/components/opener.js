import stream from "mithril/stream";

export default ({ renderer: h, keys: k, Menu, RaisedButton, List, ListTile, menuFn, transitionOptions, id }) => ({
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
        h(RaisedButton,
          {
            label: "Open menu",
            id,
            events: {
              [k.onclick]: () => state.show(true)
            }
          }
        ),
        menuFn({
          show,
          target: `#${id}`,
          h,
          Menu,
          List,
          ListTile,
          transitionOptions,
          didHide: () => state.show(false)
        })
      ]
    );
  }
});