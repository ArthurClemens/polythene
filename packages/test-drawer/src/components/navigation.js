import stream from "mithril/stream";

const iconMenuSVG = "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z\"/></svg>";

const ipsum = "<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat.</p>";
const longText = ipsum + ipsum;

export default ({ renderer: h, keys: k, Drawer, Toolbar, IconButton, createContent, pushToolbar, repeats, rtl, createTopContent, drawerOpts }) => {

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
      const navList = createContent({ repeats, onClick });
      const content = pushToolbar
        ? [
          h(Toolbar, { fullbleed: true, border: true }, createTopContent({ onClick })),
          navList
        ]
        : navList;

      const toolbarRow = [
        !drawerOpts.permanent && h(IconButton,
          {
            key: "icon",
            icon: { svg: { content: h.trust(iconMenuSVG) } },
            events: {
              [k.onclick]: () => show
                ? state.hide(true)
                : state.show(true)
            } 
          }
        ),
        h("div",
          {
            key: "title",
            className: "pe-toolbar__title"
          },
          "Title"
        ),
      ];

      const ToolbarInstance = h(Toolbar,
        {
          className: "tests-drawer-themed-toolbar", // style set in tests-generic.js
          tone: "dark",
          z: 1,
        },
        toolbarRow
      );

      const dirOpts = rtl
        ? { className: "pe-rtl" }
        : null;

      return h("div",
        dirOpts,
        [
          !pushToolbar && ToolbarInstance,
          h("div",
            {
              key: "content", // for React
              style: {
                position: "relative",
                overflow: "hidden",
              },
            },
            h("div",
              {
                style: {
                  display: "flex",
                  height: "350px",
                  background: "#fff",
                }
              },
              [
                h("div",
                  {
                    key: "drawer", // for React
                    style: {
                      padding: drawerOpts.floating ? "20px" : 0
                    }
                  },
                  h(Drawer, Object.assign(
                    {},
                    drawerOpts,
                    { content },
                    !drawerOpts.permanent && {
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
                h("div",
                  {
                    style: {
                      overflow: "hidden",
                      background: "#fff",
                      flexShrink: drawerOpts.permanent ? 1 : 0,
                      flexGrow: 0,
                      width: "100%",
                    }
                  },
                  [
                    pushToolbar && ToolbarInstance,
                    h("div",
                      {
                        style: {
                          padding: "20px"
                        }
                      },
                      h.trust(longText)
                    )
                  ]
                )
              ]
            )
          )
        ]
      );
    }
  };
};
