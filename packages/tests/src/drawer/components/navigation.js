import stream from "mithril/stream";

const iconMenuSVG = "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z\"/></svg>";
const ipsum = "<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat.</p>";

export default ({ h, a, Drawer, Toolbar, IconButton, createContent, showMenuIcon, pushToolbar, repeats, rtl, dark, createTopContent, drawerOpts }) => {

  const longText = h.trust(ipsum + ipsum + ipsum);

  return {
    oninit: vnode => {
      const show = stream(false);
      Object.assign(vnode.state, {
        show,
        redrawOnUpdate: stream.merge([show]) // for React
      });
    },
    view: vnode => {
      const state = vnode.state;
      const onClick = () => state.show(false);
      const navList = createContent({ repeats, onClick });
      const content = pushToolbar
        ? [
          h(Toolbar, { fullbleed: true, border: true }, createTopContent({ onClick })),
          navList
        ]
        : navList;

      const toolbarRow = [
        showMenuIcon && h(IconButton,
          {
            key: "icon",
            icon: { svg: { content: h.trust(iconMenuSVG) } },
            events: {
              [a.onclick]: () => state.show()
                ? state.show(false)
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
          shadowDepth: 1,
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
                  background: dark ? "inherit" : "#fff",
                  color: dark ? "#ccc" : "#333"
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
                    showMenuIcon && {
                      show: state.show(),
                      didHide: () => state.show(false)
                    }
                  ))
                ),
                h("div",
                  {
                    style: {
                      overflow: "auto",
                      flexShrink: !showMenuIcon ? 1 : 0,
                      flexGrow: 0,
                      width: drawerOpts.mini 
                        ? "calc(100% - 56px)"
                        : "100%"
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
                      longText
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
