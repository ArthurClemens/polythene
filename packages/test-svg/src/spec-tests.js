
export default ({ SVG }) => {
  return [
    {
      name: "No options",
      component: SVG
    },
    {
      name: "Option: id",
      component: SVG,
      attrs: {
        id: "id-x"
      }
    },
    {
      name: "Option: class",
      component: SVG,
      attrs: {
        className: "class-x"
      }
    },
    {
      name: "Option: className",
      component: SVG,
      attrs: {
        className: "className-x"
      }
    },
    {
      name: "Option: element",
      component: SVG,
      attrs: {
        element: "a"
      }
    },
    
  ];
};

