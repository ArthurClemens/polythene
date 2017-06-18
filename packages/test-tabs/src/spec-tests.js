
export default ({ Tabs }) => {
  return [
    {
      name: "No options",
      component: Tabs
    },
    {
      name: "Option: id",
      component: Tabs,
      attrs: {
        id: "id-x"
      }
    },
    {
      name: "Option: class",
      component: Tabs,
      attrs: {
        className: "class-x"
      }
    },
    {
      name: "Option: className",
      component: Tabs,
      attrs: {
        className: "className-x"
      }
    },
    {
      name: "Option: element",
      component: Tabs,
      attrs: {
        element: "a"
      }
    },
    
  ];
};

