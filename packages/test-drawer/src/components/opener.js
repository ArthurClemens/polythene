import stream from "mithril/stream";

const ipsum = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat. ";

export default ({ renderer: h, keys: k, Drawer, RaisedButton, drawerOpts }) => ({
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
    return h("div", null, [
      h(RaisedButton,
        {
          key: "button", // for React
          label: "Show drawer",
          events: {
            [k.onclick]: () => state.show(true)
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
                  show,
                  didHide: () => state.show(false)
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