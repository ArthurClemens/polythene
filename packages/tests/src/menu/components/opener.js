import stream from "mithril/stream";

export default ({ h, a, Menu, button, Button, List, ListTile, menuFn, transitionOptions, className, id, dropdown, height, topMenu, exposed, offsetV }) => ({
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
        style: {
          position: "relative",
          height: "inherit",
        }
      },
      [
        h(button || Button,
          {
            raised: true,
            label: "Open menu",
            id,
            events: {
              [a.onclick]: () => state.show(true)
            },
            dropdown: dropdown
              ? {
                open: show
              }
              : null
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
          className,
          didHide: () => state.show(false),
          height,
          topMenu,
          exposed,
          offsetV,
        })
      ]
    );
  }
});