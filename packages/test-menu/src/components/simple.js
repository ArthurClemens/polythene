
export default ({ show, target, h, Menu, List, ListTile, didHide, getState }) =>
  h(Menu, {
    target,
    show,
    didHide,
    getState,
    size: 2, 
    content: h(List, [
      h(ListTile, {
        element: "a",
        title: "Yes",
        ink: true,
        hoverable: true,
      }),
      h(ListTile, {
        element: "a",
        title: "No",
        ink: true,
        hoverable: true,
      })
    ])
  });
