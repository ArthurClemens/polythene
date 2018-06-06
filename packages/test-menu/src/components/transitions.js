
export default ({ show, target, h, Menu, List, ListTile, didHide, getState, transitionOptions, className }) =>
  h(Menu,
    Object.assign(
      {}, 
      transitionOptions,
      {
        target,
        className,
        show,
        didHide,
        getState,
        size: 3,
        content: h(List, [
          h(ListTile, {
            element: "a",
            title: "Menu item 1",
            ink: true,
            hoverable: true,
            key: "yes" // for React
          }),
          h(ListTile, {
            element: "a",
            title: "Menu item 2",
            ink: true,
            hoverable: true,
            key: "no" // for React
          })
        ])
      }
    )
  );
