import m from "mithril";
import { Drawer, Button, Icon, List, ListTile } from "polythene-mithril";
import { DrawerCSS } from "polythene-css";

const ipsum = "<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat.</p>";
const longText = m.trust(ipsum + ipsum + ipsum);

// const breakPointSmall = 480;
const breakPointDrawerSmall = 650;
const breakPointDrawerMedium = 900;

DrawerCSS.addStyle(
  ".small-screen-cover-drawer",
  {
    cover: true,
    backdrop: true,
    border: false,
  },
  {
    mediaQuery: `@media all and (max-width: ${breakPointDrawerSmall}px)`
  }
);
DrawerCSS.addStyle(
  ".medium-screen-mini-drawer",
  {
    mini: true,
    border: true,
  },
  {
    mediaQuery: `@media all and (min-width: ${breakPointDrawerSmall + 1}px) and (max-width: ${breakPointDrawerMedium}px)`
  }
);
DrawerCSS.addStyle(
  ".large-screen-floating-drawer",
  {
    permanent: true,
    floating: true,
    z: 1,
    border_radius: 4
  },
  {
    mediaQuery: `@media all and (min-width: ${breakPointDrawerMedium + 1}px)`
  }
);


const icons = {
  drafts: "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M21.99 8c0-.72-.37-1.35-.94-1.7L12 1 2.95 6.3C2.38 6.65 2 7.28 2 8v10c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2l-.01-10zM12 13L3.74 7.84 12 3l8.26 4.84L12 13z\"/></svg>",
  inbox: "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M19 3H4.99c-1.11 0-1.98.89-1.98 2L3 19c0 1.1.88 2 1.99 2H19c1.1 0 2-.9 2-2V5c0-1.11-.9-2-2-2zm0 12h-4c0 1.66-1.35 3-3 3s-3-1.34-3-3H4.99V5H19v10z\"/></svg>",
  star: "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z\"/></svg>",
  send: "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M2.01 21L23 12 2.01 3 2 10l15 2-15 2z\"/></svg>"
};

const navigationList = ({ handleClick }) => {

  const tile = ({ title, icon, index }) =>
    m(ListTile, {
      title,
      front: m(Icon, {
        svg: { content: m.trust(icon) }
      }),
      hoverable: true,
      navigation: true,
      events: {
        onclick: handleClick
      }
    });

  const nums = [1];

  return m(List, {
    hoverable: true,
    tiles: [].concat.apply([], nums.map((num, index) => ([
      {
        index,
        title: "Inbox",
        icon: icons.inbox,
      },
      {
        index,
        title: "Starred",
        icon: icons.star,
      },
      {
        index,
        title: "Sent mail",
        icon: icons.send,
      },
      {
        index,
        title: "Drafts",
        icon: icons.drafts,
      }
    ]))).map(tile)
  });
};


export const ResponsiveDrawer = () => {
  const state = {
    showDrawer: false
  };
  
  return {
    view: () => {
      return m(".responsive", [
        m("style", `
        .responsive .page {
          min-width: 320px;
          overflow: hidden;
          position: relative;
          margin: 0 -16px;
        }
        .responsive .drawer-content-wrapper {
          display: flex;
          height: 100vh;
          width: 100vw;
        }
        .responsive .content {
          padding: 20px;
          max-width: 480px;
        }
        @media (min-width: 900px) {
          .responsive .pe-drawer {
            margin: 20px;
          }
          #show-drawer-button {
            display: none;
          }
        }
        `),
        m(".page", 
          m(".drawer-content-wrapper", [
            m(Drawer, {
              className: "small-screen-cover-drawer medium-screen-mini-drawer large-screen-floating-drawer",
              permanent: true,
              show: state.showDrawer,
              content: navigationList({
                handleClick: () => state.showDrawer = false
              }),
              didHide: () => (
                state.showDrawer = false // sync state with component
              )
            }),
            m(".content", [
              m(Button, {
                raised: true,
                id: "show-drawer-button",
                label: "Show",
                events: {
                  onclick: () => (
                    state.showDrawer = true
                  )
                },
                disabled: state.showDrawer
              }),
              m("h1", "Title"),
              m("div", longText)
            ])
          ])
        )
      ]);
    }
  };
};
