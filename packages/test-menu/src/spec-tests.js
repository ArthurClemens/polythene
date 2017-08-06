
export default ({ Menu }) => {
  return [
    {
      name: "No options",
      component: Menu,
      attrs: {
        permanent: true
      }
    },
    {
      name: "Option: id",
      component: Menu,
      attrs: {
        permanent: true,
        id: "id-x"
      }
    },
    {
      name: "Option: class",
      component: Menu,
      attrs: {
        permanent: true,
        className: "class-x"
      }
    },
    {
      name: "Option: className",
      component: Menu,
      attrs: {
        permanent: true,
        className: "className-x"
      }
    },
    {
      name: "Option: element",
      component: Menu,
      attrs: {
        permanent: true,
        element: "a"
      }
    },
    
  ];
};

