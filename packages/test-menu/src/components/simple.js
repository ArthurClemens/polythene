
export default ({ show, target, h, Menu, List, didHide, getState }) =>
  h(Menu, {
    target,
    show,
    didHide,
    getState,
    size: 2, 
    content: h(List,
      {
        all: {
          element: "a",
          ink: true,
          hoverable: true,
        },
      },
      [
        {
          title: "Yes",
          key: "yes" // for React
        },
        {
          title: "No",
          key: "no" // for React
        }
      ]
    )
  });
