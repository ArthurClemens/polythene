
export default ({ Search }) => {
  return [
    {
      name: "No options",
      component: Search
    },
    {
      name: "Option: id",
      component: Search,
      attrs: {
        id: "id-x"
      }
    },
    {
      name: "Option: class",
      component: Search,
      attrs: {
        className: "class-x"
      }
    },
    {
      name: "Option: className",
      component: Search,
      attrs: {
        className: "className-x"
      }
    },
    {
      name: "Option: element",
      component: Search,
      attrs: {
        element: "a"
      }
    },
    
  ];
};

