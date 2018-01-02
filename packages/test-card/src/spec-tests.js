
export default ({ Card, keys }) => {
  return [
    {
      name: "No options",
      component: Card
    },
    {
      name: "Option: id",
      component: Card,
      attrs: {
        id: "id-x"
      }
    },
    {
      name: "Option: className",
      component: Card,
      attrs: {
        className: "className-x"
      }
    },
    {
      name: "Option: primary className",
      component: Card,
      attrs: {
        content: [
          {
            primary: {
              className: "className-primary"
            }
          }
        ]
      }
    },
    {
      name: "Option: class",
      component: Card,
      attrs: {
        className: "class-x"
      }
    },
    {
      name: "Option: element",
      component: Card,
      attrs: {
        element: "a"
      }
    },
    {
      name: "Option: tabindex",
      component: Card,
      attrs: {
        [keys.tabindex]: 3
      }
    },
  ];
};
