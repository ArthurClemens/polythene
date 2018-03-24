
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
        offset: -4,
        size: 2,
        content: h(List, [
          h(ListTile, {
            element: "a",
            title: "Yes",
            ink: true,
            hoverable: true,
            key: "yes" // for React
          }),
          h(ListTile, {
            element: "a",
            title: "No",
            ink: true,
            hoverable: true,
            key: "no" // for React
          })
        ])
      }
    )
  );
