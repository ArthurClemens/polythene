
export default ({ Menu }) => {
  return [
    {
      name: "No options",
      component: Menu
    },
    {
      name: "Option: id",
      component: Menu,
      attrs: {
        id: "id-x"
      }
    },
    {
      name: "Option: class",
      component: Menu,
      attrs: {
        className: "class-x"
      }
    },
    {
      name: "Option: className",
      component: Menu,
      attrs: {
        className: "className-x"
      }
    },
    {
      name: "Option: element",
      component: Menu,
      attrs: {
        element: "a"
      }
    },
    
  ];
};

