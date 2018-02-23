import stream from "mithril/stream";

const ipsum = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat. ";

export default ({ renderer: h, keys: k, Drawer, RaisedButton, createContent, drawerOpts }) => ({
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
    const content = createContent({ isLong: true, onClick });
    return h("div", null, [
      h(RaisedButton,
        {
          key: "button", // for React
          label: "Toggle drawer",
          events: {
            [k.onclick]: () => show
              ? state.hide(true)
              : state.show(true)
          }
        }
      ),
      h("div",
        {
          key: "content", // for React
          style: {
            position: "relative",
            marginTop: "24px",
            overflow: "hidden",
          },
        },
        h("div",
          {
            style: {
              display: "flex",
              height: "350px",
            }
          },
          [
            h("nav",
              {
                key: "drawer", // for React
              },
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
            ),
            h("main",
              {
                key: "main", // for React
                style: {
                  background: "#ffeb3b",
                  padding: "1rem",
                  flexShrink: 0,
                  flexGrow: 0,
                  width: "100%",
                }
              },
              ipsum + ipsum
            )
          ]
        )
      )
    ]);
  }
});