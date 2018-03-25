import stream from "mithril/stream";

const mainButtons = [
  { id: "new", label: "New" },
  { id: "favs", label: "My Favorites" },
  { id: "saved", label: "Saved" }
];

const subButtonsNew = [
  { id: "today", label: "Today" },
  { id: "weekly", label: "Weekly chart" }
];

const lorem = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

const subTabsNew = ({ h, Tabs }) => {
  return {
    oninit: vnode => {
      const tab = stream({ options: subButtonsNew[0] });
      Object.assign(vnode.state, {
        tab,
        redrawOnUpdate: stream.merge([tab]) // for React
      });
    },
    view: vnode => {
      const state = vnode.state;
      const tab = state.tab();

      return h("div",
        {
          style: {
            marginTop: "20px"
          }
        },
        [
          h(Tabs, {
            tabs: subButtonsNew,
            autofit: true,
            onChange: newTab => state.tab(newTab)
          }),
          h("div",
            {
              style: {
                padding: "20px",
                color: "#666",
                background: "#f0f0f0"
              }
            },
            [
              h("h5",
                {
                  style: {
                    margin: 0
                  }
                },
                tab.options.label
              ),
              h("div",
                {
                  style: {
                    margin: "1rem 0 0 0"
                  }
                },
                `${tab.options.label} ${lorem}`
              ),
            ]
          )
        ]
      );
    }
  };
};

export default ({ h, Tabs }) => {
  const SubTabsNew = subTabsNew({ h, Tabs });

  return {
    oninit: vnode => {
      const tab = stream({ options: mainButtons[0] });
      Object.assign(vnode.state, {
        tab,
        redrawOnUpdate: stream.merge([tab]) // for React
      });
    },
    view: vnode => {
      const state = vnode.state;
      const tab = state.tab();

      return h("div", [
        h(Tabs, {
          tabs: mainButtons,
          autofit: true,
          onChange: newTab => state.tab(newTab)
        }),
        h("div",
          {
            style: {
              padding: "20px",
              background: "#fff"
            }
          },
          [
            h("h3",
              {
                style: {
                  margin: 0
                }
              },
              tab.options.label
            ),
            h("div",
              { style:
                {
                  margin: "1rem 0 0 0"
                }
              },
              `${tab.options.label} ${lorem}`
            ),
            tab.options.id === "new" && h(SubTabsNew)
          ]
        )
      ]);
    }
  };
};

