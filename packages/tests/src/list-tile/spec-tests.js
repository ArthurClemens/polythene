
export default ({ ListTile }) => {
  return [
    {
      name: "No options",
      component: ListTile
    },
    {
      name: "Option: id",
      component: ListTile,
      attrs: {
        id: "id-x"
      }
    },
    {
      name: "Option: class",
      component: ListTile,
      attrs: {
        className: "class-x"
      }
    },
    {
      name: "Option: className",
      component: ListTile,
      attrs: {
        className: "className-x"
      }
    },
    {
      name: "Option: element",
      component: ListTile,
      attrs: {
        element: "a"
      }
    },
    
  ];
};

