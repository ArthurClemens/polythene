
export default ({ show, target, h, Menu, List, didHide, getState }) =>
  h(Menu, {
    target,
    show,
    didHide,
    getState,
    width: 3,
    exposed: true,
    content: h(List,
      {
        all: {
          element: "a",
          ink: true,
          hoverable: true,
        },
      },
      [1,2,3,4].map(n => ({
        title: `Menu item ${n}`,
        key: n, // for React
      }))
    )
  });
