
export default ({ ripple }) => {
  return [
    {
      name: "No options",
      component: ripple
    },
    {
      name: "Option: id",
      component: ripple,
      attrs: {
        id: "id-x"
      }
    },
    {
      name: "Option: className",
      component: ripple,
      attrs: {
        className: "className-x"
      }
    },
    {
      name: "Option: class",
      component: ripple,
      attrs: {
        class: "class-x"
      }
    },
    {
      name: "Option: element",
      component: ripple,
      attrs: {
        element: "a"
      }
    },
  ];
};
