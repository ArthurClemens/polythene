
export default ({ show, target, h, Menu, List, didHide, getState, height, topMenu, exposed=true }) =>
  h(Menu, {
    target,
    show,
    didHide,
    getState,
    width: 3,
    height,
    topMenu,
    exposed,
    content: h(List,
      {
        all: {
          element: "a",
          ink: true,
          hoverable: true,
        },
      },
      [1,2,3,4,5,6,7,8].map(n => ({
        title: `Menu item ${n}`,
        key: n, // for React
      }))
    )
  });
