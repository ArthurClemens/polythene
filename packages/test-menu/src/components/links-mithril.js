
export default ({ show, target, h, Menu, List, didHide, getState }) =>
  h(Menu, {
    target,
    show,
    didHide,
    getState,
    width: 5, 
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
          title: "Link to Shadow",
          url: {
            href: "/shadow",
            oncreate: h.route.link
          }
        },
        {
          title: "Link to Button",
          url: {
            href: "/button",
            oncreate: h.route.link
          }
        },
      ]
    )
  });
