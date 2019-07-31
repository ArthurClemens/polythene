import stream from "mithril/stream";
import { styler } from "polythene-core-css";

const styles = [{
  " .tests-nested-tabs-main": {
    padding: "20px",
    background: "#fff",

    " h3": {
      margin: 0
    },
    " .text": {
      margin: "1rem 0 0 0"
    },
    " .sub-tabs": {
      marginTop: "20px",

      " .content": {
        padding: "20px",
        color: "#666",
        background: "#f0f0f0"
      },
      " h5": {
        margin: 0
      },
      " .text": {
        margin: "1rem 0 0 0"
      }
    }
  },
}];

styler.add("polythene-test-tabs-nested", styles);

const mainButtons = [
  { id: "new", label: "New" },
  { id: "favs", label: "Favs" },
  { id: "saved", label: "Saved" }
];

const subButtonsNew = [
  { id: "today", label: "Today" },
  { id: "weekly", label: "Weekly" }
];

const lorem = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

const subTabsNew = ({ h, Tabs }) => {
  const tabs = subButtonsNew;
  return {
    oninit: vnode => {
      const currentTabIndex = stream(0);
      Object.assign(vnode.state, {
        currentTabIndex,
        redrawOnUpdate: stream.merge([currentTabIndex]) // for React
      });
    },
    view: ({ state }) => {
      const currentTabIndex = state.currentTabIndex();
      return h(".sub-tabs",
        [
          h(Tabs, {
            tabs,
            autofit: true,
            onChange: ({ index }) => state.currentTabIndex(index)
          }),
          h(".content",
            // {
            //   key: "content"
            // },
            [
              h("h5",
                tabs[currentTabIndex].label
              ),
              h(".text",
                `${tabs[currentTabIndex].label} ${lorem}`
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
  const tabs = mainButtons;

  return {
    oninit: vnode => {
      const currentTabIndex = stream(0);
      Object.assign(vnode.state, {
        currentTabIndex,
        redrawOnUpdate: stream.merge([currentTabIndex]) // for React
      });
    },
    view: ({ state }) => {
      const currentTabIndex = state.currentTabIndex();
      const id = tabs[currentTabIndex].id;
      return h("div", null, [
        h(Tabs, {
          tabs,
          autofit: true,
          onChange: ({ index }) => state.currentTabIndex(index)
        }),
        h(".tests-nested-tabs-main",
          null,
          [
            h("h3",
              null,
              tabs[currentTabIndex].label
            ),
            h(".text",
              null,
              `${tabs[currentTabIndex].label} ${lorem}`
            ),
            h("div",
              null,
              id === "new" && h(SubTabsNew)
            )
          ]
        )
      ]);
    }
  };
};
