
export default ({ show, target, h, Menu, List, ListTile, didHide, getState }) =>
  h(Menu, {
    target,
    show,
    didHide,
    getState,
    offset: -4,
    content: h(List, [
      h(ListTile, {
        title: "Yes",
        ink: true,
        hoverable: true,
      }),
      h(ListTile, {
        title: "No",
        ink: true,
        hoverable: true,
      })
    ])
  });
