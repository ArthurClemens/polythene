
export default ({ List }) => {
  return [
    {
      name: "No options",
      component: List
    },
    {
      name: "Option: id",
      component: List,
      attrs: {
        id: "id-x"
      }
    },
    {
      name: "Option: class",
      component: List,
      attrs: {
        className: "class-x"
      }
    },
    {
      name: "Option: className",
      component: List,
      attrs: {
        className: "className-x"
      }
    },
    {
      name: "Option: element",
      component: List,
      attrs: {
        element: "a"
      }
    },
    
  ];
};

