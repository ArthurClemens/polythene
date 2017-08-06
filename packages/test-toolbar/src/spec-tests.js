
export default ({ Toolbar }) => {
  return [
    {
      name: "No options",
      component: Toolbar
    },
    {
      name: "Option: id",
      component: Toolbar,
      attrs: {
        id: "id-x"
      }
    },
    {
      name: "Option: class",
      component: Toolbar,
      attrs: {
        className: "class-x"
      }
    },
    {
      name: "Option: className",
      component: Toolbar,
      attrs: {
        className: "className-x"
      }
    },
    {
      name: "Option: element",
      component: Toolbar,
      attrs: {
        element: "a"
      }
    },
    
  ];
};

