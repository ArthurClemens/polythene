
export default ({ Drawer }) => {
  return [
    {
      name: "No options",
      component: Drawer
    },
    {
      name: "Option: id",
      component: Drawer,
      attrs: {
        id: "id-x"
      }
    },
    {
      name: "Option: className",
      component: Drawer,
      attrs: {
        className: "className-x"
      }
    },
    {
      name: "Option: class",
      component: Drawer,
      attrs: {
        className: "class-x"
      }
    },

  ];
};
