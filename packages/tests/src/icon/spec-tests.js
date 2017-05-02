
export default ({ icon }) => {
  return [
    {
      name: "No options",
      component: icon
    },
    {
      name: "Option: id",
      component: icon,
      attrs: {
        id: "id-x"
      }
    },
    {
      name: "Option: className",
      component: icon,
      attrs: {
        className: "className-x"
      }
    },
    {
      name: "Option: class",
      component: icon,
      attrs: {
        class: "class-x"
      }
    },
    {
      name: "Option: element",
      component: icon,
      attrs: {
        element: "a"
      }
    },
  ];
};
