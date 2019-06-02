
const icons = {
  drafts: "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M21.99 8c0-.72-.37-1.35-.94-1.7L12 1 2.95 6.3C2.38 6.65 2 7.28 2 8v10c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2l-.01-10zM12 13L3.74 7.84 12 3l8.26 4.84L12 13z\"/></svg>",
  inbox: "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M19 3H4.99c-1.11 0-1.98.89-1.98 2L3 19c0 1.1.88 2 1.99 2H19c1.1 0 2-.9 2-2V5c0-1.11-.9-2-2-2zm0 12h-4c0 1.66-1.35 3-3 3s-3-1.34-3-3H4.99V5H19v10z\"/></svg>",
  star: "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z\"/></svg>",
  send: "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M2.01 21L23 12 2.01 3 2 10l15 2-15 2z\"/></svg>"
};

// Style for class "tests-drawer-navigation-list" is created in scripts/writeThemeCSS.js

export default ({ renderer: h, Icon, List, ListTile, onClick=()=>{} }) => {

  const tile = ({ title, icon, index }) =>
    h(ListTile, {
      title,
      key: `${title}-${index}`, // for React
      className: "tests-drawer-navigation-list",
      front: h(Icon, {
        svg: { content: h.trust(icon) }
      }),
      hoverable: true,
      navigation: true,
      events: {
        onclick: onClick
      }
    });

  const nums = [1];

  return h(List, {
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
