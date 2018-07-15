
export default ({ show, target, h, Menu, List, didHide, getState, height, topMenu, className, exposed=true }) =>
  h(Menu, {
    className,
    didHide,
    exposed,
    getState,
    height,
    show,
    target,
    topMenu,
    width: 3,
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
